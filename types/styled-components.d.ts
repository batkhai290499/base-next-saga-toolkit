import { DefaultTheme as SDefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends SDefaultTheme {
    id: string;
    name: string;
    colors: {
      common: {
        primary: string;
      };
      fonts: {
        primary: string;
        widgetHeader: string;
        mainHeaderContent: string;
        primaryButtonLabel: string;
      };
    };
  }
}
