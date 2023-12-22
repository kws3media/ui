import{j as n,M as e}from"./version-46c3a277.js";import{M as a,b as i}from"./index-022903f7.js";import{S as m,M as d}from"./SmartForms.stories-08ab8b9e.js";import{u as s}from"./index-7fbbac9d.js";import"./iframe-437dea7a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-1914c206.js";import"./index-1c3b7081.js";import"./index-81505e0c.js";import"./index-f0c04adc.js";function o(t){const r=Object.assign({h3:"h3",p:"p",code:"code",strong:"strong",pre:"pre"},s(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e,{}),`
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
`,n.jsx(i,{of:d})]})}function $(t={}){const{wrapper:r}=Object.assign({},s(),t.components);return r?n.jsx(r,Object.assign({},t,{children:n.jsx(o,t)})):o(t)}export{$ as default};
