import{j as e,M as s}from"./version-8579e5b6.js";import{M as o,b as c}from"./index-8a78b23d.js";import{S as a,M as d}from"./MakeKeyEvents.stories-a0dfbc5e.js";import{u as r}from"./index-af723c2c.js";import"./iframe-47ba6b62.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-9bc519a8.js";import"./index-b03eecd1.js";import"./index-af29543d.js";function i(t){const n=Object.assign({h3:"h3",p:"p",code:"code",h4:"h4",strong:"strong",ul:"ul",li:"li",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{}),`
`,e.jsx(o,{of:a}),`
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
`,e.jsx(c,{of:d})]})}function C(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{C as default};
