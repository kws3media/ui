import{j as e,M as o}from"./version-1ca47c9b.js";import{M as c,C as d,d as l,e as s}from"./index-d73905c5.js";import{d as n}from"./index-356e4a49.js";import"./chunk-WFFRPTHA-e4fb21b4.js";import{S as m}from"./DatePicker.stories-29f604cb.js";import{u as r}from"./index-2f396c7f.js";import"./iframe-9a5b466a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-3e7fe717.js";import"./index-9bc519a8.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function i(a){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",h4:"h4",code:"code",p:"p",strong:"strong"},r(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),`
`,e.jsx(t.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(t.h2,{id:"datepicker-component-that-allows-you-to-select-date",children:"Datepicker component that allows you to select date."}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(s,{language:"javascript",code:n`import { Datepicker } from '@kws3/ui';`}),`
`,e.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsxs("div",{class:"notification is-warning",children:[e.jsx("strong",{children:"Note:"}),e.jsx("em",{children:"Need to import flatpicker SCSS file first"})]}),`
`,e.jsx(s,{language:"javascript",code:n`
    @import 'flatpickr/dist/flatpickr';
    @import '@kws3/ui/styles/Datepicker.scss';`}),`
`,e.jsx(t.h4,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,e.jsx(s,{language:"css",code:n`
      $kws-theme-colors: $colors;
      $kws-datepicker-background: $scheme-main-ter;
      $kws-datepicker-text: $text;
    `}),`
`,e.jsxs(t.h3,{id:"min_date-and-max_date",children:[e.jsx(t.code,{children:"min_date"})," and ",e.jsx(t.code,{children:"max_date"})]}),`
`,e.jsxs(t.p,{children:[`Can either send a string or a Date object for both these properties.
`,e.jsx(t.strong,{children:"Example:"})]}),`
`,e.jsx(s,{language:"jsx",code:n`
      <Datepicker
        min_date="2021-06-06"
        max_date={(new Date('2021-01-01')}
      />
    `}),`
`,e.jsxs(t.h3,{id:"enable_dates-and-disable_dates",children:[e.jsx(t.code,{children:"enable_dates"})," and ",e.jsx(t.code,{children:"disable_dates"})]}),`
`,e.jsx(t.p,{children:"These two properties expect an array to be sent to them."}),`
`,e.jsxs(t.p,{children:["To enable specific dates, use ",e.jsx(t.code,{children:"enable_dates"}),". To disable specific dates, use ",e.jsx(t.code,{children:"disable_dates"}),"."]}),`
`,e.jsxs("div",{class:"columns",children:[e.jsxs("div",{class:"column",children:[e.jsxs(t.p,{children:[`The array can contain a list of dates, in string or object formats.
`,e.jsx(t.strong,{children:"Example:"})]}),e.jsx(s,{language:"jsx",code:n`
      <Datepicker
        disable_dates={[
          '2021-01-01',
          '2021-01-02',
          new Date(2025, 8, 9)
        ]}
      />
    `})]}),e.jsxs("div",{class:"column",children:[e.jsxs(t.p,{children:[`The array can contain a list of date ranges.
`,e.jsx(t.strong,{children:"Example:"})]}),e.jsx(s,{language:"jsx",code:n`
      <Datepicker
        disable_dates={[
          {
            from: '2021-01-01',
            to: '2021-01-02'
          },
          {
            from: new Date(2025, 8, 9),
            to: new Date(2025, 9, 9)
          }
        ]}
      />
    `})]}),e.jsxs("div",{class:"column",children:[e.jsxs(t.p,{children:[`The array can also contain a function to dynamically determine the date.
`,e.jsx(t.strong,{children:"Example:"})]}),e.jsx(s,{language:"jsx",code:n`
      <Datepicker
        disable_dates={[
          function(date) {
            // return true to disable
            return (
              date.getDay() === 0 ||
              date.getDay() === 6
            );
          }
        ]}
      />
    `})]})]})]})}function O(a={}){const{wrapper:t}=Object.assign({},r(),a.components);return t?e.jsx(t,Object.assign({},a,{children:e.jsx(i,a)})):i(a)}export{O as default};
