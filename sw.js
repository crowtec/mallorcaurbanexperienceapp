if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const o=s=>l(s,i),a={module:{uri:i},exports:u,require:o};e[i]=Promise.all(r.map((s=>a[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_index.7ea91b07.js",revision:null},{url:"assets/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"assets/AFrameMap.09d5595c.js",revision:null},{url:"assets/AframeTest.5078e3e0.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.175abfcb.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.ee928b58.js",revision:null},{url:"assets/Arrow.34d405ca.js",revision:null},{url:"assets/ArrowLarge.50653e77.js",revision:null},{url:"assets/Backup.7c6130e0.js",revision:null},{url:"assets/BlurredCircle.cc3d72be.js",revision:null},{url:"assets/Button.0b4b96dc.js",revision:null},{url:"assets/Card.dfba702d.js",revision:null},{url:"assets/client-db.4bd8ac60.js",revision:null},{url:"assets/client-only.020b40b7.js",revision:null},{url:"assets/Compass.f0854124.js",revision:null},{url:"assets/CompassCardinalPoints.655b6273.js",revision:null},{url:"assets/ContentDoc.2712557e.js",revision:null},{url:"assets/ContentList.28f35bab.js",revision:null},{url:"assets/ContentNavigation.ba99b465.js",revision:null},{url:"assets/ContentQuery.4614df5e.js",revision:null},{url:"assets/ContentRenderer.32c51eab.js",revision:null},{url:"assets/ContentRendererMarkdown.0b50a463.js",revision:null},{url:"assets/ContentSlot.df8994e8.js",revision:null},{url:"assets/Cross.f3acddb8.js",revision:null},{url:"assets/DayLights.a7e0ae61.js",revision:null},{url:"assets/default.415825dd.js",revision:null},{url:"assets/Diamond.0f9148f7.js",revision:null},{url:"assets/Divider.3c992f39.js",revision:null},{url:"assets/divider.5a096e58.js",revision:null},{url:"assets/DocumentDrivenEmpty.6ebca036.js",revision:null},{url:"assets/DocumentDrivenNotFound.0882c4d5.js",revision:null},{url:"assets/entry.27c88f42.css",revision:null},{url:"assets/error-404.274f80a0.js",revision:null},{url:"assets/error-404.95c28eb4.css",revision:null},{url:"assets/error-500.2173342c.js",revision:null},{url:"assets/error-500.e798523c.css",revision:null},{url:"assets/FountainTest.7e1b3969.js",revision:null},{url:"assets/heading.3d863b95.js",revision:null},{url:"assets/index.0d6f3a41.js",revision:null},{url:"assets/index.2ad48eb6.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.d240c240.js",revision:null},{url:"assets/index.f2f921dc.js",revision:null},{url:"assets/Intersect.5532c66e.js",revision:null},{url:"assets/Light.fab2cada.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.b2f78e7d.js",revision:null},{url:"assets/location.3c78b0b7.js",revision:null},{url:"assets/LocationFound.51d35226.js",revision:null},{url:"assets/Logo.e57f4faa.js",revision:null},{url:"assets/map-test.a0373a6c.js",revision:null},{url:"assets/map.34bb240e.js",revision:null},{url:"assets/Map.761745a6.js",revision:null},{url:"assets/map.b5a4f168.js",revision:null},{url:"assets/map.db6ef783.css",revision:null},{url:"assets/map.ef608804.js",revision:null},{url:"assets/Markdown.ff983683.js",revision:null},{url:"assets/Marker.6eedbe25.js",revision:null},{url:"assets/Menu.392f604c.js",revision:null},{url:"assets/Menu.4c3950a0.js",revision:null},{url:"assets/Modal.a14d39d9.js",revision:null},{url:"assets/modal.ad55ecfc.js",revision:null},{url:"assets/model.504b226d.js",revision:null},{url:"assets/ModelTest.015f6a78.js",revision:null},{url:"assets/ModelUsdz.83c9b213.js",revision:null},{url:"assets/navigation.b8469cf5.js",revision:null},{url:"assets/NavigationBar.a021108e.js",revision:null},{url:"assets/NavigationButton.f3d20998.js",revision:null},{url:"assets/NightLights.4f298efe.js",revision:null},{url:"assets/nuxt-link.50fb021c.js",revision:null},{url:"assets/permission.bb5e6f28.js",revision:null},{url:"assets/permissions.d878dc55.js",revision:null},{url:"assets/preview.1cd11110.js",revision:null},{url:"assets/ProseA.15f3be27.js",revision:null},{url:"assets/ProseBlockquote.dc98f8d7.js",revision:null},{url:"assets/ProseCode.604d3788.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.20163044.js",revision:null},{url:"assets/ProseEm.b9bdbfe3.js",revision:null},{url:"assets/ProseH1.ab853918.js",revision:null},{url:"assets/ProseH2.7e5e55c1.js",revision:null},{url:"assets/ProseH3.1d2773af.js",revision:null},{url:"assets/ProseH4.b307d9dd.js",revision:null},{url:"assets/ProseH5.34fb6d28.js",revision:null},{url:"assets/ProseH6.a1b8a826.js",revision:null},{url:"assets/ProseHr.a1c5f2da.js",revision:null},{url:"assets/ProseImg.f62041c8.js",revision:null},{url:"assets/ProseLi.94edd0cb.js",revision:null},{url:"assets/ProseOl.c44b028c.js",revision:null},{url:"assets/ProseP.ba60a1bd.js",revision:null},{url:"assets/ProseStrong.34fa5d35.js",revision:null},{url:"assets/ProseTable.d535dc67.js",revision:null},{url:"assets/ProseTbody.795d7dcc.js",revision:null},{url:"assets/ProseTd.416217b8.js",revision:null},{url:"assets/ProseTh.c803295c.js",revision:null},{url:"assets/ProseThead.5950b797.js",revision:null},{url:"assets/ProseTr.8c5ec2b4.js",revision:null},{url:"assets/ProseUl.09b099ed.js",revision:null},{url:"assets/query.670004fe.js",revision:null},{url:"assets/Radar.23fcbcd3.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/radar.c32fee4c.js",revision:null},{url:"assets/Search.f4c62c93.js",revision:null},{url:"assets/SectionHeading.02088e26.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.1fb76ee8.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.b0d034a0.js",revision:null},{url:"assets/tutorial.0c619720.js",revision:null},{url:"assets/tutorial.266a3757.css",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.091fcea0.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"manifest.webmanifest",revision:"1a7a4c3ffb7fc1aa884861db0f8fdbe2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
