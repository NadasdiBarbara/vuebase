(function(t){function e(e){for(var o,l,u=e[0],a=e[1],d=e[2],s=0,p=[];s<u.length;s++)l=u[s],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,u=1;u<n.length;u++){var a=n[u];0!==i[a]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},i={app:0},r=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vuebase/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var c=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Todo",{attrs:{todos:t.todos},on:{"todo-item-changed":t.Changed}})],1)},r=[],l=(n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.todos,(function(e){return n("Todoitem",{key:e.title,attrs:{todo:e},on:{"todo-item-changed":t.Changed}})})),1)])}),u=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t.edit?t._e():n("div",[t._v(" "+t._s(t.title)+" "),n("button",{on:{click:t.Edit}},[t._v("Edit")])]),t.edit?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("button",{on:{click:t.Save}},[t._v("Save")])]):t._e()])},d=[],c={props:["todo"],data:function(){return{title:this.todo.title,edit:!1}},methods:{Edit:function(){this.edit=!0},Save:function(){this.edit=!1,this.$emit("todo-item-changed",{original:this.todo,new:{title:this.title}})}}},s=c,p=n("2877"),f=Object(p["a"])(s,a,d,!1,null,null,null),h=f.exports,v={props:["todos"],components:{Todoitem:h},methods:{Changed:function(t){this.$emit("todo-item-changed",t)}}},m=v,b=Object(p["a"])(m,l,u,!1,null,null,null),g=b.exports,y={name:"App",components:{Todo:g},data:function(){return{todos:[{title:"Első teendő"},{title:"Második teendő"},{title:"Harmadik teendő"}]}},methods:{Changed:function(t){this.todos.map((function(e){return e.title!=t.original.title||(e.title=t.new.title),e}))}}},_=y,w=(n("034f"),Object(p["a"])(_,i,r,!1,null,null,null)),O=w.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.82147426.js.map