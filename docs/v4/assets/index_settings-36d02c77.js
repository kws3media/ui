import{j as e,M as r}from"./version-006acd3a.js";import{M as a}from"./index-2f8575b5.js";import{u as i}from"./index-19db5137.js";import"./iframe-3cfa3624.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";function s(n){const t=Object.assign({h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{}),`
`,e.jsx(a,{title:"Framework Settings",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(t.h2,{id:"framework-settings",children:"Framework Settings"}),`
`,e.jsx(t.p,{children:`Framework wide settings can be applied in one place.
Ideally in the entry file of your app.`}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import {applySettings} from '@kws3/ui';

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
`,e.jsx(t.h3,{id:"available-settings",children:"Available Settings"}),`
`,e.jsx("table",{class:"table is-fullwidth",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Setting Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Default Value"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultIconFamily"})}),e.jsx("td",{children:"Default icon family used by all Icon components"}),e.jsx("td",{children:e.jsx("code",{children:'"fa"'})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultToastPlacement"})}),e.jsxs("td",{children:["Default placement of toast notifications used by the Toast component.",e.jsx("br",{}),`
When `,e.jsx("code",{children:"Toasts.create()"})," is used"]}),e.jsx("td",{children:e.jsx("code",{children:'"bottom"'})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultSnackbarPlacement"})}),e.jsxs("td",{children:["Default placement of snackbar notifications used by the Snackbars component.",e.jsx("br",{}),`
When `,e.jsx("code",{children:"Snackbar.create()"})," is used"]}),e.jsx("td",{children:e.jsx("code",{children:'"bottom-right"'})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultNotificationPlacement"})}),e.jsxs("td",{children:["Default placement of floating notifications used by the Notifications component.",e.jsx("br",{}),`
When `,e.jsx("code",{children:"Notifications.create()"})," is used"]}),e.jsx("td",{children:e.jsx("code",{children:'"top-right"'})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"hasTransitions"})}),e.jsxs("td",{children:["All components that have transitions, use this setting.",e.jsx("br",{}),`
When turned off, no transitions will take place`]}),e.jsx("td",{children:e.jsx("code",{children:"true"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"defaultChartColors"})}),e.jsxs("td",{children:["Default array of colors for chart visualisations shared by all charts.",e.jsx("br",{}),"The order of colors matter, they will be used in sequence for each series of data."]}),e.jsx("td",{children:e.jsx("code",{children:'["#284BED", "#ED6134", "#1DAFEC", "#EDB405", "#11EDB7", "#77ED11"]'})})]})]})})]})}function p(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{p as default};
