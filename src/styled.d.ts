import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      border: string;
      label: string;
      white: string;
      black: string;
      trasparent: string;
      warning: string;
    };
  }
}
