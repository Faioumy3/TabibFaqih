(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const g of f)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function r(f){const g={};return f.integrity&&(g.integrity=f.integrity),f.referrerPolicy&&(g.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?g.credentials="include":f.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function o(f){if(f.ep)return;f.ep=!0;const g=r(f);fetch(f.href,g)}})();function h0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Df={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function v1(){if(Wm)return hl;Wm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(o,f,g){var p=null;if(g!==void 0&&(p=""+g),f.key!==void 0&&(p=""+f.key),"key"in f){g={};for(var C in f)C!=="key"&&(g[C]=f[C])}else g=f;return f=g.ref,{$$typeof:a,type:o,key:p,ref:f!==void 0?f:null,props:g}}return hl.Fragment=i,hl.jsx=r,hl.jsxs=r,hl}var tp;function _1(){return tp||(tp=1,Df.exports=v1()),Df.exports}var v=_1(),If={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function b1(){if(ep)return dt;ep=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),p=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),B=Symbol.iterator;function st(D){return D===null||typeof D!="object"?null:(D=B&&D[B]||D["@@iterator"],typeof D=="function"?D:null)}var tt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nt=Object.assign,lt={};function rt(D,K,J){this.props=D,this.context=K,this.refs=lt,this.updater=J||tt}rt.prototype.isReactComponent={},rt.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},rt.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function it(){}it.prototype=rt.prototype;function ot(D,K,J){this.props=D,this.context=K,this.refs=lt,this.updater=J||tt}var jt=ot.prototype=new it;jt.constructor=ot,nt(jt,rt.prototype),jt.isPureReactComponent=!0;var qt=Array.isArray;function Rt(){}var S={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function b(D,K,J){var $=J.ref;return{$$typeof:a,type:D,key:K,ref:$!==void 0?$:null,props:J}}function w(D,K){return b(D.type,K,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===a}function I(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(J){return K[J]})}var x=/\/+/g;function Xt(D,K){return typeof D=="object"&&D!==null&&D.key!=null?I(""+D.key):K.toString(36)}function Qt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(Rt,Rt):(D.status="pending",D.then(function(K){D.status==="pending"&&(D.status="fulfilled",D.value=K)},function(K){D.status==="pending"&&(D.status="rejected",D.reason=K)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function V(D,K,J,$,ht){var pt=typeof D;(pt==="undefined"||pt==="boolean")&&(D=null);var St=!1;if(D===null)St=!0;else switch(pt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(D.$$typeof){case a:case i:St=!0;break;case P:return St=D._init,V(St(D._payload),K,J,$,ht)}}if(St)return ht=ht(D),St=$===""?"."+Xt(D,0):$,qt(ht)?(J="",St!=null&&(J=St.replace(x,"$&/")+"/"),V(ht,K,J,"",function(vs){return vs})):ht!=null&&(R(ht)&&(ht=w(ht,J+(ht.key==null||D&&D.key===ht.key?"":(""+ht.key).replace(x,"$&/")+"/")+St)),K.push(ht)),1;St=0;var me=$===""?".":$+":";if(qt(D))for(var Zt=0;Zt<D.length;Zt++)$=D[Zt],pt=me+Xt($,Zt),St+=V($,K,J,pt,ht);else if(Zt=st(D),typeof Zt=="function")for(D=Zt.call(D),Zt=0;!($=D.next()).done;)$=$.value,pt=me+Xt($,Zt++),St+=V($,K,J,pt,ht);else if(pt==="object"){if(typeof D.then=="function")return V(Qt(D),K,J,$,ht);throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return St}function Z(D,K,J){if(D==null)return D;var $=[],ht=0;return V(D,$,"","",function(pt){return K.call(J,pt,ht++)}),$}function ut(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(J){(D._status===0||D._status===-1)&&(D._status=1,D._result=J)},function(J){(D._status===0||D._status===-1)&&(D._status=2,D._result=J)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var Ct=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Ut={map:Z,forEach:function(D,K,J){Z(D,function(){K.apply(this,arguments)},J)},count:function(D){var K=0;return Z(D,function(){K++}),K},toArray:function(D){return Z(D,function(K){return K})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return dt.Activity=j,dt.Children=Ut,dt.Component=rt,dt.Fragment=r,dt.Profiler=f,dt.PureComponent=ot,dt.StrictMode=o,dt.Suspense=A,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,dt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return S.H.useMemoCache(D)}},dt.cache=function(D){return function(){return D.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(D,K,J){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var $=nt({},D.props),ht=D.key;if(K!=null)for(pt in K.key!==void 0&&(ht=""+K.key),K)!E.call(K,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&K.ref===void 0||($[pt]=K[pt]);var pt=arguments.length-2;if(pt===1)$.children=J;else if(1<pt){for(var St=Array(pt),me=0;me<pt;me++)St[me]=arguments[me+2];$.children=St}return b(D.type,ht,$)},dt.createContext=function(D){return D={$$typeof:p,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:g,_context:D},D},dt.createElement=function(D,K,J){var $,ht={},pt=null;if(K!=null)for($ in K.key!==void 0&&(pt=""+K.key),K)E.call(K,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ht[$]=K[$]);var St=arguments.length-2;if(St===1)ht.children=J;else if(1<St){for(var me=Array(St),Zt=0;Zt<St;Zt++)me[Zt]=arguments[Zt+2];ht.children=me}if(D&&D.defaultProps)for($ in St=D.defaultProps,St)ht[$]===void 0&&(ht[$]=St[$]);return b(D,pt,ht)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(D){return{$$typeof:C,render:D}},dt.isValidElement=R,dt.lazy=function(D){return{$$typeof:P,_payload:{_status:-1,_result:D},_init:ut}},dt.memo=function(D,K){return{$$typeof:T,type:D,compare:K===void 0?null:K}},dt.startTransition=function(D){var K=S.T,J={};S.T=J;try{var $=D(),ht=S.S;ht!==null&&ht(J,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Rt,Ct)}catch(pt){Ct(pt)}finally{K!==null&&J.types!==null&&(K.types=J.types),S.T=K}},dt.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},dt.use=function(D){return S.H.use(D)},dt.useActionState=function(D,K,J){return S.H.useActionState(D,K,J)},dt.useCallback=function(D,K){return S.H.useCallback(D,K)},dt.useContext=function(D){return S.H.useContext(D)},dt.useDebugValue=function(){},dt.useDeferredValue=function(D,K){return S.H.useDeferredValue(D,K)},dt.useEffect=function(D,K){return S.H.useEffect(D,K)},dt.useEffectEvent=function(D){return S.H.useEffectEvent(D)},dt.useId=function(){return S.H.useId()},dt.useImperativeHandle=function(D,K,J){return S.H.useImperativeHandle(D,K,J)},dt.useInsertionEffect=function(D,K){return S.H.useInsertionEffect(D,K)},dt.useLayoutEffect=function(D,K){return S.H.useLayoutEffect(D,K)},dt.useMemo=function(D,K){return S.H.useMemo(D,K)},dt.useOptimistic=function(D,K){return S.H.useOptimistic(D,K)},dt.useReducer=function(D,K,J){return S.H.useReducer(D,K,J)},dt.useRef=function(D){return S.H.useRef(D)},dt.useState=function(D){return S.H.useState(D)},dt.useSyncExternalStore=function(D,K,J){return S.H.useSyncExternalStore(D,K,J)},dt.useTransition=function(){return S.H.useTransition()},dt.version="19.2.1",dt}var np;function lh(){return np||(np=1,If.exports=b1()),If.exports}var xt=lh();const E1=h0(xt);var Mf={exports:{}},dl={},jf={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function T1(){return ip||(ip=1,(function(a){function i(V,Z){var ut=V.length;V.push(Z);t:for(;0<ut;){var Ct=ut-1>>>1,Ut=V[Ct];if(0<f(Ut,Z))V[Ct]=Z,V[ut]=Ut,ut=Ct;else break t}}function r(V){return V.length===0?null:V[0]}function o(V){if(V.length===0)return null;var Z=V[0],ut=V.pop();if(ut!==Z){V[0]=ut;t:for(var Ct=0,Ut=V.length,D=Ut>>>1;Ct<D;){var K=2*(Ct+1)-1,J=V[K],$=K+1,ht=V[$];if(0>f(J,ut))$<Ut&&0>f(ht,J)?(V[Ct]=ht,V[$]=ut,Ct=$):(V[Ct]=J,V[K]=ut,Ct=K);else if($<Ut&&0>f(ht,ut))V[Ct]=ht,V[$]=ut,Ct=$;else break t}}return Z}function f(V,Z){var ut=V.sortIndex-Z.sortIndex;return ut!==0?ut:V.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;a.unstable_now=function(){return g.now()}}else{var p=Date,C=p.now();a.unstable_now=function(){return p.now()-C}}var A=[],T=[],P=1,j=null,B=3,st=!1,tt=!1,nt=!1,lt=!1,rt=typeof setTimeout=="function"?setTimeout:null,it=typeof clearTimeout=="function"?clearTimeout:null,ot=typeof setImmediate<"u"?setImmediate:null;function jt(V){for(var Z=r(T);Z!==null;){if(Z.callback===null)o(T);else if(Z.startTime<=V)o(T),Z.sortIndex=Z.expirationTime,i(A,Z);else break;Z=r(T)}}function qt(V){if(nt=!1,jt(V),!tt)if(r(A)!==null)tt=!0,Rt||(Rt=!0,I());else{var Z=r(T);Z!==null&&Qt(qt,Z.startTime-V)}}var Rt=!1,S=-1,E=5,b=-1;function w(){return lt?!0:!(a.unstable_now()-b<E)}function R(){if(lt=!1,Rt){var V=a.unstable_now();b=V;var Z=!0;try{t:{tt=!1,nt&&(nt=!1,it(S),S=-1),st=!0;var ut=B;try{e:{for(jt(V),j=r(A);j!==null&&!(j.expirationTime>V&&w());){var Ct=j.callback;if(typeof Ct=="function"){j.callback=null,B=j.priorityLevel;var Ut=Ct(j.expirationTime<=V);if(V=a.unstable_now(),typeof Ut=="function"){j.callback=Ut,jt(V),Z=!0;break e}j===r(A)&&o(A),jt(V)}else o(A);j=r(A)}if(j!==null)Z=!0;else{var D=r(T);D!==null&&Qt(qt,D.startTime-V),Z=!1}}break t}finally{j=null,B=ut,st=!1}Z=void 0}}finally{Z?I():Rt=!1}}}var I;if(typeof ot=="function")I=function(){ot(R)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,Xt=x.port2;x.port1.onmessage=R,I=function(){Xt.postMessage(null)}}else I=function(){rt(R,0)};function Qt(V,Z){S=rt(function(){V(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){V.callback=null},a.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<V?Math.floor(1e3/V):5},a.unstable_getCurrentPriorityLevel=function(){return B},a.unstable_next=function(V){switch(B){case 1:case 2:case 3:var Z=3;break;default:Z=B}var ut=B;B=Z;try{return V()}finally{B=ut}},a.unstable_requestPaint=function(){lt=!0},a.unstable_runWithPriority=function(V,Z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ut=B;B=V;try{return Z()}finally{B=ut}},a.unstable_scheduleCallback=function(V,Z,ut){var Ct=a.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?Ct+ut:Ct):ut=Ct,V){case 1:var Ut=-1;break;case 2:Ut=250;break;case 5:Ut=1073741823;break;case 4:Ut=1e4;break;default:Ut=5e3}return Ut=ut+Ut,V={id:P++,callback:Z,priorityLevel:V,startTime:ut,expirationTime:Ut,sortIndex:-1},ut>Ct?(V.sortIndex=ut,i(T,V),r(A)===null&&V===r(T)&&(nt?(it(S),S=-1):nt=!0,Qt(qt,ut-Ct))):(V.sortIndex=Ut,i(A,V),tt||st||(tt=!0,Rt||(Rt=!0,I()))),V},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(V){var Z=B;return function(){var ut=B;B=Z;try{return V.apply(this,arguments)}finally{B=ut}}}})(Uf)),Uf}var sp;function S1(){return sp||(sp=1,jf.exports=T1()),jf.exports}var Lf={exports:{}},Oe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function A1(){if(ap)return Oe;ap=1;var a=lh();function i(A){var T="https://react.dev/errors/"+A;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)T+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+A+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},f=Symbol.for("react.portal");function g(A,T,P){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:j==null?null:""+j,children:A,containerInfo:T,implementation:P}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(A,T){if(A==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Oe.createPortal=function(A,T){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(i(299));return g(A,T,null,P)},Oe.flushSync=function(A){var T=p.T,P=o.p;try{if(p.T=null,o.p=2,A)return A()}finally{p.T=T,o.p=P,o.d.f()}},Oe.preconnect=function(A,T){typeof A=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,o.d.C(A,T))},Oe.prefetchDNS=function(A){typeof A=="string"&&o.d.D(A)},Oe.preinit=function(A,T){if(typeof A=="string"&&T&&typeof T.as=="string"){var P=T.as,j=C(P,T.crossOrigin),B=typeof T.integrity=="string"?T.integrity:void 0,st=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;P==="style"?o.d.S(A,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:j,integrity:B,fetchPriority:st}):P==="script"&&o.d.X(A,{crossOrigin:j,integrity:B,fetchPriority:st,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Oe.preinitModule=function(A,T){if(typeof A=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var P=C(T.as,T.crossOrigin);o.d.M(A,{crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&o.d.M(A)},Oe.preload=function(A,T){if(typeof A=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var P=T.as,j=C(P,T.crossOrigin);o.d.L(A,P,{crossOrigin:j,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Oe.preloadModule=function(A,T){if(typeof A=="string")if(T){var P=C(T.as,T.crossOrigin);o.d.m(A,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else o.d.m(A)},Oe.requestFormReset=function(A){o.d.r(A)},Oe.unstable_batchedUpdates=function(A,T){return A(T)},Oe.useFormState=function(A,T,P){return p.H.useFormState(A,T,P)},Oe.useFormStatus=function(){return p.H.useHostTransitionStatus()},Oe.version="19.2.1",Oe}var rp;function x1(){if(rp)return Lf.exports;rp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Lf.exports=A1(),Lf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function N1(){if(lp)return dl;lp=1;var a=S1(),i=lh(),r=x1();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function g(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function C(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function A(t){if(g(t)!==t)throw Error(o(188))}function T(t){var e=t.alternate;if(!e){if(e=g(t),e===null)throw Error(o(188));return e!==t?null:t}for(var n=t,s=e;;){var u=n.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){n=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===n)return A(u),t;if(c===s)return A(u),e;c=c.sibling}throw Error(o(188))}if(n.return!==s.return)n=u,s=c;else{for(var d=!1,y=u.child;y;){if(y===n){d=!0,n=u,s=c;break}if(y===s){d=!0,s=u,n=c;break}y=y.sibling}if(!d){for(y=c.child;y;){if(y===n){d=!0,n=c,s=u;break}if(y===s){d=!0,s=c,n=u;break}y=y.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==s)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:e}function P(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=P(t),e!==null)return e;t=t.sibling}return null}var j=Object.assign,B=Symbol.for("react.element"),st=Symbol.for("react.transitional.element"),tt=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),lt=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),it=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),qt=Symbol.for("react.suspense"),Rt=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),R=Symbol.iterator;function I(t){return t===null||typeof t!="object"?null:(t=R&&t[R]||t["@@iterator"],typeof t=="function"?t:null)}var x=Symbol.for("react.client.reference");function Xt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===x?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case nt:return"Fragment";case rt:return"Profiler";case lt:return"StrictMode";case qt:return"Suspense";case Rt:return"SuspenseList";case b:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case tt:return"Portal";case ot:return t.displayName||"Context";case it:return(t._context.displayName||"Context")+".Consumer";case jt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case S:return e=t.displayName||null,e!==null?e:Xt(t.type)||"Memo";case E:e=t._payload,t=t._init;try{return Xt(t(e))}catch{}}return null}var Qt=Array.isArray,V=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},Ct=[],Ut=-1;function D(t){return{current:t}}function K(t){0>Ut||(t.current=Ct[Ut],Ct[Ut]=null,Ut--)}function J(t,e){Ut++,Ct[Ut]=t.current,t.current=e}var $=D(null),ht=D(null),pt=D(null),St=D(null);function me(t,e){switch(J(pt,e),J(ht,t),J($,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Tm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Tm(e),t=Sm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K($),J($,t)}function Zt(){K($),K(ht),K(pt)}function vs(t){t.memoizedState!==null&&J(St,t);var e=$.current,n=Sm(e,t.type);e!==n&&(J(ht,t),J($,n))}function la(t){ht.current===t&&(K($),K(ht)),St.current===t&&(K(St),ol._currentValue=ut)}var oa,ua;function On(t){if(oa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oa=e&&e[1]||"",ua=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oa+t+ua}var or=!1;function _s(t,e){if(!t||or)return"";or=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(e){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(q){var k=q}Reflect.construct(t,[],F)}else{try{F.call()}catch(q){k=q}t.call(F.prototype)}}else{try{throw Error()}catch(q){k=q}(F=t())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(q){if(q&&k&&typeof q.stack=="string")return[q.stack,k.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),d=c[0],y=c[1];if(d&&y){var N=d.split(`
`),z=y.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<z.length&&!z[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===z.length)for(s=N.length-1,u=z.length-1;1<=s&&0<=u&&N[s]!==z[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==z[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==z[u]){var G=`
`+N[s].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=s&&0<=u);break}}}finally{or=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?On(n):""}function ur(t,e){switch(t.tag){case 26:case 27:case 5:return On(t.type);case 16:return On("Lazy");case 13:return t.child!==e&&e!==null?On("Suspense Fallback"):On("Suspense");case 19:return On("SuspenseList");case 0:case 15:return _s(t.type,!1);case 11:return _s(t.type.render,!1);case 1:return _s(t.type,!0);case 31:return On("Activity");default:return""}}function cr(t){try{var e="",n=null;do e+=ur(t,n),n=t,t=t.return;while(t);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var se=Object.prototype.hasOwnProperty,pe=a.unstable_scheduleCallback,Oi=a.unstable_cancelCallback,Du=a.unstable_shouldYield,Dl=a.unstable_requestPaint,De=a.unstable_now,bs=a.unstable_getCurrentPriorityLevel,fr=a.unstable_ImmediatePriority,hr=a.unstable_UserBlockingPriority,Di=a.unstable_NormalPriority,Iu=a.unstable_LowPriority,Il=a.unstable_IdlePriority,Ml=a.log,Mu=a.unstable_setDisableYieldValue,dn=null,Te=null;function We(t){if(typeof Ml=="function"&&Mu(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(dn,t)}catch{}}var ae=Math.clz32?Math.clz32:Ul,jl=Math.log,dr=Math.LN2;function Ul(t){return t>>>=0,t===0?32:31-(jl(t)/dr|0)|0}var Dn=256,Es=262144,re=4194304;function In(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Mn(t,e,n){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,d=t.pingedLanes;t=t.warmLanes;var y=s&134217727;return y!==0?(s=y&~c,s!==0?u=In(s):(d&=y,d!==0?u=In(d):n||(n=y&~t,n!==0&&(u=In(n))))):(y=s&~c,y!==0?u=In(y):d!==0?u=In(d):n||(n=s&~t,n!==0&&(u=In(n)))),u===0?0:e!==0&&e!==u&&(e&c)===0&&(c=u&-u,n=e&-e,c>=n||c===32&&(n&4194048)!==0)?e:u}function gn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ju(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ll(){var t=re;return re<<=1,(re&62914560)===0&&(re=4194304),t}function jn(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ts(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Uu(t,e,n,s,u,c){var d=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var y=t.entanglements,N=t.expirationTimes,z=t.hiddenUpdates;for(n=d&~n;0<n;){var G=31-ae(n),F=1<<G;y[G]=0,N[G]=-1;var k=z[G];if(k!==null)for(z[G]=null,G=0;G<k.length;G++){var q=k[G];q!==null&&(q.lane&=-536870913)}n&=~F}s!==0&&ca(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(d&~e))}function ca(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var s=31-ae(e);t.entangledLanes|=e,t.entanglements[s]=t.entanglements[s]|1073741824|n&261930}function zl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var s=31-ae(n),u=1<<s;u&e|t[s]&e&&(t[s]|=e),n&=~u}}function gr(t,e){var n=e&-e;return n=(n&42)!==0?1:Ss(n),(n&(t.suspendedLanes|e))!==0?0:n}function Ss(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function si(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function kl(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Xm(t.type))}function mn(t,e){var n=Z.p;try{return Z.p=t,e()}finally{Z.p=n}}var pn=Math.random().toString(36).slice(2),le="__reactFiber$"+pn,ve="__reactProps$"+pn,Un="__reactContainer$"+pn,fa="__reactEvents$"+pn,Lu="__reactListeners$"+pn,Hl="__reactHandles$"+pn,ql="__reactResources$"+pn,Ln="__reactMarker$"+pn;function ha(t){delete t[le],delete t[ve],delete t[fa],delete t[Lu],delete t[Hl]}function zn(t){var e=t[le];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[le]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Om(t);t!==null;){if(n=t[le])return n;t=Om(t)}return e}t=n,n=t.parentNode}return null}function tn(t){if(t=t[le]||t[Un]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ge(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function kn(t){var e=t[ql];return e||(e=t[ql]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function oe(t){t[Ln]=!0}var mr=new Set,pr={};function Hn(t,e){qn(t,e),qn(t+"Capture",e)}function qn(t,e){for(pr[t]=e,t=0;t<e.length;t++)mr.add(e[t])}var yr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vr={},_r={};function Bl(t){return se.call(_r,t)?!0:se.call(vr,t)?!1:yr.test(t)?_r[t]=!0:(vr[t]=!0,!1)}function da(t,e,n){if(Bl(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var s=e.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Pe(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function ue(t,e,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+s)}}function _e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ii(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function br(t,e,n){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(d){n=""+d,c.call(this,d)}}),Object.defineProperty(t,e,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Lt(t){if(!t._valueTracker){var e=Ii(t)?"checked":"value";t._valueTracker=br(t,e,""+t[e])}}function As(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),s="";return t&&(s=Ii(t)?t.checked?"true":"false":t.value),t=s,t!==n?(e.setValue(t),!0):!1}function Bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xs=/[\n"\\]/g;function Le(t){return t.replace(xs,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ga(t,e,n,s,u,c,d,y){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+_e(e)):t.value!==""+_e(e)&&(t.value=""+_e(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?Er(t,d,_e(e)):n!=null?Er(t,d,_e(n)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+_e(y):t.removeAttribute("name")}function Vl(t,e,n,s,u,c,d,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Lt(t);return}n=n!=null?""+_e(n):"",e=e!=null?""+_e(e):n,y||e===t.value||(t.value=e),t.defaultValue=e}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=y?t.checked:!!s,t.defaultChecked=!!s,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d),Lt(t)}function Er(t,e,n){e==="number"&&Bn(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Mi(t,e,n,s){if(t=t.options,e){e={};for(var u=0;u<n.length;u++)e["$"+n[u]]=!0;for(n=0;n<t.length;n++)u=e.hasOwnProperty("$"+t[n].value),t[n].selected!==u&&(t[n].selected=u),u&&s&&(t[n].defaultSelected=!0)}else{for(n=""+_e(n),e=null,u=0;u<t.length;u++){if(t[u].value===n){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Gl(t,e,n){if(e!=null&&(e=""+_e(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+_e(n):""}function ji(t,e,n,s){if(e==null){if(s!=null){if(n!=null)throw Error(o(92));if(Qt(s)){if(1<s.length)throw Error(o(93));s=s[0]}n=s}n==null&&(n=""),e=n}n=_e(e),t.defaultValue=n,s=t.textContent,s===n&&s!==""&&s!==null&&(t.value=s),Lt(t)}function ze(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tr(t,e,n){var s=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":s?t.setProperty(e,n):typeof n!="number"||n===0||Pl.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Sr(t,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||e!=null&&e.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in e)s=e[u],e.hasOwnProperty(u)&&n[u]!==s&&Tr(t,u,s)}else for(var c in e)e.hasOwnProperty(c)&&Tr(t,c,e[c])}function ma(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ui=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pa(t){return Ui.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function yn(){}var Ar=null;function en(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Li=null,Vn=null;function Ns(t){var e=tn(t);if(e&&(t=e.stateNode)){var n=t[ve]||null;t:switch(t=e.stateNode,e.type){case"input":if(ga(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Le(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var s=n[e];if(s!==t&&s.form===t.form){var u=s[ve]||null;if(!u)throw Error(o(90));ga(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<n.length;e++)s=n[e],s.form===t.form&&As(s)}break t;case"textarea":Gl(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}}}var ya=!1;function zi(t,e,n){if(ya)return t(e,n);ya=!0;try{var s=t(e);return s}finally{if(ya=!1,(Li!==null||Vn!==null)&&(Ho(),Li&&(e=Li,t=Vn,Vn=Li=null,Ns(e),t)))for(e=0;e<t.length;e++)Ns(t[e])}}function vn(t,e){var n=t.stateNode;if(n===null)return null;var s=n[ve]||null;if(s===null)return null;n=s[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ws=!1;if(nn)try{var Pt={};Object.defineProperty(Pt,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Pt,Pt),window.removeEventListener("test",Pt,Pt)}catch{ws=!1}var Gn=null,xr=null,Cs=null;function Nr(){if(Cs)return Cs;var t,e=xr,n=e.length,s,u="value"in Gn?Gn.value:Gn.textContent,c=u.length;for(t=0;t<n&&e[t]===u[t];t++);var d=n-t;for(s=1;s<=d&&e[n-s]===u[c-s];s++);return Cs=u.slice(t,1<s?1-s:void 0)}function Rs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ai(){return!0}function _n(){return!1}function Se(t){function e(n,s,u,c,d){this._reactName=n,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(n=t[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ai:_n,this.isPropagationStopped=_n,this}return j(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),e}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=Se(ri),ki=j({},ri,{view:0,detail:0}),wr=Se(ki),Hi,va,Yn,_a=j({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ce,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yn&&(Yn&&t.type==="mousemove"?(Hi=t.screenX-Yn.screenX,va=t.screenY-Yn.screenY):va=Hi=0,Yn=t),Hi)},movementY:function(t){return"movementY"in t?t.movementY:va}}),Cr=Se(_a),Os=j({},_a,{dataTransfer:0}),Xl=Se(Os),Fl=j({},ki,{relatedTarget:0}),Ds=Se(Fl),Rr=j({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),Kl=Se(Rr),ba=j({},ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ql=Se(ba),Zl=j({},ri,{data:0}),Xn=Se(Zl),Jl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$l={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function to(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wl[t])?!!e[t]:!1}function Ce(){return to}var eo=j({},ki,{key:function(t){if(t.key){var e=Jl[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$l[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ce,charCode:function(t){return t.type==="keypress"?Rs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),no=Se(eo),qi=j({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l=Se(qi),h=j({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ce}),m=Se(h),_=j({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),U=Se(_),H=j({},_a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q=Se(H),gt=j({},ri,{newState:0,oldState:0}),ee=Se(gt),zt=[9,13,27,32],$t=nn&&"CompositionEvent"in window,Re=null;nn&&"documentMode"in document&&(Re=document.documentMode);var li=nn&&"TextEvent"in window&&!Re,bn=nn&&(!$t||Re&&8<Re&&11>=Re),En=" ",Is=!1;function Ea(t,e){switch(t){case"keyup":return zt.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ta=!1;function Vy(t,e){switch(t){case"compositionend":return Ih(e);case"keypress":return e.which!==32?null:(Is=!0,En);case"textInput":return t=e.data,t===En&&Is?null:t;default:return null}}function Gy(t,e){if(Ta)return t==="compositionend"||!$t&&Ea(t,e)?(t=Nr(),Cs=xr=Gn=null,Ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bn&&e.locale!=="ko"?null:e.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Py[t.type]:e==="textarea"}function jh(t,e,n,s){Li?Vn?Vn.push(s):Vn=[s]:Li=s,e=Xo(e,"onChange"),0<e.length&&(n=new Pn("onChange","change",null,n,s),t.push({event:n,listeners:e}))}var Or=null,Dr=null;function Yy(t){pm(t,0)}function io(t){var e=Ge(t);if(As(e))return t}function Uh(t,e){if(t==="change")return e}var Lh=!1;if(nn){var zu;if(nn){var ku="oninput"in document;if(!ku){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),ku=typeof zh.oninput=="function"}zu=ku}else zu=!1;Lh=zu&&(!document.documentMode||9<document.documentMode)}function kh(){Or&&(Or.detachEvent("onpropertychange",Hh),Dr=Or=null)}function Hh(t){if(t.propertyName==="value"&&io(Dr)){var e=[];jh(e,Dr,t,en(t)),zi(Yy,e)}}function Xy(t,e,n){t==="focusin"?(kh(),Or=e,Dr=n,Or.attachEvent("onpropertychange",Hh)):t==="focusout"&&kh()}function Fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(Dr)}function Ky(t,e){if(t==="click")return io(e)}function Qy(t,e){if(t==="input"||t==="change")return io(e)}function Zy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ye=typeof Object.is=="function"?Object.is:Zy;function Ir(t,e){if(Ye(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),s=Object.keys(e);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var u=n[s];if(!se.call(e,u)||!Ye(t[u],e[u]))return!1}return!0}function qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bh(t,e){var n=qh(t);t=0;for(var s;n;){if(n.nodeType===3){if(s=t+n.textContent.length,t<=e&&s>=e)return{node:n,offset:e-t};t=s}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=qh(n)}}function Vh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Bn(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bn(t.document)}return e}function Hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Jy=nn&&"documentMode"in document&&11>=document.documentMode,Sa=null,qu=null,Mr=null,Bu=!1;function Ph(t,e,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||Sa==null||Sa!==Bn(s)||(s=Sa,"selectionStart"in s&&Hu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Mr&&Ir(Mr,s)||(Mr=s,s=Xo(qu,"onSelect"),0<s.length&&(e=new Pn("onSelect","select",null,e,n),t.push({event:e,listeners:s}),e.target=Sa)))}function Ms(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Aa={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},Vu={},Yh={};nn&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function js(t){if(Vu[t])return Vu[t];if(!Aa[t])return t;var e=Aa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yh)return Vu[t]=e[n];return t}var Xh=js("animationend"),Fh=js("animationiteration"),Kh=js("animationstart"),$y=js("transitionrun"),Wy=js("transitionstart"),tv=js("transitioncancel"),Qh=js("transitionend"),Zh=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function Tn(t,e){Zh.set(t,e),Hn(e,[t])}var so=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},sn=[],xa=0,Pu=0;function ao(){for(var t=xa,e=Pu=xa=0;e<t;){var n=sn[e];sn[e++]=null;var s=sn[e];sn[e++]=null;var u=sn[e];sn[e++]=null;var c=sn[e];if(sn[e++]=null,s!==null&&u!==null){var d=s.pending;d===null?u.next=u:(u.next=d.next,d.next=u),s.pending=u}c!==0&&Jh(n,u,c)}}function ro(t,e,n,s){sn[xa++]=t,sn[xa++]=e,sn[xa++]=n,sn[xa++]=s,Pu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Yu(t,e,n,s){return ro(t,e,n,s),lo(t)}function Us(t,e){return ro(t,null,null,e),lo(t)}function Jh(t,e,n){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n);for(var u=!1,c=t.return;c!==null;)c.childLanes|=n,s=c.alternate,s!==null&&(s.childLanes|=n),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&e!==null&&(u=31-ae(n),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[e]:s.push(e),e.lane=n|536870912),c):null}function lo(t){if(50<el)throw el=0,tf=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Na={};function ev(t,e,n,s){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,s){return new ev(t,e,n,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oi(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function $h(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function oo(t,e,n,s,u,c){var d=0;if(s=t,typeof t=="function")Xu(t)&&(d=1);else if(typeof t=="string")d=r1(t,n,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case b:return t=Xe(31,n,e,u),t.elementType=b,t.lanes=c,t;case nt:return Ls(n.children,u,c,e);case lt:d=8,u|=24;break;case rt:return t=Xe(12,n,e,u|2),t.elementType=rt,t.lanes=c,t;case qt:return t=Xe(13,n,e,u),t.elementType=qt,t.lanes=c,t;case Rt:return t=Xe(19,n,e,u),t.elementType=Rt,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ot:d=10;break t;case it:d=9;break t;case jt:d=11;break t;case S:d=14;break t;case E:d=16,s=null;break t}d=29,n=Error(o(130,t===null?"null":typeof t,"")),s=null}return e=Xe(d,n,e,u),e.elementType=t,e.type=s,e.lanes=c,e}function Ls(t,e,n,s){return t=Xe(7,t,s,e),t.lanes=n,t}function Fu(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Wh(t){var e=Xe(18,null,null,0);return e.stateNode=t,e}function Ku(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var td=new WeakMap;function an(t,e){if(typeof t=="object"&&t!==null){var n=td.get(t);return n!==void 0?n:(e={value:t,source:e,stack:cr(e)},td.set(t,e),e)}return{value:t,source:e,stack:cr(e)}}var wa=[],Ca=0,uo=null,jr=0,rn=[],ln=0,Bi=null,Fn=1,Kn="";function ui(t,e){wa[Ca++]=jr,wa[Ca++]=uo,uo=t,jr=e}function ed(t,e,n){rn[ln++]=Fn,rn[ln++]=Kn,rn[ln++]=Bi,Bi=t;var s=Fn;t=Kn;var u=32-ae(s)-1;s&=~(1<<u),n+=1;var c=32-ae(e)+u;if(30<c){var d=u-u%5;c=(s&(1<<d)-1).toString(32),s>>=d,u-=d,Fn=1<<32-ae(e)+u|n<<u|s,Kn=c+t}else Fn=1<<c|n<<u|s,Kn=t}function Qu(t){t.return!==null&&(ui(t,1),ed(t,1,0))}function Zu(t){for(;t===uo;)uo=wa[--Ca],wa[Ca]=null,jr=wa[--Ca],wa[Ca]=null;for(;t===Bi;)Bi=rn[--ln],rn[ln]=null,Kn=rn[--ln],rn[ln]=null,Fn=rn[--ln],rn[ln]=null}function nd(t,e){rn[ln++]=Fn,rn[ln++]=Kn,rn[ln++]=Bi,Fn=e.id,Kn=e.overflow,Bi=t}var Ae=null,Ft=null,Tt=!1,Vi=null,on=!1,Ju=Error(o(519));function Gi(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ur(an(e,t)),Ju}function id(t){var e=t.stateNode,n=t.type,s=t.memoizedProps;switch(e[le]=t,e[ve]=s,n){case"dialog":_t("cancel",e),_t("close",e);break;case"iframe":case"object":case"embed":_t("load",e);break;case"video":case"audio":for(n=0;n<il.length;n++)_t(il[n],e);break;case"source":_t("error",e);break;case"img":case"image":case"link":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"input":_t("invalid",e),Vl(e,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_t("invalid",e);break;case"textarea":_t("invalid",e),ji(e,s.value,s.defaultValue,s.children)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||s.suppressHydrationWarning===!0||bm(e.textContent,n)?(s.popover!=null&&(_t("beforetoggle",e),_t("toggle",e)),s.onScroll!=null&&_t("scroll",e),s.onScrollEnd!=null&&_t("scrollend",e),s.onClick!=null&&(e.onclick=yn),e=!0):e=!1,e||Gi(t,!0)}function sd(t){for(Ae=t.return;Ae;)switch(Ae.tag){case 5:case 31:case 13:on=!1;return;case 27:case 3:on=!0;return;default:Ae=Ae.return}}function Ra(t){if(t!==Ae)return!1;if(!Tt)return sd(t),Tt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||pf(t.type,t.memoizedProps)),n=!n),n&&Ft&&Gi(t),sd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Ft=Rm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Ft=Rm(t)}else e===27?(e=Ft,is(t.type)?(t=Ef,Ef=null,Ft=t):Ft=e):Ft=Ae?cn(t.stateNode.nextSibling):null;return!0}function zs(){Ft=Ae=null,Tt=!1}function $u(){var t=Vi;return t!==null&&(Be===null?Be=t:Be.push.apply(Be,t),Vi=null),t}function Ur(t){Vi===null?Vi=[t]:Vi.push(t)}var Wu=D(null),ks=null,ci=null;function Pi(t,e,n){J(Wu,e._currentValue),e._currentValue=n}function fi(t){t._currentValue=Wu.current,K(Wu)}function tc(t,e,n){for(;t!==null;){var s=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),t===n)break;t=t.return}}function ec(t,e,n,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var d=u.child;c=c.firstContext;t:for(;c!==null;){var y=c;c=u;for(var N=0;N<e.length;N++)if(y.context===e[N]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),tc(c.return,n,t),s||(d=null);break t}c=y.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(o(341));d.lanes|=n,c=d.alternate,c!==null&&(c.lanes|=n),tc(d,n,t),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===t){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function Oa(t,e,n,s){t=null;for(var u=e,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var y=u.type;Ye(u.pendingProps.value,d.value)||(t!==null?t.push(y):t=[y])}}else if(u===St.current){if(d=u.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ol):t=[ol])}u=u.return}t!==null&&ec(e,t,n,s),e.flags|=262144}function co(t){for(t=t.firstContext;t!==null;){if(!Ye(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hs(t){ks=t,ci=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function xe(t){return ad(ks,t)}function fo(t,e){return ks===null&&Hs(t),ad(t,e)}function ad(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},ci===null){if(t===null)throw Error(o(308));ci=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ci=ci.next=e;return n}var nv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,s){t.push(s)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},iv=a.unstable_scheduleCallback,sv=a.unstable_NormalPriority,ce={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nc(){return{controller:new nv,data:new Map,refCount:0}}function Lr(t){t.refCount--,t.refCount===0&&iv(sv,function(){t.controller.abort()})}var zr=null,ic=0,Da=0,Ia=null;function av(t,e){if(zr===null){var n=zr=[];ic=0,Da=lf(),Ia={status:"pending",value:void 0,then:function(s){n.push(s)}}}return ic++,e.then(rd,rd),e}function rd(){if(--ic===0&&zr!==null){Ia!==null&&(Ia.status="fulfilled");var t=zr;zr=null,Da=0,Ia=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function rv(t,e){var n=[],s={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return t.then(function(){s.status="fulfilled",s.value=e;for(var u=0;u<n.length;u++)(0,n[u])(e)},function(u){for(s.status="rejected",s.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),s}var ld=V.S;V.S=function(t,e){Pg=De(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&av(t,e),ld!==null&&ld(t,e)};var qs=D(null);function sc(){var t=qs.current;return t!==null?t:Yt.pooledCache}function ho(t,e){e===null?J(qs,qs.current):J(qs,e.pool)}function od(){var t=sc();return t===null?null:{parent:ce._currentValue,pool:t}}var Ma=Error(o(460)),ac=Error(o(474)),go=Error(o(542)),mo={then:function(){}};function ud(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(yn,yn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,hd(t),t;default:if(typeof e.status=="string")e.then(yn,yn);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(s){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=s}},function(s){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=s}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,hd(t),t}throw Vs=e,Ma}}function Bs(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Vs=n,Ma):n}}var Vs=null;function fd(){if(Vs===null)throw Error(o(459));var t=Vs;return Vs=null,t}function hd(t){if(t===Ma||t===go)throw Error(o(483))}var ja=null,kr=0;function po(t){var e=kr;return kr+=1,ja===null&&(ja=[]),cd(ja,t,e)}function Hr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function yo(t,e){throw e.$$typeof===B?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function dd(t){function e(M,O){if(t){var L=M.deletions;L===null?(M.deletions=[O],M.flags|=16):L.push(O)}}function n(M,O){if(!t)return null;for(;O!==null;)e(M,O),O=O.sibling;return null}function s(M){for(var O=new Map;M!==null;)M.key!==null?O.set(M.key,M):O.set(M.index,M),M=M.sibling;return O}function u(M,O){return M=oi(M,O),M.index=0,M.sibling=null,M}function c(M,O,L){return M.index=L,t?(L=M.alternate,L!==null?(L=L.index,L<O?(M.flags|=67108866,O):L):(M.flags|=67108866,O)):(M.flags|=1048576,O)}function d(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function y(M,O,L,X){return O===null||O.tag!==6?(O=Fu(L,M.mode,X),O.return=M,O):(O=u(O,L),O.return=M,O)}function N(M,O,L,X){var at=L.type;return at===nt?G(M,O,L.props.children,X,L.key):O!==null&&(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===E&&Bs(at)===O.type)?(O=u(O,L.props),Hr(O,L),O.return=M,O):(O=oo(L.type,L.key,L.props,null,M.mode,X),Hr(O,L),O.return=M,O)}function z(M,O,L,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==L.containerInfo||O.stateNode.implementation!==L.implementation?(O=Ku(L,M.mode,X),O.return=M,O):(O=u(O,L.children||[]),O.return=M,O)}function G(M,O,L,X,at){return O===null||O.tag!==7?(O=Ls(L,M.mode,X,at),O.return=M,O):(O=u(O,L),O.return=M,O)}function F(M,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Fu(""+O,M.mode,L),O.return=M,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case st:return L=oo(O.type,O.key,O.props,null,M.mode,L),Hr(L,O),L.return=M,L;case tt:return O=Ku(O,M.mode,L),O.return=M,O;case E:return O=Bs(O),F(M,O,L)}if(Qt(O)||I(O))return O=Ls(O,M.mode,L,null),O.return=M,O;if(typeof O.then=="function")return F(M,po(O),L);if(O.$$typeof===ot)return F(M,fo(M,O),L);yo(M,O)}return null}function k(M,O,L,X){var at=O!==null?O.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return at!==null?null:y(M,O,""+L,X);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case st:return L.key===at?N(M,O,L,X):null;case tt:return L.key===at?z(M,O,L,X):null;case E:return L=Bs(L),k(M,O,L,X)}if(Qt(L)||I(L))return at!==null?null:G(M,O,L,X,null);if(typeof L.then=="function")return k(M,O,po(L),X);if(L.$$typeof===ot)return k(M,O,fo(M,L),X);yo(M,L)}return null}function q(M,O,L,X,at){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return M=M.get(L)||null,y(O,M,""+X,at);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case st:return M=M.get(X.key===null?L:X.key)||null,N(O,M,X,at);case tt:return M=M.get(X.key===null?L:X.key)||null,z(O,M,X,at);case E:return X=Bs(X),q(M,O,L,X,at)}if(Qt(X)||I(X))return M=M.get(L)||null,G(O,M,X,at,null);if(typeof X.then=="function")return q(M,O,L,po(X),at);if(X.$$typeof===ot)return q(M,O,L,fo(O,X),at);yo(O,X)}return null}function W(M,O,L,X){for(var at=null,Ot=null,et=O,yt=O=0,Et=null;et!==null&&yt<L.length;yt++){et.index>yt?(Et=et,et=null):Et=et.sibling;var Dt=k(M,et,L[yt],X);if(Dt===null){et===null&&(et=Et);break}t&&et&&Dt.alternate===null&&e(M,et),O=c(Dt,O,yt),Ot===null?at=Dt:Ot.sibling=Dt,Ot=Dt,et=Et}if(yt===L.length)return n(M,et),Tt&&ui(M,yt),at;if(et===null){for(;yt<L.length;yt++)et=F(M,L[yt],X),et!==null&&(O=c(et,O,yt),Ot===null?at=et:Ot.sibling=et,Ot=et);return Tt&&ui(M,yt),at}for(et=s(et);yt<L.length;yt++)Et=q(et,M,yt,L[yt],X),Et!==null&&(t&&Et.alternate!==null&&et.delete(Et.key===null?yt:Et.key),O=c(Et,O,yt),Ot===null?at=Et:Ot.sibling=Et,Ot=Et);return t&&et.forEach(function(os){return e(M,os)}),Tt&&ui(M,yt),at}function ct(M,O,L,X){if(L==null)throw Error(o(151));for(var at=null,Ot=null,et=O,yt=O=0,Et=null,Dt=L.next();et!==null&&!Dt.done;yt++,Dt=L.next()){et.index>yt?(Et=et,et=null):Et=et.sibling;var os=k(M,et,Dt.value,X);if(os===null){et===null&&(et=Et);break}t&&et&&os.alternate===null&&e(M,et),O=c(os,O,yt),Ot===null?at=os:Ot.sibling=os,Ot=os,et=Et}if(Dt.done)return n(M,et),Tt&&ui(M,yt),at;if(et===null){for(;!Dt.done;yt++,Dt=L.next())Dt=F(M,Dt.value,X),Dt!==null&&(O=c(Dt,O,yt),Ot===null?at=Dt:Ot.sibling=Dt,Ot=Dt);return Tt&&ui(M,yt),at}for(et=s(et);!Dt.done;yt++,Dt=L.next())Dt=q(et,M,yt,Dt.value,X),Dt!==null&&(t&&Dt.alternate!==null&&et.delete(Dt.key===null?yt:Dt.key),O=c(Dt,O,yt),Ot===null?at=Dt:Ot.sibling=Dt,Ot=Dt);return t&&et.forEach(function(y1){return e(M,y1)}),Tt&&ui(M,yt),at}function Gt(M,O,L,X){if(typeof L=="object"&&L!==null&&L.type===nt&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case st:t:{for(var at=L.key;O!==null;){if(O.key===at){if(at=L.type,at===nt){if(O.tag===7){n(M,O.sibling),X=u(O,L.props.children),X.return=M,M=X;break t}}else if(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===E&&Bs(at)===O.type){n(M,O.sibling),X=u(O,L.props),Hr(X,L),X.return=M,M=X;break t}n(M,O);break}else e(M,O);O=O.sibling}L.type===nt?(X=Ls(L.props.children,M.mode,X,L.key),X.return=M,M=X):(X=oo(L.type,L.key,L.props,null,M.mode,X),Hr(X,L),X.return=M,M=X)}return d(M);case tt:t:{for(at=L.key;O!==null;){if(O.key===at)if(O.tag===4&&O.stateNode.containerInfo===L.containerInfo&&O.stateNode.implementation===L.implementation){n(M,O.sibling),X=u(O,L.children||[]),X.return=M,M=X;break t}else{n(M,O);break}else e(M,O);O=O.sibling}X=Ku(L,M.mode,X),X.return=M,M=X}return d(M);case E:return L=Bs(L),Gt(M,O,L,X)}if(Qt(L))return W(M,O,L,X);if(I(L)){if(at=I(L),typeof at!="function")throw Error(o(150));return L=at.call(L),ct(M,O,L,X)}if(typeof L.then=="function")return Gt(M,O,po(L),X);if(L.$$typeof===ot)return Gt(M,O,fo(M,L),X);yo(M,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,O!==null&&O.tag===6?(n(M,O.sibling),X=u(O,L),X.return=M,M=X):(n(M,O),X=Fu(L,M.mode,X),X.return=M,M=X),d(M)):n(M,O)}return function(M,O,L,X){try{kr=0;var at=Gt(M,O,L,X);return ja=null,at}catch(et){if(et===Ma||et===go)throw et;var Ot=Xe(29,et,null,M.mode);return Ot.lanes=X,Ot.return=M,Ot}finally{}}}var Gs=dd(!0),gd=dd(!1),Yi=!1;function rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(t,e,n){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(It&2)!==0){var u=s.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),s.pending=e,e=lo(t),Jh(t,null,n),e}return ro(t,s,e,n),lo(t)}function qr(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var s=e.lanes;s&=t.pendingLanes,n|=s,e.lanes=n,zl(t,n)}}function oc(t,e){var n=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var u=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?u=c=d:c=c.next=d,n=n.next}while(n!==null);c===null?u=c=e:c=c.next=e}else u=c=e;n={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var uc=!1;function Br(){if(uc){var t=Ia;if(t!==null)throw t}}function Vr(t,e,n,s){uc=!1;var u=t.updateQueue;Yi=!1;var c=u.firstBaseUpdate,d=u.lastBaseUpdate,y=u.shared.pending;if(y!==null){u.shared.pending=null;var N=y,z=N.next;N.next=null,d===null?c=z:d.next=z,d=N;var G=t.alternate;G!==null&&(G=G.updateQueue,y=G.lastBaseUpdate,y!==d&&(y===null?G.firstBaseUpdate=z:y.next=z,G.lastBaseUpdate=N))}if(c!==null){var F=u.baseState;d=0,G=z=N=null,y=c;do{var k=y.lane&-536870913,q=k!==y.lane;if(q?(bt&k)===k:(s&k)===k){k!==0&&k===Da&&(uc=!0),G!==null&&(G=G.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var W=t,ct=y;k=e;var Gt=n;switch(ct.tag){case 1:if(W=ct.payload,typeof W=="function"){F=W.call(Gt,F,k);break t}F=W;break t;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ct.payload,k=typeof W=="function"?W.call(Gt,F,k):W,k==null)break t;F=j({},F,k);break t;case 2:Yi=!0}}k=y.callback,k!==null&&(t.flags|=64,q&&(t.flags|=8192),q=u.callbacks,q===null?u.callbacks=[k]:q.push(k))}else q={lane:k,tag:y.tag,payload:y.payload,callback:y.callback,next:null},G===null?(z=G=q,N=F):G=G.next=q,d|=k;if(y=y.next,y===null){if(y=u.shared.pending,y===null)break;q=y,y=q.next,q.next=null,u.lastBaseUpdate=q,u.shared.pending=null}}while(!0);G===null&&(N=F),u.baseState=N,u.firstBaseUpdate=z,u.lastBaseUpdate=G,c===null&&(u.shared.lanes=0),$i|=d,t.lanes=d,t.memoizedState=F}}function md(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function pd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)md(n[t],e)}var Ua=D(null),vo=D(0);function yd(t,e){t=bi,J(vo,t),J(Ua,e),bi=t|e.baseLanes}function cc(){J(vo,bi),J(Ua,Ua.current)}function fc(){bi=vo.current,K(Ua),K(vo)}var Fe=D(null),un=null;function Ki(t){var e=t.alternate;J(ne,ne.current&1),J(Fe,t),un===null&&(e===null||Ua.current!==null||e.memoizedState!==null)&&(un=t)}function hc(t){J(ne,ne.current),J(Fe,t),un===null&&(un=t)}function vd(t){t.tag===22?(J(ne,ne.current),J(Fe,t),un===null&&(un=t)):Qi()}function Qi(){J(ne,ne.current),J(Fe,Fe.current)}function Ke(t){K(Fe),un===t&&(un=null),K(ne)}var ne=D(0);function _o(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||_f(n)||bf(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hi=0,mt=null,Bt=null,fe=null,bo=!1,La=!1,Ps=!1,Eo=0,Gr=0,za=null,lv=0;function Wt(){throw Error(o(321))}function dc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ye(t[n],e[n]))return!1;return!0}function gc(t,e,n,s,u,c){return hi=c,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,V.H=t===null||t.memoizedState===null?eg:Rc,Ps=!1,c=n(s,u),Ps=!1,La&&(c=bd(e,n,s,u)),_d(t),c}function _d(t){V.H=Xr;var e=Bt!==null&&Bt.next!==null;if(hi=0,fe=Bt=mt=null,bo=!1,Gr=0,za=null,e)throw Error(o(300));t===null||he||(t=t.dependencies,t!==null&&co(t)&&(he=!0))}function bd(t,e,n,s){mt=t;var u=0;do{if(La&&(za=null),Gr=0,La=!1,25<=u)throw Error(o(301));if(u+=1,fe=Bt=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}V.H=ng,c=e(n,s)}while(La);return c}function ov(){var t=V.H,e=t.useState()[0];return e=typeof e.then=="function"?Pr(e):e,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(mt.flags|=1024),e}function mc(){var t=Eo!==0;return Eo=0,t}function pc(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function yc(t){if(bo){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}bo=!1}hi=0,fe=Bt=mt=null,La=!1,Gr=Eo=0,za=null}function Ie(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?mt.memoizedState=fe=t:fe=fe.next=t,fe}function ie(){if(Bt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=fe===null?mt.memoizedState:fe.next;if(e!==null)fe=e,Bt=t;else{if(t===null)throw mt.alternate===null?Error(o(467)):Error(o(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},fe===null?mt.memoizedState=fe=t:fe=fe.next=t}return fe}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pr(t){var e=Gr;return Gr+=1,za===null&&(za=[]),t=cd(za,t,e),e=mt,(fe===null?e.memoizedState:fe.next)===null&&(e=e.alternate,V.H=e===null||e.memoizedState===null?eg:Rc),t}function So(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pr(t);if(t.$$typeof===ot)return xe(t)}throw Error(o(438,String(t)))}function vc(t){var e=null,n=mt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var s=mt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(e={data:s.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=To(),mt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),s=0;s<t;s++)n[s]=w;return e.index++,n}function di(t,e){return typeof e=="function"?e(t):e}function Ao(t){var e=ie();return _c(e,Bt,t)}function _c(t,e,n){var s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=n;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var d=u.next;u.next=c.next,c.next=d}e.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{e=u.next;var y=d=null,N=null,z=e,G=!1;do{var F=z.lane&-536870913;if(F!==z.lane?(bt&F)===F:(hi&F)===F){var k=z.revertLane;if(k===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),F===Da&&(G=!0);else if((hi&k)===k){z=z.next,k===Da&&(G=!0);continue}else F={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},N===null?(y=N=F,d=c):N=N.next=F,mt.lanes|=k,$i|=k;F=z.action,Ps&&n(c,F),c=z.hasEagerState?z.eagerState:n(c,F)}else k={lane:F,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},N===null?(y=N=k,d=c):N=N.next=k,mt.lanes|=F,$i|=F;z=z.next}while(z!==null&&z!==e);if(N===null?d=c:N.next=y,!Ye(c,t.memoizedState)&&(he=!0,G&&(n=Ia,n!==null)))throw n;t.memoizedState=c,t.baseState=d,t.baseQueue=N,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function bc(t){var e=ie(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var s=n.dispatch,u=n.pending,c=e.memoizedState;if(u!==null){n.pending=null;var d=u=u.next;do c=t(c,d.action),d=d.next;while(d!==u);Ye(c,e.memoizedState)||(he=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),n.lastRenderedState=c}return[c,s]}function Ed(t,e,n){var s=mt,u=ie(),c=Tt;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=e();var d=!Ye((Bt||u).memoizedState,n);if(d&&(u.memoizedState=n,he=!0),u=u.queue,Sc(Ad.bind(null,s,u,t),[t]),u.getSnapshot!==e||d||fe!==null&&fe.memoizedState.tag&1){if(s.flags|=2048,ka(9,{destroy:void 0},Sd.bind(null,s,u,n,e),null),Yt===null)throw Error(o(349));c||(hi&127)!==0||Td(s,e,n)}return n}function Td(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e=To(),mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sd(t,e,n,s){e.value=n,e.getSnapshot=s,xd(e)&&Nd(t)}function Ad(t,e,n){return n(function(){xd(e)&&Nd(t)})}function xd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ye(t,n)}catch{return!0}}function Nd(t){var e=Us(t,2);e!==null&&Ve(e,t,2)}function Ec(t){var e=Ie();if(typeof t=="function"){var n=t;if(t=n(),Ps){We(!0);try{n()}finally{We(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:t},e}function wd(t,e,n,s){return t.baseState=n,_c(t,Bt,typeof s=="function"?s:di)}function uv(t,e,n,s,u){if(wo(t))throw Error(o(485));if(t=e.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};V.T!==null?n(!0):c.isTransition=!1,s(c),n=e.pending,n===null?(c.next=e.pending=c,Cd(e,c)):(c.next=n.next,e.pending=n.next=c)}}function Cd(t,e){var n=e.action,s=e.payload,u=t.state;if(e.isTransition){var c=V.T,d={};V.T=d;try{var y=n(u,s),N=V.S;N!==null&&N(d,y),Rd(t,e,y)}catch(z){Tc(t,e,z)}finally{c!==null&&d.types!==null&&(c.types=d.types),V.T=c}}else try{c=n(u,s),Rd(t,e,c)}catch(z){Tc(t,e,z)}}function Rd(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){Od(t,e,s)},function(s){return Tc(t,e,s)}):Od(t,e,n)}function Od(t,e,n){e.status="fulfilled",e.value=n,Dd(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Cd(t,n)))}function Tc(t,e,n){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do e.status="rejected",e.reason=n,Dd(e),e=e.next;while(e!==s)}t.action=null}function Dd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Id(t,e){return e}function Md(t,e){if(Tt){var n=Yt.formState;if(n!==null){t:{var s=mt;if(Tt){if(Ft){e:{for(var u=Ft,c=on;u.nodeType!==8;){if(!c){u=null;break e}if(u=cn(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ft=cn(u.nextSibling),s=u.data==="F!";break t}}Gi(s)}s=!1}s&&(e=n[0])}}return n=Ie(),n.memoizedState=n.baseState=e,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Id,lastRenderedState:e},n.queue=s,n=$d.bind(null,mt,s),s.dispatch=n,s=Ec(!1),c=Cc.bind(null,mt,!1,s.queue),s=Ie(),u={state:e,dispatch:null,action:t,pending:null},s.queue=u,n=uv.bind(null,mt,u,c,n),u.dispatch=n,s.memoizedState=t,[e,n,!1]}function jd(t){var e=ie();return Ud(e,Bt,t)}function Ud(t,e,n){if(e=_c(t,e,Id)[0],t=Ao(di)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var s=Pr(e)}catch(d){throw d===Ma?go:d}else s=e;e=ie();var u=e.queue,c=u.dispatch;return n!==e.memoizedState&&(mt.flags|=2048,ka(9,{destroy:void 0},cv.bind(null,u,n),null)),[s,c,t]}function cv(t,e){t.action=e}function Ld(t){var e=ie(),n=Bt;if(n!==null)return Ud(e,n,t);ie(),e=e.memoizedState,n=ie();var s=n.queue.dispatch;return n.memoizedState=t,[e,s,!1]}function ka(t,e,n,s){return t={tag:t,create:n,deps:s,inst:e,next:null},e=mt.updateQueue,e===null&&(e=To(),mt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(s=n.next,n.next=t,t.next=s,e.lastEffect=t),t}function zd(){return ie().memoizedState}function xo(t,e,n,s){var u=Ie();mt.flags|=t,u.memoizedState=ka(1|e,{destroy:void 0},n,s===void 0?null:s)}function No(t,e,n,s){var u=ie();s=s===void 0?null:s;var c=u.memoizedState.inst;Bt!==null&&s!==null&&dc(s,Bt.memoizedState.deps)?u.memoizedState=ka(e,c,n,s):(mt.flags|=t,u.memoizedState=ka(1|e,c,n,s))}function kd(t,e){xo(8390656,8,t,e)}function Sc(t,e){No(2048,8,t,e)}function fv(t){mt.flags|=4;var e=mt.updateQueue;if(e===null)e=To(),mt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Hd(t){var e=ie().memoizedState;return fv({ref:e,nextImpl:t}),function(){if((It&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function qd(t,e){return No(4,2,t,e)}function Bd(t,e){return No(4,4,t,e)}function Vd(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gd(t,e,n){n=n!=null?n.concat([t]):null,No(4,4,Vd.bind(null,e,t),n)}function Ac(){}function Pd(t,e){var n=ie();e=e===void 0?null:e;var s=n.memoizedState;return e!==null&&dc(e,s[1])?s[0]:(n.memoizedState=[t,e],t)}function Yd(t,e){var n=ie();e=e===void 0?null:e;var s=n.memoizedState;if(e!==null&&dc(e,s[1]))return s[0];if(s=t(),Ps){We(!0);try{t()}finally{We(!1)}}return n.memoizedState=[s,e],s}function xc(t,e,n){return n===void 0||(hi&1073741824)!==0&&(bt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Xg(),mt.lanes|=t,$i|=t,n)}function Xd(t,e,n,s){return Ye(n,e)?n:Ua.current!==null?(t=xc(t,n,s),Ye(t,e)||(he=!0),t):(hi&42)===0||(hi&1073741824)!==0&&(bt&261930)===0?(he=!0,t.memoizedState=n):(t=Xg(),mt.lanes|=t,$i|=t,e)}function Fd(t,e,n,s,u){var c=Z.p;Z.p=c!==0&&8>c?c:8;var d=V.T,y={};V.T=y,Cc(t,!1,e,n);try{var N=u(),z=V.S;if(z!==null&&z(y,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var G=rv(N,s);Yr(t,e,G,Je(t))}else Yr(t,e,s,Je(t))}catch(F){Yr(t,e,{then:function(){},status:"rejected",reason:F},Je())}finally{Z.p=c,d!==null&&y.types!==null&&(d.types=y.types),V.T=d}}function hv(){}function Nc(t,e,n,s){if(t.tag!==5)throw Error(o(476));var u=Kd(t).queue;Fd(t,u,e,ut,n===null?hv:function(){return Qd(t),n(s)})}function Kd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:ut},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Qd(t){var e=Kd(t);e.next===null&&(e=t.alternate.memoizedState),Yr(t,e.next.queue,{},Je())}function wc(){return xe(ol)}function Zd(){return ie().memoizedState}function Jd(){return ie().memoizedState}function dv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Je();t=Xi(n);var s=Fi(e,t,n);s!==null&&(Ve(s,e,n),qr(s,e,n)),e={cache:nc()},t.payload=e;return}e=e.return}}function gv(t,e,n){var s=Je();n={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wo(t)?Wd(e,n):(n=Yu(t,e,n,s),n!==null&&(Ve(n,t,s),tg(n,e,s)))}function $d(t,e,n){var s=Je();Yr(t,e,n,s)}function Yr(t,e,n,s){var u={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wo(t))Wd(e,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var d=e.lastRenderedState,y=c(d,n);if(u.hasEagerState=!0,u.eagerState=y,Ye(y,d))return ro(t,e,u,0),Yt===null&&ao(),!1}catch{}finally{}if(n=Yu(t,e,u,s),n!==null)return Ve(n,t,s),tg(n,e,s),!0}return!1}function Cc(t,e,n,s){if(s={lane:2,revertLane:lf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wo(t)){if(e)throw Error(o(479))}else e=Yu(t,n,s,2),e!==null&&Ve(e,t,2)}function wo(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Wd(t,e){La=bo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tg(t,e,n){if((n&4194048)!==0){var s=e.lanes;s&=t.pendingLanes,n|=s,e.lanes=n,zl(t,n)}}var Xr={readContext:xe,use:So,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useLayoutEffect:Wt,useInsertionEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useSyncExternalStore:Wt,useId:Wt,useHostTransitionStatus:Wt,useFormState:Wt,useActionState:Wt,useOptimistic:Wt,useMemoCache:Wt,useCacheRefresh:Wt};Xr.useEffectEvent=Wt;var eg={readContext:xe,use:So,useCallback:function(t,e){return Ie().memoizedState=[t,e===void 0?null:e],t},useContext:xe,useEffect:kd,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,xo(4194308,4,Vd.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xo(4194308,4,t,e)},useInsertionEffect:function(t,e){xo(4,2,t,e)},useMemo:function(t,e){var n=Ie();e=e===void 0?null:e;var s=t();if(Ps){We(!0);try{t()}finally{We(!1)}}return n.memoizedState=[s,e],s},useReducer:function(t,e,n){var s=Ie();if(n!==void 0){var u=n(e);if(Ps){We(!0);try{n(e)}finally{We(!1)}}}else u=e;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=gv.bind(null,mt,t),[s.memoizedState,t]},useRef:function(t){var e=Ie();return t={current:t},e.memoizedState=t},useState:function(t){t=Ec(t);var e=t.queue,n=$d.bind(null,mt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Ac,useDeferredValue:function(t,e){var n=Ie();return xc(n,t,e)},useTransition:function(){var t=Ec(!1);return t=Fd.bind(null,mt,t.queue,!0,!1),Ie().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var s=mt,u=Ie();if(Tt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),Yt===null)throw Error(o(349));(bt&127)!==0||Td(s,e,n)}u.memoizedState=n;var c={value:n,getSnapshot:e};return u.queue=c,kd(Ad.bind(null,s,c,t),[t]),s.flags|=2048,ka(9,{destroy:void 0},Sd.bind(null,s,c,n,e),null),n},useId:function(){var t=Ie(),e=Yt.identifierPrefix;if(Tt){var n=Kn,s=Fn;n=(s&~(1<<32-ae(s)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=lv++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:wc,useFormState:Md,useActionState:Md,useOptimistic:function(t){var e=Ie();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Cc.bind(null,mt,!0,n),n.dispatch=e,[t,e]},useMemoCache:vc,useCacheRefresh:function(){return Ie().memoizedState=dv.bind(null,mt)},useEffectEvent:function(t){var e=Ie(),n={impl:t};return e.memoizedState=n,function(){if((It&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Rc={readContext:xe,use:So,useCallback:Pd,useContext:xe,useEffect:Sc,useImperativeHandle:Gd,useInsertionEffect:qd,useLayoutEffect:Bd,useMemo:Yd,useReducer:Ao,useRef:zd,useState:function(){return Ao(di)},useDebugValue:Ac,useDeferredValue:function(t,e){var n=ie();return Xd(n,Bt.memoizedState,t,e)},useTransition:function(){var t=Ao(di)[0],e=ie().memoizedState;return[typeof t=="boolean"?t:Pr(t),e]},useSyncExternalStore:Ed,useId:Zd,useHostTransitionStatus:wc,useFormState:jd,useActionState:jd,useOptimistic:function(t,e){var n=ie();return wd(n,Bt,t,e)},useMemoCache:vc,useCacheRefresh:Jd};Rc.useEffectEvent=Hd;var ng={readContext:xe,use:So,useCallback:Pd,useContext:xe,useEffect:Sc,useImperativeHandle:Gd,useInsertionEffect:qd,useLayoutEffect:Bd,useMemo:Yd,useReducer:bc,useRef:zd,useState:function(){return bc(di)},useDebugValue:Ac,useDeferredValue:function(t,e){var n=ie();return Bt===null?xc(n,t,e):Xd(n,Bt.memoizedState,t,e)},useTransition:function(){var t=bc(di)[0],e=ie().memoizedState;return[typeof t=="boolean"?t:Pr(t),e]},useSyncExternalStore:Ed,useId:Zd,useHostTransitionStatus:wc,useFormState:Ld,useActionState:Ld,useOptimistic:function(t,e){var n=ie();return Bt!==null?wd(n,Bt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:vc,useCacheRefresh:Jd};ng.useEffectEvent=Hd;function Oc(t,e,n,s){e=t.memoizedState,n=n(s,e),n=n==null?e:j({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={enqueueSetState:function(t,e,n){t=t._reactInternals;var s=Je(),u=Xi(s);u.payload=e,n!=null&&(u.callback=n),e=Fi(t,u,s),e!==null&&(Ve(e,t,s),qr(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var s=Je(),u=Xi(s);u.tag=1,u.payload=e,n!=null&&(u.callback=n),e=Fi(t,u,s),e!==null&&(Ve(e,t,s),qr(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Je(),s=Xi(n);s.tag=2,e!=null&&(s.callback=e),e=Fi(t,s,n),e!==null&&(Ve(e,t,n),qr(e,t,n))}};function ig(t,e,n,s,u,c,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,d):e.prototype&&e.prototype.isPureReactComponent?!Ir(n,s)||!Ir(u,c):!0}function sg(t,e,n,s){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,s),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Ys(t,e){var n=e;if("ref"in e){n={};for(var s in e)s!=="ref"&&(n[s]=e[s])}if(t=t.defaultProps){n===e&&(n=j({},n));for(var u in t)n[u]===void 0&&(n[u]=t[u])}return n}function ag(t){so(t)}function rg(t){console.error(t)}function lg(t){so(t)}function Co(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(s){setTimeout(function(){throw s})}}function og(t,e,n){try{var s=t.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ic(t,e,n){return n=Xi(n),n.tag=3,n.payload={element:null},n.callback=function(){Co(t,e)},n}function ug(t){return t=Xi(t),t.tag=3,t}function cg(t,e,n,s){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){og(e,n,s)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){og(e,n,s),typeof u!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var y=s.stack;this.componentDidCatch(s.value,{componentStack:y!==null?y:""})})}function mv(t,e,n,s,u){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(e=n.alternate,e!==null&&Oa(e,n,u,!0),n=Fe.current,n!==null){switch(n.tag){case 31:case 13:return un===null?qo():n.alternate===null&&te===0&&(te=3),n.flags&=-257,n.flags|=65536,n.lanes=u,s===mo?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([s]):e.add(s),sf(t,s,u)),!1;case 22:return n.flags|=65536,s===mo?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([s]):n.add(s)),sf(t,s,u)),!1}throw Error(o(435,n.tag))}return sf(t,s,u),qo(),!1}if(Tt)return e=Fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,s!==Ju&&(t=Error(o(422),{cause:s}),Ur(an(t,n)))):(s!==Ju&&(e=Error(o(423),{cause:s}),Ur(an(e,n))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=an(s,n),u=Ic(t.stateNode,s,u),oc(t,u),te!==4&&(te=2)),!1;var c=Error(o(520),{cause:s});if(c=an(c,n),tl===null?tl=[c]:tl.push(c),te!==4&&(te=2),e===null)return!0;s=an(s,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=u&-u,n.lanes|=t,t=Ic(n.stateNode,s,t),oc(n,t),!1;case 1:if(e=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Wi===null||!Wi.has(c))))return n.flags|=65536,u&=-u,n.lanes|=u,u=ug(u),cg(u,t,n,s),oc(n,u),!1}n=n.return}while(n!==null);return!1}var Mc=Error(o(461)),he=!1;function Ne(t,e,n,s){e.child=t===null?gd(e,null,n,s):Gs(e,t.child,n,s)}function fg(t,e,n,s,u){n=n.render;var c=e.ref;if("ref"in s){var d={};for(var y in s)y!=="ref"&&(d[y]=s[y])}else d=s;return Hs(e),s=gc(t,e,n,d,c,u),y=mc(),t!==null&&!he?(pc(t,e,u),gi(t,e,u)):(Tt&&y&&Qu(e),e.flags|=1,Ne(t,e,s,u),e.child)}function hg(t,e,n,s,u){if(t===null){var c=n.type;return typeof c=="function"&&!Xu(c)&&c.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=c,dg(t,e,c,s,u)):(t=oo(n.type,null,s,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Bc(t,u)){var d=c.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(d,s)&&t.ref===e.ref)return gi(t,e,u)}return e.flags|=1,t=oi(c,s),t.ref=e.ref,t.return=e,e.child=t}function dg(t,e,n,s,u){if(t!==null){var c=t.memoizedProps;if(Ir(c,s)&&t.ref===e.ref)if(he=!1,e.pendingProps=s=c,Bc(t,u))(t.flags&131072)!==0&&(he=!0);else return e.lanes=t.lanes,gi(t,e,u)}return jc(t,e,n,s,u)}function gg(t,e,n,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,t!==null){for(s=e.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,e.child=null;return mg(t,e,c,n,s)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ho(e,c!==null?c.cachePool:null),c!==null?yd(e,c):cc(),vd(e);else return s=e.lanes=536870912,mg(t,e,c!==null?c.baseLanes|n:n,n,s)}else c!==null?(ho(e,c.cachePool),yd(e,c),Qi(),e.memoizedState=null):(t!==null&&ho(e,null),cc(),Qi());return Ne(t,e,u,n),e.child}function Fr(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function mg(t,e,n,s,u){var c=sc();return c=c===null?null:{parent:ce._currentValue,pool:c},e.memoizedState={baseLanes:n,cachePool:c},t!==null&&ho(e,null),cc(),vd(e),t!==null&&Oa(t,e,s,!0),e.childLanes=u,null}function Ro(t,e){return e=Do({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function pg(t,e,n){return Gs(e,t.child,null,n),t=Ro(e,e.pendingProps),t.flags|=2,Ke(e),e.memoizedState=null,t}function pv(t,e,n){var s=e.pendingProps,u=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Tt){if(s.mode==="hidden")return t=Ro(e,s),e.lanes=536870912,Fr(null,t);if(hc(e),(t=Ft)?(t=Cm(t,on),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Bi!==null?{id:Fn,overflow:Kn}:null,retryLane:536870912,hydrationErrors:null},n=Wh(t),n.return=e,e.child=n,Ae=e,Ft=null)):t=null,t===null)throw Gi(e);return e.lanes=536870912,null}return Ro(e,s)}var c=t.memoizedState;if(c!==null){var d=c.dehydrated;if(hc(e),u)if(e.flags&256)e.flags&=-257,e=pg(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(he||Oa(t,e,n,!1),u=(n&t.childLanes)!==0,he||u){if(s=Yt,s!==null&&(d=gr(s,n),d!==0&&d!==c.retryLane))throw c.retryLane=d,Us(t,d),Ve(s,t,d),Mc;qo(),e=pg(t,e,n)}else t=c.treeContext,Ft=cn(d.nextSibling),Ae=e,Tt=!0,Vi=null,on=!1,t!==null&&nd(e,t),e=Ro(e,s),e.flags|=4096;return e}return t=oi(t.child,{mode:s.mode,children:s.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Oo(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function jc(t,e,n,s,u){return Hs(e),n=gc(t,e,n,s,void 0,u),s=mc(),t!==null&&!he?(pc(t,e,u),gi(t,e,u)):(Tt&&s&&Qu(e),e.flags|=1,Ne(t,e,n,u),e.child)}function yg(t,e,n,s,u,c){return Hs(e),e.updateQueue=null,n=bd(e,s,n,u),_d(t),s=mc(),t!==null&&!he?(pc(t,e,c),gi(t,e,c)):(Tt&&s&&Qu(e),e.flags|=1,Ne(t,e,n,c),e.child)}function vg(t,e,n,s,u){if(Hs(e),e.stateNode===null){var c=Na,d=n.contextType;typeof d=="object"&&d!==null&&(c=xe(d)),c=new n(s,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Dc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=s,c.state=e.memoizedState,c.refs={},rc(e),d=n.contextType,c.context=typeof d=="object"&&d!==null?xe(d):Na,c.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Oc(e,n,d,s),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&Dc.enqueueReplaceState(c,c.state,null),Vr(e,s,c,u),Br(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),s=!0}else if(t===null){c=e.stateNode;var y=e.memoizedProps,N=Ys(n,y);c.props=N;var z=c.context,G=n.contextType;d=Na,typeof G=="object"&&G!==null&&(d=xe(G));var F=n.getDerivedStateFromProps;G=typeof F=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,G||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||z!==d)&&sg(e,c,s,d),Yi=!1;var k=e.memoizedState;c.state=k,Vr(e,s,c,u),Br(),z=e.memoizedState,y||k!==z||Yi?(typeof F=="function"&&(Oc(e,n,F,s),z=e.memoizedState),(N=Yi||ig(e,n,N,s,k,z,d))?(G||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=z),c.props=s,c.state=z,c.context=d,s=N):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{c=e.stateNode,lc(t,e),d=e.memoizedProps,G=Ys(n,d),c.props=G,F=e.pendingProps,k=c.context,z=n.contextType,N=Na,typeof z=="object"&&z!==null&&(N=xe(z)),y=n.getDerivedStateFromProps,(z=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==F||k!==N)&&sg(e,c,s,N),Yi=!1,k=e.memoizedState,c.state=k,Vr(e,s,c,u),Br();var q=e.memoizedState;d!==F||k!==q||Yi||t!==null&&t.dependencies!==null&&co(t.dependencies)?(typeof y=="function"&&(Oc(e,n,y,s),q=e.memoizedState),(G=Yi||ig(e,n,G,s,k,q,N)||t!==null&&t.dependencies!==null&&co(t.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,q,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,q,N)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=q),c.props=s,c.state=q,c.context=N,s=G):(typeof c.componentDidUpdate!="function"||d===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),s=!1)}return c=s,Oo(t,e),s=(e.flags&128)!==0,c||s?(c=e.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&s?(e.child=Gs(e,t.child,null,u),e.child=Gs(e,null,n,u)):Ne(t,e,n,u),e.memoizedState=c.state,t=e.child):t=gi(t,e,u),t}function _g(t,e,n,s){return zs(),e.flags|=256,Ne(t,e,n,s),e.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lc(t){return{baseLanes:t,cachePool:od()}}function zc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Ze),t}function bg(t,e,n){var s=e.pendingProps,u=!1,c=(e.flags&128)!==0,d;if((d=c)||(d=t!==null&&t.memoizedState===null?!1:(ne.current&2)!==0),d&&(u=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(Tt){if(u?Ki(e):Qi(),(t=Ft)?(t=Cm(t,on),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Bi!==null?{id:Fn,overflow:Kn}:null,retryLane:536870912,hydrationErrors:null},n=Wh(t),n.return=e,e.child=n,Ae=e,Ft=null)):t=null,t===null)throw Gi(e);return bf(t)?e.lanes=32:e.lanes=536870912,null}var y=s.children;return s=s.fallback,u?(Qi(),u=e.mode,y=Do({mode:"hidden",children:y},u),s=Ls(s,u,n,null),y.return=e,s.return=e,y.sibling=s,e.child=y,s=e.child,s.memoizedState=Lc(n),s.childLanes=zc(t,d,n),e.memoizedState=Uc,Fr(null,s)):(Ki(e),kc(e,y))}var N=t.memoizedState;if(N!==null&&(y=N.dehydrated,y!==null)){if(c)e.flags&256?(Ki(e),e.flags&=-257,e=Hc(t,e,n)):e.memoizedState!==null?(Qi(),e.child=t.child,e.flags|=128,e=null):(Qi(),y=s.fallback,u=e.mode,s=Do({mode:"visible",children:s.children},u),y=Ls(y,u,n,null),y.flags|=2,s.return=e,y.return=e,s.sibling=y,e.child=s,Gs(e,t.child,null,n),s=e.child,s.memoizedState=Lc(n),s.childLanes=zc(t,d,n),e.memoizedState=Uc,e=Fr(null,s));else if(Ki(e),bf(y)){if(d=y.nextSibling&&y.nextSibling.dataset,d)var z=d.dgst;d=z,s=Error(o(419)),s.stack="",s.digest=d,Ur({value:s,source:null,stack:null}),e=Hc(t,e,n)}else if(he||Oa(t,e,n,!1),d=(n&t.childLanes)!==0,he||d){if(d=Yt,d!==null&&(s=gr(d,n),s!==0&&s!==N.retryLane))throw N.retryLane=s,Us(t,s),Ve(d,t,s),Mc;_f(y)||qo(),e=Hc(t,e,n)}else _f(y)?(e.flags|=192,e.child=t.child,e=null):(t=N.treeContext,Ft=cn(y.nextSibling),Ae=e,Tt=!0,Vi=null,on=!1,t!==null&&nd(e,t),e=kc(e,s.children),e.flags|=4096);return e}return u?(Qi(),y=s.fallback,u=e.mode,N=t.child,z=N.sibling,s=oi(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,z!==null?y=oi(z,y):(y=Ls(y,u,n,null),y.flags|=2),y.return=e,s.return=e,s.sibling=y,e.child=s,Fr(null,s),s=e.child,y=t.child.memoizedState,y===null?y=Lc(n):(u=y.cachePool,u!==null?(N=ce._currentValue,u=u.parent!==N?{parent:N,pool:N}:u):u=od(),y={baseLanes:y.baseLanes|n,cachePool:u}),s.memoizedState=y,s.childLanes=zc(t,d,n),e.memoizedState=Uc,Fr(t.child,s)):(Ki(e),n=t.child,t=n.sibling,n=oi(n,{mode:"visible",children:s.children}),n.return=e,n.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=n,e.memoizedState=null,n)}function kc(t,e){return e=Do({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Do(t,e){return t=Xe(22,t,null,e),t.lanes=0,t}function Hc(t,e,n){return Gs(e,t.child,null,n),t=kc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Eg(t,e,n){t.lanes|=e;var s=t.alternate;s!==null&&(s.lanes|=e),tc(t.return,e,n)}function qc(t,e,n,s,u,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:u,treeForkCount:c}:(d.isBackwards=e,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=n,d.tailMode=u,d.treeForkCount=c)}function Tg(t,e,n){var s=e.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var d=ne.current,y=(d&2)!==0;if(y?(d=d&1|2,e.flags|=128):d&=1,J(ne,d),Ne(t,e,s,n),s=Tt?jr:0,!y&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,n,e);else if(t.tag===19)Eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(n=e.child,u=null;n!==null;)t=n.alternate,t!==null&&_o(t)===null&&(u=n),n=n.sibling;n=u,n===null?(u=e.child,e.child=null):(u=n.sibling,n.sibling=null),qc(e,!1,u,n,c,s);break;case"backwards":case"unstable_legacy-backwards":for(n=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&_o(t)===null){e.child=u;break}t=u.sibling,u.sibling=n,n=u,u=t}qc(e,!0,n,null,c,s);break;case"together":qc(e,!1,null,null,void 0,s);break;default:e.memoizedState=null}return e.child}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$i|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Oa(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,n=oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&co(t)))}function yv(t,e,n){switch(e.tag){case 3:me(e,e.stateNode.containerInfo),Pi(e,ce,t.memoizedState.cache),zs();break;case 27:case 5:vs(e);break;case 4:me(e,e.stateNode.containerInfo);break;case 10:Pi(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,hc(e),null;break;case 13:var s=e.memoizedState;if(s!==null)return s.dehydrated!==null?(Ki(e),e.flags|=128,null):(n&e.child.childLanes)!==0?bg(t,e,n):(Ki(e),t=gi(t,e,n),t!==null?t.sibling:null);Ki(e);break;case 19:var u=(t.flags&128)!==0;if(s=(n&e.childLanes)!==0,s||(Oa(t,e,n,!1),s=(n&e.childLanes)!==0),u){if(s)return Tg(t,e,n);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),J(ne,ne.current),s)break;return null;case 22:return e.lanes=0,gg(t,e,n,e.pendingProps);case 24:Pi(e,ce,t.memoizedState.cache)}return gi(t,e,n)}function Sg(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)he=!0;else{if(!Bc(t,n)&&(e.flags&128)===0)return he=!1,yv(t,e,n);he=(t.flags&131072)!==0}else he=!1,Tt&&(e.flags&1048576)!==0&&ed(e,jr,e.index);switch(e.lanes=0,e.tag){case 16:t:{var s=e.pendingProps;if(t=Bs(e.elementType),e.type=t,typeof t=="function")Xu(t)?(s=Ys(t,s),e.tag=1,e=vg(null,e,t,s,n)):(e.tag=0,e=jc(null,e,t,s,n));else{if(t!=null){var u=t.$$typeof;if(u===jt){e.tag=11,e=fg(null,e,t,s,n);break t}else if(u===S){e.tag=14,e=hg(null,e,t,s,n);break t}}throw e=Xt(t)||t,Error(o(306,e,""))}}return e;case 0:return jc(t,e,e.type,e.pendingProps,n);case 1:return s=e.type,u=Ys(s,e.pendingProps),vg(t,e,s,u,n);case 3:t:{if(me(e,e.stateNode.containerInfo),t===null)throw Error(o(387));s=e.pendingProps;var c=e.memoizedState;u=c.element,lc(t,e),Vr(e,s,null,n);var d=e.memoizedState;if(s=d.cache,Pi(e,ce,s),s!==c.cache&&ec(e,[ce],n,!0),Br(),s=d.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=_g(t,e,s,n);break t}else if(s!==u){u=an(Error(o(424)),e),Ur(u),e=_g(t,e,s,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ft=cn(t.firstChild),Ae=e,Tt=!0,Vi=null,on=!0,n=gd(e,null,s,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zs(),s===u){e=gi(t,e,n);break t}Ne(t,e,s,n)}e=e.child}return e;case 26:return Oo(t,e),t===null?(n=jm(e.type,null,e.pendingProps,null))?e.memoizedState=n:Tt||(n=e.type,t=e.pendingProps,s=Fo(pt.current).createElement(n),s[le]=e,s[ve]=t,we(s,n,t),oe(s),e.stateNode=s):e.memoizedState=jm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return vs(e),t===null&&Tt&&(s=e.stateNode=Dm(e.type,e.pendingProps,pt.current),Ae=e,on=!0,u=Ft,is(e.type)?(Ef=u,Ft=cn(s.firstChild)):Ft=u),Ne(t,e,e.pendingProps.children,n),Oo(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Tt&&((u=s=Ft)&&(s=Fv(s,e.type,e.pendingProps,on),s!==null?(e.stateNode=s,Ae=e,Ft=cn(s.firstChild),on=!1,u=!0):u=!1),u||Gi(e)),vs(e),u=e.type,c=e.pendingProps,d=t!==null?t.memoizedProps:null,s=c.children,pf(u,c)?s=null:d!==null&&pf(u,d)&&(e.flags|=32),e.memoizedState!==null&&(u=gc(t,e,ov,null,null,n),ol._currentValue=u),Oo(t,e),Ne(t,e,s,n),e.child;case 6:return t===null&&Tt&&((t=n=Ft)&&(n=Kv(n,e.pendingProps,on),n!==null?(e.stateNode=n,Ae=e,Ft=null,t=!0):t=!1),t||Gi(e)),null;case 13:return bg(t,e,n);case 4:return me(e,e.stateNode.containerInfo),s=e.pendingProps,t===null?e.child=Gs(e,null,s,n):Ne(t,e,s,n),e.child;case 11:return fg(t,e,e.type,e.pendingProps,n);case 7:return Ne(t,e,e.pendingProps,n),e.child;case 8:return Ne(t,e,e.pendingProps.children,n),e.child;case 12:return Ne(t,e,e.pendingProps.children,n),e.child;case 10:return s=e.pendingProps,Pi(e,e.type,s.value),Ne(t,e,s.children,n),e.child;case 9:return u=e.type._context,s=e.pendingProps.children,Hs(e),u=xe(u),s=s(u),e.flags|=1,Ne(t,e,s,n),e.child;case 14:return hg(t,e,e.type,e.pendingProps,n);case 15:return dg(t,e,e.type,e.pendingProps,n);case 19:return Tg(t,e,n);case 31:return pv(t,e,n);case 22:return gg(t,e,n,e.pendingProps);case 24:return Hs(e),s=xe(ce),t===null?(u=sc(),u===null&&(u=Yt,c=nc(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=n),u=c),e.memoizedState={parent:s,cache:u},rc(e),Pi(e,ce,u)):((t.lanes&n)!==0&&(lc(t,e),Vr(e,null,null,n),Br()),u=t.memoizedState,c=e.memoizedState,u.parent!==s?(u={parent:s,cache:s},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Pi(e,ce,s)):(s=c.cache,Pi(e,ce,s),s!==u.cache&&ec(e,[ce],n,!0))),Ne(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function mi(t){t.flags|=4}function Vc(t,e,n,s,u){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Zg())t.flags|=8192;else throw Vs=mo,ac}else t.flags&=-16777217}function Ag(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hm(e))if(Zg())t.flags|=8192;else throw Vs=mo,ac}function Io(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ll():536870912,t.lanes|=e,Va|=e)}function Kr(t,e){if(!Tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,s=0;if(e)for(var u=t.child;u!==null;)n|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)n|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=n,e}function vv(t,e,n){var s=e.pendingProps;switch(Zu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return Kt(e),null;case 3:return n=e.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),fi(ce),Zt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?mi(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$u())),Kt(e),null;case 26:var u=e.type,c=e.memoizedState;return t===null?(mi(e),c!==null?(Kt(e),Ag(e,c)):(Kt(e),Vc(e,u,null,s,n))):c?c!==t.memoizedState?(mi(e),Kt(e),Ag(e,c)):(Kt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==s&&mi(e),Kt(e),Vc(e,u,t,s,n)),null;case 27:if(la(e),n=pt.current,u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&mi(e);else{if(!s){if(e.stateNode===null)throw Error(o(166));return Kt(e),null}t=$.current,Ra(e)?id(e):(t=Dm(u,s,n),e.stateNode=t,mi(e))}return Kt(e),null;case 5:if(la(e),u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&mi(e);else{if(!s){if(e.stateNode===null)throw Error(o(166));return Kt(e),null}if(c=$.current,Ra(e))id(e);else{var d=Fo(pt.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?d.createElement("select",{is:s.is}):d.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?d.createElement(u,{is:s.is}):d.createElement(u)}}c[le]=e,c[ve]=s;t:for(d=e.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break t;for(;d.sibling===null;){if(d.return===null||d.return===e)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}e.stateNode=c;t:switch(we(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&mi(e)}}return Kt(e),Vc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==s&&mi(e);else{if(typeof s!="string"&&e.stateNode===null)throw Error(o(166));if(t=pt.current,Ra(e)){if(t=e.stateNode,n=e.memoizedProps,s=null,u=Ae,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[le]=e,t=!!(t.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||bm(t.nodeValue,n)),t||Gi(e,!0)}else t=Fo(t).createTextNode(s),t[le]=e,e.stateNode=t}return Kt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(s=Ra(e),n!==null){if(t===null){if(!s)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[le]=e}else zs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Kt(e),t=!1}else n=$u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Ke(e),e):(Ke(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Kt(e),null;case 13:if(s=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ra(e),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(o(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[le]=e}else zs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Kt(e),u=!1}else u=$u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(Ke(e),e):(Ke(e),null)}return Ke(e),(e.flags&128)!==0?(e.lanes=n,e):(n=s!==null,t=t!==null&&t.memoizedState!==null,n&&(s=e.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Io(e,e.updateQueue),Kt(e),null);case 4:return Zt(),t===null&&ff(e.stateNode.containerInfo),Kt(e),null;case 10:return fi(e.type),Kt(e),null;case 19:if(K(ne),s=e.memoizedState,s===null)return Kt(e),null;if(u=(e.flags&128)!==0,c=s.rendering,c===null)if(u)Kr(s,!1);else{if(te!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=_o(t),c!==null){for(e.flags|=128,Kr(s,!1),t=c.updateQueue,e.updateQueue=t,Io(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)$h(n,t),n=n.sibling;return J(ne,ne.current&1|2),Tt&&ui(e,s.treeForkCount),e.child}t=t.sibling}s.tail!==null&&De()>zo&&(e.flags|=128,u=!0,Kr(s,!1),e.lanes=4194304)}else{if(!u)if(t=_o(c),t!==null){if(e.flags|=128,u=!0,t=t.updateQueue,e.updateQueue=t,Io(e,t),Kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!Tt)return Kt(e),null}else 2*De()-s.renderingStartTime>zo&&n!==536870912&&(e.flags|=128,u=!0,Kr(s,!1),e.lanes=4194304);s.isBackwards?(c.sibling=e.child,e.child=c):(t=s.last,t!==null?t.sibling=c:e.child=c,s.last=c)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=De(),t.sibling=null,n=ne.current,J(ne,u?n&1|2:n&1),Tt&&ui(e,s.treeForkCount),t):(Kt(e),null);case 22:case 23:return Ke(e),fc(),s=e.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(e.flags|=8192):s&&(e.flags|=8192),s?(n&536870912)!==0&&(e.flags&128)===0&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),n=e.updateQueue,n!==null&&Io(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),s=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),s!==n&&(e.flags|=2048),t!==null&&K(qs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),fi(ce),Kt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function _v(t,e){switch(Zu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fi(ce),Zt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return la(e),null;case 31:if(e.memoizedState!==null){if(Ke(e),e.alternate===null)throw Error(o(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ke(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(ne),null;case 4:return Zt(),null;case 10:return fi(e.type),null;case 22:case 23:return Ke(e),fc(),t!==null&&K(qs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return fi(ce),null;case 25:return null;default:return null}}function xg(t,e){switch(Zu(e),e.tag){case 3:fi(ce),Zt();break;case 26:case 27:case 5:la(e);break;case 4:Zt();break;case 31:e.memoizedState!==null&&Ke(e);break;case 13:Ke(e);break;case 19:K(ne);break;case 10:fi(e.type);break;case 22:case 23:Ke(e),fc(),t!==null&&K(qs);break;case 24:fi(ce)}}function Qr(t,e){try{var n=e.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var u=s.next;n=u;do{if((n.tag&t)===t){s=void 0;var c=n.create,d=n.inst;s=c(),d.destroy=s}n=n.next}while(n!==u)}}catch(y){Ht(e,e.return,y)}}function Zi(t,e,n){try{var s=e.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var d=s.inst,y=d.destroy;if(y!==void 0){d.destroy=void 0,u=e;var N=n,z=y;try{z()}catch(G){Ht(u,N,G)}}}s=s.next}while(s!==c)}}catch(G){Ht(e,e.return,G)}}function Ng(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{pd(e,n)}catch(s){Ht(t,t.return,s)}}}function wg(t,e,n){n.props=Ys(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(s){Ht(t,e,s)}}function Zr(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof n=="function"?t.refCleanup=n(s):n.current=s}}catch(u){Ht(t,e,u)}}function Qn(t,e){var n=t.ref,s=t.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(u){Ht(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){Ht(t,e,u)}else n.current=null}function Cg(t){var e=t.type,n=t.memoizedProps,s=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break t;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(u){Ht(t,t.return,u)}}function Gc(t,e,n){try{var s=t.stateNode;Bv(s,t.type,n,e),s[ve]=e}catch(u){Ht(t,t.return,u)}}function Rg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&is(t.type)||t.tag===4}function Pc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&is(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,e,n){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yn));else if(s!==4&&(s===27&&is(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}function Mo(t,e,n){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(s!==4&&(s===27&&is(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Mo(t,e,n),t=t.sibling;t!==null;)Mo(t,e,n),t=t.sibling}function Og(t){var e=t.stateNode,n=t.memoizedProps;try{for(var s=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);we(e,s,n),e[le]=t,e[ve]=n}catch(c){Ht(t,t.return,c)}}var pi=!1,de=!1,Xc=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,be=null;function bv(t,e){if(t=t.containerInfo,gf=tu,t=Gh(t),Hu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var u=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break t}var d=0,y=-1,N=-1,z=0,G=0,F=t,k=null;e:for(;;){for(var q;F!==n||u!==0&&F.nodeType!==3||(y=d+u),F!==c||s!==0&&F.nodeType!==3||(N=d+s),F.nodeType===3&&(d+=F.nodeValue.length),(q=F.firstChild)!==null;)k=F,F=q;for(;;){if(F===t)break e;if(k===n&&++z===u&&(y=d),k===c&&++G===s&&(N=d),(q=F.nextSibling)!==null)break;F=k,k=F.parentNode}F=q}n=y===-1||N===-1?null:{start:y,end:N}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:t,selectionRange:n},tu=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){switch(e=be,c=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)u=t[n],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,n=e,u=c.memoizedProps,c=c.memoizedState,s=n.stateNode;try{var W=Ys(n.type,u);t=s.getSnapshotBeforeUpdate(W,c),s.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Ht(n,n.return,ct)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)vf(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}}function Ig(t,e,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n),s&4&&Qr(5,n);break;case 1:if(vi(t,n),s&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(d){Ht(n,n.return,d)}else{var u=Ys(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(d){Ht(n,n.return,d)}}s&64&&Ng(n),s&512&&Zr(n,n.return);break;case 3:if(vi(t,n),s&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{pd(t,e)}catch(d){Ht(n,n.return,d)}}break;case 27:e===null&&s&4&&Og(n);case 26:case 5:vi(t,n),e===null&&s&4&&Cg(n),s&512&&Zr(n,n.return);break;case 12:vi(t,n);break;case 31:vi(t,n),s&4&&Ug(t,n);break;case 13:vi(t,n),s&4&&Lg(t,n),s&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Rv.bind(null,n),Qv(t,n))));break;case 22:if(s=n.memoizedState!==null||pi,!s){e=e!==null&&e.memoizedState!==null||de,u=pi;var c=de;pi=s,(de=e)&&!c?_i(t,n,(n.subtreeFlags&8772)!==0):vi(t,n),pi=u,de=c}break;case 30:break;default:vi(t,n)}}function Mg(t){var e=t.alternate;e!==null&&(t.alternate=null,Mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ha(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,ke=!1;function yi(t,e,n){for(n=n.child;n!==null;)jg(t,e,n),n=n.sibling}function jg(t,e,n){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(dn,n)}catch{}switch(n.tag){case 26:de||Qn(n,e),yi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:de||Qn(n,e);var s=Jt,u=ke;is(n.type)&&(Jt=n.stateNode,ke=!1),yi(t,e,n),al(n.stateNode),Jt=s,ke=u;break;case 5:de||Qn(n,e);case 6:if(s=Jt,u=ke,Jt=null,yi(t,e,n),Jt=s,ke=u,Jt!==null)if(ke)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(n.stateNode)}catch(c){Ht(n,e,c)}else try{Jt.removeChild(n.stateNode)}catch(c){Ht(n,e,c)}break;case 18:Jt!==null&&(ke?(t=Jt,Nm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Za(t)):Nm(Jt,n.stateNode));break;case 4:s=Jt,u=ke,Jt=n.stateNode.containerInfo,ke=!0,yi(t,e,n),Jt=s,ke=u;break;case 0:case 11:case 14:case 15:Zi(2,n,e),de||Zi(4,n,e),yi(t,e,n);break;case 1:de||(Qn(n,e),s=n.stateNode,typeof s.componentWillUnmount=="function"&&wg(n,e,s)),yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:de=(s=de)||n.memoizedState!==null,yi(t,e,n),de=s;break;default:yi(t,e,n)}}function Ug(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Za(t)}catch(n){Ht(e,e.return,n)}}}function Lg(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Za(t)}catch(n){Ht(e,e.return,n)}}function Ev(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Dg),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Dg),e;default:throw Error(o(435,t.tag))}}function jo(t,e){var n=Ev(t);e.forEach(function(s){if(!n.has(s)){n.add(s);var u=Ov.bind(null,t,s);s.then(u,u)}})}function He(t,e){var n=e.deletions;if(n!==null)for(var s=0;s<n.length;s++){var u=n[s],c=t,d=e,y=d;t:for(;y!==null;){switch(y.tag){case 27:if(is(y.type)){Jt=y.stateNode,ke=!1;break t}break;case 5:Jt=y.stateNode,ke=!1;break t;case 3:case 4:Jt=y.stateNode.containerInfo,ke=!0;break t}y=y.return}if(Jt===null)throw Error(o(160));jg(c,d,u),Jt=null,ke=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)zg(e,t),e=e.sibling}var Sn=null;function zg(t,e){var n=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:He(e,t),qe(t),s&4&&(Zi(3,t,t.return),Qr(3,t),Zi(5,t,t.return));break;case 1:He(e,t),qe(t),s&512&&(de||n===null||Qn(n,n.return)),s&64&&pi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var u=Sn;if(He(e,t),qe(t),s&512&&(de||n===null||Qn(n,n.return)),s&4){var c=n!==null?n.memoizedState:null;if(s=t.memoizedState,n===null)if(s===null)if(t.stateNode===null){t:{s=t.type,n=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":c=u.getElementsByTagName("title")[0],(!c||c[Ln]||c[le]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(s),u.head.insertBefore(c,u.querySelector("head > title"))),we(c,s,n),c[le]=t,oe(c),s=c;break t;case"link":var d=zm("link","href",u).get(s+(n.href||""));if(d){for(var y=0;y<d.length;y++)if(c=d[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(y,1);break e}}c=u.createElement(s),we(c,s,n),u.head.appendChild(c);break;case"meta":if(d=zm("meta","content",u).get(s+(n.content||""))){for(y=0;y<d.length;y++)if(c=d[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(y,1);break e}}c=u.createElement(s),we(c,s,n),u.head.appendChild(c);break;default:throw Error(o(468,s))}c[le]=t,oe(c),s=c}t.stateNode=s}else km(u,t.type,t.stateNode);else t.stateNode=Lm(u,s,t.memoizedProps);else c!==s?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,s===null?km(u,t.type,t.stateNode):Lm(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Gc(t,t.memoizedProps,n.memoizedProps)}break;case 27:He(e,t),qe(t),s&512&&(de||n===null||Qn(n,n.return)),n!==null&&s&4&&Gc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(He(e,t),qe(t),s&512&&(de||n===null||Qn(n,n.return)),t.flags&32){u=t.stateNode;try{ze(u,"")}catch(W){Ht(t,t.return,W)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Gc(t,u,n!==null?n.memoizedProps:u)),s&1024&&(Xc=!0);break;case 6:if(He(e,t),qe(t),s&4){if(t.stateNode===null)throw Error(o(162));s=t.memoizedProps,n=t.stateNode;try{n.nodeValue=s}catch(W){Ht(t,t.return,W)}}break;case 3:if(Zo=null,u=Sn,Sn=Ko(e.containerInfo),He(e,t),Sn=u,qe(t),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(W){Ht(t,t.return,W)}Xc&&(Xc=!1,kg(t));break;case 4:s=Sn,Sn=Ko(t.stateNode.containerInfo),He(e,t),qe(t),Sn=s;break;case 12:He(e,t),qe(t);break;case 31:He(e,t),qe(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,jo(t,s)));break;case 13:He(e,t),qe(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Lo=De()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,jo(t,s)));break;case 22:u=t.memoizedState!==null;var N=n!==null&&n.memoizedState!==null,z=pi,G=de;if(pi=z||u,de=G||N,He(e,t),de=G,pi=z,qe(t),s&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(n===null||N||pi||de||Xs(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){N=n=e;try{if(c=N.stateNode,u)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{y=N.stateNode;var F=N.memoizedProps.style,k=F!=null&&F.hasOwnProperty("display")?F.display:null;y.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(W){Ht(N,N.return,W)}}}else if(e.tag===6){if(n===null){N=e;try{N.stateNode.nodeValue=u?"":N.memoizedProps}catch(W){Ht(N,N.return,W)}}}else if(e.tag===18){if(n===null){N=e;try{var q=N.stateNode;u?wm(q,!0):wm(N.stateNode,!1)}catch(W){Ht(N,N.return,W)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}s&4&&(s=t.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,jo(t,n))));break;case 19:He(e,t),qe(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,jo(t,s)));break;case 30:break;case 21:break;default:He(e,t),qe(t)}}function qe(t){var e=t.flags;if(e&2){try{for(var n,s=t.return;s!==null;){if(Rg(s)){n=s;break}s=s.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var u=n.stateNode,c=Pc(t);Mo(t,c,u);break;case 5:var d=n.stateNode;n.flags&32&&(ze(d,""),n.flags&=-33);var y=Pc(t);Mo(t,y,d);break;case 3:case 4:var N=n.stateNode.containerInfo,z=Pc(t);Yc(t,z,N);break;default:throw Error(o(161))}}catch(G){Ht(t,t.return,G)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;kg(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function vi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ig(t,e.alternate,e),e=e.sibling}function Xs(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Zi(4,e,e.return),Xs(e);break;case 1:Qn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&wg(e,e.return,n),Xs(e);break;case 27:al(e.stateNode);case 26:case 5:Qn(e,e.return),Xs(e);break;case 22:e.memoizedState===null&&Xs(e);break;case 30:Xs(e);break;default:Xs(e)}t=t.sibling}}function _i(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var s=e.alternate,u=t,c=e,d=c.flags;switch(c.tag){case 0:case 11:case 15:_i(u,c,n),Qr(4,c);break;case 1:if(_i(u,c,n),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(z){Ht(s,s.return,z)}if(s=c,u=s.updateQueue,u!==null){var y=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)md(N[u],y)}catch(z){Ht(s,s.return,z)}}n&&d&64&&Ng(c),Zr(c,c.return);break;case 27:Og(c);case 26:case 5:_i(u,c,n),n&&s===null&&d&4&&Cg(c),Zr(c,c.return);break;case 12:_i(u,c,n);break;case 31:_i(u,c,n),n&&d&4&&Ug(u,c);break;case 13:_i(u,c,n),n&&d&4&&Lg(u,c);break;case 22:c.memoizedState===null&&_i(u,c,n),Zr(c,c.return);break;case 30:break;default:_i(u,c,n)}e=e.sibling}}function Fc(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Lr(n))}function Kc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Lr(t))}function An(t,e,n,s){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(t,e,n,s),e=e.sibling}function Hg(t,e,n,s){var u=e.flags;switch(e.tag){case 0:case 11:case 15:An(t,e,n,s),u&2048&&Qr(9,e);break;case 1:An(t,e,n,s);break;case 3:An(t,e,n,s),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Lr(t)));break;case 12:if(u&2048){An(t,e,n,s),t=e.stateNode;try{var c=e.memoizedProps,d=c.id,y=c.onPostCommit;typeof y=="function"&&y(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){Ht(e,e.return,N)}}else An(t,e,n,s);break;case 31:An(t,e,n,s);break;case 13:An(t,e,n,s);break;case 23:break;case 22:c=e.stateNode,d=e.alternate,e.memoizedState!==null?c._visibility&2?An(t,e,n,s):Jr(t,e):c._visibility&2?An(t,e,n,s):(c._visibility|=2,Ha(t,e,n,s,(e.subtreeFlags&10256)!==0||!1)),u&2048&&Fc(d,e);break;case 24:An(t,e,n,s),u&2048&&Kc(e.alternate,e);break;default:An(t,e,n,s)}}function Ha(t,e,n,s,u){for(u=u&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,d=e,y=n,N=s,z=d.flags;switch(d.tag){case 0:case 11:case 15:Ha(c,d,y,N,u),Qr(8,d);break;case 23:break;case 22:var G=d.stateNode;d.memoizedState!==null?G._visibility&2?Ha(c,d,y,N,u):Jr(c,d):(G._visibility|=2,Ha(c,d,y,N,u)),u&&z&2048&&Fc(d.alternate,d);break;case 24:Ha(c,d,y,N,u),u&&z&2048&&Kc(d.alternate,d);break;default:Ha(c,d,y,N,u)}e=e.sibling}}function Jr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,s=e,u=s.flags;switch(s.tag){case 22:Jr(n,s),u&2048&&Fc(s.alternate,s);break;case 24:Jr(n,s),u&2048&&Kc(s.alternate,s);break;default:Jr(n,s)}e=e.sibling}}var $r=8192;function qa(t,e,n){if(t.subtreeFlags&$r)for(t=t.child;t!==null;)qg(t,e,n),t=t.sibling}function qg(t,e,n){switch(t.tag){case 26:qa(t,e,n),t.flags&$r&&t.memoizedState!==null&&l1(n,Sn,t.memoizedState,t.memoizedProps);break;case 5:qa(t,e,n);break;case 3:case 4:var s=Sn;Sn=Ko(t.stateNode.containerInfo),qa(t,e,n),Sn=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=$r,$r=16777216,qa(t,e,n),$r=s):qa(t,e,n));break;default:qa(t,e,n)}}function Bg(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Wr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var s=e[n];be=s,Gg(s,t)}Bg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vg(t),t=t.sibling}function Vg(t){switch(t.tag){case 0:case 11:case 15:Wr(t),t.flags&2048&&Zi(9,t,t.return);break;case 3:Wr(t);break;case 12:Wr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Uo(t)):Wr(t);break;default:Wr(t)}}function Uo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var s=e[n];be=s,Gg(s,t)}Bg(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Zi(8,e,e.return),Uo(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Uo(e));break;default:Uo(e)}t=t.sibling}}function Gg(t,e){for(;be!==null;){var n=be;switch(n.tag){case 0:case 11:case 15:Zi(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Lr(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,be=s;else t:for(n=t;be!==null;){s=be;var u=s.sibling,c=s.return;if(Mg(s),s===n){be=null;break t}if(u!==null){u.return=c,be=u;break t}be=c}}}var Tv={getCacheForType:function(t){var e=xe(ce),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return xe(ce).controller.signal}},Sv=typeof WeakMap=="function"?WeakMap:Map,It=0,Yt=null,vt=null,bt=0,kt=0,Qe=null,Ji=!1,Ba=!1,Qc=!1,bi=0,te=0,$i=0,Fs=0,Zc=0,Ze=0,Va=0,tl=null,Be=null,Jc=!1,Lo=0,Pg=0,zo=1/0,ko=null,Wi=null,ye=0,ts=null,Ga=null,Ei=0,$c=0,Wc=null,Yg=null,el=0,tf=null;function Je(){return(It&2)!==0&&bt!==0?bt&-bt:V.T!==null?lf():kl()}function Xg(){if(Ze===0)if((bt&536870912)===0||Tt){var t=Es;Es<<=1,(Es&3932160)===0&&(Es=262144),Ze=t}else Ze=536870912;return t=Fe.current,t!==null&&(t.flags|=32),Ze}function Ve(t,e,n){(t===Yt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(Pa(t,0),es(t,bt,Ze,!1)),Ts(t,n),((It&2)===0||t!==Yt)&&(t===Yt&&((It&2)===0&&(Fs|=n),te===4&&es(t,bt,Ze,!1)),Zn(t))}function Fg(t,e,n){if((It&6)!==0)throw Error(o(327));var s=!n&&(e&127)===0&&(e&t.expiredLanes)===0||gn(t,e),u=s?Nv(t,e):nf(t,e,!0),c=s;do{if(u===0){Ba&&!s&&es(t,e,0,!1);break}else{if(n=t.current.alternate,c&&!Av(n)){u=nf(t,e,!1),c=!1;continue}if(u===2){if(c=e,t.errorRecoveryDisabledLanes&c)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var y=t;u=tl;var N=y.current.memoizedState.isDehydrated;if(N&&(Pa(y,d).flags|=256),d=nf(y,d,!1),d!==2){if(Qc&&!N){y.errorRecoveryDisabledLanes|=c,Fs|=c,u=4;break t}c=Be,Be=u,c!==null&&(Be===null?Be=c:Be.push.apply(Be,c))}u=d}if(c=!1,u!==2)continue}}if(u===1){Pa(t,0),es(t,e,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:es(s,e,Ze,!Ji);break t;case 2:Be=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(u=Lo+300-De(),10<u)){if(es(s,e,Ze,!Ji),Mn(s,0,!0)!==0)break t;Ei=e,s.timeoutHandle=Am(Kg.bind(null,s,n,Be,ko,Jc,e,Ze,Fs,Va,Ji,c,"Throttled",-0,0),u);break t}Kg(s,n,Be,ko,Jc,e,Ze,Fs,Va,Ji,c,null,-0,0)}}break}while(!0);Zn(t)}function Kg(t,e,n,s,u,c,d,y,N,z,G,F,k,q){if(t.timeoutHandle=-1,F=e.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},qg(e,c,F);var W=(c&62914560)===c?Lo-De():(c&4194048)===c?Pg-De():0;if(W=o1(F,W),W!==null){Ei=c,t.cancelPendingCommit=W(nm.bind(null,t,e,c,n,s,u,d,y,N,G,F,null,k,q)),es(t,c,d,!z);return}}nm(t,e,c,n,s,u,d,y,N)}function Av(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var u=n[s],c=u.getSnapshot;u=u.value;try{if(!Ye(c(),u))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function es(t,e,n,s){e&=~Zc,e&=~Fs,t.suspendedLanes|=e,t.pingedLanes&=~e,s&&(t.warmLanes|=e),s=t.expirationTimes;for(var u=e;0<u;){var c=31-ae(u),d=1<<c;s[c]=-1,u&=~d}n!==0&&ca(t,n,e)}function Ho(){return(It&6)===0?(nl(0),!1):!0}function ef(){if(vt!==null){if(kt===0)var t=vt.return;else t=vt,ci=ks=null,yc(t),ja=null,kr=0,t=vt;for(;t!==null;)xg(t.alternate,t),t=t.return;vt=null}}function Pa(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Pv(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Ei=0,ef(),Yt=t,vt=n=oi(t.current,null),bt=e,kt=0,Qe=null,Ji=!1,Ba=gn(t,e),Qc=!1,Va=Ze=Zc=Fs=$i=te=0,Be=tl=null,Jc=!1,(e&8)!==0&&(e|=e&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=e;0<s;){var u=31-ae(s),c=1<<u;e|=t[u],s&=~c}return bi=e,ao(),n}function Qg(t,e){mt=null,V.H=Xr,e===Ma||e===go?(e=fd(),kt=3):e===ac?(e=fd(),kt=4):kt=e===Mc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Qe=e,vt===null&&(te=1,Co(t,an(e,t.current)))}function Zg(){var t=Fe.current;return t===null?!0:(bt&4194048)===bt?un===null:(bt&62914560)===bt||(bt&536870912)!==0?t===un:!1}function Jg(){var t=V.H;return V.H=Xr,t===null?Xr:t}function $g(){var t=V.A;return V.A=Tv,t}function qo(){te=4,Ji||(bt&4194048)!==bt&&Fe.current!==null||(Ba=!0),($i&134217727)===0&&(Fs&134217727)===0||Yt===null||es(Yt,bt,Ze,!1)}function nf(t,e,n){var s=It;It|=2;var u=Jg(),c=$g();(Yt!==t||bt!==e)&&(ko=null,Pa(t,e)),e=!1;var d=te;t:do try{if(kt!==0&&vt!==null){var y=vt,N=Qe;switch(kt){case 8:ef(),d=6;break t;case 3:case 2:case 9:case 6:Fe.current===null&&(e=!0);var z=kt;if(kt=0,Qe=null,Ya(t,y,N,z),n&&Ba){d=0;break t}break;default:z=kt,kt=0,Qe=null,Ya(t,y,N,z)}}xv(),d=te;break}catch(G){Qg(t,G)}while(!0);return e&&t.shellSuspendCounter++,ci=ks=null,It=s,V.H=u,V.A=c,vt===null&&(Yt=null,bt=0,ao()),d}function xv(){for(;vt!==null;)Wg(vt)}function Nv(t,e){var n=It;It|=2;var s=Jg(),u=$g();Yt!==t||bt!==e?(ko=null,zo=De()+500,Pa(t,e)):Ba=gn(t,e);t:do try{if(kt!==0&&vt!==null){e=vt;var c=Qe;e:switch(kt){case 1:kt=0,Qe=null,Ya(t,e,c,1);break;case 2:case 9:if(ud(c)){kt=0,Qe=null,tm(e);break}e=function(){kt!==2&&kt!==9||Yt!==t||(kt=7),Zn(t)},c.then(e,e);break t;case 3:kt=7;break t;case 4:kt=5;break t;case 7:ud(c)?(kt=0,Qe=null,tm(e)):(kt=0,Qe=null,Ya(t,e,c,7));break;case 5:var d=null;switch(vt.tag){case 26:d=vt.memoizedState;case 5:case 27:var y=vt;if(d?Hm(d):y.stateNode.complete){kt=0,Qe=null;var N=y.sibling;if(N!==null)vt=N;else{var z=y.return;z!==null?(vt=z,Bo(z)):vt=null}break e}}kt=0,Qe=null,Ya(t,e,c,5);break;case 6:kt=0,Qe=null,Ya(t,e,c,6);break;case 8:ef(),te=6;break t;default:throw Error(o(462))}}wv();break}catch(G){Qg(t,G)}while(!0);return ci=ks=null,V.H=s,V.A=u,It=n,vt!==null?0:(Yt=null,bt=0,ao(),te)}function wv(){for(;vt!==null&&!Du();)Wg(vt)}function Wg(t){var e=Sg(t.alternate,t,bi);t.memoizedProps=t.pendingProps,e===null?Bo(t):vt=e}function tm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=yg(n,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=yg(n,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:yc(e);default:xg(n,e),e=vt=$h(e,bi),e=Sg(n,e,bi)}t.memoizedProps=t.pendingProps,e===null?Bo(t):vt=e}function Ya(t,e,n,s){ci=ks=null,yc(e),ja=null,kr=0;var u=e.return;try{if(mv(t,u,e,n,bt)){te=1,Co(t,an(n,t.current)),vt=null;return}}catch(c){if(u!==null)throw vt=u,c;te=1,Co(t,an(n,t.current)),vt=null;return}e.flags&32768?(Tt||s===1?t=!0:Ba||(bt&536870912)!==0?t=!1:(Ji=t=!0,(s===2||s===9||s===3||s===6)&&(s=Fe.current,s!==null&&s.tag===13&&(s.flags|=16384))),em(e,t)):Bo(e)}function Bo(t){var e=t;do{if((e.flags&32768)!==0){em(e,Ji);return}t=e.return;var n=vv(e.alternate,e,bi);if(n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);te===0&&(te=5)}function em(t,e){do{var n=_v(t.alternate,t);if(n!==null){n.flags&=32767,vt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){vt=t;return}vt=t=n}while(t!==null);te=6,vt=null}function nm(t,e,n,s,u,c,d,y,N){t.cancelPendingCommit=null;do Vo();while(ye!==0);if((It&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=Pu,Uu(t,n,c,d,y,N),t===Yt&&(vt=Yt=null,bt=0),Ga=e,ts=t,Ei=n,$c=c,Wc=u,Yg=s,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Dv(Di,function(){return lm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||s){s=V.T,V.T=null,u=Z.p,Z.p=2,d=It,It|=4;try{bv(t,e,n)}finally{It=d,Z.p=u,V.T=s}}ye=1,im(),sm(),am()}}function im(){if(ye===1){ye=0;var t=ts,e=Ga,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=V.T,V.T=null;var s=Z.p;Z.p=2;var u=It;It|=4;try{zg(e,t);var c=mf,d=Gh(t.containerInfo),y=c.focusedElem,N=c.selectionRange;if(d!==y&&y&&y.ownerDocument&&Vh(y.ownerDocument.documentElement,y)){if(N!==null&&Hu(y)){var z=N.start,G=N.end;if(G===void 0&&(G=z),"selectionStart"in y)y.selectionStart=z,y.selectionEnd=Math.min(G,y.value.length);else{var F=y.ownerDocument||document,k=F&&F.defaultView||window;if(k.getSelection){var q=k.getSelection(),W=y.textContent.length,ct=Math.min(N.start,W),Gt=N.end===void 0?ct:Math.min(N.end,W);!q.extend&&ct>Gt&&(d=Gt,Gt=ct,ct=d);var M=Bh(y,ct),O=Bh(y,Gt);if(M&&O&&(q.rangeCount!==1||q.anchorNode!==M.node||q.anchorOffset!==M.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var L=F.createRange();L.setStart(M.node,M.offset),q.removeAllRanges(),ct>Gt?(q.addRange(L),q.extend(O.node,O.offset)):(L.setEnd(O.node,O.offset),q.addRange(L))}}}}for(F=[],q=y;q=q.parentNode;)q.nodeType===1&&F.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<F.length;y++){var X=F[y];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}tu=!!gf,mf=gf=null}finally{It=u,Z.p=s,V.T=n}}t.current=e,ye=2}}function sm(){if(ye===2){ye=0;var t=ts,e=Ga,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=V.T,V.T=null;var s=Z.p;Z.p=2;var u=It;It|=4;try{Ig(t,e.alternate,e)}finally{It=u,Z.p=s,V.T=n}}ye=3}}function am(){if(ye===4||ye===3){ye=0,Dl();var t=ts,e=Ga,n=Ei,s=Yg;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ye=5:(ye=0,Ga=ts=null,rm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Wi=null),si(n),e=e.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(dn,e,void 0,(e.current.flags&128)===128)}catch{}if(s!==null){e=V.T,u=Z.p,Z.p=2,V.T=null;try{for(var c=t.onRecoverableError,d=0;d<s.length;d++){var y=s[d];c(y.value,{componentStack:y.stack})}}finally{V.T=e,Z.p=u}}(Ei&3)!==0&&Vo(),Zn(t),u=t.pendingLanes,(n&261930)!==0&&(u&42)!==0?t===tf?el++:(el=0,tf=t):el=0,nl(0)}}function rm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Lr(e)))}function Vo(){return im(),sm(),am(),lm()}function lm(){if(ye!==5)return!1;var t=ts,e=$c;$c=0;var n=si(Ei),s=V.T,u=Z.p;try{Z.p=32>n?32:n,V.T=null,n=Wc,Wc=null;var c=ts,d=Ei;if(ye=0,Ga=ts=null,Ei=0,(It&6)!==0)throw Error(o(331));var y=It;if(It|=4,Vg(c.current),Hg(c,c.current,d,n),It=y,nl(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(dn,c)}catch{}return!0}finally{Z.p=u,V.T=s,rm(t,e)}}function om(t,e,n){e=an(n,e),e=Ic(t.stateNode,e,2),t=Fi(t,e,2),t!==null&&(Ts(t,2),Zn(t))}function Ht(t,e,n){if(t.tag===3)om(t,t,n);else for(;e!==null;){if(e.tag===3){om(e,t,n);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wi===null||!Wi.has(s))){t=an(n,t),n=ug(2),s=Fi(e,n,2),s!==null&&(cg(n,s,e,t),Ts(s,2),Zn(s));break}}e=e.return}}function sf(t,e,n){var s=t.pingCache;if(s===null){s=t.pingCache=new Sv;var u=new Set;s.set(e,u)}else u=s.get(e),u===void 0&&(u=new Set,s.set(e,u));u.has(n)||(Qc=!0,u.add(n),t=Cv.bind(null,t,e,n),e.then(t,t))}function Cv(t,e,n){var s=t.pingCache;s!==null&&s.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Yt===t&&(bt&n)===n&&(te===4||te===3&&(bt&62914560)===bt&&300>De()-Lo?(It&2)===0&&Pa(t,0):Zc|=n,Va===bt&&(Va=0)),Zn(t)}function um(t,e){e===0&&(e=Ll()),t=Us(t,e),t!==null&&(Ts(t,e),Zn(t))}function Rv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),um(t,n)}function Ov(t,e){var n=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(n=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(e),um(t,n)}function Dv(t,e){return pe(t,e)}var Go=null,Xa=null,af=!1,Po=!1,rf=!1,ns=0;function Zn(t){t!==Xa&&t.next===null&&(Xa===null?Go=Xa=t:Xa=Xa.next=t),Po=!0,af||(af=!0,Mv())}function nl(t,e){if(!rf&&Po){rf=!0;do for(var n=!1,s=Go;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var d=s.suspendedLanes,y=s.pingedLanes;c=(1<<31-ae(42|t)+1)-1,c&=u&~(d&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,dm(s,c))}else c=bt,c=Mn(s,s===Yt?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||gn(s,c)||(n=!0,dm(s,c));s=s.next}while(n);rf=!1}}function Iv(){cm()}function cm(){Po=af=!1;var t=0;ns!==0&&Gv()&&(t=ns);for(var e=De(),n=null,s=Go;s!==null;){var u=s.next,c=fm(s,e);c===0?(s.next=null,n===null?Go=u:n.next=u,u===null&&(Xa=n)):(n=s,(t!==0||(c&3)!==0)&&(Po=!0)),s=u}ye!==0&&ye!==5||nl(t),ns!==0&&(ns=0)}function fm(t,e){for(var n=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var d=31-ae(c),y=1<<d,N=u[d];N===-1?((y&n)===0||(y&s)!==0)&&(u[d]=ju(y,e)):N<=e&&(t.expiredLanes|=y),c&=~y}if(e=Yt,n=bt,n=Mn(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,n===0||t===e&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Oi(s),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||gn(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(s!==null&&Oi(s),si(n)){case 2:case 8:n=hr;break;case 32:n=Di;break;case 268435456:n=Il;break;default:n=Di}return s=hm.bind(null,t),n=pe(n,s),t.callbackPriority=e,t.callbackNode=n,e}return s!==null&&s!==null&&Oi(s),t.callbackPriority=2,t.callbackNode=null,2}function hm(t,e){if(ye!==0&&ye!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Vo()&&t.callbackNode!==n)return null;var s=bt;return s=Mn(t,t===Yt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Fg(t,s,e),fm(t,De()),t.callbackNode!=null&&t.callbackNode===n?hm.bind(null,t):null)}function dm(t,e){if(Vo())return null;Fg(t,e,!0)}function Mv(){Yv(function(){(It&6)!==0?pe(fr,Iv):cm()})}function lf(){if(ns===0){var t=Da;t===0&&(t=Dn,Dn<<=1,(Dn&261888)===0&&(Dn=256)),ns=t}return ns}function gm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pa(""+t)}function mm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function jv(t,e,n,s,u){if(e==="submit"&&n&&n.stateNode===u){var c=gm((u[ve]||null).action),d=s.submitter;d&&(e=(e=d[ve]||null)?gm(e.formAction):d.getAttribute("formAction"),e!==null&&(c=e,d=null));var y=new Pn("action","action",null,s,u);t.push({event:y,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ns!==0){var N=d?mm(u,d):new FormData(u);Nc(n,{pending:!0,data:N,method:u.method,action:c},null,N)}}else typeof c=="function"&&(y.preventDefault(),N=d?mm(u,d):new FormData(u),Nc(n,{pending:!0,data:N,method:u.method,action:c},c,N))},currentTarget:u}]})}}for(var of=0;of<Gu.length;of++){var uf=Gu[of],Uv=uf.toLowerCase(),Lv=uf[0].toUpperCase()+uf.slice(1);Tn(Uv,"on"+Lv)}Tn(Xh,"onAnimationEnd"),Tn(Fh,"onAnimationIteration"),Tn(Kh,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn($y,"onTransitionRun"),Tn(Wy,"onTransitionStart"),Tn(tv,"onTransitionCancel"),Tn(Qh,"onTransitionEnd"),qn("onMouseEnter",["mouseout","mouseover"]),qn("onMouseLeave",["mouseout","mouseover"]),qn("onPointerEnter",["pointerout","pointerover"]),qn("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function pm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var s=t[n],u=s.event;s=s.listeners;t:{var c=void 0;if(e)for(var d=s.length-1;0<=d;d--){var y=s[d],N=y.instance,z=y.currentTarget;if(y=y.listener,N!==c&&u.isPropagationStopped())break t;c=y,u.currentTarget=z;try{c(u)}catch(G){so(G)}u.currentTarget=null,c=N}else for(d=0;d<s.length;d++){if(y=s[d],N=y.instance,z=y.currentTarget,y=y.listener,N!==c&&u.isPropagationStopped())break t;c=y,u.currentTarget=z;try{c(u)}catch(G){so(G)}u.currentTarget=null,c=N}}}}function _t(t,e){var n=e[fa];n===void 0&&(n=e[fa]=new Set);var s=t+"__bubble";n.has(s)||(ym(e,t,2,!1),n.add(s))}function cf(t,e,n){var s=0;e&&(s|=4),ym(n,t,s,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function ff(t){if(!t[Yo]){t[Yo]=!0,mr.forEach(function(n){n!=="selectionchange"&&(zv.has(n)||cf(n,!1,t),cf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,cf("selectionchange",!1,e))}}function ym(t,e,n,s){switch(Xm(e)){case 2:var u=f1;break;case 8:u=h1;break;default:u=Nf}n=u.bind(null,e,n,t),u=void 0,!ws||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(e,n,{capture:!0,passive:u}):t.addEventListener(e,n,!0):u!==void 0?t.addEventListener(e,n,{passive:u}):t.addEventListener(e,n,!1)}function hf(t,e,n,s,u){var c=s;if((e&1)===0&&(e&2)===0&&s!==null)t:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var y=s.stateNode.containerInfo;if(y===u)break;if(d===4)for(d=s.return;d!==null;){var N=d.tag;if((N===3||N===4)&&d.stateNode.containerInfo===u)return;d=d.return}for(;y!==null;){if(d=zn(y),d===null)return;if(N=d.tag,N===5||N===6||N===26||N===27){s=c=d;continue t}y=y.parentNode}}s=s.return}zi(function(){var z=c,G=en(n),F=[];t:{var k=Zh.get(t);if(k!==void 0){var q=Pn,W=t;switch(t){case"keypress":if(Rs(n)===0)break t;case"keydown":case"keyup":q=no;break;case"focusin":W="focus",q=Ds;break;case"focusout":W="blur",q=Ds;break;case"beforeblur":case"afterblur":q=Ds;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Cr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Xl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=m;break;case Xh:case Fh:case Kh:q=Kl;break;case Qh:q=U;break;case"scroll":case"scrollend":q=wr;break;case"wheel":q=Q;break;case"copy":case"cut":case"paste":q=Ql;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=l;break;case"toggle":case"beforetoggle":q=ee}var ct=(e&4)!==0,Gt=!ct&&(t==="scroll"||t==="scrollend"),M=ct?k!==null?k+"Capture":null:k;ct=[];for(var O=z,L;O!==null;){var X=O;if(L=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||L===null||M===null||(X=vn(O,M),X!=null&&ct.push(sl(O,X,L))),Gt)break;O=O.return}0<ct.length&&(k=new q(k,W,null,n,G),F.push({event:k,listeners:ct}))}}if((e&7)===0){t:{if(k=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",k&&n!==Ar&&(W=n.relatedTarget||n.fromElement)&&(zn(W)||W[Un]))break t;if((q||k)&&(k=G.window===G?G:(k=G.ownerDocument)?k.defaultView||k.parentWindow:window,q?(W=n.relatedTarget||n.toElement,q=z,W=W?zn(W):null,W!==null&&(Gt=g(W),ct=W.tag,W!==Gt||ct!==5&&ct!==27&&ct!==6)&&(W=null)):(q=null,W=z),q!==W)){if(ct=Cr,X="onMouseLeave",M="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(ct=l,X="onPointerLeave",M="onPointerEnter",O="pointer"),Gt=q==null?k:Ge(q),L=W==null?k:Ge(W),k=new ct(X,O+"leave",q,n,G),k.target=Gt,k.relatedTarget=L,X=null,zn(G)===z&&(ct=new ct(M,O+"enter",W,n,G),ct.target=L,ct.relatedTarget=Gt,X=ct),Gt=X,q&&W)e:{for(ct=kv,M=q,O=W,L=0,X=M;X;X=ct(X))L++;X=0;for(var at=O;at;at=ct(at))X++;for(;0<L-X;)M=ct(M),L--;for(;0<X-L;)O=ct(O),X--;for(;L--;){if(M===O||O!==null&&M===O.alternate){ct=M;break e}M=ct(M),O=ct(O)}ct=null}else ct=null;q!==null&&vm(F,k,q,ct,!1),W!==null&&Gt!==null&&vm(F,Gt,W,ct,!0)}}t:{if(k=z?Ge(z):window,q=k.nodeName&&k.nodeName.toLowerCase(),q==="select"||q==="input"&&k.type==="file")var Ot=Uh;else if(Mh(k))if(Lh)Ot=Qy;else{Ot=Fy;var et=Xy}else q=k.nodeName,!q||q.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?z&&ma(z.elementType)&&(Ot=Uh):Ot=Ky;if(Ot&&(Ot=Ot(t,z))){jh(F,Ot,n,G);break t}et&&et(t,k,z),t==="focusout"&&z&&k.type==="number"&&z.memoizedProps.value!=null&&Er(k,"number",k.value)}switch(et=z?Ge(z):window,t){case"focusin":(Mh(et)||et.contentEditable==="true")&&(Sa=et,qu=z,Mr=null);break;case"focusout":Mr=qu=Sa=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Ph(F,n,G);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Ph(F,n,G)}var yt;if($t)t:{switch(t){case"compositionstart":var Et="onCompositionStart";break t;case"compositionend":Et="onCompositionEnd";break t;case"compositionupdate":Et="onCompositionUpdate";break t}Et=void 0}else Ta?Ea(t,n)&&(Et="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(Et="onCompositionStart");Et&&(bn&&n.locale!=="ko"&&(Ta||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Ta&&(yt=Nr()):(Gn=G,xr="value"in Gn?Gn.value:Gn.textContent,Ta=!0)),et=Xo(z,Et),0<et.length&&(Et=new Xn(Et,t,null,n,G),F.push({event:Et,listeners:et}),yt?Et.data=yt:(yt=Ih(n),yt!==null&&(Et.data=yt)))),(yt=li?Vy(t,n):Gy(t,n))&&(Et=Xo(z,"onBeforeInput"),0<Et.length&&(et=new Xn("onBeforeInput","beforeinput",null,n,G),F.push({event:et,listeners:Et}),et.data=yt)),jv(F,t,z,n,G)}pm(F,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xo(t,e){for(var n=e+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=vn(t,n),u!=null&&s.unshift(sl(t,u,c)),u=vn(t,e),u!=null&&s.push(sl(t,u,c))),t.tag===3)return s;t=t.return}return[]}function kv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vm(t,e,n,s,u){for(var c=e._reactName,d=[];n!==null&&n!==s;){var y=n,N=y.alternate,z=y.stateNode;if(y=y.tag,N!==null&&N===s)break;y!==5&&y!==26&&y!==27||z===null||(N=z,u?(z=vn(n,c),z!=null&&d.unshift(sl(n,z,N))):u||(z=vn(n,c),z!=null&&d.push(sl(n,z,N)))),n=n.return}d.length!==0&&t.push({event:e,listeners:d})}var Hv=/\r\n?/g,qv=/\u0000|\uFFFD/g;function _m(t){return(typeof t=="string"?t:""+t).replace(Hv,`
`).replace(qv,"")}function bm(t,e){return e=_m(e),_m(t)===e}function Vt(t,e,n,s,u,c){switch(n){case"children":typeof s=="string"?e==="body"||e==="textarea"&&s===""||ze(t,s):(typeof s=="number"||typeof s=="bigint")&&e!=="body"&&ze(t,""+s);break;case"className":Pe(t,"class",s);break;case"tabIndex":Pe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(t,n,s);break;case"style":Sr(t,s,c);break;case"data":if(e!=="object"){Pe(t,"data",s);break}case"src":case"href":if(s===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(n);break}s=pa(""+s),t.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(e!=="input"&&Vt(t,e,"name",u.name,u,null),Vt(t,e,"formEncType",u.formEncType,u,null),Vt(t,e,"formMethod",u.formMethod,u,null),Vt(t,e,"formTarget",u.formTarget,u,null)):(Vt(t,e,"encType",u.encType,u,null),Vt(t,e,"method",u.method,u,null),Vt(t,e,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(n);break}s=pa(""+s),t.setAttribute(n,s);break;case"onClick":s!=null&&(t.onclick=yn);break;case"onScroll":s!=null&&_t("scroll",t);break;case"onScrollEnd":s!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}n=pa(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(n,""+s):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":s===!0?t.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(n,s):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(n,s):t.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(n):t.setAttribute(n,s);break;case"popover":_t("beforetoggle",t),_t("toggle",t),da(t,"popover",s);break;case"xlinkActuate":ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ue(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ue(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ue(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ue(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":da(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Yl.get(n)||n,da(t,n,s))}}function df(t,e,n,s,u,c){switch(n){case"style":Sr(t,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"children":typeof s=="string"?ze(t,s):(typeof s=="number"||typeof s=="bigint")&&ze(t,""+s);break;case"onScroll":s!=null&&_t("scroll",t);break;case"onScrollEnd":s!=null&&_t("scrollend",t);break;case"onClick":s!=null&&(t.onclick=yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pr.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),e=n.slice(2,u?n.length-7:void 0),c=t[ve]||null,c=c!=null?c[n]:null,typeof c=="function"&&t.removeEventListener(e,c,u),typeof s=="function")){typeof c!="function"&&c!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,s,u);break t}n in t?t[n]=s:s===!0?t.setAttribute(n,""):da(t,n,s)}}}function we(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var s=!1,u=!1,c;for(c in n)if(n.hasOwnProperty(c)){var d=n[c];if(d!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Vt(t,e,c,d,n,null)}}u&&Vt(t,e,"srcSet",n.srcSet,n,null),s&&Vt(t,e,"src",n.src,n,null);return;case"input":_t("invalid",t);var y=c=d=u=null,N=null,z=null;for(s in n)if(n.hasOwnProperty(s)){var G=n[s];if(G!=null)switch(s){case"name":u=G;break;case"type":d=G;break;case"checked":N=G;break;case"defaultChecked":z=G;break;case"value":c=G;break;case"defaultValue":y=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,e));break;default:Vt(t,e,s,G,n,null)}}Vl(t,c,y,N,z,d,u,!1);return;case"select":_t("invalid",t),s=d=c=null;for(u in n)if(n.hasOwnProperty(u)&&(y=n[u],y!=null))switch(u){case"value":c=y;break;case"defaultValue":d=y;break;case"multiple":s=y;default:Vt(t,e,u,y,n,null)}e=c,n=d,t.multiple=!!s,e!=null?Mi(t,!!s,e,!1):n!=null&&Mi(t,!!s,n,!0);return;case"textarea":_t("invalid",t),c=u=s=null;for(d in n)if(n.hasOwnProperty(d)&&(y=n[d],y!=null))switch(d){case"value":s=y;break;case"defaultValue":u=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Vt(t,e,d,y,n,null)}ji(t,s,u,c);return;case"option":for(N in n)if(n.hasOwnProperty(N)&&(s=n[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Vt(t,e,N,s,n,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(s=0;s<il.length;s++)_t(il[s],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(s=n[z],s!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Vt(t,e,z,s,n,null)}return;default:if(ma(e)){for(G in n)n.hasOwnProperty(G)&&(s=n[G],s!==void 0&&df(t,e,G,s,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(s=n[y],s!=null&&Vt(t,e,y,s,n,null))}function Bv(t,e,n,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,d=null,y=null,N=null,z=null,G=null;for(q in n){var F=n[q];if(n.hasOwnProperty(q)&&F!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":N=F;default:s.hasOwnProperty(q)||Vt(t,e,q,null,s,F)}}for(var k in s){var q=s[k];if(F=n[k],s.hasOwnProperty(k)&&(q!=null||F!=null))switch(k){case"type":c=q;break;case"name":u=q;break;case"checked":z=q;break;case"defaultChecked":G=q;break;case"value":d=q;break;case"defaultValue":y=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,e));break;default:q!==F&&Vt(t,e,k,q,s,F)}}ga(t,d,y,N,z,G,c,u);return;case"select":q=d=y=k=null;for(c in n)if(N=n[c],n.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":q=N;default:s.hasOwnProperty(c)||Vt(t,e,c,null,s,N)}for(u in s)if(c=s[u],N=n[u],s.hasOwnProperty(u)&&(c!=null||N!=null))switch(u){case"value":k=c;break;case"defaultValue":y=c;break;case"multiple":d=c;default:c!==N&&Vt(t,e,u,c,s,N)}e=y,n=d,s=q,k!=null?Mi(t,!!n,k,!1):!!s!=!!n&&(e!=null?Mi(t,!!n,e,!0):Mi(t,!!n,n?[]:"",!1));return;case"textarea":q=k=null;for(y in n)if(u=n[y],n.hasOwnProperty(y)&&u!=null&&!s.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Vt(t,e,y,null,s,u)}for(d in s)if(u=s[d],c=n[d],s.hasOwnProperty(d)&&(u!=null||c!=null))switch(d){case"value":k=u;break;case"defaultValue":q=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==c&&Vt(t,e,d,u,s,c)}Gl(t,k,q);return;case"option":for(var W in n)if(k=n[W],n.hasOwnProperty(W)&&k!=null&&!s.hasOwnProperty(W))switch(W){case"selected":t.selected=!1;break;default:Vt(t,e,W,null,s,k)}for(N in s)if(k=s[N],q=n[N],s.hasOwnProperty(N)&&k!==q&&(k!=null||q!=null))switch(N){case"selected":t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Vt(t,e,N,k,s,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in n)k=n[ct],n.hasOwnProperty(ct)&&k!=null&&!s.hasOwnProperty(ct)&&Vt(t,e,ct,null,s,k);for(z in s)if(k=s[z],q=n[z],s.hasOwnProperty(z)&&k!==q&&(k!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,e));break;default:Vt(t,e,z,k,s,q)}return;default:if(ma(e)){for(var Gt in n)k=n[Gt],n.hasOwnProperty(Gt)&&k!==void 0&&!s.hasOwnProperty(Gt)&&df(t,e,Gt,void 0,s,k);for(G in s)k=s[G],q=n[G],!s.hasOwnProperty(G)||k===q||k===void 0&&q===void 0||df(t,e,G,k,s,q);return}}for(var M in n)k=n[M],n.hasOwnProperty(M)&&k!=null&&!s.hasOwnProperty(M)&&Vt(t,e,M,null,s,k);for(F in s)k=s[F],q=n[F],!s.hasOwnProperty(F)||k===q||k==null&&q==null||Vt(t,e,F,k,s,q)}function Em(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),s=0;s<n.length;s++){var u=n[s],c=u.transferSize,d=u.initiatorType,y=u.duration;if(c&&y&&Em(d)){for(d=0,y=u.responseEnd,s+=1;s<n.length;s++){var N=n[s],z=N.startTime;if(z>y)break;var G=N.transferSize,F=N.initiatorType;G&&Em(F)&&(N=N.responseEnd,d+=G*(N<y?1:(y-z)/(N-z)))}if(--s,e+=8*(c+d)/(u.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gf=null,mf=null;function Fo(t){return t.nodeType===9?t:t.ownerDocument}function Tm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yf=null;function Gv(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var Am=typeof setTimeout=="function"?setTimeout:void 0,Pv=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(t){return xm.resolve(null).then(t).catch(Xv)}:Am;function Xv(t){setTimeout(function(){throw t})}function is(t){return t==="head"}function Nm(t,e){var n=e,s=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"||n==="/&"){if(s===0){t.removeChild(u),Za(e);return}s--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;else if(n==="html")al(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,al(n);for(var c=n.firstChild;c;){var d=c.nextSibling,y=c.nodeName;c[Ln]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=d}}else n==="body"&&al(t.ownerDocument.body);n=u}while(n);Za(e)}function wm(t,e){var n=t;t=0;do{var s=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=s}while(n)}function vf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vf(n),ha(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Fv(t,e,n,s){for(;t.nodeType===1;){var u=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ln])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=cn(t.nextSibling),t===null)break}return null}function Kv(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=cn(t.nextSibling),t===null))return null;return t}function Cm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=cn(t.nextSibling),t===null))return null;return t}function _f(t){return t.data==="$?"||t.data==="$~"}function bf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qv(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var s=function(){e(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ef=null;function Rm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return cn(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Dm(t,e,n){switch(e=Fo(n),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function al(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ha(t)}var fn=new Map,Im=new Set;function Ko(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ti=Z.d;Z.d={f:Zv,r:Jv,D:$v,C:Wv,L:t1,m:e1,X:i1,S:n1,M:s1};function Zv(){var t=Ti.f(),e=Ho();return t||e}function Jv(t){var e=tn(t);e!==null&&e.tag===5&&e.type==="form"?Qd(e):Ti.r(t)}var Fa=typeof document>"u"?null:document;function Mm(t,e,n){var s=Fa;if(s&&typeof e=="string"&&e){var u=Le(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),Im.has(u)||(Im.add(u),t={rel:t,crossOrigin:n,href:e},s.querySelector(u)===null&&(e=s.createElement("link"),we(e,"link",t),oe(e),s.head.appendChild(e)))}}function $v(t){Ti.D(t),Mm("dns-prefetch",t,null)}function Wv(t,e){Ti.C(t,e),Mm("preconnect",t,e)}function t1(t,e,n){Ti.L(t,e,n);var s=Fa;if(s&&t&&e){var u='link[rel="preload"][as="'+Le(e)+'"]';e==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+Le(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+Le(n.imageSizes)+'"]')):u+='[href="'+Le(t)+'"]';var c=u;switch(e){case"style":c=Ka(t);break;case"script":c=Qa(t)}fn.has(c)||(t=j({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),fn.set(c,t),s.querySelector(u)!==null||e==="style"&&s.querySelector(rl(c))||e==="script"&&s.querySelector(ll(c))||(e=s.createElement("link"),we(e,"link",t),oe(e),s.head.appendChild(e)))}}function e1(t,e){Ti.m(t,e);var n=Fa;if(n&&t){var s=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Le(s)+'"][href="'+Le(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Qa(t)}if(!fn.has(c)&&(t=j({rel:"modulepreload",href:t},e),fn.set(c,t),n.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ll(c)))return}s=n.createElement("link"),we(s,"link",t),oe(s),n.head.appendChild(s)}}}function n1(t,e,n){Ti.S(t,e,n);var s=Fa;if(s&&t){var u=kn(s).hoistableStyles,c=Ka(t);e=e||"default";var d=u.get(c);if(!d){var y={loading:0,preload:null};if(d=s.querySelector(rl(c)))y.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":e},n),(n=fn.get(c))&&Tf(t,n);var N=d=s.createElement("link");oe(N),we(N,"link",t),N._p=new Promise(function(z,G){N.onload=z,N.onerror=G}),N.addEventListener("load",function(){y.loading|=1}),N.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Qo(d,e,s)}d={type:"stylesheet",instance:d,count:1,state:y},u.set(c,d)}}}function i1(t,e){Ti.X(t,e);var n=Fa;if(n&&t){var s=kn(n).hoistableScripts,u=Qa(t),c=s.get(u);c||(c=n.querySelector(ll(u)),c||(t=j({src:t,async:!0},e),(e=fn.get(u))&&Sf(t,e),c=n.createElement("script"),oe(c),we(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function s1(t,e){Ti.M(t,e);var n=Fa;if(n&&t){var s=kn(n).hoistableScripts,u=Qa(t),c=s.get(u);c||(c=n.querySelector(ll(u)),c||(t=j({src:t,async:!0,type:"module"},e),(e=fn.get(u))&&Sf(t,e),c=n.createElement("script"),oe(c),we(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function jm(t,e,n,s){var u=(u=pt.current)?Ko(u):null;if(!u)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ka(n.href),n=kn(u).hoistableStyles,s=n.get(e),s||(s={type:"style",instance:null,count:0,state:null},n.set(e,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ka(n.href);var c=kn(u).hoistableStyles,d=c.get(t);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,d),(c=u.querySelector(rl(t)))&&!c._p&&(d.instance=c,d.state.loading=5),fn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},fn.set(t,n),c||a1(u,t,n,d.state))),e&&s===null)throw Error(o(528,""));return d}if(e&&s!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Qa(n),n=kn(u).hoistableScripts,s=n.get(e),s||(s={type:"script",instance:null,count:0,state:null},n.set(e,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Ka(t){return'href="'+Le(t)+'"'}function rl(t){return'link[rel="stylesheet"]['+t+"]"}function Um(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function a1(t,e,n,s){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?s.loading=1:(e=t.createElement("link"),s.preload=e,e.addEventListener("load",function(){return s.loading|=1}),e.addEventListener("error",function(){return s.loading|=2}),we(e,"link",n),oe(e),t.head.appendChild(e))}function Qa(t){return'[src="'+Le(t)+'"]'}function ll(t){return"script[async]"+t}function Lm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var s=t.querySelector('style[data-href~="'+Le(n.href)+'"]');if(s)return e.instance=s,oe(s),s;var u=j({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),oe(s),we(s,"style",u),Qo(s,n.precedence,t),e.instance=s;case"stylesheet":u=Ka(n.href);var c=t.querySelector(rl(u));if(c)return e.state.loading|=4,e.instance=c,oe(c),c;s=Um(n),(u=fn.get(u))&&Tf(s,u),c=(t.ownerDocument||t).createElement("link"),oe(c);var d=c;return d._p=new Promise(function(y,N){d.onload=y,d.onerror=N}),we(c,"link",s),e.state.loading|=4,Qo(c,n.precedence,t),e.instance=c;case"script":return c=Qa(n.src),(u=t.querySelector(ll(c)))?(e.instance=u,oe(u),u):(s=n,(u=fn.get(c))&&(s=j({},n),Sf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),oe(u),we(u,"link",s),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(s=e.instance,e.state.loading|=4,Qo(s,n.precedence,t));return e.instance}function Qo(t,e,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,d=0;d<s.length;d++){var y=s[d];if(y.dataset.precedence===e)c=y;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Tf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Sf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Zo=null;function zm(t,e,n){if(Zo===null){var s=new Map,u=Zo=new Map;u.set(n,s)}else u=Zo,s=u.get(n),s||(s=new Map,u.set(n,s));if(s.has(t))return s;for(s.set(t,null),n=n.getElementsByTagName(t),u=0;u<n.length;u++){var c=n[u];if(!(c[Ln]||c[le]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(e)||"";d=t+d;var y=s.get(d);y?y.push(c):s.set(d,[c])}}return s}function km(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function r1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Hm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function l1(t,e,n,s){if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Ka(s.href),c=e.querySelector(rl(u));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Jo.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=c,oe(c);return}c=e.ownerDocument||e,s=Um(s),(u=fn.get(u))&&Tf(s,u),c=c.createElement("link"),oe(c);var d=c;d._p=new Promise(function(y,N){d.onload=y,d.onerror=N}),we(c,"link",s),n.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Jo.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Af=0;function o1(t,e){return t.stylesheets&&t.count===0&&Wo(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var s=setTimeout(function(){if(t.stylesheets&&Wo(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Af===0&&(Af=62500*Vv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wo(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Af?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Jo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $o=null;function Wo(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$o=new Map,e.forEach(u1,t),$o=null,Jo.call(t))}function u1(t,e){if(!(e.state.loading&4)){var n=$o.get(t);if(n)var s=n.get(null);else{n=new Map,$o.set(t,n);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var d=u[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),s=d)}s&&n.set(null,s)}u=e.instance,d=u.getAttribute("data-precedence"),c=n.get(d)||s,c===s&&n.set(null,u),n.set(d,u),this.count++,s=Jo.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var ol={$$typeof:ot,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function c1(t,e,n,s,u,c,d,y,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.hiddenUpdates=jn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function qm(t,e,n,s,u,c,d,y,N,z,G,F){return t=new c1(t,e,n,d,N,z,G,F,y),e=1,c===!0&&(e|=24),c=Xe(3,null,null,e),t.current=c,c.stateNode=t,e=nc(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:s,isDehydrated:n,cache:e},rc(c),t}function Bm(t){return t?(t=Na,t):Na}function Vm(t,e,n,s,u,c){u=Bm(u),s.context===null?s.context=u:s.pendingContext=u,s=Xi(e),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=Fi(t,s,e),n!==null&&(Ve(n,t,e),qr(n,t,e))}function Gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xf(t,e){Gm(t,e),(t=t.alternate)&&Gm(t,e)}function Pm(t){if(t.tag===13||t.tag===31){var e=Us(t,67108864);e!==null&&Ve(e,t,67108864),xf(t,67108864)}}function Ym(t){if(t.tag===13||t.tag===31){var e=Je();e=Ss(e);var n=Us(t,e);n!==null&&Ve(n,t,e),xf(t,e)}}var tu=!0;function f1(t,e,n,s){var u=V.T;V.T=null;var c=Z.p;try{Z.p=2,Nf(t,e,n,s)}finally{Z.p=c,V.T=u}}function h1(t,e,n,s){var u=V.T;V.T=null;var c=Z.p;try{Z.p=8,Nf(t,e,n,s)}finally{Z.p=c,V.T=u}}function Nf(t,e,n,s){if(tu){var u=wf(s);if(u===null)hf(t,e,s,eu,n),Fm(t,s);else if(g1(u,t,e,n,s))s.stopPropagation();else if(Fm(t,s),e&4&&-1<d1.indexOf(t)){for(;u!==null;){var c=tn(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=In(c.pendingLanes);if(d!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;d;){var N=1<<31-ae(d);y.entanglements[1]|=N,d&=~N}Zn(c),(It&6)===0&&(zo=De()+500,nl(0))}}break;case 31:case 13:y=Us(c,2),y!==null&&Ve(y,c,2),Ho(),xf(c,2)}if(c=wf(s),c===null&&hf(t,e,s,eu,n),c===u)break;u=c}u!==null&&s.stopPropagation()}else hf(t,e,s,null,n)}}function wf(t){return t=en(t),Cf(t)}var eu=null;function Cf(t){if(eu=null,t=zn(t),t!==null){var e=g(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=p(e),t!==null)return t;t=null}else if(n===31){if(t=C(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return eu=t,null}function Xm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bs()){case fr:return 2;case hr:return 8;case Di:case Iu:return 32;case Il:return 268435456;default:return 32}default:return 32}}var Rf=!1,ss=null,as=null,rs=null,ul=new Map,cl=new Map,ls=[],d1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fm(t,e){switch(t){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function fl(t,e,n,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:n,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},e!==null&&(e=tn(e),e!==null&&Pm(e)),t):(t.eventSystemFlags|=s,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function g1(t,e,n,s,u){switch(e){case"focusin":return ss=fl(ss,t,e,n,s,u),!0;case"dragenter":return as=fl(as,t,e,n,s,u),!0;case"mouseover":return rs=fl(rs,t,e,n,s,u),!0;case"pointerover":var c=u.pointerId;return ul.set(c,fl(ul.get(c)||null,t,e,n,s,u)),!0;case"gotpointercapture":return c=u.pointerId,cl.set(c,fl(cl.get(c)||null,t,e,n,s,u)),!0}return!1}function Km(t){var e=zn(t.target);if(e!==null){var n=g(e);if(n!==null){if(e=n.tag,e===13){if(e=p(n),e!==null){t.blockedOn=e,mn(t.priority,function(){Ym(n)});return}}else if(e===31){if(e=C(n),e!==null){t.blockedOn=e,mn(t.priority,function(){Ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.nativeEvent);if(n===null){n=t.nativeEvent;var s=new n.constructor(n.type,n);Ar=s,n.target.dispatchEvent(s),Ar=null}else return e=tn(n),e!==null&&Pm(e),t.blockedOn=n,!1;e.shift()}return!0}function Qm(t,e,n){nu(t)&&n.delete(e)}function m1(){Rf=!1,ss!==null&&nu(ss)&&(ss=null),as!==null&&nu(as)&&(as=null),rs!==null&&nu(rs)&&(rs=null),ul.forEach(Qm),cl.forEach(Qm)}function iu(t,e){t.blockedOn===e&&(t.blockedOn=null,Rf||(Rf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,m1)))}var su=null;function Zm(t){su!==t&&(su=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){su===t&&(su=null);for(var e=0;e<t.length;e+=3){var n=t[e],s=t[e+1],u=t[e+2];if(typeof s!="function"){if(Cf(s||n)===null)continue;break}var c=tn(n);c!==null&&(t.splice(e,3),e-=3,Nc(c,{pending:!0,data:u,method:n.method,action:s},s,u))}}))}function Za(t){function e(N){return iu(N,t)}ss!==null&&iu(ss,t),as!==null&&iu(as,t),rs!==null&&iu(rs,t),ul.forEach(e),cl.forEach(e);for(var n=0;n<ls.length;n++){var s=ls[n];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ls.length&&(n=ls[0],n.blockedOn===null);)Km(n),n.blockedOn===null&&ls.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var u=n[s],c=n[s+1],d=u[ve]||null;if(typeof c=="function")d||Zm(n);else if(d){var y=null;if(c&&c.hasAttribute("formAction")){if(u=c,d=c[ve]||null)y=d.formAction;else if(Cf(u)!==null)continue}else y=d.action;typeof y=="function"?n[s+1]=y:(n.splice(s,3),s-=3),Zm(n)}}}function Jm(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return u=d})},focusReset:"manual",scroll:"manual"})}function e(){u!==null&&(u(),u=null),s||setTimeout(n,20)}function n(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),u!==null&&(u(),u=null)}}}function Of(t){this._internalRoot=t}au.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,s=Je();Vm(n,s,t,e,null,null)},au.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vm(t.current,2,null,t,null,null),Ho(),e[Un]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=kl();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ls.length&&e!==0&&e<ls[n].priority;n++);ls.splice(n,0,t),n===0&&Km(t)}};var $m=i.version;if($m!=="19.2.1")throw Error(o(527,$m,"19.2.1"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=T(e),t=t!==null?P(t):null,t=t===null?null:t.stateNode,t};var p1={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{dn=ru.inject(p1),Te=ru}catch{}}return dl.createRoot=function(t,e){if(!f(t))throw Error(o(299));var n=!1,s="",u=ag,c=rg,d=lg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError)),e=qm(t,1,!1,null,null,n,s,null,u,c,d,Jm),t[Un]=e.current,ff(t),new Of(e)},dl.hydrateRoot=function(t,e,n){if(!f(t))throw Error(o(299));var s=!1,u="",c=ag,d=rg,y=lg,N=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(N=n.formState)),e=qm(t,1,!0,e,n??null,s,u,N,c,d,y,Jm),e.context=Bm(null),n=e.current,s=Je(),s=Ss(s),u=Xi(s),u.callback=null,Fi(n,u,s),n=s,e.current.lanes=n,Ts(e,n),Zn(e),t[Un]=e.current,ff(t),new au(e)},dl.version="19.2.1",dl}var op;function w1(){if(op)return Mf.exports;op=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Mf.exports=N1(),Mf.exports}var C1=w1();const R1=h0(C1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D1=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,o)=>o?o.toUpperCase():r.toLowerCase()),up=a=>{const i=D1(a);return i.charAt(0).toUpperCase()+i.slice(1)},d0=(...a)=>a.filter((i,r,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===r).join(" ").trim(),I1=a=>{for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=xt.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:f="",children:g,iconNode:p,...C},A)=>xt.createElement("svg",{ref:A,...M1,width:i,height:i,stroke:a,strokeWidth:o?Number(r)*24/Number(i):r,className:d0("lucide",f),...!g&&!I1(C)&&{"aria-hidden":"true"},...C},[...p.map(([T,P])=>xt.createElement(T,P)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(a,i)=>{const r=xt.forwardRef(({className:o,...f},g)=>xt.createElement(j1,{ref:g,iconNode:i,className:d0(`lucide-${O1(up(a))}`,`lucide-${a}`,o),...f}));return r.displayName=up(a),r};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zf=Ee("check",U1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],z1=Ee("circle-alert",L1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],H1=Ee("circle-check-big",k1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],gl=Ee("copy",q1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],V1=Ee("file-text",B1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],P1=Ee("heart-pulse",G1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],X1=Ee("list",Y1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],K1=Ee("plus",F1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],cp=Ee("quote",Q1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],J1=Ee("refresh-cw",Z1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],W1=Ee("search",$1);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],e2=Ee("send",t2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],i2=Ee("settings",n2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],a2=Ee("share-2",s2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],g0=Ee("square-pen",r2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],o2=Ee("stethoscope",l2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],m0=Ee("trash-2",u2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],p0=Ee("x",c2);var Y=(a=>(a.SURGERY="SURGERY",a.WOMEN_PREGNANCY="WOMEN_PREGNANCY",a.ICU_DEATH="ICU_DEATH",a.FASTING_MEDICINE="FASTING_MEDICINE",a.ETHICS="ETHICS",a.GENETICS_REPRODUCTION="GENETICS_REPRODUCTION",a.TATTOO_CORTISONE="TATTOO_CORTISONE",a.PRAYER_PURITY="PRAYER_PURITY",a.MEDICAL_EXPERIMENTS="MEDICAL_EXPERIMENTS",a.PHARMACY_DRUGS="PHARMACY_DRUGS",a.MISCELLANEOUS="MISCELLANEOUS",a))(Y||{});const bl=[{id:Y.SURGERY,name:"الجراحة والتجميل",icon:"Scissors",color:"bg-blue-100 text-blue-600"},{id:Y.WOMEN_PREGNANCY,name:"قضايا تتعلق بالنساء والإنجاب والأسرة",icon:"Baby",color:"bg-pink-100 text-pink-600"},{id:Y.ICU_DEATH,name:"قضايا تتعلق بحالات العناية المركزة والموت",icon:"Activity",color:"bg-red-100 text-red-600"},{id:Y.FASTING_MEDICINE,name:"قضايا تتعلق بالصيام والأدوية",icon:"Moon",color:"bg-yellow-100 text-yellow-600"},{id:Y.ETHICS,name:"قضايا تتعلق بالأخلاقيات",icon:"Heart",color:"bg-green-100 text-green-600"},{id:Y.GENETICS_REPRODUCTION,name:"قضايا تتعلق بالإنجاب والجينات",icon:"Dna",color:"bg-purple-100 text-purple-600"},{id:Y.TATTOO_CORTISONE,name:"قضايا تتعلق بالوشم والاستخدام غير الطبي للكورتيزون",icon:"Zap",color:"bg-orange-100 text-orange-600"},{id:Y.PRAYER_PURITY,name:"قضايا تتعلق بالصلاة والطهارة",icon:"BookOpen",color:"bg-indigo-100 text-indigo-600"},{id:Y.MEDICAL_EXPERIMENTS,name:"قضايا تتعلق بالتجارب الطبية على الإنسان والحيوان",icon:"TestTube2",color:"bg-cyan-100 text-cyan-600"},{id:Y.PHARMACY_DRUGS,name:"قضايا الصيدلة والأدوية",icon:"Pill",color:"bg-lime-100 text-lime-600"},{id:Y.MISCELLANEOUS,name:"مسائل متنوعة",icon:"MoreHorizontal",color:"bg-gray-100 text-gray-600"}],f2=[{id:"surg_001_2025",category:Y.SURGERY,title:"الأحكام الشاملة لجراحات التجميل",question:"ما هو التفصيل الشرعي الكامل في إجراء عمليات التجميل (الضرورية والتحسينية)؟",medical_context:"plastic surgery, rhinoplasty, breast augmentation, liposuction, botox, fillers, reconstruction, cosmetic, burn",ruling:`أولاً: الجراحة التجميلية الضرورية (العلاجية):
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
والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية — فتوى رقم 7790 — 26 يوليو 2023م — أ.د/ شوقي إبراهيم علام",tags:["ترقيع الجلد","جلد الميت","زراعة الأنسجة","التداوي","الضرورة","التبرع","بيع الأعضاء","الحروق"]}],h2=({fatwa:a,onClose:i})=>{const[r,o]=xt.useState(!1),[f,g]=xt.useState(!1),p=T=>{navigator.clipboard.writeText(T),o(!0),setTimeout(()=>o(!1),2e3)},C=()=>{const T=`📌 ${a.title}

❓ السؤال:
${a.question}

${a.medical_context?`🏥 السياق الطبي:
${a.medical_context}

`:""}✅ الحكم الشرعي:
${a.ruling}

📋 الحكم النهائي: ${a.verdict==="PERMITTED"?"جائز ✓":a.verdict==="FORBIDDEN"?"محرم ✗":"مشروط ◎"}

📚 المصدر: ${a.source}`;p(T)},A=T=>{const P=`${a.title} - الطبيب الفقيه`,j=window.location.href,B={twitter:`https://twitter.com/intent/tweet?text=${encodeURIComponent(P)}&url=${encodeURIComponent(j)}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(j)}`,whatsapp:`https://wa.me/?text=${encodeURIComponent(P+`
`+j)}`,telegram:`https://t.me/share/url?url=${encodeURIComponent(j)}&text=${encodeURIComponent(P)}`};B[T]&&window.open(B[T],"_blank","width=600,height=400")};return v.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 overflow-y-auto flex items-center justify-center p-4",children:v.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-3xl my-8",children:[v.jsxs("div",{className:"px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-teal-50 to-blue-50",children:[v.jsx("button",{onClick:i,className:"text-gray-500 hover:text-gray-700 text-2xl font-bold hover:bg-gray-100 p-2 rounded-lg transition",children:v.jsx(p0,{size:24})}),v.jsx("h2",{className:"text-sm font-bold text-teal-700 flex-1 text-center px-4 line-clamp-2",children:a.source}),v.jsx("div",{className:"w-10"})]}),v.jsxs("div",{className:"p-6 space-y-6 max-h-[70vh] overflow-y-auto",children:[v.jsx("div",{className:"border-r-4 border-teal-600 pr-4",children:v.jsx("h3",{className:"font-bold text-2xl font-amiri leading-snug text-gray-900",children:a.title})}),v.jsxs("div",{className:"bg-amber-50 rounded-lg border-2 border-amber-300 overflow-hidden",children:[v.jsxs("div",{className:"bg-amber-200 px-4 py-2 flex items-center gap-2",children:[v.jsx("span",{className:"text-2xl",children:"❓"}),v.jsx("h4",{className:"text-sm font-bold text-amber-900",children:"السؤال"})]}),v.jsx("div",{className:"p-5",children:v.jsx("p",{className:"text-base text-amber-950 leading-8 whitespace-pre-wrap",children:a.question})}),v.jsxs("button",{onClick:()=>p(a.question),className:"w-full py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-semibold flex items-center justify-center gap-2 transition",children:[v.jsx(gl,{size:14}),r?"تم النسخ!":"نسخ السؤال"]})]}),a.medical_context&&v.jsxs("div",{className:"bg-blue-50 rounded-lg border-2 border-blue-300 overflow-hidden",children:[v.jsxs("div",{className:"bg-blue-200 px-4 py-2 flex items-center gap-2",children:[v.jsx("span",{className:"text-2xl",children:"🏥"}),v.jsx("h4",{className:"text-sm font-bold text-blue-900",children:"السياق الطبي (الكلمات المفتاحية)"})]}),v.jsx("div",{className:"p-5",children:v.jsx("p",{className:"text-xs text-blue-950 leading-6 font-mono whitespace-pre-wrap",children:a.medical_context})}),v.jsxs("button",{onClick:()=>p(a.medical_context),className:"w-full py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold flex items-center justify-center gap-2 transition",children:[v.jsx(gl,{size:14}),"نسخ الكلمات المفتاحية"]})]}),v.jsxs("div",{className:"bg-green-50 rounded-lg border-l-4 border-green-600 overflow-hidden",children:[v.jsxs("div",{className:"bg-green-100 px-4 py-2 flex items-center gap-2",children:[v.jsx("span",{className:"text-2xl",children:"✅"}),v.jsx("h4",{className:"text-sm font-bold text-green-900",children:"الحكم الشرعي والتفصيل"})]}),v.jsx("div",{className:"p-5",children:v.jsx("p",{className:"text-base leading-8 whitespace-pre-wrap text-gray-800 font-medium",children:a.ruling})}),v.jsxs("button",{onClick:()=>p(a.ruling),className:"w-full py-2 bg-green-100 hover:bg-green-200 text-green-800 text-xs font-semibold flex items-center justify-center gap-2 transition",children:[v.jsx(gl,{size:14}),"نسخ الحكم الشرعي"]})]}),v.jsx("div",{className:"flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-300",children:v.jsxs("div",{children:[v.jsx("p",{className:"text-xs font-bold text-gray-600 mb-2",children:"الحكم النهائي:"}),v.jsxs("span",{className:`text-sm font-bold px-4 py-2 rounded-full inline-block ${a.verdict==="PERMITTED"?"bg-green-100 text-green-800":a.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[a.verdict==="PERMITTED"&&"✓ جائز",a.verdict==="FORBIDDEN"&&"✗ محرم",a.verdict==="CONDITIONAL"&&"◎ مشروط"]})]})}),a.tags&&a.tags.length>0&&v.jsxs("div",{children:[v.jsx("p",{className:"text-xs font-bold text-gray-600 mb-3",children:"🏷️ الكلمات المفتاحية:"}),v.jsx("div",{className:"flex flex-wrap gap-2",children:a.tags.map((T,P)=>v.jsxs("span",{className:"text-xs bg-gradient-to-r from-teal-100 to-blue-100 hover:from-teal-200 hover:to-blue-200 text-teal-800 px-3 py-2 rounded-full transition cursor-pointer font-medium",children:["#",T]},P))})]}),v.jsxs("div",{className:"bg-gray-100 rounded-lg p-4 border border-gray-300",children:[v.jsx("p",{className:"text-xs font-bold text-gray-600 mb-2",children:"📚 المصدر:"}),v.jsx("p",{className:"text-sm text-gray-800 font-semibold leading-relaxed",children:a.source})]})]}),v.jsxs("div",{className:"px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between gap-3 flex-wrap",children:[v.jsxs("button",{onClick:C,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition ${r?"bg-green-500 text-white":"bg-blue-500 text-white hover:bg-blue-600"}`,children:[v.jsx(gl,{size:16}),r?"تم النسخ!":"نسخ كاملة"]}),v.jsxs("div",{className:"relative",children:[v.jsxs("button",{onClick:()=>g(!f),className:"flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold text-sm hover:bg-purple-600 transition",children:[v.jsx(a2,{size:16}),"مشاركة"]}),f&&v.jsxs("div",{className:"absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden",children:[v.jsx("button",{onClick:()=>{A("twitter"),g(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"𝕏 تويتر"}),v.jsx("button",{onClick:()=>{A("facebook"),g(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"f فيسبوك"}),v.jsx("button",{onClick:()=>{A("whatsapp"),g(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"💬 واتساب"}),v.jsx("button",{onClick:()=>{A("telegram"),g(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"✈️ تيليجرام"})]})]}),v.jsx("button",{onClick:i,className:"flex items-center gap-2 px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition ml-auto",children:"إغلاق"})]})]})})},y0=a=>{var f,g;const i=[];!a.id||a.id.trim()===""?i.push({field:"id",message:"رقم الفتوى (ID) مطلوب",severity:"error"}):/^[a-z0-9_]+$/.test(a.id)||i.push({field:"id",message:"رقم الفتوى يجب أن يحتوي على أحرف إنجليزية صغيرة وأرقام وعلامات underscore فقط",severity:"error"}),a.category||i.push({field:"category",message:"التصنيف مطلوب",severity:"error"}),(!a.title||a.title.trim()==="")&&i.push({field:"title",message:"العنوان مطلوب",severity:"error"}),(!a.question||a.question.trim()==="")&&i.push({field:"question",message:"السؤال مطلوب",severity:"error"}),!a.ruling||a.ruling.trim()===""?i.push({field:"ruling",message:"الحكم الشرعي مطلوب",severity:"error"}):a.ruling.trim().length<50&&i.push({field:"ruling",message:"الحكم الشرعي يجب أن يكون أطول (50 حرف على الأقل)",severity:"warning"});const r=(((f=a.ruling)==null?void 0:f.match(/{/g))||[]).length,o=(((g=a.ruling)==null?void 0:g.match(/}/g))||[]).length;return r!==o&&i.push({field:"ruling",message:"تحذير: عدد الأقواس المفتوحة والمغلقة غير متطابق",severity:"warning"}),(!a.verdict||!["PERMITTED","FORBIDDEN","CONDITIONAL"].includes(a.verdict))&&i.push({field:"verdict",message:"الحكم النهائي مطلوب (جائز / محرم / مشروط)",severity:"error"}),(!a.source||a.source.trim()==="")&&i.push({field:"source",message:"المصدر مطلوب",severity:"error"}),(!a.tags||a.tags.length===0)&&i.push({field:"tags",message:"يجب إضافة وسم واحد على الأقل",severity:"warning"}),i},d2=a=>`{
  id: '${a.id}',
  category: CategoryId.${a.category},
  title: '${a.title.replace(/'/g,"\\'")}',
  question: '${a.question.replace(/'/g,"\\'")}',
  medical_context: '${(a.medical_context||"").replace(/'/g,"\\'")}',
  ruling: \`${a.ruling}\`,
  verdict: '${a.verdict}',
  source: '${a.source.replace(/'/g,"\\'")}',
  tags: [${a.tags.map(i=>`'${i}'`).join(", ")}],
},`,g2={[Y.SURGERY]:"surg",[Y.WOMEN_PREGNANCY]:"obgyn",[Y.ICU_DEATH]:"icu",[Y.FASTING_MEDICINE]:"fast",[Y.ETHICS]:"ethics",[Y.GENETICS_REPRODUCTION]:"genetic",[Y.TATTOO_CORTISONE]:"tattoo",[Y.PRAYER_PURITY]:"prayer",[Y.MEDICAL_EXPERIMENTS]:"exp",[Y.PHARMACY_DRUGS]:"pharm",[Y.MISCELLANEOUS]:"misc"},fp=(a,i)=>{const r=g2[a]||"fatwa",o=new Date().getFullYear(),g=(i.filter(p=>p.category===a).length+1).toString().padStart(3,"0");return`${r}_${g}_${o}`},m2=({onAddFatwa:a,existingFatwas:i=[]})=>{var Rt;const[r,o]=xt.useState({id:"",category:void 0,title:"",question:"",medical_context:"",ruling:"",verdict:"CONDITIONAL",source:"",tags:[]}),[f,g]=xt.useState([]),[p,C]=xt.useState(""),[A,T]=xt.useState(!1),[P,j]=xt.useState(""),B=S=>{o(E=>{const b=S,w=fp(b,i);return{...E,category:b,id:w}})},st=()=>{if(r.category){const S=fp(r.category,i);o(E=>({...E,id:S}))}},tt=S=>{const{name:E,value:b}=S.target;o(w=>({...w,[E]:b}))},nt=S=>{S.key==="Enter"&&P.trim()&&(o(E=>({...E,tags:[...E.tags||[],P.trim()]})),j(""),S.preventDefault())},lt=S=>{o(E=>{var b;return{...E,tags:((b=E.tags)==null?void 0:b.filter((w,R)=>R!==S))||[]}})},rt=()=>{const S=y0(r);if(g(S),S.filter(E=>E.severity==="error").length===0){const E=d2(r);C(E)}},it=()=>{navigator.clipboard.writeText(p),T(!0),setTimeout(()=>T(!1),2e3)},ot=()=>{o({id:"",category:void 0,title:"",question:"",medical_context:"",ruling:"",verdict:"CONDITIONAL",source:"",tags:[]}),g([]),C(""),j("")},jt=f.filter(S=>S.severity==="error").length,qt=f.filter(S=>S.severity==="warning").length;return v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6",children:v.jsxs("div",{className:"max-w-6xl mx-auto",children:[v.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-2 text-right",children:"➕ إضافة فتوى جديدة"}),v.jsx("p",{className:"text-gray-600 text-right mb-8",children:"املأ البيانات وستحصل على كود جاهز للنسخ في constants.ts"}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[v.jsx("div",{className:"lg:col-span-2",children:v.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 space-y-6",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"رقم الفتوى (ID) - تلقائي"}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("input",{type:"text",value:r.id||"",disabled:!0,className:"flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 font-mono text-sm",dir:"ltr"}),v.jsxs("button",{type:"button",onClick:st,disabled:!r.category,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-semibold text-sm",children:[v.jsx(J1,{size:16}),"إعادة توليد"]})]}),v.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"🔄 يُولَّد تلقائياً عند اختيار التصنيف"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"التصنيف *"}),v.jsxs("select",{value:r.category||"",onChange:S=>B(S.target.value),className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[v.jsx("option",{value:"",children:"اختر تصنيفًا"}),bl.map(S=>v.jsx("option",{value:S.id,children:S.name},S.id))]})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"العنوان *"}),v.jsx("input",{type:"text",name:"title",value:r.title||"",onChange:tt,placeholder:"حكم زكاة عيادات الأسنان",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السؤال *"}),v.jsx("textarea",{name:"question",value:r.question||"",onChange:tt,placeholder:"ما حكم كذا وكذا؟",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-24",dir:"rtl"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السياق الطبي (كلمات مفتاحية)"}),v.jsx("textarea",{name:"medical_context",value:r.medical_context||"",onChange:tt,placeholder:"تسنين، dentistry, زراعة أسنان، implant، تنظيف",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-20 font-mono text-sm",dir:"ltr"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم الشرعي والتفصيل *"}),v.jsx("textarea",{name:"ruling",value:r.ruling||"",onChange:tt,placeholder:"اكتب الحكم الشرعي بالتفصيل...",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-32",dir:"rtl"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم النهائي *"}),v.jsxs("select",{name:"verdict",value:r.verdict||"",onChange:tt,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[v.jsx("option",{value:"PERMITTED",children:"✓ جائز"}),v.jsx("option",{value:"FORBIDDEN",children:"✗ محرم"}),v.jsx("option",{value:"CONDITIONAL",children:"◎ مشروط"})]})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"المصدر *"}),v.jsx("input",{type:"text",name:"source",value:r.source||"",onChange:tt,placeholder:"دار الإفتاء المصرية - فتوى رقم ...",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الكلمات المفتاحية (اضغط Enter لإضافة)"}),v.jsx("input",{type:"text",value:P,onChange:S=>j(S.target.value),onKeyDown:nt,placeholder:"أضف وسمًا واضغط Enter",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none mb-3",dir:"rtl"}),v.jsx("div",{className:"flex flex-wrap gap-2",children:(Rt=r.tags)==null?void 0:Rt.map((S,E)=>v.jsxs("div",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2",children:[S,v.jsx("button",{onClick:()=>lt(E),className:"text-blue-600 hover:text-blue-800 font-bold",children:"✕"})]},E))})]}),v.jsxs("div",{className:"flex gap-3 justify-end pt-6 border-t",children:[v.jsx("button",{onClick:ot,className:"px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition",children:"مسح الكل"}),v.jsx("button",{onClick:rt,className:"px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition",children:"✓ توليد الكود"})]})]})}),v.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[f.length>0&&v.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[v.jsxs("h3",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[v.jsx(z1,{size:20,className:"text-orange-500"}),"التحقق من البيانات"]}),v.jsxs("div",{className:"space-y-3",children:[jt>0&&v.jsxs("div",{className:"bg-red-50 border border-red-300 rounded-lg p-3",children:[v.jsxs("p",{className:"text-sm font-bold text-red-700",children:["❌ أخطاء (",jt,"):"]}),f.filter(S=>S.severity==="error").map((S,E)=>v.jsxs("p",{className:"text-xs text-red-600 mt-1",children:["• ",S.field,": ",S.message]},E))]}),qt>0&&v.jsxs("div",{className:"bg-yellow-50 border border-yellow-300 rounded-lg p-3",children:[v.jsxs("p",{className:"text-sm font-bold text-yellow-700",children:["⚠️ تحذيرات (",qt,"):"]}),f.filter(S=>S.severity==="warning").map((S,E)=>v.jsxs("p",{className:"text-xs text-yellow-600 mt-1",children:["• ",S.field,": ",S.message]},E))]})]})]}),p&&v.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[v.jsxs("h3",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[v.jsx(H1,{size:20,className:"text-green-500"}),"الكود المُولَّد"]}),v.jsx("div",{className:"bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-xs overflow-x-auto h-48 overflow-y-auto mb-4",children:v.jsx("pre",{children:p})}),v.jsxs("button",{onClick:it,className:`w-full py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2 mb-2 ${A?"bg-green-500 text-white":"bg-blue-500 text-white hover:bg-blue-600"}`,children:[A?v.jsx(Zf,{size:18}):v.jsx(gl,{size:18}),A?"تم النسخ!":"نسخ الكود"]}),a&&v.jsxs("button",{onClick:()=>{r.id&&r.category&&r.title&&r.question&&r.ruling&&r.verdict&&r.source&&(a(r),ot(),alert("تم إضافة الفتوى بنجاح!"))},className:"w-full py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition flex items-center justify-center gap-2",children:[v.jsx(Zf,{size:18}),"حفظ مباشرة"]}),v.jsx("p",{className:"text-xs text-gray-600 mt-3 text-center",children:a?"يمكنك النسخ أو الحفظ مباشرة":"انسخ الكود والصقه في `MOCK_FATWAS` داخل `constants.ts`"})]}),!p&&v.jsxs("div",{className:"bg-blue-50 rounded-xl shadow-lg p-6 border border-blue-200",children:[v.jsx("h3",{className:"text-lg font-bold text-blue-900 mb-3",children:"📋 التعليمات"}),v.jsxs("ol",{className:"text-sm text-blue-800 space-y-2 text-right",children:[v.jsx("li",{children:"✓ 1. امل جميع الحقول المطلوبة (*)"}),v.jsx("li",{children:"✓ 2. أضف وسومًا مفيدة"}),v.jsx("li",{children:'✓ 3. اضغط "توليد الكود"'}),v.jsx("li",{children:"✓ 4. انسخ الكود المُولَّد"}),v.jsx("li",{children:"✓ 5. الصقه في constants.ts"})]})]})]})]})]})})},p2=({fatwa:a,onSave:i,onDelete:r,onCancel:o})=>{const[f,g]=xt.useState(a),[p,C]=xt.useState([]),[A,T]=xt.useState(""),[P,j]=xt.useState(!1),B=it=>{const{name:ot,value:jt}=it.target;g(qt=>({...qt,[ot]:jt}))},st=it=>{it.key==="Enter"&&A.trim()&&(g(ot=>({...ot,tags:[...ot.tags,A.trim()]})),T(""),it.preventDefault())},tt=it=>{g(ot=>({...ot,tags:ot.tags.filter((jt,qt)=>qt!==it)}))},nt=()=>{const it=y0(f);C(it),it.filter(ot=>ot.severity==="error").length===0&&i(f)},lt=()=>{r(a.id),j(!1)},rt=p.filter(it=>it.severity==="error").length;return v.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 space-y-6",children:[v.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[v.jsx(g0,{size:24}),"تعديل الفتوى: ",a.title]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"رقم الفتوى (ID) - غير قابل للتعديل"}),v.jsx("input",{type:"text",value:f.id,disabled:!0,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 font-mono text-sm",dir:"ltr"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"التصنيف *"}),v.jsx("select",{name:"category",value:f.category,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:bl.map(it=>v.jsx("option",{value:it.id,children:it.name},it.id))})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"العنوان *"}),v.jsx("input",{type:"text",name:"title",value:f.title,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السؤال *"}),v.jsx("textarea",{name:"question",value:f.question,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-24",dir:"rtl"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السياق الطبي"}),v.jsx("textarea",{name:"medical_context",value:f.medical_context,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-20 font-mono text-sm",dir:"ltr"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم الشرعي *"}),v.jsx("textarea",{name:"ruling",value:f.ruling,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-32",dir:"rtl"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم النهائي *"}),v.jsxs("select",{name:"verdict",value:f.verdict,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[v.jsx("option",{value:"PERMITTED",children:"✓ جائز"}),v.jsx("option",{value:"FORBIDDEN",children:"✗ محرم"}),v.jsx("option",{value:"CONDITIONAL",children:"◎ مشروط"})]})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"المصدر *"}),v.jsx("input",{type:"text",name:"source",value:f.source,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الكلمات المفتاحية"}),v.jsx("input",{type:"text",value:A,onChange:it=>T(it.target.value),onKeyDown:st,placeholder:"أضف وسمًا واضغط Enter",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none mb-3",dir:"rtl"}),v.jsx("div",{className:"flex flex-wrap gap-2",children:f.tags.map((it,ot)=>v.jsxs("div",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2",children:[it,v.jsx("button",{type:"button",onClick:()=>tt(ot),className:"text-blue-600 hover:text-blue-800 font-bold",children:"✕"})]},ot))})]}),p.length>0&&v.jsxs("div",{className:"bg-red-50 border-2 border-red-300 rounded-lg p-4",children:[v.jsxs("p",{className:"text-sm font-bold text-red-700 mb-2",children:["❌ أخطاء (",rt,"):"]}),v.jsx("div",{className:"space-y-1",children:p.filter(it=>it.severity==="error").map((it,ot)=>v.jsxs("p",{className:"text-xs text-red-600",children:["• ",it.field,": ",it.message]},ot))})]}),v.jsxs("div",{className:"flex gap-3 justify-end pt-6 border-t border-gray-300",children:[!P&&v.jsxs("button",{onClick:()=>j(!0),className:"px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition flex items-center gap-2",children:[v.jsx(m0,{size:18}),"حذف"]}),P&&v.jsxs("div",{className:"flex gap-2 absolute left-8 bottom-8 bg-red-50 border border-red-300 rounded-lg p-4",children:[v.jsx("p",{className:"text-sm text-red-700 font-semibold mr-3",children:"هل أنت متأكد من الحذف؟"}),v.jsx("button",{onClick:lt,className:"px-3 py-1 bg-red-600 text-white rounded text-sm font-bold hover:bg-red-700",children:"نعم، احذف"}),v.jsx("button",{onClick:()=>j(!1),className:"px-3 py-1 bg-gray-400 text-white rounded text-sm font-bold hover:bg-gray-500",children:"إلغاء"})]}),v.jsxs("button",{onClick:o,className:"px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition flex items-center gap-2",children:[v.jsx(p0,{size:18}),"إلغاء"]}),v.jsxs("button",{onClick:nt,disabled:rt>0,className:"px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[v.jsx(Zf,{size:18}),"حفظ التعديلات"]})]})]})},y2=({fatwas:a,onSave:i,onDelete:r})=>{const[o,f]=xt.useState(""),[g,p]=xt.useState(""),[C,A]=xt.useState(null),T=xt.useMemo(()=>a.filter(j=>{const B=j.title.includes(o)||j.question.includes(o)||j.id.includes(o),st=!g||j.category===g;return B&&st}),[a,o,g]),P=a.find(j=>j.id===C);return P?v.jsxs("div",{className:"space-y-6",children:[v.jsx("button",{onClick:()=>A(null),className:"text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2",children:"← العودة للقائمة"}),v.jsx(p2,{fatwa:P,onSave:j=>{i(j),A(null)},onDelete:j=>{r(j),A(null)},onCancel:()=>A(null)})]}):v.jsxs("div",{className:"space-y-6",children:[v.jsxs("h2",{className:"text-2xl font-bold text-gray-800",children:["قائمة الفتاوى (",T.length,")"]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[v.jsxs("div",{className:"relative",children:[v.jsx(W1,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"}),v.jsx("input",{type:"text",placeholder:"ابحث في العنوان أو السؤال...",value:o,onChange:j=>f(j.target.value),className:"w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),v.jsxs("select",{value:g,onChange:j=>p(j.target.value),className:"px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[v.jsx("option",{value:"",children:"جميع التصنيفات"}),bl.map(j=>v.jsx("option",{value:j.id,children:j.name},j.id))]})]}),T.length===0?v.jsx("div",{className:"bg-gray-50 rounded-lg p-8 text-center",children:v.jsx("p",{className:"text-gray-600 text-lg",children:"لا توجد فتاوى تطابق البحث"})}):v.jsx("div",{className:"space-y-3",children:T.map(j=>{const B=bl.find(st=>st.id===j.category);return v.jsx("div",{className:"bg-white rounded-lg border border-gray-300 p-4 hover:shadow-lg transition",children:v.jsxs("div",{className:"flex items-start justify-between gap-4",children:[v.jsxs("div",{className:"flex-1 min-w-0",children:[v.jsx("h3",{className:"font-bold text-lg text-gray-800 mb-1",children:j.title}),v.jsx("p",{className:"text-sm text-gray-600 mb-2 line-clamp-2",children:j.question}),v.jsxs("div",{className:"flex gap-2 flex-wrap",children:[v.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full",children:(B==null?void 0:B.name)||"Unknown"}),v.jsxs("span",{className:`text-xs px-2 py-1 rounded-full ${j.verdict==="PERMITTED"?"bg-green-100 text-green-800":j.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[j.verdict==="PERMITTED"&&"✓ جائز",j.verdict==="FORBIDDEN"&&"✗ محرم",j.verdict==="CONDITIONAL"&&"◎ مشروط"]})]})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsxs("button",{onClick:()=>A(j.id),className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold flex items-center gap-2 text-sm",children:[v.jsx(g0,{size:16}),"تعديل"]}),v.jsxs("button",{onClick:()=>{confirm(`هل تريد حذف: ${j.title}؟`)&&r(j.id)},className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold flex items-center gap-2 text-sm",children:[v.jsx(m0,{size:16}),"حذف"]})]})]})},j.id)})})]})},v2=({fatwas:a,onAddFatwa:i,onUpdateFatwa:r,onDeleteFatwa:o,onLogout:f})=>{const[g,p]=xt.useState("dashboard"),[C,A]=xt.useState(!0),T=()=>{A(!1),p("dashboard"),f()};return C?v.jsx("div",{className:"fixed inset-0 bg-black/60 z-50 overflow-y-auto",children:v.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",children:v.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-6xl",children:[v.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 flex items-center justify-between",children:[v.jsxs("h1",{className:"text-3xl font-bold text-white flex items-center gap-3",children:[v.jsx(i2,{size:28}),"لوحة إدارة المحتوى"]}),v.jsx("button",{onClick:T,className:"text-white hover:bg-white/20 p-2 rounded-lg transition text-2xl font-bold",children:"✕"})]}),v.jsxs("div",{className:"border-b border-gray-200 px-8 py-4 flex gap-4",children:[v.jsx("button",{onClick:()=>p("dashboard"),className:`px-6 py-2 rounded-lg font-semibold transition ${g==="dashboard"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"📊 لوحة التحكم"}),v.jsxs("button",{onClick:()=>p("add"),className:`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${g==="add"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[v.jsx(K1,{size:18}),"إضافة فتوى"]}),v.jsxs("button",{onClick:()=>p("list"),className:`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${g==="list"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[v.jsx(X1,{size:18}),"قائمة الفتاوى"]})]}),v.jsxs("div",{className:"p-8 max-h-[80vh] overflow-y-auto",children:[g==="dashboard"&&v.jsxs("div",{className:"space-y-6",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"مرحبًا بك في لوحة الإدارة"}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[v.jsxs("div",{className:"bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 border border-blue-300",children:[v.jsx("p",{className:"text-sm font-bold text-blue-600 mb-2",children:"📚 إجمالي الفتاوى"}),v.jsx("p",{className:"text-4xl font-bold text-blue-900",children:a.length})]}),v.jsxs("div",{className:"bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-6 border border-green-300",children:[v.jsx("p",{className:"text-sm font-bold text-green-600 mb-2",children:"✓ فتاوى منشورة"}),v.jsx("p",{className:"text-4xl font-bold text-green-900",children:a.filter(P=>P.verdict==="PERMITTED").length})]}),v.jsxs("div",{className:"bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-6 border border-yellow-300",children:[v.jsx("p",{className:"text-sm font-bold text-yellow-600 mb-2",children:"⏳ مشروط"}),v.jsx("p",{className:"text-4xl font-bold text-yellow-900",children:a.filter(P=>P.verdict==="CONDITIONAL").length})]})]}),v.jsxs("div",{className:"bg-indigo-50 rounded-lg p-6 border border-indigo-300",children:[v.jsx("h3",{className:"text-lg font-bold text-indigo-900 mb-3",children:"🚀 الخطوات التالية"}),v.jsxs("ul",{className:"space-y-2 text-indigo-800",children:[v.jsx("li",{children:'✓ اضغط على "إضافة فتوى" لإضافة فتوى جديدة'}),v.jsx("li",{children:"✓ سيتم التحقق من البيانات تلقائيًا"}),v.jsx("li",{children:"✓ انسخ الكود المُولَّد والصقه في constants.ts"}),v.jsx("li",{children:"✓ أعد تشغيل السيرفر لرؤية الفتوى الجديدة"})]})]})]}),g==="add"&&v.jsx(m2,{onAddFatwa:i,existingFatwas:a}),g==="list"&&v.jsx(y2,{fatwas:a,onSave:r,onDelete:o})]}),v.jsx("div",{className:"border-t border-gray-200 px-8 py-4 bg-gray-50 flex justify-end",children:v.jsx("p",{className:"text-sm text-gray-600",children:"نسخة 1.0 | آخر تحديث: 24 ديسمبر 2025"})})]})})}):null},_2=(a,i)=>{const r=[];for(let o=0;o<=i.length;o++)r[o]=[o];for(let o=0;o<=a.length;o++)r[0][o]=o;for(let o=1;o<=i.length;o++)for(let f=1;f<=a.length;f++)i.charAt(o-1)===a.charAt(f-1)?r[o][f]=r[o-1][f-1]:r[o][f]=Math.min(r[o-1][f-1]+1,r[o][f-1]+1,r[o-1][f]+1);return r[i.length][a.length]},zf=(a,i)=>{const r=Math.max(a.length,i.length);return r===0?1:1-_2(a,i)/r},Ja=a=>a?a.toLowerCase().normalize("NFKD").replace(/[\u064B-\u0652\u0640]/g,"").replace(/[أإآ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/[^\u0600-\u06FF0-9\s]/g," ").split(/\s+/).filter(Boolean):[],b2=(a,i)=>{const r=Ja(a),o=a.toLowerCase().trim(),f=/^[a-z\s]+$/i.test(o),g=Ja(i.title),p=Ja(i.question||""),C=Ja(i.medical_context||""),A=Ja((i.tags||[]).join(" ")),T=Ja(i.ruling||""),P=(i.medical_context||"").toLowerCase(),j=(i.tags||[]).join(" ").toLowerCase();let B=0,st=!1;if(f&&o.length>0){P.includes(o)&&(B+=20,st=!0),j.includes(o)&&(B+=15,st=!0);const tt=o.split(/\s+/).filter(lt=>lt.length>2);if(tt.length===0)return 0;let nt=0;for(const lt of tt)P.includes(lt)?(B+=12,nt++):j.includes(lt)&&(B+=10,nt++);if(st=nt>0,!st){const lt=P.split(/[\s,()/-]+/);for(const rt of tt)for(const it of lt)if(it.length>2){const ot=zf(rt,it);ot>.78&&(B+=3+2*ot)}}}else{if(!r.length)return 0;let tt=0;for(const nt of r)nt.length<2||(C.includes(nt)?(B+=14,tt++):g.includes(nt)?(B+=11,tt++):A.includes(nt)?(B+=9,tt++):p.includes(nt)&&(B+=7,tt++));if(st=tt>0,!st){for(const nt of r)if(!(nt.length<2)){for(const lt of C)if(lt.length>2){const rt=zf(nt,lt);rt>.8&&(B+=3+2*rt)}for(const lt of A)if(lt.length>2){const rt=zf(nt,lt);rt>.8&&(B+=2+1.5*rt)}}}if(B===0)for(const nt of r)T.includes(nt)&&(B+=2)}return B||0},E2=(a,i)=>i.map(o=>({fatwa:o,score:b2(a,o)})).filter(o=>o.score>3).sort((o,f)=>f.score-o.score).map(o=>o.fatwa).slice(0,5),T2=()=>{const[a,i]=xt.useState([]),[r,o]=xt.useState(""),f=!1,[g,p]=xt.useState(!1),[C,A]=xt.useState(!1),[T,P]=xt.useState(null),[j,B]=xt.useState(null),[st,tt]=xt.useState(!1),[nt,lt]=xt.useState(!1),[rt,it]=xt.useState(f2),ot=xt.useRef(null),jt=()=>{const b=ot.current;b&&(b.scrollTop=b.scrollHeight)};xt.useEffect(()=>{jt()},[a,g]);const qt=b=>{if(rt.some(w=>w.id===b.id)){alert("⚠️ رقم الفتوى موجود بالفعل!");return}it([...rt,b]),alert("✓ تم إضافة الفتوى بنجاح!")},Rt=b=>{it(rt.map(w=>w.id===b.id?b:w)),alert("✓ تم تحديث الفتوى بنجاح!")},S=b=>{it(rt.filter(w=>w.id!==b)),alert("✓ تم حذف الفتوى بنجاح!")},E=async()=>{if(!r.trim())return;const b=r,w={id:Date.now().toString(),role:"user",text:b,isEmergency:f};i(R=>[...R,w]),o(""),p(!0);try{let R=[],I="";const x=E2(b,rt);if(x.length>0){R=x.map(V=>V.id);const Qt=x.length;Qt===1?I="ها هي الفتوى عزيزي الطبيب":I=`ها هي ${Qt} فتاوى مرتبطة بسؤالك من مصادر متعددة:`}else I="عذرًا، لم أجد فتوى مطابقة لهذا السؤال في قاعدة البيانات الحالية.";const Xt={id:(Date.now()+1).toString(),role:"model",text:I,isEmergency:f,relatedFatwaIds:R};i(Qt=>[...Qt,Xt])}catch(R){console.error(R),i(I=>[...I,{id:(Date.now()+1).toString(),role:"model",text:"عذرًا، حدث خطأ غير متوقَّع."}])}finally{p(!1)}};return v.jsxs("div",{className:"flex flex-col h-[100dvh] bg-slate-50 text-slate-800 font-tajawal overflow-hidden",children:[v.jsx("header",{className:"px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex items-center justify-center relative z-20",children:v.jsxs("div",{className:"flex flex-col items-center gap-1",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"p-1.5 rounded-lg bg-teal-50",children:v.jsx(o2,{className:"w-6 h-6 text-teal-700"})}),v.jsx("h1",{className:"text-2xl font-bold font-amiri text-gray-900 leading-none",children:"الطــبيب الفقيــه"})]}),v.jsx("span",{className:"text-sm text-teal-600 font-ruqaa opacity-90 tracking-wide transform -translate-y-2",children:"(بين الطب والشريعة)"})]})}),v.jsxs("main",{className:"flex-1 flex flex-col relative overflow-hidden",children:[v.jsx("div",{className:"absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"}),v.jsxs("section",{className:"flex-1 flex flex-col relative z-10 w-full mx-auto max-w-lg md:max-w-2xl min-h-0",children:[v.jsxs("div",{ref:ot,className:"flex-1 overflow-y-auto p-3 md:p-5 space-y-6 pb-6 scrollbar-hide min-h-0",children:[a.length===0&&v.jsx("div",{className:"flex flex-col items-center justify-center min-h-[50vh] text-center mt-2 px-2",children:v.jsxs("div",{className:"w-full space-y-6 animate-in fade-in zoom-in duration-700",children:[v.jsx("div",{className:"flex justify-center",children:v.jsx("div",{className:"bg-gradient-to-tr from-teal-50 to-white p-4 rounded-full shadow-sm ring-1 ring-gray-100",children:v.jsx(P1,{className:"w-10 h-10 text-teal-600"})})}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("h2",{className:"text-xl font-bold text-gray-800 font-amiri",children:"السلام عليكم دكتور"}),v.jsx("p",{className:"text-lg text-gray-700 max-w-xs mx-auto leading-relaxed font-amiri font-semibold",children:"صلّ على سيدنا النبي ﷺ خير معلم الناس الخير."})]}),v.jsxs("div",{className:"grid grid-cols-1 gap-3 w-full",children:[v.jsxs("div",{className:"relative overflow-hidden bg-white p-4 rounded-xl border border-teal-100 shadow-sm text-right",children:[v.jsx(cp,{className:"absolute -bottom-2 -left-2 w-12 h-12 text-teal-50 opacity-50 rotate-12"}),v.jsx("p",{className:"text-gray-800 font-amiri text-base font-medium leading-relaxed mb-2 relative z-10",children:'"لا أعلم علمًا بعد الحلال والحرام أنبل من الطب"'}),v.jsx("span",{className:"text-xs font-bold text-teal-600 block relative z-10",children:"- الإمام الشافعي"})]}),v.jsxs("div",{className:"relative overflow-hidden bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-right",children:[v.jsx(cp,{className:"absolute -bottom-2 -left-2 w-12 h-12 text-blue-50 opacity-50 rotate-12"}),v.jsx("p",{className:"text-gray-800 font-amiri text-base font-medium leading-relaxed mb-2 relative z-10",children:'"عليّ أن أتسلح بالعلم؛ لأجابه هذا العدو البغيض الذي يفتك ببنيان الله المقدس"'}),v.jsx("span",{className:"text-xs font-bold text-teal-600 block relative z-10",children:"- أبو بكر الرازي"})]})]})]})}),a.map(b=>((b.relatedFatwaIds||[]).map(w=>rt.find(R=>R.id===w)).filter(w=>w!==void 0),v.jsxs("div",{className:`flex w-full flex-col gap-2 ${b.role==="user"?"items-end":"items-start"}`,children:[b.role==="user"&&v.jsx("div",{className:"bg-teal-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-md max-w-[85%]",children:v.jsx("p",{className:"text-base",children:b.text})}),b.role==="model"&&v.jsxs("div",{className:"w-full animate-in slide-in-from-bottom-2 duration-500",children:[rt.length===0&&v.jsx("div",{className:"bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-gray-800 max-w-[90%] mb-2",children:v.jsx("p",{className:"text-sm leading-relaxed",children:b.text})}),rt.length>0&&v.jsx("div",{className:"bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-gray-800 max-w-[90%] mb-3",children:v.jsx("p",{className:"text-sm leading-relaxed",children:b.text})}),rt.map((w,R)=>v.jsxs("div",{className:"w-full rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white mb-3",children:[v.jsxs("div",{className:"px-4 py-3 border-b flex justify-between items-center bg-gradient-to-r from-teal-50 to-blue-50 border-gray-100",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(V1,{className:"w-4 h-4 text-teal-600"}),v.jsxs("span",{className:"text-xs font-bold text-teal-700",children:["فتوى ",rt.length>1?`${R+1} من ${rt.length}`:"تفصيلية"]})]}),v.jsx("span",{className:"text-[11px] text-teal-700 bg-white/70 px-2 py-1 rounded font-semibold",children:w.source})]}),v.jsxs("div",{className:"p-4 space-y-4",children:[v.jsx("h3",{className:"font-bold text-lg font-amiri leading-snug text-gray-900 border-r-4 border-teal-600 pr-3",children:w.title}),v.jsxs("div",{className:"bg-amber-50/50 rounded p-3 border border-amber-100/50",children:[v.jsx("p",{className:"text-xs font-bold text-amber-800 mb-2",children:"❓ السؤال:"}),v.jsx("p",{className:"text-sm text-amber-900 leading-relaxed",children:w.question})]}),w.medical_context&&v.jsxs("div",{className:"bg-blue-50/50 rounded p-3 border border-blue-100/50",children:[v.jsx("p",{className:"text-xs font-bold text-blue-800 mb-2",children:"🏥 السياق الطبي:"}),v.jsx("p",{className:"text-sm text-blue-900 leading-relaxed font-mono",children:w.medical_context})]}),v.jsxs("div",{className:"bg-green-50/50 rounded p-4 border-l-4 border-green-600",children:[v.jsx("p",{className:"text-xs font-bold mb-3 text-green-800",children:"✅ الحكم الشرعي والتفصيل:"}),v.jsx("p",{className:"text-sm leading-8 whitespace-pre-wrap text-gray-800 font-medium",children:w.ruling})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-xs font-bold text-gray-600",children:"الحكم النهائي:"}),v.jsxs("span",{className:`text-xs font-bold px-3 py-1 rounded-full ${w.verdict==="PERMITTED"?"bg-green-100 text-green-800":w.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[w.verdict==="PERMITTED"&&"✓ جائز",w.verdict==="FORBIDDEN"&&"✗ محرم",w.verdict==="CONDITIONAL"&&"◎ مشروط"]})]}),w.tags&&w.tags.length>0&&v.jsx("div",{className:"flex flex-wrap gap-2",children:w.tags.map((I,x)=>v.jsxs("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full",children:["#",I]},x))})]})]},w.id))]})]},b.id))),g&&v.jsx("div",{className:"flex justify-start w-full",children:v.jsxs("div",{className:"bg-white px-3 py-2 rounded-xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-1",children:[v.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),v.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),v.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})]}),v.jsxs("div",{className:"flex-shrink-0 px-3 py-3 bg-white border-t border-gray-100",children:[v.jsxs("button",{onClick:()=>A(!C),className:"w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:shadow-md",children:[v.jsx("span",{className:`transition-transform ${C?"rotate-180":""}`,children:"▼"}),v.jsx("h3",{className:"text-sm font-bold text-gray-800",children:"📚 فهرس الموضوعات"})]}),C&&v.jsx("div",{className:"mt-2 bg-white border border-gray-200 rounded-lg p-3 space-y-2 max-h-64 overflow-y-auto",children:T===null?v.jsx("div",{className:"space-y-2",children:bl.map(b=>v.jsx("button",{onClick:()=>P(b.id),className:"w-full text-right p-2 bg-blue-50 hover:bg-blue-100 rounded text-xs font-semibold text-blue-700 transition",children:b.name},b.id))}):v.jsxs("div",{className:"space-y-2",children:[v.jsx("button",{onClick:()=>P(null),className:"w-full text-right p-2 bg-gray-200 hover:bg-gray-300 rounded text-xs font-semibold text-gray-700 transition",children:"← العودة"}),rt.filter(b=>b.category===T).map(b=>v.jsx("button",{onClick:()=>{B(b),A(!1)},className:"w-full text-right p-2 bg-green-50 hover:bg-green-100 rounded text-xs font-semibold text-green-700 transition line-clamp-2",children:b.question},b.id))]})})]}),v.jsxs("div",{className:"relative w-full px-3 pt-3 pb-4 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent border-t border-gray-100",children:[v.jsxs("div",{className:"bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-gray-100 p-1.5 flex items-center gap-2 w-full",children:[v.jsx("input",{type:"text",value:r,onChange:b=>o(b.target.value),onKeyDown:b=>b.key==="Enter"&&E(),placeholder:"سل ما تريد أو اكتب الكلمة المفتاحية",className:"flex-1 bg-transparent border-none focus:ring-0 px-4 text-gray-700 placeholder-gray-400 text-base h-10 font-tajawal",disabled:g}),v.jsx("button",{onClick:E,disabled:!r.trim()||g,className:`w-10 h-10 flex items-center justify-center rounded-full transition-all flex-shrink-0 ${r.trim()&&!g?"bg-teal-600 text-white hover:bg-teal-700 shadow-md rotate-0":"bg-gray-100 text-gray-300 cursor-not-allowed"}`,children:v.jsx(e2,{className:`w-4 h-4 ${document.dir==="rtl"?"rotate-180 mr-0.5":""}`})})]}),v.jsx("div",{className:"text-center mt-5 mb-0",children:v.jsx("p",{className:"text-[13px] text-gray-600 font-amiri leading-relaxed opacity-90",children:"(أخوكم وابنكم، محمد محمود الفيومي، كلية طب بنين القاهرة - جامعة الأزهر الشريف)"})})]})]})]}),j&&v.jsx(h2,{fatwa:j,onClose:()=>B(null)}),st&&v.jsx(v2,{fatwas:rt,onAddFatwa:qt,onUpdateFatwa:Rt,onDeleteFatwa:S,onLogout:()=>{tt(!1),lt(!1)}}),!st&&v.jsx("button",{onClick:()=>tt(!0),className:"fixed top-6 left-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition z-40 text-xl",title:"فتح لوحة الإدارة",children:"⚙️"})]})},S2=()=>{};var hp={};/**
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
 */const v0=function(a){const i=[];let r=0;for(let o=0;o<a.length;o++){let f=a.charCodeAt(o);f<128?i[r++]=f:f<2048?(i[r++]=f>>6|192,i[r++]=f&63|128):(f&64512)===55296&&o+1<a.length&&(a.charCodeAt(o+1)&64512)===56320?(f=65536+((f&1023)<<10)+(a.charCodeAt(++o)&1023),i[r++]=f>>18|240,i[r++]=f>>12&63|128,i[r++]=f>>6&63|128,i[r++]=f&63|128):(i[r++]=f>>12|224,i[r++]=f>>6&63|128,i[r++]=f&63|128)}return i},A2=function(a){const i=[];let r=0,o=0;for(;r<a.length;){const f=a[r++];if(f<128)i[o++]=String.fromCharCode(f);else if(f>191&&f<224){const g=a[r++];i[o++]=String.fromCharCode((f&31)<<6|g&63)}else if(f>239&&f<365){const g=a[r++],p=a[r++],C=a[r++],A=((f&7)<<18|(g&63)<<12|(p&63)<<6|C&63)-65536;i[o++]=String.fromCharCode(55296+(A>>10)),i[o++]=String.fromCharCode(56320+(A&1023))}else{const g=a[r++],p=a[r++];i[o++]=String.fromCharCode((f&15)<<12|(g&63)<<6|p&63)}}return i.join("")},_0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,i){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let f=0;f<a.length;f+=3){const g=a[f],p=f+1<a.length,C=p?a[f+1]:0,A=f+2<a.length,T=A?a[f+2]:0,P=g>>2,j=(g&3)<<4|C>>4;let B=(C&15)<<2|T>>6,st=T&63;A||(st=64,p||(B=64)),o.push(r[P],r[j],r[B],r[st])}return o.join("")},encodeString(a,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(a):this.encodeByteArray(v0(a),i)},decodeString(a,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(a):A2(this.decodeStringToByteArray(a,i))},decodeStringToByteArray(a,i){this.init_();const r=i?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let f=0;f<a.length;){const g=r[a.charAt(f++)],C=f<a.length?r[a.charAt(f)]:0;++f;const T=f<a.length?r[a.charAt(f)]:64;++f;const j=f<a.length?r[a.charAt(f)]:64;if(++f,g==null||C==null||T==null||j==null)throw new x2;const B=g<<2|C>>4;if(o.push(B),T!==64){const st=C<<4&240|T>>2;if(o.push(st),j!==64){const tt=T<<6&192|j;o.push(tt)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class x2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N2=function(a){const i=v0(a);return _0.encodeByteArray(i,!0)},mu=function(a){return N2(a).replace(/\./g,"")},b0=function(a){try{return _0.decodeString(a,!0)}catch(i){console.error("base64Decode failed: ",i)}return null};/**
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
 */function w2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const C2=()=>w2().__FIREBASE_DEFAULTS__,R2=()=>{if(typeof process>"u"||typeof hp>"u")return;const a=hp.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},O2=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const i=a&&b0(a[1]);return i&&JSON.parse(i)},oh=()=>{try{return S2()||C2()||R2()||O2()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},E0=a=>{var i,r;return(r=(i=oh())==null?void 0:i.emulatorHosts)==null?void 0:r[a]},D2=a=>{const i=E0(a);if(!i)return;const r=i.lastIndexOf(":");if(r<=0||r+1===i.length)throw new Error(`Invalid host ${i} with no separate hostname and port!`);const o=parseInt(i.substring(r+1),10);return i[0]==="["?[i.substring(1,r-1),o]:[i.substring(0,r),o]},T0=()=>{var a;return(a=oh())==null?void 0:a.config},S0=a=>{var i;return(i=oh())==null?void 0:i[`_${a}`]};/**
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
 */class I2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((i,r)=>{this.resolve=i,this.reject=r})}wrapCallback(i){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof i=="function"&&(this.promise.catch(()=>{}),i.length===1?i(r):i(r,o))}}}/**
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
 */function Al(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}async function A0(a){return(await fetch(a,{credentials:"include"})).ok}/**
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
 */function M2(a,i){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},o=i||"demo-project",f=a.iat||0,g=a.sub||a.user_id;if(!g)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const p={iss:`https://securetoken.google.com/${o}`,aud:o,iat:f,exp:f+3600,auth_time:f,sub:g,user_id:g,firebase:{sign_in_provider:"custom",identities:{}},...a};return[mu(JSON.stringify(r)),mu(JSON.stringify(p)),""].join(".")}const ml={};function j2(){const a={prod:[],emulator:[]};for(const i of Object.keys(ml))ml[i]?a.emulator.push(i):a.prod.push(i);return a}function U2(a){let i=document.getElementById(a),r=!1;return i||(i=document.createElement("div"),i.setAttribute("id",a),r=!0),{created:r,element:i}}let dp=!1;function x0(a,i){if(typeof window>"u"||typeof document>"u"||!Al(window.location.host)||ml[a]===i||ml[a]||dp)return;ml[a]=i;function r(B){return`__firebase__banner__${B}`}const o="__firebase__banner",g=j2().prod.length>0;function p(){const B=document.getElementById(o);B&&B.remove()}function C(B){B.style.display="flex",B.style.background="#7faaf0",B.style.position="fixed",B.style.bottom="5px",B.style.left="5px",B.style.padding=".5em",B.style.borderRadius="5px",B.style.alignItems="center"}function A(B,st){B.setAttribute("width","24"),B.setAttribute("id",st),B.setAttribute("height","24"),B.setAttribute("viewBox","0 0 24 24"),B.setAttribute("fill","none"),B.style.marginLeft="-6px"}function T(){const B=document.createElement("span");return B.style.cursor="pointer",B.style.marginLeft="16px",B.style.fontSize="24px",B.innerHTML=" &times;",B.onclick=()=>{dp=!0,p()},B}function P(B,st){B.setAttribute("id",st),B.innerText="Learn more",B.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",B.setAttribute("target","__blank"),B.style.paddingLeft="5px",B.style.textDecoration="underline"}function j(){const B=U2(o),st=r("text"),tt=document.getElementById(st)||document.createElement("span"),nt=r("learnmore"),lt=document.getElementById(nt)||document.createElement("a"),rt=r("preprendIcon"),it=document.getElementById(rt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(B.created){const ot=B.element;C(ot),P(lt,nt);const jt=T();A(it,rt),ot.append(it,tt,lt,jt),document.body.appendChild(ot)}g?(tt.innerText="Preview backend disconnected.",it.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(it.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,tt.innerText="Preview backend running in this workspace."),tt.setAttribute("id",st)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",j):j()}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function L2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function z2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function N0(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function k2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H2(){const a=Ue();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function w0(){try{return typeof indexedDB=="object"}catch{return!1}}function C0(){return new Promise((a,i)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",f=self.indexedDB.open(o);f.onsuccess=()=>{f.result.close(),r||self.indexedDB.deleteDatabase(o),a(!0)},f.onupgradeneeded=()=>{r=!1},f.onerror=()=>{var g;i(((g=f.error)==null?void 0:g.message)||"")}}catch(r){i(r)}})}function q2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const B2="FirebaseError";class Rn extends Error{constructor(i,r,o){super(r),this.code=i,this.customData=o,this.name=B2,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(i,r,o){this.service=i,this.serviceName=r,this.errors=o}create(i,...r){const o=r[0]||{},f=`${this.service}/${i}`,g=this.errors[i],p=g?V2(g,o):"Error",C=`${this.serviceName}: ${p} (${f}).`;return new Rn(f,C,o)}}function V2(a,i){return a.replace(G2,(r,o)=>{const f=i[o];return f!=null?String(f):`<${o}?>`})}const G2=/\{\$([^}]+)}/g;function P2(a){for(const i in a)if(Object.prototype.hasOwnProperty.call(a,i))return!1;return!0}function ps(a,i){if(a===i)return!0;const r=Object.keys(a),o=Object.keys(i);for(const f of r){if(!o.includes(f))return!1;const g=a[f],p=i[f];if(gp(g)&&gp(p)){if(!ps(g,p))return!1}else if(g!==p)return!1}for(const f of o)if(!r.includes(f))return!1;return!0}function gp(a){return a!==null&&typeof a=="object"}/**
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
 */function xl(a){const i=[];for(const[r,o]of Object.entries(a))Array.isArray(o)?o.forEach(f=>{i.push(encodeURIComponent(r)+"="+encodeURIComponent(f))}):i.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return i.length?"&"+i.join("&"):""}function Y2(a,i){const r=new X2(a,i);return r.subscribe.bind(r)}class X2{constructor(i,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{i(this)}).catch(o=>{this.error(o)})}next(i){this.forEachObserver(r=>{r.next(i)})}error(i){this.forEachObserver(r=>{r.error(i)}),this.close(i)}complete(){this.forEachObserver(i=>{i.complete()}),this.close()}subscribe(i,r,o){let f;if(i===void 0&&r===void 0&&o===void 0)throw new Error("Missing Observer.");F2(i,["next","error","complete"])?f=i:f={next:i,error:r,complete:o},f.next===void 0&&(f.next=kf),f.error===void 0&&(f.error=kf),f.complete===void 0&&(f.complete=kf);const g=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?f.error(this.finalError):f.complete()}catch{}}),this.observers.push(f),g}unsubscribeOne(i){this.observers===void 0||this.observers[i]===void 0||(delete this.observers[i],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(i){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,i)}sendOne(i,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[i]!==void 0)try{r(this.observers[i])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(i){this.finalized||(this.finalized=!0,i!==void 0&&(this.finalError=i),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F2(a,i){if(typeof a!="object"||a===null)return!1;for(const r of i)if(r in a&&typeof a[r]=="function")return!0;return!1}function kf(){}/**
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
 */const K2=1e3,Q2=2,Z2=14400*1e3,J2=.5;function mp(a,i=K2,r=Q2){const o=i*Math.pow(r,a),f=Math.round(J2*o*(Math.random()-.5)*2);return Math.min(Z2,o+f)}/**
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
 */class $2{constructor(i,r){this.name=i,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(i){const r=this.normalizeInstanceIdentifier(i);if(!this.instancesDeferred.has(r)){const o=new I2;if(this.instancesDeferred.set(r,o),this.isInitialized(r)||this.shouldAutoInitialize())try{const f=this.getOrInitializeService({instanceIdentifier:r});f&&o.resolve(f)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(i){const r=this.normalizeInstanceIdentifier(i==null?void 0:i.identifier),o=(i==null?void 0:i.optional)??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(f){if(o)return null;throw f}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(i){if(i.name!==this.name)throw Error(`Mismatching Component ${i.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=i,!!this.shouldAutoInitialize()){if(t_(i))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[r,o]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(r);try{const g=this.getOrInitializeService({instanceIdentifier:f});o.resolve(g)}catch{}}}}clearInstance(i=Ks){this.instancesDeferred.delete(i),this.instancesOptions.delete(i),this.instances.delete(i)}async delete(){const i=Array.from(this.instances.values());await Promise.all([...i.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...i.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(i=Ks){return this.instances.has(i)}getOptions(i=Ks){return this.instancesOptions.get(i)||{}}initialize(i={}){const{options:r={}}=i,o=this.normalizeInstanceIdentifier(i.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const f=this.getOrInitializeService({instanceIdentifier:o,options:r});for(const[g,p]of this.instancesDeferred.entries()){const C=this.normalizeInstanceIdentifier(g);o===C&&p.resolve(f)}return f}onInit(i,r){const o=this.normalizeInstanceIdentifier(r),f=this.onInitCallbacks.get(o)??new Set;f.add(i),this.onInitCallbacks.set(o,f);const g=this.instances.get(o);return g&&i(g,o),()=>{f.delete(i)}}invokeOnInitCallbacks(i,r){const o=this.onInitCallbacks.get(r);if(o)for(const f of o)try{f(i,r)}catch{}}getOrInitializeService({instanceIdentifier:i,options:r={}}){let o=this.instances.get(i);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:W2(i),options:r}),this.instances.set(i,o),this.instancesOptions.set(i,r),this.invokeOnInitCallbacks(o,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,o)}catch{}return o||null}normalizeInstanceIdentifier(i=Ks){return this.component?this.component.multipleInstances?i:Ks:i}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function W2(a){return a===Ks?void 0:a}function t_(a){return a.instantiationMode==="EAGER"}/**
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
 */class e_{constructor(i){this.name=i,this.providers=new Map}addComponent(i){const r=this.getProvider(i.name);if(r.isComponentSet())throw new Error(`Component ${i.name} has already been registered with ${this.name}`);r.setComponent(i)}addOrOverwriteComponent(i){this.getProvider(i.name).isComponentSet()&&this.providers.delete(i.name),this.addComponent(i)}getProvider(i){if(this.providers.has(i))return this.providers.get(i);const r=new $2(i,this);return this.providers.set(i,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Mt;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Mt||(Mt={}));const n_={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},i_=Mt.INFO,s_={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},a_=(a,i,...r)=>{if(i<a.logLevel)return;const o=new Date().toISOString(),f=s_[i];if(f)console[f](`[${o}]  ${a.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`)};class Nu{constructor(i){this.name=i,this._logLevel=i_,this._logHandler=a_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(i){if(!(i in Mt))throw new TypeError(`Invalid value "${i}" assigned to \`logLevel\``);this._logLevel=i}setLogLevel(i){this._logLevel=typeof i=="string"?n_[i]:i}get logHandler(){return this._logHandler}set logHandler(i){if(typeof i!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=i}get userLogHandler(){return this._userLogHandler}set userLogHandler(i){this._userLogHandler=i}debug(...i){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...i),this._logHandler(this,Mt.DEBUG,...i)}log(...i){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...i),this._logHandler(this,Mt.VERBOSE,...i)}info(...i){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...i),this._logHandler(this,Mt.INFO,...i)}warn(...i){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...i),this._logHandler(this,Mt.WARN,...i)}error(...i){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...i),this._logHandler(this,Mt.ERROR,...i)}}const r_=(a,i)=>i.some(r=>a instanceof r);let pp,yp;function l_(){return pp||(pp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o_(){return yp||(yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R0=new WeakMap,Jf=new WeakMap,O0=new WeakMap,Hf=new WeakMap,uh=new WeakMap;function u_(a){const i=new Promise((r,o)=>{const f=()=>{a.removeEventListener("success",g),a.removeEventListener("error",p)},g=()=>{r(gs(a.result)),f()},p=()=>{o(a.error),f()};a.addEventListener("success",g),a.addEventListener("error",p)});return i.then(r=>{r instanceof IDBCursor&&R0.set(r,a)}).catch(()=>{}),uh.set(i,a),i}function c_(a){if(Jf.has(a))return;const i=new Promise((r,o)=>{const f=()=>{a.removeEventListener("complete",g),a.removeEventListener("error",p),a.removeEventListener("abort",p)},g=()=>{r(),f()},p=()=>{o(a.error||new DOMException("AbortError","AbortError")),f()};a.addEventListener("complete",g),a.addEventListener("error",p),a.addEventListener("abort",p)});Jf.set(a,i)}let $f={get(a,i,r){if(a instanceof IDBTransaction){if(i==="done")return Jf.get(a);if(i==="objectStoreNames")return a.objectStoreNames||O0.get(a);if(i==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return gs(a[i])},set(a,i,r){return a[i]=r,!0},has(a,i){return a instanceof IDBTransaction&&(i==="done"||i==="store")?!0:i in a}};function f_(a){$f=a($f)}function h_(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(i,...r){const o=a.call(qf(this),i,...r);return O0.set(o,i.sort?i.sort():[i]),gs(o)}:o_().includes(a)?function(...i){return a.apply(qf(this),i),gs(R0.get(this))}:function(...i){return gs(a.apply(qf(this),i))}}function d_(a){return typeof a=="function"?h_(a):(a instanceof IDBTransaction&&c_(a),r_(a,l_())?new Proxy(a,$f):a)}function gs(a){if(a instanceof IDBRequest)return u_(a);if(Hf.has(a))return Hf.get(a);const i=d_(a);return i!==a&&(Hf.set(a,i),uh.set(i,a)),i}const qf=a=>uh.get(a);function D0(a,i,{blocked:r,upgrade:o,blocking:f,terminated:g}={}){const p=indexedDB.open(a,i),C=gs(p);return o&&p.addEventListener("upgradeneeded",A=>{o(gs(p.result),A.oldVersion,A.newVersion,gs(p.transaction),A)}),r&&p.addEventListener("blocked",A=>r(A.oldVersion,A.newVersion,A)),C.then(A=>{g&&A.addEventListener("close",()=>g()),f&&A.addEventListener("versionchange",T=>f(T.oldVersion,T.newVersion,T))}).catch(()=>{}),C}const g_=["get","getKey","getAll","getAllKeys","count"],m_=["put","add","delete","clear"],Bf=new Map;function vp(a,i){if(!(a instanceof IDBDatabase&&!(i in a)&&typeof i=="string"))return;if(Bf.get(i))return Bf.get(i);const r=i.replace(/FromIndex$/,""),o=i!==r,f=m_.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(f||g_.includes(r)))return;const g=async function(p,...C){const A=this.transaction(p,f?"readwrite":"readonly");let T=A.store;return o&&(T=T.index(C.shift())),(await Promise.all([T[r](...C),f&&A.done]))[0]};return Bf.set(i,g),g}f_(a=>({...a,get:(i,r,o)=>vp(i,r)||a.get(i,r,o),has:(i,r)=>!!vp(i,r)||a.has(i,r)}));/**
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
 */class p_{constructor(i){this.container=i}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(y_(r)){const o=r.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(r=>r).join(" ")}}function y_(a){const i=a.getComponent();return(i==null?void 0:i.type)==="VERSION"}const Wf="@firebase/app",_p="0.14.6";/**
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
 */const Ni=new Nu("@firebase/app"),v_="@firebase/app-compat",__="@firebase/analytics-compat",b_="@firebase/analytics",E_="@firebase/app-check-compat",T_="@firebase/app-check",S_="@firebase/auth",A_="@firebase/auth-compat",x_="@firebase/database",N_="@firebase/data-connect",w_="@firebase/database-compat",C_="@firebase/functions",R_="@firebase/functions-compat",O_="@firebase/installations",D_="@firebase/installations-compat",I_="@firebase/messaging",M_="@firebase/messaging-compat",j_="@firebase/performance",U_="@firebase/performance-compat",L_="@firebase/remote-config",z_="@firebase/remote-config-compat",k_="@firebase/storage",H_="@firebase/storage-compat",q_="@firebase/firestore",B_="@firebase/ai",V_="@firebase/firestore-compat",G_="firebase",P_="12.6.0";/**
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
 */const th="[DEFAULT]",Y_={[Wf]:"fire-core",[v_]:"fire-core-compat",[b_]:"fire-analytics",[__]:"fire-analytics-compat",[T_]:"fire-app-check",[E_]:"fire-app-check-compat",[S_]:"fire-auth",[A_]:"fire-auth-compat",[x_]:"fire-rtdb",[N_]:"fire-data-connect",[w_]:"fire-rtdb-compat",[C_]:"fire-fn",[R_]:"fire-fn-compat",[O_]:"fire-iid",[D_]:"fire-iid-compat",[I_]:"fire-fcm",[M_]:"fire-fcm-compat",[j_]:"fire-perf",[U_]:"fire-perf-compat",[L_]:"fire-rc",[z_]:"fire-rc-compat",[k_]:"fire-gcs",[H_]:"fire-gcs-compat",[q_]:"fire-fst",[V_]:"fire-fst-compat",[B_]:"fire-vertex","fire-js":"fire-js",[G_]:"fire-js-all"};/**
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
 */const pu=new Map,X_=new Map,eh=new Map;function bp(a,i){try{a.container.addComponent(i)}catch(r){Ni.debug(`Component ${i.name} failed to register with FirebaseApp ${a.name}`,r)}}function ii(a){const i=a.name;if(eh.has(i))return Ni.debug(`There were multiple attempts to register component ${i}.`),!1;eh.set(i,a);for(const r of pu.values())bp(r,a);for(const r of X_.values())bp(r,a);return!0}function ra(a,i){const r=a.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),a.container.getProvider(i)}function Wn(a){return a==null?!1:a.settings!==void 0}/**
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
 */const F_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ms=new aa("app","Firebase",F_);/**
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
 */class K_{constructor(i,r,o){this._isDeleted=!1,this._options={...i},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(i){this.checkDestroyed(),this._automaticDataCollectionEnabled=i}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(i){this._isDeleted=i}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=P_;function I0(a,i={}){let r=a;typeof i!="object"&&(i={name:i});const o={name:th,automaticDataCollectionEnabled:!0,...i},f=o.name;if(typeof f!="string"||!f)throw ms.create("bad-app-name",{appName:String(f)});if(r||(r=T0()),!r)throw ms.create("no-options");const g=pu.get(f);if(g){if(ps(r,g.options)&&ps(o,g.config))return g;throw ms.create("duplicate-app",{appName:f})}const p=new e_(f);for(const A of eh.values())p.addComponent(A);const C=new K_(r,o,p);return pu.set(f,C),C}function ch(a=th){const i=pu.get(a);if(!i&&a===th&&T0())return I0();if(!i)throw ms.create("no-app",{appName:a});return i}function hn(a,i,r){let o=Y_[a]??a;r&&(o+=`-${r}`);const f=o.match(/\s|\//),g=i.match(/\s|\//);if(f||g){const p=[`Unable to register library "${o}" with version "${i}":`];f&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),f&&g&&p.push("and"),g&&p.push(`version name "${i}" contains illegal characters (whitespace or "/")`),Ni.warn(p.join(" "));return}ii(new Cn(`${o}-version`,()=>({library:o,version:i}),"VERSION"))}/**
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
 */const Q_="firebase-heartbeat-database",Z_=1,El="firebase-heartbeat-store";let Vf=null;function M0(){return Vf||(Vf=D0(Q_,Z_,{upgrade:(a,i)=>{switch(i){case 0:try{a.createObjectStore(El)}catch(r){console.warn(r)}}}}).catch(a=>{throw ms.create("idb-open",{originalErrorMessage:a.message})})),Vf}async function J_(a){try{const r=(await M0()).transaction(El),o=await r.objectStore(El).get(j0(a));return await r.done,o}catch(i){if(i instanceof Rn)Ni.warn(i.message);else{const r=ms.create("idb-get",{originalErrorMessage:i==null?void 0:i.message});Ni.warn(r.message)}}}async function Ep(a,i){try{const o=(await M0()).transaction(El,"readwrite");await o.objectStore(El).put(i,j0(a)),await o.done}catch(r){if(r instanceof Rn)Ni.warn(r.message);else{const o=ms.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Ni.warn(o.message)}}}function j0(a){return`${a.name}!${a.options.appId}`}/**
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
 */const $_=1024,W_=30;class tb{constructor(i){this.container=i,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new nb(r),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var i,r;try{const f=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),g=Tp();if(((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)==null?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===g||this._heartbeatsCache.heartbeats.some(p=>p.date===g))return;if(this._heartbeatsCache.heartbeats.push({date:g,agent:f}),this._heartbeatsCache.heartbeats.length>W_){const p=ib(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(p,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){Ni.warn(o)}}async getHeartbeatsHeader(){var i;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Tp(),{heartbeatsToSend:o,unsentEntries:f}=eb(this._heartbeatsCache.heartbeats),g=mu(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=r,f.length>0?(this._heartbeatsCache.heartbeats=f,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),g}catch(r){return Ni.warn(r),""}}}function Tp(){return new Date().toISOString().substring(0,10)}function eb(a,i=$_){const r=[];let o=a.slice();for(const f of a){const g=r.find(p=>p.agent===f.agent);if(g){if(g.dates.push(f.date),Sp(r)>i){g.dates.pop();break}}else if(r.push({agent:f.agent,dates:[f.date]}),Sp(r)>i){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class nb{constructor(i){this.app=i,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w0()?C0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await J_(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(i){if(await this._canUseIndexedDBPromise){const o=await this.read();return Ep(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:i.heartbeats})}else return}async add(i){if(await this._canUseIndexedDBPromise){const o=await this.read();return Ep(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...i.heartbeats]})}else return}}function Sp(a){return mu(JSON.stringify({version:2,heartbeats:a})).length}function ib(a){if(a.length===0)return-1;let i=0,r=a[0].date;for(let o=1;o<a.length;o++)a[o].date<r&&(r=a[o].date,i=o);return i}/**
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
 */function sb(a){ii(new Cn("platform-logger",i=>new p_(i),"PRIVATE")),ii(new Cn("heartbeat",i=>new tb(i),"PRIVATE")),hn(Wf,_p,a),hn(Wf,_p,"esm2020"),hn("fire-js","")}sb("");var ab="firebase",rb="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(ab,rb,"app");const U0="@firebase/installations",fh="0.6.19";/**
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
 */const L0=1e4,z0=`w:${fh}`,k0="FIS_v2",lb="https://firebaseinstallations.googleapis.com/v1",ob=3600*1e3,ub="installations",cb="Installations";/**
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
 */const fb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ea=new aa(ub,cb,fb);function H0(a){return a instanceof Rn&&a.code.includes("request-failed")}/**
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
 */function q0({projectId:a}){return`${lb}/projects/${a}/installations`}function B0(a){return{token:a.token,requestStatus:2,expiresIn:db(a.expiresIn),creationTime:Date.now()}}async function V0(a,i){const o=(await i.json()).error;return ea.create("request-failed",{requestName:a,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function G0({apiKey:a}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":a})}function hb(a,{refreshToken:i}){const r=G0(a);return r.append("Authorization",gb(i)),r}async function P0(a){const i=await a();return i.status>=500&&i.status<600?a():i}function db(a){return Number(a.replace("s","000"))}function gb(a){return`${k0} ${a}`}/**
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
 */async function mb({appConfig:a,heartbeatServiceProvider:i},{fid:r}){const o=q0(a),f=G0(a),g=i.getImmediate({optional:!0});if(g){const T=await g.getHeartbeatsHeader();T&&f.append("x-firebase-client",T)}const p={fid:r,authVersion:k0,appId:a.appId,sdkVersion:z0},C={method:"POST",headers:f,body:JSON.stringify(p)},A=await P0(()=>fetch(o,C));if(A.ok){const T=await A.json();return{fid:T.fid||r,registrationStatus:2,refreshToken:T.refreshToken,authToken:B0(T.authToken)}}else throw await V0("Create Installation",A)}/**
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
 */function Y0(a){return new Promise(i=>{setTimeout(i,a)})}/**
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
 */function pb(a){return btoa(String.fromCharCode(...a)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yb=/^[cdef][\w-]{21}$/,nh="";function vb(){try{const a=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(a),a[0]=112+a[0]%16;const r=_b(a);return yb.test(r)?r:nh}catch{return nh}}function _b(a){return pb(a).substr(0,22)}/**
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
 */const X0=new Map;function F0(a,i){const r=wu(a);K0(r,i),bb(r,i)}function K0(a,i){const r=X0.get(a);if(r)for(const o of r)o(i)}function bb(a,i){const r=Eb();r&&r.postMessage({key:a,fid:i}),Tb()}let Zs=null;function Eb(){return!Zs&&"BroadcastChannel"in self&&(Zs=new BroadcastChannel("[Firebase] FID Change"),Zs.onmessage=a=>{K0(a.data.key,a.data.fid)}),Zs}function Tb(){X0.size===0&&Zs&&(Zs.close(),Zs=null)}/**
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
 */const Sb="firebase-installations-database",Ab=1,na="firebase-installations-store";let Gf=null;function hh(){return Gf||(Gf=D0(Sb,Ab,{upgrade:(a,i)=>{switch(i){case 0:a.createObjectStore(na)}}})),Gf}async function yu(a,i){const r=wu(a),f=(await hh()).transaction(na,"readwrite"),g=f.objectStore(na),p=await g.get(r);return await g.put(i,r),await f.done,(!p||p.fid!==i.fid)&&F0(a,i.fid),i}async function Q0(a){const i=wu(a),o=(await hh()).transaction(na,"readwrite");await o.objectStore(na).delete(i),await o.done}async function Cu(a,i){const r=wu(a),f=(await hh()).transaction(na,"readwrite"),g=f.objectStore(na),p=await g.get(r),C=i(p);return C===void 0?await g.delete(r):await g.put(C,r),await f.done,C&&(!p||p.fid!==C.fid)&&F0(a,C.fid),C}/**
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
 */async function dh(a){let i;const r=await Cu(a.appConfig,o=>{const f=xb(o),g=Nb(a,f);return i=g.registrationPromise,g.installationEntry});return r.fid===nh?{installationEntry:await i}:{installationEntry:r,registrationPromise:i}}function xb(a){const i=a||{fid:vb(),registrationStatus:0};return Z0(i)}function Nb(a,i){if(i.registrationStatus===0){if(!navigator.onLine){const f=Promise.reject(ea.create("app-offline"));return{installationEntry:i,registrationPromise:f}}const r={fid:i.fid,registrationStatus:1,registrationTime:Date.now()},o=wb(a,r);return{installationEntry:r,registrationPromise:o}}else return i.registrationStatus===1?{installationEntry:i,registrationPromise:Cb(a)}:{installationEntry:i}}async function wb(a,i){try{const r=await mb(a,i);return yu(a.appConfig,r)}catch(r){throw H0(r)&&r.customData.serverCode===409?await Q0(a.appConfig):await yu(a.appConfig,{fid:i.fid,registrationStatus:0}),r}}async function Cb(a){let i=await Ap(a.appConfig);for(;i.registrationStatus===1;)await Y0(100),i=await Ap(a.appConfig);if(i.registrationStatus===0){const{installationEntry:r,registrationPromise:o}=await dh(a);return o||r}return i}function Ap(a){return Cu(a,i=>{if(!i)throw ea.create("installation-not-found");return Z0(i)})}function Z0(a){return Rb(a)?{fid:a.fid,registrationStatus:0}:a}function Rb(a){return a.registrationStatus===1&&a.registrationTime+L0<Date.now()}/**
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
 */async function Ob({appConfig:a,heartbeatServiceProvider:i},r){const o=Db(a,r),f=hb(a,r),g=i.getImmediate({optional:!0});if(g){const T=await g.getHeartbeatsHeader();T&&f.append("x-firebase-client",T)}const p={installation:{sdkVersion:z0,appId:a.appId}},C={method:"POST",headers:f,body:JSON.stringify(p)},A=await P0(()=>fetch(o,C));if(A.ok){const T=await A.json();return B0(T)}else throw await V0("Generate Auth Token",A)}function Db(a,{fid:i}){return`${q0(a)}/${i}/authTokens:generate`}/**
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
 */async function gh(a,i=!1){let r;const o=await Cu(a.appConfig,g=>{if(!J0(g))throw ea.create("not-registered");const p=g.authToken;if(!i&&jb(p))return g;if(p.requestStatus===1)return r=Ib(a,i),g;{if(!navigator.onLine)throw ea.create("app-offline");const C=Lb(g);return r=Mb(a,C),C}});return r?await r:o.authToken}async function Ib(a,i){let r=await xp(a.appConfig);for(;r.authToken.requestStatus===1;)await Y0(100),r=await xp(a.appConfig);const o=r.authToken;return o.requestStatus===0?gh(a,i):o}function xp(a){return Cu(a,i=>{if(!J0(i))throw ea.create("not-registered");const r=i.authToken;return zb(r)?{...i,authToken:{requestStatus:0}}:i})}async function Mb(a,i){try{const r=await Ob(a,i),o={...i,authToken:r};return await yu(a.appConfig,o),r}catch(r){if(H0(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await Q0(a.appConfig);else{const o={...i,authToken:{requestStatus:0}};await yu(a.appConfig,o)}throw r}}function J0(a){return a!==void 0&&a.registrationStatus===2}function jb(a){return a.requestStatus===2&&!Ub(a)}function Ub(a){const i=Date.now();return i<a.creationTime||a.creationTime+a.expiresIn<i+ob}function Lb(a){const i={requestStatus:1,requestTime:Date.now()};return{...a,authToken:i}}function zb(a){return a.requestStatus===1&&a.requestTime+L0<Date.now()}/**
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
 */async function kb(a){const i=a,{installationEntry:r,registrationPromise:o}=await dh(i);return o?o.catch(console.error):gh(i).catch(console.error),r.fid}/**
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
 */async function Hb(a,i=!1){const r=a;return await qb(r),(await gh(r,i)).token}async function qb(a){const{registrationPromise:i}=await dh(a);i&&await i}/**
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
 */function Bb(a){if(!a||!a.options)throw Pf("App Configuration");if(!a.name)throw Pf("App Name");const i=["projectId","apiKey","appId"];for(const r of i)if(!a.options[r])throw Pf(r);return{appName:a.name,projectId:a.options.projectId,apiKey:a.options.apiKey,appId:a.options.appId}}function Pf(a){return ea.create("missing-app-config-values",{valueName:a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="installations",Vb="installations-internal",Gb=a=>{const i=a.getProvider("app").getImmediate(),r=Bb(i),o=ra(i,"heartbeat");return{app:i,appConfig:r,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},Pb=a=>{const i=a.getProvider("app").getImmediate(),r=ra(i,$0).getImmediate();return{getId:()=>kb(r),getToken:f=>Hb(r,f)}};function Yb(){ii(new Cn($0,Gb,"PUBLIC")),ii(new Cn(Vb,Pb,"PRIVATE"))}Yb();hn(U0,fh);hn(U0,fh,"esm2020");/**
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
 */const vu="analytics",Xb="firebase_id",Fb="origin",Kb=60*1e3,Qb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",mh="https://www.googletagmanager.com/gtag/js";/**
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
 */const je=new Nu("@firebase/analytics");/**
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
 */const Zb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$e=new aa("analytics","Analytics",Zb);/**
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
 */function Jb(a){if(!a.startsWith(mh)){const i=$e.create("invalid-gtag-resource",{gtagURL:a});return je.warn(i.message),""}return a}function W0(a){return Promise.all(a.map(i=>i.catch(r=>r)))}function $b(a,i){let r;return window.trustedTypes&&(r=window.trustedTypes.createPolicy(a,i)),r}function Wb(a,i){const r=$b("firebase-js-sdk-policy",{createScriptURL:Jb}),o=document.createElement("script"),f=`${mh}?l=${a}&id=${i}`;o.src=r?r==null?void 0:r.createScriptURL(f):f,o.async=!0,document.head.appendChild(o)}function tE(a){let i=[];return Array.isArray(window[a])?i=window[a]:window[a]=i,i}async function eE(a,i,r,o,f,g){const p=o[f];try{if(p)await i[p];else{const A=(await W0(r)).find(T=>T.measurementId===f);A&&await i[A.appId]}}catch(C){je.error(C)}a("config",f,g)}async function nE(a,i,r,o,f){try{let g=[];if(f&&f.send_to){let p=f.send_to;Array.isArray(p)||(p=[p]);const C=await W0(r);for(const A of p){const T=C.find(j=>j.measurementId===A),P=T&&i[T.appId];if(P)g.push(P);else{g=[];break}}}g.length===0&&(g=Object.values(i)),await Promise.all(g),a("event",o,f||{})}catch(g){je.error(g)}}function iE(a,i,r,o){async function f(g,...p){try{if(g==="event"){const[C,A]=p;await nE(a,i,r,C,A)}else if(g==="config"){const[C,A]=p;await eE(a,i,r,o,C,A)}else if(g==="consent"){const[C,A]=p;a("consent",C,A)}else if(g==="get"){const[C,A,T]=p;a("get",C,A,T)}else if(g==="set"){const[C]=p;a("set",C)}else a(g,...p)}catch(C){je.error(C)}}return f}function sE(a,i,r,o,f){let g=function(...p){window[o].push(arguments)};return window[f]&&typeof window[f]=="function"&&(g=window[f]),window[f]=iE(g,a,i,r),{gtagCore:g,wrappedGtag:window[f]}}function aE(a){const i=window.document.getElementsByTagName("script");for(const r of Object.values(i))if(r.src&&r.src.includes(mh)&&r.src.includes(a))return r;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=30,lE=1e3;class oE{constructor(i={},r=lE){this.throttleMetadata=i,this.intervalMillis=r}getThrottleMetadata(i){return this.throttleMetadata[i]}setThrottleMetadata(i,r){this.throttleMetadata[i]=r}deleteThrottleMetadata(i){delete this.throttleMetadata[i]}}const ty=new oE;function uE(a){return new Headers({Accept:"application/json","x-goog-api-key":a})}async function cE(a){var p;const{appId:i,apiKey:r}=a,o={method:"GET",headers:uE(r)},f=Qb.replace("{app-id}",i),g=await fetch(f,o);if(g.status!==200&&g.status!==304){let C="";try{const A=await g.json();(p=A.error)!=null&&p.message&&(C=A.error.message)}catch{}throw $e.create("config-fetch-failed",{httpStatus:g.status,responseMessage:C})}return g.json()}async function fE(a,i=ty,r){const{appId:o,apiKey:f,measurementId:g}=a.options;if(!o)throw $e.create("no-app-id");if(!f){if(g)return{measurementId:g,appId:o};throw $e.create("no-api-key")}const p=i.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},C=new gE;return setTimeout(async()=>{C.abort()},Kb),ey({appId:o,apiKey:f,measurementId:g},p,C,i)}async function ey(a,{throttleEndTimeMillis:i,backoffCount:r},o,f=ty){var C;const{appId:g,measurementId:p}=a;try{await hE(o,i)}catch(A){if(p)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${A==null?void 0:A.message}]`),{appId:g,measurementId:p};throw A}try{const A=await cE(a);return f.deleteThrottleMetadata(g),A}catch(A){const T=A;if(!dE(T)){if(f.deleteThrottleMetadata(g),p)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${T==null?void 0:T.message}]`),{appId:g,measurementId:p};throw A}const P=Number((C=T==null?void 0:T.customData)==null?void 0:C.httpStatus)===503?mp(r,f.intervalMillis,rE):mp(r,f.intervalMillis),j={throttleEndTimeMillis:Date.now()+P,backoffCount:r+1};return f.setThrottleMetadata(g,j),je.debug(`Calling attemptFetch again in ${P} millis`),ey(a,j,o,f)}}function hE(a,i){return new Promise((r,o)=>{const f=Math.max(i-Date.now(),0),g=setTimeout(r,f);a.addEventListener(()=>{clearTimeout(g),o($e.create("fetch-throttle",{throttleEndTimeMillis:i}))})})}function dE(a){if(!(a instanceof Rn)||!a.customData)return!1;const i=Number(a.customData.httpStatus);return i===429||i===500||i===503||i===504}class gE{constructor(){this.listeners=[]}addEventListener(i){this.listeners.push(i)}abort(){this.listeners.forEach(i=>i())}}async function mE(a,i,r,o,f){if(f&&f.global){a("event",r,o);return}else{const g=await i,p={...o,send_to:g};a("event",r,p)}}async function pE(a,i,r,o){if(o&&o.global){const f={};for(const g of Object.keys(r))f[`user_properties.${g}`]=r[g];return a("set",f),Promise.resolve()}else{const f=await i;a("config",f,{update:!0,user_properties:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(){if(w0())try{await C0()}catch(a){return je.warn($e.create("indexeddb-unavailable",{errorInfo:a==null?void 0:a.toString()}).message),!1}else return je.warn($e.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vE(a,i,r,o,f,g,p){const C=fE(a);C.then(B=>{r[B.measurementId]=B.appId,a.options.measurementId&&B.measurementId!==a.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${a.options.measurementId}) does not match the measurement ID fetched from the server (${B.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(B=>je.error(B)),i.push(C);const A=yE().then(B=>{if(B)return o.getId()}),[T,P]=await Promise.all([C,A]);aE(g)||Wb(g,T.measurementId),f("js",new Date);const j=(p==null?void 0:p.config)??{};return j[Fb]="firebase",j.update=!0,P!=null&&(j[Xb]=P),f("config",T.measurementId,j),T.measurementId}/**
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
 */class _E{constructor(i){this.app=i}_delete(){return delete Wa[this.app.options.appId],Promise.resolve()}}let Wa={},Np=[];const wp={};let Yf="dataLayer",bE="gtag",Cp,ph,Rp=!1;function EE(){const a=[];if(N0()&&a.push("This is a browser extension environment."),q2()||a.push("Cookies are not available."),a.length>0){const i=a.map((o,f)=>`(${f+1}) ${o}`).join(" "),r=$e.create("invalid-analytics-context",{errorInfo:i});je.warn(r.message)}}function TE(a,i,r){EE();const o=a.options.appId;if(!o)throw $e.create("no-app-id");if(!a.options.apiKey)if(a.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${a.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $e.create("no-api-key");if(Wa[o]!=null)throw $e.create("already-exists",{id:o});if(!Rp){tE(Yf);const{wrappedGtag:g,gtagCore:p}=sE(Wa,Np,wp,Yf,bE);ph=g,Cp=p,Rp=!0}return Wa[o]=vE(a,Np,wp,i,Cp,Yf,r),new _E(a)}function SE(a=ch()){a=Ri(a);const i=ra(a,vu);return i.isInitialized()?i.getImmediate():AE(a)}function AE(a,i={}){const r=ra(a,vu);if(r.isInitialized()){const f=r.getImmediate();if(ps(i,r.getOptions()))return f;throw $e.create("already-initialized")}return r.initialize({options:i})}function xE(a,i,r){a=Ri(a),pE(ph,Wa[a.app.options.appId],i,r).catch(o=>je.error(o))}function NE(a,i,r,o){a=Ri(a),mE(ph,Wa[a.app.options.appId],i,r,o).catch(f=>je.error(f))}const Op="@firebase/analytics",Dp="0.10.19";function wE(){ii(new Cn(vu,(i,{options:r})=>{const o=i.getProvider("app").getImmediate(),f=i.getProvider("installations-internal").getImmediate();return TE(o,f,r)},"PUBLIC")),ii(new Cn("analytics-internal",a,"PRIVATE")),hn(Op,Dp),hn(Op,Dp,"esm2020");function a(i){try{const r=i.getProvider(vu).getImmediate();return{logEvent:(o,f,g)=>NE(r,o,f,g),setUserProperties:(o,f)=>xE(r,o,f)}}catch(r){throw $e.create("interop-component-reg-failed",{reason:r})}}}wE();var Ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yh;(function(){var a;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function i(S,E){function b(){}b.prototype=E.prototype,S.F=E.prototype,S.prototype=new b,S.prototype.constructor=S,S.D=function(w,R,I){for(var x=Array(arguments.length-2),Xt=2;Xt<arguments.length;Xt++)x[Xt-2]=arguments[Xt];return E.prototype[R].apply(w,x)}}function r(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}i(o,r),o.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function f(S,E,b){b||(b=0);const w=Array(16);if(typeof E=="string")for(var R=0;R<16;++R)w[R]=E.charCodeAt(b++)|E.charCodeAt(b++)<<8|E.charCodeAt(b++)<<16|E.charCodeAt(b++)<<24;else for(R=0;R<16;++R)w[R]=E[b++]|E[b++]<<8|E[b++]<<16|E[b++]<<24;E=S.g[0],b=S.g[1],R=S.g[2];let I=S.g[3],x;x=E+(I^b&(R^I))+w[0]+3614090360&4294967295,E=b+(x<<7&4294967295|x>>>25),x=I+(R^E&(b^R))+w[1]+3905402710&4294967295,I=E+(x<<12&4294967295|x>>>20),x=R+(b^I&(E^b))+w[2]+606105819&4294967295,R=I+(x<<17&4294967295|x>>>15),x=b+(E^R&(I^E))+w[3]+3250441966&4294967295,b=R+(x<<22&4294967295|x>>>10),x=E+(I^b&(R^I))+w[4]+4118548399&4294967295,E=b+(x<<7&4294967295|x>>>25),x=I+(R^E&(b^R))+w[5]+1200080426&4294967295,I=E+(x<<12&4294967295|x>>>20),x=R+(b^I&(E^b))+w[6]+2821735955&4294967295,R=I+(x<<17&4294967295|x>>>15),x=b+(E^R&(I^E))+w[7]+4249261313&4294967295,b=R+(x<<22&4294967295|x>>>10),x=E+(I^b&(R^I))+w[8]+1770035416&4294967295,E=b+(x<<7&4294967295|x>>>25),x=I+(R^E&(b^R))+w[9]+2336552879&4294967295,I=E+(x<<12&4294967295|x>>>20),x=R+(b^I&(E^b))+w[10]+4294925233&4294967295,R=I+(x<<17&4294967295|x>>>15),x=b+(E^R&(I^E))+w[11]+2304563134&4294967295,b=R+(x<<22&4294967295|x>>>10),x=E+(I^b&(R^I))+w[12]+1804603682&4294967295,E=b+(x<<7&4294967295|x>>>25),x=I+(R^E&(b^R))+w[13]+4254626195&4294967295,I=E+(x<<12&4294967295|x>>>20),x=R+(b^I&(E^b))+w[14]+2792965006&4294967295,R=I+(x<<17&4294967295|x>>>15),x=b+(E^R&(I^E))+w[15]+1236535329&4294967295,b=R+(x<<22&4294967295|x>>>10),x=E+(R^I&(b^R))+w[1]+4129170786&4294967295,E=b+(x<<5&4294967295|x>>>27),x=I+(b^R&(E^b))+w[6]+3225465664&4294967295,I=E+(x<<9&4294967295|x>>>23),x=R+(E^b&(I^E))+w[11]+643717713&4294967295,R=I+(x<<14&4294967295|x>>>18),x=b+(I^E&(R^I))+w[0]+3921069994&4294967295,b=R+(x<<20&4294967295|x>>>12),x=E+(R^I&(b^R))+w[5]+3593408605&4294967295,E=b+(x<<5&4294967295|x>>>27),x=I+(b^R&(E^b))+w[10]+38016083&4294967295,I=E+(x<<9&4294967295|x>>>23),x=R+(E^b&(I^E))+w[15]+3634488961&4294967295,R=I+(x<<14&4294967295|x>>>18),x=b+(I^E&(R^I))+w[4]+3889429448&4294967295,b=R+(x<<20&4294967295|x>>>12),x=E+(R^I&(b^R))+w[9]+568446438&4294967295,E=b+(x<<5&4294967295|x>>>27),x=I+(b^R&(E^b))+w[14]+3275163606&4294967295,I=E+(x<<9&4294967295|x>>>23),x=R+(E^b&(I^E))+w[3]+4107603335&4294967295,R=I+(x<<14&4294967295|x>>>18),x=b+(I^E&(R^I))+w[8]+1163531501&4294967295,b=R+(x<<20&4294967295|x>>>12),x=E+(R^I&(b^R))+w[13]+2850285829&4294967295,E=b+(x<<5&4294967295|x>>>27),x=I+(b^R&(E^b))+w[2]+4243563512&4294967295,I=E+(x<<9&4294967295|x>>>23),x=R+(E^b&(I^E))+w[7]+1735328473&4294967295,R=I+(x<<14&4294967295|x>>>18),x=b+(I^E&(R^I))+w[12]+2368359562&4294967295,b=R+(x<<20&4294967295|x>>>12),x=E+(b^R^I)+w[5]+4294588738&4294967295,E=b+(x<<4&4294967295|x>>>28),x=I+(E^b^R)+w[8]+2272392833&4294967295,I=E+(x<<11&4294967295|x>>>21),x=R+(I^E^b)+w[11]+1839030562&4294967295,R=I+(x<<16&4294967295|x>>>16),x=b+(R^I^E)+w[14]+4259657740&4294967295,b=R+(x<<23&4294967295|x>>>9),x=E+(b^R^I)+w[1]+2763975236&4294967295,E=b+(x<<4&4294967295|x>>>28),x=I+(E^b^R)+w[4]+1272893353&4294967295,I=E+(x<<11&4294967295|x>>>21),x=R+(I^E^b)+w[7]+4139469664&4294967295,R=I+(x<<16&4294967295|x>>>16),x=b+(R^I^E)+w[10]+3200236656&4294967295,b=R+(x<<23&4294967295|x>>>9),x=E+(b^R^I)+w[13]+681279174&4294967295,E=b+(x<<4&4294967295|x>>>28),x=I+(E^b^R)+w[0]+3936430074&4294967295,I=E+(x<<11&4294967295|x>>>21),x=R+(I^E^b)+w[3]+3572445317&4294967295,R=I+(x<<16&4294967295|x>>>16),x=b+(R^I^E)+w[6]+76029189&4294967295,b=R+(x<<23&4294967295|x>>>9),x=E+(b^R^I)+w[9]+3654602809&4294967295,E=b+(x<<4&4294967295|x>>>28),x=I+(E^b^R)+w[12]+3873151461&4294967295,I=E+(x<<11&4294967295|x>>>21),x=R+(I^E^b)+w[15]+530742520&4294967295,R=I+(x<<16&4294967295|x>>>16),x=b+(R^I^E)+w[2]+3299628645&4294967295,b=R+(x<<23&4294967295|x>>>9),x=E+(R^(b|~I))+w[0]+4096336452&4294967295,E=b+(x<<6&4294967295|x>>>26),x=I+(b^(E|~R))+w[7]+1126891415&4294967295,I=E+(x<<10&4294967295|x>>>22),x=R+(E^(I|~b))+w[14]+2878612391&4294967295,R=I+(x<<15&4294967295|x>>>17),x=b+(I^(R|~E))+w[5]+4237533241&4294967295,b=R+(x<<21&4294967295|x>>>11),x=E+(R^(b|~I))+w[12]+1700485571&4294967295,E=b+(x<<6&4294967295|x>>>26),x=I+(b^(E|~R))+w[3]+2399980690&4294967295,I=E+(x<<10&4294967295|x>>>22),x=R+(E^(I|~b))+w[10]+4293915773&4294967295,R=I+(x<<15&4294967295|x>>>17),x=b+(I^(R|~E))+w[1]+2240044497&4294967295,b=R+(x<<21&4294967295|x>>>11),x=E+(R^(b|~I))+w[8]+1873313359&4294967295,E=b+(x<<6&4294967295|x>>>26),x=I+(b^(E|~R))+w[15]+4264355552&4294967295,I=E+(x<<10&4294967295|x>>>22),x=R+(E^(I|~b))+w[6]+2734768916&4294967295,R=I+(x<<15&4294967295|x>>>17),x=b+(I^(R|~E))+w[13]+1309151649&4294967295,b=R+(x<<21&4294967295|x>>>11),x=E+(R^(b|~I))+w[4]+4149444226&4294967295,E=b+(x<<6&4294967295|x>>>26),x=I+(b^(E|~R))+w[11]+3174756917&4294967295,I=E+(x<<10&4294967295|x>>>22),x=R+(E^(I|~b))+w[2]+718787259&4294967295,R=I+(x<<15&4294967295|x>>>17),x=b+(I^(R|~E))+w[9]+3951481745&4294967295,S.g[0]=S.g[0]+E&4294967295,S.g[1]=S.g[1]+(R+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+I&4294967295}o.prototype.v=function(S,E){E===void 0&&(E=S.length);const b=E-this.blockSize,w=this.C;let R=this.h,I=0;for(;I<E;){if(R==0)for(;I<=b;)f(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<E;)if(w[R++]=S.charCodeAt(I++),R==this.blockSize){f(this,w),R=0;break}}else for(;I<E;)if(w[R++]=S[I++],R==this.blockSize){f(this,w),R=0;break}}this.h=R,this.o+=E},o.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var E=1;E<S.length-8;++E)S[E]=0;E=this.o*8;for(var b=S.length-8;b<S.length;++b)S[b]=E&255,E/=256;for(this.v(S),S=Array(16),E=0,b=0;b<4;++b)for(let w=0;w<32;w+=8)S[E++]=this.g[b]>>>w&255;return S};function g(S,E){var b=C;return Object.prototype.hasOwnProperty.call(b,S)?b[S]:b[S]=E(S)}function p(S,E){this.h=E;const b=[];let w=!0;for(let R=S.length-1;R>=0;R--){const I=S[R]|0;w&&I==E||(b[R]=I,w=!1)}this.g=b}var C={};function A(S){return-128<=S&&S<128?g(S,function(E){return new p([E|0],E<0?-1:0)}):new p([S|0],S<0?-1:0)}function T(S){if(isNaN(S)||!isFinite(S))return j;if(S<0)return lt(T(-S));const E=[];let b=1;for(let w=0;S>=b;w++)E[w]=S/b|0,b*=4294967296;return new p(E,0)}function P(S,E){if(S.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(S.charAt(0)=="-")return lt(P(S.substring(1),E));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=T(Math.pow(E,8));let w=j;for(let I=0;I<S.length;I+=8){var R=Math.min(8,S.length-I);const x=parseInt(S.substring(I,I+R),E);R<8?(R=T(Math.pow(E,R)),w=w.j(R).add(T(x))):(w=w.j(b),w=w.add(T(x)))}return w}var j=A(0),B=A(1),st=A(16777216);a=p.prototype,a.m=function(){if(nt(this))return-lt(this).m();let S=0,E=1;for(let b=0;b<this.g.length;b++){const w=this.i(b);S+=(w>=0?w:4294967296+w)*E,E*=4294967296}return S},a.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(tt(this))return"0";if(nt(this))return"-"+lt(this).toString(S);const E=T(Math.pow(S,6));var b=this;let w="";for(;;){const R=jt(b,E).g;b=rt(b,R.j(E));let I=((b.g.length>0?b.g[0]:b.h)>>>0).toString(S);if(b=R,tt(b))return I+w;for(;I.length<6;)I="0"+I;w=I+w}},a.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function tt(S){if(S.h!=0)return!1;for(let E=0;E<S.g.length;E++)if(S.g[E]!=0)return!1;return!0}function nt(S){return S.h==-1}a.l=function(S){return S=rt(this,S),nt(S)?-1:tt(S)?0:1};function lt(S){const E=S.g.length,b=[];for(let w=0;w<E;w++)b[w]=~S.g[w];return new p(b,~S.h).add(B)}a.abs=function(){return nt(this)?lt(this):this},a.add=function(S){const E=Math.max(this.g.length,S.g.length),b=[];let w=0;for(let R=0;R<=E;R++){let I=w+(this.i(R)&65535)+(S.i(R)&65535),x=(I>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);w=x>>>16,I&=65535,x&=65535,b[R]=x<<16|I}return new p(b,b[b.length-1]&-2147483648?-1:0)};function rt(S,E){return S.add(lt(E))}a.j=function(S){if(tt(this)||tt(S))return j;if(nt(this))return nt(S)?lt(this).j(lt(S)):lt(lt(this).j(S));if(nt(S))return lt(this.j(lt(S)));if(this.l(st)<0&&S.l(st)<0)return T(this.m()*S.m());const E=this.g.length+S.g.length,b=[];for(var w=0;w<2*E;w++)b[w]=0;for(w=0;w<this.g.length;w++)for(let R=0;R<S.g.length;R++){const I=this.i(w)>>>16,x=this.i(w)&65535,Xt=S.i(R)>>>16,Qt=S.i(R)&65535;b[2*w+2*R]+=x*Qt,it(b,2*w+2*R),b[2*w+2*R+1]+=I*Qt,it(b,2*w+2*R+1),b[2*w+2*R+1]+=x*Xt,it(b,2*w+2*R+1),b[2*w+2*R+2]+=I*Xt,it(b,2*w+2*R+2)}for(S=0;S<E;S++)b[S]=b[2*S+1]<<16|b[2*S];for(S=E;S<2*E;S++)b[S]=0;return new p(b,0)};function it(S,E){for(;(S[E]&65535)!=S[E];)S[E+1]+=S[E]>>>16,S[E]&=65535,E++}function ot(S,E){this.g=S,this.h=E}function jt(S,E){if(tt(E))throw Error("division by zero");if(tt(S))return new ot(j,j);if(nt(S))return E=jt(lt(S),E),new ot(lt(E.g),lt(E.h));if(nt(E))return E=jt(S,lt(E)),new ot(lt(E.g),E.h);if(S.g.length>30){if(nt(S)||nt(E))throw Error("slowDivide_ only works with positive integers.");for(var b=B,w=E;w.l(S)<=0;)b=qt(b),w=qt(w);var R=Rt(b,1),I=Rt(w,1);for(w=Rt(w,2),b=Rt(b,2);!tt(w);){var x=I.add(w);x.l(S)<=0&&(R=R.add(b),I=x),w=Rt(w,1),b=Rt(b,1)}return E=rt(S,R.j(E)),new ot(R,E)}for(R=j;S.l(E)>=0;){for(b=Math.max(1,Math.floor(S.m()/E.m())),w=Math.ceil(Math.log(b)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),I=T(b),x=I.j(E);nt(x)||x.l(S)>0;)b-=w,I=T(b),x=I.j(E);tt(I)&&(I=B),R=R.add(I),S=rt(S,x)}return new ot(R,S)}a.B=function(S){return jt(this,S).h},a.and=function(S){const E=Math.max(this.g.length,S.g.length),b=[];for(let w=0;w<E;w++)b[w]=this.i(w)&S.i(w);return new p(b,this.h&S.h)},a.or=function(S){const E=Math.max(this.g.length,S.g.length),b=[];for(let w=0;w<E;w++)b[w]=this.i(w)|S.i(w);return new p(b,this.h|S.h)},a.xor=function(S){const E=Math.max(this.g.length,S.g.length),b=[];for(let w=0;w<E;w++)b[w]=this.i(w)^S.i(w);return new p(b,this.h^S.h)};function qt(S){const E=S.g.length+1,b=[];for(let w=0;w<E;w++)b[w]=S.i(w)<<1|S.i(w-1)>>>31;return new p(b,S.h)}function Rt(S,E){const b=E>>5;E%=32;const w=S.g.length-b,R=[];for(let I=0;I<w;I++)R[I]=E>0?S.i(I+b)>>>E|S.i(I+b+1)<<32-E:S.i(I+b);return new p(R,S.h)}o.prototype.digest=o.prototype.A,o.prototype.reset=o.prototype.u,o.prototype.update=o.prototype.v,p.prototype.add=p.prototype.add,p.prototype.multiply=p.prototype.j,p.prototype.modulo=p.prototype.B,p.prototype.compare=p.prototype.l,p.prototype.toNumber=p.prototype.m,p.prototype.toString=p.prototype.toString,p.prototype.getBits=p.prototype.i,p.fromNumber=T,p.fromString=P,yh=p}).apply(typeof Ip<"u"?Ip:typeof self<"u"?self:typeof window<"u"?window:{});var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var a,i=Object.defineProperty;function r(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof lu=="object"&&lu];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var o=r(this);function f(l,h){if(h)t:{var m=o;l=l.split(".");for(var _=0;_<l.length-1;_++){var U=l[_];if(!(U in m))break t;m=m[U]}l=l[l.length-1],_=m[l],h=h(_),h!=_&&h!=null&&i(m,l,{configurable:!0,writable:!0,value:h})}}f("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),f("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),f("Object.entries",function(l){return l||function(h){var m=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&m.push([_,h[_]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var g=g||{},p=this||self;function C(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function A(l,h,m){return l.call.apply(l.bind,arguments)}function T(l,h,m){return T=A,T.apply(null,arguments)}function P(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function j(l,h){function m(){}m.prototype=h.prototype,l.Z=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Ob=function(_,U,H){for(var Q=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)Q[gt-2]=arguments[gt];return h.prototype[U].apply(_,Q)}}var B=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function st(l){const h=l.length;if(h>0){const m=Array(h);for(let _=0;_<h;_++)m[_]=l[_];return m}return[]}function tt(l,h){for(let _=1;_<arguments.length;_++){const U=arguments[_];var m=typeof U;if(m=m!="object"?m:U?Array.isArray(U)?"array":m:"null",m=="array"||m=="object"&&typeof U.length=="number"){m=l.length||0;const H=U.length||0;l.length=m+H;for(let Q=0;Q<H;Q++)l[m+Q]=U[Q]}else l.push(U)}}class nt{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function lt(l){p.setTimeout(()=>{throw l},0)}function rt(){var l=S;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class it{constructor(){this.h=this.g=null}add(h,m){const _=ot.get();_.set(h,m),this.h?this.h.next=_:this.g=_,this.h=_}}var ot=new nt(()=>new jt,l=>l.reset());class jt{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let qt,Rt=!1,S=new it,E=()=>{const l=Promise.resolve(void 0);qt=()=>{l.then(b)}};function b(){for(var l;l=rt();){try{l.h.call(l.g)}catch(m){lt(m)}var h=ot;h.j(l),h.h<100&&(h.h++,l.next=h.g,h.g=l)}Rt=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};p.addEventListener("test",m,h),p.removeEventListener("test",m,h)}catch{}return l})();function x(l){return/^[\s\xa0]*$/.test(l)}function Xt(l,h){R.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,h)}j(Xt,R),Xt.prototype.init=function(l,h){const m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget,h||(m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Xt.Z.h.call(this)},Xt.prototype.h=function(){Xt.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Qt="closure_listenable_"+(Math.random()*1e6|0),V=0;function Z(l,h,m,_,U){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!_,this.ha=U,this.key=++V,this.da=this.fa=!1}function ut(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ct(l,h,m){for(const _ in l)h.call(m,l[_],_,l)}function Ut(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function D(l){const h={};for(const m in l)h[m]=l[m];return h}const K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function J(l,h){let m,_;for(let U=1;U<arguments.length;U++){_=arguments[U];for(m in _)l[m]=_[m];for(let H=0;H<K.length;H++)m=K[H],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function $(l){this.src=l,this.g={},this.h=0}$.prototype.add=function(l,h,m,_,U){const H=l.toString();l=this.g[H],l||(l=this.g[H]=[],this.h++);const Q=pt(l,h,_,U);return Q>-1?(h=l[Q],m||(h.fa=!1)):(h=new Z(h,this.src,H,!!_,U),h.fa=m,l.push(h)),h};function ht(l,h){const m=h.type;if(m in l.g){var _=l.g[m],U=Array.prototype.indexOf.call(_,h,void 0),H;(H=U>=0)&&Array.prototype.splice.call(_,U,1),H&&(ut(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function pt(l,h,m,_){for(let U=0;U<l.length;++U){const H=l[U];if(!H.da&&H.listener==h&&H.capture==!!m&&H.ha==_)return U}return-1}var St="closure_lm_"+(Math.random()*1e6|0),me={};function Zt(l,h,m,_,U){if(Array.isArray(h)){for(let H=0;H<h.length;H++)Zt(l,h[H],m,_,U);return null}return m=cr(m),l&&l[Qt]?l.J(h,m,C(_)?!!_.capture:!1,U):vs(l,h,m,!1,_,U)}function vs(l,h,m,_,U,H){if(!h)throw Error("Invalid event type");const Q=C(U)?!!U.capture:!!U;let gt=_s(l);if(gt||(l[St]=gt=new $(l)),m=gt.add(h,m,_,Q,H),m.proxy)return m;if(_=la(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)I||(U=Q),U===void 0&&(U=!1),l.addEventListener(h.toString(),_,U);else if(l.attachEvent)l.attachEvent(On(h.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function la(){function l(m){return h.call(l.src,l.listener,m)}const h=or;return l}function oa(l,h,m,_,U){if(Array.isArray(h))for(var H=0;H<h.length;H++)oa(l,h[H],m,_,U);else _=C(_)?!!_.capture:!!_,m=cr(m),l&&l[Qt]?(l=l.i,H=String(h).toString(),H in l.g&&(h=l.g[H],m=pt(h,m,_,U),m>-1&&(ut(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete l.g[H],l.h--)))):l&&(l=_s(l))&&(h=l.g[h.toString()],l=-1,h&&(l=pt(h,m,_,U)),(m=l>-1?h[l]:null)&&ua(m))}function ua(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Qt])ht(h.i,l);else{var m=l.type,_=l.proxy;h.removeEventListener?h.removeEventListener(m,_,l.capture):h.detachEvent?h.detachEvent(On(m),_):h.addListener&&h.removeListener&&h.removeListener(_),(m=_s(h))?(ht(m,l),m.h==0&&(m.src=null,h[St]=null)):ut(l)}}}function On(l){return l in me?me[l]:me[l]="on"+l}function or(l,h){if(l.da)l=!0;else{h=new Xt(h,this);const m=l.listener,_=l.ha||l.src;l.fa&&ua(l),l=m.call(_,h)}return l}function _s(l){return l=l[St],l instanceof $?l:null}var ur="__closure_events_fn_"+(Math.random()*1e9>>>0);function cr(l){return typeof l=="function"?l:(l[ur]||(l[ur]=function(h){return l.handleEvent(h)}),l[ur])}function se(){w.call(this),this.i=new $(this),this.M=this,this.G=null}j(se,w),se.prototype[Qt]=!0,se.prototype.removeEventListener=function(l,h,m,_){oa(this,l,h,m,_)};function pe(l,h){var m,_=l.G;if(_)for(m=[];_;_=_.G)m.push(_);if(l=l.M,_=h.type||h,typeof h=="string")h=new R(h,l);else if(h instanceof R)h.target=h.target||l;else{var U=h;h=new R(_,l),J(h,U)}U=!0;let H,Q;if(m)for(Q=m.length-1;Q>=0;Q--)H=h.g=m[Q],U=Oi(H,_,!0,h)&&U;if(H=h.g=l,U=Oi(H,_,!0,h)&&U,U=Oi(H,_,!1,h)&&U,m)for(Q=0;Q<m.length;Q++)H=h.g=m[Q],U=Oi(H,_,!1,h)&&U}se.prototype.N=function(){if(se.Z.N.call(this),this.i){var l=this.i;for(const h in l.g){const m=l.g[h];for(let _=0;_<m.length;_++)ut(m[_]);delete l.g[h],l.h--}}this.G=null},se.prototype.J=function(l,h,m,_){return this.i.add(String(l),h,!1,m,_)},se.prototype.K=function(l,h,m,_){return this.i.add(String(l),h,!0,m,_)};function Oi(l,h,m,_){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();let U=!0;for(let H=0;H<h.length;++H){const Q=h[H];if(Q&&!Q.da&&Q.capture==m){const gt=Q.listener,ee=Q.ha||Q.src;Q.fa&&ht(l.i,Q),U=gt.call(ee,_)!==!1&&U}}return U&&!_.defaultPrevented}function Du(l,h){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=T(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:p.setTimeout(l,h||0)}function Dl(l){l.g=Du(()=>{l.g=null,l.i&&(l.i=!1,Dl(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class De extends w{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Dl(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(l){w.call(this),this.h=l,this.g={}}j(bs,w);var fr=[];function hr(l){Ct(l.g,function(h,m){this.g.hasOwnProperty(m)&&ua(h)},l),l.g={}}bs.prototype.N=function(){bs.Z.N.call(this),hr(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Di=p.JSON.stringify,Iu=p.JSON.parse,Il=class{stringify(l){return p.JSON.stringify(l,void 0)}parse(l){return p.JSON.parse(l,void 0)}};function Ml(){}function Mu(){}var dn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Te(){R.call(this,"d")}j(Te,R);function We(){R.call(this,"c")}j(We,R);var ae={},jl=null;function dr(){return jl=jl||new se}ae.Ia="serverreachability";function Ul(l){R.call(this,ae.Ia,l)}j(Ul,R);function Dn(l){const h=dr();pe(h,new Ul(h))}ae.STAT_EVENT="statevent";function Es(l,h){R.call(this,ae.STAT_EVENT,l),this.stat=h}j(Es,R);function re(l){const h=dr();pe(h,new Es(h,l))}ae.Ja="timingevent";function In(l,h){R.call(this,ae.Ja,l),this.size=h}j(In,R);function Mn(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){l()},h)}function gn(){this.g=!0}gn.prototype.ua=function(){this.g=!1};function ju(l,h,m,_,U,H){l.info(function(){if(l.g)if(H){var Q="",gt=H.split("&");for(let zt=0;zt<gt.length;zt++){var ee=gt[zt].split("=");if(ee.length>1){const $t=ee[0];ee=ee[1];const Re=$t.split("_");Q=Re.length>=2&&Re[1]=="type"?Q+($t+"="+ee+"&"):Q+($t+"=redacted&")}}}else Q=null;else Q=H;return"XMLHTTP REQ ("+_+") [attempt "+U+"]: "+h+`
`+m+`
`+Q})}function Ll(l,h,m,_,U,H,Q){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+U+"]: "+h+`
`+m+`
`+H+" "+Q})}function jn(l,h,m,_){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+Uu(l,m)+(_?" "+_:"")})}function Ts(l,h){l.info(function(){return"TIMEOUT: "+h})}gn.prototype.info=function(){};function Uu(l,h){if(!l.g)return h;if(!h)return null;try{const H=JSON.parse(h);if(H){for(l=0;l<H.length;l++)if(Array.isArray(H[l])){var m=H[l];if(!(m.length<2)){var _=m[1];if(Array.isArray(_)&&!(_.length<1)){var U=_[0];if(U!="noop"&&U!="stop"&&U!="close")for(let Q=1;Q<_.length;Q++)_[Q]=""}}}}return Di(H)}catch{return h}}var ca={NO_ERROR:0,TIMEOUT:8},zl={},gr;function Ss(){}j(Ss,Ml),Ss.prototype.g=function(){return new XMLHttpRequest},gr=new Ss;function si(l){return encodeURIComponent(String(l))}function kl(l){var h=1;l=l.split(":");const m=[];for(;h>0&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function mn(l,h,m,_){this.j=l,this.i=h,this.l=m,this.S=_||1,this.V=new bs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pn}function pn(){this.i=null,this.g="",this.h=!1}var le={},ve={};function Un(l,h,m){l.M=1,l.A=As(ue(h)),l.u=m,l.R=!0,fa(l,null)}function fa(l,h){l.F=Date.now(),Ln(l),l.B=ue(l.A);var m=l.B,_=l.S;Array.isArray(_)||(_=[String(_)]),ma(m.i,"t",_),l.C=0,m=l.j.L,l.h=new pn,l.g=Wl(l.j,m?h:null,!l.u),l.P>0&&(l.O=new De(T(l.Y,l,l.g),l.P)),h=l.V,m=l.g,_=l.ba;var U="readystatechange";Array.isArray(U)||(U&&(fr[0]=U.toString()),U=fr);for(let H=0;H<U.length;H++){const Q=Zt(m,U[H],_||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=l.J?D(l.J):{},l.u?(l.v||(l.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,h)):(l.v="GET",l.g.ea(l.B,l.v,null,h)),Dn(),ju(l.i,l.v,l.B,l.l,l.S,l.u)}mn.prototype.ba=function(l){l=l.target;const h=this.O;h&&_n(l)==3?h.j():this.Y(l)},mn.prototype.Y=function(l){try{if(l==this.g)t:{const gt=_n(this.g),ee=this.g.ya(),zt=this.g.ca();if(!(gt<3)&&(gt!=3||this.g&&(this.h.h||this.g.la()||Se(this.g)))){this.K||gt!=4||ee==7||(ee==8||zt<=0?Dn(3):Dn(2)),zn(this);var h=this.g.ca();this.X=h;var m=Lu(this);if(this.o=h==200,Ll(this.i,this.v,this.B,this.l,this.S,gt,h),this.o){if(this.U&&!this.L){e:{if(this.g){var _,U=this.g;if((_=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(_)){var H=_;break e}}H=null}if(l=H)jn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,kn(this,l);else{this.o=!1,this.m=3,re(12),Ge(this),tn(this);break t}}if(this.R){l=!0;let $t;for(;!this.K&&this.C<m.length;)if($t=ql(this,m),$t==ve){gt==4&&(this.m=4,re(14),l=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if($t==le){this.m=4,re(15),jn(this.i,this.l,m,"[Invalid Chunk]"),l=!1;break}else jn(this.i,this.l,$t,null),kn(this,$t);if(Hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||m.length!=0||this.h.h||(this.m=1,re(16),l=!1),this.o=this.o&&l,!l)jn(this.i,this.l,m,"[Invalid Chunked Response]"),Ge(this),tn(this);else if(m.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Rr(Q),Q.P=!0,re(11))}}else jn(this.i,this.l,m,null),kn(this,m);gt==4&&Ge(this),this.o&&!this.K&&(gt==4?Ql(this.j,this):(this.o=!1,Ln(this)))}else ri(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,re(12)):(this.m=0,re(13)),Ge(this),tn(this)}}}catch{}finally{}};function Lu(l){if(!Hl(l))return l.g.la();const h=Se(l.g);if(h==="")return"";let m="";const _=h.length,U=_n(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return Ge(l),tn(l),"";l.h.i=new p.TextDecoder}for(let H=0;H<_;H++)l.h.h=!0,m+=l.h.i.decode(h[H],{stream:!(U&&H==_-1)});return h.length=0,l.h.g+=m,l.C=0,l.h.g}function Hl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function ql(l,h){var m=l.C,_=h.indexOf(`
`,m);return _==-1?ve:(m=Number(h.substring(m,_)),isNaN(m)?le:(_+=1,_+m>h.length?ve:(h=h.slice(_,_+m),l.C=_+m,h)))}mn.prototype.cancel=function(){this.K=!0,Ge(this)};function Ln(l){l.T=Date.now()+l.H,ha(l,l.H)}function ha(l,h){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Mn(T(l.aa,l),h)}function zn(l){l.D&&(p.clearTimeout(l.D),l.D=null)}mn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(Ts(this.i,this.B),this.M!=2&&(Dn(),re(17)),Ge(this),this.m=2,tn(this)):ha(this,this.T-l)};function tn(l){l.j.I==0||l.K||Ql(l.j,l)}function Ge(l){zn(l);var h=l.O;h&&typeof h.dispose=="function"&&h.dispose(),l.O=null,hr(l.V),l.g&&(h=l.g,l.g=null,h.abort(),h.dispose())}function kn(l,h){try{var m=l.j;if(m.I!=0&&(m.g==l||qn(m.h,l))){if(!l.L&&qn(m.h,l)&&m.I==3){try{var _=m.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var U=_;if(U[0]==0){t:if(!m.v){if(m.g)if(m.g.F+3e3<l.F)ba(m),Hi(m);else break t;Ds(m),re(18)}}else m.xa=U[1],0<m.xa-m.K&&U[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Mn(T(m.Va,m),6e3));Hn(m.h)<=1&&m.ta&&(m.ta=void 0)}else Xn(m,11)}else if((l.L||m.g==l)&&ba(m),!x(h))for(U=m.Ba.g.parse(h),h=0;h<U.length;h++){let zt=U[h];const $t=zt[0];if(!($t<=m.K))if(m.K=$t,zt=zt[1],m.I==2)if(zt[0]=="c"){m.M=zt[1],m.ba=zt[2];const Re=zt[3];Re!=null&&(m.ka=Re,m.j.info("VER="+m.ka));const li=zt[4];li!=null&&(m.za=li,m.j.info("SVER="+m.za));const bn=zt[5];bn!=null&&typeof bn=="number"&&bn>0&&(_=1.5*bn,m.O=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const En=l.g;if(En){const Is=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Is){var H=_.h;H.g||Is.indexOf("spdy")==-1&&Is.indexOf("quic")==-1&&Is.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(yr(H,H.h),H.h=null))}if(_.G){const Ea=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;Ea&&(_.wa=Ea,Lt(_.J,_.G,Ea))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-l.F,m.j.info("Handshake RTT: "+m.T+"ms")),_=m;var Q=l;if(_.na=$l(_,_.L?_.ba:null,_.W),Q.L){vr(_.h,Q);var gt=Q,ee=_.O;ee&&(gt.H=ee),gt.D&&(zn(gt),Ln(gt)),_.g=Q}else Fl(_);m.i.length>0&&Yn(m)}else zt[0]!="stop"&&zt[0]!="close"||Xn(m,7);else m.I==3&&(zt[0]=="stop"||zt[0]=="close"?zt[0]=="stop"?Xn(m,7):wr(m):zt[0]!="noop"&&m.l&&m.l.qa(zt),m.A=0)}}Dn(4)}catch{}}var oe=class{constructor(l,h){this.g=l,this.map=h}};function mr(l){this.l=l||10,p.PerformanceNavigationTiming?(l=p.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pr(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Hn(l){return l.h?1:l.g?l.g.size:0}function qn(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function yr(l,h){l.g?l.g.add(h):l.h=h}function vr(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}mr.prototype.cancel=function(){if(this.i=_r(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function _r(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.G);return h}return st(l.i)}var Bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function da(l,h){if(l){l=l.split("&");for(let m=0;m<l.length;m++){const _=l[m].indexOf("=");let U,H=null;_>=0?(U=l[m].substring(0,_),H=l[m].substring(_+1)):U=l[m],h(U,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Pe(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;l instanceof Pe?(this.l=l.l,_e(this,l.j),this.o=l.o,this.g=l.g,Ii(this,l.u),this.h=l.h,br(this,Yl(l.i)),this.m=l.m):l&&(h=String(l).match(Bl))?(this.l=!1,_e(this,h[1]||"",!0),this.o=Bn(h[2]||""),this.g=Bn(h[3]||"",!0),Ii(this,h[4]),this.h=Bn(h[5]||"",!0),br(this,h[6]||"",!0),this.m=Bn(h[7]||"")):(this.l=!1,this.i=new ji(null,this.l))}Pe.prototype.toString=function(){const l=[];var h=this.j;h&&l.push(xs(h,ga,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(xs(h,ga,!0),"@"),l.push(si(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&l.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(xs(m,m.charAt(0)=="/"?Er:Vl,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",xs(m,Gl)),l.join("")},Pe.prototype.resolve=function(l){const h=ue(this);let m=!!l.j;m?_e(h,l.j):m=!!l.o,m?h.o=l.o:m=!!l.g,m?h.g=l.g:m=l.u!=null;var _=l.h;if(m)Ii(h,l.u);else if(m=!!l.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var U=h.h.lastIndexOf("/");U!=-1&&(_=h.h.slice(0,U+1)+_)}if(U=_,U==".."||U==".")_="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){_=U.lastIndexOf("/",0)==0,U=U.split("/");const H=[];for(let Q=0;Q<U.length;){const gt=U[Q++];gt=="."?_&&Q==U.length&&H.push(""):gt==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),_&&Q==U.length&&H.push("")):(H.push(gt),_=!0)}_=H.join("/")}else _=U}return m?h.h=_:m=l.i.toString()!=="",m?br(h,Yl(l.i)):m=!!l.m,m&&(h.m=l.m),h};function ue(l){return new Pe(l)}function _e(l,h,m){l.j=m?Bn(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ii(l,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);l.u=h}else l.u=null}function br(l,h,m){h instanceof ji?(l.i=h,pa(l.i,l.l)):(m||(h=xs(h,Mi)),l.i=new ji(h,l.l))}function Lt(l,h,m){l.i.set(h,m)}function As(l){return Lt(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Bn(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xs(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,Le),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Le(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ga=/[#\/\?@]/g,Vl=/[#\?:]/g,Er=/[#\?]/g,Mi=/[#\?@]/g,Gl=/#/g;function ji(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function ze(l){l.g||(l.g=new Map,l.h=0,l.i&&da(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}a=ji.prototype,a.add=function(l,h){ze(this),this.i=null,l=Ui(this,l);let m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function Pl(l,h){ze(l),h=Ui(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Tr(l,h){return ze(l),h=Ui(l,h),l.g.has(h)}a.forEach=function(l,h){ze(this),this.g.forEach(function(m,_){m.forEach(function(U){l.call(h,U,_,this)},this)},this)};function Sr(l,h){ze(l);let m=[];if(typeof h=="string")Tr(l,h)&&(m=m.concat(l.g.get(Ui(l,h))));else for(l=Array.from(l.g.values()),h=0;h<l.length;h++)m=m.concat(l[h]);return m}a.set=function(l,h){return ze(this),this.i=null,l=Ui(this,l),Tr(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},a.get=function(l,h){return l?(l=Sr(this,l),l.length>0?String(l[0]):h):h};function ma(l,h,m){Pl(l,h),m.length>0&&(l.i=null,l.g.set(Ui(l,h),st(m)),l.h+=m.length)}a.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var m=h[_];const U=si(m);m=Sr(this,m);for(let H=0;H<m.length;H++){let Q=U;m[H]!==""&&(Q+="="+si(m[H])),l.push(Q)}}return this.i=l.join("&")};function Yl(l){const h=new ji;return h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),h}function Ui(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function pa(l,h){h&&!l.j&&(ze(l),l.i=null,l.g.forEach(function(m,_){const U=_.toLowerCase();_!=U&&(Pl(this,_),ma(this,U,m))},l)),l.j=h}function yn(l,h){const m=new gn;if(p.Image){const _=new Image;_.onload=P(en,m,"TestLoadImage: loaded",!0,h,_),_.onerror=P(en,m,"TestLoadImage: error",!1,h,_),_.onabort=P(en,m,"TestLoadImage: abort",!1,h,_),_.ontimeout=P(en,m,"TestLoadImage: timeout",!1,h,_),p.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else h(!1)}function Ar(l,h){const m=new gn,_=new AbortController,U=setTimeout(()=>{_.abort(),en(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:_.signal}).then(H=>{clearTimeout(U),H.ok?en(m,"TestPingServer: ok",!0,h):en(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(U),en(m,"TestPingServer: error",!1,h)})}function en(l,h,m,_,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),_(m)}catch{}}function Li(){this.g=new Il}function Vn(l){this.i=l.Sb||null,this.h=l.ab||!1}j(Vn,Ml),Vn.prototype.g=function(){return new Ns(this.i,this.h)};function Ns(l,h){se.call(this),this.H=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}j(Ns,se),a=Ns.prototype,a.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=h,this.readyState=1,vn(this)},a.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(h.body=l),(this.H||p).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},a.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=0},a.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ya(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function ya(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}a.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?zi(this):vn(this),this.readyState==3&&ya(this)}},a.Oa=function(l){this.g&&(this.response=this.responseText=l,zi(this))},a.Na=function(l){this.g&&(this.response=l,zi(this))},a.ga=function(){this.g&&zi(this)};function zi(l){l.readyState=4,l.l=null,l.j=null,l.B=null,vn(l)}a.setRequestHeader=function(l,h){this.A.append(l,h)},a.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function vn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function nn(l){let h="";return Ct(l,function(m,_){h+=_,h+=":",h+=m,h+=`\r
`}),h}function ws(l,h,m){t:{for(_ in m){var _=!1;break t}_=!0}_||(m=nn(m),typeof l=="string"?m!=null&&si(m):Lt(l,h,m))}function Pt(l){se.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}j(Pt,se);var Gn=/^https?$/i,xr=["POST","PUT"];a=Pt.prototype,a.Fa=function(l){this.H=l},a.ea=function(l,h,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gr.g(),this.g.onreadystatechange=B(T(this.Ca,this));try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(H){Cs(this,H);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var U in _)m.set(U,_[U]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const H of _.keys())m.set(H,_.get(H));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(H=>H.toLowerCase()=="content-type"),U=p.FormData&&l instanceof p.FormData,!(Array.prototype.indexOf.call(xr,h,void 0)>=0)||_||U||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,Q]of m)this.g.setRequestHeader(H,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(H){Cs(this,H)}};function Cs(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.o=5,Nr(l),ai(l)}function Nr(l){l.A||(l.A=!0,pe(l,"complete"),pe(l,"error"))}a.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,pe(this,"complete"),pe(this,"abort"),ai(this))},a.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),Pt.Z.N.call(this)},a.Ca=function(){this.u||(this.B||this.v||this.j?Rs(this):this.Xa())},a.Xa=function(){Rs(this)};function Rs(l){if(l.h&&typeof g<"u"){if(l.v&&_n(l)==4)setTimeout(l.Ca.bind(l),0);else if(pe(l,"readystatechange"),_n(l)==4){l.h=!1;try{const H=l.ca();t:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break t;default:h=!1}var m;if(!(m=h)){var _;if(_=H===0){let Q=String(l.D).match(Bl)[1]||null;!Q&&p.self&&p.self.location&&(Q=p.self.location.protocol.slice(0,-1)),_=!Gn.test(Q?Q.toLowerCase():"")}m=_}if(m)pe(l,"complete"),pe(l,"success");else{l.o=6;try{var U=_n(l)>2?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.ca()+"]",Nr(l)}}finally{ai(l)}}}}function ai(l,h){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const m=l.g;l.g=null,h||pe(l,"ready");try{m.onreadystatechange=null}catch{}}}a.isActive=function(){return!!this.g};function _n(l){return l.g?l.g.readyState:0}a.ca=function(){try{return _n(this)>2?this.g.status:-1}catch{return-1}},a.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},a.La=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Iu(h)}};function Se(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ri(l){const h={};l=(l.g&&_n(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(x(l[_]))continue;var m=kl(l[_]);const U=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const H=h[U]||[];h[U]=H,H.push(m)}Ut(h,function(_){return _.join(", ")})}a.ya=function(){return this.o},a.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function ki(l){this.za=0,this.i=[],this.j=new gn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pn("baseRetryDelayMs",5e3,l),this.Za=Pn("retryDelaySeedMs",1e4,l),this.Ta=Pn("forwardChannelMaxRetries",2,l),this.va=Pn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new mr(l&&l.concurrentRequestLimit),this.Ba=new Li,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}a=ki.prototype,a.ka=8,a.I=1,a.connect=function(l,h,m,_){re(0),this.W=l,this.H=h||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.J=$l(this,null,this.W),Yn(this)};function wr(l){if(va(l),l.I==3){var h=l.V++,m=ue(l.J);if(Lt(m,"SID",l.M),Lt(m,"RID",h),Lt(m,"TYPE","terminate"),Os(l,m),h=new mn(l,l.j,h),h.M=2,h.A=As(ue(m)),m=!1,p.navigator&&p.navigator.sendBeacon)try{m=p.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&p.Image&&(new Image().src=h.A,m=!0),m||(h.g=Wl(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ln(h)}Jl(l)}function Hi(l){l.g&&(Rr(l),l.g.cancel(),l.g=null)}function va(l){Hi(l),l.v&&(p.clearTimeout(l.v),l.v=null),ba(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&p.clearTimeout(l.m),l.m=null)}function Yn(l){if(!pr(l.h)&&!l.m){l.m=!0;var h=l.Ea;qt||E(),Rt||(qt(),Rt=!0),S.add(h,l),l.D=0}}function _a(l,h){return Hn(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=h.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Mn(T(l.Ea,l,h),Zl(l,l.D)),l.D++,!0)}a.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const U=new mn(this,this.j,l);let H=this.o;if(this.U&&(H?(H=D(H),J(H,this.U)):H=this.U),this.u!==null||this.R||(U.J=H,H=null),this.S)t:{for(var h=0,m=0;m<this.i.length;m++){e:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break e}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=m;break t}if(h===4096||m===this.i.length-1){h=m+1;break t}}h=1e3}else h=1e3;h=Xl(this,U,h),m=ue(this.J),Lt(m,"RID",l),Lt(m,"CVER",22),this.G&&Lt(m,"X-HTTP-Session-Id",this.G),Os(this,m),H&&(this.R?h="headers="+si(nn(H))+"&"+h:this.u&&ws(m,this.u,H)),yr(this.h,U),this.Ra&&Lt(m,"TYPE","init"),this.S?(Lt(m,"$req",h),Lt(m,"SID","null"),U.U=!0,Un(U,m,null)):Un(U,m,h),this.I=2}}else this.I==3&&(l?Cr(this,l):this.i.length==0||pr(this.h)||Cr(this))};function Cr(l,h){var m;h?m=h.l:m=l.V++;const _=ue(l.J);Lt(_,"SID",l.M),Lt(_,"RID",m),Lt(_,"AID",l.K),Os(l,_),l.u&&l.o&&ws(_,l.u,l.o),m=new mn(l,l.j,m,l.D+1),l.u===null&&(m.J=l.o),h&&(l.i=h.G.concat(l.i)),h=Xl(l,m,1e3),m.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),yr(l.h,m),Un(m,_,h)}function Os(l,h){l.H&&Ct(l.H,function(m,_){Lt(h,_,m)}),l.l&&Ct({},function(m,_){Lt(h,_,m)})}function Xl(l,h,m){m=Math.min(l.i.length,m);const _=l.l?T(l.l.Ka,l.l,l):null;t:{var U=l.i;let gt=-1;for(;;){const ee=["count="+m];gt==-1?m>0?(gt=U[0].g,ee.push("ofs="+gt)):gt=0:ee.push("ofs="+gt);let zt=!0;for(let $t=0;$t<m;$t++){var H=U[$t].g;const Re=U[$t].map;if(H-=gt,H<0)gt=Math.max(0,U[$t].g-100),zt=!1;else try{H="req"+H+"_"||"";try{var Q=Re instanceof Map?Re:Object.entries(Re);for(const[li,bn]of Q){let En=bn;C(bn)&&(En=Di(bn)),ee.push(H+li+"="+encodeURIComponent(En))}}catch(li){throw ee.push(H+"type="+encodeURIComponent("_badmap")),li}}catch{_&&_(Re)}}if(zt){Q=ee.join("&");break t}}Q=void 0}return l=l.i.splice(0,m),h.G=l,Q}function Fl(l){if(!l.g&&!l.v){l.Y=1;var h=l.Da;qt||E(),Rt||(qt(),Rt=!0),S.add(h,l),l.A=0}}function Ds(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Mn(T(l.Da,l),Zl(l,l.A)),l.A++,!0)}a.Da=function(){if(this.v=null,Kl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Mn(T(this.Wa,this),l)}},a.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,re(10),Hi(this),Kl(this))};function Rr(l){l.B!=null&&(p.clearTimeout(l.B),l.B=null)}function Kl(l){l.g=new mn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var h=ue(l.na);Lt(h,"RID","rpc"),Lt(h,"SID",l.M),Lt(h,"AID",l.K),Lt(h,"CI",l.F?"0":"1"),!l.F&&l.ia&&Lt(h,"TO",l.ia),Lt(h,"TYPE","xmlhttp"),Os(l,h),l.u&&l.o&&ws(h,l.u,l.o),l.O&&(l.g.H=l.O);var m=l.g;l=l.ba,m.M=1,m.A=As(ue(h)),m.u=null,m.R=!0,fa(m,l)}a.Va=function(){this.C!=null&&(this.C=null,Hi(this),Ds(this),re(19))};function ba(l){l.C!=null&&(p.clearTimeout(l.C),l.C=null)}function Ql(l,h){var m=null;if(l.g==h){ba(l),Rr(l),l.g=null;var _=2}else if(qn(l.h,h))m=h.G,vr(l.h,h),_=1;else return;if(l.I!=0){if(h.o)if(_==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var U=l.D;_=dr(),pe(_,new In(_,m)),Yn(l)}else Fl(l);else if(U=h.m,U==3||U==0&&h.X>0||!(_==1&&_a(l,h)||_==2&&Ds(l)))switch(m&&m.length>0&&(h=l.h,h.i=h.i.concat(m)),U){case 1:Xn(l,5);break;case 4:Xn(l,10);break;case 3:Xn(l,6);break;default:Xn(l,2)}}}function Zl(l,h){let m=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(m*=2),m*h}function Xn(l,h){if(l.j.info("Error code "+h),h==2){var m=T(l.bb,l),_=l.Ua;const U=!_;_=new Pe(_||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||_e(_,"https"),As(_),U?yn(_.toString(),m):Ar(_.toString(),m)}else re(2);l.I=0,l.l&&l.l.pa(h),Jl(l),va(l)}a.bb=function(l){l?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function Jl(l){if(l.I=0,l.ja=[],l.l){const h=_r(l.h);(h.length!=0||l.i.length!=0)&&(tt(l.ja,h),tt(l.ja,l.i),l.h.i.length=0,st(l.i),l.i.length=0),l.l.oa()}}function $l(l,h,m){var _=m instanceof Pe?ue(m):new Pe(m);if(_.g!="")h&&(_.g=h+"."+_.g),Ii(_,_.u);else{var U=p.location;_=U.protocol,h=h?h+"."+U.hostname:U.hostname,U=+U.port;const H=new Pe(null);_&&_e(H,_),h&&(H.g=h),U&&Ii(H,U),m&&(H.h=m),_=H}return m=l.G,h=l.wa,m&&h&&Lt(_,m,h),Lt(_,"VER",l.ka),Os(l,_),_}function Wl(l,h,m){if(h&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Aa&&!l.ma?new Pt(new Vn({ab:m})):new Pt(l.ma),h.Fa(l.L),h}a.isActive=function(){return!!this.l&&this.l.isActive(this)};function to(){}a=to.prototype,a.ra=function(){},a.qa=function(){},a.pa=function(){},a.oa=function(){},a.isActive=function(){return!0},a.Ka=function(){};function Ce(l,h){se.call(this),this.g=new ki(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(l?l["X-WebChannel-Client-Profile"]=h.sa:l={"X-WebChannel-Client-Profile":h.sa}),this.g.U=l,(l=h&&h.Qb)&&!x(l)&&(this.g.u=l),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.G=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new qi(this)}j(Ce,se),Ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){wr(this.g)},Ce.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.v&&(m={},m.__data__=Di(l),l=m);h.i.push(new oe(h.Ya++,l)),h.I==3&&Yn(h)},Ce.prototype.N=function(){this.g.l=null,delete this.j,wr(this.g),delete this.g,Ce.Z.N.call(this)};function eo(l){Te.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){t:{for(const m in h){l=m;break t}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}j(eo,Te);function no(){We.call(this),this.status=1}j(no,We);function qi(l){this.g=l}j(qi,to),qi.prototype.ra=function(){pe(this.g,"a")},qi.prototype.qa=function(l){pe(this.g,new eo(l))},qi.prototype.pa=function(l){pe(this.g,new no)},qi.prototype.oa=function(){pe(this.g,"b")},Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,ca.NO_ERROR=0,ca.TIMEOUT=8,ca.HTTP_ERROR=6,zl.COMPLETE="complete",Mu.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",se.prototype.listen=se.prototype.J,Pt.prototype.listenOnce=Pt.prototype.K,Pt.prototype.getLastError=Pt.prototype.Ha,Pt.prototype.getLastErrorCode=Pt.prototype.ya,Pt.prototype.getStatus=Pt.prototype.ca,Pt.prototype.getResponseJson=Pt.prototype.La,Pt.prototype.getResponseText=Pt.prototype.la,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Fa}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});const Mp="@firebase/firestore",jp="4.9.3";/**
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
 */class Me{constructor(i){this.uid=i}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(i){return i.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
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
 */const sr=new Nu("@firebase/firestore");function Nn(a,...i){if(sr.logLevel<=Mt.DEBUG){const r=i.map(vh);sr.debug(`Firestore (${Nl}): ${a}`,...r)}}function ny(a,...i){if(sr.logLevel<=Mt.ERROR){const r=i.map(vh);sr.error(`Firestore (${Nl}): ${a}`,...r)}}function CE(a,...i){if(sr.logLevel<=Mt.WARN){const r=i.map(vh);sr.warn(`Firestore (${Nl}): ${a}`,...r)}}function vh(a){if(typeof a=="string")return a;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Tl(a,i,r){let o="Unexpected state";typeof i=="string"?o=i:r=i,iy(a,o,r)}function iy(a,i,r){let o=`FIRESTORE (${Nl}) INTERNAL ASSERTION FAILED: ${i} (ID: ${a.toString(16)})`;if(r!==void 0)try{o+=" CONTEXT: "+JSON.stringify(r)}catch{o+=" CONTEXT: "+r}throw ny(o),new Error(o)}function pl(a,i,r,o){let f="Unexpected state";typeof r=="string"?f=r:o=r,a||iy(i,f,o)}/**
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
 */const Nt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class wt extends Rn{constructor(i,r){super(i,r),this.code=i,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sy{constructor(i,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${i}`)}}class RE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(i,r){i.enqueueRetryable((()=>r(Me.UNAUTHENTICATED)))}shutdown(){}}class OE{constructor(i){this.token=i,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(i,r){this.changeListener=r,i.enqueueRetryable((()=>r(this.token.user)))}shutdown(){this.changeListener=null}}class DE{constructor(i){this.t=i,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(i,r){pl(this.o===void 0,42304);let o=this.i;const f=A=>this.i!==o?(o=this.i,r(A)):Promise.resolve();let g=new yl;this.o=()=>{this.i++,this.currentUser=this.u(),g.resolve(),g=new yl,i.enqueueRetryable((()=>f(this.currentUser)))};const p=()=>{const A=g;i.enqueueRetryable((async()=>{await A.promise,await f(this.currentUser)}))},C=A=>{Nn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=A,this.o&&(this.auth.addAuthTokenListener(this.o),p())};this.t.onInit((A=>C(A))),setTimeout((()=>{if(!this.auth){const A=this.t.getImmediate({optional:!0});A?C(A):(Nn("FirebaseAuthCredentialsProvider","Auth not yet detected"),g.resolve(),g=new yl)}}),0),p()}getToken(){const i=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then((o=>this.i!==i?(Nn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(pl(typeof o.accessToken=="string",31837,{l:o}),new sy(o.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const i=this.auth&&this.auth.getUid();return pl(i===null||typeof i=="string",2055,{h:i}),new Me(i)}}class IE{constructor(i,r,o){this.P=i,this.T=r,this.I=o,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const i=this.R();return i&&this.A.set("Authorization",i),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ME{constructor(i,r,o){this.P=i,this.T=r,this.I=o}getToken(){return Promise.resolve(new IE(this.P,this.T,this.I))}start(i,r){i.enqueueRetryable((()=>r(Me.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Up{constructor(i){this.value=i,this.type="AppCheck",this.headers=new Map,i&&i.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jE{constructor(i,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(i)&&i.settings.appCheckToken&&(this.p=i.settings.appCheckToken)}start(i,r){pl(this.o===void 0,3512);const o=g=>{g.error!=null&&Nn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${g.error.message}`);const p=g.token!==this.m;return this.m=g.token,Nn("FirebaseAppCheckTokenProvider",`Received ${p?"new":"existing"} token.`),p?r(g.token):Promise.resolve()};this.o=g=>{i.enqueueRetryable((()=>o(g)))};const f=g=>{Nn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=g,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((g=>f(g))),setTimeout((()=>{if(!this.appCheck){const g=this.V.getImmediate({optional:!0});g?f(g):Nn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Up(this.p));const i=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(i).then((r=>r?(pl(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new Up(r.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(a){const i=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(a);if(i&&typeof i.getRandomValues=="function")i.getRandomValues(r);else for(let o=0;o<a;o++)r[o]=Math.floor(256*Math.random());return r}/**
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
 */class LE{static newId(){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let o="";for(;o.length<20;){const f=UE(40);for(let g=0;g<f.length;++g)o.length<20&&f[g]<r&&(o+=i.charAt(f[g]%62))}return o}}function ys(a,i){return a<i?-1:a>i?1:0}function zE(a,i){const r=Math.min(a.length,i.length);for(let o=0;o<r;o++){const f=a.charAt(o),g=i.charAt(o);if(f!==g)return Xf(f)===Xf(g)?ys(f,g):Xf(f)?1:-1}return ys(a.length,i.length)}const kE=55296,HE=57343;function Xf(a){const i=a.charCodeAt(0);return i>=kE&&i<=HE}/**
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
 */const Lp="__name__";class Jn{constructor(i,r,o){r===void 0?r=0:r>i.length&&Tl(637,{offset:r,range:i.length}),o===void 0?o=i.length-r:o>i.length-r&&Tl(1746,{length:o,range:i.length-r}),this.segments=i,this.offset=r,this.len=o}get length(){return this.len}isEqual(i){return Jn.comparator(this,i)===0}child(i){const r=this.segments.slice(this.offset,this.limit());return i instanceof Jn?i.forEach((o=>{r.push(o)})):r.push(i),this.construct(r)}limit(){return this.offset+this.length}popFirst(i){return i=i===void 0?1:i,this.construct(this.segments,this.offset+i,this.length-i)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(i){return this.segments[this.offset+i]}isEmpty(){return this.length===0}isPrefixOf(i){if(i.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==i.get(r))return!1;return!0}isImmediateParentOf(i){if(this.length+1!==i.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==i.get(r))return!1;return!0}forEach(i){for(let r=this.offset,o=this.limit();r<o;r++)i(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(i,r){const o=Math.min(i.length,r.length);for(let f=0;f<o;f++){const g=Jn.compareSegments(i.get(f),r.get(f));if(g!==0)return g}return ys(i.length,r.length)}static compareSegments(i,r){const o=Jn.isNumericId(i),f=Jn.isNumericId(r);return o&&!f?-1:!o&&f?1:o&&f?Jn.extractNumericId(i).compare(Jn.extractNumericId(r)):zE(i,r)}static isNumericId(i){return i.startsWith("__id")&&i.endsWith("__")}static extractNumericId(i){return yh.fromString(i.substring(4,i.length-2))}}class xn extends Jn{construct(i,r,o){return new xn(i,r,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...i){const r=[];for(const o of i){if(o.indexOf("//")>=0)throw new wt(Nt.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);r.push(...o.split("/").filter((f=>f.length>0)))}return new xn(r)}static emptyPath(){return new xn([])}}const qE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qs extends Jn{construct(i,r,o){return new Qs(i,r,o)}static isValidIdentifier(i){return qE.test(i)}canonicalString(){return this.toArray().map((i=>(i=i.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qs.isValidIdentifier(i)||(i="`"+i+"`"),i))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lp}static keyField(){return new Qs([Lp])}static fromServerFormat(i){const r=[];let o="",f=0;const g=()=>{if(o.length===0)throw new wt(Nt.INVALID_ARGUMENT,`Invalid field path (${i}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(o),o=""};let p=!1;for(;f<i.length;){const C=i[f];if(C==="\\"){if(f+1===i.length)throw new wt(Nt.INVALID_ARGUMENT,"Path has trailing escape character: "+i);const A=i[f+1];if(A!=="\\"&&A!=="."&&A!=="`")throw new wt(Nt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+i);o+=A,f+=2}else C==="`"?(p=!p,f++):C!=="."||p?(o+=C,f++):(g(),f++)}if(g(),p)throw new wt(Nt.INVALID_ARGUMENT,"Unterminated ` in path: "+i);return new Qs(r)}static emptyPath(){return new Qs([])}}/**
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
 */class Js{constructor(i){this.path=i}static fromPath(i){return new Js(xn.fromString(i))}static fromName(i){return new Js(xn.fromString(i).popFirst(5))}static empty(){return new Js(xn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(i){return this.path.length>=2&&this.path.get(this.path.length-2)===i}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(i){return i!==null&&xn.comparator(this.path,i.path)===0}toString(){return this.path.toString()}static comparator(i,r){return xn.comparator(i.path,r.path)}static isDocumentKey(i){return i.length%2==0}static fromSegments(i){return new Js(new xn(i.slice()))}}function BE(a,i,r,o){if(i===!0&&o===!0)throw new wt(Nt.INVALID_ARGUMENT,`${a} and ${r} cannot be used together.`)}function VE(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}function GE(a){if(a===void 0)return"undefined";if(a===null)return"null";if(typeof a=="string")return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if(typeof a=="number"||typeof a=="boolean")return""+a;if(typeof a=="object"){if(a instanceof Array)return"an array";{const i=(function(o){return o.constructor?o.constructor.name:null})(a);return i?`a custom ${i} object`:"an object"}}return typeof a=="function"?"a function":Tl(12329,{type:typeof a})}function PE(a,i){if("_delegate"in a&&(a=a._delegate),!(a instanceof i)){if(i.name===a.constructor.name)throw new wt(Nt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=GE(a);throw new wt(Nt.INVALID_ARGUMENT,`Expected type '${i.name}', but it was: ${r}`)}}return a}/**
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
 */function ge(a,i){const r={typeString:a};return i&&(r.value=i),r}function wl(a,i){if(!VE(a))throw new wt(Nt.INVALID_ARGUMENT,"JSON must be an object");let r;for(const o in i)if(i[o]){const f=i[o].typeString,g="value"in i[o]?{value:i[o].value}:void 0;if(!(o in a)){r=`JSON missing required field: '${o}'`;break}const p=a[o];if(f&&typeof p!==f){r=`JSON field '${o}' must be a ${f}.`;break}if(g!==void 0&&p!==g.value){r=`Expected '${o}' field to equal '${g.value}'`;break}}if(r)throw new wt(Nt.INVALID_ARGUMENT,r);return!0}/**
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
 */const zp=-62135596800,kp=1e6;class $n{static now(){return $n.fromMillis(Date.now())}static fromDate(i){return $n.fromMillis(i.getTime())}static fromMillis(i){const r=Math.floor(i/1e3),o=Math.floor((i-1e3*r)*kp);return new $n(r,o)}constructor(i,r){if(this.seconds=i,this.nanoseconds=r,r<0)throw new wt(Nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new wt(Nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(i<zp)throw new wt(Nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+i);if(i>=253402300800)throw new wt(Nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kp}_compareTo(i){return this.seconds===i.seconds?ys(this.nanoseconds,i.nanoseconds):ys(this.seconds,i.seconds)}isEqual(i){return i.seconds===this.seconds&&i.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(i){if(wl(i,$n._jsonSchema))return new $n(i.seconds,i.nanoseconds)}valueOf(){const i=this.seconds-zp;return String(i).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$n._jsonSchemaVersion="firestore/timestamp/1.0",$n._jsonSchema={type:ge("string",$n._jsonSchemaVersion),seconds:ge("number"),nanoseconds:ge("number")};function YE(a){return a.name==="IndexedDbTransactionError"}/**
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
 */class XE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(i){this.binaryString=i}static fromBase64String(i){const r=(function(f){try{return atob(f)}catch(g){throw typeof DOMException<"u"&&g instanceof DOMException?new XE("Invalid base64 string: "+g):g}})(i);return new ia(r)}static fromUint8Array(i){const r=(function(f){let g="";for(let p=0;p<f.length;++p)g+=String.fromCharCode(f[p]);return g})(i);return new ia(r)}[Symbol.iterator](){let i=0;return{next:()=>i<this.binaryString.length?{value:this.binaryString.charCodeAt(i++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(r){return btoa(r)})(this.binaryString)}toUint8Array(){return(function(r){const o=new Uint8Array(r.length);for(let f=0;f<r.length;f++)o[f]=r.charCodeAt(f);return o})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(i){return ys(this.binaryString,i.binaryString)}isEqual(i){return this.binaryString===i.binaryString}}ia.EMPTY_BYTE_STRING=new ia("");const ih="(default)";class _u{constructor(i,r){this.projectId=i,this.database=r||ih}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database===ih}isEqual(i){return i instanceof _u&&i.projectId===this.projectId&&i.database===this.database}}/**
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
 */class FE{constructor(i,r=null,o=[],f=[],g=null,p="F",C=null,A=null){this.path=i,this.collectionGroup=r,this.explicitOrderBy=o,this.filters=f,this.limit=g,this.limitType=p,this.startAt=C,this.endAt=A,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function KE(a){return new FE(a)}/**
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
 */var Hp,At;(At=Hp||(Hp={}))[At.OK=0]="OK",At[At.CANCELLED=1]="CANCELLED",At[At.UNKNOWN=2]="UNKNOWN",At[At.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",At[At.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",At[At.NOT_FOUND=5]="NOT_FOUND",At[At.ALREADY_EXISTS=6]="ALREADY_EXISTS",At[At.PERMISSION_DENIED=7]="PERMISSION_DENIED",At[At.UNAUTHENTICATED=16]="UNAUTHENTICATED",At[At.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",At[At.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",At[At.ABORTED=10]="ABORTED",At[At.OUT_OF_RANGE=11]="OUT_OF_RANGE",At[At.UNIMPLEMENTED=12]="UNIMPLEMENTED",At[At.INTERNAL=13]="INTERNAL",At[At.UNAVAILABLE=14]="UNAVAILABLE",At[At.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const QE=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=1048576;function Ff(){return typeof document<"u"?document:null}/**
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
 */class JE{constructor(i,r,o=1e3,f=1.5,g=6e4){this.Mi=i,this.timerId=r,this.d_=o,this.A_=f,this.R_=g,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(i){this.cancel();const r=Math.floor(this.V_+this.y_()),o=Math.max(0,Date.now()-this.f_),f=Math.max(0,r-o);f>0&&Nn("ExponentialBackoff",`Backing off for ${f} ms (base delay: ${this.V_} ms, delay with jitter: ${r} ms, last attempt: ${o} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,f,(()=>(this.f_=Date.now(),i()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class _h{constructor(i,r,o,f,g){this.asyncQueue=i,this.timerId=r,this.targetTimeMs=o,this.op=f,this.removalCallback=g,this.deferred=new yl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((p=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(i,r,o,f,g){const p=Date.now()+o,C=new _h(i,r,p,f,g);return C.start(o),C}start(i){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),i)}skipDelay(){return this.handleDelayElapsed()}cancel(i){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new wt(Nt.CANCELLED,"Operation cancelled"+(i?": "+i:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((i=>this.deferred.resolve(i)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var qp,Bp;(Bp=qp||(qp={})).Ma="default",Bp.Cache="cache";/**
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
 */function $E(a){const i={};return a.timeoutSeconds!==void 0&&(i.timeoutSeconds=a.timeoutSeconds),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="firestore.googleapis.com",Gp=!0;class Pp{constructor(i){if(i.host===void 0){if(i.ssl!==void 0)throw new wt(Nt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ay,this.ssl=Gp}else this.host=i.host,this.ssl=i.ssl??Gp;if(this.isUsingEmulator=i.emulatorOptions!==void 0,this.credentials=i.credentials,this.ignoreUndefinedProperties=!!i.ignoreUndefinedProperties,this.localCache=i.localCache,i.cacheSizeBytes===void 0)this.cacheSizeBytes=QE;else{if(i.cacheSizeBytes!==-1&&i.cacheSizeBytes<ZE)throw new wt(Nt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=i.cacheSizeBytes}BE("experimentalForceLongPolling",i.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",i.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!i.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:i.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!i.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$E(i.experimentalLongPollingOptions??{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new wt(Nt.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new wt(Nt.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new wt(Nt.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!i.useFetchStreams}isEqual(i){return this.host===i.host&&this.ssl===i.ssl&&this.credentials===i.credentials&&this.cacheSizeBytes===i.cacheSizeBytes&&this.experimentalForceLongPolling===i.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===i.experimentalAutoDetectLongPolling&&(function(o,f){return o.timeoutSeconds===f.timeoutSeconds})(this.experimentalLongPollingOptions,i.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===i.ignoreUndefinedProperties&&this.useFetchStreams===i.useFetchStreams}}class ry{constructor(i,r,o,f){this._authCredentials=i,this._appCheckCredentials=r,this._databaseId=o,this._app=f,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new wt(Nt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(i){if(this._settingsFrozen)throw new wt(Nt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pp(i),this._emulatorOptions=i.emulatorOptions||{},i.credentials!==void 0&&(this._authCredentials=(function(o){if(!o)return new RE;switch(o.type){case"firstParty":return new ME(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new wt(Nt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(i.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(r){const o=Vp.get(r);o&&(Nn("ComponentProvider","Removing Datastore"),Vp.delete(r),o.terminate())})(this),Promise.resolve()}}function WE(a,i,r,o={}){var T;a=PE(a,ry);const f=Al(i),g=a._getSettings(),p={...g,emulatorOptions:a._getEmulatorOptions()},C=`${i}:${r}`;f&&(A0(`https://${C}`),x0("Firestore",!0)),g.host!==ay&&g.host!==C&&CE("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const A={...g,host:C,ssl:f,emulatorOptions:o};if(!ps(A,p)&&(a._setSettings(A),o.mockUserToken)){let P,j;if(typeof o.mockUserToken=="string")P=o.mockUserToken,j=Me.MOCK_USER;else{P=M2(o.mockUserToken,(T=a._app)==null?void 0:T.options.projectId);const B=o.mockUserToken.sub||o.mockUserToken.user_id;if(!B)throw new wt(Nt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");j=new Me(B)}a._authCredentials=new OE(new sy(P,j))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(i,r,o){this.converter=r,this._query=o,this.type="query",this.firestore=i}withConverter(i){return new bh(this.firestore,i,this._query)}}class ti{constructor(i,r,o){this.converter=r,this._key=o,this.type="document",this.firestore=i}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Eh(this.firestore,this.converter,this._key.path.popLast())}withConverter(i){return new ti(this.firestore,i,this._key)}toJSON(){return{type:ti._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(i,r,o){if(wl(r,ti._jsonSchema))return new ti(i,o||null,new Js(xn.fromString(r.referencePath)))}}ti._jsonSchemaVersion="firestore/documentReference/1.0",ti._jsonSchema={type:ge("string",ti._jsonSchemaVersion),referencePath:ge("string")};class Eh extends bh{constructor(i,r,o){super(i,r,KE(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const i=this._path.popLast();return i.isEmpty()?null:new ti(this.firestore,null,new Js(i))}withConverter(i){return new Eh(this.firestore,i,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="AsyncQueue";class Xp{constructor(i=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new JE(this,"async_queue_retry"),this._c=()=>{const o=Ff();o&&Nn(Yp,"Visibility state changed to "+o.visibilityState),this.M_.w_()},this.ac=i;const r=Ff();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(i){this.enqueue(i)}enqueueAndForgetEvenWhileRestricted(i){this.uc(),this.cc(i)}enterRestrictedMode(i){if(!this.ec){this.ec=!0,this.sc=i||!1;const r=Ff();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this._c)}}enqueue(i){if(this.uc(),this.ec)return new Promise((()=>{}));const r=new yl;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(i().then(r.resolve,r.reject),r.promise))).then((()=>r.promise))}enqueueRetryable(i){this.enqueueAndForget((()=>(this.Xu.push(i),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(i){if(!YE(i))throw i;Nn(Yp,"Operation failed with retryable error: "+i)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(i){const r=this.ac.then((()=>(this.rc=!0,i().catch((o=>{throw this.nc=o,this.rc=!1,ny("INTERNAL UNHANDLED ERROR: ",Fp(o)),o})).then((o=>(this.rc=!1,o))))));return this.ac=r,r}enqueueAfterDelay(i,r,o){this.uc(),this.oc.indexOf(i)>-1&&(r=0);const f=_h.createAndSchedule(this,i,r,o,(g=>this.hc(g)));return this.tc.push(f),f}uc(){this.nc&&Tl(47125,{Pc:Fp(this.nc)})}verifyOperationInProgress(){}async Tc(){let i;do i=this.ac,await i;while(i!==this.ac)}Ic(i){for(const r of this.tc)if(r.timerId===i)return!0;return!1}Ec(i){return this.Tc().then((()=>{this.tc.sort(((r,o)=>r.targetTimeMs-o.targetTimeMs));for(const r of this.tc)if(r.skipDelay(),i!=="all"&&r.timerId===i)break;return this.Tc()}))}dc(i){this.oc.push(i)}hc(i){const r=this.tc.indexOf(i);this.tc.splice(r,1)}}function Fp(a){let i=a.message||"";return a.stack&&(i=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),i}class tT extends ry{constructor(i,r,o,f){super(i,r,o,f),this.type="firestore",this._queue=new Xp,this._persistenceKey=(f==null?void 0:f.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const i=this._firestoreClient.terminate();this._queue=new Xp(i),this._firestoreClient=void 0,await i}}}function eT(a,i){const r=typeof a=="object"?a:ch(),o=typeof a=="string"?a:ih,f=ra(r,"firestore").getImmediate({identifier:o});if(!f._initialized){const g=D2("firestore");g&&WE(f,...g)}return f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(i){this._byteString=i}static fromBase64String(i){try{return new Si(ia.fromBase64String(i))}catch(r){throw new wt(Nt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(i){return new Si(ia.fromUint8Array(i))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(i){return this._byteString.isEqual(i._byteString)}toJSON(){return{type:Si._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(i){if(wl(i,Si._jsonSchema))return Si.fromBase64String(i.bytes)}}Si._jsonSchemaVersion="firestore/bytes/1.0",Si._jsonSchema={type:ge("string",Si._jsonSchemaVersion),bytes:ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(...i){for(let r=0;r<i.length;++r)if(i[r].length===0)throw new wt(Nt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qs(i)}isEqual(i){return this._internalPath.isEqual(i._internalPath)}}/**
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
 */class $s{constructor(i,r){if(!isFinite(i)||i<-90||i>90)throw new wt(Nt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+i);if(!isFinite(r)||r<-180||r>180)throw new wt(Nt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=i,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(i){return this._lat===i._lat&&this._long===i._long}_compareTo(i){return ys(this._lat,i._lat)||ys(this._long,i._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$s._jsonSchemaVersion}}static fromJSON(i){if(wl(i,$s._jsonSchema))return new $s(i.latitude,i.longitude)}}$s._jsonSchemaVersion="firestore/geoPoint/1.0",$s._jsonSchema={type:ge("string",$s._jsonSchemaVersion),latitude:ge("number"),longitude:ge("number")};/**
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
 */class Ws{constructor(i){this._values=(i||[]).map((r=>r))}toArray(){return this._values.map((i=>i))}isEqual(i){return(function(o,f){if(o.length!==f.length)return!1;for(let g=0;g<o.length;++g)if(o[g]!==f[g])return!1;return!0})(this._values,i._values)}toJSON(){return{type:Ws._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(i){if(wl(i,Ws._jsonSchema)){if(Array.isArray(i.vectorValues)&&i.vectorValues.every((r=>typeof r=="number")))return new Ws(i.vectorValues);throw new wt(Nt.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ws._jsonSchemaVersion="firestore/vectorValue/1.0",Ws._jsonSchema={type:ge("string",Ws._jsonSchemaVersion),vectorValues:ge("object")};const nT=new RegExp("[~\\*/\\[\\]]");function iT(a,i,r){if(i.search(nT)>=0)throw Kp(`Invalid field path (${i}). Paths must not contain '~', '*', '/', '[', or ']'`,a);try{return new ly(...i.split("."))._internalPath}catch{throw Kp(`Invalid field path (${i}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a)}}function Kp(a,i,r,o,f){let g=`Function ${i}() called with invalid data`;g+=". ";let p="";return new wt(Nt.INVALID_ARGUMENT,g+a+p)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(i,r,o,f,g){this._firestore=i,this._userDataWriter=r,this._key=o,this._document=f,this._converter=g}get id(){return this._key.path.lastSegment()}get ref(){return new ti(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const i=new sT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(i)}return this._userDataWriter.convertValue(this._document.data.value)}}get(i){if(this._document){const r=this._document.data.field(uy("DocumentSnapshot.get",i));if(r!==null)return this._userDataWriter.convertValue(r)}}}class sT extends oy{data(){return super.data()}}function uy(a,i){return typeof i=="string"?iT(a,i):i instanceof ly?i._internalPath:i._delegate._internalPath}class ou{constructor(i,r){this.hasPendingWrites=i,this.fromCache=r}isEqual(i){return this.hasPendingWrites===i.hasPendingWrites&&this.fromCache===i.fromCache}}class tr extends oy{constructor(i,r,o,f,g,p){super(i,r,o,f,p),this._firestore=i,this._firestoreImpl=i,this.metadata=g}exists(){return super.exists()}data(i={}){if(this._document){if(this._converter){const r=new cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,i)}return this._userDataWriter.convertValue(this._document.data.value,i.serverTimestamps)}}get(i,r={}){if(this._document){const o=this._document.data.field(uy("DocumentSnapshot.get",i));if(o!==null)return this._userDataWriter.convertValue(o,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new wt(Nt.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const i=this._document,r={};return r.type=tr._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),!i||!i.isValidDocument()||!i.isFoundDocument()?r:(this._userDataWriter.convertObjectMap(i.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),r)}}tr._jsonSchemaVersion="firestore/documentSnapshot/1.0",tr._jsonSchema={type:ge("string",tr._jsonSchemaVersion),bundleSource:ge("string","DocumentSnapshot"),bundleName:ge("string"),bundle:ge("string")};class cu extends tr{data(i={}){return super.data(i)}}class vl{constructor(i,r,o,f){this._firestore=i,this._userDataWriter=r,this._snapshot=f,this.metadata=new ou(f.hasPendingWrites,f.fromCache),this.query=o}get docs(){const i=[];return this.forEach((r=>i.push(r))),i}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(i,r){this._snapshot.docs.forEach((o=>{i.call(r,new cu(this._firestore,this._userDataWriter,o.key,o,new ou(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(i={}){const r=!!i.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new wt(Nt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=(function(f,g){if(f._snapshot.oldDocs.isEmpty()){let p=0;return f._snapshot.docChanges.map((C=>{const A=new cu(f._firestore,f._userDataWriter,C.doc.key,C.doc,new ou(f._snapshot.mutatedKeys.has(C.doc.key),f._snapshot.fromCache),f.query.converter);return C.doc,{type:"added",doc:A,oldIndex:-1,newIndex:p++}}))}{let p=f._snapshot.oldDocs;return f._snapshot.docChanges.filter((C=>g||C.type!==3)).map((C=>{const A=new cu(f._firestore,f._userDataWriter,C.doc.key,C.doc,new ou(f._snapshot.mutatedKeys.has(C.doc.key),f._snapshot.fromCache),f.query.converter);let T=-1,P=-1;return C.type!==0&&(T=p.indexOf(C.doc.key),p=p.delete(C.doc.key)),C.type!==1&&(p=p.add(C.doc),P=p.indexOf(C.doc.key)),{type:aT(C.type),doc:A,oldIndex:T,newIndex:P}}))}})(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new wt(Nt.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const i={};i.type=vl._jsonSchemaVersion,i.bundleSource="QuerySnapshot",i.bundleName=LE.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const r=[],o=[],f=[];return this.docs.forEach((g=>{g._document!==null&&(r.push(g._document),o.push(this._userDataWriter.convertObjectMap(g._document.data.value.mapValue.fields,"previous")),f.push(g.ref.path))})),i.bundle=(this._firestore,this.query._query,i.bundleName,"NOT SUPPORTED"),i}}function aT(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tl(61501,{type:a})}}vl._jsonSchemaVersion="firestore/querySnapshot/1.0",vl._jsonSchema={type:ge("string",vl._jsonSchemaVersion),bundleSource:ge("string","QuerySnapshot"),bundleName:ge("string"),bundle:ge("string")};(function(i,r=!0){(function(f){Nl=f})(rr),ii(new Cn("firestore",((o,{instanceIdentifier:f,options:g})=>{const p=o.getProvider("app").getImmediate(),C=new tT(new DE(o.getProvider("auth-internal")),new jE(p,o.getProvider("app-check-internal")),(function(T,P){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new wt(Nt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(T.options.projectId,P)})(p,f),p);return g={useFetchStreams:r,...g},C._setSettings(g),C}),"PUBLIC").setMultipleInstances(!0)),hn(Mp,jp,i),hn(Mp,jp,"esm2020")})();function cy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rT=cy,fy=new aa("auth","Firebase",cy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Nu("@firebase/auth");function lT(a,...i){bu.logLevel<=Mt.WARN&&bu.warn(`Auth (${rr}): ${a}`,...i)}function fu(a,...i){bu.logLevel<=Mt.ERROR&&bu.error(`Auth (${rr}): ${a}`,...i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(a,...i){throw Th(a,...i)}function ei(a,...i){return Th(a,...i)}function hy(a,i,r){const o={...rT(),[i]:r};return new aa("auth","Firebase",o).create(i,{appName:a.name})}function ta(a){return hy(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Th(a,...i){if(typeof a!="string"){const r=i[0],o=[...i.slice(1)];return o[0]&&(o[0].appName=a.name),a._errorFactory.create(r,...o)}return fy.create(a,...i)}function ft(a,i,...r){if(!a)throw Th(i,...r)}function Ai(a){const i="INTERNAL ASSERTION FAILED: "+a;throw fu(i),new Error(i)}function Ci(a,i){a||Ai(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.href)||""}function oT(){return Qp()==="http:"||Qp()==="https:"}function Qp(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oT()||N0()||"connection"in navigator)?navigator.onLine:!0}function cT(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(i,r){this.shortDelay=i,this.longDelay=r,Ci(r>i,"Short delay should be less than long delay!"),this.isMobile=L2()||k2()}get(){return uT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dy{static initialize(i,r,o){this.fetchImpl=i,r&&(this.headersImpl=r),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dT=new Cl(3e4,6e4);function Ah(a,i){return a.tenantId&&!i.tenantId?{...i,tenantId:a.tenantId}:i}async function lr(a,i,r,o,f={}){return gy(a,f,async()=>{let g={},p={};o&&(i==="GET"?p=o:g={body:JSON.stringify(o)});const C=xl({key:a.config.apiKey,...p}).slice(1),A=await a._getAdditionalHeaders();A["Content-Type"]="application/json",a.languageCode&&(A["X-Firebase-Locale"]=a.languageCode);const T={method:i,headers:A,...g};return z2()||(T.referrerPolicy="no-referrer"),a.emulatorConfig&&Al(a.emulatorConfig.host)&&(T.credentials="include"),dy.fetch()(await my(a,a.config.apiHost,r,C),T)})}async function gy(a,i,r){a._canInitEmulator=!1;const o={...fT,...i};try{const f=new mT(a),g=await Promise.race([r(),f.promise]);f.clearNetworkTimeout();const p=await g.json();if("needConfirmation"in p)throw uu(a,"account-exists-with-different-credential",p);if(g.ok&&!("errorMessage"in p))return p;{const C=g.ok?p.errorMessage:p.error.message,[A,T]=C.split(" : ");if(A==="FEDERATED_USER_ID_ALREADY_LINKED")throw uu(a,"credential-already-in-use",p);if(A==="EMAIL_EXISTS")throw uu(a,"email-already-in-use",p);if(A==="USER_DISABLED")throw uu(a,"user-disabled",p);const P=o[A]||A.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw hy(a,P,T);wi(a,P)}}catch(f){if(f instanceof Rn)throw f;wi(a,"network-request-failed",{message:String(f)})}}async function gT(a,i,r,o,f={}){const g=await lr(a,i,r,o,f);return"mfaPendingCredential"in g&&wi(a,"multi-factor-auth-required",{_serverResponse:g}),g}async function my(a,i,r,o){const f=`${i}${r}?${o}`,g=a,p=g.config.emulator?Sh(a.config,f):`${a.config.apiScheme}://${f}`;return hT.includes(r)&&(await g._persistenceManagerAvailable,g._getPersistenceType()==="COOKIE")?g._getPersistence()._getFinalTarget(p).toString():p}class mT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(i){this.auth=i,this.timer=null,this.promise=new Promise((r,o)=>{this.timer=setTimeout(()=>o(ei(this.auth,"network-request-failed")),dT.get())})}}function uu(a,i,r){const o={appName:a.name};r.email&&(o.email=r.email),r.phoneNumber&&(o.phoneNumber=r.phoneNumber);const f=ei(a,i,o);return f.customData._tokenResponse=r,f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(a,i){return lr(a,"POST","/v1/accounts:delete",i)}async function Eu(a,i){return lr(a,"POST","/v1/accounts:lookup",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(a){if(a)try{const i=new Date(Number(a));if(!isNaN(i.getTime()))return i.toUTCString()}catch{}}async function yT(a,i=!1){const r=Ri(a),o=await r.getIdToken(i),f=xh(o);ft(f&&f.exp&&f.auth_time&&f.iat,r.auth,"internal-error");const g=typeof f.firebase=="object"?f.firebase:void 0,p=g==null?void 0:g.sign_in_provider;return{claims:f,token:o,authTime:_l(Kf(f.auth_time)),issuedAtTime:_l(Kf(f.iat)),expirationTime:_l(Kf(f.exp)),signInProvider:p||null,signInSecondFactor:(g==null?void 0:g.sign_in_second_factor)||null}}function Kf(a){return Number(a)*1e3}function xh(a){const[i,r,o]=a.split(".");if(i===void 0||r===void 0||o===void 0)return fu("JWT malformed, contained fewer than 3 sections"),null;try{const f=b0(r);return f?JSON.parse(f):(fu("Failed to decode base64 JWT payload"),null)}catch(f){return fu("Caught error parsing JWT payload as JSON",f==null?void 0:f.toString()),null}}function Zp(a){const i=xh(a);return ft(i,"internal-error"),ft(typeof i.exp<"u","internal-error"),ft(typeof i.iat<"u","internal-error"),Number(i.exp)-Number(i.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(a,i,r=!1){if(r)return i;try{return await i}catch(o){throw o instanceof Rn&&vT(o)&&a.auth.currentUser===a&&await a.auth.signOut(),o}}function vT({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(i){this.user=i,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(i){if(i){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(i=!1){if(!this.isRunning)return;const r=this.getInterval(i);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(i){(i==null?void 0:i.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Tu(a){var j;const i=a.auth,r=await a.getIdToken(),o=await Sl(a,Eu(i,{idToken:r}));ft(o==null?void 0:o.users.length,i,"internal-error");const f=o.users[0];a._notifyReloadListener(f);const g=(j=f.providerUserInfo)!=null&&j.length?py(f.providerUserInfo):[],p=ET(a.providerData,g),C=a.isAnonymous,A=!(a.email&&f.passwordHash)&&!(p!=null&&p.length),T=C?A:!1,P={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:p,metadata:new ah(f.createdAt,f.lastLoginAt),isAnonymous:T};Object.assign(a,P)}async function bT(a){const i=Ri(a);await Tu(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}function ET(a,i){return[...a.filter(o=>!i.some(f=>f.providerId===o.providerId)),...i]}function py(a){return a.map(({providerId:i,...r})=>({providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(a,i){const r=await gy(a,{},async()=>{const o=xl({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:f,apiKey:g}=a.config,p=await my(a,f,"/v1/token",`key=${g}`),C=await a._getAdditionalHeaders();C["Content-Type"]="application/x-www-form-urlencoded";const A={method:"POST",headers:C,body:o};return a.emulatorConfig&&Al(a.emulatorConfig.host)&&(A.credentials="include"),dy.fetch()(p,A)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function ST(a,i){return lr(a,"POST","/v2/accounts:revokeToken",Ah(a,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(i){ft(i.idToken,"internal-error"),ft(typeof i.idToken<"u","internal-error"),ft(typeof i.refreshToken<"u","internal-error");const r="expiresIn"in i&&typeof i.expiresIn<"u"?Number(i.expiresIn):Zp(i.idToken);this.updateTokensAndExpiration(i.idToken,i.refreshToken,r)}updateFromIdToken(i){ft(i.length!==0,"internal-error");const r=Zp(i);this.updateTokensAndExpiration(i,null,r)}async getToken(i,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(ft(this.refreshToken,i,"user-token-expired"),this.refreshToken?(await this.refresh(i,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(i,r){const{accessToken:o,refreshToken:f,expiresIn:g}=await TT(i,r);this.updateTokensAndExpiration(o,f,Number(g))}updateTokensAndExpiration(i,r,o){this.refreshToken=r||null,this.accessToken=i||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(i,r){const{refreshToken:o,accessToken:f,expirationTime:g}=r,p=new er;return o&&(ft(typeof o=="string","internal-error",{appName:i}),p.refreshToken=o),f&&(ft(typeof f=="string","internal-error",{appName:i}),p.accessToken=f),g&&(ft(typeof g=="number","internal-error",{appName:i}),p.expirationTime=g),p}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(i){this.accessToken=i.accessToken,this.refreshToken=i.refreshToken,this.expirationTime=i.expirationTime}_clone(){return Object.assign(new er,this.toJSON())}_performRefresh(){return Ai("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(a,i){ft(typeof a=="string"||typeof a>"u","internal-error",{appName:i})}class wn{constructor({uid:i,auth:r,stsTokenManager:o,...f}){this.providerId="firebase",this.proactiveRefresh=new _T(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new ah(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(i){const r=await Sl(this,this.stsTokenManager.getToken(this.auth,i));return ft(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(i){return yT(this,i)}reload(){return bT(this)}_assign(i){this!==i&&(ft(this.uid===i.uid,this.auth,"internal-error"),this.displayName=i.displayName,this.photoURL=i.photoURL,this.email=i.email,this.emailVerified=i.emailVerified,this.phoneNumber=i.phoneNumber,this.isAnonymous=i.isAnonymous,this.tenantId=i.tenantId,this.providerData=i.providerData.map(r=>({...r})),this.metadata._copy(i.metadata),this.stsTokenManager._assign(i.stsTokenManager))}_clone(i){const r=new wn({...this,auth:i,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(i){ft(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=i,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(i){this.reloadListener?this.reloadListener(i):this.reloadUserInfo=i}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(i,r=!1){let o=!1;i.idToken&&i.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(i),o=!0),r&&await Tu(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(ta(this.auth));const i=await this.getIdToken();return await Sl(this,pT(this.auth,{idToken:i})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(i=>({...i})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(i,r){const o=r.displayName??void 0,f=r.email??void 0,g=r.phoneNumber??void 0,p=r.photoURL??void 0,C=r.tenantId??void 0,A=r._redirectEventId??void 0,T=r.createdAt??void 0,P=r.lastLoginAt??void 0,{uid:j,emailVerified:B,isAnonymous:st,providerData:tt,stsTokenManager:nt}=r;ft(j&&nt,i,"internal-error");const lt=er.fromJSON(this.name,nt);ft(typeof j=="string",i,"internal-error"),us(o,i.name),us(f,i.name),ft(typeof B=="boolean",i,"internal-error"),ft(typeof st=="boolean",i,"internal-error"),us(g,i.name),us(p,i.name),us(C,i.name),us(A,i.name),us(T,i.name),us(P,i.name);const rt=new wn({uid:j,auth:i,email:f,emailVerified:B,displayName:o,isAnonymous:st,photoURL:p,phoneNumber:g,tenantId:C,stsTokenManager:lt,createdAt:T,lastLoginAt:P});return tt&&Array.isArray(tt)&&(rt.providerData=tt.map(it=>({...it}))),A&&(rt._redirectEventId=A),rt}static async _fromIdTokenResponse(i,r,o=!1){const f=new er;f.updateFromServerResponse(r);const g=new wn({uid:r.localId,auth:i,stsTokenManager:f,isAnonymous:o});return await Tu(g),g}static async _fromGetAccountInfoResponse(i,r,o){const f=r.users[0];ft(f.localId!==void 0,"internal-error");const g=f.providerUserInfo!==void 0?py(f.providerUserInfo):[],p=!(f.email&&f.passwordHash)&&!(g!=null&&g.length),C=new er;C.updateFromIdToken(o);const A=new wn({uid:f.localId,auth:i,stsTokenManager:C,isAnonymous:p}),T={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:g,metadata:new ah(f.createdAt,f.lastLoginAt),isAnonymous:!(f.email&&f.passwordHash)&&!(g!=null&&g.length)};return Object.assign(A,T),A}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new Map;function xi(a){Ci(a instanceof Function,"Expected a class definition");let i=Jp.get(a);return i?(Ci(i instanceof a,"Instance stored in cache mismatched with class"),i):(i=new a,Jp.set(a,i),i)}/**
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
 */class yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(i,r){this.storage[i]=r}async _get(i){const r=this.storage[i];return r===void 0?null:r}async _remove(i){delete this.storage[i]}_addListener(i,r){}_removeListener(i,r){}}yy.type="NONE";const $p=yy;/**
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
 */function hu(a,i,r){return`firebase:${a}:${i}:${r}`}class nr{constructor(i,r,o){this.persistence=i,this.auth=r,this.userKey=o;const{config:f,name:g}=this.auth;this.fullUserKey=hu(this.userKey,f.apiKey,g),this.fullPersistenceKey=hu("persistence",f.apiKey,g),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(i){return this.persistence._set(this.fullUserKey,i.toJSON())}async getCurrentUser(){const i=await this.persistence._get(this.fullUserKey);if(!i)return null;if(typeof i=="string"){const r=await Eu(this.auth,{idToken:i}).catch(()=>{});return r?wn._fromGetAccountInfoResponse(this.auth,r,i):null}return wn._fromJSON(this.auth,i)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(i){if(this.persistence===i)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=i,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(i,r,o="authUser"){if(!r.length)return new nr(xi($p),i,o);const f=(await Promise.all(r.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let g=f[0]||xi($p);const p=hu(o,i.config.apiKey,i.name);let C=null;for(const T of r)try{const P=await T._get(p);if(P){let j;if(typeof P=="string"){const B=await Eu(i,{idToken:P}).catch(()=>{});if(!B)break;j=await wn._fromGetAccountInfoResponse(i,B,P)}else j=wn._fromJSON(i,P);T!==g&&(C=j),g=T;break}}catch{}const A=f.filter(T=>T._shouldAllowMigration);return!g._shouldAllowMigration||!A.length?new nr(g,i,o):(g=A[0],C&&await g._set(p,C.toJSON()),await Promise.all(r.map(async T=>{if(T!==g)try{await T._remove(p)}catch{}})),new nr(g,i,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(a){const i=a.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(Ey(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";if(i.includes("edge/"))return"Edge";if(vy(i))return"Firefox";if(i.includes("silk/"))return"Silk";if(Sy(i))return"Blackberry";if(Ay(i))return"Webos";if(_y(i))return"Safari";if((i.includes("chrome/")||by(i))&&!i.includes("edge/"))return"Chrome";if(Ty(i))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=a.match(r);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function vy(a=Ue()){return/firefox\//i.test(a)}function _y(a=Ue()){const i=a.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}function by(a=Ue()){return/crios\//i.test(a)}function Ey(a=Ue()){return/iemobile/i.test(a)}function Ty(a=Ue()){return/android/i.test(a)}function Sy(a=Ue()){return/blackberry/i.test(a)}function Ay(a=Ue()){return/webos/i.test(a)}function Nh(a=Ue()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function AT(a=Ue()){var i;return Nh(a)&&!!((i=window.navigator)!=null&&i.standalone)}function xT(){return H2()&&document.documentMode===10}function xy(a=Ue()){return Nh(a)||Ty(a)||Ay(a)||Sy(a)||/windows phone/i.test(a)||Ey(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(a,i=[]){let r;switch(a){case"Browser":r=Wp(Ue());break;case"Worker":r=`${Wp(Ue())}-${a}`;break;default:r=a}const o=i.length?i.join(","):"FirebaseCore-web";return`${r}/JsCore/${rr}/${o}`}/**
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
 */class NT{constructor(i){this.auth=i,this.queue=[]}pushCallback(i,r){const o=g=>new Promise((p,C)=>{try{const A=i(g);p(A)}catch(A){C(A)}});o.onAbort=r,this.queue.push(o);const f=this.queue.length-1;return()=>{this.queue[f]=()=>Promise.resolve()}}async runMiddleware(i){if(this.auth.currentUser===i)return;const r=[];try{for(const o of this.queue)await o(i),o.onAbort&&r.push(o.onAbort)}catch(o){r.reverse();for(const f of r)try{f()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
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
 */async function wT(a,i={}){return lr(a,"GET","/v2/passwordPolicy",Ah(a,i))}/**
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
 */const CT=6;class RT{constructor(i){var o;const r=i.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??CT,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=i.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((o=i.allowedNonAlphanumericCharacters)==null?void 0:o.join(""))??"",this.forceUpgradeOnSignin=i.forceUpgradeOnSignin??!1,this.schemaVersion=i.schemaVersion}validatePassword(i){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(i,r),this.validatePasswordCharacterOptions(i,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(i,r){const o=this.customStrengthOptions.minPasswordLength,f=this.customStrengthOptions.maxPasswordLength;o&&(r.meetsMinPasswordLength=i.length>=o),f&&(r.meetsMaxPasswordLength=i.length<=f)}validatePasswordCharacterOptions(i,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let o;for(let f=0;f<i.length;f++)o=i.charAt(f),this.updatePasswordCharacterOptionsStatuses(r,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(i,r,o,f,g){this.customStrengthOptions.containsLowercaseLetter&&(i.containsLowercaseLetter||(i.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(i.containsUppercaseLetter||(i.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(i.containsNumericCharacter||(i.containsNumericCharacter=f)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(i.containsNonAlphanumericCharacter||(i.containsNonAlphanumericCharacter=g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(i,r,o,f){this.app=i,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=o,this.config=f,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t0(this),this.idTokenSubscription=new t0(this),this.beforeStateQueue=new NT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=i.name,this.clientVersion=f.sdkClientVersion,this._persistenceManagerAvailable=new Promise(g=>this._resolvePersistenceManagerAvailable=g)}_initializeWithPersistence(i,r){return r&&(this._popupRedirectResolver=xi(r)),this._initializationPromise=this.queue(async()=>{var o,f,g;if(!this._deleted&&(this.persistenceManager=await nr.create(this,i),(o=this._resolvePersistenceManagerAvailable)==null||o.call(this),!this._deleted)){if((f=this._popupRedirectResolver)!=null&&f._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((g=this.currentUser)==null?void 0:g.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const i=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!i)){if(this.currentUser&&i&&this.currentUser.uid===i.uid){this._currentUser._assign(i),await this.currentUser.getIdToken();return}await this._updateCurrentUser(i,!0)}}async initializeCurrentUserFromIdToken(i){try{const r=await Eu(this,{idToken:i}),o=await wn._fromGetAccountInfoResponse(this,r,i);await this.directlySetCurrentUser(o)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(i){var g;if(Wn(this.app)){const p=this.app.settings.authIdToken;return p?new Promise(C=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(p).then(C,C))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,f=!1;if(i&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const p=(g=this.redirectUser)==null?void 0:g._redirectEventId,C=o==null?void 0:o._redirectEventId,A=await this.tryRedirectSignIn(i);(!p||p===C)&&(A!=null&&A.user)&&(o=A.user,f=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(f)try{await this.beforeStateQueue.runMiddleware(o)}catch(p){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(p))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ft(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(i){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,i,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(i){try{await Tu(i)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(i)}useDeviceLanguage(){this.languageCode=cT()}async _delete(){this._deleted=!0}async updateCurrentUser(i){if(Wn(this.app))return Promise.reject(ta(this));const r=i?Ri(i):null;return r&&ft(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(i,r=!1){if(!this._deleted)return i&&ft(this.tenantId===i.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(i),this.queue(async()=>{await this.directlySetCurrentUser(i),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(ta(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(i){return Wn(this.app)?Promise.reject(ta(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xi(i))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(i){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(i)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const i=await wT(this),r=new RT(i);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(i){this._errorFactory=new aa("auth","Firebase",i())}onAuthStateChanged(i,r,o){return this.registerStateListener(this.authStateSubscription,i,r,o)}beforeAuthStateChanged(i,r){return this.beforeStateQueue.pushCallback(i,r)}onIdTokenChanged(i,r,o){return this.registerStateListener(this.idTokenSubscription,i,r,o)}authStateReady(){return new Promise((i,r)=>{if(this.currentUser)i();else{const o=this.onAuthStateChanged(()=>{o(),i()},r)}})}async revokeAccessToken(i){if(this.currentUser){const r=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:i,idToken:r};this.tenantId!=null&&(o.tenantId=this.tenantId),await ST(this,o)}}toJSON(){var i;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(i=this._currentUser)==null?void 0:i.toJSON()}}async _setRedirectUser(i,r){const o=await this.getOrInitRedirectPersistenceManager(r);return i===null?o.removeCurrentUser():o.setCurrentUser(i)}async getOrInitRedirectPersistenceManager(i){if(!this.redirectPersistenceManager){const r=i&&xi(i)||this._popupRedirectResolver;ft(r,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[xi(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(i){var r,o;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)==null?void 0:r._redirectEventId)===i?this._currentUser:((o=this.redirectUser)==null?void 0:o._redirectEventId)===i?this.redirectUser:null}async _persistUserIfCurrent(i){if(i===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(i))}_notifyListenersIfCurrent(i){i===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=((r=this.currentUser)==null?void 0:r.uid)??null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(i,r,o,f){if(this._deleted)return()=>{};const g=typeof r=="function"?r:r.next.bind(r);let p=!1;const C=this._isInitialized?Promise.resolve():this._initializationPromise;if(ft(C,this,"internal-error"),C.then(()=>{p||g(this.currentUser)}),typeof r=="function"){const A=i.addObserver(r,o,f);return()=>{p=!0,A()}}else{const A=i.addObserver(r);return()=>{p=!0,A()}}}async directlySetCurrentUser(i){this.currentUser&&this.currentUser!==i&&this._currentUser._stopProactiveRefresh(),i&&this.isProactiveRefreshEnabled&&i._startProactiveRefresh(),this.currentUser=i,i?await this.assertedPersistence.setCurrentUser(i):await this.assertedPersistence.removeCurrentUser()}queue(i){return this.operations=this.operations.then(i,i),this.operations}get assertedPersistence(){return ft(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(i){!i||this.frameworks.includes(i)||(this.frameworks.push(i),this.frameworks.sort(),this.clientVersion=Ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var f;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((f=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:f.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var r;if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((r=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getToken());return i!=null&&i.error&&lT(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function wh(a){return Ri(a)}class t0{constructor(i){this.auth=i,this.observer=null,this.addObserver=Y2(r=>this.observer=r)}get next(){return ft(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DT(a){Ch=a}function IT(a){return Ch.loadJS(a)}function MT(){return Ch.gapiScript}function jT(a){return`__${a}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(a,i){const r=ra(a,"auth");if(r.isInitialized()){const f=r.getImmediate(),g=r.getOptions();if(ps(g,i??{}))return f;wi(f,"already-initialized")}return r.initialize({options:i})}function LT(a,i){const r=(i==null?void 0:i.persistence)||[],o=(Array.isArray(r)?r:[r]).map(xi);i!=null&&i.errorMap&&a._updateErrorMap(i.errorMap),a._initializeWithPersistence(o,i==null?void 0:i.popupRedirectResolver)}function zT(a,i,r){const o=wh(a);ft(/^https?:\/\//.test(i),o,"invalid-emulator-scheme");const f=!1,g=wy(i),{host:p,port:C}=kT(i),A=C===null?"":`:${C}`,T={url:`${g}//${p}${A}/`},P=Object.freeze({host:p,port:C,protocol:g.replace(":",""),options:Object.freeze({disableWarnings:f})});if(!o._canInitEmulator){ft(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),ft(ps(T,o.config.emulator)&&ps(P,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=T,o.emulatorConfig=P,o.settings.appVerificationDisabledForTesting=!0,Al(p)?(A0(`${g}//${p}${A}`),x0("Auth",!0)):HT()}function wy(a){const i=a.indexOf(":");return i<0?"":a.substr(0,i+1)}function kT(a){const i=wy(a),r=/(\/\/)?([^?#/]+)/.exec(a.substr(i.length));if(!r)return{host:"",port:null};const o=r[2].split("@").pop()||"",f=/^(\[[^\]]+\])(:|$)/.exec(o);if(f){const g=f[1];return{host:g,port:e0(o.substr(g.length+1))}}else{const[g,p]=o.split(":");return{host:g,port:e0(p)}}}function e0(a){if(!a)return null;const i=Number(a);return isNaN(i)?null:i}function HT(){function a(){const i=document.createElement("p"),r=i.style;i.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",i.classList.add("firebase-emulator-warning"),document.body.appendChild(i)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(i,r){this.providerId=i,this.signInMethod=r}toJSON(){return Ai("not implemented")}_getIdTokenResponse(i){return Ai("not implemented")}_linkToIdToken(i,r){return Ai("not implemented")}_getReauthenticationResolver(i){return Ai("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(a,i){return gT(a,"POST","/v1/accounts:signInWithIdp",Ah(a,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="http://localhost";class sa extends Cy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(i){const r=new sa(i.providerId,i.signInMethod);return i.idToken||i.accessToken?(i.idToken&&(r.idToken=i.idToken),i.accessToken&&(r.accessToken=i.accessToken),i.nonce&&!i.pendingToken&&(r.nonce=i.nonce),i.pendingToken&&(r.pendingToken=i.pendingToken)):i.oauthToken&&i.oauthTokenSecret?(r.accessToken=i.oauthToken,r.secret=i.oauthTokenSecret):wi("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(i){const r=typeof i=="string"?JSON.parse(i):i,{providerId:o,signInMethod:f,...g}=r;if(!o||!f)return null;const p=new sa(o,f);return p.idToken=g.idToken||void 0,p.accessToken=g.accessToken||void 0,p.secret=g.secret,p.nonce=g.nonce,p.pendingToken=g.pendingToken||null,p}_getIdTokenResponse(i){const r=this.buildRequest();return ir(i,r)}_linkToIdToken(i,r){const o=this.buildRequest();return o.idToken=r,ir(i,o)}_getReauthenticationResolver(i){const r=this.buildRequest();return r.autoCreate=!1,ir(i,r)}buildRequest(){const i={requestUri:qT,returnSecureToken:!0};if(this.pendingToken)i.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),i.postBody=xl(r)}return i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(i){this.providerId=i,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(i){this.defaultLanguageCode=i}setCustomParameters(i){return this.customParameters=i,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rl extends Ry{constructor(){super(...arguments),this.scopes=[]}addScope(i){return this.scopes.includes(i)||this.scopes.push(i),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ar{constructor(i){this.user=i.user,this.providerId=i.providerId,this._tokenResponse=i._tokenResponse,this.operationType=i.operationType}static async _fromIdTokenResponse(i,r,o,f=!1){const g=await wn._fromIdTokenResponse(i,o,f),p=n0(o);return new ar({user:g,providerId:p,_tokenResponse:o,operationType:r})}static async _forOperation(i,r,o){await i._updateTokensIfNecessary(o,!0);const f=n0(o);return new ar({user:i,providerId:f,_tokenResponse:o,operationType:r})}}function n0(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Rn{constructor(i,r,o,f){super(r.code,r.message),this.operationType=o,this.user=f,Object.setPrototypeOf(this,Su.prototype),this.customData={appName:i.name,tenantId:i.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(i,r,o,f){return new Su(i,r,o,f)}}function Oy(a,i,r,o){return(i==="reauthenticate"?r._getReauthenticationResolver(a):r._getIdTokenResponse(a)).catch(g=>{throw g.code==="auth/multi-factor-auth-required"?Su._fromErrorAndOperation(a,g,i,o):g})}async function BT(a,i,r=!1){const o=await Sl(a,i._linkToIdToken(a.auth,await a.getIdToken()),r);return ar._forOperation(a,"link",o)}/**
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
 */async function VT(a,i,r=!1){const{auth:o}=a;if(Wn(o.app))return Promise.reject(ta(o));const f="reauthenticate";try{const g=await Sl(a,Oy(o,f,i,a),r);ft(g.idToken,o,"internal-error");const p=xh(g.idToken);ft(p,o,"internal-error");const{sub:C}=p;return ft(a.uid===C,o,"user-mismatch"),ar._forOperation(a,f,g)}catch(g){throw(g==null?void 0:g.code)==="auth/user-not-found"&&wi(o,"user-mismatch"),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(a,i,r=!1){if(Wn(a.app))return Promise.reject(ta(a));const o="signIn",f=await Oy(a,o,i),g=await ar._fromIdTokenResponse(a,o,f);return r||await a._updateCurrentUser(g.user),g}function PT(a,i,r,o){return Ri(a).onIdTokenChanged(i,r,o)}function YT(a,i,r){return Ri(a).beforeAuthStateChanged(i,r)}const Au="__sak";/**
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
 */class Dy{constructor(i,r){this.storageRetriever=i,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(i,r){return this.storage.setItem(i,JSON.stringify(r)),Promise.resolve()}_get(i){const r=this.storage.getItem(i);return Promise.resolve(r?JSON.parse(r):null)}_remove(i){return this.storage.removeItem(i),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=1e3,FT=10;class Iy extends Dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(i,r)=>this.onStorageEvent(i,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xy(),this._shouldAllowMigration=!0}forAllChangedKeys(i){for(const r of Object.keys(this.listeners)){const o=this.storage.getItem(r),f=this.localCache[r];o!==f&&i(r,f,o)}}onStorageEvent(i,r=!1){if(!i.key){this.forAllChangedKeys((p,C,A)=>{this.notifyListeners(p,A)});return}const o=i.key;r?this.detachListener():this.stopPolling();const f=()=>{const p=this.storage.getItem(o);!r&&this.localCache[o]===p||this.notifyListeners(o,p)},g=this.storage.getItem(o);xT()&&g!==i.newValue&&i.newValue!==i.oldValue?setTimeout(f,FT):f()}notifyListeners(i,r){this.localCache[i]=r;const o=this.listeners[i];if(o)for(const f of Array.from(o))f(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((i,r,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:i,oldValue:r,newValue:o}),!0)})},XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(i,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[i]||(this.listeners[i]=new Set,this.localCache[i]=this.storage.getItem(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(i,r){await super._set(i,r),this.localCache[i]=JSON.stringify(r)}async _get(i){const r=await super._get(i);return this.localCache[i]=JSON.stringify(r),r}async _remove(i){await super._remove(i),delete this.localCache[i]}}Iy.type="LOCAL";const KT=Iy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My extends Dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(i,r){}_removeListener(i,r){}}My.type="SESSION";const jy=My;/**
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
 */function QT(a){return Promise.all(a.map(async i=>{try{return{fulfilled:!0,value:await i}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Ru{constructor(i){this.eventTarget=i,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(i){const r=this.receivers.find(f=>f.isListeningto(i));if(r)return r;const o=new Ru(i);return this.receivers.push(o),o}isListeningto(i){return this.eventTarget===i}async handleEvent(i){const r=i,{eventId:o,eventType:f,data:g}=r.data,p=this.handlersMap[f];if(!(p!=null&&p.size))return;r.ports[0].postMessage({status:"ack",eventId:o,eventType:f});const C=Array.from(p).map(async T=>T(r.origin,g)),A=await QT(C);r.ports[0].postMessage({status:"done",eventId:o,eventType:f,response:A})}_subscribe(i,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[i]||(this.handlersMap[i]=new Set),this.handlersMap[i].add(r)}_unsubscribe(i,r){this.handlersMap[i]&&r&&this.handlersMap[i].delete(r),(!r||this.handlersMap[i].size===0)&&delete this.handlersMap[i],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZT{constructor(i){this.target=i,this.handlers=new Set}removeMessageHandler(i){i.messageChannel&&(i.messageChannel.port1.removeEventListener("message",i.onMessage),i.messageChannel.port1.close()),this.handlers.delete(i)}async _send(i,r,o=50){const f=typeof MessageChannel<"u"?new MessageChannel:null;if(!f)throw new Error("connection_unavailable");let g,p;return new Promise((C,A)=>{const T=Rh("",20);f.port1.start();const P=setTimeout(()=>{A(new Error("unsupported_event"))},o);p={messageChannel:f,onMessage(j){const B=j;if(B.data.eventId===T)switch(B.data.status){case"ack":clearTimeout(P),g=setTimeout(()=>{A(new Error("timeout"))},3e3);break;case"done":clearTimeout(g),C(B.data.response);break;default:clearTimeout(P),clearTimeout(g),A(new Error("invalid_response"));break}}},this.handlers.add(p),f.port1.addEventListener("message",p.onMessage),this.target.postMessage({eventType:i,eventId:T,data:r},[f.port2])}).finally(()=>{p&&this.removeMessageHandler(p)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){return window}function JT(a){ni().location.href=a}/**
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
 */function Uy(){return typeof ni().WorkerGlobalScope<"u"&&typeof ni().importScripts=="function"}async function $T(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WT(){var a;return((a=navigator==null?void 0:navigator.serviceWorker)==null?void 0:a.controller)||null}function tS(){return Uy()?self:null}/**
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
 */const Ly="firebaseLocalStorageDb",eS=1,xu="firebaseLocalStorage",zy="fbase_key";class Ol{constructor(i){this.request=i}toPromise(){return new Promise((i,r)=>{this.request.addEventListener("success",()=>{i(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Ou(a,i){return a.transaction([xu],i?"readwrite":"readonly").objectStore(xu)}function nS(){const a=indexedDB.deleteDatabase(Ly);return new Ol(a).toPromise()}function rh(){const a=indexedDB.open(Ly,eS);return new Promise((i,r)=>{a.addEventListener("error",()=>{r(a.error)}),a.addEventListener("upgradeneeded",()=>{const o=a.result;try{o.createObjectStore(xu,{keyPath:zy})}catch(f){r(f)}}),a.addEventListener("success",async()=>{const o=a.result;o.objectStoreNames.contains(xu)?i(o):(o.close(),await nS(),i(await rh()))})})}async function i0(a,i,r){const o=Ou(a,!0).put({[zy]:i,value:r});return new Ol(o).toPromise()}async function iS(a,i){const r=Ou(a,!1).get(i),o=await new Ol(r).toPromise();return o===void 0?null:o.value}function s0(a,i){const r=Ou(a,!0).delete(i);return new Ol(r).toPromise()}const sS=800,aS=3;class ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rh(),this.db)}async _withRetries(i){let r=0;for(;;)try{const o=await this._openDb();return await i(o)}catch(o){if(r++>aS)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(tS()),this.receiver._subscribe("keyChanged",async(i,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(i,r)=>["keyChanged"])}async initializeSender(){var r,o;if(this.activeServiceWorker=await $T(),!this.activeServiceWorker)return;this.sender=new ZT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(r=i[0])!=null&&r.fulfilled&&(o=i[0])!=null&&o.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(i){if(!(!this.sender||!this.activeServiceWorker||WT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:i},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const i=await rh();return await i0(i,Au,"1"),await s0(i,Au),!0}catch{}return!1}async _withPendingWrite(i){this.pendingWrites++;try{await i()}finally{this.pendingWrites--}}async _set(i,r){return this._withPendingWrite(async()=>(await this._withRetries(o=>i0(o,i,r)),this.localCache[i]=r,this.notifyServiceWorker(i)))}async _get(i){const r=await this._withRetries(o=>iS(o,i));return this.localCache[i]=r,r}async _remove(i){return this._withPendingWrite(async()=>(await this._withRetries(r=>s0(r,i)),delete this.localCache[i],this.notifyServiceWorker(i)))}async _poll(){const i=await this._withRetries(f=>{const g=Ou(f,!1).getAll();return new Ol(g).toPromise()});if(!i)return[];if(this.pendingWrites!==0)return[];const r=[],o=new Set;if(i.length!==0)for(const{fbase_key:f,value:g}of i)o.add(f),JSON.stringify(this.localCache[f])!==JSON.stringify(g)&&(this.notifyListeners(f,g),r.push(f));for(const f of Object.keys(this.localCache))this.localCache[f]&&!o.has(f)&&(this.notifyListeners(f,null),r.push(f));return r}notifyListeners(i,r){this.localCache[i]=r;const o=this.listeners[i];if(o)for(const f of Array.from(o))f(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(i,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[i]||(this.listeners[i]=new Set,this._get(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ky.type="LOCAL";const rS=ky;new Cl(3e4,6e4);/**
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
 */function lS(a,i){return i?xi(i):(ft(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
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
 */class Oh extends Cy{constructor(i){super("custom","custom"),this.params=i}_getIdTokenResponse(i){return ir(i,this._buildIdpRequest())}_linkToIdToken(i,r){return ir(i,this._buildIdpRequest(r))}_getReauthenticationResolver(i){return ir(i,this._buildIdpRequest())}_buildIdpRequest(i){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return i&&(r.idToken=i),r}}function oS(a){return GT(a.auth,new Oh(a),a.bypassAuthState)}function uS(a){const{auth:i,user:r}=a;return ft(r,i,"internal-error"),VT(r,new Oh(a),a.bypassAuthState)}async function cS(a){const{auth:i,user:r}=a;return ft(r,i,"internal-error"),BT(r,new Oh(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(i,r,o,f,g=!1){this.auth=i,this.resolver=o,this.user=f,this.bypassAuthState=g,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(i,r)=>{this.pendingPromise={resolve:i,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(i){const{urlResponse:r,sessionId:o,postBody:f,tenantId:g,error:p,type:C}=i;if(p){this.reject(p);return}const A={auth:this.auth,requestUri:r,sessionId:o,tenantId:g||void 0,postBody:f||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(C)(A))}catch(T){this.reject(T)}}onError(i){this.reject(i)}getIdpTask(i){switch(i){case"signInViaPopup":case"signInViaRedirect":return oS;case"linkViaPopup":case"linkViaRedirect":return cS;case"reauthViaPopup":case"reauthViaRedirect":return uS;default:wi(this.auth,"internal-error")}}resolve(i){Ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(i),this.unregisterAndCleanUp()}reject(i){Ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(i),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=new Cl(2e3,1e4);class $a extends Hy{constructor(i,r,o,f,g){super(i,r,f,g),this.provider=o,this.authWindow=null,this.pollId=null,$a.currentPopupAction&&$a.currentPopupAction.cancel(),$a.currentPopupAction=this}async executeNotNull(){const i=await this.execute();return ft(i,this.auth,"internal-error"),i}async onExecution(){Ci(this.filter.length===1,"Popup operations only handle one event");const i=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],i),this.authWindow.associatedEvent=i,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(ei(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var i;return((i=this.authWindow)==null?void 0:i.associatedEvent)||null}cancel(){this.reject(ei(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$a.currentPopupAction=null}pollUserCancellation(){const i=()=>{var r,o;if((o=(r=this.authWindow)==null?void 0:r.window)!=null&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ei(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(i,fS.get())};i()}}$a.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="pendingRedirect",du=new Map;class dS extends Hy{constructor(i,r,o=!1){super(i,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,o),this.eventId=null}async execute(){let i=du.get(this.auth._key());if(!i){try{const o=await gS(this.resolver,this.auth)?await super.execute():null;i=()=>Promise.resolve(o)}catch(r){i=()=>Promise.reject(r)}du.set(this.auth._key(),i)}return this.bypassAuthState||du.set(this.auth._key(),()=>Promise.resolve(null)),i()}async onAuthEvent(i){if(i.type==="signInViaRedirect")return super.onAuthEvent(i);if(i.type==="unknown"){this.resolve(null);return}if(i.eventId){const r=await this.auth._redirectUserForId(i.eventId);if(r)return this.user=r,super.onAuthEvent(i);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gS(a,i){const r=yS(i),o=pS(a);if(!await o._isAvailable())return!1;const f=await o._get(r)==="true";return await o._remove(r),f}function mS(a,i){du.set(a._key(),i)}function pS(a){return xi(a._redirectPersistence)}function yS(a){return hu(hS,a.config.apiKey,a.name)}async function vS(a,i,r=!1){if(Wn(a.app))return Promise.reject(ta(a));const o=wh(a),f=lS(o,i),p=await new dS(o,f,r).execute();return p&&!r&&(delete p.user._redirectEventId,await o._persistUserIfCurrent(p.user),await o._setRedirectUser(null,i)),p}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=600*1e3;class bS{constructor(i){this.auth=i,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(i){this.consumers.add(i),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,i)&&(this.sendToConsumer(this.queuedRedirectEvent,i),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(i){this.consumers.delete(i)}onEvent(i){if(this.hasEventBeenHandled(i))return!1;let r=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(i,o)&&(r=!0,this.sendToConsumer(i,o),this.saveEventToCache(i))}),this.hasHandledPotentialRedirect||!ES(i)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=i,r=!0)),r}sendToConsumer(i,r){var o;if(i.error&&!qy(i)){const f=((o=i.error.code)==null?void 0:o.split("auth/")[1])||"internal-error";r.onError(ei(this.auth,f))}else r.onAuthEvent(i)}isEventForConsumer(i,r){const o=r.eventId===null||!!i.eventId&&i.eventId===r.eventId;return r.filter.includes(i.type)&&o}hasEventBeenHandled(i){return Date.now()-this.lastProcessedEventTime>=_S&&this.cachedEventUids.clear(),this.cachedEventUids.has(a0(i))}saveEventToCache(i){this.cachedEventUids.add(a0(i)),this.lastProcessedEventTime=Date.now()}}function a0(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(i=>i).join("-")}function qy({type:a,error:i}){return a==="unknown"&&(i==null?void 0:i.code)==="auth/no-auth-event"}function ES(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qy(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(a,i={}){return lr(a,"GET","/v1/projects",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AS=/^https?/;async function xS(a){if(a.config.emulator)return;const{authorizedDomains:i}=await TS(a);for(const r of i)try{if(NS(r))return}catch{}wi(a,"unauthorized-domain")}function NS(a){const i=sh(),{protocol:r,hostname:o}=new URL(i);if(a.startsWith("chrome-extension://")){const p=new URL(a);return p.hostname===""&&o===""?r==="chrome-extension:"&&a.replace("chrome-extension://","")===i.replace("chrome-extension://",""):r==="chrome-extension:"&&p.hostname===o}if(!AS.test(r))return!1;if(SS.test(a))return o===a;const f=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+f+"|"+f+")$","i").test(o)}/**
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
 */const wS=new Cl(3e4,6e4);function r0(){const a=ni().___jsl;if(a!=null&&a.H){for(const i of Object.keys(a.H))if(a.H[i].r=a.H[i].r||[],a.H[i].L=a.H[i].L||[],a.H[i].r=[...a.H[i].L],a.CP)for(let r=0;r<a.CP.length;r++)a.CP[r]=null}}function CS(a){return new Promise((i,r)=>{var f,g,p;function o(){r0(),gapi.load("gapi.iframes",{callback:()=>{i(gapi.iframes.getContext())},ontimeout:()=>{r0(),r(ei(a,"network-request-failed"))},timeout:wS.get()})}if((g=(f=ni().gapi)==null?void 0:f.iframes)!=null&&g.Iframe)i(gapi.iframes.getContext());else if((p=ni().gapi)!=null&&p.load)o();else{const C=jT("iframefcb");return ni()[C]=()=>{gapi.load?o():r(ei(a,"network-request-failed"))},IT(`${MT()}?onload=${C}`).catch(A=>r(A))}}).catch(i=>{throw gu=null,i})}let gu=null;function RS(a){return gu=gu||CS(a),gu}/**
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
 */const OS=new Cl(5e3,15e3),DS="__/auth/iframe",IS="emulator/auth/iframe",MS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function US(a){const i=a.config;ft(i.authDomain,a,"auth-domain-config-required");const r=i.emulator?Sh(i,IS):`https://${a.config.authDomain}/${DS}`,o={apiKey:i.apiKey,appName:a.name,v:rr},f=jS.get(a.config.apiHost);f&&(o.eid=f);const g=a._getFrameworks();return g.length&&(o.fw=g.join(",")),`${r}?${xl(o).slice(1)}`}async function LS(a){const i=await RS(a),r=ni().gapi;return ft(r,a,"internal-error"),i.open({where:document.body,url:US(a),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MS,dontclear:!0},o=>new Promise(async(f,g)=>{await o.restyle({setHideOnLeave:!1});const p=ei(a,"network-request-failed"),C=ni().setTimeout(()=>{g(p)},OS.get());function A(){ni().clearTimeout(C),f(o)}o.ping(A).then(A,()=>{g(p)})}))}/**
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
 */const zS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kS=500,HS=600,qS="_blank",BS="http://localhost";class l0{constructor(i){this.window=i,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VS(a,i,r,o=kS,f=HS){const g=Math.max((window.screen.availHeight-f)/2,0).toString(),p=Math.max((window.screen.availWidth-o)/2,0).toString();let C="";const A={...zS,width:o.toString(),height:f.toString(),top:g,left:p},T=Ue().toLowerCase();r&&(C=by(T)?qS:r),vy(T)&&(i=i||BS,A.scrollbars="yes");const P=Object.entries(A).reduce((B,[st,tt])=>`${B}${st}=${tt},`,"");if(AT(T)&&C!=="_self")return GS(i||"",C),new l0(null);const j=window.open(i||"",C,P);ft(j,a,"popup-blocked");try{j.focus()}catch{}return new l0(j)}function GS(a,i){const r=document.createElement("a");r.href=a,r.target=i;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(o)}/**
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
 */const PS="__/auth/handler",YS="emulator/auth/handler",XS=encodeURIComponent("fac");async function o0(a,i,r,o,f,g){ft(a.config.authDomain,a,"auth-domain-config-required"),ft(a.config.apiKey,a,"invalid-api-key");const p={apiKey:a.config.apiKey,appName:a.name,authType:r,redirectUrl:o,v:rr,eventId:f};if(i instanceof Ry){i.setDefaultLanguage(a.languageCode),p.providerId=i.providerId||"",P2(i.getCustomParameters())||(p.customParameters=JSON.stringify(i.getCustomParameters()));for(const[P,j]of Object.entries({}))p[P]=j}if(i instanceof Rl){const P=i.getScopes().filter(j=>j!=="");P.length>0&&(p.scopes=P.join(","))}a.tenantId&&(p.tid=a.tenantId);const C=p;for(const P of Object.keys(C))C[P]===void 0&&delete C[P];const A=await a._getAppCheckToken(),T=A?`#${XS}=${encodeURIComponent(A)}`:"";return`${FS(a)}?${xl(C).slice(1)}${T}`}function FS({config:a}){return a.emulator?Sh(a,YS):`https://${a.authDomain}/${PS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="webStorageSupport";class KS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jy,this._completeRedirectFn=vS,this._overrideRedirectResult=mS}async _openPopup(i,r,o,f){var p;Ci((p=this.eventManagers[i._key()])==null?void 0:p.manager,"_initialize() not called before _openPopup()");const g=await o0(i,r,o,sh(),f);return VS(i,g,Rh())}async _openRedirect(i,r,o,f){await this._originValidation(i);const g=await o0(i,r,o,sh(),f);return JT(g),new Promise(()=>{})}_initialize(i){const r=i._key();if(this.eventManagers[r]){const{manager:f,promise:g}=this.eventManagers[r];return f?Promise.resolve(f):(Ci(g,"If manager is not set, promise should be"),g)}const o=this.initAndGetManager(i);return this.eventManagers[r]={promise:o},o.catch(()=>{delete this.eventManagers[r]}),o}async initAndGetManager(i){const r=await LS(i),o=new bS(i);return r.register("authEvent",f=>(ft(f==null?void 0:f.authEvent,i,"invalid-auth-event"),{status:o.onEvent(f.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[i._key()]={manager:o},this.iframes[i._key()]=r,o}_isIframeWebStorageSupported(i,r){this.iframes[i._key()].send(Qf,{type:Qf},f=>{var p;const g=(p=f==null?void 0:f[0])==null?void 0:p[Qf];g!==void 0&&r(!!g),wi(i,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(i){const r=i._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=xS(i)),this.originValidationPromises[r]}get _shouldInitProactively(){return xy()||_y()||Nh()}}const QS=KS;var u0="@firebase/auth",c0="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(i){this.auth=i,this.internalListeners=new Map}getUid(){var i;return this.assertAuthConfigured(),((i=this.auth.currentUser)==null?void 0:i.uid)||null}async getToken(i){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(i)}:null}addAuthTokenListener(i){if(this.assertAuthConfigured(),this.internalListeners.has(i))return;const r=this.auth.onIdTokenChanged(o=>{i((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(i,r),this.updateProactiveRefresh()}removeAuthTokenListener(i){this.assertAuthConfigured();const r=this.internalListeners.get(i);r&&(this.internalListeners.delete(i),r(),this.updateProactiveRefresh())}assertAuthConfigured(){ft(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $S(a){ii(new Cn("auth",(i,{options:r})=>{const o=i.getProvider("app").getImmediate(),f=i.getProvider("heartbeat"),g=i.getProvider("app-check-internal"),{apiKey:p,authDomain:C}=o.options;ft(p&&!p.includes(":"),"invalid-api-key",{appName:o.name});const A={apiKey:p,authDomain:C,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ny(a)},T=new OT(o,f,g,A);return LT(T,r),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((i,r,o)=>{i.getProvider("auth-internal").initialize()})),ii(new Cn("auth-internal",i=>{const r=wh(i.getProvider("auth").getImmediate());return(o=>new ZS(o))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(u0,c0,JS(a)),hn(u0,c0,"esm2020")}/**
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
 */const WS=300,tA=S0("authIdTokenMaxAge")||WS;let f0=null;const eA=a=>async i=>{const r=i&&await i.getIdTokenResult(),o=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(o&&o>tA)return;const f=r==null?void 0:r.token;f0!==f&&(f0=f,await fetch(a,{method:f?"POST":"DELETE",headers:f?{Authorization:`Bearer ${f}`}:{}}))};function nA(a=ch()){const i=ra(a,"auth");if(i.isInitialized())return i.getImmediate();const r=UT(a,{popupRedirectResolver:QS,persistence:[rS,KT,jy]}),o=S0("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const g=new URL(o,location.origin);if(location.origin===g.origin){const p=eA(g.toString());YT(r,p,()=>p(r.currentUser)),PT(r,C=>p(C))}}const f=E0("auth");return f&&zT(r,`http://${f}`),r}function iA(){var a;return((a=document.getElementsByTagName("head"))==null?void 0:a[0])??document}DT({loadJS(a){return new Promise((i,r)=>{const o=document.createElement("script");o.setAttribute("src",a),o.onload=i,o.onerror=f=>{const g=ei("internal-error");g.customData=f,r(g)},o.type="text/javascript",o.charset="UTF-8",iA().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$S("Browser");const sA={apiKey:"AIzaSyDgdUYq80uSRJLQcJYMzQM6nk77D4ql5Rg",authDomain:"tabibfaqih.firebaseapp.com",projectId:"tabibfaqih",storageBucket:"tabibfaqih.firebasestorage.app",messagingSenderId:"202460803784",appId:"1:202460803784:web:9c6cd0a97b622206f4abfd",measurementId:"G-KMCRY4YDWN"},Dh=I0(sA);SE(Dh);eT(Dh);nA(Dh);const By=document.getElementById("root");if(!By)throw new Error("Could not find root element to mount to");const aA=R1.createRoot(By);aA.render(v.jsx(E1.StrictMode,{children:v.jsx(T2,{})}));
