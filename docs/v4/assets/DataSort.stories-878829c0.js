import{S as u,b as y,s as _,j as f,m as g,t as b,d as S,p as D}from"./index-ae6f3512.js";import{r as c}from"./RadialChart-fd6d98ed.js";import"./index-af29543d.js";function k(n){let t,o;return t=new c({props:{options:n[0],sort_by:n[1]}}),{c(){f(t.$$.fragment)},m(e,r){g(t,e,r),o=!0},p(e,[r]){const s={};r&1&&(s.options=e[0]),r&2&&(s.sort_by=e[1]),t.$set(s)},i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){S(t.$$.fragment,e),o=!1},d(e){D(t,e)}}}function v(n,t,o){let{options:e=[],sort_by:r=""}=t;return n.$$set=s=>{"options"in s&&o(0,e=s.options),"sort_by"in s&&o(1,r=s.sort_by)},[e,r]}class d extends u{constructor(t){super(),y(this,t,v,k,_,{options:0,sort_by:1})}}d.__docgen={version:3,name:"DataSort.svelte",data:[{visibility:"public",description:null,keywords:[],name:"options",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"sort_by",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let m={options:[{name:"ID Newest First",value:"id DESC"},{name:"ID Oldest First",value:"id ASC"}],sort_by:""};const w={title:"Datagrid/DataSort",component:c,args:m,argTypes:{}},a={args:m,argTypes:{},decorators:[(n,{args:t})=>({Component:d,props:t})]};var i,p,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: args,
  argTypes: {},
  decorators: [(_, {
    args
  }) => ({
    Component: Decorator,
    props: args
  })]
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const C=["Main"],h=Object.freeze(Object.defineProperty({__proto__:null,Main:a,__namedExportsOrder:C,default:w},Symbol.toStringTag,{value:"Module"}));export{a as M,h as S};
