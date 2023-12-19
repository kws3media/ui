import"./index-af29543d.js";/**
 * fuzzy.js v0.1.0
 * (c) 2016 Ben Ripkens
 * @license: MIT
 * @params
 *  term : haystack
 *  query : needle
 *  opts: {
 *   analyzeSubTerms,
 *   analyzeSubTermDepth
 *   highlighting
 *  }
 */function m(e,i,a={}){let n=a.analyzeSubTerms?a.analyzeSubTerms:!1,g=a.analyzeSubTermDepth?a.analyzeSubTermDepth:10,s=a.highlighting?a.highlighting:{before:"<em>",after:"</em>"},l=f(e,i,s),h=e.length;if(n)for(let c=1;c<h&&c<g;c++){let t=e.substring(c),r=f(t,i,s);r.score>l.score&&(r.term=e,r.highlightedTerm=e.substring(0,c)+r.highlightedTerm,l=r)}return l}function f(e,i,a){let n=0,g=e.length,s=i.length,l="",h=0,c=-2;for(let t=0;t<s&&h<g;t++){let u=i.charAt(t).toLowerCase();for(;h<g;h++){let o=e.charAt(h);if(u===o.toLowerCase()){n++,c+1===h&&(n+=2),l+=a.before+o+a.after,c=h,h++;break}else l+=o}}return l+=e.substring(h,e.length),{score:n,term:e,query:i,highlightedTerm:l}}function T(e){let i=e.search_key?e.search_key:"value",a=e.scoreThreshold?e.scoreThreshold:5,n=e.fuzzyOpts?e.fuzzyOpts:{};return function(g,s){let l=s.map(t=>{let r={...t};return r.original={...t},typeof r=="object"&&(Array.isArray(i)||(i=[i]),i.forEach(u=>{if(`${u}`in r){let o=m(t[u],g,n);r.original[u]=o.highlightedTerm,r.score=!r.score||r.score&&r.score<o.score?o.score:r.score||0}})),r}),c=Math.max(...l.map(t=>t.score))-a;return l=l.filter(t=>t.score>(c>0?c:0)),l.map(t=>t.original)}}export{T as m};
