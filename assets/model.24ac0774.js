import M from"./BlurredCircle.07336cbe.js";import V from"./ARModelViewer.797dfc23.js";import{_ as j}from"./client-only.16176bda.js";import N from"./Arrow.31b8e489.js";import q from"./Button.ec4cc66d.js";import E from"./NavigationBar.a2e6155f.js";import{u as I}from"./map.15e78ec9.js";import{bI as L,bJ as O,bo as z,bK as D,bj as J,r as t,c5 as K,b as P,l as h,h as e,w as a,f as n,b$ as T,o as c,u as s,bk as F,c as G}from"./entry.5973a855.js";import{q as H}from"./query.eadc2dfb.js";import"./tw-merge.1166cefb.js";import"./nuxt-link.06faa3b9.js";import"./index.4db78ffb.js";import"./utils.0d178348.js";import"./preview.8dbbf744.js";const Q=n("div",{class:"fixed bg-cyan-200 top-0 w-full h-full"},null,-1),S=n("div",{class:"fixed w-full top-0 h-[30vh] bg-gradient-to-b from-yellow-100 to-50%"},null,-1),U=n("div",{class:"flex justify-center items-center h-10 w-10 border border-1 border-black rounded-full"},[n("span",{class:"text-sm"},"AR")],-1),W={key:1},de={__name:"model",async setup(X){let o,r;const i=I(),b=L();b.value=O.yellow[100];const m=z(),w=D(),{slug:_}=w.params,y=J(()=>m.options.history.state.back==="/map"),l=t(),u=t(!1),v=t(!1);t(!1);const{data:d}=([o,r]=K(()=>T(`location-${_}`,()=>H(`location/${_}`).findOne(),{})),o=await o,r(),o),x=()=>{u.value=l.value.canActivateAR()},k=async()=>{l.value.activateAR()},C=()=>{const f=d.value._path;m.push({path:f})};return P(()=>{i.value&&i.value.hide()}),(f,Y)=>{const A=M,R=V,g=j,$=N,p=q,B=E;return c(),h("div",null,[Q,S,e(A,{class:"fixed bg-cyan-500 bottom-0 left-2/4 -translate-x-1/2 translate-y-3/4"}),e(g,null,{default:a(()=>[e(R,{ref_key:"modelViewerRef",ref:l,onLoad:x,"ar-enabled":s(v),model:s(d).model},null,8,["ar-enabled","model"])]),_:1}),e(B,null,{default:a(()=>[e(p,{onClick:C,class:"bg-yellow-200 h-16 w-16 flex justify-center items-center",format:"circle",shadowed:""},{default:a(()=>[e($,{class:F(["h-6 w-6",{"rotate-180":!s(y)}])},null,8,["class"])]),_:1}),s(u)?(c(),G(p,{key:0,onClick:k,class:"flex justify-center items-center bg-yellow-200 h-16 w-16",format:"circle",shadowed:""},{default:a(()=>[U]),_:1})):(c(),h("div",W))]),_:1})])}}};export{de as default};
