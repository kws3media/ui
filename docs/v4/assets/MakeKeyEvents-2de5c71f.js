import{j as e,M as s}from"./version-8c81c218.js";import{u as r}from"./index-88e578b6.js";import{M as o,d as c}from"./index-4d8b0680.js";import{S as d,M as a}from"./MakeKeyEvents.stories-350fbbd5.js";import"./iframe-81bb656e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-b03eecd1.js";import"./index-af29543d.js";function i(t){const n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"makekeydefinition",children:"makeKeyDefinition"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"makeKeyDefinition"}),` is a factory helper used to create custom keydown handler events.
Key combinations can be made with any modifier keys from `,e.jsx(n.code,{children:"Shift"}),", ",e.jsx(n.code,{children:"Ctrl"}),", ",e.jsx(n.code,{children:"Alt"}),", ",e.jsx(n.code,{children:"Meta"})," with characters, numbers or function keys."]}),`
`,e.jsx(n.h4,{id:"parameters",children:e.jsx(n.strong,{children:"Parameters"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["definition : ",e.jsx(n.code,{children:"type: Number | string"})," can be a string like ",e.jsx(n.code,{children:"Enter"}),", ",e.jsx(n.code,{children:"Tab"})," or number as keyCode, also allows key combinations like ",e.jsx(n.code,{children:"ctrl+d"}),", ",e.jsx(n.code,{children:"ctrl+alt+x"})]}),`
`,e.jsxs(n.li,{children:["CommandKey : ",e.jsx(n.code,{children:"type: boolean"})," if true, in mac 'ctrl' key binding will be shift on 'command' key."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
Function take params, node :`,e.jsx(n.code,{children:"type : DOM Element"})," and event : ",e.jsx(n.code,{children:"type: function"}),"."]}),`
`,e.jsx(n.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {makeKeyDefinition} from "@kws3/ui/keyboard";
const save = makeKeyDefinition(keyCombination) 
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<input type="text" use:ctrlAltC={(event) => {eventKeyPressed(event, "ctrl+alt+c")}} />

<script>
  import {makeKeyDefinition} from "@kws3/ui/keyboard";

  const ctrlAltC = makeKeyDefinition("ctrl+alt+c");

  function eventKeyPressed(event, key) {
    eventText = key + " Pressed";
  }
<\/script>
`})}),`
`,e.jsx(c,{of:a})]})}function M(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{M as default};
