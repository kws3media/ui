import{a2 as V}from"./RadialChart-d4ecf1af.js";import"./index-af29543d.js";import{S as J,b as K,s as L,q as g,j as x,k as O,u as v,c as Q,v as f,m as E,E as j,N as F,t as N,d as M,h as W,p as q,r as X,w as I}from"./index-ae6f3512.js";import{w as Y,u as U,b as C,e as T}from"./index-b7fffc4c.js";import{C as Z,S as $}from"./frameworkTypes-9ac02643.js";function ee(i){let o,n,l,a,d,p,S,y,c,u,h,b,_,w,m,k={text:i[2],saved_text:i[3],error_text:i[4],color:i[0],size:i[1],icon_only:i[5],disabled:i[6],class:i[11],icon:i[7],tracker:i[8]};a=new V({props:k}),i[16](a);let z={text:i[2],saved_text:i[3],error_text:i[4],color:i[0],size:i[1],icon_only:i[5],disabled:i[6],class:i[11],icon:i[7],tracker:i[8],completion_timeout:i[9],error_timeout:i[10]};return u=new V({props:z}),i[17](u),{c(){o=g("div"),n=g("div"),l=g("form"),x(a.$$.fragment),d=O(),p=g("p"),p.textContent="This will succeed.",S=O(),y=g("div"),c=g("form"),x(u.$$.fragment),h=O(),b=g("p"),b.textContent="This will fail.",v(p,"class","is-block mt-2"),v(l,"action",""),v(n,"class","column"),v(b,"class","is-block mt-2"),v(c,"action",""),v(y,"class","column"),v(o,"class","columns p-5")},m(t,s){Q(t,o,s),f(o,n),f(n,l),E(a,l,null),f(l,d),f(l,p),f(o,S),f(o,y),f(y,c),E(u,c,null),f(c,h),f(c,b),_=!0,w||(m=[j(l,"submit",F(i[12])),j(c,"submit",F(i[13]))],w=!0)},p(t,[s]){const r={};s&4&&(r.text=t[2]),s&8&&(r.saved_text=t[3]),s&16&&(r.error_text=t[4]),s&1&&(r.color=t[0]),s&2&&(r.size=t[1]),s&32&&(r.icon_only=t[5]),s&64&&(r.disabled=t[6]),s&2048&&(r.class=t[11]),s&128&&(r.icon=t[7]),s&256&&(r.tracker=t[8]),a.$set(r);const e={};s&4&&(e.text=t[2]),s&8&&(e.saved_text=t[3]),s&16&&(e.error_text=t[4]),s&1&&(e.color=t[0]),s&2&&(e.size=t[1]),s&32&&(e.icon_only=t[5]),s&64&&(e.disabled=t[6]),s&2048&&(e.class=t[11]),s&128&&(e.icon=t[7]),s&256&&(e.tracker=t[8]),s&512&&(e.completion_timeout=t[9]),s&1024&&(e.error_timeout=t[10]),u.$set(e)},i(t){_||(N(a.$$.fragment,t),N(u.$$.fragment,t),_=!0)},o(t){M(a.$$.fragment,t),M(u.$$.fragment,t),_=!1},d(t){t&&W(o),i[16](null),q(a),i[17](null),q(u),w=!1,X(m)}}}function te(i,o,n){let{color:l="primary",size:a="",text:d="Save Changes",saved_text:p="Saved",error_text:S="Failed to Save",icon_only:y=!1,disabled:c=!1,icon:u="",tracker:h={saving:!1,saved:!1,error:!1},completion_timeout:b=600,error_timeout:_=3e3}=o,{class:w=""}=o,m=null,k=null;function z(){m.saving(),setTimeout(()=>{m.saved()},1e3)}function t(){k.saving(),setTimeout(()=>{k.error()},1e3)}function s(e){I[e?"unshift":"push"](()=>{m=e,n(14,m)})}function r(e){I[e?"unshift":"push"](()=>{k=e,n(15,k)})}return i.$$set=e=>{"color"in e&&n(0,l=e.color),"size"in e&&n(1,a=e.size),"text"in e&&n(2,d=e.text),"saved_text"in e&&n(3,p=e.saved_text),"error_text"in e&&n(4,S=e.error_text),"icon_only"in e&&n(5,y=e.icon_only),"disabled"in e&&n(6,c=e.disabled),"icon"in e&&n(7,u=e.icon),"tracker"in e&&n(8,h=e.tracker),"completion_timeout"in e&&n(9,b=e.completion_timeout),"error_timeout"in e&&n(10,_=e.error_timeout),"class"in e&&n(11,w=e.class)},[l,a,d,p,S,y,c,u,h,b,_,w,z,t,m,k,s,r]}class P extends J{constructor(o){super(),K(this,o,te,ee,L,{color:0,size:1,text:2,saved_text:3,error_text:4,icon_only:5,disabled:6,icon:7,tracker:8,completion_timeout:9,error_timeout:10,class:11,success:12,failed:13})}get success(){return this.$$.ctx[12]}get failed(){return this.$$.ctx[13]}}P.__docgen={version:3,name:"SubmitButton.svelte",data:[{keywords:[{name:"type",description:"{Exclude<ColorOptions , 'success'>}"}],visibility:"public",description:"Color of the Button",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"Exclude<ColorOptions , 'success'>",type:"Exclude<ColorOptions , 'success'>"},defaultValue:"primary"},{keywords:[{name:"type",description:"{SizeOptions}"}],visibility:"public",description:"Size of the Button",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"SizeOptions",type:"SizeOptions"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Save Changes"},{visibility:"public",description:null,keywords:[],name:"saved_text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Saved"},{visibility:"public",description:null,keywords:[],name:"error_text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Failed to Save"},{visibility:"public",description:null,keywords:[],name:"icon_only",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"tracker",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"completion_timeout",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:600},{visibility:"public",description:null,keywords:[],name:"error_timeout",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:3e3},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[{visibility:"public",description:null,keywords:[],name:"success",static:!1},{visibility:"public",description:null,keywords:[],name:"failed",static:!1}],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ie=async({args:i,canvasElement:o})=>{let l=Y(o).getAllByRole("button");const a=l[0],d=l[1];await U.click(a),await C(()=>{T(a.innerText).toBe("Saved")},{timeout:1e3}),await C(()=>{T(a.innerText).toBe("Save Changes")},{timeout:600}),await U.click(d),await C(()=>{T(d.innerText).toBe("Failed to Save")},{timeout:1e3}),await C(()=>{T(d.innerText).toBe("Save Changes")},{timeout:3e3})};let R={class:"",text:"Save Changes",icon:"save",icon_only:!1,saved_text:"Saved",error_text:"Failed to Save",disabled:!1,cy:"submit",tracker:{},color:"primary",size:"",completion_timeout:600,error_timeout:3e3},G={color:{control:"select",options:Z},size:{control:"select",options:$}};const se={title:"Buttons/Submit Button",component:V,args:R,argTypes:G,parameters:{layout:"fullscreen"}},B={name:"Canvas",play:ie,args:R,argTypes:G,decorators:[(i,{args:o})=>({Component:P,props:o})]};var A,D,H;B.parameters={...B.parameters,docs:{...(A=B.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Canvas",
  //tags: ["isHidden"],
  play: playInteractions,
  args: args,
  argTypes: argTypes,
  decorators: [(_, {
    args
  }) => ({
    Component: ButtonDecorator,
    props: args
  })]
}`,...(H=(D=B.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const ne=["Main"],ce=Object.freeze(Object.defineProperty({__proto__:null,Main:B,__namedExportsOrder:ne,default:se},Symbol.toStringTag,{value:"Module"}));export{ce as B};
