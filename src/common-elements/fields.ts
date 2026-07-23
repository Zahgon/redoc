import { transparentize } from 'polished';

import styled, { css, extensionsHook } from '../styled-components';
import { PropertyNameCell } from './fields-layout';
import { deprecatedCss } from './mixins';
import { ShelfIcon } from './shelfs';

export const ClickablePropertyNameCell = styled(PropertyNameCell)`
  &.deprecated {
    span.property-name {
      ${deprecatedCss}
    }
  }

  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 13px;
    font-family: ${props => { throw new Error("STUB"); }};
    cursor: pointer;
    padding: 0;
    color: ${props => { throw new Error("STUB"); }};
    &:focus {
      font-weight: ${({ theme }) => { throw new Error("STUB"); }};
    }
    ${({ kind }) =>
      { throw new Error("STUB"); }}
  }
  ${ShelfIcon} {
    height: ${({ theme }) => { throw new Error("STUB"); }};
    width: ${({ theme }) => { throw new Error("STUB"); }};
    polygon {
      fill: ${({ theme }) => { throw new Error("STUB"); }};
    }
  }
`;

export const FieldLabel = styled.span`
  vertical-align: middle;
  font-size: ${({ theme }) => { throw new Error("STUB"); }};
  line-height: 20px;
`;

export const TypePrefix = styled(FieldLabel)`
  color: ${props => { throw new Error("STUB"); }};
`;

export const TypeName = styled(FieldLabel)`
  color: ${props => { throw new Error("STUB"); }};
`;

export const TypeTitle = styled(FieldLabel)`
  color: ${props => { throw new Error("STUB"); }};
  word-break: break-word;
`;

export const TypeFormat = TypeName;

export const RequiredLabel = styled(FieldLabel).attrs({
  as: 'div',
})`
  color: ${props => { throw new Error("STUB"); }};
  font-size: ${props => { throw new Error("STUB"); }};
  font-weight: normal;
  margin-left: 20px;
  line-height: 1;
`;

export const PropertyLabel = styled(RequiredLabel)`
  color: ${props => { throw new Error("STUB"); }};
`;

export const RecursiveLabel = styled(FieldLabel)`
  color: ${({ theme }) => { throw new Error("STUB"); }};
  font-size: 13px;
`;

export const PatternLabel = styled(FieldLabel)`
  color: #0e7c86;
  font-family: ${props => { throw new Error("STUB"); }};
  font-size: 12px;
  &::before,
  &::after {
    content: ' ';
  }
`;

export const ExampleValue = styled(FieldLabel)`
  border-radius: 2px;
  word-break: break-word;
  ${({ theme }) => { throw new Error("STUB"); }};
  & + & {
    margin-left: 0;
  }
  ${extensionsHook('ExampleValue')};
`;

export const ExtensionValue = styled(ExampleValue)``;

export const ConstraintItem = styled(FieldLabel)`
  border-radius: 2px;
  ${({ theme }) => { throw new Error("STUB"); }};
  & + & {
    margin-left: 0;
  }
  ${extensionsHook('ConstraintItem')};
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => { throw new Error("STUB"); }};
  margin-left: ${({ theme }) => { throw new Error("STUB"); }}px;
  border-radius: 2px;
  cursor: pointer;
  outline-color: ${({ theme }) => { throw new Error("STUB"); }};
  font-size: 12px;
`;
