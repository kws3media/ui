import{j as n}from"./jsx-runtime-3fcd980c.js";import{u as r}from"./index-8b4f4e69.js";import{M as o,d as a}from"./index-13487d6d.js";import{M as s}from"./version-b4edb0a0.js";import{S as c,M as l}from"./Drill.stories-10489c54.js";import"./iframe-b8547dc1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./RadialChart-26b60ffd.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function i(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{}),`
`,n.jsx(e.h3,{id:"drilldown-or-linked-charts",children:"Drilldown or Linked Charts"}),`
`,n.jsx(e.p,{children:"It is possible to construct drilldown charts by leveraging chart events to trigger other charts."}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(a,{of:l}),`
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
`})})})]})]})}function P(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{P as default};
