import{j as n,M as s}from"./version-6f0519c4.js";import{u as e}from"./index-f60da153.js";import{M as a,d as i}from"./index-541e97f1.js";import{S as m,M as d}from"./SmartForms.stories-24b2cbdb.js";import"./iframe-2486359f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-6b22eff6.js";import"./index-8cc5c1ab.js";import"./index-4339844e.js";function o(t){const r={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{}),`
`,n.jsx(a,{of:m}),`
`,n.jsx(r.h3,{id:"smart-form-example",children:"Smart Form Example"}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.code,{children:"makeForms"})," factory helper is used to track if the form data is clean."]}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Example:"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-html",children:`<form>
  <input class="{$errors.email ? 'is-danger' : ''}" bind:value={$data.email} />
  <input class="{$errors.password ? 'is-danger' : ''}" bind:value={$data.password} />
  <button disabled={!$isValid}>Submit</button>
</form>

<script>
  import { makeForms, notEmpty, withMsg } from "@kws3/ui/form";

  let form;
  let data;
  let errors;
  let isValid;
  let isTouched;
  let tracker;
  let validators = {
    email: withMsg("Email should not be empty", notEmpty),
    password: withMsg("Password should not be empty", notEmpty),
  };

  $: load();

  function load() {
    form = makeForms({
      data: {
        email: "",
        password: "",
      },
      validators,
    });
    data = form.formData;
    errors = form.errors;
    isValid = form.isValid;
    isTouched = form.isTouched;
    tracker = form.tracker;
  }
<\/script>
`})}),`
`,n.jsx(i,{of:d})]})}function y(t={}){const{wrapper:r}={...e(),...t.components};return r?n.jsx(r,{...t,children:n.jsx(o,{...t})}):o(t)}export{y as default};
