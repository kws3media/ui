import{j as n}from"./jsx-runtime-593b36f9.js";import{u as o}from"./index-a6b36cb5.js";import{M as a,d as s,f as i}from"./index-5adacd09.js";import{d as m}from"./index-356e4a49.js";import{M as p}from"./version-69ab0678.js";import{S as c}from"./WithBGImage.stories-c8aa26f2.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-ae6f3512.js";import"./RadialChart-a46fe6c5.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function t(r){const e={code:"code",h3:"h3",h5:"h5",p:"p",pre:"pre",strong:"strong",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(s,{}),`
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
  let background_image = "images/canvas_bg.png";

  let tools = {Pen, Eraser};

<\/script>
`})}),`
`,n.jsx(e.h5,{id:"can-override-background-image-css",children:"Can override background image CSS:"}),`
`,n.jsx(i,{language:"css",code:m`
    .kws-canvas-wrapper .kws-pen-input canvas{
      background-repeat: repeat;
      ....
    }
  `})]})}function X(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{X as default};
