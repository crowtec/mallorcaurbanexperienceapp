if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const o=s=>l(s,a),u={module:{uri:a},exports:n,require:o};e[a]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"1e5fd39020359e716c66cb783ccca57a"},{url:"404",revision:"1e5fd39020359e716c66cb783ccca57a"},{url:"assets/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"assets/AFrameMap.b5340746.js",revision:null},{url:"assets/AframeTest.b2adf1be.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.558f9b4e.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.fac37188.js",revision:null},{url:"assets/Arrow.e000b2dd.js",revision:null},{url:"assets/ArrowLarge.cd28f9c9.js",revision:null},{url:"assets/Backup.2f2231bf.js",revision:null},{url:"assets/BlurredCircle.c032cac8.js",revision:null},{url:"assets/Button.68b889c1.js",revision:null},{url:"assets/Card.c38f502c.js",revision:null},{url:"assets/client-db.5a56d35d.js",revision:null},{url:"assets/client-only.bcdfd72f.js",revision:null},{url:"assets/Compass.815caef7.js",revision:null},{url:"assets/CompassCardinalPoints.a62d4ef2.js",revision:null},{url:"assets/ContentDoc.153907ac.js",revision:null},{url:"assets/ContentList.da778f10.js",revision:null},{url:"assets/ContentNavigation.f083c372.js",revision:null},{url:"assets/ContentQuery.be1e75f4.js",revision:null},{url:"assets/ContentRenderer.302fa4a2.js",revision:null},{url:"assets/ContentRendererMarkdown.546f2c23.js",revision:null},{url:"assets/ContentSlot.9b063f2f.js",revision:null},{url:"assets/credits.68ec2a93.js",revision:null},{url:"assets/Cross.ad2aa836.js",revision:null},{url:"assets/DayLights.993e6e35.js",revision:null},{url:"assets/default.e794459d.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.9c098a44.js",revision:null},{url:"assets/divider.223a4a54.js",revision:null},{url:"assets/Divider.d0c23120.js",revision:null},{url:"assets/DocumentDrivenEmpty.ae99eaa0.js",revision:null},{url:"assets/DocumentDrivenNotFound.fcf2ef86.js",revision:null},{url:"assets/entry.f7c819f4.css",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-404.a716989b.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-500.cfb2ff6c.js",revision:null},{url:"assets/error-component.2f7c4ff9.js",revision:null},{url:"assets/FountainTest.8feae9d6.js",revision:null},{url:"assets/heading.0150c2dd.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.65f7b4d0.js",revision:null},{url:"assets/index.8363e6c4.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.acfa8d05.js",revision:null},{url:"assets/index.c865c4ff.js",revision:null},{url:"assets/index.dfb6da57.js",revision:null},{url:"assets/Intersect.f5481a42.js",revision:null},{url:"assets/Light.0fa1e000.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.3a332d6a.js",revision:null},{url:"assets/location.ef51631e.js",revision:null},{url:"assets/LocationFound.46298f1a.js",revision:null},{url:"assets/Logo.fed2af6e.js",revision:null},{url:"assets/map.3088b1b2.js",revision:null},{url:"assets/map.30d94b5d.js",revision:null},{url:"assets/Map.31805ff4.js",revision:null},{url:"assets/map.736feb1b.css",revision:null},{url:"assets/map.832c7261.js",revision:null},{url:"assets/Markdown.e48da7a6.js",revision:null},{url:"assets/Marker.1e665f9e.js",revision:null},{url:"assets/Menu.06919451.js",revision:null},{url:"assets/Menu.aef277f4.js",revision:null},{url:"assets/Modal.bd351ceb.js",revision:null},{url:"assets/modal.c60786da.js",revision:null},{url:"assets/model.a5bf2216.js",revision:null},{url:"assets/ModelTest.6d1fe875.js",revision:null},{url:"assets/ModelUsdz.1227fc74.js",revision:null},{url:"assets/navigation.ba833c65.js",revision:null},{url:"assets/NavigationBar.21caec81.js",revision:null},{url:"assets/NavigationButton.03c849bb.js",revision:null},{url:"assets/NightLights.16477193.js",revision:null},{url:"assets/nuxt-link.83d9929a.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.b08a1b5f.js",revision:null},{url:"assets/PlayRequirements.6a2ccdcf.js",revision:null},{url:"assets/preview.625a0893.js",revision:null},{url:"assets/ProseA.2478fbd8.js",revision:null},{url:"assets/ProseBlockquote.1244d609.js",revision:null},{url:"assets/ProseCode.3aaa4a2f.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.1d8474f7.js",revision:null},{url:"assets/ProseEm.50e803ae.js",revision:null},{url:"assets/ProseH1.40331efc.js",revision:null},{url:"assets/ProseH2.2181c853.js",revision:null},{url:"assets/ProseH3.5a176364.js",revision:null},{url:"assets/ProseH4.ca18d2ba.js",revision:null},{url:"assets/ProseH5.12a8a7d8.js",revision:null},{url:"assets/ProseH6.8208949c.js",revision:null},{url:"assets/ProseHr.0714db11.js",revision:null},{url:"assets/ProseImg.a918f57d.js",revision:null},{url:"assets/ProseLi.f3e5a24b.js",revision:null},{url:"assets/ProseOl.d01b6692.js",revision:null},{url:"assets/ProseP.3b253f91.js",revision:null},{url:"assets/ProseStrong.08786f0d.js",revision:null},{url:"assets/ProseTable.0f39b682.js",revision:null},{url:"assets/ProseTbody.bc37a4ca.js",revision:null},{url:"assets/ProseTd.f5b32951.js",revision:null},{url:"assets/ProseTh.84477170.js",revision:null},{url:"assets/ProseThead.19a14405.js",revision:null},{url:"assets/ProseTr.6e06d90f.js",revision:null},{url:"assets/ProseUl.b9bac04d.js",revision:null},{url:"assets/PwaToast.936d4ec2.js",revision:null},{url:"assets/query.a83cea1f.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/radar-sprite.b51ae98c.js",revision:null},{url:"assets/radar.0a78cd28.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Radar.7d065435.js",revision:null},{url:"assets/Search.25891ab9.js",revision:null},{url:"assets/SectionHeading.8d9c4918.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.b3ad91ec.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.0870dc38.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.c737240b.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.4e57d2b0.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"1e680790f0748e330d643674865af9bd"},{url:"/",revision:"aa1b42832b5c5981cdc7edef649686c1"},{url:"location/cala-banyalbufar",revision:"a9d13efa4bba062bb1fdec487a11fe76"},{url:"location/cala-banyalbufar/model",revision:"ac4ed90117d2bb0f0e35d9b967fcc729"},{url:"location/crowtec",revision:"1c2b00907e82eeb2d8019dcec6370d31"},{url:"location/crowtec/model",revision:"130e4e7bfedfe90debbbd69b124e32ec"},{url:"location",revision:"9779d6cc424ab8a4182eab8d35145184"},{url:"location/mercat-inca",revision:"ce7879522472026a31f7c6aaf2ca1fd3"},{url:"location/mercat-inca/model",revision:"8b7b8c6c858c8fc49c2fbabcb28ab4b8"},{url:"location/mercat-olivar",revision:"42b0c497089fbc687bf9c58e2f9035ef"},{url:"location/mercat-olivar/model",revision:"104a5d004118092832724eea3a88b943"},{url:"location/mercat-pere-garau",revision:"8891aeab8d277f2db4c568a31fe50b70"},{url:"location/mercat-pere-garau/model",revision:"e810de295813ff8c83a2d02ee6abc2ba"},{url:"location/mercat-sa-pobla",revision:"c7b821fb482a6ea5c54e5ba6be4e2f3f"},{url:"location/mercat-sa-pobla/model",revision:"1db7c66ea343a7d1120bc93fa5b2bd80"},{url:"location/mercat-santa-catalina",revision:"5467f3c5582318719594d86fc833bcd7"},{url:"location/mercat-santa-catalina/model",revision:"670a51af26abc176240d3155367ca217"},{url:"location/mercat-santa-maria-cami",revision:"f1e3c49ef5414a7589b0ae22a732343f"},{url:"location/mercat-santa-maria-cami/model",revision:"6031314c78aacccd96e38145ffd00f47"},{url:"location/mercat-sineu",revision:"f495a785927ea28773aeabfc50cd01ad"},{url:"location/mercat-sineu/model",revision:"32401832fcff351479fdf75edee49bb3"},{url:"location/mercat-soller",revision:"92d4f0be3396193b1bbacf0366033ee7"},{url:"location/mercat-soller/model",revision:"596213947933d62a85e223ba46316012"},{url:"location/playa-es-trenc",revision:"a3a13203e7a570b44250b724fa0fe4a7"},{url:"location/playa-es-trenc/model",revision:"d993d0e50677ea08790a26e45d2e075e"},{url:"location/playa-portals-nous",revision:"29bd567e8442cee22f5a20b233e093e2"},{url:"location/playa-portals-nous/model",revision:"fd91a1d2b366426b4575f4de27f04384"},{url:"location/playa-soller",revision:"ce3405946361555aeaff0de0bf690e8d"},{url:"location/playa-soller/model",revision:"021b31120501fe47bb15a713e3136a56"},{url:"location/test",revision:"1758a6cea431f339cca1af212241017f"},{url:"location/test/model",revision:"d61aa65b60609ffdc628754d47f647e2"},{url:"location/urban-hostel-palma",revision:"bd342ee7e8506d54629ef4b150eb93fc"},{url:"location/urban-hostel-palma/model",revision:"3fe91691df4a86acecb5d6ef7b1e4160"},{url:"map",revision:"98773b4e98b7e959a022a681e2c9ea9c"},{url:"permissions",revision:"09204d2d785be779344e4223b3f127ad"},{url:"showcase/divider",revision:"08bdd0e11c3c9431e02eba3a9ca6211e"},{url:"showcase/heading",revision:"f549e164e3e5be153aba47c57d3192e3"},{url:"showcase",revision:"01b121f456263f0413f152e754fe080f"},{url:"showcase/modal",revision:"a34b8bb3ef4edbef6d5ff7c8725fb2ae"},{url:"showcase/navigation",revision:"3319d19c772c9c52f821e90d1b5de965"},{url:"showcase/radar-sprite",revision:"995e19f4b95a6b059e7e3e06103ec27d"},{url:"showcase/radar",revision:"cae5e3eb4bc90dc1669442d529e936f4"},{url:"tutorial",revision:"bdb1c0bf47a27290dabd517677e6de55"},{url:"favicon.ico",revision:"9c94ffbeccc204fc43f054fcf8e36cfb"},{url:"apple-touch-icon.png",revision:"298b0c99571db15d8abd276d1e1e7007"},{url:"maskable-icon.png",revision:"bb0d2c1f7d34740a6382b0896463c554"},{url:"manifest.webmanifest",revision:"54be2f135f8be7510048c948e7c8e49d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
