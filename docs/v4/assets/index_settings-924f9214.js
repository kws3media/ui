import{j as e}from"./jsx-runtime-593b36f9.js";import{u as i}from"./index-a6b36cb5.js";import{M as r}from"./index-5adacd09.js";import{M as a}from"./version-69ab0678.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";function s(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{}),`
`,e.jsx(r,{title:"Framework Settings",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h2,{id:"framework-settings",children:"Framework Settings"}),`
`,e.jsx(n.p,{children:`Framework wide settings can be applied in one place.
Ideally in the entry file of your app.`}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {applySettings} from '@kws3/ui';

applySettings({
  defaultIconFamily: 'fa',
  defaultToastPlacement: 'bottom',
  defaultSnackbarPlacement:'bottom-right',
  defaultNotificationPlacement:'top-right'
  hasTransitions: true,
  defaultChartColors: [
    "#284BED",
    "#ED6134",
    "#1DAFEC",
    "#EDB405",
    "#11EDB7",
    "#77ED11",
  ]
});

//you can also apply just one setting:
applySettings({
  hasTransitions: false
});
`})}),`
`,e.jsx(n.h3,{id:"available-settings",children:"Available Settings"}),`
`,e.jsx("table",{className:"table is-fullwidth",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Setting Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Default Value"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultIconFamily"})}),e.jsx("td",{children:"Default icon family used by all Icon components"}),e.jsx("td",{children:e.jsx("code",{children:'"fa"'})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultToastPlacement"})}),e.jsxs("td",{children:["Default placement of toast notifications used by the Toast component.",e.jsx("br",{}),`
When `,e.jsx("code",{children:"Toasts.create()"})," is used"]}),e.jsx("td",{children:e.jsx("code",{children:'"bottom"'})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultSnackbarPlacement"})}),e.jsxs("td",{children:["Default placement of snackbar notifications used by the Snackbars component.",e.jsx("br",{}),`
When `,e.jsx("code",{children:"Snackbar.create()"})," is used"]}),e.jsx("td",{children:e.jsx("code",{children:'"bottom-right"'})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultNotificationPlacement"})}),e.jsxs("td",{children:["Default placement of floating notifications used by the Notifications component.",e.jsx("br",{}),`
When `,e.jsx("code",{children:"Notifications.create()"})," is used"]}),e.jsx("td",{children:e.jsx("code",{children:'"top-right"'})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"hasTransitions"})}),e.jsxs("td",{children:["All components that have transitions, use this setting.",e.jsx("br",{}),`
When turned off, no transitions will take place`]}),e.jsx("td",{children:e.jsx("code",{children:"true"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultChartColors"})}),e.jsxs("td",{children:["Default array of colors for chart visualisations shared by all charts.",e.jsx("br",{}),"The order of colors matter, they will be used in sequence for each series of data."]}),e.jsx("td",{children:e.jsx("code",{children:'["#284BED", "#ED6134", "#1DAFEC", "#EDB405", "#11EDB7", "#77ED11"]'})})]})]})})]})}function u(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
