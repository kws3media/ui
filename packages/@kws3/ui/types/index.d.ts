import type {
  Colors,
  BGColors,
  SpinnerColors,
  Sizes,
  Positions,
  FontFamilies,
  ToastPositions,
  TippyPositions,
} from "./type-defs";
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

export type SearchHelper = (
  needle: string,
  haystack: Array<string>
) => Array<any>;

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

export type ColorOptions = (typeof Colors)[number];
export type SizeOptions = (typeof Sizes)[number];
export type SpinnerColorOptions = (typeof SpinnerColors)[number];
export type BGColorOptions = (typeof BGColors)[number];
export type FontFamilies = (typeof FontFamilies)[number];
export type Positions = (typeof Positions)[number];
export type TippyPositions = (typeof TippyPositions)[number];
