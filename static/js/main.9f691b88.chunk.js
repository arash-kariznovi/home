(this.webpackJsonparash=this.webpackJsonparash||[]).push([[0],[,,,,function(e,t,n){e.exports={para:"Home_para__38WpK","home-content":"Home_home-content__s3R_f"}},function(e,t,n){e.exports={"about-content":"About_about-content__2DP-z",skills:"About_skills__2wgBy"}},,,function(e,t,n){e.exports={card:"Card_card__2yeJ5",shake:"Card_shake__3yphR"}},,function(e,t,n){e.exports={"context-box":"Context_context-box__1UA-i"}},function(e,t,n){e.exports={button:"Button_button__3rqy_"}},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(17),n(2)),o=(n(18),n.p+"static/media/arash.62fefdab.jpg"),l=n(4),j=n.n(l),u=n(0),d=function(){return Object(u.jsxs)("div",{className:j.a["home-content"],children:[Object(u.jsx)("img",{src:o,alt:"avatar"}),Object(u.jsx)("h1",{children:" HELLO, I am Arash.."}),Object(u.jsxs)("p",{className:j.a.para,children:["I am ",Object(u.jsx)("strong",{children:"Arash Kariznovi"}),", A computer science student at Ferdowsi University of Mashhad (IR). My passion is Software Engineering and also I am a newcommer to the field of AI and Computer vision. I have developed and designed plenty of web applications and softwares inlcuding: Search Algorithms, Data mining, Web scraping, Cpu scheduling and a lot more ...",Object(u.jsx)("br",{}),"You can see my projects in my"," ",Object(u.jsx)("a",{href:"https://github.com/arash-kariznovi",target:"_blank",rel:"noreferrer",style:{color:"black"},children:Object(u.jsx)("b",{children:"Github"})})," ","page. Finally do not hasistate to contact me using message box if I can help you."]})]})},b=(n(20),function(e){return Object(u.jsx)("h1",{children:e.title})}),h=n(5),O=n.n(h),x=n(8),p=n.n(x),m=function(e){return Object(u.jsx)("div",{className:p.a.card,children:e.children})},f=function(){return Object(u.jsx)("div",{className:O.a["about-content"],children:Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(b,{title:"About me"}),Object(u.jsxs)("div",{className:O.a.skills,children:[Object(u.jsxs)(m,{children:[Object(u.jsx)("h3",{children:"Computer Engineering Student"}),Object(u.jsx)("p",{children:"Ferdowsi University"}),Object(u.jsx)("p",{children:"2017 - 2021"}),Object(u.jsxs)("p",{children:[" ",Object(u.jsx)("br",{})]})]}),Object(u.jsxs)(m,{children:[Object(u.jsx)("h3",{children:"Languages"}),Object(u.jsx)("p",{children:"Python"}),Object(u.jsx)("p",{children:"C++"}),Object(u.jsx)("p",{children:"JavaScript"})]}),Object(u.jsxs)(m,{children:[Object(u.jsx)("h3",{children:"Skills"}),Object(u.jsx)("p",{children:"Web development"}),Object(u.jsx)("p",{children:"Teacher Assistant"}),Object(u.jsx)("p",{children:"TeamWork"})]}),Object(u.jsxs)(m,{children:[Object(u.jsx)("h3",{children:"Technologies"}),Object(u.jsx)("p",{children:"React"}),Object(u.jsx)("p",{children:"Git"}),Object(u.jsx)("p",{children:"Postgres"})]})]})]})})},g=function(){return Object(u.jsx)(b,{title:"Projects"})},v=n(6),C=n.n(v),_=n(9),y=(n(22),function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),o=Object(i.a)(s,2),l=o[0],j=o[1],u=e(r);return{value:r,reset:function(){a(""),j(!1)},error:!u&&l,validValue:u,valueInputHandler:function(e){a(e.target.value)},valueBlurHandler:function(){j(!0)}}}),k=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(i.a)(a,2),o=s[0],l=s[1],j=!1,d=y((function(e){return""!==e.trim()})),h=d.value,O=d.error,x=d.reset,p=d.validValue,f=d.valueInputHandler,g=d.valueBlurHandler,v=y((function(e){return e.includes("@")})),k=v.value,N=v.error,T=v.reset,S=v.validValue,A=v.valueInputHandler,H=v.valueBlurHandler;p&&S&&(j=!0);var E=function(){var e=Object(_.a)(C.a.mark((function e(t){var c,a,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!p||!S||""===n.trim()){e.next=14;break}return console.log("submitted"),c={name:h,email:k,message:n},e.next=6,fetch("https://portfolio-9fb76-default-rtdb.europe-west1.firebasedatabase.app/messages.json",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});case 6:a=e.sent,s=a.json(),console.log(s),r(""),x(),T(),l(!0),setTimeout((function(){l(!1)}),5e3);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=O?"form-control invalid":"form-control",w=N?"form-control invalid ":"form-control";return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(b,{title:"Contact"}),Object(u.jsxs)(m,{children:[o?Object(u.jsx)("h5",{children:"Your message has been sent!"}):Object(u.jsx)("h5",{children:"I will respond within a day."}),Object(u.jsxs)("form",{onSubmit:E,children:[Object(u.jsx)("div",{className:"control-group",children:Object(u.jsxs)("div",{className:I,children:[Object(u.jsx)("label",{htmlFor:"name",children:"First Name"}),Object(u.jsx)("input",{type:"text",id:"name",value:h,onChange:f,onBlur:g}),O&&Object(u.jsx)("p",{className:"error-text",children:"Enter Valid Input"})]})}),Object(u.jsxs)("div",{className:w,children:[Object(u.jsx)("label",{htmlFor:"name",children:"E-Mail Address"}),Object(u.jsx)("input",{type:"text",id:"name",value:k,onChange:A,onBlur:H}),N&&Object(u.jsx)("p",{className:"error-text",children:"Enter Valid Input"}),Object(u.jsx)("textarea",{placeholder:"Write your message here...",onChange:function(e){r(e.target.value)},value:n})]}),Object(u.jsx)("div",{className:"form-actions",children:Object(u.jsx)("button",{disabled:!j,children:"Submit"})})]})]})]})},N=n(10),T=n.n(N),S=function(e){var t=Object(u.jsx)(d,{});return"HOME"===e.page?t=Object(u.jsx)(d,{}):"ABOUT"===e.page?t=Object(u.jsx)(f,{}):"CONTACT"===e.page?t=Object(u.jsx)(k,{}):"PROJECTS"===e.page&&(t=Object(u.jsx)(g,{})),Object(u.jsxs)("div",{className:T.a["context-box"],children:[t,Object(u.jsx)("hr",{})]})},A=n(11),H=n.n(A),E=function(e){return Object(u.jsx)("button",{onClick:e.onClick,className:H.a.button,children:e.children})},I=n(12),w=n.n(I),B=function(e){return Object(u.jsxs)("div",{className:w.a["button-list"],children:[Object(u.jsx)(E,{onClick:function(){e.pageHandler("HOME")},children:"HOME"}),Object(u.jsx)(E,{onClick:function(){e.pageHandler("ABOUT")},children:"ABOUT ME"}),Object(u.jsx)(E,{onClick:function(){e.pageHandler("PROJECTS")},children:"PROJECTS"}),Object(u.jsx)(E,{onClick:function(){e.pageHandler("CONTACT")},children:"CONTACT"})]})};var F=function(){var e=Object(c.useState)("HOME"),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(S,{page:n}),Object(u.jsx)(B,{pageHandler:function(e){r(e),console.log(e)}})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),P()}],[[23,1,2]]]);
//# sourceMappingURL=main.9f691b88.chunk.js.map