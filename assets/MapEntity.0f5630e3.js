import{x as n,z as r,r as m,o as d,g as u,k as c}from"./entry.122eb7c4.js";const i=""+new URL("map.1655ec29.glb",import.meta.url).href,_={__name:"MapEntity",emits:["modelLoaded"],setup(f,{emit:o}){const e=n(null),a=()=>{e.value.getObject3D("mesh").traverse(t=>{t.isMesh&&(t.frustumCulled=!1)})};return r(()=>{e.value&&e.value.addEventListener("model-loaded",()=>{a(),o("modelLoaded")})}),(l,t)=>{const s=m("a-entity");return d(),u(s,{ref_key:"mapRef",ref:e,"animation-mixer":"",id:"target","gltf-model":c(i),position:"-1 0 0",rotation:"0 0 0",scale:"1 1 1",shadow:"receive: true; cast: true"},null,8,["gltf-model"])}}};export{_ as default};
