"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3269],{3269:(G,A,_)=>{_.r(A),_.d(A,{startInputShims:()=>Y});var D=_(5861),y=_(6642),v=_(5730);const L=new WeakMap,b=(e,n,t,o=0)=>{L.has(e)!==t&&(t?C(e,n,o):M(e,n))},I=e=>e===e.getRootNode().activeElement,C=(e,n,t)=>{const o=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),L.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${s}px,${t}px,0) scale(0)`},M=(e,n)=>{const t=L.get(e);t&&(L.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},w="input, textarea, [no-blur], [contenteditable]",F=function(){var e=(0,D.Z)(function*(n,t,o,r,a){if(!o&&!r)return;const s=((e,n,t)=>{var o;return((e,n,t,o)=>{const r=e.top,a=e.bottom,s=n.top,i=s+15,f=.75*Math.min(n.bottom,o-t)-a,S=i-r,d=Math.round(f<0?-f:S>0?-S:0),c=Math.min(d,r-s),h=Math.abs(c)/.3;return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,h)),scrollPadding:t,inputSafeY:4-(r-i)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)})(n,o||r,a);if(o&&Math.abs(s.scrollAmount)<4)t.focus();else if(b(n,t,!0,s.inputSafeY),t.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let u;const i=function(){var f=(0,D.Z)(function*(){void 0!==u&&clearTimeout(u),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",i),o&&(yield(0,y.c)(o,0,s.scrollAmount,s.scrollDuration)),b(n,t,!1,s.inputSafeY),t.focus()});return function(){return f.apply(this,arguments)}}(),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",i)};if(o){const f=yield(0,y.g)(o);if(s.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",i),void(u=setTimeout(i,1e3))}i()}});return function(t,o,r,a,s){return e.apply(this,arguments)}}(),T="$ionPaddingTimer",P=(e,n)=>{var t,o;if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===o?void 0:o.tagName))return;const r=(0,y.f)(e);if(null===r)return;const a=r[T];a&&clearTimeout(a),n>0?r.style.setProperty("--keyboard-offset",`${n}px`):r[T]=setTimeout(()=>{r.style.setProperty("--keyboard-offset","0px")},120)},Y=e=>{const n=document,t=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),r=e.getBoolean("hideCaretOnScroll",!0),a=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),u=Array.from(n.querySelectorAll("ion-input, ion-textarea")),i=new WeakMap,l=new WeakMap,f=function(){var d=(0,D.Z)(function*(c){yield new Promise(g=>(0,v.c)(c,g));const p=c.shadowRoot||c,h=p.querySelector("input")||p.querySelector("textarea"),m=(0,y.f)(c),B=m?null:c.closest("ion-footer");if(h){if(m&&r&&!i.has(c)){const g=((e,n,t)=>{if(!t||!n)return()=>{};const o=u=>{I(n)&&b(e,n,u)},r=()=>b(e,n,!1),a=()=>o(!0),s=()=>o(!1);return(0,v.a)(t,"ionScrollStart",a),(0,v.a)(t,"ionScrollEnd",s),n.addEventListener("blur",r),()=>{(0,v.b)(t,"ionScrollStart",a),(0,v.b)(t,"ionScrollEnd",s),n.addEventListener("ionBlur",r)}})(c,h,m);i.set(c,g)}if("date"!==h.type&&"datetime-local"!==h.type&&(m||B)&&o&&!l.has(c)){const g=((e,n,t,o,r)=>{let a;const s=i=>{a=(0,v.p)(i)},u=i=>{if(!a)return;const l=(0,v.p)(i);!((e,n,t)=>{if(n&&t){const o=n.x-t.x,r=n.y-t.y;return o*o+r*r>e*e}return!1})(6,a,l)&&!I(n)&&F(e,n,t,o,r)};return e.addEventListener("touchstart",s,{capture:!0,passive:!0}),e.addEventListener("touchend",u,!0),()=>{e.removeEventListener("touchstart",s,!0),e.removeEventListener("touchend",u,!0)}})(c,h,m,B,t);l.set(c,g)}}});return function(p){return d.apply(this,arguments)}}();a&&(()=>{let e=!0,n=!1;const t=document;(0,v.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",s=>{if(n)return void(n=!1);const u=t.activeElement;if(!u||u.matches(w))return;const i=s.target;i!==u&&(i.matches(w)||i.closest(w)||(e=!1,setTimeout(()=>{e||u.blur()},50)))},!1)})(),s&&(e=>{const n=document;n.addEventListener("focusin",r=>{P(r.target,e)}),n.addEventListener("focusout",r=>{P(r.target,0)})})(t);for(const d of u)f(d);n.addEventListener("ionInputDidLoad",d=>{f(d.detail)}),n.addEventListener("ionInputDidUnload",d=>{(d=>{if(r){const c=i.get(d);c&&c(),i.delete(d)}if(o){const c=l.get(d);c&&c(),l.delete(d)}})(d.detail)})}}}]);