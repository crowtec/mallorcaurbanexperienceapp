if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const o=s=>l(s,a),u={module:{uri:a},exports:n,require:o};e[a]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),n)))}}define(["./workbox-27b29e6f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"_index",revision:"30475352d82f38bf8182b5b22611db14"},{url:"200",revision:"ed209649fc67a61db40a1a110501b244"},{url:"404",revision:"ed209649fc67a61db40a1a110501b244"},{url:"assets/_index.087985c9.js",revision:null},{url:"assets/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"assets/AFrameMap.c86b4c47.js",revision:null},{url:"assets/AframeTest.aa377f29.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.ed0eac54.js",revision:null},{url:"assets/ARModelViewer.34bde3db.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/Arrow.1f1e764b.js",revision:null},{url:"assets/ArrowLarge.d1a255a2.js",revision:null},{url:"assets/Backup.3c44bcf4.js",revision:null},{url:"assets/BlurredCircle.fae37d26.js",revision:null},{url:"assets/Button.16701b4f.js",revision:null},{url:"assets/Card.9d097be9.js",revision:null},{url:"assets/client-db.fbf99102.js",revision:null},{url:"assets/client-only.73ba8d75.js",revision:null},{url:"assets/Compass.86b54258.js",revision:null},{url:"assets/CompassCardinalPoints.2c3cef6e.js",revision:null},{url:"assets/ContentDoc.2b09ec13.js",revision:null},{url:"assets/ContentList.7c505eea.js",revision:null},{url:"assets/ContentNavigation.b4d7336a.js",revision:null},{url:"assets/ContentQuery.701b77c7.js",revision:null},{url:"assets/ContentRenderer.869e5d56.js",revision:null},{url:"assets/ContentRendererMarkdown.95af6b55.js",revision:null},{url:"assets/ContentSlot.c65cd52c.js",revision:null},{url:"assets/credits.07b9fad7.js",revision:null},{url:"assets/Cross.76252ec3.js",revision:null},{url:"assets/DayLights.599a5aa0.js",revision:null},{url:"assets/default.99c7d10a.js",revision:null},{url:"assets/Diamond.641e8c0c.js",revision:null},{url:"assets/divider.109baac9.js",revision:null},{url:"assets/Divider.af4a9812.js",revision:null},{url:"assets/DocumentDrivenEmpty.469293fe.js",revision:null},{url:"assets/DocumentDrivenNotFound.be74460d.js",revision:null},{url:"assets/entry.c04e2c05.css",revision:null},{url:"assets/error-404.25dc02f6.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-500.2e8f4070.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.f92939d8.js",revision:null},{url:"assets/FountainTest.a98f3674.js",revision:null},{url:"assets/heading.63c5e0a1.js",revision:null},{url:"assets/index.1044f39b.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.b4150041.js",revision:null},{url:"assets/index.b532f111.js",revision:null},{url:"assets/index.b68d70b3.js",revision:null},{url:"assets/Intersect.99f407d4.js",revision:null},{url:"assets/Light.fcf3ef47.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.944c303d.js",revision:null},{url:"assets/location.10a209af.js",revision:null},{url:"assets/LocationFound.6413c032.js",revision:null},{url:"assets/Logo.0c1b25a5.js",revision:null},{url:"assets/map-test.8a5a1307.js",revision:null},{url:"assets/map.362b711f.js",revision:null},{url:"assets/Map.71e052b3.js",revision:null},{url:"assets/map.7d7995f8.js",revision:null},{url:"assets/map.8f96aab4.css",revision:null},{url:"assets/map.c5e358cf.js",revision:null},{url:"assets/Markdown.8dc83f26.js",revision:null},{url:"assets/Marker.1c7f61c4.js",revision:null},{url:"assets/Menu.340a2808.js",revision:null},{url:"assets/Menu.7c4f8e65.js",revision:null},{url:"assets/modal.00508545.js",revision:null},{url:"assets/Modal.45aa0619.js",revision:null},{url:"assets/model.9a260942.js",revision:null},{url:"assets/ModelTest.507801ee.js",revision:null},{url:"assets/ModelUsdz.5eb02944.js",revision:null},{url:"assets/navigation.eef7604b.js",revision:null},{url:"assets/NavigationBar.0a012f14.js",revision:null},{url:"assets/NavigationButton.44b1ef3c.js",revision:null},{url:"assets/NightLights.97845c99.js",revision:null},{url:"assets/nuxt-link.afd284ba.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.4016dc60.js",revision:null},{url:"assets/preview.ef7411f2.js",revision:null},{url:"assets/ProseA.3238d846.js",revision:null},{url:"assets/ProseBlockquote.6737df45.js",revision:null},{url:"assets/ProseCode.a3cae452.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.3cf1247c.js",revision:null},{url:"assets/ProseEm.926e31d6.js",revision:null},{url:"assets/ProseH1.65e14856.js",revision:null},{url:"assets/ProseH2.37967c4e.js",revision:null},{url:"assets/ProseH3.04926f85.js",revision:null},{url:"assets/ProseH4.c01bbd37.js",revision:null},{url:"assets/ProseH5.85216d94.js",revision:null},{url:"assets/ProseH6.ab550db0.js",revision:null},{url:"assets/ProseHr.d38b52a9.js",revision:null},{url:"assets/ProseImg.81d19b55.js",revision:null},{url:"assets/ProseLi.061f16f9.js",revision:null},{url:"assets/ProseOl.748e8ae8.js",revision:null},{url:"assets/ProseP.14856388.js",revision:null},{url:"assets/ProseStrong.c399a31a.js",revision:null},{url:"assets/ProseTable.b2673091.js",revision:null},{url:"assets/ProseTbody.3a1e3961.js",revision:null},{url:"assets/ProseTd.6b3a7c22.js",revision:null},{url:"assets/ProseTh.d6ead036.js",revision:null},{url:"assets/ProseThead.fc80078a.js",revision:null},{url:"assets/ProseTr.4f7ce61e.js",revision:null},{url:"assets/ProseUl.6e7a4539.js",revision:null},{url:"assets/query.1b97921e.js",revision:null},{url:"assets/radar-sprite.26277260.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/Radar.5ce4f28c.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/radar.6cc6696f.js",revision:null},{url:"assets/Search.4633a6ce.js",revision:null},{url:"assets/SectionHeading.79f8e45c.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.3c9e0e61.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.1d9ae5ba.js",revision:null},{url:"assets/tutorial.266a3757.css",revision:null},{url:"assets/tutorial.77918f9e.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.7a4b3006.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"2e9f633e68063fd7a44761c64273e741"},{url:"/",revision:"b743eb8cc0a1b2502e3a92af2fac4c49"},{url:"location/cala-banyalbufar",revision:"a810c62dd961693c1397da57769ca22a"},{url:"location/cala-banyalbufar/model",revision:"686e52b903ac5d4f394bd6a45232aafd"},{url:"location/crowtec",revision:"304a89320aa616ef1e3fbdfcf89ad139"},{url:"location/crowtec/model",revision:"15dd276d523bd4de6f7133511c26175c"},{url:"location",revision:"c316c61b4f3c043f56340d39a126c815"},{url:"location/mercat-inca",revision:"609e3b875e78d76127893a4e70981b54"},{url:"location/mercat-inca/model",revision:"750d01ae156e66f7327f5e689ff6367d"},{url:"location/mercat-olivar",revision:"21c1e60661fccba828c07d3b98b1e051"},{url:"location/mercat-olivar/model",revision:"56ddf7d8b2adc5b31cc0dff325f18b4f"},{url:"location/mercat-pere-garau",revision:"8877d9abbc4f4fc12a237e70ff116505"},{url:"location/mercat-pere-garau/model",revision:"5164b575f6089fd201db59f7f4cc2d7d"},{url:"location/mercat-sa-pobla",revision:"808ad36bc029b9ed2dfa2ee065ff8217"},{url:"location/mercat-sa-pobla/model",revision:"3d75464d17295bc711b4e3932925d789"},{url:"location/mercat-santa-catalina",revision:"54c9e6de3505cd1bc65295f3d6dd640c"},{url:"location/mercat-santa-catalina/model",revision:"04498a7b8840a2460a54ad8ee451919a"},{url:"location/mercat-santa-maria-cami",revision:"dba4110067d64191edf14ab466522fcb"},{url:"location/mercat-santa-maria-cami/model",revision:"8407fc2424e7470ebd8296886ce3bf24"},{url:"location/mercat-sineu",revision:"4f0f089f8c3a7b76a5974294a20b2941"},{url:"location/mercat-sineu/model",revision:"7353c18597e115faa028b361e5dcbae7"},{url:"location/mercat-soller",revision:"fc2ed4f27587c4421c7cc3eb65750f76"},{url:"location/mercat-soller/model",revision:"bae8aa1a4bdad0cfcf3002f7636af156"},{url:"location/playa-es-trenc",revision:"cb86d8ecf13cd9c9392c5d7cb2bb4615"},{url:"location/playa-es-trenc/model",revision:"9e89470e80ac1dd17e34ad3797774f9f"},{url:"location/playa-portals-nous",revision:"3b249da05fe8cefc0396cb2f6a755947"},{url:"location/playa-portals-nous/model",revision:"2f43be9c4975cedf315c3d8c4d3edddc"},{url:"location/playa-soller",revision:"ee72ea31e029433674e6431ca9da4aab"},{url:"location/playa-soller/model",revision:"a3cad26c3c1d9724e5dad07a9deb7e65"},{url:"location/test",revision:"9746d169ca4b7990c63fd634d1a31f8f"},{url:"location/test/model",revision:"ad15a89dfd129cc83bc2aaafed22eb45"},{url:"location/urban-hostel-palma",revision:"e87f43a9882cb9dbf7ee136d8c7b0fa7"},{url:"location/urban-hostel-palma/model",revision:"cde118f9efc97f2222f01a902144ce30"},{url:"map-test",revision:"552cf8cb4aaddfb73b88f2609fe8c049"},{url:"map",revision:"290f99dc4f63e8b492db1a21f8c3a94a"},{url:"permissions",revision:"157c4ccc6f0122614d29a391a879363f"},{url:"showcase/divider",revision:"6c722220d86d27a52a05d30eaee7b8a5"},{url:"showcase/heading",revision:"b42ff078e6cbf93710ec87b25ba9d340"},{url:"showcase",revision:"acc81518ee8876b42aa6209291cb5cff"},{url:"showcase/modal",revision:"21ad057030d2de224fde31752862fb60"},{url:"showcase/navigation",revision:"ed88c8b432ed688fd868dd28dd09fd2c"},{url:"showcase/radar-sprite",revision:"1e56d984327638195050b2d9b6fc3983"},{url:"showcase/radar",revision:"725cc0fdbbbdbf057e40f6894f6cb4ee"},{url:"tutorial",revision:"db1679e81d9f30cc8309f42b1cc37fa0"},{url:"manifest.webmanifest",revision:"f2d82be8d547b6cb18a0719b317cb135"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
