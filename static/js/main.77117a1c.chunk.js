(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{38:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(27),i=a.n(n),l=a(5),r=a(2),j=(a(38),a.p+"static/media/\u043b\u043e\u0433\u043e.5cc3c79b.PNG"),o=a.p+"static/media/info.1c5625a1.PNG",b=a.p+"static/media/profile.a492c8b0.PNG",u=a.p+"static/media/fav.2a939451.PNG",d=a.p+"static/media/login.56ba090e.PNG",h=a(0);var m=function(){return Object(h.jsxs)("div",{className:"NavBar",children:[Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"LogoImg",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",title:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})}),Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/profile",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"NavIcon",src:b,alt:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",title:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/fav",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"NavIcon",src:u,alt:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435",title:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"})}),Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/login",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"NavIcon",src:d,alt:"\u041b\u043e\u0433\u0438\u043d",title:"\u0412\u0445\u043e\u0434"})}),Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/about",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"NavIcon",src:o,alt:"\u041e \u043d\u0430\u0441",title:"\u041e \u043d\u0430\u0441"})})]})},p=a(13),O=a(12),x=a.n(O);a(63);var v=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){s(e.data)}))}),[]),Object(h.jsxs)("div",{className:"Categories",children:[Object(h.jsx)("span",{className:"CategoriesTitle",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438:"}),Object(h.jsx)("ol",{children:a.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{className:"Category",activeClassName:"CategoryA",to:{pathname:"".concat(e.id),fromDashboard:!1},children:e.name})})}))})]})},f=a(29),N=a(30),g=a(31),B=a(11),C=a(33),S=a(32),y=(a(64),function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(e){var c;return Object(N.a)(this,a),(c=t.call(this,e)).state={inputS:0,inputF:1,fireRedirect:!1},c.handleChange=c.handleChange.bind(Object(B.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(B.a)(c)),c}return Object(g.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,c=t.name;this.setState(Object(f.a)({},c,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({fireRedirect:!0})}},{key:"render",value:function(){var e=this.state.fireRedirect,t=(this.props.location.state||"/").from;return Object(h.jsxs)("form",{className:"Calc",onSubmit:this.handleSubmit,children:[Object(h.jsx)("div",{className:"Square",children:Object(h.jsxs)("label",{children:[Object(h.jsxs)("span",{children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c m",Object(h.jsx)("sup",{children:"2"}),":"]}),Object(h.jsx)("input",{type:"number",className:"HomeInput",name:"inputS",value:this.state.value,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"floors",children:Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"\u042d\u0442\u0430\u0436\u0438:"}),Object(h.jsxs)("select",{name:"inputF",className:"HomeInput",value:this.state.value,onChange:this.handleChange,children:[Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"})]})]})}),Object(h.jsx)("input",{type:"submit",className:"submitButton",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),e&&Object(h.jsx)(r.a,{to:t||"build/"+this.state.inputS+"/"+this.state.inputF+"/"})]})}}]),a}(s.a.Component));a(65),a(66);var E=function(e){var t=Object(c.useState)([]),a=Object(p.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(e,"/")}).then((function(e){n(e.data.lots)}))}),[e]),Object(h.jsx)("div",{className:"App",children:s.map((function(e){return Object(h.jsxs)("div",{className:"lot",children:[Object(h.jsxs)("div",{className:"desc",children:[Object(h.jsx)(l.b,{className:"lotTitle",children:e.name}),Object(h.jsxs)(l.b,{className:"shopTitle",children:["\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446: ",e.shop]}),Object(h.jsxs)("div",{className:"lotDesc",children:["\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: ",e.material,". \u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: ",e.purpose,"."]})]}),Object(h.jsxs)("div",{className:"variants",children:[Object(h.jsx)("input",{type:"button",className:"buyButton addButton"}),Object(h.jsx)("input",{type:"button",className:"favButton addButton"})]})]})}))})};var D=function(e){var t=e.match,a=t.params.floors,c=t.params.square,s=t.params.id;function n(){return s?E(s):null}return Object(h.jsxs)("div",{className:"Build",children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsxs)("h2",{children:["\u0417\u0430\u043a\u0443\u043f\u043a\u0430 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0434\u043b\u044f ",a," \u044d\u0442\u0430\u0436\u043d\u043e\u0433\u043e \u0437\u0434\u0430\u043d\u0438\u044f \u0441 \u043f\u043b\u043e\u0449\u0430\u0434\u044c\u044e ",c,"\u043c",Object(h.jsx)("sup",{children:"2"})]}),Object(h.jsx)(n,{})]})]})};a(67);var I=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"/build/:square/:floors",exact:!0,component:D}),Object(h.jsx)(r.b,{path:"/build/:square/:floors/:id/",exact:!0,component:D}),Object(h.jsx)(r.b,{path:"/",exact:!0,component:y})]})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),F()}},[[68,1,2]]]);
//# sourceMappingURL=main.77117a1c.chunk.js.map