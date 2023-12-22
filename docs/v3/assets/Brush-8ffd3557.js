import{j as n,M as r}from"./version-46984b68.js";import{M as o,C as i}from"./index-533cc3fe.js";import{S as c}from"./Brush.stories-b6270b5d.js";import{u as a}from"./index-0255daf9.js";import"./iframe-4dbfbe64.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-1914c206.js";import"./RadialChart-673b8adc.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";function s(t){const e=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},a(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{}),`
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
`})})})]})]})}function D(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(s,t)})):s(t)}export{D as default};
