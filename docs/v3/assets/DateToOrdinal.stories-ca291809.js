import{S,b,s as C,q as s,k as v,u as r,c as w,v as e,n as _,h as M}from"./index-1914c206.js";import{e as $}from"./index-81505e0c.js";function j(i){let n,t,a,d,g,p,T,o,c,f,m;return{c(){n=s("div"),t=s("div"),a=s("div"),d=s("h2"),d.textContent="Today's Day w/o ordinal",g=v(),p=s("pre"),p.textContent=`${i[0]}`,T=v(),o=s("div"),c=s("h2"),c.textContent="Today's Day with ordinal",f=v(),m=s("pre"),m.textContent=`${i[1]}`,r(d,"class","subtitle is-5"),r(a,"class","column"),r(c,"class","subtitle is-5"),r(o,"class","column"),r(t,"class","columns is-multiline")},m(u,x){w(u,n,x),e(n,t),e(t,a),e(a,d),e(a,g),e(a,p),e(t,T),e(t,o),e(o,c),e(o,f),e(o,m)},p:_,i:_,o:_,d(u){u&&M(n)}}}function k(i){let t=new Date().getDate(),a=$(t);return[t,a]}class h extends S{constructor(n){super(),b(this,n,k,j,C,{})}}const q=h;h.__docgen={version:3,name:"DateToOrdinal.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const E={title:"Utils/2. Examples/DateToOrdinal",name:"DateToOrdinal",component:q,args:{},argTypes:{}},l={name:"DateToOrdinal",tags:["isHidden"],args:{},argTypes:{}};var y,D,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "DateToOrdinal",
  tags: ["isHidden"],
  args: {},
  argTypes: {}
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const H=["Main"],U=Object.freeze(Object.defineProperty({__proto__:null,Main:l,__namedExportsOrder:H,default:E},Symbol.toStringTag,{value:"Module"}));export{l as M,U as S};