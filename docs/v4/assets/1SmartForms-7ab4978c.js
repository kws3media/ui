import{j as r}from"./jsx-runtime-f9e34c97.js";import{u as e}from"./index-e985353b.js";import{M as s,d as a}from"./index-2a9cb901.js";import{M as i}from"./version-42e95f6f.js";import{S as m,M as d}from"./SmartForms.stories-24b2cbdb.js";import"./iframe-6714d91b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-6b22eff6.js";import"./index-8cc5c1ab.js";import"./index-4339844e.js";function t(o){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{}),`
`,r.jsx(s,{of:m}),`
`,r.jsx(n.h3,{id:"smart-form-example",children:"Smart Form Example"}),`
`,r.jsxs(n.p,{children:["The ",r.jsx(n.code,{children:"makeForms"})," factory helper is used to track if the form data is clean."]}),`
`,r.jsx(n.p,{children:r.jsx(n.strong,{children:"Example:"})}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-html",children:`<form>
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
`,r.jsx(a,{of:d})]})}function E(o={}){const{wrapper:n}={...e(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(t,{...o})}):t(o)}export{E as default};
