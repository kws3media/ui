import{j as e,M as t}from"./version-1ca47c9b.js";import{M as o,b as a}from"./index-d73905c5.js";import{S as c,M as h}from"./Sync.stories-04db24c5.js";import{u as i}from"./index-2f396c7f.js";import"./iframe-9a5b466a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-9bc519a8.js";import"./RadialChart-3e7fe717.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(r){const n=Object.assign({h3:"h3",p:"p",h4:"h4",pre:"pre",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{}),`
`,e.jsx(n.h3,{id:"synchronized-charts",children:"Synchronized Charts"}),`
`,e.jsx(n.p,{children:"When you have multiple charts with a common x-axis and significant difference in y values, it’s a prevalent way to visualize it through synched charts."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(a,{of:h}),`
`,e.jsxs("div",{class:"columns",children:[e.jsxs("div",{class:"column content",children:[e.jsx("p",{children:e.jsx(n.p,{children:`In this example, hovering over one chart will hilight the corresponding
datapoints in the other charts.`})}),e.jsx("p",{children:e.jsx(n.p,{children:"There seems to be a caveat to which types of charts can link together:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Line and Area charts can be linked to each other."}),e.jsx("li",{children:e.jsx(n.p,{children:"A bar chart can be linked to another bar chart, or a mixed chart only"})})]})]}),e.jsxs("div",{class:"column content",children:[e.jsx("p",{children:"To enable this:"}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsxs(n.p,{children:["Ensure a unique id is provided for each chart in ",e.jsx("code",{children:"options.chart"})]})}),e.jsx("li",{children:e.jsxs(n.p,{children:["Ensure a shared group name is provided for every linked chart in ",e.jsx("code",{children:"options.chart"})]})})]}),e.jsx("p",{children:"See example code below."})]})]}),`
`,e.jsx("div",{class:"columns",children:e.jsxs("div",{class:"column",children:[e.jsx(n.h4,{id:"example-code",children:"Example code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<LineChart options={{
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
`})})]})})]})}function X(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,r)})):s(r)}export{X as default};
