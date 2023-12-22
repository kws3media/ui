import{j as n,M as a}from"./version-1ebd099f.js";import{M as s,b as i,e as m}from"./index-ed8b7af3.js";import{d as c}from"./index-356e4a49.js";import{S as p}from"./WithBGImage.stories-b5799224.js";import{u as o}from"./index-71d4d6da.js";import"./iframe-d0aba181.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-1914c206.js";import"./RadialChart-31c1923f.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";function r(t){const e=Object.assign({h3:"h3",p:"p",strong:"strong",pre:"pre",code:"code",h5:"h5"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsx(s,{of:p}),`
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
`,n.jsx(m,{language:"css",code:c`
    .kws-canvas-wrapper .kws-pen-input canvas{
      background-repeat: repeat;
      ....
    }
  `})]})}function O(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(r,t)})):r(t)}export{O as default};
