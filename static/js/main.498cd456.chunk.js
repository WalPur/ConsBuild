(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{38:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(27),i=a.n(s),r=a(8),l=a(2),o=(a(38),a.p+"static/media/\u043b\u043e\u0433\u043e.5cc3c79b.PNG"),j=a.p+"static/media/info.1c5625a1.PNG",u=a.p+"static/media/profile.a492c8b0.PNG",b=a.p+"static/media/fav.2a939451.PNG",h=a.p+"static/media/login.56ba090e.PNG",m=a(0);var d=function(){return Object(m.jsxs)("div",{className:"NavBar",children:[Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"LogoImg",src:o,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",title:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})}),Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/profile",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"NavIcon",src:u,alt:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",title:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/fav",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"NavIcon",src:b,alt:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435",title:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"})}),Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/login",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"NavIcon",src:h,alt:"\u041b\u043e\u0433\u0438\u043d",title:"\u0412\u0445\u043e\u0434"})}),Object(m.jsx)(r.b,{className:"NavBarElement",to:{pathname:"/about",fromDashBoard:!1},children:Object(m.jsx)("img",{className:"NavIcon",src:j,alt:"\u041e \u043d\u0430\u0441",title:"\u041e \u043d\u0430\u0441"})})]})},p=a(13),O=a(12),f=a.n(O);a(63);var x=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(m.jsxs)("div",{className:"Categories",children:[Object(m.jsx)("span",{className:"CategoriesTitle",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438:"}),a.map((function(e){return Object(m.jsx)(r.c,{className:"Category",to:{pathname:"".concat(e.id),fromDashboard:!1},children:e.name})}))]})},v=a(29),N=a(30),g=a(31),B=a(11),C=a(33),S=a(32),E=(a(64),function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(e){var c;return Object(N.a)(this,a),(c=t.call(this,e)).state={inputS:0,inputF:1,fireRedirect:!1},c.handleChange=c.handleChange.bind(Object(B.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(B.a)(c)),c}return Object(g.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,c=t.name;this.setState(Object(v.a)({},c,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({fireRedirect:!0})}},{key:"render",value:function(){var e=this.state.fireRedirect,t=(this.props.location.state||"/").from;return Object(m.jsxs)("form",{className:"Calc",onSubmit:this.handleSubmit,children:[Object(m.jsx)("div",{className:"Square",children:Object(m.jsxs)("label",{children:[Object(m.jsxs)("span",{children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c m",Object(m.jsx)("sup",{children:"2"}),":"]}),Object(m.jsx)("input",{type:"number",className:"HomeInput",name:"inputS",value:this.state.value,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"floors",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"\u042d\u0442\u0430\u0436\u0438:"}),Object(m.jsxs)("select",{name:"inputF",className:"HomeInput",value:this.state.value,onChange:this.handleChange,children:[Object(m.jsx)("option",{value:"1",children:"1"}),Object(m.jsx)("option",{value:"2",children:"2"}),Object(m.jsx)("option",{value:"3",children:"3"})]})]})}),Object(m.jsx)("input",{type:"submit",className:"submitButton",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),e&&Object(m.jsx)(l.a,{to:t||"build/"+this.state.inputS+"/"+this.state.inputF+"/"})]})}}]),a}(n.a.Component));a(65);var y=function(e){var t=Object(c.useState)([]),a=Object(p.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(e,"/")}).then((function(e){s(e.data.lots)}))}),[e]),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("ol",{children:n.map((function(e){return Object(m.jsxs)("li",{children:[e.id,".",e.name]})}))})})};var I=function(e){var t=e.match,a=t.params.floors,c=t.params.square,n=t.params.id;function s(){return n?y(n):null}return Object(m.jsxs)("div",{className:"Build",children:[Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsxs)("h2",{children:["\u0417\u0430\u043a\u0443\u043f\u043a\u0430 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0434\u043b\u044f ",a," \u044d\u0442\u0430\u0436\u043d\u043e\u0433\u043e \u0437\u0434\u0430\u043d\u0438\u044f \u0441 \u043f\u043b\u043e\u0449\u0430\u0434\u044c\u044e ",c,"\u043c",Object(m.jsx)("sup",{children:"2"})]}),Object(m.jsx)(s,{})]})]})};a(66);var D=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(d,{}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{path:"/build/:square/:floors",exact:!0,component:I}),Object(m.jsx)(l.b,{path:"/build/:square/:floors/:id/",exact:!0,component:I}),Object(m.jsx)(l.b,{path:"/",exact:!0,component:E})]})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),F()}},[[67,1,2]]]);
//# sourceMappingURL=main.498cd456.chunk.js.map