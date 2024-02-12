import{j as n,M as a}from"./version-006acd3a.js";import{M as o,b as s}from"./index-2f8575b5.js";import{S as c,M as l}from"./Drill.stories-d23185d1.js";import{u as r}from"./index-19db5137.js";import"./iframe-3cfa3624.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-9bc519a8.js";import"./RadialChart-a276cee1.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function i(t){const e=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsx(e.h3,{id:"drilldown-or-linked-charts",children:"Drilldown or Linked Charts"}),`
`,n.jsx(e.p,{children:"It is possible to construct drilldown charts by leveraging chart events to trigger other charts."}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(s,{of:l}),`
`,n.jsxs("div",{className:"content",children:[n.jsx("div",{children:n.jsxs(e.p,{children:["In this example, we leverage the ",n.jsx("code",{children:"dataPointSelection"})," event on the first chart, to trigger a new chart."]})}),n.jsx("div",{children:n.jsxs(e.p,{children:["The fancy sliding animation is not a feature of the chart library. It's a custom effect added simply using CSS classes, all leveraging the ",n.jsx("code",{children:"dataPointSelection"})," event."]})}),n.jsx("div",{children:n.jsx(e.p,{children:"See annotated and simplified example code below."})})]}),`
`,n.jsxs("div",{className:"columns",children:[n.jsx("div",{className:"column",children:n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`//Main bar chart

<BarChart 
  captured_events={["dataPointSelection"]}
  on:dataPointSelection={() => {
    //Trigger Pie Chart
  }}
  options={{
    states: {
      active: {
        //apply a color filter on active state
        //for easy visual identification
        filter: {
          type: "darken",
          value: 0.35,
        },
      },
    },
  }}
  {data}
  ...
/>
`})})}),n.jsx("div",{className:"column",children:n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`//Drilled down pie chart

<PieChart options={{
    theme: {
      monochrome: {
        enabled: true,
        //change this in event listener
        //of main chart, to match 
        //color of selected data
        color: "#ff0000",
      },
    }
  }}
  {data}
  ...
/>
`})})})]})]})}function X(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(i,t)})):i(t)}export{X as default};
