function w(){}const W=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function Z(){return Object.create(null)}function v(t){t.forEach(it)}function B(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Gt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function yt(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Wt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?gt(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,c){if(s){const r=st(e,n,i,c);t.p(r,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Vt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Xt(t){const e={};for(const n in t)e[n]=!0;return e}function Yt(t,e,n){return t.set(n),e}const rt=typeof window<"u";let J=rt?()=>window.performance.now():()=>Date.now(),K=rt?t=>requestAnimationFrame(t):w;const k=new Set;function lt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&K(lt)}function Q(t){let e;return k.size===0&&K(lt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let z=!1;function xt(){z=!0}function $t(){z=!1}function wt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:wt(1,s,u=>e[n[u]].claim_order,a))-1;i[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(r[l],_)}}function kt(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=U("style");return Nt(ct(t),e),e.sheet}function Nt(t,e){kt(t.head||t,e)}function Tt(t,e){if(z){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){t.insertBefore(e,n||null)}function St(t,e,n){z&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function ot(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function te(){return V(" ")}function ee(){return V("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ie(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Ct(t,i,e[i])}function se(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function jt(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,s=!1){at(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ft(t,e,n,i){return ut(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function re(t,e,n){return ft(t,e,n,U)}function le(t,e,n){return ft(t,e,n,ot)}function Mt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function ce(t){return Mt(t," ")}function tt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function oe(t,e){const n=tt(t,"HTML_TAG_START",0),i=tt(t,"HTML_TAG_END",n);if(n===i)return new et(void 0,e);at(t);const s=t.splice(n,i-n+1);L(s[0]),L(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new et(c,e)}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ot(n.nodeName):this.e=U(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(L)}}class et extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}}const O=new Map;let P=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:Et(e),rules:{}};return O.set(t,n),n}function R(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const y=e+(n-e)*c(m);a+=m*100+`%{${r(y,1-y)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ht(_)}_${o}`,u=ct(t),{stylesheet:d,rules:h}=O.get(u)||Lt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,P+=1,f}function q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),P-=s,P||Ot())}function Ot(){K(()=>{P||(O.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),O.clear())})}let C;function S(t){C=t}function N(){if(!C)throw new Error("Function called outside component initialization");return C}function _e(t){N().$$.on_mount.push(t)}function de(t){N().$$.after_update.push(t)}function he(t){N().$$.on_destroy.push(t)}function me(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=_t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function pe(t,e){return N().$$.context.set(t,e),e}function ge(t){return N().$$.context.get(t)}function ye(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const A=[],nt=[],D=[],G=[],dt=Promise.resolve();let I=!1;function ht(){I||(I=!0,dt.then(mt))}function be(){return ht(),dt}function E(t){D.push(t)}function xe(t){G.push(t)}const F=new Set;let M=0;function mt(){const t=C;do{for(;M<A.length;){const e=A[M];M++,S(e),Pt(e.$$)}for(S(null),A.length=0,M=0;nt.length;)nt.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];F.has(n)||(F.add(n),n())}D.length=0}while(A.length);for(;G.length;)G.pop()();I=!1,F.clear(),S(t)}function Pt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let T;function X(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function $(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const H=new Set;let g;function $e(){g={r:0,c:[],p:g}}function we(){g.r||v(g.c),g=g.p}function Rt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function ve(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),g.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Y={duration:0};function ke(t,e,n){let i=e(t,n),s=!1,c,r,o=0;function l(){c&&q(t,c)}function a(){const{delay:f=0,duration:u=300,easing:d=W,tick:h=w,css:p}=i||Y;p&&(c=R(t,0,1,u,f,d,p,o++)),h(0,1);const m=J()+f,y=m+u;r&&r.abort(),s=!0,E(()=>$(t,!0,"start")),r=Q(b=>{if(s){if(b>=y)return h(1,0),$(t,!0,"end"),l(),s=!1;if(b>=m){const x=d((b-m)/u);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,q(t),B(i)?(i=i(),X().then(a)):a())},invalidate(){_=!1},end(){s&&(l(),s=!1)}}}function Ee(t,e,n){let i=e(t,n),s=!0,c;const r=g;r.r+=1;function o(){const{delay:l=0,duration:a=300,easing:_=W,tick:f=w,css:u}=i||Y;u&&(c=R(t,1,0,a,l,_,u));const d=J()+l,h=d+a;E(()=>$(t,!1,"start")),Q(p=>{if(s){if(p>=h)return f(0,1),$(t,!1,"end"),--r.r||v(r.c),!1;if(p>=d){const m=_((p-d)/a);f(1-m,m)}}return s})}return B(i)?X().then(()=>{i=i(),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),s&&(c&&q(t,c),s=!1)}}}function Ne(t,e,n,i){let s=e(t,n),c=i?0:1,r=null,o=null,l=null;function a(){l&&q(t,l)}function _(u,d){const h=u.b-c;return d*=Math.abs(h),{a:c,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:p=W,tick:m=w,css:y}=s||Y,b={start:J()+d,b:u};u||(b.group=g,g.r+=1),r||o?o=b:(y&&(a(),l=R(t,c,u,h,d,p,y)),u&&m(0,1),r=_(b,h),E(()=>$(t,u,"start")),Q(x=>{if(o&&x>o.start&&(r=_(o,h),o=null,$(t,r.b,"start"),y&&(a(),l=R(t,c,r.b,r.duration,0,p,s.css))),r){if(x>=r.end)m(c=r.b,1-c),$(t,r.b,"end"),o||(r.b?a():--r.group.r||v(r.group.c)),r=null;else if(x>=r.start){const pt=x-r.start;c=r.a+r.d*p(pt/r.duration),m(c,1-c)}}return!!(r||o)}))}return{run(u){B(s)?X().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=o=null}}}const Te=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ae(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Se(t){return typeof t=="object"&&t!==null?t:{}}function Ce(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function je(t){t&&t.c()}function Me(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||E(()=>{const l=c.map(it).filter(B);r?r.push(...l):v(l),t.$$.on_mount=[]}),o.forEach(E)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(A.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function De(t,e,n,i,s,c,r,o=[-1]){const l=C;S(t);const a=t.$$={fragment:null,ctx:null,props:c,update:w,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&zt(t,f)),u}):[],a.update(),_=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){xt();const f=jt(e.target);a.fragment&&a.fragment.l(f),f.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&Rt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),$t(),mt()}S(l)}class He{$destroy(){Bt(this,1),this.$destroy=w}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ye as $,w as A,Tt as B,Wt as C,fe as D,ne as E,Kt as F,Qt as G,Jt as H,v as I,Te as J,nt as K,It as L,ot as M,le as N,se as O,Zt as P,Ce as Q,xe as R,He as S,Gt as T,et as U,oe as V,gt as W,ie as X,Ae as Y,Vt as Z,Ut as _,te as a,he as a0,me as a1,W as a2,E as a3,ke as a4,Ee as a5,Ne as a6,Xt as a7,Se as a8,bt as a9,pe as aa,Yt as ab,ge as ac,St as b,ce as c,we as d,ee as e,Rt as f,$e as g,L as h,De as i,de as j,U as k,re as l,jt as m,Ct as n,_e as o,ue as p,V as q,Mt as r,Ft as s,ve as t,ae as u,je as v,Me as w,qt as x,Bt as y,be as z};
