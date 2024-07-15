import{j as s}from"./jsx-runtime-b9f2f282.js";import{u as a}from"./index-99bc58a8.js";import{M as r,C as n,e as i,f as h}from"./index-59a8ee7e.js";import{d as c}from"./index-356e4a49.js";import{M as d}from"./version-ea14a979.js";import{S as p}from"./Toasts.stories-aadfed8b.js";import"./iframe-55e7f7a7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-ae6f3512.js";import"./RadialChart-08c37f4d.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function e(t){const o={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsx(d,{}),`
`,s.jsx(o.h1,{id:"toasts",children:"Toasts"}),`
`,s.jsx(o.h2,{id:"toasts-components-for-showing-floating-alerts",children:"Toasts components for showing floating alerts."}),`
`,s.jsx(r,{of:p}),`
`,s.jsx(n,{}),`
`,s.jsx(i,{}),`
`,s.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,s.jsx(o.pre,{children:s.jsx(o.code,{className:"language-js",children:`import { Toasts } from '@kws3/ui';

// Push toast like this
let {props, destroy} = Toasts.create({
  message: "I am a toast, butter me!...",
  position: "top",
  color: "info",
  beforeClose: (props) => {
    //do something here before close
  },
  afterClose: (props) => {
    //do something here after close
  },
});

// toast will close after duration expires
// or you can close it manually like this:
destroy();

//you can also close it like this:
Toasts.remove(props);
//where \`props\` is the from the output of Toasts.create()
`})}),`
`,s.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,s.jsx(o.p,{children:s.jsx(o.em,{children:"Default values shown as example"})}),`
`,s.jsx(h,{code:c`
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
  `})]})}function X(t={}){const{wrapper:o}={...a(),...t.components};return o?s.jsx(o,{...t,children:s.jsx(e,{...t})}):e(t)}export{X as default};
