(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{38:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(27),i=a.n(s),r=a(8),l=a(2),j=(a(38),a.p+"static/media/\u043b\u043e\u0433\u043e.5cc3c79b.PNG"),o=a.p+"static/media/info.1c5625a1.PNG",b=a.p+"static/media/profile.a492c8b0.PNG",h=a.p+"static/media/fav.2a939451.PNG",u=a.p+"static/media/login.56ba090e.PNG",m=a(1);var d=function(){return Object(m.jsxs)("div",{className:"NavBar",children:[Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"LogoImg",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",title:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})}),Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/profile",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"NavIcon",src:b,alt:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",title:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/fav",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"NavIcon",src:h,alt:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435",title:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"})}),Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/login",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"NavIcon",src:u,alt:"\u041b\u043e\u0433\u0438\u043d",title:"\u0412\u0445\u043e\u0434"})}),Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/about",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"NavIcon",src:o,alt:"\u041e \u043d\u0430\u0441",title:"\u041e \u043d\u0430\u0441"})})]})},p=a(12),O=a(13),x=a.n(O);var v=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(m.jsx)("div",{className:"App",children:a.map((function(e){return Object(m.jsx)(r.b,{className:"Category",to:{pathname:"/categories/".concat(e.id),fromDashboard:!1},children:e.name})}))})};var f=function(e){var t=e.match,a=Object(c.useState)([]),n=Object(p.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)([]),l=Object(p.a)(r,2),j=l[0],o=l[1],b=t.params.id;return Object(c.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(b)}).then((function(e){i(e.data),o(e.lost.data)}))}),[b]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h3",{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f ",s.id]}),j.map((function(e){return Object(m.jsxs)("p",{children:[e.id,".",e.name]})}))]})},N=a(29),g=a(30),S=a(31),B=a(11),C=a(33),y=a(32),E=(a(63),function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(e){var c;return Object(g.a)(this,a),(c=t.call(this,e)).state={inputS:0,inputF:1},c.handleChange=c.handleChange.bind(Object(B.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(B.a)(c)),c}return Object(S.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,c=t.name;this.setState(Object(N.a)({},c,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();this.state.inputS,this.state.input;l.a}},{key:"render",value:function(){return Object(m.jsxs)("form",{className:"Calc",onSubmit:this.handleSubmit,children:[Object(m.jsx)("div",{className:"Square",children:Object(m.jsxs)("label",{children:[Object(m.jsxs)("span",{children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c m",Object(m.jsx)("sup",{children:"2"}),":"]}),Object(m.jsx)("input",{type:"number",className:"HomeInput",name:"inputS",value:this.state.value,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"floors",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"\u042d\u0442\u0430\u0436\u0438:"}),Object(m.jsxs)("select",{name:"inputF",className:"HomeInput",value:this.state.value,onChange:this.handleChange,children:[Object(m.jsx)("option",{value:"1",children:"1"}),Object(m.jsx)("option",{value:"2",children:"2"}),Object(m.jsx)("option",{value:"3",children:"3"})]})]})}),Object(m.jsx)("input",{type:"submit",className:"submitButton",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}}]),a}(n.a.Component));var I=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:"Categories",children:Object(m.jsx)(v,{})})})};a(64);var D=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(d,{}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{path:"/category/:id",exact:!0,component:f}),Object(m.jsx)(l.b,{path:"/categories",exact:!0,component:v}),Object(m.jsx)(l.b,{path:"/build/:square/:floors",exact:!0,component:I}),Object(m.jsx)(l.b,{path:"/",exact:!0,component:E})]})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),G()}},[[65,1,2]]]);
//# sourceMappingURL=main.d506b19e.chunk.js.map