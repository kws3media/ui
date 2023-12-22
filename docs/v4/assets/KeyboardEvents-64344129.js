import{j as e,M as o}from"./version-72fc2edc.js";import{M as c,b as i}from"./index-6f124e12.js";import{S as d,M as a}from"./KeyboardEvents.stories-128cbbda.js";import{u as t}from"./index-68d4b3c0.js";import"./iframe-133915fa.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-1914c206.js";import"./index-b03eecd1.js";import"./index-af29543d.js";function s(r){const n=Object.assign({h3:"h3",p:"p",code:"code",strong:"strong",pre:"pre"},t(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(n.h3,{id:"keyboard-events",children:"keyboard events"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"keyboard"})," package is used to trigger events based on certain key strokes."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Available Events:"}),`
`,e.jsx(n.code,{children:"enter"}),", ",e.jsx(n.code,{children:"tab"}),", ",e.jsx(n.code,{children:"escape"}),", ",e.jsx(n.code,{children:"space"}),", ",e.jsx(n.code,{children:"leftarrow"}),", ",e.jsx(n.code,{children:"rightarrow"}),", ",e.jsx(n.code,{children:"downarrow"}),", ",e.jsx(n.code,{children:"uparrow"}),", ",e.jsx(n.code,{children:"backspace"}),", ",e.jsx(n.code,{children:"del"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<input use:event={customEvent} />
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<input type="text" use:enter={enterEvent} use:tab={tabEvent} />
<script>
  import { enter, tab } from "@kws3/ui/keyboard";
  function enterEvent() {
    console.log("Enter Pressed");
  }
<\/script>
`})}),`
`,e.jsx(i,{of:a})]})}function y(r={}){const{wrapper:n}=Object.assign({},t(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,r)})):s(r)}export{y as default};
