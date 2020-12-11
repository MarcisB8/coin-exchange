(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{36:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t(1),a=t.n(r),i=t(23),o=t.n(i),u=(t(36),t(9)),l=t(6),s=t.n(l),j=t(11),b=t(5),d=t(2),f=t(3);function h(){var n=Object(d.a)(["\n  border: none;\n  width: 25vh;\n  background-color: rgb(40, 100, 130);\n"]);return h=function(){return n},n}function p(){var n=Object(d.a)(["\n  border: 1px solid #cccccc;\n  color: #cccccc;\n  background-color: rgb(40, 100, 130);\n"]);return p=function(){return n},n}function O(){var n=Object(d.a)(["\n  border: 1px solid #cccccc;\n  width: 25vh;\n"]);return O=function(){return n},n}var x=f.a.td(O()),v=f.a.button(p()),m=f.a.input(h());function g(n){var e=Object(r.useState)(),t=Object(b.a)(e,2),a=t[0],i=t[1],o=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("input",{placeholder:"Enter amount",value:a,onChange:function(n){i(n.target.value)}})})};return Object(c.jsxs)("tr",{children:[Object(c.jsx)(x,{children:n.name}),Object(c.jsx)(x,{children:n.ticker}),Object(c.jsxs)(x,{children:["$",n.price]}),n.showBalance?Object(c.jsx)(x,{children:n.balance}):null,Object(c.jsxs)(x,{children:[Object(c.jsx)("form",{action:"#",method:"POST",children:Object(c.jsx)(v,{onClick:function(e){e.preventDefault(),n.handleRefresh(n.tickerId)},children:"Refresh"})}),Object(c.jsxs)("form",{action:"#",method:"POST",children:[Object(c.jsx)(o,{type:"number",style:m}),Object(c.jsx)("br",{}),Object(c.jsx)(v,{onClick:function(e){e.preventDefault(),n.handleBuy(a,n.tickerId,n.price)},children:"Buy"}),Object(c.jsx)(v,{onClick:function(e){e.preventDefault(),n.handleSell(a,n.tickerId,n.price)},children:"Sell"})]})]})]})}function k(){var n=Object(d.a)(["\n    margin: 50px auto 50px auto;\n    display: inline-block;\n    font-size: 1.4rem;\n"]);return k=function(){return n},n}var w=f.a.table(k());function y(n){return Object(c.jsxs)(w,{className:"coin-table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Price"}),Object(c.jsx)("th",{children:"Ticker"}),n.showBalance?Object(c.jsx)("th",{children:"Balance"}):null,Object(c.jsx)("th",{children:"Actions"})]})}),Object(c.jsx)("tbody",{children:n.coinData.map((function(e){var t=e.key,r=e.name,a=e.ticker,i=e.price,o=e.balance;return Object(c.jsx)(g,{handleRefresh:n.handleRefresh,handleBuy:n.handleBuy,handleSell:n.handleSell,name:r,ticker:a,price:i,balance:o,showBalance:n.showBalance,tickerId:t},t)}))})]})}function B(){var n=Object(d.a)(["\n  border: 1px solid #cccccc;\n  color: #cccccc;\n  background-color: rgb(40, 100, 130);\n"]);return B=function(){return n},n}function S(){var n=Object(d.a)(["\n    font-size: 2rem;\n    text-align: left;\n    padding: 1.5rem 0 1.5rem 5rem;\n"]);return S=function(){return n},n}var C=f.a.section(S()),D=f.a.button(B());function F(n){var e=n.showBalance?"Hide Balance":"Show Balance",t=null;return n.showBalance&&(t=Object(c.jsxs)(c.Fragment,{children:[" Balance: $ ",n.amount," "]})),Object(c.jsxs)(C,{children:[t," ",Object(c.jsx)("br",{}),Object(c.jsx)(D,{onClick:n.handleToggle,children:e})]})}function I(){var n=Object(d.a)(["\n  border: 1px solid #cccccc;\n  color: #cccccc;\n  background-color: rgb(40, 100, 130);\n"]);return I=function(){return n},n}function T(){var n=Object(d.a)(["\n    font-size: 2rem;\n    text-align: left;\n    padding: 1.5rem 0 1.5rem 5rem;\n"]);return T=function(){return n},n}var P=f.a.section(T()),R=f.a.button(I());function z(n){return Object(c.jsx)(P,{children:Object(c.jsx)(R,{onClick:n.handleHelicopter,children:"Airdrop!"})})}var U=t(27),E=t(28),H=t(30),N=t(29),q=t.p+"static/media/logo.103b5fa1.svg";function A(){var n=Object(d.a)(["\n    font-size: 4rem;\n"]);return A=function(){return n},n}function J(){var n=Object(d.a)(["\n    height: 8rem;\n    pointer-events: none;\n"]);return J=function(){return n},n}function L(){var n=Object(d.a)(["\n    background-color: #282c34;\n    min-height: 20vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 36px;\n    color: white;\n"]);return L=function(){return n},n}var $=f.a.header(L()),M=f.a.img(J()),G=f.a.h1(A()),K=function(n){Object(H.a)(t,n);var e=Object(N.a)(t);function t(){return Object(U.a)(this,t),e.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return Object(c.jsxs)($,{children:[Object(c.jsx)(M,{src:q,alt:"React logo"}),Object(c.jsx)(G,{children:"Coin exchange"})]})}}]),t}(r.Component),Q=t(8),V=t.n(Q);function W(){var n=Object(d.a)(["\n    text-align: center;\n    background-color: rgb(30, 84, 119);\n    color: #cccccc;\n"]);return W=function(){return n},n}var X=f.a.div(W()),Y=function(n){return parseFloat(Number(n).toFixed(4))};var Z=function(n){var e=Object(r.useState)(1e4),t=Object(b.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(!0),l=Object(b.a)(o,2),d=l[0],f=l[1],h=Object(r.useState)([]),p=Object(b.a)(h,2),O=p[0],x=p[1],v=function(){var n=Object(j.a)(s.a.mark((function n(){var e,t,c,r,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V.a.get("https://api.coinpaprika.com/v1/coins");case 2:return e=n.sent,t=e.data.slice(0,10).map((function(n){return n.id})),"https://api.coinpaprika.com/v1/tickers/",c=t.map((function(n){return V.a.get("https://api.coinpaprika.com/v1/tickers/"+n)})),n.next=8,Promise.all(c);case 8:r=n.sent,a=r.map((function(n){var e=n.data;return{key:e.id,name:e.name,ticker:e.symbol,balance:0,price:Y(e.quotes.USD.price)}})),x(a);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(r.useEffect)((function(){0===O.length&&v()}));var m=function(){var n=Object(j.a)(s.a.mark((function n(e){var t,c,r,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/"+e,n.next=3,V.a.get(t);case 3:c=n.sent,r=Y(c.data.quotes.USD.price),a=O.map((function(n){var t=Object(u.a)({},n);return e===n.key&&(t.price=r),t})),x(a);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(c.jsxs)(X,{children:[Object(c.jsx)(K,{}),Object(c.jsx)(F,{amount:a,showBalance:d,handleToggle:function(){f((function(n){return!n}))}}),Object(c.jsx)(z,{handleHelicopter:function(){i((function(n){return n+1200}))}}),Object(c.jsx)(y,{coinData:O,showBalance:d,handleRefresh:m,handleBuy:function(n,e,t){var c=O.map((function(c){var r=Object(u.a)({},c);e===r.key&&(a>=t*n?!0===window.confirm("Buy "+n+" "+e+" for "+t*n+" USD?")&&(r.price=t,r.balance+=parseFloat(n),i(a-t*n)):alert("Insufficient funds"));return r}));x(c)},handleSell:function(n,e,t){var c=O.map((function(c){var r=Object(u.a)({},c);e===r.key&&(r.balance>=n?!0===window.confirm("Sell "+n+" "+e+" for "+t*n+" USD?")&&(r.price=t,r.balance-=n,i(a+t*n)):alert("Insufficient funds"));return r}));x(c)}})]})},_=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),a(n),i(n)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Z,{})}),document.getElementById("root")),_()}},[[55,1,2]]]);
//# sourceMappingURL=main.d114cf4e.chunk.js.map