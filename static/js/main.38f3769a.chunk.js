(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),s=(n(9),n(2)),o=(n(10),n(0)),u=function(e){var t=e.buttons,n=e.onLeaveFeedback;return Object(o.jsx)("div",{children:Object.keys(t).map((function(e){return Object(o.jsx)("button",{name:e,onClick:n,children:e},e)}))})},b=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Good: ",t]}),Object(o.jsxs)("p",{children:["Neutral: ",n]}),Object(o.jsxs)("p",{children:["Bad: ",c]}),Object(o.jsxs)("p",{children:["Total: ",r," "]}),Object(o.jsxs)("p",{children:["Positive feedback:",a," %"]})]})},j=function(e){var t=e.title,n=e.children;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:t}),n]})},d=function(){return Object(o.jsx)("p",{children:"No feedback given"})};n(12);var l=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(s.a)(a,2),l=i[0],O=i[1],h=Object(c.useState)(0),f=Object(s.a)(h,2),x=f[0],v=f[1],k={good:n,neutral:l,bad:x},g=function(){return Object.values(k).reduce((function(e,t){return e+t}),0)},p=function(){var e=g();return 0===e?0:Math.round(n/e*100)},m=g();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{title:"Please leave feedback",children:Object(o.jsx)(u,{buttons:k,onLeaveFeedback:function(e){switch(e.currentTarget.name){case"good":r((function(e){return e+1}));break;case"neutral":O((function(e){return e+1}));break;case"bad":v((function(e){return e+1}));break;default:return}}})}),m>0?Object(o.jsx)(j,{title:"Statistics",children:Object(o.jsx)(b,{good:n,neutral:l,bad:x,total:g(),positivePercentage:p()?p():0})}):Object(o.jsx)(d,{message:"No feedback given"})]})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.38f3769a.chunk.js.map