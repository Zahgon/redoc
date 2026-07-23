import { headerCommonMixin, linkifyMixin } from '../../common-elements';
import { PrismDiv } from '../../common-elements/PrismDiv';
import styled, { css, extensionsHook, ResolvedThemeInterface } from '../../styled-components';

import { StyledComponent } from 'styled-components';

export const linksCss = css`
  a {
    text-decoration: ${props => { throw new Error("STUB"); }};
    color: ${props => { throw new Error("STUB"); }};

    &:visited {
      color: ${props => { throw new Error("STUB"); }};
    }

    &:hover {
      color: ${props => { throw new Error("STUB"); }};
      text-decoration: ${props => { throw new Error("STUB"); }};
    }
  }
`;

export const StyledMarkdownBlock = styled(
  PrismDiv as StyledComponent<
    'div',
    ResolvedThemeInterface,
    { $compact?: boolean; $inline?: boolean }
  >,
)`
  font-family: ${props => { throw new Error("STUB"); }};
  font-weight: ${props => { throw new Error("STUB"); }};
  line-height: ${props => { throw new Error("STUB"); }};

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({ $compact }) =>
    { throw new Error("STUB"); }}

  ${({ $inline }) =>
    { throw new Error("STUB"); }}

  h1 {
    ${headerCommonMixin(1)};
    color: ${props => { throw new Error("STUB"); }};
    margin-top: 0;
  }

  h2 {
    ${headerCommonMixin(2)};
    color: ${props => { throw new Error("STUB"); }};
  }

  code {
    color: ${({ theme }) => { throw new Error("STUB"); }};
    background-color: ${({ theme }) => { throw new Error("STUB"); }};

    font-family: ${props => { throw new Error("STUB"); }};
    border-radius: 2px;
    border: 1px solid rgba(38, 50, 56, 0.1);
    padding: 0 ${({ theme }) => { throw new Error("STUB"); }}px;
    font-size: ${props => { throw new Error("STUB"); }};
    font-weight: ${({ theme }) => { throw new Error("STUB"); }};

    word-break: break-word;
  }

  pre {
    font-family: ${props => { throw new Error("STUB"); }};
    white-space: ${({ theme }) => { throw new Error("STUB"); }};
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
    color: white;
    padding: ${props => { throw new Error("STUB"); }}px;
    overflow-x: auto;
    line-height: normal;
    border-radius: 0;
    border: 1px solid rgba(38, 50, 56, 0.1);

    code {
      background-color: transparent;
      color: white;
      padding: 0;

      &:before,
      &:after {
        content: none;
      }
    }
  }

  blockquote {
    margin: 0;
    margin-bottom: 1em;
    padding: 0 15px;
    color: #777;
    border-left: 4px solid #ddd;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }

  ul,
  ol {
    padding-left: 2em;
    margin: 0;
    margin-bottom: 1em;

    ul,
    ol {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;

    &:nth-child(2n) {
      background-color: ${({ theme }) => { throw new Error("STUB"); }};
    }
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }

  table th {
    text-align: left;
    font-weight: bold;
  }

  ${linkifyMixin('.share-link')};

  ${linksCss}

  ${extensionsHook('Markdown')};
`;
