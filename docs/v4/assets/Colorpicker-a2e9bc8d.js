import{j as e}from"./jsx-runtime-3fcd980c.js";import{u as n}from"./index-8b4f4e69.js";import{M as c,C as i,e as d,f as t}from"./index-13487d6d.js";import{d as s}from"./index-356e4a49.js";import{M as h}from"./version-b4edb0a0.js";import{S as l}from"./Colorpicker.stories-75618d11.js";import"./iframe-b8547dc1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-26b60ffd.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function a(r){const o={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{}),`
`,e.jsx(o.h1,{id:"colorpicker",children:"Colorpicker"}),`
`,e.jsx(o.h2,{id:"colorpicker-component-that-allows-you-to-select-a-colour",children:"Colorpicker component that allows you to select a colour."}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(i,{}),`
`,e.jsx(d,{}),`
`,e.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(t,{code:s`import { Colorpicker } from '@kws3/ui';`}),`
`,e.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Default values shown as example"})}),`
`,e.jsx(t,{code:s`
      @use '@kws3/ui/styles/Colorpicker.scss' with (
        $picker-shadow: cv.getVar("shadow"),
        $picker-border-color: cv.getVar("border"),
        $preview-shadow:
          0 0.125rem 0.1875rem
            hsla(
              cv.getVar("shadow-h"),
              cv.getVar("shadow-s"),
              cv.getVar("shadow-l"),
              0.1
            ),
          0 0 0 0.0625rem
            hsla(
              cv.getVar("shadow-h"),
              cv.getVar("shadow-s"),
              cv.getVar("shadow-l"),
              0.1
            ),
        $preview-radius: cv.getVar("radius-small"),
        $icon-shadow: 0 0.0625rem 0.0625rem
          hsla(cv.getVar("shadow-h"), cv.getVar("shadow-s"), cv.getVar("shadow-l"), 0.4),
        $dragover-hilight-color: cv.getVar("success-soft"),
      );
    `}),`
`,e.jsxs("div",{className:"notification is-info is-light sb-unstyled",children:[e.jsx("p",{className:"",children:"This component supports HTML5 drag and drop."}),e.jsxs("p",{className:"",children:["Use ",e.jsx(o.code,{children:"event.dataTransfer.setData('text', <new_color>)"}),` on the draggable element.
Then once you drop the draggable element into this component, it picks up the data from the `,e.jsx(o.code,{children:"text"})," value."]}),e.jsx("h4",{className:"",children:e.jsx(o.strong,{children:"Example:"})}),e.jsx(t,{language:"jsx",code:s`<div
      style="background:#bada55"
      draggable="true"
      on:dragstart={(e) => {
        e.dataTransfer.setData("text", "bada55");
      }}>
      #bada55
    </div>`})]})]})}function N(r={}){const{wrapper:o}={...n(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(a,{...r})}):a(r)}export{N as default};
