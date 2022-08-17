declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onshowing?: (event: any) => any;
    onshown?: (event: any) => any;
    onhiding?: (event: any) => any;
    onhidden?: (event: any) => any;
    ontriggered?: (event: any) => any;
    onclose?: (event: any) => any;
    ontimeChange?: (event: any) => any;
    onready?: (event: any) => any;
    onopen?: (event: any) => any;
    ondateChange?: (event: any) => any;
    onmonthChange?: (event: any) => any;
    onyearChange?: (event: any) => any;
  }
}
