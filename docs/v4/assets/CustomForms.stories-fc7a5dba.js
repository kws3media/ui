import{S as G,b as I,s as J,q as a,k as F,C as K,u as s,c as Q,v as e,D as O,E as j,M as R,N as W,n as P,h as X,r as Y,a as q}from"./index-ae6f3512.js";import{m as Z,w as z,n as x}from"./index-6b22eff6.js";function ss(r){let f,p,v,i,C,n,m,D,d,b,E,y,c,o,w,t,g,T,V,$,_,k,l,S,H;return{c(){f=a("div"),p=a("div"),v=a("div"),i=a("form"),C=a("div"),n=a("div"),m=a("label"),m.textContent="Password",D=F(),d=a("input"),E=F(),y=a("div"),c=a("p"),o=a("label"),o.textContent="Confirm Password",w=F(),t=a("input"),T=F(),V=a("div"),$=a("p"),_=a("button"),k=K("Login"),s(m,"for",""),s(m,"class","label"),s(d,"class",b="input "+(r[3].password?"is-danger":"")),s(d,"type","password"),s(n,"class","control"),s(C,"class","field"),s(o,"for",""),s(o,"class","label"),s(t,"class",g="input "+(r[3].confirm_password?"is-danger":"")),s(t,"type","password"),s(c,"class","control"),s(y,"class","field"),s(_,"type","submit"),s(_,"class","button is-primary is-pulled-right"),_.disabled=l=!r[5],s($,"class","control"),s(V,"class","field"),s(v,"class","column"),s(p,"class","columns is-multiline"),s(f,"id","tooltip-example-container-1")},m(u,h){Q(u,f,h),e(f,p),e(p,v),e(v,i),e(i,C),e(C,n),e(n,m),e(n,D),e(n,d),O(d,r[4].password),e(i,E),e(i,y),e(y,c),e(c,o),e(c,w),e(c,t),O(t,r[4].confirm_password),e(i,T),e(i,V),e(V,$),e($,_),e(_,k),S||(H=[j(d,"input",r[7]),j(t,"input",r[8]),j(i,"submit",R(W(r[6])))],S=!0)},p(u,[h]){h&8&&b!==(b="input "+(u[3].password?"is-danger":""))&&s(d,"class",b),h&16&&d.value!==u[4].password&&O(d,u[4].password),h&8&&g!==(g="input "+(u[3].confirm_password?"is-danger":""))&&s(t,"class",g),h&16&&t.value!==u[4].confirm_password&&O(t,u[4].confirm_password),h&32&&l!==(l=!u[5])&&(_.disabled=l)},i:P,o:P,d(u){u&&X(f),S=!1,Y(H)}}}function es(r,f,p){let v,i=P,C=()=>(i(),i=q(w,l=>p(3,v=l)),w),n,m=P,D=()=>(m(),m=q(o,l=>p(4,n=l)),o),d,b=P,E=()=>(b(),b=q(t,l=>p(5,d=l)),t);r.$$.on_destroy.push(()=>i()),r.$$.on_destroy.push(()=>m()),r.$$.on_destroy.push(()=>b());let y=(l,{password:S})=>l&&l===S,c,o,w,t,g,T={password:z("Password should not be empty",x),confirm_password:z("Password is not confirm",y)};function V(){c=Z({data:{password:"",confirm_password:""},validators:T}),D(p(0,{formData:o,errors:w,isValid:t,isTouched:g}=c,o,C(p(1,w)),E(p(2,t))))}function $(){g||c.update(o)}function _(){n.password=this.value,o.set(n)}function k(){n.confirm_password=this.value,o.set(n)}return V(),[o,w,t,v,n,d,$,_,k]}class A extends G{constructor(f){super(),I(this,f,es,ss,J,{})}}const B=A;A.__docgen={version:3,name:"CustomValidators.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ts={title:"Utils/2. Examples/SmartForms/2.CustomValidator",name:"CustomValidator",component:B,args:{},parameters:{layout:"fullscreen"}},M={name:"CustomValidator",tags:["isHidden"],component:B,args:{},argTypes:{}};var L,N,U;M.parameters={...M.parameters,docs:{...(L=M.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "CustomValidator",
  tags: ["isHidden"],
  component: Decorator,
  args: {},
  argTypes: {}
}`,...(U=(N=M.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const as=["Main"],ns=Object.freeze(Object.defineProperty({__proto__:null,Main:M,__namedExportsOrder:as,default:ts},Symbol.toStringTag,{value:"Module"}));export{M,ns as S};