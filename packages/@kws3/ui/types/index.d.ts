type SearchOptions = {
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

type SearchHelper = (needle: string, haystack: array) => array;

type ValidatePasswordOptions = {
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

type Colors =
  | ""
  | "primary"
  | "success"
  | "warning"
  | "info"
  | "danger"
  | "dark"
  | "light";

type BGColors = "" | "transparent" | "link";
type SpinnerColors = "" | "grey";

type Sizes = "" | "small" | "medium" | "large";

type Options<T> = T;

type ColorOptions = Options<Colors>;
type SizeOptions = Options<Sizes>;
type SpinnerColorOptions = Options<Colors | SpinnerColors>;
type BGColorOptions = Options<Colors | BGColors>;
