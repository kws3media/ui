import{j as n,M as a}from"./version-36e7533e.js";import{u as o}from"./index-106c01c9.js";import{M as s,d as i,f as m}from"./index-cb4e5ec9.js";import{d as p}from"./index-356e4a49.js";import{S as c}from"./WithBGImage.stories-064c825e.js";import"./iframe-bdeabeba.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-19f46828.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function t(r){const e={code:"code",h3:"h3",h5:"h5",p:"p",pre:"pre",strong:"strong",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(i,{}),`
`,n.jsx(e.h3,{id:"canvas-with-background-image-example",children:"Canvas with background image Example"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`
  <Canvas
    bind:image
    active_tool="Pen"
    {width}
    {tools}
    {background_image}
  />
    
<script>
  import { Canvas, Pen, Eraser } from '@kws3/ui';
  
  let let width = "350px";
  let height='250px';
  let background_image = "/images/canvas_bg.png";

  let tools = {Pen, Eraser};

<\/script>
`})}),`
`,n.jsx(e.h5,{id:"can-override-background-image-css",children:"Can override background image CSS:"}),`
`,n.jsx(m,{language:"css",code:p`
    .kws-canvas-wrapper .kws-pen-input canvas{
      background-repeat: repeat;
      ....
    }
  `})]})}function D(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{D as default};
