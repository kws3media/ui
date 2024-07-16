import{j as t}from"./jsx-runtime-f9e34c97.js";import{u as a}from"./index-e985353b.js";import{M as i,C as m,e as c,f as e}from"./index-2a9cb901.js";import{d as n}from"./index-356e4a49.js";import{M as d}from"./version-42e95f6f.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as p,M as h}from"./DataSort.stories-1cce5efd.js";import"./iframe-6714d91b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-ae6f3512.js";import"./RadialChart-80400b1c.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(o){const r={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{}),`
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
    `})]})}function _(o={}){const{wrapper:r}={...a(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(s,{...o})}):s(o)}export{_ as default};
