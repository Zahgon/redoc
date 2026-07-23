import { darken } from 'polished';
import { Tabs as ReactTabs } from 'react-tabs';

import styled from '../styled-components';

export { Tab, TabList, TabPanel } from 'react-tabs';

export const Tabs = styled(ReactTabs)`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin: 0 -5px;

    > li {
      padding: 5px 10px;
      display: inline-block;

      background-color: ${({ theme }) => { throw new Error("STUB"); }};
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      cursor: pointer;
      text-align: center;
      outline: none;
      color: ${({ theme }) => { throw new Error("STUB"); }};
      margin: 0
        ${({ theme }) => { throw new Error("STUB"); }};
      border: 1px solid ${({ theme }) => { throw new Error("STUB"); }};
      border-radius: 5px;
      min-width: 60px;
      font-size: 0.9em;
      font-weight: bold;

      &.react-tabs__tab--selected {
        color: ${props => { throw new Error("STUB"); }};
        background: ${({ theme }) => { throw new Error("STUB"); }};
        &:focus {
          outline: auto;
        }
      }

      &:only-child {
        flex: none;
        min-width: 100px;
      }

      &.tab-success {
        color: ${props => { throw new Error("STUB"); }};
      }

      &.tab-redirect {
        color: ${props => { throw new Error("STUB"); }};
      }

      &.tab-info {
        color: ${props => { throw new Error("STUB"); }};
      }

      &.tab-error {
        color: ${props => { throw new Error("STUB"); }};
      }
    }
  }
  > .react-tabs__tab-panel {
    background: ${({ theme }) => { throw new Error("STUB"); }};
    & > div,
    & > pre {
      padding: ${props => { throw new Error("STUB"); }}px;
      margin: 0;
    }

    & > div > pre {
      padding: 0;
    }
  }
`;

export const SmallTabs = styled(Tabs)`
  > ul {
    display: block;
    > li {
      padding: 2px 5px;
      min-width: auto;
      margin: 0 15px 0 0;
      font-size: 13px;
      font-weight: normal;
      border-bottom: 1px dashed;
      color: ${({ theme }) => { throw new Error("STUB"); }};
      border-radius: 0;
      background: none;

      &:last-child {
        margin-right: 0;
      }

      &.react-tabs__tab--selected {
        color: ${({ theme }) => { throw new Error("STUB"); }};
        background: none;
      }
    }
  }
  > .react-tabs__tab-panel {
    & > div,
    & > pre {
      padding: ${props => { throw new Error("STUB"); }}px 0;
    }
  }
`;
