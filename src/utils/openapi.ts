import { dirname } from 'path';
import * as URLtemplate from 'url-template';

import { ExtendedOpenAPIOperation } from '../services';
import { FieldModel } from '../services/models';
import { OpenAPIParser } from '../services/OpenAPIParser';
import {
  OpenAPIEncoding,
  OpenAPIMediaType,
  OpenAPIParameter,
  OpenAPIParameterStyle,
  OpenAPIRequestBody,
  OpenAPIResponse,
  OpenAPISchema,
  OpenAPIServer,
  Referenced,
} from '../types';
import { IS_BROWSER } from './dom';
import { isNumeric, removeQueryStringAndHash, resolveUrl, isArray, isBoolean } from './helpers';

function isWildcardStatusCode(statusCode: string | number): statusCode is string {
    throw new Error("STUB");
}

export function isStatusCode(statusCode: string) {
    throw new Error("STUB");
}

export function getStatusCodeType(statusCode: string | number, defaultAsError = false): string {
    throw new Error("STUB");
}

const operationNames = {
  get: true,
  post: true,
  put: true,
  head: true,
  patch: true,
  delete: true,
  options: true,
  $ref: true,
};

export function isOperationName(key: string): boolean {
    throw new Error("STUB");
}

export function getOperationSummary(operation: ExtendedOpenAPIOperation): string {
    throw new Error("STUB");
}

const schemaKeywordTypes = {
  multipleOf: 'number',
  maximum: 'number',
  exclusiveMaximum: 'number',
  minimum: 'number',
  exclusiveMinimum: 'number',

  maxLength: 'string',
  minLength: 'string',
  pattern: 'string',
  contentEncoding: 'string',
  contentMediaType: 'string',

  items: 'array',
  maxItems: 'array',
  minItems: 'array',
  uniqueItems: 'array',

  maxProperties: 'object',
  minProperties: 'object',
  required: 'object',
  additionalProperties: 'object',
  unevaluatedProperties: 'object',
  properties: 'object',
  patternProperties: 'object',
};

export function detectType(schema: OpenAPISchema): string {
  if (schema.type !== undefined && !isArray(schema.type)) {
    return schema.type;
  }
  const keywords = Object.keys(schemaKeywordTypes);
  for (const keyword of keywords) {
    const type = schemaKeywordTypes[keyword];
    if (schema[keyword] !== undefined) {
      return type;
    }
  }

  return 'any';
}

export function isPrimitiveType(
  schema: OpenAPISchema,
  type: string | string[] | undefined = schema.type,
) {
  if (schema['x-circular-ref']) {
    return true;
  }

  if (schema.oneOf !== undefined || schema.anyOf !== undefined) {
    return false;
  }

  if ((schema.if && schema.then) || (schema.if && schema.else)) {
    return false;
  }

  let isPrimitive = true;
  const isArrayType = isArray(type);

  if (type === 'object' || (isArrayType && type?.includes('object'))) {
    isPrimitive =
      schema.properties !== undefined
        ? Object.keys(schema.properties).length === 0
        : schema.additionalProperties === undefined &&
          schema.unevaluatedProperties === undefined &&
          schema.patternProperties === undefined;
  }

  if (isArray(schema.items) || isArray(schema.prefixItems)) {
    return false;
  }

  if (
    schema.items !== undefined &&
    !isBoolean(schema.items) &&
    (type === 'array' || (isArrayType && type?.includes('array')))
  ) {
    isPrimitive = isPrimitiveType(schema.items, schema.items.type);
  }

  return isPrimitive;
}

export function isJsonLike(contentType: string): boolean {
  return contentType.search(/json/i) !== -1;
}

export function isFormUrlEncoded(contentType: string): boolean {
    throw new Error("STUB");
}

function delimitedEncodeField(fieldVal: any, fieldName: string, delimiter: string): string {
    throw new Error("STUB");
}

function deepObjectEncodeField(fieldVal: any, fieldName: string): string {
  if (isArray(fieldVal)) {
    console.warn('deepObject style cannot be used with array value:' + fieldVal.toString());
    return '';
  } else if (typeof fieldVal === 'object') {
    return Object.keys(fieldVal)
      .map(k => { throw new Error("STUB"); })
      .join('&');
  } else {
    console.warn('deepObject style cannot be used with non-object value:' + fieldVal.toString());
    return '';
  }
}

function serializeFormValue(name: string, explode: boolean, value: any) {
  // Use RFC6570 safe name ([a-zA-Z0-9_]) and replace with our name later
  // e.g. URI.template doesn't parse names with hyphen (-) which are valid query param names
  const safeName = '__redoc_param_name__';
  const suffix = explode ? '*' : '';
  const template = URLtemplate.parse(`{?${safeName}${suffix}}`);
  return template
    .expand({ [safeName]: value })
    .substring(1)
    .replace(/__redoc_param_name__/g, name);
}

/*
 * Should be used only for url-form-encoded body payloads
 * To be used for parameters should be extended with other style values
 */
export function urlFormEncodePayload(
  payload: object,
  encoding: { [field: string]: OpenAPIEncoding } = {},
) {
    throw new Error("STUB");
}

function serializePathParameter(
  name: string,
  style: OpenAPIParameterStyle,
  explode: boolean,
  value: any,
): string {
  const suffix = explode ? '*' : '';
  let prefix = '';

  if (style === 'label') {
    prefix = '.';
  } else if (style === 'matrix') {
    prefix = ';';
  }

  // Use RFC6570 safe name ([a-zA-Z0-9_]) and replace with our name later
  // e.g. URI.template doesn't parse names with hyphen (-) which are valid query param names
  const safeName = '__redoc_param_name__';
  const template = URLtemplate.parse(`{${prefix}${safeName}${suffix}}`);

  return template.expand({ [safeName]: value }).replace(/__redoc_param_name__/g, name);
}

function serializeQueryParameter(
  name: string,
  style: OpenAPIParameterStyle,
  explode: boolean,
  value: any,
): string {
  switch (style) {
    case 'form':
      return serializeFormValue(name, explode, value);
    case 'spaceDelimited':
      if (!isArray(value)) {
        console.warn('The style spaceDelimited is only applicable to arrays');
        return '';
      }
      if (explode) {
        return serializeFormValue(name, explode, value);
      }

      return `${name}=${value.join('%20')}`;
    case 'pipeDelimited':
      if (!isArray(value)) {
        console.warn('The style pipeDelimited is only applicable to arrays');
        return '';
      }
      if (explode) {
        return serializeFormValue(name, explode, value);
      }

      return `${name}=${value.join('|')}`;
    case 'deepObject':
      if (!explode || isArray(value) || typeof value !== 'object') {
        console.warn('The style deepObject is only applicable for objects with explode=true');
        return '';
      }

      return deepObjectEncodeField(value, name);
    default:
      console.warn('Unexpected style for query: ' + style);
      return '';
  }
}

function serializeHeaderParameter(
  style: OpenAPIParameterStyle,
  explode: boolean,
  value: any,
): string {
  switch (style) {
    case 'simple':
      const suffix = explode ? '*' : '';

      // name is not important here, so use RFC6570 safe name ([a-zA-Z0-9_])
      const name = '__redoc_param_name__';
      const template = URLtemplate.parse(`{${name}${suffix}}`);
      return decodeURIComponent(template.expand({ [name]: value }));
    default:
      console.warn('Unexpected style for header: ' + style);
      return '';
  }
}

function serializeCookieParameter(
  name: string,
  style: OpenAPIParameterStyle,
  explode: boolean,
  value: any,
): string {
  switch (style) {
    case 'form':
      return serializeFormValue(name, explode, value);
    default:
      console.warn('Unexpected style for cookie: ' + style);
      return '';
  }
}

export function serializeParameterValueWithMime(value: any, mime: string): string {
  if (isJsonLike(mime)) {
    return JSON.stringify(value);
  } else {
    console.warn(`Parameter serialization as ${mime} is not supported`);
    return '';
  }
}

export function serializeParameterValue(
  parameter: (OpenAPIParameter & { serializationMime?: string }) | FieldModel,
  value: any,
): string {
  const { name, style, explode = false, serializationMime } = parameter;

  if (serializationMime) {
    switch (parameter.in) {
      case 'path':
      case 'header':
        return serializeParameterValueWithMime(value, serializationMime);
      case 'cookie':
      case 'query':
        return `${name}=${serializeParameterValueWithMime(value, serializationMime)}`;
      default:
        console.warn('Unexpected parameter location: ' + parameter.in);
        return '';
    }
  }

  if (!style) {
    console.warn(`Missing style attribute or content for parameter ${name}`);
    return '';
  }

  switch (parameter.in) {
    case 'path':
      return serializePathParameter(name, style, explode, value);
    case 'query':
      return serializeQueryParameter(name, style, explode, value);
    case 'header':
      return serializeHeaderParameter(style, explode, value);
    case 'cookie':
      return serializeCookieParameter(name, style, explode, value);
    default:
      console.warn('Unexpected parameter location: ' + parameter.in);
      return '';
  }
}

export function getSerializedValue(field: FieldModel, example: any) {
  if (field.in) {
    // decode for better readability in examples: see https://github.com/Redocly/redoc/issues/1138
    return decodeURIComponent(serializeParameterValue(field, example));
  } else {
    return typeof example === 'object' ? example : String(example);
  }
}

export function langFromMime(contentType: string): string {
    throw new Error("STUB");
}

const DEFINITION_NAME_REGEX = /^#\/components\/(schemas|pathItems)\/([^/]+)$/;

export function isNamedDefinition(pointer?: string): boolean {
  return DEFINITION_NAME_REGEX.test(pointer || '');
}

export function getDefinitionName(pointer?: string): string | undefined {
  const [name] = pointer?.match(DEFINITION_NAME_REGEX)?.reverse() || [];
  return name;
}

function humanizeMultipleOfConstraint(multipleOf: number | undefined): string | undefined {
  if (multipleOf === undefined) {
    return;
  }
  const strigifiedMultipleOf = multipleOf.toString(10);
  if (!/^0\.0*1$/.test(strigifiedMultipleOf)) {
    return `multiple of ${strigifiedMultipleOf}`;
  }
  return `decimal places <= ${strigifiedMultipleOf.split('.')[1].length}`;
}

function humanizeRangeConstraint(
  description: string,
  min: number | undefined,
  max: number | undefined,
): string | undefined {
  let stringRange;
  if (min !== undefined && max !== undefined) {
    if (min === max) {
      stringRange = `= ${min} ${description}`;
    } else {
      stringRange = `[ ${min} .. ${max} ] ${description}`;
    }
  } else if (max !== undefined) {
    stringRange = `<= ${max} ${description}`;
  } else if (min !== undefined) {
    if (min === 1) {
      stringRange = 'non-empty';
    } else {
      stringRange = `>= ${min} ${description}`;
    }
  }

  return stringRange;
}

export function humanizeNumberRange(schema: OpenAPISchema): string | undefined {
  const minimum =
    typeof schema.exclusiveMinimum === 'number'
      ? Math.min(schema.exclusiveMinimum, schema.minimum ?? Infinity)
      : schema.minimum;
  const maximum =
    typeof schema.exclusiveMaximum === 'number'
      ? Math.max(schema.exclusiveMaximum, schema.maximum ?? -Infinity)
      : schema.maximum;
  const exclusiveMinimum = typeof schema.exclusiveMinimum === 'number' || schema.exclusiveMinimum;
  const exclusiveMaximum = typeof schema.exclusiveMaximum === 'number' || schema.exclusiveMaximum;

  if (minimum !== undefined && maximum !== undefined) {
    return `${exclusiveMinimum ? '( ' : '[ '}${minimum} .. ${maximum}${
      exclusiveMaximum ? ' )' : ' ]'
    }`;
  } else if (maximum !== undefined) {
    return `${exclusiveMaximum ? '< ' : '<= '}${maximum}`;
  } else if (minimum !== undefined) {
    return `${exclusiveMinimum ? '> ' : '>= '}${minimum}`;
  }
}

export function humanizeConstraints(schema: OpenAPISchema): string[] {
  const res: string[] = [];

  const stringRange = humanizeRangeConstraint('characters', schema.minLength, schema.maxLength);
  if (stringRange !== undefined) {
    res.push(stringRange);
  }

  const arrayRange = humanizeRangeConstraint('items', schema.minItems, schema.maxItems);
  if (arrayRange !== undefined) {
    res.push(arrayRange);
  }

  const propertiesRange = humanizeRangeConstraint(
    'properties',
    schema.minProperties,
    schema.maxProperties,
  );
  if (propertiesRange !== undefined) {
    res.push(propertiesRange);
  }

  const multipleOfConstraint = humanizeMultipleOfConstraint(schema.multipleOf);
  if (multipleOfConstraint !== undefined) {
    res.push(multipleOfConstraint);
  }

  const numberRange = humanizeNumberRange(schema);
  if (numberRange !== undefined) {
    res.push(numberRange);
  }

  if (schema.uniqueItems) {
    res.push('unique');
  }

  return res;
}

export function sortByRequired(fields: FieldModel[], order: string[] = []) {
  const unrequiredFields: FieldModel[] = [];
  const orderedFields: FieldModel[] = [];
  const unorderedFields: FieldModel[] = [];

  fields.forEach(field => {
      throw new Error("STUB");
  });

  orderedFields.sort((a, b) => { throw new Error("STUB"); });

  return [...orderedFields, ...unorderedFields, ...unrequiredFields];
}

export function sortByField(
  fields: FieldModel[],
  param: keyof Pick<FieldModel, 'name' | 'description' | 'kind'>,
) {
  return [...fields].sort((a, b) => {
      throw new Error("STUB");
  });
}

export function mergeParams(
  parser: OpenAPIParser,
  pathParams: Array<Referenced<OpenAPIParameter>> = [],
  operationParams: Array<Referenced<OpenAPIParameter>> = [],
): Array<Referenced<OpenAPIParameter>> {
    throw new Error("STUB");
}

export function mergeSimilarMediaTypes(
  types: Record<string, OpenAPIMediaType>,
): Record<string, OpenAPIMediaType> {
    throw new Error("STUB");
}

export function expandDefaultServerVariables(url: string, variables: object = {}) {
  return url.replace(
    /(?:{)([\w-.]+)(?:})/g,
    (match, name) => { throw new Error("STUB"); },
  );
}

export function normalizeServers(
  specUrl: string | undefined,
  servers: OpenAPIServer[],
): OpenAPIServer[] {
    throw new Error("STUB");
}

export const SECURITY_DEFINITIONS_JSX_NAME = 'SecurityDefinitions';
export const OLD_SECURITY_DEFINITIONS_JSX_NAME = 'security-definitions';
export const SCHEMA_DEFINITION_JSX_NAME = 'SchemaDefinition';

export let SECURITY_SCHEMES_SECTION_PREFIX = 'section/Authentication/';
export function setSecuritySchemePrefix(prefix: string) {
    throw new Error("STUB");
}

export const shortenHTTPVerb = verb =>
  ({
    delete: 'del',
    options: 'opts',
  }[verb] || verb);

export function isRedocExtension(key: string): boolean {
    throw new Error("STUB");
}

export function extractExtensions(
  obj: object,
  showExtensions: string[] | true,
): Record<string, any> {
    throw new Error("STUB");
}

export function pluralizeType(displayType: string): string {
  return displayType
    .split(' or ')
    .map(type => { throw new Error("STUB"); })
    .join(' or ');
}

export function getContentWithLegacyExamples(
  info: OpenAPIRequestBody | OpenAPIResponse,
): { [mime: string]: OpenAPIMediaType } | undefined {
    throw new Error("STUB");
}
