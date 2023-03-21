# sveltekit-preprocess

Collection of SvelteKit preprocessors for the KWS3 Design System


Install
-----
```bash
> npm i -D @kws3/sveltekit-preprocess
```

## Usage

This package contains the following preprocessors and plugins:

- **optimizeImports**: rewrites KWS3 Svelte imports to their source path in the `script` block

### `optimizeImports`

`optimizeImports` is a Svelte script preprocessor that rewrites base imports from KWS3 @kws3/ui packages to their source Svelte code paths. This can greatly speed up compile times during development while preserving typeahead and autocompletion hinting offered by integrated development environments (IDE) like VSCode.

The preprocessor optimizes imports from [@kws3/ui](https://github.com/kws3media/ui/tree/master/packages/%40kws3/ui)


**Example**

```diff
- import { SubmitButton, ConfirmButton, Message } from "@kws3/ui";
+ import SubmitButton from "@kws3/ui/controls/SubmitButton.svelte";
+ import ConfirmButton from "@kws3/ui/controls/ConfirmButton.svelte";
+ import Message from "@kws3/ui/helpers/Message.svelte";
```



#### Usage

```js
// svelte.config.js
import { optimizeImports } from "@kws3/sveltekit-preprocess";

export default {
  preprocess: [optimizeImports()],
};
```