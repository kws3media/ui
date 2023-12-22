import{S as N,b as Q,s as R,q as o,k as s,u as i,c as V,v as t,K as z,n as k,h as X,r as Y,o as Z}from"./index-1914c206.js";import{W as D,p as tt}from"./RadialChart-31c1923f.js";import"./index-af29543d.js";function et(H){let e,p,O,c,_,v,C,u,x,b,M,m,S,y,L,n,h,E,l,a,P,U,j,r,A,f,$,g,T,B;return{c(){e=o("div"),p=o("h1"),p.textContent="Hover over the code snippets",O=s(),c=o("div"),c.innerHTML=`<div class="column is-6"><p><strong>Multiline tooltips</strong></p> <p>Use <code>allowHTML: true</code> in init config.
        <br/>
        Or, use <code>data-tippy-allowHTML=&quot;true&quot;</code></p> <p>And then just use <code>&lt;br&gt;</code> tags within the tooltip content</p></div> <div class="column is-6"><pre data-tooltip="This&lt;br&gt; is a&lt;br&gt; tooltip">&lt;span
  data-tooltip=&quot;This&lt;br&gt;  is a&lt;br&gt; tooltip&quot;&gt;
  hello
&lt;/span&gt;
      </pre></div>`,_=s(),v=o("hr"),C=s(),u=o("div"),u.innerHTML=`<div class="column is-6"><p><strong>Show on click</strong></p> <p>Use <code>trigger: &quot;click&quot;</code> in init config.
        <br/>
        Or, use <code>data-tippy-trigger=&quot;click&quot;</code></p> <p class="has-text-info">These tooltips don&#39;t disappear on hover out, and will remain visible
        until another click anywhere on the page.</p></div> <div class="column is-6"><pre data-tooltip="This is a tooltip" data-tippy-trigger="click">&lt;span
  data-tooltip=&quot;This is a tooltip&quot;
  data-tippy-trigger=&quot;click&quot;&gt;
  hello
&lt;/span&gt;
      </pre></div>`,x=s(),b=o("hr"),M=s(),m=o("div"),m.innerHTML=`<div class="column is-6"><p><strong>Don&#39;t hide on click</strong></p> <p>By default, tooltips disappear after clicking anywhere, even the target
        element.<br/>But, sometimes you would like to keep showing the tooltip
        even after the target element has been clicked.</p> <p>Use <code>hideOnClick: false</code> in init config.
        <br/>
        Or, use <code>data-tippy-hideOnClick=&quot;false&quot;</code></p></div> <div class="column is-6"><pre data-tooltip="This is a tooltip" data-tippy-hideonclick="false">&lt;span
  data-tooltip=&quot;This is a tooltip&quot;
  data-tippy-hideOnClick=&quot;false&quot;&gt;
  hello
&lt;/span&gt;
      </pre></div>`,S=s(),y=o("hr"),L=s(),n=o("div"),h=o("div"),h.innerHTML=`<p><strong>Persistent Tooltips</strong></p> <p class="notification is-warning is-light">This does not work with event delegation.<br/>
        Instead the <code>tooltip</code> action has to be used.<br/>
        See:
        <a href="/?path=/docs/helpers-tooltips-3-tooltip-action--page">Tooltip Action</a></p> <div>Three parameters are required to achieve this:
        <ol style="margin-left:1.5rem;margin-bottom:2rem"><li><code>showOnCreate: true</code></li> <li><code>hideOnClick: false</code></li> <li><code>trigger: &#39;manual&#39;</code></li></ol></div> <p>These options can be supplied either via <code>data-tippy-*</code> attributes,
        or as parameters to the action.</p>`,E=s(),l=o("div"),a=o("pre"),a.textContent=`<span
  use:tooltip
  data-tooltip="This is a persistent tooltip"
  data-tippy-theme="danger"
  data-tippy-showOnCreate="true"
  data-tippy-hideOnClick="false"
  data-tippy-trigger="manual">
  hello
</span>
      `,P=s(),U=o("br"),j=s(),r=o("pre"),r.textContent=`
<span
  use:tooltip={{
    theme: "danger",
    showOnCreate: true,
    hideOnClick: false,
    trigger: "manual"
  }}
  data-tooltip="This is a persistent tooltip">
  hello
</span>
      `,A=s(),f=o("hr"),$=s(),g=o("div"),g.innerHTML=`<div class="column is-6"><p><strong>Themes</strong></p> <p>Use <code>theme: &quot;[theme_name]&quot;</code> in init config.
        <br/>
        Or, use <code>data-tippy-theme=&quot;[theme_name]&quot;</code></p> <p>Available themes are:<br/> <code>primary</code>,
        <code>primary-light</code>,
        <code>info</code>,
        <code>info-light</code>,
        <code>success</code>,
        <code>success-light</code>,
        <code>danger</code>,
        <code>danger-light</code>,
        <code>dark</code>,
        <code>dark-light</code> and
        <code>light</code></p></div> <div class="column is-6"><div class="columns is-multiline is-centered"><div class="column is-narrow"><button type="button" data-tooltip="primary" data-tippy-theme="primary" class="button is-small is-primary">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="primary-light" data-tippy-theme="primary-light" class="button is-small is-primary is-light">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="info" data-tippy-theme="info" class="button is-small is-info">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="info-light" data-tippy-theme="info-light" class="button is-small is-info is-light">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="success" data-tippy-theme="success" class="button is-small is-success">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="success-light" data-tippy-theme="success-light" class="button is-small is-success is-light">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="danger" data-tippy-theme="danger" class="button is-small is-danger">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="danger-light" data-tippy-theme="danger-light" class="button is-small is-danger is-light">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="dark" data-tippy-theme="dark" class="button is-small is-dark">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="dark-light" data-tippy-theme="dark-light" class="button is-small is-dark is-light">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="light" data-tippy-theme="light" class="button is-small is-light">Hover me</button></div> <div class="column is-narrow"><button type="button" data-tooltip="default" class="button is-small">Hover me</button></div></div></div>`,i(p,"class","title is-5 has-text-centered"),i(c,"class","columns is-multiline"),i(v,"class","is-small"),i(u,"class","columns is-multiline"),i(b,"class","is-small"),i(m,"class","columns is-multiline"),i(y,"class","is-small"),i(h,"class","column is-6"),i(a,"data-tooltip","This is a persistent tooltip"),i(a,"data-tippy-theme","danger"),i(a,"data-tippy-showoncreate","true"),i(a,"data-tippy-hideonclick","false"),i(a,"data-tippy-trigger","manual"),i(r,"data-tooltip","This is a persistent tooltip"),i(l,"class","column is-6"),i(n,"class","columns is-multiline"),i(f,"class","is-small"),i(g,"class","columns is-multiline"),i(e,"id","tooltip-example-container-1")},m(w,J){V(w,e,J),t(e,p),t(e,O),t(e,c),t(e,_),t(e,v),t(e,C),t(e,u),t(e,x),t(e,b),t(e,M),t(e,m),t(e,S),t(e,y),t(e,L),t(e,n),t(n,h),t(n,E),t(n,l),t(l,a),t(l,P),t(l,U),t(l,j),t(l,r),t(e,A),t(e,f),t(e,$),t(e,g),T||(B=[z(D.call(null,a)),z(D.call(null,r,{theme:"danger",showOnCreate:!0,hideOnClick:!1,trigger:"manual"}))],T=!0)},p:k,i:k,o:k,d(w){w&&X(e),T=!1,Y(B)}}}function it(H){return Z(()=>{tt("#tooltip-example-container-1")}),[]}class F extends N{constructor(e){super(),Q(this,e,it,et,R,{})}}const ot=F;F.__docgen={version:3,name:"Other.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let q={},G={};const st={title:"Helpers/Tooltips/2. Examples/3. Other Examples",component:ot,args:q,argTypes:G},d={name:"Preview",tags:["isHidden"],args:q,argTypes:G,props:q};var I,K,W;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args
}`,...(W=(K=d.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const at=["Main"],dt=Object.freeze(Object.defineProperty({__proto__:null,Main:d,__namedExportsOrder:at,default:st},Symbol.toStringTag,{value:"Module"}));export{d as M,dt as S};
