import{g as j}from"./index-b6c8336d.js";import{u}from"./index-323c8e7a.js";var x={exports:{}},r={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=j,b=Symbol.for("react.element"),k=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,N=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function v(t,s,n){var i,a={},c=null,p=null;n!==void 0&&(c=""+n),s.key!==void 0&&(c=""+s.key),s.ref!==void 0&&(p=s.ref);for(i in s)w.call(s,i)&&!y.hasOwnProperty(i)&&(a[i]=s[i]);if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return{$$typeof:b,type:t,key:c,ref:p,props:a,_owner:N.current}}r.Fragment=k;r.jsx=v;r.jsxs=v;x.exports=r;var e=x.exports;const _="@kws3/ui",C="4.3.3",S="UI components for use with Svelte v3 applications.",E="index.js",D="index.js",O={test:'echo "Error: no test specified" && exit 1'},R="github:kws3media/storybooks-frontend",T="https://ui.kws3.media/",L=["components","svelte3","ui"],M="Khaled Ahmed <me.khaled@gmail.com>",I=["Sharif Ahmed <me.sharifahmed@gmail.com>","Sabir <sabirveli@gmail.com>","Suneesh S K <suneeshsk3@gmail.com>","Nikeeta <nikeetaa231@gmail.com>"],P={access:"public"},A="./index.d.ts",U={bulma:"^0.9.3",svelte:"^4.2.10"},V={"@kws3/text-mask-core":"^5.1.3",apexcharts:"3.33.2",flatpickr:"^4.5.2","svelte-portal":"^2.2.1","tippy.js":"^6.3.1"},X={typescript:"^5.2.2"},f={name:_,version:C,description:S,main:E,svelte:D,scripts:O,repository:R,demo_url:T,keywords:L,author:M,contributors:I,publishConfig:P,types:A,peerDependencies:U,dependencies:V,devDependencies:X},o={v2:{name:"v1.x.x",description:"Compatible with Svelte 2",link:"https://ui.kws3.media/v2/"},v3:{name:"v2.x.x",description:"Compatible with Svelte 3",link:"https://ui.kws3.media/v3/"},v4:{name:"v4.x.x",description:"Compatible with Svelte 4",link:"https://ui.kws3.media/v4/"}};let m=f.version;const d="npm i -D @kws3/ui@^"+m;let l=!1;function $(t){if(t&&t.currentTarget&&t.currentTarget.blur(),!l&&navigator&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(d),l=!0;const s=document.querySelector("#npm-command-copier"),n="is-success".split(" ");s.value="✅ Copied!",n.forEach(i=>s.classList.add(i)),setTimeout(()=>{s.value=d,l=!1,n.forEach(i=>s.classList.remove(i))},1e3)}}function q(t){m=t}function h(t){const s={a:"a",small:"small",...u(),...t.components};return e.jsxs("div",{className:"page-top-right-artifacts box",children:[e.jsxs("div",{className:"artifact-item-block",children:[e.jsxs("div",{className:"dropdown",children:[e.jsx("div",{className:"dropdown-trigger",children:e.jsxs("span",{className:"artifact-item tags has-addons",children:[e.jsx("span",{className:"tag",children:"Version"}),e.jsx("span",{className:"tag is-primary",children:f.version}),e.jsx("span",{className:"tag",children:e.jsx("span",{className:"icon",children:e.jsx("i",{className:"fa fa-angle-down"})})})]})}),e.jsx("div",{className:"dropdown-content",children:Object.keys(o).map(n=>e.jsxs(s.a,{href:o[n].link,className:`dropdown-item ${n===m?"is-active":""}`,onClick:()=>q(n),children:[o[n].name,e.jsx(s.small,{class:"is-block has-text-grey is-size-7",children:o[n].description})]},n))})]}),e.jsx("a",{className:"artifact-item ml-2",href:"https://github.com/kws3media/ui/tree/master/packages/%40kws3/ui",target:"_blank",children:e.jsxs("span",{className:"icon-text",children:[e.jsx("span",{className:"icon",children:e.jsx("i",{className:"fa fa-github"})}),e.jsx("span",{children:"Github"})]})})]}),e.jsx("div",{className:"artifact-item-block is-hidden-mobile",children:e.jsxs("div",{className:"field has-addons is-flex-grow-1",children:[e.jsx("span",{className:"control is-expanded",children:e.jsx("input",{id:"npm-command-copier",className:"input is-small has-background-light is-family-monospace",readOnly:!0,value:d})}),e.jsx("span",{className:"control",children:e.jsx("button",{className:"button is-small",title:"Copy to clipboard",onClick:$,children:e.jsx("span",{className:"icon",children:e.jsx("i",{className:"fa fa-copy"})})})})]})})]})}function z(t={}){const{wrapper:s}={...u(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(h,{...t})}):h(t)}export{z as M,e as j};