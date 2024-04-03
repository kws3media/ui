import{j as s,M as a}from"./version-4e36a9d9.js";import{M as c,C as l,d as h,e as t}from"./index-cb88d0be.js";import{d as o}from"./index-356e4a49.js";import{S as d}from"./Snackbars.stories-27906f11.js";import{u as i}from"./index-bf7d46a3.js";import"./iframe-b83abd24.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-9bc519a8.js";import"./RadialChart-8a9389a1.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function r(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",h5:"h5"},i(),e.components);return s.jsxs(s.Fragment,{children:[s.jsx(a,{}),`
`,s.jsx(n.h1,{id:"snackbars",children:"Snackbars"}),`
`,s.jsx(n.h2,{id:"snackbars-components-for-showing-floating-alerts",children:"Snackbars components for showing floating alerts."}),`
`,s.jsx(c,{of:d}),`
`,s.jsx(l,{}),`
`,s.jsx(h,{}),`
`,s.jsxs("div",{className:"columns",children:[s.jsxs("div",{className:"column is-6",children:[s.jsx(n.h3,{id:"usage",children:"Usage"}),s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-js",children:`import { Snackbars } from '@kws3/ui';
// Push snackbar like this
let {props, destroy} = Snackbars.create({
  message: "I am a snackbar...",
  persistent: true,
  position: "top",
  color: "info",
  beforeClose: (props) => {
    //do something here before close
  },
  afterClose: (props) => {
    //do something here after close
  },
});
// snackbar will close after duration expires
// or you can close it manually like this:
destroy();
//you can also close it like this:
Snackbars.remove(props);
//where \`props\` is the from the output of Snackbars.create()
`})})]}),s.jsxs("div",{className:"column is-6",children:[s.jsx(n.h3,{id:"usage-with-custom-buttons",children:"Usage with custom buttons"}),s.jsxs(n.p,{children:[s.jsx(n.code,{children:"buttons"}),` accept an array of objects or array of strings
If objects are used, the shape is:`]}),s.jsx(n.pre,{children:s.jsx(n.code,{children:`\\{
  text: <string>,
  color: <string>,
  click: <function>
}
`})}),s.jsx(n.p,{children:"Example:"}),s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-js",children:`  let {props, destroy} = Snackbars.create({
    ...other_opts,
    buttons:[
      {
        text: "Undo", //button text
        color: "warning", //button text color
        click: () => {alert("Undo clicked")} //click handler
      },
      "Ok" //just a string
    ]
  });
`})}),s.jsx("div",{className:"notification is-info is-light",children:s.jsxs(n.p,{children:["All button clicks will close the Snackbar.",s.jsx("br",{}),`
If there is a custom click handler, Snackbar will close after running the click handler.`]})})]})]}),`
`,s.jsx(n.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,s.jsx(t,{language:"javascript",code:o`@import 'path/to/node_modules/@kws3/ui/styles/FloatingUI.scss';`}),`
`,s.jsx(n.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,s.jsx(t,{language:"css",code:o`
    $kws-theme-colors: $colors;
    $kws3-floating-item-width: 30rem;
  `})]})}function X(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?s.jsx(n,Object.assign({},e,{children:s.jsx(r,e)})):r(e)}export{X as default};
