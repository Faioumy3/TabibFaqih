(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))o(q);new MutationObserver(q=>{for(const Z of q)if(Z.type==="childList")for(const $ of Z.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&o($)}).observe(document,{childList:!0,subtree:!0});function R(q){const Z={};return q.integrity&&(Z.integrity=q.integrity),q.referrerPolicy&&(Z.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?Z.credentials="include":q.crossOrigin==="anonymous"?Z.credentials="omit":Z.credentials="same-origin",Z}function o(q){if(q.ep)return;q.ep=!0;const Z=R(q);fetch(q.href,Z)}})();function Cr(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var ff={exports:{}},Eu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr;function ny(){if(Sr)return Eu;Sr=1;var x=Symbol.for("react.transitional.element"),M=Symbol.for("react.fragment");function R(o,q,Z){var $=null;if(Z!==void 0&&($=""+Z),q.key!==void 0&&($=""+q.key),"key"in q){Z={};for(var _l in q)_l!=="key"&&(Z[_l]=q[_l])}else Z=q;return q=Z.ref,{$$typeof:x,type:o,key:$,ref:q!==void 0?q:null,props:Z}}return Eu.Fragment=M,Eu.jsx=R,Eu.jsxs=R,Eu}var _r;function iy(){return _r||(_r=1,ff.exports=ny()),ff.exports}var v=iy(),sf={exports:{}},Q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er;function cy(){if(Er)return Q;Er=1;var x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),$=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),V=Symbol.iterator;function hl(r){return r===null||typeof r!="object"?null:(r=V&&r[V]||r["@@iterator"],typeof r=="function"?r:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},al=Object.assign,vl={};function xl(r,T,z){this.props=r,this.context=T,this.refs=vl,this.updater=z||F}xl.prototype.isReactComponent={},xl.prototype.setState=function(r,T){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,T,"setState")},xl.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Hl(){}Hl.prototype=xl.prototype;function Tl(r,T,z){this.props=r,this.context=T,this.refs=vl,this.updater=z||F}var O=Tl.prototype=new Hl;O.constructor=Tl,al(O,xl.prototype),O.isPureReactComponent=!0;var Dl=Array.isArray;function w(){}var L={H:null,A:null,T:null,S:null},Ml=Object.prototype.hasOwnProperty;function Wl(r,T,z){var C=z.ref;return{$$typeof:x,type:r,key:T,ref:C!==void 0?C:null,props:z}}function pt(r,T){return Wl(r.type,T,r.props)}function mt(r){return typeof r=="object"&&r!==null&&r.$$typeof===x}function Fl(r){var T={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(z){return T[z]})}var Te=/\/+/g;function Ct(r,T){return typeof r=="object"&&r!==null&&r.key!=null?Fl(""+r.key):T.toString(36)}function Nt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(w,w):(r.status="pending",r.then(function(T){r.status==="pending"&&(r.status="fulfilled",r.value=T)},function(T){r.status==="pending"&&(r.status="rejected",r.reason=T)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function S(r,T,z,C,K){var k=typeof r;(k==="undefined"||k==="boolean")&&(r=null);var cl=!1;if(r===null)cl=!0;else switch(k){case"bigint":case"string":case"number":cl=!0;break;case"object":switch(r.$$typeof){case x:case M:cl=!0;break;case X:return cl=r._init,S(cl(r._payload),T,z,C,K)}}if(cl)return K=K(r),cl=C===""?"."+Ct(r,0):C,Dl(K)?(z="",cl!=null&&(z=cl.replace(Te,"$&/")+"/"),S(K,T,z,"",function(Oa){return Oa})):K!=null&&(mt(K)&&(K=pt(K,z+(K.key==null||r&&r.key===K.key?"":(""+K.key).replace(Te,"$&/")+"/")+cl)),T.push(K)),1;cl=0;var Jl=C===""?".":C+":";if(Dl(r))for(var Al=0;Al<r.length;Al++)C=r[Al],k=Jl+Ct(C,Al),cl+=S(C,T,z,k,K);else if(Al=hl(r),typeof Al=="function")for(r=Al.call(r),Al=0;!(C=r.next()).done;)C=C.value,k=Jl+Ct(C,Al++),cl+=S(C,T,z,k,K);else if(k==="object"){if(typeof r.then=="function")return S(Nt(r),T,z,C,K);throw T=String(r),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return cl}function A(r,T,z){if(r==null)return r;var C=[],K=0;return S(r,C,"","",function(k){return T.call(z,k,K++)}),C}function G(r){if(r._status===-1){var T=r._result;T=T(),T.then(function(z){(r._status===0||r._status===-1)&&(r._status=1,r._result=z)},function(z){(r._status===0||r._status===-1)&&(r._status=2,r._result=z)}),r._status===-1&&(r._status=0,r._result=T)}if(r._status===1)return r._result.default;throw r._result}var ol=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},yl={map:A,forEach:function(r,T,z){A(r,function(){T.apply(this,arguments)},z)},count:function(r){var T=0;return A(r,function(){T++}),T},toArray:function(r){return A(r,function(T){return T})||[]},only:function(r){if(!mt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return Q.Activity=H,Q.Children=yl,Q.Component=xl,Q.Fragment=R,Q.Profiler=q,Q.PureComponent=Tl,Q.StrictMode=o,Q.Suspense=U,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,Q.__COMPILER_RUNTIME={__proto__:null,c:function(r){return L.H.useMemoCache(r)}},Q.cache=function(r){return function(){return r.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(r,T,z){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var C=al({},r.props),K=r.key;if(T!=null)for(k in T.key!==void 0&&(K=""+T.key),T)!Ml.call(T,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&T.ref===void 0||(C[k]=T[k]);var k=arguments.length-2;if(k===1)C.children=z;else if(1<k){for(var cl=Array(k),Jl=0;Jl<k;Jl++)cl[Jl]=arguments[Jl+2];C.children=cl}return Wl(r.type,K,C)},Q.createContext=function(r){return r={$$typeof:$,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:Z,_context:r},r},Q.createElement=function(r,T,z){var C,K={},k=null;if(T!=null)for(C in T.key!==void 0&&(k=""+T.key),T)Ml.call(T,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(K[C]=T[C]);var cl=arguments.length-2;if(cl===1)K.children=z;else if(1<cl){for(var Jl=Array(cl),Al=0;Al<cl;Al++)Jl[Al]=arguments[Al+2];K.children=Jl}if(r&&r.defaultProps)for(C in cl=r.defaultProps,cl)K[C]===void 0&&(K[C]=cl[C]);return Wl(r,k,K)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(r){return{$$typeof:_l,render:r}},Q.isValidElement=mt,Q.lazy=function(r){return{$$typeof:X,_payload:{_status:-1,_result:r},_init:G}},Q.memo=function(r,T){return{$$typeof:p,type:r,compare:T===void 0?null:T}},Q.startTransition=function(r){var T=L.T,z={};L.T=z;try{var C=r(),K=L.S;K!==null&&K(z,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(w,ol)}catch(k){ol(k)}finally{T!==null&&z.types!==null&&(T.types=z.types),L.T=T}},Q.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},Q.use=function(r){return L.H.use(r)},Q.useActionState=function(r,T,z){return L.H.useActionState(r,T,z)},Q.useCallback=function(r,T){return L.H.useCallback(r,T)},Q.useContext=function(r){return L.H.useContext(r)},Q.useDebugValue=function(){},Q.useDeferredValue=function(r,T){return L.H.useDeferredValue(r,T)},Q.useEffect=function(r,T){return L.H.useEffect(r,T)},Q.useEffectEvent=function(r){return L.H.useEffectEvent(r)},Q.useId=function(){return L.H.useId()},Q.useImperativeHandle=function(r,T,z){return L.H.useImperativeHandle(r,T,z)},Q.useInsertionEffect=function(r,T){return L.H.useInsertionEffect(r,T)},Q.useLayoutEffect=function(r,T){return L.H.useLayoutEffect(r,T)},Q.useMemo=function(r,T){return L.H.useMemo(r,T)},Q.useOptimistic=function(r,T){return L.H.useOptimistic(r,T)},Q.useReducer=function(r,T,z){return L.H.useReducer(r,T,z)},Q.useRef=function(r){return L.H.useRef(r)},Q.useState=function(r){return L.H.useState(r)},Q.useSyncExternalStore=function(r,T,z){return L.H.useSyncExternalStore(r,T,z)},Q.useTransition=function(){return L.H.useTransition()},Q.version="19.2.1",Q}var xr;function hf(){return xr||(xr=1,sf.exports=cy()),sf.exports}var Kl=hf();const fy=Cr(Kl);var of={exports:{}},xu={},rf={exports:{}},df={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr;function sy(){return Tr||(Tr=1,(function(x){function M(S,A){var G=S.length;S.push(A);l:for(;0<G;){var ol=G-1>>>1,yl=S[ol];if(0<q(yl,A))S[ol]=A,S[G]=yl,G=ol;else break l}}function R(S){return S.length===0?null:S[0]}function o(S){if(S.length===0)return null;var A=S[0],G=S.pop();if(G!==A){S[0]=G;l:for(var ol=0,yl=S.length,r=yl>>>1;ol<r;){var T=2*(ol+1)-1,z=S[T],C=T+1,K=S[C];if(0>q(z,G))C<yl&&0>q(K,z)?(S[ol]=K,S[C]=G,ol=C):(S[ol]=z,S[T]=G,ol=T);else if(C<yl&&0>q(K,G))S[ol]=K,S[C]=G,ol=C;else break l}}return A}function q(S,A){var G=S.sortIndex-A.sortIndex;return G!==0?G:S.id-A.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Z=performance;x.unstable_now=function(){return Z.now()}}else{var $=Date,_l=$.now();x.unstable_now=function(){return $.now()-_l}}var U=[],p=[],X=1,H=null,V=3,hl=!1,F=!1,al=!1,vl=!1,xl=typeof setTimeout=="function"?setTimeout:null,Hl=typeof clearTimeout=="function"?clearTimeout:null,Tl=typeof setImmediate<"u"?setImmediate:null;function O(S){for(var A=R(p);A!==null;){if(A.callback===null)o(p);else if(A.startTime<=S)o(p),A.sortIndex=A.expirationTime,M(U,A);else break;A=R(p)}}function Dl(S){if(al=!1,O(S),!F)if(R(U)!==null)F=!0,w||(w=!0,Fl());else{var A=R(p);A!==null&&Nt(Dl,A.startTime-S)}}var w=!1,L=-1,Ml=5,Wl=-1;function pt(){return vl?!0:!(x.unstable_now()-Wl<Ml)}function mt(){if(vl=!1,w){var S=x.unstable_now();Wl=S;var A=!0;try{l:{F=!1,al&&(al=!1,Hl(L),L=-1),hl=!0;var G=V;try{t:{for(O(S),H=R(U);H!==null&&!(H.expirationTime>S&&pt());){var ol=H.callback;if(typeof ol=="function"){H.callback=null,V=H.priorityLevel;var yl=ol(H.expirationTime<=S);if(S=x.unstable_now(),typeof yl=="function"){H.callback=yl,O(S),A=!0;break t}H===R(U)&&o(U),O(S)}else o(U);H=R(U)}if(H!==null)A=!0;else{var r=R(p);r!==null&&Nt(Dl,r.startTime-S),A=!1}}break l}finally{H=null,V=G,hl=!1}A=void 0}}finally{A?Fl():w=!1}}}var Fl;if(typeof Tl=="function")Fl=function(){Tl(mt)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Ct=Te.port2;Te.port1.onmessage=mt,Fl=function(){Ct.postMessage(null)}}else Fl=function(){xl(mt,0)};function Nt(S,A){L=xl(function(){S(x.unstable_now())},A)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(S){S.callback=null},x.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ml=0<S?Math.floor(1e3/S):5},x.unstable_getCurrentPriorityLevel=function(){return V},x.unstable_next=function(S){switch(V){case 1:case 2:case 3:var A=3;break;default:A=V}var G=V;V=A;try{return S()}finally{V=G}},x.unstable_requestPaint=function(){vl=!0},x.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var G=V;V=S;try{return A()}finally{V=G}},x.unstable_scheduleCallback=function(S,A,G){var ol=x.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ol+G:ol):G=ol,S){case 1:var yl=-1;break;case 2:yl=250;break;case 5:yl=1073741823;break;case 4:yl=1e4;break;default:yl=5e3}return yl=G+yl,S={id:X++,callback:A,priorityLevel:S,startTime:G,expirationTime:yl,sortIndex:-1},G>ol?(S.sortIndex=G,M(p,S),R(U)===null&&S===R(p)&&(al?(Hl(L),L=-1):al=!0,Nt(Dl,G-ol))):(S.sortIndex=yl,M(U,S),F||hl||(F=!0,w||(w=!0,Fl()))),S},x.unstable_shouldYield=pt,x.unstable_wrapCallback=function(S){var A=V;return function(){var G=V;V=A;try{return S.apply(this,arguments)}finally{V=G}}}})(df)),df}var pr;function oy(){return pr||(pr=1,rf.exports=sy()),rf.exports}var mf={exports:{}},Vl={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr;function ry(){if(Nr)return Vl;Nr=1;var x=hf();function M(U){var p="https://react.dev/errors/"+U;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var X=2;X<arguments.length;X++)p+="&args[]="+encodeURIComponent(arguments[X])}return"Minified React error #"+U+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(){}var o={d:{f:R,r:function(){throw Error(M(522))},D:R,C:R,L:R,m:R,X:R,S:R,M:R},p:0,findDOMNode:null},q=Symbol.for("react.portal");function Z(U,p,X){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:H==null?null:""+H,children:U,containerInfo:p,implementation:X}}var $=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _l(U,p){if(U==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Vl.createPortal=function(U,p){var X=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(M(299));return Z(U,p,null,X)},Vl.flushSync=function(U){var p=$.T,X=o.p;try{if($.T=null,o.p=2,U)return U()}finally{$.T=p,o.p=X,o.d.f()}},Vl.preconnect=function(U,p){typeof U=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(U,p))},Vl.prefetchDNS=function(U){typeof U=="string"&&o.d.D(U)},Vl.preinit=function(U,p){if(typeof U=="string"&&p&&typeof p.as=="string"){var X=p.as,H=_l(X,p.crossOrigin),V=typeof p.integrity=="string"?p.integrity:void 0,hl=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;X==="style"?o.d.S(U,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:H,integrity:V,fetchPriority:hl}):X==="script"&&o.d.X(U,{crossOrigin:H,integrity:V,fetchPriority:hl,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Vl.preinitModule=function(U,p){if(typeof U=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var X=_l(p.as,p.crossOrigin);o.d.M(U,{crossOrigin:X,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(U)},Vl.preload=function(U,p){if(typeof U=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var X=p.as,H=_l(X,p.crossOrigin);o.d.L(U,X,{crossOrigin:H,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Vl.preloadModule=function(U,p){if(typeof U=="string")if(p){var X=_l(p.as,p.crossOrigin);o.d.m(U,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:X,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(U)},Vl.requestFormReset=function(U){o.d.r(U)},Vl.unstable_batchedUpdates=function(U,p){return U(p)},Vl.useFormState=function(U,p,X){return $.H.useFormState(U,p,X)},Vl.useFormStatus=function(){return $.H.useHostTransitionStatus()},Vl.version="19.2.1",Vl}var Ar;function dy(){if(Ar)return mf.exports;Ar=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(M){console.error(M)}}return x(),mf.exports=ry(),mf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr;function my(){if(zr)return xu;zr=1;var x=oy(),M=hf(),R=dy();function o(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function q(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function Z(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function $(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function _l(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(Z(l)!==l)throw Error(o(188))}function p(l){var t=l.alternate;if(!t){if(t=Z(l),t===null)throw Error(o(188));return t!==l?null:l}for(var e=l,a=t;;){var u=e.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){e=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===e)return U(u),l;if(n===a)return U(u),t;n=n.sibling}throw Error(o(188))}if(e.return!==a.return)e=u,a=n;else{for(var i=!1,c=u.child;c;){if(c===e){i=!0,e=u,a=n;break}if(c===a){i=!0,a=u,e=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===e){i=!0,e=n,a=u;break}if(c===a){i=!0,a=n,e=u;break}c=c.sibling}if(!i)throw Error(o(189))}}if(e.alternate!==a)throw Error(o(190))}if(e.tag!==3)throw Error(o(188));return e.stateNode.current===e?l:t}function X(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=X(l),t!==null)return t;l=l.sibling}return null}var H=Object.assign,V=Symbol.for("react.element"),hl=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),al=Symbol.for("react.fragment"),vl=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Hl=Symbol.for("react.consumer"),Tl=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),Dl=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),Ml=Symbol.for("react.lazy"),Wl=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Fl(l){return l===null||typeof l!="object"?null:(l=mt&&l[mt]||l["@@iterator"],typeof l=="function"?l:null)}var Te=Symbol.for("react.client.reference");function Ct(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Te?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case al:return"Fragment";case xl:return"Profiler";case vl:return"StrictMode";case Dl:return"Suspense";case w:return"SuspenseList";case Wl:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case F:return"Portal";case Tl:return l.displayName||"Context";case Hl:return(l._context.displayName||"Context")+".Consumer";case O:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case L:return t=l.displayName||null,t!==null?t:Ct(l.type)||"Memo";case Ml:t=l._payload,l=l._init;try{return Ct(l(t))}catch{}}return null}var Nt=Array.isArray,S=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ol=[],yl=-1;function r(l){return{current:l}}function T(l){0>yl||(l.current=ol[yl],ol[yl]=null,yl--)}function z(l,t){yl++,ol[yl]=l.current,l.current=t}var C=r(null),K=r(null),k=r(null),cl=r(null);function Jl(l,t){switch(z(k,t),z(K,l),z(C,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Q0(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Q0(t),l=Z0(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}T(C),z(C,l)}function Al(){T(C),T(K),T(k)}function Oa(l){l.memoizedState!==null&&z(cl,l);var t=C.current,e=Z0(t,l.type);t!==e&&(z(K,l),z(C,e))}function pu(l){K.current===l&&(T(C),T(K)),cl.current===l&&(T(cl),vu._currentValue=G)}var Zn,vf;function pe(l){if(Zn===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Zn=t&&t[1]||"",vf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zn+l+vf}var Vn=!1;function Kn(l,t){if(!l||Vn)return"";Vn=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(h){var g=h}Reflect.construct(l,[],E)}else{try{E.call()}catch(h){g=h}l.call(E.prototype)}}else{try{throw Error()}catch(h){g=h}(E=l())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(h){if(h&&g&&typeof h.stack=="string")return[h.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),y=c.split(`
`);for(u=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;u<y.length&&!y[u].includes("DetermineComponentFrameRoot");)u++;if(a===f.length||u===y.length)for(a=f.length-1,u=y.length-1;1<=a&&0<=u&&f[a]!==y[u];)u--;for(;1<=a&&0<=u;a--,u--)if(f[a]!==y[u]){if(a!==1||u!==1)do if(a--,u--,0>u||f[a]!==y[u]){var b=`
`+f[a].replace(" at new "," at ");return l.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",l.displayName)),b}while(1<=a&&0<=u);break}}}finally{Vn=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?pe(e):""}function Hr(l,t){switch(l.tag){case 26:case 27:case 5:return pe(l.type);case 16:return pe("Lazy");case 13:return l.child!==t&&t!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return Kn(l.type,!1);case 11:return Kn(l.type.render,!1);case 1:return Kn(l.type,!0);case 31:return pe("Activity");default:return""}}function bf(l){try{var t="",e=null;do t+=Hr(l,e),e=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Jn=Object.prototype.hasOwnProperty,wn=x.unstable_scheduleCallback,Wn=x.unstable_cancelCallback,Yr=x.unstable_shouldYield,Br=x.unstable_requestPaint,at=x.unstable_now,Gr=x.unstable_getCurrentPriorityLevel,Sf=x.unstable_ImmediatePriority,_f=x.unstable_UserBlockingPriority,Nu=x.unstable_NormalPriority,Lr=x.unstable_LowPriority,Ef=x.unstable_IdlePriority,Xr=x.log,Qr=x.unstable_setDisableYieldValue,Da=null,ut=null;function It(l){if(typeof Xr=="function"&&Qr(l),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(Da,l)}catch{}}var nt=Math.clz32?Math.clz32:Kr,Zr=Math.log,Vr=Math.LN2;function Kr(l){return l>>>=0,l===0?32:31-(Zr(l)/Vr|0)|0}var Au=256,zu=262144,Ou=4194304;function Ne(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Du(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var u=0,n=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?u=Ne(a):(i&=c,i!==0?u=Ne(i):e||(e=c&~l,e!==0&&(u=Ne(e))))):(c=a&~n,c!==0?u=Ne(c):i!==0?u=Ne(i):e||(e=a&~l,e!==0&&(u=Ne(e)))),u===0?0:t!==0&&t!==u&&(t&n)===0&&(n=u&-u,e=t&-t,n>=e||n===32&&(e&4194048)!==0)?t:u}function Ma(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Jr(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(){var l=Ou;return Ou<<=1,(Ou&62914560)===0&&(Ou=4194304),l}function Fn(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Ra(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function wr(l,t,e,a,u,n){var i=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var c=l.entanglements,f=l.expirationTimes,y=l.hiddenUpdates;for(e=i&~e;0<e;){var b=31-nt(e),E=1<<b;c[b]=0,f[b]=-1;var g=y[b];if(g!==null)for(y[b]=null,b=0;b<g.length;b++){var h=g[b];h!==null&&(h.lane&=-536870913)}e&=~E}a!==0&&Tf(l,a,0),n!==0&&u===0&&l.tag!==0&&(l.suspendedLanes|=n&~(i&~t))}function Tf(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-nt(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&261930}function pf(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-nt(e),u=1<<a;u&t|l[a]&t&&(l[a]|=t),e&=~u}}function Nf(l,t){var e=t&-t;return e=(e&42)!==0?1:$n(e),(e&(l.suspendedLanes|t))!==0?0:e}function $n(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function kn(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Af(){var l=A.p;return l!==0?l:(l=window.event,l===void 0?32:dr(l.type))}function zf(l,t){var e=A.p;try{return A.p=l,t()}finally{A.p=e}}var Pt=Math.random().toString(36).slice(2),Gl="__reactFiber$"+Pt,$l="__reactProps$"+Pt,Ze="__reactContainer$"+Pt,In="__reactEvents$"+Pt,Wr="__reactListeners$"+Pt,Fr="__reactHandles$"+Pt,Of="__reactResources$"+Pt,Ua="__reactMarker$"+Pt;function Pn(l){delete l[Gl],delete l[$l],delete l[In],delete l[Wr],delete l[Fr]}function Ve(l){var t=l[Gl];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Ze]||e[Gl]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=$0(l);l!==null;){if(e=l[Gl])return e;l=$0(l)}return t}l=e,e=l.parentNode}return null}function Ke(l){if(l=l[Gl]||l[Ze]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ca(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(o(33))}function Je(l){var t=l[Of];return t||(t=l[Of]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Yl(l){l[Ua]=!0}var Df=new Set,Mf={};function Ae(l,t){we(l,t),we(l+"Capture",t)}function we(l,t){for(Mf[l]=t,l=0;l<t.length;l++)Df.add(t[l])}var $r=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rf={},Uf={};function kr(l){return Jn.call(Uf,l)?!0:Jn.call(Rf,l)?!1:$r.test(l)?Uf[l]=!0:(Rf[l]=!0,!1)}function Mu(l,t,e){if(kr(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function Ru(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function jt(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}function yt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Cf(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ir(l,t,e){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,n=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return u.call(this)},set:function(i){e=""+i,n.call(this,i)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function li(l){if(!l._valueTracker){var t=Cf(l)?"checked":"value";l._valueTracker=Ir(l,t,""+l[t])}}function jf(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=Cf(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function Uu(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var Pr=/[\n"\\]/g;function gt(l){return l.replace(Pr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ti(l,t,e,a,u,n,i,c){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+yt(t)):l.value!==""+yt(t)&&(l.value=""+yt(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?ei(l,i,yt(t)):e!=null?ei(l,i,yt(e)):a!=null&&l.removeAttribute("value"),u==null&&n!=null&&(l.defaultChecked=!!n),u!=null&&(l.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+yt(c):l.removeAttribute("name")}function qf(l,t,e,a,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(l.type=n),t!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){li(l);return}e=e!=null?""+yt(e):"",t=t!=null?""+yt(t):e,c||t===l.value||(l.value=t),l.defaultValue=t}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=c?l.checked:!!a,l.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),li(l)}function ei(l,t,e){t==="number"&&Uu(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function We(l,t,e,a){if(l=l.options,t){t={};for(var u=0;u<e.length;u++)t["$"+e[u]]=!0;for(e=0;e<l.length;e++)u=t.hasOwnProperty("$"+l[e].value),l[e].selected!==u&&(l[e].selected=u),u&&a&&(l[e].defaultSelected=!0)}else{for(e=""+yt(e),t=null,u=0;u<l.length;u++){if(l[u].value===e){l[u].selected=!0,a&&(l[u].defaultSelected=!0);return}t!==null||l[u].disabled||(t=l[u])}t!==null&&(t.selected=!0)}}function Hf(l,t,e){if(t!=null&&(t=""+yt(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+yt(e):""}function Yf(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(o(92));if(Nt(a)){if(1<a.length)throw Error(o(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=yt(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a),li(l)}function Fe(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var ld=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bf(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||ld.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Gf(l,t,e){if(t!=null&&typeof t!="object")throw Error(o(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var u in t)a=t[u],t.hasOwnProperty(u)&&e[u]!==a&&Bf(l,u,a)}else for(var n in t)t.hasOwnProperty(n)&&Bf(l,n,t[n])}function ai(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ed=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cu(l){return ed.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function qt(){}var ui=null;function ni(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var $e=null,ke=null;function Lf(l){var t=Ke(l);if(t&&(l=t.stateNode)){var e=l[$l]||null;l:switch(l=t.stateNode,t.type){case"input":if(ti(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var u=a[$l]||null;if(!u)throw Error(o(90));ti(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&jf(a)}break l;case"textarea":Hf(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&We(l,!!e.multiple,t,!1)}}}var ii=!1;function Xf(l,t,e){if(ii)return l(t,e);ii=!0;try{var a=l(t);return a}finally{if(ii=!1,($e!==null||ke!==null)&&(En(),$e&&(t=$e,l=ke,ke=$e=null,Lf(t),l)))for(t=0;t<l.length;t++)Lf(l[t])}}function ja(l,t){var e=l.stateNode;if(e===null)return null;var a=e[$l]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(o(231,t,typeof e));return e}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ci=!1;if(Ht)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){ci=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{ci=!1}var le=null,fi=null,ju=null;function Qf(){if(ju)return ju;var l,t=fi,e=t.length,a,u="value"in le?le.value:le.textContent,n=u.length;for(l=0;l<e&&t[l]===u[l];l++);var i=e-l;for(a=1;a<=i&&t[e-a]===u[n-a];a++);return ju=u.slice(l,1<a?1-a:void 0)}function qu(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Hu(){return!0}function Zf(){return!1}function kl(l){function t(e,a,u,n,i){this._reactName=e,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(e=l[c],this[c]=e?e(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Hu:Zf,this.isPropagationStopped=Zf,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Hu)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Hu)},persist:function(){},isPersistent:Hu}),t}var ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=kl(ze),Ha=H({},ze,{view:0,detail:0}),ad=kl(Ha),si,oi,Ya,Bu=H({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:di,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Ya&&(Ya&&l.type==="mousemove"?(si=l.screenX-Ya.screenX,oi=l.screenY-Ya.screenY):oi=si=0,Ya=l),si)},movementY:function(l){return"movementY"in l?l.movementY:oi}}),Vf=kl(Bu),ud=H({},Bu,{dataTransfer:0}),nd=kl(ud),id=H({},Ha,{relatedTarget:0}),ri=kl(id),cd=H({},ze,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=kl(cd),sd=H({},ze,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),od=kl(sd),rd=H({},ze,{data:0}),Kf=kl(rd),dd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=yd[l])?!!t[l]:!1}function di(){return gd}var hd=H({},Ha,{key:function(l){if(l.key){var t=dd[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=qu(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?md[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:di,charCode:function(l){return l.type==="keypress"?qu(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?qu(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),vd=kl(hd),bd=H({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=kl(bd),Sd=H({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:di}),_d=kl(Sd),Ed=H({},ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=kl(Ed),Td=H({},Bu,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),pd=kl(Td),Nd=H({},ze,{newState:0,oldState:0}),Ad=kl(Nd),zd=[9,13,27,32],mi=Ht&&"CompositionEvent"in window,Ba=null;Ht&&"documentMode"in document&&(Ba=document.documentMode);var Od=Ht&&"TextEvent"in window&&!Ba,wf=Ht&&(!mi||Ba&&8<Ba&&11>=Ba),Wf=" ",Ff=!1;function $f(l,t){switch(l){case"keyup":return zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Ie=!1;function Dd(l,t){switch(l){case"compositionend":return kf(t);case"keypress":return t.which!==32?null:(Ff=!0,Wf);case"textInput":return l=t.data,l===Wf&&Ff?null:l;default:return null}}function Md(l,t){if(Ie)return l==="compositionend"||!mi&&$f(l,t)?(l=Qf(),ju=fi=le=null,Ie=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wf&&t.locale!=="ko"?null:t.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Rd[l.type]:t==="textarea"}function Pf(l,t,e,a){$e?ke?ke.push(a):ke=[a]:$e=a,t=On(t,"onChange"),0<t.length&&(e=new Yu("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var Ga=null,La=null;function Ud(l){H0(l,0)}function Gu(l){var t=Ca(l);if(jf(t))return l}function ls(l,t){if(l==="change")return t}var ts=!1;if(Ht){var yi;if(Ht){var gi="oninput"in document;if(!gi){var es=document.createElement("div");es.setAttribute("oninput","return;"),gi=typeof es.oninput=="function"}yi=gi}else yi=!1;ts=yi&&(!document.documentMode||9<document.documentMode)}function as(){Ga&&(Ga.detachEvent("onpropertychange",us),La=Ga=null)}function us(l){if(l.propertyName==="value"&&Gu(La)){var t=[];Pf(t,La,l,ni(l)),Xf(Ud,t)}}function Cd(l,t,e){l==="focusin"?(as(),Ga=t,La=e,Ga.attachEvent("onpropertychange",us)):l==="focusout"&&as()}function jd(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Gu(La)}function qd(l,t){if(l==="click")return Gu(t)}function Hd(l,t){if(l==="input"||l==="change")return Gu(t)}function Yd(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var it=typeof Object.is=="function"?Object.is:Yd;function Xa(l,t){if(it(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var u=e[a];if(!Jn.call(t,u)||!it(l[u],t[u]))return!1}return!0}function ns(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function is(l,t){var e=ns(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=ns(e)}}function cs(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?cs(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function fs(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Uu(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=Uu(l.document)}return t}function hi(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Bd=Ht&&"documentMode"in document&&11>=document.documentMode,Pe=null,vi=null,Qa=null,bi=!1;function ss(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;bi||Pe==null||Pe!==Uu(a)||(a=Pe,"selectionStart"in a&&hi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&Xa(Qa,a)||(Qa=a,a=On(vi,"onSelect"),0<a.length&&(t=new Yu("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=Pe)))}function Oe(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var la={animationend:Oe("Animation","AnimationEnd"),animationiteration:Oe("Animation","AnimationIteration"),animationstart:Oe("Animation","AnimationStart"),transitionrun:Oe("Transition","TransitionRun"),transitionstart:Oe("Transition","TransitionStart"),transitioncancel:Oe("Transition","TransitionCancel"),transitionend:Oe("Transition","TransitionEnd")},Si={},os={};Ht&&(os=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function De(l){if(Si[l])return Si[l];if(!la[l])return l;var t=la[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in os)return Si[l]=t[e];return l}var rs=De("animationend"),ds=De("animationiteration"),ms=De("animationstart"),Gd=De("transitionrun"),Ld=De("transitionstart"),Xd=De("transitioncancel"),ys=De("transitionend"),gs=new Map,_i="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_i.push("scrollEnd");function At(l,t){gs.set(l,t),Ae(t,[l])}var Lu=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ht=[],ta=0,Ei=0;function Xu(){for(var l=ta,t=Ei=ta=0;t<l;){var e=ht[t];ht[t++]=null;var a=ht[t];ht[t++]=null;var u=ht[t];ht[t++]=null;var n=ht[t];if(ht[t++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&hs(e,u,n)}}function Qu(l,t,e,a){ht[ta++]=l,ht[ta++]=t,ht[ta++]=e,ht[ta++]=a,Ei|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function xi(l,t,e,a){return Qu(l,t,e,a),Zu(l)}function Me(l,t){return Qu(l,null,null,t),Zu(l)}function hs(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var u=!1,n=l.return;n!==null;)n.childLanes|=e,a=n.alternate,a!==null&&(a.childLanes|=e),n.tag===22&&(l=n.stateNode,l===null||l._visibility&1||(u=!0)),l=n,n=n.return;return l.tag===3?(n=l.stateNode,u&&t!==null&&(u=31-nt(e),l=n.hiddenUpdates,a=l[u],a===null?l[u]=[t]:a.push(t),t.lane=e|536870912),n):null}function Zu(l){if(50<ou)throw ou=0,Rc=null,Error(o(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ea={};function Qd(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(l,t,e,a){return new Qd(l,t,e,a)}function Ti(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Yt(l,t){var e=l.alternate;return e===null?(e=ct(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function vs(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Vu(l,t,e,a,u,n){var i=0;if(a=l,typeof l=="function")Ti(l)&&(i=1);else if(typeof l=="string")i=wm(l,e,C.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Wl:return l=ct(31,e,t,u),l.elementType=Wl,l.lanes=n,l;case al:return Re(e.children,u,n,t);case vl:i=8,u|=24;break;case xl:return l=ct(12,e,t,u|2),l.elementType=xl,l.lanes=n,l;case Dl:return l=ct(13,e,t,u),l.elementType=Dl,l.lanes=n,l;case w:return l=ct(19,e,t,u),l.elementType=w,l.lanes=n,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Tl:i=10;break l;case Hl:i=9;break l;case O:i=11;break l;case L:i=14;break l;case Ml:i=16,a=null;break l}i=29,e=Error(o(130,l===null?"null":typeof l,"")),a=null}return t=ct(i,e,t,u),t.elementType=l,t.type=a,t.lanes=n,t}function Re(l,t,e,a){return l=ct(7,l,a,t),l.lanes=e,l}function pi(l,t,e){return l=ct(6,l,null,t),l.lanes=e,l}function bs(l){var t=ct(18,null,null,0);return t.stateNode=l,t}function Ni(l,t,e){return t=ct(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var Ss=new WeakMap;function vt(l,t){if(typeof l=="object"&&l!==null){var e=Ss.get(l);return e!==void 0?e:(t={value:l,source:t,stack:bf(t)},Ss.set(l,t),t)}return{value:l,source:t,stack:bf(t)}}var aa=[],ua=0,Ku=null,Za=0,bt=[],St=0,te=null,Dt=1,Mt="";function Bt(l,t){aa[ua++]=Za,aa[ua++]=Ku,Ku=l,Za=t}function _s(l,t,e){bt[St++]=Dt,bt[St++]=Mt,bt[St++]=te,te=l;var a=Dt;l=Mt;var u=32-nt(a)-1;a&=~(1<<u),e+=1;var n=32-nt(t)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,Dt=1<<32-nt(t)+u|e<<u|a,Mt=n+l}else Dt=1<<n|e<<u|a,Mt=l}function Ai(l){l.return!==null&&(Bt(l,1),_s(l,1,0))}function zi(l){for(;l===Ku;)Ku=aa[--ua],aa[ua]=null,Za=aa[--ua],aa[ua]=null;for(;l===te;)te=bt[--St],bt[St]=null,Mt=bt[--St],bt[St]=null,Dt=bt[--St],bt[St]=null}function Es(l,t){bt[St++]=Dt,bt[St++]=Mt,bt[St++]=te,Dt=t.id,Mt=t.overflow,te=l}var Ll=null,bl=null,el=!1,ee=null,_t=!1,Oi=Error(o(519));function ae(l){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Va(vt(t,l)),Oi}function xs(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[Gl]=l,t[$l]=a,e){case"dialog":P("cancel",t),P("close",t);break;case"iframe":case"object":case"embed":P("load",t);break;case"video":case"audio":for(e=0;e<du.length;e++)P(du[e],t);break;case"source":P("error",t);break;case"img":case"image":case"link":P("error",t),P("load",t);break;case"details":P("toggle",t);break;case"input":P("invalid",t),qf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":P("invalid",t);break;case"textarea":P("invalid",t),Yf(t,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||L0(t.textContent,e)?(a.popover!=null&&(P("beforetoggle",t),P("toggle",t)),a.onScroll!=null&&P("scroll",t),a.onScrollEnd!=null&&P("scrollend",t),a.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ae(l,!0)}function Ts(l){for(Ll=l.return;Ll;)switch(Ll.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:Ll=Ll.return}}function na(l){if(l!==Ll)return!1;if(!el)return Ts(l),el=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Jc(l.type,l.memoizedProps)),e=!e),e&&bl&&ae(l),Ts(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));bl=F0(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));bl=F0(l)}else t===27?(t=bl,ve(l.type)?(l=kc,kc=null,bl=l):bl=t):bl=Ll?xt(l.stateNode.nextSibling):null;return!0}function Ue(){bl=Ll=null,el=!1}function Di(){var l=ee;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),ee=null),l}function Va(l){ee===null?ee=[l]:ee.push(l)}var Mi=r(null),Ce=null,Gt=null;function ue(l,t,e){z(Mi,t._currentValue),t._currentValue=e}function Lt(l){l._currentValue=Mi.current,T(Mi)}function Ri(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function Ui(l,t,e,a){var u=l.child;for(u!==null&&(u.return=l);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;l:for(;n!==null;){var c=n;n=u;for(var f=0;f<t.length;f++)if(c.context===t[f]){n.lanes|=e,c=n.alternate,c!==null&&(c.lanes|=e),Ri(n.return,e,l),a||(i=null);break l}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(o(341));i.lanes|=e,n=i.alternate,n!==null&&(n.lanes|=e),Ri(i,e,l),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===l){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ia(l,t,e,a){l=null;for(var u=t,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(o(387));if(i=i.memoizedProps,i!==null){var c=u.type;it(u.pendingProps.value,i.value)||(l!==null?l.push(c):l=[c])}}else if(u===cl.current){if(i=u.alternate,i===null)throw Error(o(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(l!==null?l.push(vu):l=[vu])}u=u.return}l!==null&&Ui(t,l,e,a),t.flags|=262144}function Ju(l){for(l=l.firstContext;l!==null;){if(!it(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function je(l){Ce=l,Gt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Xl(l){return ps(Ce,l)}function wu(l,t){return Ce===null&&je(l),ps(l,t)}function ps(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Gt===null){if(l===null)throw Error(o(308));Gt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Gt=Gt.next=t;return e}var Zd=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},Vd=x.unstable_scheduleCallback,Kd=x.unstable_NormalPriority,Rl={$$typeof:Tl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ci(){return{controller:new Zd,data:new Map,refCount:0}}function Ka(l){l.refCount--,l.refCount===0&&Vd(Kd,function(){l.controller.abort()})}var Ja=null,ji=0,ca=0,fa=null;function Jd(l,t){if(Ja===null){var e=Ja=[];ji=0,ca=Yc(),fa={status:"pending",value:void 0,then:function(a){e.push(a)}}}return ji++,t.then(Ns,Ns),t}function Ns(){if(--ji===0&&Ja!==null){fa!==null&&(fa.status="fulfilled");var l=Ja;Ja=null,ca=0,fa=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function wd(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(u){e.push(u)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var u=0;u<e.length;u++)(0,e[u])(t)},function(u){for(a.status="rejected",a.reason=u,u=0;u<e.length;u++)(0,e[u])(void 0)}),a}var As=S.S;S.S=function(l,t){o0=at(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Jd(l,t),As!==null&&As(l,t)};var qe=r(null);function qi(){var l=qe.current;return l!==null?l:gl.pooledCache}function Wu(l,t){t===null?z(qe,qe.current):z(qe,t.pool)}function zs(){var l=qi();return l===null?null:{parent:Rl._currentValue,pool:l}}var sa=Error(o(460)),Hi=Error(o(474)),Fu=Error(o(542)),$u={then:function(){}};function Os(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Ds(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(qt,qt),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Rs(l),l;default:if(typeof t.status=="string")t.then(qt,qt);else{if(l=gl,l!==null&&100<l.shellSuspendCounter)throw Error(o(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=a}},function(a){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Rs(l),l}throw Ye=t,sa}}function He(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ye=e,sa):e}}var Ye=null;function Ms(){if(Ye===null)throw Error(o(459));var l=Ye;return Ye=null,l}function Rs(l){if(l===sa||l===Fu)throw Error(o(483))}var oa=null,wa=0;function ku(l){var t=wa;return wa+=1,oa===null&&(oa=[]),Ds(oa,l,t)}function Wa(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Iu(l,t){throw t.$$typeof===V?Error(o(525)):(l=Object.prototype.toString.call(t),Error(o(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function Us(l){function t(d,s){if(l){var m=d.deletions;m===null?(d.deletions=[s],d.flags|=16):m.push(s)}}function e(d,s){if(!l)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function a(d){for(var s=new Map;d!==null;)d.key!==null?s.set(d.key,d):s.set(d.index,d),d=d.sibling;return s}function u(d,s){return d=Yt(d,s),d.index=0,d.sibling=null,d}function n(d,s,m){return d.index=m,l?(m=d.alternate,m!==null?(m=m.index,m<s?(d.flags|=67108866,s):m):(d.flags|=67108866,s)):(d.flags|=1048576,s)}function i(d){return l&&d.alternate===null&&(d.flags|=67108866),d}function c(d,s,m,_){return s===null||s.tag!==6?(s=pi(m,d.mode,_),s.return=d,s):(s=u(s,m),s.return=d,s)}function f(d,s,m,_){var Y=m.type;return Y===al?b(d,s,m.props.children,_,m.key):s!==null&&(s.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ml&&He(Y)===s.type)?(s=u(s,m.props),Wa(s,m),s.return=d,s):(s=Vu(m.type,m.key,m.props,null,d.mode,_),Wa(s,m),s.return=d,s)}function y(d,s,m,_){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=Ni(m,d.mode,_),s.return=d,s):(s=u(s,m.children||[]),s.return=d,s)}function b(d,s,m,_,Y){return s===null||s.tag!==7?(s=Re(m,d.mode,_,Y),s.return=d,s):(s=u(s,m),s.return=d,s)}function E(d,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=pi(""+s,d.mode,m),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case hl:return m=Vu(s.type,s.key,s.props,null,d.mode,m),Wa(m,s),m.return=d,m;case F:return s=Ni(s,d.mode,m),s.return=d,s;case Ml:return s=He(s),E(d,s,m)}if(Nt(s)||Fl(s))return s=Re(s,d.mode,m,null),s.return=d,s;if(typeof s.then=="function")return E(d,ku(s),m);if(s.$$typeof===Tl)return E(d,wu(d,s),m);Iu(d,s)}return null}function g(d,s,m,_){var Y=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return Y!==null?null:c(d,s,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hl:return m.key===Y?f(d,s,m,_):null;case F:return m.key===Y?y(d,s,m,_):null;case Ml:return m=He(m),g(d,s,m,_)}if(Nt(m)||Fl(m))return Y!==null?null:b(d,s,m,_,null);if(typeof m.then=="function")return g(d,s,ku(m),_);if(m.$$typeof===Tl)return g(d,s,wu(d,m),_);Iu(d,m)}return null}function h(d,s,m,_,Y){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return d=d.get(m)||null,c(s,d,""+_,Y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case hl:return d=d.get(_.key===null?m:_.key)||null,f(s,d,_,Y);case F:return d=d.get(_.key===null?m:_.key)||null,y(s,d,_,Y);case Ml:return _=He(_),h(d,s,m,_,Y)}if(Nt(_)||Fl(_))return d=d.get(m)||null,b(s,d,_,Y,null);if(typeof _.then=="function")return h(d,s,m,ku(_),Y);if(_.$$typeof===Tl)return h(d,s,m,wu(s,_),Y);Iu(s,_)}return null}function D(d,s,m,_){for(var Y=null,ul=null,j=s,W=s=0,tl=null;j!==null&&W<m.length;W++){j.index>W?(tl=j,j=null):tl=j.sibling;var nl=g(d,j,m[W],_);if(nl===null){j===null&&(j=tl);break}l&&j&&nl.alternate===null&&t(d,j),s=n(nl,s,W),ul===null?Y=nl:ul.sibling=nl,ul=nl,j=tl}if(W===m.length)return e(d,j),el&&Bt(d,W),Y;if(j===null){for(;W<m.length;W++)j=E(d,m[W],_),j!==null&&(s=n(j,s,W),ul===null?Y=j:ul.sibling=j,ul=j);return el&&Bt(d,W),Y}for(j=a(j);W<m.length;W++)tl=h(j,d,W,m[W],_),tl!==null&&(l&&tl.alternate!==null&&j.delete(tl.key===null?W:tl.key),s=n(tl,s,W),ul===null?Y=tl:ul.sibling=tl,ul=tl);return l&&j.forEach(function(xe){return t(d,xe)}),el&&Bt(d,W),Y}function B(d,s,m,_){if(m==null)throw Error(o(151));for(var Y=null,ul=null,j=s,W=s=0,tl=null,nl=m.next();j!==null&&!nl.done;W++,nl=m.next()){j.index>W?(tl=j,j=null):tl=j.sibling;var xe=g(d,j,nl.value,_);if(xe===null){j===null&&(j=tl);break}l&&j&&xe.alternate===null&&t(d,j),s=n(xe,s,W),ul===null?Y=xe:ul.sibling=xe,ul=xe,j=tl}if(nl.done)return e(d,j),el&&Bt(d,W),Y;if(j===null){for(;!nl.done;W++,nl=m.next())nl=E(d,nl.value,_),nl!==null&&(s=n(nl,s,W),ul===null?Y=nl:ul.sibling=nl,ul=nl);return el&&Bt(d,W),Y}for(j=a(j);!nl.done;W++,nl=m.next())nl=h(j,d,W,nl.value,_),nl!==null&&(l&&nl.alternate!==null&&j.delete(nl.key===null?W:nl.key),s=n(nl,s,W),ul===null?Y=nl:ul.sibling=nl,ul=nl);return l&&j.forEach(function(uy){return t(d,uy)}),el&&Bt(d,W),Y}function ml(d,s,m,_){if(typeof m=="object"&&m!==null&&m.type===al&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case hl:l:{for(var Y=m.key;s!==null;){if(s.key===Y){if(Y=m.type,Y===al){if(s.tag===7){e(d,s.sibling),_=u(s,m.props.children),_.return=d,d=_;break l}}else if(s.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ml&&He(Y)===s.type){e(d,s.sibling),_=u(s,m.props),Wa(_,m),_.return=d,d=_;break l}e(d,s);break}else t(d,s);s=s.sibling}m.type===al?(_=Re(m.props.children,d.mode,_,m.key),_.return=d,d=_):(_=Vu(m.type,m.key,m.props,null,d.mode,_),Wa(_,m),_.return=d,d=_)}return i(d);case F:l:{for(Y=m.key;s!==null;){if(s.key===Y)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){e(d,s.sibling),_=u(s,m.children||[]),_.return=d,d=_;break l}else{e(d,s);break}else t(d,s);s=s.sibling}_=Ni(m,d.mode,_),_.return=d,d=_}return i(d);case Ml:return m=He(m),ml(d,s,m,_)}if(Nt(m))return D(d,s,m,_);if(Fl(m)){if(Y=Fl(m),typeof Y!="function")throw Error(o(150));return m=Y.call(m),B(d,s,m,_)}if(typeof m.then=="function")return ml(d,s,ku(m),_);if(m.$$typeof===Tl)return ml(d,s,wu(d,m),_);Iu(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(e(d,s.sibling),_=u(s,m),_.return=d,d=_):(e(d,s),_=pi(m,d.mode,_),_.return=d,d=_),i(d)):e(d,s)}return function(d,s,m,_){try{wa=0;var Y=ml(d,s,m,_);return oa=null,Y}catch(j){if(j===sa||j===Fu)throw j;var ul=ct(29,j,null,d.mode);return ul.lanes=_,ul.return=d,ul}finally{}}}var Be=Us(!0),Cs=Us(!1),ne=!1;function Yi(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ie(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function ce(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(il&2)!==0){var u=a.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),a.pending=t,t=Zu(l),hs(l,null,e),t}return Qu(l,a,t,e),Zu(l)}function Fa(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,pf(l,e)}}function Gi(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var u=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,e=e.next}while(e!==null);n===null?u=n=t:n=n.next=t}else u=n=t;e={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Li=!1;function $a(){if(Li){var l=fa;if(l!==null)throw l}}function ka(l,t,e,a){Li=!1;var u=l.updateQueue;ne=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,y=f.next;f.next=null,i===null?n=y:i.next=y,i=f;var b=l.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==i&&(c===null?b.firstBaseUpdate=y:c.next=y,b.lastBaseUpdate=f))}if(n!==null){var E=u.baseState;i=0,b=y=f=null,c=n;do{var g=c.lane&-536870913,h=g!==c.lane;if(h?(ll&g)===g:(a&g)===g){g!==0&&g===ca&&(Li=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var D=l,B=c;g=t;var ml=e;switch(B.tag){case 1:if(D=B.payload,typeof D=="function"){E=D.call(ml,E,g);break l}E=D;break l;case 3:D.flags=D.flags&-65537|128;case 0:if(D=B.payload,g=typeof D=="function"?D.call(ml,E,g):D,g==null)break l;E=H({},E,g);break l;case 2:ne=!0}}g=c.callback,g!==null&&(l.flags|=64,h&&(l.flags|=8192),h=u.callbacks,h===null?u.callbacks=[g]:h.push(g))}else h={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(y=b=h,f=E):b=b.next=h,i|=g;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;h=c,c=h.next,h.next=null,u.lastBaseUpdate=h,u.shared.pending=null}}while(!0);b===null&&(f=E),u.baseState=f,u.firstBaseUpdate=y,u.lastBaseUpdate=b,n===null&&(u.shared.lanes=0),de|=i,l.lanes=i,l.memoizedState=E}}function js(l,t){if(typeof l!="function")throw Error(o(191,l));l.call(t)}function qs(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)js(e[l],t)}var ra=r(null),Pu=r(0);function Hs(l,t){l=Ft,z(Pu,l),z(ra,t),Ft=l|t.baseLanes}function Xi(){z(Pu,Ft),z(ra,ra.current)}function Qi(){Ft=Pu.current,T(ra),T(Pu)}var ft=r(null),Et=null;function fe(l){var t=l.alternate;z(zl,zl.current&1),z(ft,l),Et===null&&(t===null||ra.current!==null||t.memoizedState!==null)&&(Et=l)}function Zi(l){z(zl,zl.current),z(ft,l),Et===null&&(Et=l)}function Ys(l){l.tag===22?(z(zl,zl.current),z(ft,l),Et===null&&(Et=l)):se()}function se(){z(zl,zl.current),z(ft,ft.current)}function st(l){T(ft),Et===l&&(Et=null),T(zl)}var zl=r(0);function ln(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Fc(e)||$c(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,J=null,rl=null,Ul=null,tn=!1,da=!1,Ge=!1,en=0,Ia=0,ma=null,Wd=0;function pl(){throw Error(o(321))}function Vi(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!it(l[e],t[e]))return!1;return!0}function Ki(l,t,e,a,u,n){return Xt=n,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?Eo:ic,Ge=!1,n=e(a,u),Ge=!1,da&&(n=Gs(t,e,a,u)),Bs(l),n}function Bs(l){S.H=tu;var t=rl!==null&&rl.next!==null;if(Xt=0,Ul=rl=J=null,tn=!1,Ia=0,ma=null,t)throw Error(o(300));l===null||Cl||(l=l.dependencies,l!==null&&Ju(l)&&(Cl=!0))}function Gs(l,t,e,a){J=l;var u=0;do{if(da&&(ma=null),Ia=0,da=!1,25<=u)throw Error(o(301));if(u+=1,Ul=rl=null,l.updateQueue!=null){var n=l.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}S.H=xo,n=t(e,a)}while(da);return n}function Fd(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?Pa(t):t,l=l.useState()[0],(rl!==null?rl.memoizedState:null)!==l&&(J.flags|=1024),t}function Ji(){var l=en!==0;return en=0,l}function wi(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function Wi(l){if(tn){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}tn=!1}Xt=0,Ul=rl=J=null,da=!1,Ia=en=0,ma=null}function wl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ul===null?J.memoizedState=Ul=l:Ul=Ul.next=l,Ul}function Ol(){if(rl===null){var l=J.alternate;l=l!==null?l.memoizedState:null}else l=rl.next;var t=Ul===null?J.memoizedState:Ul.next;if(t!==null)Ul=t,rl=l;else{if(l===null)throw J.alternate===null?Error(o(467)):Error(o(310));rl=l,l={memoizedState:rl.memoizedState,baseState:rl.baseState,baseQueue:rl.baseQueue,queue:rl.queue,next:null},Ul===null?J.memoizedState=Ul=l:Ul=Ul.next=l}return Ul}function an(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(l){var t=Ia;return Ia+=1,ma===null&&(ma=[]),l=Ds(ma,l,t),t=J,(Ul===null?t.memoizedState:Ul.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?Eo:ic),l}function un(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Pa(l);if(l.$$typeof===Tl)return Xl(l)}throw Error(o(438,String(l)))}function Fi(l){var t=null,e=J.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=J.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=an(),J.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=pt;return t.index++,e}function Qt(l,t){return typeof t=="function"?t(l):t}function nn(l){var t=Ol();return $i(t,rl,l)}function $i(l,t,e){var a=l.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var u=l.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}t.baseQueue=u=n,a.pending=null}if(n=l.baseState,u===null)l.memoizedState=n;else{t=u.next;var c=i=null,f=null,y=t,b=!1;do{var E=y.lane&-536870913;if(E!==y.lane?(ll&E)===E:(Xt&E)===E){var g=y.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),E===ca&&(b=!0);else if((Xt&g)===g){y=y.next,g===ca&&(b=!0);continue}else E={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=E,i=n):f=f.next=E,J.lanes|=g,de|=g;E=y.action,Ge&&e(n,E),n=y.hasEagerState?y.eagerState:e(n,E)}else g={lane:E,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=g,i=n):f=f.next=g,J.lanes|=E,de|=E;y=y.next}while(y!==null&&y!==t);if(f===null?i=n:f.next=c,!it(n,l.memoizedState)&&(Cl=!0,b&&(e=fa,e!==null)))throw e;l.memoizedState=n,l.baseState=i,l.baseQueue=f,a.lastRenderedState=n}return u===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function ki(l){var t=Ol(),e=t.queue;if(e===null)throw Error(o(311));e.lastRenderedReducer=l;var a=e.dispatch,u=e.pending,n=t.memoizedState;if(u!==null){e.pending=null;var i=u=u.next;do n=l(n,i.action),i=i.next;while(i!==u);it(n,t.memoizedState)||(Cl=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),e.lastRenderedState=n}return[n,a]}function Ls(l,t,e){var a=J,u=Ol(),n=el;if(n){if(e===void 0)throw Error(o(407));e=e()}else e=t();var i=!it((rl||u).memoizedState,e);if(i&&(u.memoizedState=e,Cl=!0),u=u.queue,lc(Zs.bind(null,a,u,l),[l]),u.getSnapshot!==t||i||Ul!==null&&Ul.memoizedState.tag&1){if(a.flags|=2048,ya(9,{destroy:void 0},Qs.bind(null,a,u,e,t),null),gl===null)throw Error(o(349));n||(Xt&127)!==0||Xs(a,t,e)}return e}function Xs(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=J.updateQueue,t===null?(t=an(),J.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function Qs(l,t,e,a){t.value=e,t.getSnapshot=a,Vs(t)&&Ks(l)}function Zs(l,t,e){return e(function(){Vs(t)&&Ks(l)})}function Vs(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!it(l,e)}catch{return!0}}function Ks(l){var t=Me(l,2);t!==null&&et(t,l,2)}function Ii(l){var t=wl();if(typeof l=="function"){var e=l;if(l=e(),Ge){It(!0);try{e()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:l},t}function Js(l,t,e,a){return l.baseState=e,$i(l,rl,typeof a=="function"?a:Qt)}function $d(l,t,e,a,u){if(sn(l))throw Error(o(485));if(l=t.action,l!==null){var n={payload:u,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};S.T!==null?e(!0):n.isTransition=!1,a(n),e=t.pending,e===null?(n.next=t.pending=n,ws(t,n)):(n.next=e.next,t.pending=e.next=n)}}function ws(l,t){var e=t.action,a=t.payload,u=l.state;if(t.isTransition){var n=S.T,i={};S.T=i;try{var c=e(u,a),f=S.S;f!==null&&f(i,c),Ws(l,t,c)}catch(y){Pi(l,t,y)}finally{n!==null&&i.types!==null&&(n.types=i.types),S.T=n}}else try{n=e(u,a),Ws(l,t,n)}catch(y){Pi(l,t,y)}}function Ws(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Fs(l,t,a)},function(a){return Pi(l,t,a)}):Fs(l,t,e)}function Fs(l,t,e){t.status="fulfilled",t.value=e,$s(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,ws(l,e)))}function Pi(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,$s(t),t=t.next;while(t!==a)}l.action=null}function $s(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function ks(l,t){return t}function Is(l,t){if(el){var e=gl.formState;if(e!==null){l:{var a=J;if(el){if(bl){t:{for(var u=bl,n=_t;u.nodeType!==8;){if(!n){u=null;break t}if(u=xt(u.nextSibling),u===null){u=null;break t}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){bl=xt(u.nextSibling),a=u.data==="F!";break l}}ae(a)}a=!1}a&&(t=e[0])}}return e=wl(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},e.queue=a,e=bo.bind(null,J,a),a.dispatch=e,a=Ii(!1),n=nc.bind(null,J,!1,a.queue),a=wl(),u={state:t,dispatch:null,action:l,pending:null},a.queue=u,e=$d.bind(null,J,u,n,e),u.dispatch=e,a.memoizedState=l,[t,e,!1]}function Ps(l){var t=Ol();return lo(t,rl,l)}function lo(l,t,e){if(t=$i(l,t,ks)[0],l=nn(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(i){throw i===sa?Fu:i}else a=t;t=Ol();var u=t.queue,n=u.dispatch;return e!==t.memoizedState&&(J.flags|=2048,ya(9,{destroy:void 0},kd.bind(null,u,e),null)),[a,n,l]}function kd(l,t){l.action=t}function to(l){var t=Ol(),e=rl;if(e!==null)return lo(t,e,l);Ol(),t=t.memoizedState,e=Ol();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function ya(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=J.updateQueue,t===null&&(t=an(),J.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function eo(){return Ol().memoizedState}function cn(l,t,e,a){var u=wl();J.flags|=l,u.memoizedState=ya(1|t,{destroy:void 0},e,a===void 0?null:a)}function fn(l,t,e,a){var u=Ol();a=a===void 0?null:a;var n=u.memoizedState.inst;rl!==null&&a!==null&&Vi(a,rl.memoizedState.deps)?u.memoizedState=ya(t,n,e,a):(J.flags|=l,u.memoizedState=ya(1|t,n,e,a))}function ao(l,t){cn(8390656,8,l,t)}function lc(l,t){fn(2048,8,l,t)}function Id(l){J.flags|=4;var t=J.updateQueue;if(t===null)t=an(),J.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function uo(l){var t=Ol().memoizedState;return Id({ref:t,nextImpl:l}),function(){if((il&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function no(l,t){return fn(4,2,l,t)}function io(l,t){return fn(4,4,l,t)}function co(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function fo(l,t,e){e=e!=null?e.concat([l]):null,fn(4,4,co.bind(null,t,l),e)}function tc(){}function so(l,t){var e=Ol();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&Vi(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function oo(l,t){var e=Ol();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&Vi(t,a[1]))return a[0];if(a=l(),Ge){It(!0);try{l()}finally{It(!1)}}return e.memoizedState=[a,t],a}function ec(l,t,e){return e===void 0||(Xt&1073741824)!==0&&(ll&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=d0(),J.lanes|=l,de|=l,e)}function ro(l,t,e,a){return it(e,t)?e:ra.current!==null?(l=ec(l,e,a),it(l,t)||(Cl=!0),l):(Xt&42)===0||(Xt&1073741824)!==0&&(ll&261930)===0?(Cl=!0,l.memoizedState=e):(l=d0(),J.lanes|=l,de|=l,t)}function mo(l,t,e,a,u){var n=A.p;A.p=n!==0&&8>n?n:8;var i=S.T,c={};S.T=c,nc(l,!1,t,e);try{var f=u(),y=S.S;if(y!==null&&y(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=wd(f,a);lu(l,t,b,dt(l))}else lu(l,t,a,dt(l))}catch(E){lu(l,t,{then:function(){},status:"rejected",reason:E},dt())}finally{A.p=n,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Pd(){}function ac(l,t,e,a){if(l.tag!==5)throw Error(o(476));var u=yo(l).queue;mo(l,u,t,G,e===null?Pd:function(){return go(l),e(a)})}function yo(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:G},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function go(l){var t=yo(l);t.next===null&&(t=l.alternate.memoizedState),lu(l,t.next.queue,{},dt())}function uc(){return Xl(vu)}function ho(){return Ol().memoizedState}function vo(){return Ol().memoizedState}function lm(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=dt();l=ie(e);var a=ce(t,l,e);a!==null&&(et(a,t,e),Fa(a,t,e)),t={cache:Ci()},l.payload=t;return}t=t.return}}function tm(l,t,e){var a=dt();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},sn(l)?So(t,e):(e=xi(l,t,e,a),e!==null&&(et(e,l,a),_o(e,t,a)))}function bo(l,t,e){var a=dt();lu(l,t,e,a)}function lu(l,t,e,a){var u={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(sn(l))So(t,u);else{var n=l.alternate;if(l.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var i=t.lastRenderedState,c=n(i,e);if(u.hasEagerState=!0,u.eagerState=c,it(c,i))return Qu(l,t,u,0),gl===null&&Xu(),!1}catch{}finally{}if(e=xi(l,t,u,a),e!==null)return et(e,l,a),_o(e,t,a),!0}return!1}function nc(l,t,e,a){if(a={lane:2,revertLane:Yc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sn(l)){if(t)throw Error(o(479))}else t=xi(l,e,a,2),t!==null&&et(t,l,2)}function sn(l){var t=l.alternate;return l===J||t!==null&&t===J}function So(l,t){da=tn=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function _o(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,pf(l,e)}}var tu={readContext:Xl,use:un,useCallback:pl,useContext:pl,useEffect:pl,useImperativeHandle:pl,useLayoutEffect:pl,useInsertionEffect:pl,useMemo:pl,useReducer:pl,useRef:pl,useState:pl,useDebugValue:pl,useDeferredValue:pl,useTransition:pl,useSyncExternalStore:pl,useId:pl,useHostTransitionStatus:pl,useFormState:pl,useActionState:pl,useOptimistic:pl,useMemoCache:pl,useCacheRefresh:pl};tu.useEffectEvent=pl;var Eo={readContext:Xl,use:un,useCallback:function(l,t){return wl().memoizedState=[l,t===void 0?null:t],l},useContext:Xl,useEffect:ao,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,cn(4194308,4,co.bind(null,t,l),e)},useLayoutEffect:function(l,t){return cn(4194308,4,l,t)},useInsertionEffect:function(l,t){cn(4,2,l,t)},useMemo:function(l,t){var e=wl();t=t===void 0?null:t;var a=l();if(Ge){It(!0);try{l()}finally{It(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=wl();if(e!==void 0){var u=e(t);if(Ge){It(!0);try{e(t)}finally{It(!1)}}}else u=t;return a.memoizedState=a.baseState=u,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:u},a.queue=l,l=l.dispatch=tm.bind(null,J,l),[a.memoizedState,l]},useRef:function(l){var t=wl();return l={current:l},t.memoizedState=l},useState:function(l){l=Ii(l);var t=l.queue,e=bo.bind(null,J,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:tc,useDeferredValue:function(l,t){var e=wl();return ec(e,l,t)},useTransition:function(){var l=Ii(!1);return l=mo.bind(null,J,l.queue,!0,!1),wl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=J,u=wl();if(el){if(e===void 0)throw Error(o(407));e=e()}else{if(e=t(),gl===null)throw Error(o(349));(ll&127)!==0||Xs(a,t,e)}u.memoizedState=e;var n={value:e,getSnapshot:t};return u.queue=n,ao(Zs.bind(null,a,n,l),[l]),a.flags|=2048,ya(9,{destroy:void 0},Qs.bind(null,a,n,e,t),null),e},useId:function(){var l=wl(),t=gl.identifierPrefix;if(el){var e=Mt,a=Dt;e=(a&~(1<<32-nt(a)-1)).toString(32)+e,t="_"+t+"R_"+e,e=en++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Wd++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:uc,useFormState:Is,useActionState:Is,useOptimistic:function(l){var t=wl();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=nc.bind(null,J,!0,e),e.dispatch=t,[l,t]},useMemoCache:Fi,useCacheRefresh:function(){return wl().memoizedState=lm.bind(null,J)},useEffectEvent:function(l){var t=wl(),e={impl:l};return t.memoizedState=e,function(){if((il&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}},ic={readContext:Xl,use:un,useCallback:so,useContext:Xl,useEffect:lc,useImperativeHandle:fo,useInsertionEffect:no,useLayoutEffect:io,useMemo:oo,useReducer:nn,useRef:eo,useState:function(){return nn(Qt)},useDebugValue:tc,useDeferredValue:function(l,t){var e=Ol();return ro(e,rl.memoizedState,l,t)},useTransition:function(){var l=nn(Qt)[0],t=Ol().memoizedState;return[typeof l=="boolean"?l:Pa(l),t]},useSyncExternalStore:Ls,useId:ho,useHostTransitionStatus:uc,useFormState:Ps,useActionState:Ps,useOptimistic:function(l,t){var e=Ol();return Js(e,rl,l,t)},useMemoCache:Fi,useCacheRefresh:vo};ic.useEffectEvent=uo;var xo={readContext:Xl,use:un,useCallback:so,useContext:Xl,useEffect:lc,useImperativeHandle:fo,useInsertionEffect:no,useLayoutEffect:io,useMemo:oo,useReducer:ki,useRef:eo,useState:function(){return ki(Qt)},useDebugValue:tc,useDeferredValue:function(l,t){var e=Ol();return rl===null?ec(e,l,t):ro(e,rl.memoizedState,l,t)},useTransition:function(){var l=ki(Qt)[0],t=Ol().memoizedState;return[typeof l=="boolean"?l:Pa(l),t]},useSyncExternalStore:Ls,useId:ho,useHostTransitionStatus:uc,useFormState:to,useActionState:to,useOptimistic:function(l,t){var e=Ol();return rl!==null?Js(e,rl,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:Fi,useCacheRefresh:vo};xo.useEffectEvent=uo;function cc(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:H({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var fc={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=dt(),u=ie(a);u.payload=t,e!=null&&(u.callback=e),t=ce(l,u,a),t!==null&&(et(t,l,a),Fa(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=dt(),u=ie(a);u.tag=1,u.payload=t,e!=null&&(u.callback=e),t=ce(l,u,a),t!==null&&(et(t,l,a),Fa(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=dt(),a=ie(e);a.tag=2,t!=null&&(a.callback=t),t=ce(l,a,e),t!==null&&(et(t,l,e),Fa(t,l,e))}};function To(l,t,e,a,u,n,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,n,i):t.prototype&&t.prototype.isPureReactComponent?!Xa(e,a)||!Xa(u,n):!0}function po(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&fc.enqueueReplaceState(t,t.state,null)}function Le(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=H({},e));for(var u in l)e[u]===void 0&&(e[u]=l[u])}return e}function No(l){Lu(l)}function Ao(l){console.error(l)}function zo(l){Lu(l)}function on(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Oo(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sc(l,t,e){return e=ie(e),e.tag=3,e.payload={element:null},e.callback=function(){on(l,t)},e}function Do(l){return l=ie(l),l.tag=3,l}function Mo(l,t,e,a){var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;l.payload=function(){return u(n)},l.callback=function(){Oo(t,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){Oo(t,e,a),typeof u!="function"&&(me===null?me=new Set([this]):me.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function em(l,t,e,a,u){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&ia(t,e,u,!0),e=ft.current,e!==null){switch(e.tag){case 31:case 13:return Et===null?xn():e.alternate===null&&Nl===0&&(Nl=3),e.flags&=-257,e.flags|=65536,e.lanes=u,a===$u?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),jc(l,a,u)),!1;case 22:return e.flags|=65536,a===$u?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),jc(l,a,u)),!1}throw Error(o(435,e.tag))}return jc(l,a,u),xn(),!1}if(el)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,a!==Oi&&(l=Error(o(422),{cause:a}),Va(vt(l,e)))):(a!==Oi&&(t=Error(o(423),{cause:a}),Va(vt(t,e))),l=l.current.alternate,l.flags|=65536,u&=-u,l.lanes|=u,a=vt(a,e),u=sc(l.stateNode,a,u),Gi(l,u),Nl!==4&&(Nl=2)),!1;var n=Error(o(520),{cause:a});if(n=vt(n,e),su===null?su=[n]:su.push(n),Nl!==4&&(Nl=2),t===null)return!0;a=vt(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=u&-u,e.lanes|=l,l=sc(e.stateNode,a,l),Gi(e,l),!1;case 1:if(t=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(me===null||!me.has(n))))return e.flags|=65536,u&=-u,e.lanes|=u,u=Do(u),Mo(u,l,e,a),Gi(e,u),!1}e=e.return}while(e!==null);return!1}var oc=Error(o(461)),Cl=!1;function Ql(l,t,e,a){t.child=l===null?Cs(t,null,e,a):Be(t,l.child,e,a)}function Ro(l,t,e,a,u){e=e.render;var n=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return je(t),a=Ki(l,t,e,i,n,u),c=Ji(),l!==null&&!Cl?(wi(l,t,u),Zt(l,t,u)):(el&&c&&Ai(t),t.flags|=1,Ql(l,t,a,u),t.child)}function Uo(l,t,e,a,u){if(l===null){var n=e.type;return typeof n=="function"&&!Ti(n)&&n.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=n,Co(l,t,n,a,u)):(l=Vu(e.type,null,a,t,t.mode,u),l.ref=t.ref,l.return=t,t.child=l)}if(n=l.child,!bc(l,u)){var i=n.memoizedProps;if(e=e.compare,e=e!==null?e:Xa,e(i,a)&&l.ref===t.ref)return Zt(l,t,u)}return t.flags|=1,l=Yt(n,a),l.ref=t.ref,l.return=t,t.child=l}function Co(l,t,e,a,u){if(l!==null){var n=l.memoizedProps;if(Xa(n,a)&&l.ref===t.ref)if(Cl=!1,t.pendingProps=a=n,bc(l,u))(l.flags&131072)!==0&&(Cl=!0);else return t.lanes=l.lanes,Zt(l,t,u)}return rc(l,t,e,a,u)}function jo(l,t,e,a){var u=a.children,n=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|e:e,l!==null){for(a=t.child=l.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~n}else a=0,t.child=null;return qo(l,t,n,e,a)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Wu(t,n!==null?n.cachePool:null),n!==null?Hs(t,n):Xi(),Ys(t);else return a=t.lanes=536870912,qo(l,t,n!==null?n.baseLanes|e:e,e,a)}else n!==null?(Wu(t,n.cachePool),Hs(t,n),se(),t.memoizedState=null):(l!==null&&Wu(t,null),Xi(),se());return Ql(l,t,u,e),t.child}function eu(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function qo(l,t,e,a,u){var n=qi();return n=n===null?null:{parent:Rl._currentValue,pool:n},t.memoizedState={baseLanes:e,cachePool:n},l!==null&&Wu(t,null),Xi(),Ys(t),l!==null&&ia(l,t,a,!0),t.childLanes=u,null}function rn(l,t){return t=mn({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Ho(l,t,e){return Be(t,l.child,null,e),l=rn(t,t.pendingProps),l.flags|=2,st(t),t.memoizedState=null,l}function am(l,t,e){var a=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(el){if(a.mode==="hidden")return l=rn(t,a),t.lanes=536870912,eu(null,l);if(Zi(t),(l=bl)?(l=W0(l,_t),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:te!==null?{id:Dt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},e=bs(l),e.return=t,t.child=e,Ll=t,bl=null)):l=null,l===null)throw ae(t);return t.lanes=536870912,null}return rn(t,a)}var n=l.memoizedState;if(n!==null){var i=n.dehydrated;if(Zi(t),u)if(t.flags&256)t.flags&=-257,t=Ho(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(o(558));else if(Cl||ia(l,t,e,!1),u=(e&l.childLanes)!==0,Cl||u){if(a=gl,a!==null&&(i=Nf(a,e),i!==0&&i!==n.retryLane))throw n.retryLane=i,Me(l,i),et(a,l,i),oc;xn(),t=Ho(l,t,e)}else l=n.treeContext,bl=xt(i.nextSibling),Ll=t,el=!0,ee=null,_t=!1,l!==null&&Es(t,l),t=rn(t,a),t.flags|=4096;return t}return l=Yt(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function dn(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(o(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function rc(l,t,e,a,u){return je(t),e=Ki(l,t,e,a,void 0,u),a=Ji(),l!==null&&!Cl?(wi(l,t,u),Zt(l,t,u)):(el&&a&&Ai(t),t.flags|=1,Ql(l,t,e,u),t.child)}function Yo(l,t,e,a,u,n){return je(t),t.updateQueue=null,e=Gs(t,a,e,u),Bs(l),a=Ji(),l!==null&&!Cl?(wi(l,t,n),Zt(l,t,n)):(el&&a&&Ai(t),t.flags|=1,Ql(l,t,e,n),t.child)}function Bo(l,t,e,a,u){if(je(t),t.stateNode===null){var n=ea,i=e.contextType;typeof i=="object"&&i!==null&&(n=Xl(i)),n=new e(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=fc,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},Yi(t),i=e.contextType,n.context=typeof i=="object"&&i!==null?Xl(i):ea,n.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(cc(t,e,i,a),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&fc.enqueueReplaceState(n,n.state,null),ka(t,a,n,u),$a(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){n=t.stateNode;var c=t.memoizedProps,f=Le(e,c);n.props=f;var y=n.context,b=e.contextType;i=ea,typeof b=="object"&&b!==null&&(i=Xl(b));var E=e.getDerivedStateFromProps;b=typeof E=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,b||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||y!==i)&&po(t,n,a,i),ne=!1;var g=t.memoizedState;n.state=g,ka(t,a,n,u),$a(),y=t.memoizedState,c||g!==y||ne?(typeof E=="function"&&(cc(t,e,E,a),y=t.memoizedState),(f=ne||To(t,e,f,a,g,y,i))?(b||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),n.props=a,n.state=y,n.context=i,a=f):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,Bi(l,t),i=t.memoizedProps,b=Le(e,i),n.props=b,E=t.pendingProps,g=n.context,y=e.contextType,f=ea,typeof y=="object"&&y!==null&&(f=Xl(y)),c=e.getDerivedStateFromProps,(y=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==E||g!==f)&&po(t,n,a,f),ne=!1,g=t.memoizedState,n.state=g,ka(t,a,n,u),$a();var h=t.memoizedState;i!==E||g!==h||ne||l!==null&&l.dependencies!==null&&Ju(l.dependencies)?(typeof c=="function"&&(cc(t,e,c,a),h=t.memoizedState),(b=ne||To(t,e,b,a,g,h,f)||l!==null&&l.dependencies!==null&&Ju(l.dependencies))?(y||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,h,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,h,f)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&g===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&g===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=h),n.props=a,n.state=h,n.context=f,a=b):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&g===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&g===l.memoizedState||(t.flags|=1024),a=!1)}return n=a,dn(l,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,l!==null&&a?(t.child=Be(t,l.child,null,u),t.child=Be(t,null,e,u)):Ql(l,t,e,u),t.memoizedState=n.state,l=t.child):l=Zt(l,t,u),l}function Go(l,t,e,a){return Ue(),t.flags|=256,Ql(l,t,e,a),t.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(l){return{baseLanes:l,cachePool:zs()}}function yc(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=rt),l}function Lo(l,t,e){var a=t.pendingProps,u=!1,n=(t.flags&128)!==0,i;if((i=n)||(i=l!==null&&l.memoizedState===null?!1:(zl.current&2)!==0),i&&(u=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(el){if(u?fe(t):se(),(l=bl)?(l=W0(l,_t),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:te!==null?{id:Dt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},e=bs(l),e.return=t,t.child=e,Ll=t,bl=null)):l=null,l===null)throw ae(t);return $c(l)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,u?(se(),u=t.mode,c=mn({mode:"hidden",children:c},u),a=Re(a,u,e,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=mc(e),a.childLanes=yc(l,i,e),t.memoizedState=dc,eu(null,a)):(fe(t),gc(t,c))}var f=l.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)t.flags&256?(fe(t),t.flags&=-257,t=hc(l,t,e)):t.memoizedState!==null?(se(),t.child=l.child,t.flags|=128,t=null):(se(),c=a.fallback,u=t.mode,a=mn({mode:"visible",children:a.children},u),c=Re(c,u,e,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Be(t,l.child,null,e),a=t.child,a.memoizedState=mc(e),a.childLanes=yc(l,i,e),t.memoizedState=dc,t=eu(null,a));else if(fe(t),$c(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var y=i.dgst;i=y,a=Error(o(419)),a.stack="",a.digest=i,Va({value:a,source:null,stack:null}),t=hc(l,t,e)}else if(Cl||ia(l,t,e,!1),i=(e&l.childLanes)!==0,Cl||i){if(i=gl,i!==null&&(a=Nf(i,e),a!==0&&a!==f.retryLane))throw f.retryLane=a,Me(l,a),et(i,l,a),oc;Fc(c)||xn(),t=hc(l,t,e)}else Fc(c)?(t.flags|=192,t.child=l.child,t=null):(l=f.treeContext,bl=xt(c.nextSibling),Ll=t,el=!0,ee=null,_t=!1,l!==null&&Es(t,l),t=gc(t,a.children),t.flags|=4096);return t}return u?(se(),c=a.fallback,u=t.mode,f=l.child,y=f.sibling,a=Yt(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,y!==null?c=Yt(y,c):(c=Re(c,u,e,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,eu(null,a),a=t.child,c=l.child.memoizedState,c===null?c=mc(e):(u=c.cachePool,u!==null?(f=Rl._currentValue,u=u.parent!==f?{parent:f,pool:f}:u):u=zs(),c={baseLanes:c.baseLanes|e,cachePool:u}),a.memoizedState=c,a.childLanes=yc(l,i,e),t.memoizedState=dc,eu(l.child,a)):(fe(t),e=l.child,l=e.sibling,e=Yt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=e,t.memoizedState=null,e)}function gc(l,t){return t=mn({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function mn(l,t){return l=ct(22,l,null,t),l.lanes=0,l}function hc(l,t,e){return Be(t,l.child,null,e),l=gc(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Xo(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),Ri(l.return,t,e)}function vc(l,t,e,a,u,n){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:u,treeForkCount:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=u,i.treeForkCount=n)}function Qo(l,t,e){var a=t.pendingProps,u=a.revealOrder,n=a.tail;a=a.children;var i=zl.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,z(zl,i),Ql(l,t,a,e),a=el?Za:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Xo(l,e,t);else if(l.tag===19)Xo(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(u){case"forwards":for(e=t.child,u=null;e!==null;)l=e.alternate,l!==null&&ln(l)===null&&(u=e),e=e.sibling;e=u,e===null?(u=t.child,t.child=null):(u=e.sibling,e.sibling=null),vc(t,!1,u,e,n,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,u=t.child,t.child=null;u!==null;){if(l=u.alternate,l!==null&&ln(l)===null){t.child=u;break}l=u.sibling,u.sibling=e,e=u,u=l}vc(t,!0,e,null,n,a);break;case"together":vc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Zt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),de|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(ia(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(o(153));if(t.child!==null){for(l=t.child,e=Yt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Yt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function bc(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Ju(l)))}function um(l,t,e){switch(t.tag){case 3:Jl(t,t.stateNode.containerInfo),ue(t,Rl,l.memoizedState.cache),Ue();break;case 27:case 5:Oa(t);break;case 4:Jl(t,t.stateNode.containerInfo);break;case 10:ue(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(fe(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Lo(l,t,e):(fe(t),l=Zt(l,t,e),l!==null?l.sibling:null);fe(t);break;case 19:var u=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(ia(l,t,e,!1),a=(e&t.childLanes)!==0),u){if(a)return Qo(l,t,e);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(zl,zl.current),a)break;return null;case 22:return t.lanes=0,jo(l,t,e,t.pendingProps);case 24:ue(t,Rl,l.memoizedState.cache)}return Zt(l,t,e)}function Zo(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)Cl=!0;else{if(!bc(l,e)&&(t.flags&128)===0)return Cl=!1,um(l,t,e);Cl=(l.flags&131072)!==0}else Cl=!1,el&&(t.flags&1048576)!==0&&_s(t,Za,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=He(t.elementType),t.type=l,typeof l=="function")Ti(l)?(a=Le(l,a),t.tag=1,t=Bo(null,t,l,a,e)):(t.tag=0,t=rc(null,t,l,a,e));else{if(l!=null){var u=l.$$typeof;if(u===O){t.tag=11,t=Ro(null,t,l,a,e);break l}else if(u===L){t.tag=14,t=Uo(null,t,l,a,e);break l}}throw t=Ct(l)||l,Error(o(306,t,""))}}return t;case 0:return rc(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,u=Le(a,t.pendingProps),Bo(l,t,a,u,e);case 3:l:{if(Jl(t,t.stateNode.containerInfo),l===null)throw Error(o(387));a=t.pendingProps;var n=t.memoizedState;u=n.element,Bi(l,t),ka(t,a,null,e);var i=t.memoizedState;if(a=i.cache,ue(t,Rl,a),a!==n.cache&&Ui(t,[Rl],e,!0),$a(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Go(l,t,a,e);break l}else if(a!==u){u=vt(Error(o(424)),t),Va(u),t=Go(l,t,a,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(bl=xt(l.firstChild),Ll=t,el=!0,ee=null,_t=!0,e=Cs(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Ue(),a===u){t=Zt(l,t,e);break l}Ql(l,t,a,e)}t=t.child}return t;case 26:return dn(l,t),l===null?(e=lr(t.type,null,t.pendingProps,null))?t.memoizedState=e:el||(e=t.type,l=t.pendingProps,a=Dn(k.current).createElement(e),a[Gl]=t,a[$l]=l,Zl(a,e,l),Yl(a),t.stateNode=a):t.memoizedState=lr(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Oa(t),l===null&&el&&(a=t.stateNode=k0(t.type,t.pendingProps,k.current),Ll=t,_t=!0,u=bl,ve(t.type)?(kc=u,bl=xt(a.firstChild)):bl=u),Ql(l,t,t.pendingProps.children,e),dn(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&el&&((u=a=bl)&&(a=jm(a,t.type,t.pendingProps,_t),a!==null?(t.stateNode=a,Ll=t,bl=xt(a.firstChild),_t=!1,u=!0):u=!1),u||ae(t)),Oa(t),u=t.type,n=t.pendingProps,i=l!==null?l.memoizedProps:null,a=n.children,Jc(u,n)?a=null:i!==null&&Jc(u,i)&&(t.flags|=32),t.memoizedState!==null&&(u=Ki(l,t,Fd,null,null,e),vu._currentValue=u),dn(l,t),Ql(l,t,a,e),t.child;case 6:return l===null&&el&&((l=e=bl)&&(e=qm(e,t.pendingProps,_t),e!==null?(t.stateNode=e,Ll=t,bl=null,l=!0):l=!1),l||ae(t)),null;case 13:return Lo(l,t,e);case 4:return Jl(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=Be(t,null,a,e):Ql(l,t,a,e),t.child;case 11:return Ro(l,t,t.type,t.pendingProps,e);case 7:return Ql(l,t,t.pendingProps,e),t.child;case 8:return Ql(l,t,t.pendingProps.children,e),t.child;case 12:return Ql(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,ue(t,t.type,a.value),Ql(l,t,a.children,e),t.child;case 9:return u=t.type._context,a=t.pendingProps.children,je(t),u=Xl(u),a=a(u),t.flags|=1,Ql(l,t,a,e),t.child;case 14:return Uo(l,t,t.type,t.pendingProps,e);case 15:return Co(l,t,t.type,t.pendingProps,e);case 19:return Qo(l,t,e);case 31:return am(l,t,e);case 22:return jo(l,t,e,t.pendingProps);case 24:return je(t),a=Xl(Rl),l===null?(u=qi(),u===null&&(u=gl,n=Ci(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=e),u=n),t.memoizedState={parent:a,cache:u},Yi(t),ue(t,Rl,u)):((l.lanes&e)!==0&&(Bi(l,t),ka(t,null,null,e),$a()),u=l.memoizedState,n=t.memoizedState,u.parent!==a?(u={parent:a,cache:a},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),ue(t,Rl,a)):(a=n.cache,ue(t,Rl,a),a!==u.cache&&Ui(t,[Rl],e,!0))),Ql(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Vt(l){l.flags|=4}function Sc(l,t,e,a,u){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(u&335544128)===u)if(l.stateNode.complete)l.flags|=8192;else if(h0())l.flags|=8192;else throw Ye=$u,Hi}else l.flags&=-16777217}function Vo(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!nr(t))if(h0())l.flags|=8192;else throw Ye=$u,Hi}function yn(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?xf():536870912,l.lanes|=t,ba|=t)}function au(l,t){if(!el)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function Sl(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=l,u=u.sibling;else for(u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=l,u=u.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function nm(l,t,e){var a=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sl(t),null;case 1:return Sl(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(Rl),Al(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(na(t)?Vt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Di())),Sl(t),null;case 26:var u=t.type,n=t.memoizedState;return l===null?(Vt(t),n!==null?(Sl(t),Vo(t,n)):(Sl(t),Sc(t,u,null,a,e))):n?n!==l.memoizedState?(Vt(t),Sl(t),Vo(t,n)):(Sl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&Vt(t),Sl(t),Sc(t,u,l,a,e)),null;case 27:if(pu(t),e=k.current,u=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Vt(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Sl(t),null}l=C.current,na(t)?xs(t):(l=k0(u,a,e),t.stateNode=l,Vt(t))}return Sl(t),null;case 5:if(pu(t),u=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Vt(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Sl(t),null}if(n=C.current,na(t))xs(t);else{var i=Dn(k.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?i.createElement(u,{is:a.is}):i.createElement(u)}}n[Gl]=t,n[$l]=a;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=n;l:switch(Zl(n,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&Vt(t)}}return Sl(t),Sc(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&Vt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(l=k.current,na(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,u=Ll,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}l[Gl]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||L0(l.nodeValue,e)),l||ae(t,!0)}else l=Dn(l).createTextNode(a),l[Gl]=t,t.stateNode=l}return Sl(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(a=na(t),e!==null){if(l===null){if(!a)throw Error(o(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(557));l[Gl]=t}else Ue(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Sl(t),l=!1}else e=Di(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(st(t),t):(st(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Sl(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(u=na(t),a!==null&&a.dehydrated!==null){if(l===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[Gl]=t}else Ue(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Sl(t),u=!1}else u=Di(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(st(t),t):(st(t),null)}return st(t),(t.flags&128)!==0?(t.lanes=e,t):(e=a!==null,l=l!==null&&l.memoizedState!==null,e&&(a=t.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),yn(t,t.updateQueue),Sl(t),null);case 4:return Al(),l===null&&Xc(t.stateNode.containerInfo),Sl(t),null;case 10:return Lt(t.type),Sl(t),null;case 19:if(T(zl),a=t.memoizedState,a===null)return Sl(t),null;if(u=(t.flags&128)!==0,n=a.rendering,n===null)if(u)au(a,!1);else{if(Nl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(n=ln(l),n!==null){for(t.flags|=128,au(a,!1),l=n.updateQueue,t.updateQueue=l,yn(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)vs(e,l),e=e.sibling;return z(zl,zl.current&1|2),el&&Bt(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&at()>Sn&&(t.flags|=128,u=!0,au(a,!1),t.lanes=4194304)}else{if(!u)if(l=ln(n),l!==null){if(t.flags|=128,u=!0,l=l.updateQueue,t.updateQueue=l,yn(t,l),au(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!el)return Sl(t),null}else 2*at()-a.renderingStartTime>Sn&&e!==536870912&&(t.flags|=128,u=!0,au(a,!1),t.lanes=4194304);a.isBackwards?(n.sibling=t.child,t.child=n):(l=a.last,l!==null?l.sibling=n:t.child=n,a.last=n)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=at(),l.sibling=null,e=zl.current,z(zl,u?e&1|2:e&1),el&&Bt(t,a.treeForkCount),l):(Sl(t),null);case 22:case 23:return st(t),Qi(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(Sl(t),t.subtreeFlags&6&&(t.flags|=8192)):Sl(t),e=t.updateQueue,e!==null&&yn(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&T(qe),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Lt(Rl),Sl(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function im(l,t){switch(zi(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Lt(Rl),Al(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return pu(t),null;case 31:if(t.memoizedState!==null){if(st(t),t.alternate===null)throw Error(o(340));Ue()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(st(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ue()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return T(zl),null;case 4:return Al(),null;case 10:return Lt(t.type),null;case 22:case 23:return st(t),Qi(),l!==null&&T(qe),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Lt(Rl),null;case 25:return null;default:return null}}function Ko(l,t){switch(zi(t),t.tag){case 3:Lt(Rl),Al();break;case 26:case 27:case 5:pu(t);break;case 4:Al();break;case 31:t.memoizedState!==null&&st(t);break;case 13:st(t);break;case 19:T(zl);break;case 10:Lt(t.type);break;case 22:case 23:st(t),Qi(),l!==null&&T(qe);break;case 24:Lt(Rl)}}function uu(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var u=a.next;e=u;do{if((e.tag&l)===l){a=void 0;var n=e.create,i=e.inst;a=n(),i.destroy=a}e=e.next}while(e!==u)}}catch(c){sl(t,t.return,c)}}function oe(l,t,e){try{var a=t.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&l)===l){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=t;var f=e,y=c;try{y()}catch(b){sl(u,f,b)}}}a=a.next}while(a!==n)}}catch(b){sl(t,t.return,b)}}function Jo(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{qs(t,e)}catch(a){sl(l,l.return,a)}}}function wo(l,t,e){e.props=Le(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){sl(l,t,a)}}function nu(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(u){sl(l,t,u)}}function Rt(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(u){sl(l,t,u)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(u){sl(l,t,u)}else e.current=null}function Wo(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(u){sl(l,l.return,u)}}function _c(l,t,e){try{var a=l.stateNode;Om(a,l.type,e,t),a[$l]=t}catch(u){sl(l,l.return,u)}}function Fo(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ve(l.type)||l.tag===4}function Ec(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Fo(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ve(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function xc(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=qt));else if(a!==4&&(a===27&&ve(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(xc(l,t,e),l=l.sibling;l!==null;)xc(l,t,e),l=l.sibling}function gn(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&ve(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(gn(l,t,e),l=l.sibling;l!==null;)gn(l,t,e),l=l.sibling}function $o(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);Zl(t,a,e),t[Gl]=l,t[$l]=e}catch(n){sl(l,l.return,n)}}var Kt=!1,jl=!1,Tc=!1,ko=typeof WeakSet=="function"?WeakSet:Set,Bl=null;function cm(l,t){if(l=l.containerInfo,Vc=Hn,l=fs(l),hi(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break l}var i=0,c=-1,f=-1,y=0,b=0,E=l,g=null;t:for(;;){for(var h;E!==e||u!==0&&E.nodeType!==3||(c=i+u),E!==n||a!==0&&E.nodeType!==3||(f=i+a),E.nodeType===3&&(i+=E.nodeValue.length),(h=E.firstChild)!==null;)g=E,E=h;for(;;){if(E===l)break t;if(g===e&&++y===u&&(c=i),g===n&&++b===a&&(f=i),(h=E.nextSibling)!==null)break;E=g,g=E.parentNode}E=h}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Kc={focusedElem:l,selectionRange:e},Hn=!1,Bl=t;Bl!==null;)if(t=Bl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Bl=l;else for(;Bl!==null;){switch(t=Bl,n=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)u=l[e],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){l=void 0,e=t,u=n.memoizedProps,n=n.memoizedState,a=e.stateNode;try{var D=Le(e.type,u);l=a.getSnapshotBeforeUpdate(D,n),a.__reactInternalSnapshotBeforeUpdate=l}catch(B){sl(e,e.return,B)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)Wc(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Wc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(o(163))}if(l=t.sibling,l!==null){l.return=t.return,Bl=l;break}Bl=t.return}}function Io(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:wt(l,e),a&4&&uu(5,e);break;case 1:if(wt(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(i){sl(e,e.return,i)}else{var u=Le(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(u,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){sl(e,e.return,i)}}a&64&&Jo(e),a&512&&nu(e,e.return);break;case 3:if(wt(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{qs(l,t)}catch(i){sl(e,e.return,i)}}break;case 27:t===null&&a&4&&$o(e);case 26:case 5:wt(l,e),t===null&&a&4&&Wo(e),a&512&&nu(e,e.return);break;case 12:wt(l,e);break;case 31:wt(l,e),a&4&&t0(l,e);break;case 13:wt(l,e),a&4&&e0(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=hm.bind(null,e),Hm(l,e))));break;case 22:if(a=e.memoizedState!==null||Kt,!a){t=t!==null&&t.memoizedState!==null||jl,u=Kt;var n=jl;Kt=a,(jl=t)&&!n?Wt(l,e,(e.subtreeFlags&8772)!==0):wt(l,e),Kt=u,jl=n}break;case 30:break;default:wt(l,e)}}function Po(l){var t=l.alternate;t!==null&&(l.alternate=null,Po(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&Pn(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var El=null,Il=!1;function Jt(l,t,e){for(e=e.child;e!==null;)l0(l,t,e),e=e.sibling}function l0(l,t,e){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Da,e)}catch{}switch(e.tag){case 26:jl||Rt(e,t),Jt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:jl||Rt(e,t);var a=El,u=Il;ve(e.type)&&(El=e.stateNode,Il=!1),Jt(l,t,e),yu(e.stateNode),El=a,Il=u;break;case 5:jl||Rt(e,t);case 6:if(a=El,u=Il,El=null,Jt(l,t,e),El=a,Il=u,El!==null)if(Il)try{(El.nodeType===9?El.body:El.nodeName==="HTML"?El.ownerDocument.body:El).removeChild(e.stateNode)}catch(n){sl(e,t,n)}else try{El.removeChild(e.stateNode)}catch(n){sl(e,t,n)}break;case 18:El!==null&&(Il?(l=El,J0(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),Aa(l)):J0(El,e.stateNode));break;case 4:a=El,u=Il,El=e.stateNode.containerInfo,Il=!0,Jt(l,t,e),El=a,Il=u;break;case 0:case 11:case 14:case 15:oe(2,e,t),jl||oe(4,e,t),Jt(l,t,e);break;case 1:jl||(Rt(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&wo(e,t,a)),Jt(l,t,e);break;case 21:Jt(l,t,e);break;case 22:jl=(a=jl)||e.memoizedState!==null,Jt(l,t,e),jl=a;break;default:Jt(l,t,e)}}function t0(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{Aa(l)}catch(e){sl(t,t.return,e)}}}function e0(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Aa(l)}catch(e){sl(t,t.return,e)}}function fm(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new ko),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new ko),t;default:throw Error(o(435,l.tag))}}function hn(l,t){var e=fm(l);t.forEach(function(a){if(!e.has(a)){e.add(a);var u=vm.bind(null,l,a);a.then(u,u)}})}function Pl(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var u=e[a],n=l,i=t,c=i;l:for(;c!==null;){switch(c.tag){case 27:if(ve(c.type)){El=c.stateNode,Il=!1;break l}break;case 5:El=c.stateNode,Il=!1;break l;case 3:case 4:El=c.stateNode.containerInfo,Il=!0;break l}c=c.return}if(El===null)throw Error(o(160));l0(n,i,u),El=null,Il=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)a0(t,l),t=t.sibling}var zt=null;function a0(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),a&4&&(oe(3,l,l.return),uu(3,l),oe(5,l,l.return));break;case 1:Pl(t,l),lt(l),a&512&&(jl||e===null||Rt(e,e.return)),a&64&&Kt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var u=zt;if(Pl(t,l),lt(l),a&512&&(jl||e===null||Rt(e,e.return)),a&4){var n=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,u=u.ownerDocument||u;t:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ua]||n[Gl]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),Zl(n,a,e),n[Gl]=l,Yl(n),a=n;break l;case"link":var i=ar("link","href",u).get(a+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break t}}n=u.createElement(a),Zl(n,a,e),u.head.appendChild(n);break;case"meta":if(i=ar("meta","content",u).get(a+(e.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break t}}n=u.createElement(a),Zl(n,a,e),u.head.appendChild(n);break;default:throw Error(o(468,a))}n[Gl]=l,Yl(n),a=n}l.stateNode=a}else ur(u,l.type,l.stateNode);else l.stateNode=er(u,a,l.memoizedProps);else n!==a?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,a===null?ur(u,l.type,l.stateNode):er(u,a,l.memoizedProps)):a===null&&l.stateNode!==null&&_c(l,l.memoizedProps,e.memoizedProps)}break;case 27:Pl(t,l),lt(l),a&512&&(jl||e===null||Rt(e,e.return)),e!==null&&a&4&&_c(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Pl(t,l),lt(l),a&512&&(jl||e===null||Rt(e,e.return)),l.flags&32){u=l.stateNode;try{Fe(u,"")}catch(D){sl(l,l.return,D)}}a&4&&l.stateNode!=null&&(u=l.memoizedProps,_c(l,u,e!==null?e.memoizedProps:u)),a&1024&&(Tc=!0);break;case 6:if(Pl(t,l),lt(l),a&4){if(l.stateNode===null)throw Error(o(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(D){sl(l,l.return,D)}}break;case 3:if(Un=null,u=zt,zt=Mn(t.containerInfo),Pl(t,l),zt=u,lt(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch(D){sl(l,l.return,D)}Tc&&(Tc=!1,u0(l));break;case 4:a=zt,zt=Mn(l.stateNode.containerInfo),Pl(t,l),lt(l),zt=a;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,hn(l,a)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(bn=at()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,hn(l,a)));break;case 22:u=l.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,y=Kt,b=jl;if(Kt=y||u,jl=b||f,Pl(t,l),jl=b,Kt=y,lt(l),a&8192)l:for(t=l.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(e===null||f||Kt||jl||Xe(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){f=e=t;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var E=f.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(D){sl(f,f.return,D)}}}else if(t.tag===6){if(e===null){f=t;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(D){sl(f,f.return,D)}}}else if(t.tag===18){if(e===null){f=t;try{var h=f.stateNode;u?w0(h,!0):w0(f.stateNode,!1)}catch(D){sl(f,f.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,hn(l,e))));break;case 19:Pl(t,l),lt(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,hn(l,a)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if(Fo(a)){e=a;break}a=a.return}if(e==null)throw Error(o(160));switch(e.tag){case 27:var u=e.stateNode,n=Ec(l);gn(l,n,u);break;case 5:var i=e.stateNode;e.flags&32&&(Fe(i,""),e.flags&=-33);var c=Ec(l);gn(l,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,y=Ec(l);xc(l,y,f);break;default:throw Error(o(161))}}catch(b){sl(l,l.return,b)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function u0(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;u0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function wt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Io(l,t.alternate,t),t=t.sibling}function Xe(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:oe(4,t,t.return),Xe(t);break;case 1:Rt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&wo(t,t.return,e),Xe(t);break;case 27:yu(t.stateNode);case 26:case 5:Rt(t,t.return),Xe(t);break;case 22:t.memoizedState===null&&Xe(t);break;case 30:Xe(t);break;default:Xe(t)}l=l.sibling}}function Wt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,u=l,n=t,i=n.flags;switch(n.tag){case 0:case 11:case 15:Wt(u,n,e),uu(4,n);break;case 1:if(Wt(u,n,e),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(y){sl(a,a.return,y)}if(a=n,u=a.updateQueue,u!==null){var c=a.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)js(f[u],c)}catch(y){sl(a,a.return,y)}}e&&i&64&&Jo(n),nu(n,n.return);break;case 27:$o(n);case 26:case 5:Wt(u,n,e),e&&a===null&&i&4&&Wo(n),nu(n,n.return);break;case 12:Wt(u,n,e);break;case 31:Wt(u,n,e),e&&i&4&&t0(u,n);break;case 13:Wt(u,n,e),e&&i&4&&e0(u,n);break;case 22:n.memoizedState===null&&Wt(u,n,e),nu(n,n.return);break;case 30:break;default:Wt(u,n,e)}t=t.sibling}}function pc(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&Ka(e))}function Nc(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ka(l))}function Ot(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n0(l,t,e,a),t=t.sibling}function n0(l,t,e,a){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(l,t,e,a),u&2048&&uu(9,t);break;case 1:Ot(l,t,e,a);break;case 3:Ot(l,t,e,a),u&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ka(l)));break;case 12:if(u&2048){Ot(l,t,e,a),l=t.stateNode;try{var n=t.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(f){sl(t,t.return,f)}}else Ot(l,t,e,a);break;case 31:Ot(l,t,e,a);break;case 13:Ot(l,t,e,a);break;case 23:break;case 22:n=t.stateNode,i=t.alternate,t.memoizedState!==null?n._visibility&2?Ot(l,t,e,a):iu(l,t):n._visibility&2?Ot(l,t,e,a):(n._visibility|=2,ga(l,t,e,a,(t.subtreeFlags&10256)!==0||!1)),u&2048&&pc(i,t);break;case 24:Ot(l,t,e,a),u&2048&&Nc(t.alternate,t);break;default:Ot(l,t,e,a)}}function ga(l,t,e,a,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=l,i=t,c=e,f=a,y=i.flags;switch(i.tag){case 0:case 11:case 15:ga(n,i,c,f,u),uu(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?ga(n,i,c,f,u):iu(n,i):(b._visibility|=2,ga(n,i,c,f,u)),u&&y&2048&&pc(i.alternate,i);break;case 24:ga(n,i,c,f,u),u&&y&2048&&Nc(i.alternate,i);break;default:ga(n,i,c,f,u)}t=t.sibling}}function iu(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,u=a.flags;switch(a.tag){case 22:iu(e,a),u&2048&&pc(a.alternate,a);break;case 24:iu(e,a),u&2048&&Nc(a.alternate,a);break;default:iu(e,a)}t=t.sibling}}var cu=8192;function ha(l,t,e){if(l.subtreeFlags&cu)for(l=l.child;l!==null;)i0(l,t,e),l=l.sibling}function i0(l,t,e){switch(l.tag){case 26:ha(l,t,e),l.flags&cu&&l.memoizedState!==null&&Wm(e,zt,l.memoizedState,l.memoizedProps);break;case 5:ha(l,t,e);break;case 3:case 4:var a=zt;zt=Mn(l.stateNode.containerInfo),ha(l,t,e),zt=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=cu,cu=16777216,ha(l,t,e),cu=a):ha(l,t,e));break;default:ha(l,t,e)}}function c0(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function fu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Bl=a,s0(a,l)}c0(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)f0(l),l=l.sibling}function f0(l){switch(l.tag){case 0:case 11:case 15:fu(l),l.flags&2048&&oe(9,l,l.return);break;case 3:fu(l);break;case 12:fu(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,vn(l)):fu(l);break;default:fu(l)}}function vn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Bl=a,s0(a,l)}c0(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:oe(8,t,t.return),vn(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,vn(t));break;default:vn(t)}l=l.sibling}}function s0(l,t){for(;Bl!==null;){var e=Bl;switch(e.tag){case 0:case 11:case 15:oe(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ka(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Bl=a;else l:for(e=l;Bl!==null;){a=Bl;var u=a.sibling,n=a.return;if(Po(a),a===e){Bl=null;break l}if(u!==null){u.return=n,Bl=u;break l}Bl=n}}}var sm={getCacheForType:function(l){var t=Xl(Rl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return Xl(Rl).controller.signal}},om=typeof WeakMap=="function"?WeakMap:Map,il=0,gl=null,I=null,ll=0,fl=0,ot=null,re=!1,va=!1,Ac=!1,Ft=0,Nl=0,de=0,Qe=0,zc=0,rt=0,ba=0,su=null,tt=null,Oc=!1,bn=0,o0=0,Sn=1/0,_n=null,me=null,ql=0,ye=null,Sa=null,$t=0,Dc=0,Mc=null,r0=null,ou=0,Rc=null;function dt(){return(il&2)!==0&&ll!==0?ll&-ll:S.T!==null?Yc():Af()}function d0(){if(rt===0)if((ll&536870912)===0||el){var l=zu;zu<<=1,(zu&3932160)===0&&(zu=262144),rt=l}else rt=536870912;return l=ft.current,l!==null&&(l.flags|=32),rt}function et(l,t,e){(l===gl&&(fl===2||fl===9)||l.cancelPendingCommit!==null)&&(_a(l,0),ge(l,ll,rt,!1)),Ra(l,e),((il&2)===0||l!==gl)&&(l===gl&&((il&2)===0&&(Qe|=e),Nl===4&&ge(l,ll,rt,!1)),Ut(l))}function m0(l,t,e){if((il&6)!==0)throw Error(o(327));var a=!e&&(t&127)===0&&(t&l.expiredLanes)===0||Ma(l,t),u=a?mm(l,t):Cc(l,t,!0),n=a;do{if(u===0){va&&!a&&ge(l,t,0,!1);break}else{if(e=l.current.alternate,n&&!rm(e)){u=Cc(l,t,!1),n=!1;continue}if(u===2){if(n=t,l.errorRecoveryDisabledLanes&n)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var c=l;u=su;var f=c.current.memoizedState.isDehydrated;if(f&&(_a(c,i).flags|=256),i=Cc(c,i,!1),i!==2){if(Ac&&!f){c.errorRecoveryDisabledLanes|=n,Qe|=n,u=4;break l}n=tt,tt=u,n!==null&&(tt===null?tt=n:tt.push.apply(tt,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){_a(l,0),ge(l,t,0,!0);break}l:{switch(a=l,n=u,n){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ge(a,t,rt,!re);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(u=bn+300-at(),10<u)){if(ge(a,t,rt,!re),Du(a,0,!0)!==0)break l;$t=t,a.timeoutHandle=V0(y0.bind(null,a,e,tt,_n,Oc,t,rt,Qe,ba,re,n,"Throttled",-0,0),u);break l}y0(a,e,tt,_n,Oc,t,rt,Qe,ba,re,n,null,-0,0)}}break}while(!0);Ut(l)}function y0(l,t,e,a,u,n,i,c,f,y,b,E,g,h){if(l.timeoutHandle=-1,E=t.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},i0(t,n,E);var D=(n&62914560)===n?bn-at():(n&4194048)===n?o0-at():0;if(D=Fm(E,D),D!==null){$t=n,l.cancelPendingCommit=D(x0.bind(null,l,t,n,e,a,u,i,c,f,b,E,null,g,h)),ge(l,n,i,!y);return}}x0(l,t,n,e,a,u,i,c,f)}function rm(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var u=e[a],n=u.getSnapshot;u=u.value;try{if(!it(n(),u))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ge(l,t,e,a){t&=~zc,t&=~Qe,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var u=t;0<u;){var n=31-nt(u),i=1<<n;a[n]=-1,u&=~i}e!==0&&Tf(l,e,t)}function En(){return(il&6)===0?(ru(0),!1):!0}function Uc(){if(I!==null){if(fl===0)var l=I.return;else l=I,Gt=Ce=null,Wi(l),oa=null,wa=0,l=I;for(;l!==null;)Ko(l.alternate,l),l=l.return;I=null}}function _a(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,Rm(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),$t=0,Uc(),gl=l,I=e=Yt(l.current,null),ll=t,fl=0,ot=null,re=!1,va=Ma(l,t),Ac=!1,ba=rt=zc=Qe=de=Nl=0,tt=su=null,Oc=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var u=31-nt(a),n=1<<u;t|=l[u],a&=~n}return Ft=t,Xu(),e}function g0(l,t){J=null,S.H=tu,t===sa||t===Fu?(t=Ms(),fl=3):t===Hi?(t=Ms(),fl=4):fl=t===oc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,I===null&&(Nl=1,on(l,vt(t,l.current)))}function h0(){var l=ft.current;return l===null?!0:(ll&4194048)===ll?Et===null:(ll&62914560)===ll||(ll&536870912)!==0?l===Et:!1}function v0(){var l=S.H;return S.H=tu,l===null?tu:l}function b0(){var l=S.A;return S.A=sm,l}function xn(){Nl=4,re||(ll&4194048)!==ll&&ft.current!==null||(va=!0),(de&134217727)===0&&(Qe&134217727)===0||gl===null||ge(gl,ll,rt,!1)}function Cc(l,t,e){var a=il;il|=2;var u=v0(),n=b0();(gl!==l||ll!==t)&&(_n=null,_a(l,t)),t=!1;var i=Nl;l:do try{if(fl!==0&&I!==null){var c=I,f=ot;switch(fl){case 8:Uc(),i=6;break l;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var y=fl;if(fl=0,ot=null,Ea(l,c,f,y),e&&va){i=0;break l}break;default:y=fl,fl=0,ot=null,Ea(l,c,f,y)}}dm(),i=Nl;break}catch(b){g0(l,b)}while(!0);return t&&l.shellSuspendCounter++,Gt=Ce=null,il=a,S.H=u,S.A=n,I===null&&(gl=null,ll=0,Xu()),i}function dm(){for(;I!==null;)S0(I)}function mm(l,t){var e=il;il|=2;var a=v0(),u=b0();gl!==l||ll!==t?(_n=null,Sn=at()+500,_a(l,t)):va=Ma(l,t);l:do try{if(fl!==0&&I!==null){t=I;var n=ot;t:switch(fl){case 1:fl=0,ot=null,Ea(l,t,n,1);break;case 2:case 9:if(Os(n)){fl=0,ot=null,_0(t);break}t=function(){fl!==2&&fl!==9||gl!==l||(fl=7),Ut(l)},n.then(t,t);break l;case 3:fl=7;break l;case 4:fl=5;break l;case 7:Os(n)?(fl=0,ot=null,_0(t)):(fl=0,ot=null,Ea(l,t,n,7));break;case 5:var i=null;switch(I.tag){case 26:i=I.memoizedState;case 5:case 27:var c=I;if(i?nr(i):c.stateNode.complete){fl=0,ot=null;var f=c.sibling;if(f!==null)I=f;else{var y=c.return;y!==null?(I=y,Tn(y)):I=null}break t}}fl=0,ot=null,Ea(l,t,n,5);break;case 6:fl=0,ot=null,Ea(l,t,n,6);break;case 8:Uc(),Nl=6;break l;default:throw Error(o(462))}}ym();break}catch(b){g0(l,b)}while(!0);return Gt=Ce=null,S.H=a,S.A=u,il=e,I!==null?0:(gl=null,ll=0,Xu(),Nl)}function ym(){for(;I!==null&&!Yr();)S0(I)}function S0(l){var t=Zo(l.alternate,l,Ft);l.memoizedProps=l.pendingProps,t===null?Tn(l):I=t}function _0(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=Yo(e,t,t.pendingProps,t.type,void 0,ll);break;case 11:t=Yo(e,t,t.pendingProps,t.type.render,t.ref,ll);break;case 5:Wi(t);default:Ko(e,t),t=I=vs(t,Ft),t=Zo(e,t,Ft)}l.memoizedProps=l.pendingProps,t===null?Tn(l):I=t}function Ea(l,t,e,a){Gt=Ce=null,Wi(t),oa=null,wa=0;var u=t.return;try{if(em(l,u,t,e,ll)){Nl=1,on(l,vt(e,l.current)),I=null;return}}catch(n){if(u!==null)throw I=u,n;Nl=1,on(l,vt(e,l.current)),I=null;return}t.flags&32768?(el||a===1?l=!0:va||(ll&536870912)!==0?l=!1:(re=l=!0,(a===2||a===9||a===3||a===6)&&(a=ft.current,a!==null&&a.tag===13&&(a.flags|=16384))),E0(t,l)):Tn(t)}function Tn(l){var t=l;do{if((t.flags&32768)!==0){E0(t,re);return}l=t.return;var e=nm(t.alternate,t,Ft);if(e!==null){I=e;return}if(t=t.sibling,t!==null){I=t;return}I=t=l}while(t!==null);Nl===0&&(Nl=5)}function E0(l,t){do{var e=im(l.alternate,l);if(e!==null){e.flags&=32767,I=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){I=l;return}I=l=e}while(l!==null);Nl=6,I=null}function x0(l,t,e,a,u,n,i,c,f){l.cancelPendingCommit=null;do pn();while(ql!==0);if((il&6)!==0)throw Error(o(327));if(t!==null){if(t===l.current)throw Error(o(177));if(n=t.lanes|t.childLanes,n|=Ei,wr(l,e,n,i,c,f),l===gl&&(I=gl=null,ll=0),Sa=t,ye=l,$t=e,Dc=n,Mc=u,r0=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,bm(Nu,function(){return z0(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,u=A.p,A.p=2,i=il,il|=4;try{cm(l,t,e)}finally{il=i,A.p=u,S.T=a}}ql=1,T0(),p0(),N0()}}function T0(){if(ql===1){ql=0;var l=ye,t=Sa,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var a=A.p;A.p=2;var u=il;il|=4;try{a0(t,l);var n=Kc,i=fs(l.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&cs(c.ownerDocument.documentElement,c)){if(f!==null&&hi(c)){var y=f.start,b=f.end;if(b===void 0&&(b=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(b,c.value.length);else{var E=c.ownerDocument||document,g=E&&E.defaultView||window;if(g.getSelection){var h=g.getSelection(),D=c.textContent.length,B=Math.min(f.start,D),ml=f.end===void 0?B:Math.min(f.end,D);!h.extend&&B>ml&&(i=ml,ml=B,B=i);var d=is(c,B),s=is(c,ml);if(d&&s&&(h.rangeCount!==1||h.anchorNode!==d.node||h.anchorOffset!==d.offset||h.focusNode!==s.node||h.focusOffset!==s.offset)){var m=E.createRange();m.setStart(d.node,d.offset),h.removeAllRanges(),B>ml?(h.addRange(m),h.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),h.addRange(m))}}}}for(E=[],h=c;h=h.parentNode;)h.nodeType===1&&E.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<E.length;c++){var _=E[c];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Hn=!!Vc,Kc=Vc=null}finally{il=u,A.p=a,S.T=e}}l.current=t,ql=2}}function p0(){if(ql===2){ql=0;var l=ye,t=Sa,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var a=A.p;A.p=2;var u=il;il|=4;try{Io(l,t.alternate,t)}finally{il=u,A.p=a,S.T=e}}ql=3}}function N0(){if(ql===4||ql===3){ql=0,Br();var l=ye,t=Sa,e=$t,a=r0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ql=5:(ql=0,Sa=ye=null,A0(l,l.pendingLanes));var u=l.pendingLanes;if(u===0&&(me=null),kn(e),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Da,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,u=A.p,A.p=2,S.T=null;try{for(var n=l.onRecoverableError,i=0;i<a.length;i++){var c=a[i];n(c.value,{componentStack:c.stack})}}finally{S.T=t,A.p=u}}($t&3)!==0&&pn(),Ut(l),u=l.pendingLanes,(e&261930)!==0&&(u&42)!==0?l===Rc?ou++:(ou=0,Rc=l):ou=0,ru(0)}}function A0(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Ka(t)))}function pn(){return T0(),p0(),N0(),z0()}function z0(){if(ql!==5)return!1;var l=ye,t=Dc;Dc=0;var e=kn($t),a=S.T,u=A.p;try{A.p=32>e?32:e,S.T=null,e=Mc,Mc=null;var n=ye,i=$t;if(ql=0,Sa=ye=null,$t=0,(il&6)!==0)throw Error(o(331));var c=il;if(il|=4,f0(n.current),n0(n,n.current,i,e),il=c,ru(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Da,n)}catch{}return!0}finally{A.p=u,S.T=a,A0(l,t)}}function O0(l,t,e){t=vt(e,t),t=sc(l.stateNode,t,2),l=ce(l,t,2),l!==null&&(Ra(l,2),Ut(l))}function sl(l,t,e){if(l.tag===3)O0(l,l,e);else for(;t!==null;){if(t.tag===3){O0(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(me===null||!me.has(a))){l=vt(e,l),e=Do(2),a=ce(t,e,2),a!==null&&(Mo(e,a,t,l),Ra(a,2),Ut(a));break}}t=t.return}}function jc(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new om;var u=new Set;a.set(t,u)}else u=a.get(t),u===void 0&&(u=new Set,a.set(t,u));u.has(e)||(Ac=!0,u.add(e),l=gm.bind(null,l,t,e),t.then(l,l))}function gm(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,gl===l&&(ll&e)===e&&(Nl===4||Nl===3&&(ll&62914560)===ll&&300>at()-bn?(il&2)===0&&_a(l,0):zc|=e,ba===ll&&(ba=0)),Ut(l)}function D0(l,t){t===0&&(t=xf()),l=Me(l,t),l!==null&&(Ra(l,t),Ut(l))}function hm(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),D0(l,e)}function vm(l,t){var e=0;switch(l.tag){case 31:case 13:var a=l.stateNode,u=l.memoizedState;u!==null&&(e=u.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),D0(l,e)}function bm(l,t){return wn(l,t)}var Nn=null,xa=null,qc=!1,An=!1,Hc=!1,he=0;function Ut(l){l!==xa&&l.next===null&&(xa===null?Nn=xa=l:xa=xa.next=l),An=!0,qc||(qc=!0,_m())}function ru(l,t){if(!Hc&&An){Hc=!0;do for(var e=!1,a=Nn;a!==null;){if(l!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-nt(42|l)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,C0(a,n))}else n=ll,n=Du(a,a===gl?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Ma(a,n)||(e=!0,C0(a,n));a=a.next}while(e);Hc=!1}}function Sm(){M0()}function M0(){An=qc=!1;var l=0;he!==0&&Mm()&&(l=he);for(var t=at(),e=null,a=Nn;a!==null;){var u=a.next,n=R0(a,t);n===0?(a.next=null,e===null?Nn=u:e.next=u,u===null&&(xa=e)):(e=a,(l!==0||(n&3)!==0)&&(An=!0)),a=u}ql!==0&&ql!==5||ru(l),he!==0&&(he=0)}function R0(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,u=l.expirationTimes,n=l.pendingLanes&-62914561;0<n;){var i=31-nt(n),c=1<<i,f=u[i];f===-1?((c&e)===0||(c&a)!==0)&&(u[i]=Jr(c,t)):f<=t&&(l.expiredLanes|=c),n&=~c}if(t=gl,e=ll,e=Du(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(fl===2||fl===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&Wn(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||Ma(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&Wn(a),kn(e)){case 2:case 8:e=_f;break;case 32:e=Nu;break;case 268435456:e=Ef;break;default:e=Nu}return a=U0.bind(null,l),e=wn(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&Wn(a),l.callbackPriority=2,l.callbackNode=null,2}function U0(l,t){if(ql!==0&&ql!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(pn()&&l.callbackNode!==e)return null;var a=ll;return a=Du(l,l===gl?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(m0(l,a,t),R0(l,at()),l.callbackNode!=null&&l.callbackNode===e?U0.bind(null,l):null)}function C0(l,t){if(pn())return null;m0(l,t,!0)}function _m(){Um(function(){(il&6)!==0?wn(Sf,Sm):M0()})}function Yc(){if(he===0){var l=ca;l===0&&(l=Au,Au<<=1,(Au&261888)===0&&(Au=256)),he=l}return he}function j0(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Cu(""+l)}function q0(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function Em(l,t,e,a,u){if(t==="submit"&&e&&e.stateNode===u){var n=j0((u[$l]||null).action),i=a.submitter;i&&(t=(t=i[$l]||null)?j0(t.formAction):i.getAttribute("formAction"),t!==null&&(n=t,i=null));var c=new Yu("action","action",null,a,u);l.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(he!==0){var f=i?q0(u,i):new FormData(u);ac(e,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?q0(u,i):new FormData(u),ac(e,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var Bc=0;Bc<_i.length;Bc++){var Gc=_i[Bc],xm=Gc.toLowerCase(),Tm=Gc[0].toUpperCase()+Gc.slice(1);At(xm,"on"+Tm)}At(rs,"onAnimationEnd"),At(ds,"onAnimationIteration"),At(ms,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(Gd,"onTransitionRun"),At(Ld,"onTransitionStart"),At(Xd,"onTransitionCancel"),At(ys,"onTransitionEnd"),we("onMouseEnter",["mouseout","mouseover"]),we("onMouseLeave",["mouseout","mouseover"]),we("onPointerEnter",["pointerout","pointerover"]),we("onPointerLeave",["pointerout","pointerover"]),Ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du));function H0(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],u=a.event;a=a.listeners;l:{var n=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,y=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=y;try{n(u)}catch(b){Lu(b)}u.currentTarget=null,n=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,y=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=y;try{n(u)}catch(b){Lu(b)}u.currentTarget=null,n=f}}}}function P(l,t){var e=t[In];e===void 0&&(e=t[In]=new Set);var a=l+"__bubble";e.has(a)||(Y0(t,l,2,!1),e.add(a))}function Lc(l,t,e){var a=0;t&&(a|=4),Y0(e,l,a,t)}var zn="_reactListening"+Math.random().toString(36).slice(2);function Xc(l){if(!l[zn]){l[zn]=!0,Df.forEach(function(e){e!=="selectionchange"&&(pm.has(e)||Lc(e,!1,l),Lc(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[zn]||(t[zn]=!0,Lc("selectionchange",!1,t))}}function Y0(l,t,e,a){switch(dr(t)){case 2:var u=Im;break;case 8:u=Pm;break;default:u=ef}e=u.bind(null,t,e,l),u=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),a?u!==void 0?l.addEventListener(t,e,{capture:!0,passive:u}):l.addEventListener(t,e,!0):u!==void 0?l.addEventListener(t,e,{passive:u}):l.addEventListener(t,e,!1)}function Qc(l,t,e,a,u){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Ve(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=n=i;continue l}c=c.parentNode}}a=a.return}Xf(function(){var y=n,b=ni(e),E=[];l:{var g=gs.get(l);if(g!==void 0){var h=Yu,D=l;switch(l){case"keypress":if(qu(e)===0)break l;case"keydown":case"keyup":h=vd;break;case"focusin":D="focus",h=ri;break;case"focusout":D="blur",h=ri;break;case"beforeblur":case"afterblur":h=ri;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=_d;break;case rs:case ds:case ms:h=fd;break;case ys:h=xd;break;case"scroll":case"scrollend":h=ad;break;case"wheel":h=pd;break;case"copy":case"cut":case"paste":h=od;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Jf;break;case"toggle":case"beforetoggle":h=Ad}var B=(t&4)!==0,ml=!B&&(l==="scroll"||l==="scrollend"),d=B?g!==null?g+"Capture":null:g;B=[];for(var s=y,m;s!==null;){var _=s;if(m=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||m===null||d===null||(_=ja(s,d),_!=null&&B.push(mu(s,_,m))),ml)break;s=s.return}0<B.length&&(g=new h(g,D,null,e,b),E.push({event:g,listeners:B}))}}if((t&7)===0){l:{if(g=l==="mouseover"||l==="pointerover",h=l==="mouseout"||l==="pointerout",g&&e!==ui&&(D=e.relatedTarget||e.fromElement)&&(Ve(D)||D[Ze]))break l;if((h||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,h?(D=e.relatedTarget||e.toElement,h=y,D=D?Ve(D):null,D!==null&&(ml=Z(D),B=D.tag,D!==ml||B!==5&&B!==27&&B!==6)&&(D=null)):(h=null,D=y),h!==D)){if(B=Vf,_="onMouseLeave",d="onMouseEnter",s="mouse",(l==="pointerout"||l==="pointerover")&&(B=Jf,_="onPointerLeave",d="onPointerEnter",s="pointer"),ml=h==null?g:Ca(h),m=D==null?g:Ca(D),g=new B(_,s+"leave",h,e,b),g.target=ml,g.relatedTarget=m,_=null,Ve(b)===y&&(B=new B(d,s+"enter",D,e,b),B.target=m,B.relatedTarget=ml,_=B),ml=_,h&&D)t:{for(B=Nm,d=h,s=D,m=0,_=d;_;_=B(_))m++;_=0;for(var Y=s;Y;Y=B(Y))_++;for(;0<m-_;)d=B(d),m--;for(;0<_-m;)s=B(s),_--;for(;m--;){if(d===s||s!==null&&d===s.alternate){B=d;break t}d=B(d),s=B(s)}B=null}else B=null;h!==null&&B0(E,g,h,B,!1),D!==null&&ml!==null&&B0(E,ml,D,B,!0)}}l:{if(g=y?Ca(y):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var ul=ls;else if(If(g))if(ts)ul=Hd;else{ul=jd;var j=Cd}else h=g.nodeName,!h||h.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?y&&ai(y.elementType)&&(ul=ls):ul=qd;if(ul&&(ul=ul(l,y))){Pf(E,ul,e,b);break l}j&&j(l,g,y),l==="focusout"&&y&&g.type==="number"&&y.memoizedProps.value!=null&&ei(g,"number",g.value)}switch(j=y?Ca(y):window,l){case"focusin":(If(j)||j.contentEditable==="true")&&(Pe=j,vi=y,Qa=null);break;case"focusout":Qa=vi=Pe=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,ss(E,e,b);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":ss(E,e,b)}var W;if(mi)l:{switch(l){case"compositionstart":var tl="onCompositionStart";break l;case"compositionend":tl="onCompositionEnd";break l;case"compositionupdate":tl="onCompositionUpdate";break l}tl=void 0}else Ie?$f(l,e)&&(tl="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(tl="onCompositionStart");tl&&(wf&&e.locale!=="ko"&&(Ie||tl!=="onCompositionStart"?tl==="onCompositionEnd"&&Ie&&(W=Qf()):(le=b,fi="value"in le?le.value:le.textContent,Ie=!0)),j=On(y,tl),0<j.length&&(tl=new Kf(tl,l,null,e,b),E.push({event:tl,listeners:j}),W?tl.data=W:(W=kf(e),W!==null&&(tl.data=W)))),(W=Od?Dd(l,e):Md(l,e))&&(tl=On(y,"onBeforeInput"),0<tl.length&&(j=new Kf("onBeforeInput","beforeinput",null,e,b),E.push({event:j,listeners:tl}),j.data=W)),Em(E,l,y,e,b)}H0(E,t)})}function mu(l,t,e){return{instance:l,listener:t,currentTarget:e}}function On(l,t){for(var e=t+"Capture",a=[];l!==null;){var u=l,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=ja(l,e),u!=null&&a.unshift(mu(l,u,n)),u=ja(l,t),u!=null&&a.push(mu(l,u,n))),l.tag===3)return a;l=l.return}return[]}function Nm(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function B0(l,t,e,a,u){for(var n=t._reactName,i=[];e!==null&&e!==a;){var c=e,f=c.alternate,y=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||y===null||(f=y,u?(y=ja(e,n),y!=null&&i.unshift(mu(e,y,f))):u||(y=ja(e,n),y!=null&&i.push(mu(e,y,f)))),e=e.return}i.length!==0&&l.push({event:t,listeners:i})}var Am=/\r\n?/g,zm=/\u0000|\uFFFD/g;function G0(l){return(typeof l=="string"?l:""+l).replace(Am,`
`).replace(zm,"")}function L0(l,t){return t=G0(t),G0(l)===t}function dl(l,t,e,a,u,n){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fe(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fe(l,""+a);break;case"className":Ru(l,"class",a);break;case"tabIndex":Ru(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ru(l,e,a);break;case"style":Gf(l,a,n);break;case"data":if(t!=="object"){Ru(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Cu(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(t!=="input"&&dl(l,t,"name",u.name,u,null),dl(l,t,"formEncType",u.formEncType,u,null),dl(l,t,"formMethod",u.formMethod,u,null),dl(l,t,"formTarget",u.formTarget,u,null)):(dl(l,t,"encType",u.encType,u,null),dl(l,t,"method",u.method,u,null),dl(l,t,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Cu(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=qt);break;case"onScroll":a!=null&&P("scroll",l);break;case"onScrollEnd":a!=null&&P("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(o(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=Cu(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":P("beforetoggle",l),P("toggle",l),Mu(l,"popover",a);break;case"xlinkActuate":jt(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":jt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":jt(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":jt(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":jt(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":jt(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":jt(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":jt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":jt(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mu(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=td.get(e)||e,Mu(l,e,a))}}function Zc(l,t,e,a,u,n){switch(e){case"style":Gf(l,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(o(60));l.innerHTML=e}}break;case"children":typeof a=="string"?Fe(l,a):(typeof a=="number"||typeof a=="bigint")&&Fe(l,""+a);break;case"onScroll":a!=null&&P("scroll",l);break;case"onScrollEnd":a!=null&&P("scrollend",l);break;case"onClick":a!=null&&(l.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mf.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(u=e.endsWith("Capture"),t=e.slice(2,u?e.length-7:void 0),n=l[$l]||null,n=n!=null?n[e]:null,typeof n=="function"&&l.removeEventListener(t,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,u);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):Mu(l,e,a)}}}function Zl(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":P("error",l),P("load",l);var a=!1,u=!1,n;for(n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dl(l,t,n,i,e,null)}}u&&dl(l,t,"srcSet",e.srcSet,e,null),a&&dl(l,t,"src",e.src,e,null);return;case"input":P("invalid",l);var c=n=i=u=null,f=null,y=null;for(a in e)if(e.hasOwnProperty(a)){var b=e[a];if(b!=null)switch(a){case"name":u=b;break;case"type":i=b;break;case"checked":f=b;break;case"defaultChecked":y=b;break;case"value":n=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(137,t));break;default:dl(l,t,a,b,e,null)}}qf(l,n,c,f,y,i,u,!1);return;case"select":P("invalid",l),a=i=n=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:dl(l,t,u,c,e,null)}t=n,e=i,l.multiple=!!a,t!=null?We(l,!!a,t,!1):e!=null&&We(l,!!a,e,!0);return;case"textarea":P("invalid",l),n=u=a=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:dl(l,t,i,c,e,null)}Yf(l,a,u,n);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(a=e[f],a!=null))switch(f){case"selected":l.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:dl(l,t,f,a,e,null)}return;case"dialog":P("beforetoggle",l),P("toggle",l),P("cancel",l),P("close",l);break;case"iframe":case"object":P("load",l);break;case"video":case"audio":for(a=0;a<du.length;a++)P(du[a],l);break;case"image":P("error",l),P("load",l);break;case"details":P("toggle",l);break;case"embed":case"source":case"link":P("error",l),P("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in e)if(e.hasOwnProperty(y)&&(a=e[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dl(l,t,y,a,e,null)}return;default:if(ai(t)){for(b in e)e.hasOwnProperty(b)&&(a=e[b],a!==void 0&&Zc(l,t,b,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&dl(l,t,c,a,e,null))}function Om(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,y=null,b=null;for(h in e){var E=e[h];if(e.hasOwnProperty(h)&&E!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":f=E;default:a.hasOwnProperty(h)||dl(l,t,h,null,a,E)}}for(var g in a){var h=a[g];if(E=e[g],a.hasOwnProperty(g)&&(h!=null||E!=null))switch(g){case"type":n=h;break;case"name":u=h;break;case"checked":y=h;break;case"defaultChecked":b=h;break;case"value":i=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(137,t));break;default:h!==E&&dl(l,t,g,h,a,E)}}ti(l,i,c,f,y,b,n,u);return;case"select":h=i=c=g=null;for(n in e)if(f=e[n],e.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":h=f;default:a.hasOwnProperty(n)||dl(l,t,n,null,a,f)}for(u in a)if(n=a[u],f=e[u],a.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":g=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&dl(l,t,u,n,a,f)}t=c,e=i,a=h,g!=null?We(l,!!e,g,!1):!!a!=!!e&&(t!=null?We(l,!!e,t,!0):We(l,!!e,e?[]:"",!1));return;case"textarea":h=g=null;for(c in e)if(u=e[c],e.hasOwnProperty(c)&&u!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:dl(l,t,c,null,a,u)}for(i in a)if(u=a[i],n=e[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":g=u;break;case"defaultValue":h=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==n&&dl(l,t,i,u,a,n)}Hf(l,g,h);return;case"option":for(var D in e)if(g=e[D],e.hasOwnProperty(D)&&g!=null&&!a.hasOwnProperty(D))switch(D){case"selected":l.selected=!1;break;default:dl(l,t,D,null,a,g)}for(f in a)if(g=a[f],h=e[f],a.hasOwnProperty(f)&&g!==h&&(g!=null||h!=null))switch(f){case"selected":l.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:dl(l,t,f,g,a,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in e)g=e[B],e.hasOwnProperty(B)&&g!=null&&!a.hasOwnProperty(B)&&dl(l,t,B,null,a,g);for(y in a)if(g=a[y],h=e[y],a.hasOwnProperty(y)&&g!==h&&(g!=null||h!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(137,t));break;default:dl(l,t,y,g,a,h)}return;default:if(ai(t)){for(var ml in e)g=e[ml],e.hasOwnProperty(ml)&&g!==void 0&&!a.hasOwnProperty(ml)&&Zc(l,t,ml,void 0,a,g);for(b in a)g=a[b],h=e[b],!a.hasOwnProperty(b)||g===h||g===void 0&&h===void 0||Zc(l,t,b,g,a,h);return}}for(var d in e)g=e[d],e.hasOwnProperty(d)&&g!=null&&!a.hasOwnProperty(d)&&dl(l,t,d,null,a,g);for(E in a)g=a[E],h=e[E],!a.hasOwnProperty(E)||g===h||g==null&&h==null||dl(l,t,E,g,a,h)}function X0(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dm(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var u=e[a],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&X0(i)){for(i=0,c=u.responseEnd,a+=1;a<e.length;a++){var f=e[a],y=f.startTime;if(y>c)break;var b=f.transferSize,E=f.initiatorType;b&&X0(E)&&(f=f.responseEnd,i+=b*(f<c?1:(c-y)/(f-y)))}if(--a,t+=8*(n+i)/(u.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Vc=null,Kc=null;function Dn(l){return l.nodeType===9?l:l.ownerDocument}function Q0(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Jc(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wc=null;function Mm(){var l=window.event;return l&&l.type==="popstate"?l===wc?!1:(wc=l,!0):(wc=null,!1)}var V0=typeof setTimeout=="function"?setTimeout:void 0,Rm=typeof clearTimeout=="function"?clearTimeout:void 0,K0=typeof Promise=="function"?Promise:void 0,Um=typeof queueMicrotask=="function"?queueMicrotask:typeof K0<"u"?function(l){return K0.resolve(null).then(l).catch(Cm)}:V0;function Cm(l){setTimeout(function(){throw l})}function ve(l){return l==="head"}function J0(l,t){var e=t,a=0;do{var u=e.nextSibling;if(l.removeChild(e),u&&u.nodeType===8)if(e=u.data,e==="/$"||e==="/&"){if(a===0){l.removeChild(u),Aa(t);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")yu(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,yu(e);for(var n=e.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||e.removeChild(n),n=i}}else e==="body"&&yu(l.ownerDocument.body);e=u}while(e);Aa(t)}function w0(l,t){var e=l;l=0;do{var a=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=a}while(e)}function Wc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Wc(e),Pn(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function jm(l,t,e,a){for(;l.nodeType===1;){var u=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[Ua])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(n=l.getAttribute("rel"),n==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(n!==u.rel||l.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||l.getAttribute("title")!==(u.title==null?null:u.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(n=l.getAttribute("src"),(n!==(u.src==null?null:u.src)||l.getAttribute("type")!==(u.type==null?null:u.type)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&l.getAttribute("name")===n)return l}else return l;if(l=xt(l.nextSibling),l===null)break}return null}function qm(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=xt(l.nextSibling),l===null))return null;return l}function W0(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=xt(l.nextSibling),l===null))return null;return l}function Fc(l){return l.data==="$?"||l.data==="$~"}function $c(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Hm(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function xt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var kc=null;function F0(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return xt(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function $0(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function k0(l,t,e){switch(t=Dn(e),l){case"html":if(l=t.documentElement,!l)throw Error(o(452));return l;case"head":if(l=t.head,!l)throw Error(o(453));return l;case"body":if(l=t.body,!l)throw Error(o(454));return l;default:throw Error(o(451))}}function yu(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);Pn(l)}var Tt=new Map,I0=new Set;function Mn(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var kt=A.d;A.d={f:Ym,r:Bm,D:Gm,C:Lm,L:Xm,m:Qm,X:Vm,S:Zm,M:Km};function Ym(){var l=kt.f(),t=En();return l||t}function Bm(l){var t=Ke(l);t!==null&&t.tag===5&&t.type==="form"?go(t):kt.r(l)}var Ta=typeof document>"u"?null:document;function P0(l,t,e){var a=Ta;if(a&&typeof t=="string"&&t){var u=gt(t);u='link[rel="'+l+'"][href="'+u+'"]',typeof e=="string"&&(u+='[crossorigin="'+e+'"]'),I0.has(u)||(I0.add(u),l={rel:l,crossOrigin:e,href:t},a.querySelector(u)===null&&(t=a.createElement("link"),Zl(t,"link",l),Yl(t),a.head.appendChild(t)))}}function Gm(l){kt.D(l),P0("dns-prefetch",l,null)}function Lm(l,t){kt.C(l,t),P0("preconnect",l,t)}function Xm(l,t,e){kt.L(l,t,e);var a=Ta;if(a&&l&&t){var u='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&e&&e.imageSrcSet?(u+='[imagesrcset="'+gt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(u+='[imagesizes="'+gt(e.imageSizes)+'"]')):u+='[href="'+gt(l)+'"]';var n=u;switch(t){case"style":n=pa(l);break;case"script":n=Na(l)}Tt.has(n)||(l=H({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),Tt.set(n,l),a.querySelector(u)!==null||t==="style"&&a.querySelector(gu(n))||t==="script"&&a.querySelector(hu(n))||(t=a.createElement("link"),Zl(t,"link",l),Yl(t),a.head.appendChild(t)))}}function Qm(l,t){kt.m(l,t);var e=Ta;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+gt(a)+'"][href="'+gt(l)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Na(l)}if(!Tt.has(n)&&(l=H({rel:"modulepreload",href:l},t),Tt.set(n,l),e.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(hu(n)))return}a=e.createElement("link"),Zl(a,"link",l),Yl(a),e.head.appendChild(a)}}}function Zm(l,t,e){kt.S(l,t,e);var a=Ta;if(a&&l){var u=Je(a).hoistableStyles,n=pa(l);t=t||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(gu(n)))c.loading=5;else{l=H({rel:"stylesheet",href:l,"data-precedence":t},e),(e=Tt.get(n))&&Ic(l,e);var f=i=a.createElement("link");Yl(f),Zl(f,"link",l),f._p=new Promise(function(y,b){f.onload=y,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Rn(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function Vm(l,t){kt.X(l,t);var e=Ta;if(e&&l){var a=Je(e).hoistableScripts,u=Na(l),n=a.get(u);n||(n=e.querySelector(hu(u)),n||(l=H({src:l,async:!0},t),(t=Tt.get(u))&&Pc(l,t),n=e.createElement("script"),Yl(n),Zl(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function Km(l,t){kt.M(l,t);var e=Ta;if(e&&l){var a=Je(e).hoistableScripts,u=Na(l),n=a.get(u);n||(n=e.querySelector(hu(u)),n||(l=H({src:l,async:!0,type:"module"},t),(t=Tt.get(u))&&Pc(l,t),n=e.createElement("script"),Yl(n),Zl(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function lr(l,t,e,a){var u=(u=k.current)?Mn(u):null;if(!u)throw Error(o(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=pa(e.href),e=Je(u).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=pa(e.href);var n=Je(u).hoistableStyles,i=n.get(l);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(l,i),(n=u.querySelector(gu(l)))&&!n._p&&(i.instance=n,i.state.loading=5),Tt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Tt.set(l,e),n||Jm(u,l,e,i.state))),t&&a===null)throw Error(o(528,""));return i}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Na(e),e=Je(u).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,l))}}function pa(l){return'href="'+gt(l)+'"'}function gu(l){return'link[rel="stylesheet"]['+l+"]"}function tr(l){return H({},l,{"data-precedence":l.precedence,precedence:null})}function Jm(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Zl(t,"link",e),Yl(t),l.head.appendChild(t))}function Na(l){return'[src="'+gt(l)+'"]'}function hu(l){return"script[async]"+l}function er(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+gt(e.href)+'"]');if(a)return t.instance=a,Yl(a),a;var u=H({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),Yl(a),Zl(a,"style",u),Rn(a,e.precedence,l),t.instance=a;case"stylesheet":u=pa(e.href);var n=l.querySelector(gu(u));if(n)return t.state.loading|=4,t.instance=n,Yl(n),n;a=tr(e),(u=Tt.get(u))&&Ic(a,u),n=(l.ownerDocument||l).createElement("link"),Yl(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Zl(n,"link",a),t.state.loading|=4,Rn(n,e.precedence,l),t.instance=n;case"script":return n=Na(e.src),(u=l.querySelector(hu(n)))?(t.instance=u,Yl(u),u):(a=e,(u=Tt.get(n))&&(a=H({},e),Pc(a,u)),l=l.ownerDocument||l,u=l.createElement("script"),Yl(u),Zl(u,"link",a),l.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Rn(a,e.precedence,l));return t.instance}function Rn(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(l,n.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function Ic(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function Pc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Un=null;function ar(l,t,e){if(Un===null){var a=new Map,u=Un=new Map;u.set(e,a)}else u=Un,a=u.get(e),a||(a=new Map,u.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),u=0;u<e.length;u++){var n=e[u];if(!(n[Ua]||n[Gl]||l==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(t)||"";i=l+i;var c=a.get(i);c?c.push(n):a.set(i,[n])}}return a}function ur(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function wm(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nr(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Wm(l,t,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=pa(a.href),n=t.querySelector(gu(u));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Cn.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=n,Yl(n);return}n=t.ownerDocument||t,a=tr(a),(u=Tt.get(u))&&Ic(a,u),n=n.createElement("link"),Yl(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Zl(n,"link",a),e.instance=n}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=Cn.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var lf=0;function Fm(l,t){return l.stylesheets&&l.count===0&&qn(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var a=setTimeout(function(){if(l.stylesheets&&qn(l,l.stylesheets),l.unsuspend){var n=l.unsuspend;l.unsuspend=null,n()}},6e4+t);0<l.imgBytes&&lf===0&&(lf=62500*Dm());var u=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&qn(l,l.stylesheets),l.unsuspend)){var n=l.unsuspend;l.unsuspend=null,n()}},(l.imgBytes>lf?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function Cn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qn(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var jn=null;function qn(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,jn=new Map,t.forEach($m,l),jn=null,Cn.call(l))}function $m(l,t){if(!(t.state.loading&4)){var e=jn.get(l);if(e)var a=e.get(null);else{e=new Map,jn.set(l,e);for(var u=l.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}u=t.instance,i=u.getAttribute("data-precedence"),n=e.get(i)||a,n===a&&e.set(null,u),e.set(i,u),this.count++,a=Cn.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(u,l.firstChild)),t.state.loading|=4}}var vu={$$typeof:Tl,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function km(l,t,e,a,u,n,i,c,f){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fn(0),this.hiddenUpdates=Fn(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ir(l,t,e,a,u,n,i,c,f,y,b,E){return l=new km(l,t,e,i,f,y,b,E,c),t=1,n===!0&&(t|=24),n=ct(3,null,null,t),l.current=n,n.stateNode=l,t=Ci(),t.refCount++,l.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:e,cache:t},Yi(n),l}function cr(l){return l?(l=ea,l):ea}function fr(l,t,e,a,u,n){u=cr(u),a.context===null?a.context=u:a.pendingContext=u,a=ie(t),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=ce(l,a,t),e!==null&&(et(e,l,t),Fa(e,l,t))}function sr(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function tf(l,t){sr(l,t),(l=l.alternate)&&sr(l,t)}function or(l){if(l.tag===13||l.tag===31){var t=Me(l,67108864);t!==null&&et(t,l,67108864),tf(l,67108864)}}function rr(l){if(l.tag===13||l.tag===31){var t=dt();t=$n(t);var e=Me(l,t);e!==null&&et(e,l,t),tf(l,t)}}var Hn=!0;function Im(l,t,e,a){var u=S.T;S.T=null;var n=A.p;try{A.p=2,ef(l,t,e,a)}finally{A.p=n,S.T=u}}function Pm(l,t,e,a){var u=S.T;S.T=null;var n=A.p;try{A.p=8,ef(l,t,e,a)}finally{A.p=n,S.T=u}}function ef(l,t,e,a){if(Hn){var u=af(a);if(u===null)Qc(l,t,a,Yn,e),mr(l,a);else if(ty(u,l,t,e,a))a.stopPropagation();else if(mr(l,a),t&4&&-1<ly.indexOf(l)){for(;u!==null;){var n=Ke(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=Ne(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-nt(i);c.entanglements[1]|=f,i&=~f}Ut(n),(il&6)===0&&(Sn=at()+500,ru(0))}}break;case 31:case 13:c=Me(n,2),c!==null&&et(c,n,2),En(),tf(n,2)}if(n=af(a),n===null&&Qc(l,t,a,Yn,e),n===u)break;u=n}u!==null&&a.stopPropagation()}else Qc(l,t,a,null,e)}}function af(l){return l=ni(l),uf(l)}var Yn=null;function uf(l){if(Yn=null,l=Ve(l),l!==null){var t=Z(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=$(t),l!==null)return l;l=null}else if(e===31){if(l=_l(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Yn=l,null}function dr(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gr()){case Sf:return 2;case _f:return 8;case Nu:case Lr:return 32;case Ef:return 268435456;default:return 32}default:return 32}}var nf=!1,be=null,Se=null,_e=null,bu=new Map,Su=new Map,Ee=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mr(l,t){switch(l){case"focusin":case"focusout":be=null;break;case"dragenter":case"dragleave":Se=null;break;case"mouseover":case"mouseout":_e=null;break;case"pointerover":case"pointerout":bu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Su.delete(t.pointerId)}}function _u(l,t,e,a,u,n){return l===null||l.nativeEvent!==n?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},t!==null&&(t=Ke(t),t!==null&&or(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),l)}function ty(l,t,e,a,u){switch(t){case"focusin":return be=_u(be,l,t,e,a,u),!0;case"dragenter":return Se=_u(Se,l,t,e,a,u),!0;case"mouseover":return _e=_u(_e,l,t,e,a,u),!0;case"pointerover":var n=u.pointerId;return bu.set(n,_u(bu.get(n)||null,l,t,e,a,u)),!0;case"gotpointercapture":return n=u.pointerId,Su.set(n,_u(Su.get(n)||null,l,t,e,a,u)),!0}return!1}function yr(l){var t=Ve(l.target);if(t!==null){var e=Z(t);if(e!==null){if(t=e.tag,t===13){if(t=$(e),t!==null){l.blockedOn=t,zf(l.priority,function(){rr(e)});return}}else if(t===31){if(t=_l(e),t!==null){l.blockedOn=t,zf(l.priority,function(){rr(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Bn(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=af(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);ui=a,e.target.dispatchEvent(a),ui=null}else return t=Ke(e),t!==null&&or(t),l.blockedOn=e,!1;t.shift()}return!0}function gr(l,t,e){Bn(l)&&e.delete(t)}function ey(){nf=!1,be!==null&&Bn(be)&&(be=null),Se!==null&&Bn(Se)&&(Se=null),_e!==null&&Bn(_e)&&(_e=null),bu.forEach(gr),Su.forEach(gr)}function Gn(l,t){l.blockedOn===t&&(l.blockedOn=null,nf||(nf=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,ey)))}var Ln=null;function hr(l){Ln!==l&&(Ln=l,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Ln===l&&(Ln=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],u=l[t+2];if(typeof a!="function"){if(uf(a||e)===null)continue;break}var n=Ke(e);n!==null&&(l.splice(t,3),t-=3,ac(n,{pending:!0,data:u,method:e.method,action:a},a,u))}}))}function Aa(l){function t(f){return Gn(f,l)}be!==null&&Gn(be,l),Se!==null&&Gn(Se,l),_e!==null&&Gn(_e,l),bu.forEach(t),Su.forEach(t);for(var e=0;e<Ee.length;e++){var a=Ee[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<Ee.length&&(e=Ee[0],e.blockedOn===null);)yr(e),e.blockedOn===null&&Ee.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var u=e[a],n=e[a+1],i=u[$l]||null;if(typeof n=="function")i||hr(e);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[$l]||null)c=i.formAction;else if(uf(u)!==null)continue}else c=i.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),hr(e)}}}function vr(){function l(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function cf(l){this._internalRoot=l}Xn.prototype.render=cf.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(o(409));var e=t.current,a=dt();fr(e,a,l,t,null,null)},Xn.prototype.unmount=cf.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;fr(l.current,2,null,l,null,null),En(),t[Ze]=null}};function Xn(l){this._internalRoot=l}Xn.prototype.unstable_scheduleHydration=function(l){if(l){var t=Af();l={blockedOn:null,target:l,priority:t};for(var e=0;e<Ee.length&&t!==0&&t<Ee[e].priority;e++);Ee.splice(e,0,l),e===0&&yr(l)}};var br=M.version;if(br!=="19.2.1")throw Error(o(527,br,"19.2.1"));A.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(o(188)):(l=Object.keys(l).join(","),Error(o(268,l)));return l=p(t),l=l!==null?X(l):null,l=l===null?null:l.stateNode,l};var ay={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qn.isDisabled&&Qn.supportsFiber)try{Da=Qn.inject(ay),ut=Qn}catch{}}return xu.createRoot=function(l,t){if(!q(l))throw Error(o(299));var e=!1,a="",u=No,n=Ao,i=zo;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ir(l,1,!1,null,null,e,a,null,u,n,i,vr),l[Ze]=t.current,Xc(l),new cf(t)},xu.hydrateRoot=function(l,t,e){if(!q(l))throw Error(o(299));var a=!1,u="",n=No,i=Ao,c=zo,f=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(u=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),t=ir(l,1,!0,t,e??null,a,u,f,n,i,c,vr),t.context=cr(null),e=t.current,a=dt(),a=$n(a),u=ie(a),u.callback=null,ce(e,u,a),e=a,t.current.lanes=e,Ra(t,e),Ut(t),l[Ze]=t.current,Xc(l),new Xn(t)},xu.version="19.2.1",xu}var Or;function yy(){if(Or)return of.exports;Or=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(M){console.error(M)}}return x(),of.exports=my(),of.exports}var gy=yy();const hy=Cr(gy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=x=>x.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),by=x=>x.replace(/^([A-Z])|[\s-_]+(\w)/g,(M,R,o)=>o?o.toUpperCase():R.toLowerCase()),Dr=x=>{const M=by(x);return M.charAt(0).toUpperCase()+M.slice(1)},jr=(...x)=>x.filter((M,R,o)=>!!M&&M.trim()!==""&&o.indexOf(M)===R).join(" ").trim(),Sy=x=>{for(const M in x)if(M.startsWith("aria-")||M==="role"||M==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=Kl.forwardRef(({color:x="currentColor",size:M=24,strokeWidth:R=2,absoluteStrokeWidth:o,className:q="",children:Z,iconNode:$,..._l},U)=>Kl.createElement("svg",{ref:U,..._y,width:M,height:M,stroke:x,strokeWidth:o?Number(R)*24/Number(M):R,className:jr("lucide",q),...!Z&&!Sy(_l)&&{"aria-hidden":"true"},..._l},[...$.map(([p,X])=>Kl.createElement(p,X)),...Array.isArray(Z)?Z:[Z]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=(x,M)=>{const R=Kl.forwardRef(({className:o,...q},Z)=>Kl.createElement(Ey,{ref:Z,iconNode:M,className:jr(`lucide-${vy(Dr(x))}`,`lucide-${x}`,o),...q}));return R.displayName=Dr(x),R};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Mr=Tu("file-text",xy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],py=Tu("heart-pulse",Ty);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],Rr=Tu("quote",Ny);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],yf=Tu("send",Ay);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],Oy=Tu("stethoscope",zy);var N=(x=>(x.ICU="ICU",x.SURGERY="SURGERY",x.OBGYN="OBGYN",x.INTERNAL="INTERNAL",x.GENERAL="GENERAL",x.UNIT_8_WORSHIP="UNIT_8_WORSHIP",x))(N||{});const Ur=[{id:N.SURGERY,name:"الجراحة والتجميل",icon:"Scissors",color:"bg-blue-100 text-blue-600"},{id:N.WOMEN_PREGNANCY,name:"قضايا تتعلق بالنساء والإنجاب والأسرة",icon:"Baby",color:"bg-pink-100 text-pink-600"},{id:N.ICU_DEATH,name:"قضايا تتعلق بحالات العناية المركزة والموت",icon:"Activity",color:"bg-red-100 text-red-600"},{id:N.FASTING_MEDICINE,name:"قضايا تتعلق بالصيام والأدوية",icon:"Moon",color:"bg-yellow-100 text-yellow-600"},{id:N.ETHICS,name:"قضايا تتعلق بالأخلاقيات",icon:"Heart",color:"bg-green-100 text-green-600"},{id:N.GENETICS_REPRODUCTION,name:"قضايا تتعلق بالإنجاب والجينات",icon:"Dna",color:"bg-purple-100 text-purple-600"},{id:N.TATTOO_CORTISONE,name:"قضايا تتعلق بالوشم والاستخدام غير الطبي للكورتيزون",icon:"Zap",color:"bg-orange-100 text-orange-600"},{id:N.PRAYER_PURITY,name:"قضايا تتعلق بالصلاة والطهارة",icon:"BookOpen",color:"bg-indigo-100 text-indigo-600"},{id:N.MEDICAL_EXPERIMENTS,name:"قضايا تتعلق بالتجارب الطبية على الإنسان والحيوان",icon:"TestTube2",color:"bg-cyan-100 text-cyan-600"},{id:N.PHARMACY_DRUGS,name:"قضايا الصيدلة والأدوية",icon:"Pill",color:"bg-lime-100 text-lime-600"},{id:N.MISCELLANEOUS,name:"مسائل متنوعة",icon:"MoreHorizontal",color:"bg-gray-100 text-gray-600"}],Dy=[{id:"surg_comprehensive_cosmetic",category:N.SURGERY,title:"الأحكام الشاملة لجراحات التجميل",question:"ما هو التفصيل الشرعي الكامل في إجراء عمليات التجميل (الضرورية والتحسينية)؟",medical_context:"plastic surgery, rhinoplasty, breast augmentation, liposuction, botox, fillers, reconstruction, cosmetic, burn",ruling:`أولاً: الجراحة التجميلية الضرورية (العلاجية):
جائزة شرعاً بإجماع الفقهاء. وهي ما يقصد بها:
1. إعادة العضو إلى شكله ووظيفته المعهودة (مثل إصلاح الشفة الأرنبية، أو اعوجاج الأنف الذي يمنع التنفس).
2. إزالة عيب طارئ ناتج عن حادث أو حريق أو مرض، يسبب ضرراً حسياً أو نفسياً شديداً للمريض.
الدليل: حديث عرفجة بن أسعد لما قطع أنفه يوم الكُلَاب، فأذن له النبي ﷺ أن يتخذ أنفاً من ذهب.

ثانياً: الجراحة التجميلية التحسينية (الكماليات):
محرمة شرعاً إذا كانت لمجرد زيادة الحسن وتغيير الخلقة المعهودة دون وجود عيب منفر، استجابة لهوس الموضة أو للتدليس (كتصغير الأنف السليم، أو نفخ الشفاه وتكبير الثدي لغير ضرورة، أو تغيير لون البشرة).
العلة: قوله تعالى: "وَلَآمُرَنَّهُمْ فَلَيُغَيِّرُنَّ خَلْقَ اللَّهِ"، ولأن فيها تغريراً وتدليساً، وتعريضاً للنفس للأخطار الطبية دون مسوغ شرعي.

ثالثاً: شفط الدهون وشد الترهلات:
جائز إذا كانت السمنة مفرطة (مرضية) تسبب ضرراً صحياً (كالسكري وضغط الدم) أو تعيق الحركة، فتأخذ حكم العلاج. أما إذا كانت لمجرد تنسيق القوام البسيط، فهي مكروهة أو محرمة بحسب الضرر المترتب عليها.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية (فتوى 2045) / قرار مجمع الفقه الإسلامي الدولي رقم 173 (2007)",tags:["تجميل","جراحة","تغيير خلق الله","شفط دهون"]},{id:"surg_hymenoplasty_detailed",category:N.SURGERY,title:"رتق غشاء البكارة (Hymenoplasty)",question:"ما حكم إجراء عملية رتق غشاء البكارة للفتاة (بسبب حادث أو غيره)؟ وهل يجوز للطبيب إجراؤها؟",medical_context:"hymenoplasty, virginity repair, hymen, concealment, satr, marriage",ruling:`أولاً: حكم العملية:
1. إذا كان التمزق بسبب حادث أو اغتصاب أو إكراه: يجوز إجراؤها وجوباً للستر على الفتاة ودفع الضرر عنها، وتيسيراً لزواجها.
2. إذا كان التمزق بسبب خطأ سابق (زنا) وتابت الفتاة توبة نصوحاً: يجوز إجراؤها أيضاً إعمالاً لمبدأ "الستر" الذي حثت عليه الشريعة الإسلامية، ولمنع إشاعة الفاحشة، ولعدم فضحها أمام زوجها وأهلها، فالإسلام يتشوف للستر لا للفضيحة.

ثانياً: واجب الطبيب:
يجوز للطبيب إجراء هذه العملية بنية الستر، ولا يعد ذلك اشتراكاً في الغش، لأن الزوج لم يشترط البكارة نصاً في العقد، ولأن الستر مطلوب. أما إذا كان يعلم أن الفتاة ستستخدم ذلك لتدليس متعمد لإسقاط حق مالي أو لغرض خبيث، فيمتنع.
والأصل العام: "من ستر مسلماً ستره الله في الدنيا والآخرة".`,verdict:"PERMITTED",source:"دار الإفتاء المصرية (أمانة الفتوى - د. علي جمعة) / بحث مجمع البحوث الإسلامية",tags:["بكارة","ستر","نساء","زواج"]},{id:"surg_gender_reassignment",category:N.SURGERY,title:"عمليات تصحيح الجنس وتحويل الجنس",question:"ما الفرق بين تصحيح الجنس (Intersex) وتحويل الجنس (Transgender)؟",medical_context:"gender reassignment, sex change, intersex, hermaphrodite, gender dysphoria",ruling:`1. عمليات تصحيح الجنس (للحنثى المشكل - Intersex):
جائزة وواجبة. وهي حالة الشخص الذي لديه أعضاء تناسلية غامضة أو مختلطة جينياً، فيجوز التدخل الجراحي والهرموني لإلحاقه بالجنس الذي تظهر عليه علاماته الغالبة (ذكراً أو أنثى). هذا يعتبر "علاجاً" وإظهاراً للخلقة الأصلية وليس تغييراً.

2. عمليات تحويل الجنس (Sex Change):
محرمة قطعاً وتعد من الكبائر. وهي إجراء عملية لشخص مكتمل الذكورة أو الأنوثة (جينياً وعضوياً) لتحويله للجنس الآخر بناءً على رغبة نفسية (مَيْل) فقط. هذا يدخل تحت "تغيير خلق الله" وتشبه بالجنس الآخر، وهو ملعون فاعله.`,verdict:"CONDITIONAL",source:"قرار مجمع الفقه الإسلامي الدولي رقم 43 (1989) / دار الإفتاء المصرية",tags:["جنس","خنثى","تحويل جنس"]},{id:"surg_organ_transplant_full",category:N.SURGERY,title:"نقل وزراعة الأعضاء (الأحياء والأموات)",question:"ما هي الضوابط الشرعية الكاملة لنقل الأعضاء من الحي أو الميت؟",medical_context:"organ transplant, kidney, liver, brain death, donation, selling organs",ruling:`أولاً: النقل من الحي للحي:
جائز بشروط:
1. الضرورة: أن تكون الوسيلة الوحيدة لإنقاذ حياة المريض.
2. عدم الضرر: ألا يترتب على النقل ضرر محقق بالمتبرع يعطل حياته الطبيعية (مثل التبرع بكلية واحدة سليمة).
3. التبرع المحض: أن يكون بلا مقابل مادي (بيع الأعضاء حرام بإجماع لأنه امتهان لكرامة الآدمي).
4. الرضا التام: موافقة المتبرع دون إكراه.

ثانياً: النقل من الميت للحي:
جائز بشروط:
1. تحقق الموت شرعاً (يشمل موت جذع المخ بقرارات المجامع الفقهية).
2. وجود وصية من الميت قبل موته، أو موافقة ورثته بعد موته.
3. أن يكون العضو المنقول مما لا ينقل الصفات الوراثية (فلا يجوز نقل الخصية أو المبيض).`,verdict:"CONDITIONAL",source:"مجمع البحوث الإسلامية (قرار 2009) / مجمع الفقه الإسلامي (قرار رقم 26)",tags:["زراعة أعضاء","تبرع","بيع أعضاء","كلية"]},{id:"obgyn_assisted_reproduction",category:N.WOMEN_PREGNANCY,title:"التلقيح الصناعي وأطفال الأنابيب",question:"ما هي الصور الجائزة والصور المحرمة في التلقيح الصناعي والحقن المجهري؟",medical_context:"IVF, ICSI, artificial insemination, sperm donation, egg donation, surrogacy",ruling:`أولاً: الصور الجائزة (صورتان فقط):
1. أن تؤخذ النطفة من الزوج والبويضة من الزوجة، ويتم التلقيح خارجياً ثم تزرع في رحم الزوجة نفسها (أثناء قيام الزوجية).
2. أن تحقن نطفة الزوج في رحم الزوجة مباشرة (التلقيح الصناعي).
الشرط: التأكد التام من عدم اختلاط العينات، وأن يتم ذلك أثناء حياة الزوجين واستمرار عقدهما.

ثانياً: الصور المحرمة (5 صور):
1. استخدام نطفة رجل غريب (متبرع).
2. استخدام بويضة امرأة غريبة (متبرعة).
3. استخدام رحم امرأة غريبة (تأجير الأرحام)، حتى لو كانت البويضة من الزوجة، لاختلاط الأنساب وتنازع الأمومة.
4. استخدام نطفة الزوج أو بويضة الزوجة بعد الوفاة أو الطلاق البائن.
5. التلقيح بين نطفة رجل وبويضة امرأة ليست زوجته (سفاح).`,verdict:"CONDITIONAL",source:"قرار مجمع الفقه الإسلامي الدولي رقم 16 (1986) / دار الإفتاء المصرية",tags:["حقن مجهري","عقم","أنساب","تبرع"]},{id:"obgyn_abortion_stages",category:N.WOMEN_PREGNANCY,title:"أحكام الإجهاض حسب مدة الحمل",question:"ما هو الحكم الشرعي في إسقاط الجنين (الإجهاض) في مراحله المختلفة؟",medical_context:"abortion, pregnancy termination, fetus soul, 40 days, 120 days, congenital defects",ruling:`1. المرحلة الأولى (قبل 40 يوماً):
يجوز الإسقاط إذا كان هناك مبرر شرعي (مثل ضعف صحة الأم، أو تتابع الحمل بشكل يضر بتربية الأولاد)، ويكره لغير عذر.

2. المرحلة الثانية (من 40 إلى 120 يوماً - قبل نفخ الروح):
لا يجوز الإسقاط إلا لعذر طبي قاهر (خطر على صحة الأم) أو ثبوت تشوهات للجنين تجعل حياته غير مستقرة، وذلك بقرار لجنة طبية.

3. المرحلة الثالثة (بعد 120 يوماً - بعد نفخ الروح):
حرام قطعاً ويعد قتلاً للنفس (وأداً)، ولا يجوز في هذه المرحلة إلا في حالة واحدة فقط وهي "درء الخطر المحقق عن حياة الأم". أي: إذا قرر الأطباء أن استمرار الحمل سيؤدي يقيناً لوفاة الأم، هنا نضحي بالجنين لإنقاذ الأصل (الأم)، لأن حياتها متيقنة وحياة الجنين محتملة.
ملاحظة: التشوهات الخلقية (ولو كانت شديدة) بعد 120 يوماً ليست مبرراً للإجهاض عند جمهور الفقهاء المعاصرين، ما لم تهدد حياة الأم.`,verdict:"CONDITIONAL",source:"قرار هيئة كبار العلماء / دار الإفتاء المصرية / مجمع الفقه الإسلامي",tags:["إجهاض","حمل","روح","تشوهات"]},{id:"obgyn_contraception",category:N.WOMEN_PREGNANCY,title:"تحديد النسل وتنظيم الأسرة",question:"هل يجوز استخدام وسائل منع الحمل (اللولب، الحبوب)؟ وما حكم التعقيم النهائي؟",medical_context:"contraception, sterilization, vasectomy, tubal ligation, family planning",ruling:`1. تنظيم النسل (المؤقت):
جائز شرعاً باتفاق الزوجين، باستخدام وسائل آمنة (حبوب، لولب، عزل)، لتحقيق مباعدة بين الولادات أو لمصلحة راجحة، قياساً على "العزل" الذي كان يفعله الصحابة وأقرهم النبي ﷺ.

2. تحديد النسل (المنع المطلق):
غير جائز إذا كان بقانون عام يجبر الناس عليه، لأن تكثير النسل مقصد شرعي.

3. التعقيم النهائي (ربط المبايض أو قطع القناة الدافقة):
حرام شرعاً (لأنه قطع للنسل وتغيير للخلقة) إلا في حالات الضرورة الطبية القصوى، مثل أن يكون الحمل خطراً محققاً على حياة المرأة، أو وجود مرض وراثي خطير ينتقل للأولاد ولا علاج له.`,verdict:"CONDITIONAL",source:"مجمع البحوث الإسلامية / دار الإفتاء المصرية",tags:["منع حمل","تعقيم","تنظيم أسرة"]},{id:"obgyn_abortion_stages",category:N.INTERNAL,title:"أحكام الإجهاض حسب مراحل الحمل (Abortion)",question:"ما هو الحكم الشرعي التفصيلي للإجهاض حسب مدة الحمل والمراحل الجنينية؟",medical_context:"إجهاض، إنهاء الحمل، أسابيع الحمل، نفخ الروح، جنين",ruling:`الحكم في الإجهاض يختلف حسب مرحلة الحمل:

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

تحذير طبي-شرعي: الإجهاض المتكرر أو الاستخفافي حرام، والواجب على الطبيب التنبيه عليه.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + الشيخ جاد الحق علي جاد الحق",tags:["إجهاض","حمل","روح","مراحل","جنين"]},{id:"obgyn_ivf_combined",category:N.WOMEN_PREGNANCY,title:"التلقيح الصناعي وأطفال الأنابيب (IVF)",question:"متى يجوز التلقيح الصناعي والحقن المجهري وأطفال الأنابيب؟ وما الصور المحرمة؟",medical_context:"IVF، ICSI، تلقيح صناعي، عقم، أنابيب، نطفة، بويضة",ruling:`التلقيح الصناعي نوعان من حيث الحكم:

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

الحكم الشرعي النهائي: التلقيح بين الزوج والزوجة جائز شرعاً لعلاج العقم بدون وسطاء ثالثين.`,verdict:"CONDITIONAL",source:"فتوى الأزهر الشريف + مجمع الفقه الإسلامي الدولي",tags:["تلقيح","عقم","أنابيب","IVF","نسب"]},{id:"obgyn_surrogacy_forbidden",category:N.WIOMEN_PREGNANCY,title:"تأجير الأرحام / الأم البديلة (Surrogacy)",question:"ما حكم استئجار امرأة أخرى لحمل الجنين (الأم البديلة)؟",medical_context:"تأجير رحم، أم بديلة، surrogacy، حمل بالنيابة، نسب",ruling:`حكم تأجير الأرحام: حرام شرعاً وقطعياً

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

الحكم الشرعي القطعي: تأجير الأرحام حرام قطعياً بلا استثناء.`,verdict:"FORBIDDEN",source:"مجمع الفقه الإسلامي الدولي (القرار 173/52 الدورة الخامسة)",tags:["تأجير رحم","أم بديلة","نسب","حقوق","اختلاط"]},{id:"obgyn_gender_selection",category:N.WOMEN_PREGNANCY,title:"اختيار جنس الجنين (Gender Selection)",question:"هل يجوز تحديد نوع الجنين (ذكر أو أنثى) بالوسائل الطبية؟",medical_context:"اختيار جنس، تحديد جنس الجنين، PGD، فصل حيوانات منوية",ruling:`اختيار جنس الجنين يقبل تقسيماً:

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
- الأفضل والأحوط: عدم التعلق بنوع معين والقناعة بما يرزقه الله تعالى.`,verdict:"CONDITIONAL",source:"د. محمود رأفت عثمان + مجمع البحوث الإسلامية",tags:["جنس الجنين","اختيار","ذكورة","أنوثة","أمراض وراثية"]},{id:"icu_brain_death_resuscitation",category:N.ICU_DEATH,title:"الموت الدماغي ورفع أجهزة الإنعاش",question:"متى يعتبر المريض ميتاً؟ وهل يجوز رفع أجهزة الإعاشة عن الميت دماغياً؟",medical_context:"brain death, ventilator, life support, DNR, brain stem death",ruling:`أولاً: تعريف الموت شرعاً:
يعتبر الإنسان ميتاً وتترتب عليه جميع الأحكام الشرعية (العدة، الميراث) في إحدى حالتين:
1. توقف القلب والتنفس توقفاً تاماً وحكم الأطباء باستحالة عودتهما.
2. تعطل جميع وظائف الدماغ تعطلاً نهائياً (موت جذع المخ)، وحكم الأطباء المختصون بأن هذا التعطل لا رجعة فيه، حتى وإن كان القلب لا يزال ينبض آلياً بفعل الأجهزة.

ثانياً: رفع الأجهزة:
في حالة ثبوت "موت جذع المخ" بقرار لجنة ثلاثية، يجوز شرعاً رفع أجهزة الإنعاش الصناعي، لأن المريض في حكم الميت، والبقاء على الأجهزة مجرد إطالة لمظهر الحياة دون حقيقتها، وهذا لا يعتبر قتلاً للنفس بل هو إيقاف لعلاج غير مجدٍ.`,verdict:"PERMITTED",source:"قرار مجمع الفقه الإسلامي الدولي رقم 17 (1986) / مجمع البحوث الإسلامية",tags:["موت دماغي","إعاشة","أجهزة","وفاة"]},{id:"icu_dnr_ruling",category:N.ICU_DEATH,title:"قرار عدم الإنعاش (DNR)",question:"هل يجوز للأطباء اتخاذ قرار عدم الإنعاش القلبي الرئوي (Do Not Resuscitate)؟",medical_context:"DNR, CPR, resuscitation, terminal illness, cancer",ruling:`يجوز الامتناع عن إجراء الإنعاش القلبي الرئوي (CPR) في الحالات التالية:
1. إذا وصل المريض إلى حالة الاحتضار وتيقن الأطباء أن الإنعاش غير مجدٍ (Futile).
2. إذا كان المريض مصاباً بمرض مستعصٍ وميؤوس من شفائه (مثل السرطان المتأخر المنتشر) وكان الإنعاش سيعيد القلب للعمل لفترة قصيرة مع زيادة عذاب المريض دون أمل في الحياة.
شرط الفتوى: أن يكون القرار مبنياً على تقرير طبي جماعي (ثلاثة أطباء عدول) بأن الإنعاش سيضر ولا ينفع، ولا يعتبر ذلك قتلاً رحيماً، بل هو ترك للتداوي في حالة اليأس.`,verdict:"PERMITTED",source:"اللجنة الدائمة للفتوى (فتوى رقم 12086) / فتاوى المؤتمرات الطبية الفقهية",tags:["إنعاش","DNR","توقف القلب","احتضار"]},{id:"icu_euthanasia_mercy_killing",category:N.ICU_DEATH,title:"القتل الرحيم (Euthanasia)",question:"ما حكم إنهاء حياة المريض عمداً لإراحته من الألم (القتل الرحيم)؟",medical_context:"euthanasia, mercy killing, assisted suicide, pain relief, morphine",ruling:`1. القتل الرحيم الإيجابي (Active Euthanasia):
وهو إعطاء المريض جرعة قاتلة أو حقنة هواء لإنهاء حياته، هو "حرام قطعاً" ويعد جريمة قتل عمد توجب القصاص، ولا يبرر ذلك شدة الألم ولا طلب المريض نفسه، لأن الحياة ملك لله.

2. القتل الرحيم السلبي (Passive Euthanasia):
إذا كان المقصود به "إيقاف العلاج" أو "عدم وضع أجهزة الإنعاش" لمريض ميؤوس من شفائه تماماً (كما في فتوى DNR)، فهذا "جائز" وليس قتلاً، لأنه امتناع عن تداوي غير واجب.

3. استخدام المسكنات القوية (المورفين):
يجوز إعطاء المسكنات لتخفيف الألم ولو أدى ذلك لتقصير العمر افتراضياً (كمضاعفات جانبية غير مقصودة)، بشرط أن تكون النية تسكين الألم لا قتل المريض (مبدأ الأثر المزدوج).`,verdict:"FORBIDDEN",source:"دار الإفتاء المصرية / مجمع الفقه الإسلامي",tags:["قتل رحيم","انتحار","ألم","مورفين"]},{id:"med_fasting_breakers_full",category:N.FASTING_MEDICINE,title:"المفطرات الطبية في الصيام",question:"ما هي القائمة الكاملة للأدوية والإجراءات الطبية التي تفطر والتي لا تفطر؟",medical_context:"fasting, injections, inhalers, eye drops, ear drops, suppositories, endoscopy, dialysis, anesthesia",ruling:`أولاً: ما لا يفطر (يجوز للصائم):
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
5. لبن الأم (إذا وصل لجوف الطفل، وهذا خاص بالطفل).`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (الدورة العاشرة - مفطرات الصيام المعاصرة)",tags:["صيام","مفطرات","بخاخ","حقن","غسيل كلى"]},{id:"med_unclean_ingredients",category:N.FASTING_MEDICINE,title:"التداوي بالمحرمات والنجاسات",question:"حكم الأدوية المحتوية على كحول أو جيلاتين خنزيري؟",medical_context:"alcohol in medicine, pork gelatin, heparin, insulin, porcine",ruling:`1. الكحول:
يجوز استخدام الأدوية التي تدخل فيها نسبة من الكحول لغرض الحفظ أو الإذابة، لأنها "مستهلكة" في الدواء ولا تسكر، والنجاسة تزول بالاستهلاك (رأي المجامع الفقهية).

2. مشتقات الخنزير (مثل الجيلاتين، الهيبارين، الأنسولين):
- الأصل التحريم.
- لكن يجوز التداوي بها في حالة "الضرورة" إذا لم يوجد بديل حلال مساوٍ لها في الفاعلية، وكان المرض خطيراً.
- يرى بعض العلماء (مثل نزيه حماد والاتحاد العالمي) أن الجيلاتين إذا عولج كيميائياً فقد حدثت له "استحالة" (تغير في الماهية) وصار طاهراً، والعمل على الجواز عند الحاجة.`,verdict:"CONDITIONAL",source:"ندوة المنظمة الإسلامية للعلوم الطبية (الكويت 1995) / دار الإفتاء المصرية",tags:["كحول","خنزير","أدوية","نجاسة"]},{id:"eth_doctor_opposite_sex",category:N.ETHICS,title:"كشف الطبيب على الجنس الآخر",question:"ما هي ضوابط كشف الطبيب الرجل على المرأة والعكس؟",medical_context:"male doctor, female patient, awrah, examination, privacy",ruling:`الأصل أن تطبب المرأةَ مرأةٌ مثلها، والرجلَ رجلٌ مثله. فإن لم يوجد، جاز الكشف من الجنس الآخر وفق الضوابط الشرعية الآتية:
1. الضرورة أو الحاجة الماسة (عدم وجود البديل المماثل أو الكفء).
2. عدم الخلوة المحرمة (وجود محرم أو ممرضة مؤتمنة).
3. الاقتصار على موضع المرض فقط (الضرورة تقدر بقدرها).
4. غض البصر ما أمكن.
وهذا جائز إجماعاً لأن حفظ النفس ورفع الألم مقصد ضروري مقدم على ستر العورة في هذه الحالة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / كتب الفقه (باب التداوي)",tags:["كشف","عورة","خلوة","طبيب"]},{id:"eth_medical_secrecy",category:N.ETHICS,title:"إفشاء السر الطبي",question:"متى يجوز للطبيب إفشاء سر المريض؟",medical_context:"confidentiality, medical secrets, aids, infectious diseases, harm",ruling:`الأصل وجوب كتمان سر المريض، ويحرم إفشاؤه لأنه خيانة للأمانة، إلا في حالات استثنائية (يجوز أو يجب فيها الإفشاء) لدرء مفسدة أعظم:
1. الإبلاغ عن الأمراض المعدية السارية (مثل كورونا، الإيدز) لمنع الضرر عن المجتمع أو الزوجة.
2. إذا كان إخفاء السر يؤدي لجريمة قتل أو إيذاء (حماية للغير).
3. دفع تهمة عن الطبيب نفسه (دفاعاً عن النفس).
4. بأمر القاضي للشهادة.
القاعدة: "الضرر الخاص يتحمل لدفع الضرر العام".`,verdict:"CONDITIONAL",source:"ميثاق أخلاقيات الطبيب المسلم / قرارات المجامع الفقهية",tags:["سر طبي","أمانة","ضرر"]},{id:"eth_autopsy",category:N.ETHICS,title:"تشريح جثث الموتى",question:"هل يجوز تشريح الجثة للتعليم الطبي أو للبحث الجنائي؟",medical_context:"autopsy, dissection, forensic, medical education",ruling:`1. التشريح الجنائي:
جائز واجباً إذا أمرت به النيابة لمعرفة سبب الوفاة (في القضايا الجنائية) إحقاقاً للحق ومنعاً للظلم، لأن مصلحة العدل مقدمة على حرمة الميت.

2. التشريح التعليمي (لطلاب الطب):
جائز للضرورة العلمية لتعلم الطب وإنقاذ الأحياء مستقبلاً، بشرط ألا يكون للجثة معصوم (أو بإذن مسبق/تبرع)، وأن يقتصر على قدر الحاجة، مع وجوب احترام الأجزاء ودفنها بعد الانتهاء.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية / قرار هيئة كبار العلماء",tags:["تشريح","طب شرعي","تعليم"]},{id:"awrah_keshf_ilaj",category:N.ETHICS,title:"حدود كشف العورة في العلاج والمداواة",question:"ما هي حدود العورة التي يجوز كشفها للطبيب أثناء العلاج والفحص الطبي؟",medical_context:"عورة، كشف، فحص طبي، ضرورة، ستر",ruling:`الأصل الفقهي الأول: وجوب ستر العورة:
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
يجوز كشف العورة للطبيب عند الضرورة الطبية **بقدر الحاجة فقط**، مع غض البصر، والاحتشام، وعدم الخلوة (عند الإمكان).`,verdict:"CONDITIONAL",source:"كتب الفقه (المغني، المجموع) + الفتاوى الطبية المعاصرة",tags:["عورة","كشف","ضرورة","فحص طبي","ستر","احتشام"]},{id:"cross_gender_treatment",category:N.ETHICS,title:"معالجة الطبيب الذكر للمريضة الأنثى والعكس",question:"هل يجوز أن يعالج الطبيب الرجل مريضة امرأة، وهل يجوز العكس؟",medical_context:"طبيب ذكر، مريضة أنثى، معالجة، خلوة، محرم، فتنة",ruling:`الأصل الفقهي الأول: تفضيل المماثل:
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
يجوز لطبيب ذكر معالجة مريضة أنثى (والعكس) عند الضرورة أو عدم وجود مختص مماثل، بشروط صارمة: عدم الخلوة، كشف موضع المرض فقط، غض البصر، وعدم الخضوع بالقول. الأصل الالتزام بالمماثل عند الإمكان.`,verdict:"CONDITIONAL",source:"كتب الفقه الإسلامي + أبو الخير نشأت + الفتاوى الطبية المعاصرة",tags:["طبيب","مريضة","خلوة","علاج","محرم","ممرضة","فتنة"]},{id:"repro_egg_freezing",category:N.GENETICS_REPRODUCTION,title:"تجميد البويضات",question:"ما حكم تجميد البويضات للنساء لتأخير الحمل (للزواج المتأخر أو قبل العلاج الكيماوي)؟",medical_context:"egg freezing, cryopreservation, oocyte preservation, social freezing, medical freezing",ruling:`الحكم: جائز بضوابط شرعية صارمة.

السياق الطبي: تلجأ النساء لهذه العملية إما لتأخر سن الزواج (الخوف من انخفاض الخصوبة مع التقدم في العمر) أو قبل الخضوع لعلاج كيماوي قد يؤثر على المبايض.

الضوابط الشرعية:
1. أمن الاختلاط: يجب ضمانات إجرائية صارمة في المعامل لمنع استبدال العينات أو اختلاط النسب.
2. مشروعية الاستخدام: لا يجوز استخدام البويضات المجمدة إلا للتلقيح من حيوان منوي لزوج شرعي بعقد صحيح قائم لحظة التلقيح.
3. عدم البيع: لا يجوز التبرع بها أو بيعها لأخريات (الأعضاء والخلايا الإنسانية ليست محلاً للتجارة).
4. الحكم ينطبق أيضاً على تجميد الحيوانات المنوية والأجنة المخصبة.

تطور الموقف: أصدرت دار الإفتاء المصرية فتاوى حديثة (2015 وما بعده) تبيح هذه العملية لأنها "تسليط وسيلة آمنة لحفظ الخصوبة" دون تجاوز الحدود الشرعية.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية (فتوى 2015 والفتاوى اللاحقة) / مركز الأزهر العالمي للفتوى الإلكترونية",tags:["بويضات","تجميد","عقم","حصوبة"]},{id:"repro_sex_selection",category:N.GENETICS_REPRODUCTION,title:"تحديد جنس الجنين",question:"هل يجوز التدخل الطبي لاختيار جنس الجنين (ذكر أو أنثى)؟",medical_context:"sex selection, gender choice, PGD, sperm sorting, family balancing",ruling:`الفتوى: جائز بضوابط تفصيلية.

طرق التحديد:
1. فصل الحيوانات المنوية (تقنية Sperm Sorting).
2. التشخيص الوراثي للأجنة قبل الزرع (PGD - Pre-implantation Genetic Diagnosis).

حالات الجواز:
1. الجنس الطبي: إذا كان الدافع "علاجياً" لتجنب أمراض وراثية مرتبطة بجنس معين (مثل الهيموفيليا التي تصيب الذكور بشكل أساسي). هذا "واجب" إذا أمكن تجنب المرض.
2. توازن الأسرة (Family Balancing): إذا كان لدى الأسرة عدة أطفال من جنس واحد وترغب في الحصول على طفل من الجنس الآخر لتحقيق التوازن الأسري، يجوز ذلك بشرط:
   - أن يكون الدافع عدم الرغبة في زيادة عدد أطفال من نفس الجنس (لا كراهية الإناث).
   - ألا يتحول إلى سياسة عامة تخل بالتوازن الديموغرافي في المجتمع.

الموقف من كراهية الإناث: إذا كان الدافع كراهية الإناث أو تفضيل الذكور تفضيلاً صريحاً (ظاهرة جاهلية)، فالعملية حرام.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (القرار 102) / قرار دار الإفتاء المصرية الحديث",tags:["جنس الجنين","اختيار جنس","وراثة"]},{id:"repro_dna_fingerprint",category:N.GENETICS_REPRODUCTION,title:"البصمة الوراثية (DNA) وإثبات النسب",question:"ما حكم استخدام تحليل DNA لإثبات النسب أو نفيه؟",medical_context:"DNA, genetic fingerprint, paternity test, parentage verification, switched babies",ruling:`الحكم: جائز لإثبات النسب في حالات محددة، ومحرم لنفي النسب الثابت.

حالات الإثبات الجائزة:
1. نسب الطفل مجهول الأبوين (اللقيط).
2. إثبات نسب الطفل المشكوك فيه عند الاشتباه في المستشفى (تبديل المواليد).
3. التعرف على الجثث والمفقودين.
4. في قضايا الاغتصاب وإثبات الجريمة.

حالات النفي المحرمة:
يحرم استخدام DNA لنفي نسب "ثابت شرعاً بالفراش" (أي الطفل المولود لزوجين في عقد زواج صحيح). فالشريعة الإسلامية تتشوف لستر الأعراض وإثبات الأنساب، ولا تفتح باب الطعن في الأنساب المستقرة لمجرد الشك، إلا في إجراءات "اللعان" القضائية.

التعليل الشرعي: الشرع يفضل استقرار النسب على الدقة العلمية البحتة لحماية الأسرة والمجتمع من الفوضى.

مبدأ المؤسسات المصرية: ترى دار الإفتاء ومجمع الفقه أن البصمة الوراثية "قرينة قوية تكاد تصل لليقين"، لكن الحكم الشرعي أقوى من القرينة العلمية.`,verdict:"CONDITIONAL",source:"قرار مجمع الفقه الإسلامي الدولي (القرار 71) / دار الإفتاء المصرية",tags:["بصمة وراثية","نسب","DNA"]},{id:"repro_surrogacy_detailed",category:N.GENETICS_REPRODUCTION,title:"تأجير الأرحام (Surrogacy)",question:"ما حكم استئجار امرأة أخرى لتحمل جنيناً من بويضة الزوجة وحيوان منوي الزوج؟",medical_context:"surrogacy, gestational carrier, womb rental, gestational mother, genetic mother",ruling:`الحكم: محرم قطعاً بجميع صوره (سواء تبرعاً أم بمقابل مالي).

الموقف الموحد: اتفقت دار الإفتاء المصرية، ومركز الأزهر للفتوى، ومجمع الفقه الإسلامي الدولي على تحريم تأجير الأرحام بشكل قاطع، وعدم جواز هذه العملية تحت أي ظرف.

العلل الفقهية للتحريم:
1. اختلاط الأنساب: يحدث تضارب بين "الأمومة الجينية" (صاحبة البويضة - الأصلية) و"الأمومة الحملية" (صاحبة الرحم - البديلة)، والقرآن الكريم يقول {إِنْ أُمَّهَاتُهُمْ إِلَّا اللَّائِي وَلَدْنَهُمْ}، فالأم الشرعية هي التي تحمل وتلد، لا التي توفر البويضة فقط.
2. امتهان المرأة: تحويل رحم المرأة إلى سلعة للإيجار ينتقص من كرامتها الإنسانية.
3. انتهاك الأسرة: فتح باب للمشاكل الاجتماعية (تعلق الأم البديلة بالطفل، نزاعات حول التسليم، انتشار الأسر البديلة).
4. الاتجار بالبشر: يعتبر شكلاً من أشكال الاتجار بالأعضاء والبشر المحرم قطعاً.

القاعدة الشرعية: "الحاجة لا تبيح المحرم، والاضطرار قد يبيح بعض المحرمات لكن ليس كل مما تخالف فيه مصلحة الأسرة والمجتمع".`,verdict:"FORBIDDEN",source:"قرار مجمع الفقه الإسلامي الدولي رقم 15 (1986) / دار الإفتاء المصرية (فتوى 11804)",tags:["تأجير أرحام","surrogacy","نساء","عقم"]},{id:"repro_genetic_diseases",category:N.GENETICS_REPRODUCTION,title:"الأمراض الوراثية والتدخل الجيني",question:"هل يجوز اختيار الأجنة السليمة وترك الأجنة المريضة وراثياً عند الإخصاب؟",medical_context:"genetic diseases, hereditary disorders, PGD, sickle cell, cystic fibrosis, hemophilia",ruling:`الحكم: جائز (بل قد يكون مستحباً) اختيار الأجنة السليمة وترك المريضة، بشروط:

الشروط الشرعية:
1. أن يكون المرض الوراثي "خطيراً" يسبب معاناة شديدة للمريض أو يختصر عمره بشكل محقق (مثل الثلاسيميا الكبرى، الهيموفيليا، التليف الكيسي).
2. أن يكون المرض "موروثاً محتماً" (جينياً)، بناءً على فحص وراثي دقيق.
3. أن يتم اختيار الأجنة السليمة باستخدام تقنية التشخيص الوراثي قبل الزرع (PGD) وليس بإجهاض الأجنة بعد تكونها.
4. أن تكون القرارات مدعومة بطبيب متخصص ولجنة أخلاقيات.

المنع المطلق: لا يجوز اختيار الأجنة بناءً على "صفات" غير مرضية (مثل لون العين أو الذكاء المتوقع)، لأن هذا من باب تعديل الخلقة بلا عذر شرعي.

التعليل: حفظ النسل والصحة مقصد ضروري من مقاصد الشريعة، والوقاية من الأمراض الخطيرة أولى من مجرد الإنجاب.`,verdict:"PERMITTED",source:"مجمع الفقه الإسلامي الدولي / قرارات دار الإفتاء المصرية المتعلقة بالهندسة الوراثية",tags:["أمراض وراثية","جينات","PGD","وراثة"]},{id:"derm_tatoo_removal",category:N.TATTOO_CORTISONE,title:"إزالة الوشم (Tattoo Removal)",question:"هل يجوز لمن تاب عن الوشم أن يزيله بالليزر أو الجراحة؟",medical_context:"tattoo, laser removal, dermatology, repentance, sin",ruling:`الحكم: جائز (بل قد يكون مستحباً) إزالة الوشم للتائب الندِم.

التفصيل:
1. الوشم نفسه (التطعيم): محرم شرعاً، والنبي ﷺ لعن "الواشمة والمستوشمة".
2. إزالة الوشم: جائزة بجميع الوسائل الطبية الآمنة (ليزر، تقشير، جراحة)، لأن فيه "توبة" و"إصلاح" للخطأ السابق.
3. للتائب: إن كان يود التخلص من آثار ذنبه السابق فذلك مستحب لأجل قوله تعالى: {إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ}.`,verdict:"PERMITTED",source:"فتاوى الفقهاء المعاصرين / دار الإفتاء المصرية",tags:["وشم","وشم دائم","توبة"]},{id:"derm_skin_whitening",category:N.TATTOO_CORTISONE,title:"تفتيح البشرة (Skin Lightening)",question:"ما حكم استخدام المراهم والعمليات لتفتيح لون البشرة؟",medical_context:"skin lightening, bleaching cream, melanin reduction, cosmetic",ruling:`الحكم: محرم الاستخدام لمجرد التجميل والموضة.

التفصيل:
1. إذا كان للتفتيح لسبب طبي (علاج التصبغات المفرطة التي تسبب حرجاً أو مرضاً جلدياً): جائز.
2. إذا كان للتفتيح لتغيير لون البشرة الطبيعي لمجرد الموضة أو "محاكاة جمالية": محرم، لأنه:
   - تغيير لخلق الله.
   - فيه ظاهرة "الاستعمار الثقافي" والنظر للبشرة البيضاء كمعيار جمال.
   - قد يسبب أضراراً صحية (السرطان، التسمم بالزئبق في بعض المراهم).

التحذير: كثير من كريمات تفتيح البشرة تحتوي على "الزئبق" و"الكورتيزون" بتركيزات عالية وخطيرة، وهي محرمة شرعاً وطبياً.`,verdict:"FORBIDDEN",source:"فتاوى معاصرة / توصيات منظمة الصحة العالمية",tags:["جلد","تفتيح بشرة","تجميل"]},{id:"worship_prayer_positions",category:N.PRAYER_PURITY,title:"صلاة المريض والأوضاع المختلفة",question:"كيف يصلي المريض الذي لا يستطيع الوقوف أو الركوع أو السجود؟",medical_context:"prayer positions, disabled, wheelchair, bedridden, standing, sitting",ruling:`القاعدة الشرعية: "صلِّ قائماً، فإن لم تستطع فقاعداً، فإن لم تستطع فعلى جنب" (حديث صحيح).

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
يسقط الفرض بالكلية في حالات العجز التام (مثل الغيبوبة)، لكن يجب قضاء الصلاة بعد الشفاء إن كان الغياب مؤقتاً.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي / دار الإفتاء المصرية / الأحاديث الصحيحة",tags:["صلاة","مريض","عجز","حركة"]},{id:"worship_ablution_compromise",category:N.PRAYER_PURITY,title:"الطهارة للمريض والمسح على الجبيرة",question:"كيف يتوضأ المريض الذي لا يستطيع غسل أطرافه (جبيرة، حروق، جروح)؟",medical_context:"ablution, wudu, splint, bandage, wounds, burns, tayammum",ruling:`الحكم: يجوز المسح على الجبيرة (الجبس أو الضمادات الطبية) بدلاً من الغسل.

الشروط:
1. أن تكون الجبيرة على عضو من أعضاء الوضوء (اليدين والرجلين والوجه).
2. أن يكون هناك عذر شرعي (جرح، حريق، كسر، مرض جلدي معدٍ).
3. المسح الخفيف على الجبيرة بحيث "تمر اليد عليها".
4. لا يشترط نزع الجبيرة للتأكد من نظافة ما تحتها (دفعاً للضرر).

التيمم: إذا أصيب الوجه والكفان بحروق شديدة تمنع الغسل، ينتقل للتيمم (الضرب على التراب ثم المسح).

حالة خاصة: الطهارة النجاسة (الاستنجاء):
إذا كان المريض عاجزاً عن الاستنجاء (الغسل بالماء بعد قضاء الحاجة)، يجوز استخدام المناديل الرطبة أو الجاف بدلاً منه، أو طلب مساعدة من المريض.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / كتب الفقه (باب الطهارة)",tags:["وضوء","جبيرة","مسح","حروق"]},{id:"worship_fasting_illness",category:N.PRAYER_PURITY,title:"الفطر في الصيام للمريض والمسافر",question:"من يجوز لهم الفطر والإفطار في رمضان؟",medical_context:"fasting, illness, travel, exemption, makeup days, kuffara",ruling:`الفئات المعفوة من الصيام (مع وجوب القضاء):
1. المريض: الذي يضره الصوم أو يشدد عليه المرض (بقرار طبي أو شعور المريض).
2. المسافر: السفر فوق مسافة معينة (تقديرات تختلف من 80 إلى 90 كم).
3. الحامل والمرضع: إذا خافتا على نفسهما أو على الجنين/الرضيع.

الأحكام:
- الفطر: يجوز بمجرد العذر (لا يشترط الشدة الزائدة).
- القضاء: واجب في أيام أخرى من السنة.
- الكفارة: لا تجب للمعذور (الفطر بعذر ليس معصية).

الحالات الاستثنائية:
- الشيخ الكبير والعجوز: إذا كانا لا يطيقان الصوم: يفطران بدون قضاء، لكن يطعمان عن كل يوم مسكيناً (إطعام بدل).
- المريض المزمن: الذي لا يُرجى شفاؤه (مثل السرطان المتأخر): يفطر بدون قضاء، ويكفيه الإطعام.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية / مجمع الفقه الإسلامي",tags:["صيام","رمضان","مريض","فطر","سفر"]},{id:"prayer_jamaa_taasil_hadith",category:N.PRAYER_PURITY,title:"رخصة جمع الصلاة: التأصيل الفقهي لحديث ابن عباس",question:"ما هو أساس جواز جمع الصلاة للطبيب من النصوص الشرعية؟",medical_context:"جمع الصلاة، الحرج، المشقة، وقت الصلاة، عذر، ضرورة",ruling:`يستند جواز جمع الصلاة للطبيب على حديث ابن عباس الصحيح الذي أخرجه الإمام مسلم:
"جمع رسول الله صلى الله عليه وسلم بين الظهر والعصر، والمغرب والعشاء بالمدينة، من غير خوف ولا مطر"

عندما سُئل ابن عباس عن السبب، أجاب بإجابة مقاصدية: "أراد أن لا يحرج أمته"

الفائدة الأساسية: العلة في جواز الجمع ليست محصورة في "السفر" فحسب، بل العلة الحقيقية هي "دفع الحرج". بناءً عليه، كل ما يؤدي إلى حرج شديد ومشقة بالغة في أداء الصلاة في وقتها، يجوز معه الجمع.

التطبيق على الأطباء: العمل الطبي المعقد (الجراحات الطويلة، أوبئة، عزل) يقع في قلب هذا المفهوم الفقهي.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية + مجمع البحوث الإسلامية + مركز الأزهر العالمي للفتوى",tags:["صلاة","جمع","طبيب","حديث ابن عباس","مشقة"]},{id:"prayer_jamaa_mashaqqah",category:N.PRAYER_PURITY,title:"قاعدة المشقة تجلب التيسير وتطبيقاتها الطبية",question:'كيف تطبق القاعدة الفقهية "المشقة تجلب التيسير" على عمل الطبيب والممرضة؟',medical_context:"قاعدة فقهية، مشقة، تيسير، عملية جراحية، طهارة، وضوء، تركيز",ruling:`قاعدة "المشقة تجلب التيسير" من القواعد الخمس الكبرى التي يبنى عليها الفقه الإسلامي. في الواقع الطبي، تتجسد المشقة في صور متعددة:

1. استغراق الوقت: العمليات الجراحية التي تمتد لـ 6 أو 8 ساعات أو أكثر، وتستغرق وقتي الظهر والعصر معاً، أو المغرب والعشاء.

2. صعوبة الطهارة: في حالات الأوبئة (مثل كورونا)، حيث يرتدي الطبيب ملابس عزل كاملة (PPE)، ويشق عليه خلعها للوضوء لكل صلاة ثم لبسها مرة أخرى، لما في ذلك من مشقة بدنية، وخطر صحي، وتكلفة مالية.

3. الضغط النفسي والذهني: تركيز الطبيب في الجراحة أو العناية المركزة يتطلب صفاءً ذهنياً، والقلق بشأن فوات وقت الصلاة قد يشتت هذا التركيز، مما يؤثر على سلامة المريض.

الحكم النهائي: المشقة في العمل الطبي تبيح الجمع بين الصلوات.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية + دار الإفتاء المصرية",tags:["قاعدة فقهية","مشقة","تيسير","طبيب","جراحة"]},{id:"prayer_jamaa_din_nafs",category:N.PRAYER_PURITY,title:"موازنة حفظ الدين بحفظ النفس عند الطبيب",question:"إذا تعارض التزام الطبيب بوقت الصلاة مع سلامة المريض، أيهما يقدم؟",medical_context:"مقاصد الشريعة، حفظ الدين، حفظ النفس، موازنة فقهية، أولويات",ruling:`مقاصد الشريعة الإسلامية تقوم على حفظ الضرورات الخمس: الدين، النفس، العقل، النسل، والمال.

عندما يحدث تعارض ظاهري بين "حفظ الدين" (أداء الصلاة في وقتها المحدد) و"حفظ النفس" (استمرار العملية الجراحية لإنقاذ المريض)، فإن الشريعة تقدم حفظ النفس في هذه الجزئية الفقهية.

التعليل: النفس إذا تلفت لا تعوض، بينما الصلاة يمكن تداركها عبر رخصة الجمع التي شرعها الله تعالى.

الخلاصة الأخلاقية: الطبيب الذي يجمع الصلاة لينقذ مريضاً هو في عبادة (إنقاذ النفس) ويمارس رخصة شرعية في عبادة أخرى (الصلاة)، فهو مأجور من الجهتين معاً.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور شوقي علام",tags:["مقاصد شريعة","حفظ النفس","حفظ الدين","طبيب","جراحة"]},{id:"prayer_jamaa_taqdem",category:N.PRAYER_PURITY,title:"جمع التقديم: صورته وتطبيقه على الطبيب الجراح",question:"ما هي صورة جمع التقديم وكيف يطبقها الطبيب قبل دخول غرفة العمليات؟",medical_context:"جمع تقديم، ظهر، عصر، مغرب، عشاء، وقت الصلاة، عملية جراحية",ruling:`جمع التقديم هو أن يصلي الظهر والعصر في وقت الظهر، أو المغرب والعشاء في وقت المغرب.

التطبيق على الطبيب الجراح:
إذا علم الطبيب أنه سيدخل العملية الجراحية في وقت الظهر ولن يخرج إلا بعد غروب الشمس (فوات وقت العصر)، فإنه يصلي العصر مع الظهر مقدماً قبل الدخول للعمليات.

الإجراء العملي:
1. بمجرد أذان الظهر: يتوضأ الطبيب
2. يصلي الظهر (4 ركعات) بنية "أصلي الظهر"
3. بعد التسليم مباشرة: يقيم الصلاة للعصر
4. يصلي العصر (4 ركعات) بنية "أصلي العصر جمع تقديم مع الظهر"
5. يدخل غرفة العمليات وقد أدى فريضتي النهار

الأفضلية: هذا الأسلوب هو الأفضل والأحوط لضمان أداء الصلاة وعدم انشغال البال بها أثناء الجراحة.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تقديم","طبيب","جراحة","تطبيق عملي"]},{id:"prayer_jamaa_takhir",category:N.PRAYER_PURITY,title:"جمع التأخير: صورته وتطبيقه على حالات الطوارئ",question:"ما هي صورة جمع التأخير وكيف يطبقها الطبيب في حالات الطوارئ المفاجئة؟",medical_context:"جمع تأخير، طوارئ، حادث، جراحة عاجلة، نية، وقت العصر",ruling:`جمع التأخير هو أن يؤخر الطبيب صلاة الظهر ليصليها مع العصر في وقت العصر، أو يؤخر المغرب ليصليها مع العشاء.

التطبيق على الطبيب في حالات الطوارئ:
إذا كان الطبيب منخرطاً في العمل قبل دخول وقت الظهر، واستمر العمل حتى دخول وقت العصر (مثل حادث كبير يتطلب تدخلاً فورياً)، فإنه ينوي بقلبه تأخير الظهر، ويصليهما معاً بعد انتهاء العمل.

الإجراء العملي:
1. عندما يدرك الطبيب أن وقت الظهر سيفوته بسبب انشغاله بإنقاذ المصابين
2. يعقد نية بقلبه: "يارب، نويت تأخير صلاة الظهر لأصليها مع العصر بسبب هذا العذر"
3. يستمر في عمله
4. عند الانتهاء (في وقت العصر): يتوضأ ويصلي الظهر أولاً (مراعاة للترتيب) ثم العصر

الأهمية: هذا هو الأسلوب الصحيح في حالات الطوارئ المفاجئة.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تأخير","طوارئ","طبيب","نية"]},{id:"prayer_jamaa_qaser",category:N.PRAYER_PURITY,title:"الفرق بين الجمع والقصر: عدم جواز قصر الركعات للطبيب",question:"هل يجوز للطبيب أن يقصر الصلاة (يصليها ركعتين بدل أربع) عند جمع الصلوات؟",medical_context:"قصر، جمع، ركعات، حاضر، مسافر، سفر، حكم",ruling:`لا يجوز قصر الصلاة (تقليل الركعات) للطبيب.

التوضيح الفقهي:
- الجمع رخصة في "الوقت" وليست رخصة في "عدد الركعات"
- القصر رخصة مرتبطة بـ "السفر" حصراً (عند جماهير الفقهاء)
- الطبيب يمارس عمله في مكان إقامته (المستشفى)، فهو "حاضر" وليس "مسافراً"

الأداء الصحيح:
- يصلي الطبيب الظهر أربع ركعات (كاملة)
- يصلي العصر أربع ركعات (كاملة)
- يصلي المغرب ثلاث ركعات (كاملة)
- يصلي العشاء أربع ركعات (كاملة)

الحكم الشرعي: الجمع بدون قصر هو الحكم الشرعي الصحيح للطبيب الحاضر.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + مركز الأزهر العالمي للفتوى + مجمع البحوث الإسلامية",tags:["صلاة","قصر","جمع","ركعات","حاضر"]},{id:"prayer_jamaa_niyyah",category:N.PRAYER_PURITY,title:"شرط النية في جمع الصلاة: متى وكيف ينوي الطبيب",question:"ما هو شرط النية في الجمع؟ ومتى يجب أن ينوي الطبيب الجمع؟",medical_context:"نية، جمع تقديم، جمع تأخير، تكبيرة إحرام، شرط صحة",ruling:`النية شرط صحة في الجمع. والتفصيل الفقهي كالتالي:

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

الحكم الشرعي: النية شرط واجب لصحة الجمع.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","نية","جمع","شرط صحة"]},{id:"prayer_jamaa_mowalah",category:N.PRAYER_PURITY,title:"شرط الموالاة (التتابع) في جمع الصلاة",question:"هل يجب أن تكون الصلاتان المجموعتان متتابعتان بلا فاصل؟",medical_context:"موالاة، تتابع، فاصل، صيغة الجمع، شرط",ruling:`الموالاة (التتابع) شرط في جمع التقديم عند جماهير الفقهاء.

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

الحكم الشرعي: الموالاة شرط عند كثير من الفقهاء لجمع التقديم، والأحوط الالتزام بها.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","موالاة","جمع","شرط"]},{id:"prayer_jamaa_tartib",category:N.PRAYER_PURITY,title:"شرط الترتيب في الصلوات المجموعة",question:"هل يجب أن يصلي الطبيب الظهر قبل العصر والمغرب قبل العشاء؟",medical_context:"ترتيب، صلوات، ظهر، عصر، مغرب، عشاء",ruling:`الترتيب شرط واجب عند الجمهور في الجمع.

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

الحكم الشرعي: الترتيب شرط واجب، ولا يسقط إلا بالنسيان عند بعض الفقهاء.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية",tags:["صلاة","ترتيب","جمع","شرط"]},{id:"prayer_jamaa_adwa_epidemic",category:N.PRAYER_PURITY,title:"جمع الصلاة في أوبئة العزل: خشية العدوى وحفظ المال",question:"ما حكم جمع الصلاة لأطقم العزل الطبية المخالطة للأوبئة (كورونا)؟",medical_context:"وباء، عدوى، كورونا، عزل، ملابس واقية، PPE، تعقيم، مال عام",ruling:`أصدرت لجنة الفتوى بمجمع البحوث الإسلامية بالأزهر الشريف فتاوى خاصة بأطقم العزل أثناء الأوبئة. الحكم: يجوز الجمع بعلل قوية تتجاوز المشقة البدنية.

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

النتيجة: الجمع وسيلة لترشيد الموارد وحفظ المال العام، وهي علة قوية من الناحية الفقهية.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية بالأزهر الشريف - لجنة الفتوى",tags:["صلاة","جمع","وباء","عدوى","عزل","كورونا"]},{id:"prayer_jamaa_medical_categories",category:N.PRAYER_PURITY,title:"تصنيف الكوادر الطبية وحكم كل فئة",question:"هل جميع العاملين في المستشفيات يجوز لهم الجمع؟ أم هناك فئات محددة؟",medical_context:"فئات طبية، تصنيف، عزل، العناية المركزة، فحص، كمامة",ruling:`لم تعطِ فتاوى مجمع البحوث الإسلامية حكماً تعميمياً، بل فصلت الأحكام حسب طبيعة العمل والاختلاط بالمصابين:

الفئة الأولى: الفحص المبدئي (لا يخالطون المصابين مباشرة):
- طبيعة العمل: فحص مبدئي، يرتدون كمامات وقفازات يمكن خلعها بسهولة
- الحكم الشرعي: يتعين عليهم الوضوء وأداء الصلاة في وقتها
- النتيجة: لا يجوز لهم الجمع (لانتفاء العذر والمشقة المعتبرة)

الفئة الثانية: أطقم العزل والعناية المركزة (يخالطون المصابين مباشرة):
- طبيعة العمل: عزل، عناية مركزة، يخالطون المصابين مباشرة، يرتدون بدلات عزل كاملة (Full PPE)
- الحكم الشرعي: يجوز لهم الجمع بين الصلوات
- الصور المباحة: جمع الظهر مع العصر، والمغرب مع العشاء، تقديماً أو تأخيراً حسب ظروف العمل والورديات

الخلاصة: الفرق هو وجود المشقة الحقيقية والعدوى المباشرة.`,verdict:"CONDITIONAL",source:"مجمع البحوث الإسلامية - لجنة الفتوى",tags:["صلاة","جمع","تصنيف","فئات طبية"]},{id:"prayer_jamaa_tahara_epidemic",category:N.PRAYER_PURITY,title:"أحكام الطهارة والوضوء عند ارتداء الملابس الواقية",question:"كيف يتوضأ الطبيب وهو يرتدي بدلات عزل كاملة؟ وماذا لو انتقض وضوؤه؟",medical_context:"طهارة، وضوء، ملابس واقية، بدلة عزل، تيمم، فاقد الطهورين",ruling:`وضعت لجنة الفتوى بمجمع البحوث الإسلامية ضوابط واضحة للطهارة في ظروف العزل:

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

الحكم النهائي: الصلاة واجبة على كل حال، والطهارة تُيسّر قدر الإمكان.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية - لجنة الفتوى",tags:["صلاة","طهارة","وضوء","عزل","تيمم"]},{id:"prayer_jamaa_blood_clothes",category:N.PRAYER_PURITY,title:"حكم صلاة الطبيب بملابس ملوثة بالدم",question:"هل تصح صلاة الطبيب الجراح وملابسه عليها دماء المريض؟",medical_context:"صلاة، دم، ملابس، جراح، نجاسة، ضرورة، معفو عنه",ruling:`أجابت دار الإفتاء المصرية (أمين الفتوى) على هذا السؤال بتفصيل يراعي ظروف الجراحين:

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

الخلاصة: الصلاة مقدمة على كل شيء، والجراح معذور في ظروفه الاستثنائية.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية - أمين الفتوى",tags:["صلاة","دم","جراح","نجاسة","ضرورة"]},{id:"prayer_jamaa_no_habit",category:N.PRAYER_PURITY,title:"عدم اتخاذ الجمع عادة يومية: الضابط الأهم",question:"هل يجوز للطبيب أن يجعل جمع الصلاة عادة يومية دائمة؟",medical_context:"جمع، عادة، يومية، رخصة، عذر، عارضة",ruling:`حذّر مركز الأزهر العالمي للفتوى الإلكترونية من تحويل الجمع إلى عادة. الشيخ أمير عبد العال: "شدد على ضرورة عدم اتخاذ ذلك الجمع باستمرار وجعله عادة يومية فهذا غير جائز"

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

الحكم الشرعي: عدم الاعتياد على الجمع شرط لجوازه، والاعتياد بلا عذر حرام.`,verdict:"CONDITIONAL",source:"مركز الأزهر العالمي للفتوى الإلكترونية - الشيخ أمير عبد العال",tags:["صلاة","جمع","عادة","رخصة","عذر"]},{id:"prayer_jamaa_taqdir_mazni",category:N.PRAYER_PURITY,title:"تقدير الطبيب للعذر: الطبيب فقيه نفسه",question:"من الذي يقرر هل الطبيب معذور في الجمع أم لا؟",medical_context:"جمع، عذر، تقدير، ضرورة، طبيب، مسؤولية",ruling:`أوضحت دار الإفتاء المصرية ومركز الأزهر العالمي مبدأً مهماً: الطبيب "فقيه نفسه" في تقدير مدى انشغاله والعذر.

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

الحكم النهائي: الطبيب مسؤول أمام الله عن تقديره للعذر، فليكن عادلاً في الحكم على نفسه.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية + مركز الأزهر العالمي للفتوى الإلكترونية",tags:["صلاة","جمع","عذر","مسؤولية","تقدير"]},{id:"prayer_jamaa_patient",category:N.PRAYER_PURITY,title:"حكم المريض الذي يخضع للجراحة",question:"هل للمريض الذي يُخدر أو يشق عليه الحركة حق الجمع كذلك؟",medical_context:"مريض، جراحة، تخدير، حركة، صلاة، جمع",ruling:`أوضح مركز الأزهر العالمي للفتوى أن حكم المريض الذي يخضع للجراحة يتماهى مع حكم الطبيب:

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

الخلاصة: المريض معذور في الجمع والتخفيف، والصلاة واجبة على كل حال بأي هيئة ممكنة.`,verdict:"PERMITTED",source:"مركز الأزهر العالمي للفتوى الإلكترونية",tags:["صلاة","جمع","مريض","جراحة","تخدير"]},{id:"prayer_jamaa_elective_surgery",category:N.PRAYER_PURITY,title:"السيناريو الأول: العمليات المجدولة (Elective Surgery)",question:"كيف يطبق الطبيب جمع الصلاة عملياً إذا كانت لديه عمليات مجدولة معروفة مسبقاً؟",medical_context:"عملية مجدولة، جدول جراحي، جمع تقديم، إجراء عملي",ruling:`إذا كان الطبيب يعلم مسبقاً بعمليات جراحية محددة الأوقات، فالإجراء الصحيح هو جمع التقديم:

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

نصيحة عملية: خطط لصلاتك قبل دخول العمليات، تماماً كما تخطط للجراحة نفسها.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تقديم","عملية مجدولة","إجراء عملي"]},{id:"prayer_jamaa_emergency_surgery",category:N.PRAYER_PURITY,title:"السيناريو الثاني: حالات الطوارئ المفاجئة (Emergency)",question:"كيف يتصرف الطبيب عندما تحدث طارئة مفاجئة وينشغل عن الصلاة؟",medical_context:"طوارئ، حادث، إنقاذ، جمع تأخير، نية، إجراء عملي",ruling:`إذا حدثت طارئة مفاجئة (حادث، نزيف شديد، إنقاذ فوري) واستمرت حتى يمضي وقت الصلة، فالإجراء الصحيح هو جمع التأخير:

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

نصيحة تطبيقية: في حالات الطوارئ، تذكر أن إنقاذ النفس عبادة، والجمع رخصة شرعية.`,verdict:"PERMITTED",source:"دار الإفتاء المصرية - الدكتور أحمد ممدوح",tags:["صلاة","جمع تأخير","طوارئ","حادث","إجراء عملي"]},{id:"prayer_jamaa_isolation_zone",category:N.PRAYER_PURITY,title:"السيناريو الثالث: العمل في مناطق العزل الكامل",question:"كيف يصلي الطبيب بملابس حماية كاملة وهو يعمل في قسم العزل لمدة 8 ساعات؟",medical_context:"عزل، ملابس واقية، 8 ساعات، بدلة كاملة، صلاة بالملابس",ruling:`إذا كان الطبيب يرتدي بدلة عزل كاملة وسيعمل لمدة 8 ساعات متتالية، فالإجراء الصحيح هو:

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

نصيحة ختامية: أداء الصلاة بأي هيئة ممكنة أفضل من تركها، والله يعلم ظرفك ويحاسبك بعدل.`,verdict:"PERMITTED",source:"مجمع البحوث الإسلامية",tags:["صلاة","جمع","عزل","ملابس واقية","إجراء عملي"]},{id:"prayer_jamaa_recommendations",category:N.PRAYER_PURITY,title:"التوصيات الختامية للأطباء والكوادر الطبية",question:"ما هي الضوابط والنصائح الشاملة لتطبيق جمع الصلاة بشكل صحيح؟",medical_context:"توصيات، ضوابط، نصائح، أخلاقيات، مسؤولية",ruling:`وضعت المؤسسات الفتوائية الثلاث (دار الإفتاء، مجمع البحوث، مركز الأزهر) مجموعة من التوصيات الختامية:

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
"إن المواءمة بين قدسية الوقت الشعائري وقدسية النفس البشرية التي اؤتمن الطبيب على حفظها ممكنة بفضل سعة الفقه الإسلامي ورحابة مقاصده، والله تعالى أعلى وأعلم."`,verdict:"PERMITTED",source:"دار الإفتاء المصرية + مجمع البحوث الإسلامية + مركز الأزهر العالمي للفتوى",tags:["توصيات","ضوابط","نصائح","أخلاقيات","مسؤولية"]},{id:"ethics_animal_experiments",category:N.MEDICAL_EXPERIMENTS,title:"إجراء التجارب الطبية على الحيوان",question:"ما حكم إجراء التجارب الطبية على الحيوانات؟",medical_context:"تجارب حيوانية، أبحاث طبية، حيوان، دراسات سلامة",ruling:`يجوز إجراء التجارب على الحيوانات لتحقيق غرض طبي مشروع (كاستكشاف دواء جديد أو علاج)، بشروط صارمة:

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

الحكم الشرعي: التجارب على الحيوانات جائزة عند الضرورة الطبية مع الرفق والحد الأدنى من الألم.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي + الموسوعة الفقهية الإسلامية",tags:["تجارب","حيوان","بحث علمي","أخلاقيات"]},{id:"ethics_human_experiments",category:N.MEDICAL_EXPERIMENTS,title:"إجراء التجارب الطبية على الإنسان",question:"ما حكم التجارب الطبية على البشر (التجارب السريرية)؟",medical_context:"تجارب سريرية، clinical trials، تجارب بشرية، بحث طبي، consent",ruling:`التجارب الطبية على الإنسان نوعان مختلفان جداً:

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

الحكم الشرعي: التجارب البحثية على البشر جائزة نظرياً لكن بحدود صارمة جداً تحمي كرامة الإنسان وحياته.`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي + د. محمود شلتوت",tags:["تجارب بشرية","clinical trials","أخلاقيات","موافقة"]},{id:"obgyn_life_support_withdrawal",category:N.ICU_DEATH,title:"نزع أجهزة الإعاشة عن المريض (Withdrawing Life Support)",question:"متى يجوز نزع أجهزة التنفس الصناعي والإعاشة عن المريض؟",medical_context:"موت دماغي، موت جذع المخ، أجهزة إعاشة، ventilator، brain death",ruling:`نزع الأجهزة الطبية يختلف حسب الحالة:

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
يجوز نزع أجهزة الإعاشة عن الميت دماغياً (موت جذع المخ) المحقق بتشخيص متعدد، مع موافقة الأسرة، لأن الموت الدماغي يعتبر موتاً شرعياً عند المجامع الفقهية.`,verdict:"PERMITTED",source:"مجمع الفقه الإسلامي الدولي + د. أنس أبو شادي",tags:["موت دماغي","أجهزة","إعاشة","عناية","نهائي"]},{id:"obgyn_fgm_forbidden",category:N.WOMEN_PREGNANCY,title:"ختان الإناث (Female Genital Mutilation)",question:"ما هو الحكم الشرعي والطبي لختان الإناث؟",medical_context:"ختان إناث، FGM، تشويه الأعضاء التناسلية، ضرر صحي",ruling:`حكم ختان الإناث: حرام شرعاً وجريمة طبية وإنسانية

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
ختان الإناث حرام شرعاً بإجماع الفقهاء المعاصرين، وحرام طبياً (يسبب أضراراً لا تُحتمل)، وحرام قانوناً في معظم دول العالم. لا يجوز لأي طبيب إجراؤه بأي حال، والواجب الديني والأخلاقي منعه ومحاربته.`,verdict:"FORBIDDEN",source:"دار الإفتاء المصرية + الشيخ عطية صقر + الشيخ يوسف القرضاوي",tags:["ختان","إناث","تشويه","ضرر","FGM","حرام"]},{id:"pharma_stimulants_doping",category:N.PHARMACY_DRUGS,title:"المنشطات والمشروبات والعقاقير المنشطة (Doping)",question:"ما هو الحكم الشرعي لتناول المنشطات الرياضية والبدنية؟",medical_context:"منشطات، دوبينج، استيرويدات، منشطات رياضية، أداء",ruling:`المنشطات محرمة شرعاً لأسباب متعددة:

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
تناول المنشطات حرام شرعاً لما فيها من ضرر مؤكد على الصحة، وغش في المنافسات، ولا يجوز بأي حال إلا إذا كانت دواءً موصوفاً من طبيب لمرض معين.`,verdict:"FORBIDDEN",source:"د. مصطفى أحمد زيد + الفقه الميسر + دار الإفتاء المصرية",tags:["منشطات","دوبينج","رياضة","غش","ضرر","حرام"]},{id:"pharma_deceptive_marketing",category:N.PHARMACY_DRUGS,title:"الدعاية والإعلان الكاذب للأدوية (Deceptive Marketing)",question:"ما هي الضوابط الشرعية للدعاية والإعلان عن الأدوية؟",medical_context:"دعاية دوائية، إعلان، تسويق، كذب، أعراض جانبية",ruling:`الدعاية الدوائية يجب أن تكون صادقة وأمينة:

الأصل الفقهي: حرمة الكذب والتدليس:
- قال تعالى: "وَلَا تَشْهَدُ بِالزُّورِ"
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
الدعاية الدوائية يجب أن تكون صادقة وأمينة وشاملة. الكذب أو المبالغة أو إخفاء الأضرار حرام شرعاً، والصيدلي والطبيب والشركة المسؤولة عن الضرر الذي يقع بسبب الدعاية الكاذبة.`,verdict:"CONDITIONAL",source:"دار الإفتاء المصرية + أحكام الأدوية والدعاية الطبية",tags:["دعاية","إعلان","كذب","غش","أدوية","تدليس","أعراض جانبية"]},{id:"pharma_burning_drugs_market",category:N.PHARMACY_DRUGS,title:"حرق الأدوية / التلاعب بالأسعار والفواتير (Burning)",question:'ما حكم بيع الدواء بطريقة "الحرق" (خصم كبير جداً من السعر الفعلي) لتحقيق أهداف مبيعات وهمية؟',medical_context:"حرق، خصم، تلاعب، فواتير مزيفة، تسويق",ruling:`حرق الأدوية (الخصم الكبير جداً) حرام شرعاً:

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
حرق الأدوية (الخصم غير الحقيقي مع تزوير الفواتير) حرام شرعاً وقانوناً، لما فيه من كذب وتدليس وإفساد للسوق. جائز الخصم الحقيقي بفواتير حقيقية.`,verdict:"FORBIDDEN",source:"شرعة التجارة الإسلامية + أحكام البيع والغش",tags:["حرق","سوق","تلاعب","فواتير","خصم","تزوير","غش"]},{id:"pharma_insurance_fraud_theft",category:N.PHARMACY_DRUGS,title:"بيع أدوية التأمين الصحي للأفراد غير المستحقين (Insurance Fraud)",question:"هل يجوز للصيدلي أو الموظف بيع أدوية التأمين الصحي المدعومة لأشخاص غير مستحقين؟",medical_context:"تأمين صحي، صيدلية، مال عام، مستحقون، دعم",ruling:`بيع أدوية التأمين لغير المستحقين حرام قطعاً:

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
بيع أدوية التأمين الصحي المدعومة لأشخاص غير مستحقين حرام قطعاً وتعتبر سرقة وخيانة أمانة. الواجب على الموظف رفع يده عن هذا الفعل فوراً، والتوبة والرجوع إلى الله تعالى.`,verdict:"FORBIDDEN",source:"دار الإفتاء المصرية + الفقه الإسلامي (السرقة والخيانة)",tags:["تأمين","مال عام","فساد","سرقة","خيانة أمانة","حرام"]},{id:"pharma_pharmacist_unauthorized_diagnosis",category:N.PHARMACY_DRUGS,title:"تشخيص الصيدلي للمرض ووصفه للدواء بدلاً من الطبيب",question:"هل يجوز للصيدلي أن يشخص المرض ويصف الدواء بدلاً من الطبيب دون استشارة؟",medical_context:"صيدلي، تشخيص، وصفة، طبيب، مسؤولية، ضرر",ruling:`تشخيص الصيدلي وحده للمرض حرام شرعاً وطبياً:

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
لا يجوز للصيدلي تشخيص المرض ووصف الدواء من عنده بدلاً من الطبيب. دوره يقتصر على الصرف برشة طبيب موثوقة، والنصح حول كيفية استخدام الدواء. أي تشخيص بدون طبيب يعتبر "تطبب" محرم وضامن للضرر.`,verdict:"FORBIDDEN",source:"الفقه الإسلامي (التطبب والمسؤولية) + القوانين الطبية",tags:["صيدلي","تشخيص","تطبب","مسؤولية","ضرر","طبيب"]},{id:"secrets_medical_confidentiality",category:N.MISCELLANEOUS,title:"إفشاء السر الطبي وحفظ سرية المريض",question:"متى يجوز للطبيب إفشاء سر المريض؟ وما حدود الكتمان الطبي؟",medical_context:"سر طبي، سرية، confidentiality، خصوصية، إفشاء",ruling:`الأصل الفقهي الأول: وجوب كتمان السر:
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
أصل حفظ سر المريض واجب على الطبيب، والإفشاء لا يجوز إلا في حالات استثنائية محددة بدقة (منع ضرر أكبر، أمراض معدية تهدد المجتمع، إبلاغ قانوني، شهادة قضائية، موافقة المريض).`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي + د. محمود ضيفي",tags:["سر طبي","سرية","كتمان","خصوصية","إفشاء","أمانة"]},{id:"liability_medical_malpractice",category:N.MISCELLANEOUS,title:"المسؤولية الجنائية والمدنية للطبيب (Medical Malpractice)",question:"متى يتحمل الطبيب مسؤولية قانونية وشرعية عن خطئه الطبي؟",medical_context:"خطأ طبي، إهمال، مسؤولية، ضمان، negligence",ruling:`المسؤولية الطبية تقوم على عنصرين:

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
الطبيب مسؤول (ضامن) عن الخطأ إذا كان جاهلاً أو مهملاً أو متعمداً أو لم يحصل على موافقة المريض. أما إذا كان حاذقاً واتبع الأصول الطبية وأذن المريض وحدث ضرر خارج عن إرادته، فلا ضمان عليه.`,verdict:"CONDITIONAL",source:"ابن القيم الجوزية + القوانين الطبية الحديثة + قرارات المحاكم",tags:["خطأ طبي","ضمان","إهمال","مسؤولية","تعويض","جنائي"]},{id:"modern_autopsy_dissection",category:N.MISCELLANEOUS,title:"تشريح الجثث (Autopsy)",question:"ما هو الحكم الشرعي لتشريح جثة الميت؟ وفي أي الحالات يجوز؟",medical_context:"تشريح، جثة، تشريح جنائي، تعليم، post-mortem",ruling:`الأصل الشرعي: حرمة الميت:
- قال تعالى: "وَإِذَا قُضِيَ الْأَمْرُ لَدَيْهِمْ خَرَجُوا مِنْ أَنْدَادٍ وَمِنْهُمْ مَنْ ظَلَمَ نَفْسَهُ"
- النبي ﷺ قال: "كسر عظم الميت ككسره حياً" (أي حرام وآثم)
- الميت له حرمة وكرامة حتى بعد وفاته

المبدأ العام:
يحرم تشريح الجثة أصلاً، لكن تجوز في حالات استثنائية للضرورة:

الحالات الاستثنائية:

الحالة الأولى: الضرورة الجنائية:
- بأمر من القاضي أو السلطات المختصة
- لمعرفة سبب الموت في قضايا جنائية
- مثال: شك في أن الموت لم يكن طبيعياً (تسمم، قتل)
- الحكم: جائز بل واجب (للعدالة)
- الشروط:
  * أمر رسمي من السلطات
  * احترام الجثة والتعامل برفق
  * دفن كل الأجزاء بعد الانتهاء

الحالة الثانية: الغرض التعليمي:
- لتدريب طلاب الطب على التشريح
- الحكم: جائز مع الشروط التالية:
  * ألا يوجد بديل (مثل النماذج الصناعية)
  * موافقة الميت (قبل وفاته) أو أهله
  * احترام كامل للجثة
  * عدم العبث بالبقايا

الحالة الثالثة: الأغراض الطبية البحثية:
- أبحاث طبية لاكتشاف أسباب أمراض
- مثال: دراسة السرطان أو الأمراض المعدية
- الحكم: جائز بشروط أصعب:
  * موافقة الميت أو أهله
  * تصريح من السلطات
  * هدف طبي حقيقي واضح

الحالة الرابعة: رصد الأوبئة:
- في حالة انتشار وباء (كوفيد-19)
- لمعرفة كيفية انتقال العدوى
- الحكم: جائز
- الشروط: كل الشروط أعلاه

شروط التشريح المشروع:

الشرط الأول: الحصول على إذن رسمي:
- أمر من القاضي (جنائي)
- موافقة من الأهل (تعليمي)
- تصريح من السلطات الصحية (علمي)

الشرط الثاني: احترام الجثة:
- عدم تعريض الجثة للسخرية أو الإهانة
- الحذر من إلحاق الضرر الزائد
- التعامل برفق واحترام

الشرط الثالث: الحفاظ على الكرامة:
- عدم تعريض الأعضاء التناسلية
- عدم الصور الفوتوغرافية بدون ضرورة
- عدم تسجيل التفاصيل المحرجة

الشرط الرابع: دفن كامل البقايا:
- بعد انتهاء التشريح، يُدفن كل شيء
- لا يُترك أي جزء معلقاً
- يُوارى التراب كما يليق بالميت

شروط إضافية لبعض الحالات:

التشريح التعليمي:
- يجب أن لا يوجد بديل (مثل الموديلات 3D الحديثة)
- الأفضل: استخدام الصور الطبية والنماذج بدل الجثث الحقيقية
- إذا لزم الأمر: جثة واحدة تكفي لعدة طلاب

الحالات المحرمة من التشريح:

- تشريح بدون أمر قانوني أو إذن شرعي
- تشريح للفضول أو للعبث
- تشريح لأسباب سياسية أو عنصرية
- تشريح لأعضاء دينية (الأئمة، الشهداء) إلا بضرورة قصوى

الحكم على طلاب الطب:

حكم حضور التشريح:
- جائز للطالب إذا كان لغرض تعليمي شرعي
- الشروط: موافقة من الجامعة والمسؤولين الشرعيين
- لا يجوز اختياري (يجب أن يكون فرضياً)
- بدون خيار الرفض

الحكم على الطبيب الشرعي:

- طبيب الطب الشرعي يعمل بأمر حكومي
- عمله جائز شرعاً (بل قد يكون واجباً للعدالة)
- التشريح لكشف الحقيقة = خدمة للشريعة

الحكم الشرعي:
تشريح الجثة حرام أصلاً، لكن يجوز للضرورة الجنائية (كشف الجريمة)، أو التعليم (بموافقة)، أو البحث الطبي (بموافقة)، بشرط الاحترام والدفن الكامل بعد الانتهاء. الأفضل استخدام البدائل الحديثة (صور، نماذج صناعية) بدل الجثث الحقيقية.`,verdict:"CONDITIONAL",source:"لجنة الإفتاء بالأزهر + مجمع الفقه الإسلامي الأردني",tags:["تشريح","جثة","تعليم","جنائي","autopsy","بحث"]},{id:"modern_cloning_genetic",category:N.GENETICS_REPRODUCTION,title:"الاستنساخ والهندسة الوراثية (Cloning & Genetic Engineering)",question:"ما هو الحكم الشرعي للاستنساخ البشري والاستنساخ العلاجي والهندسة الوراثية؟",medical_context:"استنساخ، cloning، خلايا جذعية، جينات، وراثة، هندسة",ruling:`أنواع الاستنساخ:

النوع الأول: الاستنساخ البشري (Reproductive Cloning):
التعريف: إنتاج نسخة طبق الأصل من الإنسان (نسخة بيولوجية مطابقة تماماً لآخر)

الحكم: حرام قطعاً وبإجماع الفقهاء المعاصرين

الأسباب الشرعية للتحريم:

1. العبث بالخلق:
   - قال تعالى: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ"
   - الاستنساخ محاولة تقليد الخلق الإلهي
   - قال تعالى: "الَّذِي خَلَقَهُ فَسَوَّاهُ فَنَفَخَ فِيهِ مِن رُّوحِهِ"

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
5. استنساخ الحيوان: جائز`,verdict:"CONDITIONAL",source:"مجمع الفقه الإسلامي الدولي (قرار 96/10) + د. أنس أبو شادي",tags:["استنساخ","خلايا جذعية","جينات","هندسة وراثية","DNA","أمراض وراثية"]},{id:"modern_forbidden_medicines",category:N.PHARMACY_DRUGS,title:"التداوي بالمحرمات (أدوية تحوي كحول أو خنزير)",question:"هل يجوز استخدام أدوية تحوي كحولاً أو مشتقات خنزير؟",medical_context:"كحول، خنزير، gelatin، جيلاتين، مواد محرمة، أدوية",ruling:`المشكلة الطبية:
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
- المستقبل: الأمل بتطوير أدوية إسلامية بديلة`,verdict:"CONDITIONAL",source:"د. أنس أبو شادي + قرارات المجامع الفقهية + فتاوى معاصرة",tags:["كحول","خنزير","جيلاتين","أدوية","لقاحات","محرم","ضرورة"]},{id:"u8_wiping_socks",category:N.MISCELLANEOUS,title:"المسح على الخفين/الجوارب",question:"ما حكم المسح على الشراب (الجوارب)؟",medical_context:"wudu, socks, wiping, وضوء",ruling:`الحكم الشرعي:
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
جائز المسح على الخفين والجوارب بشروطها (لبس على طهارة، سترة، طهارة)، ومدته يوم وليلة للمقيم وثلاثة أيام للمسافر. وهذا تيسير من الشريعة ورفع للحرج.`,verdict:"PERMITTED",source:"جمهور الفقهاء (الحنفية، المالكية، الشافعية، الحنابلة)",tags:["وضوء","مسح","جوارب","خفين","طهارة"]},{id:"u8_menstruation_quran",category:N.MISCELLANEOUS,title:"قراءة الحائض للقرآن",question:"هل يجوز للحائض قراءة القرآن (للطالبة/المعلمة الطبيبة)؟",medical_context:"menstruation, quran, reading, حيض، قرآن",ruling:`المشكلة الطبية والشرعية:
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
- التيسير: استخدام التقنيات الحديثة (شاشات، تطبيقات) بدل مس المصحف`,verdict:"CONDITIONAL",source:"المذهب المالكي + بعض الفقهاء المعاصرين + ابن عثيمين",tags:["حيض","قرآن","تعليم","قراءة","مصحف","طهارة"]},{id:"u8_shortening_prayer",category:N.MISCELLANEOUS,title:"قصر وجمع الصلاة",question:"متى يقصر المسافر الصلاة أو يجمعها؟ وللطبيب أثناء عمل جراحي طويل؟",medical_context:"travel, prayer, shortening, journey, جمع، قصر، صلاة",ruling:`تعريفات مهمة:

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
- البديل: القضاء في أول فرصة`,verdict:"PERMITTED",source:"صحيح مسلم + ابن تيمية + الفقه الإسلامي المعاصر",tags:["سفر","صلاة","جمع","قصر","عملية","جراحة"]},{id:"u8_zakat_salary",category:N.MISCELLANEOUS,title:"زكاة الراتب والمهن الحرة",question:"كيف يخرج الطبيب زكاة عيادته أو راتبه؟",medical_context:"zakat, salary, wealth, income, زكاة، دخل",ruling:`تعريف الزكاة في المهن:
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
- الاستحقاق: الفقراء والمساكين والأعمال الخيرية الإسلامية`,verdict:"CONDITIONAL",source:"فقه الزكاة + ابن قدامة + الشيخ ابن عثيمين",tags:["زكاة","مال","نصاب","دخل","راتب","عيادة"]}],My=(x,M)=>{const R=[];for(let o=0;o<=M.length;o++)R[o]=[o];for(let o=0;o<=x.length;o++)R[0][o]=o;for(let o=1;o<=M.length;o++)for(let q=1;q<=x.length;q++)M.charAt(o-1)===x.charAt(q-1)?R[o][q]=R[o-1][q-1]:R[o][q]=Math.min(R[o-1][q-1]+1,R[o][q-1]+1,R[o-1][q]+1);return R[M.length][x.length]},gf=(x,M)=>{const R=Math.max(x.length,M.length);return R===0?1:1-My(x,M)/R},za=x=>x?x.toLowerCase().normalize("NFKD").replace(/[\u064B-\u0652\u0640]/g,"").replace(/[أإآ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/[^\u0600-\u06FF0-9\s]/g," ").split(/\s+/).filter(Boolean):[],Ry=(x,M)=>{const R=za(x),o=x.toLowerCase().trim(),q=/^[a-z\s]+$/i.test(o),Z=za(M.title),$=za(M.question||""),_l=za(M.medical_context||""),U=za((M.tags||[]).join(" ")),p=za(M.ruling||""),X=(M.medical_context||"").toLowerCase(),H=(M.tags||[]).join(" ").toLowerCase();let V=0,hl=!1;if(q&&o.length>0){X.includes(o)&&(V+=20,hl=!0),H.includes(o)&&(V+=15,hl=!0);const F=o.split(/\s+/).filter(vl=>vl.length>2);if(F.length===0)return 0;let al=0;for(const vl of F)X.includes(vl)?(V+=12,al++):H.includes(vl)&&(V+=10,al++);if(hl=al>0,!hl){const vl=X.split(/[\s,()/-]+/);for(const xl of F)for(const Hl of vl)if(Hl.length>2){const Tl=gf(xl,Hl);Tl>.78&&(V+=3+2*Tl)}}}else{if(!R.length)return 0;let F=0;for(const al of R)al.length<2||(_l.includes(al)?(V+=14,F++):Z.includes(al)?(V+=11,F++):U.includes(al)?(V+=9,F++):$.includes(al)&&(V+=7,F++));if(hl=F>0,!hl){for(const al of R)if(!(al.length<2)){for(const vl of _l)if(vl.length>2){const xl=gf(al,vl);xl>.8&&(V+=3+2*xl)}for(const vl of U)if(vl.length>2){const xl=gf(al,vl);xl>.8&&(V+=2+1.5*xl)}}}if(V===0)for(const al of R)p.includes(al)&&(V+=2)}return V||0},Uy=(x,M)=>M.map(o=>({fatwa:o,score:Ry(x,o)})).filter(o=>o.score>3).sort((o,q)=>q.score-o.score).map(o=>o.fatwa).slice(0,5),Cy=()=>{var Tl;const[x]=Kl.useState(Dy),[M,R]=Kl.useState([]),[o,q]=Kl.useState(""),Z=!1,[$,_l]=Kl.useState(!1),[U,p]=Kl.useState(!1),[X,H]=Kl.useState(null),[V,hl]=Kl.useState("chat"),[F,al]=Kl.useState(null),vl=Kl.useRef(null),xl=()=>{const O=vl.current;O&&(O.scrollTop=O.scrollHeight)};Kl.useEffect(()=>{xl()},[M,$]);const Hl=async()=>{if(!o.trim())return;const O=o,Dl={id:Date.now().toString(),role:"user",text:O,isEmergency:Z};R(w=>[...w,Dl]),q(""),_l(!0);try{let w=[],L="";const Ml=Uy(O,x);if(Ml.length>0){w=Ml.map(mt=>mt.id);const pt=Ml.length;pt===1?L="ها هي الفتوى عزيزي الطبيب":L=`ها هي ${pt} فتاوى مرتبطة بسؤالك من مصادر متعددة:`}else L="عذرًا، لم أجد فتوى مطابقة لهذا السؤال في قاعدة البيانات الحالية.";const Wl={id:(Date.now()+1).toString(),role:"model",text:L,isEmergency:Z,relatedFatwaIds:w};R(pt=>[...pt,Wl])}catch(w){console.error(w),R(L=>[...L,{id:(Date.now()+1).toString(),role:"model",text:"عذرًا، حدث خطأ غير متوقَّع."}])}finally{_l(!1)}};return v.jsxs("div",{className:"flex flex-col h-[100dvh] bg-slate-50 text-slate-800 font-tajawal overflow-hidden",children:[v.jsx("header",{className:"px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex items-center justify-center relative z-20",children:v.jsxs("div",{className:"flex flex-col items-center gap-1",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"p-1.5 rounded-lg bg-teal-50",children:v.jsx(Oy,{className:"w-6 h-6 text-teal-700"})}),v.jsx("h1",{className:"text-2xl font-bold font-amiri text-gray-900 leading-none",children:"الطــبيب الفقيــه"})]}),v.jsx("span",{className:"text-sm text-teal-600 font-ruqaa opacity-90 tracking-wide transform -translate-y-2",children:"(بين الطب والشريعة)"})]})}),v.jsxs("main",{className:"flex-1 flex flex-col relative overflow-hidden",children:[v.jsx("div",{className:"absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"}),V==="chat"&&v.jsxs("section",{className:"flex-1 flex flex-col relative z-10 w-full mx-auto max-w-lg md:max-w-2xl",children:[v.jsxs("div",{ref:vl,className:"flex-1 overflow-y-auto p-3 md:p-5 space-y-6 pb-24 scrollbar-hide",children:[M.length===0&&v.jsx("div",{className:"flex flex-col items-center justify-center min-h-[50vh] text-center mt-2 px-2",children:v.jsxs("div",{className:"w-full space-y-6 animate-in fade-in zoom-in duration-700",children:[v.jsx("div",{className:"flex justify-center",children:v.jsx("div",{className:"bg-gradient-to-tr from-teal-50 to-white p-4 rounded-full shadow-sm ring-1 ring-gray-100",children:v.jsx(py,{className:"w-10 h-10 text-teal-600"})})}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("h2",{className:"text-xl font-bold text-gray-800 font-amiri",children:"السلام عليكم دكتور"}),v.jsx("p",{className:"text-xs text-gray-500 max-w-xs mx-auto leading-relaxed",children:"صلّ على سيدنا النبي ﷺ خير معلم الناس الخير."})]}),v.jsxs("div",{className:"grid grid-cols-1 gap-3 w-full",children:[v.jsxs("div",{className:"relative overflow-hidden bg-white p-4 rounded-xl border border-teal-100 shadow-sm text-right",children:[v.jsx(Rr,{className:"absolute -bottom-2 -left-2 w-12 h-12 text-teal-50 opacity-50 rotate-12"}),v.jsx("p",{className:"text-gray-800 font-amiri text-base font-medium leading-relaxed mb-2 relative z-10",children:'"لا أعلم علمًا بعد الحلال والحرام أنبل من الطب"'}),v.jsx("span",{className:"text-xs font-bold text-teal-600 block relative z-10",children:"- الإمام الشافعي"})]}),v.jsxs("div",{className:"relative overflow-hidden bg-white p-4 rounded-xl border border-blue-100 shadow-sm text-right",children:[v.jsx(Rr,{className:"absolute -bottom-2 -left-2 w-12 h-12 text-blue-50 opacity-50 rotate-12"}),v.jsx("p",{className:"text-gray-800 font-amiri text-base font-medium leading-relaxed mb-2 relative z-10",children:'"عليّ أن أتسلح بالعلم؛ لأجابه هذا العدو البغيض الذي يفتك ببنيان الله المقدس"'}),v.jsx("span",{className:"text-xs font-bold text-teal-600 block relative z-10",children:"- أبو بكر الرازي"})]})]})]})}),M.map(O=>{const Dl=(O.relatedFatwaIds||[]).map(w=>x.find(L=>L.id===w)).filter(w=>w!==void 0);return v.jsxs("div",{className:`flex w-full flex-col gap-2 ${O.role==="user"?"items-end":"items-start"}`,children:[O.role==="user"&&v.jsx("div",{className:"bg-teal-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-md max-w-[85%]",children:v.jsx("p",{className:"text-base",children:O.text})}),O.role==="model"&&v.jsxs("div",{className:"w-full animate-in slide-in-from-bottom-2 duration-500",children:[Dl.length===0&&v.jsx("div",{className:"bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-gray-800 max-w-[90%] mb-2",children:v.jsx("p",{className:"text-sm leading-relaxed",children:O.text})}),Dl.length>0&&v.jsx("div",{className:"bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-gray-800 max-w-[90%] mb-3",children:v.jsx("p",{className:"text-sm leading-relaxed",children:O.text})}),Dl.map((w,L)=>v.jsxs("div",{className:"w-full rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white mb-3",children:[v.jsxs("div",{className:"px-4 py-3 border-b flex justify-between items-center bg-gradient-to-r from-teal-50 to-blue-50 border-gray-100",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(Mr,{className:"w-4 h-4 text-teal-600"}),v.jsxs("span",{className:"text-xs font-bold text-teal-700",children:["فتوى ",Dl.length>1?`${L+1} من ${Dl.length}`:"تفصيلية"]})]}),v.jsx("span",{className:"text-[11px] text-teal-700 bg-white/70 px-2 py-1 rounded font-semibold",children:w.source})]}),v.jsxs("div",{className:"p-4 space-y-4",children:[v.jsx("h3",{className:"font-bold text-lg font-amiri leading-snug text-gray-900 border-r-4 border-teal-600 pr-3",children:w.title}),v.jsxs("div",{className:"bg-amber-50/50 rounded p-3 border border-amber-100/50",children:[v.jsx("p",{className:"text-xs font-bold text-amber-800 mb-2",children:"❓ السؤال:"}),v.jsx("p",{className:"text-sm text-amber-900 leading-relaxed",children:w.question})]}),w.medical_context&&v.jsxs("div",{className:"bg-blue-50/50 rounded p-3 border border-blue-100/50",children:[v.jsx("p",{className:"text-xs font-bold text-blue-800 mb-2",children:"🏥 السياق الطبي:"}),v.jsx("p",{className:"text-sm text-blue-900 leading-relaxed font-mono",children:w.medical_context})]}),v.jsxs("div",{className:"bg-green-50/50 rounded p-4 border-l-4 border-green-600",children:[v.jsx("p",{className:"text-xs font-bold mb-3 text-green-800",children:"✅ الحكم الشرعي والتفصيل:"}),v.jsx("p",{className:"text-sm leading-8 whitespace-pre-wrap text-gray-800 font-medium",children:w.ruling})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-xs font-bold text-gray-600",children:"الحكم النهائي:"}),v.jsxs("span",{className:`text-xs font-bold px-3 py-1 rounded-full ${w.verdict==="PERMITTED"?"bg-green-100 text-green-800":w.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[w.verdict==="PERMITTED"&&"✓ جائز",w.verdict==="FORBIDDEN"&&"✗ محرم",w.verdict==="CONDITIONAL"&&"◎ مشروط"]})]}),w.tags&&w.tags.length>0&&v.jsx("div",{className:"flex flex-wrap gap-2",children:w.tags.map((Ml,Wl)=>v.jsxs("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full",children:["#",Ml]},Wl))})]})]},w.id))]})]},O.id)}),$&&v.jsx("div",{className:"flex justify-start w-full",children:v.jsxs("div",{className:"bg-white px-3 py-2 rounded-xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-1",children:[v.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),v.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),v.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})]}),v.jsxs("div",{className:"flex-shrink-0 px-3 py-3 bg-white border-t border-gray-100",children:[v.jsxs("button",{onClick:()=>p(!U),className:"w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:shadow-md",children:[v.jsx("span",{className:`transition-transform ${U?"rotate-180":""}`,children:"▼"}),v.jsx("h3",{className:"text-sm font-bold text-gray-800",children:"📚 فهرس الموضوعات"})]}),U&&v.jsx("div",{className:"mt-2 bg-white border border-gray-200 rounded-lg p-3 space-y-2 max-h-64 overflow-y-auto",children:X===null?v.jsx("div",{className:"space-y-2",children:Ur.map(O=>v.jsx("button",{onClick:()=>{H(O.id),hl("category")},className:"w-full text-right p-2 bg-blue-50 hover:bg-blue-100 rounded text-xs font-semibold text-blue-700 transition font-amiri",children:O.name},O.id))}):v.jsxs("div",{className:"space-y-2",children:[v.jsx("button",{onClick:()=>H(null),className:"w-full text-right p-2 bg-gray-200 hover:bg-gray-300 rounded text-xs font-semibold text-gray-700 transition font-amiri",children:"← العودة"}),x.filter(O=>O.category===X).map(O=>v.jsx("button",{onClick:()=>{R([{id:Date.now().toString(),role:"user",text:O.question,isEmergency:!1},{id:(Date.now()+1).toString(),role:"model",text:O.title,isEmergency:!1,relatedFatwaIds:[O.id]}]),p(!1)},className:"w-full text-right p-2 bg-green-50 hover:bg-green-100 rounded text-xs font-semibold text-green-700 transition line-clamp-2 font-amiri",children:O.question},O.id))]})})]}),v.jsxs("div",{className:"relative w-full px-3 pt-3 pb-4 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent border-t border-gray-100 flex-shrink-0",children:[v.jsxs("div",{className:"bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-gray-100 p-1.5 flex items-center gap-2 w-full",children:[v.jsx("input",{type:"text",value:o,onChange:O=>q(O.target.value),onKeyDown:O=>O.key==="Enter"&&Hl(),placeholder:"سل ما تريد أو اكتب الكلمة المفتاحية",className:"flex-1 bg-transparent border-none focus:ring-0 px-4 text-gray-700 placeholder-gray-400 text-base h-10 font-tajawal",disabled:$}),v.jsx("button",{onClick:Hl,disabled:!o.trim()||$,className:`w-10 h-10 flex items-center justify-center rounded-full transition-all flex-shrink-0 ${o.trim()&&!$?"bg-teal-600 text-white hover:bg-teal-700 shadow-md rotate-0":"bg-gray-100 text-gray-300 cursor-not-allowed"}`,children:v.jsx(yf,{className:`w-4 h-4 ${document.dir==="rtl"?"rotate-180 mr-0.5":""}`})})]}),v.jsx("div",{className:"text-center mt-5 mb-0",children:v.jsx("p",{className:"text-[13px] text-gray-600 font-amiri leading-relaxed opacity-90",children:"(أخوكم وابنكم، محمد محمود الفيومي، كلية طب بنين القاهرة - جامعة الأزهر الشريف)"})})]})]}),V==="category"&&X&&v.jsxs("section",{className:"flex-1 flex flex-col relative z-10 w-full mx-auto max-w-lg md:max-w-2xl",children:[v.jsxs("div",{className:"flex-1 overflow-y-auto p-3 md:p-5 space-y-3 pb-24 scrollbar-hide",children:[v.jsx("button",{onClick:()=>{hl("chat"),H(null)},className:"mb-4 p-3 bg-gray-200 hover:bg-gray-300 rounded text-sm font-semibold text-gray-700 transition font-amiri w-full text-right sticky top-0 z-10 bg-white/80 backdrop-blur",children:"← العودة إلى الفهرس"}),v.jsx("h2",{className:"text-lg font-bold text-gray-900 font-amiri text-right mb-4 mt-6",children:(Tl=Ur.find(O=>O.id===X))==null?void 0:Tl.name}),v.jsxs("p",{className:"text-xs text-gray-500 font-amiri text-right mb-3",children:["عدد الأسئلة: ",x.filter(O=>O.category===X).length]}),v.jsx("div",{className:"space-y-2",children:x.filter(O=>O.category===X).length>0?x.filter(O=>O.category===X).map(O=>v.jsx("button",{onClick:()=>{al(O),hl("fatwa")},className:"w-full text-right p-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 text-sm font-semibold text-green-800 transition font-amiri line-clamp-2",children:O.question},O.id)):v.jsx("p",{className:"text-center text-gray-500 py-8 font-amiri",children:"لا توجد أسئلة في هذا الموضوع"})}),v.jsx("div",{className:"h-32"})]}),v.jsx("div",{className:"relative w-full px-3 pt-3 pb-4 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent border-t border-gray-100 flex-shrink-0",children:v.jsxs("div",{className:"bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-gray-100 p-1.5 flex items-center gap-2 w-full",children:[v.jsx("input",{type:"text",value:o,onChange:O=>q(O.target.value),onKeyDown:O=>O.key==="Enter"&&Hl(),placeholder:"سل ما تريد أو اكتب الكلمة المفتاحية",className:"flex-1 bg-transparent border-none focus:ring-0 px-4 text-gray-700 placeholder-gray-400 text-base h-10 font-tajawal",disabled:$}),v.jsx("button",{onClick:Hl,disabled:!o.trim()||$,className:`w-10 h-10 flex items-center justify-center rounded-full transition-all flex-shrink-0 ${o.trim()&&!$?"bg-teal-600 text-white hover:bg-teal-700 shadow-md rotate-0":"bg-gray-100 text-gray-300 cursor-not-allowed"}`,children:v.jsx(yf,{className:`w-4 h-4 ${document.dir==="rtl"?"rotate-180 mr-0.5":""}`})})]})})]}),V==="fatwa"&&F&&v.jsxs("section",{className:"flex-1 flex flex-col relative z-10 w-full mx-auto max-w-lg md:max-w-2xl",children:[v.jsxs("div",{className:"flex-1 overflow-y-auto p-3 md:p-5 space-y-4 pb-24 scrollbar-hide",children:[v.jsx("button",{onClick:()=>{hl("category"),al(null)},className:"mb-4 p-3 bg-gray-200 hover:bg-gray-300 rounded text-sm font-semibold text-gray-700 transition font-amiri w-full text-right sticky top-0 z-10 bg-white/80 backdrop-blur",children:"← العودة إلى الأسئلة"}),v.jsxs("div",{className:"w-full rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white mt-4",children:[v.jsxs("div",{className:"px-4 py-3 border-b flex justify-between items-center bg-gradient-to-r from-teal-50 to-blue-50 border-gray-100",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(Mr,{className:"w-4 h-4 text-teal-600"}),v.jsx("span",{className:"text-xs font-bold text-teal-700",children:"فتوى تفصيلية"})]}),v.jsx("span",{className:"text-[11px] text-teal-700 bg-white/70 px-2 py-1 rounded font-semibold",children:F.source})]}),v.jsxs("div",{className:"p-4 space-y-4",children:[v.jsx("h3",{className:"font-bold text-lg font-amiri leading-snug text-gray-900 border-r-4 border-teal-600 pr-3 text-right",children:F.title}),v.jsxs("div",{className:"bg-amber-50/50 rounded p-3 border border-amber-100/50",children:[v.jsx("p",{className:"text-xs font-bold text-amber-800 mb-2 text-right",children:"❓ السؤال:"}),v.jsx("p",{className:"text-sm text-amber-900 leading-relaxed font-amiri text-right",children:F.question})]}),F.medical_context&&v.jsxs("div",{className:"bg-blue-50/50 rounded p-3 border border-blue-100/50",children:[v.jsx("p",{className:"text-xs font-bold text-blue-800 mb-2 text-right",children:"🏥 السياق الطبي:"}),v.jsx("p",{className:"text-sm text-blue-900 leading-relaxed font-amiri text-right",children:F.medical_context})]}),v.jsxs("div",{className:"bg-green-50/50 rounded p-4 border-l-4 border-green-600",children:[v.jsx("p",{className:"text-xs font-bold mb-3 text-green-800 text-right",children:"✅ الحكم الشرعي والتفصيل:"}),v.jsx("p",{className:"text-sm leading-8 whitespace-pre-wrap text-gray-800 font-medium font-amiri text-right",children:F.ruling})]}),v.jsxs("div",{className:"flex items-center gap-2 justify-end",children:[v.jsxs("span",{className:`text-xs font-bold px-3 py-1 rounded-full ${F.verdict==="PERMITTED"?"bg-green-100 text-green-800":F.verdict==="FORBIDDEN"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:[F.verdict==="PERMITTED"&&"✓ جائز",F.verdict==="FORBIDDEN"&&"✗ محرم",F.verdict==="CONDITIONAL"&&"◎ مشروط"]}),v.jsx("span",{className:"text-xs font-bold text-gray-600",children:"الحكم النهائي:"})]}),F.tags&&F.tags.length>0&&v.jsx("div",{className:"flex flex-wrap gap-2 justify-end",children:F.tags.map((O,Dl)=>v.jsxs("span",{className:"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-amiri",children:["#",O]},Dl))})]})]}),v.jsx("div",{className:"h-32"})]}),v.jsx("div",{className:"relative w-full px-3 pt-3 pb-4 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent border-t border-gray-100 flex-shrink-0",children:v.jsxs("div",{className:"bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-gray-100 p-1.5 flex items-center gap-2 w-full",children:[v.jsx("input",{type:"text",value:o,onChange:O=>q(O.target.value),onKeyDown:O=>O.key==="Enter"&&Hl(),placeholder:"سل ما تريد أو اكتب الكلمة المفتاحية",className:"flex-1 bg-transparent border-none focus:ring-0 px-4 text-gray-700 placeholder-gray-400 text-base h-10 font-tajawal",disabled:$}),v.jsx("button",{onClick:Hl,disabled:!o.trim()||$,className:`w-10 h-10 flex items-center justify-center rounded-full transition-all flex-shrink-0 ${o.trim()&&!$?"bg-teal-600 text-white hover:bg-teal-700 shadow-md rotate-0":"bg-gray-100 text-gray-300 cursor-not-allowed"}`,children:v.jsx(yf,{className:`w-4 h-4 ${document.dir==="rtl"?"rotate-180 mr-0.5":""}`})})]})})]})]})]})},qr=document.getElementById("root");if(!qr)throw new Error("Could not find root element to mount to");const jy=hy.createRoot(qr);jy.render(v.jsx(fy.StrictMode,{children:v.jsx(Cy,{})}));
