const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WelcomeView-C1K574dJ.js","assets/WelcomeView-CyIu6dnc.css","assets/PracticeView-DBfkQ8k3.js","assets/NavBar-BR4ACliH.js","assets/DashboardView-BL2wCEcd.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},rs=[],sn=()=>{},Zd=()=>!1,pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Sl=t=>t.startsWith("onUpdate:"),nt=Object.assign,bl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yy=Object.prototype.hasOwnProperty,Ae=(t,e)=>yy.call(t,e),oe=Array.isArray,ss=t=>Oi(t)==="[object Map]",ga=t=>Oi(t)==="[object Set]",Sh=t=>Oi(t)==="[object Date]",ue=t=>typeof t=="function",Ge=t=>typeof t=="string",fn=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",ep=t=>(be(t)||ue(t))&&ue(t.then)&&ue(t.catch),tp=Object.prototype.toString,Oi=t=>tp.call(t),Ey=t=>Oi(t).slice(8,-1),np=t=>Oi(t)==="[object Object]",Pl=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ii=Rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Ty=/-\w/g,yt=ma(t=>t.replace(Ty,e=>e.slice(1).toUpperCase())),vy=/\B([A-Z])/g,Fr=ma(t=>t.replace(vy,"-$1").toLowerCase()),_a=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),dc=ma(t=>t?`on${_a(t)}`:""),rn=(t,e)=>!Object.is(t,e),Eo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},rp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ya=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bh;const Ea=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?Ry(r):Cl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||be(t))return t}const Iy=/;(?![^(]*\))/g,wy=/:([^]+)/,Ay=/\/\*[^]*?\*\//g;function Ry(t){const e={};return t.replace(Ay,"").split(Iy).forEach(n=>{if(n){const r=n.split(wy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Nl(t){let e="";if(Ge(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Nl(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",by=Rl(Sy);function sp(t){return!!t||t===""}function Py(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ki(t[r],e[r]);return n}function ki(t,e){if(t===e)return!0;let n=Sh(t),r=Sh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=fn(t),r=fn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?Py(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ki(t[o],e[o]))return!1}}return String(t)===String(e)}function Cy(t,e){return t.findIndex(n=>ki(n,e))}const ip=t=>!!(t&&t.__v_isRef===!0),Ny=t=>Ge(t)?t:t==null?"":oe(t)||be(t)&&(t.toString===tp||!ue(t.toString))?ip(t)?Ny(t.value):JSON.stringify(t,op,2):String(t),op=(t,e)=>ip(e)?op(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[pc(r,i)+" =>"]=s,n),{})}:ga(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pc(n))}:fn(e)?pc(e):be(e)&&!oe(e)&&!np(e)?String(e):e,pc=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Vy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){this._on>0&&--this._on===0&&(It=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Dy(){return It}let Ne;const gc=new WeakSet;class ap{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gc.has(this)&&(gc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ph(this),up(this);const e=Ne,n=qt;Ne=this,qt=!0;try{return this.fn()}finally{hp(this),Ne=e,qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ol(e);this.deps=this.depsTail=void 0,Ph(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fc(this)&&this.run()}get dirty(){return Fc(this)}}let cp=0,oi,ai;function lp(t,e=!1){if(t.flags|=8,e){t.next=ai,ai=t;return}t.next=oi,oi=t}function Vl(){cp++}function Dl(){if(--cp>0)return;if(ai){let e=ai;for(ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oi;){let e=oi;for(oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ol(r),Oy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Fc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===yi)||(t.globalVersion=yi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Fc(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=qt;Ne=t,qt=!0;try{up(t);const s=t.fn(t._value);(e.version===0||rn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,qt=r,hp(t),t.flags&=-3}}function Ol(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ol(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Oy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let qt=!0;const dp=[];function Pn(){dp.push(qt),qt=!1}function Cn(){const t=dp.pop();qt=t===void 0?!0:t}function Ph(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let yi=0;class ky{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class kl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!qt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new ky(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,pp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,yi++,this.notify(e)}notify(e){Vl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Dl()}}}function pp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Uc=new WeakMap,br=Symbol(""),Bc=Symbol(""),Ei=Symbol("");function lt(t,e,n){if(qt&&Ne){let r=Uc.get(t);r||Uc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new kl),s.map=r,s.key=n),s.track()}}function In(t,e,n,r,s,i){const o=Uc.get(t);if(!o){yi++;return}const c=l=>{l&&l.trigger()};if(Vl(),e==="clear")o.forEach(c);else{const l=oe(t),h=l&&Pl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ei||!fn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Ei)),e){case"add":l?h&&c(o.get("length")):(c(o.get(br)),ss(t)&&c(o.get(Bc)));break;case"delete":l||(c(o.get(br)),ss(t)&&c(o.get(Bc)));break;case"set":ss(t)&&c(o.get(br));break}}Dl()}function Kr(t){const e=we(t);return e===t?e:(lt(e,"iterate",Ei),Mt(t)?e:e.map(Gt))}function Ta(t){return lt(t=we(t),"iterate",Ei),t}function tn(t,e){return Nn(t)?gs(Pr(t)?Gt(e):e):Gt(e)}const xy={__proto__:null,[Symbol.iterator](){return mc(this,Symbol.iterator,t=>tn(this,t))},concat(...t){return Kr(this).concat(...t.map(e=>oe(e)?Kr(e):e))},entries(){return mc(this,"entries",t=>(t[1]=tn(this,t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(r=>tn(this,r)),arguments)},find(t,e){return _n(this,"find",t,e,n=>tn(this,n),arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,n=>tn(this,n),arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return _c(this,"includes",t)},indexOf(...t){return _c(this,"indexOf",t)},join(t){return Kr(this).join(t)},lastIndexOf(...t){return _c(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return Ks(this,"pop")},push(...t){return Ks(this,"push",t)},reduce(t,...e){return Ch(this,"reduce",t,e)},reduceRight(t,...e){return Ch(this,"reduceRight",t,e)},shift(){return Ks(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return Ks(this,"splice",t)},toReversed(){return Kr(this).toReversed()},toSorted(t){return Kr(this).toSorted(t)},toSpliced(...t){return Kr(this).toSpliced(...t)},unshift(...t){return Ks(this,"unshift",t)},values(){return mc(this,"values",t=>tn(this,t))}};function mc(t,e,n){const r=Ta(t),s=r[e]();return r!==t&&!Mt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const My=Array.prototype;function _n(t,e,n,r,s,i){const o=Ta(t),c=o!==t&&!Mt(t),l=o[e];if(l!==My[e]){const p=l.apply(t,i);return c?Gt(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,tn(t,p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Ch(t,e,n,r){const s=Ta(t),i=s!==t&&!Mt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(h,f,p){return c&&(c=!1,h=tn(t,h)),n.call(this,h,tn(t,f),p,t)}):n.length>3&&(o=function(h,f,p){return n.call(this,h,f,p,t)}));const l=s[e](o,...r);return c?tn(t,l):l}function _c(t,e,n){const r=we(t);lt(r,"iterate",Ei);const s=r[e](...n);return(s===-1||s===!1)&&Ll(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function Ks(t,e,n=[]){Pn(),Vl();const r=we(t)[e].apply(t,n);return Dl(),Cn(),r}const Ly=Rl("__proto__,__v_isRef,__isVue"),gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn));function Fy(t){fn(t)||(t=String(t));const e=we(this);return lt(e,"has",t),e.hasOwnProperty(t)}class mp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zy:Tp:i?Ep:yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=xy[n]))return l;if(n==="hasOwnProperty")return Fy}const c=Reflect.get(e,n,ft(e)?e:r);if((fn(n)?gp.has(n):Ly(n))||(s||lt(e,"get",n),i))return c;if(ft(c)){const l=o&&Pl(n)?c:c.value;return s&&be(l)?$c(l):l}return be(c)?s?$c(c):va(c):c}}class _p extends mp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=oe(e)&&Pl(n);if(!this._isShallow){const h=Nn(i);if(!Mt(r)&&!Nn(r)&&(i=we(i),r=we(r)),!o&&ft(i)&&!ft(r))return h||(i.value=r),!0}const c=o?Number(n)<e.length:Ae(e,n),l=Reflect.set(e,n,r,ft(e)?e:s);return e===we(s)&&(c?rn(r,i)&&In(e,"set",n,r):In(e,"add",n,r)),l}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&In(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fn(n)||!gp.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",oe(e)?"length":br),Reflect.ownKeys(e)}}class Uy extends mp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const By=new _p,jy=new Uy,$y=new _p(!0);const jc=t=>t,co=t=>Reflect.getPrototypeOf(t);function qy(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=ss(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?jc:e?gs:Gt;return!e&&lt(i,"iterate",l?Bc:br),nt(Object.create(h),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function lo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Hy(t,e){const n={get(s){const i=this.__v_raw,o=we(i),c=we(s);t||(rn(s,c)&&lt(o,"get",s),lt(o,"get",c));const{has:l}=co(o),h=e?jc:t?gs:Gt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&lt(we(s),"iterate",br),s.size},has(s){const i=this.__v_raw,o=we(i),c=we(s);return t||(rn(s,c)&&lt(o,"has",s),lt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=we(c),h=e?jc:t?gs:Gt;return!t&&lt(l,"iterate",br),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return nt(n,t?{add:lo("add"),set:lo("set"),delete:lo("delete"),clear:lo("clear")}:{add(s){const i=we(this),o=co(i),c=we(s),l=!e&&!Mt(s)&&!Nn(s)?c:s;return o.has.call(i,l)||rn(s,l)&&o.has.call(i,s)||rn(c,l)&&o.has.call(i,c)||(i.add(l),In(i,"add",l,l)),this},set(s,i){!e&&!Mt(i)&&!Nn(i)&&(i=we(i));const o=we(this),{has:c,get:l}=co(o);let h=c.call(o,s);h||(s=we(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?rn(i,f)&&In(o,"set",s,i):In(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:c}=co(i);let l=o.call(i,s);l||(s=we(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&In(i,"delete",s,void 0),h},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&In(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=qy(s,t,e)}),n}function xl(t,e){const n=Hy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const Gy={get:xl(!1,!1)},Wy={get:xl(!1,!0)},Ky={get:xl(!0,!1)};const yp=new WeakMap,Ep=new WeakMap,Tp=new WeakMap,zy=new WeakMap;function Qy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jy(t){return t.__v_skip||!Object.isExtensible(t)?0:Qy(Ey(t))}function va(t){return Nn(t)?t:Ml(t,!1,By,Gy,yp)}function vp(t){return Ml(t,!1,$y,Wy,Ep)}function $c(t){return Ml(t,!0,jy,Ky,Tp)}function Ml(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Jy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Pr(t){return Nn(t)?Pr(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function Mt(t){return!!(t&&t.__v_isShallow)}function Ll(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Yy(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&rp(t,"__v_skip",!0),t}const Gt=t=>be(t)?va(t):t,gs=t=>be(t)?$c(t):t;function ft(t){return t?t.__v_isRef===!0:!1}function xi(t){return Ip(t,!1)}function Xy(t){return Ip(t,!0)}function Ip(t,e){return ft(t)?t:new Zy(t,e)}class Zy{constructor(e,n){this.dep=new kl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Mt(e)||Nn(e);e=r?e:we(e),rn(e,n)&&(this._rawValue=e,this._value=r?e:Gt(e),this.dep.trigger())}}function is(t){return ft(t)?t.value:t}const eE={get:(t,e,n)=>e==="__v_raw"?t:is(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function wp(t){return Pr(t)?t:new Proxy(t,eE)}class tE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new kl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return lp(this,!0),!0}get value(){const e=this.dep.track();return fp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nE(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new tE(r,s,n)}const uo={},Mo=new WeakMap;let Ir;function rE(t,e=!1,n=Ir){if(n){let r=Mo.get(n);r||Mo.set(n,r=[]),r.push(t)}}function sE(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=J=>s?J:Mt(J)||s===!1||s===0?wn(J,1):wn(J);let f,p,g,y,N=!1,V=!1;if(ft(t)?(p=()=>t.value,N=Mt(t)):Pr(t)?(p=()=>h(t),N=!0):oe(t)?(V=!0,N=t.some(J=>Pr(J)||Mt(J)),p=()=>t.map(J=>{if(ft(J))return J.value;if(Pr(J))return h(J);if(ue(J))return l?l(J,2):J()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){Pn();try{g()}finally{Cn()}}const J=Ir;Ir=f;try{return l?l(t,3,[y]):t(y)}finally{Ir=J}}:p=sn,e&&s){const J=p,ce=s===!0?1/0:s;p=()=>wn(J(),ce)}const L=Dy(),q=()=>{f.stop(),L&&L.active&&bl(L.effects,f)};if(i&&e){const J=e;e=(...ce)=>{J(...ce),q()}}let j=V?new Array(t.length).fill(uo):uo;const G=J=>{if(!(!(f.flags&1)||!f.dirty&&!J))if(e){const ce=f.run();if(s||N||(V?ce.some((ye,w)=>rn(ye,j[w])):rn(ce,j))){g&&g();const ye=Ir;Ir=f;try{const w=[ce,j===uo?void 0:V&&j[0]===uo?[]:j,y];j=ce,l?l(e,3,w):e(...w)}finally{Ir=ye}}}else f.run()};return c&&c(G),f=new ap(p),f.scheduler=o?()=>o(G,!1):G,y=J=>rE(J,!1,f),g=f.onStop=()=>{const J=Mo.get(f);if(J){if(l)l(J,4);else for(const ce of J)ce();Mo.delete(f)}},e?r?G(!0):j=f.run():o?o(G.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function wn(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ft(t))wn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)wn(t[r],e,n);else if(ga(t)||ss(t))t.forEach(r=>{wn(r,e,n)});else if(np(t)){for(const r in t)wn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&wn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ia(s,e,n)}}function dn(t,e,n,r){if(ue(t)){const s=Mi(t,e,n,r);return s&&ep(s)&&s.catch(i=>{Ia(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(dn(t[i],e,n,r));return s}}function Ia(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){Pn(),Mi(i,null,10,[t,l,h]),Cn();return}}iE(t,n,s,r,o)}function iE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Zt=-1;const os=[];let Kn=null,zr=0;const Ap=Promise.resolve();let Lo=null;function Fl(t){const e=Lo||Ap;return t?e.then(this?t.bind(this):t):e}function oE(t){let e=Zt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Ti(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ul(t){if(!(t.flags&1)){const e=Ti(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=Ti(n)?_t.push(t):_t.splice(oE(e),0,t),t.flags|=1,Rp()}}function Rp(){Lo||(Lo=Ap.then(bp))}function aE(t){oe(t)?os.push(...t):Kn&&t.id===-1?Kn.splice(zr+1,0,t):t.flags&1||(os.push(t),t.flags|=1),Rp()}function Nh(t,e,n=Zt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Sp(t){if(os.length){const e=[...new Set(os)].sort((n,r)=>Ti(n)-Ti(r));if(os.length=0,Kn){Kn.push(...e);return}for(Kn=e,zr=0;zr<Kn.length;zr++){const n=Kn[zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kn=null,zr=0}}const Ti=t=>t.id==null?t.flags&2?-1:1/0:t.id;function bp(t){try{for(Zt=0;Zt<_t.length;Zt++){const e=_t[Zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zt<_t.length;Zt++){const e=_t[Zt];e&&(e.flags&=-2)}Zt=-1,_t.length=0,Sp(),Lo=null,(_t.length||os.length)&&bp()}}let Vt=null,Pp=null;function Fo(t){const e=Vt;return Vt=t,Pp=t&&t.type.__scopeId||null,e}function cE(t,e=Vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&jo(-1);const i=Fo(e);let o;try{o=t(...s)}finally{Fo(i),r._d&&jo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xC(t,e){if(Vt===null)return t;const n=Sa(Vt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ce]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&wn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Pn(),dn(l,n,8,[t.el,c,t,e]),Cn())}}function To(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function on(t,e,n=!1){const r=hT();if(r||as){let s=as?as._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const lE=Symbol.for("v-scx"),uE=()=>on(lE);function vo(t,e,n){return Cp(t,e,n)}function Cp(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=nt({},n),l=e&&r||!e&&i!=="post";let h;if(Ii){if(i==="sync"){const y=uE();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=sn,y.resume=sn,y.pause=sn,y}}const f=ht;c.call=(y,N,V)=>dn(y,f,N,V);let p=!1;i==="post"?c.scheduler=y=>{vt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,N)=>{N?y():Ul(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const g=sE(t,e,c);return Ii&&(h?h.push(g):l&&g()),g}function hE(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?Np(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Li(this),c=Cp(s,i.bind(r),n);return o(),c}function Np(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const fE=Symbol("_vte"),dE=t=>t.__isTeleport,pE=Symbol("_leaveCb");function Bl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Bl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vp(t,e){return ue(t)?nt({name:t.name},e,{setup:t}):t}function Dp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Uo=new WeakMap;function ci(t,e,n,r,s=!1){if(oe(t)){t.forEach((V,L)=>ci(V,e&&(oe(e)?e[L]:e),n,r,s));return}if(li(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ci(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Sa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ce?c.refs={}:c.refs,p=c.setupState,g=we(p),y=p===Ce?Zd:V=>Vh(f,V)?!1:Ae(g,V),N=(V,L)=>!(L&&Vh(f,L));if(h!=null&&h!==l){if(Dh(e),Ge(h))f[h]=null,y(h)&&(p[h]=null);else if(ft(h)){const V=e;N(h,V.k)&&(h.value=null),V.k&&(f[V.k]=null)}}if(ue(l))Mi(l,c,12,[o,f]);else{const V=Ge(l),L=ft(l);if(V||L){const q=()=>{if(t.f){const j=V?y(l)?p[l]:f[l]:N()||!t.k?l.value:f[t.k];if(s)oe(j)&&bl(j,i);else if(oe(j))j.includes(i)||j.push(i);else if(V)f[l]=[i],y(l)&&(p[l]=f[l]);else{const G=[i];N(l,t.k)&&(l.value=G),t.k&&(f[t.k]=G)}}else V?(f[l]=o,y(l)&&(p[l]=o)):L&&(N(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const j=()=>{q(),Uo.delete(t)};j.id=-1,Uo.set(t,j),vt(j,n)}else Dh(t),q()}}}function Dh(t){const e=Uo.get(t);e&&(e.flags|=8,Uo.delete(t))}Ea().requestIdleCallback;Ea().cancelIdleCallback;const li=t=>!!t.type.__asyncLoader,Op=t=>t.type.__isKeepAlive;function gE(t,e){kp(t,"a",e)}function mE(t,e){kp(t,"da",e)}function kp(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Op(s.parent.vnode)&&_E(r,e,n,s),s=s.parent}}function _E(t,e,n,r){const s=wa(e,t,r,!0);xp(()=>{bl(r[e],s)},n)}function wa(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Pn();const c=Li(n),l=dn(e,n,t,o);return c(),Cn(),l});return r?s.unshift(i):s.push(i),i}}const Mn=t=>(e,n=ht)=>{(!Ii||t==="sp")&&wa(t,(...r)=>e(...r),n)},yE=Mn("bm"),EE=Mn("m"),TE=Mn("bu"),vE=Mn("u"),IE=Mn("bum"),xp=Mn("um"),wE=Mn("sp"),AE=Mn("rtg"),RE=Mn("rtc");function SE(t,e=ht){wa("ec",t,e)}const bE="components";function PE(t,e){return NE(bE,t,!0,e)||t}const CE=Symbol.for("v-ndc");function NE(t,e,n=!0,r=!1){const s=Vt||ht;if(s){const i=s.type;{const c=mT(i,!1);if(c&&(c===e||c===yt(e)||c===_a(yt(e))))return i}const o=Oh(s[t]||i[t],e)||Oh(s.appContext[t],e);return!o&&r?i:o}}function Oh(t,e){return t&&(t[e]||t[yt(e)]||t[_a(yt(e))])}function MC(t,e,n,r){let s;const i=n,o=oe(t);if(o||Ge(t)){const c=o&&Pr(t);let l=!1,h=!1;c&&(l=!Mt(t),h=Nn(t),t=Ta(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?gs(Gt(t[f])):Gt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(be(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const qc=t=>t?sg(t)?Sa(t):qc(t.parent):null,ui=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qc(t.parent),$root:t=>qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Lp(t),$forceUpdate:t=>t.f||(t.f=()=>{Ul(t.update)}),$nextTick:t=>t.n||(t.n=Fl.bind(t.proxy)),$watch:t=>hE.bind(t)}),yc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Ae(t,e),VE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(yc(r,e))return o[e]=1,r[e];if(s!==Ce&&Ae(s,e))return o[e]=2,s[e];if(Ae(i,e))return o[e]=3,i[e];if(n!==Ce&&Ae(n,e))return o[e]=4,n[e];Hc&&(o[e]=0)}}const h=ui[e];let f,p;if(h)return e==="$attrs"&&lt(t.attrs,"get",""),h(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&Ae(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ae(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return yc(s,e)?(s[e]=n,!0):r!==Ce&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ce&&c[0]!=="$"&&Ae(t,c)||yc(e,c)||Ae(i,c)||Ae(r,c)||Ae(ui,c)||Ae(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hc=!0;function DE(t){const e=Lp(t),n=t.proxy,r=t.ctx;Hc=!1,e.beforeCreate&&xh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:y,updated:N,activated:V,deactivated:L,beforeDestroy:q,beforeUnmount:j,destroyed:G,unmounted:J,render:ce,renderTracked:ye,renderTriggered:w,errorCaptured:E,serverPrefetch:I,expose:R,inheritAttrs:A,components:b,directives:T,filters:Be}=e;if(h&&OE(h,r,null),o)for(const ve in o){const _e=o[ve];ue(_e)&&(r[ve]=_e.bind(n))}if(s){const ve=s.call(n,n);be(ve)&&(t.data=va(ve))}if(Hc=!0,i)for(const ve in i){const _e=i[ve],Tt=ue(_e)?_e.bind(n,n):ue(_e.get)?_e.get.bind(n,n):sn,Qt=!ue(_e)&&ue(_e.set)?_e.set.bind(n):sn,bt=jt({get:Tt,set:Qt});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>bt.value,set:Xe=>bt.value=Xe})}if(c)for(const ve in c)Mp(c[ve],r,n,ve);if(l){const ve=ue(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(_e=>{To(_e,ve[_e])})}f&&xh(f,t,"c");function je(ve,_e){oe(_e)?_e.forEach(Tt=>ve(Tt.bind(n))):_e&&ve(_e.bind(n))}if(je(yE,p),je(EE,g),je(TE,y),je(vE,N),je(gE,V),je(mE,L),je(SE,E),je(RE,ye),je(AE,w),je(IE,j),je(xp,J),je(wE,I),oe(R))if(R.length){const ve=t.exposed||(t.exposed={});R.forEach(_e=>{Object.defineProperty(ve,_e,{get:()=>n[_e],set:Tt=>n[_e]=Tt,enumerable:!0})})}else t.exposed||(t.exposed={});ce&&t.render===sn&&(t.render=ce),A!=null&&(t.inheritAttrs=A),b&&(t.components=b),T&&(t.directives=T),I&&Dp(t)}function OE(t,e,n=sn){oe(t)&&(t=Gc(t));for(const r in t){const s=t[r];let i;be(s)?"default"in s?i=on(s.from||r,s.default,!0):i=on(s.from||r):i=on(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function xh(t,e,n){dn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mp(t,e,n,r){let s=r.includes(".")?Np(n,r):()=>n[r];if(Ge(t)){const i=e[t];ue(i)&&vo(s,i)}else if(ue(t))vo(s,t.bind(n));else if(be(t))if(oe(t))t.forEach(i=>Mp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&vo(s,i,t)}}function Lp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Bo(l,h,o,!0)),Bo(l,e,o)),be(e)&&i.set(e,l),l}function Bo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Bo(t,i,n,!0),s&&s.forEach(o=>Bo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=kE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const kE={data:Mh,props:Lh,emits:Lh,methods:Ys,computed:Ys,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Ys,directives:Ys,watch:ME,provide:Mh,inject:xE};function Mh(t,e){return e?t?function(){return nt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function xE(t,e){return Ys(Gc(t),Gc(e))}function Gc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?nt(Object.create(null),t,e):e}function Lh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:nt(Object.create(null),kh(t),kh(e??{})):e}function ME(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Fp(){return{app:null,config:{isNativeTag:Zd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let LE=0;function FE(t,e){return function(r,s=null){ue(r)||(r=nt({},r)),s!=null&&!be(s)&&(s=null);const i=Fp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:LE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(h,...p)):ue(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const y=h._ceVNode||Rt(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,f,g),l=!0,h._container=f,f.__vue_app__=h,Sa(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(dn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=as;as=h;try{return f()}finally{as=p}}};return h}}let as=null;const UE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yt(e)}Modifiers`]||t[`${Fr(e)}Modifiers`];function BE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&UE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ge(f)?f.trim():f)),o.number&&(s=n.map(ya)));let c,l=r[c=dc(e)]||r[c=dc(yt(e))];!l&&i&&(l=r[c=dc(Fr(e))]),l&&dn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,dn(h,t,6,s)}}const jE=new WeakMap;function Up(t,e,n=!1){const r=n?jE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=h=>{const f=Up(h,e,!0);f&&(c=!0,nt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(be(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):nt(o,i),be(t)&&r.set(t,o),o)}function Aa(t,e){return!t||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Fr(e))||Ae(t,e))}function Fh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:y,ctx:N,inheritAttrs:V}=t,L=Fo(t);let q,j;try{if(n.shapeFlag&4){const J=s||r,ce=J;q=nn(h.call(ce,J,f,p,y,g,N)),j=c}else{const J=e;q=nn(J.length>1?J(p,{attrs:c,slots:o,emit:l}):J(p,null)),j=e.props?c:$E(c)}}catch(J){hi.length=0,Ia(J,t,1),q=Rt(ir)}let G=q;if(j&&V!==!1){const J=Object.keys(j),{shapeFlag:ce}=G;J.length&&ce&7&&(i&&J.some(Sl)&&(j=qE(j,i)),G=ms(G,j,!1,!0))}return n.dirs&&(G=ms(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&Bl(G,n.transition),q=G,Fo(L),q}const $E=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},qE=(t,e)=>{const n={};for(const r in t)(!Sl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function HE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Uh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(Bp(o,r,g)&&!Aa(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Uh(r,o,h):!0:!!o;return!1}function Uh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Bp(e,t,i)&&!Aa(n,i))return!0}return!1}function Bp(t,e,n){const r=t[n],s=e[n];return n==="style"&&be(r)&&be(s)?!ki(r,s):r!==s}function GE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const jp={},$p=()=>Object.create(jp),qp=t=>Object.getPrototypeOf(t)===jp;function WE(t,e,n,r=!1){const s={},i=$p();t.propsDefaults=Object.create(null),Hp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:vp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function KE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=we(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Aa(t.emitsOptions,g))continue;const y=e[g];if(l)if(Ae(i,g))y!==i[g]&&(i[g]=y,h=!0);else{const N=yt(g);s[N]=Wc(l,c,N,y,t,!1)}else y!==i[g]&&(i[g]=y,h=!0)}}}else{Hp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Ae(e,p)&&((f=Fr(p))===p||!Ae(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Wc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],h=!0)}h&&In(t.attrs,"set","")}function Hp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ii(l))continue;const h=e[l];let f;s&&Ae(s,f=yt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Aa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=we(n),h=c||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Wc(s,l,p,h[p],t,!Ae(h,p))}}return o}function Wc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ae(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Li(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}const zE=new WeakMap;function Gp(t,e,n=!1){const r=n?zE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[g,y]=Gp(p,e,!0);nt(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return be(t)&&r.set(t,rs),rs;if(oe(i))for(let f=0;f<i.length;f++){const p=yt(i[f]);Bh(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=yt(f);if(Bh(p)){const g=i[f],y=o[p]=oe(g)||ue(g)?{type:g}:nt({},g),N=y.type;let V=!1,L=!0;if(oe(N))for(let q=0;q<N.length;++q){const j=N[q],G=ue(j)&&j.name;if(G==="Boolean"){V=!0;break}else G==="String"&&(L=!1)}else V=ue(N)&&N.name==="Boolean";y[0]=V,y[1]=L,(V||Ae(y,"default"))&&c.push(p)}}const h=[o,c];return be(t)&&r.set(t,h),h}function Bh(t){return t[0]!=="$"&&!ii(t)}const jl=t=>t==="_"||t==="_ctx"||t==="$stable",$l=t=>oe(t)?t.map(nn):[nn(t)],QE=(t,e,n)=>{if(e._n)return e;const r=cE((...s)=>$l(e(...s)),n);return r._c=!1,r},Wp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(jl(s))continue;const i=t[s];if(ue(i))e[s]=QE(s,i,r);else if(i!=null){const o=$l(i);e[s]=()=>o}}},Kp=(t,e)=>{const n=$l(e);t.slots.default=()=>n},zp=(t,e,n)=>{for(const r in e)(n||!jl(r))&&(t[r]=e[r])},JE=(t,e,n)=>{const r=t.slots=$p();if(t.vnode.shapeFlag&32){const s=e._;s?(zp(r,e,n),n&&rp(r,"_",s,!0)):Wp(e,r)}else e&&Kp(t,e)},YE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:zp(s,e,n):(i=!e.$stable,Wp(e,s)),o=e}else e&&(Kp(t,e),o={default:1});if(i)for(const c in s)!jl(c)&&o[c]==null&&delete s[c]},vt=nT;function XE(t){return ZE(t)}function ZE(t,e){const n=Ea();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:y=sn,insertStaticContent:N}=t,V=(_,v,S,D=null,F=null,O=null,W=void 0,$=null,B=!!v.dynamicChildren)=>{if(_===v)return;_&&!zs(_,v)&&(D=k(_),Xe(_,F,O,!0),_=null),v.patchFlag===-2&&(B=!1,v.dynamicChildren=null);const{type:U,ref:ne,shapeFlag:z}=v;switch(U){case Ra:L(_,v,S,D);break;case ir:q(_,v,S,D);break;case Io:_==null&&j(v,S,D,W);break;case Tn:b(_,v,S,D,F,O,W,$,B);break;default:z&1?ce(_,v,S,D,F,O,W,$,B):z&6?T(_,v,S,D,F,O,W,$,B):(z&64||z&128)&&U.process(_,v,S,D,F,O,W,$,B,Z)}ne!=null&&F?ci(ne,_&&_.ref,O,v||_,!v):ne==null&&_&&_.ref!=null&&ci(_.ref,null,O,_,!0)},L=(_,v,S,D)=>{if(_==null)r(v.el=c(v.children),S,D);else{const F=v.el=_.el;v.children!==_.children&&h(F,v.children)}},q=(_,v,S,D)=>{_==null?r(v.el=l(v.children||""),S,D):v.el=_.el},j=(_,v,S,D)=>{[_.el,_.anchor]=N(_.children,v,S,D,_.el,_.anchor)},G=({el:_,anchor:v},S,D)=>{let F;for(;_&&_!==v;)F=g(_),r(_,S,D),_=F;r(v,S,D)},J=({el:_,anchor:v})=>{let S;for(;_&&_!==v;)S=g(_),s(_),_=S;s(v)},ce=(_,v,S,D,F,O,W,$,B)=>{if(v.type==="svg"?W="svg":v.type==="math"&&(W="mathml"),_==null)ye(v,S,D,F,O,W,$,B);else{const U=_.el&&_.el._isVueCE?_.el:null;try{U&&U._beginPatch(),I(_,v,F,O,W,$,B)}finally{U&&U._endPatch()}}},ye=(_,v,S,D,F,O,W,$)=>{let B,U;const{props:ne,shapeFlag:z,transition:ee,dirs:re}=_;if(B=_.el=o(_.type,O,ne&&ne.is,ne),z&8?f(B,_.children):z&16&&E(_.children,B,null,D,F,Ec(_,O),W,$),re&&Tr(_,null,D,"created"),w(B,_,_.scopeId,W,D),ne){for(const Se in ne)Se!=="value"&&!ii(Se)&&i(B,Se,null,ne[Se],O,D);"value"in ne&&i(B,"value",null,ne.value,O),(U=ne.onVnodeBeforeMount)&&Xt(U,D,_)}re&&Tr(_,null,D,"beforeMount");const fe=eT(F,ee);fe&&ee.beforeEnter(B),r(B,v,S),((U=ne&&ne.onVnodeMounted)||fe||re)&&vt(()=>{U&&Xt(U,D,_),fe&&ee.enter(B),re&&Tr(_,null,D,"mounted")},F)},w=(_,v,S,D,F)=>{if(S&&y(_,S),D)for(let O=0;O<D.length;O++)y(_,D[O]);if(F){let O=F.subTree;if(v===O||Xp(O.type)&&(O.ssContent===v||O.ssFallback===v)){const W=F.vnode;w(_,W,W.scopeId,W.slotScopeIds,F.parent)}}},E=(_,v,S,D,F,O,W,$,B=0)=>{for(let U=B;U<_.length;U++){const ne=_[U]=$?vn(_[U]):nn(_[U]);V(null,ne,v,S,D,F,O,W,$)}},I=(_,v,S,D,F,O,W)=>{const $=v.el=_.el;let{patchFlag:B,dynamicChildren:U,dirs:ne}=v;B|=_.patchFlag&16;const z=_.props||Ce,ee=v.props||Ce;let re;if(S&&vr(S,!1),(re=ee.onVnodeBeforeUpdate)&&Xt(re,S,v,_),ne&&Tr(v,_,S,"beforeUpdate"),S&&vr(S,!0),(z.innerHTML&&ee.innerHTML==null||z.textContent&&ee.textContent==null)&&f($,""),U?R(_.dynamicChildren,U,$,S,D,Ec(v,F),O):W||_e(_,v,$,null,S,D,Ec(v,F),O,!1),B>0){if(B&16)A($,z,ee,S,F);else if(B&2&&z.class!==ee.class&&i($,"class",null,ee.class,F),B&4&&i($,"style",z.style,ee.style,F),B&8){const fe=v.dynamicProps;for(let Se=0;Se<fe.length;Se++){const Te=fe[Se],it=z[Te],ot=ee[Te];(ot!==it||Te==="value")&&i($,Te,it,ot,F,S)}}B&1&&_.children!==v.children&&f($,v.children)}else!W&&U==null&&A($,z,ee,S,F);((re=ee.onVnodeUpdated)||ne)&&vt(()=>{re&&Xt(re,S,v,_),ne&&Tr(v,_,S,"updated")},D)},R=(_,v,S,D,F,O,W)=>{for(let $=0;$<v.length;$++){const B=_[$],U=v[$],ne=B.el&&(B.type===Tn||!zs(B,U)||B.shapeFlag&198)?p(B.el):S;V(B,U,ne,null,D,F,O,W,!0)}},A=(_,v,S,D,F)=>{if(v!==S){if(v!==Ce)for(const O in v)!ii(O)&&!(O in S)&&i(_,O,v[O],null,F,D);for(const O in S){if(ii(O))continue;const W=S[O],$=v[O];W!==$&&O!=="value"&&i(_,O,$,W,F,D)}"value"in S&&i(_,"value",v.value,S.value,F)}},b=(_,v,S,D,F,O,W,$,B)=>{const U=v.el=_?_.el:c(""),ne=v.anchor=_?_.anchor:c("");let{patchFlag:z,dynamicChildren:ee,slotScopeIds:re}=v;re&&($=$?$.concat(re):re),_==null?(r(U,S,D),r(ne,S,D),E(v.children||[],S,ne,F,O,W,$,B)):z>0&&z&64&&ee&&_.dynamicChildren&&_.dynamicChildren.length===ee.length?(R(_.dynamicChildren,ee,S,F,O,W,$),(v.key!=null||F&&v===F.subTree)&&Qp(_,v,!0)):_e(_,v,S,ne,F,O,W,$,B)},T=(_,v,S,D,F,O,W,$,B)=>{v.slotScopeIds=$,_==null?v.shapeFlag&512?F.ctx.activate(v,S,D,W,B):Be(v,S,D,F,O,W,B):Et(_,v,B)},Be=(_,v,S,D,F,O,W)=>{const $=_.component=uT(_,D,F);if(Op(_)&&($.ctx.renderer=Z),fT($,!1,W),$.asyncDep){if(F&&F.registerDep($,je,W),!_.el){const B=$.subTree=Rt(ir);q(null,B,v,S),_.placeholder=B.el}}else je($,_,v,S,F,O,W)},Et=(_,v,S)=>{const D=v.component=_.component;if(HE(_,v,S))if(D.asyncDep&&!D.asyncResolved){ve(D,v,S);return}else D.next=v,D.update();else v.el=_.el,D.vnode=v},je=(_,v,S,D,F,O,W)=>{const $=()=>{if(_.isMounted){let{next:z,bu:ee,u:re,parent:fe,vnode:Se}=_;{const Ct=Jp(_);if(Ct){z&&(z.el=Se.el,ve(_,z,W)),Ct.asyncDep.then(()=>{vt(()=>{_.isUnmounted||U()},F)});return}}let Te=z,it;vr(_,!1),z?(z.el=Se.el,ve(_,z,W)):z=Se,ee&&Eo(ee),(it=z.props&&z.props.onVnodeBeforeUpdate)&&Xt(it,fe,z,Se),vr(_,!0);const ot=Fh(_),Pt=_.subTree;_.subTree=ot,V(Pt,ot,p(Pt.el),k(Pt),_,F,O),z.el=ot.el,Te===null&&GE(_,ot.el),re&&vt(re,F),(it=z.props&&z.props.onVnodeUpdated)&&vt(()=>Xt(it,fe,z,Se),F)}else{let z;const{el:ee,props:re}=v,{bm:fe,m:Se,parent:Te,root:it,type:ot}=_,Pt=li(v);vr(_,!1),fe&&Eo(fe),!Pt&&(z=re&&re.onVnodeBeforeMount)&&Xt(z,Te,v),vr(_,!0);{it.ce&&it.ce._hasShadowRoot()&&it.ce._injectChildStyle(ot,_.parent?_.parent.type:void 0);const Ct=_.subTree=Fh(_);V(null,Ct,S,D,_,F,O),v.el=Ct.el}if(Se&&vt(Se,F),!Pt&&(z=re&&re.onVnodeMounted)){const Ct=v;vt(()=>Xt(z,Te,Ct),F)}(v.shapeFlag&256||Te&&li(Te.vnode)&&Te.vnode.shapeFlag&256)&&_.a&&vt(_.a,F),_.isMounted=!0,v=S=D=null}};_.scope.on();const B=_.effect=new ap($);_.scope.off();const U=_.update=B.run.bind(B),ne=_.job=B.runIfDirty.bind(B);ne.i=_,ne.id=_.uid,B.scheduler=()=>Ul(ne),vr(_,!0),U()},ve=(_,v,S)=>{v.component=_;const D=_.vnode.props;_.vnode=v,_.next=null,KE(_,v.props,D,S),YE(_,v.children,S),Pn(),Nh(_),Cn()},_e=(_,v,S,D,F,O,W,$,B=!1)=>{const U=_&&_.children,ne=_?_.shapeFlag:0,z=v.children,{patchFlag:ee,shapeFlag:re}=v;if(ee>0){if(ee&128){Qt(U,z,S,D,F,O,W,$,B);return}else if(ee&256){Tt(U,z,S,D,F,O,W,$,B);return}}re&8?(ne&16&&st(U,F,O),z!==U&&f(S,z)):ne&16?re&16?Qt(U,z,S,D,F,O,W,$,B):st(U,F,O,!0):(ne&8&&f(S,""),re&16&&E(z,S,D,F,O,W,$,B))},Tt=(_,v,S,D,F,O,W,$,B)=>{_=_||rs,v=v||rs;const U=_.length,ne=v.length,z=Math.min(U,ne);let ee;for(ee=0;ee<z;ee++){const re=v[ee]=B?vn(v[ee]):nn(v[ee]);V(_[ee],re,S,null,F,O,W,$,B)}U>ne?st(_,F,O,!0,!1,z):E(v,S,D,F,O,W,$,B,z)},Qt=(_,v,S,D,F,O,W,$,B)=>{let U=0;const ne=v.length;let z=_.length-1,ee=ne-1;for(;U<=z&&U<=ee;){const re=_[U],fe=v[U]=B?vn(v[U]):nn(v[U]);if(zs(re,fe))V(re,fe,S,null,F,O,W,$,B);else break;U++}for(;U<=z&&U<=ee;){const re=_[z],fe=v[ee]=B?vn(v[ee]):nn(v[ee]);if(zs(re,fe))V(re,fe,S,null,F,O,W,$,B);else break;z--,ee--}if(U>z){if(U<=ee){const re=ee+1,fe=re<ne?v[re].el:D;for(;U<=ee;)V(null,v[U]=B?vn(v[U]):nn(v[U]),S,fe,F,O,W,$,B),U++}}else if(U>ee)for(;U<=z;)Xe(_[U],F,O,!0),U++;else{const re=U,fe=U,Se=new Map;for(U=fe;U<=ee;U++){const Ze=v[U]=B?vn(v[U]):nn(v[U]);Ze.key!=null&&Se.set(Ze.key,U)}let Te,it=0;const ot=ee-fe+1;let Pt=!1,Ct=0;const Bt=new Array(ot);for(U=0;U<ot;U++)Bt[U]=0;for(U=re;U<=z;U++){const Ze=_[U];if(it>=ot){Xe(Ze,F,O,!0);continue}let Qe;if(Ze.key!=null)Qe=Se.get(Ze.key);else for(Te=fe;Te<=ee;Te++)if(Bt[Te-fe]===0&&zs(Ze,v[Te])){Qe=Te;break}Qe===void 0?Xe(Ze,F,O,!0):(Bt[Qe-fe]=U+1,Qe>=Ct?Ct=Qe:Pt=!0,V(Ze,v[Qe],S,null,F,O,W,$,B),it++)}const qr=Pt?tT(Bt):rs;for(Te=qr.length-1,U=ot-1;U>=0;U--){const Ze=fe+U,Qe=v[Ze],Ds=v[Ze+1],gr=Ze+1<ne?Ds.el||Yp(Ds):D;Bt[U]===0?V(null,Qe,S,gr,F,O,W,$,B):Pt&&(Te<0||U!==qr[Te]?bt(Qe,S,gr,2):Te--)}}},bt=(_,v,S,D,F=null)=>{const{el:O,type:W,transition:$,children:B,shapeFlag:U}=_;if(U&6){bt(_.component.subTree,v,S,D);return}if(U&128){_.suspense.move(v,S,D);return}if(U&64){W.move(_,v,S,Z);return}if(W===Tn){r(O,v,S);for(let z=0;z<B.length;z++)bt(B[z],v,S,D);r(_.anchor,v,S);return}if(W===Io){G(_,v,S);return}if(D!==2&&U&1&&$)if(D===0)$.beforeEnter(O),r(O,v,S),vt(()=>$.enter(O),F);else{const{leave:z,delayLeave:ee,afterLeave:re}=$,fe=()=>{_.ctx.isUnmounted?s(O):r(O,v,S)},Se=()=>{O._isLeaving&&O[pE](!0),z(O,()=>{fe(),re&&re()})};ee?ee(O,fe,Se):Se()}else r(O,v,S)},Xe=(_,v,S,D=!1,F=!1)=>{const{type:O,props:W,ref:$,children:B,dynamicChildren:U,shapeFlag:ne,patchFlag:z,dirs:ee,cacheIndex:re}=_;if(z===-2&&(F=!1),$!=null&&(Pn(),ci($,null,S,_,!0),Cn()),re!=null&&(v.renderCache[re]=void 0),ne&256){v.ctx.deactivate(_);return}const fe=ne&1&&ee,Se=!li(_);let Te;if(Se&&(Te=W&&W.onVnodeBeforeUnmount)&&Xt(Te,v,_),ne&6)Ut(_.component,S,D);else{if(ne&128){_.suspense.unmount(S,D);return}fe&&Tr(_,null,v,"beforeUnmount"),ne&64?_.type.remove(_,v,S,Z,D):U&&!U.hasOnce&&(O!==Tn||z>0&&z&64)?st(U,v,S,!1,!0):(O===Tn&&z&384||!F&&ne&16)&&st(B,v,S),D&&mn(_)}(Se&&(Te=W&&W.onVnodeUnmounted)||fe)&&vt(()=>{Te&&Xt(Te,v,_),fe&&Tr(_,null,v,"unmounted")},S)},mn=_=>{const{type:v,el:S,anchor:D,transition:F}=_;if(v===Tn){Ft(S,D);return}if(v===Io){J(_);return}const O=()=>{s(S),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(_.shapeFlag&1&&F&&!F.persisted){const{leave:W,delayLeave:$}=F,B=()=>W(S,O);$?$(_.el,O,B):B()}else O()},Ft=(_,v)=>{let S;for(;_!==v;)S=g(_),s(_),_=S;s(v)},Ut=(_,v,S)=>{const{bum:D,scope:F,job:O,subTree:W,um:$,m:B,a:U}=_;jh(B),jh(U),D&&Eo(D),F.stop(),O&&(O.flags|=8,Xe(W,_,v,S)),$&&vt($,v),vt(()=>{_.isUnmounted=!0},v)},st=(_,v,S,D=!1,F=!1,O=0)=>{for(let W=O;W<_.length;W++)Xe(_[W],v,S,D,F)},k=_=>{if(_.shapeFlag&6)return k(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=g(_.anchor||_.el),S=v&&v[fE];return S?g(S):v};let Y=!1;const K=(_,v,S)=>{let D;_==null?v._vnode&&(Xe(v._vnode,null,null,!0),D=v._vnode.component):V(v._vnode||null,_,v,null,null,null,S),v._vnode=_,Y||(Y=!0,Nh(D),Sp(),Y=!1)},Z={p:V,um:Xe,m:bt,r:mn,mt:Be,mc:E,pc:_e,pbc:R,n:k,o:t};return{render:K,hydrate:void 0,createApp:FE(K)}}function Ec({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function eT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=vn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Qp(o,c)),c.type===Ra&&(c.patchFlag===-1&&(c=s[i]=vn(c)),c.el=o.el),c.type===ir&&!c.el&&(c.el=o.el)}}function tT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Jp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jp(e)}function jh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Yp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Yp(e.subTree):null}const Xp=t=>t.__isSuspense;function nT(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):aE(t)}const Tn=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),ir=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),hi=[];let Dt=null;function Zp(t=!1){hi.push(Dt=t?null:[])}function rT(){hi.pop(),Dt=hi[hi.length-1]||null}let vi=1;function jo(t,e=!1){vi+=t,t<0&&Dt&&e&&(Dt.hasOnce=!0)}function eg(t){return t.dynamicChildren=vi>0?Dt||rs:null,rT(),vi>0&&Dt&&Dt.push(t),t}function LC(t,e,n,r,s,i){return eg(rg(t,e,n,r,s,i,!0))}function tg(t,e,n,r,s){return eg(Rt(t,e,n,r,s,!0))}function $o(t){return t?t.__v_isVNode===!0:!1}function zs(t,e){return t.type===e.type&&t.key===e.key}const ng=({key:t})=>t??null,wo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||ft(t)||ue(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function rg(t,e=null,n=null,r=0,s=null,i=t===Tn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ng(e),ref:e&&wo(e),scopeId:Pp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return c?(ql(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),vi>0&&!o&&Dt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Dt.push(l),l}const Rt=sT;function sT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===CE)&&(t=ir),$o(t)){const c=ms(t,e,!0);return n&&ql(c,n),vi>0&&!i&&Dt&&(c.shapeFlag&6?Dt[Dt.indexOf(t)]=c:Dt.push(c)),c.patchFlag=-2,c}if(_T(t)&&(t=t.__vccOpts),e){e=iT(e);let{class:c,style:l}=e;c&&!Ge(c)&&(e.class=Nl(c)),be(l)&&(Ll(l)&&!oe(l)&&(l=nt({},l)),e.style=Cl(l))}const o=Ge(t)?1:Xp(t)?128:dE(t)?64:be(t)?4:ue(t)?2:0;return rg(t,e,n,r,s,o,i,!0)}function iT(t){return t?Ll(t)||qp(t)?nt({},t):t:null}function ms(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?aT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&ng(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(wo(e)):[i,wo(e)]:wo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ms(t.ssContent),ssFallback:t.ssFallback&&ms(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Bl(f,l.clone(f)),f}function oT(t=" ",e=0){return Rt(Ra,null,t,e)}function FC(t,e){const n=Rt(Io,null,t);return n.staticCount=e,n}function UC(t="",e=!1){return e?(Zp(),tg(ir,null,t)):Rt(ir,null,t)}function nn(t){return t==null||typeof t=="boolean"?Rt(ir):oe(t)?Rt(Tn,null,t.slice()):$o(t)?vn(t):Rt(Ra,null,String(t))}function vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ms(t)}function ql(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ql(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!qp(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),r&64?(n=16,e=[oT(e)]):n=8);t.children=e,t.shapeFlag|=n}function aT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Nl([e.class,r.class]));else if(s==="style")e.style=Cl([e.style,r.style]);else if(pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){dn(t,e,7,[n,r])}const cT=Fp();let lT=0;function uT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cT,i={uid:lT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gp(r,s),emitsOptions:Up(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=BE.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const hT=()=>ht||Vt;let qo,Kc;{const t=Ea(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};qo=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),Kc=e("__VUE_SSR_SETTERS__",n=>Ii=n)}const Li=t=>{const e=ht;return qo(t),t.scope.on(),()=>{t.scope.off(),qo(e)}},$h=()=>{ht&&ht.scope.off(),qo(null)};function sg(t){return t.vnode.shapeFlag&4}let Ii=!1;function fT(t,e=!1,n=!1){e&&Kc(e);const{props:r,children:s}=t.vnode,i=sg(t);WE(t,r,i,e),JE(t,s,n||e);const o=i?dT(t,e):void 0;return e&&Kc(!1),o}function dT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,VE);const{setup:r}=n;if(r){Pn();const s=t.setupContext=r.length>1?gT(t):null,i=Li(t),o=Mi(r,t,0,[t.props,s]),c=ep(o);if(Cn(),i(),(c||t.sp)&&!li(t)&&Dp(t),c){if(o.then($h,$h),e)return o.then(l=>{qh(t,l)}).catch(l=>{Ia(l,t,0)});t.asyncDep=o}else qh(t,o)}else ig(t)}function qh(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=wp(e)),ig(t)}function ig(t,e,n){const r=t.type;t.render||(t.render=r.render||sn);{const s=Li(t);Pn();try{DE(t)}finally{Cn(),s()}}}const pT={get(t,e){return lt(t,"get",""),t[e]}};function gT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,pT),slots:t.slots,emit:t.emit,expose:e}}function Sa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wp(Yy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ui)return ui[n](t)},has(e,n){return n in e||n in ui}})):t.proxy}function mT(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function _T(t){return ue(t)&&"__vccOpts"in t}const jt=(t,e)=>nE(t,e,Ii);function og(t,e,n){try{jo(-1);const r=arguments.length;return r===2?be(e)&&!oe(e)?$o(e)?Rt(t,null,[e]):Rt(t,e):Rt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$o(n)&&(n=[n]),Rt(t,e,n))}finally{jo(1)}}const yT="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zc;const Hh=typeof window<"u"&&window.trustedTypes;if(Hh)try{zc=Hh.createPolicy("vue",{createHTML:t=>t})}catch{}const ag=zc?t=>zc.createHTML(t):t=>t,ET="http://www.w3.org/2000/svg",TT="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,Gh=En&&En.createElement("template"),vT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(ET,t):e==="mathml"?En.createElementNS(TT,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gh.innerHTML=ag(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Gh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},IT=Symbol("_vtc");function wT(t,e,n){const r=t[IT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wh=Symbol("_vod"),AT=Symbol("_vsh"),RT=Symbol(""),ST=/(?:^|;)\s*display\s*:/;function bT(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ao(r,c,"")}else for(const o in e)n[o]==null&&Ao(r,o,"");for(const o in n)o==="display"&&(i=!0),Ao(r,o,n[o])}else if(s){if(e!==n){const o=r[RT];o&&(n+=";"+o),r.cssText=n,i=ST.test(n)}}else e&&t.removeAttribute("style");Wh in t&&(t[Wh]=i?r.display:"",t[AT]&&(r.display="none"))}const Kh=/\s*!important$/;function Ao(t,e,n){if(oe(n))n.forEach(r=>Ao(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=PT(t,e);Kh.test(n)?t.setProperty(Fr(r),n.replace(Kh,""),"important"):t[r]=n}}const zh=["Webkit","Moz","ms"],Tc={};function PT(t,e){const n=Tc[e];if(n)return n;let r=yt(e);if(r!=="filter"&&r in t)return Tc[e]=r;r=_a(r);for(let s=0;s<zh.length;s++){const i=zh[s]+r;if(i in t)return Tc[e]=i}return e}const Qh="http://www.w3.org/1999/xlink";function Jh(t,e,n,r,s,i=by(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qh,e.slice(6,e.length)):t.setAttributeNS(Qh,e,n):n==null||i&&!sp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fn(n)?String(n):n)}function Yh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ag(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=sp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ar(t,e,n,r){t.addEventListener(e,n,r)}function CT(t,e,n,r){t.removeEventListener(e,n,r)}const Xh=Symbol("_vei");function NT(t,e,n,r,s=null){const i=t[Xh]||(t[Xh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=VT(e);if(r){const h=i[e]=kT(r,s);Ar(t,c,h,l)}else o&&(CT(t,c,o,l),i[e]=void 0)}}const Zh=/(?:Once|Passive|Capture)$/;function VT(t){let e;if(Zh.test(t)){e={};let r;for(;r=t.match(Zh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let vc=0;const DT=Promise.resolve(),OT=()=>vc||(DT.then(()=>vc=0),vc=Date.now());function kT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dn(xT(r,n.value),e,5,[r])};return n.value=t,n.attached=OT(),n}function xT(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ef=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,MT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?wT(t,r,o):e==="style"?bT(t,n,r):pa(e)?Sl(e)||NT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):LT(t,e,r,o))?(Yh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jh(t,e,r,o,i,e!=="value")):t._isVueCE&&(FT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ge(r)))?Yh(t,yt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jh(t,e,r,o))};function LT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ef(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ef(e)&&Ge(n)?!1:e in t}function FT(t,e){const n=t._def.props;if(!n)return!1;const r=yt(e);return Array.isArray(n)?n.some(s=>yt(s)===r):Object.keys(n).some(s=>yt(s)===r)}const Ho=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Eo(e,n):e};function UT(t){t.target.composing=!0}function tf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cs=Symbol("_assign");function nf(t,e,n){return e&&(t=t.trim()),n&&(t=ya(t)),t}const BC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[cs]=Ho(s);const i=r||s.props&&s.props.type==="number";Ar(t,e?"change":"input",o=>{o.target.composing||t[cs](nf(t.value,n,i))}),(n||i)&&Ar(t,"change",()=>{t.value=nf(t.value,n,i)}),e||(Ar(t,"compositionstart",UT),Ar(t,"compositionend",tf),Ar(t,"change",tf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[cs]=Ho(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ya(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},jC={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ga(e);Ar(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ya(Go(o)):Go(o));t[cs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Fl(()=>{t._assigning=!1})}),t[cs]=Ho(r)},mounted(t,{value:e}){rf(t,e)},beforeUpdate(t,e,n){t[cs]=Ho(n)},updated(t,{value:e}){t._assigning||rf(t,e)}};function rf(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!ga(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Go(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=Cy(e,c)>-1}else o.selected=e.has(c);else if(ki(Go(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Go(t){return"_value"in t?t._value:t.value}const BT=["ctrl","shift","alt","meta"],jT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>BT.some(n=>t[`${n}Key`]&&!e.includes(n))},$C=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=jT[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},$T=nt({patchProp:MT},vT);let sf;function qT(){return sf||(sf=XE($T))}const HT=((...t)=>{const e=qT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=WT(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,GT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function GT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function WT(t){return Ge(t)?document.querySelector(t):t}const KT=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},zT={};function QT(t,e){const n=PE("RouterView");return Zp(),tg(n)}const JT=KT(zT,[["render",QT]]),YT="modulepreload",XT=function(t){return"/stephantech.github.io/"+t},of={},ho=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(h=>{if(h=XT(h),h in of)return;of[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":YT,f||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((y,N)=>{g.addEventListener("load",y),g.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const Qr=typeof document<"u";function cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ZT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cg(t.default)}const Ie=Object.assign;function Ic(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const fi=()=>{},Wt=Array.isArray;function af(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}let Me=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const lg=Symbol("");Me.MATCHER_NOT_FOUND+"",Me.NAVIGATION_GUARD_REDIRECT+"",Me.NAVIGATION_ABORTED+"",Me.NAVIGATION_CANCELLED+"",Me.NAVIGATION_DUPLICATED+"";function _s(t,e){return Ie(new Error,{type:t,[lg]:!0},e)}function yn(t,e){return t instanceof Error&&lg in t&&(e==null||!!(t.type&e))}const ev=["params","query","hash"];function tv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of ev)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const nv=Symbol(""),cf=Symbol(""),ba=Symbol(""),ug=Symbol(""),Qc=Symbol("");function qC(){return on(ba)}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const hg=/#/g,rv=/&/g,sv=/\//g,iv=/=/g,ov=/\?/g,fg=/\+/g,av=/%5B/g,cv=/%5D/g,dg=/%5E/g,lv=/%60/g,pg=/%7B/g,uv=/%7C/g,gg=/%7D/g,hv=/%20/g;function Hl(t){return t==null?"":encodeURI(""+t).replace(uv,"|").replace(av,"[").replace(cv,"]")}function fv(t){return Hl(t).replace(pg,"{").replace(gg,"}").replace(dg,"^")}function Jc(t){return Hl(t).replace(fg,"%2B").replace(hv,"+").replace(hg,"%23").replace(rv,"%26").replace(lv,"`").replace(pg,"{").replace(gg,"}").replace(dg,"^")}function dv(t){return Jc(t).replace(iv,"%3D")}function pv(t){return Hl(t).replace(hg,"%23").replace(ov,"%3F")}function gv(t){return pv(t).replace(sv,"%2F")}function wi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const mv=/\/$/,_v=t=>t.replace(mv,"");function wc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=vv(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:wi(o)}}function yv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ev(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ys(e.matched[r],n.matched[s])&&mg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!Tv(t[n],e[n]))return!1;return!0}function Tv(t,e){return Wt(t)?uf(t,e):Wt(e)?uf(e,t):(t&&t.valueOf())===(e&&e.valueOf())}function uf(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Yc=(function(t){return t.pop="pop",t.push="push",t})({}),Ac=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Iv(t){if(!t)if(Qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_v(t)}const wv=/^[^#]+#/;function Av(t,e){return t.replace(wv,"#")+e}function Rv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Pa=()=>({left:window.scrollX,top:window.scrollY});function Sv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Rv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hf(t,e){return(history.state?history.state.position-e:-1)+t}const Xc=new Map;function bv(t,e){Xc.set(t,e)}function Pv(t){const e=Xc.get(t);return Xc.delete(t),e}function Cv(t){return typeof t=="string"||t&&typeof t=="object"}function _g(t){return typeof t=="string"||typeof t=="symbol"}function Nv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(fg," "),i=s.indexOf("="),o=wi(i<0?s:s.slice(0,i)),c=i<0?null:wi(s.slice(i+1));if(o in e){let l=e[o];Wt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function ff(t){let e="";for(let n in t){const r=t[n];if(n=dv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(s=>s&&Jc(s)):[r&&Jc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Vv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(_s(Me.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):Cv(g)?l(_s(Me.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Rc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(cg(l)){const h=(l.__vccOpts||l)[e];h&&i.push(zn(h,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=ZT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const g=(p.__vccOpts||p)[e];return g&&zn(g,n,r,o,c,s)()}))}}return i}function Dv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>ys(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>ys(h,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let Ov=()=>location.protocol+"//"+location.host;function yg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),lf(c,"")}return lf(n,t)+r+s}function kv(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=yg(t,location),N=n.value,V=e.value;let L=0;if(g){if(n.value=y,e.value=g,o&&o===N){o=null;return}L=V?g.position-V.position:0}else r(y);s.forEach(q=>{q(n.value,N,{delta:L,type:Yc.pop,direction:L?L>0?Ac.forward:Ac.back:Ac.unknown})})};function l(){o=n.value}function h(g){s.push(g);const y=()=>{const N=s.indexOf(g);N>-1&&s.splice(N,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ie({},g.state,{scroll:Pa()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:p}}function df(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Pa():null}}function xv(t){const{history:e,location:n}=window,r={value:yg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:Ov()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(l,h){i(l,Ie({},e.state,df(s.value.back,l,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=l}function c(l,h){const f=Ie({},s.value,e.state,{forward:l,scroll:Pa()});i(f.current,f,!0),i(l,Ie({},df(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function Mv(t){t=Iv(t);const e=xv(t),n=kv(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ie({location:"",base:t,go:r,createHref:Av.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Lv(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Mv(t)}let Rr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ke=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ke||{});const Fv={type:Rr.Static,value:""},Uv=/[a-zA-Z0-9_]/;function Bv(t){if(!t)return[[]];if(t==="/")return[[Fv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=Ke.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===Ke.Static?i.push({type:Rr.Static,value:h}):n===Ke.Param||n===Ke.ParamRegExp||n===Ke.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Rr.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Ke.ParamRegExp){r=n,n=Ke.EscapeNext;continue}switch(n){case Ke.Static:l==="/"?(h&&p(),o()):l===":"?(p(),n=Ke.Param):g();break;case Ke.EscapeNext:g(),n=r;break;case Ke.Param:l==="("?n=Ke.ParamRegExp:Uv.test(l)?g():(p(),n=Ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Ke.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Ke.ParamRegExpEnd:f+=l;break;case Ke.ParamRegExpEnd:p(),n=Ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Ke.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const pf="[^/]+?",jv={sensitive:!1,strict:!1,start:!0,end:!0};var mt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(mt||{});const $v=/[.+*?^${}()[\]/\\]/g;function qv(t,e){const n=Ie({},jv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[mt.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let y=mt.Segment+(n.sensitive?mt.BonusCaseSensitive:0);if(g.type===Rr.Static)p||(s+="/"),s+=g.value.replace($v,"\\$&"),y+=mt.Static;else if(g.type===Rr.Param){const{value:N,repeatable:V,optional:L,regexp:q}=g;i.push({name:N,repeatable:V,optional:L});const j=q||pf;if(j!==pf){y+=mt.BonusCustomRegExp;try{new RegExp(`(${j})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${N}" (${j}): `+J.message)}}let G=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(G=L&&h.length<2?`(?:/${G})`:"/"+G),L&&(G+="?"),s+=G,y+=mt.Dynamic,L&&(y+=mt.BonusOptional),V&&(y+=mt.BonusRepeatable),j===".*"&&(y+=mt.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=mt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",N=i[g-1];p[N.name]=y&&N.repeatable?y.split("/"):y}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of g)if(y.type===Rr.Static)f+=y.value;else if(y.type===Rr.Param){const{value:N,repeatable:V,optional:L}=y,q=N in h?h[N]:"";if(Wt(q)&&!V)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const j=Wt(q)?q.join("/"):q;if(!j)if(L)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${N}"`);f+=j}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Hv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===mt.Static+mt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===mt.Static+mt.Segment?1:-1:0}function Eg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Hv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(gf(r))return 1;if(gf(s))return-1}return s.length-r.length}function gf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Gv={strict:!1,end:!0,sensitive:!1};function Wv(t,e,n){const r=qv(Bv(t.path),n),s=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kv(t,e){const n=[],r=new Map;e=af(Gv,e);function s(p){return r.get(p)}function i(p,g,y){const N=!y,V=_f(p);V.aliasOf=y&&y.record;const L=af(e,p),q=[V];if("alias"in p){const J=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of J)q.push(_f(Ie({},V,{components:y?y.record.components:V.components,path:ce,aliasOf:y?y.record:V})))}let j,G;for(const J of q){const{path:ce}=J;if(g&&ce[0]!=="/"){const ye=g.record.path,w=ye[ye.length-1]==="/"?"":"/";J.path=g.record.path+(ce&&w+ce)}if(j=Wv(J,g,L),y?y.alias.push(j):(G=G||j,G!==j&&G.alias.push(j),N&&p.name&&!yf(j)&&o(p.name)),Tg(j)&&l(j),V.children){const ye=V.children;for(let w=0;w<ye.length;w++)i(ye[w],j,y&&y.children[w])}y=y||j}return G?()=>{o(G)}:fi}function o(p){if(_g(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=Jv(p,n);n.splice(g,0,p),p.record.name&&!yf(p)&&r.set(p.record.name,p)}function h(p,g){let y,N={},V,L;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw _s(Me.MATCHER_NOT_FOUND,{location:p});L=y.record.name,N=Ie(mf(g.params,y.keys.filter(G=>!G.optional).concat(y.parent?y.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),p.params&&mf(p.params,y.keys.map(G=>G.name))),V=y.stringify(N)}else if(p.path!=null)V=p.path,y=n.find(G=>G.re.test(V)),y&&(N=y.parse(V),L=y.record.name);else{if(y=g.name?r.get(g.name):n.find(G=>G.re.test(g.path)),!y)throw _s(Me.MATCHER_NOT_FOUND,{location:p,currentLocation:g});L=y.record.name,N=Ie({},g.params,p.params),V=y.stringify(N)}const q=[];let j=y;for(;j;)q.unshift(j.record),j=j.parent;return{name:L,path:V,params:N,matched:q,meta:Qv(q)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _f(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:zv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function zv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qv(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function Jv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Eg(t,e[i])<0?r=i:n=i+1}const s=Yv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Yv(t){let e=t;for(;e=e.parent;)if(Tg(e)&&Eg(t,e)===0)return e}function Tg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ef(t){const e=on(ba),n=on(ug),r=jt(()=>{const l=is(t.to);return e.resolve(l)}),s=jt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ys.bind(null,f));if(g>-1)return g;const y=Tf(l[h-2]);return h>1&&Tf(f)===y&&p[p.length-1].path!==y?p.findIndex(ys.bind(null,l[h-2])):g}),i=jt(()=>s.value>-1&&nI(n.params,r.value.params)),o=jt(()=>s.value>-1&&s.value===n.matched.length-1&&mg(n.params,r.value.params));function c(l={}){if(tI(l)){const h=e[is(t.replace)?"replace":"push"](is(t.to)).catch(fi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:jt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Xv(t){return t.length===1?t[0]:t}const Zv=Vp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ef,setup(t,{slots:e}){const n=va(Ef(t)),{options:r}=on(ba),s=jt(()=>({[vf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Xv(e.default(n));return t.custom?i:og("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),eI=Zv;function tI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Tf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vf=(t,e,n)=>t??e??n,rI=Vp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=on(Qc),s=jt(()=>t.route||r.value),i=on(cf,0),o=jt(()=>{let h=is(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=jt(()=>s.value.matched[o.value]);To(cf,jt(()=>o.value+1)),To(nv,c),To(Qc,s);const l=xi();return vo(()=>[l.value,c.value,t.name],([h,f,p],[g,y,N])=>{f&&(f.instances[p]=h,y&&y!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),h&&f&&(!y||!ys(f,y)||!g)&&(f.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return If(n.default,{Component:g,route:h});const y=p.props[f],N=y?y===!0?h.params:typeof y=="function"?y(h):y:null,L=og(g,Ie({},N,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return If(n.default,{Component:L,route:h})||L}}});function If(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sI=rI;function iI(t){const e=Kv(t.routes,t),n=t.parseQuery||Nv,r=t.stringifyQuery||ff,s=t.history,i=Qs(),o=Qs(),c=Qs(),l=Xy(Gn);let h=Gn;Qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ic.bind(null,k=>""+k),p=Ic.bind(null,gv),g=Ic.bind(null,wi);function y(k,Y){let K,Z;return _g(k)?(K=e.getRecordMatcher(k),Z=Y):Z=k,e.addRoute(Z,K)}function N(k){const Y=e.getRecordMatcher(k);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(k=>k.record)}function L(k){return!!e.getRecordMatcher(k)}function q(k,Y){if(Y=Ie({},Y||l.value),typeof k=="string"){const S=wc(n,k,Y.path),D=e.resolve({path:S.path},Y),F=s.createHref(S.fullPath);return Ie(S,D,{params:g(D.params),hash:wi(S.hash),redirectedFrom:void 0,href:F})}let K;if(k.path!=null)K=Ie({},k,{path:wc(n,k.path,Y.path).path});else{const S=Ie({},k.params);for(const D in S)S[D]==null&&delete S[D];K=Ie({},k,{params:p(S)}),Y.params=p(Y.params)}const Z=e.resolve(K,Y),de=k.hash||"";Z.params=f(g(Z.params));const _=yv(r,Ie({},k,{hash:fv(de),path:Z.path})),v=s.createHref(_);return Ie({fullPath:_,hash:de,query:r===ff?Vv(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:v})}function j(k){return typeof k=="string"?wc(n,k,l.value.path):Ie({},k)}function G(k,Y){if(h!==k)return _s(Me.NAVIGATION_CANCELLED,{from:Y,to:k})}function J(k){return w(k)}function ce(k){return J(Ie(j(k),{replace:!0}))}function ye(k,Y){const K=k.matched[k.matched.length-1];if(K&&K.redirect){const{redirect:Z}=K;let de=typeof Z=="function"?Z(k,Y):Z;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=j(de):{path:de},de.params={}),Ie({query:k.query,hash:k.hash,params:de.path!=null?{}:k.params},de)}}function w(k,Y){const K=h=q(k),Z=l.value,de=k.state,_=k.force,v=k.replace===!0,S=ye(K,Z);if(S)return w(Ie(j(S),{state:typeof S=="object"?Ie({},de,S.state):de,force:_,replace:v}),Y||K);const D=K;D.redirectedFrom=Y;let F;return!_&&Ev(r,Z,K)&&(F=_s(Me.NAVIGATION_DUPLICATED,{to:D,from:Z}),bt(Z,Z,!0,!1)),(F?Promise.resolve(F):R(D,Z)).catch(O=>yn(O)?yn(O,Me.NAVIGATION_GUARD_REDIRECT)?O:Qt(O):_e(O,D,Z)).then(O=>{if(O){if(yn(O,Me.NAVIGATION_GUARD_REDIRECT))return w(Ie({replace:v},j(O.to),{state:typeof O.to=="object"?Ie({},de,O.to.state):de,force:_}),Y||D)}else O=b(D,Z,!0,v,de);return A(D,Z,O),O})}function E(k,Y){const K=G(k,Y);return K?Promise.reject(K):Promise.resolve()}function I(k){const Y=Ft.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(k):k()}function R(k,Y){let K;const[Z,de,_]=Dv(k,Y);K=Rc(Z.reverse(),"beforeRouteLeave",k,Y);for(const S of Z)S.leaveGuards.forEach(D=>{K.push(zn(D,k,Y))});const v=E.bind(null,k,Y);return K.push(v),st(K).then(()=>{K=[];for(const S of i.list())K.push(zn(S,k,Y));return K.push(v),st(K)}).then(()=>{K=Rc(de,"beforeRouteUpdate",k,Y);for(const S of de)S.updateGuards.forEach(D=>{K.push(zn(D,k,Y))});return K.push(v),st(K)}).then(()=>{K=[];for(const S of _)if(S.beforeEnter)if(Wt(S.beforeEnter))for(const D of S.beforeEnter)K.push(zn(D,k,Y));else K.push(zn(S.beforeEnter,k,Y));return K.push(v),st(K)}).then(()=>(k.matched.forEach(S=>S.enterCallbacks={}),K=Rc(_,"beforeRouteEnter",k,Y,I),K.push(v),st(K))).then(()=>{K=[];for(const S of o.list())K.push(zn(S,k,Y));return K.push(v),st(K)}).catch(S=>yn(S,Me.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function A(k,Y,K){c.list().forEach(Z=>I(()=>Z(k,Y,K)))}function b(k,Y,K,Z,de){const _=G(k,Y);if(_)return _;const v=Y===Gn,S=Qr?history.state:{};K&&(Z||v?s.replace(k.fullPath,Ie({scroll:v&&S&&S.scroll},de)):s.push(k.fullPath,de)),l.value=k,bt(k,Y,K,v),Qt()}let T;function Be(){T||(T=s.listen((k,Y,K)=>{if(!Ut.listening)return;const Z=q(k),de=ye(Z,Ut.currentRoute.value);if(de){w(Ie(de,{replace:!0,force:!0}),Z).catch(fi);return}h=Z;const _=l.value;Qr&&bv(hf(_.fullPath,K.delta),Pa()),R(Z,_).catch(v=>yn(v,Me.NAVIGATION_ABORTED|Me.NAVIGATION_CANCELLED)?v:yn(v,Me.NAVIGATION_GUARD_REDIRECT)?(w(Ie(j(v.to),{force:!0}),Z).then(S=>{yn(S,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&!K.delta&&K.type===Yc.pop&&s.go(-1,!1)}).catch(fi),Promise.reject()):(K.delta&&s.go(-K.delta,!1),_e(v,Z,_))).then(v=>{v=v||b(Z,_,!1),v&&(K.delta&&!yn(v,Me.NAVIGATION_CANCELLED)?s.go(-K.delta,!1):K.type===Yc.pop&&yn(v,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(Z,_,v)}).catch(fi)}))}let Et=Qs(),je=Qs(),ve;function _e(k,Y,K){Qt(k);const Z=je.list();return Z.length?Z.forEach(de=>de(k,Y,K)):console.error(k),Promise.reject(k)}function Tt(){return ve&&l.value!==Gn?Promise.resolve():new Promise((k,Y)=>{Et.add([k,Y])})}function Qt(k){return ve||(ve=!k,Be(),Et.list().forEach(([Y,K])=>k?K(k):Y()),Et.reset()),k}function bt(k,Y,K,Z){const{scrollBehavior:de}=t;if(!Qr||!de)return Promise.resolve();const _=!K&&Pv(hf(k.fullPath,0))||(Z||!K)&&history.state&&history.state.scroll||null;return Fl().then(()=>de(k,Y,_)).then(v=>v&&Sv(v)).catch(v=>_e(v,k,Y))}const Xe=k=>s.go(k);let mn;const Ft=new Set,Ut={currentRoute:l,listening:!0,addRoute:y,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:V,resolve:q,options:t,push:J,replace:ce,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:je.add,isReady:Tt,install(k){k.component("RouterLink",eI),k.component("RouterView",sI),k.config.globalProperties.$router=Ut,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>is(l)}),Qr&&!mn&&l.value===Gn&&(mn=!0,J(s.location).catch(Z=>{}));const Y={};for(const Z in Gn)Object.defineProperty(Y,Z,{get:()=>l.value[Z],enumerable:!0});k.provide(ba,Ut),k.provide(ug,vp(Y)),k.provide(Qc,l);const K=k.unmount;Ft.add(k),k.unmount=function(){Ft.delete(k),Ft.size<1&&(h=Gn,T&&T(),T=null,l.value=Gn,mn=!1,ve=!1),K()}}};function st(k){return k.reduce((Y,K)=>Y.then(()=>I(K)),Promise.resolve())}return Ut}const oI=()=>{};var wf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,y=h&63;l||(y=64,o||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new cI;const g=i<<2|c>>4;if(r.push(g),h!==64){const y=c<<4&240|h>>2;if(r.push(y),p!==64){const N=h<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lI=function(t){const e=vg(t);return Ig.encodeByteArray(e,!0)},Wo=function(t){return lI(t).replace(/\./g,"")},wg=function(t){try{return Ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=()=>uI().__FIREBASE_DEFAULTS__,fI=()=>{if(typeof process>"u"||typeof wf>"u")return;const t=wf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wg(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return oI()||hI()||fI()||dI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ag=t=>{var e,n;return(n=(e=Ca())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},pI=t=>{const e=Ag(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rg=()=>{var t;return(t=Ca())==null?void 0:t.config},Sg=t=>{var e;return(e=Ca())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function yI(){var e;const t=(e=Ca())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function II(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wI(){return!yI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AI(){try{return typeof indexedDB=="object"}catch{return!1}}function RI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SI,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,c,r)}}function bI(t,e){return t.replace(PI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const PI=/\{\$([^}]+)}/g;function CI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Af(i)&&Af(o)){if(!Vr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NI(t,e){const n=new VI(t,e);return n.subscribe.bind(n)}class VI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bg(t){return(await fetch(t,{credentials:"include"})).ok}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xI(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kI(t){return t===wr?void 0:t}function xI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const LI={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},FI=pe.INFO,UI={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},BI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=FI,this._logHandler=BI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const jI=(t,e)=>e.some(n=>t instanceof n);let Rf,Sf;function $I(){return Rf||(Rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qI(){return Sf||(Sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pg=new WeakMap,Zc=new WeakMap,Cg=new WeakMap,bc=new WeakMap,Wl=new WeakMap;function HI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pg.set(n,t)}).catch(()=>{}),Wl.set(e,t),e}function GI(t){if(Zc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zc.set(t,e)}let el={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WI(t){el=t(el)}function KI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return Cg.set(r,e.sort?e.sort():[e]),er(r)}:qI().includes(t)?function(...e){return t.apply(Pc(this),e),er(Pg.get(this))}:function(...e){return er(t.apply(Pc(this),e))}}function zI(t){return typeof t=="function"?KI(t):(t instanceof IDBTransaction&&GI(t),jI(t,$I())?new Proxy(t,el):t)}function er(t){if(t instanceof IDBRequest)return HI(t);if(bc.has(t))return bc.get(t);const e=zI(t);return e!==t&&(bc.set(t,e),Wl.set(e,t)),e}const Pc=t=>Wl.get(t);function QI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(er(o.result),l.oldVersion,l.newVersion,er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const JI=["get","getKey","getAll","getAllKeys","count"],YI=["put","add","delete","clear"],Cc=new Map;function bf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=YI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||JI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Cc.set(e,i),i}WI(t=>({...t,get:(e,n,r)=>bf(e,n)||t.get(e,n,r),has:(e,n)=>!!bf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tl="@firebase/app",Pf="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Gl("@firebase/app"),ew="@firebase/app-compat",tw="@firebase/analytics-compat",nw="@firebase/analytics",rw="@firebase/app-check-compat",sw="@firebase/app-check",iw="@firebase/auth",ow="@firebase/auth-compat",aw="@firebase/database",cw="@firebase/data-connect",lw="@firebase/database-compat",uw="@firebase/functions",hw="@firebase/functions-compat",fw="@firebase/installations",dw="@firebase/installations-compat",pw="@firebase/messaging",gw="@firebase/messaging-compat",mw="@firebase/performance",_w="@firebase/performance-compat",yw="@firebase/remote-config",Ew="@firebase/remote-config-compat",Tw="@firebase/storage",vw="@firebase/storage-compat",Iw="@firebase/firestore",ww="@firebase/ai",Aw="@firebase/firestore-compat",Rw="firebase",Sw="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="[DEFAULT]",bw={[tl]:"fire-core",[ew]:"fire-core-compat",[nw]:"fire-analytics",[tw]:"fire-analytics-compat",[sw]:"fire-app-check",[rw]:"fire-app-check-compat",[iw]:"fire-auth",[ow]:"fire-auth-compat",[aw]:"fire-rtdb",[cw]:"fire-data-connect",[lw]:"fire-rtdb-compat",[uw]:"fire-fn",[hw]:"fire-fn-compat",[fw]:"fire-iid",[dw]:"fire-iid-compat",[pw]:"fire-fcm",[gw]:"fire-fcm-compat",[mw]:"fire-perf",[_w]:"fire-perf-compat",[yw]:"fire-rc",[Ew]:"fire-rc-compat",[Tw]:"fire-gcs",[vw]:"fire-gcs-compat",[Iw]:"fire-fst",[Aw]:"fire-fst-compat",[ww]:"fire-vertex","fire-js":"fire-js",[Rw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Map,Pw=new Map,rl=new Map;function Cf(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(rl.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;rl.set(e,t);for(const n of Ko.values())Cf(n,t);for(const n of Pw.values())Cf(n,t);return!0}function Kl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Fi("app","Firebase",Cw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=Sw;function Ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:nl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw tr.create("bad-app-name",{appName:String(s)});if(n||(n=Rg()),!n)throw tr.create("no-options");const i=Ko.get(s);if(i){if(Vr(n,i.options)&&Vr(r,i.config))return i;throw tr.create("duplicate-app",{appName:s})}const o=new MI(s);for(const l of rl.values())o.addComponent(l);const c=new Nw(n,r,o);return Ko.set(s,c),c}function Vg(t=nl){const e=Ko.get(t);if(!e&&t===nl&&Rg())return Ng();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){let r=bw[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(o.join(" "));return}Es(new Dr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="firebase-heartbeat-database",Dw=1,Ai="firebase-heartbeat-store";let Nc=null;function Dg(){return Nc||(Nc=QI(Vw,Dw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ai)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function Ow(t){try{const n=(await Dg()).transaction(Ai),r=await n.objectStore(Ai).get(Og(t));return await n.done,r}catch(e){if(e instanceof Ln)Vn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function Nf(t,e){try{const r=(await Dg()).transaction(Ai,"readwrite");await r.objectStore(Ai).put(e,Og(t)),await r.done}catch(n){if(n instanceof Ln)Vn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function Og(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=1024,xw=30;class Mw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>xw){const o=Uw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vf(),{heartbeatsToSend:r,unsentEntries:s}=Lw(this._heartbeatsCache.heartbeats),i=Wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Vn.warn(n),""}}}function Vf(){return new Date().toISOString().substring(0,10)}function Lw(t,e=kw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Df(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Df(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AI()?RI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ow(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Nf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Nf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Df(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}function Uw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){Es(new Dr("platform-logger",e=>new XI(e),"PRIVATE")),Es(new Dr("heartbeat",e=>new Mw(e),"PRIVATE")),nr(tl,Pf,t),nr(tl,Pf,"esm2020"),nr("fire-js","")}Bw("");var jw="firebase",$w="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(jw,$w,"app");function kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qw=kg,xg=new Fi("auth","Firebase",kg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Gl("@firebase/auth");function Hw(t,...e){zo.logLevel<=pe.WARN&&zo.warn(`Auth (${bs}): ${t}`,...e)}function Ro(t,...e){zo.logLevel<=pe.ERROR&&zo.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw zl(t,...e)}function an(t,...e){return zl(t,...e)}function Mg(t,e,n){const r={...qw(),[e]:n};return new Fi("auth","Firebase",r).create(e,{appName:t.name})}function Sn(t){return Mg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xg.create(t,...e)}function se(t,e,...n){if(!t)throw zl(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function Dn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Gw(){return Of()==="http:"||Of()==="https:"}function Of(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gw()||TI()||"connection"in navigator)?navigator.onLine:!0}function Kw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=_I()||vI()}get(){return Ww()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jw=new ji(3e4,6e4);function Fn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function gn(t,e,n,r,s={}){return Fg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ui({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return EI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Bi(t.emulatorConfig.host)&&(h.credentials="include"),Lg.fetch()(await Ug(t,t.config.apiHost,n,c),h)})}async function Fg(t,e,n){t._canInitEmulator=!1;const r={...zw,...e};try{const s=new Xw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Mg(t,f,h);Kt(t,f)}}catch(s){if(s instanceof Ln)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function $i(t,e,n,r,s={}){const i=await gn(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ug(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ql(t.config,s):`${t.config.apiScheme}://${s}`;return Qw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Yw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),Jw.get())})}}function fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function kf(t){return t!==void 0&&t.enterprise!==void 0}class Zw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Yw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eA(t,e){return gn(t,"GET","/v2/recaptchaConfig",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){return gn(t,"POST","/v1/accounts:delete",e)}async function Qo(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nA(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),s=Jl(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:di(Vc(s.auth_time)),issuedAtTime:di(Vc(s.iat)),expirationTime:di(Vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function Jl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=wg(n);return s?JSON.parse(s):(Ro("Failed to decode base64 JWT payload"),null)}catch(s){return Ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xf(t){const e=Jl(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&rA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ts(t,Qo(e,{idToken:n}));se(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Bg(s.providerUserInfo):[],o=oA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new il(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function iA(t){const e=Ue(t);await Jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e){const n=await Fg(t,{},async()=>{const r=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ug(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Bi(t.emulatorConfig.host)&&(l.credentials="include"),Lg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cA(t,e){return gn(t,"POST","/v2/accounts:revokeToken",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=xf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ls;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new sA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new il(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nA(this,e)}reload(){return iA(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await Ts(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:y,providerData:N,stsTokenManager:V}=n;se(p&&V,e,"internal-error");const L=ls.fromJSON(this.name,V);se(typeof p=="string",e,"internal-error"),Wn(r,e.name),Wn(s,e.name),se(typeof g=="boolean",e,"internal-error"),se(typeof y=="boolean",e,"internal-error"),Wn(i,e.name),Wn(o,e.name),Wn(c,e.name),Wn(l,e.name),Wn(h,e.name),Wn(f,e.name);const q=new $t({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:L,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(q.providerData=N.map(j=>({...j}))),l&&(q._redirectEventId=l),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new ls;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Jo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ls;c.updateFromIdToken(r);const l=new $t({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new il(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Map;function Rn(t){Dn(t instanceof Function,"Expected a class definition");let e=Mf.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jg.type="NONE";const Lf=jg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=So(this.userKey,s.apiKey,i),this.fullPersistenceKey=So("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Qo(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(Rn(Lf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Rn(Lf);const o=So(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Qo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await $t._fromGetAccountInfoResponse(e,g,f)}else p=$t._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new us(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new us(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($g(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kg(e))return"Blackberry";if(zg(e))return"Webos";if(qg(e))return"Safari";if((e.includes("chrome/")||Hg(e))&&!e.includes("edge/"))return"Chrome";if(Wg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $g(t=dt()){return/firefox\//i.test(t)}function qg(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hg(t=dt()){return/crios\//i.test(t)}function Gg(t=dt()){return/iemobile/i.test(t)}function Wg(t=dt()){return/android/i.test(t)}function Kg(t=dt()){return/blackberry/i.test(t)}function zg(t=dt()){return/webos/i.test(t)}function Yl(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lA(t=dt()){var e;return Yl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uA(){return II()&&document.documentMode===10}function Qg(t=dt()){return Yl(t)||Wg(t)||zg(t)||Kg(t)||/windows phone/i.test(t)||Gg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e=[]){let n;switch(t){case"Browser":n=Ff(dt());break;case"Worker":n=`${Ff(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t,e={}){return gn(t,"GET","/v2/passwordPolicy",Fn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=6;class pA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uf(this),this.idTokenSubscription=new Uf(this),this.beforeStateQueue=new hA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qo(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(Sn(this));const n=e?Ue(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fA(this),n=new pA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Hw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fr(t){return Ue(t)}class Uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=NI(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(t){Na=t}function Yg(t){return Na.loadJS(t)}function _A(){return Na.recaptchaEnterpriseScript}function yA(){return Na.gapiScript}function EA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class TA{constructor(){this.enterprise=new vA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class vA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const IA="recaptcha-enterprise",Xg="NO_RECAPTCHA";class wA{constructor(e){this.type=IA,this.auth=fr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{eA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Zw(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;kf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Xg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new TA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&kf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_A();l.length!==0&&(l+=c),Yg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Bf(t,e,n,r=!1,s=!1){const i=new wA(t);let o;if(s)o=Xg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Yo(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Bf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Bf(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t,e){const n=Kl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Vr(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function RA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SA(t,e,n){const r=fr(t);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zg(e),{host:o,port:c}=bA(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(Vr(h,r.config.emulator)&&Vr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Bi(o)?bg(`${i}//${o}${l}`):PA()}function Zg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bA(t){const e=Zg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jf(o)}}}function jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function CA(t,e){return gn(t,"POST","/v1/accounts:update",e)}async function NA(t,e){return gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(t,e){return $i(t,"POST","/v1/accounts:signInWithPassword",Fn(t,e))}async function DA(t,e){return gn(t,"POST","/v1/accounts:sendOobCode",Fn(t,e))}async function OA(t,e){return DA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e){return $i(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}async function xA(t,e){return $i(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Xl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yo(e,n,"signInWithPassword",VA);case"emailLink":return kA(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yo(e,r,"signUpPassword",NA);case"emailLink":return xA(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return $i(t,"POST","/v1/accounts:signInWithIdp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="http://localhost";class Or extends Xl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Or(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FA(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,r=Xs(Zs(t)).deep_link_id;return(r?Xs(Zs(r)).link:null)||r||n||e||t}class Zl{constructor(e){const n=Xs(Zs(e)),r=n.apiKey??null,s=n.oobCode??null,i=LA(n.mode??null);se(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=FA(e);try{return new Zl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zl.parseLink(n);return se(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends em{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends qi{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends qi{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends qi{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e){return $i(t,"POST","/v1/accounts:signUp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=$f(r);return new kr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$f(r);return new kr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Ln{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xo(e,n,r,s)}}function tm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(t,i,e,r):i})}async function BA(t,e,n=!1){const r=await Ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e,n=!1){const{auth:r}=t;if(kt(r.app))return Promise.reject(Sn(r));const s="reauthenticate";try{const i=await Ts(t,tm(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=Jl(i.idToken);se(o,r,"internal-error");const{sub:c}=o;return se(t.uid===c,r,"user-mismatch"),kr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(t,e,n=!1){if(kt(t.app))return Promise.reject(Sn(t));const r="signIn",s=await tm(t,r,e),i=await kr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function jA(t,e){return rm(fr(t),e)}async function $A(t,e){return nm(Ue(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t){const e=fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qA(t,e,n){const r=fr(t);await Yo(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",OA)}async function HA(t,e,n){if(kt(t.app))return Promise.reject(Sn(t));const r=fr(t),o=await Yo(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&sm(t),l}),c=await kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function GA(t,e,n){return kt(t.app)?Promise.reject(Sn(t)):jA(Ue(t),Ur.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sm(t),r})}function WA(t,e){return KA(Ue(t),null,e)}async function KA(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await Ts(t,CA(r,i));await t._updateTokensIfNecessary(o,!0)}function zA(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function QA(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function JA(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function YA(t){return Ue(t).signOut()}const Zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=1e3,ZA=10;class om extends im{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}om.type="LOCAL";const eR=om;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am extends im{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}am.type="SESSION";const cm=am;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await tR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=eu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function rR(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function sR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function oR(){return lm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="firebaseLocalStorageDb",aR=1,ea="firebaseLocalStorage",hm="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([ea],e?"readwrite":"readonly").objectStore(ea)}function cR(){const t=indexedDB.deleteDatabase(um);return new Hi(t).toPromise()}function ol(){const t=indexedDB.open(um,aR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ea,{keyPath:hm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ea)?e(r):(r.close(),await cR(),e(await ol()))})})}async function qf(t,e,n){const r=Da(t,!0).put({[hm]:e,value:n});return new Hi(r).toPromise()}async function lR(t,e){const n=Da(t,!1).get(e),r=await new Hi(n).toPromise();return r===void 0?null:r.value}function Hf(t,e){const n=Da(t,!0).delete(e);return new Hi(n).toPromise()}const uR=800,hR=3;class fm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ol(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(oR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await sR(),!this.activeServiceWorker)return;this.sender=new nR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ol();return await qf(e,Zo,"1"),await Hf(e,Zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Da(s,!1).getAll();return new Hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fm.type="LOCAL";const fR=fm;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t,e){return e?Rn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Xl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pR(t){return rm(t.auth,new tu(t),t.bypassAuthState)}function gR(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),nm(n,new tu(t),t.bypassAuthState)}async function mR(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),BA(n,new tu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pR;case"linkViaPopup":case"linkViaRedirect":return mR;case"reauthViaPopup":case"reauthViaRedirect":return gR;default:Kt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new ji(2e3,1e4);class es extends dm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_R.get())};e()}}es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="pendingRedirect",bo=new Map;class ER extends dm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bo.get(this.auth._key());if(!e){try{const r=await TR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bo.set(this.auth._key(),e)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TR(t,e){const n=wR(e),r=IR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function vR(t,e){bo.set(t._key(),e)}function IR(t){return Rn(t._redirectPersistence)}function wR(t){return So(yR,t.config.apiKey,t.name)}async function AR(t,e,n=!1){if(kt(t.app))return Promise.reject(Sn(t));const r=fr(t),s=dR(r,e),o=await new ER(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=600*1e3;class SR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pm(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gf(e))}saveEventToCache(e){this.cachedEventUids.add(Gf(e)),this.lastProcessedEventTime=Date.now()}}function Gf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e={}){return gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NR=/^https?/;async function VR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PR(t);for(const n of e)try{if(DR(n))return}catch{}Kt(t,"unauthorized-domain")}function DR(t){const e=sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NR.test(n))return!1;if(CR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new ji(3e4,6e4);function Wf(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kR(t){return new Promise((e,n)=>{var s,i,o;function r(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),n(an(t,"network-request-failed"))},timeout:OR.get()})}if((i=(s=cn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=cn().gapi)!=null&&o.load)r();else{const c=EA("iframefcb");return cn()[c]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},Yg(`${yA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Po=null,e})}let Po=null;function xR(t){return Po=Po||kR(t),Po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new ji(5e3,15e3),LR="__/auth/iframe",FR="emulator/auth/iframe",UR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jR(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ql(e,FR):`https://${t.config.authDomain}/${LR}`,r={apiKey:e.apiKey,appName:t.name,v:bs},s=BR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ui(r).slice(1)}`}async function $R(t){const e=await xR(t),n=cn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:jR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),c=cn().setTimeout(()=>{i(o)},MR.get());function l(){cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HR=500,GR=600,WR="_blank",KR="http://localhost";class Kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zR(t,e,n,r=HR,s=GR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...qR,width:r.toString(),height:s.toString(),top:i,left:o},h=dt().toLowerCase();n&&(c=Hg(h)?WR:n),$g(h)&&(e=e||KR,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[y,N])=>`${g}${y}=${N},`,"");if(lA(h)&&c!=="_self")return QR(e||"",c),new Kf(null);const p=window.open(e||"",c,f);se(p,t,"popup-blocked");try{p.focus()}catch{}return new Kf(p)}function QR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="__/auth/handler",YR="emulator/auth/handler",XR=encodeURIComponent("fac");async function zf(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:s};if(e instanceof em){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof qi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${XR}=${encodeURIComponent(l)}`:"";return`${ZR(t)}?${Ui(c).slice(1)}${h}`}function ZR({config:t}){return t.emulator?Ql(t,YR):`https://${t.authDomain}/${JR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="webStorageSupport";class eS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cm,this._completeRedirectFn=AR,this._overrideRedirectResult=vR}async _openPopup(e,n,r,s){var o;Dn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await zf(e,n,r,sl(),s);return zR(e,i,eu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zf(e,n,r,sl(),s);return rR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $R(e),r=new SR(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Dc];i!==void 0&&n(!!i),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qg()||qg()||Yl()}}const tS=eS;var Qf="@firebase/auth",Jf="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sS(t){Es(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jg(t)},h=new gA(r,s,i,l);return RA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new Dr("auth-internal",e=>{const n=fr(e.getProvider("auth").getImmediate());return(r=>new nS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(Qf,Jf,rS(t)),nr(Qf,Jf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=300,oS=Sg("authIdTokenMaxAge")||iS;let Yf=null;const aS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oS)return;const s=n==null?void 0:n.token;Yf!==s&&(Yf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cS(t=Vg()){const e=Kl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AA(t,{popupRedirectResolver:tS,persistence:[fR,eR,cm]}),r=Sg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=aS(i.toString());QA(n,o,()=>o(n.currentUser)),zA(n,c=>o(c))}}const s=Ag("auth");return s&&SA(n,`http://${s}`),n}function lS(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}mA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sS("Browser");var Xf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rr,gm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function I(){}I.prototype=E.prototype,w.F=E.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(R,A,b){for(var T=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)T[Be-2]=arguments[Be];return E.prototype[A].apply(R,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,E,I){I||(I=0);const R=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)R[A]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(A=0;A<16;++A)R[A]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=w.g[0],I=w.g[1],A=w.g[2];let b=w.g[3],T;T=E+(b^I&(A^b))+R[0]+3614090360&4294967295,E=I+(T<<7&4294967295|T>>>25),T=b+(A^E&(I^A))+R[1]+3905402710&4294967295,b=E+(T<<12&4294967295|T>>>20),T=A+(I^b&(E^I))+R[2]+606105819&4294967295,A=b+(T<<17&4294967295|T>>>15),T=I+(E^A&(b^E))+R[3]+3250441966&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(b^I&(A^b))+R[4]+4118548399&4294967295,E=I+(T<<7&4294967295|T>>>25),T=b+(A^E&(I^A))+R[5]+1200080426&4294967295,b=E+(T<<12&4294967295|T>>>20),T=A+(I^b&(E^I))+R[6]+2821735955&4294967295,A=b+(T<<17&4294967295|T>>>15),T=I+(E^A&(b^E))+R[7]+4249261313&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(b^I&(A^b))+R[8]+1770035416&4294967295,E=I+(T<<7&4294967295|T>>>25),T=b+(A^E&(I^A))+R[9]+2336552879&4294967295,b=E+(T<<12&4294967295|T>>>20),T=A+(I^b&(E^I))+R[10]+4294925233&4294967295,A=b+(T<<17&4294967295|T>>>15),T=I+(E^A&(b^E))+R[11]+2304563134&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(b^I&(A^b))+R[12]+1804603682&4294967295,E=I+(T<<7&4294967295|T>>>25),T=b+(A^E&(I^A))+R[13]+4254626195&4294967295,b=E+(T<<12&4294967295|T>>>20),T=A+(I^b&(E^I))+R[14]+2792965006&4294967295,A=b+(T<<17&4294967295|T>>>15),T=I+(E^A&(b^E))+R[15]+1236535329&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(A^b&(I^A))+R[1]+4129170786&4294967295,E=I+(T<<5&4294967295|T>>>27),T=b+(I^A&(E^I))+R[6]+3225465664&4294967295,b=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(b^E))+R[11]+643717713&4294967295,A=b+(T<<14&4294967295|T>>>18),T=I+(b^E&(A^b))+R[0]+3921069994&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(A^b&(I^A))+R[5]+3593408605&4294967295,E=I+(T<<5&4294967295|T>>>27),T=b+(I^A&(E^I))+R[10]+38016083&4294967295,b=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(b^E))+R[15]+3634488961&4294967295,A=b+(T<<14&4294967295|T>>>18),T=I+(b^E&(A^b))+R[4]+3889429448&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(A^b&(I^A))+R[9]+568446438&4294967295,E=I+(T<<5&4294967295|T>>>27),T=b+(I^A&(E^I))+R[14]+3275163606&4294967295,b=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(b^E))+R[3]+4107603335&4294967295,A=b+(T<<14&4294967295|T>>>18),T=I+(b^E&(A^b))+R[8]+1163531501&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(A^b&(I^A))+R[13]+2850285829&4294967295,E=I+(T<<5&4294967295|T>>>27),T=b+(I^A&(E^I))+R[2]+4243563512&4294967295,b=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(b^E))+R[7]+1735328473&4294967295,A=b+(T<<14&4294967295|T>>>18),T=I+(b^E&(A^b))+R[12]+2368359562&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(I^A^b)+R[5]+4294588738&4294967295,E=I+(T<<4&4294967295|T>>>28),T=b+(E^I^A)+R[8]+2272392833&4294967295,b=E+(T<<11&4294967295|T>>>21),T=A+(b^E^I)+R[11]+1839030562&4294967295,A=b+(T<<16&4294967295|T>>>16),T=I+(A^b^E)+R[14]+4259657740&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(I^A^b)+R[1]+2763975236&4294967295,E=I+(T<<4&4294967295|T>>>28),T=b+(E^I^A)+R[4]+1272893353&4294967295,b=E+(T<<11&4294967295|T>>>21),T=A+(b^E^I)+R[7]+4139469664&4294967295,A=b+(T<<16&4294967295|T>>>16),T=I+(A^b^E)+R[10]+3200236656&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(I^A^b)+R[13]+681279174&4294967295,E=I+(T<<4&4294967295|T>>>28),T=b+(E^I^A)+R[0]+3936430074&4294967295,b=E+(T<<11&4294967295|T>>>21),T=A+(b^E^I)+R[3]+3572445317&4294967295,A=b+(T<<16&4294967295|T>>>16),T=I+(A^b^E)+R[6]+76029189&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(I^A^b)+R[9]+3654602809&4294967295,E=I+(T<<4&4294967295|T>>>28),T=b+(E^I^A)+R[12]+3873151461&4294967295,b=E+(T<<11&4294967295|T>>>21),T=A+(b^E^I)+R[15]+530742520&4294967295,A=b+(T<<16&4294967295|T>>>16),T=I+(A^b^E)+R[2]+3299628645&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(A^(I|~b))+R[0]+4096336452&4294967295,E=I+(T<<6&4294967295|T>>>26),T=b+(I^(E|~A))+R[7]+1126891415&4294967295,b=E+(T<<10&4294967295|T>>>22),T=A+(E^(b|~I))+R[14]+2878612391&4294967295,A=b+(T<<15&4294967295|T>>>17),T=I+(b^(A|~E))+R[5]+4237533241&4294967295,I=A+(T<<21&4294967295|T>>>11),T=E+(A^(I|~b))+R[12]+1700485571&4294967295,E=I+(T<<6&4294967295|T>>>26),T=b+(I^(E|~A))+R[3]+2399980690&4294967295,b=E+(T<<10&4294967295|T>>>22),T=A+(E^(b|~I))+R[10]+4293915773&4294967295,A=b+(T<<15&4294967295|T>>>17),T=I+(b^(A|~E))+R[1]+2240044497&4294967295,I=A+(T<<21&4294967295|T>>>11),T=E+(A^(I|~b))+R[8]+1873313359&4294967295,E=I+(T<<6&4294967295|T>>>26),T=b+(I^(E|~A))+R[15]+4264355552&4294967295,b=E+(T<<10&4294967295|T>>>22),T=A+(E^(b|~I))+R[6]+2734768916&4294967295,A=b+(T<<15&4294967295|T>>>17),T=I+(b^(A|~E))+R[13]+1309151649&4294967295,I=A+(T<<21&4294967295|T>>>11),T=E+(A^(I|~b))+R[4]+4149444226&4294967295,E=I+(T<<6&4294967295|T>>>26),T=b+(I^(E|~A))+R[11]+3174756917&4294967295,b=E+(T<<10&4294967295|T>>>22),T=A+(E^(b|~I))+R[2]+718787259&4294967295,A=b+(T<<15&4294967295|T>>>17),T=I+(b^(A|~E))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,E){E===void 0&&(E=w.length);const I=E-this.blockSize,R=this.C;let A=this.h,b=0;for(;b<E;){if(A==0)for(;b<=I;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<E;)if(R[A++]=w.charCodeAt(b++),A==this.blockSize){s(this,R),A=0;break}}else for(;b<E;)if(R[A++]=w[b++],A==this.blockSize){s(this,R),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;E=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=E&255,E/=256;for(this.v(w),w=Array(16),E=0,I=0;I<4;++I)for(let R=0;R<32;R+=8)w[E++]=this.g[I]>>>R&255;return w};function i(w,E){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=E(w)}function o(w,E){this.h=E;const I=[];let R=!0;for(let A=w.length-1;A>=0;A--){const b=w[A]|0;R&&b==E||(I[A]=b,R=!1)}this.g=I}var c={};function l(w){return-128<=w&&w<128?i(w,function(E){return new o([E|0],E<0?-1:0)}):new o([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return L(h(-w));const E=[];let I=1;for(let R=0;w>=I;R++)E[R]=w/I|0,I*=4294967296;return new o(E,0)}function f(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return L(f(w.substring(1),E));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(E,8));let R=p;for(let b=0;b<w.length;b+=8){var A=Math.min(8,w.length-b);const T=parseInt(w.substring(b,b+A),E);A<8?(A=h(Math.pow(E,A)),R=R.j(A).add(h(T))):(R=R.j(I),R=R.add(h(T)))}return R}var p=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-L(this).m();let w=0,E=1;for(let I=0;I<this.g.length;I++){const R=this.i(I);w+=(R>=0?R:4294967296+R)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(V(this))return"-"+L(this).toString(w);const E=h(Math.pow(w,6));var I=this;let R="";for(;;){const A=J(I,E).g;I=q(I,A.j(E));let b=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=A,N(I))return b+R;for(;b.length<6;)b="0"+b;R=b+R}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function V(w){return w.h==-1}t.l=function(w){return w=q(this,w),V(w)?-1:N(w)?0:1};function L(w){const E=w.g.length,I=[];for(let R=0;R<E;R++)I[R]=~w.g[R];return new o(I,~w.h).add(g)}t.abs=function(){return V(this)?L(this):this},t.add=function(w){const E=Math.max(this.g.length,w.g.length),I=[];let R=0;for(let A=0;A<=E;A++){let b=R+(this.i(A)&65535)+(w.i(A)&65535),T=(b>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);R=T>>>16,b&=65535,T&=65535,I[A]=T<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function q(w,E){return w.add(L(E))}t.j=function(w){if(N(this)||N(w))return p;if(V(this))return V(w)?L(this).j(L(w)):L(L(this).j(w));if(V(w))return L(this.j(L(w)));if(this.l(y)<0&&w.l(y)<0)return h(this.m()*w.m());const E=this.g.length+w.g.length,I=[];for(var R=0;R<2*E;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<w.g.length;A++){const b=this.i(R)>>>16,T=this.i(R)&65535,Be=w.i(A)>>>16,Et=w.i(A)&65535;I[2*R+2*A]+=T*Et,j(I,2*R+2*A),I[2*R+2*A+1]+=b*Et,j(I,2*R+2*A+1),I[2*R+2*A+1]+=T*Be,j(I,2*R+2*A+1),I[2*R+2*A+2]+=b*Be,j(I,2*R+2*A+2)}for(w=0;w<E;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=E;w<2*E;w++)I[w]=0;return new o(I,0)};function j(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function G(w,E){this.g=w,this.h=E}function J(w,E){if(N(E))throw Error("division by zero");if(N(w))return new G(p,p);if(V(w))return E=J(L(w),E),new G(L(E.g),L(E.h));if(V(E))return E=J(w,L(E)),new G(L(E.g),E.h);if(w.g.length>30){if(V(w)||V(E))throw Error("slowDivide_ only works with positive integers.");for(var I=g,R=E;R.l(w)<=0;)I=ce(I),R=ce(R);var A=ye(I,1),b=ye(R,1);for(R=ye(R,2),I=ye(I,2);!N(R);){var T=b.add(R);T.l(w)<=0&&(A=A.add(I),b=T),R=ye(R,1),I=ye(I,1)}return E=q(w,A.j(E)),new G(A,E)}for(A=p;w.l(E)>=0;){for(I=Math.max(1,Math.floor(w.m()/E.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),b=h(I),T=b.j(E);V(T)||T.l(w)>0;)I-=R,b=h(I),T=b.j(E);N(b)&&(b=g),A=A.add(b),w=q(w,T)}return new G(A,w)}t.B=function(w){return J(this,w).h},t.and=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)&w.i(R);return new o(I,this.h&w.h)},t.or=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)|w.i(R);return new o(I,this.h|w.h)},t.xor=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)^w.i(R);return new o(I,this.h^w.h)};function ce(w){const E=w.g.length+1,I=[];for(let R=0;R<E;R++)I[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(I,w.h)}function ye(w,E){const I=E>>5;E%=32;const R=w.g.length-I,A=[];for(let b=0;b<R;b++)A[b]=E>0?w.i(b+I)>>>E|w.i(b+I+1)<<32-E:w.i(b+I);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,gm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,rr=o}).apply(typeof Xf<"u"?Xf:typeof self<"u"?self:typeof window<"u"?window:{});var po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mm,ei,_m,Co,al,ym,Em,Tm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof po=="object"&&po];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,C){for(var H=Array(arguments.length-2),he=2;he<arguments.length;he++)H[he-2]=arguments[he];return u.prototype[P].apply(m,H)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const u=a.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function N(a,u){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const C=P.length||0;a.length=d+C;for(let H=0;H<C;H++)a[d+H]=P[H]}else a.push(P)}}class V{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(a){o.setTimeout(()=>{throw a},0)}function q(){var a=w;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class j{constructor(){this.h=this.g=null}add(u,d){const m=G.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var G=new V(()=>new J,a=>a.reset());class J{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ye=!1,w=new j,E=()=>{const a=Promise.resolve(void 0);ce=()=>{a.then(I)}};function I(){for(var a;a=q();){try{a.h.call(a.g)}catch(d){L(d)}var u=G;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ye=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function Be(a,u){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Be,A),Be.prototype.init=function(a,u){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Et="closure_listenable_"+(Math.random()*1e6|0),je=0;function ve(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++je,this.da=this.fa=!1}function _e(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Tt(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function Qt(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function bt(a){const u={};for(const d in a)u[d]=a[d];return u}const Xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mn(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let C=0;C<Xe.length;C++)d=Xe[C],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Ft(a){this.src=a,this.g={},this.h=0}Ft.prototype.add=function(a,u,d,m,P){const C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);const H=st(a,u,m,P);return H>-1?(u=a[H],d||(u.fa=!1)):(u=new ve(u,this.src,C,!!m,P),u.fa=d,a.push(u)),u};function Ut(a,u){const d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),C;(C=P>=0)&&Array.prototype.splice.call(m,P,1),C&&(_e(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function st(a,u,d,m){for(let P=0;P<a.length;++P){const C=a[P];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==m)return P}return-1}var k="closure_lm_"+(Math.random()*1e6|0),Y={};function K(a,u,d,m,P){if(Array.isArray(u)){for(let C=0;C<u.length;C++)K(a,u[C],d,m,P);return null}return d=W(d),a&&a[Et]?a.J(u,d,c(m)?!!m.capture:!1,P):Z(a,u,d,!1,m,P)}function Z(a,u,d,m,P,C){if(!u)throw Error("Invalid event type");const H=c(P)?!!P.capture:!!P;let he=F(a);if(he||(a[k]=he=new Ft(a)),d=he.add(u,d,m,H,C),d.proxy)return d;if(m=de(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)b||(P=H),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(S(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function de(){function a(d){return u.call(a.src,a.listener,d)}const u=D;return a}function _(a,u,d,m,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)_(a,u[C],d,m,P);else m=c(m)?!!m.capture:!!m,d=W(d),a&&a[Et]?(a=a.i,C=String(u).toString(),C in a.g&&(u=a.g[C],d=st(u,d,m,P),d>-1&&(_e(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[C],a.h--)))):a&&(a=F(a))&&(u=a.g[u.toString()],a=-1,u&&(a=st(u,d,m,P)),(d=a>-1?u[a]:null)&&v(d))}function v(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Et])Ut(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(S(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=F(u))?(Ut(d,a),d.h==0&&(d.src=null,u[k]=null)):_e(a)}}}function S(a){return a in Y?Y[a]:Y[a]="on"+a}function D(a,u){if(a.da)a=!0;else{u=new Be(u,this);const d=a.listener,m=a.ha||a.src;a.fa&&v(a),a=d.call(m,u)}return a}function F(a){return a=a[k],a instanceof Ft?a:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function W(a){return typeof a=="function"?a:(a[O]||(a[O]=function(u){return a.handleEvent(u)}),a[O])}function $(){R.call(this),this.i=new Ft(this),this.M=this,this.G=null}p($,R),$.prototype[Et]=!0,$.prototype.removeEventListener=function(a,u,d,m){_(this,a,u,d,m)};function B(a,u){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new A(u,a);else if(u instanceof A)u.target=u.target||a;else{var P=u;u=new A(m,a),mn(u,P)}P=!0;let C,H;if(d)for(H=d.length-1;H>=0;H--)C=u.g=d[H],P=U(C,m,!0,u)&&P;if(C=u.g=a,P=U(C,m,!0,u)&&P,P=U(C,m,!1,u)&&P,d)for(H=0;H<d.length;H++)C=u.g=d[H],P=U(C,m,!1,u)&&P}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let m=0;m<d.length;m++)_e(d[m]);delete a.g[u],a.h--}}this.G=null},$.prototype.J=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},$.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function U(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let P=!0;for(let C=0;C<u.length;++C){const H=u[C];if(H&&!H.da&&H.capture==d){const he=H.listener,We=H.ha||H.src;H.fa&&Ut(a.i,H),P=he.call(We,m)!==!1&&P}}return P&&!m.defaultPrevented}function ne(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function z(a){a.g=ne(()=>{a.g=null,a.i&&(a.i=!1,z(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class ee extends R{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:z(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(a){R.call(this),this.h=a,this.g={}}p(re,R);var fe=[];function Se(a){Tt(a.g,function(u,d){this.g.hasOwnProperty(d)&&v(u)},a),a.g={}}re.prototype.N=function(){re.Z.N.call(this),Se(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Te=o.JSON.stringify,it=o.JSON.parse,ot=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Pt(){}function Ct(){}var Bt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qr(){A.call(this,"d")}p(qr,A);function Ze(){A.call(this,"c")}p(Ze,A);var Qe={},Ds=null;function gr(){return Ds=Ds||new $}Qe.Ia="serverreachability";function Fu(a){A.call(this,Qe.Ia,a)}p(Fu,A);function Os(a){const u=gr();B(u,new Fu(u))}Qe.STAT_EVENT="statevent";function Uu(a,u){A.call(this,Qe.STAT_EVENT,a),this.stat=u}p(Uu,A);function pt(a){const u=gr();B(u,new Uu(u,a))}Qe.Ja="timingevent";function Bu(a,u){A.call(this,Qe.Ja,a),this.size=u}p(Bu,A);function ks(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function xs(){this.g=!0}xs.prototype.ua=function(){this.g=!1};function J_(a,u,d,m,P,C){a.info(function(){if(a.g)if(C){var H="",he=C.split("&");for(let Pe=0;Pe<he.length;Pe++){var We=he[Pe].split("=");if(We.length>1){const Je=We[0];We=We[1];const Yt=Je.split("_");H=Yt.length>=2&&Yt[1]=="type"?H+(Je+"="+We+"&"):H+(Je+"=redacted&")}}}else H=null;else H=C;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+H})}function Y_(a,u,d,m,P,C,H){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+C+" "+H})}function Hr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Z_(a,d)+(m?" "+m:"")})}function X_(a,u){a.info(function(){return"TIMEOUT: "+u})}xs.prototype.info=function(){};function Z_(a,u){if(!a.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(a=0;a<C.length;a++)if(Array.isArray(C[a])){var d=C[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let H=1;H<m.length;H++)m[H]=""}}}}return Te(C)}catch{return u}}var Xi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ju={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$u;function Za(){}p(Za,Pt),Za.prototype.g=function(){return new XMLHttpRequest},$u=new Za;function Ms(a){return encodeURIComponent(String(a))}function ey(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Un(a,u,d,m){this.j=a,this.i=u,this.l=d,this.S=m||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qu}function qu(){this.i=null,this.g="",this.h=!1}var Hu={},ec={};function tc(a,u,d){a.M=1,a.A=eo(Jt(u)),a.u=d,a.R=!0,Gu(a,null)}function Gu(a,u){a.F=Date.now(),Zi(a),a.B=Jt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),sh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new qu,a.g=Ih(a.j,d?u:null,!a.u),a.P>0&&(a.O=new ee(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(fe[0]=P.toString()),P=fe);for(let C=0;C<P.length;C++){const H=K(d,P[C],m||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=a.J?bt(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Os(),J_(a.i,a.v,a.B,a.l,a.S,a.u)}Un.prototype.ba=function(a){a=a.target;const u=this.O;u&&$n(a)==3?u.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const he=$n(this.g),We=this.g.ya(),Pe=this.g.ca();if(!(he<3)&&(he!=3||this.g&&(this.h.h||this.g.la()||hh(this.g)))){this.K||he!=4||We==7||(We==8||Pe<=0?Os(3):Os(2)),nc(this);var u=this.g.ca();this.X=u;var d=ty(this);if(this.o=u==200,Y_(this.i,this.v,this.B,this.l,this.S,he,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var C=m;break t}}C=null}if(a=C)Hr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,rc(this,a);else{this.o=!1,this.m=3,pt(12),mr(this),Ls(this);break e}}if(this.R){a=!0;let Je;for(;!this.K&&this.C<d.length;)if(Je=ny(this,d),Je==ec){he==4&&(this.m=4,pt(14),a=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==Hu){this.m=4,pt(15),Hr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Hr(this.i,this.l,Je,null),rc(this,Je);if(Wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),he!=4||d.length!=0||this.h.h||(this.m=1,pt(16),a=!1),this.o=this.o&&a,!a)Hr(this.i,this.l,d,"[Invalid Chunked Response]"),mr(this),Ls(this);else if(d.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),hc(H),H.P=!0,pt(11))}}else Hr(this.i,this.l,d,null),rc(this,d);he==4&&mr(this),this.o&&!this.K&&(he==4?yh(this.j,this):(this.o=!1,Zi(this)))}else my(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,pt(12)):(this.m=0,pt(13)),mr(this),Ls(this)}}}catch{}finally{}};function ty(a){if(!Wu(a))return a.g.la();const u=hh(a.g);if(u==="")return"";let d="";const m=u.length,P=$n(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return mr(a),Ls(a),"";a.h.i=new o.TextDecoder}for(let C=0;C<m;C++)a.h.h=!0,d+=a.h.i.decode(u[C],{stream:!(P&&C==m-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Wu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ny(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?ec:(d=Number(u.substring(d,m)),isNaN(d)?Hu:(m+=1,m+d>u.length?ec:(u=u.slice(m,m+d),a.C=m+d,u)))}Un.prototype.cancel=function(){this.K=!0,mr(this)};function Zi(a){a.T=Date.now()+a.H,Ku(a,a.H)}function Ku(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ks(h(a.aa,a),u)}function nc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Un.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(X_(this.i,this.B),this.M!=2&&(Os(),pt(17)),mr(this),this.m=2,Ls(this)):Ku(this,this.T-a)};function Ls(a){a.j.I==0||a.K||yh(a.j,a)}function mr(a){nc(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Se(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function rc(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||sc(d.h,a))){if(!a.L&&sc(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)io(d),ro(d);else break e;uc(d),pt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ks(h(d.Va,d),6e3));Ju(d.h)<=1&&d.ta&&(d.ta=void 0)}else yr(d,11)}else if((a.L||d.g==a)&&io(d),!T(u))for(P=d.Ba.g.parse(u),u=0;u<P.length;u++){let Pe=P[u];const Je=Pe[0];if(!(Je<=d.K))if(d.K=Je,Pe=Pe[1],d.I==2)if(Pe[0]=="c"){d.M=Pe[1],d.ba=Pe[2];const Yt=Pe[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const Er=Pe[4];Er!=null&&(d.za=Er,d.j.info("SVER="+d.za));const qn=Pe[5];qn!=null&&typeof qn=="number"&&qn>0&&(m=1.5*qn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Hn=a.g;if(Hn){const ao=Hn.g?Hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ao){var C=m.h;C.g||ao.indexOf("spdy")==-1&&ao.indexOf("quic")==-1&&ao.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ic(C,C.h),C.h=null))}if(m.G){const fc=Hn.g?Hn.g.getResponseHeader("X-HTTP-Session-Id"):null;fc&&(m.wa=fc,De(m.J,m.G,fc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var H=a;if(m.na=vh(m,m.L?m.ba:null,m.W),H.L){Yu(m.h,H);var he=H,We=m.O;We&&(he.H=We),he.D&&(nc(he),Zi(he)),m.g=H}else mh(m);d.i.length>0&&so(d)}else Pe[0]!="stop"&&Pe[0]!="close"||yr(d,7);else d.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?yr(d,7):lc(d):Pe[0]!="noop"&&d.l&&d.l.qa(Pe),d.A=0)}}Os(4)}catch{}}var ry=class{constructor(a,u){this.g=a,this.map=u}};function zu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ju(a){return a.h?1:a.g?a.g.size:0}function sc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ic(a,u){a.g?a.g.add(u):a.h=u}function Yu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}zu.prototype.cancel=function(){if(this.i=Xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return y(a.i)}var Zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sy(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,C=null;m>=0?(P=a[d].substring(0,m),C=a[d].substring(m+1)):P=a[d],u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Bn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Bn?(this.l=a.l,Fs(this,a.j),this.o=a.o,this.g=a.g,Us(this,a.u),this.h=a.h,oc(this,ih(a.i)),this.m=a.m):a&&(u=String(a).match(Zu))?(this.l=!1,Fs(this,u[1]||"",!0),this.o=Bs(u[2]||""),this.g=Bs(u[3]||"",!0),Us(this,u[4]),this.h=Bs(u[5]||"",!0),oc(this,u[6]||"",!0),this.m=Bs(u[7]||"")):(this.l=!1,this.i=new $s(null,this.l))}Bn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(js(u,eh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(js(u,eh,!0),"@"),a.push(Ms(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(js(d,d.charAt(0)=="/"?ay:oy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",js(d,ly)),a.join("")},Bn.prototype.resolve=function(a){const u=Jt(this);let d=!!a.j;d?Fs(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var m=a.h;if(d)Us(u,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=u.h.lastIndexOf("/");P!=-1&&(m=u.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const C=[];for(let H=0;H<P.length;){const he=P[H++];he=="."?m&&H==P.length&&C.push(""):he==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),m&&H==P.length&&C.push("")):(C.push(he),m=!0)}m=C.join("/")}else m=P}return d?u.h=m:d=a.i.toString()!=="",d?oc(u,ih(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Jt(a){return new Bn(a)}function Fs(a,u,d){a.j=d?Bs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Us(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function oc(a,u,d){u instanceof $s?(a.i=u,uy(a.i,a.l)):(d||(u=js(u,cy)),a.i=new $s(u,a.l))}function De(a,u,d){a.i.set(u,d)}function eo(a){return De(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Bs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,iy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var eh=/[#\/\?@]/g,oy=/[#\?:]/g,ay=/[#\?]/g,cy=/[#\?@]/g,ly=/#/g;function $s(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function _r(a){a.g||(a.g=new Map,a.h=0,a.i&&sy(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=$s.prototype,t.add=function(a,u){_r(this),this.i=null,a=Gr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function th(a,u){_r(a),u=Gr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function nh(a,u){return _r(a),u=Gr(a,u),a.g.has(u)}t.forEach=function(a,u){_r(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)};function rh(a,u){_r(a);let d=[];if(typeof u=="string")nh(a,u)&&(d=d.concat(a.g.get(Gr(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return _r(this),this.i=null,a=Gr(this,a),nh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=rh(this,a),a.length>0?String(a[0]):u):u};function sh(a,u,d){th(a,u),d.length>0&&(a.i=null,a.g.set(Gr(a,u),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const P=Ms(d);d=rh(this,d);for(let C=0;C<d.length;C++){let H=P;d[C]!==""&&(H+="="+Ms(d[C])),a.push(H)}}return this.i=a.join("&")};function ih(a){const u=new $s;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Gr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function uy(a,u){u&&!a.j&&(_r(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(th(this,m),sh(this,P,d))},a)),a.j=u}function hy(a,u){const d=new xs;if(o.Image){const m=new Image;m.onload=f(jn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(jn,d,"TestLoadImage: error",!1,u,m),m.onabort=f(jn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(jn,d,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function fy(a,u){const d=new xs,m=new AbortController,P=setTimeout(()=>{m.abort(),jn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(C=>{clearTimeout(P),C.ok?jn(d,"TestPingServer: ok",!0,u):jn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),jn(d,"TestPingServer: error",!1,u)})}function jn(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function dy(){this.g=new ot}function ac(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ac,Pt),ac.prototype.g=function(){return new to(this.i,this.h)};function to(a,u){$.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(to,$),t=to.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;oh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function oh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?qs(this):Hs(this),this.readyState==3&&oh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Na=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Hs(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(to.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ah(a){let u="";return Tt(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function cc(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ah(d),typeof a=="string"?d!=null&&Ms(d):De(a,u,d))}function xe(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(xe,$);var py=/^https?$/i,gy=["POST","PUT"];t=xe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$u.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){ch(this,C);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(gy,u,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,H]of d)this.g.setRequestHeader(C,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(C){ch(this,C)}};function ch(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,lh(a),no(a)}function lh(a){a.A||(a.A=!0,B(a,"complete"),B(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,B(this,"complete"),B(this,"abort"),no(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),no(this,!0)),xe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?uh(this):this.Xa())},t.Xa=function(){uh(this)};function uh(a){if(a.h&&typeof i<"u"){if(a.v&&$n(a)==4)setTimeout(a.Ca.bind(a),0);else if(B(a,"readystatechange"),$n(a)==4){a.h=!1;try{const C=a.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=C===0){let H=String(a.D).match(Zu)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),m=!py.test(H?H.toLowerCase():"")}d=m}if(d)B(a,"complete"),B(a,"success");else{a.o=6;try{var P=$n(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",lh(a)}}finally{no(a)}}}}function no(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||B(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function $n(a){return a.g?a.g.readyState:0}t.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),it(u)}};function hh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function my(a){const u={};a=(a.g&&$n(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var d=ey(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[P]||[];u[P]=C,C.push(d)}Qt(u,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function fh(a){this.za=0,this.i=[],this.j=new xs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gs("baseRetryDelayMs",5e3,a),this.Za=Gs("retryDelaySeedMs",1e4,a),this.Ta=Gs("forwardChannelMaxRetries",2,a),this.va=Gs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new zu(a&&a.concurrentRequestLimit),this.Ba=new dy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=fh.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,m){pt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=vh(this,null,this.W),so(this)};function lc(a){if(dh(a),a.I==3){var u=a.V++,d=Jt(a.J);if(De(d,"SID",a.M),De(d,"RID",u),De(d,"TYPE","terminate"),Ws(a,d),u=new Un(a,a.j,u),u.M=2,u.A=eo(Jt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Ih(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Zi(u)}Th(a)}function ro(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function dh(a){ro(a),a.v&&(o.clearTimeout(a.v),a.v=null),io(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function so(a){if(!Qu(a.h)&&!a.m){a.m=!0;var u=a.Ea;ce||E(),ye||(ce(),ye=!0),w.add(u,a),a.D=0}}function _y(a,u){return Ju(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ks(h(a.Ea,a,u),Eh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Un(this,this.j,a);let C=this.o;if(this.U&&(C?(C=bt(C),mn(C,this.U)):C=this.U),this.u!==null||this.R||(P.J=C,C=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=gh(this,P,u),d=Jt(this.J),De(d,"RID",a),De(d,"CVER",22),this.G&&De(d,"X-HTTP-Session-Id",this.G),Ws(this,d),C&&(this.R?u="headers="+Ms(ah(C))+"&"+u:this.u&&cc(d,this.u,C)),ic(this.h,P),this.Ra&&De(d,"TYPE","init"),this.S?(De(d,"$req",u),De(d,"SID","null"),P.U=!0,tc(P,d,null)):tc(P,d,u),this.I=2}}else this.I==3&&(a?ph(this,a):this.i.length==0||Qu(this.h)||ph(this))};function ph(a,u){var d;u?d=u.l:d=a.V++;const m=Jt(a.J);De(m,"SID",a.M),De(m,"RID",d),De(m,"AID",a.K),Ws(a,m),a.u&&a.o&&cc(m,a.u,a.o),d=new Un(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=gh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ic(a.h,d),tc(d,m,u)}function Ws(a,u){a.H&&Tt(a.H,function(d,m){De(u,m,d)}),a.l&&Tt({},function(d,m){De(u,m,d)})}function gh(a,u,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let he=-1;for(;;){const We=["count="+d];he==-1?d>0?(he=P[0].g,We.push("ofs="+he)):he=0:We.push("ofs="+he);let Pe=!0;for(let Je=0;Je<d;Je++){var C=P[Je].g;const Yt=P[Je].map;if(C-=he,C<0)he=Math.max(0,P[Je].g-100),Pe=!1;else try{C="req"+C+"_"||"";try{var H=Yt instanceof Map?Yt:Object.entries(Yt);for(const[Er,qn]of H){let Hn=qn;c(qn)&&(Hn=Te(qn)),We.push(C+Er+"="+encodeURIComponent(Hn))}}catch(Er){throw We.push(C+"type="+encodeURIComponent("_badmap")),Er}}catch{m&&m(Yt)}}if(Pe){H=We.join("&");break e}}H=void 0}return a=a.i.splice(0,d),u.G=a,H}function mh(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;ce||E(),ye||(ce(),ye=!0),w.add(u,a),a.A=0}}function uc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ks(h(a.Da,a),Eh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,_h(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ks(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pt(10),ro(this),_h(this))};function hc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function _h(a){a.g=new Un(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Jt(a.na);De(u,"RID","rpc"),De(u,"SID",a.M),De(u,"AID",a.K),De(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&De(u,"TO",a.ia),De(u,"TYPE","xmlhttp"),Ws(a,u),a.u&&a.o&&cc(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=eo(Jt(u)),d.u=null,d.R=!0,Gu(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ro(this),uc(this),pt(19))};function io(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function yh(a,u){var d=null;if(a.g==u){io(a),hc(a),a.g=null;var m=2}else if(sc(a.h,u))d=u.G,Yu(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var P=a.D;m=gr(),B(m,new Bu(m,d)),so(a)}else mh(a);else if(P=u.m,P==3||P==0&&u.X>0||!(m==1&&_y(a,u)||m==2&&uc(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),P){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function Eh(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function yr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),m=a.Ua;const P=!m;m=new Bn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Fs(m,"https"),eo(m),P?hy(m.toString(),d):fy(m.toString(),d)}else pt(2);a.I=0,a.l&&a.l.pa(u),Th(a),dh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Th(a){if(a.I=0,a.ja=[],a.l){const u=Xu(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ja,u),N(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function vh(a,u,d){var m=d instanceof Bn?Jt(d):new Bn(d);if(m.g!="")u&&(m.g=u+"."+m.g),Us(m,m.u);else{var P=o.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;const C=new Bn(null);m&&Fs(C,m),u&&(C.g=u),P&&Us(C,P),d&&(C.h=d),m=C}return d=a.G,u=a.wa,d&&u&&De(m,d,u),De(m,"VER",a.ka),Ws(a,m),m}function Ih(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new xe(new ac({ab:d})):new xe(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wh(){}t=wh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function oo(){}oo.prototype.g=function(a,u){return new Nt(a,u)};function Nt(a,u){$.call(this),this.g=new fh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!T(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!T(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Wr(this)}p(Nt,$),Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){lc(this.g)},Nt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Te(a),a=d);u.i.push(new ry(u.Ya++,a)),u.I==3&&so(u)},Nt.prototype.N=function(){this.g.l=null,delete this.j,lc(this.g),delete this.g,Nt.Z.N.call(this)};function Ah(a){qr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Ah,qr);function Rh(){Ze.call(this),this.status=1}p(Rh,Ze);function Wr(a){this.g=a}p(Wr,wh),Wr.prototype.ra=function(){B(this.g,"a")},Wr.prototype.qa=function(a){B(this.g,new Ah(a))},Wr.prototype.pa=function(a){B(this.g,new Rh)},Wr.prototype.oa=function(){B(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Tm=function(){return new oo},Em=function(){return gr()},ym=Qe,al={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xi.NO_ERROR=0,Xi.TIMEOUT=8,Xi.HTTP_ERROR=6,Co=Xi,ju.COMPLETE="complete",_m=ju,Ct.EventType=Bt,Bt.OPEN="a",Bt.CLOSE="b",Bt.ERROR="c",Bt.MESSAGE="d",$.prototype.listen=$.prototype.J,ei=Ct,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,mm=xe}).apply(typeof po<"u"?po:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="12.11.0";function uS(t){Ps=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Gl("@firebase/firestore");function Jr(){return xr.logLevel}function X(t,...e){if(xr.logLevel<=pe.DEBUG){const n=e.map(nu);xr.debug(`Firestore (${Ps}): ${t}`,...n)}}function On(t,...e){if(xr.logLevel<=pe.ERROR){const n=e.map(nu);xr.error(`Firestore (${Ps}): ${t}`,...n)}}function Mr(t,...e){if(xr.logLevel<=pe.WARN){const n=e.map(nu);xr.warn(`Firestore (${Ps}): ${t}`,...n)}}function nu(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,vm(t,r,n)}function vm(t,e,n){let r=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw On(r),new Error(r)}function Re(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||vm(e,s,r)}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ct.UNAUTHENTICATED)))}shutdown(){}}class fS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class dS{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Im(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new ct(e)}}class pS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new pS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ct.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Zf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Zf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_S(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function cl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Oc(s)===Oc(i)?ge(s,i):Oc(s)?1:-1}return ge(t.length,e.length)}const yS=55296,ES=57343;function Oc(t){const e=t.charCodeAt(0);return e>=yS&&e<=ES}function vs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="__name__";class en{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=en.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=en.isNumericId(e),s=en.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?en.extractNumericId(e).compare(en.extractNumericId(n)):cl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rr.fromString(e.substring(4,e.length-2))}}class Ve extends en{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ve(n)}static emptyPath(){return new Ve([])}}const TS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends en{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return TS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ed}static keyField(){return new tt([ed])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Q(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ve.fromString(e))}static fromName(e){return new te(Ve.fromString(e).popFirst(5))}static empty(){return new te(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t,e,n){if(!n)throw new Q(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vS(t,e,n,r){if(e===!0&&r===!0)throw new Q(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function td(t){if(!te.isDocumentKey(t))throw new Q(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nd(t){if(te.isDocumentKey(t))throw new Q(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Am(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Oa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function St(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oa(t);throw new Q(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,e){const n={typeString:t};return e&&(n.value=e),n}function Gi(t,e){if(!Am(t))throw new Q(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=-62135596800,sd=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*sd);return new Oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<rd)throw new Q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gi(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-rd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:He("string",Oe._jsonSchemaVersion),seconds:He("number"),nanoseconds:He("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Oe(0,0))}static max(){return new ae(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=-1;function IS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new or(s,te.empty(),e)}function wS(t){return new or(t.readTime,t.key,Si)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(ae.min(),te.empty(),Si)}static max(){return new or(ae.max(),te.empty(),Si)}}function AS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==RS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):M.reject(n)}static resolve(e){return new M(((n,r)=>{n(e)}))}static reject(e){return new M(((n,r)=>{r(e)}))}static waitFor(e){return new M(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next((s=>s?M.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new M(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((f=>{o[h]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new M(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function bS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ka.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=-1;function xa(t){return t==null}function ta(t){return t===0&&1/t==-1/0}function PS(t){return typeof t=="number"&&Number.isInteger(t)&&!ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="";function CS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=id(e)),e=NS(t.get(n),e);return id(e)}function NS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Rm:n+="";break;default:n+=i}}return n}function id(t){return t+Rm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new go(this.root,e,this.comparator,!1)}getReverseIterator(){return new go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new go(this.root,e,this.comparator,!0)}}class go{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ad(this.data.getIterator())}getIteratorFrom(e){return new ad(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class ad{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new ze(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bm("Invalid base64 string: "+i):i}})(e);return new rt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const VS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=VS.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="server_timestamp",Cm="__type__",Nm="__previous_value__",Vm="__local_write_time__";function iu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Cm])==null?void 0:r.stringValue)===Pm}function Ma(t){const e=t.mapValue.fields[Nm];return iu(e)?Ma(e):e}function bi(t){const e=ar(t.mapValue.fields[Vm].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,r,s,i,o,c,l,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const na="(default)";class Pi{constructor(e,n){this.projectId=e,this.database=n||na}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database===na}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}function OS(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Q(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="__type__",kS="__max__",mo={mapValue:{}},Om="__vector__",ra="value";function lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?iu(t)?4:MS(t)?9007199254740991:xS(t)?10:11:ie(28295,{value:t})}function pn(t,e){if(t===e)return!0;const n=lr(t);if(n!==lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ar(s.timestampValue),c=ar(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return cr(s.bytesValue).isEqual(cr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),c=Fe(i.doubleValue);return o===c?ta(o)===ta(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(od(o)!==od(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!pn(o[l],c[l])))return!1;return!0})(t,e);default:return ie(52216,{left:t})}}function Ci(t,e){return(t.values||[]).find((n=>pn(n,e)))!==void 0}function Is(t,e){if(t===e)return 0;const n=lr(t),r=lr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return cd(t.timestampValue,e.timestampValue);case 4:return cd(bi(t),bi(e));case 5:return cl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=cr(i),l=cr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=ge(c[h],l[h]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(Fe(i.latitude),Fe(o.latitude));return c!==0?c:ge(Fe(i.longitude),Fe(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return ld(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var g,y,N,V;const c=i.fields||{},l=o.fields||{},h=(g=c[ra])==null?void 0:g.arrayValue,f=(y=l[ra])==null?void 0:y.arrayValue,p=ge(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:ld(h,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===mo.mapValue&&o===mo.mapValue)return 0;if(i===mo.mapValue)return 1;if(o===mo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=cl(l[p],f[p]);if(g!==0)return g;const y=Is(c[l[p]],h[f[p]]);if(y!==0)return y}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ie(23264,{he:n})}}function cd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=ar(t),r=ar(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function ld(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Is(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function ws(t){return ll(t)}function ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ar(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return cr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return te.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ll(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ll(n.fields[o])}`;return s+"}"})(t.mapValue):ie(61005,{value:t})}function No(t){switch(lr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ma(t);return e?16+No(e):16;case 5:return 2*t.stringValue.length;case 6:return cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+No(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return dr(r.fields,((i,o)=>{s+=i.length+No(o)})),s})(t.mapValue);default:throw ie(13486,{value:t})}}function ud(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ul(t){return!!t&&"integerValue"in t}function ou(t){return!!t&&"arrayValue"in t}function hd(t){return!!t&&"nullValue"in t}function fd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vo(t){return!!t&&"mapValue"in t}function xS(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Dm])==null?void 0:r.stringValue)===Om}function pi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return dr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=pi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pi(t.arrayValue.values[n]);return e}return{...t}}function MS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===kS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pi(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=pi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Vo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){dr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new At(pi(this.value))}}function km(t){const e=[];return dr(t.fields,((n,r)=>{const s=new tt([n]);if(Vo(r)){const i=km(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ut(e,0,ae.min(),ae.min(),ae.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,ae.min(),ae.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ae.min(),ae.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.position=e,this.inclusive=n}}function dd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function LS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{}class qe extends xm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new US(e,n,r):n==="array-contains"?new $S(e,r):n==="in"?new qS(e,r):n==="not-in"?new HS(e,r):n==="array-contains-any"?new GS(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BS(e,r):new jS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Is(n,this.value)):n!==null&&lr(this.value)===lr(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends xm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new zt(e,n)}matches(e){return Mm(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Mm(t){return t.op==="and"}function Lm(t){return FS(t)&&Mm(t)}function FS(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function hl(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(Lm(t))return t.filters.map((e=>hl(e))).join(",");{const e=t.filters.map((n=>hl(n))).join(",");return`${t.op}(${e})`}}function Fm(t,e){return t instanceof qe?(function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)})(t,e):t instanceof zt?(function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Fm(o,s.filters[c])),!0):!1})(t,e):void ie(19439)}function Um(t){return t instanceof qe?(function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`})(t):t instanceof zt?(function(n){return n.op.toString()+" {"+n.getFilters().map(Um).join(" ,")+"}"})(t):"Filter"}class US extends qe{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class BS extends qe{constructor(e,n){super(e,"in",n),this.keys=Bm("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class jS extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Bm("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Bm(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>te.fromName(r.referenceValue)))}class $S extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ou(n)&&Ci(n.arrayValue,this.value)}}class qS extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ci(this.value.arrayValue,n)}}class HS extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ci(this.value.arrayValue,n)}}class GS extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ci(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function gd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new WS(t,e,n,r,s,i,o)}function au(t){const e=le(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>hl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>ws(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>ws(r))).join(",")),e.Te=n}return e.Te}function cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pd(t.startAt,e.startAt)&&pd(t.endAt,e.endAt)}function fl(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function KS(t,e,n,r,s,i,o,c){return new Wi(t,e,n,r,s,i,o,c)}function La(t){return new Wi(t)}function md(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zS(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function jm(t){return t.collectionGroup!==null}function gi(t){const e=le(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ze(tt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ia(i,r))})),n.has(tt.keyField().canonicalString())||e.Ee.push(new ia(tt.keyField(),r))}return e.Ee}function ln(t){const e=le(t);return e.Ie||(e.Ie=QS(e,gi(t))),e.Ie}function QS(t,e){if(t.limitType==="F")return gd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ia(s.field,i)}));const n=t.endAt?new sa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sa(t.startAt.position,t.startAt.inclusive):null;return gd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dl(t,e){const n=t.filters.concat([e]);return new Wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pl(t,e,n){return new Wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fa(t,e){return cu(ln(t),ln(e))&&t.limitType===e.limitType}function $m(t){return`${au(ln(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Um(s))).join(", ")}]`),xa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>ws(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>ws(s))).join(",")),`Target(${r})`})(ln(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of gi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const h=dd(o,c,l);return o.inclusive?h<=0:h<0})(r.startAt,gi(r),s)||r.endAt&&!(function(o,c,l){const h=dd(o,c,l);return o.inclusive?h>=0:h>0})(r.endAt,gi(r),s))})(t,e)}function JS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qm(t){return(e,n)=>{let r=!1;for(const s of gi(t)){const i=YS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YS(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Is(l,h):ie(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){dr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Sm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=new ke(te.comparator);function kn(){return XS}const Hm=new ke(te.comparator);function ti(...t){let e=Hm;for(const n of t)e=e.insert(n.key,n);return e}function Gm(t){let e=Hm;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Sr(){return mi()}function Wm(){return mi()}function mi(){return new Br((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ZS=new ke(te.comparator),eb=new ze(te.comparator);function me(...t){let e=eb;for(const n of t)e=e.add(n);return e}const tb=new ze(ge);function nb(){return tb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ta(e)?"-0":e}}function Km(t){return{integerValue:""+t}}function rb(t,e){return PS(e)?Km(e):lu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this._=void 0}}function sb(t,e,n){return t instanceof Ni?(function(s,i){const o={fields:{[Cm]:{stringValue:Pm},[Vm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&iu(i)&&(i=Ma(i)),i&&(o.fields[Nm]=i),{mapValue:o}})(n,e):t instanceof Vi?Qm(t,e):t instanceof Di?Jm(t,e):(function(s,i){const o=zm(s,i),c=_d(o)+_d(s.Ae);return ul(o)&&ul(s.Ae)?Km(c):lu(s.serializer,c)})(t,e)}function ib(t,e,n){return t instanceof Vi?Qm(t,e):t instanceof Di?Jm(t,e):n}function zm(t,e){return t instanceof oa?(function(r){return ul(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ni extends Ba{}class Vi extends Ba{constructor(e){super(),this.elements=e}}function Qm(t,e){const n=Ym(e);for(const r of t.elements)n.some((s=>pn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Di extends Ba{constructor(e){super(),this.elements=e}}function Jm(t,e){let n=Ym(e);for(const r of t.elements)n=n.filter((s=>!pn(s,r)));return{arrayValue:{values:n}}}class oa extends Ba{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function _d(t){return Fe(t.integerValue||t.doubleValue)}function Ym(t){return ou(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.field=e,this.transform=n}}function ab(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Vi&&s instanceof Vi||r instanceof Di&&s instanceof Di?vs(r.elements,s.elements,pn):r instanceof oa&&s instanceof oa?pn(r.Ae,s.Ae):r instanceof Ni&&s instanceof Ni})(t.transform,e.transform)}class cb{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Do(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function Xm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uu(t.key,Lt.none()):new Ki(t.key,t.data,Lt.none());{const n=t.data,r=At.empty();let s=new ze(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new pr(t.key,r,new Ot(s.toArray()),Lt.none())}}function lb(t,e,n){t instanceof Ki?(function(s,i,o){const c=s.value.clone(),l=Ed(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof pr?(function(s,i,o){if(!Do(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ed(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Zm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function _i(t,e,n,r){return t instanceof Ki?(function(i,o,c,l){if(!Do(i.precondition,o))return c;const h=i.value.clone(),f=Td(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof pr?(function(i,o,c,l){if(!Do(i.precondition,o))return c;const h=Td(i.fieldTransforms,l,o),f=o.data;return f.setAll(Zm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Do(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function ub(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=zm(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function yd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vs(r,s,((i,o)=>ab(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ki extends ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pr extends ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zm(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Ed(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,ib(o,c,n[s]))}return r}function Td(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,sb(i,o,e))}return r}class uu extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hb extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Wm();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Xm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),me())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,((n,r)=>yd(n,r)))&&vs(this.baseMutations,e.baseMutations,((n,r)=>yd(n,r)))}}class hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return ZS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,Ee;function gb(t){switch(t){case x.OK:return ie(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function e_(t){if(t===void 0)return On("GRPC error has no .code"),x.UNKNOWN;switch(t){case $e.OK:return x.OK;case $e.CANCELLED:return x.CANCELLED;case $e.UNKNOWN:return x.UNKNOWN;case $e.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case $e.INTERNAL:return x.INTERNAL;case $e.UNAVAILABLE:return x.UNAVAILABLE;case $e.UNAUTHENTICATED:return x.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case $e.NOT_FOUND:return x.NOT_FOUND;case $e.ALREADY_EXISTS:return x.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return x.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case $e.ABORTED:return x.ABORTED;case $e.OUT_OF_RANGE:return x.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return x.UNIMPLEMENTED;case $e.DATA_LOSS:return x.DATA_LOSS;default:return ie(39323,{code:t})}}(Ee=$e||($e={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=new rr([4294967295,4294967295],0);function vd(t){const e=mb().encode(t),n=new gm;return n.update(e),new Uint8Array(n.digest())}function Id(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rr([n,r],0),new rr([s,i],0)]}class fu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ni(`Invalid padding: ${n}`);if(r<0)throw new ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ni(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=rr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(rr.fromNumber(r)));return s.compare(_b)===1&&(s=new rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=vd(e),[r,s]=Id(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=vd(e),[r,s]=Id(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $a(ae.min(),s,new ke(ge),kn(),me())}}class zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new zi(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class t_{constructor(e,n){this.targetId=e,this.Ce=n}}class n_{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wd{constructor(){this.ve=0,this.Fe=Ad(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=me(),n=me(),r=me();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}})),new zi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Ad()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class yb{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=_o(),this.He=_o(),this.Ze=new ke(ge)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ie(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(fl(i))if(r===0){const o=new te(i.path);this.et(n,o,ut.newNoDocument(o,ae.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=cr(r).toUint8Array()}catch(l){if(l instanceof bm)return Mr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fu(o,s,i)}catch(l){return Mr(l instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&fl(c.target)){const l=new te(c.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,ut.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=me();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new $a(e,n,this.Ze,this.je,r);return this.je=kn(),this.Je=_o(),this.He=_o(),this.Ze=new ke(ge),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new wd,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new ze(ge),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new ze(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function _o(){return new ke(te.comparator)}function Ad(){return new ke(te.comparator)}const Eb={asc:"ASCENDING",desc:"DESCENDING"},Tb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vb={and:"AND",or:"OR"};class Ib{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gl(t,e){return t.useProto3Json||xa(e)?e:{value:e}}function aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wb(t,e){return aa(t,e.toTimestamp())}function un(t){return Re(!!t,49232),ae.fromTimestamp((function(n){const r=ar(n);return new Oe(r.seconds,r.nanos)})(t))}function du(t,e){return ml(t,e).canonicalString()}function ml(t,e){const n=(function(s){return new Ve(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function s_(t){const e=Ve.fromString(t);return Re(l_(e),10190,{key:e.toString()}),e}function _l(t,e){return du(t.databaseId,e.path)}function kc(t,e){const n=s_(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(o_(n))}function i_(t,e){return du(t.databaseId,e)}function Ab(t){const e=s_(t);return e.length===4?Ve.emptyPath():o_(e)}function yl(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function o_(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Rd(t,e,n){return{name:_l(t,e),fields:n.value.mapValue.fields}}function Rb(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Re(f===void 0||typeof f=="string",58123),rt.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),rt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?x.UNKNOWN:e_(h.code);return new Q(f,h.message||"")})(o);n=new n_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=kc(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):ae.min(),c=new At({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Oo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=kc(t,r.document),i=r.readTime?un(r.readTime):ae.min(),o=ut.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Oo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=kc(t,r.document),i=r.removedTargetIds||[];n=new Oo([],i,s,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pb(s,i),c=r.targetId;n=new t_(c,o)}}return n}function Sb(t,e){let n;if(e instanceof Ki)n={update:Rd(t,e.key,e.value)};else if(e instanceof uu)n={delete:_l(t,e.key)};else if(e instanceof pr)n={update:Rd(t,e.key,e.data),updateMask:xb(e.fieldMask)};else{if(!(e instanceof hb))return ie(16599,{dt:e.type});n={verify:_l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Ni)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Vi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Di)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof oa)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ie(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:wb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)})(t,e.precondition)),n}function bb(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(ae.min())&&(o=un(i)),new cb(o,s.transformResults||[])})(n,e)))):[]}function Pb(t,e){return{documents:[i_(t,e.path)]}}function Cb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=i_(t,s);const i=(function(h){if(h.length!==0)return c_(zt.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:Xr(g.field),direction:Db(g.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=gl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function Nb(t){let e=Ab(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const g=a_(p);return g instanceof zt&&Lm(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(N){return new ia(Zr(N.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(g)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,xa(g)?null:g})(n.limit));let l=null;n.startAt&&(l=(function(p){const g=!!p.before,y=p.values||[];return new sa(y,g)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const g=!p.before,y=p.values||[];return new sa(y,g)})(n.endAt)),KS(e,s,o,i,c,"F",l,h)}function Vb(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function a_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}})(t):t.fieldFilter!==void 0?(function(n){return qe.create(Zr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return zt.create(n.compositeFilter.filters.map((r=>a_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}})(n.compositeFilter.op))})(t):ie(30097,{filter:t})}function Db(t){return Eb[t]}function Ob(t){return Tb[t]}function kb(t){return vb[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return tt.fromServerFormat(t.fieldPath)}function c_(t){return t instanceof qe?(function(n){if(n.op==="=="){if(fd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(hd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(hd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:Ob(n.op),value:n.value}}})(t):t instanceof zt?(function(n){const r=n.getFilters().map((s=>c_(s)));return r.length===1?r[0]:{compositeFilter:{op:kb(n.op),filters:r}}})(t):ie(54877,{filter:t})}function xb(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function l_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function u_(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,s,i=ae.min(),o=ae.min(),c=rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.yt=e}}function Lb(t){const e=Nb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.bn=new Ub}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(or.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Ub{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},h_=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(h_,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new As(0)}static ar(){return new As(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="LruGarbageCollector",Bb=1048576;function Pd([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class jb{constructor(e){this.Pr=e,this.buffer=new ze(Pd),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Pd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $b{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){X(bd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ns(n)?X(bd,"Ignoring IndexedDB error during garbage collection: ",n):await Cs(n)}await this.Ar(3e5)}))}}class qb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ka.ce);const r=new jb(n);return this.Vr.forEachTarget(e,(s=>r.Ir(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Ir(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Sd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sd):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Jr()<=pe.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Hb(t,e){return new qb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.changes=new Br((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&_i(r.mutation,s,Ot.empty(),Oe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,me()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=me()){const s=Sr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ti();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,me())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=kn();const o=mi(),c=(function(){return mi()})();return n.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof pr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),_i(f.mutation,h,f.mutation.getFieldMask(),Oe.now())):o.set(h.key,Ot.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>o.set(h,f))),n.forEach(((h,f)=>c.set(h,new Wb(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=mi();let s=new ke(((o,c)=>o-c)),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Ot.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Wm();f.forEach((g=>{if(!i.has(g)){const y=Xm(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return zS(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Sr());let c=Si,l=i;return o.next((h=>M.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{l=l.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,me()))).next((f=>({batchId:c,changes:Gm(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next((r=>{let s=ti();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ti();return this.indexManager.getCollectionParents(e,i).next((c=>M.forEach(c,(l=>{const h=(function(p,g){return new Wi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))}));let c=ti();return o.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&_i(f.mutation,h,Ot.empty(),Oe.now()),Ua(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}})(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:Lb(s.bundledQuery),readTime:un(s.readTime)}})(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.overlays=new ke(te.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return M.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Sr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new db(n,r));let i=this.Lr.get(n);i===void 0&&(i=me(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.kr=new ze(Ye.qr),this.Kr=new ze(Ye.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Ye(e,n))}Qr(e,n){e.forEach((r=>this.removeReference(r,n)))}Gr(e){const n=new te(new Ve([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Kr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new te(new Ve([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=me();return this.Kr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Ye(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return te.comparator(e.key,n.key)||ge(e.Jr,n.Jr)}static Ur(e,n){return ge(e.Jr,n.Jr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new ze(Ye.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new Ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?su:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Jr);i.push(c)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ge);return n.forEach((s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],(c=>{r=r.add(c.Jr)}))})),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new te(i),0);let c=new ze(ge);return this.Hr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Jr)),!0)}),o),M.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Re(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,(s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.ti=e,this.docs=(function(){return new ke(te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,c=new te(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||AS(wS(f),r)<=0||(s.has(f.key)||Ua(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}ni(e,n){return M.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new Zb(this)}getSize(e){return M.resolve(this.size)}}class Zb extends Gb{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.persistence=e,this.ri=new Br((n=>au(n)),cu),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.ii=0,this.si=new pu,this.targetCount=0,this.oi=As._r()}forEachTarget(e,n){return this.ri.forEach(((r,s)=>n(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new As(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this._i={},this.overlays={},this.ai=new ka(0),this.ui=!1,this.ui=!0,this.ci=new Jb,this.referenceDelegate=e(this),this.li=new eP(this),this.indexManager=new Fb,this.remoteDocumentCache=(function(s){return new Xb(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new Mb(n),this.Pi=new zb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Yb(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new tP(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ei(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(e,n){return M.or(Object.values(this._i).map((r=>()=>r.containsKey(e,n))))}}class tP extends SS{constructor(e){super(),this.currentSequenceNumber=e}}class gu{constructor(e){this.persistence=e,this.Ri=new pu,this.Ai=null}static Vi(e){return new gu(e)}get di(){if(this.Ai)return this.Ai;throw ie(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,(r=>{const s=te.fromPath(r);return this.mi(e,s).next((i=>{i||n.removeEntry(s,ae.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class ca{constructor(e,n){this.persistence=e,this.fi=new Br((r=>CS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Hb(this,n)}static Vi(e,n){return new ca(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}pr(e){let n=0;return this.mr(e,(r=>{n++})).next((()=>n))}mr(e,n){return M.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?M.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ae.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=No(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return wI()?8:bS(dt())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new nP;return this.ys(e,n,o).next((c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)}))})).next((()=>i.result))}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Jr()<=pe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Jr()<=pe.DEBUG&&X("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Jr()<=pe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}gs(e,n){if(md(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=pl(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=me(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.Ss(n,c);return this.bs(n,h,o,l.readTime)?this.gs(e,pl(n,null,"F")):this.Ds(e,h,n,l)}))))})))))}ps(e,n,r,s){return md(n)||s.isEqual(ae.min())?M.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?M.resolve(null):(Jr()<=pe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yr(n)),this.Ds(e,o,n,IS(s,Si)).next((c=>c)))}))}Ss(e,n){let r=new ze(qm(e));return n.forEach(((s,i)=>{Ua(e,i)&&(r=r.add(i))})),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Jr()<=pe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.fs.getDocumentsMatchingQuery(e,n,or.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="LocalStore",sP=3e8;class iP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ke(ge),this.Fs=new Br((i=>au(i)),cu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function oP(t,e,n,r){return new iP(t,e,n,r)}async function d_(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=me();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function aP(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,g=p.keys();let y=M.resolve();return g.forEach((N=>{y=y.next((()=>f.getEntry(l,N))).next((V=>{const L=h.docVersions.get(N);Re(L!==null,48541),V.version.compareTo(L)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=me();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function p_(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function cP(t,e){const n=le(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.li.addMatchingKeys(i,f.addedDocuments,p))));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(rt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(V,L,q){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=sP?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(g,y,f)&&c.push(n.li.updateTargetData(i,y))}));let l=kn(),h=me();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(lP(i,o,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!r.isEqual(ae.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next((p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return M.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.vs=s,i)))}function lP(t,e,n){let r=me(),s=me();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=kn();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(_u,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function uP(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=su),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function hP(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.li.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next((o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r}))}async function El(t,e,n){const r=le(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ns(o))throw o;X(_u,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Cd(t,e,n){const r=le(t);let s=ae.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,f){const p=le(l),g=p.Fs.get(f);return g!==void 0?M.resolve(p.vs.get(g)):p.li.getTargetData(h,f)})(r,o,ln(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:me()))).next((c=>(fP(r,JS(e),c),{documents:c,ks:i})))))}function fP(t,e,n){let r=t.Ms.get(e)||ae.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Ms.set(e,r)}class Nd{constructor(){this.activeTargetIds=nb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dP{constructor(){this.vo=new Nd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Nd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="ConnectivityMonitor";class Dd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){X(Vd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){X(Vd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo=null;function Tl(){return yo===null?yo=(function(){return 268435456+Math.round(2147483648*Math.random())})():yo++,"0x"+yo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="RestConnection",gP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class mP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===na?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Tl(),c=this.Qo(e,n.toUriEncodedString());X(xc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),f=Bi(h);return this.zo(e,c,l,r,f).then((p=>(X(xc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Mr(xc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ps})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,n){const r=gP[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection",Js=(t,e,n)=>{t.listen(e,(r=>{try{n(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class fs extends mP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!fs.c_){const e=Em();Js(e,ym.STAT_EVENT,(n=>{n.stat===al.PROXY?X(at,"STAT_EVENT: detected buffering proxy"):n.stat===al.NOPROXY&&X(at,"STAT_EVENT: detected no buffering proxy")})),fs.c_=!0}}zo(e,n,r,s,i){const o=Tl();return new Promise(((c,l)=>{const h=new mm;h.setWithCredentials(!0),h.listenOnce(_m.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Co.NO_ERROR:const p=h.getResponseJson();X(at,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Co.TIMEOUT:X(at,`RPC '${e}' ${o} timed out`),l(new Q(x.DEADLINE_EXCEEDED,"Request time out"));break;case Co.HTTP_ERROR:const g=h.getStatus();if(X(at,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const N=y==null?void 0:y.error;if(N&&N.status&&N.message){const V=(function(q){const j=q.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(j)>=0?j:x.UNKNOWN})(N.status);l(new Q(V,N.message))}else l(new Q(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Q(x.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{X(at,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(at,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Tl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");X(at,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);this.E_(f);let p=!1,g=!1;const y=new _P({Jo:N=>{g?X(at,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(X(at,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),X(at,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},Ho:()=>f.close()});return Js(f,ei.EventType.OPEN,(()=>{g||(X(at,`RPC '${e}' stream ${s} transport opened.`),y.i_())})),Js(f,ei.EventType.CLOSE,(()=>{g||(g=!0,X(at,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.I_(f))})),Js(f,ei.EventType.ERROR,(N=>{g||(g=!0,Mr(at,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),y.o_(new Q(x.UNAVAILABLE,"The operation could not be completed")))})),Js(f,ei.EventType.MESSAGE,(N=>{var V;if(!g){const L=N.data[0];Re(!!L,16349);const q=L,j=(q==null?void 0:q.error)||((V=q[0])==null?void 0:V.error);if(j){X(at,`RPC '${e}' stream ${s} received error:`,j);const G=j.status;let J=(function(w){const E=$e[w];if(E!==void 0)return e_(E)})(G),ce=j.message;G==="NOT_FOUND"&&ce.includes("database")&&ce.includes("does not exist")&&ce.includes(this.databaseId.database)&&Mr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),J===void 0&&(J=x.INTERNAL,ce="Unknown error status: "+G+" with message "+j.message),g=!0,y.o_(new Q(J,ce)),f.close()}else X(at,`RPC '${e}' stream ${s} received:`,L),y.__(L)}})),fs.u_(),setTimeout((()=>{y.s_()}),0),y}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Tm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t){return new fs(t)}function Mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){return new Ib(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fs.c_=!1;class g_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="PersistentStream";class m_{constructor(e,n,r,s,i,o,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new g_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new Q(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(Od,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(X(Od,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class EP extends m_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Rb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?un(o.readTime):ae.min()})(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=yl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=fl(l)?{documents:Pb(i,l)}:{query:Cb(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=r_(i,o.resumeToken);const h=gl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ae.min())>0){c.readTime=aa(i,o.snapshotVersion.toTimestamp());const h=gl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=Vb(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=yl(this.serializer),n.removeTarget=e,this.q_(n)}}class TP extends m_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=bb(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=yl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>Sb(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{}class IP extends vP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,ml(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(x.UNKNOWN,i.toString())}))}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,ml(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(x.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function wP(t,e,n,r){return new IP(t,e,n,r)}class AP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(On(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="RemoteStore";class RP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{jr(this)&&(X(Lr,"Restarting streams for network reachability change."),await(async function(l){const h=le(l);h.Ia.add(4),await Qi(h),h.Va.set("Unknown"),h.Ia.delete(4),await Ha(h)})(this))}))})),this.Va=new AP(r,s)}}async function Ha(t){if(jr(t))for(const e of t.Ra)await e(!0)}async function Qi(t){for(const e of t.Ra)await e(!1)}function __(t,e){const n=le(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),vu(n)?Tu(n):Vs(n).O_()&&Eu(n,e))}function yu(t,e){const n=le(t),r=Vs(n);n.Ea.delete(e),r.O_()&&y_(n,e),n.Ea.size===0&&(r.O_()?r.L_():jr(n)&&n.Va.set("Unknown"))}function Eu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).Z_(e)}function y_(t,e){t.da.$e(e),Vs(t).X_(e)}function Tu(t){t.da=new yb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.Va.ua()}function vu(t){return jr(t)&&!Vs(t).x_()&&t.Ea.size>0}function jr(t){return le(t).Ia.size===0}function E_(t){t.da=void 0}async function SP(t){t.Va.set("Online")}async function bP(t){t.Ea.forEach(((e,n)=>{Eu(t,e)}))}async function PP(t,e){E_(t),vu(t)?(t.Va.ha(e),Tu(t)):t.Va.set("Unknown")}async function CP(t,e,n){if(t.Va.set("Online"),e instanceof n_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))})(t,e)}catch(r){X(Lr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof Oo?t.da.Xe(e):e instanceof t_?t.da.st(e):t.da.tt(e),!n.isEqual(ae.min()))try{const r=await p_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ea.get(l);if(!f)return;i.Ea.set(l,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),y_(i,l);const p=new Zn(f.target,l,h,f.sequenceNumber);Eu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(Lr,"Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!Ns(e))throw e;t.Ia.add(1),await Qi(t),t.Va.set("Offline"),n||(n=()=>p_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(Lr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ha(t)}))}function T_(t,e){return e().catch((n=>la(t,n,e)))}async function Ga(t){const e=le(t),n=ur(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:su;for(;NP(e);)try{const s=await uP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,VP(e,s)}catch(s){await la(e,s)}v_(e)&&I_(e)}function NP(t){return jr(t)&&t.Ta.length<10}function VP(t,e){t.Ta.push(e);const n=ur(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function v_(t){return jr(t)&&!ur(t).x_()&&t.Ta.length>0}function I_(t){ur(t).start()}async function DP(t){ur(t).ra()}async function OP(t){const e=ur(t);for(const n of t.Ta)e.ea(n.mutations)}async function kP(t,e,n){const r=t.Ta.shift(),s=hu.from(r,e,n);await T_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ga(t)}async function xP(t,e){e&&ur(t).Y_&&await(async function(r,s){if((function(o){return gb(o)&&o!==x.ABORTED})(s.code)){const i=r.Ta.shift();ur(r).B_(),await T_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ga(r)}})(t,e),v_(t)&&I_(t)}async function kd(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),X(Lr,"RemoteStore received new credentials");const r=jr(n);n.Ia.add(3),await Qi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ha(n)}async function MP(t,e){const n=le(t);e?(n.Ia.delete(2),await Ha(n)):e||(n.Ia.add(2),await Qi(n),n.Va.set("Unknown"))}function Vs(t){return t.ma||(t.ma=(function(n,r,s){const i=le(n);return i.sa(),new EP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:SP.bind(null,t),Yo:bP.bind(null,t),t_:PP.bind(null,t),H_:CP.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),vu(t)?Tu(t):t.Va.set("Unknown")):(await t.ma.stop(),E_(t))}))),t.ma}function ur(t){return t.fa||(t.fa=(function(n,r,s){const i=le(n);return i.sa(),new TP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:DP.bind(null,t),t_:xP.bind(null,t),ta:OP.bind(null,t),na:kP.bind(null,t)}),t.Ra.push((async e=>{e?(t.fa.B_(),await Ga(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Lr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Iu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wu(t,e){if(On("AsyncQueue",`${e}: ${t}`),Ns(t))return new Q(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{static emptySet(e){return new ds(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=ti(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.ga=new ke(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Rs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Rs(e,n,ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class FP{constructor(){this.queries=Md(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=Md(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new Q(x.ABORTED,"Firestore shutting down"))}}function Md(){return new Br((t=>$m(t)),Fa)}async function Au(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new LP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=wu(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Su(n)}async function Ru(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UP(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Su(n)}function BP(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Su(t){t.Ca.forEach((e=>{e.next()}))}var vl,Ld;(Ld=vl||(vl={})).Ma="default",Ld.Cache="cache";class bu{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==vl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class jP{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=me(),this.mutatedKeys=me(),this.eu=qm(e),this.tu=new ds(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new xd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const g=s.get(f),y=Ua(this.query,p)?p:null,N=!!g&&this.mutatedKeys.has(g.key),V=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let L=!1;g&&y?g.data.isEqual(y.data)?N!==V&&(r.track({type:3,doc:y}),L=!0):this.su(g,y)||(r.track({type:2,doc:y}),L=!0,(l&&this.eu(y,l)>0||h&&this.eu(y,h)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),L=!0):g&&!y&&(r.track({type:1,doc:g}),L=!0,(l||h)&&(c=!0)),L&&(y?(o=o.add(y),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,N){const V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:L})}};return V(y)-V(N)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new Rs(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xd,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=me(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const n=[];return e.forEach((r=>{this.Ya.has(r)||n.push(new A_(r))})),this.Ya.forEach((r=>{e.has(r)||n.push(new w_(r))})),n}cu(e){this.Za=e.ks,this.Ya=me();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Pu="SyncEngine";class $P{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qP{constructor(e){this.key=e,this.hu=!1}}class HP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Br((c=>$m(c)),Fa),this.Eu=new Map,this.Iu=new Set,this.Ru=new ke(te.comparator),this.Au=new Map,this.Vu=new pu,this.du={},this.mu=new Map,this.fu=As.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function GP(t,e,n=!0){const r=N_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await R_(r,e,n,!0),s}async function WP(t,e){const n=N_(t);await R_(n,e,!0,!1)}async function R_(t,e,n,r){const s=await hP(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await KP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&__(t.remoteStore,s),c}async function KP(t,e,n,r,s){t.pu=(p,g,y)=>(async function(V,L,q,j){let G=L.view.ru(q);G.bs&&(G=await Cd(V.localStore,L.query,!1).then((({documents:w})=>L.view.ru(w,G))));const J=j&&j.targetChanges.get(L.targetId),ce=j&&j.targetMismatches.get(L.targetId)!=null,ye=L.view.applyChanges(G,V.isPrimaryClient,J,ce);return Ud(V,L.targetId,ye.au),ye.snapshot})(t,p,g,y);const i=await Cd(t.localStore,e,!0),o=new jP(e,i.ks),c=o.ru(i.documents),l=zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Ud(t,n,h.au);const f=new $P(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),h.snapshot}async function zP(t,e,n){const r=le(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter((o=>!Fa(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await El(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&yu(r.remoteStore,s.targetId),Il(r,s.targetId)})).catch(Cs)):(Il(r,s.targetId),await El(r.localStore,s.targetId,!0))}async function QP(t,e){const n=le(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yu(n.remoteStore,r.targetId))}async function JP(t,e,n){const r=rC(t);try{const s=await(function(o,c){const l=le(o),h=Oe.now(),f=c.reduce(((y,N)=>y.add(N.key)),me());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let N=kn(),V=me();return l.xs.getEntries(y,f).next((L=>{N=L,N.forEach(((q,j)=>{j.isValidDocument()||(V=V.add(q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,N))).next((L=>{p=L;const q=[];for(const j of c){const G=ub(j,p.get(j.key).overlayedDocument);G!=null&&q.push(new pr(j.key,G,km(G.value.mapValue),Lt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,q,c)})).next((L=>{g=L;const q=L.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(y,L.batchId,q)}))})).then((()=>({batchId:g.batchId,changes:Gm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let h=o.du[o.currentUser.toKey()];h||(h=new ke(ge)),h=h.insert(c,l),o.du[o.currentUser.toKey()]=h})(r,s.batchId,n),await Ji(r,s.changes),await Ga(r.remoteStore)}catch(s){const i=wu(s,"Failed to persist write");n.reject(i)}}async function S_(t,e){const n=le(t);try{const r=await cP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Re(o.hu,14607):s.removedDocuments.size>0&&(Re(o.hu,42227),o.hu=!1))})),await Ji(n,r,e)}catch(r){await Cs(r)}}function Fd(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=le(o);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)})),h&&Su(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YP(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ke(te.comparator);o=o.insert(i,ut.newNoDocument(i,ae.min()));const c=me().add(i),l=new $a(ae.min(),new Map,new ke(ge),o,c);await S_(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),Cu(r)}else await El(r.localStore,e,!1).then((()=>Il(r,e,n))).catch(Cs)}async function XP(t,e){const n=le(t),r=e.batch.batchId;try{const s=await aP(n.localStore,e);P_(n,r,null),b_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ji(n,s)}catch(s){await Cs(s)}}async function ZP(t,e,n){const r=le(t);try{const s=await(function(o,c){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Re(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);P_(r,e,n),b_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ji(r,s)}catch(s){await Cs(s)}}function b_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function P_(t,e,n){const r=le(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Il(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((r=>{t.Vu.containsKey(r)||C_(t,r)}))}function C_(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(yu(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Cu(t))}function Ud(t,e,n){for(const r of n)r instanceof w_?(t.Vu.addReference(r.key,e),eC(t,r)):r instanceof A_?(X(Pu,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||C_(t,r.key)):ie(19791,{wu:r})}function eC(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(X(Pu,"New document in limbo: "+n),t.Iu.add(r),Cu(t))}function Cu(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new te(Ve.fromString(e)),r=t.fu.next();t.Au.set(r,new qP(n)),t.Ru=t.Ru.insert(n,r),__(t.remoteStore,new Zn(ln(La(n.path)),r,"TargetPurposeLimboResolution",ka.ce))}}async function Ji(t,e,n){const r=le(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=mu.Is(l.targetId,h);i.push(p)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,h){const f=le(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(h,(g=>M.forEach(g.Ts,(y=>f.persistence.referenceDelegate.addReference(p,g.targetId,y))).next((()=>M.forEach(g.Es,(y=>f.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))))))}catch(p){if(!Ns(p))throw p;X(_u,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const y=f.vs.get(g),N=y.snapshotVersion,V=y.withLastLimboFreeSnapshotVersion(N);f.vs=f.vs.insert(g,V)}}})(r.localStore,i))}async function tC(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){X(Pu,"User change. New user:",e.toKey());const r=await d_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new Q(x.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ji(n,r.Ns)}}function nC(t,e){const n=le(t),r=n.Au.get(e);if(r&&r.hu)return me().add(r.key);{let s=me();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function N_(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=S_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YP.bind(null,e),e.Pu.H_=UP.bind(null,e.eventManager),e.Pu.yu=BP.bind(null,e.eventManager),e}function rC(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZP.bind(null,e),e}class ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return oP(this.persistence,new rP,e.initialUser,this.serializer)}Cu(e){return new f_(gu.Vi,this.serializer)}Du(e){return new dP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ua.provider={build:()=>new ua};class sC extends ua{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Re(this.persistence.referenceDelegate instanceof ca,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $b(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new f_((r=>ca.Vi(r,n)),this.serializer)}}class wl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tC.bind(null,this.syncEngine),await MP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new FP})()}createDatastore(e){const n=qa(e.databaseInfo.databaseId),r=yP(e.databaseInfo);return wP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new RP(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Fd(this.syncEngine,n,0)),(function(){return Dd.v()?new Dd:new pP})())}createSyncEngine(e,n){return(function(s,i,o,c,l,h,f){const p=new HP(s,i,o,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=le(s);X(Lr,"RemoteStore shutting down."),i.Ia.add(5),await Qi(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}wl.provider={build:()=>new wl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="FirestoreClient";class iC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(hr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(hr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),X(hr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await d_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Bd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oC(t);X(hr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>kd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>kd(e.remoteStore,s))),t._onlineComponents=e}async function oC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(hr,"Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Mr("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new ua)}}else X(hr,"Using default OfflineComponentProvider"),await Lc(t,new sC(void 0));return t._offlineComponents}async function V_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(hr,"Using user provided OnlineComponentProvider"),await Bd(t,t._uninitializedComponentsProvider._online)):(X(hr,"Using default OnlineComponentProvider"),await Bd(t,new wl))),t._onlineComponents}function aC(t){return V_(t).then((e=>e.syncEngine))}async function ha(t){const e=await V_(t),n=e.eventManager;return n.onListen=GP.bind(null,e.syncEngine),n.onUnlisten=zP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QP.bind(null,e.syncEngine),n}function cC(t,e,n,r){const s=new Nu(r),i=new bu(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Au(await ha(t),i))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>Ru(await ha(t),i)))}}function lC(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new Nu({next:g=>{f.Nu(),o.enqueueAndForget((()=>Ru(i,p)));const y=g.docs.has(c);!y&&g.fromCache?h.reject(new Q(x.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?h.reject(new Q(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new bu(La(c.path),f,{includeMetadataChanges:!0,qa:!0});return Au(i,p)})(await ha(t),t.asyncQueue,e,n,r))),r.promise}function uC(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new Nu({next:g=>{f.Nu(),o.enqueueAndForget((()=>Ru(i,p))),g.fromCache&&l.source==="server"?h.reject(new Q(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new bu(c,f,{includeMetadataChanges:!0,qa:!0});return Au(i,p)})(await ha(t),t.asyncQueue,e,n,r))),r.promise}function hC(t,e){const n=new bn;return t.asyncQueue.enqueueAndForget((async()=>JP(await aC(t),e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="ComponentProvider",jd=new Map;function dC(t,e,n,r,s){return new DS(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,D_(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firestore.googleapis.com",$d=!0;class qd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=O_,this.ssl=$d}else this.host=e.host,this.ssl=e.ssl??$d;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=h_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Bb)throw new Q(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=D_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new hS;switch(r.type){case"firstParty":return new gS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=jd.get(n);r&&(X(fC,"Removing Datastore"),jd.delete(n),r.terminate())})(this),Promise.resolve()}}function pC(t,e,n,r={}){var h;t=St(t,Wa);const s=Bi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&bg(`https://${c}`),i.host!==O_&&i.host!==c&&Mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Vr(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ct.MOCK_USER;else{f=mI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Q(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ct(g)}t._authCredentials=new fS(new Im(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $r(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Gi(n,Le._jsonSchema))return new Le(e,r||null,new te(Ve.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:He("string",Le._jsonSchemaVersion),referencePath:He("string")};class sr extends $r{constructor(e,n,r){super(e,n,La(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new te(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function gC(t,e,...n){if(t=Ue(t),wm("collection","path",e),t instanceof Wa){const r=Ve.fromString(e,...n);return nd(r),new sr(t,null,r)}{if(!(t instanceof Le||t instanceof sr))throw new Q(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return nd(r),new sr(t.firestore,null,r)}}function fa(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=ru.newId()),wm("doc","path",e),t instanceof Wa){const r=Ve.fromString(e,...n);return td(r),new Le(t,null,new te(r))}{if(!(t instanceof Le||t instanceof sr))throw new Q(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return td(r),new Le(t.firestore,t instanceof sr?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="AsyncQueue";class Gd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new g_(this,"async_queue_retry"),this._c=()=>{const r=Mc();r&&X(Hd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new bn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ns(e))throw e;X(Hd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,On("INTERNAL UNHANDLED ERROR: ",Wd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Iu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ie(47125,{Pc:Wd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Wd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class xn extends Wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gd(e),this._firestoreClient=void 0,await e}}}function mC(t,e){const n=typeof t=="object"?t:Vg(),r=typeof t=="string"?t:na,s=Kl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pI("firestore");i&&pC(s,...i)}return s}function Ka(t){if(t._terminated)throw new Q(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_C(t),t._firestoreClient}function _C(t){var r,s,i,o;const e=t._freezeSettings(),n=dC(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new iC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xt(rt.fromBase64String(e))}catch(n){throw new Q(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xt(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gi(e,xt._jsonSchema))return xt.fromBase64String(e.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:He("string",xt._jsonSchemaVersion),bytes:He("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(Gi(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:He("string",hn._jsonSchemaVersion),latitude:He("number"),longitude:He("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gi(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ht(e.vectorValues);throw new Q(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:He("string",Ht._jsonSchemaVersion),vectorValues:He("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=/^__.*__$/;class EC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ki(e,this.data,n,this.fieldTransforms)}}class k_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function x_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{dataSource:t})}}class Du{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Du({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return da(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(x_(this.dataSource)&&yC.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class TC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qa(e)}A(e,n,r,s=!1){return new Du({dataSource:e,methodName:n,targetDoc:r,path:tt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qa(t){const e=t._freezeSettings(),n=qa(t._databaseId);return new TC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function M_(t,e,n,r,s,i={}){const o=t.A(i.merge||i.mergeFields?2:0,e,n,s);ku("Data must be an object, but it was:",o,r);const c=L_(r,o);let l,h;if(i.merge)l=new Ot(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Ss(e,p,n);if(!o.contains(g))throw new Q(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);B_(f,g)||f.push(g)}l=new Ot(f),h=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=o.fieldTransforms;return new EC(new At(c),l,h)}class Ja extends za{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ja}}class Ou extends za{_toFieldTransform(e){return new ob(e.path,new Ni)}isEqual(e){return e instanceof Ou}}function vC(t,e,n,r){const s=t.A(1,e,n);ku("Data must be an object, but it was:",s,r);const i=[],o=At.empty();dr(r,((l,h)=>{const f=U_(e,l,n);h=Ue(h);const p=s.fc(f);if(h instanceof Ja)i.push(f);else{const g=Yi(h,p);g!=null&&(i.push(f),o.set(f,g))}}));const c=new Ot(i);return new k_(o,c,s.fieldTransforms)}function IC(t,e,n,r,s,i){const o=t.A(1,e,n),c=[Ss(e,r,n)],l=[s];if(i.length%2!=0)throw new Q(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Ss(e,i[g])),l.push(i[g+1]);const h=[],f=At.empty();for(let g=c.length-1;g>=0;--g)if(!B_(h,c[g])){const y=c[g];let N=l[g];N=Ue(N);const V=o.fc(y);if(N instanceof Ja)h.push(y);else{const L=Yi(N,V);L!=null&&(h.push(y),f.set(y,L))}}const p=new Ot(h);return new k_(f,p,o.fieldTransforms)}function wC(t,e,n,r=!1){return Yi(n,t.A(r?4:3,e))}function Yi(t,e){if(F_(t=Ue(t)))return ku("Unsupported field value:",e,t),L_(t,e);if(t instanceof za)return(function(r,s){if(!x_(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Yi(c,s.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:aa(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:aa(s.serializer,i)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xt)return{bytesValue:r_(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:du(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ht)return(function(o,c){const l=o instanceof Ht?o.toArray():o;return{mapValue:{fields:{[Dm]:{stringValue:Om},[ra]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return lu(c.serializer,f)}))}}}}}})(r,s);if(u_(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Oa(r)}`)})(t,e)}function L_(t,e){const n={};return Sm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dr(t,((r,s)=>{const i=Yi(s,e.dc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function F_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof hn||t instanceof xt||t instanceof Le||t instanceof za||t instanceof Ht||u_(t))}function ku(t,e,n){if(!F_(n)||!Am(n)){const r=Oa(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Ss(t,e,n){if((e=Ue(e))instanceof Vu)return e._internalPath;if(typeof e=="string")return U_(t,e);throw da("Field path arguments must be of type string or ",t,!1,void 0,n)}const AC=new RegExp("[~\\*/\\[\\]]");function U_(t,e,n){if(e.search(AC)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vu(...e.split("."))._internalPath}catch{throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Q(x.INVALID_ARGUMENT,c+t+l)}function B_(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{convertValue(e,n="none"){switch(lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return dr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ra].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>Fe(o.doubleValue)));return new Ht(n)}convertGeoPoint(e){return new hn(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ma(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const n=ar(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Re(l_(r),9688,{name:e});const s=new Pi(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends RC{constructor(e){super(),this.firestore=e}convertBytes(e){return new xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function GC(){return new Ou("serverTimestamp")}const Kd="@firebase/firestore",zd="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ss("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SC extends j_{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mu{}class bC extends Mu{}function PC(t,e,...n){let r=[];e instanceof Mu&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Lu)).length,c=i.filter((l=>l instanceof Ya)).length;if(o>1||o>0&&c>0)throw new Q(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Ya extends bC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ya(e,n,r)}_apply(e){const n=this._parse(e);return q_(e._query,n),new $r(e.firestore,e.converter,dl(e._query,n))}_parse(e){const n=Qa(e.firestore);return(function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Xd(p,f);const N=[];for(const V of p)N.push(Yd(l,i,V));g={arrayValue:{values:N}}}else g=Yd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Xd(p,f),g=wC(c,o,p,f==="in"||f==="not-in");return qe.create(h,f,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Jd(t,e,n){const r=e,s=Ss("where",t);return Ya._create(s,r,n)}class Lu extends Mu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lu(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)q_(o,l),o=dl(o,l)})(e._query,n),new $r(e.firestore,e.converter,dl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Yd(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new Q(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jm(e)&&n.indexOf("/")!==-1)throw new Q(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!te.isDocumentKey(r))throw new Q(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ud(t,new te(r))}if(n instanceof Le)return ud(t,n._key);throw new Q(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oa(n)}.`)}function Xd(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function q_(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new Q(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function H_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cr extends j_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ss("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Cr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Cr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cr._jsonSchema={type:He("string",Cr._jsonSchemaVersion),bundleSource:He("string","DocumentSnapshot"),bundleName:He("string"),bundle:He("string")};class ko extends Cr{data(e={}){return super.data(e)}}class Nr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new ko(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new ko(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ri(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new ko(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ri(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:CC(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Nr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nr._jsonSchemaVersion="firestore/querySnapshot/1.0",Nr._jsonSchema={type:He("string",Nr._jsonSchemaVersion),bundleSource:He("string","QuerySnapshot"),bundleName:He("string"),bundle:He("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t){t=St(t,Le);const e=St(t.firestore,xn),n=Ka(e);return lC(n,t._key).then((r=>W_(e,t,r)))}function NC(t){t=St(t,$r);const e=St(t.firestore,xn),n=Ka(e),r=new xu(e);return $_(t._query),uC(n,t._query).then((s=>new Nr(e,r,t,s)))}function VC(t,e,n){t=St(t,Le);const r=St(t.firestore,xn),s=H_(t.converter,e),i=Qa(r);return Xa(r,[M_(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lt.none())])}function DC(t,e,n,...r){t=St(t,Le);const s=St(t.firestore,xn),i=Qa(s);let o;return o=typeof(e=Ue(e))=="string"||e instanceof Vu?IC(i,"updateDoc",t._key,e,n,r):vC(i,"updateDoc",t._key,e),Xa(s,[o.toMutation(t._key,Lt.exists(!0))])}function WC(t){return Xa(St(t.firestore,xn),[new uu(t._key,Lt.none())])}function KC(t,e){const n=St(t.firestore,xn),r=fa(t),s=H_(t.converter,e),i=Qa(t.firestore);return Xa(n,[M_(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then((()=>r))}function zC(t,...e){var h,f,p;t=Ue(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Qd(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Qd(e[r])){const g=e[r];e[r]=(h=g.next)==null?void 0:h.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,c;if(t instanceof Le)o=St(t.firestore,xn),c=La(t._key.path),i={next:g=>{e[r]&&e[r](W_(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=St(t,$r);o=St(g.firestore,xn),c=g._query;const y=new xu(o);i={next:N=>{e[r]&&e[r](new Nr(o,y,g,N))},error:e[r+1],complete:e[r+2]},$_(t._query)}const l=Ka(o);return cC(l,c,s,i)}function Xa(t,e){const n=Ka(t);return hC(n,e)}function W_(t,e,n){const r=n.docs.get(e._key),s=new xu(t);return new Cr(t,s,e._key,r,new ri(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){uS(bs),Es(new Dr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new xn(new dS(r.getProvider("auth-internal")),new mS(o,r.getProvider("app-check-internal")),OS(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),nr(Kd,zd,e),nr(Kd,zd,"esm2020")})();const OC={apiKey:"AIzaSyB7bzp2zrIKny-j8ZDgkL3NfGNTsM4whNo",authDomain:"toefl-writing-practice.firebaseapp.com",projectId:"toefl-writing-practice",storageBucket:"toefl-writing-practice.firebasestorage.app",messagingSenderId:"383195886043",appId:"1:383195886043:web:f77b1d5b369ae32dbd77fe",measurementId:"G-5S5LCHH8B2"},K_=Ng(OC),si=cS(K_),xo=mC(K_),ts=xi(null),ps=xi(null),Al=xi(!1),ns=xi(!1);let z_;const kC=new Promise(t=>{z_=t});JA(si,async t=>{if(ts.value=t,t){ns.value=!1;const e=await G_(fa(xo,"users",t.uid));ps.value=e.exists()?e.data():null}else ps.value=null;Al.value||(Al.value=!0,z_())});const QC=()=>({user:ts,userProfile:ps,authReady:Al,guestMode:ns,login:async(o,c)=>{ns.value=!1;const l=await GA(si,o,c),h=await G_(fa(xo,"users",l.user.uid));return ps.value=h.exists()?h.data():null,l},register:async(o,c,l,h)=>{let f;try{f=await HA(si,o,c)}catch(p){throw p}try{const p=PC(gC(xo,"codes"),Jd("code","==",h.trim().toUpperCase()),Jd("used","==",!1)),g=await NC(p);if(g.empty){await f.user.delete();const q=new Error("invalid-code");throw q.code="auth/invalid-code",q}const y=g.docs[0],{teacherId:N,teacherName:V}=y.data(),L={name:l,email:o,role:"student",teacherId:N,teacherName:V};return await VC(fa(xo,"users",f.user.uid),L),ps.value=L,await DC(y.ref,{used:!0,usedBy:f.user.uid,usedByName:l}),f}catch(p){if(f&&p.code!=="auth/invalid-code")try{await f.user.delete()}catch{}throw p}},continueAsGuest:()=>{ns.value=!0},logout:async()=>{ns.value=!1,await YA(si)},resetPassword:async o=>{await qA(si,o)},changePassword:async(o,c)=>{const l=Ur.credential(ts.value.email,o);await $A(ts.value,l),await WA(ts.value,c)}}),Q_=iI({history:Lv(),routes:[{path:"/",component:()=>ho(()=>import("./WelcomeView-C1K574dJ.js"),__vite__mapDeps([0,1])),meta:{public:!0}},{path:"/login",component:()=>ho(()=>import("./LoginView-BZjoXgs-.js"),[]),meta:{public:!0}},{path:"/practice",component:()=>ho(()=>import("./PracticeView-DBfkQ8k3.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!0,allowGuest:!0}},{path:"/dashboard",component:()=>ho(()=>import("./DashboardView-BL2wCEcd.js"),__vite__mapDeps([4,3])),meta:{requiresAuth:!0,teacherOnly:!0}}]});Q_.beforeEach(async t=>{var s;await kC;const e=!!ts.value,n=ns.value,r=((s=ps.value)==null?void 0:s.role)==="teacher";if(t.path==="/")return e||n?r?"/dashboard":"/practice":void 0;if(t.meta.requiresAuth&&!e&&!n)return"/login";if(t.meta.teacherOnly&&!r)return"/practice";if(t.path==="/login"&&(e||n))return r?"/dashboard":"/practice"});HT(JT).use(Q_).mount("#app");export{xo as A,GC as B,Fl as C,ts as D,IE as E,Tn as F,jC as G,ps as H,WC as I,fa as J,tg as K,cE as L,eI as R,KT as _,rg as a,FC as b,LC as c,qC as d,xC as e,UC as f,QC as g,xp as h,EE as i,vo as j,Rt as k,MC as l,oT as m,Nl as n,Zp as o,Jd as p,PC as q,xi as r,gC as s,Ny as t,is as u,BC as v,$C as w,zC as x,jt as y,KC as z};
