import type { OpenAPIPaths, OpenAPITag, OpenAPISchema } from '../types';
import { isOperationName, JsonPointer, alphabeticallyByProp } from '../utils';
import { MarkdownRenderer } from './MarkdownRenderer';
import { GroupModel, OperationModel } from './models';
import type { OpenAPIParser } from './OpenAPIParser';
import type { RedocNormalizedOptions } from './RedocNormalizedOptions';
import type { ContentItemModel, TagGroup, TagInfo, TagsInfoMap } from './types';

export const GROUP_DEPTH = 0;

export class MenuBuilder {
  /**
   * Builds page content structure based on tags
   */
  static buildStructure(
    parser: OpenAPIParser,
    options: RedocNormalizedOptions,
  ): ContentItemModel[] {
      throw new Error("STUB");
  }

  /**
   * extracts items from markdown description
   * @param description - markdown source
   */
  static addMarkdownItems(
    description: string,
    parent: GroupModel | undefined,
    initialDepth: number,
    options: RedocNormalizedOptions,
  ): ContentItemModel[] {
      throw new Error("STUB");
  }

  /**
   * Returns array of OperationsGroup items for the tag groups (x-tagGroups vendor extension)
   * @param tags value of `x-tagGroups` vendor extension
   */
  static getTagGroupsItems(
    parser: OpenAPIParser,
    parent: GroupModel | undefined,
    groups: TagGroup[],
    tags: TagsInfoMap,
    options: RedocNormalizedOptions,
  ): GroupModel[] {
      throw new Error("STUB");
  }

  /**
   * Returns array of OperationsGroup items for the tags of the group or for all tags
   * @param parser
   * @param tagsMap tags info returned from `getTagsWithOperations`
   * @param parent parent item
   * @param group group which this tag belongs to. if not provided gets all tags
   * @param options normalized options
   */
  static getTagsItems(
    parser: OpenAPIParser,
    tagsMap: TagsInfoMap,
    parent: GroupModel | undefined,
    group: TagGroup | undefined,
    options: RedocNormalizedOptions,
  ): ContentItemModel[] {
      throw new Error("STUB");
  }

  /**
   * Returns array of Operation items for the tag
   * @param parser
   * @param parent parent OperationsGroup
   * @param tag tag info returned from `getTagsWithOperations`
   * @param depth items depth
   * @param options - normalized options
   */
  static getOperationsItems(
    parser: OpenAPIParser,
    parent: GroupModel | undefined,
    tag: TagInfo,
    depth: number,
    options: RedocNormalizedOptions,
  ): OperationModel[] {
      throw new Error("STUB");
  }

  /**
   * collects tags and maps each tag to list of operations belonging to this tag
   */
  static getTagsWithOperations(parser: OpenAPIParser, explicitTags: OpenAPITag[]): TagsInfoMap {
      throw new Error("STUB");
  }

  static getTagRelatedSchema({
    parser,
    tag,
    parent,
    schemaDefinitionsTagName,
  }: {
    parser: OpenAPIParser;
    tag: TagInfo;
    parent: GroupModel;
    schemaDefinitionsTagName?: string;
  }): GroupModel[] {
      throw new Error("STUB");
  }
}
