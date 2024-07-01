import{j as n,M as r}from"./version-b520517b.js";import{u as a}from"./index-45417e07.js";import{M as o,C as i}from"./index-bebc8d91.js";import{S as c}from"./Brush.stories-9ebd28a3.js";import"./iframe-c20f7db4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./RadialChart-55d2132c.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{}),`
`,n.jsx(e.h3,{id:"brush-charts",children:"Brush Charts"}),`
`,n.jsx(e.p,{children:"It's possible to link 2 charts so that one chart will act as a brush for the other."}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(i,{}),`
`,n.jsxs("div",{className:"content",children:[n.jsx("div",{children:"In this example, the smaller chart acts as a brush chart for the larger chart above."}),n.jsx("div",{children:"See annotated example code below."})]}),`
`,n.jsxs("div",{className:"columns",children:[n.jsx("div",{className:"column",children:n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`//Large chart on top

<LineChart 
  options={{
    chart: {
      id: "itemsChart", //ensure unique id
      toolbar: { //this allows panning large chart
        autoSelected: "pan",
        show: false,
      },
      zoom: { 
        // panning doesn't work unless "zoom" is enabled
        enabled: true,
      },
    },
    xaxis: {
      decimalsInFloat: 0,
      tickAmount: 5,
      // if not using timeseries data, 
      // set \`type\` to "numeric"
      type: "numeric",
    },
  }}
  {data}
/>
`})})}),n.jsx("div",{className:"column",children:n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`//Small chart below large chart

<AreaChart options={{
    chart: {
      id: "brush", //ensure unique id
      brush: { //enable brushing on \`traget\`
        target: "itemsChart",
        enabled: true,
      },
      selection: { 
        //preselect part of chart on load
        enabled: true,
        xaxis: {
          min: 50,
          max: 100,
        },
      },
    },
    xaxis: {
      // if not using timeseries data, 
      // set \`type\` to "numeric"
      type: "numeric",
      //hide axis labels on brush chart
      labels: { show: false },
    },
    yaxis: {
      tickAmount: 2,
    },
  }}
  {data}
  ...
/>
`})})})]})]})}function S(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{S as default};
