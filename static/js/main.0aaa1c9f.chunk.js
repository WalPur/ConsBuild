(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(26),s=a.n(r),i=a(9),o=a.n(i),j=a(10),d=a(8),h=a(1);var b=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(h.jsx)("div",{className:"App",children:a.map((function(e){return Object(h.jsx)(d.b,{className:"NavBarElement",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:e.name})}))})};a(56);var u=function(){return Object(h.jsxs)("div",{className:"NavBar",children:[Object(h.jsx)(d.b,{className:"NavBarElement",to:{pathname:"/",fromDashBoard:!1},children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(h.jsxs)("div",{className:"NavBarElement",children:[Object(h.jsx)(d.b,{className:"NavBarElement OpenHidden",to:{pathname:"/categories",fromDashBoard:!1},children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(h.jsx)("div",{className:"HiddenBar",children:Object(h.jsx)(b,{})})]}),Object(h.jsx)(d.b,{className:"NavBarElement",to:{pathname:"/about",fromDashBoard:!1},children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})},m=a(2);var l=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(h.jsx)("div",{className:"App",children:a.map((function(e){return Object(h.jsx)(d.b,{className:"Category",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:e.name})}))})};var p=function(e){var t=e.match,a=Object(c.useState)([]),n=Object(j.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)([]),d=Object(j.a)(i,2),b=d[0],u=d[1],m=t.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/".concat(m)}).then((function(e){s(e.data),u(e.lost.data)}))}),[m]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h3",{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f ",r.id]}),b.map((function(e){return Object(h.jsxs)("p",{children:[e.id,".",e.name]})}))]})};var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(u,{}),Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/category/:id",exact:!0,component:p}),Object(h.jsx)(m.a,{path:"/categories",exact:!0,component:l})]})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),f()}},[[57,1,2]]]);
//# sourceMappingURL=main.0aaa1c9f.chunk.js.map