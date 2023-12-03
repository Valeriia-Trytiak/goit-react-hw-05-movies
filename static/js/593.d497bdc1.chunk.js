"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{197:function(n,e,t){t.d(e,{PN:function(){return l},fy:function(){return s},kG:function(){return p},vR:function(){return u},xp:function(){return c}});var r=t(5861),i=t(7757),o=t.n(i),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmQ0ODBmZTY3MDE2ODk5NjBmMWQzYjM0YWI0OGNlMCIsInN1YiI6IjY1M2NmYWM5ZTg5NGE2MDBjNTE2MGU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SI4wLOe9-g2O22c_kRD4y1B2Ne0JXL2cyjtZyF8gcYM",a.Z.defaults.params={language:"en-US"};var c=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3555:function(n,e,t){t.d(e,{k:function(){return o}});var r,i=t(168),o=t(5867).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"])))},3174:function(n,e,t){t.d(e,{O:function(){return Z}});var r,i,o,a,c,s,u=t(7689),p=t(168),l=t(5867),h=t(1087),f=l.ZP.li(r||(r=(0,p.Z)(["\n  flex-basis: calc((100% - "," * (1 - 1)) / 1);\n  text-align: center;\n  background-color: ",";\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  border-radius: ",";\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n\n  &:hover,\n  &:focus {\n    transform: translateY(-8px);\n    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);\n  }\n\n  @media only screen and (min-width: 768px) {\n    flex-basis: calc((100% - "," * (3 - 1)) / 3);\n  }\n\n  @media only screen and (min-width: 1158px) {\n    flex-basis: calc((100% - "," * (4 - 1)) / 4);\n  }\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(15)})),d=(0,l.ZP)(h.OL)(i||(i=(0,p.Z)(["\n  position: relative;\n  text-decoration: none;\n  font-size: 14px;\n  color: ",";\n  font-weight: bold;\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.accent})),m=l.ZP.img(o||(o=(0,p.Z)(["\n  width: 100%;\n  border-radius: ",";\n  object-fit: cover;\n  position: relative;\n  z-index: 1;\n  transition: filter 0.3s ease;\n\n  ",":hover & {\n    filter: brightness(0.8);\n  }\n"])),(function(n){return n.theme.spacing(10)}),f),x=l.ZP.ul(a||(a=(0,p.Z)(["\n  max-width: 275px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: ",";\n  column-gap: ",";\n\n  @media only screen and (min-width: 768px) {\n    max-width: 600px;\n  }\n\n  @media only screen and (min-width: 1158px) {\n    max-width: 1050px;\n    row-gap: ",";\n    column-gap: ",";\n  }\n"])),(function(n){return n.theme.spacing(11)}),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(15)}),(function(n){return n.theme.spacing(13)})),g=l.ZP.h2(c||(c=(0,p.Z)(["\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  padding: 20px;\n  font-weight: bold;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: ",";\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 2;\n  visibility: hidden;\n  text-align: center;\n  width: calc(100% + ",");\n\n  ",":hover & {\n    transform: translateY(0);\n    visibility: visible;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing(1)}),f),b=l.ZP.div(s||(s=(0,p.Z)(["\n  position: relative;\n  overflow: hidden;\n  border-radius: ",";\n  transition: transform 0.3s ease;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.spacing(10)})),v=t(184),Z=function(n){var e=n.movies,t=(0,u.TH)();return(0,v.jsx)(x,{children:e.map((function(n){return(0,v.jsx)(f,{children:(0,v.jsx)(d,{to:"/movies/".concat(n.id),state:{from:t},children:(0,v.jsxs)(b,{children:[(0,v.jsx)(m,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:100,alt:"poster"}),(0,v.jsx)(g,{children:n.title})]})})},n.id)}))})}},8593:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,i,o,a,c,s,u=t(5861),p=t(9439),l=t(7757),h=t.n(l),f=t(2791),d=t(1087),m=t(8881),x=t(5218),g=t(5705),b=t(6727),v=t(168),Z=t(5867),w=t(861),y=Z.ZP.div(r||(r=(0,v.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: ",";\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  margin-bottom: ",";\n  color: ",";\n  background-color: transparent;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.white})),j=(0,Z.ZP)(g.l0)(i||(i=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: ",";\n  border-radius: ",";\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing(2)})),k=(0,Z.ZP)(g.gN)(o||(o=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: ",";\n  padding-right: ",";\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)})),P=Z.ZP.button(a||(a=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  position: relative;\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"]))),z=(0,Z.ZP)(w.vi$)(c||(c=(0,v.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 25px;\n  color: ",";\n  opacity: 0.6;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.colors.accent})),I=(0,Z.ZP)(g.Bc)(s||(s=(0,v.Z)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(n){return n.theme.colors.error})),N=t(184),M=b.Ry().shape({searchValue:b.Z_().trim().min(2,"Minimum length - 2 characters").max(20,"Maximum length - 20 characters")}),O=function(n){var e=n.onSubmit;return(0,N.jsx)(y,{children:(0,N.jsx)(g.J9,{initialValues:{searchValue:""},onSubmit:function(n,t){var r=n.searchValue.trim();""!==r&&e(r),t.resetForm()},validationSchema:M,children:(0,N.jsxs)(j,{children:[(0,N.jsx)(P,{type:"submit",children:(0,N.jsx)(z,{})}),(0,N.jsx)("label",{htmlFor:"searchValue"}),(0,N.jsx)(k,{type:"text",name:"searchValue",id:"searchValue",placeholder:"Search movies",autoComplete:"off",autoFocus:!0}),(0,N.jsx)(I,{name:"searchValue",component:"span"})]})})})},J=t(3174),S=t(3555),Y=t(197),C=function(){var n=(0,f.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1],i=(0,d.lr)(),o=(0,p.Z)(i,2),a=o[0],c=o[1],s=(0,f.useState)(!1),l=(0,p.Z)(s,2),g=l[0],b=l[1],v=(0,f.useState)(!1),Z=(0,p.Z)(v,2),w=Z[0],y=Z[1],j=a.get("query")||"";(0,f.useEffect)((function(){function n(){return(n=(0,u.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),y(!1),n.next=5,(0,Y.fy)(j);case 5:(e=n.sent).results.length>0?(x.ZP.success("Movies found successfully!"),r(e.results)):(x.ZP.error("Ooops...Nothing found. Update the search value, please!"),r([])),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),y(!0);case 12:return n.prev=12,b(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}""!==j&&function(){n.apply(this,arguments)}()}),[j]);return(0,N.jsxs)("main",{children:[(0,N.jsx)(O,{onSubmit:function(n){c(""!==n?{query:n}:{})}}),t.length>0&&(0,N.jsx)(J.O,{movies:t}),g&&(0,N.jsx)(S.k,{children:(0,N.jsx)(m.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),w&&(0,N.jsx)("span",{children:"Whoops... Error! Please, reload this page!"}),(0,N.jsx)(x.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=593.d497bdc1.chunk.js.map