import{j as e,M as i}from"./version-8c81c218.js";import{u as n}from"./index-88e578b6.js";import{M as c,C as d,e as h,f as t}from"./index-4d8b0680.js";import{d as s}from"./index-356e4a49.js";import{S as l}from"./Colorpicker.stories-c51bac21.js";import"./iframe-81bb656e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-9a800552.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function a(r){const o={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx(o.h1,{id:"colorpicker",children:"Colorpicker"}),`
`,e.jsx(o.h2,{id:"colorpicker-component-that-allows-you-to-select-a-colour",children:"Colorpicker component that allows you to select a colour."}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(d,{}),`
`,e.jsx(h,{}),`
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
`,e.jsxs("div",{class:"notification is-info is-light",children:[e.jsx(o.p,{children:"This component supports HTML5 drag and drop."}),e.jsxs(o.p,{children:["Use ",e.jsx(o.code,{children:"event.dataTransfer.setData('text', <new_color>)"}),` on the draggable element.
Then once you drop the draggable element into this component, it picks up the data from the `,e.jsx(o.code,{children:"text"})," value."]}),e.jsx(o.p,{children:e.jsx(o.strong,{children:"Example:"})}),e.jsx(t,{language:"jsx",code:s`<div
      style="background:#bada55"
      draggable="true"
      on:dragstart={(e) => {
        e.dataTransfer.setData("text", "bada55");
      }}>
      #bada55
    </div>`})]})]})}function T(r={}){const{wrapper:o}={...n(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(a,{...r})}):a(r)}export{T as default};
