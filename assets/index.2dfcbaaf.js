import C from"./BlurredCircle.56beb90b.js";import M from"./Button.d57d7666.js";import{_ as O}from"./client-only.a17f0af4.js";import R from"./SectionHeading.1651e68d.js";import T from"./Divider.d12cabfe.js";import E from"./Arrow.a9ccf358.js";import L from"./Cross.8fad995f.js";import N from"./NavigationBar.264c5901.js";import{k as S,H,i as I,a9 as P,f as i,c as D,A as V,b as n,e as t,w as e,u as s,y as j,o as c,T as _,S as q,X as p}from"./entry.44ca391d.js";import{q as G}from"./query.e7f28131.js";import"./tw-merge.1166cefb.js";import"./nuxt-link.f6d80d91.js";import"./utils.a783483c.js";import"./preview.85c5cf32.js";const U={class:"fixed flex w-full h-full bg-cyan-50",style:{height:"100dvh"}},F={class:"container relative overflow-scroll pt-12"},X={class:"flex justify-between mb-4"},z=["src","alt"],J={class:"pt-8 pb-28"},K=["innerHTML"],Q=n("div",null,null,-1),W=n("div",null,null,-1),ut={__name:"index",async setup(Y){let a,m;S({bodyAttrs:{class:"bg-yellow-400/90"}});const u=H(),f=I(),{slug:d}=f.params,{data:o}=([a,m]=P(()=>j(`location-${d}`,()=>G(`location/${d}`).findOne(),{server:!1})),a=await a,m(),a);console.log(o.value);const y=u.options.history.state.back==="/location",h=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),x=l=>`${h()?"comgooglemaps":"https"}://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${encodeURIComponent(l.name)}`;return(l,g)=>{const w=C,r=M,b=O,v=R,k=T,B=E,$=L,A=N;return c(),i("div",U,[l.requestPermissions?V("",!0):(c(),D(w,{key:0,class:"fixed bg-yellow-400 top-0 left-0 -translate-x-1/3 -translate-y-1/4"})),n("div",F,[n("div",X,[t(r,{to:`${s(o)._path}/model`,format:"rounded",bordered:"",class:"text-xs px-5 py-2"},{default:e(()=>[_(" MODEL TEST ")]),_:1},8,["to"]),t(b,null,{default:e(()=>[t(r,{to:x(s(o).place),target:"_blank",format:"rounded",bordered:"",class:"text-xs px-5 py-2"},{default:e(()=>[_(" ABRIR EN GOOGLE MAPS ")]),_:1},8,["to"])]),_:1})]),n("img",{src:s(o).image,alt:s(o).title},null,8,z),t(v,{class:"text-center py-8"},{default:e(()=>[_(q(s(o).title),1)]),_:1}),t(k),n("div",J,[n("p",{innerHTML:s(o).content},null,8,K)])]),t(A,null,{default:e(()=>[y?(c(),i(p,{key:0},[t(r,{to:"/location",class:"bg-yellow-200 h-16 w-16 flex justify-center items-center",format:"circle",shadowed:""},{default:e(()=>[t(B,{class:"h-7 w-7 rotate-180"})]),_:1}),Q],64)):(c(),i(p,{key:1},[W,t(r,{to:"/map",class:"bg-yellow-200 h-16 w-16 flex justify-center items-center",format:"circle",shadowed:""},{default:e(()=>[t($,{class:"h-7 w-7 rotate-180"})]),_:1})],64))]),_:1})])}}};export{ut as default};
