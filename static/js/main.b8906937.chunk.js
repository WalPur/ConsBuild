(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{29:function(e,t,a){},41:function(e,t,a){},48:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(30),i=a.n(n),l=a(4),r=a(2),o=(a(41),a.p+"static/media/IMG_1527.8ab4da4a.PNG"),j=a.p+"static/media/IMG_1523.8c14bd4b.PNG",b=a.p+"static/media/IMG_1524.0142f51e.PNG",u=a.p+"static/media/IMG_1521.9b8c4711.PNG",d=a.p+"static/media/IMG_1526.7c947a9b.PNG",h=a(0);var m=function(){return Object(h.jsxs)("div",{className:"NavBar",children:[Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"LogoImg",src:o,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",title:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})}),Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/profile",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"NavIcon",src:b,alt:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",title:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/fav",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"NavIcon",src:u,alt:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435",title:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"})}),Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/cart",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"NavIcon",src:d,alt:"\u041b\u043e\u0433\u0438\u043d",title:"\u0412\u0445\u043e\u0434"})}),Object(h.jsx)(l.b,{className:"NavBarElement",to:{pathname:"/about",fromDashBoard:!1},children:Object(h.jsx)("img",{className:"NavIcon",src:j,alt:"\u041e \u043d\u0430\u0441",title:"\u041e \u043d\u0430\u0441"})})]})},p=a(32),O=a(33),x=a(34),v=a(13),f=a(36),N=a(35),g=(a(48),function(e){Object(f.a)(a,e);var t=Object(N.a)(a);function a(e){var c;return Object(O.a)(this,a),(c=t.call(this,e)).state={inputS:0,inputF:1,fireRedirect:!1},c.handleChange=c.handleChange.bind(Object(v.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(v.a)(c)),c}return Object(x.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,c=t.name;this.setState(Object(p.a)({},c,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({fireRedirect:!0})}},{key:"render",value:function(){var e=this.state.fireRedirect,t=(this.props.location.state||"/").from;return Object(h.jsxs)("form",{className:"Calc",onSubmit:this.handleSubmit,children:[Object(h.jsx)("div",{className:"Square",children:Object(h.jsxs)("label",{children:[Object(h.jsxs)("span",{children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c m",Object(h.jsx)("sup",{children:"2"}),":"]}),Object(h.jsx)("input",{type:"number",className:"HomeInput",name:"inputS",value:this.state.value,onChange:this.handleChange})]})}),Object(h.jsx)("div",{className:"floors",children:Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"\u042d\u0442\u0430\u0436\u0438:"}),Object(h.jsxs)("select",{name:"inputF",className:"HomeInput",value:this.state.value,onChange:this.handleChange,children:[Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"})]})]})}),Object(h.jsx)("input",{type:"submit",className:"submitButton",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),e&&Object(h.jsx)(r.a,{to:t||"build/"+this.state.inputS+"/"+this.state.inputF+"/"})]})}}]),a}(s.a.Component)),C=a(14),B=a(10),S=a.n(B);a(67);var I=function(){var e=Object(c.useState)([]),t=Object(C.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){S()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){s(e.data)}))}),[]),Object(h.jsxs)("div",{className:"Categories",children:[Object(h.jsx)("span",{className:"CategoriesTitle",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438:"}),Object(h.jsx)("ol",{children:a.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{className:"Category",activeClassName:"CategoryA",to:{pathname:"".concat(e.id),fromDashboard:!1},children:e.name})})}))})]})},T=(a(68),a(29),a(15));var y=function(e){var t=Object(c.useState)([]),a=Object(C.a)(t,2),s=a[0],n=a[1],i=new T.a;function r(e){var t=i.get("Cart");t||(t=""),i.set("Cart",t+e+".",{path:"/"})}function o(e){var t=i.get("Fav");t||(t=""),i.set("Fav",t+e+".",{path:"/"})}return Object(c.useEffect)((function(){S()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(e,"/")}).then((function(e){n(e.data.lots)}))}),[e]),Object(h.jsx)("div",{className:"lots",children:s.map((function(e){return Object(h.jsxs)("div",{className:"lot",children:[Object(h.jsxs)("div",{className:"desc",children:[Object(h.jsx)(l.b,{className:"lotTitle Title",children:e.name}),Object(h.jsxs)(l.b,{className:"shopTitle Title",children:["\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446: ",e.shop]}),Object(h.jsxs)("div",{className:"lotDesc",children:["\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: ",e.material,". \u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: ",e.purpose,"."]})]}),Object(h.jsxs)("div",{className:"variants",children:[Object(h.jsx)("input",{type:"button",className:"buyButton addButton",onClick:r(e.id),value:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),Object(h.jsx)("input",{type:"button",className:"favButton addButton",onClick:o(e.id),value:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]})]})}))})};var G=function(e){var t=e.match,a=t.params.floors,c=t.params.square,s=t.params.id;function n(){return s?y(s):null}return Object(h.jsxs)("div",{className:"Build",children:[Object(h.jsx)(I,{}),Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsxs)("h2",{children:["\u0417\u0430\u043a\u0443\u043f\u043a\u0430 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0434\u043b\u044f ",a," \u044d\u0442\u0430\u0436\u043d\u043e\u0433\u043e \u0437\u0434\u0430\u043d\u0438\u044f \u0441 \u043f\u043b\u043e\u0449\u0430\u0434\u044c\u044e ",c,"\u043c",Object(h.jsx)("sup",{children:"2"})]}),Object(h.jsx)(n,{})]})]})};var E=function(){var e=[],t=new T.a;if(t)for(var a=t.get("Cart"),c=0;c<a.length;c++)S()({method:"GET",url:"http://127.0.0.1:8000/api/lot/".concat(a[c],"/")}).then((function(t){e.push(t.data)}));return console.log(e),Object(h.jsx)("div",{className:"lot",children:e.map((function(e){return Object(h.jsx)("div",{className:"lot",children:Object(h.jsxs)("div",{className:"desc",children:[Object(h.jsx)(l.b,{className:"lotTitle Title",children:e.name}),Object(h.jsxs)(l.b,{className:"shopTitle Title",children:["\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446: ",e.shop]}),Object(h.jsxs)("div",{className:"lotDesc",children:["\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: ",e.material,". \u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: ",e.purpose,"."]})]})})}))})};a(69);var D=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"/build/:square/:floors",exact:!0,component:G}),Object(h.jsx)(r.b,{path:"/build/:square/:floors/:id/",exact:!0,component:G}),Object(h.jsx)(r.b,{path:"/cart",exact:!0,component:E}),Object(h.jsx)(r.b,{path:"/build/:square/:floors",exact:!0,component:G}),Object(h.jsx)(r.b,{path:"/",exact:!0,component:g})]})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),F()}},[[70,1,2]]]);
//# sourceMappingURL=main.b8906937.chunk.js.map