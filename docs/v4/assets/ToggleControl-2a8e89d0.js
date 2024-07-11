import{j as o}from"./jsx-runtime-593b36f9.js";import{u as i}from"./index-a6b36cb5.js";import{M as a,C as r,e as m,f as n}from"./index-5adacd09.js";import{d as s}from"./index-356e4a49.js";import{M as c}from"./version-69ab0678.js";import{S as h,M as g}from"./ToggleControl.stories-16312b50.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-a46fe6c5.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function l(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{}),`
`,o.jsx(e.h1,{id:"togglecontrol",children:"ToggleControl"}),`
`,o.jsx(e.h2,{id:"to-be-used-when-using-toggle-within-a-form",children:"To be used when using Toggle within a form"}),`
`,o.jsx(e.h4,{id:"to-be-used-with-toggle--togglebuttons-components-so-that-they-can-be-lined-up-with-a-label-classlabel-in-existing-forms",children:'To be used with <Toggle> & <ToggleButtons> components, so that they can be lined up with a <label class="label"> in existing forms.'}),`
`,o.jsx(e.h4,{id:"it-is-a-wrapper-component-with-no-functionality-of-its-own",children:"It is a wrapper component with no functionality of it's own."}),`
`,o.jsx(a,{of:h}),`
`,o.jsx(r,{of:g}),`
`,o.jsx(m,{}),`
`,o.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(e.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(n,{code:s`import { ToggleControl  } from '@kws3/ui';`}),`
`,o.jsxs(e.h4,{id:"example-with-toggle",children:["Example with ",o.jsx(e.code,{children:"<Toggle>"})]}),`
`,o.jsx(n,{language:"jsx",code:s`
    <ToggleControl>
      <label for="some-primary-text" class="label">
        Primary Label
        <small class="is-block help">Some secondary Text</small>
      </label>
      <Toggle  />
    </ToggleControl>
    `}),`
`,o.jsxs(e.h4,{id:"example-with-togglebuttons",children:["Example with ",o.jsx(e.code,{children:"<ToggleButtons>"})]}),`
`,o.jsx(n,{language:"jsx",code:s`
    <ToggleControl>
      <label for="some-secondary-text" class="label">
        Secondary Label
        <small class="is-block help">Some secondary Text</small>
      </label>
      <ToggleButtons
        options='{[
          {"name": "Yes", "value": 1},
          {"name": "No", "value": 0},
          {"name": "Maybe", "value": null}
        ]}'
      />
    </ToggleControl>
    `})]})}function E(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(l,{...t})}):l(t)}export{E as default};
