if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const o=s=>l(s,a),u={module:{uri:a},exports:n,require:o};e[a]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"ce5cc67bbdf52a4e75de886116738856"},{url:"404",revision:"ce5cc67bbdf52a4e75de886116738856"},{url:"assets/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"assets/aframe-ar.58ca0f05.js",revision:null},{url:"assets/AFrameMap.d0f80a99.js",revision:null},{url:"assets/AframeTest.554da177.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.85fda479.js",revision:null},{url:"assets/ARModelViewer.20002f13.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/Arrow.ef4d502a.js",revision:null},{url:"assets/ArrowLarge.b2695b88.js",revision:null},{url:"assets/Backup.91f19c26.js",revision:null},{url:"assets/BlurredCircle.c7c081b3.js",revision:null},{url:"assets/Button.d9db7226.js",revision:null},{url:"assets/Card.8eba792d.js",revision:null},{url:"assets/client-db.145c8693.js",revision:null},{url:"assets/client-only.1fffe8ce.js",revision:null},{url:"assets/Compass.32be6507.js",revision:null},{url:"assets/CompassCardinalPoints.f1ab3a4d.js",revision:null},{url:"assets/ContentDoc.0d81386c.js",revision:null},{url:"assets/ContentList.6efaf4b7.js",revision:null},{url:"assets/ContentNavigation.526d39d8.js",revision:null},{url:"assets/ContentQuery.a59aee8d.js",revision:null},{url:"assets/ContentRenderer.2ce45b05.js",revision:null},{url:"assets/ContentRendererMarkdown.3c8b69d6.js",revision:null},{url:"assets/ContentSlot.e9b2fb3c.js",revision:null},{url:"assets/credits.7f55c228.js",revision:null},{url:"assets/Cross.2c98d9c5.js",revision:null},{url:"assets/DayLights.55ddb512.js",revision:null},{url:"assets/default.dbb41a16.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.ddffc3b0.js",revision:null},{url:"assets/divider.40259435.js",revision:null},{url:"assets/Divider.9772540a.js",revision:null},{url:"assets/DocumentDrivenEmpty.7710ea57.js",revision:null},{url:"assets/DocumentDrivenNotFound.7a8ab2d5.js",revision:null},{url:"assets/entry.28225f21.js",revision:null},{url:"assets/entry.aabb36d2.css",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-404.aa110c7b.js",revision:null},{url:"assets/error-500.7b3d7ab9.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.8153255e.js",revision:null},{url:"assets/FountainTest.ce39f9f8.js",revision:null},{url:"assets/heading.ba2c383e.js",revision:null},{url:"assets/index.0a01489c.js",revision:null},{url:"assets/index.2674b1b5.js",revision:null},{url:"assets/index.390a4abd.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.755e5dc3.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.cf3b7d0c.js",revision:null},{url:"assets/Intersect.ed795ab2.js",revision:null},{url:"assets/Light.2370cebf.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.46f9e56a.js",revision:null},{url:"assets/location.476654db.js",revision:null},{url:"assets/LocationFound.4b9c6ffa.js",revision:null},{url:"assets/Logo.293feb01.js",revision:null},{url:"assets/Map.0494682a.js",revision:null},{url:"assets/map.0b8a0592.js",revision:null},{url:"assets/map.2074e3d4.js",revision:null},{url:"assets/map.722534b3.js",revision:null},{url:"assets/map.736feb1b.css",revision:null},{url:"assets/Markdown.d2988a6c.js",revision:null},{url:"assets/Marker.136b1f35.js",revision:null},{url:"assets/Menu.6468e19d.js",revision:null},{url:"assets/Menu.a11a5345.js",revision:null},{url:"assets/Modal.3741e929.js",revision:null},{url:"assets/modal.8d439529.js",revision:null},{url:"assets/model.2c8b0984.js",revision:null},{url:"assets/ModelTest.997b8094.js",revision:null},{url:"assets/ModelUsdz.0144dae4.js",revision:null},{url:"assets/navigation.f330d9c5.js",revision:null},{url:"assets/NavigationBar.67532146.js",revision:null},{url:"assets/NavigationButton.f00fdad3.js",revision:null},{url:"assets/NightLights.ddacdabc.js",revision:null},{url:"assets/nuxt-link.23f1e4cc.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.aeeb3aa9.js",revision:null},{url:"assets/PlayRequirements.e7c51c40.js",revision:null},{url:"assets/preview.22c69291.js",revision:null},{url:"assets/ProseA.a5fe321c.js",revision:null},{url:"assets/ProseBlockquote.d0a38bf6.js",revision:null},{url:"assets/ProseCode.58629acc.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.0cfe0c07.js",revision:null},{url:"assets/ProseEm.8af3063c.js",revision:null},{url:"assets/ProseH1.481f52d7.js",revision:null},{url:"assets/ProseH2.1b0470f6.js",revision:null},{url:"assets/ProseH3.975a667d.js",revision:null},{url:"assets/ProseH4.2b870f40.js",revision:null},{url:"assets/ProseH5.50dc27fc.js",revision:null},{url:"assets/ProseH6.7977ac8e.js",revision:null},{url:"assets/ProseHr.99488860.js",revision:null},{url:"assets/ProseImg.764b1220.js",revision:null},{url:"assets/ProseLi.ffac2c1d.js",revision:null},{url:"assets/ProseOl.eb0417bd.js",revision:null},{url:"assets/ProseP.a1b4b23f.js",revision:null},{url:"assets/ProseStrong.cda2fd18.js",revision:null},{url:"assets/ProseTable.db7ac4b9.js",revision:null},{url:"assets/ProseTbody.34f71eb3.js",revision:null},{url:"assets/ProseTd.63f60066.js",revision:null},{url:"assets/ProseTh.32899bbd.js",revision:null},{url:"assets/ProseThead.97c68d57.js",revision:null},{url:"assets/ProseTr.904067d4.js",revision:null},{url:"assets/ProseUl.cd4bfe7d.js",revision:null},{url:"assets/PwaToast.0c189bd7.js",revision:null},{url:"assets/query.f79e710c.js",revision:null},{url:"assets/radar-sprite.78bcc453.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/radar.45175cb4.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Radar.d394b22a.js",revision:null},{url:"assets/Search.e8a9921a.js",revision:null},{url:"assets/SectionHeading.9162d303.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.ca4f680a.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.872b4ead.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.d6140618.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.7c81dfcc.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"ec1837a9e4228d15ec39b8a0e6678619"},{url:"/",revision:"7ff50867c6d3ccc1f95ddb8101b0b4a8"},{url:"location/cala-banyalbufar",revision:"321dab6382138ce24f98778cea7077fa"},{url:"location/cala-banyalbufar/model",revision:"f22824fe17092ec448e671b36957ab29"},{url:"location/crowtec",revision:"006248fb47ae94932d9b93506b1a96aa"},{url:"location/crowtec/model",revision:"b86b56b7ea7937c471aaafc5edd14bc0"},{url:"location",revision:"8319756445a72dd632ee22e37dfdf1f9"},{url:"location/mercat-inca",revision:"2a4ac838b065ff69a9b7e2b31a7805af"},{url:"location/mercat-inca/model",revision:"5173f6be1e48e814eb2f36234de7c255"},{url:"location/mercat-olivar",revision:"e424aeb11dcae8a6aee4757628350292"},{url:"location/mercat-olivar/model",revision:"41020462a34649b93781a70a21e6c390"},{url:"location/mercat-pere-garau",revision:"91277f84afa8acf303625907db95203e"},{url:"location/mercat-pere-garau/model",revision:"bbf23cf8f3ff41e0838773060237808e"},{url:"location/mercat-sa-pobla",revision:"d4a19083f0dd507fcbe16595b5906618"},{url:"location/mercat-sa-pobla/model",revision:"a967170b4f404f960aa8ae790db861bf"},{url:"location/mercat-santa-catalina",revision:"80868095282a16b2eba80534ec1e2652"},{url:"location/mercat-santa-catalina/model",revision:"1cb03fc6d759e2422b76ca6106f87e57"},{url:"location/mercat-santa-maria-cami",revision:"5321f9de498bffe0d6b9cbb01d7fc9a1"},{url:"location/mercat-santa-maria-cami/model",revision:"2222baf1a609cc96da00c55e258ceebd"},{url:"location/mercat-sineu",revision:"f701fa83bf721595717f97af5bfce747"},{url:"location/mercat-sineu/model",revision:"343994acee167e61f1762cee457f9430"},{url:"location/mercat-soller",revision:"452339f2aa07f6a1077b675da5f2ba5a"},{url:"location/mercat-soller/model",revision:"0a74a32c3d76ceec0fad0e0ce1c1c82c"},{url:"location/playa-es-trenc",revision:"d657a0824f2854935f2cd965a144c863"},{url:"location/playa-es-trenc/model",revision:"46e2043b92424907c3468eedb413ef69"},{url:"location/playa-portals-nous",revision:"567be5f8d9a4053676e4934792fe0708"},{url:"location/playa-portals-nous/model",revision:"01f63d0f1f9469c9dc54fb1af1b7a96d"},{url:"location/playa-soller",revision:"c889d527e0e6c4033787bfcf6cc339f3"},{url:"location/playa-soller/model",revision:"c5a8816f554105628685d0af2e9acda2"},{url:"location/test",revision:"ad579d592bb50f69ce3703cc044aec0a"},{url:"location/test/model",revision:"a054888b9712b3790e404b161550c3d3"},{url:"location/urban-hostel-palma",revision:"65eb82324634ec37fa3024366cf09a28"},{url:"location/urban-hostel-palma/model",revision:"7fead506d9fa19a1c41d1ce43eb12f92"},{url:"map",revision:"85553e77cda9b2e2a03583c41863921f"},{url:"permissions",revision:"db2ab79b45321906ac24ea19b66cfe17"},{url:"showcase/divider",revision:"890c50f0130d3b300618c5e9c7863e7e"},{url:"showcase/heading",revision:"8c54d5e53b4b02a24fab3f5d69c53839"},{url:"showcase",revision:"2df49d5ca2d447204c23a88f4b1373c2"},{url:"showcase/modal",revision:"e17afe8ba97e7ddfe422cc1842c91eb9"},{url:"showcase/navigation",revision:"9a777f6b93fc0d2e18bcbd0b6dbcfc28"},{url:"showcase/radar-sprite",revision:"1048e4b942946407cb73bbe92f718936"},{url:"showcase/radar",revision:"55559c23732831bd221917662812a8b5"},{url:"tutorial",revision:"fbb4fde4be266f42600cb9ab93996b92"},{url:"favicon.ico",revision:"9c94ffbeccc204fc43f054fcf8e36cfb"},{url:"apple-touch-icon.png",revision:"298b0c99571db15d8abd276d1e1e7007"},{url:"maskable-icon.png",revision:"bb0d2c1f7d34740a6382b0896463c554"},{url:"manifest.webmanifest",revision:"54be2f135f8be7510048c948e7c8e49d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
