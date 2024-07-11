var a=Object.freeze,p=Object.defineProperty;var r=(e,t)=>a(p(e,"raw",{value:a(t||e.slice())}));import{j as o}from"./jsx-runtime-593b36f9.js";import{u as m}from"./index-a6b36cb5.js";import{T as l,M as d,C as h,e as x,f as n}from"./index-5adacd09.js";import{S as _,M as u}from"./Canvas.stories-a46162fe.js";import{d as s}from"./index-356e4a49.js";import{M as f}from"./version-69ab0678.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-ae6f3512.js";import"./RadialChart-a46fe6c5.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var c;function i(e){const t={h2:"h2",h3:"h3",h5:"h5",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(f,{}),`
`,o.jsx(l,{}),`
`,o.jsx(t.h2,{id:"canvas-component",children:"Canvas component."}),`
`,o.jsx(d,{of:_}),`
`,o.jsx(h,{of:u}),`
`,o.jsx(x,{}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(n,{code:s`import { Canvas } from '@kws3/ui';`}),`
`,o.jsx(t.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,o.jsx(n,{code:s`@use '@kws3/ui/styles/Canvas.scss';`}),`
`,o.jsx(t.h3,{id:"usage-example",children:"Usage Example"}),`
`,o.jsx(n,{language:"html",code:s(c||(c=r([`
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
  `])))})]})}function R(e={}){const{wrapper:t}={...m(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(i,{...e})}):i(e)}export{R as default};
