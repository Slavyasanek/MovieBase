"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{9471:function(n,e,t){t.d(e,{j:function(){return f}});var r,a,i=t(1578),c=t(168),o=t(558),s=t(6444),u=s.ZP.div(r||(r=(0,c.Z)(["\nposition: fixed;\ntop: 50%;\nleft: 50%;\nbackground-color: rgba(0, 0, 0, 0.2);\ntransform: translate(-50%, -50%);\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;\nz-index: 99;\ngap: 10px;\n& svg {\n    width: 70px;\n    height: 70px;\n    fill: ",";\n    color: ",";\n}\n"])),(function(n){return n.theme.darkRed}),(function(n){return n.theme.red})),p=s.ZP.p(a||(a=(0,c.Z)(["\n    font-size: 22px;\n    color: ",";\n    font-weight: 700;\n    font-family: 'Prompt', sans-serif;\n    @media screen and (",") {\n        font-size: 30px;\n    }\n"])),(function(n){return n.theme.red}),o.Hb.tablet),d=t(184),f=function(){return(0,d.jsxs)(u,{children:[(0,d.jsx)(i.hlP,{}),(0,d.jsx)(p,{children:"Something went wrong"})]})}},1525:function(n,e,t){t.d(e,{DK:function(){return l},Dx:function(){return h},Wf:function(){return g},Zb:function(){return f},j8:function(){return x}});var r,a,i,c,o,s=t(168),u=t(6444),p=t(558),d=t(6303),f=(0,u.ZP)(d.E.li)(r||(r=(0,s.Z)(["\n    width: calc((100% - 5px * 4) / 2);\n    margin: 5px;\n    background-color: ",";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); \n    @media screen and (","){\n        width: calc((100% - 5px * 6) / 3);\n    }\n    @media screen and (",") {\n        width: calc((100% - 8px * 8) / 4);\n        margin: 8px;\n    }\n    &:hover, &:focus {\n        transform: scale(1.04);\n    }\n"])),(function(n){return n.theme.decorativeLight}),p.Hb.tablet,p.Hb.desktop),l=u.ZP.div(a||(a=(0,s.Z)(["\n    position: relative;\n    overflow: hidden;\n    max-height: 232px;\n    width: 100%;\n    height: 100%;\n    @media screen and (",") {\n        max-height: 370px;\n    } \n    @media screen and (",") {\n        max-height: 426px;\n    } \n"])),p.Hb.tablet,p.Hb.desktop),g=(0,u.ZP)(d.E.img)(i||(i=(0,s.Z)(["\n    object-fit: cover;\n    width: 100%;\n    min-height: 100%;\n    display: block;\n    image-rendering: crisp-edges;\n"]))),h=u.ZP.p(c||(c=(0,s.Z)(["\n    font-size: 20px;\n    text-align: center;\n    margin-top: 8px;\n"]))),x=u.ZP.span(o||(o=(0,s.Z)(["\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: ",";\n    padding: 4px;\n    border-radius: 8px;\n    ","\n"])),(function(n){return n.theme.decorativeLight}),(function(n){switch(n.rateType){case"good":default:return"background-color: #295f48;";case"bad":return"background-color: #440700"}}))},8354:function(n,e,t){t.d(e,{e:function(){return l}});var r,a=t(1087),i=t(1525),c=t(558),o=t(184),s={initial:{opacity:0},isOn:{opacity:1,transition:{type:"spring"}}},u=function(n){var e=n.id,t=n.poster,r=n.title,u=n.rate,p=n.path;return(0,o.jsx)(i.Zb,{initial:"initial",animate:"isOn",variants:s,children:(0,o.jsxs)(a.rU,{to:"/movies/".concat(e),state:p,children:[(0,o.jsxs)(i.DK,{children:[(0,o.jsx)(i.Wf,{src:t?"".concat(c.hp.default).concat(t):c.hp.sample,alt:r,loading:"lazy"}),(0,o.jsx)(i.j8,{rateType:u>6?"good":"bad",children:u.toFixed(1)})]}),(0,o.jsx)(i.Dx,{children:r})]})})},p=t(168),d=t(6444).ZP.ul(r||(r=(0,p.Z)(["\n    padding-bottom: 40px;\n    padding-top: 20px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: -5px;\n    @media screen and (",") {\n        margin: -8px;\n    }\n"])),c.Hb.desktop),f=t(7689),l=function(n){var e=n.movies,t=(0,f.TH)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(d,{children:e.map((function(n){var e=n.title,r=n.poster_path,a=n.vote_average,i=n.id;return(0,o.jsx)(u,{title:e,poster:r,rate:a,id:i,path:{from:t}},i)}))})})}},7534:function(n,e,t){t.d(e,{o:function(){return i}});var r=t(1715),a=t(184),i=function(n){var e=n.typing;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.e,{sequence:e,wrapper:"h1",style:{color:"#440700",fontSize:"26px"}})})}},6436:function(n,e,t){t.d(e,{Df:function(){return f},HI:function(){return g},MS:function(){return m},pn:function(){return v},tx:function(){return h},z1:function(){return l},zv:function(){return x}});var r=t(5861),a=t(7757),i=t.n(a),c=t(1243),o="a5ff046cd300d2bbc6befba4bd859295",s="https://api.themoviedb.org/3",u="/trending/movie/day",p="/search/movie",d="/movie/",f=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=new URLSearchParams({api_key:o,page:e}),n.next=4,c.Z.get("".concat(s).concat(u,"?").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,r=new URLSearchParams({api_key:o,query:e,page:t}),n.next=4,c.Z.get("".concat(s).concat(p,"?").concat(r));case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,c.Z.get("".concat(s).concat(d).concat(e,"?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,c.Z.get("".concat(s).concat(d).concat(e,"/reviews?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,c.Z.get("".concat(s).concat(d).concat(e,"/credits?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,c.Z.get("".concat(s).concat(d).concat(e,"/videos?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o}),n.next=3,c.Z.get("".concat(s).concat(d).concat(e,"/similar?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5415:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),i=t(7757),c=t.n(i),o=t(9649),s=t(8354),u=t(558),p=t(6436),d=t(2791),f=t(6048),l=t.n(f),g=t(6049),h=t(7534),x=t(9471),m=t(1087),v=t(184);e.default=function(){var n=(0,d.useState)([]),e=(0,a.Z)(n,2),t=e[0],i=e[1],f=(0,d.useState)(u.Q_.IDLE),_=(0,a.Z)(f,2),b=_[0],w=_[1],Z=(0,d.useState)(0),y=(0,a.Z)(Z,2),k=y[0],j=y[1],P=(0,m.lr)({page:1}),L=(0,a.Z)(P,2),E=L[0],S=L[1],D=(0,d.useState)(0),R=(0,a.Z)(D,2),C=R[0],N=R[1],T=Number(E.get("page"));(0,d.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=0===T?1:T,n.next=4,(0,p.Df)(e);case 4:t=n.sent,i(t.results),j(t.total_pages),w(u.Q_.RESOLVED),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),w(u.Q_.REJECTED);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}N(T-1),w(u.Q_.PENDING),function(){n.apply(this,arguments)}()}),[T]);return b===u.Q_.PENDING?(0,v.jsx)(o.a,{}):b===u.Q_.RESOLVED?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h.o,{typing:["Tranding",1e3,"Trending",800,"Trending movies of the day"]}),(0,v.jsx)(s.e,{movies:t}),(0,v.jsx)(l(),{containerClassName:g.Z.pagination__container,pageClassName:g.Z.pagination__page,activeClassName:g.Z.selected,previousClassName:g.Z.pagination__arrow,nextClassName:g.Z.pagination__arrow,disabledClassName:g.Z.disabled,breakLabel:"...",nextLabel:">>",onPageChange:function(n){S({page:n.selected+1})},pageRangeDisplayed:1,pageCount:k/t.length,previousLabel:"<<",forcePage:C})]}):b===u.Q_.REJECTED?(0,v.jsx)(x.j,{}):void 0}},6049:function(n,e){e.Z={pagination__container:"Pagination_pagination__container__lLLsM",pagination__page:"Pagination_pagination__page__TofTv",pagination__arrow:"Pagination_pagination__arrow__OhTwl",selected:"Pagination_selected__DOumc",disabled:"Pagination_disabled__jd-Re"}}}]);
//# sourceMappingURL=415.9a56d353.chunk.js.map