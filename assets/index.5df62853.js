import j from"./BlurredCircle.62772641.js";import S from"./SectionHeading.4b5fdf08.js";import q from"./Button.4e0314b8.js";import A from"./Card.99f8d3f5.js";import{_ as D}from"./client-only.33607c68.js";import{_ as I}from"./nuxt-link.e04e3548.js";import M from"./Cross.bb1d1665.js";import O from"./NavigationBar.4fbab3bc.js";import{u as T}from"./map.85f5873c.js";import{bI as z,bJ as E,bo as G,r as l,c5 as H,b as J,l as c,h as e,f as r,w as t,bD as W,bF as K,u as y,b$ as P,o as a,bG as x,c as Q,j as U}from"./entry.3f6bafe0.js";import{q as X}from"./query.80241a9d.js";import{u as Y}from"./locations.3ff6825d.js";import{g as Z}from"./index.4db78ffb.js";import"./tw-merge.1166cefb.js";import"./utils.23e540cc.js";import"./preview.5a624107.js";import"./index.c1747d06.js";const ee={class:"fixed flex w-full h-full bg-yellow-100",style:{height:"100dvh"}},te={class:"pt-10"},oe=r("div",null,null,-1),Ce={__name:"index",async setup(se){let s,i;const _=T(),b=z();b.value=E.yellow[100];const v=G(),m=l(),C=l(),f=l();let p;const{data:k}=([s,i]=H(()=>P("locations",()=>X("location").find(),{transform:n=>Object.keys(n).map(u=>n[u])})),s=await s,i(),s),w=()=>{m.value.hide(),v.push({path:"/map"})};return J(()=>{p=Y(),Z.timeline().to(f.value,{y:0,opacity:1}),_.value&&_.value.hide()}),(n,u)=>{const g=j,B=S,d=q,R=A,$=D,L=I,N=M,F=O;return a(),c("div",ee,[e(g,{class:"fixed bg-yellow-400 bottom-0 right-0 translate-x-1/2 translate-y-1/2"}),r("div",{ref_key:"containerListRef",ref:f,class:"container relative overflow-scroll translate-y-[10vh] opacity-0"},[r("div",te,[e(B,null,{default:t(()=>[x("Localizaciones")]),_:1}),r("ul",{ref_key:"listRef",ref:C,class:"flex flex-col space-y-2 pt-8 pb-28"},[(a(!0),c(W,null,K(y(k),(o,V)=>(a(),c("li",{key:V},[e($,null,{default:t(()=>{var h;return[e(R,{text:o.title,disabled:!((h=y(p))!=null&&h.includes(o._id))},{default:t(()=>[o._path?(a(),Q(d,{key:0,to:o._path,format:"rounded",bordered:"",class:"text-xs px-5 py-2"},{default:t(()=>[x(" +info ")]),_:2},1032,["to"])):U("",!0)]),_:2},1032,["text","disabled"])]}),_:2},1024),e(L,{href:o._path},null,8,["href"])]))),128))],512)])],512),e(F,{ref_key:"navRef",ref:m},{default:t(()=>[oe,e(d,{onClick:w,class:"bg-yellow-200 h-16 w-16 flex justify-center items-center",format:"circle",shadowed:""},{default:t(()=>[e(N,{class:"h-6 w-6"})]),_:1})]),_:1},512)])}}};export{Ce as default};
