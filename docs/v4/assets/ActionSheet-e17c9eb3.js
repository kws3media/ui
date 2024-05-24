var n=Object.freeze,u=Object.defineProperty;var a=(e,s)=>n(u(e,"raw",{value:n(s||e.slice())}));import{j as t,M as m}from"./version-36e7533e.js";import{u as h}from"./index-106c01c9.js";import{M as p,d,f as o,e as x}from"./index-cb4e5ec9.js";import{d as i}from"./index-356e4a49.js";import{S as f,M as c}from"./ActionSheet.stories-81cda2d7.js";import"./iframe-bdeabeba.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-19f46828.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var l;function r(e){const s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",...h(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{}),`
`,t.jsx(s.h1,{id:"actionsheet",children:"ActionSheet"}),`
`,t.jsx(s.h2,{id:"actionsheet-components-for-showing-popups",children:"ActionSheet components for showing popups."}),`
`,t.jsx(p,{of:f}),`
`,t.jsx(d,{of:c}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(x,{}),`
`,t.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o,{code:i`import { ActionSheet } from '@kws3/ui';`}),`
`,t.jsx(s.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(o,{code:i`@import '@kws3/ui/styles/ActionSheet.scss';`}),`
`,t.jsx(s.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,t.jsx(o,{language:"css",code:i`
    $kws-actionsheet-background: $background;
    $kws-actionsheet-box-shadow: $card-shadow;
    $kws-actionsheet-box-radius: $radius;
  `}),`
`,t.jsx(s.h3,{id:"example",children:"Example"}),`
`,t.jsx(o,{language:"html",code:i(l||(l=a([`
    <div class="columns">
      <div class="column">
        <ActionSheet
          bind:is_active
          {closable}
          {close_on_click_outside}
          {style}
          class={klass}>
          <h1 class="title">This is a Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul class="menu-list">
            <li><a href={"javascript:void(0)"}>Menu 1</a></li>
            <li><a href={"javascript:void(0)"}>Menu 2</a></li>
          </ul>
          <hr class="is-small" />
          <button
            class="button is-danger is-fullwidth"
            type="button"
            on:click={() => (is_active = false)}>Close Action Sheet</button>
        </ActionSheet>
      </div>
    </div>
    <button
      class="button is-primary"
      type="button"
      on:click={() => (is_active = true)}>Open Action Sheet</button>
    <script>
      import { ActionSheet } from "@kws3/ui";
      export let is_active = false,
        closable = true,
        close_on_click_outside = true,
        style = "";
      let klass = "";
      export { klass as class };
    <\/script>
  `])))})]})}function F(e={}){const{wrapper:s}={...h(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(r,{...e})}):r(e)}export{F as default};
