import{S as J,b as K,s as Q,q as V,k as _,j as v,u as q,c as W,v as o,m as S,t as j,d as C,h as X,p as T}from"./index-1914c206.js";import{L as Y,A as N,B as I}from"./RadialChart-07c156ff.js";import"./index-af29543d.js";function Z(t){let l,i,b,A,r,M,f,O,d,B,n,g,E,p,L,h,P,a,G;return r=new Y({props:{options:t[3],colors:t[0],data:t[6],labels:t[7],sets:t[8],width:t[1],height:t[2]}}),f=new N({props:{options:t[4],colors:["#006b3e"],data:t[9],labels:t[10],sets:t[11],width:t[1],height:t[2]}}),d=new N({props:{options:t[5],colors:["#ff0000"],data:t[12],labels:t[13],sets:t[14],width:t[1],height:t[2]}}),p=new I({props:{options:t[3],colors:t[0],data:t[6],labels:t[7],sets:t[8],width:t[1],height:t[2]}}),h=new I({props:{options:t[4],colors:["#006b3e"],data:t[9],labels:t[10],sets:t[11],width:t[1],height:t[2]}}),a=new I({props:{options:t[5],colors:["#ff0000"],data:t[12],labels:t[13],sets:t[14],width:t[1],height:t[2]}}),{c(){l=V("div"),i=V("div"),b=V("p"),b.textContent="Group of three Line and Area charts",A=_(),v(r.$$.fragment),M=_(),v(f.$$.fragment),O=_(),v(d.$$.fragment),B=_(),n=V("div"),g=V("p"),g.textContent="Group of three Bar charts",E=_(),v(p.$$.fragment),L=_(),v(h.$$.fragment),P=_(),v(a.$$.fragment),q(b,"class","subtitle is-5 has-text-centered"),q(i,"class","column"),q(g,"class","subtitle is-5 has-text-centered"),q(n,"class","column"),q(l,"class","columns")},m(e,s){W(e,l,s),o(l,i),o(i,b),o(i,A),S(r,i,null),o(i,M),S(f,i,null),o(i,O),S(d,i,null),o(l,B),o(l,n),o(n,g),o(n,E),S(p,n,null),o(n,L),S(h,n,null),o(n,P),S(a,n,null),G=!0},p(e,[s]){const y={};s&8&&(y.options=e[3]),s&1&&(y.colors=e[0]),s&64&&(y.data=e[6]),s&128&&(y.labels=e[7]),s&256&&(y.sets=e[8]),s&2&&(y.width=e[1]),s&4&&(y.height=e[2]),r.$set(y);const m={};s&16&&(m.options=e[4]),s&512&&(m.data=e[9]),s&1024&&(m.labels=e[10]),s&2048&&(m.sets=e[11]),s&2&&(m.width=e[1]),s&4&&(m.height=e[2]),f.$set(m);const c={};s&32&&(c.options=e[5]),s&4096&&(c.data=e[12]),s&8192&&(c.labels=e[13]),s&16384&&(c.sets=e[14]),s&2&&(c.width=e[1]),s&4&&(c.height=e[2]),d.$set(c);const u={};s&8&&(u.options=e[3]),s&1&&(u.colors=e[0]),s&64&&(u.data=e[6]),s&128&&(u.labels=e[7]),s&256&&(u.sets=e[8]),s&2&&(u.width=e[1]),s&4&&(u.height=e[2]),p.$set(u);const k={};s&16&&(k.options=e[4]),s&512&&(k.data=e[9]),s&1024&&(k.labels=e[10]),s&2048&&(k.sets=e[11]),s&2&&(k.width=e[1]),s&4&&(k.height=e[2]),h.$set(k);const w={};s&32&&(w.options=e[5]),s&4096&&(w.data=e[12]),s&8192&&(w.labels=e[13]),s&16384&&(w.sets=e[14]),s&2&&(w.width=e[1]),s&4&&(w.height=e[2]),a.$set(w)},i(e){G||(j(r.$$.fragment,e),j(f.$$.fragment,e),j(d.$$.fragment,e),j(p.$$.fragment,e),j(h.$$.fragment,e),j(a.$$.fragment,e),G=!0)},o(e){C(r.$$.fragment,e),C(f.$$.fragment,e),C(d.$$.fragment,e),C(p.$$.fragment,e),C(h.$$.fragment,e),C(a.$$.fragment,e),G=!1},d(e){e&&X(l),T(r),T(f),T(d),T(p),T(h),T(a)}}}function $(t,l,i){let{colors:b=null,width:A="100%",height:r="150",options1:M={chart:{group:"group1",id:"items"}},options2:f={chart:{group:"group1",id:"moneyout"}},options3:O={chart:{group:"group1",id:"moneyin"}},data1:d=[1,2,3,9],labels1:B=["2021","2022","2023","2024"],sets1:n=["Number Of Units Sold"],data2:g=[100,600,300,400],labels2:E=["2021","2022","2023","2024"],sets2:p=["Incoming Revenue"],data3:L=[50,20,10,64],labels3:h=["2021","2022","2023","2024"],sets3:P=["Expenses"]}=l;return t.$$set=a=>{"colors"in a&&i(0,b=a.colors),"width"in a&&i(1,A=a.width),"height"in a&&i(2,r=a.height),"options1"in a&&i(3,M=a.options1),"options2"in a&&i(4,f=a.options2),"options3"in a&&i(5,O=a.options3),"data1"in a&&i(6,d=a.data1),"labels1"in a&&i(7,B=a.labels1),"sets1"in a&&i(8,n=a.sets1),"data2"in a&&i(9,g=a.data2),"labels2"in a&&i(10,E=a.labels2),"sets2"in a&&i(11,p=a.sets2),"data3"in a&&i(12,L=a.data3),"labels3"in a&&i(13,h=a.labels3),"sets3"in a&&i(14,P=a.sets3)},[b,A,r,M,f,O,d,B,n,g,E,p,L,h,P]}class F extends J{constructor(l){super(),K(this,l,$,Z,Q,{colors:0,width:1,height:2,options1:3,options2:4,options3:5,data1:6,labels1:7,sets1:8,data2:9,labels2:10,sets2:11,data3:12,labels3:13,sets3:14})}}const x=F;F.__docgen={version:3,name:"Sync.svelte",data:[{visibility:"public",description:null,keywords:[],name:"colors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"100%"},{visibility:"public",description:null,keywords:[],name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"150"},{visibility:"public",description:null,keywords:[],name:"options1",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"options2",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"options3",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"data1",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"labels1",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"sets1",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"data2",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"labels2",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"sets2",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"data3",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"labels3",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"sets3",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let H={},ee={};const te={title:"Charts/Advanced Examples/Synchronized Charts",component:x,args:H,argTypes:{},props:H},z={name:"Preview",tags:["isHidden"],args:H,argTypes:ee,props:H};var R,U,D;z.parameters={...z.parameters,docs:{...(R=z.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args
}`,...(D=(U=z.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};const se=["Main"],le=Object.freeze(Object.defineProperty({__proto__:null,Main:z,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{z as M,le as S};
