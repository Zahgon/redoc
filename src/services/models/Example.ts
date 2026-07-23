import type { OpenAPIEncoding, OpenAPIExample, Referenced } from '../../types';
import { isFormUrlEncoded, isJsonLike, urlFormEncodePayload } from '../../utils/openapi';
import type { OpenAPIParser } from '../OpenAPIParser';

const externalExamplesCache: { [url: string]: Promise<any> } = {};

export class ExampleModel {
  value: any;
  summary?: string;
  description?: string;
  externalValueUrl?: string;

  constructor(
    parser: OpenAPIParser,
    infoOrRef: Referenced<OpenAPIExample>,
    public mime: string,
    encoding?: { [field: string]: OpenAPIEncoding },
  ) {
      throw new Error("STUB");
  }

  getExternalValue(mimeType: string): Promise<any> {
    if (!this.externalValueUrl) {
      return Promise.resolve(undefined);
    }

    if (this.externalValueUrl in externalExamplesCache) {
      return externalExamplesCache[this.externalValueUrl];
    }

    externalExamplesCache[this.externalValueUrl] = fetch(this.externalValueUrl).then(res => {
        throw new Error("STUB");
    });

    return externalExamplesCache[this.externalValueUrl];
  }
}
