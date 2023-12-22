var s=Object.freeze,m=Object.defineProperty;var r=(o,t)=>s(m(o,"raw",{value:s(t||o.slice())}));import{j as e,M as l}from"./version-72fc2edc.js";import{T as d,M as h,C as x,d as _,e as n}from"./index-6f124e12.js";import{S as g,M as j}from"./Canvas.stories-7a402e27.js";import{d as a}from"./index-356e4a49.js";import{u as p}from"./index-68d4b3c0.js";import"./iframe-133915fa.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-1914c206.js";import"./RadialChart-894fbdd2.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";var c;function i(o){const t=Object.assign({h2:"h2",h3:"h3",h5:"h5"},p(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"canvas-component",children:"Canvas component."}),`
`,e.jsx(h,{of:g}),`
`,e.jsx(x,{of:j}),`
`,e.jsx(_,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n,{language:"javascript",code:a`import { Canvas } from '@kws3/ui';`}),`
`,e.jsx(t.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,e.jsx(n,{language:"javascript",code:a`@import '@kws3/ui/styles/Canvas.scss';`}),`
`,e.jsx(t.h3,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n,{language:"html",code:a(c||(c=r([`
      <Canvas
        bind:image
        {width}
        {height}
        {pen_width}
        {eraser_width}
        {pen_color}
        {background_image}
        {readonly}
        {disabled}
        {initial_scale}
        {expand_to}
        {expand_from}
        {expand_scale}
        {tools}
        {active_tool}
        {actions}
        {has_controls}
        {toolbar_placement}
        {control_position}
        />
    
    <script>
      import { Canvas, Pen, Eraser  } from '@kws3/ui';
      
      export let width = "250px",
        height = "250px",
        pen_width = 2,
        eraser_width = 6,
        pen_color = "#ff0000",
        background_image = "",
        readonly = false,
        disabled = false,
        image = "",
        initial_scale = 1,
        expand_to = "center",
        expand_from = "center",
        expand_scale = 50,
        tools = { Pen, Eraser },
        actions = ["controls", "colorpicker", "undo", "redo", "reset", "expand"],
        toolbar_placement = "bottom",
        control_position = "center",
        active_tool = "Pen",
        has_controls = true,
        cy = "";
    <\/script>
  `])))})]})}function R(o={}){const{wrapper:t}=Object.assign({},p(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(i,o)})):i(o)}export{R as default};
