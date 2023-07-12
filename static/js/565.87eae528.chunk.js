"use strict";(self.webpackChunkmoviebase=self.webpackChunkmoviebase||[]).push([[565],{9471:function(n,e,t){t.d(e,{j:function(){return p}});var r,i,a=t(1578),o=t(168),c=t(558),s=t(6444),u=s.ZP.div(r||(r=(0,o.Z)(["\nposition: fixed;\ntop: 50%;\nleft: 50%;\nbackground-color: rgba(0, 0, 0, 0.2);\ntransform: translate(-50%, -50%);\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;\nz-index: 99;\ngap: 10px;\n& svg {\n    width: 70px;\n    height: 70px;\n    fill: ",";\n    color: ",";\n}\n"])),(function(n){return n.theme.darkRed}),(function(n){return n.theme.red})),d=s.ZP.p(i||(i=(0,o.Z)(["\n    font-size: 22px;\n    color: ",";\n    font-weight: 700;\n    font-family: 'Prompt', sans-serif;\n    @media screen and (",") {\n        font-size: 30px;\n    }\n"])),(function(n){return n.theme.red}),c.Hb.tablet),l=t(184),p=function(){return(0,l.jsxs)(u,{children:[(0,l.jsx)(a.hlP,{}),(0,l.jsx)(d,{children:"Something went wrong"})]})}},1525:function(n,e,t){t.d(e,{DK:function(){return f},Dx:function(){return g},Wf:function(){return x},Zb:function(){return p},j8:function(){return h}});var r,i,a,o,c,s=t(168),u=t(6444),d=t(558),l=t(1553),p=(0,u.ZP)(l.E.li)(r||(r=(0,s.Z)(["\n    width: calc((100% - 5px * 4) / 2);\n    margin: 5px;\n    background-color: transparent;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); \n    height: auto;\n    @media screen and (","){\n        width: calc((100% - 5px * 6) / 3);\n    }\n    @media screen and (",") {\n        width: calc((100% - 8px * 8) / 4);\n        margin: 8px;\n    }\n    &:hover, &:focus {\n        transform: scale(1.04);\n    }\n"])),d.Hb.tablet,d.Hb.desktop),f=u.ZP.div(i||(i=(0,s.Z)(["\n    position: relative;\n"]))),x=(0,u.ZP)(l.E.img)(a||(a=(0,s.Z)(["\n    height: 220px;\n    width: 100%;\n    @media screen and (",") {\n        height: 370px;\n    } \n    @media screen and (",") {\n        height: 320px;\n    } \n"])),d.Hb.tablet,d.Hb.desktop),g=u.ZP.p(o||(o=(0,s.Z)(["\n    font-size: 20px;\n    text-align: center;\n    margin-top: 8px;\n"]))),h=u.ZP.span(c||(c=(0,s.Z)(["\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: ",";\n    padding: 2px 4px;\n    border-radius: 8px;\n    border: 1px solid ",";\n    ","\n"])),(function(n){return n.theme.beige}),(function(n){return n.theme.beige}),(function(n){switch(n.rateType){case"good":default:return"background-color: #295f48;";case"bad":return"background-color: #440700";case"coming":return"background-color: rgba(0, 0, 0, 0.5)"}}))},8354:function(n,e,t){t.d(e,{e:function(){return E}});var r,i,a,o=t(9439),c=t(1087),s=t(1525),u=t(558),d=t(9434),l=t(5641),p=t(9440),f=t(184),x={initial:{opacity:0},isOn:{opacity:1,transition:{type:"spring"}}},g=function(n){var e=n.id,t=n.poster,r=n.title,i=n.rate,a=n.path,o=(0,d.v9)(l.VT);return(0,f.jsxs)(s.Zb,{initial:"initial",animate:"isOn",variants:x,children:[(0,f.jsx)(c.rU,{to:"/movies/".concat(e),state:a,children:(0,f.jsxs)(s.DK,{children:[(0,f.jsx)(s.Wf,{src:t?"".concat(u.hp.default).concat(t):u.hp.sample,alt:r,width:"140",loading:"lazy"}),(0,f.jsx)(s.j8,{rateType:i<=0?"coming":i>6?"good":"bad",children:i>0?i.toFixed(1):o===p.a.ENG?"soon":"\u0441\u043a\u043e\u0440\u043e"})]})}),(0,f.jsx)(s.Dx,{children:r})]})},h=t(168),m=t(6444),b=t(6048),v=t.n(b),j=m.ZP.ul(r||(r=(0,h.Z)(["\n    padding-bottom: 40px;\n    padding-top: 20px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: -5px;\n    @media screen and (",") {\n        margin: -8px;\n    }\n"])),u.Hb.desktop),Z=m.ZP.div(i||(i=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    @media screen and (",") {\n        min-width: 800px;\n    }\n"])),u.Hb.desktop),w=(0,m.ZP)(v())(a||(a=(0,h.Z)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    gap: 4px;\n    justify-content: center;\n    li a {\n        width: 20px;\n        background-color: ",";\n        cursor: pointer;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 4px;\n        border-radius: 8px;\n        color: ",";\n        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n        @media screen and (",") {\n            padding: 10px 20px;\n        }\n    }\n    li.selected a {\n        background-color: ",";\n        color: ",";\n    }\n    li.disabled a {\n        background-color: transparent;\n        color: ",";\n    }\n"])),(function(n){return n.theme.beige}),(function(n){return n.theme.darkRed}),u.Hb.desktop,(function(n){return n.theme.red}),(function(n){return n.theme.beige}),(function(n){return n.theme.red})),k=t(7689),y=t(2791),P=t(9863),E=function(){var n=(0,d.I0)(),e=(0,k.TH)(),t=(0,c.lr)({page:1}),r=(0,o.Z)(t,2),i=r[0],a=r[1],s=Number(i.get("page")),u=(0,y.useState)(0),p=(0,o.Z)(u,2),x=p[0],h=p[1],m=(0,d.v9)(l.NS),b=(0,d.v9)(l.eA),v=(0,d.v9)(l.AS),E=(0,y.useRef)(v),N=Math.ceil(b)>500?500:Math.ceil(b);(0,y.useEffect)((function(){v!==E.current&&(n((0,P.YA)(1)),a({page:1}),h(0),E.current=v)}),[v,n,a]),(0,y.useEffect)((function(){var e=0===s?1:s;n((0,P.YA)(e))}),[n,s]);return(0,f.jsxs)(Z,{children:[(0,f.jsx)(j,{children:m.map((function(n){var t=n.title,r=n.poster_path,i=n.vote_average,a=n.id;return(0,f.jsx)(g,{title:t,poster:r,rate:i,id:a,path:{from:e}},a)}))}),m.length>0&&(0,f.jsx)(w,{breakLabel:"...",nextLabel:">>",onPageChange:function(n){a({page:n.selected+1}),h(n.selected)},pageRangeDisplayed:1,pageCount:N,previousLabel:"<<",forcePage:Number(x)})]})}},1192:function(n,e,t){t.d(e,{D:function(){return c}});var r,i=t(168),a=t(6444).ZP.h1(r||(r=(0,i.Z)(["\nfont-size: 26px;\ncolor: ",";\n"])),(function(n){return n.theme.mainFont})),o=t(184),c=function(n){var e=n.sequence;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a,{children:e})})}},3565:function(n,e,t){t.r(e);var r=t(9439),i=t(2791),a=t(9649),o=t(8354),c=t(558),s=t(9471),u=t(9434),d=t(5641),l=t(7563),p=t(1087),f=t(9863),x=t(5647),g=t(1192),h=t(9440),m=t(184);e.default=function(){var n=(0,u.v9)(d.mW),e=(0,u.I0)(),t=(0,u.v9)(d.xM),b=(0,u.v9)(d.VT),v=(0,u.v9)(d.NS),j=(0,p.lr)({page:1,query:t}),Z=(0,r.Z)(j,2),w=Z[0],k=Z[1],y=Number(w.get("page")),P=w.get("query"),E=(0,i.useRef)(t);return(0,i.useEffect)((function(){P&&e((0,f._L)(P))}),[e,P]),(0,i.useEffect)((function(){t!==E.current?(k({page:1,query:t}),e((0,f.YA)(1)),E.current=t):k({page:y,query:t}),e((0,x.q9)())}),[e,y,k,t]),(0,m.jsxs)(m.Fragment,{children:[n===c.Q_.PENDING&&(0,m.jsx)(a.a,{}),n===c.Q_.REJECTED&&(0,m.jsx)(s.j,{}),(0,m.jsxs)(l.kI,{children:[v.length>0&&(0,m.jsx)(g.D,{sequence:b===h.a.ENG?"Results: ".concat(t):"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ".concat(t)}),v.length>0?(0,m.jsx)(o.e,{}):(0,m.jsx)(g.D,{sequence:b===h.a.ENG?"No results":"\u041d\u0435\u043c\u0430\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432"})]})]})}}}]);
//# sourceMappingURL=565.87eae528.chunk.js.map