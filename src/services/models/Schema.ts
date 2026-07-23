import { action, observable, makeObservable } from 'mobx';

import type { OpenAPIExternalDocumentation, OpenAPISchema, Referenced } from '../../types';

import type { OpenAPIParser } from '../OpenAPIParser';
import { pushRef } from '../OpenAPIParser';
import type { RedocNormalizedOptions } from '../RedocNormalizedOptions';
import { FieldModel } from './Field';

import { MergedOpenAPISchema } from '../types';
import {
  detectType,
  extractExtensions,
  humanizeConstraints,
  isArray,
  isBoolean,
  isNamedDefinition,
  isObject,
  isPrimitiveType,
  JsonPointer,
  pluralizeType,
  sortByField,
  sortByRequired,
} from '../../utils/';

import { l } from '../Labels';

// TODO: refactor this model, maybe use getters instead of copying all the values
export class SchemaModel {
  pointer: string;

  type: string | string[];
  displayType: string;
  typePrefix: string = '';
  title: string;
  description: string;
  externalDocs?: OpenAPIExternalDocumentation;

  isPrimitive: boolean;
  isCircular: boolean = false;

  format?: string;
  displayFormat?: string;
  nullable: boolean;
  deprecated: boolean;
  pattern?: string;
  example?: any;
  examples?: any[];
  enum: any[];
  default?: any;
  readOnly: boolean;
  writeOnly: boolean;

  constraints: string[];

  fields?: FieldModel[];
  items?: SchemaModel;

  oneOf?: SchemaModel[];
  oneOfType: string;
  discriminatorProp: string;
  @observable
  activeOneOf: number = 0;

  rawSchema: OpenAPISchema;
  schema: MergedOpenAPISchema;
  extensions?: Record<string, any>;
  'x-enumDescriptions': { [name: string]: string };
  const: any;
  contentEncoding?: string;
  contentMediaType?: string;
  minItems?: number;
  maxItems?: number;

  /**
   * @param isChild if schema discriminator Child
   * When true forces dereferencing in allOfs even if circular
   */
  constructor(
    parser: OpenAPIParser,
    schemaOrRef: Referenced<OpenAPISchema>,
    pointer: string,
    private options: RedocNormalizedOptions,
    isChild: boolean = false,
    private refsStack: string[] = [],
  ) {
      throw new Error("STUB");
  }

  /**
   * Set specified alternative schema as active
   * @param idx oneOf index
   */
  @action
  activateOneOf(idx: number) {
      throw new Error("STUB");
  }

  hasType(type: string) {
    return this.type === type || (isArray(this.type) && this.type.includes(type));
  }

  init(parser: OpenAPIParser, isChild: boolean) {
    const schema = this.schema;
    this.isCircular = !!schema['x-circular-ref'];

    this.title =
      schema.title || (isNamedDefinition(this.pointer) && JsonPointer.baseName(this.pointer)) || '';
    this.description = schema.description || '';
    this.type = schema.type || detectType(schema);
    this.format = schema.format;
    this.enum = schema.enum || [];
    this['x-enumDescriptions'] = schema['x-enumDescriptions'];
    this.example = schema.example;
    this.examples = schema.examples;
    this.deprecated = !!schema.deprecated;
    this.pattern = schema.pattern;
    this.externalDocs = schema.externalDocs;

    this.constraints = humanizeConstraints(schema);
    this.displayFormat = this.format;
    this.isPrimitive = isPrimitiveType(schema, this.type);
    this.default = schema.default;
    this.readOnly = !!schema.readOnly;
    this.writeOnly = !!schema.writeOnly;
    this.const = schema.const || '';
    this.contentEncoding = schema.contentEncoding;
    this.contentMediaType = schema.contentMediaType;
    this.minItems = schema.minItems;
    this.maxItems = schema.maxItems;

    if (!!schema.nullable || schema['x-nullable']) {
      if (isArray(this.type) && !this.type.some(value => { throw new Error("STUB"); })) {
        this.type = [...this.type, 'null'];
      } else if (!isArray(this.type) && (this.type !== null || this.type !== 'null')) {
        this.type = [this.type, 'null'];
      }
    }

    this.displayType = isArray(this.type)
      ? this.type.map(item => { throw new Error("STUB"); }).join(' or ')
      : this.type;

    if (this.isCircular) {
      return;
    }

    if ((schema.if && schema.then) || (schema.if && schema.else)) {
      this.initConditionalOperators(schema, parser);
      return;
    }

    if (!isChild && getDiscriminator(schema) !== undefined) {
      this.initDiscriminator(schema, parser);
      return;
    } else if (
      isChild &&
      isArray(schema.oneOf) &&
      schema.oneOf.find(s => { throw new Error("STUB"); })
    ) {
      // we hit allOf of the schema with the parent discriminator
      delete schema.oneOf;
    }

    if (schema.oneOf !== undefined) {
      this.initOneOf(schema.oneOf, parser);
      this.oneOfType = 'One of';
      if (schema.anyOf !== undefined) {
        console.warn(
          `oneOf and anyOf are not supported on the same level. Skipping anyOf at ${this.pointer}`,
        );
      }
      return;
    }

    if (schema.anyOf !== undefined) {
      this.initOneOf(schema.anyOf, parser);
      this.oneOfType = 'Any of';
      return;
    }

    if (this.hasType('object')) {
      this.fields = buildFields(parser, schema, this.pointer, this.options, this.refsStack);
    } else if (this.hasType('array')) {
      if (isArray(schema.items) || isArray(schema.prefixItems)) {
        this.fields = buildFields(parser, schema, this.pointer, this.options, this.refsStack);
      } else if (schema.items) {
        this.items = new SchemaModel(
          parser,
          schema.items as OpenAPISchema,
          this.pointer + '/items',
          this.options,
          false,
          this.refsStack,
        );
      }

      this.displayType =
        schema.prefixItems || isArray(schema.items)
          ? 'items'
          : pluralizeType(this.items?.displayType || this.displayType);
      this.displayFormat = this.items?.format || '';
      this.typePrefix = this.items?.typePrefix || '' + l('arrayOf');
      this.title = this.title || this.items?.title || '';
      this.isPrimitive =
        this.items?.isPrimitive !== undefined ? this.items?.isPrimitive : this.isPrimitive;

      if (this.example === undefined && this.items?.example !== undefined) {
        this.example = [this.items.example];
      }
      if (this.items?.isPrimitive) {
        this.enum = this.items.enum;
        this['x-enumDescriptions'] = this.items['x-enumDescriptions'];
      }
      if (isArray(this.type)) {
        const filteredType = this.type.filter(item => { throw new Error("STUB"); });
        if (filteredType.length) this.displayType += ` or ${filteredType.join(' or ')}`;
      }
    }

    if (this.enum.length && this.options.sortEnumValuesAlphabetically) {
      this.enum.sort();
    }
  }

  private initOneOf(oneOf: OpenAPISchema[], parser: OpenAPIParser) {
    this.oneOf = oneOf!.map((variant, idx) => {
        throw new Error("STUB");
    });

    if (this.options.simpleOneOfTypeLabel) {
      const types = collectUniqueOneOfTypesDeep(this);
      this.displayType = types.join(' or ');
    } else {
      this.displayType = this.oneOf
        .map(schema => {
            throw new Error("STUB");
        })
        .join(' or ');
    }
  }

  private initDiscriminator(schema: OpenAPISchema, parser: OpenAPIParser) {
    const discriminator = getDiscriminator(schema)!;
    this.discriminatorProp = discriminator.propertyName;
    const implicitInversedMapping = parser.findDerived([
      ...(this.schema['x-parentRefs'] || []),
      this.pointer,
    ]);

    if (schema.oneOf) {
      for (const variant of schema.oneOf) {
        if (variant.$ref === undefined) {
          continue;
        }
        const name = JsonPointer.baseName(variant.$ref);
        implicitInversedMapping[variant.$ref] = name;
      }
    }

    const mapping = discriminator.mapping || {};

    // Defines if the mapping is exhaustive. This avoids having references
    // that overlap with the mapping entries
    let isLimitedToMapping = discriminator['x-explicitMappingOnly'] || false;
    // if there are no mappings, assume non-exhaustive
    if (Object.keys(mapping).length === 0) {
      isLimitedToMapping = false;
    }

    const explicitInversedMapping = {};
    for (const name in mapping) {
      const $ref = mapping[name];

      if (isArray(explicitInversedMapping[$ref])) {
        explicitInversedMapping[$ref].push(name);
      } else {
        // overrides implicit mapping here
        explicitInversedMapping[$ref] = [name];
      }
    }

    const inversedMapping = isLimitedToMapping
      ? { ...explicitInversedMapping }
      : { ...implicitInversedMapping, ...explicitInversedMapping };

    let refs: Array<{ $ref; name }> = [];

    for (const $ref of Object.keys(inversedMapping)) {
      const names = inversedMapping[$ref];
      if (isArray(names)) {
        for (const name of names) {
          refs.push({ $ref, name });
        }
      } else {
        refs.push({ $ref, name: names });
      }
    }

    // Make the listing respects the mapping
    // in case a mapping is defined, the user usually wants to have the order shown
    // as it was defined in the yaml. This will sort the names given the provided
    // mapping (if provided).
    // The logic is:
    // - If a name is among the mapping, promote it to first
    // - Names among the mapping are sorted by their order in the mapping
    // - Names outside the mapping are sorted alphabetically
    const names = Object.keys(mapping);
    if (names.length !== 0) {
      refs = refs.sort((left, right) => {
          throw new Error("STUB");
      });
    }

    this.oneOf = refs.map(({ $ref, name }) => {
        throw new Error("STUB");
    });
  }

  private initConditionalOperators(schema: OpenAPISchema, parser: OpenAPIParser) {
    const {
      if: ifOperator,
      else: elseOperator = {},
      then: thenOperator = {},
      ...restSchema
    } = schema;
    const groupedOperators = [
      {
        allOf: [restSchema, thenOperator, ifOperator],
        title: (ifOperator && ifOperator['x-displayName']) || ifOperator?.title || 'case 1',
      },
      {
        allOf: [restSchema, elseOperator],
        title: (elseOperator && elseOperator['x-displayName']) || elseOperator?.title || 'case 2',
      },
    ];

    this.oneOf = groupedOperators.map(
      (variant, idx) =>
        { throw new Error("STUB"); },
    );
    this.oneOfType = 'One of';
  }
}

function buildFields(
  parser: OpenAPIParser,
  schema: OpenAPISchema,
  $ref: string,
  options: RedocNormalizedOptions,
  refsStack: string[],
): FieldModel[] {
  const props = schema.properties || schema.prefixItems || schema.items || {};
  const patternProps = schema.patternProperties || {};
  const additionalProps = schema.additionalProperties || schema.unevaluatedProperties;
  const itemsProps = schema.prefixItems ? schema.items : schema.additionalItems;
  const defaults = schema.default;
  let fields = Object.keys(props || []).map(fieldName => {
      throw new Error("STUB");
  });

  if (options.sortPropsAlphabetically) {
    fields = sortByField(fields, 'name');
  }
  if (options.sortRequiredPropsFirst) {
    // if not sort alphabetically sort in the order from required keyword
    fields = sortByRequired(fields, !options.sortPropsAlphabetically ? schema.required : undefined);
  }

  fields.push(
    ...Object.keys(patternProps).map(fieldName => {
        throw new Error("STUB");
    }),
  );

  if (typeof additionalProps === 'object' || additionalProps === true) {
    fields.push(
      new FieldModel(
        parser,
        {
          name: (typeof additionalProps === 'object'
            ? additionalProps['x-additionalPropertiesName'] || 'property name'
            : 'property name'
          ).concat('*'),
          required: false,
          schema: additionalProps === true ? {} : additionalProps,
          kind: 'additionalProperties',
        },
        $ref + '/additionalProperties',
        options,
        refsStack,
      ),
    );
  }

  fields.push(
    ...buildAdditionalItems({
      parser,
      schema: itemsProps,
      fieldsCount: fields.length,
      $ref,
      options,
      refsStack,
    }),
  );

  return fields;
}

function buildAdditionalItems({
  parser,
  schema = false,
  fieldsCount,
  $ref,
  options,
  refsStack,
}: {
  parser: OpenAPIParser;
  schema?: OpenAPISchema | OpenAPISchema[] | boolean;
  fieldsCount: number;
  $ref: string;
  options: RedocNormalizedOptions;
  refsStack: string[];
}) {
  if (isBoolean(schema)) {
    return schema
      ? [
          new FieldModel(
            parser,
            {
              name: `[${fieldsCount}...]`,
              schema: {},
            },
            `${$ref}/additionalItems`,
            options,
            refsStack,
          ),
        ]
      : [];
  }

  if (isArray(schema)) {
    return [
      ...schema.map(
        (field, idx) =>
          { throw new Error("STUB"); },
      ),
    ];
  }

  if (isObject(schema)) {
    return [
      new FieldModel(
        parser,
        {
          name: `[${fieldsCount}...]`,
          schema: schema,
        },
        `${$ref}/additionalItems`,
        options,
        refsStack,
      ),
    ];
  }

  return [];
}

function getDiscriminator(schema: OpenAPISchema): OpenAPISchema['discriminator'] {
  return schema.discriminator || schema['x-discriminator'];
}

function collectUniqueOneOfTypesDeep(schema: SchemaModel) {
  const uniqueTypes = new Set();

  function crawl(schema: SchemaModel) {
    for (const oneOfType of schema.oneOf || []) {
      if (oneOfType.oneOf) {
        crawl(oneOfType);
        continue;
      }

      if (oneOfType.type) {
        uniqueTypes.add(oneOfType.type);
      }
    }
  }

  crawl(schema);
  return Array.from(uniqueTypes.values());
}
