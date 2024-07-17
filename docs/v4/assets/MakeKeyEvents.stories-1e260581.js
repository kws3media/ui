import{S as T,b as w,s as $,q as o,k as A,C as P,u as i,c as X,v as s,L as _,F as j,n as g,h as q,r as x}from"./index-ae6f3512.js";import{m as y}from"./index-b03eecd1.js";function D(t){let c,d,u,n,f,M,p,m,l,a,C,v,k,S,e;return{c(){c=o("div"),d=o("div"),u=o("div"),n=o("div"),f=o("label"),f.textContent="Use following key combinations to check custom key events:",M=A(),p=o("p"),p.innerHTML=`<code>Ctrl + Alt + c</code>, <code>Alt + F8</code>,
          <code>Meta + Shift + k</code>, <code>Shift + x</code> <code>Ctrl (win/lin) Command (mac) + Alt + k</code>`,m=A(),l=o("p"),a=o("input"),C=A(),v=o("span"),k=P(t[0]),i(f,"for",""),i(a,"type","text"),i(a,"class","input"),i(v,"class","help is-sucess has-text-success"),i(n,"class","field"),i(u,"class","column"),i(d,"class","columns")},m(r,K){X(r,c,K),s(c,d),s(d,u),s(u,n),s(n,f),s(n,M),s(n,p),s(n,m),s(n,l),s(l,a),s(n,C),s(n,v),s(v,k),S||(e=[_(t[1].call(null,a,t[7])),_(t[2].call(null,a,t[8])),_(t[3].call(null,a,t[9])),_(t[4].call(null,a,t[10])),_(t[5].call(null,a,t[11]))],S=!0)},p(r,[K]){K&1&&j(k,r[0])},i:g,o:g,d(r){r&&q(c),S=!1,x(e)}}}function L(t,c,d){const u=y("ctrl+alt+c"),n=y("alt+F8"),f=y("meta+shift+k"),M=y("shift+x"),p=y("ctrl+alt+k",!0);let m="";function l(e,r){d(0,m=r+" Pressed")}return[m,u,n,f,M,p,l,e=>{l(e,"`Ctrl + Alt + c`")},e=>{l(e,"`Alt + F8`")},e=>{l(e,"`Meta + Shift + k`")},e=>{l(e,"`Shift + x`")},e=>{l(e,"`Ctrl (win/lin) Command (mac) + Alt + k`")}]}class O extends T{constructor(c){super(),w(this,c,L,D,$,{})}}const U=O;O.__docgen={version:3,name:"MakeKeyEvent.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const z={title:"Utils/2. Examples/KeyboardEvents/2. Create Key Events",name:"MakeKeyEvent",component:U,args:{},argTypes:{}},h={name:"MakeKeyEvent",args:{},argTypes:{}};var E,b,F;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "MakeKeyEvent",
  args: {},
  argTypes: {}
}`,...(F=(b=h.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const H=["Main"],I=Object.freeze(Object.defineProperty({__proto__:null,Main:h,__namedExportsOrder:H,default:z},Symbol.toStringTag,{value:"Module"}));export{h as M,I as S};
