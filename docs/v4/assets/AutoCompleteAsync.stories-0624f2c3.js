import{S as Q,b as R,s as W,w as X,x as Y,q as v,j as N,k as Z,C as M,u as S,c as J,v as m,m as V,y as x,F as $,t as B,d as L,h as U,p as O,o as ee,n as te}from"./index-ae6f3512.js";import{w as ae,a3 as F,p as se}from"./RadialChart-9a800552.js";import"./index-af29543d.js";import{f as le,a as P}from"./data-f8fd5438.js";import{w as ie,u as w,e as o,c as y}from"./index-b7fffc4c.js";import{s as i}from"./utils-92f6f0d7.js";import{C as ne,S as oe}from"./frameworkTypes-6fa5738f.js";function re(t){let n;return{c(){n=v("pre"),n.textContent=`${JSON.stringify(P,null,1)}`},m(e,c){J(e,n,c)},p:te,d(e){e&&U(n)}}}function ce(t){let n,e,c,l,C,p,u,h,z,k,f=JSON.stringify(t[0],null,2)+"",_,g;l=new ae({props:{title:"Input data",collapsible:!0,collapsed:!0,$$slots:{default:[re]},$$scope:{ctx:t}}});function a(s){t[10](s)}let E={size:t[1],color:t[2],search:le,options:P,search_strategy:t[6],highlighted_results:t[7],placeholder:t[8],style:t[3],class:t[9],disabled:t[4],readonly:t[5]};return t[0]!==void 0&&(E.value=t[0]),u=new F({props:E}),X.push(()=>Y(u,"value",a)),{c(){n=v("div"),e=v("div"),c=v("div"),N(l.$$.fragment),C=Z(),p=v("div"),N(u.$$.fragment),z=M(`
      Output data:
      `),k=v("code"),_=M(f),S(c,"class","column is-6"),S(p,"class","column is-6"),S(e,"class","columns px-5 pb-2 pt-5"),S(n,"id","ss_container")},m(s,r){J(s,n,r),m(n,e),m(e,c),V(l,c,null),m(e,C),m(e,p),V(u,p,null),m(p,z),m(p,k),m(k,_),g=!0},p(s,[r]){const q={};r&2048&&(q.$$scope={dirty:r,ctx:s}),l.$set(q);const d={};r&2&&(d.size=s[1]),r&4&&(d.color=s[2]),r&64&&(d.search_strategy=s[6]),r&128&&(d.highlighted_results=s[7]),r&256&&(d.placeholder=s[8]),r&8&&(d.style=s[3]),r&512&&(d.class=s[9]),r&16&&(d.disabled=s[4]),r&32&&(d.readonly=s[5]),!h&&r&1&&(h=!0,d.value=s[0],x(()=>h=!1)),u.$set(d),(!g||r&1)&&f!==(f=JSON.stringify(s[0],null,2)+"")&&$(_,f)},i(s){g||(B(l.$$.fragment,s),B(u.$$.fragment,s),g=!0)},o(s){L(l.$$.fragment,s),L(u.$$.fragment,s),g=!1},d(s){s&&U(n),O(l),O(u)}}}function ue(t,n,e){ee(()=>{se("#ss_container")});let{size:c="",color:l="",style:C="",disabled:p=!1,readonly:u=!1,search_strategy:h="fuzzy",highlighted_results:z=!0,placeholder:k="Marvel characters...",selected_character_string:f="Tony"}=n,{class:_=""}=n;function g(a){f=a,e(0,f)}return t.$$set=a=>{"size"in a&&e(1,c=a.size),"color"in a&&e(2,l=a.color),"style"in a&&e(3,C=a.style),"disabled"in a&&e(4,p=a.disabled),"readonly"in a&&e(5,u=a.readonly),"search_strategy"in a&&e(6,h=a.search_strategy),"highlighted_results"in a&&e(7,z=a.highlighted_results),"placeholder"in a&&e(8,k=a.placeholder),"selected_character_string"in a&&e(0,f=a.selected_character_string),"class"in a&&e(9,_=a.class)},[f,c,l,C,p,u,h,z,k,_,g]}class K extends Q{constructor(n){super(),R(this,n,ue,ce,W,{size:1,color:2,style:3,disabled:4,readonly:5,search_strategy:6,highlighted_results:7,placeholder:8,selected_character_string:0,class:9})}}K.__docgen={version:3,name:"AutoComplete.svelte",data:[{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Size of the input",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Color of the input",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"readonly",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"search_strategy",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fuzzy"},{visibility:"public",description:null,keywords:[],name:"highlighted_results",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"placeholder",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Marvel characters..."},{visibility:"public",description:null,keywords:[],name:"selected_character_string",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Tony",bind:[{source:"KwsAutoComplete",property:"value"}]},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const de=async({args:t,canvasElement:n})=>{ie(n);const e=n.querySelectorAll("input.input");await i(1e3),w.click(e[0]);const c=document.querySelectorAll("ul.options"),l=c[0].getElementsByTagName("li");await o(c[0].classList.contains("hidden")).toEqual(!0),await i(300),b(e[0]),await w.type(e[0],"tony",{delay:100}),await i(1200),await o(Number(l.length)).toBe(1),await o(D(l[0].innerHTML).toLowerCase()).toBe("tony stark"),await i(300),y.keyDown(e[0],{key:"Enter"}),await i(300),await o(Number(l.length)).toEqual(0),await o(e[0].value).toEqual("tony"),await i(300),await w.type(e[0]," roger",{delay:100}),await i(1200),await o(Number(l.length)).toBe(2),await o(D(l[1].innerHTML).toLowerCase()).toBe("steve rogers"),await i(300),b(e[0]),await w.type(e[0],"drax",{delay:100}),await i(1200),await o(Number(l.length)).toBe(1),await o(D(l[0].innerHTML).toLowerCase()).toBe("drax"),await y.keyDown(e[0],{key:"Enter"}),await i(300),await o(Number(l.length)).toEqual(0),await i(300),b(e[0]),await w.type(e[0],"t",{delay:100}),await i(1200),await y.keyDown(e[0],{key:"ArrowUp"}),await i(300),await y.keyDown(e[0],{key:"ArrowUp"}),await i(300),await y.keyDown(e[0],{key:"ArrowUp"}),await i(300),await y.keyDown(e[0],{key:"Enter"}),await o(Number(l.length)).toEqual(0),await o(e[0].value).toEqual("Thor"),await i(300),b(e[0]),await w.type(e[0],"s",{delay:100}),await i(1200),await y.keyDown(e[0],{key:"ArrowDown"}),await i(300),await y.keyDown(e[0],{key:"ArrowDown"}),await i(300),await y.keyDown(e[0],{key:"ArrowDown"}),await i(300),await y.keyDown(e[0],{key:"ArrowDown"}),await i(300),await w.click(c[0].querySelector("li.active")),await o(Number(l.length)).toBe(0),await o(e[0].value).toEqual("Captain Midlands"),await i(300),b(e[0]),await w.type(e[0],"s",{delay:100}),await w.click(document.body),await o(e[0].value).toBe("s"),await o(Number(l.length)).toEqual(0),b(e[0])};function D(t){return t.replace(/<[^>]*>/g,"").trim()}function b(t){y.input(t,{target:{value:""},bubbles:!0,cancelable:!0})}let T={value:"",style:"",class:"",size:"",color:"",options:[],search_strategy:"fuzzy",disabled:!1,readonly:!1,options_loading:!1,placeholder:"Marvel characters...",highlighted_results:!0},G={color:{control:"select",options:ne},size:{control:"select",options:oe},search_strategy:{control:"select",options:["fuzzy","strict"]}};const ye={title:"Forms/AutoComplete/AutoComplete (Async)",component:F,args:T,argTypes:G,parameters:{layout:"fullscreen"}},A={name:"Canvas",args:T,argTypes:G,props:T,play:de,decorators:[(t,{args:n})=>({Component:K,props:n})]};var H,I,j;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Canvas",
  //tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
  play: playInteractions,
  decorators: [(_, {
    args
  }) => ({
    Component: AutoCompleteDecorator,
    props: args
  })]
}`,...(j=(I=A.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const pe=["Main"],be=Object.freeze(Object.defineProperty({__proto__:null,Main:A,__namedExportsOrder:pe,default:ye},Symbol.toStringTag,{value:"Module"}));export{be as S};
