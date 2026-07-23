import defaultTheme, { ResolvedThemeInterface, resolveTheme, ThemeInterface } from '../theme';
import { querySelector } from '../utils/dom';
import { isArray, isNumeric, mergeObjects } from '../utils/helpers';

import { setRedocLabels } from './Labels';
import { SideNavStyleEnum } from './types';
import type { LabelsConfigRaw, MDXComponentMeta } from './types';

export type DownloadUrlsConfig = {
  title?: string;
  url: string;
}[];

export interface RedocRawOptions {
  theme?: ThemeInterface;
  scrollYOffset?: number | string | (() => number);
  hideHostname?: boolean | string;
  expandResponses?: string | 'all';
  requiredPropsFirst?: boolean | string; // remove in next major release
  sortRequiredPropsFirst?: boolean | string;
  sortPropsAlphabetically?: boolean | string;
  sortEnumValuesAlphabetically?: boolean | string;
  sortOperationsAlphabetically?: boolean | string;
  sortTagsAlphabetically?: boolean | string;
  nativeScrollbars?: boolean | string;
  pathInMiddlePanel?: boolean | string;
  untrustedSpec?: boolean | string; // remove in next major release
  sanitize?: boolean | string;
  hideLoading?: boolean | string;
  hideDownloadButton?: boolean | string; // remove in next major release
  hideDownloadButtons?: boolean | string;
  downloadFileName?: string;
  downloadDefinitionUrl?: string;
  downloadUrls?: DownloadUrlsConfig;
  disableSearch?: boolean | string;
  onlyRequiredInSamples?: boolean | string;
  showExtensions?: boolean | string | string[];
  sideNavStyle?: SideNavStyleEnum;
  hideSingleRequestSampleTab?: boolean | string;
  hideRequestPayloadSample?: boolean;
  menuToggle?: boolean | string;
  jsonSampleExpandLevel?: number | string | 'all'; // remove in next major release
  jsonSamplesExpandLevel?: number | string | 'all';
  hideSchemaTitles?: boolean | string;
  simpleOneOfTypeLabel?: boolean | string;
  payloadSampleIdx?: number;
  expandSingleSchemaField?: boolean | string;
  schemaExpansionLevel?: number | string | 'all'; // remove in next major release
  schemasExpansionLevel?: number | string | 'all';
  schemaDefinitionsTagName?: string;
  showObjectSchemaExamples?: boolean | string;
  showSecuritySchemeType?: boolean;
  hideSecuritySection?: boolean;

  unstable_ignoreMimeParameters?: boolean;

  allowedMdComponents?: Record<string, MDXComponentMeta>;

  labels?: LabelsConfigRaw;

  enumSkipQuotes?: boolean | string;

  expandDefaultServerVariables?: boolean;
  maxDisplayedEnumValues?: number;
  ignoreNamedSchemas?: string[] | string;
  hideSchemaPattern?: boolean;
  generatedPayloadSamplesMaxDepth?: number; // remove in next major release
  generatedSamplesMaxDepth?: number;
  nonce?: string;
  hideFab?: boolean;
  minCharacterLengthToInitSearch?: number;
  showWebhookVerb?: boolean;
  hidePropertiesPrefix?: boolean;
}

export function argValueToBoolean(val?: string | boolean, defaultValue?: boolean): boolean {
  if (val === undefined) {
    return defaultValue || false;
  }
  if (typeof val === 'string') {
    return val !== 'false';
  }
  return val;
}

function argValueToNumber(value: number | string | undefined): number | undefined {
    throw new Error("STUB");
}

function argValueToExpandLevel(value?: number | string | undefined, defaultValue = 0): number {
    throw new Error("STUB");
}

export class RedocNormalizedOptions {
  static normalizeExpandResponses(value: RedocRawOptions['expandResponses']) {
      throw new Error("STUB");
  }

  static normalizeHideHostname(value: RedocRawOptions['hideHostname']): boolean {
      throw new Error("STUB");
  }

  static normalizeScrollYOffset(value: RedocRawOptions['scrollYOffset']): () => number {
      throw new Error("STUB");
  }

  static normalizeShowExtensions(value: RedocRawOptions['showExtensions']): string[] | boolean {
      throw new Error("STUB");
  }

  static normalizeSideNavStyle(value: RedocRawOptions['sideNavStyle']): SideNavStyleEnum {
      throw new Error("STUB");
  }

  static normalizePayloadSampleIdx(value: RedocRawOptions['payloadSampleIdx']): number {
      throw new Error("STUB");
  }

  private static normalizeJsonSampleExpandLevel(level?: number | string | 'all'): number {
      throw new Error("STUB");
  }

  private static normalizeGeneratedPayloadSamplesMaxDepth(
    value?: number | string | undefined,
  ): number {
      throw new Error("STUB");
  }

  theme: ResolvedThemeInterface;
  scrollYOffset: () => number;
  hideHostname: boolean;
  expandResponses: { [code: string]: boolean } | 'all';
  sortRequiredPropsFirst: boolean;
  sortPropsAlphabetically: boolean;
  sortEnumValuesAlphabetically: boolean;
  sortOperationsAlphabetically: boolean;
  sortTagsAlphabetically: boolean;
  nativeScrollbars: boolean;
  pathInMiddlePanel: boolean;
  sanitize: boolean;
  hideDownloadButtons: boolean;
  downloadFileName?: string;
  downloadDefinitionUrl?: string;
  downloadUrls?: DownloadUrlsConfig;
  disableSearch: boolean;
  onlyRequiredInSamples: boolean;
  showExtensions: boolean | string[];
  sideNavStyle: SideNavStyleEnum;
  hideSingleRequestSampleTab: boolean;
  hideRequestPayloadSample: boolean;
  menuToggle: boolean;
  jsonSamplesExpandLevel: number;
  enumSkipQuotes: boolean;
  hideSchemaTitles: boolean;
  simpleOneOfTypeLabel: boolean;
  payloadSampleIdx: number;
  expandSingleSchemaField: boolean;
  schemasExpansionLevel: number;
  schemaDefinitionsTagName?: string;
  showObjectSchemaExamples: boolean;
  showSecuritySchemeType?: boolean;
  hideSecuritySection?: boolean;

  /* tslint:disable-next-line */
  unstable_ignoreMimeParameters: boolean;
  allowedMdComponents: Record<string, MDXComponentMeta>;

  expandDefaultServerVariables: boolean;
  maxDisplayedEnumValues?: number;

  ignoreNamedSchemas: Set<string>;
  hideSchemaPattern: boolean;
  generatedSamplesMaxDepth: number;
  hideFab: boolean;
  minCharacterLengthToInitSearch: number;
  showWebhookVerb: boolean;
  hidePropertiesPrefix?: boolean;

  nonce?: string;

  constructor(raw: RedocRawOptions, defaults: RedocRawOptions = {}) {
      throw new Error("STUB");
  }
}
