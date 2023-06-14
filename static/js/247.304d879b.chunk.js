"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(7757),i=e.n(c),o=e(6436),u=e(2791),s=e(7689),p=e(5811),f=e(558),d=e(3231),l=e(9649),h=e(9471),x=e(184);t.default=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],m=(0,u.useState)(f.Q_.IDLE),g=(0,a.Z)(m,2),v=g[0],b=g[1],w=(0,s.UO)().movieId;return(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.zv)(w);case 3:t=n.sent,b(f.Q_.RESOLVED),c(t.cast),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),b(f.Q_.REJECTED);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}b(f.Q_.PENDING),function(){n.apply(this,arguments)}()}),[w]),v===f.Q_.PENDING?(0,x.jsx)(l.a,{}):v===f.Q_.RESOLVED||v===f.Q_.IDLE?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.PP,{children:"Cast"}),e.length>0?(0,x.jsx)(p.ds,{children:e.map((function(n){var t=n.id,e=n.character,r=n.profile_path,a=n.name;return(0,x.jsxs)(p.vt,{children:[(0,x.jsx)(p.Pz,{src:r?"".concat(f.hp.default).concat(r):f.hp.sample,alt:e}),(0,x.jsxs)(p.UK,{children:[(0,x.jsx)(d.lG,{children:"Name:"})," ",a]}),(0,x.jsxs)(p.UK,{children:[(0,x.jsx)(d.lG,{children:" Character:"})," ",e]})]},t)}))}):(0,x.jsx)("p",{children:"No cast info"})]}):v===f.Q_.REJECTED?(0,x.jsx)(h.j,{}):void 0}},5811:function(n,t,e){e.d(t,{PP:function(){return f},Pz:function(){return h},UK:function(){return x},ds:function(){return d},vt:function(){return l}});var r,a,c,i,o,u=e(168),s=e(558),p=e(6444),f=p.ZP.h2(r||(r=(0,u.Z)(["\nmargin-bottom: 10px;\n"]))),d=p.ZP.ul(a||(a=(0,u.Z)(["\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\nmargin: -5px;\n"]))),l=p.ZP.li(c||(c=(0,u.Z)(["\nwidth: calc((100% - 6 * 5px) / 3);\nmargin: 5px;\ndisplay: flex;\nflex-direction: column;\ngap: 8px;\n@media screen and (","){\n    width: calc((100% - 10 * 5px) / 5);\n}\n@media screen and (","){\n    width: calc((100% - 14 * 5px) / 7);\n}\n"])),s.Hb.tablet,s.Hb.desktop),h=p.ZP.img(i||(i=(0,u.Z)(["\nwidth: 100%;\nheight: 150px;\nobject-fit: cover;\n"]))),x=p.ZP.p(o||(o=(0,u.Z)(["\n    font-size: 14px;\n    font-family: 'Prompt', sans-serif;\n    line-height: 1.4;\n"])))},9471:function(n,t,e){e.d(t,{j:function(){return d}});var r,a,c=e(1578),i=e(168),o=e(558),u=e(6444),s=u.ZP.div(r||(r=(0,i.Z)(["\nposition: fixed;\ntop: 50%;\nleft: 50%;\nbackground-color: rgba(0, 0, 0, 0.2);\ntransform: translate(-50%, -50%);\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;\nz-index: 99;\ngap: 10px;\n& svg {\n    width: 70px;\n    height: 70px;\n    fill: ",";\n    color: ",";\n}\n"])),(function(n){return n.theme.darkRed}),(function(n){return n.theme.red})),p=u.ZP.p(a||(a=(0,i.Z)(["\n    font-size: 22px;\n    color: ",";\n    font-weight: 700;\n    font-family: 'Prompt', sans-serif;\n    @media screen and (",") {\n        font-size: 30px;\n    }\n"])),(function(n){return n.theme.red}),o.Hb.tablet),f=e(184),d=function(){return(0,f.jsxs)(s,{children:[(0,f.jsx)(c.hlP,{}),(0,f.jsx)(p,{children:"Something went wrong"})]})}},3231:function(n,t,e){e.d(t,{DK:function(){return l},Q2:function(){return d},Wf:function(){return x},_w:function(){return m},lG:function(){return g},ne:function(){return h}});var r,a,c,i,o,u,s=e(168),p=e(558),f=e(6444),d=f.ZP.div(r||(r=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nmargin-bottom: 20px;\n@media screen and (","){\n    flex-direction: row;\n    gap: 30px;\n}\n@media screen and (",') {\n    gap: 50px;        \n}\n&::after{\n    content: "";\n    position: fixed;\n    width: 120%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: ',";\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    filter: blur(2px);\n    z-index: -1;\n    opacity: 0.3;\n}\n"])),p.Hb.tablet,p.Hb.desktop,(function(n){return n.back?"url(".concat(p.hp.default).concat(n.back,")"):"url(".concat(p.hp.oddBackground,")")})),l=f.ZP.div(a||(a=(0,s.Z)(["\n    border: 2px solid ",";\n    @media screen and (",") {\n        height: 100%;\n        width: 40%;\n        flex-shrink: 0;\n    }\n    @media screen and (",") {\n        width: 30%;\n    }\n"])),(function(n){return n.theme.red}),p.Hb.tablet,p.Hb.desktop),h=f.ZP.li(c||(c=(0,s.Z)(["\n    font-style: italic;\n    font-size: 16px;\n    @media screen and (",") {\n        font-size: 14px;\n    }\n"])),p.Hb.tablet),x=f.ZP.img(i||(i=(0,s.Z)(["\n    object-fit: cover;\n    width: 100%;\n    height: auto;\n"]))),m=f.ZP.ul(o||(o=(0,s.Z)(["\n   display: flex;\n   flex-direction: column;\n   gap: 8px;\n   font-size: 16px;\n   @media screen and (",") {\n     font-size: 20px;\n     gap: 12px;\n     line-height: 1.2;\n    }\n"])),p.Hb.desktop),g=f.ZP.span(u||(u=(0,s.Z)(["\n    background-color: ",";\n    color: ",";\n    padding: 2px 3px;\n    border-radius: 8px;\n"])),(function(n){return n.theme.red}),(function(n){return n.theme.beige}))},6436:function(n,t,e){e.d(t,{Df:function(){return d},HI:function(){return h},tx:function(){return x},z1:function(){return l},zv:function(){return m}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),o="a5ff046cd300d2bbc6befba4bd859295",u="https://api.themoviedb.org/3",s="/trending/movie/day",p="/search/movie",f="/movie/",d=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e=new URLSearchParams({api_key:o,page:t}),n.next=4,i.Z.get("".concat(u).concat(s,"?").concat(e));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,r=new URLSearchParams({api_key:o,query:t,page:e}),n.next=4,i.Z.get("".concat(u).concat(p,"?").concat(r));case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:o}),n.next=3,i.Z.get("".concat(u).concat(f).concat(t,"?").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:o}),n.next=3,i.Z.get("".concat(u).concat(f).concat(t,"/reviews?").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:o}),n.next=3,i.Z.get("".concat(u).concat(f).concat(t,"/credits?").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.304d879b.chunk.js.map