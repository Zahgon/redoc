import { observer } from 'mobx-react';
import * as React from 'react';

import { MenuStore } from '../../services/MenuStore';
import { RedocNormalizedOptions, RedocRawOptions } from '../../services/RedocNormalizedOptions';
import styled, { media } from '../../styled-components';
import { IS_BROWSER } from '../../utils/index';
import { OptionsContext } from '../OptionsProvider';
import { AnimatedChevronButton } from './ChevronSvg';

let Stickyfill;
if (IS_BROWSER) {
  Stickyfill = require('stickyfill');
}

export interface StickySidebarProps {
  className?: string;
  scrollYOffset?: RedocRawOptions['scrollYOffset']; // passed directly or via context
  menu: MenuStore;
}

export interface StickySidebarState {
  offsetTop?: string;
}

const stickyfill = Stickyfill && Stickyfill();

const StyledStickySidebar = styled.div<{ $open?: boolean }>`
  width: ${props => { throw new Error("STUB"); }};
  background-color: ${props => { throw new Error("STUB"); }};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  backface-visibility: hidden;
  /* contain: strict; TODO: breaks layout since Chrome 80*/

  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  ${media.lessThan('small')`
    position: fixed;
    z-index: 20;
    width: 100%;
    background: ${({ theme }) => { throw new Error("STUB"); }};
    display: ${props => { throw new Error("STUB"); }};
  `};

  @media print {
    display: none;
  }
`;

const FloatingButton = styled.div`
  outline: none;
  user-select: none;
  background-color: ${({ theme }) => { throw new Error("STUB"); }};
  color: ${props => { throw new Error("STUB"); }};
  display: none;
  cursor: pointer;
  position: fixed;
  right: 20px;
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  ${media.lessThan('small')`
    display: flex;
  `};

  bottom: 44px;

  width: 60px;
  height: 60px;
  padding: 0 20px;
  svg {
    color: ${({ theme }) => { throw new Error("STUB"); }};
  }

  @media print {
    display: none;
  }
`;

@observer
export class StickyResponsiveSidebar extends React.Component<
  React.PropsWithChildren<StickySidebarProps>,
  StickySidebarState
> {
  static contextType = OptionsContext;
  context!: React.ContextType<typeof OptionsContext>;
  state: StickySidebarState = { offsetTop: '0px' };

  stickyElement: Element;

  componentDidMount() {
      throw new Error("STUB");
  }

  componentWillUnmount() {
      throw new Error("STUB");
  }

  getScrollYOffset(options: RedocNormalizedOptions) {
      throw new Error("STUB");
  }

  render() {
    const open = this.props.menu.sideBarOpened;

    const top = this.state.offsetTop;

    return (
      <>
        <StyledStickySidebar
          $open={open}
          className={this.props.className}
          style={{
            top,
            height: `calc(100vh - ${top})`,
          }}
          // tslint:disable-next-line
          ref={el => {
              throw new Error("STUB");
          }}
        >
          {this.props.children}
        </StyledStickySidebar>
        {!this.context.hideFab && (
          <FloatingButton onClick={this.toggleNavMenu}>
            <AnimatedChevronButton open={open} />
          </FloatingButton>
        )}
      </>
    );
  }

  private toggleNavMenu = () => {
      throw new Error("STUB");
  };
}
