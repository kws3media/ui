# Utils

Kws3 internel helper functions for Svelte applications.

## Current exported functions
 - `truncate(str, len)` - truncates a string `str` to specified length `len`
 - `nl2br(str)` - converts new lines to `<br>` tags
 - `cloneObject(obj)` - deep clones an object
 - `rAF` - returns a cross-browser version of `requestAnimationFrame`
 - `debounce(func, threshold, immediate)` - Debounces a function `func` so that it can be called only once within the `threshold` time period. Optional third param specifies whether `func` should be invoked immediately on first call.



