import{U as T,V as C}from"./RadialChart-31c1923f.js";import"./index-af29543d.js";import{S as $,b as V,s as x,j as u,k as M,m as f,c,t as _,d as g,h as p,p as k,q as h,u as H,n as v,C as O}from"./index-1914c206.js";function P(r){let e;return{c(){e=h("span"),e.textContent="Only this is the component",H(e,"class","tag is-danger is-medium")},m(s,n){c(s,e,n)},p:v,d(s){s&&p(e)}}}function q(r){let e;return{c(){e=O("This part is from the TimelineItem Component")},m(s,n){c(s,e,n)},d(s){s&&p(e)}}}function I(r){let e;return{c(){e=h("small"),e.textContent="See full example page for more details",H(e,"slot","below")},m(s,n){c(s,e,n)},p:v,d(s){s&&p(e)}}}function K(r){let e,s,n,o;return e=new T({props:{$$slots:{default:[P]},$$scope:{ctx:r}}}),n=new C({props:{color:r[0],marker_image:r[1],marker_icon:r[2],class:r[3],$$slots:{below:[I],default:[q]},$$scope:{ctx:r}}}),{c(){u(e.$$.fragment),s=M(),u(n.$$.fragment)},m(t,a){f(e,t,a),c(t,s,a),f(n,t,a),o=!0},p(t,[a]){const i={};a&16&&(i.$$scope={dirty:a,ctx:t}),e.$set(i);const l={};a&1&&(l.color=t[0]),a&2&&(l.marker_image=t[1]),a&4&&(l.marker_icon=t[2]),a&8&&(l.class=t[3]),a&16&&(l.$$scope={dirty:a,ctx:t}),n.$set(l)},i(t){o||(_(e.$$.fragment,t),_(n.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),g(n.$$.fragment,t),o=!1},d(t){t&&p(s),k(e,t),k(n,t)}}}function z(r,e,s){let{color:n="success",marker_image:o=null,marker_icon:t=null}=e,{class:a=""}=e;return r.$$set=i=>{"color"in i&&s(0,n=i.color),"marker_image"in i&&s(1,o=i.marker_image),"marker_icon"in i&&s(2,t=i.marker_icon),"class"in i&&s(3,a=i.class)},[n,o,t,a]}class S extends ${constructor(e){super(),V(this,e,z,K,x,{color:0,marker_image:1,marker_icon:2,class:3})}}const D=S;S.__docgen={version:3,name:"TimelineHeader.svelte",data:[{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Color of marker and border",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"success"},{visibility:"public",description:null,keywords:[],name:"marker_image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"marker_icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let d={align:"left",class:""},j={align:{control:"select",options:["left","center","right"]}};const E={title:"Helpers/Timeline/TimelineHeader",component:T,decorators:[(r,{args:e})=>({Component:D,props:e})],args:d,argTypes:j},m={name:"Preview",tags:["isHidden"],args:d,argTypes:j,props:d};var y,b,w;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args
}`,...(w=(b=m.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const N=["Main"],F=Object.freeze(Object.defineProperty({__proto__:null,Main:m,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{m as M,F as S};
