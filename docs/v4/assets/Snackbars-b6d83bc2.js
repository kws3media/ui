import{j as s,M as a}from"./version-86b1272d.js";import{u as i}from"./index-beec74fd.js";import{M as c,C as l,e as h,f as o}from"./index-f5d408b8.js";import{d as t}from"./index-356e4a49.js";import{S as d}from"./Snackbars.stories-d26184f9.js";import"./iframe-8c41e289.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-071af029.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function r(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",p:"p",pre:"pre",...i(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{}),`
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
`,s.jsx(o,{code:t`@import 'path/to/node_modules/@kws3/ui/styles/FloatingUI.scss';`}),`
`,s.jsx(n.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,s.jsx(o,{language:"css",code:t`
    $kws-theme-colors: $colors;
    $kws3-floating-item-width: 30rem;
  `})]})}function D(e={}){const{wrapper:n}={...i(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(r,{...e})}):r(e)}export{D as default};
