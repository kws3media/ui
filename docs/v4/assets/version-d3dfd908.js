import{j as e}from"./jsx-runtime-2af955ec.js";import{u as d}from"./index-a6a89ff5.js";const p="@kws3/ui",h="4.5.2-alpha.2",x="UI components for use with Svelte v3 applications.",u="index.js",v={test:'echo "Error: no test specified" && exit 1'},j="github:kws3media/storybooks-frontend",f="https://ui.kws3.media/",b=["components","svelte3","ui"],g="Khaled Ahmed <me.khaled@gmail.com>",k=["Sharif Ahmed <me.sharifahmed@gmail.com>","Sabir <sabirveli@gmail.com>","Suneesh S K <suneeshsk3@gmail.com>","Nikeeta <nikeetaa231@gmail.com>"],N={access:"public"},w="index.js",y="./index.d.ts",C={"./utils":{types:"./utils/index.d.ts",default:"./utils/index.js"},"./form":{types:"./form/index.d.ts",svelte:"./form/index.js"},"./search":{types:"./search/index.d.ts",svelte:"./search/index.js"},"./resizeObserver":{types:"./resizeObserver/index.d.ts",svelte:"./resizeObserver/index.js"},"./keyboard":{types:"./keyboard/index.d.ts",svelte:"./keyboard/index.js"},".":{types:"./index.d.ts",svelte:"./index.js"}},S={bulma:"^1.0.0",svelte:"^4.2.10"},D={"@kws3/text-mask-core":"^5.1.4",apexcharts:"3.33.2",flatpickr:"^4.5.2","svelte-portal":"^2.2.1","tippy.js":"^6.3.1"},M={typescript:"^5.2.2"},m={name:p,version:h,description:x,main:u,scripts:v,repository:j,demo_url:f,keywords:b,author:g,contributors:k,publishConfig:N,svelte:w,types:y,exports:C,peerDependencies:S,dependencies:D,devDependencies:M},a={v2:{name:"v1.x.x",description:"Compatible with Svelte 2",link:"https://ui.kws3.media/v2/"},v3:{name:"v2.x.x",description:"Compatible with Svelte 3",link:"https://ui.kws3.media/v3/"},v4:{name:"v4.x.x",description:"Compatible with Svelte 4",link:"https://ui.kws3.media/v4/"}};let r=m.version;const o="npm i -D @kws3/ui@^"+r;let c=!1;function O(s){if(s&&s.currentTarget&&s.currentTarget.blur(),!c&&navigator&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(o),c=!0;const i=document.querySelector("#npm-command-copier"),t="is-success".split(" ");i.value="✅ Copied!",t.forEach(n=>i.classList.add(n)),setTimeout(()=>{i.value=o,c=!1,t.forEach(n=>i.classList.remove(n))},1e3)}}function T(s){r=s}function l(s){const i={a:"a",small:"small",...d(),...s.components};return e.jsxs("div",{className:"page-top-right-artifacts box",children:[e.jsxs("div",{className:"artifact-item-block",children:[e.jsxs("div",{className:"dropdown",children:[e.jsx("div",{className:"dropdown-trigger",children:e.jsxs("span",{className:"artifact-item tags has-addons",children:[e.jsx("span",{className:"tag",children:"Version"}),e.jsx("span",{className:"tag is-primary",children:m.version}),e.jsx("span",{className:"tag",children:e.jsx("span",{className:"icon",children:e.jsx("i",{className:"fa fa-angle-down"})})})]})}),e.jsx("div",{className:"dropdown-content",children:Object.keys(a).map(t=>e.jsxs(i.a,{href:a[t].link,className:`dropdown-item ${t===r?"is-active":""}`,onClick:()=>T(t),children:[a[t].name,e.jsx(i.small,{className:"is-block is-size-7",children:a[t].description})]},t))})]}),e.jsx("a",{className:"artifact-item ml-2",href:"https://github.com/kws3media/ui/tree/master/packages/%40kws3/ui",target:"_blank",children:e.jsxs("span",{className:"icon-text",children:[e.jsx("span",{className:"icon",children:e.jsx("i",{className:"fa fa-github"})}),e.jsx("span",{children:"Github"})]})})]}),e.jsx("div",{className:"artifact-item-block is-hidden-mobile",children:e.jsxs("div",{className:"field has-addons is-flex-grow-1",children:[e.jsx("span",{className:"control is-expanded",children:e.jsx("input",{id:"npm-command-copier",className:"input is-small is-grey is-family-monospace",readOnly:!0,value:o})}),e.jsx("span",{className:"control",children:e.jsx("button",{className:"button is-small",title:"Copy to clipboard",onClick:O,children:e.jsx("span",{className:"icon is-small",children:e.jsx("i",{className:"fa fa-copy"})})})})]})})]})}function E(s={}){const{wrapper:i}={...d(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(l,{...s})}):l(s)}export{E as M};
