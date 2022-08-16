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
