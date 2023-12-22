import{S as C,b as O,s as z,j as L,m as N,t as R,d as S,p as j}from"./index-1914c206.js";import{s as _}from"./RadialChart-31c1923f.js";import"./index-af29543d.js";function M(a){let l,i;return l=new _({props:{meta:a[0],limit:a[1],total:a[2],count:a[3],offset:a[4],showTotal:a[5],showCurrent:a[6],showPerPage:a[7],maxVisiblePages:a[8],entityName:a[9],size:a[10],frame:a[11],iconRight:a[12],iconLeft:a[13],perPageOptions:a[14]}}),{c(){L(l.$$.fragment)},m(t,n){N(l,t,n),i=!0},p(t,[n]){const s={};n&1&&(s.meta=t[0]),n&2&&(s.limit=t[1]),n&4&&(s.total=t[2]),n&8&&(s.count=t[3]),n&16&&(s.offset=t[4]),n&32&&(s.showTotal=t[5]),n&64&&(s.showCurrent=t[6]),n&128&&(s.showPerPage=t[7]),n&256&&(s.maxVisiblePages=t[8]),n&512&&(s.entityName=t[9]),n&1024&&(s.size=t[10]),n&2048&&(s.frame=t[11]),n&4096&&(s.iconRight=t[12]),n&8192&&(s.iconLeft=t[13]),n&16384&&(s.perPageOptions=t[14]),l.$set(s)},i(t){i||(R(l.$$.fragment,t),i=!0)},o(t){S(l.$$.fragment,t),i=!1},d(t){j(l,t)}}}function D(a,l,i){let{meta:t={limit:0,total:0,count:0,offset:0,status:""},limit:n=0,total:s=0,count:r=0,offset:f=0,showTotal:u=!0,showCurrent:m=!0,showPerPage:y=!0,maxVisiblePages:c=10,entityName:d="entries",size:p="small",frame:g=!1,iconRight:b="chevron-right",iconLeft:k="chevron-left",perPageOptions:h=[20,50,100,150,200,250]}=l;return a.$$set=e=>{"meta"in e&&i(0,t=e.meta),"limit"in e&&i(1,n=e.limit),"total"in e&&i(2,s=e.total),"count"in e&&i(3,r=e.count),"offset"in e&&i(4,f=e.offset),"showTotal"in e&&i(5,u=e.showTotal),"showCurrent"in e&&i(6,m=e.showCurrent),"showPerPage"in e&&i(7,y=e.showPerPage),"maxVisiblePages"in e&&i(8,c=e.maxVisiblePages),"entityName"in e&&i(9,d=e.entityName),"size"in e&&i(10,p=e.size),"frame"in e&&i(11,g=e.frame),"iconRight"in e&&i(12,b=e.iconRight),"iconLeft"in e&&i(13,k=e.iconLeft),"perPageOptions"in e&&i(14,h=e.perPageOptions)},[t,n,s,r,f,u,m,y,c,d,p,g,b,k,h]}class v extends C{constructor(l){super(),O(this,l,D,M,z,{meta:0,limit:1,total:2,count:3,offset:4,showTotal:5,showCurrent:6,showPerPage:7,maxVisiblePages:8,entityName:9,size:10,frame:11,iconRight:12,iconLeft:13,perPageOptions:14})}}v.__docgen={version:3,name:"Pagination.svelte",data:[{visibility:"public",description:null,keywords:[],name:"meta",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"limit",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"total",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"count",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"offset",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"showTotal",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"showCurrent",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"showPerPage",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"maxVisiblePages",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:10},{visibility:"public",description:null,keywords:[],name:"entityName",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"entries"},{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"@type {import('",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"small"},{visibility:"public",description:null,keywords:[],name:"frame",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"iconRight",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"chevron-right"},{visibility:"public",description:null,keywords:[],name:"iconLeft",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"chevron-left"},{visibility:"public",description:null,keywords:[],name:"perPageOptions",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let T={meta:{},limit:20,total:120,count:20,offset:20,showTotal:!0,showCurrent:!0,showPerPage:!0,maxVisiblePages:10,entityName:"entries",size:"small",frame:!1,iconRight:"chevron-right",iconLeft:"chevron-left",perPageOptions:[20,50,100,150,200,250]};const H={title:"Datagrid/Pagination",component:_,parameters:{layout:"fullscreen",canvas:{hidden:!0}},args:T,argTypes:{}},o={tags:["isHidden"],args:T,argTypes:{},decorators:[(a,{args:l})=>({Component:v,props:l})]};var w,P,V;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ["isHidden"],
  args: args,
  argTypes: {},
  decorators: [(_, {
    args
  }) => ({
    Component: Decorator,
    props: args
  })]
}`,...(V=(P=o.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const q=["Main"],F=Object.freeze(Object.defineProperty({__proto__:null,Main:o,__namedExportsOrder:q,default:H},Symbol.toStringTag,{value:"Module"}));export{o as M,F as S};
