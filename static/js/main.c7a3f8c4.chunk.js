(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(27),i=a.n(s),r=a(9),j=a(8),l=a(11),o=a.n(l),h=a(1);var u=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/"}).then((function(e){c(e.data)}))}),[]),Object(h.jsx)("div",{className:"App",children:a.map((function(e){return Object(h.jsx)(j.b,{className:"NavBarElement",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:e.name})}))})};a(62);var b=function(){return Object(h.jsxs)("div",{className:"NavBar",children:[Object(h.jsx)(j.b,{className:"NavBarElement",to:{pathname:"/",fromDashBoard:!1},children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(h.jsxs)("div",{className:"NavBarElement",children:[Object(h.jsx)(j.b,{className:"NavBarElement OpenHidden",to:{pathname:"/categories",fromDashBoard:!1},children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(h.jsx)("div",{className:"HiddenBar",children:Object(h.jsx)(u,{})})]}),Object(h.jsx)(j.b,{className:"NavBarElement",to:{pathname:"/about",fromDashBoard:!1},children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})},d=a(2);var m=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/"}).then((function(e){c(e.data)}))}),[]),Object(h.jsx)("div",{className:"App",children:a.map((function(e){return Object(h.jsx)(j.b,{className:"Category",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:e.name})}))})};var O=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(r.a)(a,2),s=c[0],i=c[1],j=Object(n.useState)([]),l=Object(r.a)(j,2),u=l[0],b=l[1],d=t.params.id;return Object(n.useEffect)((function(){o()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/".concat(d)}).then((function(e){i(e.data),b(e.lost.data)}))}),[d]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h3",{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f ",s.id]}),u.map((function(e){return Object(h.jsxs)("p",{children:[e.id,".",e.name]})}))]})},p=a(29),v=a(30),f=a(31),x=a(13),g=a(33),N=a(32),S=function(e){Object(g.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={inputS:0,inputF:1},n.handleChange=n.handleChange.bind(Object(x.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(f.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(p.a)({},n,a))}},{key:"handleSubmit",value:function(e){alert("\u042d\u0442\u0430\u0436\u0435\u0439: "+this.state.inputF+". \u041f\u043b\u043e\u0449\u0430\u0434\u044c: "+this.state.inputS),e.preventDefault()}},{key:"render",value:function(){return Object(h.jsxs)("form",{className:"Calc",onSubmit:this.handleSubmit,children:[Object(h.jsx)("div",{className:"Square",children:Object(h.jsxs)("label",{children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c m",Object(h.jsx)("sup",{children:"2"}),":",Object(h.jsx)("input",{type:"number",name:"inputS",value:this.state.value,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"floors",children:Object(h.jsxs)("label",{children:["\u042d\u0442\u0430\u0436\u0438:",Object(h.jsxs)("select",{name:"inputF",value:this.state.value,onChange:this.handleChange,children:[Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"})]})]})}),Object(h.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}}]),a}(c.a.Component);var C=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/category/:id",exact:!0,component:O}),Object(h.jsx)(d.a,{path:"/categories",exact:!0,component:m}),Object(h.jsx)(d.a,{path:"/",exact:!0,component:S})]})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),B()}},[[63,1,2]]]);
//# sourceMappingURL=main.c7a3f8c4.chunk.js.map