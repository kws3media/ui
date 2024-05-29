import{j as o,M as a}from"./version-86b1272d.js";import{u as i}from"./index-beec74fd.js";import{M as c,C as p,e as d,f as r}from"./index-f5d408b8.js";import{d as n}from"./index-356e4a49.js";import{S as m}from"./Colorpicker.stories-ed225e31.js";import"./iframe-8c41e289.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-071af029.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function s(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{}),`
`,o.jsx(t.h1,{id:"colorpicker",children:"Colorpicker"}),`
`,o.jsx(t.h2,{id:"colorpicker-component-that-allows-you-to-select-a-colour",children:"Colorpicker component that allows you to select a colour."}),`
`,o.jsx(c,{of:m}),`
`,o.jsx(p,{}),`
`,o.jsx(d,{}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(r,{code:n`import { Colorpicker } from '@kws3/ui';`}),`
`,o.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,o.jsx(r,{code:n`@import '@kws3/ui/styles/Colorpicker.scss';`}),`
`,o.jsxs("div",{class:"notification is-info is-light",children:[o.jsx(t.p,{children:"This component supports HTML5 drag and drop."}),o.jsxs(t.p,{children:["Use ",o.jsx(t.code,{children:"event.dataTransfer.setData('text', <new_color>)"}),` on the draggable element.
Then once you drop the draggable element into this component, it picks up the data from the `,o.jsx(t.code,{children:"text"})," value."]}),o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example:"})}),o.jsx(r,{language:"jsx",code:n`<div
      style="background:#bada55"
      draggable="true"
      on:dragstart={(e) => {
        e.dataTransfer.setData("text", "bada55");
      }}>
      #bada55
    </div>`})]})]})}function _(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(s,{...e})}):s(e)}export{_ as default};
