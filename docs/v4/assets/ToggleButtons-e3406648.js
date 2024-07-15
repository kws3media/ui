import{j as s}from"./jsx-runtime-b9f2f282.js";import{u as c}from"./index-99bc58a8.js";import{M as r,C as a,e as m,f as n}from"./index-59a8ee7e.js";import{d as o}from"./index-356e4a49.js";import{M as l}from"./version-ea14a979.js";import{S as d,M as h}from"./ToggleButtons.stories-73c7b2b8.js";import"./iframe-55e7f7a7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-08c37f4d.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function i(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...c(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(l,{}),`
`,s.jsx(t.h1,{id:"togglebuttons",children:"ToggleButtons"}),`
`,s.jsx(t.h2,{id:"segmented-toggle-buttons",children:"Segmented Toggle Buttons"}),`
`,s.jsx(r,{of:d}),`
`,s.jsx(a,{of:h}),`
`,s.jsx(m,{}),`
`,s.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,s.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,s.jsx(n,{code:o`import { ToggleButtons  } from '@kws3/ui';`}),`
`,s.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,s.jsx(t.p,{children:s.jsx(t.em,{children:"Default values shown as example"})}),`
`,s.jsx(n,{code:o`
      @use '@kws3/ui/styles/ToggleButtons.scss' with(
        $count-background: cv.getVar("danger"),
        $count-color: cv.getVar("danger-invert"),
      );
    `}),`
`,s.jsx(t.h4,{id:"custom-active-and-inactive-classes",children:"Custom Active and Inactive classes"}),`
`,s.jsxs(t.p,{children:["Each button can have a custom ",s.jsx(t.code,{children:"active_class"})," or ",s.jsx(t.code,{children:"inactive_class"}),"."]}),`
`,s.jsxs(t.p,{children:["This class will override the main active/inactive class of the component, ",s.jsx(t.strong,{children:"Example:"})]}),`
`,s.jsx(n,{language:"jsx",code:o`
    <ToggleButtons
      ...
      options='{[
        {..., active_class:"is-success", inactive_class:"is-outlined is-success"},
        {..., active_class:"is-danger", inactive_class:"is-outlined is-danger"},
        {..., active_class:"is-info", inactive_class:"is-outlined is-info"}
      ]}'
    />
    `})]})}function I(e={}){const{wrapper:t}={...c(),...e.components};return t?s.jsx(t,{...e,children:s.jsx(i,{...e})}):i(e)}export{I as default};
