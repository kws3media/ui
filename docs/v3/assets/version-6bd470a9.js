import{g as h}from"./index-b35ce1a0.js";import{u as f}from"./index-f20201d2.js";var d={exports:{}},r={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=h,v=Symbol.for("react.element"),b=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,j=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function u(t,s,i){var a,n={},o=null,m=null;i!==void 0&&(o=""+i),s.key!==void 0&&(o=""+s.key),s.ref!==void 0&&(m=s.ref);for(a in s)g.call(s,a)&&!k.hasOwnProperty(a)&&(n[a]=s[a]);if(t&&t.defaultProps)for(a in s=t.defaultProps,s)n[a]===void 0&&(n[a]=s[a]);return{$$typeof:v,type:t,key:o,ref:m,props:n,_owner:j.current}}r.Fragment=b;r.jsx=u;r.jsxs=u;d.exports=r;var e=d.exports;const y="@kws3/ui",_="4.1.3",N="UI components for use with Svelte v3 applications.",w="index.js",E="index.js",O={test:'echo "Error: no test specified" && exit 1'},S="github:kws3media/storybooks-frontend",C="https://ui.kws3.media/",D=["components","svelte3","ui"],R="Khaled Ahmed <me.khaled@gmail.com>",T=["Sharif Ahmed <me.sharifahmed@gmail.com>","Sabir <sabirveli@gmail.com>","Suneesh S K <suneeshsk3@gmail.com>","Nikeeta <nikeetaa231@gmail.com>"],L={access:"public"},M="./index.d.ts",I={"@kws3/text-mask-core":"^5.1.2",apexcharts:"3.33.2",flatpickr:"^4.5.2","svelte-portal":"^2.1.2","tippy.js":"^6.3.1"},P={typescript:"^5.2.2"},A={name:y,version:_,description:N,main:w,svelte:E,scripts:O,repository:S,demo_url:C,keywords:D,author:R,contributors:T,publishConfig:L,types:M,dependencies:I,devDependencies:P},l="npm i -D @kws3/ui";let c=!1;function U(t){if(t&&t.currentTarget&&t.currentTarget.blur(),!c&&navigator&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(l),c=!0;const s=document.querySelector("#npm-command-copier"),i="is-success".split(" ");s.value="✅ Copied!",i.forEach(a=>s.classList.add(a)),setTimeout(()=>{s.value=l,c=!1,i.forEach(a=>s.classList.remove(a))},1e3)}}function p(t){return e.jsxs("div",{className:"page-top-right-artifacts box",children:[e.jsxs("div",{className:"artifact-item-block",children:[e.jsx("a",{className:"artifact-item",href:"https://github.com/kws3media/ui/tree/master/packages/%40kws3/ui",target:"_blank",children:e.jsxs("span",{className:"icon-text",children:[e.jsx("span",{className:"icon",children:e.jsx("i",{className:"fa fa-github"})}),e.jsx("span",{children:"Github"})]})}),e.jsxs("span",{className:"artifact-item tags has-addons",children:[e.jsx("span",{className:"tag",children:"Version"}),e.jsx("span",{className:"tag is-primary",children:A.version})]})]}),e.jsx("div",{className:"artifact-item-block is-hidden-mobile",children:e.jsxs("div",{className:"field has-addons",children:[e.jsx("span",{className:"control",children:e.jsx("input",{id:"npm-command-copier",className:"input is-small has-background-light is-family-monospace",readOnly:!0,value:l})}),e.jsx("span",{className:"control",children:e.jsx("button",{className:"button is-small",title:"Copy to clipboard",onClick:U,children:e.jsx("span",{className:"icon",children:e.jsx("i",{className:"fa fa-copy"})})})})]})})]})}function F(t={}){const{wrapper:s}=Object.assign({},f(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(p,t)})):p()}export{F as M,e as j};
