"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{9471:function(n,e,t){t.d(e,{j:function(){return l}});var r,i,c=t(1578),a=t(168),o=t(558),u=t(6444),s=u.ZP.div(r||(r=(0,a.Z)(["\nposition: fixed;\ntop: 50%;\nleft: 50%;\nbackground-color: rgba(0, 0, 0, 0.2);\ntransform: translate(-50%, -50%);\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;\nz-index: 99;\ngap: 10px;\n& svg {\n    width: 70px;\n    height: 70px;\n    fill: ",";\n    color: ",";\n}\n"])),(function(n){return n.theme.darkRed}),(function(n){return n.theme.red})),d=u.ZP.p(i||(i=(0,a.Z)(["\n    font-size: 22px;\n    color: ",";\n    font-weight: 700;\n    font-family: 'Prompt', sans-serif;\n    @media screen and (",") {\n        font-size: 30px;\n    }\n"])),(function(n){return n.theme.red}),o.Hb.tablet),p=t(184),l=function(){return(0,p.jsxs)(s,{children:[(0,p.jsx)(c.hlP,{}),(0,p.jsx)(d,{children:"Something went wrong"})]})}},3231:function(n,e,t){t.d(e,{DK:function(){return f},Q2:function(){return l},Wf:function(){return x},_w:function(){return g},lG:function(){return m},ne:function(){return h}});var r,i,c,a,o,u,s=t(168),d=t(558),p=t(6444),l=p.ZP.div(r||(r=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nmargin-bottom: 20px;\n@media screen and (","){\n    flex-direction: row;\n    gap: 30px;\n}\n@media screen and (",') {\n    gap: 50px;        \n}\n&::after{\n    content: "";\n    position: fixed;\n    width: 120%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: ',";\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    filter: blur(2px);\n    z-index: -1;\n    opacity: 0.3;\n}\n"])),d.Hb.tablet,d.Hb.desktop,(function(n){return n.back?"url(".concat(d.hp.default).concat(n.back,")"):"url(".concat(d.hp.oddBackground,")")})),f=p.ZP.div(i||(i=(0,s.Z)(["\n    border: 2px solid ",";\n    @media screen and (",") {\n        height: 100%;\n        width: 40%;\n        flex-shrink: 0;\n    }\n    @media screen and (",") {\n        width: 30%;\n    }\n"])),(function(n){return n.theme.red}),d.Hb.tablet,d.Hb.desktop),h=p.ZP.li(c||(c=(0,s.Z)(["\n    font-style: italic;\n    font-size: 16px;\n    @media screen and (",") {\n        font-size: 14px;\n    }\n"])),d.Hb.tablet),x=p.ZP.img(a||(a=(0,s.Z)(["\n    object-fit: cover;\n    width: 100%;\n    height: auto;\n"]))),g=p.ZP.ul(o||(o=(0,s.Z)(["\n   display: flex;\n   flex-direction: column;\n   gap: 8px;\n   font-size: 16px;\n   @media screen and (",") {\n     font-size: 20px;\n     gap: 12px;\n     line-height: 1.2;\n    }\n"])),d.Hb.desktop),m=p.ZP.span(u||(u=(0,s.Z)(["\n    background-color: ",";\n    color: ",";\n    padding: 2px 3px;\n    border-radius: 8px;\n"])),(function(n){return n.theme.red}),(function(n){return n.theme.beige}))},7534:function(n,e,t){t.d(e,{o:function(){return c}});var r=t(1715),i=t(184),c=function(n){var e=n.typing;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.e,{sequence:e,wrapper:"h1",style:{color:"#440700",fontSize:"26px"}})})}},6436:function(n,e,t){t.d(e,{Df:function(){return l},HI:function(){return h},tx:function(){return x},z1:function(){return f},zv:function(){return g}});var r=t(5861),i=t(7757),c=t.n(i),a=t(1243),o="a5ff046cd300d2bbc6befba4bd859295",u="https://api.themoviedb.org/3",s="/trending/movie/day",d="/search/movie",p="/movie/",l=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,t=new URLSearchParams({api_key:o,page:e}),n.next=4,a.Z.get("".concat(u).concat(s,"?").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,i,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r=new URLSearchParams({api_key:o,query:e,page:t}),n.next=4,a.Z.get("".concat(u).concat(d,"?").concat(r));case 4:return i=n.sent,n.abrupt("return",i.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,a.Z.get("".concat(u).concat(p).concat(e,"?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,a.Z.get("".concat(u).concat(p).concat(e,"/reviews?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,a.Z.get("".concat(u).concat(p).concat(e,"/credits?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9961:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,i,c,a,o,u=t(5861),s=t(9439),d=t(7757),p=t.n(d),l=t(2791),f=t(7689),h=t(168),x=t(6444),g=t(1087),m=(0,x.ZP)(g.rU)(r||(r=(0,h.Z)(["\n    background-color: ",";\n    color: ",";\n    padding: 5px 15px;\n    border-radius: 16px;\n    margin-bottom: 20px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: max-content;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    & svg {\n        fill: ",";\n        width: 30px;\n        height: 30px;\n    }\n    &:hover, &:focus, &.active {\n        background-color: ",";\n        color: ",";\n    }\n"])),(function(n){return n.theme.darkRed}),(function(n){return n.theme.decorativeLight}),(function(n){return n.theme.decorativeLight}),(function(n){return n.theme.beige}),(function(n){return n.theme.darkRed})),b=t(71),v=t(184),j=function(n){var e=n.to;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(m,{to:e,children:[" ",(0,v.jsx)(b.diL,{})," Back"]})})},w=t(9649),k=t(7534),Z=t(3231),y=t(558),_=function(n){var e=n.film,t=n.background,r=e.poster_path,i=e.genres,c=e.overview,a=e.title,o=e.original_title,u=e.production_companies,s=e.release_date,d=e.tagline,p=new Date(s),l="".concat(p.getDate(),".").concat(p.getMonth(),".").concat(p.getFullYear());return(0,v.jsxs)(Z.Q2,{back:t,children:[(0,v.jsx)(Z.DK,{children:(0,v.jsx)(Z.Wf,{src:r?"".concat(y.hp.default).concat(r):y.hp.sample})}),(0,v.jsxs)(Z._w,{children:[(0,v.jsx)("li",{children:(0,v.jsx)(k.o,{typing:[1e3,"".concat(a)]})},"title"),d&&(0,v.jsx)(Z.ne,{children:d},"tag"),o&&(0,v.jsxs)("li",{children:[(0,v.jsx)(Z.lG,{children:"Original Title:"})," ",o]},o),i.length>0&&(0,v.jsxs)("li",{children:[(0,v.jsx)(Z.lG,{children:"Genres:"})," ",i.map((function(n){return n.name})).join(", ")]},"genres"),s&&(0,v.jsxs)("li",{children:[(0,v.jsx)(Z.lG,{children:"Year:"})," ",l]},s),u.length>0&&(0,v.jsxs)("li",{children:[(0,v.jsx)(Z.lG,{children:"Production:"})," ",u.map((function(n){return n.name})).join(", ")]},"production"),c&&(0,v.jsxs)("li",{children:[(0,v.jsx)(Z.lG,{children:"Description:"})," ",c]},"description")]})]})},P=x.ZP.div(i||(i=(0,h.Z)(["\nmargin-bottom: 20px;"]))),R=x.ZP.p(c||(c=(0,h.Z)(["\n    font-size: 20px;\n    color: ",";\n    margin-bottom: 10px;\n    font-weight: 700;\n"])),(function(n){return n.theme.darkRed})),z=x.ZP.ul(a||(a=(0,h.Z)(["\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n"]))),E=(0,x.ZP)(g.OL)(o||(o=(0,h.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: ",";\n    color: ",";\n    border-radius: 8px;\n    padding: 5px 10px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    & svg {\n        height: 30px;\n        width: 30px;\n    }\n    &.active {\n        background-color: ",";\n        color: ",";\n        box-shadow: 0px 10px 34px -11px rgba(0,0,0,0.75);\n    }\n"])),(function(n){return n.theme.beige}),(function(n){return n.theme.darkRed}),(function(n){return n.theme.darkRed}),(function(n){return n.theme.beige})),D=t(7692),L=t(4651),S=function(){return(0,v.jsxs)(P,{children:[(0,v.jsx)(R,{children:"View additional information"}),(0,v.jsxs)(z,{children:[(0,v.jsxs)(E,{to:"cast",children:[(0,v.jsx)(L.Nhi,{})," Cast"]}),(0,v.jsxs)(E,{to:"reviews",children:[(0,v.jsx)(D.XYE,{})," Reviews"]})]})]})},H=t(9471),G=t(6436),Q=function(){var n,e=(0,l.useState)(null),t=(0,s.Z)(e,2),r=t[0],i=t[1],c=(0,l.useState)(y.Q_.IDLE),a=(0,s.Z)(c,2),o=a[0],d=a[1],h=(0,f.UO)().movieId,x=(0,f.TH)(),g=(0,l.useRef)((null===(n=x.state)||void 0===n?void 0:n.from)||"/");return(0,l.useEffect)((function(){function n(){return(n=(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,G.HI)(h);case 3:e=n.sent,i(e),d(y.Q_.RESOLVED),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),d(y.Q_.REJECTED);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}d(y.Q_.PENDING),function(){n.apply(this,arguments)}()}),[h]),o===y.Q_.RESOLVED?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j,{to:g.current}),(0,v.jsx)(_,{film:r,background:r.backdrop_path}),(0,v.jsx)(S,{}),(0,v.jsx)(l.Suspense,{fallback:(0,v.jsx)(w.a,{}),children:(0,v.jsx)(f.j3,{})})]}):o===y.Q_.PENDING?(0,v.jsx)(w.a,{}):o===y.Q_.REJECTED?(0,v.jsx)(H.j,{}):void 0}}}]);
//# sourceMappingURL=961.3d6f8c63.chunk.js.map