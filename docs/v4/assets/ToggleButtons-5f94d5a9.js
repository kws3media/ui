import{j as s,M as r}from"./version-6f0519c4.js";import{u as c}from"./index-f60da153.js";import{M as a,C as m,e as l,f as n}from"./index-541e97f1.js";import{d as o}from"./index-356e4a49.js";import{S as d,M as h}from"./ToggleButtons.stories-888a4eac.js";import"./iframe-2486359f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-0ae793e3.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function i(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...c(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{}),`
`,s.jsx(e.h1,{id:"togglebuttons",children:"ToggleButtons"}),`
`,s.jsx(e.h2,{id:"segmented-toggle-buttons",children:"Segmented Toggle Buttons"}),`
`,s.jsx(a,{of:d}),`
`,s.jsx(m,{of:h}),`
`,s.jsx(l,{}),`
`,s.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,s.jsx(e.h4,{id:"import-the-component",children:"Import the component:"}),`
`,s.jsx(n,{code:o`import { ToggleButtons  } from '@kws3/ui';`}),`
`,s.jsx(e.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,s.jsx(e.p,{children:s.jsx(e.em,{children:"Default values shown as example"})}),`
`,s.jsx(n,{code:o`
      @use '@kws3/ui/styles/ToggleButtons.scss' with(
        $count-background: cv.getVar("danger"),
        $count-color: cv.getVar("danger-invert"),
      );
    `}),`
`,s.jsx(e.h4,{id:"custom-active-and-inactive-classes",children:"Custom Active and Inactive classes"}),`
`,s.jsxs(e.p,{children:["Each button can have a custom ",s.jsx(e.code,{children:"active_class"})," or ",s.jsx(e.code,{children:"inactive_class"}),"."]}),`
`,s.jsxs(e.p,{children:["This class will override the main active/inactive class of the component, ",s.jsx(e.strong,{children:"Example:"})]}),`
`,s.jsx(n,{language:"jsx",code:o`
    <ToggleButtons
      ...
      options='{[
        {..., active_class:"is-success", inactive_class:"is-outlined is-success"},
        {..., active_class:"is-danger", inactive_class:"is-outlined is-danger"},
        {..., active_class:"is-info", inactive_class:"is-outlined is-info"}
      ]}'
    />
    `})]})}function E(t={}){const{wrapper:e}={...c(),...t.components};return e?s.jsx(e,{...t,children:s.jsx(i,{...t})}):i(t)}export{E as default};
