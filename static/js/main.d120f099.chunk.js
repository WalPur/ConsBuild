(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(27),i=a.n(s),r=a(9),l=a(8),j=a(11),h=a.n(j),o=a(1);var u=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){h()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/"}).then((function(e){c(e.data)}))}),[]),Object(o.jsx)("div",{className:"App",children:a.map((function(e){return Object(o.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:e.name})}))})};a(62);var d=function(){return Object(o.jsxs)("div",{className:"NavBar",children:[Object(o.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/",fromDashBoard:!1},children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(o.jsxs)("div",{className:"NavBarElement",children:[Object(o.jsx)(l.b,{className:"NavBarElement OpenHidden",to:{pathname:"/categories",fromDashBoard:!1},children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(o.jsx)("div",{className:"HiddenBar",children:Object(o.jsx)(u,{})})]}),Object(o.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/about",fromDashBoard:!1},children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})},b=a(2);var m=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){h()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/"}).then((function(e){c(e.data)}))}),[]),Object(o.jsx)("div",{className:"App",children:a.map((function(e){return Object(o.jsx)(l.b,{className:"Category",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:e.name})}))})};var O=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(r.a)(a,2),s=c[0],i=c[1],l=Object(n.useState)([]),j=Object(r.a)(l,2),u=j[0],d=j[1],b=t.params.id;return Object(n.useEffect)((function(){h()({method:"GET",url:"http://consbuild.pythonanywhere.com/api/category/".concat(b)}).then((function(e){i(e.data),d(e.lost.data)}))}),[b]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("h3",{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f ",s.id]}),u.map((function(e){return Object(o.jsxs)("p",{children:[e.id,".",e.name]})}))]})},p=a(29),v=a(30),f=a(31),x=a(13),g=a(33),N=a(32),S=function(e){Object(g.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={inputS:0,inputF:0},n.handleChange=n.handleChange.bind(Object(x.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(f.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(p.a)({},n,a)),this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("\u042d\u0442\u0430\u0436\u0435\u0439: "+this.state.inputF+". \u041f\u043b\u043e\u0449\u0430\u0434\u044c: "+this.state.inputS),e.preventDefault()}},{key:"render",value:function(){return Object(o.jsxs)("form",{className:"Calc",onSubmit:this.handleSubmit,children:[Object(o.jsx)("div",{className:"Square",children:Object(o.jsxs)("label",{children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c m",Object(o.jsx)("sup",{children:"2"}),":",Object(o.jsx)("input",{type:"number",name:"inputS",value:this.state.value,onChange:this.handleChange})]})}),Object(o.jsx)("div",{className:"floors",children:Object(o.jsxs)("label",{children:["\u042d\u0442\u0430\u0436\u0438:",Object(o.jsxs)("select",{name:"inputF",value:this.state.value,onChange:this.handleChange,children:[Object(o.jsx)("option",{value:"1",children:"1"}),Object(o.jsx)("option",{value:"2",children:"2"}),Object(o.jsx)("option",{value:"3",children:"3"})]})]})})]})}}]),a}(c.a.Component);var C=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/category/:id",exact:!0,component:O}),Object(o.jsx)(b.a,{path:"/categories",exact:!0,component:m}),Object(o.jsx)(b.a,{path:"/",exact:!0,component:S})]})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),B()}},[[63,1,2]]]);
//# sourceMappingURL=main.d120f099.chunk.js.map