(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(20),c(21),c(2)),s=(c(22),c(8)),j=c(11),i=c(4),l=c(1),b=(c(23),c(0)),o=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})};function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var h=c(6),u=c.n(h),O=function(e){var t=e.person;return Object(b.jsx)(a.b,{to:"/people/".concat(t.slug),className:u()({"has-text-danger":"f"===t.sex}),children:t.name})},x=Object(l.memo)((function(e){var t=e.people,c=Object(r.h)().slug,n=function(e){if(!e)return"-";var c=t.find((function(t){return t.name===e}));return c?Object(b.jsx)(O,{person:c}):e};return Object(b.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Sex"}),Object(b.jsx)("th",{children:"Born"}),Object(b.jsx)("th",{children:"Died"}),Object(b.jsx)("th",{children:"Mother"}),Object(b.jsx)("th",{children:"Father"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"person",className:u()({"has-background-warning":e.slug===c}),children:[Object(b.jsx)("td",{children:Object(b.jsx)(O,{person:e})}),Object(b.jsx)("td",{children:e.sex}),Object(b.jsx)("td",{children:e.born}),Object(b.jsx)("td",{children:e.died}),Object(b.jsx)("td",{children:n(e.motherName)}),Object(b.jsx)("td",{children:n(e.fatherName)})]},e.slug)}))})]})})),p=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!1),r=Object(i.a)(a,2),h=r[0],u=r[1],O=Object(l.useState)(""),p=Object(i.a)(O,2),m=p[0],f=p[1],v=Object(l.useState)(!1),g=Object(i.a)(v,2),N=g[0],y=g[1],w=function(){var e=Object(j.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,d();case 4:(t=e.sent).length||f("Something went wrong"),n(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),f("There are no people on the server"),y(!0);case 13:return e.prev=13,u(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){w()}),[]),Object(b.jsxs)("div",{className:"block",children:[Object(b.jsx)("h1",{className:"title",children:"People Page"}),Object(b.jsxs)("div",{className:"box table-container",children:[h&&Object(b.jsx)(o,{}),Object(b.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:N||0!==c.length?"":m}),Object(b.jsx)("p",{"data-cy":"noPeopleMessage",children:N&&m}),Object(b.jsx)(x,{people:c})]})]})},m=function(){return Object(b.jsx)("h1",{className:"title",children:"Home page"})},f=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(a.c,{className:function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(b.jsx)(a.c,{className:function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},to:"people",children:"People"})]})})})})},v=function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found"})},g=function(){return Object(b.jsxs)("div",{"data-cy":"app",children:[Object(b.jsx)(f,{}),Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{path:"/",element:Object(b.jsx)(m,{})}),Object(b.jsxs)(r.b,{path:"/people",children:[Object(b.jsx)(r.b,{index:!0,element:Object(b.jsx)(p,{})}),Object(b.jsx)(r.b,{path:":slug",element:Object(b.jsx)(p,{})})]}),Object(b.jsx)(r.b,{path:"home",element:Object(b.jsx)(r.a,{to:"/",replace:!0})}),Object(b.jsx)(r.b,{path:"*",element:Object(b.jsx)(v,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(b.jsx)(a.a,{children:Object(b.jsx)(g,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.8c231d52.chunk.js.map