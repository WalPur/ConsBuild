(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),s=a.n(r),i=a(4),j=a.n(i),l=a(7),d=a(5),o=a(1);var h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){c(e.data)}))}),[]),Object(o.jsx)("div",{className:"App",children:a.map((function(e){return Object(o.jsx)(d.a,{className:"NavBarElement",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:e.name})}))})};var u=function(){return Object(o.jsxs)("div",{className:"NavBar",children:[Object(o.jsx)("a",{className:"NavBarElement",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(o.jsxs)("div",{className:"NavBarElement",children:[Object(o.jsx)("a",{className:"NavBarElement",href:"/categories",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(o.jsx)("div",{className:"HiddenBar",children:Object(o.jsx)(h,{})})]}),Object(o.jsx)("a",{className:"NavBarElement",href:"0",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})};var m=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(u,{})})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),b()}},[[51,1,2]]]);
//# sourceMappingURL=main.e8e4b5ea.chunk.js.map