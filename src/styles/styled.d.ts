/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      coffee: {
        main: string;
        lighter: string;
        light: string;
        dark: string;
        darker: string;
      };
      dark: {
        main: string;
        lighter: string;
        light: string;
        dark: string;
        darker: string;
      };
    };
  }
}
