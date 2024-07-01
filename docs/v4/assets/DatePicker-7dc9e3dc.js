import{j as e,M as o}from"./version-6f0519c4.js";import{u as i}from"./index-f60da153.js";import{M as d,C as c,e as l,f as s}from"./index-541e97f1.js";import{d as n}from"./index-356e4a49.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as m}from"./DatePicker.stories-2acea736.js";import"./iframe-2486359f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-0ae793e3.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function r(a){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),`
`,e.jsx(t.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(t.h2,{id:"datepicker-component-that-allows-you-to-select-date",children:"Datepicker component that allows you to select date."}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(s,{code:n`import { Datepicker } from '@kws3/ui';`}),`
`,e.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsxs("div",{className:"notification is-warning",children:[e.jsx("strong",{children:"Note:"}),e.jsx("em",{children:" Need to import flatpicker SCSS file first"})]}),`
`,e.jsx(s,{code:n`
    @use 'flatpickr/dist/flatpickr';`}),`
`,e.jsx(t.h4,{id:"import-the-scss-1",children:"Import the SCSS:"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Default values shown as example"})}),`
`,e.jsx(s,{code:n`
      @use '@kws3/ui/styles/Datepicker.scss' with (
        $theme-colors: dv.$colors,
        $background: cv.getVar("scheme-main-ter"),
        $text: cv.getVar("text"),
        $shadow: cv.getVar("shadow"),
        $radius: cv.getVar("radius-small"),
      );
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
`,e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsxs(t.p,{children:[`The array can contain a list of dates, in string or object formats.
`,e.jsx(t.strong,{children:"Example:"})]}),e.jsx(s,{language:"jsx",code:n`
      <Datepicker
        disable_dates={[
          '2021-01-01',
          '2021-01-02',
          new Date(2025, 8, 9)
        ]}
      />
    `})]}),e.jsxs("div",{className:"column",children:[e.jsxs(t.p,{children:[`The array can contain a list of date ranges.
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
    `})]}),e.jsxs("div",{className:"column",children:[e.jsxs(t.p,{children:[`The array can also contain a function to dynamically determine the date.
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
    `})]})]})]})}function T(a={}){const{wrapper:t}={...i(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(r,{...a})}):r(a)}export{T as default};
