import{S as k,b as w,s as v,q as p,k as S,j as x,u,c as E,v as g,m as V,t as C,d as M,h as P,p as T}from"./index-1914c206.js";import{E as b}from"./RadialChart-07c156ff.js";import"./index-af29543d.js";function j(s){let i,n,r,d,o,l;return o=new b({props:{width:s[0],height:s[1],background_image:s[2],readonly:s[3],disabled:s[5],control_position:s[4]}}),{c(){i=p("div"),n=p("div"),r=p("label"),r.textContent="Please sign here",d=S(),x(o.$$.fragment),u(r,"for",""),u(r,"class","label"),u(n,"class","column has-text-centered"),u(i,"class","columns mb-6")},m(t,a){E(t,i,a),g(i,n),g(n,r),g(n,d),V(o,n,null),l=!0},p(t,[a]){const e={};a&1&&(e.width=t[0]),a&2&&(e.height=t[1]),a&4&&(e.background_image=t[2]),a&8&&(e.readonly=t[3]),a&32&&(e.disabled=t[5]),a&16&&(e.control_position=t[4]),o.$set(e)},i(t){l||(C(o.$$.fragment,t),l=!0)},o(t){M(o.$$.fragment,t),l=!1},d(t){t&&P(i),T(o)}}}function O(s,i,n){let{width:r="520px",height:d="170px",background_image:o="",readonly:l=!1,control_position:t="center",disabled:a=!1}=i;return s.$$set=e=>{"width"in e&&n(0,r=e.width),"height"in e&&n(1,d=e.height),"background_image"in e&&n(2,o=e.background_image),"readonly"in e&&n(3,l=e.readonly),"control_position"in e&&n(4,t=e.control_position),"disabled"in e&&n(5,a=e.disabled)},[r,d,o,l,t,a]}class _ extends k{constructor(i){super(),w(this,i,O,j,v,{width:0,height:1,background_image:2,readonly:3,control_position:4,disabled:5})}}_.__docgen={version:3,name:"ESignature.svelte",data:[{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"520px"},{visibility:"public",description:null,keywords:[],name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"170px"},{visibility:"public",description:null,keywords:[],name:"background_image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"readonly",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{Extract<import('"},{name:"kws3",description:""}],visibility:"public",description:"Default position of controls",name:"control_position",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"center"},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let h={width:"520px",height:"170px",background_image:"",readonly:!1,disabled:!1,control_position:"center"};const q={title:"Canvas/ESignature",component:b,args:h,argTypes:{}},c={name:"Preview",tags:["isHidden"],args:h,argTypes:{},decorators:[(s,{args:i})=>({Component:_,props:i})]};var f,m,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: {},
  decorators: [(_, {
    args
  }) => ({
    Component: Decorator,
    props: args
  })]
}`,...(y=(m=c.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const D=["Main"],B=Object.freeze(Object.defineProperty({__proto__:null,Main:c,__namedExportsOrder:D,default:q},Symbol.toStringTag,{value:"Module"}));export{c as M,B as S};
