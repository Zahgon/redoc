import * as React from 'react';

import PerfectScrollbarType, * as PerfectScrollbarNamespace from 'perfect-scrollbar';

import { OptionsContext } from '../components/OptionsProvider';
import styled, { createGlobalStyle } from '../styled-components';
import { IS_BROWSER } from '../utils';

/*
 * perfect scrollbar umd bundle uses exports assignment while module uses default export
 * so when bundled with webpack default export works but with jest it crashes
 * That's why the following ugly fix is required
 */
const PerfectScrollbarConstructor =
  PerfectScrollbarNamespace.default || (PerfectScrollbarNamespace as any as PerfectScrollbarType);

let psStyles = '';
if (IS_BROWSER) {
  psStyles = require('perfect-scrollbar/css/perfect-scrollbar.css');
  psStyles = (typeof psStyles.toString === 'function' && psStyles.toString()) || '';
  psStyles = psStyles === '[object Object]' ? '' : psStyles;
}

const PSStyling = createGlobalStyle`${psStyles}`;

const StyledScrollWrapper = styled.div`
  position: relative;
`;

export interface PerfectScrollbarProps {
  options?: PerfectScrollbarType.Options;
  className?: string;
  updateFn?: (fn) => void;
}

export class PerfectScrollbar extends React.Component<
  React.PropsWithChildren<PerfectScrollbarProps>
> {
  private _container: HTMLElement;
  private inst: PerfectScrollbarType;

  componentDidMount() {
      throw new Error("STUB");
  }

  componentDidUpdate() {
      throw new Error("STUB");
  }

  componentWillUnmount() {
      throw new Error("STUB");
  }

  handleRef = ref => {
      throw new Error("STUB");
  };

  render() {
    const { children, className, updateFn } = this.props;

    if (updateFn) {
      updateFn(this.componentDidUpdate.bind(this));
    }

    return (
      <>
        {psStyles && <PSStyling />}
        <StyledScrollWrapper className={`scrollbar-container ${className}`} ref={this.handleRef}>
          {children}
        </StyledScrollWrapper>
      </>
    );
  }
}

export function PerfectScrollbarWrap(
  props: PerfectScrollbarProps & { children: JSX.Element[] | JSX.Element },
) {
    throw new Error("STUB");
}
