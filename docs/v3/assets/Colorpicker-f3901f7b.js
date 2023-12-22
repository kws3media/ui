import{j as o,M as a}from"./version-46984b68.js";import{M as c,C as p,d,e as r}from"./index-533cc3fe.js";import{d as n}from"./index-356e4a49.js";import{S as m}from"./Colorpicker.stories-3b5ae6a9.js";import{u as i}from"./index-0255daf9.js";import"./iframe-4dbfbe64.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-673b8adc.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function s(e){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",code:"code",strong:"strong"},i(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(a,{}),`
`,o.jsx(t.h1,{id:"colorpicker",children:"Colorpicker"}),`
`,o.jsx(t.h2,{id:"colorpicker-component-that-allows-you-to-select-a-colour",children:"Colorpicker component that allows you to select a colour."}),`
`,o.jsx(c,{of:m}),`
`,o.jsx(p,{}),`
`,o.jsx(d,{}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(r,{language:"javascript",code:n`import { Colorpicker } from '@kws3/ui';`}),`
`,o.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,o.jsx(r,{language:"javascript",code:n`@import '@kws3/ui/styles/Colorpicker.scss';`}),`
`,o.jsxs("div",{class:"notification is-info is-light",children:[o.jsx(t.p,{children:"This component supports HTML5 drag and drop."}),o.jsxs(t.p,{children:["Use ",o.jsx(t.code,{children:"event.dataTransfer.setData('text', <new_color>)"}),` on the draggable element.
Then once you drop the draggable element into this component, it picks up the data from the `,o.jsx(t.code,{children:"text"})," value."]}),o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example:"})}),o.jsx(r,{language:"jsx",code:n`<div
      style="background:#bada55"
      draggable="true"
      on:dragstart={(e) => {
        e.dataTransfer.setData("text", "bada55");
      }}>
      #bada55
    </div>`})]})]})}function E(e={}){const{wrapper:t}=Object.assign({},i(),e.components);return t?o.jsx(t,Object.assign({},e,{children:o.jsx(s,e)})):s(e)}export{E as default};
