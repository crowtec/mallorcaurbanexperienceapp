import E from"./Map.725d6837.js";import H from"./BlurredCircle.55850823.js";import j from"./Diamond.80268b63.js";import M from"./Radar.8c62001f.js";import U from"./CompassCardinalPoints.08bf4bee.js";import F from"./Compass.f51b2885.js";import X from"./Button.0099bcdb.js";import O from"./Search.0c2fc77e.js";import W from"./Menu.335f5442.js";import Z from"./NavigationBar.d84635ef.js";import{a as G,k as J,a9 as K,H as Q,B as d,z as Y,C as ee,V as te,f as r,e,b as o,w as i,W as w,u as t,c as ae,A as m,D as oe,y as se,o as l,X as ne,S as R,T as k,E as ce,Z as le,$ as re}from"./entry.f1432eca.js";import{q as ie}from"./query.b28aad2c.js";import{L as C}from"./location.2b16b367.js";import{_ as de}from"./urban-hostel.2f75ab31.js";import"./LightComp.0e330b6d.js";import"./client-only.28c60bd5.js";import"./tw-merge.1166cefb.js";import"./nuxt-link.c36ab955.js";import"./utils.8e233e5c.js";import"./preview.6c398457.js";const h=f=>(le("data-v-b8d9e030"),f=f(),re(),f),_e={class:"relative flex flex-col w-full"},me={key:0,class:"absolute top-0 left-0 h-full w-full mix-blend-hard-light bg-sky-950/80"},fe=h(()=>o("div",{class:"h-28 p-10 relative"},[o("img",{src:de,alt:"Urban Hostel",class:"w-full h-full"})],-1)),ue={key:0,class:"flex-1 w-full relative"},pe={class:"container flex flex-col items-center gap-10 h-full"},he=h(()=>o("div",{class:"text-center text-md text-yellow-200 w-60"},R("¡Localización encontrada!"),-1)),ye={class:"text-center text-xl text-yellow-200 w-60"},xe={key:1,class:"text-center text-yellow-200 w-60"},ve=h(()=>o("br",null,null,-1)),we=h(()=>o("br",null,null,-1)),be={class:"relative"},ge={key:0,class:"fixed h-full w-full top-0 left-0 radar-background"},ke={__name:"map",async setup(f){let u,b;J({bodyAttrs:{class:"bg-cyan-500"}});const{data:$}=([u,b]=K(()=>se("locations",()=>ie("location").find(),{transform:a=>Object.keys(a).map(c=>a[c])})),u=await u,b(),u),B=Q(),y=d(null),p=d(null),s=d(),_=d(),n=d(),I=d(0),S=a=>new Promise(function(c){setTimeout(c,a)}),L=()=>{const a=y.value.getBoundingClientRect(),c=a.top+a.height/2;a.left+a.width/2;const x=p.value.getBoundingClientRect();p.value.style.top=`${c-x.height/2}px`},V=async()=>{s.value=!0;const[a]=await Promise.all([C.getCurrentLocation(),S(2500)]);_.value=$.value.find(c=>C.nearbyLocation(a,c.place.coordinate)),s.value=!1,n.value=!0,setTimeout(()=>{_.value?B.push({path:`${_.value._path}/model`}):n.value=!1},2500)};return Y(()=>{y.value&&p.value&&L()}),ee(()=>{}),te(()=>{}),(a,c)=>{const x=E,g=H,z=j,N=M,P=U,T=F,v=X,q=O,A=W,D=Z;return l(),r("div",{class:oe(["fixed w-full bg-cyan-500",{flex:t(n)}]),style:{height:"100dvh"}},[e(x),e(g,{class:"fixed bg-cyan-500 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"}),e(g,{class:"fixed bg-cyan-500/50 bottom-0 left-1/2 -translate-x-1/2 translate-y-3/4"}),o("div",_e,[e(w,{name:"fade",appear:""},{default:i(()=>[t(n)?(l(),r("div",me)):m("",!0)]),_:1}),fe,e(w,{name:"fade",appear:""},{default:i(()=>[t(n)?(l(),r("div",ue,[o("div",pe,[t(_)?(l(),r(ne,{key:0},[he,e(z,{class:"max-h-[180px] h-[30vh]"}),o("div",ye,R(`¡Estás en ${t(_).title}!`),1)],64)):(l(),r("div",xe,[k(" ¡Vaya! Parece que en esta localización no hay nada que descubrir."),ve,we,k(" ¡Sigue buscando! ")]))])])):m("",!0)]),_:1})]),o("div",be,[e(w,{name:"fade",appear:""},{default:i(()=>[t(s)?(l(),r("div",ge)):m("",!0)]),_:1}),t(s)?(l(),r("div",{key:0,ref_key:"radarRef",ref:p,class:"fixed top-0 left-0 w-screen h-screen"},[t(s)?(l(),ae(N,{key:0})):m("",!0)],512)):m("",!0),e(D,{expanded:""},{default:i(()=>[e(v,{disabled:t(s)||t(n),class:"bg-yellow-200 h-16 w-16 relative flex justify-center items-center",format:"circle",shadowed:""},{default:i(()=>[e(P,{class:"absolute w-full h-full"}),e(T,{class:"h-8 w-8",style:ce({transform:`rotate(${t(I)}deg)`})},null,8,["style"])]),_:1},8,["disabled"]),o("div",{ref_key:"scanRef",ref:y},[e(v,{disabled:t(s)||t(n),onClick:V,class:"bg-cyan-100 p-11",format:"circle",shadowed:""},{default:i(()=>[e(q,{class:"h-8 w-8"})]),_:1},8,["disabled"])],512),e(v,{disabled:t(s)||t(n),to:"/location",class:"bg-yellow-200 h-16 w-16 flex justify-center items-center",format:"circle",shadowed:""},{default:i(()=>[e(A,{class:"h-8 w-8"})]),_:1},8,["disabled"])]),_:1})])],2)}}},Fe=G(ke,[["__scopeId","data-v-b8d9e030"]]);export{Fe as default};
