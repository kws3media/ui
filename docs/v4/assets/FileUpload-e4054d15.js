var t=Object.freeze,d=Object.defineProperty;var i=(s,o)=>t(d(s,"raw",{value:t(o||s.slice())}));import{j as e,M as m}from"./version-8c81c218.js";import{u as p}from"./index-88e578b6.js";import{M as c,C as u,e as h,f as r}from"./index-4d8b0680.js";import{d as n}from"./index-356e4a49.js";import{S as f}from"./FileUpload.stories-b9fec1c0.js";import"./iframe-81bb656e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-9a800552.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";var l;function a(s){const o={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...p(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),`
`,e.jsx(o.h1,{id:"fileupload",children:"FileUpload"}),`
`,e.jsx(o.h2,{id:"custom-file-upload-control",children:"Custom file upload control"}),`
`,e.jsx(c,{of:f}),`
`,e.jsx(u,{}),`
`,e.jsx(h,{}),`
`,e.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(r,{code:n`import { FileUpload } from '@kws3/ui';`}),`
`,e.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Default values shown as example"})}),`
`,e.jsx(r,{code:n`
      @use '@kws3/ui/styles/FileUpload.scss' with (
        $theme-colors: dv.$colors,
        $progress-bg-color: cv.getVar("success-light"),
        $progress-text-color: cv.getVar("success-dark"),
        $progress-easing: linear,
      );
    `}),`
`,e.jsx(o.h4,{id:"example",children:"Example:"}),`
`,e.jsx(r,{language:"html",code:n(l||(l=i([`
    <FileUpload
      on:file_chosen={(event) => onFileChosen(event)}
      on:file_uploaded
      on:file_upload_error
      max="1048579"
      allowed={["png", "jpg", "jpeg"]}
      message="Upload new avatar..."
      {disabled}
      classes="" />
    <script>
      import { FileUpload } from "@kws3/ui";
      function onFileChosen(event){
        let {getFile, progress, uploaded, error} = event.detail;
        var {name, key, size, file} = getFile();
        progress(0);
        uploadImage(
          file,
          function(e){
            progress(e.loaded);
          }
        ).then(function(r){
          data = r.response
          uploaded();
        })
        .catch(function(r){
          var user_message = "Failed to upload!";
          if (typeof r != 'undefined' && typeof r.response != 'undefined' && typeof r.response.records != 'undefined'){
              user_message = r.response.records.userMessage;
          }
          error(user_message);
        });
      }
    <\/script>
  `])))})]})}function V(s={}){const{wrapper:o}={...p(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(a,{...s})}):a(s)}export{V as default};
