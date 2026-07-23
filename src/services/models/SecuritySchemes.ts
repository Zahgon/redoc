import type { OpenAPISecurityScheme, Referenced } from '../../types';
import { SECURITY_SCHEMES_SECTION_PREFIX } from '../../utils';
import type { OpenAPIParser } from '../OpenAPIParser';

export class SecuritySchemeModel {
  id: string;
  sectionId: string;
  type: OpenAPISecurityScheme['type'];
  description: string;
  displayName: string;
  apiKey?: {
    name: string;
    in: OpenAPISecurityScheme['in'];
  };

  http?: {
    scheme: string;
    bearerFormat?: string;
  };

  flows: OpenAPISecurityScheme['flows'];
  openId?: {
    connectUrl: string;
  };

  constructor(parser: OpenAPIParser, id: string, scheme: Referenced<OpenAPISecurityScheme>) {
      throw new Error("STUB");
  }
}

export class SecuritySchemesModel {
  schemes: SecuritySchemeModel[];

  constructor(parser: OpenAPIParser) {
      throw new Error("STUB");
  }
}
