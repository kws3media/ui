import{S as m,b as v,s as g,q as h,u as f,c as q,n as i,h as T,o as _}from"./index-ae6f3512.js";import{p as a}from"./RadialChart-19f46828.js";import"./index-af29543d.js";function b(n){let t;return{c(){t=h("div"),t.innerHTML=`<h1 class="title is-5 has-text-centered">Hover over the code snippets</h1> <h2 class="subtitle is-5">Different containers, different variations</h2> <div class="columns is-multiline"><div class="column is-6" id="dt-1"><pre data-tooltip="This is a tooltip">activateTooltips(&quot;#dt-1&quot;);
      </pre></div> <div class="column is-6" id="dt-2"><pre data-tooltip="This is a tooltip">activateTooltips(&quot;#dt-2&quot;, {
  theme: &#39;light&#39;
});
      </pre></div></div> <hr class="is-small"/> <h2 class="subtitle is-5">Same container, different target selector</h2> <div class="columns is-multiline" id="an-1"><div class="column is-6"><pre data-tooltip="This is a tooltip">activateTooltips(&quot;#an-1&quot;, {
  animation: &#39;fade&#39;,
  theme: &quot;light&quot;,
});
      </pre></div> <div class="column is-6"><pre data-scaled-tooltip="This is a tooltip">activateTooltips(&quot;#an-1&quot;, {
  target: &quot;[data-scaled-tooltip]&quot;,
  content: (el) =&gt; el.getAttribute(&quot;data-scaled-tooltip&quot;),
  animation: &quot;scale&quot;,
});
      </pre></div></div>`,f(t,"id","tooltip-example-container-1")},m(s,u){q(s,t,u)},p:i,i,o:i,d(s){s&&T(t)}}}function x(n){return _(()=>{a("#dt-1"),a("#dt-2",{theme:"light"}),a("#an-1",{animation:"fade",theme:"light"}),a("#an-1",{target:"[data-scaled-tooltip]",content:t=>t.getAttribute("data-scaled-tooltip"),animation:"scale"})}),[]}class d extends m{constructor(t){super(),v(this,t,x,b,g,{})}}const y=d;d.__docgen={version:3,name:"InitVariations.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let o={},p={};const S={title:"Helpers/Tooltips/2. Examples/2. Variations",component:y,args:o,argTypes:p},e={name:"Preview",tags:["isHidden"],args:o,argTypes:p,props:o};var r,l,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const M=["Main"],w=Object.freeze(Object.defineProperty({__proto__:null,Main:e,__namedExportsOrder:M,default:S},Symbol.toStringTag,{value:"Module"}));export{e as M,w as S};
