(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const qe={},ds=[],bn=()=>{},op=()=>!1,Ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Sa=t=>t.startsWith("onUpdate:"),bt=Object.assign,Vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Uy=Object.prototype.hasOwnProperty,Fe=(t,e)=>Uy.call(t,e),pe=Array.isArray,fs=t=>qi(t)==="[object Map]",Ca=t=>qi(t)==="[object Set]",Lh=t=>qi(t)==="[object Date]",be=t=>typeof t=="function",Xe=t=>typeof t=="string",Kt=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",ap=t=>(Be(t)||be(t))&&be(t.then)&&be(t.catch),lp=Object.prototype.toString,qi=t=>lp.call(t),zy=t=>qi(t).slice(8,-1),cp=t=>qi(t)==="[object Object]",xa=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=Nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$y=/-\w/g,an=ka(t=>t.replace($y,e=>e.slice(1).toUpperCase())),By=/\B([A-Z])/g,Yr=ka(t=>t.replace(By,"-$1").toLowerCase()),up=ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),wl=ka(t=>t?`on${up(t)}`:""),wn=(t,e)=>!Object.is(t,e),Do=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Pa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fh;const Oa=()=>Fh||(Fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dr(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Xe(r)?Hy(r):dr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Xe(t)||Be(t))return t}const jy=/;(?![^(]*\))/g,qy=/:([^]+)/,Wy=/\/\*[^]*?\*\//g;function Hy(t){const e={};return t.replace(Wy,"").split(jy).forEach(n=>{if(n){const r=n.split(qy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zt(t){let e="";if(Xe(t))e=t;else if(pe(t))for(let n=0;n<t.length;n++){const r=zt(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Gy(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Xe(e)&&(t.class=zt(e)),n&&(t.style=dr(n)),t}const Ky="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qy=Nc(Ky);function dp(t){return!!t||t===""}function Yy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Wi(t[r],e[r]);return n}function Wi(t,e){if(t===e)return!0;let n=Lh(t),r=Lh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Kt(t),r=Kt(e),n||r)return t===e;if(n=pe(t),r=pe(e),n||r)return n&&r?Yy(t,e):!1;if(n=Be(t),r=Be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Wi(t[o],e[o]))return!1}}return String(t)===String(e)}function Jy(t,e){return t.findIndex(n=>Wi(n,e))}const fp=t=>!!(t&&t.__v_isRef===!0),ze=t=>Xe(t)?t:t==null?"":pe(t)||Be(t)&&(t.toString===lp||!be(t.toString))?fp(t)?ze(t.value):JSON.stringify(t,pp,2):String(t),pp=(t,e)=>fp(e)?pp(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[bl(r,i)+" =>"]=s,n),{})}:Ca(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bl(n))}:Kt(e)?bl(e):Be(e)&&!pe(e)&&!cp(e)?String(e):e,bl=(t,e="")=>{var n;return Kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class Xy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&gt&&(gt.active?(this.parent=gt,this.index=(gt.scopes||(gt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){++this._on===1&&(this.prevScope=gt,gt=this)}off(){if(this._on>0&&--this._on===0){if(gt===this)gt=this.prevScope;else{let e=gt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zy(){return gt}let Ge;const El=new WeakSet;class mp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&(gt.active?gt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,El.has(this)&&(El.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_p(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uh(this),yp(this);const e=Ge,n=ln;Ge=this,ln=!0;try{return this.fn()}finally{vp(this),Ge=e,ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lc(e);this.deps=this.depsTail=void 0,Uh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?El.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hl(this)&&this.run()}get dirty(){return Hl(this)}}let gp=0,mi,gi;function _p(t,e=!1){if(t.flags|=8,e){t.next=gi,gi=t;return}t.next=mi,mi=t}function Dc(){gp++}function Mc(){if(--gp>0)return;if(gi){let e=gi;for(gi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mi;){let e=mi;for(mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function yp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Lc(r),ev(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Hl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ci)||(t.globalVersion=Ci,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Hl(t))))return;t.flags|=2;const e=t.dep,n=Ge,r=ln;Ge=t,ln=!0;try{yp(t);const s=t.fn(t._value);(e.version===0||wn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ge=n,ln=r,vp(t),t.flags&=-3}}function Lc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Lc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ev(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ln=!0;const bp=[];function Hn(){bp.push(ln),ln=!1}function Gn(){const t=bp.pop();ln=t===void 0?!0:t}function Uh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ge;Ge=void 0;try{e()}finally{Ge=n}}}let Ci=0;class tv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ge||!ln||Ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ge)n=this.activeLink=new tv(Ge,this),Ge.deps?(n.prevDep=Ge.depsTail,Ge.depsTail.nextDep=n,Ge.depsTail=n):Ge.deps=Ge.depsTail=n,Ep(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ge.depsTail,n.nextDep=void 0,Ge.depsTail.nextDep=n,Ge.depsTail=n,Ge.deps===n&&(Ge.deps=r)}return n}trigger(e){this.version++,Ci++,this.notify(e)}notify(e){Dc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Mc()}}}function Ep(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ep(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Yo=new WeakMap,zr=Symbol(""),Gl=Symbol(""),xi=Symbol("");function Ct(t,e,n){if(ln&&Ge){let r=Yo.get(t);r||Yo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Fc),s.map=r,s.key=n),s.track()}}function Ln(t,e,n,r,s,i){const o=Yo.get(t);if(!o){Ci++;return}const l=c=>{c&&c.trigger()};if(Dc(),e==="clear")o.forEach(l);else{const c=pe(t),u=c&&xa(n);if(c&&n==="length"){const d=Number(r);o.forEach((f,_)=>{(_==="length"||_===xi||!Kt(_)&&_>=d)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(xi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(zr)),fs(t)&&l(o.get(Gl)));break;case"delete":c||(l(o.get(zr)),fs(t)&&l(o.get(Gl)));break;case"set":fs(t)&&l(o.get(zr));break}}Mc()}function nv(t,e){const n=Yo.get(t);return n&&n.get(e)}function os(t){const e=Ve(t);return e===t?e:(Ct(e,"iterate",xi),Ht(t)?e:e.map(un))}function Na(t){return Ct(t=Ve(t),"iterate",xi),t}function _n(t,e){return Kn(t)?Ts($r(t)?un(e):e):un(e)}const rv={__proto__:null,[Symbol.iterator](){return Tl(this,Symbol.iterator,t=>_n(this,t))},concat(...t){return os(this).concat(...t.map(e=>pe(e)?os(e):e))},entries(){return Tl(this,"entries",t=>(t[1]=_n(this,t[1]),t))},every(t,e){return On(this,"every",t,e,void 0,arguments)},filter(t,e){return On(this,"filter",t,e,n=>n.map(r=>_n(this,r)),arguments)},find(t,e){return On(this,"find",t,e,n=>_n(this,n),arguments)},findIndex(t,e){return On(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return On(this,"findLast",t,e,n=>_n(this,n),arguments)},findLastIndex(t,e){return On(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return On(this,"forEach",t,e,void 0,arguments)},includes(...t){return Il(this,"includes",t)},indexOf(...t){return Il(this,"indexOf",t)},join(t){return os(this).join(t)},lastIndexOf(...t){return Il(this,"lastIndexOf",t)},map(t,e){return On(this,"map",t,e,void 0,arguments)},pop(){return ti(this,"pop")},push(...t){return ti(this,"push",t)},reduce(t,...e){return zh(this,"reduce",t,e)},reduceRight(t,...e){return zh(this,"reduceRight",t,e)},shift(){return ti(this,"shift")},some(t,e){return On(this,"some",t,e,void 0,arguments)},splice(...t){return ti(this,"splice",t)},toReversed(){return os(this).toReversed()},toSorted(t){return os(this).toSorted(t)},toSpliced(...t){return os(this).toSpliced(...t)},unshift(...t){return ti(this,"unshift",t)},values(){return Tl(this,"values",t=>_n(this,t))}};function Tl(t,e,n){const r=Na(t),s=r[e]();return r!==t&&!Ht(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const sv=Array.prototype;function On(t,e,n,r,s,i){const o=Na(t),l=o!==t&&!Ht(t),c=o[e];if(c!==sv[e]){const f=c.apply(t,i);return l?un(f):f}let u=n;o!==t&&(l?u=function(f,_){return n.call(this,_n(t,f),_,t)}:n.length>2&&(u=function(f,_){return n.call(this,f,_,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function zh(t,e,n,r){const s=Na(t),i=s!==t&&!Ht(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,d,f){return l&&(l=!1,u=_n(t,u)),n.call(this,u,_n(t,d),f,t)}):n.length>3&&(o=function(u,d,f){return n.call(this,u,d,f,t)}));const c=s[e](o,...r);return l?_n(t,c):c}function Il(t,e,n){const r=Ve(t);Ct(r,"iterate",xi);const s=r[e](...n);return(s===-1||s===!1)&&Va(n[0])?(n[0]=Ve(n[0]),r[e](...n)):s}function ti(t,e,n=[]){Hn(),Dc();const r=Ve(t)[e].apply(t,n);return Mc(),Gn(),r}const iv=Nc("__proto__,__v_isRef,__isVue"),Tp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kt));function ov(t){Kt(t)||(t=String(t));const e=Ve(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class Ip{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?gv:Cp:i?Sp:Rp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=pe(e);if(!s){let c;if(o&&(c=rv[n]))return c;if(n==="hasOwnProperty")return ov}const l=Reflect.get(e,n,nt(e)?e:r);if((Kt(n)?Tp.has(n):iv(n))||(s||Ct(e,"get",n),i))return l;if(nt(l)){const c=o&&xa(n)?l:l.value;return s&&Be(c)?Ql(c):c}return Be(l)?s?Ql(l):tn(l):l}}class Ap extends Ip{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=pe(e)&&xa(n);if(!this._isShallow){const u=Kn(i);if(!Ht(r)&&!Kn(r)&&(i=Ve(i),r=Ve(r)),!o&&nt(i)&&!nt(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Fe(e,n),c=Reflect.set(e,n,r,nt(e)?e:s);return e===Ve(s)&&(l?wn(r,i)&&Ln(e,"set",n,r):Ln(e,"add",n,r)),c}deleteProperty(e,n){const r=Fe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ln(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Kt(n)||!Tp.has(n))&&Ct(e,"has",n),r}ownKeys(e){return Ct(e,"iterate",pe(e)?"length":zr),Reflect.ownKeys(e)}}class av extends Ip{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const lv=new Ap,cv=new av,uv=new Ap(!0);const Kl=t=>t,Ao=t=>Reflect.getPrototypeOf(t);function hv(t,e,n){return function(...r){const s=this.__v_raw,i=Ve(s),o=fs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Kl:e?Ts:un;return!e&&Ct(i,"iterate",c?Gl:zr),bt(Object.create(u),{next(){const{value:f,done:_}=u.next();return _?{value:f,done:_}:{value:l?[d(f[0]),d(f[1])]:d(f),done:_}}})}}function Ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function dv(t,e){const n={get(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);t||(wn(s,l)&&Ct(o,"get",s),Ct(o,"get",l));const{has:c}=Ao(o),u=e?Kl:t?Ts:un;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ct(Ve(s),"iterate",zr),s.size},has(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);return t||(wn(s,l)&&Ct(o,"has",s),Ct(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ve(l),u=e?Kl:t?Ts:un;return!t&&Ct(c,"iterate",zr),l.forEach((d,f)=>s.call(i,u(d),u(f),o))}};return bt(n,t?{add:Ro("add"),set:Ro("set"),delete:Ro("delete"),clear:Ro("clear")}:{add(s){const i=Ve(this),o=Ao(i),l=Ve(s),c=!e&&!Ht(s)&&!Kn(s)?l:s;return o.has.call(i,c)||wn(s,c)&&o.has.call(i,s)||wn(l,c)&&o.has.call(i,l)||(i.add(c),Ln(i,"add",c,c)),this},set(s,i){!e&&!Ht(i)&&!Kn(i)&&(i=Ve(i));const o=Ve(this),{has:l,get:c}=Ao(o);let u=l.call(o,s);u||(s=Ve(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?wn(i,d)&&Ln(o,"set",s,i):Ln(o,"add",s,i),this},delete(s){const i=Ve(this),{has:o,get:l}=Ao(i);let c=o.call(i,s);c||(s=Ve(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Ln(i,"delete",s,void 0),u},clear(){const s=Ve(this),i=s.size!==0,o=s.clear();return i&&Ln(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=hv(s,t,e)}),n}function Uc(t,e){const n=dv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Fe(n,s)&&s in r?n:r,s,i)}const fv={get:Uc(!1,!1)},pv={get:Uc(!1,!0)},mv={get:Uc(!0,!1)};const Rp=new WeakMap,Sp=new WeakMap,Cp=new WeakMap,gv=new WeakMap;function _v(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tn(t){return Kn(t)?t:zc(t,!1,lv,fv,Rp)}function xp(t){return zc(t,!1,uv,pv,Sp)}function Ql(t){return zc(t,!0,cv,mv,Cp)}function zc(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=_v(zy(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function $r(t){return Kn(t)?$r(t.__v_raw):!!(t&&t.__v_isReactive)}function Kn(t){return!!(t&&t.__v_isReadonly)}function Ht(t){return!!(t&&t.__v_isShallow)}function Va(t){return t?!!t.__v_raw:!1}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function yv(t){return!Fe(t,"__v_skip")&&Object.isExtensible(t)&&hp(t,"__v_skip",!0),t}const un=t=>Be(t)?tn(t):t,Ts=t=>Be(t)?Ql(t):t;function nt(t){return t?t.__v_isRef===!0:!1}function Je(t){return kp(t,!1)}function vv(t){return kp(t,!0)}function kp(t,e){return nt(t)?t:new wv(t,e)}class wv{constructor(e,n){this.dep=new Fc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ve(e),this._value=n?e:un(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ht(e)||Kn(e);e=r?e:Ve(e),wn(e,n)&&(this._rawValue=e,this._value=r?e:un(e),this.dep.trigger())}}function bv(t){t.dep&&t.dep.trigger()}function oe(t){return nt(t)?t.value:t}function Pp(t){return be(t)?t():oe(t)}const Ev={get:(t,e,n)=>e==="__v_raw"?t:oe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Op(t){return $r(t)?t:new Proxy(t,Ev)}function $h(t){const e=pe(t)?new Array(t.length):{};for(const n in t)e[n]=Iv(t,n);return e}class Tv{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Kt(n)?n:String(n),this._raw=Ve(e);let s=!0,i=e;if(!pe(e)||Kt(this._key)||!xa(this._key))do s=!Va(i)||Ht(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=oe(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&nt(this._raw[this._key])){const n=this._object[this._key];if(nt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return nv(this._raw,this._key)}}function Iv(t,e,n){return new Tv(t,e,n)}class Av{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ge!==this)return _p(this,!0),!0}get value(){const e=this.dep.track();return wp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rv(t,e,n=!1){let r,s;return be(t)?r=t:(r=t.get,s=t.set),new Av(r,s,n)}const So={},Jo=new WeakMap;let Vr;function Sv(t,e=!1,n=Vr){if(n){let r=Jo.get(n);r||Jo.set(n,r=[]),r.push(t)}}function Cv(t,e,n=qe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=j=>s?j:Ht(j)||s===!1||s===0?Fn(j,1):Fn(j);let d,f,_,v,k=!1,O=!1;if(nt(t)?(f=()=>t.value,k=Ht(t)):$r(t)?(f=()=>u(t),k=!0):pe(t)?(O=!0,k=t.some(j=>$r(j)||Ht(j)),f=()=>t.map(j=>{if(nt(j))return j.value;if($r(j))return u(j);if(be(j))return c?c(j,2):j()})):be(t)?e?f=c?()=>c(t,2):t:f=()=>{if(_){Hn();try{_()}finally{Gn()}}const j=Vr;Vr=d;try{return c?c(t,3,[v]):t(v)}finally{Vr=j}}:f=bn,e&&s){const j=f,te=s===!0?1/0:s;f=()=>Fn(j(),te)}const V=Zy(),q=()=>{d.stop(),V&&V.active&&Vc(V.effects,d)};if(i&&e){const j=e;e=(...te)=>{const G=j(...te);return q(),G}}let N=O?new Array(t.length).fill(So):So;const P=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(e){const te=d.run();if(j||s||k||(O?te.some((G,g)=>wn(G,N[g])):wn(te,N))){_&&_();const G=Vr;Vr=d;try{const g=[te,N===So?void 0:O&&N[0]===So?[]:N,v];N=te,c?c(e,3,g):e(...g)}finally{Vr=G}}}else d.run()};return l&&l(P),d=new mp(f),d.scheduler=o?()=>o(P,!1):P,v=j=>Sv(j,!1,d),_=d.onStop=()=>{const j=Jo.get(d);if(j){if(c)c(j,4);else for(const te of j)te();Jo.delete(d)}},e?r?P(!0):N=d.run():o?o(P.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function Fn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,nt(t))Fn(t.value,e,n);else if(pe(t))for(let r=0;r<t.length;r++)Fn(t[r],e,n);else if(Ca(t)||fs(t))t.forEach(r=>{Fn(r,e,n)});else if(cp(t)){for(const r in t)Fn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Fn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hi(t,e,n,r){try{return r?t(...r):t()}catch(s){Da(s,e,n)}}function hn(t,e,n,r){if(be(t)){const s=Hi(t,e,n,r);return s&&ap(s)&&s.catch(i=>{Da(i,e,n)}),s}if(pe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(hn(t[i],e,n,r));return s}}function Da(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||qe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](t,c,u)===!1)return}l=l.parent}if(i){Hn(),Hi(i,null,10,[t,c,u]),Gn();return}}xv(t,n,s,r,o)}function xv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Lt=[];let gn=-1;const ps=[];let ar=null,as=0;const Np=Promise.resolve();let Xo=null;function $c(t){const e=Xo||Np;return t?e.then(this?t.bind(this):t):e}function kv(t){let e=gn+1,n=Lt.length;for(;e<n;){const r=e+n>>>1,s=Lt[r],i=ki(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bc(t){if(!(t.flags&1)){const e=ki(t),n=Lt[Lt.length-1];!n||!(t.flags&2)&&e>=ki(n)?Lt.push(t):Lt.splice(kv(e),0,t),t.flags|=1,Vp()}}function Vp(){Xo||(Xo=Np.then(Mp))}function Pv(t){pe(t)?ps.push(...t):ar&&t.id===-1?ar.splice(as+1,0,t):t.flags&1||(ps.push(t),t.flags|=1),Vp()}function Bh(t,e,n=gn+1){for(;n<Lt.length;n++){const r=Lt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Lt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Dp(t){if(ps.length){const e=[...new Set(ps)].sort((n,r)=>ki(n)-ki(r));if(ps.length=0,ar){ar.push(...e);return}for(ar=e,as=0;as<ar.length;as++){const n=ar[as];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ar=null,as=0}}const ki=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mp(t){try{for(gn=0;gn<Lt.length;gn++){const e=Lt[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Lt.length;gn++){const e=Lt[gn];e&&(e.flags&=-2)}gn=-1,Lt.length=0,Dp(),Xo=null,(Lt.length||ps.length)&&Mp()}}let Pt=null,Lp=null;function Zo(t){const e=Pt;return Pt=t,Lp=t&&t.type.__scopeId||null,e}function Te(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&na(-1);const i=Zo(e);let o;try{o=t(...s)}finally{Zo(i),r._d&&na(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Bt(t,e){if(Pt===null)return t;const n=za(Pt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=qe]=e[s];i&&(be(i)&&(i={mounted:i,updated:i}),i.deep&&Fn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Pr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Hn(),hn(c,n,8,[t.el,l,t,e]),Gn())}}function Mo(t,e){if(Ft){let n=Ft.provides;const r=Ft.parent&&Ft.parent.provides;r===n&&(n=Ft.provides=Object.create(r)),n[t]=e}}function jn(t,e,n=!1){const r=dm();if(r||gs){let s=gs?gs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&be(e)?e.call(r&&r.proxy):e}}const Ov=Symbol.for("v-scx"),Nv=()=>jn(Ov);function Lo(t,e,n){return Fp(t,e,n)}function Fp(t,e,n=qe){const{immediate:r,deep:s,flush:i,once:o}=n,l=bt({},n),c=e&&r||!e&&i!=="post";let u;if(Ni){if(i==="sync"){const v=Nv();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=bn,v.resume=bn,v.pause=bn,v}}const d=Ft;l.call=(v,k,O)=>hn(v,d,k,O);let f=!1;i==="post"?l.scheduler=v=>{$t(v,d&&d.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(v,k)=>{k?v():Bc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),f&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const _=Cv(t,e,l);return Ni&&(u?u.push(_):c&&_()),_}function Vv(t,e,n){const r=this.proxy,s=Xe(t)?t.includes(".")?Up(r,t):()=>r[t]:t.bind(r,r);let i;be(e)?i=e:(i=e.handler,n=e);const o=Gi(this),l=Fp(s,i.bind(r),n);return o(),l}function Up(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Dv=Symbol("_vte"),Mv=t=>t.__isTeleport,Al=Symbol("_leaveCb");function jc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Jr(t,e){return be(t)?bt({name:t.name},e,{setup:t}):t}function zp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function jh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ea=new WeakMap;function _i(t,e,n,r,s=!1){if(pe(t)){t.forEach((O,V)=>_i(O,e&&(pe(e)?e[V]:e),n,r,s));return}if(ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&_i(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?za(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===qe?l.refs={}:l.refs,f=l.setupState,_=Ve(f),v=f===qe?op:O=>jh(d,O)?!1:Fe(_,O),k=(O,V)=>!(V&&jh(d,V));if(u!=null&&u!==c){if(qh(e),Xe(u))d[u]=null,v(u)&&(f[u]=null);else if(nt(u)){const O=e;k(u,O.k)&&(u.value=null),O.k&&(d[O.k]=null)}}if(be(c))Hi(c,l,12,[o,d]);else{const O=Xe(c),V=nt(c);if(O||V){const q=()=>{if(t.f){const N=O?v(c)?f[c]:d[c]:k()||!t.k?c.value:d[t.k];if(s)pe(N)&&Vc(N,i);else if(pe(N))N.includes(i)||N.push(i);else if(O)d[c]=[i],v(c)&&(f[c]=d[c]);else{const P=[i];k(c,t.k)&&(c.value=P),t.k&&(d[t.k]=P)}}else O?(d[c]=o,v(c)&&(f[c]=o)):V&&(k(c,t.k)&&(c.value=o),t.k&&(d[t.k]=o))};if(o){const N=()=>{q(),ea.delete(t)};N.id=-1,ea.set(t,N),$t(N,n)}else qh(t),q()}}}function qh(t){const e=ea.get(t);e&&(e.flags|=8,ea.delete(t))}Oa().requestIdleCallback;Oa().cancelIdleCallback;const ms=t=>!!t.type.__asyncLoader,$p=t=>t.type.__isKeepAlive;function Lv(t,e){Bp(t,"a",e)}function Fv(t,e){Bp(t,"da",e)}function Bp(t,e,n=Ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ma(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$p(s.parent.vnode)&&Uv(r,e,n,s),s=s.parent}}function Uv(t,e,n,r){const s=Ma(e,t,r,!0);qp(()=>{Vc(r[e],s)},n)}function Ma(t,e,n=Ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Hn();const l=Gi(n),c=hn(e,n,t,o);return l(),Gn(),c});return r?s.unshift(i):s.push(i),i}}const Zn=t=>(e,n=Ft)=>{(!Ni||t==="sp")&&Ma(t,(...r)=>e(...r),n)},zv=Zn("bm"),La=Zn("m"),$v=Zn("bu"),jp=Zn("u"),Bv=Zn("bum"),qp=Zn("um"),jv=Zn("sp"),qv=Zn("rtg"),Wv=Zn("rtc");function Hv(t,e=Ft){Ma("ec",t,e)}const Gv=Symbol.for("v-ndc");function Fo(t,e,n,r){let s;const i=n,o=pe(t);if(o||Xe(t)){const l=o&&$r(t);let c=!1,u=!1;l&&(c=!Ht(t),u=Kn(t),t=Na(t)),s=new Array(t.length);for(let d=0,f=t.length;d<f;d++)s[d]=e(c?u?Ts(un(t[d])):un(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Ns(t,e,n={},r,s){if(Pt.ce||Pt.parent&&ms(Pt.parent)&&Pt.parent.ce){const u=Object.keys(n).length>0;return le(),Gt(ht,null,[he("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),le();const o=i&&Wp(i(n)),l=n.key||o&&o.key,c=Gt(ht,{key:(l&&!Kt(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Wp(t){return t.some(e=>Oi(e)?!(e.type===Sn||e.type===ht&&!Wp(e.children)):!0)?t:null}const Yl=t=>t?fm(t)?za(t):Yl(t.parent):null,yi=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yl(t.parent),$root:t=>Yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gp(t),$forceUpdate:t=>t.f||(t.f=()=>{Bc(t.update)}),$nextTick:t=>t.n||(t.n=$c.bind(t.proxy)),$watch:t=>Vv.bind(t)}),Rl=(t,e)=>t!==qe&&!t.__isScriptSetup&&Fe(t,e),Kv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Rl(r,e))return o[e]=1,r[e];if(s!==qe&&Fe(s,e))return o[e]=2,s[e];if(Fe(i,e))return o[e]=3,i[e];if(n!==qe&&Fe(n,e))return o[e]=4,n[e];Jl&&(o[e]=0)}}const u=yi[e];let d,f;if(u)return e==="$attrs"&&Ct(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==qe&&Fe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Fe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Rl(s,e)?(s[e]=n,!0):r!==qe&&Fe(r,e)?(r[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==qe&&l[0]!=="$"&&Fe(t,l)||Rl(e,l)||Fe(i,l)||Fe(r,l)||Fe(yi,l)||Fe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wh(t){return pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jl=!0;function Qv(t){const e=Gp(t),n=t.proxy,r=t.ctx;Jl=!1,e.beforeCreate&&Hh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:f,mounted:_,beforeUpdate:v,updated:k,activated:O,deactivated:V,beforeDestroy:q,beforeUnmount:N,destroyed:P,unmounted:j,render:te,renderTracked:G,renderTriggered:g,errorCaptured:m,serverPrefetch:b,expose:I,inheritAttrs:R,components:C,directives:E,filters:ot}=e;if(u&&Yv(u,r,null),o)for(const Ee in o){const Ae=o[Ee];be(Ae)&&(r[Ee]=Ae.bind(n))}if(s){const Ee=s.call(n,n);Be(Ee)&&(t.data=tn(Ee))}if(Jl=!0,i)for(const Ee in i){const Ae=i[Ee],ft=be(Ae)?Ae.bind(n,n):be(Ae.get)?Ae.get.bind(n,n):bn,re=!be(Ae)&&be(Ae.set)?Ae.set.bind(n):bn,Nt=kt({get:ft,set:re});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:We=>Nt.value=We})}if(l)for(const Ee in l)Hp(l[Ee],r,n,Ee);if(c){const Ee=be(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(Ae=>{Mo(Ae,Ee[Ae])})}d&&Hh(d,t,"c");function Pe(Ee,Ae){pe(Ae)?Ae.forEach(ft=>Ee(ft.bind(n))):Ae&&Ee(Ae.bind(n))}if(Pe(zv,f),Pe(La,_),Pe($v,v),Pe(jp,k),Pe(Lv,O),Pe(Fv,V),Pe(Hv,m),Pe(Wv,G),Pe(qv,g),Pe(Bv,N),Pe(qp,j),Pe(jv,b),pe(I))if(I.length){const Ee=t.exposed||(t.exposed={});I.forEach(Ae=>{Object.defineProperty(Ee,Ae,{get:()=>n[Ae],set:ft=>n[Ae]=ft,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===bn&&(t.render=te),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),E&&(t.directives=E),b&&zp(t)}function Yv(t,e,n=bn){pe(t)&&(t=Xl(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=jn(s.from||r,s.default,!0):i=jn(s.from||r):i=jn(s),nt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hh(t,e,n){hn(pe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hp(t,e,n,r){let s=r.includes(".")?Up(n,r):()=>n[r];if(Xe(t)){const i=e[t];be(i)&&Lo(s,i)}else if(be(t))Lo(s,t.bind(n));else if(Be(t))if(pe(t))t.forEach(i=>Hp(i,e,n,r));else{const i=be(t.handler)?t.handler.bind(n):e[t.handler];be(i)&&Lo(s,i,t)}}function Gp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ta(c,u,o,!0)),ta(c,e,o)),Be(e)&&i.set(e,c),c}function ta(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ta(t,i,n,!0),s&&s.forEach(o=>ta(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Jv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Jv={data:Gh,props:Kh,emits:Kh,methods:oi,computed:oi,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:oi,directives:oi,watch:Zv,provide:Gh,inject:Xv};function Gh(t,e){return e?t?function(){return bt(be(t)?t.call(this,this):t,be(e)?e.call(this,this):e)}:e:t}function Xv(t,e){return oi(Xl(t),Xl(e))}function Xl(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?bt(Object.create(null),t,e):e}function Kh(t,e){return t?pe(t)&&pe(e)?[...new Set([...t,...e])]:bt(Object.create(null),Wh(t),Wh(e??{})):e}function Zv(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const r in e)n[r]=Dt(t[r],e[r]);return n}function Kp(){return{app:null,config:{isNativeTag:op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let e0=0;function t0(t,e){return function(r,s=null){be(r)||(r=bt({},r)),s!=null&&!Be(s)&&(s=null);const i=Kp(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:e0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:k0,get config(){return i.config},set config(d){},use(d,...f){return o.has(d)||(d&&be(d.install)?(o.add(d),d.install(u,...f)):be(d)&&(o.add(d),d(u,...f))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,f){return f?(i.components[d]=f,u):i.components[d]},directive(d,f){return f?(i.directives[d]=f,u):i.directives[d]},mount(d,f,_){if(!c){const v=u._ceVNode||he(r,s);return v.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(v,d,_),c=!0,u._container=d,d.__vue_app__=u,za(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(hn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,f){return i.provides[d]=f,u},runWithContext(d){const f=gs;gs=u;try{return d()}finally{gs=f}}};return u}}let gs=null;const n0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${Yr(e)}Modifiers`];function r0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||qe;let s=n;const i=e.startsWith("update:"),o=i&&n0(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Xe(d)?d.trim():d)),o.number&&(s=n.map(Pa)));let l,c=r[l=wl(e)]||r[l=wl(an(e))];!c&&i&&(c=r[l=wl(Yr(e))]),c&&hn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,hn(u,t,6,s)}}const s0=new WeakMap;function Qp(t,e,n=!1){const r=n?s0:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!be(t)){const c=u=>{const d=Qp(u,e,!0);d&&(l=!0,bt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Be(t)&&r.set(t,null),null):(pe(i)?i.forEach(c=>o[c]=null):bt(o,i),Be(t)&&r.set(t,o),o)}function Fa(t,e){return!t||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,Yr(e))||Fe(t,e))}function Qh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:f,data:_,setupState:v,ctx:k,inheritAttrs:O}=t,V=Zo(t);let q,N;try{if(n.shapeFlag&4){const j=s||r,te=j;q=yn(u.call(te,j,d,f,v,_,k)),N=l}else{const j=e;q=yn(j.length>1?j(f,{attrs:l,slots:o,emit:c}):j(f,null)),N=e.props?l:i0(l)}}catch(j){vi.length=0,Da(j,t,1),q=he(Sn)}let P=q;if(N&&O!==!1){const j=Object.keys(N),{shapeFlag:te}=P;j.length&&te&7&&(i&&j.some(Sa)&&(N=o0(N,i)),P=jr(P,N,!1,!0))}return n.dirs&&(P=jr(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&jc(P,n.transition),q=P,Zo(V),q}const i0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ra(n))&&((e||(e={}))[n]=t[n]);return e},o0=(t,e)=>{const n={};for(const r in t)(!Sa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function a0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yh(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const _=d[f];if(Yp(o,r,_)&&!Fa(u,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Yh(r,o,u):!0:!!o;return!1}function Yh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Yp(e,t,i)&&!Fa(n,i))return!0}return!1}function Yp(t,e,n){const r=t[n],s=e[n];return n==="style"&&Be(r)&&Be(s)?!Wi(r,s):r!==s}function l0({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Jp={},Xp=()=>Object.create(Jp),Zp=t=>Object.getPrototypeOf(t)===Jp;function c0(t,e,n,r=!1){const s={},i=Xp();t.propsDefaults=Object.create(null),em(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:xp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function u0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ve(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let _=d[f];if(Fa(t.emitsOptions,_))continue;const v=e[_];if(c)if(Fe(i,_))v!==i[_]&&(i[_]=v,u=!0);else{const k=an(_);s[k]=Zl(c,l,k,v,t,!1)}else v!==i[_]&&(i[_]=v,u=!0)}}}else{em(t,e,s,i)&&(u=!0);let d;for(const f in l)(!e||!Fe(e,f)&&((d=Yr(f))===f||!Fe(e,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Zl(c,l,f,void 0,t,!0)):delete s[f]);if(i!==l)for(const f in i)(!e||!Fe(e,f))&&(delete i[f],u=!0)}u&&Ln(t.attrs,"set","")}function em(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(pi(c))continue;const u=e[c];let d;s&&Fe(s,d=an(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Fa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ve(n),u=l||qe;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Zl(s,c,f,u[f],t,!Fe(u,f))}}return o}function Zl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Fe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&be(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Gi(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Yr(n))&&(r=!0))}return r}const h0=new WeakMap;function tm(t,e,n=!1){const r=n?h0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!be(t)){const d=f=>{c=!0;const[_,v]=tm(f,e,!0);bt(o,_),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Be(t)&&r.set(t,ds),ds;if(pe(i))for(let d=0;d<i.length;d++){const f=an(i[d]);Jh(f)&&(o[f]=qe)}else if(i)for(const d in i){const f=an(d);if(Jh(f)){const _=i[d],v=o[f]=pe(_)||be(_)?{type:_}:bt({},_),k=v.type;let O=!1,V=!0;if(pe(k))for(let q=0;q<k.length;++q){const N=k[q],P=be(N)&&N.name;if(P==="Boolean"){O=!0;break}else P==="String"&&(V=!1)}else O=be(k)&&k.name==="Boolean";v[0]=O,v[1]=V,(O||Fe(v,"default"))&&l.push(f)}}const u=[o,l];return Be(t)&&r.set(t,u),u}function Jh(t){return t[0]!=="$"&&!pi(t)}const qc=t=>t==="_"||t==="_ctx"||t==="$stable",Wc=t=>pe(t)?t.map(yn):[yn(t)],d0=(t,e,n)=>{if(e._n)return e;const r=Te((...s)=>Wc(e(...s)),n);return r._c=!1,r},nm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qc(s))continue;const i=t[s];if(be(i))e[s]=d0(s,i,r);else if(i!=null){const o=Wc(i);e[s]=()=>o}}},rm=(t,e)=>{const n=Wc(e);t.slots.default=()=>n},sm=(t,e,n)=>{for(const r in e)(n||!qc(r))&&(t[r]=e[r])},f0=(t,e,n)=>{const r=t.slots=Xp();if(t.vnode.shapeFlag&32){const s=e._;s?(sm(r,e,n),n&&hp(r,"_",s,!0)):nm(e,r)}else e&&rm(t,e)},p0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=qe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:sm(s,e,n):(i=!e.$stable,nm(e,s)),o=e}else e&&(rm(t,e),o={default:1});if(i)for(const l in s)!qc(l)&&o[l]==null&&delete s[l]},$t=v0;function m0(t){return g0(t)}function g0(t,e){const n=Oa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:_,setScopeId:v=bn,insertStaticContent:k}=t,O=(w,T,S,L=null,U=null,F=null,Y=void 0,K=null,H=!!T.dynamicChildren)=>{if(w===T)return;w&&!ni(w,T)&&(L=M(w),We(w,U,F,!0),w=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:$,ref:ue,shapeFlag:J}=T;switch($){case Ua:V(w,T,S,L);break;case Sn:q(w,T,S,L);break;case Cl:w==null&&N(T,S,L,Y);break;case ht:C(w,T,S,L,U,F,Y,K,H);break;default:J&1?te(w,T,S,L,U,F,Y,K,H):J&6?E(w,T,S,L,U,F,Y,K,H):(J&64||J&128)&&$.process(w,T,S,L,U,F,Y,K,H,ie)}ue!=null&&U?_i(ue,w&&w.ref,F,T||w,!T):ue==null&&w&&w.ref!=null&&_i(w.ref,null,F,w,!0)},V=(w,T,S,L)=>{if(w==null)r(T.el=l(T.children),S,L);else{const U=T.el=w.el;T.children!==w.children&&u(U,T.children)}},q=(w,T,S,L)=>{w==null?r(T.el=c(T.children||""),S,L):T.el=w.el},N=(w,T,S,L)=>{[w.el,w.anchor]=k(w.children,T,S,L,w.el,w.anchor)},P=({el:w,anchor:T},S,L)=>{let U;for(;w&&w!==T;)U=_(w),r(w,S,L),w=U;r(T,S,L)},j=({el:w,anchor:T})=>{let S;for(;w&&w!==T;)S=_(w),s(w),w=S;s(T)},te=(w,T,S,L,U,F,Y,K,H)=>{if(T.type==="svg"?Y="svg":T.type==="math"&&(Y="mathml"),w==null)G(T,S,L,U,F,Y,K,H);else{const $=w.el&&w.el._isVueCE?w.el:null;try{$&&$._beginPatch(),b(w,T,U,F,Y,K,H)}finally{$&&$._endPatch()}}},G=(w,T,S,L,U,F,Y,K)=>{let H,$;const{props:ue,shapeFlag:J,transition:ae,dirs:fe}=w;if(H=w.el=o(w.type,F,ue&&ue.is,ue),J&8?d(H,w.children):J&16&&m(w.children,H,null,L,U,Sl(w,F),Y,K),fe&&Pr(w,null,L,"created"),g(H,w,w.scopeId,Y,L),ue){for(const we in ue)we!=="value"&&!pi(we)&&i(H,we,null,ue[we],F,L);"value"in ue&&i(H,"value",null,ue.value,F),($=ue.onVnodeBeforeMount)&&pn($,L,w)}fe&&Pr(w,null,L,"beforeMount");const de=_0(U,ae);de&&ae.beforeEnter(H),r(H,T,S),(($=ue&&ue.onVnodeMounted)||de||fe)&&$t(()=>{try{$&&pn($,L,w),de&&ae.enter(H),fe&&Pr(w,null,L,"mounted")}finally{}},U)},g=(w,T,S,L,U)=>{if(S&&v(w,S),L)for(let F=0;F<L.length;F++)v(w,L[F]);if(U){let F=U.subTree;if(T===F||lm(F.type)&&(F.ssContent===T||F.ssFallback===T)){const Y=U.vnode;g(w,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},m=(w,T,S,L,U,F,Y,K,H=0)=>{for(let $=H;$<w.length;$++){const ue=w[$]=K?Mn(w[$]):yn(w[$]);O(null,ue,T,S,L,U,F,Y,K)}},b=(w,T,S,L,U,F,Y)=>{const K=T.el=w.el;let{patchFlag:H,dynamicChildren:$,dirs:ue}=T;H|=w.patchFlag&16;const J=w.props||qe,ae=T.props||qe;let fe;if(S&&Or(S,!1),(fe=ae.onVnodeBeforeUpdate)&&pn(fe,S,T,w),ue&&Pr(T,w,S,"beforeUpdate"),S&&Or(S,!0),(J.innerHTML&&ae.innerHTML==null||J.textContent&&ae.textContent==null)&&d(K,""),$?I(w.dynamicChildren,$,K,S,L,Sl(T,U),F):Y||Ae(w,T,K,null,S,L,Sl(T,U),F,!1),H>0){if(H&16)R(K,J,ae,S,U);else if(H&2&&J.class!==ae.class&&i(K,"class",null,ae.class,U),H&4&&i(K,"style",J.style,ae.style,U),H&8){const de=T.dynamicProps;for(let we=0;we<de.length;we++){const ke=de[we],Ye=J[ke],rt=ae[ke];(rt!==Ye||ke==="value")&&i(K,ke,Ye,rt,U,S)}}H&1&&w.children!==T.children&&d(K,T.children)}else!Y&&$==null&&R(K,J,ae,S,U);((fe=ae.onVnodeUpdated)||ue)&&$t(()=>{fe&&pn(fe,S,T,w),ue&&Pr(T,w,S,"updated")},L)},I=(w,T,S,L,U,F,Y)=>{for(let K=0;K<T.length;K++){const H=w[K],$=T[K],ue=H.el&&(H.type===ht||!ni(H,$)||H.shapeFlag&198)?f(H.el):S;O(H,$,ue,null,L,U,F,Y,!0)}},R=(w,T,S,L,U)=>{if(T!==S){if(T!==qe)for(const F in T)!pi(F)&&!(F in S)&&i(w,F,T[F],null,U,L);for(const F in S){if(pi(F))continue;const Y=S[F],K=T[F];Y!==K&&F!=="value"&&i(w,F,K,Y,U,L)}"value"in S&&i(w,"value",T.value,S.value,U)}},C=(w,T,S,L,U,F,Y,K,H)=>{const $=T.el=w?w.el:l(""),ue=T.anchor=w?w.anchor:l("");let{patchFlag:J,dynamicChildren:ae,slotScopeIds:fe}=T;fe&&(K=K?K.concat(fe):fe),w==null?(r($,S,L),r(ue,S,L),m(T.children||[],S,ue,U,F,Y,K,H)):J>0&&J&64&&ae&&w.dynamicChildren&&w.dynamicChildren.length===ae.length?(I(w.dynamicChildren,ae,S,U,F,Y,K),(T.key!=null||U&&T===U.subTree)&&im(w,T,!0)):Ae(w,T,S,ue,U,F,Y,K,H)},E=(w,T,S,L,U,F,Y,K,H)=>{T.slotScopeIds=K,w==null?T.shapeFlag&512?U.ctx.activate(T,S,L,Y,H):ot(T,S,L,U,F,Y,H):at(w,T,H)},ot=(w,T,S,L,U,F,Y)=>{const K=w.component=I0(w,L,U);if($p(w)&&(K.ctx.renderer=ie),A0(K,!1,Y),K.asyncDep){if(U&&U.registerDep(K,Pe,Y),!w.el){const H=K.subTree=he(Sn);q(null,H,T,S),w.placeholder=H.el}}else Pe(K,w,T,S,U,F,Y)},at=(w,T,S)=>{const L=T.component=w.component;if(a0(w,T,S))if(L.asyncDep&&!L.asyncResolved){Ee(L,T,S);return}else L.next=T,L.update();else T.el=w.el,L.vnode=T},Pe=(w,T,S,L,U,F,Y)=>{const K=()=>{if(w.isMounted){let{next:J,bu:ae,u:fe,parent:de,vnode:we}=w;{const Tt=om(w);if(Tt){J&&(J.el=we.el,Ee(w,J,Y)),Tt.asyncDep.then(()=>{$t(()=>{w.isUnmounted||$()},U)});return}}let ke=J,Ye;Or(w,!1),J?(J.el=we.el,Ee(w,J,Y)):J=we,ae&&Do(ae),(Ye=J.props&&J.props.onVnodeBeforeUpdate)&&pn(Ye,de,J,we),Or(w,!0);const rt=Qh(w),Yt=w.subTree;w.subTree=rt,O(Yt,rt,f(Yt.el),M(Yt),w,U,F),J.el=rt.el,ke===null&&l0(w,rt.el),fe&&$t(fe,U),(Ye=J.props&&J.props.onVnodeUpdated)&&$t(()=>pn(Ye,de,J,we),U)}else{let J;const{el:ae,props:fe}=T,{bm:de,m:we,parent:ke,root:Ye,type:rt}=w,Yt=ms(T);Or(w,!1),de&&Do(de),!Yt&&(J=fe&&fe.onVnodeBeforeMount)&&pn(J,ke,T),Or(w,!0);{Ye.ce&&Ye.ce._hasShadowRoot()&&Ye.ce._injectChildStyle(rt,w.parent?w.parent.type:void 0);const Tt=w.subTree=Qh(w);O(null,Tt,S,L,w,U,F),T.el=Tt.el}if(we&&$t(we,U),!Yt&&(J=fe&&fe.onVnodeMounted)){const Tt=T;$t(()=>pn(J,ke,Tt),U)}(T.shapeFlag&256||ke&&ms(ke.vnode)&&ke.vnode.shapeFlag&256)&&w.a&&$t(w.a,U),w.isMounted=!0,T=S=L=null}};w.scope.on();const H=w.effect=new mp(K);w.scope.off();const $=w.update=H.run.bind(H),ue=w.job=H.runIfDirty.bind(H);ue.i=w,ue.id=w.uid,H.scheduler=()=>Bc(ue),Or(w,!0),$()},Ee=(w,T,S)=>{T.component=w;const L=w.vnode.props;w.vnode=T,w.next=null,u0(w,T.props,L,S),p0(w,T.children,S),Hn(),Bh(w),Gn()},Ae=(w,T,S,L,U,F,Y,K,H=!1)=>{const $=w&&w.children,ue=w?w.shapeFlag:0,J=T.children,{patchFlag:ae,shapeFlag:fe}=T;if(ae>0){if(ae&128){re($,J,S,L,U,F,Y,K,H);return}else if(ae&256){ft($,J,S,L,U,F,Y,K,H);return}}fe&8?(ue&16&&De($,U,F),J!==$&&d(S,J)):ue&16?fe&16?re($,J,S,L,U,F,Y,K,H):De($,U,F,!0):(ue&8&&d(S,""),fe&16&&m(J,S,L,U,F,Y,K,H))},ft=(w,T,S,L,U,F,Y,K,H)=>{w=w||ds,T=T||ds;const $=w.length,ue=T.length,J=Math.min($,ue);let ae;for(ae=0;ae<J;ae++){const fe=T[ae]=H?Mn(T[ae]):yn(T[ae]);O(w[ae],fe,S,null,U,F,Y,K,H)}$>ue?De(w,U,F,!0,!1,J):m(T,S,L,U,F,Y,K,H,J)},re=(w,T,S,L,U,F,Y,K,H)=>{let $=0;const ue=T.length;let J=w.length-1,ae=ue-1;for(;$<=J&&$<=ae;){const fe=w[$],de=T[$]=H?Mn(T[$]):yn(T[$]);if(ni(fe,de))O(fe,de,S,null,U,F,Y,K,H);else break;$++}for(;$<=J&&$<=ae;){const fe=w[J],de=T[ae]=H?Mn(T[ae]):yn(T[ae]);if(ni(fe,de))O(fe,de,S,null,U,F,Y,K,H);else break;J--,ae--}if($>J){if($<=ae){const fe=ae+1,de=fe<ue?T[fe].el:L;for(;$<=ae;)O(null,T[$]=H?Mn(T[$]):yn(T[$]),S,de,U,F,Y,K,H),$++}}else if($>ae)for(;$<=J;)We(w[$],U,F,!0),$++;else{const fe=$,de=$,we=new Map;for($=de;$<=ae;$++){const pt=T[$]=H?Mn(T[$]):yn(T[$]);pt.key!=null&&we.set(pt.key,$)}let ke,Ye=0;const rt=ae-de+1;let Yt=!1,Tt=0;const er=new Array(rt);for($=0;$<rt;$++)er[$]=0;for($=fe;$<=J;$++){const pt=w[$];if(Ye>=rt){We(pt,U,F,!0);continue}let Jt;if(pt.key!=null)Jt=we.get(pt.key);else for(ke=de;ke<=ae;ke++)if(er[ke-de]===0&&ni(pt,T[ke])){Jt=ke;break}Jt===void 0?We(pt,U,F,!0):(er[Jt-de]=$+1,Jt>=Tt?Tt=Jt:Yt=!0,O(pt,T[Jt],S,null,U,F,Y,K,H),Ye++)}const Bs=Yt?y0(er):ds;for(ke=Bs.length-1,$=rt-1;$>=0;$--){const pt=de+$,Jt=T[pt],lo=T[pt+1],ts=pt+1<ue?lo.el||am(lo):L;er[$]===0?O(null,Jt,S,ts,U,F,Y,K,H):Yt&&(ke<0||$!==Bs[ke]?Nt(Jt,S,ts,2):ke--)}}},Nt=(w,T,S,L,U=null)=>{const{el:F,type:Y,transition:K,children:H,shapeFlag:$}=w;if($&6){Nt(w.component.subTree,T,S,L);return}if($&128){w.suspense.move(T,S,L);return}if($&64){Y.move(w,T,S,ie);return}if(Y===ht){r(F,T,S);for(let J=0;J<H.length;J++)Nt(H[J],T,S,L);r(w.anchor,T,S);return}if(Y===Cl){P(w,T,S);return}if(L!==2&&$&1&&K)if(L===0)K.persisted&&!F[Al]?r(F,T,S):(K.beforeEnter(F),r(F,T,S),$t(()=>K.enter(F),U));else{const{leave:J,delayLeave:ae,afterLeave:fe}=K,de=()=>{w.ctx.isUnmounted?s(F):r(F,T,S)},we=()=>{const ke=F._isLeaving||!!F[Al];F._isLeaving&&F[Al](!0),K.persisted&&!ke?de():J(F,()=>{de(),fe&&fe()})};ae?ae(F,de,we):we()}else r(F,T,S)},We=(w,T,S,L=!1,U=!1)=>{const{type:F,props:Y,ref:K,children:H,dynamicChildren:$,shapeFlag:ue,patchFlag:J,dirs:ae,cacheIndex:fe,memo:de}=w;if(J===-2&&(U=!1),K!=null&&(Hn(),_i(K,null,S,w,!0),Gn()),fe!=null&&(T.renderCache[fe]=void 0),ue&256){T.ctx.deactivate(w);return}const we=ue&1&&ae,ke=!ms(w);let Ye;if(ke&&(Ye=Y&&Y.onVnodeBeforeUnmount)&&pn(Ye,T,w),ue&6)Ue(w.component,S,L);else{if(ue&128){w.suspense.unmount(S,L);return}we&&Pr(w,null,T,"beforeUnmount"),ue&64?w.type.remove(w,T,S,ie,L):$&&!$.hasOnce&&(F!==ht||J>0&&J&64)?De($,T,S,!1,!0):(F===ht&&J&384||!U&&ue&16)&&De(H,T,S),L&&He(w)}const rt=de!=null&&fe==null;(ke&&(Ye=Y&&Y.onVnodeUnmounted)||we||rt)&&$t(()=>{Ye&&pn(Ye,T,w),we&&Pr(w,null,T,"unmounted"),rt&&(w.el=null)},S)},He=w=>{const{type:T,el:S,anchor:L,transition:U}=w;if(T===ht){Qt(S,L);return}if(T===Cl){j(w);return}const F=()=>{s(S),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(w.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:K}=U,H=()=>Y(S,F);K?K(w.el,F,H):H()}else F()},Qt=(w,T)=>{let S;for(;w!==T;)S=_(w),s(w),w=S;s(T)},Ue=(w,T,S)=>{const{bum:L,scope:U,job:F,subTree:Y,um:K,m:H,a:$}=w;Xh(H),Xh($),L&&Do(L),U.stop(),F&&(F.flags|=8,We(Y,w,T,S)),K&&$t(K,T),$t(()=>{w.isUnmounted=!0},T)},De=(w,T,S,L=!1,U=!1,F=0)=>{for(let Y=F;Y<w.length;Y++)We(w[Y],T,S,L,U)},M=w=>{if(w.shapeFlag&6)return M(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const T=_(w.anchor||w.el),S=T&&T[Dv];return S?_(S):T};let X=!1;const W=(w,T,S)=>{let L;w==null?T._vnode&&(We(T._vnode,null,null,!0),L=T._vnode.component):O(T._vnode||null,w,T,null,null,null,S),T._vnode=w,X||(X=!0,Bh(L),Dp(),X=!1)},ie={p:O,um:We,m:Nt,r:He,mt:ot,mc:m,pc:Ae,pbc:I,n:M,o:t};return{render:W,hydrate:void 0,createApp:t0(W)}}function Sl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function im(t,e,n=!1){const r=t.children,s=e.children;if(pe(r)&&pe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Mn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&im(o,l)),l.type===Ua&&(l.patchFlag===-1&&(l=s[i]=Mn(l)),l.el=o.el),l.type===Sn&&!l.el&&(l.el=o.el)}}function y0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function om(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:om(e)}function Xh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function am(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?am(e.subTree):null}const lm=t=>t.__isSuspense;function v0(t,e){e&&e.pendingBranch?pe(t)?e.effects.push(...t):e.effects.push(t):Pv(t)}const ht=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),Cl=Symbol.for("v-stc"),vi=[];let Wt=null;function le(t=!1){vi.push(Wt=t?null:[])}function w0(){vi.pop(),Wt=vi[vi.length-1]||null}let Pi=1;function na(t,e=!1){Pi+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function cm(t){return t.dynamicChildren=Pi>0?Wt||ds:null,w0(),Pi>0&&Wt&&Wt.push(t),t}function Ie(t,e,n,r,s,i){return cm(A(t,e,n,r,s,i,!0))}function Gt(t,e,n,r,s){return cm(he(t,e,n,r,s,!0))}function Oi(t){return t?t.__v_isVNode===!0:!1}function ni(t,e){return t.type===e.type&&t.key===e.key}const um=({key:t})=>t??null,Uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||nt(t)||be(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,r=0,s=null,i=t===ht?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&um(e),ref:e&&Uo(e),scopeId:Lp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return l?(Hc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),Pi>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const he=b0;function b0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Gv)&&(t=Sn),Oi(t)){const l=jr(t,e,!0);return n&&Hc(l,n),Pi>0&&!i&&Wt&&(l.shapeFlag&6?Wt[Wt.indexOf(t)]=l:Wt.push(l)),l.patchFlag=-2,l}if(x0(t)&&(t=t.__vccOpts),e){e=hm(e);let{class:l,style:c}=e;l&&!Xe(l)&&(e.class=zt(l)),Be(c)&&(Va(c)&&!pe(c)&&(c=bt({},c)),e.style=dr(c))}const o=Xe(t)?1:lm(t)?128:Mv(t)?64:Be(t)?4:be(t)?2:0;return A(t,e,n,r,s,o,i,!0)}function hm(t){return t?Va(t)||Zp(t)?bt({},t):t:null}function jr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Vs(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&um(u),ref:e&&e.ref?n&&i?pe(i)?i.concat(Uo(e)):[i,Uo(e)]:Uo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jr(t.ssContent),ssFallback:t.ssFallback&&jr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&jc(d,c.clone(d)),d}function Me(t=" ",e=0){return he(Ua,null,t,e)}function _t(t="",e=!1){return e?(le(),Gt(Sn,null,t)):he(Sn,null,t)}function yn(t){return t==null||typeof t=="boolean"?he(Sn):pe(t)?he(ht,null,t.slice()):Oi(t)?Mn(t):he(Ua,null,String(t))}function Mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jr(t)}function Hc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(pe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Hc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Zp(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else be(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[Me(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vs(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=zt([e.class,r.class]));else if(s==="style")e.style=dr([e.style,r.style]);else if(Ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(pe(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Sa(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function pn(t,e,n,r=null){hn(t,e,7,[n,r])}const E0=Kp();let T0=0;function I0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||E0,i={uid:T0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tm(r,s),emitsOptions:Qp(r,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:r.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=r0.bind(null,i),t.ce&&t.ce(i),i}let Ft=null;const dm=()=>Ft||Pt;let ra,ec;{const t=Oa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ra=e("__VUE_INSTANCE_SETTERS__",n=>Ft=n),ec=e("__VUE_SSR_SETTERS__",n=>Ni=n)}const Gi=t=>{const e=Ft;return ra(t),t.scope.on(),()=>{t.scope.off(),ra(e)}},Zh=()=>{Ft&&Ft.scope.off(),ra(null)};function fm(t){return t.vnode.shapeFlag&4}let Ni=!1;function A0(t,e=!1,n=!1){e&&ec(e);const{props:r,children:s}=t.vnode,i=fm(t);c0(t,r,i,e),f0(t,s,n||e);const o=i?R0(t,e):void 0;return e&&ec(!1),o}function R0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Kv);const{setup:r}=n;if(r){Hn();const s=t.setupContext=r.length>1?C0(t):null,i=Gi(t),o=Hi(r,t,0,[t.props,s]),l=ap(o);if(Gn(),i(),(l||t.sp)&&!ms(t)&&zp(t),l){if(o.then(Zh,Zh),e)return o.then(c=>{ed(t,c)}).catch(c=>{Da(c,t,0)});t.asyncDep=o}else ed(t,o)}else pm(t)}function ed(t,e,n){be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=Op(e)),pm(t)}function pm(t,e,n){const r=t.type;t.render||(t.render=r.render||bn);{const s=Gi(t);Hn();try{Qv(t)}finally{Gn(),s()}}}const S0={get(t,e){return Ct(t,"get",""),t[e]}};function C0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,S0),slots:t.slots,emit:t.emit,expose:e}}function za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Op(yv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}})):t.proxy}function x0(t){return be(t)&&"__vccOpts"in t}const kt=(t,e)=>Rv(t,e,Ni);function wi(t,e,n){try{na(-1);const r=arguments.length;return r===2?Be(e)&&!pe(e)?Oi(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Oi(n)&&(n=[n]),he(t,e,n))}finally{na(1)}}const k0="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tc;const td=typeof window<"u"&&window.trustedTypes;if(td)try{tc=td.createPolicy("vue",{createHTML:t=>t})}catch{}const mm=tc?t=>tc.createHTML(t):t=>t,P0="http://www.w3.org/2000/svg",O0="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,nd=Dn&&Dn.createElement("template"),N0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Dn.createElementNS(P0,t):e==="mathml"?Dn.createElementNS(O0,t):n?Dn.createElement(t,{is:n}):Dn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{nd.innerHTML=mm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=nd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},V0=Symbol("_vtc");function D0(t,e,n){const r=t[V0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rd=Symbol("_vod"),M0=Symbol("_vsh"),L0=Symbol(""),F0=/(?:^|;)\s*display\s*:/;function U0(t,e,n){const r=t.style,s=Xe(n);let i=!1;if(n&&!s){if(e)if(Xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ai(r,l,"")}else for(const o in e)n[o]==null&&ai(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?$0(t,o,!Xe(e)&&e?e[o]:void 0,l)||ai(r,o,l):ai(r,o,"")}}else if(s){if(e!==n){const o=r[L0];o&&(n+=";"+o),r.cssText=n,i=F0.test(n)}}else e&&t.removeAttribute("style");rd in t&&(t[rd]=i?r.display:"",t[M0]&&(r.display="none"))}const sd=/\s*!important$/;function ai(t,e,n){if(pe(n))n.forEach(r=>ai(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=z0(t,e);sd.test(n)?t.setProperty(Yr(r),n.replace(sd,""),"important"):t[r]=n}}const id=["Webkit","Moz","ms"],xl={};function z0(t,e){const n=xl[e];if(n)return n;let r=an(e);if(r!=="filter"&&r in t)return xl[e]=r;r=up(r);for(let s=0;s<id.length;s++){const i=id[s]+r;if(i in t)return xl[e]=i}return e}function $0(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Xe(r)&&n===r}const od="http://www.w3.org/1999/xlink";function ad(t,e,n,r,s,i=Qy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(od,e.slice(6,e.length)):t.setAttributeNS(od,e,n):n==null||i&&!dp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Kt(n)?String(n):n)}function ld(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=dp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Mr(t,e,n,r){t.addEventListener(e,n,r)}function B0(t,e,n,r){t.removeEventListener(e,n,r)}const cd=Symbol("_vei");function j0(t,e,n,r,s=null){const i=t[cd]||(t[cd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=q0(e);if(r){const u=i[e]=G0(r,s);Mr(t,l,u,c)}else o&&(B0(t,l,o,c),i[e]=void 0)}}const ud=/(?:Once|Passive|Capture)$/;function q0(t){let e;if(ud.test(t)){e={};let r;for(;r=t.match(ud);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yr(t.slice(2)),e]}let kl=0;const W0=Promise.resolve(),H0=()=>kl||(W0.then(()=>kl=0),kl=Date.now());function G0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(pe(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&hn(u,e,5,l)}}else hn(s,e,5,[r])};return n.value=t,n.attached=H0(),n}const hd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,K0=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?D0(t,r,o):e==="style"?U0(t,n,r):Ra(e)?Sa(e)||j0(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Q0(t,e,r,o))?(ld(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ad(t,e,r,o,i,e!=="value")):t._isVueCE&&(Y0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Xe(r)))?ld(t,an(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ad(t,e,r,o))};function Q0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&hd(e)&&be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hd(e)&&Xe(n)?!1:e in t}function Y0(t,e){const n=t._def.props;if(!n)return!1;const r=an(e);return Array.isArray(n)?n.some(s=>an(s)===r):Object.keys(n).some(s=>an(s)===r)}const sa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pe(e)?n=>Do(e,n):e};function J0(t){t.target.composing=!0}function dd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s=Symbol("_assign");function fd(t,e,n){return e&&(t=t.trim()),n&&(t=Pa(t)),t}const vn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_s]=sa(s);const i=r||s.props&&s.props.type==="number";Mr(t,e?"change":"input",o=>{o.target.composing||t[_s](fd(t.value,n,i))}),(n||i)&&Mr(t,"change",()=>{t.value=fd(t.value,n,i)}),e||(Mr(t,"compositionstart",J0),Mr(t,"compositionend",dd),Mr(t,"change",dd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[_s]=sa(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Pa(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},zo={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ca(e);Mr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pa(ia(o)):ia(o));t[_s](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,$c(()=>{t._assigning=!1})}),t[_s]=sa(r)},mounted(t,{value:e}){pd(t,e)},beforeUpdate(t,e,n){t[_s]=sa(n)},updated(t,{value:e}){t._assigning||pd(t,e)}};function pd(t,e){const n=t.multiple,r=pe(e);if(!(n&&!r&&!Ca(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=ia(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Jy(e,l)>-1}else o.selected=e.has(l);else if(Wi(ia(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ia(t){return"_value"in t?t._value:t.value}const X0=["ctrl","shift","alt","meta"],Z0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>X0.some(n=>t[`${n}Key`]&&!e.includes(n))},nc=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Z0[e[o]];if(l&&l(s,e))return}return t(s,...i)})},ew=bt({patchProp:K0},N0);let md;function tw(){return md||(md=m0(ew))}const nw=(...t)=>{const e=tw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sw(r);if(!s)return;const i=e._component;!be(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sw(t){return Xe(t)?document.querySelector(t):t}var gd={};/**
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
 */const gm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},iw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,f=(i&3)<<4|l>>4;let _=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(_=64)),r.push(n[d],n[f],n[_],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new ow;const _=i<<2|l>>4;if(r.push(_),u!==64){const v=l<<4&240|u>>2;if(r.push(v),f!==64){const k=u<<6&192|f;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ow extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aw=function(t){const e=gm(t);return _m.encodeByteArray(e,!0)},oa=function(t){return aw(t).replace(/\./g,"")},ym=function(t){try{return _m.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cw=()=>lw().__FIREBASE_DEFAULTS__,uw=()=>{if(typeof process>"u"||typeof gd>"u")return;const t=gd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ym(t[1]);return e&&JSON.parse(e)},$a=()=>{try{return cw()||uw()||hw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vm=t=>{var e,n;return(n=(e=$a())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wm=t=>{const e=vm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bm=()=>{var t;return(t=$a())===null||t===void 0?void 0:t.config},Em=t=>{var e;return(e=$a())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[oa(JSON.stringify(n)),oa(JSON.stringify(o)),""].join(".")}/**
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
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function mw(){var t;const e=(t=$a())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _w(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vw(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ww(){return!mw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ew(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Tw="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Tw,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Iw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new xn(s,l,r)}}function Iw(t,e){return t.replace(Aw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Aw=/\{\$([^}]+)}/g;function Rw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function aa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_d(i)&&_d(o)){if(!aa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _d(t){return t!==null&&typeof t=="object"}/**
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
 */function Qi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sw(t,e){const n=new Cw(t,e);return n.subscribe.bind(n)}class Cw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pl),s.error===void 0&&(s.error=Pl),s.complete===void 0&&(s.complete=Pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pl(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dr="[DEFAULT]";/**
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
 */class kw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ow(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pw(t){return t===Dr?void 0:t}function Ow(t){return t.instantiationMode==="EAGER"}/**
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
 */class Nw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const Vw={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Dw=Ce.INFO,Mw={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},Lw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Mw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gc{constructor(e){this.name=e,this._logLevel=Dw,this._logHandler=Lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const Fw=(t,e)=>e.some(n=>t instanceof n);let yd,vd;function Uw(){return yd||(yd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zw(){return vd||(vd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tm=new WeakMap,rc=new WeakMap,Im=new WeakMap,Ol=new WeakMap,Kc=new WeakMap;function $w(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tm.set(n,t)}).catch(()=>{}),Kc.set(e,t),e}function Bw(t){if(rc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});rc.set(t,e)}let sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jw(t){sc=t(sc)}function qw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nl(this),e,...n);return Im.set(r,e.sort?e.sort():[e]),mr(r)}:zw().includes(t)?function(...e){return t.apply(Nl(this),e),mr(Tm.get(this))}:function(...e){return mr(t.apply(Nl(this),e))}}function Ww(t){return typeof t=="function"?qw(t):(t instanceof IDBTransaction&&Bw(t),Fw(t,Uw())?new Proxy(t,sc):t)}function mr(t){if(t instanceof IDBRequest)return $w(t);if(Ol.has(t))return Ol.get(t);const e=Ww(t);return e!==t&&(Ol.set(t,e),Kc.set(e,t)),e}const Nl=t=>Kc.get(t);function Hw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=mr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(mr(o.result),c.oldVersion,c.newVersion,mr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Gw=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],Vl=new Map;function wd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Kw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Vl.set(e,i),i}jw(t=>({...t,get:(e,n,r)=>wd(e,n)||t.get(e,n,r),has:(e,n)=>!!wd(e,n)||t.has(e,n)}));/**
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
 */class Qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ic="@firebase/app",bd="0.10.13";/**
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
 */const Qn=new Gc("@firebase/app"),Jw="@firebase/app-compat",Xw="@firebase/analytics-compat",Zw="@firebase/analytics",eb="@firebase/app-check-compat",tb="@firebase/app-check",nb="@firebase/auth",rb="@firebase/auth-compat",sb="@firebase/database",ib="@firebase/data-connect",ob="@firebase/database-compat",ab="@firebase/functions",lb="@firebase/functions-compat",cb="@firebase/installations",ub="@firebase/installations-compat",hb="@firebase/messaging",db="@firebase/messaging-compat",fb="@firebase/performance",pb="@firebase/performance-compat",mb="@firebase/remote-config",gb="@firebase/remote-config-compat",_b="@firebase/storage",yb="@firebase/storage-compat",vb="@firebase/firestore",wb="@firebase/vertexai-preview",bb="@firebase/firestore-compat",Eb="firebase",Tb="10.14.1";/**
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
 */const oc="[DEFAULT]",Ib={[ic]:"fire-core",[Jw]:"fire-core-compat",[Zw]:"fire-analytics",[Xw]:"fire-analytics-compat",[tb]:"fire-app-check",[eb]:"fire-app-check-compat",[nb]:"fire-auth",[rb]:"fire-auth-compat",[sb]:"fire-rtdb",[ib]:"fire-data-connect",[ob]:"fire-rtdb-compat",[ab]:"fire-fn",[lb]:"fire-fn-compat",[cb]:"fire-iid",[ub]:"fire-iid-compat",[hb]:"fire-fcm",[db]:"fire-fcm-compat",[fb]:"fire-perf",[pb]:"fire-perf-compat",[mb]:"fire-rc",[gb]:"fire-rc-compat",[_b]:"fire-gcs",[yb]:"fire-gcs-compat",[vb]:"fire-fst",[bb]:"fire-fst-compat",[wb]:"fire-vertex","fire-js":"fire-js",[Eb]:"fire-js-all"};/**
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
 */const la=new Map,Ab=new Map,ac=new Map;function Ed(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qr(t){const e=t.name;if(ac.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,t);for(const n of la.values())Ed(n,t);for(const n of Ab.values())Ed(n,t);return!0}function Ba(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
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
 */const Rb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new Ki("app","Firebase",Rb);/**
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
 */class Sb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=Tb;function Am(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gr.create("bad-app-name",{appName:String(s)});if(n||(n=bm()),!n)throw gr.create("no-options");const i=la.get(s);if(i){if(aa(n,i.options)&&aa(r,i.config))return i;throw gr.create("duplicate-app",{appName:s})}const o=new Nw(s);for(const c of ac.values())o.addComponent(c);const l=new Sb(n,r,o);return la.set(s,l),l}function Qc(t=oc){const e=la.get(t);if(!e&&t===oc&&bm())return Am();if(!e)throw gr.create("no-app",{appName:t});return e}function En(t,e,n){var r;let s=(r=Ib[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(l.join(" "));return}qr(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Cb="firebase-heartbeat-database",xb=1,Vi="firebase-heartbeat-store";let Dl=null;function Rm(){return Dl||(Dl=Hw(Cb,xb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vi)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),Dl}async function kb(t){try{const n=(await Rm()).transaction(Vi),r=await n.objectStore(Vi).get(Sm(t));return await n.done,r}catch(e){if(e instanceof xn)Qn.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Td(t,e){try{const r=(await Rm()).transaction(Vi,"readwrite");await r.objectStore(Vi).put(e,Sm(t)),await r.done}catch(n){if(n instanceof xn)Qn.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function Sm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pb=1024,Ob=30*24*60*60*1e3;class Nb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Db(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Id();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Ob}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Id(),{heartbeatsToSend:r,unsentEntries:s}=Vb(this._heartbeatsCache.heartbeats),i=oa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function Id(){return new Date().toISOString().substring(0,10)}function Vb(t,e=Pb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ad(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ad(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Db{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bw()?Ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ad(t){return oa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Mb(t){qr(new yr("platform-logger",e=>new Qw(e),"PRIVATE")),qr(new yr("heartbeat",e=>new Nb(e),"PRIVATE")),En(ic,bd,t),En(ic,bd,"esm2017"),En("fire-js","")}Mb("");var Lb="firebase",Fb="10.14.1";/**
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
 */En(Lb,Fb,"app");var Rd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,Cm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,m){function b(){}b.prototype=m.prototype,g.D=m.prototype,g.prototype=new b,g.prototype.constructor=g,g.C=function(I,R,C){for(var E=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)E[ot-2]=arguments[ot];return m.prototype[R].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(g,m,b){b||(b=0);var I=Array(16);if(typeof m=="string")for(var R=0;16>R;++R)I[R]=m.charCodeAt(b++)|m.charCodeAt(b++)<<8|m.charCodeAt(b++)<<16|m.charCodeAt(b++)<<24;else for(R=0;16>R;++R)I[R]=m[b++]|m[b++]<<8|m[b++]<<16|m[b++]<<24;m=g.g[0],b=g.g[1],R=g.g[2];var C=g.g[3],E=m+(C^b&(R^C))+I[0]+3614090360&4294967295;m=b+(E<<7&4294967295|E>>>25),E=C+(R^m&(b^R))+I[1]+3905402710&4294967295,C=m+(E<<12&4294967295|E>>>20),E=R+(b^C&(m^b))+I[2]+606105819&4294967295,R=C+(E<<17&4294967295|E>>>15),E=b+(m^R&(C^m))+I[3]+3250441966&4294967295,b=R+(E<<22&4294967295|E>>>10),E=m+(C^b&(R^C))+I[4]+4118548399&4294967295,m=b+(E<<7&4294967295|E>>>25),E=C+(R^m&(b^R))+I[5]+1200080426&4294967295,C=m+(E<<12&4294967295|E>>>20),E=R+(b^C&(m^b))+I[6]+2821735955&4294967295,R=C+(E<<17&4294967295|E>>>15),E=b+(m^R&(C^m))+I[7]+4249261313&4294967295,b=R+(E<<22&4294967295|E>>>10),E=m+(C^b&(R^C))+I[8]+1770035416&4294967295,m=b+(E<<7&4294967295|E>>>25),E=C+(R^m&(b^R))+I[9]+2336552879&4294967295,C=m+(E<<12&4294967295|E>>>20),E=R+(b^C&(m^b))+I[10]+4294925233&4294967295,R=C+(E<<17&4294967295|E>>>15),E=b+(m^R&(C^m))+I[11]+2304563134&4294967295,b=R+(E<<22&4294967295|E>>>10),E=m+(C^b&(R^C))+I[12]+1804603682&4294967295,m=b+(E<<7&4294967295|E>>>25),E=C+(R^m&(b^R))+I[13]+4254626195&4294967295,C=m+(E<<12&4294967295|E>>>20),E=R+(b^C&(m^b))+I[14]+2792965006&4294967295,R=C+(E<<17&4294967295|E>>>15),E=b+(m^R&(C^m))+I[15]+1236535329&4294967295,b=R+(E<<22&4294967295|E>>>10),E=m+(R^C&(b^R))+I[1]+4129170786&4294967295,m=b+(E<<5&4294967295|E>>>27),E=C+(b^R&(m^b))+I[6]+3225465664&4294967295,C=m+(E<<9&4294967295|E>>>23),E=R+(m^b&(C^m))+I[11]+643717713&4294967295,R=C+(E<<14&4294967295|E>>>18),E=b+(C^m&(R^C))+I[0]+3921069994&4294967295,b=R+(E<<20&4294967295|E>>>12),E=m+(R^C&(b^R))+I[5]+3593408605&4294967295,m=b+(E<<5&4294967295|E>>>27),E=C+(b^R&(m^b))+I[10]+38016083&4294967295,C=m+(E<<9&4294967295|E>>>23),E=R+(m^b&(C^m))+I[15]+3634488961&4294967295,R=C+(E<<14&4294967295|E>>>18),E=b+(C^m&(R^C))+I[4]+3889429448&4294967295,b=R+(E<<20&4294967295|E>>>12),E=m+(R^C&(b^R))+I[9]+568446438&4294967295,m=b+(E<<5&4294967295|E>>>27),E=C+(b^R&(m^b))+I[14]+3275163606&4294967295,C=m+(E<<9&4294967295|E>>>23),E=R+(m^b&(C^m))+I[3]+4107603335&4294967295,R=C+(E<<14&4294967295|E>>>18),E=b+(C^m&(R^C))+I[8]+1163531501&4294967295,b=R+(E<<20&4294967295|E>>>12),E=m+(R^C&(b^R))+I[13]+2850285829&4294967295,m=b+(E<<5&4294967295|E>>>27),E=C+(b^R&(m^b))+I[2]+4243563512&4294967295,C=m+(E<<9&4294967295|E>>>23),E=R+(m^b&(C^m))+I[7]+1735328473&4294967295,R=C+(E<<14&4294967295|E>>>18),E=b+(C^m&(R^C))+I[12]+2368359562&4294967295,b=R+(E<<20&4294967295|E>>>12),E=m+(b^R^C)+I[5]+4294588738&4294967295,m=b+(E<<4&4294967295|E>>>28),E=C+(m^b^R)+I[8]+2272392833&4294967295,C=m+(E<<11&4294967295|E>>>21),E=R+(C^m^b)+I[11]+1839030562&4294967295,R=C+(E<<16&4294967295|E>>>16),E=b+(R^C^m)+I[14]+4259657740&4294967295,b=R+(E<<23&4294967295|E>>>9),E=m+(b^R^C)+I[1]+2763975236&4294967295,m=b+(E<<4&4294967295|E>>>28),E=C+(m^b^R)+I[4]+1272893353&4294967295,C=m+(E<<11&4294967295|E>>>21),E=R+(C^m^b)+I[7]+4139469664&4294967295,R=C+(E<<16&4294967295|E>>>16),E=b+(R^C^m)+I[10]+3200236656&4294967295,b=R+(E<<23&4294967295|E>>>9),E=m+(b^R^C)+I[13]+681279174&4294967295,m=b+(E<<4&4294967295|E>>>28),E=C+(m^b^R)+I[0]+3936430074&4294967295,C=m+(E<<11&4294967295|E>>>21),E=R+(C^m^b)+I[3]+3572445317&4294967295,R=C+(E<<16&4294967295|E>>>16),E=b+(R^C^m)+I[6]+76029189&4294967295,b=R+(E<<23&4294967295|E>>>9),E=m+(b^R^C)+I[9]+3654602809&4294967295,m=b+(E<<4&4294967295|E>>>28),E=C+(m^b^R)+I[12]+3873151461&4294967295,C=m+(E<<11&4294967295|E>>>21),E=R+(C^m^b)+I[15]+530742520&4294967295,R=C+(E<<16&4294967295|E>>>16),E=b+(R^C^m)+I[2]+3299628645&4294967295,b=R+(E<<23&4294967295|E>>>9),E=m+(R^(b|~C))+I[0]+4096336452&4294967295,m=b+(E<<6&4294967295|E>>>26),E=C+(b^(m|~R))+I[7]+1126891415&4294967295,C=m+(E<<10&4294967295|E>>>22),E=R+(m^(C|~b))+I[14]+2878612391&4294967295,R=C+(E<<15&4294967295|E>>>17),E=b+(C^(R|~m))+I[5]+4237533241&4294967295,b=R+(E<<21&4294967295|E>>>11),E=m+(R^(b|~C))+I[12]+1700485571&4294967295,m=b+(E<<6&4294967295|E>>>26),E=C+(b^(m|~R))+I[3]+2399980690&4294967295,C=m+(E<<10&4294967295|E>>>22),E=R+(m^(C|~b))+I[10]+4293915773&4294967295,R=C+(E<<15&4294967295|E>>>17),E=b+(C^(R|~m))+I[1]+2240044497&4294967295,b=R+(E<<21&4294967295|E>>>11),E=m+(R^(b|~C))+I[8]+1873313359&4294967295,m=b+(E<<6&4294967295|E>>>26),E=C+(b^(m|~R))+I[15]+4264355552&4294967295,C=m+(E<<10&4294967295|E>>>22),E=R+(m^(C|~b))+I[6]+2734768916&4294967295,R=C+(E<<15&4294967295|E>>>17),E=b+(C^(R|~m))+I[13]+1309151649&4294967295,b=R+(E<<21&4294967295|E>>>11),E=m+(R^(b|~C))+I[4]+4149444226&4294967295,m=b+(E<<6&4294967295|E>>>26),E=C+(b^(m|~R))+I[11]+3174756917&4294967295,C=m+(E<<10&4294967295|E>>>22),E=R+(m^(C|~b))+I[2]+718787259&4294967295,R=C+(E<<15&4294967295|E>>>17),E=b+(C^(R|~m))+I[9]+3951481745&4294967295,g.g[0]=g.g[0]+m&4294967295,g.g[1]=g.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,g.g[2]=g.g[2]+R&4294967295,g.g[3]=g.g[3]+C&4294967295}r.prototype.u=function(g,m){m===void 0&&(m=g.length);for(var b=m-this.blockSize,I=this.B,R=this.h,C=0;C<m;){if(R==0)for(;C<=b;)s(this,g,C),C+=this.blockSize;if(typeof g=="string"){for(;C<m;)if(I[R++]=g.charCodeAt(C++),R==this.blockSize){s(this,I),R=0;break}}else for(;C<m;)if(I[R++]=g[C++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=m},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var m=1;m<g.length-8;++m)g[m]=0;var b=8*this.o;for(m=g.length-8;m<g.length;++m)g[m]=b&255,b/=256;for(this.u(g),g=Array(16),m=b=0;4>m;++m)for(var I=0;32>I;I+=8)g[b++]=this.g[m]>>>I&255;return g};function i(g,m){var b=l;return Object.prototype.hasOwnProperty.call(b,g)?b[g]:b[g]=m(g)}function o(g,m){this.h=m;for(var b=[],I=!0,R=g.length-1;0<=R;R--){var C=g[R]|0;I&&C==m||(b[R]=C,I=!1)}this.g=b}var l={};function c(g){return-128<=g&&128>g?i(g,function(m){return new o([m|0],0>m?-1:0)}):new o([g|0],0>g?-1:0)}function u(g){if(isNaN(g)||!isFinite(g))return f;if(0>g)return V(u(-g));for(var m=[],b=1,I=0;g>=b;I++)m[I]=g/b|0,b*=4294967296;return new o(m,0)}function d(g,m){if(g.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(g.charAt(0)=="-")return V(d(g.substring(1),m));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(m,8)),I=f,R=0;R<g.length;R+=8){var C=Math.min(8,g.length-R),E=parseInt(g.substring(R,R+C),m);8>C?(C=u(Math.pow(m,C)),I=I.j(C).add(u(E))):(I=I.j(b),I=I.add(u(E)))}return I}var f=c(0),_=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-V(this).m();for(var g=0,m=1,b=0;b<this.g.length;b++){var I=this.i(b);g+=(0<=I?I:4294967296+I)*m,m*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(k(this))return"0";if(O(this))return"-"+V(this).toString(g);for(var m=u(Math.pow(g,6)),b=this,I="";;){var R=j(b,m).g;b=q(b,R.j(m));var C=((0<b.g.length?b.g[0]:b.h)>>>0).toString(g);if(b=R,k(b))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function k(g){if(g.h!=0)return!1;for(var m=0;m<g.g.length;m++)if(g.g[m]!=0)return!1;return!0}function O(g){return g.h==-1}t.l=function(g){return g=q(this,g),O(g)?-1:k(g)?0:1};function V(g){for(var m=g.g.length,b=[],I=0;I<m;I++)b[I]=~g.g[I];return new o(b,~g.h).add(_)}t.abs=function(){return O(this)?V(this):this},t.add=function(g){for(var m=Math.max(this.g.length,g.g.length),b=[],I=0,R=0;R<=m;R++){var C=I+(this.i(R)&65535)+(g.i(R)&65535),E=(C>>>16)+(this.i(R)>>>16)+(g.i(R)>>>16);I=E>>>16,C&=65535,E&=65535,b[R]=E<<16|C}return new o(b,b[b.length-1]&-2147483648?-1:0)};function q(g,m){return g.add(V(m))}t.j=function(g){if(k(this)||k(g))return f;if(O(this))return O(g)?V(this).j(V(g)):V(V(this).j(g));if(O(g))return V(this.j(V(g)));if(0>this.l(v)&&0>g.l(v))return u(this.m()*g.m());for(var m=this.g.length+g.g.length,b=[],I=0;I<2*m;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<g.g.length;R++){var C=this.i(I)>>>16,E=this.i(I)&65535,ot=g.i(R)>>>16,at=g.i(R)&65535;b[2*I+2*R]+=E*at,N(b,2*I+2*R),b[2*I+2*R+1]+=C*at,N(b,2*I+2*R+1),b[2*I+2*R+1]+=E*ot,N(b,2*I+2*R+1),b[2*I+2*R+2]+=C*ot,N(b,2*I+2*R+2)}for(I=0;I<m;I++)b[I]=b[2*I+1]<<16|b[2*I];for(I=m;I<2*m;I++)b[I]=0;return new o(b,0)};function N(g,m){for(;(g[m]&65535)!=g[m];)g[m+1]+=g[m]>>>16,g[m]&=65535,m++}function P(g,m){this.g=g,this.h=m}function j(g,m){if(k(m))throw Error("division by zero");if(k(g))return new P(f,f);if(O(g))return m=j(V(g),m),new P(V(m.g),V(m.h));if(O(m))return m=j(g,V(m)),new P(V(m.g),m.h);if(30<g.g.length){if(O(g)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var b=_,I=m;0>=I.l(g);)b=te(b),I=te(I);var R=G(b,1),C=G(I,1);for(I=G(I,2),b=G(b,2);!k(I);){var E=C.add(I);0>=E.l(g)&&(R=R.add(b),C=E),I=G(I,1),b=G(b,1)}return m=q(g,R.j(m)),new P(R,m)}for(R=f;0<=g.l(m);){for(b=Math.max(1,Math.floor(g.m()/m.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=u(b),E=C.j(m);O(E)||0<E.l(g);)b-=I,C=u(b),E=C.j(m);k(C)&&(C=_),R=R.add(C),g=q(g,E)}return new P(R,g)}t.A=function(g){return j(this,g).h},t.and=function(g){for(var m=Math.max(this.g.length,g.g.length),b=[],I=0;I<m;I++)b[I]=this.i(I)&g.i(I);return new o(b,this.h&g.h)},t.or=function(g){for(var m=Math.max(this.g.length,g.g.length),b=[],I=0;I<m;I++)b[I]=this.i(I)|g.i(I);return new o(b,this.h|g.h)},t.xor=function(g){for(var m=Math.max(this.g.length,g.g.length),b=[],I=0;I<m;I++)b[I]=this.i(I)^g.i(I);return new o(b,this.h^g.h)};function te(g){for(var m=g.g.length+1,b=[],I=0;I<m;I++)b[I]=g.i(I)<<1|g.i(I-1)>>>31;return new o(b,g.h)}function G(g,m){var b=m>>5;m%=32;for(var I=g.g.length-b,R=[],C=0;C<I;C++)R[C]=0<m?g.i(C+b)>>>m|g.i(C+b+1)<<32-m:g.i(C+b);return new o(R,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Br=o}).apply(typeof Rd<"u"?Rd:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xm,ui,km,$o,lc,Pm,Om,Nm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var x=a[y];if(!(x in p))break e;p=p[x]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,y=!1,x={next:function(){if(!y&&p<a.length){var D=p++;return{value:h(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,y),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function _(a,h,p){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,_.apply(null,arguments)}function v(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function k(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,x,D){for(var Q=Array(arguments.length-2),je=2;je<arguments.length;je++)Q[je-2]=arguments[je];return h.prototype[x].apply(y,Q)}}function O(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function V(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(c(y)){const x=a.length||0,D=y.length||0;a.length=x+D;for(let Q=0;Q<D;Q++)a[x+Q]=y[Q]}else a.push(y)}}class q{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){return/^[\s\xa0]*$/.test(a)}function P(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var te=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function G(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function g(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function m(a){const h={};for(const p in a)h[p]=a[p];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(p in y)a[p]=y[p];for(let D=0;D<b.length;D++)p=b[D],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function R(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function C(a){l.setTimeout(()=>{throw a},0)}function E(){var a=ft;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ot{constructor(){this.h=this.g=null}add(h,p){const y=at.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var at=new q(()=>new Pe,a=>a.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,Ae=!1,ft=new ot,re=()=>{const a=l.Promise.resolve(void 0);Ee=()=>{a.then(Nt)}};var Nt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(p){C(p)}var h=at;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ae=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Ue(a,h){if(He.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(te){e:{try{j(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:De[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ue.aa.h.call(this)}}k(Ue,He);var De={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),X=0;function W(a,h,p,y,x){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=x,this.key=++X,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _e(a){this.src=a,this.g={},this.h=0}_e.prototype.add=function(a,h,p,y,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var Q=T(a,h,y,x);return-1<Q?(h=a[Q],p||(h.fa=!1)):(h=new W(h,this.src,D,!!y,x),h.fa=p,a.push(h)),h};function w(a,h){var p=h.type;if(p in a.g){var y=a.g[p],x=Array.prototype.indexOf.call(y,h,void 0),D;(D=0<=x)&&Array.prototype.splice.call(y,x,1),D&&(ie(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function T(a,h,p,y){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==y)return x}return-1}var S="closure_lm_"+(1e6*Math.random()|0),L={};function U(a,h,p,y,x){if(Array.isArray(h)){for(var D=0;D<h.length;D++)U(a,h[D],p,y,x);return null}return p=fe(p),a&&a[M]?a.K(h,p,u(y)?!!y.capture:!1,x):F(a,h,p,!1,y,x)}function F(a,h,p,y,x,D){if(!h)throw Error("Invalid event type");var Q=u(x)?!!x.capture:!!x,je=J(a);if(je||(a[S]=je=new _e(a)),p=je.add(h,p,y,Q,D),p.proxy)return p;if(y=Y(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)Qt||(x=Q),x===void 0&&(x=!1),a.addEventListener(h.toString(),y,x);else if(a.attachEvent)a.attachEvent($(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Y(){function a(p){return h.call(a.src,a.listener,p)}const h=ue;return a}function K(a,h,p,y,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)K(a,h[D],p,y,x);else y=u(y)?!!y.capture:!!y,p=fe(p),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],p=T(D,p,y,x),-1<p&&(ie(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,p,y,x)),(p=-1<a?h[a]:null)&&H(p))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])w(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent($(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=J(h))?(w(p,a),p.h==0&&(p.src=null,h[S]=null)):ie(a)}}}function $(a){return a in L?L[a]:L[a]="on"+a}function ue(a,h){if(a.da)a=!0;else{h=new Ue(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&H(a),a=p.call(y,h)}return a}function J(a){return a=a[S],a instanceof _e?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(h){return a.handleEvent(h)}),a[ae])}function de(){We.call(this),this.i=new _e(this),this.M=this,this.F=null}k(de,We),de.prototype[M]=!0,de.prototype.removeEventListener=function(a,h,p,y){K(this,a,h,p,y)};function we(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new He(h,a);else if(h instanceof He)h.target=h.target||a;else{var x=h;h=new He(y,a),I(h,x)}if(x=!0,p)for(var D=p.length-1;0<=D;D--){var Q=h.g=p[D];x=ke(Q,y,!0,h)&&x}if(Q=h.g=a,x=ke(Q,y,!0,h)&&x,x=ke(Q,y,!1,h)&&x,p)for(D=0;D<p.length;D++)Q=h.g=p[D],x=ke(Q,y,!1,h)&&x}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)ie(p[y]);delete a.g[h],a.h--}}this.F=null},de.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},de.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function ke(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,D=0;D<h.length;++D){var Q=h[D];if(Q&&!Q.da&&Q.capture==p){var je=Q.listener,mt=Q.ha||Q.src;Q.fa&&w(a.i,Q),x=je.call(mt,y)!==!1&&x}}return x&&!y.defaultPrevented}function Ye(a,h,p){if(typeof a=="function")p&&(a=_(a,p));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function rt(a){a.g=Ye(()=>{a.g=null,a.i&&(a.i=!1,rt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Yt extends We{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(a){We.call(this),this.h=a,this.g={}}k(Tt,We);var er=[];function Bs(a){G(a.g,function(h,p){this.g.hasOwnProperty(p)&&H(h)},a),a.g={}}Tt.prototype.N=function(){Tt.aa.N.call(this),Bs(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pt=l.JSON.stringify,Jt=l.JSON.parse,lo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ts(){}ts.prototype.h=null;function Hu(a){return a.h||(a.h=a.i())}function Gu(){}var js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ol(){He.call(this,"d")}k(ol,He);function al(){He.call(this,"c")}k(al,He);var Sr={},Ku=null;function co(){return Ku=Ku||new de}Sr.La="serverreachability";function Qu(a){He.call(this,Sr.La,a)}k(Qu,He);function qs(a){const h=co();we(h,new Qu(h))}Sr.STAT_EVENT="statevent";function Yu(a,h){He.call(this,Sr.STAT_EVENT,a),this.stat=h}k(Yu,He);function Vt(a){const h=co();we(h,new Yu(h,a))}Sr.Ma="timingevent";function Ju(a,h){He.call(this,Sr.Ma,a),this.size=h}k(Ju,He);function Ws(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Hs(){this.g=!0}Hs.prototype.xa=function(){this.g=!1};function gy(a,h,p,y,x,D){a.info(function(){if(a.g)if(D)for(var Q="",je=D.split("&"),mt=0;mt<je.length;mt++){var Oe=je[mt].split("=");if(1<Oe.length){var It=Oe[0];Oe=Oe[1];var At=It.split("_");Q=2<=At.length&&At[1]=="type"?Q+(It+"="+Oe+"&"):Q+(It+"=redacted&")}}else Q=null;else Q=D;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+h+`
`+p+`
`+Q})}function _y(a,h,p,y,x,D,Q){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+h+`
`+p+`
`+D+" "+Q})}function ns(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+vy(a,p)+(y?" "+y:"")})}function yy(a,h){a.info(function(){return"TIMEOUT: "+h})}Hs.prototype.info=function(){};function vy(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var x=y[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var Q=1;Q<x.length;Q++)x[Q]=""}}}}return pt(p)}catch{return h}}var uo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ll;function ho(){}k(ho,ts),ho.prototype.g=function(){return new XMLHttpRequest},ho.prototype.i=function(){return{}},ll=new ho;function tr(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new Tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var eh={},cl={};function ul(a,h,p){a.L=1,a.v=go(kn(h)),a.m=p,a.P=!0,th(a,null)}function th(a,h){a.F=Date.now(),fo(a),a.A=kn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),mh(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Zu,a.g=Nh(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Yt(_(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(er[0]=x.toString()),x=er);for(var D=0;D<x.length;D++){var Q=U(p,x[D],y||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),qs(),gy(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Pn(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const At=Pn(this.g);var h=this.g.Ba();const is=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Eh(this.g)))){this.J||At!=4||h==7||(h==8||0>=is?qs(3):qs(2)),hl(this);var p=this.g.Z();this.X=p;t:if(nh(this)){var y=Eh(this.g);a="";var x=y.length,D=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Gs(this);var Q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(D&&h==x-1)});y.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=p==200,_y(this.i,this.u,this.A,this.l,this.R,At,p),this.o){if(this.T&&!this.K){t:{if(this.g){var je,mt=this.g;if((je=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(je)){var Oe=je;break t}}Oe=null}if(p=Oe)ns(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dl(this,p);else{this.o=!1,this.s=3,Vt(12),Cr(this),Gs(this);break e}}if(this.P){p=!0;let rn;for(;!this.J&&this.C<Q.length;)if(rn=wy(this,Q),rn==cl){At==4&&(this.s=4,Vt(14),p=!1),ns(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==eh){this.s=4,Vt(15),ns(this.i,this.l,Q,"[Invalid Chunk]"),p=!1;break}else ns(this.i,this.l,rn,null),dl(this,rn);if(nh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||Q.length!=0||this.h.h||(this.s=1,Vt(16),p=!1),this.o=this.o&&p,!p)ns(this.i,this.l,Q,"[Invalid Chunked Response]"),Cr(this),Gs(this);else if(0<Q.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),yl(It),It.M=!0,Vt(11))}}else ns(this.i,this.l,Q,null),dl(this,Q);At==4&&Cr(this),this.o&&!this.J&&(At==4?xh(this.j,this):(this.o=!1,fo(this)))}else Ly(this.g),p==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),Cr(this),Gs(this)}}}catch{}finally{}};function nh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function wy(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?cl:(p=Number(h.substring(p,y)),isNaN(p)?eh:(y+=1,y+p>h.length?cl:(h=h.slice(y,y+p),a.C=y+p,h)))}tr.prototype.cancel=function(){this.J=!0,Cr(this)};function fo(a){a.S=Date.now()+a.I,rh(a,a.I)}function rh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ws(_(a.ba,a),h)}function hl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(yy(this.i,this.A),this.L!=2&&(qs(),Vt(17)),Cr(this),this.s=2,Gs(this)):rh(this,this.S-a)};function Gs(a){a.j.G==0||a.J||xh(a.j,a)}function Cr(a){hl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Bs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function dl(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||fl(p.h,a))){if(!a.K&&fl(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Eo(p),wo(p);else break e;_l(p),Vt(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ws(_(p.Za,p),6e3));if(1>=oh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else kr(p,11)}else if((a.K||p.g==a)&&Eo(p),!N(h))for(x=p.Da.g.parse(h),h=0;h<x.length;h++){let Oe=x[h];if(p.T=Oe[0],Oe=Oe[1],p.G==2)if(Oe[0]=="c"){p.K=Oe[1],p.ia=Oe[2];const It=Oe[3];It!=null&&(p.la=It,p.j.info("VER="+p.la));const At=Oe[4];At!=null&&(p.Aa=At,p.j.info("SVER="+p.Aa));const is=Oe[5];is!=null&&typeof is=="number"&&0<is&&(y=1.5*is,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const rn=a.g;if(rn){const Io=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var D=y.h;D.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(pl(D,D.h),D.h=null))}if(y.D){const vl=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;vl&&(y.ya=vl,Ke(y.I,y.D,vl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var Q=a;if(y.qa=Oh(y,y.J?y.ia:null,y.W),Q.K){ah(y.h,Q);var je=Q,mt=y.L;mt&&(je.I=mt),je.B&&(hl(je),fo(je)),y.g=Q}else Sh(y);0<p.i.length&&bo(p)}else Oe[0]!="stop"&&Oe[0]!="close"||kr(p,7);else p.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?kr(p,7):gl(p):Oe[0]!="noop"&&p.l&&p.l.ta(Oe),p.v=0)}}qs(4)}catch{}}var by=class{constructor(a,h){this.g=a,this.map=h}};function sh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ih(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function oh(a){return a.h?1:a.g?a.g.size:0}function fl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function pl(a,h){a.g?a.g.add(h):a.h=h}function ah(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}sh.prototype.cancel=function(){if(this.i=lh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return O(a.i)}function Ey(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function Ty(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function ch(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=Ty(a),y=Ey(a),x=y.length,D=0;D<x;D++)h.call(void 0,y[D],p&&p[D],a)}var uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Iy(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),x=null;if(0<=y){var D=a[p].substring(0,y);x=a[p].substring(y+1)}else D=a[p];h(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,po(this,a.j),this.o=a.o,this.g=a.g,mo(this,a.s),this.l=a.l;var h=a.i,p=new Ys;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),hh(this,p),this.m=a.m}else a&&(h=String(a).match(uh))?(this.h=!1,po(this,h[1]||"",!0),this.o=Ks(h[2]||""),this.g=Ks(h[3]||"",!0),mo(this,h[4]),this.l=Ks(h[5]||"",!0),hh(this,h[6]||"",!0),this.m=Ks(h[7]||"")):(this.h=!1,this.i=new Ys(null,this.h))}xr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Qs(h,dh,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qs(h,dh,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Qs(p,p.charAt(0)=="/"?Sy:Ry,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Qs(p,xy)),a.join("")};function kn(a){return new xr(a)}function po(a,h,p){a.j=p?Ks(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function mo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function hh(a,h,p){h instanceof Ys?(a.i=h,ky(a.i,a.h)):(p||(h=Qs(h,Cy)),a.i=new Ys(h,a.h))}function Ke(a,h,p){a.i.set(h,p)}function go(a){return Ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ks(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Ay),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ay(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dh=/[#\/\?@]/g,Ry=/[#\?:]/g,Sy=/[#\?]/g,Cy=/[#\?@]/g,xy=/#/g;function Ys(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&Iy(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ys.prototype,t.add=function(a,h){nr(this),this.i=null,a=rs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function fh(a,h){nr(a),h=rs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ph(a,h){return nr(a),h=rs(a,h),a.g.has(h)}t.forEach=function(a,h){nr(this),this.g.forEach(function(p,y){p.forEach(function(x){a.call(h,x,y,this)},this)},this)},t.na=function(){nr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const x=a[y];for(let D=0;D<x.length;D++)p.push(h[y])}return p},t.V=function(a){nr(this);let h=[];if(typeof a=="string")ph(this,a)&&(h=h.concat(this.g.get(rs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return nr(this),this.i=null,a=rs(this,a),ph(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function mh(a,h,p){fh(a,h),0<p.length&&(a.i=null,a.g.set(rs(a,h),O(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const D=encodeURIComponent(String(y)),Q=this.V(y);for(y=0;y<Q.length;y++){var x=D;Q[y]!==""&&(x+="="+encodeURIComponent(String(Q[y]))),a.push(x)}}return this.i=a.join("&")};function rs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ky(a,h){h&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(p,y){var x=y.toLowerCase();y!=x&&(fh(this,y),mh(this,x,p))},a)),a.j=h}function Py(a,h){const p=new Hs;if(l.Image){const y=new Image;y.onload=v(rr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=v(rr,p,"TestLoadImage: error",!1,h,y),y.onabort=v(rr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(rr,p,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Oy(a,h){const p=new Hs,y=new AbortController,x=setTimeout(()=>{y.abort(),rr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(x),D.ok?rr(p,"TestPingServer: ok",!0,h):rr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),rr(p,"TestPingServer: error",!1,h)})}function rr(a,h,p,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(p)}catch{}}function Ny(){this.g=new lo}function Vy(a,h,p){const y=p||"";try{ch(a,function(x,D){let Q=x;u(x)&&(Q=pt(x)),h.push(y+D+"="+encodeURIComponent(Q))})}catch(x){throw h.push(y+"type="+encodeURIComponent("_badmap")),x}}function _o(a){this.l=a.Ub||null,this.j=a.eb||!1}k(_o,ts),_o.prototype.g=function(){return new yo(this.l,this.j)},_o.prototype.i=function(a){return function(){return a}}({});function yo(a,h){de.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(yo,de),t=yo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Js(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Js(this):Xs(this),this.readyState==3&&gh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Js(this))},t.Qa=function(a){this.g&&(this.response=a,Js(this))},t.ga=function(){this.g&&Js(this)};function Js(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _h(a){let h="";return G(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function ml(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=_h(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ke(a,h,p))}function et(a){de.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(et,de);var Dy=/^https?$/i,My=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ll.g(),this.v=this.o?Hu(this.o):Hu(ll),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){yh(this,D);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)p.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())p.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(My,h,void 0))||y||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,Q]of p)this.g.setRequestHeader(D,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){yh(this,D)}};function yh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,vh(a),vo(a)}function vh(a){a.A||(a.A=!0,we(a,"complete"),we(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,we(this,"complete"),we(this,"abort"),vo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vo(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wh(this):this.bb())},t.bb=function(){wh(this)};function wh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Pn(a)!=4||a.Z()!=2)){if(a.u&&Pn(a)==4)Ye(a.Ea,0,a);else if(we(a,"readystatechange"),Pn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=Q===0){var x=String(a.D).match(uh)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),y=!Dy.test(x?x.toLowerCase():"")}p=y}if(p)we(a,"complete"),we(a,"success");else{a.m=6;try{var D=2<Pn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",vh(a)}}finally{vo(a)}}}}function vo(a,h){if(a.g){bh(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||we(a,"ready");try{p.onreadystatechange=y}catch{}}}function bh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Jt(h)}};function Eh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ly(a){const h={};a=(a.g&&2<=Pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(N(a[y]))continue;var p=R(a[y]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[x]||[];h[x]=D,D.push(p)}g(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Th(a){this.Aa=0,this.i=[],this.j=new Hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zs("baseRetryDelayMs",5e3,a),this.cb=Zs("retryDelaySeedMs",1e4,a),this.Wa=Zs("forwardChannelMaxRetries",2,a),this.wa=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new sh(a&&a.concurrentRequestLimit),this.Da=new Ny,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Th.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,y){Vt(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Oh(this,null,this.W),bo(this)};function gl(a){if(Ih(a),a.G==3){var h=a.U++,p=kn(a.I);if(Ke(p,"SID",a.K),Ke(p,"RID",h),Ke(p,"TYPE","terminate"),ei(a,p),h=new tr(a,a.j,h),h.L=2,h.v=go(kn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Nh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),fo(h)}Ph(a)}function wo(a){a.g&&(yl(a),a.g.cancel(),a.g=null)}function Ih(a){wo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Eo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function bo(a){if(!ih(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ee||re(),Ae||(Ee(),Ae=!0),ft.add(h,a),a.B=0}}function Fy(a,h){return oh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ws(_(a.Ga,a,h),kh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new tr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=m(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Rh(this,x,h),p=kn(this.I),Ke(p,"RID",a),Ke(p,"CVER",22),this.D&&Ke(p,"X-HTTP-Session-Id",this.D),ei(this,p),D&&(this.O?h="headers="+encodeURIComponent(String(_h(D)))+"&"+h:this.m&&ml(p,this.m,D)),pl(this.h,x),this.Ua&&Ke(p,"TYPE","init"),this.P?(Ke(p,"$req",h),Ke(p,"SID","null"),x.T=!0,ul(x,p,null)):ul(x,p,h),this.G=2}}else this.G==3&&(a?Ah(this,a):this.i.length==0||ih(this.h)||Ah(this))};function Ah(a,h){var p;h?p=h.l:p=a.U++;const y=kn(a.I);Ke(y,"SID",a.K),Ke(y,"RID",p),Ke(y,"AID",a.T),ei(a,y),a.m&&a.o&&ml(y,a.m,a.o),p=new tr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Rh(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pl(a.h,p),ul(p,y,h)}function ei(a,h){a.H&&G(a.H,function(p,y){Ke(h,y,p)}),a.l&&ch({},function(p,y){Ke(h,y,p)})}function Rh(a,h,p){p=Math.min(a.i.length,p);var y=a.l?_(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const Q=["count="+p];D==-1?0<p?(D=x[0].g,Q.push("ofs="+D)):D=0:Q.push("ofs="+D);let je=!0;for(let mt=0;mt<p;mt++){let Oe=x[mt].g;const It=x[mt].map;if(Oe-=D,0>Oe)D=Math.max(0,x[mt].g-100),je=!1;else try{Vy(It,Q,"req"+Oe+"_")}catch{y&&y(It)}}if(je){y=Q.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function Sh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ee||re(),Ae||(Ee(),Ae=!0),ft.add(h,a),a.v=0}}function _l(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ws(_(a.Fa,a),kh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ch(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ws(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),wo(this),Ch(this))};function yl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ch(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=kn(a.qa);Ke(h,"RID","rpc"),Ke(h,"SID",a.K),Ke(h,"AID",a.T),Ke(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ke(h,"TO",a.ja),Ke(h,"TYPE","xmlhttp"),ei(a,h),a.m&&a.o&&ml(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=go(kn(h)),p.m=null,p.P=!0,th(p,a)}t.Za=function(){this.C!=null&&(this.C=null,wo(this),_l(this),Vt(19))};function Eo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function xh(a,h){var p=null;if(a.g==h){Eo(a),yl(a),a.g=null;var y=2}else if(fl(a.h,h))p=h.D,ah(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;y=co(),we(y,new Ju(y,p)),bo(a)}else Sh(a);else if(x=h.s,x==3||x==0&&0<h.X||!(y==1&&Fy(a,h)||y==2&&_l(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),x){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function kh(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function kr(a,h){if(a.j.info("Error code "+h),h==2){var p=_(a.fb,a),y=a.Xa;const x=!y;y=new xr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||po(y,"https"),go(y),x?Py(y.toString(),p):Oy(y.toString(),p)}else Vt(2);a.G=0,a.l&&a.l.sa(h),Ph(a),Ih(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Ph(a){if(a.G=0,a.ka=[],a.l){const h=lh(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Oh(a,h,p){var y=p instanceof xr?kn(p):new xr(p);if(y.g!="")h&&(y.g=h+"."+y.g),mo(y,y.s);else{var x=l.location;y=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var D=new xr(null);y&&po(D,y),h&&(D.g=h),x&&mo(D,x),p&&(D.l=p),y=D}return p=a.D,h=a.ya,p&&h&&Ke(y,p,h),Ke(y,"VER",a.la),ei(a,y),y}function Nh(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new et(new _o({eb:p})):new et(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vh(){}t=Vh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function To(){}To.prototype.g=function(a,h){return new qt(a,h)};function qt(a,h){de.call(this),this.g=new Th(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!N(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ss(this)}k(qt,de),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){gl(this.g)},qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=pt(a),a=p);h.i.push(new by(h.Ya++,a)),h.G==3&&bo(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,gl(this.g),delete this.g,qt.aa.N.call(this)};function Dh(a){ol.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}k(Dh,ol);function Mh(){al.call(this),this.status=1}k(Mh,al);function ss(a){this.g=a}k(ss,Vh),ss.prototype.ua=function(){we(this.g,"a")},ss.prototype.ta=function(a){we(this.g,new Dh(a))},ss.prototype.sa=function(a){we(this.g,new Mh)},ss.prototype.ra=function(){we(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Nm=function(){return new To},Om=function(){return co()},Pm=Sr,lc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},uo.NO_ERROR=0,uo.TIMEOUT=8,uo.HTTP_ERROR=6,$o=uo,Xu.COMPLETE="complete",km=Xu,Gu.EventType=js,js.OPEN="a",js.CLOSE="b",js.ERROR="c",js.MESSAGE="d",de.prototype.listen=de.prototype.K,ui=Gu,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,xm=et}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const Sd="@firebase/firestore";/**
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
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let Ms="10.14.0";/**
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
 */const Wr=new Gc("@firebase/firestore");function ri(){return Wr.logLevel}function se(t,...e){if(Wr.logLevel<=Ce.DEBUG){const n=e.map(Yc);Wr.debug(`Firestore (${Ms}): ${t}`,...n)}}function Yn(t,...e){if(Wr.logLevel<=Ce.ERROR){const n=e.map(Yc);Wr.error(`Firestore (${Ms}): ${t}`,...n)}}function Is(t,...e){if(Wr.logLevel<=Ce.WARN){const n=e.map(Yc);Wr.warn(`Firestore (${Ms}): ${t}`,...n)}}function Yc(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function $e(t,e){t||ge()}function ve(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Vm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ub{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class zb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $b{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){$e(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($e(typeof r.accessToken=="string"),new Vm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new St(e)}}class Bb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Bb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){$e(this.o===void 0);const r=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($e(typeof n.token=="string"),this.R=n.token,new qb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Hb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Hb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ne(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new ct(0,0))}static max(){return new ye(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Di{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Qe extends Di{construct(e,n,r){return new Qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Qe(n)}static emptyPath(){return new Qe([])}}const Gb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Di{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return Gb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Qe.fromString(e))}static fromName(e){return new ce(Qe.fromString(e).popFirst(5))}static empty(){return new ce(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Qe(e.slice()))}}function Kb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ye.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new vr(s,ce.empty(),e)}function Qb(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(ye.min(),ce.empty(),-1)}static max(){return new vr(ye.max(),ce.empty(),-1)}}function Yb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const Jb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yi(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==Jb)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Zb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jc.oe=-1;function ja(t){return t==null}function ca(t){return t===0&&1/t==-1/0}function eE(t){return typeof t=="number"&&Number.isInteger(t)&&!ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Cd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new yt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class on{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new on([])}unionWith(e){let n=new wt(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lm("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const tE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if($e(!!t),typeof t=="string"){let e=0;const n=tE.exec(t);if($e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */function Xc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zc(t){const e=t.mapValue.fields.__previous_value__;return Xc(e)?Zc(e):e}function Mi(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class nE{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ko={mapValue:{}};function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xc(t)?4:sE(t)?9007199254740991:rE(t)?10:11:ge()}function Cn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mi(t).isEqual(Mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=wr(s.timestampValue),l=wr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return tt(s.geoPointValue.latitude)===tt(i.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return tt(s.integerValue)===tt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=tt(s.doubleValue),l=tt(i.doubleValue);return o===l?ca(o)===ca(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Cd(o)!==Cd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Cn(o[c],l[c])))return!1;return!0}(t,e);default:return ge()}}function Fi(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return Ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ne(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=tt(i.integerValue||i.doubleValue),c=tt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return kd(t.timestampValue,e.timestampValue);case 4:return kd(Mi(t),Mi(e));case 5:return Ne(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Hr(i),c=Hr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ne(l[u],c[u]);if(d!==0)return d}return Ne(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ne(tt(i.latitude),tt(o.latitude));return l!==0?l:Ne(tt(i.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const f=i.fields||{},_=o.fields||{},v=(l=f.value)===null||l===void 0?void 0:l.arrayValue,k=(c=_.value)===null||c===void 0?void 0:c.arrayValue,O=Ne(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Pd(v,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ko.mapValue&&o===ko.mapValue)return 0;if(i===ko.mapValue)return 1;if(o===ko.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const _=Ne(c[f],d[f]);if(_!==0)return _;const v=Rs(l[c[f]],u[d[f]]);if(v!==0)return v}return Ne(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function kd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ne(t,e);const n=wr(t),r=wr(e),s=Ne(n.seconds,r.seconds);return s!==0?s:Ne(n.nanos,r.nanos)}function Pd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return Ne(n.length,r.length)}function Ss(t){return cc(t)}function cc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=cc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${cc(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function Od(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function uc(t){return!!t&&"integerValue"in t}function eu(t){return!!t&&"arrayValue"in t}function Nd(t){return!!t&&"nullValue"in t}function Vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bo(t){return!!t&&"mapValue"in t}function rE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function bi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bi(n)}setAll(e){let n=vt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=bi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ls(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Zt(bi(this.value))}}function Fm(t){const e=[];return Ls(t.fields,(n,r)=>{const s=new vt([n]);if(Bo(r)){const i=Fm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new on(e)}/**
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
 */class xt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new xt(e,0,ye.min(),ye.min(),ye.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,s){return new xt(e,1,n,ye.min(),r,s,0)}static newNoDocument(e,n){return new xt(e,2,n,ye.min(),ye.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,ye.min(),ye.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ua{constructor(e,n){this.position=e,this.inclusive=n}}function Dd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Md(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ha{constructor(e,n="asc"){this.field=e,this.dir=n}}function iE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Um{}class it extends Um{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aE(e,n,r):n==="array-contains"?new uE(e,r):n==="in"?new hE(e,r):n==="not-in"?new dE(e,r):n==="array-contains-any"?new fE(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lE(e,r):new cE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends Um{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dn(e,n)}matches(e){return zm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zm(t){return t.op==="and"}function $m(t){return oE(t)&&zm(t)}function oE(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function hc(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if($m(t))return t.filters.map(e=>hc(e)).join(",");{const e=t.filters.map(n=>hc(n)).join(",");return`${t.op}(${e})`}}function Bm(t,e){return t instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Bm(o,s.filters[l]),!0):!1}(t,e):void ge()}function jm(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(jm).join(" ,")+"}"}(t):"Filter"}class aE extends it{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class lE extends it{constructor(e,n){super(e,"in",n),this.keys=qm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cE extends it{constructor(e,n){super(e,"not-in",n),this.keys=qm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class uE extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return eu(n)&&Fi(n.arrayValue,this.value)}}class hE extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fi(this.value.arrayValue,n)}}class dE extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fi(this.value.arrayValue,n)}}class fE extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fi(this.value.arrayValue,r))}}/**
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
 */class pE{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ld(t,e=null,n=[],r=[],s=null,i=null,o=null){return new pE(t,e,n,r,s,i,o)}function tu(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.ue=n}return e.ue}function nu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Md(t.startAt,e.startAt)&&Md(t.endAt,e.endAt)}function dc(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mE(t,e,n,r,s,i,o,l){return new Xi(t,e,n,r,s,i,o,l)}function ru(t){return new Xi(t)}function Fd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wm(t){return t.collectionGroup!==null}function Ei(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new wt(vt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ha(i,r))}),n.has(vt.keyField().canonicalString())||e.ce.push(new ha(vt.keyField(),r))}return e.ce}function Tn(t){const e=ve(t);return e.le||(e.le=gE(e,Ei(t))),e.le}function gE(t,e){if(t.limitType==="F")return Ld(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ha(s.field,i)});const n=t.endAt?new ua(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ua(t.startAt.position,t.startAt.inclusive):null;return Ld(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fc(t,e){const n=t.filters.concat([e]);return new Xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pc(t,e,n){return new Xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qa(t,e){return nu(Tn(t),Tn(e))&&t.limitType===e.limitType}function Hm(t){return`${tu(Tn(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>jm(s)).join(", ")}]`),ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ss(s)).join(",")),`Target(${r})`}(Tn(t))}; limitType=${t.limitType})`}function Wa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Dd(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Ei(r),s)||r.endAt&&!function(o,l,c){const u=Dd(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Ei(r),s))}(t,e)}function _E(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gm(t){return(e,n)=>{let r=!1;for(const s of Ei(t)){const i=yE(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yE(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Rs(c,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class Fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mm(this.inner)}size(){return this.innerSize}}/**
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
 */const vE=new Ze(ce.comparator);function Jn(){return vE}const Km=new Ze(ce.comparator);function hi(...t){let e=Km;for(const n of t)e=e.insert(n.key,n);return e}function Qm(t){let e=Km;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return Ti()}function Ym(){return Ti()}function Ti(){return new Fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const wE=new Ze(ce.comparator),bE=new wt(ce.comparator);function Se(...t){let e=bE;for(const n of t)e=e.add(n);return e}const EE=new wt(Ne);function TE(){return EE}/**
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
 */function su(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(e)?"-0":e}}function Jm(t){return{integerValue:""+t}}function IE(t,e){return eE(e)?Jm(e):su(t,e)}/**
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
 */class Ha{constructor(){this._=void 0}}function AE(t,e,n){return t instanceof da?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xc(i)&&(i=Zc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ui?Zm(t,e):t instanceof zi?eg(t,e):function(s,i){const o=Xm(s,i),l=Ud(o)+Ud(s.Pe);return uc(o)&&uc(s.Pe)?Jm(l):su(s.serializer,l)}(t,e)}function RE(t,e,n){return t instanceof Ui?Zm(t,e):t instanceof zi?eg(t,e):n}function Xm(t,e){return t instanceof fa?function(r){return uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class da extends Ha{}class Ui extends Ha{constructor(e){super(),this.elements=e}}function Zm(t,e){const n=tg(e);for(const r of t.elements)n.some(s=>Cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class zi extends Ha{constructor(e){super(),this.elements=e}}function eg(t,e){let n=tg(e);for(const r of t.elements)n=n.filter(s=>!Cn(s,r));return{arrayValue:{values:n}}}class fa extends Ha{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ud(t){return tt(t.integerValue||t.doubleValue)}function tg(t){return eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function SE(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ui&&s instanceof Ui||r instanceof zi&&s instanceof zi?As(r.elements,s.elements,Cn):r instanceof fa&&s instanceof fa?Cn(r.Pe,s.Pe):r instanceof da&&s instanceof da}(t.transform,e.transform)}class CE{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ga{}function ng(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iu(t.key,In.none()):new Zi(t.key,t.data,In.none());{const n=t.data,r=Zt.empty();let s=new wt(vt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Xr(t.key,r,new on(s.toArray()),In.none())}}function xE(t,e,n){t instanceof Zi?function(s,i,o){const l=s.value.clone(),c=$d(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(s,i,o){if(!jo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=$d(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(rg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ii(t,e,n,r){return t instanceof Zi?function(i,o,l,c){if(!jo(i.precondition,o))return l;const u=i.value.clone(),d=Bd(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(i,o,l,c){if(!jo(i.precondition,o))return l;const u=Bd(i.fieldTransforms,c,o),d=o.data;return d.setAll(rg(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,l){return jo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function kE(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Xm(r.transform,s||null);i!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,i))}return n||null}function zd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&As(r,s,(i,o)=>SE(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zi extends Ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xr extends Ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $d(t,e,n){const r=new Map;$e(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,RE(o,l,n[s]))}return r}function Bd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AE(i,o,e))}return r}class iu extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PE extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OE{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xE(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ym();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=ng(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>zd(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>zd(n,r))}}class ou{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){$e(e.mutations.length===r.length);let s=function(){return wE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ou(e,n,r,s)}}/**
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
 */class NE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class VE{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,xe;function DE(t){switch(t){default:return ge();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function sg(t){if(t===void 0)return Yn("GRPC error has no .code"),z.UNKNOWN;switch(t){case st.OK:return z.OK;case st.CANCELLED:return z.CANCELLED;case st.UNKNOWN:return z.UNKNOWN;case st.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case st.INTERNAL:return z.INTERNAL;case st.UNAVAILABLE:return z.UNAVAILABLE;case st.UNAUTHENTICATED:return z.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case st.NOT_FOUND:return z.NOT_FOUND;case st.ALREADY_EXISTS:return z.ALREADY_EXISTS;case st.PERMISSION_DENIED:return z.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case st.ABORTED:return z.ABORTED;case st.OUT_OF_RANGE:return z.OUT_OF_RANGE;case st.UNIMPLEMENTED:return z.UNIMPLEMENTED;case st.DATA_LOSS:return z.DATA_LOSS;default:return ge()}}(xe=st||(st={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ME(){return new TextEncoder}/**
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
 */const LE=new Br([4294967295,4294967295],0);function jd(t){const e=ME().encode(t),n=new Cm;return n.update(e),new Uint8Array(n.digest())}function qd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Br([n,r],0),new Br([s,i],0)]}class au{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new di(`Invalid padding: ${n}`);if(r<0)throw new di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new di(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new di(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Br.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Br.fromNumber(r)));return s.compare(LE)===1&&(s=new Br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=jd(e),[r,s]=qd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new au(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=jd(e),[r,s]=qd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ka{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ka(ye.min(),s,new Ze(Ne),Jn(),Se())}}class eo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eo(r,n,Se(),Se(),Se())}}/**
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
 */class qo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ig{constructor(e,n){this.targetId=e,this.me=n}}class og{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Wd{constructor(){this.fe=0,this.ge=Gd(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Se(),n=Se(),r=Se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new eo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Gd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,$e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FE{constructor(e){this.Le=e,this.Be=new Map,this.ke=Jn(),this.qe=Hd(),this.Qe=new Ze(Ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(dc(i))if(r===0){const o=new ce(i.path);this.Ue(n,o,xt.newNoDocument(o,ye.min()))}else $e(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Hr(r).toUint8Array()}catch(c){if(c instanceof Lm)return Is("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new au(o,s,i)}catch(c){return Is(c instanceof di?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&dc(l.target)){const c=new ce(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,xt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Se();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ka(e,n,this.Qe,this.ke,r);return this.ke=Jn(),this.qe=Hd(),this.Qe=new Ze(Ne),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Wd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new wt(Ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Wd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Hd(){return new Ze(ce.comparator)}function Gd(){return new Ze(ce.comparator)}const UE={asc:"ASCENDING",desc:"DESCENDING"},zE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$E={and:"AND",or:"OR"};class BE{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mc(t,e){return t.useProto3Json||ja(e)?e:{value:e}}function pa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ag(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jE(t,e){return pa(t,e.toTimestamp())}function An(t){return $e(!!t),ye.fromTimestamp(function(n){const r=wr(n);return new ct(r.seconds,r.nanos)}(t))}function lu(t,e){return gc(t,e).canonicalString()}function gc(t,e){const n=function(s){return new Qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lg(t){const e=Qe.fromString(t);return $e(fg(e)),e}function _c(t,e){return lu(t.databaseId,e.path)}function Ml(t,e){const n=lg(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(ug(n))}function cg(t,e){return lu(t.databaseId,e)}function qE(t){const e=lg(t);return e.length===4?Qe.emptyPath():ug(e)}function yc(t){return new Qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ug(t){return $e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kd(t,e,n){return{name:_c(t,e),fields:n.value.mapValue.fields}}function WE(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?($e(d===void 0||typeof d=="string"),Et.fromBase64String(d||"")):($e(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Et.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?z.UNKNOWN:sg(u.code);return new ne(d,u.message||"")}(o);n=new og(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ml(t,r.document.name),i=An(r.document.updateTime),o=r.document.createTime?An(r.document.createTime):ye.min(),l=new Zt({mapValue:{fields:r.document.fields}}),c=xt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new qo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ml(t,r.document),i=r.readTime?An(r.readTime):ye.min(),o=xt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new qo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ml(t,r.document),i=r.removedTargetIds||[];n=new qo([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new VE(s,i),l=r.targetId;n=new ig(l,o)}}return n}function HE(t,e){let n;if(e instanceof Zi)n={update:Kd(t,e.key,e.value)};else if(e instanceof iu)n={delete:_c(t,e.key)};else if(e instanceof Xr)n={update:Kd(t,e.key,e.data),updateMask:tT(e.fieldMask)};else{if(!(e instanceof PE))return ge();n={verify:_c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof da)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function GE(t,e){return t&&t.length>0?($e(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?An(s.updateTime):An(i);return o.isEqual(ye.min())&&(o=An(i)),new CE(o,s.transformResults||[])}(n,e))):[]}function KE(t,e){return{documents:[cg(t,e.path)]}}function QE(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cg(t,s);const i=function(u){if(u.length!==0)return dg(dn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(_){return{field:cs(_.field),direction:XE(_.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=mc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function YE(t){let e=qE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){$e(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const _=hg(f);return _ instanceof dn&&$m(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(_=>function(k){return new ha(us(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(f){let _;return _=typeof f=="object"?f.value:f,ja(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(f){const _=!!f.before,v=f.values||[];return new ua(v,_)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const _=!f.before,v=f.values||[];return new ua(v,_)}(n.endAt)),mE(e,s,o,i,l,"F",c,u)}function JE(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return it.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return it.create(us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>hg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function XE(t){return UE[t]}function ZE(t){return zE[t]}function eT(t){return $E[t]}function cs(t){return{fieldPath:t.canonicalString()}}function us(t){return vt.fromServerFormat(t.fieldPath)}function dg(t){return t instanceof it?function(n){if(n.op==="=="){if(Vd(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(Nd(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vd(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(Nd(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:ZE(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>dg(s));return r.length===1?r[0]:{compositeFilter:{op:eT(n.op),filters:r}}}(t):ge()}function tT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class fr{constructor(e,n,r,s,i=ye.min(),o=ye.min(),l=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nT{constructor(e){this.ct=e}}function rT(t){const e=YE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pc(e,e.limit,"L"):e}/**
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
 */class sT{constructor(){this.un=new iT}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(vr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class iT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new wt(Qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new wt(Qe.comparator)).toArray()}}/**
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
 */class Cs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Cs(0)}static kn(){return new Cs(-1)}}/**
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
 */class oT{constructor(){this.changes=new Fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class aT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ii(r.mutation,s,on.empty(),ct.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const s=Lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=hi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Jn();const o=Ti(),l=function(){return Ti()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Xr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ii(d.mutation,u,d.mutation.getFieldMask(),ct.now())):o.set(u.key,on.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var f;return l.set(u,new aT(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ti();let s=new Ze((o,l)=>o-l),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||on.empty();d=l.applyToLocalView(u,d),r.set(c,d);const f=(s.get(l.batchId)||Se()).add(c);s=s.insert(l.batchId,f)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,f=Ym();d.forEach(_=>{if(!i.has(_)){const v=ng(n.get(_),r.get(_));v!==null&&f.set(_,v),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Lr());let l=-1,c=i;return o.next(u=>B.forEach(u,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{c=c.insert(d,_)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Se())).next(d=>({batchId:l,changes:Qm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=hi();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(f,_){return new Xi(_,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,_)=>{o=o.insert(f,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,xt.newInvalidDocument(d)))});let l=hi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Ii(d.mutation,u,on.empty(),ct.now()),Wa(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class cT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:An(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:rT(s.bundledQuery),readTime:An(s.readTime)}}(n)),B.resolve()}}/**
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
 */class uT{constructor(){this.overlays=new Ze(ce.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Lr(),i=n.length+1,o=new ce(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ze((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Lr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Lr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return B.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NE(n,r));let i=this.Ir.get(n);i===void 0&&(i=Se(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class hT{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class cu{constructor(){this.Tr=new wt(ut.Er),this.dr=new wt(ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ut(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ce(new Qe([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ce(new Qe([])),r=new ut(n,e),s=new ut(n,e+1);let i=Se();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ce.comparator(e.key,n.key)||Ne(e.wr,n.wr)}static Ar(e,n){return Ne(e.wr,n.wr)||ce.comparator(e.key,n.key)}}/**
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
 */class dT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new wt(ut.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OE(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ut(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new wt(Ne);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new ut(new ce(i),0);let l=new wt(Ne);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){$e(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ut(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class fT{constructor(e){this.Mr=e,this.docs=function(){return new Ze(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,l=new ce(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Yb(Qb(d),r)<=0||(s.has(d.key)||Wa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pT(this)}getSize(e){return B.resolve(this.size)}}class pT extends oT{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class mT{constructor(e){this.persistence=e,this.Nr=new Fs(n=>tu(n),nu),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Lr=0,this.Br=new cu,this.targetCount=0,this.kr=Cs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
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
 */class gT{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Jc(0),this.Kr=!1,this.Kr=!0,this.$r=new hT,this.referenceDelegate=e(this),this.Ur=new mT(this),this.indexManager=new sT,this.remoteDocumentCache=function(s){return new fT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nT(n),this.Gr=new cT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new dT(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const s=new _T(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class _T extends Xb{constructor(e){super(),this.currentSequenceNumber=e}}class uu{constructor(e){this.persistence=e,this.Jr=new cu,this.Yr=null}static Zr(e){return new uu(e)}get Xr(){if(this.Yr)return this.Yr;throw ge()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=ce.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ye.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class hu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hu(e,n.fromCache,r,s)}}/**
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
 */class yT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ww()?8:Zb(Ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yT;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ri()<=Ce.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(ri()<=Ce.DEBUG&&se("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ri()<=Ce.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):B.resolve())}Yi(e,n){if(Fd(n))return B.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=pc(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Se(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,pc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return Fd(n)||s.isEqual(ye.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?B.resolve(null):(ri()<=Ce.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ls(n)),this.rs(e,o,n,Kb(s,-1)).next(l=>l))})}ts(e,n){let r=new wt(Gm(e));return n.forEach((s,i)=>{Wa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ri()<=Ce.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",ls(n)),this.Ji.getDocumentsMatchingQuery(e,n,vr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class wT{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ze(Ne),this._s=new Fs(i=>tu(i),nu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function bT(t,e,n,r){return new wT(t,e,n,r)}async function pg(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Se();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function ET(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const f=u.batch,_=f.keys();let v=B.resolve();return _.forEach(k=>{v=v.next(()=>d.getEntry(c,k)).next(O=>{const V=u.docVersions.get(k);$e(V!==null),O.version.compareTo(V)<0&&(f.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Se();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function mg(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function TT(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,f)=>{const _=s.get(f);if(!_)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,f)));let v=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(Et.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(f,v),function(O,V,q){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(_,v,d)&&l.push(n.Ur.updateTargetData(i,v))});let c=Jn(),u=Se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(IT(i,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!r.isEqual(ye.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function IT(t,e,n){let r=Se(),s=Se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Jn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ye.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):se("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function AT(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RT(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function vc(t,e,n){const r=ve(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Qd(t,e,n){const r=ve(t);let s=ye.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=ve(c),_=f._s.get(d);return _!==void 0?B.resolve(f.os.get(_)):f.Ur.getTargetData(u,d)}(r,o,Tn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ye.min(),n?i:Se())).next(l=>(ST(r,_E(e),l),{documents:l,Ts:i})))}function ST(t,e,n){let r=t.us.get(e)||ye.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Yd{constructor(){this.activeTargetIds=TE()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CT{constructor(){this.so=new Yd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Yd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xT{_o(e){}shutdown(){}}/**
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
 */class Jd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Po=null;function Ll(){return Po===null?Po=function(){return 268435456+Math.round(2147483648*Math.random())}():Po++,"0x"+Po.toString(16)}/**
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
 */const kT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class PT{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Rt="WebChannelConnection";class OT extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Ll(),c=this.xo(n,r.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(d=>(se("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Is("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=kT[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ll();return new Promise((o,l)=>{const c=new xm;c.setWithCredentials(!0),c.listenOnce(km.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $o.NO_ERROR:const d=c.getResponseJson();se(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case $o.TIMEOUT:se(Rt,`RPC '${e}' ${i} timed out`),l(new ne(z.DEADLINE_EXCEEDED,"Request time out"));break;case $o.HTTP_ERROR:const f=c.getStatus();if(se(Rt,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const v=_==null?void 0:_.error;if(v&&v.status&&v.message){const k=function(V){const q=V.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(q)>=0?q:z.UNKNOWN}(v.status);l(new ne(k,v.message))}else l(new ne(z.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(z.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{se(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);se(Rt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Ll(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Nm(),l=Om(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");se(Rt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const f=o.createWebChannel(d,c);let _=!1,v=!1;const k=new PT({Io:V=>{v?se(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(_||(se(Rt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),_=!0),se(Rt,`RPC '${e}' stream ${s} sending:`,V),f.send(V))},To:()=>f.close()}),O=(V,q,N)=>{V.listen(q,P=>{try{N(P)}catch(j){setTimeout(()=>{throw j},0)}})};return O(f,ui.EventType.OPEN,()=>{v||(se(Rt,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),O(f,ui.EventType.CLOSE,()=>{v||(v=!0,se(Rt,`RPC '${e}' stream ${s} transport closed`),k.So())}),O(f,ui.EventType.ERROR,V=>{v||(v=!0,Is(Rt,`RPC '${e}' stream ${s} transport errored:`,V),k.So(new ne(z.UNAVAILABLE,"The operation could not be completed")))}),O(f,ui.EventType.MESSAGE,V=>{var q;if(!v){const N=V.data[0];$e(!!N);const P=N,j=P.error||((q=P[0])===null||q===void 0?void 0:q.error);if(j){se(Rt,`RPC '${e}' stream ${s} received error:`,j);const te=j.status;let G=function(b){const I=st[b];if(I!==void 0)return sg(I)}(te),g=j.message;G===void 0&&(G=z.INTERNAL,g="Unknown error status: "+te+" with message "+j.message),v=!0,k.So(new ne(G,g)),f.close()}else se(Rt,`RPC '${e}' stream ${s} received:`,N),k.bo(N)}}),O(l,Pm.STAT_EVENT,V=>{V.stat===lc.PROXY?se(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===lc.NOPROXY&&se(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Fl(){return typeof document<"u"?document:null}/**
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
 */function Qa(t){return new BE(t,!0)}/**
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
 */class gg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class _g{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new gg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ne(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NT extends _g{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=WE(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?An(o.readTime):ye.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=yc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=dc(c)?{documents:KE(i,c)}:{query:QE(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ag(i,o.resumeToken);const u=mc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){l.readTime=pa(i,o.snapshotVersion.toTimestamp());const u=mc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=JE(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=yc(this.serializer),n.removeTarget=e,this.a_(n)}}class VT extends _g{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return $e(!!e.streamToken),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){$e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=GE(e.writeResults,e.commitTime),r=An(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=yc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HE(this.serializer,r))};this.a_(n)}}/**
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
 */class DT extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,gc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(z.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,gc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(z.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class MT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Yn(n),this.D_=!1):se("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class LT{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ve(c);u.L_.add(4),await to(u),u.q_.set("Unknown"),u.L_.delete(4),await Ya(u)}(this))})}),this.q_=new MT(r,s)}}async function Ya(t){if(Zr(t))for(const e of t.B_)await e(!0)}async function to(t){for(const e of t.B_)await e(!1)}function yg(t,e){const n=ve(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),mu(n)?pu(n):Us(n).r_()&&fu(n,e))}function du(t,e){const n=ve(t),r=Us(n);n.N_.delete(e),r.r_()&&vg(n,e),n.N_.size===0&&(r.r_()?r.o_():Zr(n)&&n.q_.set("Unknown"))}function fu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).A_(e)}function vg(t,e){t.Q_.xe(e),Us(t).R_(e)}function pu(t){t.Q_=new FE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.q_.v_()}function mu(t){return Zr(t)&&!Us(t).n_()&&t.N_.size>0}function Zr(t){return ve(t).L_.size===0}function wg(t){t.Q_=void 0}async function FT(t){t.q_.set("Online")}async function UT(t){t.N_.forEach((e,n)=>{fu(t,e)})}async function zT(t,e){wg(t),mu(t)?(t.q_.M_(e),pu(t)):t.q_.set("Unknown")}async function $T(t,e,n){if(t.q_.set("Online"),e instanceof og&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ma(t,r)}else if(e instanceof qo?t.Q_.Ke(e):e instanceof ig?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ye.min()))try{const r=await mg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(Et.EMPTY_BYTE_STRING,d.snapshotVersion)),vg(i,c);const f=new fr(d.target,c,u,d.sequenceNumber);fu(i,f)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){se("RemoteStore","Failed to raise snapshot:",r),await ma(t,r)}}async function ma(t,e,n){if(!Ji(e))throw e;t.L_.add(1),await to(t),t.q_.set("Offline"),n||(n=()=>mg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ya(t)})}function bg(t,e){return e().catch(n=>ma(t,n,e))}async function Ja(t){const e=ve(t),n=br(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;BT(e);)try{const s=await AT(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,jT(e,s)}catch(s){await ma(e,s)}Eg(e)&&Tg(e)}function BT(t){return Zr(t)&&t.O_.length<10}function jT(t,e){t.O_.push(e);const n=br(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Eg(t){return Zr(t)&&!br(t).n_()&&t.O_.length>0}function Tg(t){br(t).start()}async function qT(t){br(t).p_()}async function WT(t){const e=br(t);for(const n of t.O_)e.m_(n.mutations)}async function HT(t,e,n){const r=t.O_.shift(),s=ou.from(r,e,n);await bg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ja(t)}async function GT(t,e){e&&br(t).V_&&await async function(r,s){if(function(o){return DE(o)&&o!==z.ABORTED}(s.code)){const i=r.O_.shift();br(r).s_(),await bg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ja(r)}}(t,e),Eg(t)&&Tg(t)}async function Xd(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.L_.add(3),await to(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ya(n)}async function KT(t,e){const n=ve(t);e?(n.L_.delete(2),await Ya(n)):e||(n.L_.add(2),await to(n),n.q_.set("Unknown"))}function Us(t){return t.K_||(t.K_=function(n,r,s){const i=ve(n);return i.w_(),new NT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:FT.bind(null,t),Ro:UT.bind(null,t),mo:zT.bind(null,t),d_:$T.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),mu(t)?pu(t):t.q_.set("Unknown")):(await t.K_.stop(),wg(t))})),t.K_}function br(t){return t.U_||(t.U_=function(n,r,s){const i=ve(n);return i.w_(),new VT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:qT.bind(null,t),mo:GT.bind(null,t),f_:WT.bind(null,t),g_:HT.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ja(t)):(await t.U_.stop(),t.O_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class gu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new gu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _u(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Ji(t))return new ne(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=hi(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Zd{constructor(){this.W_=new Ze(ce.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ge():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new xs(e,n,ys.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class QT{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class YT{constructor(){this.queries=ef(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=ef(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new ne(z.ABORTED,"Firestore shutting down"))}}function ef(){return new Fs(t=>Hm(t),qa)}async function Ig(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new QT,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=_u(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&yu(n)}async function Ag(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function JT(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&yu(n)}function XT(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function yu(t){t.Y_.forEach(e=>{e.next()})}var wc,tf;(tf=wc||(wc={})).ea="default",tf.Cache="cache";class Rg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==wc.Cache}}/**
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
 */class Sg{constructor(e){this.key=e}}class Cg{constructor(e){this.key=e}}class ZT{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Se(),this.mutatedKeys=Se(),this.Aa=Gm(e),this.Ra=new ys(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Zd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const _=s.get(d),v=Wa(this.query,f)?f:null,k=!!_&&this.mutatedKeys.has(_.key),O=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let V=!1;_&&v?_.data.isEqual(v.data)?k!==O&&(r.track({type:3,doc:v}),V=!0):this.ga(_,v)||(r.track({type:2,doc:v}),V=!0,(c&&this.Aa(v,c)>0||u&&this.Aa(v,u)<0)&&(l=!0)):!_&&v?(r.track({type:0,doc:v}),V=!0):_&&!v&&(r.track({type:1,doc:_}),V=!0,(c||u)&&(l=!0)),V&&(v?(o=o.add(v),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(v,k){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return O(v)-O(k)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new xs(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Zd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Cg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Sg(r))}),n}ba(e){this.Ta=e.Ts,this.da=Se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return xs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class eI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tI{constructor(e){this.key=e,this.va=!1}}class nI{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Fs(l=>Hm(l),qa),this.Ma=new Map,this.xa=new Set,this.Oa=new Ze(ce.comparator),this.Na=new Map,this.La=new cu,this.Ba={},this.ka=new Map,this.qa=Cs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function rI(t,e,n=!0){const r=Vg(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await xg(r,e,n,!0),s}async function sI(t,e){const n=Vg(t);await xg(n,e,!0,!1)}async function xg(t,e,n,r){const s=await RT(t.localStore,Tn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await iI(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&yg(t.remoteStore,s),l}async function iI(t,e,n,r,s){t.Ka=(f,_,v)=>async function(O,V,q,N){let P=V.view.ma(q);P.ns&&(P=await Qd(O.localStore,V.query,!1).then(({documents:g})=>V.view.ma(g,P)));const j=N&&N.targetChanges.get(V.targetId),te=N&&N.targetMismatches.get(V.targetId)!=null,G=V.view.applyChanges(P,O.isPrimaryClient,j,te);return rf(O,V.targetId,G.wa),G.snapshot}(t,f,_,v);const i=await Qd(t.localStore,e,!0),o=new ZT(e,i.Ts),l=o.ma(i.documents),c=eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);rf(t,n,u.wa);const d=new eI(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function oI(t,e,n){const r=ve(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!qa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&du(r.remoteStore,s.targetId),bc(r,s.targetId)}).catch(Yi)):(bc(r,s.targetId),await vc(r.localStore,s.targetId,!0))}async function aI(t,e){const n=ve(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),du(n.remoteStore,r.targetId))}async function lI(t,e,n){const r=mI(t);try{const s=await function(o,l){const c=ve(o),u=ct.now(),d=l.reduce((v,k)=>v.add(k.key),Se());let f,_;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let k=Jn(),O=Se();return c.cs.getEntries(v,d).next(V=>{k=V,k.forEach((q,N)=>{N.isValidDocument()||(O=O.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,k)).next(V=>{f=V;const q=[];for(const N of l){const P=kE(N,f.get(N.key).overlayedDocument);P!=null&&q.push(new Xr(N.key,P,Fm(P.value.mapValue),In.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,q,l)}).next(V=>{_=V;const q=V.applyToLocalDocumentSet(f,O);return c.documentOverlayCache.saveOverlays(v,V.batchId,q)})}).then(()=>({batchId:_.batchId,changes:Qm(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ze(Ne)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await no(r,s.changes),await Ja(r.remoteStore)}catch(s){const i=_u(s,"Failed to persist write");n.reject(i)}}async function kg(t,e){const n=ve(t);try{const r=await TT(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&($e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?$e(o.va):s.removedDocuments.size>0&&($e(o.va),o.va=!1))}),await no(n,r,e)}catch(r){await Yi(r)}}function nf(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ve(o);c.onlineState=l;let u=!1;c.queries.forEach((d,f)=>{for(const _ of f.j_)_.Z_(l)&&(u=!0)}),u&&yu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cI(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ze(ce.comparator);o=o.insert(i,xt.newNoDocument(i,ye.min()));const l=Se().add(i),c=new Ka(ye.min(),new Map,new Ze(Ne),o,l);await kg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),vu(r)}else await vc(r.localStore,e,!1).then(()=>bc(r,e,n)).catch(Yi)}async function uI(t,e){const n=ve(t),r=e.batch.batchId;try{const s=await ET(n.localStore,e);Og(n,r,null),Pg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await no(n,s)}catch(s){await Yi(s)}}async function hI(t,e,n){const r=ve(t);try{const s=await function(o,l){const c=ve(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>($e(f!==null),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Og(r,e,n),Pg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await no(r,s)}catch(s){await Yi(s)}}function Pg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Og(t,e,n){const r=ve(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function bc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Ng(t,r)})}function Ng(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(du(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),vu(t))}function rf(t,e,n){for(const r of n)r instanceof Sg?(t.La.addReference(r.key,e),dI(t,r)):r instanceof Cg?(se("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Ng(t,r.key)):ge()}function dI(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(se("SyncEngine","New document in limbo: "+n),t.xa.add(r),vu(t))}function vu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ce(Qe.fromString(e)),r=t.qa.next();t.Na.set(r,new tI(n)),t.Oa=t.Oa.insert(n,r),yg(t.remoteStore,new fr(Tn(ru(n.path)),r,"TargetPurposeLimboResolution",Jc.oe))}}async function no(t,e,n){const r=ve(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=hu.Wi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const d=ve(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(u,_=>B.forEach(_.$i,v=>d.persistence.referenceDelegate.addReference(f,_.targetId,v)).next(()=>B.forEach(_.Ui,v=>d.persistence.referenceDelegate.removeReference(f,_.targetId,v)))))}catch(f){if(!Ji(f))throw f;se("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const _=f.targetId;if(!f.fromCache){const v=d.os.get(_),k=v.snapshotVersion,O=v.withLastLimboFreeSnapshotVersion(k);d.os=d.os.insert(_,O)}}}(r.localStore,i))}async function fI(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const r=await pg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new ne(z.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(n,r.hs)}}function pI(t,e){const n=ve(t),r=n.Na.get(e);if(r&&r.va)return Se().add(r.key);{let s=Se();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function Vg(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cI.bind(null,e),e.Ca.d_=JT.bind(null,e.eventManager),e.Ca.$a=XT.bind(null,e.eventManager),e}function mI(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hI.bind(null,e),e}class ga{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return bT(this.persistence,new vT,e.initialUser,this.serializer)}Ga(e){return new gT(uu.Zr,this.serializer)}Wa(e){return new CT}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ga.provider={build:()=>new ga};class Ec{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fI.bind(null,this.syncEngine),await KT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YT}()}createDatastore(e){const n=Qa(e.databaseInfo.databaseId),r=function(i){return new OT(i)}(e.databaseInfo);return function(i,o,l,c){return new DT(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new LT(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>nf(this.syncEngine,n,0),function(){return Jd.D()?new Jd:new xT}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const f=new nI(s,i,o,l,c,u);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);se("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await to(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ec.provider={build:()=>new Ec};/**
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
 */class Dg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class gI{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{se("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(se("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_u(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _I(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Xd(e.remoteStore,s)),t._onlineComponents=e}async function _I(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await Ul(t,new ga)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await Ul(t,new ga);return t._offlineComponents}async function Mg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await sf(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await sf(t,new Ec))),t._onlineComponents}function yI(t){return Mg(t).then(e=>e.syncEngine)}async function Lg(t){const e=await Mg(t),n=e.eventManager;return n.onListen=rI.bind(null,e.syncEngine),n.onUnlisten=oI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sI.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aI.bind(null,e.syncEngine),n}function vI(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Dg({next:_=>{d.Za(),o.enqueueAndForget(()=>Ag(i,f));const v=_.docs.has(l);!v&&_.fromCache?u.reject(new ne(z.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&_.fromCache&&c&&c.source==="server"?u.reject(new ne(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(_)},error:_=>u.reject(_)}),f=new Rg(ru(l.path),d,{includeMetadataChanges:!0,_a:!0});return Ig(i,f)}(await Lg(t),t.asyncQueue,e,n,r)),r.promise}function wI(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Dg({next:_=>{d.Za(),o.enqueueAndForget(()=>Ag(i,f)),_.fromCache&&c.source==="server"?u.reject(new ne(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(_)},error:_=>u.reject(_)}),f=new Rg(l,d,{includeMetadataChanges:!0,_a:!0});return Ig(i,f)}(await Lg(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Fg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const of=new Map;/**
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
 */function Ug(t,e,n){if(!n)throw new ne(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bI(t,e,n,r){if(e===!0&&r===!0)throw new ne(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function af(t){if(!ce.isDocumentKey(t))throw new ne(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lf(t){if(ce.isDocumentKey(t))throw new ne(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function Er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xa(t);throw new ne(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class cf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Za{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ub;switch(r.type){case"firstParty":return new jb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=of.get(n);r&&(se("ComponentProvider","Removing Datastore"),of.delete(n),r.terminate())}(this),Promise.resolve()}}function EI(t,e,n,r={}){var s;const i=(t=Er(t,Za))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=St.MOCK_USER;else{l=fw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ne(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new St(u)}t._authCredentials=new zb(new Vm(l,c))}}/**
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
 */class zs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zs(this.firestore,e,this._query)}}class jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class _r extends zs{constructor(e,n,r){super(e,n,ru(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new ce(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function zg(t,e,...n){if(t=dt(t),Ug("collection","path",e),t instanceof Za){const r=Qe.fromString(e,...n);return lf(r),new _r(t,null,r)}{if(!(t instanceof jt||t instanceof _r))throw new ne(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return lf(r),new _r(t.firestore,null,r)}}function en(t,e,...n){if(t=dt(t),arguments.length===1&&(e=Dm.newId()),Ug("doc","path",e),t instanceof Za){const r=Qe.fromString(e,...n);return af(r),new jt(t,null,new ce(r))}{if(!(t instanceof jt||t instanceof _r))throw new ne(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return af(r),new jt(t.firestore,t instanceof _r?t.converter:null,new ce(r))}}/**
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
 */class uf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new gg(this,"async_queue_retry"),this.Vu=()=>{const r=Fl();r&&se("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new qn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ji(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=gu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ge()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ro extends Za{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new uf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uf(e),this._firestoreClient=void 0,await e}}}function TI(t,e){const n=typeof t=="object"?t:Qc(),r=typeof t=="string"?t:"(default)",s=Ba(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wm("firestore");i&&EI(s,...i)}return s}function wu(t){if(t._terminated)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||II(t),t._firestoreClient}function II(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new nE(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Fg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new gI(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(Et.fromBase64String(e))}catch(n){throw new ne(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $g{constructor(e){this._methodName=e}}/**
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
 */class Eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */class Tu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const AI=/^__.*__$/;class RI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zi(e,this.data,n,this.fieldTransforms)}}function Bg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Iu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Iu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return _a(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Bg(this.Cu)&&AI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class SI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qa(e)}Qu(e,n,r,s=!1){return new Iu({Cu:e,methodName:n,qu:r,path:vt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jg(t){const e=t._freezeSettings(),n=Qa(t._databaseId);return new SI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CI(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Hg("Data must be an object, but it was:",o,r);const l=qg(r,o);let c,u;if(i.merge)c=new on(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const _=kI(e,f,n);if(!o.contains(_))throw new ne(z.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);OI(d,_)||d.push(_)}c=new on(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new RI(new Zt(l),c,u)}function xI(t,e,n,r=!1){return Au(n,t.Qu(r?4:3,e))}function Au(t,e){if(Wg(t=dt(t)))return Hg("Unsupported field value:",e,t),qg(t,e);if(t instanceof $g)return function(r,s){if(!Bg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Au(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:pa(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pa(s.serializer,i)}}if(r instanceof Eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ks)return{bytesValue:ag(s.serializer,r._byteString)};if(r instanceof jt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return su(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Xa(r)}`)}(t,e)}function qg(t,e){const n={};return Mm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,(r,s)=>{const i=Au(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Wg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof Eu||t instanceof ks||t instanceof jt||t instanceof $g||t instanceof Tu)}function Hg(t,e,n){if(!Wg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Xa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function kI(t,e,n){if((e=dt(e))instanceof bu)return e._internalPath;if(typeof e=="string")return Gg(t,e);throw _a("Field path arguments must be of type string or ",t,!1,void 0,n)}const PI=new RegExp("[~\\*/\\[\\]]");function Gg(t,e,n){if(e.search(PI)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bu(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(z.INVALID_ARGUMENT,l+t+c)}function OI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Kg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ru("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NI extends Kg{data(){return super.data()}}function Ru(t,e){return typeof e=="string"?Gg(t,e):e instanceof bu?e._internalPath:e._delegate._internalPath}/**
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
 */function VI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Su{}class DI extends Su{}function Qg(t,e,...n){let r=[];e instanceof Su&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Cu).length,l=i.filter(c=>c instanceof el).length;if(o>1||o>0&&l>0)throw new ne(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class el extends DI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new el(e,n,r)}_apply(e){const n=this._parse(e);return Jg(e._query,n),new zs(e.firestore,e.converter,fc(e._query,n))}_parse(e){const n=jg(e.firestore);return function(i,o,l,c,u,d,f){let _;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){df(f,d);const v=[];for(const k of f)v.push(hf(c,i,k));_={arrayValue:{values:v}}}else _=hf(c,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||df(f,d),_=xI(l,o,f,d==="in"||d==="not-in");return it.create(u,d,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Yg(t,e,n){const r=e,s=Ru("where",t);return el._create(s,r,n)}class Cu extends Su{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Jg(o,c),o=fc(o,c)}(e._query,n),new zs(e.firestore,e.converter,fc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hf(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new ne(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wm(e)&&n.indexOf("/")!==-1)throw new ne(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Qe.fromString(n));if(!ce.isDocumentKey(r))throw new ne(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Od(t,new ce(r))}if(n instanceof jt)return Od(t,n._key);throw new ne(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xa(n)}.`)}function df(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jg(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class MI{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ls(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>tt(o.doubleValue));return new Tu(i)}convertGeoPoint(e){return new Eu(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mi(e));default:return null}}convertTimestamp(e){const n=wr(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Qe.fromString(e);$e(fg(r));const s=new Li(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function LI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xg extends Kg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ru("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wo extends Xg{data(e={}){return super.data(e)}}class FI{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wo(this._firestore,this._userDataWriter,r.key,r,new fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:UI(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
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
 */function $i(t){t=Er(t,jt);const e=Er(t.firestore,ro);return vI(wu(e),t._key).then(n=>$I(e,t,n))}class Zg extends MI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function e_(t){t=Er(t,zs);const e=Er(t.firestore,ro),n=wu(e),r=new Zg(e);return VI(t._query),wI(n,t._query).then(s=>new FI(e,r,t,s))}function Fr(t,e,n){t=Er(t,jt);const r=Er(t.firestore,ro),s=LI(t.converter,e,n);return t_(r,[CI(jg(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,In.none())])}function zI(t){return t_(Er(t.firestore,ro),[new iu(t._key,In.none())])}function t_(t,e){return function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget(async()=>lI(await yI(r),s,i)),i.promise}(wu(t),e)}function $I(t,e,n){const r=n.docs.get(e._key),s=new Zg(t);return new Xg(t,s,e._key,r,new fi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ms=s})(Ds),qr(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ro(new $b(r.getProvider("auth-internal")),new Wb(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),En(Sd,"4.7.3",e),En(Sd,"4.7.3","esm2017")})();function xu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function n_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BI=n_,r_=new Ki("auth","Firebase",n_());/**
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
 */const ya=new Gc("@firebase/auth");function jI(t,...e){ya.logLevel<=Ce.WARN&&ya.warn(`Auth (${Ds}): ${t}`,...e)}function Ho(t,...e){ya.logLevel<=Ce.ERROR&&ya.error(`Auth (${Ds}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw Pu(t,...e)}function cn(t,...e){return Pu(t,...e)}function ku(t,e,n){const r=Object.assign(Object.assign({},BI()),{[e]:n});return new Ki("auth","Firebase",r).create(e,{appName:t.name})}function Wn(t){return ku(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),ku(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r_.create(t,...e)}function me(t,e,...n){if(!t)throw Pu(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ho(e),new Error(e)}function Xn(t,e){t||zn(e)}/**
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
 */function Tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WI(){return ff()==="http:"||ff()==="https:"}function ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WI()||_w()||"connection"in navigator)?navigator.onLine:!0}function GI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class so{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=pw()||yw()}get(){return HI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ou(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class s_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QI=new so(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,r,s={}){return i_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Qi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return gw()||(u.referrerPolicy="no-referrer"),s_.fetch()(o_(t,t.config.apiHost,n,l),u)})}async function i_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KI),e);try{const s=new JI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Oo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ku(t,d,u);nn(t,d)}}catch(s){if(s instanceof xn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function io(t,e,n,r,s={}){const i=await Ir(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function o_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ou(t.config,s):`${t.config.apiScheme}://${s}`}function YI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),QI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}function pf(t){return t!==void 0&&t.enterprise!==void 0}class XI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZI(t,e){return Ir(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
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
 */async function eA(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function a_(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(t,e=!1){const n=dt(t),r=await n.getIdToken(e),s=Nu(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ai(zl(s.auth_time)),issuedAtTime:Ai(zl(s.iat)),expirationTime:Ai(zl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zl(t){return Number(t)*1e3}function Nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=ym(n);return s?JSON.parse(s):(Ho("Failed to decode base64 JWT payload"),null)}catch(s){return Ho("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mf(t){const e=Nu(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&nA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ic{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function va(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bi(t,a_(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?l_(i.providerUserInfo):[],l=iA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ic(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function sA(t){const e=dt(t);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function l_(t){return t.map(e=>{var{providerId:n}=e,r=xu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function oA(t,e){const n=await i_(t,{},async()=>{const r=Qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=o_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",s_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aA(t,e){return Ir(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
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
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=mf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vs;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function sr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ic(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bi(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await Bi(this,eA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:P,emailVerified:j,isAnonymous:te,providerData:G,stsTokenManager:g}=n;me(P&&g,e,"internal-error");const m=vs.fromJSON(this.name,g);me(typeof P=="string",e,"internal-error"),sr(f,e.name),sr(_,e.name),me(typeof j=="boolean",e,"internal-error"),me(typeof te=="boolean",e,"internal-error"),sr(v,e.name),sr(k,e.name),sr(O,e.name),sr(V,e.name),sr(q,e.name),sr(N,e.name);const b=new $n({uid:P,auth:e,email:_,emailVerified:j,displayName:f,isAnonymous:te,photoURL:k,phoneNumber:v,tenantId:O,stsTokenManager:m,createdAt:q,lastLoginAt:N});return G&&Array.isArray(G)&&(b.providerData=G.map(I=>Object.assign({},I))),V&&(b._redirectEventId=V),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new vs;s.updateFromServerResponse(n);const i=new $n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await va(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?l_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new vs;l.updateFromIdToken(r);const c=new $n({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ic(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const gf=new Map;function Bn(t){Xn(t instanceof Function,"Expected a class definition");let e=gf.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gf.set(t,e),e)}/**
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
 */class c_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c_.type="NONE";const _f=c_;/**
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
 */function Go(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Go(this.userKey,s.apiKey,i),this.fullPersistenceKey=Go("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(Bn(_f),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Bn(_f);const o=Go(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const f=$n._fromJSON(e,d);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ws(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ws(i,e,r))}}/**
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
 */function yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m_(e))return"Blackberry";if(g_(e))return"Webos";if(h_(e))return"Safari";if((e.includes("chrome/")||d_(e))&&!e.includes("edge/"))return"Chrome";if(p_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u_(t=Ot()){return/firefox\//i.test(t)}function h_(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d_(t=Ot()){return/crios\//i.test(t)}function f_(t=Ot()){return/iemobile/i.test(t)}function p_(t=Ot()){return/android/i.test(t)}function m_(t=Ot()){return/blackberry/i.test(t)}function g_(t=Ot()){return/webos/i.test(t)}function Vu(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lA(t=Ot()){var e;return Vu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cA(){return vw()&&document.documentMode===10}function __(t=Ot()){return Vu(t)||p_(t)||g_(t)||m_(t)||/windows phone/i.test(t)||f_(t)}/**
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
 */function y_(t,e=[]){let n;switch(t){case"Browser":n=yf(Ot());break;case"Worker":n=`${yf(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${r}`}/**
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
 */class uA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hA(t,e={}){return Ir(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
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
 */const dA=6;class fA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class pA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new uA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await a_(this,{idToken:e}),r=await $n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Wn(this));const n=e?dt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hA(this),n=new fA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ar(t){return dt(t)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sw(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(t){tl=t}function v_(t){return tl.loadJS(t)}function gA(){return tl.recaptchaEnterpriseScript}function _A(){return tl.gapiScript}function yA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vA="recaptcha-enterprise",wA="NO_RECAPTCHA";class bA{constructor(e){this.type=vA,this.auth=Ar(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ZI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new XI(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;pf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(wA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&pf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gA();c.length!==0&&(c+=l),v_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function wf(t,e,n,r=!1){const s=new bA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ac(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await wf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await wf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function EA(t,e){const n=Ba(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(aa(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function TA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IA(t,e,n){const r=Ar(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=w_(e),{host:o,port:l}=AA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),RA()}function w_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AA(t){const e=w_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:bf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:bf(o)}}}function bf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Du{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function SA(t,e){return Ir(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function CA(t,e){return io(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
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
 */async function xA(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function kA(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
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
 */class ji extends Du{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ji(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ac(e,n,"signInWithPassword",CA);case"emailLink":return xA(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ac(e,r,"signUpPassword",SA);case"emailLink":return kA(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bs(t,e){return io(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
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
 */const PA="http://localhost";class Kr extends Du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:PA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qi(n)}return e}}/**
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
 */function OA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NA(t){const e=li(ci(t)).link,n=e?li(ci(e)).deep_link_id:null,r=li(ci(t)).deep_link_id;return(r?li(ci(r)).link:null)||r||n||e||t}class Mu{constructor(e){var n,r,s,i,o,l;const c=li(ci(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,f=OA((s=c.mode)!==null&&s!==void 0?s:null);me(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=NA(e);try{return new Mu(n)}catch{return null}}}/**
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
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mu.parseLink(n);return me(r,"argument-error"),ji._fromEmailAndCode(e,r.code,r.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oo extends Lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cr extends oo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
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
 */class Un extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class ur extends oo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class hr extends oo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function VA(t,e){return io(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
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
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $n._fromIdTokenResponse(e,r,s),o=Ef(r);return new Qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ef(r);return new Qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wa extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wa(e,n,r,s)}}function b_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wa._fromErrorAndOperation(t,i,e,r):i})}async function DA(t,e,n=!1){const r=await Bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
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
 */async function MA(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Wn(r));const s="reauthenticate";try{const i=await Bi(t,b_(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=Nu(i.idToken);me(o,r,"internal-error");const{sub:l}=o;return me(t.uid===l,r,"user-mismatch"),Qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
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
 */async function E_(t,e,n=!1){if(sn(t.app))return Promise.reject(Wn(t));const r="signIn",s=await b_(t,r,e),i=await Qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function LA(t,e){return E_(Ar(t),e)}/**
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
 */async function T_(t){const e=Ar(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FA(t,e,n){if(sn(t.app))return Promise.reject(Wn(t));const r=Ar(t),o=await Ac(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&T_(t),c}),l=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function UA(t,e,n){return sn(t.app)?Promise.reject(Wn(t)):LA(dt(t),$s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&T_(t),r})}function zA(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function $A(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function BA(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function jA(t){return dt(t).signOut()}const ba="__sak";/**
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
 */class I_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ba,"1"),this.storage.removeItem(ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qA=1e3,WA=10;class A_ extends I_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=__(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,WA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}A_.type="LOCAL";const HA=A_;/**
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
 */class R_ extends I_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R_.type="SESSION";const S_=R_;/**
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
 */function GA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await GA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nl.receivers=[];/**
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
 */function Fu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Fu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const _=f;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function QA(t){Rn().location.href=t}/**
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
 */function C_(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function YA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XA(){return C_()?self:null}/**
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
 */const x_="firebaseLocalStorageDb",ZA=1,Ea="firebaseLocalStorage",k_="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rl(t,e){return t.transaction([Ea],e?"readwrite":"readonly").objectStore(Ea)}function eR(){const t=indexedDB.deleteDatabase(x_);return new ao(t).toPromise()}function Rc(){const t=indexedDB.open(x_,ZA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ea,{keyPath:k_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ea)?e(r):(r.close(),await eR(),e(await Rc()))})})}async function Tf(t,e,n){const r=rl(t,!0).put({[k_]:e,value:n});return new ao(r).toPromise()}async function tR(t,e){const n=rl(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function If(t,e){const n=rl(t,!0).delete(e);return new ao(n).toPromise()}const nR=800,rR=3;class P_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nl._getInstance(XA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YA(),!this.activeServiceWorker)return;this.sender=new KA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rc();return await Tf(e,ba,"1"),await If(e,ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>If(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rl(s,!1).getAll();return new ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P_.type="LOCAL";const sR=P_;new so(3e4,6e4);/**
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
 */function O_(t,e){return e?Bn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uu extends Du{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iR(t){return E_(t.auth,new Uu(t),t.bypassAuthState)}function oR(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),MA(n,new Uu(t),t.bypassAuthState)}async function aR(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),DA(n,new Uu(t),t.bypassAuthState)}/**
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
 */class N_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iR;case"linkViaPopup":case"linkViaRedirect":return aR;case"reauthViaPopup":case"reauthViaRedirect":return oR;default:nn(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lR=new so(2e3,1e4);async function cR(t,e,n){if(sn(t.app))return Promise.reject(cn(t,"operation-not-supported-in-this-environment"));const r=Ar(t);qI(t,e,Lu);const s=O_(r,n);return new Ur(r,"signInViaPopup",e,s).executeNotNull()}class Ur extends N_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=Fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lR.get())};e()}}Ur.currentPopupAction=null;/**
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
 */const uR="pendingRedirect",Ko=new Map;class hR extends N_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ko.get(this.auth._key());if(!e){try{const r=await dR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ko.set(this.auth._key(),e)}return this.bypassAuthState||Ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dR(t,e){const n=mR(e),r=pR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function fR(t,e){Ko.set(t._key(),e)}function pR(t){return Bn(t._redirectPersistence)}function mR(t){return Go(uR,t.config.apiKey,t.name)}async function gR(t,e,n=!1){if(sn(t.app))return Promise.reject(Wn(t));const r=Ar(t),s=O_(r,e),o=await new hR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _R=10*60*1e3;class yR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!V_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_R&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function V_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V_(t);default:return!1}}/**
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
 */async function wR(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
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
 */const bR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ER=/^https?/;async function TR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wR(t);for(const n of e)try{if(IR(n))return}catch{}nn(t,"unauthorized-domain")}function IR(t){const e=Tc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ER.test(n))return!1;if(bR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const AR=new so(3e4,6e4);function Rf(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RR(t){return new Promise((e,n)=>{var r,s,i;function o(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(cn(t,"network-request-failed"))},timeout:AR.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const l=yA("iframefcb");return Rn()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},v_(`${_A()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function SR(t){return Qo=Qo||RR(t),Qo}/**
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
 */const CR=new so(5e3,15e3),xR="__/auth/iframe",kR="emulator/auth/iframe",PR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NR(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,kR):`https://${t.config.authDomain}/${xR}`,r={apiKey:e.apiKey,appName:t.name,v:Ds},s=OR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Qi(r).slice(1)}`}async function VR(t){const e=await SR(t),n=Rn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:NR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},CR.get());function c(){Rn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const DR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MR=500,LR=600,FR="_blank",UR="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zR(t,e,n,r=MR,s=LR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},DR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ot().toLowerCase();n&&(l=d_(u)?FR:n),u_(u)&&(e=e||UR,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[v,k])=>`${_}${v}=${k},`,"");if(lA(u)&&l!=="_self")return $R(e||"",l),new Sf(null);const f=window.open(e||"",l,d);me(f,t,"popup-blocked");try{f.focus()}catch{}return new Sf(f)}function $R(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BR="__/auth/handler",jR="emulator/auth/handler",qR=encodeURIComponent("fac");async function Cf(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ds,eventId:s};if(e instanceof Lu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof oo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${qR}=${encodeURIComponent(c)}`:"";return`${WR(t)}?${Qi(l).slice(1)}${u}`}function WR({config:t}){return t.emulator?Ou(t,jR):`https://${t.authDomain}/${BR}`}/**
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
 */const $l="webStorageSupport";class HR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S_,this._completeRedirectFn=gR,this._overrideRedirectResult=fR}async _openPopup(e,n,r,s){var i;Xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cf(e,n,r,Tc(),s);return zR(e,o,Fu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cf(e,n,r,Tc(),s);return QA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VR(e),r=new yR(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($l,{type:$l},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$l];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return __()||h_()||Vu()}}const GR=HR;var xf="@firebase/auth",kf="1.7.9";/**
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
 */class KR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YR(t){qr(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y_(t)},u=new pA(r,s,i,c);return TA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qr(new yr("auth-internal",e=>{const n=Ar(e.getProvider("auth").getImmediate());return(r=>new KR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(xf,kf,QR(t)),En(xf,kf,"esm2017")}/**
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
 */const JR=5*60,XR=Em("authIdTokenMaxAge")||JR;let Pf=null;const ZR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XR)return;const s=n==null?void 0:n.token;Pf!==s&&(Pf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eS(t=Qc()){const e=Ba(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EA(t,{popupRedirectResolver:GR,persistence:[sR,HA,S_]}),r=Em("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ZR(i.toString());$A(n,o,()=>o(n.currentUser)),zA(n,l=>o(l))}}const s=vm("auth");return s&&IA(n,`http://${s}`),n}function tS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YR("Browser");const nS={apiKey:"AIzaSyDfQSrdrcG261fw18qDZ5h1g5zRkcuN27A",authDomain:"seamlesscal.firebaseapp.com",projectId:"seamlesscal",storageBucket:"seamlesscal.firebasestorage.app",messagingSenderId:"727692989987",appId:"1:727692989987:web:7361d083af6c0a5a39c396",measurementId:"G-T32CE44ZW6"},D_=Am(nS),Ut=TI(D_),Ri=eS(D_);function M_(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=M_(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function L_(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=M_(t))&&(r&&(r+=" "),r+=e);return r}const rS=(t,e)=>{const n=new Array(t.length+e.length);for(let r=0;r<t.length;r++)n[r]=t[r];for(let r=0;r<e.length;r++)n[t.length+r]=e[r];return n},sS=(t,e)=>({classGroupId:t,validator:e}),F_=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n}),Ta="-",Of=[],iS="arbitrary..",oS=t=>{const e=lS(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return aS(o);const l=o.split(Ta),c=l[0]===""&&l.length>1?1:0;return U_(l,c,e)},getConflictingClassGroupIds:(o,l)=>{if(l){const c=r[o],u=n[o];return c?u?rS(u,c):c:u||Of}return n[o]||Of}}},U_=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;const s=t[e],i=n.nextPart.get(s);if(i){const u=U_(t,e+1,i);if(u)return u}const o=n.validators;if(o===null)return;const l=e===0?t.join(Ta):t.slice(e).join(Ta),c=o.length;for(let u=0;u<c;u++){const d=o[u];if(d.validator(l))return d.classGroupId}},aS=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=t.slice(1,-1),n=e.indexOf(":"),r=e.slice(0,n);return r?iS+r:void 0})(),lS=t=>{const{theme:e,classGroups:n}=t;return cS(n,e)},cS=(t,e)=>{const n=F_();for(const r in t){const s=t[r];zu(s,n,r,e)}return n},zu=(t,e,n,r)=>{const s=t.length;for(let i=0;i<s;i++){const o=t[i];uS(o,e,n,r)}},uS=(t,e,n,r)=>{if(typeof t=="string"){hS(t,e,n);return}if(typeof t=="function"){dS(t,e,n,r);return}fS(t,e,n,r)},hS=(t,e,n)=>{const r=t===""?e:z_(e,t);r.classGroupId=n},dS=(t,e,n,r)=>{if(pS(t)){zu(t(r),e,n,r);return}e.validators===null&&(e.validators=[]),e.validators.push(sS(n,t))},fS=(t,e,n,r)=>{const s=Object.entries(t),i=s.length;for(let o=0;o<i;o++){const[l,c]=s[o];zu(c,z_(e,l),n,r)}},z_=(t,e)=>{let n=t;const r=e.split(Ta),s=r.length;for(let i=0;i<s;i++){const o=r[i];let l=n.nextPart.get(o);l||(l=F_(),n.nextPart.set(o,l)),n=l}return n},pS=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,mS=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),r=Object.create(null);const s=(i,o)=>{n[i]=o,e++,e>t&&(e=0,r=n,n=Object.create(null))};return{get(i){let o=n[i];if(o!==void 0)return o;if((o=r[i])!==void 0)return s(i,o),o},set(i,o){i in n?n[i]=o:s(i,o)}}},Sc="!",Nf=":",gS=[],Vf=(t,e,n,r,s)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:r,isExternal:s}),_S=t=>{const{prefix:e,experimentalParseClassName:n}=t;let r=s=>{const i=[];let o=0,l=0,c=0,u;const d=s.length;for(let O=0;O<d;O++){const V=s[O];if(o===0&&l===0){if(V===Nf){i.push(s.slice(c,O)),c=O+1;continue}if(V==="/"){u=O;continue}}V==="["?o++:V==="]"?o--:V==="("?l++:V===")"&&l--}const f=i.length===0?s:s.slice(c);let _=f,v=!1;f.endsWith(Sc)?(_=f.slice(0,-1),v=!0):f.startsWith(Sc)&&(_=f.slice(1),v=!0);const k=u&&u>c?u-c:void 0;return Vf(i,v,_,k)};if(e){const s=e+Nf,i=r;r=o=>o.startsWith(s)?i(o.slice(s.length)):Vf(gS,!1,o,void 0,!0)}if(n){const s=r;r=i=>n({className:i,parseClassName:s})}return r},yS=t=>{const e=new Map;return t.orderSensitiveModifiers.forEach((n,r)=>{e.set(n,1e6+r)}),n=>{const r=[];let s=[];for(let i=0;i<n.length;i++){const o=n[i],l=o[0]==="[",c=e.has(o);l||c?(s.length>0&&(s.sort(),r.push(...s),s=[]),r.push(o)):s.push(o)}return s.length>0&&(s.sort(),r.push(...s)),r}},vS=t=>({cache:mS(t.cacheSize),parseClassName:_S(t),sortModifiers:yS(t),postfixLookupClassGroupIds:wS(t),...oS(t)}),wS=t=>{const e=Object.create(null),n=t.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)e[n[r]]=!0;return e},bS=/\s+/,ES=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:i,postfixLookupClassGroupIds:o}=e,l=[],c=t.trim().split(bS);let u="";for(let d=c.length-1;d>=0;d-=1){const f=c[d],{isExternal:_,modifiers:v,hasImportantModifier:k,baseClassName:O,maybePostfixModifierPosition:V}=n(f);if(_){u=f+(u.length>0?" "+u:u);continue}let q=!!V,N;if(q){const g=O.substring(0,V);N=r(g);const m=N&&o[N]?r(O):void 0;m&&m!==N&&(N=m,q=!1)}else N=r(O);if(!N){if(!q){u=f+(u.length>0?" "+u:u);continue}if(N=r(O),!N){u=f+(u.length>0?" "+u:u);continue}q=!1}const P=v.length===0?"":v.length===1?v[0]:i(v).join(":"),j=k?P+Sc:P,te=j+N;if(l.indexOf(te)>-1)continue;l.push(te);const G=s(N,q);for(let g=0;g<G.length;++g){const m=G[g];l.push(j+m)}u=f+(u.length>0?" "+u:u)}return u},TS=(...t)=>{let e=0,n,r,s="";for(;e<t.length;)(n=t[e++])&&(r=$_(n))&&(s&&(s+=" "),s+=r);return s},$_=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=$_(t[r]))&&(n&&(n+=" "),n+=e);return n},IS=(t,...e)=>{let n,r,s,i;const o=c=>{const u=e.reduce((d,f)=>f(d),t());return n=vS(u),r=n.cache.get,s=n.cache.set,i=l,l(c)},l=c=>{const u=r(c);if(u)return u;const d=ES(c,n);return s(c,d),d};return i=o,(...c)=>i(TS(...c))},AS=[],lt=t=>{const e=n=>n[t]||AS;return e.isThemeGetter=!0,e},B_=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,j_=/^\((?:(\w[\w-]*):)?(.+)\)$/i,RS=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,SS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,CS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,kS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,PS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ir=t=>RS.test(t),Re=t=>!!t&&!Number.isNaN(Number(t)),mn=t=>!!t&&Number.isInteger(Number(t)),Bl=t=>t.endsWith("%")&&Re(t.slice(0,-1)),Nn=t=>SS.test(t),q_=()=>!0,OS=t=>CS.test(t)&&!xS.test(t),$u=()=>!1,NS=t=>kS.test(t),VS=t=>PS.test(t),DS=t=>!Z(t)&&!ee(t),MS=t=>t.startsWith("@container")&&(t[10]==="/"&&t[11]!==void 0||t[11]==="s"&&t[16]!==void 0&&t.startsWith("-size/",10)||t[11]==="n"&&t[18]!==void 0&&t.startsWith("-normal/",10)),LS=t=>Rr(t,G_,$u),Z=t=>B_.test(t),Nr=t=>Rr(t,K_,OS),Df=t=>Rr(t,WS,Re),FS=t=>Rr(t,Y_,q_),US=t=>Rr(t,Q_,$u),Mf=t=>Rr(t,W_,$u),zS=t=>Rr(t,H_,VS),No=t=>Rr(t,J_,NS),ee=t=>j_.test(t),si=t=>es(t,K_),$S=t=>es(t,Q_),Lf=t=>es(t,W_),BS=t=>es(t,G_),jS=t=>es(t,H_),Vo=t=>es(t,J_,!0),qS=t=>es(t,Y_,!0),Rr=(t,e,n)=>{const r=B_.exec(t);return r?r[1]?e(r[1]):n(r[2]):!1},es=(t,e,n=!1)=>{const r=j_.exec(t);return r?r[1]?e(r[1]):n:!1},W_=t=>t==="position"||t==="percentage",H_=t=>t==="image"||t==="url",G_=t=>t==="length"||t==="size"||t==="bg-size",K_=t=>t==="length",WS=t=>t==="number",Q_=t=>t==="family-name",Y_=t=>t==="number"||t==="weight",J_=t=>t==="shadow",HS=()=>{const t=lt("color"),e=lt("font"),n=lt("text"),r=lt("font-weight"),s=lt("tracking"),i=lt("leading"),o=lt("breakpoint"),l=lt("container"),c=lt("spacing"),u=lt("radius"),d=lt("shadow"),f=lt("inset-shadow"),_=lt("text-shadow"),v=lt("drop-shadow"),k=lt("blur"),O=lt("perspective"),V=lt("aspect"),q=lt("ease"),N=lt("animate"),P=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],te=()=>[...j(),ee,Z],G=()=>["auto","hidden","clip","visible","scroll"],g=()=>["auto","contain","none"],m=()=>[ee,Z,c],b=()=>[ir,"full","auto",...m()],I=()=>[mn,"none","subgrid",ee,Z],R=()=>["auto",{span:["full",mn,ee,Z]},mn,ee,Z],C=()=>[mn,"auto",ee,Z],E=()=>["auto","min","max","fr",ee,Z],ot=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],at=()=>["start","end","center","stretch","center-safe","end-safe"],Pe=()=>["auto",...m()],Ee=()=>[ir,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...m()],Ae=()=>[ir,"screen","full","dvw","lvw","svw","min","max","fit",...m()],ft=()=>[ir,"screen","full","lh","dvh","lvh","svh","min","max","fit",...m()],re=()=>[t,ee,Z],Nt=()=>[...j(),Lf,Mf,{position:[ee,Z]}],We=()=>["no-repeat",{repeat:["","x","y","space","round"]}],He=()=>["auto","cover","contain",BS,LS,{size:[ee,Z]}],Qt=()=>[Bl,si,Nr],Ue=()=>["","none","full",u,ee,Z],De=()=>["",Re,si,Nr],M=()=>["solid","dashed","dotted","double"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>[Re,Bl,Lf,Mf],ie=()=>["","none",k,ee,Z],_e=()=>["none",Re,ee,Z],w=()=>["none",Re,ee,Z],T=()=>[Re,ee,Z],S=()=>[ir,"full",...m()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Nn],breakpoint:[Nn],color:[q_],container:[Nn],"drop-shadow":[Nn],ease:["in","out","in-out"],font:[DS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Nn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Nn],shadow:[Nn],spacing:["px",Re],text:[Nn],"text-shadow":[Nn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ir,Z,ee,V]}],container:["container"],"container-type":[{"@container":["","normal","size",ee,Z]}],"container-named":[MS],columns:[{columns:[Re,Z,ee,l]}],"break-after":[{"break-after":P()}],"break-before":[{"break-before":P()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:te()}],overflow:[{overflow:G()}],"overflow-x":[{"overflow-x":G()}],"overflow-y":[{"overflow-y":G()}],overscroll:[{overscroll:g()}],"overscroll-x":[{"overscroll-x":g()}],"overscroll-y":[{"overscroll-y":g()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:b()}],"inset-x":[{"inset-x":b()}],"inset-y":[{"inset-y":b()}],start:[{"inset-s":b(),start:b()}],end:[{"inset-e":b(),end:b()}],"inset-bs":[{"inset-bs":b()}],"inset-be":[{"inset-be":b()}],top:[{top:b()}],right:[{right:b()}],bottom:[{bottom:b()}],left:[{left:b()}],visibility:["visible","invisible","collapse"],z:[{z:[mn,"auto",ee,Z]}],basis:[{basis:[ir,"full","auto",l,...m()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Re,ir,"auto","initial","none",Z]}],grow:[{grow:["",Re,ee,Z]}],shrink:[{shrink:["",Re,ee,Z]}],order:[{order:[mn,"first","last","none",ee,Z]}],"grid-cols":[{"grid-cols":I()}],"col-start-end":[{col:R()}],"col-start":[{"col-start":C()}],"col-end":[{"col-end":C()}],"grid-rows":[{"grid-rows":I()}],"row-start-end":[{row:R()}],"row-start":[{"row-start":C()}],"row-end":[{"row-end":C()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":E()}],"auto-rows":[{"auto-rows":E()}],gap:[{gap:m()}],"gap-x":[{"gap-x":m()}],"gap-y":[{"gap-y":m()}],"justify-content":[{justify:[...ot(),"normal"]}],"justify-items":[{"justify-items":[...at(),"normal"]}],"justify-self":[{"justify-self":["auto",...at()]}],"align-content":[{content:["normal",...ot()]}],"align-items":[{items:[...at(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...at(),{baseline:["","last"]}]}],"place-content":[{"place-content":ot()}],"place-items":[{"place-items":[...at(),"baseline"]}],"place-self":[{"place-self":["auto",...at()]}],p:[{p:m()}],px:[{px:m()}],py:[{py:m()}],ps:[{ps:m()}],pe:[{pe:m()}],pbs:[{pbs:m()}],pbe:[{pbe:m()}],pt:[{pt:m()}],pr:[{pr:m()}],pb:[{pb:m()}],pl:[{pl:m()}],m:[{m:Pe()}],mx:[{mx:Pe()}],my:[{my:Pe()}],ms:[{ms:Pe()}],me:[{me:Pe()}],mbs:[{mbs:Pe()}],mbe:[{mbe:Pe()}],mt:[{mt:Pe()}],mr:[{mr:Pe()}],mb:[{mb:Pe()}],ml:[{ml:Pe()}],"space-x":[{"space-x":m()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":m()}],"space-y-reverse":["space-y-reverse"],size:[{size:Ee()}],"inline-size":[{inline:["auto",...Ae()]}],"min-inline-size":[{"min-inline":["auto",...Ae()]}],"max-inline-size":[{"max-inline":["none",...Ae()]}],"block-size":[{block:["auto",...ft()]}],"min-block-size":[{"min-block":["auto",...ft()]}],"max-block-size":[{"max-block":["none",...ft()]}],w:[{w:[l,"screen",...Ee()]}],"min-w":[{"min-w":[l,"screen","none",...Ee()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[o]},...Ee()]}],h:[{h:["screen","lh",...Ee()]}],"min-h":[{"min-h":["screen","lh","none",...Ee()]}],"max-h":[{"max-h":["screen","lh",...Ee()]}],"font-size":[{text:["base",n,si,Nr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,qS,FS]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Bl,Z]}],"font-family":[{font:[$S,US,e]}],"font-features":[{"font-features":[Z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,ee,Z]}],"line-clamp":[{"line-clamp":[Re,"none",ee,Df]}],leading:[{leading:[i,...m()]}],"list-image":[{"list-image":["none",ee,Z]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ee,Z]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:re()}],"text-color":[{text:re()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...M(),"wavy"]}],"text-decoration-thickness":[{decoration:[Re,"from-font","auto",ee,Nr]}],"text-decoration-color":[{decoration:re()}],"underline-offset":[{"underline-offset":[Re,"auto",ee,Z]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:m()}],"tab-size":[{tab:[mn,ee,Z]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ee,Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ee,Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Nt()}],"bg-repeat":[{bg:We()}],"bg-size":[{bg:He()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},mn,ee,Z],radial:["",ee,Z],conic:[mn,ee,Z]},jS,zS]}],"bg-color":[{bg:re()}],"gradient-from-pos":[{from:Qt()}],"gradient-via-pos":[{via:Qt()}],"gradient-to-pos":[{to:Qt()}],"gradient-from":[{from:re()}],"gradient-via":[{via:re()}],"gradient-to":[{to:re()}],rounded:[{rounded:Ue()}],"rounded-s":[{"rounded-s":Ue()}],"rounded-e":[{"rounded-e":Ue()}],"rounded-t":[{"rounded-t":Ue()}],"rounded-r":[{"rounded-r":Ue()}],"rounded-b":[{"rounded-b":Ue()}],"rounded-l":[{"rounded-l":Ue()}],"rounded-ss":[{"rounded-ss":Ue()}],"rounded-se":[{"rounded-se":Ue()}],"rounded-ee":[{"rounded-ee":Ue()}],"rounded-es":[{"rounded-es":Ue()}],"rounded-tl":[{"rounded-tl":Ue()}],"rounded-tr":[{"rounded-tr":Ue()}],"rounded-br":[{"rounded-br":Ue()}],"rounded-bl":[{"rounded-bl":Ue()}],"border-w":[{border:De()}],"border-w-x":[{"border-x":De()}],"border-w-y":[{"border-y":De()}],"border-w-s":[{"border-s":De()}],"border-w-e":[{"border-e":De()}],"border-w-bs":[{"border-bs":De()}],"border-w-be":[{"border-be":De()}],"border-w-t":[{"border-t":De()}],"border-w-r":[{"border-r":De()}],"border-w-b":[{"border-b":De()}],"border-w-l":[{"border-l":De()}],"divide-x":[{"divide-x":De()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":De()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...M(),"hidden","none"]}],"divide-style":[{divide:[...M(),"hidden","none"]}],"border-color":[{border:re()}],"border-color-x":[{"border-x":re()}],"border-color-y":[{"border-y":re()}],"border-color-s":[{"border-s":re()}],"border-color-e":[{"border-e":re()}],"border-color-bs":[{"border-bs":re()}],"border-color-be":[{"border-be":re()}],"border-color-t":[{"border-t":re()}],"border-color-r":[{"border-r":re()}],"border-color-b":[{"border-b":re()}],"border-color-l":[{"border-l":re()}],"divide-color":[{divide:re()}],"outline-style":[{outline:[...M(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Re,ee,Z]}],"outline-w":[{outline:["",Re,si,Nr]}],"outline-color":[{outline:re()}],shadow:[{shadow:["","none",d,Vo,No]}],"shadow-color":[{shadow:re()}],"inset-shadow":[{"inset-shadow":["none",f,Vo,No]}],"inset-shadow-color":[{"inset-shadow":re()}],"ring-w":[{ring:De()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:re()}],"ring-offset-w":[{"ring-offset":[Re,Nr]}],"ring-offset-color":[{"ring-offset":re()}],"inset-ring-w":[{"inset-ring":De()}],"inset-ring-color":[{"inset-ring":re()}],"text-shadow":[{"text-shadow":["none",_,Vo,No]}],"text-shadow-color":[{"text-shadow":re()}],opacity:[{opacity:[Re,ee,Z]}],"mix-blend":[{"mix-blend":[...X(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":X()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Re]}],"mask-image-linear-from-pos":[{"mask-linear-from":W()}],"mask-image-linear-to-pos":[{"mask-linear-to":W()}],"mask-image-linear-from-color":[{"mask-linear-from":re()}],"mask-image-linear-to-color":[{"mask-linear-to":re()}],"mask-image-t-from-pos":[{"mask-t-from":W()}],"mask-image-t-to-pos":[{"mask-t-to":W()}],"mask-image-t-from-color":[{"mask-t-from":re()}],"mask-image-t-to-color":[{"mask-t-to":re()}],"mask-image-r-from-pos":[{"mask-r-from":W()}],"mask-image-r-to-pos":[{"mask-r-to":W()}],"mask-image-r-from-color":[{"mask-r-from":re()}],"mask-image-r-to-color":[{"mask-r-to":re()}],"mask-image-b-from-pos":[{"mask-b-from":W()}],"mask-image-b-to-pos":[{"mask-b-to":W()}],"mask-image-b-from-color":[{"mask-b-from":re()}],"mask-image-b-to-color":[{"mask-b-to":re()}],"mask-image-l-from-pos":[{"mask-l-from":W()}],"mask-image-l-to-pos":[{"mask-l-to":W()}],"mask-image-l-from-color":[{"mask-l-from":re()}],"mask-image-l-to-color":[{"mask-l-to":re()}],"mask-image-x-from-pos":[{"mask-x-from":W()}],"mask-image-x-to-pos":[{"mask-x-to":W()}],"mask-image-x-from-color":[{"mask-x-from":re()}],"mask-image-x-to-color":[{"mask-x-to":re()}],"mask-image-y-from-pos":[{"mask-y-from":W()}],"mask-image-y-to-pos":[{"mask-y-to":W()}],"mask-image-y-from-color":[{"mask-y-from":re()}],"mask-image-y-to-color":[{"mask-y-to":re()}],"mask-image-radial":[{"mask-radial":[ee,Z]}],"mask-image-radial-from-pos":[{"mask-radial-from":W()}],"mask-image-radial-to-pos":[{"mask-radial-to":W()}],"mask-image-radial-from-color":[{"mask-radial-from":re()}],"mask-image-radial-to-color":[{"mask-radial-to":re()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":j()}],"mask-image-conic-pos":[{"mask-conic":[Re]}],"mask-image-conic-from-pos":[{"mask-conic-from":W()}],"mask-image-conic-to-pos":[{"mask-conic-to":W()}],"mask-image-conic-from-color":[{"mask-conic-from":re()}],"mask-image-conic-to-color":[{"mask-conic-to":re()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Nt()}],"mask-repeat":[{mask:We()}],"mask-size":[{mask:He()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ee,Z]}],filter:[{filter:["","none",ee,Z]}],blur:[{blur:ie()}],brightness:[{brightness:[Re,ee,Z]}],contrast:[{contrast:[Re,ee,Z]}],"drop-shadow":[{"drop-shadow":["","none",v,Vo,No]}],"drop-shadow-color":[{"drop-shadow":re()}],grayscale:[{grayscale:["",Re,ee,Z]}],"hue-rotate":[{"hue-rotate":[Re,ee,Z]}],invert:[{invert:["",Re,ee,Z]}],saturate:[{saturate:[Re,ee,Z]}],sepia:[{sepia:["",Re,ee,Z]}],"backdrop-filter":[{"backdrop-filter":["","none",ee,Z]}],"backdrop-blur":[{"backdrop-blur":ie()}],"backdrop-brightness":[{"backdrop-brightness":[Re,ee,Z]}],"backdrop-contrast":[{"backdrop-contrast":[Re,ee,Z]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Re,ee,Z]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Re,ee,Z]}],"backdrop-invert":[{"backdrop-invert":["",Re,ee,Z]}],"backdrop-opacity":[{"backdrop-opacity":[Re,ee,Z]}],"backdrop-saturate":[{"backdrop-saturate":[Re,ee,Z]}],"backdrop-sepia":[{"backdrop-sepia":["",Re,ee,Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":m()}],"border-spacing-x":[{"border-spacing-x":m()}],"border-spacing-y":[{"border-spacing-y":m()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ee,Z]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Re,"initial",ee,Z]}],ease:[{ease:["linear","initial",q,ee,Z]}],delay:[{delay:[Re,ee,Z]}],animate:[{animate:["none",N,ee,Z]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[O,ee,Z]}],"perspective-origin":[{"perspective-origin":te()}],rotate:[{rotate:_e()}],"rotate-x":[{"rotate-x":_e()}],"rotate-y":[{"rotate-y":_e()}],"rotate-z":[{"rotate-z":_e()}],scale:[{scale:w()}],"scale-x":[{"scale-x":w()}],"scale-y":[{"scale-y":w()}],"scale-z":[{"scale-z":w()}],"scale-3d":["scale-3d"],skew:[{skew:T()}],"skew-x":[{"skew-x":T()}],"skew-y":[{"skew-y":T()}],transform:[{transform:[ee,Z,"","none","gpu","cpu"]}],"transform-origin":[{origin:te()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:S()}],"translate-x":[{"translate-x":S()}],"translate-y":[{"translate-y":S()}],"translate-z":[{"translate-z":S()}],"translate-none":["translate-none"],zoom:[{zoom:[mn,ee,Z]}],accent:[{accent:re()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:re()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ee,Z]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":re()}],"scrollbar-track-color":[{"scrollbar-track":re()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":m()}],"scroll-mx":[{"scroll-mx":m()}],"scroll-my":[{"scroll-my":m()}],"scroll-ms":[{"scroll-ms":m()}],"scroll-me":[{"scroll-me":m()}],"scroll-mbs":[{"scroll-mbs":m()}],"scroll-mbe":[{"scroll-mbe":m()}],"scroll-mt":[{"scroll-mt":m()}],"scroll-mr":[{"scroll-mr":m()}],"scroll-mb":[{"scroll-mb":m()}],"scroll-ml":[{"scroll-ml":m()}],"scroll-p":[{"scroll-p":m()}],"scroll-px":[{"scroll-px":m()}],"scroll-py":[{"scroll-py":m()}],"scroll-ps":[{"scroll-ps":m()}],"scroll-pe":[{"scroll-pe":m()}],"scroll-pbs":[{"scroll-pbs":m()}],"scroll-pbe":[{"scroll-pbe":m()}],"scroll-pt":[{"scroll-pt":m()}],"scroll-pr":[{"scroll-pr":m()}],"scroll-pb":[{"scroll-pb":m()}],"scroll-pl":[{"scroll-pl":m()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ee,Z]}],fill:[{fill:["none",...re()]}],"stroke-w":[{stroke:[Re,si,Nr,Df]}],stroke:[{stroke:["none",...re()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},GS=IS(HS);function sl(...t){return GS(L_(t))}const pr={__name:"Card",props:{class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){const e=t;return(n,r)=>(le(),Ie("div",{"data-slot":"card",class:zt(oe(sl)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e.class))},[Ns(n.$slots,"default")],2))}},Ff=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Uf=L_,KS=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return Uf(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:i}=e,o=Object.keys(s).map(u=>{const d=n==null?void 0:n[u],f=i==null?void 0:i[u];if(d===null)return null;const _=Ff(d)||Ff(f);return s[u][_]}),l=n&&Object.entries(n).reduce((u,d)=>{let[f,_]=d;return _===void 0||(u[f]=_),u},{}),c=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:f,className:_,...v}=d;return Object.entries(v).every(k=>{let[O,V]=k;return Array.isArray(V)?V.includes({...i,...l}[O]):{...i,...l}[O]===V})?[...u,f,_]:u},[]);return Uf(t,o,c,n==null?void 0:n.class,n==null?void 0:n.className)};typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function QS(t){return tn(nt(t)?new Proxy({},{get(e,n,r){return oe(Reflect.get(t.value,n,r))},set(e,n,r){return nt(t.value[n])&&!nt(r)?t.value[n].value=r:t.value[n]=r,!0},deleteProperty(e,n){return Reflect.deleteProperty(t.value,n)},has(e,n){return Reflect.has(t.value,n)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}}):t)}function YS(t){return QS(kt(t))}function X_(t,...e){const n=e.flat(),r=n[0];return YS(()=>Object.fromEntries(typeof r=="function"?Object.entries($h(t)).filter(([s,i])=>!r(Pp(i),s)):Object.entries($h(t)).filter(s=>!n.includes(s[0]))))}function JS(t){var e;const n=Pp(t);return(e=n==null?void 0:n.$el)!==null&&e!==void 0?e:n}function Z_(t){return t?t.flatMap(e=>e.type===ht?Z_(e.children):[e]):[]}function XS(){const t=dm(),e=Je(),n=kt(()=>r());jp(()=>{n.value!==r()&&bv(e)});function r(){return e.value&&"$el"in e.value&&["#text","#comment"].includes(e.value.$el.nodeName)?e.value.$el.nextElementSibling:JS(e)}const s=Object.assign({},t.exposed),i={};for(const l in t.props)Object.defineProperty(i,l,{enumerable:!0,configurable:!0,get:()=>t.props[l]});if(Object.keys(s).length>0)for(const l in s)Object.defineProperty(i,l,{enumerable:!0,configurable:!0,get:()=>s[l]});Object.defineProperty(i,"$el",{enumerable:!0,configurable:!0,get:()=>t.vnode.el}),t.exposed=i;function o(l){if(e.value=l,!!l&&(Object.defineProperty(i,"$el",{enumerable:!0,configurable:!0,get:()=>l instanceof Element?l:l.$el}),!(l instanceof Element)&&!Object.hasOwn(l,"$el"))){const c=l.$.exposed,u=Object.assign({},i);for(const d in c)Object.defineProperty(u,d,{enumerable:!0,configurable:!0,get:()=>c[d]});t.exposed=u}}return{forwardRef:o,currentRef:e,currentElement:n}}const ZS=Jr({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:n}){return()=>{var c;if(!n.default)return null;const r=Z_(n.default()),s=r.findIndex(u=>u.type!==Sn);if(s===-1)return r;const i=r[s];(c=i.props)==null||delete c.ref;const o=i.props?Vs(e,i.props):e,l=jr({...i,props:{}},o);return r.length===1?l:(r[s]=l,r)}}}),eC=["area","img","input"],Bu=Jr({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:n}){const r=t.asChild?"template":t.as;return typeof r=="string"&&eC.includes(r)?()=>wi(r,e):r!=="template"?()=>wi(t.as,e,{default:n.default}):()=>wi(ZS,e,{default:n.default})}});var tC=Jr({__name:"Label",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"label"}},setup(t){const e=t;return XS(),(n,r)=>(le(),Gt(oe(Bu),Vs(e,{onMousedown:r[0]||(r[0]=s=>{!s.defaultPrevented&&s.detail>1&&s.preventDefault()})}),{default:Te(()=>[Ns(n.$slots,"default")]),_:3},16))}}),nC=tC,rC=Jr({__name:"BaseSeparator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t,n=["horizontal","vertical"];function r(l){return n.includes(l)}const s=kt(()=>r(e.orientation)?e.orientation:"horizontal"),i=kt(()=>s.value==="vertical"?e.orientation:void 0),o=kt(()=>e.decorative?{role:"none"}:{"aria-orientation":i.value,role:"separator"});return(l,c)=>(le(),Gt(oe(Bu),Vs({as:l.as,"as-child":l.asChild,"data-orientation":s.value},o.value),{default:Te(()=>[Ns(l.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),sC=rC,iC=Jr({__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(le(),Gt(sC,Gy(hm(e)),{default:Te(()=>[Ns(n.$slots,"default")]),_:3},16))}}),oC=iC;const Xt={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const e=t;return(n,r)=>(le(),Gt(oe(Bu),{"data-slot":"button","data-variant":t.variant,"data-size":t.size,as:t.as,"as-child":t.asChild,class:zt(oe(sl)(oe(aC)({variant:t.variant,size:t.size}),e.class))},{default:Te(()=>[Ns(n.$slots,"default")]),_:3},8,["data-variant","data-size","as","as-child","class"]))}},aC=KS("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),Mt={__name:"Label",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){const e=t,n=X_(e,"class");return(r,s)=>(le(),Gt(oe(nC),Vs({"data-slot":"label"},oe(n),{class:oe(sl)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e.class)}),{default:Te(()=>[Ns(r.$slots,"default")]),_:3},16,["class"]))}},lC={class:"min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white"},cC={class:"space-y-1 text-center"},uC={class:"text-xs text-zinc-400"},hC={key:0,class:"w-4 h-4 shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.5"},dC={key:1,class:"w-4 h-4 shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.5"},fC={class:"space-y-3"},pC={class:"space-y-1.5"},mC={class:"space-y-1.5"},gC={class:"text-center"},_C={__name:"AuthGate",emits:["auth-success"],setup(t,{emit:e}){const n=Je(""),r=Je(""),s=Je(!1),i=Je(!1),o=tn({message:"",type:"success"});let l=null;const c=e;function u(){l&&clearTimeout(l),o.message="",s.value=!s.value}async function d(){l&&clearTimeout(l),o.message="",i.value=!0;const _=new Un;try{const k=(await cR(Ri,_)).user,O=`widget_${k.uid.slice(0,8)}_main_001`,V=en(Ut,"widgets",O);if(!(await $i(V)).exists()){await Fr(V,{widgetId:O,ownerUid:k.uid,settings:{layoutMode:"elastic",defaultView:"month",primaryColor:"#1e6b7b",accentColor:"#f0ad4e",eventBgColor:"#eef7f9",fontFamily:"sans-serif",maxWidth:"100%",borderRadius:"6px"}});const N=en(Ut,"users",k.uid);await Fr(N,{uid:k.uid,displayName:k.displayName||"",timezone:"Europe/London",logoUrl:k.photoURL||"",planTier:"free",apiCount:0,createdAt:new Date().toISOString()})}o.type="success",o.message="Authentication verified! Redirecting to creator engine...",l=setTimeout(()=>{o.message="",c("auth-success",k.uid)},2e3)}catch(v){console.error("Google cross-origin authentication loop failure:",v),o.type="error",o.message=v.message}finally{i.value=!1}}async function f(){l&&clearTimeout(l),o.message="",i.value=!0;try{if(s.value){const v=(await FA(Ri,n.value,r.value)).user,k=`widget_${v.uid.slice(0,8)}_main_001`;await Fr(en(Ut,"widgets",k),{widgetId:k,ownerUid:v.uid,settings:{layoutMode:"elastic",defaultView:"month",primaryColor:"#1e6b7b",accentColor:"#f0ad4e",eventBgColor:"#eef7f9",fontFamily:"sans-serif",maxWidth:"100%",borderRadius:"6px"}}),await Fr(en(Ut,"users",v.uid),{uid:v.uid,displayName:v.displayName||"",timezone:"Europe/London",logoUrl:v.photoURL||"",planTier:"free",apiCount:0,maxWidgetsAllowed:1,isWhiteLabeled:!1,createdAt:new Date().toISOString()}),o.type="success",o.message="Profile created successfully! Synchronizing system sandbox...",l=setTimeout(()=>{o.message="",c("auth-success",v.uid)},2e3)}else{const _=await UA(Ri,n.value,r.value);o.type="success",o.message="Welcome back! Launching workspace customization dashboard...",l=setTimeout(()=>{o.message="",c("auth-success",_.user.uid)},2e3)}}catch(_){console.error("Authentication gate error details:",_),o.type="error";const v={"auth/wrong-password":"Invalid credentials. Please verify your password entry and try again.","auth/user-not-found":"No account detected with this email address. Please sign up instead.","auth/email-already-in-use":"This email address is already registered. Please sign in instead.","auth/weak-password":"Security Policy Rule: Password must be at least 6 characters long."};o.message=v[_.code]??_.message}finally{i.value=!1}}return(_,v)=>(le(),Ie("div",lC,[he(oe(pr),{class:"w-full max-w-md p-6 bg-zinc-900 border-zinc-800 shadow-xl space-y-6"},{default:Te(()=>[A("div",cC,[v[2]||(v[2]=A("h2",{class:"text-2xl font-bold tracking-tight"},"SeamlessCal Creator Portal",-1)),A("p",uC,ze(s.value?"Create an account to build your custom booking widget":"Log into your widget customization console"),1)]),o.message?(le(),Ie("div",{key:0,class:zt(["p-3 rounded-lg text-xs font-semibold tracking-wide border animate-fade-in flex items-start gap-2.5",o.type==="success"?"bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400":"bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400"])},[o.type==="error"?(le(),Ie("svg",hC,[...v[3]||(v[3]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)])])):(le(),Ie("svg",dC,[...v[4]||(v[4]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])])),A("div",null,ze(o.message),1)],2)):_t("",!0),A("div",fC,[he(oe(Xt),{type:"button",onClick:d,disabled:i.value,variant:"outline",class:"w-full h-9 border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:text-white font-medium text-xs flex items-center justify-center gap-2 cursor-pointer transition-all"},{default:Te(()=>[v[5]||(v[5]=A("svg",{class:"h-4 w-4",viewBox:"0 0 24 24",fill:"currentColor"},[A("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),A("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),A("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),A("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})],-1)),Me(" "+ze(s.value?"Sign up with Google":"Sign in with Google"),1)]),_:1},8,["disabled"]),v[6]||(v[6]=A("div",{class:"relative flex items-center justify-center py-2"},[A("div",{class:"absolute inset-0 flex items-center"},[A("div",{class:"w-full border-t border-zinc-800"})]),A("span",{class:"relative bg-zinc-900 px-3 text-[10px] uppercase font-bold tracking-widest text-zinc-500"}," or continue with email ")],-1))]),A("form",{onSubmit:nc(f,["prevent"]),class:"space-y-4"},[A("div",pC,[he(oe(Mt),{class:"text-xs font-semibold text-zinc-300"},{default:Te(()=>[...v[7]||(v[7]=[Me("Email Address",-1)])]),_:1}),Bt(A("input",{type:"email","onUpdate:modelValue":v[0]||(v[0]=k=>n.value=k),required:"",class:"w-full h-9 rounded-md border border-zinc-800 bg-slate-950 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-400",placeholder:"name@company.com"},null,512),[[vn,n.value]])]),A("div",mC,[he(oe(Mt),{class:"text-xs font-semibold text-zinc-300"},{default:Te(()=>[...v[8]||(v[8]=[Me("Password",-1)])]),_:1}),Bt(A("input",{type:"password","onUpdate:modelValue":v[1]||(v[1]=k=>r.value=k),required:"",class:"w-full h-9 rounded-md border border-zinc-800 bg-slate-950 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-400",placeholder:"••••••••"},null,512),[[vn,r.value]])]),he(oe(Xt),{type:"submit",disabled:i.value,class:"w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-9 shadow-sm transition-all text-xs cursor-pointer"},{default:Te(()=>[Me(ze(i.value?"Processing security keys...":s.value?"Create Account & Build Widget":"Sign In"),1)]),_:1},8,["disabled"])],32),A("div",gC,[A("button",{onClick:u,class:"text-xs text-zinc-400 hover:text-white transition-all underline cursor-pointer"},ze(s.value?"Already have an account? Sign In":"Don't have an account yet? Create one"),1)])]),_:1})]))}},zf={__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){const e=t,n=X_(e,"class");return(r,s)=>(le(),Gt(oe(oC),Vs({"data-slot":"separator"},oe(n),{class:oe(sl)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e.class)}),null,16,["class"]))}},yC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},vC={key:0,class:"flex min-h-screen items-center justify-center text-muted-foreground"},wC={class:"mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 dark:border-zinc-800 pb-5 gap-4"},bC={class:"text-xs text-slate-500 dark:text-zinc-400 font-mono mt-1"},EC={class:"text-emerald-600 dark:text-emerald-400 font-semibold"},TC={class:"flex items-center gap-3 w-full sm:w-auto justify-end"},IC={key:0,class:"w-4 h-4 shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.5"},AC={key:1,class:"w-4 h-4 shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.5"},RC={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},SC={class:"space-y-2"},CC={class:"grid grid-cols-2 gap-2"},xC={key:0},kC={key:0,class:"space-y-2 mt-3 animate-fade-in"},PC=["value"],OC={class:"space-y-3 mb-2"},NC={class:"space-y-2"},VC={class:"relative w-full"},DC={key:0,value:"",disabled:"",selected:""},MC=["value"],LC={class:"space-y-4"},FC={class:"space-y-2 mt-4"},UC={class:"space-y-3 mb-4"},zC={class:"grid grid-cols-1 sm:grid-cols-2 gap-2"},$C=["onClick"],BC={class:"flex -space-x-1 shadow-sm"},jC={class:"truncate group-hover:text-slate-900 dark:group-hover:text-white font-medium"},qC={class:"flex items-center justify-between gap-4"},WC={class:"flex flex-col gap-0.5"},HC={class:"flex items-center justify-between gap-4"},GC={class:"flex flex-col gap-0.5"},KC={class:"flex items-center justify-between gap-4 mt-4"},QC={class:"flex flex-col gap-0.5"},YC={class:"flex items-center justify-between gap-4 mt-4"},JC={class:"flex flex-col gap-0.5"},XC={class:"flex items-center justify-between gap-4 mt-4"},ZC={class:"flex flex-col gap-0.5"},ex={class:"space-y-4"},tx={class:"space-y-2"},nx={class:"text-sm font-semibold text-slate-900 dark:text-zinc-100 flex items-center justify-between"},rx={key:0,class:"text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded font-bold"},sx=["value"],ix=["disabled"],ox=["disabled"],ax={class:"space-y-2 mt-4"},lx={class:"text-sm font-semibold text-slate-900 dark:text-zinc-100 flex items-center justify-between"},cx={key:0,class:"text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded font-bold"},ux=["value"],hx=["disabled"],dx=["disabled"],fx={class:"lg:col-span-2 flex flex-col space-y-4"},px={key:0,class:"text-xs text-amber-500 font-normal pl-2"},mx=["src"],gx={key:0,class:"mt-4 p-3.5 bg-zinc-950/40 rounded-lg border border-zinc-800/80 flex items-center justify-between text-left"},_x={class:"flex items-center justify-between"},yx={key:2,class:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"},vx={class:"grid grid-cols-2 gap-2 pt-2"},wx={__name:"Dashboard",props:{userId:{type:String,required:!0}},setup(t){const e=t,n=Je(!0),r=Je(!1),s=Je(!1),i=tn({message:"",type:"success"});let o=null;const l=e.userId,c=Je(`widget_${e.userId.slice(0,8)}_main_001`),u=Je("My Booking Calendar"),d=Je(""),f=tn({defaultView:"month",baseTheme:"dark",primaryColor:"#1e6b7b",accentColor:"#f0ad4e",eventBgColor:"#eef7f9",textColor:"#0f172a",headerTextColor:"#ffffff",fontFamily:"sans-serif",maxWidth:"100%",borderRadius:"6px",agendaLimit:3}),_=Je([]),v=Je("free"),k=Je(!1),O=[{name:"Cyber Midnight",primary:"#1e6b7b",accent:"#00ffff",bgEvent:"#22c55e",text:"#ffffff",headerText:"#ffffff"},{name:"Crimson Royal",primary:"#991b1b",accent:"#fbbf24",bgEvent:"#1e293b",text:"#f8fafc",headerText:"#f8fafc"},{name:"Electric Lavender",primary:"#6d28d9",accent:"#a78bfa",bgEvent:"#f472b6",text:"#ffffff",headerText:"#ffffff"},{name:"Emerald Calm",primary:"#065f46",accent:"#34d399",bgEvent:"#ecfdf5",text:"#064e3b",headerText:"#065f46"},{name:"Industrial Amber",primary:"#c2410c",accent:"#f97316",bgEvent:"#fef3c7",text:"#431407",headerText:"#c2410c"}];function V(G){f.primaryColor=G.primary,f.accentColor=G.accent,f.eventBgColor=G.bgEvent,f.textColor=G.text,f.headerTextColor=G.headerText||"#ffffff"}function q(G,g){if(v.value==="free"){k.value=!0;return}f.defaultView=G}async function N(){try{r.value=!0,k.value=!1;const G=en(Ut,"users",e.userId);await Fr(G,{planTier:"pro"},{merge:!0}),v.value="pro",i.type="success",i.message="🚀 Premium Account Activated! Unlocking advanced styling components across workspace canvas...",o=setTimeout(()=>{i.message=""},4e3)}catch(G){console.error("Failed processing mock tier configuration upgrade pass:",G),i.type="error",i.message="System configuration failure during billing upgrade initialization hook."}finally{r.value=!1}}const P=async()=>{try{const G=Qg(zg(Ut,"connections"),Yg("ownerUid","==",e.userId)),g=await e_(G),m=[];g.forEach(b=>{m.push({id:b.id,email:b.data().googleEmail})}),_.value=m,m.length>0&&!d.value&&(d.value=m[0].email)}catch(G){console.error("Failed fetching connected accounts for dashboard simulator:",G)}};async function j(){o&&clearTimeout(o),i.message="",r.value=!0;try{const G=en(Ut,"widgets",c.value);await Fr(G,{widgetId:c.value,ownerUid:l,calendarSourceEmail:d.value,widgetName:u.value,settings:{...f},updatedAt:new Date().toISOString()},{merge:!0}),i.type="success",i.message="Widget customizations saved successfully!";const g=document.querySelector("iframe");g&&(g.src=g.src),o=setTimeout(()=>{i.message=""},6e3)}catch(G){console.error("Cloud synchronization failure:",G),i.type="error",i.message=`Failed to update configurations: ${G.message}`}finally{r.value=!1}}function te(){const G=`<div id="seamlesscal-widget" data-widget-id="${c.value}"></div>
<script src="https://cdn.seamlesscal.com/v1/widget.js" defer><\/script>`;navigator.clipboard.writeText(G).then(()=>{s.value=!0,setTimeout(()=>{s.value=!1},2e3)})}return La(async()=>{try{await P();const G=en(Ut,"users",e.userId),g=await $i(G);g.exists()&&(v.value=g.data().planTier||"free");const m=en(Ut,"widgets",c.value),b=await $i(m);if(window.addEventListener("message",I=>{if(I.data&&I.data.type==="SEAMLESSCAL_RESIZE"){const R=document.querySelector("iframe");R&&I.data.height&&(R.style.height=I.data.height+16+"px")}}),b.exists()){const I=b.data();u.value=I.widgetName||"Main Booking Calendar",d.value=I.calendarSourceEmail||"";const R=I.settings||I||{};Object.assign(f,{defaultView:R.defaultView||"month",primaryColor:R.primaryColor||"#1e6b7b",accentColor:R.accentColor||"#f0ad4e",eventBgColor:R.eventBgColor||"#eef7f9",textColor:R.textColor||"#0f172a",headerTextColor:R.headerTextColor||"#ffffff",fontFamily:R.fontFamily||"sans-serif",borderRadius:R.borderRadius||"6px",maxWidth:R.maxWidth||"100%",baseTheme:R.baseTheme||"dark",agendaLimit:R.agendaLimit||3})}!d.value&&_.value.length>0&&(d.value=_.value[0].email)}catch(G){console.error("Failed to parse widget database parameters:",G)}finally{n.value=!1}}),(G,g)=>(le(),Ie(ht,null,[n.value?(le(),Ie("div",vC,[...g[17]||(g[17]=[A("div",{class:"flex flex-col items-center gap-2"},[A("span",{class:"animate-pulse text-sm font-medium"},"Initializing customization engine...")],-1)])])):(le(),Ie("div",{key:1,style:dr({"--calendar-primary":(f==null?void 0:f.primaryColor)||"#1e6b7b","--calendar-accent":(f==null?void 0:f.accentColor)||"#f0ad4e","--calendar-bg-event":(f==null?void 0:f.eventBgColor)||"#eef7f9"}),class:"min-h-screen bg-slate-50 p-6 dark:bg-zinc-950 text-slate-900 dark:text-zinc-50"},[A("header",wC,[A("div",null,[g[19]||(g[19]=A("h1",{class:"text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50"}," Widget Customizer ",-1)),A("p",bC,[g[18]||(g[18]=Me(" Tenant ID: ",-1)),A("span",EC,ze(c.value),1)])]),A("div",TC,[he(oe(Xt),{onClick:j,disabled:r.value,variant:"default",class:"bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm transition-all text-xs h-9 px-4 cursor-pointer"},{default:Te(()=>[Me(ze(r.value?"Saving configurations...":"Save Settings"),1)]),_:1},8,["disabled"])])]),i!=null&&i.message?(le(),Ie("div",{key:0,class:zt(["mb-6 p-3 rounded-lg text-xs font-semibold tracking-wide border animate-fade-in flex items-start gap-2.5 max-w-7xl",(i==null?void 0:i.type)==="success"?"bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400":"bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400"])},[(i==null?void 0:i.type)==="error"?(le(),Ie("svg",IC,[...g[20]||(g[20]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)])])):(le(),Ie("svg",AC,[...g[21]||(g[21]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])])),A("div",null,ze(i==null?void 0:i.message),1)],2)):_t("",!0),A("div",RC,[he(oe(pr),{class:"p-6 shadow-sm bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 space-y-6 h-fit"},{default:Te(()=>[A("div",SC,[he(oe(Mt),{class:"text-sm font-semibold tracking-wide text-slate-900 dark:text-zinc-100"},{default:Te(()=>[...g[22]||(g[22]=[Me("Default Interactive View",-1)])]),_:1}),A("div",CC,[he(oe(Xt),{type:"button",variant:(f==null?void 0:f.defaultView)==="month"?"outline":"default",onClick:g[0]||(g[0]=m=>f?f.defaultView="month":null),class:"w-full text-xs font-medium"},{default:Te(()=>[...g[23]||(g[23]=[Me(" Month Grid ",-1)])]),_:1},8,["variant"]),he(oe(Xt),{type:"button",variant:(f==null?void 0:f.defaultView)==="agenda"?"outline":"default",onClick:g[1]||(g[1]=m=>q("agenda","view")),class:"w-full text-xs font-medium flex items-center justify-center gap-1.5"},{default:Te(()=>[v.value==="free"?(le(),Ie("span",xC,"🔒")):_t("",!0),g[24]||(g[24]=Me(" Agenda List ",-1))]),_:1},8,["variant"])]),(f==null?void 0:f.defaultView)==="agenda"?(le(),Ie("div",kC,[he(oe(Mt),{class:"text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider"},{default:Te(()=>[...g[25]||(g[25]=[Me("Visible Bookings Limit",-1)])]),_:1}),Bt(A("select",{"onUpdate:modelValue":g[2]||(g[2]=m=>f.agendaLimit=m),class:"w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"},[(le(),Ie(ht,null,Fo(10,m=>A("option",{key:m,value:m},ze(m)+" Items Max",9,PC)),64))],512),[[zo,f.agendaLimit,void 0,{number:!0}]])])):_t("",!0)]),A("div",OC,[he(oe(Mt),{class:"text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider"},{default:Te(()=>[...g[26]||(g[26]=[Me("Widget Name",-1)])]),_:1}),Bt(A("input",{"onUpdate:modelValue":g[3]||(g[3]=m=>u.value=m),type:"text",placeholder:"e.g. Homepage Booking Calendar",class:"w-full text-sm rounded-md border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"},null,512),[[vn,u.value]])]),A("div",NC,[he(oe(Mt),{class:"text-sm font-semibold tracking-wide text-foreground"},{default:Te(()=>[...g[27]||(g[27]=[Me("Target Calendar Source Account",-1)])]),_:1}),A("div",VC,[Bt(A("select",{"onUpdate:modelValue":g[4]||(g[4]=m=>d.value=m),class:"w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"},[_.value.length===0?(le(),Ie("option",DC," No accounts connected. Please link an integration in Account Settings. ")):_t("",!0),(le(!0),Ie(ht,null,Fo(_.value,m=>(le(),Ie("option",{key:m.id,value:m.email},ze(m.email),9,MC))),128))],512),[[zo,d.value]]),g[28]||(g[28]=A("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"},[A("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"})])],-1))]),g[29]||(g[29]=A("p",{class:"text-[11px] text-muted-foreground"}," Determines which secure Google token your public layout embeds use to fetch availability. ",-1))]),he(oe(zf),{class:"my-4 border-slate-200 dark:border-zinc-800"}),A("div",LC,[g[43]||(g[43]=A("h3",{class:"text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500"}," Theme Color Tokens ",-1)),A("div",FC,[g[31]||(g[31]=A("label",{class:"text-sm font-semibold text-slate-900 dark:text-zinc-100"},"Base Widget Theme",-1)),Bt(A("select",{"onUpdate:modelValue":g[5]||(g[5]=m=>f.baseTheme=m),class:"w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-700 cursor-pointer"},[...g[30]||(g[30]=[A("option",{value:"light"},"Light Mode (White Background)",-1),A("option",{value:"dark"},"Dark Mode (Slate Background)",-1),A("option",{value:"transparent"},"Transparent (Adapts to Host Website)",-1)])],512),[[zo,f.baseTheme]])]),A("div",UC,[g[32]||(g[32]=A("label",{class:"text-xs font-semibold text-slate-600 dark:text-slate-300"},"Quick Styling Presets",-1)),A("div",zC,[(le(),Ie(ht,null,Fo(O,m=>A("button",{key:m.name,onClick:b=>V(m),type:"button",class:"flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-600 transition text-left text-xs text-slate-700 dark:text-slate-300 group cursor-pointer"},[A("div",BC,[A("span",{class:"w-3.5 h-3.5 rounded-full border border-white dark:border-zinc-900",style:dr({backgroundColor:m.primary})},null,4),A("span",{class:"w-3.5 h-3.5 rounded-full border border-white dark:border-zinc-900",style:dr({backgroundColor:m.accent})},null,4),A("span",{class:"w-3.5 h-3.5 rounded-full border border-white dark:border-zinc-900",style:dr({backgroundColor:m.bgEvent})},null,4)]),A("span",jC,ze(m.name),1)],8,$C)),64))])]),A("div",qC,[A("div",WC,[he(oe(Mt),{class:"text-sm font-medium text-slate-900 dark:text-zinc-100"},{default:Te(()=>[...g[33]||(g[33]=[Me("Primary Brand",-1)])]),_:1}),g[34]||(g[34]=A("span",{class:"text-xs text-slate-400 dark:text-zinc-500"},"Headers and frame components",-1))]),Bt(A("input",{type:"color","onUpdate:modelValue":g[6]||(g[6]=m=>f.primaryColor=m),class:"w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"},null,512),[[vn,f.primaryColor]])]),A("div",HC,[A("div",GC,[he(oe(Mt),{class:"text-sm font-medium text-slate-900 dark:text-zinc-100"},{default:Te(()=>[...g[35]||(g[35]=[Me("Accent Interaction",-1)])]),_:1}),g[36]||(g[36]=A("span",{class:"text-xs text-slate-400 dark:text-zinc-500"},"Dates numbers and highlights",-1))]),Bt(A("input",{type:"color","onUpdate:modelValue":g[7]||(g[7]=m=>f.accentColor=m),class:"w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"},null,512),[[vn,f.accentColor]])]),A("div",KC,[A("div",QC,[he(oe(Mt),{class:"text-sm font-medium text-slate-900 dark:text-zinc-100"},{default:Te(()=>[...g[37]||(g[37]=[Me("Event Panel Tint",-1)])]),_:1}),g[38]||(g[38]=A("span",{class:"text-xs text-slate-400 dark:text-zinc-500"},"Background of event item nodes",-1))]),Bt(A("input",{type:"color","onUpdate:modelValue":g[8]||(g[8]=m=>f.eventBgColor=m),class:"w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"},null,512),[[vn,f.eventBgColor]])]),A("div",YC,[A("div",JC,[he(oe(Mt),{class:"text-sm font-medium text-slate-900 dark:text-zinc-100"},{default:Te(()=>[...g[39]||(g[39]=[Me("Header / UI Text",-1)])]),_:1}),g[40]||(g[40]=A("span",{class:"text-xs text-slate-400 dark:text-zinc-500"},"Month headers and weekday labels",-1))]),Bt(A("input",{type:"color","onUpdate:modelValue":g[9]||(g[9]=m=>f.headerTextColor=m),class:"w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"},null,512),[[vn,f.headerTextColor]])]),A("div",XC,[A("div",ZC,[he(oe(Mt),{class:"text-sm font-medium text-slate-900 dark:text-zinc-100"},{default:Te(()=>[...g[41]||(g[41]=[Me("Event Text Color",-1)])]),_:1}),g[42]||(g[42]=A("span",{class:"text-xs text-slate-400 dark:text-zinc-500"},"Text inside the colored event chips",-1))]),Bt(A("input",{type:"color","onUpdate:modelValue":g[10]||(g[10]=m=>f.textColor=m),class:"w-9 h-9 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm cursor-pointer bg-transparent p-0.5"},null,512),[[vn,f.textColor]])])]),he(oe(zf),{class:"my-4 border-slate-200 dark:border-zinc-800"}),A("div",ex,[g[48]||(g[48]=A("h3",{class:"text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500"}," Geometric Configurations ",-1)),A("div",tx,[A("label",nx,[g[44]||(g[44]=A("span",null,"Element Border Radius",-1)),v.value==="free"?(le(),Ie("span",rx,"PRO")):_t("",!0)]),A("select",{value:f==null?void 0:f.borderRadius,onChange:g[11]||(g[11]=m=>f.borderRadius=m.target.value),onClick:g[12]||(g[12]=m=>v.value==="free"?k.value=!0:null),class:"w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-700 cursor-pointer"},[g[45]||(g[45]=A("option",{value:"6px"},"Subtle Smooth Curves (6px)",-1)),A("option",{value:"0px",disabled:v.value==="free"}," Sharp Structural Boundaries (0px) "+ze(v.value==="free"?"🔒":""),9,ix),A("option",{value:"12px",disabled:v.value==="free"}," Highly Rounded Modern (12px) "+ze(v.value==="free"?"🔒":""),9,ox)],40,sx)]),A("div",ax,[A("label",lx,[g[46]||(g[46]=A("span",null,"Typography Font Family Mapping",-1)),v.value==="free"?(le(),Ie("span",cx,"PRO")):_t("",!0)]),A("select",{value:f==null?void 0:f.fontFamily,onChange:g[13]||(g[13]=m=>f.fontFamily=m.target.value),onClick:g[14]||(g[14]=m=>v.value==="free"?k.value=!0:null),class:"w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-zinc-700 cursor-pointer"},[g[47]||(g[47]=A("option",{value:"sans-serif"},"Modern Clean Sans-Serif",-1)),A("option",{value:"serif",disabled:v.value==="free"}," Elegant Bookish Serif "+ze(v.value==="free"?"🔒":""),9,hx),A("option",{value:"mono",disabled:v.value==="free"}," Technical Monospace "+ze(v.value==="free"?"🔒":""),9,dx)],40,ux)])])]),_:1}),A("div",fx,[he(oe(Mt),{class:"text-sm font-semibold text-slate-700 dark:text-zinc-300"},{default:Te(()=>[g[49]||(g[49]=Me(" Live Client Workspace Preview Simulator ",-1)),_.value.length===0?(le(),Ie("span",px,"(Preview Sandbox Mode)")):_t("",!0)]),_:1}),he(oe(pr),{class:"p-4 bg-slate-100 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm flex-grow min-h-[550px]"},{default:Te(()=>[(le(),Ie("iframe",{key:`${c.value}-${d.value}-${f==null?void 0:f.baseTheme}-${f==null?void 0:f.primaryColor}-${f==null?void 0:f.accentColor}-${f==null?void 0:f.eventBgColor}-${f==null?void 0:f.textColor}-${f==null?void 0:f.headerTextColor}-${f==null?void 0:f.defaultView}-${f==null?void 0:f.fontFamily}-${f==null?void 0:f.borderRadius}-${f==null?void 0:f.agendaLimit}`,src:_.value.length>0?`/render-widget.html?id=${c.value}&calendarSourceEmail=${encodeURIComponent(d.value)}&baseTheme=${(f==null?void 0:f.baseTheme)||"dark"}&primaryColor=${encodeURIComponent((f==null?void 0:f.primaryColor)||"#1e6b7b")}&accentColor=${encodeURIComponent((f==null?void 0:f.accentColor)||"#f0ad4e")}&eventBgColor=${encodeURIComponent((f==null?void 0:f.eventBgColor)||"#eef7f9")}&textColor=${encodeURIComponent((f==null?void 0:f.textColor)||"#0f172a")}&headerTextColor=${encodeURIComponent((f==null?void 0:f.headerTextColor)||"#ffffff")}&defaultView=${(f==null?void 0:f.defaultView)||"month"}&fontFamily=${(f==null?void 0:f.fontFamily)||"sans-serif"}&borderRadius=${(f==null?void 0:f.borderRadius)||"6px"}&agendaLimit=${(f==null?void 0:f.agendaLimit)||3}`:`/render-widget.html?mockData=true&baseTheme=${(f==null?void 0:f.baseTheme)||"dark"}&primaryColor=${encodeURIComponent((f==null?void 0:f.primaryColor)||"#1e6b7b")}&accentColor=${encodeURIComponent((f==null?void 0:f.accentColor)||"#f0ad4e")}&eventBgColor=${encodeURIComponent((f==null?void 0:f.eventBgColor)||"#eef7f9")}&textColor=${encodeURIComponent((f==null?void 0:f.textColor)||"#0f172a")}&headerTextColor=${encodeURIComponent((f==null?void 0:f.headerTextColor)||"#ffffff")}&defaultView=${(f==null?void 0:f.defaultView)||"month"}&fontFamily=${(f==null?void 0:f.fontFamily)||"sans-serif"}&borderRadius=${(f==null?void 0:f.borderRadius)||"6px"}&agendaLimit=${(f==null?void 0:f.agendaLimit)||3}`,class:"w-full border-none bg-transparent transition-all duration-200",style:{height:"650px"},scrolling:"no"},null,8,mx)),_.value.length===0?(le(),Ie("div",gx,[g[51]||(g[51]=A("div",null,[A("h5",{class:"text-xs font-bold text-zinc-200"},"Loving the layout design look?"),A("p",{class:"text-[11px] text-zinc-400"}," Connect your native calendar source stream to activate your booking widget code. ")],-1)),he(oe(Xt),{size:"sm",onClick:g[15]||(g[15]=m=>G.$emit("go-to-profile")),class:"bg-emerald-600 hover:bg-emerald-700 font-bold text-xs h-8 cursor-pointer"},{default:Te(()=>[...g[50]||(g[50]=[Me(" Connect Google Calendar ⚡ ",-1)])]),_:1})])):_t("",!0)]),_:1}),_.value.length>0?(le(),Gt(oe(pr),{key:0,class:"p-4 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm space-y-3 animate-fade-in"},{default:Te(()=>[A("div",_x,[g[52]||(g[52]=A("h4",{class:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400"}," Deploy Code Snippet ",-1)),he(oe(Xt),{onClick:te,size:"xs",variant:"outline",class:"h-7 text-[11px] font-medium border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-950 cursor-pointer"},{default:Te(()=>[Me(ze(s.value?"Copied to Clipboard! 📋":"Copy Embed Snippet"),1)]),_:1})]),g[53]||(g[53]=A("div",{class:"p-3 bg-slate-950 rounded-lg border border-zinc-800/80 overflow-x-auto"},[A("code",{class:"text-[11px] font-mono text-zinc-300 block whitespace-pre"},'<div id="seamlesscal-widget" data-widget-id="${activeWidgetId.value}"></div> <script src="https://cdn.seamlesscal.com/v1/widget.js" defer><\/script>')],-1))]),_:1})):_t("",!0)])])],4)),k.value?(le(),Ie("div",yx,[he(oe(pr),{class:"w-full max-w-sm p-6 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-center space-y-4 shadow-2xl"},{default:Te(()=>[g[56]||(g[56]=A("div",{class:"w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto text-xl"}," ✨ ",-1)),g[57]||(g[57]=A("div",{class:"space-y-1"},[A("h3",{class:"text-base font-bold text-slate-900 dark:text-zinc-100"}," Upgrade to SeamlessCal Pro "),A("p",{class:"text-xs text-slate-500 dark:text-zinc-400"}," Unlock advanced geometric configurations, custom typography mappings, and the high-speed responsive Agenda view layout. ")],-1)),g[58]||(g[58]=A("div",{class:"bg-slate-50 dark:bg-zinc-950 p-3 rounded-lg border border-slate-200 dark:border-zinc-800 text-left"},[A("div",{class:"flex justify-between items-center text-xs"},[A("span",{class:"text-slate-700 dark:text-zinc-300 font-medium"},"Professional Tier Plan"),A("span",{class:"text-emerald-600 dark:text-emerald-400 font-bold"},"$7 - $9 / mo")])],-1)),A("div",vx,[he(oe(Xt),{onClick:g[16]||(g[16]=m=>k.value=!1),variant:"outline",class:"h-9 text-xs border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 cursor-pointer"},{default:Te(()=>[...g[54]||(g[54]=[Me(" Maybe Later ",-1)])]),_:1}),he(oe(Xt),{class:"h-9 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer",onClick:N},{default:Te(()=>[...g[55]||(g[55]=[Me(" Upgrade Now ",-1)])]),_:1})])]),_:1})])):_t("",!0)],64))}},bx=yC(wx,[["__scopeId","data-v-d77d3c54"]]);/**
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
 */const Ex="type.googleapis.com/google.protobuf.Int64Value",Tx="type.googleapis.com/google.protobuf.UInt64Value";function ey(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Cc(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Cc(e));if(typeof t=="function"||typeof t=="object")return ey(t,e=>Cc(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Ia(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Ex:case Tx:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Ia(e)):typeof t=="function"||typeof t=="object"?ey(t,e=>Ia(e)):t}/**
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
 */const ju="functions";/**
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
 */const $f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Es extends xn{constructor(e,n,r){super(`${ju}/${e}`,n||""),this.details=r}}function Ix(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ax(t,e){let n=Ix(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!$f[o])return new Es("internal","internal");n=$f[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=Ia(s))}}catch{}return n==="ok"?null:new Es(n,r,s)}/**
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
 */class Rx{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const xc="us-central1";function Sx(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Es("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Cx{constructor(e,n,r,s,i=xc,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Rx(n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=xc}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function xx(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function kx(t,e,n){return r=>Ox(t,e,r,{})}async function Px(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function Ox(t,e,n,r){const s=t._url(e);return Nx(t,s,n,r)}async function Nx(t,e,n,r){n=Cc(n);const s={data:n},i={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const l=r.timeout||7e4,c=Sx(l),u=await Promise.race([Px(e,s,i,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!u)throw new Es("cancelled","Firebase Functions instance was deleted.");const d=Ax(u.status,u.json);if(d)throw d;if(!u.json)throw new Es("internal","Response is not valid JSON object.");let f=u.json.data;if(typeof f>"u"&&(f=u.json.result),typeof f>"u")throw new Es("internal","Response is missing data field.");return{data:Ia(f)}}const Bf="@firebase/functions",jf="0.11.8";/**
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
 */const Vx="auth-internal",Dx="app-check-internal",Mx="messaging-internal";function Lx(t,e){const n=(r,{instanceIdentifier:s})=>{const i=r.getProvider("app").getImmediate(),o=r.getProvider(Vx),l=r.getProvider(Mx),c=r.getProvider(Dx);return new Cx(i,o,l,c,s,t)};qr(new yr(ju,n,"PUBLIC").setMultipleInstances(!0)),En(Bf,jf,e),En(Bf,jf,"esm2017")}/**
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
 */function Fx(t=Qc(),e=xc){const r=Ba(dt(t),ju).getImmediate({identifier:e}),s=wm("functions");return s&&Ux(r,...s),r}function Ux(t,e,n){xx(dt(t),e,n)}function zx(t,e,n){return kx(dt(t),e)}Lx(fetch.bind(self));const $x={key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4"},Bx={class:"relative w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-900 p-5 text-white shadow-2xl animate-scale-in space-y-4"},jx={class:"space-y-2"},qx={class:"text-sm font-bold tracking-wide text-zinc-100 uppercase font-mono text-emerald-500"},Wx={class:"text-xs text-zinc-300 leading-relaxed"},Hx={class:"flex items-center justify-end gap-2.5 pt-2"},ty={__name:"ConfirmModal",props:{isOpen:Boolean,title:{type:String,default:"System Confirmation"},message:{type:String,default:"Are you sure you want to proceed?"},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},isDestructive:{type:Boolean,default:!1}},emits:["confirm","cancel"],setup(t,{emit:e}){const n=e;function r(){n("confirm")}function s(){n("cancel")}return(i,o)=>t.isOpen?(le(),Ie("div",$x,[A("div",{onClick:s,class:"absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in"}),A("div",Bx,[A("div",jx,[A("h3",qx,ze(t.title),1),A("p",Wx,ze(t.message),1)]),A("div",Hx,[A("button",{onClick:s,class:"text-xs font-semibold h-8 px-3.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-md border border-zinc-700 shadow-sm cursor-pointer transition-colors"},ze(t.cancelText),1),A("button",{onClick:r,class:zt(["text-xs font-semibold h-8 px-4 rounded-md shadow-sm cursor-pointer text-white transition-colors",t.isDestructive?"bg-rose-600 hover:bg-rose-700":"bg-emerald-600 hover:bg-emerald-700"])},ze(t.confirmText),3)])])])):_t("",!0)}},Gx={key:0,class:"flex min-h-[400px] items-center justify-center text-muted-foreground"},Kx={key:1,class:"max-w-7xl mx-auto p-6 space-y-8 animate-fade-in"},Qx={key:0,class:"w-4 h-4 shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.5"},Yx={key:1,class:"w-4 h-4 shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.5"},Jx={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},Xx={class:"lg:col-span-2 space-y-6"},Zx={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},ek={class:"space-y-2"},tk={class:"space-y-2"},nk={class:"space-y-2"},rk={class:"flex justify-end pt-2"},sk={class:"p-6 border-b border-slate-100 dark:border-zinc-800/60 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"},ik={class:"p-6 overflow-x-auto"},ok={class:"w-full text-sm text-left"},ak={key:0},lk={class:"px-4 py-4 font-medium text-slate-900 dark:text-slate-100"},ck={class:"px-4 py-4 text-right"},uk={class:"space-y-6"},hk={class:"space-y-2 text-xs text-slate-600 dark:text-zinc-400 pt-2"},dk={class:"flex justify-between border-b border-slate-100 dark:border-zinc-800/50 pb-2"},fk={class:"font-bold text-slate-900 dark:text-zinc-100"},pk={class:"flex justify-between border-b border-slate-100 dark:border-zinc-800/50 pb-2"},mk={key:0,class:"font-bold text-emerald-600 dark:text-emerald-400"},gk={key:1,class:"font-bold text-zinc-700 dark:text-zinc-300"},_k={key:0,class:"flex justify-between pt-1"},yk={class:"font-bold font-mono text-slate-900 dark:text-zinc-100"},vk={__name:"ProfileSettings",props:{userId:{type:String,required:!0}},emits:["profile-updated"],setup(t,{emit:e}){const n=t,r=Je(!0),s=Je(!1),i=Je([]),o=e,l=Je(!1),c=Je(null),u=tn({message:"",type:"success"});let d=null,f=null;const _=tn({displayName:"",timezone:"Europe/London",logoUrl:"",planTier:"free",apiCount:0,renewalAssessment:""}),v=async()=>{try{const N=Qg(zg(Ut,"connections"),Yg("ownerUid","==",n.userId)),P=await e_(N),j=[];P.forEach(g=>{j.push({id:g.id,email:g.data().googleEmail})}),i.value=j;const te=en(Ut,"users",n.userId),G=await $i(te);if(G.exists()){const g=G.data();Object.assign(_,{displayName:g.displayName||"",timezone:g.timezone||"Europe/London",logoUrl:g.logoUrl||"",planTier:g.planTier||"free",apiCount:g.apiCount||0,renewalAssessment:g.renewalAssessment?new Date(g.renewalAssessment).toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):""})}}catch(N){console.error("Failed processing administrative user metadata indices:",N)}finally{r.value=!1}},k=()=>{if(d&&clearTimeout(d),u.message="",!f){u.type="error",u.message="Google identity platform library failed to initialize. Please refresh the page workspace.";return}f.requestCode()},O=N=>{d&&clearTimeout(d),u.message="",c.value=N,l.value=!0},V=async()=>{const N=c.value;if(N){l.value=!1,c.value=null;try{const P=en(Ut,"connections",N.id);await zI(P),await v(),u.type="success",u.message=`Google account integration context (${N.email}) severed successfully.`,d=setTimeout(()=>{u.message=""},6e3)}catch(P){console.error("Failed to tear down connection link:",P),u.type="error",u.message=`Disconnection sequence interrupted: ${P.message}`}}},q=async()=>{if(d&&clearTimeout(d),u.message="",_.logoUrl&&_.logoUrl.trim()!=="")try{const N=new URL(_.logoUrl);if(N.protocol!=="http:"&&N.protocol!=="https:"){u.type="error",u.message="Security Error: Only secure web image links (http/https) are authorized.";return}const P=N.pathname.toLowerCase();if([".js",".html",".php",".pdf",".zip",".exe",".txt",".json"].some(G=>P.endsWith(G))){u.type="error",u.message="Validation Error: The provided link points to a document or script, not an image layout file.";return}}catch{u.type="error",u.message="Invalid Configuration: Please provide a valid, structured web URL link.";return}s.value=!0;try{const N=en(Ut,"users",n.userId);await Fr(N,{uid:n.userId,displayName:_.displayName,timezone:_.timezone,logoUrl:_.logoUrl,updatedAt:new Date().toISOString()},{merge:!0}),s.value=!1,u.type="success",u.message="Account profile criteria synchronized successfully!",o("profile-updated"),d=setTimeout(()=>{u.message=""},4e3)}catch(N){s.value=!1,console.error("Failed locking configuration down to Firestore collection:",N),u.type="error",u.message="Profile error update failure: "+N.message}};return La(async()=>{await v(),window.google&&(f=window.google.accounts.oauth2.initCodeClient({client_id:"415247533936-e569avvi75k2kod4q9nbhecsqojts65n.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.email",ux_mode:"popup",callback:async N=>{if(d&&clearTimeout(d),u.message="",N.error){u.type="error",u.message=`Google initialization flow cancelled: ${N.error}`;return}if(N.code)try{const P=Fx(Ut.app),te=await zx(P,"exchangeAuthCodeForTokens")({code:N.code});u.type="success",u.message=`Google Calendar link verification confirmed for profile: ${te.data.email}`,await v(),d=setTimeout(()=>{u.message=""},6e3)}catch(P){u.type="error",u.message=`Identity verification handshake failure: ${P.message}`}}}))}),(N,P)=>{var j;return r.value?(le(),Ie("div",Gx,[...P[4]||(P[4]=[A("div",{class:"flex flex-col items-center gap-2"},[A("span",{class:"animate-pulse text-sm font-medium"},"Loading user account profiles...")],-1)])])):(le(),Ie("div",Kx,[P[23]||(P[23]=A("header",{class:"border-b border-slate-200 dark:border-zinc-800 pb-5"},[A("h1",{class:"text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50"}," Account Profile & System Settings "),A("p",{class:"text-sm text-slate-500 dark:text-zinc-400 mt-1"}," Manage corporate identity variables, account limits, and data pipelines. ")],-1)),u.message?(le(),Ie("div",{key:0,class:zt(["p-3 rounded-lg text-xs font-semibold tracking-wide border animate-fade-in flex items-start gap-2.5 shadow-sm",u.type==="success"?"bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400":"bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400"])},[u.type==="error"?(le(),Ie("svg",Qx,[...P[5]||(P[5]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)])])):(le(),Ie("svg",Yx,[...P[6]||(P[6]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])])),A("div",null,ze(u.message),1)],2)):_t("",!0),A("div",Jx,[A("div",Xx,[he(oe(pr),{class:"p-6 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm space-y-6"},{default:Te(()=>[P[11]||(P[11]=A("h3",{class:"text-base font-semibold text-slate-900 dark:text-zinc-100 border-b border-slate-100 dark:border-zinc-800/60 pb-3"}," Profile Metadata ",-1)),A("div",Zx,[A("div",ek,[he(oe(Mt),{class:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400"},{default:Te(()=>[...P[7]||(P[7]=[Me("Display / Corporate Name",-1)])]),_:1}),Bt(A("input",{"onUpdate:modelValue":P[0]||(P[0]=te=>_.displayName=te),type:"text",placeholder:"e.g. Apsley Consulting Ltd",class:"w-full text-sm rounded-md border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"},null,512),[[vn,_.displayName]])]),A("div",tk,[he(oe(Mt),{class:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400"},{default:Te(()=>[...P[8]||(P[8]=[Me("Primary Business Timezone",-1)])]),_:1}),Bt(A("select",{"onUpdate:modelValue":P[1]||(P[1]=te=>_.timezone=te),class:"w-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"},[...P[9]||(P[9]=[A("option",{value:"UTC"},"UTC / Greenwich Mean Time",-1),A("option",{value:"Europe/London"},"Europe/London (BST/GMT)",-1),A("option",{value:"America/New_York"},"America/New_York (EST/EDT)",-1),A("option",{value:"America/Los_Angeles"},"America/Los_Angeles (PST/PDT)",-1),A("option",{value:"Asia/Tokyo"},"Asia/Tokyo (JST)",-1)])],512),[[zo,_.timezone]])])]),A("div",nk,[he(oe(Mt),{class:"text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400"},{default:Te(()=>[...P[10]||(P[10]=[Me("Corporate Avatar or Logo URL",-1)])]),_:1}),Bt(A("input",{"onUpdate:modelValue":P[2]||(P[2]=te=>_.logoUrl=te),type:"text",placeholder:"https://yourwebsite.com/assets/logo.png",class:"w-full text-sm rounded-md border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"},null,512),[[vn,_.logoUrl]])]),A("div",rk,[he(oe(Xt),{onClick:q,disabled:s.value,class:"bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs h-9 px-5 transition-all cursor-pointer"},{default:Te(()=>[Me(ze(s.value?"Updating profile index...":"Save Profile Changes"),1)]),_:1},8,["disabled"])])]),_:1}),he(oe(pr),{class:"border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden"},{default:Te(()=>[A("div",sk,[P[13]||(P[13]=A("div",null,[A("h3",{class:"text-base font-semibold text-slate-900 dark:text-zinc-100"}," Source Calendar Accounts "),A("p",{class:"text-xs text-slate-400 dark:text-zinc-500 mt-0.5"}," Connect the external Google accounts used to query availability event streams. ")],-1)),he(oe(Xt),{onClick:nc(k,["prevent"]),class:"bg-zinc-50 dark:bg-zinc-950 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-900 shadow-sm text-xs font-semibold h-9 px-4 cursor-pointer transition-colors"},{default:Te(()=>[...P[12]||(P[12]=[A("svg",{class:"w-4 h-4 mr-2 inline-block",viewBox:"0 0 24 24",fill:"currentColor"},[A("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),A("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),A("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),A("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})],-1),Me(" Connect a Google Account ",-1)])]),_:1})]),A("div",ik,[A("table",ok,[P[17]||(P[17]=A("thead",{class:"text-xs text-slate-500 dark:text-zinc-400 uppercase bg-slate-50 dark:bg-zinc-950/50"},[A("tr",null,[A("th",{class:"px-4 py-3 rounded-tl-md"},"Account Email"),A("th",{class:"px-4 py-3"},"Link Status"),A("th",{class:"px-4 py-3 text-right rounded-tr-md"},"Actions")])],-1)),A("tbody",null,[i.value.length===0?(le(),Ie("tr",ak,[...P[14]||(P[14]=[A("td",{colspan:"3",class:"px-4 py-10 text-center text-slate-400 dark:text-zinc-500 font-medium"}," No authenticated Google Identities synced to this account profile index. ",-1)])])):(le(!0),Ie(ht,{key:1},Fo(i.value,te=>(le(),Ie("tr",{key:te.id,class:"border-b border-slate-100 dark:border-zinc-800/50 hover:bg-slate-50/50 dark:hover:bg-zinc-950/30 transition-colors"},[A("td",lk,ze(te.email),1),P[16]||(P[16]=A("td",{class:"px-4 py-4"},[A("span",{class:"inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 uppercase"}," Authorized Key Active ")],-1)),A("td",ck,[he(oe(Xt),{variant:"destructive",size:"sm",class:"h-8 text-xs font-medium cursor-pointer",onClick:nc(G=>O(te),["prevent"])},{default:Te(()=>[...P[15]||(P[15]=[Me(" Disconnect ",-1)])]),_:1},8,["onClick"])])]))),128))])])])]),_:1})]),A("div",uk,[he(oe(pr),{class:"p-6 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-sm space-y-4"},{default:Te(()=>[P[22]||(P[22]=A("h3",{class:"text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500"}," Subscription & Plan Bounds ",-1)),A("div",{class:zt(["p-4 rounded-xl border flex items-center justify-between transition-colors",_.planTier==="professional"?"bg-emerald-500/5 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-950/40":"bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"])},[A("div",null,[P[18]||(P[18]=A("p",{class:"text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wide"}," Active Account Rank ",-1)),A("h4",{class:zt(["text-xl font-bold mt-0.5 capitalize",_.planTier==="professional"?"text-emerald-600 dark:text-emerald-400":"text-zinc-500 dark:text-zinc-300"])},ze(_.planTier||"Free Sandbox")+" Tier ",3)]),A("span",{class:zt(["px-2 py-1 text-white rounded-full text-[10px] font-bold tracking-wider uppercase",_.planTier==="professional"?"bg-emerald-500":"bg-zinc-500"])},ze(_.planTier==="professional"?"Active":"Sandbox"),3)],2),A("div",hk,[A("div",dk,[P[19]||(P[19]=A("span",{class:"font-medium text-slate-400"},"Total Synchronized Calendars:",-1)),A("span",fk,ze(i.value.length)+" Linked ",1)]),A("div",pk,[P[20]||(P[20]=A("span",{class:"font-medium text-slate-400"},"System API Allocation Limits:",-1)),_.planTier==="professional"?(le(),Ie("span",mk," Unlimited Calls ")):(le(),Ie("span",gk,ze(_.apiCount||0)+" / 500 Calls ",1))]),_.planTier==="professional"&&_.renewalAssessment?(le(),Ie("div",_k,[P[21]||(P[21]=A("span",{class:"font-medium text-slate-400"},"Next Renewal Assessment:",-1)),A("span",yk,ze(_.renewalAssessment),1)])):_t("",!0)])]),_:1})]),he(ty,{"is-open":l.value,title:"Sever Google Integration",message:`Are you sure you want to disconnect ${((j=c.value)==null?void 0:j.email)||"this account"}? Your embedded widgets using this source will stop syncing immediately.`,"confirm-text":"Disconnect","cancel-text":"Keep Link Active","is-destructive":!0,onConfirm:V,onCancel:P[3]||(P[3]=te=>l.value=!1)},null,8,["is-open","message"])])]))}}},wk={class:"min-h-screen bg-slate-950 text-slate-100 relative"},bk={key:1,class:"min-h-screen flex flex-col"},Ek={class:"border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-md px-6 py-3 flex items-center justify-between h-14 select-none z-40"},Tk={class:"flex items-center gap-4"},Ik={class:"flex items-center gap-3"},Ak=["src"],Rk={class:"flex-grow z-10"},Sk={__name:"App",setup(t){const e=Je(null),n=Je("customizer"),r=Je(!1),s=tn({logoUrl:""});async function i(u){if(u)try{const d=en(Ut,"users",u),f=await $i(d);if(f.exists()){const _=f.data();s.logoUrl=_.logoUrl||""}}catch(d){console.error("Failed syncing global navbar avatar index:",d)}}La(()=>{BA(Ri,async u=>{u?(e.value=u.uid,await i(u.uid)):(e.value=null,s.logoUrl="")})});function o(u){e.value=u}function l(){r.value=!0}function c(){r.value=!1,jA(Ri)}return(u,d)=>(le(),Ie("div",wk,[e.value?(le(),Ie("div",bk,[A("nav",Ek,[A("div",Tk,[A("div",{onClick:d[0]||(d[0]=f=>n.value="customizer"),class:"flex items-center gap-2 cursor-pointer group",title:"Return to Customizer"},[...d[6]||(d[6]=[A("span",{class:"w-2.5 h-2.5 bg-emerald-500 rounded-full group-hover:scale-110 transition-transform animate-pulse"},null,-1),A("span",{class:"text-sm font-bold tracking-tight text-white uppercase font-mono group-hover:text-emerald-400 transition-colors"},"SeamlessCal",-1)])]),n.value==="profile"?(le(),Ie("button",{key:0,onClick:d[1]||(d[1]=f=>n.value="customizer"),class:"animate-fade-in flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-md transition-all cursor-pointer shadow-sm h-8"},[...d[7]||(d[7]=[A("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.5"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"})],-1),Me(" Back to Customizer ",-1)])])):_t("",!0)]),A("div",Ik,[A("button",{onClick:d[3]||(d[3]=f=>n.value="profile"),class:zt(["w-8 h-8 rounded-full flex items-center justify-center shadow-sm border transition-all cursor-pointer overflow-hidden group/avatar p-0",n.value==="profile"?"bg-emerald-600 border-emerald-500 ring-2 ring-emerald-500/20 scale-105":"bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600"]),title:"Account Profile & Settings"},[s.logoUrl?(le(),Ie("img",{key:0,src:s.logoUrl,alt:"Profile Logo",class:"w-full h-full object-cover",onError:d[2]||(d[2]=f=>s.logoUrl="")},null,40,Ak)):(le(),Ie("svg",{key:1,class:zt(["w-4 h-4 transition-colors",n.value==="profile"?"text-white":"text-zinc-400 group-hover/avatar:text-zinc-200"]),fill:"currentColor",viewBox:"0 0 24 24"},[...d[8]||(d[8]=[A("path",{"fill-rule":"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z","clip-rule":"evenodd"},null,-1)])],2))],2),A("button",{onClick:l,class:"text-xs font-semibold h-8 px-3.5 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 text-zinc-200 hover:text-white rounded-md border border-zinc-700 hover:border-zinc-600 shadow-sm transition-all cursor-pointer flex items-center justify-center"}," Logout ")])]),A("main",Rk,[n.value==="customizer"?(le(),Gt(bx,{key:0,"user-id":e.value,onSignOut:l},null,8,["user-id"])):_t("",!0),n.value==="profile"?(le(),Gt(vk,{key:1,"user-id":e.value,onProfileUpdated:d[4]||(d[4]=f=>i(e.value))},null,8,["user-id"])):_t("",!0)])])):(le(),Gt(_C,{key:0,onAuthSuccess:o})),he(ty,{"is-open":r.value,title:"Terminate Session",message:"Are you sure you want to log out of SeamlessCal? You will need to authenticate again to update widget tokens.","confirm-text":"Logout","cancel-text":"Stay Logged In","is-destructive":!0,onConfirm:c,onCancel:d[5]||(d[5]=f=>r.value=!1)},null,8,["is-open"])]))}};/*!
* vue-router v5.1.0
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/const hs=typeof document<"u";function ny(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ck(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ny(t.default)}const Le=Object.assign;function jl(t,e){const n={};for(const r in e){const s=e[r];n[r]=fn(s)?s.map(t):t(s)}return n}const Si=()=>{},fn=Array.isArray;function qf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const ry=Symbol("");function Ps(t,e){return Le(new Error,{type:t,[ry]:!0},e)}function Vn(t,e){return t instanceof Error&&ry in t&&(e==null||!!(t.type&e))}const xk=Symbol(""),Wf=Symbol(""),qu=Symbol(""),sy=Symbol(""),kc=Symbol("");/*!
* vue-router v5.1.0
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/const iy=/#/g,kk=/&/g,Pk=/\//g,Ok=/=/g,Nk=/\?/g,oy=/\+/g,Vk=/%5B/g,Dk=/%5D/g,ay=/%5E/g,Mk=/%60/g,ly=/%7B/g,Lk=/%7C/g,cy=/%7D/g,Fk=/%20/g;function Wu(t){return t==null?"":encodeURI(""+t).replace(Lk,"|").replace(Vk,"[").replace(Dk,"]")}function Uk(t){return Wu(t).replace(ly,"{").replace(cy,"}").replace(ay,"^")}function Pc(t){return Wu(t).replace(oy,"%2B").replace(Fk,"+").replace(iy,"%23").replace(kk,"%26").replace(Mk,"`").replace(ly,"{").replace(cy,"}").replace(ay,"^")}function zk(t){return Pc(t).replace(Ok,"%3D")}function $k(t){return Wu(t).replace(iy,"%23").replace(Nk,"%3F")}function Bk(t){return $k(t).replace(Pk,"%2F")}function Aa(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const jk=/\/$/,qk=t=>t.replace(jk,"");function ql(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Kk(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Aa(o)}}function Wk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Os(e.matched[r],n.matched[s])&&uy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function uy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!Gk(t[n],e[n]))return!1;return!0}function Gk(t,e){return fn(t)?Gf(t,e):fn(e)?Gf(e,t):(t&&t.valueOf())===(e&&e.valueOf())}function Gf(t,e){return fn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Kk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const or={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};function Qk(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qk(t)}const Yk=/^[^#]+#/;function Jk(t,e){return t.replace(Yk,"#")+e}function Xk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const il=()=>({left:window.scrollX,top:window.scrollY});function Zk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Xk(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kf(t,e){return(history.state?history.state.position-e:-1)+t}const Oc=new Map;function eP(t,e){Oc.set(t,e)}function tP(t){const e=Oc.get(t);return Oc.delete(t),e}function nP(t){return typeof t=="string"||t&&typeof t=="object"}function hy(t){return typeof t=="string"||typeof t=="symbol"}function rP(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(oy," "),i=s.indexOf("="),o=Aa(i<0?s:s.slice(0,i)),l=i<0?null:Aa(s.slice(i+1));if(o in e){let c=e[o];fn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Qf(t){let e="";for(let n in t){const r=t[n];if(n=zk(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(r)?r.map(s=>s&&Pc(s)):[r&&Pc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function sP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=fn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ii(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function lr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=_=>{_===!1?c(Ps(4,{from:n,to:e})):_ instanceof Error?c(_):nP(_)?c(Ps(2,{from:e,to:_})):(o&&r.enterCallbacks[s]===o&&typeof _=="function"&&o.push(_),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(d);t.length<3&&(f=f.then(u)),f.catch(_=>c(_))})}function Wl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(ny(c)){const u=(c.__vccOpts||c)[e];u&&i.push(lr(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=Ck(d)?d.default:d;o.mods[l]=d,o.components[l]=f;const _=(f.__vccOpts||f)[e];return _&&lr(_,n,r,o,l,s)()}))}}return i}function iP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Os(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Os(u,c))||s.push(c))}return[n,r,s]}/*!
* vue-router v5.1.0
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/let oP=()=>location.protocol+"//"+location.host;function dy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Hf(l,"")}return Hf(n,t)+r+s}function aP(t,e,n,r){let s=[],i=[],o=null;const l=({state:_})=>{const v=dy(t,location),k=n.value,O=e.value;let V=0;if(_){if(n.value=v,e.value=_,o&&o===k){o=null;return}V=O?_.position-O.position:0}else r(v);s.forEach(q=>{q(n.value,k,{delta:V,type:"pop",direction:V?V>0?"forward":"back":""})})};function c(){o=n.value}function u(_){s.push(_);const v=()=>{const k=s.indexOf(_);k>-1&&s.splice(k,1)};return i.push(v),v}function d(){if(document.visibilityState==="hidden"){const{history:_}=window;if(!_.state)return;_.replaceState(Le({},_.state,{scroll:il()}),"")}}function f(){for(const _ of i)_();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:f}}function Yf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?il():null}}function lP(t){const{history:e,location:n}=window,r={value:dy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const f=t.indexOf("#"),_=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:oP()+t+c;try{e[d?"replaceState":"pushState"](u,"",_),s.value=u}catch(v){console.error(v),n[d?"replace":"assign"](_)}}function o(c,u){i(c,Le({},e.state,Yf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const d=Le({},s.value,e.state,{forward:c,scroll:il()});i(d.current,d,!0),i(c,Le({},Yf(r.value,c,null),{position:d.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function cP(t){t=Qk(t);const e=lP(t),n=aP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Le({location:"",base:t,go:r,createHref:Jk.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}const uP={type:0,value:""},hP=/[a-zA-Z0-9_]/;function dP(t){if(!t)return[[]];if(t==="/")return[[uP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function _(){u+=c}for(;l<t.length;)switch(c=t[l++],n){case 0:c==="\\"?(r=n,n=4):c==="/"?(u&&f(),o()):c===":"?(f(),n=1):_();break;case 4:_(),n=r;break;case 1:c==="("?n=2:hP.test(c)?_():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}const Jf="[^/]+?",fP={sensitive:!1,strict:!1,start:!0,end:!0},pP=/[.+*?^${}()[\]/\\]/g;function mP(t,e){const n=Le({},fP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const _=u[f];let v=40+(n.sensitive?.25:0);if(_.type===0)f||(s+="/"),s+=_.value.replace(pP,"\\$&"),v+=40;else if(_.type===1){const{value:k,repeatable:O,optional:V,regexp:q}=_;i.push({name:k,repeatable:O,optional:V});const N=q||Jf;if(N!==Jf){v+=10;try{new RegExp(`(${N})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${k}" (${N}): `+j.message)}}let P=O?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(P=V&&u.length<2?`(?:/${P})`:"/"+P),V&&(P+="?"),s+=P,v+=20,V&&(v+=-8),O&&(v+=-20),N===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),f={};if(!d)return null;for(let _=1;_<d.length;_++){const v=d[_]||"",k=i[_-1];f[k.name]=v&&k.repeatable?v.split("/"):v}return f}function c(u){let d="",f=!1;for(const _ of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const v of _)if(v.type===0)d+=v.value;else if(v.type===1){const{value:k,repeatable:O,optional:V}=v,q=k in u?u[k]:"";if(fn(q)&&!O)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const N=fn(q)?q.join("/"):q;if(!N)if(V)_.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${k}"`);d+=N}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function gP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xf(r))return 1;if(Xf(s))return-1}return s.length-r.length}function Xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _P={strict:!1,end:!0,sensitive:!1};function yP(t,e,n){const r=mP(dP(t.path),n),s=Le(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vP(t,e){const n=[],r=new Map;e=qf(_P,e);function s(f){return r.get(f)}function i(f,_,v){const k=!v,O=ep(f);O.aliasOf=v&&v.record;const V=qf(e,f),q=[O];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const te of j)q.push(ep(Le({},O,{components:v?v.record.components:O.components,path:te,aliasOf:v?v.record:O})))}let N,P;for(const j of q){const{path:te}=j;if(_&&te[0]!=="/"){const G=_.record.path,g=G[G.length-1]==="/"?"":"/";j.path=_.record.path+(te&&g+te)}if(N=yP(j,_,V),v?v.alias.push(N):(P=P||N,P!==N&&P.alias.push(N),k&&f.name&&!tp(N)&&o(f.name)),py(N)&&c(N),O.children){const G=O.children;for(let g=0;g<G.length;g++)i(G[g],N,v&&v.children[g])}v=v||N}return P?()=>{o(P)}:Si}function o(f){if(hy(f)){const _=r.get(f);_&&(r.delete(f),n.splice(n.indexOf(_),1),_.children.forEach(o),_.alias.forEach(o))}else{const _=n.indexOf(f);_>-1&&(n.splice(_,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const _=EP(f,n);n.splice(_,0,f),f.record.name&&!tp(f)&&r.set(f.record.name,f)}function u(f,_){let v,k={},O,V;if("name"in f&&f.name){if(v=r.get(f.name),!v)throw Ps(1,{location:f});V=v.record.name,k=Le(Zf(_.params,v.keys.filter(P=>!P.optional).concat(v.parent?v.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),f.params&&Zf(f.params,v.keys.map(P=>P.name))),O=v.stringify(k)}else if(f.path!=null)O=f.path,v=n.find(P=>P.re.test(O)),v&&(k=v.parse(O),V=v.record.name,v.keys.forEach(P=>{P.optional&&!k[P.name]&&delete k[P.name]}));else{if(v=_.name?r.get(_.name):n.find(P=>P.re.test(_.path)),!v)throw Ps(1,{location:f,currentLocation:_});V=v.record.name,k=Le({},_.params,f.params),O=v.stringify(k)}const q=[];let N=v;for(;N;)q.unshift(N.record),N=N.parent;return{name:V,path:O,params:k,matched:q,meta:bP(q)}}t.forEach(f=>i(f));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Zf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ep(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:wP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function wP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function tp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bP(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function EP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;fy(t,e[i])<0?r=i:n=i+1}const s=TP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function TP(t){let e=t;for(;e=e.parent;)if(py(e)&&fy(t,e)===0)return e}function py({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function np(t){const e=jn(qu),n=jn(sy),r=kt(()=>{const c=oe(t.to);return e.resolve(c)}),s=kt(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const _=f.findIndex(Os.bind(null,d));if(_>-1)return _;const v=rp(c[u-2]);return u>1&&rp(d)===v&&f[f.length-1].path!==v?f.findIndex(Os.bind(null,c[u-2])):_}),i=kt(()=>s.value>-1&&SP(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&uy(n.params,r.value.params));function l(c={}){if(RP(c)){const u=e[oe(t.replace)?"replace":"push"](oe(t.to)).catch(Si);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function IP(t){return t.length===1?t[0]:t}const AP=Jr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:np,setup(t,{slots:e}){const n=tn(np(t)),{options:r}=jn(qu),s=kt(()=>({[sp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&IP(e.default(n));return t.custom?i:wi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}});function RP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function SP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!fn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function rp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sp=(t,e,n)=>t??e??n,CP=Jr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jn(kc),s=kt(()=>t.route||r.value),i=jn(Wf,0),o=kt(()=>{let u=oe(i);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),l=kt(()=>s.value.matched[o.value]);Mo(Wf,kt(()=>o.value+1)),Mo(xk,l),Mo(kc,s);const c=Je();return Lo(()=>[c.value,l.value,t.name],([u,d,f],[_,v,k])=>{d&&(d.instances[f]=u,v&&v!==d&&u&&u===_&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!Os(d,v)||!_)&&(d.enterCallbacks[f]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,f=l.value,_=f&&f.components[d];if(!_)return ip(n.default,{Component:_,route:u});const v=f.props[d],k=v?v===!0?u.params:typeof v=="function"?v(u):v:null,V=wi(_,Le({},k,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return ip(n.default,{Component:V,route:u})||V}}});function ip(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xP=CP;function kP(t){const e=vP(t.routes,t),n=t.parseQuery||rP,r=t.stringifyQuery||Qf,s=t.history,i=ii(),o=ii(),l=ii(),c=vv(or);let u=or;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=jl.bind(null,M=>""+M),f=jl.bind(null,Bk),_=jl.bind(null,Aa);function v(M,X){let W,ie;return hy(M)?(W=e.getRecordMatcher(M),ie=X):ie=M,e.addRoute(ie,W)}function k(M){const X=e.getRecordMatcher(M);X&&e.removeRoute(X)}function O(){return e.getRoutes().map(M=>M.record)}function V(M){return!!e.getRecordMatcher(M)}function q(M,X){if(X=Le({},X||c.value),typeof M=="string"){const S=ql(n,M,X.path),L=e.resolve({path:S.path},X),U=s.createHref(S.fullPath);return Le(S,L,{params:_(L.params),redirectedFrom:void 0,href:U})}let W;if(M.path!=null)W=Le({},M,{path:ql(n,M.path,X.path).path});else{const S=Le({},M.params);for(const L in S)S[L]==null&&delete S[L];W=Le({},M,{params:f(S)}),X.params=f(X.params)}const ie=e.resolve(W,X),_e=M.hash||"";ie.params=d(_(ie.params));const w=Wk(r,Le({},M,{hash:Uk(_e),path:ie.path})),T=s.createHref(w);return Le({fullPath:w,hash:_e,query:r===Qf?sP(M.query):M.query||{}},ie,{redirectedFrom:void 0,href:T})}function N(M){return typeof M=="string"?ql(n,M,c.value.path):Le({},M)}function P(M,X){if(u!==M)return Ps(8,{from:X,to:M})}function j(M){return g(M)}function te(M){return j(Le(N(M),{replace:!0}))}function G(M,X){const W=M.matched[M.matched.length-1];if(W&&W.redirect){const{redirect:ie}=W;let _e=typeof ie=="function"?ie(M,X):ie;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=N(_e):{path:_e},_e.params={}),Le({query:M.query,hash:M.hash,params:_e.path!=null?{}:M.params},_e)}}function g(M,X){const W=u=q(M),ie=c.value,_e=M.state,w=M.force,T=M.replace===!0,S=G(W,ie);if(S)return g(Le(N(S),{state:typeof S=="object"?Le({},_e,S.state):_e,force:w,replace:T}),X||W);const L=W;L.redirectedFrom=X;let U;return!w&&Hk(r,ie,W)&&(U=Ps(16,{to:L,from:ie}),Nt(ie,ie,!0,!1)),(U?Promise.resolve(U):I(L,ie)).catch(F=>Vn(F)?Vn(F,2)?F:re(F):Ae(F,L,ie)).then(F=>{if(F){if(Vn(F,2))return g(Le({replace:T},N(F.to),{state:typeof F.to=="object"?Le({},_e,F.to.state):_e,force:w}),X||L)}else F=C(L,ie,!0,T,_e);return R(L,ie,F),F})}function m(M,X){const W=P(M,X);return W?Promise.reject(W):Promise.resolve()}function b(M){const X=Qt.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(M):M()}function I(M,X){let W;const[ie,_e,w]=iP(M,X);W=Wl(ie.reverse(),"beforeRouteLeave",M,X);for(const S of ie)S.leaveGuards.forEach(L=>{W.push(lr(L,M,X))});const T=m.bind(null,M,X);return W.push(T),De(W).then(()=>{W=[];for(const S of i.list())W.push(lr(S,M,X));return W.push(T),De(W)}).then(()=>{W=Wl(_e,"beforeRouteUpdate",M,X);for(const S of _e)S.updateGuards.forEach(L=>{W.push(lr(L,M,X))});return W.push(T),De(W)}).then(()=>{W=[];for(const S of w)if(S.beforeEnter)if(fn(S.beforeEnter))for(const L of S.beforeEnter)W.push(lr(L,M,X));else W.push(lr(S.beforeEnter,M,X));return W.push(T),De(W)}).then(()=>(M.matched.forEach(S=>S.enterCallbacks={}),W=Wl(w,"beforeRouteEnter",M,X,b),W.push(T),De(W))).then(()=>{W=[];for(const S of o.list())W.push(lr(S,M,X));return W.push(T),De(W)}).catch(S=>Vn(S,8)?S:Promise.reject(S))}function R(M,X,W){l.list().forEach(ie=>b(()=>ie(M,X,W)))}function C(M,X,W,ie,_e){const w=P(M,X);if(w)return w;const T=X===or,S=hs?history.state:{};W&&(ie||T?s.replace(M.fullPath,Le({scroll:T&&S&&S.scroll},_e)):s.push(M.fullPath,_e)),c.value=M,Nt(M,X,W,T),re()}let E;function ot(){E||(E=s.listen((M,X,W)=>{if(!Ue.listening)return;const ie=q(M),_e=G(ie,Ue.currentRoute.value);if(_e){g(Le(_e,{replace:!0,force:!0}),ie).catch(Si);return}u=ie;const w=c.value;hs&&eP(Kf(w.fullPath,W.delta),il()),I(ie,w).catch(T=>Vn(T,12)?T:Vn(T,2)?(g(Le(N(T.to),{force:!0}),ie).then(S=>{Vn(S,20)&&!W.delta&&W.type==="pop"&&s.go(-1,!1)}).catch(Si),Promise.reject()):(W.delta&&s.go(-W.delta,!1),Ae(T,ie,w))).then(T=>{T=T||C(ie,w,!1),T&&(W.delta&&!Vn(T,8)?s.go(-W.delta,!1):W.type==="pop"&&Vn(T,20)&&s.go(-1,!1)),R(ie,w,T)}).catch(Si)}))}let at=ii(),Pe=ii(),Ee;function Ae(M,X,W){re(M);const ie=Pe.list();return ie.length?ie.forEach(_e=>_e(M,X,W)):console.error(M),Promise.reject(M)}function ft(){return Ee&&c.value!==or?Promise.resolve():new Promise((M,X)=>{at.add([M,X])})}function re(M){return Ee||(Ee=!M,ot(),at.list().forEach(([X,W])=>M?W(M):X()),at.reset()),M}function Nt(M,X,W,ie){const{scrollBehavior:_e}=t;if(!hs||!_e)return Promise.resolve();const w=!W&&tP(Kf(M.fullPath,0))||(ie||!W)&&history.state&&history.state.scroll||null;return $c().then(()=>_e(M,X,w)).then(T=>T&&Zk(T)).catch(T=>Ae(T,M,X))}const We=M=>s.go(M);let He;const Qt=new Set,Ue={currentRoute:c,listening:!0,addRoute:v,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:O,resolve:q,options:t,push:j,replace:te,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Pe.add,isReady:ft,install(M){M.component("RouterLink",AP),M.component("RouterView",xP),M.config.globalProperties.$router=Ue,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>oe(c)}),hs&&!He&&c.value===or&&(He=!0,j(s.location).catch(ie=>{}));const X={};for(const ie in or)Object.defineProperty(X,ie,{get:()=>c.value[ie],enumerable:!0});M.provide(qu,Ue),M.provide(sy,xp(X)),M.provide(kc,c);const W=M.unmount;Qt.add(M),M.unmount=function(){Qt.delete(M),Qt.size<1&&(u=or,E&&E(),E=null,c.value=or,He=!1,Ee=!1),W()}}};function De(M){return M.reduce((X,W)=>X.then(()=>b(W)),Promise.resolve())}return Ue}const PP=kP({history:cP("/"),routes:[]}),my=nw(Sk);my.use(PP);my.mount("#app");
