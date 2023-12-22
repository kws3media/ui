import{j as s,M as r}from"./version-46984b68.js";import{M as c,T as m,C as l,d,e as t}from"./index-533cc3fe.js";import{d as o}from"./index-356e4a49.js";import{T as p}from"./Transitions.stories-ccf8aa3f.js";import{u as a}from"./index-0255daf9.js";import"./iframe-4dbfbe64.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-673b8adc.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";function i(e){const n=Object.assign({h2:"h2",h3:"h3",h5:"h5",p:"p"},a(),e.components);return s.jsxs(s.Fragment,{children:[s.jsx(r,{}),`
`,s.jsx(c,{of:p}),`
`,s.jsx(m,{}),`
`,s.jsx(n.h2,{id:"a-set-of-components-to-declaratively-use-svelte-transitions",children:"A set of components to declaratively use Svelte transitions"}),`
`,s.jsx(l,{}),`
`,s.jsx(d,{}),`
`,s.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,s.jsx(n.h5,{id:"import-the-component",children:"Import the component:"}),`
`,s.jsx(t,{language:"javascript",code:o`import { Transition } from '@kws3/ui';`}),`
`,s.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,s.jsxs("div",{className:"columns",children:[s.jsxs("div",{className:"column",children:[s.jsx(n.p,{children:"Fly"}),s.jsx(t,{language:"jsx",code:o`
        <Transition
          type="fly"
          duration="{300}"
          x="{0}"
          y="{20}"
        />`})]}),s.jsxs("div",{className:"column",children:[s.jsx(n.p,{children:"Fade"}),s.jsx(t,{language:"jsx",code:o`
        <Transition
          type="fade"
          duration="{300}"
        />
      `})]}),s.jsxs("div",{className:"column",children:[s.jsx(n.p,{children:"Slide"}),s.jsx(t,{language:"jsx",code:o`
        <Transition
          type="slide"
          duration="{300}"
        />
      `})]}),s.jsxs("div",{className:"column",children:[s.jsx(n.p,{children:"Scale"}),s.jsx(t,{language:"jsx",code:o`
        <Transition
          type="scale"
          duration="{300}"
          from="{0.5}"
          to="{1}"
        />
      `})]})]})]})}function E(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?s.jsx(n,Object.assign({},e,{children:s.jsx(i,e)})):i(e)}export{E as default};
