(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n.n(r),c=n(8),u=n(4),i=n(2),s=n(0),o=function(e){var t=e.text;return Object(s.jsx)("h1",{children:t})},l=function(e){var t=e.message;return null===t?null:Object(s.jsxs)("div",{className:"error",children:[t," has already been deleted"]})},j=function(e){var t=e.newFilter,n=e.setFilter;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:"Filter shown with:"}),Object(s.jsx)("input",{placeholder:"insert filter here..",onChange:function(e){n(e.target.value)},value:t})]})},b=function(e){var t=e.message;return null===t?null:Object(s.jsx)("div",{className:"notification",children:t})},d=function(e){var t=e.handleSubmit,n=e.setNewName,r=e.newName,a=e.newPhone,c=e.setNewPhone;return Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsxs)("div",{children:["name:",Object(s.jsx)("input",{placeholder:"insert name...",onChange:function(e){return n(e.target.value)},value:r})]}),Object(s.jsxs)("div",{children:["phone:",Object(s.jsx)("input",{type:"tel",placeholder:"insert phone number...",onChange:function(e){return c(e.target.value)},value:a})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},f=function(e){var t=e.persons,n=e.handleDelete;return Object(s.jsxs)(s.Fragment,{children:[t.map((function(e){return Object(s.jsxs)("li",{children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))," "]})},h=n(3),p=n.n(h),m=n(6),O=n(5),v=n.n(O),x="/api/persons",w={getAll:function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.a.get(x),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.a.post(x,t),e.prev=1,e.next=4,n;case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",console.log(e.t0.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),edit:function(){var e=Object(m.a)(p.a.mark((function e(t,n){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v.a.put("".concat(x,"/").concat(t),n),e.prev=1,e.next=4,r;case 4:return a=e.sent,e.abrupt("return",a.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",console.log("error"));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),del:function(e){return v.a.delete("".concat(x,"/").concat(e)).then()}},g=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(""),h=Object(u.a)(a,2),p=h[0],m=h[1],O=Object(i.useState)(""),v=Object(u.a)(O,2),x=v[0],g=v[1],y=Object(i.useState)(""),N=Object(u.a)(y,2),S=N[0],F=N[1],k=Object(i.useState)(null),C=Object(u.a)(k,2),P=C[0],D=C[1],T=Object(i.useState)(null),A=Object(u.a)(T,2),B=A[0],E=A[1];Object(i.useEffect)((function(){w.getAll().then((function(e){return r(e)}))}),[]);var J=n.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{text:"Filter"}),Object(s.jsx)(j,{newFilter:S,setFilter:F}),Object(s.jsx)(o,{text:"Phone Book"}),Object(s.jsx)(d,{handleSubmit:function(e){if(0===n.length){var t={name:p,number:x};return w.create(t).then((function(e){r(n.concat(e))}))}e.preventDefault();var a=n.filter((function(e){return e.name===p}));if(a.length>=1){if(a[0].number!==x)if(window.confirm("".concat(p," is already in database. Update phone number?"))){var u=Object(c.a)(Object(c.a)({},a[0]),{},{number:x});return w.edit(a[0].id,u).then((function(e){var t=n.map((function(t){return t.id===a[0].id?e:t}));return r(t)}))}if(a[0].number===x)return alert("".concat(p," already in database"))}var i={name:p,number:x};w.create(i).then((function(e){r(n.concat(e)),D("".concat(p," added successfully")),setTimeout((function(){D(null)}),5e3)}))},newName:p,setNewName:m,newPhone:x,s:!0,setNewPhone:g}),Object(s.jsx)(o,{text:"Numbers"}),Object(s.jsx)(f,{persons:J,handleDelete:function(e){w.del(e).then((function(){D("deleted successfully"),setTimeout((function(){D(null)}),5e3),r(n.filter((function(t){return t.id!==e})))})).catch((function(t){console.log("this ran");var a=n.filter((function(t){return t.id===e}));E("".concat(a[0].name)),setTimeout((function(){E(null)}),5e3),r(n.filter((function(t){return t.id!==e})))}))}}),Object(s.jsx)(b,{message:P}),Object(s.jsx)(l,{message:B})]})};n(42);a.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f2b8d8fc.chunk.js.map