(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[5],{32:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));var a="https://test.megapolis-it.ru/api",r={list:"".concat(a,"/list"),add:"".concat(a,"/list"),remove:function(e){return"".concat(a,"/list/").concat(e)},edit:function(e){return"".concat(a,"/list/").concat(e)}},c={getList:function(){return fetch(r.list)},add:function(e){return fetch(r.add,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e})})},remove:function(e){return fetch(r.remove(e),{method:"DELETE"})},edit:function(e){return fetch(r.edit(e.id),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.title})})}};function i(e){e.success||(console.error(e.error),console.log("\u041d\u043e \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442 \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442 \u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0442\u0430\u043a\u043e\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u0442.\u043a. \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 :)"))}function o(e){alert("".concat("\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.","\r\n").concat(function(){switch(e){case"list":return"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u0437\u0434\u043d\u0435\u0435";case"add":return"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 \u043f\u043e\u0437\u0434\u043d\u0435\u0435";case"edit":return"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 \u043f\u043e\u0437\u0434\u043d\u0435\u0435";case"remove":return"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 \u043f\u043e\u0437\u0434\u043d\u0435\u0435"}}()))}t.a=c},33:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(34);t.a=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__title"},r.a.createElement("h1",null,e.title)),r.a.createElement("div",{className:"header__action"},e.children))}},34:function(e,t,n){},35:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(36);t.a=function(){return r.a.createElement("div",{className:"footer"},'\xa9 2019 \u0410\u041e "\u041c\u0435\u0433\u0430\u043f\u043e\u043b\u0438\u0441"')}},36:function(e,t,n){},40:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=function(e){var t=e.error,n=void 0===t?"":t;return r.a.createElement("div",{className:"form-error"},n)};t.a=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-label",htmlFor:"title"},"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement("input",{className:"form-input",name:"title",type:"text",value:e.value,onChange:e.onChange}),r.a.createElement(c,{error:e.error})),r.a.createElement("div",{className:"form-group"},e.btnSubmit||r.a.createElement("button",{type:"submit",className:"btn btn_primary btn_alt-border btn_alt-color"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))}},50:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(0),c=n.n(r),i=n(5);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var u=n(11),l=n(40),m=n(32),f=function(e){var t=e.task,n=e.setReturnToList,r=c.a.useState(t.title),i=Object(a.a)(r,2),f=i[0],b=i[1],d=c.a.useState(!1),p=Object(a.a)(d,2),v=p[0],h=p[1];return c.a.createElement(l.a,{onSubmit:function(e){e.preventDefault(),m.a.edit(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{title:f})).then((function(e){return e.json()})).then((function(e){e.success&&n(!0)})).catch((function(){Object(m.b)("edit")}))},onChange:function(e){var t=e.target.value;h(f!==t),b(t)},value:f,btnSubmit:v?c.a.createElement("button",{type:"submit",className:"btn btn_primary btn_alt-border btn_alt-color"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"):c.a.createElement(u.b,{to:"/items"},c.a.createElement("button",{className:"btn btn_primary btn_alt-border btn_alt-color"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0441\u043f\u0438\u0441\u043a\u0443"))})},b=n(33),d=n(37),p=n(38),v=n(35),h=n(12);t.default=function(e){var t=+e.match.params.id,n=c.a.useState({id:-1,title:""}),r=Object(a.a)(n,2),o=r[0],s=r[1],u=c.a.useState(!0),l=Object(a.a)(u,2),E=l[0],O=l[1],j=c.a.useState(!1),y=Object(a.a)(j,2),g=y[0],N=y[1];return c.a.useEffect((function(){m.a.getList().then((function(e){return e.json()})).then((function(e){e.success&&(s(e.data.find((function(e){return e.id===t}))),O(!1))})).catch((function(){Object(m.b)("list")}))}),[]),g?c.a.createElement(i.a,{to:"/items"}):E?c.a.createElement("div",{className:"wrapper"},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(h.a,{center:!0})},c.a.createElement(b.a,{title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u2116"}),c.a.createElement("div",{className:"main"}))):c.a.createElement("div",{className:"wrapper"},c.a.createElement(b.a,{title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u2116".concat(o.id)},c.a.createElement("button",{className:"btn btn_success btn_alt-color btn_wide",onClick:function(){m.a.remove(o.id).then((function(e){return e.json()})).then((function(e){e.success&&N(!0),Object(m.c)(e)})).catch((function(){Object(m.b)("remove")}))}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \xa0",c.a.createElement(d.a,{icon:p.c,className:"fa-icon"}))),c.a.createElement("div",{className:"main"},c.a.createElement(f,{task:o,setReturnToList:N})),c.a.createElement(v.a,null))}}}]);
//# sourceMappingURL=5.b2bed8e2.chunk.js.map