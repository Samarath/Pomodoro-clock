(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),s=n.n(r),o=n(2),l=n(3),u=n(0),i=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("h2",null,e.name," length"),c.a.createElement("div",{className:"btns"},c.a.createElement("span",null,c.a.createElement(u.b.Provider,{value:{className:"icons"}},c.a.createElement("button",{onClick:e.func1},c.a.createElement(l.b,null)))),c.a.createElement("p",null,e.timer),c.a.createElement("span",null,c.a.createElement(u.b.Provider,{value:{className:"icons"}},c.a.createElement("button",{onClick:e.func2},c.a.createElement(l.a,null)))))))},m=function(e){var t,n;switch(e.seconds<10){case 9===e.seconds:t="09";break;case 8===e.seconds:t="08";break;case 7===e.seconds:t="07";break;case 6===e.seconds:t="06";break;case 5===e.seconds:t="05";break;case 4===e.seconds:t="04";break;case 3===e.seconds:t="03";break;case 2===e.seconds:t="02";break;case 1===e.seconds:t="01";break;case 0===e.seconds:t="00";break;default:return}switch(e.time<10){case 9===e.time:n="09";break;case 8===e.time:n="08";break;case 7===e.time:n="07";break;case 6===e.time:n="06";break;case 5===e.time:n="05";break;case 4===e.time:n="04";break;case 3===e.time:n="03";break;case 2===e.time:n="02";break;case 1===e.time:n="01";break;case 0===e.time:n="00";break;default:return}return c.a.createElement("div",{className:"clock"},c.a.createElement("p",null,e.names),c.a.createElement("div",{className:"counter"},c.a.createElement("span",null,e.time<10?n:e.time),":",c.a.createElement("span",null,e.seconds<10?t:e.seconds)))},b=(n(11),function(){var e=Object(a.useState)(5),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(25),b=Object(o.a)(s,2),f=b[0],d=b[1],E=Object(a.useState)(0),k=Object(o.a)(E,2),v=k[0],j=k[1],O=Object(a.useState)(!1),p=Object(o.a)(O,2),h=p[0],S=p[1],w=Object(a.useState)(f),g=Object(o.a)(w,2),N=g[0],P=g[1],C=Object(a.useState)(n),y=Object(o.a)(C,2),B=y[0],I=y[1],J=Object(a.useState)(!0),W=Object(o.a)(J,2),x=W[0],F=W[1],R=Object(a.useState)("Session"),$=Object(o.a)(R,2),q=$[0],z=$[1],A=Object(a.useState)(!0),D=Object(o.a)(A,2),G=D[0],H=D[1];!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){j(x?function(e){return 0===e&&(d((function(e){return 0===e?e:e-1})),j(59)),f<=0&&1===v&&(F(!1),H(!1),z("Break"),r(B)),e-1}:function(e){return 0===e&&(r((function(e){return 0===e?e:e-1})),j(59)),n<=0&&1===v&&(F(!0),H(!0),z("Session"),d(N)),e-1})}),h?1e3:null);return c.a.createElement("div",{id:"main"},c.a.createElement("h1",null,"Pomodoro Clock"),c.a.createElement("div",{id:"timer"},c.a.createElement(i,{name:"Break",func1:function(){r((function(e){return h?e:e<60?(G||j(0),I(e+1),e+1):(G||j(0),I(e),e)}))},func2:function(){r((function(e){return h?e:e>1?(G||j(0),I(e-1),e-1):(G||j(0),I(e),e)}))},timer:B,pausePlay:h}),c.a.createElement(i,{name:"Session",func1:function(){d((function(e){return h?e:e<60?(G&&j(0),P(e+1),e+1):(G&&j(0),P(e),e)}))},func2:function(){d((function(e){return h?e:e>1?(G&&j(0),P(e-1),e-1):(G&&j(0),P(e),e)}))},timer:N,pausePlay:h})),c.a.createElement(m,{time:G?f:n,seconds:v,names:q}),c.a.createElement("div",{className:"mainbtns"},c.a.createElement(u.b.Provider,{value:{className:"icons"}},c.a.createElement("button",{onClick:function(){S((function(e){return!e}))}},h?c.a.createElement(l.c,null):c.a.createElement(l.d,null)),c.a.createElement("button",{onClick:function(){I(5),r(5),d(25),S(!1),j(0),F(!0),z("Session"),P(25),H(!0)}},c.a.createElement(l.e,null)))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.ee427a57.chunk.js.map