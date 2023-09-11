import{bn as E,b$ as I,b_ as S,r as u,bM as z,b as B,_ as U,k as r,f as a,bC as d,bE as m,h as i,w as f,bG as v,bj as c,u as t,o,bk as V,j as x,bA as $}from"./entry.5dd8c009.js";import q from"./BlurredCircle.a6191241.js";import A from"./ArrowLarge.5b80f093.js";import M from"./Button.14b1130f.js";import{u as N}from"./map.86376836.js";import{g as P}from"./index.4db78ffb.js";import{_ as T}from"./_plugin-vue_export-helper.c27b6911.js";import"./tw-merge.1166cefb.js";import"./nuxt-link.b67c6bb4.js";const D=""+new URL("1.7207020a.png",import.meta.url).href,F=""+new URL("2.39cd18e1.png",import.meta.url).href,G=""+new URL("3.3cc672de.png",import.meta.url).href,O=""+new URL("4.0dce2794.png",import.meta.url).href;const W={class:"fixed flex w-full h-full bg-yellow-100",style:{height:"100dvh"}},X=["src"],H={key:0,class:"absolute bottom-40 px-8 w-full font-asul text-2xl text-sky-950"},J={class:"absolute bottom-0 h-40 px-8 flex items-center justify-between w-full"},K={class:"flex gap-1"},Q={class:"flex w-3 h-3 items-center justify-center"},Y={__name:"tutorial",setup(Z){const s=[{text:"Para jugar tendrás que visitar los puntos de interés de Mallorca marcados en el mapa.",image:{src:D,class:"top-[10dvh] left-1/2 -translate-x-1/2 max-h-[75dvh] max-w-[80vw]"}},{text:"Una vez estés en el lugar indicado inicia la búsqueda para descubrir sus secretos.",image:{src:F,class:"top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 max-h-[50dvh] max-w-[80vw]"}},{text:"En cada lugar encontrarás una escultura representativa que puedes ver en realidad aumentada pulsando el botón de ‘AR’.",image:{src:G,class:"top-1/4 left-1/2 -translate-y-3/4 -translate-x-1/2 max-w-none w-[100vw]"}},{text:"¡Visita todas las localizaciones para desbloquear las esculturas y descubrir la isla desde otra perspectiva!",image:{src:O,class:"top-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-none w-[300vw] rotate-45"}}],g=E(),p=N(),b=I();b.value=S.yellow[100];const e=u(),_=u(),w=u(),y=()=>{e.value>0&&(e.value-=1)},h=()=>{e.value<s.length-1&&(e.value+=1)},k=()=>{e.value===s.length-1?g.push({path:"/map"}):h()};return z(e,()=>{P.timeline().add("start").to(_.value,{x:`${e.value*-100}%`},"start")}),B(()=>{U(()=>import("./swiped-events.3abf4776.js"),[],import.meta.url),e.value=0,document.addEventListener("swiped-left",h),document.addEventListener("swiped-right",y),p.value&&p.value.hide()}),(C,ee)=>{const R=q,L=A,j=M;return o(),r("div",W,[a("div",{ref_key:"imagesRef",ref:_,class:"fixed w-full h-full translate-x-full"},[(o(),r(d,null,m(s,(n,l)=>a("div",{class:"absolute w-full h-full overflow-hidden",style:V({transform:`translateX(${l*100}%)`})},[a("img",{class:c(["absolute object-contain",n.image.class]),src:n.image.src},null,10,X)],4)),64))],512),i(v,{name:"fade",appear:""},{default:f(()=>[t(e)||t(e)===0?(o(),r("div",{key:0,ref_key:"circleRef",ref:w,class:c(["fixed transition-all ease-out duration-1000",{"bottom-0 left-1/4 -translate-x-1/3 translate-y-1/4":t(e)===0||t(e)===3,"top-0 -right-1/4 translate-x-1/2":t(e)===1,"bottom-0 right-0 translate-x-1/3":t(e)===2}])},[i(R,{class:"bg-yellow-400",blur:"40px",size:"100vw"})],2)):x("",!0)]),_:1}),(o(),r(d,null,m(s,(n,l)=>i(v,{name:"slide-fade"},{default:f(()=>[t(e)===l?(o(),r("div",H,$(n.text),1)):x("",!0)]),_:2},1024)),64)),a("div",J,[a("div",K,[(o(),r(d,null,m(s,(n,l)=>a("div",null,[a("div",Q,[a("div",{class:c(["border border-1 border-sky-950 rounded-full transition-all",{"w-2 h-2":t(e)>l,"w-3 h-3":t(e)<=l,"bg-sky-950":t(e)>=l}])},null,2)])])),64))]),a("div",null,[i(j,{onClick:k,class:c(["flex justify-center items-center px-6 py-4 transition-all",{"bg-sky-950":t(e)===s.length-1}]),format:"circle",bordered:""},{default:f(()=>[i(L,{class:c(["w-12 transition-all",{invert:t(e)===s.length-1}])},null,8,["class"])]),_:1},8,["class"])])])])}}},ue=T(Y,[["__scopeId","data-v-7d24638d"]]);export{ue as default};
