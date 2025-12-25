(function(){const D=document.createElement("link").relList;if(D&&D.supports&&D.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))o(j);new MutationObserver(j=>{for(const C of j)if(C.type==="childList")for(const Q of C.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&o(Q)}).observe(document,{childList:!0,subtree:!0});function A(j){const C={};return j.integrity&&(C.integrity=j.integrity),j.referrerPolicy&&(C.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?C.credentials="include":j.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function o(j){if(j.ep)return;j.ep=!0;const C=A(j);fetch(j.href,C)}})();function q0(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var fs={exports:{}},Sn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function rg(){if(N0)return Sn;N0=1;var d=Symbol.for("react.transitional.element"),D=Symbol.for("react.fragment");function A(o,j,C){var Q=null;if(C!==void 0&&(Q=""+C),j.key!==void 0&&(Q=""+j.key),"key"in j){C={};for(var k in j)k!=="key"&&(C[k]=j[k])}else C=j;return j=C.ref,{$$typeof:d,type:o,key:Q,ref:j!==void 0?j:null,props:C}}return Sn.Fragment=D,Sn.jsx=A,Sn.jsxs=A,Sn}var _0;function dg(){return _0||(_0=1,fs.exports=rg()),fs.exports}var c=dg(),os={exports:{}},w={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function mg(){if(S0)return w;S0=1;var d=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),B=Symbol.iterator;function dt(m){return m===null||typeof m!="object"?null:(m=B&&m[B]||m["@@iterator"],typeof m=="function"?m:null)}var ut={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},it=Object.assign,vt={};function $(m,T,U){this.props=m,this.context=T,this.refs=vt,this.updater=U||ut}$.prototype.isReactComponent={},$.prototype.setState=function(m,T){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,T,"setState")},$.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function K(){}K.prototype=$.prototype;function F(m,T,U){this.props=m,this.context=T,this.refs=vt,this.updater=U||ut}var qt=F.prototype=new K;qt.constructor=F,it(qt,$.prototype),qt.isPureReactComponent=!0;var Lt=Array.isArray;function Xt(){}var R={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function L(m,T,U){var Y=U.ref;return{$$typeof:d,type:m,key:T,ref:Y!==void 0?Y:null,props:U}}function tt(m,T){return L(m.type,T,m.props)}function Ot(m){return typeof m=="object"&&m!==null&&m.$$typeof===d}function Dt(m){var T={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(U){return T[U]})}var ce=/\/+/g;function De(m,T){return typeof m=="object"&&m!==null&&m.key!=null?Dt(""+m.key):T.toString(36)}function Wt(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Xt,Xt):(m.status="pending",m.then(function(T){m.status==="pending"&&(m.status="fulfilled",m.value=T)},function(T){m.status==="pending"&&(m.status="rejected",m.reason=T)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function N(m,T,U,Y,J){var lt=typeof m;(lt==="undefined"||lt==="boolean")&&(m=null);var gt=!1;if(m===null)gt=!0;else switch(lt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(m.$$typeof){case d:case D:gt=!0;break;case H:return gt=m._init,N(gt(m._payload),T,U,Y,J)}}if(gt)return J=J(m),gt=Y===""?"."+De(m,0):Y,Lt(J)?(U="",gt!=null&&(U=gt.replace(ce,"$&/")+"/"),N(J,T,U,"",function(ja){return ja})):J!=null&&(Ot(J)&&(J=tt(J,U+(J.key==null||m&&m.key===J.key?"":(""+J.key).replace(ce,"$&/")+"/")+gt)),T.push(J)),1;gt=0;var Ft=Y===""?".":Y+":";if(Lt(m))for(var Rt=0;Rt<m.length;Rt++)Y=m[Rt],lt=Ft+De(Y,Rt),gt+=N(Y,T,U,lt,J);else if(Rt=dt(m),typeof Rt=="function")for(m=Rt.call(m),Rt=0;!(Y=m.next()).done;)Y=Y.value,lt=Ft+De(Y,Rt++),gt+=N(Y,T,U,lt,J);else if(lt==="object"){if(typeof m.then=="function")return N(Wt(m),T,U,Y,J);throw T=String(m),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return gt}function M(m,T,U){if(m==null)return m;var Y=[],J=0;return N(m,Y,"","",function(lt){return T.call(U,lt,J++)}),Y}function V(m){if(m._status===-1){var T=m._result;T=T(),T.then(function(U){(m._status===0||m._status===-1)&&(m._status=1,m._result=U)},function(U){(m._status===0||m._status===-1)&&(m._status=2,m._result=U)}),m._status===-1&&(m._status=0,m._result=T)}if(m._status===1)return m._result.default;throw m._result}var bt=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},_t={map:M,forEach:function(m,T,U){M(m,function(){T.apply(this,arguments)},U)},count:function(m){var T=0;return M(m,function(){T++}),T},toArray:function(m){return M(m,function(T){return T})||[]},only:function(m){if(!Ot(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return w.Activity=O,w.Children=_t,w.Component=$,w.Fragment=A,w.Profiler=j,w.PureComponent=F,w.StrictMode=o,w.Suspense=z,w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,w.__COMPILER_RUNTIME={__proto__:null,c:function(m){return R.H.useMemoCache(m)}},w.cache=function(m){return function(){return m.apply(null,arguments)}},w.cacheSignal=function(){return null},w.cloneElement=function(m,T,U){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var Y=it({},m.props),J=m.key;if(T!=null)for(lt in T.key!==void 0&&(J=""+T.key),T)!P.call(T,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&T.ref===void 0||(Y[lt]=T[lt]);var lt=arguments.length-2;if(lt===1)Y.children=U;else if(1<lt){for(var gt=Array(lt),Ft=0;Ft<lt;Ft++)gt[Ft]=arguments[Ft+2];Y.children=gt}return L(m.type,J,Y)},w.createContext=function(m){return m={$$typeof:Q,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:C,_context:m},m},w.createElement=function(m,T,U){var Y,J={},lt=null;if(T!=null)for(Y in T.key!==void 0&&(lt=""+T.key),T)P.call(T,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(J[Y]=T[Y]);var gt=arguments.length-2;if(gt===1)J.children=U;else if(1<gt){for(var Ft=Array(gt),Rt=0;Rt<gt;Rt++)Ft[Rt]=arguments[Rt+2];J.children=Ft}if(m&&m.defaultProps)for(Y in gt=m.defaultProps,gt)J[Y]===void 0&&(J[Y]=gt[Y]);return L(m,lt,J)},w.createRef=function(){return{current:null}},w.forwardRef=function(m){return{$$typeof:k,render:m}},w.isValidElement=Ot,w.lazy=function(m){return{$$typeof:H,_payload:{_status:-1,_result:m},_init:V}},w.memo=function(m,T){return{$$typeof:x,type:m,compare:T===void 0?null:T}},w.startTransition=function(m){var T=R.T,U={};R.T=U;try{var Y=m(),J=R.S;J!==null&&J(U,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Xt,bt)}catch(lt){bt(lt)}finally{T!==null&&U.types!==null&&(T.types=U.types),R.T=T}},w.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},w.use=function(m){return R.H.use(m)},w.useActionState=function(m,T,U){return R.H.useActionState(m,T,U)},w.useCallback=function(m,T){return R.H.useCallback(m,T)},w.useContext=function(m){return R.H.useContext(m)},w.useDebugValue=function(){},w.useDeferredValue=function(m,T){return R.H.useDeferredValue(m,T)},w.useEffect=function(m,T){return R.H.useEffect(m,T)},w.useEffectEvent=function(m){return R.H.useEffectEvent(m)},w.useId=function(){return R.H.useId()},w.useImperativeHandle=function(m,T,U){return R.H.useImperativeHandle(m,T,U)},w.useInsertionEffect=function(m,T){return R.H.useInsertionEffect(m,T)},w.useLayoutEffect=function(m,T){return R.H.useLayoutEffect(m,T)},w.useMemo=function(m,T){return R.H.useMemo(m,T)},w.useOptimistic=function(m,T){return R.H.useOptimistic(m,T)},w.useReducer=function(m,T,U){return R.H.useReducer(m,T,U)},w.useRef=function(m){return R.H.useRef(m)},w.useState=function(m){return R.H.useState(m)},w.useSyncExternalStore=function(m,T,U){return R.H.useSyncExternalStore(m,T,U)},w.useTransition=function(){return R.H.useTransition()},w.version="19.2.1",w}var E0;function vs(){return E0||(E0=1,os.exports=mg()),os.exports}var et=vs();const gg=q0(et);var rs={exports:{}},En={},ds={exports:{}},ms={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function yg(){return T0||(T0=1,(function(d){function D(N,M){var V=N.length;N.push(M);t:for(;0<V;){var bt=V-1>>>1,_t=N[bt];if(0<j(_t,M))N[bt]=M,N[V]=_t,V=bt;else break t}}function A(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var M=N[0],V=N.pop();if(V!==M){N[0]=V;t:for(var bt=0,_t=N.length,m=_t>>>1;bt<m;){var T=2*(bt+1)-1,U=N[T],Y=T+1,J=N[Y];if(0>j(U,V))Y<_t&&0>j(J,U)?(N[bt]=J,N[Y]=V,bt=Y):(N[bt]=U,N[T]=V,bt=T);else if(Y<_t&&0>j(J,V))N[bt]=J,N[Y]=V,bt=Y;else break t}}return M}function j(N,M){var V=N.sortIndex-M.sortIndex;return V!==0?V:N.id-M.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var C=performance;d.unstable_now=function(){return C.now()}}else{var Q=Date,k=Q.now();d.unstable_now=function(){return Q.now()-k}}var z=[],x=[],H=1,O=null,B=3,dt=!1,ut=!1,it=!1,vt=!1,$=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function qt(N){for(var M=A(x);M!==null;){if(M.callback===null)o(x);else if(M.startTime<=N)o(x),M.sortIndex=M.expirationTime,D(z,M);else break;M=A(x)}}function Lt(N){if(it=!1,qt(N),!ut)if(A(z)!==null)ut=!0,Xt||(Xt=!0,Dt());else{var M=A(x);M!==null&&Wt(Lt,M.startTime-N)}}var Xt=!1,R=-1,P=5,L=-1;function tt(){return vt?!0:!(d.unstable_now()-L<P)}function Ot(){if(vt=!1,Xt){var N=d.unstable_now();L=N;var M=!0;try{t:{ut=!1,it&&(it=!1,K(R),R=-1),dt=!0;var V=B;try{e:{for(qt(N),O=A(z);O!==null&&!(O.expirationTime>N&&tt());){var bt=O.callback;if(typeof bt=="function"){O.callback=null,B=O.priorityLevel;var _t=bt(O.expirationTime<=N);if(N=d.unstable_now(),typeof _t=="function"){O.callback=_t,qt(N),M=!0;break e}O===A(z)&&o(z),qt(N)}else o(z);O=A(z)}if(O!==null)M=!0;else{var m=A(x);m!==null&&Wt(Lt,m.startTime-N),M=!1}}break t}finally{O=null,B=V,dt=!1}M=void 0}}finally{M?Dt():Xt=!1}}}var Dt;if(typeof F=="function")Dt=function(){F(Ot)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,De=ce.port2;ce.port1.onmessage=Ot,Dt=function(){De.postMessage(null)}}else Dt=function(){$(Ot,0)};function Wt(N,M){R=$(function(){N(d.unstable_now())},M)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(N){N.callback=null},d.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<N?Math.floor(1e3/N):5},d.unstable_getCurrentPriorityLevel=function(){return B},d.unstable_next=function(N){switch(B){case 1:case 2:case 3:var M=3;break;default:M=B}var V=B;B=M;try{return N()}finally{B=V}},d.unstable_requestPaint=function(){vt=!0},d.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=B;B=N;try{return M()}finally{B=V}},d.unstable_scheduleCallback=function(N,M,V){var bt=d.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?bt+V:bt):V=bt,N){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=V+_t,N={id:H++,callback:M,priorityLevel:N,startTime:V,expirationTime:_t,sortIndex:-1},V>bt?(N.sortIndex=V,D(x,N),A(z)===null&&N===A(x)&&(it?(K(R),R=-1):it=!0,Wt(Lt,V-bt))):(N.sortIndex=_t,D(z,N),ut||dt||(ut=!0,Xt||(Xt=!0,Dt()))),N},d.unstable_shouldYield=tt,d.unstable_wrapCallback=function(N){var M=B;return function(){var V=B;B=M;try{return N.apply(this,arguments)}finally{B=V}}}})(ms)),ms}var A0;function hg(){return A0||(A0=1,ds.exports=yg()),ds.exports}var gs={exports:{}},$t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function vg(){if(O0)return $t;O0=1;var d=vs();function D(z){var x="https://react.dev/errors/"+z;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)x+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+z+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(){}var o={d:{f:A,r:function(){throw Error(D(522))},D:A,C:A,L:A,m:A,X:A,S:A,M:A},p:0,findDOMNode:null},j=Symbol.for("react.portal");function C(z,x,H){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:O==null?null:""+O,children:z,containerInfo:x,implementation:H}}var Q=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(z,x){if(z==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,$t.createPortal=function(z,x){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(D(299));return C(z,x,null,H)},$t.flushSync=function(z){var x=Q.T,H=o.p;try{if(Q.T=null,o.p=2,z)return z()}finally{Q.T=x,o.p=H,o.d.f()}},$t.preconnect=function(z,x){typeof z=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(z,x))},$t.prefetchDNS=function(z){typeof z=="string"&&o.d.D(z)},$t.preinit=function(z,x){if(typeof z=="string"&&x&&typeof x.as=="string"){var H=x.as,O=k(H,x.crossOrigin),B=typeof x.integrity=="string"?x.integrity:void 0,dt=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;H==="style"?o.d.S(z,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:O,integrity:B,fetchPriority:dt}):H==="script"&&o.d.X(z,{crossOrigin:O,integrity:B,fetchPriority:dt,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},$t.preinitModule=function(z,x){if(typeof z=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var H=k(x.as,x.crossOrigin);o.d.M(z,{crossOrigin:H,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(z)},$t.preload=function(z,x){if(typeof z=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var H=x.as,O=k(H,x.crossOrigin);o.d.L(z,H,{crossOrigin:O,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},$t.preloadModule=function(z,x){if(typeof z=="string")if(x){var H=k(x.as,x.crossOrigin);o.d.m(z,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:H,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(z)},$t.requestFormReset=function(z){o.d.r(z)},$t.unstable_batchedUpdates=function(z,x){return z(x)},$t.useFormState=function(z,x,H){return Q.H.useFormState(z,x,H)},$t.useFormStatus=function(){return Q.H.useHostTransitionStatus()},$t.version="19.2.1",$t}var D0;function bg(){if(D0)return gs.exports;D0=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(D){console.error(D)}}return d(),gs.exports=vg(),gs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function xg(){if(j0)return En;j0=1;var d=hg(),D=vs(),A=bg();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function C(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function Q(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function k(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z(t){if(C(t)!==t)throw Error(o(188))}function x(t){var e=t.alternate;if(!e){if(e=C(t),e===null)throw Error(o(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return z(n),t;if(u===a)return z(n),e;u=u.sibling}throw Error(o(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,s=n.child;s;){if(s===l){i=!0,l=n,a=u;break}if(s===a){i=!0,a=n,l=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===l){i=!0,l=u,a=n;break}if(s===a){i=!0,a=u,l=n;break}s=s.sibling}if(!i)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?t:e}function H(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=H(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,B=Symbol.for("react.element"),dt=Symbol.for("react.transitional.element"),ut=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),vt=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),F=Symbol.for("react.context"),qt=Symbol.for("react.forward_ref"),Lt=Symbol.for("react.suspense"),Xt=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),tt=Symbol.for("react.memo_cache_sentinel"),Ot=Symbol.iterator;function Dt(t){return t===null||typeof t!="object"?null:(t=Ot&&t[Ot]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function De(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case it:return"Fragment";case $:return"Profiler";case vt:return"StrictMode";case Lt:return"Suspense";case Xt:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ut:return"Portal";case F:return t.displayName||"Context";case K:return(t._context.displayName||"Context")+".Consumer";case qt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return e=t.displayName||null,e!==null?e:De(t.type)||"Memo";case P:e=t._payload,t=t._init;try{return De(t(e))}catch{}}return null}var Wt=Array.isArray,N=D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},bt=[],_t=-1;function m(t){return{current:t}}function T(t){0>_t||(t.current=bt[_t],bt[_t]=null,_t--)}function U(t,e){_t++,bt[_t]=t.current,t.current=e}var Y=m(null),J=m(null),lt=m(null),gt=m(null);function Ft(t,e){switch(U(lt,e),U(J,t),U(Y,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Vr(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Vr(e),t=wr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(Y),U(Y,t)}function Rt(){T(Y),T(J),T(lt)}function ja(t){t.memoizedState!==null&&U(gt,t);var e=Y.current,l=wr(e,t.type);e!==l&&(U(J,t),U(Y,l))}function On(t){J.current===t&&(T(Y),T(J)),gt.current===t&&(T(gt),xn._currentValue=V)}var wu,bs;function Tl(t){if(wu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||"",bs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wu+t+bs}var Ku=!1;function Ju(t,e){if(!t||Ku)return"";Ku=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(b){var v=b}Reflect.construct(t,[],E)}else{try{E.call()}catch(b){v=b}t.call(E.prototype)}}else{try{throw Error()}catch(b){v=b}(E=t())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(b){if(b&&v&&typeof b.stack=="string")return[b.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],s=u[1];if(i&&s){var f=i.split(`
`),h=s.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===h.length)for(a=f.length-1,n=h.length-1;1<=a&&0<=n&&f[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==h[n]){var p=`
`+f[a].replace(" at new "," at ");return t.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",t.displayName)),p}while(1<=a&&0<=n);break}}}finally{Ku=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Tl(l):""}function Q0(t,e){switch(t.tag){case 26:case 27:case 5:return Tl(t.type);case 16:return Tl("Lazy");case 13:return t.child!==e&&e!==null?Tl("Suspense Fallback"):Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 15:return Ju(t.type,!1);case 11:return Ju(t.type.render,!1);case 1:return Ju(t.type,!0);case 31:return Tl("Activity");default:return""}}function xs(t){try{var e="",l=null;do e+=Q0(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Iu=Object.prototype.hasOwnProperty,ku=d.unstable_scheduleCallback,Wu=d.unstable_cancelCallback,Z0=d.unstable_shouldYield,V0=d.unstable_requestPaint,se=d.unstable_now,w0=d.unstable_getCurrentPriorityLevel,ps=d.unstable_ImmediatePriority,Ns=d.unstable_UserBlockingPriority,Dn=d.unstable_NormalPriority,K0=d.unstable_LowPriority,_s=d.unstable_IdlePriority,J0=d.log,I0=d.unstable_setDisableYieldValue,za=null,fe=null;function tl(t){if(typeof J0=="function"&&I0(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(za,t)}catch{}}var oe=Math.clz32?Math.clz32:$0,k0=Math.log,W0=Math.LN2;function $0(t){return t>>>=0,t===0?32:31-(k0(t)/W0|0)|0}var jn=256,zn=262144,Cn=4194304;function Al(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Rn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~u,a!==0?n=Al(a):(i&=s,i!==0?n=Al(i):l||(l=s&~t,l!==0&&(n=Al(l))))):(s=a&~u,s!==0?n=Al(s):i!==0?n=Al(i):l||(l=a&~t,l!==0&&(n=Al(l)))),n===0?0:e!==0&&e!==n&&(e&u)===0&&(u=n&-n,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:n}function Ca(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function F0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var t=Cn;return Cn<<=1,(Cn&62914560)===0&&(Cn=4194304),t}function $u(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Ra(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function P0(t,e,l,a,n,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,f=t.expirationTimes,h=t.hiddenUpdates;for(l=i&~l;0<l;){var p=31-oe(l),E=1<<p;s[p]=0,f[p]=-1;var v=h[p];if(v!==null)for(h[p]=null,p=0;p<v.length;p++){var b=v[p];b!==null&&(b.lane&=-536870913)}l&=~E}a!==0&&Es(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function Es(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-oe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Ts(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-oe(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function As(t,e){var l=e&-e;return l=(l&42)!==0?1:Fu(l),(l&(t.suspendedLanes|e))!==0?0:l}function Fu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Os(){var t=M.p;return t!==0?t:(t=window.event,t===void 0?32:g0(t.type))}function Ds(t,e){var l=M.p;try{return M.p=t,e()}finally{M.p=l}}var el=Math.random().toString(36).slice(2),wt="__reactFiber$"+el,te="__reactProps$"+el,Vl="__reactContainer$"+el,ti="__reactEvents$"+el,td="__reactListeners$"+el,ed="__reactHandles$"+el,js="__reactResources$"+el,Ma="__reactMarker$"+el;function ei(t){delete t[wt],delete t[te],delete t[ti],delete t[td],delete t[ed]}function wl(t){var e=t[wt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Vl]||l[wt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Fr(t);t!==null;){if(l=t[wt])return l;t=Fr(t)}return e}t=l,l=t.parentNode}return null}function Kl(t){if(t=t[wt]||t[Vl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ua(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Jl(t){var e=t[js];return e||(e=t[js]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Zt(t){t[Ma]=!0}var zs=new Set,Cs={};function Ol(t,e){Il(t,e),Il(t+"Capture",e)}function Il(t,e){for(Cs[t]=e,t=0;t<e.length;t++)zs.add(e[t])}var ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rs={},Ms={};function ad(t){return Iu.call(Ms,t)?!0:Iu.call(Rs,t)?!1:ld.test(t)?Ms[t]=!0:(Rs[t]=!0,!1)}function Mn(t,e,l){if(ad(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Un(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ye(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Us(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nd(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function li(t){if(!t._valueTracker){var e=Us(t)?"checked":"value";t._valueTracker=nd(t,e,""+t[e])}}function qs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Us(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function qn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ud=/[\n"\\]/g;function xe(t){return t.replace(ud,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ai(t,e,l,a,n,u,i,s){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+be(e)):t.value!==""+be(e)&&(t.value=""+be(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?ni(t,i,be(e)):l!=null?ni(t,i,be(l)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+be(s):t.removeAttribute("name")}function Ys(t,e,l,a,n,u,i,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){li(t);return}l=l!=null?""+be(l):"",e=e!=null?""+be(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),li(t)}function ni(t,e,l){e==="number"&&qn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function kl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+be(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Hs(t,e,l){if(e!=null&&(e=""+be(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+be(l):""}function Bs(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(o(92));if(Wt(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=be(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),li(t)}function Wl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var id=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gs(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||id.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Ls(t,e,l){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Gs(t,n,a)}else for(var u in e)e.hasOwnProperty(u)&&Gs(t,u,e[u])}function ui(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yn(t){return sd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function He(){}var ii=null;function ci(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $l=null,Fl=null;function Xs(t){var e=Kl(t);if(e&&(t=e.stateNode)){var l=t[te]||null;t:switch(t=e.stateNode,e.type){case"input":if(ai(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+xe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[te]||null;if(!n)throw Error(o(90));ai(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&qs(a)}break t;case"textarea":Hs(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&kl(t,!!l.multiple,e,!1)}}}var si=!1;function Qs(t,e,l){if(si)return t(e,l);si=!0;try{var a=t(e);return a}finally{if(si=!1,($l!==null||Fl!==null)&&(Su(),$l&&(e=$l,t=Fl,Fl=$l=null,Xs(e),t)))for(e=0;e<t.length;e++)Xs(t[e])}}function qa(t,e){var l=t.stateNode;if(l===null)return null;var a=l[te]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(o(231,e,typeof l));return l}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=!1;if(Be)try{var Ya={};Object.defineProperty(Ya,"passive",{get:function(){fi=!0}}),window.addEventListener("test",Ya,Ya),window.removeEventListener("test",Ya,Ya)}catch{fi=!1}var ll=null,oi=null,Hn=null;function Zs(){if(Hn)return Hn;var t,e=oi,l=e.length,a,n="value"in ll?ll.value:ll.textContent,u=n.length;for(t=0;t<l&&e[t]===n[t];t++);var i=l-t;for(a=1;a<=i&&e[l-a]===n[u-a];a++);return Hn=n.slice(t,1<a?1-a:void 0)}function Bn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gn(){return!0}function Vs(){return!1}function ee(t){function e(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Gn:Vs,this.isPropagationStopped=Vs,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),e}var Dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=ee(Dl),Ha=O({},Dl,{view:0,detail:0}),fd=ee(Ha),ri,di,Ba,Xn=O({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(ri=t.screenX-Ba.screenX,di=t.screenY-Ba.screenY):di=ri=0,Ba=t),ri)},movementY:function(t){return"movementY"in t?t.movementY:di}}),ws=ee(Xn),od=O({},Xn,{dataTransfer:0}),rd=ee(od),dd=O({},Ha,{relatedTarget:0}),mi=ee(dd),md=O({},Dl,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=ee(md),yd=O({},Dl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hd=ee(yd),vd=O({},Dl,{data:0}),Ks=ee(vd),bd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pd[t])?!!e[t]:!1}function gi(){return Nd}var _d=O({},Ha,{key:function(t){if(t.key){var e=bd[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gi,charCode:function(t){return t.type==="keypress"?Bn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sd=ee(_d),Ed=O({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=ee(Ed),Td=O({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gi}),Ad=ee(Td),Od=O({},Dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=ee(Od),jd=O({},Xn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=ee(jd),Cd=O({},Dl,{newState:0,oldState:0}),Rd=ee(Cd),Md=[9,13,27,32],yi=Be&&"CompositionEvent"in window,Ga=null;Be&&"documentMode"in document&&(Ga=document.documentMode);var Ud=Be&&"TextEvent"in window&&!Ga,Is=Be&&(!yi||Ga&&8<Ga&&11>=Ga),ks=" ",Ws=!1;function $s(t,e){switch(t){case"keyup":return Md.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pl=!1;function qd(t,e){switch(t){case"compositionend":return Fs(e);case"keypress":return e.which!==32?null:(Ws=!0,ks);case"textInput":return t=e.data,t===ks&&Ws?null:t;default:return null}}function Yd(t,e){if(Pl)return t==="compositionend"||!yi&&$s(t,e)?(t=Zs(),Hn=oi=ll=null,Pl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Is&&e.locale!=="ko"?null:e.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hd[t.type]:e==="textarea"}function tf(t,e,l,a){$l?Fl?Fl.push(a):Fl=[a]:$l=a,e=zu(e,"onChange"),0<e.length&&(l=new Ln("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var La=null,Xa=null;function Bd(t){Br(t,0)}function Qn(t){var e=Ua(t);if(qs(e))return t}function ef(t,e){if(t==="change")return e}var lf=!1;if(Be){var hi;if(Be){var vi="oninput"in document;if(!vi){var af=document.createElement("div");af.setAttribute("oninput","return;"),vi=typeof af.oninput=="function"}hi=vi}else hi=!1;lf=hi&&(!document.documentMode||9<document.documentMode)}function nf(){La&&(La.detachEvent("onpropertychange",uf),Xa=La=null)}function uf(t){if(t.propertyName==="value"&&Qn(Xa)){var e=[];tf(e,Xa,t,ci(t)),Qs(Bd,e)}}function Gd(t,e,l){t==="focusin"?(nf(),La=e,Xa=l,La.attachEvent("onpropertychange",uf)):t==="focusout"&&nf()}function Ld(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qn(Xa)}function Xd(t,e){if(t==="click")return Qn(e)}function Qd(t,e){if(t==="input"||t==="change")return Qn(e)}function Zd(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var re=typeof Object.is=="function"?Object.is:Zd;function Qa(t,e){if(re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Iu.call(e,n)||!re(t[n],e[n]))return!1}return!0}function cf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sf(t,e){var l=cf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=cf(l)}}function ff(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ff(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function of(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=qn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=qn(t.document)}return e}function bi(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Vd=Be&&"documentMode"in document&&11>=document.documentMode,ta=null,xi=null,Za=null,pi=!1;function rf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;pi||ta==null||ta!==qn(a)||(a=ta,"selectionStart"in a&&bi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Za&&Qa(Za,a)||(Za=a,a=zu(xi,"onSelect"),0<a.length&&(e=new Ln("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ta)))}function jl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ea={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionrun:jl("Transition","TransitionRun"),transitionstart:jl("Transition","TransitionStart"),transitioncancel:jl("Transition","TransitionCancel"),transitionend:jl("Transition","TransitionEnd")},Ni={},df={};Be&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function zl(t){if(Ni[t])return Ni[t];if(!ea[t])return t;var e=ea[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in df)return Ni[t]=e[l];return t}var mf=zl("animationend"),gf=zl("animationiteration"),yf=zl("animationstart"),wd=zl("transitionrun"),Kd=zl("transitionstart"),Jd=zl("transitioncancel"),hf=zl("transitionend"),vf=new Map,_i="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_i.push("scrollEnd");function je(t,e){vf.set(t,e),Ol(e,[t])}var Zn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pe=[],la=0,Si=0;function Vn(){for(var t=la,e=Si=la=0;e<t;){var l=pe[e];pe[e++]=null;var a=pe[e];pe[e++]=null;var n=pe[e];pe[e++]=null;var u=pe[e];if(pe[e++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&bf(l,n,u)}}function wn(t,e,l,a){pe[la++]=t,pe[la++]=e,pe[la++]=l,pe[la++]=a,Si|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Ei(t,e,l,a){return wn(t,e,l,a),Kn(t)}function Cl(t,e){return wn(t,null,null,e),Kn(t)}function bf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&e!==null&&(n=31-oe(l),t=u.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),u):null}function Kn(t){if(50<dn)throw dn=0,Mc=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var aa={};function Id(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function de(t,e,l,a){return new Id(t,e,l,a)}function Ti(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ge(t,e){var l=t.alternate;return l===null?(l=de(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function xf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Jn(t,e,l,a,n,u){var i=0;if(a=t,typeof t=="function")Ti(t)&&(i=1);else if(typeof t=="string")i=Pm(t,l,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case L:return t=de(31,l,e,n),t.elementType=L,t.lanes=u,t;case it:return Rl(l.children,n,u,e);case vt:i=8,n|=24;break;case $:return t=de(12,l,e,n|2),t.elementType=$,t.lanes=u,t;case Lt:return t=de(13,l,e,n),t.elementType=Lt,t.lanes=u,t;case Xt:return t=de(19,l,e,n),t.elementType=Xt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:i=10;break t;case K:i=9;break t;case qt:i=11;break t;case R:i=14;break t;case P:i=16,a=null;break t}i=29,l=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=de(i,l,e,n),e.elementType=t,e.type=a,e.lanes=u,e}function Rl(t,e,l,a){return t=de(7,t,a,e),t.lanes=l,t}function Ai(t,e,l){return t=de(6,t,null,e),t.lanes=l,t}function pf(t){var e=de(18,null,null,0);return e.stateNode=t,e}function Oi(t,e,l){return e=de(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Nf=new WeakMap;function Ne(t,e){if(typeof t=="object"&&t!==null){var l=Nf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:xs(e)},Nf.set(t,e),e)}return{value:t,source:e,stack:xs(e)}}var na=[],ua=0,In=null,Va=0,_e=[],Se=0,al=null,Re=1,Me="";function Le(t,e){na[ua++]=Va,na[ua++]=In,In=t,Va=e}function _f(t,e,l){_e[Se++]=Re,_e[Se++]=Me,_e[Se++]=al,al=t;var a=Re;t=Me;var n=32-oe(a)-1;a&=~(1<<n),l+=1;var u=32-oe(e)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Re=1<<32-oe(e)+n|l<<n|a,Me=u+t}else Re=1<<u|l<<n|a,Me=t}function Di(t){t.return!==null&&(Le(t,1),_f(t,1,0))}function ji(t){for(;t===In;)In=na[--ua],na[ua]=null,Va=na[--ua],na[ua]=null;for(;t===al;)al=_e[--Se],_e[Se]=null,Me=_e[--Se],_e[Se]=null,Re=_e[--Se],_e[Se]=null}function Sf(t,e){_e[Se++]=Re,_e[Se++]=Me,_e[Se++]=al,Re=e.id,Me=e.overflow,al=t}var Kt=null,Et=null,ft=!1,nl=null,Ee=!1,zi=Error(o(519));function ul(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wa(Ne(e,t)),zi}function Ef(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[wt]=t,e[te]=a,l){case"dialog":nt("cancel",e),nt("close",e);break;case"iframe":case"object":case"embed":nt("load",e);break;case"video":case"audio":for(l=0;l<gn.length;l++)nt(gn[l],e);break;case"source":nt("error",e);break;case"img":case"image":case"link":nt("error",e),nt("load",e);break;case"details":nt("toggle",e);break;case"input":nt("invalid",e),Ys(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":nt("invalid",e);break;case"textarea":nt("invalid",e),Bs(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Qr(e.textContent,l)?(a.popover!=null&&(nt("beforetoggle",e),nt("toggle",e)),a.onScroll!=null&&nt("scroll",e),a.onScrollEnd!=null&&nt("scrollend",e),a.onClick!=null&&(e.onclick=He),e=!0):e=!1,e||ul(t,!0)}function Tf(t){for(Kt=t.return;Kt;)switch(Kt.tag){case 5:case 31:case 13:Ee=!1;return;case 27:case 3:Ee=!0;return;default:Kt=Kt.return}}function ia(t){if(t!==Kt)return!1;if(!ft)return Tf(t),ft=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Ic(t.type,t.memoizedProps)),l=!l),l&&Et&&ul(t),Tf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Et=$r(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Et=$r(t)}else e===27?(e=Et,xl(t.type)?(t=Pc,Pc=null,Et=t):Et=e):Et=Kt?Ae(t.stateNode.nextSibling):null;return!0}function Ml(){Et=Kt=null,ft=!1}function Ci(){var t=nl;return t!==null&&(ue===null?ue=t:ue.push.apply(ue,t),nl=null),t}function wa(t){nl===null?nl=[t]:nl.push(t)}var Ri=m(null),Ul=null,Xe=null;function il(t,e,l){U(Ri,e._currentValue),e._currentValue=l}function Qe(t){t._currentValue=Ri.current,T(Ri)}function Mi(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Ui(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;t:for(;u!==null;){var s=u;u=n;for(var f=0;f<e.length;f++)if(s.context===e[f]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),Mi(u.return,l,t),a||(i=null);break t}u=s.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(o(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Mi(i,l,t),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===t){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ca(t,e,l,a){t=null;for(var n=e,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(o(387));if(i=i.memoizedProps,i!==null){var s=n.type;re(n.pendingProps.value,i.value)||(t!==null?t.push(s):t=[s])}}else if(n===gt.current){if(i=n.alternate,i===null)throw Error(o(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(xn):t=[xn])}n=n.return}t!==null&&Ui(e,t,l,a),e.flags|=262144}function kn(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ql(t){Ul=t,Xe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Jt(t){return Af(Ul,t)}function Wn(t,e){return Ul===null&&ql(t),Af(t,e)}function Af(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Xe===null){if(t===null)throw Error(o(308));Xe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xe=Xe.next=e;return l}var kd=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Wd=d.unstable_scheduleCallback,$d=d.unstable_NormalPriority,Yt={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qi(){return{controller:new kd,data:new Map,refCount:0}}function Ka(t){t.refCount--,t.refCount===0&&Wd($d,function(){t.controller.abort()})}var Ja=null,Yi=0,sa=0,fa=null;function Fd(t,e){if(Ja===null){var l=Ja=[];Yi=0,sa=Gc(),fa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Yi++,e.then(Of,Of),e}function Of(){if(--Yi===0&&Ja!==null){fa!==null&&(fa.status="fulfilled");var t=Ja;Ja=null,sa=0,fa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Pd(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Df=N.S;N.S=function(t,e){dr=se(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Fd(t,e),Df!==null&&Df(t,e)};var Yl=m(null);function Hi(){var t=Yl.current;return t!==null?t:St.pooledCache}function $n(t,e){e===null?U(Yl,Yl.current):U(Yl,e.pool)}function jf(){var t=Hi();return t===null?null:{parent:Yt._currentValue,pool:t}}var oa=Error(o(460)),Bi=Error(o(474)),Fn=Error(o(542)),Pn={then:function(){}};function zf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(He,He),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t;default:if(typeof e.status=="string")e.then(He,He);else{if(t=St,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t}throw Bl=e,oa}}function Hl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Bl=l,oa):l}}var Bl=null;function Rf(){if(Bl===null)throw Error(o(459));var t=Bl;return Bl=null,t}function Mf(t){if(t===oa||t===Fn)throw Error(o(483))}var ra=null,Ia=0;function tu(t){var e=Ia;return Ia+=1,ra===null&&(ra=[]),Cf(ra,t,e)}function ka(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function eu(t,e){throw e.$$typeof===B?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Uf(t){function e(g,r){if(t){var y=g.deletions;y===null?(g.deletions=[r],g.flags|=16):y.push(r)}}function l(g,r){if(!t)return null;for(;r!==null;)e(g,r),r=r.sibling;return null}function a(g){for(var r=new Map;g!==null;)g.key!==null?r.set(g.key,g):r.set(g.index,g),g=g.sibling;return r}function n(g,r){return g=Ge(g,r),g.index=0,g.sibling=null,g}function u(g,r,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<r?(g.flags|=67108866,r):y):(g.flags|=67108866,r)):(g.flags|=1048576,r)}function i(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function s(g,r,y,S){return r===null||r.tag!==6?(r=Ai(y,g.mode,S),r.return=g,r):(r=n(r,y),r.return=g,r)}function f(g,r,y,S){var X=y.type;return X===it?p(g,r,y.props.children,S,y.key):r!==null&&(r.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===P&&Hl(X)===r.type)?(r=n(r,y.props),ka(r,y),r.return=g,r):(r=Jn(y.type,y.key,y.props,null,g.mode,S),ka(r,y),r.return=g,r)}function h(g,r,y,S){return r===null||r.tag!==4||r.stateNode.containerInfo!==y.containerInfo||r.stateNode.implementation!==y.implementation?(r=Oi(y,g.mode,S),r.return=g,r):(r=n(r,y.children||[]),r.return=g,r)}function p(g,r,y,S,X){return r===null||r.tag!==7?(r=Rl(y,g.mode,S,X),r.return=g,r):(r=n(r,y),r.return=g,r)}function E(g,r,y){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Ai(""+r,g.mode,y),r.return=g,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case dt:return y=Jn(r.type,r.key,r.props,null,g.mode,y),ka(y,r),y.return=g,y;case ut:return r=Oi(r,g.mode,y),r.return=g,r;case P:return r=Hl(r),E(g,r,y)}if(Wt(r)||Dt(r))return r=Rl(r,g.mode,y,null),r.return=g,r;if(typeof r.then=="function")return E(g,tu(r),y);if(r.$$typeof===F)return E(g,Wn(g,r),y);eu(g,r)}return null}function v(g,r,y,S){var X=r!==null?r.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return X!==null?null:s(g,r,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case dt:return y.key===X?f(g,r,y,S):null;case ut:return y.key===X?h(g,r,y,S):null;case P:return y=Hl(y),v(g,r,y,S)}if(Wt(y)||Dt(y))return X!==null?null:p(g,r,y,S,null);if(typeof y.then=="function")return v(g,r,tu(y),S);if(y.$$typeof===F)return v(g,r,Wn(g,y),S);eu(g,y)}return null}function b(g,r,y,S,X){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return g=g.get(y)||null,s(r,g,""+S,X);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case dt:return g=g.get(S.key===null?y:S.key)||null,f(r,g,S,X);case ut:return g=g.get(S.key===null?y:S.key)||null,h(r,g,S,X);case P:return S=Hl(S),b(g,r,y,S,X)}if(Wt(S)||Dt(S))return g=g.get(y)||null,p(r,g,S,X,null);if(typeof S.then=="function")return b(g,r,y,tu(S),X);if(S.$$typeof===F)return b(g,r,y,Wn(r,S),X);eu(r,S)}return null}function q(g,r,y,S){for(var X=null,ot=null,G=r,W=r=0,st=null;G!==null&&W<y.length;W++){G.index>W?(st=G,G=null):st=G.sibling;var rt=v(g,G,y[W],S);if(rt===null){G===null&&(G=st);break}t&&G&&rt.alternate===null&&e(g,G),r=u(rt,r,W),ot===null?X=rt:ot.sibling=rt,ot=rt,G=st}if(W===y.length)return l(g,G),ft&&Le(g,W),X;if(G===null){for(;W<y.length;W++)G=E(g,y[W],S),G!==null&&(r=u(G,r,W),ot===null?X=G:ot.sibling=G,ot=G);return ft&&Le(g,W),X}for(G=a(G);W<y.length;W++)st=b(G,g,W,y[W],S),st!==null&&(t&&st.alternate!==null&&G.delete(st.key===null?W:st.key),r=u(st,r,W),ot===null?X=st:ot.sibling=st,ot=st);return t&&G.forEach(function(El){return e(g,El)}),ft&&Le(g,W),X}function Z(g,r,y,S){if(y==null)throw Error(o(151));for(var X=null,ot=null,G=r,W=r=0,st=null,rt=y.next();G!==null&&!rt.done;W++,rt=y.next()){G.index>W?(st=G,G=null):st=G.sibling;var El=v(g,G,rt.value,S);if(El===null){G===null&&(G=st);break}t&&G&&El.alternate===null&&e(g,G),r=u(El,r,W),ot===null?X=El:ot.sibling=El,ot=El,G=st}if(rt.done)return l(g,G),ft&&Le(g,W),X;if(G===null){for(;!rt.done;W++,rt=y.next())rt=E(g,rt.value,S),rt!==null&&(r=u(rt,r,W),ot===null?X=rt:ot.sibling=rt,ot=rt);return ft&&Le(g,W),X}for(G=a(G);!rt.done;W++,rt=y.next())rt=b(G,g,W,rt.value,S),rt!==null&&(t&&rt.alternate!==null&&G.delete(rt.key===null?W:rt.key),r=u(rt,r,W),ot===null?X=rt:ot.sibling=rt,ot=rt);return t&&G.forEach(function(og){return e(g,og)}),ft&&Le(g,W),X}function Nt(g,r,y,S){if(typeof y=="object"&&y!==null&&y.type===it&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case dt:t:{for(var X=y.key;r!==null;){if(r.key===X){if(X=y.type,X===it){if(r.tag===7){l(g,r.sibling),S=n(r,y.props.children),S.return=g,g=S;break t}}else if(r.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===P&&Hl(X)===r.type){l(g,r.sibling),S=n(r,y.props),ka(S,y),S.return=g,g=S;break t}l(g,r);break}else e(g,r);r=r.sibling}y.type===it?(S=Rl(y.props.children,g.mode,S,y.key),S.return=g,g=S):(S=Jn(y.type,y.key,y.props,null,g.mode,S),ka(S,y),S.return=g,g=S)}return i(g);case ut:t:{for(X=y.key;r!==null;){if(r.key===X)if(r.tag===4&&r.stateNode.containerInfo===y.containerInfo&&r.stateNode.implementation===y.implementation){l(g,r.sibling),S=n(r,y.children||[]),S.return=g,g=S;break t}else{l(g,r);break}else e(g,r);r=r.sibling}S=Oi(y,g.mode,S),S.return=g,g=S}return i(g);case P:return y=Hl(y),Nt(g,r,y,S)}if(Wt(y))return q(g,r,y,S);if(Dt(y)){if(X=Dt(y),typeof X!="function")throw Error(o(150));return y=X.call(y),Z(g,r,y,S)}if(typeof y.then=="function")return Nt(g,r,tu(y),S);if(y.$$typeof===F)return Nt(g,r,Wn(g,y),S);eu(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,r!==null&&r.tag===6?(l(g,r.sibling),S=n(r,y),S.return=g,g=S):(l(g,r),S=Ai(y,g.mode,S),S.return=g,g=S),i(g)):l(g,r)}return function(g,r,y,S){try{Ia=0;var X=Nt(g,r,y,S);return ra=null,X}catch(G){if(G===oa||G===Fn)throw G;var ot=de(29,G,null,g.mode);return ot.lanes=S,ot.return=g,ot}finally{}}}var Gl=Uf(!0),qf=Uf(!1),cl=!1;function Gi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Li(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(mt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Kn(t),bf(t,null,l),e}return wn(t,a,e,l),Kn(t)}function Wa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ts(t,l)}}function Xi(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=e:u=u.next=e}else n=u=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Qi=!1;function $a(){if(Qi){var t=fa;if(t!==null)throw t}}function Fa(t,e,l,a){Qi=!1;var n=t.updateQueue;cl=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var f=s,h=f.next;f.next=null,i===null?u=h:i.next=h,i=f;var p=t.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=h:s.next=h,p.lastBaseUpdate=f))}if(u!==null){var E=n.baseState;i=0,p=h=f=null,s=u;do{var v=s.lane&-536870913,b=v!==s.lane;if(b?(ct&v)===v:(a&v)===v){v!==0&&v===sa&&(Qi=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var q=t,Z=s;v=e;var Nt=l;switch(Z.tag){case 1:if(q=Z.payload,typeof q=="function"){E=q.call(Nt,E,v);break t}E=q;break t;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Z.payload,v=typeof q=="function"?q.call(Nt,E,v):q,v==null)break t;E=O({},E,v);break t;case 2:cl=!0}}v=s.callback,v!==null&&(t.flags|=64,b&&(t.flags|=8192),b=n.callbacks,b===null?n.callbacks=[v]:b.push(v))}else b={lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(h=p=b,f=E):p=p.next=b,i|=v;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;b=s,s=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);p===null&&(f=E),n.baseState=f,n.firstBaseUpdate=h,n.lastBaseUpdate=p,u===null&&(n.shared.lanes=0),gl|=i,t.lanes=i,t.memoizedState=E}}function Yf(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Hf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Yf(l[t],e)}var da=m(null),lu=m(0);function Bf(t,e){t=$e,U(lu,t),U(da,e),$e=t|e.baseLanes}function Zi(){U(lu,$e),U(da,da.current)}function Vi(){$e=lu.current,T(da),T(lu)}var me=m(null),Te=null;function ol(t){var e=t.alternate;U(Mt,Mt.current&1),U(me,t),Te===null&&(e===null||da.current!==null||e.memoizedState!==null)&&(Te=t)}function wi(t){U(Mt,Mt.current),U(me,t),Te===null&&(Te=t)}function Gf(t){t.tag===22?(U(Mt,Mt.current),U(me,t),Te===null&&(Te=t)):rl()}function rl(){U(Mt,Mt.current),U(me,me.current)}function ge(t){T(me),Te===t&&(Te=null),T(Mt)}var Mt=m(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||$c(l)||Fc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ze=0,I=null,xt=null,Ht=null,nu=!1,ma=!1,Ll=!1,uu=0,Pa=0,ga=null,tm=0;function jt(){throw Error(o(321))}function Ki(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!re(t[l],e[l]))return!1;return!0}function Ji(t,e,l,a,n,u){return Ze=u,I=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?So:sc,Ll=!1,u=l(a,n),Ll=!1,ma&&(u=Xf(e,l,a,n)),Lf(t),u}function Lf(t){N.H=ln;var e=xt!==null&&xt.next!==null;if(Ze=0,Ht=xt=I=null,nu=!1,Pa=0,ga=null,e)throw Error(o(300));t===null||Bt||(t=t.dependencies,t!==null&&kn(t)&&(Bt=!0))}function Xf(t,e,l,a){I=t;var n=0;do{if(ma&&(ga=null),Pa=0,ma=!1,25<=n)throw Error(o(301));if(n+=1,Ht=xt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}N.H=Eo,u=e(l,a)}while(ma);return u}function em(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?tn(e):e,t=t.useState()[0],(xt!==null?xt.memoizedState:null)!==t&&(I.flags|=1024),e}function Ii(){var t=uu!==0;return uu=0,t}function ki(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Wi(t){if(nu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}nu=!1}Ze=0,Ht=xt=I=null,ma=!1,Pa=uu=0,ga=null}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?I.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Ut(){if(xt===null){var t=I.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=Ht===null?I.memoizedState:Ht.next;if(e!==null)Ht=e,xt=t;else{if(t===null)throw I.alternate===null?Error(o(467)):Error(o(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Ht===null?I.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tn(t){var e=Pa;return Pa+=1,ga===null&&(ga=[]),t=Cf(ga,t,e),e=I,(Ht===null?e.memoizedState:Ht.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?So:sc),t}function cu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tn(t);if(t.$$typeof===F)return Jt(t)}throw Error(o(438,String(t)))}function $i(t){var e=null,l=I.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=I.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=iu(),I.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=tt;return e.index++,l}function Ve(t,e){return typeof e=="function"?e(t):e}function su(t){var e=Ut();return Fi(e,xt,t)}function Fi(t,e,l){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var n=t.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}e.baseQueue=n=u,a.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{e=n.next;var s=i=null,f=null,h=e,p=!1;do{var E=h.lane&-536870913;if(E!==h.lane?(ct&E)===E:(Ze&E)===E){var v=h.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),E===sa&&(p=!0);else if((Ze&v)===v){h=h.next,v===sa&&(p=!0);continue}else E={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(s=f=E,i=u):f=f.next=E,I.lanes|=v,gl|=v;E=h.action,Ll&&l(u,E),u=h.hasEagerState?h.eagerState:l(u,E)}else v={lane:E,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(s=f=v,i=u):f=f.next=v,I.lanes|=E,gl|=E;h=h.next}while(h!==null&&h!==e);if(f===null?i=u:f.next=s,!re(u,t.memoizedState)&&(Bt=!0,p&&(l=fa,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=f,a.lastRenderedState=u}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Pi(t){var e=Ut(),l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,u=e.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=t(u,i.action),i=i.next;while(i!==n);re(u,e.memoizedState)||(Bt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function Qf(t,e,l){var a=I,n=Ut(),u=ft;if(u){if(l===void 0)throw Error(o(407));l=l()}else l=e();var i=!re((xt||n).memoizedState,l);if(i&&(n.memoizedState=l,Bt=!0),n=n.queue,lc(wf.bind(null,a,n,t),[t]),n.getSnapshot!==e||i||Ht!==null&&Ht.memoizedState.tag&1){if(a.flags|=2048,ya(9,{destroy:void 0},Vf.bind(null,a,n,l,e),null),St===null)throw Error(o(349));u||(Ze&127)!==0||Zf(a,e,l)}return l}function Zf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=I.updateQueue,e===null?(e=iu(),I.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Vf(t,e,l,a){e.value=l,e.getSnapshot=a,Kf(e)&&Jf(t)}function wf(t,e,l){return l(function(){Kf(e)&&Jf(t)})}function Kf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!re(t,l)}catch{return!0}}function Jf(t){var e=Cl(t,2);e!==null&&ie(e,t,2)}function tc(t){var e=Pt();if(typeof t=="function"){var l=t;if(t=l(),Ll){tl(!0);try{l()}finally{tl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:t},e}function If(t,e,l,a){return t.baseState=l,Fi(t,xt,typeof a=="function"?a:Ve)}function lm(t,e,l,a,n){if(ru(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};N.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,kf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function kf(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var u=N.T,i={};N.T=i;try{var s=l(n,a),f=N.S;f!==null&&f(i,s),Wf(t,e,s)}catch(h){ec(t,e,h)}finally{u!==null&&i.types!==null&&(u.types=i.types),N.T=u}}else try{u=l(n,a),Wf(t,e,u)}catch(h){ec(t,e,h)}}function Wf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){$f(t,e,a)},function(a){return ec(t,e,a)}):$f(t,e,l)}function $f(t,e,l){e.status="fulfilled",e.value=l,Ff(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,kf(t,l)))}function ec(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Ff(e),e=e.next;while(e!==a)}t.action=null}function Ff(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Pf(t,e){return e}function to(t,e){if(ft){var l=St.formState;if(l!==null){t:{var a=I;if(ft){if(Et){e:{for(var n=Et,u=Ee;n.nodeType!==8;){if(!u){n=null;break e}if(n=Ae(n.nextSibling),n===null){n=null;break e}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){Et=Ae(n.nextSibling),a=n.data==="F!";break t}}ul(a)}a=!1}a&&(e=l[0])}}return l=Pt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pf,lastRenderedState:e},l.queue=a,l=po.bind(null,I,a),a.dispatch=l,a=tc(!1),u=cc.bind(null,I,!1,a.queue),a=Pt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=lm.bind(null,I,n,u,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function eo(t){var e=Ut();return lo(e,xt,t)}function lo(t,e,l){if(e=Fi(t,e,Pf)[0],t=su(Ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=tn(e)}catch(i){throw i===oa?Fn:i}else a=e;e=Ut();var n=e.queue,u=n.dispatch;return l!==e.memoizedState&&(I.flags|=2048,ya(9,{destroy:void 0},am.bind(null,n,l),null)),[a,u,t]}function am(t,e){t.action=e}function ao(t){var e=Ut(),l=xt;if(l!==null)return lo(e,l,t);Ut(),e=e.memoizedState,l=Ut();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ya(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=I.updateQueue,e===null&&(e=iu(),I.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function no(){return Ut().memoizedState}function fu(t,e,l,a){var n=Pt();I.flags|=t,n.memoizedState=ya(1|e,{destroy:void 0},l,a===void 0?null:a)}function ou(t,e,l,a){var n=Ut();a=a===void 0?null:a;var u=n.memoizedState.inst;xt!==null&&a!==null&&Ki(a,xt.memoizedState.deps)?n.memoizedState=ya(e,u,l,a):(I.flags|=t,n.memoizedState=ya(1|e,u,l,a))}function uo(t,e){fu(8390656,8,t,e)}function lc(t,e){ou(2048,8,t,e)}function nm(t){I.flags|=4;var e=I.updateQueue;if(e===null)e=iu(),I.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function io(t){var e=Ut().memoizedState;return nm({ref:e,nextImpl:t}),function(){if((mt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function co(t,e){return ou(4,2,t,e)}function so(t,e){return ou(4,4,t,e)}function fo(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oo(t,e,l){l=l!=null?l.concat([t]):null,ou(4,4,fo.bind(null,e,t),l)}function ac(){}function ro(t,e){var l=Ut();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Ki(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function mo(t,e){var l=Ut();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Ki(e,a[1]))return a[0];if(a=t(),Ll){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[a,e],a}function nc(t,e,l){return l===void 0||(Ze&1073741824)!==0&&(ct&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=gr(),I.lanes|=t,gl|=t,l)}function go(t,e,l,a){return re(l,e)?l:da.current!==null?(t=nc(t,l,a),re(t,e)||(Bt=!0),t):(Ze&42)===0||(Ze&1073741824)!==0&&(ct&261930)===0?(Bt=!0,t.memoizedState=l):(t=gr(),I.lanes|=t,gl|=t,e)}function yo(t,e,l,a,n){var u=M.p;M.p=u!==0&&8>u?u:8;var i=N.T,s={};N.T=s,cc(t,!1,e,l);try{var f=n(),h=N.S;if(h!==null&&h(s,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var p=Pd(f,a);en(t,e,p,ve(t))}else en(t,e,a,ve(t))}catch(E){en(t,e,{then:function(){},status:"rejected",reason:E},ve())}finally{M.p=u,i!==null&&s.types!==null&&(i.types=s.types),N.T=i}}function um(){}function uc(t,e,l,a){if(t.tag!==5)throw Error(o(476));var n=ho(t).queue;yo(t,n,e,V,l===null?um:function(){return vo(t),l(a)})}function ho(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:V},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function vo(t){var e=ho(t);e.next===null&&(e=t.alternate.memoizedState),en(t,e.next.queue,{},ve())}function ic(){return Jt(xn)}function bo(){return Ut().memoizedState}function xo(){return Ut().memoizedState}function im(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ve();t=sl(l);var a=fl(e,t,l);a!==null&&(ie(a,e,l),Wa(a,e,l)),e={cache:qi()},t.payload=e;return}e=e.return}}function cm(t,e,l){var a=ve();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ru(t)?No(e,l):(l=Ei(t,e,l,a),l!==null&&(ie(l,t,a),_o(l,e,a)))}function po(t,e,l){var a=ve();en(t,e,l,a)}function en(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ru(t))No(e,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,s=u(i,l);if(n.hasEagerState=!0,n.eagerState=s,re(s,i))return wn(t,e,n,0),St===null&&Vn(),!1}catch{}finally{}if(l=Ei(t,e,n,a),l!==null)return ie(l,t,a),_o(l,e,a),!0}return!1}function cc(t,e,l,a){if(a={lane:2,revertLane:Gc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ru(t)){if(e)throw Error(o(479))}else e=Ei(t,l,a,2),e!==null&&ie(e,t,2)}function ru(t){var e=t.alternate;return t===I||e!==null&&e===I}function No(t,e){ma=nu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function _o(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ts(t,l)}}var ln={readContext:Jt,use:cu,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt};ln.useEffectEvent=jt;var So={readContext:Jt,use:cu,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:uo,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,fu(4194308,4,fo.bind(null,e,t),l)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){fu(4,2,t,e)},useMemo:function(t,e){var l=Pt();e=e===void 0?null:e;var a=t();if(Ll){tl(!0);try{t()}finally{tl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Pt();if(l!==void 0){var n=l(e);if(Ll){tl(!0);try{l(e)}finally{tl(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=cm.bind(null,I,t),[a.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:function(t){t=tc(t);var e=t.queue,l=po.bind(null,I,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:ac,useDeferredValue:function(t,e){var l=Pt();return nc(l,t,e)},useTransition:function(){var t=tc(!1);return t=yo.bind(null,I,t.queue,!0,!1),Pt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=I,n=Pt();if(ft){if(l===void 0)throw Error(o(407));l=l()}else{if(l=e(),St===null)throw Error(o(349));(ct&127)!==0||Zf(a,e,l)}n.memoizedState=l;var u={value:l,getSnapshot:e};return n.queue=u,uo(wf.bind(null,a,u,t),[t]),a.flags|=2048,ya(9,{destroy:void 0},Vf.bind(null,a,u,l,e),null),l},useId:function(){var t=Pt(),e=St.identifierPrefix;if(ft){var l=Me,a=Re;l=(a&~(1<<32-oe(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=uu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=tm++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ic,useFormState:to,useActionState:to,useOptimistic:function(t){var e=Pt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=cc.bind(null,I,!0,l),l.dispatch=e,[t,e]},useMemoCache:$i,useCacheRefresh:function(){return Pt().memoizedState=im.bind(null,I)},useEffectEvent:function(t){var e=Pt(),l={impl:t};return e.memoizedState=l,function(){if((mt&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},sc={readContext:Jt,use:cu,useCallback:ro,useContext:Jt,useEffect:lc,useImperativeHandle:oo,useInsertionEffect:co,useLayoutEffect:so,useMemo:mo,useReducer:su,useRef:no,useState:function(){return su(Ve)},useDebugValue:ac,useDeferredValue:function(t,e){var l=Ut();return go(l,xt.memoizedState,t,e)},useTransition:function(){var t=su(Ve)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:tn(t),e]},useSyncExternalStore:Qf,useId:bo,useHostTransitionStatus:ic,useFormState:eo,useActionState:eo,useOptimistic:function(t,e){var l=Ut();return If(l,xt,t,e)},useMemoCache:$i,useCacheRefresh:xo};sc.useEffectEvent=io;var Eo={readContext:Jt,use:cu,useCallback:ro,useContext:Jt,useEffect:lc,useImperativeHandle:oo,useInsertionEffect:co,useLayoutEffect:so,useMemo:mo,useReducer:Pi,useRef:no,useState:function(){return Pi(Ve)},useDebugValue:ac,useDeferredValue:function(t,e){var l=Ut();return xt===null?nc(l,t,e):go(l,xt.memoizedState,t,e)},useTransition:function(){var t=Pi(Ve)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:tn(t),e]},useSyncExternalStore:Qf,useId:bo,useHostTransitionStatus:ic,useFormState:ao,useActionState:ao,useOptimistic:function(t,e){var l=Ut();return xt!==null?If(l,xt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:$i,useCacheRefresh:xo};Eo.useEffectEvent=io;function fc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:O({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var oc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ve(),n=sl(a);n.payload=e,l!=null&&(n.callback=l),e=fl(t,n,a),e!==null&&(ie(e,t,a),Wa(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ve(),n=sl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=fl(t,n,a),e!==null&&(ie(e,t,a),Wa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ve(),a=sl(l);a.tag=2,e!=null&&(a.callback=e),e=fl(t,a,l),e!==null&&(ie(e,t,l),Wa(e,t,l))}};function To(t,e,l,a,n,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,i):e.prototype&&e.prototype.isPureReactComponent?!Qa(l,a)||!Qa(n,u):!0}function Ao(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function Xl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=O({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Oo(t){Zn(t)}function Do(t){console.error(t)}function jo(t){Zn(t)}function du(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function zo(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rc(t,e,l){return l=sl(l),l.tag=3,l.payload={element:null},l.callback=function(){du(t,e)},l}function Co(t){return t=sl(t),t.tag=3,t}function Ro(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;t.payload=function(){return n(u)},t.callback=function(){zo(e,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){zo(e,l,a),typeof n!="function"&&(yl===null?yl=new Set([this]):yl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function sm(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ca(e,l,n,!0),l=me.current,l!==null){switch(l.tag){case 31:case 13:return Te===null?Eu():l.alternate===null&&zt===0&&(zt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Pn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Yc(t,a,n)),!1;case 22:return l.flags|=65536,a===Pn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Yc(t,a,n)),!1}throw Error(o(435,l.tag))}return Yc(t,a,n),Eu(),!1}if(ft)return e=me.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==zi&&(t=Error(o(422),{cause:a}),wa(Ne(t,l)))):(a!==zi&&(e=Error(o(423),{cause:a}),wa(Ne(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=Ne(a,l),n=rc(t.stateNode,a,n),Xi(t,n),zt!==4&&(zt=2)),!1;var u=Error(o(520),{cause:a});if(u=Ne(u,l),rn===null?rn=[u]:rn.push(u),zt!==4&&(zt=2),e===null)return!0;a=Ne(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=rc(l.stateNode,a,t),Xi(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(yl===null||!yl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Co(n),Ro(n,t,l,a),Xi(l,n),!1}l=l.return}while(l!==null);return!1}var dc=Error(o(461)),Bt=!1;function It(t,e,l,a){e.child=t===null?qf(e,null,l,a):Gl(e,t.child,l,a)}function Mo(t,e,l,a,n){l=l.render;var u=e.ref;if("ref"in a){var i={};for(var s in a)s!=="ref"&&(i[s]=a[s])}else i=a;return ql(e),a=Ji(t,e,l,i,u,n),s=Ii(),t!==null&&!Bt?(ki(t,e,n),we(t,e,n)):(ft&&s&&Di(e),e.flags|=1,It(t,e,a,n),e.child)}function Uo(t,e,l,a,n){if(t===null){var u=l.type;return typeof u=="function"&&!Ti(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,qo(t,e,u,a,n)):(t=Jn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!pc(t,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Qa,l(i,a)&&t.ref===e.ref)return we(t,e,n)}return e.flags|=1,t=Ge(u,a),t.ref=e.ref,t.return=e,e.child=t}function qo(t,e,l,a,n){if(t!==null){var u=t.memoizedProps;if(Qa(u,a)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=a=u,pc(t,n))(t.flags&131072)!==0&&(Bt=!0);else return e.lanes=t.lanes,we(t,e,n)}return mc(t,e,l,a,n)}function Yo(t,e,l,a){var n=a.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,e.child=null;return Ho(t,e,u,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&$n(e,u!==null?u.cachePool:null),u!==null?Bf(e,u):Zi(),Gf(e);else return a=e.lanes=536870912,Ho(t,e,u!==null?u.baseLanes|l:l,l,a)}else u!==null?($n(e,u.cachePool),Bf(e,u),rl(),e.memoizedState=null):(t!==null&&$n(e,null),Zi(),rl());return It(t,e,n,l),e.child}function an(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ho(t,e,l,a,n){var u=Hi();return u=u===null?null:{parent:Yt._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&$n(e,null),Zi(),Gf(e),t!==null&&ca(t,e,a,!0),e.childLanes=n,null}function mu(t,e){return e=yu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Bo(t,e,l){return Gl(e,t.child,null,l),t=mu(e,e.pendingProps),t.flags|=2,ge(e),e.memoizedState=null,t}function fm(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ft){if(a.mode==="hidden")return t=mu(e,a),e.lanes=536870912,an(null,t);if(wi(e),(t=Et)?(t=Wr(t,Ee),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:al!==null?{id:Re,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},l=pf(t),l.return=e,e.child=l,Kt=e,Et=null)):t=null,t===null)throw ul(e);return e.lanes=536870912,null}return mu(e,a)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(wi(e),n)if(e.flags&256)e.flags&=-257,e=Bo(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(Bt||ca(t,e,l,!1),n=(l&t.childLanes)!==0,Bt||n){if(a=St,a!==null&&(i=As(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Cl(t,i),ie(a,t,i),dc;Eu(),e=Bo(t,e,l)}else t=u.treeContext,Et=Ae(i.nextSibling),Kt=e,ft=!0,nl=null,Ee=!1,t!==null&&Sf(e,t),e=mu(e,a),e.flags|=4096;return e}return t=Ge(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function gu(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function mc(t,e,l,a,n){return ql(e),l=Ji(t,e,l,a,void 0,n),a=Ii(),t!==null&&!Bt?(ki(t,e,n),we(t,e,n)):(ft&&a&&Di(e),e.flags|=1,It(t,e,l,n),e.child)}function Go(t,e,l,a,n,u){return ql(e),e.updateQueue=null,l=Xf(e,a,l,n),Lf(t),a=Ii(),t!==null&&!Bt?(ki(t,e,u),we(t,e,u)):(ft&&a&&Di(e),e.flags|=1,It(t,e,l,u),e.child)}function Lo(t,e,l,a,n){if(ql(e),e.stateNode===null){var u=aa,i=l.contextType;typeof i=="object"&&i!==null&&(u=Jt(i)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=oc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},Gi(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?Jt(i):aa,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(fc(e,l,i,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&oc.enqueueReplaceState(u,u.state,null),Fa(e,a,u,n),$a(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var s=e.memoizedProps,f=Xl(l,s);u.props=f;var h=u.context,p=l.contextType;i=aa,typeof p=="object"&&p!==null&&(i=Jt(p));var E=l.getDerivedStateFromProps;p=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,p||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||h!==i)&&Ao(e,u,a,i),cl=!1;var v=e.memoizedState;u.state=v,Fa(e,a,u,n),$a(),h=e.memoizedState,s||v!==h||cl?(typeof E=="function"&&(fc(e,l,E,a),h=e.memoizedState),(f=cl||To(e,l,f,a,v,h,i))?(p||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=h),u.props=a,u.state=h,u.context=i,a=f):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,Li(t,e),i=e.memoizedProps,p=Xl(l,i),u.props=p,E=e.pendingProps,v=u.context,h=l.contextType,f=aa,typeof h=="object"&&h!==null&&(f=Jt(h)),s=l.getDerivedStateFromProps,(h=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==E||v!==f)&&Ao(e,u,a,f),cl=!1,v=e.memoizedState,u.state=v,Fa(e,a,u,n),$a();var b=e.memoizedState;i!==E||v!==b||cl||t!==null&&t.dependencies!==null&&kn(t.dependencies)?(typeof s=="function"&&(fc(e,l,s,a),b=e.memoizedState),(p=cl||To(e,l,p,a,v,b,f)||t!==null&&t.dependencies!==null&&kn(t.dependencies))?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,b,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,b,f)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=b),u.props=a,u.state=b,u.context=f,a=p):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,gu(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=Gl(e,t.child,null,n),e.child=Gl(e,null,l,n)):It(t,e,l,n),e.memoizedState=u.state,t=e.child):t=we(t,e,n),t}function Xo(t,e,l,a){return Ml(),e.flags|=256,It(t,e,l,a),e.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(t){return{baseLanes:t,cachePool:jf()}}function hc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=he),t}function Qo(t,e,l){var a=e.pendingProps,n=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(Mt.current&2)!==0),i&&(n=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(ft){if(n?ol(e):rl(),(t=Et)?(t=Wr(t,Ee),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:al!==null?{id:Re,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},l=pf(t),l.return=e,e.child=l,Kt=e,Et=null)):t=null,t===null)throw ul(e);return Fc(t)?e.lanes=32:e.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(rl(),n=e.mode,s=yu({mode:"hidden",children:s},n),a=Rl(a,n,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,a=e.child,a.memoizedState=yc(l),a.childLanes=hc(t,i,l),e.memoizedState=gc,an(null,a)):(ol(e),vc(e,s))}var f=t.memoizedState;if(f!==null&&(s=f.dehydrated,s!==null)){if(u)e.flags&256?(ol(e),e.flags&=-257,e=bc(t,e,l)):e.memoizedState!==null?(rl(),e.child=t.child,e.flags|=128,e=null):(rl(),s=a.fallback,n=e.mode,a=yu({mode:"visible",children:a.children},n),s=Rl(s,n,l,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,Gl(e,t.child,null,l),a=e.child,a.memoizedState=yc(l),a.childLanes=hc(t,i,l),e.memoizedState=gc,e=an(null,a));else if(ol(e),Fc(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var h=i.dgst;i=h,a=Error(o(419)),a.stack="",a.digest=i,wa({value:a,source:null,stack:null}),e=bc(t,e,l)}else if(Bt||ca(t,e,l,!1),i=(l&t.childLanes)!==0,Bt||i){if(i=St,i!==null&&(a=As(i,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,Cl(t,a),ie(i,t,a),dc;$c(s)||Eu(),e=bc(t,e,l)}else $c(s)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,Et=Ae(s.nextSibling),Kt=e,ft=!0,nl=null,Ee=!1,t!==null&&Sf(e,t),e=vc(e,a.children),e.flags|=4096);return e}return n?(rl(),s=a.fallback,n=e.mode,f=t.child,h=f.sibling,a=Ge(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,h!==null?s=Ge(h,s):(s=Rl(s,n,l,null),s.flags|=2),s.return=e,a.return=e,a.sibling=s,e.child=a,an(null,a),a=e.child,s=t.child.memoizedState,s===null?s=yc(l):(n=s.cachePool,n!==null?(f=Yt._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=jf(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=hc(t,i,l),e.memoizedState=gc,an(t.child,a)):(ol(e),l=t.child,t=l.sibling,l=Ge(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function vc(t,e){return e=yu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function yu(t,e){return t=de(22,t,null,e),t.lanes=0,t}function bc(t,e,l){return Gl(e,t.child,null,l),t=vc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zo(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Mi(t.return,e,l)}function xc(t,e,l,a,n,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function Vo(t,e,l){var a=e.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=Mt.current,s=(i&2)!==0;if(s?(i=i&1|2,e.flags|=128):i&=1,U(Mt,i),It(t,e,a,l),a=ft?Va:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zo(t,l,e);else if(t.tag===19)Zo(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&au(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),xc(e,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&au(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}xc(e,!0,l,null,u,a);break;case"together":xc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function we(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),gl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ca(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,l=Ge(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ge(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function pc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&kn(t)))}function om(t,e,l){switch(e.tag){case 3:Ft(e,e.stateNode.containerInfo),il(e,Yt,t.memoizedState.cache),Ml();break;case 27:case 5:ja(e);break;case 4:Ft(e,e.stateNode.containerInfo);break;case 10:il(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,wi(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(ol(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Qo(t,e,l):(ol(e),t=we(t,e,l),t!==null?t.sibling:null);ol(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ca(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Vo(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(Mt,Mt.current),a)break;return null;case 22:return e.lanes=0,Yo(t,e,l,e.pendingProps);case 24:il(e,Yt,t.memoizedState.cache)}return we(t,e,l)}function wo(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Bt=!0;else{if(!pc(t,l)&&(e.flags&128)===0)return Bt=!1,om(t,e,l);Bt=(t.flags&131072)!==0}else Bt=!1,ft&&(e.flags&1048576)!==0&&_f(e,Va,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Hl(e.elementType),e.type=t,typeof t=="function")Ti(t)?(a=Xl(t,a),e.tag=1,e=Lo(null,e,t,a,l)):(e.tag=0,e=mc(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===qt){e.tag=11,e=Mo(null,e,t,a,l);break t}else if(n===R){e.tag=14,e=Uo(null,e,t,a,l);break t}}throw e=De(t)||t,Error(o(306,e,""))}}return e;case 0:return mc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Xl(a,e.pendingProps),Lo(t,e,a,n,l);case 3:t:{if(Ft(e,e.stateNode.containerInfo),t===null)throw Error(o(387));a=e.pendingProps;var u=e.memoizedState;n=u.element,Li(t,e),Fa(e,a,null,l);var i=e.memoizedState;if(a=i.cache,il(e,Yt,a),a!==u.cache&&Ui(e,[Yt],l,!0),$a(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Xo(t,e,a,l);break t}else if(a!==n){n=Ne(Error(o(424)),e),wa(n),e=Xo(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=Ae(t.firstChild),Kt=e,ft=!0,nl=null,Ee=!0,l=qf(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ml(),a===n){e=we(t,e,l);break t}It(t,e,a,l)}e=e.child}return e;case 26:return gu(t,e),t===null?(l=l0(e.type,null,e.pendingProps,null))?e.memoizedState=l:ft||(l=e.type,t=e.pendingProps,a=Cu(lt.current).createElement(l),a[wt]=e,a[te]=t,kt(a,l,t),Zt(a),e.stateNode=a):e.memoizedState=l0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ja(e),t===null&&ft&&(a=e.stateNode=Pr(e.type,e.pendingProps,lt.current),Kt=e,Ee=!0,n=Et,xl(e.type)?(Pc=n,Et=Ae(a.firstChild)):Et=n),It(t,e,e.pendingProps.children,l),gu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ft&&((n=a=Et)&&(a=Lm(a,e.type,e.pendingProps,Ee),a!==null?(e.stateNode=a,Kt=e,Et=Ae(a.firstChild),Ee=!1,n=!0):n=!1),n||ul(e)),ja(e),n=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,a=u.children,Ic(n,u)?a=null:i!==null&&Ic(n,i)&&(e.flags|=32),e.memoizedState!==null&&(n=Ji(t,e,em,null,null,l),xn._currentValue=n),gu(t,e),It(t,e,a,l),e.child;case 6:return t===null&&ft&&((t=l=Et)&&(l=Xm(l,e.pendingProps,Ee),l!==null?(e.stateNode=l,Kt=e,Et=null,t=!0):t=!1),t||ul(e)),null;case 13:return Qo(t,e,l);case 4:return Ft(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Gl(e,null,a,l):It(t,e,a,l),e.child;case 11:return Mo(t,e,e.type,e.pendingProps,l);case 7:return It(t,e,e.pendingProps,l),e.child;case 8:return It(t,e,e.pendingProps.children,l),e.child;case 12:return It(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,il(e,e.type,a.value),It(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,ql(e),n=Jt(n),a=a(n),e.flags|=1,It(t,e,a,l),e.child;case 14:return Uo(t,e,e.type,e.pendingProps,l);case 15:return qo(t,e,e.type,e.pendingProps,l);case 19:return Vo(t,e,l);case 31:return fm(t,e,l);case 22:return Yo(t,e,l,e.pendingProps);case 24:return ql(e),a=Jt(Yt),t===null?(n=Hi(),n===null&&(n=St,u=qi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),e.memoizedState={parent:a,cache:n},Gi(e),il(e,Yt,n)):((t.lanes&l)!==0&&(Li(t,e),Fa(e,null,null,l),$a()),n=t.memoizedState,u=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),il(e,Yt,a)):(a=u.cache,il(e,Yt,a),a!==n.cache&&Ui(e,[Yt],l,!0))),It(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Ke(t){t.flags|=4}function Nc(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(br())t.flags|=8192;else throw Bl=Pn,Bi}else t.flags&=-16777217}function Ko(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c0(e))if(br())t.flags|=8192;else throw Bl=Pn,Bi}function hu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ss():536870912,t.lanes|=e,xa|=e)}function nn(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function rm(t,e,l){var a=e.pendingProps;switch(ji(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Tt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Qe(Yt),Rt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ia(e)?Ke(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ci())),Tt(e),null;case 26:var n=e.type,u=e.memoizedState;return t===null?(Ke(e),u!==null?(Tt(e),Ko(e,u)):(Tt(e),Nc(e,n,null,a,l))):u?u!==t.memoizedState?(Ke(e),Tt(e),Ko(e,u)):(Tt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ke(e),Tt(e),Nc(e,n,t,a,l)),null;case 27:if(On(e),l=lt.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ke(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Tt(e),null}t=Y.current,ia(e)?Ef(e):(t=Pr(n,a,l),e.stateNode=t,Ke(e))}return Tt(e),null;case 5:if(On(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ke(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Tt(e),null}if(u=Y.current,ia(e))Ef(e);else{var i=Cu(lt.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[wt]=e,u[te]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(kt(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ke(e)}}return Tt(e),Nc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ke(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=lt.current,ia(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Kt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[wt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Qr(t.nodeValue,l)),t||ul(e,!0)}else t=Cu(t).createTextNode(a),t[wt]=e,e.stateNode=t}return Tt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=ia(e),l!==null){if(t===null){if(!a)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[wt]=e}else Ml(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Tt(e),t=!1}else l=Ci(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(ge(e),e):(ge(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Tt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ia(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(o(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[wt]=e}else Ml(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Tt(e),n=!1}else n=Ci(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ge(e),e):(ge(e),null)}return ge(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),hu(e,e.updateQueue),Tt(e),null);case 4:return Rt(),t===null&&Zc(e.stateNode.containerInfo),Tt(e),null;case 10:return Qe(e.type),Tt(e),null;case 19:if(T(Mt),a=e.memoizedState,a===null)return Tt(e),null;if(n=(e.flags&128)!==0,u=a.rendering,u===null)if(n)nn(a,!1);else{if(zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=au(t),u!==null){for(e.flags|=128,nn(a,!1),t=u.updateQueue,e.updateQueue=t,hu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)xf(l,t),l=l.sibling;return U(Mt,Mt.current&1|2),ft&&Le(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&se()>Nu&&(e.flags|=128,n=!0,nn(a,!1),e.lanes=4194304)}else{if(!n)if(t=au(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,hu(e,t),nn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!ft)return Tt(e),null}else 2*se()-a.renderingStartTime>Nu&&l!==536870912&&(e.flags|=128,n=!0,nn(a,!1),e.lanes=4194304);a.isBackwards?(u.sibling=e.child,e.child=u):(t=a.last,t!==null?t.sibling=u:e.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,l=Mt.current,U(Mt,n?l&1|2:l&1),ft&&Le(e,a.treeForkCount),t):(Tt(e),null);case 22:case 23:return ge(e),Vi(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),l=e.updateQueue,l!==null&&hu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&T(Yl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Qe(Yt),Tt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function dm(t,e){switch(ji(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qe(Yt),Rt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return On(e),null;case 31:if(e.memoizedState!==null){if(ge(e),e.alternate===null)throw Error(o(340));Ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ge(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return T(Mt),null;case 4:return Rt(),null;case 10:return Qe(e.type),null;case 22:case 23:return ge(e),Vi(),t!==null&&T(Yl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qe(Yt),null;case 25:return null;default:return null}}function Jo(t,e){switch(ji(e),e.tag){case 3:Qe(Yt),Rt();break;case 26:case 27:case 5:On(e);break;case 4:Rt();break;case 31:e.memoizedState!==null&&ge(e);break;case 13:ge(e);break;case 19:T(Mt);break;case 10:Qe(e.type);break;case 22:case 23:ge(e),Vi(),t!==null&&T(Yl);break;case 24:Qe(Yt)}}function un(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(s){ht(e,e.return,s)}}function dl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&t)===t){var i=a.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,n=e;var f=l,h=s;try{h()}catch(p){ht(n,f,p)}}}a=a.next}while(a!==u)}}catch(p){ht(e,e.return,p)}}function Io(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Hf(e,l)}catch(a){ht(t,t.return,a)}}}function ko(t,e,l){l.props=Xl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){ht(t,e,a)}}function cn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){ht(t,e,n)}}function Ue(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ht(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ht(t,e,n)}else l.current=null}function Wo(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ht(t,t.return,n)}}function _c(t,e,l){try{var a=t.stateNode;Um(a,t.type,l,e),a[te]=e}catch(n){ht(t,t.return,n)}}function $o(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xl(t.type)||t.tag===4}function Sc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$o(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ec(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=He));else if(a!==4&&(a===27&&xl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Ec(t,e,l),t=t.sibling;t!==null;)Ec(t,e,l),t=t.sibling}function vu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&xl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(vu(t,e,l),t=t.sibling;t!==null;)vu(t,e,l),t=t.sibling}function Fo(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);kt(e,a,l),e[wt]=t,e[te]=l}catch(u){ht(t,t.return,u)}}var Je=!1,Gt=!1,Tc=!1,Po=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function mm(t,e){if(t=t.containerInfo,Kc=Bu,t=of(t),bi(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var i=0,s=-1,f=-1,h=0,p=0,E=t,v=null;e:for(;;){for(var b;E!==l||n!==0&&E.nodeType!==3||(s=i+n),E!==u||a!==0&&E.nodeType!==3||(f=i+a),E.nodeType===3&&(i+=E.nodeValue.length),(b=E.firstChild)!==null;)v=E,E=b;for(;;){if(E===t)break e;if(v===l&&++h===n&&(s=i),v===u&&++p===a&&(f=i),(b=E.nextSibling)!==null)break;E=v,v=E.parentNode}E=b}l=s===-1||f===-1?null:{start:s,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jc={focusedElem:t,selectionRange:l},Bu=!1,Vt=e;Vt!==null;)if(e=Vt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Vt=t;else for(;Vt!==null;){switch(e=Vt,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var q=Xl(l.type,n);t=a.getSnapshotBeforeUpdate(q,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(Z){ht(l,l.return,Z)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Wc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Vt=t;break}Vt=e.return}}function tr(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ke(t,l),a&4&&un(5,l);break;case 1:if(ke(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){ht(l,l.return,i)}else{var n=Xl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){ht(l,l.return,i)}}a&64&&Io(l),a&512&&cn(l,l.return);break;case 3:if(ke(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Hf(t,e)}catch(i){ht(l,l.return,i)}}break;case 27:e===null&&a&4&&Fo(l);case 26:case 5:ke(t,l),e===null&&a&4&&Wo(l),a&512&&cn(l,l.return);break;case 12:ke(t,l);break;case 31:ke(t,l),a&4&&ar(t,l);break;case 13:ke(t,l),a&4&&nr(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=_m.bind(null,l),Qm(t,l))));break;case 22:if(a=l.memoizedState!==null||Je,!a){e=e!==null&&e.memoizedState!==null||Gt,n=Je;var u=Gt;Je=a,(Gt=e)&&!u?We(t,l,(l.subtreeFlags&8772)!==0):ke(t,l),Je=n,Gt=u}break;case 30:break;default:ke(t,l)}}function er(t){var e=t.alternate;e!==null&&(t.alternate=null,er(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ei(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var At=null,le=!1;function Ie(t,e,l){for(l=l.child;l!==null;)lr(t,e,l),l=l.sibling}function lr(t,e,l){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(za,l)}catch{}switch(l.tag){case 26:Gt||Ue(l,e),Ie(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Gt||Ue(l,e);var a=At,n=le;xl(l.type)&&(At=l.stateNode,le=!1),Ie(t,e,l),hn(l.stateNode),At=a,le=n;break;case 5:Gt||Ue(l,e);case 6:if(a=At,n=le,At=null,Ie(t,e,l),At=a,le=n,At!==null)if(le)try{(At.nodeType===9?At.body:At.nodeName==="HTML"?At.ownerDocument.body:At).removeChild(l.stateNode)}catch(u){ht(l,e,u)}else try{At.removeChild(l.stateNode)}catch(u){ht(l,e,u)}break;case 18:At!==null&&(le?(t=At,Ir(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Oa(t)):Ir(At,l.stateNode));break;case 4:a=At,n=le,At=l.stateNode.containerInfo,le=!0,Ie(t,e,l),At=a,le=n;break;case 0:case 11:case 14:case 15:dl(2,l,e),Gt||dl(4,l,e),Ie(t,e,l);break;case 1:Gt||(Ue(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&ko(l,e,a)),Ie(t,e,l);break;case 21:Ie(t,e,l);break;case 22:Gt=(a=Gt)||l.memoizedState!==null,Ie(t,e,l),Gt=a;break;default:Ie(t,e,l)}}function ar(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Oa(t)}catch(l){ht(e,e.return,l)}}}function nr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Oa(t)}catch(l){ht(e,e.return,l)}}function gm(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Po),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Po),e;default:throw Error(o(435,t.tag))}}function bu(t,e){var l=gm(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=Sm.bind(null,t,a);a.then(n,n)}})}function ae(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=t,i=e,s=i;t:for(;s!==null;){switch(s.tag){case 27:if(xl(s.type)){At=s.stateNode,le=!1;break t}break;case 5:At=s.stateNode,le=!1;break t;case 3:case 4:At=s.stateNode.containerInfo,le=!0;break t}s=s.return}if(At===null)throw Error(o(160));lr(u,i,n),At=null,le=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)ur(e,t),e=e.sibling}var ze=null;function ur(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ae(e,t),ne(t),a&4&&(dl(3,t,t.return),un(3,t),dl(5,t,t.return));break;case 1:ae(e,t),ne(t),a&512&&(Gt||l===null||Ue(l,l.return)),a&64&&Je&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=ze;if(ae(e,t),ne(t),a&512&&(Gt||l===null||Ue(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ma]||u[wt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),kt(u,a,l),u[wt]=t,Zt(u),a=u;break t;case"link":var i=u0("link","href",n).get(a+(l.href||""));if(i){for(var s=0;s<i.length;s++)if(u=i[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(s,1);break e}}u=n.createElement(a),kt(u,a,l),n.head.appendChild(u);break;case"meta":if(i=u0("meta","content",n).get(a+(l.content||""))){for(s=0;s<i.length;s++)if(u=i[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(s,1);break e}}u=n.createElement(a),kt(u,a,l),n.head.appendChild(u);break;default:throw Error(o(468,a))}u[wt]=t,Zt(u),a=u}t.stateNode=a}else i0(n,t.type,t.stateNode);else t.stateNode=n0(n,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?i0(n,t.type,t.stateNode):n0(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&_c(t,t.memoizedProps,l.memoizedProps)}break;case 27:ae(e,t),ne(t),a&512&&(Gt||l===null||Ue(l,l.return)),l!==null&&a&4&&_c(t,t.memoizedProps,l.memoizedProps);break;case 5:if(ae(e,t),ne(t),a&512&&(Gt||l===null||Ue(l,l.return)),t.flags&32){n=t.stateNode;try{Wl(n,"")}catch(q){ht(t,t.return,q)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,_c(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Tc=!0);break;case 6:if(ae(e,t),ne(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(q){ht(t,t.return,q)}}break;case 3:if(Uu=null,n=ze,ze=Ru(e.containerInfo),ae(e,t),ze=n,ne(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Oa(e.containerInfo)}catch(q){ht(t,t.return,q)}Tc&&(Tc=!1,ir(t));break;case 4:a=ze,ze=Ru(t.stateNode.containerInfo),ae(e,t),ne(t),ze=a;break;case 12:ae(e,t),ne(t);break;case 31:ae(e,t),ne(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bu(t,a)));break;case 13:ae(e,t),ne(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(pu=se()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bu(t,a)));break;case 22:n=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,h=Je,p=Gt;if(Je=h||n,Gt=p||f,ae(e,t),Gt=p,Je=h,ne(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||f||Je||Gt||Ql(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){f=l=e;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=f.stateNode;var E=f.memoizedProps.style,v=E!=null&&E.hasOwnProperty("display")?E.display:null;s.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(q){ht(f,f.return,q)}}}else if(e.tag===6){if(l===null){f=e;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(q){ht(f,f.return,q)}}}else if(e.tag===18){if(l===null){f=e;try{var b=f.stateNode;n?kr(b,!0):kr(f.stateNode,!1)}catch(q){ht(f,f.return,q)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,bu(t,l))));break;case 19:ae(e,t),ne(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,bu(t,a)));break;case 30:break;case 21:break;default:ae(e,t),ne(t)}}function ne(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if($o(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var n=l.stateNode,u=Sc(t);vu(t,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(Wl(i,""),l.flags&=-33);var s=Sc(t);vu(t,s,i);break;case 3:case 4:var f=l.stateNode.containerInfo,h=Sc(t);Ec(t,h,f);break;default:throw Error(o(161))}}catch(p){ht(t,t.return,p)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ir(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ir(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ke(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)tr(t,e.alternate,e),e=e.sibling}function Ql(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:dl(4,e,e.return),Ql(e);break;case 1:Ue(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&ko(e,e.return,l),Ql(e);break;case 27:hn(e.stateNode);case 26:case 5:Ue(e,e.return),Ql(e);break;case 22:e.memoizedState===null&&Ql(e);break;case 30:Ql(e);break;default:Ql(e)}t=t.sibling}}function We(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:We(n,u,l),un(4,u);break;case 1:if(We(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){ht(a,a.return,h)}if(a=u,n=a.updateQueue,n!==null){var s=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Yf(f[n],s)}catch(h){ht(a,a.return,h)}}l&&i&64&&Io(u),cn(u,u.return);break;case 27:Fo(u);case 26:case 5:We(n,u,l),l&&a===null&&i&4&&Wo(u),cn(u,u.return);break;case 12:We(n,u,l);break;case 31:We(n,u,l),l&&i&4&&ar(n,u);break;case 13:We(n,u,l),l&&i&4&&nr(n,u);break;case 22:u.memoizedState===null&&We(n,u,l),cn(u,u.return);break;case 30:break;default:We(n,u,l)}e=e.sibling}}function Ac(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Ka(l))}function Oc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ka(t))}function Ce(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cr(t,e,l,a),e=e.sibling}function cr(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ce(t,e,l,a),n&2048&&un(9,e);break;case 1:Ce(t,e,l,a);break;case 3:Ce(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ka(t)));break;case 12:if(n&2048){Ce(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,s=u.onPostCommit;typeof s=="function"&&s(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){ht(e,e.return,f)}}else Ce(t,e,l,a);break;case 31:Ce(t,e,l,a);break;case 13:Ce(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?Ce(t,e,l,a):sn(t,e):u._visibility&2?Ce(t,e,l,a):(u._visibility|=2,ha(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Ac(i,e);break;case 24:Ce(t,e,l,a),n&2048&&Oc(e.alternate,e);break;default:Ce(t,e,l,a)}}function ha(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,s=l,f=a,h=i.flags;switch(i.tag){case 0:case 11:case 15:ha(u,i,s,f,n),un(8,i);break;case 23:break;case 22:var p=i.stateNode;i.memoizedState!==null?p._visibility&2?ha(u,i,s,f,n):sn(u,i):(p._visibility|=2,ha(u,i,s,f,n)),n&&h&2048&&Ac(i.alternate,i);break;case 24:ha(u,i,s,f,n),n&&h&2048&&Oc(i.alternate,i);break;default:ha(u,i,s,f,n)}e=e.sibling}}function sn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:sn(l,a),n&2048&&Ac(a.alternate,a);break;case 24:sn(l,a),n&2048&&Oc(a.alternate,a);break;default:sn(l,a)}e=e.sibling}}var fn=8192;function va(t,e,l){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)sr(t,e,l),t=t.sibling}function sr(t,e,l){switch(t.tag){case 26:va(t,e,l),t.flags&fn&&t.memoizedState!==null&&tg(l,ze,t.memoizedState,t.memoizedProps);break;case 5:va(t,e,l);break;case 3:case 4:var a=ze;ze=Ru(t.stateNode.containerInfo),va(t,e,l),ze=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=fn,fn=16777216,va(t,e,l),fn=a):va(t,e,l));break;default:va(t,e,l)}}function fr(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function on(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Vt=a,rr(a,t)}fr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)or(t),t=t.sibling}function or(t){switch(t.tag){case 0:case 11:case 15:on(t),t.flags&2048&&dl(9,t,t.return);break;case 3:on(t);break;case 12:on(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xu(t)):on(t);break;default:on(t)}}function xu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Vt=a,rr(a,t)}fr(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:dl(8,e,e.return),xu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,xu(e));break;default:xu(e)}t=t.sibling}}function rr(t,e){for(;Vt!==null;){var l=Vt;switch(l.tag){case 0:case 11:case 15:dl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ka(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Vt=a;else t:for(l=t;Vt!==null;){a=Vt;var n=a.sibling,u=a.return;if(er(a),a===l){Vt=null;break t}if(n!==null){n.return=u,Vt=n;break t}Vt=u}}}var ym={getCacheForType:function(t){var e=Jt(Yt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Jt(Yt).controller.signal}},hm=typeof WeakMap=="function"?WeakMap:Map,mt=0,St=null,at=null,ct=0,yt=0,ye=null,ml=!1,ba=!1,Dc=!1,$e=0,zt=0,gl=0,Zl=0,jc=0,he=0,xa=0,rn=null,ue=null,zc=!1,pu=0,dr=0,Nu=1/0,_u=null,yl=null,Qt=0,hl=null,pa=null,Fe=0,Cc=0,Rc=null,mr=null,dn=0,Mc=null;function ve(){return(mt&2)!==0&&ct!==0?ct&-ct:N.T!==null?Gc():Os()}function gr(){if(he===0)if((ct&536870912)===0||ft){var t=zn;zn<<=1,(zn&3932160)===0&&(zn=262144),he=t}else he=536870912;return t=me.current,t!==null&&(t.flags|=32),he}function ie(t,e,l){(t===St&&(yt===2||yt===9)||t.cancelPendingCommit!==null)&&(Na(t,0),vl(t,ct,he,!1)),Ra(t,l),((mt&2)===0||t!==St)&&(t===St&&((mt&2)===0&&(Zl|=l),zt===4&&vl(t,ct,he,!1)),qe(t))}function yr(t,e,l){if((mt&6)!==0)throw Error(o(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Ca(t,e),n=a?xm(t,e):qc(t,e,!0),u=a;do{if(n===0){ba&&!a&&vl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!vm(l)){n=qc(t,e,!1),u=!1;continue}if(n===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var s=t;n=rn;var f=s.current.memoizedState.isDehydrated;if(f&&(Na(s,i).flags|=256),i=qc(s,i,!1),i!==2){if(Dc&&!f){s.errorRecoveryDisabledLanes|=u,Zl|=u,n=4;break t}u=ue,ue=n,u!==null&&(ue===null?ue=u:ue.push.apply(ue,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Na(t,0),vl(t,e,0,!0);break}t:{switch(a=t,u=n,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:vl(a,e,he,!ml);break t;case 2:ue=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(n=pu+300-se(),10<n)){if(vl(a,e,he,!ml),Rn(a,0,!0)!==0)break t;Fe=e,a.timeoutHandle=Kr(hr.bind(null,a,l,ue,_u,zc,e,he,Zl,xa,ml,u,"Throttled",-0,0),n);break t}hr(a,l,ue,_u,zc,e,he,Zl,xa,ml,u,null,-0,0)}}break}while(!0);qe(t)}function hr(t,e,l,a,n,u,i,s,f,h,p,E,v,b){if(t.timeoutHandle=-1,E=e.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:He},sr(e,u,E);var q=(u&62914560)===u?pu-se():(u&4194048)===u?dr-se():0;if(q=eg(E,q),q!==null){Fe=u,t.cancelPendingCommit=q(Er.bind(null,t,e,u,l,a,n,i,s,f,p,E,null,v,b)),vl(t,u,i,!h);return}}Er(t,e,u,l,a,n,i,s,f)}function vm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!re(u(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vl(t,e,l,a){e&=~jc,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var u=31-oe(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&Es(t,l,e)}function Su(){return(mt&6)===0?(mn(0),!1):!0}function Uc(){if(at!==null){if(yt===0)var t=at.return;else t=at,Xe=Ul=null,Wi(t),ra=null,Ia=0,t=at;for(;t!==null;)Jo(t.alternate,t),t=t.return;at=null}}function Na(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Hm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Fe=0,Uc(),St=t,at=l=Ge(t.current,null),ct=e,yt=0,ye=null,ml=!1,ba=Ca(t,e),Dc=!1,xa=he=jc=Zl=gl=zt=0,ue=rn=null,zc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-oe(a),u=1<<n;e|=t[n],a&=~u}return $e=e,Vn(),l}function vr(t,e){I=null,N.H=ln,e===oa||e===Fn?(e=Rf(),yt=3):e===Bi?(e=Rf(),yt=4):yt=e===dc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ye=e,at===null&&(zt=1,du(t,Ne(e,t.current)))}function br(){var t=me.current;return t===null?!0:(ct&4194048)===ct?Te===null:(ct&62914560)===ct||(ct&536870912)!==0?t===Te:!1}function xr(){var t=N.H;return N.H=ln,t===null?ln:t}function pr(){var t=N.A;return N.A=ym,t}function Eu(){zt=4,ml||(ct&4194048)!==ct&&me.current!==null||(ba=!0),(gl&134217727)===0&&(Zl&134217727)===0||St===null||vl(St,ct,he,!1)}function qc(t,e,l){var a=mt;mt|=2;var n=xr(),u=pr();(St!==t||ct!==e)&&(_u=null,Na(t,e)),e=!1;var i=zt;t:do try{if(yt!==0&&at!==null){var s=at,f=ye;switch(yt){case 8:Uc(),i=6;break t;case 3:case 2:case 9:case 6:me.current===null&&(e=!0);var h=yt;if(yt=0,ye=null,_a(t,s,f,h),l&&ba){i=0;break t}break;default:h=yt,yt=0,ye=null,_a(t,s,f,h)}}bm(),i=zt;break}catch(p){vr(t,p)}while(!0);return e&&t.shellSuspendCounter++,Xe=Ul=null,mt=a,N.H=n,N.A=u,at===null&&(St=null,ct=0,Vn()),i}function bm(){for(;at!==null;)Nr(at)}function xm(t,e){var l=mt;mt|=2;var a=xr(),n=pr();St!==t||ct!==e?(_u=null,Nu=se()+500,Na(t,e)):ba=Ca(t,e);t:do try{if(yt!==0&&at!==null){e=at;var u=ye;e:switch(yt){case 1:yt=0,ye=null,_a(t,e,u,1);break;case 2:case 9:if(zf(u)){yt=0,ye=null,_r(e);break}e=function(){yt!==2&&yt!==9||St!==t||(yt=7),qe(t)},u.then(e,e);break t;case 3:yt=7;break t;case 4:yt=5;break t;case 7:zf(u)?(yt=0,ye=null,_r(e)):(yt=0,ye=null,_a(t,e,u,7));break;case 5:var i=null;switch(at.tag){case 26:i=at.memoizedState;case 5:case 27:var s=at;if(i?c0(i):s.stateNode.complete){yt=0,ye=null;var f=s.sibling;if(f!==null)at=f;else{var h=s.return;h!==null?(at=h,Tu(h)):at=null}break e}}yt=0,ye=null,_a(t,e,u,5);break;case 6:yt=0,ye=null,_a(t,e,u,6);break;case 8:Uc(),zt=6;break t;default:throw Error(o(462))}}pm();break}catch(p){vr(t,p)}while(!0);return Xe=Ul=null,N.H=a,N.A=n,mt=l,at!==null?0:(St=null,ct=0,Vn(),zt)}function pm(){for(;at!==null&&!Z0();)Nr(at)}function Nr(t){var e=wo(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?Tu(t):at=e}function _r(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Go(l,e,e.pendingProps,e.type,void 0,ct);break;case 11:e=Go(l,e,e.pendingProps,e.type.render,e.ref,ct);break;case 5:Wi(e);default:Jo(l,e),e=at=xf(e,$e),e=wo(l,e,$e)}t.memoizedProps=t.pendingProps,e===null?Tu(t):at=e}function _a(t,e,l,a){Xe=Ul=null,Wi(e),ra=null,Ia=0;var n=e.return;try{if(sm(t,n,e,l,ct)){zt=1,du(t,Ne(l,t.current)),at=null;return}}catch(u){if(n!==null)throw at=n,u;zt=1,du(t,Ne(l,t.current)),at=null;return}e.flags&32768?(ft||a===1?t=!0:ba||(ct&536870912)!==0?t=!1:(ml=t=!0,(a===2||a===9||a===3||a===6)&&(a=me.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sr(e,t)):Tu(e)}function Tu(t){var e=t;do{if((e.flags&32768)!==0){Sr(e,ml);return}t=e.return;var l=rm(e.alternate,e,$e);if(l!==null){at=l;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);zt===0&&(zt=5)}function Sr(t,e){do{var l=dm(t.alternate,t);if(l!==null){l.flags&=32767,at=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){at=t;return}at=t=l}while(t!==null);zt=6,at=null}function Er(t,e,l,a,n,u,i,s,f){t.cancelPendingCommit=null;do Au();while(Qt!==0);if((mt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(u=e.lanes|e.childLanes,u|=Si,P0(t,l,u,i,s,f),t===St&&(at=St=null,ct=0),pa=e,hl=t,Fe=l,Cc=u,Rc=n,mr=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Em(Dn,function(){return jr(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,n=M.p,M.p=2,i=mt,mt|=4;try{mm(t,e,l)}finally{mt=i,M.p=n,N.T=a}}Qt=1,Tr(),Ar(),Or()}}function Tr(){if(Qt===1){Qt=0;var t=hl,e=pa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=N.T,N.T=null;var a=M.p;M.p=2;var n=mt;mt|=4;try{ur(e,t);var u=Jc,i=of(t.containerInfo),s=u.focusedElem,f=u.selectionRange;if(i!==s&&s&&s.ownerDocument&&ff(s.ownerDocument.documentElement,s)){if(f!==null&&bi(s)){var h=f.start,p=f.end;if(p===void 0&&(p=h),"selectionStart"in s)s.selectionStart=h,s.selectionEnd=Math.min(p,s.value.length);else{var E=s.ownerDocument||document,v=E&&E.defaultView||window;if(v.getSelection){var b=v.getSelection(),q=s.textContent.length,Z=Math.min(f.start,q),Nt=f.end===void 0?Z:Math.min(f.end,q);!b.extend&&Z>Nt&&(i=Nt,Nt=Z,Z=i);var g=sf(s,Z),r=sf(s,Nt);if(g&&r&&(b.rangeCount!==1||b.anchorNode!==g.node||b.anchorOffset!==g.offset||b.focusNode!==r.node||b.focusOffset!==r.offset)){var y=E.createRange();y.setStart(g.node,g.offset),b.removeAllRanges(),Z>Nt?(b.addRange(y),b.extend(r.node,r.offset)):(y.setEnd(r.node,r.offset),b.addRange(y))}}}}for(E=[],b=s;b=b.parentNode;)b.nodeType===1&&E.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<E.length;s++){var S=E[s];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Bu=!!Kc,Jc=Kc=null}finally{mt=n,M.p=a,N.T=l}}t.current=e,Qt=2}}function Ar(){if(Qt===2){Qt=0;var t=hl,e=pa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=N.T,N.T=null;var a=M.p;M.p=2;var n=mt;mt|=4;try{tr(t,e.alternate,e)}finally{mt=n,M.p=a,N.T=l}}Qt=3}}function Or(){if(Qt===4||Qt===3){Qt=0,V0();var t=hl,e=pa,l=Fe,a=mr;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Qt=5:(Qt=0,pa=hl=null,Dr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(yl=null),Pu(l),e=e.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(za,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=N.T,n=M.p,M.p=2,N.T=null;try{for(var u=t.onRecoverableError,i=0;i<a.length;i++){var s=a[i];u(s.value,{componentStack:s.stack})}}finally{N.T=e,M.p=n}}(Fe&3)!==0&&Au(),qe(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Mc?dn++:(dn=0,Mc=t):dn=0,mn(0)}}function Dr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ka(e)))}function Au(){return Tr(),Ar(),Or(),jr()}function jr(){if(Qt!==5)return!1;var t=hl,e=Cc;Cc=0;var l=Pu(Fe),a=N.T,n=M.p;try{M.p=32>l?32:l,N.T=null,l=Rc,Rc=null;var u=hl,i=Fe;if(Qt=0,pa=hl=null,Fe=0,(mt&6)!==0)throw Error(o(331));var s=mt;if(mt|=4,or(u.current),cr(u,u.current,i,l),mt=s,mn(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(za,u)}catch{}return!0}finally{M.p=n,N.T=a,Dr(t,e)}}function zr(t,e,l){e=Ne(l,e),e=rc(t.stateNode,e,2),t=fl(t,e,2),t!==null&&(Ra(t,2),qe(t))}function ht(t,e,l){if(t.tag===3)zr(t,t,l);else for(;e!==null;){if(e.tag===3){zr(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(yl===null||!yl.has(a))){t=Ne(l,t),l=Co(2),a=fl(e,l,2),a!==null&&(Ro(l,a,e,t),Ra(a,2),qe(a));break}}e=e.return}}function Yc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new hm;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Dc=!0,n.add(l),t=Nm.bind(null,t,e,l),e.then(t,t))}function Nm(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,St===t&&(ct&l)===l&&(zt===4||zt===3&&(ct&62914560)===ct&&300>se()-pu?(mt&2)===0&&Na(t,0):jc|=l,xa===ct&&(xa=0)),qe(t)}function Cr(t,e){e===0&&(e=Ss()),t=Cl(t,e),t!==null&&(Ra(t,e),qe(t))}function _m(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Cr(t,l)}function Sm(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),Cr(t,l)}function Em(t,e){return ku(t,e)}var Ou=null,Sa=null,Hc=!1,Du=!1,Bc=!1,bl=0;function qe(t){t!==Sa&&t.next===null&&(Sa===null?Ou=Sa=t:Sa=Sa.next=t),Du=!0,Hc||(Hc=!0,Am())}function mn(t,e){if(!Bc&&Du){Bc=!0;do for(var l=!1,a=Ou;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,s=a.pingedLanes;u=(1<<31-oe(42|t)+1)-1,u&=n&~(i&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,qr(a,u))}else u=ct,u=Rn(a,a===St?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Ca(a,u)||(l=!0,qr(a,u));a=a.next}while(l);Bc=!1}}function Tm(){Rr()}function Rr(){Du=Hc=!1;var t=0;bl!==0&&Ym()&&(t=bl);for(var e=se(),l=null,a=Ou;a!==null;){var n=a.next,u=Mr(a,e);u===0?(a.next=null,l===null?Ou=n:l.next=n,n===null&&(Sa=l)):(l=a,(t!==0||(u&3)!==0)&&(Du=!0)),a=n}Qt!==0&&Qt!==5||mn(t),bl!==0&&(bl=0)}function Mr(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-oe(u),s=1<<i,f=n[i];f===-1?((s&l)===0||(s&a)!==0)&&(n[i]=F0(s,e)):f<=e&&(t.expiredLanes|=s),u&=~s}if(e=St,l=ct,l=Rn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(yt===2||yt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Wu(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Ca(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Wu(a),Pu(l)){case 2:case 8:l=Ns;break;case 32:l=Dn;break;case 268435456:l=_s;break;default:l=Dn}return a=Ur.bind(null,t),l=ku(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Wu(a),t.callbackPriority=2,t.callbackNode=null,2}function Ur(t,e){if(Qt!==0&&Qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Au()&&t.callbackNode!==l)return null;var a=ct;return a=Rn(t,t===St?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(yr(t,a,e),Mr(t,se()),t.callbackNode!=null&&t.callbackNode===l?Ur.bind(null,t):null)}function qr(t,e){if(Au())return null;yr(t,e,!0)}function Am(){Bm(function(){(mt&6)!==0?ku(ps,Tm):Rr()})}function Gc(){if(bl===0){var t=sa;t===0&&(t=jn,jn<<=1,(jn&261888)===0&&(jn=256)),bl=t}return bl}function Yr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yn(""+t)}function Hr(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Om(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var u=Yr((n[te]||null).action),i=a.submitter;i&&(e=(e=i[te]||null)?Yr(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var s=new Ln("action","action",null,a,n);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(bl!==0){var f=i?Hr(n,i):new FormData(n);uc(l,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(s.preventDefault(),f=i?Hr(n,i):new FormData(n),uc(l,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Lc=0;Lc<_i.length;Lc++){var Xc=_i[Lc],Dm=Xc.toLowerCase(),jm=Xc[0].toUpperCase()+Xc.slice(1);je(Dm,"on"+jm)}je(mf,"onAnimationEnd"),je(gf,"onAnimationIteration"),je(yf,"onAnimationStart"),je("dblclick","onDoubleClick"),je("focusin","onFocus"),je("focusout","onBlur"),je(wd,"onTransitionRun"),je(Kd,"onTransitionStart"),je(Jd,"onTransitionCancel"),je(hf,"onTransitionEnd"),Il("onMouseEnter",["mouseout","mouseover"]),Il("onMouseLeave",["mouseout","mouseover"]),Il("onPointerEnter",["pointerout","pointerover"]),Il("onPointerLeave",["pointerout","pointerover"]),Ol("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ol("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ol("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ol("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ol("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ol("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function Br(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var i=a.length-1;0<=i;i--){var s=a[i],f=s.instance,h=s.currentTarget;if(s=s.listener,f!==u&&n.isPropagationStopped())break t;u=s,n.currentTarget=h;try{u(n)}catch(p){Zn(p)}n.currentTarget=null,u=f}else for(i=0;i<a.length;i++){if(s=a[i],f=s.instance,h=s.currentTarget,s=s.listener,f!==u&&n.isPropagationStopped())break t;u=s,n.currentTarget=h;try{u(n)}catch(p){Zn(p)}n.currentTarget=null,u=f}}}}function nt(t,e){var l=e[ti];l===void 0&&(l=e[ti]=new Set);var a=t+"__bubble";l.has(a)||(Gr(e,t,2,!1),l.add(a))}function Qc(t,e,l){var a=0;e&&(a|=4),Gr(l,t,a,e)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Zc(t){if(!t[ju]){t[ju]=!0,zs.forEach(function(l){l!=="selectionchange"&&(zm.has(l)||Qc(l,!1,t),Qc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ju]||(e[ju]=!0,Qc("selectionchange",!1,e))}}function Gr(t,e,l,a){switch(g0(e)){case 2:var n=ng;break;case 8:n=ug;break;default:n=ns}l=n.bind(null,e,l,t),n=void 0,!fi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Vc(t,e,l,a,n){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var s=a.stateNode.containerInfo;if(s===n)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;s!==null;){if(i=wl(s),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=u=i;continue t}s=s.parentNode}}a=a.return}Qs(function(){var h=u,p=ci(l),E=[];t:{var v=vf.get(t);if(v!==void 0){var b=Ln,q=t;switch(t){case"keypress":if(Bn(l)===0)break t;case"keydown":case"keyup":b=Sd;break;case"focusin":q="focus",b=mi;break;case"focusout":q="blur",b=mi;break;case"beforeblur":case"afterblur":b=mi;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ad;break;case mf:case gf:case yf:b=gd;break;case hf:b=Dd;break;case"scroll":case"scrollend":b=fd;break;case"wheel":b=zd;break;case"copy":case"cut":case"paste":b=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Js;break;case"toggle":case"beforetoggle":b=Rd}var Z=(e&4)!==0,Nt=!Z&&(t==="scroll"||t==="scrollend"),g=Z?v!==null?v+"Capture":null:v;Z=[];for(var r=h,y;r!==null;){var S=r;if(y=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||y===null||g===null||(S=qa(r,g),S!=null&&Z.push(yn(r,S,y))),Nt)break;r=r.return}0<Z.length&&(v=new b(v,q,null,l,p),E.push({event:v,listeners:Z}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",v&&l!==ii&&(q=l.relatedTarget||l.fromElement)&&(wl(q)||q[Vl]))break t;if((b||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,b?(q=l.relatedTarget||l.toElement,b=h,q=q?wl(q):null,q!==null&&(Nt=C(q),Z=q.tag,q!==Nt||Z!==5&&Z!==27&&Z!==6)&&(q=null)):(b=null,q=h),b!==q)){if(Z=ws,S="onMouseLeave",g="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(Z=Js,S="onPointerLeave",g="onPointerEnter",r="pointer"),Nt=b==null?v:Ua(b),y=q==null?v:Ua(q),v=new Z(S,r+"leave",b,l,p),v.target=Nt,v.relatedTarget=y,S=null,wl(p)===h&&(Z=new Z(g,r+"enter",q,l,p),Z.target=y,Z.relatedTarget=Nt,S=Z),Nt=S,b&&q)e:{for(Z=Cm,g=b,r=q,y=0,S=g;S;S=Z(S))y++;S=0;for(var X=r;X;X=Z(X))S++;for(;0<y-S;)g=Z(g),y--;for(;0<S-y;)r=Z(r),S--;for(;y--;){if(g===r||r!==null&&g===r.alternate){Z=g;break e}g=Z(g),r=Z(r)}Z=null}else Z=null;b!==null&&Lr(E,v,b,Z,!1),q!==null&&Nt!==null&&Lr(E,Nt,q,Z,!0)}}t:{if(v=h?Ua(h):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var ot=ef;else if(Ps(v))if(lf)ot=Qd;else{ot=Ld;var G=Gd}else b=v.nodeName,!b||b.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?h&&ui(h.elementType)&&(ot=ef):ot=Xd;if(ot&&(ot=ot(t,h))){tf(E,ot,l,p);break t}G&&G(t,v,h),t==="focusout"&&h&&v.type==="number"&&h.memoizedProps.value!=null&&ni(v,"number",v.value)}switch(G=h?Ua(h):window,t){case"focusin":(Ps(G)||G.contentEditable==="true")&&(ta=G,xi=h,Za=null);break;case"focusout":Za=xi=ta=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,rf(E,l,p);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":rf(E,l,p)}var W;if(yi)t:{switch(t){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else Pl?$s(t,l)&&(st="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(Is&&l.locale!=="ko"&&(Pl||st!=="onCompositionStart"?st==="onCompositionEnd"&&Pl&&(W=Zs()):(ll=p,oi="value"in ll?ll.value:ll.textContent,Pl=!0)),G=zu(h,st),0<G.length&&(st=new Ks(st,t,null,l,p),E.push({event:st,listeners:G}),W?st.data=W:(W=Fs(l),W!==null&&(st.data=W)))),(W=Ud?qd(t,l):Yd(t,l))&&(st=zu(h,"onBeforeInput"),0<st.length&&(G=new Ks("onBeforeInput","beforeinput",null,l,p),E.push({event:G,listeners:st}),G.data=W)),Om(E,t,h,l,p)}Br(E,e)})}function yn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function zu(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=qa(t,l),n!=null&&a.unshift(yn(t,n,u)),n=qa(t,e),n!=null&&a.push(yn(t,n,u))),t.tag===3)return a;t=t.return}return[]}function Cm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lr(t,e,l,a,n){for(var u=e._reactName,i=[];l!==null&&l!==a;){var s=l,f=s.alternate,h=s.stateNode;if(s=s.tag,f!==null&&f===a)break;s!==5&&s!==26&&s!==27||h===null||(f=h,n?(h=qa(l,u),h!=null&&i.unshift(yn(l,h,f))):n||(h=qa(l,u),h!=null&&i.push(yn(l,h,f)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var Rm=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function Xr(t){return(typeof t=="string"?t:""+t).replace(Rm,`
`).replace(Mm,"")}function Qr(t,e){return e=Xr(e),Xr(t)===e}function pt(t,e,l,a,n,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Wl(t,""+a);break;case"className":Un(t,"class",a);break;case"tabIndex":Un(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Un(t,l,a);break;case"style":Ls(t,a,u);break;case"data":if(e!=="object"){Un(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&pt(t,e,"name",n.name,n,null),pt(t,e,"formEncType",n.formEncType,n,null),pt(t,e,"formMethod",n.formMethod,n,null),pt(t,e,"formTarget",n.formTarget,n,null)):(pt(t,e,"encType",n.encType,n,null),pt(t,e,"method",n.method,n,null),pt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=He);break;case"onScroll":a!=null&&nt("scroll",t);break;case"onScrollEnd":a!=null&&nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Yn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":nt("beforetoggle",t),nt("toggle",t),Mn(t,"popover",a);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=cd.get(l)||l,Mn(t,l,a))}}function wc(t,e,l,a,n,u){switch(l){case"style":Ls(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&Wl(t,""+a);break;case"onScroll":a!=null&&nt("scroll",t);break;case"onScrollEnd":a!=null&&nt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=He);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),u=t[te]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Mn(t,l,a)}}}function kt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nt("error",t),nt("load",t);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:pt(t,e,u,i,l,null)}}n&&pt(t,e,"srcSet",l.srcSet,l,null),a&&pt(t,e,"src",l.src,l,null);return;case"input":nt("invalid",t);var s=u=i=n=null,f=null,h=null;for(a in l)if(l.hasOwnProperty(a)){var p=l[a];if(p!=null)switch(a){case"name":n=p;break;case"type":i=p;break;case"checked":f=p;break;case"defaultChecked":h=p;break;case"value":u=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(o(137,e));break;default:pt(t,e,a,p,l,null)}}Ys(t,u,s,f,h,i,n,!1);return;case"select":nt("invalid",t),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":u=s;break;case"defaultValue":i=s;break;case"multiple":a=s;default:pt(t,e,n,s,l,null)}e=u,l=i,t.multiple=!!a,e!=null?kl(t,!!a,e,!1):l!=null&&kl(t,!!a,l,!0);return;case"textarea":nt("invalid",t),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(s=l[i],s!=null))switch(i){case"value":a=s;break;case"defaultValue":n=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:pt(t,e,i,s,l,null)}Bs(t,a,n,u);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:pt(t,e,f,a,l,null)}return;case"dialog":nt("beforetoggle",t),nt("toggle",t),nt("cancel",t),nt("close",t);break;case"iframe":case"object":nt("load",t);break;case"video":case"audio":for(a=0;a<gn.length;a++)nt(gn[a],t);break;case"image":nt("error",t),nt("load",t);break;case"details":nt("toggle",t);break;case"embed":case"source":case"link":nt("error",t),nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:pt(t,e,h,a,l,null)}return;default:if(ui(e)){for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!==void 0&&wc(t,e,p,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&pt(t,e,s,a,l,null))}function Um(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,s=null,f=null,h=null,p=null;for(b in l){var E=l[b];if(l.hasOwnProperty(b)&&E!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":f=E;default:a.hasOwnProperty(b)||pt(t,e,b,null,a,E)}}for(var v in a){var b=a[v];if(E=l[v],a.hasOwnProperty(v)&&(b!=null||E!=null))switch(v){case"type":u=b;break;case"name":n=b;break;case"checked":h=b;break;case"defaultChecked":p=b;break;case"value":i=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(137,e));break;default:b!==E&&pt(t,e,v,b,a,E)}}ai(t,i,s,f,h,p,u,n);return;case"select":b=i=s=v=null;for(u in l)if(f=l[u],l.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":b=f;default:a.hasOwnProperty(u)||pt(t,e,u,null,a,f)}for(n in a)if(u=a[n],f=l[n],a.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":v=u;break;case"defaultValue":s=u;break;case"multiple":i=u;default:u!==f&&pt(t,e,n,u,a,f)}e=s,l=i,a=b,v!=null?kl(t,!!l,v,!1):!!a!=!!l&&(e!=null?kl(t,!!l,e,!0):kl(t,!!l,l?[]:"",!1));return;case"textarea":b=v=null;for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:pt(t,e,s,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":v=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==u&&pt(t,e,i,n,a,u)}Hs(t,v,b);return;case"option":for(var q in l)if(v=l[q],l.hasOwnProperty(q)&&v!=null&&!a.hasOwnProperty(q))switch(q){case"selected":t.selected=!1;break;default:pt(t,e,q,null,a,v)}for(f in a)if(v=a[f],b=l[f],a.hasOwnProperty(f)&&v!==b&&(v!=null||b!=null))switch(f){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:pt(t,e,f,v,a,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in l)v=l[Z],l.hasOwnProperty(Z)&&v!=null&&!a.hasOwnProperty(Z)&&pt(t,e,Z,null,a,v);for(h in a)if(v=a[h],b=l[h],a.hasOwnProperty(h)&&v!==b&&(v!=null||b!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(137,e));break;default:pt(t,e,h,v,a,b)}return;default:if(ui(e)){for(var Nt in l)v=l[Nt],l.hasOwnProperty(Nt)&&v!==void 0&&!a.hasOwnProperty(Nt)&&wc(t,e,Nt,void 0,a,v);for(p in a)v=a[p],b=l[p],!a.hasOwnProperty(p)||v===b||v===void 0&&b===void 0||wc(t,e,p,v,a,b);return}}for(var g in l)v=l[g],l.hasOwnProperty(g)&&v!=null&&!a.hasOwnProperty(g)&&pt(t,e,g,null,a,v);for(E in a)v=a[E],b=l[E],!a.hasOwnProperty(E)||v===b||v==null&&b==null||pt(t,e,E,v,a,b)}function Zr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,s=n.duration;if(u&&s&&Zr(i)){for(i=0,s=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],h=f.startTime;if(h>s)break;var p=f.transferSize,E=f.initiatorType;p&&Zr(E)&&(f=f.responseEnd,i+=p*(f<s?1:(s-h)/(f-h)))}if(--a,e+=8*(u+i)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kc=null,Jc=null;function Cu(t){return t.nodeType===9?t:t.ownerDocument}function Vr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ic(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kc=null;function Ym(){var t=window.event;return t&&t.type==="popstate"?t===kc?!1:(kc=t,!0):(kc=null,!1)}var Kr=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,Jr=typeof Promise=="function"?Promise:void 0,Bm=typeof queueMicrotask=="function"?queueMicrotask:typeof Jr<"u"?function(t){return Jr.resolve(null).then(t).catch(Gm)}:Kr;function Gm(t){setTimeout(function(){throw t})}function xl(t){return t==="head"}function Ir(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Oa(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")hn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,hn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,s=u.nodeName;u[Ma]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&hn(t.ownerDocument.body);l=n}while(l);Oa(e)}function kr(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Wc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Wc(l),ei(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Lm(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ma])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ae(t.nextSibling),t===null)break}return null}function Xm(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ae(t.nextSibling),t===null))return null;return t}function Wr(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ae(t.nextSibling),t===null))return null;return t}function $c(t){return t.data==="$?"||t.data==="$~"}function Fc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qm(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ae(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Pc=null;function $r(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Ae(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Fr(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Pr(t,e,l){switch(e=Cu(l),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function hn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ei(t)}var Oe=new Map,t0=new Set;function Ru(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Pe=M.d;M.d={f:Zm,r:Vm,D:wm,C:Km,L:Jm,m:Im,X:Wm,S:km,M:$m};function Zm(){var t=Pe.f(),e=Su();return t||e}function Vm(t){var e=Kl(t);e!==null&&e.tag===5&&e.type==="form"?vo(e):Pe.r(t)}var Ea=typeof document>"u"?null:document;function e0(t,e,l){var a=Ea;if(a&&typeof e=="string"&&e){var n=xe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),t0.has(n)||(t0.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),kt(e,"link",t),Zt(e),a.head.appendChild(e)))}}function wm(t){Pe.D(t),e0("dns-prefetch",t,null)}function Km(t,e){Pe.C(t,e),e0("preconnect",t,e)}function Jm(t,e,l){Pe.L(t,e,l);var a=Ea;if(a&&t&&e){var n='link[rel="preload"][as="'+xe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+xe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+xe(l.imageSizes)+'"]')):n+='[href="'+xe(t)+'"]';var u=n;switch(e){case"style":u=Ta(t);break;case"script":u=Aa(t)}Oe.has(u)||(t=O({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Oe.set(u,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(vn(u))||e==="script"&&a.querySelector(bn(u))||(e=a.createElement("link"),kt(e,"link",t),Zt(e),a.head.appendChild(e)))}}function Im(t,e){Pe.m(t,e);var l=Ea;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+xe(a)+'"][href="'+xe(t)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Aa(t)}if(!Oe.has(u)&&(t=O({rel:"modulepreload",href:t},e),Oe.set(u,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(bn(u)))return}a=l.createElement("link"),kt(a,"link",t),Zt(a),l.head.appendChild(a)}}}function km(t,e,l){Pe.S(t,e,l);var a=Ea;if(a&&t){var n=Jl(a).hoistableStyles,u=Ta(t);e=e||"default";var i=n.get(u);if(!i){var s={loading:0,preload:null};if(i=a.querySelector(vn(u)))s.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Oe.get(u))&&ts(t,l);var f=i=a.createElement("link");Zt(f),kt(f,"link",t),f._p=new Promise(function(h,p){f.onload=h,f.onerror=p}),f.addEventListener("load",function(){s.loading|=1}),f.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Mu(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:s},n.set(u,i)}}}function Wm(t,e){Pe.X(t,e);var l=Ea;if(l&&t){var a=Jl(l).hoistableScripts,n=Aa(t),u=a.get(n);u||(u=l.querySelector(bn(n)),u||(t=O({src:t,async:!0},e),(e=Oe.get(n))&&es(t,e),u=l.createElement("script"),Zt(u),kt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function $m(t,e){Pe.M(t,e);var l=Ea;if(l&&t){var a=Jl(l).hoistableScripts,n=Aa(t),u=a.get(n);u||(u=l.querySelector(bn(n)),u||(t=O({src:t,async:!0,type:"module"},e),(e=Oe.get(n))&&es(t,e),u=l.createElement("script"),Zt(u),kt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function l0(t,e,l,a){var n=(n=lt.current)?Ru(n):null;if(!n)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ta(l.href),l=Jl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ta(l.href);var u=Jl(n).hoistableStyles,i=u.get(t);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=n.querySelector(vn(t)))&&!u._p&&(i.instance=u,i.state.loading=5),Oe.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Oe.set(t,l),u||Fm(n,t,l,i.state))),e&&a===null)throw Error(o(528,""));return i}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Aa(l),l=Jl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Ta(t){return'href="'+xe(t)+'"'}function vn(t){return'link[rel="stylesheet"]['+t+"]"}function a0(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function Fm(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),kt(e,"link",l),Zt(e),t.head.appendChild(e))}function Aa(t){return'[src="'+xe(t)+'"]'}function bn(t){return"script[async]"+t}function n0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+xe(l.href)+'"]');if(a)return e.instance=a,Zt(a),a;var n=O({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Zt(a),kt(a,"style",n),Mu(a,l.precedence,t),e.instance=a;case"stylesheet":n=Ta(l.href);var u=t.querySelector(vn(n));if(u)return e.state.loading|=4,e.instance=u,Zt(u),u;a=a0(l),(n=Oe.get(n))&&ts(a,n),u=(t.ownerDocument||t).createElement("link"),Zt(u);var i=u;return i._p=new Promise(function(s,f){i.onload=s,i.onerror=f}),kt(u,"link",a),e.state.loading|=4,Mu(u,l.precedence,t),e.instance=u;case"script":return u=Aa(l.src),(n=t.querySelector(bn(u)))?(e.instance=n,Zt(n),n):(a=l,(n=Oe.get(u))&&(a=O({},l),es(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Zt(n),kt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Mu(a,l.precedence,t));return e.instance}function Mu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var s=a[i];if(s.dataset.precedence===e)u=s;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function ts(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function es(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Uu=null;function u0(t,e,l){if(Uu===null){var a=new Map,n=Uu=new Map;n.set(l,a)}else n=Uu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var u=l[n];if(!(u[Ma]||u[wt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var s=a.get(i);s?s.push(u):a.set(i,[u])}}return a}function i0(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Pm(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function c0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tg(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ta(a.href),u=e.querySelector(vn(n));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=qu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,Zt(u);return}u=e.ownerDocument||e,a=a0(a),(n=Oe.get(n))&&ts(a,n),u=u.createElement("link"),Zt(u);var i=u;i._p=new Promise(function(s,f){i.onload=s,i.onerror=f}),kt(u,"link",a),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=qu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var ls=0;function eg(t,e){return t.stylesheets&&t.count===0&&Hu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&ls===0&&(ls=62500*qm());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>ls?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function qu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yu=null;function Hu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yu=new Map,e.forEach(lg,t),Yu=null,qu.call(t))}function lg(t,e){if(!(e.state.loading&4)){var l=Yu.get(t);if(l)var a=l.get(null);else{l=new Map,Yu.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=e.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=qu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var xn={$$typeof:F,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function ag(t,e,l,a,n,u,i,s,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$u(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.hiddenUpdates=$u(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function s0(t,e,l,a,n,u,i,s,f,h,p,E){return t=new ag(t,e,l,i,f,h,p,E,s),e=1,u===!0&&(e|=24),u=de(3,null,null,e),t.current=u,u.stateNode=t,e=qi(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},Gi(u),t}function f0(t){return t?(t=aa,t):aa}function o0(t,e,l,a,n,u){n=f0(n),a.context===null?a.context=n:a.pendingContext=n,a=sl(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=fl(t,a,e),l!==null&&(ie(l,t,e),Wa(l,t,e))}function r0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function as(t,e){r0(t,e),(t=t.alternate)&&r0(t,e)}function d0(t){if(t.tag===13||t.tag===31){var e=Cl(t,67108864);e!==null&&ie(e,t,67108864),as(t,67108864)}}function m0(t){if(t.tag===13||t.tag===31){var e=ve();e=Fu(e);var l=Cl(t,e);l!==null&&ie(l,t,e),as(t,e)}}var Bu=!0;function ng(t,e,l,a){var n=N.T;N.T=null;var u=M.p;try{M.p=2,ns(t,e,l,a)}finally{M.p=u,N.T=n}}function ug(t,e,l,a){var n=N.T;N.T=null;var u=M.p;try{M.p=8,ns(t,e,l,a)}finally{M.p=u,N.T=n}}function ns(t,e,l,a){if(Bu){var n=us(a);if(n===null)Vc(t,e,a,Gu,l),y0(t,a);else if(cg(n,t,e,l,a))a.stopPropagation();else if(y0(t,a),e&4&&-1<ig.indexOf(t)){for(;n!==null;){var u=Kl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Al(u.pendingLanes);if(i!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var f=1<<31-oe(i);s.entanglements[1]|=f,i&=~f}qe(u),(mt&6)===0&&(Nu=se()+500,mn(0))}}break;case 31:case 13:s=Cl(u,2),s!==null&&ie(s,u,2),Su(),as(u,2)}if(u=us(a),u===null&&Vc(t,e,a,Gu,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Vc(t,e,a,null,l)}}function us(t){return t=ci(t),is(t)}var Gu=null;function is(t){if(Gu=null,t=wl(t),t!==null){var e=C(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=Q(e),t!==null)return t;t=null}else if(l===31){if(t=k(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Gu=t,null}function g0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(w0()){case ps:return 2;case Ns:return 8;case Dn:case K0:return 32;case _s:return 268435456;default:return 32}default:return 32}}var cs=!1,pl=null,Nl=null,_l=null,pn=new Map,Nn=new Map,Sl=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y0(t,e){switch(t){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":Nl=null;break;case"mouseover":case"mouseout":_l=null;break;case"pointerover":case"pointerout":pn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nn.delete(e.pointerId)}}function _n(t,e,l,a,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},e!==null&&(e=Kl(e),e!==null&&d0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function cg(t,e,l,a,n){switch(e){case"focusin":return pl=_n(pl,t,e,l,a,n),!0;case"dragenter":return Nl=_n(Nl,t,e,l,a,n),!0;case"mouseover":return _l=_n(_l,t,e,l,a,n),!0;case"pointerover":var u=n.pointerId;return pn.set(u,_n(pn.get(u)||null,t,e,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,Nn.set(u,_n(Nn.get(u)||null,t,e,l,a,n)),!0}return!1}function h0(t){var e=wl(t.target);if(e!==null){var l=C(e);if(l!==null){if(e=l.tag,e===13){if(e=Q(l),e!==null){t.blockedOn=e,Ds(t.priority,function(){m0(l)});return}}else if(e===31){if(e=k(l),e!==null){t.blockedOn=e,Ds(t.priority,function(){m0(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=us(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);ii=a,l.target.dispatchEvent(a),ii=null}else return e=Kl(l),e!==null&&d0(e),t.blockedOn=l,!1;e.shift()}return!0}function v0(t,e,l){Lu(t)&&l.delete(e)}function sg(){cs=!1,pl!==null&&Lu(pl)&&(pl=null),Nl!==null&&Lu(Nl)&&(Nl=null),_l!==null&&Lu(_l)&&(_l=null),pn.forEach(v0),Nn.forEach(v0)}function Xu(t,e){t.blockedOn===e&&(t.blockedOn=null,cs||(cs=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,sg)))}var Qu=null;function b0(t){Qu!==t&&(Qu=t,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){Qu===t&&(Qu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(is(a||l)===null)continue;break}var u=Kl(l);u!==null&&(t.splice(e,3),e-=3,uc(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Oa(t){function e(f){return Xu(f,t)}pl!==null&&Xu(pl,t),Nl!==null&&Xu(Nl,t),_l!==null&&Xu(_l,t),pn.forEach(e),Nn.forEach(e);for(var l=0;l<Sl.length;l++){var a=Sl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Sl.length&&(l=Sl[0],l.blockedOn===null);)h0(l),l.blockedOn===null&&Sl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[te]||null;if(typeof u=="function")i||b0(l);else if(i){var s=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[te]||null)s=i.formAction;else if(is(n)!==null)continue}else s=i.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),b0(l)}}}function x0(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function ss(t){this._internalRoot=t}Zu.prototype.render=ss.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var l=e.current,a=ve();o0(l,a,t,e,null,null)},Zu.prototype.unmount=ss.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;o0(t.current,2,null,t,null,null),Su(),e[Vl]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Os();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Sl.length&&e!==0&&e<Sl[l].priority;l++);Sl.splice(l,0,t),l===0&&h0(t)}};var p0=D.version;if(p0!=="19.2.1")throw Error(o(527,p0,"19.2.1"));M.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=x(e),t=t!==null?H(t):null,t=t===null?null:t.stateNode,t};var fg={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{za=Vu.inject(fg),fe=Vu}catch{}}return En.createRoot=function(t,e){if(!j(t))throw Error(o(299));var l=!1,a="",n=Oo,u=Do,i=jo;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=s0(t,1,!1,null,null,l,a,null,n,u,i,x0),t[Vl]=e.current,Zc(t),new ss(e)},En.hydrateRoot=function(t,e,l){if(!j(t))throw Error(o(299));var a=!1,n="",u=Oo,i=Do,s=jo,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=s0(t,1,!0,e,l??null,a,n,f,u,i,s,x0),e.context=f0(null),l=e.current,a=ve(),a=Fu(a),n=sl(a),n.callback=null,fl(l,n,a),l=a,e.current.lanes=l,Ra(e,l),qe(e),t[Vl]=e.current,Zc(t),new Zu(e)},En.version="19.2.1",En}var z0;function pg(){if(z0)return rs.exports;z0=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(D){console.error(D)}}return d(),rs.exports=xg(),rs.exports}var Ng=pg();const _g=q0(Ng);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=d=>d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Eg=d=>d.replace(/^([A-Z])|[\s-_]+(\w)/g,(D,A,o)=>o?o.toUpperCase():A.toLowerCase()),C0=d=>{const D=Eg(d);return D.charAt(0).toUpperCase()+D.slice(1)},Y0=(...d)=>d.filter((D,A,o)=>!!D&&D.trim()!==""&&o.indexOf(D)===A).join(" ").trim(),Tg=d=>{for(const D in d)if(D.startsWith("aria-")||D==="role"||D==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ag={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=et.forwardRef(({color:d="currentColor",size:D=24,strokeWidth:A=2,absoluteStrokeWidth:o,className:j="",children:C,iconNode:Q,...k},z)=>et.createElement("svg",{ref:z,...Ag,width:D,height:D,stroke:d,strokeWidth:o?Number(A)*24/Number(D):A,className:Y0("lucide",j),...!C&&!Tg(k)&&{"aria-hidden":"true"},...k},[...Q.map(([x,H])=>et.createElement(x,H)),...Array.isArray(C)?C:[C]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(d,D)=>{const A=et.forwardRef(({className:o,...j},C)=>et.createElement(Og,{ref:C,iconNode:D,className:Y0(`lucide-${Sg(C0(d))}`,`lucide-${d}`,o),...j}));return A.displayName=C0(d),A};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hs=Ct("check",Dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],zg=Ct("circle-alert",jg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Rg=Ct("circle-check-big",Cg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Tn=Ct("copy",Mg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],qg=Ct("eye-off",Ug);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Hg=Ct("eye",Yg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Gg=Ct("file-text",Bg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],Xg=Ct("heart-pulse",Lg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Zg=Ct("list",Qg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],wg=Ct("lock",Vg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Jg=Ct("log-out",Kg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],kg=Ct("plus",Ig);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],R0=Ct("quote",Wg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Fg=Ct("refresh-cw",$g);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],t2=Ct("search",Pg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],l2=Ct("send",e2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],M0=Ct("settings",a2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],u2=Ct("share-2",n2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],H0=Ct("square-pen",i2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],s2=Ct("stethoscope",c2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],B0=Ct("trash-2",f2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],G0=Ct("x",o2);var _=(d=>(d.SURGERY="SURGERY",d.WOMEN_PREGNANCY="WOMEN_PREGNANCY",d.ICU_DEATH="ICU_DEATH",d.FASTING_MEDICINE="FASTING_MEDICINE",d.ETHICS="ETHICS",d.GENETICS_REPRODUCTION="GENETICS_REPRODUCTION",d.TATTOO_CORTISONE="TATTOO_CORTISONE",d.PRAYER_PURITY="PRAYER_PURITY",d.MEDICAL_EXPERIMENTS="MEDICAL_EXPERIMENTS",d.PHARMACY_DRUGS="PHARMACY_DRUGS",d.MISCELLANEOUS="MISCELLANEOUS",d))(_||{});const An=[{id:_.SURGERY,name:"الجراحة والتجميل",icon:"Scissors",color:"bg-blue-100 text-blue-600"},{id:_.WOMEN_PREGNANCY,name:"قضايا تتعلق بالنساء والإنجاب والأسرة",icon:"Baby",color:"bg-pink-100 text-pink-600"},{id:_.ICU_DEATH,name:"قضايا تتعلق بحالات العناية المركزة والموت",icon:"Activity",color:"bg-red-100 text-red-600"},{id:_.FASTING_MEDICINE,name:"قضايا تتعلق بالصيام والأدوية",icon:"Moon",color:"bg-yellow-100 text-yellow-600"},{id:_.ETHICS,name:"قضايا تتعلق بالأخلاقيات",icon:"Heart",color:"bg-green-100 text-green-600"},{id:_.GENETICS_REPRODUCTION,name:"قضايا تتعلق بالإنجاب والجينات",icon:"Dna",color:"bg-purple-100 text-purple-600"},{id:_.TATTOO_CORTISONE,name:"قضايا تتعلق بالوشم والاستخدام غير الطبي للكورتيزون",icon:"Zap",color:"bg-orange-100 text-orange-600"},{id:_.PRAYER_PURITY,name:"قضايا تتعلق بالصلاة والطهارة",icon:"BookOpen",color:"bg-indigo-100 text-indigo-600"},{id:_.MEDICAL_EXPERIMENTS,name:"قضايا تتعلق بالتجارب الطبية على الإنسان والحيوان",icon:"TestTube2",color:"bg-cyan-100 text-cyan-600"},{id:_.PHARMACY_DRUGS,name:"قضايا الصيدلة والأدوية",icon:"Pill",color:"bg-lime-100 text-lime-600"},{id:_.MISCELLANEOUS,name:"مسائل متنوعة",icon:"MoreHorizontal",color:"bg-gray-100 text-gray-600"}],r2=[{id:"surg_001_2025",category:_.SURGERY,title:"الأحكام الشاملة لجراحات التجميل",question:"ما هو التفصيل الشرعي الكامل في إجراء عمليات التجميل (الضرورية والتحسينية)؟",medical_context:"plastic surgery, rhinoplasty, breast augmentation, liposuction, botox, fillers, reconstruction, cosmetic, burn",ruling:`أولاً: الجراحة التجميلية الضرورية (العلاجية):
جائزة شرعاً بإجماع الفقهاء. وهي ما يقصد بها:
1. إعادة العضو إلى شكله ووظيفته المعهودة (مثل إصلاح الشفة الأرنبية، أو اعوجاج الأنف الذي يمنع التنفس).
2. إزالة عيب طارئ ناتج عن حادث أو حريق أو مرض، يسبب ضرراً حسياً أو نفسياً شديداً للمريض.
الدليل: حديث عرفجة بن أسعد لما قطع أنفه يوم الكُلَاب، فأذن له النبي ﷺ أن يتخذ أنفاً من ذهب.

ثانياً: الجراحة التجميلية التحسينية (الكماليات):
محرمة شرعاً إذا كانت لمجرد زيادة الحسن وتغيير الخلقة المعهودة دون وجود عيب منفر، استجابة لهوس الموضة أو للتدليس (كتصغير الأنف السليم، أو نفخ الشفاه وتكبير الثدي لغير ضرورة، أو تغيير لون البشرة).
العلة: قوله تعالى: "وَلَآمُرَنَّهُمْ فَلَيُغَيِّرُنَّ خَلْقَ اللَّهِ"، ولأن فيها تغريراً وتدليساً، وتعريضاً للنفس للأخطار الطبية دون مسوغ شرعي.

ثالثاً: شفط الدهون وشد الترهلات:
جائز إذا كانت السمنة مفرطة (مرضية) تسبب ضرراً صحياً (كالسكري وضغط الدم) أو تعيق الحركة، فتأخذ حكم العلاج. أما إذا كانت لمجرد تنسيق القوام البسيط، فهي مكروهة أو محرمة بحسب الضرر المترتب عليها.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية (فتوى 2045) / قرار مجمع الفقه الإسلامي الدولي رقم 173 (2007)",tags:["تجميل","جراحة","تغيير خلق الله","شفط دهون"]},{id:"surg_002_2025",category:_.SURGERY,title:"رتق غشاء البكارة (Hymenoplasty)",question:"ما حكم إجراء عملية رتق غشاء البكارة للفتاة (بسبب حادث أو غيره)؟ وهل يجوز للطبيب إجراؤها؟",medical_context:"hymenoplasty, virginity repair, hymen, concealment, satr, marriage",ruling:`أولاً: حكم العملية:
1. إذا كان التمزق بسبب حادث أو اغتصاب أو إكراه: يجوز إجراؤها وجوباً للستر على الفتاة ودفع الضرر عنها، وتيسيراً لزواجها.
2. إذا كان التمزق بسبب خطأ سابق (زنا) وتابت الفتاة توبة نصوحاً: يجوز إجراؤها أيضاً إعمالاً لمبدأ "الستر" الذي حثت عليه الشريعة الإسلامية، ولمنع إشاعة الفاحشة، ولعدم فضحها أمام زوجها وأهلها، فالإسلام يتشوف للستر لا للفضيحة.

ثانياً: واجب الطبيب:
يجوز للطبيب إجراء هذه العملية بنية الستر، ولا يعد ذلك اشتراكاً في الغش، لأن الزوج لم يشترط البكارة نصاً في العقد، ولأن الستر مطلوب. أما إذا كان يعلم أن الفتاة ستستخدم ذلك لتدليس متعمد لإسقاط حق مالي أو لغرض خبيث، فيمتنع.
والأصل العام: "من ستر مسلماً ستره الله في الدنيا والآخرة".`,verdict:"PERMITTED",source:"دار الإفتاء المصرية (أمانة الفتوى - د. علي جمعة) / بحث مجمع البحوث الإسلامية",tags:["بكارة","ستر","نساء","زواج"]},{id:"surg_003_2025",category:_.SURGERY,title:"عمليات تصحيح الجنس وتحويل الجنس",question:"ما الفرق بين تصحيح الجنس (Intersex) وتحويل الجنس (Transgender)؟",medical_context:"gender reassignment, sex change, intersex, hermaphrodite, gender dysphoria",ruling:`1. عمليات تصحيح الجنس (للحنثى المشكل - Intersex):
جائزة وواجبة. وهي حالة الشخص الذي لديه أعضاء تناسلية غامضة أو مختلطة جينياً، فيجوز التدخل الجراحي والهرموني لإلحاقه بالجنس الذي تظهر عليه علاماته الغالبة (ذكراً أو أنثى). هذا يعتبر "علاجاً" وإظهاراً للخلقة الأصلية وليس تغييراً.

2. عمليات تحويل الجنس (Sex Change):
محرمة قطعاً وتعد من الكبائر. وهي إجراء عملية لشخص مكتمل الذكورة أو الأنوثة (جينياً وعضوياً) لتحويله للجنس الآخر بناءً على رغبة نفسية (مَيْل) فقط. هذا يدخل تحت "تغيير خلق الله" وتشبه بالجنس الآخر، وهو ملعون فاعله.`,verdict:"CONDITIONAL",source:"قرار مجمع الفقه الإسلامي الدولي رقم 43 (1989) / دار الإفتاء المصرية",tags:["جنس","خنثى","تحويل جنس"]},{id:"surg_004_2025",category:_.SURGERY,title:"نقل وزراعة الأعضاء (الأحياء والأموات)",question:"ما هي الضوابط الشرعية الكاملة لنقل الأعضاء من الحي أو الميت؟",medical_context:"organ transplant, kidney, liver, brain death, donation, selling organs",ruling:`أولاً: النقل من الحي للحي:
جائز بشروط:
1. الضرورة: أن تكون الوسيلة الوحيدة لإنقاذ حياة المريض.
2. عدم الضرر: ألا يترتب على النقل ضرر محقق بالمتبرع يعطل حياته الطبيعية (مثل التبرع بكلية واحدة سليمة).
3. التبرع المحض: أن يكون بلا مقابل مادي (بيع الأعضاء حرام بإجماع لأنه امتهان لكرامة الآدمي).
4. الرضا التام: موافقة المتبرع دون إكراه.

ثانياً: النقل من الميت للحي:
جائز بشروط:
1. تحقق الموت شرعاً (يشمل موت جذع المخ بقرارات المجامع الفقهية).
2. وجود وصية من الميت قبل موته، أو موافقة ورثته بعد موته.
3. أن يكون العضو المنقول مما لا ينقل الصفات الوراثية (فلا يجوز نقل الخصية أو المبيض).`,verdict:"CONDITIONAL",source:"مجمع البحوث الإسلامية (قرار 2009) / مجمع الفقه الإسلامي (قرار رقم 26)",tags:["زراعة أعضاء","تبرع","بيع أعضاء","كلية"]},{id:"obgyn_001_2025",category:_.WOMEN_PREGNANCY,title:"التلقيح الصناعي وأطفال الأنابيب",question:"ما هي الصور الجائزة والصور المحرمة في التلقيح الصناعي والحقن المجهري؟",medical_context:"IVF, ICSI, artificial insemination, sperm donation, egg donation, surrogacy",ruling:`أولاً: الصور الجائزة (صورتان فقط):
1. أن تؤخذ النطفة من الزوج والبويضة من الزوجة، ويتم التلقيح خارجياً ثم تزرع في رحم الزوجة نفسها (أثناء قيام الزوجية).
2. أن تحقن نطفة الزوج في رحم الزوجة مباشرة (التلقيح الصناعي).
الشرط: التأكد التام من عدم اختلاط العينات، وأن يتم ذلك أثناء حياة الزوجين واستمرار عقدهما.

ثانياً: الصور المحرمة (5 صور):
1. استخدام نطفة رجل غريب (متبرع).
2. استخدام بويضة امرأة غريبة (متبرعة).
3. استخدام رحم امرأة غريبة (تأجير الأرحام)، حتى لو كانت البويضة من الزوجة، لاختلاط الأنساب وتنازع الأمومة.
4. استخدام نطفة الزوج أو بويضة الزوجة بعد الوفاة أو الطلاق البائن.
5. التلقيح بين نطفة رجل وبويضة امرأة ليست زوجته (سفاح).`,verdict:"CONDITIONAL",source:"قرار مجمع الفقه الإسلامي الدولي رقم 16 (1986) / دار الإفتاء المصرية",tags:["حقن مجهري","عقم","أنساب","تبرع"]},{id:"obgyn_002_2025",category:_.WOMEN_PREGNANCY,title:"أحكام الإجهاض حسب مدة الحمل",question:"ما هو الحكم الشرعي في إسقاط الجنين (الإجهاض) في مراحله المختلفة؟",medical_context:"abortion, pregnancy termination, fetus soul, 40 days, 120 days, congenital defects",ruling:`1. المرحلة الأولى (قبل 40 يوماً):
يجوز الإسقاط إذا كان هناك مبرر شرعي (مثل ضعف صحة الأم، أو تتابع الحمل بشكل يضر بتربية الأولاد)، ويكره لغير عذر.

2. المرحلة الثانية (من 40 إلى 120 يوماً - قبل نفخ الروح):
لا يجوز الإسقاط إلا لعذر طبي قاهر (خطر على صحة الأم) أو ثبوت تشوهات للجنين تجعل حياته غير مستقرة، وذلك بقرار لجنة طبية.

3. المرحلة الثالثة (بعد 120 يوماً - بعد نفخ الروح):
حرام قطعاً ويعد قتلاً للنفس (وأداً)، ولا يجوز في هذه المرحلة إلا في حالة واحدة فقط وهي "درء الخطر المحقق عن حياة الأم". أي: إذا قرر الأطباء أن استمرار الحمل سيؤدي يقيناً لوفاة الأم، هنا نضحي بالجنين لإنقاذ الأصل (الأم)، لأن حياتها متيقنة وحياة الجنين محتملة.
ملاحظة: التشوهات الخلقية (ولو كانت شديدة) بعد 120 يوماً ليست مبرراً للإجهاض عند جمهور الفقهاء المعاصرين، ما لم تهدد حياة الأم.`,verdict:"CONDITIONAL",source:"قرار هيئة كبار العلماء / دار الإفتاء المصرية / مجمع الفقه الإسلامي",tags:["إجهاض","حمل","روح","تشوهات"]},{id:"obgyn_003_2025",category:_.WOMEN_PREGNANCY,title:"تحديد النسل وتنظيم الأسرة",question:"هل يجوز استخدام وسائل منع الحمل (اللولب، الحبوب)؟ وما حكم التعقيم النهائي؟",medical_context:"contraception, sterilization, vasectomy, tubal ligation, family planning",ruling:`1. تنظيم النسل (المؤقت):
جائز شرعاً باتفاق الزوجين، باستخدام وسائل آمنة (حبوب، لولب، عزل)، لتحقيق مباعدة بين الولادات أو لمصلحة راجحة، قياساً على "العزل" الذي كان يفعله الصحابة وأقرهم النبي ﷺ.

2. تحديد النسل (المنع المطلق):
غير جائز إذا كان بقانون عام يجبر الناس عليه، لأن تكثير النسل مقصد شرعي.

3. التعقيم النهائي (ربط المبايض أو قطع القناة الدافقة):
حرام شرعاً (لأنه قطع للنسل وتغيير للخلقة) إلا في حالات الضرورة الطبية القصوى، مثل أن يكون الحمل خطراً محققاً على حياة المرأة، أو وجود مرض وراثي خطير ينتقل للأولاد ولا علاج له.`,verdict:"CONDITIONAL",source:"مجمع البحوث الإسلامية / دار الإفتاء المصرية",tags:["منع حمل","تعقيم","تنظيم أسرة"]},{id:"obgyn_004_2025",category:_.WOMEN_PREGNANCY,title:"أحكام الإجهاض حسب مراحل الحمل (Abortion)",question:"ما هو الحكم الشرعي التفصيلي للإجهاض حسب مدة الحمل والمراحل الجنينية؟",medical_context:"إجهاض، إنهاء الحمل، أسابيع الحمل، نفخ الروح، جنين",ruling:`الحكم في الإجهاض يختلف حسب مرحلة الحمل:

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

تحذير طبي-شرعي: الإجهاض المتكرر أو الاستخفافي حرام، والواجب على الطبيب التنبيه عليه.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + الشيخ جاد الحق علي جاد الحق",tags:["إجهاض","حمل","روح","مراحل","جنين"]},{id:"obgyn_005_2025",category:_.WOMEN_PREGNANCY,title:"التلقيح الصناعي وأطفال الأنابيب (IVF)",question:"متى يجوز التلقيح الصناعي والحقن المجهري وأطفال الأنابيب؟ وما الصور المحرمة؟",medical_context:"IVF، ICSI، تلقيح صناعي، عقم، أنابيب، نطفة، بويضة",ruling:`التلقيح الصناعي نوعان من حيث الحكم:

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

الحكم الشرعي النهائي: التلقيح بين الزوج والزوجة جائز شرعاً لعلاج العقم بدون وسطاء ثالثين.`,verdict:"CONDITIONAL",source:"فتوى الأزهر الشريف + مجمع الفقه الإسلامي الدولي",tags:["تلقيح","عقم","أنابيب","IVF","نسب"]},{id:"obgyn_006_2025",category:_.WOMEN_PREGNANCY,title:"تأجير الأرحام / الأم البديلة (Surrogacy)",question:"ما حكم استئجار امرأة أخرى لحمل الجنين (الأم البديلة)؟",medical_context:"تأجير رحم، أم بديلة، surrogacy، حمل بالنيابة، نسب",ruling:`حكم تأجير الأرحام: حرام شرعاً وقطعياً

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

الحكم الشرعي القطعي: تأجير الأرحام حرام قطعياً بلا استثناء.`,verdict:"FORBIDDEN",source:"مجمع الفقه الإسلامي الدولي (القرار 173/52 الدورة الخامسة)",tags:["تأجير رحم","أم بديلة","نسب","حقوق","اختلاط"]},{id:"obgyn_007_2025",category:_.WOMEN_PREGNANCY,title:"اختيار جنس الجنين (Gender Selection)",question:"هل يجوز تحديد نوع الجنين (ذكر أو أنثى) بالوسائل الطبية؟",medical_context:"اختيار جنس، تحديد جنس الجنين، PGD، فصل حيوانات منوية",ruling:`اختيار جنس الجنين يقبل تقسيماً:

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
- الأفضل والأحوط: عدم التعلق بنوع معين والقناعة بما يرزقه الله تعالى.`,verdict:"CONDITIONAL",source:"د. محمود رأفت عثمان + مجمع البحوث الإسلامية",tags:["جنس الجنين","اختيار","ذكورة","أنوثة","أمراض وراثية"]},{id:"icu_001_2025",category:_.ICU_DEATH,title:"الموت الدماغي ورفع أجهزة الإنعاش",question:"متى يعتبر المريض ميتاً؟ وهل يجوز رفع أجهزة الإعاشة عن الميت دماغياً؟",medical_context:"brain death, ventilator, life support, DNR, brain stem death",ruling:`أولاً: تعريف الموت شرعاً:
يعتبر الإنسان ميتاً وتترتب عليه جميع الأحكام الشرعية (العدة، الميراث) في إحدى حالتين:
1. توقف القلب والتنفس توقفاً تاماً وحكم الأطباء باستحالة عودتهما.
2. تعطل جميع وظائف الدماغ تعطلاً نهائياً (موت جذع المخ)، وحكم الأطباء المختصون بأن هذا التعطل لا رجعة فيه، حتى وإن كان القلب لا يزال ينبض آلياً بفعل الأجهزة.

ثانياً: رفع الأجهزة:
في حالة ثبوت "موت جذع المخ" بقرار لجنة ثلاثية، يجوز شرعاً رفع أجهزة الإنعاش الصناعي، لأن المريض في حكم الميت، والبقاء على الأجهزة مجرد إطالة لمظهر الحياة دون حقيقتها، وهذا لا يعتبر قتلاً للنفس بل هو إيقاف لعلاج غير مجدٍ.`,verdict:"PERMITTED",source:"قرار مجمع الفقه الإسلامي الدولي رقم 17 (1986) / مجمع البحوث الإسلامية",tags:["موت دماغي","إعاشة","أجهزة","وفاة"]},{id:"icu_002_2025",category:_.ICU_DEATH,title:"قرار عدم الإنعاش (DNR)",question:"هل يجوز للأطباء اتخاذ قرار عدم الإنعاش القلبي الرئوي (Do Not Resuscitate)؟",medical_context:"DNR, CPR, resuscitation, terminal illness, cancer",ruling:`يجوز الامتناع عن إجراء الإنعاش القلبي الرئوي (CPR) في الحالات التالية:
1. إذا وصل المريض إلى حالة الاحتضار وتيقن الأطباء أن الإنعاش غير مجدٍ (Futile).
2. إذا كان المريض مصاباً بمرض مستعصٍ وميؤوس من شفائه (مثل السرطان المتأخر المنتشر) وكان الإنعاش سيعيد القلب للعمل لفترة قصيرة مع زيادة عذاب المريض دون أمل في الحياة.
شرط الفتوى: أن يكون القرار مبنياً على تقرير طبي جماعي (ثلاثة أطباء عدول) بأن الإنعاش سيضر ولا ينفع، ولا يعتبر ذلك قتلاً رحيماً، بل هو ترك للتداوي في حالة اليأس.`,verdict:"PERMITTED",source:"اللجنة الدائمة للفتوى (فتوى رقم 12086) / فتاوى المؤتمرات الطبية الفقهية",tags:["إنعاش","DNR","توقف القلب","احتضار"]},{id:"icu_003_2025",category:_.ICU_DEATH,title:"القتل الرحيم (Euthanasia)",question:"ما حكم إنهاء حياة المريض عمداً لإراحته من الألم (القتل الرحيم)؟",medical_context:"euthanasia, mercy killing, assisted suicide, pain relief, morphine",ruling:`1. القتل الرحيم الإيجابي (Active Euthanasia):
وهو إعطاء المريض جرعة قاتلة أو حقنة هواء لإنهاء حياته، هو "حرام قطعاً" ويعد جريمة قتل عمد توجب القصاص، ولا يبرر ذلك شدة الألم ولا طلب المريض نفسه، لأن الحياة ملك لله.

2. القتل الرحيم السلبي (Passive Euthanasia):
إذا كان المقصود به "إيقاف العلاج" أو "عدم وضع أجهزة الإنعاش" لمريض ميؤوس من شفائه تماماً (كما في فتوى DNR)، فهذا "جائز" وليس قتلاً، لأنه امتناع عن تداوي غير واجب.

3. استخدام المسكنات القوية (المورفين):
يجوز إعطاء المسكنات لتخفيف الألم ولو أدى ذلك لتقصير العمر افتراضياً (كمضاعفات جانبية غير مقصودة)، بشرط أن تكون النية تسكين الألم لا قتل المريض (مبدأ الأثر المزدوج).`,verdict:"FORBIDDEN",source:"دار الإفتاء المصرية / مجمع الفقه الإسلامي",tags:["قتل رحيم","انتحار","ألم","مورفين"]},{id:"fast_001_2025",category:_.FASTING_MEDICINE,title:"المفطرات الطبية في الصيام",question:"ما هي القائمة الكاملة للأدوية والإجراءات الطبية التي تفطر والتي لا تفطر؟",medical_context:"fasting, injections, inhalers, eye drops, ear drops, suppositories, endoscopy, dialysis, anesthesia",ruling:`أولاً: ما لا يفطر (يجوز للصائم):
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
5. لبن الأم (إذا وصل لجوف الطفل، وهذا خاص بالطفل).`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (الدورة العاشرة - مفطرات الصيام المعاصرة)",tags:["صيام","مفطرات","بخاخ","حقن","غسيل كلى"]},{id:"fast_002_2025",category:_.FASTING_MEDICINE,title:"التداوي بالمحرمات والنجاسات",question:"حكم الأدوية المحتوية على كحول أو جيلاتين خنزيري؟",medical_context:"alcohol in medicine, pork gelatin, heparin, insulin, porcine",ruling:`1. الكحول:
يجوز استخدام الأدوية التي تدخل فيها نسبة من الكحول لغرض الحفظ أو الإذابة، لأنها "مستهلكة" في الدواء ولا تسكر، والنجاسة تزول بالاستهلاك (رأي المجامع الفقهية).

2. مشتقات الخنزير (مثل الجيلاتين، الهيبارين، الأنسولين):
- الأصل التحريم.
- لكن يجوز التداوي بها في حالة "الضرورة" إذا لم يوجد بديل حلال مساوٍ لها في الفاعلية، وكان المرض خطيراً.
- يرى بعض العلماء (مثل نزيه حماد والاتحاد العالمي) أن الجيلاتين إذا عولج كيميائياً فقد حدثت له "استحالة" (تغير في الماهية) وصار طاهراً، والعمل على الجواز عند الحاجة.`,verdict:"CONDITIONAL",source:"ندوة المنظمة الإسلامية للعلوم الطبية (الكويت 1995) / دار الإفتاء المصرية",tags:["كحول","خنزير","أدوية","نجاسة"]},{id:"ethics_001_2025",category:_.ETHICS,title:"كشف الطبيب على الجنس الآخر",question:"ما هي ضوابط كشف الطبيب الرجل على المرأة والعكس؟",medical_context:"male doctor, female patient, awrah, examination, privacy",ruling:`الأصل أن تطبب المرأةَ مرأةٌ مثلها، والرجلَ رجلٌ مثله. فإن لم يوجد، جاز الكشف من الجنس الآخر وفق الضوابط الشرعية الآتية:
1. الضرورة أو الحاجة الماسة (عدم وجود البديل المماثل أو الكفء).
2. عدم الخلوة المحرمة (وجود محرم أو ممرضة مؤتمنة).
3. الاقتصار على موضع المرض فقط (الضرورة تقدر بقدرها).
4. غض البصر ما أمكن.
وهذا جائز إجماعاً لأن حفظ النفس ورفع الألم مقصد ضروري مقدم على ستر العورة في هذه الحالة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / كتب الفقه (باب التداوي)",tags:["كشف","عورة","خلوة","طبيب"]},{id:"ethics_002_2025",category:_.ETHICS,title:"إفشاء السر الطبي",question:"متى يجوز للطبيب إفشاء سر المريض؟",medical_context:"confidentiality, medical secrets, aids, infectious diseases, harm",ruling:`الأصل وجوب كتمان سر المريض، ويحرم إفشاؤه لأنه خيانة للأمانة، إلا في حالات استثنائية (يجوز أو يجب فيها الإفشاء) لدرء مفسدة أعظم:
1. الإبلاغ عن الأمراض المعدية السارية (مثل كورونا، الإيدز) لمنع الضرر عن المجتمع أو الزوجة.
2. إذا كان إخفاء السر يؤدي لجريمة قتل أو إيذاء (حماية للغير).
3. دفع تهمة عن الطبيب نفسه (دفاعاً عن النفس).
4. بأمر القاضي للشهادة.
القاعدة: "الضرر الخاص يتحمل لدفع الضرر العام".`,verdict:"CONDITIONAL",source:"ميثاق أخلاقيات الطبيب المسلم / قرارات المجامع الفقهية",tags:["سر طبي","أمانة","ضرر"]},{id:"ethics_003_2025",category:_.ETHICS,title:"تشريح جثث الموتى",question:"هل يجوز تشريح الجثة للتعليم الطبي أو للبحث الجنائي؟",medical_context:"autopsy, dissection, forensic, medical education",ruling:`1. التشريح الجنائي:
جائز واجباً إذا أمرت به النيابة لمعرفة سبب الوفاة (في القضايا الجنائية) إحقاقاً للحق ومنعاً للظلم، لأن مصلحة العدل مقدمة على حرمة الميت.

2. التشريح التعليمي (لطلاب الطب):
جائز للضرورة العلمية لتعلم الطب وإنقاذ الأحياء مستقبلاً، بشرط ألا يكون للجثة معصوم (أو بإذن مسبق/تبرع)، وأن يقتصر على قدر الحاجة، مع وجوب احترام الأجزاء ودفنها بعد الانتهاء.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية / قرار هيئة كبار العلماء",tags:["تشريح","طب شرعي","تعليم"]},{id:"ethics_004_2025",category:_.ETHICS,title:"حدود كشف العورة في العلاج والمداواة",question:"ما هي حدود العورة التي يجوز كشفها للطبيب أثناء العلاج والفحص الطبي؟",medical_context:"عورة، كشف، فحص طبي، ضرورة، ستر",ruling:`الأصل الفقهي الأول: وجوب ستر العورة:
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
يجوز كشف العورة للطبيب عند الضرورة الطبية **بقدر الحاجة فقط**، مع غض البصر، والاحتشام، وعدم الخلوة (عند الإمكان).`,verdict:"CONDITIONAL",source:"كتب الفقه (المغني، المجموع) + الفتاوى الطبية المعاصرة",tags:["عورة","كشف","ضرورة","فحص طبي","ستر","احتشام"]},{id:"ethics_005_2025",category:_.ETHICS,title:"معالجة الطبيب الذكر للمريضة الأنثى والعكس",question:"هل يجوز أن يعالج الطبيب الرجل مريضة امرأة، وهل يجوز العكس؟",medical_context:"طبيب ذكر، مريضة أنثى، معالجة، خلوة، محرم، فتنة",ruling:`الأصل الفقهي الأول: تفضيل المماثل:
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
يجوز لطبيب ذكر معالجة مريضة أنثى (والعكس) عند الضرورة أو عدم وجود مختص مماثل، بشروط صارمة: عدم الخلوة، كشف موضع المرض فقط، غض البصر، وعدم الخضوع بالقول. الأصل الالتزام بالمماثل عند الإمكان.`,verdict:"CONDITIONAL",source:"كتب الفقه الإسلامي + أبو الخير نشأت + الفتاوى الطبية المعاصرة",tags:["طبيب","مريضة","خلوة","علاج","محرم","ممرضة","فتنة"]},{id:"genetic_001_2025",category:_.GENETICS_REPRODUCTION,title:"تجميد البويضات",question:"ما حكم تجميد البويضات للنساء لتأخير الحمل (للزواج المتأخر أو قبل العلاج الكيماوي)؟",medical_context:"egg freezing, cryopreservation, oocyte preservation, social freezing, medical freezing",ruling:`الحكم: جائز بضوابط شرعية صارمة.

السياق الطبي: تلجأ النساء لهذه العملية إما لتأخر سن الزواج (الخوف من انخفاض الخصوبة مع التقدم في العمر) أو قبل الخضوع لعلاج كيماوي قد يؤثر على المبايض.

الضوابط الشرعية:
1. أمن الاختلاط: يجب ضمانات إجرائية صارمة في المعامل لمنع استبدال العينات أو اختلاط النسب.
2. مشروعية الاستخدام: لا يجوز استخدام البويضات المجمدة إلا للتلقيح من حيوان منوي لزوج شرعي بعقد صحيح قائم لحظة التلقيح.
3. عدم البيع: لا يجوز التبرع بها أو بيعها لأخريات (الأعضاء والخلايا الإنسانية ليست محلاً للتجارة).
4. الحكم ينطبق أيضاً على تجميد الحيوانات المنوية والأجنة المخصبة.

تطور الموقف: أصدرت دار الإفتاء المصرية فتاوى حديثة (2015 وما بعده) تبيح هذه العملية لأنها "تسليط وسيلة آمنة لحفظ الخصوبة" دون تجاوز الحدود الشرعية.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية (فتوى 2015 والفتاوى اللاحقة) / مركز الأزهر العالمي للفتوى الإلكترونية",tags:["بويضات","تجميد","عقم","حصوبة"]},{id:"genetic_002_2025",category:_.GENETICS_REPRODUCTION,title:"تحديد جنس الجنين",question:"هل يجوز التدخل الطبي لاختيار جنس الجنين (ذكر أو أنثى)؟",medical_context:"sex selection, gender choice, PGD, sperm sorting, family balancing",ruling:`الفتوى: جائز بضوابط تفصيلية.

طرق التحديد:
1. فصل الحيوانات المنوية (تقنية Sperm Sorting).
2. التشخيص الوراثي للأجنة قبل الزرع (PGD - Pre-implantation Genetic Diagnosis).

حالات الجواز:
1. الجنس الطبي: إذا كان الدافع "علاجياً" لتجنب أمراض وراثية مرتبطة بجنس معين (مثل الهيموفيليا التي تصيب الذكور بشكل أساسي). هذا "واجب" إذا أمكن تجنب المرض.
2. توازن الأسرة (Family Balancing): إذا كان لدى الأسرة عدة أطفال من جنس واحد وترغب في الحصول على طفل من الجنس الآخر لتحقيق التوازن الأسري، يجوز ذلك بشرط:
   - أن يكون الدافع عدم الرغبة في زيادة عدد أطفال من نفس الجنس (لا كراهية الإناث).
   - ألا يتحول إلى سياسة عامة تخل بالتوازن الديموغرافي في المجتمع.

الموقف من كراهية الإناث: إذا كان الدافع كراهية الإناث أو تفضيل الذكور تفضيلاً صريحاً (ظاهرة جاهلية)، فالعملية حرام.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (القرار 102) / قرار دار الإفتاء المصرية الحديث",tags:["جنس الجنين","اختيار جنس","وراثة"]},{id:"genetic_003_2025",category:_.GENETICS_REPRODUCTION,title:"البصمة الوراثية (DNA) وإثبات النسب",question:"ما حكم استخدام تحليل DNA لإثبات النسب أو نفيه؟",medical_context:"DNA, genetic fingerprint, paternity test, parentage verification, switched babies",ruling:`الحكم: جائز لإثبات النسب في حالات محددة، ومحرم لنفي النسب الثابت.

حالات الإثبات الجائزة:
1. نسب الطفل مجهول الأبوين (اللقيط).
2. إثبات نسب الطفل المشكوك فيه عند الاشتباه في المستشفى (تبديل المواليد).
3. التعرف على الجثث والمفقودين.
4. في قضايا الاغتصاب وإثبات الجريمة.

حالات النفي المحرمة:
يحرم استخدام DNA لنفي نسب "ثابت شرعاً بالفراش" (أي الطفل المولود لزوجين في عقد زواج صحيح). فالشريعة الإسلامية تتشوف لستر الأعراض وإثبات الأنساب، ولا تفتح باب الطعن في الأنساب المستقرة لمجرد الشك، إلا في إجراءات "اللعان" القضائية.

التعليل الشرعي: الشرع يفضل استقرار النسب على الدقة العلمية البحتة لحماية الأسرة والمجتمع من الفوضى.

مبدأ المؤسسات المصرية: ترى دار الإفتاء ومجمع الفقه أن البصمة الوراثية "قرينة قوية تكاد تصل لليقين"، لكن الحكم الشرعي أقوى من القرينة العلمية.`,verdict:"CONDITIONAL",source:"قرار مجمع الفقه الإسلامي الدولي (القرار 71) / دار الإفتاء المصرية",tags:["بصمة وراثية","نسب","DNA"]},{id:"genetic_004_2025",category:_.GENETICS_REPRODUCTION,title:"تأجير الأرحام (Surrogacy)",question:"ما حكم استئجار امرأة أخرى لتحمل جنيناً من بويضة الزوجة وحيوان منوي الزوج؟",medical_context:"surrogacy, gestational carrier, womb rental, gestational mother, genetic mother",ruling:`الحكم: محرم قطعاً بجميع صوره (سواء تبرعاً أم بمقابل مالي).

الموقف الموحد: اتفقت دار الإفتاء المصرية، ومركز الأزهر للفتوى، ومجمع الفقه الإسلامي الدولي على تحريم تأجير الأرحام بشكل قاطع، وعدم جواز هذه العملية تحت أي ظرف.

العلل الفقهية للتحريم:
1. اختلاط الأنساب: يحدث تضارب بين "الأمومة الجينية" (صاحبة البويضة - الأصلية) و"الأمومة الحملية" (صاحبة الرحم - البديلة)، والقرآن الكريم يقول {إِنْ أُمَّهَاتُهُمْ إِلَّا اللَّائِي وَلَدْنَهُمْ}، فالأم الشرعية هي التي تحمل وتلد، لا التي توفر البويضة فقط.
2. امتهان المرأة: تحويل رحم المرأة إلى سلعة للإيجار ينتقص من كرامتها الإنسانية.
3. انتهاك الأسرة: فتح باب للمشاكل الاجتماعية (تعلق الأم البديلة بالطفل، نزاعات حول التسليم، انتشار الأسر البديلة).
4. الاتجار بالبشر: يعتبر شكلاً من أشكال الاتجار بالأعضاء والبشر المحرم قطعاً.

القاعدة الشرعية: "الحاجة لا تبيح المحرم، والاضطرار قد يبيح بعض المحرمات لكن ليس كل مما تخالف فيه مصلحة الأسرة والمجتمع".`,verdict:"FORBIDDEN",source:"قرار مجمع الفقه الإسلامي الدولي رقم 15 (1986) / دار الإفتاء المصرية (فتوى 11804)",tags:["تأجير أرحام","surrogacy","نساء","عقم"]},{id:"genetic_005_2025",category:_.GENETICS_REPRODUCTION,title:"الأمراض الوراثية والتدخل الجيني",question:"هل يجوز اختيار الأجنة السليمة وترك الأجنة المريضة وراثياً عند الإخصاب؟",medical_context:"genetic diseases, hereditary disorders, PGD, sickle cell, cystic fibrosis, hemophilia",ruling:`الحكم: جائز (بل قد يكون مستحباً) اختيار الأجنة السليمة وترك المريضة، بشروط:

الشروط الشرعية:
1. أن يكون المرض الوراثي "خطيراً" يسبب معاناة شديدة للمريض أو يختصر عمره بشكل محقق (مثل الثلاسيميا الكبرى، الهيموفيليا، التليف الكيسي).
2. أن يكون المرض "موروثاً محتماً" (جينياً)، بناءً على فحص وراثي دقيق.
3. أن يتم اختيار الأجنة السليمة باستخدام تقنية التشخيص الوراثي قبل الزرع (PGD) وليس بإجهاض الأجنة بعد تكونها.
4. أن تكون القرارات مدعومة بطبيب متخصص ولجنة أخلاقيات.

المنع المطلق: لا يجوز اختيار الأجنة بناءً على "صفات" غير مرضية (مثل لون العين أو الذكاء المتوقع)، لأن هذا من باب تعديل الخلقة بلا عذر شرعي.

التعليل: حفظ النسل والصحة مقصد ضروري من مقاصد الشريعة، والوقاية من الأمراض الخطيرة أولى من مجرد الإنجاب.`,verdict:"PERMITTED",source:"مجمع الفقه الإسلامي الدولي / قرارات دار الإفتاء المصرية المتعلقة بالهندسة الوراثية",tags:["أمراض وراثية","جينات","PGD","وراثة"]},{id:"tattoo_001_2025",category:_.TATTOO_CORTISONE,title:"إزالة الوشم (Tattoo Removal)",question:"هل يجوز لمن تاب عن الوشم أن يزيله بالليزر أو الجراحة؟",medical_context:"tattoo, laser removal, dermatology, repentance, sin",ruling:`الحكم: جائز (بل قد يكون مستحباً) إزالة الوشم للتائب الندِم.

التفصيل:
1. الوشم نفسه (التطعيم): محرم شرعاً، والنبي ﷺ لعن "الواشمة والمستوشمة".
2. إزالة الوشم: جائزة بجميع الوسائل الطبية الآمنة (ليزر، تقشير، جراحة)، لأن فيه "توبة" و"إصلاح" للخطأ السابق.
3. للتائب: إن كان يود التخلص من آثار ذنبه السابق فذلك مستحب لأجل قوله تعالى: {إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ}.`,verdict:"PERMITTED",source:"فتاوى الفقهاء المعاصرين / دار الإفتاء المصرية",tags:["وشم","وشم دائم","توبة"]},{id:"tattoo_002_2025",category:_.TATTOO_CORTISONE,title:"تفتيح البشرة (Skin Lightening)",question:"ما حكم استخدام المراهم والعمليات لتفتيح لون البشرة؟",medical_context:"skin lightening, bleaching cream, melanin reduction, cosmetic",ruling:`الحكم: محرم الاستخدام لمجرد التجميل والموضة.

التفصيل:
1. إذا كان للتفتيح لسبب طبي (علاج التصبغات المفرطة التي تسبب حرجاً أو مرضاً جلدياً): جائز.
2. إذا كان للتفتيح لتغيير لون البشرة الطبيعي لمجرد الموضة أو "محاكاة جمالية": محرم، لأنه:
   - تغيير لخلق الله.
   - فيه ظاهرة "الاستعمار الثقافي" والنظر للبشرة البيضاء كمعيار جمال.
   - قد يسبب أضراراً صحية (السرطان، التسمم بالزئبق في بعض المراهم).

التحذير: كثير من كريمات تفتيح البشرة تحتوي على "الزئبق" و"الكورتيزون" بتركيزات عالية وخطيرة، وهي محرمة شرعاً وطبياً.`,verdict:"FORBIDDEN",source:"فتاوى معاصرة / توصيات منظمة الصحة العالمية",tags:["جلد","تفتيح بشرة","تجميل"]},{id:"prayer_001_2025",category:_.PRAYER_PURITY,title:"صلاة المريض والأوضاع المختلفة",question:"كيف يصلي المريض الذي لا يستطيع الوقوف أو الركوع أو السجود؟",medical_context:"prayer positions, disabled, wheelchair, bedridden, standing, sitting",ruling:`القاعدة الشرعية: "صلِّ قائماً، فإن لم تستطع فقاعداً، فإن لم تستطع فعلى جنب" (حديث صحيح).

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
يسقط الفرض بالكلية في حالات العجز التام (مثل الغيبوبة)، لكن يجب قضاء الصلاة بعد الشفاء إن كان الغياب مؤقتاً.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي / دار الإفتاء المصرية / الأحاديث الصحيحة",tags:["صلاة","مريض","عجز","حركة"]},{id:"prayer_002_2025",category:_.PRAYER_PURITY,title:"الطهارة للمريض والمسح على الجبيرة",question:"كيف يتوضأ المريض الذي لا يستطيع غسل أطرافه (جبيرة، حروق، جروح)؟",medical_context:"ablution, wudu, splint, bandage, wounds, burns, tayammum",ruling:`الحكم: يجوز المسح على الجبيرة (الجبس أو الضمادات الطبية) بدلاً من الغسل.

الشروط:
1. أن تكون الجبيرة على عضو من أعضاء الوضوء (اليدين والرجلين والوجه).
2. أن يكون هناك عذر شرعي (جرح، حريق، كسر، مرض جلدي معدٍ).
3. المسح الخفيف على الجبيرة بحيث "تمر اليد عليها".
4. لا يشترط نزع الجبيرة للتأكد من نظافة ما تحتها (دفعاً للضرر).

التيمم: إذا أصيب الوجه والكفان بحروق شديدة تمنع الغسل، ينتقل للتيمم (الضرب على التراب ثم المسح).

حالة خاصة: الطهارة النجاسة (الاستنجاء):
إذا كان المريض عاجزاً عن الاستنجاء (الغسل بالماء بعد قضاء الحاجة)، يجوز استخدام المناديل الرطبة أو الجاف بدلاً منه، أو طلب مساعدة من المريض.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / كتب الفقه (باب الطهارة)",tags:["وضوء","جبيرة","مسح","حروق"]},{id:"prayer_003_2025",category:_.PRAYER_PURITY,title:"الفطر في الصيام للمريض والمسافر",question:"من يجوز لهم الفطر والإفطار في رمضان؟",medical_context:"fasting, illness, travel, exemption, makeup days, kuffara",ruling:`الفئات المعفوة من الصيام (مع وجوب القضاء):
1. المريض: الذي يضره الصوم أو يشدد عليه المرض (بقرار طبي أو شعور المريض).
2. المسافر: السفر فوق مسافة معينة (تقديرات تختلف من 80 إلى 90 كم).
3. الحامل والمرضع: إذا خافتا على نفسهما أو على الجنين/الرضيع.

الأحكام:
- الفطر: يجوز بمجرد العذر (لا يشترط الشدة الزائدة).
- القضاء: واجب في أيام أخرى من السنة.
- الكفارة: لا تجب للمعذور (الفطر بعذر ليس معصية).

الحالات الاستثنائية:
- الشيخ الكبير والعجوز: إذا كانا لا يطيقان الصوم: يفطران بدون قضاء، لكن يطعمان عن كل يوم مسكيناً (إطعام بدل).
- المريض المزمن: الذي لا يُرجى شفاؤه (مثل السرطان المتأخر): يفطر بدون قضاء، ويكفيه الإطعام.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / مجمع الفقه الإسلامي",tags:["صيام","رمضان","مريض","فطر","سفر"]},{id:"prayer_004_2025",category:_.PRAYER_PURITY,title:"رخصة جمع الصلاة: التأصيل الفقهي لحديث ابن عباس",question:"ما هو أساس جواز جمع الصلاة للطبيب من النصوص الشرعية؟",medical_context:"جمع الصلاة، الحرج، المشقة، وقت الصلاة، عذر، ضرورة",ruling:`يستند جواز جمع الصلاة للطبيب على حديث ابن عباس الصحيح الذي أخرجه الإمام مسلم:
"جمع رسول الله صلى الله عليه وسلم بين الظهر والعصر، والمغرب والعشاء بالمدينة، من غير خوف ولا مطر"

عندما سُئل ابن عباس عن السبب، أجاب بإجابة مقاصدية: "أراد أن لا يحرج أمته"

الفائدة الأساسية: العلة في جواز الجمع ليست محصورة في "السفر" فحسب، بل العلة الحقيقية هي "دفع الحرج". بناءً عليه، كل ما يؤدي إلى حرج شديد ومشقة بالغة في أداء الصلاة في وقتها، يجوز معه الجمع.

التطبيق على الأطباء: العمل الطبي المعقد (الجراحات الطويلة، أوبئة، عزل) يقع في قلب هذا المفهوم الفقهي.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية + مجمع البحوث الإسلامية + مركز الأزهر العالمي للفتوى",tags:["صلاة","جمع","طبيب","حديث ابن عباس","مشقة"]},{id:"prayer_005_2025",category:_.PRAYER_PURITY,title:"قاعدة المشقة تجلب التيسير وتطبيقاتها الطبية",question:'كيف تطبق القاعدة الفقهية "المشقة تجلب التيسير" على عمل الطبيب والممرضة؟',medical_context:"قاعدة فقهية، مشقة، تيسير، عملية جراحية، طهارة، وضوء، تركيز",ruling:`قاعدة "المشقة تجلب التيسير" من القواعد الخمس الكبرى التي يبنى عليها الفقه الإسلامي. في الواقع الطبي، تتجسد المشقة في صور متعددة:

1. استغراق الوقت: العمليات الجراحية التي تمتد لـ 6 أو 8 ساعات أو أكثر، وتستغرق وقتي الظهر والعصر معاً، أو المغرب والعشاء.

2. صعوبة الطهارة: في حالات الأوبئة (مثل كورونا)، حيث يرتدي الطبيب ملابس عزل كاملة (PPE)، ويشق عليه خلعها للوضوء لكل صلاة ثم لبسها مرة أخرى، لما في ذلك من مشقة بدنية، وخطر صحي، وتكلفة مالية.

3. الضغط النفسي والذهني: تركيز الطبيب في الجراحة أو العناية المركزة يتطلب صفاءً ذهنياً، والقلق بشأن فوات وقت الصلاة قد يشتت هذا التركيز، مما يؤثر على سلامة المريض.

الحكم النهائي: المشقة في العمل الطبي تبيح الجمع بين الصلوات.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية + دار الإفتاء المصرية",tags:["قاعدة فقهية","مشقة","تيسير","طبيب","جراحة"]},{id:"prayer_006_2025",category:_.PRAYER_PURITY,title:"موازنة حفظ الدين بحفظ النفس عند الطبيب",question:"إذا تعارض التزام الطبيب بوقت الصلاة مع سلامة المريض، أيهما يقدم؟",medical_context:"مقاصد الشريعة، حفظ الدين، حفظ النفس، موازنة فقهية، أولويات",ruling:`مقاصد الشريعة الإسلامية تقوم على حفظ الضرورات الخمس: الدين، النفس، العقل، النسل، والمال.

عندما يحدث تعارض ظاهري بين "حفظ الدين" (أداء الصلاة في وقتها المحدد) و"حفظ النفس" (استمرار العملية الجراحية لإنقاذ المريض)، فإن الشريعة تقدم حفظ النفس في هذه الجزئية الفقهية.

التعليل: النفس إذا تلفت لا تعوض، بينما الصلاة يمكن تداركها عبر رخصة الجمع التي شرعها الله تعالى.

الخلاصة الأخلاقية: الطبيب الذي يجمع الصلاة لينقذ مريضاً هو في عبادة (إنقاذ النفس) ويمارس رخصة شرعية في عبادة أخرى (الصلاة)، فهو مأجور من الجهتين معاً.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور شوقي علام",tags:["مقاصد شريعة","حفظ النفس","حفظ الدين","طبيب","جراحة"]},{id:"prayer_007_2025",category:_.PRAYER_PURITY,title:"جمع التقديم: صورته وتطبيقه على الطبيب الجراح",question:"ما هي صورة جمع التقديم وكيف يطبقها الطبيب قبل دخول غرفة العمليات؟",medical_context:"جمع تقديم، ظهر، عصر، مغرب، عشاء، وقت الصلاة، عملية جراحية",ruling:`جمع التقديم هو أن يصلي الظهر والعصر في وقت الظهر، أو المغرب والعشاء في وقت المغرب.

التطبيق على الطبيب الجراح:
إذا علم الطبيب أنه سيدخل العملية الجراحية في وقت الظهر ولن يخرج إلا بعد غروب الشمس (فوات وقت العصر)، فإنه يصلي العصر مع الظهر مقدماً قبل الدخول للعمليات.

الإجراء العملي:
1. بمجرد أذان الظهر: يتوضأ الطبيب
2. يصلي الظهر (4 ركعات) بنية "أصلي الظهر"
3. بعد التسليم مباشرة: يقيم الصلاة للعصر
4. يصلي العصر (4 ركعات) بنية "أصلي العصر جمع تقديم مع الظهر"
5. يدخل غرفة العمليات وقد أدى فريضتي النهار

الأفضلية: هذا الأسلوب هو الأفضل والأحوط لضمان أداء الصلاة وعدم انشغال البال بها أثناء الجراحة.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تقديم","طبيب","جراحة","تطبيق عملي"]},{id:"prayer_008_2025",category:_.PRAYER_PURITY,title:"جمع التأخير: صورته وتطبيقه على حالات الطوارئ",question:"ما هي صورة جمع التأخير وكيف يطبقها الطبيب في حالات الطوارئ المفاجئة؟",medical_context:"جمع تأخير، طوارئ، حادث، جراحة عاجلة، نية، وقت العصر",ruling:`جمع التأخير هو أن يؤخر الطبيب صلاة الظهر ليصليها مع العصر في وقت العصر، أو يؤخر المغرب ليصليها مع العشاء.

التطبيق على الطبيب في حالات الطوارئ:
إذا كان الطبيب منخرطاً في العمل قبل دخول وقت الظهر، واستمر العمل حتى دخول وقت العصر (مثل حادث كبير يتطلب تدخلاً فورياً)، فإنه ينوي بقلبه تأخير الظهر، ويصليهما معاً بعد انتهاء العمل.

الإجراء العملي:
1. عندما يدرك الطبيب أن وقت الظهر سيفوته بسبب انشغاله بإنقاذ المصابين
2. يعقد نية بقلبه: "يارب، نويت تأخير صلاة الظهر لأصليها مع العصر بسبب هذا العذر"
3. يستمر في عمله
4. عند الانتهاء (في وقت العصر): يتوضأ ويصلي الظهر أولاً (مراعاة للترتيب) ثم العصر

الأهمية: هذا هو الأسلوب الصحيح في حالات الطوارئ المفاجئة.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تأخير","طوارئ","طبيب","نية"]},{id:"prayer_009_2025",category:_.PRAYER_PURITY,title:"الفرق بين الجمع والقصر: عدم جواز قصر الركعات للطبيب",question:"هل يجوز للطبيب أن يقصر الصلاة (يصليها ركعتين بدل أربع) عند جمع الصلوات؟",medical_context:"قصر، جمع، ركعات، حاضر، مسافر، سفر، حكم",ruling:`لا يجوز قصر الصلاة (تقليل الركعات) للطبيب.

التوضيح الفقهي:
- الجمع رخصة في "الوقت" وليست رخصة في "عدد الركعات"
- القصر رخصة مرتبطة بـ "السفر" حصراً (عند جماهير الفقهاء)
- الطبيب يمارس عمله في مكان إقامته (المستشفى)، فهو "حاضر" وليس "مسافراً"

الأداء الصحيح:
- يصلي الطبيب الظهر أربع ركعات (كاملة)
- يصلي العصر أربع ركعات (كاملة)
- يصلي المغرب ثلاث ركعات (كاملة)
- يصلي العشاء أربع ركعات (كاملة)

الحكم الشرعي: الجمع بدون قصر هو الحكم الشرعي الصحيح للطبيب الحاضر.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + مركز الأزهر العالمي للفتوى + مجمع البحوث الإسلامية",tags:["صلاة","قصر","جمع","ركعات","حاضر"]},{id:"prayer_010_2025",category:_.PRAYER_PURITY,title:"شرط النية في جمع الصلاة: متى وكيف ينوي الطبيب",question:"ما هو شرط النية في الجمع؟ ومتى يجب أن ينوي الطبيب الجمع؟",medical_context:"نية، جمع تقديم، جمع تأخير، تكبيرة إحرام، شرط صحة",ruling:`النية شرط صحة في الجمع. والتفصيل الفقهي كالتالي:

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

الحكم الشرعي: النية شرط واجب لصحة الجمع.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","نية","جمع","شرط صحة"]},{id:"prayer_011_2025",category:_.PRAYER_PURITY,title:"شرط الموالاة (التتابع) في جمع الصلاة",question:"هل يجب أن تكون الصلاتان المجموعتان متتابعتان بلا فاصل؟",medical_context:"موالاة، تتابع، فاصل، صيغة الجمع، شرط",ruling:`الموالاة (التتابع) شرط في جمع التقديم عند جماهير الفقهاء.

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

الحكم الشرعي: الموالاة شرط عند كثير من الفقهاء لجمع التقديم، والأحوط الالتزام بها.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","موالاة","جمع","شرط"]},{id:"prayer_012_2025",category:_.PRAYER_PURITY,title:"شرط الترتيب في الصلوات المجموعة",question:"هل يجب أن يصلي الطبيب الظهر قبل العصر والمغرب قبل العشاء؟",medical_context:"ترتيب، صلوات، ظهر، عصر، مغرب، عشاء",ruling:`الترتيب شرط واجب عند الجمهور في الجمع.

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

الحكم الشرعي: الترتيب شرط واجب، ولا يسقط إلا بالنسيان عند بعض الفقهاء.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","ترتيب","جمع","شرط"]},{id:"prayer_013_2025",category:_.PRAYER_PURITY,title:"جمع الصلاة في أوبئة العزل: خشية العدوى وحفظ المال",question:"ما حكم جمع الصلاة لأطقم العزل الطبية المخالطة للأوبئة (كورونا)؟",medical_context:"وباء، عدوى، كورونا، عزل، ملابس واقية، PPE، تعقيم، مال عام",ruling:`أصدرت لجنة الفتوى بمجمع البحوث الإسلامية بالأزهر الشريف فتاوى خاصة بأطقم العزل أثناء الأوبئة. الحكم: يجوز الجمع بعلل قوية تتجاوز المشقة البدنية.

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

النتيجة: الجمع وسيلة لترشيد الموارد وحفظ المال العام، وهي علة قوية من الناحية الفقهية.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية بالأزهر الشريف - لجنة الفتوى",tags:["صلاة","جمع","وباء","عدوى","عزل","كورونا"]},{id:"prayer_014_2025",category:_.PRAYER_PURITY,title:"تصنيف الكوادر الطبية وحكم كل فئة",question:"هل جميع العاملين في المستشفيات يجوز لهم الجمع؟ أم هناك فئات محددة؟",medical_context:"فئات طبية، تصنيف، عزل، العناية المركزة، فحص، كمامة",ruling:`لم تعطِ فتاوى مجمع البحوث الإسلامية حكماً تعميمياً، بل فصلت الأحكام حسب طبيعة العمل والاختلاط بالمصابين:

الفئة الأولى: الفحص المبدئي (لا يخالطون المصابين مباشرة):
- طبيعة العمل: فحص مبدئي، يرتدون كمامات وقفازات يمكن خلعها بسهولة
- الحكم الشرعي: يتعين عليهم الوضوء وأداء الصلاة في وقتها
- النتيجة: لا يجوز لهم الجمع (لانتفاء العذر والمشقة المعتبرة)

الفئة الثانية: أطقم العزل والعناية المركزة (يخالطون المصابين مباشرة):
- طبيعة العمل: عزل، عناية مركزة، يخالطون المصابين مباشرة، يرتدون بدلات عزل كاملة (Full PPE)
- الحكم الشرعي: يجوز لهم الجمع بين الصلوات
- الصور المباحة: جمع الظهر مع العصر، والمغرب مع العشاء، تقديماً أو تأخيراً حسب ظروف العمل والورديات

الخلاصة: الفرق هو وجود المشقة الحقيقية والعدوى المباشرة.`,verdict:"CONDITIONAL",source:"مجمع البحوث الإسلامية - لجنة الفتوى",tags:["صلاة","جمع","تصنيف","فئات طبية"]},{id:"prayer_015_2025",category:_.PRAYER_PURITY,title:"أحكام الطهارة والوضوء عند ارتداء الملابس الواقية",question:"كيف يتوضأ الطبيب وهو يرتدي بدلات عزل كاملة؟ وماذا لو انتقض وضوؤه؟",medical_context:"طهارة، وضوء، ملابس واقية، بدلة عزل، تيمم، فاقد الطهورين",ruling:`وضعت لجنة الفتوى بمجمع البحوث الإسلامية ضوابط واضحة للطهارة في ظروف العزل:

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

الحكم النهائي: الصلاة واجبة على كل حال، والطهارة تُيسّر قدر الإمكان.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية - لجنة الفتوى",tags:["صلاة","طهارة","وضوء","عزل","تيمم"]},{id:"prayer_016_2025",category:_.PRAYER_PURITY,title:"حكم صلاة الطبيب بملابس ملوثة بالدم",question:"هل تصح صلاة الطبيب الجراح وملابسه عليها دماء المريض؟",medical_context:"صلاة، دم، ملابس، جراح، نجاسة، ضرورة، معفو عنه",ruling:`أجابت دار الإفتاء المصرية (أمين الفتوى) على هذا السؤال بتفصيل يراعي ظروف الجراحين:

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

الخلاصة: الصلاة مقدمة على كل شيء، والجراح معذور في ظروفه الاستثنائية.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية - أمين الفتوى",tags:["صلاة","دم","جراح","نجاسة","ضرورة"]},{id:"prayer_017_2025",category:_.PRAYER_PURITY,title:"عدم اتخاذ الجمع عادة يومية: الضابط الأهم",question:"هل يجوز للطبيب أن يجعل جمع الصلاة عادة يومية دائمة؟",medical_context:"جمع، عادة، يومية، رخصة، عذر، عارضة",ruling:`حذّر مركز الأزهر العالمي للفتوى الإلكترونية من تحويل الجمع إلى عادة. الشيخ أمير عبد العال: "شدد على ضرورة عدم اتخاذ ذلك الجمع باستمرار وجعله عادة يومية فهذا غير جائز"

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

الحكم الشرعي: عدم الاعتياد على الجمع شرط لجوازه، والاعتياد بلا عذر حرام.`,verdict:"CONDITIONAL",source:"مركز الأزهر العالمي للفتوى الإلكترونية - الشيخ أمير عبد العال",tags:["صلاة","جمع","عادة","رخصة","عذر"]},{id:"prayer_018_2025",category:_.PRAYER_PURITY,title:"تقدير الطبيب للعذر: الطبيب فقيه نفسه",question:"من الذي يقرر هل الطبيب معذور في الجمع أم لا؟",medical_context:"جمع، عذر، تقدير، ضرورة، طبيب، مسؤولية",ruling:`أوضحت دار الإفتاء المصرية ومركز الأزهر العالمي مبدأً مهماً: الطبيب "فقيه نفسه" في تقدير مدى انشغاله والعذر.

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

الحكم النهائي: الطبيب مسؤول أمام الله عن تقديره للعذر، فليكن عادلاً في الحكم على نفسه.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية + مركز الأزهر العالمي للفتوى الإلكترونية",tags:["صلاة","جمع","عذر","مسؤولية","تقدير"]},{id:"prayer_019_2025",category:_.PRAYER_PURITY,title:"حكم المريض الذي يخضع للجراحة",question:"هل للمريض الذي يُخدر أو يشق عليه الحركة حق الجمع كذلك؟",medical_context:"مريض، جراحة، تخدير، حركة، صلاة، جمع",ruling:`أوضح مركز الأزهر العالمي للفتوى أن حكم المريض الذي يخضع للجراحة يتماهى مع حكم الطبيب:

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

الخلاصة: المريض معذور في الجمع والتخفيف، والصلاة واجبة على كل حال بأي هيئة ممكنة.`,verdict:"PERMITTED",source:"مركز الأزهر العالمي للفتوى الإلكترونية",tags:["صلاة","جمع","مريض","جراحة","تخدير"]},{id:"prayer_020_2025",category:_.PRAYER_PURITY,title:"السيناريو الأول: العمليات المجدولة (Elective Surgery)",question:"كيف يطبق الطبيب جمع الصلاة عملياً إذا كانت لديه عمليات مجدولة معروفة مسبقاً؟",medical_context:"عملية مجدولة، جدول جراحي، جمع تقديم، إجراء عملي",ruling:`إذا كان الطبيب يعلم مسبقاً بعمليات جراحية محددة الأوقات، فالإجراء الصحيح هو جمع التقديم:

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

نصيحة عملية: خطط لصلاتك قبل دخول العمليات، تماماً كما تخطط للجراحة نفسها.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تقديم","عملية مجدولة","إجراء عملي"]},{id:"prayer_021_2025",category:_.PRAYER_PURITY,title:"السيناريو الثاني: حالات الطوارئ المفاجئة (Emergency)",question:"كيف يتصرف الطبيب عندما تحدث طارئة مفاجئة وينشغل عن الصلاة؟",medical_context:"طوارئ، حادث، إنقاذ، جمع تأخير، نية، إجراء عملي",ruling:`إذا حدثت طارئة مفاجئة (حادث، نزيف شديد، إنقاذ فوري) واستمرت حتى يمضي وقت الصلة، فالإجراء الصحيح هو جمع التأخير:

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

نصيحة تطبيقية: في حالات الطوارئ، تذكر أن إنقاذ النفس عبادة، والجمع رخصة شرعية.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تأخير","طوارئ","حادث","إجراء عملي"]},{id:"prayer_022_2025",category:_.PRAYER_PURITY,title:"السيناريو الثالث: العمل في مناطق العزل الكامل",question:"كيف يصلي الطبيب بملابس حماية كاملة وهو يعمل في قسم العزل لمدة 8 ساعات؟",medical_context:"عزل، ملابس واقية، 8 ساعات، بدلة كاملة، صلاة بالملابس",ruling:`إذا كان الطبيب يرتدي بدلة عزل كاملة وسيعمل لمدة 8 ساعات متتالية، فالإجراء الصحيح هو:

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

نصيحة ختامية: أداء الصلاة بأي هيئة ممكنة أفضل من تركها، والله يعلم ظرفك ويحاسبك بعدل.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية",tags:["صلاة","جمع","عزل","ملابس واقية","إجراء عملي"]},{id:"prayer_023_2025",category:_.PRAYER_PURITY,title:"التوصيات الختامية للأطباء والكوادر الطبية",question:"ما هي الضوابط والنصائح الشاملة لتطبيق جمع الصلاة بشكل صحيح؟",medical_context:"توصيات، ضوابط، نصائح، أخلاقيات، مسؤولية",ruling:`وضعت المؤسسات الفتوائية الثلاث (دار الإفتاء، مجمع البحوث، مركز الأزهر) مجموعة من التوصيات الختامية:

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
"إن المواءمة بين قدسية الوقت الشعائري وقدسية النفس البشرية التي اؤتمن الطبيب على حفظها ممكنة بفضل سعة الفقه الإسلامي ورحابة مقاصده، والله تعالى أعلى وأعلم."`,verdict:"PERMITTED",source:"دار الإفتاء المصرية + مجمع البحوث الإسلامية + مركز الأزهر العالمي للفتوى",tags:["توصيات","ضوابط","نصائح","أخلاقيات","مسؤولية"]},{id:"ethics_006_2025",category:_.MEDICAL_EXPERIMENTS,title:"إجراء التجارب الطبية على الحيوان",question:"ما حكم إجراء التجارب الطبية على الحيوانات؟",medical_context:"تجارب حيوانية، أبحاث طبية، حيوان، دراسات سلامة",ruling:`يجوز إجراء التجارب على الحيوانات لتحقيق غرض طبي مشروع (كاستكشاف دواء جديد أو علاج)، بشروط صارمة:

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

الحكم الشرعي: التجارب على الحيوانات جائزة عند الضرورة الطبية مع الرفق والحد الأدنى من الألم.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي + الموسوعة الفقهية الإسلامية",tags:["تجارب","حيوان","بحث علمي","أخلاقيات"]},{id:"ethics_007_2025",category:_.MEDICAL_EXPERIMENTS,title:"إجراء التجارب الطبية على الإنسان",question:"ما حكم التجارب الطبية على البشر (التجارب السريرية)؟",medical_context:"تجارب سريرية، clinical trials، تجارب بشرية، بحث طبي، consent",ruling:`التجارب الطبية على الإنسان نوعان مختلفان جداً:

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

الحكم الشرعي: التجارب البحثية على البشر جائزة نظرياً لكن بحدود صارمة جداً تحمي كرامة الإنسان وحياته.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي + د. محمود شلتوت",tags:["تجارب بشرية","clinical trials","أخلاقيات","موافقة"]},{id:"icu_004_2025",category:_.ICU_DEATH,title:"نزع أجهزة الإعاشة عن المريض (Withdrawing Life Support)",question:"متى يجوز نزع أجهزة التنفس الصناعي والإعاشة عن المريض؟",medical_context:"موت دماغي، موت جذع المخ، أجهزة إعاشة، ventilator، brain death",ruling:`نزع الأجهزة الطبية يختلف حسب الحالة:

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
يجوز نزع أجهزة الإعاشة عن الميت دماغياً (موت جذع المخ) المحقق بتشخيص متعدد، مع موافقة الأسرة، لأن الموت الدماغي يعتبر موتاً شرعياً عند المجامع الفقهية.`,verdict:"PERMITTED",source:"مجمع الفقه الإسلامي الدولي + د. أنس أبو شادي",tags:["موت دماغي","أجهزة","إعاشة","عناية","نهائي"]},{id:"obgyn_011_2025",category:_.WOMEN_PREGNANCY,title:"ختان الإناث (Female Genital Mutilation)",question:"ما هو الحكم الشرعي والطبي لختان الإناث؟",medical_context:"ختان إناث، FGM، تشويه الأعضاء التناسلية، ضرر صحي",ruling:`حكم ختان الإناث: حرام شرعاً وجريمة طبية وإنسانية

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
ختان الإناث حرام شرعاً بإجماع الفقهاء المعاصرين، وحرام طبياً (يسبب أضراراً لا تُحتمل)، وحرام قانوناً في معظم دول العالم. لا يجوز لأي طبيب إجراؤه بأي حال، والواجب الديني والأخلاقي منعه ومحاربته.`,verdict:"FORBIDDEN",source:"دار الإفتاء المصرية + الشيخ عطية صقر + الشيخ يوسف القرضاوي",tags:["ختان","إناث","تشويه","ضرر","FGM","حرام"]},{id:"pharm_001_2025",category:_.PHARMACY_DRUGS,title:"المنشطات والمشروبات والعقاقير المنشطة (Doping)",question:"ما هو الحكم الشرعي لتناول المنشطات الرياضية والبدنية؟",medical_context:"منشطات، دوبينج، استيرويدات، منشطات رياضية، أداء",ruling:`المنشطات محرمة شرعاً لأسباب متعددة:

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
تناول المنشطات حرام شرعاً لما فيها من ضرر مؤكد على الصحة، وغش في المنافسات، ولا يجوز بأي حال إلا إذا كانت دواءً موصوفاً من طبيب لمرض معين.`,verdict:"FORBIDDEN",source:"د. مصطفى أحمد زيد + الفقه الميسر + دار الإفتاء المصرية",tags:["منشطات","دوبينج","رياضة","غش","ضرر","حرام"]},{id:"pharm_002_2025",category:_.PHARMACY_DRUGS,title:"الدعاية والإعلان الكاذب للأدوية (Deceptive Marketing)",question:"ما هي الضوابط الشرعية للدعاية والإعلان عن الأدوية؟",medical_context:"دعاية دوائية، إعلان، تسويق، كذب، أعراض جانبية",ruling:`الدعاية الدوائية يجب أن تكون صادقة وأمينة:

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
الدعاية الدوائية يجب أن تكون صادقة وأمينة وشاملة. الكذب أو المبالغة أو إخفاء الأضرار حرام شرعاً، والصيدلي والطبيب والشركة المسؤولة عن الضرر الذي يقع بسبب الدعاية الكاذبة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + أحكام الأدوية والدعاية الطبية",tags:["دعاية","إعلان","كذب","غش","أدوية","تدليس","أعراض جانبية"]},{id:"pharm_003_2025",category:_.PHARMACY_DRUGS,title:"حرق الأدوية / التلاعب بالأسعار والفواتير (Burning)",question:'ما حكم بيع الدواء بطريقة "الحرق" (خصم كبير جداً من السعر الفعلي) لتحقيق أهداف مبيعات وهمية؟',medical_context:"حرق، خصم، تلاعب، فواتير مزيفة، تسويق",ruling:`حرق الأدوية (الخصم الكبير جداً) حرام شرعاً:

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
حرق الأدوية (الخصم غير الحقيقي مع تزوير الفواتير) حرام شرعاً وقانوناً، لما فيه من كذب وتدليس وإفساد للسوق. جائز الخصم الحقيقي بفواتير حقيقية.`,verdict:"FORBIDDEN",source:"شرعة التجارة الإسلامية + أحكام البيع والغش",tags:["حرق","سوق","تلاعب","فواتير","خصم","تزوير","غش"]},{id:"pharm_004_2025",category:_.PHARMACY_DRUGS,title:"بيع أدوية التأمين الصحي للأفراد غير المستحقين (Insurance Fraud)",question:"هل يجوز للصيدلي أو الموظف بيع أدوية التأمين الصحي المدعومة لأشخاص غير مستحقين؟",medical_context:"تأمين صحي، صيدلية، مال عام، مستحقون، دعم",ruling:`بيع أدوية التأمين لغير المستحقين حرام قطعاً:

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
بيع أدوية التأمين الصحي المدعومة لأشخاص غير مستحقين حرام قطعاً وتعتبر سرقة وخيانة أمانة. الواجب على الموظف رفع يده عن هذا الفعل فوراً، والتوبة والرجوع إلى الله تعالى.`,verdict:"FORBIDDEN",source:"دار الإفتاء المصرية + الفقه الإسلامي (السرقة والخيانة)",tags:["تأمين","مال عام","فساد","سرقة","خيانة أمانة","حرام"]},{id:"pharm_005_2025",category:_.PHARMACY_DRUGS,title:"تشخيص الصيدلي للمرض ووصفه للدواء بدلاً من الطبيب",question:"هل يجوز للصيدلي أن يشخص المرض ويصف الدواء بدلاً من الطبيب دون استشارة؟",medical_context:"صيدلي، تشخيص، وصفة، طبيب، مسؤولية، ضرر",ruling:`تشخيص الصيدلي وحده للمرض حرام شرعاً وطبياً:

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
لا يجوز للصيدلي تشخيص المرض ووصف الدواء من عنده بدلاً من الطبيب. دوره يقتصر على الصرف برشة طبيب موثوقة، والنصح حول كيفية استخدام الدواء. أي تشخيص بدون طبيب يعتبر "تطبب" محرم وضامن للضرر.`,verdict:"FORBIDDEN",source:"الفقه الإسلامي (التطبب والمسؤولية) + القوانين الطبية",tags:["صيدلي","تشخيص","تطبب","مسؤولية","ضرر","طبيب"]},{id:"misc_001_2025",category:_.MISCELLANEOUS,title:"إفشاء السر الطبي وحفظ سرية المريض",question:"متى يجوز للطبيب إفشاء سر المريض؟ وما حدود الكتمان الطبي؟",medical_context:"سر طبي، سرية، confidentiality، خصوصية، إفشاء",ruling:`الأصل الفقهي الأول: وجوب كتمان السر:
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
أصل حفظ سر المريض واجب على الطبيب، والإفشاء لا يجوز إلا في حالات استثنائية محددة بدقة (منع ضرر أكبر، أمراض معدية تهدد المجتمع، إبلاغ قانوني، شهادة قضائية، موافقة المريض).`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي + د. محمود ضيفي",tags:["سر طبي","سرية","كتمان","خصوصية","إفشاء","أمانة"]},{id:"misc_002_2025",category:_.MISCELLANEOUS,title:"المسؤولية الجنائية والمدنية للطبيب (Medical Malpractice)",question:"متى يتحمل الطبيب مسؤولية قانونية وشرعية عن خطئه الطبي؟",medical_context:"خطأ طبي، إهمال، مسؤولية، ضمان، negligence",ruling:`المسؤولية الطبية تقوم على عنصرين:

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
الطبيب مسؤول (ضامن) عن الخطأ إذا كان جاهلاً أو مهملاً أو متعمداً أو لم يحصل على موافقة المريض. أما إذا كان حاذقاً واتبع الأصول الطبية وأذن المريض وحدث ضرر خارج عن إرادته، فلا ضمان عليه.`,verdict:"CONDITIONAL",source:"ابن القيم الجوزية + القوانين الطبية الحديثة + قرارات المحاكم",tags:["خطأ طبي","ضمان","إهمال","مسؤولية","تعويض","جنائي"]},{id:"genetic_006_2025",category:_.GENETICS_REPRODUCTION,title:"الاستنساخ والهندسة الوراثية (Cloning & Genetic Engineering)",question:"ما هو الحكم الشرعي للاستنساخ البشري والاستنساخ العلاجي والهندسة الوراثية؟",medical_context:"استنساخ، cloning، خلايا جذعية، جينات، وراثة، هندسة",ruling:`الحكم: جائز شرعاً للحيوانات والنباتات
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
5. استنساخ الحيوان: جائز`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (قرار 96/10) + د. أنس أبو شادي",tags:["استنساخ","خلايا جذعية","جينات","هندسة وراثية","DNA","أمراض وراثية"]},{id:"fast_003_2025",category:_.FASTING_MEDICINE,title:"التداوي بالمحرمات (أدوية تحوي كحول أو خنزير)",question:"هل يجوز استخدام أدوية تحوي كحولاً أو مشتقات خنزير؟",medical_context:"كحول، خنزير، gelatin، جيلاتين، مواد محرمة، أدوية",ruling:`المشكلة الطبية:
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
- الأفضل: البحث عن بدائل حلال وطاهرة`,verdict:"FORBIDDEN",source:"ابن القيم الجوزية + دار الإفتاء المصرية + فتاوى معاصرة",tags:["أدوية","كحول","خنزير","جيلاتين","لقاحات","ضرورة","بديل"]},{id:"genetic_007_2025",category:_.GENETICS_REPRODUCTION,title:"الاستنساخ والهندسة الوراثية (Cloning & Genetic Engineering)",question:"ما هو الحكم الشرعي للاستنساخ البشري والاستنساخ العلاجي والهندسة الوراثية؟",medical_context:"استنساخ، cloning، خلايا جذعية، جينات، وراثة، هندسة",ruling:`أنواع الاستنساخ:

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
5. استنساخ الحيوان: جائز`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (قرار 96/10) + د. أنس أبو شادي",tags:["استنساخ","خلايا جذعية","جينات","هندسة وراثية","DNA","أمراض وراثية"]},{id:"pharm_006_2025",category:_.PHARMACY_DRUGS,title:"التداوي بالمحرمات (أدوية تحوي كحول أو خنزير)",question:"هل يجوز استخدام أدوية تحوي كحولاً أو مشتقات خنزير؟",medical_context:"كحول، خنزير، gelatin، جيلاتين، مواد محرمة، أدوية",ruling:`المشكلة الطبية:
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
- المستقبل: الأمل بتطوير أدوية إسلامية بديلة`,verdict:"CONDITIONAL",source:"د. أنس أبو شادي + قرارات المجامع الفقهية + فتاوى معاصرة",tags:["كحول","خنزير","جيلاتين","أدوية","لقاحات","محرم","ضرورة"]},{id:"prayer_024_2025",category:_.PRAYER_PURITY,title:"المسح على الخفين/الجوارب",question:"ما حكم المسح على الشراب (الجوارب)؟",medical_context:"wudu, socks, wiping, وضوء",ruling:`الحكم الشرعي:
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
جائز المسح على الخفين والجوارب بشروطها (لبس على طهارة، سترة، طهارة)، ومدته يوم وليلة للمقيم وثلاثة أيام للمسافر. وهذا تيسير من الشريعة ورفع للحرج.`,verdict:"PERMITTED",source:"جمهور الفقهاء (الحنفية، المالكية، الشافعية، الحنابلة)",tags:["وضوء","مسح","جوارب","خفين","طهارة"]},{id:"prayer_025_2025",category:_.PRAYER_PURITY,title:"قراءة الحائض للقرآن",question:"هل يجوز للحائض قراءة القرآن (للطالبة/المعلمة الطبيبة)؟",medical_context:"menstruation, quran, reading, حيض، قرآن",ruling:`المشكلة الطبية والشرعية:
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
- التيسير: استخدام التقنيات الحديثة (شاشات، تطبيقات) بدل مس المصحف`,verdict:"CONDITIONAL",source:"المذهب المالكي + بعض الفقهاء المعاصرين + ابن عثيمين",tags:["حيض","قرآن","تعليم","قراءة","مصحف","طهارة"]},{id:"prayer_026_2025",category:_.PRAYER_PURITY,title:"قصر وجمع الصلاة",question:"متى يقصر المسافر الصلاة أو يجمعها؟ وللطبيب أثناء عمل جراحي طويل؟",medical_context:"travel, prayer, shortening, journey, جمع، قصر، صلاة",ruling:`تعريفات مهمة:

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
- البديل: القضاء في أول فرصة`,verdict:"PERMITTED",source:"صحيح مسلم + ابن تيمية + الفقه الإسلامي المعاصر",tags:["سفر","صلاة","جمع","قصر","عملية","جراحة"]},{id:"prayer_027_2025",category:_.PRAYER_PURITY,title:"زكاة الراتب والمهن الحرة",question:"كيف يخرج الطبيب زكاة عيادته أو راتبه؟",medical_context:"zakat, salary, wealth, income, زكاة، دخل",ruling:`تعريف الزكاة في المهن:
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
- الاستحقاق: الفقراء والمساكين والأعمال الخيرية الإسلامية`,verdict:"CONDITIONAL",source:"فقه الزكاة + ابن قدامة + الشيخ ابن عثيمين",tags:["زكاة","مال","نصاب","دخل","راتب","عيادة"]},{id:"prayer_028_2025",category:_.PRAYER_PURITY,title:"المسح على الحجاب والخمار أثناء الوضوء",question:"هل يجوز المسح على الحجاب والخمار بدلاً من غسل الرأس عند الوضوء؟",medical_context:"طهارة، وضوء، حجاب، خمار، مسح الرأس، ضرورة، مشقة",ruling:`الإطار الفقهي للمسح على الرأس:
الأصل في الوضوء هو غسل أعضاء محددة أو مسحها، ومنها الرأس، لقوله تعالى: ﴿وَامْسَحُوا بِرُءُوسِكُمْ﴾. وقد اختلف الفقهاء في القدر المجزئ من المسح، وفي حكم المسح على الحائل (الحجاب). تؤكد الفتاوى الصادرة عن دار الإفتاء المصرية أن التيسير في هذه المسألة يعتمد على الأخذ بالمذاهب التي تكتفي بمسح "البعض" وليس "الكل". ففي المذهب الشافعي، يكفي مسح جزء يسير من الرأس، ولو شعرة واحدة أو جزءاً يسيراً من البشرة في حدود الرأس.

التطبيق العملي:
الطبيبة التي تجد مشقة في خلع الحجاب بالكامل، خاصة إذا كانت ترتدي زياً معقداً أو كانت في مكان مكشوف، يجوز لها اتباع الخطوات التالية:
1. لا يشترط خلع الحجاب بالكامل.
2. يكفي أن تبل الطبيبة أصبعها بالماء وتمرره من تحت الحجاب لتلمس أي جزء من منابت الشعر (مقدمة الرأس أو جانبيه).
3. بهذا الفعل يتحقق الفرض الشرعي وتصح الطهارة، وهذا هو المخرج الفقهي الذي يرفع الحرج والمشقة عن الطبيبات.

المسح على الحجاب نفسه (من الخارج) لا يجوز عند الجمهور إلا في حالات الضرورة القصوى أو البرد الشديد قياساً على العمامة، ولكن الفتوى الأحوط والأكثر استقراراً في المؤسسات المصرية هي مسح جزء من الشعر ولو يسيراً من تحت الحجاب، وهو أمر ممكن وميسور في أغلب الأحوال.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / مركز الأزهر العالمي للفتوى",tags:["طهارة","وضوء","حجاب","خمار","مسح"]},{id:"prayer_029_2025",category:_.PRAYER_PURITY,title:"الوضوء مع المستحضرات الطبية (واقي الشمس والمرطبات)",question:"هل واقي الشمس والمرطبات تمنع وصول الماء في الوضوء وتبطله؟",medical_context:"طهارة، وضوء، واقي شمس، sunblock، مرطب، كريم، جرم، طبقة عازلة",ruling:`معيار "الطبقة العازلة":
الحكم الفقهي في هذه المسألة يدور وجوداً وعدماً مع "وصول الماء للبشرة". وقد فصلت دار الإفتاء المصرية والأزهر في طبيعة هذه المواد:

المواد الممتصة (Absorbed):
أغلب الكريمات الحديثة، بما فيها واقي الشمس ومرطبات اليدين، صممت لتمتصها البشرة وتتغلغل في المسام. هذه المواد لا تشكل "جِرماً" (أي جسماً مادياً مستقلاً كالشمع أو البلاستيك) يمنع وصول الماء. وبناءً عليه، فإن الوضوء بوجودها صحيح ولا يجب إزالتها، لأن الماء يصل إلى البشرة ويتفاعل معها.

المواد العازلة (Waterproof Films):
إذا كان المستحضر يشكل طبقة شمعية سميكة أو قشرة (كطلاء الأظافر التقليدي أو بعض أنواع واقي الشمس الفيزيائي الثقيل جداً) بحيث لو كشطته لخرجت مادة، فهذا يمنع وصول الماء ويبطل الوضوء، ويجب إزالته قبل الشروع في الطهارة.

طهارة المكونات:
يشترط في هذه المستحضرات أن تكون مصنعة من مواد طاهرة (خالية من شحوم الخنزير أو النجاسات)، وهو الغالب في المستحضرات الطبية المرخصة في الدول الإسلامية، ولكن يجب التحقق إن وجدت شبهة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / الأزهر الشريف",tags:["طهارة","وضوء","واقي شمس","مرطب","كريم"]},{id:"prayer_030_2025",category:_.PRAYER_PURITY,title:"حكم تلوث ملابس العمل بالدم أثناء الصلاة",question:"ما حكم الصلاة بملابس عليها دماء من المريض أو من إصابة بسيطة؟",medical_context:"طهارة، نجاسة، دم، صلاة، ملابس، سكراب، جراحة، معفو عنه",ruling:`حكم الدم اليسير (المعفو عنه):
الدم نجس عند جماهير الفقهاء، ولكن الشريعة الإسلامية فرقت بين "الكثير الفاحش" و"القليل اليسير"، خاصة لمن يمارس مهنة يشق فيها التحرز منه كالجزار والطبيب.

دم الإنسان نفسه:
إذا جُرحت الطبيبة نفسها وخرج منها دم يسير (كجرح إبرة أو مشرط)، فإن هذا الدم لا يبطل الصلاة عند جماهير الفقهاء، حتى الحنفية الذين يرون نقض الوضوء بالدم يشترطون أن يكون "سائلاً" (أي تدفق عن موضعه). أما النقاط البسيطة التي تلوث الثوب فلا تضر، وقد كان الصحابة رضي الله عنهم يصلون في جراحاتهم.

دم الغير (المريض):
بالنسبة لدماء المرضى التي تصيب ثوب الطبيبة، يُعفى عن "اليسير" منها للمشقة.

معيار اليسير:
يُقدر الفقهاء "اليسير المعفو عنه" بمساحة "الدرهم البغلي" (عملة معدنية قديمة). وبالقياس المعاصر، إذا كانت بقعة الدم أو النجاسة أقل من مساحة مقعر الكف (أو العملة المعدنية المتوسطة)، ولا تجتمع لتشكل مساحة كبيرة، فهي معفو عنها وتصح الصلاة بهذه الملابس دون غسلها، دفعاً للحرج.

الصلاة بملابس العمليات:
أفتى أمين الفتوى بدار الإفتاء بجواز صلاة الطبيب الجراح بملابسه التي عليها دماء بسيطة ناتجة عن العمليات إذا شق عليه تغييرها، استناداً لقاعدة "المشقة تجلب التيسير" وأثر الصحابة، مع التأكيد على أن الأصل هو الطهارة الكاملة إن تيسرت.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / أمانة الفتوى",tags:["طهارة","صلاة","دم","ملابس","معفو عنه"]},{id:"prayer_031_2025",category:_.WOMEN_PREGNANCY,title:"الفرق بين الحيض والاستحاضة (التمييز الفقهي الطبي)",question:"كيف أفرق بين الحيض والاستحاضة؟ وما الأحكام المترتبة على كل منهما؟",medical_context:"حيض، استحاضة، دورة شهرية، نزيف مرضي، دم، صلاة، صيام",ruling:`الفرق بين الحيض والاستحاضة:
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
4. في حالة الاتصال: إذا اتصل دم الحيض بدم الاستحاضة، تعتمد المرأة على "عادتها القديمة" (عدد الأيام التي كانت تحيضها سابقاً) أو "التمييز" (اختلاف لون ورائحة الدم) لتحدد أيام الحيض التي تتوقف فيها عن الصلاة، وما عداها تغتسل مرة واحدة ثم تعامل معاملة المستحاضة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / الأزهر الشريف",tags:["حيض","استحاضة","دورة شهرية","نزيف","صلاة"]},{id:"prayer_032_2025",category:_.PRAYER_PURITY,title:"جمع الصلاة بسبب الدراسة والعمل الطبي",question:"هل يجوز جمع الصلوات (الظهر مع العصر، المغرب مع العشاء) بسبب ضغط الدراسة أو العمليات الجراحية؟",medical_context:"صلاة، جمع، تقديم، تأخير، ضرورة، عمل، دراسة، محاضرات",ruling:`حكم الجمع:
أجازت دار الإفتاء المصرية ومركز الأزهر العالمي للفتوى الجمع بين الصلاتين (جمع تقديم أو تأخير) دون قصر (أي تصليهما كاملتين 4 ركعات) في حالات الضرورة القصوى التي لا يمكن معها ترك العمل أو المحاضرة.

الدليل الشرعي:
حديث ابن عباس في صحيح مسلم: "جمع رسول الله ﷺ بين الظهر والعصر، وبين المغرب والعشاء بالمدينة من غير خوف ولا مطر". سُئل ابن عباس: لِمَ فعل ذلك؟ قال: "أراد ألا يُحرج أمته".

التطبيق على الواقع الطبي والدراسي:

الجراحون وأطباء الطوارئ:
الطبيب الذي يدخل عملية جراحية طويلة تستغرق وقتاً يخرج به وقت الصلاة الثانية، يجوز له الجمع اتفاقاً.

الطلاب:
الطالبة التي لديها امتحان طويل متصل، أو محاضرة إلزامية يمنع النظام الخروج منها، يجوز لها الجمع في هذه الأيام بصفة استثنائية، شريطة ألا يتخذ ذلك "عادة دائمة" في كل الأيام (أي يقتصر على أيام الضغط الشديد والضرورة).

ضوابط الجمع:
أكدت الفتاوى أن الجمع رخصة لرفع الحرج، ولكن لا يجوز تحت أي ظرف "جمع الصلوات الخمس" كلها في آخر اليوم (كما يفعل البعض بصلاتها "قضاء" قبل النوم)، فهذا محرم وتضييع للصلاة وإخراج لها عن وقتها بلا عذر مقبول شرعاً. الجمع يكون حصراً بين (الظهر والعصر) وبين (المغرب والعشاء).`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / مركز الأزهر العالمي للفتوى",tags:["صلاة","جمع","ضرورة","عمل","دراسة"]},{id:"prayer_033_2025",category:_.WOMEN_PREGNANCY,title:"صلاة المرأة في الأماكن المفتوحة والعامة",question:"هل تصح صلاة المرأة في مكان عام يراها فيه الرجال (كطرقات المستشفى)؟",medical_context:"صلاة، أماكن عامة، ستر، خصوصية، مستشفى، مرور رجال",ruling:`صلاة المرأة في الأماكن المفتوحة:
الحكم: صلاة المرأة في مكان عام يراها فيه الرجال (كطرقة المستشفى أو ركن في قاعة المحاضرات) صحيحة وتبرأ بها الذمة، ما دامت ساترة لجسدها بالكامل (ما عدا الوجه والكفين).

الأفضلية والستر:
الأفضل للمرأة أن تبحث عن مكان مستتر (ساتر، جدار، زاوية، خلف عمود) ليكون أستر لها وأبعد عن الأنظار، تحقيقاً لقوله ﷺ: "صلاة المرأة في بيتها خير من صلاتها في حجرتها". ولكن إن لم تجد وخشيت خروج الوقت، وجب عليها الصلاة في أي مكان طاهر ولا إثم عليها.

مرور الرجال أثناء الصلاة:
رؤية الرجال الأجانب للمرأة أثناء صلاتها لا تبطل الصلاة. وقد نصحت الفتاوى بأن تكون حركاتها (الركوع والسجود) محتشمة، ويمكنها أن تختار زاوية لا يكون فيها مرور مكثف خلفها، وإن مرت الرجال أمامها فلا يضرها ذلك في صحة الصلاة.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية / بوابة الأزهر الإلكترونية",tags:["صلاة","نساء","أماكن عامة","ستر","خصوصية"]},{id:"prayer_034_2025",category:_.MISCELLANEOUS,title:"صلاة الفرض في المواصلات (القطار والميكروباص)",question:"هل يجوز صلاة الفرض (جالسة وبدون قيام) في وسيلة المواصلات عند خشية خروج الوقت؟",medical_context:"صلاة، فرض، قيام، جالسة، مواصلات، قطار، ميكروباص، وقت",ruling:`صلاة الفرض جالساً:
الأصل في صلاة الفرض (الظهر، العصر، المغرب، العشاء) وجوب "القيام" واستقبال القبلة كأركان لا تسقط إلا بالعجز.

حالة السعة (القدرة على النزول):
إذا كان يمكن للطالبة النزول من المواصلات للصلاة واللحاق بمركبة أخرى، أو الوصول للمنزل قبل خروج الوقت، أو كانت تنوي جمع الصلاة (جمع تأخير) وستصل قبل خروج وقت الثانية، فلا يجوز لها الصلاة جالسة في المقعد.

حالة الضرورة القصوى (خشية خروج الوقت):
إذا خشيت خروج الوقت تماماً (كأن تغيب شمس اليوم ولم تصل العصر) ولا تستطيع النزول (خوفاً على النفس، أو لعدم أمان الطريق، أو لانقطاع المواصلات)، فهنا تصلّي على حالها (جالسة) في وسيلة المواصلات، وتومئ بالركوع والسجود، وصلاتها صحيحة للحفاظ على "حرمة الوقت". وهناك قول بوجوب الإعادة وقول بعدمه، والأحوط القضاء عند الوصول لزوال العذر، ولكن الأهم ألا تترك الصلاة حتى يخرج وقتها بالكلية.

صلاة النافلة:
أما صلاة النوافل والسنن والورد القرآني، فتجوز في المواصلات جالسة باتجاه السير بلا حرج، تيسيراً لاستغلال الوقت، اقتداءً بالنبي ﷺ الذي كان يسبح على الراحلة حيثما توجهت.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","فرض","مواصلات","جالسة","ضرورة"]},{id:"misc_004_2025",category:_.MISCELLANEOUS,title:"صلاة المرأة بالسكراب والبنطال",question:"هل تصح الصلاة بالسكراب (بنطال وقميص طبي) دون ارتداء إسدال أو عباءة فوقه؟",medical_context:"صلاة، ملابس، سكراب، بنطال، ستر، عورة، قدمين",ruling:`شروط لباس المرأة في الصلاة:
يشترط في لباس الصلاة ستر العورة (جميع البدن عدا الوجه والكفين، والخلاف في القدمين)، وأن يكون "ساتراً" لا يشف (لا يظهر لون البشرة) ولا يصف (لا يحدد حجم العورة المغلظة تحديداً فاحشاً).

الصلاة بالبنطال:
البنطال الواسع: إذا كان السكراب واسعاً فضفاضاً لا يصف تفاصيل الجسد (لا يحدد تقاسيم العورة)، فالصلاة به صحيحة ولا حرج فيها.

البنطال الضيق: إذا كان البنطال ضيقاً يبرز المفاتن، فالصلاة به مكروهة عند البعض وباطلة عند من يرى عدم تحقق الستر الكامل، ولكن دار الإفتاء المصرية تفتي بأنها تصح مع الكراهة إذا كان البنطال ساتراً للون البشرة (سميكاً)، لأن الستر قد تحقق من حيث تغطية العورة، والتشكيل (التجسيم) حرام ولكنه لا يبطل الصلاة. ومع ذلك، توجه الفتوى بأن الأفضل ارتداء "إسدال" أو عباءة فوقه أثناء الصلاة للخروج من الخلاف ولكمال الأدب مع الله.

ستر القدمين:
عند جمهور الفقهاء يجب ستر القدمين في الصلاة. أما عند السادة الحنفية، فيجوز كشف القدمين للمرأة في الصلاة. وبناءً عليه، فإن صلاة الطبيبة بالسكراب القصير قليلاً الذي قد يظهر وجه القدم صحيحة عند الحنفية، ويمكن للطبيبات تقليد هذا الرأي رفعاً للحرج الناتج عن حركة السكراب أثناء الركوع والسجود.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","ملابس","سكراب","بنطال","ستر"]},{id:"misc_005_2025",category:_.MISCELLANEOUS,title:"حكم الفطر في رمضان بسبب الامتحانات",question:"هل يجوز للطالبة الفطر في رمضان بسبب امتحانات شاقة ومرهقة؟",medical_context:"صيام، صوم، رمضان، امتحانات، ضرر صحي، تركيز ذهني",ruling:`القاعدة: الامتحان ليس عذراً مستقلاً:
أكدت الفتاوى بشكل قاطع أن الامتحان في حد ذاته ليس عذراً مبيحاً للفطر. فالأصل وجوب الصوم على كل مكلف صحيح مقيم.

حالات الضرورة المبيحة للفطر:
يجوز للطالبة الفطر في الحالات التالية فقط، وعليها القضاء بعد رمضان:

1. الضرر الصحي الحقيقي: إذا خافت على نفسها المرض أو الإغماء بسبب الصوم مع الإجهاد الذهني والحرارة، وكان ذلك بناءً على تجربة سابقة أو إخبار طبيب.

2. الرسوب المؤكد: إذا غلب على ظنها أن الصوم سيُفقدها التركيز لدرجة تؤدي لرسوبها في امتحان مصيري لا يعوض، وتتضرر حياتها ومستقبلها بذلك تضرراً بالغاً.

شرط النية:
يجب أن تبيت نية الصوم وتصبح صائمة، فإذا شعرت أثناء النهار بالمشقة الشديدة غير المحتملة (التي تخرج عن المعتاد)، جاز لها الفطر حينئذ لرفع الضرر. لا يجوز الفطر ابتداءً من الليل لمجرد التوقع.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / شيخ الأزهر",tags:["صيام","رمضان","امتحانات","ضرر","فطر"]},{id:"misc_006_2025",category:_.WOMEN_PREGNANCY,title:"تأخير الدورة الشهرية دوائياً في رمضان والعمرة",question:"هل يجوز تناول عقاقير لمنع نزول الحيض لصيام رمضان كاملاً أو لأداء العمرة؟",medical_context:"صيام، رمضان، حيض، دورة شهرية، حبوب هرمونية، Hormonal Pills، عمرة",ruling:`الحكم الشرعي:
أفتت دار الإفتاء ومركز الأزهر بجواز ذلك شرعاً، ولا إثم فيه، بشرط واحد وهو أمان العقار طبياً؛ أي أن يقرر الأطباء أن ذلك لا يضر بصحة المرأة ولا يسبب لها مضاعفات خطيرة، عملاً بقاعدة "لا ضرر ولا ضرار".

الأفضلية والاختيار:
رغم الجواز، أشارت الفتاوى إلى أن الأولى للمرأة ترك الطبيعة كما خلقها الله، والرضا بما كتبه الله على بنات آدم من الحيض والفطر، فإن في ذلك أجراً لامتثالها لأمر الله بالفطر كما تمتثل لأمره بالصوم. ولكن إذا رغبت الطالبة في الصوم الكامل مع الناس، فلا حرج عليها وصومها صحيح ومقبول.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / مركز الأزهر العالمي للفتوى",tags:["صيام","حيض","دورة","حبوب","عمرة"]},{id:"misc_007_2025",category:_.WOMEN_PREGNANCY,title:"الفحص المهبلي وأثره على الصيام والوضوء",question:"هل الكشف المهبلي (بالأصبع أو السونار) يفسد الصوم؟ وهل ينتقض وضوء الطبيبة؟",medical_context:"فحص مهبلي، PV، كشف، صيام، وضوء، صائمة، طبيبة",ruling:`خلاف الفقهاء (مدخل للتيسير):

رأي الجمهور:
يرى جمهور الفقهاء أن كل ما دخل إلى الجوف (والجوف يشمل الرحم والفرج عند بعضهم) يفسد الصوم. وبناء عليه، فإن الكشف المهبلي يفطر الصائمة عندهم.

رأي السادة المالكية:
يفرق المالكية بين "المائع" و"الجامد". فلا يفطر عندهم إلا ما كان "مائعاً" (سائلاً) أو وصل للمعدة (الجهاز الهضمي). أما إدخال شيء "جامد" (كالآلات الطبية، الأصبع، المنظار الجاف) في الفرج، أو حتى الاحتقان الجامد، لا يفسد الصوم عندهم.

التوجيه الطبي والشرعي:
الأفضل تأخير الكشف النسائي لما بعد المغرب خروجاً من الخلاف واحتياطاً للعبادة. إذا اضطرت الطالبة (كمريضة) أو الطبيبة (للتدريب أو العمل) لإجراء الكشف نهاراً، فلتقلد مذهب المالكية وصوم المريضة صحيح ولا قضاء عليها، وهذا هو المخرج الشرعي المعتمد في الفتوى لرفع الحرج عن القطاع الطبي النسائي.

وضوء الطبيبة التي تجري الكشف:
استخدام القفازات (Gloves): المعتاد طبياً ارتداء القفازات. وفي هذه الحالة، لا تلمس الطبيبة العورة مباشرة، وبذلك لا ينتقض وضوؤها باتفاق، لأن وجود الحائل يمنع النقض، حتى عند من يقول بأن لمس العورة ينقض الوضوء.

بدون حائل: لو لمست العورة مباشرة، فالجمهور على النقض، والحنفية على عدم النقض. والمعتمد في الفتوى للطبيبات هو صحة الوضوء مع القفاز.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / أمين الفتوى",tags:["فحص","صيام","وضوء","طبيبة","مريضة"]},{id:"misc_008_2025",category:_.WOMEN_PREGNANCY,title:"قراءة القرآن والمصحف أثناء الحيض",question:"هل يجوز للحائض قراءة القرآن من المصحف أو الموبايل؟ وما حكم مس المصحف؟",medical_context:"حيض، حائض، قرآن، تلاوة، مصحف، موبايل، تطبيق",ruling:`القراءة للحائض (دون مس):

قراءة القرآن (باللسان):
رأي الجمهور: يحرم على الحائض قراءة القرآن (التلفظ بالآيات) بنية التلاوة، سواء من المصحف أو عن ظهر قلب.

رأي السادة المالكية (وجه للتيسير):
يجوز للحائض قراءة القرآن (دون مس المصحف الورقي) خاصة إذا كانت "معلمة أو متعلمة" أو خافت نسيان محفوظها، أو كانت طالبة لديها امتحان يتطلب التلاوة. هذا الرأي هو المعتمد للفتوى لطالبات المدارس والكليات اللاتي لديهن اختبارات شفوية أو "مقرر قرآني" لرفع الحرج وضمان عدم ضياع العلم.

مس المصحف الورقي:
يحرم مس المصحف الورقي للحائض عند الجمهور. ويجوز فقط في حالات الضرورة القصوى للتعلم عند بعض المالكية، أو باستخدام حائل (قفاز أو قلم للتقليب) عند البعض، ولكن التضييق فيه شديد.

القراءة من الهاتف (الموبايل) - الحل الأمثل والمعاصر:
هذا هو الحل الأمثل والمعاصر الذي يجمع بين الحفاظ على الورد والالتزام بالشرع.

الحكم: الهاتف المحمول الذي عليه تطبيق قرآن لا يأخذ حكم المصحف؛ لأنه عبارة عن ذبذبات ضوئية (Pixels) وليس حبراً وورقاً، وفيه تطبيقات أخرى. المصحف هو ما تمحض للقرآن (ورقاً وكتابة).

النتيجة: يجوز للحائض مس الهاتف وتقليب صفحات التطبيق وقراءة القرآن منه (بالعين، أو باللسان أخذاً برأي المالكية) بلا كراهة، وهو البديل الشرعي الآمن للمراجعة والحفظ في فترات العذر الشرعي.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / بوابة الأزهر",tags:["حيض","قرآن","تلاوة","مصحف","موبايل"]},{id:"misc_009_2025",category:_.MISCELLANEOUS,title:"حكم زكاة عيادات الأسنان",question:"ما حكم الزكاة في عيادات الأسنان؟ وما كيفيتها؟ وهل تجب الزكاة على العيادة بمشتملاتها؟ وكيف تُحسب؟",medical_context:"زكاة، عيادات الأسنان، طبيب أسنان، أدوات، معدات، مواد علاجية، حشو، تركيبات، عروض تجارة، نصاب، حول، 2.5%",ruling:`الجواب:
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

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة أ. د/ نظير محمد عياد (فتوى رقم 8565 بتاريخ 06 فبراير 2025)",tags:["زكاة","عيادة أسنان","طبيب أسنان","عروض تجارة","نصاب","حول","ذهب","معدات","مواد علاجية"]},{id:"misc_010_2025",category:_.MISCELLANEOUS,title:"حكم إجراء عملية طبية بالتقسيط عن طريق البنك",question:"ما حكم التقسيط عن طريق البنك لإجراء عملية (مثل الليزك) مع زيادة مقابل الأجل؟",medical_context:"تقسيط، بنك، تمويل، عملية، ليزك، تصحيح الإبصار، مرابحة، خدمات طبية، زيادة مقابل الأجل، شيك، مركز علاج",ruling:`الجواب:
العملية محلُّ السؤال هي نوعٌ من الخدمات المحدَّدة في قدرها وإجراءاتها، فلها حكم السلعة في إمكان التعاقد عليها وتقديمها بثمن حالٍّ أو مُقَسَّط، بمُقَدَّم أو بغير مقدم، وبزيادة في السعر مع التقسيط أو بغير زيادة، ويجوز عندئذٍ دخول جهة ثالثة أو أكثر للتمويل، ودفع الجهة المُموّلة للمال حالًّا وتحصيله من المستفيد من العملية بزيادة في الثمن مقابل الأجل لا مانع منه شرعًا؛ لتوسط الخدمات المعلومة القدر والوقت القائمة مقام السلعة حينئذ.

التفاصيل....
العملية محلُّ السؤال، والتي تكون تكاليفُها الكاملةُ محددةً سلفًا وواضحةً وضوحًا تامًّا لا غموضَ فيه ولا لبْسَ ويتم الاتفاق فيها بوضوح بين الطرفين: الجهةِ المتعهدةِ بـالعملية –المركز- مِن جهة، والمريض الراغب في إجراء العملية من جهة أخرى، لا تَعْدُو أن تكون نوعًا من الخدمات التي يجوز التعاقد عليها شرعًا.

ومن المقرَّر شرعًا أنه يصحُّ البيعُ بثمنٍ حالٍّ وبثمن مؤجل إلى أجلٍ معلوم، والزيادة في الثمن نظير الأجل المعلوم جائزةٌ شرعًا على ما ذهب إليه جمهور الفقهاء؛ لأنَّها مِن قبيل المرابحة، وهي نوعٌ من أنواع البيوع الجائزة شرعًا التي يجوز فيها اشتراطُ الزيادة في الثمن في مقابلة الأجل؛ لأن الأجلَ وإن لم يكن مالًا حقيقة إلا أنه في باب المرابحة يُزاد في الثمن لأجله إذا ذُكِر الأجل المعلوم في مقابلة زيادة الثمن؛ قصدًا لحصول التراضي بين الطرفين على ذلك، ولعدم وجود موجب للمنع، ولحاجة الناس الماسَّة إليه بائعينَ كانوا أو مشترين.

ولا يُعَدُّ ذلك مِن قبيل الربا؛ لأنَّ القاعدة الشرعية "أنه إذا توسَّطت السلعة فلا ربا"، والخدمات التي يُتَعاقَد عليها -مثل العملية محددة التكاليف محل السؤال- هي في حكم السلعة، ويشترط لذلك أن تكون التفاصيل المالية والزمانية واضحةً ومحددةً سلفًا تحديدًا يماثل ما يشترط في عقد السَّلَم الذي اشترط فيه الفقهاء تحديد مكان وزمان تسليم السلعة المتفق على توريدها رغم عدم وجودها عند إجراء العقد، وهو بيعُ معدومٍ عند العقد، والأصل فيه المنع، ولكن الشرع الشريف أباحه للحاجة، ودفعًا للضرر؛ أي مراعاةً لحاجة بعض المكلَّفين إلى ضمان وجود السلعة في وقت معين بسعر معين، وحاجة آخرين إلى المال لاستمرار أعمالهم واستغلال إمكاناتهم المعطلة، فهنا أيضًا يكون هذا العقد محققًا لمصلحة الأطراف كلها: المركز، والمريض، والجهة الممولة –إن وُجِدَت- بدون أن يقع غَرَرٌ ولا غَبنٌ ولا ما يُسَبِّب نزاعًا لأطراف العقد، وهو ما تَتَغَيَّاه الشريعة المطهرة وتَتَوَخَّاه؛ حيث إنه هنا أيضًا قد يحتاج المريض لإجراء العملية احتياجًا حالًّا، وقد لا يكون معه مِن المال ما يساعده على تغطية تكاليفها الكاملة، وقد لا يُتاح للمكان الذي سيقوم فيه بـالعملية القبول بتأجيل دفعِ تكاليفِها أو تقسيطِها عليه، فيكون دخولُ جهةٍ ثالثة مموِّلة أمرًا مُحَقِّقًا لصالح الطرفين، ولو كان بزيادة على الأجر الحال للعملية، فيشترط حينئذ أن تكون كل أقساط سداد ثمن العملية محددة مقدارًا وزمانًا تحديدًا واضحًا عند إبرام العقد، ولا يجوز حينئذٍ الزيادة في المال المُقَسّط على المريض إذا تأخَّر لأسباب قاهرة عن سداد الأقساط، كمَا لا يَحِلُّ للمريض أن يتوانى عن سداد الأقساط الملتَزَمة في ذمته بغير سبب قهريّ.

وبناء على ذلك: فهذه العملية نوعٌ من الخدمات المحددة في قدرها وإجراءاتها، فلها حكم السلعة في إمكان التعاقد عليها وتقديمها بثمن حالٍّ أو مُقَسَّط، بمُقَدَّم أو بغير مقدم، وبزيادة في السعر مع التقسيط أو بغير زيادة، ويجوز عندئذٍ دخول جهة ثالثة أو أكثر للتمويل أو الوكالة أو السمسرة، ودفع الجهة المموّلة للمال حالًّا وتحصيله من المستفيد من العملية بزيادة في الثمن مقابل الأجل لا مانع منه شرعًا؛ لتوسط الخدمات المعلومة القدر والوقت القائمة مقام السلعة حينئذ.

والله سبحانه وتعالى أعلم`,verdict:"PERMITTED",source:"فتاوى دار الإفتاء المصرية - فضيلة الأستاذ الدكتور علي جمعة (فتوى رقم 6821 بتاريخ 25 فبراير 2008)",tags:["تمويل","تقسيط","بنك","عمليات","ليزك","مرابحة","خدمات","طب"]},{id:"prayer_035_2025",category:_.PRAYER_PURITY,title:"الغسيل الكلوي البيرتوني وأثره على طهارة المريض",question:"هل الغسيل الكلوي البريتوني ينقض الوضوء ويؤثر على صحة الطهارة؟",medical_context:"غسيل بريتوني، غسيل كلوي، فشل كلوي، قسطرة، أنبوب، كيس خارجي، فضلات، بول، ثقب البطن، وضوء، طهارة، انتقاض الوضوء",ruling:`الجواب:
الغسيل الكلوي البريتوني لا ينقض الوضوء ولا يؤثر على صحة الطهارة، وذلك لأن الوضوء يتطلب إزالة الحدث، والغسيل البريتوني لا يُعتبر حدثًا في حد ذاته، بل هو إجراء طبي يُستخدم لتنقية الدم من السموم والفضلات. لذا، يمكن للمريض أن يتوضأ ويصلي دون أن يؤثر عليه الغسيل البريتوني.

والله سبحانه وتعالى أعلم`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 8199 بتاريخ 13 ديسمبر 2023)",tags:["طهارة","وضوء","غسيل كلوي","غسيل بريتوني","فشل كلوي","قسطرة","مريض","مشقة","تيسير"]},{id:"prayer_036_2025",category:_.PRAYER_PURITY,title:"وضوء الطبيب إذا مس عورة المريض أثناء الكشف",question:"هل ينتقض وضوء الطبيب إذا لمس عورة المريض أثناء الكشف بغرض العلاج؟",medical_context:"وضوء، طهارة، طبيب، كشف طبي، لمس العورة، عورة مغلظة، بدون حائل، قفاز، خلاف فقهي، حنفية، شافعية، مالكية، حنابلة",ruling:`

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
والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 4733 بتاريخ 27 فبراير 2019)",tags:["طهارة","وضوء","طبيب","لمس العورة","خلاف فقهي","حنفية","كشف طبي"]},{id:"obgyn_012_2025",category:_.WOMEN_PREGNANCY,title:"حكم سفر المرأة بدون محرم إذا أمنت الطريق",question:"هل يجوز للمرأة السفر بدون محرم إذا أمنت الطريق وكانت الرفقة مأمونة؟",medical_context:"سفر، امرأة، بدون محرم، أمان الطريق، رفقة مأمونة، نساء ثقات، حج الفريضة، مضايقات، فقه مالكي، فقه شافعي",ruling:`
الجواب:
يجوز للمرأة أن تسافر بدون مَحرَم بشرط اطمئنانها على الأمان في سفرها وإقامتها وعودتها، وعدم تعرضها لمضايقات في شخصها أو دِينها.

فقد ورد عنه صلى الله عليه وآله وسلم فيما رواه البخاري وغيره عن عَدِيّ بن حاتم رضي الله عنه أنه قال له: «فَإنْ طَالَتْ بِكَ حَياةٌ لَتَرَيَنَّ الظَّعِينةَ؛ أي: المسافرة تَرتَحِلُ مِنَ الحِيرةِ حَتَّى تَطُوفَ بالكَعْبَةِ لَا تَخافُ أَحَدًا إلَّا اللهَ»، وفي رواية الإمام أحمد: «فَوَالَّذِي نَفْسِي بيَدِه لَيُتِمَّنَّ اللهُ هَذَا اْلأَمْرَ حَتَّى تَخرُجَ الظَّعِينةُ مِن الحِيرةِ حَتَّى تَطُوفَ بالبَيتِ فِي غَيرِ جِوارِ أَحَدٍ».

فمِن هذا الحديث برواياته أخذ بعض المجتهدين جوازَ سفر المرأة وحدها إذا كانت آمنة، وخصصوا بهذا الحديث الأحاديثَ الأخرى التي تُحَرِّم سفر المرأة وحدها بغير مَحرَم.

وكذلك نرى المالكية والشافعية يجيزون للمرأة السفر بدون محرم إذا كانت مع نساء ثقات أو رفقة مأمونة وكان ذلك في حج الفريضة؛ وقد استدلوا على ذلك بخروج أمهات المؤمنين رضي الله عنهن بعد وفاة رسول الله صلى الله عليه وآله وسلم للحج في عهد عمر رضي الله عنه، وقد أرسل معهن عثمان بن عفان -رضي الله عنه- ليحافظ عليهن.

يقول العلامة الحطّاب المالكي في كتابه "مواهب الجليل شرح مختصر خليل" (2/ 524، ط. دار الفكر): [قَيّد ذلك الباجي بالعدد القليل، ونصه: هذا عندي في الانفراد والعدد اليسير، فأما في القوافل العظيمة فهي عندي كالبلاد، يصح فيها سفرها دون نساء وذوي محارم" انتهى، ونقله عنه في "الإكمال" وقَبِلَه ولم يذكر خلافه، وذكره الزناتي في "شرح الرسالة" على أنه المذهب، فيقيد به كلام المصنف وغيره.

ونص كلام الزناتي: إذا كانت في رفقة مأمونة ذات عَدَد وعُدَدٍ أو جيش مأمون من الغلبة والمحلة العظيمة فلا خلاف في جواز سفرها من غير ذي محرم في جميع الأسفار: الواجب منها والمندوب والمباح، من قول مالك وغيره إذ لا فرق بين ما تقدم ذكره وبين البلد. هكذا ذكره القابسي. انتهى] اهـ. ومما ذكر يُعلم الجواب عن السؤال.

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة الأستاذ الدكتور علي جمعة (فتوى رقم 7030 بتاريخ 30 يونيو 2009)",tags:["نساء","سفر","محرم","أمان","رفقة مأمونة","حج"]},{id:"ethics_008_2025",category:_.ETHICS,title:"بيان ما يُفعل في الجزء المأخوذ من الميت بغرض الدراسة",question:"ما حكم تكفين ودفن الجزء المأخوذ من الميت (عظام بشرية) بعد انتهاء طالب الطب من الدراسة؟ وهل يجوز إعطاؤه لطالب آخر؟",medical_context:"تشريح، طب، كلية الطب، عظام بشرية، أجزاء من الميت، جثة، تعليم، دراسة، تكفين، دفن، حرمة الميت، نبش القبور، الاتجار بالأعضاء",ruling:`
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

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 8160 بتاريخ 04 ديسمبر 2023)",tags:["أخلاقيات","تشريح","حرمة الميت","عظام","دفن","تكفين","طب","تعليم","اتجار بالأعضاء"]},{id:"misc_011_2025",category:_.MISCELLANEOUS,title:"حكم ممارسة أطباء الامتياز الطب بالأجر قبل إنهاء سنة الامتياز",question:"هل يجوز لطبيب الامتياز أن يمارس الطب بالأجر قبل إنهاء سنة الامتياز إذا ظن أنه صار كفؤًا ولا يضر المرضى؟",medical_context:"طبيب امتياز، سنة الامتياز، عمل بالأجر، ممارسة الطب، تدريب، فروع الباطنة، قانون، نقابة، ترخيص، مسؤولية مهنية، مصلحة عامة",ruling:`
الجواب:
لا يجوز شرعًا لطالب الطب ولا لغيره ممَّن قد يكون أكثرَ ثقافةً وخبرةً وحِنكةً في علم الطب أن يمارس مهنةَ الطب خارج الأُطُر القانونية والآداب النِّقابية وإن رأى في نفسه الكفاءةَ للتطبيب؛ لأن ممارسة هذه المهنة تخضع لضوابط وقوانين يحكمها ويضبطها الصالح العام، والقاعدة الشرعية تقرر أنه: "عند تعارض المصلحة العامة مع المصلحة الخاصة تُقَدَّمُ المصلحةُ العامة".

التفاصيل....
الممارسة المهنية للتطبيب تخضع في ظلِّ المجتمع الحاضر والأوضاع القائمة لضوابط وقواعد وقوانين، الأصل فيها أنها محايدة، وما شُرِعَت ولا قُنِّنَت ضد شخص بعينه أو لصالح شخص بذاته، بل الذي يحكمها ويضبطها هو الصالح العام، والقاعدة الشرعية أنه "عند تعارض المصلحة العامة مع المصلحة الخاصة تقدَّم المصلحة العامة"، والقاعدة الشرعية أيضًا أن "تصرفات الحاكم منوطة بالمصلحة"، وقد يرى الشخص في نفسه الكفاءةَ للتطبيب أو لممارسة الصيدلة أو بناء الأبنية أو غير ذلك من الممارسات التي تتعداه إلى غيره، ولكن رؤية الشخص لنفسه لا يصح أن تكون حاكمة على الآخرين، وأن يجعل الشخصُ الخَلْقَ وأرواحَهم وأجسادَهم محلًّا لتَخَرُّصاته وتَكَهُّناته وآرائه الشخصية، فمِن احترام المخلوقات جمادًا أو حيوانًا ناهيك عن الإنسان الذي قال الله تعالى فيه: ﴿وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ﴾ [الإسراء: 70]، وقال عنه رسول الله صلى الله تعالى عليه وآله وسلم: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ» متفق عليه، وقال فيه في حجة الوداع: «كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ؛ دَمُهُ، وَمَالُهُ، وَعِرْضُهُ» رواه مسلم وغيره - مِن احترام المخلوقات الربانية ألَّا تكون حقلَ تجارب لظنون الواحد منَّا، وإن كانت غالبةً عنده أو راجحةً لَدَيه، بل يجب الرجوع في ذلك إلى الضوابط المهنية الحاكمة على الجميع لصالح الجميع، والأصل فيها أنها تتحرى الوصول إلى أعلى قدْر من المصلحة وارتكاب أقل قدْر من المفسدة، ولكن الشيطان يعبث بصدر ابن آدم؛ فتكبر في عينه مصلحته الشخصية، وتتوارى وتتقازم لديها المصلحة العامَّة، ولو تُرِك الأمر للتقديرات الشخصية والظنون الغالبة لَاستَحَلَّ أقوامٌ دماءَ أقوامٍ وأموالَهم ﴿وَهُمْ يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا﴾ [الكهف: 104].

ومقياس حضارةِ الأمم ورُقِيِّ المجتمعات يُقاس بانضباط الأفراد لصالح المجموع، وانهيار الدول، وانتكاس العَوامِرِ يكون بتَفَلُّتِ الأفرادِ عن المنظومة الاجتماعية والقوانين الحاكمة.
وعليه، فلا يجوز لطالبِ الطب ولا لغيره ممَّن قد يكون أكثرَ ثقافةً وخبرةً وحِنكةً في علم الطب منه أن يمارس المهنة خارج الأُطُرِ القانونية والآداب النِّقابية.

والله سبحانه وتعالى أعلم.`,verdict:"FORBIDDEN",source:"فتاوى دار الإفتاء المصرية - فضيلة الأستاذ الدكتور علي جمعة (فتوى رقم 582 بتاريخ 07 يونيو 2007)",tags:["طب","امتياز","ترخيص","قانون","نقابة","مسؤولية","مهنية"]},{id:"obgyn_008_2025",category:_.WOMEN_PREGNANCY,title:"أحكام النفاس والاستحاضة بعد الولادة",question:"ما هي مدة النفاس بعد الولادة؟ وكيف نفرق بين دم النفاس والاستحاضة والحيض؟ وما الأحكام الشرعية المترتبة على كل منها؟",medical_context:"نفاس، postpartum bleeding، lochia، postpartum bleeding duration، استحاضة، فترة النفاس، صلاة، صيام، عبادات، غسل، طهارة",ruling:`الحمد لله الذي تفضل علينا بشريعة غراء تراعي حالة المرأة المنجبة. هذا الحكم يتعلق بفترة حساسة جداً من حياة المرأة:

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
النفاس حالة خاصة بالمرأة المنجبة، وقد راعت الشريعة ضعفها الصحي، وسمحت لها بترك الصلاة والصيام، كما أوجبت على الزوج احترام هذه الحالة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + مجمع الفقه الإسلامي",tags:["نفاس","نزيف","بعد الولادة","صلاة","صيام","طهارة"]},{id:"obgyn_009_2025",category:_.WOMEN_PREGNANCY,title:"حكم صيام من تنزف طوال رمضان بسبب ورم في الرحم",question:"امرأة لديها ورم في الرحم وتنزف طوال رمضان: هل يعد الدم حيضًا أم استحاضة؟ وكيف تصوم؟",medical_context:"نزيف، bleeding, vaginal bleeding, abnormal uterine bleeding (AUB), uterine tumor, uterine fibroid, leiomyoma, endometrial polyp, uterus, رحم، ورم، fibroid، استحاضة، حيض، menstrual bleeding, menstruation, Ramadan fasting, صيام رمضان",ruling:`
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

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة أ. د/ نظير محمد عياد (فتوى رقم 8563 بتاريخ 02 فبراير 2025)",tags:["نساء","صيام","رمضان","حيض","استحاضة","نزيف"]},{id:"misc_012_2025",category:_.MISCELLANEOUS,title:"ما الذي يجب على الطبيب إذا أخطأ؟ (الضمان والدية)",question:"ما الحكم إذا أخطأ الطبيب في التشخيص أو أجرى جراحة أدت لعاهة مستديمة أو وفاة؟ ومتى يضمن الطبيب؟",medical_context:"خطأ طبي، malpractice, medical error, تشخيص خاطئ، جراحة، عاهة مستديمة، وفاة، ضمان، دية، قاضٍ، مسؤولية، إهمال، تعدي حدود المهنة",ruling:`ما الذي يجب على الطبيب إذا أخطأ؟
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

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى فضيلة الدكتور محمد سيد طنطاوي (فتوى رقم 621 بتاريخ 12 أغسطس 1987)",tags:["خطأ طبي","مسؤولية","ضمان","دية"]},{id:"misc_013_2025",category:_.MISCELLANEOUS,title:"بيان بعض أحكام ميراث التوائم الملتصقة",question:"ما حكم ميراث التوائم الملتصقة باعتبارهم وارثين أو موروثين؟ وهل يعاملون كشخص واحد أم شخصين؟ وما أثر ذلك في الحجب؟",medical_context:"ميراث، ورثة، حجب، تركة، توائم ملتصقة، conjoined twins, siamese twins, parasitic twin, incomplete twin, shared organs, heart, brain, فصل التوائم",ruling:`بيان بعض أحكام ميراث التوائم الملتصقة
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

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 8427 بتاريخ 10 فبراير 2024)",tags:["ميراث","توائم","توائم ملتصقة","حجب","تركة","طب"]},{id:"misc_014_2025",category:_.MISCELLANEOUS,title:"مدى وجوب إخبار مَن يتعالج من مرض نفسي مخطوبته بذلك",question:"هل يجب على من يتعالج من مرض نفسي أن يخبر مخطوبته؟ وما الضابط في ذلك؟",medical_context:"مرض نفسي، psychiatric illness, mental health, psychotherapy, psychiatrist, medication, follow-up, خطوبة، زواج، عيوب النكاح، تدليس، غش، فسخ، حقوق زوجية، فصام schizophrenia, paranoia, psychosis, bipolar, mania, OCD",ruling:`الجواب:
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

والله سبحانه وتعالى أعلم`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 6875 بتاريخ 09 أغسطس 2022)",tags:["زواج","خطوبة","مرض نفسي","تدليس","حقوق زوجية","طب نفسي"]},{id:"misc_015_2025",category:_.MISCELLANEOUS,title:"زواج المعاق عقليًّا (الإعاقة الذهنية البسيطة) وضوابط القَيِّم",question:"ما حكم زواج المعاق عقليًا (إعاقة بسيطة)؟ وهل يمنع خوفًا من إنجاب أبناء معاقين؟ وما دور القَيِّم/الولي؟",medical_context:"زواج، نكاح، إعاقة عقلية، intellectual disability, mild intellectual disability, تعلمية، وصاية، قَيِّم، ولي، مصلحة، تحليل وراثي، genetic testing, hereditary risk, إنجاب، تنظيم النسل",ruling:`الجواب:
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

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة الأستاذ الدكتور علي جمعة (فتوى رقم 441 بتاريخ 25 أبريل 2005)",tags:["زواج","نكاح","إعاقة عقلية","وصاية","ولي","مصلحة","وراثة"]},{id:"obgyn_010_2025",category:_.WOMEN_PREGNANCY,title:"حكم الدم النازل بعد سن اليأس (56 سنة) وأثره على الصلاة والصيام",question:"امرأة عمرها 56 سنة انقطع حيضها عامًا ثم عاد دم 5 أيام بنفس صفات دم الحيض: هل يُعد حيضًا ويمنع الصلاة والصيام؟",medical_context:"سن اليأس، menopause, postmenopause, postmenopausal bleeding (PMB), vaginal bleeding, abnormal uterine bleeding (AUB), hormone changes, endometrial hyperplasia, uterine polyp, fibroid, رحم، دم، حيض، استحاضة، صلاة، صيام",ruling:`الجواب:
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

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - فضيلة أ. د/ نظير محمد عياد (فتوى رقم 8620 بتاريخ 22 أبريل 2025)",tags:["نساء","حيض","سن اليأس","نزيف","صلاة","صيام","استحاضة"]},{id:"surg_005_2025",category:_.SURGERY,title:"التجميل باستخدام حقن البوتكس (Botox)",question:"ما حكم حقن البوتكس واستخدامه في أغراض التجميل والزينة؟ وما ضوابطه الشرعية؟",medical_context:"بوتكس، botox, botulinum toxin, BTX-A, Clostridium botulinum, cosmetic injection, wrinkles, forehead lines, crow’s feet, fillers, dermal filler, migraine, hyperhidrosis, spasm, cosmetic surgery, تجميل، تجاعيد، زينة، تدليس",ruling:`الجواب:
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

والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"فتاوى دار الإفتاء المصرية - الأستاذ الدكتور شوقي إبراهيم علام (فتوى رقم 4215 بتاريخ 27 ديسمبر 2017)",tags:["تجميل","بوتكس","حقن","زينة","تداوي","تدليس","جلدية"]},{id:"ethics_009_2025",category:_.ETHICS,title:"حكم ترقيع الجلد التالف للإنسان الحي بجلد الميت",question:"ما حكم ترقيع الجلد التالف للإنسان الحي بجلد الميت عند الضرورة الطبية وتعذر أخذ الجلد من المصاب؟",medical_context:"skin graft, cadaver skin, grafting, burns, third-degree burn, tissue donation, transplantation, burn wound coverage",ruling:`الجواب:
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
والله سبحانه وتعالى أعلم.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية — فتوى رقم 7790 — 26 يوليو 2023م — أ.د/ شوقي إبراهيم علام",tags:["ترقيع الجلد","جلد الميت","زراعة الأنسجة","التداوي","الضرورة","التبرع","بيع الأعضاء","الحروق"]}],d2=({fatwa:d,onClose:D})=>{const[A,o]=et.useState(!1),[j,C]=et.useState(!1),Q=x=>{navigator.clipboard.writeText(x),o(!0),setTimeout(()=>o(!1),2e3)},k=()=>{const x=`📌 ${d.title}

❓ السؤال:
${d.question}

${d.medical_context?`🏥 السياق الطبي:
${d.medical_context}

`:""}✅ الحكم الشرعي:
${d.ruling}

📋 الحكم النهائي: ${d.verdict==="PERMITTED"?"جائز ✓":d.verdict==="FORBIDDEN"?"محرم ✗":"مشروط ◎"}

📚 المصدر: ${d.source}`;Q(x)},z=x=>{const H=`${d.title} - الطبيب الفقيه`,O=window.location.href,B={twitter:`https://twitter.com/intent/tweet?text=${encodeURIComponent(H)}&url=${encodeURIComponent(O)}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(O)}`,whatsapp:`https://wa.me/?text=${encodeURIComponent(H+`
`+O)}`,telegram:`https://t.me/share/url?url=${encodeURIComponent(O)}&text=${encodeURIComponent(H)}`};B[x]&&window.open(B[x],"_blank","width=600,height=400")};return c.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 overflow-y-auto flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-3xl my-8",children:[c.jsxs("div",{className:"px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-teal-50 to-blue-50",children:[c.jsx("button",{onClick:D,className:"text-gray-500 hover:text-gray-700 text-2xl font-bold hover:bg-gray-100 p-2 rounded-lg transition",children:c.jsx(G0,{size:24})}),c.jsx("h2",{className:"text-sm font-bold text-teal-700 flex-1 text-center px-4 line-clamp-2",children:d.source}),c.jsx("div",{className:"w-10"})]}),c.jsxs("div",{className:"p-6 space-y-6 max-h-[70vh] overflow-y-auto",children:[c.jsx("div",{className:"border-r-4 border-teal-600 pr-4",children:c.jsx("h3",{className:"font-bold text-2xl font-amiri leading-snug text-gray-900",children:d.title})}),c.jsxs("div",{className:"bg-amber-50 rounded-lg border-2 border-amber-300 overflow-hidden",children:[c.jsxs("div",{className:"bg-amber-200 px-4 py-2 flex items-center gap-2",children:[c.jsx("span",{className:"text-2xl",children:"❓"}),c.jsx("h4",{className:"text-sm font-bold text-amber-900",children:"السؤال"})]}),c.jsx("div",{className:"p-5",children:c.jsx("p",{className:"text-base text-amber-950 leading-8 whitespace-pre-wrap",children:d.question})}),c.jsxs("button",{onClick:()=>Q(d.question),className:"w-full py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-semibold flex items-center justify-center gap-2 transition",children:[c.jsx(Tn,{size:14}),A?"تم النسخ!":"نسخ السؤال"]})]}),d.medical_context&&c.jsxs("div",{className:"bg-blue-50 rounded-lg border-2 border-blue-300 overflow-hidden",children:[c.jsxs("div",{className:"bg-blue-200 px-4 py-2 flex items-center gap-2",children:[c.jsx("span",{className:"text-2xl",children:"🏥"}),c.jsx("h4",{className:"text-sm font-bold text-blue-900",children:"السياق الطبي (الكلمات المفتاحية)"})]}),c.jsx("div",{className:"p-5",children:c.jsx("p",{className:"text-xs text-blue-950 leading-6 font-mono whitespace-pre-wrap",children:d.medical_context})}),c.jsxs("button",{onClick:()=>Q(d.medical_context),className:"w-full py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold flex items-center justify-center gap-2 transition",children:[c.jsx(Tn,{size:14}),"نسخ الكلمات المفتاحية"]})]}),c.jsxs("div",{className:"bg-green-50 rounded-lg border-l-4 border-green-600 overflow-hidden",children:[c.jsxs("div",{className:"bg-green-100 px-4 py-2 flex items-center gap-2",children:[c.jsx("span",{className:"text-2xl",children:"✅"}),c.jsx("h4",{className:"text-sm font-bold text-green-900",children:"الحكم الشرعي والتفصيل"})]}),c.jsx("div",{className:"p-5",children:c.jsx("p",{className:"text-base leading-8 whitespace-pre-wrap text-gray-800 font-medium",children:d.ruling})}),c.jsxs("button",{onClick:()=>Q(d.ruling),className:"w-full py-2 bg-green-100 hover:bg-green-200 text-green-800 text-xs font-semibold flex items-center justify-center gap-2 transition",children:[c.jsx(Tn,{size:14}),"نسخ الحكم الشرعي"]})]}),c.jsx("div",{className:"flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-300",children:c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-gray-600 mb-2",children:"الحكم النهائي:"}),c.jsxs("span",{className:`text-sm font-bold px-4 py-2 rounded-full inline-block ${d.verdict==="PERMITTED"?"bg-green-100 text-green-800":d.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[d.verdict==="PERMITTED"&&"✓ جائز",d.verdict==="FORBIDDEN"&&"✗ محرم",d.verdict==="CONDITIONAL"&&"◎ مشروط"]})]})}),d.tags&&d.tags.length>0&&c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-gray-600 mb-3",children:"🏷️ الكلمات المفتاحية:"}),c.jsx("div",{className:"flex flex-wrap gap-2",children:d.tags.map((x,H)=>c.jsxs("span",{className:"text-xs bg-gradient-to-r from-teal-100 to-blue-100 hover:from-teal-200 hover:to-blue-200 text-teal-800 px-3 py-2 rounded-full transition cursor-pointer font-medium",children:["#",x]},H))})]}),c.jsxs("div",{className:"bg-gray-100 rounded-lg p-4 border border-gray-300",children:[c.jsx("p",{className:"text-xs font-bold text-gray-600 mb-2",children:"📚 المصدر:"}),c.jsx("p",{className:"text-sm text-gray-800 font-semibold leading-relaxed",children:d.source})]})]}),c.jsxs("div",{className:"px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between gap-3 flex-wrap",children:[c.jsxs("button",{onClick:k,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition ${A?"bg-green-500 text-white":"bg-blue-500 text-white hover:bg-blue-600"}`,children:[c.jsx(Tn,{size:16}),A?"تم النسخ!":"نسخ كاملة"]}),c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>C(!j),className:"flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold text-sm hover:bg-purple-600 transition",children:[c.jsx(u2,{size:16}),"مشاركة"]}),j&&c.jsxs("div",{className:"absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden",children:[c.jsx("button",{onClick:()=>{z("twitter"),C(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"𝕏 تويتر"}),c.jsx("button",{onClick:()=>{z("facebook"),C(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"f فيسبوك"}),c.jsx("button",{onClick:()=>{z("whatsapp"),C(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"💬 واتساب"}),c.jsx("button",{onClick:()=>{z("telegram"),C(!1)},className:"w-full text-right px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-gray-800 transition",children:"✈️ تيليجرام"})]})]}),c.jsx("button",{onClick:D,className:"flex items-center gap-2 px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition ml-auto",children:"إغلاق"})]})]})})},L0=d=>{var j,C;const D=[];!d.id||d.id.trim()===""?D.push({field:"id",message:"رقم الفتوى (ID) مطلوب",severity:"error"}):/^[a-z0-9_]+$/.test(d.id)||D.push({field:"id",message:"رقم الفتوى يجب أن يحتوي على أحرف إنجليزية صغيرة وأرقام وعلامات underscore فقط",severity:"error"}),d.category||D.push({field:"category",message:"التصنيف مطلوب",severity:"error"}),(!d.title||d.title.trim()==="")&&D.push({field:"title",message:"العنوان مطلوب",severity:"error"}),(!d.question||d.question.trim()==="")&&D.push({field:"question",message:"السؤال مطلوب",severity:"error"}),!d.ruling||d.ruling.trim()===""?D.push({field:"ruling",message:"الحكم الشرعي مطلوب",severity:"error"}):d.ruling.trim().length<50&&D.push({field:"ruling",message:"الحكم الشرعي يجب أن يكون أطول (50 حرف على الأقل)",severity:"warning"});const A=(((j=d.ruling)==null?void 0:j.match(/{/g))||[]).length,o=(((C=d.ruling)==null?void 0:C.match(/}/g))||[]).length;return A!==o&&D.push({field:"ruling",message:"تحذير: عدد الأقواس المفتوحة والمغلقة غير متطابق",severity:"warning"}),(!d.verdict||!["PERMITTED","FORBIDDEN","CONDITIONAL"].includes(d.verdict))&&D.push({field:"verdict",message:"الحكم النهائي مطلوب (جائز / محرم / مشروط)",severity:"error"}),(!d.source||d.source.trim()==="")&&D.push({field:"source",message:"المصدر مطلوب",severity:"error"}),(!d.tags||d.tags.length===0)&&D.push({field:"tags",message:"يجب إضافة وسم واحد على الأقل",severity:"warning"}),D},m2=d=>`{
  id: '${d.id}',
  category: CategoryId.${d.category},
  title: '${d.title.replace(/'/g,"\\'")}',
  question: '${d.question.replace(/'/g,"\\'")}',
  medical_context: '${(d.medical_context||"").replace(/'/g,"\\'")}',
  ruling: \`${d.ruling}\`,
  verdict: '${d.verdict}',
  source: '${d.source.replace(/'/g,"\\'")}',
  tags: [${d.tags.map(D=>`'${D}'`).join(", ")}],
},`,g2={[_.SURGERY]:"surg",[_.WOMEN_PREGNANCY]:"obgyn",[_.ICU_DEATH]:"icu",[_.FASTING_MEDICINE]:"fast",[_.ETHICS]:"ethics",[_.GENETICS_REPRODUCTION]:"genetic",[_.TATTOO_CORTISONE]:"tattoo",[_.PRAYER_PURITY]:"prayer",[_.MEDICAL_EXPERIMENTS]:"exp",[_.PHARMACY_DRUGS]:"pharm",[_.MISCELLANEOUS]:"misc"},U0=(d,D)=>{const A=g2[d]||"fatwa",o=new Date().getFullYear(),C=(D.filter(Q=>Q.category===d).length+1).toString().padStart(3,"0");return`${A}_${C}_${o}`},y2=({onAddFatwa:d,existingFatwas:D=[]})=>{var Xt;const[A,o]=et.useState({id:"",category:void 0,title:"",question:"",medical_context:"",ruling:"",verdict:"CONDITIONAL",source:"",tags:[]}),[j,C]=et.useState([]),[Q,k]=et.useState(""),[z,x]=et.useState(!1),[H,O]=et.useState(""),B=R=>{o(P=>{const L=R,tt=U0(L,D);return{...P,category:L,id:tt}})},dt=()=>{if(A.category){const R=U0(A.category,D);o(P=>({...P,id:R}))}},ut=R=>{const{name:P,value:L}=R.target;o(tt=>({...tt,[P]:L}))},it=R=>{R.key==="Enter"&&H.trim()&&(o(P=>({...P,tags:[...P.tags||[],H.trim()]})),O(""),R.preventDefault())},vt=R=>{o(P=>{var L;return{...P,tags:((L=P.tags)==null?void 0:L.filter((tt,Ot)=>Ot!==R))||[]}})},$=()=>{const R=L0(A);if(C(R),R.filter(P=>P.severity==="error").length===0){const P=m2(A);k(P)}},K=()=>{navigator.clipboard.writeText(Q),x(!0),setTimeout(()=>x(!1),2e3)},F=()=>{o({id:"",category:void 0,title:"",question:"",medical_context:"",ruling:"",verdict:"CONDITIONAL",source:"",tags:[]}),C([]),k(""),O("")},qt=j.filter(R=>R.severity==="error").length,Lt=j.filter(R=>R.severity==="warning").length;return c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6",children:c.jsxs("div",{className:"max-w-6xl mx-auto",children:[c.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-2 text-right",children:"➕ إضافة فتوى جديدة"}),c.jsx("p",{className:"text-gray-600 text-right mb-8",children:"املأ البيانات وستحصل على كود جاهز للنسخ في constants.ts"}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[c.jsx("div",{className:"lg:col-span-2",children:c.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"رقم الفتوى (ID) - تلقائي"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"text",value:A.id||"",disabled:!0,className:"flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 font-mono text-sm",dir:"ltr"}),c.jsxs("button",{type:"button",onClick:dt,disabled:!A.category,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-semibold text-sm",children:[c.jsx(Fg,{size:16}),"إعادة توليد"]})]}),c.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"🔄 يُولَّد تلقائياً عند اختيار التصنيف"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"التصنيف *"}),c.jsxs("select",{value:A.category||"",onChange:R=>B(R.target.value),className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[c.jsx("option",{value:"",children:"اختر تصنيفًا"}),An.map(R=>c.jsx("option",{value:R.id,children:R.name},R.id))]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"العنوان *"}),c.jsx("input",{type:"text",name:"title",value:A.title||"",onChange:ut,placeholder:"حكم زكاة عيادات الأسنان",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السؤال *"}),c.jsx("textarea",{name:"question",value:A.question||"",onChange:ut,placeholder:"ما حكم كذا وكذا؟",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-24",dir:"rtl"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السياق الطبي (كلمات مفتاحية)"}),c.jsx("textarea",{name:"medical_context",value:A.medical_context||"",onChange:ut,placeholder:"تسنين، dentistry, زراعة أسنان، implant، تنظيف",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-20 font-mono text-sm",dir:"ltr"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم الشرعي والتفصيل *"}),c.jsx("textarea",{name:"ruling",value:A.ruling||"",onChange:ut,placeholder:"اكتب الحكم الشرعي بالتفصيل...",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-32",dir:"rtl"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم النهائي *"}),c.jsxs("select",{name:"verdict",value:A.verdict||"",onChange:ut,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[c.jsx("option",{value:"PERMITTED",children:"✓ جائز"}),c.jsx("option",{value:"FORBIDDEN",children:"✗ محرم"}),c.jsx("option",{value:"CONDITIONAL",children:"◎ مشروط"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"المصدر *"}),c.jsx("input",{type:"text",name:"source",value:A.source||"",onChange:ut,placeholder:"دار الإفتاء المصرية - فتوى رقم ...",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الكلمات المفتاحية (اضغط Enter لإضافة)"}),c.jsx("input",{type:"text",value:H,onChange:R=>O(R.target.value),onKeyDown:it,placeholder:"أضف وسمًا واضغط Enter",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none mb-3",dir:"rtl"}),c.jsx("div",{className:"flex flex-wrap gap-2",children:(Xt=A.tags)==null?void 0:Xt.map((R,P)=>c.jsxs("div",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2",children:[R,c.jsx("button",{onClick:()=>vt(P),className:"text-blue-600 hover:text-blue-800 font-bold",children:"✕"})]},P))})]}),c.jsxs("div",{className:"flex gap-3 justify-end pt-6 border-t",children:[c.jsx("button",{onClick:F,className:"px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition",children:"مسح الكل"}),c.jsx("button",{onClick:$,className:"px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition",children:"✓ توليد الكود"})]})]})}),c.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[j.length>0&&c.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[c.jsxs("h3",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[c.jsx(zg,{size:20,className:"text-orange-500"}),"التحقق من البيانات"]}),c.jsxs("div",{className:"space-y-3",children:[qt>0&&c.jsxs("div",{className:"bg-red-50 border border-red-300 rounded-lg p-3",children:[c.jsxs("p",{className:"text-sm font-bold text-red-700",children:["❌ أخطاء (",qt,"):"]}),j.filter(R=>R.severity==="error").map((R,P)=>c.jsxs("p",{className:"text-xs text-red-600 mt-1",children:["• ",R.field,": ",R.message]},P))]}),Lt>0&&c.jsxs("div",{className:"bg-yellow-50 border border-yellow-300 rounded-lg p-3",children:[c.jsxs("p",{className:"text-sm font-bold text-yellow-700",children:["⚠️ تحذيرات (",Lt,"):"]}),j.filter(R=>R.severity==="warning").map((R,P)=>c.jsxs("p",{className:"text-xs text-yellow-600 mt-1",children:["• ",R.field,": ",R.message]},P))]})]})]}),Q&&c.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[c.jsxs("h3",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[c.jsx(Rg,{size:20,className:"text-green-500"}),"الكود المُولَّد"]}),c.jsx("div",{className:"bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-xs overflow-x-auto h-48 overflow-y-auto mb-4",children:c.jsx("pre",{children:Q})}),c.jsxs("button",{onClick:K,className:`w-full py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2 mb-2 ${z?"bg-green-500 text-white":"bg-blue-500 text-white hover:bg-blue-600"}`,children:[z?c.jsx(hs,{size:18}):c.jsx(Tn,{size:18}),z?"تم النسخ!":"نسخ الكود"]}),d&&c.jsxs("button",{onClick:()=>{A.id&&A.category&&A.title&&A.question&&A.ruling&&A.verdict&&A.source&&(d(A),F(),alert("تم إضافة الفتوى بنجاح!"))},className:"w-full py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition flex items-center justify-center gap-2",children:[c.jsx(hs,{size:18}),"حفظ مباشرة"]}),c.jsx("p",{className:"text-xs text-gray-600 mt-3 text-center",children:d?"يمكنك النسخ أو الحفظ مباشرة":"انسخ الكود والصقه في `MOCK_FATWAS` داخل `constants.ts`"})]}),!Q&&c.jsxs("div",{className:"bg-blue-50 rounded-xl shadow-lg p-6 border border-blue-200",children:[c.jsx("h3",{className:"text-lg font-bold text-blue-900 mb-3",children:"📋 التعليمات"}),c.jsxs("ol",{className:"text-sm text-blue-800 space-y-2 text-right",children:[c.jsx("li",{children:"✓ 1. امل جميع الحقول المطلوبة (*)"}),c.jsx("li",{children:"✓ 2. أضف وسومًا مفيدة"}),c.jsx("li",{children:'✓ 3. اضغط "توليد الكود"'}),c.jsx("li",{children:"✓ 4. انسخ الكود المُولَّد"}),c.jsx("li",{children:"✓ 5. الصقه في constants.ts"})]})]})]})]})]})})},h2=({fatwa:d,onSave:D,onDelete:A,onCancel:o})=>{const[j,C]=et.useState(d),[Q,k]=et.useState([]),[z,x]=et.useState(""),[H,O]=et.useState(!1),B=K=>{const{name:F,value:qt}=K.target;C(Lt=>({...Lt,[F]:qt}))},dt=K=>{K.key==="Enter"&&z.trim()&&(C(F=>({...F,tags:[...F.tags,z.trim()]})),x(""),K.preventDefault())},ut=K=>{C(F=>({...F,tags:F.tags.filter((qt,Lt)=>Lt!==K)}))},it=()=>{const K=L0(j);k(K),K.filter(F=>F.severity==="error").length===0&&D(j)},vt=()=>{A(d.id),O(!1)},$=Q.filter(K=>K.severity==="error").length;return c.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 space-y-6",children:[c.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[c.jsx(H0,{size:24}),"تعديل الفتوى: ",d.title]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"رقم الفتوى (ID) - غير قابل للتعديل"}),c.jsx("input",{type:"text",value:j.id,disabled:!0,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 font-mono text-sm",dir:"ltr"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"التصنيف *"}),c.jsx("select",{name:"category",value:j.category,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:An.map(K=>c.jsx("option",{value:K.id,children:K.name},K.id))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"العنوان *"}),c.jsx("input",{type:"text",name:"title",value:j.title,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السؤال *"}),c.jsx("textarea",{name:"question",value:j.question,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-24",dir:"rtl"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"السياق الطبي"}),c.jsx("textarea",{name:"medical_context",value:j.medical_context,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-20 font-mono text-sm",dir:"ltr"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم الشرعي *"}),c.jsx("textarea",{name:"ruling",value:j.ruling,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-32",dir:"rtl"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الحكم النهائي *"}),c.jsxs("select",{name:"verdict",value:j.verdict,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[c.jsx("option",{value:"PERMITTED",children:"✓ جائز"}),c.jsx("option",{value:"FORBIDDEN",children:"✗ محرم"}),c.jsx("option",{value:"CONDITIONAL",children:"◎ مشروط"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"المصدر *"}),c.jsx("input",{type:"text",name:"source",value:j.source,onChange:B,className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"الكلمات المفتاحية"}),c.jsx("input",{type:"text",value:z,onChange:K=>x(K.target.value),onKeyDown:dt,placeholder:"أضف وسمًا واضغط Enter",className:"w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none mb-3",dir:"rtl"}),c.jsx("div",{className:"flex flex-wrap gap-2",children:j.tags.map((K,F)=>c.jsxs("div",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2",children:[K,c.jsx("button",{type:"button",onClick:()=>ut(F),className:"text-blue-600 hover:text-blue-800 font-bold",children:"✕"})]},F))})]}),Q.length>0&&c.jsxs("div",{className:"bg-red-50 border-2 border-red-300 rounded-lg p-4",children:[c.jsxs("p",{className:"text-sm font-bold text-red-700 mb-2",children:["❌ أخطاء (",$,"):"]}),c.jsx("div",{className:"space-y-1",children:Q.filter(K=>K.severity==="error").map((K,F)=>c.jsxs("p",{className:"text-xs text-red-600",children:["• ",K.field,": ",K.message]},F))})]}),c.jsxs("div",{className:"flex gap-3 justify-end pt-6 border-t border-gray-300",children:[!H&&c.jsxs("button",{onClick:()=>O(!0),className:"px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition flex items-center gap-2",children:[c.jsx(B0,{size:18}),"حذف"]}),H&&c.jsxs("div",{className:"flex gap-2 absolute left-8 bottom-8 bg-red-50 border border-red-300 rounded-lg p-4",children:[c.jsx("p",{className:"text-sm text-red-700 font-semibold mr-3",children:"هل أنت متأكد من الحذف؟"}),c.jsx("button",{onClick:vt,className:"px-3 py-1 bg-red-600 text-white rounded text-sm font-bold hover:bg-red-700",children:"نعم، احذف"}),c.jsx("button",{onClick:()=>O(!1),className:"px-3 py-1 bg-gray-400 text-white rounded text-sm font-bold hover:bg-gray-500",children:"إلغاء"})]}),c.jsxs("button",{onClick:o,className:"px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition flex items-center gap-2",children:[c.jsx(G0,{size:18}),"إلغاء"]}),c.jsxs("button",{onClick:it,disabled:$>0,className:"px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[c.jsx(hs,{size:18}),"حفظ التعديلات"]})]})]})},v2=({fatwas:d,onSave:D,onDelete:A})=>{const[o,j]=et.useState(""),[C,Q]=et.useState(""),[k,z]=et.useState(null),x=et.useMemo(()=>d.filter(O=>{const B=O.title.includes(o)||O.question.includes(o)||O.id.includes(o),dt=!C||O.category===C;return B&&dt}),[d,o,C]),H=d.find(O=>O.id===k);return H?c.jsxs("div",{className:"space-y-6",children:[c.jsx("button",{onClick:()=>z(null),className:"text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2",children:"← العودة للقائمة"}),c.jsx(h2,{fatwa:H,onSave:O=>{D(O),z(null)},onDelete:O=>{A(O),z(null)},onCancel:()=>z(null)})]}):c.jsxs("div",{className:"space-y-6",children:[c.jsxs("h2",{className:"text-2xl font-bold text-gray-800",children:["قائمة الفتاوى (",x.length,")"]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{className:"relative",children:[c.jsx(t2,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"}),c.jsx("input",{type:"text",placeholder:"ابحث في العنوان أو السؤال...",value:o,onChange:O=>j(O.target.value),className:"w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",dir:"rtl"})]}),c.jsxs("select",{value:C,onChange:O=>Q(O.target.value),className:"px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",children:[c.jsx("option",{value:"",children:"جميع التصنيفات"}),An.map(O=>c.jsx("option",{value:O.id,children:O.name},O.id))]})]}),x.length===0?c.jsx("div",{className:"bg-gray-50 rounded-lg p-8 text-center",children:c.jsx("p",{className:"text-gray-600 text-lg",children:"لا توجد فتاوى تطابق البحث"})}):c.jsx("div",{className:"space-y-3",children:x.map(O=>{const B=An.find(dt=>dt.id===O.category);return c.jsx("div",{className:"bg-white rounded-lg border border-gray-300 p-4 hover:shadow-lg transition",children:c.jsxs("div",{className:"flex items-start justify-between gap-4",children:[c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("h3",{className:"font-bold text-lg text-gray-800 mb-1",children:O.title}),c.jsx("p",{className:"text-sm text-gray-600 mb-2 line-clamp-2",children:O.question}),c.jsxs("div",{className:"flex gap-2 flex-wrap",children:[c.jsx("span",{className:"text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full",children:(B==null?void 0:B.name)||"Unknown"}),c.jsxs("span",{className:`text-xs px-2 py-1 rounded-full ${O.verdict==="PERMITTED"?"bg-green-100 text-green-800":O.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[O.verdict==="PERMITTED"&&"✓ جائز",O.verdict==="FORBIDDEN"&&"✗ محرم",O.verdict==="CONDITIONAL"&&"◎ مشروط"]})]})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("button",{onClick:()=>z(O.id),className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold flex items-center gap-2 text-sm",children:[c.jsx(H0,{size:16}),"تعديل"]}),c.jsxs("button",{onClick:()=>{confirm(`هل تريد حذف: ${O.title}؟`)&&A(O.id)},className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold flex items-center gap-2 text-sm",children:[c.jsx(B0,{size:16}),"حذف"]})]})]})},O.id)})})]})},b2="Faioumy9954",x2=({onLogin:d})=>{const[D,A]=et.useState(""),[o,j]=et.useState(!1),[C,Q]=et.useState(""),[k,z]=et.useState(!1),x=H=>{H.preventDefault(),z(!0),setTimeout(()=>{D===b2?(Q(""),A(""),d()):(Q("كلمة السر غير صحيحة"),A("")),z(!1)},500)};return c.jsx("div",{className:"fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden",children:[c.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-8 text-center",children:[c.jsx("div",{className:"inline-block bg-white/20 p-4 rounded-full mb-4",children:c.jsx(wg,{size:40,className:"text-white"})}),c.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"لوحة الإدارة"}),c.jsx("p",{className:"text-indigo-100",children:"أدخل كلمة السر للوصول"})]}),c.jsxs("form",{onSubmit:x,className:"p-8 space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"كلمة السر"}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:o?"text":"password",value:D,onChange:H=>{A(H.target.value),Q("")},placeholder:"أدخل كلمة السر",disabled:k,className:"w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none font-medium disabled:bg-gray-100",autoFocus:!0,dir:"ltr"}),c.jsx("button",{type:"button",onClick:()=>j(!o),className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition",children:o?c.jsx(qg,{size:20}):c.jsx(Hg,{size:20})})]})]}),C&&c.jsx("div",{className:"bg-red-50 border-2 border-red-300 rounded-lg p-3",children:c.jsxs("p",{className:"text-red-700 text-sm font-semibold",children:["❌ ",C]})}),c.jsx("button",{type:"submit",disabled:k||D.length===0,className:"w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed",children:k?"⏳ جاري التحقق...":"🔓 الدخول"})]}),c.jsx("div",{className:"bg-gray-50 px-8 py-4 text-center border-t border-gray-200",children:c.jsx("p",{className:"text-xs text-gray-600",children:"🔒 لوحة الإدارة محمية بكلمة سر"})})]})})},p2=({fatwas:d,onAddFatwa:D,onUpdateFatwa:A,onDeleteFatwa:o,onLogout:j})=>{const[C,Q]=et.useState("dashboard"),[k,z]=et.useState(!1),[x,H]=et.useState(!1);return k?x?k?c.jsx("div",{className:"fixed inset-0 bg-black/60 z-50 overflow-y-auto",children:c.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",children:c.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-6xl",children:[c.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 flex items-center justify-between",children:[c.jsxs("h1",{className:"text-3xl font-bold text-white flex items-center gap-3",children:[c.jsx(M0,{size:28}),"لوحة إدارة المحتوى"]}),c.jsx("button",{onClick:()=>z(!1),className:"text-white hover:bg-white/20 p-2 rounded-lg transition text-2xl font-bold",children:"✕"})]}),c.jsxs("div",{className:"border-b border-gray-200 px-8 py-4 flex gap-4",children:[c.jsx("button",{onClick:()=>Q("dashboard"),className:`px-6 py-2 rounded-lg font-semibold transition ${C==="dashboard"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"📊 لوحة التحكم"}),c.jsxs("button",{onClick:()=>Q("add"),className:`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${C==="add"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[c.jsx(kg,{size:18}),"إضافة فتوى"]}),c.jsxs("button",{onClick:()=>Q("list"),className:`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${C==="list"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[c.jsx(Zg,{size:18}),"قائمة الفتاوى"]})]}),c.jsxs("div",{className:"p-8 max-h-[80vh] overflow-y-auto",children:[C==="dashboard"&&c.jsxs("div",{className:"space-y-6",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"مرحبًا بك في لوحة الإدارة"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 border border-blue-300",children:[c.jsx("p",{className:"text-sm font-bold text-blue-600 mb-2",children:"📚 إجمالي الفتاوى"}),c.jsx("p",{className:"text-4xl font-bold text-blue-900",children:d.length})]}),c.jsxs("div",{className:"bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-6 border border-green-300",children:[c.jsx("p",{className:"text-sm font-bold text-green-600 mb-2",children:"✓ فتاوى منشورة"}),c.jsx("p",{className:"text-4xl font-bold text-green-900",children:d.filter(O=>O.verdict==="PERMITTED").length})]}),c.jsxs("div",{className:"bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-6 border border-yellow-300",children:[c.jsx("p",{className:"text-sm font-bold text-yellow-600 mb-2",children:"⏳ مشروط"}),c.jsx("p",{className:"text-4xl font-bold text-yellow-900",children:d.filter(O=>O.verdict==="CONDITIONAL").length})]})]}),c.jsxs("div",{className:"bg-indigo-50 rounded-lg p-6 border border-indigo-300",children:[c.jsx("h3",{className:"text-lg font-bold text-indigo-900 mb-3",children:"🚀 الخطوات التالية"}),c.jsxs("ul",{className:"space-y-2 text-indigo-800",children:[c.jsx("li",{children:'✓ اضغط على "إضافة فتوى" لإضافة فتوى جديدة'}),c.jsx("li",{children:"✓ سيتم التحقق من البيانات تلقائيًا"}),c.jsx("li",{children:"✓ انسخ الكود المُولَّد والصقه في constants.ts"}),c.jsx("li",{children:"✓ أعد تشغيل السيرفر لرؤية الفتوى الجديدة"})]})]})]}),C==="add"&&c.jsx(y2,{onAddFatwa:D,existingFatwas:d}),C==="list"&&c.jsx(v2,{fatwas:d,onSave:A,onDelete:o})]}),c.jsxs("div",{className:"border-t border-gray-200 px-8 py-4 bg-gray-50 flex justify-between",children:[c.jsxs("button",{onClick:j,className:"flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold",children:[c.jsx(Jg,{size:18}),"الخروج"]}),c.jsx("p",{className:"text-sm text-gray-600",children:"نسخة 1.0 | آخر تحديث: 24 ديسمبر 2025"})]})]})})}):c.jsx("button",{onClick:()=>z(!0),className:"fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg transition z-40",title:"فتح لوحة الإدارة",children:c.jsx(M0,{size:24})}):c.jsxs(c.Fragment,{children:[c.jsx(x2,{onLogin:()=>H(!0)}),c.jsx("button",{onClick:()=>z(!1),className:"fixed bottom-6 left-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition z-40 text-2xl",title:"فتح لوحة الإدارة",children:"⚙️"})]}):c.jsx("button",{onClick:()=>z(!0),className:"fixed bottom-6 left-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition z-40 text-2xl",title:"فتح لوحة الإدارة",children:"⚙️"})},N2=(d,D)=>{const A=[];for(let o=0;o<=D.length;o++)A[o]=[o];for(let o=0;o<=d.length;o++)A[0][o]=o;for(let o=1;o<=D.length;o++)for(let j=1;j<=d.length;j++)D.charAt(o-1)===d.charAt(j-1)?A[o][j]=A[o-1][j-1]:A[o][j]=Math.min(A[o-1][j-1]+1,A[o][j-1]+1,A[o-1][j]+1);return A[D.length][d.length]},ys=(d,D)=>{const A=Math.max(d.length,D.length);return A===0?1:1-N2(d,D)/A},Da=d=>d?d.toLowerCase().normalize("NFKD").replace(/[\u064B-\u0652\u0640]/g,"").replace(/[أإآ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/[^\u0600-\u06FF0-9\s]/g," ").split(/\s+/).filter(Boolean):[],_2=(d,D)=>{const A=Da(d),o=d.toLowerCase().trim(),j=/^[a-z\s]+$/i.test(o),C=Da(D.title),Q=Da(D.question||""),k=Da(D.medical_context||""),z=Da((D.tags||[]).join(" ")),x=Da(D.ruling||""),H=(D.medical_context||"").toLowerCase(),O=(D.tags||[]).join(" ").toLowerCase();let B=0,dt=!1;if(j&&o.length>0){H.includes(o)&&(B+=20,dt=!0),O.includes(o)&&(B+=15,dt=!0);const ut=o.split(/\s+/).filter(vt=>vt.length>2);if(ut.length===0)return 0;let it=0;for(const vt of ut)H.includes(vt)?(B+=12,it++):O.includes(vt)&&(B+=10,it++);if(dt=it>0,!dt){const vt=H.split(/[\s,()/-]+/);for(const $ of ut)for(const K of vt)if(K.length>2){const F=ys($,K);F>.78&&(B+=3+2*F)}}}else{if(!A.length)return 0;let ut=0;for(const it of A)it.length<2||(k.includes(it)?(B+=14,ut++):C.includes(it)?(B+=11,ut++):z.includes(it)?(B+=9,ut++):Q.includes(it)&&(B+=7,ut++));if(dt=ut>0,!dt){for(const it of A)if(!(it.length<2)){for(const vt of k)if(vt.length>2){const $=ys(it,vt);$>.8&&(B+=3+2*$)}for(const vt of z)if(vt.length>2){const $=ys(it,vt);$>.8&&(B+=2+1.5*$)}}}if(B===0)for(const it of A)x.includes(it)&&(B+=2)}return B||0},S2=(d,D)=>D.map(o=>({fatwa:o,score:_2(d,o)})).filter(o=>o.score>3).sort((o,j)=>j.score-o.score).map(o=>o.fatwa).slice(0,5),E2=()=>{const[d,D]=et.useState([]),[A,o]=et.useState(""),j=!1,[C,Q]=et.useState(!1),[k,z]=et.useState(!1),[x,H]=et.useState(null),[O,B]=et.useState(null),[dt,ut]=et.useState(!1),[it,vt]=et.useState(!1),[$,K]=et.useState(r2),F=et.useRef(null),qt=()=>{const L=F.current;L&&(L.scrollTop=L.scrollHeight)};et.useEffect(()=>{qt()},[d,C]);const Lt=L=>{if($.some(tt=>tt.id===L.id)){alert("⚠️ رقم الفتوى موجود بالفعل!");return}K([...$,L]),alert("✓ تم إضافة الفتوى بنجاح!")},Xt=L=>{K($.map(tt=>tt.id===L.id?L:tt)),alert("✓ تم تحديث الفتوى بنجاح!")},R=L=>{K($.filter(tt=>tt.id!==L)),alert("✓ تم حذف الفتوى بنجاح!")},P=async()=>{if(!A.trim())return;const L=A,tt={id:Date.now().toString(),role:"user",text:L,isEmergency:j};D(Ot=>[...Ot,tt]),o(""),Q(!0);try{let Ot=[],Dt="";const ce=S2(L,$);if(ce.length>0){Ot=ce.map(N=>N.id);const Wt=ce.length;Wt===1?Dt="ها هي الفتوى عزيزي الطبيب":Dt=`ها هي ${Wt} فتاوى مرتبطة بسؤالك من مصادر متعددة:`}else Dt="عذرًا، لم أجد فتوى مطابقة لهذا السؤال في قاعدة البيانات الحالية.";const De={id:(Date.now()+1).toString(),role:"model",text:Dt,isEmergency:j,relatedFatwaIds:Ot};D(Wt=>[...Wt,De])}catch(Ot){console.error(Ot),D(Dt=>[...Dt,{id:(Date.now()+1).toString(),role:"model",text:"عذرًا، حدث خطأ غير متوقَّع."}])}finally{Q(!1)}};return c.jsxs("div",{className:"flex flex-col h-[100dvh] bg-slate-50 text-slate-800 font-tajawal overflow-hidden",children:[c.jsx("header",{className:"px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex items-center justify-center relative z-20",children:c.jsxs("div",{className:"flex flex-col items-center gap-1",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"p-1.5 rounded-lg bg-teal-50",children:c.jsx(s2,{className:"w-6 h-6 text-teal-700"})}),c.jsx("h1",{className:"text-2xl font-bold font-amiri text-gray-900 leading-none",children:"الطــبيب الفقيــه"})]}),c.jsx("span",{className:"text-sm text-teal-600 font-ruqaa opacity-90 tracking-wide transform -translate-y-2",children:"(بين الطب والشريعة)"})]})}),c.jsxs("main",{className:"flex-1 flex flex-col relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"}),c.jsxs("section",{className:"flex-1 flex flex-col relative z-10 w-full mx-auto max-w-lg md:max-w-2xl min-h-0",children:[c.jsxs("div",{ref:F,className:"flex-1 overflow-y-auto p-3 md:p-5 space-y-6 pb-6 scrollbar-hide min-h-0",children:[d.length===0&&c.jsx("div",{className:"flex flex-col items-center justify-center min-h-[50vh] text-center mt-2 px-2",children:c.jsxs("div",{className:"w-full space-y-6 animate-in fade-in zoom-in duration-700",children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("div",{className:"bg-gradient-to-tr from-teal-50 to-white p-4 rounded-full shadow-sm ring-1 ring-gray-100",children:c.jsx(Xg,{className:"w-10 h-10 text-teal-600"})})}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("h2",{className:"text-xl font-bold text-gray-800 font-amiri",children:"السلام عليكم دكتور"}),c.jsx("p",{className:"text-xs text-gray-500 max-w-xs mx-auto leading-relaxed",children:"صلّ على سيدنا النبي ﷺ خير معلم الناس الخير."})]}),c.jsxs("div",{className:"grid grid-cols-1 gap-3 w-full",children:[c.jsxs("div",{className:"relative overflow-hidden bg-white p-4 rounded-xl border border-teal-100 shadow-sm text-right",children:[c.jsx(R0,{className:"absolute -bottom-2 -left-2 w-12 h-12 text-teal-50 opacity-50 rotate-12"}),c.jsx("p",{className:"text-gray-800 font-amiri text-base font-medium leading-relaxed mb-2 relative z-10",children:'"لا أعلم علمًا بعد الحلال والحرام أنبل من الطب"'}),c.jsx("span",{className:"text-xs font-bold text-teal-600 block relative z-10",children:"- الإمام الشافعي"})]}),c.jsxs("div",{className:"relative overflow-hidden bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-right",children:[c.jsx(R0,{className:"absolute -bottom-2 -left-2 w-12 h-12 text-blue-50 opacity-50 rotate-12"}),c.jsx("p",{className:"text-gray-800 font-amiri text-base font-medium leading-relaxed mb-2 relative z-10",children:'"عليّ أن أتسلح بالعلم؛ لأجابه هذا العدو البغيض الذي يفتك ببنيان الله المقدس"'}),c.jsx("span",{className:"text-xs font-bold text-teal-600 block relative z-10",children:"- أبو بكر الرازي"})]})]})]})}),d.map(L=>((L.relatedFatwaIds||[]).map(tt=>$.find(Ot=>Ot.id===tt)).filter(tt=>tt!==void 0),c.jsxs("div",{className:`flex w-full flex-col gap-2 ${L.role==="user"?"items-end":"items-start"}`,children:[L.role==="user"&&c.jsx("div",{className:"bg-teal-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-md max-w-[85%]",children:c.jsx("p",{className:"text-base",children:L.text})}),L.role==="model"&&c.jsxs("div",{className:"w-full animate-in slide-in-from-bottom-2 duration-500",children:[$.length===0&&c.jsx("div",{className:"bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-gray-800 max-w-[90%] mb-2",children:c.jsx("p",{className:"text-sm leading-relaxed",children:L.text})}),$.length>0&&c.jsx("div",{className:"bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-gray-800 max-w-[90%] mb-3",children:c.jsx("p",{className:"text-sm leading-relaxed",children:L.text})}),$.map((tt,Ot)=>c.jsxs("div",{className:"w-full rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white mb-3",children:[c.jsxs("div",{className:"px-4 py-3 border-b flex justify-between items-center bg-gradient-to-r from-teal-50 to-blue-50 border-gray-100",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Gg,{className:"w-4 h-4 text-teal-600"}),c.jsxs("span",{className:"text-xs font-bold text-teal-700",children:["فتوى ",$.length>1?`${Ot+1} من ${$.length}`:"تفصيلية"]})]}),c.jsx("span",{className:"text-[11px] text-teal-700 bg-white/70 px-2 py-1 rounded font-semibold",children:tt.source})]}),c.jsxs("div",{className:"p-4 space-y-4",children:[c.jsx("h3",{className:"font-bold text-lg font-amiri leading-snug text-gray-900 border-r-4 border-teal-600 pr-3",children:tt.title}),c.jsxs("div",{className:"bg-amber-50/50 rounded p-3 border border-amber-100/50",children:[c.jsx("p",{className:"text-xs font-bold text-amber-800 mb-2",children:"❓ السؤال:"}),c.jsx("p",{className:"text-sm text-amber-900 leading-relaxed",children:tt.question})]}),tt.medical_context&&c.jsxs("div",{className:"bg-blue-50/50 rounded p-3 border border-blue-100/50",children:[c.jsx("p",{className:"text-xs font-bold text-blue-800 mb-2",children:"🏥 السياق الطبي:"}),c.jsx("p",{className:"text-sm text-blue-900 leading-relaxed font-mono",children:tt.medical_context})]}),c.jsxs("div",{className:"bg-green-50/50 rounded p-4 border-l-4 border-green-600",children:[c.jsx("p",{className:"text-xs font-bold mb-3 text-green-800",children:"✅ الحكم الشرعي والتفصيل:"}),c.jsx("p",{className:"text-sm leading-8 whitespace-pre-wrap text-gray-800 font-medium",children:tt.ruling})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs font-bold text-gray-600",children:"الحكم النهائي:"}),c.jsxs("span",{className:`text-xs font-bold px-3 py-1 rounded-full ${tt.verdict==="PERMITTED"?"bg-green-100 text-green-800":tt.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[tt.verdict==="PERMITTED"&&"✓ جائز",tt.verdict==="FORBIDDEN"&&"✗ محرم",tt.verdict==="CONDITIONAL"&&"◎ مشروط"]})]}),tt.tags&&tt.tags.length>0&&c.jsx("div",{className:"flex flex-wrap gap-2",children:tt.tags.map((Dt,ce)=>c.jsxs("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full",children:["#",Dt]},ce))})]})]},tt.id))]})]},L.id))),C&&c.jsx("div",{className:"flex justify-start w-full",children:c.jsxs("div",{className:"bg-white px-3 py-2 rounded-xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-1",children:[c.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),c.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),c.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})]}),c.jsxs("div",{className:"flex-shrink-0 px-3 py-3 bg-white border-t border-gray-100",children:[c.jsxs("button",{onClick:()=>z(!k),className:"w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:shadow-md",children:[c.jsx("span",{className:`transition-transform ${k?"rotate-180":""}`,children:"▼"}),c.jsx("h3",{className:"text-sm font-bold text-gray-800",children:"📚 فهرس الموضوعات"})]}),k&&c.jsx("div",{className:"mt-2 bg-white border border-gray-200 rounded-lg p-3 space-y-2 max-h-64 overflow-y-auto",children:x===null?c.jsx("div",{className:"space-y-2",children:An.map(L=>c.jsx("button",{onClick:()=>H(L.id),className:"w-full text-right p-2 bg-blue-50 hover:bg-blue-100 rounded text-xs font-semibold text-blue-700 transition",children:L.name},L.id))}):c.jsxs("div",{className:"space-y-2",children:[c.jsx("button",{onClick:()=>H(null),className:"w-full text-right p-2 bg-gray-200 hover:bg-gray-300 rounded text-xs font-semibold text-gray-700 transition",children:"← العودة"}),$.filter(L=>L.category===x).map(L=>c.jsx("button",{onClick:()=>{B(L),z(!1)},className:"w-full text-right p-2 bg-green-50 hover:bg-green-100 rounded text-xs font-semibold text-green-700 transition line-clamp-2",children:L.question},L.id))]})})]}),c.jsxs("div",{className:"relative w-full px-3 pt-3 pb-4 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent border-t border-gray-100",children:[c.jsxs("div",{className:"bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-gray-100 p-1.5 flex items-center gap-2 w-full",children:[c.jsx("input",{type:"text",value:A,onChange:L=>o(L.target.value),onKeyDown:L=>L.key==="Enter"&&P(),placeholder:"سل ما تريد أو اكتب الكلمة المفتاحية",className:"flex-1 bg-transparent border-none focus:ring-0 px-4 text-gray-700 placeholder-gray-400 text-base h-10 font-tajawal",disabled:C}),c.jsx("button",{onClick:P,disabled:!A.trim()||C,className:`w-10 h-10 flex items-center justify-center rounded-full transition-all flex-shrink-0 ${A.trim()&&!C?"bg-teal-600 text-white hover:bg-teal-700 shadow-md rotate-0":"bg-gray-100 text-gray-300 cursor-not-allowed"}`,children:c.jsx(l2,{className:`w-4 h-4 ${document.dir==="rtl"?"rotate-180 mr-0.5":""}`})})]}),c.jsx("div",{className:"text-center mt-5 mb-0",children:c.jsx("p",{className:"text-[13px] text-gray-600 font-amiri leading-relaxed opacity-90",children:"(أخوكم وابنكم، محمد محمود الفيومي، كلية طب بنين القاهرة - جامعة الأزهر الشريف)"})})]})]})]}),O&&c.jsx(d2,{fatwa:O,onClose:()=>B(null)}),dt&&c.jsx(p2,{fatwas:$,onAddFatwa:Lt,onUpdateFatwa:Xt,onDeleteFatwa:R,onLogout:()=>{ut(!1),vt(!1)}}),!dt&&c.jsx("button",{onClick:()=>ut(!0),className:"fixed bottom-6 left-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition z-40 text-xl",title:"فتح لوحة الإدارة",children:"⚙️"})]})},X0=document.getElementById("root");if(!X0)throw new Error("Could not find root element to mount to");const T2=_g.createRoot(X0);T2.render(c.jsx(gg.StrictMode,{children:c.jsx(E2,{})}));
