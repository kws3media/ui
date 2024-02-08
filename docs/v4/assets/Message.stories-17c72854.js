import{H as z}from"./RadialChart-3e7fe717.js";import"./index-af29543d.js";import{S as C,b as T,s as j,q as f,j as H,u as O,c,m as P,t as q,d as D,h as d,p as E,k as G,n as K,G as L}from"./index-9bc519a8.js";import{C as N,S as A}from"./frameworkTypes-60e558cb.js";function B(l){let n,s,o;return{c(){n=f("h1"),n.textContent="This is a Heading",s=G(),o=f("p"),o.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."},m(e,i){c(e,n,i),c(e,s,i),c(e,o,i)},p:K,d(e){e&&(d(n),d(s),d(o))}}}function F(l){let n,s,o;return s=new z({props:{size:l[0],color:l[1],class:l[10],style:l[2],inner_class:l[5],inner_style:l[3],title_class:l[4],title:l[6],has_title:l[7],dismissable:l[8],active:l[9],$$slots:{default:[B]},$$scope:{ctx:l}}}),s.$on("dismiss",l[11]),{c(){n=f("div"),H(s.$$.fragment),O(n,"class","p-5")},m(e,i){c(e,n,i),P(s,n,null),o=!0},p(e,[i]){const a={};i&1&&(a.size=e[0]),i&2&&(a.color=e[1]),i&1024&&(a.class=e[10]),i&4&&(a.style=e[2]),i&32&&(a.inner_class=e[5]),i&8&&(a.inner_style=e[3]),i&16&&(a.title_class=e[4]),i&64&&(a.title=e[6]),i&128&&(a.has_title=e[7]),i&256&&(a.dismissable=e[8]),i&512&&(a.active=e[9]),i&4096&&(a.$$scope={dirty:i,ctx:e}),s.$set(a)},i(e){o||(q(s.$$.fragment,e),o=!0)},o(e){D(s.$$.fragment,e),o=!1},d(e){e&&d(n),E(s)}}}function I(l,n,s){let{size:o="medium",color:e="info",style:i="",inner_style:a="",title_class:y="",inner_class:m="",title:p=null,has_title:_=!1,dismissable:b=!1,active:g=!0}=n,{class:k=""}=n;function S(t){L.call(this,l,t)}return l.$$set=t=>{"size"in t&&s(0,o=t.size),"color"in t&&s(1,e=t.color),"style"in t&&s(2,i=t.style),"inner_style"in t&&s(3,a=t.inner_style),"title_class"in t&&s(4,y=t.title_class),"inner_class"in t&&s(5,m=t.inner_class),"title"in t&&s(6,p=t.title),"has_title"in t&&s(7,_=t.has_title),"dismissable"in t&&s(8,b=t.dismissable),"active"in t&&s(9,g=t.active),"class"in t&&s(10,k=t.class)},[o,e,i,a,y,m,p,_,b,g,k,S]}class M extends C{constructor(n){super(),T(this,n,I,F,j,{size:0,color:1,style:2,inner_style:3,title_class:4,inner_class:5,title:6,has_title:7,dismissable:8,active:9,class:10})}}const J=M;M.__docgen={version:3,name:"Message.svelte",data:[{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Size of the Message",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Color of the Message box",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"info"},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"inner_style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"title_class",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"inner_class",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"has_title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"dismissable",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"active",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"dismiss",parent:"KwsMessage",modificators:[],locations:null}],slots:[],refs:[]};let u={size:"",color:"info",class:"",style:"",inner_class:"",inner_style:"",title_class:"",title:"",has_title:!1,dismissable:!1,active:!0},V={color:{control:"select",options:N},size:{control:"select",options:A}};const Q={title:"Helpers/Message",component:z,decorators:[(l,{args:n})=>({Component:J,props:n})],args:u,argTypes:V,parameters:{layout:"fullscreen"}},r={name:"Preview",tags:["isHidden"],args:u,argTypes:V,props:u};var w,v,h;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const R=["Main"],Z=Object.freeze(Object.defineProperty({__proto__:null,Main:r,__namedExportsOrder:R,default:Q},Symbol.toStringTag,{value:"Module"}));export{Z as S};
