import{v as Z,a4 as H,p as fe}from"./RadialChart-07c156ff.js";import"./index-af29543d.js";import{S as _e,b as ye,s as me,w as x,x as $,q as c,j as I,k as M,C as j,u as h,c as G,v as i,m as q,y as ee,F as se,t as F,d as K,h as L,p as P,o as ge,n as ne}from"./index-1914c206.js";import{b as ie,a as oe}from"./data-cc1f5330.js";import{w as be}from"./index-150b40f0.js";import{C as ke,S as he}from"./frameworkTypes-60e558cb.js";function ve(s){let n;return{c(){n=c("pre"),n.textContent=`${JSON.stringify(ie,null,1)}`},m(a,d){G(a,n,d)},p:ne,d(a){a&&L(n)}}}function we(s){let n;return{c(){n=c("pre"),n.textContent=`${JSON.stringify(oe,null,1)}`},m(a,d){G(a,n,d)},p:ne,d(a){a&&L(n)}}}function Se(s){let n,a,d,f,C,_,u,v,V,w,g=JSON.stringify(s[0],null,2)+"",S,O,N,b,p,k,y,J,l,m,R,Q,D,B=JSON.stringify(s[1],null,2)+"",E,z;f=new Z({props:{title:"Input data",collapsible:!0,collapsed:!0,$$slots:{default:[ve]},$$scope:{ctx:s}}});function ue(e){s[15](e)}let U={size:s[2],color:s[3],options:ie,search_key:"name",value_key:"id",search_strategy:s[9],placeholder:s[13],style:s[4],class:s[14],disabled:s[5],readonly:s[6],selected_icon:s[10],no_options_msg:s[11],remove_all_tip:s[12]};s[0]!==void 0&&(U.value=s[0]),u=new H({props:U}),x.push(()=>$(u,"value",ue)),y=new Z({props:{title:"Input data",collapsible:!0,collapsed:!0,$$slots:{default:[we]},$$scope:{ctx:s}}});function pe(e){s[16](e)}let W={size:s[2],color:s[3],options:oe,search_key:s[7],value_key:s[8],search_strategy:s[9],placeholder:s[13],style:s[4],class:s[14],disabled:s[5],readonly:s[6],selected_icon:s[10],no_options_msg:s[11],remove_all_tip:s[12]};return s[1]!==void 0&&(W.value=s[1]),m=new H({props:W}),x.push(()=>$(m,"value",pe)),{c(){n=c("div"),a=c("div"),d=c("div"),I(f.$$.fragment),C=M(),_=c("div"),I(u.$$.fragment),V=j(`
      Output data: `),w=c("code"),S=j(g),O=M(),N=c("hr"),b=M(),p=c("div"),k=c("div"),I(y.$$.fragment),J=M(),l=c("div"),I(m.$$.fragment),Q=j(`
      Output data: `),D=c("code"),E=j(B),h(d,"class","column is-6"),h(_,"class","column is-6"),h(a,"class","columns"),h(k,"class","column is-6"),h(l,"class","column is-6"),h(p,"class","columns"),h(n,"id","ss_container")},m(e,t){G(e,n,t),i(n,a),i(a,d),q(f,d,null),i(a,C),i(a,_),q(u,_,null),i(_,V),i(_,w),i(w,S),i(n,O),i(n,N),i(n,b),i(n,p),i(p,k),q(y,k,null),i(p,J),i(p,l),q(m,l,null),i(l,Q),i(l,D),i(D,E),z=!0},p(e,[t]){const X={};t&131072&&(X.$$scope={dirty:t,ctx:e}),f.$set(X);const r={};t&4&&(r.size=e[2]),t&8&&(r.color=e[3]),t&512&&(r.search_strategy=e[9]),t&8192&&(r.placeholder=e[13]),t&16&&(r.style=e[4]),t&16384&&(r.class=e[14]),t&32&&(r.disabled=e[5]),t&64&&(r.readonly=e[6]),t&1024&&(r.selected_icon=e[10]),t&2048&&(r.no_options_msg=e[11]),t&4096&&(r.remove_all_tip=e[12]),!v&&t&1&&(v=!0,r.value=e[0],ee(()=>v=!1)),u.$set(r),(!z||t&1)&&g!==(g=JSON.stringify(e[0],null,2)+"")&&se(S,g);const Y={};t&131072&&(Y.$$scope={dirty:t,ctx:e}),y.$set(Y);const o={};t&4&&(o.size=e[2]),t&8&&(o.color=e[3]),t&128&&(o.search_key=e[7]),t&256&&(o.value_key=e[8]),t&512&&(o.search_strategy=e[9]),t&8192&&(o.placeholder=e[13]),t&16&&(o.style=e[4]),t&16384&&(o.class=e[14]),t&32&&(o.disabled=e[5]),t&64&&(o.readonly=e[6]),t&1024&&(o.selected_icon=e[10]),t&2048&&(o.no_options_msg=e[11]),t&4096&&(o.remove_all_tip=e[12]),!R&&t&2&&(R=!0,o.value=e[1],ee(()=>R=!1)),m.$set(o),(!z||t&2)&&B!==(B=JSON.stringify(e[1],null,2)+"")&&se(E,B)},i(e){z||(F(f.$$.fragment,e),F(u.$$.fragment,e),F(y.$$.fragment,e),F(m.$$.fragment,e),z=!0)},o(e){K(f.$$.fragment,e),K(u.$$.fragment,e),K(y.$$.fragment,e),K(m.$$.fragment,e),z=!1},d(e){e&&L(n),P(f),P(u),P(y),P(m)}}}function ze(s,n,a){ge(()=>{fe("#ss_container")});let{size:d="",color:f="",style:C="",disabled:_=!1,readonly:u=!1,search_key:v="name",value_key:V="id",search_strategy:w="fuzzy",selected_icon:g="check",no_options_msg:S="No matching options",remove_all_tip:O="Remove all",placeholder:N="Choose a Brand...",selected_brand:b="",selected_brand_string:p="Blackberry"}=n,{class:k=""}=n;function y(l){b=l,a(0,b)}function J(l){p=l,a(1,p)}return s.$$set=l=>{"size"in l&&a(2,d=l.size),"color"in l&&a(3,f=l.color),"style"in l&&a(4,C=l.style),"disabled"in l&&a(5,_=l.disabled),"readonly"in l&&a(6,u=l.readonly),"search_key"in l&&a(7,v=l.search_key),"value_key"in l&&a(8,V=l.value_key),"search_strategy"in l&&a(9,w=l.search_strategy),"selected_icon"in l&&a(10,g=l.selected_icon),"no_options_msg"in l&&a(11,S=l.no_options_msg),"remove_all_tip"in l&&a(12,O=l.remove_all_tip),"placeholder"in l&&a(13,N=l.placeholder),"selected_brand"in l&&a(0,b=l.selected_brand),"selected_brand_string"in l&&a(1,p=l.selected_brand_string),"class"in l&&a(14,k=l.class)},[b,p,d,f,C,_,u,v,V,w,g,S,O,N,k,y,J]}class re extends _e{constructor(n){super(),ye(this,n,ze,Se,me,{size:2,color:3,style:4,disabled:5,readonly:6,search_key:7,value_key:8,search_strategy:9,selected_icon:10,no_options_msg:11,remove_all_tip:12,placeholder:13,selected_brand:0,selected_brand_string:1,class:14})}}re.__docgen={version:3,name:"SearchableSelect.svelte",data:[{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Size of the input",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Color of the input",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"readonly",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"search_key",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"name"},{visibility:"public",description:null,keywords:[],name:"value_key",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"id"},{visibility:"public",description:null,keywords:[],name:"search_strategy",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fuzzy"},{visibility:"public",description:null,keywords:[],name:"selected_icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"check"},{visibility:"public",description:null,keywords:[],name:"no_options_msg",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"No matching options"},{visibility:"public",description:null,keywords:[],name:"remove_all_tip",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Remove all"},{visibility:"public",description:null,keywords:[],name:"placeholder",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Choose a Brand..."},{visibility:"public",description:null,keywords:[],name:"selected_brand",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"",bind:[{source:"KwsSearchableSelect",property:"value"}]},{keywords:[],visibility:"public",description:'selected_brand_multi = "", // max item null, not works if string given. should work?',name:"selected_brand_string",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Blackberry",bind:[{source:"KwsSearchableSelect",property:"value"}]},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ce=async({args:s,canvasElement:n})=>{be(n)};let A={value:"",style:"",class:"",size:"",color:"",options:[],search_key:"name",value_key:"id",search_strategy:"fuzzy",score_threshold:3,disabled:!1,readonly:!1,options_loading:!1,placeholder:"Choose a brand...",selected_icon:"check",no_options_msg:"No matching options",remove_all_tip:"Clear Selection"},de={color:{control:{type:"select"},options:ke},size:{control:{type:"select"},options:he},search_strategy:{control:{type:"select"}}};const Ce={title:"Forms/Select/SearchableSelect",component:H,args:A,argTypes:de,play:ce},T={name:"Canvas",args:A,argTypes:de,props:A,play:ce,decorators:[(s,{args:n})=>({Component:re,props:n})]};var le,te,ae;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Canvas",
  //tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
  play: playInteractions,
  decorators: [(_, {
    args
  }) => ({
    Component: SearchableSelectDecorator,
    props: args
  })]
}`,...(ae=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Ve=["Main"],Me=Object.freeze(Object.defineProperty({__proto__:null,Main:T,__namedExportsOrder:Ve,default:Ce},Symbol.toStringTag,{value:"Module"}));export{Me as S};