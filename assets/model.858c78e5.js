import g from"./BlurredCircle.cb612fda.js";import R from"./ARModelViewer.7df412c3.js";import{_ as A}from"./client-only.d02f6838.js";import B from"./Button.841da2f7.js";import V from"./Arrow.e9d5bcdb.js";import $ from"./NavigationBar.2d706a09.js";import{u as N}from"./map.6e0e2fa3.js";import{bH as j,bI as M,bn as q,bP as E,r as s,c0 as I,b as O,k as D,h as e,w as t,f as n,bV as H,o as P,u as f}from"./entry.fae9dd9f.js";import{q as T}from"./query.833f3544.js";import"./tw-merge.1166cefb.js";import"./nuxt-link.49686a0f.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./index.4db78ffb.js";import"./utils.e24d6a2b.js";import"./preview.382816cf.js";const z=n("div",{class:"fixed bg-cyan-200 top-0 w-full h-full"},null,-1),F=n("div",{class:"fixed w-full top-0 h-[30vh] bg-gradient-to-b from-yellow-100 to-50%"},null,-1),G=n("div",{class:"flex justify-center items-center h-10 w-10 border border-1 border-black rounded-full"},[n("span",{class:"text-sm"},"AR")],-1),re={__name:"model",async setup(J){let o,a;const l=N(),u=j();u.value=M.yellow[100];const d=q(),p=E(),{slug:r}=p.params,c=s(),h=s(!1);s(!1);const{data:i}=([o,a]=I(()=>H(`location-${r}`,()=>T(`location/${r}`).findOne(),{})),o=await o,a(),o),b=async()=>{c.value.activateAR()},w=()=>{const m=i.value._path;d.push({path:m})};return O(()=>{l.value&&l.value.hide()}),(m,K)=>{const y=g,x=R,v=A,_=B,C=V,k=$;return P(),D("div",null,[z,F,e(y,{class:"fixed bg-cyan-500 bottom-0 left-2/4 -translate-x-1/2 translate-y-3/4"}),e(v,null,{default:t(()=>[e(x,{ref_key:"modelViewerRef",ref:c,"ar-enabled":f(h),model:f(i).model},null,8,["ar-enabled","model"])]),_:1}),e(k,null,{default:t(()=>[e(_,{onClick:b,class:"flex justify-center items-center bg-yellow-200 h-16 w-16",format:"circle",shadowed:""},{default:t(()=>[G]),_:1}),e(_,{onClick:w,class:"bg-yellow-200 h-16 w-16 flex justify-center items-center",format:"circle",shadowed:""},{default:t(()=>[e(C,{class:"h-6 w-6"})]),_:1})]),_:1})])}}};export{re as default};
