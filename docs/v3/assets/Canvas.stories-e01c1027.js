import{S as G,b as J,s as L,w as N,x as Q,q as b,k as x,j as R,u as d,c as D,v as _,m as U,y as W,t as X,d as Y,h as K,p as Z,z as j,A as $}from"./index-1914c206.js";import{K as z}from"./RadialChart-07c156ff.js";import{P as H,E as A}from"./index-af29543d.js";function M(n){let a,i;return{c(){a=b("img"),d(a,"alt","canvasoutput"),j(a.src,i=n[0])||d(a,"src",i),d(a,"width",n[1]),d(a,"height",n[2]),$(a,"border","1px solid #b5b5b5")},m(r,c){D(r,a,c)},p(r,c){c&1&&!j(a.src,i=r[0])&&d(a,"src",i),c&2&&d(a,"width",r[1]),c&4&&d(a,"height",r[2])},d(r){r&&K(a)}}}function ee(n){let a,i,r,c,f,m,g,p,y,k,u;function v(t){n[20](t)}let h={width:n[1],height:n[2],pen_width:n[3],eraser_width:n[4],pen_color:n[5],background_image:n[6],readonly:n[7],disabled:n[8],initial_scale:n[9],expand_to:n[10],expand_from:n[11],expand_scale:n[12],has_controls:n[18],tools:n[13],active_tool:n[17],actions:n[14],toolbar_placement:n[15],control_position:n[16],cy:n[19]};n[0]!==void 0&&(h.image=n[0]),f=new z({props:h}),N.push(()=>Q(f,"image",v));let o=n[0]&&M(n);return{c(){a=b("div"),i=b("div"),r=b("label"),r.textContent="Input",c=x(),R(f.$$.fragment),g=x(),p=b("div"),y=b("label"),y.textContent="Output",k=x(),o&&o.c(),d(r,"for",""),d(r,"class","label"),d(i,"class","column has-text-centered"),d(y,"for",""),d(y,"class","label"),d(p,"class","column has-text-centered"),d(a,"class","columns mb-4")},m(t,l){D(t,a,l),_(a,i),_(i,r),_(i,c),U(f,i,null),_(a,g),_(a,p),_(p,y),_(p,k),o&&o.m(p,null),u=!0},p(t,[l]){const s={};l&2&&(s.width=t[1]),l&4&&(s.height=t[2]),l&8&&(s.pen_width=t[3]),l&16&&(s.eraser_width=t[4]),l&32&&(s.pen_color=t[5]),l&64&&(s.background_image=t[6]),l&128&&(s.readonly=t[7]),l&256&&(s.disabled=t[8]),l&512&&(s.initial_scale=t[9]),l&1024&&(s.expand_to=t[10]),l&2048&&(s.expand_from=t[11]),l&4096&&(s.expand_scale=t[12]),l&262144&&(s.has_controls=t[18]),l&8192&&(s.tools=t[13]),l&131072&&(s.active_tool=t[17]),l&16384&&(s.actions=t[14]),l&32768&&(s.toolbar_placement=t[15]),l&65536&&(s.control_position=t[16]),l&524288&&(s.cy=t[19]),!m&&l&1&&(m=!0,s.image=t[0],W(()=>m=!1)),f.$set(s),t[0]?o?o.p(t,l):(o=M(t),o.c(),o.m(p,null)):o&&(o.d(1),o=null)},i(t){u||(X(f.$$.fragment,t),u=!0)},o(t){Y(f.$$.fragment,t),u=!1},d(t){t&&K(a),Z(f),o&&o.d()}}}function te(n,a,i){let{width:r="250px",height:c="250px",pen_width:f=2,eraser_width:m=6,pen_color:g="#ff0000",background_image:p="",readonly:y=!1,disabled:k=!1,image:u="",initial_scale:v=1,expand_to:h="center",expand_from:o="center",expand_scale:t=50,tools:l={Pen:H,Eraser:A},actions:s=["controls","colorpicker","undo","redo","reset","expand"],toolbar_placement:V="bottom",control_position:P="center",active_tool:C="Pen",has_controls:E=!0,cy:S=""}=a;function F(e){u=e,i(0,u)}return n.$$set=e=>{"width"in e&&i(1,r=e.width),"height"in e&&i(2,c=e.height),"pen_width"in e&&i(3,f=e.pen_width),"eraser_width"in e&&i(4,m=e.eraser_width),"pen_color"in e&&i(5,g=e.pen_color),"background_image"in e&&i(6,p=e.background_image),"readonly"in e&&i(7,y=e.readonly),"disabled"in e&&i(8,k=e.disabled),"image"in e&&i(0,u=e.image),"initial_scale"in e&&i(9,v=e.initial_scale),"expand_to"in e&&i(10,h=e.expand_to),"expand_from"in e&&i(11,o=e.expand_from),"expand_scale"in e&&i(12,t=e.expand_scale),"tools"in e&&i(13,l=e.tools),"actions"in e&&i(14,s=e.actions),"toolbar_placement"in e&&i(15,V=e.toolbar_placement),"control_position"in e&&i(16,P=e.control_position),"active_tool"in e&&i(17,C=e.active_tool),"has_controls"in e&&i(18,E=e.has_controls),"cy"in e&&i(19,S=e.cy)},[u,r,c,f,m,g,p,y,k,v,h,o,t,l,s,V,P,C,E,S,F]}class I extends G{constructor(a){super(),J(this,a,te,ee,L,{width:1,height:2,pen_width:3,eraser_width:4,pen_color:5,background_image:6,readonly:7,disabled:8,image:0,initial_scale:9,expand_to:10,expand_from:11,expand_scale:12,tools:13,actions:14,toolbar_placement:15,control_position:16,active_tool:17,has_controls:18,cy:19})}}I.__docgen={version:3,name:"Canvas.svelte",data:[{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"250px"},{visibility:"public",description:null,keywords:[],name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"250px"},{visibility:"public",description:null,keywords:[],name:"pen_width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:2},{visibility:"public",description:null,keywords:[],name:"eraser_width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:6},{visibility:"public",description:null,keywords:[],name:"pen_color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"#ff0000"},{visibility:"public",description:null,keywords:[],name:"background_image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"readonly",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"",bind:[{source:"KwsCanvas",property:"image"}]},{visibility:"public",description:null,keywords:[],name:"initial_scale",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"expand_to",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"center"},{visibility:"public",description:null,keywords:[],name:"expand_from",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"center"},{visibility:"public",description:null,keywords:[],name:"expand_scale",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:50},{visibility:"public",description:null,keywords:[],name:"tools",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"actions",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{Extract<Positions, 'bottom'|'top'>}"}],visibility:"public",description:"Default position of the action toolbar",name:"toolbar_placement",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"Extract<Positions, 'bottom'|'top'>",type:[{kind:"type",text:"Extract<Positions, 'bottom'",type:"Extract<Positions, 'bottom'"},{kind:"type",text:"'top'>",type:"'top'>"}]},defaultValue:"bottom"},{keywords:[{name:"type",description:"{Extract<Positions, 'start'|'center'|'end'>}"}],visibility:"public",description:"Default position of controls",name:"control_position",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"Extract<Positions, 'start'|'center'|'end'>",type:[{kind:"type",text:"Extract<Positions, 'start'",type:"Extract<Positions, 'start'"},{kind:"const",text:"'center'",type:"string",value:"center"},{kind:"type",text:"'end'>",type:"'end'>"}]},defaultValue:"center"},{visibility:"public",description:null,keywords:[],name:"active_tool",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Pen"},{visibility:"public",description:null,keywords:[],name:"has_controls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"cy",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};let B={width:"400px",height:"200px",pen_width:2,eraser_width:2,pen_color:"#ff0000",background_image:"",readonly:!1,disabled:!1,has_controls:!0,image:"",initial_scale:1,expand_to:"center",expand_from:"center",expand_scale:50,tools:{Pen:H,Eraser:A},actions:["controls","colorpicker","undo","redo","reset","expand"],toolbar_placement:"bottom",control_position:"center",active_tool:"Pen",cy:""};const ie={title:"Canvas/Canvas",component:z,args:B,argTypes:{}},w={name:"Preview",tags:["isHidden"],args:B,argTypes:{},decorators:[(n,{args:a})=>({Component:I,props:a})]};var O,T,q;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(T=w.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const ne=["Main"],oe=Object.freeze(Object.defineProperty({__proto__:null,Main:w,__namedExportsOrder:ne,default:ie},Symbol.toStringTag,{value:"Module"}));export{w as M,oe as S};