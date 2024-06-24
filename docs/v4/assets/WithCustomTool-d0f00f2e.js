import{j as n,M as i}from"./version-b0b5f48d.js";import{u as r}from"./index-41ab6891.js";import{M as s,d as c}from"./index-045aef30.js";import{S as a}from"./WithCustomTool.stories-c24e8dc2.js";import"./iframe-0d8aea47.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./RadialChart-0c9d9241.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function e(o){const t={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
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
`})})]})}function P(o={}){const{wrapper:t}={...r(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(e,{...o})}):e(o)}export{P as default};
