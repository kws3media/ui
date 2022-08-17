import { Colors, BGColors, SpinnerColors, Sizes } from "./type-defs";
export type SearchOptions = {
  search_key: Array<string> | string;
  scoreThreshold: number;
  fuzzyOpts: {
    analyzeSubTerms: boolean;
    analyzeSubTermDepth: number;
    highlighting: {
      after: string;
      before: string;
    };
  };
};

export type SearchHelper = (needle: string, haystack: array) => array;

export type ValidatePasswordOptions = {
  name: string;
  text: string;
  identifier: string;
  regex: RegExp;
  passed: boolean;
  active: boolean;
  value?: string;
  negate?: boolean;
};

declare global {
  interface Navigator {
    readonly userAgentData: {
      platform: string;
    };
    readonly platform: string;
  }
  interface Window {
    ApexCharts: Object;
    readonly navigator: Navigator;
  }
}

export type Options<T> = T;

export type ColorOptions = Options<Colors>;
export type SizeOptions = Options<Sizes>;
export type SpinnerColorOptions = Options<Colors | SpinnerColors>;
export type BGColorOptions = Options<Colors | BGColors>;
