import{V as y}from"./RadialChart-07c156ff.js";import"./index-af29543d.js";import{S as h,b as v,s as T,j,m as C,t as S,d as x,p as I,C as V,c as m,h as c,q as p,u as l,n as d,z as H}from"./index-1914c206.js";import{C as M}from"./frameworkTypes-60e558cb.js";function q(n){let e;return{c(){e=V("Something Great has happened.. yay!!!!")},m(a,t){m(a,e,t)},d(a){a&&c(e)}}}function O(n){let e;return{c(){e=p("small"),e.textContent="Heading",l(e,"slot","above")},m(a,t){m(a,e,t)},p:d,d(a){a&&c(e)}}}function P(n){let e;return{c(){e=p("small"),e.textContent="Rejoice in merriment",l(e,"slot","below")},m(a,t){m(a,e,t)},p:d,d(a){a&&c(e)}}}function z(n){let e,a;return{c(){e=p("img"),l(e,"slot","thumbnail"),H(e.src,a="https://bulma.io/images/placeholders/64x64.png")||l(e,"src",a),l(e,"alt","")},m(t,r){m(t,e,r)},p:d,d(t){t&&c(e)}}}function D(n){let e,a;return e=new y({props:{color:n[0],marker_image:n[1],marker_icon:n[2],class:n[3],$$slots:{thumbnail:[z],below:[P],above:[O],default:[q]},$$scope:{ctx:n}}}),{c(){j(e.$$.fragment)},m(t,r){C(e,t,r),a=!0},p(t,[r]){const s={};r&1&&(s.color=t[0]),r&2&&(s.marker_image=t[1]),r&4&&(s.marker_icon=t[2]),r&8&&(s.class=t[3]),r&16&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){x(e.$$.fragment,t),a=!1},d(t){I(e,t)}}}function E(n,e,a){let{color:t="",marker_image:r=null,marker_icon:s=null}=e,{class:f=""}=e;return n.$$set=o=>{"color"in o&&a(0,t=o.color),"marker_image"in o&&a(1,r=o.marker_image),"marker_icon"in o&&a(2,s=o.marker_icon),"class"in o&&a(3,f=o.class)},[t,r,s,f]}class b extends h{constructor(e){super(),v(this,e,E,D,T,{color:0,marker_image:1,marker_icon:2,class:3})}}const G=b;b.__docgen={version:3,name:"TimelineItem.svelte",data:[{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Color of marker and border",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"marker_image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"marker_icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let u={marker_icon:null,marker_image:null,color:""},w={color:{control:"select",options:M}};const K={title:"Helpers/Timeline/TimelineItem",component:y,decorators:[(n,{args:e})=>({Component:G,props:e})],args:u,argTypes:w},i={name:"Preview",tags:["isHidden"],args:u,argTypes:w,props:u};var _,g,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const N=["Main"],J=Object.freeze(Object.defineProperty({__proto__:null,Main:i,__namedExportsOrder:N,default:K},Symbol.toStringTag,{value:"Module"}));export{i as M,J as S};
