import { darken, desaturate, lighten, readableColor, transparentize } from 'polished';

const defaultTheme: ThemeInterface = {
  spacing: {
    unit: 5,
    sectionHorizontal: ({ spacing }) => { throw new Error("STUB"); },
    sectionVertical: ({ spacing }) => { throw new Error("STUB"); },
  },
  breakpoints: {
    small: '50rem',
    medium: '75rem',
    large: '105rem',
  },
  colors: {
    tonalOffset: 0.2,
    primary: {
      main: '#32329f',
      light: ({ colors }) => { throw new Error("STUB"); },
      dark: ({ colors }) => { throw new Error("STUB"); },
      contrastText: ({ colors }) => { throw new Error("STUB"); },
    },
    success: {
      main: '#1d8127',
      light: ({ colors }) => { throw new Error("STUB"); },
      dark: ({ colors }) => { throw new Error("STUB"); },
      contrastText: ({ colors }) => { throw new Error("STUB"); },
    },
    warning: {
      main: '#ffa500',
      light: ({ colors }) => { throw new Error("STUB"); },
      dark: ({ colors }) => { throw new Error("STUB"); },
      contrastText: '#ffffff',
    },
    error: {
      main: '#d41f1c',
      light: ({ colors }) => { throw new Error("STUB"); },
      dark: ({ colors }) => { throw new Error("STUB"); },
      contrastText: ({ colors }) => { throw new Error("STUB"); },
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
    },
    text: {
      primary: '#333333',
      secondary: ({ colors }) => { throw new Error("STUB"); },
    },
    border: {
      dark: 'rgba(0,0,0, 0.1)',
      light: '#ffffff',
    },
    responses: {
      success: {
        color: ({ colors }) => { throw new Error("STUB"); },
        backgroundColor: ({ colors }) => { throw new Error("STUB"); },
        tabTextColor: ({ colors }) => { throw new Error("STUB"); },
      },
      error: {
        color: ({ colors }) => { throw new Error("STUB"); },
        backgroundColor: ({ colors }) => { throw new Error("STUB"); },
        tabTextColor: ({ colors }) => { throw new Error("STUB"); },
      },
      redirect: {
        color: ({ colors }) => { throw new Error("STUB"); },
        backgroundColor: ({ colors }) => { throw new Error("STUB"); },
        tabTextColor: ({ colors }) => { throw new Error("STUB"); },
      },
      info: {
        color: '#87ceeb',
        backgroundColor: ({ colors }) => { throw new Error("STUB"); },
        tabTextColor: ({ colors }) => { throw new Error("STUB"); },
      },
    },
    http: {
      get: '#2F8132',
      post: '#186FAF',
      put: '#95507c',
      options: '#947014',
      patch: '#bf581d',
      delete: '#cc3333',
      basic: '#707070',
      link: '#07818F',
      head: '#A23DAD',
    },
  },
  schema: {
    linesColor: theme =>
      { throw new Error("STUB"); },
    defaultDetailsWidth: '75%',
    typeNameColor: theme => { throw new Error("STUB"); },
    typeTitleColor: theme => { throw new Error("STUB"); },
    requireLabelColor: theme => { throw new Error("STUB"); },
    labelsTextSize: '0.9em',
    nestingSpacing: '1em',
    nestedBackground: '#fafafa',
    arrow: {
      size: '1.1em',
      color: theme => { throw new Error("STUB"); },
    },
  },
  typography: {
    fontSize: '14px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: 'Roboto, sans-serif',
    smoothing: 'antialiased',
    optimizeSpeed: true,
    headings: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '400',
      lineHeight: '1.6em',
    },
    code: {
      fontSize: '13px',
      fontFamily: 'Courier, monospace',
      lineHeight: ({ typography }) => { throw new Error("STUB"); },
      fontWeight: ({ typography }) => { throw new Error("STUB"); },
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.05)',
      wrap: false,
    },
    links: {
      color: ({ colors }) => { throw new Error("STUB"); },
      visited: ({ typography }) => { throw new Error("STUB"); },
      hover: ({ typography }) => { throw new Error("STUB"); },
      textDecoration: 'auto',
      hoverTextDecoration: 'auto',
    },
  },
  sidebar: {
    width: '260px',
    backgroundColor: '#fafafa',
    textColor: '#333333',
    activeTextColor: theme =>
      { throw new Error("STUB"); },
    groupItems: {
      activeBackgroundColor: theme => { throw new Error("STUB"); },
      activeTextColor: theme => { throw new Error("STUB"); },
      textTransform: 'uppercase',
    },
    level1Items: {
      activeBackgroundColor: theme => { throw new Error("STUB"); },
      activeTextColor: theme => { throw new Error("STUB"); },
      textTransform: 'none',
    },
    arrow: {
      size: '1.5em',
      color: theme => { throw new Error("STUB"); },
    },
  },
  logo: {
    maxHeight: ({ sidebar }) => { throw new Error("STUB"); },
    maxWidth: ({ sidebar }) => { throw new Error("STUB"); },
    gutter: '2px',
  },
  rightPanel: {
    backgroundColor: '#263238',
    width: '40%',
    textColor: '#ffffff',
    servers: {
      overlay: {
        backgroundColor: '#fafafa',
        textColor: '#263238',
      },
      url: {
        backgroundColor: '#fff',
      },
    },
  },
  codeBlock: {
    backgroundColor: ({ rightPanel }) => { throw new Error("STUB"); },
  },
  fab: {
    backgroundColor: '#f2f2f2',
    color: '#0065FB',
  },
};

export default defaultTheme;

export function resolveTheme(theme: ThemeInterface): ResolvedThemeInterface {
  const resolvedValues = {};
  let counter = 0;
  const setProxy = (obj, path: string) => {
    Object.keys(obj).forEach(k => {
        throw new Error("STUB");
    });
  };

  setProxy(theme, '');
  return JSON.parse(JSON.stringify(theme));
}

export interface ColorSetting {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface HTTPResponseColos {
  color: string;
  backgroundColor: string;
  tabTextColor: string;
}

export interface FontSettings {
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  lineHeight: string;
  color: string;
}

export interface Servers {
  overlay: {
    backgroundColor: string;
    textColor: string;
  };
  url: {
    backgroundColor: string;
  };
}

export interface ResolvedThemeInterface {
  spacing: {
    unit: number;
    sectionHorizontal: number;
    sectionVertical: number;
  };
  breakpoints: {
    small: string;
    medium: string;
    large: string;
  };
  colors: {
    tonalOffset: number;
    primary: ColorSetting;
    success: ColorSetting;
    warning: ColorSetting;
    error: ColorSetting;
    gray: {
      50: string;
      100: string;
    };
    border: {
      light: string;
      dark: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    responses: {
      success: HTTPResponseColos;
      error: HTTPResponseColos;
      redirect: HTTPResponseColos;
      info: HTTPResponseColos;
    };
    http: {
      get: string;
      post: string;
      put: string;
      options: string;
      patch: string;
      delete: string;
      basic: string;
      link: string;
      head: string;
    };
  };
  schema: {
    linesColor: string;
    defaultDetailsWidth: string;
    typeNameColor: string;
    typeTitleColor: string;
    requireLabelColor: string;
    labelsTextSize: string;
    nestingSpacing: string;
    nestedBackground: string;
    arrow: {
      size: string;
      color: string;
    };
  };
  typography: {
    fontSize: string;
    lineHeight: string;
    fontWeightLight: string;
    fontWeightRegular: string;
    fontWeightBold: string;
    fontFamily: string;

    smoothing: string;
    optimizeSpeed: boolean;

    code: FontSettings & {
      backgroundColor: string;
      wrap: boolean;
    };
    headings: {
      fontFamily: string;
      fontWeight: string;
      lineHeight: string;
    };

    links: {
      color: string;
      visited: string;
      hover: string;
      textDecoration: string;
      hoverTextDecoration: string;
    };
  };
  sidebar: {
    width: string;
    backgroundColor: string;
    textColor: string;
    activeTextColor: string;
    groupItems: {
      activeBackgroundColor: string;
      activeTextColor: string;
      textTransform: string;
    };
    level1Items: {
      activeBackgroundColor: string;
      activeTextColor: string;
      textTransform: string;
    };
    arrow: {
      size: string;
      color: string;
    };
  };
  logo: {
    maxHeight: string;
    maxWidth: string;
    gutter: string;
  };
  rightPanel: {
    backgroundColor: string;
    textColor: string;
    width: string;
    servers: Servers;
  };
  codeBlock: {
    backgroundColor: string;
  };
  fab: {
    backgroundColor: string;
    color: string;
  };

  extensionsHook?: (name: string, props: any) => string;
}

export type primitive = string | number | boolean | undefined | null;
export type AdvancedThemeDeep<T> = T extends primitive
  ? T | ((theme: ResolvedThemeInterface) => T)
  : AdvancedThemeObject<T>;
export type AdvancedThemeObject<T> = { [P in keyof T]?: AdvancedThemeDeep<T[P]> };
export type ThemeInterface = AdvancedThemeObject<ResolvedThemeInterface>;
