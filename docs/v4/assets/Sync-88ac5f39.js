import{j as e}from"./jsx-runtime-822190ba.js";import{u as s}from"./index-67f97c62.js";import{M as t,d as a}from"./index-990f178a.js";import{M as o}from"./version-847f8cc0.js";import{S as c,M as h}from"./Sync.stories-b6c7a1fc.js";import"./iframe-4b7f32ad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./RadialChart-5b1df549.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function i(r){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),`
`,e.jsx(n.h3,{id:"synchronized-charts",children:"Synchronized Charts"}),`
`,e.jsx(n.p,{children:"When you have multiple charts with a common x-axis and significant difference in y values, it’s a prevalent way to visualize it through synched charts."}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(a,{of:h}),`
`,e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column content",children:[e.jsx("p",{children:e.jsx(n.p,{children:`In this example, hovering over one chart will hilight the corresponding
datapoints in the other charts.`})}),e.jsx("p",{children:e.jsx(n.p,{children:"There seems to be a caveat to which types of charts can link together:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Line and Area charts can be linked to each other."}),e.jsx("li",{children:e.jsx(n.p,{children:"A bar chart can be linked to another bar chart, or a mixed chart only"})})]})]}),e.jsxs("div",{className:"column content",children:[e.jsx("p",{children:"To enable this:"}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsxs(n.p,{children:["Ensure a unique id is provided for each chart in ",e.jsx("code",{children:"options.chart"})]})}),e.jsx("li",{children:e.jsxs(n.p,{children:["Ensure a shared group name is provided for every linked chart in ",e.jsx("code",{children:"options.chart"})]})})]}),e.jsx("p",{children:"See example code below."})]})]}),`
`,e.jsx("div",{className:"columns",children:e.jsxs("div",{className:"column",children:[e.jsx(n.h4,{id:"example-code",children:"Example code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<LineChart options={{
    chart:{
      id:"chart1",
      group:"Sales" //this has to be same for all linked charts
    }
  }}
  data={dataSet1}
  ...
/>
<AreaChart options={{
    chart:{
      id:"chart2",
      group:"Sales" //this has to be same for all linked charts
    }
  }} 
  data={dataSet2}
  ...
/>
`})})]})})]})}function D(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{D as default};
