(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"./src/stories/slidingpane/slidingpane.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return slidingpane_stories_args})),__webpack_require__.d(__webpack_exports__,"slidingPane",(function(){return slidingpane_stories_slidingPane}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs");__webpack_require__("./node_modules/svelte/index.mjs");function add_css(target){Object(internal.i)(target,"svelte-177tsvu",".sp-item.svelte-177tsvu{background-color:DodgerBlue;color:white;width:100px;margin:10px;text-align:center;line-height:75px;font-size:30px}")}function get_each_context(ctx,list,i){const child_ctx=ctx.slice();return child_ctx[17]=list[i],child_ctx[19]=i,child_ctx}function create_each_block(ctx){let li,span,t0,t1,div,p,t2,t3,li_class_value,mounted,dispose,t0_value=ctx[19]+1+"",t2_value=ctx[6][ctx[1]].name+"";function click_handler(){return ctx[11](ctx[19])}return{c(){li=Object(internal.z)("li"),span=Object(internal.z)("span"),t0=Object(internal.jb)(t0_value),t1=Object(internal.fb)(),div=Object(internal.z)("div"),p=Object(internal.z)("p"),t2=Object(internal.jb)(t2_value),t3=Object(internal.fb)(),Object(internal.k)(span,"class","steps-marker"),Object(internal.k)(div,"class","steps-content"),Object(internal.k)(li,"class",li_class_value="steps-segment "+(ctx[1]==ctx[19]?"is-active":"")),Object(internal.eb)(li,"cursor","pointer")},m(target,anchor){Object(internal.N)(target,li,anchor),Object(internal.h)(li,span),Object(internal.h)(span,t0),Object(internal.h)(li,t1),Object(internal.h)(li,div),Object(internal.h)(div,p),Object(internal.h)(p,t2),Object(internal.h)(li,t3),mounted||(dispose=Object(internal.P)(li,"click",click_handler),mounted=!0)},p(new_ctx,dirty){ctx=new_ctx,66&dirty&&t2_value!==(t2_value=ctx[6][ctx[1]].name+"")&&Object(internal.cb)(t2,t2_value),2&dirty&&li_class_value!==(li_class_value="steps-segment "+(ctx[1]==ctx[19]?"is-active":""))&&Object(internal.k)(li,"class",li_class_value)},d(detaching){detaching&&Object(internal.y)(li),mounted=!1,dispose()}}}function create_default_slot_6(ctx){let div,ul,each_value=ctx[6],each_blocks=[];for(let i=0;i<each_value.length;i+=1)each_blocks[i]=create_each_block(get_each_context(ctx,each_value,i));return{c(){div=Object(internal.z)("div"),ul=Object(internal.z)("ul");for(let i=0;i<each_blocks.length;i+=1)each_blocks[i].c();Object(internal.k)(ul,"class","steps has-content-centered is-horizontal"),Object(internal.k)(div,"id","stepsHolder")},m(target,anchor){Object(internal.N)(target,div,anchor),Object(internal.h)(div,ul);for(let i=0;i<each_blocks.length;i+=1)each_blocks[i].m(ul,null)},p(ctx,dirty){if(1090&dirty){let i;for(each_value=ctx[6],i=0;i<each_value.length;i+=1){const child_ctx=get_each_context(ctx,each_value,i);each_blocks[i]?each_blocks[i].p(child_ctx,dirty):(each_blocks[i]=create_each_block(child_ctx),each_blocks[i].c(),each_blocks[i].m(ul,null))}for(;i<each_blocks.length;i+=1)each_blocks[i].d(1);each_blocks.length=each_value.length}},d(detaching){detaching&&Object(internal.y)(div),Object(internal.x)(each_blocks,detaching)}}}function create_default_slot_5(ctx){let div0,t1,div1,t3,div2,t5,div3;return{c(){div0=Object(internal.z)("div"),div0.textContent="Div 1",t1=Object(internal.fb)(),div1=Object(internal.z)("div"),div1.textContent="Div 2",t3=Object(internal.fb)(),div2=Object(internal.z)("div"),div2.textContent="Div 3",t5=Object(internal.fb)(),div3=Object(internal.z)("div"),div3.textContent="Div 4",Object(internal.k)(div0,"class","sp-item svelte-177tsvu"),Object(internal.k)(div1,"class","sp-item svelte-177tsvu"),Object(internal.k)(div2,"class","sp-item svelte-177tsvu"),Object(internal.k)(div3,"class","sp-item svelte-177tsvu")},m(target,anchor){Object(internal.N)(target,div0,anchor),Object(internal.N)(target,t1,anchor),Object(internal.N)(target,div1,anchor),Object(internal.N)(target,t3,anchor),Object(internal.N)(target,div2,anchor),Object(internal.N)(target,t5,anchor),Object(internal.N)(target,div3,anchor)},d(detaching){detaching&&Object(internal.y)(div0),detaching&&Object(internal.y)(t1),detaching&&Object(internal.y)(div1),detaching&&Object(internal.y)(t3),detaching&&Object(internal.y)(div2),detaching&&Object(internal.y)(t5),detaching&&Object(internal.y)(div3)}}}function create_default_slot_4(ctx){let p0,t1,p1,t2,p2;return{c(){p0=Object(internal.z)("p"),p0.textContent="Ah, You wont believe that is 2nd step",t1=Object(internal.fb)(),p1=Object(internal.z)("p"),p1.innerHTML='<img src="https://picsum.photos/200/300" alt=""/>',t2=Object(internal.fb)(),p2=Object(internal.z)("p"),p2.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n            culpa qui officia deserunt mollit anim id est laborum.",Object(internal.k)(p0,"class","title is-3")},m(target,anchor){Object(internal.N)(target,p0,anchor),Object(internal.N)(target,t1,anchor),Object(internal.N)(target,p1,anchor),Object(internal.N)(target,t2,anchor),Object(internal.N)(target,p2,anchor)},d(detaching){detaching&&Object(internal.y)(p0),detaching&&Object(internal.y)(t1),detaching&&Object(internal.y)(p1),detaching&&Object(internal.y)(t2),detaching&&Object(internal.y)(p2)}}}function create_default_slot_3(ctx){let message,current;return message=new ui.y({props:{color:"success",$$slots:{default:[create_default_slot_4]},$$scope:{ctx:ctx}}}),{c(){Object(internal.t)(message.$$.fragment)},m(target,anchor){Object(internal.Q)(message,target,anchor),current=!0},p(ctx,dirty){const message_changes={};1048576&dirty&&(message_changes.$$scope={dirty:dirty,ctx:ctx}),message.$set(message_changes)},i(local){current||(Object(internal.nb)(message.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(message.$$.fragment,local),current=!1},d(detaching){Object(internal.w)(message,detaching)}}}function create_default_slot_2(ctx){let p0,t1,p1;return{c(){p0=Object(internal.z)("p"),p0.textContent="Oh, noo, You reached at 3rd step",t1=Object(internal.fb)(),p1=Object(internal.z)("p"),p1.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n            culpa qui officia deserunt mollit anim id est laborum.",Object(internal.k)(p0,"class","title is-3")},m(target,anchor){Object(internal.N)(target,p0,anchor),Object(internal.N)(target,t1,anchor),Object(internal.N)(target,p1,anchor)},d(detaching){detaching&&Object(internal.y)(p0),detaching&&Object(internal.y)(t1),detaching&&Object(internal.y)(p1)}}}function create_default_slot_1(ctx){let message,current;return message=new ui.y({props:{color:"warning",$$slots:{default:[create_default_slot_2]},$$scope:{ctx:ctx}}}),{c(){Object(internal.t)(message.$$.fragment)},m(target,anchor){Object(internal.Q)(message,target,anchor),current=!0},p(ctx,dirty){const message_changes={};1048576&dirty&&(message_changes.$$scope={dirty:dirty,ctx:ctx}),message.$set(message_changes)},i(local){current||(Object(internal.nb)(message.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(message.$$.fragment,local),current=!1},d(detaching){Object(internal.w)(message,detaching)}}}function create_default_slot(ctx){let slidingpane0,t0,slidingpane1,t1,slidingpane2,current;return slidingpane0=new ui.R({props:{active:"step_one"==ctx[6][ctx[1]].key,v_center:ctx[3],h_center:ctx[4],track_height:ctx[5],class:ctx[8],style:ctx[2],$$slots:{default:[create_default_slot_5]},$$scope:{ctx:ctx}}}),slidingpane0.$on("heightChange",ctx[9]),slidingpane1=new ui.R({props:{active:"step_two"==ctx[6][ctx[1]].key,v_center:ctx[3],h_center:ctx[4],track_height:ctx[5],class:ctx[8],style:ctx[2],$$slots:{default:[create_default_slot_3]},$$scope:{ctx:ctx}}}),slidingpane1.$on("heightChange",ctx[9]),slidingpane2=new ui.R({props:{active:"step_three"==ctx[6][ctx[1]].key,v_center:ctx[3],h_center:ctx[4],track_height:ctx[5],class:ctx[8],style:ctx[2],$$slots:{default:[create_default_slot_1]},$$scope:{ctx:ctx}}}),slidingpane2.$on("heightChange",ctx[9]),{c(){Object(internal.t)(slidingpane0.$$.fragment),t0=Object(internal.fb)(),Object(internal.t)(slidingpane1.$$.fragment),t1=Object(internal.fb)(),Object(internal.t)(slidingpane2.$$.fragment)},m(target,anchor){Object(internal.Q)(slidingpane0,target,anchor),Object(internal.N)(target,t0,anchor),Object(internal.Q)(slidingpane1,target,anchor),Object(internal.N)(target,t1,anchor),Object(internal.Q)(slidingpane2,target,anchor),current=!0},p(ctx,dirty){const slidingpane0_changes={};66&dirty&&(slidingpane0_changes.active="step_one"==ctx[6][ctx[1]].key),8&dirty&&(slidingpane0_changes.v_center=ctx[3]),16&dirty&&(slidingpane0_changes.h_center=ctx[4]),32&dirty&&(slidingpane0_changes.track_height=ctx[5]),256&dirty&&(slidingpane0_changes.class=ctx[8]),4&dirty&&(slidingpane0_changes.style=ctx[2]),1048576&dirty&&(slidingpane0_changes.$$scope={dirty:dirty,ctx:ctx}),slidingpane0.$set(slidingpane0_changes);const slidingpane1_changes={};66&dirty&&(slidingpane1_changes.active="step_two"==ctx[6][ctx[1]].key),8&dirty&&(slidingpane1_changes.v_center=ctx[3]),16&dirty&&(slidingpane1_changes.h_center=ctx[4]),32&dirty&&(slidingpane1_changes.track_height=ctx[5]),256&dirty&&(slidingpane1_changes.class=ctx[8]),4&dirty&&(slidingpane1_changes.style=ctx[2]),1048576&dirty&&(slidingpane1_changes.$$scope={dirty:dirty,ctx:ctx}),slidingpane1.$set(slidingpane1_changes);const slidingpane2_changes={};66&dirty&&(slidingpane2_changes.active="step_three"==ctx[6][ctx[1]].key),8&dirty&&(slidingpane2_changes.v_center=ctx[3]),16&dirty&&(slidingpane2_changes.h_center=ctx[4]),32&dirty&&(slidingpane2_changes.track_height=ctx[5]),256&dirty&&(slidingpane2_changes.class=ctx[8]),4&dirty&&(slidingpane2_changes.style=ctx[2]),1048576&dirty&&(slidingpane2_changes.$$scope={dirty:dirty,ctx:ctx}),slidingpane2.$set(slidingpane2_changes)},i(local){current||(Object(internal.nb)(slidingpane0.$$.fragment,local),Object(internal.nb)(slidingpane1.$$.fragment,local),Object(internal.nb)(slidingpane2.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(slidingpane0.$$.fragment,local),Object(internal.ob)(slidingpane1.$$.fragment,local),Object(internal.ob)(slidingpane2.$$.fragment,local),current=!1},d(detaching){Object(internal.w)(slidingpane0,detaching),detaching&&Object(internal.y)(t0),Object(internal.w)(slidingpane1,detaching),detaching&&Object(internal.y)(t1),Object(internal.w)(slidingpane2,detaching)}}}function create_fragment(ctx){let div1,div0,message,t0,div3,div2,slidingpaneset,t1,div6,div5,div4,button0,icon0,t2,button1,icon1,t3,div9,div8,div7,button2,t5,button3,t7,button4,current,mounted,dispose;return message=new ui.y({props:{color:"grey",inner_style:"border-width:0",style:"margin: -1rem -1.3rem -0.8rem;",$$slots:{default:[create_default_slot_6]},$$scope:{ctx:ctx}}}),slidingpaneset=new ui.S({props:{style:"height:"+ctx[0]+"px",$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}}}),icon0=new ui.u({props:{icon:"arrow-left"}}),icon1=new ui.u({props:{icon:"arrow-right"}}),{c(){div1=Object(internal.z)("div"),div0=Object(internal.z)("div"),Object(internal.t)(message.$$.fragment),t0=Object(internal.fb)(),div3=Object(internal.z)("div"),div2=Object(internal.z)("div"),Object(internal.t)(slidingpaneset.$$.fragment),t1=Object(internal.fb)(),div6=Object(internal.z)("div"),div5=Object(internal.z)("div"),div4=Object(internal.z)("div"),button0=Object(internal.z)("button"),Object(internal.t)(icon0.$$.fragment),t2=Object(internal.fb)(),button1=Object(internal.z)("button"),Object(internal.t)(icon1.$$.fragment),t3=Object(internal.fb)(),div9=Object(internal.z)("div"),div8=Object(internal.z)("div"),div7=Object(internal.z)("div"),button2=Object(internal.z)("button"),button2.textContent="1",t5=Object(internal.fb)(),button3=Object(internal.z)("button"),button3.textContent="2",t7=Object(internal.fb)(),button4=Object(internal.z)("button"),button4.textContent="3",Object(internal.k)(div0,"class","column"),Object(internal.k)(div1,"class","columns"),Object(internal.k)(div2,"class","column"),Object(internal.k)(div3,"class","columns"),Object(internal.k)(button0,"class","button is-info is-small"),Object(internal.k)(button1,"class","button is-success is-small"),Object(internal.k)(div4,"class","buttons is-centered"),Object(internal.k)(div5,"class","column"),Object(internal.k)(div6,"class","columns"),Object(internal.k)(button2,"class","button is-warning is-small is-rounded"),Object(internal.k)(button3,"class","button is-warning is-small is-rounded"),Object(internal.k)(button4,"class","button is-warning is-small is-rounded"),Object(internal.k)(div7,"class","buttons is-centered"),Object(internal.k)(div8,"class","column"),Object(internal.k)(div9,"class","columns")},m(target,anchor){Object(internal.N)(target,div1,anchor),Object(internal.h)(div1,div0),Object(internal.Q)(message,div0,null),Object(internal.N)(target,t0,anchor),Object(internal.N)(target,div3,anchor),Object(internal.h)(div3,div2),Object(internal.Q)(slidingpaneset,div2,null),Object(internal.N)(target,t1,anchor),Object(internal.N)(target,div6,anchor),Object(internal.h)(div6,div5),Object(internal.h)(div5,div4),Object(internal.h)(div4,button0),Object(internal.Q)(icon0,button0,null),Object(internal.h)(div4,t2),Object(internal.h)(div4,button1),Object(internal.Q)(icon1,button1,null),Object(internal.N)(target,t3,anchor),Object(internal.N)(target,div9,anchor),Object(internal.h)(div9,div8),Object(internal.h)(div8,div7),Object(internal.h)(div7,button2),Object(internal.h)(div7,t5),Object(internal.h)(div7,button3),Object(internal.h)(div7,t7),Object(internal.h)(div7,button4),current=!0,mounted||(dispose=[Object(internal.P)(button0,"click",ctx[12]),Object(internal.P)(button1,"click",ctx[13]),Object(internal.P)(button2,"click",ctx[14]),Object(internal.P)(button3,"click",ctx[15]),Object(internal.P)(button4,"click",ctx[16])],mounted=!0)},p(ctx,[dirty]){const message_changes={};1048642&dirty&&(message_changes.$$scope={dirty:dirty,ctx:ctx}),message.$set(message_changes);const slidingpaneset_changes={};1&dirty&&(slidingpaneset_changes.style="height:"+ctx[0]+"px"),1048958&dirty&&(slidingpaneset_changes.$$scope={dirty:dirty,ctx:ctx}),slidingpaneset.$set(slidingpaneset_changes)},i(local){current||(Object(internal.nb)(message.$$.fragment,local),Object(internal.nb)(slidingpaneset.$$.fragment,local),Object(internal.nb)(icon0.$$.fragment,local),Object(internal.nb)(icon1.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(message.$$.fragment,local),Object(internal.ob)(slidingpaneset.$$.fragment,local),Object(internal.ob)(icon0.$$.fragment,local),Object(internal.ob)(icon1.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.y)(div1),Object(internal.w)(message),detaching&&Object(internal.y)(t0),detaching&&Object(internal.y)(div3),Object(internal.w)(slidingpaneset),detaching&&Object(internal.y)(t1),detaching&&Object(internal.y)(div6),Object(internal.w)(icon0),Object(internal.w)(icon1),detaching&&Object(internal.y)(t3),detaching&&Object(internal.y)(div9),mounted=!1,Object(internal.X)(dispose)}}}function instance($$self,$$props,$$invalidate){let{pane_height:pane_height=150,style:style="",v_center:v_center=!0,h_center:h_center=!0,track_height:track_height=!1,steps:steps=[{key:"step_one",name:"Step One"},{key:"step_two",name:"Step Two"},{key:"step_three",name:"Step Three"}],active_index:active_index=0}=$$props;function changeStep(i){let max=steps.length,_index=Math.max(0,Math.min(active_index+i,max-1));$$invalidate(1,active_index=_index)}let{class:klass=""}=$$props;function activateStep(index){$$invalidate(1,active_index=index)}return $$self.$$set=$$props=>{"pane_height"in $$props&&$$invalidate(0,pane_height=$$props.pane_height),"style"in $$props&&$$invalidate(2,style=$$props.style),"v_center"in $$props&&$$invalidate(3,v_center=$$props.v_center),"h_center"in $$props&&$$invalidate(4,h_center=$$props.h_center),"track_height"in $$props&&$$invalidate(5,track_height=$$props.track_height),"steps"in $$props&&$$invalidate(6,steps=$$props.steps),"active_index"in $$props&&$$invalidate(1,active_index=$$props.active_index),"class"in $$props&&$$invalidate(8,klass=$$props.class)},[pane_height,active_index,style,v_center,h_center,track_height,steps,changeStep,klass,function heightChange(event){$$invalidate(0,pane_height=event.detail.height)},activateStep,idx=>activateStep(idx),()=>changeStep(-1),()=>changeStep(1),()=>activateStep(0),()=>activateStep(1),()=>activateStep(2)]}class Slidingpane_svelte_Slidingpane extends internal.b{constructor(options){super(),Object(internal.M)(this,options,instance,create_fragment,internal.Y,{pane_height:0,style:2,v_center:3,h_center:4,track_height:5,steps:6,active_index:1,changeStep:7,class:8},add_css)}get changeStep(){return this.$$.ctx[7]}}var Slidingpane_svelte=Slidingpane_svelte_Slidingpane;Slidingpane_svelte_Slidingpane.__docgen={version:3,name:"Slidingpane.svelte",data:[{visibility:"public",description:null,keywords:[],name:"pane_height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:150},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"v_center",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"h_center",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"track_height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"steps",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"active_index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[{visibility:"public",description:null,keywords:[],name:"changeStep",params:[{name:"i"}],static:!1}],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _templateObject,_templateObject2,_templateObject3,_templateObject4,addon_actions_dist_esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var slidingpane_stories_args={active:!1,class:"",style:"",v_center:!0,h_center:!0,track_height:!0},layoutProps={args:slidingpane_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(dist_esm.e,{title:"Standalone/SlidingPane",component:ui.R,args:slidingpane_stories_args,mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Sliding Panes\n## Sliding panes component for Svelte applications\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"SlidingPane",args:slidingpane_stories_args,mdxType:"Story"},(function(args){return{Component:Slidingpane_svelte,props:args,on:{heightChange:Object(addon_actions_dist_esm.action)("Changed")}}}))),Object(esm.b)(dist_esm.b,{story:"SlidingPane",mdxType:"ArgsTable"}),Object(esm.b)("h3",{id:"usage-example"},"Usage Example"),Object(esm.b)(dist_esm.f,{language:"html",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n      <Message color="grey" inner_style="border-width:0" style="margin: -1rem -1.3rem -0.8rem;">\n        <div id="stepsHolder">\n          <ul class="steps has-content-centered is-horizontal">\n            {#each steps as step, idx}\n              <li class="steps-segment {active_index == idx ? \'is-active\' : \'\'}">\n                <span class="steps-marker">{idx + 1}</span>\n                <div class="steps-content">\n                  <p>{steps[active_index].name}</p>\n                </div>\n              </li>\n            {/each}\n          </ul>\n        </div>\n      </Message>\n      <div style="height:100%;width:800px;">\n        <SlidingPaneSet style="height:{pane_height}px">\n          <SlidingPane\n            active={steps[active_index].key == "step_one"}\n            {v_center}\n            {h_center}\n            {track_height}\n            class={klass}>\n            <div class="buttons">\n              <button class="button is-info">Info</button>\n              <button class="button is-success">Success</button>\n              <button class="button is-warning">Warning</button>\n              <button class="button is-danger">Danger</button>\n            </div>\n          </SlidingPane>\n          <SlidingPane\n            active={steps[active_index].key == "step_two"}\n            {v_center}\n            {h_center}\n            {track_height}\n            class={klass}>\n            <Message>\n              <p class="title is-3">Ah, You wont believe that is 2nd step</p>\n            </Message>\n          </SlidingPane>\n          <SlidingPane\n            active={steps[active_index].key == "step_three"}\n            {v_center}\n            {h_center}\n            {track_height}\n            class={klass}\n            {style}>\n            <Message color="warning">\n              <p class="title is-3">Oh, noo, You reached at 3rd step</p>\n            </Message>\n          </SlidingPane>\n        </SlidingPaneSet>\n      </div>\n      <div class="columns">\n        <div class="column">\n          <div class="buttons is-centered">\n            <button class="button is-info" on:click={() => changeStep(-1)}>\n              <Icon icon="arrow-left" />\n            </button>\n            <button class="button is-success" on:click={() => changeStep(+1)}>\n              <Icon icon="arrow-right" />\n            </button>\n          </div>\n        </div>\n      </div>\n      <script>\n        import { SlidingPane, SlidingPaneSet, Icon, Message } from "@kws3/ui";\n        export let pane_height = 150,\n          style = "",\n          v_center = true,\n          h_center = true,\n          track_height = false,\n          steps = [\n            { key: "step_one", name: "Step One" },\n            { key: "step_two", name: "Step Two" },\n            { key: "step_three", name: "Step Three" },\n          ],\n          active_index = 0;\n        export function changeStep(i) {\n          let max = steps.length;\n          let _index = Math.max(0, Math.min(active_index + i, max - 1));\n          active_index = _index;\n        }\n        let klass = "";\n        export { klass as class };\n      <\/script>\n  ']))),mdxType:"Source"}),Object(esm.b)("h5",{id:"import-the-component"},"Import the component:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["import { SlidingPane, SlidingPaneSet } from '@kws3/ui';"]))),mdxType:"Source"}),Object(esm.b)("h5",{id:"import-the-scss"},"Import the SCSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/SlidingPane.scss';"]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var slidingpane_stories_slidingPane=function slidingPane(args){return{Component:Slidingpane_svelte,props:args,on:{heightChange:Object(addon_actions_dist_esm.action)("Changed")}}};slidingpane_stories_slidingPane.storyName="SlidingPane",slidingpane_stories_slidingPane.args=slidingpane_stories_args,slidingpane_stories_slidingPane.parameters={storySource:{source:'args => ({\n  Component: SlidingpaneDecorator,\n  props: args,\n  on: {\n    heightChange: action("Changed")\n  }\n})'}};var componentMeta={title:"Standalone/SlidingPane",component:ui.R,args:slidingpane_stories_args,includeStories:["slidingPane"]},mdxStoryNameToKey={SlidingPane:"slidingPane"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);