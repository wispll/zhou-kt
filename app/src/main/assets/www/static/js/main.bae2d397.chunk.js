(this.webpackJsonpzhou=this.webpackJsonpzhou||[]).push([[0],{158:function(e,n,t){"use strict";t.r(n);var c,a=t(0),o=t.n(a),r=t(21),i=t.n(r),u=t(119),s=t(35),l=t(51),j=t(162),b=t(26),d=t.n(b),f=t(36),h=t(20);function O(e){if(void 0===c){var n=window.indexedDB.open("work",1);n.onupgradeneeded=function(e){var n;(c=e.target.result).objectStoreNames.contains("zhou")||((n=c.createObjectStore("zhou",{keyPath:"id",autoIncrement:!0})).createIndex("day",["day","month","year"],{unique:!1}),n.createIndex("month",["month","year"],{unique:!1}))},n.onerror=function(){console.log("\u6570\u636e\u5e93\u6253\u5f00\u62a5\u9519")},n.onsuccess=function(){c=n.result,console.log("\u6570\u636e\u5e93\u6253\u5f00\u6210\u529f"),e()}}else e()}function m(e,n){var t,a=n.day,o=n.month,r=n.year,i=c.transaction(["zhou"]).objectStore("zhou");if(a&&o&&r)t=i.index("day").getAll([a,o,r]);else{if(!o||!r)return;t=i.index("month").getAll([o,r])}t.onerror=function(){console.log("\u8bfb\u53d6\u5931\u8d25")},t.onsuccess=function(){t.result?e(t.result):console.log("\u672a\u83b7\u5f97\u6570\u636e\u8bb0\u5f55")}}var p,x,v=t(7),g=f.a.div(p||(p=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 5%;\n"]))),y=Object(f.a)(l.a)(x||(x=Object(s.a)(["\n  width: 4em;\n  height: 4em;\n"])));function C(){var e=Object(h.f)(),n=Object(a.useRef)({year:d()().year(),month:d()().month(),day:d()().date()}),t=Object(a.useCallback)((function(e){n.current={year:e.year(),month:e.month(),day:e.date()}}),[]),c=Object(a.useCallback)((function(){e.push({pathname:"/detail",search:"?date=".concat(n.current.month,"/").concat(n.current.day,"/").concat(n.current.year),state:{date:n.current}})}),[]),o=Object(a.useCallback)((function(){var e=n.current,t=(e.day,Object(u.a)(e,["day"]));O((function(){m((function(e){window.androidAssistant.save(function(e){if(void 0===e||0==e.length)return"";var t={};e.forEach((function(e){var n=e.name+e.batch;t[n]?t[n].amount=+t[n].amount+ +e.amount:t[n]=e}));var c=null,a="";for(var o in a=(a=a.concat(+n.current.month+1,"_",n.current.year,"##")).concat("\u5de5\u5e8f,\u8d27\u53f7,\u5355\u4ef7,\u6570\u91cf,\u603b\u4ef7").concat("\r\n"),t){var r=t[o],i=r.amount*r.price;c+=i,a=a.concat("".concat(r.name,",").concat(r.batch,",").concat(r.price,",").concat(r.amount,",").concat(i)).concat("\r\n")}return a=a.concat("\u603b\u4ef7,,,,".concat(c))}(e))}),t)}))}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(j.a,{defaultValue:d()(),onChange:t,fullscreen:!1}),Object(v.jsxs)(g,{children:[Object(v.jsx)(y,{type:"primary",shape:"circle",onClick:c,children:"\u8bb0\u5f55"}),Object(v.jsx)(y,{type:"primary",shape:"circle",onClick:o,children:"\u5bfc\u51fa"})]})]})}var k,w,z,S=t(50),D=t(49),F=t(165),E=t(164),I=t(163),A=f.a.span(k||(k=Object(s.a)(["\n  margin-top: 0.5em;\n  color: red;\n"]))),R={name:"\u5de5\u5e8f",batch:"\u8d27\u53f7",price:"\u5355\u4ef7",amount:"\u6570\u91cf"},B={name:"",batch:"",price:"",amount:""};function P(e){var n=Object(a.useState)(""),t=Object(D.a)(n,2),c=t[0],o=t[1],r=Object(a.useState)(Object(S.a)({},B)),i=Object(D.a)(r,2),u=i[0],s=i[1];Object(a.useEffect)((function(){s(e.item&&0!==Object.keys(e.item).length?e.item:Object(S.a)({},B))}),[e.item]);var l=function(e){o("");var n=e.target.getAttribute("id"),t=e.target.value;s((function(e){return e[n]=t,Object(S.a)({},e)}))};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(E.a,{title:"\u7269\u6599\u8ba1\u4ef7",visible:e.visible,onOk:function(){for(var n in u)if(""==u[n])return void o("".concat(R[n],"\u4e0d\u80fd\u4e3a\u7a7a"));u.id?e.updateData(u):e.addData(u),e.onClose()},onCancel:e.onClose,children:[Object(v.jsx)(I.a,{id:"name",value:u.name,placeholder:R.name,onChange:l}),Object(v.jsx)(I.a,{id:"batch",value:u.batch,placeholder:R.batch,onChange:l}),Object(v.jsx)(I.a,{type:"number",id:"price",value:u.price,placeholder:R.price,onChange:l}),Object(v.jsx)(I.a,{type:"number",id:"amount",value:u.amount,placeholder:R.amount,onChange:l}),Object(v.jsx)(A,{children:c})]})})}var q=f.a.div(w||(w=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  margin: 0.5em;\n  padding: 0.5em;\n  border: 1px solid #330000;\n"]))),J=f.a.div(z||(z=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"])));function L(e,n){var t=e.source,c=e.onDelete,o=e.onEdit,r=Object(a.useState)(),i=Object(D.a)(r,2),u=i[0],s=i[1];return Object(v.jsx)("div",{children:t.map((function(e,t){return Object(v.jsxs)("div",{children:[Object(v.jsxs)(q,{ref:n,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:e.name}),Object(v.jsx)("div",{children:e.batch})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:e.price+"\u5143/\u4ef6"}),Object(v.jsx)("div",{children:e.amount+"\u4ef6"})]}),Object(v.jsxs)(J,{children:[(e.price*e.amount).toFixed(2),"\u5143"]})]}),Object(v.jsx)(l.a,{type:"primary",onClick:function(){s(u===t?null:t)},children:"\u7f16\u8f91"}),Object(v.jsx)(l.a,{type:"link",onClick:function(){c(e.id)},style:{display:u===t?"inline":"none"},children:"\u5220\u9664"}),Object(v.jsx)(l.a,{type:"link",onClick:function(){o(t)},style:{display:u===t?"inline":"none"},children:"\u4fee\u6539"})]},t)}))})}var T,V,M=Object(a.forwardRef)(L),N=Object(f.a)(F.a)(T||(T=Object(s.a)(["\n  font-size: 4em;\n"]))),_=Object(f.a)(l.a)(V||(V=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  width: 80px;\n  height: 80px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 5%;\n"])));function G(){var e=Object(a.useState)(!1),n=Object(D.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)([]),i=Object(D.a)(r,2),u=i[0],s=i[1],l=Object(a.createRef)(),j=Object(h.g)(),b=Object(a.useRef)(),d=Object(a.useCallback)((function(){o(!0)}),[]),f=Object(a.useCallback)((function(){b.current=void 0,o(!1)}),[]),p=Object(a.useCallback)((function(e){O((function(){!function(e,n){var t=c.transaction(["zhou"],"readwrite").objectStore("zhou").add(n);t.onerror=function(){console.log("\u6570\u636e\u5199\u5165\u5931\u8d25")},t.onsuccess=function(){console.log("\u6570\u636e\u5199\u5165\u6210\u529f"),e()}}((function(){C()}),Object(S.a)(Object(S.a)({},e),j.state.date))}))}),[]),x=Object(a.useCallback)((function(e){O((function(){!function(e,n){var t=c.transaction(["zhou"],"readwrite").objectStore("zhou").delete(n);t.onsuccess=function(){console.log("\u6570\u636e\u5220\u9664\u6210\u529f"),e()},t.onerror=function(){console.log("\u6570\u636e\u5220\u9664\u5931\u8d25")}}((function(){C()}),e)}))}),[]),g=Object(a.useCallback)((function(e){O((function(){!function(e,n){var t=c.transaction(["zhou"],"readwrite").objectStore("zhou").put(n);t.onsuccess=function(){e(t.result),console.log("\u6570\u636e\u66f4\u65b0\u6210\u529f")},t.onerror=function(){console.log("\u6570\u636e\u66f4\u65b0\u5931\u8d25")}}((function(){C()}),e)}))}),[]),y=Object(a.useCallback)((function(e){b.current=u[e],d()}));Object(a.useEffect)((function(){O((function(){C()}))}),[]),Object(a.useEffect)((function(){l.current&&l.current.scrollIntoView({behavior:"smooth"})}),[u]);var C=function(){m((function(e){s(e)}),j.state.date)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(M,{source:u,onDelete:x,onEdit:y,ref:function(e){l.current=e}}),Object(v.jsx)(P,{visible:t,onClose:f,addData:p,updateData:g,item:Object(S.a)({},b.current)}),Object(v.jsx)(_,{type:"primary",shape:"circle",onClick:d,icon:Object(v.jsx)(N,{})})]})}var H=t(72),K=function(){return Object(v.jsx)(H.a,{children:Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{exact:!0,path:"/",component:C}),Object(v.jsx)(h.a,{exact:!0,path:"/detail",component:G})]})})},Q=t(116),U=(t(156),t(18)),W=(t(157),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,166)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))});i.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(U.a,{locale:Q.a,children:Object(v.jsx)(K,{})})}),document.getElementById("root")),W()}},[[158,1,2]]]);
//# sourceMappingURL=main.bae2d397.chunk.js.map