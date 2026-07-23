import * as styledComponents from 'styled-components';

import type { ResolvedThemeInterface } from './theme';

export type { ResolvedThemeInterface };

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<ResolvedThemeInterface>;

export const media = {
  lessThan(breakpoint, print?: boolean, extra?: string) {
    return (...args) => { throw new Error("STUB"); };
  },

  greaterThan(breakpoint) {
      throw new Error("STUB");
  },

  between(firstBreakpoint, secondBreakpoint) {
      throw new Error("STUB");
  },
};

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;

export function extensionsHook(styledName: string) {
  return props => {
      throw new Error("STUB");
  };
}
