(function(e){function t(t){for(var o,i,l=t[0],c=t[1],u=t[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("5f5b"),a=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Sketchpad")],1)}),i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",{staticClass:"sketchpad"},[n("canvas",{ref:"canvas",attrs:{width:"500",height:"500"}})]),n("b-container",{staticClass:"controls"},[n("h1",[e._v("Sketchpad Web App")]),n("h2",[e._v("By Michael D'Silva")]),n("b-button-group",[n("b-button",{attrs:{variant:"outline-primary",id:"drawing-mode"}},[e._v("Exit drawing mode")]),n("br"),n("b-button",{attrs:{id:"clear-canvas"}},[e._v("Clear")]),n("br"),n("b-button",{attrs:{id:"cut-btn"}},[e._v("Cut")]),n("b-button",{attrs:{id:"copy-btn"}},[e._v("Copy")]),n("b-button",{attrs:{id:"paste-btn"}},[e._v("Paste")])],1),n("br"),n("br"),n("div",{attrs:{id:"drawing-mode-options"}},[n("h2",[e._v("Drawing Mode Options")]),n("b-form-group",{attrs:{"label-cols-sm":"3",label:"Mode:","label-for":"drawing-mode-selector"}},[n("b-form-select",{staticClass:"mb-3",attrs:{id:"drawing-mode-selector"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("b-form-select-option",{attrs:{value:"scribbles"}},[e._v("Scribbles")]),n("b-form-select-option",{attrs:{value:"line"}},[e._v("Straight Lines")]),n("b-form-select-option",{attrs:{value:"rectangle"}},[e._v("Rectangles")]),n("b-form-select-option",{attrs:{value:"ellipse"}},[e._v("Ellipses")]),n("b-form-select-option",{attrs:{value:"square"}},[e._v("Squares")]),n("b-form-select-option",{attrs:{value:"circle"}},[e._v("Circles")]),n("b-form-select-option",{attrs:{value:"polygon"}},[e._v("Polygons")])],1)],1),n("b-form-group",{attrs:{id:"drawing-color-label","label-cols-sm":"5",label:"Drawing Color:","label-for":"drawing-color"}},[n("b-form-input",{attrs:{type:"color",value:"#000000",id:"drawing-color"}})],1)],1)],1)],1)},c=[],u=n("7a94"),s=n("d4ec"),f=n("bee2"),d=n("2caf"),v=n("262e"),b=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"superconstructor",value:function(){}}]),n}(u["fabric"].Line),p=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"superconstructor",value:function(){}}]),n}(u["fabric"].Rect),g=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"superconstructor",value:function(){}}]),n}(u["fabric"].Ellipse),m=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"superconstructor",value:function(){}}]),n}(u["fabric"].Rect),y=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"superconstructor",value:function(){}}]),n}(u["fabric"].Ellipse),h=function(e){Object(v["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"superconstructor",value:function(){}}]),n}(u["fabric"].Line),w={name:"HelloWorld",props:{},mounted:function(){var e=this.$refs.canvas,t=new u["fabric"].Canvas(e,{isDrawingMode:!1}),n=function(){1==d&&(console.log(d+"Scribbles"),t.isDrawingMode=!0,t.freeDrawingBrush.color=O.value)},o=function(){var e,n;1==d&&(console.log(d+"Straight Line"),t.isDrawingMode=!1,t.on("mouse:down",(function(o){e=!0;var r=t.getPointer(o.e),a=[r.x,r.y,r.x,r.y];n=new b(a,{strokeWidth:6,fill:O.value,stroke:O.value,originX:"center",originY:"center"}),"line"==w.value&&d&&t.add(n)})),t.on("mouse:move",(function(o){if(e){var r=t.getPointer(o.e);n.set({x2:r.x,y2:r.y}),"line"==w.value&&d&&t.renderAll()}})),t.on("mouse:up",(function(){e=!1})))},r=function(){var e,n,o,r;1==d&&(console.log(d+"Rectangle;"+w.value),t.isDrawingMode=!1,t.on("mouse:down",(function(a){e=!0;var i=t.getPointer(a.e);o=i.x,r=i.y,n=new p({strokeWidth:1,fill:O.value,stroke:O.value,left:o,top:r}),"rectangle"==w.value&&d&&t.add(n)})),t.on("mouse:move",(function(a){if(e){var i=t.getPointer(a.e),l=i.x,c=i.y;n.set({left:o,top:r,width:l-o,height:c-r}),"rectangle"==w.value&&d&&t.renderAll()}})),t.on("mouse:up",(function(){e=!1})))},a=function(){var e,n,o,r;1==d&&(console.log(d+"Square;"+w.value),t.isDrawingMode=!1,t.on("mouse:down",(function(a){e=!0;var i=t.getPointer(a.e);o=i.x,r=i.y,n=new m({strokeWidth:1,fill:O.value,stroke:O.value,left:o,top:r}),"square"==w.value&&d&&t.add(n)})),t.on("mouse:move",(function(a){if(e){var i,l=t.getPointer(a.e),c=l.x,u=l.y;i=Math.max(Math.abs(c-o),Math.abs(u-r))==Math.abs(c-o)?c-o:u-r,n.set({left:o,top:r,width:i,height:i}),"square"==w.value&&d&&t.renderAll()}})),t.on("mouse:up",(function(){e=!1})))},i=function(){var e,n,o,r;1==d&&(console.log(d+"Circle;"+w.value),t.isDrawingMode=!1,t.on("mouse:down",(function(a){e=!0;var i=t.getPointer(a.e);o=i.x,r=i.y,n=new y({strokeWidth:1,fill:O.value,stroke:O.value,left:o,top:r,rx:i.x-o,ry:i.y-r,angle:0}),"circle"==w.value&&d&&t.add(n)})),t.on("mouse:move",(function(a){if(e){var i,l,c,u=t.getPointer(a.e),s=u.x,f=u.y;i=o>s?"right":"left",l=r>f?"bottom":"top",c=Math.max(Math.abs(s-o),Math.abs(f-r))==Math.abs(s-o)?s-o:f-r,n.set({rx:Math.abs(c)/2,ry:Math.abs(c)/2,originX:i,originY:l}),"circle"==w.value&&d&&t.renderAll()}})),t.on("mouse:up",(function(){e=!1})))},l=function(){var e,n,o,r;1==d&&(console.log(d+"Ellipse;"+w.value),t.isDrawingMode=!1,t.on("mouse:down",(function(a){e=!0;var i=t.getPointer(a.e);o=i.x,r=i.y,n=new g({strokeWidth:1,fill:O.value,stroke:O.value,left:o,top:r,rx:i.x-o,ry:i.y-r,angle:0}),"ellipse"==w.value&&d&&t.add(n)})),t.on("mouse:move",(function(a){if(e){var i,l,c=t.getPointer(a.e),u=c.x,s=c.y;i=o>u?"right":"left",l=r>s?"bottom":"top",n.set({rx:Math.abs(u-o)/2,ry:Math.abs(s-r)/2,originX:i,originY:l}),"elipses"==w.value&&d&&t.renderAll()}})),t.on("mouse:up",(function(){e=!1})))},c=function(){var e,n;1==d&&(console.log(d+"Polygon"),t.isDrawingMode=!1,t.on("mouse:down",(function(o){e=!0;var r=t.getPointer(o.e),a=[r.x,r.y,r.x,r.y];n=new h(a,{strokeWidth:1,fill:O.value,stroke:O.value,originX:"center",originY:"center"}),"polygon"==w.value&&d&&t.add(n)})),t.on("mouse:move",(function(o){if(e){var r=t.getPointer(o.e);n.set({x2:r.x,y2:r.y}),"polygon"==w.value&&d&&t.renderAll()}})),t.on("mouse:up",(function(){t.selection=!1,setTimeout((function(){return t.selection=!0}),50),e=!1})))};u["fabric"].Object.prototype.transparentCorners=!1;var s=document.getElementById("drawing-mode"),f=document.getElementById("drawing-mode-options"),d=!0;s.onclick=function(){d=!d,console.log("drawingModeState:"+d+"Mode: "+w.value),1==d?(s.innerHTML="Exit drawing mode",f.style.display="block","scribbles"==w.value&&(t.isDrawingMode=!0,t.freeDrawingBrush.color=O.value)):(t.isDrawingMode=!1,s.innerHTML="Enter drawing mode",f.style.display="none")};var v=document.getElementById("clear-canvas");v.onclick=function(){t.clear()};var w=document.getElementById("drawing-mode-selector"),O=document.getElementById("drawing-color");O.onchange=function(){t.freeDrawingBrush.color=this.value};var j=null,x=document.getElementById("cut-btn"),k=document.getElementById("copy-btn"),M=document.getElementById("paste-btn");x.onclick=function(){t.getActiveObject().clone((function(e){j=e})),t.remove(t.getActiveObject())},k.onclick=function(){t.getActiveObject().clone((function(e){j=e}))},M.onclick=function(){j.clone((function(e){t.discardActiveObject(),e.set({left:0,top:0,evented:!0}),t.add(e),t.setActiveObject(e),t.requestRenderAll()}))},w.onclick=function(){"scribbles"==w.value?n():"line"==w.value?o():"rectangle"==w.value?r():"ellipse"==w.value?l():"square"==w.value?a():"circle"==w.value?i():"polygon"==w.value&&c()}}},O=w,j=(n("7a25"),n("2877")),x=Object(j["a"])(O,l,c,!1,null,"c7993d06",null),k=x.exports,M={name:"App",components:{Sketchpad:k}},_=M,P=(n("034f"),Object(j["a"])(_,a,i,!1,null,null,null)),E=P.exports;o["default"].use(r["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(E)}}).$mount("#app")},"7a25":function(e,t,n){"use strict";var o=n("e4c5"),r=n.n(o);r.a},"85ec":function(e,t,n){},e4c5:function(e,t,n){}});
//# sourceMappingURL=app.9707ffaf.js.map