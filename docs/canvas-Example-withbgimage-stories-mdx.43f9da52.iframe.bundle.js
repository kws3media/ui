(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/stories/canvas/Example/withbgimage.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"withBackgroundImage",(function(){return withbgimage_stories_withBackgroundImage}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs"),ui=__webpack_require__("./packages/@kws3/ui/index.js");function add_css(target){Object(internal.i)(target,"svelte-1gy7dl3",".kws-canvas-wrapper .kws-pen-input canvas{background-repeat:repeat;background-size:cover}")}function create_if_block(ctx){let img,img_src_value,style_background_image=`url(${ctx[3]})`;return{c(){img=Object(internal.B)("img"),Object(internal.k)(img,"alt","canvasoutput"),Object(internal.kb)(img.src,img_src_value=ctx[0])||Object(internal.k)(img,"src",img_src_value),Object(internal.k)(img,"width",ctx[1]),Object(internal.k)(img,"height",ctx[2]),Object(internal.hb)(img,"border","1px solid #b5b5b5;"),Object(internal.hb)(img,"background-image",style_background_image),Object(internal.hb)(img,"background-size","contain")},m(target,anchor){Object(internal.Q)(target,img,anchor)},p(ctx,dirty){1&dirty&&!Object(internal.kb)(img.src,img_src_value=ctx[0])&&Object(internal.k)(img,"src",img_src_value),2&dirty&&Object(internal.k)(img,"width",ctx[1]),4&dirty&&Object(internal.k)(img,"height",ctx[2]),8&dirty&&style_background_image!==(style_background_image=`url(${ctx[3]})`)&&Object(internal.hb)(img,"background-image",style_background_image)},d(detaching){detaching&&Object(internal.A)(img)}}}function create_fragment(ctx){let div2,div0,label0,t1,kwscanvas,updating_image,t2,div1,label1,t4,current;function kwscanvas_image_binding(value){ctx[5](value)}let kwscanvas_props={active_tool:"Pen",width:ctx[1],tools:ctx[4],background_image:ctx[3]};void 0!==ctx[0]&&(kwscanvas_props.image=ctx[0]),kwscanvas=new ui.e({props:kwscanvas_props}),internal.m.push((()=>Object(internal.l)(kwscanvas,"image",kwscanvas_image_binding)));let if_block=ctx[0]&&create_if_block(ctx);return{c(){div2=Object(internal.B)("div"),div0=Object(internal.B)("div"),label0=Object(internal.B)("label"),label0.textContent="Input",t1=Object(internal.ib)(),Object(internal.v)(kwscanvas.$$.fragment),t2=Object(internal.ib)(),div1=Object(internal.B)("div"),label1=Object(internal.B)("label"),label1.textContent="Output",t4=Object(internal.ib)(),if_block&&if_block.c(),Object(internal.k)(label0,"for",""),Object(internal.k)(label0,"class","label"),Object(internal.k)(div0,"class","column has-text-centered"),Object(internal.k)(label1,"for",""),Object(internal.k)(label1,"class","label"),Object(internal.k)(div1,"class","column has-text-centered"),Object(internal.k)(div2,"class","columns mb-6")},m(target,anchor){Object(internal.Q)(target,div2,anchor),Object(internal.h)(div2,div0),Object(internal.h)(div0,label0),Object(internal.h)(div0,t1),Object(internal.T)(kwscanvas,div0,null),Object(internal.h)(div2,t2),Object(internal.h)(div2,div1),Object(internal.h)(div1,label1),Object(internal.h)(div1,t4),if_block&&if_block.m(div1,null),current=!0},p(ctx,[dirty]){const kwscanvas_changes={};2&dirty&&(kwscanvas_changes.width=ctx[1]),8&dirty&&(kwscanvas_changes.background_image=ctx[3]),!updating_image&&1&dirty&&(updating_image=!0,kwscanvas_changes.image=ctx[0],Object(internal.d)((()=>updating_image=!1))),kwscanvas.$set(kwscanvas_changes),ctx[0]?if_block?if_block.p(ctx,dirty):(if_block=create_if_block(ctx),if_block.c(),if_block.m(div1,null)):if_block&&(if_block.d(1),if_block=null)},i(local){current||(Object(internal.rb)(kwscanvas.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwscanvas.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(div2),Object(internal.y)(kwscanvas),if_block&&if_block.d()}}}function instance($$self,$$props,$$invalidate){let{image:image}=$$props,{width:width="350px",height:height="250px",background_image:background_image="/images/canvas_bg.png"}=$$props,tools={Pen:ui.O,Eraser:ui.t};return $$self.$$set=$$props=>{"image"in $$props&&$$invalidate(0,image=$$props.image),"width"in $$props&&$$invalidate(1,width=$$props.width),"height"in $$props&&$$invalidate(2,height=$$props.height),"background_image"in $$props&&$$invalidate(3,background_image=$$props.background_image)},[image,width,height,background_image,tools,function kwscanvas_image_binding(value){image=value,$$invalidate(0,image)}]}class WithBGImage_svelte_WithBGImage extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{image:0,width:1,height:2,background_image:3},add_css)}}var _templateObject,WithBGImage_svelte=WithBGImage_svelte_WithBGImage;WithBGImage_svelte_WithBGImage.__docgen={version:3,name:"WithBGImage.svelte",data:[{visibility:"public",description:null,keywords:[],name:"image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"},bind:[{source:"KwsCanvas",property:"image"}]},{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"350px"},{visibility:"public",description:null,keywords:[],name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"250px"},{visibility:"public",description:null,keywords:[],name:"background_image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"/images/canvas_bg.png"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var strings,raw,components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Canvas/Examples",mdxType:"Meta"}),Object(esm.b)("h3",null,"Canvas with background image"),Object(esm.b)(dist_esm.g,{name:"With Background Image",mdxType:"Story"},(function(){return{Component:WithBGImage_svelte}})),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"Example:")),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-html"},'\n  <Canvas\n    bind:image\n    active_tool="Pen"\n    {width}\n    {tools}\n    {background_image}\n  />\n    \n<script>\n  import { Canvas, Pen, Eraser } from \'@kws3/ui\';\n  \n  let let width = "350px";\n  let height=\'250px\';\n  let background_image = "/images/canvas_bg.png";\n\n  let tools = {Pen, Eraser};\n\n<\/script>\n')),Object(esm.b)("h5",null,"Can override background image CSS:"),Object(esm.b)(dist_esm.f,{language:"css",code:Object(ts_dedent_esm.a)(_templateObject||(strings=["\n    .kws-canvas-wrapper .kws-pen-input canvas{\n      background-repeat: repeat;\n      ....\n    }\n  "],raw||(raw=strings.slice(0)),strings.raw=raw,_templateObject=strings)),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var withbgimage_stories_withBackgroundImage=function withBackgroundImage(){return{Component:WithBGImage_svelte}};withbgimage_stories_withBackgroundImage.storyName="With Background Image",withbgimage_stories_withBackgroundImage.parameters={storySource:{source:"() => ({\n  Component: WithBGImage\n})"}};var componentMeta={title:"Canvas/Examples",includeStories:["withBackgroundImage"]},mdxStoryNameToKey={"With Background Image":"withBackgroundImage"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);