if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const o=s=>l(s,n),u={module:{uri:n},exports:a,require:o};e[n]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"056c9549617d25aebd510f36788bf21b"},{url:"404",revision:"056c9549617d25aebd510f36788bf21b"},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/AframeTest.e524f765.js",revision:null},{url:"assets/ARModel.9dc99beb.js",revision:null},{url:"assets/Arrow.845edbed.js",revision:null},{url:"assets/BlurredCircle.01137f0b.js",revision:null},{url:"assets/Button.28f80713.js",revision:null},{url:"assets/Card.1e51ff41.js",revision:null},{url:"assets/client-db.4c50b5b1.js",revision:null},{url:"assets/client-only.e14f0d4d.js",revision:null},{url:"assets/Compass.a0ecb712.js",revision:null},{url:"assets/CompassCardinalPoints.0fb278ac.js",revision:null},{url:"assets/ContentDoc.a17230b5.js",revision:null},{url:"assets/ContentList.14dec8ad.js",revision:null},{url:"assets/ContentNavigation.e853ea21.js",revision:null},{url:"assets/ContentQuery.f24f8e4c.js",revision:null},{url:"assets/ContentRenderer.69ec8c9c.js",revision:null},{url:"assets/ContentRendererMarkdown.fecf0ae2.js",revision:null},{url:"assets/ContentSlot.8572063e.js",revision:null},{url:"assets/Cross.e329fd71.js",revision:null},{url:"assets/default.79de2797.js",revision:null},{url:"assets/Diamond.24869f9f.js",revision:null},{url:"assets/divider.6de8de07.js",revision:null},{url:"assets/Divider.90d7aba7.js",revision:null},{url:"assets/DocumentDrivenEmpty.e6880c3e.js",revision:null},{url:"assets/DocumentDrivenNotFound.320507b0.js",revision:null},{url:"assets/entry.23c98fe1.css",revision:null},{url:"assets/entry.87ffefec.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-404.c3363696.js",revision:null},{url:"assets/error-500.4bc6c601.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.214a06f2.js",revision:null},{url:"assets/FountainTest.8a016a58.js",revision:null},{url:"assets/heading.9350ccbb.js",revision:null},{url:"assets/index.50dc7585.js",revision:null},{url:"assets/index.63d83052.js",revision:null},{url:"assets/index.7214bc78.js",revision:null},{url:"assets/index.8a5ea990.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/LightComp.b9091137.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.8b2074a3.js",revision:null},{url:"assets/location.2b16b367.js",revision:null},{url:"assets/location.caf2af35.js",revision:null},{url:"assets/map-test.fc390abd.js",revision:null},{url:"assets/Map.0c75df12.js",revision:null},{url:"assets/map.495b898d.css",revision:null},{url:"assets/map.e26e6612.js",revision:null},{url:"assets/Markdown.62fb8c06.js",revision:null},{url:"assets/Marker.f8fc92e2.js",revision:null},{url:"assets/Menu.e3e221e9.js",revision:null},{url:"assets/Modal.002f623f.js",revision:null},{url:"assets/modal.d11fe8ae.js",revision:null},{url:"assets/model.c084683b.js",revision:null},{url:"assets/ModelTest.25ad90cf.js",revision:null},{url:"assets/ModelUsdz.bfdd07b0.js",revision:null},{url:"assets/navigation.b01d576a.js",revision:null},{url:"assets/NavigationBar.0eee1dc9.js",revision:null},{url:"assets/NavigationButton.8468e752.js",revision:null},{url:"assets/nuxt-link.8722eb33.js",revision:null},{url:"assets/permission.00b040b8.js",revision:null},{url:"assets/permissions.0b4e3bdf.js",revision:null},{url:"assets/preview.3209e50c.js",revision:null},{url:"assets/ProseA.ab5db444.js",revision:null},{url:"assets/ProseBlockquote.4027b470.js",revision:null},{url:"assets/ProseCode.00bbd788.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.4c8c9902.js",revision:null},{url:"assets/ProseEm.6c3919f0.js",revision:null},{url:"assets/ProseH1.4b9bdb53.js",revision:null},{url:"assets/ProseH2.15eac124.js",revision:null},{url:"assets/ProseH3.b748aca8.js",revision:null},{url:"assets/ProseH4.09fd56be.js",revision:null},{url:"assets/ProseH5.8365ce4d.js",revision:null},{url:"assets/ProseH6.3d67ecb5.js",revision:null},{url:"assets/ProseHr.4c0cbb37.js",revision:null},{url:"assets/ProseImg.b70ef4f3.js",revision:null},{url:"assets/ProseLi.bc68c39c.js",revision:null},{url:"assets/ProseOl.0449a698.js",revision:null},{url:"assets/ProseP.e7eef9b7.js",revision:null},{url:"assets/ProseStrong.f42c7537.js",revision:null},{url:"assets/ProseTable.49ebe40a.js",revision:null},{url:"assets/ProseTbody.14c7f512.js",revision:null},{url:"assets/ProseTd.46b9698c.js",revision:null},{url:"assets/ProseTh.89b5aa62.js",revision:null},{url:"assets/ProseThead.0e3dbfc5.js",revision:null},{url:"assets/ProseTr.c9c2c42a.js",revision:null},{url:"assets/ProseUl.8fe6699e.js",revision:null},{url:"assets/query.b9514e21.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Radar.8cb8d5b3.js",revision:null},{url:"assets/radar.e53af2f5.js",revision:null},{url:"assets/Search.f43a7b04.js",revision:null},{url:"assets/SectionHeading.0c1e9ead.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.0924e519.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/urban-hostel.14d43e3c.js",revision:null},{url:"assets/utils.5f2e9505.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"/mallorcaurbanexperience/",revision:"fc08ada3de806b159c632aa994bdb8cd"},{url:"location/cala-banyalbufar",revision:"2f22bfea40583b022a1c0d03bfa6be57"},{url:"location",revision:"cf37c91735e62ea89e9ec37dd2536668"},{url:"location/mercat-inca",revision:"d35c2d7a5af3baece7dc719b4048d4f4"},{url:"location/mercat-olivar",revision:"502e84f2f0e11a1b9b582379c5dfbb31"},{url:"location/mercat-pere-garau",revision:"041d53f198eec4166c291fcb77772777"},{url:"location/mercat-sa-pobla",revision:"dd77a45198ecde3bf38268f0e82e3d43"},{url:"location/mercat-santa-catalina",revision:"e81425bd0700086ff3db6cb2e49e7fa1"},{url:"location/mercat-santa-maria-cami",revision:"a1da9a0fa15089b6bfa79fe680060ebe"},{url:"location/mercat-sineu",revision:"7a52af32f00892a1e9e257390459380e"},{url:"location/mercat-soller",revision:"056388526104930d549d8ea44436681b"},{url:"location/playa-es-trenc",revision:"2490c56f953536e617d777b20b9a575e"},{url:"location/playa-portals-nous",revision:"b2a5c2d7a2a8b71dc54087a8f0fc004c"},{url:"location/playa-soller",revision:"117e1c3750eba319e870c4ffec4c3773"},{url:"location/test",revision:"8b3562c44b208aac8f06d1625d739fb8"},{url:"location/urban-hostel-palma",revision:"a6c2bff65f341e22e117b767c28dfa7e"},{url:"map-test",revision:"7401dfa8773a7e3fd81c917ba3d0b920"},{url:"map",revision:"e522a34d391e6dab0d532b53348d58d2"},{url:"permissions",revision:"1caed678ca7d935439ac7e838db7fe90"},{url:"showcase/divider",revision:"02da18266f4a457dffffbad61604a05d"},{url:"showcase/heading",revision:"7fd48ae1374720cde1fd18467cd6ac24"},{url:"showcase",revision:"afb73891fc38d80ff01bd96561209cf8"},{url:"showcase/modal",revision:"cf88d175353222b736a38c86bb8290c9"},{url:"showcase/navigation",revision:"de0063df2cfabefc96f348a93e0b55ea"},{url:"showcase/radar",revision:"6dbbcb5f4a6c0a351f67cf8bb12075fc"},{url:"manifest.webmanifest",revision:"2cdab300b0d17b83a889b12758358421"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
