(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{56:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(26),s=a.n(r),i=a(9),j=a.n(i),o=a(10),d=a(8),u=a(1);var h=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(u.jsx)("div",{className:"App",children:a.map((function(e){return Object(u.jsx)(d.a,{className:"NavBarElement",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:e.name})}))})};var l=function(){return Object(u.jsxs)("div",{className:"NavBar",children:[Object(u.jsx)(d.a,{className:"NavBarElement",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(u.jsxs)("div",{className:"NavBarElement",children:[Object(u.jsx)(d.a,{className:"NavBarElement",href:"/categories",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(u.jsx)("div",{className:"HiddenBar",children:Object(u.jsx)(h,{})})]}),Object(u.jsx)(d.a,{className:"NavBarElement",href:"0",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})},b=a(2);var m=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(u.jsx)("div",{className:"App",children:a.map((function(e){return Object(u.jsx)(d.a,{className:"Category",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}))})};var O=function(e){var t=e.match,a=Object(c.useState)([]),n=Object(o.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)([]),d=Object(o.a)(i,2),h=(d[0],d[1]),l=t.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/".concat(l)}).then((function(e){s(e.data),h(e.lost.data)}))}),[l]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("p",{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f ",r.id]})})};var p=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{}),Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{path:"/category/:id",exact:!0,component:O}),Object(u.jsx)(b.a,{path:"/categories",exact:!0,component:m})]})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),f()}},[[56,1,2]]]);
//# sourceMappingURL=main.cef38213.chunk.js.map