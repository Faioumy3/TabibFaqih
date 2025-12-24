(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const g of f)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function r(f){const g={};return f.integrity&&(g.integrity=f.integrity),f.referrerPolicy&&(g.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?g.credentials="include":f.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function o(f){if(f.ep)return;f.ep=!0;const g=r(f);fetch(f.href,g)}})();function d0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Df={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function _v(){if(Wm)return hl;Wm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(o,f,g){var p=null;if(g!==void 0&&(p=""+g),f.key!==void 0&&(p=""+f.key),"key"in f){g={};for(var w in f)w!=="key"&&(g[w]=f[w])}else g=f;return f=g.ref,{$$typeof:a,type:o,key:p,ref:f!==void 0?f:null,props:g}}return hl.Fragment=i,hl.jsx=r,hl.jsxs=r,hl}var ep;function bv(){return ep||(ep=1,Df.exports=_v()),Df.exports}var y=bv(),If={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Ev(){if(tp)return de;tp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),p=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),B=Symbol.iterator;function se(D){return D===null||typeof D!="object"?null:(D=B&&D[B]||D["@@iterator"],typeof D=="function"?D:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,le={};function re(D,K,J){this.props=D,this.context=K,this.refs=le,this.updater=J||ee}re.prototype.isReactComponent={},re.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},re.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ie(){}ie.prototype=re.prototype;function oe(D,K,J){this.props=D,this.context=K,this.refs=le,this.updater=J||ee}var je=oe.prototype=new ie;je.constructor=oe,ne(je,re.prototype),je.isPureReactComponent=!0;var qe=Array.isArray;function Re(){}var S={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function b(D,K,J){var $=J.ref;return{$$typeof:a,type:D,key:K,ref:$!==void 0?$:null,props:J}}function C(D,K){return b(D.type,K,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===a}function I(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(J){return K[J]})}var A=/\/+/g;function Xe(D,K){return typeof D=="object"&&D!==null&&D.key!=null?I(""+D.key):K.toString(36)}function Qe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(Re,Re):(D.status="pending",D.then(function(K){D.status==="pending"&&(D.status="fulfilled",D.value=K)},function(K){D.status==="pending"&&(D.status="rejected",D.reason=K)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function V(D,K,J,$,he){var pe=typeof D;(pe==="undefined"||pe==="boolean")&&(D=null);var xe=!1;if(D===null)xe=!0;else switch(pe){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(D.$$typeof){case a:case i:xe=!0;break;case P:return xe=D._init,V(xe(D._payload),K,J,$,he)}}if(xe)return he=he(D),xe=$===""?"."+Xe(D,0):$,qe(he)?(J="",xe!=null&&(J=xe.replace(A,"$&/")+"/"),V(he,K,J,"",function(vs){return vs})):he!=null&&(R(he)&&(he=C(he,J+(he.key==null||D&&D.key===he.key?"":(""+he.key).replace(A,"$&/")+"/")+xe)),K.push(he)),1;xe=0;var pt=$===""?".":$+":";if(qe(D))for(var Ze=0;Ze<D.length;Ze++)$=D[Ze],pe=pt+Xe($,Ze),xe+=V($,K,J,pe,he);else if(Ze=se(D),typeof Ze=="function")for(D=Ze.call(D),Ze=0;!($=D.next()).done;)$=$.value,pe=pt+Xe($,Ze++),xe+=V($,K,J,pe,he);else if(pe==="object"){if(typeof D.then=="function")return V(Qe(D),K,J,$,he);throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return xe}function Z(D,K,J){if(D==null)return D;var $=[],he=0;return V(D,$,"","",function(pe){return K.call(J,pe,he++)}),$}function ue(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(J){(D._status===0||D._status===-1)&&(D._status=1,D._result=J)},function(J){(D._status===0||D._status===-1)&&(D._status=2,D._result=J)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var Ce=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Ue={map:Z,forEach:function(D,K,J){Z(D,function(){K.apply(this,arguments)},J)},count:function(D){var K=0;return Z(D,function(){K++}),K},toArray:function(D){return Z(D,function(K){return K})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return de.Activity=j,de.Children=Ue,de.Component=re,de.Fragment=r,de.Profiler=f,de.PureComponent=oe,de.StrictMode=o,de.Suspense=x,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,de.__COMPILER_RUNTIME={__proto__:null,c:function(D){return S.H.useMemoCache(D)}},de.cache=function(D){return function(){return D.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(D,K,J){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var $=ne({},D.props),he=D.key;if(K!=null)for(pe in K.key!==void 0&&(he=""+K.key),K)!E.call(K,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&K.ref===void 0||($[pe]=K[pe]);var pe=arguments.length-2;if(pe===1)$.children=J;else if(1<pe){for(var xe=Array(pe),pt=0;pt<pe;pt++)xe[pt]=arguments[pt+2];$.children=xe}return b(D.type,he,$)},de.createContext=function(D){return D={$$typeof:p,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:g,_context:D},D},de.createElement=function(D,K,J){var $,he={},pe=null;if(K!=null)for($ in K.key!==void 0&&(pe=""+K.key),K)E.call(K,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(he[$]=K[$]);var xe=arguments.length-2;if(xe===1)he.children=J;else if(1<xe){for(var pt=Array(xe),Ze=0;Ze<xe;Ze++)pt[Ze]=arguments[Ze+2];he.children=pt}if(D&&D.defaultProps)for($ in xe=D.defaultProps,xe)he[$]===void 0&&(he[$]=xe[$]);return b(D,pe,he)},de.createRef=function(){return{current:null}},de.forwardRef=function(D){return{$$typeof:w,render:D}},de.isValidElement=R,de.lazy=function(D){return{$$typeof:P,_payload:{_status:-1,_result:D},_init:ue}},de.memo=function(D,K){return{$$typeof:T,type:D,compare:K===void 0?null:K}},de.startTransition=function(D){var K=S.T,J={};S.T=J;try{var $=D(),he=S.S;he!==null&&he(J,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Re,Ce)}catch(pe){Ce(pe)}finally{K!==null&&J.types!==null&&(K.types=J.types),S.T=K}},de.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},de.use=function(D){return S.H.use(D)},de.useActionState=function(D,K,J){return S.H.useActionState(D,K,J)},de.useCallback=function(D,K){return S.H.useCallback(D,K)},de.useContext=function(D){return S.H.useContext(D)},de.useDebugValue=function(){},de.useDeferredValue=function(D,K){return S.H.useDeferredValue(D,K)},de.useEffect=function(D,K){return S.H.useEffect(D,K)},de.useEffectEvent=function(D){return S.H.useEffectEvent(D)},de.useId=function(){return S.H.useId()},de.useImperativeHandle=function(D,K,J){return S.H.useImperativeHandle(D,K,J)},de.useInsertionEffect=function(D,K){return S.H.useInsertionEffect(D,K)},de.useLayoutEffect=function(D,K){return S.H.useLayoutEffect(D,K)},de.useMemo=function(D,K){return S.H.useMemo(D,K)},de.useOptimistic=function(D,K){return S.H.useOptimistic(D,K)},de.useReducer=function(D,K,J){return S.H.useReducer(D,K,J)},de.useRef=function(D){return S.H.useRef(D)},de.useState=function(D){return S.H.useState(D)},de.useSyncExternalStore=function(D,K,J){return S.H.useSyncExternalStore(D,K,J)},de.useTransition=function(){return S.H.useTransition()},de.version="19.2.1",de}var np;function lh(){return np||(np=1,If.exports=Ev()),If.exports}var ve=lh();const Tv=d0(ve);var Mf={exports:{}},dl={},jf={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function Sv(){return ip||(ip=1,(function(a){function i(V,Z){var ue=V.length;V.push(Z);e:for(;0<ue;){var Ce=ue-1>>>1,Ue=V[Ce];if(0<f(Ue,Z))V[Ce]=Z,V[ue]=Ue,ue=Ce;else break e}}function r(V){return V.length===0?null:V[0]}function o(V){if(V.length===0)return null;var Z=V[0],ue=V.pop();if(ue!==Z){V[0]=ue;e:for(var Ce=0,Ue=V.length,D=Ue>>>1;Ce<D;){var K=2*(Ce+1)-1,J=V[K],$=K+1,he=V[$];if(0>f(J,ue))$<Ue&&0>f(he,J)?(V[Ce]=he,V[$]=ue,Ce=$):(V[Ce]=J,V[K]=ue,Ce=K);else if($<Ue&&0>f(he,ue))V[Ce]=he,V[$]=ue,Ce=$;else break e}}return Z}function f(V,Z){var ue=V.sortIndex-Z.sortIndex;return ue!==0?ue:V.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;a.unstable_now=function(){return g.now()}}else{var p=Date,w=p.now();a.unstable_now=function(){return p.now()-w}}var x=[],T=[],P=1,j=null,B=3,se=!1,ee=!1,ne=!1,le=!1,re=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;function je(V){for(var Z=r(T);Z!==null;){if(Z.callback===null)o(T);else if(Z.startTime<=V)o(T),Z.sortIndex=Z.expirationTime,i(x,Z);else break;Z=r(T)}}function qe(V){if(ne=!1,je(V),!ee)if(r(x)!==null)ee=!0,Re||(Re=!0,I());else{var Z=r(T);Z!==null&&Qe(qe,Z.startTime-V)}}var Re=!1,S=-1,E=5,b=-1;function C(){return le?!0:!(a.unstable_now()-b<E)}function R(){if(le=!1,Re){var V=a.unstable_now();b=V;var Z=!0;try{e:{ee=!1,ne&&(ne=!1,ie(S),S=-1),se=!0;var ue=B;try{t:{for(je(V),j=r(x);j!==null&&!(j.expirationTime>V&&C());){var Ce=j.callback;if(typeof Ce=="function"){j.callback=null,B=j.priorityLevel;var Ue=Ce(j.expirationTime<=V);if(V=a.unstable_now(),typeof Ue=="function"){j.callback=Ue,je(V),Z=!0;break t}j===r(x)&&o(x),je(V)}else o(x);j=r(x)}if(j!==null)Z=!0;else{var D=r(T);D!==null&&Qe(qe,D.startTime-V),Z=!1}}break e}finally{j=null,B=ue,se=!1}Z=void 0}}finally{Z?I():Re=!1}}}var I;if(typeof oe=="function")I=function(){oe(R)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,Xe=A.port2;A.port1.onmessage=R,I=function(){Xe.postMessage(null)}}else I=function(){re(R,0)};function Qe(V,Z){S=re(function(){V(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){V.callback=null},a.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<V?Math.floor(1e3/V):5},a.unstable_getCurrentPriorityLevel=function(){return B},a.unstable_next=function(V){switch(B){case 1:case 2:case 3:var Z=3;break;default:Z=B}var ue=B;B=Z;try{return V()}finally{B=ue}},a.unstable_requestPaint=function(){le=!0},a.unstable_runWithPriority=function(V,Z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ue=B;B=V;try{return Z()}finally{B=ue}},a.unstable_scheduleCallback=function(V,Z,ue){var Ce=a.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ce+ue:Ce):ue=Ce,V){case 1:var Ue=-1;break;case 2:Ue=250;break;case 5:Ue=1073741823;break;case 4:Ue=1e4;break;default:Ue=5e3}return Ue=ue+Ue,V={id:P++,callback:Z,priorityLevel:V,startTime:ue,expirationTime:Ue,sortIndex:-1},ue>Ce?(V.sortIndex=ue,i(T,V),r(x)===null&&V===r(T)&&(ne?(ie(S),S=-1):ne=!0,Qe(qe,ue-Ce))):(V.sortIndex=Ue,i(x,V),ee||se||(ee=!0,Re||(Re=!0,I()))),V},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(V){var Z=B;return function(){var ue=B;B=Z;try{return V.apply(this,arguments)}finally{B=ue}}}})(Uf)),Uf}var sp;function xv(){return sp||(sp=1,jf.exports=Sv()),jf.exports}var Lf={exports:{}},Ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Av(){if(ap)return Ot;ap=1;var a=lh();function i(x){var T="https://react.dev/errors/"+x;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)T+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+x+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},f=Symbol.for("react.portal");function g(x,T,P){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:j==null?null:""+j,children:x,containerInfo:T,implementation:P}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(x,T){if(x==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ot.createPortal=function(x,T){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(i(299));return g(x,T,null,P)},Ot.flushSync=function(x){var T=p.T,P=o.p;try{if(p.T=null,o.p=2,x)return x()}finally{p.T=T,o.p=P,o.d.f()}},Ot.preconnect=function(x,T){typeof x=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,o.d.C(x,T))},Ot.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},Ot.preinit=function(x,T){if(typeof x=="string"&&T&&typeof T.as=="string"){var P=T.as,j=w(P,T.crossOrigin),B=typeof T.integrity=="string"?T.integrity:void 0,se=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;P==="style"?o.d.S(x,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:j,integrity:B,fetchPriority:se}):P==="script"&&o.d.X(x,{crossOrigin:j,integrity:B,fetchPriority:se,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Ot.preinitModule=function(x,T){if(typeof x=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var P=w(T.as,T.crossOrigin);o.d.M(x,{crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&o.d.M(x)},Ot.preload=function(x,T){if(typeof x=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var P=T.as,j=w(P,T.crossOrigin);o.d.L(x,P,{crossOrigin:j,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Ot.preloadModule=function(x,T){if(typeof x=="string")if(T){var P=w(T.as,T.crossOrigin);o.d.m(x,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else o.d.m(x)},Ot.requestFormReset=function(x){o.d.r(x)},Ot.unstable_batchedUpdates=function(x,T){return x(T)},Ot.useFormState=function(x,T,P){return p.H.useFormState(x,T,P)},Ot.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ot.version="19.2.1",Ot}var rp;function Nv(){if(rp)return Lf.exports;rp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Lf.exports=Av(),Lf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function wv(){if(lp)return dl;lp=1;var a=xv(),i=lh(),r=Nv();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(g(e)!==e)throw Error(o(188))}function T(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,s=t;;){var u=n.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){n=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===n)return x(u),e;if(c===s)return x(u),t;c=c.sibling}throw Error(o(188))}if(n.return!==s.return)n=u,s=c;else{for(var d=!1,v=u.child;v;){if(v===n){d=!0,n=u,s=c;break}if(v===s){d=!0,s=u,n=c;break}v=v.sibling}if(!d){for(v=c.child;v;){if(v===n){d=!0,n=c,s=u;break}if(v===s){d=!0,s=c,n=u;break}v=v.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==s)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,B=Symbol.for("react.element"),se=Symbol.for("react.transitional.element"),ee=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),ie=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),R=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var A=Symbol.for("react.client.reference");function Xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case re:return"Profiler";case le:return"StrictMode";case qe:return"Suspense";case Re:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ee:return"Portal";case oe:return e.displayName||"Context";case ie:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case S:return t=e.displayName||null,t!==null?t:Xe(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return Xe(e(t))}catch{}}return null}var Qe=Array.isArray,V=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},Ce=[],Ue=-1;function D(e){return{current:e}}function K(e){0>Ue||(e.current=Ce[Ue],Ce[Ue]=null,Ue--)}function J(e,t){Ue++,Ce[Ue]=e.current,e.current=t}var $=D(null),he=D(null),pe=D(null),xe=D(null);function pt(e,t){switch(J(pe,t),J(he,e),J($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tm(t),e=Sm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K($),J($,e)}function Ze(){K($),K(he),K(pe)}function vs(e){e.memoizedState!==null&&J(xe,e);var t=$.current,n=Sm(t,e.type);t!==n&&(J(he,e),J($,n))}function la(e){he.current===e&&(K($),K(he)),xe.current===e&&(K(xe),ol._currentValue=ue)}var oa,ua;function On(e){if(oa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oa=t&&t[1]||"",ua=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oa+e+ua}var or=!1;function _s(e,t){if(!e||or)return"";or=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(q){var k=q}Reflect.construct(e,[],F)}else{try{F.call()}catch(q){k=q}e.call(F.prototype)}}else{try{throw Error()}catch(q){k=q}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(q){if(q&&k&&typeof q.stack=="string")return[q.stack,k.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),d=c[0],v=c[1];if(d&&v){var N=d.split(`
`),z=v.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<z.length&&!z[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===z.length)for(s=N.length-1,u=z.length-1;1<=s&&0<=u&&N[s]!==z[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==z[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==z[u]){var G=`
`+N[s].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=s&&0<=u);break}}}finally{or=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?On(n):""}function ur(e,t){switch(e.tag){case 26:case 27:case 5:return On(e.type);case 16:return On("Lazy");case 13:return e.child!==t&&t!==null?On("Suspense Fallback"):On("Suspense");case 19:return On("SuspenseList");case 0:case 15:return _s(e.type,!1);case 11:return _s(e.type.render,!1);case 1:return _s(e.type,!0);case 31:return On("Activity");default:return""}}function cr(e){try{var t="",n=null;do t+=ur(e,n),n=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var at=Object.prototype.hasOwnProperty,yt=a.unstable_scheduleCallback,Oi=a.unstable_cancelCallback,Du=a.unstable_shouldYield,Dl=a.unstable_requestPaint,Dt=a.unstable_now,bs=a.unstable_getCurrentPriorityLevel,fr=a.unstable_ImmediatePriority,hr=a.unstable_UserBlockingPriority,Di=a.unstable_NormalPriority,Iu=a.unstable_LowPriority,Il=a.unstable_IdlePriority,Ml=a.log,Mu=a.unstable_setDisableYieldValue,dn=null,Tt=null;function Wt(e){if(typeof Ml=="function"&&Mu(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(dn,e)}catch{}}var rt=Math.clz32?Math.clz32:Ul,jl=Math.log,dr=Math.LN2;function Ul(e){return e>>>=0,e===0?32:31-(jl(e)/dr|0)|0}var Dn=256,Es=262144,lt=4194304;function In(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,n){var s=e.pendingLanes;if(s===0)return 0;var u=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var v=s&134217727;return v!==0?(s=v&~c,s!==0?u=In(s):(d&=v,d!==0?u=In(d):n||(n=v&~e,n!==0&&(u=In(n))))):(v=s&~c,v!==0?u=In(v):d!==0?u=In(d):n||(n=s&~e,n!==0&&(u=In(n)))),u===0?0:t!==0&&t!==u&&(t&c)===0&&(c=u&-u,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:u}function gn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ju(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ll(){var e=lt;return lt<<=1,(lt&62914560)===0&&(lt=4194304),e}function jn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ts(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Uu(e,t,n,s,u,c){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,N=e.expirationTimes,z=e.hiddenUpdates;for(n=d&~n;0<n;){var G=31-rt(n),F=1<<G;v[G]=0,N[G]=-1;var k=z[G];if(k!==null)for(z[G]=null,G=0;G<k.length;G++){var q=k[G];q!==null&&(q.lane&=-536870913)}n&=~F}s!==0&&ca(e,s,0),c!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~t))}function ca(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-rt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|n&261930}function zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-rt(n),u=1<<s;u&t|e[s]&t&&(e[s]|=t),n&=~u}}function gr(e,t){var n=t&-t;return n=(n&42)!==0?1:Ss(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ss(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function si(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kl(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Xm(e.type))}function mn(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var pn=Math.random().toString(36).slice(2),ot="__reactFiber$"+pn,_t="__reactProps$"+pn,Un="__reactContainer$"+pn,fa="__reactEvents$"+pn,Lu="__reactListeners$"+pn,Hl="__reactHandles$"+pn,ql="__reactResources$"+pn,Ln="__reactMarker$"+pn;function ha(e){delete e[ot],delete e[_t],delete e[fa],delete e[Lu],delete e[Hl]}function zn(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Om(e);e!==null;){if(n=e[ot])return n;e=Om(e)}return t}e=n,n=e.parentNode}return null}function en(e){if(e=e[ot]||e[Un]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function kn(e){var t=e[ql];return t||(t=e[ql]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[Ln]=!0}var mr=new Set,pr={};function Hn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(pr[e]=t,e=0;e<t.length;e++)mr.add(t[e])}var yr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vr={},_r={};function Bl(e){return at.call(_r,e)?!0:at.call(vr,e)?!1:yr.test(e)?_r[e]=!0:(vr[e]=!0,!1)}function da(e,t,n){if(Bl(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ct(e,t,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+s)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ii(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function br(e,t,n){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(d){n=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Le(e){if(!e._valueTracker){var t=Ii(e)?"checked":"value";e._valueTracker=br(e,t,""+e[t])}}function xs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Ii(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var As=/[\n"\\]/g;function Lt(e){return e.replace(As,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ga(e,t,n,s,u,c,d,v){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Er(e,d,bt(t)):n!=null?Er(e,d,bt(n)):s!=null&&e.removeAttribute("value"),u==null&&c!=null&&(e.defaultChecked=!!c),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+bt(v):e.removeAttribute("name")}function Vl(e,t,n,s,u,c,d,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Le(e);return}n=n!=null?""+bt(n):"",t=t!=null?""+bt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=v?e.checked:!!s,e.defaultChecked=!!s,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Le(e)}function Er(e,t,n){t==="number"&&Bn(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mi(e,t,n,s){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&s&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Gl(e,t,n){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+bt(n):""}function ji(e,t,n,s){if(t==null){if(s!=null){if(n!=null)throw Error(o(92));if(Qe(s)){if(1<s.length)throw Error(o(93));s=s[0]}n=s}n==null&&(n=""),t=n}n=bt(t),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s),Le(e)}function zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tr(e,t,n){var s=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,n):typeof n!="number"||n===0||Pl.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Sr(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in t)s=t[u],t.hasOwnProperty(u)&&n[u]!==s&&Tr(e,u,s)}else for(var c in t)t.hasOwnProperty(c)&&Tr(e,c,t[c])}function ma(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ui=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pa(e){return Ui.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yn(){}var xr=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,Vn=null;function Ns(e){var t=en(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;e:switch(e=t.stateNode,t.type){case"input":if(ga(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var u=s[_t]||null;if(!u)throw Error(o(90));ga(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<n.length;t++)s=n[t],s.form===e.form&&xs(s)}break e;case"textarea":Gl(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Mi(e,!!n.multiple,t,!1)}}}var ya=!1;function zi(e,t,n){if(ya)return e(t,n);ya=!0;try{var s=e(t);return s}finally{if(ya=!1,(Li!==null||Vn!==null)&&(Ho(),Li&&(t=Li,e=Vn,Vn=Li=null,Ns(t),e)))for(t=0;t<e.length;t++)Ns(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var s=n[_t]||null;if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ws=!1;if(nn)try{var Pe={};Object.defineProperty(Pe,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Pe,Pe),window.removeEventListener("test",Pe,Pe)}catch{ws=!1}var Gn=null,Ar=null,Cs=null;function Nr(){if(Cs)return Cs;var e,t=Ar,n=t.length,s,u="value"in Gn?Gn.value:Gn.textContent,c=u.length;for(e=0;e<n&&t[e]===u[e];e++);var d=n-e;for(s=1;s<=d&&t[n-s]===u[c-s];s++);return Cs=u.slice(e,1<s?1-s:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function _n(){return!1}function St(e){function t(n,s,u,c,d){this._reactName=n,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ai:_n,this.isPropagationStopped=_n,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=St(ri),ki=j({},ri,{view:0,detail:0}),wr=St(ki),Hi,va,Yn,_a=j({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ct,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(Hi=e.screenX-Yn.screenX,va=e.screenY-Yn.screenY):va=Hi=0,Yn=e),Hi)},movementY:function(e){return"movementY"in e?e.movementY:va}}),Cr=St(_a),Os=j({},_a,{dataTransfer:0}),Xl=St(Os),Fl=j({},ki,{relatedTarget:0}),Ds=St(Fl),Rr=j({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),Kl=St(Rr),ba=j({},ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ql=St(ba),Zl=j({},ri,{data:0}),Xn=St(Zl),Jl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$l={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eo(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wl[e])?!!t[e]:!1}function Ct(){return eo}var to=j({},ki,{key:function(e){if(e.key){var t=Jl[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$l[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ct,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),no=St(to),qi=j({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l=St(qi),h=j({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ct}),m=St(h),_=j({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),U=St(_),H=j({},_a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q=St(H),ge=j({},ri,{newState:0,oldState:0}),nt=St(ge),ze=[9,13,27,32],$e=nn&&"CompositionEvent"in window,Rt=null;nn&&"documentMode"in document&&(Rt=document.documentMode);var li=nn&&"TextEvent"in window&&!Rt,bn=nn&&(!$e||Rt&&8<Rt&&11>=Rt),En=" ",Is=!1;function Ea(e,t){switch(e){case"keyup":return ze.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ta=!1;function Gy(e,t){switch(e){case"compositionend":return Ih(t);case"keypress":return t.which!==32?null:(Is=!0,En);case"textInput":return e=t.data,e===En&&Is?null:e;default:return null}}function Py(e,t){if(Ta)return e==="compositionend"||!$e&&Ea(e,t)?(e=Nr(),Cs=Ar=Gn=null,Ta=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bn&&t.locale!=="ko"?null:t.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yy[e.type]:t==="textarea"}function jh(e,t,n,s){Li?Vn?Vn.push(s):Vn=[s]:Li=s,t=Xo(t,"onChange"),0<t.length&&(n=new Pn("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Or=null,Dr=null;function Xy(e){pm(e,0)}function io(e){var t=Gt(e);if(xs(t))return e}function Uh(e,t){if(e==="change")return t}var Lh=!1;if(nn){var zu;if(nn){var ku="oninput"in document;if(!ku){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),ku=typeof zh.oninput=="function"}zu=ku}else zu=!1;Lh=zu&&(!document.documentMode||9<document.documentMode)}function kh(){Or&&(Or.detachEvent("onpropertychange",Hh),Dr=Or=null)}function Hh(e){if(e.propertyName==="value"&&io(Dr)){var t=[];jh(t,Dr,e,tn(e)),zi(Xy,t)}}function Fy(e,t,n){e==="focusin"?(kh(),Or=t,Dr=n,Or.attachEvent("onpropertychange",Hh)):e==="focusout"&&kh()}function Ky(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(Dr)}function Qy(e,t){if(e==="click")return io(t)}function Zy(e,t){if(e==="input"||e==="change")return io(t)}function Jy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:Jy;function Ir(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var u=n[s];if(!at.call(t,u)||!Yt(e[u],t[u]))return!1}return!0}function qh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bh(e,t){var n=qh(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qh(n)}}function Vh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bn(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bn(e.document)}return t}function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $y=nn&&"documentMode"in document&&11>=document.documentMode,Sa=null,qu=null,Mr=null,Bu=!1;function Ph(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||Sa==null||Sa!==Bn(s)||(s=Sa,"selectionStart"in s&&Hu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Mr&&Ir(Mr,s)||(Mr=s,s=Xo(qu,"onSelect"),0<s.length&&(t=new Pn("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Sa)))}function Ms(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xa={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},Vu={},Yh={};nn&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function js(e){if(Vu[e])return Vu[e];if(!xa[e])return e;var t=xa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yh)return Vu[e]=t[n];return e}var Xh=js("animationend"),Fh=js("animationiteration"),Kh=js("animationstart"),Wy=js("transitionrun"),e1=js("transitionstart"),t1=js("transitioncancel"),Qh=js("transitionend"),Zh=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function Tn(e,t){Zh.set(e,t),Hn(t,[e])}var so=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},sn=[],Aa=0,Pu=0;function ao(){for(var e=Aa,t=Pu=Aa=0;t<e;){var n=sn[t];sn[t++]=null;var s=sn[t];sn[t++]=null;var u=sn[t];sn[t++]=null;var c=sn[t];if(sn[t++]=null,s!==null&&u!==null){var d=s.pending;d===null?u.next=u:(u.next=d.next,d.next=u),s.pending=u}c!==0&&Jh(n,u,c)}}function ro(e,t,n,s){sn[Aa++]=e,sn[Aa++]=t,sn[Aa++]=n,sn[Aa++]=s,Pu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Yu(e,t,n,s){return ro(e,t,n,s),lo(e)}function Us(e,t){return ro(e,null,null,t),lo(e)}function Jh(e,t,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var u=!1,c=e.return;c!==null;)c.childLanes|=n,s=c.alternate,s!==null&&(s.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(u=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,u&&t!==null&&(u=31-rt(n),e=c.hiddenUpdates,s=e[u],s===null?e[u]=[t]:s.push(t),t.lane=n|536870912),c):null}function lo(e){if(50<tl)throw tl=0,ef=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Na={};function n1(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,s){return new n1(e,t,n,s)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oi(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function $h(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oo(e,t,n,s,u,c){var d=0;if(s=e,typeof e=="function")Xu(e)&&(d=1);else if(typeof e=="string")d=lv(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case b:return e=Xt(31,n,t,u),e.elementType=b,e.lanes=c,e;case ne:return Ls(n.children,u,c,t);case le:d=8,u|=24;break;case re:return e=Xt(12,n,t,u|2),e.elementType=re,e.lanes=c,e;case qe:return e=Xt(13,n,t,u),e.elementType=qe,e.lanes=c,e;case Re:return e=Xt(19,n,t,u),e.elementType=Re,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:d=10;break e;case ie:d=9;break e;case je:d=11;break e;case S:d=14;break e;case E:d=16,s=null;break e}d=29,n=Error(o(130,e===null?"null":typeof e,"")),s=null}return t=Xt(d,n,t,u),t.elementType=e,t.type=s,t.lanes=c,t}function Ls(e,t,n,s){return e=Xt(7,e,s,t),e.lanes=n,e}function Fu(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function Wh(e){var t=Xt(18,null,null,0);return t.stateNode=e,t}function Ku(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ed=new WeakMap;function an(e,t){if(typeof e=="object"&&e!==null){var n=ed.get(e);return n!==void 0?n:(t={value:e,source:t,stack:cr(t)},ed.set(e,t),t)}return{value:e,source:t,stack:cr(t)}}var wa=[],Ca=0,uo=null,jr=0,rn=[],ln=0,Bi=null,Fn=1,Kn="";function ui(e,t){wa[Ca++]=jr,wa[Ca++]=uo,uo=e,jr=t}function td(e,t,n){rn[ln++]=Fn,rn[ln++]=Kn,rn[ln++]=Bi,Bi=e;var s=Fn;e=Kn;var u=32-rt(s)-1;s&=~(1<<u),n+=1;var c=32-rt(t)+u;if(30<c){var d=u-u%5;c=(s&(1<<d)-1).toString(32),s>>=d,u-=d,Fn=1<<32-rt(t)+u|n<<u|s,Kn=c+e}else Fn=1<<c|n<<u|s,Kn=e}function Qu(e){e.return!==null&&(ui(e,1),td(e,1,0))}function Zu(e){for(;e===uo;)uo=wa[--Ca],wa[Ca]=null,jr=wa[--Ca],wa[Ca]=null;for(;e===Bi;)Bi=rn[--ln],rn[ln]=null,Kn=rn[--ln],rn[ln]=null,Fn=rn[--ln],rn[ln]=null}function nd(e,t){rn[ln++]=Fn,rn[ln++]=Kn,rn[ln++]=Bi,Fn=t.id,Kn=t.overflow,Bi=e}var xt=null,Fe=null,Se=!1,Vi=null,on=!1,Ju=Error(o(519));function Gi(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ur(an(t,e)),Ju}function id(e){var t=e.stateNode,n=e.type,s=e.memoizedProps;switch(t[ot]=e,t[_t]=s,n){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(n=0;n<il.length;n++)be(il[n],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),Vl(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),ji(t,s.value,s.defaultValue,s.children)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||s.suppressHydrationWarning===!0||bm(t.textContent,n)?(s.popover!=null&&(be("beforetoggle",t),be("toggle",t)),s.onScroll!=null&&be("scroll",t),s.onScrollEnd!=null&&be("scrollend",t),s.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||Gi(e,!0)}function sd(e){for(xt=e.return;xt;)switch(xt.tag){case 5:case 31:case 13:on=!1;return;case 27:case 3:on=!0;return;default:xt=xt.return}}function Ra(e){if(e!==xt)return!1;if(!Se)return sd(e),Se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||pf(e.type,e.memoizedProps)),n=!n),n&&Fe&&Gi(e),sd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Fe=Rm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Fe=Rm(e)}else t===27?(t=Fe,is(e.type)?(e=Ef,Ef=null,Fe=e):Fe=t):Fe=xt?cn(e.stateNode.nextSibling):null;return!0}function zs(){Fe=xt=null,Se=!1}function $u(){var e=Vi;return e!==null&&(Bt===null?Bt=e:Bt.push.apply(Bt,e),Vi=null),e}function Ur(e){Vi===null?Vi=[e]:Vi.push(e)}var Wu=D(null),ks=null,ci=null;function Pi(e,t,n){J(Wu,t._currentValue),t._currentValue=n}function fi(e){e._currentValue=Wu.current,K(Wu)}function ec(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function tc(e,t,n,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var c=u.dependencies;if(c!==null){var d=u.child;c=c.firstContext;e:for(;c!==null;){var v=c;c=u;for(var N=0;N<t.length;N++)if(v.context===t[N]){c.lanes|=n,v=c.alternate,v!==null&&(v.lanes|=n),ec(c.return,n,e),s||(d=null);break e}c=v.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(o(341));d.lanes|=n,c=d.alternate,c!==null&&(c.lanes|=n),ec(d,n,e),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===e){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function Oa(e,t,n,s){e=null;for(var u=t,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var v=u.type;Yt(u.pendingProps.value,d.value)||(e!==null?e.push(v):e=[v])}}else if(u===xe.current){if(d=u.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ol):e=[ol])}u=u.return}e!==null&&tc(t,e,n,s),t.flags|=262144}function co(e){for(e=e.firstContext;e!==null;){if(!Yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hs(e){ks=e,ci=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function At(e){return ad(ks,e)}function fo(e,t){return ks===null&&Hs(e),ad(e,t)}function ad(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ci===null){if(e===null)throw Error(o(308));ci=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ci=ci.next=t;return n}var i1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},s1=a.unstable_scheduleCallback,a1=a.unstable_NormalPriority,ft={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nc(){return{controller:new i1,data:new Map,refCount:0}}function Lr(e){e.refCount--,e.refCount===0&&s1(a1,function(){e.controller.abort()})}var zr=null,ic=0,Da=0,Ia=null;function r1(e,t){if(zr===null){var n=zr=[];ic=0,Da=lf(),Ia={status:"pending",value:void 0,then:function(s){n.push(s)}}}return ic++,t.then(rd,rd),t}function rd(){if(--ic===0&&zr!==null){Ia!==null&&(Ia.status="fulfilled");var e=zr;zr=null,Da=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function l1(e,t){var n=[],s={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var u=0;u<n.length;u++)(0,n[u])(t)},function(u){for(s.status="rejected",s.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),s}var ld=V.S;V.S=function(e,t){Pg=Dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&r1(e,t),ld!==null&&ld(e,t)};var qs=D(null);function sc(){var e=qs.current;return e!==null?e:Ye.pooledCache}function ho(e,t){t===null?J(qs,qs.current):J(qs,t.pool)}function od(){var e=sc();return e===null?null:{parent:ft._currentValue,pool:e}}var Ma=Error(o(460)),ac=Error(o(474)),go=Error(o(542)),mo={then:function(){}};function ud(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hd(e),e;default:if(typeof t.status=="string")t.then(yn,yn);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=s}},function(s){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hd(e),e}throw Vs=t,Ma}}function Bs(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Vs=n,Ma):n}}var Vs=null;function fd(){if(Vs===null)throw Error(o(459));var e=Vs;return Vs=null,e}function hd(e){if(e===Ma||e===go)throw Error(o(483))}var ja=null,kr=0;function po(e){var t=kr;return kr+=1,ja===null&&(ja=[]),cd(ja,e,t)}function Hr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yo(e,t){throw t.$$typeof===B?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function dd(e){function t(M,O){if(e){var L=M.deletions;L===null?(M.deletions=[O],M.flags|=16):L.push(O)}}function n(M,O){if(!e)return null;for(;O!==null;)t(M,O),O=O.sibling;return null}function s(M){for(var O=new Map;M!==null;)M.key!==null?O.set(M.key,M):O.set(M.index,M),M=M.sibling;return O}function u(M,O){return M=oi(M,O),M.index=0,M.sibling=null,M}function c(M,O,L){return M.index=L,e?(L=M.alternate,L!==null?(L=L.index,L<O?(M.flags|=67108866,O):L):(M.flags|=67108866,O)):(M.flags|=1048576,O)}function d(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function v(M,O,L,X){return O===null||O.tag!==6?(O=Fu(L,M.mode,X),O.return=M,O):(O=u(O,L),O.return=M,O)}function N(M,O,L,X){var ae=L.type;return ae===ne?G(M,O,L.props.children,X,L.key):O!==null&&(O.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===E&&Bs(ae)===O.type)?(O=u(O,L.props),Hr(O,L),O.return=M,O):(O=oo(L.type,L.key,L.props,null,M.mode,X),Hr(O,L),O.return=M,O)}function z(M,O,L,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==L.containerInfo||O.stateNode.implementation!==L.implementation?(O=Ku(L,M.mode,X),O.return=M,O):(O=u(O,L.children||[]),O.return=M,O)}function G(M,O,L,X,ae){return O===null||O.tag!==7?(O=Ls(L,M.mode,X,ae),O.return=M,O):(O=u(O,L),O.return=M,O)}function F(M,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Fu(""+O,M.mode,L),O.return=M,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case se:return L=oo(O.type,O.key,O.props,null,M.mode,L),Hr(L,O),L.return=M,L;case ee:return O=Ku(O,M.mode,L),O.return=M,O;case E:return O=Bs(O),F(M,O,L)}if(Qe(O)||I(O))return O=Ls(O,M.mode,L,null),O.return=M,O;if(typeof O.then=="function")return F(M,po(O),L);if(O.$$typeof===oe)return F(M,fo(M,O),L);yo(M,O)}return null}function k(M,O,L,X){var ae=O!==null?O.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ae!==null?null:v(M,O,""+L,X);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case se:return L.key===ae?N(M,O,L,X):null;case ee:return L.key===ae?z(M,O,L,X):null;case E:return L=Bs(L),k(M,O,L,X)}if(Qe(L)||I(L))return ae!==null?null:G(M,O,L,X,null);if(typeof L.then=="function")return k(M,O,po(L),X);if(L.$$typeof===oe)return k(M,O,fo(M,L),X);yo(M,L)}return null}function q(M,O,L,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return M=M.get(L)||null,v(O,M,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case se:return M=M.get(X.key===null?L:X.key)||null,N(O,M,X,ae);case ee:return M=M.get(X.key===null?L:X.key)||null,z(O,M,X,ae);case E:return X=Bs(X),q(M,O,L,X,ae)}if(Qe(X)||I(X))return M=M.get(L)||null,G(O,M,X,ae,null);if(typeof X.then=="function")return q(M,O,L,po(X),ae);if(X.$$typeof===oe)return q(M,O,L,fo(O,X),ae);yo(O,X)}return null}function W(M,O,L,X){for(var ae=null,Oe=null,te=O,ye=O=0,Te=null;te!==null&&ye<L.length;ye++){te.index>ye?(Te=te,te=null):Te=te.sibling;var De=k(M,te,L[ye],X);if(De===null){te===null&&(te=Te);break}e&&te&&De.alternate===null&&t(M,te),O=c(De,O,ye),Oe===null?ae=De:Oe.sibling=De,Oe=De,te=Te}if(ye===L.length)return n(M,te),Se&&ui(M,ye),ae;if(te===null){for(;ye<L.length;ye++)te=F(M,L[ye],X),te!==null&&(O=c(te,O,ye),Oe===null?ae=te:Oe.sibling=te,Oe=te);return Se&&ui(M,ye),ae}for(te=s(te);ye<L.length;ye++)Te=q(te,M,ye,L[ye],X),Te!==null&&(e&&Te.alternate!==null&&te.delete(Te.key===null?ye:Te.key),O=c(Te,O,ye),Oe===null?ae=Te:Oe.sibling=Te,Oe=Te);return e&&te.forEach(function(os){return t(M,os)}),Se&&ui(M,ye),ae}function ce(M,O,L,X){if(L==null)throw Error(o(151));for(var ae=null,Oe=null,te=O,ye=O=0,Te=null,De=L.next();te!==null&&!De.done;ye++,De=L.next()){te.index>ye?(Te=te,te=null):Te=te.sibling;var os=k(M,te,De.value,X);if(os===null){te===null&&(te=Te);break}e&&te&&os.alternate===null&&t(M,te),O=c(os,O,ye),Oe===null?ae=os:Oe.sibling=os,Oe=os,te=Te}if(De.done)return n(M,te),Se&&ui(M,ye),ae;if(te===null){for(;!De.done;ye++,De=L.next())De=F(M,De.value,X),De!==null&&(O=c(De,O,ye),Oe===null?ae=De:Oe.sibling=De,Oe=De);return Se&&ui(M,ye),ae}for(te=s(te);!De.done;ye++,De=L.next())De=q(te,M,ye,De.value,X),De!==null&&(e&&De.alternate!==null&&te.delete(De.key===null?ye:De.key),O=c(De,O,ye),Oe===null?ae=De:Oe.sibling=De,Oe=De);return e&&te.forEach(function(vv){return t(M,vv)}),Se&&ui(M,ye),ae}function Ge(M,O,L,X){if(typeof L=="object"&&L!==null&&L.type===ne&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case se:e:{for(var ae=L.key;O!==null;){if(O.key===ae){if(ae=L.type,ae===ne){if(O.tag===7){n(M,O.sibling),X=u(O,L.props.children),X.return=M,M=X;break e}}else if(O.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===E&&Bs(ae)===O.type){n(M,O.sibling),X=u(O,L.props),Hr(X,L),X.return=M,M=X;break e}n(M,O);break}else t(M,O);O=O.sibling}L.type===ne?(X=Ls(L.props.children,M.mode,X,L.key),X.return=M,M=X):(X=oo(L.type,L.key,L.props,null,M.mode,X),Hr(X,L),X.return=M,M=X)}return d(M);case ee:e:{for(ae=L.key;O!==null;){if(O.key===ae)if(O.tag===4&&O.stateNode.containerInfo===L.containerInfo&&O.stateNode.implementation===L.implementation){n(M,O.sibling),X=u(O,L.children||[]),X.return=M,M=X;break e}else{n(M,O);break}else t(M,O);O=O.sibling}X=Ku(L,M.mode,X),X.return=M,M=X}return d(M);case E:return L=Bs(L),Ge(M,O,L,X)}if(Qe(L))return W(M,O,L,X);if(I(L)){if(ae=I(L),typeof ae!="function")throw Error(o(150));return L=ae.call(L),ce(M,O,L,X)}if(typeof L.then=="function")return Ge(M,O,po(L),X);if(L.$$typeof===oe)return Ge(M,O,fo(M,L),X);yo(M,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,O!==null&&O.tag===6?(n(M,O.sibling),X=u(O,L),X.return=M,M=X):(n(M,O),X=Fu(L,M.mode,X),X.return=M,M=X),d(M)):n(M,O)}return function(M,O,L,X){try{kr=0;var ae=Ge(M,O,L,X);return ja=null,ae}catch(te){if(te===Ma||te===go)throw te;var Oe=Xt(29,te,null,M.mode);return Oe.lanes=X,Oe.return=M,Oe}finally{}}}var Gs=dd(!0),gd=dd(!1),Yi=!1;function rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ie&2)!==0){var u=s.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),s.pending=t,t=lo(e),Jh(e,null,n),t}return ro(e,s,t,n),lo(e)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,zl(e,n)}}function oc(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var u=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?u=c=d:c=c.next=d,n=n.next}while(n!==null);c===null?u=c=t:c=c.next=t}else u=c=t;n={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var uc=!1;function Br(){if(uc){var e=Ia;if(e!==null)throw e}}function Vr(e,t,n,s){uc=!1;var u=e.updateQueue;Yi=!1;var c=u.firstBaseUpdate,d=u.lastBaseUpdate,v=u.shared.pending;if(v!==null){u.shared.pending=null;var N=v,z=N.next;N.next=null,d===null?c=z:d.next=z,d=N;var G=e.alternate;G!==null&&(G=G.updateQueue,v=G.lastBaseUpdate,v!==d&&(v===null?G.firstBaseUpdate=z:v.next=z,G.lastBaseUpdate=N))}if(c!==null){var F=u.baseState;d=0,G=z=N=null,v=c;do{var k=v.lane&-536870913,q=k!==v.lane;if(q?(Ee&k)===k:(s&k)===k){k!==0&&k===Da&&(uc=!0),G!==null&&(G=G.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var W=e,ce=v;k=t;var Ge=n;switch(ce.tag){case 1:if(W=ce.payload,typeof W=="function"){F=W.call(Ge,F,k);break e}F=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ce.payload,k=typeof W=="function"?W.call(Ge,F,k):W,k==null)break e;F=j({},F,k);break e;case 2:Yi=!0}}k=v.callback,k!==null&&(e.flags|=64,q&&(e.flags|=8192),q=u.callbacks,q===null?u.callbacks=[k]:q.push(k))}else q={lane:k,tag:v.tag,payload:v.payload,callback:v.callback,next:null},G===null?(z=G=q,N=F):G=G.next=q,d|=k;if(v=v.next,v===null){if(v=u.shared.pending,v===null)break;q=v,v=q.next,q.next=null,u.lastBaseUpdate=q,u.shared.pending=null}}while(!0);G===null&&(N=F),u.baseState=N,u.firstBaseUpdate=z,u.lastBaseUpdate=G,c===null&&(u.shared.lanes=0),$i|=d,e.lanes=d,e.memoizedState=F}}function md(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function pd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)md(n[e],t)}var Ua=D(null),vo=D(0);function yd(e,t){e=bi,J(vo,e),J(Ua,t),bi=e|t.baseLanes}function cc(){J(vo,bi),J(Ua,Ua.current)}function fc(){bi=vo.current,K(Ua),K(vo)}var Ft=D(null),un=null;function Ki(e){var t=e.alternate;J(it,it.current&1),J(Ft,e),un===null&&(t===null||Ua.current!==null||t.memoizedState!==null)&&(un=e)}function hc(e){J(it,it.current),J(Ft,e),un===null&&(un=e)}function vd(e){e.tag===22?(J(it,it.current),J(Ft,e),un===null&&(un=e)):Qi()}function Qi(){J(it,it.current),J(Ft,Ft.current)}function Kt(e){K(Ft),un===e&&(un=null),K(it)}var it=D(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||_f(n)||bf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hi=0,me=null,Be=null,ht=null,bo=!1,La=!1,Ps=!1,Eo=0,Gr=0,za=null,o1=0;function We(){throw Error(o(321))}function dc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yt(e[n],t[n]))return!1;return!0}function gc(e,t,n,s,u,c){return hi=c,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?tg:Rc,Ps=!1,c=n(s,u),Ps=!1,La&&(c=bd(t,n,s,u)),_d(e),c}function _d(e){V.H=Xr;var t=Be!==null&&Be.next!==null;if(hi=0,ht=Be=me=null,bo=!1,Gr=0,za=null,t)throw Error(o(300));e===null||dt||(e=e.dependencies,e!==null&&co(e)&&(dt=!0))}function bd(e,t,n,s){me=e;var u=0;do{if(La&&(za=null),Gr=0,La=!1,25<=u)throw Error(o(301));if(u+=1,ht=Be=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}V.H=ng,c=t(n,s)}while(La);return c}function u1(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?Pr(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(me.flags|=1024),t}function mc(){var e=Eo!==0;return Eo=0,e}function pc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yc(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}hi=0,ht=Be=me=null,La=!1,Gr=Eo=0,za=null}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?me.memoizedState=ht=e:ht=ht.next=e,ht}function st(){if(Be===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=ht===null?me.memoizedState:ht.next;if(t!==null)ht=t,Be=e;else{if(e===null)throw me.alternate===null?Error(o(467)):Error(o(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},ht===null?me.memoizedState=ht=e:ht=ht.next=e}return ht}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pr(e){var t=Gr;return Gr+=1,za===null&&(za=[]),e=cd(za,e,t),t=me,(ht===null?t.memoizedState:ht.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?tg:Rc),e}function So(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pr(e);if(e.$$typeof===oe)return At(e)}throw Error(o(438,String(e)))}function vc(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var s=me.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=To(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),s=0;s<e;s++)n[s]=C;return t.index++,n}function di(e,t){return typeof t=="function"?t(e):t}function xo(e){var t=st();return _c(t,Be,e)}function _c(e,t,n){var s=e.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=n;var u=e.baseQueue,c=s.pending;if(c!==null){if(u!==null){var d=u.next;u.next=c.next,c.next=d}t.baseQueue=u=c,s.pending=null}if(c=e.baseState,u===null)e.memoizedState=c;else{t=u.next;var v=d=null,N=null,z=t,G=!1;do{var F=z.lane&-536870913;if(F!==z.lane?(Ee&F)===F:(hi&F)===F){var k=z.revertLane;if(k===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),F===Da&&(G=!0);else if((hi&k)===k){z=z.next,k===Da&&(G=!0);continue}else F={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},N===null?(v=N=F,d=c):N=N.next=F,me.lanes|=k,$i|=k;F=z.action,Ps&&n(c,F),c=z.hasEagerState?z.eagerState:n(c,F)}else k={lane:F,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},N===null?(v=N=k,d=c):N=N.next=k,me.lanes|=F,$i|=F;z=z.next}while(z!==null&&z!==t);if(N===null?d=c:N.next=v,!Yt(c,e.memoizedState)&&(dt=!0,G&&(n=Ia,n!==null)))throw n;e.memoizedState=c,e.baseState=d,e.baseQueue=N,s.lastRenderedState=c}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function bc(e){var t=st(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var s=n.dispatch,u=n.pending,c=t.memoizedState;if(u!==null){n.pending=null;var d=u=u.next;do c=e(c,d.action),d=d.next;while(d!==u);Yt(c,t.memoizedState)||(dt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,s]}function Ed(e,t,n){var s=me,u=st(),c=Se;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var d=!Yt((Be||u).memoizedState,n);if(d&&(u.memoizedState=n,dt=!0),u=u.queue,Sc(xd.bind(null,s,u,e),[e]),u.getSnapshot!==t||d||ht!==null&&ht.memoizedState.tag&1){if(s.flags|=2048,ka(9,{destroy:void 0},Sd.bind(null,s,u,n,t),null),Ye===null)throw Error(o(349));c||(hi&127)!==0||Td(s,t,n)}return n}function Td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=To(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sd(e,t,n,s){t.value=n,t.getSnapshot=s,Ad(t)&&Nd(e)}function xd(e,t,n){return n(function(){Ad(t)&&Nd(e)})}function Ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yt(e,n)}catch{return!0}}function Nd(e){var t=Us(e,2);t!==null&&Vt(t,e,2)}function Ec(e){var t=It();if(typeof e=="function"){var n=e;if(e=n(),Ps){Wt(!0);try{n()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:e},t}function wd(e,t,n,s){return e.baseState=n,_c(e,Be,typeof s=="function"?s:di)}function c1(e,t,n,s,u){if(wo(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};V.T!==null?n(!0):c.isTransition=!1,s(c),n=t.pending,n===null?(c.next=t.pending=c,Cd(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Cd(e,t){var n=t.action,s=t.payload,u=e.state;if(t.isTransition){var c=V.T,d={};V.T=d;try{var v=n(u,s),N=V.S;N!==null&&N(d,v),Rd(e,t,v)}catch(z){Tc(e,t,z)}finally{c!==null&&d.types!==null&&(c.types=d.types),V.T=c}}else try{c=n(u,s),Rd(e,t,c)}catch(z){Tc(e,t,z)}}function Rd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){Od(e,t,s)},function(s){return Tc(e,t,s)}):Od(e,t,n)}function Od(e,t,n){t.status="fulfilled",t.value=n,Dd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Cd(e,n)))}function Tc(e,t,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=n,Dd(t),t=t.next;while(t!==s)}e.action=null}function Dd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Id(e,t){return t}function Md(e,t){if(Se){var n=Ye.formState;if(n!==null){e:{var s=me;if(Se){if(Fe){t:{for(var u=Fe,c=on;u.nodeType!==8;){if(!c){u=null;break t}if(u=cn(u.nextSibling),u===null){u=null;break t}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Fe=cn(u.nextSibling),s=u.data==="F!";break e}}Gi(s)}s=!1}s&&(t=n[0])}}return n=It(),n.memoizedState=n.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Id,lastRenderedState:t},n.queue=s,n=$d.bind(null,me,s),s.dispatch=n,s=Ec(!1),c=Cc.bind(null,me,!1,s.queue),s=It(),u={state:t,dispatch:null,action:e,pending:null},s.queue=u,n=c1.bind(null,me,u,c,n),u.dispatch=n,s.memoizedState=e,[t,n,!1]}function jd(e){var t=st();return Ud(t,Be,e)}function Ud(e,t,n){if(t=_c(e,t,Id)[0],e=xo(di)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Pr(t)}catch(d){throw d===Ma?go:d}else s=t;t=st();var u=t.queue,c=u.dispatch;return n!==t.memoizedState&&(me.flags|=2048,ka(9,{destroy:void 0},f1.bind(null,u,n),null)),[s,c,e]}function f1(e,t){e.action=t}function Ld(e){var t=st(),n=Be;if(n!==null)return Ud(t,n,e);st(),t=t.memoizedState,n=st();var s=n.queue.dispatch;return n.memoizedState=e,[t,s,!1]}function ka(e,t,n,s){return e={tag:e,create:n,deps:s,inst:t,next:null},t=me.updateQueue,t===null&&(t=To(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e),e}function zd(){return st().memoizedState}function Ao(e,t,n,s){var u=It();me.flags|=e,u.memoizedState=ka(1|t,{destroy:void 0},n,s===void 0?null:s)}function No(e,t,n,s){var u=st();s=s===void 0?null:s;var c=u.memoizedState.inst;Be!==null&&s!==null&&dc(s,Be.memoizedState.deps)?u.memoizedState=ka(t,c,n,s):(me.flags|=e,u.memoizedState=ka(1|t,c,n,s))}function kd(e,t){Ao(8390656,8,e,t)}function Sc(e,t){No(2048,8,e,t)}function h1(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=To(),me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hd(e){var t=st().memoizedState;return h1({ref:t,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function qd(e,t){return No(4,2,e,t)}function Bd(e,t){return No(4,4,e,t)}function Vd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gd(e,t,n){n=n!=null?n.concat([e]):null,No(4,4,Vd.bind(null,t,e),n)}function xc(){}function Pd(e,t){var n=st();t=t===void 0?null:t;var s=n.memoizedState;return t!==null&&dc(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Yd(e,t){var n=st();t=t===void 0?null:t;var s=n.memoizedState;if(t!==null&&dc(t,s[1]))return s[0];if(s=e(),Ps){Wt(!0);try{e()}finally{Wt(!1)}}return n.memoizedState=[s,t],s}function Ac(e,t,n){return n===void 0||(hi&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Xg(),me.lanes|=e,$i|=e,n)}function Xd(e,t,n,s){return Yt(n,t)?n:Ua.current!==null?(e=Ac(e,n,s),Yt(e,t)||(dt=!0),e):(hi&42)===0||(hi&1073741824)!==0&&(Ee&261930)===0?(dt=!0,e.memoizedState=n):(e=Xg(),me.lanes|=e,$i|=e,t)}function Fd(e,t,n,s,u){var c=Z.p;Z.p=c!==0&&8>c?c:8;var d=V.T,v={};V.T=v,Cc(e,!1,t,n);try{var N=u(),z=V.S;if(z!==null&&z(v,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var G=l1(N,s);Yr(e,t,G,Jt(e))}else Yr(e,t,s,Jt(e))}catch(F){Yr(e,t,{then:function(){},status:"rejected",reason:F},Jt())}finally{Z.p=c,d!==null&&v.types!==null&&(d.types=v.types),V.T=d}}function d1(){}function Nc(e,t,n,s){if(e.tag!==5)throw Error(o(476));var u=Kd(e).queue;Fd(e,u,t,ue,n===null?d1:function(){return Qd(e),n(s)})}function Kd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qd(e){var t=Kd(e);t.next===null&&(t=e.alternate.memoizedState),Yr(e,t.next.queue,{},Jt())}function wc(){return At(ol)}function Zd(){return st().memoizedState}function Jd(){return st().memoizedState}function g1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Jt();e=Xi(n);var s=Fi(t,e,n);s!==null&&(Vt(s,t,n),qr(s,t,n)),t={cache:nc()},e.payload=t;return}t=t.return}}function m1(e,t,n){var s=Jt();n={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wo(e)?Wd(t,n):(n=Yu(e,t,n,s),n!==null&&(Vt(n,e,s),eg(n,t,s)))}function $d(e,t,n){var s=Jt();Yr(e,t,n,s)}function Yr(e,t,n,s){var u={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wo(e))Wd(t,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,v=c(d,n);if(u.hasEagerState=!0,u.eagerState=v,Yt(v,d))return ro(e,t,u,0),Ye===null&&ao(),!1}catch{}finally{}if(n=Yu(e,t,u,s),n!==null)return Vt(n,e,s),eg(n,t,s),!0}return!1}function Cc(e,t,n,s){if(s={lane:2,revertLane:lf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wo(e)){if(t)throw Error(o(479))}else t=Yu(e,n,s,2),t!==null&&Vt(t,e,2)}function wo(e){var t=e.alternate;return e===me||t!==null&&t===me}function Wd(e,t){La=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function eg(e,t,n){if((n&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,zl(e,n)}}var Xr={readContext:At,use:So,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};Xr.useEffectEvent=We;var tg={readContext:At,use:So,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:kd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ao(4194308,4,Vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){Ao(4,2,e,t)},useMemo:function(e,t){var n=It();t=t===void 0?null:t;var s=e();if(Ps){Wt(!0);try{e()}finally{Wt(!1)}}return n.memoizedState=[s,t],s},useReducer:function(e,t,n){var s=It();if(n!==void 0){var u=n(t);if(Ps){Wt(!0);try{n(t)}finally{Wt(!1)}}}else u=t;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=m1.bind(null,me,e),[s.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:function(e){e=Ec(e);var t=e.queue,n=$d.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xc,useDeferredValue:function(e,t){var n=It();return Ac(n,e,t)},useTransition:function(){var e=Ec(!1);return e=Fd.bind(null,me,e.queue,!0,!1),It().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var s=me,u=It();if(Se){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ye===null)throw Error(o(349));(Ee&127)!==0||Td(s,t,n)}u.memoizedState=n;var c={value:n,getSnapshot:t};return u.queue=c,kd(xd.bind(null,s,c,e),[e]),s.flags|=2048,ka(9,{destroy:void 0},Sd.bind(null,s,c,n,t),null),n},useId:function(){var e=It(),t=Ye.identifierPrefix;if(Se){var n=Kn,s=Fn;n=(s&~(1<<32-rt(s)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Eo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=o1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wc,useFormState:Md,useActionState:Md,useOptimistic:function(e){var t=It();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Cc.bind(null,me,!0,n),n.dispatch=t,[e,t]},useMemoCache:vc,useCacheRefresh:function(){return It().memoizedState=g1.bind(null,me)},useEffectEvent:function(e){var t=It(),n={impl:e};return t.memoizedState=n,function(){if((Ie&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Rc={readContext:At,use:So,useCallback:Pd,useContext:At,useEffect:Sc,useImperativeHandle:Gd,useInsertionEffect:qd,useLayoutEffect:Bd,useMemo:Yd,useReducer:xo,useRef:zd,useState:function(){return xo(di)},useDebugValue:xc,useDeferredValue:function(e,t){var n=st();return Xd(n,Be.memoizedState,e,t)},useTransition:function(){var e=xo(di)[0],t=st().memoizedState;return[typeof e=="boolean"?e:Pr(e),t]},useSyncExternalStore:Ed,useId:Zd,useHostTransitionStatus:wc,useFormState:jd,useActionState:jd,useOptimistic:function(e,t){var n=st();return wd(n,Be,e,t)},useMemoCache:vc,useCacheRefresh:Jd};Rc.useEffectEvent=Hd;var ng={readContext:At,use:So,useCallback:Pd,useContext:At,useEffect:Sc,useImperativeHandle:Gd,useInsertionEffect:qd,useLayoutEffect:Bd,useMemo:Yd,useReducer:bc,useRef:zd,useState:function(){return bc(di)},useDebugValue:xc,useDeferredValue:function(e,t){var n=st();return Be===null?Ac(n,e,t):Xd(n,Be.memoizedState,e,t)},useTransition:function(){var e=bc(di)[0],t=st().memoizedState;return[typeof e=="boolean"?e:Pr(e),t]},useSyncExternalStore:Ed,useId:Zd,useHostTransitionStatus:wc,useFormState:Ld,useActionState:Ld,useOptimistic:function(e,t){var n=st();return Be!==null?wd(n,Be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vc,useCacheRefresh:Jd};ng.useEffectEvent=Hd;function Oc(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Jt(),u=Xi(s);u.payload=t,n!=null&&(u.callback=n),t=Fi(e,u,s),t!==null&&(Vt(t,e,s),qr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Jt(),u=Xi(s);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Fi(e,u,s),t!==null&&(Vt(t,e,s),qr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Jt(),s=Xi(n);s.tag=2,t!=null&&(s.callback=t),t=Fi(e,s,n),t!==null&&(Vt(t,e,n),qr(t,e,n))}};function ig(e,t,n,s,u,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,d):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,s)||!Ir(u,c):!0}function sg(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if("ref"in t){n={};for(var s in t)s!=="ref"&&(n[s]=t[s])}if(e=e.defaultProps){n===t&&(n=j({},n));for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n}function ag(e){so(e)}function rg(e){console.error(e)}function lg(e){so(e)}function Co(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function og(e,t,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ic(e,t,n){return n=Xi(n),n.tag=3,n.payload={element:null},n.callback=function(){Co(e,t)},n}function ug(e){return e=Xi(e),e.tag=3,e}function cg(e,t,n,s){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;e.payload=function(){return u(c)},e.callback=function(){og(t,n,s)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){og(t,n,s),typeof u!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})})}function p1(e,t,n,s,u){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=n.alternate,t!==null&&Oa(t,n,u,!0),n=Ft.current,n!==null){switch(n.tag){case 31:case 13:return un===null?qo():n.alternate===null&&et===0&&(et=3),n.flags&=-257,n.flags|=65536,n.lanes=u,s===mo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([s]):t.add(s),sf(e,s,u)),!1;case 22:return n.flags|=65536,s===mo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([s]):n.add(s)),sf(e,s,u)),!1}throw Error(o(435,n.tag))}return sf(e,s,u),qo(),!1}if(Se)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,s!==Ju&&(e=Error(o(422),{cause:s}),Ur(an(e,n)))):(s!==Ju&&(t=Error(o(423),{cause:s}),Ur(an(t,n))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=an(s,n),u=Ic(e.stateNode,s,u),oc(e,u),et!==4&&(et=2)),!1;var c=Error(o(520),{cause:s});if(c=an(c,n),el===null?el=[c]:el.push(c),et!==4&&(et=2),t===null)return!0;s=an(s,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=u&-u,n.lanes|=e,e=Ic(n.stateNode,s,e),oc(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Wi===null||!Wi.has(c))))return n.flags|=65536,u&=-u,n.lanes|=u,u=ug(u),cg(u,e,n,s),oc(n,u),!1}n=n.return}while(n!==null);return!1}var Mc=Error(o(461)),dt=!1;function Nt(e,t,n,s){t.child=e===null?gd(t,null,n,s):Gs(t,e.child,n,s)}function fg(e,t,n,s,u){n=n.render;var c=t.ref;if("ref"in s){var d={};for(var v in s)v!=="ref"&&(d[v]=s[v])}else d=s;return Hs(t),s=gc(e,t,n,d,c,u),v=mc(),e!==null&&!dt?(pc(e,t,u),gi(e,t,u)):(Se&&v&&Qu(t),t.flags|=1,Nt(e,t,s,u),t.child)}function hg(e,t,n,s,u){if(e===null){var c=n.type;return typeof c=="function"&&!Xu(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,dg(e,t,c,s,u)):(e=oo(n.type,null,s,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Bc(e,u)){var d=c.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(d,s)&&e.ref===t.ref)return gi(e,t,u)}return t.flags|=1,e=oi(c,s),e.ref=t.ref,e.return=t,t.child=e}function dg(e,t,n,s,u){if(e!==null){var c=e.memoizedProps;if(Ir(c,s)&&e.ref===t.ref)if(dt=!1,t.pendingProps=s=c,Bc(e,u))(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,gi(e,t,u)}return jc(e,t,n,s,u)}function gg(e,t,n,s){var u=s.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(s=t.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,t.child=null;return mg(e,t,c,n,s)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ho(t,c!==null?c.cachePool:null),c!==null?yd(t,c):cc(),vd(t);else return s=t.lanes=536870912,mg(e,t,c!==null?c.baseLanes|n:n,n,s)}else c!==null?(ho(t,c.cachePool),yd(t,c),Qi(),t.memoizedState=null):(e!==null&&ho(t,null),cc(),Qi());return Nt(e,t,u,n),t.child}function Fr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mg(e,t,n,s,u){var c=sc();return c=c===null?null:{parent:ft._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&ho(t,null),cc(),vd(t),e!==null&&Oa(e,t,s,!0),t.childLanes=u,null}function Ro(e,t){return t=Do({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pg(e,t,n){return Gs(t,e.child,null,n),e=Ro(t,t.pendingProps),e.flags|=2,Kt(t),t.memoizedState=null,e}function y1(e,t,n){var s=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(s.mode==="hidden")return e=Ro(t,s),t.lanes=536870912,Fr(null,e);if(hc(t),(e=Fe)?(e=Cm(e,on),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bi!==null?{id:Fn,overflow:Kn}:null,retryLane:536870912,hydrationErrors:null},n=Wh(e),n.return=t,t.child=n,xt=t,Fe=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return Ro(t,s)}var c=e.memoizedState;if(c!==null){var d=c.dehydrated;if(hc(t),u)if(t.flags&256)t.flags&=-257,t=pg(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(dt||Oa(e,t,n,!1),u=(n&e.childLanes)!==0,dt||u){if(s=Ye,s!==null&&(d=gr(s,n),d!==0&&d!==c.retryLane))throw c.retryLane=d,Us(e,d),Vt(s,e,d),Mc;qo(),t=pg(e,t,n)}else e=c.treeContext,Fe=cn(d.nextSibling),xt=t,Se=!0,Vi=null,on=!1,e!==null&&nd(t,e),t=Ro(t,s),t.flags|=4096;return t}return e=oi(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Oo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function jc(e,t,n,s,u){return Hs(t),n=gc(e,t,n,s,void 0,u),s=mc(),e!==null&&!dt?(pc(e,t,u),gi(e,t,u)):(Se&&s&&Qu(t),t.flags|=1,Nt(e,t,n,u),t.child)}function yg(e,t,n,s,u,c){return Hs(t),t.updateQueue=null,n=bd(t,s,n,u),_d(e),s=mc(),e!==null&&!dt?(pc(e,t,c),gi(e,t,c)):(Se&&s&&Qu(t),t.flags|=1,Nt(e,t,n,c),t.child)}function vg(e,t,n,s,u){if(Hs(t),t.stateNode===null){var c=Na,d=n.contextType;typeof d=="object"&&d!==null&&(c=At(d)),c=new n(s,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Dc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=s,c.state=t.memoizedState,c.refs={},rc(t),d=n.contextType,c.context=typeof d=="object"&&d!==null?At(d):Na,c.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Oc(t,n,d,s),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&Dc.enqueueReplaceState(c,c.state,null),Vr(t,s,c,u),Br(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){c=t.stateNode;var v=t.memoizedProps,N=Ys(n,v);c.props=N;var z=c.context,G=n.contextType;d=Na,typeof G=="object"&&G!==null&&(d=At(G));var F=n.getDerivedStateFromProps;G=typeof F=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,G||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||z!==d)&&sg(t,c,s,d),Yi=!1;var k=t.memoizedState;c.state=k,Vr(t,s,c,u),Br(),z=t.memoizedState,v||k!==z||Yi?(typeof F=="function"&&(Oc(t,n,F,s),z=t.memoizedState),(N=Yi||ig(t,n,N,s,k,z,d))?(G||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=z),c.props=s,c.state=z,c.context=d,s=N):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{c=t.stateNode,lc(e,t),d=t.memoizedProps,G=Ys(n,d),c.props=G,F=t.pendingProps,k=c.context,z=n.contextType,N=Na,typeof z=="object"&&z!==null&&(N=At(z)),v=n.getDerivedStateFromProps,(z=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==F||k!==N)&&sg(t,c,s,N),Yi=!1,k=t.memoizedState,c.state=k,Vr(t,s,c,u),Br();var q=t.memoizedState;d!==F||k!==q||Yi||e!==null&&e.dependencies!==null&&co(e.dependencies)?(typeof v=="function"&&(Oc(t,n,v,s),q=t.memoizedState),(G=Yi||ig(t,n,G,s,k,q,N)||e!==null&&e.dependencies!==null&&co(e.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,q,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,q,N)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=q),c.props=s,c.state=q,c.context=N,s=G):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),s=!1)}return c=s,Oo(e,t),s=(t.flags&128)!==0,c||s?(c=t.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&s?(t.child=Gs(t,e.child,null,u),t.child=Gs(t,null,n,u)):Nt(e,t,n,u),t.memoizedState=c.state,e=t.child):e=gi(e,t,u),e}function _g(e,t,n,s){return zs(),t.flags|=256,Nt(e,t,n,s),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lc(e){return{baseLanes:e,cachePool:od()}}function zc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zt),e}function bg(e,t,n){var s=t.pendingProps,u=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(it.current&2)!==0),d&&(u=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(u?Ki(t):Qi(),(e=Fe)?(e=Cm(e,on),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bi!==null?{id:Fn,overflow:Kn}:null,retryLane:536870912,hydrationErrors:null},n=Wh(e),n.return=t,t.child=n,xt=t,Fe=null)):e=null,e===null)throw Gi(t);return bf(e)?t.lanes=32:t.lanes=536870912,null}var v=s.children;return s=s.fallback,u?(Qi(),u=t.mode,v=Do({mode:"hidden",children:v},u),s=Ls(s,u,n,null),v.return=t,s.return=t,v.sibling=s,t.child=v,s=t.child,s.memoizedState=Lc(n),s.childLanes=zc(e,d,n),t.memoizedState=Uc,Fr(null,s)):(Ki(t),kc(t,v))}var N=e.memoizedState;if(N!==null&&(v=N.dehydrated,v!==null)){if(c)t.flags&256?(Ki(t),t.flags&=-257,t=Hc(e,t,n)):t.memoizedState!==null?(Qi(),t.child=e.child,t.flags|=128,t=null):(Qi(),v=s.fallback,u=t.mode,s=Do({mode:"visible",children:s.children},u),v=Ls(v,u,n,null),v.flags|=2,s.return=t,v.return=t,s.sibling=v,t.child=s,Gs(t,e.child,null,n),s=t.child,s.memoizedState=Lc(n),s.childLanes=zc(e,d,n),t.memoizedState=Uc,t=Fr(null,s));else if(Ki(t),bf(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var z=d.dgst;d=z,s=Error(o(419)),s.stack="",s.digest=d,Ur({value:s,source:null,stack:null}),t=Hc(e,t,n)}else if(dt||Oa(e,t,n,!1),d=(n&e.childLanes)!==0,dt||d){if(d=Ye,d!==null&&(s=gr(d,n),s!==0&&s!==N.retryLane))throw N.retryLane=s,Us(e,s),Vt(d,e,s),Mc;_f(v)||qo(),t=Hc(e,t,n)}else _f(v)?(t.flags|=192,t.child=e.child,t=null):(e=N.treeContext,Fe=cn(v.nextSibling),xt=t,Se=!0,Vi=null,on=!1,e!==null&&nd(t,e),t=kc(t,s.children),t.flags|=4096);return t}return u?(Qi(),v=s.fallback,u=t.mode,N=e.child,z=N.sibling,s=oi(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,z!==null?v=oi(z,v):(v=Ls(v,u,n,null),v.flags|=2),v.return=t,s.return=t,s.sibling=v,t.child=s,Fr(null,s),s=t.child,v=e.child.memoizedState,v===null?v=Lc(n):(u=v.cachePool,u!==null?(N=ft._currentValue,u=u.parent!==N?{parent:N,pool:N}:u):u=od(),v={baseLanes:v.baseLanes|n,cachePool:u}),s.memoizedState=v,s.childLanes=zc(e,d,n),t.memoizedState=Uc,Fr(e.child,s)):(Ki(t),n=e.child,e=n.sibling,n=oi(n,{mode:"visible",children:s.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function kc(e,t){return t=Do({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Do(e,t){return e=Xt(22,e,null,t),e.lanes=0,e}function Hc(e,t,n){return Gs(t,e.child,null,n),e=kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eg(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),ec(e.return,t,n)}function qc(e,t,n,s,u,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:u,treeForkCount:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=n,d.tailMode=u,d.treeForkCount=c)}function Tg(e,t,n){var s=t.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var d=it.current,v=(d&2)!==0;if(v?(d=d&1|2,t.flags|=128):d&=1,J(it,d),Nt(e,t,s,n),s=Se?jr:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eg(e,n,t);else if(e.tag===19)Eg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),qc(t,!1,u,n,c,s);break;case"backwards":case"unstable_legacy-backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&_o(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}qc(t,!0,n,null,c,s);break;case"together":qc(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function gi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$i|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&co(e)))}function v1(e,t,n){switch(t.tag){case 3:pt(t,t.stateNode.containerInfo),Pi(t,ft,e.memoizedState.cache),zs();break;case 27:case 5:vs(t);break;case 4:pt(t,t.stateNode.containerInfo);break;case 10:Pi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hc(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Ki(t),t.flags|=128,null):(n&t.child.childLanes)!==0?bg(e,t,n):(Ki(t),e=gi(e,t,n),e!==null?e.sibling:null);Ki(t);break;case 19:var u=(e.flags&128)!==0;if(s=(n&t.childLanes)!==0,s||(Oa(e,t,n,!1),s=(n&t.childLanes)!==0),u){if(s)return Tg(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),J(it,it.current),s)break;return null;case 22:return t.lanes=0,gg(e,t,n,t.pendingProps);case 24:Pi(t,ft,e.memoizedState.cache)}return gi(e,t,n)}function Sg(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)dt=!0;else{if(!Bc(e,n)&&(t.flags&128)===0)return dt=!1,v1(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,Se&&(t.flags&1048576)!==0&&td(t,jr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Bs(t.elementType),t.type=e,typeof e=="function")Xu(e)?(s=Ys(e,s),t.tag=1,t=vg(null,t,e,s,n)):(t.tag=0,t=jc(null,t,e,s,n));else{if(e!=null){var u=e.$$typeof;if(u===je){t.tag=11,t=fg(null,t,e,s,n);break e}else if(u===S){t.tag=14,t=hg(null,t,e,s,n);break e}}throw t=Xe(e)||e,Error(o(306,t,""))}}return t;case 0:return jc(e,t,t.type,t.pendingProps,n);case 1:return s=t.type,u=Ys(s,t.pendingProps),vg(e,t,s,u,n);case 3:e:{if(pt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));s=t.pendingProps;var c=t.memoizedState;u=c.element,lc(e,t),Vr(t,s,null,n);var d=t.memoizedState;if(s=d.cache,Pi(t,ft,s),s!==c.cache&&tc(t,[ft],n,!0),Br(),s=d.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=_g(e,t,s,n);break e}else if(s!==u){u=an(Error(o(424)),t),Ur(u),t=_g(e,t,s,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Fe=cn(e.firstChild),xt=t,Se=!0,Vi=null,on=!0,n=gd(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zs(),s===u){t=gi(e,t,n);break e}Nt(e,t,s,n)}t=t.child}return t;case 26:return Oo(e,t),e===null?(n=jm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Se||(n=t.type,e=t.pendingProps,s=Fo(pe.current).createElement(n),s[ot]=t,s[_t]=e,wt(s,n,e),ut(s),t.stateNode=s):t.memoizedState=jm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return vs(t),e===null&&Se&&(s=t.stateNode=Dm(t.type,t.pendingProps,pe.current),xt=t,on=!0,u=Fe,is(t.type)?(Ef=u,Fe=cn(s.firstChild)):Fe=u),Nt(e,t,t.pendingProps.children,n),Oo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((u=s=Fe)&&(s=K1(s,t.type,t.pendingProps,on),s!==null?(t.stateNode=s,xt=t,Fe=cn(s.firstChild),on=!1,u=!0):u=!1),u||Gi(t)),vs(t),u=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,s=c.children,pf(u,c)?s=null:d!==null&&pf(u,d)&&(t.flags|=32),t.memoizedState!==null&&(u=gc(e,t,u1,null,null,n),ol._currentValue=u),Oo(e,t),Nt(e,t,s,n),t.child;case 6:return e===null&&Se&&((e=n=Fe)&&(n=Q1(n,t.pendingProps,on),n!==null?(t.stateNode=n,xt=t,Fe=null,e=!0):e=!1),e||Gi(t)),null;case 13:return bg(e,t,n);case 4:return pt(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Gs(t,null,s,n):Nt(e,t,s,n),t.child;case 11:return fg(e,t,t.type,t.pendingProps,n);case 7:return Nt(e,t,t.pendingProps,n),t.child;case 8:return Nt(e,t,t.pendingProps.children,n),t.child;case 12:return Nt(e,t,t.pendingProps.children,n),t.child;case 10:return s=t.pendingProps,Pi(t,t.type,s.value),Nt(e,t,s.children,n),t.child;case 9:return u=t.type._context,s=t.pendingProps.children,Hs(t),u=At(u),s=s(u),t.flags|=1,Nt(e,t,s,n),t.child;case 14:return hg(e,t,t.type,t.pendingProps,n);case 15:return dg(e,t,t.type,t.pendingProps,n);case 19:return Tg(e,t,n);case 31:return y1(e,t,n);case 22:return gg(e,t,n,t.pendingProps);case 24:return Hs(t),s=At(ft),e===null?(u=sc(),u===null&&(u=Ye,c=nc(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=n),u=c),t.memoizedState={parent:s,cache:u},rc(t),Pi(t,ft,u)):((e.lanes&n)!==0&&(lc(e,t),Vr(t,null,null,n),Br()),u=e.memoizedState,c=t.memoizedState,u.parent!==s?(u={parent:s,cache:s},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),Pi(t,ft,s)):(s=c.cache,Pi(t,ft,s),s!==u.cache&&tc(t,[ft],n,!0))),Nt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function mi(e){e.flags|=4}function Vc(e,t,n,s,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Zg())e.flags|=8192;else throw Vs=mo,ac}else e.flags&=-16777217}function xg(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hm(t))if(Zg())e.flags|=8192;else throw Vs=mo,ac}function Io(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ll():536870912,e.lanes|=t,Va|=t)}function Kr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function _1(e,t,n){var s=t.pendingProps;switch(Zu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return n=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),fi(ft),Ze(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ra(t)?mi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$u())),Ke(t),null;case 26:var u=t.type,c=t.memoizedState;return e===null?(mi(t),c!==null?(Ke(t),xg(t,c)):(Ke(t),Vc(t,u,null,s,n))):c?c!==e.memoizedState?(mi(t),Ke(t),xg(t,c)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&mi(t),Ke(t),Vc(t,u,e,s,n)),null;case 27:if(la(t),n=pe.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&mi(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ke(t),null}e=$.current,Ra(t)?id(t):(e=Dm(u,s,n),t.stateNode=e,mi(t))}return Ke(t),null;case 5:if(la(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&mi(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ke(t),null}if(c=$.current,Ra(t))id(t);else{var d=Fo(pe.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?d.createElement("select",{is:s.is}):d.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?d.createElement(u,{is:s.is}):d.createElement(u)}}c[ot]=t,c[_t]=s;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=c;e:switch(wt(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&mi(t)}}return Ke(t),Vc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&mi(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(e=pe.current,Ra(t)){if(e=t.stateNode,n=t.memoizedProps,s=null,u=xt,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||bm(e.nodeValue,n)),e||Gi(t,!0)}else e=Fo(e).createTextNode(s),e[ot]=t,t.stateNode=e}return Ke(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(s=Ra(t),n!==null){if(e===null){if(!s)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ot]=t}else zs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else n=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Kt(t),t):(Kt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ke(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ra(t),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[ot]=t}else zs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),u=!1}else u=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Kt(t),t):(Kt(t),null)}return Kt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=s!==null,e=e!==null&&e.memoizedState!==null,n&&(s=t.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Io(t,t.updateQueue),Ke(t),null);case 4:return Ze(),e===null&&ff(t.stateNode.containerInfo),Ke(t),null;case 10:return fi(t.type),Ke(t),null;case 19:if(K(it),s=t.memoizedState,s===null)return Ke(t),null;if(u=(t.flags&128)!==0,c=s.rendering,c===null)if(u)Kr(s,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=_o(e),c!==null){for(t.flags|=128,Kr(s,!1),e=c.updateQueue,t.updateQueue=e,Io(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)$h(n,e),n=n.sibling;return J(it,it.current&1|2),Se&&ui(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&Dt()>zo&&(t.flags|=128,u=!0,Kr(s,!1),t.lanes=4194304)}else{if(!u)if(e=_o(c),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,Io(t,e),Kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!Se)return Ke(t),null}else 2*Dt()-s.renderingStartTime>zo&&n!==536870912&&(t.flags|=128,u=!0,Kr(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(e=s.last,e!==null?e.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=it.current,J(it,u?n&1|2:n&1),Se&&ui(t,s.treeForkCount),e):(Ke(t),null);case 22:case 23:return Kt(t),fc(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(n&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),n=t.updateQueue,n!==null&&Io(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==n&&(t.flags|=2048),e!==null&&K(qs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),fi(ft),Ke(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function b1(e,t){switch(Zu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(ft),Ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return la(t),null;case 31:if(t.memoizedState!==null){if(Kt(t),t.alternate===null)throw Error(o(340));zs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Kt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));zs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(it),null;case 4:return Ze(),null;case 10:return fi(t.type),null;case 22:case 23:return Kt(t),fc(),e!==null&&K(qs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fi(ft),null;case 25:return null;default:return null}}function Ag(e,t){switch(Zu(t),t.tag){case 3:fi(ft),Ze();break;case 26:case 27:case 5:la(t);break;case 4:Ze();break;case 31:t.memoizedState!==null&&Kt(t);break;case 13:Kt(t);break;case 19:K(it);break;case 10:fi(t.type);break;case 22:case 23:Kt(t),fc(),e!==null&&K(qs);break;case 24:fi(ft)}}function Qr(e,t){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var u=s.next;n=u;do{if((n.tag&e)===e){s=void 0;var c=n.create,d=n.inst;s=c(),d.destroy=s}n=n.next}while(n!==u)}}catch(v){He(t,t.return,v)}}function Zi(e,t,n){try{var s=t.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&e)===e){var d=s.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,u=t;var N=n,z=v;try{z()}catch(G){He(u,N,G)}}}s=s.next}while(s!==c)}}catch(G){He(t,t.return,G)}}function Ng(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{pd(t,n)}catch(s){He(e,e.return,s)}}}function wg(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){He(e,t,s)}}function Zr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof n=="function"?e.refCleanup=n(s):n.current=s}}catch(u){He(e,t,u)}}function Qn(e,t){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(u){He(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){He(e,t,u)}else n.current=null}function Cg(e){var t=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(u){He(e,e.return,u)}}function Gc(e,t,n){try{var s=e.stateNode;V1(s,e.type,n,t),s[_t]=t}catch(u){He(e,e.return,u)}}function Rg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&is(e.type)||e.tag===4}function Pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&is(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn));else if(s!==4&&(s===27&&is(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Mo(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(s===27&&is(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}function Og(e){var t=e.stateNode,n=e.memoizedProps;try{for(var s=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);wt(t,s,n),t[ot]=e,t[_t]=n}catch(c){He(e,e.return,c)}}var pi=!1,gt=!1,Xc=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,Et=null;function E1(e,t){if(e=e.containerInfo,gf=eu,e=Gh(e),Hu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var u=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var d=0,v=-1,N=-1,z=0,G=0,F=e,k=null;t:for(;;){for(var q;F!==n||u!==0&&F.nodeType!==3||(v=d+u),F!==c||s!==0&&F.nodeType!==3||(N=d+s),F.nodeType===3&&(d+=F.nodeValue.length),(q=F.firstChild)!==null;)k=F,F=q;for(;;){if(F===e)break t;if(k===n&&++z===u&&(v=d),k===c&&++G===s&&(N=d),(q=F.nextSibling)!==null)break;F=k,k=F.parentNode}F=q}n=v===-1||N===-1?null:{start:v,end:N}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:e,selectionRange:n},eu=!1,Et=t;Et!==null;)if(t=Et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Et=e;else for(;Et!==null;){switch(t=Et,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)u=e[n],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,u=c.memoizedProps,c=c.memoizedState,s=n.stateNode;try{var W=Ys(n.type,u);e=s.getSnapshotBeforeUpdate(W,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(ce){He(n,n.return,ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)vf(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Et=e;break}Et=t.return}}function Ig(e,t,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n),s&4&&Qr(5,n);break;case 1:if(vi(e,n),s&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){He(n,n.return,d)}else{var u=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){He(n,n.return,d)}}s&64&&Ng(n),s&512&&Zr(n,n.return);break;case 3:if(vi(e,n),s&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{pd(e,t)}catch(d){He(n,n.return,d)}}break;case 27:t===null&&s&4&&Og(n);case 26:case 5:vi(e,n),t===null&&s&4&&Cg(n),s&512&&Zr(n,n.return);break;case 12:vi(e,n);break;case 31:vi(e,n),s&4&&Ug(e,n);break;case 13:vi(e,n),s&4&&Lg(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=O1.bind(null,n),Z1(e,n))));break;case 22:if(s=n.memoizedState!==null||pi,!s){t=t!==null&&t.memoizedState!==null||gt,u=pi;var c=gt;pi=s,(gt=t)&&!c?_i(e,n,(n.subtreeFlags&8772)!==0):vi(e,n),pi=u,gt=c}break;case 30:break;default:vi(e,n)}}function Mg(e){var t=e.alternate;t!==null&&(e.alternate=null,Mg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ha(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,kt=!1;function yi(e,t,n){for(n=n.child;n!==null;)jg(e,t,n),n=n.sibling}function jg(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(dn,n)}catch{}switch(n.tag){case 26:gt||Qn(n,t),yi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:gt||Qn(n,t);var s=Je,u=kt;is(n.type)&&(Je=n.stateNode,kt=!1),yi(e,t,n),al(n.stateNode),Je=s,kt=u;break;case 5:gt||Qn(n,t);case 6:if(s=Je,u=kt,Je=null,yi(e,t,n),Je=s,kt=u,Je!==null)if(kt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(n.stateNode)}catch(c){He(n,t,c)}else try{Je.removeChild(n.stateNode)}catch(c){He(n,t,c)}break;case 18:Je!==null&&(kt?(e=Je,Nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Za(e)):Nm(Je,n.stateNode));break;case 4:s=Je,u=kt,Je=n.stateNode.containerInfo,kt=!0,yi(e,t,n),Je=s,kt=u;break;case 0:case 11:case 14:case 15:Zi(2,n,t),gt||Zi(4,n,t),yi(e,t,n);break;case 1:gt||(Qn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"&&wg(n,t,s)),yi(e,t,n);break;case 21:yi(e,t,n);break;case 22:gt=(s=gt)||n.memoizedState!==null,yi(e,t,n),gt=s;break;default:yi(e,t,n)}}function Ug(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Za(e)}catch(n){He(t,t.return,n)}}}function Lg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Za(e)}catch(n){He(t,t.return,n)}}function T1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dg),t;default:throw Error(o(435,e.tag))}}function jo(e,t){var n=T1(e);t.forEach(function(s){if(!n.has(s)){n.add(s);var u=D1.bind(null,e,s);s.then(u,u)}})}function Ht(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var u=n[s],c=e,d=t,v=d;e:for(;v!==null;){switch(v.tag){case 27:if(is(v.type)){Je=v.stateNode,kt=!1;break e}break;case 5:Je=v.stateNode,kt=!1;break e;case 3:case 4:Je=v.stateNode.containerInfo,kt=!0;break e}v=v.return}if(Je===null)throw Error(o(160));jg(c,d,u),Je=null,kt=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zg(t,e),t=t.sibling}var Sn=null;function zg(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ht(t,e),qt(e),s&4&&(Zi(3,e,e.return),Qr(3,e),Zi(5,e,e.return));break;case 1:Ht(t,e),qt(e),s&512&&(gt||n===null||Qn(n,n.return)),s&64&&pi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var u=Sn;if(Ht(t,e),qt(e),s&512&&(gt||n===null||Qn(n,n.return)),s&4){var c=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":c=u.getElementsByTagName("title")[0],(!c||c[Ln]||c[ot]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(s),u.head.insertBefore(c,u.querySelector("head > title"))),wt(c,s,n),c[ot]=e,ut(c),s=c;break e;case"link":var d=zm("link","href",u).get(s+(n.href||""));if(d){for(var v=0;v<d.length;v++)if(c=d[v],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(v,1);break t}}c=u.createElement(s),wt(c,s,n),u.head.appendChild(c);break;case"meta":if(d=zm("meta","content",u).get(s+(n.content||""))){for(v=0;v<d.length;v++)if(c=d[v],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(v,1);break t}}c=u.createElement(s),wt(c,s,n),u.head.appendChild(c);break;default:throw Error(o(468,s))}c[ot]=e,ut(c),s=c}e.stateNode=s}else km(u,e.type,e.stateNode);else e.stateNode=Lm(u,s,e.memoizedProps);else c!==s?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,s===null?km(u,e.type,e.stateNode):Lm(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ht(t,e),qt(e),s&512&&(gt||n===null||Qn(n,n.return)),n!==null&&s&4&&Gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ht(t,e),qt(e),s&512&&(gt||n===null||Qn(n,n.return)),e.flags&32){u=e.stateNode;try{zt(u,"")}catch(W){He(e,e.return,W)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Gc(e,u,n!==null?n.memoizedProps:u)),s&1024&&(Xc=!0);break;case 6:if(Ht(t,e),qt(e),s&4){if(e.stateNode===null)throw Error(o(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(W){He(e,e.return,W)}}break;case 3:if(Zo=null,u=Sn,Sn=Ko(t.containerInfo),Ht(t,e),Sn=u,qt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(t.containerInfo)}catch(W){He(e,e.return,W)}Xc&&(Xc=!1,kg(e));break;case 4:s=Sn,Sn=Ko(e.stateNode.containerInfo),Ht(t,e),qt(e),Sn=s;break;case 12:Ht(t,e),qt(e);break;case 31:Ht(t,e),qt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jo(e,s)));break;case 13:Ht(t,e),qt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Lo=Dt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jo(e,s)));break;case 22:u=e.memoizedState!==null;var N=n!==null&&n.memoizedState!==null,z=pi,G=gt;if(pi=z||u,gt=G||N,Ht(t,e),gt=G,pi=z,qt(e),s&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(n===null||N||pi||gt||Xs(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){N=n=t;try{if(c=N.stateNode,u)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=N.stateNode;var F=N.memoizedProps.style,k=F!=null&&F.hasOwnProperty("display")?F.display:null;v.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(W){He(N,N.return,W)}}}else if(t.tag===6){if(n===null){N=t;try{N.stateNode.nodeValue=u?"":N.memoizedProps}catch(W){He(N,N.return,W)}}}else if(t.tag===18){if(n===null){N=t;try{var q=N.stateNode;u?wm(q,!0):wm(N.stateNode,!1)}catch(W){He(N,N.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,jo(e,n))));break;case 19:Ht(t,e),qt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jo(e,s)));break;case 30:break;case 21:break;default:Ht(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{for(var n,s=e.return;s!==null;){if(Rg(s)){n=s;break}s=s.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var u=n.stateNode,c=Pc(e);Mo(e,c,u);break;case 5:var d=n.stateNode;n.flags&32&&(zt(d,""),n.flags&=-33);var v=Pc(e);Mo(e,v,d);break;case 3:case 4:var N=n.stateNode.containerInfo,z=Pc(e);Yc(e,z,N);break;default:throw Error(o(161))}}catch(G){He(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function vi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ig(e,t.alternate,t),t=t.sibling}function Xs(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zi(4,t,t.return),Xs(t);break;case 1:Qn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&wg(t,t.return,n),Xs(t);break;case 27:al(t.stateNode);case 26:case 5:Qn(t,t.return),Xs(t);break;case 22:t.memoizedState===null&&Xs(t);break;case 30:Xs(t);break;default:Xs(t)}e=e.sibling}}function _i(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,u=e,c=t,d=c.flags;switch(c.tag){case 0:case 11:case 15:_i(u,c,n),Qr(4,c);break;case 1:if(_i(u,c,n),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(z){He(s,s.return,z)}if(s=c,u=s.updateQueue,u!==null){var v=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)md(N[u],v)}catch(z){He(s,s.return,z)}}n&&d&64&&Ng(c),Zr(c,c.return);break;case 27:Og(c);case 26:case 5:_i(u,c,n),n&&s===null&&d&4&&Cg(c),Zr(c,c.return);break;case 12:_i(u,c,n);break;case 31:_i(u,c,n),n&&d&4&&Ug(u,c);break;case 13:_i(u,c,n),n&&d&4&&Lg(u,c);break;case 22:c.memoizedState===null&&_i(u,c,n),Zr(c,c.return);break;case 30:break;default:_i(u,c,n)}t=t.sibling}}function Fc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Lr(n))}function Kc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lr(e))}function xn(e,t,n,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hg(e,t,n,s),t=t.sibling}function Hg(e,t,n,s){var u=t.flags;switch(t.tag){case 0:case 11:case 15:xn(e,t,n,s),u&2048&&Qr(9,t);break;case 1:xn(e,t,n,s);break;case 3:xn(e,t,n,s),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lr(e)));break;case 12:if(u&2048){xn(e,t,n,s),e=t.stateNode;try{var c=t.memoizedProps,d=c.id,v=c.onPostCommit;typeof v=="function"&&v(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){He(t,t.return,N)}}else xn(e,t,n,s);break;case 31:xn(e,t,n,s);break;case 13:xn(e,t,n,s);break;case 23:break;case 22:c=t.stateNode,d=t.alternate,t.memoizedState!==null?c._visibility&2?xn(e,t,n,s):Jr(e,t):c._visibility&2?xn(e,t,n,s):(c._visibility|=2,Ha(e,t,n,s,(t.subtreeFlags&10256)!==0||!1)),u&2048&&Fc(d,t);break;case 24:xn(e,t,n,s),u&2048&&Kc(t.alternate,t);break;default:xn(e,t,n,s)}}function Ha(e,t,n,s,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,d=t,v=n,N=s,z=d.flags;switch(d.tag){case 0:case 11:case 15:Ha(c,d,v,N,u),Qr(8,d);break;case 23:break;case 22:var G=d.stateNode;d.memoizedState!==null?G._visibility&2?Ha(c,d,v,N,u):Jr(c,d):(G._visibility|=2,Ha(c,d,v,N,u)),u&&z&2048&&Fc(d.alternate,d);break;case 24:Ha(c,d,v,N,u),u&&z&2048&&Kc(d.alternate,d);break;default:Ha(c,d,v,N,u)}t=t.sibling}}function Jr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,s=t,u=s.flags;switch(s.tag){case 22:Jr(n,s),u&2048&&Fc(s.alternate,s);break;case 24:Jr(n,s),u&2048&&Kc(s.alternate,s);break;default:Jr(n,s)}t=t.sibling}}var $r=8192;function qa(e,t,n){if(e.subtreeFlags&$r)for(e=e.child;e!==null;)qg(e,t,n),e=e.sibling}function qg(e,t,n){switch(e.tag){case 26:qa(e,t,n),e.flags&$r&&e.memoizedState!==null&&ov(n,Sn,e.memoizedState,e.memoizedProps);break;case 5:qa(e,t,n);break;case 3:case 4:var s=Sn;Sn=Ko(e.stateNode.containerInfo),qa(e,t,n),Sn=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=$r,$r=16777216,qa(e,t,n),$r=s):qa(e,t,n));break;default:qa(e,t,n)}}function Bg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];Et=s,Gg(s,e)}Bg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:Wr(e),e.flags&2048&&Zi(9,e,e.return);break;case 3:Wr(e);break;case 12:Wr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Uo(e)):Wr(e);break;default:Wr(e)}}function Uo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];Et=s,Gg(s,e)}Bg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zi(8,t,t.return),Uo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Uo(t));break;default:Uo(t)}e=e.sibling}}function Gg(e,t){for(;Et!==null;){var n=Et;switch(n.tag){case 0:case 11:case 15:Zi(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Lr(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,Et=s;else e:for(n=e;Et!==null;){s=Et;var u=s.sibling,c=s.return;if(Mg(s),s===n){Et=null;break e}if(u!==null){u.return=c,Et=u;break e}Et=c}}}var S1={getCacheForType:function(e){var t=At(ft),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return At(ft).controller.signal}},x1=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ye=null,_e=null,Ee=0,ke=0,Qt=null,Ji=!1,Ba=!1,Qc=!1,bi=0,et=0,$i=0,Fs=0,Zc=0,Zt=0,Va=0,el=null,Bt=null,Jc=!1,Lo=0,Pg=0,zo=1/0,ko=null,Wi=null,vt=0,es=null,Ga=null,Ei=0,$c=0,Wc=null,Yg=null,tl=0,ef=null;function Jt(){return(Ie&2)!==0&&Ee!==0?Ee&-Ee:V.T!==null?lf():kl()}function Xg(){if(Zt===0)if((Ee&536870912)===0||Se){var e=Es;Es<<=1,(Es&3932160)===0&&(Es=262144),Zt=e}else Zt=536870912;return e=Ft.current,e!==null&&(e.flags|=32),Zt}function Vt(e,t,n){(e===Ye&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Pa(e,0),ts(e,Ee,Zt,!1)),Ts(e,n),((Ie&2)===0||e!==Ye)&&(e===Ye&&((Ie&2)===0&&(Fs|=n),et===4&&ts(e,Ee,Zt,!1)),Zn(e))}function Fg(e,t,n){if((Ie&6)!==0)throw Error(o(327));var s=!n&&(t&127)===0&&(t&e.expiredLanes)===0||gn(e,t),u=s?w1(e,t):nf(e,t,!0),c=s;do{if(u===0){Ba&&!s&&ts(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!A1(n)){u=nf(e,t,!1),c=!1;continue}if(u===2){if(c=t,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var v=e;u=el;var N=v.current.memoizedState.isDehydrated;if(N&&(Pa(v,d).flags|=256),d=nf(v,d,!1),d!==2){if(Qc&&!N){v.errorRecoveryDisabledLanes|=c,Fs|=c,u=4;break e}c=Bt,Bt=u,c!==null&&(Bt===null?Bt=c:Bt.push.apply(Bt,c))}u=d}if(c=!1,u!==2)continue}}if(u===1){Pa(e,0),ts(e,t,0,!0);break}e:{switch(s=e,c=u,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ts(s,t,Zt,!Ji);break e;case 2:Bt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(u=Lo+300-Dt(),10<u)){if(ts(s,t,Zt,!Ji),Mn(s,0,!0)!==0)break e;Ei=t,s.timeoutHandle=xm(Kg.bind(null,s,n,Bt,ko,Jc,t,Zt,Fs,Va,Ji,c,"Throttled",-0,0),u);break e}Kg(s,n,Bt,ko,Jc,t,Zt,Fs,Va,Ji,c,null,-0,0)}}break}while(!0);Zn(e)}function Kg(e,t,n,s,u,c,d,v,N,z,G,F,k,q){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},qg(t,c,F);var W=(c&62914560)===c?Lo-Dt():(c&4194048)===c?Pg-Dt():0;if(W=uv(F,W),W!==null){Ei=c,e.cancelPendingCommit=W(nm.bind(null,e,t,c,n,s,u,d,v,N,G,F,null,k,q)),ts(e,c,d,!z);return}}nm(e,t,c,n,s,u,d,v,N)}function A1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var u=n[s],c=u.getSnapshot;u=u.value;try{if(!Yt(c(),u))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ts(e,t,n,s){t&=~Zc,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var u=t;0<u;){var c=31-rt(u),d=1<<c;s[c]=-1,u&=~d}n!==0&&ca(e,n,t)}function Ho(){return(Ie&6)===0?(nl(0),!1):!0}function tf(){if(_e!==null){if(ke===0)var e=_e.return;else e=_e,ci=ks=null,yc(e),ja=null,kr=0,e=_e;for(;e!==null;)Ag(e.alternate,e),e=e.return;_e=null}}function Pa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Y1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ei=0,tf(),Ye=e,_e=n=oi(e.current,null),Ee=t,ke=0,Qt=null,Ji=!1,Ba=gn(e,t),Qc=!1,Va=Zt=Zc=Fs=$i=et=0,Bt=el=null,Jc=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var u=31-rt(s),c=1<<u;t|=e[u],s&=~c}return bi=t,ao(),n}function Qg(e,t){me=null,V.H=Xr,t===Ma||t===go?(t=fd(),ke=3):t===ac?(t=fd(),ke=4):ke=t===Mc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qt=t,_e===null&&(et=1,Co(e,an(t,e.current)))}function Zg(){var e=Ft.current;return e===null?!0:(Ee&4194048)===Ee?un===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===un:!1}function Jg(){var e=V.H;return V.H=Xr,e===null?Xr:e}function $g(){var e=V.A;return V.A=S1,e}function qo(){et=4,Ji||(Ee&4194048)!==Ee&&Ft.current!==null||(Ba=!0),($i&134217727)===0&&(Fs&134217727)===0||Ye===null||ts(Ye,Ee,Zt,!1)}function nf(e,t,n){var s=Ie;Ie|=2;var u=Jg(),c=$g();(Ye!==e||Ee!==t)&&(ko=null,Pa(e,t)),t=!1;var d=et;e:do try{if(ke!==0&&_e!==null){var v=_e,N=Qt;switch(ke){case 8:tf(),d=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var z=ke;if(ke=0,Qt=null,Ya(e,v,N,z),n&&Ba){d=0;break e}break;default:z=ke,ke=0,Qt=null,Ya(e,v,N,z)}}N1(),d=et;break}catch(G){Qg(e,G)}while(!0);return t&&e.shellSuspendCounter++,ci=ks=null,Ie=s,V.H=u,V.A=c,_e===null&&(Ye=null,Ee=0,ao()),d}function N1(){for(;_e!==null;)Wg(_e)}function w1(e,t){var n=Ie;Ie|=2;var s=Jg(),u=$g();Ye!==e||Ee!==t?(ko=null,zo=Dt()+500,Pa(e,t)):Ba=gn(e,t);e:do try{if(ke!==0&&_e!==null){t=_e;var c=Qt;t:switch(ke){case 1:ke=0,Qt=null,Ya(e,t,c,1);break;case 2:case 9:if(ud(c)){ke=0,Qt=null,em(t);break}t=function(){ke!==2&&ke!==9||Ye!==e||(ke=7),Zn(e)},c.then(t,t);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:ud(c)?(ke=0,Qt=null,em(t)):(ke=0,Qt=null,Ya(e,t,c,7));break;case 5:var d=null;switch(_e.tag){case 26:d=_e.memoizedState;case 5:case 27:var v=_e;if(d?Hm(d):v.stateNode.complete){ke=0,Qt=null;var N=v.sibling;if(N!==null)_e=N;else{var z=v.return;z!==null?(_e=z,Bo(z)):_e=null}break t}}ke=0,Qt=null,Ya(e,t,c,5);break;case 6:ke=0,Qt=null,Ya(e,t,c,6);break;case 8:tf(),et=6;break e;default:throw Error(o(462))}}C1();break}catch(G){Qg(e,G)}while(!0);return ci=ks=null,V.H=s,V.A=u,Ie=n,_e!==null?0:(Ye=null,Ee=0,ao(),et)}function C1(){for(;_e!==null&&!Du();)Wg(_e)}function Wg(e){var t=Sg(e.alternate,e,bi);e.memoizedProps=e.pendingProps,t===null?Bo(e):_e=t}function em(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yg(n,t,t.pendingProps,t.type,void 0,Ee);break;case 11:t=yg(n,t,t.pendingProps,t.type.render,t.ref,Ee);break;case 5:yc(t);default:Ag(n,t),t=_e=$h(t,bi),t=Sg(n,t,bi)}e.memoizedProps=e.pendingProps,t===null?Bo(e):_e=t}function Ya(e,t,n,s){ci=ks=null,yc(t),ja=null,kr=0;var u=t.return;try{if(p1(e,u,t,n,Ee)){et=1,Co(e,an(n,e.current)),_e=null;return}}catch(c){if(u!==null)throw _e=u,c;et=1,Co(e,an(n,e.current)),_e=null;return}t.flags&32768?(Se||s===1?e=!0:Ba||(Ee&536870912)!==0?e=!1:(Ji=e=!0,(s===2||s===9||s===3||s===6)&&(s=Ft.current,s!==null&&s.tag===13&&(s.flags|=16384))),tm(t,e)):Bo(t)}function Bo(e){var t=e;do{if((t.flags&32768)!==0){tm(t,Ji);return}e=t.return;var n=_1(t.alternate,t,bi);if(n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);et===0&&(et=5)}function tm(e,t){do{var n=b1(e.alternate,e);if(n!==null){n.flags&=32767,_e=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){_e=e;return}_e=e=n}while(e!==null);et=6,_e=null}function nm(e,t,n,s,u,c,d,v,N){e.cancelPendingCommit=null;do Vo();while(vt!==0);if((Ie&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Pu,Uu(e,n,c,d,v,N),e===Ye&&(_e=Ye=null,Ee=0),Ga=t,es=e,Ei=n,$c=c,Wc=u,Yg=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,I1(Di,function(){return lm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=V.T,V.T=null,u=Z.p,Z.p=2,d=Ie,Ie|=4;try{E1(e,t,n)}finally{Ie=d,Z.p=u,V.T=s}}vt=1,im(),sm(),am()}}function im(){if(vt===1){vt=0;var e=es,t=Ga,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=V.T,V.T=null;var s=Z.p;Z.p=2;var u=Ie;Ie|=4;try{zg(t,e);var c=mf,d=Gh(e.containerInfo),v=c.focusedElem,N=c.selectionRange;if(d!==v&&v&&v.ownerDocument&&Vh(v.ownerDocument.documentElement,v)){if(N!==null&&Hu(v)){var z=N.start,G=N.end;if(G===void 0&&(G=z),"selectionStart"in v)v.selectionStart=z,v.selectionEnd=Math.min(G,v.value.length);else{var F=v.ownerDocument||document,k=F&&F.defaultView||window;if(k.getSelection){var q=k.getSelection(),W=v.textContent.length,ce=Math.min(N.start,W),Ge=N.end===void 0?ce:Math.min(N.end,W);!q.extend&&ce>Ge&&(d=Ge,Ge=ce,ce=d);var M=Bh(v,ce),O=Bh(v,Ge);if(M&&O&&(q.rangeCount!==1||q.anchorNode!==M.node||q.anchorOffset!==M.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var L=F.createRange();L.setStart(M.node,M.offset),q.removeAllRanges(),ce>Ge?(q.addRange(L),q.extend(O.node,O.offset)):(L.setEnd(O.node,O.offset),q.addRange(L))}}}}for(F=[],q=v;q=q.parentNode;)q.nodeType===1&&F.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<F.length;v++){var X=F[v];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}eu=!!gf,mf=gf=null}finally{Ie=u,Z.p=s,V.T=n}}e.current=t,vt=2}}function sm(){if(vt===2){vt=0;var e=es,t=Ga,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=V.T,V.T=null;var s=Z.p;Z.p=2;var u=Ie;Ie|=4;try{Ig(e,t.alternate,t)}finally{Ie=u,Z.p=s,V.T=n}}vt=3}}function am(){if(vt===4||vt===3){vt=0,Dl();var e=es,t=Ga,n=Ei,s=Yg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?vt=5:(vt=0,Ga=es=null,rm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wi=null),si(n),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(dn,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=V.T,u=Z.p,Z.p=2,V.T=null;try{for(var c=e.onRecoverableError,d=0;d<s.length;d++){var v=s[d];c(v.value,{componentStack:v.stack})}}finally{V.T=t,Z.p=u}}(Ei&3)!==0&&Vo(),Zn(e),u=e.pendingLanes,(n&261930)!==0&&(u&42)!==0?e===ef?tl++:(tl=0,ef=e):tl=0,nl(0)}}function rm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lr(t)))}function Vo(){return im(),sm(),am(),lm()}function lm(){if(vt!==5)return!1;var e=es,t=$c;$c=0;var n=si(Ei),s=V.T,u=Z.p;try{Z.p=32>n?32:n,V.T=null,n=Wc,Wc=null;var c=es,d=Ei;if(vt=0,Ga=es=null,Ei=0,(Ie&6)!==0)throw Error(o(331));var v=Ie;if(Ie|=4,Vg(c.current),Hg(c,c.current,d,n),Ie=v,nl(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(dn,c)}catch{}return!0}finally{Z.p=u,V.T=s,rm(e,t)}}function om(e,t,n){t=an(n,t),t=Ic(e.stateNode,t,2),e=Fi(e,t,2),e!==null&&(Ts(e,2),Zn(e))}function He(e,t,n){if(e.tag===3)om(e,e,n);else for(;t!==null;){if(t.tag===3){om(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wi===null||!Wi.has(s))){e=an(n,e),n=ug(2),s=Fi(t,n,2),s!==null&&(cg(n,s,t,e),Ts(s,2),Zn(s));break}}t=t.return}}function sf(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new x1;var u=new Set;s.set(t,u)}else u=s.get(t),u===void 0&&(u=new Set,s.set(t,u));u.has(n)||(Qc=!0,u.add(n),e=R1.bind(null,e,t,n),t.then(e,e))}function R1(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ye===e&&(Ee&n)===n&&(et===4||et===3&&(Ee&62914560)===Ee&&300>Dt()-Lo?(Ie&2)===0&&Pa(e,0):Zc|=n,Va===Ee&&(Va=0)),Zn(e)}function um(e,t){t===0&&(t=Ll()),e=Us(e,t),e!==null&&(Ts(e,t),Zn(e))}function O1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),um(e,n)}function D1(e,t){var n=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(t),um(e,n)}function I1(e,t){return yt(e,t)}var Go=null,Xa=null,af=!1,Po=!1,rf=!1,ns=0;function Zn(e){e!==Xa&&e.next===null&&(Xa===null?Go=Xa=e:Xa=Xa.next=e),Po=!0,af||(af=!0,j1())}function nl(e,t){if(!rf&&Po){rf=!0;do for(var n=!1,s=Go;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var d=s.suspendedLanes,v=s.pingedLanes;c=(1<<31-rt(42|e)+1)-1,c&=u&~(d&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,dm(s,c))}else c=Ee,c=Mn(s,s===Ye?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||gn(s,c)||(n=!0,dm(s,c));s=s.next}while(n);rf=!1}}function M1(){cm()}function cm(){Po=af=!1;var e=0;ns!==0&&P1()&&(e=ns);for(var t=Dt(),n=null,s=Go;s!==null;){var u=s.next,c=fm(s,t);c===0?(s.next=null,n===null?Go=u:n.next=u,u===null&&(Xa=n)):(n=s,(e!==0||(c&3)!==0)&&(Po=!0)),s=u}vt!==0&&vt!==5||nl(e),ns!==0&&(ns=0)}function fm(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-rt(c),v=1<<d,N=u[d];N===-1?((v&n)===0||(v&s)!==0)&&(u[d]=ju(v,t)):N<=t&&(e.expiredLanes|=v),c&=~v}if(t=Ye,n=Ee,n=Mn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,n===0||e===t&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Oi(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||gn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(s!==null&&Oi(s),si(n)){case 2:case 8:n=hr;break;case 32:n=Di;break;case 268435456:n=Il;break;default:n=Di}return s=hm.bind(null,e),n=yt(n,s),e.callbackPriority=t,e.callbackNode=n,t}return s!==null&&s!==null&&Oi(s),e.callbackPriority=2,e.callbackNode=null,2}function hm(e,t){if(vt!==0&&vt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vo()&&e.callbackNode!==n)return null;var s=Ee;return s=Mn(e,e===Ye?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Fg(e,s,t),fm(e,Dt()),e.callbackNode!=null&&e.callbackNode===n?hm.bind(null,e):null)}function dm(e,t){if(Vo())return null;Fg(e,t,!0)}function j1(){X1(function(){(Ie&6)!==0?yt(fr,M1):cm()})}function lf(){if(ns===0){var e=Da;e===0&&(e=Dn,Dn<<=1,(Dn&261888)===0&&(Dn=256)),ns=e}return ns}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pa(""+e)}function mm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function U1(e,t,n,s,u){if(t==="submit"&&n&&n.stateNode===u){var c=gm((u[_t]||null).action),d=s.submitter;d&&(t=(t=d[_t]||null)?gm(t.formAction):d.getAttribute("formAction"),t!==null&&(c=t,d=null));var v=new Pn("action","action",null,s,u);e.push({event:v,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ns!==0){var N=d?mm(u,d):new FormData(u);Nc(n,{pending:!0,data:N,method:u.method,action:c},null,N)}}else typeof c=="function"&&(v.preventDefault(),N=d?mm(u,d):new FormData(u),Nc(n,{pending:!0,data:N,method:u.method,action:c},c,N))},currentTarget:u}]})}}for(var of=0;of<Gu.length;of++){var uf=Gu[of],L1=uf.toLowerCase(),z1=uf[0].toUpperCase()+uf.slice(1);Tn(L1,"on"+z1)}Tn(Xh,"onAnimationEnd"),Tn(Fh,"onAnimationIteration"),Tn(Kh,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(Wy,"onTransitionRun"),Tn(e1,"onTransitionStart"),Tn(t1,"onTransitionCancel"),Tn(Qh,"onTransitionEnd"),qn("onMouseEnter",["mouseout","mouseover"]),qn("onMouseLeave",["mouseout","mouseover"]),qn("onPointerEnter",["pointerout","pointerover"]),qn("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function pm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],u=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var d=s.length-1;0<=d;d--){var v=s[d],N=v.instance,z=v.currentTarget;if(v=v.listener,N!==c&&u.isPropagationStopped())break e;c=v,u.currentTarget=z;try{c(u)}catch(G){so(G)}u.currentTarget=null,c=N}else for(d=0;d<s.length;d++){if(v=s[d],N=v.instance,z=v.currentTarget,v=v.listener,N!==c&&u.isPropagationStopped())break e;c=v,u.currentTarget=z;try{c(u)}catch(G){so(G)}u.currentTarget=null,c=N}}}}function be(e,t){var n=t[fa];n===void 0&&(n=t[fa]=new Set);var s=e+"__bubble";n.has(s)||(ym(t,e,2,!1),n.add(s))}function cf(e,t,n){var s=0;t&&(s|=4),ym(n,e,s,t)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function ff(e){if(!e[Yo]){e[Yo]=!0,mr.forEach(function(n){n!=="selectionchange"&&(k1.has(n)||cf(n,!1,e),cf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yo]||(t[Yo]=!0,cf("selectionchange",!1,t))}}function ym(e,t,n,s){switch(Xm(t)){case 2:var u=hv;break;case 8:u=dv;break;default:u=Nf}n=u.bind(null,t,n,e),u=void 0,!ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function hf(e,t,n,s,u){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var v=s.stateNode.containerInfo;if(v===u)break;if(d===4)for(d=s.return;d!==null;){var N=d.tag;if((N===3||N===4)&&d.stateNode.containerInfo===u)return;d=d.return}for(;v!==null;){if(d=zn(v),d===null)return;if(N=d.tag,N===5||N===6||N===26||N===27){s=c=d;continue e}v=v.parentNode}}s=s.return}zi(function(){var z=c,G=tn(n),F=[];e:{var k=Zh.get(e);if(k!==void 0){var q=Pn,W=e;switch(e){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":q=no;break;case"focusin":W="focus",q=Ds;break;case"focusout":W="blur",q=Ds;break;case"beforeblur":case"afterblur":q=Ds;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Cr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Xl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=m;break;case Xh:case Fh:case Kh:q=Kl;break;case Qh:q=U;break;case"scroll":case"scrollend":q=wr;break;case"wheel":q=Q;break;case"copy":case"cut":case"paste":q=Ql;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=l;break;case"toggle":case"beforetoggle":q=nt}var ce=(t&4)!==0,Ge=!ce&&(e==="scroll"||e==="scrollend"),M=ce?k!==null?k+"Capture":null:k;ce=[];for(var O=z,L;O!==null;){var X=O;if(L=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||L===null||M===null||(X=vn(O,M),X!=null&&ce.push(sl(O,X,L))),Ge)break;O=O.return}0<ce.length&&(k=new q(k,W,null,n,G),F.push({event:k,listeners:ce}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",k&&n!==xr&&(W=n.relatedTarget||n.fromElement)&&(zn(W)||W[Un]))break e;if((q||k)&&(k=G.window===G?G:(k=G.ownerDocument)?k.defaultView||k.parentWindow:window,q?(W=n.relatedTarget||n.toElement,q=z,W=W?zn(W):null,W!==null&&(Ge=g(W),ce=W.tag,W!==Ge||ce!==5&&ce!==27&&ce!==6)&&(W=null)):(q=null,W=z),q!==W)){if(ce=Cr,X="onMouseLeave",M="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ce=l,X="onPointerLeave",M="onPointerEnter",O="pointer"),Ge=q==null?k:Gt(q),L=W==null?k:Gt(W),k=new ce(X,O+"leave",q,n,G),k.target=Ge,k.relatedTarget=L,X=null,zn(G)===z&&(ce=new ce(M,O+"enter",W,n,G),ce.target=L,ce.relatedTarget=Ge,X=ce),Ge=X,q&&W)t:{for(ce=H1,M=q,O=W,L=0,X=M;X;X=ce(X))L++;X=0;for(var ae=O;ae;ae=ce(ae))X++;for(;0<L-X;)M=ce(M),L--;for(;0<X-L;)O=ce(O),X--;for(;L--;){if(M===O||O!==null&&M===O.alternate){ce=M;break t}M=ce(M),O=ce(O)}ce=null}else ce=null;q!==null&&vm(F,k,q,ce,!1),W!==null&&Ge!==null&&vm(F,Ge,W,ce,!0)}}e:{if(k=z?Gt(z):window,q=k.nodeName&&k.nodeName.toLowerCase(),q==="select"||q==="input"&&k.type==="file")var Oe=Uh;else if(Mh(k))if(Lh)Oe=Zy;else{Oe=Ky;var te=Fy}else q=k.nodeName,!q||q.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?z&&ma(z.elementType)&&(Oe=Uh):Oe=Qy;if(Oe&&(Oe=Oe(e,z))){jh(F,Oe,n,G);break e}te&&te(e,k,z),e==="focusout"&&z&&k.type==="number"&&z.memoizedProps.value!=null&&Er(k,"number",k.value)}switch(te=z?Gt(z):window,e){case"focusin":(Mh(te)||te.contentEditable==="true")&&(Sa=te,qu=z,Mr=null);break;case"focusout":Mr=qu=Sa=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Ph(F,n,G);break;case"selectionchange":if($y)break;case"keydown":case"keyup":Ph(F,n,G)}var ye;if($e)e:{switch(e){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ta?Ea(e,n)&&(Te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Te="onCompositionStart");Te&&(bn&&n.locale!=="ko"&&(Ta||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ta&&(ye=Nr()):(Gn=G,Ar="value"in Gn?Gn.value:Gn.textContent,Ta=!0)),te=Xo(z,Te),0<te.length&&(Te=new Xn(Te,e,null,n,G),F.push({event:Te,listeners:te}),ye?Te.data=ye:(ye=Ih(n),ye!==null&&(Te.data=ye)))),(ye=li?Gy(e,n):Py(e,n))&&(Te=Xo(z,"onBeforeInput"),0<Te.length&&(te=new Xn("onBeforeInput","beforeinput",null,n,G),F.push({event:te,listeners:Te}),te.data=ye)),U1(F,e,z,n,G)}pm(F,t)})}function sl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xo(e,t){for(var n=t+"Capture",s=[];e!==null;){var u=e,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=vn(e,n),u!=null&&s.unshift(sl(e,u,c)),u=vn(e,t),u!=null&&s.push(sl(e,u,c))),e.tag===3)return s;e=e.return}return[]}function H1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vm(e,t,n,s,u){for(var c=t._reactName,d=[];n!==null&&n!==s;){var v=n,N=v.alternate,z=v.stateNode;if(v=v.tag,N!==null&&N===s)break;v!==5&&v!==26&&v!==27||z===null||(N=z,u?(z=vn(n,c),z!=null&&d.unshift(sl(n,z,N))):u||(z=vn(n,c),z!=null&&d.push(sl(n,z,N)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var q1=/\r\n?/g,B1=/\u0000|\uFFFD/g;function _m(e){return(typeof e=="string"?e:""+e).replace(q1,`
`).replace(B1,"")}function bm(e,t){return t=_m(t),_m(e)===t}function Ve(e,t,n,s,u,c){switch(n){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||zt(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&zt(e,""+s);break;case"className":Pt(e,"class",s);break;case"tabIndex":Pt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(e,n,s);break;case"style":Sr(e,s,c);break;case"data":if(t!=="object"){Pt(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=pa(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ve(e,t,"name",u.name,u,null),Ve(e,t,"formEncType",u.formEncType,u,null),Ve(e,t,"formMethod",u.formMethod,u,null),Ve(e,t,"formTarget",u.formTarget,u,null)):(Ve(e,t,"encType",u.encType,u,null),Ve(e,t,"method",u.method,u,null),Ve(e,t,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=pa(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=yn);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=pa(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":be("beforetoggle",e),be("toggle",e),da(e,"popover",s);break;case"xlinkActuate":ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ct(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ct(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ct(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ct(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":da(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Yl.get(n)||n,da(e,n,s))}}function df(e,t,n,s,u,c){switch(n){case"style":Sr(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof s=="string"?zt(e,s):(typeof s=="number"||typeof s=="bigint")&&zt(e,""+s);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"onClick":s!=null&&(e.onclick=yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),t=n.slice(2,u?n.length-7:void 0),c=e[_t]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,u),typeof s=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,s,u);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):da(e,n,s)}}}function wt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var s=!1,u=!1,c;for(c in n)if(n.hasOwnProperty(c)){var d=n[c];if(d!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ve(e,t,c,d,n,null)}}u&&Ve(e,t,"srcSet",n.srcSet,n,null),s&&Ve(e,t,"src",n.src,n,null);return;case"input":be("invalid",e);var v=c=d=u=null,N=null,z=null;for(s in n)if(n.hasOwnProperty(s)){var G=n[s];if(G!=null)switch(s){case"name":u=G;break;case"type":d=G;break;case"checked":N=G;break;case"defaultChecked":z=G;break;case"value":c=G;break;case"defaultValue":v=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,t));break;default:Ve(e,t,s,G,n,null)}}Vl(e,c,v,N,z,d,u,!1);return;case"select":be("invalid",e),s=d=c=null;for(u in n)if(n.hasOwnProperty(u)&&(v=n[u],v!=null))switch(u){case"value":c=v;break;case"defaultValue":d=v;break;case"multiple":s=v;default:Ve(e,t,u,v,n,null)}t=c,n=d,e.multiple=!!s,t!=null?Mi(e,!!s,t,!1):n!=null&&Mi(e,!!s,n,!0);return;case"textarea":be("invalid",e),c=u=s=null;for(d in n)if(n.hasOwnProperty(d)&&(v=n[d],v!=null))switch(d){case"value":s=v;break;case"defaultValue":u=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Ve(e,t,d,v,n,null)}ji(e,s,u,c);return;case"option":for(N in n)if(n.hasOwnProperty(N)&&(s=n[N],s!=null))switch(N){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ve(e,t,N,s,n,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(s=0;s<il.length;s++)be(il[s],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(s=n[z],s!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ve(e,t,z,s,n,null)}return;default:if(ma(t)){for(G in n)n.hasOwnProperty(G)&&(s=n[G],s!==void 0&&df(e,t,G,s,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(s=n[v],s!=null&&Ve(e,t,v,s,n,null))}function V1(e,t,n,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,d=null,v=null,N=null,z=null,G=null;for(q in n){var F=n[q];if(n.hasOwnProperty(q)&&F!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":N=F;default:s.hasOwnProperty(q)||Ve(e,t,q,null,s,F)}}for(var k in s){var q=s[k];if(F=n[k],s.hasOwnProperty(k)&&(q!=null||F!=null))switch(k){case"type":c=q;break;case"name":u=q;break;case"checked":z=q;break;case"defaultChecked":G=q;break;case"value":d=q;break;case"defaultValue":v=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,t));break;default:q!==F&&Ve(e,t,k,q,s,F)}}ga(e,d,v,N,z,G,c,u);return;case"select":q=d=v=k=null;for(c in n)if(N=n[c],n.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":q=N;default:s.hasOwnProperty(c)||Ve(e,t,c,null,s,N)}for(u in s)if(c=s[u],N=n[u],s.hasOwnProperty(u)&&(c!=null||N!=null))switch(u){case"value":k=c;break;case"defaultValue":v=c;break;case"multiple":d=c;default:c!==N&&Ve(e,t,u,c,s,N)}t=v,n=d,s=q,k!=null?Mi(e,!!n,k,!1):!!s!=!!n&&(t!=null?Mi(e,!!n,t,!0):Mi(e,!!n,n?[]:"",!1));return;case"textarea":q=k=null;for(v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!s.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ve(e,t,v,null,s,u)}for(d in s)if(u=s[d],c=n[d],s.hasOwnProperty(d)&&(u!=null||c!=null))switch(d){case"value":k=u;break;case"defaultValue":q=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==c&&Ve(e,t,d,u,s,c)}Gl(e,k,q);return;case"option":for(var W in n)if(k=n[W],n.hasOwnProperty(W)&&k!=null&&!s.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:Ve(e,t,W,null,s,k)}for(N in s)if(k=s[N],q=n[N],s.hasOwnProperty(N)&&k!==q&&(k!=null||q!=null))switch(N){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Ve(e,t,N,k,s,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in n)k=n[ce],n.hasOwnProperty(ce)&&k!=null&&!s.hasOwnProperty(ce)&&Ve(e,t,ce,null,s,k);for(z in s)if(k=s[z],q=n[z],s.hasOwnProperty(z)&&k!==q&&(k!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:Ve(e,t,z,k,s,q)}return;default:if(ma(t)){for(var Ge in n)k=n[Ge],n.hasOwnProperty(Ge)&&k!==void 0&&!s.hasOwnProperty(Ge)&&df(e,t,Ge,void 0,s,k);for(G in s)k=s[G],q=n[G],!s.hasOwnProperty(G)||k===q||k===void 0&&q===void 0||df(e,t,G,k,s,q);return}}for(var M in n)k=n[M],n.hasOwnProperty(M)&&k!=null&&!s.hasOwnProperty(M)&&Ve(e,t,M,null,s,k);for(F in s)k=s[F],q=n[F],!s.hasOwnProperty(F)||k===q||k==null&&q==null||Ve(e,t,F,k,s,q)}function Em(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function G1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),s=0;s<n.length;s++){var u=n[s],c=u.transferSize,d=u.initiatorType,v=u.duration;if(c&&v&&Em(d)){for(d=0,v=u.responseEnd,s+=1;s<n.length;s++){var N=n[s],z=N.startTime;if(z>v)break;var G=N.transferSize,F=N.initiatorType;G&&Em(F)&&(N=N.responseEnd,d+=G*(N<v?1:(v-z)/(N-z)))}if(--s,t+=8*(c+d)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gf=null,mf=null;function Fo(e){return e.nodeType===9?e:e.ownerDocument}function Tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yf=null;function P1(){var e=window.event;return e&&e.type==="popstate"?e===yf?!1:(yf=e,!0):(yf=null,!1)}var xm=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,X1=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(e){return Am.resolve(null).then(e).catch(F1)}:xm;function F1(e){setTimeout(function(){throw e})}function is(e){return e==="head"}function Nm(e,t){var n=t,s=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"||n==="/&"){if(s===0){e.removeChild(u),Za(t);return}s--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;else if(n==="html")al(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,al(n);for(var c=n.firstChild;c;){var d=c.nextSibling,v=c.nodeName;c[Ln]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=d}}else n==="body"&&al(e.ownerDocument.body);n=u}while(n);Za(t)}function wm(e,t){var n=e;e=0;do{var s=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=s}while(n)}function vf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vf(n),ha(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function K1(e,t,n,s){for(;e.nodeType===1;){var u=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ln])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=cn(e.nextSibling),e===null)break}return null}function Q1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=cn(e.nextSibling),e===null))return null;return e}function Cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=cn(e.nextSibling),e===null))return null;return e}function _f(e){return e.data==="$?"||e.data==="$~"}function bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Z1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var s=function(){t(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ef=null;function Rm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return cn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Dm(e,t,n){switch(t=Fo(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function al(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ha(e)}var fn=new Map,Im=new Set;function Ko(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ti=Z.d;Z.d={f:J1,r:$1,D:W1,C:ev,L:tv,m:nv,X:sv,S:iv,M:av};function J1(){var e=Ti.f(),t=Ho();return e||t}function $1(e){var t=en(e);t!==null&&t.tag===5&&t.type==="form"?Qd(t):Ti.r(e)}var Fa=typeof document>"u"?null:document;function Mm(e,t,n){var s=Fa;if(s&&typeof t=="string"&&t){var u=Lt(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),Im.has(u)||(Im.add(u),e={rel:e,crossOrigin:n,href:t},s.querySelector(u)===null&&(t=s.createElement("link"),wt(t,"link",e),ut(t),s.head.appendChild(t)))}}function W1(e){Ti.D(e),Mm("dns-prefetch",e,null)}function ev(e,t){Ti.C(e,t),Mm("preconnect",e,t)}function tv(e,t,n){Ti.L(e,t,n);var s=Fa;if(s&&e&&t){var u='link[rel="preload"][as="'+Lt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+Lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+Lt(n.imageSizes)+'"]')):u+='[href="'+Lt(e)+'"]';var c=u;switch(t){case"style":c=Ka(e);break;case"script":c=Qa(e)}fn.has(c)||(e=j({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),fn.set(c,e),s.querySelector(u)!==null||t==="style"&&s.querySelector(rl(c))||t==="script"&&s.querySelector(ll(c))||(t=s.createElement("link"),wt(t,"link",e),ut(t),s.head.appendChild(t)))}}function nv(e,t){Ti.m(e,t);var n=Fa;if(n&&e){var s=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+Lt(s)+'"][href="'+Lt(e)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Qa(e)}if(!fn.has(c)&&(e=j({rel:"modulepreload",href:e},t),fn.set(c,e),n.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ll(c)))return}s=n.createElement("link"),wt(s,"link",e),ut(s),n.head.appendChild(s)}}}function iv(e,t,n){Ti.S(e,t,n);var s=Fa;if(s&&e){var u=kn(s).hoistableStyles,c=Ka(e);t=t||"default";var d=u.get(c);if(!d){var v={loading:0,preload:null};if(d=s.querySelector(rl(c)))v.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},n),(n=fn.get(c))&&Tf(e,n);var N=d=s.createElement("link");ut(N),wt(N,"link",e),N._p=new Promise(function(z,G){N.onload=z,N.onerror=G}),N.addEventListener("load",function(){v.loading|=1}),N.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Qo(d,t,s)}d={type:"stylesheet",instance:d,count:1,state:v},u.set(c,d)}}}function sv(e,t){Ti.X(e,t);var n=Fa;if(n&&e){var s=kn(n).hoistableScripts,u=Qa(e),c=s.get(u);c||(c=n.querySelector(ll(u)),c||(e=j({src:e,async:!0},t),(t=fn.get(u))&&Sf(e,t),c=n.createElement("script"),ut(c),wt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function av(e,t){Ti.M(e,t);var n=Fa;if(n&&e){var s=kn(n).hoistableScripts,u=Qa(e),c=s.get(u);c||(c=n.querySelector(ll(u)),c||(e=j({src:e,async:!0,type:"module"},t),(t=fn.get(u))&&Sf(e,t),c=n.createElement("script"),ut(c),wt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function jm(e,t,n,s){var u=(u=pe.current)?Ko(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ka(n.href),n=kn(u).hoistableStyles,s=n.get(t),s||(s={type:"style",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ka(n.href);var c=kn(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(rl(e)))&&!c._p&&(d.instance=c,d.state.loading=5),fn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},fn.set(e,n),c||rv(u,e,n,d.state))),t&&s===null)throw Error(o(528,""));return d}if(t&&s!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qa(n),n=kn(u).hoistableScripts,s=n.get(t),s||(s={type:"script",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ka(e){return'href="'+Lt(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function Um(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function rv(e,t,n,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),wt(t,"link",n),ut(t),e.head.appendChild(t))}function Qa(e){return'[src="'+Lt(e)+'"]'}function ll(e){return"script[async]"+e}function Lm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Lt(n.href)+'"]');if(s)return t.instance=s,ut(s),s;var u=j({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ut(s),wt(s,"style",u),Qo(s,n.precedence,e),t.instance=s;case"stylesheet":u=Ka(n.href);var c=e.querySelector(rl(u));if(c)return t.state.loading|=4,t.instance=c,ut(c),c;s=Um(n),(u=fn.get(u))&&Tf(s,u),c=(e.ownerDocument||e).createElement("link"),ut(c);var d=c;return d._p=new Promise(function(v,N){d.onload=v,d.onerror=N}),wt(c,"link",s),t.state.loading|=4,Qo(c,n.precedence,e),t.instance=c;case"script":return c=Qa(n.src),(u=e.querySelector(ll(c)))?(t.instance=u,ut(u),u):(s=n,(u=fn.get(c))&&(s=j({},n),Sf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),ut(u),wt(u,"link",s),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Qo(s,n.precedence,e));return t.instance}function Qo(e,t,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,d=0;d<s.length;d++){var v=s[d];if(v.dataset.precedence===t)c=v;else if(c!==u)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Tf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Sf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zo=null;function zm(e,t,n){if(Zo===null){var s=new Map,u=Zo=new Map;u.set(n,s)}else u=Zo,s=u.get(n),s||(s=new Map,u.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),u=0;u<n.length;u++){var c=n[u];if(!(c[Ln]||c[ot]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(t)||"";d=e+d;var v=s.get(d);v?v.push(c):s.set(d,[c])}}return s}function km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function lv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ov(e,t,n,s){if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Ka(s.href),c=t.querySelector(rl(u));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Jo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,ut(c);return}c=t.ownerDocument||t,s=Um(s),(u=fn.get(u))&&Tf(s,u),c=c.createElement("link"),ut(c);var d=c;d._p=new Promise(function(v,N){d.onload=v,d.onerror=N}),wt(c,"link",s),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Jo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var xf=0;function uv(e,t){return e.stylesheets&&e.count===0&&Wo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var s=setTimeout(function(){if(e.stylesheets&&Wo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&xf===0&&(xf=62500*G1());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>xf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Jo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $o=null;function Wo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$o=new Map,t.forEach(cv,e),$o=null,Jo.call(e))}function cv(e,t){if(!(t.state.loading&4)){var n=$o.get(e);if(n)var s=n.get(null);else{n=new Map,$o.set(e,n);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var d=u[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),s=d)}s&&n.set(null,s)}u=t.instance,d=u.getAttribute("data-precedence"),c=n.get(d)||s,c===s&&n.set(null,u),n.set(d,u),this.count++,s=Jo.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var ol={$$typeof:oe,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function fv(e,t,n,s,u,c,d,v,N){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.hiddenUpdates=jn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function qm(e,t,n,s,u,c,d,v,N,z,G,F){return e=new fv(e,t,n,d,N,z,G,F,v),t=1,c===!0&&(t|=24),c=Xt(3,null,null,t),e.current=c,c.stateNode=e,t=nc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:s,isDehydrated:n,cache:t},rc(c),e}function Bm(e){return e?(e=Na,e):Na}function Vm(e,t,n,s,u,c){u=Bm(u),s.context===null?s.context=u:s.pendingContext=u,s=Xi(t),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=Fi(e,s,t),n!==null&&(Vt(n,e,t),qr(n,e,t))}function Gm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Af(e,t){Gm(e,t),(e=e.alternate)&&Gm(e,t)}function Pm(e){if(e.tag===13||e.tag===31){var t=Us(e,67108864);t!==null&&Vt(t,e,67108864),Af(e,67108864)}}function Ym(e){if(e.tag===13||e.tag===31){var t=Jt();t=Ss(t);var n=Us(e,t);n!==null&&Vt(n,e,t),Af(e,t)}}var eu=!0;function hv(e,t,n,s){var u=V.T;V.T=null;var c=Z.p;try{Z.p=2,Nf(e,t,n,s)}finally{Z.p=c,V.T=u}}function dv(e,t,n,s){var u=V.T;V.T=null;var c=Z.p;try{Z.p=8,Nf(e,t,n,s)}finally{Z.p=c,V.T=u}}function Nf(e,t,n,s){if(eu){var u=wf(s);if(u===null)hf(e,t,s,tu,n),Fm(e,s);else if(mv(u,e,t,n,s))s.stopPropagation();else if(Fm(e,s),t&4&&-1<gv.indexOf(e)){for(;u!==null;){var c=en(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=In(c.pendingLanes);if(d!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var N=1<<31-rt(d);v.entanglements[1]|=N,d&=~N}Zn(c),(Ie&6)===0&&(zo=Dt()+500,nl(0))}}break;case 31:case 13:v=Us(c,2),v!==null&&Vt(v,c,2),Ho(),Af(c,2)}if(c=wf(s),c===null&&hf(e,t,s,tu,n),c===u)break;u=c}u!==null&&s.stopPropagation()}else hf(e,t,s,null,n)}}function wf(e){return e=tn(e),Cf(e)}var tu=null;function Cf(e){if(tu=null,e=zn(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=w(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tu=e,null}function Xm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bs()){case fr:return 2;case hr:return 8;case Di:case Iu:return 32;case Il:return 268435456;default:return 32}default:return 32}}var Rf=!1,ss=null,as=null,rs=null,ul=new Map,cl=new Map,ls=[],gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fm(e,t){switch(e){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(t.pointerId)}}function fl(e,t,n,s,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},t!==null&&(t=en(t),t!==null&&Pm(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function mv(e,t,n,s,u){switch(t){case"focusin":return ss=fl(ss,e,t,n,s,u),!0;case"dragenter":return as=fl(as,e,t,n,s,u),!0;case"mouseover":return rs=fl(rs,e,t,n,s,u),!0;case"pointerover":var c=u.pointerId;return ul.set(c,fl(ul.get(c)||null,e,t,n,s,u)),!0;case"gotpointercapture":return c=u.pointerId,cl.set(c,fl(cl.get(c)||null,e,t,n,s,u)),!0}return!1}function Km(e){var t=zn(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,mn(e.priority,function(){Ym(n)});return}}else if(t===31){if(t=w(n),t!==null){e.blockedOn=t,mn(e.priority,function(){Ym(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wf(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);xr=s,n.target.dispatchEvent(s),xr=null}else return t=en(n),t!==null&&Pm(t),e.blockedOn=n,!1;t.shift()}return!0}function Qm(e,t,n){nu(e)&&n.delete(t)}function pv(){Rf=!1,ss!==null&&nu(ss)&&(ss=null),as!==null&&nu(as)&&(as=null),rs!==null&&nu(rs)&&(rs=null),ul.forEach(Qm),cl.forEach(Qm)}function iu(e,t){e.blockedOn===t&&(e.blockedOn=null,Rf||(Rf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,pv)))}var su=null;function Zm(e){su!==e&&(su=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){su===e&&(su=null);for(var t=0;t<e.length;t+=3){var n=e[t],s=e[t+1],u=e[t+2];if(typeof s!="function"){if(Cf(s||n)===null)continue;break}var c=en(n);c!==null&&(e.splice(t,3),t-=3,Nc(c,{pending:!0,data:u,method:n.method,action:s},s,u))}}))}function Za(e){function t(N){return iu(N,e)}ss!==null&&iu(ss,e),as!==null&&iu(as,e),rs!==null&&iu(rs,e),ul.forEach(t),cl.forEach(t);for(var n=0;n<ls.length;n++){var s=ls[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ls.length&&(n=ls[0],n.blockedOn===null);)Km(n),n.blockedOn===null&&ls.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var u=n[s],c=n[s+1],d=u[_t]||null;if(typeof c=="function")d||Zm(n);else if(d){var v=null;if(c&&c.hasAttribute("formAction")){if(u=c,d=c[_t]||null)v=d.formAction;else if(Cf(u)!==null)continue}else v=d.action;typeof v=="function"?n[s+1]=v:(n.splice(s,3),s-=3),Zm(n)}}}function Jm(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return u=d})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),s||setTimeout(n,20)}function n(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function Of(e){this._internalRoot=e}au.prototype.render=Of.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,s=Jt();Vm(n,s,e,t,null,null)},au.prototype.unmount=Of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vm(e.current,2,null,e,null,null),Ho(),t[Un]=null}};function au(e){this._internalRoot=e}au.prototype.unstable_scheduleHydration=function(e){if(e){var t=kl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ls.length&&t!==0&&t<ls[n].priority;n++);ls.splice(n,0,e),n===0&&Km(e)}};var $m=i.version;if($m!=="19.2.1")throw Error(o(527,$m,"19.2.1"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=T(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var yv={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{dn=ru.inject(yv),Tt=ru}catch{}}return dl.createRoot=function(e,t){if(!f(e))throw Error(o(299));var n=!1,s="",u=ag,c=rg,d=lg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=qm(e,1,!1,null,null,n,s,null,u,c,d,Jm),e[Un]=t.current,ff(e),new Of(t)},dl.hydrateRoot=function(e,t,n){if(!f(e))throw Error(o(299));var s=!1,u="",c=ag,d=rg,v=lg,N=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(N=n.formState)),t=qm(e,1,!0,t,n??null,s,u,N,c,d,v,Jm),t.context=Bm(null),n=t.current,s=Jt(),s=Ss(s),u=Xi(s),u.callback=null,Fi(n,u,s),n=s,t.current.lanes=n,Ts(t,n),Zn(t),e[Un]=t.current,ff(e),new au(t)},dl.version="19.2.1",dl}var op;function Cv(){if(op)return Mf.exports;op=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Mf.exports=wv(),Mf.exports}var Rv=Cv();const Ov=d0(Rv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iv=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,o)=>o?o.toUpperCase():r.toLowerCase()),up=a=>{const i=Iv(a);return i.charAt(0).toUpperCase()+i.slice(1)},g0=(...a)=>a.filter((i,r,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===r).join(" ").trim(),Mv=a=>{for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ve.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:f="",children:g,iconNode:p,...w},x)=>ve.createElement("svg",{ref:x,...jv,width:i,height:i,stroke:a,strokeWidth:o?Number(r)*24/Number(i):r,className:g0("lucide",f),...!g&&!Mv(w)&&{"aria-hidden":"true"},...w},[...p.map(([T,P])=>ve.createElement(T,P)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(a,i)=>{const r=ve.forwardRef(({className:o,...f},g)=>ve.createElement(Uv,{ref:g,iconNode:i,className:g0(`lucide-${Dv(up(a))}`,`lucide-${a}`,o),...f}));return r.displayName=up(a),r};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zf=tt("check",Lv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],kv=tt("circle-alert",zv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],qv=tt("circle-check-big",Hv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],gl=tt("copy",Bv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Gv=tt("eye-off",Vv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Yv=tt("eye",Pv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Fv=tt("file-text",Xv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],Qv=tt("heart-pulse",Kv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Jv=tt("list",Zv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Wv=tt("lock",$v);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],t2=tt("log-out",e2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],i2=tt("plus",n2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],cp=tt("quote",s2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],r2=tt("refresh-cw",a2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],o2=tt("search",l2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],c2=tt("send",u2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],fp=tt("settings",f2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],d2=tt("share-2",h2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],m0=tt("square-pen",g2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],p2=tt("stethoscope",m2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],p0=tt("trash-2",y2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],y0=tt("x",v2);var Y=(a=>(a.SURGERY="SURGERY",a.WOMEN_PREGNANCY="WOMEN_PREGNANCY",a.ICU_DEATH="ICU_DEATH",a.FASTING_MEDICINE="FASTING_MEDICINE",a.ETHICS="ETHICS",a.GENETICS_REPRODUCTION="GENETICS_REPRODUCTION",a.TATTOO_CORTISONE="TATTOO_CORTISONE",a.PRAYER_PURITY="PRAYER_PURITY",a.MEDICAL_EXPERIMENTS="MEDICAL_EXPERIMENTS",a.PHARMACY_DRUGS="PHARMACY_DRUGS",a.MISCELLANEOUS="MISCELLANEOUS",a))(Y||{});const bl=[{id:Y.SURGERY,name:"الجراحة والتجميل",icon:"Scissors",color:"bg-blue-100 text-blue-600"},{id:Y.WOMEN_PREGNANCY,name:"قضايا تتعلق بالنساء والإنجاب والأسرة",icon:"Baby",color:"bg-pink-100 text-pink-600"},{id:Y.ICU_DEATH,name:"قضايا تتعلق بحالات العناية المركزة والموت",icon:"Activity",color:"bg-red-100 text-red-600"},{id:Y.FASTING_MEDICINE,name:"قضايا تتعلق بالصيام والأدوية",icon:"Moon",color:"bg-yellow-100 text-yellow-600"},{id:Y.ETHICS,name:"قضايا تتعلق بالأخلاقيات",icon:"Heart",color:"bg-green-100 text-green-600"},{id:Y.GENETICS_REPRODUCTION,name:"قضايا تتعلق بالإنجاب والجينات",icon:"Dna",color:"bg-purple-100 text-purple-600"},{id:Y.TATTOO_CORTISONE,name:"قضايا تتعلق بالوشم والاستخدام غير الطبي للكورتيزون",icon:"Zap",color:"bg-orange-100 text-orange-600"},{id:Y.PRAYER_PURITY,name:"قضايا تتعلق بالصلاة والطهارة",icon:"BookOpen",color:"bg-indigo-100 text-indigo-600"},{id:Y.MEDICAL_EXPERIMENTS,name:"قضايا تتعلق بالتجارب الطبية على الإنسان والحيوان",icon:"TestTube2",color:"bg-cyan-100 text-cyan-600"},{id:Y.PHARMACY_DRUGS,name:"قضايا الصيدلة والأدوية",icon:"Pill",color:"bg-lime-100 text-lime-600"},{id:Y.MISCELLANEOUS,name:"مسائل متنوعة",icon:"MoreHorizontal",color:"bg-gray-100 text-gray-600"}],_2=[{id:"surg_001_2025",category:Y.SURGERY,title:"الأحكام الشاملة لجراحات التجميل",question:"ما هو التفصيل الشرعي الكامل في إجراء عمليات التجميل (الضرورية والتحسينية)؟",medical_context:"plastic surgery, rhinoplasty, breast augmentation, liposuction, botox, fillers, reconstruction, cosmetic, burn",ruling:`أولاً: الجراحة التجميلية الضرورية (العلاجية):
جائزة شرعاً بإجماع الفقهاء. وهي ما يقصد بها:
1. إعادة العضو إلى شكله ووظيفته المعهودة (مثل إصلاح الشفة الأرنبية، أو اعوجاج الأنف الذي يمنع التنفس).
2. إزالة عيب طارئ ناتج عن حادث أو حريق أو مرض، يسبب ضرراً حسياً أو نفسياً شديداً للمريض.
الدليل: حديث عرفجة بن أسعد لما قطع أنفه يوم الكُلَاب، فأذن له النبي ﷺ أن يتخذ أنفاً من ذهب.

ثانياً: الجراحة التجميلية التحسينية (الكماليات):
محرمة شرعاً إذا كانت لمجرد زيادة الحسن وتغيير الخلقة المعهودة دون وجود عيب منفر، استجابة لهوس الموضة أو للتدليس (كتصغير الأنف السليم، أو نفخ الشفاه وتكبير الثدي لغير ضرورة، أو تغيير لون البشرة).
العلة: قوله تعالى: "وَلَآمُرَنَّهُمْ فَلَيُغَيِّرُنَّ خَلْقَ اللَّهِ"، ولأن فيها تغريراً وتدليساً، وتعريضاً للنفس للأخطار الطبية دون مسوغ شرعي.

ثالثاً: شفط الدهون وشد الترهلات:
جائز إذا كانت السمنة مفرطة (مرضية) تسبب ضرراً صحياً (كالسكري وضغط الدم) أو تعيق الحركة، فتأخذ حكم العلاج. أما إذا كانت لمجرد تنسيق القوام البسيط، فهي مكروهة أو محرمة بحسب الضرر المترتب عليها.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية (فتوى 2045) / قرار مجمع الفقه الإسلامي الدولي رقم 173 (2007)",tags:["تجميل","جراحة","تغيير خلق الله","شفط دهون"]},{id:"surg_002_2025",category:Y.SURGERY,title:"رتق غشاء البكارة (Hymenoplasty)",question:"ما حكم إجراء عملية رتق غشاء البكارة للفتاة (بسبب حادث أو غيره)؟ وهل يجوز للطبيب إجراؤها؟",medical_context:"hymenoplasty, virginity repair, hymen, concealment, satr, marriage",ruling:`أولاً: حكم العملية:
1. إذا كان التمزق بسبب حادث أو اغتصاب أو إكراه: يجوز إجراؤها وجوباً للستر على الفتاة ودفع الضرر عنها، وتيسيراً لزواجها.
2. إذا كان التمزق بسبب خطأ سابق (زنا) وتابت الفتاة توبة نصوحاً: يجوز إجراؤها أيضاً إعمالاً لمبدأ "الستر" الذي حثت عليه الشريعة الإسلامية، ولمنع إشاعة الفاحشة، ولعدم فضحها أمام زوجها وأهلها، فالإسلام يتشوف للستر لا للفضيحة.

ثانياً: واجب الطبيب:
يجوز للطبيب إجراء هذه العملية بنية الستر، ولا يعد ذلك اشتراكاً في الغش، لأن الزوج لم يشترط البكارة نصاً في العقد، ولأن الستر مطلوب. أما إذا كان يعلم أن الفتاة ستستخدم ذلك لتدليس متعمد لإسقاط حق مالي أو لغرض خبيث، فيمتنع.
والأصل العام: "من ستر مسلماً ستره الله في الدنيا والآخرة".`,verdict:"PERMITTED",source:"دار الإفتاء المصرية (أمانة الفتوى - د. علي جمعة) / بحث مجمع البحوث الإسلامية",tags:["بكارة","ستر","نساء","زواج"]},{id:"surg_003_2025",category:Y.SURGERY,title:"عمليات تصحيح الجنس وتحويل الجنس",question:"ما الفرق بين تصحيح الجنس (Intersex) وتحويل الجنس (Transgender)؟",medical_context:"gender reassignment, sex change, intersex, hermaphrodite, gender dysphoria",ruling:`1. عمليات تصحيح الجنس (للحنثى المشكل - Intersex):
جائزة وواجبة. وهي حالة الشخص الذي لديه أعضاء تناسلية غامضة أو مختلطة جينياً، فيجوز التدخل الجراحي والهرموني لإلحاقه بالجنس الذي تظهر عليه علاماته الغالبة (ذكراً أو أنثى). هذا يعتبر "علاجاً" وإظهاراً للخلقة الأصلية وليس تغييراً.

2. عمليات تحويل الجنس (Sex Change):
محرمة قطعاً وتعد من الكبائر. وهي إجراء عملية لشخص مكتمل الذكورة أو الأنوثة (جينياً وعضوياً) لتحويله للجنس الآخر بناءً على رغبة نفسية (مَيْل) فقط. هذا يدخل تحت "تغيير خلق الله" وتشبه بالجنس الآخر، وهو ملعون فاعله.`,verdict:"CONDITIONAL",source:"قرار مجمع الفقه الإسلامي الدولي رقم 43 (1989) / دار الإفتاء المصرية",tags:["جنس","خنثى","تحويل جنس"]},{id:"surg_004_2025",category:Y.SURGERY,title:"نقل وزراعة الأعضاء (الأحياء والأموات)",question:"ما هي الضوابط الشرعية الكاملة لنقل الأعضاء من الحي أو الميت؟",medical_context:"organ transplant, kidney, liver, brain death, donation, selling organs",ruling:`أولاً: النقل من الحي للحي:
جائز بشروط:
1. الضرورة: أن تكون الوسيلة الوحيدة لإنقاذ حياة المريض.
2. عدم الضرر: ألا يترتب على النقل ضرر محقق بالمتبرع يعطل حياته الطبيعية (مثل التبرع بكلية واحدة سليمة).
3. التبرع المحض: أن يكون بلا مقابل مادي (بيع الأعضاء حرام بإجماع لأنه امتهان لكرامة الآدمي).
4. الرضا التام: موافقة المتبرع دون إكراه.

ثانياً: النقل من الميت للحي:
جائز بشروط:
1. تحقق الموت شرعاً (يشمل موت جذع المخ بقرارات المجامع الفقهية).
2. وجود وصية من الميت قبل موته، أو موافقة ورثته بعد موته.
3. أن يكون العضو المنقول مما لا ينقل الصفات الوراثية (فلا يجوز نقل الخصية أو المبيض).`,verdict:"CONDITIONAL",source:"مجمع البحوث الإسلامية (قرار 2009) / مجمع الفقه الإسلامي (قرار رقم 26)",tags:["زراعة أعضاء","تبرع","بيع أعضاء","كلية"]},{id:"obgyn_001_2025",category:Y.WOMEN_PREGNANCY,title:"التلقيح الصناعي وأطفال الأنابيب",question:"ما هي الصور الجائزة والصور المحرمة في التلقيح الصناعي والحقن المجهري؟",medical_context:"IVF, ICSI, artificial insemination, sperm donation, egg donation, surrogacy",ruling:`أولاً: الصور الجائزة (صورتان فقط):
1. أن تؤخذ النطفة من الزوج والبويضة من الزوجة، ويتم التلقيح خارجياً ثم تزرع في رحم الزوجة نفسها (أثناء قيام الزوجية).
2. أن تحقن نطفة الزوج في رحم الزوجة مباشرة (التلقيح الصناعي).
الشرط: التأكد التام من عدم اختلاط العينات، وأن يتم ذلك أثناء حياة الزوجين واستمرار عقدهما.

ثانياً: الصور المحرمة (5 صور):
1. استخدام نطفة رجل غريب (متبرع).
2. استخدام بويضة امرأة غريبة (متبرعة).
3. استخدام رحم امرأة غريبة (تأجير الأرحام)، حتى لو كانت البويضة من الزوجة، لاختلاط الأنساب وتنازع الأمومة.
4. استخدام نطفة الزوج أو بويضة الزوجة بعد الوفاة أو الطلاق البائن.
5. التلقيح بين نطفة رجل وبويضة امرأة ليست زوجته (سفاح).`,verdict:"CONDITIONAL",source:"قرار مجمع الفقه الإسلامي الدولي رقم 16 (1986) / دار الإفتاء المصرية",tags:["حقن مجهري","عقم","أنساب","تبرع"]},{id:"obgyn_002_2025",category:Y.WOMEN_PREGNANCY,title:"أحكام الإجهاض حسب مدة الحمل",question:"ما هو الحكم الشرعي في إسقاط الجنين (الإجهاض) في مراحله المختلفة؟",medical_context:"abortion, pregnancy termination, fetus soul, 40 days, 120 days, congenital defects",ruling:`1. المرحلة الأولى (قبل 40 يوماً):
يجوز الإسقاط إذا كان هناك مبرر شرعي (مثل ضعف صحة الأم، أو تتابع الحمل بشكل يضر بتربية الأولاد)، ويكره لغير عذر.

2. المرحلة الثانية (من 40 إلى 120 يوماً - قبل نفخ الروح):
لا يجوز الإسقاط إلا لعذر طبي قاهر (خطر على صحة الأم) أو ثبوت تشوهات للجنين تجعل حياته غير مستقرة، وذلك بقرار لجنة طبية.

3. المرحلة الثالثة (بعد 120 يوماً - بعد نفخ الروح):
حرام قطعاً ويعد قتلاً للنفس (وأداً)، ولا يجوز في هذه المرحلة إلا في حالة واحدة فقط وهي "درء الخطر المحقق عن حياة الأم". أي: إذا قرر الأطباء أن استمرار الحمل سيؤدي يقيناً لوفاة الأم، هنا نضحي بالجنين لإنقاذ الأصل (الأم)، لأن حياتها متيقنة وحياة الجنين محتملة.
ملاحظة: التشوهات الخلقية (ولو كانت شديدة) بعد 120 يوماً ليست مبرراً للإجهاض عند جمهور الفقهاء المعاصرين، ما لم تهدد حياة الأم.`,verdict:"CONDITIONAL",source:"قرار هيئة كبار العلماء / دار الإفتاء المصرية / مجمع الفقه الإسلامي",tags:["إجهاض","حمل","روح","تشوهات"]},{id:"obgyn_003_2025",category:Y.WOMEN_PREGNANCY,title:"تحديد النسل وتنظيم الأسرة",question:"هل يجوز استخدام وسائل منع الحمل (اللولب، الحبوب)؟ وما حكم التعقيم النهائي؟",medical_context:"contraception, sterilization, vasectomy, tubal ligation, family planning",ruling:`1. تنظيم النسل (المؤقت):
جائز شرعاً باتفاق الزوجين، باستخدام وسائل آمنة (حبوب، لولب، عزل)، لتحقيق مباعدة بين الولادات أو لمصلحة راجحة، قياساً على "العزل" الذي كان يفعله الصحابة وأقرهم النبي ﷺ.

2. تحديد النسل (المنع المطلق):
غير جائز إذا كان بقانون عام يجبر الناس عليه، لأن تكثير النسل مقصد شرعي.

3. التعقيم النهائي (ربط المبايض أو قطع القناة الدافقة):
حرام شرعاً (لأنه قطع للنسل وتغيير للخلقة) إلا في حالات الضرورة الطبية القصوى، مثل أن يكون الحمل خطراً محققاً على حياة المرأة، أو وجود مرض وراثي خطير ينتقل للأولاد ولا علاج له.`,verdict:"CONDITIONAL",source:"مجمع البحوث الإسلامية / دار الإفتاء المصرية",tags:["منع حمل","تعقيم","تنظيم أسرة"]},{id:"obgyn_004_2025",category:Y.WOMEN_PREGNANCY,title:"أحكام الإجهاض حسب مراحل الحمل (Abortion)",question:"ما هو الحكم الشرعي التفصيلي للإجهاض حسب مدة الحمل والمراحل الجنينية؟",medical_context:"إجهاض، إنهاء الحمل، أسابيع الحمل، نفخ الروح، جنين",ruling:`الحكم في الإجهاض يختلف حسب مرحلة الحمل:

المرحلة الأولى: قبل 40 يوماً (تخلق العلقة):
- الحكم عند أكثر الفقهاء: يجوز إجهاض العلقة (الدم المتجمد) في الأسابيع الأولى
- التعليل: لأن الحياة لم تبدأ بعد بالمعنى الكامل (لا حركة، لا حس)
- الاستثناء: الأحوط تجنبه ما لم تكن هناك ضرورة

المرحلة الثانية: من 40 إلى 120 يوماً (تكون المضغة وتخلق العظام):
- الحكم: مكروه شديداً عند أكثر الفقهاء، والأحوط تجنبه
- التعليل: بدأت ملامح الحياة (تكون الأعضاء)
- الاستثناء: يجوز لعذر شرعي قوي (مرض الأم، تشوهات جسيمة في الجنين)

المرحلة الثالثة: بعد 120 يوماً (نفخ الروح):
- الحكم: حرام بإجماع الفقهاء
- التعليل: دخلت الروح وأصبح كائناً حياً مكتمل الذمة
- عقوبته: تعتبر جريمة قتل نفس
- الاستثناء الوحيد: إذا كان بقاء الحمل يهدد حياة الأم بالموت المحقق (الضرورة الشرعية)
  * في هذه الحالة يجوز إسقاط الجنين لإنقاذ حياة الأم (تطبيق قاعدة: الضرر الأكبر يدفع بالضرر الأصغر)

حالات خاصة مسموحة بالإجهاض حتى بعد نفخ الروح:
1. تعارض حياة الأم مع حياة الجنين → إنقاذ الأم
2. تشوهات جسيمة في الجنين غير متوافقة مع الحياة (كعدم تكون الدماغ) + قبل 120 يوم → جائز
3. الأمراض الوراثية الخطيرة جداً (تثالاسيميا، الهيموفيليا الحادة) + علم مسبق + قبل 120 يوم

الحكم الشرعي النهائي:
- قبل 120 يوم: مباح برخصة عند وجود عذر (أو في أول 40 يوم برخصة أكبر)
- بعد 120 يوم: حرام إلا لإنقاذ حياة الأم أو تشوهات حتمية

تحذير طبي-شرعي: الإجهاض المتكرر أو الاستخفافي حرام، والواجب على الطبيب التنبيه عليه.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + الشيخ جاد الحق علي جاد الحق",tags:["إجهاض","حمل","روح","مراحل","جنين"]},{id:"obgyn_005_2025",category:Y.WOMEN_PREGNANCY,title:"التلقيح الصناعي وأطفال الأنابيب (IVF)",question:"متى يجوز التلقيح الصناعي والحقن المجهري وأطفال الأنابيب؟ وما الصور المحرمة؟",medical_context:"IVF، ICSI، تلقيح صناعي، عقم، أنابيب، نطفة، بويضة",ruling:`التلقيح الصناعي نوعان من حيث الحكم:

الصور الجائزة (صورتان فقط):
1. التلقيح بين نطفة الزوج وبويضة الزوجة:
   - الحكم: جائز شرعاً عند الضرورة (وجود عقم)
   - الشروط:
     * قيام الزوجية بينهما (لا يجوز بعد الطلاق)
     * النطفة من الزوج والبويضة من الزوجة فقط (لا من غيرهما)
     * عدم استخدام وسيط ثالث (لا تأجير أرحام)

2. الحقن المجهري (ICSI) لعلاج ضعف الحيوانات المنوية:
   - الحكم: جائز (تطبيق لنفس قواعد IVF)
   - الشروط: ذات الشروط أعلاه

الصور المحرمة (ثلاث صور):
1. استخدام نطفة من رجل غير الزوج:
   - الحكم: حرام (يدخل في الزنا)
   - التعليل: مختلط النسب، والزنا حرام بالإجماع

2. استخدام بويضة من امرأة غير الزوجة:
   - الحكم: حرام (يدخل في الزنا)
   - التعليل: نفس التعليل أعلاه

3. تأجير رحم (Surrogacy):
   - الحكم: حرام (قرار مجمع الفقه الإسلامي)
   - التعليل: يؤدي إلى اختلاط الأنساب (من هي الأم؟ البويضة أم الرحم؟)
   - إضافة: فيه امتهان للمرأة بجعل رحمها سلعة، ودخول طرف ثالث في العملية التناسلية

حالات مستحدثة:
- تجميد الأجنة الزائدة: جائز (لاستخدام لاحق إذا أرادت الزوجة)
- استخدام الأجنة الزائدة بعد موت أحد الزوجين: حرام (لا زوجية)
- إتلاف الأجنة الزائدة: جائز (أقل شر من تركها تتحلل)

الحكم الشرعي النهائي: التلقيح بين الزوج والزوجة جائز شرعاً لعلاج العقم بدون وسطاء ثالثين.`,verdict:"CONDITIONAL",source:"فتوى الأزهر الشريف + مجمع الفقه الإسلامي الدولي",tags:["تلقيح","عقم","أنابيب","IVF","نسب"]},{id:"obgyn_006_2025",category:Y.WOMEN_PREGNANCY,title:"تأجير الأرحام / الأم البديلة (Surrogacy)",question:"ما حكم استئجار امرأة أخرى لحمل الجنين (الأم البديلة)؟",medical_context:"تأجير رحم، أم بديلة، surrogacy، حمل بالنيابة، نسب",ruling:`حكم تأجير الأرحام: حرام شرعاً وقطعياً

قرار مجمع الفقه الإسلامي (الدورة الخامسة):
تم تحريم هذه الممارسة بإجماع شبه كامل من المجمع (مع حفظ بعض الآراء النادرة).

الأسباب الشرعية للتحريم:

السبب الأول: اختلاط الأنساب:
- تُطرح أسئلة أساسية: من هي الأم من وجهة نظر الشرع؟
  * صاحبة البويضة (الأم الحقيقية)؟ أم
  * صاحبة الرحم (الأم البديلة)؟
- الشريعة تقول: "الولد للفراش" (الحامل هي الأم)
- لكن المقصد من الحمل (الوراثة الجينية) من الأب والأم الحقيقيين
- هذا التناقض يؤدي إلى اختلاط الأنساب وتعقيد الحقوق والواجبات

السبب الثاني: امتهان المرأة والرحم:
- تحويل الرحم إلى سلعة تجارية (Market Commodification)
- تجعل المرأة أداة إنجاب بدل كائن آدمي
- تحط من كرامة المرأة (الإسلام يحرم بيع الأعضاء لنفس السبب)
- استغلال المرأة الفقيرة (غالباً البديلة من النساء الفقيرات)

السبب الثالث: دخول طرف ثالث في العملية التناسلية:
- العملية التناسلية يجب أن تكون حصراً بين الزوجين
- الأم البديلة طرف ثالث (حتى لو بلا "علاقة جنسية")
- هذا يخالف الحكمة من تحريم الزنا والاختلاط

السبب الرابع: المضاعفات النفسية والقانونية:
- الأم البديلة قد ترفض تسليم الطفل
- الطفل قد يعاني من فقدان الأم الحقيقية
- المشاكل الإرثية والوصاية والحضانة معقدة جداً

التطبيق الحديث:
- في بعض الدول الإسلامية (مصر، السعودية): محظور قانوناً وشرعاً
- في دول أخرى (إيران): يسمح به الفقه الشيعي لكن بشروط معقدة
- في الدول الغربية: مسموح لكن مع نزاعات قانونية مستمرة

البديل الشرعي الجائز:
- اعتماد الطفل من يتيم (تبني الكفالة، ليس التبني الحقيقي)
- الدعاء والصبر (قد يرزق الله الزوجين بطفل طبيعي لاحقاً)

الحكم الشرعي القطعي: تأجير الأرحام حرام قطعياً بلا استثناء.`,verdict:"FORBIDDEN",source:"مجمع الفقه الإسلامي الدولي (القرار 173/52 الدورة الخامسة)",tags:["تأجير رحم","أم بديلة","نسب","حقوق","اختلاط"]},{id:"obgyn_007_2025",category:Y.WOMEN_PREGNANCY,title:"اختيار جنس الجنين (Gender Selection)",question:"هل يجوز تحديد نوع الجنين (ذكر أو أنثى) بالوسائل الطبية؟",medical_context:"اختيار جنس، تحديد جنس الجنين، PGD، فصل حيوانات منوية",ruling:`اختيار جنس الجنين يقبل تقسيماً:

الوسائل الطبيعية (غير التدخلية):
- مثال: اتباع أنماط غذائية معينة، توقيت الجماع حسب دورة الإباضة
- الحكم: جائز شرعاً
- التعليل: لا تدخل طبي حقيقي، فقط استفادة من سنن الله الكونية

الوسائل الطبية (التدخلية):
1. فصل الحيوانات المنوية (حسب جنس الجنين):
   - الحكم: جائز
   - التطبيق: استخدام الحيوانات التي ستنتج الذكور أو الإناث

2. اختيار الأجنة حسب الجنس (في حالة IVF):
   - الحكم: جائز على المستوى الفردي (Family Balancing)
   - المقصد: موازنة في البيت (عندهم 3 أولاد، يريدون بنت)
   - الشرط: ألا يؤدي إلى إتلاف أجنة سليمة بلا سبب
   - التحذير: لا يجوز كسياسة عامة (خاصة في مجتمع ينحاز لجنس على حساب الآخر)

3. اختيار الجنس لتجنب أمراض وراثية:
   - الحكم: جائز ومستحسن
   - المثال: أمراض الهيموفيليا أو الثلاسيميا المرتبطة بالجنس
   - التطبيق: اختيار الجنس الذي لن يورث المرض

القيود والضوابط الشرعية:

ضابط أول: لا تحويل هذا لتجارة أو سياسة عامة
- ممنوع: بيع خدمات اختيار الجنس بكميات كبيرة
- ممنوع: فرض اختيار جنس معين على السكان (كما حدث في بعض الدول)

ضابط ثاني: المحافظة على كيان الأجنة
- ممنوع: تدمير أجنة سليمة بدون ضرورة
- جائز: اختيار من بين أجنة موجودة

ضابط ثالث: عدم الإسراف:
- التعليل: الله يقول "وآتاكم من كل ما سألتموه"
- لا حاجة لإعادة محاولات IVF مراراً فقط لأجل اختيار جنس معين

التطبيق الحديث:
- الدول المتقدمة: تسمح بها مع قيود أخلاقية
- الدول الإسلامية: متفاوتة (بعضها يسمح، بعضها يمنع)
- الدعوة الشرعية: الاكتفاء بما يرزقه الله (ذكر أو أنثى)

الحكم الشرعي النهائي:
- جائز شرعاً للموازنة العائلية أو تجنب أمراض وراثية
- ممنوع كسياسة عامة أو لتحقيق نزعات جنسانية تمييزية
- الأفضل والأحوط: عدم التعلق بنوع معين والقناعة بما يرزقه الله تعالى.`,verdict:"CONDITIONAL",source:"د. محمود رأفت عثمان + مجمع البحوث الإسلامية",tags:["جنس الجنين","اختيار","ذكورة","أنوثة","أمراض وراثية"]},{id:"icu_001_2025",category:Y.ICU_DEATH,title:"الموت الدماغي ورفع أجهزة الإنعاش",question:"متى يعتبر المريض ميتاً؟ وهل يجوز رفع أجهزة الإعاشة عن الميت دماغياً؟",medical_context:"brain death, ventilator, life support, DNR, brain stem death",ruling:`أولاً: تعريف الموت شرعاً:
يعتبر الإنسان ميتاً وتترتب عليه جميع الأحكام الشرعية (العدة، الميراث) في إحدى حالتين:
1. توقف القلب والتنفس توقفاً تاماً وحكم الأطباء باستحالة عودتهما.
2. تعطل جميع وظائف الدماغ تعطلاً نهائياً (موت جذع المخ)، وحكم الأطباء المختصون بأن هذا التعطل لا رجعة فيه، حتى وإن كان القلب لا يزال ينبض آلياً بفعل الأجهزة.

ثانياً: رفع الأجهزة:
في حالة ثبوت "موت جذع المخ" بقرار لجنة ثلاثية، يجوز شرعاً رفع أجهزة الإنعاش الصناعي، لأن المريض في حكم الميت، والبقاء على الأجهزة مجرد إطالة لمظهر الحياة دون حقيقتها، وهذا لا يعتبر قتلاً للنفس بل هو إيقاف لعلاج غير مجدٍ.`,verdict:"PERMITTED",source:"قرار مجمع الفقه الإسلامي الدولي رقم 17 (1986) / مجمع البحوث الإسلامية",tags:["موت دماغي","إعاشة","أجهزة","وفاة"]},{id:"icu_002_2025",category:Y.ICU_DEATH,title:"قرار عدم الإنعاش (DNR)",question:"هل يجوز للأطباء اتخاذ قرار عدم الإنعاش القلبي الرئوي (Do Not Resuscitate)؟",medical_context:"DNR, CPR, resuscitation, terminal illness, cancer",ruling:`يجوز الامتناع عن إجراء الإنعاش القلبي الرئوي (CPR) في الحالات التالية:
1. إذا وصل المريض إلى حالة الاحتضار وتيقن الأطباء أن الإنعاش غير مجدٍ (Futile).
2. إذا كان المريض مصاباً بمرض مستعصٍ وميؤوس من شفائه (مثل السرطان المتأخر المنتشر) وكان الإنعاش سيعيد القلب للعمل لفترة قصيرة مع زيادة عذاب المريض دون أمل في الحياة.
شرط الفتوى: أن يكون القرار مبنياً على تقرير طبي جماعي (ثلاثة أطباء عدول) بأن الإنعاش سيضر ولا ينفع، ولا يعتبر ذلك قتلاً رحيماً، بل هو ترك للتداوي في حالة اليأس.`,verdict:"PERMITTED",source:"اللجنة الدائمة للفتوى (فتوى رقم 12086) / فتاوى المؤتمرات الطبية الفقهية",tags:["إنعاش","DNR","توقف القلب","احتضار"]},{id:"icu_003_2025",category:Y.ICU_DEATH,title:"القتل الرحيم (Euthanasia)",question:"ما حكم إنهاء حياة المريض عمداً لإراحته من الألم (القتل الرحيم)؟",medical_context:"euthanasia, mercy killing, assisted suicide, pain relief, morphine",ruling:`1. القتل الرحيم الإيجابي (Active Euthanasia):
وهو إعطاء المريض جرعة قاتلة أو حقنة هواء لإنهاء حياته، هو "حرام قطعاً" ويعد جريمة قتل عمد توجب القصاص، ولا يبرر ذلك شدة الألم ولا طلب المريض نفسه، لأن الحياة ملك لله.

2. القتل الرحيم السلبي (Passive Euthanasia):
إذا كان المقصود به "إيقاف العلاج" أو "عدم وضع أجهزة الإنعاش" لمريض ميؤوس من شفائه تماماً (كما في فتوى DNR)، فهذا "جائز" وليس قتلاً، لأنه امتناع عن تداوي غير واجب.

3. استخدام المسكنات القوية (المورفين):
يجوز إعطاء المسكنات لتخفيف الألم ولو أدى ذلك لتقصير العمر افتراضياً (كمضاعفات جانبية غير مقصودة)، بشرط أن تكون النية تسكين الألم لا قتل المريض (مبدأ الأثر المزدوج).`,verdict:"FORBIDDEN",source:"دار الإفتاء المصرية / مجمع الفقه الإسلامي",tags:["قتل رحيم","انتحار","ألم","مورفين"]},{id:"fast_001_2025",category:Y.FASTING_MEDICINE,title:"المفطرات الطبية في الصيام",question:"ما هي القائمة الكاملة للأدوية والإجراءات الطبية التي تفطر والتي لا تفطر؟",medical_context:"fasting, injections, inhalers, eye drops, ear drops, suppositories, endoscopy, dialysis, anesthesia",ruling:`أولاً: ما لا يفطر (يجوز للصائم):
1. قطرة العين والأذن (إذا لم يكن طبلة الأذن مثقوبة).
2. بخاخ الربو والأكسجين (عند كثير من الفقهاء المعاصرين، والبعض احتاط، لكن الفتوى للتيسير).
3. الحقن العلاجية بجميع أنواعها (جلدية، عضلية، وريدية) لأنها ليست أكلاً ولا شرباً.
4. الأقراص العلاجية تحت اللسان (للذبحة) إذا ابتلع ما يتحلل منها.
5. خلع الأسنان وتنظيفها (بشرط عدم بلع الدم).
6. التحاميل (اللبوس) والمنظار الشرجي (بدون سوائل).
7. التخدير الجزئي أو الكلي (إذا لم يستغرق اليوم كله).

ثانياً: ما يفطر (يفسد الصوم):
1. قطرة الأنف (إذا وصلت للحلق).
2. الحقن المغذية (الجلوكوز والفيتامينات الوريدية) لأنها بمعني الطعام والشراب.
3. الغسيل الكلوي (لأنه يختلط بسوائل مغذية).
4. منظار المعدة (إذا صاحبه إدخال سوائل أو مواد دهنية).
5. لبن الأم (إذا وصل لجوف الطفل، وهذا خاص بالطفل).`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (الدورة العاشرة - مفطرات الصيام المعاصرة)",tags:["صيام","مفطرات","بخاخ","حقن","غسيل كلى"]},{id:"fast_002_2025",category:Y.FASTING_MEDICINE,title:"التداوي بالمحرمات والنجاسات",question:"حكم الأدوية المحتوية على كحول أو جيلاتين خنزيري؟",medical_context:"alcohol in medicine, pork gelatin, heparin, insulin, porcine",ruling:`1. الكحول:
يجوز استخدام الأدوية التي تدخل فيها نسبة من الكحول لغرض الحفظ أو الإذابة، لأنها "مستهلكة" في الدواء ولا تسكر، والنجاسة تزول بالاستهلاك (رأي المجامع الفقهية).

2. مشتقات الخنزير (مثل الجيلاتين، الهيبارين، الأنسولين):
- الأصل التحريم.
- لكن يجوز التداوي بها في حالة "الضرورة" إذا لم يوجد بديل حلال مساوٍ لها في الفاعلية، وكان المرض خطيراً.
- يرى بعض العلماء (مثل نزيه حماد والاتحاد العالمي) أن الجيلاتين إذا عولج كيميائياً فقد حدثت له "استحالة" (تغير في الماهية) وصار طاهراً، والعمل على الجواز عند الحاجة.`,verdict:"CONDITIONAL",source:"ندوة المنظمة الإسلامية للعلوم الطبية (الكويت 1995) / دار الإفتاء المصرية",tags:["كحول","خنزير","أدوية","نجاسة"]},{id:"ethics_001_2025",category:Y.ETHICS,title:"كشف الطبيب على الجنس الآخر",question:"ما هي ضوابط كشف الطبيب الرجل على المرأة والعكس؟",medical_context:"male doctor, female patient, awrah, examination, privacy",ruling:`الأصل أن تطبب المرأةَ مرأةٌ مثلها، والرجلَ رجلٌ مثله. فإن لم يوجد، جاز الكشف من الجنس الآخر وفق الضوابط الشرعية الآتية:
1. الضرورة أو الحاجة الماسة (عدم وجود البديل المماثل أو الكفء).
2. عدم الخلوة المحرمة (وجود محرم أو ممرضة مؤتمنة).
3. الاقتصار على موضع المرض فقط (الضرورة تقدر بقدرها).
4. غض البصر ما أمكن.
وهذا جائز إجماعاً لأن حفظ النفس ورفع الألم مقصد ضروري مقدم على ستر العورة في هذه الحالة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / كتب الفقه (باب التداوي)",tags:["كشف","عورة","خلوة","طبيب"]},{id:"ethics_002_2025",category:Y.ETHICS,title:"إفشاء السر الطبي",question:"متى يجوز للطبيب إفشاء سر المريض؟",medical_context:"confidentiality, medical secrets, aids, infectious diseases, harm",ruling:`الأصل وجوب كتمان سر المريض، ويحرم إفشاؤه لأنه خيانة للأمانة، إلا في حالات استثنائية (يجوز أو يجب فيها الإفشاء) لدرء مفسدة أعظم:
1. الإبلاغ عن الأمراض المعدية السارية (مثل كورونا، الإيدز) لمنع الضرر عن المجتمع أو الزوجة.
2. إذا كان إخفاء السر يؤدي لجريمة قتل أو إيذاء (حماية للغير).
3. دفع تهمة عن الطبيب نفسه (دفاعاً عن النفس).
4. بأمر القاضي للشهادة.
القاعدة: "الضرر الخاص يتحمل لدفع الضرر العام".`,verdict:"CONDITIONAL",source:"ميثاق أخلاقيات الطبيب المسلم / قرارات المجامع الفقهية",tags:["سر طبي","أمانة","ضرر"]},{id:"ethics_003_2025",category:Y.ETHICS,title:"تشريح جثث الموتى",question:"هل يجوز تشريح الجثة للتعليم الطبي أو للبحث الجنائي؟",medical_context:"autopsy, dissection, forensic, medical education",ruling:`1. التشريح الجنائي:
جائز واجباً إذا أمرت به النيابة لمعرفة سبب الوفاة (في القضايا الجنائية) إحقاقاً للحق ومنعاً للظلم، لأن مصلحة العدل مقدمة على حرمة الميت.

2. التشريح التعليمي (لطلاب الطب):
جائز للضرورة العلمية لتعلم الطب وإنقاذ الأحياء مستقبلاً، بشرط ألا يكون للجثة معصوم (أو بإذن مسبق/تبرع)، وأن يقتصر على قدر الحاجة، مع وجوب احترام الأجزاء ودفنها بعد الانتهاء.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية / قرار هيئة كبار العلماء",tags:["تشريح","طب شرعي","تعليم"]},{id:"ethics_004_2025",category:Y.ETHICS,title:"حدود كشف العورة في العلاج والمداواة",question:"ما هي حدود العورة التي يجوز كشفها للطبيب أثناء العلاج والفحص الطبي؟",medical_context:"عورة، كشف، فحص طبي، ضرورة، ستر",ruling:`الأصل الفقهي الأول: وجوب ستر العورة:
- قال تعالى: "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ"
- النبي ﷺ قال: "العينان تزني وزناهما النظر"
- العورة تشمل في الحضر كل الجسد ما عدا الوجه والكفين

الأصل الفقهي الثاني: الضرورة تبيح المحظور:
- "الضرورات تبيح المحظورات" (قاعدة فقهية كبرى)
- "الضرورة تقدر بقدرها" (لا تتجاوز حد الحاجة)

التطبيق في العلاج:

المبدأ العام:
يجوز كشف العورة للطبيب عند الضرورة الطبية **بقدر الضرورة فقط**. لا يكشف إلا موضع المرض والأعضاء الضرورية للفحص الطبي.

الضوابط الشرعية الواجبة:

ضابط أول: غض البصر:
- الطبيب يجب أن يغض بصره عما سوى موضع المرض
- لا ينظر لأعضاء صحية بدون حاجة طبية
- النية والتركيز على العلاج فقط

ضابط ثاني: التغطية الجزئية:
- تغطية كل ما يمكن تغطيته من الجسد
- كشف فقط موضع الفحص الضروري
- تغطيته مباشرة بعد الانتهاء من الفحص

ضابط ثالث: التوقيت الضروري:
- كشف العورة فقط أثناء الفحص الطبي
- لا يجوز كشفها قبل الحاجة أو بعدها
- الفحص بسرعة معقولة بدون تأخير غير ضروري

ضابط رابع: عدم الخلوة:
- عند الإمكان: وجود ممرضة أو محرم
- إذا تعذر وجود محرم: ممرضة على الأقل
- في بعض الفحوصات (النسائية): وجود ممرضة ضروري

حالات خاصة:

الحالة الأولى: الفحص الطبي البسيط:
- فحص الحلق، السمع، الرئتين: يجوز مع الحفاظ على الستر
- كشف الصدر للاستماع برطم الصدر: يجوز لكن مع تغطية ما يمكن

الحالة الثانية: الفحوصات النسائية:
- الحامل: يجوز فحص الحمل (الفحص الداخلي بالدوبلر أو الأصابع) بضرورة
- متلازمة ما قبل الحيض: يجوز للفحص والتشخيص
- العقم: يجوز التشخيص بالضرورة

الحالة الثالثة: الجراحة:
- يجوز كشف كل الجسد إذا كانت الجراحة تتطلب ذلك
- التعليل: تنقذ الحياة
- الشرط: أمن الفتنة والنية النقية
- ويكون الترتيب في الأولوية كالآتي: طبيبة مسلمة ثم طبيبة غير مسلمة ثم طبيب مسلم ثم طبيب غير مسلم

حالات ممنوعة:

- لا يجوز كشف العورة بدون ضرورة طبية حقيقية
- لا يجوز للطبيب النظر لعورة المريض بدون حاجة
- لا يجوز تأخير التشخيص حجة في كشف أكثر مما لزم

الحكم الشرعي:
يجوز كشف العورة للطبيب عند الضرورة الطبية **بقدر الحاجة فقط**، مع غض البصر، والاحتشام، وعدم الخلوة (عند الإمكان).`,verdict:"CONDITIONAL",source:"كتب الفقه (المغني، المجموع) + الفتاوى الطبية المعاصرة",tags:["عورة","كشف","ضرورة","فحص طبي","ستر","احتشام"]},{id:"ethics_005_2025",category:Y.ETHICS,title:"معالجة الطبيب الذكر للمريضة الأنثى والعكس",question:"هل يجوز أن يعالج الطبيب الرجل مريضة امرأة، وهل يجوز العكس؟",medical_context:"طبيب ذكر، مريضة أنثى، معالجة، خلوة، محرم، فتنة",ruling:`الأصل الفقهي الأول: تفضيل المماثل:
- الأصل أن تعالج المرأةُ المرأةَ، والرجلُ الرجلَ
- النبي ﷺ: "لا ينظر الرجل إلى عورة المرأة إلا لضرورة"
- المرأة أيضاً لا تنظر لعورة الرجل إلا لضرورة

الأصل الفقهي الثاني: الضرورة تبيح الخلاف:
- "الضرورات تبيح المحظورات"
- عند فقدان المماثل: يجوز العلاج من الجنس الآخر بشروط

الحالات الثلاث:

الحالة الأولى: وجود طبيب/طبيبة مماثل مختص:
- الواجب: الذهاب للمماثل (إن كانت الحالة غير طارئة)
- السبب: تجنب الخلوة والتعريض للفتنة
- الدرجة: واجب أو مستحب بقوة

الحالة الثانية: عدم وجود مماثل أو الطارئة:
- الحكم: يجوز العلاج من الجنس الآخر عند الضرورة
- الشروط الواجبة (4 شروط):
  1. عدم الخلوة: وجود محرم أو ممرضة (على الأقل شاهد)
  2. كشف موضع المرض فقط: لا كشف إضافي
  3. غض البصر: خاصة عن العورات
  4. عدم الخضوع بالقول: لا حديث رومانسي أو عاطفي

الحالة الثالثة: الطبيب غير المختص لكن متوفر:
- إذا كان الطبيب الآخر (من الجنس الآخر) أكثر كفاءة: يجوز له
- الشروط: نفس الشروط أعلاه
- التعليل: حفظ الصحة مقدم على غيره

التفاصيل العملية:

الفحص المباشر:
- الطبيب الذكر يفحص المريضة الأنثى: يجوز لكن مع ممرضة
- الطبيبة تفحص المريض الذكر: يجوز لكن مع التوقير
- الحساسية: القطاع النسائي أكثر حساسية (ستر المرأة أشد)

الحالات الطارئة:
- حادث أو مرض حاد: لا يشترط المماثل (الحياة أهم)
- الغيبوبة: يجوز أي طبيب متاح
- الإنعاش: الضرورة واضحة

حالات خاصة:

الأمراض النسائية (النسائية والتوليد):
- طبيبة نسائية: الأصل (لا يوجد عادة رجل يتخصص فيها)
- طبيب ذكر بدون طبيبة: يجوز لكن مع ممرضة
- الفحص الداخلي: يجب أن تكون هناك ممرضة حاضرة دائماً

الأمراض الجلدية:
- تتضمن كشف مناطق مختلفة من الجسد
- يجوز معالجة المريضة الأنثى من طبيب ذكر لكن:
  * مع ممرضة
  * كشف موضع المرض فقط
  * تغطية باقي الجسد

الجراحة:
- تتطلب كشف كامل الجسد عادة
- يجوز حتى من جنس مختلف (الحياة مقدمة)
- الشرط الأساسي: النية الطبية البحتة

الحكم الشرعي:
يجوز لطبيب ذكر معالجة مريضة أنثى (والعكس) عند الضرورة أو عدم وجود مختص مماثل، بشروط صارمة: عدم الخلوة، كشف موضع المرض فقط، غض البصر، وعدم الخضوع بالقول. الأصل الالتزام بالمماثل عند الإمكان.`,verdict:"CONDITIONAL",source:"كتب الفقه الإسلامي + أبو الخير نشأت + الفتاوى الطبية المعاصرة",tags:["طبيب","مريضة","خلوة","علاج","محرم","ممرضة","فتنة"]},{id:"genetic_001_2025",category:Y.GENETICS_REPRODUCTION,title:"تجميد البويضات",question:"ما حكم تجميد البويضات للنساء لتأخير الحمل (للزواج المتأخر أو قبل العلاج الكيماوي)؟",medical_context:"egg freezing, cryopreservation, oocyte preservation, social freezing, medical freezing",ruling:`الحكم: جائز بضوابط شرعية صارمة.

السياق الطبي: تلجأ النساء لهذه العملية إما لتأخر سن الزواج (الخوف من انخفاض الخصوبة مع التقدم في العمر) أو قبل الخضوع لعلاج كيماوي قد يؤثر على المبايض.

الضوابط الشرعية:
1. أمن الاختلاط: يجب ضمانات إجرائية صارمة في المعامل لمنع استبدال العينات أو اختلاط النسب.
2. مشروعية الاستخدام: لا يجوز استخدام البويضات المجمدة إلا للتلقيح من حيوان منوي لزوج شرعي بعقد صحيح قائم لحظة التلقيح.
3. عدم البيع: لا يجوز التبرع بها أو بيعها لأخريات (الأعضاء والخلايا الإنسانية ليست محلاً للتجارة).
4. الحكم ينطبق أيضاً على تجميد الحيوانات المنوية والأجنة المخصبة.

تطور الموقف: أصدرت دار الإفتاء المصرية فتاوى حديثة (2015 وما بعده) تبيح هذه العملية لأنها "تسليط وسيلة آمنة لحفظ الخصوبة" دون تجاوز الحدود الشرعية.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية (فتوى 2015 والفتاوى اللاحقة) / مركز الأزهر العالمي للفتوى الإلكترونية",tags:["بويضات","تجميد","عقم","حصوبة"]},{id:"genetic_002_2025",category:Y.GENETICS_REPRODUCTION,title:"تحديد جنس الجنين",question:"هل يجوز التدخل الطبي لاختيار جنس الجنين (ذكر أو أنثى)؟",medical_context:"sex selection, gender choice, PGD, sperm sorting, family balancing",ruling:`الفتوى: جائز بضوابط تفصيلية.

طرق التحديد:
1. فصل الحيوانات المنوية (تقنية Sperm Sorting).
2. التشخيص الوراثي للأجنة قبل الزرع (PGD - Pre-implantation Genetic Diagnosis).

حالات الجواز:
1. الجنس الطبي: إذا كان الدافع "علاجياً" لتجنب أمراض وراثية مرتبطة بجنس معين (مثل الهيموفيليا التي تصيب الذكور بشكل أساسي). هذا "واجب" إذا أمكن تجنب المرض.
2. توازن الأسرة (Family Balancing): إذا كان لدى الأسرة عدة أطفال من جنس واحد وترغب في الحصول على طفل من الجنس الآخر لتحقيق التوازن الأسري، يجوز ذلك بشرط:
   - أن يكون الدافع عدم الرغبة في زيادة عدد أطفال من نفس الجنس (لا كراهية الإناث).
   - ألا يتحول إلى سياسة عامة تخل بالتوازن الديموغرافي في المجتمع.

الموقف من كراهية الإناث: إذا كان الدافع كراهية الإناث أو تفضيل الذكور تفضيلاً صريحاً (ظاهرة جاهلية)، فالعملية حرام.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (القرار 102) / قرار دار الإفتاء المصرية الحديث",tags:["جنس الجنين","اختيار جنس","وراثة"]},{id:"genetic_003_2025",category:Y.GENETICS_REPRODUCTION,title:"البصمة الوراثية (DNA) وإثبات النسب",question:"ما حكم استخدام تحليل DNA لإثبات النسب أو نفيه؟",medical_context:"DNA, genetic fingerprint, paternity test, parentage verification, switched babies",ruling:`الحكم: جائز لإثبات النسب في حالات محددة، ومحرم لنفي النسب الثابت.

حالات الإثبات الجائزة:
1. نسب الطفل مجهول الأبوين (اللقيط).
2. إثبات نسب الطفل المشكوك فيه عند الاشتباه في المستشفى (تبديل المواليد).
3. التعرف على الجثث والمفقودين.
4. في قضايا الاغتصاب وإثبات الجريمة.

حالات النفي المحرمة:
يحرم استخدام DNA لنفي نسب "ثابت شرعاً بالفراش" (أي الطفل المولود لزوجين في عقد زواج صحيح). فالشريعة الإسلامية تتشوف لستر الأعراض وإثبات الأنساب، ولا تفتح باب الطعن في الأنساب المستقرة لمجرد الشك، إلا في إجراءات "اللعان" القضائية.

التعليل الشرعي: الشرع يفضل استقرار النسب على الدقة العلمية البحتة لحماية الأسرة والمجتمع من الفوضى.

مبدأ المؤسسات المصرية: ترى دار الإفتاء ومجمع الفقه أن البصمة الوراثية "قرينة قوية تكاد تصل لليقين"، لكن الحكم الشرعي أقوى من القرينة العلمية.`,verdict:"CONDITIONAL",source:"قرار مجمع الفقه الإسلامي الدولي (القرار 71) / دار الإفتاء المصرية",tags:["بصمة وراثية","نسب","DNA"]},{id:"genetic_004_2025",category:Y.GENETICS_REPRODUCTION,title:"تأجير الأرحام (Surrogacy)",question:"ما حكم استئجار امرأة أخرى لتحمل جنيناً من بويضة الزوجة وحيوان منوي الزوج؟",medical_context:"surrogacy, gestational carrier, womb rental, gestational mother, genetic mother",ruling:`الحكم: محرم قطعاً بجميع صوره (سواء تبرعاً أم بمقابل مالي).

الموقف الموحد: اتفقت دار الإفتاء المصرية، ومركز الأزهر للفتوى، ومجمع الفقه الإسلامي الدولي على تحريم تأجير الأرحام بشكل قاطع، وعدم جواز هذه العملية تحت أي ظرف.

العلل الفقهية للتحريم:
1. اختلاط الأنساب: يحدث تضارب بين "الأمومة الجينية" (صاحبة البويضة - الأصلية) و"الأمومة الحملية" (صاحبة الرحم - البديلة)، والقرآن الكريم يقول {إِنْ أُمَّهَاتُهُمْ إِلَّا اللَّائِي وَلَدْنَهُمْ}، فالأم الشرعية هي التي تحمل وتلد، لا التي توفر البويضة فقط.
2. امتهان المرأة: تحويل رحم المرأة إلى سلعة للإيجار ينتقص من كرامتها الإنسانية.
3. انتهاك الأسرة: فتح باب للمشاكل الاجتماعية (تعلق الأم البديلة بالطفل، نزاعات حول التسليم، انتشار الأسر البديلة).
4. الاتجار بالبشر: يعتبر شكلاً من أشكال الاتجار بالأعضاء والبشر المحرم قطعاً.

القاعدة الشرعية: "الحاجة لا تبيح المحرم، والاضطرار قد يبيح بعض المحرمات لكن ليس كل مما تخالف فيه مصلحة الأسرة والمجتمع".`,verdict:"FORBIDDEN",source:"قرار مجمع الفقه الإسلامي الدولي رقم 15 (1986) / دار الإفتاء المصرية (فتوى 11804)",tags:["تأجير أرحام","surrogacy","نساء","عقم"]},{id:"genetic_005_2025",category:Y.GENETICS_REPRODUCTION,title:"الأمراض الوراثية والتدخل الجيني",question:"هل يجوز اختيار الأجنة السليمة وترك الأجنة المريضة وراثياً عند الإخصاب؟",medical_context:"genetic diseases, hereditary disorders, PGD, sickle cell, cystic fibrosis, hemophilia",ruling:`الحكم: جائز (بل قد يكون مستحباً) اختيار الأجنة السليمة وترك المريضة، بشروط:

الشروط الشرعية:
1. أن يكون المرض الوراثي "خطيراً" يسبب معاناة شديدة للمريض أو يختصر عمره بشكل محقق (مثل الثلاسيميا الكبرى، الهيموفيليا، التليف الكيسي).
2. أن يكون المرض "موروثاً محتماً" (جينياً)، بناءً على فحص وراثي دقيق.
3. أن يتم اختيار الأجنة السليمة باستخدام تقنية التشخيص الوراثي قبل الزرع (PGD) وليس بإجهاض الأجنة بعد تكونها.
4. أن تكون القرارات مدعومة بطبيب متخصص ولجنة أخلاقيات.

المنع المطلق: لا يجوز اختيار الأجنة بناءً على "صفات" غير مرضية (مثل لون العين أو الذكاء المتوقع)، لأن هذا من باب تعديل الخلقة بلا عذر شرعي.

التعليل: حفظ النسل والصحة مقصد ضروري من مقاصد الشريعة، والوقاية من الأمراض الخطيرة أولى من مجرد الإنجاب.`,verdict:"PERMITTED",source:"مجمع الفقه الإسلامي الدولي / قرارات دار الإفتاء المصرية المتعلقة بالهندسة الوراثية",tags:["أمراض وراثية","جينات","PGD","وراثة"]},{id:"tattoo_001_2025",category:Y.TATTOO_CORTISONE,title:"إزالة الوشم (Tattoo Removal)",question:"هل يجوز لمن تاب عن الوشم أن يزيله بالليزر أو الجراحة؟",medical_context:"tattoo, laser removal, dermatology, repentance, sin",ruling:`الحكم: جائز (بل قد يكون مستحباً) إزالة الوشم للتائب الندِم.

التفصيل:
1. الوشم نفسه (التطعيم): محرم شرعاً، والنبي ﷺ لعن "الواشمة والمستوشمة".
2. إزالة الوشم: جائزة بجميع الوسائل الطبية الآمنة (ليزر، تقشير، جراحة)، لأن فيه "توبة" و"إصلاح" للخطأ السابق.
3. للتائب: إن كان يود التخلص من آثار ذنبه السابق فذلك مستحب لأجل قوله تعالى: {إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ}.`,verdict:"PERMITTED",source:"فتاوى الفقهاء المعاصرين / دار الإفتاء المصرية",tags:["وشم","وشم دائم","توبة"]},{id:"tattoo_002_2025",category:Y.TATTOO_CORTISONE,title:"تفتيح البشرة (Skin Lightening)",question:"ما حكم استخدام المراهم والعمليات لتفتيح لون البشرة؟",medical_context:"skin lightening, bleaching cream, melanin reduction, cosmetic",ruling:`الحكم: محرم الاستخدام لمجرد التجميل والموضة.

التفصيل:
1. إذا كان للتفتيح لسبب طبي (علاج التصبغات المفرطة التي تسبب حرجاً أو مرضاً جلدياً): جائز.
2. إذا كان للتفتيح لتغيير لون البشرة الطبيعي لمجرد الموضة أو "محاكاة جمالية": محرم، لأنه:
   - تغيير لخلق الله.
   - فيه ظاهرة "الاستعمار الثقافي" والنظر للبشرة البيضاء كمعيار جمال.
   - قد يسبب أضراراً صحية (السرطان، التسمم بالزئبق في بعض المراهم).

التحذير: كثير من كريمات تفتيح البشرة تحتوي على "الزئبق" و"الكورتيزون" بتركيزات عالية وخطيرة، وهي محرمة شرعاً وطبياً.`,verdict:"FORBIDDEN",source:"فتاوى معاصرة / توصيات منظمة الصحة العالمية",tags:["جلد","تفتيح بشرة","تجميل"]},{id:"prayer_001_2025",category:Y.PRAYER_PURITY,title:"صلاة المريض والأوضاع المختلفة",question:"كيف يصلي المريض الذي لا يستطيع الوقوف أو الركوع أو السجود؟",medical_context:"prayer positions, disabled, wheelchair, bedridden, standing, sitting",ruling:`القاعدة الشرعية: "صلِّ قائماً، فإن لم تستطع فقاعداً، فإن لم تستطع فعلى جنب" (حديث صحيح).

الأوضاع المختلفة:
1. القيام: الأصل والأفضل.
2. الجلوس: إذا عجز عن القيام (بسبب جراحة أو مرض أو إصابة).
3. الاضطجاع (الاستلقاء): إذا عجز عن الجلوس (في حالات المرض الشديد).
4. الإيماء: إذا عجز عن الحركة، فيومئ برأسه (السجود أخفض من الركوع).
5. الصلاة على الكرسي: أجاز الأزهر صلاة المريض على الكرسي مع الإيماء بالركوع والسجود.

الترتيب الواجب في الحركات:
- الركوع والسجود: يجب الإتيان بهما ولو بإيماءة (حتى لو تطلب حركة بسيطة).
- إذا عجز عن السجود تماماً: يومئ به، والسجود الإيمائي أخفض من الركوع الإيمائي (تعظيماً للسجود).

حالات العذر:
يسقط الفرض بالكلية في حالات العجز التام (مثل الغيبوبة)، لكن يجب قضاء الصلاة بعد الشفاء إن كان الغياب مؤقتاً.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي / دار الإفتاء المصرية / الأحاديث الصحيحة",tags:["صلاة","مريض","عجز","حركة"]},{id:"prayer_002_2025",category:Y.PRAYER_PURITY,title:"الطهارة للمريض والمسح على الجبيرة",question:"كيف يتوضأ المريض الذي لا يستطيع غسل أطرافه (جبيرة، حروق، جروح)؟",medical_context:"ablution, wudu, splint, bandage, wounds, burns, tayammum",ruling:`الحكم: يجوز المسح على الجبيرة (الجبس أو الضمادات الطبية) بدلاً من الغسل.

الشروط:
1. أن تكون الجبيرة على عضو من أعضاء الوضوء (اليدين والرجلين والوجه).
2. أن يكون هناك عذر شرعي (جرح، حريق، كسر، مرض جلدي معدٍ).
3. المسح الخفيف على الجبيرة بحيث "تمر اليد عليها".
4. لا يشترط نزع الجبيرة للتأكد من نظافة ما تحتها (دفعاً للضرر).

التيمم: إذا أصيب الوجه والكفان بحروق شديدة تمنع الغسل، ينتقل للتيمم (الضرب على التراب ثم المسح).

حالة خاصة: الطهارة النجاسة (الاستنجاء):
إذا كان المريض عاجزاً عن الاستنجاء (الغسل بالماء بعد قضاء الحاجة)، يجوز استخدام المناديل الرطبة أو الجاف بدلاً منه، أو طلب مساعدة من المريض.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / كتب الفقه (باب الطهارة)",tags:["وضوء","جبيرة","مسح","حروق"]},{id:"prayer_003_2025",category:Y.PRAYER_PURITY,title:"الفطر في الصيام للمريض والمسافر",question:"من يجوز لهم الفطر والإفطار في رمضان؟",medical_context:"fasting, illness, travel, exemption, makeup days, kuffara",ruling:`الفئات المعفوة من الصيام (مع وجوب القضاء):
1. المريض: الذي يضره الصوم أو يشدد عليه المرض (بقرار طبي أو شعور المريض).
2. المسافر: السفر فوق مسافة معينة (تقديرات تختلف من 80 إلى 90 كم).
3. الحامل والمرضع: إذا خافتا على نفسهما أو على الجنين/الرضيع.

الأحكام:
- الفطر: يجوز بمجرد العذر (لا يشترط الشدة الزائدة).
- القضاء: واجب في أيام أخرى من السنة.
- الكفارة: لا تجب للمعذور (الفطر بعذر ليس معصية).

الحالات الاستثنائية:
- الشيخ الكبير والعجوز: إذا كانا لا يطيقان الصوم: يفطران بدون قضاء، لكن يطعمان عن كل يوم مسكيناً (إطعام بدل).
- المريض المزمن: الذي لا يُرجى شفاؤه (مثل السرطان المتأخر): يفطر بدون قضاء، ويكفيه الإطعام.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / مجمع الفقه الإسلامي",tags:["صيام","رمضان","مريض","فطر","سفر"]},{id:"prayer_004_2025",category:Y.PRAYER_PURITY,title:"رخصة جمع الصلاة: التأصيل الفقهي لحديث ابن عباس",question:"ما هو أساس جواز جمع الصلاة للطبيب من النصوص الشرعية؟",medical_context:"جمع الصلاة، الحرج، المشقة، وقت الصلاة، عذر، ضرورة",ruling:`يستند جواز جمع الصلاة للطبيب على حديث ابن عباس الصحيح الذي أخرجه الإمام مسلم:
"جمع رسول الله صلى الله عليه وسلم بين الظهر والعصر، والمغرب والعشاء بالمدينة، من غير خوف ولا مطر"

عندما سُئل ابن عباس عن السبب، أجاب بإجابة مقاصدية: "أراد أن لا يحرج أمته"

الفائدة الأساسية: العلة في جواز الجمع ليست محصورة في "السفر" فحسب، بل العلة الحقيقية هي "دفع الحرج". بناءً عليه، كل ما يؤدي إلى حرج شديد ومشقة بالغة في أداء الصلاة في وقتها، يجوز معه الجمع.

التطبيق على الأطباء: العمل الطبي المعقد (الجراحات الطويلة، أوبئة، عزل) يقع في قلب هذا المفهوم الفقهي.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية + مجمع البحوث الإسلامية + مركز الأزهر العالمي للفتوى",tags:["صلاة","جمع","طبيب","حديث ابن عباس","مشقة"]},{id:"prayer_005_2025",category:Y.PRAYER_PURITY,title:"قاعدة المشقة تجلب التيسير وتطبيقاتها الطبية",question:'كيف تطبق القاعدة الفقهية "المشقة تجلب التيسير" على عمل الطبيب والممرضة؟',medical_context:"قاعدة فقهية، مشقة، تيسير، عملية جراحية، طهارة، وضوء، تركيز",ruling:`قاعدة "المشقة تجلب التيسير" من القواعد الخمس الكبرى التي يبنى عليها الفقه الإسلامي. في الواقع الطبي، تتجسد المشقة في صور متعددة:

1. استغراق الوقت: العمليات الجراحية التي تمتد لـ 6 أو 8 ساعات أو أكثر، وتستغرق وقتي الظهر والعصر معاً، أو المغرب والعشاء.

2. صعوبة الطهارة: في حالات الأوبئة (مثل كورونا)، حيث يرتدي الطبيب ملابس عزل كاملة (PPE)، ويشق عليه خلعها للوضوء لكل صلاة ثم لبسها مرة أخرى، لما في ذلك من مشقة بدنية، وخطر صحي، وتكلفة مالية.

3. الضغط النفسي والذهني: تركيز الطبيب في الجراحة أو العناية المركزة يتطلب صفاءً ذهنياً، والقلق بشأن فوات وقت الصلاة قد يشتت هذا التركيز، مما يؤثر على سلامة المريض.

الحكم النهائي: المشقة في العمل الطبي تبيح الجمع بين الصلوات.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية + دار الإفتاء المصرية",tags:["قاعدة فقهية","مشقة","تيسير","طبيب","جراحة"]},{id:"prayer_006_2025",category:Y.PRAYER_PURITY,title:"موازنة حفظ الدين بحفظ النفس عند الطبيب",question:"إذا تعارض التزام الطبيب بوقت الصلاة مع سلامة المريض، أيهما يقدم؟",medical_context:"مقاصد الشريعة، حفظ الدين، حفظ النفس، موازنة فقهية، أولويات",ruling:`مقاصد الشريعة الإسلامية تقوم على حفظ الضرورات الخمس: الدين، النفس، العقل، النسل، والمال.

عندما يحدث تعارض ظاهري بين "حفظ الدين" (أداء الصلاة في وقتها المحدد) و"حفظ النفس" (استمرار العملية الجراحية لإنقاذ المريض)، فإن الشريعة تقدم حفظ النفس في هذه الجزئية الفقهية.

التعليل: النفس إذا تلفت لا تعوض، بينما الصلاة يمكن تداركها عبر رخصة الجمع التي شرعها الله تعالى.

الخلاصة الأخلاقية: الطبيب الذي يجمع الصلاة لينقذ مريضاً هو في عبادة (إنقاذ النفس) ويمارس رخصة شرعية في عبادة أخرى (الصلاة)، فهو مأجور من الجهتين معاً.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور شوقي علام",tags:["مقاصد شريعة","حفظ النفس","حفظ الدين","طبيب","جراحة"]},{id:"prayer_007_2025",category:Y.PRAYER_PURITY,title:"جمع التقديم: صورته وتطبيقه على الطبيب الجراح",question:"ما هي صورة جمع التقديم وكيف يطبقها الطبيب قبل دخول غرفة العمليات؟",medical_context:"جمع تقديم، ظهر، عصر، مغرب، عشاء، وقت الصلاة، عملية جراحية",ruling:`جمع التقديم هو أن يصلي الظهر والعصر في وقت الظهر، أو المغرب والعشاء في وقت المغرب.

التطبيق على الطبيب الجراح:
إذا علم الطبيب أنه سيدخل العملية الجراحية في وقت الظهر ولن يخرج إلا بعد غروب الشمس (فوات وقت العصر)، فإنه يصلي العصر مع الظهر مقدماً قبل الدخول للعمليات.

الإجراء العملي:
1. بمجرد أذان الظهر: يتوضأ الطبيب
2. يصلي الظهر (4 ركعات) بنية "أصلي الظهر"
3. بعد التسليم مباشرة: يقيم الصلاة للعصر
4. يصلي العصر (4 ركعات) بنية "أصلي العصر جمع تقديم مع الظهر"
5. يدخل غرفة العمليات وقد أدى فريضتي النهار

الأفضلية: هذا الأسلوب هو الأفضل والأحوط لضمان أداء الصلاة وعدم انشغال البال بها أثناء الجراحة.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تقديم","طبيب","جراحة","تطبيق عملي"]},{id:"prayer_008_2025",category:Y.PRAYER_PURITY,title:"جمع التأخير: صورته وتطبيقه على حالات الطوارئ",question:"ما هي صورة جمع التأخير وكيف يطبقها الطبيب في حالات الطوارئ المفاجئة؟",medical_context:"جمع تأخير، طوارئ، حادث، جراحة عاجلة، نية، وقت العصر",ruling:`جمع التأخير هو أن يؤخر الطبيب صلاة الظهر ليصليها مع العصر في وقت العصر، أو يؤخر المغرب ليصليها مع العشاء.

التطبيق على الطبيب في حالات الطوارئ:
إذا كان الطبيب منخرطاً في العمل قبل دخول وقت الظهر، واستمر العمل حتى دخول وقت العصر (مثل حادث كبير يتطلب تدخلاً فورياً)، فإنه ينوي بقلبه تأخير الظهر، ويصليهما معاً بعد انتهاء العمل.

الإجراء العملي:
1. عندما يدرك الطبيب أن وقت الظهر سيفوته بسبب انشغاله بإنقاذ المصابين
2. يعقد نية بقلبه: "يارب، نويت تأخير صلاة الظهر لأصليها مع العصر بسبب هذا العذر"
3. يستمر في عمله
4. عند الانتهاء (في وقت العصر): يتوضأ ويصلي الظهر أولاً (مراعاة للترتيب) ثم العصر

الأهمية: هذا هو الأسلوب الصحيح في حالات الطوارئ المفاجئة.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تأخير","طوارئ","طبيب","نية"]},{id:"prayer_009_2025",category:Y.PRAYER_PURITY,title:"الفرق بين الجمع والقصر: عدم جواز قصر الركعات للطبيب",question:"هل يجوز للطبيب أن يقصر الصلاة (يصليها ركعتين بدل أربع) عند جمع الصلوات؟",medical_context:"قصر، جمع، ركعات، حاضر، مسافر، سفر، حكم",ruling:`لا يجوز قصر الصلاة (تقليل الركعات) للطبيب.

التوضيح الفقهي:
- الجمع رخصة في "الوقت" وليست رخصة في "عدد الركعات"
- القصر رخصة مرتبطة بـ "السفر" حصراً (عند جماهير الفقهاء)
- الطبيب يمارس عمله في مكان إقامته (المستشفى)، فهو "حاضر" وليس "مسافراً"

الأداء الصحيح:
- يصلي الطبيب الظهر أربع ركعات (كاملة)
- يصلي العصر أربع ركعات (كاملة)
- يصلي المغرب ثلاث ركعات (كاملة)
- يصلي العشاء أربع ركعات (كاملة)

الحكم الشرعي: الجمع بدون قصر هو الحكم الشرعي الصحيح للطبيب الحاضر.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + مركز الأزهر العالمي للفتوى + مجمع البحوث الإسلامية",tags:["صلاة","قصر","جمع","ركعات","حاضر"]},{id:"prayer_010_2025",category:Y.PRAYER_PURITY,title:"شرط النية في جمع الصلاة: متى وكيف ينوي الطبيب",question:"ما هو شرط النية في الجمع؟ ومتى يجب أن ينوي الطبيب الجمع؟",medical_context:"نية، جمع تقديم، جمع تأخير، تكبيرة إحرام، شرط صحة",ruling:`النية شرط صحة في الجمع. والتفصيل الفقهي كالتالي:

أولاً: في جمع التقديم:
- يجب أن ينوي الجمع عند تكبيرة الإحرام للصلاة الأولى (الظهر أو المغرب)
- يقول بقلبه: "نويت جمع تقديم الظهر والعصر" أو "نويت جمع تقديم المغرب والعشاء"

ثانياً: في جمع التأخير:
- يجب أن ينوي تأخير الصلاة الأولى قبل خروج وقتها
- مثال توضيحي: إذا أذن الظهر وهو في العمليات، يجب أن يمرر نية في قلبه قائلاً: "نويت تأخير الظهر إلى العصر" قبل أن يؤذن العصر
- المقصد: عدم كونه آثماً بتأخير الصلاة عن وقتها بلا نية

ثالثاً: طبيعة النية:
- النية تكون بالقلب (لا يلزم النطق بها باللسان)
- يكفي قصد الطبيب بقلبه الجمع والالتزام به

الحكم الشرعي: النية شرط واجب لصحة الجمع.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","نية","جمع","شرط صحة"]},{id:"prayer_011_2025",category:Y.PRAYER_PURITY,title:"شرط الموالاة (التتابع) في جمع الصلاة",question:"هل يجب أن تكون الصلاتان المجموعتان متتابعتان بلا فاصل؟",medical_context:"موالاة، تتابع، فاصل، صيغة الجمع، شرط",ruling:`الموالاة (التتابع) شرط في جمع التقديم عند جماهير الفقهاء.

معنى الموالاة:
- ألا يكون هناك فاصل طويل بين الصلاتين
- يجب أن يصلي الطبيب الأولى ثم يسلم ويقيم للثانية ويصليها مباشرة

التطبيق العملي:
1. يصلي الظهر (4 ركعات)
2. يسلم من الظهر
3. يقيم الصلاة للعصر مباشرة بدون تأخير يُعتد به
4. يصلي العصر (4 ركعات)

الفاصل المقبول:
- تكبيرات الإحرام
- التشهد الأخير والتسليم
- الإقامة الثانية
- ما يُعتبر من ضرورات الصلاة

الحكم الشرعي: الموالاة شرط عند كثير من الفقهاء لجمع التقديم، والأحوط الالتزام بها.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","موالاة","جمع","شرط"]},{id:"prayer_012_2025",category:Y.PRAYER_PURITY,title:"شرط الترتيب في الصلوات المجموعة",question:"هل يجب أن يصلي الطبيب الظهر قبل العصر والمغرب قبل العشاء؟",medical_context:"ترتيب، صلوات، ظهر، عصر، مغرب، عشاء",ruling:`الترتيب شرط واجب عند الجمهور في الجمع.

المطلوب الشرعي:
- يجب ترتيب الصلوات كما فرضها الله تعالى
- الظهر يأتي قبل العصر دائماً
- المغرب يأتي قبل العشاء دائماً

الصورة الصحيحة:
إذا جمع الطبيب الظهر والعصر تقديماً:
1. يصلي الظهر أولاً (4 ركعات)
2. ثم يصلي العصر ثانياً (4 ركعات)

إذا جمع التأخير:
1. يصلي الظهر أولاً (4 ركعات)
2. ثم يصلي العصر ثانياً (4 ركعات)

خطأ شائع:
- لا يجوز صلاة العصر قبل الظهر
- لا يجوز صلاة العشاء قبل المغرب

الحكم الشرعي: الترتيب شرط واجب، ولا يسقط إلا بالنسيان عند بعض الفقهاء.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","ترتيب","جمع","شرط"]},{id:"prayer_013_2025",category:Y.PRAYER_PURITY,title:"جمع الصلاة في أوبئة العزل: خشية العدوى وحفظ المال",question:"ما حكم جمع الصلاة لأطقم العزل الطبية المخالطة للأوبئة (كورونا)؟",medical_context:"وباء، عدوى، كورونا، عزل، ملابس واقية، PPE، تعقيم، مال عام",ruling:`أصدرت لجنة الفتوى بمجمع البحوث الإسلامية بالأزهر الشريف فتاوى خاصة بأطقم العزل أثناء الأوبئة. الحكم: يجوز الجمع بعلل قوية تتجاوز المشقة البدنية.

أولاً: علة خشية العدوى والعدوى المباشرة:
- تكرار خلع الملابس الواقية (PPE) للوضوء والصلاة ثم ارتداؤها يعرض الطاقم الطبي لخطر التلوث والعدوى
- هذا ينافي مقصد حفظ النفس
- الحكم: خشية العدوى علة قوية تبيح الجمع

ثانياً: علة حفظ المال العام (منع التبذير):
- ملابس العزل والوقاية تكلف الدولة أموالاً طائلة
- غالباً معدة للاستخدام مرة واحدة فقط
- التعقيم المعقد يرفع التكاليف
- نزع هذه الملابس لأداء كل صلاة ثم استبدالها بجديدة يُعتبر "إضاعة للمال" و"سفهاً وتبذيراً" نهى عنه الشرع
- الحكم: حفظ المال العام علة قانونية تبيح الجمع

النتيجة: الجمع وسيلة لترشيد الموارد وحفظ المال العام، وهي علة قوية من الناحية الفقهية.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية بالأزهر الشريف - لجنة الفتوى",tags:["صلاة","جمع","وباء","عدوى","عزل","كورونا"]},{id:"prayer_014_2025",category:Y.PRAYER_PURITY,title:"تصنيف الكوادر الطبية وحكم كل فئة",question:"هل جميع العاملين في المستشفيات يجوز لهم الجمع؟ أم هناك فئات محددة؟",medical_context:"فئات طبية، تصنيف، عزل، العناية المركزة، فحص، كمامة",ruling:`لم تعطِ فتاوى مجمع البحوث الإسلامية حكماً تعميمياً، بل فصلت الأحكام حسب طبيعة العمل والاختلاط بالمصابين:

الفئة الأولى: الفحص المبدئي (لا يخالطون المصابين مباشرة):
- طبيعة العمل: فحص مبدئي، يرتدون كمامات وقفازات يمكن خلعها بسهولة
- الحكم الشرعي: يتعين عليهم الوضوء وأداء الصلاة في وقتها
- النتيجة: لا يجوز لهم الجمع (لانتفاء العذر والمشقة المعتبرة)

الفئة الثانية: أطقم العزل والعناية المركزة (يخالطون المصابين مباشرة):
- طبيعة العمل: عزل، عناية مركزة، يخالطون المصابين مباشرة، يرتدون بدلات عزل كاملة (Full PPE)
- الحكم الشرعي: يجوز لهم الجمع بين الصلوات
- الصور المباحة: جمع الظهر مع العصر، والمغرب مع العشاء، تقديماً أو تأخيراً حسب ظروف العمل والورديات

الخلاصة: الفرق هو وجود المشقة الحقيقية والعدوى المباشرة.`,verdict:"CONDITIONAL",source:"مجمع البحوث الإسلامية - لجنة الفتوى",tags:["صلاة","جمع","تصنيف","فئات طبية"]},{id:"prayer_015_2025",category:Y.PRAYER_PURITY,title:"أحكام الطهارة والوضوء عند ارتداء الملابس الواقية",question:"كيف يتوضأ الطبيب وهو يرتدي بدلات عزل كاملة؟ وماذا لو انتقض وضوؤه؟",medical_context:"طهارة، وضوء، ملابس واقية، بدلة عزل، تيمم، فاقد الطهورين",ruling:`وضعت لجنة الفتوى بمجمع البحوث الإسلامية ضوابط واضحة للطهارة في ظروف العزل:

أولاً: الوضوء قبل ارتداء الملابس الواقية:
- يجب الوضوء الجيد والكامل قبل لبس الملابس الواقية
- النية: استدامة الطهارة لأطول فترة ممكنة
- الهدف: الصلاة بوضوء واحد دون الحاجة لتجديد

ثانياً: عند الجمع:
- يصلي الطبيب الصلاتين (الظهر والعصر أو المغرب والعشاء) بوضوء واحد إذا أمكن

ثالثاً: إذا انتقض الوضوء أثناء العمل:
- الخطوة الأولى: التيمم (إن وجد إلى ذلك سبيلاً)
- يمكن التيمم على الحائط أو الغبار العالق بالملابس إن وجد، أو ما تيسر من صعيد طاهر

رابعاً: إذا تعذر التيمم أيضاً (ظروف قسرية):
- يصلي الطبيب "فاقد الطهورين" (بلا وضوء ولا تيمم)
- لحرمة الوقت: الصلاة تجب أداؤها في وقتها حتى فاقداً الطهارة
- الحكم: الصلاة لا تسقط عنه مهما تعسرت

الحكم النهائي: الصلاة واجبة على كل حال، والطهارة تُيسّر قدر الإمكان.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية - لجنة الفتوى",tags:["صلاة","طهارة","وضوء","عزل","تيمم"]},{id:"prayer_016_2025",category:Y.PRAYER_PURITY,title:"حكم صلاة الطبيب بملابس ملوثة بالدم",question:"هل تصح صلاة الطبيب الجراح وملابسه عليها دماء المريض؟",medical_context:"صلاة، دم، ملابس، جراح، نجاسة، ضرورة، معفو عنه",ruling:`أجابت دار الإفتاء المصرية (أمين الفتوى) على هذا السؤال بتفصيل يراعي ظروف الجراحين:

الأصل الفقهي:
- الدم مادة نجسة ويجب تطهيرها (عند جماهير الفقهاء)
- الصلاة بملابس نجسة أصلاً غير صحيحة

الاستثناء الأول: الدم اليسير (معفو عنه):
- إذا كان الدم يسيراً (قطرات قليلة)
- ويعسر الاحتراز منه (مما تعم به البلوى للجراحين)
- فهو معفو عنه عند بعض الفقهاء
- الحكم: الصلاة صحيحة

الاستثناء الثاني: الدم الكثير مع إمكانية التبديل:
- يجب تبديل الملابس أو غسل الموضع الملوث
- إن أمكن ذلك دون فوات الوقت

الاستثناء الثالث: الدم الكثير مع عدم إمكانية التبديل (الضرورة القصوى):
- إذا تعذر تبديل الملابس تماماً وضاق الوقت
- الحكم: يصلي الطبيب بملابسه الملوثة
- القاعدة: "لا واجب مع عجز"
- الحكم النهائي: تصح الصلاة للضرورة والحاجة

الخلاصة: الصلاة مقدمة على كل شيء، والجراح معذور في ظروفه الاستثنائية.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية - أمين الفتوى",tags:["صلاة","دم","جراح","نجاسة","ضرورة"]},{id:"prayer_017_2025",category:Y.PRAYER_PURITY,title:"عدم اتخاذ الجمع عادة يومية: الضابط الأهم",question:"هل يجوز للطبيب أن يجعل جمع الصلاة عادة يومية دائمة؟",medical_context:"جمع، عادة، يومية، رخصة، عذر، عارضة",ruling:`حذّر مركز الأزهر العالمي للفتوى الإلكترونية من تحويل الجمع إلى عادة. الشيخ أمير عبد العال: "شدد على ضرورة عدم اتخاذ ذلك الجمع باستمرار وجعله عادة يومية فهذا غير جائز"

معنى الرخصة (العارضة):
- الجمع رخصة "عارضة" تزول بزوال السبب (العذر)
- ليست رخصة دائمة أو أصلاً يومياً

الحالات التي لا يجوز فيها الجمع:
1. إذا كان الطبيب في يوم إجازة: لا يجوز الجمع
2. إذا كان في نوبة عمل هادئة بلا عمليات: لا يجوز الجمع
3. إذا كان في عيادة خارجية يستقطع منها دقائق: لا يجوز الجمع
4. في أي وقت ينتفي فيه العذر الحقيقي: لا يجوز الجمع

العاقبة السيئة للاعتياد:
- الاعتياد على الجمع دون عذر حقيقي يخرج الفعل من باب "الرخصة"
- ينقلب الفعل إلى باب "الكبائر" (إضاعة الصلاة عن وقتها)
- يصبح الطبيب آثماً بدل أن يكون مأجوراً

الحكم الشرعي: عدم الاعتياد على الجمع شرط لجوازه، والاعتياد بلا عذر حرام.`,verdict:"CONDITIONAL",source:"مركز الأزهر العالمي للفتوى الإلكترونية - الشيخ أمير عبد العال",tags:["صلاة","جمع","عادة","رخصة","عذر"]},{id:"prayer_018_2025",category:Y.PRAYER_PURITY,title:"تقدير الطبيب للعذر: الطبيب فقيه نفسه",question:"من الذي يقرر هل الطبيب معذور في الجمع أم لا؟",medical_context:"جمع، عذر، تقدير، ضرورة، طبيب، مسؤولية",ruling:`أوضحت دار الإفتاء المصرية ومركز الأزهر العالمي مبدأً مهماً: الطبيب "فقيه نفسه" في تقدير مدى انشغاله والعذر.

المبدأ الأساسي:
- الرخصة شرعت للضرورة
- الضرورة تُقدر بقدرها (قاعدة فقهية: "الضروري لا يقدر إلا بقدره")
- لا يوجد "مفتي إجباري" يقرر للطبيب هل هو معذور أم لا

مسؤولية الطبيب:
1. يجب على الطبيب أن يستشعر المسؤولية الشرعية والأخلاقية
2. يقيّم بنفسه: هل أنا فعلاً معذور بالجمع أم أستطيع الصلاة؟
3. يجب أن يكون صادقاً مع نفسه في التقدير

التحذير الشرعي:
- لا تجعل الجمع هو الأصل في حياتك، بل هو الاستثناء الذي تلجأ إليه عند الحاجة
- استشعر أن الله تعالى يعلم نيتك والحقائق الدقيقة لأحوالك
- الحساب عند الله يوم القيامة

الحكم النهائي: الطبيب مسؤول أمام الله عن تقديره للعذر، فليكن عادلاً في الحكم على نفسه.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية + مركز الأزهر العالمي للفتوى الإلكترونية",tags:["صلاة","جمع","عذر","مسؤولية","تقدير"]},{id:"prayer_019_2025",category:Y.PRAYER_PURITY,title:"حكم المريض الذي يخضع للجراحة",question:"هل للمريض الذي يُخدر أو يشق عليه الحركة حق الجمع كذلك؟",medical_context:"مريض، جراحة، تخدير، حركة، صلاة، جمع",ruling:`أوضح مركز الأزهر العالمي للفتوى أن حكم المريض الذي يخضع للجراحة يتماهى مع حكم الطبيب:

الحكم على المريض:
1. يجوز للمريض الجمع بين الصلوات
2. بل هو أولى بالرخصة من الطبيب

التوضيح الشرعي:
- المريض الذي يُخدر لا يستطيع الصلاة أثناء التخدير (معذور)
- المريض الذي يشق عليه الحركة (بسبب الجراحة) معذور
- الصلاة لا تسقط عن المريض، لكن يُخفف عنه في هيئتها ووقتها بالجمع

صور الرخصة للمريض:
1. جمع الصلوات حسب ظروفه
2. الصلاة جالساً أو مستلقياً إذا شقت عليه القيام
3. الإيماء برأسه إن لم يستطع الحركة
4. عدم الوضوء الكامل (بدل التيمم إذا كانت الحركة مؤلمة)

الخلاصة: المريض معذور في الجمع والتخفيف، والصلاة واجبة على كل حال بأي هيئة ممكنة.`,verdict:"PERMITTED",source:"مركز الأزهر العالمي للفتوى الإلكترونية",tags:["صلاة","جمع","مريض","جراحة","تخدير"]},{id:"prayer_020_2025",category:Y.PRAYER_PURITY,title:"السيناريو الأول: العمليات المجدولة (Elective Surgery)",question:"كيف يطبق الطبيب جمع الصلاة عملياً إذا كانت لديه عمليات مجدولة معروفة مسبقاً؟",medical_context:"عملية مجدولة، جدول جراحي، جمع تقديم، إجراء عملي",ruling:`إذا كان الطبيب يعلم مسبقاً بعمليات جراحية محددة الأوقات، فالإجراء الصحيح هو جمع التقديم:

نموذج عملي محدد:
الحالة: طبيب يعلم أن لديه قائمة عمليات تبدأ الساعة 12:00 ظهراً وتنتهي الساعة 5:00 مساءً

الإجراء الصحيح خطوة بخطوة:
1. بمجرد دخول وقت الظهر (أذان الظهر): يتوضأ الطبيب وضوءً كاملاً
2. يصلي الظهر (4 ركعات) بنية واضحة: "أصلي الظهر"
3. بعد التسليم من الظهر مباشرة: يقيم الصلاة للعصر (بلا تأخير)
4. يصلي العصر (4 ركعات) بنية: "أصلي العصر جمع تقديم مع الظهر"
5. بعد التسليم من العصر: يدخل غرفة العمليات مباشرة

النتيجة: أداء فريضتي النهار بلا حرج، وخروج من الوقت الشرعي بسلام

الأفضلية الفقهية: هذا الأسلوب (جمع التقديم) هو الأفضل والأحوط لأنه:
- يضمن أداء الصلاة كاملة وصحيحة
- يزيل انشغال البال عن الصلاة أثناء الجراحة
- يركز ذهن الجراح على المريض فقط

نصيحة عملية: خطط لصلاتك قبل دخول العمليات، تماماً كما تخطط للجراحة نفسها.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تقديم","عملية مجدولة","إجراء عملي"]},{id:"prayer_021_2025",category:Y.PRAYER_PURITY,title:"السيناريو الثاني: حالات الطوارئ المفاجئة (Emergency)",question:"كيف يتصرف الطبيب عندما تحدث طارئة مفاجئة وينشغل عن الصلاة؟",medical_context:"طوارئ، حادث، إنقاذ، جمع تأخير، نية، إجراء عملي",ruling:`إذا حدثت طارئة مفاجئة (حادث، نزيف شديد، إنقاذ فوري) واستمرت حتى يمضي وقت الصلة، فالإجراء الصحيح هو جمع التأخير:

نموذج عملي واقعي:
الحالة: طبيب في استقبال الطوارئ، دخل وقت الظهر، فجأة وصل حادث كبير يتطلب تدخلاً فورياً استمرّ حتى قارب العصر على الانتهاء

الإجراء الصحيح خطوة بخطوة:
1. عندما يدرك الطبيب أن وقت الظهر سيفوته بسبب انشغاله بإنقاذ المصابين
2. يعقد نية بقلبه (وهو يعمل): "يارب، نويت تأخير صلاة الظهر لأصليها مع العصر بسبب هذا العذر"
3. يستمر في عمله الإنقاذي دون قلق من الصلاة
4. عندما ينتهي من الحالة الطارئة (في وقت العصر): يتوضأ وضوءً كاملاً
5. يصلي الظهر أولاً (4 ركعات) - مراعاة للترتيب الشرعي
6. ثم يصلي العصر (4 ركعات) مباشرة بعد الظهر

النتيجة: أداء الصلاة مجموعة في الوقت المناسب بدون تفويت

ملاحظة مهمة على النية:
- النية تكون بالقلب فقط (لا يشترط النطق باللسان)
- النية تتم أثناء العمل، قبل انتهاء وقت الصلاة الأولى
- المقصد: عدم تأثير الطبيب آثماً بتأخير الصلاة بلا نية

نصيحة تطبيقية: في حالات الطوارئ، تذكر أن إنقاذ النفس عبادة، والجمع رخصة شرعية.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تأخير","طوارئ","حادث","إجراء عملي"]},{id:"prayer_022_2025",category:Y.PRAYER_PURITY,title:"السيناريو الثالث: العمل في مناطق العزل الكامل",question:"كيف يصلي الطبيب بملابس حماية كاملة وهو يعمل في قسم العزل لمدة 8 ساعات؟",medical_context:"عزل، ملابس واقية، 8 ساعات، بدلة كاملة، صلاة بالملابس",ruling:`إذا كان الطبيب يرتدي بدلة عزل كاملة وسيعمل لمدة 8 ساعات متتالية، فالإجراء الصحيح هو:

الإجراء العملي خطوة بخطوة:

المرحلة الأولى (قبل العمل):
1. الوضوء الجيد والكامل قبل لبس البدلة الواقية
2. النية: استدامة هذا الوضوء لأطول فترة ممكنة
3. الهدف: أداء الصلاتين المجموعتين بوضوء واحد دون الحاجة لخلع البدلة

المرحلة الثانية (أثناء العمل):
1. ارتداء البدلة الكاملة والعمل
2. مراقبة الأوقات (تقريباً)
3. البحث عن أي فرصة "راحة قصيرة" أو "استراحة آمنة"

المرحلة الثالثة (وقت الصلاة):
أ) إذا وجد فرصة الخروج من البدلة آمناً:
- يخلع البدلة آمناً
- يصلي الصلاتين جمعاً (تقديم أو تأخير)
- يعود للعمل

ب) إذا لم يستطع الخلع (ظروف معقدة):
- ينتهي من العمل أولاً
- يخلع البدلة بأمان وينظفها
- يصلي الصلاتين المجموعتين

المرحلة الرابعة (إذا انتقض الوضوء):
- الخطوة الأولى: البحث عن إمكانية التيمم (على الحائط، الغبار، صعيد طاهر)
- إذا توفر شيء: يتيمم ويصلي
- الخطوة الثانية: إذا تعذر التيمم أيضاً
  → يصلي "فاقد الطهورين" (بدون وضوء أو تيمم)
  → لحرمة الوقت: الصلاة لا تسقط مهما تعسرت

المبدأ الأساسي:
- الصلاة لا تسقط في أي ظرف
- ملابس الواقية لا تمنع الصلاة
- الدماء اليسيرة عليها (تعم بها البلوى) معفو عنها
- الحرج منتفِ بالرخصة الشرعية

نصيحة ختامية: أداء الصلاة بأي هيئة ممكنة أفضل من تركها، والله يعلم ظرفك ويحاسبك بعدل.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية",tags:["صلاة","جمع","عزل","ملابس واقية","إجراء عملي"]},{id:"prayer_023_2025",category:Y.PRAYER_PURITY,title:"التوصيات الختامية للأطباء والكوادر الطبية",question:"ما هي الضوابط والنصائح الشاملة لتطبيق جمع الصلاة بشكل صحيح؟",medical_context:"توصيات، ضوابط، نصائح، أخلاقيات، مسؤولية",ruling:`وضعت المؤسسات الفتوائية الثلاث (دار الإفتاء، مجمع البحوث، مركز الأزهر) مجموعة من التوصيات الختامية:

التوصية الأولى: استشعار المسؤولية الشرعية:
- الرخصة شرعت للضرورة فقط
- الضرورة تُقدر بقدرها (لا تبالغ في تقديرك)
- أنت "فقيه نفسك" في تقدير مدى انشغالك والعذر الحقيقي
- تذكر أن الله يعلم النيات ويحاسبك بعدل

التوصية الثانية: التخطيط المسبق للصلاة:
- كما تخطط للجراحة بدقة، خطط لصلاتك
- اسأل نفسك قبل العمل: متى سأصلي؟ جمع تقديم أم تأخير؟
- تذكر المواقيت الشرعية واحسبها تقريباً

التوصية الثالثة: عدم التساهل والاستسهال:
- لا تجعل الجمع هو الأصل في حياتك
- الجمع استثناء (عارضة) تلجأ إليه عند الحاجة الحقيقية
- في الإجازات أو الورديات الهادئة: ادِ الصلوات في أوقاتها
- في الفترات بدون عمليات: صلِّ على الوقت

التوصية الرابعة: التعليم والنشر:
- نشر الوعي بين الكوادر الطبية بهذه الأحكام الصحيحة
- إزالة الالتباس والخرافات عن جمع الصلاة
- تعليم الطلاب والمتدربين الأحكام الصحيحة منذ البداية

التوصية الخامسة: دور إدارات المستشفيات:
- يجب على الإدارات العليا فهم هذه الأحكام الشرعية
- توفير أماكن صغيرة للصلاة آمنة وسهلة الوصول
- توفير أوقات "راحة قصيرة" (ولو 15 دقيقة) تمكن الطاقم من الصلاة
- هذا ليس رفاهية بل حق ديني وإنساني

التوصية السادسة: الموازنة الذكية بين الشريعة والطب:
- الموازنة بين "مشرط الجراح" و"سجادة الصلاة" ممكنة وميسورة
- الإسلام دين حياة لا دين عنت
- الله أراد التيسير لا التعسير، فاستعن به

الخلاصة الروحية:
"إن المواءمة بين قدسية الوقت الشعائري وقدسية النفس البشرية التي اؤتمن الطبيب على حفظها ممكنة بفضل سعة الفقه الإسلامي ورحابة مقاصده، والله تعالى أعلى وأعلم."`,verdict:"PERMITTED",source:"دار الإفتاء المصرية + مجمع البحوث الإسلامية + مركز الأزهر العالمي للفتوى",tags:["توصيات","ضوابط","نصائح","أخلاقيات","مسؤولية"]},{id:"ethics_006_2025",category:Y.MEDICAL_EXPERIMENTS,title:"إجراء التجارب الطبية على الحيوان",question:"ما حكم إجراء التجارب الطبية على الحيوانات؟",medical_context:"تجارب حيوانية، أبحاث طبية، حيوان، دراسات سلامة",ruling:`يجوز إجراء التجارب على الحيوانات لتحقيق غرض طبي مشروع (كاستكشاف دواء جديد أو علاج)، بشروط صارمة:

الشروط المطلوبة:
1. ألا تكون التجربة مجرد عبث أو تسلية، بل لهدف طبي معتبر.
2. تجنب تعذيب الحيوان قدر الإمكان (الرفق بالحيوان مطلوب شرعاً).
3. استخدام أقل عدد من الحيوانات الضروري للوصول للهدف.
4. استخدام طرق غير مؤلمة إن أمكن.

حالات خاصة:
- الحيوانات التي أمر الشرع بقتلها (الفواسق الخمس: الحية والعقرب والغراب الأسود والفأر والكلب العقور): جائز تماماً.
- الحيوانات المأكولة: جائز لكن مع تجنب الألم غير الضروري.
- الحيوانات الأليفة (القطط، الأرانب): يجب مراعاة عدم التعذيب.

التطبيق الحديث:
إذا كانت التجربة مميتة (أي ستؤدي لموت الحيوان)، فتجوز للضرورة الطبية (كاختبار سلامة دواء قبل استخدامه بالبشر)، لكن يجب أن تكون هناك ضرورة حقيقية ولا بديل.

الحكم الشرعي: التجارب على الحيوانات جائزة عند الضرورة الطبية مع الرفق والحد الأدنى من الألم.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي + الموسوعة الفقهية الإسلامية",tags:["تجارب","حيوان","بحث علمي","أخلاقيات"]},{id:"ethics_007_2025",category:Y.MEDICAL_EXPERIMENTS,title:"إجراء التجارب الطبية على الإنسان",question:"ما حكم التجارب الطبية على البشر (التجارب السريرية)؟",medical_context:"تجارب سريرية، clinical trials، تجارب بشرية، بحث طبي، consent",ruling:`التجارب الطبية على الإنسان نوعان مختلفان جداً:

النوع الأول: التجارب العلاجية (لإنقاذ المريض):
- الحكم: جائزة شرعاً بشروط
- الشروط:
  1. الغرض: علاج المريض وإنقاذه من مرض قاتل
  2. الإذن: موافقة المريض الواعية (Informed Consent)
  3. الأمل: غلبة الظن بأن العلاج الجديد قد ينفعه
  4. الموازنة: المنفعة المتوقعة أكبر من الأضرار المتوقعة
- المثال: استخدام دواء تجريبي لمريض سرطان لا علاج له بالعلاجات المعروفة

النوع الثاني: التجارب البحثية (لخدمة العلم والمجتمع):
- الحكم: جائزة بشروط صارمة جداً
- الشروط:
  1. الرضا التام: موافقة واعية وحرة من الشخص (لا إكراه)
  2. عدم تعريض حياته: لا يجوز التجربة إذا كانت تؤدي لهلاكه أو ضرر جسيم
  3. الحد الأدنى من الضرر: أي ضرر يجب أن يكون أقل ما يمكن
  4. الضرورة العلمية: يجب أن تكون هناك حاجة علمية حقيقية
  5. حماية المشاركين: توقف التجربة فوراً إذا ظهر ضرر حقيقي
  6. عدم الاستغلال: خاصة للفقراء والسجناء والأطفال

القاعدة الأساسية:
"حفظ النفس مقدم على غيره" - فالفرد لا يمكن أن يضحي بنفسه من أجل تطور العلم (أي يجب موازنة حقوق الفرد مع مصلحة المجتمع).

الأشخاص المحظور تجريب أدوية عليهم مباشرة:
- الأطفال (إلا في حالة استثنائية جداً مع موافقة الأب والأم والإذن الشرعي)
- الحوامل
- الأشخاص غير الأهل (عقلياً أو قانونياً)
- السجناء (لتجنب الإكراه)

الحكم الشرعي: التجارب البحثية على البشر جائزة نظرياً لكن بحدود صارمة جداً تحمي كرامة الإنسان وحياته.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي + د. محمود شلتوت",tags:["تجارب بشرية","clinical trials","أخلاقيات","موافقة"]},{id:"icu_004_2025",category:Y.ICU_DEATH,title:"نزع أجهزة الإعاشة عن المريض (Withdrawing Life Support)",question:"متى يجوز نزع أجهزة التنفس الصناعي والإعاشة عن المريض؟",medical_context:"موت دماغي، موت جذع المخ، أجهزة إعاشة، ventilator، brain death",ruling:`نزع الأجهزة الطبية يختلف حسب الحالة:

أولاً: تعريفات طبية شرعية:
- موت سريري: توقف القلب والتنفس (موت تقليدي معروف)
- موت دماغي (Brain Death): توقف نشاط الدماغ كاملاً بما فيه جذع المخ

ثانياً: حالات جواز نزع الأجهزة:

الحالة الأولى: موت جذع المخ المحقق:
- التعريف: توقف كامل نشاط الدماغ (القشرة المخية وجذع المخ)
- الحكم: جائز نزع الأجهزة
- الشرط: تشخيص من ثلاثة أطباء متخصصين (عدول شرعاً)
- التعليل: المريض ميت حقاً (الدماغ هو مركز الحياة)
- الهدف: تجنب إطالة الموت دون فائدة (الأجهزة تطيل الموت، لا تحفظ الحياة)

الحالة الثانية: غيبوبة دائمة (Persistent Vegetative State):
- التعريف: المريض حي لكن لا شعور ولا إدراك (نبات)
- الحكم: فقهاء معاصرون اختلفوا، الأكثر يرى جواز النزع
- الشرط: استمرار هذه الحالة لمدة طويلة جداً (سنوات) مع عدم رجاء شفاء
- التعليل: إذا استنفدت كل الوسائل الطبية ولا أمل في الاستيقاظ

الحالة الثالثة: الأمراض النهائية (Terminal Illness):
- التعريف: مريض يعاني من مرض حتمي الموت (سرطان متقدم، إيدز آخر مراحله)
- الحكم: جائز التوقف عن المعالجات الموسعة (لكن يستمر الراحة والتسكين)
- التطبيق: عدم الاستمرار في CPR أو أجهزة بدون فائدة طبية

ثالثاً: ضوابط شرعية صارمة:

ضابط أول: إجماع طبي:
- يجب موافقة ثلاثة أطباء متخصصين على أن الحالة لا رجعة فيها

ضابط ثاني: موافقة الأسرة:
- يجب موافقة أولياء الأمر (الزوجة/الأب/الأم) بعد شرح الحالة لهم
- لا يجوز نزع الأجهزة قسراً بدون موافقة

ضابط ثالث: عدم الاستعجالية:
- يجب ملاحظة المريض مدة كافية قبل اتخاذ القرار
- عدم النزع بتسرع قد يكون فيه ظلم

ضابط رابع: الاستثناء من النزع:
- لا يجوز نزع الأجهزة من مريض قد يتحسن (حتى لو احتمالية ضئيلة)
- لا يجوز النزع إذا كان المريض حياً في المعنى الشرعي

رابعاً: حالات ممنوع نزع الأجهزة عنها:

- الأطفال حديثي الولادة (بدون موافقة ولاة الأمور والشرع)
- المريض الذي قد يتحسن (حتى لو نسبة ضئيلة)
- مريض مغيبوب لكن دماغه يعمل (حتى لو لا وعي)

خامساً: التمييز بين التوقف والقتل:
- نزع الأجهزة من ميت: ليس قتلاً (المريض ميت أصلاً)
- بل هو توقف عن استعمال آلة لم تعد تفيد
- الفرق: القتل = تسريع الموت / النزع = إيقاف إطالة الموت

سادساً: حكم الأطباء الذين ينفذون هذا:
- هم ليسوا آثمين إن تعاملوا بضوابط شرعية صحيحة
- بل هم يطبقون رحمة طبية

الحكم الشرعي النهائي:
يجوز نزع أجهزة الإعاشة عن الميت دماغياً (موت جذع المخ) المحقق بتشخيص متعدد، مع موافقة الأسرة، لأن الموت الدماغي يعتبر موتاً شرعياً عند المجامع الفقهية.`,verdict:"PERMITTED",source:"مجمع الفقه الإسلامي الدولي + د. أنس أبو شادي",tags:["موت دماغي","أجهزة","إعاشة","عناية","نهائي"]},{id:"obgyn_011_2025",category:Y.WOMEN_PREGNANCY,title:"ختان الإناث (Female Genital Mutilation)",question:"ما هو الحكم الشرعي والطبي لختان الإناث؟",medical_context:"ختان إناث، FGM، تشويه الأعضاء التناسلية، ضرر صحي",ruling:`حكم ختان الإناث: حرام شرعاً وجريمة طبية وإنسانية

أولاً: الأدلة الشرعية على التحريم:

1. ضعف الأحاديث الواردة:
   - الحديث "الختان للذكور والنساء" ضعيف جداً في إسناده
   - الحديث "تخفيفي ولا تنهكي" ضعيف ومتناقض
   - لا يوجد حديث صحيح يفرض ختان الإناث

2. الأصول الفقهية تعارضه:
   - قاعدة "لا ضرر ولا ضرار"
   - قاعدة "حفظ النفس من مقاصد الشريعة"
   - قاعدة "إذا تعارض الحرج والضرر، فالحرج أهون"

3. إجماع العلماء المعاصرين:
   - الشيخ عطية صقر (الأزهر)
   - الشيخ يوسف القرضاوي
   - دار الإفتاء المصرية: أفتت بحرمته وخطره

ثانياً: الأضرار الطبية الثابتة:

الأضرار البدنية الفورية:
- نزيف حاد قد يؤدي للموت
- صدمة نفسية وألم شديد
- عدوى جرثومية (الأدوات غالباً غير معقمة)
- تشنجات عصبية ومضاعفات تخدير

الأضرار المستقبلية:
- برود جنسي وعدم القدرة على الاستمتاع الزوجي
- مضاعفات الحمل والولادة (المخاض الطويل)
- مشاكل نفسية (اكتئاب، قلق، PTSD)
- مشاكل بولية وتناسلية مزمنة

الأضرار النفسية:
- الخوف والهلع من تذكر الحادثة
- فقدان الثقة بالآباء والأطباء
- مشاكل في العلاقات الزوجية لاحقاً
- الشعور بالظلم والغبن

ثالثاً: منصب الطب الحديث:

- منظمة الصحة العالمية: تعتبره تشويهاً وجريمة صحية
- الكليات الطبية: تُحرّم تماماً على الأطباء إجراءه
- الجمعيات الطبية العالمية: قرارات بمنعه وتجريم من يجريه

رابعاً: موقف الدولة والقانون:

- مصر (تشريعات حديثة): جريمة يعاقب عليها القانون
- السعودية: أفتيات شرعية بحرمته
- الإمارات: جريمة قانونية
- معظم الدول الإسلامية: تجريمه قانوناً الآن

خامساً: الردود على الاعتراضات الشائعة:

اعتراض: "هذه عادة قديمة"
- الرد: الشرع يفصل بين العادات الصحيحة والخاطئة (النسائيات واقفات من العادات الجاهلية)

اعتراض: "فيه نصوص شرعية تدل عليه"
- الرد: النصوص ضعيفة ومعارضة للقطعيات (النصوص الثابتة بحفظ النفس)

اعتراض: "يقلل الرغبة الجنسية للمرأة"
- الرد: هذا ضرر مقصود (والشرع يحفظ حق المرأة الجنسي في الحياة الزوجية)

سادساً: واجب الطبيب والمجتمع:

واجب الطبيب:
- رفض تماماً إجراء هذا الإجراء
- التثقيف الصحي للأسر عن أضراره
- الإبلاغ عن من يجري ختاناً على الإناث

واجب المجتمع:
- القضاء على هذه الممارسة بالتثقيف
- دعم القوانين التي تجرمها
- نشر الوعي الديني الصحيح

الحكم الشرعي القطعي:
ختان الإناث حرام شرعاً بإجماع الفقهاء المعاصرين، وحرام طبياً (يسبب أضراراً لا تُحتمل)، وحرام قانوناً في معظم دول العالم. لا يجوز لأي طبيب إجراؤه بأي حال، والواجب الديني والأخلاقي منعه ومحاربته.`,verdict:"FORBIDDEN",source:"دار الإفتاء المصرية + الشيخ عطية صقر + الشيخ يوسف القرضاوي",tags:["ختان","إناث","تشويه","ضرر","FGM","حرام"]},{id:"pharm_001_2025",category:Y.PHARMACY_DRUGS,title:"المنشطات والمشروبات والعقاقير المنشطة (Doping)",question:"ما هو الحكم الشرعي لتناول المنشطات الرياضية والبدنية؟",medical_context:"منشطات، دوبينج، استيرويدات، منشطات رياضية، أداء",ruling:`المنشطات محرمة شرعاً لأسباب متعددة:

السبب الأول: الضرر الصحي المؤكد:
- قاعدة فقهية: "لا ضرر ولا ضرار"
- الأضرار الثابتة طبياً:
  * تضرر القلب (عدم انتظام النبض، ارتفاع الضغط)
  * تضرر الكبد (التهاب، فشل)
  * اضطراب الهرمونات (انخفاض الإنتاج الطبيعي)
  * الأرق والقلق والاكتئاب
  * العقم وضعف الانتصاب
  * السرطان (خاصة الاستيرويدات)
  * موت القلب المفاجئ (معروف في الرياضيين)

السبب الثاني: الغش والخداع:
- الحديث: "من غشنا فليس منا"
- استخدام المنشطات في المنافسات الرياضية غش واضح
- يحرم المنافس الشريف من حقه
- المنافسة غير عادلة

السبب الثالث: تجاوز حدود الجسد الطبيعية:
- جسد الإنسان له قدرات طبيعية
- المنشطات تجبره على تجاوزها بشكل غير صحي
- هذا تعذيب للنفس

التطبيق العملي:

المنشطات المحظورة:
1. الاستيرويدات (الهرمونات البنائية): حرام قطعاً
2. المنشطات النفسية (الكوكايين، الأمفيتامين): حرام
3. منشطات التحمل (الإريثروبويتين): حرام
4. العقاقير التي تقنع بالتعب: حرام

الأدوية المرخصة طبياً:
- الفيتامينات والمكملات الطبيعية (للنقص فقط): جائزة
- الأدوية الموصوفة لمرض معين: جائزة (كأدوية الربو)
- الكافيين بكميات طبيعية: جائز

الفرق الأساسي:
- الدواء: علاج حالة مرضية
- المنشط: تعزيز أداء صحي لغاية غير مشروعة

حالات خاصة:

الحالة الأولى: المريض يحتاج منشط طبي:
- مريض القلب يحتاج منشطاً لقلبه: جائز
- التعليل: هذا دواء لحالة مرضية
- الشرط: بوصفة من طبيب متخصص

الحالة الثانية: الرياضي يتناول منشط:
- حرام قطعاً بدون استثناء
- حتى لو كان في بلد يسمح به
- المسلم ملزم بشريعة الله قبل قانون الدول

العقوبة الدنيوية والأخروية:
- قد يحرم من المشاركة في البطولات
- قد يؤدي للسجن (في بعض الدول)
- الإثم أمام الله (الضرر والغش)
- الضرر الصحي عقوبة دنيوية (الجسد يعاني)

الحكم الشرعي القطعي:
تناول المنشطات حرام شرعاً لما فيها من ضرر مؤكد على الصحة، وغش في المنافسات، ولا يجوز بأي حال إلا إذا كانت دواءً موصوفاً من طبيب لمرض معين.`,verdict:"FORBIDDEN",source:"د. مصطفى أحمد زيد + الفقه الميسر + دار الإفتاء المصرية",tags:["منشطات","دوبينج","رياضة","غش","ضرر","حرام"]},{id:"pharm_002_2025",category:Y.PHARMACY_DRUGS,title:"الدعاية والإعلان الكاذب للأدوية (Deceptive Marketing)",question:"ما هي الضوابط الشرعية للدعاية والإعلان عن الأدوية؟",medical_context:"دعاية دوائية، إعلان، تسويق، كذب، أعراض جانبية",ruling:`الدعاية الدوائية يجب أن تكون صادقة وأمينة:

الأصل الفقهي: حرمة الكذب والتدليس:
-قال تعالى: "والذين لَا يَشْهَدُونَ الزُّورَ وإذا مَرُّوا بِاللَّغْوِ مَرُّوا كِرَامًا"
- النبي ﷺ: "من غشنا فليس منا"
- الكذب في الدعاية = خيانة أمانة

الكذب المحرم في الدعاية:

نوع أول: الكذب الصريح:
- ادعاء تأثيرات غير موجودة للدواء
- المثال: ادعاء أن دواء البرد يعالج السرطان (كذب)
- العقوبة: إثم شرعي + ضرر للمريض

نوع ثاني: المبالغة الكاذبة:
- تضخيم فائدة الدواء بما يتجاوز الفعل الحقيقي
- المثال: دواء يخفف الصداع بنسبة 30% يُعلن أنه "شفاء تام"
- هذا تدليس ومخادعة

نوع ثالث: إخفاء الأضرار:
- عدم ذكر الأعراض الجانبية الخطيرة
- المثال: دواء يسبب قرحة المعدة لا يُذكر هذا الخطر
- هذا إيقاع بالمريض في الضرر

نوع رابع: التلاعب بالإحصائيات:
- استخدام نسب مضللة (مثل: "90% يستفيدون" بينما النسبة الحقيقية 30%)
- هذا كذب رقمي

الضوابط الشرعية الواجبة:

الضابط الأول: الصدق المطلق:
- يجب ذكر كل حقائق الدواء:
  * المادة الفعالة
  * الفوائد الحقيقية
  * الأضرار والأعراض الجانبية

الضابط الثاني: عدم التضليل:
- حتى لو كل المعلومات صحيحة، لا يجوز ترتيبها بطريقة مضللة
- المثال: ذكر الفوائد بحروف كبيرة والأضرار بحروف صغيرة

الضابط الثالث: التوازن:
- ذكر الفوائد والأضرار بعدالة
- عدم التركيز على الفوائد وحدها

الضابط الرابع: التصريح بالموانع:
- كل دواء له موانع استخدام (حالات معينة لا يُستخدم فيها)
- يجب الإشارة لهذه الموانع واضحة

الضابط الخامس: تحديد الفئة المستفيدة:
- كل دواء فعال لحالات معينة فقط
- يجب تحديد: متى يستخدم؟ لمن يستخدم؟

حالات من الدعاية المحرمة:

الحالة الأولى: دعاية لدواء غير مسجل:
- دواء لم يأخذ موافقة الجهات الصحية
- الحكم: حرام قطعاً

الحالة الثانية: دعاية تخص الأطباء فقط:
- دعاية موجهة للأطباء يجب أن تكون علمية دقيقة
- أقل تسهيلاً من دعاية المستهلك
- الكذب هنا يضر بألوف المرضى

الحالة الثالثة: دعاية على شاشات التلفاز:
- لا يجوز إعلان أدوية تحتاج وصفة طبية
- هذا خطر على الصحة العامة

حالات جائزة من الدعاية:

- دعاية صادقة وكاملة (فوائد + أضرار)
- دعاية موجهة للفئة المناسبة
- دعاية بموافقة الجهات الحكومية

الحكم الشرعي:
الدعاية الدوائية يجب أن تكون صادقة وأمينة وشاملة. الكذب أو المبالغة أو إخفاء الأضرار حرام شرعاً، والصيدلي والطبيب والشركة المسؤولة عن الضرر الذي يقع بسبب الدعاية الكاذبة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + أحكام الأدوية والدعاية الطبية",tags:["دعاية","إعلان","كذب","غش","أدوية","تدليس","أعراض جانبية"]},{id:"pharm_003_2025",category:Y.PHARMACY_DRUGS,title:"حرق الأدوية / التلاعب بالأسعار والفواتير (Burning)",question:'ما حكم بيع الدواء بطريقة "الحرق" (خصم كبير جداً من السعر الفعلي) لتحقيق أهداف مبيعات وهمية؟',medical_context:"حرق، خصم، تلاعب، فواتير مزيفة، تسويق",ruling:`حرق الأدوية (الخصم الكبير جداً) حرام شرعاً:

تعريف حرق الأدوية:
- بيع الدواء بسعر أقل من التكلفة الفعلية (خصم 40% أو أكثر)
- لتحقيق أرقام مبيعات وهمية (target)
- أو لإفساد السوق ضد منافسين
- أو لتضخيم الرقم التجاري للشركة

الأسباب الشرعية للتحريم:

السبب الأول: الكذب والتدليس:
- الشركة تدعي مبيعات لم تحدث بسعر حقيقي
- الفواتير تحمل أسعار وهمية
- هذا تزييف للحقائق المالية

السبب الثاني: الغش والخداع:
- إذا كانت الفواتير مزيفة = تزوير
- تزوير الفواتير جريمة شرعية وقانونية

السبب الثالث: الضرر الاقتصادي:
- إفساد سوق الأدوية (أسعار غير حقيقية)
- منافس قد يفلس بسبب هذا
- المستهلك قد يشتري أدوية رديئة بسبب الفوضى السعرية

السبب الرابع: الأمانة:
- الفرق بين السعر المدفوع والسعر الحقيقي = مال إضاعة
- إذا كان المال من الدولة أو التأمين = خيانة أمانة عامة

التطبيق العملي:

مثال 1: دواء تكلفته 10 جنيه:
- السعر الطبيعي: 15 جنيه (ربح معقول)
- الحرق: بيعه بـ 5 جنيه
- الفاتورة: تكتب 15 جنيه (كذب)
- الهدف: تحقيق target مبيعات وهمي
- الحكم: حرام (كذب + غش)

مثال 2: شركة تحرق ضد منافس:
- تبيع الدواء برخص جداً (خسارة)
- الهدف: إفلاس المنافس
- الحكم: حرام (احتكار وإضاعة مال)

مثال 3: الخصم الحقيقي (جائز):
- دواء لم يُباع، اقتربت انتهاء صلاحيته
- تبيعه بخصم 20% سعر أصلي
- الفواتير صحيحة
- الهدف: تقليل خسارة
- الحكم: جائز

الفرق بين الحرق والخصم الشرعي:

الخصم الجائز:
- الفواتير تعكس السعر الحقيقي المخصوم
- لا كذب في الأرقام
- السعر الجديد معقول (ربح صغير)
- الهدف: بيع حقيقي

الحرق المحرم:
- الفواتير بسعر مختلف عن الواقع
- كذب في الأرقام
- خسارة متعمدة (ربح سالب)
- الهدف: تحقيق أرقام وهمية

الآثار القانونية والشرعية:

العقوبة الدنيوية:
- تحقيق من السلطات الضريبية
- غرامات مالية
- إغلاق النشاط في الحالات الخطيرة

العقوبة الشرعية:
- إثم الكذب والتدليس
- إثم إضاعة المال
- إثم إفساد السوق

حالات صعبة:

الحالة: دواء لم يُباع، والخسارة كبيرة:
- يجوز عمل خصم حقيقي (لكن بفواتير صحيحة)
- لا يجوز الحرق (بفواتير كاذبة)

الحالة: ضغط من الشركة لتحقيق target:
- لا يبرر الحرق أو التزوير
- واجب الموظف رفض الأوامر غير الشرعية
- "لا طاعة لمخلوق في معصية الخالق"

الحكم الشرعي:
حرق الأدوية (الخصم غير الحقيقي مع تزوير الفواتير) حرام شرعاً وقانوناً، لما فيه من كذب وتدليس وإفساد للسوق. جائز الخصم الحقيقي بفواتير حقيقية.`,verdict:"FORBIDDEN",source:"شرعة التجارة الإسلامية + أحكام البيع والغش",tags:["حرق","سوق","تلاعب","فواتير","خصم","تزوير","غش"]},{id:"pharm_004_2025",category:Y.PHARMACY_DRUGS,title:"بيع أدوية التأمين الصحي للأفراد غير المستحقين (Insurance Fraud)",question:"هل يجوز للصيدلي أو الموظف بيع أدوية التأمين الصحي المدعومة لأشخاص غير مستحقين؟",medical_context:"تأمين صحي، صيدلية، مال عام، مستحقون، دعم",ruling:`بيع أدوية التأمين لغير المستحقين حرام قطعاً:

الأساس الشرعي: خيانة الأمانة:
- قال تعالى: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَخُونُوا اللَّهَ وَالرَّسُولَ"
- الموظف/الصيدلي أمين على المال العام
- الموارد الصحية = مال عام مخصص

نوع المال المسروق:

هذا ليس مال عادي، بل:
1. مال عام من الدولة/التأمين
2. مخصص لفئة محددة (المرضى المحتاجين)
3. تحت إدارة وحماية الدولة

الأسباب الشرعية للتحريم:

السبب الأول: أكل المال بالباطل:
- قال تعالى: "ولا تأكلوا أموالكم بينكم بالباطل"
- الموظف يأخذ مال عام ليس حقه
- هذا أكل بالباطل

السبب الثاني: الاعتداء على حق الفقير:
- هذا المال مخصص للمريض الفقير
- بيعه لغني = سرقة من الفقير
- قال ﷺ: "من ظلم ضعيفاً أو فقيراً فكأنما أساء إليّ"

السبب الثالث: الخيانة:
- الموظف استقبل المال في أمانة
- بيعه = خيانة الأمانة
- قال ﷺ: "من خان فليس منا"

السبب الرابع: الضرر للنظام:
- هذا يؤدي لإفلاس نظام التأمين
- يضر بالمرضى الحقيقيين
- يؤثر على الاقتصاد الصحي

التطبيق العملي:

مثال 1: صيدلي يبيع دواء تأمين:
- دواء مدعوم 100 ريال (التأمين يدفع)
- يبيعه لشخص عادي بـ 150 ريال
- يوهم النظام أنه للمستحق
- الحكم: حرام وجريمة سرقة

مثال 2: موظف يوثق أدوية كاذبة:
- يسجل أدوية للمريض لم يأخذها
- يأخذ الفرق المادي
- الحكم: حرام وتزوير

مثال 3: صيدلي يبيع لفرد بدون بطاقة تأمين:
- يدعي أنه صاحب البطاقة
- يأخذ الدواء المدعوم
- الحكم: حرام وغش

الجرائم المترتبة:

جريمة أولى: السرقة:
- سرقة من مال عام

جريمة ثانية: الغش:
- غش في النظام الحكومي

جريمة ثالثة: التزوير (إذا وجد):
- تزوير وثائق التأمين

جريمة رابعة: الخيانة:
- خيانة الأمانة الموظفة

العقوبات:

العقوبة الدنيوية:
- السجن (حسب القانون)
- غرامات مالية كبيرة
- فصل من العمل
- ملاحقة قانونية

العقوبة الشرعية:
- الإثم الديني (الخيانة والسرقة)
- قال ﷺ: "من ظلم قِيد شبر من الأرض كلّفه الله أن يحفر منه إلى سبع أرضين يوم القيامة"

الحالات الخاصة:

الحالة الأولى: موظف اضطر:
- إذا كان موظف في حاجة شديدة ولا يجد رزقاً
- الحرام يبقى حراماً حتى في الضرورة
- الحل: طلب الراتب المستحق أو البحث عن عمل آخر

الحالة الثانية: أخطاء إدارية:
- أدوية انتهت صلاحيتها في البطاقة
- هذا خطأ إداري، لا يبرر البيع غير الشرعي

الحالة الثالثة: دواء للفرد الحقيقي المستحق:
- الحكم: جائز (هذا هو الأصل)
- بلا أي تلاعب

التحذير من الإثم:

الموظف الذي يقوم بهذا:
- يأكل المال الحرام يومياً
- يضر بصحة الناس (حرمانهم من الدواء)
- يخيس دول وشعوب كاملة

الحكم الشرعي القطعي:
بيع أدوية التأمين الصحي المدعومة لأشخاص غير مستحقين حرام قطعاً وتعتبر سرقة وخيانة أمانة. الواجب على الموظف رفع يده عن هذا الفعل فوراً، والتوبة والرجوع إلى الله تعالى.`,verdict:"FORBIDDEN",source:"دار الإفتاء المصرية + الفقه الإسلامي (السرقة والخيانة)",tags:["تأمين","مال عام","فساد","سرقة","خيانة أمانة","حرام"]},{id:"pharm_005_2025",category:Y.PHARMACY_DRUGS,title:"تشخيص الصيدلي للمرض ووصفه للدواء بدلاً من الطبيب",question:"هل يجوز للصيدلي أن يشخص المرض ويصف الدواء بدلاً من الطبيب دون استشارة؟",medical_context:"صيدلي، تشخيص، وصفة، طبيب، مسؤولية، ضرر",ruling:`تشخيص الصيدلي وحده للمرض حرام شرعاً وطبياً:

الفرق بين الطبيب والصيدلي:

الطبيب:
- متخصص في تشخيص الأمراض
- يدرس الفيزيولوجيا والباثولوجيا والتشخيص
- يعرف التاريخ الطبي والفحوصات المعملية
- عنده رخصة حكومية للتشخيص

الصيدلي:
- متخصص في الأدوية والمواد الفعالة
- يدرس خصائص الأدوية والتفاعلات
- لا يتلقى تدريباً كافياً في التشخيص
- عنده رخصة فقط للصرف برشتة طبيب

الأساس الشرعي للتحريم:

النقطة الأولى: تجاوز الاختصاص:
- كل شخص مسؤول عن مجال اختصاصه فقط
- قال ﷺ: "من عمل في غير اختصاصه فقد خسر ضماناً"
- الصيدلي لا اختصاص له في التشخيص

النقطة الثانية: المسؤولية الطبية:
- إذا أخطأ الصيدلي في التشخيص وأصيب المريض = ضمان
- الصيدلي غير مدرب ولا مسؤول عن الأخطاء التشخيصية
- المسؤولية تقع على الصيدلي والمريض يستحق التعويض

النقطة الثالثة: الضرر المحقق:
- أخطاء تشخيصية = ضرر للمريض
- دواء خاطئ = مريض يسوء حاله
- قاعدة: "لا ضرر ولا ضرار"

النقطة الرابعة: التطبب المنهي عنه:
- قال ﷺ: "من تطبب بلا علم فقد ضمن"
- الصيدلي بدون تدريب تشخيصي = تطبب
- التطبب = ضمان للضرر

الحالات المختلفة:

الحالة الأولى: دواء معروف بدون وصفة (OTC):
- الصيدلي يصرف أدوية معروفة بدون وصفة طبيب (كالمسكنات)
- الحكم: جائز إذا كان الدواء آمناً وبسيطاً
- الشرط: إذا لم يشخص الصيدلي المرض بنفسه
- مثال: شخص يقول "أعطني مسكن" = جائز

الحالة الثانية: صيدلي يسأل وجواب المريض واضح:
- مريض: "عندي إسهال خفيف"
- صيدلي يصرف دواء إسهال معروف
- الحكم: جائز (ليس تشخيص، بل صرف معروف)
- الشرط: أن يكون واضح جداً وبسيط

الحالة الثالثة: صيدلي يشخص مرض معقد:
- مثال: عطاس وسعال = "عندك حساسية" (تشخيص)
- ثم يصرف أدوية حساسية
- الحكم: حرام وخطأ
- التعليل: قد يكون الأعراض سرطان رئة أو مرض آخر

الحالة الرابعة: صيدلي يتشاور مع طبيب:
- صيدلي يستشير طبيب قبل الصرف
- الحكم: جائز (التشخيص من الطبيب)
- دور الصيدلي: تنفيذ التعليمات

مسؤولية الصيدلي:

ما يجوز للصيدلي:
1. صرف الدواء برشة طبيب موثوقة
2. التحقق من توافقية الأدوية (أن لا تتعارض)
3. تعليم المريض كيفية أخذ الدواء
4. تحذير المريض من الأعراض الجانبية
5. نصح المريض بطلب الطبيب لو استمر المرض

ما لا يجوز للصيدلي:
1. تشخيص المرض
2. وصف دواء جديد بدون أمر طبيب
3. تعديل وصفة الطبيب
4. إعطاء نصيحة طبية معقدة
5. ادعاء كفاءة طبية

الضرر المحقق من تشخيص الصيدلي:

مثال 1: مريض عنده ألم في الصدر:
- صيدلي يشخص: "هذا ألم عضلات"
- ويصرف مسكن
- المريض في الواقع عنده جلطة في القلب
- النتيجة: موت المريض (الصيدلي ضامن)

مثال 2: صداع مستمر:
- صيدلي يشخص: "صداع عادي"
- يصرف مسكن
- المريض في الواقع عنده ورم في الدماغ
- النتيجة: تأخر التشخيص والضرر

مثال 3: ألم في البطن:
- صيدلي يشخص: "مغص معوي"
- يصرف دواء
- المريض عنده التهاب الزائدة الدودية (تحتاج جراحة)
- النتيجة: مضاعفات خطيرة

المسؤولية القانونية والشرعية:

إذا أخطأ الصيدلي:
- يحاسب جنائياً (قد يسجن)
- يدفع تعويض مالي للمريض
- يفقد رخصة الصيدلة
- إثم شرعي (تسبب في ضرر)

الحكم الشرعي:
لا يجوز للصيدلي تشخيص المرض ووصف الدواء من عنده بدلاً من الطبيب. دوره يقتصر على الصرف برشة طبيب موثوقة، والنصح حول كيفية استخدام الدواء. أي تشخيص بدون طبيب يعتبر "تطبب" محرم وضامن للضرر.`,verdict:"FORBIDDEN",source:"الفقه الإسلامي (التطبب والمسؤولية) + القوانين الطبية",tags:["صيدلي","تشخيص","تطبب","مسؤولية","ضرر","طبيب"]},{id:"misc_001_2025",category:Y.MISCELLANEOUS,title:"إفشاء السر الطبي وحفظ سرية المريض",question:"متى يجوز للطبيب إفشاء سر المريض؟ وما حدود الكتمان الطبي؟",medical_context:"سر طبي، سرية، confidentiality، خصوصية، إفشاء",ruling:`الأصل الفقهي الأول: وجوب كتمان السر:
- قال تعالى: "يا أيها الذين آمنوا إن جاءكم فاسق بنبأ فتبينوا"
- النبي ﷺ قال: "من ستر مسلماً ستره الله في الدنيا والآخرة"
- الطبيب ملزم بحفظ أسرار المريض

الأساس الشرعي:
- السر أمانة عند الطبيب
- الطبيب وثيق الصلة بجسد المريض وأسراره الصحية
- إفشاء السر = خيانة أمانة

المبدأ العام:
يجب على الطبيب كتمان كل أسرار المريض الطبية بدون استثناء، ما لم توجد حالة استثنائية تستوجب الإفشاء.

الحالات الاستثنائية التي يجوز (بل يجب) فيها الإفشاء:

الحالة الأولى: منع جريمة أكبر:
- إذا كان كتمان السر يؤدي لقتل أو إيذاء شخص
- مثال: مريض يعاني من جنون مؤقت وقال للطبيب "سأقتل زوجتي"
- الحكم: يجب إفشاء السر لإنقاذ حياة الزوجة
- التعليل: حفظ النفس مقدم على حفظ السر

الحالة الثانية: منع انتحار:
- إذا أخبر المريض الطبيب أنه سينتحر
- الحكم: يجب على الطبيب إخبار الأسرة والسلطات
- التعليل: الحياة مقدسة في الإسلام

الحالة الثالثة: مرض معدٍ يهدد المجتمع:
- أمراض معدية خطيرة (السل، الجذام، الكوليرا)
- الحكم: يجب تبليغ السلطات الصحية
- التعليل: حفظ صحة المجتمع
- الشرط: ألا يحذر الطبيب المريض ويطلب منه إخبار محاربيه (والأسرة)

الحالة الرابعة: مرض معدٍ يهدد الزوجة:
- أمراض تناسلية معدية (الزهري، السيلان، الإيدز)
- الحكم: يجب إخبار الزوجة (إن أمكن بحذر)
- التعليل: حق الزوجة في الصحة والسلامة
- الطريقة: إما مع موافقة الزوج، أو بالتهديد الشديد

الحالة الخامسة: الإبلاغ عن الأمراض السارية قانوناً:
- قوانين الصحة تفرض تبليغ السلطات عن أمراض معينة
- الحكم: يجب الامتثال (الطاعة للحاكم في غير معصية)
- الأمراض المطلوبة: الأمراض المعدية الخطيرة

الحالة السادسة: تبليغ الجهات الحكومية:
- المواليد والوفيات (قيد الأحوال)
- الأمراض المهنية (السموم، الإشعاع)
- حالات الإيذاء الجسدي (التعذيب، الاغتصاب)
- الحكم: يجب الإبلاغ

الحالة السابعة: الشهادة أمام القضاء:
- إذا استدعي الطبيب للشهادة أمام المحكمة
- الحكم: يجب الشهادة والإفشاء
- التعليل: الشهادة فرض عين إذا استدعي

الحالة الثامنة: موافقة المريض:
- إذا أذن المريض بإفشاء سره
- الحكم: جائز الإفشاء
- التطبيق: نقل ملف المريض لطبيب آخر

الحالات التي لا يجوز فيها الإفشاء:

- فضول شخصي (فقط للاستطلاع)
- ضغط من أهل المريض بدون سبب قانوني
- إعلام وسائل الإعلام (إلا بموافقة المريض)
- أبحاث طبية بدون إخفاء الهوية
- تدريب الطلاب بدون موافقة
- الفضيحة أو الإحراج (بدون ضرر مهم)

آليات الحماية:

للطبيب:
1. حفظ ملفات المريض بسرية تامة
2. عدم نشر قضايا المريض في الندوات بدون موافقة
3. عدم مناقشة حالات المريض مع زملاء غير ضروريين
4. تدمير الملفات القديمة بأمان

للمريض:
1. حق الوصول لملفه الطبي
2. حق إزالة بيانات شخصية
3. حق رفع دعوى ضد من ينتهك سريته

الحكم الشرعي:
أصل حفظ سر المريض واجب على الطبيب، والإفشاء لا يجوز إلا في حالات استثنائية محددة بدقة (منع ضرر أكبر، أمراض معدية تهدد المجتمع، إبلاغ قانوني، شهادة قضائية، موافقة المريض).`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي + د. محمود ضيفي",tags:["سر طبي","سرية","كتمان","خصوصية","إفشاء","أمانة"]},{id:"misc_002_2025",category:Y.MISCELLANEOUS,title:"المسؤولية الجنائية والمدنية للطبيب (Medical Malpractice)",question:"متى يتحمل الطبيب مسؤولية قانونية وشرعية عن خطئه الطبي؟",medical_context:"خطأ طبي، إهمال، مسؤولية، ضمان، negligence",ruling:`المسؤولية الطبية تقوم على عنصرين:

العنصر الأول: خطأ الطبيب:
الطبيب مسؤول (ضامن) عن الخطأ في الحالات التالية:

1. الجهل والتطبب بدون تأهيل:
   - الطبيب الذي ليس متخصصاً في المجال يمارس الطب
   - المثال: طبيب أسنان يجري عملية قلبية
   - الحكم: مسؤول قطعاً عن أي ضرر
   - التعليل: قال ﷺ "من تطبب بلا علم فقد ضمن"

2. الإهمال والتقصير:
   - عدم اتباع الأصول الطبية المشروعة
   - الإهمال في التشخيص أو العلاج
   - المثال: طبيب يغسل يديه بدون صابون في جراحة (خطأ إجرائي)
   - الحكم: مسؤول عن العدوى الناتجة
   - التعليل: عدم الالتزام بأصول المهنة

3. المعالجة بدون إذن المريض:
   - إجراء عملية أو معالجة بدون موافقة واعية من المريض
   - الاستثناء: حالات الطوارئ (المريض فاقد الوعي)
   - الحكم: مسؤول بقطع النظر عن النتيجة
   - التعليل: انتهاك حق المريض

4. الخطأ العمد:
   - الطبيب يقصد الإضرار (بدافع الكراهية مثلاً)
   - الحكم: مسؤول قطعاً (قد يصل لجريمة جنائية)

5. الخطأ في التشخيص (في بعض الحالات):
   - الطبيب الحذق يخطئ في التشخيص = لا مسؤولية
   - الطبيب الذي لم يبذل الجهد الكافي = مسؤول
   - المثال: طبيب لم يطلب تحاليل ضرورية واشتبه في التشخيص

6. الإجراء غير الضروري:
   - الطبيب يجري عملية جراحية دون حاجة حقيقية
   - الحكم: مسؤول عن مضاعفات العملية

العنصر الثاني: الضرر الفعلي:
- يجب أن يحدث ضرر للمريض (جسدي أو نفسي أو مالي)
- الخطأ بدون ضرر = لا مسؤولية

الربط السببي (الرابط بين الخطأ والضرر):
- يجب إثبات أن الخطأ تسبب في الضرر مباشرة
- مثال: الطبيب أعطى دواء خاطئ → حدثت عدوى → الضرر
- الخطأ بدون علاقة بالضرر = لا مسؤولية

حالات لا توجد فيها مسؤولية:

1. الطبيب الحذق المتخصص:
   - اتبع الأصول الطبية الحالية
   - بذل جهداً حقيقياً
   - كانت النتيجة متوقعة بالخطأ
   - الحكم: لا مسؤولية

2. الحالات الطبية المعقدة:
   - المرض نادر أو معقد
   - التشخيص صعب حتى للمتخصصين
   - بذل الطبيب الجهد المعقول
   - الحكم: لا مسؤولية بدون إهمال

3. المضاعفات غير المتوقعة:
   - حدثت مضاعفات بدون خطأ من الطبيب
   - الطبيب توخى كل الحذر
   - الحكم: لا مسؤولية

4. الحصول على موافقة المريض (Informed Consent):
   - شرح الطبيب كل المخاطر
   - وافق المريض واعياً
   - حدثت النتيجة المحتملة
   - الحكم: لا مسؤولية مطلقة (لكن الطبيب آثم أدبياً إن لم يحذر)

أنواع المسؤولية:

المسؤولية الجنائية:
- السجن (من 3 أشهر إلى سنوات حسب الضرر)
- غرامة مالية
- إلغاء الترخيص
- تُطبق في حالات الخطأ الفادح أو العمد

المسؤولية المدنية:
- دفع تعويض مالي للمريض
- تعويض عن الضرر الفعلي
- تعويض عن الألم والمعاناة
- تعويض عن فقدان الكسب

المسؤولية الإدارية:
- تنبيهات من مجلس النقابة
- إيقاف الترخيص مؤقتاً
- شطب من سجل الأطباء (حالات خطيرة)

الآليات الشرعية للطبيب:

للدفاع عن نفسه:
1. توثيق كل خطواته الطبية
2. الحفاظ على ملفات المريض كاملة
3. الشرح الكامل للمريض قبل العملية
4. الحصول على موافقة موثقة (Written Consent)
5. الاستشارة في الحالات الصعبة
6. المتابعة الدقيقة بعد العملية

نماذج من القضايا:

نموذج 1: جراح يترك أداة في بطن المريض:
- الخطأ واضح = مسؤولية مطلقة
- التعويض: تكاليف العملية الثانية + الألم + الوقت

نموذج 2: طبيب لا يطلب صورة إكس (X-ray):
- المريض يشتكي ألماً في الصدر
- الطبيب لم يطلب صورة
- تبين لاحقاً كسر في الضلع
- المسؤولية: نعم (إهمال)

نموذج 3: عملية جراحية والمريض مات من حساسية دواء معروف:
- الطبيب لم يسأل عن حساسيات المريض
- الحكم: مسؤول (إهمال في التشخيص)

نموذج 4: طبيب حذق لكن حدثت مضاعفة نادرة:
- الطبيب بذل كل الجهد
- الحكم: لا مسؤولية (القدر)

الحكم الشرعي النهائي:
الطبيب مسؤول (ضامن) عن الخطأ إذا كان جاهلاً أو مهملاً أو متعمداً أو لم يحصل على موافقة المريض. أما إذا كان حاذقاً واتبع الأصول الطبية وأذن المريض وحدث ضرر خارج عن إرادته، فلا ضمان عليه.`,verdict:"CONDITIONAL",source:"ابن القيم الجوزية + القوانين الطبية الحديثة + قرارات المحاكم",tags:["خطأ طبي","ضمان","إهمال","مسؤولية","تعويض","جنائي"]},{id:"genetic_006_2025",category:Y.GENETICS_REPRODUCTION,title:"الاستنساخ والهندسة الوراثية (Cloning & Genetic Engineering)",question:"ما هو الحكم الشرعي للاستنساخ البشري والاستنساخ العلاجي والهندسة الوراثية؟",medical_context:"استنساخ، cloning، خلايا جذعية، جينات، وراثة، هندسة",ruling:`الحكم: جائز شرعاً للحيوانات والنباتات
التعليل:
- تسخير الحيوانات والنباتات للإنسان
- لا يترتب عليه اختلاط أنساب
- فيه مصلحة للبشر (غذاء أفضل، أدوية)

قرارات المجامع الفقهية:

مجمع الفقه الإسلامي الدولي (القرار 96/10):
- حرم الاستنساخ البشري تماماً
- أجاز الاستنساخ العلاجي بشروط
- أجاز الهندسة الوراثية العلاجية

الحكم الشرعي النهائي:
1. الاستنساخ البشري: حرام قطعاً
2. الاستنساخ العلاجي: جائز بل مطلوب
3. الهندسة الوراثية العلاجية: جائزة
4. تحسين الصفات: مكروه أو حرام
5. استنساخ الحيوان: جائز`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (قرار 96/10) + د. أنس أبو شادي",tags:["استنساخ","خلايا جذعية","جينات","هندسة وراثية","DNA","أمراض وراثية"]},{id:"fast_003_2025",category:Y.FASTING_MEDICINE,title:"التداوي بالمحرمات (أدوية تحوي كحول أو خنزير)",question:"هل يجوز استخدام أدوية تحوي كحولاً أو مشتقات خنزير؟",medical_context:"كحول، خنزير، gelatin، جيلاتين، مواد محرمة، أدوية",ruling:`المشكلة الطبية:
- بعض الأدوية تحوي كحول (كمذيب أو حافظ)
- بعض الأدوية تحوي جيلاتين من خنزير (كبسولات)
- بعض اللقاحات تحوي مشتقات خنزير
- بعض الأدوية تُصنع من مصادر محرمة

الأصل الشرعي: تحريم المحرمات:
- قال تعالى: "حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ"
- الكحول محرم لأنه مسكر
- لحم الخنزير محرم قطعاً

الآراء الفقهية:

الرأي الأول: التحريم المطلق (الأكثرية):
- الحكم: حرام تناول الأدوية المحتوية على مواد محرمة
- التعليل: لا فرق بين الشراب والدواء في التحريم
- المذهب: الحنفية والمالكية والحنابلة (في وجه)

الرأي الثاني: الرخصة للضرورة (أقلية معاصرة):
- الحكم: جائز إذا توفرت شروط الضرورة
- التعليل: "الضرورات تبيح المحظورات"

الرأي الثالث: الاستحالة (بعض المعاصرين):
- الحكم: حكم الاستحالة
- التعريف: المادة المحرمة تتحول كيميائياً فتصير طاهرة
- المثال: الكحول في الدواء قد يكون قد استحال

الشروط الصارمة للضرورة:

شرط أول: الضرورة الحقيقية:
- المريض في خطر موت أو مرض شديد جداً
- الدواء الوحيد الذي قد ينقذه
- مثال: دواء الإيدز الوحيد يحوي كحول

شرط ثاني: عدم البديل:
- لا يوجد دواء بديل حلال طاهر
- البحث الجاد عن بديل قبل الاستخدام
- مثال: البحث عن لقاح بدون مشتقات خنزير

شرط ثالث: ندرة الضرر:
- الدواء لم يسبب ضرراً صحياً آخر
- المنفعة أكبر من الضرر
- مثال: دواء البنسلين (الكحول فيه قليل جداً)

شرط رابع: النية الصحيحة:
- الطبيب والمريض يقصدان العلاج فقط
- لا يقصدان تعاطي محرم

الحالات المختلفة:

الحالة الأولى: الكحول في الأدوية:
- الكحول قد يكون:
  * مذيباً للمادة الفعالة
  * حافظاً يمنع تعفن الدواء
  * عامل استخلاص

- الحكم حسب النسبة:
  * نسبة قليلة جداً (أقل من 5%): قد يُرخص بها بالضرورة
  * نسبة عالية (أكثر من 20%): يجب البحث عن بديل

الحالة الثانية: الجيلاتين من الخنزير:
- يُستخدم في الكبسولات
- بدائل موجودة: كبسولات نباتية (الاهتمام يزداد)
- الحكم: يجب البحث عن البديل

الحالة الثالثة: اللقاحات والأصول الحيوانية:
- بعض اللقاحات تُنمى على خلايا خنزير
- بدائل إسلامية موجودة (بطء في الإنتاج)
- الحكم:
  * الضرورة (لمنع وباء): قد تبيح التطعيم
  * الانتظار (إن أمكن): الأفضل

الحكم الشرعي النهائي:
- الأصل: تحريم تناول الأدوية المحتوية على مواد محرمة
- الاستثناء: بالضرورة الحقيقية والشروط الصارمة
- الأفضل: البحث عن بدائل حلال وطاهرة`,verdict:"FORBIDDEN",source:"ابن القيم الجوزية + دار الإفتاء المصرية + فتاوى معاصرة",tags:["أدوية","كحول","خنزير","جيلاتين","لقاحات","ضرورة","بديل"]},{id:"genetic_007_2025",category:Y.GENETICS_REPRODUCTION,title:"الاستنساخ والهندسة الوراثية (Cloning & Genetic Engineering)",question:"ما هو الحكم الشرعي للاستنساخ البشري والاستنساخ العلاجي والهندسة الوراثية؟",medical_context:"استنساخ، cloning، خلايا جذعية، جينات، وراثة، هندسة",ruling:`أنواع الاستنساخ:

النوع الأول: الاستنساخ البشري (Reproductive Cloning):
التعريف: إنتاج نسخة طبق الأصل من الإنسان (نسخة بيولوجية مطابقة تماماً لآخر)

الحكم: حرام قطعاً وبإجماع الفقهاء المعاصرين

الأسباب الشرعية للتحريم:

1. العبث بالخلق:
   - قال تعالى: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ"
   - الاستنساخ محاولة تقليد الخلق الإلهي

2. اختلاط الأنساب:
   - المستنسخ: من يكون والده؟ من تكون والدته؟
   - التشابه الجيني مع الأصلي: هل يعتبر توأماً؟ أم شيء آخر؟
   - يترتب على ذلك مشاكل إرثية وزواجية معقدة

3. تضييع الأنساب:
   - الشريعة حريصة على حفظ النسب
   - الاستنساخ يخلق عدماً وراثياً

4. الإساءة النفسية للمستنسخ:
   - المستنسخ قد يعاني من "متلازمة الظل" (عيش في ظل آخر)
   - فقدان الهوية الشخصية والتفردية
   - الضغط النفسي من الآخرين ("أنت نسخة")

5. المشاكل الصحية:
   - الدراسات أثبتت أن المستنسخات (الحيوانات) لديها عيوب وراثية
   - احتمالية عالية من التشوهات والأمراض

النتيجة: الاستنساخ البشري حرام بقطع الشك.

النوع الثاني: الاستنساخ العلاجي (Therapeutic Cloning):
التعريف: استخدام الخلايا الجذعية لإنتاج أعضاء وأنسجة لعلاج الأمراض (بدون إنتاج إنسان كامل)

أمثلة:
- استنساخ قلب لمريض قلب فاشل
- استنساخ كبد لمريض فشل كبدي
- استنساخ خلايا عصبية لمريض الزهايمر

الحكم: جائز شرعاً بل مطلوب (من باب العلاج الطبي)

الأسباب الشرعية:

1. النية الطيبة:
   - الهدف: شفاء المريض وإنقاذ حياته
   - قال تعالى: "وَنَنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ"

2. الضرورة الطبية:
   - المريض قد يموت بدون هذا العلاج
   - لا توجد بدائل أخرى فعالة

3. عدم اختلاط الأنساب:
   - لا يُنتج إنسان كامل
   - فقط أعضاء وأنسجة

4. موافقة القيم الشرعية:
   - يحقق حفظ النفس (مقصد شرعي)
   - لا يخالف قاعدة شرعية أخرى

الشروط الواجبة للاستنساخ العلاجي:

- موافقة المريض أو ولي أمره
- إذن من لجنة أخلاقيات البحث الطبي
- أن تكون الضرورة حقيقية (لا للرفاهية)
- احترام كرامة الإنسان في كل الخطوات

النوع الثالث: الهندسة الوراثية (Genetic Engineering):
التعريف: تعديل الجينات الوراثية للقضاء على أمراض وراثية أو تحسين الصفات

الحالات:

1. تصحيح الجينات المريضة:
   - الهدف: علاج أمراض وراثية (الهيموفيليا، الثلاسيميا)
   - الحكم: جائز بل مطلوب
   - التعليل: علاج طبي شرعي

2. تحسين الصفات (Enhancement):
   - الهدف: تحسين ذكاء أو قوة الشخص
   - الحكم: محل خلاف:
     * البعض يراه جائزاً (تطوير طبيعي)
     * الأكثر يراه مكروهاً أو محرماً (عبث بالخلق)
   - الأحوط: التحريم

3. اختيار صفات الجنين (Designer Baby):
   - الهدف: اختيار جنين بصفات معينة (عيون زرقاء، ذكي)
   - الحكم: حرام إذا كان للكمال والرفاهية
   - جائز إذا كان لتجنب أمراض وراثية

الضابط الأساسي:
العبرة بالنية والغرض من الهندسة الوراثية، وليس بالتقنية نفسها.

استنساخ الحيوان والنبات:
الحكم: جائز شرعاً
التعليل:
- تسخير الحيوانات والنباتات للإنسان
- لا يترتب عليه اختلاط أنساب
- فيه مصلحة للبشر (غذاء أفضل، أدوية)

قرارات المجامع الفقهية:

مجمع الفقه الإسلامي الدولي (القرار 96/10):
- حرم الاستنساخ البشري تماماً
- أجاز الاستنساخ العلاجي بشروط
- أجاز الهندسة الوراثية العلاجية

الحكم الشرعي النهائي:
1. الاستنساخ البشري: حرام قطعاً
2. الاستنساخ العلاجي: جائز بل مطلوب
3. الهندسة الوراثية العلاجية: جائزة
4. تحسين الصفات: مكروه أو حرام
5. استنساخ الحيوان: جائز`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (قرار 96/10) + د. أنس أبو شادي",tags:["استنساخ","خلايا جذعية","جينات","هندسة وراثية","DNA","أمراض وراثية"]},{id:"pharm_006_2025",category:Y.PHARMACY_DRUGS,title:"التداوي بالمحرمات (أدوية تحوي كحول أو خنزير)",question:"هل يجوز استخدام أدوية تحوي كحولاً أو مشتقات خنزير؟",medical_context:"كحول، خنزير، gelatin، جيلاتين، مواد محرمة، أدوية",ruling:`المشكلة الطبية:
- بعض الأدوية تحوي كحول (كمذيب أو حافظ)
- بعض الأدوية تحوي جيلاتين من خنزير (كبسولات)
- بعض اللقاحات تحوي مشتقات خنزير
- بعض الأدوية تُصنع من مصادر محرمة

الأصل الشرعي: تحريم المحرمات:
- قال تعالى: "حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ"
- الكحول محرم لأنه مسكر
- لحم الخنزير محرم قطعاً

الآراء الفقهية:

الرأي الأول: التحريم المطلق (الأكثرية):
- الحكم: حرام تناول الأدوية المحتوية على مواد محرمة
- التعليل: لا فرق بين الشراب والدواء في التحريم
- المذهب: الحنفية والمالكية والحنابلة (في وجه)

الرأي الثاني: الرخصة للضرورة (أقلية معاصرة):
- الحكم: جائز إذا توفرت شروط الضرورة
- التعليل: "الضرورات تبيح المحظورات"

الرأي الثالث: الاستحالة (بعض المعاصرين):
- الحكم: حكم الاستحالة
- التعريف: المادة المحرمة تتحول كيميائياً فتصير طاهرة
- المثال: الكحول في الدواء قد يكون قد استحال

الشروط الصارمة للضرورة:

شرط أول: الضرورة الحقيقية:
- المريض في خطر موت أو مرض شديد جداً
- الدواء الوحيد الذي قد ينقذه
- مثال: دواء الإيدز الوحيد يحوي كحول

شرط ثاني: عدم البديل:
- لا يوجد دواء بديل حلال طاهر
- البحث الجاد عن بديل قبل الاستخدام
- مثال: البحث عن لقاح بدون مشتقات خنزير

شرط ثالث: ندرة الضرر:
- الدواء لم يسبب ضرراً صحياً آخر
- المنفعة أكبر من الضرر
- مثال: دواء البنسلين (الكحول فيه قليل جداً)

شرط رابع: النية الصحيحة:
- الطبيب والمريض يقصدان العلاج فقط
- لا يقصدان تعاطي محرم

الحالات المختلفة:

الحالة الأولى: الكحول في الأدوية:
- الكحول قد يكون:
  * مذيباً للمادة الفعالة
  * حافظاً يمنع تعفن الدواء
  * عامل استخلاص

- الحكم حسب النسبة:
  * نسبة قليلة جداً (أقل من 5%): قد يُرخص بها بالضرورة
  * نسبة عالية (أكثر من 20%): يجب البحث عن بديل

الحالة الثانية: الجيلاتين من الخنزير:
- يُستخدم في الكبسولات
- بدائل موجودة: كبسولات نباتية (الاهتمام يزداد)
- الحكم: يجب البحث عن البديل

الحالة الثالثة: اللقاحات والأصول الحيوانية:
- بعض اللقاحات تُنمى على خلايا خنزير
- بدائل إسلامية موجودة (بطء في الإنتاج)
- الحكم:
  * الضرورة (لمنع وباء): قد تبيح التطعيم
  * الانتظار (إن أمكن): الأفضل

الحالة الرابعة: الأدوية الموضعية (الكريمات، المراهم):
- الحكم أخف من الأدوية الفموية
- لأن الامتصاص أقل
- قد يكون الرخصة أوسع

تطبيقات حديثة:

الحالة: قوي (مضاد حيوي قديم) يحوي كحول:
- الحكم: جائز بالضرورة إذا لم يوجد بديل
- الدواء أساسي وحيوي

الحالة: مضمضة فم تحوي كحول:
- الحكم: يجب عدم الابتلاع
- إذا ابتلع قليل: الضرورة قد تبيح

الحالة: لقاح مأخوذ من خنزير:
- إذا كان وباء معدٍ وحاد: الضرورة تبيح
- إذا كان لمرض بسيط: الانتظار أفضل

الحل الأمثل:

للمريض:
1. البحث عن دواء بديل حلال
2. استشارة طبيب مسلم واعٍ
3. استشارة عالم دين موثوق
4. عدم الاستسهال (الضرورة فقط)

للأطباء والشركات:
1. توفير بدائل حلال
2. تطوير أدوية إسلامية معتمدة
3. وضع ملصقات توضح المكونات
4. احترام معتقدات المريض

الحكم الشرعي:
- الأصل: تحريم الأدوية التي تحوي كحول أو خنزير
- الاستثناء: يجوز بالضرورة إذا توفرت الشروط الصارمة (ضرر حقيقي، عدم بديل)
- الأحوط: البحث عن بدائل حلال قبل الاستخدام
- المستقبل: الأمل بتطوير أدوية إسلامية بديلة`,verdict:"CONDITIONAL",source:"د. أنس أبو شادي + قرارات المجامع الفقهية + فتاوى معاصرة",tags:["كحول","خنزير","جيلاتين","أدوية","لقاحات","محرم","ضرورة"]},{id:"prayer_024_2025",category:Y.PRAYER_PURITY,title:"المسح على الخفين/الجوارب",question:"ما حكم المسح على الشراب (الجوارب)؟",medical_context:"wudu, socks, wiping, وضوء",ruling:`الحكم الشرعي:
جائز المسح على الخفين والجوارب (الشراب) للتيسير والرحمة.

الأساس الشرعي:
- قال النبي ﷺ: "إذا لبست الخف فامسح عليه ولو إلى الركبة" (رواه الترمذي)
- عمر بن الخطاب رضي الله عنه كان يمسح على الجوارب
- إجماع الفقهاء على جواز المسح

الشروط الواجبة للمسح:

الشرط الأول: لبسهما على طهارة:
- يجب أن تلبس الخفين أو الجوارب وأنت في وضوء كامل
- إذا لبستهما وأنت محدث (بدون وضوء): لا يجوز المسح عليهما
- يجب غسل الرجلين أولاً ثم لبس الخفين

الشرط الثاني: أن يكونا ساترين:
- يجب أن يستر الخف/الجورب الكعبين والقدمين
- إذا كانا قصيرة لا تستر الكعبين: لا يجوز المسح

الشرط الثالث: أن يكونا طاهرين:
- الخفان يجب أن يكونا طاهرين (لا نجس عليهما)
- إذا أصاب الخف نجاسة: لا يجوز المسح

الشرط الرابع: أن تكون المسة باليد:
- المسح يكون برفع يدك الممسوحة من الكعب إلى أعلى الساق
- لا تمسح من الأعلى للأسفل

مدة المسح:

للمقيم:
- يوم وليلة (24 ساعة)
- من أول مسح

للمسافر:
- ثلاثة أيام وليالهن
- أي 72 ساعة من أول مسح

حساب المدة:
- تبدأ من لحظة أول مسح على الخفين
- لا تبدأ من لحظة لبسهما
- مثال: مسحت الساعة 10 صباحاً → تنتهي المدة الساعة 10 صباحاً من اليوم التالي (للمقيم)

الحالات المختلفة:

الحالة الأولى: مسح الخفين أثناء العمل:
- الطبيب في العيادة يمسح على خفيه عند الوضوء
- جائز شرعاً

الحالة الثانية: خلع الخفين قبل انتهاء المدة:
- إذا خلعت الخفين: انتهى حكم المسح
- يجب غسل الرجلين الآن

الحالة الثالثة: الجورب الشفاف:
- إذا كان الجورب شفافاً: يجب إزالته والمسح على ما تحته (الرجل)
- إن كان ساتراً (أبيض/أسود): جائز المسح

الحالة الرابعة: جوارب متعددة الطبقات:
- تمسح على الطبقة الخارجية فقط
- لا تنزع للمسح على ما تحتها

الحالة الخامسة: توقف المسافر عن السفر:
- إذا وصل المسافر للمقام وأراد الإقامة: ينتقل للمدة الأقصر (يوم وليلة)
- بدء مدة جديدة من وقت الإقامة

الآراء الفقهية:

الجمهور (الحنفية، المالكية، الشافعية، الحنابلة):
- يجيزون المسح على الخفين

الرافضة:
- لا يجيزون المسح (يرون وجوب غسل الرجلين)
- دليلهم: "فاغسلوا وجوهكم وأيديكم" (تفسير عام)

الحكم الشرعي:
جائز المسح على الخفين والجوارب بشروطها (لبس على طهارة، سترة، طهارة)، ومدته يوم وليلة للمقيم وثلاثة أيام للمسافر. وهذا تيسير من الشريعة ورفع للحرج.`,verdict:"PERMITTED",source:"جمهور الفقهاء (الحنفية، المالكية، الشافعية، الحنابلة)",tags:["وضوء","مسح","جوارب","خفين","طهارة"]},{id:"prayer_025_2025",category:Y.PRAYER_PURITY,title:"قراءة الحائض للقرآن",question:"هل يجوز للحائض قراءة القرآن (للطالبة/المعلمة الطبيبة)؟",medical_context:"menstruation, quran, reading, حيض، قرآن",ruling:`المشكلة الطبية والشرعية:
- الطبيبة المسلمة تحتاج لقراءة آيات قرآنية في سياق طبي (تشخيص، تلاوة، تعليم)
- الحائض هل يجوز لها أن تقرأ القرآن؟

الآراء الفقهية:

الرأي الأول: تحريم القراءة (الجمهور):
- الحكم: حرام على الحائض قراءة القرآن
- الدليل:
  * "لا يمس إلا المطهرون" (الآية دلالتها أن الحائض لا تمس المصحف)
  * فعل عائشة: كانت تمتنع عن قراءة القرآن أيام الحيض
  * الإجماع على أن الحائض لا تصلي ولا تقرأ القرآن
- الحكمة: احترام القرآن الكريم وتعظيمه

الرأي الثاني: جواز القراءة بدون مس المصحف (المالكية):
- الحكم: جائز للحائض قراءة القرآن من الذاكرة (بدون مس المصحف)
- الدليل:
  * "لا يمس إلا المطهرون" (النهي متعلق بالمس، لا بالقراءة)
  * القراءة من الذاكرة لا تتعلق بالمس
  * الحاجة للتعليم والحفظ
- التطبيق: قراءة من الذاكرة، أو من شاشة (بدون مس)

الرأي الثالث: جواز القراءة للضرورة والحاجة (بعض المعاصرين):
- الحكم: جائز للمعلمة والطالبة عند الحاجة (خوف النسيان، التدريس، الاختبار)
- الدليل:
  * المقاصد الشرعية (حفظ العلم)
  * رفع الحرج
  * الضرورة
- التطبيق: جائز للطبيبة المسلمة في سياق تعليمي أو علاجي

الحالات المختلفة:

الحالة الأولى: الطبيبة تقرأ آية قرآنية من الذاكرة:
- الحكم: جائز (لا يوجد مس للمصحف)
- المثال: تقول للمريضة "يا أيها الناس إن الله مع الصابرين"

الحالة الثانية: الطبيبة تقرأ من المصحف:
- الحكم: محل خلاف (الجمهور يحرمه، المالكية يرخصون)
- الأفضل: تجنب ذلك إن أمكن

الحالة الثالثة: الطبيبة تقرأ من شاشة الكمبيوتر:
- الحكم: جائز (لا يوجد مس المصحف)
- دليل التيسير: التقنية الحديثة لم تكن موجودة

الحالة الرابعة: الطبيبة تعلم طالباتها أثناء الحيض:
- الحكم: محل خلاف
- الأفضل: تأجيل التعليس إن أمكن
- الجواز: بقراءة من الذاكرة

الحالة الخامسة: الطبيبة تتعبد بقراءة القرآن:
- الحكم: حرام في المذهب الجمهور
- يمكنها: الدعاء والذكر بدلاً من التلاوة

آليات التيسير:

للطبيبة الحائض:
1. قراءة آيات قرآنية من الذاكرة (مسموح)
2. استخدام تطبيقات رقمية (مسموح)
3. الاستماع لتسجيلات (مسموح)
4. تأجيل المس المباشر للمصحف إن أمكن

للمعلمة:
1. التعليم من الذاكرة (مسموح بالاتفاق)
2. كتابة النصوص على السبورة (مسموح)
3. عرض على شاشة (مسموح)

الحكم الشرعي:
- الجمهور: حرام على الحائض قراءة القرآن من المصحف
- المالكية والمعاصرون: جائز قراءة من الذاكرة أو من غير مس المصحف
- الأفضل والأحوط: تجنب القراءة المباشرة من المصحف
- الجواز: في حالات الضرورة والحاجة (التعليم، الحفظ، السياق الطبي)
- التيسير: استخدام التقنيات الحديثة (شاشات، تطبيقات) بدل مس المصحف`,verdict:"CONDITIONAL",source:"المذهب المالكي + بعض الفقهاء المعاصرين + ابن عثيمين",tags:["حيض","قرآن","تعليم","قراءة","مصحف","طهارة"]},{id:"prayer_026_2025",category:Y.PRAYER_PURITY,title:"قصر وجمع الصلاة",question:"متى يقصر المسافر الصلاة أو يجمعها؟ وللطبيب أثناء عمل جراحي طويل؟",medical_context:"travel, prayer, shortening, journey, جمع، قصر، صلاة",ruling:`تعريفات مهمة:

القصر: تقليل عدد الركعات من 4 إلى 2 في الصلوات الرباعية (الظهر، العصر، العشاء)

الجمع: الجمع بين صلاتين متتابعتين (جمع تقديم أو تأخير)

الحالات المختلفة:

أولاً: القصر (Shortening):

متى يجوز القصر؟

الحالة الأولى: السفر الطويل:
- المسافة: حوالي 80-90 كم (اختلاف فقهي)
- الحكم: جائز قصر الصلاة
- الشروط:
  * نية السفر من البداية
  * أن تكون المسافة كافية
  * أن لا تنوي الإقامة (مدة طويلة) في مكان معين

تفاصيل القصر:

المقصورة (المختصرة):
- الظهر: من 4 ركعات → 2 ركعات
- العصر: من 4 ركعات → 2 ركعات
- العشاء: من 4 ركعات → 2 ركعات

غير المقصورة:
- الفجر: تبقى ركعتين (لا تُقصر أصلاً)
- المغرب: تبقى 3 ركعات (لا تُقصر في الأصل)

مدة القصر:

بدء القصر: من الخروج من البلد
انتهاء القصر: عند الدخول للبلد

الحالة الثانية: السفر البحري:
- الحكم: جائز القصر
- التطبيق: نفس أحكام السفر البري

الحالة الثالثة: السفر الجوي:
- الحكم: جائز القصر
- التفصيل: من الصعود للطائرة حتى الهبوط

ثانياً: الجمع (Combining prayers):

متى يجوز الجمع؟

الحالة الأولى: السفر:
- الحكم: جائز جمع الصلوات
- الصور:
  * جمع تقديم: تقدم العصر مع الظهر
  * جمع تأخير: تؤخر الظهر مع العصر
  * جمع المغرب مع العشاء

الحالة الثانية: المطر الشديد:
- الحكم: جائز الجمع
- الشروط:
  * أن يكون المطر كثيفاً
  * يسبب مشقة للخروج للصلاة
  * بحكم طبي أو شرعي

الحالة الثالثة: الريح الشديدة:
- الحكم: جائز الجمع
- نفس الشروط

الحالة الرابعة: الثلج والجليد:
- الحكم: جائز الجمع
- عند المشقة

الحالة الخامسة: المرض والحاجة الشديدة:
- الحكم: جائز الجمع
- أمثلة:
  * طبيب في عملية جراحية طويلة لا يمكنه مغادرتها
  * مريض في حالة حرجة
  * طبيب توليد في ولادة معقدة

ثالثاً: الحالة الطبية الخاصة:

حالة الطبيب أثناء عملية جراحية طويلة:

الحكم الشرعي:
جائز للطبيب أن يجمع الصلاة (يؤخر الظهر مع العصر، أو يؤخر المغرب مع العشاء) إذا كان:
- في عملية جراحية طويلة لا يمكنه الخروج منها
- لا يمكنه الصلاة في الوقت المحدد
- المشقة واضحة والحاجة ملحة

الآلية العملية:

قبل العملية:
- ينوي الجمع (جمع تأخير): يؤخر الصلاة الأولى مع الثانية
- أو ينوي جمع تقديم: يعجل الصلاة الثانية مع الأولى (قبل العملية)

أثناء العملية:
- إذا كانت العملية طويلة: جائز تأخير الصلاة
- جمع الظهر مع العصر: يصليها في وقت العصر (أو قبل المغرب)
- جمع المغرب مع العشاء: يصليها في وقت العشاء

بعد العملية:
- يصلي الجمع المؤخر في أول فرصة

أمثلة عملية:

مثال 1: عملية جراحية من الساعة 11 ص إلى 4 م:
- الظهر (12:30 ص): في العملية
- العصر (3 م): في العملية
- الحكم: جمع تأخير (تؤخر الظهر مع العصر)
- الوقت: بعد الانتهاء من العملية (الساعة 4 م)

مثال 2: ولادة معقدة من 5 م إلى 9 م:
- المغرب (5:30 م): طبيب التوليد مشغول
- العشاء (7 م): طبيب التوليد مشغول
- الحكم: جمع تأخير (تؤخر المغرب مع العشاء)
- الوقت: بعد انتهاء الولادة

مثال 3: طبيب الطوارئ بعملية إسعافية طويلة:
- الحكم: جائز الجمع
- الشروط: أن تكون فعلاً عملية ضرورية طويلة

حالات لا يجوز فيها الجمع:

- انتظار فقط (جالس في العيادة): لا يجوز الجمع
- عمل إداري (كتابة تقارير): لا يجوز الجمع
- اختيار فقط (الطبيب اختار عدم الذهاب): لا يجوز الجمع
- المشقة العادية: لا تبرر الجمع

الحكم الشرعي:
- القصر: جائز في السفر الطويل (حوالي 85 كم فأكثر)
- الجمع: جائز في السفر، والمطر، والمرض، والحاجة الشديدة (كعملية جراحية لا يمكن الخروج منها)
- الطبيب في العملية: جائز قصر وجمع الصلاة إذا كانت العملية ضرورية وطويلة
- الأفضل: الصلاة في الوقت المحدد إن أمكن
- البديل: القضاء في أول فرصة`,verdict:"PERMITTED",source:"صحيح مسلم + ابن تيمية + الفقه الإسلامي المعاصر",tags:["سفر","صلاة","جمع","قصر","عملية","جراحة"]},{id:"prayer_027_2025",category:Y.PRAYER_PURITY,title:"زكاة الراتب والمهن الحرة",question:"كيف يخرج الطبيب زكاة عيادته أو راتبه؟",medical_context:"zakat, salary, wealth, income, زكاة، دخل",ruling:`تعريف الزكاة في المهن:
الزكاة على الأطباء والعاملين في المهن الحرة تختلف عن الزكاة على التجار.

المبدأ الأساسي:

لا زكاة على أدوات الاستثمار:
- أدوات العيادة (الكرسي، الأجهزة الطبية، الديكور)
- سيارة العيادة/المكتب
- أثاث المكتب

الزكاة على صافي الدخل:

تعريف صافي الدخل:
- الراتب الشهري/السنوي
- مطروحاً منه: المصاريف الضرورية (إيجار، كهرباء، مياه، موظفين)
- مطروحاً منه: النفقات الشخصية الضرورية (الطعام، الملبس، السكن)
- الباقي = الدخل القابل للزكاة

شروط الزكاة:

الشرط الأول: بلوغ النصاب:
- النصاب: حوالي 85 جرام من الذهب الخالص
- المعادل المالي: يختلف حسب سعر الذهب
- مثال حالي: حوالي 3000-4000 ريال سعودي (يتغير يومياً)

الشرط الثاني: حول الحول (سنة هجرية):
- يجب أن يمر على المال سنة كاملة
- تبدأ من تاريخ امتلاك المال الأول

الشرط الثالث: عدم الدين:
- إذا كان على الطبيب ديون (قرض، رهن، استدانة)
- فقد تُخصم الديون من المال قبل حساب الزكاة

حساب الزكاة:

الخطوة الأولى: جمع الدخل السنوي:
- جميع الرواتب والعلاوات
- الحوافز والمكافآت
- الدخل من استشارات خاصة
- الدخل من محاضرات/تدريب

الخطوة الثانية: طرح المصاريف:
- مصاريف العيادة (إيجار 10,000 ريال × 12 شهر = 120,000)
- رواتب الموظفين (50,000 ريال × 12 = 600,000)
- الأدوات والأجهزة الطبية (شراء جديد، صيانة)
- الكهرباء والماء والاتصالات
- التأمين الطبي

الخطوة الثالثة: طرح النفقات الشخصية:
- الطعام والشراب
- السكن والإيجار الشخصي
- الملابس والعلاجات الشخصية
- التعليم للأطفال
- المواصلات

الخطوة الرابعة: حساب الزكاة:
- الدخل الصافي × 2.5% = الزكاة
- مثال: صافي دخل سنوي = 500,000 ريال
- الزكاة = 500,000 × 2.5% = 12,500 ريال

أنماط مختلفة للأطباء:

النمط الأول: طبيب موظف براتب:
- الراتب الشهري = 20,000 ريال
- السنوي = 240,000 ريال
- مصاريف شخصية = 100,000 ريال
- الصافي = 140,000 ريال
- الزكاة = 140,000 × 2.5% = 3,500 ريال

النمط الثاني: طبيب عيادة خاصة:
- الدخل الشهري من المرضى = 50,000 ريال
- السنوي = 600,000 ريال
- مصاريف العيادة = 200,000 ريال
- مصاريف شخصية = 100,000 ريال
- الصافي = 300,000 ريال
- الزكاة = 300,000 × 2.5% = 7,500 ريال

النمط الثالث: طبيب استشاري:
- راتب وظيفي = 15,000 ريال شهري
- استشارات خاصة = 20,000 ريال شهري
- المجموع = 35,000 ريال شهري = 420,000 سنوي
- مصاريف = 100,000 ريال
- الصافي = 320,000 ريال
- الزكاة = 320,000 × 2.5% = 8,000 ريال

الحالات الخاصة:

الحالة الأولى: ديون الطبيب:
- طبيب له قرض بنكي = 500,000 ريال
- صافي دخله السنوي = 300,000 ريال
- هل تجب الزكاة؟
- الحكم: لا زكاة (الدين يساوي أو يزيد على المال)
- أو: تطرح الديون من الأموال المدخرة

الحالة الثانية: الأموال المدخرة (المدّخرات):
- المال المدّخر من السنوات الماضية
- يجب تقديم الزكاة عليه
- حتى وإن لم يعمل الطبيب هذه السنة

الحالة الثالثة: الدخل الموسمي:
- طبيب يعمل بدوام جزئي
- دخل غير منتظم (بعض الشهور عالي، وبعضها منخفض)
- الحكم: تحسب على المتوسط السنوي

الحالة الرابعة: الطبيب المتقاعد:
- لا دخل جديد، لكن عنده مدخرات
- الزكاة تجب على المدخرات إذا بلغت النصاب وحال عليها الحول

توقيت إخراج الزكاة:

الوقت الأفضل:
- نهاية السنة الهجرية
- أو نهاية السنة الميلادية (تقريباً)
- تحسبها بناءً على الدخل الذي حصل طوال السنة

آلية عملية:

الخطوة الأولى: تحديد تاريخ الزكاة:
- يختار الطبيب يوماً محدداً (مثلاً: 1 يناير من كل سنة)
- يحسب المال الموجود في هذا التاريخ

الخطوة الثانية: حساب الفترة:
- من 1 يناير الماضي إلى 1 يناير الحالي
- أو من تاريخ بداية العمل الأول

الخطوة الثالثة: جمع الدخل:
- كل المال الذي دخل في هذه الفترة

الخطوة الرابعة: طرح المصاريف:
- المصاريف الضرورية فقط

الخطوة الخامسة: حساب الزكاة:
- المبلغ النهائي × 2.5%

الخطوة السادسة: الإخراج:
- إخراج الزكاة للمستحقين (الفقراء، المساكين)
- أو لجهات خيرية موثوقة

من يدفع الزكاة:

الطبيب يدفع زكاته:
- للفقراء والمساكين
- لجهات بحث طبي خيرية
- لعيادات علاج مجاني للفقراء
- لأيتام الطبيب نفسه (إذا كانوا فقراء)
- لا يدفع زكاته لموظفيه (هذا راتب)

الحكم الشرعي:
- لا زكاة على أدوات العمل (الآلات، الأثاث، الأجهزة)
- الزكاة تجب على صافي الدخل (الدخل - المصاريف الضرورية)
- النسبة: 2.5% من المبلغ الخاضع للزكاة
- الشروط: بلوغ النصاب (85 جرام ذهب) وحول الحول
- الوقت: نهاية السنة (هجرية أو ميلادية)
- الاستحقاق: الفقراء والمساكين والأعمال الخيرية الإسلامية`,verdict:"CONDITIONAL",source:"فقه الزكاة + ابن قدامة + الشيخ ابن عثيمين",tags:["زكاة","مال","نصاب","دخل","راتب","عيادة"]},{id:"prayer_028_2025",category:Y.PRAYER_PURITY,title:"المسح على الحجاب والخمار أثناء الوضوء",question:"هل يجوز المسح على الحجاب والخمار بدلاً من غسل الرأس عند الوضوء؟",medical_context:"طهارة، وضوء، حجاب، خمار، مسح الرأس، ضرورة، مشقة",ruling:`الإطار الفقهي للمسح على الرأس:
الأصل في الوضوء هو غسل أعضاء محددة أو مسحها، ومنها الرأس، لقوله تعالى: ﴿وَامْسَحُوا بِرُءُوسِكُمْ﴾. وقد اختلف الفقهاء في القدر المجزئ من المسح، وفي حكم المسح على الحائل (الحجاب). تؤكد الفتاوى الصادرة عن دار الإفتاء المصرية أن التيسير في هذه المسألة يعتمد على الأخذ بالمذاهب التي تكتفي بمسح "البعض" وليس "الكل". ففي المذهب الشافعي، يكفي مسح جزء يسير من الرأس، ولو شعرة واحدة أو جزءاً يسيراً من البشرة في حدود الرأس.

التطبيق العملي:
الطبيبة التي تجد مشقة في خلع الحجاب بالكامل، خاصة إذا كانت ترتدي زياً معقداً أو كانت في مكان مكشوف، يجوز لها اتباع الخطوات التالية:
1. لا يشترط خلع الحجاب بالكامل.
2. يكفي أن تبل الطبيبة أصبعها بالماء وتمرره من تحت الحجاب لتلمس أي جزء من منابت الشعر (مقدمة الرأس أو جانبيه).
3. بهذا الفعل يتحقق الفرض الشرعي وتصح الطهارة، وهذا هو المخرج الفقهي الذي يرفع الحرج والمشقة عن الطبيبات.

المسح على الحجاب نفسه (من الخارج) لا يجوز عند الجمهور إلا في حالات الضرورة القصوى أو البرد الشديد قياساً على العمامة، ولكن الفتوى الأحوط والأكثر استقراراً في المؤسسات المصرية هي مسح جزء من الشعر ولو يسيراً من تحت الحجاب، وهو أمر ممكن وميسور في أغلب الأحوال.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / مركز الأزهر العالمي للفتوى",tags:["طهارة","وضوء","حجاب","خمار","مسح"]},{id:"prayer_029_2025",category:Y.PRAYER_PURITY,title:"الوضوء مع المستحضرات الطبية (واقي الشمس والمرطبات)",question:"هل واقي الشمس والمرطبات تمنع وصول الماء في الوضوء وتبطله؟",medical_context:"طهارة، وضوء، واقي شمس، sunblock، مرطب، كريم، جرم، طبقة عازلة",ruling:`معيار "الطبقة العازلة":
الحكم الفقهي في هذه المسألة يدور وجوداً وعدماً مع "وصول الماء للبشرة". وقد فصلت دار الإفتاء المصرية والأزهر في طبيعة هذه المواد:

المواد الممتصة (Absorbed):
أغلب الكريمات الحديثة، بما فيها واقي الشمس ومرطبات اليدين، صممت لتمتصها البشرة وتتغلغل في المسام. هذه المواد لا تشكل "جِرماً" (أي جسماً مادياً مستقلاً كالشمع أو البلاستيك) يمنع وصول الماء. وبناءً عليه، فإن الوضوء بوجودها صحيح ولا يجب إزالتها، لأن الماء يصل إلى البشرة ويتفاعل معها.

المواد العازلة (Waterproof Films):
إذا كان المستحضر يشكل طبقة شمعية سميكة أو قشرة (كطلاء الأظافر التقليدي أو بعض أنواع واقي الشمس الفيزيائي الثقيل جداً) بحيث لو كشطته لخرجت مادة، فهذا يمنع وصول الماء ويبطل الوضوء، ويجب إزالته قبل الشروع في الطهارة.

طهارة المكونات:
يشترط في هذه المستحضرات أن تكون مصنعة من مواد طاهرة (خالية من شحوم الخنزير أو النجاسات)، وهو الغالب في المستحضرات الطبية المرخصة في الدول الإسلامية، ولكن يجب التحقق إن وجدت شبهة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / الأزهر الشريف",tags:["طهارة","وضوء","واقي شمس","مرطب","كريم"]},{id:"prayer_030_2025",category:Y.PRAYER_PURITY,title:"حكم تلوث ملابس العمل بالدم أثناء الصلاة",question:"ما حكم الصلاة بملابس عليها دماء من المريض أو من إصابة بسيطة؟",medical_context:"طهارة، نجاسة، دم، صلاة، ملابس، سكراب، جراحة، معفو عنه",ruling:`حكم الدم اليسير (المعفو عنه):
الدم نجس عند جماهير الفقهاء، ولكن الشريعة الإسلامية فرقت بين "الكثير الفاحش" و"القليل اليسير"، خاصة لمن يمارس مهنة يشق فيها التحرز منه كالجزار والطبيب.

دم الإنسان نفسه:
إذا جُرحت الطبيبة نفسها وخرج منها دم يسير (كجرح إبرة أو مشرط)، فإن هذا الدم لا يبطل الصلاة عند جماهير الفقهاء، حتى الحنفية الذين يرون نقض الوضوء بالدم يشترطون أن يكون "سائلاً" (أي تدفق عن موضعه). أما النقاط البسيطة التي تلوث الثوب فلا تضر، وقد كان الصحابة رضي الله عنهم يصلون في جراحاتهم.

دم الغير (المريض):
بالنسبة لدماء المرضى التي تصيب ثوب الطبيبة، يُعفى عن "اليسير" منها للمشقة.

معيار اليسير:
يُقدر الفقهاء "اليسير المعفو عنه" بمساحة "الدرهم البغلي" (عملة معدنية قديمة). وبالقياس المعاصر، إذا كانت بقعة الدم أو النجاسة أقل من مساحة مقعر الكف (أو العملة المعدنية المتوسطة)، ولا تجتمع لتشكل مساحة كبيرة، فهي معفو عنها وتصح الصلاة بهذه الملابس دون غسلها، دفعاً للحرج.

الصلاة بملابس العمليات:
أفتى أمين الفتوى بدار الإفتاء بجواز صلاة الطبيب الجراح بملابسه التي عليها دماء بسيطة ناتجة عن العمليات إذا شق عليه تغييرها، استناداً لقاعدة "المشقة تجلب التيسير" وأثر الصحابة، مع التأكيد على أن الأصل هو الطهارة الكاملة إن تيسرت.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / أمانة الفتوى",tags:["طهارة","صلاة","دم","ملابس","معفو عنه"]},{id:"prayer_031_2025",category:Y.WOMEN_PREGNANCY,title:"الفرق بين الحيض والاستحاضة (التمييز الفقهي الطبي)",question:"كيف أفرق بين الحيض والاستحاضة؟ وما الأحكام المترتبة على كل منهما؟",medical_context:"حيض، استحاضة، دورة شهرية، نزيف مرضي، دم، صلاة، صيام",ruling:`الفرق بين الحيض والاستحاضة:
أوضحت الفتاوى الفروق الجوهرية التي يترتب عليها الحكم الشرعي:

الحيض:
هو دم "جبلة وطبيعة"، له وقت معلوم (أيام الدورة المعتادة)، ويتميز بلون أسود أو داكن، ورائحة نفاذة كريهة، ويكون ثخيناً. هذا الدم يمنع الصلاة والصوم والجماع.

الاستحاضة:
هو نزيف مرضي (نذيف عرق)، ويكون الدم فيه أحمر فاتحاً غالباً، ولا رائحة له، وقد يستمر خارج أيام العادة أو يتصل بها. حكم المستحاضة أنها طاهرة حكماً؛ أي يجب عليها الصلاة والصوم، ولا يمنعها الدم من العبادة.

الأحكام المترتبة على الاستحاضة:
إذا تأكدت الطبيبة (طبياً أو بالصفات) أنها في حالة استحاضة، فعليها الآتي:

1. عدم الاغتسال: لا يجب عليها الغسل الكامل (الاستحمام) لكل صلاة، فالاستحاضة حدث أصغر.
2. الوضوء لكل صلاة: يجب عليها الوضوء لكل صلاة بعد دخول وقتها.
3. التحفظ: يجب عليها غسل المحل والتحفظ (استخدام الفوط الصحية) لمنع انتشار الدم، ثم تتوضأ وتصلي فوراً، ولا يضرها ما نزل أثناء الصلاة لأنه عذر دائم.
4. في حالة الاتصال: إذا اتصل دم الحيض بدم الاستحاضة، تعتمد المرأة على "عادتها القديمة" (عدد الأيام التي كانت تحيضها سابقاً) أو "التمييز" (اختلاف لون ورائحة الدم) لتحدد أيام الحيض التي تتوقف فيها عن الصلاة، وما عداها تغتسل مرة واحدة ثم تعامل معاملة المستحاضة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / الأزهر الشريف",tags:["حيض","استحاضة","دورة شهرية","نزيف","صلاة"]},{id:"prayer_032_2025",category:Y.PRAYER_PURITY,title:"جمع الصلاة بسبب الدراسة والعمل الطبي",question:"هل يجوز جمع الصلوات (الظهر مع العصر، المغرب مع العشاء) بسبب ضغط الدراسة أو العمليات الجراحية؟",medical_context:"صلاة، جمع، تقديم، تأخير، ضرورة، عمل، دراسة، محاضرات",ruling:`حكم الجمع:
أجازت دار الإفتاء المصرية ومركز الأزهر العالمي للفتوى الجمع بين الصلاتين (جمع تقديم أو تأخير) دون قصر (أي تصليهما كاملتين 4 ركعات) في حالات الضرورة القصوى التي لا يمكن معها ترك العمل أو المحاضرة.

الدليل الشرعي:
حديث ابن عباس في صحيح مسلم: "جمع رسول الله ﷺ بين الظهر والعصر، وبين المغرب والعشاء بالمدينة من غير خوف ولا مطر". سُئل ابن عباس: لِمَ فعل ذلك؟ قال: "أراد ألا يُحرج أمته".

التطبيق على الواقع الطبي والدراسي:

الجراحون وأطباء الطوارئ:
الطبيب الذي يدخل عملية جراحية طويلة تستغرق وقتاً يخرج به وقت الصلاة الثانية، يجوز له الجمع اتفاقاً.

الطلاب:
الطالبة التي لديها امتحان طويل متصل، أو محاضرة إلزامية يمنع النظام الخروج منها، يجوز لها الجمع في هذه الأيام بصفة استثنائية، شريطة ألا يتخذ ذلك "عادة دائمة" في كل الأيام (أي يقتصر على أيام الضغط الشديد والضرورة).

ضوابط الجمع:
أكدت الفتاوى أن الجمع رخصة لرفع الحرج، ولكن لا يجوز تحت أي ظرف "جمع الصلوات الخمس" كلها في آخر اليوم (كما يفعل البعض بصلاتها "قضاء" قبل النوم)، فهذا محرم وتضييع للصلاة وإخراج لها عن وقتها بلا عذر مقبول شرعاً. الجمع يكون حصراً بين (الظهر والعصر) وبين (المغرب والعشاء).`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / مركز الأزهر العالمي للفتوى",tags:["صلاة","جمع","ضرورة","عمل","دراسة"]},{id:"prayer_033_2025",category:Y.WOMEN_PREGNANCY,title:"صلاة المرأة في الأماكن المفتوحة والعامة",question:"هل تصح صلاة المرأة في مكان عام يراها فيه الرجال (كطرقات المستشفى)؟",medical_context:"صلاة، أماكن عامة، ستر، خصوصية، مستشفى، مرور رجال",ruling:`صلاة المرأة في الأماكن المفتوحة:
الحكم: صلاة المرأة في مكان عام يراها فيه الرجال (كطرقة المستشفى أو ركن في قاعة المحاضرات) صحيحة وتبرأ بها الذمة، ما دامت ساترة لجسدها بالكامل (ما عدا الوجه والكفين).

الأفضلية والستر:
الأفضل للمرأة أن تبحث عن مكان مستتر (ساتر، جدار، زاوية، خلف عمود) ليكون أستر لها وأبعد عن الأنظار، تحقيقاً لقوله ﷺ: "صلاة المرأة في بيتها خير من صلاتها في حجرتها". ولكن إن لم تجد وخشيت خروج الوقت، وجب عليها الصلاة في أي مكان طاهر ولا إثم عليها.

مرور الرجال أثناء الصلاة:
رؤية الرجال الأجانب للمرأة أثناء صلاتها لا تبطل الصلاة. وقد نصحت الفتاوى بأن تكون حركاتها (الركوع والسجود) محتشمة، ويمكنها أن تختار زاوية لا يكون فيها مرور مكثف خلفها، وإن مرت الرجال أمامها فلا يضرها ذلك في صحة الصلاة.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية / بوابة الأزهر الإلكترونية",tags:["صلاة","نساء","أماكن عامة","ستر","خصوصية"]},{id:"prayer_034_2025",category:Y.MISCELLANEOUS,title:"صلاة الفرض في المواصلات (القطار والميكروباص)",question:"هل يجوز صلاة الفرض (جالسة وبدون قيام) في وسيلة المواصلات عند خشية خروج الوقت؟",medical_context:"صلاة، فرض، قيام، جالسة، مواصلات، قطار، ميكروباص، وقت",ruling:`صلاة الفرض جالساً:
الأصل في صلاة الفرض (الظهر، العصر، المغرب، العشاء) وجوب "القيام" واستقبال القبلة كأركان لا تسقط إلا بالعجز.

حالة السعة (القدرة على النزول):
إذا كان يمكن للطالبة النزول من المواصلات للصلاة واللحاق بمركبة أخرى، أو الوصول للمنزل قبل خروج الوقت، أو كانت تنوي جمع الصلاة (جمع تأخير) وستصل قبل خروج وقت الثانية، فلا يجوز لها الصلاة جالسة في المقعد.

حالة الضرورة القصوى (خشية خروج الوقت):
إذا خشيت خروج الوقت تماماً (كأن تغيب شمس اليوم ولم تصل العصر) ولا تستطيع النزول (خوفاً على النفس، أو لعدم أمان الطريق، أو لانقطاع المواصلات)، فهنا تصلّي على حالها (جالسة) في وسيلة المواصلات، وتومئ بالركوع والسجود، وصلاتها صحيحة للحفاظ على "حرمة الوقت". وهناك قول بوجوب الإعادة وقول بعدمه، والأحوط القضاء عند الوصول لزوال العذر، ولكن الأهم ألا تترك الصلاة حتى يخرج وقتها بالكلية.

صلاة النافلة:
أما صلاة النوافل والسنن والورد القرآني، فتجوز في المواصلات جالسة باتجاه السير بلا حرج، تيسيراً لاستغلال الوقت، اقتداءً بالنبي ﷺ الذي كان يسبح على الراحلة حيثما توجهت.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","فرض","مواصلات","جالسة","ضرورة"]},{id:"misc_004_2025",category:Y.MISCELLANEOUS,title:"صلاة المرأة بالسكراب والبنطال",question:"هل تصح الصلاة بالسكراب (بنطال وقميص طبي) دون ارتداء إسدال أو عباءة فوقه؟",medical_context:"صلاة، ملابس، سكراب، بنطال، ستر، عورة، قدمين",ruling:`شروط لباس المرأة في الصلاة:
يشترط في لباس الصلاة ستر العورة (جميع البدن عدا الوجه والكفين، والخلاف في القدمين)، وأن يكون "ساتراً" لا يشف (لا يظهر لون البشرة) ولا يصف (لا يحدد حجم العورة المغلظة تحديداً فاحشاً).

الصلاة بالبنطال:
البنطال الواسع: إذا كان السكراب واسعاً فضفاضاً لا يصف تفاصيل الجسد (لا يحدد تقاسيم العورة)، فالصلاة به صحيحة ولا حرج فيها.

البنطال الضيق: إذا كان البنطال ضيقاً يبرز المفاتن، فالصلاة به مكروهة عند البعض وباطلة عند من يرى عدم تحقق الستر الكامل، ولكن دار الإفتاء المصرية تفتي بأنها تصح مع الكراهة إذا كان البنطال ساتراً للون البشرة (سميكاً)، لأن الستر قد تحقق من حيث تغطية العورة، والتشكيل (التجسيم) حرام ولكنه لا يبطل الصلاة. ومع ذلك، توجه الفتوى بأن الأفضل ارتداء "إسدال" أو عباءة فوقه أثناء الصلاة للخروج من الخلاف ولكمال الأدب مع الله.

ستر القدمين:
عند جمهور الفقهاء يجب ستر القدمين في الصلاة. أما عند السادة الحنفية، فيجوز كشف القدمين للمرأة في الصلاة. وبناءً عليه، فإن صلاة الطبيبة بالسكراب القصير قليلاً الذي قد يظهر وجه القدم صحيحة عند الحنفية، ويمكن للطبيبات تقليد هذا الرأي رفعاً للحرج الناتج عن حركة السكراب أثناء الركوع والسجود.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","ملابس","سكراب","بنطال","ستر"]},{id:"misc_005_2025",category:Y.MISCELLANEOUS,title:"حكم الفطر في رمضان بسبب الامتحانات",question:"هل يجوز للطالبة الفطر في رمضان بسبب امتحانات شاقة ومرهقة؟",medical_context:"صيام، صوم، رمضان، امتحانات، ضرر صحي، تركيز ذهني",ruling:`القاعدة: الامتحان ليس عذراً مستقلاً:
أكدت الفتاوى بشكل قاطع أن الامتحان في حد ذاته ليس عذراً مبيحاً للفطر. فالأصل وجوب الصوم على كل مكلف صحيح مقيم.

حالات الضرورة المبيحة للفطر:
يجوز للطالبة الفطر في الحالات التالية فقط، وعليها القضاء بعد رمضان:

1. الضرر الصحي الحقيقي: إذا خافت على نفسها المرض أو الإغماء بسبب الصوم مع الإجهاد الذهني والحرارة، وكان ذلك بناءً على تجربة سابقة أو إخبار طبيب.

2. الرسوب المؤكد: إذا غلب على ظنها أن الصوم سيُفقدها التركيز لدرجة تؤدي لرسوبها في امتحان مصيري لا يعوض، وتتضرر حياتها ومستقبلها بذلك تضرراً بالغاً.

شرط النية:
يجب أن تبيت نية الصوم وتصبح صائمة، فإذا شعرت أثناء النهار بالمشقة الشديدة غير المحتملة (التي تخرج عن المعتاد)، جاز لها الفطر حينئذ لرفع الضرر. لا يجوز الفطر ابتداءً من الليل لمجرد التوقع.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / شيخ الأزهر",tags:["صيام","رمضان","امتحانات","ضرر","فطر"]},{id:"misc_006_2025",category:Y.WOMEN_PREGNANCY,title:"تأخير الدورة الشهرية دوائياً في رمضان والعمرة",question:"هل يجوز تناول عقاقير لمنع نزول الحيض لصيام رمضان كاملاً أو لأداء العمرة؟",medical_context:"صيام، رمضان، حيض، دورة شهرية، حبوب هرمونية، Hormonal Pills، عمرة",ruling:`الحكم الشرعي:
أفتت دار الإفتاء ومركز الأزهر بجواز ذلك شرعاً، ولا إثم فيه، بشرط واحد وهو أمان العقار طبياً؛ أي أن يقرر الأطباء أن ذلك لا يضر بصحة المرأة ولا يسبب لها مضاعفات خطيرة، عملاً بقاعدة "لا ضرر ولا ضرار".

الأفضلية والاختيار:
رغم الجواز، أشارت الفتاوى إلى أن الأولى للمرأة ترك الطبيعة كما خلقها الله، والرضا بما كتبه الله على بنات آدم من الحيض والفطر، فإن في ذلك أجراً لامتثالها لأمر الله بالفطر كما تمتثل لأمره بالصوم. ولكن إذا رغبت الطالبة في الصوم الكامل مع الناس، فلا حرج عليها وصومها صحيح ومقبول.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / مركز الأزهر العالمي للفتوى",tags:["صيام","حيض","دورة","حبوب","عمرة"]},{id:"misc_007_2025",category:Y.WOMEN_PREGNANCY,title:"الفحص المهبلي وأثره على الصيام والوضوء",question:"هل الكشف المهبلي (بالأصبع أو السونار) يفسد الصوم؟ وهل ينتقض وضوء الطبيبة؟",medical_context:"فحص مهبلي، PV، كشف، صيام، وضوء، صائمة، طبيبة",ruling:`خلاف الفقهاء (مدخل للتيسير):

رأي الجمهور:
يرى جمهور الفقهاء أن كل ما دخل إلى الجوف (والجوف يشمل الرحم والفرج عند بعضهم) يفسد الصوم. وبناء عليه، فإن الكشف المهبلي يفطر الصائمة عندهم.

رأي السادة المالكية:
يفرق المالكية بين "المائع" و"الجامد". فلا يفطر عندهم إلا ما كان "مائعاً" (سائلاً) أو وصل للمعدة (الجهاز الهضمي). أما إدخال شيء "جامد" (كالآلات الطبية، الأصبع، المنظار الجاف) في الفرج، أو حتى الاحتقان الجامد، لا يفسد الصوم عندهم.

التوجيه الطبي والشرعي:
الأفضل تأخير الكشف النسائي لما بعد المغرب خروجاً من الخلاف واحتياطاً للعبادة. إذا اضطرت الطالبة (كمريضة) أو الطبيبة (للتدريب أو العمل) لإجراء الكشف نهاراً، فلتقلد مذهب المالكية وصوم المريضة صحيح ولا قضاء عليها، وهذا هو المخرج الشرعي المعتمد في الفتوى لرفع الحرج عن القطاع الطبي النسائي.

وضوء الطبيبة التي تجري الكشف:
استخدام القفازات (Gloves): المعتاد طبياً ارتداء القفازات. وفي هذه الحالة، لا تلمس الطبيبة العورة مباشرة، وبذلك لا ينتقض وضوؤها باتفاق، لأن وجود الحائل يمنع النقض، حتى عند من يقول بأن لمس العورة ينقض الوضوء.

بدون حائل: لو لمست العورة مباشرة، فالجمهور على النقض، والحنفية على عدم النقض. والمعتمد في الفتوى للطبيبات هو صحة الوضوء مع القفاز.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / أمين الفتوى",tags:["فحص","صيام","وضوء","طبيبة","مريضة"]},{id:"misc_008_2025",category:Y.WOMEN_PREGNANCY,title:"قراءة القرآن والمصحف أثناء الحيض",question:"هل يجوز للحائض قراءة القرآن من المصحف أو الموبايل؟ وما حكم مس المصحف؟",medical_context:"حيض، حائض، قرآن، تلاوة، مصحف، موبايل، تطبيق",ruling:`القراءة للحائض (دون مس):

قراءة القرآن (باللسان):
رأي الجمهور: يحرم على الحائض قراءة القرآن (التلفظ بالآيات) بنية التلاوة، سواء من المصحف أو عن ظهر قلب.

رأي السادة المالكية (وجه للتيسير):
يجوز للحائض قراءة القرآن (دون مس المصحف الورقي) خاصة إذا كانت "معلمة أو متعلمة" أو خافت نسيان محفوظها، أو كانت طالبة لديها امتحان يتطلب التلاوة. هذا الرأي هو المعتمد للفتوى لطالبات المدارس والكليات اللاتي لديهن اختبارات شفوية أو "مقرر قرآني" لرفع الحرج وضمان عدم ضياع العلم.

مس المصحف الورقي:
يحرم مس المصحف الورقي للحائض عند الجمهور. ويجوز فقط في حالات الضرورة القصوى للتعلم عند بعض المالكية، أو باستخدام حائل (قفاز أو قلم للتقليب) عند البعض، ولكن التضييق فيه شديد.

القراءة من الهاتف (الموبايل) - الحل الأمثل والمعاصر:
هذا هو الحل الأمثل والمعاصر الذي يجمع بين الحفاظ على الورد والالتزام بالشرع.

الحكم: الهاتف المحمول الذي عليه تطبيق قرآن لا يأخذ حكم المصحف؛ لأنه عبارة عن ذبذبات ضوئية (Pixels) وليس حبراً وورقاً، وفيه تطبيقات أخرى. المصحف هو ما تمحض للقرآن (ورقاً وكتابة).

النتيجة: يجوز للحائض مس الهاتف وتقليب صفحات التطبيق وقراءة القرآن منه (بالعين، أو باللسان أخذاً برأي المالكية) بلا كراهة، وهو البديل الشرعي الآمن للمراجعة والحفظ في فترات العذر الشرعي.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / بوابة الأزهر",tags:["حيض","قرآن","تلاوة","مصحف","موبايل"]},{id:"misc_009_2025",category:Y.MISCELLANEOUS,title:"حكم زكاة عيادات الأسنان",question:"ما حكم الزكاة في عيادات الأسنان؟ وما كيفيتها؟ وهل تجب الزكاة على العيادة بمشتملاتها؟ وكيف تُحسب؟",medical_context:"زكاة، عيادات الأسنان، طبيب أسنان، أدوات، معدات، مواد علاجية، حشو، تركيبات، عروض تجارة، نصاب، حول، 2.5%",ruling:`الجواب:
ما يملكه طبيب الأسنان من مقر العيادة والأدوات والمعدات لا تجب فيه الزكاة شرعًا، وكذلك ما يستهلكه من مواد علاجيَّة مما لا يستقر ويبقى أثره عند المريض من نحو القطن والبنج ومادة التعقيم وماء المضمضة ونحوها، أما ما يشتريه من المواد العلاجية التي تستعمل في العلاج ويحصل عليها المريض ويحسب ثمنها عليه بحسابٍ مباشرٍ أو ضمن الفاتورة العلاجية، فهي عروض تجارةٍ تجب فيها الزكاة إذا بلغت قيمتها النصاب -وهو قيمة خمسة وثمانين جرامًا من الذهب عيار واحد وعشرين- أو زادَ عليه، وحال عليها الحول بالأشهر العربية، فتُقَوَّم ويضم إليها ما يملكه من الأموال النقدية، ثم يخصم ما قد يكون عليه من ديون ومصاريف ونحوها، فإن بلغ صافي ذلك النِّصابَ أو زادَ عليه، كان عليه أن يُخرج زكاته بنسبة ربع العشر (2.5%).

التفاصيل....
المحتويات

بيان فضل الزكاة
حكم الزكاة في المال المُعَدِّ للتجارة وشروطه
حكم زكاة عيادات الأسنان
حكم الزكاة في المواد العلاجية التي يستهلكها الطبيب في علاج المرضى
كيفية تقويم وحساب زكاة عروض التجارة
الخلاصة
 

بيان فضل الزكاة
شرع اللهُ الزكاةَ في الأموال وأوجبها على مَن مَلَك النِّصاب، إذا خَلَت ذمتُه من الدَّين، وكان المال فائضًا عن حاجته ومَن يعول، ومضى عليه الحول بالأشهر العربية؛ طُهرةً للأموال، وزيادةً لها، وتزكيةً لنفس صاحبها مِن الذنوب وسيِّئِ الأخلاق، قال تعالى: ﴿خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا﴾ [التوبة: 103]، فقوله: "﴿ تُطَهِّرُهُمْ﴾صفةٌ لصدقة... والتزكية: مبالغةٌ في التطهير وزيادةٌ فيه، أو بمعنى الإنماء والبركة في المال"، كما قال الإمام الزَّمَخْشَرِي في "الكشاف" (2/ 307، ط. دار الكتاب العربي).

وعن معاذٍ رضي الله عنه أن رسول الله صلى الله عليه وآله وسلم قال: «الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ» أخرجه الإمام الترمذي واللفظ له، والحاكم وصححه.

حكم الزكاة في المال المُعَدِّ للتجارة وشروطه
مِن المقرَّر شرعًا عند جماهير الفقهاء أنَّ الزكاة واجبة في المال المُعَدِّ للتجارة إذا حال عليه الحول وكان قد بلغ النصاب، وهو كلُّ مالٍ تَمَلَّكَهُ الإنسانُ بعقدِ معاوَضةٍ مَحضَةٍ مِن بيعٍ وشراءٍ، وكان يَقصد بَيعَه بغرض الرِّبح؛ لقول الله جَلَّ وَعَلَا: ﴿يَاأَيُّهَا الَّذِينَ آمَنُوا أَنْفِقُوا مِنْ طَيِّبَاتِ مَا كَسَبْتُمْ﴾ [البقرة: 267].

قال الإمام مجاهد: هي "التجارة الحلال" أخرجه الأئمة: ابن أبي شيبة، وأبو نُعيم، والبيهقي في "السنن الكبرى".

وعن سَمُرَةَ بن جُنْدُب رضي الله عنه قال: «كَانَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَأْمُرُنَا أَنْ نُخْرِجَ الصَّدَقَةَ مِمَّا نُعِدُّ لِلْبَيْعِ» أخرجه الإمام أبو داود.

قال الإمام ابن المُنْذِر في "الإجماع" (ص: 48، ط. دار المسلم): [وأجمعوا على أنَّ في العُرُوض التي تُدار للتجارة الزكاةَ إذا حال عليها الحول] اهـ.

حكم زكاة عيادات الأسنان
الشأن في عيادة الأسنان المملوكة للطبيب -كما في مسألتنا- أنها عبارة عن بناءٍ مشتملٍ على ممتلكاتٍ تتنوع بين أثاثٍ وأدواتٍ ومعداتٍ طبيَّة يستعملها الطبيب في الفحص والكشف عن آفات الأسنان ومشكلاتها، كالكرسي الكهربائي وما به من أدواتٍ، وما يتبع ذلك من مرفقاتٍ طبيَّةٍ وقطع الغيار وكلِّ ما لا يُستهلك بالاستعمال في الفحص لكلِّ مريضٍ، بل يَقبَل التطهير والتعقيم لإعادة الاستعمال لفحص مرضى آخرين، أو يُستَهلك ولا يبقى أثرُه عند المريض، كالأكواب والمناشف، والقطن، وخلافه، كما تشتمل عيادة الأسنان على مواد وعلاجاتٍ يستعملها الطبيب لعلاج مرضاه كلٌّ بحسب حاله وما يحتاجه من طُرُق المُدَاوَاة والعلاج، كمعجون الحشو وغيره مما يحصل عليه المريض بالعلاج، أو ينتفع به انتفاعًا يبقى أثره فيه.

فأمَّا العيادة باعتبارها وحدة عقارية وما فيها من الأثاث وكلِّ ما يَقبل الاستعمالَ عدَّةَ مراتٍ لأكثر من مريضٍ -فهي أصلٌ من الأصولِ، ومعدَّةٌ مِن المعدات الطبيَّة لا تجب فيها الزكاةُ باتفاق الفقهاء؛ لأنها أشياءُ غيرُ معدَّةٍ للبيع والتجارة، فبقيت على الأصل في العروض وهو الاقتناء والاستعمال، شأنها في ذلك شأن بيت السُّكنى وأدوات الصُّنَّاع.

قال الإمام برهان الدين المَرْغِينَانِي الحنفي في "الهداية" (1/ 96، ط. دار إحياء التراث العربي): [(وليس في دور السكنى، وثياب البدن، وأثاث المنازل، ودواب الركوب، وعبيد الخدمة، وسلاح الاستعمال -زكاةٌ)؛ لأنها مشغولة بالحاجة الأصلية، وليست بنامية أيضًا، وعلى هذا: كُتُبُ العِلم لأهلِها، وآلاتُ المحتَرِفِين] اهـ.

وقال الإمام علاء الدين الكَاسَانِي الحنفي في "بدائع الصنائع" (2/ 13، ط. دار الكتب العلمية): [وأما آلات الصُّنَّاع، وظروف أمتعة التجارة، لا تكون مالًا لتجارةٍ؛ لأنها لا تباع مع الأمتعة عادة] اهـ.

وقال الإمام أبو البَرَكَات الدَّرْدِير المالكي في "الشرح الكبير" (1/ 472، ط. دار الفكر، مع "حاشية الإمام الدُّسُوقِي") في عروض التجارة: [أما شروط زكاتها، فأشار لأوَّلِها بقوله: (لا زكاة في عينه) كثياب... ولثانيها بقوله: (مُلِكَ بمعاوضةٍ) مالية... ولثالثها بقوله: (بنية تَجرٍ) أي: مُلِكَ مع نيَّة تجرٍ مجردة] اهـ.

قال الإمام الدُّسُوقِي مُحَشِّيًا عليه: [(قوله: أي مُلِكَ مع نيةِ تَجرٍ مجردة) احترز بذلك مما إذا لم ينو شيئًا، أو نوى به القُنية؛ لأنها هي الأصل في العُرُوض، حتى ينوي بها غيرَ القُنية] اهـ. وهو ما يشمل الأبنية والآلات وسائر المقتنيات غير المشتراة بنية التجارة والبيع للربح.

وقال الإمام شمس الدين الرَّمْلِي الشافعي في "نهاية المحتاج" (3/ 102، ط. دار الفكر): [(وإنما يصير العرض للتجارة إذا اقترنت نيتُها بكسبه بمعاوضةٍ، كشراء) وإن لم يجدِّدها في كلِّ تصرُّفٍ... لِانضِمام قصد التجارة إلى فِعلِها] اهـ.

وقال الإمام أبو السعادات البُهُوتِي الحنبلي في "كشاف القناع" (2/ 282، ط. دار الكتب العلمية): [ولا زكاة في آلات الصُّنَّاع، وأمتعة التجارة، وقوارير العَطَّار والسَّمَّان، ونحوهم) كالزَّيَّات والعَسَّال (إلا أن يريد بيعَها) أي: القوارير (بما فيها) فيُزَكِّي الكلَّ؛ لأنه مال تجارة (وكذا آلات الدواب إن كانت لحفظها) فلا زكاة فيها؛ لأنها للقُنية، وإن كان يبيعُها معها فهي مال تجارة، يُزَكِّيهَا] اهـ.

وكذلك ما يوضع في العيادة من المستهلَكات المباحة لاستعمال الطبيب ورواد العيادة من المرضى، كالأكواب، والقطن، والقفازات، والمناشف، ومواد تنظيف الأسنان التي يعالج بها الطبيب أسنان المرضى، ونحو ذلك، فإنه لا يجب فيها الزكاة؛ لأنها مشتراةٌ للاستعمال والبذل على جهة الإباحة، لا للتجارة وتحصيل الربح، كما أنها وإن انتفع بها المريض لا يتملَّكها بحيث يملك مطلق التصرف فيها، ولا يبقى لها أثرٌ في يده.

قال الإمام علاء الدين الكَاسَانِي في "بدائع الصنائع" (2/ 13) في التفرقة بين ما يعد للتجارة وغيره من المستهلَكات في الصنعة: [إن كان شيئًا لا يبقى أثره في المعمول فيه مثل الصابون والأشنان والقلي والكبريت فلا يكون مالًا لتجارة؛ لأنَّ عينها تتلف ولم ينتقل أثرها إلى الثوب المغسول حتى يكون له حصَّة مِن العِوض، بل البياض أصلي للثوب يظهر عند زوال الدَّرَن، فما يأخذ من العِوض يكون بدلَ عمله، لا بدل هذه الآلات، فلم يكن مالًا لتجارةٍ] اهـ.

حكم الزكاة في المواد العلاجية التي يستهلكها الطبيب في علاج المرضى
أمَّا ما يحوزه طبيب الأسنان في عيادته من المواد والعلاجات التي تستهلك باستعمالها في علاج المريض، ويبقى أثرها في موضع العلاج منه، كمواد الحشو، والتركيبات من الأسنان التعويضية الصناعية، والتقويمات، وما إلى ذلك، وكافَّة العلاجات والدهانات التي يعطيها للمريض ليتداوى بها في بيته كالمُسَكِّنات، وأنواع معجون الأسنان المتخصِّصة، وخيط التنظيف، ونحو ذلك مما يدفعُ المريضُ ثمنَه، سواء بشكلٍ مستقلٍّ أو بإضافته إلى ثمن الكشف -فإن ذلك كلَّه بمثابةِ عُرُوض التجارة؛ لأن الطبيب اشتراها بقصد الربح منها في علاج المرضَى، ويحصلون عليها منه بطريقةٍ تحقِّقُ لهم النفع المقصود والمصلحة التي هي العلاج والمداواة، فشأن الطبيب في ذلك شأن الصَّبَّاغ وأمثاله ممَّن له صناعةٌ تستلزم استهلاك بعض المواد ويبقى أثرُها ونفعها فيما يحصل عليه المشتري.

قال الإمام علاء الدين الكَاسَانِي في "بدائع الصنائع" (2/ 13): [روى بِشْرُ بن الوليد عن أبي يوسف أن الصَّبَّاغ إذا اشترى العُصفُر والزعفران ليصبغ ثياب الناس فعليه فيه الزكاة، والحاصل أن هذا على وجهين: إن كان شيئًا يبقى أثرُه في المعمول فيه كالصبغ والزعفران والشحم الذي يدبغ به الجلد فإنه يكون مالًا لتجارة؛ لأن الأجر يكون مقابلة ذلك الأثر، وذلك الأثرُ مالٌ قائمٌ، فإنه من أجزاء الصبغ والشحم، لكنه لطيف، فيكون هذا تجارة] اهـ.

كيفية تقويم وحساب زكاة عروض التجارة
تجب زكاة عروض التجارة إذا بلغت قيمتُها النصابَ -وهو قيمة خمسة وثمانين جرامًا من الذهب عيار واحد وعشرين- أو زادَ عليه، وحال عليها الحول بالأشهر العربية، كما في "بدائع الصنائع" للإمام علاء الدين الكَاسَانِي الحنفي (2/ 16)، و"شرح مختصر خليل" للإمام الزُّرْقَانِي المالكي (2/ 295، ط. دار الكتب العلمية)، و"المجموع" للإمام النَّوَوِي الشافعي (6/ 55، ط. دار الفكر)، و"المغني" للإمام ابن قُدَامَة الحنبلي (3/ 85).

أمَّا عن آليه التقويم والحساب لزكاة عروض التجارة: فإنها تقوَّم بسعر بيع الجملة (سعر السوق) في يوم إخراج الزكاة، وليس بسعر التكلفة، سواء كان سعر السوق أقل من ذلك أو أكثر؛ لأن الزكاة إنما تجب فيما يملكه التاجر، وسعر السوق هو الذي يملكه في ذلك الوقت.

فعن جابر بن زيد رضي الله عنه أنه سئل في عَرْضٍ يُراد به التجارة، فقال: "قَوِّمْهُ بِنَحْوٍ مِنْ ثَمَنِهِ يَوْمَ حَلَّتْ فِيهِ الزَّكَاةُ، ثُمَّ أَخْرِجْ زَكَاتَهُ" أخرجه الإمام أبو عُبيدٍ القاسِم بن سلام في "الأموال".

فإن لم تبلغ عروضُ التجارة النِّصابَ في آخر الحول بنفسها، وكان المزكِّي مالكًا لأموالٍ فائضةٍ عن احتياجاته وقد حال عليها الحول، فإنَّ الفقهاء قد أجمعوا على أنه يَضُمُّ قيمة عروض التجارة إلى ما يملكه من الأموال، فإذا بلغ جميعُها نصابَ الزكاة زكَّاها معًا زكاةً واحدةً بمقدار ربع العشر (2.5%).

قال الإمام الخَطَّابِي في "معالم السنن" (2/ 16، ط. المطبعة العلمية): [ولا أعلم عامَّتهم اختلفوا في أنَّ مَن كانت عنده مائةُ درهمٍ، وعنده عرضٌ للتِّجارة يساوي مائة درهم، وحال الحَوْل عليهما، أنَّ أحدَهما يُضَمُّ إلى الآخَرِ، وتَجِبُ الزَّكاة فيهما] اهـ. وينظر: "المغني" للإمام ابن قُدَامَة (3/ 36)، و"فتح القدير" للإمام كمال الدين بن الهُمَام (2/ 221، ط. دار الفكر).

الخلاصة
بناءً على ذلك وفي واقعة السؤال: فإن ما يملكه طبيب الأسنان من مقر العيادة والأدوات والمعدات لا تجب فيه الزكاة شرعًا، وكذلك ما يستهلكه من مواد علاجيَّة مما لا يستقر ويبقى أثره عند المريض من نحو القطن والبنج ومادة التعقيم وماء المضمضة ونحوها، أما ما يشتريه من المواد العلاجية التي تستعمل في العلاج ويحصل عليها المريض ويحسب ثمنها عليه بحسابٍ مباشرٍ أو ضمن الفاتورة العلاجية، فهي عروض تجارةٍ تجب فيها الزكاة إذا بلغت قيمتها النصاب -وهو قيمة خمسة وثمانين جرامًا من الذهب عيار واحد وعشرين- أو زادَ عليه، وحال عليها الحول بالأشهر العربية، فتُقَوَّم ويضم إليها ما يملكه من الأموال النقدية، ثم يخصم ما قد يكون عليه من ديون ومصاريف ونحوها، فإن بلغ صافي ذلك النِّصابَ أو زادَ عليه، كان عليه أن يُخرج زكاته بنسبة ربع العشر (2.5%).

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة أ. د/ نظير محمد عياد (فتوى رقم 8565 بتاريخ 06 فبراير 2025)",tags:["زكاة","عيادة أسنان","طبيب أسنان","عروض تجارة","نصاب","حول","ذهب","معدات","مواد علاجية"]},{id:"misc_010_2025",category:Y.MISCELLANEOUS,title:"حكم إجراء عملية طبية بالتقسيط عن طريق البنك",question:"ما حكم التقسيط عن طريق البنك لإجراء عملية (مثل الليزك) مع زيادة مقابل الأجل؟",medical_context:"تقسيط، بنك، تمويل، عملية، ليزك، تصحيح الإبصار، مرابحة، خدمات طبية، زيادة مقابل الأجل، شيك، مركز علاج",ruling:`الجواب:
العملية محلُّ السؤال هي نوعٌ من الخدمات المحدَّدة في قدرها وإجراءاتها، فلها حكم السلعة في إمكان التعاقد عليها وتقديمها بثمن حالٍّ أو مُقَسَّط، بمُقَدَّم أو بغير مقدم، وبزيادة في السعر مع التقسيط أو بغير زيادة، ويجوز عندئذٍ دخول جهة ثالثة أو أكثر للتمويل، ودفع الجهة المُموّلة للمال حالًّا وتحصيله من المستفيد من العملية بزيادة في الثمن مقابل الأجل لا مانع منه شرعًا؛ لتوسط الخدمات المعلومة القدر والوقت القائمة مقام السلعة حينئذ.

التفاصيل....
العملية محلُّ السؤال، والتي تكون تكاليفُها الكاملةُ محددةً سلفًا وواضحةً وضوحًا تامًّا لا غموضَ فيه ولا لبْسَ ويتم الاتفاق فيها بوضوح بين الطرفين: الجهةِ المتعهدةِ بـالعملية –المركز- مِن جهة، والمريض الراغب في إجراء العملية من جهة أخرى، لا تَعْدُو أن تكون نوعًا من الخدمات التي يجوز التعاقد عليها شرعًا.

ومن المقرَّر شرعًا أنه يصحُّ البيعُ بثمنٍ حالٍّ وبثمن مؤجل إلى أجلٍ معلوم، والزيادة في الثمن نظير الأجل المعلوم جائزةٌ شرعًا على ما ذهب إليه جمهور الفقهاء؛ لأنَّها مِن قبيل المرابحة، وهي نوعٌ من أنواع البيوع الجائزة شرعًا التي يجوز فيها اشتراطُ الزيادة في الثمن في مقابلة الأجل؛ لأن الأجلَ وإن لم يكن مالًا حقيقة إلا أنه في باب المرابحة يُزاد في الثمن لأجله إذا ذُكِر الأجل المعلوم في مقابلة زيادة الثمن؛ قصدًا لحصول التراضي بين الطرفين على ذلك، ولعدم وجود موجب للمنع، ولحاجة الناس الماسَّة إليه بائعينَ كانوا أو مشترين.

ولا يُعَدُّ ذلك مِن قبيل الربا؛ لأنَّ القاعدة الشرعية "أنه إذا توسَّطت السلعة فلا ربا"، والخدمات التي يُتَعاقَد عليها -مثل العملية محددة التكاليف محل السؤال- هي في حكم السلعة، ويشترط لذلك أن تكون التفاصيل المالية والزمانية واضحةً ومحددةً سلفًا تحديدًا يماثل ما يشترط في عقد السَّلَم الذي اشترط فيه الفقهاء تحديد مكان وزمان تسليم السلعة المتفق على توريدها رغم عدم وجودها عند إجراء العقد، وهو بيعُ معدومٍ عند العقد، والأصل فيه المنع، ولكن الشرع الشريف أباحه للحاجة، ودفعًا للضرر؛ أي مراعاةً لحاجة بعض المكلَّفين إلى ضمان وجود السلعة في وقت معين بسعر معين، وحاجة آخرين إلى المال لاستمرار أعمالهم واستغلال إمكاناتهم المعطلة، فهنا أيضًا يكون هذا العقد محققًا لمصلحة الأطراف كلها: المركز، والمريض، والجهة الممولة –إن وُجِدَت- بدون أن يقع غَرَرٌ ولا غَبنٌ ولا ما يُسَبِّب نزاعًا لأطراف العقد، وهو ما تَتَغَيَّاه الشريعة المطهرة وتَتَوَخَّاه؛ حيث إنه هنا أيضًا قد يحتاج المريض لإجراء العملية احتياجًا حالًّا، وقد لا يكون معه مِن المال ما يساعده على تغطية تكاليفها الكاملة، وقد لا يُتاح للمكان الذي سيقوم فيه بـالعملية القبول بتأجيل دفعِ تكاليفِها أو تقسيطِها عليه، فيكون دخولُ جهةٍ ثالثة مموِّلة أمرًا مُحَقِّقًا لصالح الطرفين، ولو كان بزيادة على الأجر الحال للعملية، فيشترط حينئذ أن تكون كل أقساط سداد ثمن العملية محددة مقدارًا وزمانًا تحديدًا واضحًا عند إبرام العقد، ولا يجوز حينئذٍ الزيادة في المال المُقَسّط على المريض إذا تأخَّر لأسباب قاهرة عن سداد الأقساط، كمَا لا يَحِلُّ للمريض أن يتوانى عن سداد الأقساط الملتَزَمة في ذمته بغير سبب قهريّ.

وبناء على ذلك: فهذه العملية نوعٌ من الخدمات المحددة في قدرها وإجراءاتها، فلها حكم السلعة في إمكان التعاقد عليها وتقديمها بثمن حالٍّ أو مُقَسَّط، بمُقَدَّم أو بغير مقدم، وبزيادة في السعر مع التقسيط أو بغير زيادة، ويجوز عندئذٍ دخول جهة ثالثة أو أكثر للتمويل أو الوكالة أو السمسرة، ودفع الجهة المموّلة للمال حالًّا وتحصيله من المستفيد من العملية بزيادة في الثمن مقابل الأجل لا مانع منه شرعًا؛ لتوسط الخدمات المعلومة القدر والوقت القائمة مقام السلعة حينئذ.

والله سبحانه وتعالى أعلم`,verdict:"PERMITTED",source:"فتاوى دار الإفتاء المصرية - فضيلة الأستاذ الدكتور علي جمعة (فتوى رقم 6821 بتاريخ 25 فبراير 2008)",tags:["تمويل","تقسيط","بنك","عمليات","ليزك","مرابحة","خدمات","طب"]},{id:"prayer_035_2025",category:Y.PRAYER_PURITY,title:"الغسيل الكلوي البيرتوني وأثره على طهارة المريض",question:"هل الغسيل الكلوي البريتوني ينقض الوضوء ويؤثر على صحة الطهارة؟",medical_context:"غسيل بريتوني، غسيل كلوي، فشل كلوي، قسطرة، أنبوب، كيس خارجي، فضلات، بول، ثقب البطن، وضوء، طهارة، انتقاض الوضوء",ruling:`الجواب:
الغسيل الكلوي البريتوني لا ينقض الوضوء ولا يؤثر على صحة الطهارة، وذلك لأن الوضوء يتطلب إزالة الحدث، والغسيل البريتوني لا يُعتبر حدثًا في حد ذاته، بل هو إجراء طبي يُستخدم لتنقية الدم من السموم والفضلات. لذا، يمكن للمريض أن يتوضأ ويصلي دون أن يؤثر عليه الغسيل البريتوني.

والله سبحانه وتعالى أعلم`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 8199 بتاريخ 13 ديسمبر 2023)",tags:["طهارة","وضوء","غسيل كلوي","غسيل بريتوني","فشل كلوي","قسطرة","مريض","مشقة","تيسير"]},{id:"prayer_036_2025",category:Y.PRAYER_PURITY,title:"وضوء الطبيب إذا مس عورة المريض أثناء الكشف",question:"هل ينتقض وضوء الطبيب إذا لمس عورة المريض أثناء الكشف بغرض العلاج؟",medical_context:"وضوء، طهارة، طبيب، كشف طبي، لمس العورة، عورة مغلظة، بدون حائل، قفاز، خلاف فقهي، حنفية، شافعية، مالكية، حنابلة",ruling:`

الجواب:
انتقاض الوضوء بمسِّ العورة من المسائل التي اختلف فيها الفقهاء؛ فجمهور المالكية والشافعية والحنابلة يرون انتقاض الوضوء بمسِّ العورةِ، أما فقهاء الحنفية وأكثر الصحابة والتابعين فيرَوْن عدمَ انتقاضِ الوضوء بمجرَّد مَسِّ العورةِ، سواء مَسَّ نفسَه أو مَسَّ غيرَه، ولكن ينتقض الوضوء عندهم إذا استتبع المسَّ خروجُ شيءٍ من مُبطلاتِ الوضوء، ويجوز للسائل أن يُقلِّد مذهبَ الحنفية؛ على القاعدة التي تقرَّرت: أنَّ "مَنِ ابتُلِي بشيء من المختلَف فيه فليقلِّد من أجاز".

التفاصيل....
المحتويات

المقصود بالعورة عند العلماء
تعريف مس العورة وآراء العلماء فيه
اختلاف الفقهاء في انتقاض الوضوء بمس العورة
الخلاصة
 

المقصود بالعورة عند العلماء
العورة في اللغة تُطلق ويُراد بها معانٍ عدَّة منها: السَّوْءة، وكلُّ شيء يستره الإنسان أنَفَةً وحياءً فهو عورة؛ قال العلامة الفيومي في "المصباح المنير" (2/ 437، ط. المكتبة العلمية بيروت): [وقيل للسَّوْأة: عورةٌ؛ لقُبح النظر إليها، وكلُّ شيء يستره الإنسان أنَفَةً وحياءً فهو عورة] اهـ.
وهي في الاصطلاح: ما يَحرُم كشفه من الجسم سواء من الرَّجُل أو المرأة، وذلك لحرمة النظر إليه؛ قال العلامة الخطيب الشربيني في "مغني المحتاج" (1/ 397، ط. دار الكتب العلمية، بتصرف يسير): [تُطْلَق العورةُ على مَا يَحْرُمُ النَّظَرُ إلَيْهِ] اهـ.
وقال العلامة البهوتي الحنبلي في "كشاف القناع" (1/ 264، ط. دار الكتب العلمية): [(والعورة سَوأةُ الإنسان) أي: قُبُلُه ودُبُرُه، قال تعالى: ﴿فَبَدَتْ لَهُمَا سَوْآتُهُمَا﴾ (وكل ما يُستَحَى منه).. ثم إنها تُطلَق على ما يجب ستره في الصلاة، وهو المراد هنا وعلى ما يَحرُم النظر إليه] اهـ.
والعَورة المغلَّظة هي السوءتان القُبُلُ والدُّبُرُ؛ جاء في "الاختيار لتعليل المختار" (1/ 46، ط. مطبعة الحلبي): [والعورة عورتان: غليظة وهي السوءتان، وخفيفة وهي ما سواهما] اهـ.
وقال الشيخ عليش المالكي في "منح الجليل شرح مختصر خليل" (1/ 221، ط. دار الفكر): [العَورة المغلَّظة وهي من رَجُلٍ سَوْأَتَاه من المُقَدَّم الذَّكَرُ والأُنْثَيَانِ، ومن المُؤَخَّر ما بين أَلْيَتَيْه، ومن الأَمَةِ من المُقَدَّم قُبُلُها وعَانَتُها ومن المُؤَخَّر أَلْيَتَاها، ومن الحُرَّةِ من المُقَدَّم من تحت صدرِها إلى رُكْبَتِها، ومن المُؤَخَّر من مُحَاذِي سُرَّتِها إلى رُكْبَتِها] اهـ.
وجاء في "حاشية البجيرمي على الخطيب" (1/ 367، ط. دار الفكر): [العورة المغلظة أي السوأتين فقط] اهـ.
وقال العلامة المرداوي الحنبلي في "الإنصاف" (8/ 18، ط. دار إحياء التراث): [والعورة المغلظة: هي الفرجان. وهذا مشهور عن داود الظاهري] اهـ.

تعريف مس العورة وآراء العلماء فيه
أمَّا المسُّ لغة فهو: مأخوذ من مسسته، ويُطلَق ويُرادُ به الإفضاءُ باليَدِ من غير حائلٍ، يقال: مَسَسْتُه مسًّا -من باب قَتَلَ- أي: أفضيتُ إليهِ بيَدِي من غيرِ حائلٍ، وقد يُطلَق ويُرادُ به الجِماعُ فيُقالُ: مَسَّ امرأَتَه -مِن بابِ تَعِبَ- مسًّا ومَسِيسًا، كناية عن الجِماعِ؛ قال العلامة ابن منظور في "لسان العرب" (6/ 217- 218، ط. دار صادر): [مسس: مَسِسْتُهُ، بِالْكَسْرِ، أَمَسُّهُ مَسًّا وَمَسِيسًا: لَمَسْتُهُ، هذه اللغة الفصيحة.. وَالْمَسُّ: مَسُّكَ الشَّيْءَ بِيَدِكَ، وَيُقَالُ: مَسِسْتُ الشَّيْءَ أَمَسُّهُ مَسًّا: إِذَا لَمَسْتَهُ بِيَدِكَ، ثُمَّ اسْتُعِيرَ لِلْأَخْذِ وَالضَّرْبِ لِأَنَّهُمَا بِالْيَدِ، وَاسْتُعِيرَ لِلْجِمَاعِ لِأَنَّهُ لَمْسٌ] اهـ.
وأمَّا في الاصطلاح: فتحديد معنى المسِّ مُختلَف فيه بين الفقهاء؛ فجمهور فقهاء المالكية والشافعية والحنابلة: على أنه اللَّمْس باليدِ، وأما فقهاء الحنفيَّة فالمسُّ عندَهم محمولٌ على الجِماعِ.
وإنما اختلف الفقهاء في ذلك؛ لاشتراك اسم اللمس في كلام العرب، فإن العرب تطلقه مرَّة على اللمس باليد، ومرة تكني به عن الجماع؛ كما في قوله تعالى: ﴿أَوْ لَامَسْتُمُ النِّسَاءَ﴾ [النساء: 43].
قال العلامة بدر الدين العيني الحنفي في "البناية شرح الهداية" (1/ 306، ط. دار الكتب العلمية): [الملامسة واللمس: الجِماع. وقال ابن رشد المالكي: وإن كانت دلالته على المعنيين على السواء أو قريبًا من اللمس المسمَّى الأظهر عندي في الجماع؛ لأن الله تعالى قد كنَّى بالمباشرة والمسِّ عن الجماع، ولا فرق بين اللمس والمس في اللغة، ولأن الملامسة ظاهرة في الجماع، والمس سبب الجماع؛ لأنه محرك للشهوة، وذكر السبب وإرادة المسبب من أقوى طرق المجاز] اهـ.
وقال العلامة الدسوقي في "حاشيته على الشرح الكبير" (1/ 119، ط. دار الفكر): [وأما المس فهو ملاقاة جسم لآخر على أي وجه كان] اهـ.
وقال الإمام النووي الشافعي في "المجموع" (2/ 26، ط. دار الفكر): [واللمس يطلق على الجَسِّ باليد؛ قال الله تعالى: ﴿فَلَمَسُوهُ بِأَيْدِيهِم﴾ وقال النبي صلى الله عليه وآله وسلم لِمَاعزٍ رضي الله عنه: «لَعَلَّكَ قَبَّلْتَ أَوْ لَمَسْتَ».. الحديث. ونهى عن بيع الملامسة، وفي الحديث الآخر: «وَالْيَدُ زِنَاهَا اللَّمْسُ». وفي حديث عائشة: "قَلَّ يَوْمٌ إلَّا ورسول الله صلى الله عليه وآله وسلم يَطوفُ عَلَيْنَا فيُقبِّلُ ويلْمِسُ"، قال أهل اللغة: اللمس يكون باليد وبغيرها، وقد يكون بالجماع. قال ابن دريد: اللمس أصلُه باليَدِ ليُعرَفَ مَسُّ الشيءِ. وأنشد الشافعي وأصحابنا وأهل اللغة في هذا قولَ الشاعر:
وَأَلْمَسْتُ كَفِّي كَفَّهُ طَلَبَ الْغِنَى وَلَمْ أَدْرِ أَنَّ الْجُودَ مِنْ كَفِّهِ يُعْدِي
قال أصحابنا: ونحن نقول بمقتضى اللمس مطلقًا، فمتى التقت البشرتان انتقض سواء كان بيد أو جماع] اهـ.
وقال شيخ الإسلام زكريا الأنصاري في "أسنى المطالب" (1/ 56، ط. دار الكتاب الإسلامي): [اللمس: الجس باليد وبغيرها أو باليد فقط؛ كما فسره به ابن عمر وغيره وألحق باليد غيرها، والمعنى في النقض به أنه مظنة التلذذ المثير للشهوة] اهـ.
وقال العلامة ابن قدامة الحنبلي في "المغني" (1/ 142، ط. مكتبة القاهرة): [وحقيقة اللمس ملاقاة البشرتين؛ قال الله تعالى مخبرًا عن الجن أنهم قالوا: ﴿وَأَنَّا لَمَسْنَا السَّمَاءَ﴾ وقال الشاعر: لَمَسْتُ بِكَفِّي كَفَّهُ أَطْلُبُ الْغِنَى] اهـ.

اختلاف الفقهاء في انتقاض الوضوء بمس العورة
قد اختلف الفقهاء في انتقاض الوضوء بمس العورة:
فذهب فقهاء الحنفية إلى أنَّ مس فرج الآدمي وإن كان مُعابًا، إلا أنه لا ينقض الوضوء مطلقًا، رجلًا كان أو امرأةً، قُبُلًا كان أو دُبُرًا، سواء كانت سَوْأتَه أو سَوْأَة غيره، بشهوةٍ كان أو بغير شهوةٍ، وهو مذهب أكثر الصحابة ومنهم: عمر بن الخطاب وعلي بن أبي طالب، وعبد الله بن مسعود، وعبد الله بن عباس، وعمار بن ياسر، وزيد بن ثابت، وحذيفة بن اليمان، وعمران بن الحصين، وأبو الدرداء، رضي الله عنهم، وكذلك يراه من التابعين: الحسن البصري، وسعيد بن المسيب، وهو مذهب سفيان الثوري؛ قال العلامة بدر الدين العيني في "البناية شرح الهداية" (1/ 296، ط. دار الكتب العلمية): [مَسُّ الذَّكَر مَعَابَةٌ لا ينقض الوضوءَ عندنا، وهو قول عمر بن الخطاب وعلي بن أبي طالب، وعبد الله بن مسعود، وعبد الله بن عباس، وعمار بن ياسر، وزيد بن ثابت، وحذيفة بن اليمان، وعمران بن الحصين، وأبي الدرداء، وسعد بن أبي وقاص عند أهل الكوفة وأبي هريرة في رواية عنه، هكذا حكاه أبو عمر بن عبد البر. ومن التابعين: الحسن البصري، وسعيد بن المسيب وهو مذهب سفيان الثوري، وقال الطحاوي: لم يُعلَم أحدٌ من أصحاب رسول الله صلى الله عليه وآله وسلم أفتى بالوضوء منه غير ابن عمر، وقد خالفه في ذلك أكثر أصحاب رسول الله صلى الله عليه وآله وسلم] اهـ.
وقال العلامة أبو بكر علاء الدين السمرقندي في "تحفة الفقهاء" (1/ 22، ط. دار الكتب العلمية): [فأما مجرد مَسِّ المرأةِ لشهوةٍ أو غير شهوةٍ أو مسِّ ذَكَره أو ذَكَر غيره، فليس بحَدَثٍ عند عامَّة العلماء ما لم يَخرُجْ منه شيء] اهـ.
بينما ذهب جمهور فقهاء المالكية والشافعية والحنابلة في الجملة إلى انتقاض الوضوء بمسِّ العورة، ولكلٍّ منهم تفصيلُه وشروطه.
قال العلامة الخرشي المالكي في "شرحه لمختصر خليل" (1/ 156، ط. دار الفكر): [من الأسباب النَّاقِضَة للوُضُوءِ مَسُّ ذَكَرِه نَفْسِهِ الْمُتَّصِلِ مِنْ غَيْرِ حَائِلٍ عَمْدًا أَوْ سَهْوًا قَصَدَ اللَّذَّةَ أَمْ لَا، وَلَوْ عِنِّينًا لَا يَأْتِي النِّسَاءَ مَسَّهُ مِنَ الْكَمَرَةِ أَوِ الْعَسِيبِ أَوْ خُنْثَى مُشْكِلًا تَخْرِيجًا عَلَى مَنْ تَيَقَّنَ الطَّهَارَةَ وَشَكَّ في الحَدَثِ، والنَّقْضُ بِمَسِّ الذَّكَرِ مَشْرُوطٌ بِأَنْ يَكُونَ بِبَاطِنِ كَفِّهِ أَوْ جَنْبِهِ أَوْ بِبَاطِنِ أَوْ جَنْبِ أَوْ رَأْسِ أُصْبُعٍ] اهـ.
وقال العلامة الرملي الشافعي في "نهاية المحتاج" (1/ 118، ط. دار الفكر): [الناقض الرابع: مَسُّ قُبُلِ الآدَمِيِّ ذكرًا كان أو أنثَى من نفسه أو غيره عمدًا أو سهوًا.. ببطن الكف بلا حائلٍ.. وكذا في الجديد حَلْقَة دُبُر الآدَمِيِّ] اهـ.
وقال العلامة البهوتي الحنبلي في "كشاف القناع" (1/ 126، ط. دار الكتب العلمية): [من نواقض الوضوء مسُّ ذَكَر آدَميٍّ إلى أصول الأنثيين مطلقًا سواء كان الماسُّ ذكرًا أو أنثَى بشهوةٍ أو غيرها ذَكَرَه أو ذَكَرَ غيره سواء كان صغيرًا أو كبيرًا.. ببطن كفه أو بظهره أو بحرفه.. من غير حائل] اهـ.
وبناءً على ذلك: فانتقاض الوضوء بمسِّ العورةِ من المسائل التي اختلف فيها الفقهاء؛ فجمهور المالكية والشافعية والحنابلة يرون انتقاض الوضوء بمسِّ العورةِ، أما فقهاء الحنفية وأكثر الصحابة والتابعين فيرَوْن عدمَ انتقاضِ الوضوء بمجرَّد مَسِّ العورةِ، سواء مَسَّ نفسَه أو غيرَه، ولكن ينتقض الوضوء عندهم إذا استتبع المسَّ خروجُ شيء من مُبطلاتِ الوضوء.

الخلاصة
في واقعةِ السؤال: فيجوز للسائل أن يُقلِّد مذهبَ الحنفية؛ على القاعدة التي تقرَّرت: أنَّ "مَنِ ابتُلِي بشيء من المختلَف فيه فليقلِّد من أجاز".
والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 4733 بتاريخ 27 فبراير 2019)",tags:["طهارة","وضوء","طبيب","لمس العورة","خلاف فقهي","حنفية","كشف طبي"]},{id:"obgyn_012_2025",category:Y.WOMEN_PREGNANCY,title:"حكم سفر المرأة بدون محرم إذا أمنت الطريق",question:"هل يجوز للمرأة السفر بدون محرم إذا أمنت الطريق وكانت الرفقة مأمونة؟",medical_context:"سفر، امرأة، بدون محرم، أمان الطريق، رفقة مأمونة، نساء ثقات، حج الفريضة، مضايقات، فقه مالكي، فقه شافعي",ruling:`
الجواب:
يجوز للمرأة أن تسافر بدون مَحرَم بشرط اطمئنانها على الأمان في سفرها وإقامتها وعودتها، وعدم تعرضها لمضايقات في شخصها أو دِينها.

فقد ورد عنه صلى الله عليه وآله وسلم فيما رواه البخاري وغيره عن عَدِيّ بن حاتم رضي الله عنه أنه قال له: «فَإنْ طَالَتْ بِكَ حَياةٌ لَتَرَيَنَّ الظَّعِينةَ؛ أي: المسافرة تَرتَحِلُ مِنَ الحِيرةِ حَتَّى تَطُوفَ بالكَعْبَةِ لَا تَخافُ أَحَدًا إلَّا اللهَ»، وفي رواية الإمام أحمد: «فَوَالَّذِي نَفْسِي بيَدِه لَيُتِمَّنَّ اللهُ هَذَا اْلأَمْرَ حَتَّى تَخرُجَ الظَّعِينةُ مِن الحِيرةِ حَتَّى تَطُوفَ بالبَيتِ فِي غَيرِ جِوارِ أَحَدٍ».

فمِن هذا الحديث برواياته أخذ بعض المجتهدين جوازَ سفر المرأة وحدها إذا كانت آمنة، وخصصوا بهذا الحديث الأحاديثَ الأخرى التي تُحَرِّم سفر المرأة وحدها بغير مَحرَم.

وكذلك نرى المالكية والشافعية يجيزون للمرأة السفر بدون محرم إذا كانت مع نساء ثقات أو رفقة مأمونة وكان ذلك في حج الفريضة؛ وقد استدلوا على ذلك بخروج أمهات المؤمنين رضي الله عنهن بعد وفاة رسول الله صلى الله عليه وآله وسلم للحج في عهد عمر رضي الله عنه، وقد أرسل معهن عثمان بن عفان -رضي الله عنه- ليحافظ عليهن.

يقول العلامة الحطّاب المالكي في كتابه "مواهب الجليل شرح مختصر خليل" (2/ 524، ط. دار الفكر): [قَيّد ذلك الباجي بالعدد القليل، ونصه: هذا عندي في الانفراد والعدد اليسير، فأما في القوافل العظيمة فهي عندي كالبلاد، يصح فيها سفرها دون نساء وذوي محارم" انتهى، ونقله عنه في "الإكمال" وقَبِلَه ولم يذكر خلافه، وذكره الزناتي في "شرح الرسالة" على أنه المذهب، فيقيد به كلام المصنف وغيره.

ونص كلام الزناتي: إذا كانت في رفقة مأمونة ذات عَدَد وعُدَدٍ أو جيش مأمون من الغلبة والمحلة العظيمة فلا خلاف في جواز سفرها من غير ذي محرم في جميع الأسفار: الواجب منها والمندوب والمباح، من قول مالك وغيره إذ لا فرق بين ما تقدم ذكره وبين البلد. هكذا ذكره القابسي. انتهى] اهـ. ومما ذكر يُعلم الجواب عن السؤال.

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة الأستاذ الدكتور علي جمعة (فتوى رقم 7030 بتاريخ 30 يونيو 2009)",tags:["نساء","سفر","محرم","أمان","رفقة مأمونة","حج"]},{id:"ethics_008_2025",category:Y.ETHICS,title:"بيان ما يُفعل في الجزء المأخوذ من الميت بغرض الدراسة",question:"ما حكم تكفين ودفن الجزء المأخوذ من الميت (عظام بشرية) بعد انتهاء طالب الطب من الدراسة؟ وهل يجوز إعطاؤه لطالب آخر؟",medical_context:"تشريح، طب، كلية الطب، عظام بشرية، أجزاء من الميت، جثة، تعليم، دراسة، تكفين، دفن، حرمة الميت، نبش القبور، الاتجار بالأعضاء",ruling:`
الجواب:
إذا انتهى طالب الطب من الدراسة، وكان قد حصل على عظام بشرية بالطرق التي تبيح له ذلك، فإنه يجب عليه حينئذٍ تكفينها ودفنها، فإذا استأذنه أحد الطلبة في هذه العظام للدراسة عليها جاز له أن يعطيها له على أن يوصيه بدفنها فور الانتهاء من المذاكرة عليها، ويُشترط في كلِّ ذلك التعامل مع هذه العظام بإكرام، وألَّا يكون تناقلها بين الطلبة بالبيع والشراء، ومراعاة الابتعاد عن التَّلَاعُبِ والاتجار بالأعضاء والأنسجة الآدمية، ولا تُحَوِّلُهُ إلى قِطَعِ غِيَارٍ تُباعُ وتُشتَرَى، بل يَكونُ المَقصِدُ منها التعاونَ على البِرِّ والتقوى.

ويجب أن يقتصر ذلك على ما تقضي به الضرورة القصوى، مع المحافظة على الجثة بعد تشريحها بحيث تُجمَع أجزاؤها وتُدفَن في المقابر كما تُدفَن الجثث قبل التشريح.

التفاصيل....
المحتويات

حكم تعلم علم الطب
حكم استعانة طالب الطب بأجزاء من جسد الميت للتعلم عليها
حكم تكفين الجزء المأخوذ من الميت لغرض الدراسة لدفنه
ضوابط التعامل مع عظام وأجساد الموتى
الخلاصة
 

حكم تعلم علم الطب
علم الطب مِنْ أشرف وأهم العلوم التي لا تستقيم حياة الناس إلا بوجود مَن يتعلمه ويتقنه؛ إذ به يتحقق مقصد حفظ النفس وصيانتها من المهلكات، ولأجل ذلك نصَّ الفقهاء على أنَّ تعلُّم الطبِّ من فروض الكفاية التي إن تركها الجميع أثموا.

وقد روى الربيع بن سليمان عن الإمام الشافعي رضي الله عنه أنه قال: "العلم علمان: علم الأبدان، وعلم الأديان".

وعنه أيضًا رحمه الله تعالى أنه قال: "لا أعلم علمًا بعد الحلال والحرام أنبل من الطب"، ينظر: "سير أعلام النبلاء" للإمام شمس الدين الذهبي (10/ 57، ط. الرسالة).

قال الإمام النووي الشافعي في "روضة الطالبين" (10/ 223، ط. المكتب الإسلامي): [وأما العلوم العقلية، فمنها ما هو فرض كفاية، كالطب والحساب المحتاج إليه] اهـ.

حكم استعانة طالب الطب بأجزاء من جسد الميت للتعلم عليها
لأهمية علم الطب وشدة حاجة الناس إليه، أُبيح -لأجل تحصيله وإتقان علومه وفروعه- ما هو محظور في أصله، كتشريح جثث الموتى، أو الاحتفاظ بأجزاء من أبدانهم أو عظامهم، بشروط وضوابط شرعية وقانونية وأخلاقية، حتى يُستعان بذلك على فهم حقيقة الجسم الإنساني ووظيفة كلِّ عضو من أعضائه وعمله الفسيولوجي، وتشخيص عِلَلِه وأَدْوائه، وتوصيف أدويته، وطرق الشفاء وقايةً وعلاجًا، وذلك لما تقرر أنَّ "ما لا يتم الواجب إلا به فهو واجب"، كما في "المحصول" للإمام الرازي (6/ 24، ط. مؤسسة الرسالة).

حكم تكفين الجزء المأخوذ من الميت لغرض الدراسة لدفنه
إذا تَحتَّم على طالب الطب المذاكرة على عظام بشرية، وتَمَكَّن من الحصول عليها بالأساليب المباحة لذلك، كاستعارتها من كليات الطب، أو من إحدى المستشفيات التعليمية، ولم يُلزَم من قِبَلهم بإعادة هذه العظام إليهم مرة أخرى، فإنه يجب عليه حينئذٍ إكرامها ودفنها فور الانتهاء من تحقق المقصود منها مِن المذاكرة والدراسة عليها، ذلك لأنَّ "مَا أُبِيحَ لِلضَّرُورَةِ يُقَدَّرُ بِقَدْرِهَا"، كما في "الأشباه والنظائر" للحافظ السيوطي (ص: 84، ط. دار الكتب العلمية).

ضوابط التعامل مع عظام وأجساد الموتى
ممَّا يجدر التنبيه إليه في هذا السياق الضوابطُ الآتية:

منها: يجب أن يتعامل الطالب مع هذه العظام في جميع مراحل تعامله معها بأقصى درجات الاحترام والتقدير والإكرام.

ومنها: يجب أن يكونَ ذلك في حدود الضرورة القصوى التي يقدرها الأطباء الثقات، بمعنى أنه إذا كانت جثة واحدة تكفي لتعليم الطلاب، فلا يصح أن يتعدى ذلك إلى جثةٍ أخرى.

ومنها: أنه لا يُلجأ إلى التعليم على الجثث أو العظام البشرية إلا حال الضرورة أو الحاجة الماسة إلى ذلك، كأن لا تُغنِي الصور أو المصنوعات البلاستيكية التي تضاهي الجسد البشري في تحصيل العلم؛ لقِلَّة جودتها أو سوء صناعتها.

ومنها: على أهل الاختصاص في مجال الطب والتشريح البحث عن قوالب ونماذج جديدة تحاكي بدن الميت وأعضاءه، وتوفير هذه النماذج واستخدامها ما أمكن.

ومنها: أنه يحرم الحصول عليها بأيِّ طريقةٍ من الطرق التي يُحرِّمها الشرع ويُجرِّمها القانون كنبش القبور ونحو ذلك.

ومنها: اتخاذ كافة الإجراءات والضوابط التي تُبْعِدُ هذه العمليةَ مِن نِطَاقِ التَّلَاعُبِ بالإنسان ومن دائرة الاتجار بالأعضاء والأنسجة الآدمية، ولا تُحَوِّلُهُ إلى قِطَعِ غِيَارٍ تُباعُ وتُشتَرَى، بل يَكونُ المَقصِدُ منها التعاونَ على البِرِّ والتقوى.  

الخلاصة
بناءً على ذلك وفي واقعة السؤال: فإذا انتهى طالب الطب من الدراسة، وكان قد حصل على عظام بشرية بالطرق التي تبيح له ذلك، فإنه يجب عليه حينئذٍ تكفينها ودفنها، فإذا استأذنه أحد الطلبة في هذه العظام للدراسة عليها جاز له أن يعطيها له على أن يوصيه بدفنها فور الانتهاء من المذاكرة عليها، ويُشترط في كلِّ ذلك التعامل مع هذه العظام بإكرام، وألَّا يكون تناقلها بين الطلبة بالبيع والشراء، على أن يقتصر ذلك على ما تقضي به الضرورة القصوى، مع المحافظة على الجثة بعد تشريحها بحيث تُجمَع أجزاؤها وتُدفَن في المقابر كما تُدفَن الجثث قبل التشريح، وأن تُراعى في كلِّ الإجراءات والمراحل الضوابط السالف ذكرها.

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 8160 بتاريخ 04 ديسمبر 2023)",tags:["أخلاقيات","تشريح","حرمة الميت","عظام","دفن","تكفين","طب","تعليم","اتجار بالأعضاء"]},{id:"misc_011_2025",category:Y.MISCELLANEOUS,title:"حكم ممارسة أطباء الامتياز الطب بالأجر قبل إنهاء سنة الامتياز",question:"هل يجوز لطبيب الامتياز أن يمارس الطب بالأجر قبل إنهاء سنة الامتياز إذا ظن أنه صار كفؤًا ولا يضر المرضى؟",medical_context:"طبيب امتياز، سنة الامتياز، عمل بالأجر، ممارسة الطب، تدريب، فروع الباطنة، قانون، نقابة، ترخيص، مسؤولية مهنية، مصلحة عامة",ruling:`
الجواب:
لا يجوز شرعًا لطالب الطب ولا لغيره ممَّن قد يكون أكثرَ ثقافةً وخبرةً وحِنكةً في علم الطب أن يمارس مهنةَ الطب خارج الأُطُر القانونية والآداب النِّقابية وإن رأى في نفسه الكفاءةَ للتطبيب؛ لأن ممارسة هذه المهنة تخضع لضوابط وقوانين يحكمها ويضبطها الصالح العام، والقاعدة الشرعية تقرر أنه: "عند تعارض المصلحة العامة مع المصلحة الخاصة تُقَدَّمُ المصلحةُ العامة".

التفاصيل....
الممارسة المهنية للتطبيب تخضع في ظلِّ المجتمع الحاضر والأوضاع القائمة لضوابط وقواعد وقوانين، الأصل فيها أنها محايدة، وما شُرِعَت ولا قُنِّنَت ضد شخص بعينه أو لصالح شخص بذاته، بل الذي يحكمها ويضبطها هو الصالح العام، والقاعدة الشرعية أنه "عند تعارض المصلحة العامة مع المصلحة الخاصة تقدَّم المصلحة العامة"، والقاعدة الشرعية أيضًا أن "تصرفات الحاكم منوطة بالمصلحة"، وقد يرى الشخص في نفسه الكفاءةَ للتطبيب أو لممارسة الصيدلة أو بناء الأبنية أو غير ذلك من الممارسات التي تتعداه إلى غيره، ولكن رؤية الشخص لنفسه لا يصح أن تكون حاكمة على الآخرين، وأن يجعل الشخصُ الخَلْقَ وأرواحَهم وأجسادَهم محلًّا لتَخَرُّصاته وتَكَهُّناته وآرائه الشخصية، فمِن احترام المخلوقات جمادًا أو حيوانًا ناهيك عن الإنسان الذي قال الله تعالى فيه: ﴿وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ﴾ [الإسراء: 70]، وقال عنه رسول الله صلى الله تعالى عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» متفق عليه، وقال فيه في حجة الوداع: «كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ؛ دَمُهُ، وَمَالُهُ، وَعِرْضُهُ» رواه مسلم وغيره - مِن احترام المخلوقات الربانية ألَّا تكون حقلَ تجارب لظنون الواحد منَّا، وإن كانت غالبةً عنده أو راجحةً لَدَيه، بل يجب الرجوع في ذلك إلى الضوابط المهنية الحاكمة على الجميع لصالح الجميع، والأصل فيها أنها تتحرى الوصول إلى أعلى قدْر من المصلحة وارتكاب أقل قدْر من المفسدة، ولكن الشيطان يعبث بصدر ابن آدم؛ فتكبر في عينه مصلحته الشخصية، وتتوارى وتتقازم لديها المصلحة العامَّة، ولو تُرِك الأمر للتقديرات الشخصية والظنون الغالبة لَاستَحَلَّ أقوامٌ دماءَ أقوامٍ وأموالَهم ﴿وَهُمْ يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا﴾ [الكهف: 104].

ومقياس حضارةِ الأمم ورُقِيِّ المجتمعات يُقاس بانضباط الأفراد لصالح المجموع، وانهيار الدول، وانتكاس العَوامِرِ يكون بتَفَلُّتِ الأفرادِ عن المنظومة الاجتماعية والقوانين الحاكمة.
وعليه، فلا يجوز لطالبِ الطب ولا لغيره ممَّن قد يكون أكثرَ ثقافةً وخبرةً وحِنكةً في علم الطب منه أن يمارس المهنة خارج الأُطُرِ القانونية والآداب النِّقابية.

والله سبحانه وتعالى أعلم.`,verdict:"FORBIDDEN",source:"فتاوى دار الإفتاء المصرية - فضيلة الأستاذ الدكتور علي جمعة (فتوى رقم 582 بتاريخ 07 يونيو 2007)",tags:["طب","امتياز","ترخيص","قانون","نقابة","مسؤولية","مهنية"]},{id:"obgyn_008_2025",category:Y.WOMEN_PREGNANCY,title:"أحكام النفاس والاستحاضة بعد الولادة",question:"ما هي مدة النفاس بعد الولادة؟ وكيف نفرق بين دم النفاس والاستحاضة والحيض؟ وما الأحكام الشرعية المترتبة على كل منها؟",medical_context:"نفاس، postpartum bleeding، lochia، postpartum bleeding duration، استحاضة، فترة النفاس، صلاة، صيام، عبادات، غسل، طهارة",ruling:`الحمد لله الذي تفضل علينا بشريعة غراء تراعي حالة المرأة المنجبة. هذا الحكم يتعلق بفترة حساسة جداً من حياة المرأة:

أولاً: تعريف النفاس:
- النفاس: الدم الذي يخرج من الرحم بعد الولادة مباشرة
- طبياً: يحتوي على بقايا الحمل والتهيجات الرحمية
- شرعاً: حالة خاصة بالمرأة لها أحكام مختلفة عن الحيض

ثانياً: مدة النفاس الشرعية:
- الحد الأدنى: اتفاق على أنه قد يكون ساعات قليلة فقط
- الحد الأقصى: أكثر الأقوال الفقهية تحدد 40 يوماً قصوى
- التطبيق الطبي: في العصر الحديث، قد يستمر النزيف لأسابيع أو شهور خفيفة

ثالثاً: أحكام المرأة في فترة النفاس:

1. الصلاة:
   - تترك الصلاة: كما الحائض (معذورة من الصلاة خلال النفاس)
   - الغسل: بعد انقطاع الدم أو مرور 40 يوم (أيهما أولاً)
   - القضاء: لا تقضي صلوات النفاس (كالحيض)

2. الصيام:
   - تفطر كالحائض: إذا كانت في النفاس، لا تصوم
   - القضاء: تقضي الأيام التي أفطرتها في نفاسها (بخلاف الحيض)
   - التعليل: النفاس ضعف صحي تحتاج فيه لتعافي أكثر

3. الجماع والزوجية:
   - محرم تماماً: كما الحيض
   - المقصد: حماية الرحم من الأذى
   - الطبي: إعطاء الرحم وقتاً كافياً للتعافي

4. المس والقراءة:
   - كحكم الحائض: تمس المصحف بقفاز (أحوط)
   - كحكم الحائض: لا تقرأ من المصحف مباشرة

رابعاً: التمييز بين دم النفاس والاستحاضة:

كيفية التمييز:
1. الكمية: دم النفاس يكون غزيراً في البداية، الاستحاضة تكون قليلة
2. الرائحة: دم النفاس له رائحة مميزة، الاستحاضة قد تكون مائياً خفيفاً
3. الصفة: دم النفاس حار غامق، الاستحاضة قد تكون فاتحة
4. المدة: دم النفاس ينقطع بعد 40 يوم، الاستحاضة قد تستمر أطول

خامساً: الحالات الخاصة:

حالة 1: النفاس الممتد (أكثر من 40 يوم):
- ما بعد 40 يوم يعتبر استحاضة
- الحكم: تصلي وتصوم بعد 40 يوم

حالة 2: النفاس المبكر (أقل من 10 أيام):
- إذا انقطع الدم قبل 10 أيام: تغتسل وتصلي
- الحكم: معاملة الطاهر

سادساً: التطبيق الحديث:

في العصر الحديث:
- الطبيب قد ينصح بتجنب الجماع لفترة أطول حماية من الالتهابات
- لكن شرعاً: بعد 40 يوم أو انقطاع الدم، يحل الجماع
- الاحتياط الطبي لا ينفي الحكم الشرعي

الخلاصة الشرعية:
النفاس حالة خاصة بالمرأة المنجبة، وقد راعت الشريعة ضعفها الصحي، وسمحت لها بترك الصلاة والصيام، كما أوجبت على الزوج احترام هذه الحالة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + مجمع الفقه الإسلامي",tags:["نفاس","نزيف","بعد الولادة","صلاة","صيام","طهارة"]},{id:"obgyn_009_2025",category:Y.WOMEN_PREGNANCY,title:"حكم صيام من تنزف طوال رمضان بسبب ورم في الرحم",question:"امرأة لديها ورم في الرحم وتنزف طوال رمضان: هل يعد الدم حيضًا أم استحاضة؟ وكيف تصوم؟",medical_context:"نزيف، bleeding, vaginal bleeding, abnormal uterine bleeding (AUB), uterine tumor, uterine fibroid, leiomyoma, endometrial polyp, uterus, رحم، ورم، fibroid، استحاضة، حيض، menstrual bleeding, menstruation, Ramadan fasting, صيام رمضان",ruling:`
الجواب:
المرأة التي تنزف طوال الشهر يُرجَع في أمرها إلى الطبيب المتخصص، فإن أخبر أن الدم النازل منها دم حيض، فإن كانت لها عادة معروفة دون الأيام العشرة التي هي أكثر الحيض فتُرَدُّ إلى عادتها، ويكون حيضها قدر ما اعتادته، فإن كانت عادتها أربعة أيام مثلًا من أول كل شهر فتكون حائضًا هذه الأيام الأربعة، وما زاد فهو استحاضة، وإن لم تكن لها عادة معروفة، فَتُردُّ إلى أكثر الحيض وهو عشرة أيام، فتكون حيضتها: عشرة أيام، وما زاد عليها فهو استحاضة، وتغتسل بعد مرور الأيام العشرة، وحيثما كانت حائضًا تركت ما تتركه الحائض من صلاة وصيام وغيرها، مع وجوب قضاء صوم ما تفطره في رمضان، وإن أخبر الطبيب أن الدم النازل بسبب علة مرضيَّة ولا علاقة له بالحيض فحينئذ لا تعتبر المرأة حائضًا، وهي في حكم الطاهر فتصلي وتصوم وتؤدي سائر العبادات.

التفاصيل....
المحتويات

أنواع الدماء التي تخرج من المرأة
الأحكام المتعلقة بالحائض والنفساء والمستحاضة
حكم صيام من أصابها ورم في الرحم فهي تنزف طيلة شهر رمضان
الخلاصة
 

أنواع الدماء التي تخرج من المرأة
الدماء التي تعتري النساء خروجًا من أرحامهن على أحوال، فمنها: ما يخرج على سبيل الصحة والاعتياد، وهو ما يُسمَّى بالحيض، ومنها: ما لا يكون على سبيل الصحة بل العلة والمرض، وهو ما يُسَمَّى بدم الاستحاضة، ومنها: ما يخرج بعد خلو الرحم مِن الحمل، وهو دم النفاس.

الأحكام المتعلقة بالحائض والنفساء والمستحاضة
من المقرر شرعًا أنه يحرم على النساء في حالة الحيض والنفاس جملة من الأمور كالصلاة -ولا يجب عليهنَّ أنْ يقضين ما فاتهنَّ بسبب ذلك- ومسِّ المصحف وحملِه، والطوافِ، واللبثِ في المسجد، والجماعِ، والصومِ -ويجب قضاؤه بخلاف الصلاة- والمرورِ مِن المسجد إلا إذا أُمِنَ التلويث، كما قال الإمام أبو شجاع الشافعي في "الغاية والتقريب" (ص: 7، ط. عالم الكتب).

بخلاف الاستحاضة التي يحكم بطهارة صاحبتها وصحة العبادة منها ما لم تتلبس بناقض، فلا تُسقطُ الصلاةَ ولا تَمنعُ صحتها، رخصةً للضرورة، ولا تمنع الجماع، ولا تُحرِّم الصومَ فرضًا أو نفلًا، ولا قراءة القرآن، ولا مس المصحف، ولا دخول المسجد أو الطواف إذا أمنت التلويث.

حكم صيام من أصابها ورم في الرحم فهي تنزف طيلة شهر رمضان
المقرر في مذهب السادة الحنفية بشأن مدة الحيض، وهو المختار للفتوى: أنَّ أقلَّ مدة الحيض: ثلاثة أيام بلياليهن، وأكثره: عشرة أيام بلياليها، وما نقص عن أقله فهو: استحاضة، وهذا هو المروي عن عدد من الصحابة الكرام، منهم: واثلة بن الأسقع، وأبو أمامة، وأنس بن مالك رضي الله عنهم.

فعن أبي أُمامة رضي الله عنه قال: قال رسول الله صلى الله عليه وآله وسلم: «أَقَلُّ مَا يَكُونُ مِنَ الْحَيْضِ لِلْجَارِيَةِ الْبِكْرِ وَالثَّيِّبِ: ثَلَاثٌ، وَأَكْثَرُ مَا يَكُونُ مِنَ الْمَحِيضِ: عَشَرَةُ أَيَّامٍ، فَإِذَا رَأَتِ الدَّمَ أَكْثَرَ مِنْ عَشَرَةِ أَيَّامٍ: فَهِيَ مُسْتَحَاضَةٌ، تَقْضِي مَا زَادَ عَلَى أَيَّامِ أَقْرَائِهَا» أخرجه الدارقطني في "السنن".

قال الإمام علاء الدين الحصكفي الحنفي في "الدر المختار" (1/ 283-285، ط. دار الفكر، ومعه "حاشية ابن عابدين"): [و(أقله: ثلاثة بلياليها) الثلاث، فالإضافة لبيان العدد المقدر بالساعات الفلكية لا للاختصاص، فلا يلزم كونها ليالي تلك الأيام، وكذا قوله: (وأكثره: عشرة) بعشر ليال، كذا رواه الدارقطني وغيره (والناقص) عن أقله... (والزائد) على أكثره أو أكثر النفاس أو على العادة وجاوز أكثرهما... (استحاضة)] اهـ.

وقال العلَّامة ابن عابدين مُحَشِّيًا عليه: [(قوله: والزائد على أكثره) أي: في حق المبتدأة، أما المعتادة فما زاد على عادتها ويجاوز العشرة في الحيض، والأربعين في النفاس: يكون استحاضة، كما أشار إليه بقوله: (أو على العادة... إلخ). أما إذا لم يتجاوز الأكثر فيهما، فهو انتقال للعادة فيهما، فيكون حيضًا ونفاسًا] اهـ.

ومقتضى ذلك أن ما زاد على أكثره وهو: عشرة أيام، فإن كان للمرأة عادة معروفة دون العشرة: رُدَّت إلى أيام عادتها، فيكون حيضها أيام عادتها، وما زاد عليها إلى ما فوق العشرة: فهو استحاضة، وإن لم تكن لها عادة: رُدَّت إلى أكثر الحيض وهو الأيام العشرة، فتكون حيضتها قدر الأيام العشرة، وما زاد عليها فهو: استحاضة.

فعن عُبَيْد بْن عازبٍ رضي الله عنه عن النبي صلى الله عليه وآله وسلم قال: «الْمُسْتَحَاضَةُ تَدَعُ الصَّلَاةَ أَيَّامَ أَقْرَائِهَا، ثُمَّ تَغْتَسِلُ» أخرجه الإمام أحمد في "المسند"، وأبو داود والترمذي وابن ماجه في "السنن". فأفاد أنَّ على المرأة ترك الصلاة فيما اعتادت من أيام حيضها، وما زاد عليها فهو استحاضة، وهذا ما جاءت به الآثار عن بعض فقهاء الصحابة رضي الله عنهم.

وعن ابن عباس رضي الله عنهما أنه قال في المستحاضة: "تَدَعُ الصَّلَاةَ أَيَّامَ أَقْرَائِهَا، ثُمَّ تَغْتَسِلُ، ثُمَّ تَحْتَشِي وَتَسْتَثْفِرُ، ثُمَّ تُصَلِّي". فَقَالَ الرَّجُلُ: وَإِنْ كَانَتْ تَسِيلُ؟ قَالَ: "وَإِنْ كَانَتْ تَسِيلُ مِثْلَ هَذَا الْمَثْعَبِ" أخرجه الدارمي في "السنن". والاستثفار: أن تتخذ المرأة ما يقيها أذى الدم النازل عليها، والمَثْعَبُ: الموضع الذي يَنْثَعِبُ منه الماء، أي يجري.

والمقرر أن مرد الأمر في هذه الصورة باعتبار وجود العلة فيها إلى الطبيب المتخصص، فإذا أخبر أن الدم النازل سببه الورم لا العادة المعروفة لدى النساء فهو دم مرض وعلة والمسمَّى فقهًا بالاستحاضة، وتأخذ المرأة في هذه الحالة أحكامها، فيحكم بطهارتها ما لم تتلبس بناقض آخر، بخلاف ما لو أخبر أنه من العادة وظهرت علاماته المعروفة من غير تسبب الورم، فهو دم صحة واعتياد والمسمَّى فقهًا بالحيض، وتأخذ المرأة في هذه الحالة أحكامه المعروفة المذكورة آنفًا.

الخلاصة
بناء على ذلك: فإن المرأة التي تنزف طوال الشهر يرجع في أمرها إلى الطبيب المتخصص، فإن أخبر أن الدم النازل منها دم حيض، فإن كانت لها عادة معروفة دون الأيام العشرة التي هي أكثر الحيض فتُرَدُّ إلى عادتها، ويكون حيضها قدر ما اعتادته، فإن كانت عادتها أربعة أيام مثلًا من أول كل شهر فتكون حائضًا هذه الأيام الأربعة، وما زاد فهو استحاضة، وإن لم تكن لها عادة معروفة، فَتُردُّ إلى أكثر الحيض وهو عشرة أيام، فتكون حيضتها: عشرة أيام، وما زاد عليها فهو استحاضة، وتغتسل بعد مرور الأيام العشرة، وحيثما كانت حائضًا تركت ما تتركه الحائض من صلاة وصيام وغيرها، مع وجوب قضاء صوم ما تفطره في رمضان، وإن أخبر الطبيب أن الدم النازل بسبب علة مرضيَّة ولا علاقة له بالحيض فحينئذ لا تعتبر المرأة حائضًا، وهي في حكم الطاهر فتصلي وتصوم وتؤدي سائر العبادات.

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة أ. د/ نظير محمد عياد (فتوى رقم 8563 بتاريخ 02 فبراير 2025)",tags:["نساء","صيام","رمضان","حيض","استحاضة","نزيف"]},{id:"misc_012_2025",category:Y.MISCELLANEOUS,title:"ما الذي يجب على الطبيب إذا أخطأ؟ (الضمان والدية)",question:"ما الحكم إذا أخطأ الطبيب في التشخيص أو أجرى جراحة أدت لعاهة مستديمة أو وفاة؟ ومتى يضمن الطبيب؟",medical_context:"خطأ طبي، malpractice, medical error, تشخيص خاطئ، جراحة، عاهة مستديمة، وفاة، ضمان، دية، قاضٍ، مسؤولية، إهمال، تعدي حدود المهنة",ruling:`ما الذي يجب على الطبيب إذا أخطأ؟
الجواب:
إذا كان هذا الطبيب من أهل المعرفة ولم يخطئ في فعله ولم يتجاوز حدوده فلا شيء عليه، أما إذا ثبت خطؤه وتجاوز حدود مهنته فعليه الدية أو ما يحكم به القاضي؛ لحديث: «مَن تَطَبَّبَ وَلَمْ يُعلَم منه طِبٌّ قَبْل ذلك فهو ضامِن» رواه النسائي.

التفاصيل....
المحتويات

من الصفات التي يجب أن يتحلى بها الأطباء
شروط من يتصدر للطب
الخلاصة
 

من الصفات التي يجب أن يتحلى بها الأطباء
إذا كانتْ هناك صفاتٌ كريمةٌ وخلالٌ حسنةٌ يجبُ أن يتحلَّى بها الناس في تعاملهم مع غيرهم، فإنَّ أَوْلَى الناس بالتَّحلِّي بهذه الصفات الكريمة هم الأطباء، وعلى رأس هذه الصفات: الرحمة ورقَّة القلب ولين الجانب وسعة الصدر؛ وذلك لأن الأطباء يتعاملون مع أناس قد داهمهم المرض واستشرى فيهم الداء.

جُعل كذلك من أهم الصفات التي يجب أن يتحلى بها الأطباء: صفة الأمانة بأشمل معانيها وبأوسع مدلولاتها؛ وذلك لأنَّ الطبيب هو أدرى الناس بأحوال المريض وبوسائل علاجه، فعليه أن يرشده إلى ما ينفعه بكل أمانةٍ ودقةٍ، وعلى ألا يفشي سره، وعلى أن يَبذل قصارى جهده لراحته والوصول به إلى طريق الشفاء، فإذا فقد الطبيب هذه الصفات يكون قد فقد أهم خصائص مهنته.

شروط من يتصدر للطب
لقد وضع الفقهاء شروطًا لمن يتصدى للعمل بالطبِّ، وبيَّنوا ما للأطباء من حقوق وما عليهم من واجباتٍ، وذكروا كثيرًا من العقوبات التي يعاقَب بها من يتعدى حدود هذه المهنة السامية، ومن بين الشروط التي وضعوها:

أن يكون عالمًا بها متخصصًا فيها، خبيرًا بتفاصيلها ودقائقها، ولا شك أن مقياس العلم بمهنة الطب يختلف باختلاف العصور وبتقدم العلوم؛ فقد كان المقياس -في بعض العصور الغابرة- شهرة الطبيب بإجادة مهنة الطب، وأن يشهد طبيبان من أهل الصناعة وذوي الخبرة بالطب أنه أهلٌ لممارسة أعمال الطب؛ والأصل في ذلك: ما رواه النسائي في "سننه" أن رسول الله صلى الله عليه وآله وسلم قال: «مَنْ تَطَبَّبَ وَلَمْ يُعْلَمْ مِنْهُ طِبٌّ قَبْلَ ذَلِكَ فَهُوَ ضَامِنٌ».

وقد جاء في كتاب "معالم القربة في أحكام الحسبة" للعلامة محمد بن محمد القرشي الشافعي بعد كلام طويل في الحسبة على الأطباء والجراحين والمجبِّرين، جاء في كلام عن الطب ولزومه ما ملخصه: [والطبيب هو العارف بتركيب البدن ومزاج الأعضاء والأمراض الحادثة فيها وأسبابها وأعراضها وعلاماتها والأدوية النافعة فيها، والاعتياض عما لم يوجد منها، والوجه في استخراجها وطريق مداواتها بالتساوي بين الأمراض والأدوية في كمياتها، ويخالف بينها وبين كيفياتها، فمن لم يكن كذلك فلا يُجعل له مداواة المرض ولا يجوز له الإقدام على علاج يخاطر فيه، ولا يتعرض لما لا علم له فيه، وفى حديث عمرو بن شعيب عن أبيه عن جده رضي الله عنهم قال: قال رسول الله صلى الله عليه وآله وسلم: «مَن تَطَبَّبَ وَلَمْ يُعلَم منه طِبٌّ قَبْل ذلك فهو ضامِن»] اهــ.

كما أنَّ الفقهاء قد تعرضوا للعقوبة التي يجب أن يعاقب بها من يهمل في أداء هذه المهنة الشريفة أو من يكون دخيلًا عليها، فقرروا أن الأطباء شأنهم شأن غيرهم من أصحاب المهن الأخرى مسئولون عن أخطائهم التي يمكنهم التحرز عنها، والتي تؤدي إلى إلحاق الضرر بالمريض، فقرروا أن الطبيب إذا أخطأ في العلاج بأن عالج بغير ما يقرره الطب أو بغير ما هو معروفٌ ومشهودٌ به بين الأطباء بأنه دواءٌ لمرضٍ معينٍ، وأدى ذلك إلى إلحاق أذًى بالمريض أو إلى وفاته، فعلى الطبيب في هذه الحالة الدِّية أو ما يحكم به القاضي.

الخلاصة
عليه: فالطبيب الذي يخطئ في تشخيص مرضٍ ما أو يُجري جراحةً تؤدي إلى الإصابة بعاهةٍ مستديمةٍ أو تؤدي إلى فقدانِ الحياةِ، فإذا كان هذا الطبيب من أهل المعرفة ولم يخطئ في فعله ولم يتجاوز حدوده فلا ضمان عليه، أما إذا ثبت خطؤه وتجاوز حدود مهنته فإنه ضامن.

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى فضيلة الدكتور محمد سيد طنطاوي (فتوى رقم 621 بتاريخ 12 أغسطس 1987)",tags:["خطأ طبي","مسؤولية","ضمان","دية"]},{id:"misc_013_2025",category:Y.MISCELLANEOUS,title:"بيان بعض أحكام ميراث التوائم الملتصقة",question:"ما حكم ميراث التوائم الملتصقة باعتبارهم وارثين أو موروثين؟ وهل يعاملون كشخص واحد أم شخصين؟ وما أثر ذلك في الحجب؟",medical_context:"ميراث، ورثة، حجب، تركة، توائم ملتصقة، conjoined twins, siamese twins, parasitic twin, incomplete twin, shared organs, heart, brain, فصل التوائم",ruling:`بيان بعض أحكام ميراث التوائم الملتصقة
الجواب:
التوائم الملتصقة إذا كانت من نوع الطفيلية -وهي التي تكون في صورة جسدٍ واحدٍ ينمو بشكلٍ صحيحٍ ويحمل أعضاء أو زوائد إضافية تتنوع بحسب موطن الاتصال، وتفتقد تلك الأعضاء أو الزوائد مقوِّمات الحياة بشكلٍ مستقلٍّ- أو من نوع شبه المكتملة -وهي التي تشترك في أحد مُقوِّمات الحياة أو في كليهما، كالمخ والقلب على اختلافٍ فيهما، بحيث لا يمكن أن يستقل أحدُ طرفيها بحياة عن الآخر، وإذا أمكن فصلُهما فَقَدَ أحدُهما حياته- فتعامل في الصورتين معاملة الشخص الواحد في الإرث، من غير نظر إلى زائدٍ، أو فاقدٍ لأحد مُقَوِّمات الحياة أو كليهما، بخلاف ما لو كانت من نوع المكتملة الذي يستقل كِلا طرفيها بالحياة إذا ما انفصلا: فظاهر اعتبارهما شخصين في الميراث كما لو كانا منفصلين، فيكون لهما ميراث شخصين إذا مات عنهما مورِّثُهما، ويكون أحدهما ضمن ورثة الآخر إذا مات عنه قبله، وتكون تركةُ كلٍّ منهما لورثته إذا ماتَا معًا، وكذا في الحجب، ومَرَدُّ معرفة حقيقة التوأم ومدى اندراجه تحت أيٍّ من الأنواع إنما يكون بالرجوع إلى الأطباء المختصين.

التفاصيل....
المحتويات

بيان المقصود بالتوائم
بيان أحكام الميراث للتوائم الملتصقة وفق ثلاث صور
الصورة الأولى: أحكام الميراث المتعلقة بالتوائم الطفيلية
الصورة الثانية: أحكام الميراث المتعلقة بالتوائم المكتملة "السيامية"
الصورة الثالثة: أحكام الميراث المتعلقة بالتوائم شبه المكتملة
الخلاصة
 

بيان المقصود بالتوائم
التوائم الملتصقة مِن آيات الله تعالى المعجزة الدالَّة على عظيم قدرته في اختلاف مخلوقاته أنواعًا وأحوالًا، قال تعالى: ﴿ وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ إِنَّ فِي ذَلِكَ لَآيَاتٍ لِلْعَالِمِينَ﴾ [الروم: 22].

والتوائم جمع توأم، وهو اسم لولدٍ يكون معه آخر في بطنٍ واحدةٍ، وهما توأمان، وقد يجمع أيضًا على تُؤَام، ويستعار في جميع المزدوجات، وأصله ذلك. ينظر: "طلبة الطلبة" للعلَّامة النسفي (ص: 135، ط. العامرة)، و"المصباح المنير" للعلَّامة الفيومي، مادة: «ت و م» (1/ 78، ط. المكتبة العلمية).

بيان أحكام الميراث للتوائم الملتصقة وفق ثلاث صور
التوائم الملتصقة تنقسم من حيث اشتراك أفرادها في جملةٍ من الخصائص إلى ثلاث فئات رئيسة، يختلف كلٌّ منها في طبيعته وفق الخلل الجيني الذي نشأ عنه والبنية التشريحية لجسده؛ ومن ثَمَّ فتختلف الأحكام الفقهية بهذا الاعتبار، لِمَا ينتج عن ذلك من اعتباره شخصًا واحدًا أو اثنين، ومن ثَمَّ فبيان أحكام الإرث للتوائم يكون وفق الصور الآتية:

الصورة الأولى: أحكام الميراث المتعلقة بالتوائم الطفيلية
الصورة الأولى: التوائم الطفيلية، وهي التي تكون في صورة جسدٍ واحدٍ ينمو بشكلٍ صحيحٍ ويحمل أعضاء أو زوائد إضافية تتنوع بحسب موطن الاتصال، وتفتقد تلك الأعضاء أو الزوائد مقوِّمات الحياة بشكلٍ مستقلٍّ، والناظر في نصوص الفقهاء يجد أنَّهم قد عاملوا هذا النوع من التوائم معاملة الشخص الواحد في الطهارة وفي أحكام القصاص والدية، ملاحظين في ذلك الأعضاء الظاهرة والأساسية.

قال العلامة الحطاب المالكي في "مواهب الجليل" (1/ 194، ط. دار الفكر) في كيفية وضوء التوأم: [قال: في "السليمانية" في امرأةٍ خُلِقَت من سرتها إلى أسفل خِلْقَة امرأةٍ واحدةٍ وإلى فوق خِلْقة امرأتين: أنها تَغْسِلُ منها محل الأذى، وتَغْسِلُ الوجهين فرضًا أو سنةً، والأيدي الأربع، وتمسح الرأسين وتَغْسِلُ الرجلين، نقله عنها ابن عبد السلام وابن عرفة وابن ناجي وغيرهم] اهـ.

وقال شيخ الإسلام زكريا الأنصاري الشافعي في "أسنى المطالب" (4/ 90، ط. دار الكتاب الإسلامي) في أحكام الغُرة عند إسقاط جنين التوأم: [(وكذا) لو ألقت (ثلاثًا، وأربعًا) من الأيدي أو الأرجل (ورأسين) لإمكان كونهما لجنينٍ واحدٍ بعضها أصلي وبعضها زائد... وظاهر أنه يجب للعضو الثالث فأكثر حكومة، (وإن ألقت بدنين) ولو ملتصقين (فغرتان) إذ الواحد لا يكون له بدنان، فالبدنان حقيقة يستلزمان رأسين، فلو لم يكن إلا رأس فالمجموع بدنٌ واحدٌ حقيقةً فلا تجب إلا غرة واحدة] اهـ.

وتنزيلًا لما قرَّره الفقهاء في هذه النصوص فإنَّ هذا النوع من التوائم يُعامل معاملةَ الشخص الواحد في مسائل الإرث من حيثُ كونُه وارثًا أو مورِّثًا، وكذا من حيثُ الحجب، دون اعتبار للجزء الزائد الملتصق به؛ لعدم استقلاله بحياة.

الصورة الثانية: أحكام الميراث المتعلقة بالتوائم المكتملة "السيامية"
الصورة الثانية: التوائم المكتملة: وهي التي تتحقق كافةُ مقومات الحياة في كِلَا طرفيها، بحيث إذا أمكن فصلهما استقلَّ كلٌّ منهما بحياته عن الآخر، ومما يُميِّزُ هذا النوع أنه لا يكون إلا من جنسٍ واحدٍ، إما ذَكَرين أو أُنْثَيين، ولا يمكن أن يكون أحدهما ذكرًا والآخر أنثى، كما يمكن أن يَمُوتَ أحدُهما ويبقى الآخر بعده زمنًا، واشتهر تسمية هذا النوع طبيًّا بـ"التوائم السيامية".

وقد بحث الفقهاء إرث التوائم في هذه الصورة، فنصوا على أنهما شخصان حقيقة، وأنَّ لهما حكم الاثنين في جميع الأحكام.

فجاء في "مغني المحتاج" للخطيب الشربيني الشافعي (2/ 407، ط. دار الكتب العلمية) في أحكام التوأمين الملتصقين: [إنهما شخصان حقيقة بدليل أنهما يحجبان الأم من الثلث إلى السدس] اهـ.

وقال أيضًا (4/ 18) عند الكلام على حجب الأم حجب نقصان من الثلث إلى السدس بالأخوين: [تنبيه: قوله: (اثنين) قد يشمل ما لو ولدت امرأة ولدين ملزقين، لهما رأسان وأربع أرجل وأربع أيد وفرجان ولها ابن آخر، ثم مات هذا الابن وترك أمه وهذين، فيصرف لها السدس، وهو كذلك؛ لأن حكمهما حكم الاثنين في سائر الأحكام من قصاص ودية وغيرهما] اهـ.

وقال الإمام الدميري في "النجم الوهاج" نقلًا عن الإمام ابن القطان (6/ 135، ط. دار المنهاج): [في (فروع ابن القطان): إذا ولدت ولدين ملتصقين لهما رأسان وأربعة أرجل وأربعة أيد وفرجان.. فحكمهما حكم الاثنين في جميع الأحكام، فتحجب الأم بهما، وميراثهما ميراث اثنين] اهـ.

وبهذا يظهر أن التوائم المكتملة أو ما اشتهر بـ"التوائم السيامية" التي يتصل طرفاها ويلتصقان في جزءٍ منهما مع انفراد كلٍّ منهما بمقومات الحياة واستقلاله إذا ما انفصل -أنهما يعتبران شخصين في أحكام الميراث، من حيث كون كلٍّ منهما وارثًا أو مورِّثًا، وكذا من حيث الحجب.

الصورة الثالثة: أحكام الميراث المتعلقة بالتوائم شبه المكتملة
الصورة الثالثة: التوائم شبه المكتملة: وهي التي تشترك في أحد مُقوِّمات الحياة أو في كليهما، كالمخ والقلب على اختلافٍ فيهما، بحيث لا يمكن أن يستقل أحدُ طرفيها بحياة عن الآخر، وإذا أمكن فصلُهما فَقَدَ أحدُهما حياته، وقد بحث الفقهاء هذا النوع وجعلوا له أحكامًا خاصة، تختلف باختلاف بابها، فجاء في "الأشباه والنظائر" لتاج الدين السبكي (2/ 130، ط. دار الكتب العلمية): [فلو خُلِقَ له وجهان وجب غسلهما، ولو خُلِقَ له رأسان كفى مسح أحدهما، ولينظر هنا اليدين المتساويتين، والمتميز منهما الزائد، والشعور الخارجة عن العادة وغير ذلك] اهـ.

وبذلك يُعلم أنَّ التوائم شبه المكتملة التي لا يمكن أن يستقل أحد طرفيها بحياته عن الآخر؛ لاشتراكهما في أحد مُقَوِّمَات الحياة أو في كليهما تجري عليها أحكام الميراث كالشخص الواحد، من حيث كونه وارثًا أو مورِّثًا، وكذا من حيث الحجب.

الخلاصة
بناءً على ذلك: فالتوائم الملتصقة إذا كانت من نوع الطفيلية وشبه المكتملة فتعامل معاملة الشخص الواحد في الإرث، من غير نظر إلى زائدٍ، أو فاقدٍ لأحد مُقَوِّمات الحياة أو كليهما، بخلاف ما لو كانت من نوع المكتملة الذي يستقل كِلا طرفيها بالحياة إذا ما انفصلا: فظاهر اعتبارهما شخصين في الميراث كما لو كانا منفصلين، فيكون لهما ميراث شخصين إذا مات عنهما مورِّثُهما، ويكون أحدهما ضمن ورثة الآخر إذا مات عنه قبله، وتكون تركةُ كلٍّ منهما لورثته إذا ماتَا معًا، وكذا في الحجب، ومَرَدُّ معرفة حقيقة التوأم ومدى اندراجه تحت أيٍّ من الأنواع إنما يكون بالرجوع إلى الأطباء المختصين.

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 8427 بتاريخ 10 فبراير 2024)",tags:["ميراث","توائم","توائم ملتصقة","حجب","تركة","طب"]},{id:"misc_014_2025",category:Y.MISCELLANEOUS,title:"مدى وجوب إخبار مَن يتعالج من مرض نفسي مخطوبته بذلك",question:"هل يجب على من يتعالج من مرض نفسي أن يخبر مخطوبته؟ وما الضابط في ذلك؟",medical_context:"مرض نفسي، psychiatric illness, mental health, psychotherapy, psychiatrist, medication, follow-up, خطوبة، زواج، عيوب النكاح، تدليس، غش، فسخ، حقوق زوجية، فصام schizophrenia, paranoia, psychosis, bipolar, mania, OCD",ruling:`الجواب:
بعد الرجوع للمتخصصين في الطب النفسي يتضح أن الأمراض النفسية تتفاوت في الشدة والضعف، وتختلف من شخص إلى آخر، ومنها ما يصعب التعايش معه لكونه يؤثر في مقصود الزواج أو يضر بالحقوق الزوجية، ومنها ما يمكن التعايش معه بلا إخلال بمقصود الزواج أو إضرار بها.

ولمَّا كان صديق السائل مريضًا بمرض نفسي كما ذُكِر بالسؤال؛ فإنه يجب عليه في هذه الحالة الرجوع إلى الطبيب المختص كي يحدد له حقيقة كون مرضه مؤثرًا فيلزمه إخبار الطرف الآخر به، أو غير مؤثر فلا يلزمه حينئذٍ الإخبار به.

التفاصيل....
المحتويات

حق كل من المخطوبين في معرفة عيوب الطرف الآخر
ضابط الأمراض التي يجب الإخبار بها عند الخطبة وأقوال الفقهاء في ذلك
مدى وجوب إخبار من يتعالج من مرض نفسي مخطوبته بذلك
وصية ورجاء في ذلك
موقف القانون في هذه المسألة
الخلاصة
 

حق كل من المخطوبين في معرفة عيوب الطرف الآخر
اهتم الإسلام بعقد الزواج اهتمامًا بالغًا، وشرعَ لأجل انعقاده وضمان استقراره في ظلّ رضا طرفيه وسعادتهما عددًا من الأحكام الفقهية والقواعد المرعية، والتي منها: مراعاة حقوق طرفي عقد النكاح؛ سواء قبل انعقاده أو حال قيامه؛ قال تعالى: ﴿وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوف﴾ [البقرة: 228].

ومن الحقوق الثابتة التي كفلها الشرع الشريف لطرفي عقد الزواج قبل انعقاده: تحقق الرضا بينهما على ما به تقوم حياتهما وتستقر أسرتهما؛ وذلك ببيان ما قد يحُولُ دون ذلك من عيوب في الخاطب أو المخطوبة.

فأخرج الإمام مسلم في "صحيحه" عن فاطمة بنت قيس رضي الله عنها: أنها جاءت النبيَّ صلي الله عليه وآله وسلم تسأله: أَنَّ مُعَاوِيَةَ بْنَ أَبِي سُفْيَانَ وَأَبَا جَهْمٍ رضي الله عنهما خَطَبَاهَا؟ فَقَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ: «أَمَّا أَبُو جَهْمٍ: فَلَا يَضَعُ عَصَاهُ عَنْ عَاتِقِهِ، وَأَمَّا مُعَاوِيَةُ: فَصُعْلُوكٌ لَا مَالَ لَهُ». فدلَّ الحديث على مشروعية إعلام المخطوبة بما في الخاطب من عيب ولو لم يكن مؤثرًا على مقصود الزواج؛ إما لتخييرها بين القبول به والرفض أو لأجل أن تحترز منه، وتعمل على تفاديه حال انعقاد العقد.

ضابط الأمراض التي يجب الإخبار بها عند الخطبة وأقوال الفقهاء في ذلك
لَمَّا كان المرض في عمومه ممَّا يحتاج إلى عناية خاصة، ورعاية مقصودة مِن المريض وأسرته؛ فقد فرَّق الفقهاء في اعتبار الأمراض مِن العيوب التي يفسخ بها الزواج ويلزم الخاطبَ الإخبارُ بها قبل العقد بين أمراض تخلّ بمقصود العقد أو تضرّ بالزوجة فيلزم الخاطب الإخبار بها قبل العقد ويحقّ للزوجة طلب الفسخ بها بعده، وأمراض لا تخلّ بمقصود الزواج ولا تضرّ بالزوجة فلا يلزم الإخبار بها ولا تستحق بها الزوجة الفسخ.

وبينما اقتصرت نصوص الفقهاء على تحديد أنواع من الأمراض الجسدية أو العقلية المسوغة لطلب الفسخ والتي يجب الإخبار بها؛ كالجب والعنة والرتق والفتق والجنون والجذام والبرص، إلا أنَّ الضابط الذي وضعوه، والعلة التي راعوها في تنزيل الحكم الشرعي يمكن تطبيقهما على جميع الأمراض التي لم تتناولها نصوصهم ولم تشملها عباراتهم؛ سواء أكانت أمراضًا نفسية سيكولوجية، أم جسدية فسيولوجية؛ لما تقرر مِن أنَّ "الْحُكْمَ يَدُورُ مَعَ عِلَّتِهِ وُجُودًا وَعَدَمًا"؛ كما في "تشنيف المسامع" للإمام الزركشي (3/ 54، ط. مكتبة قرطبة).

فالعلة: هي العيب أو الضرر المترتب على المرض إذا كان شيء منهما ممَّا يخلّ بالمقصود الأصلي من النكاح.

والحكم: هو الحقّ في طلب الفسخ أو الطلاق للضرر.

قال شهاب الدين القليوبي في "حاشيته على شرح المنهاج" (2/ 245، ط. دار الفكر): [عيب النكاح: وهو ما يخلّ بمقصوده الأصلي] اهـ.

وقد أفاد المتخصصون من الأطباء النفسيين -الذين تم الاستماع إليهم في المسألة- أن الأمراض النفسية من حيث إمكانية التعايش معها ومدى تأثيرها على استقرار الحياة الزوجية والأسرية تنقسم إلى نوعين:

النوع الأول: الأمراض التي يصعب التعايش معها وتحمل تبعاتها من رعاية وعناية وكلفة مادية أو بدنية، ممَّا ينعكس بالسلب على استقرار الأسرة والحقوق الزوجية، ومن ذلك: أمراض الفصام "كالبارانويا"، والاضطرابات الذهنية الحادة كالذهان، والاضطرابات المزاجية كالهوس والوسواس الشديدين، وهذه الأمراض مما يجب على الخاطب أن يخبر مخطوبته بها قبل العقد عليها؛ حتى تكون مخيرة بين إتمام العقد أو فسخ الخطبة، ويُعَدّ كتمانه هذا النوع من الأمراض تدليسًا وغشًّا؛ لكونه أخفى عليها ما يلزمه الإخبار به ممَّا قد يخلّ بالمقصود الأصلي من عقد النكاح أو يضرّ بحق الطرف الآخر.

ولا يخفى أنَّ ثبوت الضرر بالمرض النفسي أشد وقعًا وتأثيرًا على الحياة الزوجية من ثبوته في المرض الجسدي، إذ إن المرض النفسي إضافة إلى أنه يضر بالطرف الآخر وقد يخلّ بمقصود الزواج؛ فإنه يتطلب الاحتياج لرعاية دائمة، وكُلفة باهظة، وترقّب دائم، وتحمّل تبعات تحتاج إلى مَن يحسن التعامل معها، ويتطلب أيضًا قدرة نفسية خاصة تُعِين على التكيُّف معه وتَـحَمُّلِهِ؛ كما أفاد بذلك خبراء الطب النفسي، فهو بذلك أَوْلَى لثبوت العيب به من الضرر الجسدي، وهذا ما نص عليه الإمام محمد من الحنفية، والمالكية والشافعية والحنابلة؛ من أن مرض الصرع والوسواس -وهي أمراض نفسية- من العيوب التي تثبت الحق في الخيار.

قال الإمام الكاساني الحنفي في "بدائع الصنائع" (2/ 327، ط. دار الكتب العلمية) في شروط لزوم النكاح وبيان العيوب المنافية لمقاصده: [قال محمد: خُلُوُّهُ من كل عيب لا يمكنها المقام معه إلا بضرر؛ كالجنون والجذام والبرص: شرط لزوم النكاح؛ حتى يُفسخ به النكاح، وخلوه عما سوى ذلك: ليس بشرط، وهو مذهب الشافعي. وَجْهُ قول محمد: أنَّ الخيار في العيوب الخمسة إنما ثبت لدفع الضرر عن المرأة، وهذه العيوب في إلحاق الضرر بها فوق تلك؛ لأنها من الأدواء المتعدية عادة، فلما ثبت الخيار بتلك، فَلَأَنْ يَثبت بهذه أَوْلَى] اهـ.

وقال الشيخ الدردير المالكي في "أقرب المسالك" (2/ 467-469، ط. دار المعارف): [(الخيار) مبتدأ (للزوجين).. أي: يثبت بسبب وجود عيب بصاحبه (إذا لم يسبق علم) بالعيب قبل العقد، فإن علم بالعيب قبل العقد فلا خيار له (ولم يرض) بالعيب حال اطلاعه عليه.. فقال: الخيار للزوجين بِبَرَصٍ.. (وجنون) بطبع أو صرع أو وسواس (وإن) وقع (مرة في الشهر)؛ لنفور النفس منه] اهـ ملخصًا.

وقال شيخ الإسلام زكريا الأنصاري الشافعي في "أسنى المطالب" (3/ 117، ط. دار الكتاب الإسلامي): [ولو استشير في أمر نفسه في النكاح؛ فإن كان فيه ما يثبت الخيار فيه؛ وجب ذكره للزوجة] اهـ.

وقال الخطيب الشربيني الشافعي في "حاشيته على الغرر البهية" (4/ 102، ط. المطبعة الميمنية): [إذا استُشير في نفسه للنكاح: يجب ذكر العيب إن ثبت به الخيار] اهـ.

وقال شهاب الدين الرملي الشافعي في "حاشيته على أسنى المطالب" (3/ 175، ط. دار الكتاب الإسلامي): [(الباب الثامن: في خيار النكاح).. (قوله: والجنون وإن تقطع).. والصرع من غير جنون: حُكمه حُكم الجنون] اهـ.

وقال الشيخ ابن القيم الحنبلي في "زاد المعاد" (5/ 166، ط. مؤسسة الرسالة): [والقياس: أنَّ كل عيب ينفر الزوج الآخر منه ولا يحصل به مقصود النكاح من الرحمة والمودة: يوجب الخيار، وهو أَوْلَى من البيع] اهـ.

وقال العلامة الرحيباني الحنبلي في "مطالب أولي النهى" (5/ 147، ط. المكتب الإسلامي): [القسم الثالث من العيوب المثبتة للخيار: (وهو الجنون ولو) كان يخنق (أحيانًا)؛ لأن النفس لا تَسْكُنُ إلى مَن هذه حاله (ويتجه، ومنه) أي: من الجنون الذي يكون في بعض الأحيان: (الصرع)] اهـ.

والنوع الثاني: الأمراض التي يمكن التعايش بها ومعها، ولا تؤثر في استقرار الأسرة، ولا تضرّ بالحقوق الزوجية، فلا يلزم المريض حينئذ الإخبار به قبل العقد؛ لانتفاء الضرر منها أو انتقاص حق الطرف الآخر بسببها، ومن ذلك: اضطرابات القلق أو الخوف أو النوم أو الأكل، ما لم تصل بصاحبها إلى حد المبالغة أو الهيستيريا.

قال شيخ الإسلام زكريا الأنصاري في "أسنى المطالب" (3/ 117): [ولو استُشير في أمر نفسه في النكاح.. وإن كان فيه ما يُقلّل الرغبة عنه ولا يثبت الخيار؛ كسوء الخلق والشح: استحب] اهـ. أي: استُحِبَّ له في هذه الحالة أن يخبر بهذا الأمر ولا يجب عليه ذلك.

مدى وجوب إخبار من يتعالج من مرض نفسي مخطوبته بذلك
لَمَّا كان المرض النفسي متفاوتًا شدةً وضعفًا، ومتباينًا من شخص إلى شخص، ومتردد الأعراض ما بين كونه مرضًا نفسيًّا يلزمه العلاج أو اضطرابًا سلوكيًّا يضبطه التقويم والإرشاد أو سمتًا شخصيًّا ينصلح ويُقَوَّم بالرقائق والآداب: كان المرجع في بيان ذلك وتحديده هو الطبيب المختص الذي يستطيع التمييز بين أعراض هذه الأحوال والوقوف على حقيقتها، وكان الرجوع إليه في شأن إخبار الطرف الآخر أو عدم إخباره أصلًا لا بد من مراعاته.

وينبني على ذلك: أنه لا يجوز بحالٍ أن يجعل الإنسان من نفسه حكمًا على نفسه في شيءٍ يتعلق بحق غيره عليه؛ لما تقرَّر في القواعد من "عَدَم جَوَازِ الْجَمْعِ بَيْنَ صِفَتَيِ الْخَصْمِ والْـحَكَمِ"، علاوة على أن غالب الأمراض النفسية يُصاحبها من الاضطرابات ما قد يؤثر على حكم المبتَلَى بها على نفسه، وقد نصَّ فقهاء الحنابلة على أنه يشترط في تزويج المريض: الرجوع إلى شهادة أهل الطب؛ كما في "كشاف القناع" للعلَّامة البهوتي (11/ 251، ط. وزارة العدل السعودية).

فإن أفاد الطبيب المختص المتابع للحالة بضرورة أن يخبر المريض الطرف الآخر بطبيعة مرضه؛ لما له من أثرٍ على الحياة الزوجية، فلم يخبره به: فإنه يلحقه الإثم على ذلك؛ لما في عدم الإخبار حينئذٍ من الغش والتدليس المنهي عنهما بصحيح النصوص الشرعية وصريحها؛ خاصة في شأن النكاح الذي احتاط الشارع له إعلاءً لمكانته وتعظيمًا لحرمته حتى وصفه ربنا تبارك وتعالى بالميثاق الغليظ في قوله سبحانه: ﴿وَأَخَذْنَ مِنْكُمْ مِيثَاقًا غَلِيظًا﴾ [النساء: 21].

ففي عموم الغش: أخرج الإمام مسلم في "الصحيح" عن أبي هريرة رضي الله عنه أن النبي صلى الله عليه وآله وسلم قال: «مَنْ غَشَّنَا فَلَيْسَ مِنَّا».

وفي خصوص الغش عند النكاح: أخرج البيهقي في "السنن الكبرى" و"الصغرى" عن ابن عمر رضي الله عنهما أنه قال: تزوج النبيُّ صلى الله عليه وآله وسلم امرأةً، فرأى بكَشْحِهَا وَضَحًا، فردَّها، وقال: «دَلَّستُم عَليَّ»، وبوَّب لهذا الحديث: (باب ما يُرَدُّ به النكاح من العيوب).

وأخرج الإمام مالك في "الموطأ"، والبيهقي في "السنن" عَنْ سَعِيدِ بْنِ الْمُسَيِّبِ أَنَّهُ قَالَ: قَالَ عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ: "أَيُّمَا رَجُلٍ تَزَوَّجَ امْرَأَةً وَبِهَا جُنُونٌ أَوْ جُذَامٌ أَوْ بَرَصٌ فَمَسَّهَا؛ فَلَهَا صَدَاقُهَا كَامِلًا، وَذَلِكَ لِزَوْجِهَا غُرْمٌ عَلَى وَلِيِّهَا".

وصية ورجاء في ذلك
ممَّا نُوصِي به في هذا السياق: أنَّ على مَن علم بإصابة أحد الأشخاص بمرض نفسي -سواء الخاطب أو المخطوبة أو الطبيب المعالج أو غيرهم- ألَّا يُشَهِّر به؛ كي لا تلاحقه أعينُ السفهاء وألسنتهم بالسخرية والازدراء، ممَّا يُعرِّضه للحرج والضيق، في حين أنَّ الشرع الشريف قد أمر بعدم إفشاء الذنوب والزلَّات؛ فقال صلى الله عليه وآله وسلم: «إِنَّ اللهَ حَيِيٌّ يُحِبُّ الْحَيَاءَ، وَسِتِّيرٌ يُحِبُّ السِّتْرَ، فَإِذَا اغْتَسَلَ أَحَدُكُمْ فَلْيَتَوَارَ» أخرجه عبد الرزاق الصنعاني في "المصنف"، والبيهقي في "شعب الإيمان" عن عطاء بن أبي رباح مرسلًا.

وسواء تمَّ الزواج أو لم يتمّ؛ فيجب ألَّا يُتَّخَذ العلم بهذا الأمر سبيلًا للمعايرة أو المعاملة السيئة أو الانتقاص من كرامته الإنسانية، حتى لا يصير المرض النفسي وصمة تلاحق المريض، وتؤثر على حقوقه الزوجية.

موقف القانون في هذه المسألة
راعى المشرع المصري الضرر الذي لا يمكن للمرأة المقام معه في حياة زوجية مستقرة، وجعله مبيحًا لها طلبَ الفسخ أو التفريق إن لم تعلم بوجوده وتقبل به قبل الزواج، ولم يفرق في ذلك بين كونه حاصلًا من مرض جسدي أو حاصلًا من مرض نفسي، ثم بيَّن أنَّ المرد في إثبات ذلك هو أهل الاختصاص؛ فنصت المادة رقم 9 من القانون رقم 25 لسنة 1920م على أنَّ: [للزوجة أن تطلب التفريق بينها وبين زوجها إذا وجدت به عيبًا مستحكمًا لا يمكن البرء منه أو يمكن البرء منه بعد زمن طويل لا يمكنها المقام معه إلا بضرر؛ كالجنون أو الجذام أو البرص، سواء كان ذلك العيب بالزوج قبل العقد ولم تعلم به أم حدث بعد العقد ولم ترض به، فإنْ تزوجته عالمةً بالعيب أو حدث العيب بعد العقد ورضيت به صراحة أو دلالة بعد علمها فلا يجوز التفريق] اهـ.

ونصَّت المادة رقم 11 من ذات القانون على أنه: [يُسْتَعَان بأهل الخبرة في العيوب التي يطلب فسخ الزواج من أجلها] اهـ.

الخلاصة
بناءً على ذلك: فإنَّ الأمراض النفسية تتفاوت في الشدة والضعف، وتختلف من شخص إلى آخر، ومنها ما يصعب التعايش معه لكونه يؤثر في مقصود الزواج أو يضرّ بالحقوق الزوجية، ومنها ما يمكن التعايش معه بلا إخلال بمقصود الزواج أو إضرار بها.

وفي واقعة السؤال: إن كان صديقك المذكور مريضًا بمرض نفسي؛ فإنَّه يتحتم عليه الرجوع إلى الطبيب المختص كي يحدد له حقيقة كون مرضه مؤثرًا فيلزمه إخبار الطرف الآخر به، أو غير مؤثر فلا يلزمه حينئذٍ إخباره.

والله سبحانه وتعالى أعلم`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 6875 بتاريخ 09 أغسطس 2022)",tags:["زواج","خطوبة","مرض نفسي","تدليس","حقوق زوجية","طب نفسي"]},{id:"misc_015_2025",category:Y.MISCELLANEOUS,title:"زواج المعاق عقليًّا (الإعاقة الذهنية البسيطة) وضوابط القَيِّم",question:"ما حكم زواج المعاق عقليًا (إعاقة بسيطة)؟ وهل يمنع خوفًا من إنجاب أبناء معاقين؟ وما دور القَيِّم/الولي؟",medical_context:"زواج، نكاح، إعاقة عقلية، intellectual disability, mild intellectual disability, تعلمية، وصاية، قَيِّم، ولي، مصلحة، تحليل وراثي، genetic testing, hereditary risk, إنجاب، تنظيم النسل",ruling:`الجواب:
من حق المعاق عقليًّا أن يتزوج ما دامت أركان الزواج متوافرة، وما دام محاطًا بالحرص على مصلحته محفوفًا برعاية منافعه.
ولا يمنع المعاق من الزواج مخافة إنجابه لأبناء معاقين؛ لأن الزواجَ شيءٌ والإنجابَ شيءٌ آخر، فالزواج فيه أُنسٌ ورحمةٌ ومودةٌ ومعانٍ ساميةٌ كثيرةٌ بالإضافة إلى الإنجاب، مع الرجوع في مسألة الإنجاب وعدمه أو تأخيره إلى أهل الاختصاص في كل حالة بحسبها.
وتصرفات القَيِّم تجاه المعاق تكون مقيدةً بالمصلحة؛ فإن كانت مصلحة المعاق تقتضي تزويجَه فإن على القيم أن يُبَادِرَ إلى تزويجِهِ، ويأثم إن أخَّره دون سبب.

التفاصيل....
من حق المعاق عقليًّا -المسؤول عن نوعه- أن يتزوج ما دامت أركان الزواج متوافرة، فإن كانت الشريعة قد أباحت زواج المجنون وأباحت الزواج من المجنونة، فالمعاق إعاقةً عقليةً بسيطةً زواجه جائزٌ من باب أوْلَى، لا حرج فيه، ما دام محاطًا بالحرص على مصلحته محفوفًا برعاية منافعه.
وكتب الفقه تَعقِد مسائل وفصولًا تتحدث فيها -في كل المذاهب- على زواج المجنون، وولاية الإجبار عليه كالولاية على الصغير، ويختلفون في جعلها خاصة بالوالد والجد فقط أو تعديتها لبقية الأولياء، أو حتى للحاكم -أي القاضي-، كل هذا لما فيه من مصلحة هذا الإنسان المركب فيه الشهوة والعاطفة، والمحتاج إلى سكنٍ ونفقةٍ ورعايةٍ وعنايةٍ، شأنه شأن بقية بني جنسه، مع زيادته عليهم باحتياج في بعض النواحي التي مرجعها حالته الخاصة.
فنرى مثلًا في فقه الحنابلة في كتاب "كشاف القناع": [أمَّا المجنونة فلجميع الأولياء تزويجها إذا ظهر منها الميلُ للرجال؛ لأن لها حاجة إلى النكاح لدفع ضرر الشهوة عنها وصيانتها من الفجور وتحصيل المهر والنفقة والعفاف وصيانة العرض، فأبيح تزويجها... ويعرف ميلها إلى الرجال من كلامها وتتبع الرجال وميلها إليهم ونحوه من قرائن الأحوال، وكذا إن قال ثقة أهل الطب -إن تعذر غيره-، وإلا فاثنان: إن علتها تزول بتزويجها، فلكل ولي تزويجها؛ لأن ذلك من أعظم مصالحها، كالمداواة، ولو لم يكن للمجنونة ذات الشهوة ونحوها ولي إلا الحاكم زوَّجها] اهـ.
ومع الفارق بين المجنون وبين المعاق عقليًّا إلا أن هناك جامعًا بينهما مؤثرًا في قضية الزواج، وهو الحياة من إنسان قابلٍ للوطء منه أو فيه، مجبول على الحياة الاجتماعية، ومحتاج إلى الرعاية والكفالة والنفقة.
وغني عن البيان أن المقصود من هيمنة الأولياء والأوصياء والكُفلاء وهو محض المصلحة للمُولى عليه والموصى عليه والمكفول، لا أن يتحوَّل الأمرُ إلى تجارة للرقيق الأبيض في صورة استخدام هؤلاء المعاقين استخدامًا غير آدمي وغير أخلاقي. وعليه: فلا يُمنع المعاق من الزواج؛ لأن الزواج شيءٌ والإنجاب شيءٌ آخر، فالزواج فيه أنس ورحمة ومودة وتعاون وإنفاق ومصاهرة ومعانٍ سامية كثيرة بالإضافة إلى الإنجاب، ولو كان الإنجاب ضروريًّا لازمًا مرتبطًا كليًّا بالزواج لما صَحَّ زواج الكبار الآيسين أو العُقماء أو الصغار، والتالي باطل، فانتفى المُقَدَّم وثبت نقيضه، وهو عدم اللزوم ولا الضرورة بين الزواج والإنجاب، وتمكن السيطرة بشكل أو بآخر -وهذا موضوع يُدلي فيه الخبراء وأهل الاختصاص بدلوهم- على عدم الإنجاب أو تأخيره أو تحديده بحسب المصلحة لكل حالة على حِدَتها.
والأصل أن القيِّم والوالدين أو أحدهما تكون تصرفاته تجاه المعاق مقيدةً بالمصلحة، دائرةً معها؛ فإن كان في مصلحته من الناحية النفسية أو الصحية أو حتى المادية الزواج فلا يجوز له الحيلولة بينه وبين ذلك، بل قد يمكن التأليف بين الحالات المتشابهة أو القريبة التشابه لإحداث الزواج بينها من خلال الجمعيات والروابط التي تنتظم أمثال هؤلاء المعاقين ذهنيًّا، ويكون تأخير القائمين على هؤلاء في جلب مصلحة لهم -حيث توافرت مقدماتها- فيه تقصير وإثم بقدر تحقق تخلفهم عن توصيل هذا الخير الذي يغلب على الظن حصوله للمعاقين.

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة الأستاذ الدكتور علي جمعة (فتوى رقم 441 بتاريخ 25 أبريل 2005)",tags:["زواج","نكاح","إعاقة عقلية","وصاية","ولي","مصلحة","وراثة"]},{id:"obgyn_010_2025",category:Y.WOMEN_PREGNANCY,title:"حكم الدم النازل بعد سن اليأس (56 سنة) وأثره على الصلاة والصيام",question:"امرأة عمرها 56 سنة انقطع حيضها عامًا ثم عاد دم 5 أيام بنفس صفات دم الحيض: هل يُعد حيضًا ويمنع الصلاة والصيام؟",medical_context:"سن اليأس، menopause, postmenopause, postmenopausal bleeding (PMB), vaginal bleeding, abnormal uterine bleeding (AUB), hormone changes, endometrial hyperplasia, uterine polyp, fibroid, رحم، دم، حيض، استحاضة، صلاة، صيام",ruling:`الجواب:
الدم النازل بالسائلة التي تجاوز عمرها السادسة والخمسين بعد عام من انقطاع الحيض عنها، واستمراره لخمسة أيام على العادة المعروفة لديها: حيض، ما لم يقرر أهل التخصص من الأطباء خلاف ذلك وأنه ليس حيضًا، وأنَّ نزوله إنما هو لأسبابٍ طبيَّة لا علاقة لها بالحيض، فحينئذ لا يكون حيضًا، ومتى حكم بأنها حائض سقطت عنها الصلاة، ويحرم عليها الصوم والوطء وسائر ما يحرم بالحيض، وإلا فلا.

التفاصيل....
المحتويات

الحيض فطرة الله في النساء
تعريف الحيض، وأقل سن تحيض فيه المرأة
أقوال السادة الفقهاء في أكثر سن الحيض (سن اليأس)
حكم من انقطع حيضها ثم عاد بعد سن 56، وحكم صلاتها وصيامها
الخلاصة
 

الحيض فطرة الله في النساء
الحيض عارض كتبه الله تعالى على النساء؛ فعنْ أُمِّ المُؤْمِنِينَ عائشة رضي الله عنها قالت: خرجنا مع رسول الله صلى الله عليه وآله وسلم، فَحِضْتُ، فدخل عليَّ رسول الله صلى الله عليه وآله وسلم وأنا أبكي، فقال: «ما لَكِ، أنَفِسْتِ؟» قلت: نعم، قَالَ: «إِنَّ هَذَا أَمْرٌ كَتَبَهُ اللهُ عَلَى بَنَاتِ آدَمَ» متفق عليه.

قال العلَّامة ابن بطَّال في "شرح صحيح البخاري" (1/ 411، ط. دار الرشد): [هذا الحديث يدلُّ على أنَّ الحيض مكتوب على بنات آدم فمن بعدهن من البنات، كما قال صلى الله عليه وآله وسلم، وهو من أصل خلقتهن الذي فيه صلاحُهُنَّ] اهـ.

تعريف الحيض، وأقل سن تحيض فيه المرأة
والحيض هو: سيلانُ دَمٍ طَبيعةً وجِبِلَّةً، يُلقيه الرحم في أوقات معلومة، اقتضاءً للطباع السليمة، تصير المرأة به بالغة، مع الصِّحَّة وَالسلَامة.

وذهب فقهاء المذاهب الأربعة إلى أن أقل سنِّ تحيض فيه المرأة هو التسع، كما في "المبسوط" للإمام السرخسي الحنفي (3/ 149، ط. دار المعرفة)، و"شرح مختصر خليل" للإمام الخرشي المالكي (1/ 204، ط. دار الفكر)، و"أسنى المطالب" للإمام زكريا الأنصاري الشافعي (1/ 99، ط. دار الكتاب الإسلامي)، و"الفروع" للإمام ابن مُفلح الحنبلي (1/ 362، ط. مؤسسة الرسالة، ومعه "تصحيح الفروع" لعلاء الدين المرداوي).

أقوال السادة الفقهاء في أكثر سن الحيض (سن اليأس)
اختلفوا في تحديد سن اليأس، فذهب الحنفية -في المختار- إلى أن أكثر سن الحيض وحد الإياس هو خمس وخمسون سنة، بشرط انقطاع الدم لمدة ستة أشهر في الأصح.

قال الإمام ابن عابدين الحنفي في "رد المحتار" (3/ 516، ط. دار الفكر) في بيان سن اليأس: [وحَدُّه خمس وخمسون سنة هو المختار، لكنه يشترط للحكم بالإياس في هذه المدة أن ينقطع الدم عنها مدة طويلة، وهي ستة أشهر في الأصح] اهـ.

واعتبر المالكية أن أقصى مدة للحيض هي سبعون سنة، وأن المرأة من سن الخمسين إلى السبعين تسأل النساء، فإن قلن حيض أو شككن فهو حيض، وإلا فلا، وما بين سن الثلاثة عشر والخمسين قطعًا حيض.

قال الإمام الصاوي في "حاشيته على الشرح الصغير" (1/ 208، ط. دار المعارف): [وتسأل النساء في بنت الخمسين إلى السبعين، فإن قلن: حيض، أو شككن، فحيض. كما يسألن في المراهقة، وهي بنت تسع إلى ثلاثة عشر. وأما ما بين الثلاثة عشر والخمسين فيقطع بأنه حيض] اهـ.

وأما الشافعية فلا حد لآخر سن الحيض عندهم، بل هو ممكن ما دامت المرأة حية، وإن حدوه باثنتين وستين سنة اعتبارًا بالغالب.

قال الإمام ابن حجر الهيتمي في "تحفة المحتاج" (1/ 384، ط. دار إحياء التراث العربي): [ولا حد لآخر سنه ولا ينافيه تحديد سن اليأس باثنتين وستين سنة؛ لأنه باعتبار الغالب حتى لا يعتبر النقص عنه] اهـ.

ويرى الحنابلة أن أكثر سن تحيض فيه المرأة هو خمسون سنة.

قال الإمام أبو منصور البهوتي الحنبلي في "كشاف القناع" (1/ 202، ط. دار الكتب العلمية): [(وأكثره) أي: أكثر سن تحيض فيه المرأة (خمسون سنة)؛ لقول عائشة: "إذا بلغت المرأة خمسين سنة خرجت من حد الحيض" ذكره أحمد. وقالت أيضًا: "لن ترى في بطنها ولدًا بعد الخمسين" رواه أبو إسحاق الشالنجي] اهـ.

فإذا انقطع دم الحيض ثم رأته المرأة بعد ذلك، فيرى الحنفية أن عود الدم الخالص يبطل الإياس على الصحيح، فيلغي اعتبار المرأة يائسة، ويكون النازل عليها حيضًا إذا عاد بنفس الصفة المعتادة، بأن كان دمًا قويًّا كالأسود والأحمر القاني، أما إذا كان صفرة أو خضرة أو تربية فلا يكون حيضًا.

قال الإمام أبو المعالي ابن مَازَةَ البخاري في "المحيط البرهاني" (13 /458-459، ط. دار الكتب العلمية): [قال الصدر الشهيد رحمه الله: والمختار خمسة وخمسون سنة، وعليه أكثر المشايخ، فإذا بلغت هذا المبلغ وانقطع دمها حكم بإياسها. فإن رأت الدم بعد ذلك هل يكون حيضًا على هذه الرواية؟ فقد اختلف المشايخ فيما بينهم. قال بعضهم: لا يكون حيضًا ولا يبطل به الاعتداد بالأشهر، ولا يظهر فساد الأنكحة، وقال بعضهم: يكون حيضًا ويبطل به الاعتداد بالأشهر؛ لأن الحكم بالإياس بعد خمس وخمسين سنة كان بالاجتهاد والحيض بالنص، فإذا رأت الدم فقد وجد النص بخلاف الاجتهاد فيبطل حكم الإياس الثابت بالاجتهاد، ولهذا قال هؤلاء المشايخ: الدم المرئي بعد هذه المدة إنما يكون حيضًا إذا كان أحمر أو أسود، أما إذا كان أخضر أو أصفر لا يكون حيضًا؛ لأن هذا المرئي ثبت حيضًا بالاجتهاد فلا يبطل حكم الإياس الثابت بالاجتهاد] اهـ.
وفصل المالكية المسألة حسب عمر المرأة، فإن كانت فيما دون الخمسين: فالدم العائد بعد الانقطاع حيض قطعًا، أما إذا كانت بين الخمسين والسبعين: فيرجع إلى النساء، فإن قلن: إنه حيض، فهو كذلك، وإلا فلا، أما بنات السبعين أو الثمانين: فالنازل عليهن ليس بحيض.

قال الإمام الخَرَشِيُّ في "شرحه لمختصر خليل" (4/ 142): [ودم من لم تبلغ خمسين حيض قطعًا] اهـ.

وقال الإمام أحمد الدردير في "الشرح الصغير" (1 /207-208): [(الحيض دم أو صفرة أو كدرة خرج بنفسه من قبل من تحمل عادة... خرج بنفسه... من قبل امرأة تحمل عادة): احترازًا مما خرج من الدبر فليس بحيض، ومما خرج من قبل صغيرة لم تبلغ تسع سنين أو كبيرة بلغت السبعين فليس بحيض قطعًا] اهـ.

قال الإمام الصاوي محشيًا: [قوله: (بلغت السبعين): أي: وتسأل النساء في بنت الخمسين إلى السبعين، فإن قلن: حيض، أو شككن، فحيض. كما يسألن في المراهقة، وهي بنت تسع إلى ثلاثة عشر. وأما ما بين الثلاثة عشر والخمسين فيقطع بأنه حيض] اهـ.

وذهب الشافعية إلى أن الدم العائد بعد الانقطاع حيض، إذ لا حد لسن اليأس عندهم.

قال شيخ الإسلام زكريا الأنصاري في "أسنى المطالب" (3/ 392): [(فإن حاضت الآيسة) التي تقدم لها حيض (في أثناء الأشهر انتقلت إلى الحيض) لما مر في الصغيرة ولتبين أنها ليست من الآيسات (وحسب ما مضى قرءا)؛ لأنه طهر احتوشه دمان فتضم إليه قرأين (وكذا) تنتقل إلى الحيض (بعد) تمام (العدة) بالأشهر (ما لم تتزوج) لتبين أنها ليست آيسة] اهـ.

وذهب الحنابلة -في الصحيح- إلى أن المرأة إذا انقطع عنها الحيض من غير سبب مرات، ثم عاد بعد سن الخمسين على العادة التي كانت تراه فيها قبل انقطاعه، فهو حيض.

قال الإمام المَرْدَاوِيُّ في "الإنصاف" (1/ 356، ط. دار إحياء التراث العربي): [والصحيح: أنه متى بلغت خمسين سنة فانقطع حيضها عن عادتها مرات لغير سبب: فقد صارت آيسة، وإن رأت الدم بعد الخمسين على العادة التي كانت تراه فيها، فهو حيض في الصحيح] اهـ.

حكم من انقطع حيضها ثم عاد بعد سن 56، وحكم صلاتها وصيامها
محصل أقوال المذاهب الأربعة أن الدم العائد للمرأة البالغة ستًّا وخمسين عامًا بعد انقطاعه حيض، شريطة التحقق من كونه كذلك، فعمد فقهاء الحنفية والحنابلة إلى وضع ضوابط وعلامات مميزة للدم العائد حتى يعتبر حيضًا، بينما أناط فقهاء المالكية الأمر بخبرة نساء أهل ذلك الزمان باعتبارهن العارفات ببواطن الأمور النسائية، أما فقهاء الشافعية فقد أطلقوا الحكم باعتباره حيضًا دون تفصيل، ومبنى هذه الأحكام على الاستقراء وتتبع أحوال النساء.

وأعلم الناس بأحوال النساء وتحديد نوع الدم النازل بهن في هذا الزمان هم أهل الطب المتخصصون في ذلك، فيرجع إليهم، متى تحيرت المرأة، ولم يكن الدم العائد على العادة المعروفة لديها، فإذا قرر الطبيب الثقة بأن الدم العائد بعد الانقطاع حيض: فهو كذلك، وإلا فلا.

ومتى اعتبر الدم العائد بعد الانقطاع حيضًا فإنه يترتب على ذلك أحكامه الشرعية الثابتة، فتسقط الصلاة عن المرأة، ويُحظر عليها الصوم، ويحرم وطئها.

الخلاصة
بناءً على ذلك وفي واقعة السؤال: فإن الدم النازل بالسائلة التي تجاوز عمرها السادسة والخمسين بعد عام من انقطاع الحيض عنها، واستمراره لخمسة أيام على العادة المعروفة لديها: حيض، ما لم يقرر أهل التخصص من الأطباء خلاف ذلك وأنه ليس حيضًا، وأنَّ نزوله إنما لأسبابٍ طبيَّة لا علاقة لها بالحيض، فحينئذ لا يكون حيضًا، ومتى حكم بأنها حائض سقطت عنها الصلاة، ويحرم عليها الصوم والوطء وسائر ما يحرم بالحيض، وإلا فلا.

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة أ. د/ نظير محمد عياد (فتوى رقم 8620 بتاريخ 22 أبريل 2025)",tags:["نساء","حيض","سن اليأس","نزيف","صلاة","صيام","استحاضة"]},{id:"surg_005_2025",category:Y.SURGERY,title:"التجميل باستخدام حقن البوتكس (Botox)",question:"ما حكم حقن البوتكس واستخدامه في أغراض التجميل والزينة؟ وما ضوابطه الشرعية؟",medical_context:"بوتكس، botox, botulinum toxin, BTX-A, Clostridium botulinum, cosmetic injection, wrinkles, forehead lines, crow’s feet, fillers, dermal filler, migraine, hyperhidrosis, spasm, cosmetic surgery, تجميل، تجاعيد، زينة، تدليس",ruling:`الجواب:
استخدام البوتكس في التداوي والعلاج -إن لم يلحق ضررًا بالمحَقُون- جائزٌ شرعًا، ولا حرج في استعماله من أجل تحسين الشكل والمظهر وإزالة التشوهات والأضرار النفسية والحسية الناتجة عن الأعمال الشاقة، أو التقدم في السن أو الأمراض المختلفة أو آثار الإعاقة ما دامت هذه التغييرات حاجية أو اقتضتها الأسباب العلاجية، والرجل كالمرأة في ذلك، شريطة ألا يتضمن ذلك تدليسًا؛ لأنه قد تقرر شرعًا أن تغيير الخِلْقَة بغرض التدليس والكذب والتغرير حرامٌ يأثم به فاعله. ويجوز للمرأة المتزوجة استخدامه في طلب الجمال والحسن إذا أذن لها زوجها وبعد مراجعة الطبيب المختص، بل هو مستحبٌّ في حقِّها ما دامت تبتغي من ذلك التجمل والتزين للزوج.

التفاصيل....
المحتويات

بيان مفهوم حقنة البوتكس وتصورها
حكم التجميل باستخدام حقن البوتكس
موقف مجمع الفقه الإسلامي من ذلك
الخلاصة
 

بيان مفهوم حقنة البوتكس وتصورها
كلمة البوتكس Botox هي اختصار من كلمتي (البوتولاينم توكسن Botulinum Toxin)، ومعناهما: مادة بروتينية طبيعية سُمِّية تستخرج من بكتريا (كولوستريديوم بوتولينم Clostridium Botulinum)، وهي نوع من البكتيريا اللَّاهوائية موجبة الجرام، وهذه المادة تنكسر إلى سبعة أنواع هي: (G، F، E، D، C، B، A).

والحقنُ بمادة البوتكس يُحدث شللًا مؤقتًا لعضلات الشخص المَحْقُون بها بحيث يصبح العصب عاجزًا عن إصدار أمره للعضلة التابعة له بالتقلص، فتبقى العضلة مسترخية فترة تصل إلى ستة أشهر تقريبًا، ثم تعود للحركة مجددًا وقد تم إزالة خطوط التجاعيد منها، ولا يتداخل تأثيرها مع حقن التعبئة أو ما يسمى بالفيلر fillers التي تستخدم لملء وتعبئة الشفاه أو الخدود أو الأرداف لزيادة الحجم.
والصورة الغالبة على استعمالات هذه المادة أنها تدخل في علاج الصداع النصفي وبعض أمراض المثانة وآلام الظهر وعِرْق النسا، وتشنجات الحنجرة والعضلات، والحد من كثرة التعرق في الراحتين والأخمصين والإبطين، وكثرة إفراز اللعاب والشقوق الشرجية، كما أنها يكثر استخدامها في إجراء عمليات التجميل غير الجراحية كتغيير شكل الحاجبين، وتحسين وتنعيم الخطوط الحركية في الوجه، سواء خطوط العبس أو ما حول العينين أو خطوط الجبين، أو خطوط المدخنين حول الشفاه، كما أنها تدخل في بعض العمليات الجراحية كمكمل مثل: عمليات شد الوجه، والتقشير.. إلخ. ينظر: "Ghamriny's Clinical Dermatology مرجع الغمريني للأمراض الجلدية" للدكتور محمد سعيد الغمريني (ص: 1714)، و"دليل الجراحة التجميلية" لكلير بنسون، ترجمة هتاف عبد الله (ص: 129ط. دار الفراشة، لبنان)، و"فن التجميل" للدكتور أنور دندشلي (ص: 88، ط. شعاع للنشر والعلوم، سوريا).

حكم التجميل باستخدام حقن البوتكس
من خلال هذا البيان لحقيقة حقن "البوتكس Botox" يظهر أن الأصل في استعماله -كدواء وعلاج على ضوء ما توصل إليه العلماء، وفي ظل المعارف والعلوم والمخترعات الحديثة في مجال الطب والعلاج- هو الجواز؛ لأن الأخذ بالعلاج والتداوي قد طلبه الشرع وندبه وحثَّ عليه؛ فَرَوى أبو داود والترمذي عن أسامةَ بنِ شَرِيكٍ رضي الله عنه قال: أتيت النبي صلى الله عليه وآله وسلم وأصحابه كأنما على رؤوسهم الطيرُ، فسَلَّمتُ ثم قعدتُ، فجاء الأعرابُ من هاهنا وهاهنا، فقالوا: يا رسول الله، أنتداوى؟ فقال: «تَداوَوا؛ فإنَّ اللهَ عز وجل لم يَضَع داءً إلا وَضَعَ له دَواءً غيرَ داءٍ واحِدٍ: الهَرَمُ» و "الهَرَمُ": الكِبَر، وهذا الحديث جاء فيه الحث على التداوي مطلقًا غير مُقَيَّدٍ بقَيد، والقاعدة أن: "المطلق يجري على إطلاقه حتى يَرِد ما يقيده".
قال الإمام الخَطَّابي في "معالم السنن" (4/ 217، ط. المطبعة العلمية بحلب): [في هذا الحديث إثبات الطبِّ والعلاجِ، وأن التداويَ مباحٌ غير مكروهٍ] اهـ.
وقال الإمام عز الدين بن عبد السلام في "قواعد الأحكام" (1/ 6، ط. دار الكتب العلمية): [إن الطبَّ كالشرع وُضِع لجلب مصالح السلامة والعافية، ولدرء مفاسد المعاطب والأسقام، ولدرء ما أمكن دَرْءُهُ من ذلك، ولجلب ما أمكن جلبه من ذلك] اهـ.

أما عن مجالاته العلاجية الشائعة فهي داخلة في أصل مطلوبية العلاج الذي سبق تقريره، ولا يُمنَع منها إلا ما كان ضرره راجحًا، بحيث تكون مفسدة استعمالهِ تفوق مفسدة تركه يقينًا أو بغلبة الظن، ومن القواعد الشرعية المقررة أنه "إذا تعارضت مفسدتانِ رُوعي أعظمهما ضررًا بارتكاب أخفِّهما"، وأن "الضرر لا يُزال بالضرر المساوي أو الأشد". انظر: "الأشباه والنظائر" للإمام السيوطي (ص: 86-87، ط. دار الكتب العلمية).
كما أن بعضها يدخل ضمن صور الجراحة التجميلية ومعانيها، وإن كان الحقن بمادة البوتكس يؤثر دون تدخلٍ جراحيٍ؛ فقد جاء في قرار مجمع الفقه الإسلامي الدولي رقم 173 (18/ 11) بشأن الجراحة التجميلية وأحكامها أن: [جراحة التجميل هي تلك الجراحة التي تُعْنَى بتحسين (تعديل) (شكل) جزء أو أجزاء من الجسم البشري الظاهرة، أو إعادة وظيفته إذا طرأ عليها خلل مؤثر] اهـ.

ومن المقرر شرعًا أنه: لا يجوز للشخص تغيير شيء في خلقته التي خلقه الله عليها بصورةٍ تنبئُ عن الاعتراض على قضائه وقدره؛ فهذا من فعل الشيطان، قال تعالى: ﴿وَلَآمُرَنَّهُمْ فَلَيُغَيِّرُنَّ خَلْقَ اللهِ﴾ [النساء: 119]، وروى الإمام البخاري في "صحيحه" عن علقمة قال: "لَعَنَ عَبْدُ اللهِ بن عمر رضى الله عنهما الْوَاشِمَاتِ وَالْمُتَنَمِّصَاتِ وَالْمُتَفَلِّجَاتِ لِلْحُسْنِ الْمُغَيِّرَاتِ خَلْقَ اللهِ، فَقَالَتْ أُمُّ يَعْقُوبَ: مَا هَذَا؟ قَالَ عَبْدُ اللهِ: وَمَا لِيَ لاَ أَلْعَنُ مَنْ لَعَنَ رَسُولُ اللهِ صلى الله عليه وآله وسلم، وَفِى كِتَابِ اللهِ. قَالَتْ: وَاللهِ لَقَدْ قَرَأْتُ مَا بَيْنَ اللَّوْحَيْنِ فَمَا وَجَدْتُهُ. قَالَ: وَاللهِ لَئِنْ قَرَأْتِيهِ لَقَدْ وَجَدْتِيهِ: ﴿وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانْتَهُوا﴾ [سورة الحشر: 7]".

ولكن يُستَثْنَى مِن ذلك ما يكون لسببٍ علاجيٍّ؛ كإزالة العيوب الخِلقية، وإزالة ما يحصل به الضَّرر والأذى: سواءٌ أكان ضررًا ماديًّا؛ كالألم والإعاقة وإعادة وظائف أعضاء الجسم لحالتها المعهودة وإصلاح العيوب الخِلْقية والطارئة، أم معنويًّا؛ كإزالة ما يكون من دمامة قد تسبب للشخص أذًى نفسيًّا أو عضويًّا، والرجل كالمرأة في ذلك؛ فمن القواعد المقررة في الشرع الشريف أن "الضرر يزال"؛ لقوله صلى الله عليه وآله وسلم: «لَا ضَرَرَ وَلَا ضِرَارَ» رواه الإمام أحمد وابن ماجه والحاكم وغيرهم وحسنه الإمام النووي.
قال الحافظ ابن حجر العسقلاني في "فتح الباري شرح صحيح البخاري" (10/ 377-378، ط. دار المعرفة): [(قال الطبري: لا يجوز للمرأة تغيير شيء من خلقتها التي خلقها الله عليها بزيادةٍ أو نقصٍ؛ التماسًا للحُسنِ لا للزوج ولا لغيره.. فكل ذلك داخل في النهي وهو من تغيير خلق الله تعالى). قال: (ويستثنى من ذلك ما يحصل به الضرر والأذيَّة.. فيجوز ذلك، والرجل في هذا الأخير كالمرأة)] اهـ.

وروى الإمام أحمد في "مسنده" عن مَسْرُوقٍ: "أَنَّ امْرَأَةً جَاءَتْ إِلَى ابْنِ مَسْعُودٍ رضي الله عنه فَقَالَتْ: أُنْبِئْتُ أَنَّكَ تَنْهَى عَنِ الْوَاصِلَةِ. قَالَ: نَعَمْ. فَقَالَتْ: أَشَيْءٌ تَجِدُهُ فِي كِتَابِ اللهِ أَمْ سَمِعْتَهُ مِنْ رَسُولِ اللهِ صلى الله عليه وآله وسلم؟ فَقَالَ: أَجِدُهُ فِي كِتَابِ اللهِ وَعَنْ رَسُولِ اللهِ صلى الله عليه وآله وسلم. فَقَالَتْ: وَاللهِ لَقَدْ تَصَفَّحْتُ مَا بَيْنَ دَفَّتَيِ الْمُصْحَفِ فَمَا وَجَدْتُ فِيهِ الَّذِى تَقُولُ. قَالَ: فَهَلْ وَجَدْتِ فِيهِ: ﴿وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانْتَهُوا﴾؟ قَالَتْ: نَعَمْ. قَالَ: فَإِنِّي سَمِعْتُ رَسُولَ اللهِ صلى الله عليه وسلم نَهَى عَنِ النَّامِصَةِ وَالْوَاشِرَةِ وَالْوَاصِلَةِ وَالْوَاشِمَةِ إِلَّا مِنْ دَاءٍ".
قال العلامة الشوكاني في "نيل الأوطار" (6/ 226، 229، ط. دار الحديث): [قوله: "إِلَّا مِنْ دَاءٍ" ظاهره أن التحريم المذكور إنما هو فيما إذا كان لقصد التحسين لا لداءٍ وعلةٍ، فإنه ليس بمحرم] اهـ.

وكما حثَّ الشرعُ الشريفُ المسلمَ على تحسين الخُلُق لصاحبه والرفق به واحتمال أذاه، فكذلك حثَّ على تحسين الخَلْق بالتجمُّل والتزيُّن، ويدخل في ذلك إزالةُ التجاعيد والتشوهات وتحسين المظهر أو إزالة ما يؤذي العين ويُنفِّرها؛ فقد سَنَّ رسول الله صلى الله عليه وآله وسلم للمسلم تنظيفَ بدنه وتجميلَه بإزالةِ جميع ما هو مظنَّة لأَذَى البدن وقد ينفر منه الآخرون؛ كتقليم الأظفار ونتف الإبط والاستحداد وغيرها؛ قال صلى الله عليه وآله وسلم فيما رواه الشيخان: «الْفِطْرَةُ خَمْسٌ: الْخِتَانُ، وَالِاسْتِحْدَادُ، وَتَقْلِيمُ الْأَظْفَارِ، وَنَتْفُ الْإِبِطِ، وَقَصُّ الشَّارِبِ».

وتتأكد مشروعيَّةُ إصلاح العيوب الخِلقية بالجراحات والإجراءات التجميلية لأجل تحسين الشكل والمنظر وإزالة التشوهات وعلاج الأضرار النفسية والحسيَّة بما رواه أبو داود في "سننه" عن عَبْدِ الرَّحْمَنِ بْنِ طَرَفَةَ رضي الله عنه: "أَنَّ جَدَّهُ عَرْفَجَةَ بْنَ أَسْعَدَ قُطِعَ أَنْفُهُ يَوْمَ الْكُلَابِ فَاتَّخَذَ أَنْفًا مِنْ وَرِقٍ فَأَنْتَنَ عَلَيْهِ فَأَمَرَهُ النَّبِيُّ صلى الله عليه وآله وسلم فَاتَّخَذَ أَنْفًا مِنْ ذَهَبٍ».

ومن المعلوم أنَّ الشَّرع الشريف راعى حاجيات النساء في التجمُّل والزينة؛ فرخَّصَ للزوجة الكُحل والخِضاب وأخذ الزائد من شعر الحاجبين بالحفِّ أو الحَلق إذا كان خارجًا عن الحدِّ المألوفِ، أو مما يؤذِي العينَ أو مما يُنفِّر الزوج عن زوجته إذا لم تُهذِّبْه؛ لأنه ينبغي على المرأةِ أن تزيل ما في إزالته جمالٌ لها، فقد أجاز متأخِّرو الحنفية والمالكية والشافعية والحنابلة في قولٍ: لها أن تفعل ذلك بإذن الزوج؛ لأنه من باب المعاشرة بالمعروف.

كما أجاز الفقهاء للمرأة أن تختار أنواعًا مخصوصة من الأكل أو التداوي؛ قصدًا إلى التجمُّل والحسن خاصة إذا كان للزوج؛ حيث نقل الإمام برهان الدين ابن مازة الحنفي في "المحيط البرهاني" (5/ 373، ط. دار الكتب العلمية) عن "فتاوى أهل سمرقند": [إن كانت تسمن نفسها لزوجها لا بأس به؛ لأن هذا فعل مباح لقصد المباح] اهـ.
وجاء في "الفتاوى الهندية" (5/ 355-356، ط. دار الفكر): [وسئل أبو مطيع عن امرأة تأكل القبقبة وأشباه ذلك تلتمس السمن قال: لا بأس به ما لم تأكل فوق الشبع وإذا أكلت فوق الشبع لا يحل لها، كذا في الحاوي للفتاوي. والمرأة إذا كانت تسمن نفسها لزوجها لا بأس به ويكره للرجل ذلك، كذا في الظهيرية] اهـ.
وقال العلَّامَة داماد أفندي في "مجمع الأنهر" (2/ 555، ط. دار إحياء التراث العربي): [(و) تجوز (الحقنة للرجال والنساء)؛ للتداوي بالإجماع أو لأجل الهزال إذا فحش يفضي إلى السُّل] اهـ.
وقال الحافظ ابن حجر في "فتح الباري شرح صحيح البخاري" (10/ 378، ط. دار المعرفة): [وقال الإمام النووي: يستثنى من النماص ما إذا نبت للمرأة لحية أو شارب أو عنفقة فلا يحرم عليها إزالتها، بل يستحب.
قلت: وإطلاقه مقيد بإذن الزوج وعلمه، وإلا فمتى خلا عن ذلك مُنِعَ؛ للتدليس.
وقال بعض الحنابلة: إن كان النَّمص أشهر شعارًا للفواجر امتنع وإلا فيكون تنزيهًا، وفي روايةٍ: يجوز بإذن الزوج، إلا إن وقع به تدليس فَيَحرُم.
قالوا: ويجوز الحفُّ والتحميرُ والنقشُ والتطريفُ إذا كان بإذن الزوج؛ لأنه من الزينة؛ وقد أخرج الطبري من طريق أبي إسحاق عن امرأته أنها دخلت على عائشة رضي الله عنها وكانت شابة يعجبها الجمال، فقالت: "المرأةُ تُحفُّ جبينَها لزوجها؟ فقالت: أميطي عنك الأذى ما استطعت".
وقال النووي: يجوز التزين بما ذكر إلا الحف فإنه من جملة النَّماص] اهـ.
وقال العلَّامة الشَّوكاني في "نيل الأوطار شرح منتقى الأخبار" (6/ 229-230، ط. دار الحديث): [وعن عائشة قالت: كَانَتْ امْرَأَةُ عُثْمَانَ بْنِ مَظْعُونٍ تَتَخَضَّبُ وَتَتَطَيَّبُ، فَتَرَكَتْهُ فَدَخَلَتْ عَلَيَّ، فَقُلْتُ: أَمُشْهِدٌ أَمْ مُغِيبٌ؟ فَقَالَتْ: مُشْهِدٌ، قَالَتْ: عُثْمَانُ لَا يُرِيدُ الدُّنْيَا وَلَا يُرِيدُ النِّسَاءَ، قَالَتْ عَائِشَةُ: فَدَخَلَ عَلَيَّ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَآله وسَلَّمَ فَأَخْبَرْتُهُ بِذَلِكَ، فَلَقِيَ عُثْمَانَ فَقَالَ: «يَا عُثْمَانُ تُؤْمِنُ بِمَا نُؤْمِنُ بِهِ»؟ قَالَ: نَعَمْ يَا رَسُولَ اللهِ، قَالَ: «فَأُسْوَةٌ مَا لَك بِنَا».. "أَمُشْهِدٌ أَمْ مُغِيبٌ" أي: أزوجُكِ شاهدٌ أم غائبٌ؟ والمراد: أن ترك الخضاب والطيب إن كان لأجل غيبة الزوج فذاك، وإن كان لأمرٍ آخر مع حضوره فما هو؟ فأخبرتها أن زوجها لا حاجة له بالنساء، فهي في حكم من لا زوج لها، واستنكار عائشة عليها ترك الخضاب والطيب يشعِر بأنَّ ذوات الأزواج يحسنُ منهنَّ التزيُّن للأزواج بذلك] اهـ.

موقف مجمع الفقه الإسلامي من ذلك
هذا، وقد بيَّن الحالات المشروعة وغير المشروعة وضوابط ذلك مجمع الفقه الإسلامي الدولي في قراره رقم 173 (18/ 11) المنبثق عن دورته الثامنة عشرة بماليزيا في الفترة من 24 إلى 29 جمادى الآخرة عام 1429هـ الموافق 9- 14 يوليو عام 2007م بشأن الجراحة التجميلية وأحكامها؛ حيث جاء نصُّه كالتالي:
[(1) يجوز شرعًا إجراء الجراحة التجميلية الضرورية والحاجية التي يقصد منها:
(أ) إعادة شكل أعضاء الجسم إلى الحالة التي خلق الإنسان عليها؛ لقوله سبحانه: ﴿لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ﴾[العلق: 4].
(ب) إعادة الوظيفة المعهودة لأعضاء الجسم.
(ج) إصلاحُ العيوب الخِلقية مثل: الشفة المشقوقة -الأرنبية- واعوجاج الأنف الشديد والوحمات، والزائد من الأصابع والأسنان والتصاق الأصابع إذا أدَّى وجودها إلى أذىً ماديٍّ أو معنويٍّ مؤثِّر.
(د) إصلاحُ العيوب الطارئة -المكتسبة- من آثار الحروق والحوادث والأمراض وغيرها مثل: زراعة الجلد وترقيعه، وإعادة تشكيل الثدي كليًّا حالة استئصاله، أو جزئيًّا إذا كان حجمه من الكِبر أو الصغر بحيث يؤدي إلى حالة مرضيَّة، وزراعة الشعر حالة سقوطه خاصة للمرأة.
(هـ) إزالة دمامة تُسبب للشخص أذىً نفسيًّا أو عضويًّا. (قرار المجمع 26 (4/ 1)).
(2) لا يجوز إجراء جراحة التجميل التحسينية التي لا تدخل في العلاج الطبي، ويقصد منها تغيير خلقة الإنسان السوية تبعًا للهوى والرغبات بالتقليد للآخرين مثل عمليات تغيير شكل الوجه للظهور بمظهرٍ معينٍ أو بقصدِ التدليس وتضليل العدالة وتغيير شكل الأنف وتكبير أو تصغير الشفاه وتغيير شكل العينين وتكبير الوجنات.
(3) يجوز تقليل الوزن -التنحيف- بالوسائل العلميَّة المعتمدة ومنها الجراحة -شفط الدهون- إذا كان الوزن يشكل حالة مرضية، ولم تكن هناك وسيلة غير الجراحة بشرط أمن الضرر.
(4) لا يجوز إزالة التجاعيد بالجراحة أو الحقن ما لم تكن حالة مَرَضِية شريطة أمن الضرر] اهـ.

الخلاصة
على ذلك: فاستخدام البوتكس في التداوي والعلاج -إن لم يلحق ضررًا بالمحَقُون- جائزٌ شرعًا، ولا حرج في استعماله من أجل تحسين الشكل والمظهر وإزالة التشوهات والأضرار النفسية والحسية الناتجة عن الأعمال الشاقة، أو التقدم في السن أو الأمراض المختلفة أو آثار الإعاقة ما دام أن هذه التغييرات حاجية أو اقتضتها الأسباب العلاجية، والرجل كالمرأة في ذلك، شريطة ألا يتضمن ذلك تدليسًا كتضليل العدالة مثلًا؛ لأنه قد تقرر شرعًا أن تغيير الخِلْقَة بغرض التدليس والكذب والتغرير حرامٌ يأثم به فاعله.
ويجوز للمرأة المتزوجة استخدامه في طلب الجمال والحسن إذا أذن لها زوجها وبعد مراجعة الطبيب المختص، بل هو مستحبٌّ في حقِّها ما دامت تبتغي من ذلك التجمل والتزين للزوج.

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 4215 بتاريخ 27 ديسمبر 2017)",tags:["تجميل","بوتكس","حقن","زينة","تداوي","تدليس","جلدية"]},{id:"ethics_009_2025",category:Y.ETHICS,title:"حكم ترقيع الجلد التالف للإنسان الحي بجلد الميت",question:"ما حكم ترقيع الجلد التالف للإنسان الحي بجلد الميت عند الضرورة الطبية وتعذر أخذ الجلد من المصاب؟",medical_context:"skin graft, cadaver skin, grafting, burns, third-degree burn, tissue donation, transplantation, burn wound coverage",ruling:`الجواب:
لا مانع شرعًا من إجراء عملية زراعة وترقيع الجلد عن طريق الانتفاع بجلد الإنسان الميت إذا كانت هناك ضرورة داعية لذلك، مع مراعاة أن يكون ذلك بعيدًا عن البيع والشراء والتجارة بأيِّ حالٍ، كما يشترط وجوب مراعاة الضوابط الشرعية والقانونية الضابطة لعملية نقل الأعضاء والأنسجة الآدمية من الميت إلى الحي.

كما توصي دار الإفتاء المصرية في هذا الشأن بالآتي:

أ- ضرورة أن يكون النقل بمركز طبي متخصص معتمد من الدولة ومرخص له بذلك مباشرة بدون أيِّ مقابل مادي بين أطراف النقل.

ب- ضرورة ألَّا يؤخذ من جسد الميت إلَّا بقدر الحاجة؛ إذ إن ما أبيح للضرورة فإنما يقدر بقدرها، مع ترميم مظهر جسد الميت بعد نزع النسيج الجلدي منه، وتكفينه بما يناسب لذلك مرة أخرى.

ج- اتخاذ كافة الإجراءات والضوابط التي تُبْعِدُ هذه العمليةَ مِن نِطَاقِ التَّلَاعُبِ بالإنسان ومن دائرة الإتجار بالأعضاء والأنسجة الآدمية، ولا تُحَوِّلُهُ إلى قِطَعِ غِيَارٍ تُباعُ وتُشتَرَى، بل يَكونُ المَقصِدُ منها التعاونَ على البِرِّ والتقوى، وهذا لا يكون إلا في التبرع، وليس البيع وما في معناه.

التفاصيل....
المحتويات

حفظ النفس من مقاصد الشريعة الإسلامية
بيان مفهوم عملية ترقيع الجروح
حكم ترقيع الجلد التالف للإنسان الحي بجلد الميت، ونصوص الفقهاء في هذه المسألة
نصوص المذاهب الفقهية في تغليب حياة الحي على حرمة الميت عند الاضطرار
موقف القانون من نقل الأعضاء والأنسجة البشرية
ضوابط نقل الأعضاء والأنسجة الآدمية من الميت إلى الحي
الخلاصة
 

حفظ النفس من مقاصد الشريعة الإسلامية
مِن المقاصد الشرعية التي أولاها الإسلامُ أهمية خاصة: حفظُ النفس وصَوْنُها عن كلِّ ما يَلحق بها مِن أذًى، فأمر لأجل ذلك باتخاذ كافة الوسائل التي تحقق ذلك المقصد، والتي منها الوقاية مِن الأمراض قبل حصولها، والمسارعة إلى العلاج والتداوي منها إذا ما أصيب الإنسان بها، فهو مأمورٌ باتخاذ كـلِّ الوسائل التي تحافظ على نفسه وحياته وصحته وتمنع عنه الأذى والضرر، ومِـن هـذه الوسائل التداوي، ومن وسائل التداوي التي تَوَصَّلَ إليها الطب: ترقيع الجلد في حال إصابة جلد المريض بالتهتكِ أو التشوهِ بسبب حادث أو مرض.

بيان مفهوم عملية ترقيع الجروح
والترقيع في اللغة: مأخوذ من الفعل الثلاثي "رَقَعَ" وتتلخص معانيه حول: سد الخلل في الشيء؛ كما قال العلامة ابن فارس في "مقاييس اللغة" (2/ 429، ط. دار الفكر).

ويطلق "ترقيع الجروح" فِي الطِّبِّ على العملية الجراحية التي تُغطَّى فِيهَا القرحة أَو مَكَانهَا بعد إِزَالَتهَا بِقِطْعَة من جلد صَاحبهَا أو غيره؛ كما أفاده "المعجم الوسيط" (1/ 365، ط. دار الدعوة).

وتتم هذه العملية فيما يخص الانتفاع بجلد الآدمي: إما بأخذ رقعة من جلد المصاب نفسه من منطقة مستترة في جسده كالفخذين أو الظهر، وذلك إذا كانت مساحة الإصابة ما بين 30- 50% من مساحة الجسم، وتسمى حينئذٍ بـ"الترقيع الذاتي"، وإما بأخذ رقعة من جسد إنسان آخر، وذلك إذا كانت المساحة المصابة كبيرة يتعذر معالجتها من جسد الإنسان نفسه؛ بحيث لا يوجد جلد سليم في جسده كافٍ لذلك، وتسمَّى حينئذٍ بـ"الترقيع المتباين". ينظر: "الدليل المبسط لآباء وأقارب الأطفال المصابين بالحروق بالمشفى" لأدلهايد جوتفالد (ص: 7-8، نشر عام 2018م).

حكم ترقيع الجلد التالف للإنسان الحي بجلد الميت، ونصوص الفقهاء في هذه المسألة
الناظر في خصوص مسألة أخذ جزء من جلد الإنسان الميت من أجل مداوة الإنسان الحي، يجد أنها تتردد بين أمرين لا بد من مراعاتهما:

الأمر الأول: أن الشرع الشريف قد كرَّم الإنسان حيًّا وميتًا؛ حيث قال تعالى: ﴿وَلَقَدْ كَرَّمْنَا بَنِي آدَم﴾ [الإسراء: 70]، ومن تكريم الإنسان حال وفاته: الحفاظ له على جسده وإكرامه وصيانته عن كلِّ ما يتضرر به أو يؤذيه كما لو كان حيًّا.

فعن أم المؤمنين السيدة عائشة رضي الله عنها أنها قالت: قال صلى الله عليه وآله وسلم: «إِنَّ كَسْرَ عَظْمِ الْمُؤْمِنِ مَيْتًا، مِثْلُ كَسْرِهِ حَيًّا» أخرجه الإمام أحمد في "المسند".

قال العلامة أبو الوليد الباجي في "المنتقى شرح الموطأ" (2/ 30، ط. مطبعة السعادة): [قولها: "كسر عظم المسلم مَيْتًا ككسره وهو حي" يريد أن له من الحرمة في حال موته مثل ما له منها حال حياته، وأن كسر عظامه في حال موته يحرم كما يحرم كسرها حال حياته] اهـ.

وجاء عن ابن عباس رضي الله عنهما أنه قال في جنازة ميمونة زوج النبي صلى الله عليه وآله وسلم: "هَذِهِ زَوْجُ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وآله وَسَلَّمَ، فَإِذَا رَفَعْتُمْ نَعْشَهَا، فَلَا تُزَعْزِعُوا، وَلَا تُزَلْزِلُوا، وَارْفُقُوا" أخرجه الشيخان.

قال العلامة القَسْطَلَّانِي في "إرشاد الساري" (8/ 7، ط. الأميرية): [(ولا تزلزلوها)؛ أي: لا تحركوها حركة شديدة، بل سيروا بها سيرًا وسطًا معتدلًا، فإن حرمتها بعد موتها باقية كحرمتها في حياتها. وللحموي: فلا تزعجوها بدل تزعزعوها (وارفقوا)؛ أي: بها] اهـ.

فإذا كانت نصوص الشرع قد أفادت أن زعزعة نعش الميت أو كسر عظمه، هو ممَّا يتنافى مع ما أثبته الله له من حرمة وتكريم؛ لما فيه من تأذي الميت بذلك لو كان حيًّا، وكان انتزاع جلد الإنسان عن جسده هو ممَّا يؤذيه قطعًا، فلا شك حينئذٍ أن ذلك الفعل يتنافى مع ما له من حرمة وتكريم، وذلك هو الأصل الذي يتحتم رعايته وإعماله إلا أن تكون هناك ضرورة داعية إلى خلاف ذلك.

وقد تواردت نصوص الفقهاء على أنه يلزم عما ثبت للإنسان من حرمة وكرامة؛ امتناع الانتفاع بأيِّ جزءٍ من أجزائه، سواء كان حيًّا أو ميتًا.

قال العلامة الكاساني الحنفي في "بدائع الصنائع" (5/ 125، ط. دار الكتب العلمية): [الآدمي بجميع أجزائه مكرم، والانتفاع بالجزء المنفصل منه إهانة له] اهـ.

وقال العلامة الزيلعي الحنفي في "تبيين الحقائق" (1/ 26، ط. الأميرية): [وأما الآدمي فلحرمته.. لا يجوز الانتفاع به كسائر أجزائه] اهـ.

وقال شيخ الإسلام زكريا الأنصاري الشافعي في "أسنى المطالب" (1/ 173، ط. دار الكتاب الإسلامي): [يَحْرُمُ الانتفاع به وبسائر أجزاء الآدمي لكرامته] اهـ.

وقال العلامة البهوتي الحنبلي في "كشاف القناع" (1/ 64، ط. دار الكتب العلمية): [(ولا يجوز استعمال شعر الآدمي) مع الحكم بطهارته (لحرمته) أي: احترامه، قال تعالى: ﴿وَلَقَدْ كَرَّمْنَا بَنِي آدَم﴾ [الإسراء: 70]، وكذا عظمه وسائر أجزائه] اهـ.

الأمر الثاني: أن الله تعالى أمر بالحفاظ على النفس من التهلكة؛ قال تعالى: ﴿وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَة﴾ [البقرة: 195]، ولا يتحقق ذلك في حال الإصابة بالأمراض، إلا بالتداوي بالوسيلة التي يرتفع بها ذلك المرض والتي يقررها الطبيب المختص، وذلك لما في حديث أسامةَ بنِ شَرِيكٍ رضي الله عنه قال: أَتَيْتُ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وآله وَسَلَّمَ، وَأَصْحَابُهُ عِنْدَهُ كَأَنَّمَا عَلَى رُءُوسِهِمُ الطَّيْرُ، قَالَ: فَسَلَّمْتُ عَلَيْهِ، وَقَعَدْتُ، قَالَ: فَجَاءَتِ الْأَعْرَابُ، فَسَأَلُوهُ فَقَالُوا: يَا رَسُولَ اللَّهِ، نَتَدَاوَى؟ قَالَ: «نَعَمْ، تَدَاوَوْا، فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً غَيْرَ دَاءٍ وَاحِدٍ الْهَرَمُ» والهَرَمُ: الكِبَرُ- أخرجه الإمام أحمد في "المسند".

والإبقاء على مساحات كبيرة من جلد الإنسان متهتكة ومشوهة -كما في مسألتنا- من الأمور الخطيرة التي قد تؤدي أحيانًا إلى هلاك الإنسان؛ خاصة أنه يظهر من الصفات المذكورة في السؤال أن الإصابة من الدرجة الثالثة التي تجاوزت فيها الإصابة من الطبقة الظاهرة للجلد إلى الطبقة الداخلية الملتصقة بالأوعية أو العضلات الداخلية، أو إلى التشويه المُنفِّر الناتج في حالة قضاء الحرق على كلِّ سماكة الجلد المصاب حتى وصل إلى العظام -كما جاء في السؤال-.

وبحسب ما ورد في "التقرير السنوي لحوادث الحرائق في عام 2022م" الصادر عن الجهاز المركزي للتعبئة والإحصاء في فبراير 2023م فقد وصلت حالات الوفيات إلى نحو 210 آلاف حالة وفاةٍ تقريبًا، وبلغت الإصابات 886 ألف إصابة تقريبًا.

ويظهر من ذلك مشروعية اتخاذ الوسائل الطبية الممكنة التي تحمي هذا المريض وتمنع من انتشار الميكروبات في منطقة الحَرْق المكشوفة، والوقاية عما ينشأ عن ذلك من مضاعفات، مع التقليل من فقدان السوائل والبروتين التي تزداد نسبة فقدها عندما تكبر مساحة الجسم التي أصابها الحَرْق مما قد يؤدي إلى حدوث وفيات، مع مساعدة جسم المريض المصاب في سرعة اندمال جروحه، ومنع حدوث تشوهات به، ومن ثَمَّ فإذا تعينت الوسيلة الطبية بنقل أجزاء من جلد إنسان آخر ميت إليه فقد تعارضت بذلك مفسدتان: الأولى: مفسدة إهلاك أو تضرر إنسان حي، والثانية: مفسدة حرمة إنسان ميت والحفاظ على جسده مصانًا دون أي مساس به.

وقد تقرر في القواعد الفقهية أنه إذا تعارضت مفسدتان روعي أعظمهما ضررًا بارتكاب أخفهما، كما في "الأشباه والنظائر" للإمام السيوطي (ص: 87، ط. دار الكتب العلمية).

والضرورة المتحققة في مثل هذه الحالة تقتضي تغليب مصلحة الحي وحياته المتحققة على مصلحة الميت؛ وقد قال تعالى: ﴿فَمَنِ اضْطُرَّ غَيْرَ بَاغٍ وَلَا عَادٍ فَلَا إِثْمَ عَلَيْه﴾ [البقرة: 137]، ولما تقرر من أن "الضَّرُورَاتِ تُبِيحُ الْمَحْظُورَاتِ"، كما في "الفروق" للإمام القرافي (4/ 146، ط. عالم الكتب)، مع كون الضرورة الطبية المتحتمة إلى التداوي بأجزاء من جسد الإنسان الميت، من أجل إحياء أو معالجة أخيه الإنسان لا تُعَدُّ في الحقيقة امتهانًا لحرمته أو مساسًا بكرامته؛ حيث تتوقف عليه حياة غيره أو مداواتهم، مع ما في ذلك من استمرار وصول ثواب الانتفاع بذلك الجزء من جسده إليه طول مدة حياة المنقول له.

نصوص المذاهب الفقهية في تغليب حياة الحي على حرمة الميت عند الاضطرار
تغليب حياة الحي على حرمة الميت هو ما قرره الفقهاء فيما أشبه ذلك من فروع؛ حيث نصوا على أنه إذا ماتت امرأة وهي حامل، شق بطنها لإخراج الجنين إن غلب على الظن حياته، وكذلك إن خيف على حياتها من استمرار حمله، كان تغليب حياتها أولى.

قال العلامة ابن مودود الموصلي في "الاختيار لتعليل المختار" (4/ 167، ط. مطبعة الحلبي): [امرأة ماتت وهي حامل فاضطرب الولد في بطنها، فإن كان أكبرُ الرأي أنه حي يشق بطنها من الجانب الأيسر، لأنه تسبيب إلى إحياء نفس محترمة] اهـ.

وقال الشيخ عِلِيش المالكي في "منح الجليل شرح مختصر خليل" (1/ 531، ط. دار الفكر): [(لا) تبقر بطن ميتة عن (جنين) حي رجي لإخراجه؛ لأن سلامته مشكوكة فلا تنتهك حرمتها له] اهـ. مما يفهم منه أنه إن كانت سلامته غير مشكوك فيها جاز شق بطنها لأجل إخراجه.

وقال العلامة الشربيني الشافعي في "مغني المحتاج" (6/ 160، ط. دار الكتب العلمية): [لأن حرمة الحي أعظم من حرمة الميت] اهـ. فإذا توقفت حياة الحي على جزء من الميت، روعيت حياة الحي.

وقال الشيخ سليمان الجمل الشافعي في "حاشيته على شرح المنهج" (2/ 211، ط. دار الفكر): [لو دفنت امرأة حامل بجنين ترجى حياته بأن يكون له ستة أشهر فأكثر فيشق جوفها ويخرج إذ شقه لازم قبل دفنها أيضًا، فإن لم ترج حياته فلا] اهـ.

وقال العلامة ابن مُفْلِح الحنبلي في "المبدع في شرح المقنع" (2/ 280، ط. دار الكتب العلمية): [(ويحتمل أن يشق بطنها إذا غلب على الظن أنه يحيا)؛ لأنه تعارض حقاهما، فقدم حق الحي لكون حرمته أولى] اهـ.

ويفهم من ذلك: أن ما قد نقل عن الفقهاء من حرمة الانتفاع بأجزاء الآدمي؛ إنما محله في حالة السعة والاختيار، لا في حالة وقوع التهلكة أو الاضطرار.

موقف القانون من نقل الأعضاء والأنسجة البشرية
ما قررته المادة (2- الفقرة الأولى) من القانون المصري رقم 5 لسنة 2010م بشأن تنظيم زرع الأعضاء والأنسجة البشرية: [لا يجوز نقل أيِّ عضوٍ أو جزء من عضوٍ أو نسيج من جسم إنسان حي بقصد زرعه في جسم إنسان آخر إلا لضرورة تقتضيها المحافظة على حياة المتلقي أو علاجه من مرض جسيم، وبشرط أن يكون النقل هو الوسيلة الوحيدة لمواجهة هذه الضرورة وألَّا يكون من شأن النقل تعريض المتبرع لخطر جسيم على حياته أو صحته] اهـ.

ضوابط نقل الأعضاء والأنسجة الآدمية من الميت إلى الحي
هذا الترخيص والجواز الذي قررناه يشترط فيه أن يكون بعيدًا عن البيع والشراء والتجارة بأيِّ حالٍ، كما يشترط وجوب مراعاة الضوابط الشرعية والقانونية الضابطة لعملية نقل الأعضاء والأنسجة الآدمية من الميت إلى الحي.

كما توصي دار الإفتاء المصرية في هذا الشأن بالآتي:

أ- ضرورة أن يكون النقل بمركز طبي متخصص معتمد من الدولة ومرخص له بذلك مباشرة بدون أيِّ مقابل مادي بين أطراف النقل.

ب- ضرورة ألَّا يؤخذ من جسد الميت إلَّا بقدر الحاجة؛ إذ إن ما أبيح للضرورة فإنما يقدر بقدرها، كما قال الإمام السيوطي في "الأشباه والنظائر" (ص: 84، ط. دار الكتب العلمية)، مع ترميم مظهر جسد الميت بعد نزع النسيج الجلدي منه، وتكفينه بما يناسب لذلك مرة أخرى.

ج- اتخاذ كافة الإجراءات والضوابط التي تُبْعِدُ هذه العمليةَ مِن نِطَاقِ التَّلَاعُبِ بالإنسان ومن دائرة الإتجار بالأعضاء والأنسجة الآدمية، ولا تُحَوِّلُهُ إلى قِطَعِ غِيَارٍ تُباعُ وتُشتَرَى، بل يَكونُ المَقصِدُ منها التعاونَ على البِرِّ والتقوى، وهذا لا يكون إلا في التبرع، وليس البيع وما في معناه.

الخلاصة
بناء على ذلك وفي واقعة السؤال: فلا مانع شرعًا من إجراء عملية زراعة وترقيع الجلد عن طريق الانتفاع بجلد الإنسان الميت إذا كانت هناك ضرورة داعية لذلك، مع مراعاة الضوابط والشروط المقررة سابقًا، وطبقًا للمعايير الطبية وما تقرره القوانين واللوائح المنظمة لهذا الشأن.
والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية — فتوى رقم 7790 — 26 يوليو 2023م — أ.د/ شوقي إبراهيم علام",tags:["ترقيع الجلد","جلد الميت","زراعة الأنسجة","التداوي","الضرورة","التبرع","بيع الأعضاء","الحروق"]}],b2=({fatwa:a,onClose:i})=>{const[r,o]=ve.useState(!1),[f,g]=ve.useState(!1),p=T=>{navigator.clipboard.writeText(T),o(!0),setTimeout(()=>o(!1),2e3)},w=()=>{const T=`📌 ${a.title}

❓ السؤال:
${a.question}

${a.medical_context?`🏥 السياق الطبي:
${a.medical_context}

`:""}✅ الحكم الشرعي:
${a.ruling}

📋 الحكم النهائي: ${a.verdict==="PERMITTED"?"جائز ✓":a.verdict==="FORBIDDEN"?"محرم ✗":"مشروط ◎"}

📚 المصدر: ${a.source}`;p(T)},x=T=>{const P=`${a.title} - الطبيب الفقيه`,j=window.location.href,B={twitter:`https://twitter.com/intent/tweet?text=${encodeURIComponent(P)}&url=${encodeURIComponent(j)}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(j)}`,whatsapp:`https://wa.me/?text=${encodeURIComponent(P+`
`+j)}`,telegram:`https://t.me/share/url?url=${encodeURIComponent(j)}&text=${encodeURIComponent(P)}`};B[T]&&window.open(B[T],"_blank","width=600,height=400")};return y.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 overflow-y-auto flex items-center justify-center p-4",children:y.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-3xl my-8",children:[y.jsxs("div",{className:"px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-teal-50 to-blue-50",children:[y.jsx("button",{onClick:i,className:"text-gray-500 hover:text-gray-700 text-2xl font-bold hover:bg-gray-100 p-2 rounded-lg transition",children:y.jsx(y0,{size:24})}),y.jsx("h2",{className:"text-sm font-bold text-teal-700 flex-1 text-center px-4 line-clamp-2",children:a.source}),y.jsx("div",{className:"w-10"})]}),y.jsxs("div",{className:"p-6 space-y-6 max-h-[70vh] overflow-y-auto",children:[y.jsx("div",{className:"border-r-4 border-teal-600 pr-4",children:y.jsx("h3",{className:"font-bold text-2xl font-amiri leading-snug text-gray-900",children:a.title})}),y.jsxs("div",{className:"bg-amber-50 rounded-lg border-2 border-amber-300 overflow-hidden",children:[y.jsxs("div",{className:"bg-amber-200 px-4 py-2 flex items-center gap-2",children:[y.jsx("span",{className:"text-2xl",children:"❓"}),y.jsx("h4",{className:"text-sm font-bold text-amber-900",children:"السؤال"})]}),y.jsx("div",{className:"p-5",children:y.jsx("p",{className:"text-base text-amber-950 leading-8 whitespace-pre-wrap",children:a.question})}),y.jsxs("button",{onClick:()=>p(a.question),className:"w-full py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-semibold flex items-center justify-center gap-2 transition",children:[y.jsx(gl,{size:14}),r?"تم النسخ!":"نسخ السؤال"]})]}),a.medical_context&&y.jsxs("div",{className:"bg-blue-50 rounded-lg border-2 border-blue-300 overflow-hidden",children:[y.jsxs("div",{className:"bg-blue-200 px-4 py-2 flex items-center gap-2",children:[y.jsx("span",{className:"text-2xl",children:"🏥"}),y.jsx("h4",{className:"text-sm font-bold text-blue-900",children:"السياق الطبي (الكلمات المفتاحية)"})]}),y.jsx("div",{className:"p-5",children:y.jsx("p",{className:"text-xs text-blue-950 leading-6 font-mono whitespace-pre-wrap",children:a.medical_context})}),y.jsxs("button",{onClick:()=>p(a.medical_context),className:"w-full py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold flex items-center justify-center gap-2 transition",children:[y.jsx(gl,{size:14}),"نسخ الكلمات المفتاحية"]})]}),y.jsxs("div",{className:"bg-green-50 rounded-lg border-l-4 border-green-600 overflow-hidden",children:[y.jsxs("div",{className:"bg-green-100 px-4 py-2 flex items-center gap-2",children:[y.jsx("span",{className:"text-2xl",children:"✅"}),y.jsx("h4",{className:"text-sm font-bold text-green-900",children:"الحكم الشرعي والتفصيل"})]}),y.jsx("div",{className:"p-5",children:y.jsx("p",{className:"text-base leading-8 whitespace-pre-wrap text-gray-800 font-medium",children:a.ruling})}),y.jsxs("button",{onClick:()=>p(a.ruling),className:"w-full py-2 bg-green-100 hover:bg-green-200 text-green-800 text-xs font-semibold flex items-center justify-center gap-2 transition",children:[y.jsx(gl,{size:14}),"نسخ الحكم الشرعي"]})]}),y.jsx("div",{className:"flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-300",children:y.jsxs("div",{children:[y.jsx("p",{className:"text-xs font-bold text-gray-600 mb-2",children:"الحكم النهائي:"}),y.jsxs("span",{className:`text-sm font-bold px-4 py-2 rounded-full inline-block ${a.verdict==="PERMITTED"?"bg-green-100 text-green-800":a.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[a.verdict==="PERMITTED"&&"✓ جائز",a.verdict==="FORBIDDEN"&&"✗ محرم",a.verdict==="CONDITIONAL"&&"◎ مشروط"]})]})}),a.tags&&a.tags.length>0&&y.jsxs("div",{children:[y.jsx("p",{className:"text-xs font-bold text-gray-600 mb-3",children:"🏷️ الكلمات المفتاحية:"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:a.tags.map((T,P)=>y.jsxs("span",{className:"text-xs bg-gradient-to-r from-teal-100 to-blue-100 hover:from-teal-200 hover:to-blue-200 text-teal-800 px-3 py-2 rounded-full transition cursor-pointer font-medium",children:["#",T]},P))})]}),y.jsxs("div",{className:"bg-gray-100 rounded-lg p-4 border border-gray-300",children:[y.jsx("p",{className:"text-xs font-bold text-gray-600 mb-2",children:"📚 المصدر:"}),y.jsx("p",{className:"text-sm text-gray-800 font-semibold leading-relaxed",children:a.source})]})]}),y.jsxs("div",{className:"px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between gap-3 flex-wrap",children:[y.jsxs("button",{onClick:w,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition ${r?"bg-green-500 text-white":"bg-blue-500 text-white hover:bg-blue-600"}`,children:[y.jsx(gl,{size:16}),r?"تم النسخ!":"نسخ كاملة"]}),y.jsxs("div",{className:"relative",children:[y.jsxs("button",{onClick:()=>g(!f),className:"flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold text-sm hover:bg-purple-600 transition",children:[y.jsx(d2,{size:16}),"مشاركة"]}),f&&y.jsxs("div",{className:"absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden",children:[y.jsx("button",{onClick:()=>{x("twitter"),g(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"𝕏 تويتر"}),y.jsx("button",{onClick:()=>{x("facebook"),g(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"f فيسبوك"}),y.jsx("button",{onClick:()=>{x("whatsapp"),g(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"💬 واتساب"}),y.jsx("button",{onClick:()=>{x("telegram"),g(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"✈️ تيليجرام"})]})]}),y.jsx("button",{onClick:i,className:"flex items-center gap-2 px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition ml-auto",children:"إغلاق"})]})]})})},v0=a=>{var f,g;const i=[];!a.id||a.id.trim()===""?i.push({field:"id",message:"رقم الفتوى (ID) مطلوب",severity:"error"}):/^[a-z0-9_]+$/.test(a.id)||i.push({field:"id",message:"رقم الفتوى يجب أن يحتوي على أحرف إنجليزية صغيرة وأرقام وعلامات underscore فقط",severity:"error"}),a.category||i.push({field:"category",message:"التصنيف مطلوب",severity:"error"}),(!a.title||a.title.trim()==="")&&i.push({field:"title",message:"العنوان مطلوب",severity:"error"}),(!a.question||a.question.trim()==="")&&i.push({field:"question",message:"السؤال مطلوب",severity:"error"}),!a.ruling||a.ruling.trim()===""?i.push({field:"ruling",message:"الحكم الشرعي مطلوب",severity:"error"}):a.ruling.trim().length<50&&i.push({field:"ruling",message:"الحكم الشرعي يجب أن يكون أطول (50 حرف على الأقل)",severity:"warning"});const r=(((f=a.ruling)==null?void 0:f.match(/{/g))||[]).length,o=(((g=a.ruling)==null?void 0:g.match(/}/g))||[]).length;return r!==o&&i.push({field:"ruling",message:"تحذير: عدد الأقواس المفتوحة والمغلقة غير متطابق",severity:"warning"}),(!a.verdict||!["PERMITTED","FORBIDDEN","CONDITIONAL"].includes(a.verdict))&&i.push({field:"verdict",message:"الحكم النهائي مطلوب (جائز / محرم / مشروط)",severity:"error"}),(!a.source||a.source.trim()==="")&&i.push({field:"source",message:"المصدر مطلوب",severity:"error"}),(!a.tags||a.tags.length===0)&&i.push({field:"tags",message:"يجب إضافة وسم واحد على الأقل",severity:"warning"}),i},E2=a=>`{
  id: '${a.id}',
  category: CategoryId.${a.category},
  title: '${a.title.replace(/'/g,"\\'")}',
  question: '${a.question.replace(/'/g,"\\'")}',
  medical_context: '${(a.medical_context||"").replace(/'/g,"\\'")}',
  ruling: \`${a.ruling}\`,
  verdict: '${a.verdict}',
  source: '${a.source.replace(/'/g,"\\'")}',
  tags: [${a.tags.map(i=>`'${i}'`).join(", ")}],
},`,T2={[Y.SURGERY]:"surg",[Y.WOMEN_PREGNANCY]:"obgyn",[Y.ICU_DEATH]:"icu",[Y.FASTING_MEDICINE]:"fast",[Y.ETHICS]:"ethics",[Y.GENETICS_REPRODUCTION]:"genetic",[Y.TATTOO_CORTISONE]:"tattoo",[Y.PRAYER_PURITY]:"prayer",[Y.MEDICAL_EXPERIMENTS]:"exp",[Y.PHARMACY_DRUGS]:"pharm",[Y.MISCELLANEOUS]:"misc"},hp=(a,i)=>{const r=T2[a]||"fatwa",o=new Date().getFullYear(),g=(i.filter(p=>p.category===a).length+1).toString().padStart(3,"0");return`${r}_${g}_${o}`},S2=({onAddFatwa:a,existingFatwas:i=[]})=>{var Re;const[r,o]=ve.useState({id:"",category:void 0,title:"",question:"",medical_context:"",ruling:"",verdict:"CONDITIONAL",source:"",tags:[]}),[f,g]=ve.useState([]),[p,w]=ve.useState(""),[x,T]=ve.useState(!1),[P,j]=ve.useState(""),B=S=>{o(E=>{const b=S,C=hp(b,i);return{...E,category:b,id:C}})},se=()=>{if(r.category){const S=hp(r.category,i);o(E=>({...E,id:S}))}},ee=S=>{const{name:E,value:b}=S.target;o(C=>({...C,[E]:b}))},ne=S=>{S.key==="Enter"&&P.trim()&&(o(E=>({...E,tags:[...E.tags||[],P.trim()]})),j(""),S.preventDefault())},le=S=>{o(E=>{var b;return{...E,tags:((b=E.tags)==null?void 0:b.filter((C,R)=>R!==S))||[]}})},re=()=>{const S=v0(r);if(g(S),S.filter(E=>E.severity==="error").length===0){const E=E2(r);w(E)}},ie=()=>{navigator.clipboard.writeText(p),T(!0),setTimeout(()=>T(!1),2e3)},oe=()=>{o({id:"",category:void 0,title:"",question:"",medical_context:"",ruling:"",verdict:"CONDITIONAL",source:"",tags:[]}),g([]),w(""),j("")},je=f.filter(S=>S.severity==="error").length,qe=f.filter(S=>S.severity==="warning").length;return y.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6",children:y.jsxs("div",{className:"max-w-6xl mx-auto",children:[y.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-2 text-right",children:"➕ إضافة فتوى جديدة"}),y.jsx("p",{className:"text-gray-600 text-right mb-8",children:"املأ البيانات وستحصل على كود جاهز للنسخ في constants.ts"}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[y.jsx("div",{className:"lg:col-span-2",children:y.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 space-y-6",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"رقم الفتوى (ID) - تلقائي"}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("input",{type:"text",value:r.id||"",disabled:!0,className:"flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 font-mono text-sm",dir:"ltr"}),y.jsxs("button",{type:"button",onClick:se,disabled:!r.category,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-semibold text-sm",children:[y.jsx(r2,{size:16}),"إعادة توليد"]})]}),y.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"🔄 يُولَّد تلقائياً عند اختيار التصنيف"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"التصنيف *"}),y.jsxs("select",{value:r.category||"",onChange:S=>B(S.target.value),className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[y.jsx("option",{value:"",children:"اختر تصنيفًا"}),bl.map(S=>y.jsx("option",{value:S.id,children:S.name},S.id))]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"العنوان *"}),y.jsx("input",{type:"text",name:"title",value:r.title||"",onChange:ee,placeholder:"حكم زكاة عيادات الأسنان",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السؤال *"}),y.jsx("textarea",{name:"question",value:r.question||"",onChange:ee,placeholder:"ما حكم كذا وكذا؟",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-24",dir:"rtl"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السياق الطبي (كلمات مفتاحية)"}),y.jsx("textarea",{name:"medical_context",value:r.medical_context||"",onChange:ee,placeholder:"تسنين، dentistry, زراعة أسنان، implant، تنظيف",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-20 font-mono text-sm",dir:"ltr"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم الشرعي والتفصيل *"}),y.jsx("textarea",{name:"ruling",value:r.ruling||"",onChange:ee,placeholder:"اكتب الحكم الشرعي بالتفصيل...",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-32",dir:"rtl"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم النهائي *"}),y.jsxs("select",{name:"verdict",value:r.verdict||"",onChange:ee,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[y.jsx("option",{value:"PERMITTED",children:"✓ جائز"}),y.jsx("option",{value:"FORBIDDEN",children:"✗ محرم"}),y.jsx("option",{value:"CONDITIONAL",children:"◎ مشروط"})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"المصدر *"}),y.jsx("input",{type:"text",name:"source",value:r.source||"",onChange:ee,placeholder:"دار الإفتاء المصرية - فتوى رقم ...",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الكلمات المفتاحية (اضغط Enter لإضافة)"}),y.jsx("input",{type:"text",value:P,onChange:S=>j(S.target.value),onKeyDown:ne,placeholder:"أضف وسمًا واضغط Enter",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none mb-3",dir:"rtl"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:(Re=r.tags)==null?void 0:Re.map((S,E)=>y.jsxs("div",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2",children:[S,y.jsx("button",{onClick:()=>le(E),className:"text-blue-600 hover:text-blue-800 font-bold",children:"✕"})]},E))})]}),y.jsxs("div",{className:"flex gap-3 justify-end pt-6 border-t",children:[y.jsx("button",{onClick:oe,className:"px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition",children:"مسح الكل"}),y.jsx("button",{onClick:re,className:"px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition",children:"✓ توليد الكود"})]})]})}),y.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[f.length>0&&y.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[y.jsxs("h3",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[y.jsx(kv,{size:20,className:"text-orange-500"}),"التحقق من البيانات"]}),y.jsxs("div",{className:"space-y-3",children:[je>0&&y.jsxs("div",{className:"bg-red-50 border border-red-300 rounded-lg p-3",children:[y.jsxs("p",{className:"text-sm font-bold text-red-700",children:["❌ أخطاء (",je,"):"]}),f.filter(S=>S.severity==="error").map((S,E)=>y.jsxs("p",{className:"text-xs text-red-600 mt-1",children:["• ",S.field,": ",S.message]},E))]}),qe>0&&y.jsxs("div",{className:"bg-yellow-50 border border-yellow-300 rounded-lg p-3",children:[y.jsxs("p",{className:"text-sm font-bold text-yellow-700",children:["⚠️ تحذيرات (",qe,"):"]}),f.filter(S=>S.severity==="warning").map((S,E)=>y.jsxs("p",{className:"text-xs text-yellow-600 mt-1",children:["• ",S.field,": ",S.message]},E))]})]})]}),p&&y.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[y.jsxs("h3",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[y.jsx(qv,{size:20,className:"text-green-500"}),"الكود المُولَّد"]}),y.jsx("div",{className:"bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-xs overflow-x-auto h-48 overflow-y-auto mb-4",children:y.jsx("pre",{children:p})}),y.jsxs("button",{onClick:ie,className:`w-full py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2 mb-2 ${x?"bg-green-500 text-white":"bg-blue-500 text-white hover:bg-blue-600"}`,children:[x?y.jsx(Zf,{size:18}):y.jsx(gl,{size:18}),x?"تم النسخ!":"نسخ الكود"]}),a&&y.jsxs("button",{onClick:()=>{r.id&&r.category&&r.title&&r.question&&r.ruling&&r.verdict&&r.source&&(a(r),oe(),alert("تم إضافة الفتوى بنجاح!"))},className:"w-full py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition flex items-center justify-center gap-2",children:[y.jsx(Zf,{size:18}),"حفظ مباشرة"]}),y.jsx("p",{className:"text-xs text-gray-600 mt-3 text-center",children:a?"يمكنك النسخ أو الحفظ مباشرة":"انسخ الكود والصقه في `MOCK_FATWAS` داخل `constants.ts`"})]}),!p&&y.jsxs("div",{className:"bg-blue-50 rounded-xl shadow-lg p-6 border border-blue-200",children:[y.jsx("h3",{className:"text-lg font-bold text-blue-900 mb-3",children:"📋 التعليمات"}),y.jsxs("ol",{className:"text-sm text-blue-800 space-y-2 text-right",children:[y.jsx("li",{children:"✓ 1. امل جميع الحقول المطلوبة (*)"}),y.jsx("li",{children:"✓ 2. أضف وسومًا مفيدة"}),y.jsx("li",{children:'✓ 3. اضغط "توليد الكود"'}),y.jsx("li",{children:"✓ 4. انسخ الكود المُولَّد"}),y.jsx("li",{children:"✓ 5. الصقه في constants.ts"})]})]})]})]})]})})},x2=({fatwa:a,onSave:i,onDelete:r,onCancel:o})=>{const[f,g]=ve.useState(a),[p,w]=ve.useState([]),[x,T]=ve.useState(""),[P,j]=ve.useState(!1),B=ie=>{const{name:oe,value:je}=ie.target;g(qe=>({...qe,[oe]:je}))},se=ie=>{ie.key==="Enter"&&x.trim()&&(g(oe=>({...oe,tags:[...oe.tags,x.trim()]})),T(""),ie.preventDefault())},ee=ie=>{g(oe=>({...oe,tags:oe.tags.filter((je,qe)=>qe!==ie)}))},ne=()=>{const ie=v0(f);w(ie),ie.filter(oe=>oe.severity==="error").length===0&&i(f)},le=()=>{r(a.id),j(!1)},re=p.filter(ie=>ie.severity==="error").length;return y.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 space-y-6",children:[y.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[y.jsx(m0,{size:24}),"تعديل الفتوى: ",a.title]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"رقم الفتوى (ID) - غير قابل للتعديل"}),y.jsx("input",{type:"text",value:f.id,disabled:!0,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 font-mono text-sm",dir:"ltr"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"التصنيف *"}),y.jsx("select",{name:"category",value:f.category,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:bl.map(ie=>y.jsx("option",{value:ie.id,children:ie.name},ie.id))})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"العنوان *"}),y.jsx("input",{type:"text",name:"title",value:f.title,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السؤال *"}),y.jsx("textarea",{name:"question",value:f.question,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-24",dir:"rtl"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السياق الطبي"}),y.jsx("textarea",{name:"medical_context",value:f.medical_context,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-20 font-mono text-sm",dir:"ltr"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم الشرعي *"}),y.jsx("textarea",{name:"ruling",value:f.ruling,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-32",dir:"rtl"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم النهائي *"}),y.jsxs("select",{name:"verdict",value:f.verdict,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[y.jsx("option",{value:"PERMITTED",children:"✓ جائز"}),y.jsx("option",{value:"FORBIDDEN",children:"✗ محرم"}),y.jsx("option",{value:"CONDITIONAL",children:"◎ مشروط"})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"المصدر *"}),y.jsx("input",{type:"text",name:"source",value:f.source,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الكلمات المفتاحية"}),y.jsx("input",{type:"text",value:x,onChange:ie=>T(ie.target.value),onKeyDown:se,placeholder:"أضف وسمًا واضغط Enter",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none mb-3",dir:"rtl"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:f.tags.map((ie,oe)=>y.jsxs("div",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2",children:[ie,y.jsx("button",{type:"button",onClick:()=>ee(oe),className:"text-blue-600 hover:text-blue-800 font-bold",children:"✕"})]},oe))})]}),p.length>0&&y.jsxs("div",{className:"bg-red-50 border-2 border-red-300 rounded-lg p-4",children:[y.jsxs("p",{className:"text-sm font-bold text-red-700 mb-2",children:["❌ أخطاء (",re,"):"]}),y.jsx("div",{className:"space-y-1",children:p.filter(ie=>ie.severity==="error").map((ie,oe)=>y.jsxs("p",{className:"text-xs text-red-600",children:["• ",ie.field,": ",ie.message]},oe))})]}),y.jsxs("div",{className:"flex gap-3 justify-end pt-6 border-t border-gray-300",children:[!P&&y.jsxs("button",{onClick:()=>j(!0),className:"px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition flex items-center gap-2",children:[y.jsx(p0,{size:18}),"حذف"]}),P&&y.jsxs("div",{className:"flex gap-2 absolute left-8 bottom-8 bg-red-50 border border-red-300 rounded-lg p-4",children:[y.jsx("p",{className:"text-sm text-red-700 font-semibold mr-3",children:"هل أنت متأكد من الحذف؟"}),y.jsx("button",{onClick:le,className:"px-3 py-1 bg-red-600 text-white rounded text-sm font-bold hover:bg-red-700",children:"نعم، احذف"}),y.jsx("button",{onClick:()=>j(!1),className:"px-3 py-1 bg-gray-400 text-white rounded text-sm font-bold hover:bg-gray-500",children:"إلغاء"})]}),y.jsxs("button",{onClick:o,className:"px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition flex items-center gap-2",children:[y.jsx(y0,{size:18}),"إلغاء"]}),y.jsxs("button",{onClick:ne,disabled:re>0,className:"px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[y.jsx(Zf,{size:18}),"حفظ التعديلات"]})]})]})},A2=({fatwas:a,onSave:i,onDelete:r})=>{const[o,f]=ve.useState(""),[g,p]=ve.useState(""),[w,x]=ve.useState(null),T=ve.useMemo(()=>a.filter(j=>{const B=j.title.includes(o)||j.question.includes(o)||j.id.includes(o),se=!g||j.category===g;return B&&se}),[a,o,g]),P=a.find(j=>j.id===w);return P?y.jsxs("div",{className:"space-y-6",children:[y.jsx("button",{onClick:()=>x(null),className:"text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2",children:"← العودة للقائمة"}),y.jsx(x2,{fatwa:P,onSave:j=>{i(j),x(null)},onDelete:j=>{r(j),x(null)},onCancel:()=>x(null)})]}):y.jsxs("div",{className:"space-y-6",children:[y.jsxs("h2",{className:"text-2xl font-bold text-gray-800",children:["قائمة الفتاوى (",T.length,")"]}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[y.jsxs("div",{className:"relative",children:[y.jsx(o2,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"}),y.jsx("input",{type:"text",placeholder:"ابحث في العنوان أو السؤال...",value:o,onChange:j=>f(j.target.value),className:"w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),y.jsxs("select",{value:g,onChange:j=>p(j.target.value),className:"px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[y.jsx("option",{value:"",children:"جميع التصنيفات"}),bl.map(j=>y.jsx("option",{value:j.id,children:j.name},j.id))]})]}),T.length===0?y.jsx("div",{className:"bg-gray-50 rounded-lg p-8 text-center",children:y.jsx("p",{className:"text-gray-600 text-lg",children:"لا توجد فتاوى تطابق البحث"})}):y.jsx("div",{className:"space-y-3",children:T.map(j=>{const B=bl.find(se=>se.id===j.category);return y.jsx("div",{className:"bg-white rounded-lg border border-gray-300 p-4 hover:shadow-lg transition",children:y.jsxs("div",{className:"flex items-start justify-between gap-4",children:[y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("h3",{className:"font-bold text-lg text-gray-800 mb-1",children:j.title}),y.jsx("p",{className:"text-sm text-gray-600 mb-2 line-clamp-2",children:j.question}),y.jsxs("div",{className:"flex gap-2 flex-wrap",children:[y.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full",children:(B==null?void 0:B.name)||"Unknown"}),y.jsxs("span",{className:`text-xs px-2 py-1 rounded-full ${j.verdict==="PERMITTED"?"bg-green-100 text-green-800":j.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[j.verdict==="PERMITTED"&&"✓ جائز",j.verdict==="FORBIDDEN"&&"✗ محرم",j.verdict==="CONDITIONAL"&&"◎ مشروط"]})]})]}),y.jsxs("div",{className:"flex gap-2",children:[y.jsxs("button",{onClick:()=>x(j.id),className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold flex items-center gap-2 text-sm",children:[y.jsx(m0,{size:16}),"تعديل"]}),y.jsxs("button",{onClick:()=>{confirm(`هل تريد حذف: ${j.title}؟`)&&r(j.id)},className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold flex items-center gap-2 text-sm",children:[y.jsx(p0,{size:16}),"حذف"]})]})]})},j.id)})})]})},N2="Faioumy9954",w2=({onLogin:a})=>{const[i,r]=ve.useState(""),[o,f]=ve.useState(!1),[g,p]=ve.useState(""),[w,x]=ve.useState(!1),T=P=>{P.preventDefault(),x(!0),setTimeout(()=>{i===N2?(p(""),r(""),a()):(p("كلمة السر غير صحيحة"),r("")),x(!1)},500)};return y.jsx("div",{className:"fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",children:y.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden",children:[y.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-8 text-center",children:[y.jsx("div",{className:"inline-block bg-white/20 p-4 rounded-full mb-4",children:y.jsx(Wv,{size:40,className:"text-white"})}),y.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"لوحة الإدارة"}),y.jsx("p",{className:"text-indigo-100",children:"أدخل كلمة السر للوصول"})]}),y.jsxs("form",{onSubmit:T,className:"p-8 space-y-6",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"كلمة السر"}),y.jsxs("div",{className:"relative",children:[y.jsx("input",{type:o?"text":"password",value:i,onChange:P=>{r(P.target.value),p("")},placeholder:"أدخل كلمة السر",disabled:w,className:"w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none font-medium disabled:bg-gray-100",autoFocus:!0,dir:"ltr"}),y.jsx("button",{type:"button",onClick:()=>f(!o),className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition",children:o?y.jsx(Gv,{size:20}):y.jsx(Yv,{size:20})})]})]}),g&&y.jsx("div",{className:"bg-red-50 border-2 border-red-300 rounded-lg p-3",children:y.jsxs("p",{className:"text-red-700 text-sm font-semibold",children:["❌ ",g]})}),y.jsx("button",{type:"submit",disabled:w||i.length===0,className:"w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed",children:w?"⏳ جاري التحقق...":"🔓 الدخول"})]}),y.jsx("div",{className:"bg-gray-50 px-8 py-4 text-center border-t border-gray-200",children:y.jsx("p",{className:"text-xs text-gray-600",children:"🔒 لوحة الإدارة محمية بكلمة سر"})})]})})},C2=({fatwas:a,onAddFatwa:i,onUpdateFatwa:r,onDeleteFatwa:o,onLogout:f})=>{const[g,p]=ve.useState("dashboard"),[w,x]=ve.useState(!1),[T,P]=ve.useState(!1);return w?T?w?y.jsx("div",{className:"fixed inset-0 bg-black/60 z-50 overflow-y-auto",children:y.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",children:y.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-6xl",children:[y.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 flex items-center justify-between",children:[y.jsxs("h1",{className:"text-3xl font-bold text-white flex items-center gap-3",children:[y.jsx(fp,{size:28}),"لوحة إدارة المحتوى"]}),y.jsx("button",{onClick:()=>x(!1),className:"text-white hover:bg-white/20 p-2 rounded-lg transition text-2xl font-bold",children:"✕"})]}),y.jsxs("div",{className:"border-b border-gray-200 px-8 py-4 flex gap-4",children:[y.jsx("button",{onClick:()=>p("dashboard"),className:`px-6 py-2 rounded-lg font-semibold transition ${g==="dashboard"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"📊 لوحة التحكم"}),y.jsxs("button",{onClick:()=>p("add"),className:`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${g==="add"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[y.jsx(i2,{size:18}),"إضافة فتوى"]}),y.jsxs("button",{onClick:()=>p("list"),className:`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${g==="list"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[y.jsx(Jv,{size:18}),"قائمة الفتاوى"]})]}),y.jsxs("div",{className:"p-8 max-h-[80vh] overflow-y-auto",children:[g==="dashboard"&&y.jsxs("div",{className:"space-y-6",children:[y.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"مرحبًا بك في لوحة الإدارة"}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[y.jsxs("div",{className:"bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 border border-blue-300",children:[y.jsx("p",{className:"text-sm font-bold text-blue-600 mb-2",children:"📚 إجمالي الفتاوى"}),y.jsx("p",{className:"text-4xl font-bold text-blue-900",children:a.length})]}),y.jsxs("div",{className:"bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-6 border border-green-300",children:[y.jsx("p",{className:"text-sm font-bold text-green-600 mb-2",children:"✓ فتاوى منشورة"}),y.jsx("p",{className:"text-4xl font-bold text-green-900",children:a.filter(j=>j.verdict==="PERMITTED").length})]}),y.jsxs("div",{className:"bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-6 border border-yellow-300",children:[y.jsx("p",{className:"text-sm font-bold text-yellow-600 mb-2",children:"⏳ مشروط"}),y.jsx("p",{className:"text-4xl font-bold text-yellow-900",children:a.filter(j=>j.verdict==="CONDITIONAL").length})]})]}),y.jsxs("div",{className:"bg-indigo-50 rounded-lg p-6 border border-indigo-300",children:[y.jsx("h3",{className:"text-lg font-bold text-indigo-900 mb-3",children:"🚀 الخطوات التالية"}),y.jsxs("ul",{className:"space-y-2 text-indigo-800",children:[y.jsx("li",{children:'✓ اضغط على "إضافة فتوى" لإضافة فتوى جديدة'}),y.jsx("li",{children:"✓ سيتم التحقق من البيانات تلقائيًا"}),y.jsx("li",{children:"✓ انسخ الكود المُولَّد والصقه في constants.ts"}),y.jsx("li",{children:"✓ أعد تشغيل السيرفر لرؤية الفتوى الجديدة"})]})]})]}),g==="add"&&y.jsx(S2,{onAddFatwa:i,existingFatwas:a}),g==="list"&&y.jsx(A2,{fatwas:a,onSave:r,onDelete:o})]}),y.jsxs("div",{className:"border-t border-gray-200 px-8 py-4 bg-gray-50 flex justify-between",children:[y.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold",children:[y.jsx(t2,{size:18}),"الخروج"]}),y.jsx("p",{className:"text-sm text-gray-600",children:"نسخة 1.0 | آخر تحديث: 24 ديسمبر 2025"})]})]})})}):y.jsx("button",{onClick:()=>x(!0),className:"fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg transition z-40",title:"فتح لوحة الإدارة",children:y.jsx(fp,{size:24})}):y.jsxs(y.Fragment,{children:[y.jsx(w2,{onLogin:()=>P(!0)}),y.jsx("button",{onClick:()=>x(!1),className:"fixed bottom-6 left-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition z-40 text-2xl",title:"فتح لوحة الإدارة",children:"⚙️"})]}):y.jsx("button",{onClick:()=>x(!0),className:"fixed bottom-6 left-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition z-40 text-2xl",title:"فتح لوحة الإدارة",children:"⚙️"})},R2=(a,i)=>{const r=[];for(let o=0;o<=i.length;o++)r[o]=[o];for(let o=0;o<=a.length;o++)r[0][o]=o;for(let o=1;o<=i.length;o++)for(let f=1;f<=a.length;f++)i.charAt(o-1)===a.charAt(f-1)?r[o][f]=r[o-1][f-1]:r[o][f]=Math.min(r[o-1][f-1]+1,r[o][f-1]+1,r[o-1][f]+1);return r[i.length][a.length]},zf=(a,i)=>{const r=Math.max(a.length,i.length);return r===0?1:1-R2(a,i)/r},Ja=a=>a?a.toLowerCase().normalize("NFKD").replace(/[\u064B-\u0652\u0640]/g,"").replace(/[أإآ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/[^\u0600-\u06FF0-9\s]/g," ").split(/\s+/).filter(Boolean):[],O2=(a,i)=>{const r=Ja(a),o=a.toLowerCase().trim(),f=/^[a-z\s]+$/i.test(o),g=Ja(i.title),p=Ja(i.question||""),w=Ja(i.medical_context||""),x=Ja((i.tags||[]).join(" ")),T=Ja(i.ruling||""),P=(i.medical_context||"").toLowerCase(),j=(i.tags||[]).join(" ").toLowerCase();let B=0,se=!1;if(f&&o.length>0){P.includes(o)&&(B+=20,se=!0),j.includes(o)&&(B+=15,se=!0);const ee=o.split(/\s+/).filter(le=>le.length>2);if(ee.length===0)return 0;let ne=0;for(const le of ee)P.includes(le)?(B+=12,ne++):j.includes(le)&&(B+=10,ne++);if(se=ne>0,!se){const le=P.split(/[\s,()/-]+/);for(const re of ee)for(const ie of le)if(ie.length>2){const oe=zf(re,ie);oe>.78&&(B+=3+2*oe)}}}else{if(!r.length)return 0;let ee=0;for(const ne of r)ne.length<2||(w.includes(ne)?(B+=14,ee++):g.includes(ne)?(B+=11,ee++):x.includes(ne)?(B+=9,ee++):p.includes(ne)&&(B+=7,ee++));if(se=ee>0,!se){for(const ne of r)if(!(ne.length<2)){for(const le of w)if(le.length>2){const re=zf(ne,le);re>.8&&(B+=3+2*re)}for(const le of x)if(le.length>2){const re=zf(ne,le);re>.8&&(B+=2+1.5*re)}}}if(B===0)for(const ne of r)T.includes(ne)&&(B+=2)}return B||0},D2=(a,i)=>i.map(o=>({fatwa:o,score:O2(a,o)})).filter(o=>o.score>3).sort((o,f)=>f.score-o.score).map(o=>o.fatwa).slice(0,5),I2=()=>{const[a,i]=ve.useState([]),[r,o]=ve.useState(""),f=!1,[g,p]=ve.useState(!1),[w,x]=ve.useState(!1),[T,P]=ve.useState(null),[j,B]=ve.useState(null),[se,ee]=ve.useState(!1),[ne,le]=ve.useState(!1),[re,ie]=ve.useState(_2),oe=ve.useRef(null),je=()=>{const b=oe.current;b&&(b.scrollTop=b.scrollHeight)};ve.useEffect(()=>{je()},[a,g]);const qe=b=>{if(re.some(C=>C.id===b.id)){alert("⚠️ رقم الفتوى موجود بالفعل!");return}ie([...re,b]),alert("✓ تم إضافة الفتوى بنجاح!")},Re=b=>{ie(re.map(C=>C.id===b.id?b:C)),alert("✓ تم تحديث الفتوى بنجاح!")},S=b=>{ie(re.filter(C=>C.id!==b)),alert("✓ تم حذف الفتوى بنجاح!")},E=async()=>{if(!r.trim())return;const b=r,C={id:Date.now().toString(),role:"user",text:b,isEmergency:f};i(R=>[...R,C]),o(""),p(!0);try{let R=[],I="";const A=D2(b,re);if(A.length>0){R=A.map(V=>V.id);const Qe=A.length;Qe===1?I="ها هي الفتوى عزيزي الطبيب":I=`ها هي ${Qe} فتاوى مرتبطة بسؤالك من مصادر متعددة:`}else I="عذرًا، لم أجد فتوى مطابقة لهذا السؤال في قاعدة البيانات الحالية.";const Xe={id:(Date.now()+1).toString(),role:"model",text:I,isEmergency:f,relatedFatwaIds:R};i(Qe=>[...Qe,Xe])}catch(R){console.error(R),i(I=>[...I,{id:(Date.now()+1).toString(),role:"model",text:"عذرًا، حدث خطأ غير متوقَّع."}])}finally{p(!1)}};return y.jsxs("div",{className:"flex flex-col h-[100dvh] bg-slate-50 text-slate-800 font-tajawal overflow-hidden",children:[y.jsx("header",{className:"px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex items-center justify-center relative z-20",children:y.jsxs("div",{className:"flex flex-col items-center gap-1",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{className:"p-1.5 rounded-lg bg-teal-50",children:y.jsx(p2,{className:"w-6 h-6 text-teal-700"})}),y.jsx("h1",{className:"text-2xl font-bold font-amiri text-gray-900 leading-none",children:"الطــبيب الفقيــه"})]}),y.jsx("span",{className:"text-sm text-teal-600 font-ruqaa opacity-90 tracking-wide transform -translate-y-2",children:"(بين الطب والشريعة)"})]})}),y.jsxs("main",{className:"flex-1 flex flex-col relative overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"}),y.jsxs("section",{className:"flex-1 flex flex-col relative z-10 w-full mx-auto max-w-lg md:max-w-2xl min-h-0",children:[y.jsxs("div",{ref:oe,className:"flex-1 overflow-y-auto p-3 md:p-5 space-y-6 pb-6 scrollbar-hide min-h-0",children:[a.length===0&&y.jsx("div",{className:"flex flex-col items-center justify-center min-h-[50vh] text-center mt-2 px-2",children:y.jsxs("div",{className:"w-full space-y-6 animate-in fade-in zoom-in duration-700",children:[y.jsx("div",{className:"flex justify-center",children:y.jsx("div",{className:"bg-gradient-to-tr from-teal-50 to-white p-4 rounded-full shadow-sm ring-1 ring-gray-100",children:y.jsx(Qv,{className:"w-10 h-10 text-teal-600"})})}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("h2",{className:"text-xl font-bold text-gray-800 font-amiri",children:"السلام عليكم دكتور"}),y.jsx("p",{className:"text-xs text-gray-500 max-w-xs mx-auto leading-relaxed",children:"صلّ على سيدنا النبي ﷺ خير معلم الناس الخير."})]}),y.jsxs("div",{className:"grid grid-cols-1 gap-3 w-full",children:[y.jsxs("div",{className:"relative overflow-hidden bg-white p-4 rounded-xl border border-teal-100 shadow-sm text-right",children:[y.jsx(cp,{className:"absolute -bottom-2 -left-2 w-12 h-12 text-teal-50 opacity-50 rotate-12"}),y.jsx("p",{className:"text-gray-800 font-amiri text-base font-medium leading-relaxed mb-2 relative z-10",children:'"لا أعلم علمًا بعد الحلال والحرام أنبل من الطب"'}),y.jsx("span",{className:"text-xs font-bold text-teal-600 block relative z-10",children:"- الإمام الشافعي"})]}),y.jsxs("div",{className:"relative overflow-hidden bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-right",children:[y.jsx(cp,{className:"absolute -bottom-2 -left-2 w-12 h-12 text-blue-50 opacity-50 rotate-12"}),y.jsx("p",{className:"text-gray-800 font-amiri text-base font-medium leading-relaxed mb-2 relative z-10",children:'"عليّ أن أتسلح بالعلم؛ لأجابه هذا العدو البغيض الذي يفتك ببنيان الله المقدس"'}),y.jsx("span",{className:"text-xs font-bold text-teal-600 block relative z-10",children:"- أبو بكر الرازي"})]})]})]})}),a.map(b=>((b.relatedFatwaIds||[]).map(C=>re.find(R=>R.id===C)).filter(C=>C!==void 0),y.jsxs("div",{className:`flex w-full flex-col gap-2 ${b.role==="user"?"items-end":"items-start"}`,children:[b.role==="user"&&y.jsx("div",{className:"bg-teal-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-md max-w-[85%]",children:y.jsx("p",{className:"text-base",children:b.text})}),b.role==="model"&&y.jsxs("div",{className:"w-full animate-in slide-in-from-bottom-2 duration-500",children:[re.length===0&&y.jsx("div",{className:"bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-gray-800 max-w-[90%] mb-2",children:y.jsx("p",{className:"text-sm leading-relaxed",children:b.text})}),re.length>0&&y.jsx("div",{className:"bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-gray-800 max-w-[90%] mb-3",children:y.jsx("p",{className:"text-sm leading-relaxed",children:b.text})}),re.map((C,R)=>y.jsxs("div",{className:"w-full rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white mb-3",children:[y.jsxs("div",{className:"px-4 py-3 border-b flex justify-between items-center bg-gradient-to-r from-teal-50 to-blue-50 border-gray-100",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Fv,{className:"w-4 h-4 text-teal-600"}),y.jsxs("span",{className:"text-xs font-bold text-teal-700",children:["فتوى ",re.length>1?`${R+1} من ${re.length}`:"تفصيلية"]})]}),y.jsx("span",{className:"text-[11px] text-teal-700 bg-white/70 px-2 py-1 rounded font-semibold",children:C.source})]}),y.jsxs("div",{className:"p-4 space-y-4",children:[y.jsx("h3",{className:"font-bold text-lg font-amiri leading-snug text-gray-900 border-r-4 border-teal-600 pr-3",children:C.title}),y.jsxs("div",{className:"bg-amber-50/50 rounded p-3 border border-amber-100/50",children:[y.jsx("p",{className:"text-xs font-bold text-amber-800 mb-2",children:"❓ السؤال:"}),y.jsx("p",{className:"text-sm text-amber-900 leading-relaxed",children:C.question})]}),C.medical_context&&y.jsxs("div",{className:"bg-blue-50/50 rounded p-3 border border-blue-100/50",children:[y.jsx("p",{className:"text-xs font-bold text-blue-800 mb-2",children:"🏥 السياق الطبي:"}),y.jsx("p",{className:"text-sm text-blue-900 leading-relaxed font-mono",children:C.medical_context})]}),y.jsxs("div",{className:"bg-green-50/50 rounded p-4 border-l-4 border-green-600",children:[y.jsx("p",{className:"text-xs font-bold mb-3 text-green-800",children:"✅ الحكم الشرعي والتفصيل:"}),y.jsx("p",{className:"text-sm leading-8 whitespace-pre-wrap text-gray-800 font-medium",children:C.ruling})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-xs font-bold text-gray-600",children:"الحكم النهائي:"}),y.jsxs("span",{className:`text-xs font-bold px-3 py-1 rounded-full ${C.verdict==="PERMITTED"?"bg-green-100 text-green-800":C.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[C.verdict==="PERMITTED"&&"✓ جائز",C.verdict==="FORBIDDEN"&&"✗ محرم",C.verdict==="CONDITIONAL"&&"◎ مشروط"]})]}),C.tags&&C.tags.length>0&&y.jsx("div",{className:"flex flex-wrap gap-2",children:C.tags.map((I,A)=>y.jsxs("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full",children:["#",I]},A))})]})]},C.id))]})]},b.id))),g&&y.jsx("div",{className:"flex justify-start w-full",children:y.jsxs("div",{className:"bg-white px-3 py-2 rounded-xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-1",children:[y.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),y.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),y.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})]}),y.jsxs("div",{className:"flex-shrink-0 px-3 py-3 bg-white border-t border-gray-100",children:[y.jsxs("button",{onClick:()=>x(!w),className:"w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:shadow-md",children:[y.jsx("span",{className:`transition-transform ${w?"rotate-180":""}`,children:"▼"}),y.jsx("h3",{className:"text-sm font-bold text-gray-800",children:"📚 فهرس الموضوعات"})]}),w&&y.jsx("div",{className:"mt-2 bg-white border border-gray-200 rounded-lg p-3 space-y-2 max-h-64 overflow-y-auto",children:T===null?y.jsx("div",{className:"space-y-2",children:bl.map(b=>y.jsx("button",{onClick:()=>P(b.id),className:"w-full text-right p-2 bg-blue-50 hover:bg-blue-100 rounded text-xs font-semibold text-blue-700 transition",children:b.name},b.id))}):y.jsxs("div",{className:"space-y-2",children:[y.jsx("button",{onClick:()=>P(null),className:"w-full text-right p-2 bg-gray-200 hover:bg-gray-300 rounded text-xs font-semibold text-gray-700 transition",children:"← العودة"}),re.filter(b=>b.category===T).map(b=>y.jsx("button",{onClick:()=>{B(b),x(!1)},className:"w-full text-right p-2 bg-green-50 hover:bg-green-100 rounded text-xs font-semibold text-green-700 transition line-clamp-2",children:b.question},b.id))]})})]}),y.jsxs("div",{className:"relative w-full px-3 pt-3 pb-4 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent border-t border-gray-100",children:[y.jsxs("div",{className:"bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-gray-100 p-1.5 flex items-center gap-2 w-full",children:[y.jsx("input",{type:"text",value:r,onChange:b=>o(b.target.value),onKeyDown:b=>b.key==="Enter"&&E(),placeholder:"سل ما تريد أو اكتب الكلمة المفتاحية",className:"flex-1 bg-transparent border-none focus:ring-0 px-4 text-gray-700 placeholder-gray-400 text-base h-10 font-tajawal",disabled:g}),y.jsx("button",{onClick:E,disabled:!r.trim()||g,className:`w-10 h-10 flex items-center justify-center rounded-full transition-all flex-shrink-0 ${r.trim()&&!g?"bg-teal-600 text-white hover:bg-teal-700 shadow-md rotate-0":"bg-gray-100 text-gray-300 cursor-not-allowed"}`,children:y.jsx(c2,{className:`w-4 h-4 ${document.dir==="rtl"?"rotate-180 mr-0.5":""}`})})]}),y.jsx("div",{className:"text-center mt-5 mb-0",children:y.jsx("p",{className:"text-[13px] text-gray-600 font-amiri leading-relaxed opacity-90",children:"(أخوكم وابنكم، محمد محمود الفيومي، كلية طب بنين القاهرة - جامعة الأزهر الشريف)"})})]})]})]}),j&&y.jsx(b2,{fatwa:j,onClose:()=>B(null)}),se&&y.jsx(C2,{fatwas:re,onAddFatwa:qe,onUpdateFatwa:Re,onDeleteFatwa:S,onLogout:()=>{ee(!1),le(!1)}}),!se&&y.jsx("button",{onClick:()=>ee(!0),className:"fixed bottom-6 left-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition z-40 text-xl",title:"فتح لوحة الإدارة",children:"⚙️"})]})},M2=()=>{};var dp={};/**
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
 */const _0=function(a){const i=[];let r=0;for(let o=0;o<a.length;o++){let f=a.charCodeAt(o);f<128?i[r++]=f:f<2048?(i[r++]=f>>6|192,i[r++]=f&63|128):(f&64512)===55296&&o+1<a.length&&(a.charCodeAt(o+1)&64512)===56320?(f=65536+((f&1023)<<10)+(a.charCodeAt(++o)&1023),i[r++]=f>>18|240,i[r++]=f>>12&63|128,i[r++]=f>>6&63|128,i[r++]=f&63|128):(i[r++]=f>>12|224,i[r++]=f>>6&63|128,i[r++]=f&63|128)}return i},j2=function(a){const i=[];let r=0,o=0;for(;r<a.length;){const f=a[r++];if(f<128)i[o++]=String.fromCharCode(f);else if(f>191&&f<224){const g=a[r++];i[o++]=String.fromCharCode((f&31)<<6|g&63)}else if(f>239&&f<365){const g=a[r++],p=a[r++],w=a[r++],x=((f&7)<<18|(g&63)<<12|(p&63)<<6|w&63)-65536;i[o++]=String.fromCharCode(55296+(x>>10)),i[o++]=String.fromCharCode(56320+(x&1023))}else{const g=a[r++],p=a[r++];i[o++]=String.fromCharCode((f&15)<<12|(g&63)<<6|p&63)}}return i.join("")},b0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,i){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let f=0;f<a.length;f+=3){const g=a[f],p=f+1<a.length,w=p?a[f+1]:0,x=f+2<a.length,T=x?a[f+2]:0,P=g>>2,j=(g&3)<<4|w>>4;let B=(w&15)<<2|T>>6,se=T&63;x||(se=64,p||(B=64)),o.push(r[P],r[j],r[B],r[se])}return o.join("")},encodeString(a,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(a):this.encodeByteArray(_0(a),i)},decodeString(a,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(a):j2(this.decodeStringToByteArray(a,i))},decodeStringToByteArray(a,i){this.init_();const r=i?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let f=0;f<a.length;){const g=r[a.charAt(f++)],w=f<a.length?r[a.charAt(f)]:0;++f;const T=f<a.length?r[a.charAt(f)]:64;++f;const j=f<a.length?r[a.charAt(f)]:64;if(++f,g==null||w==null||T==null||j==null)throw new U2;const B=g<<2|w>>4;if(o.push(B),T!==64){const se=w<<4&240|T>>2;if(o.push(se),j!==64){const ee=T<<6&192|j;o.push(ee)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class U2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L2=function(a){const i=_0(a);return b0.encodeByteArray(i,!0)},mu=function(a){return L2(a).replace(/\./g,"")},E0=function(a){try{return b0.decodeString(a,!0)}catch(i){console.error("base64Decode failed: ",i)}return null};/**
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
 */function z2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k2=()=>z2().__FIREBASE_DEFAULTS__,H2=()=>{if(typeof process>"u"||typeof dp>"u")return;const a=dp.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},q2=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const i=a&&E0(a[1]);return i&&JSON.parse(i)},oh=()=>{try{return M2()||k2()||H2()||q2()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},T0=a=>{var i,r;return(r=(i=oh())==null?void 0:i.emulatorHosts)==null?void 0:r[a]},B2=a=>{const i=T0(a);if(!i)return;const r=i.lastIndexOf(":");if(r<=0||r+1===i.length)throw new Error(`Invalid host ${i} with no separate hostname and port!`);const o=parseInt(i.substring(r+1),10);return i[0]==="["?[i.substring(1,r-1),o]:[i.substring(0,r),o]},S0=()=>{var a;return(a=oh())==null?void 0:a.config},x0=a=>{var i;return(i=oh())==null?void 0:i[`_${a}`]};/**
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
 */class V2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((i,r)=>{this.resolve=i,this.reject=r})}wrapCallback(i){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof i=="function"&&(this.promise.catch(()=>{}),i.length===1?i(r):i(r,o))}}}/**
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
 */function xl(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}async function A0(a){return(await fetch(a,{credentials:"include"})).ok}/**
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
 */function G2(a,i){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},o=i||"demo-project",f=a.iat||0,g=a.sub||a.user_id;if(!g)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const p={iss:`https://securetoken.google.com/${o}`,aud:o,iat:f,exp:f+3600,auth_time:f,sub:g,user_id:g,firebase:{sign_in_provider:"custom",identities:{}},...a};return[mu(JSON.stringify(r)),mu(JSON.stringify(p)),""].join(".")}const ml={};function P2(){const a={prod:[],emulator:[]};for(const i of Object.keys(ml))ml[i]?a.emulator.push(i):a.prod.push(i);return a}function Y2(a){let i=document.getElementById(a),r=!1;return i||(i=document.createElement("div"),i.setAttribute("id",a),r=!0),{created:r,element:i}}let gp=!1;function N0(a,i){if(typeof window>"u"||typeof document>"u"||!xl(window.location.host)||ml[a]===i||ml[a]||gp)return;ml[a]=i;function r(B){return`__firebase__banner__${B}`}const o="__firebase__banner",g=P2().prod.length>0;function p(){const B=document.getElementById(o);B&&B.remove()}function w(B){B.style.display="flex",B.style.background="#7faaf0",B.style.position="fixed",B.style.bottom="5px",B.style.left="5px",B.style.padding=".5em",B.style.borderRadius="5px",B.style.alignItems="center"}function x(B,se){B.setAttribute("width","24"),B.setAttribute("id",se),B.setAttribute("height","24"),B.setAttribute("viewBox","0 0 24 24"),B.setAttribute("fill","none"),B.style.marginLeft="-6px"}function T(){const B=document.createElement("span");return B.style.cursor="pointer",B.style.marginLeft="16px",B.style.fontSize="24px",B.innerHTML=" &times;",B.onclick=()=>{gp=!0,p()},B}function P(B,se){B.setAttribute("id",se),B.innerText="Learn more",B.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",B.setAttribute("target","__blank"),B.style.paddingLeft="5px",B.style.textDecoration="underline"}function j(){const B=Y2(o),se=r("text"),ee=document.getElementById(se)||document.createElement("span"),ne=r("learnmore"),le=document.getElementById(ne)||document.createElement("a"),re=r("preprendIcon"),ie=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(B.created){const oe=B.element;w(oe),P(le,ne);const je=T();x(ie,re),oe.append(ie,ee,le,je),document.body.appendChild(oe)}g?(ee.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,ee.innerText="Preview backend running in this workspace."),ee.setAttribute("id",se)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",j):j()}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function F2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function w0(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function K2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q2(){const a=Ut();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function C0(){try{return typeof indexedDB=="object"}catch{return!1}}function R0(){return new Promise((a,i)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",f=self.indexedDB.open(o);f.onsuccess=()=>{f.result.close(),r||self.indexedDB.deleteDatabase(o),a(!0)},f.onupgradeneeded=()=>{r=!1},f.onerror=()=>{var g;i(((g=f.error)==null?void 0:g.message)||"")}}catch(r){i(r)}})}function Z2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const J2="FirebaseError";class Rn extends Error{constructor(i,r,o){super(r),this.code=i,this.customData=o,this.name=J2,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(i,r,o){this.service=i,this.serviceName=r,this.errors=o}create(i,...r){const o=r[0]||{},f=`${this.service}/${i}`,g=this.errors[i],p=g?$2(g,o):"Error",w=`${this.serviceName}: ${p} (${f}).`;return new Rn(f,w,o)}}function $2(a,i){return a.replace(W2,(r,o)=>{const f=i[o];return f!=null?String(f):`<${o}?>`})}const W2=/\{\$([^}]+)}/g;function e_(a){for(const i in a)if(Object.prototype.hasOwnProperty.call(a,i))return!1;return!0}function ps(a,i){if(a===i)return!0;const r=Object.keys(a),o=Object.keys(i);for(const f of r){if(!o.includes(f))return!1;const g=a[f],p=i[f];if(mp(g)&&mp(p)){if(!ps(g,p))return!1}else if(g!==p)return!1}for(const f of o)if(!r.includes(f))return!1;return!0}function mp(a){return a!==null&&typeof a=="object"}/**
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
 */function Al(a){const i=[];for(const[r,o]of Object.entries(a))Array.isArray(o)?o.forEach(f=>{i.push(encodeURIComponent(r)+"="+encodeURIComponent(f))}):i.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return i.length?"&"+i.join("&"):""}function t_(a,i){const r=new n_(a,i);return r.subscribe.bind(r)}class n_{constructor(i,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{i(this)}).catch(o=>{this.error(o)})}next(i){this.forEachObserver(r=>{r.next(i)})}error(i){this.forEachObserver(r=>{r.error(i)}),this.close(i)}complete(){this.forEachObserver(i=>{i.complete()}),this.close()}subscribe(i,r,o){let f;if(i===void 0&&r===void 0&&o===void 0)throw new Error("Missing Observer.");i_(i,["next","error","complete"])?f=i:f={next:i,error:r,complete:o},f.next===void 0&&(f.next=kf),f.error===void 0&&(f.error=kf),f.complete===void 0&&(f.complete=kf);const g=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?f.error(this.finalError):f.complete()}catch{}}),this.observers.push(f),g}unsubscribeOne(i){this.observers===void 0||this.observers[i]===void 0||(delete this.observers[i],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(i){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,i)}sendOne(i,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[i]!==void 0)try{r(this.observers[i])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(i){this.finalized||(this.finalized=!0,i!==void 0&&(this.finalError=i),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i_(a,i){if(typeof a!="object"||a===null)return!1;for(const r of i)if(r in a&&typeof a[r]=="function")return!0;return!1}function kf(){}/**
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
 */const s_=1e3,a_=2,r_=14400*1e3,l_=.5;function pp(a,i=s_,r=a_){const o=i*Math.pow(r,a),f=Math.round(l_*o*(Math.random()-.5)*2);return Math.min(r_,o+f)}/**
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
 */function Ri(a){return a&&a._delegate?a._delegate:a}class Cn{constructor(i,r,o){this.name=i,this.instanceFactory=r,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(i){return this.instantiationMode=i,this}setMultipleInstances(i){return this.multipleInstances=i,this}setServiceProps(i){return this.serviceProps=i,this}setInstanceCreatedCallback(i){return this.onInstanceCreated=i,this}}/**
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
 */const Ks="[DEFAULT]";/**
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
 */class o_{constructor(i,r){this.name=i,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(i){const r=this.normalizeInstanceIdentifier(i);if(!this.instancesDeferred.has(r)){const o=new V2;if(this.instancesDeferred.set(r,o),this.isInitialized(r)||this.shouldAutoInitialize())try{const f=this.getOrInitializeService({instanceIdentifier:r});f&&o.resolve(f)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(i){const r=this.normalizeInstanceIdentifier(i==null?void 0:i.identifier),o=(i==null?void 0:i.optional)??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(f){if(o)return null;throw f}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(i){if(i.name!==this.name)throw Error(`Mismatching Component ${i.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=i,!!this.shouldAutoInitialize()){if(c_(i))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[r,o]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(r);try{const g=this.getOrInitializeService({instanceIdentifier:f});o.resolve(g)}catch{}}}}clearInstance(i=Ks){this.instancesDeferred.delete(i),this.instancesOptions.delete(i),this.instances.delete(i)}async delete(){const i=Array.from(this.instances.values());await Promise.all([...i.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...i.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(i=Ks){return this.instances.has(i)}getOptions(i=Ks){return this.instancesOptions.get(i)||{}}initialize(i={}){const{options:r={}}=i,o=this.normalizeInstanceIdentifier(i.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const f=this.getOrInitializeService({instanceIdentifier:o,options:r});for(const[g,p]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(g);o===w&&p.resolve(f)}return f}onInit(i,r){const o=this.normalizeInstanceIdentifier(r),f=this.onInitCallbacks.get(o)??new Set;f.add(i),this.onInitCallbacks.set(o,f);const g=this.instances.get(o);return g&&i(g,o),()=>{f.delete(i)}}invokeOnInitCallbacks(i,r){const o=this.onInitCallbacks.get(r);if(o)for(const f of o)try{f(i,r)}catch{}}getOrInitializeService({instanceIdentifier:i,options:r={}}){let o=this.instances.get(i);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:u_(i),options:r}),this.instances.set(i,o),this.instancesOptions.set(i,r),this.invokeOnInitCallbacks(o,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,o)}catch{}return o||null}normalizeInstanceIdentifier(i=Ks){return this.component?this.component.multipleInstances?i:Ks:i}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u_(a){return a===Ks?void 0:a}function c_(a){return a.instantiationMode==="EAGER"}/**
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
 */class f_{constructor(i){this.name=i,this.providers=new Map}addComponent(i){const r=this.getProvider(i.name);if(r.isComponentSet())throw new Error(`Component ${i.name} has already been registered with ${this.name}`);r.setComponent(i)}addOrOverwriteComponent(i){this.getProvider(i.name).isComponentSet()&&this.providers.delete(i.name),this.addComponent(i)}getProvider(i){if(this.providers.has(i))return this.providers.get(i);const r=new o_(i,this);return this.providers.set(i,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Me||(Me={}));const h_={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},d_=Me.INFO,g_={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},m_=(a,i,...r)=>{if(i<a.logLevel)return;const o=new Date().toISOString(),f=g_[i];if(f)console[f](`[${o}]  ${a.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`)};class Nu{constructor(i){this.name=i,this._logLevel=d_,this._logHandler=m_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(i){if(!(i in Me))throw new TypeError(`Invalid value "${i}" assigned to \`logLevel\``);this._logLevel=i}setLogLevel(i){this._logLevel=typeof i=="string"?h_[i]:i}get logHandler(){return this._logHandler}set logHandler(i){if(typeof i!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=i}get userLogHandler(){return this._userLogHandler}set userLogHandler(i){this._userLogHandler=i}debug(...i){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...i),this._logHandler(this,Me.DEBUG,...i)}log(...i){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...i),this._logHandler(this,Me.VERBOSE,...i)}info(...i){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...i),this._logHandler(this,Me.INFO,...i)}warn(...i){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...i),this._logHandler(this,Me.WARN,...i)}error(...i){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...i),this._logHandler(this,Me.ERROR,...i)}}const p_=(a,i)=>i.some(r=>a instanceof r);let yp,vp;function y_(){return yp||(yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v_(){return vp||(vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O0=new WeakMap,Jf=new WeakMap,D0=new WeakMap,Hf=new WeakMap,uh=new WeakMap;function __(a){const i=new Promise((r,o)=>{const f=()=>{a.removeEventListener("success",g),a.removeEventListener("error",p)},g=()=>{r(gs(a.result)),f()},p=()=>{o(a.error),f()};a.addEventListener("success",g),a.addEventListener("error",p)});return i.then(r=>{r instanceof IDBCursor&&O0.set(r,a)}).catch(()=>{}),uh.set(i,a),i}function b_(a){if(Jf.has(a))return;const i=new Promise((r,o)=>{const f=()=>{a.removeEventListener("complete",g),a.removeEventListener("error",p),a.removeEventListener("abort",p)},g=()=>{r(),f()},p=()=>{o(a.error||new DOMException("AbortError","AbortError")),f()};a.addEventListener("complete",g),a.addEventListener("error",p),a.addEventListener("abort",p)});Jf.set(a,i)}let $f={get(a,i,r){if(a instanceof IDBTransaction){if(i==="done")return Jf.get(a);if(i==="objectStoreNames")return a.objectStoreNames||D0.get(a);if(i==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return gs(a[i])},set(a,i,r){return a[i]=r,!0},has(a,i){return a instanceof IDBTransaction&&(i==="done"||i==="store")?!0:i in a}};function E_(a){$f=a($f)}function T_(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(i,...r){const o=a.call(qf(this),i,...r);return D0.set(o,i.sort?i.sort():[i]),gs(o)}:v_().includes(a)?function(...i){return a.apply(qf(this),i),gs(O0.get(this))}:function(...i){return gs(a.apply(qf(this),i))}}function S_(a){return typeof a=="function"?T_(a):(a instanceof IDBTransaction&&b_(a),p_(a,y_())?new Proxy(a,$f):a)}function gs(a){if(a instanceof IDBRequest)return __(a);if(Hf.has(a))return Hf.get(a);const i=S_(a);return i!==a&&(Hf.set(a,i),uh.set(i,a)),i}const qf=a=>uh.get(a);function I0(a,i,{blocked:r,upgrade:o,blocking:f,terminated:g}={}){const p=indexedDB.open(a,i),w=gs(p);return o&&p.addEventListener("upgradeneeded",x=>{o(gs(p.result),x.oldVersion,x.newVersion,gs(p.transaction),x)}),r&&p.addEventListener("blocked",x=>r(x.oldVersion,x.newVersion,x)),w.then(x=>{g&&x.addEventListener("close",()=>g()),f&&x.addEventListener("versionchange",T=>f(T.oldVersion,T.newVersion,T))}).catch(()=>{}),w}const x_=["get","getKey","getAll","getAllKeys","count"],A_=["put","add","delete","clear"],Bf=new Map;function _p(a,i){if(!(a instanceof IDBDatabase&&!(i in a)&&typeof i=="string"))return;if(Bf.get(i))return Bf.get(i);const r=i.replace(/FromIndex$/,""),o=i!==r,f=A_.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(f||x_.includes(r)))return;const g=async function(p,...w){const x=this.transaction(p,f?"readwrite":"readonly");let T=x.store;return o&&(T=T.index(w.shift())),(await Promise.all([T[r](...w),f&&x.done]))[0]};return Bf.set(i,g),g}E_(a=>({...a,get:(i,r,o)=>_p(i,r)||a.get(i,r,o),has:(i,r)=>!!_p(i,r)||a.has(i,r)}));/**
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
 */class N_{constructor(i){this.container=i}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(w_(r)){const o=r.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(r=>r).join(" ")}}function w_(a){const i=a.getComponent();return(i==null?void 0:i.type)==="VERSION"}const Wf="@firebase/app",bp="0.14.6";/**
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
 */const Ni=new Nu("@firebase/app"),C_="@firebase/app-compat",R_="@firebase/analytics-compat",O_="@firebase/analytics",D_="@firebase/app-check-compat",I_="@firebase/app-check",M_="@firebase/auth",j_="@firebase/auth-compat",U_="@firebase/database",L_="@firebase/data-connect",z_="@firebase/database-compat",k_="@firebase/functions",H_="@firebase/functions-compat",q_="@firebase/installations",B_="@firebase/installations-compat",V_="@firebase/messaging",G_="@firebase/messaging-compat",P_="@firebase/performance",Y_="@firebase/performance-compat",X_="@firebase/remote-config",F_="@firebase/remote-config-compat",K_="@firebase/storage",Q_="@firebase/storage-compat",Z_="@firebase/firestore",J_="@firebase/ai",$_="@firebase/firestore-compat",W_="firebase",eb="12.6.0";/**
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
 */const eh="[DEFAULT]",tb={[Wf]:"fire-core",[C_]:"fire-core-compat",[O_]:"fire-analytics",[R_]:"fire-analytics-compat",[I_]:"fire-app-check",[D_]:"fire-app-check-compat",[M_]:"fire-auth",[j_]:"fire-auth-compat",[U_]:"fire-rtdb",[L_]:"fire-data-connect",[z_]:"fire-rtdb-compat",[k_]:"fire-fn",[H_]:"fire-fn-compat",[q_]:"fire-iid",[B_]:"fire-iid-compat",[V_]:"fire-fcm",[G_]:"fire-fcm-compat",[P_]:"fire-perf",[Y_]:"fire-perf-compat",[X_]:"fire-rc",[F_]:"fire-rc-compat",[K_]:"fire-gcs",[Q_]:"fire-gcs-compat",[Z_]:"fire-fst",[$_]:"fire-fst-compat",[J_]:"fire-vertex","fire-js":"fire-js",[W_]:"fire-js-all"};/**
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
 */const pu=new Map,nb=new Map,th=new Map;function Ep(a,i){try{a.container.addComponent(i)}catch(r){Ni.debug(`Component ${i.name} failed to register with FirebaseApp ${a.name}`,r)}}function ii(a){const i=a.name;if(th.has(i))return Ni.debug(`There were multiple attempts to register component ${i}.`),!1;th.set(i,a);for(const r of pu.values())Ep(r,a);for(const r of nb.values())Ep(r,a);return!0}function ra(a,i){const r=a.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),a.container.getProvider(i)}function Wn(a){return a==null?!1:a.settings!==void 0}/**
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
 */const ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ms=new aa("app","Firebase",ib);/**
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
 */class sb{constructor(i,r,o){this._isDeleted=!1,this._options={...i},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(i){this.checkDestroyed(),this._automaticDataCollectionEnabled=i}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(i){this._isDeleted=i}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=eb;function M0(a,i={}){let r=a;typeof i!="object"&&(i={name:i});const o={name:eh,automaticDataCollectionEnabled:!0,...i},f=o.name;if(typeof f!="string"||!f)throw ms.create("bad-app-name",{appName:String(f)});if(r||(r=S0()),!r)throw ms.create("no-options");const g=pu.get(f);if(g){if(ps(r,g.options)&&ps(o,g.config))return g;throw ms.create("duplicate-app",{appName:f})}const p=new f_(f);for(const x of th.values())p.addComponent(x);const w=new sb(r,o,p);return pu.set(f,w),w}function ch(a=eh){const i=pu.get(a);if(!i&&a===eh&&S0())return M0();if(!i)throw ms.create("no-app",{appName:a});return i}function hn(a,i,r){let o=tb[a]??a;r&&(o+=`-${r}`);const f=o.match(/\s|\//),g=i.match(/\s|\//);if(f||g){const p=[`Unable to register library "${o}" with version "${i}":`];f&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),f&&g&&p.push("and"),g&&p.push(`version name "${i}" contains illegal characters (whitespace or "/")`),Ni.warn(p.join(" "));return}ii(new Cn(`${o}-version`,()=>({library:o,version:i}),"VERSION"))}/**
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
 */const ab="firebase-heartbeat-database",rb=1,El="firebase-heartbeat-store";let Vf=null;function j0(){return Vf||(Vf=I0(ab,rb,{upgrade:(a,i)=>{switch(i){case 0:try{a.createObjectStore(El)}catch(r){console.warn(r)}}}}).catch(a=>{throw ms.create("idb-open",{originalErrorMessage:a.message})})),Vf}async function lb(a){try{const r=(await j0()).transaction(El),o=await r.objectStore(El).get(U0(a));return await r.done,o}catch(i){if(i instanceof Rn)Ni.warn(i.message);else{const r=ms.create("idb-get",{originalErrorMessage:i==null?void 0:i.message});Ni.warn(r.message)}}}async function Tp(a,i){try{const o=(await j0()).transaction(El,"readwrite");await o.objectStore(El).put(i,U0(a)),await o.done}catch(r){if(r instanceof Rn)Ni.warn(r.message);else{const o=ms.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Ni.warn(o.message)}}}function U0(a){return`${a.name}!${a.options.appId}`}/**
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
 */const ob=1024,ub=30;class cb{constructor(i){this.container=i,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new hb(r),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var i,r;try{const f=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),g=Sp();if(((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)==null?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===g||this._heartbeatsCache.heartbeats.some(p=>p.date===g))return;if(this._heartbeatsCache.heartbeats.push({date:g,agent:f}),this._heartbeatsCache.heartbeats.length>ub){const p=db(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(p,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){Ni.warn(o)}}async getHeartbeatsHeader(){var i;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Sp(),{heartbeatsToSend:o,unsentEntries:f}=fb(this._heartbeatsCache.heartbeats),g=mu(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=r,f.length>0?(this._heartbeatsCache.heartbeats=f,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),g}catch(r){return Ni.warn(r),""}}}function Sp(){return new Date().toISOString().substring(0,10)}function fb(a,i=ob){const r=[];let o=a.slice();for(const f of a){const g=r.find(p=>p.agent===f.agent);if(g){if(g.dates.push(f.date),xp(r)>i){g.dates.pop();break}}else if(r.push({agent:f.agent,dates:[f.date]}),xp(r)>i){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class hb{constructor(i){this.app=i,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return C0()?R0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await lb(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(i){if(await this._canUseIndexedDBPromise){const o=await this.read();return Tp(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:i.heartbeats})}else return}async add(i){if(await this._canUseIndexedDBPromise){const o=await this.read();return Tp(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...i.heartbeats]})}else return}}function xp(a){return mu(JSON.stringify({version:2,heartbeats:a})).length}function db(a){if(a.length===0)return-1;let i=0,r=a[0].date;for(let o=1;o<a.length;o++)a[o].date<r&&(r=a[o].date,i=o);return i}/**
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
 */function gb(a){ii(new Cn("platform-logger",i=>new N_(i),"PRIVATE")),ii(new Cn("heartbeat",i=>new cb(i),"PRIVATE")),hn(Wf,bp,a),hn(Wf,bp,"esm2020"),hn("fire-js","")}gb("");var mb="firebase",pb="12.7.0";/**
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
 */hn(mb,pb,"app");const L0="@firebase/installations",fh="0.6.19";/**
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
 */const z0=1e4,k0=`w:${fh}`,H0="FIS_v2",yb="https://firebaseinstallations.googleapis.com/v1",vb=3600*1e3,_b="installations",bb="Installations";/**
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
 */const Eb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ta=new aa(_b,bb,Eb);function q0(a){return a instanceof Rn&&a.code.includes("request-failed")}/**
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
 */function B0({projectId:a}){return`${yb}/projects/${a}/installations`}function V0(a){return{token:a.token,requestStatus:2,expiresIn:Sb(a.expiresIn),creationTime:Date.now()}}async function G0(a,i){const o=(await i.json()).error;return ta.create("request-failed",{requestName:a,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function P0({apiKey:a}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":a})}function Tb(a,{refreshToken:i}){const r=P0(a);return r.append("Authorization",xb(i)),r}async function Y0(a){const i=await a();return i.status>=500&&i.status<600?a():i}function Sb(a){return Number(a.replace("s","000"))}function xb(a){return`${H0} ${a}`}/**
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
 */async function Ab({appConfig:a,heartbeatServiceProvider:i},{fid:r}){const o=B0(a),f=P0(a),g=i.getImmediate({optional:!0});if(g){const T=await g.getHeartbeatsHeader();T&&f.append("x-firebase-client",T)}const p={fid:r,authVersion:H0,appId:a.appId,sdkVersion:k0},w={method:"POST",headers:f,body:JSON.stringify(p)},x=await Y0(()=>fetch(o,w));if(x.ok){const T=await x.json();return{fid:T.fid||r,registrationStatus:2,refreshToken:T.refreshToken,authToken:V0(T.authToken)}}else throw await G0("Create Installation",x)}/**
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
 */function X0(a){return new Promise(i=>{setTimeout(i,a)})}/**
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
 */function Nb(a){return btoa(String.fromCharCode(...a)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wb=/^[cdef][\w-]{21}$/,nh="";function Cb(){try{const a=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(a),a[0]=112+a[0]%16;const r=Rb(a);return wb.test(r)?r:nh}catch{return nh}}function Rb(a){return Nb(a).substr(0,22)}/**
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
 */function wu(a){return`${a.appName}!${a.appId}`}/**
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
 */const F0=new Map;function K0(a,i){const r=wu(a);Q0(r,i),Ob(r,i)}function Q0(a,i){const r=F0.get(a);if(r)for(const o of r)o(i)}function Ob(a,i){const r=Db();r&&r.postMessage({key:a,fid:i}),Ib()}let Zs=null;function Db(){return!Zs&&"BroadcastChannel"in self&&(Zs=new BroadcastChannel("[Firebase] FID Change"),Zs.onmessage=a=>{Q0(a.data.key,a.data.fid)}),Zs}function Ib(){F0.size===0&&Zs&&(Zs.close(),Zs=null)}/**
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
 */const Mb="firebase-installations-database",jb=1,na="firebase-installations-store";let Gf=null;function hh(){return Gf||(Gf=I0(Mb,jb,{upgrade:(a,i)=>{switch(i){case 0:a.createObjectStore(na)}}})),Gf}async function yu(a,i){const r=wu(a),f=(await hh()).transaction(na,"readwrite"),g=f.objectStore(na),p=await g.get(r);return await g.put(i,r),await f.done,(!p||p.fid!==i.fid)&&K0(a,i.fid),i}async function Z0(a){const i=wu(a),o=(await hh()).transaction(na,"readwrite");await o.objectStore(na).delete(i),await o.done}async function Cu(a,i){const r=wu(a),f=(await hh()).transaction(na,"readwrite"),g=f.objectStore(na),p=await g.get(r),w=i(p);return w===void 0?await g.delete(r):await g.put(w,r),await f.done,w&&(!p||p.fid!==w.fid)&&K0(a,w.fid),w}/**
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
 */async function dh(a){let i;const r=await Cu(a.appConfig,o=>{const f=Ub(o),g=Lb(a,f);return i=g.registrationPromise,g.installationEntry});return r.fid===nh?{installationEntry:await i}:{installationEntry:r,registrationPromise:i}}function Ub(a){const i=a||{fid:Cb(),registrationStatus:0};return J0(i)}function Lb(a,i){if(i.registrationStatus===0){if(!navigator.onLine){const f=Promise.reject(ta.create("app-offline"));return{installationEntry:i,registrationPromise:f}}const r={fid:i.fid,registrationStatus:1,registrationTime:Date.now()},o=zb(a,r);return{installationEntry:r,registrationPromise:o}}else return i.registrationStatus===1?{installationEntry:i,registrationPromise:kb(a)}:{installationEntry:i}}async function zb(a,i){try{const r=await Ab(a,i);return yu(a.appConfig,r)}catch(r){throw q0(r)&&r.customData.serverCode===409?await Z0(a.appConfig):await yu(a.appConfig,{fid:i.fid,registrationStatus:0}),r}}async function kb(a){let i=await Ap(a.appConfig);for(;i.registrationStatus===1;)await X0(100),i=await Ap(a.appConfig);if(i.registrationStatus===0){const{installationEntry:r,registrationPromise:o}=await dh(a);return o||r}return i}function Ap(a){return Cu(a,i=>{if(!i)throw ta.create("installation-not-found");return J0(i)})}function J0(a){return Hb(a)?{fid:a.fid,registrationStatus:0}:a}function Hb(a){return a.registrationStatus===1&&a.registrationTime+z0<Date.now()}/**
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
 */async function qb({appConfig:a,heartbeatServiceProvider:i},r){const o=Bb(a,r),f=Tb(a,r),g=i.getImmediate({optional:!0});if(g){const T=await g.getHeartbeatsHeader();T&&f.append("x-firebase-client",T)}const p={installation:{sdkVersion:k0,appId:a.appId}},w={method:"POST",headers:f,body:JSON.stringify(p)},x=await Y0(()=>fetch(o,w));if(x.ok){const T=await x.json();return V0(T)}else throw await G0("Generate Auth Token",x)}function Bb(a,{fid:i}){return`${B0(a)}/${i}/authTokens:generate`}/**
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
 */async function gh(a,i=!1){let r;const o=await Cu(a.appConfig,g=>{if(!$0(g))throw ta.create("not-registered");const p=g.authToken;if(!i&&Pb(p))return g;if(p.requestStatus===1)return r=Vb(a,i),g;{if(!navigator.onLine)throw ta.create("app-offline");const w=Xb(g);return r=Gb(a,w),w}});return r?await r:o.authToken}async function Vb(a,i){let r=await Np(a.appConfig);for(;r.authToken.requestStatus===1;)await X0(100),r=await Np(a.appConfig);const o=r.authToken;return o.requestStatus===0?gh(a,i):o}function Np(a){return Cu(a,i=>{if(!$0(i))throw ta.create("not-registered");const r=i.authToken;return Fb(r)?{...i,authToken:{requestStatus:0}}:i})}async function Gb(a,i){try{const r=await qb(a,i),o={...i,authToken:r};return await yu(a.appConfig,o),r}catch(r){if(q0(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await Z0(a.appConfig);else{const o={...i,authToken:{requestStatus:0}};await yu(a.appConfig,o)}throw r}}function $0(a){return a!==void 0&&a.registrationStatus===2}function Pb(a){return a.requestStatus===2&&!Yb(a)}function Yb(a){const i=Date.now();return i<a.creationTime||a.creationTime+a.expiresIn<i+vb}function Xb(a){const i={requestStatus:1,requestTime:Date.now()};return{...a,authToken:i}}function Fb(a){return a.requestStatus===1&&a.requestTime+z0<Date.now()}/**
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
 */async function Kb(a){const i=a,{installationEntry:r,registrationPromise:o}=await dh(i);return o?o.catch(console.error):gh(i).catch(console.error),r.fid}/**
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
 */async function Qb(a,i=!1){const r=a;return await Zb(r),(await gh(r,i)).token}async function Zb(a){const{registrationPromise:i}=await dh(a);i&&await i}/**
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
 */function Jb(a){if(!a||!a.options)throw Pf("App Configuration");if(!a.name)throw Pf("App Name");const i=["projectId","apiKey","appId"];for(const r of i)if(!a.options[r])throw Pf(r);return{appName:a.name,projectId:a.options.projectId,apiKey:a.options.apiKey,appId:a.options.appId}}function Pf(a){return ta.create("missing-app-config-values",{valueName:a})}/**
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
 */const W0="installations",$b="installations-internal",Wb=a=>{const i=a.getProvider("app").getImmediate(),r=Jb(i),o=ra(i,"heartbeat");return{app:i,appConfig:r,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},eE=a=>{const i=a.getProvider("app").getImmediate(),r=ra(i,W0).getImmediate();return{getId:()=>Kb(r),getToken:f=>Qb(r,f)}};function tE(){ii(new Cn(W0,Wb,"PUBLIC")),ii(new Cn($b,eE,"PRIVATE"))}tE();hn(L0,fh);hn(L0,fh,"esm2020");/**
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
 */const vu="analytics",nE="firebase_id",iE="origin",sE=60*1e3,aE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",mh="https://www.googletagmanager.com/gtag/js";/**
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
 */const jt=new Nu("@firebase/analytics");/**
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
 */const rE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new aa("analytics","Analytics",rE);/**
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
 */function lE(a){if(!a.startsWith(mh)){const i=$t.create("invalid-gtag-resource",{gtagURL:a});return jt.warn(i.message),""}return a}function ey(a){return Promise.all(a.map(i=>i.catch(r=>r)))}function oE(a,i){let r;return window.trustedTypes&&(r=window.trustedTypes.createPolicy(a,i)),r}function uE(a,i){const r=oE("firebase-js-sdk-policy",{createScriptURL:lE}),o=document.createElement("script"),f=`${mh}?l=${a}&id=${i}`;o.src=r?r==null?void 0:r.createScriptURL(f):f,o.async=!0,document.head.appendChild(o)}function cE(a){let i=[];return Array.isArray(window[a])?i=window[a]:window[a]=i,i}async function fE(a,i,r,o,f,g){const p=o[f];try{if(p)await i[p];else{const x=(await ey(r)).find(T=>T.measurementId===f);x&&await i[x.appId]}}catch(w){jt.error(w)}a("config",f,g)}async function hE(a,i,r,o,f){try{let g=[];if(f&&f.send_to){let p=f.send_to;Array.isArray(p)||(p=[p]);const w=await ey(r);for(const x of p){const T=w.find(j=>j.measurementId===x),P=T&&i[T.appId];if(P)g.push(P);else{g=[];break}}}g.length===0&&(g=Object.values(i)),await Promise.all(g),a("event",o,f||{})}catch(g){jt.error(g)}}function dE(a,i,r,o){async function f(g,...p){try{if(g==="event"){const[w,x]=p;await hE(a,i,r,w,x)}else if(g==="config"){const[w,x]=p;await fE(a,i,r,o,w,x)}else if(g==="consent"){const[w,x]=p;a("consent",w,x)}else if(g==="get"){const[w,x,T]=p;a("get",w,x,T)}else if(g==="set"){const[w]=p;a("set",w)}else a(g,...p)}catch(w){jt.error(w)}}return f}function gE(a,i,r,o,f){let g=function(...p){window[o].push(arguments)};return window[f]&&typeof window[f]=="function"&&(g=window[f]),window[f]=dE(g,a,i,r),{gtagCore:g,wrappedGtag:window[f]}}function mE(a){const i=window.document.getElementsByTagName("script");for(const r of Object.values(i))if(r.src&&r.src.includes(mh)&&r.src.includes(a))return r;return null}/**
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
 */const pE=30,yE=1e3;class vE{constructor(i={},r=yE){this.throttleMetadata=i,this.intervalMillis=r}getThrottleMetadata(i){return this.throttleMetadata[i]}setThrottleMetadata(i,r){this.throttleMetadata[i]=r}deleteThrottleMetadata(i){delete this.throttleMetadata[i]}}const ty=new vE;function _E(a){return new Headers({Accept:"application/json","x-goog-api-key":a})}async function bE(a){var p;const{appId:i,apiKey:r}=a,o={method:"GET",headers:_E(r)},f=aE.replace("{app-id}",i),g=await fetch(f,o);if(g.status!==200&&g.status!==304){let w="";try{const x=await g.json();(p=x.error)!=null&&p.message&&(w=x.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:g.status,responseMessage:w})}return g.json()}async function EE(a,i=ty,r){const{appId:o,apiKey:f,measurementId:g}=a.options;if(!o)throw $t.create("no-app-id");if(!f){if(g)return{measurementId:g,appId:o};throw $t.create("no-api-key")}const p=i.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},w=new xE;return setTimeout(async()=>{w.abort()},sE),ny({appId:o,apiKey:f,measurementId:g},p,w,i)}async function ny(a,{throttleEndTimeMillis:i,backoffCount:r},o,f=ty){var w;const{appId:g,measurementId:p}=a;try{await TE(o,i)}catch(x){if(p)return jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${x==null?void 0:x.message}]`),{appId:g,measurementId:p};throw x}try{const x=await bE(a);return f.deleteThrottleMetadata(g),x}catch(x){const T=x;if(!SE(T)){if(f.deleteThrottleMetadata(g),p)return jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${T==null?void 0:T.message}]`),{appId:g,measurementId:p};throw x}const P=Number((w=T==null?void 0:T.customData)==null?void 0:w.httpStatus)===503?pp(r,f.intervalMillis,pE):pp(r,f.intervalMillis),j={throttleEndTimeMillis:Date.now()+P,backoffCount:r+1};return f.setThrottleMetadata(g,j),jt.debug(`Calling attemptFetch again in ${P} millis`),ny(a,j,o,f)}}function TE(a,i){return new Promise((r,o)=>{const f=Math.max(i-Date.now(),0),g=setTimeout(r,f);a.addEventListener(()=>{clearTimeout(g),o($t.create("fetch-throttle",{throttleEndTimeMillis:i}))})})}function SE(a){if(!(a instanceof Rn)||!a.customData)return!1;const i=Number(a.customData.httpStatus);return i===429||i===500||i===503||i===504}class xE{constructor(){this.listeners=[]}addEventListener(i){this.listeners.push(i)}abort(){this.listeners.forEach(i=>i())}}async function AE(a,i,r,o,f){if(f&&f.global){a("event",r,o);return}else{const g=await i,p={...o,send_to:g};a("event",r,p)}}async function NE(a,i,r,o){if(o&&o.global){const f={};for(const g of Object.keys(r))f[`user_properties.${g}`]=r[g];return a("set",f),Promise.resolve()}else{const f=await i;a("config",f,{update:!0,user_properties:r})}}/**
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
 */async function wE(){if(C0())try{await R0()}catch(a){return jt.warn($t.create("indexeddb-unavailable",{errorInfo:a==null?void 0:a.toString()}).message),!1}else return jt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CE(a,i,r,o,f,g,p){const w=EE(a);w.then(B=>{r[B.measurementId]=B.appId,a.options.measurementId&&B.measurementId!==a.options.measurementId&&jt.warn(`The measurement ID in the local Firebase config (${a.options.measurementId}) does not match the measurement ID fetched from the server (${B.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(B=>jt.error(B)),i.push(w);const x=wE().then(B=>{if(B)return o.getId()}),[T,P]=await Promise.all([w,x]);mE(g)||uE(g,T.measurementId),f("js",new Date);const j=(p==null?void 0:p.config)??{};return j[iE]="firebase",j.update=!0,P!=null&&(j[nE]=P),f("config",T.measurementId,j),T.measurementId}/**
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
 */class RE{constructor(i){this.app=i}_delete(){return delete Wa[this.app.options.appId],Promise.resolve()}}let Wa={},wp=[];const Cp={};let Yf="dataLayer",OE="gtag",Rp,ph,Op=!1;function DE(){const a=[];if(w0()&&a.push("This is a browser extension environment."),Z2()||a.push("Cookies are not available."),a.length>0){const i=a.map((o,f)=>`(${f+1}) ${o}`).join(" "),r=$t.create("invalid-analytics-context",{errorInfo:i});jt.warn(r.message)}}function IE(a,i,r){DE();const o=a.options.appId;if(!o)throw $t.create("no-app-id");if(!a.options.apiKey)if(a.options.measurementId)jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${a.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(Wa[o]!=null)throw $t.create("already-exists",{id:o});if(!Op){cE(Yf);const{wrappedGtag:g,gtagCore:p}=gE(Wa,wp,Cp,Yf,OE);ph=g,Rp=p,Op=!0}return Wa[o]=CE(a,wp,Cp,i,Rp,Yf,r),new RE(a)}function ME(a=ch()){a=Ri(a);const i=ra(a,vu);return i.isInitialized()?i.getImmediate():jE(a)}function jE(a,i={}){const r=ra(a,vu);if(r.isInitialized()){const f=r.getImmediate();if(ps(i,r.getOptions()))return f;throw $t.create("already-initialized")}return r.initialize({options:i})}function UE(a,i,r){a=Ri(a),NE(ph,Wa[a.app.options.appId],i,r).catch(o=>jt.error(o))}function LE(a,i,r,o){a=Ri(a),AE(ph,Wa[a.app.options.appId],i,r,o).catch(f=>jt.error(f))}const Dp="@firebase/analytics",Ip="0.10.19";function zE(){ii(new Cn(vu,(i,{options:r})=>{const o=i.getProvider("app").getImmediate(),f=i.getProvider("installations-internal").getImmediate();return IE(o,f,r)},"PUBLIC")),ii(new Cn("analytics-internal",a,"PRIVATE")),hn(Dp,Ip),hn(Dp,Ip,"esm2020");function a(i){try{const r=i.getProvider(vu).getImmediate();return{logEvent:(o,f,g)=>LE(r,o,f,g),setUserProperties:(o,f)=>UE(r,o,f)}}catch(r){throw $t.create("interop-component-reg-failed",{reason:r})}}}zE();var Mp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yh;(function(){var a;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function i(S,E){function b(){}b.prototype=E.prototype,S.F=E.prototype,S.prototype=new b,S.prototype.constructor=S,S.D=function(C,R,I){for(var A=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)A[Xe-2]=arguments[Xe];return E.prototype[R].apply(C,A)}}function r(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}i(o,r),o.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function f(S,E,b){b||(b=0);const C=Array(16);if(typeof E=="string")for(var R=0;R<16;++R)C[R]=E.charCodeAt(b++)|E.charCodeAt(b++)<<8|E.charCodeAt(b++)<<16|E.charCodeAt(b++)<<24;else for(R=0;R<16;++R)C[R]=E[b++]|E[b++]<<8|E[b++]<<16|E[b++]<<24;E=S.g[0],b=S.g[1],R=S.g[2];let I=S.g[3],A;A=E+(I^b&(R^I))+C[0]+3614090360&4294967295,E=b+(A<<7&4294967295|A>>>25),A=I+(R^E&(b^R))+C[1]+3905402710&4294967295,I=E+(A<<12&4294967295|A>>>20),A=R+(b^I&(E^b))+C[2]+606105819&4294967295,R=I+(A<<17&4294967295|A>>>15),A=b+(E^R&(I^E))+C[3]+3250441966&4294967295,b=R+(A<<22&4294967295|A>>>10),A=E+(I^b&(R^I))+C[4]+4118548399&4294967295,E=b+(A<<7&4294967295|A>>>25),A=I+(R^E&(b^R))+C[5]+1200080426&4294967295,I=E+(A<<12&4294967295|A>>>20),A=R+(b^I&(E^b))+C[6]+2821735955&4294967295,R=I+(A<<17&4294967295|A>>>15),A=b+(E^R&(I^E))+C[7]+4249261313&4294967295,b=R+(A<<22&4294967295|A>>>10),A=E+(I^b&(R^I))+C[8]+1770035416&4294967295,E=b+(A<<7&4294967295|A>>>25),A=I+(R^E&(b^R))+C[9]+2336552879&4294967295,I=E+(A<<12&4294967295|A>>>20),A=R+(b^I&(E^b))+C[10]+4294925233&4294967295,R=I+(A<<17&4294967295|A>>>15),A=b+(E^R&(I^E))+C[11]+2304563134&4294967295,b=R+(A<<22&4294967295|A>>>10),A=E+(I^b&(R^I))+C[12]+1804603682&4294967295,E=b+(A<<7&4294967295|A>>>25),A=I+(R^E&(b^R))+C[13]+4254626195&4294967295,I=E+(A<<12&4294967295|A>>>20),A=R+(b^I&(E^b))+C[14]+2792965006&4294967295,R=I+(A<<17&4294967295|A>>>15),A=b+(E^R&(I^E))+C[15]+1236535329&4294967295,b=R+(A<<22&4294967295|A>>>10),A=E+(R^I&(b^R))+C[1]+4129170786&4294967295,E=b+(A<<5&4294967295|A>>>27),A=I+(b^R&(E^b))+C[6]+3225465664&4294967295,I=E+(A<<9&4294967295|A>>>23),A=R+(E^b&(I^E))+C[11]+643717713&4294967295,R=I+(A<<14&4294967295|A>>>18),A=b+(I^E&(R^I))+C[0]+3921069994&4294967295,b=R+(A<<20&4294967295|A>>>12),A=E+(R^I&(b^R))+C[5]+3593408605&4294967295,E=b+(A<<5&4294967295|A>>>27),A=I+(b^R&(E^b))+C[10]+38016083&4294967295,I=E+(A<<9&4294967295|A>>>23),A=R+(E^b&(I^E))+C[15]+3634488961&4294967295,R=I+(A<<14&4294967295|A>>>18),A=b+(I^E&(R^I))+C[4]+3889429448&4294967295,b=R+(A<<20&4294967295|A>>>12),A=E+(R^I&(b^R))+C[9]+568446438&4294967295,E=b+(A<<5&4294967295|A>>>27),A=I+(b^R&(E^b))+C[14]+3275163606&4294967295,I=E+(A<<9&4294967295|A>>>23),A=R+(E^b&(I^E))+C[3]+4107603335&4294967295,R=I+(A<<14&4294967295|A>>>18),A=b+(I^E&(R^I))+C[8]+1163531501&4294967295,b=R+(A<<20&4294967295|A>>>12),A=E+(R^I&(b^R))+C[13]+2850285829&4294967295,E=b+(A<<5&4294967295|A>>>27),A=I+(b^R&(E^b))+C[2]+4243563512&4294967295,I=E+(A<<9&4294967295|A>>>23),A=R+(E^b&(I^E))+C[7]+1735328473&4294967295,R=I+(A<<14&4294967295|A>>>18),A=b+(I^E&(R^I))+C[12]+2368359562&4294967295,b=R+(A<<20&4294967295|A>>>12),A=E+(b^R^I)+C[5]+4294588738&4294967295,E=b+(A<<4&4294967295|A>>>28),A=I+(E^b^R)+C[8]+2272392833&4294967295,I=E+(A<<11&4294967295|A>>>21),A=R+(I^E^b)+C[11]+1839030562&4294967295,R=I+(A<<16&4294967295|A>>>16),A=b+(R^I^E)+C[14]+4259657740&4294967295,b=R+(A<<23&4294967295|A>>>9),A=E+(b^R^I)+C[1]+2763975236&4294967295,E=b+(A<<4&4294967295|A>>>28),A=I+(E^b^R)+C[4]+1272893353&4294967295,I=E+(A<<11&4294967295|A>>>21),A=R+(I^E^b)+C[7]+4139469664&4294967295,R=I+(A<<16&4294967295|A>>>16),A=b+(R^I^E)+C[10]+3200236656&4294967295,b=R+(A<<23&4294967295|A>>>9),A=E+(b^R^I)+C[13]+681279174&4294967295,E=b+(A<<4&4294967295|A>>>28),A=I+(E^b^R)+C[0]+3936430074&4294967295,I=E+(A<<11&4294967295|A>>>21),A=R+(I^E^b)+C[3]+3572445317&4294967295,R=I+(A<<16&4294967295|A>>>16),A=b+(R^I^E)+C[6]+76029189&4294967295,b=R+(A<<23&4294967295|A>>>9),A=E+(b^R^I)+C[9]+3654602809&4294967295,E=b+(A<<4&4294967295|A>>>28),A=I+(E^b^R)+C[12]+3873151461&4294967295,I=E+(A<<11&4294967295|A>>>21),A=R+(I^E^b)+C[15]+530742520&4294967295,R=I+(A<<16&4294967295|A>>>16),A=b+(R^I^E)+C[2]+3299628645&4294967295,b=R+(A<<23&4294967295|A>>>9),A=E+(R^(b|~I))+C[0]+4096336452&4294967295,E=b+(A<<6&4294967295|A>>>26),A=I+(b^(E|~R))+C[7]+1126891415&4294967295,I=E+(A<<10&4294967295|A>>>22),A=R+(E^(I|~b))+C[14]+2878612391&4294967295,R=I+(A<<15&4294967295|A>>>17),A=b+(I^(R|~E))+C[5]+4237533241&4294967295,b=R+(A<<21&4294967295|A>>>11),A=E+(R^(b|~I))+C[12]+1700485571&4294967295,E=b+(A<<6&4294967295|A>>>26),A=I+(b^(E|~R))+C[3]+2399980690&4294967295,I=E+(A<<10&4294967295|A>>>22),A=R+(E^(I|~b))+C[10]+4293915773&4294967295,R=I+(A<<15&4294967295|A>>>17),A=b+(I^(R|~E))+C[1]+2240044497&4294967295,b=R+(A<<21&4294967295|A>>>11),A=E+(R^(b|~I))+C[8]+1873313359&4294967295,E=b+(A<<6&4294967295|A>>>26),A=I+(b^(E|~R))+C[15]+4264355552&4294967295,I=E+(A<<10&4294967295|A>>>22),A=R+(E^(I|~b))+C[6]+2734768916&4294967295,R=I+(A<<15&4294967295|A>>>17),A=b+(I^(R|~E))+C[13]+1309151649&4294967295,b=R+(A<<21&4294967295|A>>>11),A=E+(R^(b|~I))+C[4]+4149444226&4294967295,E=b+(A<<6&4294967295|A>>>26),A=I+(b^(E|~R))+C[11]+3174756917&4294967295,I=E+(A<<10&4294967295|A>>>22),A=R+(E^(I|~b))+C[2]+718787259&4294967295,R=I+(A<<15&4294967295|A>>>17),A=b+(I^(R|~E))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+E&4294967295,S.g[1]=S.g[1]+(R+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+I&4294967295}o.prototype.v=function(S,E){E===void 0&&(E=S.length);const b=E-this.blockSize,C=this.C;let R=this.h,I=0;for(;I<E;){if(R==0)for(;I<=b;)f(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<E;)if(C[R++]=S.charCodeAt(I++),R==this.blockSize){f(this,C),R=0;break}}else for(;I<E;)if(C[R++]=S[I++],R==this.blockSize){f(this,C),R=0;break}}this.h=R,this.o+=E},o.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var E=1;E<S.length-8;++E)S[E]=0;E=this.o*8;for(var b=S.length-8;b<S.length;++b)S[b]=E&255,E/=256;for(this.v(S),S=Array(16),E=0,b=0;b<4;++b)for(let C=0;C<32;C+=8)S[E++]=this.g[b]>>>C&255;return S};function g(S,E){var b=w;return Object.prototype.hasOwnProperty.call(b,S)?b[S]:b[S]=E(S)}function p(S,E){this.h=E;const b=[];let C=!0;for(let R=S.length-1;R>=0;R--){const I=S[R]|0;C&&I==E||(b[R]=I,C=!1)}this.g=b}var w={};function x(S){return-128<=S&&S<128?g(S,function(E){return new p([E|0],E<0?-1:0)}):new p([S|0],S<0?-1:0)}function T(S){if(isNaN(S)||!isFinite(S))return j;if(S<0)return le(T(-S));const E=[];let b=1;for(let C=0;S>=b;C++)E[C]=S/b|0,b*=4294967296;return new p(E,0)}function P(S,E){if(S.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(S.charAt(0)=="-")return le(P(S.substring(1),E));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=T(Math.pow(E,8));let C=j;for(let I=0;I<S.length;I+=8){var R=Math.min(8,S.length-I);const A=parseInt(S.substring(I,I+R),E);R<8?(R=T(Math.pow(E,R)),C=C.j(R).add(T(A))):(C=C.j(b),C=C.add(T(A)))}return C}var j=x(0),B=x(1),se=x(16777216);a=p.prototype,a.m=function(){if(ne(this))return-le(this).m();let S=0,E=1;for(let b=0;b<this.g.length;b++){const C=this.i(b);S+=(C>=0?C:4294967296+C)*E,E*=4294967296}return S},a.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(ee(this))return"0";if(ne(this))return"-"+le(this).toString(S);const E=T(Math.pow(S,6));var b=this;let C="";for(;;){const R=je(b,E).g;b=re(b,R.j(E));let I=((b.g.length>0?b.g[0]:b.h)>>>0).toString(S);if(b=R,ee(b))return I+C;for(;I.length<6;)I="0"+I;C=I+C}},a.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function ee(S){if(S.h!=0)return!1;for(let E=0;E<S.g.length;E++)if(S.g[E]!=0)return!1;return!0}function ne(S){return S.h==-1}a.l=function(S){return S=re(this,S),ne(S)?-1:ee(S)?0:1};function le(S){const E=S.g.length,b=[];for(let C=0;C<E;C++)b[C]=~S.g[C];return new p(b,~S.h).add(B)}a.abs=function(){return ne(this)?le(this):this},a.add=function(S){const E=Math.max(this.g.length,S.g.length),b=[];let C=0;for(let R=0;R<=E;R++){let I=C+(this.i(R)&65535)+(S.i(R)&65535),A=(I>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);C=A>>>16,I&=65535,A&=65535,b[R]=A<<16|I}return new p(b,b[b.length-1]&-2147483648?-1:0)};function re(S,E){return S.add(le(E))}a.j=function(S){if(ee(this)||ee(S))return j;if(ne(this))return ne(S)?le(this).j(le(S)):le(le(this).j(S));if(ne(S))return le(this.j(le(S)));if(this.l(se)<0&&S.l(se)<0)return T(this.m()*S.m());const E=this.g.length+S.g.length,b=[];for(var C=0;C<2*E;C++)b[C]=0;for(C=0;C<this.g.length;C++)for(let R=0;R<S.g.length;R++){const I=this.i(C)>>>16,A=this.i(C)&65535,Xe=S.i(R)>>>16,Qe=S.i(R)&65535;b[2*C+2*R]+=A*Qe,ie(b,2*C+2*R),b[2*C+2*R+1]+=I*Qe,ie(b,2*C+2*R+1),b[2*C+2*R+1]+=A*Xe,ie(b,2*C+2*R+1),b[2*C+2*R+2]+=I*Xe,ie(b,2*C+2*R+2)}for(S=0;S<E;S++)b[S]=b[2*S+1]<<16|b[2*S];for(S=E;S<2*E;S++)b[S]=0;return new p(b,0)};function ie(S,E){for(;(S[E]&65535)!=S[E];)S[E+1]+=S[E]>>>16,S[E]&=65535,E++}function oe(S,E){this.g=S,this.h=E}function je(S,E){if(ee(E))throw Error("division by zero");if(ee(S))return new oe(j,j);if(ne(S))return E=je(le(S),E),new oe(le(E.g),le(E.h));if(ne(E))return E=je(S,le(E)),new oe(le(E.g),E.h);if(S.g.length>30){if(ne(S)||ne(E))throw Error("slowDivide_ only works with positive integers.");for(var b=B,C=E;C.l(S)<=0;)b=qe(b),C=qe(C);var R=Re(b,1),I=Re(C,1);for(C=Re(C,2),b=Re(b,2);!ee(C);){var A=I.add(C);A.l(S)<=0&&(R=R.add(b),I=A),C=Re(C,1),b=Re(b,1)}return E=re(S,R.j(E)),new oe(R,E)}for(R=j;S.l(E)>=0;){for(b=Math.max(1,Math.floor(S.m()/E.m())),C=Math.ceil(Math.log(b)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),I=T(b),A=I.j(E);ne(A)||A.l(S)>0;)b-=C,I=T(b),A=I.j(E);ee(I)&&(I=B),R=R.add(I),S=re(S,A)}return new oe(R,S)}a.B=function(S){return je(this,S).h},a.and=function(S){const E=Math.max(this.g.length,S.g.length),b=[];for(let C=0;C<E;C++)b[C]=this.i(C)&S.i(C);return new p(b,this.h&S.h)},a.or=function(S){const E=Math.max(this.g.length,S.g.length),b=[];for(let C=0;C<E;C++)b[C]=this.i(C)|S.i(C);return new p(b,this.h|S.h)},a.xor=function(S){const E=Math.max(this.g.length,S.g.length),b=[];for(let C=0;C<E;C++)b[C]=this.i(C)^S.i(C);return new p(b,this.h^S.h)};function qe(S){const E=S.g.length+1,b=[];for(let C=0;C<E;C++)b[C]=S.i(C)<<1|S.i(C-1)>>>31;return new p(b,S.h)}function Re(S,E){const b=E>>5;E%=32;const C=S.g.length-b,R=[];for(let I=0;I<C;I++)R[I]=E>0?S.i(I+b)>>>E|S.i(I+b+1)<<32-E:S.i(I+b);return new p(R,S.h)}o.prototype.digest=o.prototype.A,o.prototype.reset=o.prototype.u,o.prototype.update=o.prototype.v,p.prototype.add=p.prototype.add,p.prototype.multiply=p.prototype.j,p.prototype.modulo=p.prototype.B,p.prototype.compare=p.prototype.l,p.prototype.toNumber=p.prototype.m,p.prototype.toString=p.prototype.toString,p.prototype.getBits=p.prototype.i,p.fromNumber=T,p.fromString=P,yh=p}).apply(typeof Mp<"u"?Mp:typeof self<"u"?self:typeof window<"u"?window:{});var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var a,i=Object.defineProperty;function r(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof lu=="object"&&lu];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var o=r(this);function f(l,h){if(h)e:{var m=o;l=l.split(".");for(var _=0;_<l.length-1;_++){var U=l[_];if(!(U in m))break e;m=m[U]}l=l[l.length-1],_=m[l],h=h(_),h!=_&&h!=null&&i(m,l,{configurable:!0,writable:!0,value:h})}}f("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),f("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),f("Object.entries",function(l){return l||function(h){var m=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&m.push([_,h[_]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var g=g||{},p=this||self;function w(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function x(l,h,m){return l.call.apply(l.bind,arguments)}function T(l,h,m){return T=x,T.apply(null,arguments)}function P(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function j(l,h){function m(){}m.prototype=h.prototype,l.Z=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Ob=function(_,U,H){for(var Q=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)Q[ge-2]=arguments[ge];return h.prototype[U].apply(_,Q)}}var B=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function se(l){const h=l.length;if(h>0){const m=Array(h);for(let _=0;_<h;_++)m[_]=l[_];return m}return[]}function ee(l,h){for(let _=1;_<arguments.length;_++){const U=arguments[_];var m=typeof U;if(m=m!="object"?m:U?Array.isArray(U)?"array":m:"null",m=="array"||m=="object"&&typeof U.length=="number"){m=l.length||0;const H=U.length||0;l.length=m+H;for(let Q=0;Q<H;Q++)l[m+Q]=U[Q]}else l.push(U)}}class ne{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function le(l){p.setTimeout(()=>{throw l},0)}function re(){var l=S;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ie{constructor(){this.h=this.g=null}add(h,m){const _=oe.get();_.set(h,m),this.h?this.h.next=_:this.g=_,this.h=_}}var oe=new ne(()=>new je,l=>l.reset());class je{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,Re=!1,S=new ie,E=()=>{const l=Promise.resolve(void 0);qe=()=>{l.then(b)}};function b(){for(var l;l=re();){try{l.h.call(l.g)}catch(m){le(m)}var h=oe;h.j(l),h.h<100&&(h.h++,l.next=h.g,h.g=l)}Re=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};p.addEventListener("test",m,h),p.removeEventListener("test",m,h)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function Xe(l,h){R.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,h)}j(Xe,R),Xe.prototype.init=function(l,h){const m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget,h||(m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Xe.Z.h.call(this)},Xe.prototype.h=function(){Xe.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Qe="closure_listenable_"+(Math.random()*1e6|0),V=0;function Z(l,h,m,_,U){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!_,this.ha=U,this.key=++V,this.da=this.fa=!1}function ue(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ce(l,h,m){for(const _ in l)h.call(m,l[_],_,l)}function Ue(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function D(l){const h={};for(const m in l)h[m]=l[m];return h}const K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function J(l,h){let m,_;for(let U=1;U<arguments.length;U++){_=arguments[U];for(m in _)l[m]=_[m];for(let H=0;H<K.length;H++)m=K[H],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function $(l){this.src=l,this.g={},this.h=0}$.prototype.add=function(l,h,m,_,U){const H=l.toString();l=this.g[H],l||(l=this.g[H]=[],this.h++);const Q=pe(l,h,_,U);return Q>-1?(h=l[Q],m||(h.fa=!1)):(h=new Z(h,this.src,H,!!_,U),h.fa=m,l.push(h)),h};function he(l,h){const m=h.type;if(m in l.g){var _=l.g[m],U=Array.prototype.indexOf.call(_,h,void 0),H;(H=U>=0)&&Array.prototype.splice.call(_,U,1),H&&(ue(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function pe(l,h,m,_){for(let U=0;U<l.length;++U){const H=l[U];if(!H.da&&H.listener==h&&H.capture==!!m&&H.ha==_)return U}return-1}var xe="closure_lm_"+(Math.random()*1e6|0),pt={};function Ze(l,h,m,_,U){if(Array.isArray(h)){for(let H=0;H<h.length;H++)Ze(l,h[H],m,_,U);return null}return m=cr(m),l&&l[Qe]?l.J(h,m,w(_)?!!_.capture:!1,U):vs(l,h,m,!1,_,U)}function vs(l,h,m,_,U,H){if(!h)throw Error("Invalid event type");const Q=w(U)?!!U.capture:!!U;let ge=_s(l);if(ge||(l[xe]=ge=new $(l)),m=ge.add(h,m,_,Q,H),m.proxy)return m;if(_=la(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)I||(U=Q),U===void 0&&(U=!1),l.addEventListener(h.toString(),_,U);else if(l.attachEvent)l.attachEvent(On(h.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function la(){function l(m){return h.call(l.src,l.listener,m)}const h=or;return l}function oa(l,h,m,_,U){if(Array.isArray(h))for(var H=0;H<h.length;H++)oa(l,h[H],m,_,U);else _=w(_)?!!_.capture:!!_,m=cr(m),l&&l[Qe]?(l=l.i,H=String(h).toString(),H in l.g&&(h=l.g[H],m=pe(h,m,_,U),m>-1&&(ue(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete l.g[H],l.h--)))):l&&(l=_s(l))&&(h=l.g[h.toString()],l=-1,h&&(l=pe(h,m,_,U)),(m=l>-1?h[l]:null)&&ua(m))}function ua(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Qe])he(h.i,l);else{var m=l.type,_=l.proxy;h.removeEventListener?h.removeEventListener(m,_,l.capture):h.detachEvent?h.detachEvent(On(m),_):h.addListener&&h.removeListener&&h.removeListener(_),(m=_s(h))?(he(m,l),m.h==0&&(m.src=null,h[xe]=null)):ue(l)}}}function On(l){return l in pt?pt[l]:pt[l]="on"+l}function or(l,h){if(l.da)l=!0;else{h=new Xe(h,this);const m=l.listener,_=l.ha||l.src;l.fa&&ua(l),l=m.call(_,h)}return l}function _s(l){return l=l[xe],l instanceof $?l:null}var ur="__closure_events_fn_"+(Math.random()*1e9>>>0);function cr(l){return typeof l=="function"?l:(l[ur]||(l[ur]=function(h){return l.handleEvent(h)}),l[ur])}function at(){C.call(this),this.i=new $(this),this.M=this,this.G=null}j(at,C),at.prototype[Qe]=!0,at.prototype.removeEventListener=function(l,h,m,_){oa(this,l,h,m,_)};function yt(l,h){var m,_=l.G;if(_)for(m=[];_;_=_.G)m.push(_);if(l=l.M,_=h.type||h,typeof h=="string")h=new R(h,l);else if(h instanceof R)h.target=h.target||l;else{var U=h;h=new R(_,l),J(h,U)}U=!0;let H,Q;if(m)for(Q=m.length-1;Q>=0;Q--)H=h.g=m[Q],U=Oi(H,_,!0,h)&&U;if(H=h.g=l,U=Oi(H,_,!0,h)&&U,U=Oi(H,_,!1,h)&&U,m)for(Q=0;Q<m.length;Q++)H=h.g=m[Q],U=Oi(H,_,!1,h)&&U}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var l=this.i;for(const h in l.g){const m=l.g[h];for(let _=0;_<m.length;_++)ue(m[_]);delete l.g[h],l.h--}}this.G=null},at.prototype.J=function(l,h,m,_){return this.i.add(String(l),h,!1,m,_)},at.prototype.K=function(l,h,m,_){return this.i.add(String(l),h,!0,m,_)};function Oi(l,h,m,_){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();let U=!0;for(let H=0;H<h.length;++H){const Q=h[H];if(Q&&!Q.da&&Q.capture==m){const ge=Q.listener,nt=Q.ha||Q.src;Q.fa&&he(l.i,Q),U=ge.call(nt,_)!==!1&&U}}return U&&!_.defaultPrevented}function Du(l,h){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=T(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:p.setTimeout(l,h||0)}function Dl(l){l.g=Du(()=>{l.g=null,l.i&&(l.i=!1,Dl(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Dt extends C{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Dl(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(l){C.call(this),this.h=l,this.g={}}j(bs,C);var fr=[];function hr(l){Ce(l.g,function(h,m){this.g.hasOwnProperty(m)&&ua(h)},l),l.g={}}bs.prototype.N=function(){bs.Z.N.call(this),hr(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Di=p.JSON.stringify,Iu=p.JSON.parse,Il=class{stringify(l){return p.JSON.stringify(l,void 0)}parse(l){return p.JSON.parse(l,void 0)}};function Ml(){}function Mu(){}var dn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Tt(){R.call(this,"d")}j(Tt,R);function Wt(){R.call(this,"c")}j(Wt,R);var rt={},jl=null;function dr(){return jl=jl||new at}rt.Ia="serverreachability";function Ul(l){R.call(this,rt.Ia,l)}j(Ul,R);function Dn(l){const h=dr();yt(h,new Ul(h))}rt.STAT_EVENT="statevent";function Es(l,h){R.call(this,rt.STAT_EVENT,l),this.stat=h}j(Es,R);function lt(l){const h=dr();yt(h,new Es(h,l))}rt.Ja="timingevent";function In(l,h){R.call(this,rt.Ja,l),this.size=h}j(In,R);function Mn(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){l()},h)}function gn(){this.g=!0}gn.prototype.ua=function(){this.g=!1};function ju(l,h,m,_,U,H){l.info(function(){if(l.g)if(H){var Q="",ge=H.split("&");for(let ze=0;ze<ge.length;ze++){var nt=ge[ze].split("=");if(nt.length>1){const $e=nt[0];nt=nt[1];const Rt=$e.split("_");Q=Rt.length>=2&&Rt[1]=="type"?Q+($e+"="+nt+"&"):Q+($e+"=redacted&")}}}else Q=null;else Q=H;return"XMLHTTP REQ ("+_+") [attempt "+U+"]: "+h+`
`+m+`
`+Q})}function Ll(l,h,m,_,U,H,Q){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+U+"]: "+h+`
`+m+`
`+H+" "+Q})}function jn(l,h,m,_){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+Uu(l,m)+(_?" "+_:"")})}function Ts(l,h){l.info(function(){return"TIMEOUT: "+h})}gn.prototype.info=function(){};function Uu(l,h){if(!l.g)return h;if(!h)return null;try{const H=JSON.parse(h);if(H){for(l=0;l<H.length;l++)if(Array.isArray(H[l])){var m=H[l];if(!(m.length<2)){var _=m[1];if(Array.isArray(_)&&!(_.length<1)){var U=_[0];if(U!="noop"&&U!="stop"&&U!="close")for(let Q=1;Q<_.length;Q++)_[Q]=""}}}}return Di(H)}catch{return h}}var ca={NO_ERROR:0,TIMEOUT:8},zl={},gr;function Ss(){}j(Ss,Ml),Ss.prototype.g=function(){return new XMLHttpRequest},gr=new Ss;function si(l){return encodeURIComponent(String(l))}function kl(l){var h=1;l=l.split(":");const m=[];for(;h>0&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function mn(l,h,m,_){this.j=l,this.i=h,this.l=m,this.S=_||1,this.V=new bs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pn}function pn(){this.i=null,this.g="",this.h=!1}var ot={},_t={};function Un(l,h,m){l.M=1,l.A=xs(ct(h)),l.u=m,l.R=!0,fa(l,null)}function fa(l,h){l.F=Date.now(),Ln(l),l.B=ct(l.A);var m=l.B,_=l.S;Array.isArray(_)||(_=[String(_)]),ma(m.i,"t",_),l.C=0,m=l.j.L,l.h=new pn,l.g=Wl(l.j,m?h:null,!l.u),l.P>0&&(l.O=new Dt(T(l.Y,l,l.g),l.P)),h=l.V,m=l.g,_=l.ba;var U="readystatechange";Array.isArray(U)||(U&&(fr[0]=U.toString()),U=fr);for(let H=0;H<U.length;H++){const Q=Ze(m,U[H],_||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=l.J?D(l.J):{},l.u?(l.v||(l.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,h)):(l.v="GET",l.g.ea(l.B,l.v,null,h)),Dn(),ju(l.i,l.v,l.B,l.l,l.S,l.u)}mn.prototype.ba=function(l){l=l.target;const h=this.O;h&&_n(l)==3?h.j():this.Y(l)},mn.prototype.Y=function(l){try{if(l==this.g)e:{const ge=_n(this.g),nt=this.g.ya(),ze=this.g.ca();if(!(ge<3)&&(ge!=3||this.g&&(this.h.h||this.g.la()||St(this.g)))){this.K||ge!=4||nt==7||(nt==8||ze<=0?Dn(3):Dn(2)),zn(this);var h=this.g.ca();this.X=h;var m=Lu(this);if(this.o=h==200,Ll(this.i,this.v,this.B,this.l,this.S,ge,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,U=this.g;if((_=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(_)){var H=_;break t}}H=null}if(l=H)jn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,kn(this,l);else{this.o=!1,this.m=3,lt(12),Gt(this),en(this);break e}}if(this.R){l=!0;let $e;for(;!this.K&&this.C<m.length;)if($e=ql(this,m),$e==_t){ge==4&&(this.m=4,lt(14),l=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if($e==ot){this.m=4,lt(15),jn(this.i,this.l,m,"[Invalid Chunk]"),l=!1;break}else jn(this.i,this.l,$e,null),kn(this,$e);if(Hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||m.length!=0||this.h.h||(this.m=1,lt(16),l=!1),this.o=this.o&&l,!l)jn(this.i,this.l,m,"[Invalid Chunked Response]"),Gt(this),en(this);else if(m.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Rr(Q),Q.P=!0,lt(11))}}else jn(this.i,this.l,m,null),kn(this,m);ge==4&&Gt(this),this.o&&!this.K&&(ge==4?Ql(this.j,this):(this.o=!1,Ln(this)))}else ri(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),Gt(this),en(this)}}}catch{}finally{}};function Lu(l){if(!Hl(l))return l.g.la();const h=St(l.g);if(h==="")return"";let m="";const _=h.length,U=_n(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return Gt(l),en(l),"";l.h.i=new p.TextDecoder}for(let H=0;H<_;H++)l.h.h=!0,m+=l.h.i.decode(h[H],{stream:!(U&&H==_-1)});return h.length=0,l.h.g+=m,l.C=0,l.h.g}function Hl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function ql(l,h){var m=l.C,_=h.indexOf(`
`,m);return _==-1?_t:(m=Number(h.substring(m,_)),isNaN(m)?ot:(_+=1,_+m>h.length?_t:(h=h.slice(_,_+m),l.C=_+m,h)))}mn.prototype.cancel=function(){this.K=!0,Gt(this)};function Ln(l){l.T=Date.now()+l.H,ha(l,l.H)}function ha(l,h){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Mn(T(l.aa,l),h)}function zn(l){l.D&&(p.clearTimeout(l.D),l.D=null)}mn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(Ts(this.i,this.B),this.M!=2&&(Dn(),lt(17)),Gt(this),this.m=2,en(this)):ha(this,this.T-l)};function en(l){l.j.I==0||l.K||Ql(l.j,l)}function Gt(l){zn(l);var h=l.O;h&&typeof h.dispose=="function"&&h.dispose(),l.O=null,hr(l.V),l.g&&(h=l.g,l.g=null,h.abort(),h.dispose())}function kn(l,h){try{var m=l.j;if(m.I!=0&&(m.g==l||qn(m.h,l))){if(!l.L&&qn(m.h,l)&&m.I==3){try{var _=m.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var U=_;if(U[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<l.F)ba(m),Hi(m);else break e;Ds(m),lt(18)}}else m.xa=U[1],0<m.xa-m.K&&U[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Mn(T(m.Va,m),6e3));Hn(m.h)<=1&&m.ta&&(m.ta=void 0)}else Xn(m,11)}else if((l.L||m.g==l)&&ba(m),!A(h))for(U=m.Ba.g.parse(h),h=0;h<U.length;h++){let ze=U[h];const $e=ze[0];if(!($e<=m.K))if(m.K=$e,ze=ze[1],m.I==2)if(ze[0]=="c"){m.M=ze[1],m.ba=ze[2];const Rt=ze[3];Rt!=null&&(m.ka=Rt,m.j.info("VER="+m.ka));const li=ze[4];li!=null&&(m.za=li,m.j.info("SVER="+m.za));const bn=ze[5];bn!=null&&typeof bn=="number"&&bn>0&&(_=1.5*bn,m.O=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const En=l.g;if(En){const Is=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Is){var H=_.h;H.g||Is.indexOf("spdy")==-1&&Is.indexOf("quic")==-1&&Is.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(yr(H,H.h),H.h=null))}if(_.G){const Ea=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;Ea&&(_.wa=Ea,Le(_.J,_.G,Ea))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-l.F,m.j.info("Handshake RTT: "+m.T+"ms")),_=m;var Q=l;if(_.na=$l(_,_.L?_.ba:null,_.W),Q.L){vr(_.h,Q);var ge=Q,nt=_.O;nt&&(ge.H=nt),ge.D&&(zn(ge),Ln(ge)),_.g=Q}else Fl(_);m.i.length>0&&Yn(m)}else ze[0]!="stop"&&ze[0]!="close"||Xn(m,7);else m.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Xn(m,7):wr(m):ze[0]!="noop"&&m.l&&m.l.qa(ze),m.A=0)}}Dn(4)}catch{}}var ut=class{constructor(l,h){this.g=l,this.map=h}};function mr(l){this.l=l||10,p.PerformanceNavigationTiming?(l=p.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pr(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Hn(l){return l.h?1:l.g?l.g.size:0}function qn(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function yr(l,h){l.g?l.g.add(h):l.h=h}function vr(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}mr.prototype.cancel=function(){if(this.i=_r(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function _r(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.G);return h}return se(l.i)}var Bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function da(l,h){if(l){l=l.split("&");for(let m=0;m<l.length;m++){const _=l[m].indexOf("=");let U,H=null;_>=0?(U=l[m].substring(0,_),H=l[m].substring(_+1)):U=l[m],h(U,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Pt(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;l instanceof Pt?(this.l=l.l,bt(this,l.j),this.o=l.o,this.g=l.g,Ii(this,l.u),this.h=l.h,br(this,Yl(l.i)),this.m=l.m):l&&(h=String(l).match(Bl))?(this.l=!1,bt(this,h[1]||"",!0),this.o=Bn(h[2]||""),this.g=Bn(h[3]||"",!0),Ii(this,h[4]),this.h=Bn(h[5]||"",!0),br(this,h[6]||"",!0),this.m=Bn(h[7]||"")):(this.l=!1,this.i=new ji(null,this.l))}Pt.prototype.toString=function(){const l=[];var h=this.j;h&&l.push(As(h,ga,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(As(h,ga,!0),"@"),l.push(si(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&l.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(As(m,m.charAt(0)=="/"?Er:Vl,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",As(m,Gl)),l.join("")},Pt.prototype.resolve=function(l){const h=ct(this);let m=!!l.j;m?bt(h,l.j):m=!!l.o,m?h.o=l.o:m=!!l.g,m?h.g=l.g:m=l.u!=null;var _=l.h;if(m)Ii(h,l.u);else if(m=!!l.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var U=h.h.lastIndexOf("/");U!=-1&&(_=h.h.slice(0,U+1)+_)}if(U=_,U==".."||U==".")_="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){_=U.lastIndexOf("/",0)==0,U=U.split("/");const H=[];for(let Q=0;Q<U.length;){const ge=U[Q++];ge=="."?_&&Q==U.length&&H.push(""):ge==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),_&&Q==U.length&&H.push("")):(H.push(ge),_=!0)}_=H.join("/")}else _=U}return m?h.h=_:m=l.i.toString()!=="",m?br(h,Yl(l.i)):m=!!l.m,m&&(h.m=l.m),h};function ct(l){return new Pt(l)}function bt(l,h,m){l.j=m?Bn(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ii(l,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);l.u=h}else l.u=null}function br(l,h,m){h instanceof ji?(l.i=h,pa(l.i,l.l)):(m||(h=As(h,Mi)),l.i=new ji(h,l.l))}function Le(l,h,m){l.i.set(h,m)}function xs(l){return Le(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Bn(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function As(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,Lt),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Lt(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ga=/[#\/\?@]/g,Vl=/[#\?:]/g,Er=/[#\?]/g,Mi=/[#\?@]/g,Gl=/#/g;function ji(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function zt(l){l.g||(l.g=new Map,l.h=0,l.i&&da(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}a=ji.prototype,a.add=function(l,h){zt(this),this.i=null,l=Ui(this,l);let m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function Pl(l,h){zt(l),h=Ui(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Tr(l,h){return zt(l),h=Ui(l,h),l.g.has(h)}a.forEach=function(l,h){zt(this),this.g.forEach(function(m,_){m.forEach(function(U){l.call(h,U,_,this)},this)},this)};function Sr(l,h){zt(l);let m=[];if(typeof h=="string")Tr(l,h)&&(m=m.concat(l.g.get(Ui(l,h))));else for(l=Array.from(l.g.values()),h=0;h<l.length;h++)m=m.concat(l[h]);return m}a.set=function(l,h){return zt(this),this.i=null,l=Ui(this,l),Tr(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},a.get=function(l,h){return l?(l=Sr(this,l),l.length>0?String(l[0]):h):h};function ma(l,h,m){Pl(l,h),m.length>0&&(l.i=null,l.g.set(Ui(l,h),se(m)),l.h+=m.length)}a.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var m=h[_];const U=si(m);m=Sr(this,m);for(let H=0;H<m.length;H++){let Q=U;m[H]!==""&&(Q+="="+si(m[H])),l.push(Q)}}return this.i=l.join("&")};function Yl(l){const h=new ji;return h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),h}function Ui(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function pa(l,h){h&&!l.j&&(zt(l),l.i=null,l.g.forEach(function(m,_){const U=_.toLowerCase();_!=U&&(Pl(this,_),ma(this,U,m))},l)),l.j=h}function yn(l,h){const m=new gn;if(p.Image){const _=new Image;_.onload=P(tn,m,"TestLoadImage: loaded",!0,h,_),_.onerror=P(tn,m,"TestLoadImage: error",!1,h,_),_.onabort=P(tn,m,"TestLoadImage: abort",!1,h,_),_.ontimeout=P(tn,m,"TestLoadImage: timeout",!1,h,_),p.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else h(!1)}function xr(l,h){const m=new gn,_=new AbortController,U=setTimeout(()=>{_.abort(),tn(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:_.signal}).then(H=>{clearTimeout(U),H.ok?tn(m,"TestPingServer: ok",!0,h):tn(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(U),tn(m,"TestPingServer: error",!1,h)})}function tn(l,h,m,_,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),_(m)}catch{}}function Li(){this.g=new Il}function Vn(l){this.i=l.Sb||null,this.h=l.ab||!1}j(Vn,Ml),Vn.prototype.g=function(){return new Ns(this.i,this.h)};function Ns(l,h){at.call(this),this.H=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}j(Ns,at),a=Ns.prototype,a.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=h,this.readyState=1,vn(this)},a.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(h.body=l),(this.H||p).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},a.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=0},a.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ya(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function ya(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}a.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?zi(this):vn(this),this.readyState==3&&ya(this)}},a.Oa=function(l){this.g&&(this.response=this.responseText=l,zi(this))},a.Na=function(l){this.g&&(this.response=l,zi(this))},a.ga=function(){this.g&&zi(this)};function zi(l){l.readyState=4,l.l=null,l.j=null,l.B=null,vn(l)}a.setRequestHeader=function(l,h){this.A.append(l,h)},a.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function vn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function nn(l){let h="";return Ce(l,function(m,_){h+=_,h+=":",h+=m,h+=`\r
`}),h}function ws(l,h,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=nn(m),typeof l=="string"?m!=null&&si(m):Le(l,h,m))}function Pe(l){at.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}j(Pe,at);var Gn=/^https?$/i,Ar=["POST","PUT"];a=Pe.prototype,a.Fa=function(l){this.H=l},a.ea=function(l,h,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gr.g(),this.g.onreadystatechange=B(T(this.Ca,this));try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(H){Cs(this,H);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var U in _)m.set(U,_[U]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const H of _.keys())m.set(H,_.get(H));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(H=>H.toLowerCase()=="content-type"),U=p.FormData&&l instanceof p.FormData,!(Array.prototype.indexOf.call(Ar,h,void 0)>=0)||_||U||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,Q]of m)this.g.setRequestHeader(H,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(H){Cs(this,H)}};function Cs(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.o=5,Nr(l),ai(l)}function Nr(l){l.A||(l.A=!0,yt(l,"complete"),yt(l,"error"))}a.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,yt(this,"complete"),yt(this,"abort"),ai(this))},a.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),Pe.Z.N.call(this)},a.Ca=function(){this.u||(this.B||this.v||this.j?Rs(this):this.Xa())},a.Xa=function(){Rs(this)};function Rs(l){if(l.h&&typeof g<"u"){if(l.v&&_n(l)==4)setTimeout(l.Ca.bind(l),0);else if(yt(l,"readystatechange"),_n(l)==4){l.h=!1;try{const H=l.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var _;if(_=H===0){let Q=String(l.D).match(Bl)[1]||null;!Q&&p.self&&p.self.location&&(Q=p.self.location.protocol.slice(0,-1)),_=!Gn.test(Q?Q.toLowerCase():"")}m=_}if(m)yt(l,"complete"),yt(l,"success");else{l.o=6;try{var U=_n(l)>2?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.ca()+"]",Nr(l)}}finally{ai(l)}}}}function ai(l,h){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const m=l.g;l.g=null,h||yt(l,"ready");try{m.onreadystatechange=null}catch{}}}a.isActive=function(){return!!this.g};function _n(l){return l.g?l.g.readyState:0}a.ca=function(){try{return _n(this)>2?this.g.status:-1}catch{return-1}},a.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},a.La=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Iu(h)}};function St(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ri(l){const h={};l=(l.g&&_n(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(A(l[_]))continue;var m=kl(l[_]);const U=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const H=h[U]||[];h[U]=H,H.push(m)}Ue(h,function(_){return _.join(", ")})}a.ya=function(){return this.o},a.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function ki(l){this.za=0,this.i=[],this.j=new gn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pn("baseRetryDelayMs",5e3,l),this.Za=Pn("retryDelaySeedMs",1e4,l),this.Ta=Pn("forwardChannelMaxRetries",2,l),this.va=Pn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new mr(l&&l.concurrentRequestLimit),this.Ba=new Li,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}a=ki.prototype,a.ka=8,a.I=1,a.connect=function(l,h,m,_){lt(0),this.W=l,this.H=h||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.J=$l(this,null,this.W),Yn(this)};function wr(l){if(va(l),l.I==3){var h=l.V++,m=ct(l.J);if(Le(m,"SID",l.M),Le(m,"RID",h),Le(m,"TYPE","terminate"),Os(l,m),h=new mn(l,l.j,h),h.M=2,h.A=xs(ct(m)),m=!1,p.navigator&&p.navigator.sendBeacon)try{m=p.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&p.Image&&(new Image().src=h.A,m=!0),m||(h.g=Wl(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ln(h)}Jl(l)}function Hi(l){l.g&&(Rr(l),l.g.cancel(),l.g=null)}function va(l){Hi(l),l.v&&(p.clearTimeout(l.v),l.v=null),ba(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&p.clearTimeout(l.m),l.m=null)}function Yn(l){if(!pr(l.h)&&!l.m){l.m=!0;var h=l.Ea;qe||E(),Re||(qe(),Re=!0),S.add(h,l),l.D=0}}function _a(l,h){return Hn(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=h.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Mn(T(l.Ea,l,h),Zl(l,l.D)),l.D++,!0)}a.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const U=new mn(this,this.j,l);let H=this.o;if(this.U&&(H?(H=D(H),J(H,this.U)):H=this.U),this.u!==null||this.R||(U.J=H,H=null),this.S)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Xl(this,U,h),m=ct(this.J),Le(m,"RID",l),Le(m,"CVER",22),this.G&&Le(m,"X-HTTP-Session-Id",this.G),Os(this,m),H&&(this.R?h="headers="+si(nn(H))+"&"+h:this.u&&ws(m,this.u,H)),yr(this.h,U),this.Ra&&Le(m,"TYPE","init"),this.S?(Le(m,"$req",h),Le(m,"SID","null"),U.U=!0,Un(U,m,null)):Un(U,m,h),this.I=2}}else this.I==3&&(l?Cr(this,l):this.i.length==0||pr(this.h)||Cr(this))};function Cr(l,h){var m;h?m=h.l:m=l.V++;const _=ct(l.J);Le(_,"SID",l.M),Le(_,"RID",m),Le(_,"AID",l.K),Os(l,_),l.u&&l.o&&ws(_,l.u,l.o),m=new mn(l,l.j,m,l.D+1),l.u===null&&(m.J=l.o),h&&(l.i=h.G.concat(l.i)),h=Xl(l,m,1e3),m.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),yr(l.h,m),Un(m,_,h)}function Os(l,h){l.H&&Ce(l.H,function(m,_){Le(h,_,m)}),l.l&&Ce({},function(m,_){Le(h,_,m)})}function Xl(l,h,m){m=Math.min(l.i.length,m);const _=l.l?T(l.l.Ka,l.l,l):null;e:{var U=l.i;let ge=-1;for(;;){const nt=["count="+m];ge==-1?m>0?(ge=U[0].g,nt.push("ofs="+ge)):ge=0:nt.push("ofs="+ge);let ze=!0;for(let $e=0;$e<m;$e++){var H=U[$e].g;const Rt=U[$e].map;if(H-=ge,H<0)ge=Math.max(0,U[$e].g-100),ze=!1;else try{H="req"+H+"_"||"";try{var Q=Rt instanceof Map?Rt:Object.entries(Rt);for(const[li,bn]of Q){let En=bn;w(bn)&&(En=Di(bn)),nt.push(H+li+"="+encodeURIComponent(En))}}catch(li){throw nt.push(H+"type="+encodeURIComponent("_badmap")),li}}catch{_&&_(Rt)}}if(ze){Q=nt.join("&");break e}}Q=void 0}return l=l.i.splice(0,m),h.G=l,Q}function Fl(l){if(!l.g&&!l.v){l.Y=1;var h=l.Da;qe||E(),Re||(qe(),Re=!0),S.add(h,l),l.A=0}}function Ds(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Mn(T(l.Da,l),Zl(l,l.A)),l.A++,!0)}a.Da=function(){if(this.v=null,Kl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Mn(T(this.Wa,this),l)}},a.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),Hi(this),Kl(this))};function Rr(l){l.B!=null&&(p.clearTimeout(l.B),l.B=null)}function Kl(l){l.g=new mn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var h=ct(l.na);Le(h,"RID","rpc"),Le(h,"SID",l.M),Le(h,"AID",l.K),Le(h,"CI",l.F?"0":"1"),!l.F&&l.ia&&Le(h,"TO",l.ia),Le(h,"TYPE","xmlhttp"),Os(l,h),l.u&&l.o&&ws(h,l.u,l.o),l.O&&(l.g.H=l.O);var m=l.g;l=l.ba,m.M=1,m.A=xs(ct(h)),m.u=null,m.R=!0,fa(m,l)}a.Va=function(){this.C!=null&&(this.C=null,Hi(this),Ds(this),lt(19))};function ba(l){l.C!=null&&(p.clearTimeout(l.C),l.C=null)}function Ql(l,h){var m=null;if(l.g==h){ba(l),Rr(l),l.g=null;var _=2}else if(qn(l.h,h))m=h.G,vr(l.h,h),_=1;else return;if(l.I!=0){if(h.o)if(_==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var U=l.D;_=dr(),yt(_,new In(_,m)),Yn(l)}else Fl(l);else if(U=h.m,U==3||U==0&&h.X>0||!(_==1&&_a(l,h)||_==2&&Ds(l)))switch(m&&m.length>0&&(h=l.h,h.i=h.i.concat(m)),U){case 1:Xn(l,5);break;case 4:Xn(l,10);break;case 3:Xn(l,6);break;default:Xn(l,2)}}}function Zl(l,h){let m=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(m*=2),m*h}function Xn(l,h){if(l.j.info("Error code "+h),h==2){var m=T(l.bb,l),_=l.Ua;const U=!_;_=new Pt(_||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||bt(_,"https"),xs(_),U?yn(_.toString(),m):xr(_.toString(),m)}else lt(2);l.I=0,l.l&&l.l.pa(h),Jl(l),va(l)}a.bb=function(l){l?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Jl(l){if(l.I=0,l.ja=[],l.l){const h=_r(l.h);(h.length!=0||l.i.length!=0)&&(ee(l.ja,h),ee(l.ja,l.i),l.h.i.length=0,se(l.i),l.i.length=0),l.l.oa()}}function $l(l,h,m){var _=m instanceof Pt?ct(m):new Pt(m);if(_.g!="")h&&(_.g=h+"."+_.g),Ii(_,_.u);else{var U=p.location;_=U.protocol,h=h?h+"."+U.hostname:U.hostname,U=+U.port;const H=new Pt(null);_&&bt(H,_),h&&(H.g=h),U&&Ii(H,U),m&&(H.h=m),_=H}return m=l.G,h=l.wa,m&&h&&Le(_,m,h),Le(_,"VER",l.ka),Os(l,_),_}function Wl(l,h,m){if(h&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Aa&&!l.ma?new Pe(new Vn({ab:m})):new Pe(l.ma),h.Fa(l.L),h}a.isActive=function(){return!!this.l&&this.l.isActive(this)};function eo(){}a=eo.prototype,a.ra=function(){},a.qa=function(){},a.pa=function(){},a.oa=function(){},a.isActive=function(){return!0},a.Ka=function(){};function Ct(l,h){at.call(this),this.g=new ki(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(l?l["X-WebChannel-Client-Profile"]=h.sa:l={"X-WebChannel-Client-Profile":h.sa}),this.g.U=l,(l=h&&h.Qb)&&!A(l)&&(this.g.u=l),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new qi(this)}j(Ct,at),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){wr(this.g)},Ct.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.v&&(m={},m.__data__=Di(l),l=m);h.i.push(new ut(h.Ya++,l)),h.I==3&&Yn(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,wr(this.g),delete this.g,Ct.Z.N.call(this)};function to(l){Tt.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}j(to,Tt);function no(){Wt.call(this),this.status=1}j(no,Wt);function qi(l){this.g=l}j(qi,eo),qi.prototype.ra=function(){yt(this.g,"a")},qi.prototype.qa=function(l){yt(this.g,new to(l))},qi.prototype.pa=function(l){yt(this.g,new no)},qi.prototype.oa=function(){yt(this.g,"b")},Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,ca.NO_ERROR=0,ca.TIMEOUT=8,ca.HTTP_ERROR=6,zl.COMPLETE="complete",Mu.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",at.prototype.listen=at.prototype.J,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});const jp="@firebase/firestore",Up="4.9.3";/**
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
 */class Mt{constructor(i){this.uid=i}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(i){return i.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let Nl="12.7.0";/**
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
 */const sr=new Nu("@firebase/firestore");function Nn(a,...i){if(sr.logLevel<=Me.DEBUG){const r=i.map(vh);sr.debug(`Firestore (${Nl}): ${a}`,...r)}}function iy(a,...i){if(sr.logLevel<=Me.ERROR){const r=i.map(vh);sr.error(`Firestore (${Nl}): ${a}`,...r)}}function kE(a,...i){if(sr.logLevel<=Me.WARN){const r=i.map(vh);sr.warn(`Firestore (${Nl}): ${a}`,...r)}}function vh(a){if(typeof a=="string")return a;try{/**
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
*/return(function(r){return JSON.stringify(r)})(a)}catch{return a}}/**
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
 */function Tl(a,i,r){let o="Unexpected state";typeof i=="string"?o=i:r=i,sy(a,o,r)}function sy(a,i,r){let o=`FIRESTORE (${Nl}) INTERNAL ASSERTION FAILED: ${i} (ID: ${a.toString(16)})`;if(r!==void 0)try{o+=" CONTEXT: "+JSON.stringify(r)}catch{o+=" CONTEXT: "+r}throw iy(o),new Error(o)}function pl(a,i,r,o){let f="Unexpected state";typeof r=="string"?f=r:o=r,a||sy(i,f,o)}/**
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
 */const Ne={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class we extends Rn{constructor(i,r){super(i,r),this.code=i,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yl{constructor(){this.promise=new Promise(((i,r)=>{this.resolve=i,this.reject=r}))}}/**
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
 */class ay{constructor(i,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${i}`)}}class HE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(i,r){i.enqueueRetryable((()=>r(Mt.UNAUTHENTICATED)))}shutdown(){}}class qE{constructor(i){this.token=i,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(i,r){this.changeListener=r,i.enqueueRetryable((()=>r(this.token.user)))}shutdown(){this.changeListener=null}}class BE{constructor(i){this.t=i,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(i,r){pl(this.o===void 0,42304);let o=this.i;const f=x=>this.i!==o?(o=this.i,r(x)):Promise.resolve();let g=new yl;this.o=()=>{this.i++,this.currentUser=this.u(),g.resolve(),g=new yl,i.enqueueRetryable((()=>f(this.currentUser)))};const p=()=>{const x=g;i.enqueueRetryable((async()=>{await x.promise,await f(this.currentUser)}))},w=x=>{Nn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=x,this.o&&(this.auth.addAuthTokenListener(this.o),p())};this.t.onInit((x=>w(x))),setTimeout((()=>{if(!this.auth){const x=this.t.getImmediate({optional:!0});x?w(x):(Nn("FirebaseAuthCredentialsProvider","Auth not yet detected"),g.resolve(),g=new yl)}}),0),p()}getToken(){const i=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then((o=>this.i!==i?(Nn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(pl(typeof o.accessToken=="string",31837,{l:o}),new ay(o.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const i=this.auth&&this.auth.getUid();return pl(i===null||typeof i=="string",2055,{h:i}),new Mt(i)}}class VE{constructor(i,r,o){this.P=i,this.T=r,this.I=o,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const i=this.R();return i&&this.A.set("Authorization",i),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class GE{constructor(i,r,o){this.P=i,this.T=r,this.I=o}getToken(){return Promise.resolve(new VE(this.P,this.T,this.I))}start(i,r){i.enqueueRetryable((()=>r(Mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Lp{constructor(i){this.value=i,this.type="AppCheck",this.headers=new Map,i&&i.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PE{constructor(i,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(i)&&i.settings.appCheckToken&&(this.p=i.settings.appCheckToken)}start(i,r){pl(this.o===void 0,3512);const o=g=>{g.error!=null&&Nn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${g.error.message}`);const p=g.token!==this.m;return this.m=g.token,Nn("FirebaseAppCheckTokenProvider",`Received ${p?"new":"existing"} token.`),p?r(g.token):Promise.resolve()};this.o=g=>{i.enqueueRetryable((()=>o(g)))};const f=g=>{Nn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=g,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((g=>f(g))),setTimeout((()=>{if(!this.appCheck){const g=this.V.getImmediate({optional:!0});g?f(g):Nn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Lp(this.p));const i=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(i).then((r=>r?(pl(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new Lp(r.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function YE(a){const i=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(a);if(i&&typeof i.getRandomValues=="function")i.getRandomValues(r);else for(let o=0;o<a;o++)r[o]=Math.floor(256*Math.random());return r}/**
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
 */class XE{static newId(){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let o="";for(;o.length<20;){const f=YE(40);for(let g=0;g<f.length;++g)o.length<20&&f[g]<r&&(o+=i.charAt(f[g]%62))}return o}}function ys(a,i){return a<i?-1:a>i?1:0}function FE(a,i){const r=Math.min(a.length,i.length);for(let o=0;o<r;o++){const f=a.charAt(o),g=i.charAt(o);if(f!==g)return Xf(f)===Xf(g)?ys(f,g):Xf(f)?1:-1}return ys(a.length,i.length)}const KE=55296,QE=57343;function Xf(a){const i=a.charCodeAt(0);return i>=KE&&i<=QE}/**
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
 */const zp="__name__";class Jn{constructor(i,r,o){r===void 0?r=0:r>i.length&&Tl(637,{offset:r,range:i.length}),o===void 0?o=i.length-r:o>i.length-r&&Tl(1746,{length:o,range:i.length-r}),this.segments=i,this.offset=r,this.len=o}get length(){return this.len}isEqual(i){return Jn.comparator(this,i)===0}child(i){const r=this.segments.slice(this.offset,this.limit());return i instanceof Jn?i.forEach((o=>{r.push(o)})):r.push(i),this.construct(r)}limit(){return this.offset+this.length}popFirst(i){return i=i===void 0?1:i,this.construct(this.segments,this.offset+i,this.length-i)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(i){return this.segments[this.offset+i]}isEmpty(){return this.length===0}isPrefixOf(i){if(i.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==i.get(r))return!1;return!0}isImmediateParentOf(i){if(this.length+1!==i.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==i.get(r))return!1;return!0}forEach(i){for(let r=this.offset,o=this.limit();r<o;r++)i(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(i,r){const o=Math.min(i.length,r.length);for(let f=0;f<o;f++){const g=Jn.compareSegments(i.get(f),r.get(f));if(g!==0)return g}return ys(i.length,r.length)}static compareSegments(i,r){const o=Jn.isNumericId(i),f=Jn.isNumericId(r);return o&&!f?-1:!o&&f?1:o&&f?Jn.extractNumericId(i).compare(Jn.extractNumericId(r)):FE(i,r)}static isNumericId(i){return i.startsWith("__id")&&i.endsWith("__")}static extractNumericId(i){return yh.fromString(i.substring(4,i.length-2))}}class An extends Jn{construct(i,r,o){return new An(i,r,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...i){const r=[];for(const o of i){if(o.indexOf("//")>=0)throw new we(Ne.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);r.push(...o.split("/").filter((f=>f.length>0)))}return new An(r)}static emptyPath(){return new An([])}}const ZE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qs extends Jn{construct(i,r,o){return new Qs(i,r,o)}static isValidIdentifier(i){return ZE.test(i)}canonicalString(){return this.toArray().map((i=>(i=i.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qs.isValidIdentifier(i)||(i="`"+i+"`"),i))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zp}static keyField(){return new Qs([zp])}static fromServerFormat(i){const r=[];let o="",f=0;const g=()=>{if(o.length===0)throw new we(Ne.INVALID_ARGUMENT,`Invalid field path (${i}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(o),o=""};let p=!1;for(;f<i.length;){const w=i[f];if(w==="\\"){if(f+1===i.length)throw new we(Ne.INVALID_ARGUMENT,"Path has trailing escape character: "+i);const x=i[f+1];if(x!=="\\"&&x!=="."&&x!=="`")throw new we(Ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+i);o+=x,f+=2}else w==="`"?(p=!p,f++):w!=="."||p?(o+=w,f++):(g(),f++)}if(g(),p)throw new we(Ne.INVALID_ARGUMENT,"Unterminated ` in path: "+i);return new Qs(r)}static emptyPath(){return new Qs([])}}/**
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
 */class Js{constructor(i){this.path=i}static fromPath(i){return new Js(An.fromString(i))}static fromName(i){return new Js(An.fromString(i).popFirst(5))}static empty(){return new Js(An.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(i){return this.path.length>=2&&this.path.get(this.path.length-2)===i}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(i){return i!==null&&An.comparator(this.path,i.path)===0}toString(){return this.path.toString()}static comparator(i,r){return An.comparator(i.path,r.path)}static isDocumentKey(i){return i.length%2==0}static fromSegments(i){return new Js(new An(i.slice()))}}function JE(a,i,r,o){if(i===!0&&o===!0)throw new we(Ne.INVALID_ARGUMENT,`${a} and ${r} cannot be used together.`)}function $E(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}function WE(a){if(a===void 0)return"undefined";if(a===null)return"null";if(typeof a=="string")return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if(typeof a=="number"||typeof a=="boolean")return""+a;if(typeof a=="object"){if(a instanceof Array)return"an array";{const i=(function(o){return o.constructor?o.constructor.name:null})(a);return i?`a custom ${i} object`:"an object"}}return typeof a=="function"?"a function":Tl(12329,{type:typeof a})}function eT(a,i){if("_delegate"in a&&(a=a._delegate),!(a instanceof i)){if(i.name===a.constructor.name)throw new we(Ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=WE(a);throw new we(Ne.INVALID_ARGUMENT,`Expected type '${i.name}', but it was: ${r}`)}}return a}/**
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
 */function mt(a,i){const r={typeString:a};return i&&(r.value=i),r}function wl(a,i){if(!$E(a))throw new we(Ne.INVALID_ARGUMENT,"JSON must be an object");let r;for(const o in i)if(i[o]){const f=i[o].typeString,g="value"in i[o]?{value:i[o].value}:void 0;if(!(o in a)){r=`JSON missing required field: '${o}'`;break}const p=a[o];if(f&&typeof p!==f){r=`JSON field '${o}' must be a ${f}.`;break}if(g!==void 0&&p!==g.value){r=`Expected '${o}' field to equal '${g.value}'`;break}}if(r)throw new we(Ne.INVALID_ARGUMENT,r);return!0}/**
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
 */const kp=-62135596800,Hp=1e6;class $n{static now(){return $n.fromMillis(Date.now())}static fromDate(i){return $n.fromMillis(i.getTime())}static fromMillis(i){const r=Math.floor(i/1e3),o=Math.floor((i-1e3*r)*Hp);return new $n(r,o)}constructor(i,r){if(this.seconds=i,this.nanoseconds=r,r<0)throw new we(Ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new we(Ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(i<kp)throw new we(Ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+i);if(i>=253402300800)throw new we(Ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hp}_compareTo(i){return this.seconds===i.seconds?ys(this.nanoseconds,i.nanoseconds):ys(this.seconds,i.seconds)}isEqual(i){return i.seconds===this.seconds&&i.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(i){if(wl(i,$n._jsonSchema))return new $n(i.seconds,i.nanoseconds)}valueOf(){const i=this.seconds-kp;return String(i).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$n._jsonSchemaVersion="firestore/timestamp/1.0",$n._jsonSchema={type:mt("string",$n._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};function tT(a){return a.name==="IndexedDbTransactionError"}/**
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
 */class nT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ia{constructor(i){this.binaryString=i}static fromBase64String(i){const r=(function(f){try{return atob(f)}catch(g){throw typeof DOMException<"u"&&g instanceof DOMException?new nT("Invalid base64 string: "+g):g}})(i);return new ia(r)}static fromUint8Array(i){const r=(function(f){let g="";for(let p=0;p<f.length;++p)g+=String.fromCharCode(f[p]);return g})(i);return new ia(r)}[Symbol.iterator](){let i=0;return{next:()=>i<this.binaryString.length?{value:this.binaryString.charCodeAt(i++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(r){return btoa(r)})(this.binaryString)}toUint8Array(){return(function(r){const o=new Uint8Array(r.length);for(let f=0;f<r.length;f++)o[f]=r.charCodeAt(f);return o})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(i){return ys(this.binaryString,i.binaryString)}isEqual(i){return this.binaryString===i.binaryString}}ia.EMPTY_BYTE_STRING=new ia("");const ih="(default)";class _u{constructor(i,r){this.projectId=i,this.database=r||ih}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database===ih}isEqual(i){return i instanceof _u&&i.projectId===this.projectId&&i.database===this.database}}/**
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
 */class iT{constructor(i,r=null,o=[],f=[],g=null,p="F",w=null,x=null){this.path=i,this.collectionGroup=r,this.explicitOrderBy=o,this.filters=f,this.limit=g,this.limitType=p,this.startAt=w,this.endAt=x,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function sT(a){return new iT(a)}/**
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
 */var qp,Ae;(Ae=qp||(qp={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new yh([4294967295,4294967295],0);/**
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
 */const aT=41943040;/**
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
 */const rT=1048576;function Ff(){return typeof document<"u"?document:null}/**
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
 */class lT{constructor(i,r,o=1e3,f=1.5,g=6e4){this.Mi=i,this.timerId=r,this.d_=o,this.A_=f,this.R_=g,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(i){this.cancel();const r=Math.floor(this.V_+this.y_()),o=Math.max(0,Date.now()-this.f_),f=Math.max(0,r-o);f>0&&Nn("ExponentialBackoff",`Backing off for ${f} ms (base delay: ${this.V_} ms, delay with jitter: ${r} ms, last attempt: ${o} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,f,(()=>(this.f_=Date.now(),i()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class _h{constructor(i,r,o,f,g){this.asyncQueue=i,this.timerId=r,this.targetTimeMs=o,this.op=f,this.removalCallback=g,this.deferred=new yl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((p=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(i,r,o,f,g){const p=Date.now()+o,w=new _h(i,r,p,f,g);return w.start(o),w}start(i){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),i)}skipDelay(){return this.handleDelayElapsed()}cancel(i){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new we(Ne.CANCELLED,"Operation cancelled"+(i?": "+i:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((i=>this.deferred.resolve(i)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Bp,Vp;(Vp=Bp||(Bp={})).Ma="default",Vp.Cache="cache";/**
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
 */function oT(a){const i={};return a.timeoutSeconds!==void 0&&(i.timeoutSeconds=a.timeoutSeconds),i}/**
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
 */const Gp=new Map;/**
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
 */const ry="firestore.googleapis.com",Pp=!0;class Yp{constructor(i){if(i.host===void 0){if(i.ssl!==void 0)throw new we(Ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ry,this.ssl=Pp}else this.host=i.host,this.ssl=i.ssl??Pp;if(this.isUsingEmulator=i.emulatorOptions!==void 0,this.credentials=i.credentials,this.ignoreUndefinedProperties=!!i.ignoreUndefinedProperties,this.localCache=i.localCache,i.cacheSizeBytes===void 0)this.cacheSizeBytes=aT;else{if(i.cacheSizeBytes!==-1&&i.cacheSizeBytes<rT)throw new we(Ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=i.cacheSizeBytes}JE("experimentalForceLongPolling",i.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",i.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!i.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:i.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!i.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oT(i.experimentalLongPollingOptions??{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new we(Ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new we(Ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new we(Ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!i.useFetchStreams}isEqual(i){return this.host===i.host&&this.ssl===i.ssl&&this.credentials===i.credentials&&this.cacheSizeBytes===i.cacheSizeBytes&&this.experimentalForceLongPolling===i.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===i.experimentalAutoDetectLongPolling&&(function(o,f){return o.timeoutSeconds===f.timeoutSeconds})(this.experimentalLongPollingOptions,i.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===i.ignoreUndefinedProperties&&this.useFetchStreams===i.useFetchStreams}}class ly{constructor(i,r,o,f){this._authCredentials=i,this._appCheckCredentials=r,this._databaseId=o,this._app=f,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new we(Ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(i){if(this._settingsFrozen)throw new we(Ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yp(i),this._emulatorOptions=i.emulatorOptions||{},i.credentials!==void 0&&(this._authCredentials=(function(o){if(!o)return new HE;switch(o.type){case"firstParty":return new GE(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new we(Ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(i.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(r){const o=Gp.get(r);o&&(Nn("ComponentProvider","Removing Datastore"),Gp.delete(r),o.terminate())})(this),Promise.resolve()}}function uT(a,i,r,o={}){var T;a=eT(a,ly);const f=xl(i),g=a._getSettings(),p={...g,emulatorOptions:a._getEmulatorOptions()},w=`${i}:${r}`;f&&(A0(`https://${w}`),N0("Firestore",!0)),g.host!==ry&&g.host!==w&&kE("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const x={...g,host:w,ssl:f,emulatorOptions:o};if(!ps(x,p)&&(a._setSettings(x),o.mockUserToken)){let P,j;if(typeof o.mockUserToken=="string")P=o.mockUserToken,j=Mt.MOCK_USER;else{P=G2(o.mockUserToken,(T=a._app)==null?void 0:T.options.projectId);const B=o.mockUserToken.sub||o.mockUserToken.user_id;if(!B)throw new we(Ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");j=new Mt(B)}a._authCredentials=new qE(new ay(P,j))}}/**
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
 */class bh{constructor(i,r,o){this.converter=r,this._query=o,this.type="query",this.firestore=i}withConverter(i){return new bh(this.firestore,i,this._query)}}class ei{constructor(i,r,o){this.converter=r,this._key=o,this.type="document",this.firestore=i}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Eh(this.firestore,this.converter,this._key.path.popLast())}withConverter(i){return new ei(this.firestore,i,this._key)}toJSON(){return{type:ei._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(i,r,o){if(wl(r,ei._jsonSchema))return new ei(i,o||null,new Js(An.fromString(r.referencePath)))}}ei._jsonSchemaVersion="firestore/documentReference/1.0",ei._jsonSchema={type:mt("string",ei._jsonSchemaVersion),referencePath:mt("string")};class Eh extends bh{constructor(i,r,o){super(i,r,sT(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const i=this._path.popLast();return i.isEmpty()?null:new ei(this.firestore,null,new Js(i))}withConverter(i){return new Eh(this.firestore,i,this._path)}}/**
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
 */const Xp="AsyncQueue";class Fp{constructor(i=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lT(this,"async_queue_retry"),this._c=()=>{const o=Ff();o&&Nn(Xp,"Visibility state changed to "+o.visibilityState),this.M_.w_()},this.ac=i;const r=Ff();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(i){this.enqueue(i)}enqueueAndForgetEvenWhileRestricted(i){this.uc(),this.cc(i)}enterRestrictedMode(i){if(!this.ec){this.ec=!0,this.sc=i||!1;const r=Ff();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this._c)}}enqueue(i){if(this.uc(),this.ec)return new Promise((()=>{}));const r=new yl;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(i().then(r.resolve,r.reject),r.promise))).then((()=>r.promise))}enqueueRetryable(i){this.enqueueAndForget((()=>(this.Xu.push(i),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(i){if(!tT(i))throw i;Nn(Xp,"Operation failed with retryable error: "+i)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(i){const r=this.ac.then((()=>(this.rc=!0,i().catch((o=>{throw this.nc=o,this.rc=!1,iy("INTERNAL UNHANDLED ERROR: ",Kp(o)),o})).then((o=>(this.rc=!1,o))))));return this.ac=r,r}enqueueAfterDelay(i,r,o){this.uc(),this.oc.indexOf(i)>-1&&(r=0);const f=_h.createAndSchedule(this,i,r,o,(g=>this.hc(g)));return this.tc.push(f),f}uc(){this.nc&&Tl(47125,{Pc:Kp(this.nc)})}verifyOperationInProgress(){}async Tc(){let i;do i=this.ac,await i;while(i!==this.ac)}Ic(i){for(const r of this.tc)if(r.timerId===i)return!0;return!1}Ec(i){return this.Tc().then((()=>{this.tc.sort(((r,o)=>r.targetTimeMs-o.targetTimeMs));for(const r of this.tc)if(r.skipDelay(),i!=="all"&&r.timerId===i)break;return this.Tc()}))}dc(i){this.oc.push(i)}hc(i){const r=this.tc.indexOf(i);this.tc.splice(r,1)}}function Kp(a){let i=a.message||"";return a.stack&&(i=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),i}class cT extends ly{constructor(i,r,o,f){super(i,r,o,f),this.type="firestore",this._queue=new Fp,this._persistenceKey=(f==null?void 0:f.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const i=this._firestoreClient.terminate();this._queue=new Fp(i),this._firestoreClient=void 0,await i}}}function fT(a,i){const r=typeof a=="object"?a:ch(),o=typeof a=="string"?a:ih,f=ra(r,"firestore").getImmediate({identifier:o});if(!f._initialized){const g=B2("firestore");g&&uT(f,...g)}return f}/**
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
 */class Si{constructor(i){this._byteString=i}static fromBase64String(i){try{return new Si(ia.fromBase64String(i))}catch(r){throw new we(Ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(i){return new Si(ia.fromUint8Array(i))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(i){return this._byteString.isEqual(i._byteString)}toJSON(){return{type:Si._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(i){if(wl(i,Si._jsonSchema))return Si.fromBase64String(i.bytes)}}Si._jsonSchemaVersion="firestore/bytes/1.0",Si._jsonSchema={type:mt("string",Si._jsonSchemaVersion),bytes:mt("string")};/**
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
 */class oy{constructor(...i){for(let r=0;r<i.length;++r)if(i[r].length===0)throw new we(Ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qs(i)}isEqual(i){return this._internalPath.isEqual(i._internalPath)}}/**
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
 */class $s{constructor(i,r){if(!isFinite(i)||i<-90||i>90)throw new we(Ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+i);if(!isFinite(r)||r<-180||r>180)throw new we(Ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=i,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(i){return this._lat===i._lat&&this._long===i._long}_compareTo(i){return ys(this._lat,i._lat)||ys(this._long,i._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$s._jsonSchemaVersion}}static fromJSON(i){if(wl(i,$s._jsonSchema))return new $s(i.latitude,i.longitude)}}$s._jsonSchemaVersion="firestore/geoPoint/1.0",$s._jsonSchema={type:mt("string",$s._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class Ws{constructor(i){this._values=(i||[]).map((r=>r))}toArray(){return this._values.map((i=>i))}isEqual(i){return(function(o,f){if(o.length!==f.length)return!1;for(let g=0;g<o.length;++g)if(o[g]!==f[g])return!1;return!0})(this._values,i._values)}toJSON(){return{type:Ws._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(i){if(wl(i,Ws._jsonSchema)){if(Array.isArray(i.vectorValues)&&i.vectorValues.every((r=>typeof r=="number")))return new Ws(i.vectorValues);throw new we(Ne.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ws._jsonSchemaVersion="firestore/vectorValue/1.0",Ws._jsonSchema={type:mt("string",Ws._jsonSchemaVersion),vectorValues:mt("object")};const hT=new RegExp("[~\\*/\\[\\]]");function dT(a,i,r){if(i.search(hT)>=0)throw Qp(`Invalid field path (${i}). Paths must not contain '~', '*', '/', '[', or ']'`,a);try{return new oy(...i.split("."))._internalPath}catch{throw Qp(`Invalid field path (${i}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a)}}function Qp(a,i,r,o,f){let g=`Function ${i}() called with invalid data`;g+=". ";let p="";return new we(Ne.INVALID_ARGUMENT,g+a+p)}/**
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
 */class uy{constructor(i,r,o,f,g){this._firestore=i,this._userDataWriter=r,this._key=o,this._document=f,this._converter=g}get id(){return this._key.path.lastSegment()}get ref(){return new ei(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const i=new gT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(i)}return this._userDataWriter.convertValue(this._document.data.value)}}get(i){if(this._document){const r=this._document.data.field(cy("DocumentSnapshot.get",i));if(r!==null)return this._userDataWriter.convertValue(r)}}}class gT extends uy{data(){return super.data()}}function cy(a,i){return typeof i=="string"?dT(a,i):i instanceof oy?i._internalPath:i._delegate._internalPath}class ou{constructor(i,r){this.hasPendingWrites=i,this.fromCache=r}isEqual(i){return this.hasPendingWrites===i.hasPendingWrites&&this.fromCache===i.fromCache}}class er extends uy{constructor(i,r,o,f,g,p){super(i,r,o,f,p),this._firestore=i,this._firestoreImpl=i,this.metadata=g}exists(){return super.exists()}data(i={}){if(this._document){if(this._converter){const r=new cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,i)}return this._userDataWriter.convertValue(this._document.data.value,i.serverTimestamps)}}get(i,r={}){if(this._document){const o=this._document.data.field(cy("DocumentSnapshot.get",i));if(o!==null)return this._userDataWriter.convertValue(o,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new we(Ne.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const i=this._document,r={};return r.type=er._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),!i||!i.isValidDocument()||!i.isFoundDocument()?r:(this._userDataWriter.convertObjectMap(i.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),r)}}er._jsonSchemaVersion="firestore/documentSnapshot/1.0",er._jsonSchema={type:mt("string",er._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class cu extends er{data(i={}){return super.data(i)}}class vl{constructor(i,r,o,f){this._firestore=i,this._userDataWriter=r,this._snapshot=f,this.metadata=new ou(f.hasPendingWrites,f.fromCache),this.query=o}get docs(){const i=[];return this.forEach((r=>i.push(r))),i}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(i,r){this._snapshot.docs.forEach((o=>{i.call(r,new cu(this._firestore,this._userDataWriter,o.key,o,new ou(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(i={}){const r=!!i.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new we(Ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=(function(f,g){if(f._snapshot.oldDocs.isEmpty()){let p=0;return f._snapshot.docChanges.map((w=>{const x=new cu(f._firestore,f._userDataWriter,w.doc.key,w.doc,new ou(f._snapshot.mutatedKeys.has(w.doc.key),f._snapshot.fromCache),f.query.converter);return w.doc,{type:"added",doc:x,oldIndex:-1,newIndex:p++}}))}{let p=f._snapshot.oldDocs;return f._snapshot.docChanges.filter((w=>g||w.type!==3)).map((w=>{const x=new cu(f._firestore,f._userDataWriter,w.doc.key,w.doc,new ou(f._snapshot.mutatedKeys.has(w.doc.key),f._snapshot.fromCache),f.query.converter);let T=-1,P=-1;return w.type!==0&&(T=p.indexOf(w.doc.key),p=p.delete(w.doc.key)),w.type!==1&&(p=p.add(w.doc),P=p.indexOf(w.doc.key)),{type:mT(w.type),doc:x,oldIndex:T,newIndex:P}}))}})(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new we(Ne.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const i={};i.type=vl._jsonSchemaVersion,i.bundleSource="QuerySnapshot",i.bundleName=XE.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const r=[],o=[],f=[];return this.docs.forEach((g=>{g._document!==null&&(r.push(g._document),o.push(this._userDataWriter.convertObjectMap(g._document.data.value.mapValue.fields,"previous")),f.push(g.ref.path))})),i.bundle=(this._firestore,this.query._query,i.bundleName,"NOT SUPPORTED"),i}}function mT(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tl(61501,{type:a})}}vl._jsonSchemaVersion="firestore/querySnapshot/1.0",vl._jsonSchema={type:mt("string",vl._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};(function(i,r=!0){(function(f){Nl=f})(rr),ii(new Cn("firestore",((o,{instanceIdentifier:f,options:g})=>{const p=o.getProvider("app").getImmediate(),w=new cT(new BE(o.getProvider("auth-internal")),new PE(p,o.getProvider("app-check-internal")),(function(T,P){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new we(Ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(T.options.projectId,P)})(p,f),p);return g={useFetchStreams:r,...g},w._setSettings(g),w}),"PUBLIC").setMultipleInstances(!0)),hn(jp,Up,i),hn(jp,Up,"esm2020")})();function fy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pT=fy,hy=new aa("auth","Firebase",fy());/**
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
 */const bu=new Nu("@firebase/auth");function yT(a,...i){bu.logLevel<=Me.WARN&&bu.warn(`Auth (${rr}): ${a}`,...i)}function fu(a,...i){bu.logLevel<=Me.ERROR&&bu.error(`Auth (${rr}): ${a}`,...i)}/**
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
 */function wi(a,...i){throw Th(a,...i)}function ti(a,...i){return Th(a,...i)}function dy(a,i,r){const o={...pT(),[i]:r};return new aa("auth","Firebase",o).create(i,{appName:a.name})}function ea(a){return dy(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Th(a,...i){if(typeof a!="string"){const r=i[0],o=[...i.slice(1)];return o[0]&&(o[0].appName=a.name),a._errorFactory.create(r,...o)}return hy.create(a,...i)}function fe(a,i,...r){if(!a)throw Th(i,...r)}function xi(a){const i="INTERNAL ASSERTION FAILED: "+a;throw fu(i),new Error(i)}function Ci(a,i){a||xi(i)}/**
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
 */function sh(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.href)||""}function vT(){return Zp()==="http:"||Zp()==="https:"}function Zp(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.protocol)||null}/**
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
 */function _T(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vT()||w0()||"connection"in navigator)?navigator.onLine:!0}function bT(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
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
 */class Cl{constructor(i,r){this.shortDelay=i,this.longDelay=r,Ci(r>i,"Short delay should be less than long delay!"),this.isMobile=X2()||K2()}get(){return _T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sh(a,i){Ci(a.emulator,"Emulator should always be set here");const{url:r}=a.emulator;return i?`${r}${i.startsWith("/")?i.slice(1):i}`:r}/**
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
 */class gy{static initialize(i,r,o){this.fetchImpl=i,r&&(this.headersImpl=r),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ET={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ST=new Cl(3e4,6e4);function xh(a,i){return a.tenantId&&!i.tenantId?{...i,tenantId:a.tenantId}:i}async function lr(a,i,r,o,f={}){return my(a,f,async()=>{let g={},p={};o&&(i==="GET"?p=o:g={body:JSON.stringify(o)});const w=Al({key:a.config.apiKey,...p}).slice(1),x=await a._getAdditionalHeaders();x["Content-Type"]="application/json",a.languageCode&&(x["X-Firebase-Locale"]=a.languageCode);const T={method:i,headers:x,...g};return F2()||(T.referrerPolicy="no-referrer"),a.emulatorConfig&&xl(a.emulatorConfig.host)&&(T.credentials="include"),gy.fetch()(await py(a,a.config.apiHost,r,w),T)})}async function my(a,i,r){a._canInitEmulator=!1;const o={...ET,...i};try{const f=new AT(a),g=await Promise.race([r(),f.promise]);f.clearNetworkTimeout();const p=await g.json();if("needConfirmation"in p)throw uu(a,"account-exists-with-different-credential",p);if(g.ok&&!("errorMessage"in p))return p;{const w=g.ok?p.errorMessage:p.error.message,[x,T]=w.split(" : ");if(x==="FEDERATED_USER_ID_ALREADY_LINKED")throw uu(a,"credential-already-in-use",p);if(x==="EMAIL_EXISTS")throw uu(a,"email-already-in-use",p);if(x==="USER_DISABLED")throw uu(a,"user-disabled",p);const P=o[x]||x.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw dy(a,P,T);wi(a,P)}}catch(f){if(f instanceof Rn)throw f;wi(a,"network-request-failed",{message:String(f)})}}async function xT(a,i,r,o,f={}){const g=await lr(a,i,r,o,f);return"mfaPendingCredential"in g&&wi(a,"multi-factor-auth-required",{_serverResponse:g}),g}async function py(a,i,r,o){const f=`${i}${r}?${o}`,g=a,p=g.config.emulator?Sh(a.config,f):`${a.config.apiScheme}://${f}`;return TT.includes(r)&&(await g._persistenceManagerAvailable,g._getPersistenceType()==="COOKIE")?g._getPersistence()._getFinalTarget(p).toString():p}class AT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(i){this.auth=i,this.timer=null,this.promise=new Promise((r,o)=>{this.timer=setTimeout(()=>o(ti(this.auth,"network-request-failed")),ST.get())})}}function uu(a,i,r){const o={appName:a.name};r.email&&(o.email=r.email),r.phoneNumber&&(o.phoneNumber=r.phoneNumber);const f=ti(a,i,o);return f.customData._tokenResponse=r,f}/**
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
 */async function NT(a,i){return lr(a,"POST","/v1/accounts:delete",i)}async function Eu(a,i){return lr(a,"POST","/v1/accounts:lookup",i)}/**
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
 */function _l(a){if(a)try{const i=new Date(Number(a));if(!isNaN(i.getTime()))return i.toUTCString()}catch{}}async function wT(a,i=!1){const r=Ri(a),o=await r.getIdToken(i),f=Ah(o);fe(f&&f.exp&&f.auth_time&&f.iat,r.auth,"internal-error");const g=typeof f.firebase=="object"?f.firebase:void 0,p=g==null?void 0:g.sign_in_provider;return{claims:f,token:o,authTime:_l(Kf(f.auth_time)),issuedAtTime:_l(Kf(f.iat)),expirationTime:_l(Kf(f.exp)),signInProvider:p||null,signInSecondFactor:(g==null?void 0:g.sign_in_second_factor)||null}}function Kf(a){return Number(a)*1e3}function Ah(a){const[i,r,o]=a.split(".");if(i===void 0||r===void 0||o===void 0)return fu("JWT malformed, contained fewer than 3 sections"),null;try{const f=E0(r);return f?JSON.parse(f):(fu("Failed to decode base64 JWT payload"),null)}catch(f){return fu("Caught error parsing JWT payload as JSON",f==null?void 0:f.toString()),null}}function Jp(a){const i=Ah(a);return fe(i,"internal-error"),fe(typeof i.exp<"u","internal-error"),fe(typeof i.iat<"u","internal-error"),Number(i.exp)-Number(i.iat)}/**
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
 */async function Sl(a,i,r=!1){if(r)return i;try{return await i}catch(o){throw o instanceof Rn&&CT(o)&&a.auth.currentUser===a&&await a.auth.signOut(),o}}function CT({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}/**
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
 */class RT{constructor(i){this.user=i,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(i){if(i){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(i=!1){if(!this.isRunning)return;const r=this.getInterval(i);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(i){(i==null?void 0:i.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ah{constructor(i,r){this.createdAt=i,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=_l(this.lastLoginAt),this.creationTime=_l(this.createdAt)}_copy(i){this.createdAt=i.createdAt,this.lastLoginAt=i.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tu(a){var j;const i=a.auth,r=await a.getIdToken(),o=await Sl(a,Eu(i,{idToken:r}));fe(o==null?void 0:o.users.length,i,"internal-error");const f=o.users[0];a._notifyReloadListener(f);const g=(j=f.providerUserInfo)!=null&&j.length?yy(f.providerUserInfo):[],p=DT(a.providerData,g),w=a.isAnonymous,x=!(a.email&&f.passwordHash)&&!(p!=null&&p.length),T=w?x:!1,P={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:p,metadata:new ah(f.createdAt,f.lastLoginAt),isAnonymous:T};Object.assign(a,P)}async function OT(a){const i=Ri(a);await Tu(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}function DT(a,i){return[...a.filter(o=>!i.some(f=>f.providerId===o.providerId)),...i]}function yy(a){return a.map(({providerId:i,...r})=>({providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
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
 */async function IT(a,i){const r=await my(a,{},async()=>{const o=Al({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:f,apiKey:g}=a.config,p=await py(a,f,"/v1/token",`key=${g}`),w=await a._getAdditionalHeaders();w["Content-Type"]="application/x-www-form-urlencoded";const x={method:"POST",headers:w,body:o};return a.emulatorConfig&&xl(a.emulatorConfig.host)&&(x.credentials="include"),gy.fetch()(p,x)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function MT(a,i){return lr(a,"POST","/v2/accounts:revokeToken",xh(a,i))}/**
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
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(i){fe(i.idToken,"internal-error"),fe(typeof i.idToken<"u","internal-error"),fe(typeof i.refreshToken<"u","internal-error");const r="expiresIn"in i&&typeof i.expiresIn<"u"?Number(i.expiresIn):Jp(i.idToken);this.updateTokensAndExpiration(i.idToken,i.refreshToken,r)}updateFromIdToken(i){fe(i.length!==0,"internal-error");const r=Jp(i);this.updateTokensAndExpiration(i,null,r)}async getToken(i,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,i,"user-token-expired"),this.refreshToken?(await this.refresh(i,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(i,r){const{accessToken:o,refreshToken:f,expiresIn:g}=await IT(i,r);this.updateTokensAndExpiration(o,f,Number(g))}updateTokensAndExpiration(i,r,o){this.refreshToken=r||null,this.accessToken=i||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(i,r){const{refreshToken:o,accessToken:f,expirationTime:g}=r,p=new tr;return o&&(fe(typeof o=="string","internal-error",{appName:i}),p.refreshToken=o),f&&(fe(typeof f=="string","internal-error",{appName:i}),p.accessToken=f),g&&(fe(typeof g=="number","internal-error",{appName:i}),p.expirationTime=g),p}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(i){this.accessToken=i.accessToken,this.refreshToken=i.refreshToken,this.expirationTime=i.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return xi("not implemented")}}/**
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
 */function us(a,i){fe(typeof a=="string"||typeof a>"u","internal-error",{appName:i})}class wn{constructor({uid:i,auth:r,stsTokenManager:o,...f}){this.providerId="firebase",this.proactiveRefresh=new RT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new ah(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(i){const r=await Sl(this,this.stsTokenManager.getToken(this.auth,i));return fe(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(i){return wT(this,i)}reload(){return OT(this)}_assign(i){this!==i&&(fe(this.uid===i.uid,this.auth,"internal-error"),this.displayName=i.displayName,this.photoURL=i.photoURL,this.email=i.email,this.emailVerified=i.emailVerified,this.phoneNumber=i.phoneNumber,this.isAnonymous=i.isAnonymous,this.tenantId=i.tenantId,this.providerData=i.providerData.map(r=>({...r})),this.metadata._copy(i.metadata),this.stsTokenManager._assign(i.stsTokenManager))}_clone(i){const r=new wn({...this,auth:i,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(i){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=i,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(i){this.reloadListener?this.reloadListener(i):this.reloadUserInfo=i}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(i,r=!1){let o=!1;i.idToken&&i.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(i),o=!0),r&&await Tu(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(ea(this.auth));const i=await this.getIdToken();return await Sl(this,NT(this.auth,{idToken:i})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(i=>({...i})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(i,r){const o=r.displayName??void 0,f=r.email??void 0,g=r.phoneNumber??void 0,p=r.photoURL??void 0,w=r.tenantId??void 0,x=r._redirectEventId??void 0,T=r.createdAt??void 0,P=r.lastLoginAt??void 0,{uid:j,emailVerified:B,isAnonymous:se,providerData:ee,stsTokenManager:ne}=r;fe(j&&ne,i,"internal-error");const le=tr.fromJSON(this.name,ne);fe(typeof j=="string",i,"internal-error"),us(o,i.name),us(f,i.name),fe(typeof B=="boolean",i,"internal-error"),fe(typeof se=="boolean",i,"internal-error"),us(g,i.name),us(p,i.name),us(w,i.name),us(x,i.name),us(T,i.name),us(P,i.name);const re=new wn({uid:j,auth:i,email:f,emailVerified:B,displayName:o,isAnonymous:se,photoURL:p,phoneNumber:g,tenantId:w,stsTokenManager:le,createdAt:T,lastLoginAt:P});return ee&&Array.isArray(ee)&&(re.providerData=ee.map(ie=>({...ie}))),x&&(re._redirectEventId=x),re}static async _fromIdTokenResponse(i,r,o=!1){const f=new tr;f.updateFromServerResponse(r);const g=new wn({uid:r.localId,auth:i,stsTokenManager:f,isAnonymous:o});return await Tu(g),g}static async _fromGetAccountInfoResponse(i,r,o){const f=r.users[0];fe(f.localId!==void 0,"internal-error");const g=f.providerUserInfo!==void 0?yy(f.providerUserInfo):[],p=!(f.email&&f.passwordHash)&&!(g!=null&&g.length),w=new tr;w.updateFromIdToken(o);const x=new wn({uid:f.localId,auth:i,stsTokenManager:w,isAnonymous:p}),T={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:g,metadata:new ah(f.createdAt,f.lastLoginAt),isAnonymous:!(f.email&&f.passwordHash)&&!(g!=null&&g.length)};return Object.assign(x,T),x}}/**
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
 */const $p=new Map;function Ai(a){Ci(a instanceof Function,"Expected a class definition");let i=$p.get(a);return i?(Ci(i instanceof a,"Instance stored in cache mismatched with class"),i):(i=new a,$p.set(a,i),i)}/**
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
 */class vy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(i,r){this.storage[i]=r}async _get(i){const r=this.storage[i];return r===void 0?null:r}async _remove(i){delete this.storage[i]}_addListener(i,r){}_removeListener(i,r){}}vy.type="NONE";const Wp=vy;/**
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
 */function hu(a,i,r){return`firebase:${a}:${i}:${r}`}class nr{constructor(i,r,o){this.persistence=i,this.auth=r,this.userKey=o;const{config:f,name:g}=this.auth;this.fullUserKey=hu(this.userKey,f.apiKey,g),this.fullPersistenceKey=hu("persistence",f.apiKey,g),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(i){return this.persistence._set(this.fullUserKey,i.toJSON())}async getCurrentUser(){const i=await this.persistence._get(this.fullUserKey);if(!i)return null;if(typeof i=="string"){const r=await Eu(this.auth,{idToken:i}).catch(()=>{});return r?wn._fromGetAccountInfoResponse(this.auth,r,i):null}return wn._fromJSON(this.auth,i)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(i){if(this.persistence===i)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=i,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(i,r,o="authUser"){if(!r.length)return new nr(Ai(Wp),i,o);const f=(await Promise.all(r.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let g=f[0]||Ai(Wp);const p=hu(o,i.config.apiKey,i.name);let w=null;for(const T of r)try{const P=await T._get(p);if(P){let j;if(typeof P=="string"){const B=await Eu(i,{idToken:P}).catch(()=>{});if(!B)break;j=await wn._fromGetAccountInfoResponse(i,B,P)}else j=wn._fromJSON(i,P);T!==g&&(w=j),g=T;break}}catch{}const x=f.filter(T=>T._shouldAllowMigration);return!g._shouldAllowMigration||!x.length?new nr(g,i,o):(g=x[0],w&&await g._set(p,w.toJSON()),await Promise.all(r.map(async T=>{if(T!==g)try{await T._remove(p)}catch{}})),new nr(g,i,o))}}/**
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
 */function e0(a){const i=a.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(Ty(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";if(i.includes("edge/"))return"Edge";if(_y(i))return"Firefox";if(i.includes("silk/"))return"Silk";if(xy(i))return"Blackberry";if(Ay(i))return"Webos";if(by(i))return"Safari";if((i.includes("chrome/")||Ey(i))&&!i.includes("edge/"))return"Chrome";if(Sy(i))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=a.match(r);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function _y(a=Ut()){return/firefox\//i.test(a)}function by(a=Ut()){const i=a.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}function Ey(a=Ut()){return/crios\//i.test(a)}function Ty(a=Ut()){return/iemobile/i.test(a)}function Sy(a=Ut()){return/android/i.test(a)}function xy(a=Ut()){return/blackberry/i.test(a)}function Ay(a=Ut()){return/webos/i.test(a)}function Nh(a=Ut()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function jT(a=Ut()){var i;return Nh(a)&&!!((i=window.navigator)!=null&&i.standalone)}function UT(){return Q2()&&document.documentMode===10}function Ny(a=Ut()){return Nh(a)||Sy(a)||Ay(a)||xy(a)||/windows phone/i.test(a)||Ty(a)}/**
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
 */function wy(a,i=[]){let r;switch(a){case"Browser":r=e0(Ut());break;case"Worker":r=`${e0(Ut())}-${a}`;break;default:r=a}const o=i.length?i.join(","):"FirebaseCore-web";return`${r}/JsCore/${rr}/${o}`}/**
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
 */class LT{constructor(i){this.auth=i,this.queue=[]}pushCallback(i,r){const o=g=>new Promise((p,w)=>{try{const x=i(g);p(x)}catch(x){w(x)}});o.onAbort=r,this.queue.push(o);const f=this.queue.length-1;return()=>{this.queue[f]=()=>Promise.resolve()}}async runMiddleware(i){if(this.auth.currentUser===i)return;const r=[];try{for(const o of this.queue)await o(i),o.onAbort&&r.push(o.onAbort)}catch(o){r.reverse();for(const f of r)try{f()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
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
 */async function zT(a,i={}){return lr(a,"GET","/v2/passwordPolicy",xh(a,i))}/**
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
 */const kT=6;class HT{constructor(i){var o;const r=i.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??kT,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=i.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((o=i.allowedNonAlphanumericCharacters)==null?void 0:o.join(""))??"",this.forceUpgradeOnSignin=i.forceUpgradeOnSignin??!1,this.schemaVersion=i.schemaVersion}validatePassword(i){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(i,r),this.validatePasswordCharacterOptions(i,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(i,r){const o=this.customStrengthOptions.minPasswordLength,f=this.customStrengthOptions.maxPasswordLength;o&&(r.meetsMinPasswordLength=i.length>=o),f&&(r.meetsMaxPasswordLength=i.length<=f)}validatePasswordCharacterOptions(i,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let o;for(let f=0;f<i.length;f++)o=i.charAt(f),this.updatePasswordCharacterOptionsStatuses(r,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(i,r,o,f,g){this.customStrengthOptions.containsLowercaseLetter&&(i.containsLowercaseLetter||(i.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(i.containsUppercaseLetter||(i.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(i.containsNumericCharacter||(i.containsNumericCharacter=f)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(i.containsNonAlphanumericCharacter||(i.containsNonAlphanumericCharacter=g))}}/**
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
 */class qT{constructor(i,r,o,f){this.app=i,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=o,this.config=f,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t0(this),this.idTokenSubscription=new t0(this),this.beforeStateQueue=new LT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=i.name,this.clientVersion=f.sdkClientVersion,this._persistenceManagerAvailable=new Promise(g=>this._resolvePersistenceManagerAvailable=g)}_initializeWithPersistence(i,r){return r&&(this._popupRedirectResolver=Ai(r)),this._initializationPromise=this.queue(async()=>{var o,f,g;if(!this._deleted&&(this.persistenceManager=await nr.create(this,i),(o=this._resolvePersistenceManagerAvailable)==null||o.call(this),!this._deleted)){if((f=this._popupRedirectResolver)!=null&&f._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((g=this.currentUser)==null?void 0:g.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const i=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!i)){if(this.currentUser&&i&&this.currentUser.uid===i.uid){this._currentUser._assign(i),await this.currentUser.getIdToken();return}await this._updateCurrentUser(i,!0)}}async initializeCurrentUserFromIdToken(i){try{const r=await Eu(this,{idToken:i}),o=await wn._fromGetAccountInfoResponse(this,r,i);await this.directlySetCurrentUser(o)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(i){var g;if(Wn(this.app)){const p=this.app.settings.authIdToken;return p?new Promise(w=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(p).then(w,w))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,f=!1;if(i&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const p=(g=this.redirectUser)==null?void 0:g._redirectEventId,w=o==null?void 0:o._redirectEventId,x=await this.tryRedirectSignIn(i);(!p||p===w)&&(x!=null&&x.user)&&(o=x.user,f=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(f)try{await this.beforeStateQueue.runMiddleware(o)}catch(p){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(p))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(i){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,i,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(i){try{await Tu(i)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(i)}useDeviceLanguage(){this.languageCode=bT()}async _delete(){this._deleted=!0}async updateCurrentUser(i){if(Wn(this.app))return Promise.reject(ea(this));const r=i?Ri(i):null;return r&&fe(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(i,r=!1){if(!this._deleted)return i&&fe(this.tenantId===i.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(i),this.queue(async()=>{await this.directlySetCurrentUser(i),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(ea(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(i){return Wn(this.app)?Promise.reject(ea(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ai(i))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(i){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(i)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const i=await zT(this),r=new HT(i);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(i){this._errorFactory=new aa("auth","Firebase",i())}onAuthStateChanged(i,r,o){return this.registerStateListener(this.authStateSubscription,i,r,o)}beforeAuthStateChanged(i,r){return this.beforeStateQueue.pushCallback(i,r)}onIdTokenChanged(i,r,o){return this.registerStateListener(this.idTokenSubscription,i,r,o)}authStateReady(){return new Promise((i,r)=>{if(this.currentUser)i();else{const o=this.onAuthStateChanged(()=>{o(),i()},r)}})}async revokeAccessToken(i){if(this.currentUser){const r=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:i,idToken:r};this.tenantId!=null&&(o.tenantId=this.tenantId),await MT(this,o)}}toJSON(){var i;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(i=this._currentUser)==null?void 0:i.toJSON()}}async _setRedirectUser(i,r){const o=await this.getOrInitRedirectPersistenceManager(r);return i===null?o.removeCurrentUser():o.setCurrentUser(i)}async getOrInitRedirectPersistenceManager(i){if(!this.redirectPersistenceManager){const r=i&&Ai(i)||this._popupRedirectResolver;fe(r,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[Ai(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(i){var r,o;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)==null?void 0:r._redirectEventId)===i?this._currentUser:((o=this.redirectUser)==null?void 0:o._redirectEventId)===i?this.redirectUser:null}async _persistUserIfCurrent(i){if(i===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(i))}_notifyListenersIfCurrent(i){i===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=((r=this.currentUser)==null?void 0:r.uid)??null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(i,r,o,f){if(this._deleted)return()=>{};const g=typeof r=="function"?r:r.next.bind(r);let p=!1;const w=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(w,this,"internal-error"),w.then(()=>{p||g(this.currentUser)}),typeof r=="function"){const x=i.addObserver(r,o,f);return()=>{p=!0,x()}}else{const x=i.addObserver(r);return()=>{p=!0,x()}}}async directlySetCurrentUser(i){this.currentUser&&this.currentUser!==i&&this._currentUser._stopProactiveRefresh(),i&&this.isProactiveRefreshEnabled&&i._startProactiveRefresh(),this.currentUser=i,i?await this.assertedPersistence.setCurrentUser(i):await this.assertedPersistence.removeCurrentUser()}queue(i){return this.operations=this.operations.then(i,i),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(i){!i||this.frameworks.includes(i)||(this.frameworks.push(i),this.frameworks.sort(),this.clientVersion=wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var f;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((f=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:f.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var r;if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((r=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getToken());return i!=null&&i.error&&yT(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function wh(a){return Ri(a)}class t0{constructor(i){this.auth=i,this.observer=null,this.addObserver=t_(r=>this.observer=r)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BT(a){Ch=a}function VT(a){return Ch.loadJS(a)}function GT(){return Ch.gapiScript}function PT(a){return`__${a}${Math.floor(Math.random()*1e6)}`}/**
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
 */function YT(a,i){const r=ra(a,"auth");if(r.isInitialized()){const f=r.getImmediate(),g=r.getOptions();if(ps(g,i??{}))return f;wi(f,"already-initialized")}return r.initialize({options:i})}function XT(a,i){const r=(i==null?void 0:i.persistence)||[],o=(Array.isArray(r)?r:[r]).map(Ai);i!=null&&i.errorMap&&a._updateErrorMap(i.errorMap),a._initializeWithPersistence(o,i==null?void 0:i.popupRedirectResolver)}function FT(a,i,r){const o=wh(a);fe(/^https?:\/\//.test(i),o,"invalid-emulator-scheme");const f=!1,g=Cy(i),{host:p,port:w}=KT(i),x=w===null?"":`:${w}`,T={url:`${g}//${p}${x}/`},P=Object.freeze({host:p,port:w,protocol:g.replace(":",""),options:Object.freeze({disableWarnings:f})});if(!o._canInitEmulator){fe(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),fe(ps(T,o.config.emulator)&&ps(P,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=T,o.emulatorConfig=P,o.settings.appVerificationDisabledForTesting=!0,xl(p)?(A0(`${g}//${p}${x}`),N0("Auth",!0)):QT()}function Cy(a){const i=a.indexOf(":");return i<0?"":a.substr(0,i+1)}function KT(a){const i=Cy(a),r=/(\/\/)?([^?#/]+)/.exec(a.substr(i.length));if(!r)return{host:"",port:null};const o=r[2].split("@").pop()||"",f=/^(\[[^\]]+\])(:|$)/.exec(o);if(f){const g=f[1];return{host:g,port:n0(o.substr(g.length+1))}}else{const[g,p]=o.split(":");return{host:g,port:n0(p)}}}function n0(a){if(!a)return null;const i=Number(a);return isNaN(i)?null:i}function QT(){function a(){const i=document.createElement("p"),r=i.style;i.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",i.classList.add("firebase-emulator-warning"),document.body.appendChild(i)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
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
 */class Ry{constructor(i,r){this.providerId=i,this.signInMethod=r}toJSON(){return xi("not implemented")}_getIdTokenResponse(i){return xi("not implemented")}_linkToIdToken(i,r){return xi("not implemented")}_getReauthenticationResolver(i){return xi("not implemented")}}/**
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
 */async function ir(a,i){return xT(a,"POST","/v1/accounts:signInWithIdp",xh(a,i))}/**
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
 */const ZT="http://localhost";class sa extends Ry{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(i){const r=new sa(i.providerId,i.signInMethod);return i.idToken||i.accessToken?(i.idToken&&(r.idToken=i.idToken),i.accessToken&&(r.accessToken=i.accessToken),i.nonce&&!i.pendingToken&&(r.nonce=i.nonce),i.pendingToken&&(r.pendingToken=i.pendingToken)):i.oauthToken&&i.oauthTokenSecret?(r.accessToken=i.oauthToken,r.secret=i.oauthTokenSecret):wi("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(i){const r=typeof i=="string"?JSON.parse(i):i,{providerId:o,signInMethod:f,...g}=r;if(!o||!f)return null;const p=new sa(o,f);return p.idToken=g.idToken||void 0,p.accessToken=g.accessToken||void 0,p.secret=g.secret,p.nonce=g.nonce,p.pendingToken=g.pendingToken||null,p}_getIdTokenResponse(i){const r=this.buildRequest();return ir(i,r)}_linkToIdToken(i,r){const o=this.buildRequest();return o.idToken=r,ir(i,o)}_getReauthenticationResolver(i){const r=this.buildRequest();return r.autoCreate=!1,ir(i,r)}buildRequest(){const i={requestUri:ZT,returnSecureToken:!0};if(this.pendingToken)i.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),i.postBody=Al(r)}return i}}/**
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
 */class Oy{constructor(i){this.providerId=i,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(i){this.defaultLanguageCode=i}setCustomParameters(i){return this.customParameters=i,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rl extends Oy{constructor(){super(...arguments),this.scopes=[]}addScope(i){return this.scopes.includes(i)||this.scopes.push(i),this}getScopes(){return[...this.scopes]}}/**
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
 */class cs extends Rl{constructor(){super("facebook.com")}static credential(i){return sa._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.FACEBOOK_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return cs.credentialFromTaggedObject(i)}static credentialFromError(i){return cs.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return cs.credential(i.oauthAccessToken)}catch{return null}}}cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";cs.PROVIDER_ID="facebook.com";/**
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
 */class fs extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(i,r){return sa._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GOOGLE_SIGN_IN_METHOD,idToken:i,accessToken:r})}static credentialFromResult(i){return fs.credentialFromTaggedObject(i)}static credentialFromError(i){return fs.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthIdToken:r,oauthAccessToken:o}=i;if(!r&&!o)return null;try{return fs.credential(r,o)}catch{return null}}}fs.GOOGLE_SIGN_IN_METHOD="google.com";fs.PROVIDER_ID="google.com";/**
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
 */class hs extends Rl{constructor(){super("github.com")}static credential(i){return sa._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return hs.credentialFromTaggedObject(i)}static credentialFromError(i){return hs.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return hs.credential(i.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
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
 */class ds extends Rl{constructor(){super("twitter.com")}static credential(i,r){return sa._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:i,oauthTokenSecret:r})}static credentialFromResult(i){return ds.credentialFromTaggedObject(i)}static credentialFromError(i){return ds.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthAccessToken:r,oauthTokenSecret:o}=i;if(!r||!o)return null;try{return ds.credential(r,o)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
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
 */class ar{constructor(i){this.user=i.user,this.providerId=i.providerId,this._tokenResponse=i._tokenResponse,this.operationType=i.operationType}static async _fromIdTokenResponse(i,r,o,f=!1){const g=await wn._fromIdTokenResponse(i,o,f),p=i0(o);return new ar({user:g,providerId:p,_tokenResponse:o,operationType:r})}static async _forOperation(i,r,o){await i._updateTokensIfNecessary(o,!0);const f=i0(o);return new ar({user:i,providerId:f,_tokenResponse:o,operationType:r})}}function i0(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
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
 */class Su extends Rn{constructor(i,r,o,f){super(r.code,r.message),this.operationType=o,this.user=f,Object.setPrototypeOf(this,Su.prototype),this.customData={appName:i.name,tenantId:i.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(i,r,o,f){return new Su(i,r,o,f)}}function Dy(a,i,r,o){return(i==="reauthenticate"?r._getReauthenticationResolver(a):r._getIdTokenResponse(a)).catch(g=>{throw g.code==="auth/multi-factor-auth-required"?Su._fromErrorAndOperation(a,g,i,o):g})}async function JT(a,i,r=!1){const o=await Sl(a,i._linkToIdToken(a.auth,await a.getIdToken()),r);return ar._forOperation(a,"link",o)}/**
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
 */async function $T(a,i,r=!1){const{auth:o}=a;if(Wn(o.app))return Promise.reject(ea(o));const f="reauthenticate";try{const g=await Sl(a,Dy(o,f,i,a),r);fe(g.idToken,o,"internal-error");const p=Ah(g.idToken);fe(p,o,"internal-error");const{sub:w}=p;return fe(a.uid===w,o,"user-mismatch"),ar._forOperation(a,f,g)}catch(g){throw(g==null?void 0:g.code)==="auth/user-not-found"&&wi(o,"user-mismatch"),g}}/**
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
 */async function WT(a,i,r=!1){if(Wn(a.app))return Promise.reject(ea(a));const o="signIn",f=await Dy(a,o,i),g=await ar._fromIdTokenResponse(a,o,f);return r||await a._updateCurrentUser(g.user),g}function eS(a,i,r,o){return Ri(a).onIdTokenChanged(i,r,o)}function tS(a,i,r){return Ri(a).beforeAuthStateChanged(i,r)}const xu="__sak";/**
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
 */class Iy{constructor(i,r){this.storageRetriever=i,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(xu,"1"),this.storage.removeItem(xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(i,r){return this.storage.setItem(i,JSON.stringify(r)),Promise.resolve()}_get(i){const r=this.storage.getItem(i);return Promise.resolve(r?JSON.parse(r):null)}_remove(i){return this.storage.removeItem(i),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nS=1e3,iS=10;class My extends Iy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(i,r)=>this.onStorageEvent(i,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ny(),this._shouldAllowMigration=!0}forAllChangedKeys(i){for(const r of Object.keys(this.listeners)){const o=this.storage.getItem(r),f=this.localCache[r];o!==f&&i(r,f,o)}}onStorageEvent(i,r=!1){if(!i.key){this.forAllChangedKeys((p,w,x)=>{this.notifyListeners(p,x)});return}const o=i.key;r?this.detachListener():this.stopPolling();const f=()=>{const p=this.storage.getItem(o);!r&&this.localCache[o]===p||this.notifyListeners(o,p)},g=this.storage.getItem(o);UT()&&g!==i.newValue&&i.newValue!==i.oldValue?setTimeout(f,iS):f()}notifyListeners(i,r){this.localCache[i]=r;const o=this.listeners[i];if(o)for(const f of Array.from(o))f(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((i,r,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:i,oldValue:r,newValue:o}),!0)})},nS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(i,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[i]||(this.listeners[i]=new Set,this.localCache[i]=this.storage.getItem(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(i,r){await super._set(i,r),this.localCache[i]=JSON.stringify(r)}async _get(i){const r=await super._get(i);return this.localCache[i]=JSON.stringify(r),r}async _remove(i){await super._remove(i),delete this.localCache[i]}}My.type="LOCAL";const sS=My;/**
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
 */class jy extends Iy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(i,r){}_removeListener(i,r){}}jy.type="SESSION";const Uy=jy;/**
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
 */function aS(a){return Promise.all(a.map(async i=>{try{return{fulfilled:!0,value:await i}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Ru{constructor(i){this.eventTarget=i,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(i){const r=this.receivers.find(f=>f.isListeningto(i));if(r)return r;const o=new Ru(i);return this.receivers.push(o),o}isListeningto(i){return this.eventTarget===i}async handleEvent(i){const r=i,{eventId:o,eventType:f,data:g}=r.data,p=this.handlersMap[f];if(!(p!=null&&p.size))return;r.ports[0].postMessage({status:"ack",eventId:o,eventType:f});const w=Array.from(p).map(async T=>T(r.origin,g)),x=await aS(w);r.ports[0].postMessage({status:"done",eventId:o,eventType:f,response:x})}_subscribe(i,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[i]||(this.handlersMap[i]=new Set),this.handlersMap[i].add(r)}_unsubscribe(i,r){this.handlersMap[i]&&r&&this.handlersMap[i].delete(r),(!r||this.handlersMap[i].size===0)&&delete this.handlersMap[i],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
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
 */function Rh(a="",i=10){let r="";for(let o=0;o<i;o++)r+=Math.floor(Math.random()*10);return a+r}/**
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
 */class rS{constructor(i){this.target=i,this.handlers=new Set}removeMessageHandler(i){i.messageChannel&&(i.messageChannel.port1.removeEventListener("message",i.onMessage),i.messageChannel.port1.close()),this.handlers.delete(i)}async _send(i,r,o=50){const f=typeof MessageChannel<"u"?new MessageChannel:null;if(!f)throw new Error("connection_unavailable");let g,p;return new Promise((w,x)=>{const T=Rh("",20);f.port1.start();const P=setTimeout(()=>{x(new Error("unsupported_event"))},o);p={messageChannel:f,onMessage(j){const B=j;if(B.data.eventId===T)switch(B.data.status){case"ack":clearTimeout(P),g=setTimeout(()=>{x(new Error("timeout"))},3e3);break;case"done":clearTimeout(g),w(B.data.response);break;default:clearTimeout(P),clearTimeout(g),x(new Error("invalid_response"));break}}},this.handlers.add(p),f.port1.addEventListener("message",p.onMessage),this.target.postMessage({eventType:i,eventId:T,data:r},[f.port2])}).finally(()=>{p&&this.removeMessageHandler(p)})}}/**
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
 */function ni(){return window}function lS(a){ni().location.href=a}/**
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
 */function Ly(){return typeof ni().WorkerGlobalScope<"u"&&typeof ni().importScripts=="function"}async function oS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uS(){var a;return((a=navigator==null?void 0:navigator.serviceWorker)==null?void 0:a.controller)||null}function cS(){return Ly()?self:null}/**
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
 */const zy="firebaseLocalStorageDb",fS=1,Au="firebaseLocalStorage",ky="fbase_key";class Ol{constructor(i){this.request=i}toPromise(){return new Promise((i,r)=>{this.request.addEventListener("success",()=>{i(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Ou(a,i){return a.transaction([Au],i?"readwrite":"readonly").objectStore(Au)}function hS(){const a=indexedDB.deleteDatabase(zy);return new Ol(a).toPromise()}function rh(){const a=indexedDB.open(zy,fS);return new Promise((i,r)=>{a.addEventListener("error",()=>{r(a.error)}),a.addEventListener("upgradeneeded",()=>{const o=a.result;try{o.createObjectStore(Au,{keyPath:ky})}catch(f){r(f)}}),a.addEventListener("success",async()=>{const o=a.result;o.objectStoreNames.contains(Au)?i(o):(o.close(),await hS(),i(await rh()))})})}async function s0(a,i,r){const o=Ou(a,!0).put({[ky]:i,value:r});return new Ol(o).toPromise()}async function dS(a,i){const r=Ou(a,!1).get(i),o=await new Ol(r).toPromise();return o===void 0?null:o.value}function a0(a,i){const r=Ou(a,!0).delete(i);return new Ol(r).toPromise()}const gS=800,mS=3;class Hy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rh(),this.db)}async _withRetries(i){let r=0;for(;;)try{const o=await this._openDb();return await i(o)}catch(o){if(r++>mS)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ly()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(cS()),this.receiver._subscribe("keyChanged",async(i,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(i,r)=>["keyChanged"])}async initializeSender(){var r,o;if(this.activeServiceWorker=await oS(),!this.activeServiceWorker)return;this.sender=new rS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(r=i[0])!=null&&r.fulfilled&&(o=i[0])!=null&&o.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(i){if(!(!this.sender||!this.activeServiceWorker||uS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:i},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const i=await rh();return await s0(i,xu,"1"),await a0(i,xu),!0}catch{}return!1}async _withPendingWrite(i){this.pendingWrites++;try{await i()}finally{this.pendingWrites--}}async _set(i,r){return this._withPendingWrite(async()=>(await this._withRetries(o=>s0(o,i,r)),this.localCache[i]=r,this.notifyServiceWorker(i)))}async _get(i){const r=await this._withRetries(o=>dS(o,i));return this.localCache[i]=r,r}async _remove(i){return this._withPendingWrite(async()=>(await this._withRetries(r=>a0(r,i)),delete this.localCache[i],this.notifyServiceWorker(i)))}async _poll(){const i=await this._withRetries(f=>{const g=Ou(f,!1).getAll();return new Ol(g).toPromise()});if(!i)return[];if(this.pendingWrites!==0)return[];const r=[],o=new Set;if(i.length!==0)for(const{fbase_key:f,value:g}of i)o.add(f),JSON.stringify(this.localCache[f])!==JSON.stringify(g)&&(this.notifyListeners(f,g),r.push(f));for(const f of Object.keys(this.localCache))this.localCache[f]&&!o.has(f)&&(this.notifyListeners(f,null),r.push(f));return r}notifyListeners(i,r){this.localCache[i]=r;const o=this.listeners[i];if(o)for(const f of Array.from(o))f(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(i,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[i]||(this.listeners[i]=new Set,this._get(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hy.type="LOCAL";const pS=Hy;new Cl(3e4,6e4);/**
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
 */function yS(a,i){return i?Ai(i):(fe(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
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
 */class Oh extends Ry{constructor(i){super("custom","custom"),this.params=i}_getIdTokenResponse(i){return ir(i,this._buildIdpRequest())}_linkToIdToken(i,r){return ir(i,this._buildIdpRequest(r))}_getReauthenticationResolver(i){return ir(i,this._buildIdpRequest())}_buildIdpRequest(i){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return i&&(r.idToken=i),r}}function vS(a){return WT(a.auth,new Oh(a),a.bypassAuthState)}function _S(a){const{auth:i,user:r}=a;return fe(r,i,"internal-error"),$T(r,new Oh(a),a.bypassAuthState)}async function bS(a){const{auth:i,user:r}=a;return fe(r,i,"internal-error"),JT(r,new Oh(a),a.bypassAuthState)}/**
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
 */class qy{constructor(i,r,o,f,g=!1){this.auth=i,this.resolver=o,this.user=f,this.bypassAuthState=g,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(i,r)=>{this.pendingPromise={resolve:i,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(i){const{urlResponse:r,sessionId:o,postBody:f,tenantId:g,error:p,type:w}=i;if(p){this.reject(p);return}const x={auth:this.auth,requestUri:r,sessionId:o,tenantId:g||void 0,postBody:f||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(w)(x))}catch(T){this.reject(T)}}onError(i){this.reject(i)}getIdpTask(i){switch(i){case"signInViaPopup":case"signInViaRedirect":return vS;case"linkViaPopup":case"linkViaRedirect":return bS;case"reauthViaPopup":case"reauthViaRedirect":return _S;default:wi(this.auth,"internal-error")}}resolve(i){Ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(i),this.unregisterAndCleanUp()}reject(i){Ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(i),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ES=new Cl(2e3,1e4);class $a extends qy{constructor(i,r,o,f,g){super(i,r,f,g),this.provider=o,this.authWindow=null,this.pollId=null,$a.currentPopupAction&&$a.currentPopupAction.cancel(),$a.currentPopupAction=this}async executeNotNull(){const i=await this.execute();return fe(i,this.auth,"internal-error"),i}async onExecution(){Ci(this.filter.length===1,"Popup operations only handle one event");const i=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],i),this.authWindow.associatedEvent=i,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(ti(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var i;return((i=this.authWindow)==null?void 0:i.associatedEvent)||null}cancel(){this.reject(ti(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$a.currentPopupAction=null}pollUserCancellation(){const i=()=>{var r,o;if((o=(r=this.authWindow)==null?void 0:r.window)!=null&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ti(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(i,ES.get())};i()}}$a.currentPopupAction=null;/**
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
 */const TS="pendingRedirect",du=new Map;class SS extends qy{constructor(i,r,o=!1){super(i,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,o),this.eventId=null}async execute(){let i=du.get(this.auth._key());if(!i){try{const o=await xS(this.resolver,this.auth)?await super.execute():null;i=()=>Promise.resolve(o)}catch(r){i=()=>Promise.reject(r)}du.set(this.auth._key(),i)}return this.bypassAuthState||du.set(this.auth._key(),()=>Promise.resolve(null)),i()}async onAuthEvent(i){if(i.type==="signInViaRedirect")return super.onAuthEvent(i);if(i.type==="unknown"){this.resolve(null);return}if(i.eventId){const r=await this.auth._redirectUserForId(i.eventId);if(r)return this.user=r,super.onAuthEvent(i);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xS(a,i){const r=wS(i),o=NS(a);if(!await o._isAvailable())return!1;const f=await o._get(r)==="true";return await o._remove(r),f}function AS(a,i){du.set(a._key(),i)}function NS(a){return Ai(a._redirectPersistence)}function wS(a){return hu(TS,a.config.apiKey,a.name)}async function CS(a,i,r=!1){if(Wn(a.app))return Promise.reject(ea(a));const o=wh(a),f=yS(o,i),p=await new SS(o,f,r).execute();return p&&!r&&(delete p.user._redirectEventId,await o._persistUserIfCurrent(p.user),await o._setRedirectUser(null,i)),p}/**
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
 */const RS=600*1e3;class OS{constructor(i){this.auth=i,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(i){this.consumers.add(i),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,i)&&(this.sendToConsumer(this.queuedRedirectEvent,i),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(i){this.consumers.delete(i)}onEvent(i){if(this.hasEventBeenHandled(i))return!1;let r=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(i,o)&&(r=!0,this.sendToConsumer(i,o),this.saveEventToCache(i))}),this.hasHandledPotentialRedirect||!DS(i)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=i,r=!0)),r}sendToConsumer(i,r){var o;if(i.error&&!By(i)){const f=((o=i.error.code)==null?void 0:o.split("auth/")[1])||"internal-error";r.onError(ti(this.auth,f))}else r.onAuthEvent(i)}isEventForConsumer(i,r){const o=r.eventId===null||!!i.eventId&&i.eventId===r.eventId;return r.filter.includes(i.type)&&o}hasEventBeenHandled(i){return Date.now()-this.lastProcessedEventTime>=RS&&this.cachedEventUids.clear(),this.cachedEventUids.has(r0(i))}saveEventToCache(i){this.cachedEventUids.add(r0(i)),this.lastProcessedEventTime=Date.now()}}function r0(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(i=>i).join("-")}function By({type:a,error:i}){return a==="unknown"&&(i==null?void 0:i.code)==="auth/no-auth-event"}function DS(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return By(a);default:return!1}}/**
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
 */async function IS(a,i={}){return lr(a,"GET","/v1/projects",i)}/**
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
 */const MS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jS=/^https?/;async function US(a){if(a.config.emulator)return;const{authorizedDomains:i}=await IS(a);for(const r of i)try{if(LS(r))return}catch{}wi(a,"unauthorized-domain")}function LS(a){const i=sh(),{protocol:r,hostname:o}=new URL(i);if(a.startsWith("chrome-extension://")){const p=new URL(a);return p.hostname===""&&o===""?r==="chrome-extension:"&&a.replace("chrome-extension://","")===i.replace("chrome-extension://",""):r==="chrome-extension:"&&p.hostname===o}if(!jS.test(r))return!1;if(MS.test(a))return o===a;const f=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+f+"|"+f+")$","i").test(o)}/**
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
 */const zS=new Cl(3e4,6e4);function l0(){const a=ni().___jsl;if(a!=null&&a.H){for(const i of Object.keys(a.H))if(a.H[i].r=a.H[i].r||[],a.H[i].L=a.H[i].L||[],a.H[i].r=[...a.H[i].L],a.CP)for(let r=0;r<a.CP.length;r++)a.CP[r]=null}}function kS(a){return new Promise((i,r)=>{var f,g,p;function o(){l0(),gapi.load("gapi.iframes",{callback:()=>{i(gapi.iframes.getContext())},ontimeout:()=>{l0(),r(ti(a,"network-request-failed"))},timeout:zS.get()})}if((g=(f=ni().gapi)==null?void 0:f.iframes)!=null&&g.Iframe)i(gapi.iframes.getContext());else if((p=ni().gapi)!=null&&p.load)o();else{const w=PT("iframefcb");return ni()[w]=()=>{gapi.load?o():r(ti(a,"network-request-failed"))},VT(`${GT()}?onload=${w}`).catch(x=>r(x))}}).catch(i=>{throw gu=null,i})}let gu=null;function HS(a){return gu=gu||kS(a),gu}/**
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
 */const qS=new Cl(5e3,15e3),BS="__/auth/iframe",VS="emulator/auth/iframe",GS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YS(a){const i=a.config;fe(i.authDomain,a,"auth-domain-config-required");const r=i.emulator?Sh(i,VS):`https://${a.config.authDomain}/${BS}`,o={apiKey:i.apiKey,appName:a.name,v:rr},f=PS.get(a.config.apiHost);f&&(o.eid=f);const g=a._getFrameworks();return g.length&&(o.fw=g.join(",")),`${r}?${Al(o).slice(1)}`}async function XS(a){const i=await HS(a),r=ni().gapi;return fe(r,a,"internal-error"),i.open({where:document.body,url:YS(a),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GS,dontclear:!0},o=>new Promise(async(f,g)=>{await o.restyle({setHideOnLeave:!1});const p=ti(a,"network-request-failed"),w=ni().setTimeout(()=>{g(p)},qS.get());function x(){ni().clearTimeout(w),f(o)}o.ping(x).then(x,()=>{g(p)})}))}/**
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
 */const FS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KS=500,QS=600,ZS="_blank",JS="http://localhost";class o0{constructor(i){this.window=i,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $S(a,i,r,o=KS,f=QS){const g=Math.max((window.screen.availHeight-f)/2,0).toString(),p=Math.max((window.screen.availWidth-o)/2,0).toString();let w="";const x={...FS,width:o.toString(),height:f.toString(),top:g,left:p},T=Ut().toLowerCase();r&&(w=Ey(T)?ZS:r),_y(T)&&(i=i||JS,x.scrollbars="yes");const P=Object.entries(x).reduce((B,[se,ee])=>`${B}${se}=${ee},`,"");if(jT(T)&&w!=="_self")return WS(i||"",w),new o0(null);const j=window.open(i||"",w,P);fe(j,a,"popup-blocked");try{j.focus()}catch{}return new o0(j)}function WS(a,i){const r=document.createElement("a");r.href=a,r.target=i;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(o)}/**
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
 */const ex="__/auth/handler",tx="emulator/auth/handler",nx=encodeURIComponent("fac");async function u0(a,i,r,o,f,g){fe(a.config.authDomain,a,"auth-domain-config-required"),fe(a.config.apiKey,a,"invalid-api-key");const p={apiKey:a.config.apiKey,appName:a.name,authType:r,redirectUrl:o,v:rr,eventId:f};if(i instanceof Oy){i.setDefaultLanguage(a.languageCode),p.providerId=i.providerId||"",e_(i.getCustomParameters())||(p.customParameters=JSON.stringify(i.getCustomParameters()));for(const[P,j]of Object.entries({}))p[P]=j}if(i instanceof Rl){const P=i.getScopes().filter(j=>j!=="");P.length>0&&(p.scopes=P.join(","))}a.tenantId&&(p.tid=a.tenantId);const w=p;for(const P of Object.keys(w))w[P]===void 0&&delete w[P];const x=await a._getAppCheckToken(),T=x?`#${nx}=${encodeURIComponent(x)}`:"";return`${ix(a)}?${Al(w).slice(1)}${T}`}function ix({config:a}){return a.emulator?Sh(a,tx):`https://${a.authDomain}/${ex}`}/**
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
 */const Qf="webStorageSupport";class sx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uy,this._completeRedirectFn=CS,this._overrideRedirectResult=AS}async _openPopup(i,r,o,f){var p;Ci((p=this.eventManagers[i._key()])==null?void 0:p.manager,"_initialize() not called before _openPopup()");const g=await u0(i,r,o,sh(),f);return $S(i,g,Rh())}async _openRedirect(i,r,o,f){await this._originValidation(i);const g=await u0(i,r,o,sh(),f);return lS(g),new Promise(()=>{})}_initialize(i){const r=i._key();if(this.eventManagers[r]){const{manager:f,promise:g}=this.eventManagers[r];return f?Promise.resolve(f):(Ci(g,"If manager is not set, promise should be"),g)}const o=this.initAndGetManager(i);return this.eventManagers[r]={promise:o},o.catch(()=>{delete this.eventManagers[r]}),o}async initAndGetManager(i){const r=await XS(i),o=new OS(i);return r.register("authEvent",f=>(fe(f==null?void 0:f.authEvent,i,"invalid-auth-event"),{status:o.onEvent(f.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[i._key()]={manager:o},this.iframes[i._key()]=r,o}_isIframeWebStorageSupported(i,r){this.iframes[i._key()].send(Qf,{type:Qf},f=>{var p;const g=(p=f==null?void 0:f[0])==null?void 0:p[Qf];g!==void 0&&r(!!g),wi(i,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(i){const r=i._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=US(i)),this.originValidationPromises[r]}get _shouldInitProactively(){return Ny()||by()||Nh()}}const ax=sx;var c0="@firebase/auth",f0="1.12.0";/**
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
 */class rx{constructor(i){this.auth=i,this.internalListeners=new Map}getUid(){var i;return this.assertAuthConfigured(),((i=this.auth.currentUser)==null?void 0:i.uid)||null}async getToken(i){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(i)}:null}addAuthTokenListener(i){if(this.assertAuthConfigured(),this.internalListeners.has(i))return;const r=this.auth.onIdTokenChanged(o=>{i((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(i,r),this.updateProactiveRefresh()}removeAuthTokenListener(i){this.assertAuthConfigured();const r=this.internalListeners.get(i);r&&(this.internalListeners.delete(i),r(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lx(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ox(a){ii(new Cn("auth",(i,{options:r})=>{const o=i.getProvider("app").getImmediate(),f=i.getProvider("heartbeat"),g=i.getProvider("app-check-internal"),{apiKey:p,authDomain:w}=o.options;fe(p&&!p.includes(":"),"invalid-api-key",{appName:o.name});const x={apiKey:p,authDomain:w,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wy(a)},T=new qT(o,f,g,x);return XT(T,r),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((i,r,o)=>{i.getProvider("auth-internal").initialize()})),ii(new Cn("auth-internal",i=>{const r=wh(i.getProvider("auth").getImmediate());return(o=>new rx(o))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(c0,f0,lx(a)),hn(c0,f0,"esm2020")}/**
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
 */const ux=300,cx=x0("authIdTokenMaxAge")||ux;let h0=null;const fx=a=>async i=>{const r=i&&await i.getIdTokenResult(),o=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(o&&o>cx)return;const f=r==null?void 0:r.token;h0!==f&&(h0=f,await fetch(a,{method:f?"POST":"DELETE",headers:f?{Authorization:`Bearer ${f}`}:{}}))};function hx(a=ch()){const i=ra(a,"auth");if(i.isInitialized())return i.getImmediate();const r=YT(a,{popupRedirectResolver:ax,persistence:[pS,sS,Uy]}),o=x0("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const g=new URL(o,location.origin);if(location.origin===g.origin){const p=fx(g.toString());tS(r,p,()=>p(r.currentUser)),eS(r,w=>p(w))}}const f=T0("auth");return f&&FT(r,`http://${f}`),r}function dx(){var a;return((a=document.getElementsByTagName("head"))==null?void 0:a[0])??document}BT({loadJS(a){return new Promise((i,r)=>{const o=document.createElement("script");o.setAttribute("src",a),o.onload=i,o.onerror=f=>{const g=ti("internal-error");g.customData=f,r(g)},o.type="text/javascript",o.charset="UTF-8",dx().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ox("Browser");const gx={apiKey:"AIzaSyDgdUYq80uSRJLQcJYMzQM6nk77D4ql5Rg",authDomain:"tabibfaqih.firebaseapp.com",projectId:"tabibfaqih",storageBucket:"tabibfaqih.firebasestorage.app",messagingSenderId:"202460803784",appId:"1:202460803784:web:9c6cd0a97b622206f4abfd",measurementId:"G-KMCRY4YDWN"},Dh=M0(gx);ME(Dh);fT(Dh);hx(Dh);const Vy=document.getElementById("root");if(!Vy)throw new Error("Could not find root element to mount to");const mx=Ov.createRoot(Vy);mx.render(y.jsx(Tv.StrictMode,{children:y.jsx(I2,{})}));
