(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),o=n.n(l),r=n(1),i=(n(9),function(e){var t="todo-text";return t+=e.item.complete?" complete":"",c.a.createElement("div",{className:e.item.last?"last":null},c.a.createElement("input",{type:"checkbox",checked:e.item.complete,onChange:function(){return e.handleChange(e.item.id)},id:e.item.id}),c.a.createElement("div",{className:"text"},c.a.createElement("label",{className:t,htmlFor:e.item.id},e.item.text)))}),u=(n(10),function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),l=n[0],o=n[1];return c.a.createElement("input",{type:e.type,placeholder:e.placeholder,value:l,onChange:function(e){o(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&o(""),e.eventHandler(t)}})}),m=(n(11),function(e){return c.a.createElement("button",{onClick:function(){return e.handleClick()}},e.text)}),s=JSON.parse(window.localStorage.getItem("todos")),d=[];null!=s&&(d=s);var f=function(){var e=Object(a.useState)(d),t=Object(r.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(),s=Object(r.a)(o,2),f=s[0],p=s[1];function h(e){l((function(t){return t.map((function(t){return t.id===e&&(t.complete=!t.complete),t}))}))}var b=Object(a.useCallback)((function(){var e=JSON.stringify(n);window.localStorage.setItem("todos",e),p(n.map((function(e){return e===n[n.length-1]?e.last=!0:e.last=!1,c.a.createElement(i,{key:e.id,item:e,handleChange:h})}))),0===n.length&&p(c.a.createElement("p",{className:"todos-empty"},"To do list empty, add some items"))}),[p,n]);return Object(a.useEffect)((function(){b()}),[b]),c.a.createElement("div",null,c.a.createElement("div",{className:"todo-container"},f),c.a.createElement("div",{className:"input-container"},c.a.createElement(u,{type:"text",placeholder:"Add item to list...",eventHandler:function(e){var t=document.querySelector(".input-container > input");if("Enter"===e.key){var n={id:"_"+Math.random().toString(36).substr(2,9),text:t.value,complete:!1};l((function(e){return e.push(n),e})),b()}else/[.]/.test(e.key)&&(t.scrollLeft=t.scrollWidth)}})),c.a.createElement("div",{className:"button-container"},c.a.createElement(m,{text:"Clean",handleClick:function(){l((function(e){return e.filter((function(e){return!e.complete}))})),document.querySelector(".button-container > button").blur()}}),c.a.createElement(m,{text:"Clear all",handleClick:function(){l([]),document.querySelectorAll(".button-container > button")[1].blur()}})))};n(12);o.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.1db4a4b8.chunk.js.map