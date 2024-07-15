import{j as s}from"./jsx-runtime-2af955ec.js";import{u as r}from"./index-a6a89ff5.js";import{M as a,T as m,C as c,e as l,f as o}from"./index-d36baa79.js";import{d as t}from"./index-356e4a49.js";import{M as d}from"./version-d3dfd908.js";import{T as p}from"./Transitions.stories-2a5ecb8c.js";import"./iframe-ea13b5b9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-40bf6d39.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function i(e){const n={h2:"h2",h3:"h3",h5:"h5",p:"p",...r(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(d,{}),`
`,s.jsx(a,{of:p}),`
`,s.jsx(m,{}),`
`,s.jsx(n.h2,{id:"a-set-of-components-to-declaratively-use-svelte-transitions",children:"A set of components to declaratively use Svelte transitions"}),`
`,s.jsx(c,{}),`
`,s.jsx(l,{}),`
`,s.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,s.jsx(n.h5,{id:"import-the-component",children:"Import the component:"}),`
`,s.jsx(o,{code:t`import { Transition } from '@kws3/ui';`}),`
`,s.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,s.jsxs("div",{className:"columns",children:[s.jsxs("div",{className:"column",children:[s.jsx(n.p,{children:"Fly"}),s.jsx(o,{language:"jsx",code:t`
        <Transition
          type="fly"
          duration="{300}"
          x="{0}"
          y="{20}"
        />`})]}),s.jsxs("div",{className:"column",children:[s.jsx(n.p,{children:"Fade"}),s.jsx(o,{language:"jsx",code:t`
        <Transition
          type="fade"
          duration="{300}"
        />
      `})]}),s.jsxs("div",{className:"column",children:[s.jsx(n.p,{children:"Slide"}),s.jsx(o,{language:"jsx",code:t`
        <Transition
          type="slide"
          duration="{300}"
        />
      `})]}),s.jsxs("div",{className:"column",children:[s.jsx(n.p,{children:"Scale"}),s.jsx(o,{language:"jsx",code:t`
        <Transition
          type="scale"
          duration="{300}"
          from="{0.5}"
          to="{1}"
        />
      `})]})]})]})}function _(e={}){const{wrapper:n}={...r(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(i,{...e})}):i(e)}export{_ as default};
