import type { Readable, Writable } from "svelte/store";
import type {
  Colors,
  BGColors,
  ExtendedColors,
  Sizes,
  Positions,
  FontFamilies,
  FloatiePositions,
  TippyPositions,
  PopperStrategies,
} from "./type-defs";

export type ColorOptions = (typeof Colors)[number];
export type SizeOptions = (typeof Sizes)[number];
export type ExtendedColorOptions = (typeof ExtendedColors)[number];
export type BGColorOptions = (typeof BGColors)[number];
export type FontFamilies = (typeof FontFamilies)[number] | String;
export type Positions = (typeof Positions)[number];
export type TippyPositions = (typeof TippyPositions)[number];
export type FloatiePositions = (typeof FloatiePositions)[number];
export type PopperStrategies = (typeof PopperStrategies)[number];

export type FloatieType = {
  create: (opts: object) => { props: object; destroy: () => void };
  remove: (props: object) => void;
};

export type DialogProps = {
  title?: string;
  help_text?: string;
  size?: SizeOptions;
  input_value?: string;
  icon?: string;
  icon_color?: ColorOptions;
  icon_size?: SizeOptions;
  ok_button_text?: string;
  ok_button_color?: ColorOptions;
  ok_button_icon?: string;
  cancel_button_text?: string;
  cancel_button_color?: ColorOptions;
  cancel_button_icon?: string;
};

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
  haystack: Array<string>,
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

export type SettingOptions = {
  defaultIconFamily?: FontFamilies;
  defaultToastPlacement?: TippyPositions;
  defaultSnackbarPlacement?: TippyPositions;
  defaultNotificationPlacement?: TippyPositions;
  hasTransitions?: boolean;
  defaultChartColors?: Array<string>;
};

type DrawingTool = {
  name: string;
  icon: string;
  draw: (pad: DrawingPad) => void;
};

export type DrawingTools = {
  [key: string]: DrawingTool;
};

export type DrawingPadOptions = {
  initialScale: number;
  penColor: string;
  penWidth: number;
  eraserWidth: number;
  readonly?: boolean;
  image?: string;
  tools: DrawingTools;
  expanded?: boolean;
  expand?: number;
};

export type DrawingPadEvents = {
  change: {
    canUndo: boolean;
    canRedo: boolean;
    canvasImage: string;
  };
};

export type ButtonEvent = {
  detail: {
    doing: () => void;
    done: (callback?: Function, timeout?: number) => void;
    error: (callback?: Function, timeout?: number) => void;
    context?: any;
  };
};

export type SubmitButtonEvent = {
  saving: () => void;
  saved: (callback?: Function, timeout?: number) => void;
  error: (callback?: Function, timeout?: number) => void;
};

export type ButtonTracker = {
  saving: boolean;
  saved: boolean;
  error: boolean;
};

export type FormMakerValidators = { [key: string]: Function | Function[] };

export type FormMakerReturnFormData = import("svelte/store").Writable<T>;

export type FormMakerReturnErrors = import("svelte/store").Readable<{
  [K in keyof T]: string;
}>;

export type FormMakerReturnTouched = import("svelte/store").Readable<{
  [K in keyof T]: boolean;
}>;

export type FormMakerReturnIsValid = import("svelte/store").Readable<boolean>;
export type FormMakerReturnIsTouched = import("svelte/store").Readable<boolean>;
export type FormMakerReturnTracker =
  import("svelte/store").Writable<ButtonTracker>;

export type FormMakerConfig<T = Record<string, any>> = {
  data: T;
  validators?: FormMakerValidators;
  strictMode?: boolean;
};

export type FormMakerReturn<T> = {
  formData: FormMakerReturnFormData;
  errors: FormMakerReturnErrors;
  touched: FormMakerReturnTouched;
  isValid: FormMakerReturnIsValid;
  isTouched: FormMakerReturnIsTouched;
  tracker: FormMakerReturnTracker;
  update: (newData: { [key: string]: any }) => void;
  reset: (e?: Event | null) => void;
  setValidators: (newValidators: FormMakerValidators) => void;
};

export type CloneObject = <T>(obj: T) => T;

// Overloads
export declare function MakeForms<T extends Record<string, any>>(
  items: FormMakerConfig<T>,
): FormMakerReturn<T>;
export declare function MakeForms<T extends Record<string, any>>(
  items: FormMakerConfig<T>[],
): FormMakerReturn<T>[];

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
