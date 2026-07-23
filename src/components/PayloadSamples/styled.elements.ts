import { transparentize } from 'polished';
import styled from '../../styled-components';
import { Dropdown } from '../../common-elements/Dropdown';

export const MimeLabel = styled.div`
  padding: 0.9em;
  background-color: ${({ theme }) => { throw new Error("STUB"); }};
  margin: 0 0 10px 0;
  display: block;
  font-family: ${({ theme }) => { throw new Error("STUB"); }};
  font-size: 0.929em;
  line-height: 1.5em;
`;

export const DropdownLabel = styled.span`
  font-family: ${({ theme }) => { throw new Error("STUB"); }};
  font-size: 12px;
  position: absolute;
  z-index: 1;
  top: -11px;
  left: 12px;
  font-weight: ${({ theme }) => { throw new Error("STUB"); }};
  color: ${({ theme }) => { throw new Error("STUB"); }};
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const InvertedSimpleDropdown = styled(Dropdown)`
  label {
    color: ${({ theme }) => { throw new Error("STUB"); }};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1em;
    text-transform: none;
    border: none;
  }
  margin: 0 0 10px 0;
  display: block;
  background-color: ${({ theme }) => { throw new Error("STUB"); }};
  border: none;
  padding: 0.9em 1.6em 0.9em 0.9em;
  box-shadow: none;
  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
    background-color: ${({ theme }) => { throw new Error("STUB"); }};
  }
`;

export const NoSampleLabel = styled.div`
  font-family: ${props => { throw new Error("STUB"); }};
  font-size: 12px;
  color: #ee807f;
`;
