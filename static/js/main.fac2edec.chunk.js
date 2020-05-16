(this.webpackJsonpstock=this.webpackJsonpstock||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),o=(a(93),a(94),a(21)),i=a(19),s=a(18),u=a(37),m=a(41),p=a(32),E=a(85),d=a(27);function f(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(i.e)();function o(){l.push("/companies?symbol=".concat(a,"&desc=").concat(a))}return(r.a.createElement(m.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(m.a.Brand,{href:"#/"},"Stock"),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"#/"},"Home"),r.a.createElement(p.a.Link,{href:"#news"},"News")),r.a.createElement(E.a,{inline:!0},r.a.createElement(d.a,{type:"text",placeholder:"write Symbol..",className:"mr-sm-2",onChange:function(e){c(e.target.value)},onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),c(""),o())}}),r.a.createElement(u.a,{variant:"outline-info",onClick:function(){c(""),o()}},"Search")))))}var h=a(5),b=a(34),g=a(33),y=a.n(g),v=a(86);function O(){var e=Object(h.c)((function(e){return e.error}));return e?r.a.createElement("div",null,r.a.createElement(v.a,{variant:"danger"},e.code," - ",e.text)):null}var k=function(){var e=Object(h.c)((function(e){return e.news}));return Object(h.c)((function(e){return e.error}))?r.a.createElement(O,null):r.a.createElement("div",null,e.map((function(e){return r.a.createElement("a",{href:e.url,key:e.id},r.a.createElement(b.a,{className:"m-3"},r.a.createElement("img",{width:75,height:75,className:"mr-3",src:e.image,alt:e.headline}),r.a.createElement(b.a.Body,null,r.a.createElement("h5",null,r.a.createElement(y.a,{text:e.headline,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"})),r.a.createElement("p",null,r.a.createElement(y.a,{text:e.summary,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"})))))})))};function w(e){var t=e.title;return(r.a.createElement("h1",null,t))}var N=a(66),x=a(29),j=a(23);function C(){var e=Object(h.c)((function(e){return e.loading})),t=Object(h.c)((function(e){return e.exchanges}));return Object(h.c)((function(e){return e.error}))?r.a.createElement(O,null):e?r.a.createElement(x.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",null,r.a.createElement(w,{title:"Markets"}),t.map((function(e,a){return r.a.createElement(o.b,{to:{pathname:"markets/".concat(a),state:{exchanges:t}},key:e.code},r.a.createElement(N.a,{className:"m-3"},r.a.createElement(N.a.Header,null,e.market),r.a.createElement(j.a,{variant:"flush"},r.a.createElement(j.a.Item,null,e.companies[0].description),r.a.createElement(j.a.Item,null,e.companies[1].description))))})))}function S(e){var t=e.title;return(r.a.createElement("h4",null,t))}var _=a(30),T=a(53),A=a(16),L=a(59);function R(e){var t=e.match,a=Object(h.c)((function(e){return e.loading})),c=t.params.exchange,l=Object(h.c)((function(e){return e.exchanges[c]})),i=Object(n.useState)(1),m=Object(s.a)(i,2),p=m[0],E=m[1],f=Object(n.useState)(10),b=Object(s.a)(f,1)[0],g=Object(n.useState)(1),y=Object(s.a)(g,2),v=y[0],k=y[1],N=(p-1)*b;return Object(h.c)((function(e){return e.error}))?r.a.createElement(O,null):a?r.a.createElement(x.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",null,r.a.createElement(w,{title:l.market}),r.a.createElement(S,{title:"Company list"}),r.a.createElement(j.a,null,l.companies.slice(N,N+b).map((function(e,t){return"N/A"===e.description?null:r.a.createElement(o.b,{to:{pathname:"/companies?symbol=".concat(e.symbol,"&desc=").concat(e.description)},key:t},r.a.createElement(j.a.Item,null,e.description," (",e.displaySymbol,")"))}))),r.a.createElement(_.a,null,r.a.createElement(T.a,{className:"justify-content-md-center"},r.a.createElement(A.a,{xs:!0,lg:"2",className:"flex-grow-0"},r.a.createElement(u.a,{variant:"outline-primary",onClick:function(){E((function(e){return e>1?(k(e-1),e-1):(k(1),1)}))}}," pre ")),r.a.createElement(A.a,{md:"auto"},r.a.createElement(L.a,null,r.a.createElement(d.a,{"aria-label":"currentpage",style:{width:"3.5rem"},className:"Form_page",value:v,onChange:function(e){k(parseInt(e.target.value))},onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),E(v))}}),r.a.createElement(L.a.Append,null,r.a.createElement(L.a.Text,null,Math.ceil(l.companies.length/b))))),r.a.createElement(A.a,{xs:!0,lg:"2",className:"flex-grow-0"},r.a.createElement(u.a,{variant:"outline-primary",onClick:function(){var e=Math.ceil(l.companies.length/b);E((function(t){return t<e?(k(t+1),t+1):(k(e),e)}))}}," next ")))))}var D=a(80);function I(e){var t=e.price;return(r.a.createElement(D.a,{borderless:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\uc804\uc77c"),r.a.createElement("td",null,t.pc),r.a.createElement("th",null,"\uace0\uac00"),r.a.createElement("td",null,t.h)),r.a.createElement("tr",null,r.a.createElement("th",null,"\uc2dc\uac00"),r.a.createElement("td",null,t.o),r.a.createElement("th",null,"\uc800\uac00"),r.a.createElement("td",null,t.l)))))}function H(e){var t=e.price,a=e.symbol,c=Object(n.useState)(t),l=Object(s.a)(c,2),o=l[0],i=l[1],u=new WebSocket("wss://ws.finnhub.io?token=bqi7mrfrh5rcatj3upm0");return u.addEventListener("open",(function(e){u.send(JSON.stringify({type:"subscribe",symbol:a})),console.log(e)})),u.addEventListener("message",(function(e){var t=JSON.parse(e.data);console.log(t),"trade"===t.type&&(console.log("trade"),i(t.data[0].p))})),r.a.createElement("h3",null,o)}function G(e){var t=e.symbol,a=Object(h.c)((function(e){return e.selected_price}));return a?r.a.createElement(_.a,null,r.a.createElement(T.a,null,r.a.createElement(A.a,{className:"border-right d-flex justify-content-center align-items-center"},r.a.createElement(H,{price:a.c,symbol:t})),r.a.createElement(A.a,null,r.a.createElement(I,{price:a})))):r.a.createElement("div",null,"\ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4..")}var F=a(81);function K(e){for(var t=[["label","low-high, open-close","opening/initial","closing/final","maximum"]],a=0;a<e.c.length;a++)t.push([e.t[a],e.l[a],e.o[a],e.c[a],e.h[a]]);return t}function P(){var e=Object(h.c)((function(e){return e.selected_chart}));return e&&"ok"===e.s?r.a.createElement(F.a,{width:"100%",height:500,chartType:"CandlestickChart",loader:r.a.createElement("div",null,"Loading Chart"),data:K(e),options:{legend:"none"},rootProps:{"data-testid":"1"}}):r.a.createElement("div",null,"\uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")}function M(){var e=Object(h.c)((function(e){return e.selected_news}));return e?0===e.length?r.a.createElement("div",null,"\ucd5c\uadfc \ud55c \ub2ec\uac04 \uc18c\uc2dd\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.."):r.a.createElement("div",null,e.map((function(e){return r.a.createElement("a",{href:e.url,key:e.id},r.a.createElement(b.a,{className:"m-3"},r.a.createElement("img",{width:75,height:75,className:"mr-3",src:e.image,alt:e.headline}),r.a.createElement(b.a.Body,null,r.a.createElement("h5",null,r.a.createElement(y.a,{text:e.headline,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"})),r.a.createElement("p",null,r.a.createElement(y.a,{text:e.summary,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"})))))}))):r.a.createElement("div",null,"\ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4..")}var W=a(87),B=a(65),J=a(12),q=a.n(J),U=a(24),Q=a(35),X=a.n(Q),Y="https://finnhub.io/api/v1/",$="bqi7mrfrh5rcatj3upm0",z=function(){var e=Object(U.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(Y+"stock/symbol",{params:{token:$,exchange:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(U.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(Y+"quote",{params:{token:$,symbol:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(U.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(Y+"company-news",{params:{token:$,symbol:t,from:"2019-01-01",to:"2020-05-13"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(U.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(Y+"news",{params:{token:$,category:"general"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(U.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(Y+"stock/candle",{params:{token:$,symbol:t,resolution:"D",from:"1572651390",to:"1575243390"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ae(e){var t=Object(h.b)(),a=Object(h.c)((function(e){return e.loading})),c=e.location.search,l=new URLSearchParams(c),o=l.get("symbol"),i=l.get("desc"),s=Object(h.c)((function(e){return e.error}));return Object(n.useEffect)((function(){t(function(e){return function(t){t({type:"START_LOADING"}),Promise.all([V(e),Z(e),te(e)]).then((function(e){console.log(e),t({type:"FETCH_PRICE",payload:e[0].data}),t({type:"FETCH_COMPANYNEWS",payload:e[1].data}),t({type:"FETCH_CANDLE",payload:e[2].data}),t({type:"END_LOADING"})}))}}(o))}),[]),s?r.a.createElement(O,null):a?r.a.createElement(x.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",null,r.a.createElement(w,{title:i}),r.a.createElement(G,{symbol:o}),r.a.createElement(W.a,{defaultActiveKey:"Chart",onSelect:function(e){console.log(e)}},r.a.createElement(B.a,{eventKey:"News",title:"News"},r.a.createElement(M,null)),r.a.createElement(B.a,{eventKey:"Chart",title:"Chart"},r.a.createElement(P,null))))}var ne=a(38),re=a(83),ce=a(84),le=Object(ce.a)((function(e,t){switch(t.type){case"START_LOADING":e.loading=!0;break;case"CLEAR_ERROR":e.error=null;break;case"ERROR":e.loading=!1,e.error=t.payload;break;case"END_LOADING":e.loading=!1;break;case"START_STREAMING":e.streaming=!0;break;case"END_STREAMING":e.streaming=!1;break;case"FETCH_EXCHANGES":e.exchanges=t.payload;break;case"FETCH_PRICE":e.selected_price=t.payload;break;case"FETCH_COMPANYNEWS":e.selected_news=t.payload;break;case"FETCH_GENNEWS":e.news=t.payload;break;case"FETCH_CANDLE":e.selected_chart=t.payload}}),{exchanges:[],news:[],loading:!1,streaming:!1,error:null,selected_price:null,selected_news:null,selected_chart:null}),oe=Object(ne.c)(le,Object(ne.a)(re.a));oe.dispatch((function(e){e({type:"START_LOADING"}),Promise.all([{code:"KS",name:"KOSPI"},{code:"KQ",name:"KOSDAQ"},{code:"US",name:"US"},{code:"T",name:"Japan"},{code:"SS",name:"China"}].map(function(){var e=Object(U.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.code,e.t1=t.name,e.next=4,z(t.code);case 4:return e.t2=e.sent.data,e.abrupt("return",{code:e.t0,market:e.t1,companies:e.t2});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(t){e({type:"FETCH_EXCHANGES",payload:t}),ee().then((function(t){e({type:"FETCH_GENNEWS",payload:t.data}),e({type:"END_LOADING"})}))}))})),console.log("dispatch init data");var ie=function(){return r.a.createElement(h.a,{store:oe},r.a.createElement(o.a,null,r.a.createElement(f,null),r.a.createElement(_.a,{fluid:!0,className:"p-3"},r.a.createElement(i.a,{path:"/markets/:exchange",component:R}),r.a.createElement(i.a,{path:"/",exact:!0,component:C}),r.a.createElement(i.a,{path:"/companies",component:ae}),r.a.createElement(i.a,{path:"/news",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(122)},93:function(e,t,a){},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.fac2edec.chunk.js.map