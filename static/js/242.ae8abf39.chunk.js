"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[242],{197:function(n,e,t){t.d(e,{PN:function(){return f},fy:function(){return u},kG:function(){return p},vR:function(){return s},xp:function(){return i}});var r=t(5861),a=t(7757),o=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmQ0ODBmZTY3MDE2ODk5NjBmMWQzYjM0YWI0OGNlMCIsInN1YiI6IjY1M2NmYWM5ZTg5NGE2MDBjNTE2MGU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SI4wLOe9-g2O22c_kRD4y1B2Ne0JXL2cyjtZyF8gcYM",c.Z.defaults.params={language:"en-US"};var i=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3555:function(n,e,t){t.d(e,{k:function(){return o}});var r,a=t(168),o=t(5867).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"])))},7356:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,o,c,i,u=t(5861),s=t(9439),p=t(7757),f=t.n(p),l=t(7689),d=t(2791),h=t(8881),m=t(5218),v=t(4750),g=(t(6497),t(4277),t(8870)),x=t(197),Z=t(3555),b=t(168),w=t(5867);var y=w.ZP.div(r||(r=(0,b.Z)(["\n  ul {\n    padding-top: ",";\n  }\n\n  li {\n    margin-bottom: ",";\n    border: 1px solid ",";\n    padding: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1)})),k=w.ZP.p(a||(a=(0,b.Z)(["\n  font-weight: bold;\n  margin-bottom: ",";\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))})),j=w.ZP.p(o||(o=(0,b.Z)(["\n  margin: 0;\n  font-size: 14px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textColor})),I=w.ZP.p(c||(c=(0,b.Z)(["\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textColor})),N=w.ZP.div(i||(i=(0,b.Z)(["\n  padding: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(2)})),M=t(184),P=function(){var n=(0,d.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,d.useState)(!1),o=(0,s.Z)(a,2),c=o[0],i=o[1],p=(0,d.useState)(!1),b=(0,s.Z)(p,2),w=b[0],P=b[1],C=(0,l.UO)().movieId;return(0,d.useEffect)((function(){function n(){return(n=(0,u.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i(!0),P(!1),n.next=5,(0,x.PN)(C);case 5:e=n.sent,m.ZP.success("Movies found successfully!"),e.results&&e.results.length>0?r(e.results):r([]),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),P(!0);case 13:return n.prev=13,i(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}C&&function(){n.apply(this,arguments)}()}),[C]),(0,M.jsxs)(y,{children:[(0,M.jsx)("ul",{children:t.length>0?(0,M.jsx)(v.tq,{slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0,modules:[g.N1,g.tl,g.W_],className:"mySwiper",children:t.map((function(n){return(0,M.jsx)(v.o5,{children:(0,M.jsxs)(N,{children:[(0,M.jsx)(k,{children:n.author}),(0,M.jsx)(j,{children:n.content})]})},n.id)}))}):(0,M.jsx)(I,{children:"We don't have any reviews for this movie."})}),c&&(0,M.jsx)(Z.k,{children:(0,M.jsx)(h.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),w&&(0,M.jsx)("span",{children:"Whoops... Error! Please, reload this page!"}),(0,M.jsx)(m.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=242.ae8abf39.chunk.js.map