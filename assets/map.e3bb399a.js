import Y from"./LocationFound.e02fc211.js";import Z from"./Logo.a53affbb.js";import ee from"./Radar.ff586387.js";import te from"./CompassCardinalPoints.5c32517e.js";import oe from"./Compass.bee2de7b.js";import ae from"./Button.330feed3.js";import se from"./Intersect.8a95c5dc.js";import ne from"./Search.a9a85486.js";import le from"./Menu.e1d509fb.js";import ce from"./NavigationBar.c4eb151c.js";import re from"./Menu.26a8ff9c.js";import{k as ie,bI as ue,c5 as me,bE as fe,bo as de,r as s,i as _e,b as pe,m as ve,l as _,h as o,w as i,bH as B,f as p,u as e,j as h,bD as he,b$ as ye,o as r,bl as we,bk as ge,c as P,bR as be,bS as Ce,bJ as L}from"./entry.2bb3e483.js";import{q as ke}from"./query.b96c2c0b.js";import{u as xe}from"./map.0d0aac8e.js";import{P as Re,L as q}from"./permission.6b6370dd.js";import{u as Be}from"./locations.7e838a5f.js";import{g as Le}from"./index.4db78ffb.js";import{a as Ie}from"./index.a3e5faef.js";import"./Diamond.f5a45eeb.js";import"./BlurredCircle.e416db87.js";import"./tw-merge.1166cefb.js";import"./nuxt-link.261f1269.js";import"./SectionHeading.dc771f31.js";import"./Cross.248b21cc.js";import"./utils.b01fd332.js";import"./preview.36136dba.js";function $e(u){return new Promise(function(m){setTimeout(()=>m(),u)})}const T=u=>(be("data-v-eb37cf01"),u=u(),Ce(),u),Se={key:0},Me={class:"relative"},Pe={key:0,class:"fixed h-full w-full top-0 left-0 radar-background"},qe=T(()=>p("div",{class:"fixed w-full top-0 h-[20vh] bg-gradient-to-b from-sky-900 to-70%"},null,-1)),Te={key:0,class:"fixed left-0 top-0 translate-y-[-180%] container text-center"},Fe=T(()=>p("div",{class:"text-md text-yellow-200"}," ¡Vaya! Parece que aquí no hay nada ",-1)),Ne=[Fe],Ve={key:0},je={__name:"map",async setup(u){let m,I;const $=ue(),{data:F}=([m,I]=me(()=>ye("locations",()=>ke("location").find(),{transform:t=>Object.keys(t).map(d=>t[d])})),m=await m,I(),m),n=xe(),N=fe(),S=de();s(null);const y=s(null),f=s(null),b=s(null),w=s(null),C=s(null),l=s(),g=s(!1),a=s(),v=s(),M=s(),V=s(0),k=s(!1),{width:x,height:ze}=Ie(),j=()=>{const t=w.value.getBoundingClientRect(),d=t.top+t.height/2;t.left+t.width/2;const c=y.value.getBoundingClientRect();y.value.style.top=`${d-c.height/2}px`},z=t=>{k.value||(k.value=!0,n.value.toggleCenitalView({onComplete:()=>{k.value=!1}}))},E=async()=>{const t=Le.timeline();M.value=await Re.requestLocation(),M.value?(l.value=!0,t.add("start").to(b.value,{x:-x.value},"start").to(C.value,{x:x.value},"start"),Promise.all([q.getCurrentLocation(),$e(4e3)]).then(([d])=>{if(a.value=F.value.find(c=>q.nearbyLocation(d,c.place.coordinate)),l.value=!1,v.value=!0,a.value?(f.value.show({expanded:!1}),t.to(w.value,{y:x.value*.5})):t.add("start").to(b.value,{x:0},"start").to(C.value,{x:0},"start"),a.value){const c=Be();c.value.includes(a.value._id)||c.value.push(a.value._id),setTimeout(()=>{S.push({path:`${a.value._path}/model`})},5e3)}else setTimeout(()=>{v.value=!1},2e3)})):S.push({path:"/permissions"})},U=t=>{n.value.hide(),f.value.hide(),g.value=!0},A=t=>{setTimeout(()=>{n.value.show()},300),f.value.show({expanded:!0,onComplete:()=>{g.value=!1}})};return _e(()=>{w.value&&y.value&&j(),g.value||l.value||v.value?$.value=L.sky[900]:$.value=N.value?L.teal[700]:L.teal[500]}),pe(()=>{f.value&&f.value.show({expanded:!0}),n.value&&(n.value.show(),n.value.showLocations())}),ve(()=>{n.value&&n.value.hideLocations()}),(t,d)=>{const c=Y,D=Z,H=ee,W=te,J=oe,R=ae,O=se,X=ne,G=le,K=ce,Q=re;return r(),_(he,null,[o(B,{name:"fade",appear:""},{default:i(()=>[e(a)?(r(),_("div",Se,[o(c,{location:e(a)},null,8,["location"])])):h("",!0)]),_:1}),p("div",Me,[o(D,{"enable-night-mode-change":""}),o(B,{name:"fade",appear:""},{default:i(()=>[e(l)||e(v)&&!e(a)?(r(),_("div",Pe)):h("",!0)]),_:1}),e(l)?(r(),_("div",{key:0,ref_key:"radarRef",ref:y,class:"fixed top-0 left-0 w-screen h-screen"},[o(H),qe],512)):h("",!0),o(K,{ref_key:"navRef",ref:f,"inital-state":"hide",centered:""},{default:i(()=>[p("div",{ref_key:"compassButtonRef",ref:b},[o(R,{onClick:z,class:"bg-yellow-200 h-16 w-16 relative flex justify-center items-center",format:"circle",shadowed:""},{default:i(()=>[o(W,{class:"absolute w-full h-full"}),o(J,{class:"h-8 w-8",style:we({transform:`rotate(${e(V)}deg)`})},null,8,["style"])]),_:1})],512),p("div",{ref_key:"searchButtonRef",ref:w,class:"relative"},[o(B,{name:"fade",appear:""},{default:i(()=>[e(v)&&!e(a)?(r(),_("div",Te,Ne)):h("",!0)]),_:1}),o(R,{onClick:E,class:ge(["bg-cyan-100 p-11",{"border-[3px] border-yellow-100 p-9 bg-gradient-to-b from-sky-900 bg-transparent":e(l)||e(a),"bg-cyan-100":!e(l)&&!e(a)}]),format:"circle",shadowed:""},{default:i(()=>[e(l)||e(a)?(r(),P(O,{key:0,class:"h-12 w-12"})):(r(),P(X,{key:1,class:"h-8 w-8"}))]),_:1},8,["class"])],512),p("div",{ref_key:"menuButtonRef",ref:C},[o(R,{onClick:U,class:"bg-yellow-200 h-16 w-16 flex justify-center items-center",format:"circle",shadowed:""},{default:i(()=>[o(G,{class:"h-8 w-8"})]),_:1})],512)]),_:1},512)]),e(g)?(r(),_("div",Ve,[o(Q,{onClose:A})])):h("",!0)],64)}}},ft=ie(je,[["__scopeId","data-v-eb37cf01"]]);export{ft as default};
