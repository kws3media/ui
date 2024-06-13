import{j as e,M as c}from"./version-f6a9f08d.js";import{u as d}from"./index-5b876d48.js";import{M as r}from"./index-564c5f40.js";import"./iframe-6387451d.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";function s(i){const n={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"435",children:"4.3.5"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix Radio component value type"}),`
`]}),`
`,e.jsx(n.h2,{id:"434",children:"4.3.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Make granular types of form maker generic"}),`
`]}),`
`,e.jsx(n.h2,{id:"433",children:"4.3.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"More granular types for form maker"}),`
`]}),`
`,e.jsx(n.h2,{id:"432",children:"4.3.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Extended typings for form helper"}),`
`,e.jsx(n.li,{children:"Fix typings for ButtonEvent"}),`
`]}),`
`,e.jsx(n.h2,{id:"431",children:"4.3.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Include bulma 0.9 as peer dependency"}),`
`,e.jsx(n.li,{children:"Include svelte 4 as peer dependency"}),`
`]}),`
`,e.jsx(n.h2,{id:"430",children:"4.3.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"StickyColumnsTableWrapper"})," now includes a box shadow to compensate for the inner table's drop shadow being hidden due to overflow clipping."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"[BREAKING]"})," ",e.jsx(n.code,{children:"GridView"})," component now transitions each ",e.jsx(n.code,{children:"GridCell"})," independently, previously used to transition each ",e.jsx(n.code,{children:"GridRow"}),". This means all content in ",e.jsx(n.code,{children:"GridCell"})," now includes an additional wrapper element for handling the transitions. This matches the behaviour in ",e.jsx(n.code,{children:"TileView"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"425",children:"4.2.5"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix z-index for sticky columns"}),`
`,e.jsxs(n.li,{children:["Allow ",e.jsx(n.code,{children:"inner_class"})," in ",e.jsx(n.code,{children:"InfiniteList"})," component"]}),`
`,e.jsxs(n.li,{children:["Configurable scroll shadows on ",e.jsx(n.code,{children:"InfiniteList"})," defaulting to a radial scroll shadow"]}),`
`]}),`
`,e.jsx(n.h2,{id:"421",children:"4.2.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix grid row hover state colors for sticky columns"}),`
`]}),`
`,e.jsx(n.h2,{id:"420",children:"4.2.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix grid row transitions to be global"}),`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"createScaler"})," and ",e.jsx(n.code,{children:"scale"})," functions to utils"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"GridView"})," is no longer wrapped in ",e.jsx(n.code,{children:"div.data-table"})]}),`
`,e.jsxs(n.li,{children:["New component ",e.jsx(n.code,{children:"StickyColumnsTableWrapper"})," added"]}),`
`,e.jsxs(n.li,{children:["Use dynamic scroll shadows for ",e.jsx(n.code,{children:"InfiniteList"})," component"]}),`
`]}),`
`,e.jsx(n.h2,{id:"414",children:"4.1.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["add ",e.jsx(n.code,{children:"black"})," and ",e.jsx(n.code,{children:"white"})," as valid color types"]}),`
`]}),`
`,e.jsx(n.h2,{id:"413",children:"4.1.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure transitions are global for ",e.jsx(n.code,{children:"Modal"}),", ",e.jsx(n.code,{children:"CardModal"})," and ",e.jsx(n.code,{children:"ActionSheet"})," components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"InfiniteList"})," - do not fake a scroll event on a resize event, fixes loading bugs"]}),`
`]}),`
`,e.jsx(n.h2,{id:"412",children:"4.1.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"})," - fixed issue where raw object were initially outputted (if provided)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchableSelect and "}),"MultiSelect` (Async): resolved issue with the 'active' class not attaching to the most matched item in dropdown options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchableSelect"})," - improved behavior, ensuring the ",e.jsx(n.code,{children:"tab"})," key correctly loses focus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AutoComplete"})," - dropdown now closes on loss of focus triggered by the ",e.jsx(n.code,{children:"tab"})," key"]}),`
`]}),`
`,e.jsx(n.h2,{id:"411",children:"4.1.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DatePicker"})," - add support for configurable border radius"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DatePicker"})," - add support for configurable box shadow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DatePicker"})," - bug fix on date range selection colors"]}),`
`]}),`
`,e.jsx(n.h2,{id:"410",children:"4.1.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New component ",e.jsx(n.code,{children:"InfiniteList"})," Added"]}),`
`]}),`
`,e.jsx(n.h2,{id:"403",children:"4.0.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ScrollableList"})," - bugfixes, and add support for removing items without affecting scroll position"]}),`
`]}),`
`,e.jsx(n.h2,{id:"402",children:"4.0.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ToggleButtons"})," - add support for count tags, and fix css not applying"]}),`
`]}),`
`,e.jsx(n.h2,{id:"401",children:"4.0.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ScrollableList"})," - add support for custom iteration key for keyed each block"]}),`
`]}),`
`,e.jsx(n.h2,{id:"400",children:"4.0.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"add svelte 4 compatibility"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"234",children:"2.3.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["add ",e.jsx(n.code,{children:"black"})," and ",e.jsx(n.code,{children:"white"})," as valid color types"]}),`
`]}),`
`,e.jsx(n.h2,{id:"233",children:"2.3.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"InfiniteList"})," - do not fake a scroll event on a resize event, fixes loading bugs"]}),`
`]}),`
`,e.jsx(n.h2,{id:"232",children:"2.3.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"})," - fixed issue where raw object were initially outputted (if provided)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchableSelect and "}),"MultiSelect` (Async): resolved issue with the 'active' class not attaching to the most matched item in dropdown options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchableSelect"})," - improved behavior, ensuring the ",e.jsx(n.code,{children:"tab"})," key correctly loses focus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AutoComplete"})," - dropdown now closes on loss of focus triggered by the ",e.jsx(n.code,{children:"tab"})," key"]}),`
`]}),`
`,e.jsx(n.h2,{id:"231",children:"2.3.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DatePicker"})," - add support for configurable border radius"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DatePicker"})," - add support for configurable box shadow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DatePicker"})," - bug fix on date range selection colors"]}),`
`]}),`
`,e.jsx(n.h2,{id:"230",children:"2.3.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New component ",e.jsx(n.code,{children:"InfiniteList"})," Added"]}),`
`]}),`
`,e.jsx(n.h2,{id:"225",children:"2.2.5"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ScrollableList"})," - bugfixes, and add support for removing items without affecting scroll position"]}),`
`]}),`
`,e.jsx(n.h2,{id:"224",children:"2.2.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ToggleButtons"})," - add support for count tags, and fix css not applying"]}),`
`]}),`
`,e.jsx(n.h2,{id:"223",children:"2.2.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ScrollableList"})," - add support for custom iteration key for keyed each block"]}),`
`]}),`
`,e.jsx(n.h2,{id:"222",children:"2.2.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ScrollableList"})," - fix jumping issue when edge of scrollable regions are reached"]}),`
`]}),`
`,e.jsx(n.h2,{id:"221",children:"2.2.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Icon"})," fix icon sizes when line-awesome icons are loaded"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Icon"})," fix material icons when icon family is set globally"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Icon"})," add support for adding custom icon families"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Chart"})," fix, ensure ApexCharts is loaded before trying to initialise it"]}),`
`]}),`
`,e.jsx(n.h2,{id:"220",children:"2.2.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix bug where ",e.jsx(n.code,{children:"ScrollableList"})," component puts extra padding on top of list when fast scroll to top"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ScrollableList"})," - Fix bug to reset internal positioning props when data changes"]}),`
`,e.jsxs(n.li,{children:["fix Popperjs position strategy to work better on mobile by default, affects ",e.jsx(n.code,{children:"SearchableSelect"}),", ",e.jsx(n.code,{children:"MultiSelect"})," and ",e.jsx(n.code,{children:"AutoComplete"})," components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ActionSheet"})," - Update styling to make it wokr better visually on desktop"]}),`
`]}),`
`,e.jsx(n.h2,{id:"214",children:"2.1.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix bug where disabled ",e.jsx(n.code,{children:"Checkbox"})," components wrongly appeared as if they were checked"]}),`
`,e.jsxs(n.li,{children:["Allow adding CSS classes to the input field in ",e.jsx(n.code,{children:"NumberInput"})," component"]}),`
`]}),`
`,e.jsx(n.h2,{id:"213",children:"2.1.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PasswordInput"})," - add support for field ",e.jsx(n.code,{children:"autocomplete"})," and ",e.jsx(n.code,{children:"required"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PasswordValidator"})," - fix ",e.jsx(n.code,{children:"valid"})," field binding"]}),`
`]}),`
`,e.jsx(n.h2,{id:"212",children:"2.1.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PasswordInput"})," - add support for field ",e.jsx(n.code,{children:"name"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PasswordInput"})," - fix spacing when icons are turned off"]}),`
`]}),`
`,e.jsx(n.h2,{id:"211",children:"2.1.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Package ",e.jsx(n.code,{children:"text-mask-core"})," moved to @kws3 namespace."]}),`
`]}),`
`,e.jsx(n.h2,{id:"210",children:"2.1.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bugfix with Colorpicker component, where colors could not be typed in manually."}),`
`,e.jsx(n.li,{children:"Extended typing and typescript support"}),`
`,e.jsxs(n.li,{children:["New Components added ",e.jsx(n.code,{children:"Canvas"}),", ",e.jsx(n.code,{children:"ESignature"}),", ",e.jsx(n.code,{children:"PenInput"})," and ",e.jsx(n.code,{children:"PenControls"})]}),`
`,e.jsxs(n.li,{children:["Exposed ",e.jsx(n.code,{children:"Canvas"})," tools (",e.jsx(n.code,{children:"Pen"})," and ",e.jsx(n.code,{children:"Eraser"}),") from ",e.jsx(n.code,{children:"DrawingPad"})," - drawing helper module."]}),`
`,e.jsxs(n.li,{children:["New Components added ",e.jsx(n.code,{children:"PasswordInput"})," with value show/hide feature."]}),`
`]}),`
`,e.jsx(n.h2,{id:"205",children:"2.0.5"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RangeSlider"})," - Expose native ",e.jsx(n.code,{children:"input"})," event"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RangeSlider"})," - Supports thumb color class ",e.jsx(n.code,{children:"is-thumb-{color}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AutoComplete"}),", ",e.jsx(n.code,{children:"SearchInput"}),", ",e.jsx(n.code,{children:"SearchableSelect"})," and ",e.jsx(n.code,{children:"MultiSelect"})," - deprecated ",e.jsx(n.code,{children:"scoreThreshold"}),", changed to ",e.jsx(n.code,{children:"score_threshold"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"204",children:"2.0.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ToggleButtons"})," - set the value if not disabled and not the same value is set"]}),`
`]}),`
`,e.jsx(n.h2,{id:"203",children:"2.0.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sveltkit compatibility fix ('window' not defined)"}),`
`]}),`
`,e.jsx(n.h2,{id:"202",children:"2.0.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bugfixes with chart default colours"}),`
`,e.jsx(n.li,{children:"Set today's date on datepicker initialisation so that long running pages don't stick to the date of first load as today's date"}),`
`]}),`
`,e.jsx(n.h2,{id:"201",children:"2.0.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hardcoded color bugfix on pagination styles"}),`
`]}),`
`,e.jsx(n.h2,{id:"200",children:"2.0.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add support for custom CSS classes for the table in ",e.jsx(n.code,{children:"GridView"})," component"]}),`
`,e.jsxs(n.li,{children:["Add support for displaying ",e.jsx(n.code,{children:"GridView"})," table rows in a compact manner using ",e.jsx(n.code,{children:"is_narrow"})," prop."]}),`
`,e.jsxs(n.li,{children:["Vertically center all rows by default in ",e.jsx(n.code,{children:"GridView"}),"."]}),`
`,e.jsxs(n.li,{children:["Add support for custom CSS classes for the wrapper in ",e.jsx(n.code,{children:"TileView"})," component"]}),`
`,e.jsxs(n.li,{children:["Add support for variable number of items per row in ",e.jsx(n.code,{children:"TileView"})," component via ",e.jsx(n.code,{children:"fluid_items_per_row"})," prop"]}),`
`,e.jsxs(n.li,{children:["Fix keyboard scrolling issue on ",e.jsx(n.code,{children:"AutoComplete"}),",",e.jsx(n.code,{children:"MultiSelect"})," and ",e.jsx(n.code,{children:"SearchableSelect"})," component"]}),`
`,e.jsxs(n.li,{children:["Fix ",e.jsx(n.code,{children:"time_24hr"})," reactivity issue on ",e.jsx(n.code,{children:"Timepicker"})]}),`
`,e.jsxs(n.li,{children:["Expose ",e.jsx(n.code,{children:"min_time"}),", ",e.jsx(n.code,{children:"max_time"})," from ",e.jsx(n.code,{children:"Timepicker"})]}),`
`,e.jsxs(n.li,{children:["Expose ",e.jsx(n.code,{children:"readonly"})," from ",e.jsx(n.code,{children:"Datepicker"})," and ",e.jsx(n.code,{children:"Timepicker"})," to prevent calendar opening on focus."]}),`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"SearchInput"})," component:  search on multiple keys at the same time."]}),`
`,e.jsxs(n.li,{children:["Deprecated ",e.jsx(n.code,{children:"@kws3/ui/utils/fuzzysearch"})," and ",e.jsx(n.code,{children:"@kws3/ui/utils/some_module"}),"."]}),`
`,e.jsxs(n.li,{children:["Expose factory function ",e.jsx(n.code,{children:"makeSearchEngine"})," from ",e.jsx(n.code,{children:"@kws3/ui/search"})]}),`
`,e.jsxs(n.li,{children:["Expose ",e.jsx(n.code,{children:"truncate"}),", ",e.jsx(n.code,{children:"nl2br"}),", ",e.jsx(n.code,{children:"cloneObject"}),", ",e.jsx(n.code,{children:"rAF"}),", ",e.jsx(n.code,{children:"debounce"}),", ",e.jsx(n.code,{children:"capitaliseFirstLetter"}),", ",e.jsx(n.code,{children:"createDate"}),", ",e.jsx(n.code,{children:"currency"}),", ",e.jsx(n.code,{children:"dateToOrdinal"}),", ",e.jsx(n.code,{children:"randomIntegerFromInterval"}),", ",e.jsx(n.code,{children:"randomPercent"}),", ",e.jsx(n.code,{children:"fileDownloader"})," from ",e.jsx(n.code,{children:"@kws3/ui/utils"}),"."]}),`
`,e.jsxs(n.li,{children:["Expose keyboard events of ",e.jsx(n.code,{children:"enter"}),", ",e.jsx(n.code,{children:"tab"}),", ",e.jsx(n.code,{children:"escape"}),", ",e.jsx(n.code,{children:"space"}),", ",e.jsx(n.code,{children:"leftarrow"}),", ",e.jsx(n.code,{children:"rightarrow"}),", ",e.jsx(n.code,{children:"downarrow"}),", ",e.jsx(n.code,{children:"uparrow"}),", ",e.jsx(n.code,{children:"backspace"}),", ",e.jsx(n.code,{children:"del"})," from ",e.jsx(n.code,{children:"@kws3/ui/keyboard"}),"."]}),`
`,e.jsxs(n.li,{children:["Expose ",e.jsx(n.code,{children:"hasResizeObserver"}),", ",e.jsx(n.code,{children:"resizeObserver"})," from ",e.jsx(n.code,{children:"@kws3/ui/resizeObserver"})]}),`
`,e.jsxs(n.li,{children:["New utility ",e.jsx(n.code,{children:"makeForms"})," exposed  from ",e.jsx(n.code,{children:"@kws3\\ui\\form"})]}),`
`,e.jsxs(n.li,{children:["Add support for material symbols icon pack from ",e.jsx(n.a,{href:"https://fonts.google.com/icons",rel:"nofollow",children:"https://fonts.google.com/icons"})]}),`
`,e.jsx(n.li,{children:"Baby steps towards typings"}),`
`]}),`
`,e.jsx(n.h2,{id:"193",children:"1.9.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bug fix with fuzzy.js initial config hoisting"}),`
`]}),`
`,e.jsx(n.h2,{id:"192",children:"1.9.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bug fix with fuzzy.js and Vite prebundling"}),`
`,e.jsx(n.li,{children:"Debounce fuzzy searches"}),`
`,e.jsxs(n.li,{children:["Expose ",e.jsx(n.code,{children:"@kws3/ui/utils/fuzzysearch"})," as a reusable function"]}),`
`]}),`
`,e.jsx(n.h2,{id:"191",children:"1.9.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchableSelect"})," and ",e.jsx(n.code,{children:"MultiSelect"}),": match colors of dropdown area to theme color when dropdown area is inside a ",e.jsx(n.code,{children:"Portal"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AutoComplete"}),": match colors of dropdown area to theme color when dropdown area is inside a ",e.jsx(n.code,{children:"Portal"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"190",children:"1.9.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use new fuzzy algorithm for ",e.jsx(n.code,{children:"AutoComplete"}),",",e.jsx(n.code,{children:"MultiSelect"})," and ",e.jsx(n.code,{children:"SearchableSelect"})," component"]}),`
`,e.jsxs(n.li,{children:["Add property ",e.jsx(n.code,{children:"scoreThreshold"})," in ",e.jsx(n.code,{children:"AutoComplete"}),",",e.jsx(n.code,{children:"MultiSelect"})," and ",e.jsx(n.code,{children:"SearchableSelect"})," component to control search accuracy."]}),`
`,e.jsxs(n.li,{children:["Bugfix: Keep ",e.jsx(n.code,{children:"SubmitButton"})," disabled while it's not ready to submit yet"]}),`
`]}),`
`,e.jsx(n.h2,{id:"184",children:"1.8.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"AutoComplete"})," component"]}),`
`,e.jsxs(n.li,{children:["Make options text size match the input ",e.jsx(n.code,{children:"size"})," in ",e.jsx(n.code,{children:"MultiSelect"})," and ",e.jsx(n.code,{children:"SearchableSelect"}),"."]}),`
`,e.jsxs(n.li,{children:["Prevent default arrow up/down behaviour on ",e.jsx(n.code,{children:"MultiSelect"})," and ",e.jsx(n.code,{children:"SearchableSelect"})," when options dropdown is open."]}),`
`]}),`
`,e.jsx(n.h2,{id:"183",children:"1.8.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Allow ",e.jsx(n.code,{children:"clickableRows"})," and ",e.jsx(n.code,{children:"bulk_actions"})," to work at the same time on ",e.jsx(n.code,{children:"GridView"})]}),`
`,e.jsxs(n.li,{children:["Various bugfixes on ",e.jsx(n.code,{children:"GridRow"})]}),`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"visualActivationOnClick"})," prop for ",e.jsx(n.code,{children:"GridView"})," and ",e.jsx(n.code,{children:"TileView"})]}),`
`,e.jsxs(n.li,{children:["Change the way click activation works on ",e.jsx(n.code,{children:"GridView"})," and ",e.jsx(n.code,{children:"TileView"})," rows. Now only one row can be activated at a time"]}),`
`]}),`
`,e.jsx(n.h2,{id:"182",children:"1.8.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Usability fixes for ",e.jsx(n.code,{children:"NumberInput"})]}),`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"input_only"}),", ",e.jsx(n.code,{children:"force_integer"}),", ",e.jsx(n.code,{children:"style"})," and ",e.jsx(n.code,{children:"class"})," props for ",e.jsx(n.code,{children:"NumberInput"})]}),`
`,e.jsxs(n.li,{children:["Forward ",e.jsx(n.code,{children:"focus"}),", ",e.jsx(n.code,{children:"blur"})," input events for ",e.jsx(n.code,{children:"NumberInput"})]}),`
`,e.jsxs(n.li,{children:["Use custom version of ",e.jsx(n.code,{children:"fuzzysearch"})," for ",e.jsx(n.code,{children:"SearchableSelect"})," and ",e.jsx(n.code,{children:"MultiSelect"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"181",children:"1.8.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"ScrollableList"})," component"]}),`
`]}),`
`,e.jsx(n.h2,{id:"180",children:"1.8.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Modal"}),", ",e.jsx(n.code,{children:"CardModal"})," and ",e.jsx(n.code,{children:"ActionSheet"})," components now play an outro transition instead of abruptly disappearing."]}),`
`,e.jsxs(n.li,{children:["Usability fixes for ",e.jsx(n.code,{children:"SearchableSelect"})," and ",e.jsx(n.code,{children:"MultiSelect"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchableSelect"})," and ",e.jsx(n.code,{children:"MultiSelect"})," now support loading options via an async function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchableSelect"})," and ",e.jsx(n.code,{children:"MultiSelect"})," now match results using a fuzzy ",e.jsx(n.code,{children:"search_strategy"}),". This can be changed to old behaviour by specifying ",e.jsx(n.code,{children:'search_strategy="strict"'}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"174",children:"1.7.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Update ApexCharts to version 3.33.2"}),`
`,e.jsx(n.li,{children:"Added support for subscribing to chart events"}),`
`,e.jsxs(n.li,{children:["Added support for distributed bar charts using new ",e.jsx(n.code,{children:"distributed"})," prop on ",e.jsx(n.code,{children:"BarChart"})," component"]}),`
`,e.jsx(n.li,{children:"Added examples for leveraging advanced chart features"}),`
`]}),`
`,e.jsx(n.h2,{id:"173",children:"1.7.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix docs for ",e.jsx(n.code,{children:"Popover"})]}),`
`,e.jsxs(n.li,{children:["Increase performance for ",e.jsx(n.code,{children:"SlidingPane"})," by using ResizeObserver when available"]}),`
`]}),`
`,e.jsx(n.h2,{id:"172",children:"1.7.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DatePicker"})," component: fix initialisation bug on mobile"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pagination"})," component: rename property ",e.jsx(n.code,{children:"breakThreshold"})," -> ",e.jsx(n.code,{children:"maxVisiblePages"})," plus bugfix and documentation update"]}),`
`]}),`
`,e.jsx(n.h2,{id:"171",children:"1.7.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Skeleton"})," component: Illustrate in example the use of empty string for ",e.jsx(n.code,{children:"color"})," prop."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pagination"})," component: Deprecate ",e.jsx(n.code,{children:"meta"})," prop. And use separate props for ",e.jsx(n.code,{children:"offset"}),", ",e.jsx(n.code,{children:"limit"}),", ",e.jsx(n.code,{children:"count"})," and ",e.jsx(n.code,{children:"total"})," instead."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pagination"})," component: Add methods ",e.jsx(n.code,{children:"prev()"}),", ",e.jsx(n.code,{children:"next()"}),", ",e.jsx(n.code,{children:"first()"}),", ",e.jsx(n.code,{children:"last()"})," and ",e.jsx(n.code,{children:"goto(page)"}),"."]}),`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"Divider"})," component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Modal"})," component can now be opened and closed programatically via ",e.jsx(n.code,{children:"open()"})," and ",e.jsx(n.code,{children:"close()"})," methods."]}),`
`,e.jsx(n.li,{children:"Added linting rules for ESLint. And corrected all resulting issues."}),`
`]}),`
`,e.jsx(n.h2,{id:"170",children:"1.7.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure uniform usage of ",e.jsx(n.code,{children:"$kws-theme-colors"})," across all components, this means ",e.jsx(n.code,{children:"$kws-theme-colors"})," can be independent of the global ",e.jsx(n.code,{children:"$colors"})," SCSS variable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DataSearch"})," component: Expand filters to fill area when main search input is not present."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DataSort"})," component: Increase click area for activating dropdown, and provide visual segementation between label and dropdown."]}),`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"Skeleton"})," component."]}),`
`]}),`
`,e.jsx(n.h2,{id:"169",children:"1.6.9"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"Timeline"}),", ",e.jsx(n.code,{children:"TimelineItem"})," and ",e.jsx(n.code,{children:"TimelineHeader"})," components."]}),`
`]}),`
`,e.jsx(n.h2,{id:"168",children:"1.6.8"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Vertically align ",e.jsx(n.code,{children:"is-icon"})," cells in ",e.jsx(n.code,{children:"Grid"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"167",children:"1.6.7"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Added granular events ",e.jsx(n.code,{children:"showing"}),", ",e.jsx(n.code,{children:"shown"}),", ",e.jsx(n.code,{children:"hiding"})," and ",e.jsx(n.code,{children:"hidden"})," for ",e.jsx(n.code,{children:"Popover"}),"."]}),`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"is-checked"})," class on ",e.jsx(n.code,{children:"Grid"})," when a row is checked using the multiselect checkboxes."]}),`
`,e.jsxs(n.li,{children:["New colors for ",e.jsx(n.code,{children:"is-checked"})," class on ",e.jsx(n.code,{children:"Grid"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"166",children:"1.6.6"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Enhance ",e.jsx(n.code,{children:"Popover"})," with native ",e.jsx(n.code,{children:"show"})," ",e.jsx(n.code,{children:"hide"})," ",e.jsx(n.code,{children:"enable"})," ",e.jsx(n.code,{children:"disable"})," methods"]}),`
`]}),`
`,e.jsx(n.h2,{id:"165",children:"1.6.5"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Filter fix on ",e.jsx(n.code,{children:"DataSearch"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"164",children:"1.6.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add support for ",e.jsx(n.code,{children:"dropdown_portal"})," prop in ",e.jsx(n.code,{children:"SearchableSelect"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"163",children:"1.6.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prevent submit call on ",e.jsx(n.code,{children:"MultiSelect"})," when ",e.jsx(n.code,{children:"Enter"})," key is pressed while searching"]}),`
`,e.jsxs(n.li,{children:["Fix filter items going blank after search is initiated in ",e.jsx(n.code,{children:"DataSearch"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"162",children:"1.6.2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"dropdown_portal"})," prop on ",e.jsx(n.code,{children:"MultiSelect"})," to allow rendering dropdown in alternative locations"]}),`
`]}),`
`,e.jsx(n.h2,{id:"161",children:"1.6.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"Portal"})," component"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Portal"})," for ",e.jsx(n.code,{children:"MultiSelect"})," and ",e.jsx(n.code,{children:"SearchableSelect"})," components"]}),`
`]}),`
`,e.jsx(n.h2,{id:"160",children:"1.6.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix ",e.jsx(n.code,{children:"DataSearch"})," responsiveness for mobile"]}),`
`,e.jsxs(n.li,{children:["Fix ",e.jsx(n.code,{children:"Pagination"})," CSS for mobile"]}),`
`,e.jsxs(n.li,{children:["Fix ",e.jsx(n.code,{children:"DataSort"})," responsiveness for mobile"]}),`
`,e.jsxs(n.li,{children:["Fix functionality of ",e.jsx(n.code,{children:"DataSearch"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"159",children:"1.5.9"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix ",e.jsx(n.code,{children:"z-index"})," issue with ",e.jsx(n.code,{children:"SearchableSelect"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"158",children:"1.5.8"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Showing ",e.jsx(n.code,{children:"undefined"})," on total in ",e.jsx(n.code,{children:"Pagination"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"157",children:"1.5.7"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Width calculation on ",e.jsx(n.code,{children:"DataSearch"})]}),`
`,e.jsxs(n.li,{children:["More ",e.jsx(n.code,{children:"text"})," validation ",e.jsx(n.code,{children:"Nl2br"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"156",children:"1.5.6"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix attribute of ",e.jsx(n.code,{children:"MultiSelect"})]}),`
`,e.jsxs(n.li,{children:["Fix ",e.jsx(n.code,{children:"text"})," checking on ",e.jsx(n.code,{children:"Nl2br"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"155",children:"1.5.5"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"BarChart"})]}),`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"LineChart"})]}),`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"AreaChart"})]}),`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"RadialChart"})]}),`
`,e.jsxs(n.li,{children:["Support ",e.jsx(n.code,{children:"sparklines"})," in ",e.jsx(n.code,{children:"Charts"})]}),`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"yAxisOptions"})," and ",e.jsx(n.code,{children:"horizontal"})," bar for ",e.jsx(n.code,{children:"Charts"})]}),`
`,e.jsxs(n.li,{children:["Fix attribute of ",e.jsx(n.code,{children:"ConfirmButton"})]}),`
`,e.jsxs(n.li,{children:["Fix error Handling in ",e.jsx(n.code,{children:"MixedChart"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"151",children:"1.5.1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Chart bugfixes"}),`
`,e.jsxs(n.li,{children:["Fix attribute of ",e.jsx(n.code,{children:"NumberInput"})," for UI testing"]}),`
`]}),`
`,e.jsx(n.h2,{id:"150",children:"1.5.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"DonutChart"})]}),`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"MixedChart"})]}),`
`,e.jsxs(n.li,{children:["Added ",e.jsx(n.code,{children:"PieChart"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"147",children:"1.4.7"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix value mismatch on ",e.jsx(n.code,{children:"NumberInput"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"146",children:"1.4.6"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix Typing bug on ",e.jsx(n.code,{children:"NumberInput"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"145",children:"1.4.5"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix ",e.jsx(n.strong,{children:"on:change"})," event on ",e.jsx(n.code,{children:"NumberInput"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"144",children:"1.4.4"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["import  ",e.jsx(n.code,{children:"Floatie"}),", ",e.jsx(n.code,{children:"FloatingUIOutput"}),", ",e.jsx(n.code,{children:"FloatiesStore"})," from ",e.jsx(n.code,{children:"@kws3/ui"})," for ",e.jsx(n.code,{children:"FloatingUIOutput"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"143",children:"1.4.3"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rename ",e.jsx(n.code,{children:"completion_timeout"})," to ",e.jsx(n.code,{children:"error_timeout"})," in ",e.jsx(n.code,{children:"Buttons"})]}),`
`]})]})}function o(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}function l(i){const n={h2:"h2",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(r,{title:"Changelog",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(o,{})]})}function f(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{f as default};
