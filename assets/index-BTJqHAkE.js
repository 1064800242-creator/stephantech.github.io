const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WelcomeView-DgptjB7I.js","assets/WelcomeView-I2YYpUkB.css","assets/LearningCoachView-CYZ9FItB.js","assets/LearningCoachView-BvLtltqc.css","assets/PracticeView-S53EIW3G.js","assets/submissionGrades-CpM-wzCT.js","assets/NavBar-DllOrXP6.js","assets/RecordsView-ZGNmy97T.js","assets/TruePracticeView-DQdYJ6-K.js","assets/DashboardView-BYTlCErV.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ul(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},fs=[],hn=()=>{},vp=()=>!1,Aa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bl=t=>t.startsWith("onUpdate:"),Je=Object.assign,jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ky=Object.prototype.hasOwnProperty,Re=(t,e)=>Ky.call(t,e),ie=Array.isArray,ds=t=>Hi(t)==="[object Map]",Ra=t=>Hi(t)==="[object Set]",jh=t=>Hi(t)==="[object Date]",ue=t=>typeof t=="function",$e=t=>typeof t=="string",_n=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Ip=t=>(be(t)||ue(t))&&ue(t.then)&&ue(t.catch),wp=Object.prototype.toString,Hi=t=>wp.call(t),zy=t=>Hi(t).slice(8,-1),Ap=t=>Hi(t)==="[object Object]",$l=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=Ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Qy=/-\w/g,Tt=Sa(t=>t.replace(Qy,e=>e.slice(1).toUpperCase())),Jy=/\B([A-Z])/g,Kr=Sa(t=>t.replace(Jy,"-$1").toLowerCase()),ba=Sa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ac=Sa(t=>t?`on${ba(t)}`:""),un=(t,e)=>!Object.is(t,e),Co=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Rp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Pa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Yy=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let $h;const Ca=()=>$h||($h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ql(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?tE(r):ql(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||be(t))return t}const Xy=/;(?![^(]*\))/g,Zy=/:([^]+)/,eE=/\/\*[^]*?\*\//g;function tE(t){const e={};return t.replace(eE,"").split(Xy).forEach(n=>{if(n){const r=n.split(Zy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Hl(t){let e="";if($e(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Hl(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rE=Ul(nE);function Sp(t){return!!t||t===""}function sE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Gi(t[r],e[r]);return n}function Gi(t,e){if(t===e)return!0;let n=jh(t),r=jh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_n(t),r=_n(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?sE(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Gi(t[o],e[o]))return!1}}return String(t)===String(e)}function iE(t,e){return t.findIndex(n=>Gi(n,e))}const bp=t=>!!(t&&t.__v_isRef===!0),oE=t=>$e(t)?t:t==null?"":ie(t)||be(t)&&(t.toString===wp||!ue(t.toString))?bp(t)?oE(t.value):JSON.stringify(t,Pp,2):String(t),Pp=(t,e)=>bp(e)?Pp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Rc(r,i)+" =>"]=s,n),{})}:Ra(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rc(n))}:_n(e)?Rc(e):be(e)&&!ie(e)&&!Ap(e)?String(e):e,Rc=(t,e="")=>{var n;return _n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class aE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){this._on>0&&--this._on===0&&(wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cE(){return wt}let Ve;const Sc=new WeakSet;class Cp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sc.has(this)&&(Sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qh(this),Dp(this);const e=Ve,n=Gt;Ve=this,Gt=!0;try{return this.fn()}finally{Op(this),Ve=e,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kl(e);this.deps=this.depsTail=void 0,qh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yc(this)&&this.run()}get dirty(){return Yc(this)}}let Np=0,gi,mi;function Vp(t,e=!1){if(t.flags|=8,e){t.next=mi,mi=t;return}t.next=gi,gi=t}function Gl(){Np++}function Wl(){if(--Np>0)return;if(mi){let e=mi;for(mi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;gi;){let e=gi;for(gi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Dp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Op(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Kl(r),lE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Yc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bi)||(t.globalVersion=bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Yc(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Gt;Ve=t,Gt=!0;try{Dp(t);const s=t.fn(t._value);(e.version===0||un(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Gt=r,Op(t),t.flags&=-3}}function Kl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Kl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function lE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gt=!0;const xp=[];function Dn(){xp.push(Gt),Gt=!1}function On(){const t=xp.pop();Gt=t===void 0?!0:t}function qh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let bi=0;class uE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Gt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new uE(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Lp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,bi++,this.notify(e)}notify(e){Gl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wl()}}}function Lp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Lp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xc=new WeakMap,Lr=Symbol(""),Zc=Symbol(""),Pi=Symbol("");function ut(t,e,n){if(Gt&&Ve){let r=Xc.get(t);r||Xc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new zl),s.map=r,s.key=n),s.track()}}function Sn(t,e,n,r,s,i){const o=Xc.get(t);if(!o){bi++;return}const c=l=>{l&&l.trigger()};if(Gl(),e==="clear")o.forEach(c);else{const l=ie(t),u=l&&$l(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Pi||!_n(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Pi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Lr)),ds(t)&&c(o.get(Zc)));break;case"delete":l||(c(o.get(Lr)),ds(t)&&c(o.get(Zc)));break;case"set":ds(t)&&c(o.get(Lr));break}}Wl()}function ns(t){const e=Ie(t);return e===t?e:(ut(e,"iterate",Pi),Ft(t)?e:e.map(zt))}function Na(t){return ut(t=Ie(t),"iterate",Pi),t}function an(t,e){return kn(t)?As(Mr(t)?zt(e):e):zt(e)}const hE={__proto__:null,[Symbol.iterator](){return bc(this,Symbol.iterator,t=>an(this,t))},concat(...t){return ns(this).concat(...t.map(e=>ie(e)?ns(e):e))},entries(){return bc(this,"entries",t=>(t[1]=an(this,t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(r=>an(this,r)),arguments)},find(t,e){return vn(this,"find",t,e,n=>an(this,n),arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,n=>an(this,n),arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Pc(this,"includes",t)},indexOf(...t){return Pc(this,"indexOf",t)},join(t){return ns(this).join(t)},lastIndexOf(...t){return Pc(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return ti(this,"pop")},push(...t){return ti(this,"push",t)},reduce(t,...e){return Hh(this,"reduce",t,e)},reduceRight(t,...e){return Hh(this,"reduceRight",t,e)},shift(){return ti(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return ti(this,"splice",t)},toReversed(){return ns(this).toReversed()},toSorted(t){return ns(this).toSorted(t)},toSpliced(...t){return ns(this).toSpliced(...t)},unshift(...t){return ti(this,"unshift",t)},values(){return bc(this,"values",t=>an(this,t))}};function bc(t,e,n){const r=Na(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const fE=Array.prototype;function vn(t,e,n,r,s,i){const o=Na(t),c=o!==t&&!Ft(t),l=o[e];if(l!==fE[e]){const p=l.apply(t,i);return c?zt(p):p}let u=n;o!==t&&(c?u=function(p,g){return n.call(this,an(t,p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Hh(t,e,n,r){const s=Na(t),i=s!==t&&!Ft(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=an(t,u)),n.call(this,u,an(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?an(t,l):l}function Pc(t,e,n){const r=Ie(t);ut(r,"iterate",Pi);const s=r[e](...n);return(s===-1||s===!1)&&Yl(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function ti(t,e,n=[]){Dn(),Gl();const r=Ie(t)[e].apply(t,n);return Wl(),On(),r}const dE=Ul("__proto__,__v_isRef,__isVue"),Mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_n));function pE(t){_n(t)||(t=String(t));const e=Ie(this);return ut(e,"has",t),e.hasOwnProperty(t)}class Fp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?AE:$p:i?jp:Bp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let l;if(o&&(l=hE[n]))return l;if(n==="hasOwnProperty")return pE}const c=Reflect.get(e,n,dt(e)?e:r);if((_n(n)?Mp.has(n):dE(n))||(s||ut(e,"get",n),i))return c;if(dt(c)){const l=o&&$l(n)?c:c.value;return s&&be(l)?tl(l):l}return be(c)?s?tl(c):Va(c):c}}class Up extends Fp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ie(e)&&$l(n);if(!this._isShallow){const u=kn(i);if(!Ft(r)&&!kn(r)&&(i=Ie(i),r=Ie(r)),!o&&dt(i)&&!dt(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,dt(e)?e:s);return e===Ie(s)&&(c?un(r,i)&&Sn(e,"set",n,r):Sn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!_n(n)||!Mp.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",ie(e)?"length":Lr),Reflect.ownKeys(e)}}class gE extends Fp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mE=new Up,_E=new gE,yE=new Up(!0);const el=t=>t,To=t=>Reflect.getPrototypeOf(t);function EE(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?el:e?As:zt;return!e&&ut(i,"iterate",l?Zc:Lr),Je(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function vo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function TE(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);t||(un(s,c)&&ut(o,"get",s),ut(o,"get",c));const{has:l}=To(o),u=e?el:t?As:zt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ut(Ie(s),"iterate",Lr),s.size},has(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);return t||(un(s,c)&&ut(o,"has",s),ut(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ie(c),u=e?el:t?As:zt;return!t&&ut(l,"iterate",Lr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Je(n,t?{add:vo("add"),set:vo("set"),delete:vo("delete"),clear:vo("clear")}:{add(s){const i=Ie(this),o=To(i),c=Ie(s),l=!e&&!Ft(s)&&!kn(s)?c:s;return o.has.call(i,l)||un(s,l)&&o.has.call(i,s)||un(c,l)&&o.has.call(i,c)||(i.add(l),Sn(i,"add",l,l)),this},set(s,i){!e&&!Ft(i)&&!kn(i)&&(i=Ie(i));const o=Ie(this),{has:c,get:l}=To(o);let u=c.call(o,s);u||(s=Ie(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?un(i,f)&&Sn(o,"set",s,i):Sn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:c}=To(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Sn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Sn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=EE(s,t,e)}),n}function Ql(t,e){const n=TE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const vE={get:Ql(!1,!1)},IE={get:Ql(!1,!0)},wE={get:Ql(!0,!1)};const Bp=new WeakMap,jp=new WeakMap,$p=new WeakMap,AE=new WeakMap;function RE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function SE(t){return t.__v_skip||!Object.isExtensible(t)?0:RE(zy(t))}function Va(t){return kn(t)?t:Jl(t,!1,mE,vE,Bp)}function qp(t){return Jl(t,!1,yE,IE,jp)}function tl(t){return Jl(t,!0,_E,wE,$p)}function Jl(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=SE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Mr(t){return kn(t)?Mr(t.__v_raw):!!(t&&t.__v_isReactive)}function kn(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function Yl(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function bE(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Rp(t,"__v_skip",!0),t}const zt=t=>be(t)?Va(t):t,As=t=>be(t)?tl(t):t;function dt(t){return t?t.__v_isRef===!0:!1}function Wi(t){return Hp(t,!1)}function PE(t){return Hp(t,!0)}function Hp(t,e){return dt(t)?t:new CE(t,e)}class CE{constructor(e,n){this.dep=new zl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:zt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||kn(e);e=r?e:Ie(e),un(e,n)&&(this._rawValue=e,this._value=r?e:zt(e),this.dep.trigger())}}function ps(t){return dt(t)?t.value:t}const NE={get:(t,e,n)=>e==="__v_raw"?t:ps(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return dt(s)&&!dt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Gp(t){return Mr(t)?t:new Proxy(t,NE)}class VE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new zl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Vp(this,!0),!0}get value(){const e=this.dep.track();return kp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function DE(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new VE(r,s,n)}const Io={},Wo=new WeakMap;let Nr;function OE(t,e=!1,n=Nr){if(n){let r=Wo.get(n);r||Wo.set(n,r=[]),r.push(t)}}function kE(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=W=>s?W:Ft(W)||s===!1||s===0?bn(W,1):bn(W);let f,p,g,y,C=!1,V=!1;if(dt(t)?(p=()=>t.value,C=Ft(t)):Mr(t)?(p=()=>u(t),C=!0):ie(t)?(V=!0,C=t.some(W=>Mr(W)||Ft(W)),p=()=>t.map(W=>{if(dt(W))return W.value;if(Mr(W))return u(W);if(ue(W))return l?l(W,2):W()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){Dn();try{g()}finally{On()}}const W=Nr;Nr=f;try{return l?l(t,3,[y]):t(y)}finally{Nr=W}}:p=hn,e&&s){const W=p,ne=s===!0?1/0:s;p=()=>bn(W(),ne)}const L=cE(),q=()=>{f.stop(),L&&L.active&&jl(L.effects,f)};if(i&&e){const W=e;e=(...ne)=>{W(...ne),q()}}let B=V?new Array(t.length).fill(Io):Io;const H=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const ne=f.run();if(s||C||(V?ne.some((le,R)=>un(le,B[R])):un(ne,B))){g&&g();const le=Nr;Nr=f;try{const R=[ne,B===Io?void 0:V&&B[0]===Io?[]:B,y];B=ne,l?l(e,3,R):e(...R)}finally{Nr=le}}}else f.run()};return c&&c(H),f=new Cp(p),f.scheduler=o?()=>o(H,!1):H,y=W=>OE(W,!1,f),g=f.onStop=()=>{const W=Wo.get(f);if(W){if(l)l(W,4);else for(const ne of W)ne();Wo.delete(f)}},e?r?H(!0):B=f.run():o?o(H.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function bn(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,dt(t))bn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(Ra(t)||ds(t))t.forEach(r=>{bn(r,e,n)});else if(Ap(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ki(t,e,n,r){try{return r?t(...r):t()}catch(s){Da(s,e,n)}}function Qt(t,e,n,r){if(ue(t)){const s=Ki(t,e,n,r);return s&&Ip(s)&&s.catch(i=>{Da(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}}function Da(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Dn(),Ki(i,null,10,[t,l,u]),On();return}}xE(t,n,s,r,o)}function xE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const yt=[];let rn=-1;const gs=[];let Xn=null,rs=0;const Wp=Promise.resolve();let Ko=null;function Xl(t){const e=Ko||Wp;return t?e.then(this?t.bind(this):t):e}function LE(t){let e=rn+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=Ci(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Zl(t){if(!(t.flags&1)){const e=Ci(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=Ci(n)?yt.push(t):yt.splice(LE(e),0,t),t.flags|=1,Kp()}}function Kp(){Ko||(Ko=Wp.then(Qp))}function ME(t){ie(t)?gs.push(...t):Xn&&t.id===-1?Xn.splice(rs+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),Kp()}function Gh(t,e,n=rn+1){for(;n<yt.length;n++){const r=yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zp(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>Ci(n)-Ci(r));if(gs.length=0,Xn){Xn.push(...e);return}for(Xn=e,rs=0;rs<Xn.length;rs++){const n=Xn[rs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xn=null,rs=0}}const Ci=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Qp(t){try{for(rn=0;rn<yt.length;rn++){const e=yt[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ki(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<yt.length;rn++){const e=yt[rn];e&&(e.flags&=-2)}rn=-1,yt.length=0,zp(),Ko=null,(yt.length||gs.length)&&Qp()}}let Dt=null,Jp=null;function zo(t){const e=Dt;return Dt=t,Jp=t&&t.type.__scopeId||null,e}function FE(t,e=Dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Yo(-1);const i=zo(e);let o;try{o=t(...s)}finally{zo(i),r._d&&Yo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function p0(t,e){if(Dt===null)return t;const n=Ma(Dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Rr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Dn(),Qt(l,n,8,[t.el,c,t,e]),On())}}function No(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=Og();if(r||ms){let s=ms?ms._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const UE=Symbol.for("v-scx"),BE=()=>Wt(UE);function Vo(t,e,n){return Yp(t,e,n)}function Yp(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=Je({},n),l=e&&r||!e&&i!=="post";let u;if(Di){if(i==="sync"){const y=BE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=hn,y.resume=hn,y.pause=hn,y}}const f=ft;c.call=(y,C,V)=>Qt(y,f,C,V);let p=!1;i==="post"?c.scheduler=y=>{It(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,C)=>{C?y():Zl(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const g=kE(t,e,c);return Di&&(u?u.push(g):l&&g()),g}function jE(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Xp(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=zi(this),c=Yp(s,i.bind(r),n);return o(),c}function Xp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $E=Symbol("_vte"),Zp=t=>t.__isTeleport,sn=Symbol("_leaveCb"),ni=Symbol("_enterCb");function qE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cg(()=>{t.isMounted=!0}),lg(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],eg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},tg=t=>{const e=t.subTree;return e.component?tg(e.component):e},HE={name:"BaseTransition",props:eg,setup(t,{slots:e}){const n=Og(),r=qE();return()=>{const s=e.default&&sg(e.default(),!0);if(!s||!s.length)return;const i=ng(s),o=Ie(t),{mode:c}=o;if(r.isLeaving)return Cc(i);const l=Wh(i);if(!l)return Cc(i);let u=nl(l,o,r,n,p=>u=p);l.type!==Et&&Ni(l,u);let f=n.subTree&&Wh(n.subTree);if(f&&f.type!==Et&&!Dr(f,l)&&tg(n).type!==Et){let p=nl(f,o,r,n);if(Ni(f,p),c==="out-in"&&l.type!==Et)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Cc(i);c==="in-out"&&l.type!==Et?p.delayLeave=(g,y,C)=>{const V=rg(r,f);V[String(f.key)]=f,g[sn]=()=>{y(),g[sn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function ng(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Et){e=n;break}}return e}const GE=HE;function rg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function nl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:y,onAfterLeave:C,onLeaveCancelled:V,onBeforeAppear:L,onAppear:q,onAfterAppear:B,onAppearCancelled:H}=e,W=String(t.key),ne=rg(n,t),le=(_,S)=>{_&&Qt(_,r,9,S)},R=(_,S)=>{const A=S[1];le(_,S),ie(_)?_.every(w=>w.length<=1)&&A():_.length<=1&&A()},v={mode:o,persisted:c,beforeEnter(_){let S=l;if(!n.isMounted)if(i)S=L||l;else return;_[sn]&&_[sn](!0);const A=ne[W];A&&Dr(t,A)&&A.el[sn]&&A.el[sn](),le(S,[_])},enter(_){if(ne[W]===t)return;let S=u,A=f,w=p;if(!n.isMounted)if(i)S=q||u,A=B||f,w=H||p;else return;let E=!1;_[ni]=Be=>{E||(E=!0,Be?le(w,[_]):le(A,[_]),v.delayedLeave&&v.delayedLeave(),_[ni]=void 0)};const Te=_[ni].bind(null,!1);S?R(S,[_,Te]):Te()},leave(_,S){const A=String(t.key);if(_[ni]&&_[ni](!0),n.isUnmounting)return S();le(g,[_]);let w=!1;_[sn]=Te=>{w||(w=!0,S(),Te?le(V,[_]):le(C,[_]),_[sn]=void 0,ne[A]===t&&delete ne[A])};const E=_[sn].bind(null,!1);ne[A]=t,y?R(y,[_,E]):E()},clone(_){const S=nl(_,e,n,r,s);return s&&s(S),S}};return v}function Cc(t){if(Oa(t))return t=ur(t),t.children=null,t}function Wh(t){if(!Oa(t))return Zp(t.type)&&t.children?ng(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Ni(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ni(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===cn?(o.patchFlag&128&&s++,r=r.concat(sg(o.children,e,c))):(e||o.type!==Et)&&r.push(c!=null?ur(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ig(t,e){return ue(t)?Je({name:t.name},e,{setup:t}):t}function og(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Kh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Qo=new WeakMap;function _i(t,e,n,r,s=!1){if(ie(t)){t.forEach((V,L)=>_i(V,e&&(ie(e)?e[L]:e),n,r,s));return}if(yi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&_i(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ma(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,g=Ie(p),y=p===Ne?vp:V=>Kh(f,V)?!1:Re(g,V),C=(V,L)=>!(L&&Kh(f,L));if(u!=null&&u!==l){if(zh(e),$e(u))f[u]=null,y(u)&&(p[u]=null);else if(dt(u)){const V=e;C(u,V.k)&&(u.value=null),V.k&&(f[V.k]=null)}}if(ue(l))Ki(l,c,12,[o,f]);else{const V=$e(l),L=dt(l);if(V||L){const q=()=>{if(t.f){const B=V?y(l)?p[l]:f[l]:C()||!t.k?l.value:f[t.k];if(s)ie(B)&&jl(B,i);else if(ie(B))B.includes(i)||B.push(i);else if(V)f[l]=[i],y(l)&&(p[l]=f[l]);else{const H=[i];C(l,t.k)&&(l.value=H),t.k&&(f[t.k]=H)}}else V?(f[l]=o,y(l)&&(p[l]=o)):L&&(C(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const B=()=>{q(),Qo.delete(t)};B.id=-1,Qo.set(t,B),It(B,n)}else zh(t),q()}}}function zh(t){const e=Qo.get(t);e&&(e.flags|=8,Qo.delete(t))}Ca().requestIdleCallback;Ca().cancelIdleCallback;const yi=t=>!!t.type.__asyncLoader,Oa=t=>t.type.__isKeepAlive;function WE(t,e){ag(t,"a",e)}function KE(t,e){ag(t,"da",e)}function ag(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&zE(r,e,n,s),s=s.parent}}function zE(t,e,n,r){const s=ka(e,t,r,!0);ug(()=>{jl(r[e],s)},n)}function ka(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Dn();const c=zi(n),l=Qt(e,n,t,o);return c(),On(),l});return r?s.unshift(i):s.push(i),i}}const Bn=t=>(e,n=ft)=>{(!Di||t==="sp")&&ka(t,(...r)=>e(...r),n)},QE=Bn("bm"),cg=Bn("m"),JE=Bn("bu"),YE=Bn("u"),lg=Bn("bum"),ug=Bn("um"),XE=Bn("sp"),ZE=Bn("rtg"),eT=Bn("rtc");function tT(t,e=ft){ka("ec",t,e)}const nT="components";function rT(t,e){return iT(nT,t,!0,e)||t}const sT=Symbol.for("v-ndc");function iT(t,e,n=!0,r=!1){const s=Dt||ft;if(s){const i=s.type;{const c=HT(i,!1);if(c&&(c===e||c===Tt(e)||c===ba(Tt(e))))return i}const o=Qh(s[t]||i[t],e)||Qh(s.appContext[t],e);return!o&&r?i:o}}function Qh(t,e){return t&&(t[e]||t[Tt(e)]||t[ba(Tt(e))])}function g0(t,e,n,r){let s;const i=n,o=ie(t);if(o||$e(t)){const c=o&&Mr(t);let l=!1,u=!1;c&&(l=!Ft(t),u=kn(t),t=Na(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?As(zt(t[f])):zt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(be(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const rl=t=>t?kg(t)?Ma(t):rl(t.parent):null,Ei=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rl(t.parent),$root:t=>rl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fg(t),$forceUpdate:t=>t.f||(t.f=()=>{Zl(t.update)}),$nextTick:t=>t.n||(t.n=Xl.bind(t.proxy)),$watch:t=>jE.bind(t)}),Nc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Re(t,e),oT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Nc(r,e))return o[e]=1,r[e];if(s!==Ne&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==Ne&&Re(n,e))return o[e]=4,n[e];sl&&(o[e]=0)}}const u=Ei[e];let f,p;if(u)return e==="$attrs"&&ut(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ne&&Re(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Nc(s,e)?(s[e]=n,!0):r!==Ne&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Re(t,c)||Nc(e,c)||Re(i,c)||Re(r,c)||Re(Ei,c)||Re(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Jh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let sl=!0;function aT(t){const e=fg(t),n=t.proxy,r=t.ctx;sl=!1,e.beforeCreate&&Yh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:y,updated:C,activated:V,deactivated:L,beforeDestroy:q,beforeUnmount:B,destroyed:H,unmounted:W,render:ne,renderTracked:le,renderTriggered:R,errorCaptured:v,serverPrefetch:_,expose:S,inheritAttrs:A,components:w,directives:E,filters:Te}=e;if(u&&cT(u,r,null),o)for(const we in o){const ye=o[we];ue(ye)&&(r[we]=ye.bind(n))}if(s){const we=s.call(n,n);be(we)&&(t.data=Va(we))}if(sl=!0,i)for(const we in i){const ye=i[we],vt=ue(ye)?ye.bind(n,n):ue(ye.get)?ye.get.bind(n,n):hn,Zt=!ue(ye)&&ue(ye.set)?ye.set.bind(n):hn,Pt=qt({get:vt,set:Zt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:et=>Pt.value=et})}if(c)for(const we in c)hg(c[we],r,n,we);if(l){const we=ue(l)?l.call(n):l;Reflect.ownKeys(we).forEach(ye=>{No(ye,we[ye])})}f&&Yh(f,t,"c");function xe(we,ye){ie(ye)?ye.forEach(vt=>we(vt.bind(n))):ye&&we(ye.bind(n))}if(xe(QE,p),xe(cg,g),xe(JE,y),xe(YE,C),xe(WE,V),xe(KE,L),xe(tT,v),xe(eT,le),xe(ZE,R),xe(lg,B),xe(ug,W),xe(XE,_),ie(S))if(S.length){const we=t.exposed||(t.exposed={});S.forEach(ye=>{Object.defineProperty(we,ye,{get:()=>n[ye],set:vt=>n[ye]=vt,enumerable:!0})})}else t.exposed||(t.exposed={});ne&&t.render===hn&&(t.render=ne),A!=null&&(t.inheritAttrs=A),w&&(t.components=w),E&&(t.directives=E),_&&og(t)}function cT(t,e,n=hn){ie(t)&&(t=il(t));for(const r in t){const s=t[r];let i;be(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),dt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Yh(t,e,n){Qt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hg(t,e,n,r){let s=r.includes(".")?Xp(n,r):()=>n[r];if($e(t)){const i=e[t];ue(i)&&Vo(s,i)}else if(ue(t))Vo(s,t.bind(n));else if(be(t))if(ie(t))t.forEach(i=>hg(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Vo(s,i,t)}}function fg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Jo(l,u,o,!0)),Jo(l,e,o)),be(e)&&i.set(e,l),l}function Jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jo(t,i,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=lT[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const lT={data:Xh,props:Zh,emits:Zh,methods:oi,computed:oi,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:oi,directives:oi,watch:hT,provide:Xh,inject:uT};function Xh(t,e){return e?t?function(){return Je(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function uT(t,e){return oi(il(t),il(e))}function il(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?Je(Object.create(null),t,e):e}function Zh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:Je(Object.create(null),Jh(t),Jh(e??{})):e}function hT(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function dg(){return{app:null,config:{isNativeTag:vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fT=0;function dT(t,e){return function(r,s=null){ue(r)||(r=Je({},r)),s!=null&&!be(s)&&(s=null);const i=dg(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:fT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:WT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(u,...p)):ue(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!l){const y=u._ceVNode||St(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,f,g),l=!0,u._container=f,f.__vue_app__=u,Ma(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Qt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ms;ms=u;try{return f()}finally{ms=p}}};return u}}let ms=null;const pT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Tt(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function gT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&pT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>$e(f)?f.trim():f)),o.number&&(s=n.map(Pa)));let c,l=r[c=Ac(e)]||r[c=Ac(Tt(e))];!l&&i&&(l=r[c=Ac(Kr(e))]),l&&Qt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Qt(u,t,6,s)}}const mT=new WeakMap;function pg(t,e,n=!1){const r=n?mT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=u=>{const f=pg(u,e,!0);f&&(c=!0,Je(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(be(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>o[l]=null):Je(o,i),be(t)&&r.set(t,o),o)}function xa(t,e){return!t||!Aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Kr(e))||Re(t,e))}function ef(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:g,setupState:y,ctx:C,inheritAttrs:V}=t,L=zo(t);let q,B;try{if(n.shapeFlag&4){const W=s||r,ne=W;q=ln(u.call(ne,W,f,p,y,g,C)),B=c}else{const W=e;q=ln(W.length>1?W(p,{attrs:c,slots:o,emit:l}):W(p,null)),B=e.props?c:_T(c)}}catch(W){Ti.length=0,Da(W,t,1),q=St(Et)}let H=q;if(B&&V!==!1){const W=Object.keys(B),{shapeFlag:ne}=H;W.length&&ne&7&&(i&&W.some(Bl)&&(B=yT(B,i)),H=ur(H,B,!1,!0))}return n.dirs&&(H=ur(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Ni(H,n.transition),q=H,zo(L),q}const _T=t=>{let e;for(const n in t)(n==="class"||n==="style"||Aa(n))&&((e||(e={}))[n]=t[n]);return e},yT=(t,e)=>{const n={};for(const r in t)(!Bl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ET(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?tf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(gg(o,r,g)&&!xa(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?tf(r,o,u):!0:!!o;return!1}function tf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(gg(e,t,i)&&!xa(n,i))return!0}return!1}function gg(t,e,n){const r=t[n],s=e[n];return n==="style"&&be(r)&&be(s)?!Gi(r,s):r!==s}function TT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const mg={},_g=()=>Object.create(mg),yg=t=>Object.getPrototypeOf(t)===mg;function vT(t,e,n,r=!1){const s={},i=_g();t.propsDefaults=Object.create(null),Eg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:qp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function IT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(xa(t.emitsOptions,g))continue;const y=e[g];if(l)if(Re(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const C=Tt(g);s[C]=ol(l,c,C,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{Eg(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Kr(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=ol(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],u=!0)}u&&Sn(t.attrs,"set","")}function Eg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(pi(l))continue;const u=e[l];let f;s&&Re(s,f=Tt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:xa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=ol(s,l,p,u[p],t,!Re(u,p))}}return o}function ol(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=zi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const wT=new WeakMap;function Tg(t,e,n=!1){const r=n?wT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[g,y]=Tg(p,e,!0);Je(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return be(t)&&r.set(t,fs),fs;if(ie(i))for(let f=0;f<i.length;f++){const p=Tt(i[f]);nf(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=Tt(f);if(nf(p)){const g=i[f],y=o[p]=ie(g)||ue(g)?{type:g}:Je({},g),C=y.type;let V=!1,L=!0;if(ie(C))for(let q=0;q<C.length;++q){const B=C[q],H=ue(B)&&B.name;if(H==="Boolean"){V=!0;break}else H==="String"&&(L=!1)}else V=ue(C)&&C.name==="Boolean";y[0]=V,y[1]=L,(V||Re(y,"default"))&&c.push(p)}}const u=[o,c];return be(t)&&r.set(t,u),u}function nf(t){return t[0]!=="$"&&!pi(t)}const eu=t=>t==="_"||t==="_ctx"||t==="$stable",tu=t=>ie(t)?t.map(ln):[ln(t)],AT=(t,e,n)=>{if(e._n)return e;const r=FE((...s)=>tu(e(...s)),n);return r._c=!1,r},vg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eu(s))continue;const i=t[s];if(ue(i))e[s]=AT(s,i,r);else if(i!=null){const o=tu(i);e[s]=()=>o}}},Ig=(t,e)=>{const n=tu(e);t.slots.default=()=>n},wg=(t,e,n)=>{for(const r in e)(n||!eu(r))&&(t[r]=e[r])},RT=(t,e,n)=>{const r=t.slots=_g();if(t.vnode.shapeFlag&32){const s=e._;s?(wg(r,e,n),n&&Rp(r,"_",s,!0)):vg(e,r)}else e&&Ig(t,e)},ST=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:wg(s,e,n):(i=!e.$stable,vg(e,s)),o=e}else e&&(Ig(t,e),o={default:1});if(i)for(const c in s)!eu(c)&&o[c]==null&&delete s[c]},It=VT;function bT(t){return PT(t)}function PT(t,e){const n=Ca();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:y=hn,insertStaticContent:C}=t,V=(T,I,b,D=null,F=null,O=null,K=void 0,$=null,j=!!I.dynamicChildren)=>{if(T===I)return;T&&!Dr(T,I)&&(D=k(T),et(T,F,O,!0),T=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:U,ref:re,shapeFlag:Q}=I;switch(U){case La:L(T,I,b,D);break;case Et:q(T,I,b,D);break;case Do:T==null&&B(I,b,D,K);break;case cn:w(T,I,b,D,F,O,K,$,j);break;default:Q&1?ne(T,I,b,D,F,O,K,$,j):Q&6?E(T,I,b,D,F,O,K,$,j):(Q&64||Q&128)&&U.process(T,I,b,D,F,O,K,$,j,Z)}re!=null&&F?_i(re,T&&T.ref,O,I||T,!I):re==null&&T&&T.ref!=null&&_i(T.ref,null,O,T,!0)},L=(T,I,b,D)=>{if(T==null)r(I.el=c(I.children),b,D);else{const F=I.el=T.el;I.children!==T.children&&u(F,I.children)}},q=(T,I,b,D)=>{T==null?r(I.el=l(I.children||""),b,D):I.el=T.el},B=(T,I,b,D)=>{[T.el,T.anchor]=C(T.children,I,b,D,T.el,T.anchor)},H=({el:T,anchor:I},b,D)=>{let F;for(;T&&T!==I;)F=g(T),r(T,b,D),T=F;r(I,b,D)},W=({el:T,anchor:I})=>{let b;for(;T&&T!==I;)b=g(T),s(T),T=b;s(I)},ne=(T,I,b,D,F,O,K,$,j)=>{if(I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),T==null)le(I,b,D,F,O,K,$,j);else{const U=T.el&&T.el._isVueCE?T.el:null;try{U&&U._beginPatch(),_(T,I,F,O,K,$,j)}finally{U&&U._endPatch()}}},le=(T,I,b,D,F,O,K,$)=>{let j,U;const{props:re,shapeFlag:Q,transition:ee,dirs:se}=T;if(j=T.el=o(T.type,O,re&&re.is,re),Q&8?f(j,T.children):Q&16&&v(T.children,j,null,D,F,Vc(T,O),K,$),se&&Rr(T,null,D,"created"),R(j,T,T.scopeId,K,D),re){for(const Pe in re)Pe!=="value"&&!pi(Pe)&&i(j,Pe,null,re[Pe],O,D);"value"in re&&i(j,"value",null,re.value,O),(U=re.onVnodeBeforeMount)&&nn(U,D,T)}se&&Rr(T,null,D,"beforeMount");const de=CT(F,ee);de&&ee.beforeEnter(j),r(j,I,b),((U=re&&re.onVnodeMounted)||de||se)&&It(()=>{U&&nn(U,D,T),de&&ee.enter(j),se&&Rr(T,null,D,"mounted")},F)},R=(T,I,b,D,F)=>{if(b&&y(T,b),D)for(let O=0;O<D.length;O++)y(T,D[O]);if(F){let O=F.subTree;if(I===O||bg(O.type)&&(O.ssContent===I||O.ssFallback===I)){const K=F.vnode;R(T,K,K.scopeId,K.slotScopeIds,F.parent)}}},v=(T,I,b,D,F,O,K,$,j=0)=>{for(let U=j;U<T.length;U++){const re=T[U]=$?Rn(T[U]):ln(T[U]);V(null,re,I,b,D,F,O,K,$)}},_=(T,I,b,D,F,O,K)=>{const $=I.el=T.el;let{patchFlag:j,dynamicChildren:U,dirs:re}=I;j|=T.patchFlag&16;const Q=T.props||Ne,ee=I.props||Ne;let se;if(b&&Sr(b,!1),(se=ee.onVnodeBeforeUpdate)&&nn(se,b,I,T),re&&Rr(I,T,b,"beforeUpdate"),b&&Sr(b,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f($,""),U?S(T.dynamicChildren,U,$,b,D,Vc(I,F),O):K||ye(T,I,$,null,b,D,Vc(I,F),O,!1),j>0){if(j&16)A($,Q,ee,b,F);else if(j&2&&Q.class!==ee.class&&i($,"class",null,ee.class,F),j&4&&i($,"style",Q.style,ee.style,F),j&8){const de=I.dynamicProps;for(let Pe=0;Pe<de.length;Pe++){const ve=de[Pe],ot=Q[ve],at=ee[ve];(at!==ot||ve==="value")&&i($,ve,ot,at,F,b)}}j&1&&T.children!==I.children&&f($,I.children)}else!K&&U==null&&A($,Q,ee,b,F);((se=ee.onVnodeUpdated)||re)&&It(()=>{se&&nn(se,b,I,T),re&&Rr(I,T,b,"updated")},D)},S=(T,I,b,D,F,O,K)=>{for(let $=0;$<I.length;$++){const j=T[$],U=I[$],re=j.el&&(j.type===cn||!Dr(j,U)||j.shapeFlag&198)?p(j.el):b;V(j,U,re,null,D,F,O,K,!0)}},A=(T,I,b,D,F)=>{if(I!==b){if(I!==Ne)for(const O in I)!pi(O)&&!(O in b)&&i(T,O,I[O],null,F,D);for(const O in b){if(pi(O))continue;const K=b[O],$=I[O];K!==$&&O!=="value"&&i(T,O,$,K,F,D)}"value"in b&&i(T,"value",I.value,b.value,F)}},w=(T,I,b,D,F,O,K,$,j)=>{const U=I.el=T?T.el:c(""),re=I.anchor=T?T.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:se}=I;se&&($=$?$.concat(se):se),T==null?(r(U,b,D),r(re,b,D),v(I.children||[],b,re,F,O,K,$,j)):Q>0&&Q&64&&ee&&T.dynamicChildren&&T.dynamicChildren.length===ee.length?(S(T.dynamicChildren,ee,b,F,O,K,$),(I.key!=null||F&&I===F.subTree)&&Ag(T,I,!0)):ye(T,I,b,re,F,O,K,$,j)},E=(T,I,b,D,F,O,K,$,j)=>{I.slotScopeIds=$,T==null?I.shapeFlag&512?F.ctx.activate(I,b,D,K,j):Te(I,b,D,F,O,K,j):Be(T,I,j)},Te=(T,I,b,D,F,O,K)=>{const $=T.component=UT(T,D,F);if(Oa(T)&&($.ctx.renderer=Z),BT($,!1,K),$.asyncDep){if(F&&F.registerDep($,xe,K),!T.el){const j=$.subTree=St(Et);q(null,j,I,b),T.placeholder=j.el}}else xe($,T,I,b,F,O,K)},Be=(T,I,b)=>{const D=I.component=T.component;if(ET(T,I,b))if(D.asyncDep&&!D.asyncResolved){we(D,I,b);return}else D.next=I,D.update();else I.el=T.el,D.vnode=I},xe=(T,I,b,D,F,O,K)=>{const $=()=>{if(T.isMounted){let{next:Q,bu:ee,u:se,parent:de,vnode:Pe}=T;{const Nt=Rg(T);if(Nt){Q&&(Q.el=Pe.el,we(T,Q,K)),Nt.asyncDep.then(()=>{It(()=>{T.isUnmounted||U()},F)});return}}let ve=Q,ot;Sr(T,!1),Q?(Q.el=Pe.el,we(T,Q,K)):Q=Pe,ee&&Co(ee),(ot=Q.props&&Q.props.onVnodeBeforeUpdate)&&nn(ot,de,Q,Pe),Sr(T,!0);const at=ef(T),Ct=T.subTree;T.subTree=at,V(Ct,at,p(Ct.el),k(Ct),T,F,O),Q.el=at.el,ve===null&&TT(T,at.el),se&&It(se,F),(ot=Q.props&&Q.props.onVnodeUpdated)&&It(()=>nn(ot,de,Q,Pe),F)}else{let Q;const{el:ee,props:se}=I,{bm:de,m:Pe,parent:ve,root:ot,type:at}=T,Ct=yi(I);Sr(T,!1),de&&Co(de),!Ct&&(Q=se&&se.onVnodeBeforeMount)&&nn(Q,ve,I),Sr(T,!0);{ot.ce&&ot.ce._hasShadowRoot()&&ot.ce._injectChildStyle(at,T.parent?T.parent.type:void 0);const Nt=T.subTree=ef(T);V(null,Nt,b,D,T,F,O),I.el=Nt.el}if(Pe&&It(Pe,F),!Ct&&(Q=se&&se.onVnodeMounted)){const Nt=I;It(()=>nn(Q,ve,Nt),F)}(I.shapeFlag&256||ve&&yi(ve.vnode)&&ve.vnode.shapeFlag&256)&&T.a&&It(T.a,F),T.isMounted=!0,I=b=D=null}};T.scope.on();const j=T.effect=new Cp($);T.scope.off();const U=T.update=j.run.bind(j),re=T.job=j.runIfDirty.bind(j);re.i=T,re.id=T.uid,j.scheduler=()=>Zl(re),Sr(T,!0),U()},we=(T,I,b)=>{I.component=T;const D=T.vnode.props;T.vnode=I,T.next=null,IT(T,I.props,D,b),ST(T,I.children,b),Dn(),Gh(T),On()},ye=(T,I,b,D,F,O,K,$,j=!1)=>{const U=T&&T.children,re=T?T.shapeFlag:0,Q=I.children,{patchFlag:ee,shapeFlag:se}=I;if(ee>0){if(ee&128){Zt(U,Q,b,D,F,O,K,$,j);return}else if(ee&256){vt(U,Q,b,D,F,O,K,$,j);return}}se&8?(re&16&&it(U,F,O),Q!==U&&f(b,Q)):re&16?se&16?Zt(U,Q,b,D,F,O,K,$,j):it(U,F,O,!0):(re&8&&f(b,""),se&16&&v(Q,b,D,F,O,K,$,j))},vt=(T,I,b,D,F,O,K,$,j)=>{T=T||fs,I=I||fs;const U=T.length,re=I.length,Q=Math.min(U,re);let ee;for(ee=0;ee<Q;ee++){const se=I[ee]=j?Rn(I[ee]):ln(I[ee]);V(T[ee],se,b,null,F,O,K,$,j)}U>re?it(T,F,O,!0,!1,Q):v(I,b,D,F,O,K,$,j,Q)},Zt=(T,I,b,D,F,O,K,$,j)=>{let U=0;const re=I.length;let Q=T.length-1,ee=re-1;for(;U<=Q&&U<=ee;){const se=T[U],de=I[U]=j?Rn(I[U]):ln(I[U]);if(Dr(se,de))V(se,de,b,null,F,O,K,$,j);else break;U++}for(;U<=Q&&U<=ee;){const se=T[Q],de=I[ee]=j?Rn(I[ee]):ln(I[ee]);if(Dr(se,de))V(se,de,b,null,F,O,K,$,j);else break;Q--,ee--}if(U>Q){if(U<=ee){const se=ee+1,de=se<re?I[se].el:D;for(;U<=ee;)V(null,I[U]=j?Rn(I[U]):ln(I[U]),b,de,F,O,K,$,j),U++}}else if(U>ee)for(;U<=Q;)et(T[U],F,O,!0),U++;else{const se=U,de=U,Pe=new Map;for(U=de;U<=ee;U++){const tt=I[U]=j?Rn(I[U]):ln(I[U]);tt.key!=null&&Pe.set(tt.key,U)}let ve,ot=0;const at=ee-de+1;let Ct=!1,Nt=0;const $t=new Array(at);for(U=0;U<at;U++)$t[U]=0;for(U=se;U<=Q;U++){const tt=T[U];if(ot>=at){et(tt,F,O,!0);continue}let Ye;if(tt.key!=null)Ye=Pe.get(tt.key);else for(ve=de;ve<=ee;ve++)if($t[ve-de]===0&&Dr(tt,I[ve])){Ye=ve;break}Ye===void 0?et(tt,F,O,!0):($t[Ye-de]=U+1,Ye>=Nt?Nt=Ye:Ct=!0,V(tt,I[Ye],b,null,F,O,K,$,j),ot++)}const Xr=Ct?NT($t):fs;for(ve=Xr.length-1,U=at-1;U>=0;U--){const tt=de+U,Ye=I[tt],Bs=I[tt+1],Tr=tt+1<re?Bs.el||Sg(Bs):D;$t[U]===0?V(null,Ye,b,Tr,F,O,K,$,j):Ct&&(ve<0||U!==Xr[ve]?Pt(Ye,b,Tr,2):ve--)}}},Pt=(T,I,b,D,F=null)=>{const{el:O,type:K,transition:$,children:j,shapeFlag:U}=T;if(U&6){Pt(T.component.subTree,I,b,D);return}if(U&128){T.suspense.move(I,b,D);return}if(U&64){K.move(T,I,b,Z);return}if(K===cn){r(O,I,b);for(let Q=0;Q<j.length;Q++)Pt(j[Q],I,b,D);r(T.anchor,I,b);return}if(K===Do){H(T,I,b);return}if(D!==2&&U&1&&$)if(D===0)$.beforeEnter(O),r(O,I,b),It(()=>$.enter(O),F);else{const{leave:Q,delayLeave:ee,afterLeave:se}=$,de=()=>{T.ctx.isUnmounted?s(O):r(O,I,b)},Pe=()=>{O._isLeaving&&O[sn](!0),Q(O,()=>{de(),se&&se()})};ee?ee(O,de,Pe):Pe()}else r(O,I,b)},et=(T,I,b,D=!1,F=!1)=>{const{type:O,props:K,ref:$,children:j,dynamicChildren:U,shapeFlag:re,patchFlag:Q,dirs:ee,cacheIndex:se}=T;if(Q===-2&&(F=!1),$!=null&&(Dn(),_i($,null,b,T,!0),On()),se!=null&&(I.renderCache[se]=void 0),re&256){I.ctx.deactivate(T);return}const de=re&1&&ee,Pe=!yi(T);let ve;if(Pe&&(ve=K&&K.onVnodeBeforeUnmount)&&nn(ve,I,T),re&6)jt(T.component,b,D);else{if(re&128){T.suspense.unmount(b,D);return}de&&Rr(T,null,I,"beforeUnmount"),re&64?T.type.remove(T,I,b,Z,D):U&&!U.hasOnce&&(O!==cn||Q>0&&Q&64)?it(U,I,b,!1,!0):(O===cn&&Q&384||!F&&re&16)&&it(j,I,b),D&&Tn(T)}(Pe&&(ve=K&&K.onVnodeUnmounted)||de)&&It(()=>{ve&&nn(ve,I,T),de&&Rr(T,null,I,"unmounted")},b)},Tn=T=>{const{type:I,el:b,anchor:D,transition:F}=T;if(I===cn){Bt(b,D);return}if(I===Do){W(T);return}const O=()=>{s(b),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(T.shapeFlag&1&&F&&!F.persisted){const{leave:K,delayLeave:$}=F,j=()=>K(b,O);$?$(T.el,O,j):j()}else O()},Bt=(T,I)=>{let b;for(;T!==I;)b=g(T),s(T),T=b;s(I)},jt=(T,I,b)=>{const{bum:D,scope:F,job:O,subTree:K,um:$,m:j,a:U}=T;rf(j),rf(U),D&&Co(D),F.stop(),O&&(O.flags|=8,et(K,T,I,b)),$&&It($,I),It(()=>{T.isUnmounted=!0},I)},it=(T,I,b,D=!1,F=!1,O=0)=>{for(let K=O;K<T.length;K++)et(T[K],I,b,D,F)},k=T=>{if(T.shapeFlag&6)return k(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const I=g(T.anchor||T.el),b=I&&I[$E];return b?g(b):I};let Y=!1;const z=(T,I,b)=>{let D;T==null?I._vnode&&(et(I._vnode,null,null,!0),D=I._vnode.component):V(I._vnode||null,T,I,null,null,null,b),I._vnode=T,Y||(Y=!0,Gh(D),zp(),Y=!1)},Z={p:V,um:et,m:Pt,r:Tn,mt:Te,mc:v,pc:ye,pbc:S,n:k,o:t};return{render:z,hydrate:void 0,createApp:dT(z)}}function Vc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function CT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ag(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Rn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ag(o,c)),c.type===La&&(c.patchFlag===-1&&(c=s[i]=Rn(c)),c.el=o.el),c.type===Et&&!c.el&&(c.el=o.el)}}function NT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Rg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rg(e)}function rf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Sg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Sg(e.subTree):null}const bg=t=>t.__isSuspense;function VT(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):ME(t)}const cn=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),Ti=[];let Ot=null;function Pg(t=!1){Ti.push(Ot=t?null:[])}function DT(){Ti.pop(),Ot=Ti[Ti.length-1]||null}let Vi=1;function Yo(t,e=!1){Vi+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function Cg(t){return t.dynamicChildren=Vi>0?Ot||fs:null,DT(),Vi>0&&Ot&&Ot.push(t),t}function m0(t,e,n,r,s,i){return Cg(Dg(t,e,n,r,s,i,!0))}function Ng(t,e,n,r,s){return Cg(St(t,e,n,r,s,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function Dr(t,e){return t.type===e.type&&t.key===e.key}const Vg=({key:t})=>t??null,Oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||dt(t)||ue(t)?{i:Dt,r:t,k:e,f:!!n}:t:null);function Dg(t,e=null,n=null,r=0,s=null,i=t===cn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vg(e),ref:e&&Oo(e),scopeId:Jp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return c?(nu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Vi>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const St=OT;function OT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sT)&&(t=Et),Xo(t)){const c=ur(t,e,!0);return n&&nu(c,n),Vi>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(GT(t)&&(t=t.__vccOpts),e){e=kT(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=Hl(c)),be(l)&&(Yl(l)&&!ie(l)&&(l=Je({},l)),e.style=ql(l))}const o=$e(t)?1:bg(t)?128:Zp(t)?64:be(t)?4:ue(t)?2:0;return Dg(t,e,n,r,s,o,i,!0)}function kT(t){return t?Yl(t)||yg(t)?Je({},t):t:null}function ur(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?LT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Vg(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(Oo(e)):[i,Oo(e)]:Oo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==cn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ur(t.ssContent),ssFallback:t.ssFallback&&ur(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ni(f,l.clone(f)),f}function xT(t=" ",e=0){return St(La,null,t,e)}function _0(t,e){const n=St(Do,null,t);return n.staticCount=e,n}function y0(t="",e=!1){return e?(Pg(),Ng(Et,null,t)):St(Et,null,t)}function ln(t){return t==null||typeof t=="boolean"?St(Et):ie(t)?St(cn,null,t.slice()):Xo(t)?Rn(t):St(La,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ur(t)}function nu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!yg(e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),r&64?(n=16,e=[xT(e)]):n=8);t.children=e,t.shapeFlag|=n}function LT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Hl([e.class,r.class]));else if(s==="style")e.style=ql([e.style,r.style]);else if(Aa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function nn(t,e,n,r=null){Qt(t,e,7,[n,r])}const MT=dg();let FT=0;function UT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||MT,i={uid:FT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new aE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tg(r,s),emitsOptions:pg(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gT.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const Og=()=>ft||Dt;let Zo,al;{const t=Ca(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zo=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),al=e("__VUE_SSR_SETTERS__",n=>Di=n)}const zi=t=>{const e=ft;return Zo(t),t.scope.on(),()=>{t.scope.off(),Zo(e)}},sf=()=>{ft&&ft.scope.off(),Zo(null)};function kg(t){return t.vnode.shapeFlag&4}let Di=!1;function BT(t,e=!1,n=!1){e&&al(e);const{props:r,children:s}=t.vnode,i=kg(t);vT(t,r,i,e),RT(t,s,n||e);const o=i?jT(t,e):void 0;return e&&al(!1),o}function jT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,oT);const{setup:r}=n;if(r){Dn();const s=t.setupContext=r.length>1?qT(t):null,i=zi(t),o=Ki(r,t,0,[t.props,s]),c=Ip(o);if(On(),i(),(c||t.sp)&&!yi(t)&&og(t),c){if(o.then(sf,sf),e)return o.then(l=>{of(t,l)}).catch(l=>{Da(l,t,0)});t.asyncDep=o}else of(t,o)}else xg(t)}function of(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Gp(e)),xg(t)}function xg(t,e,n){const r=t.type;t.render||(t.render=r.render||hn);{const s=zi(t);Dn();try{aT(t)}finally{On(),s()}}}const $T={get(t,e){return ut(t,"get",""),t[e]}};function qT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$T),slots:t.slots,emit:t.emit,expose:e}}function Ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Gp(bE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ei)return Ei[n](t)},has(e,n){return n in e||n in Ei}})):t.proxy}function HT(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function GT(t){return ue(t)&&"__vccOpts"in t}const qt=(t,e)=>DE(t,e,Di);function ru(t,e,n){try{Yo(-1);const r=arguments.length;return r===2?be(e)&&!ie(e)?Xo(e)?St(t,null,[e]):St(t,e):St(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xo(n)&&(n=[n]),St(t,e,n))}finally{Yo(1)}}const WT="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cl;const af=typeof window<"u"&&window.trustedTypes;if(af)try{cl=af.createPolicy("vue",{createHTML:t=>t})}catch{}const Lg=cl?t=>cl.createHTML(t):t=>t,KT="http://www.w3.org/2000/svg",zT="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,cf=An&&An.createElement("template"),QT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(KT,t):e==="mathml"?An.createElementNS(zT,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{cf.innerHTML=Lg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=cf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Qn="transition",ri="animation",Oi=Symbol("_vtc"),Mg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},JT=Je({},eg,Mg),YT=t=>(t.displayName="Transition",t.props=JT,t),E0=YT((t,{slots:e})=>ru(GE,XT(t),e)),br=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},lf=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function XT(t){const e={};for(const w in t)w in Mg||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,C=ZT(s),V=C&&C[0],L=C&&C[1],{onBeforeEnter:q,onEnter:B,onEnterCancelled:H,onLeave:W,onLeaveCancelled:ne,onBeforeAppear:le=q,onAppear:R=B,onAppearCancelled:v=H}=e,_=(w,E,Te,Be)=>{w._enterCancelled=Be,Pr(w,E?f:c),Pr(w,E?u:o),Te&&Te()},S=(w,E)=>{w._isLeaving=!1,Pr(w,p),Pr(w,y),Pr(w,g),E&&E()},A=w=>(E,Te)=>{const Be=w?R:B,xe=()=>_(E,w,Te);br(Be,[E,xe]),uf(()=>{Pr(E,w?l:i),In(E,w?f:c),lf(Be)||hf(E,r,V,xe)})};return Je(e,{onBeforeEnter(w){br(q,[w]),In(w,i),In(w,o)},onBeforeAppear(w){br(le,[w]),In(w,l),In(w,u)},onEnter:A(!1),onAppear:A(!0),onLeave(w,E){w._isLeaving=!0;const Te=()=>S(w,E);In(w,p),w._enterCancelled?(In(w,g),pf(w)):(pf(w),In(w,g)),uf(()=>{w._isLeaving&&(Pr(w,p),In(w,y),lf(W)||hf(w,r,L,Te))}),br(W,[w,Te])},onEnterCancelled(w){_(w,!1,void 0,!0),br(H,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),br(v,[w])},onLeaveCancelled(w){S(w),br(ne,[w])}})}function ZT(t){if(t==null)return null;if(be(t))return[Dc(t.enter),Dc(t.leave)];{const e=Dc(t);return[e,e]}}function Dc(t){return Yy(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Oi]||(t[Oi]=new Set)).add(e)}function Pr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Oi];n&&(n.delete(e),n.size||(t[Oi]=void 0))}function uf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ev=0;function hf(t,e,n,r){const s=t._endId=++ev,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=tv(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=y=>{y.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,g)}function tv(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${Qn}Delay`),i=r(`${Qn}Duration`),o=ff(s,i),c=r(`${ri}Delay`),l=r(`${ri}Duration`),u=ff(c,l);let f=null,p=0,g=0;e===Qn?o>0&&(f=Qn,p=o,g=i.length):e===ri?u>0&&(f=ri,p=u,g=l.length):(p=Math.max(o,u),f=p>0?o>u?Qn:ri:null,g=f?f===Qn?i.length:l.length:0);const y=f===Qn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Qn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:y}}function ff(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>df(n)+df(t[r])))}function df(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function pf(t){return(t?t.ownerDocument:document).body.offsetHeight}function nv(t,e,n){const r=t[Oi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gf=Symbol("_vod"),rv=Symbol("_vsh"),sv=Symbol(""),iv=/(?:^|;)\s*display\s*:/;function ov(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ko(r,c,"")}else for(const o in e)n[o]==null&&ko(r,o,"");for(const o in n)o==="display"&&(i=!0),ko(r,o,n[o])}else if(s){if(e!==n){const o=r[sv];o&&(n+=";"+o),r.cssText=n,i=iv.test(n)}}else e&&t.removeAttribute("style");gf in t&&(t[gf]=i?r.display:"",t[rv]&&(r.display="none"))}const mf=/\s*!important$/;function ko(t,e,n){if(ie(n))n.forEach(r=>ko(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=av(t,e);mf.test(n)?t.setProperty(Kr(r),n.replace(mf,""),"important"):t[r]=n}}const _f=["Webkit","Moz","ms"],Oc={};function av(t,e){const n=Oc[e];if(n)return n;let r=Tt(e);if(r!=="filter"&&r in t)return Oc[e]=r;r=ba(r);for(let s=0;s<_f.length;s++){const i=_f[s]+r;if(i in t)return Oc[e]=i}return e}const yf="http://www.w3.org/1999/xlink";function Ef(t,e,n,r,s,i=rE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yf,e.slice(6,e.length)):t.setAttributeNS(yf,e,n):n==null||i&&!Sp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":_n(n)?String(n):n)}function Tf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Sp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Or(t,e,n,r){t.addEventListener(e,n,r)}function cv(t,e,n,r){t.removeEventListener(e,n,r)}const vf=Symbol("_vei");function lv(t,e,n,r,s=null){const i=t[vf]||(t[vf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=uv(e);if(r){const u=i[e]=dv(r,s);Or(t,c,u,l)}else o&&(cv(t,c,o,l),i[e]=void 0)}}const If=/(?:Once|Passive|Capture)$/;function uv(t){let e;if(If.test(t)){e={};let r;for(;r=t.match(If);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let kc=0;const hv=Promise.resolve(),fv=()=>kc||(hv.then(()=>kc=0),kc=Date.now());function dv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(pv(r,n.value),e,5,[r])};return n.value=t,n.attached=fv(),n}function pv(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?nv(t,r,o):e==="style"?ov(t,n,r):Aa(e)?Bl(e)||lv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mv(t,e,r,o))?(Tf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ef(t,e,r,o,i,e!=="value")):t._isVueCE&&(_v(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!$e(r)))?Tf(t,Tt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ef(t,e,r,o))};function mv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&wf(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wf(e)&&$e(n)?!1:e in t}function _v(t,e){const n=t._def.props;if(!n)return!1;const r=Tt(e);return Array.isArray(n)?n.some(s=>Tt(s)===r):Object.keys(n).some(s=>Tt(s)===r)}const ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Co(e,n):e};function yv(t){t.target.composing=!0}function Af(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s=Symbol("_assign");function Rf(t,e,n){return e&&(t=t.trim()),n&&(t=Pa(t)),t}const T0={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_s]=ea(s);const i=r||s.props&&s.props.type==="number";Or(t,e?"change":"input",o=>{o.target.composing||t[_s](Rf(t.value,n,i))}),(n||i)&&Or(t,"change",()=>{t.value=Rf(t.value,n,i)}),e||(Or(t,"compositionstart",yv),Or(t,"compositionend",Af),Or(t,"change",Af))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[_s]=ea(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Pa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},v0={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ra(e);Or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pa(ta(o)):ta(o));t[_s](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Xl(()=>{t._assigning=!1})}),t[_s]=ea(r)},mounted(t,{value:e}){Sf(t,e)},beforeUpdate(t,e,n){t[_s]=ea(n)},updated(t,{value:e}){t._assigning||Sf(t,e)}};function Sf(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!Ra(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ta(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=iE(e,c)>-1}else o.selected=e.has(c);else if(Gi(ta(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ta(t){return"_value"in t?t._value:t.value}const Ev=["ctrl","shift","alt","meta"],Tv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ev.some(n=>t[`${n}Key`]&&!e.includes(n))},I0=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=Tv[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},vv=Je({patchProp:gv},QT);let bf;function Iv(){return bf||(bf=bT(vv))}const wv=((...t)=>{const e=Iv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Rv(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Av(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Av(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rv(t){return $e(t)?document.querySelector(t):t}const Sv=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},bv={};function Pv(t,e){const n=rT("RouterView");return Pg(),Ng(n)}const Cv=Sv(bv,[["render",Pv]]),Nv="modulepreload",Vv=function(t){return"/stephantech.github.io/"+t},Pf={},Cr=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(u=>{if(u=Vv(u),u in Pf)return;Pf[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Nv,f||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((y,C)=>{g.addEventListener("load",y),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const ss=typeof document<"u";function Fg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Dv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Fg(t.default)}const Ae=Object.assign;function xc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Jt(s)?s.map(t):t(s)}return n}const vi=()=>{},Jt=Array.isArray;function Cf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}let Fe=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Ug=Symbol("");Fe.MATCHER_NOT_FOUND+"",Fe.NAVIGATION_GUARD_REDIRECT+"",Fe.NAVIGATION_ABORTED+"",Fe.NAVIGATION_CANCELLED+"",Fe.NAVIGATION_DUPLICATED+"";function Rs(t,e){return Ae(new Error,{type:t,[Ug]:!0},e)}function wn(t,e){return t instanceof Error&&Ug in t&&(e==null||!!(t.type&e))}const Ov=["params","query","hash"];function kv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Ov)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const xv=Symbol(""),Nf=Symbol(""),Fa=Symbol(""),su=Symbol(""),ll=Symbol("");function w0(){return Wt(Fa)}function A0(t){return Wt(su)}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const Bg=/#/g,Lv=/&/g,Mv=/\//g,Fv=/=/g,Uv=/\?/g,jg=/\+/g,Bv=/%5B/g,jv=/%5D/g,$g=/%5E/g,$v=/%60/g,qg=/%7B/g,qv=/%7C/g,Hg=/%7D/g,Hv=/%20/g;function iu(t){return t==null?"":encodeURI(""+t).replace(qv,"|").replace(Bv,"[").replace(jv,"]")}function Gv(t){return iu(t).replace(qg,"{").replace(Hg,"}").replace($g,"^")}function ul(t){return iu(t).replace(jg,"%2B").replace(Hv,"+").replace(Bg,"%23").replace(Lv,"%26").replace($v,"`").replace(qg,"{").replace(Hg,"}").replace($g,"^")}function Wv(t){return ul(t).replace(Fv,"%3D")}function Kv(t){return iu(t).replace(Bg,"%23").replace(Uv,"%3F")}function zv(t){return Kv(t).replace(Mv,"%2F")}function ki(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Qv=/\/$/,Jv=t=>t.replace(Qv,"");function Lc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=eI(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:ki(o)}}function Yv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ss(e.matched[r],n.matched[s])&&Gg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!Zv(t[n],e[n]))return!1;return!0}function Zv(t,e){return Jt(t)?Df(t,e):Jt(e)?Df(e,t):(t&&t.valueOf())===(e&&e.valueOf())}function Df(t,e){return Jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function eI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let hl=(function(t){return t.pop="pop",t.push="push",t})({}),Mc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function tI(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jv(t)}const nI=/^[^#]+#/;function rI(t,e){return t.replace(nI,"#")+e}function sI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ua=()=>({left:window.scrollX,top:window.scrollY});function iI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Of(t,e){return(history.state?history.state.position-e:-1)+t}const fl=new Map;function oI(t,e){fl.set(t,e)}function aI(t){const e=fl.get(t);return fl.delete(t),e}function cI(t){return typeof t=="string"||t&&typeof t=="object"}function Wg(t){return typeof t=="string"||typeof t=="symbol"}function lI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(jg," "),i=s.indexOf("="),o=ki(i<0?s:s.slice(0,i)),c=i<0?null:ki(s.slice(i+1));if(o in e){let l=e[o];Jt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function kf(t){let e="";for(let n in t){const r=t[n];if(n=Wv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(r)?r.map(s=>s&&ul(s)):[r&&ul(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function uI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function si(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Rs(Fe.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):cI(g)?l(Rs(Fe.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function Fc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Fg(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Zn(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=Dv(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const g=(p.__vccOpts||p)[e];return g&&Zn(g,n,r,o,c,s)()}))}}return i}function hI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ss(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ss(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let fI=()=>location.protocol+"//"+location.host;function Kg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Vf(c,"")}return Vf(n,t)+r+s}function dI(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=Kg(t,location),C=n.value,V=e.value;let L=0;if(g){if(n.value=y,e.value=g,o&&o===C){o=null;return}L=V?g.position-V.position:0}else r(y);s.forEach(q=>{q(n.value,C,{delta:L,type:hl.pop,direction:L?L>0?Mc.forward:Mc.back:Mc.unknown})})};function l(){o=n.value}function u(g){s.push(g);const y=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ae({},g.state,{scroll:Ua()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function xf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ua():null}}function pI(t){const{history:e,location:n}=window,r={value:Kg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:fI()+t+l;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(l,u){i(l,Ae({},e.state,xf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Ae({},s.value,e.state,{forward:l,scroll:Ua()});i(f.current,f,!0),i(l,Ae({},xf(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function gI(t){t=tI(t);const e=pI(t),n=dI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:rI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),gI(t)}let kr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var ze=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(ze||{});const _I={type:kr.Static,value:""},yI=/[a-zA-Z0-9_]/;function EI(t){if(!t)return[[]];if(t==="/")return[[_I]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=ze.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===ze.Static?i.push({type:kr.Static,value:u}):n===ze.Param||n===ze.ParamRegExp||n===ze.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:kr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==ze.ParamRegExp){r=n,n=ze.EscapeNext;continue}switch(n){case ze.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=ze.Param):g();break;case ze.EscapeNext:g(),n=r;break;case ze.Param:l==="("?n=ze.ParamRegExp:yI.test(l)?g():(p(),n=ze.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case ze.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=ze.ParamRegExpEnd:f+=l;break;case ze.ParamRegExpEnd:p(),n=ze.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===ze.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Lf="[^/]+?",TI={sensitive:!1,strict:!1,start:!0,end:!0};var _t=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(_t||{});const vI=/[.+*?^${}()[\]/\\]/g;function II(t,e){const n=Ae({},TI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[_t.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let y=_t.Segment+(n.sensitive?_t.BonusCaseSensitive:0);if(g.type===kr.Static)p||(s+="/"),s+=g.value.replace(vI,"\\$&"),y+=_t.Static;else if(g.type===kr.Param){const{value:C,repeatable:V,optional:L,regexp:q}=g;i.push({name:C,repeatable:V,optional:L});const B=q||Lf;if(B!==Lf){y+=_t.BonusCustomRegExp;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+W.message)}}let H=V?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(H=L&&u.length<2?`(?:/${H})`:"/"+H),L&&(H+="?"),s+=H,y+=_t.Dynamic,L&&(y+=_t.BonusOptional),V&&(y+=_t.BonusRepeatable),B===".*"&&(y+=_t.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=_t.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",C=i[g-1];p[C.name]=y&&C.repeatable?y.split("/"):y}return p}function l(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of g)if(y.type===kr.Static)f+=y.value;else if(y.type===kr.Param){const{value:C,repeatable:V,optional:L}=y,q=C in u?u[C]:"";if(Jt(q)&&!V)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=Jt(q)?q.join("/"):q;if(!B)if(L)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function wI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===_t.Static+_t.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===_t.Static+_t.Segment?1:-1:0}function zg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Mf(r))return 1;if(Mf(s))return-1}return s.length-r.length}function Mf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const AI={strict:!1,end:!0,sensitive:!1};function RI(t,e,n){const r=II(EI(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function SI(t,e){const n=[],r=new Map;e=Cf(AI,e);function s(p){return r.get(p)}function i(p,g,y){const C=!y,V=Uf(p);V.aliasOf=y&&y.record;const L=Cf(e,p),q=[V];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const ne of W)q.push(Uf(Ae({},V,{components:y?y.record.components:V.components,path:ne,aliasOf:y?y.record:V})))}let B,H;for(const W of q){const{path:ne}=W;if(g&&ne[0]!=="/"){const le=g.record.path,R=le[le.length-1]==="/"?"":"/";W.path=g.record.path+(ne&&R+ne)}if(B=RI(W,g,L),y?y.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),C&&p.name&&!Bf(B)&&o(p.name)),Qg(B)&&l(B),V.children){const le=V.children;for(let R=0;R<le.length;R++)i(le[R],B,y&&y.children[R])}y=y||B}return H?()=>{o(H)}:vi}function o(p){if(Wg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=CI(p,n);n.splice(g,0,p),p.record.name&&!Bf(p)&&r.set(p.record.name,p)}function u(p,g){let y,C={},V,L;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Rs(Fe.MATCHER_NOT_FOUND,{location:p});L=y.record.name,C=Ae(Ff(g.params,y.keys.filter(H=>!H.optional).concat(y.parent?y.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&Ff(p.params,y.keys.map(H=>H.name))),V=y.stringify(C)}else if(p.path!=null)V=p.path,y=n.find(H=>H.re.test(V)),y&&(C=y.parse(V),L=y.record.name);else{if(y=g.name?r.get(g.name):n.find(H=>H.re.test(g.path)),!y)throw Rs(Fe.MATCHER_NOT_FOUND,{location:p,currentLocation:g});L=y.record.name,C=Ae({},g.params,p.params),V=y.stringify(C)}const q=[];let B=y;for(;B;)q.unshift(B.record),B=B.parent;return{name:L,path:V,params:C,matched:q,meta:PI(q)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Ff(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Uf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:bI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function bI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PI(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function CI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;zg(t,e[i])<0?r=i:n=i+1}const s=NI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function NI(t){let e=t;for(;e=e.parent;)if(Qg(e)&&zg(t,e)===0)return e}function Qg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jf(t){const e=Wt(Fa),n=Wt(su),r=qt(()=>{const l=ps(t.to);return e.resolve(l)}),s=qt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Ss.bind(null,f));if(g>-1)return g;const y=$f(l[u-2]);return u>1&&$f(f)===y&&p[p.length-1].path!==y?p.findIndex(Ss.bind(null,l[u-2])):g}),i=qt(()=>s.value>-1&&xI(n.params,r.value.params)),o=qt(()=>s.value>-1&&s.value===n.matched.length-1&&Gg(n.params,r.value.params));function c(l={}){if(kI(l)){const u=e[ps(t.replace)?"replace":"push"](ps(t.to)).catch(vi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function VI(t){return t.length===1?t[0]:t}const DI=ig({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jf,setup(t,{slots:e}){const n=Va(jf(t)),{options:r}=Wt(Fa),s=qt(()=>({[qf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&VI(e.default(n));return t.custom?i:ru("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),OI=DI;function kI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Jt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function $f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qf=(t,e,n)=>t??e??n,LI=ig({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt(ll),s=qt(()=>t.route||r.value),i=Wt(Nf,0),o=qt(()=>{let u=ps(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=qt(()=>s.value.matched[o.value]);No(Nf,qt(()=>o.value+1)),No(xv,c),No(ll,s);const l=Wi();return Vo(()=>[l.value,c.value,t.name],([u,f,p],[g,y,C])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!Ss(f,y)||!g)&&(f.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return Hf(n.default,{Component:g,route:u});const y=p.props[f],C=y?y===!0?u.params:typeof y=="function"?y(u):y:null,L=ru(g,Ae({},C,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Hf(n.default,{Component:L,route:u})||L}}});function Hf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const MI=LI;function FI(t){const e=SI(t.routes,t),n=t.parseQuery||lI,r=t.stringifyQuery||kf,s=t.history,i=si(),o=si(),c=si(),l=PE(Jn);let u=Jn;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=xc.bind(null,k=>""+k),p=xc.bind(null,zv),g=xc.bind(null,ki);function y(k,Y){let z,Z;return Wg(k)?(z=e.getRecordMatcher(k),Z=Y):Z=k,e.addRoute(Z,z)}function C(k){const Y=e.getRecordMatcher(k);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(k=>k.record)}function L(k){return!!e.getRecordMatcher(k)}function q(k,Y){if(Y=Ae({},Y||l.value),typeof k=="string"){const b=Lc(n,k,Y.path),D=e.resolve({path:b.path},Y),F=s.createHref(b.fullPath);return Ae(b,D,{params:g(D.params),hash:ki(b.hash),redirectedFrom:void 0,href:F})}let z;if(k.path!=null)z=Ae({},k,{path:Lc(n,k.path,Y.path).path});else{const b=Ae({},k.params);for(const D in b)b[D]==null&&delete b[D];z=Ae({},k,{params:p(b)}),Y.params=p(Y.params)}const Z=e.resolve(z,Y),pe=k.hash||"";Z.params=f(g(Z.params));const T=Yv(r,Ae({},k,{hash:Gv(pe),path:Z.path})),I=s.createHref(T);return Ae({fullPath:T,hash:pe,query:r===kf?uI(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:I})}function B(k){return typeof k=="string"?Lc(n,k,l.value.path):Ae({},k)}function H(k,Y){if(u!==k)return Rs(Fe.NAVIGATION_CANCELLED,{from:Y,to:k})}function W(k){return R(k)}function ne(k){return W(Ae(B(k),{replace:!0}))}function le(k,Y){const z=k.matched[k.matched.length-1];if(z&&z.redirect){const{redirect:Z}=z;let pe=typeof Z=="function"?Z(k,Y):Z;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=B(pe):{path:pe},pe.params={}),Ae({query:k.query,hash:k.hash,params:pe.path!=null?{}:k.params},pe)}}function R(k,Y){const z=u=q(k),Z=l.value,pe=k.state,T=k.force,I=k.replace===!0,b=le(z,Z);if(b)return R(Ae(B(b),{state:typeof b=="object"?Ae({},pe,b.state):pe,force:T,replace:I}),Y||z);const D=z;D.redirectedFrom=Y;let F;return!T&&Xv(r,Z,z)&&(F=Rs(Fe.NAVIGATION_DUPLICATED,{to:D,from:Z}),Pt(Z,Z,!0,!1)),(F?Promise.resolve(F):S(D,Z)).catch(O=>wn(O)?wn(O,Fe.NAVIGATION_GUARD_REDIRECT)?O:Zt(O):ye(O,D,Z)).then(O=>{if(O){if(wn(O,Fe.NAVIGATION_GUARD_REDIRECT))return R(Ae({replace:I},B(O.to),{state:typeof O.to=="object"?Ae({},pe,O.to.state):pe,force:T}),Y||D)}else O=w(D,Z,!0,I,pe);return A(D,Z,O),O})}function v(k,Y){const z=H(k,Y);return z?Promise.reject(z):Promise.resolve()}function _(k){const Y=Bt.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(k):k()}function S(k,Y){let z;const[Z,pe,T]=hI(k,Y);z=Fc(Z.reverse(),"beforeRouteLeave",k,Y);for(const b of Z)b.leaveGuards.forEach(D=>{z.push(Zn(D,k,Y))});const I=v.bind(null,k,Y);return z.push(I),it(z).then(()=>{z=[];for(const b of i.list())z.push(Zn(b,k,Y));return z.push(I),it(z)}).then(()=>{z=Fc(pe,"beforeRouteUpdate",k,Y);for(const b of pe)b.updateGuards.forEach(D=>{z.push(Zn(D,k,Y))});return z.push(I),it(z)}).then(()=>{z=[];for(const b of T)if(b.beforeEnter)if(Jt(b.beforeEnter))for(const D of b.beforeEnter)z.push(Zn(D,k,Y));else z.push(Zn(b.beforeEnter,k,Y));return z.push(I),it(z)}).then(()=>(k.matched.forEach(b=>b.enterCallbacks={}),z=Fc(T,"beforeRouteEnter",k,Y,_),z.push(I),it(z))).then(()=>{z=[];for(const b of o.list())z.push(Zn(b,k,Y));return z.push(I),it(z)}).catch(b=>wn(b,Fe.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function A(k,Y,z){c.list().forEach(Z=>_(()=>Z(k,Y,z)))}function w(k,Y,z,Z,pe){const T=H(k,Y);if(T)return T;const I=Y===Jn,b=ss?history.state:{};z&&(Z||I?s.replace(k.fullPath,Ae({scroll:I&&b&&b.scroll},pe)):s.push(k.fullPath,pe)),l.value=k,Pt(k,Y,z,I),Zt()}let E;function Te(){E||(E=s.listen((k,Y,z)=>{if(!jt.listening)return;const Z=q(k),pe=le(Z,jt.currentRoute.value);if(pe){R(Ae(pe,{replace:!0,force:!0}),Z).catch(vi);return}u=Z;const T=l.value;ss&&oI(Of(T.fullPath,z.delta),Ua()),S(Z,T).catch(I=>wn(I,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_CANCELLED)?I:wn(I,Fe.NAVIGATION_GUARD_REDIRECT)?(R(Ae(B(I.to),{force:!0}),Z).then(b=>{wn(b,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===hl.pop&&s.go(-1,!1)}).catch(vi),Promise.reject()):(z.delta&&s.go(-z.delta,!1),ye(I,Z,T))).then(I=>{I=I||w(Z,T,!1),I&&(z.delta&&!wn(I,Fe.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===hl.pop&&wn(I,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(Z,T,I)}).catch(vi)}))}let Be=si(),xe=si(),we;function ye(k,Y,z){Zt(k);const Z=xe.list();return Z.length?Z.forEach(pe=>pe(k,Y,z)):console.error(k),Promise.reject(k)}function vt(){return we&&l.value!==Jn?Promise.resolve():new Promise((k,Y)=>{Be.add([k,Y])})}function Zt(k){return we||(we=!k,Te(),Be.list().forEach(([Y,z])=>k?z(k):Y()),Be.reset()),k}function Pt(k,Y,z,Z){const{scrollBehavior:pe}=t;if(!ss||!pe)return Promise.resolve();const T=!z&&aI(Of(k.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return Xl().then(()=>pe(k,Y,T)).then(I=>I&&iI(I)).catch(I=>ye(I,k,Y))}const et=k=>s.go(k);let Tn;const Bt=new Set,jt={currentRoute:l,listening:!0,addRoute:y,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:V,resolve:q,options:t,push:W,replace:ne,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:xe.add,isReady:vt,install(k){k.component("RouterLink",OI),k.component("RouterView",MI),k.config.globalProperties.$router=jt,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>ps(l)}),ss&&!Tn&&l.value===Jn&&(Tn=!0,W(s.location).catch(Z=>{}));const Y={};for(const Z in Jn)Object.defineProperty(Y,Z,{get:()=>l.value[Z],enumerable:!0});k.provide(Fa,jt),k.provide(su,qp(Y)),k.provide(ll,l);const z=k.unmount;Bt.add(k),k.unmount=function(){Bt.delete(k),Bt.size<1&&(u=Jn,E&&E(),E=null,l.value=Jn,Tn=!1,we=!1),z()}}};function it(k){return k.reduce((Y,z)=>Y.then(()=>_(z)),Promise.resolve())}return jt}const UI=()=>{};var Gf={};/**
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
 */const Jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new jI;const g=i<<2|c>>4;if(r.push(g),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $I=function(t){const e=Jg(t);return Yg.encodeByteArray(e,!0)},na=function(t){return $I(t).replace(/\./g,"")},Xg=function(t){try{return Yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HI=()=>qI().__FIREBASE_DEFAULTS__,GI=()=>{if(typeof process>"u"||typeof Gf>"u")return;const t=Gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xg(t[1]);return e&&JSON.parse(e)},Ba=()=>{try{return UI()||HI()||GI()||WI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zg=t=>{var e,n;return(n=(e=Ba())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},KI=t=>{const e=Zg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},em=()=>{var t;return(t=Ba())==null?void 0:t.config},tm=t=>{var e;return(e=Ba())==null?void 0:e[`_${t}`]};/**
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
 */class zI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function QI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[na(JSON.stringify(n)),na(JSON.stringify(o)),""].join(".")}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function YI(){var e;const t=(e=Ba())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ew(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tw(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nw(){return!YI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rw(){try{return typeof indexedDB=="object"}catch{return!1}}function sw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const iw="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iw,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ow(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new jn(s,c,r)}}function ow(t,e){return t.replace(aw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aw=/\{\$([^}]+)}/g;function cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!Br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
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
 */function Ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ai(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lw(t,e){const n=new uw(t,e);return n.subscribe.bind(n)}class uw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Uc),s.error===void 0&&(s.error=Uc),s.complete===void 0&&(s.complete=Uc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Yi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nm(t){return(await fetch(t,{credentials:"include"})).ok}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class fw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pw(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dw(t){return t===Vr?void 0:t}function pw(t){return t.instantiationMode==="EAGER"}/**
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
 */class gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const mw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},_w=ge.INFO,yw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Ew=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ou{constructor(e){this.name=e,this._logLevel=_w,this._logHandler=Ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Tw=(t,e)=>e.some(n=>t instanceof n);let Kf,zf;function vw(){return Kf||(Kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iw(){return zf||(zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rm=new WeakMap,dl=new WeakMap,sm=new WeakMap,Bc=new WeakMap,au=new WeakMap;function ww(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ir(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rm.set(n,t)}).catch(()=>{}),au.set(e,t),e}function Aw(t){if(dl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dl.set(t,e)}let pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rw(t){pl=t(pl)}function Sw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jc(this),e,...n);return sm.set(r,e.sort?e.sort():[e]),ir(r)}:Iw().includes(t)?function(...e){return t.apply(jc(this),e),ir(rm.get(this))}:function(...e){return ir(t.apply(jc(this),e))}}function bw(t){return typeof t=="function"?Sw(t):(t instanceof IDBTransaction&&Aw(t),Tw(t,vw())?new Proxy(t,pl):t)}function ir(t){if(t instanceof IDBRequest)return ww(t);if(Bc.has(t))return Bc.get(t);const e=bw(t);return e!==t&&(Bc.set(t,e),au.set(e,t)),e}const jc=t=>au.get(t);function Pw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ir(o.result),l.oldVersion,l.newVersion,ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Cw=["get","getKey","getAll","getAllKeys","count"],Nw=["put","add","delete","clear"],$c=new Map;function Qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Nw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return $c.set(e,i),i}Rw(t=>({...t,get:(e,n,r)=>Qf(e,n)||t.get(e,n,r),has:(e,n)=>!!Qf(e,n)||t.has(e,n)}));/**
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
 */class Vw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gl="@firebase/app",Jf="0.14.10";/**
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
 */const xn=new ou("@firebase/app"),Ow="@firebase/app-compat",kw="@firebase/analytics-compat",xw="@firebase/analytics",Lw="@firebase/app-check-compat",Mw="@firebase/app-check",Fw="@firebase/auth",Uw="@firebase/auth-compat",Bw="@firebase/database",jw="@firebase/data-connect",$w="@firebase/database-compat",qw="@firebase/functions",Hw="@firebase/functions-compat",Gw="@firebase/installations",Ww="@firebase/installations-compat",Kw="@firebase/messaging",zw="@firebase/messaging-compat",Qw="@firebase/performance",Jw="@firebase/performance-compat",Yw="@firebase/remote-config",Xw="@firebase/remote-config-compat",Zw="@firebase/storage",eA="@firebase/storage-compat",tA="@firebase/firestore",nA="@firebase/ai",rA="@firebase/firestore-compat",sA="firebase",iA="12.11.0";/**
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
 */const ml="[DEFAULT]",oA={[gl]:"fire-core",[Ow]:"fire-core-compat",[xw]:"fire-analytics",[kw]:"fire-analytics-compat",[Mw]:"fire-app-check",[Lw]:"fire-app-check-compat",[Fw]:"fire-auth",[Uw]:"fire-auth-compat",[Bw]:"fire-rtdb",[jw]:"fire-data-connect",[$w]:"fire-rtdb-compat",[qw]:"fire-fn",[Hw]:"fire-fn-compat",[Gw]:"fire-iid",[Ww]:"fire-iid-compat",[Kw]:"fire-fcm",[zw]:"fire-fcm-compat",[Qw]:"fire-perf",[Jw]:"fire-perf-compat",[Yw]:"fire-rc",[Xw]:"fire-rc-compat",[Zw]:"fire-gcs",[eA]:"fire-gcs-compat",[tA]:"fire-fst",[rA]:"fire-fst-compat",[nA]:"fire-vertex","fire-js":"fire-js",[sA]:"fire-js-all"};/**
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
 */const ra=new Map,aA=new Map,_l=new Map;function Yf(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(_l.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;_l.set(e,t);for(const n of ra.values())Yf(n,t);for(const n of aA.values())Yf(n,t);return!0}function cu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const cA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new Qi("app","Firebase",cA);/**
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
 */class lA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=iA;function im(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ml,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw or.create("bad-app-name",{appName:String(s)});if(n||(n=em()),!n)throw or.create("no-options");const i=ra.get(s);if(i){if(Br(n,i.options)&&Br(r,i.config))return i;throw or.create("duplicate-app",{appName:s})}const o=new gw(s);for(const l of _l.values())o.addComponent(l);const c=new lA(n,r,o);return ra.set(s,c),c}function om(t=ml){const e=ra.get(t);if(!e&&t===ml&&em())return im();if(!e)throw or.create("no-app",{appName:t});return e}function ar(t,e,n){let r=oA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(o.join(" "));return}bs(new jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const uA="firebase-heartbeat-database",hA=1,xi="firebase-heartbeat-store";let qc=null;function am(){return qc||(qc=Pw(uA,hA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),qc}async function fA(t){try{const n=(await am()).transaction(xi),r=await n.objectStore(xi).get(cm(t));return await n.done,r}catch(e){if(e instanceof jn)xn.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function Xf(t,e){try{const r=(await am()).transaction(xi,"readwrite");await r.objectStore(xi).put(e,cm(t)),await r.done}catch(n){if(n instanceof jn)xn.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function cm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dA=1024,pA=30;class gA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _A(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>pA){const o=yA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zf(),{heartbeatsToSend:r,unsentEntries:s}=mA(this._heartbeatsCache.heartbeats),i=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function Zf(){return new Date().toISOString().substring(0,10)}function mA(t,e=dA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ed(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ed(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rw()?sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ed(t){return na(JSON.stringify({version:2,heartbeats:t})).length}function yA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function EA(t){bs(new jr("platform-logger",e=>new Vw(e),"PRIVATE")),bs(new jr("heartbeat",e=>new gA(e),"PRIVATE")),ar(gl,Jf,t),ar(gl,Jf,"esm2020"),ar("fire-js","")}EA("");var TA="firebase",vA="12.11.0";/**
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
 */ar(TA,vA,"app");function lm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IA=lm,um=new Qi("auth","Firebase",lm());/**
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
 */const sa=new ou("@firebase/auth");function wA(t,...e){sa.logLevel<=ge.WARN&&sa.warn(`Auth (${xs}): ${t}`,...e)}function xo(t,...e){sa.logLevel<=ge.ERROR&&sa.error(`Auth (${xs}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw lu(t,...e)}function fn(t,...e){return lu(t,...e)}function hm(t,e,n){const r={...IA(),[e]:n};return new Qi("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return hm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return um.create(t,...e)}function oe(t,e,...n){if(!t)throw lu(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function Ln(t,e){t||Pn(e)}/**
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
 */function yl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function AA(){return td()==="http:"||td()==="https:"}function td(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function RA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AA()||ZI()||"connection"in navigator)?navigator.onLine:!0}function SA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=JI()||ew()}get(){return RA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uu(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],CA=new Xi(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function En(t,e,n,r,s={}){return dm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ji({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return XI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Yi(t.emulatorConfig.host)&&(u.credentials="include"),fm.fetch()(await pm(t,t.config.apiHost,n,c),u)})}async function dm(t,e,n){t._canInitEmulator=!1;const r={...bA,...e};try{const s=new VA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hm(t,f,u);Yt(t,f)}}catch(s){if(s instanceof jn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function Zi(t,e,n,r,s={}){const i=await En(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function pm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?uu(t.config,s):`${t.config.apiScheme}://${s}`;return PA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function NA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),CA.get())})}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function nd(t){return t!==void 0&&t.enterprise!==void 0}class DA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function OA(t,e){return En(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
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
 */async function kA(t,e){return En(t,"POST","/v1/accounts:delete",e)}async function ia(t,e){return En(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xA(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=hu(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ii(Hc(s.auth_time)),issuedAtTime:Ii(Hc(s.iat)),expirationTime:Ii(Hc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function hu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xg(n);return s?JSON.parse(s):(xo("Failed to decode base64 JWT payload"),null)}catch(s){return xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rd(t){const e=hu(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&LA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class El{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oa(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ps(t,ia(e,{idToken:n}));oe(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?gm(s.providerUserInfo):[],o=UA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new El(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function FA(t){const e=qe(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function BA(t,e){const n=await dm(t,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await pm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Yi(t.emulatorConfig.host)&&(l.credentials="include"),fm.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jA(t,e){return En(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
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
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=rd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await BA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ys;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Yn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new MA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new El(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ps(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xA(this,e)}reload(){return FA(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await Ps(this,kA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:y,providerData:C,stsTokenManager:V}=n;oe(p&&V,e,"internal-error");const L=ys.fromJSON(this.name,V);oe(typeof p=="string",e,"internal-error"),Yn(r,e.name),Yn(s,e.name),oe(typeof g=="boolean",e,"internal-error"),oe(typeof y=="boolean",e,"internal-error"),Yn(i,e.name),Yn(o,e.name),Yn(c,e.name),Yn(l,e.name),Yn(u,e.name),Yn(f,e.name);const q=new Ht({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:L,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&(q.providerData=C.map(B=>({...B}))),l&&(q._redirectEventId=l),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new ys;s.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?gm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ys;c.updateFromIdToken(r);const l=new Ht({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new El(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const sd=new Map;function Cn(t){Ln(t instanceof Function,"Expected a class definition");let e=sd.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sd.set(t,e),e)}/**
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
 */class mm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mm.type="NONE";const id=mm;/**
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
 */function Lo(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ia(this.auth,{idToken:e}).catch(()=>{});return n?Ht._fromGetAccountInfoResponse(this.auth,n,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(Cn(id),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Cn(id);const o=Lo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await ia(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Ht._fromGetAccountInfoResponse(e,g,f)}else p=Ht._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Es(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Es(i,e,r))}}/**
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
 */function od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Im(e))return"Blackberry";if(wm(e))return"Webos";if(ym(e))return"Safari";if((e.includes("chrome/")||Em(e))&&!e.includes("edge/"))return"Chrome";if(vm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _m(t=pt()){return/firefox\//i.test(t)}function ym(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Em(t=pt()){return/crios\//i.test(t)}function Tm(t=pt()){return/iemobile/i.test(t)}function vm(t=pt()){return/android/i.test(t)}function Im(t=pt()){return/blackberry/i.test(t)}function wm(t=pt()){return/webos/i.test(t)}function fu(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $A(t=pt()){var e;return fu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function qA(){return tw()&&document.documentMode===10}function Am(t=pt()){return fu(t)||vm(t)||wm(t)||Im(t)||/windows phone/i.test(t)||Tm(t)}/**
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
 */function Rm(t,e=[]){let n;switch(t){case"Browser":n=od(pt());break;case"Worker":n=`${od(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class HA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function GA(t,e={}){return En(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
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
 */const WA=6;class KA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??WA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class zA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ad(this),this.idTokenSubscription=new ad(this),this.beforeStateQueue=new HA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ia(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(Nn(this));const n=e?qe(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GA(this),n=new KA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&wA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _r(t){return qe(t)}class ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=lw(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QA(t){ja=t}function Sm(t){return ja.loadJS(t)}function JA(){return ja.recaptchaEnterpriseScript}function YA(){return ja.gapiScript}function XA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ZA{constructor(){this.enterprise=new eR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class eR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const tR="recaptcha-enterprise",bm="NO_RECAPTCHA";class nR{constructor(e){this.type=tR,this.auth=_r(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{OA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new DA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;nd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(bm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ZA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&nd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=JA();l.length!==0&&(l+=c),Sm(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function cd(t,e,n,r=!1,s=!1){const i=new nR(t);let o;if(s)o=bm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function aa(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await cd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function rR(t,e){const n=cu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Br(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function sR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iR(t,e,n){const r=_r(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Pm(e),{host:o,port:c}=oR(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Br(u,r.config.emulator)&&Br(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Yi(o)?nm(`${i}//${o}${l}`):aR()}function Pm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oR(t){const e=Pm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ld(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ld(o)}}}function ld(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class du{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function cR(t,e){return En(t,"POST","/v1/accounts:update",e)}async function lR(t,e){return En(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function uR(t,e){return Zi(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}async function hR(t,e){return En(t,"POST","/v1/accounts:sendOobCode",$n(t,e))}async function fR(t,e){return hR(t,e)}/**
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
 */async function dR(t,e){return Zi(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function pR(t,e){return Zi(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
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
 */class Li extends du{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Li(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Li(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return aa(e,n,"signInWithPassword",uR);case"emailLink":return dR(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return aa(e,r,"signUpPassword",lR);case"emailLink":return pR(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ts(t,e){return Zi(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
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
 */const gR="http://localhost";class $r extends du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new $r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:gR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
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
 */function mR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _R(t){const e=ai(ci(t)).link,n=e?ai(ci(e)).deep_link_id:null,r=ai(ci(t)).deep_link_id;return(r?ai(ci(r)).link:null)||r||n||e||t}class pu{constructor(e){const n=ai(ci(e)),r=n.apiKey??null,s=n.oobCode??null,i=mR(n.mode??null);oe(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=_R(e);try{return new pu(n)}catch{return null}}}/**
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
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,n){return Li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pu.parseLink(n);return oe(r,"argument-error"),Li._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eo extends Cm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends eo{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends eo{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends eo{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */async function yR(t,e){return Zi(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
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
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ht._fromIdTokenResponse(e,r,s),o=ud(r);return new qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ud(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ud(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ca extends jn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ca.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ca(e,n,r,s)}}function Nm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ca._fromErrorAndOperation(t,i,e,r):i})}async function ER(t,e,n=!1){const r=await Ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
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
 */async function Vm(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(Nn(r));const s="reauthenticate";try{const i=await Ps(t,Nm(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=hu(i.idToken);oe(o,r,"internal-error");const{sub:c}=o;return oe(t.uid===c,r,"user-mismatch"),qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function Dm(t,e,n=!1){if(Lt(t.app))return Promise.reject(Nn(t));const r="signIn",s=await Nm(t,r,e),i=await qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function TR(t,e){return Dm(_r(t),e)}async function vR(t,e){return Vm(qe(t),e)}/**
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
 */async function Om(t){const e=_r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IR(t,e,n){const r=_r(t);await aa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",fR)}async function wR(t,e,n){if(Lt(t.app))return Promise.reject(Nn(t));const r=_r(t),o=await aa(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Om(t),l}),c=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function AR(t,e,n){return Lt(t.app)?Promise.reject(Nn(t)):TR(qe(t),zr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Om(t),r})}function RR(t,e){return SR(qe(t),null,e)}async function SR(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await Ps(t,cR(r,i));await t._updateTokensIfNecessary(o,!0)}function bR(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function PR(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function CR(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function NR(t){return qe(t).signOut()}const la="__sak";/**
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
 */class km{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(la,"1"),this.storage.removeItem(la),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VR=1e3,DR=10;class xm extends km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xm.type="LOCAL";const OR=xm;/**
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
 */class Lm extends km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lm.type="SESSION";const Mm=Lm;/**
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
 */function kR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await kR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$a.receivers=[];/**
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
 */function gu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=gu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function LR(t){dn().location.href=t}/**
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
 */function Fm(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function MR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function UR(){return Fm()?self:null}/**
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
 */const Um="firebaseLocalStorageDb",BR=1,ua="firebaseLocalStorage",Bm="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qa(t,e){return t.transaction([ua],e?"readwrite":"readonly").objectStore(ua)}function jR(){const t=indexedDB.deleteDatabase(Um);return new to(t).toPromise()}function Tl(){const t=indexedDB.open(Um,BR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ua,{keyPath:Bm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ua)?e(r):(r.close(),await jR(),e(await Tl()))})})}async function hd(t,e,n){const r=qa(t,!0).put({[Bm]:e,value:n});return new to(r).toPromise()}async function $R(t,e){const n=qa(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function fd(t,e){const n=qa(t,!0).delete(e);return new to(n).toPromise()}const qR=800,HR=3;class jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$a._getInstance(UR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await MR(),!this.activeServiceWorker)return;this.sender=new xR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tl();return await hd(e,la,"1"),await fd(e,la),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$R(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qa(s,!1).getAll();return new to(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jm.type="LOCAL";const GR=jm;new Xi(3e4,6e4);/**
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
 */function WR(t,e){return e?Cn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mu extends du{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KR(t){return Dm(t.auth,new mu(t),t.bypassAuthState)}function zR(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),Vm(n,new mu(t),t.bypassAuthState)}async function QR(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),ER(n,new mu(t),t.bypassAuthState)}/**
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
 */class $m{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KR;case"linkViaPopup":case"linkViaRedirect":return QR;case"reauthViaPopup":case"reauthViaRedirect":return zR;default:Yt(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JR=new Xi(2e3,1e4);class ls extends $m{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JR.get())};e()}}ls.currentPopupAction=null;/**
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
 */const YR="pendingRedirect",Mo=new Map;class XR extends $m{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await ZR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZR(t,e){const n=nS(e),r=tS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function eS(t,e){Mo.set(t._key(),e)}function tS(t){return Cn(t._redirectPersistence)}function nS(t){return Lo(YR,t.config.apiKey,t.name)}async function rS(t,e,n=!1){if(Lt(t.app))return Promise.reject(Nn(t));const r=_r(t),s=WR(r,e),o=await new XR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sS=600*1e3;class iS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qm(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sS&&this.cachedEventUids.clear(),this.cachedEventUids.has(dd(e))}saveEventToCache(e){this.cachedEventUids.add(dd(e)),this.lastProcessedEventTime=Date.now()}}function dd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qm(t);default:return!1}}/**
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
 */async function aS(t,e={}){return En(t,"GET","/v1/projects",e)}/**
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
 */const cS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lS=/^https?/;async function uS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aS(t);for(const n of e)try{if(hS(n))return}catch{}Yt(t,"unauthorized-domain")}function hS(t){const e=yl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lS.test(n))return!1;if(cS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const fS=new Xi(3e4,6e4);function pd(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dS(t){return new Promise((e,n)=>{var s,i,o;function r(){pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pd(),n(fn(t,"network-request-failed"))},timeout:fS.get()})}if((i=(s=dn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=dn().gapi)!=null&&o.load)r();else{const c=XA("iframefcb");return dn()[c]=()=>{gapi.load?r():n(fn(t,"network-request-failed"))},Sm(`${YA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function pS(t){return Fo=Fo||dS(t),Fo}/**
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
 */const gS=new Xi(5e3,15e3),mS="__/auth/iframe",_S="emulator/auth/iframe",yS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ES=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TS(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uu(e,_S):`https://${t.config.authDomain}/${mS}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=ES.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ji(r).slice(1)}`}async function vS(t){const e=await pS(t),n=dn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:TS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=dn().setTimeout(()=>{i(o)},gS.get());function l(){dn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const IS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wS=500,AS=600,RS="_blank",SS="http://localhost";class gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bS(t,e,n,r=wS,s=AS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...IS,width:r.toString(),height:s.toString(),top:i,left:o},u=pt().toLowerCase();n&&(c=Em(u)?RS:n),_m(u)&&(e=e||SS,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[y,C])=>`${g}${y}=${C},`,"");if($A(u)&&c!=="_self")return PS(e||"",c),new gd(null);const p=window.open(e||"",c,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new gd(p)}function PS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const CS="__/auth/handler",NS="emulator/auth/handler",VS=encodeURIComponent("fac");async function md(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof Cm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof eo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${VS}=${encodeURIComponent(l)}`:"";return`${DS(t)}?${Ji(c).slice(1)}${u}`}function DS({config:t}){return t.emulator?uu(t,NS):`https://${t.authDomain}/${CS}`}/**
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
 */const Gc="webStorageSupport";class OS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mm,this._completeRedirectFn=rS,this._overrideRedirectResult=eS}async _openPopup(e,n,r,s){var o;Ln((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await md(e,n,r,yl(),s);return bS(e,i,gu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await md(e,n,r,yl(),s);return LR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vS(e),r=new iS(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Gc];i!==void 0&&n(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Am()||ym()||fu()}}const kS=OS;var _d="@firebase/auth",yd="1.12.2";/**
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
 */class xS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MS(t){bs(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rm(t)},u=new zA(r,s,i,l);return sR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bs(new jr("auth-internal",e=>{const n=_r(e.getProvider("auth").getImmediate());return(r=>new xS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(_d,yd,LS(t)),ar(_d,yd,"esm2020")}/**
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
 */const FS=300,US=tm("authIdTokenMaxAge")||FS;let Ed=null;const BS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>US)return;const s=n==null?void 0:n.token;Ed!==s&&(Ed=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jS(t=om()){const e=cu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rR(t,{popupRedirectResolver:kS,persistence:[GR,OR,Mm]}),r=tm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=BS(i.toString());PR(n,o,()=>o(n.currentUser)),bR(n,c=>o(c))}}const s=Zg("auth");return s&&iR(n,`http://${s}`),n}function $S(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}QA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$S().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MS("Browser");var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cr,Hm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function _(){}_.prototype=v.prototype,R.F=v.prototype,R.prototype=new _,R.prototype.constructor=R,R.D=function(S,A,w){for(var E=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)E[Te-2]=arguments[Te];return v.prototype[A].apply(S,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,_){_||(_=0);const S=Array(16);if(typeof v=="string")for(var A=0;A<16;++A)S[A]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(A=0;A<16;++A)S[A]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=R.g[0],_=R.g[1],A=R.g[2];let w=R.g[3],E;E=v+(w^_&(A^w))+S[0]+3614090360&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(A^v&(_^A))+S[1]+3905402710&4294967295,w=v+(E<<12&4294967295|E>>>20),E=A+(_^w&(v^_))+S[2]+606105819&4294967295,A=w+(E<<17&4294967295|E>>>15),E=_+(v^A&(w^v))+S[3]+3250441966&4294967295,_=A+(E<<22&4294967295|E>>>10),E=v+(w^_&(A^w))+S[4]+4118548399&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(A^v&(_^A))+S[5]+1200080426&4294967295,w=v+(E<<12&4294967295|E>>>20),E=A+(_^w&(v^_))+S[6]+2821735955&4294967295,A=w+(E<<17&4294967295|E>>>15),E=_+(v^A&(w^v))+S[7]+4249261313&4294967295,_=A+(E<<22&4294967295|E>>>10),E=v+(w^_&(A^w))+S[8]+1770035416&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(A^v&(_^A))+S[9]+2336552879&4294967295,w=v+(E<<12&4294967295|E>>>20),E=A+(_^w&(v^_))+S[10]+4294925233&4294967295,A=w+(E<<17&4294967295|E>>>15),E=_+(v^A&(w^v))+S[11]+2304563134&4294967295,_=A+(E<<22&4294967295|E>>>10),E=v+(w^_&(A^w))+S[12]+1804603682&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(A^v&(_^A))+S[13]+4254626195&4294967295,w=v+(E<<12&4294967295|E>>>20),E=A+(_^w&(v^_))+S[14]+2792965006&4294967295,A=w+(E<<17&4294967295|E>>>15),E=_+(v^A&(w^v))+S[15]+1236535329&4294967295,_=A+(E<<22&4294967295|E>>>10),E=v+(A^w&(_^A))+S[1]+4129170786&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^A&(v^_))+S[6]+3225465664&4294967295,w=v+(E<<9&4294967295|E>>>23),E=A+(v^_&(w^v))+S[11]+643717713&4294967295,A=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(A^w))+S[0]+3921069994&4294967295,_=A+(E<<20&4294967295|E>>>12),E=v+(A^w&(_^A))+S[5]+3593408605&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^A&(v^_))+S[10]+38016083&4294967295,w=v+(E<<9&4294967295|E>>>23),E=A+(v^_&(w^v))+S[15]+3634488961&4294967295,A=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(A^w))+S[4]+3889429448&4294967295,_=A+(E<<20&4294967295|E>>>12),E=v+(A^w&(_^A))+S[9]+568446438&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^A&(v^_))+S[14]+3275163606&4294967295,w=v+(E<<9&4294967295|E>>>23),E=A+(v^_&(w^v))+S[3]+4107603335&4294967295,A=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(A^w))+S[8]+1163531501&4294967295,_=A+(E<<20&4294967295|E>>>12),E=v+(A^w&(_^A))+S[13]+2850285829&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^A&(v^_))+S[2]+4243563512&4294967295,w=v+(E<<9&4294967295|E>>>23),E=A+(v^_&(w^v))+S[7]+1735328473&4294967295,A=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(A^w))+S[12]+2368359562&4294967295,_=A+(E<<20&4294967295|E>>>12),E=v+(_^A^w)+S[5]+4294588738&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^A)+S[8]+2272392833&4294967295,w=v+(E<<11&4294967295|E>>>21),E=A+(w^v^_)+S[11]+1839030562&4294967295,A=w+(E<<16&4294967295|E>>>16),E=_+(A^w^v)+S[14]+4259657740&4294967295,_=A+(E<<23&4294967295|E>>>9),E=v+(_^A^w)+S[1]+2763975236&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^A)+S[4]+1272893353&4294967295,w=v+(E<<11&4294967295|E>>>21),E=A+(w^v^_)+S[7]+4139469664&4294967295,A=w+(E<<16&4294967295|E>>>16),E=_+(A^w^v)+S[10]+3200236656&4294967295,_=A+(E<<23&4294967295|E>>>9),E=v+(_^A^w)+S[13]+681279174&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^A)+S[0]+3936430074&4294967295,w=v+(E<<11&4294967295|E>>>21),E=A+(w^v^_)+S[3]+3572445317&4294967295,A=w+(E<<16&4294967295|E>>>16),E=_+(A^w^v)+S[6]+76029189&4294967295,_=A+(E<<23&4294967295|E>>>9),E=v+(_^A^w)+S[9]+3654602809&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^A)+S[12]+3873151461&4294967295,w=v+(E<<11&4294967295|E>>>21),E=A+(w^v^_)+S[15]+530742520&4294967295,A=w+(E<<16&4294967295|E>>>16),E=_+(A^w^v)+S[2]+3299628645&4294967295,_=A+(E<<23&4294967295|E>>>9),E=v+(A^(_|~w))+S[0]+4096336452&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~A))+S[7]+1126891415&4294967295,w=v+(E<<10&4294967295|E>>>22),E=A+(v^(w|~_))+S[14]+2878612391&4294967295,A=w+(E<<15&4294967295|E>>>17),E=_+(w^(A|~v))+S[5]+4237533241&4294967295,_=A+(E<<21&4294967295|E>>>11),E=v+(A^(_|~w))+S[12]+1700485571&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~A))+S[3]+2399980690&4294967295,w=v+(E<<10&4294967295|E>>>22),E=A+(v^(w|~_))+S[10]+4293915773&4294967295,A=w+(E<<15&4294967295|E>>>17),E=_+(w^(A|~v))+S[1]+2240044497&4294967295,_=A+(E<<21&4294967295|E>>>11),E=v+(A^(_|~w))+S[8]+1873313359&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~A))+S[15]+4264355552&4294967295,w=v+(E<<10&4294967295|E>>>22),E=A+(v^(w|~_))+S[6]+2734768916&4294967295,A=w+(E<<15&4294967295|E>>>17),E=_+(w^(A|~v))+S[13]+1309151649&4294967295,_=A+(E<<21&4294967295|E>>>11),E=v+(A^(_|~w))+S[4]+4149444226&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~A))+S[11]+3174756917&4294967295,w=v+(E<<10&4294967295|E>>>22),E=A+(v^(w|~_))+S[2]+718787259&4294967295,A=w+(E<<15&4294967295|E>>>17),E=_+(w^(A|~v))+S[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+A&4294967295,R.g[3]=R.g[3]+w&4294967295}r.prototype.v=function(R,v){v===void 0&&(v=R.length);const _=v-this.blockSize,S=this.C;let A=this.h,w=0;for(;w<v;){if(A==0)for(;w<=_;)s(this,R,w),w+=this.blockSize;if(typeof R=="string"){for(;w<v;)if(S[A++]=R.charCodeAt(w++),A==this.blockSize){s(this,S),A=0;break}}else for(;w<v;)if(S[A++]=R[w++],A==this.blockSize){s(this,S),A=0;break}}this.h=A,this.o+=v},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;v=this.o*8;for(var _=R.length-8;_<R.length;++_)R[_]=v&255,v/=256;for(this.v(R),R=Array(16),v=0,_=0;_<4;++_)for(let S=0;S<32;S+=8)R[v++]=this.g[_]>>>S&255;return R};function i(R,v){var _=c;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=v(R)}function o(R,v){this.h=v;const _=[];let S=!0;for(let A=R.length-1;A>=0;A--){const w=R[A]|0;S&&w==v||(_[A]=w,S=!1)}this.g=_}var c={};function l(R){return-128<=R&&R<128?i(R,function(v){return new o([v|0],v<0?-1:0)}):new o([R|0],R<0?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(R<0)return L(u(-R));const v=[];let _=1;for(let S=0;R>=_;S++)v[S]=R/_|0,_*=4294967296;return new o(v,0)}function f(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return L(f(R.substring(1),v));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(v,8));let S=p;for(let w=0;w<R.length;w+=8){var A=Math.min(8,R.length-w);const E=parseInt(R.substring(w,w+A),v);A<8?(A=u(Math.pow(v,A)),S=S.j(A).add(u(E))):(S=S.j(_),S=S.add(u(E)))}return S}var p=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-L(this).m();let R=0,v=1;for(let _=0;_<this.g.length;_++){const S=this.i(_);R+=(S>=0?S:4294967296+S)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(V(this))return"-"+L(this).toString(R);const v=u(Math.pow(R,6));var _=this;let S="";for(;;){const A=W(_,v).g;_=q(_,A.j(v));let w=((_.g.length>0?_.g[0]:_.h)>>>0).toString(R);if(_=A,C(_))return w+S;for(;w.length<6;)w="0"+w;S=w+S}},t.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(let v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function V(R){return R.h==-1}t.l=function(R){return R=q(this,R),V(R)?-1:C(R)?0:1};function L(R){const v=R.g.length,_=[];for(let S=0;S<v;S++)_[S]=~R.g[S];return new o(_,~R.h).add(g)}t.abs=function(){return V(this)?L(this):this},t.add=function(R){const v=Math.max(this.g.length,R.g.length),_=[];let S=0;for(let A=0;A<=v;A++){let w=S+(this.i(A)&65535)+(R.i(A)&65535),E=(w>>>16)+(this.i(A)>>>16)+(R.i(A)>>>16);S=E>>>16,w&=65535,E&=65535,_[A]=E<<16|w}return new o(_,_[_.length-1]&-2147483648?-1:0)};function q(R,v){return R.add(L(v))}t.j=function(R){if(C(this)||C(R))return p;if(V(this))return V(R)?L(this).j(L(R)):L(L(this).j(R));if(V(R))return L(this.j(L(R)));if(this.l(y)<0&&R.l(y)<0)return u(this.m()*R.m());const v=this.g.length+R.g.length,_=[];for(var S=0;S<2*v;S++)_[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<R.g.length;A++){const w=this.i(S)>>>16,E=this.i(S)&65535,Te=R.i(A)>>>16,Be=R.i(A)&65535;_[2*S+2*A]+=E*Be,B(_,2*S+2*A),_[2*S+2*A+1]+=w*Be,B(_,2*S+2*A+1),_[2*S+2*A+1]+=E*Te,B(_,2*S+2*A+1),_[2*S+2*A+2]+=w*Te,B(_,2*S+2*A+2)}for(R=0;R<v;R++)_[R]=_[2*R+1]<<16|_[2*R];for(R=v;R<2*v;R++)_[R]=0;return new o(_,0)};function B(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function H(R,v){this.g=R,this.h=v}function W(R,v){if(C(v))throw Error("division by zero");if(C(R))return new H(p,p);if(V(R))return v=W(L(R),v),new H(L(v.g),L(v.h));if(V(v))return v=W(R,L(v)),new H(L(v.g),v.h);if(R.g.length>30){if(V(R)||V(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,S=v;S.l(R)<=0;)_=ne(_),S=ne(S);var A=le(_,1),w=le(S,1);for(S=le(S,2),_=le(_,2);!C(S);){var E=w.add(S);E.l(R)<=0&&(A=A.add(_),w=E),S=le(S,1),_=le(_,1)}return v=q(R,A.j(v)),new H(A,v)}for(A=p;R.l(v)>=0;){for(_=Math.max(1,Math.floor(R.m()/v.m())),S=Math.ceil(Math.log(_)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),w=u(_),E=w.j(v);V(E)||E.l(R)>0;)_-=S,w=u(_),E=w.j(v);C(w)&&(w=g),A=A.add(w),R=q(R,E)}return new H(A,R)}t.B=function(R){return W(this,R).h},t.and=function(R){const v=Math.max(this.g.length,R.g.length),_=[];for(let S=0;S<v;S++)_[S]=this.i(S)&R.i(S);return new o(_,this.h&R.h)},t.or=function(R){const v=Math.max(this.g.length,R.g.length),_=[];for(let S=0;S<v;S++)_[S]=this.i(S)|R.i(S);return new o(_,this.h|R.h)},t.xor=function(R){const v=Math.max(this.g.length,R.g.length),_=[];for(let S=0;S<v;S++)_[S]=this.i(S)^R.i(S);return new o(_,this.h^R.h)};function ne(R){const v=R.g.length+1,_=[];for(let S=0;S<v;S++)_[S]=R.i(S)<<1|R.i(S-1)>>>31;return new o(_,R.h)}function le(R,v){const _=v>>5;v%=32;const S=R.g.length-_,A=[];for(let w=0;w<S;w++)A[w]=v>0?R.i(w+_)>>>v|R.i(w+_+1)<<32-v:R.i(w+_);return new o(A,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Hm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,cr=o}).apply(typeof Td<"u"?Td:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gm,li,Wm,Uo,vl,Km,zm,Qm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,N){for(var G=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)G[fe-2]=arguments[fe];return h.prototype[P].apply(m,G)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function C(a,h){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let G=0;G<N;G++)a[d+G]=P[G]}else a.push(P)}}class V{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){o.setTimeout(()=>{throw a},0)}function q(){var a=R;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class B{constructor(){this.h=this.g=null}add(h,d){const m=H.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var H=new V(()=>new W,a=>a.reset());class W{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,le=!1,R=new B,v=()=>{const a=Promise.resolve(void 0);ne=()=>{a.then(_)}};function _(){for(var a;a=q();){try{a.h.call(a.g)}catch(d){L(d)}var h=H;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}le=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function E(a){return/^[\s\xa0]*$/.test(a)}function Te(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Te,A),Te.prototype.init=function(a,h){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Be="closure_listenable_"+(Math.random()*1e6|0),xe=0;function we(a,h,d,m,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=P,this.key=++xe,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function vt(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function Zt(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Pt(a){const h={};for(const d in a)h[d]=a[d];return h}const et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tn(a,h){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<et.length;N++)d=et[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Bt(a){this.src=a,this.g={},this.h=0}Bt.prototype.add=function(a,h,d,m,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const G=it(a,h,m,P);return G>-1?(h=a[G],d||(h.fa=!1)):(h=new we(h,this.src,N,!!m,P),h.fa=d,a.push(h)),h};function jt(a,h){const d=h.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,h,void 0),N;(N=P>=0)&&Array.prototype.splice.call(m,P,1),N&&(ye(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function it(a,h,d,m){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==m)return P}return-1}var k="closure_lm_"+(Math.random()*1e6|0),Y={};function z(a,h,d,m,P){if(Array.isArray(h)){for(let N=0;N<h.length;N++)z(a,h[N],d,m,P);return null}return d=K(d),a&&a[Be]?a.J(h,d,c(m)?!!m.capture:!1,P):Z(a,h,d,!1,m,P)}function Z(a,h,d,m,P,N){if(!h)throw Error("Invalid event type");const G=c(P)?!!P.capture:!!P;let fe=F(a);if(fe||(a[k]=fe=new Bt(a)),d=fe.add(h,d,m,G,N),d.proxy)return d;if(m=pe(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)w||(P=G),P===void 0&&(P=!1),a.addEventListener(h.toString(),m,P);else if(a.attachEvent)a.attachEvent(b(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function pe(){function a(d){return h.call(a.src,a.listener,d)}const h=D;return a}function T(a,h,d,m,P){if(Array.isArray(h))for(var N=0;N<h.length;N++)T(a,h[N],d,m,P);else m=c(m)?!!m.capture:!!m,d=K(d),a&&a[Be]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],d=it(h,d,m,P),d>-1&&(ye(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=F(a))&&(h=a.g[h.toString()],a=-1,h&&(a=it(h,d,m,P)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Be])jt(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(b(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=F(h))?(jt(d,a),d.h==0&&(d.src=null,h[k]=null)):ye(a)}}}function b(a){return a in Y?Y[a]:Y[a]="on"+a}function D(a,h){if(a.da)a=!0;else{h=new Te(h,this);const d=a.listener,m=a.ha||a.src;a.fa&&I(a),a=d.call(m,h)}return a}function F(a){return a=a[k],a instanceof Bt?a:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(a){return typeof a=="function"?a:(a[O]||(a[O]=function(h){return a.handleEvent(h)}),a[O])}function $(){S.call(this),this.i=new Bt(this),this.M=this,this.G=null}p($,S),$.prototype[Be]=!0,$.prototype.removeEventListener=function(a,h,d,m){T(this,a,h,d,m)};function j(a,h){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var P=h;h=new A(m,a),Tn(h,P)}P=!0;let N,G;if(d)for(G=d.length-1;G>=0;G--)N=h.g=d[G],P=U(N,m,!0,h)&&P;if(N=h.g=a,P=U(N,m,!0,h)&&P,P=U(N,m,!1,h)&&P,d)for(G=0;G<d.length;G++)N=h.g=d[G],P=U(N,m,!1,h)&&P}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let m=0;m<d.length;m++)ye(d[m]);delete a.g[h],a.h--}}this.G=null},$.prototype.J=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},$.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function U(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let N=0;N<h.length;++N){const G=h[N];if(G&&!G.da&&G.capture==d){const fe=G.listener,Ke=G.ha||G.src;G.fa&&jt(a.i,G),P=fe.call(Ke,m)!==!1&&P}}return P&&!m.defaultPrevented}function re(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Q(a){a.g=re(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ee extends S{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(a){S.call(this),this.h=a,this.g={}}p(se,S);var de=[];function Pe(a){vt(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}se.prototype.N=function(){se.Z.N.call(this),Pe(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ve=o.JSON.stringify,ot=o.JSON.parse,at=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ct(){}function Nt(){}var $t={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xr(){A.call(this,"d")}p(Xr,A);function tt(){A.call(this,"c")}p(tt,A);var Ye={},Bs=null;function Tr(){return Bs=Bs||new $}Ye.Ia="serverreachability";function Zu(a){A.call(this,Ye.Ia,a)}p(Zu,A);function js(a){const h=Tr();j(h,new Zu(h))}Ye.STAT_EVENT="statevent";function eh(a,h){A.call(this,Ye.STAT_EVENT,a),this.stat=h}p(eh,A);function gt(a){const h=Tr();j(h,new eh(h,a))}Ye.Ja="timingevent";function th(a,h){A.call(this,Ye.Ja,a),this.size=h}p(th,A);function $s(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function qs(){this.g=!0}qs.prototype.ua=function(){this.g=!1};function Ry(a,h,d,m,P,N){a.info(function(){if(a.g)if(N){var G="",fe=N.split("&");for(let Ce=0;Ce<fe.length;Ce++){var Ke=fe[Ce].split("=");if(Ke.length>1){const Xe=Ke[0];Ke=Ke[1];const tn=Xe.split("_");G=tn.length>=2&&tn[1]=="type"?G+(Xe+"="+Ke+"&"):G+(Xe+"=redacted&")}}}else G=null;else G=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+h+`
`+d+`
`+G})}function Sy(a,h,d,m,P,N,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+h+`
`+d+`
`+N+" "+G})}function Zr(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Py(a,d)+(m?" "+m:"")})}function by(a,h){a.info(function(){return"TIMEOUT: "+h})}qs.prototype.info=function(){};function Py(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let G=1;G<m.length;G++)m[G]=""}}}}return ve(N)}catch{return h}}var lo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},nh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rh;function uc(){}p(uc,Ct),uc.prototype.g=function(){return new XMLHttpRequest},rh=new uc;function Hs(a){return encodeURIComponent(String(a))}function Cy(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function qn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.S=m||1,this.V=new se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sh}function sh(){this.i=null,this.g="",this.h=!1}var ih={},hc={};function fc(a,h,d){a.M=1,a.A=ho(en(h)),a.u=d,a.R=!0,oh(a,null)}function oh(a,h){a.F=Date.now(),uo(a),a.B=en(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Eh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new sh,a.g=Mh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ee(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(de[0]=P.toString()),P=de);for(let N=0;N<P.length;N++){const G=z(d,P[N],m||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.J?Pt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),js(),Ry(a.i,a.v,a.B,a.l,a.S,a.u)}qn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Wn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const fe=Wn(this.g),Ke=this.g.ya(),Ce=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Sh(this.g)))){this.K||fe!=4||Ke==7||(Ke==8||Ce<=0?js(3):js(2)),dc(this);var h=this.g.ca();this.X=h;var d=Ny(this);if(this.o=h==200,Sy(this.i,this.v,this.B,this.l,this.S,fe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var N=m;break t}}N=null}if(a=N)Zr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pc(this,a);else{this.o=!1,this.m=3,gt(12),vr(this),Gs(this);break e}}if(this.R){a=!0;let Xe;for(;!this.K&&this.C<d.length;)if(Xe=Vy(this,d),Xe==hc){fe==4&&(this.m=4,gt(14),a=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==ih){this.m=4,gt(15),Zr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Zr(this.i,this.l,Xe,null),pc(this,Xe);if(ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||d.length!=0||this.h.h||(this.m=1,gt(16),a=!1),this.o=this.o&&a,!a)Zr(this.i,this.l,d,"[Invalid Chunked Response]"),vr(this),Gs(this);else if(d.length>0&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.aa&&!G.P&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ic(G),G.P=!0,gt(11))}}else Zr(this.i,this.l,d,null),pc(this,d);fe==4&&vr(this),this.o&&!this.K&&(fe==4?Oh(this.j,this):(this.o=!1,uo(this)))}else Gy(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,gt(12)):(this.m=0,gt(13)),vr(this),Gs(this)}}}catch{}finally{}};function Ny(a){if(!ah(a))return a.g.la();const h=Sh(a.g);if(h==="")return"";let d="";const m=h.length,P=Wn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return vr(a),Gs(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(h[N],{stream:!(P&&N==m-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function ah(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Vy(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?hc:(d=Number(h.substring(d,m)),isNaN(d)?ih:(m+=1,m+d>h.length?hc:(h=h.slice(m,m+d),a.C=m+d,h)))}qn.prototype.cancel=function(){this.K=!0,vr(this)};function uo(a){a.T=Date.now()+a.H,ch(a,a.H)}function ch(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=$s(u(a.aa,a),h)}function dc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}qn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(by(this.i,this.B),this.M!=2&&(js(),gt(17)),vr(this),this.m=2,Gs(this)):ch(this,this.T-a)};function Gs(a){a.j.I==0||a.K||Oh(a.j,a)}function vr(a){dc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Pe(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function pc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||gc(d.h,a))){if(!a.L&&gc(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)_o(d),go(d);else break e;vc(d),gt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=$s(u(d.Va,d),6e3));hh(d.h)<=1&&d.ta&&(d.ta=void 0)}else wr(d,11)}else if((a.L||d.g==a)&&_o(d),!E(h))for(P=d.Ba.g.parse(h),h=0;h<P.length;h++){let Ce=P[h];const Xe=Ce[0];if(!(Xe<=d.K))if(d.K=Xe,Ce=Ce[1],d.I==2)if(Ce[0]=="c"){d.M=Ce[1],d.ba=Ce[2];const tn=Ce[3];tn!=null&&(d.ka=tn,d.j.info("VER="+d.ka));const Ar=Ce[4];Ar!=null&&(d.za=Ar,d.j.info("SVER="+d.za));const Kn=Ce[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(m=1.5*Kn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const zn=a.g;if(zn){const Eo=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Eo){var N=m.h;N.g||Eo.indexOf("spdy")==-1&&Eo.indexOf("quic")==-1&&Eo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(mc(N,N.h),N.h=null))}if(m.G){const wc=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(m.wa=wc,Oe(m.J,m.G,wc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var G=a;if(m.na=Lh(m,m.L?m.ba:null,m.W),G.L){fh(m.h,G);var fe=G,Ke=m.O;Ke&&(fe.H=Ke),fe.D&&(dc(fe),uo(fe)),m.g=G}else Vh(m);d.i.length>0&&mo(d)}else Ce[0]!="stop"&&Ce[0]!="close"||wr(d,7);else d.I==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?wr(d,7):Tc(d):Ce[0]!="noop"&&d.l&&d.l.qa(Ce),d.A=0)}}js(4)}catch{}}var Dy=class{constructor(a,h){this.g=a,this.map=h}};function lh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function uh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hh(a){return a.h?1:a.g?a.g.size:0}function gc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function mc(a,h){a.g?a.g.add(h):a.h=h}function fh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}lh.prototype.cancel=function(){if(this.i=dh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function dh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return y(a.i)}var ph=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,N=null;m>=0?(P=a[d].substring(0,m),N=a[d].substring(m+1)):P=a[d],h(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Hn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Hn?(this.l=a.l,Ws(this,a.j),this.o=a.o,this.g=a.g,Ks(this,a.u),this.h=a.h,_c(this,Th(a.i)),this.m=a.m):a&&(h=String(a).match(ph))?(this.l=!1,Ws(this,h[1]||"",!0),this.o=zs(h[2]||""),this.g=zs(h[3]||"",!0),Ks(this,h[4]),this.h=zs(h[5]||"",!0),_c(this,h[6]||"",!0),this.m=zs(h[7]||"")):(this.l=!1,this.i=new Js(null,this.l))}Hn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Qs(h,gh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qs(h,gh,!0),"@"),a.push(Hs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Qs(d,d.charAt(0)=="/"?Ly:xy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Qs(d,Fy)),a.join("")},Hn.prototype.resolve=function(a){const h=en(this);let d=!!a.j;d?Ws(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var m=a.h;if(d)Ks(h,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=h.h.lastIndexOf("/");P!=-1&&(m=h.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let G=0;G<P.length;){const fe=P[G++];fe=="."?m&&G==P.length&&N.push(""):fe==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&G==P.length&&N.push("")):(N.push(fe),m=!0)}m=N.join("/")}else m=P}return d?h.h=m:d=a.i.toString()!=="",d?_c(h,Th(a.i)):d=!!a.m,d&&(h.m=a.m),h};function en(a){return new Hn(a)}function Ws(a,h,d){a.j=d?zs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ks(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function _c(a,h,d){h instanceof Js?(a.i=h,Uy(a.i,a.l)):(d||(h=Qs(h,My)),a.i=new Js(h,a.l))}function Oe(a,h,d){a.i.set(h,d)}function ho(a){return Oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function zs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,ky),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ky(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gh=/[#\/\?@]/g,xy=/[#\?:]/g,Ly=/[#\?]/g,My=/[#\?@]/g,Fy=/#/g;function Js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ir(a){a.g||(a.g=new Map,a.h=0,a.i&&Oy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Js.prototype,t.add=function(a,h){Ir(this),this.i=null,a=es(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function mh(a,h){Ir(a),h=es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function _h(a,h){return Ir(a),h=es(a,h),a.g.has(h)}t.forEach=function(a,h){Ir(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(h,P,m,this)},this)},this)};function yh(a,h){Ir(a);let d=[];if(typeof h=="string")_h(a,h)&&(d=d.concat(a.g.get(es(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Ir(this),this.i=null,a=es(this,a),_h(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=yh(this,a),a.length>0?String(a[0]):h):h};function Eh(a,h,d){mh(a,h),d.length>0&&(a.i=null,a.g.set(es(a,h),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const P=Hs(d);d=yh(this,d);for(let N=0;N<d.length;N++){let G=P;d[N]!==""&&(G+="="+Hs(d[N])),a.push(G)}}return this.i=a.join("&")};function Th(a){const h=new Js;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Uy(a,h){h&&!a.j&&(Ir(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(mh(this,m),Eh(this,P,d))},a)),a.j=h}function By(a,h){const d=new qs;if(o.Image){const m=new Image;m.onload=f(Gn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=f(Gn,d,"TestLoadImage: error",!1,h,m),m.onabort=f(Gn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(Gn,d,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function jy(a,h){const d=new qs,m=new AbortController,P=setTimeout(()=>{m.abort(),Gn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?Gn(d,"TestPingServer: ok",!0,h):Gn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Gn(d,"TestPingServer: error",!1,h)})}function Gn(a,h,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function $y(){this.g=new at}function yc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(yc,Ct),yc.prototype.g=function(){return new fo(this.i,this.h)};function fo(a,h){$.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(fo,$),t=fo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function vh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ys(this):Xs(this),this.readyState==3&&vh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},t.Na=function(a){this.g&&(this.response=a,Ys(this))},t.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Xs(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ih(a){let h="";return vt(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Ec(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Ih(d),typeof a=="string"?d!=null&&Hs(d):Oe(a,h,d))}function Me(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Me,$);var qy=/^https?$/i,Hy=["POST","PUT"];t=Me.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rh.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){wh(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Hy,h,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,G]of d)this.g.setRequestHeader(N,G);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){wh(this,N)}};function wh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Ah(a),po(a)}function Ah(a){a.A||(a.A=!0,j(a,"complete"),j(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,j(this,"complete"),j(this,"abort"),po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),po(this,!0)),Me.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Rh(this):this.Xa())},t.Xa=function(){Rh(this)};function Rh(a){if(a.h&&typeof i<"u"){if(a.v&&Wn(a)==4)setTimeout(a.Ca.bind(a),0);else if(j(a,"readystatechange"),Wn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=N===0){let G=String(a.D).match(ph)[1]||null;!G&&o.self&&o.self.location&&(G=o.self.location.protocol.slice(0,-1)),m=!qy.test(G?G.toLowerCase():"")}d=m}if(d)j(a,"complete"),j(a,"success");else{a.o=6;try{var P=Wn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Ah(a)}}finally{po(a)}}}}function po(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||j(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Wn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Wn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ot(h)}};function Sh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Gy(a){const h={};a=(a.g&&Wn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=Cy(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[P]||[];h[P]=N,N.push(d)}Zt(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function bh(a){this.za=0,this.i=[],this.j=new qs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zs("baseRetryDelayMs",5e3,a),this.Za=Zs("retryDelaySeedMs",1e4,a),this.Ta=Zs("forwardChannelMaxRetries",2,a),this.va=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new lh(a&&a.concurrentRequestLimit),this.Ba=new $y,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=bh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,m){gt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Lh(this,null,this.W),mo(this)};function Tc(a){if(Ph(a),a.I==3){var h=a.V++,d=en(a.J);if(Oe(d,"SID",a.M),Oe(d,"RID",h),Oe(d,"TYPE","terminate"),ei(a,d),h=new qn(a,a.j,h),h.M=2,h.A=ho(en(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Mh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),uo(h)}xh(a)}function go(a){a.g&&(Ic(a),a.g.cancel(),a.g=null)}function Ph(a){go(a),a.v&&(o.clearTimeout(a.v),a.v=null),_o(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function mo(a){if(!uh(a.h)&&!a.m){a.m=!0;var h=a.Ea;ne||v(),le||(ne(),le=!0),R.add(h,a),a.D=0}}function Wy(a,h){return hh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=$s(u(a.Ea,a,h),kh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new qn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=Pt(N),Tn(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Nh(this,P,h),d=en(this.J),Oe(d,"RID",a),Oe(d,"CVER",22),this.G&&Oe(d,"X-HTTP-Session-Id",this.G),ei(this,d),N&&(this.R?h="headers="+Hs(Ih(N))+"&"+h:this.u&&Ec(d,this.u,N)),mc(this.h,P),this.Ra&&Oe(d,"TYPE","init"),this.S?(Oe(d,"$req",h),Oe(d,"SID","null"),P.U=!0,fc(P,d,null)):fc(P,d,h),this.I=2}}else this.I==3&&(a?Ch(this,a):this.i.length==0||uh(this.h)||Ch(this))};function Ch(a,h){var d;h?d=h.l:d=a.V++;const m=en(a.J);Oe(m,"SID",a.M),Oe(m,"RID",d),Oe(m,"AID",a.K),ei(a,m),a.u&&a.o&&Ec(m,a.u,a.o),d=new qn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Nh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),mc(a.h,d),fc(d,m,h)}function ei(a,h){a.H&&vt(a.H,function(d,m){Oe(h,m,d)}),a.l&&vt({},function(d,m){Oe(h,m,d)})}function Nh(a,h,d){d=Math.min(a.i.length,d);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var P=a.i;let fe=-1;for(;;){const Ke=["count="+d];fe==-1?d>0?(fe=P[0].g,Ke.push("ofs="+fe)):fe=0:Ke.push("ofs="+fe);let Ce=!0;for(let Xe=0;Xe<d;Xe++){var N=P[Xe].g;const tn=P[Xe].map;if(N-=fe,N<0)fe=Math.max(0,P[Xe].g-100),Ce=!1;else try{N="req"+N+"_"||"";try{var G=tn instanceof Map?tn:Object.entries(tn);for(const[Ar,Kn]of G){let zn=Kn;c(Kn)&&(zn=ve(Kn)),Ke.push(N+Ar+"="+encodeURIComponent(zn))}}catch(Ar){throw Ke.push(N+"type="+encodeURIComponent("_badmap")),Ar}}catch{m&&m(tn)}}if(Ce){G=Ke.join("&");break e}}G=void 0}return a=a.i.splice(0,d),h.G=a,G}function Vh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;ne||v(),le||(ne(),le=!0),R.add(h,a),a.A=0}}function vc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=$s(u(a.Da,a),kh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Dh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=$s(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,gt(10),go(this),Dh(this))};function Ic(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Dh(a){a.g=new qn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=en(a.na);Oe(h,"RID","rpc"),Oe(h,"SID",a.M),Oe(h,"AID",a.K),Oe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Oe(h,"TO",a.ia),Oe(h,"TYPE","xmlhttp"),ei(a,h),a.u&&a.o&&Ec(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ho(en(h)),d.u=null,d.R=!0,oh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,go(this),vc(this),gt(19))};function _o(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Oh(a,h){var d=null;if(a.g==h){_o(a),Ic(a),a.g=null;var m=2}else if(gc(a.h,h))d=h.G,fh(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;m=Tr(),j(m,new th(m,d)),mo(a)}else Vh(a);else if(P=h.m,P==3||P==0&&h.X>0||!(m==1&&Wy(a,h)||m==2&&vc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),P){case 1:wr(a,5);break;case 4:wr(a,10);break;case 3:wr(a,6);break;default:wr(a,2)}}}function kh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function wr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),m=a.Ua;const P=!m;m=new Hn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ws(m,"https"),ho(m),P?By(m.toString(),d):jy(m.toString(),d)}else gt(2);a.I=0,a.l&&a.l.pa(h),xh(a),Ph(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function xh(a){if(a.I=0,a.ja=[],a.l){const h=dh(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function Lh(a,h,d){var m=d instanceof Hn?en(d):new Hn(d);if(m.g!="")h&&(m.g=h+"."+m.g),Ks(m,m.u);else{var P=o.location;m=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const N=new Hn(null);m&&Ws(N,m),h&&(N.g=h),P&&Ks(N,P),d&&(N.h=d),m=N}return d=a.G,h=a.wa,d&&h&&Oe(m,d,h),Oe(m,"VER",a.ka),ei(a,m),m}function Mh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Me(new yc({ab:d})):new Me(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fh(){}t=Fh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function yo(){}yo.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){$.call(this),this.g=new bh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ts(this)}p(Vt,$),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Tc(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ve(a),a=d);h.i.push(new Dy(h.Ya++,a)),h.I==3&&mo(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Tc(this.g),delete this.g,Vt.Z.N.call(this)};function Uh(a){Xr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Uh,Xr);function Bh(){tt.call(this),this.status=1}p(Bh,tt);function ts(a){this.g=a}p(ts,Fh),ts.prototype.ra=function(){j(this.g,"a")},ts.prototype.qa=function(a){j(this.g,new Uh(a))},ts.prototype.pa=function(a){j(this.g,new Bh)},ts.prototype.oa=function(){j(this.g,"b")},yo.prototype.createWebChannel=yo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Qm=function(){return new yo},zm=function(){return Tr()},Km=Ye,vl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},lo.NO_ERROR=0,lo.TIMEOUT=8,lo.HTTP_ERROR=6,Uo=lo,nh.COMPLETE="complete",Wm=nh,Nt.EventType=$t,$t.OPEN="a",$t.CLOSE="b",$t.ERROR="c",$t.MESSAGE="d",$.prototype.listen=$.prototype.J,li=Nt,Me.prototype.listenOnce=Me.prototype.K,Me.prototype.getLastError=Me.prototype.Ha,Me.prototype.getLastErrorCode=Me.prototype.ya,Me.prototype.getStatus=Me.prototype.ca,Me.prototype.getResponseJson=Me.prototype.La,Me.prototype.getResponseText=Me.prototype.la,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Fa,Gm=Me}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Ls="12.11.0";function qS(t){Ls=t}/**
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
 */const Hr=new ou("@firebase/firestore");function is(){return Hr.logLevel}function X(t,...e){if(Hr.logLevel<=ge.DEBUG){const n=e.map(_u);Hr.debug(`Firestore (${Ls}): ${t}`,...n)}}function Mn(t,...e){if(Hr.logLevel<=ge.ERROR){const n=e.map(_u);Hr.error(`Firestore (${Ls}): ${t}`,...n)}}function Gr(t,...e){if(Hr.logLevel<=ge.WARN){const n=e.map(_u);Hr.warn(`Firestore (${Ls}): ${t}`,...n)}}function _u(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Jm(t,r,n)}function Jm(t,e,n){let r=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Mn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Jm(e,s,r)}function he(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class Ym{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(lt.UNAUTHENTICATED)))}shutdown(){}}class GS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class WS{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new Ym(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class KS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class zS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new KS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function JS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=JS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Il(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Wc(s)===Wc(i)?me(s,i):Wc(s)?1:-1}return me(t.length,e.length)}const YS=55296,XS=57343;function Wc(t){const e=t.charCodeAt(0);return e>=YS&&e<=XS}function Cs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Id="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=on.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),s=on.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?on.extractNumericId(e).compare(on.extractNumericId(n)):Il(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cr.fromString(e.substring(4,e.length-2))}}class De extends on{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new De(n)}static emptyPath(){return new De([])}}const ZS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends on{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return ZS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Id}static keyField(){return new rt([Id])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}/**
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
 */function Xm(t,e,n){if(!n)throw new J(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eb(t,e,n,r){if(e===!0&&r===!0)throw new J(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wd(t){if(!te.isDocumentKey(t))throw new J(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ad(t){if(te.isDocumentKey(t))throw new J(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ha(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ha(t);throw new J(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function no(t,e){if(!Zm(t))throw new J(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new J(x.INVALID_ARGUMENT,n);return!0}/**
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
 */const Rd=-62135596800,Sd=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Sd);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Rd)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sd}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(no(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:We("string",ke._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ke(0,0))}static max(){return new ce(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Mi=-1;function tb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new hr(s,te.empty(),e)}function nb(t){return new hr(t.readTime,t.key,Mi)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(ce.min(),te.empty(),Mi)}static max(){return new hr(ce.max(),te.empty(),Mi)}}function rb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const sb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ib{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ms(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==sb)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):M.reject(n)}static resolve(e){return new M(((n,r)=>{n(e)}))}static reject(e){return new M(((n,r)=>{r(e)}))}static waitFor(e){return new M(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next((s=>s?M.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new M(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new M(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function ob(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ga{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ga.ce=-1;/**
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
 */const Eu=-1;function Wa(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function ab(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const e_="";function cb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bd(e)),e=lb(t.get(n),e);return bd(e)}function lb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case e_:n+="";break;default:n+=i}}return n}function bd(t){return t+e_+""}/**
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
 */function Pd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cd(this.data.getIterator())}getIteratorFrom(e){return new Cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Qe(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class n_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new n_("Invalid base64 string: "+i):i}})(e);return new st(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const ub=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=ub.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */const r_="server_timestamp",s_="__type__",i_="__previous_value__",o_="__local_write_time__";function Tu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[s_])==null?void 0:r.stringValue)===r_}function Ka(t){const e=t.mapValue.fields[i_];return Tu(e)?Ka(e):e}function Fi(t){const e=fr(t.mapValue.fields[o_].timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class hb{constructor(e,n,r,s,i,o,c,l,u,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f,this.apiKey=p}}const fa="(default)";class Ui{constructor(e,n){this.projectId=e,this.database=n||fa}static empty(){return new Ui("","")}get isDefaultDatabase(){return this.database===fa}isEqual(e){return e instanceof Ui&&e.projectId===this.projectId&&e.database===this.database}}function fb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new J(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ui(t.options.projectId,e)}/**
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
 */const a_="__type__",db="__max__",So={mapValue:{}},c_="__vector__",da="value";function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tu(t)?4:gb(t)?9007199254740991:pb(t)?10:11:ae(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fi(t).isEqual(Fi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fr(s.timestampValue),c=fr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return dr(s.bytesValue).isEqual(dr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),c=je(i.doubleValue);return o===c?ha(o)===ha(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Pd(o)!==Pd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yn(o[l],c[l])))return!1;return!0})(t,e);default:return ae(52216,{left:t})}}function Bi(t,e){return(t.values||[]).find((n=>yn(n,e)))!==void 0}function Ns(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=je(i.integerValue||i.doubleValue),l=je(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return Nd(t.timestampValue,e.timestampValue);case 4:return Nd(Fi(t),Fi(e));case 5:return Il(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=dr(i),l=dr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=me(c[u],l[u]);if(f!==0)return f}return me(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=me(je(i.latitude),je(o.latitude));return c!==0?c:me(je(i.longitude),je(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Vd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var g,y,C,V;const c=i.fields||{},l=o.fields||{},u=(g=c[da])==null?void 0:g.arrayValue,f=(y=l[da])==null?void 0:y.arrayValue,p=me(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:Vd(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Il(l[p],f[p]);if(g!==0)return g;const y=Ns(c[l[p]],u[f[p]]);if(y!==0)return y}return me(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ae(23264,{he:n})}}function Nd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=fr(t),r=fr(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function Vd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function Vs(t){return wl(t)}function wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=fr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return dr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return te.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wl(n.fields[o])}`;return s+"}"})(t.mapValue):ae(61005,{value:t})}function Bo(t){switch(pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ka(t);return e?16+Bo(e):16;case 5:return 2*t.stringValue.length;case 6:return dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Bo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return yr(r.fields,((i,o)=>{s+=i.length+Bo(o)})),s})(t.mapValue);default:throw ae(13486,{value:t})}}function Dd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Al(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function Od(t){return!!t&&"nullValue"in t}function kd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jo(t){return!!t&&"mapValue"in t}function pb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[a_])==null?void 0:r.stringValue)===c_}function wi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=wi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wi(t.arrayValue.values[n]);return e}return{...t}}function gb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===db}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wi(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=wi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());jo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];jo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Rt(wi(this.value))}}function l_(t){const e=[];return yr(t.fields,((n,r)=>{const s=new rt([n]);if(jo(r)){const i=l_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new kt(e)}/**
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
 */class ht{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ht(e,0,ce.min(),ce.min(),ce.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,ce.min(),ce.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ce.min(),ce.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pa{constructor(e,n){this.position=e,this.inclusive=n}}function xd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ld(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ga{constructor(e,n="asc"){this.field=e,this.dir=n}}function mb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class u_{}class Ge extends u_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yb(e,n,r):n==="array-contains"?new vb(e,r):n==="in"?new Ib(e,r):n==="not-in"?new wb(e,r):n==="array-contains-any"?new Ab(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Eb(e,r):new Tb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ns(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends u_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Xt(e,n)}matches(e){return h_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function h_(t){return t.op==="and"}function f_(t){return _b(t)&&h_(t)}function _b(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Rl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(f_(t))return t.filters.map((e=>Rl(e))).join(",");{const e=t.filters.map((n=>Rl(n))).join(",");return`${t.op}(${e})`}}function d_(t,e){return t instanceof Ge?(function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)})(t,e):t instanceof Xt?(function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&d_(o,s.filters[c])),!0):!1})(t,e):void ae(19439)}function p_(t){return t instanceof Ge?(function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`})(t):t instanceof Xt?(function(n){return n.op.toString()+" {"+n.getFilters().map(p_).join(" ,")+"}"})(t):"Filter"}class yb extends Ge{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class Eb extends Ge{constructor(e,n){super(e,"in",n),this.keys=g_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class Tb extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=g_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function g_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>te.fromName(r.referenceValue)))}class vb extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&Bi(n.arrayValue,this.value)}}class Ib extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bi(this.value.arrayValue,n)}}class wb extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bi(this.value.arrayValue,n)}}class Ab extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Bi(this.value.arrayValue,r)))}}/**
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
 */class Rb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Md(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Rb(t,e,n,r,s,i,o)}function Iu(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Rl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Vs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Vs(r))).join(",")),e.Te=n}return e.Te}function wu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!d_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ld(t.startAt,e.startAt)&&Ld(t.endAt,e.endAt)}function Sl(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ro{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Sb(t,e,n,r,s,i,o,c){return new ro(t,e,n,r,s,i,o,c)}function za(t){return new ro(t)}function Fd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bb(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function m_(t){return t.collectionGroup!==null}function Ai(t){const e=he(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Qe(rt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ga(i,r))})),n.has(rt.keyField().canonicalString())||e.Ee.push(new ga(rt.keyField(),r))}return e.Ee}function pn(t){const e=he(t);return e.Ie||(e.Ie=Pb(e,Ai(t))),e.Ie}function Pb(t,e){if(t.limitType==="F")return Md(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ga(s.field,i)}));const n=t.endAt?new pa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pa(t.startAt.position,t.startAt.inclusive):null;return Md(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bl(t,e){const n=t.filters.concat([e]);return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pl(t,e,n){return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qa(t,e){return wu(pn(t),pn(e))&&t.limitType===e.limitType}function __(t){return`${Iu(pn(t))}|lt:${t.limitType}`}function os(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>p_(s))).join(", ")}]`),Wa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Vs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Vs(s))).join(",")),`Target(${r})`})(pn(t))}; limitType=${t.limitType})`}function Ja(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=xd(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Ai(r),s)||r.endAt&&!(function(o,c,l){const u=xd(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Ai(r),s))})(t,e)}function Cb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function y_(t){return(e,n)=>{let r=!1;for(const s of Ai(t)){const i=Nb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Nb(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ns(l,u):ae(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
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
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return t_(this.inner)}size(){return this.innerSize}}/**
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
 */const Vb=new Le(te.comparator);function Fn(){return Vb}const E_=new Le(te.comparator);function ui(...t){let e=E_;for(const n of t)e=e.insert(n.key,n);return e}function T_(t){let e=E_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function xr(){return Ri()}function v_(){return Ri()}function Ri(){return new Qr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Db=new Le(te.comparator),Ob=new Qe(te.comparator);function _e(...t){let e=Ob;for(const n of t)e=e.add(n);return e}const kb=new Qe(me);function xb(){return kb}/**
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
 */function Au(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function I_(t){return{integerValue:""+t}}function Lb(t,e){return ab(e)?I_(e):Au(t,e)}/**
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
 */class Ya{constructor(){this._=void 0}}function Mb(t,e,n){return t instanceof ji?(function(s,i){const o={fields:{[s_]:{stringValue:r_},[o_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tu(i)&&(i=Ka(i)),i&&(o.fields[i_]=i),{mapValue:o}})(n,e):t instanceof $i?A_(t,e):t instanceof qi?R_(t,e):(function(s,i){const o=w_(s,i),c=Ud(o)+Ud(s.Ae);return Al(o)&&Al(s.Ae)?I_(c):Au(s.serializer,c)})(t,e)}function Fb(t,e,n){return t instanceof $i?A_(t,e):t instanceof qi?R_(t,e):n}function w_(t,e){return t instanceof ma?(function(r){return Al(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ji extends Ya{}class $i extends Ya{constructor(e){super(),this.elements=e}}function A_(t,e){const n=S_(e);for(const r of t.elements)n.some((s=>yn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class qi extends Ya{constructor(e){super(),this.elements=e}}function R_(t,e){let n=S_(e);for(const r of t.elements)n=n.filter((s=>!yn(s,r)));return{arrayValue:{values:n}}}class ma extends Ya{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ud(t){return je(t.integerValue||t.doubleValue)}function S_(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Ub{constructor(e,n){this.field=e,this.transform=n}}function Bb(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof $i&&s instanceof $i||r instanceof qi&&s instanceof qi?Cs(r.elements,s.elements,yn):r instanceof ma&&s instanceof ma?yn(r.Ae,s.Ae):r instanceof ji&&s instanceof ji})(t.transform,e.transform)}class jb{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xa{}function b_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ru(t.key,Ut.none()):new so(t.key,t.data,Ut.none());{const n=t.data,r=Rt.empty();let s=new Qe(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Er(t.key,r,new kt(s.toArray()),Ut.none())}}function $b(t,e,n){t instanceof so?(function(s,i,o){const c=s.value.clone(),l=jd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Er?(function(s,i,o){if(!$o(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=jd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(P_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Si(t,e,n,r){return t instanceof so?(function(i,o,c,l){if(!$o(i.precondition,o))return c;const u=i.value.clone(),f=$d(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Er?(function(i,o,c,l){if(!$o(i.precondition,o))return c;const u=$d(i.fieldTransforms,l,o),f=o.data;return f.setAll(P_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return $o(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function qb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=w_(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function Bd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cs(r,s,((i,o)=>Bb(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends Xa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Er extends Xa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function P_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function jd(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Fb(o,c,n[s]))}return r}function $d(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Mb(i,o,e))}return r}class Ru extends Xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hb extends Xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$b(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=v_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=b_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),_e())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,((n,r)=>Bd(n,r)))&&Cs(this.baseMutations,e.baseMutations,((n,r)=>Bd(n,r)))}}class Su{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return Db})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Su(e,n,r,s)}}/**
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
 */class Wb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,Ee;function zb(t){switch(t){case x.OK:return ae(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function C_(t){if(t===void 0)return Mn("GRPC error has no .code"),x.UNKNOWN;switch(t){case He.OK:return x.OK;case He.CANCELLED:return x.CANCELLED;case He.UNKNOWN:return x.UNKNOWN;case He.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case He.INTERNAL:return x.INTERNAL;case He.UNAVAILABLE:return x.UNAVAILABLE;case He.UNAUTHENTICATED:return x.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case He.NOT_FOUND:return x.NOT_FOUND;case He.ALREADY_EXISTS:return x.ALREADY_EXISTS;case He.PERMISSION_DENIED:return x.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case He.ABORTED:return x.ABORTED;case He.OUT_OF_RANGE:return x.OUT_OF_RANGE;case He.UNIMPLEMENTED:return x.UNIMPLEMENTED;case He.DATA_LOSS:return x.DATA_LOSS;default:return ae(39323,{code:t})}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Qb(){return new TextEncoder}/**
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
 */const Jb=new cr([4294967295,4294967295],0);function qd(t){const e=Qb().encode(t),n=new Hm;return n.update(e),new Uint8Array(n.digest())}function Hd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cr([n,r],0),new cr([s,i],0)]}class bu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hi(`Invalid padding: ${n}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=cr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(cr.fromNumber(r)));return s.compare(Jb)===1&&(s=new cr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=qd(e),[r,s]=Hd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=qd(e),[r,s]=Hd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Za{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Za(ce.min(),s,new Le(me),Fn(),_e())}}class io{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new io(r,n,_e(),_e(),_e())}}/**
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
 */class qo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class N_{constructor(e,n){this.targetId=e,this.Ce=n}}class V_{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gd{constructor(){this.ve=0,this.Fe=Wd(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}})),new io(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Wd()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Yb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Fn(),this.Je=bo(),this.He=bo(),this.Ze=new Le(me)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ae(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Sl(i))if(r===0){const o=new te(i.path);this.et(n,o,ht.newNoDocument(o,ce.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=dr(r).toUint8Array()}catch(l){if(l instanceof n_)return Gr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new bu(o,s,i)}catch(l){return Gr(l instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Sl(c.target)){const l=new te(c.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,ht.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=_e();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Za(e,n,this.Ze,this.je,r);return this.je=Fn(),this.Je=bo(),this.He=bo(),this.Ze=new Le(me),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Gd,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Qe(me),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Qe(me),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function bo(){return new Le(te.comparator)}function Wd(){return new Le(te.comparator)}const Xb={asc:"ASCENDING",desc:"DESCENDING"},Zb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eP={and:"AND",or:"OR"};class tP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cl(t,e){return t.useProto3Json||Wa(e)?e:{value:e}}function _a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function D_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nP(t,e){return _a(t,e.toTimestamp())}function gn(t){return Se(!!t,49232),ce.fromTimestamp((function(n){const r=fr(n);return new ke(r.seconds,r.nanos)})(t))}function Pu(t,e){return Nl(t,e).canonicalString()}function Nl(t,e){const n=(function(s){return new De(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function O_(t){const e=De.fromString(t);return Se(F_(e),10190,{key:e.toString()}),e}function Vl(t,e){return Pu(t.databaseId,e.path)}function Kc(t,e){const n=O_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(x_(n))}function k_(t,e){return Pu(t.databaseId,e)}function rP(t){const e=O_(t);return e.length===4?De.emptyPath():x_(e)}function Dl(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function x_(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Kd(t,e,n){return{name:Vl(t,e),fields:n.value.mapValue.fields}}function sP(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Se(f===void 0||typeof f=="string",58123),st.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),st.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?x.UNKNOWN:C_(u.code);return new J(f,u.message||"")})(o);n=new V_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Kc(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):ce.min(),c=new Rt({mapValue:{fields:r.document.fields}}),l=ht.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new qo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Kc(t,r.document),i=r.readTime?gn(r.readTime):ce.min(),o=ht.newNoDocument(s,i),c=r.removedTargetIds||[];n=new qo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Kc(t,r.document),i=r.removedTargetIds||[];n=new qo([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Kb(s,i),c=r.targetId;n=new N_(c,o)}}return n}function iP(t,e){let n;if(e instanceof so)n={update:Kd(t,e.key,e.value)};else if(e instanceof Ru)n={delete:Vl(t,e.key)};else if(e instanceof Er)n={update:Kd(t,e.key,e.data),updateMask:pP(e.fieldMask)};else{if(!(e instanceof Hb))return ae(16599,{dt:e.type});n={verify:Vl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof ji)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof $i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ma)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ae(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:nP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)})(t,e.precondition)),n}function oP(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(ce.min())&&(o=gn(i)),new jb(o,s.transformResults||[])})(n,e)))):[]}function aP(t,e){return{documents:[k_(t,e.path)]}}function cP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k_(t,s);const i=(function(u){if(u.length!==0)return M_(Xt.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(g){return{field:as(g.field),direction:hP(g.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Cl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function lP(t){let e=rP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const g=L_(p);return g instanceof Xt&&f_(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(C){return new ga(cs(C.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,Wa(g)?null:g})(n.limit));let l=null;n.startAt&&(l=(function(p){const g=!!p.before,y=p.values||[];return new pa(y,g)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const g=!p.before,y=p.values||[];return new pa(y,g)})(n.endAt)),Sb(e,s,o,i,c,"F",l,u)}function uP(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function L_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cs(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cs(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cs(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ge.create(cs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Xt.create(n.compositeFilter.filters.map((r=>L_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}})(n.compositeFilter.op))})(t):ae(30097,{filter:t})}function hP(t){return Xb[t]}function fP(t){return Zb[t]}function dP(t){return eP[t]}function as(t){return{fieldPath:t.canonicalString()}}function cs(t){return rt.fromServerFormat(t.fieldPath)}function M_(t){return t instanceof Ge?(function(n){if(n.op==="=="){if(kd(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(Od(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kd(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(Od(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:fP(n.op),value:n.value}}})(t):t instanceof Xt?(function(n){const r=n.getFilters().map((s=>M_(s)));return r.length===1?r[0]:{compositeFilter:{op:dP(n.op),filters:r}}})(t):ae(54877,{filter:t})}function pP(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function F_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function U_(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class sr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gP{constructor(e){this.yt=e}}function mP(t){const e=lP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pl(e,e.limit,"L"):e}/**
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
 */class _P{constructor(){this.bn=new yP}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(hr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class yP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(De.comparator)).toArray()}}/**
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
 */const zd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},B_=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(B_,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class Ds{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ds(0)}static ar(){return new Ds(-1)}}/**
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
 */const Qd="LruGarbageCollector",EP=1048576;function Jd([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class TP{constructor(e){this.Pr=e,this.buffer=new Qe(Jd),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Jd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){X(Qd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fs(n)?X(Qd,"Ignoring IndexedDB error during garbage collection: ",n):await Ms(n)}await this.Ar(3e5)}))}}class IP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ga.ce);const r=new TP(n);return this.Vr.forEachTarget(e,(s=>r.Ir(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Ir(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(zd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zd):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),is()<=ge.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function wP(t,e){return new IP(t,e)}/**
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
 */class AP{constructor(){this.changes=new Qr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class RP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class SP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Si(r.mutation,s,kt.empty(),ke.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=_e()){const s=xr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ui();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,_e())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Fn();const o=Ri(),c=(function(){return Ri()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Er)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Si(f.mutation,u,f.mutation.getFieldMask(),ke.now())):o.set(u.key,kt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new RP(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Ri();let s=new Le(((o,c)=>o-c)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||kt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=v_();f.forEach((g=>{if(!i.has(g)){const y=b_(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return bb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):m_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(xr());let c=Mi,l=i;return o.next((u=>M.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{l=l.insert(f,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,_e()))).next((f=>({batchId:c,changes:T_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next((r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next((c=>M.forEach(c,(l=>{const u=(function(p,g){return new ro(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ht.newInvalidDocument(f)))}));let c=ui();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Si(f.mutation,u,kt.empty(),ke.now()),Ja(n,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class bP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}})(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:mP(s.bundledQuery),readTime:gn(s.readTime)}})(n)),M.resolve()}}/**
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
 */class PP{constructor(){this.overlays=new Le(te.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return M.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=xr(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=xr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=xr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Wb(n,r));let i=this.Lr.get(n);i===void 0&&(i=_e(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class CP{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Cu{constructor(){this.kr=new Qe(Ze.qr),this.Kr=new Qe(Ze.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Ze(e,n))}Qr(e,n){e.forEach((r=>this.removeReference(r,n)))}Gr(e){const n=new te(new De([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Kr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new te(new De([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=_e();return this.Kr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Ze(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return te.comparator(e.key,n.key)||me(e.Jr,n.Jr)}static Ur(e,n){return me(e.Jr,n.Jr)||te.comparator(e.key,n.key)}}/**
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
 */class NP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Qe(Ze.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Eu:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Jr);i.push(c)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(me);return n.forEach((s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],(c=>{r=r.add(c.Jr)}))})),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new te(i),0);let c=new Qe(me);return this.Hr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Jr)),!0)}),o),M.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Se(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,(s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class VP{constructor(e){this.ti=e,this.docs=(function(){return new Le(te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,c=new te(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||rb(nb(f),r)<=0||(s.has(f.key)||Ja(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}ni(e,n){return M.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new DP(this)}getSize(e){return M.resolve(this.size)}}class DP extends AP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class OP{constructor(e){this.persistence=e,this.ri=new Qr((n=>Iu(n)),wu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.ii=0,this.si=new Cu,this.targetCount=0,this.oi=Ds._r()}forEachTarget(e,n){return this.ri.forEach(((r,s)=>n(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class j_{constructor(e,n){this._i={},this.overlays={},this.ai=new Ga(0),this.ui=!1,this.ui=!0,this.ci=new CP,this.referenceDelegate=e(this),this.li=new OP(this),this.indexManager=new _P,this.remoteDocumentCache=(function(s){return new VP(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new gP(n),this.Pi=new bP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new NP(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new kP(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ei(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(e,n){return M.or(Object.values(this._i).map((r=>()=>r.containsKey(e,n))))}}class kP extends ib{constructor(e){super(),this.currentSequenceNumber=e}}class Nu{constructor(e){this.persistence=e,this.Ri=new Cu,this.Ai=null}static Vi(e){return new Nu(e)}get di(){if(this.Ai)return this.Ai;throw ae(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,(r=>{const s=te.fromPath(r);return this.mi(e,s).next((i=>{i||n.removeEntry(s,ce.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class ya{constructor(e,n){this.persistence=e,this.fi=new Qr((r=>cb(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=wP(this,n)}static Vi(e,n){return new ya(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}pr(e){let n=0;return this.mr(e,(r=>{n++})).next((()=>n))}mr(e,n){return M.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?M.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ce.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Bo(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Vu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vu(e,n.fromCache,r,s)}}/**
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
 */class xP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class LP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return nw()?8:ob(pt())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new xP;return this.ys(e,n,o).next((c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)}))})).next((()=>i.result))}ws(e,n,r,s){return r.documentReadCount<this.Vs?(is()<=ge.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(is()<=ge.DEBUG&&X("QueryEngine","Query:",os(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(is()<=ge.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):M.resolve())}gs(e,n){if(Fd(n))return M.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Pl(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=_e(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ss(n,c);return this.bs(n,u,o,l.readTime)?this.gs(e,Pl(n,null,"F")):this.Ds(e,u,n,l)}))))})))))}ps(e,n,r,s){return Fd(n)||s.isEqual(ce.min())?M.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?M.resolve(null):(is()<=ge.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),os(n)),this.Ds(e,o,n,tb(s,Mi)).next((c=>c)))}))}Ss(e,n){let r=new Qe(y_(e));return n.forEach(((s,i)=>{Ja(e,i)&&(r=r.add(i))})),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return is()<=ge.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",os(n)),this.fs.getDocumentsMatchingQuery(e,n,hr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Du="LocalStore",MP=3e8;class FP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Le(me),this.Fs=new Qr((i=>Iu(i)),wu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function UP(t,e,n,r){return new FP(t,e,n,r)}async function $_(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function BP(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,g=p.keys();let y=M.resolve();return g.forEach((C=>{y=y.next((()=>f.getEntry(l,C))).next((V=>{const L=u.docVersions.get(C);Se(L!==null,48541),V.version.compareTo(L)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function q_(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function jP(t,e){const n=he(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.li.addMatchingKeys(i,f.addedDocuments,p))));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(st.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(V,L,q){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=MP?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(g,y,f)&&c.push(n.li.updateTargetData(i,y))}));let l=Fn(),u=_e();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push($P(i,o,e.documentUpdates).next((f=>{l=f.Bs,u=f.Ls}))),!r.isEqual(ce.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next((p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return M.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.vs=s,i)))}function $P(t,e,n){let r=_e(),s=_e();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Fn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Du,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function qP(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Eu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function HP(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.li.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next((o=>(s=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r}))}async function Ol(t,e,n){const r=he(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Fs(o))throw o;X(Du,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Yd(t,e,n){const r=he(t);let s=ce.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=he(l),g=p.Fs.get(f);return g!==void 0?M.resolve(p.vs.get(g)):p.li.getTargetData(u,f)})(r,o,pn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:_e()))).next((c=>(GP(r,Cb(e),c),{documents:c,ks:i})))))}function GP(t,e,n){let r=t.Ms.get(e)||ce.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Ms.set(e,r)}class Xd{constructor(){this.activeTargetIds=xb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WP{constructor(){this.vo=new Xd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KP{Mo(e){}shutdown(){}}/**
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
 */const Zd="ConnectivityMonitor";class ep{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){X(Zd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){X(Zd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Po=null;function kl(){return Po===null?Po=(function(){return 268435456+Math.round(2147483648*Math.random())})():Po++,"0x"+Po.toString(16)}/**
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
 */const zc="RestConnection",zP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class QP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===fa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=kl(),c=this.Qo(e,n.toUriEncodedString());X(zc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(c),f=Yi(u);return this.zo(e,c,l,r,f).then((p=>(X(zc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Gr(zc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ls})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,n){const r=zP[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class JP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const ct="WebChannelConnection",ii=(t,e,n)=>{t.listen(e,(r=>{try{n(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class vs extends QP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!vs.c_){const e=zm();ii(e,Km.STAT_EVENT,(n=>{n.stat===vl.PROXY?X(ct,"STAT_EVENT: detected buffering proxy"):n.stat===vl.NOPROXY&&X(ct,"STAT_EVENT: detected no buffering proxy")})),vs.c_=!0}}zo(e,n,r,s,i){const o=kl();return new Promise(((c,l)=>{const u=new Gm;u.setWithCredentials(!0),u.listenOnce(Wm.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Uo.NO_ERROR:const p=u.getResponseJson();X(ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Uo.TIMEOUT:X(ct,`RPC '${e}' ${o} timed out`),l(new J(x.DEADLINE_EXCEEDED,"Request time out"));break;case Uo.HTTP_ERROR:const g=u.getStatus();if(X(ct,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const C=y==null?void 0:y.error;if(C&&C.status&&C.message){const V=(function(q){const B=q.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(B)>=0?B:x.UNKNOWN})(C.status);l(new J(V,C.message))}else l(new J(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new J(x.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(ct,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(ct,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=kl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");X(ct,`Creating RPC '${e}' stream ${s}: ${u}`,c);const f=o.createWebChannel(u,c);this.E_(f);let p=!1,g=!1;const y=new JP({Jo:C=>{g?X(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(p||(X(ct,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),X(ct,`RPC '${e}' stream ${s} sending:`,C),f.send(C))},Ho:()=>f.close()});return ii(f,li.EventType.OPEN,(()=>{g||(X(ct,`RPC '${e}' stream ${s} transport opened.`),y.i_())})),ii(f,li.EventType.CLOSE,(()=>{g||(g=!0,X(ct,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.I_(f))})),ii(f,li.EventType.ERROR,(C=>{g||(g=!0,Gr(ct,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),y.o_(new J(x.UNAVAILABLE,"The operation could not be completed")))})),ii(f,li.EventType.MESSAGE,(C=>{var V;if(!g){const L=C.data[0];Se(!!L,16349);const q=L,B=(q==null?void 0:q.error)||((V=q[0])==null?void 0:V.error);if(B){X(ct,`RPC '${e}' stream ${s} received error:`,B);const H=B.status;let W=(function(R){const v=He[R];if(v!==void 0)return C_(v)})(H),ne=B.message;H==="NOT_FOUND"&&ne.includes("database")&&ne.includes("does not exist")&&ne.includes(this.databaseId.database)&&Gr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),W===void 0&&(W=x.INTERNAL,ne="Unknown error status: "+H+" with message "+B.message),g=!0,y.o_(new J(W,ne)),f.close()}else X(ct,`RPC '${e}' stream ${s} received:`,L),y.__(L)}})),vs.u_(),setTimeout((()=>{y.s_()}),0),y}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Qm()}}/**
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
 */function YP(t){return new vs(t)}function Qc(){return typeof document<"u"?document:null}/**
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
 */function ec(t){return new tP(t,!0)}/**
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
 */vs.c_=!1;class H_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const tp="PersistentStream";class G_{constructor(e,n,r,s,i,o,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new H_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new J(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(tp,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(X(tp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XP extends G_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=sP(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?gn(o.readTime):ce.min()})(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Dl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Sl(l)?{documents:aP(i,l)}:{query:cP(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=D_(i,o.resumeToken);const u=Cl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=_a(i,o.snapshotVersion.toTimestamp());const u=Cl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=uP(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Dl(this.serializer),n.removeTarget=e,this.q_(n)}}class ZP extends G_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=oP(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Dl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>iP(this.serializer,r)))};this.q_(n)}}/**
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
 */class eC{}class tC extends eC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Nl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(x.UNKNOWN,i.toString())}))}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Nl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(x.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function nC(t,e,n,r){return new tC(t,e,n,r)}class rC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Wr="RemoteStore";class sC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{Jr(this)&&(X(Wr,"Restarting streams for network reachability change."),await(async function(l){const u=he(l);u.Ia.add(4),await oo(u),u.Va.set("Unknown"),u.Ia.delete(4),await tc(u)})(this))}))})),this.Va=new rC(r,s)}}async function tc(t){if(Jr(t))for(const e of t.Ra)await e(!0)}async function oo(t){for(const e of t.Ra)await e(!1)}function W_(t,e){const n=he(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Lu(n)?xu(n):Us(n).O_()&&ku(n,e))}function Ou(t,e){const n=he(t),r=Us(n);n.Ea.delete(e),r.O_()&&K_(n,e),n.Ea.size===0&&(r.O_()?r.L_():Jr(n)&&n.Va.set("Unknown"))}function ku(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).Z_(e)}function K_(t,e){t.da.$e(e),Us(t).X_(e)}function xu(t){t.da=new Yb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.Va.ua()}function Lu(t){return Jr(t)&&!Us(t).x_()&&t.Ea.size>0}function Jr(t){return he(t).Ia.size===0}function z_(t){t.da=void 0}async function iC(t){t.Va.set("Online")}async function oC(t){t.Ea.forEach(((e,n)=>{ku(t,e)}))}async function aC(t,e){z_(t),Lu(t)?(t.Va.ha(e),xu(t)):t.Va.set("Unknown")}async function cC(t,e,n){if(t.Va.set("Online"),e instanceof V_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))})(t,e)}catch(r){X(Wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ea(t,r)}else if(e instanceof qo?t.da.Xe(e):e instanceof N_?t.da.st(e):t.da.tt(e),!n.isEqual(ce.min()))try{const r=await q_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ea.get(u);f&&i.Ea.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ea.get(l);if(!f)return;i.Ea.set(l,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),K_(i,l);const p=new sr(f.target,l,u,f.sequenceNumber);ku(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(Wr,"Failed to raise snapshot:",r),await Ea(t,r)}}async function Ea(t,e,n){if(!Fs(e))throw e;t.Ia.add(1),await oo(t),t.Va.set("Offline"),n||(n=()=>q_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(Wr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await tc(t)}))}function Q_(t,e){return e().catch((n=>Ea(t,n,e)))}async function nc(t){const e=he(t),n=gr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Eu;for(;lC(e);)try{const s=await qP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,uC(e,s)}catch(s){await Ea(e,s)}J_(e)&&Y_(e)}function lC(t){return Jr(t)&&t.Ta.length<10}function uC(t,e){t.Ta.push(e);const n=gr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function J_(t){return Jr(t)&&!gr(t).x_()&&t.Ta.length>0}function Y_(t){gr(t).start()}async function hC(t){gr(t).ra()}async function fC(t){const e=gr(t);for(const n of t.Ta)e.ea(n.mutations)}async function dC(t,e,n){const r=t.Ta.shift(),s=Su.from(r,e,n);await Q_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await nc(t)}async function pC(t,e){e&&gr(t).Y_&&await(async function(r,s){if((function(o){return zb(o)&&o!==x.ABORTED})(s.code)){const i=r.Ta.shift();gr(r).B_(),await Q_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await nc(r)}})(t,e),J_(t)&&Y_(t)}async function np(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),X(Wr,"RemoteStore received new credentials");const r=Jr(n);n.Ia.add(3),await oo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await tc(n)}async function gC(t,e){const n=he(t);e?(n.Ia.delete(2),await tc(n)):e||(n.Ia.add(2),await oo(n),n.Va.set("Unknown"))}function Us(t){return t.ma||(t.ma=(function(n,r,s){const i=he(n);return i.sa(),new XP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:iC.bind(null,t),Yo:oC.bind(null,t),t_:aC.bind(null,t),H_:cC.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),Lu(t)?xu(t):t.Va.set("Unknown")):(await t.ma.stop(),z_(t))}))),t.ma}function gr(t){return t.fa||(t.fa=(function(n,r,s){const i=he(n);return i.sa(),new ZP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:hC.bind(null,t),t_:pC.bind(null,t),ta:fC.bind(null,t),na:dC.bind(null,t)}),t.Ra.push((async e=>{e?(t.fa.B_(),await nc(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Wr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Mu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Mu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fu(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Fs(t))return new J(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Is{static emptySet(e){return new Is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=ui(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class rp{constructor(){this.ga=new Le(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ae(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Os{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Os(e,n,Is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class _C{constructor(){this.queries=sp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=sp(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new J(x.ABORTED,"Firestore shutting down"))}}function sp(){return new Qr((t=>__(t)),Qa)}async function Uu(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new mC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Fu(o,`Initialization of query '${os(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ju(n)}async function Bu(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function yC(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&ju(n)}function EC(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ju(t){t.Ca.forEach((e=>{e.next()}))}var xl,ip;(ip=xl||(xl={})).Ma="default",ip.Cache="cache";class $u{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xl.Cache}}/**
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
 */class X_{constructor(e){this.key=e}}class Z_{constructor(e){this.key=e}}class TC{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=_e(),this.mutatedKeys=_e(),this.eu=y_(e),this.tu=new Is(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new rp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const g=s.get(f),y=Ja(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),V=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let L=!1;g&&y?g.data.isEqual(y.data)?C!==V&&(r.track({type:3,doc:y}),L=!0):this.su(g,y)||(r.track({type:2,doc:y}),L=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),L=!0):g&&!y&&(r.track({type:1,doc:g}),L=!0,(l||u)&&(c=!0)),L&&(y?(o=o.add(y),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,C){const V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Vt:L})}};return V(y)-V(C)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new Os(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new rp,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=_e(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const n=[];return e.forEach((r=>{this.Ya.has(r)||n.push(new Z_(r))})),this.Ya.forEach((r=>{e.has(r)||n.push(new X_(r))})),n}cu(e){this.Za=e.ks,this.Ya=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Os.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const qu="SyncEngine";class vC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class IC{constructor(e){this.key=e,this.hu=!1}}class wC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Qr((c=>__(c)),Qa),this.Eu=new Map,this.Iu=new Set,this.Ru=new Le(te.comparator),this.Au=new Map,this.Vu=new Cu,this.du={},this.mu=new Map,this.fu=Ds.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function AC(t,e,n=!0){const r=iy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ey(r,e,n,!0),s}async function RC(t,e){const n=iy(t);await ey(n,e,!0,!1)}async function ey(t,e,n,r){const s=await HP(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await SC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&W_(t.remoteStore,s),c}async function SC(t,e,n,r,s){t.pu=(p,g,y)=>(async function(V,L,q,B){let H=L.view.ru(q);H.bs&&(H=await Yd(V.localStore,L.query,!1).then((({documents:R})=>L.view.ru(R,H))));const W=B&&B.targetChanges.get(L.targetId),ne=B&&B.targetMismatches.get(L.targetId)!=null,le=L.view.applyChanges(H,V.isPrimaryClient,W,ne);return ap(V,L.targetId,le.au),le.snapshot})(t,p,g,y);const i=await Yd(t.localStore,e,!0),o=new TC(e,i.ks),c=o.ru(i.documents),l=io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);ap(t,n,u.au);const f=new vC(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function bC(t,e,n){const r=he(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter((o=>!Qa(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ol(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ou(r.remoteStore,s.targetId),Ll(r,s.targetId)})).catch(Ms)):(Ll(r,s.targetId),await Ol(r.localStore,s.targetId,!0))}async function PC(t,e){const n=he(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ou(n.remoteStore,r.targetId))}async function CC(t,e,n){const r=LC(t);try{const s=await(function(o,c){const l=he(o),u=ke.now(),f=c.reduce(((y,C)=>y.add(C.key)),_e());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let C=Fn(),V=_e();return l.xs.getEntries(y,f).next((L=>{C=L,C.forEach(((q,B)=>{B.isValidDocument()||(V=V.add(q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,C))).next((L=>{p=L;const q=[];for(const B of c){const H=qb(B,p.get(B.key).overlayedDocument);H!=null&&q.push(new Er(B.key,H,l_(H.value.mapValue),Ut.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,q,c)})).next((L=>{g=L;const q=L.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(y,L.batchId,q)}))})).then((()=>({batchId:g.batchId,changes:T_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.du[o.currentUser.toKey()];u||(u=new Le(me)),u=u.insert(c,l),o.du[o.currentUser.toKey()]=u})(r,s.batchId,n),await ao(r,s.changes),await nc(r.remoteStore)}catch(s){const i=Fu(s,"Failed to persist write");n.reject(i)}}async function ty(t,e){const n=he(t);try{const r=await jP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Se(o.hu,14607):s.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))})),await ao(n,r,e)}catch(r){await Ms(r)}}function op(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const g of p.Sa)g.va(c)&&(u=!0)})),u&&ju(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NC(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Le(te.comparator);o=o.insert(i,ht.newNoDocument(i,ce.min()));const c=_e().add(i),l=new Za(ce.min(),new Map,new Le(me),o,c);await ty(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),Hu(r)}else await Ol(r.localStore,e,!1).then((()=>Ll(r,e,n))).catch(Ms)}async function VC(t,e){const n=he(t),r=e.batch.batchId;try{const s=await BP(n.localStore,e);ry(n,r,null),ny(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ao(n,s)}catch(s){await Ms(s)}}async function DC(t,e,n){const r=he(t);try{const s=await(function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Se(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);ry(r,e,n),ny(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ao(r,s)}catch(s){await Ms(s)}}function ny(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function ry(t,e,n){const r=he(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Ll(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((r=>{t.Vu.containsKey(r)||sy(t,r)}))}function sy(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Ou(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Hu(t))}function ap(t,e,n){for(const r of n)r instanceof X_?(t.Vu.addReference(r.key,e),OC(t,r)):r instanceof Z_?(X(qu,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||sy(t,r.key)):ae(19791,{wu:r})}function OC(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(X(qu,"New document in limbo: "+n),t.Iu.add(r),Hu(t))}function Hu(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new te(De.fromString(e)),r=t.fu.next();t.Au.set(r,new IC(n)),t.Ru=t.Ru.insert(n,r),W_(t.remoteStore,new sr(pn(za(n.path)),r,"TargetPurposeLimboResolution",Ga.ce))}}async function ao(t,e,n){const r=he(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Vu.Is(l.targetId,u);i.push(p)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(u,(g=>M.forEach(g.Ts,(y=>f.persistence.referenceDelegate.addReference(p,g.targetId,y))).next((()=>M.forEach(g.Es,(y=>f.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))))))}catch(p){if(!Fs(p))throw p;X(Du,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const y=f.vs.get(g),C=y.snapshotVersion,V=y.withLastLimboFreeSnapshotVersion(C);f.vs=f.vs.insert(g,V)}}})(r.localStore,i))}async function kC(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){X(qu,"User change. New user:",e.toKey());const r=await $_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new J(x.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ao(n,r.Ns)}}function xC(t,e){const n=he(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function iy(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ty.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NC.bind(null,e),e.Pu.H_=yC.bind(null,e.eventManager),e.Pu.yu=EC.bind(null,e.eventManager),e}function LC(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DC.bind(null,e),e}class Ta{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return UP(this.persistence,new LP,e.initialUser,this.serializer)}Cu(e){return new j_(Nu.Vi,this.serializer)}Du(e){return new WP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ta.provider={build:()=>new Ta};class MC extends Ta{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof ya,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new vP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new j_((r=>ya.Vi(r,n)),this.serializer)}}class Ml{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>op(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kC.bind(null,this.syncEngine),await gC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new _C})()}createDatastore(e){const n=ec(e.databaseInfo.databaseId),r=YP(e.databaseInfo);return nC(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new sC(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>op(this.syncEngine,n,0)),(function(){return ep.v()?new ep:new KP})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new wC(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=he(s);X(Wr,"RemoteStore shutting down."),i.Ia.add(5),await oo(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ml.provider={build:()=>new Ml};/**
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
 */class Gu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const mr="FirestoreClient";class FC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=yu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Jc(t,e){t.asyncQueue.verifyOperationInProgress(),X(mr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await $_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function cp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UC(t);X(mr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>np(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>np(e.remoteStore,s))),t._onlineComponents=e}async function UC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(mr,"Using user provided OfflineComponentProvider");try{await Jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Gr("Error using user provided cache. Falling back to memory cache: "+n),await Jc(t,new Ta)}}else X(mr,"Using default OfflineComponentProvider"),await Jc(t,new MC(void 0));return t._offlineComponents}async function oy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(mr,"Using user provided OnlineComponentProvider"),await cp(t,t._uninitializedComponentsProvider._online)):(X(mr,"Using default OnlineComponentProvider"),await cp(t,new Ml))),t._onlineComponents}function BC(t){return oy(t).then((e=>e.syncEngine))}async function va(t){const e=await oy(t),n=e.eventManager;return n.onListen=AC.bind(null,e.syncEngine),n.onUnlisten=bC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=PC.bind(null,e.syncEngine),n}function jC(t,e,n,r){const s=new Gu(r),i=new $u(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Uu(await va(t),i))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>Bu(await va(t),i)))}}function $C(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new Gu({next:g=>{f.Nu(),o.enqueueAndForget((()=>Bu(i,p)));const y=g.docs.has(c);!y&&g.fromCache?u.reject(new J(x.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?u.reject(new J(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new $u(za(c.path),f,{includeMetadataChanges:!0,qa:!0});return Uu(i,p)})(await va(t),t.asyncQueue,e,n,r))),r.promise}function qC(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new Gu({next:g=>{f.Nu(),o.enqueueAndForget((()=>Bu(i,p))),g.fromCache&&l.source==="server"?u.reject(new J(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new $u(c,f,{includeMetadataChanges:!0,qa:!0});return Uu(i,p)})(await va(t),t.asyncQueue,e,n,r))),r.promise}function HC(t,e){const n=new Vn;return t.asyncQueue.enqueueAndForget((async()=>CC(await BC(t),e,n))),n.promise}/**
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
 */function ay(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const GC="ComponentProvider",lp=new Map;function WC(t,e,n,r,s){return new hb(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ay(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const cy="firestore.googleapis.com",up=!0;class hp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cy,this.ssl=up}else this.host=e.host,this.ssl=e.ssl??up;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=B_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EP)throw new J(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ay(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new HS;switch(r.type){case"firstParty":return new zS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=lp.get(n);r&&(X(GC,"Removing Datastore"),lp.delete(n),r.terminate())})(this),Promise.resolve()}}function KC(t,e,n,r={}){var u;t=bt(t,rc);const s=Yi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&nm(`https://${c}`),i.host!==cy&&i.host!==c&&Gr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Br(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=lt.MOCK_USER;else{f=QI(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new J(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new lt(g)}t._authCredentials=new GS(new Ym(f,p))}}/**
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
 */class Yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class Ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(no(n,Ue._jsonSchema))return new Ue(e,r||null,new te(De.fromString(n.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:We("string",Ue._jsonSchemaVersion),referencePath:We("string")};class lr extends Yr{constructor(e,n,r){super(e,n,za(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new te(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function zC(t,e,...n){if(t=qe(t),Xm("collection","path",e),t instanceof rc){const r=De.fromString(e,...n);return Ad(r),new lr(t,null,r)}{if(!(t instanceof Ue||t instanceof lr))throw new J(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Ad(r),new lr(t.firestore,null,r)}}function Ia(t,e,...n){if(t=qe(t),arguments.length===1&&(e=yu.newId()),Xm("doc","path",e),t instanceof rc){const r=De.fromString(e,...n);return wd(r),new Ue(t,null,new te(r))}{if(!(t instanceof Ue||t instanceof lr))throw new J(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return wd(r),new Ue(t.firestore,t instanceof lr?t.converter:null,new te(r))}}/**
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
 */const fp="AsyncQueue";class dp{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new H_(this,"async_queue_retry"),this._c=()=>{const r=Qc();r&&X(fp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Vn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Fs(e))throw e;X(fp,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Mn("INTERNAL UNHANDLED ERROR: ",pp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Mu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ae(47125,{Pc:pp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function pp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Un extends rc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new dp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dp(e),this._firestoreClient=void 0,await e}}}function QC(t,e){const n=typeof t=="object"?t:om(),r=typeof t=="string"?t:fa,s=cu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=KI("firestore");i&&KC(s,...i)}return s}function sc(t){if(t._terminated)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JC(t),t._firestoreClient}function JC(t){var r,s,i,o;const e=t._freezeSettings(),n=WC(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new FC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(t._componentsProvider))}/**
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
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(st.fromBase64String(e))}catch(n){throw new J(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mt(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(no(e,Mt._jsonSchema))return Mt.fromBase64String(e.bytes)}}Mt._jsonSchemaVersion="firestore/bytes/1.0",Mt._jsonSchema={type:We("string",Mt._jsonSchemaVersion),bytes:We("string")};/**
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
 */class Wu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ic{constructor(e){this._methodName=e}}/**
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
 */class mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mn._jsonSchemaVersion}}static fromJSON(e){if(no(e,mn._jsonSchema))return new mn(e.latitude,e.longitude)}}mn._jsonSchemaVersion="firestore/geoPoint/1.0",mn._jsonSchema={type:We("string",mn._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
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
 */class Kt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(no(e,Kt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Kt(e.vectorValues);throw new J(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kt._jsonSchemaVersion="firestore/vectorValue/1.0",Kt._jsonSchema={type:We("string",Kt._jsonSchemaVersion),vectorValues:We("object")};/**
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
 */const YC=/^__.*__$/;class XC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}class ly{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{dataSource:t})}}class Ku{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ku({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return wa(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(uy(this.dataSource)&&YC.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class ZC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ec(e)}A(e,n,r,s=!1){return new Ku({dataSource:e,methodName:n,targetDoc:r,path:rt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oc(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new ZC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hy(t,e,n,r,s,i={}){const o=t.A(i.merge||i.mergeFields?2:0,e,n,s);Qu("Data must be an object, but it was:",o,r);const c=fy(r,o);let l,u;if(i.merge)l=new kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=ks(e,p,n);if(!o.contains(g))throw new J(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);gy(f,g)||f.push(g)}l=new kt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new XC(new Rt(c),l,u)}class ac extends ic{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ac}}class zu extends ic{_toFieldTransform(e){return new Ub(e.path,new ji)}isEqual(e){return e instanceof zu}}function e0(t,e,n,r){const s=t.A(1,e,n);Qu("Data must be an object, but it was:",s,r);const i=[],o=Rt.empty();yr(r,((l,u)=>{const f=py(e,l,n);u=qe(u);const p=s.fc(f);if(u instanceof ac)i.push(f);else{const g=co(u,p);g!=null&&(i.push(f),o.set(f,g))}}));const c=new kt(i);return new ly(o,c,s.fieldTransforms)}function t0(t,e,n,r,s,i){const o=t.A(1,e,n),c=[ks(e,r,n)],l=[s];if(i.length%2!=0)throw new J(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(ks(e,i[g])),l.push(i[g+1]);const u=[],f=Rt.empty();for(let g=c.length-1;g>=0;--g)if(!gy(u,c[g])){const y=c[g];let C=l[g];C=qe(C);const V=o.fc(y);if(C instanceof ac)u.push(y);else{const L=co(C,V);L!=null&&(u.push(y),f.set(y,L))}}const p=new kt(u);return new ly(f,p,o.fieldTransforms)}function n0(t,e,n,r=!1){return co(n,t.A(r?4:3,e))}function co(t,e){if(dy(t=qe(t)))return Qu("Unsupported field value:",e,t),fy(t,e);if(t instanceof ic)return(function(r,s){if(!uy(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=co(c,s.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:_a(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_a(s.serializer,i)}}if(r instanceof mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mt)return{bytesValue:D_(s.serializer,r._byteString)};if(r instanceof Ue){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Kt)return(function(o,c){const l=o instanceof Kt?o.toArray():o;return{mapValue:{fields:{[a_]:{stringValue:c_},[da]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return Au(c.serializer,f)}))}}}}}})(r,s);if(U_(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Ha(r)}`)})(t,e)}function fy(t,e){const n={};return t_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,((r,s)=>{const i=co(s,e.dc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function dy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof mn||t instanceof Mt||t instanceof Ue||t instanceof ic||t instanceof Kt||U_(t))}function Qu(t,e,n){if(!dy(n)||!Zm(n)){const r=Ha(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function ks(t,e,n){if((e=qe(e))instanceof Wu)return e._internalPath;if(typeof e=="string")return py(t,e);throw wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const r0=new RegExp("[~\\*/\\[\\]]");function py(t,e,n){if(e.search(r0)>=0)throw wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wu(...e.split("."))._internalPath}catch{throw wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(x.INVALID_ARGUMENT,c+t+l)}function gy(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class s0{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[da].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>je(o.doubleValue)));return new Kt(n)}convertGeoPoint(e){return new mn(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ka(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fi(e));default:return null}}convertTimestamp(e){const n=fr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Se(F_(r),9688,{name:e});const s=new Ui(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||Mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Ju extends s0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function S0(){return new zu("serverTimestamp")}const gp="@firebase/firestore",mp="4.13.0";/**
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
 */function _p(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}/**
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
 */class my{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new i0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ks("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class i0 extends my{data(){return super.data()}}/**
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
 */function _y(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yu{}class o0 extends Yu{}function a0(t,e,...n){let r=[];e instanceof Yu&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Xu)).length,c=i.filter((l=>l instanceof cc)).length;if(o>1||o>0&&c>0)throw new J(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class cc extends o0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cc(e,n,r)}_apply(e){const n=this._parse(e);return yy(e._query,n),new Yr(e.firestore,e.converter,bl(e._query,n))}_parse(e){const n=oc(e.firestore);return(function(i,o,c,l,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Tp(p,f);const C=[];for(const V of p)C.push(Ep(l,i,V));g={arrayValue:{values:C}}}else g=Ep(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Tp(p,f),g=n0(c,o,p,f==="in"||f==="not-in");return Ge.create(u,f,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yp(t,e,n){const r=e,s=ks("where",t);return cc._create(s,r,n)}class Xu extends Yu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Xu(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)yy(o,l),o=bl(o,l)})(e._query,n),new Yr(e.firestore,e.converter,bl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ep(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new J(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!m_(e)&&n.indexOf("/")!==-1)throw new J(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new J(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dd(t,new te(r))}if(n instanceof Ue)return Dd(t,n._key);throw new J(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ha(n)}.`)}function Tp(t,e){if(!Array.isArray(t)||t.length===0)throw new J(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yy(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new J(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Ey(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fr extends my{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ks("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Fr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Fr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fr._jsonSchema={type:We("string",Fr._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class Ho extends Fr{data(e={}){return super.data(e)}}class Ur{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Ho(this._firestore,this._userDataWriter,r.key,r,new fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Ho(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Ho(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:c0(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ur._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function c0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}/**
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
 */Ur._jsonSchemaVersion="firestore/querySnapshot/1.0",Ur._jsonSchema={type:We("string",Ur._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};/**
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
 */function Ty(t){t=bt(t,Ue);const e=bt(t.firestore,Un),n=sc(e);return $C(n,t._key).then((r=>vy(e,t,r)))}function l0(t){t=bt(t,Yr);const e=bt(t.firestore,Un),n=sc(e),r=new Ju(e);return _y(t._query),qC(n,t._query).then((s=>new Ur(e,r,t,s)))}function u0(t,e,n){t=bt(t,Ue);const r=bt(t.firestore,Un),s=Ey(t.converter,e),i=oc(r);return lc(r,[hy(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ut.none())])}function h0(t,e,n,...r){t=bt(t,Ue);const s=bt(t.firestore,Un),i=oc(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof Wu?t0(i,"updateDoc",t._key,e,n,r):e0(i,"updateDoc",t._key,e),lc(s,[o.toMutation(t._key,Ut.exists(!0))])}function b0(t){return lc(bt(t.firestore,Un),[new Ru(t._key,Ut.none())])}function P0(t,e){const n=bt(t.firestore,Un),r=Ia(t),s=Ey(t.converter,e),i=oc(t.firestore);return lc(n,[hy(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then((()=>r))}function C0(t,...e){var u,f,p;t=qe(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||_p(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(_p(e[r])){const g=e[r];e[r]=(u=g.next)==null?void 0:u.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,c;if(t instanceof Ue)o=bt(t.firestore,Un),c=za(t._key.path),i={next:g=>{e[r]&&e[r](vy(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=bt(t,Yr);o=bt(g.firestore,Un),c=g._query;const y=new Ju(o);i={next:C=>{e[r]&&e[r](new Ur(o,y,g,C))},error:e[r+1],complete:e[r+2]},_y(t._query)}const l=sc(o);return jC(l,c,s,i)}function lc(t,e){const n=sc(t);return HC(n,e)}function vy(t,e,n){const r=n.docs.get(e._key),s=new Ju(t);return new Fr(t,s,e._key,r,new fi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){qS(xs),bs(new jr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Un(new WS(r.getProvider("auth-internal")),new QS(o,r.getProvider("app-check-internal")),fb(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),ar(gp,mp,e),ar(gp,mp,"esm2020")})();const f0={apiKey:"AIzaSyB7bzp2zrIKny-j8ZDgkL3NfGNTsM4whNo",authDomain:"toefl-writing-practice.firebaseapp.com",projectId:"toefl-writing-practice",storageBucket:"toefl-writing-practice.firebasestorage.app",messagingSenderId:"383195886043",appId:"1:383195886043:web:f77b1d5b369ae32dbd77fe",measurementId:"G-5S5LCHH8B2"},Iy=im(f0),di=jS(Iy),Go=QC(Iy),us=Wi(null),ws=Wi(null),Fl=Wi(!1),hs=Wi(!1);let wy;const d0=new Promise(t=>{wy=t});CR(di,async t=>{if(us.value=t,t){hs.value=!1;const e=await Ty(Ia(Go,"users",t.uid));ws.value=e.exists()?e.data():null}else ws.value=null;Fl.value||(Fl.value=!0,wy())});const N0=()=>({user:us,userProfile:ws,authReady:Fl,guestMode:hs,login:async(o,c)=>{hs.value=!1;const l=await AR(di,o,c),u=await Ty(Ia(Go,"users",l.user.uid));return ws.value=u.exists()?u.data():null,l},register:async(o,c,l,u)=>{let f;try{f=await wR(di,o,c)}catch(p){throw p}try{const p=a0(zC(Go,"codes"),yp("code","==",u.trim().toUpperCase()),yp("used","==",!1)),g=await l0(p);if(g.empty){await f.user.delete();const q=new Error("invalid-code");throw q.code="auth/invalid-code",q}const y=g.docs[0],{teacherId:C,teacherName:V}=y.data(),L={name:l,email:o,role:"student",teacherId:C,teacherName:V};return await u0(Ia(Go,"users",f.user.uid),L),ws.value=L,await h0(y.ref,{used:!0,usedBy:f.user.uid,usedByName:l}),f}catch(p){if(f&&p.code!=="auth/invalid-code")try{await f.user.delete()}catch{}throw p}},continueAsGuest:()=>{hs.value=!0},logout:async()=>{hs.value=!1,await NR(di)},resetPassword:async o=>{await IR(di,o)},changePassword:async(o,c)=>{const l=zr.credential(us.value.email,o);await vR(us.value,l),await RR(us.value,c)}}),Ay=FI({history:mI(),routes:[{path:"/",component:()=>Cr(()=>import("./WelcomeView-DgptjB7I.js"),__vite__mapDeps([0,1])),meta:{public:!0}},{path:"/login",component:()=>Cr(()=>import("./LoginView-DNI6FBTm.js"),[]),meta:{public:!0}},{path:"/learning-coach",component:()=>Cr(()=>import("./LearningCoachView-CYZ9FItB.js"),__vite__mapDeps([2,3])),meta:{public:!0}},{path:"/practice",component:()=>Cr(()=>import("./PracticeView-S53EIW3G.js"),__vite__mapDeps([4,5,6])),meta:{requiresAuth:!0,allowGuest:!0}},{path:"/records",component:()=>Cr(()=>import("./RecordsView-ZGNmy97T.js"),__vite__mapDeps([7,5,6])),meta:{requiresAuth:!0}},{path:"/true-practice/:kind?",component:()=>Cr(()=>import("./TruePracticeView-DQdYJ6-K.js"),__vite__mapDeps([8,6])),meta:{requiresAuth:!0,allowGuest:!0}},{path:"/dashboard",component:()=>Cr(()=>import("./DashboardView-BYTlCErV.js"),__vite__mapDeps([9,5,6])),meta:{requiresAuth:!0,teacherOnly:!0}}]});Ay.beforeEach(async t=>{var s;await d0;const e=!!us.value,n=hs.value,r=((s=ws.value)==null?void 0:s.role)==="teacher";if(t.path==="/")return e||n?r?"/dashboard":"/practice":void 0;if(t.meta.requiresAuth&&!e&&!n)return"/login";if(t.meta.teacherOnly&&!r)return"/practice";if(t.path==="/records"&&(n||r)||t.path==="/login"&&(e||n))return r?"/dashboard":"/practice"});wv(Cv).use(Ay).mount("#app");export{C0 as A,P0 as B,Go as C,S0 as D,Xl as E,cn as F,h0 as G,Ia as H,lg as I,rT as J,A0 as K,us as L,v0 as M,ws as N,b0 as O,Ng as P,OI as R,E0 as T,Sv as _,Dg as a,xT as b,m0 as c,_0 as d,w0 as e,p0 as f,y0 as g,N0 as h,Vo as i,ql as j,g0 as k,St as l,FE as m,Hl as n,Pg as o,qt as p,ug as q,Wi as r,cg as s,oE as t,ps as u,T0 as v,I0 as w,a0 as x,yp as y,zC as z};
