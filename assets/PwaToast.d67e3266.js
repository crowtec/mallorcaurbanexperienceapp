import w from"./Button.9f55523e.js";import{bp as k,r as x,b as C,o as s,k as o,u as t,h as n,w as l,bF as c,j as h,bC as b}from"./entry.cc7b83e5.js";import"./nuxt-link.922e5268.js";import"./tw-merge.1166cefb.js";const g={key:0,class:"fixed h-[50px] top-0 right-0"},I={key:1,class:"fixed h-[50px] top-0 right-0"},E={__name:"PwaToast",setup(v){const{$pwa:e}=k(),u=x();console.log(e);const f=async()=>{e.install()},m=()=>{e.updateServiceWorker()},_=()=>{e.cancelInstall()};return C(()=>{u.value=typeof BeforeInstallPromptEvent<"u"}),(y,B)=>{var d,p,r,i;const a=w;return s(),o(b,null,[(d=t(e))!=null&&d.needRefresh?(s(),o("div",g,[n(a,{class:"bg-white p-4 text-md",onClick:m,shadowed:""},{default:l(()=>[c("Update pwa")]),_:1})])):h("",!0),(p=t(e))!=null&&p.showInstallPrompt&&!((r=t(e))!=null&&r.offlineReady)&&!((i=t(e))!=null&&i.needRefresh)?(s(),o("div",I,[n(a,{class:"bg-white p-4 text-md",onClick:f,shadowed:""},{default:l(()=>[c("Install pwa")]),_:1}),n(a,{class:"bg-white p-4 text-md",onClick:_,shadowed:""},{default:l(()=>[c("Cancel pwa")]),_:1})])):h("",!0)],64)}}};export{E as default};
