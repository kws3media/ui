var a=Object.freeze,l=Object.defineProperty;var o=(n,t)=>a(l(n,"raw",{value:a(t||n.slice())}));import{j as e}from"./jsx-runtime-15806eb5.js";import{u as p}from"./index-0b532f45.js";import{ae as c,af as m,ah as d,ai as i}from"./index-3f41c45d.js";import{d as s}from"./index-356e4a49.js";import{M as g}from"./version-fd7ab27b.js";import{S as x}from"./Slidingpane.stories-2f0f4e3c.js";import"./iframe-d03f20d9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./index-ae6f3512.js";import"./index-ce0c298e.js";import"./RadialChart-ccd68622.js";import"./index-4339844e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var r;function h(n){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),`
`,e.jsx(t.h1,{id:"sliding-panes",children:"Sliding Panes"}),`
`,e.jsx(t.h2,{id:"sliding-panes-component-for-svelte-applications",children:"Sliding panes component for Svelte applications"}),`
`,e.jsx(c,{of:x}),`
`,e.jsx(m,{}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h5,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(i,{code:s`import { SlidingPane, SlidingPaneSet } from '@kws3/ui';`}),`
`,e.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Default values shown as example"})}),`
`,e.jsx(i,{code:s`
    @use '@kws3/ui/styles/SlidingPane.scss' with(
      $easing: cv.getVar("easing"),
    );
  `}),`
`,e.jsx(t.h5,{id:"example",children:"Example"}),`
`,e.jsx(i,{language:"html",code:s(r||(r=o([`
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
  `])))})]})}function O(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(h,{...n})}):h(n)}export{O as default};
