import * as React from 'react';

import { AppStore, MarkdownRenderer, RedocNormalizedOptions } from '../../services';
import { BaseMarkdownProps } from './Markdown';
import { SanitizedMarkdownHTML } from './SanitizedMdBlock';

import { OptionsConsumer } from '../OptionsProvider';
import { StoreConsumer } from '../StoreBuilder';

export interface AdvancedMarkdownProps extends BaseMarkdownProps {
  htmlWrap?: (part: JSX.Element) => JSX.Element;
  parentId?: string;
}

export class AdvancedMarkdown extends React.Component<AdvancedMarkdownProps> {
  render() {
    return (
      <OptionsConsumer>
        {options => { throw new Error("STUB"); }}
      </OptionsConsumer>
    );
  }

  renderWithOptionsAndStore(options: RedocNormalizedOptions, store?: AppStore) {
    const { source, htmlWrap = i => { throw new Error("STUB"); } } = this.props;
    if (!store) {
      throw new Error('When using components in markdown, store prop must be provided');
    }

    const renderer = new MarkdownRenderer(options, this.props.parentId);
    const parts = renderer.renderMdWithComponents(source);

    if (!parts.length) {
      return null;
    }

    return parts.map((part, idx) => {
        throw new Error("STUB");
    });
  }
}
