import{S as w,b as _,s as C,q as u,u as d,c as S,v as g,E as V,n as m,h as P}from"./index-1914c206.js";import{y as M}from"./RadialChart-07c156ff.js";import"./index-af29543d.js";import{C as F,F as H}from"./frameworkTypes-60e558cb.js";function O(c){let o,e,s,i,a;return{c(){o=u("div"),e=u("div"),s=u("button"),s.textContent="Create Toast",d(s,"class","button is-primary"),d(s,"type","button"),d(e,"class","column has-text-centered"),d(o,"class","columns")},m(n,r){S(n,o,r),g(o,e),g(e,s),i||(a=V(s,"click",c[0]),i=!0)},p:m,i:m,o:m,d(n){n&&P(o),i=!1,a()}}}function j(c,o,e){let{message:s="",duration:i=3e3,color:a="primary",position:n="bottom",light:r=!1,context:p=1}=o,f=1;const T=()=>{M.create({duration:i,color:a,position:n,context:p,light:r,message:f+" - "+s}),f++};return c.$$set=t=>{"message"in t&&e(1,s=t.message),"duration"in t&&e(2,i=t.duration),"color"in t&&e(3,a=t.color),"position"in t&&e(4,n=t.position),"light"in t&&e(5,r=t.light),"context"in t&&e(6,p=t.context)},[T,s,i,a,n,r,p]}class x extends w{constructor(o){super(),_(this,o,j,O,C,{message:1,duration:2,color:3,position:4,light:5,context:6})}}const q=x;x.__docgen={version:3,name:"Toasts.svelte",data:[{keywords:[],visibility:"public",description:"Message in the toast",name:"message",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Duration of the toast",name:"duration",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:3e3},{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Toast toast background color",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"primary"},{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:'Position of the toast. `""` defaults to `bottom`. Can be modified globally in framework settings',name:"position",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"bottom"},{keywords:[],visibility:"public",description:"Light color variant for toast box and contents",name:"light",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"A Custom value that can be passed in to the Toast, useful for identification purposes.",name:"context",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let y={message:"I am a toast, butter me!...",duration:3e3,color:"primary",light:!1,position:"bottom",context:1},v={color:{control:"select",options:F},position:{control:"select",options:H}};const E={title:"Helpers/Floating UI/Toasts",component:q,args:y,argTypes:v},l={name:"Preview",tags:["isHidden"],args:y,argTypes:v,props:y};var b,k,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args
}`,...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const I=["Main"],U=Object.freeze(Object.defineProperty({__proto__:null,Main:l,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{U as S};
