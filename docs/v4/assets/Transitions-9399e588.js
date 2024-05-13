import{j as s,M as a}from"./version-5c76052d.js";import{u as r}from"./index-a0b883bb.js";import{M as m,T as c,C as l,e as d,f as o}from"./index-37ed338a.js";import{d as t}from"./index-356e4a49.js";import{T as p}from"./Transitions.stories-41bbc272.js";import"./iframe-88f54f4e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-efdf549e.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function i(e){const n={h2:"h2",h3:"h3",h5:"h5",p:"p",...r(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{}),`
`,s.jsx(m,{of:p}),`
`,s.jsx(c,{}),`
`,s.jsx(n.h2,{id:"a-set-of-components-to-declaratively-use-svelte-transitions",children:"A set of components to declaratively use Svelte transitions"}),`
`,s.jsx(l,{}),`
`,s.jsx(d,{}),`
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
      `})]})]})]})}function E(e={}){const{wrapper:n}={...r(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(i,{...e})}):i(e)}export{E as default};
