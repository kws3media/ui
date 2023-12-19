import{j as n,M as i}from"./version-6bd470a9.js";import{M as s,b as c}from"./index-b35ce1a0.js";import{S as a}from"./WithCustomTool.stories-3e5c6d33.js";import{u as r}from"./index-f20201d2.js";import"./iframe-6321bde4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-1914c206.js";import"./RadialChart-07c156ff.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";function e(o){const t=Object.assign({h3:"h3",p:"p",strong:"strong",pre:"pre",code:"code"},r(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(c,{}),`
`,n.jsx(t.h3,{id:"canvas-with-custom-drawing-tool-circle",children:"Canvas with custom drawing tool Circle"}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Example:"})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`
  <Canvas
    bind:image
    active_tool="Circle"
    {width}
    {tools}
  />
    
<script>
  import { Canvas, Eraser } from "@kws3/ui";

  export let image;

  let Circle = {
    name: "Circle",
    icon: "circle-o",
    draw: (instance) => {
      const x = instance.currentPos.x;
      const y = instance.currentPos.y;
      const radius = 50;

      instance.context.beginPath();
      instance.context.arc(x, y, radius, 0, 2 * Math.PI);
      instance.context.stroke();
      instance.context.globalCompositeOperation = "source-over";
    },
  };


  export let width = "350px",
    height='250px';

    let tools = {Circle, Eraser};
<\/script>
`})})]})}function P(o={}){const{wrapper:t}=Object.assign({},r(),o.components);return t?n.jsx(t,Object.assign({},o,{children:n.jsx(e,o)})):e(o)}export{P as default};
