(function(){"use strict";var e={252:function(e,t,o){var l=o(1827),n=(o(7023),o(6757));const a={class:"app"};function r(e,t,o,l,r,i){const u=(0,n.up)("VisualEditor");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(u,{modelValue:l.state,"onUpdate:modelValue":t[0]||(t[0]=e=>l.state=e),formData:l.formData},null,8,["modelValue","formData"])])}var i=o(9347),u=JSON.parse('{"title":"testPage-0","container":{"width":550,"height":550},"blocks":[{"top":100,"left":100,"zIndex":1,"type":"text","props":{"text":"文本","color":"#cccccc","size":"16px"}},{"top":100,"left":200,"zIndex":1,"type":"input","props":{"text":""},"model":{}},{"top":200,"left":100,"zIndex":1,"type":"button","props":{"text":"按钮","type":"primary","size":"large"}}]}'),s=(0,n.aZ)({props:{block:{type:Object},component:{type:Object}},setup(e){const{width:t,height:o}=e.component.resize||{};let l={};const a=t=>{let{clientX:o,clientY:n}=t,{startX:a,startY:r,startWidth:i,startHeight:u,startLeft:s,startTop:c,direction:d}=l;"center"===d.horizontal&&(o=a),"center"===d.vertical&&(n=r);const p=e.block;let m=o-a,f=n-r;"start"===d.vertical&&(f=-f,p.top=c-f),"start"===d.horizontal&&(m=-m,p.left=s-m);const v=i+m,h=u+f;p.width=v,p.height=h,p.hasResize=!0},r=()=>{document.body.removeEventListener("mousemove",a),document.body.removeEventListener("mouseup",r)},i=(t,o)=>{t.stopPropagation(),l={startX:t.clientX,startY:t.clientY,startWidth:e.block.width,startHeight:e.block.height,startLeft:e.block.left,startTop:e.block.top,direction:o},document.body.addEventListener("mousemove",a),document.body.addEventListener("mouseup",r)};return()=>(0,n.Wm)("div",null,[t&&(0,n.Wm)(n.HY,null,[(0,n.Wm)("div",{class:"block-resize block-resize-left",onMousedown:e=>{i(e,{horizontal:"start",vertical:"center"})}},null),(0,n.Wm)("div",{class:"block-resize block-resize-right",onMousedown:e=>{i(e,{horizontal:"end",vertical:"center"})}},null)]),o&&(0,n.Wm)(n.HY,null,[(0,n.Wm)("div",{class:"block-resize block-resize-top",onMousedown:e=>{i(e,{horizontal:"center",vertical:"start"})}},null),(0,n.Wm)("div",{class:"block-resize block-resize-bottom",onMousedown:e=>{i(e,{horizontal:"center",vertical:"end"})}},null)]),t&&o&&(0,n.Wm)(n.HY,null,[(0,n.Wm)("div",{class:"block-resize block-resize-top-left",onMousedown:e=>{i(e,{horizontal:"start",vertical:"start"})}},null),(0,n.Wm)("div",{class:"block-resize block-resize-top-right",onMousedown:e=>{i(e,{horizontal:"end",vertical:"start"})}},null),(0,n.Wm)("div",{class:"block-resize block-resize-bottom-left",onMousedown:e=>{i(e,{horizontal:"start",vertical:"end"})}},null),(0,n.Wm)("div",{class:"block-resize block-resize-bottom-right",onMousedown:e=>{i(e,{horizontal:"end",vertical:"end"})}},null)])])}}),c=(0,n.aZ)({props:{block:{type:Object},updateIndexBlock:{type:Function},index:{type:Number},formData:{type:Object}},setup(e){const t=(0,n.Fl)((()=>({top:`${e.block.top}px`,left:`${e.block.left}px`,zIndex:`${e.block.zIndex}`}))),o=(0,n.f3)("config"),l=(0,i.iH)(null);return(0,n.bv)((()=>{let{offsetWidth:t,offsetHeight:o}=l.value,n={...e.block,width:t,height:o};e.block.alignCenter&&(n.left=e.block.left-t/2,n.top=e.block.top-o/2,n.alignCenter=!1),e.updateIndexBlock&&e.updateIndexBlock(e.index,n)})),()=>{const a=o.componentsMap[e.block.type],r=a.render({size:e.block.hasResize?{width:e.block.width,height:e.block.height}:{},props:e.block.props,model:Object.keys(a.model||{}).reduce(((t,o)=>{let l=e.block.model[o];const n=e.formData;return t[o]={modelValue:e.formData[l],"onUpdate:modelValue":e=>n[l]=e},t}),{})}),{width:i,height:u}=a.resize||{};return(0,n.Wm)("div",{class:"editor-block",style:t.value,ref:l},[r,e.block.focus&&(i||u)&&(0,n.Wm)(s,{block:e.block,component:a},null)])}}}),d=o(510),p=o.n(d),m=o(6313);const f=(0,m.Z)();function v(e,t){let o=null;const l=e=>{e.dataTransfer.dropEffect="move"},n=e=>{e.preventDefault()},a=e=>{e.dataTransfer.dropEffect="none"},r=e=>{let l=t.value.blocks;t.value={...t.value,blocks:[...l,{top:e.offsetY,left:e.offsetX,zIndex:1,type:o.type,alignCenter:!0,props:{},model:{}}]},o=null},i=(t,i)=>{e.value.addEventListener("dragenter",l),e.value.addEventListener("dragover",n),e.value.addEventListener("dragleave",a),e.value.addEventListener("drop",r),o=i,f.emit("start")},u=()=>{e.value.removeEventListener("dragenter",l),e.value.removeEventListener("dragover",n),e.value.removeEventListener("dragleave",a),e.value.removeEventListener("drop",r),f.emit("end")};return{dragend:u,dragstart:i}}o(9312);function h(e,t,o){const l=(0,i.iH)(-1),a=(0,n.Fl)((()=>e.value.blocks[l.value])),r=()=>{e.value.blocks.forEach((e=>e.focus=!1))},u=()=>{t.value||(r(),l.value=-1)},s=(e,n,a)=>{t.value||(e.preventDefault(),e.stopPropagation(),e.shiftKey?c.value.focused.length<2?n.focus=!0:n.focus=!n.focus:n.focus||(r(),n.focus=!0),l.value=a,o(e))},c=(0,n.Fl)((()=>{let t=[],o=[];return e.value.blocks.forEach((e=>(e.focus?t:o).push(e))),{focused:t,unfocused:o}}));return{blockMousedown:s,containerMousedown:u,clearBlockFocus:r,focusData:c,lastSelectedBlock:a}}o(1771);function b(e,t,o){let l={startX:0,startY:0,dragging:!1},n=(0,i.qj)({x:null,y:null});const a=e=>{let{clientX:o,clientY:a}=e;l.dragging||(l.dragging=!0,f.emit("start"));let r=o-l.startX+l.startLeft,i=a-l.startY+l.startTop,u=null,s=null;for(let t=0;t<l.lines.y.length;t++){const{top:e,showTop:o}=l.lines.y[t];if(Math.abs(e-i)<5){s=o,a=l.startY-l.startTop+e;break}}for(let t=0;t<l.lines.x.length;t++){const{left:e,showLeft:n}=l.lines.x[t];if(Math.abs(e-r)<5){u=n,o=l.startX-l.startLeft+e;break}}n.x=u,n.y=s;let c=o-l.startX,d=a-l.startY;t.value.focused.forEach(((e,t)=>{e.top=l.startPos[t].top+d,e.left=l.startPos[t].left+c}))},r=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",r),n.x=null,n.y=null,l.dragging&&f.emit("end")},u=n=>{const{width:i,height:u}=o.value;l={startX:n.clientX,startY:n.clientY,startTop:o.value.top,startLeft:o.value.left,dragging:!1,startPos:t.value.focused.map((({top:e,left:t})=>({top:e,left:t}))),lines:(()=>{const{unfocused:o}=t.value;let l={x:[],y:[]};return[...o,{top:0,left:0,width:e.value.container.width,height:e.value.container.height}].forEach((e=>{try{if(null===i||null===u)throw new ReferenceError("Undefined Block B Size!");if(null===e.width||null===e.height||null===e.top||null===e.left)throw new ReferenceError("Undefined Block A Size!");const{top:t,left:o,width:n,height:a}=e;l.y.push({showTop:t,top:t}),l.y.push({showTop:t,top:t-u}),l.y.push({showTop:t+a/2,top:t+a/2-u/2}),l.y.push({showTop:t+a,top:t+a}),l.y.push({showTop:t+a,top:t+a-u}),l.x.push({showLeft:o,left:o}),l.x.push({showLeft:o+n,left:o+n}),l.x.push({showLeft:o+n/2,left:o+n/2-i/2}),l.x.push({showLeft:o+n,left:o+n-i}),l.x.push({showLeft:o,left:o-i})}catch(n){console.log(n)}})),l})()},document.addEventListener("mousemove",a),document.addEventListener("mouseup",r)};return{mousedown:u,markline:n}}function k(e,t){const o={current:-1,opQueue:[],commands:{},commandArray:[],destoryArray:[]},l=e=>{o.commandArray.push(e),o.commands[e.name]=(...t)=>{const{redo:l,undo:n}=e.execute(...t);if(l(),!e.pushQueue)return;let{opQueue:a,current:r}=o;a.length>0&&(a.slice(0,r+1),o.opQqueue=a),a.push({redo:l,undo:n}),o.current=r+1,console.log(a)}};l({name:"redo",keyboard:"ctrl+y",execute(){return{redo(){let e=o.opQueue[o.current+1];e&&(e.redo&&e.redo(),o.current++)}}}}),l({name:"undo",keyboard:"ctrl+z",execute(){return{redo(){if(-1===o.current)return;let e=o.opQueue[o.current];e&&(e.undo&&e.undo(),o.current--)}}}}),l({name:"drag",pushQueue:!0,init(){this.before=null;const t=()=>this.before=p()(e.value.blocks),l=()=>o.commands.drag();return f.on("start",t),f.on("end",l),()=>{f.off("start",t),f.off("end",l)}},execute(){let t=this.before,o=e.value.blocks;return{redo(){e.value={...e.value,blocks:o}},undo(){e.value={...e.value,blocks:t}}}}}),l({name:"updateContainer",pushQueue:!0,execute(t){let o={before:e.value,after:t};return{redo:()=>{e.value=o.after},undo:()=>{e.value=o.before}}}}),l({name:"updateBlock",pushQueue:!0,execute(t,o){let l={before:e.value.blocks,after:(()=>{let l=[...e.value.blocks];const n=e.value.blocks.indexOf(o);return-1!==n&&l.splice(n,1,t),l})()};return{redo:()=>{e.value={...e.value,blocks:l.after}},undo:()=>{e.value={...e.value,blocks:l.before}}}}}),l({name:"placeTop",pushQueue:!0,execute(){let o=p()(e.value.blocks),l=(()=>{let{focused:o,unfocused:l}=t.value;const n=l.reduce(((e,t)=>Math.max(e,t.zIndex)),-1/0)+1;return o.forEach((e=>e.zIndex=n)),e.value.blocks})();return{redo:()=>{e.value={...e.value,blocks:l}},undo:()=>{e.value={...e.value,blocks:o}}}}}),l({name:"placeBottom",pushQueue:!0,execute(){let o=p()(e.value.blocks),l=(()=>{let{focused:o,unfocused:l}=t.value;const n=l.reduce(((e,t)=>Math.min(e,t.zIndex)),1/0)-1;return n<0&&l.forEach((e=>e.zIndex++)),o.forEach((e=>e.zIndex=n<0?0:n)),e.value.blocks})();return{redo:()=>{e.value={...e.value,blocks:l}},undo:()=>{e.value={...e.value,blocks:o}}}}}),l({name:"delete",pushQueue:!0,execute(){let o=p()(e.value.blocks),l=t.value.unfocused;return{redo:()=>{e.value={...e.value,blocks:l}},undo:()=>{e.value={...e.value,blocks:o}}}}});const a=(()=>{const e={89:"y",90:"z"},t=t=>{const{ctrlKey:l,keyCode:n}=t;let a=[];l&&a.push("ctrl"),a.push(e[n]),a=a.join("+"),o.commandArray.forEach((({keyboard:e,name:l})=>{e&&e===a&&(o.commands[l](),t.preventDefault())}))},l=()=>(window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)});return l})();return(()=>{o.destoryArray.push(a()),o.commandArray.forEach((e=>e.init&&o.destoryArray.push(e.init())))})(),(0,n.Ah)((()=>{o.destoryArray.forEach((e=>e&&e()))})),o}var y=o(591),g=o(1581),w=o(1596);const x=(0,n.aZ)({props:{option:{type:Object}},setup(e,t){const o=(0,i.qj)({option:e.option,isShow:!1});t.expose({showDialog(e){o.option=e,o.isShow=!0}});const l=()=>{o.isShow=!1},a=()=>{o.isShow=!1,o.option.onConfirm&&o.option.onConfirm(o.option.content)};return()=>(0,n.Wm)(y.d0,{modelValue:o.isShow,"onUpdate:modelValue":e=>o.isShow=e,title:o.option.title},{default:()=>(0,n.Wm)(g.EZ,{type:"textarea",modelValue:o.option.content,"onUpdate:modelValue":e=>o.option.content=e,rows:10},null),footer:()=>o.option.footer&&(0,n.Wm)("div",null,[(0,n.Wm)(w.mi,{onClick:l},{default:()=>[(0,n.Uk)("取消")]}),(0,n.Wm)(w.mi,{type:"primary",onClick:a},{default:()=>[(0,n.Uk)("确定")]})])})}});let W=null;function z(e){if(!W){let t=document.createElement("div");W=(0,n.Wm)(x,{option:e}),(0,l.sY)(W,t),document.body.appendChild(t)}let{showDialog:t}=W.component.exposed;t(e)}const D=(0,n.aZ)({props:{label:String,icon:String},setup(e){const t=(0,n.f3)("hide");return()=>(0,n.Wm)("div",{class:"dropdown-item",onClick:t},[(0,n.Wm)("i",{class:e.icon},null),(0,n.Wm)("span",null,[e.label])])}}),E=(0,n.aZ)({props:{option:{type:Object}},setup(e,t){const o=(0,i.qj)({option:e.option,isShow:!1,top:0,left:0});t.expose({showDropdown(e){o.option=e,o.isShow=!0;let{top:t,left:l,height:n}=e.el.getBoundingClientRect();o.top=t+n,o.left=l}}),(0,n.JJ)("hide",(()=>{o.isShow=!1}));const l=(0,n.Fl)((()=>["dropdown",{"dropdown-isShow":o.isShow}])),a=(0,n.Fl)((()=>({top:`${o.top}px`,left:`${o.left}px`}))),r=(0,i.iH)(null),u=e=>{r.value.contains(e.target)||(o.isShow=!1)};return(0,n.bv)((()=>{document.body.addEventListener("mousedown",u,!0)})),(0,n.Jd)((()=>{document.body.removeEventListener("mousedown",u)})),()=>(0,n.Wm)("div",{class:l.value,style:a.value,ref:r},[o.option.content()])}});let O=null;function L(e){if(!O){let t=document.createElement("div");O=(0,n.Wm)(E,{option:e}),(0,l.sY)(O,t),document.body.appendChild(t)}let{showDropdown:t}=O.component.exposed;t(e)}var V=o(9295),C=o(250),S=o(9477),j=o(9005);function U(e){return"function"===typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,n.lA)(e)}var B=(0,n.aZ)({props:{block:{type:Object},data:{type:Object},updateContainer:{type:Function},updateBlock:{type:Function}},setup(e){const t=(0,n.f3)("config"),o=(0,i.qj)({editData:{}}),l=()=>{e.block?(o.editData=p()(e.block),console.log(o.editData.props)):o.editData=p()(e.data.container)},a=()=>{e.block?e.updateBlock(o.editData,e.block):e.updateContainer({...e.data,container:o.editData})};return(0,n.YP)((()=>e.block),l,{immediate:!0}),()=>{let r=[];if(e.block){const l=t.componentsMap[e.block.type];l&&l.props&&r.push(Object.entries(l.props).map((([e,t])=>{let l;return(0,n.Wm)(S.nH,{label:t.label},U(l={input:()=>(0,n.Wm)(g.EZ,{modelValue:o.editData.props[e],"onUpdate:modelValue":t=>o.editData.props[e]=t},null),color:()=>(0,n.Wm)(V.$,{modelValue:o.editData.props[e],"onUpdate:modelValue":t=>o.editData.props[e]=t},null),select:()=>{let l;return(0,n.Wm)(C.km,{modelValue:o.editData.props[e],"onUpdate:modelValue":t=>o.editData.props[e]=t},U(l=t.option.map((e=>(0,n.Wm)(C.BT,{label:e.label,value:e.value},null))))?l:{default:()=>[l]})}}[t.type]())?l:{default:()=>[l]})}))),l&&l.model&&r.push(Object.entries(l.model).map((([e,t])=>(0,n.Wm)(S.nH,{label:t},{default:()=>[(0,n.Wm)(g.EZ,{modelValue:o.editData.model[e],"onUpdate:modelValue":t=>o.editData.model[e]=t},null)]}))))}else r.push((0,n.Wm)(n.HY,null,[(0,n.Wm)(S.nH,{label:"容器宽度"},{default:()=>[(0,n.Wm)(j.d6,{modelValue:o.editData.width,"onUpdate:modelValue":e=>o.editData.width=e},null)]}),(0,n.Wm)(S.nH,{label:"容器高度"},{default:()=>[(0,n.Wm)(j.d6,{modelValue:o.editData.height,"onUpdate:modelValue":e=>o.editData.height=e},null)]})]));return(0,n.Wm)(S.ly,{labelPosition:"top",style:"padding: 30px"},{default:()=>[r,(0,n.Wm)(S.nH,null,{default:()=>[(0,n.Wm)(w.mi,{type:"primary",onClick:a},{default:()=>[(0,n.Uk)("应用")]}),(0,n.Wm)(w.mi,{onClick:l},{default:()=>[(0,n.Uk)("重置")]})]})]})}}}),M=(0,n.aZ)({props:{modelValue:{type:Object},formData:{type:Object}},emits:["update:modelValue"],setup(e,t){const o=(0,i.iH)(!1),l=(0,i.iH)(!0),a=(0,n.Fl)({get(){return e.modelValue},set(e){t.emit("update:modelValue",p()(e))}}),r=(0,n.Fl)((()=>({width:`${a.value.container.width}px`,height:`${a.value.container.height}px`}))),u=(e,t)=>{let o=a.value.blocks;o[e]=t,a.value={...a.value,blocks:[...o]}},s=(0,n.f3)("config"),d=(0,i.iH)(null),{dragstart:m,dragend:f}=v(d,a),{blockMousedown:y,containerMousedown:g,clearBlockFocus:x,focusData:W,lastSelectedBlock:E}=h(a,o,(e=>O(e))),{mousedown:O,markline:V}=b(a,W,E),C=[{label:"撤销",icon:"icon-back",handler:()=>S.undo()},{label:"重做",icon:"icon-forward",handler:()=>S.redo()},{label:"导入",icon:"icon-import",handler:()=>{z({title:"导入 JSON",content:"",footer:!0,onConfirm(e){S.updateContainer(JSON.parse(e))}})}},{label:"导出",icon:"icon-export",handler:()=>{z({title:"导出 JSON",content:JSON.stringify(a.value),footer:!1})}},{label:"置顶",icon:"icon-place-top",handler:()=>S.placeTop()},{label:"置底",icon:"icon-place-bottom",handler:()=>S.placeBottom()},{label:"删除",icon:"icon-delete",handler:()=>S.delete()},{label:()=>o.value?"编辑":"预览",icon:()=>o.value?"icon-edit":"icon-browse",handler:()=>{o.value=!o.value,x()}},{label:"关闭",icon:"icon-close",handler:()=>{l.value=!1,x()}},{label:"保存",icon:"icon-save",handler:()=>{alert("保存")}}],{commands:S}=k(a,W),j=(e,t)=>{e.preventDefault(),L({el:e.target,content:()=>(0,n.Wm)("div",null,[(0,n.Wm)(D,{label:"删除",icon:"icon-delete",onClick:()=>S.delete()},null),(0,n.Wm)(D,{label:"置顶",icon:"icon-place-top",onClick:()=>S.placeTop()},null),(0,n.Wm)(D,{label:"置底",icon:"icon-place-bottom",onClick:()=>S.placeBottom()},null),(0,n.Wm)(D,{label:"查看",icon:"icon-place-browse",onClick:()=>{z({title:"查看组件数据",content:JSON.stringify(t)})}},null),(0,n.Wm)(D,{label:"导入",icon:"icon-place-import",onClick:()=>{z({title:"导入组件数据",content:"",footer:!0,onConfirm(e){e=JSON.parse(e),S.updateBlock(e,t)}})}},null)])})};return()=>l.value?(0,n.Wm)("div",{class:"editor"},[(0,n.Wm)("div",{class:"editor-material"},[s.componentsList.map((e=>(0,n.Wm)("div",{class:"editor-material-item",draggable:!0,onDragstart:t=>m(t,e),onDragend:e=>f(e)},[(0,n.Wm)("span",null,[e.label]),(0,n.Wm)("div",null,[e.preview()])])))]),(0,n.Wm)("div",{class:"editor-menu"},[C.map((e=>{const t="function"==typeof e.icon?e.icon():e.icon,o="function"==typeof e.label?e.label():e.label;return(0,n.Wm)("div",{class:"editor-menu-button",onClick:e.handler},[(0,n.Wm)("i",{class:t},null),(0,n.Wm)("span",null,[o])])}))]),(0,n.Wm)("div",{class:"editor-panel"},[(0,n.Wm)(B,{block:E.value,data:a.value,updateContainer:S.updateContainer,updateBlock:S.updateBlock},null)]),(0,n.Wm)("div",{class:"editor-container"},[(0,n.Wm)("div",{class:"editor-container-canvas"},[(0,n.Wm)("div",{class:"editor-container-canvas__content",style:r.value,ref:d,onMousedown:g},[a.value.blocks.map(((t,l)=>(0,n.Wm)(c,{class:(t.focus?"editor-block-focus":"")+(o.value?"editor-block-preview":""),block:t,onMousedown:e=>y(e,t,l),onContextmenu:e=>j(e,t),updateIndexBlock:u,index:l,formData:e.formData},null))),null!==V.x&&(0,n.Wm)("div",{class:"markline-x",style:{left:`${V.x}px`}},null),null!==V.y&&(0,n.Wm)("div",{class:"markline-y",style:{top:`${V.y}px`}},null)])])])]):(0,n.Wm)(n.HY,null,[(0,n.Wm)("div",{class:"editor-container-canvas__content",style:r.value},[a.value.blocks.map((t=>(0,n.Wm)(c,{class:"editor-block-preview",block:t,formData:e.formData},null)))]),(0,n.Wm)("div",{style:"position: fixed; top:0; left:0;"},[(0,n.Wm)(w.mi,{type:"info",onClick:()=>l.value=!0},{default:()=>[(0,n.Uk)("返回编辑")]}),JSON.stringify(e.formData)])])}}),H=(0,n.aZ)({props:{start:{type:Number},end:{type:Number}},emits:["update:start","update:end"],setup(e,t){const o=(0,n.Fl)({get(){return e.start},set(e){t.emit("update:start",e)}}),a=(0,n.Fl)({get(){return e.end},set(e){t.emit("update:end",e)}});return()=>(0,n.Wm)("div",{class:"range-selector"},[(0,n.wy)((0,n.Wm)("input",{type:"text","onUpdate:modelValue":e=>o.value=e},null),[[l.nr,o.value]]),(0,n.Wm)("span",null,[(0,n.Uk)("~")]),(0,n.wy)((0,n.Wm)("input",{type:"text","onUpdate:modelValue":e=>a.value=e},null),[[l.nr,a.value]])])}});function T(){const e=[],t={};return{componentsList:e,componentsMap:t,register:o=>{e.push(o),t[o.type]=o}}}let Y=T();const $=e=>({type:"input",label:e}),F=e=>({type:"color",label:e}),I=(e,t)=>({type:"select",label:e,option:t});console.log(Y);const Z="https://dummyimage.com/100x50";Y.register({label:"文本",preview:()=>"TextArea prewview",render:({props:e})=>(0,n.Wm)("span",{style:{color:e.color,fontSize:e.size}},[e.text||"文本"]),type:"text",props:{text:$("输入文本内容"),color:F("字体颜色"),size:I("字体大小",[{label:"12px",value:"12px"},{label:"14px",value:"14px"},{label:"16px",value:"16px"},{label:"18px",value:"18px"},{label:"20px",value:"20px"},{label:"24px",value:"24px"},{label:"28px",value:"28px"}])}}),Y.register({label:"按钮",resize:{width:!0,height:!0},preview:()=>(0,n.Wm)(w.mi,{type:"primary"},{default:()=>[(0,n.Uk)("Button")]}),render:({props:e,size:t})=>(0,n.Wm)(w.mi,{style:{height:`${t.height}px`,width:`${t.width}px`},type:e.type,size:e.size},{default:()=>[e.text||"按钮"]}),type:"button",props:{text:$("输入按钮内容"),type:I("按钮类型",[{label:"基础",value:"primary"},{label:"成功",value:"success"},{label:"警告",value:"warning"},{label:"危险",value:"danger"},{label:"信息",value:"info"}]),size:I("按钮尺寸",[{label:"中等（默认）",value:"default"},{label:"大",value:"large"},{label:"小",value:"small"}])}}),Y.register({label:"输入框",resize:{width:!0},preview:()=>(0,n.Wm)(g.EZ,{placeholder:"text"},null),render:({model:e,size:t})=>(0,n.Wm)(g.EZ,(0,n.dG)({placeholder:"text"},e.default,{style:{width:`${t.width}px`}}),null),type:"input",model:{default:"绑定字段"}}),Y.register({label:"范围选择器",preview:()=>(0,n.Wm)(H,{placeholder:"text"},null),render:({model:e})=>(console.log(e),(0,n.Wm)(H,{start:e.start.modelValue,end:e.end.modelValue,"onUpdate:start":e.start["onUpdate:modelValue"],"onUpdate:end":e.end["onUpdate:modelValue"]},null)),type:"range",model:{start:"开始范围",end:"结束范围"}}),Y.register({label:"图片",resize:{width:!0,height:!0},preview:()=>(0,n.Wm)("img",{src:Z},null),render:({props:e,size:t})=>(0,n.Wm)("img",{src:e.text||Z,alt:"img",style:{height:`${t.height}px`,width:`${t.width}px`}},null),type:"image",props:{text:$("输入图片链接")}}),Y.register({label:"视频",resize:{width:!0,height:!0},preview:()=>"视频",render:({props:e,size:t})=>(0,n.Wm)("video",{src:e.text,controls:"controls",style:{height:`${t.height}px`,width:`${t.width}px`}},null),props:{text:$("输入视频链接")},type:"video"});var J={components:{VisualEditor:M},setup(){const e=(0,i.iH)(u);(0,n.JJ)("config",Y);const t=(0,i.iH)({username:"Bao",password:123123,start:1,end:200});return{state:e,formData:t}}},A=o(1189);const Q=(0,A.Z)(J,[["render",r]]);var X=Q;(0,l.ri)(X).mount("#app")}},t={};function o(l){var n=t[l];if(void 0!==n)return n.exports;var a=t[l]={exports:{}};return e[l].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,l,n,a){if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],a=e[c][2];for(var i=!0,u=0;u<l.length;u++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](l[u])}))?l.splice(u--,1):(i=!1,a<r&&(r=a));if(i){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[l,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,a,r=l[0],i=l[1],u=l[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(u)var c=u(o)}for(t&&t(l);s<r.length;s++)a=r[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},l=self["webpackChunklowcode_visual_editor"]=self["webpackChunklowcode_visual_editor"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[998],(function(){return o(252)}));l=o.O(l)})();
//# sourceMappingURL=app.d21ac147.js.map