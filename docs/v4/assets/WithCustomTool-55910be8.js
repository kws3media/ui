import{j as n}from"./jsx-runtime-2af955ec.js";import{u as e}from"./index-a6a89ff5.js";import{M as i,d as s}from"./index-d36baa79.js";import{M as c}from"./version-d3dfd908.js";import{S as a}from"./WithCustomTool.stories-6b44c5f5.js";import"./iframe-ea13b5b9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./RadialChart-40bf6d39.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function r(o){const t={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(s,{}),`
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
`})})]})}function X(o={}){const{wrapper:t}={...e(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(r,{...o})}):r(o)}export{X as default};
