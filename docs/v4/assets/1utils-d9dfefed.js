import{j as e,M as i}from"./version-8c81c218.js";import{u as a}from"./index-88e578b6.js";import{M as t}from"./index-4d8b0680.js";import"./iframe-81bb656e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";function s(n){const r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx(t,{title:"Utils/1. Overview"}),`
`,e.jsx(r.h2,{id:"1-truncate",children:"1. truncate"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"truncate"})," function shortens the given string to a specified length."]}),`
`,e.jsx(r.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { truncate } from "@kws3/ui/utils";
truncate(string, length);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-truncate",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-truncate--truncate",children:"🔗 Learn more about truncate"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"2-nl2br",children:"2. nl2br"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"nl2br"})," function replaces each newline (",e.jsx(r.code,{children:"\\n"}),") with HTML line breaks (",e.jsx(r.code,{children:"<br>"}),") in a string."]}),`
`,e.jsx(r.h4,{id:"usage-1",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { nl2br } from "@kws3/ui/utils";
nl2br(input);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-nl2br",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-nl2br--nl-2-br",children:"🔗 Learn more about nl2br"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"3-cloneobject",children:"3. cloneObject"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"cloneObject"})," function is used to clone any js object."]}),`
`,e.jsx(r.h4,{id:"usage-2",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { cloneObject } from "@kws3/ui/utils";
cloneObject(obj);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-cloneobject",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-cloneobject--clone-object",children:"🔗 Learn more about cloneObject"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"4-raf",children:"4. rAF"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"rAF"})," function is used to request an animation before the next repaint."]}),`
`,e.jsx(r.h4,{id:"usage-3",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { rAF } from "@kws3/ui/utils";
rAF(callBackFunction);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-raf",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-raf--raf",children:"🔗 Learn more about rAF"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"5-debounce",children:"5. debounce"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"debounce"})," function is used to specify the function to execute after the debounce time."]}),`
`,e.jsx(r.h4,{id:"usage-4",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { debounce } from "@kws3/ui/utils";
debounce(callBackFunction, threshold);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-debounce",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-debounce--debounce",children:"🔗 Learn more about debounce"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"6-capitalisefirstletter",children:"6. capitaliseFirstLetter"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"capitaliseFirstLetter"})," function converts the first character of a string to uppercase."]}),`
`,e.jsx(r.h4,{id:"usage-5",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { capitaliseFirstLetter } from "@kws3/ui/utils";
capitaliseFirstLetter(string);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-capitalisefirstletter",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-capitalisefirstletter--capitalise-first-letter",children:"🔗 Learn more about capitaliseFirstLetter"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"7-createdate",children:"7. createDate"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"createDate"})," function makes mysql dates work in safari."]}),`
`,e.jsx(r.h4,{id:"usage-6",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { createDate } from "@kws3/ui/utils";
createDate(date);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-createdate",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-createdate--create-date",children:"🔗 Learn more about createDate"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"8-smart-forms",children:"8. Smart Forms"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"makeForms"})," is a factory helper used for tracking if the form data is clean."]}),`
`,e.jsx(r.h4,{id:"usage-7",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { makeForms } from "@kws3/ui/form";
makeForms({form1_data}, {form2_data});
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-smart-forms",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-smartforms--smart-forms",children:"🔗 Learn more about Smart Forms"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"9-resize-observer",children:"9. Resize Observer"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"resizeObserver"})," is used to handle window resizing."]}),`
`,e.jsx(r.h4,{id:"usage-8",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`{#if hasResizeObserver}
  <div use:resizeObserver on:resize={resizeHandler}>
{/if}

<script>
  import { hasResizeObserver, resizeObserver } from "@kws3/ui/resizeObserver";
<\/script>
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-resize-observer",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-resizeobserver--resize-observer",children:"🔗 Learn more about Resize Observer"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"10-search",children:"10. Search"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"makeSearchEngine"})," is a factory helper used to create a search engine with options."]}),`
`,e.jsx(r.h4,{id:"usage-9",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { makeSearchEngine } from "@kws3/ui/search";
let searchOptions = {
  search_key, // optional, default 'value'
  scoreThreshold, // optional, default 5
  fuzzyOpts : {
    analyzeSubTerms, // Whether or not analyze sub-terms, default false
    analyzeSubTermDepth, //How many sub terms should be analyzed , default 10,
    highlighting: {
      before, // markup to add before mattched charectar, default '<em>'
      after, // markup to add after mattched charectar, default '</em>'
    },
  }
}
const fuzzysearch = makeSearchEngine(searchOptions);
fuzzysearch(needle, haystack);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-search",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-search--search",children:"🔗 Learn more about Search"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"11-keyboard-events",children:"11. keyboard events"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"keyboard"})," package is used to trigger events based on certain key strokes."]}),`
`,e.jsx(r.h4,{id:"usage-10",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<input type="text" use:enter={enterEvent} use:tab={tabEvent} />
<script>
  import { enter, tab } from "@kws3/ui/keyboard";
  function enterEvent() {
    console.log("Enter Pressed");
  }
<\/script>
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-keyboardevents",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-keyboardevents-1-pre-defined-events--1-pre-defined-events",children:"🔗 Learn more about keyboardEvents"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"12-makekeydefinition",children:"12. makeKeyDefinition"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"makeKeyDefinition"}),` is a factory helper used to create custom keydown handler events.
Key combinations can be made with any modifier keys from `,e.jsx(r.code,{children:"Shift"}),", ",e.jsx(r.code,{children:"Ctrl"}),", ",e.jsx(r.code,{children:"Alt"}),", ",e.jsx(r.code,{children:"Meta"})," with characters, numbers or function keys."]}),`
`,e.jsx(r.h4,{id:"usage-11",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import {makeKeyDefinition} from "@kws3/ui/keyboard";
const save = makeKeyDefinition(keyCombination) 
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-makekeydefinition",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-keyboardevents-2-create-key-events--2-create-key-events",children:"🔗 Learn more about makeKeyDefinition"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"13-currency",children:"13. currency"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"currency"})," function is used to return a number in a currency format."]}),`
`,e.jsx(r.h4,{id:"usage-12",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { currency } from "@kws3/ui/utils";
currency(number);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-currency",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-currency--currency",children:"🔗 Learn more about currency"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"14-datetoordinal",children:"14. dateToOrdinal"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"dateToOrdinal"})," function converts an date to an ordinal."]}),`
`,e.jsx(r.h4,{id:"usage-13",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { dateToOrdinal } from "@kws3/ui/utils";
dateToOrdinal(number);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-datetoordinal",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-datetoordinal--date-to-ordinal",children:"🔗 Learn more about dateToOrdinal"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"15-randomintegerfrominterval",children:"15. randomIntegerFromInterval"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"randomIntegerFromInterval"})," function is used to return a random integer."]}),`
`,e.jsx(r.h4,{id:"usage-14",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { randomIntegerFromInterval } from "@kws3/ui/utils";
randomIntegerFromInterval(min, max);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-randomintegerfrominterval",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-randominteger--random-integer",children:"🔗 Learn more about randomIntegerFromInterval"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"16-randompercent",children:"16. randomPercent"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"randomPercent"})," returns a random percentage. Default value for ",e.jsx(r.code,{children:"min"})," and ",e.jsx(r.code,{children:"max"})," are ",e.jsx(r.code,{children:"1"})," & ",e.jsx(r.code,{children:"100"})," respectively."]}),`
`,e.jsx(r.h4,{id:"usage-15",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { randomPercent } from "@kws3/ui/utils";
randomPercent(min, max);
randomPercent(min);
randomPercent();
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-randompercent",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-randompercent--random-percent",children:"🔗 Learn more about randomPercent"})}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"17-filedownloader",children:"17. fileDownloader"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"fileDownloader"})," function is used to download data/stream."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Parameter:"}),`
data: `,e.jsx(r.code,{children:"type : object"}),`
fileName: `,e.jsx(r.code,{children:"type : string"})]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { fileDownloader } from "@kws3/ui/utils";
fileDownloader(data, filename);
`})}),`
`,e.jsx(r.h4,{id:"-learn-more-about-filedownloader",children:e.jsx(r.a,{href:"?path=/story/utils-2-examples-filedownloader--file-downloader",children:"🔗 Learn more about fileDownloader"})}),`
`,e.jsx("br",{})]})}function x(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{x as default};
