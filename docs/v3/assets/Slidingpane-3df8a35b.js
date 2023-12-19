var a=Object.freeze,c=Object.defineProperty;var o=(n,t)=>a(c(n,"raw",{value:a(t||n.slice())}));import{j as e,M as l}from"./version-6bd470a9.js";import{M as m,C as d,d as g,e as i}from"./index-b35ce1a0.js";import{d as s}from"./index-356e4a49.js";import{S as x}from"./Slidingpane.stories-6736e714.js";import{u as h}from"./index-f20201d2.js";import"./iframe-6321bde4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-1914c206.js";import"./index-8a90618b.js";import"./RadialChart-07c156ff.js";import"./index-f0c04adc.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";var p;function r(n){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",h5:"h5"},h(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),`
`,e.jsx(t.h1,{id:"sliding-panes",children:"Sliding Panes"}),`
`,e.jsx(t.h2,{id:"sliding-panes-component-for-svelte-applications",children:"Sliding panes component for Svelte applications"}),`
`,e.jsx(m,{of:x}),`
`,e.jsx(d,{}),`
`,e.jsx(g,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h5,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(i,{language:"javascript",code:s`import { SlidingPane, SlidingPaneSet } from '@kws3/ui';`}),`
`,e.jsx(t.h5,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(i,{language:"javascript",code:s`@import '@kws3/ui/styles/SlidingPane.scss';`}),`
`,e.jsx(t.h5,{id:"example",children:"Example"}),`
`,e.jsx(i,{language:"html",code:s(p||(p=o([`
      <SlidingPaneSet style="height:{pane_height}px">
        <SlidingPane
          active={steps[active_index].key == "step_one"}
          {v_center}
          {h_center}
          {track_height}
          class={klass}
          on:heightChange={heightChange}>
          <p>1st Slide</p>
        </SlidingPane>
        <SlidingPane
          active={steps[active_index].key == "step_two"}
          {v_center}
          {h_center}
          {track_height}
          class={klass}
          on:heightChange={heightChange}>
          <p>2nd Slide</p>
        </SlidingPane>
      </SlidingPaneSet>
      <script>
        import { SlidingPane, SlidingPaneSet } from "@kws3/ui";
        export let pane_height = 150,
          style = "",
          v_center = true,
          h_center = true,
          track_height = false,
          steps = [
            { key: "step_one", name: "Step One" },
            { key: "step_two", name: "Step Two" }
          ],
          active_index = 0;
        export function changeStep(i) {
          let max = steps.length;
          let _index = Math.max(0, Math.min(active_index + i, max - 1));
          active_index = _index;
        }
        function heightChange(event) {
          pane_height = event.detail.height;
        }
        let klass = "";
        export { klass as class };
      <\/script>
  `])))})]})}function R(n={}){const{wrapper:t}=Object.assign({},h(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{R as default};
