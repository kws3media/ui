import{j as e}from"./jsx-runtime-395e6f4a.js";import{u as s}from"./index-f84756d5.js";import{ae as o,ag as c}from"./index-36797c46.js";import{M as i}from"./version-80223c14.js";import{S as d,M as a}from"./KeyboardEvents.stories-6464d28e.js";import"./iframe-bc6190dd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-b03eecd1.js";import"./index-af29543d.js";function t(r){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx(o,{of:d}),`
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
`,e.jsx(c,{of:a})]})}function M(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{M as default};
