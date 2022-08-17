declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onshowing?: (event: any) => any;
    onshown?: (event: any) => any;
    onhiding?: (event: any) => any;
    onhidden?: (event: any) => any;
    ontriggered?: (event: any) => any;
  }
}
