import{j as n}from"./jsx-runtime-15806eb5.js";import{u as s}from"./index-0b532f45.js";import{ae as r,af as o}from"./index-3f41c45d.js";import{M as i}from"./version-fd7ab27b.js";import{S as c}from"./Brush.stories-f60d4765.js";import"./iframe-d03f20d9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./RadialChart-ccd68622.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function a(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
`,n.jsx(e.h3,{id:"brush-charts",children:"Brush Charts"}),`
`,n.jsx(e.p,{children:"It's possible to link 2 charts so that one chart will act as a brush for the other."}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(o,{}),`
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
`})})})]})]})}function k(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{k as default};
