import{c as m}from"./index-8cc5c1ab.js";import{w as v,d as p}from"./index-4339844e.js";import{g as F}from"./index-ae6f3512.js";const B=n=>Array.isArray(n)?n.map(o=>M(o)):M(n),M=n=>{let o=n.data||{},i=n.validators||{},h=n.strictMode||!1,A={saving:!1,saved:!1,error:!1};const f=v(m(o)),b=v(m(A)),g=p(f,(t,l)=>{let c=Object.keys(t),y=c.reduce((e,r)=>(e[r]=!1,e),{}),u=(e,r,s)=>{if(Array.isArray(s[e])){if(!Array.isArray(r[e])||Array.isArray(r[e])&&r[e].length!==s[e].length)return!0}else if(typeof s[e]=="object"&&s[e]!==null){let a={};for(let O in s[e])a[O]=u(O,r[e],s[e]);return a}else{if(!h&&(r[e]===null&&[0,"",!1].indexOf(s[e])!==-1||r[e]===0&&s[e]===!1||r[e]===1&&s[e]===!0))return!1;if(r[e]!==s[e])return!0}return!1};c.length&&c.forEach(e=>{y[e]=u(e,o,t)}),l(y)}),k=p(f,(t,l)=>{let c=Object.keys(i)||[],y=c.reduce((e,r)=>(e[r]="",e),{}),u=(e,r)=>{let s="";if(r||typeof r<"u")if(Array.isArray(r))for(let a=0;a<r.length&&(s=u(e,r[a]),!s);a++);else s=r(t[e],t);return s};c.length&&c.forEach(e=>{y[e]=u(e,i[e])}),l(y)}),E=p(g,(t,l)=>{let c=y=>Object.values(y).some(u=>typeof u=="object"?c(u):u===!0);l(c(t))}),_=p(k,t=>Object.values(t).every(l=>l===""));function x(t){o=t,j()}function V(t){i=t,f.set(F(f))}function j(t=null){t&&t.preventDefault(),f.set(m(o)),b.set(m(A))}return{formData:f,errors:k,touched:g,isValid:_,isTouched:E,tracker:b,update:x,reset:j,setValidators:V}},C=n=>n&&n.trim()!=="",G=(n,o)=>(i,h)=>o(i,h)?"":n;export{B as m,C as n,G as w};