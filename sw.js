if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,a)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let n={};const o=s=>l(s,i),u={module:{uri:i},exports:n,require:o};e[i]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(a(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"_index",revision:"9fa281d2b121b3b78034382a70f4a611"},{url:"200",revision:"aaccaa09a8c3dd4f348380d4f5392c1a"},{url:"404",revision:"aaccaa09a8c3dd4f348380d4f5392c1a"},{url:"assets/_index.61ced1f8.js",revision:null},{url:"assets/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"assets/AFrameMap.08ee1699.js",revision:null},{url:"assets/AframeTest.0707eded.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.9e35da96.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.9762403b.js",revision:null},{url:"assets/Arrow.05793d53.js",revision:null},{url:"assets/ArrowLarge.4ebf61f6.js",revision:null},{url:"assets/Backup.10e312b8.js",revision:null},{url:"assets/BlurredCircle.0a84b365.js",revision:null},{url:"assets/Button.9f55523e.js",revision:null},{url:"assets/Card.25ec1d35.js",revision:null},{url:"assets/client-db.f40a4a03.js",revision:null},{url:"assets/client-only.0f4ff98a.js",revision:null},{url:"assets/Compass.54167f2d.js",revision:null},{url:"assets/CompassCardinalPoints.3fecd902.js",revision:null},{url:"assets/ContentDoc.4262a480.js",revision:null},{url:"assets/ContentList.cdcc84ff.js",revision:null},{url:"assets/ContentNavigation.c8545f25.js",revision:null},{url:"assets/ContentQuery.219440e8.js",revision:null},{url:"assets/ContentRenderer.5a7ac2fe.js",revision:null},{url:"assets/ContentRendererMarkdown.f97755e3.js",revision:null},{url:"assets/ContentSlot.3edde1e3.js",revision:null},{url:"assets/credits.de61cd18.js",revision:null},{url:"assets/Cross.d20f4f4e.js",revision:null},{url:"assets/DayLights.b2112eed.js",revision:null},{url:"assets/default.bcf4fb26.js",revision:null},{url:"assets/Diamond.9fcde2c3.js",revision:null},{url:"assets/Divider.51d99123.js",revision:null},{url:"assets/divider.ed2b8166.js",revision:null},{url:"assets/DocumentDrivenEmpty.612c498b.js",revision:null},{url:"assets/DocumentDrivenNotFound.7e130557.js",revision:null},{url:"assets/entry.4cfd4e99.css",revision:null},{url:"assets/error-404.753c2d64.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-500.209f778b.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.cfdce894.js",revision:null},{url:"assets/FountainTest.f0d4a217.js",revision:null},{url:"assets/heading.e8069d7f.js",revision:null},{url:"assets/index.2024ac71.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.5cf1dace.js",revision:null},{url:"assets/index.799dc19d.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.b2835d76.js",revision:null},{url:"assets/Intersect.6f769932.js",revision:null},{url:"assets/Light.b020834a.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.1410f619.js",revision:null},{url:"assets/location.05695af7.js",revision:null},{url:"assets/LocationFound.08de1cf2.js",revision:null},{url:"assets/Logo.bda45bda.js",revision:null},{url:"assets/map-test.afd820c6.js",revision:null},{url:"assets/map.271f1f25.js",revision:null},{url:"assets/map.6a47db5e.js",revision:null},{url:"assets/map.6d5d9d81.js",revision:null},{url:"assets/map.736feb1b.css",revision:null},{url:"assets/Map.bce0bc1f.js",revision:null},{url:"assets/Markdown.6ef1add5.js",revision:null},{url:"assets/Marker.6e2f5e6f.js",revision:null},{url:"assets/Menu.100773e4.js",revision:null},{url:"assets/Menu.17fd0a6b.js",revision:null},{url:"assets/modal.97c0ab15.js",revision:null},{url:"assets/Modal.b2cbc7b7.js",revision:null},{url:"assets/model.f9fbef1c.js",revision:null},{url:"assets/ModelTest.e80ca9cd.js",revision:null},{url:"assets/ModelUsdz.1c76d25d.js",revision:null},{url:"assets/navigation.36e7d7a5.js",revision:null},{url:"assets/NavigationBar.a879eb64.js",revision:null},{url:"assets/NavigationButton.e3cc795a.js",revision:null},{url:"assets/NightLights.d2292a80.js",revision:null},{url:"assets/nuxt-link.922e5268.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.3526e3c4.js",revision:null},{url:"assets/preview.92412ad0.js",revision:null},{url:"assets/ProseA.baec9256.js",revision:null},{url:"assets/ProseBlockquote.b15a7073.js",revision:null},{url:"assets/ProseCode.1538dd12.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.6e72b460.js",revision:null},{url:"assets/ProseEm.6e9d716b.js",revision:null},{url:"assets/ProseH1.fea964a3.js",revision:null},{url:"assets/ProseH2.5273f76f.js",revision:null},{url:"assets/ProseH3.6adb7839.js",revision:null},{url:"assets/ProseH4.fa12db34.js",revision:null},{url:"assets/ProseH5.5652f60b.js",revision:null},{url:"assets/ProseH6.d15e4a4a.js",revision:null},{url:"assets/ProseHr.45591e10.js",revision:null},{url:"assets/ProseImg.affa7d08.js",revision:null},{url:"assets/ProseLi.07767c7a.js",revision:null},{url:"assets/ProseOl.e91c0663.js",revision:null},{url:"assets/ProseP.d648c9bf.js",revision:null},{url:"assets/ProseStrong.95744156.js",revision:null},{url:"assets/ProseTable.ae4d7a62.js",revision:null},{url:"assets/ProseTbody.5719218b.js",revision:null},{url:"assets/ProseTd.a0706895.js",revision:null},{url:"assets/ProseTh.be5ab41f.js",revision:null},{url:"assets/ProseThead.845d6f5d.js",revision:null},{url:"assets/ProseTr.d0598129.js",revision:null},{url:"assets/ProseUl.f80123c5.js",revision:null},{url:"assets/PwaToast.d67e3266.js",revision:null},{url:"assets/query.c1a5dfb5.js",revision:null},{url:"assets/radar-sprite.1cd310a9.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/radar.1a4adb1b.js",revision:null},{url:"assets/Radar.2782618e.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Search.0af1449a.js",revision:null},{url:"assets/SectionHeading.b311f3cb.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.0a0541e0.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.3560c34e.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.a6325657.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.cb329a30.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"2b0d45107c881dcbdd5a235f8524ae61"},{url:"/",revision:"2d970e6072fd87d85a95940f1c611dae"},{url:"location/cala-banyalbufar",revision:"23101805239cbb9f308374d3908b7e55"},{url:"location/cala-banyalbufar/model",revision:"5b404eba2270baa19539f0947bb75f01"},{url:"location/crowtec",revision:"6f6b2c87d6186b8a449c09bb5afef80a"},{url:"location/crowtec/model",revision:"de458f7edba621a19f29b8503028613f"},{url:"location",revision:"6e7640ac925dd4c35e3bbe42bd688d8c"},{url:"location/mercat-inca",revision:"9c98fbda69e1d5cc44d8e5998146c467"},{url:"location/mercat-inca/model",revision:"ffc0820391ba0ef129b8b96f87e70890"},{url:"location/mercat-olivar",revision:"cf5629469d6c214238aecf4a4363c476"},{url:"location/mercat-olivar/model",revision:"fed5b98bec40245b6f821e9b06a37138"},{url:"location/mercat-pere-garau",revision:"ca7954c558f89553c48113a3a600110d"},{url:"location/mercat-pere-garau/model",revision:"84d23b0b4321a82ced88e615b49fa0a9"},{url:"location/mercat-sa-pobla",revision:"a696cf4cb96fce0a5468af0dad15f23f"},{url:"location/mercat-sa-pobla/model",revision:"5a23138b2082cfa83b14ff54a3f0a0de"},{url:"location/mercat-santa-catalina",revision:"dc8eccf22ebfa3b68faf4cc8184d1100"},{url:"location/mercat-santa-catalina/model",revision:"777d99596d417b5b45f4001f8f6af925"},{url:"location/mercat-santa-maria-cami",revision:"37fb3cca1f2bdf81cbd5794ec8ee8ac1"},{url:"location/mercat-santa-maria-cami/model",revision:"e52dff6d897330058d17e6b473f0eb1b"},{url:"location/mercat-sineu",revision:"795714e3e34d4d1626f5491877cd4ef2"},{url:"location/mercat-sineu/model",revision:"39e898162988396e9e26779a1a9ac49e"},{url:"location/mercat-soller",revision:"ae80fe4dc2f67eeb75436ab6392f1fde"},{url:"location/mercat-soller/model",revision:"14e5aaaae31cc2d6ca15cb013eab98a4"},{url:"location/playa-es-trenc",revision:"a531ea6081e02e388ed2d85acde53d27"},{url:"location/playa-es-trenc/model",revision:"43c417e8dd3b7b119b18eb8cd50dee8b"},{url:"location/playa-portals-nous",revision:"8a389f1463bad2a2b2d37b8e4b9d0a45"},{url:"location/playa-portals-nous/model",revision:"a80780d65dc9715279fc5ba64500f4e1"},{url:"location/playa-soller",revision:"cddd170a8c8db7508d488da14f642a55"},{url:"location/playa-soller/model",revision:"730368321c67a588d1ccff1c2b771568"},{url:"location/test",revision:"c89aec16b2853173717307a45969b09a"},{url:"location/test/model",revision:"fdc4f0bedf4f0ffcb426d6f62b7e491b"},{url:"location/urban-hostel-palma",revision:"da43fa0f96294dc0be532506ead11602"},{url:"location/urban-hostel-palma/model",revision:"b1ebc83dce3e83ba6fc3ff6c6d6f6d14"},{url:"map-test",revision:"03a51802fcc39f682fffcddbd9855706"},{url:"map",revision:"a15c4eb5f75874effad20851906cb0c0"},{url:"permissions",revision:"6a78413056ed0f87692b7202aab37f7e"},{url:"showcase/divider",revision:"341eaa0579a5d8f74bc48100c96c67a0"},{url:"showcase/heading",revision:"049bac68d2df8f5533cb150a9c65d48c"},{url:"showcase",revision:"5ecfcde86df1625ccb1d6c8a75099e61"},{url:"showcase/modal",revision:"a6e6b99f87a7d3a9403a5e8e4a9d91a9"},{url:"showcase/navigation",revision:"5879fc3d6aea9aba857d8d81b3eb6266"},{url:"showcase/radar-sprite",revision:"e47be2a8e6bd41664ac4f42314d7a598"},{url:"showcase/radar",revision:"1d47c3829cbfd504d37259fbbddae5f8"},{url:"tutorial",revision:"e85a54ceb54aa63d6c82478d2ec178d9"},{url:"favicon.ico",revision:"9c94ffbeccc204fc43f054fcf8e36cfb"},{url:"apple-touch-icon.png",revision:"298b0c99571db15d8abd276d1e1e7007"},{url:"maskable-icon.png",revision:"bb0d2c1f7d34740a6382b0896463c554"},{url:"manifest.webmanifest",revision:"54be2f135f8be7510048c948e7c8e49d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
