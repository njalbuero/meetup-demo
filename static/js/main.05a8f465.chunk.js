(this["webpackJsonpmeetup-demo"]=this["webpackJsonpmeetup-demo"]||[]).push([[0],{12:function(e,t,c){e.exports={item:"MeetupItem_item__25ZcJ",image:"MeetupItem_image__3Lbxm",content:"MeetupItem_content__2gEXN",actions:"MeetupItem_actions__1IxtN"}},13:function(e,t,c){e.exports={header:"MainNavigation_header__2B6Nn",logo:"MainNavigation_logo__2l0jW",active:"MainNavigation_active__PwCUo",badge:"MainNavigation_badge__2a68b"}},20:function(e,t,c){e.exports={card:"Card_card__1tK9s"}},21:function(e,t,c){e.exports={list:"MeetupList_list__qLfBE"}},23:function(e,t,c){e.exports={main:"Layout_main__3Dn7e"}},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(19),r=c.n(n),s=c(7),a=(c(29),c(2)),o=c(24),j=c(11),d=c(12),l=c.n(d),u=c(20),b=c.n(u),O=c(0);var h=function(e){return Object(O.jsx)("div",{className:b.a.card,children:e.children})},x=Object(i.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function m(e){var t=Object(i.useState)([]),c=Object(j.a)(t,2),n=c[0],r=c[1],s={favorites:n,totalFavorites:n.length,addFavorite:function(e){r((function(t){return t.concat(e)}))},removeFavorite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return n.some((function(t){return t.id===e}))}};return Object(O.jsx)(x.Provider,{value:s,children:e.children})}var v=x;var f=function(e){var t=Object(i.useContext)(v),c=t.itemIsFavorite(e.id);return Object(O.jsx)(h,{children:Object(O.jsxs)("li",{className:l.a.item,children:[Object(O.jsx)("div",{className:l.a.image,children:Object(O.jsx)("img",{src:e.image,alt:e.title})}),Object(O.jsxs)("div",{className:l.a.content,children:[Object(O.jsx)("h3",{children:e.title}),Object(O.jsx)("address",{children:e.address}),Object(O.jsx)("p",{children:e.description})]}),Object(O.jsx)("div",{className:l.a.actions,children:Object(O.jsx)("button",{onClick:function(){c?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,image:e.image,address:e.address,description:e.description})},children:c?"Remove from Favorites":"To Favorites"})})]})})},p=c(21),_=c.n(p);var g=function(e){return Object(O.jsx)("ul",{className:_.a.list,children:e.meetups.map((function(e){return Object(O.jsx)(f,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var N=function(){var e=Object(i.useState)(!0),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)([]),s=Object(j.a)(r,2),a=s[0],d=s[1];return Object(i.useEffect)((function(){n(!0),fetch("https://react-getting-started-1fb4e-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var i=Object(o.a)({id:c},e[c]);t.push(i)}d(t),n(!1)}))}),[]),c?Object(O.jsx)("section",{children:Object(O.jsx)("p",{children:"Loading..."})}):Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"All Meetups"}),Object(O.jsx)(g,{meetups:a})]})},F=c(9),M=c.n(F);var w=function(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),n=Object(i.useRef)(),r=Object(i.useRef)();return Object(O.jsx)(h,{children:Object(O.jsxs)("form",{action:"",className:M.a.form,onSubmit:function(i){i.preventDefault();var s={title:t.current.value,image:c.current.value,address:n.current.value,description:r.current.value};e.onAddMeetup(s)},children:[Object(O.jsxs)("div",{className:M.a.control,children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(O.jsxs)("div",{className:M.a.control,children:[Object(O.jsx)("label",{htmlFor:"image",children:"Image"}),Object(O.jsx)("input",{type:"url",required:!0,id:"image",ref:c})]}),Object(O.jsxs)("div",{className:M.a.control,children:[Object(O.jsx)("label",{htmlFor:"address",children:"Address"}),Object(O.jsx)("input",{type:"text",required:!0,id:"address",ref:n})]}),Object(O.jsxs)("div",{className:M.a.control,children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("textarea",{name:"",id:"description",rows:"5",ref:r})]}),Object(O.jsx)("div",{className:M.a.actions,children:Object(O.jsx)("button",{children:"Add Meetup"})})]})})};var y=function(){var e=Object(a.f)();return Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"Add New Meetup"}),Object(O.jsx)(w,{onAddMeetup:function(t){fetch("https://react-getting-started-1fb4e-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var I=function(){var e,t=Object(i.useContext)(v);return e=0===t.totalFavorites?Object(O.jsx)("p",{children:"No favorites yet."}):Object(O.jsx)(g,{meetups:t.favorites}),Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"My Favorites"}),e]})},A=c(13),C=c.n(A);var R=function(){var e=Object(i.useContext)(v);return Object(O.jsxs)("header",{className:C.a.header,children:[Object(O.jsx)("div",{className:C.a.logo,children:"React Meetups"}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/",children:"All Meetups"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/new-meetup",children:"Add New Meetup"})}),Object(O.jsx)("li",{children:Object(O.jsxs)(s.b,{to:"/favorites",children:["My Favorites ",Object(O.jsx)("span",{className:C.a.badge,children:e.totalFavorites})]})})]})})]})},S=c(23),J=c.n(S);var L=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(R,{}),Object(O.jsx)("main",{className:J.a.main,children:e.children})]})};var q=function(){return Object(O.jsx)(L,{children:Object(O.jsxs)(a.c,{children:[Object(O.jsx)(a.a,{path:"/",exact:!0,children:Object(O.jsx)(N,{})}),Object(O.jsx)(a.a,{path:"/new-meetup",children:Object(O.jsx)(y,{})}),Object(O.jsx)(a.a,{path:"/favorites",children:Object(O.jsx)(I,{})})]})})};r.a.render(Object(O.jsx)(m,{children:Object(O.jsx)(s.a,{children:Object(O.jsx)(q,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeetupForm_form__3RCOY",control:"NewMeetupForm_control__2JZtW",actions:"NewMeetupForm_actions__3DAH2"}}},[[36,1,2]]]);
//# sourceMappingURL=main.05a8f465.chunk.js.map