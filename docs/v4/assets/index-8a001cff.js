import{g as s}from"./RadialChart-31c1923f.js";function o(r,t){return t=Object.assign(t,{_text:r}),new Promise(i=>{const n=new s({target:document.body,props:t,intro:!0});n.$on("_done",({detail:a})=>{i(a),n.$destroy()})})}class c{alert(t,e={}){return o(t,{...e,_type:"alert"})}prompt(t,e){return o(t,{...e,_type:"prompt"})}confirm(t,e){return o(t,{...e,_type:"confirm"})}}const g=new c;export{g as D};
