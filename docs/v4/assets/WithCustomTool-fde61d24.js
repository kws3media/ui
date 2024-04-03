import{j as n,M as i}from"./version-4e36a9d9.js";import{M as s,b as c}from"./index-cb88d0be.js";import{S as a}from"./WithCustomTool.stories-b7989980.js";import{u as r}from"./index-bf7d46a3.js";import"./iframe-b83abd24.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-9bc519a8.js";import"./RadialChart-8a9389a1.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function e(o){const t=Object.assign({h3:"h3",p:"p",strong:"strong",pre:"pre",code:"code"},r(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
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
