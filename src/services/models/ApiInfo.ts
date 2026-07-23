import type { OpenAPIContact, OpenAPIInfo, OpenAPILicense } from '../../types';
import { IS_BROWSER } from '../../utils/';
import { l } from '../Labels';
import type { OpenAPIParser } from '../OpenAPIParser';
import { RedocNormalizedOptions } from '../RedocNormalizedOptions';

export class ApiInfoModel implements OpenAPIInfo {
  title: string;
  version: string;

  description: string;
  summary: string;
  termsOfService?: string;
  contact?: OpenAPIContact;
  license?: OpenAPILicense;

  downloadUrls: {
    title?: string;
    url?: string;
  }[];
  downloadFileName?: string;

  constructor(
    private parser: OpenAPIParser,
    private options: RedocNormalizedOptions = new RedocNormalizedOptions({}),
  ) {
      throw new Error("STUB");
  }
  private getDownloadUrls() {
      throw new Error("STUB");
  }

  private getDownloadLink(url?: string): string | undefined {
      throw new Error("STUB");
  }

  private getDownloadFileName(): string | undefined {
      throw new Error("STUB");
  }
}
