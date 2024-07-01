import{j as s,M as t}from"./version-d179474b.js";import{u as o}from"./index-e8df77e3.js";import{M as n,C as c,e as i,f as l}from"./index-23db0581.js";import{d as h}from"./index-356e4a49.js";import{S as d}from"./Snackbars.stories-0ef976c5.js";import"./iframe-c2c5aa08.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-af010aa6.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function r(a){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...o(),...a.components};return s.jsxs(s.Fragment,{children:[s.jsx(t,{}),`
`,s.jsx(e.h1,{id:"snackbars",children:"Snackbars"}),`
`,s.jsx(e.h2,{id:"snackbars-components-for-showing-floating-alerts",children:"Snackbars components for showing floating alerts."}),`
`,s.jsx(n,{of:d}),`
`,s.jsx(c,{}),`
`,s.jsx(i,{}),`
`,s.jsxs("div",{className:"columns",children:[s.jsxs("div",{className:"column is-6",children:[s.jsx(e.h3,{id:"usage",children:"Usage"}),s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-js",children:`import { Snackbars } from '@kws3/ui';
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
`})})]}),s.jsxs("div",{className:"column is-6",children:[s.jsx(e.h3,{id:"usage-with-custom-buttons",children:"Usage with custom buttons"}),s.jsxs(e.p,{children:[s.jsx(e.code,{children:"buttons"}),` accept an array of objects or array of strings
If objects are used, the shape is:`]}),s.jsx(e.pre,{children:s.jsx(e.code,{children:`\\{
  text: <string>,
  color: <string>,
  click: <function>
}
`})}),s.jsx(e.p,{children:"Example:"}),s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-js",children:`  let {props, destroy} = Snackbars.create({
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
`})}),s.jsx("div",{className:"notification is-info is-light",children:s.jsxs(e.p,{children:["All button clicks will close the Snackbar.",s.jsx("br",{}),`
If there is a custom click handler, Snackbar will close after running the click handler.`]})})]})]}),`
`,s.jsx(e.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,s.jsx(e.p,{children:s.jsx(e.em,{children:"Default values shown as example"})}),`
`,s.jsx(l,{code:h`
    @use '@kws3/ui/styles/FloatingUI.scss' with(
      $theme-colors: dv.$colors,
      $item-width: 25rem,
      $progressbar-radius: 0 cv.getVar("radius") cv.getVar("radius")
        cv.getVar("radius"),
      $notification-radius: cv.getVar("radius"),
      $notification-shadow:
        0 1px 4px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.12
          ),
        0 0 6px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.04
          ),
      $snackbar-radius: cv.getVar("radius"),
      $snackbar-shadow:
        0 1px 4px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.12
          ),
        0 0 6px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.04
          ),
      $toast-radius: 1.5em,
      $toast-shadow:
        0 1px 4px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.12
          ),
        0 0 6px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.04
          ),
    );
  `})]})}function D(a={}){const{wrapper:e}={...o(),...a.components};return e?s.jsx(e,{...a,children:s.jsx(r,{...a})}):r(a)}export{D as default};
