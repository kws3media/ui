import{j as t}from"./jsx-runtime-f80f9341.js";import{u as s}from"./index-e7737f15.js";import{ae as i,af as m,ah as c,ai as e}from"./index-0d96c106.js";import{d as n}from"./index-356e4a49.js";import{M as d}from"./version-6fdd0533.js";import"./chunk-454WOBUV-9b3ada54.js";import{S as p,M as h}from"./DataSort.stories-4bab7aef.js";import"./iframe-508739bf.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./index-ae6f3512.js";import"./RadialChart-72e896af.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function a(o){const r={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{}),`
`,t.jsx(i,{of:p}),`
`,t.jsx(r.h1,{id:"datasort",children:"DataSort"}),`
`,t.jsx(r.h2,{id:"datasort-component-in-datagrid",children:"DataSort component in datagrid."}),`
`,t.jsx(m,{of:h}),`
`,t.jsx(c,{}),`
`,t.jsx(r.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(r.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(e,{code:n`import { DataSort } from '@kws3/ui';`}),`
`,t.jsx(r.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(r.p,{children:t.jsx(r.em,{children:"Default values shown as example"})}),`
`,t.jsx(e,{code:n`
    @use '@kws3/ui/styles/DataSort.scss' with (
      $border-radius: cv.getVar("radius-medium"),
      $background: cv.getVar("border"),
      $label-background: hsla(
        cv.getVar("scheme-h"),
        cv.getVar("scheme-s"),
        90%,
        1
      ),
      $dropdown-text-color: cv.getVar("primary"),
      $dropdown-marker-color: cv.getVar("primary"),
    );
    `})]})}function _(o={}){const{wrapper:r}={...s(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(a,{...o})}):a(o)}export{_ as default};
