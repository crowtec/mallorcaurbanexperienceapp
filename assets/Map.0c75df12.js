import m from"./LightComp.b9091137.js";import{_ as p}from"./client-only.e14f0d4d.js";import{V as _,r as a,o as d,c as f,w as i,b as u,e,u as g}from"./entry.87ffefec.js";const y=""+new URL("mallorca.bfdaeee0.glb",import.meta.url).href,C={__name:"Map",setup(b){return _(()=>{var o,t;const n=(o=document.getElementsByTagName("html"))==null?void 0:o[0];(t=n==null?void 0:n.classList)==null||t.remove("a-fullscreen")}),(n,o)=>{const t=m,r=a("a-sky"),s=a("a-entity"),c=a("a-scene"),l=p;return d(),f(l,null,{default:i(()=>[u("div",null,[e(c,{shadow:"type: pcf",renderer:`antialias: true;
                    colorManagement: true;
                    sortObjects: false;
                    physicallyCorrectLights: true;
                    maxCanvasWidth: 1920;
                    maxCanvasHeight: 1920;`,"device-orientation-permission-ui":"enabled: false;"},{default:i(()=>[e(t,{position:"-0.5 0.5 0.5",color:"#fcf2d4",type:"ambient",intensity:"1"}),e(t,{position:"0 10 2.5",color:"#fcf7e6",type:"directional",distance:"12",intensity:"2.4"}),e(r,{color:"#175557"}),e(s,{id:"camera1",camera:"",rotation:"0 0 0","look-controls":"enabled:false","orbit-controls":`
              target: 0 1.6 -0.5; initialPosition: 0 20 0; rotateSpeed: 0.5; enablePan: false; minPolarAngle:50; maxPolarAngle:60; minDistance: 10; maxDistance: 30; zoomspeed: 0.1; dampingFactor: 0.8;
          `}),e(s,{id:"target","gltf-model":g(y),position:"-1 0 0",rotation:"0 0 0",scale:"1 1 1",visible:"",shadow:"receive: true; cast: true"},null,8,["gltf-model"])]),_:1})])]),_:1})}}};export{C as default};
