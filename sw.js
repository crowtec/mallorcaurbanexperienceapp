if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const o=s=>l(s,a),u={module:{uri:a},exports:n,require:o};e[a]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"0208a5a4674963067993516e4db49f2b"},{url:"404",revision:"0208a5a4674963067993516e4db49f2b"},{url:"assets/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"assets/aframe-ar.514505d9.js",revision:null},{url:"assets/AFrameMap.5085281e.js",revision:null},{url:"assets/AframeTest.672b9573.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.943bc805.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.d881cccd.js",revision:null},{url:"assets/Arrow.ad0290b8.js",revision:null},{url:"assets/ArrowLarge.ab841b22.js",revision:null},{url:"assets/Backup.5e61b3da.js",revision:null},{url:"assets/BlurredCircle.4098d61f.js",revision:null},{url:"assets/Button.cbbfdf00.js",revision:null},{url:"assets/Card.5161a658.js",revision:null},{url:"assets/client-db.2edcbdc2.js",revision:null},{url:"assets/client-only.cef77493.js",revision:null},{url:"assets/Compass.3a51a0df.js",revision:null},{url:"assets/CompassCardinalPoints.d188b781.js",revision:null},{url:"assets/ContentDoc.e342e813.js",revision:null},{url:"assets/ContentList.3d9f670b.js",revision:null},{url:"assets/ContentNavigation.4d2a7557.js",revision:null},{url:"assets/ContentQuery.cb2e80dd.js",revision:null},{url:"assets/ContentRenderer.d0d0a104.js",revision:null},{url:"assets/ContentRendererMarkdown.85111c26.js",revision:null},{url:"assets/ContentSlot.f056f82d.js",revision:null},{url:"assets/credits.d676d004.js",revision:null},{url:"assets/Cross.b3ce6cdf.js",revision:null},{url:"assets/DayLights.e0b27623.js",revision:null},{url:"assets/default.69cccb9b.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.bab1731d.js",revision:null},{url:"assets/divider.c64bf639.js",revision:null},{url:"assets/Divider.e562678c.js",revision:null},{url:"assets/DocumentDrivenEmpty.19c17331.js",revision:null},{url:"assets/DocumentDrivenNotFound.0cf2940a.js",revision:null},{url:"assets/entry.aabb36d2.css",revision:null},{url:"assets/entry.edb36dbc.js",revision:null},{url:"assets/error-404.3bbe841e.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-500.f63de272.js",revision:null},{url:"assets/error-component.b932a287.js",revision:null},{url:"assets/FountainTest.1a880089.js",revision:null},{url:"assets/heading.7283cbfd.js",revision:null},{url:"assets/index.1e9dcca7.js",revision:null},{url:"assets/index.23455863.js",revision:null},{url:"assets/index.28595172.js",revision:null},{url:"assets/index.3b6a5aaf.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.c1f546cd.js",revision:null},{url:"assets/Intersect.847b83c6.js",revision:null},{url:"assets/Light.82d2755f.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.5e1647a0.js",revision:null},{url:"assets/location.799fde17.js",revision:null},{url:"assets/LocationFound.aad693d0.js",revision:null},{url:"assets/Logo.e4b040f5.js",revision:null},{url:"assets/map.736feb1b.css",revision:null},{url:"assets/map.8def1044.js",revision:null},{url:"assets/map.b708ebbb.js",revision:null},{url:"assets/map.c369ce0f.js",revision:null},{url:"assets/Map.d69b41ea.js",revision:null},{url:"assets/Markdown.e7f97e34.js",revision:null},{url:"assets/Marker.726735ae.js",revision:null},{url:"assets/Menu.95670d35.js",revision:null},{url:"assets/Menu.f079671d.js",revision:null},{url:"assets/Modal.4cf77e19.js",revision:null},{url:"assets/modal.df53462a.js",revision:null},{url:"assets/model.f6f36ce8.js",revision:null},{url:"assets/ModelTest.fede81bf.js",revision:null},{url:"assets/ModelUsdz.84a5b3b1.js",revision:null},{url:"assets/navigation.02fa4901.js",revision:null},{url:"assets/NavigationBar.a7ac86cc.js",revision:null},{url:"assets/NavigationButton.9cd2dc0d.js",revision:null},{url:"assets/NightLights.147c9f64.js",revision:null},{url:"assets/nuxt-link.78f0823b.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.94d4e8ce.js",revision:null},{url:"assets/PlayRequirements.15d0b2b8.js",revision:null},{url:"assets/preview.2389fd84.js",revision:null},{url:"assets/ProseA.2f5d14cd.js",revision:null},{url:"assets/ProseBlockquote.86b20b93.js",revision:null},{url:"assets/ProseCode.5ee59da4.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.ec32faab.js",revision:null},{url:"assets/ProseEm.3b4c530a.js",revision:null},{url:"assets/ProseH1.9288ab0a.js",revision:null},{url:"assets/ProseH2.67b6f452.js",revision:null},{url:"assets/ProseH3.9a8e4f2e.js",revision:null},{url:"assets/ProseH4.978996de.js",revision:null},{url:"assets/ProseH5.a6c68f27.js",revision:null},{url:"assets/ProseH6.aec49624.js",revision:null},{url:"assets/ProseHr.9da9db0a.js",revision:null},{url:"assets/ProseImg.e5c0e172.js",revision:null},{url:"assets/ProseLi.cc08ac22.js",revision:null},{url:"assets/ProseOl.cb9a1a46.js",revision:null},{url:"assets/ProseP.4f51c5c6.js",revision:null},{url:"assets/ProseStrong.1ef4a1eb.js",revision:null},{url:"assets/ProseTable.48affd49.js",revision:null},{url:"assets/ProseTbody.59d481e4.js",revision:null},{url:"assets/ProseTd.26538e86.js",revision:null},{url:"assets/ProseTh.49b09663.js",revision:null},{url:"assets/ProseThead.22b9afdb.js",revision:null},{url:"assets/ProseTr.231c59f3.js",revision:null},{url:"assets/ProseUl.9e6e69eb.js",revision:null},{url:"assets/PwaToast.ae794b15.js",revision:null},{url:"assets/query.46624e86.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/radar-sprite.d5cda678.js",revision:null},{url:"assets/Radar.39affd4a.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/radar.d2b92af5.js",revision:null},{url:"assets/Search.ac935e99.js",revision:null},{url:"assets/SectionHeading.b317d6dc.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.dd4cc0bd.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.1041effe.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.b63d44d5.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.e8c9189b.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"6056a024d464a2f8941db58226055b15"},{url:"/",revision:"c7aaf9eafe9d5e143f669604cb133275"},{url:"location/cala-banyalbufar",revision:"7c4c023d4e6752e1540fb61b9d4fdfe5"},{url:"location/cala-banyalbufar/model",revision:"d4c227898d2af11d03cc5e8924042bcc"},{url:"location/crowtec",revision:"e0d5572f18ef9f3c816cd3836da8a1ef"},{url:"location/crowtec/model",revision:"31bce2f0c21992b4d41739873df4fad5"},{url:"location",revision:"b6c79aeb2c8f289b8948ceb7c6f64536"},{url:"location/mercat-inca",revision:"2fab28901a78954859cee2280ca3bdea"},{url:"location/mercat-inca/model",revision:"90b15f2cded271fa31190411da5bc6d7"},{url:"location/mercat-olivar",revision:"14c1baddc36d91d342ebc444b8684e9a"},{url:"location/mercat-olivar/model",revision:"76faedd4a19242db18389a8cb0d5845d"},{url:"location/mercat-pere-garau",revision:"8a67e97856f76b730486217695ee4453"},{url:"location/mercat-pere-garau/model",revision:"b3593bcacc5a231c38263970355a242a"},{url:"location/mercat-sa-pobla",revision:"71e0cf1f8ff8f95bc247811e476ed6fa"},{url:"location/mercat-sa-pobla/model",revision:"b77dae0dd4e24dc13f942c77e9aa757c"},{url:"location/mercat-santa-catalina",revision:"ef933ee0833aaf94f16dc8eae9a85b26"},{url:"location/mercat-santa-catalina/model",revision:"b485f0915887f0868fdabfc42eb24103"},{url:"location/mercat-santa-maria-cami",revision:"853021dcd852321c22813c7742870918"},{url:"location/mercat-santa-maria-cami/model",revision:"207f09bebe1ce9dff88d3627573d09a4"},{url:"location/mercat-sineu",revision:"e8f000264fe61fc48acb2b3c16ddd5bc"},{url:"location/mercat-sineu/model",revision:"87bd56de44b5df600d0b18b02a6b4c26"},{url:"location/mercat-soller",revision:"67b692ccdd716f0eef5b38f0577bbb60"},{url:"location/mercat-soller/model",revision:"7eb6ebaae1e745b9c7ffceb44ef6d2d5"},{url:"location/playa-es-trenc",revision:"a76004616c884b8d33692cd0b4e360f6"},{url:"location/playa-es-trenc/model",revision:"a5c97f6d23ffcb62f8fc1d1ceabed436"},{url:"location/playa-portals-nous",revision:"5b22877d65fbc8a6844327e10ebbe0c3"},{url:"location/playa-portals-nous/model",revision:"0f44b0edfc725bcd101db1cabf3908e2"},{url:"location/playa-soller",revision:"9982497a0b070a0ce887713d29999a92"},{url:"location/playa-soller/model",revision:"e00c1cdc258a0f48cb005265ccd9edd7"},{url:"location/test",revision:"01e1560e297bd9abe38423fd9f5c5770"},{url:"location/test/model",revision:"6b1796aa3a5fdb1c7eb6ea7c66017ae7"},{url:"location/urban-hostel-palma",revision:"2d72bfecd69ae2b976190054680d8f26"},{url:"location/urban-hostel-palma/model",revision:"52fa30e2bc4f402ee218ef7c9b86db04"},{url:"map",revision:"a2ada56078678be5fb2f0b23b4161cf0"},{url:"permissions",revision:"613676396997a97eb55210d60dfb5833"},{url:"showcase/divider",revision:"b0283e1f1ecae16c4d0e0273d84d4119"},{url:"showcase/heading",revision:"42def1824a742685007879f6bdf3f0a6"},{url:"showcase",revision:"ebc28a0afa2da305caf69f392d27665a"},{url:"showcase/modal",revision:"f83336136d74f2ddb22b597845d584d3"},{url:"showcase/navigation",revision:"416cbc0ed058b8f0db1245fa39234177"},{url:"showcase/radar-sprite",revision:"226a3e3ca8a8d5d049fdbcea5a461b22"},{url:"showcase/radar",revision:"82f6f34f23bbeaee254e342241fdb79f"},{url:"tutorial",revision:"b7388a4f5d9f4b46005c14d51443de6a"},{url:"favicon.ico",revision:"9c94ffbeccc204fc43f054fcf8e36cfb"},{url:"apple-touch-icon.png",revision:"298b0c99571db15d8abd276d1e1e7007"},{url:"maskable-icon.png",revision:"bb0d2c1f7d34740a6382b0896463c554"},{url:"manifest.webmanifest",revision:"54be2f135f8be7510048c948e7c8e49d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
