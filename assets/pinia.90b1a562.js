import{i as Z}from"./vue-demi.65474690.js";import{E as $,an as k,r as A,w as G,a0 as M,ao as H,i as L,aw as B,t as T,g as J,I as tt,n as et,a3 as st,f as nt}from"./@vue.868258c7.js";/*!
  * pinia v2.0.17
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let N;const R=t=>N=t,U=Symbol();function O(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var E;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(E||(E={}));function it(){const t=H(!0),r=t.run(()=>A({}));let s=[],e=[];const o=k({install(u){R(o),o._a=u,u.provide(U,o),u.config.globalProperties.$pinia=o,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!Z?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:r});return o}const W=()=>{};function V(t,r,s,e=W){t.push(r);const o=()=>{const u=t.indexOf(r);u>-1&&(t.splice(u,1),e())};return!s&&J()&&tt(o),o}function _(t,...r){t.slice().forEach(s=>{s(...r)})}function x(t,r){for(const s in r){if(!r.hasOwnProperty(s))continue;const e=r[s],o=t[s];O(o)&&O(e)&&t.hasOwnProperty(s)&&!L(e)&&!B(e)?t[s]=x(o,e):t[s]=e}return t}const ot=Symbol();function ct(t){return!O(t)||!t.hasOwnProperty(ot)}const{assign:h}=Object;function rt(t){return!!(L(t)&&t.effect)}function ut(t,r,s,e){const{state:o,actions:u,getters:f}=r,a=s.state.value[t];let d;function y(){a||(s.state.value[t]=o?o():{});const b=st(s.state.value[t]);return h(b,u,Object.keys(f||{}).reduce((v,p)=>(v[p]=k(nt(()=>{R(s);const m=s._s.get(t);return f[p].call(m,m)})),v),{}))}return d=q(t,y,r,s,e,!0),d.$reset=function(){const v=o?o():{};this.$patch(p=>{h(p,v)})},d}function q(t,r,s={},e,o,u){let f;const a=h({actions:{}},s),d={deep:!0};let y,b,v=k([]),p=k([]),m;const g=e.state.value[t];!u&&!g&&(e.state.value[t]={}),A({});let C;function F(c){let n;y=b=!1,typeof c=="function"?(c(e.state.value[t]),n={type:E.patchFunction,storeId:t,events:m}):(x(e.state.value[t],c),n={type:E.patchObject,payload:c,storeId:t,events:m});const S=C=Symbol();et().then(()=>{C===S&&(y=!0)}),b=!0,_(v,n,e.state.value[t])}const z=W;function D(){f.stop(),v=[],p=[],e._s.delete(t)}function K(c,n){return function(){R(e);const S=Array.from(arguments),P=[],w=[];function X(i){P.push(i)}function Y(i){w.push(i)}_(p,{args:S,name:c,store:l,after:X,onError:Y});let I;try{I=n.apply(this&&this.$id===t?this:l,S)}catch(i){throw _(w,i),i}return I instanceof Promise?I.then(i=>(_(P,i),i)).catch(i=>(_(w,i),Promise.reject(i))):(_(P,I),I)}}const Q={_p:e,$id:t,$onAction:V.bind(null,p),$patch:F,$reset:z,$subscribe(c,n={}){const S=V(v,c,n.detached,()=>P()),P=f.run(()=>G(()=>e.state.value[t],w=>{(n.flush==="sync"?b:y)&&c({storeId:t,type:E.direct,events:m},w)},h({},d,n)));return S},$dispose:D},l=M(h({},Q));e._s.set(t,l);const j=e._e.run(()=>(f=H(),f.run(()=>r())));for(const c in j){const n=j[c];if(L(n)&&!rt(n)||B(n))u||(g&&ct(n)&&(L(n)?n.value=g[c]:x(n,g[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const S=K(c,n);j[c]=S,a.actions[c]=n}}return h(l,j),h(T(l),j),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{F(n=>{h(n,c)})}}),e._p.forEach(c=>{h(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),g&&u&&s.hydrate&&s.hydrate(l.$state,g),y=!0,b=!0,l}function lt(t,r,s){let e,o;const u=typeof r=="function";typeof t=="string"?(e=t,o=u?s:r):(o=t,e=t.id);function f(a,d){const y=J();return a=a||y&&$(U),a&&R(a),a=N,a._s.has(e)||(u?q(e,r,o,a):ut(e,o,a)),a._s.get(e)}return f.$id=e,f}export{it as c,lt as d};
