import{j as n,M as a}from"./version-6bd470a9.js";import{M as o,b as s}from"./index-b35ce1a0.js";import{S as c,M as l}from"./Drill.stories-a32fb770.js";import{u as r}from"./index-f20201d2.js";import"./iframe-6321bde4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-1914c206.js";import"./RadialChart-07c156ff.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";function i(t){const e=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
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