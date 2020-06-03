Smaller helper components for use with Svelte applications.

## Includes:
`<Panel>`, `<Loader>`, `<Message>`, `<Notification>`, `<Icon>`.


## Usage:

### `<Panel>`
Import component:
`import { Panel } from '@kws3/helpers';`

Import Sass:
`@import '../node_modules/@kws3/helpers/components/Panel/styles.scss';`

Sass variables with default values:

 - `$kws-panel-background: #fff;`
 - `$kws-panel-box-shadow: 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.1), 0 0 0 0.0625rem rgba(0, 0, 0, 0.1);`
 - `$kws-panel-title-color: #000;`
 - `$kws-panel-title-weight: 700;`
 - `$kws-panel-caret-open-color: #888;`
 - `$kws-panel-caret-closed-color: #00a4d8;`

-------

### `<Loader>`
Import component:
`import { Loader } from '@kws3/helpers';`

Import Sass:
`@import '../node_modules/@kws3/helpers/components/Loader/styles.scss';`

Sass variables with default values:

 - `$kws-loader-width: 2rem;`
 - `$kws-loader-height: 2rem;`
 - `$kws-loader-width-large: ($kws-loader-width * 3);`
 - `$kws-loader-height-large: ($kws-loader-height * 3);`
 - `$kws-loader-color: #ccc;`
 - `$kws-loader-overlay-background: rgba(0,0,0,0.15);`

-------

### `<Message>`
Import component:
`import { Message } from '@kws3/helpers';`

**No SCSS import**

-------

### `<Notification>`
Import component:
`import { Notification } from '@kws3/helpers';`

**No SCSS import**

-------

### `<Icon>`

**Requires FontAwesome version <= 4.7.0, this can be either loaded from your bundle, or from a CDN**

Import component:
`import { Icon } from '@kws3/helpers';`

**No SCSS import**

