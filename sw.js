if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const o=s=>l(s,a),u={module:{uri:a},exports:n,require:o};e[a]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"bcf1a87ef6d9af94a51de2f0819c9009"},{url:"404",revision:"bcf1a87ef6d9af94a51de2f0819c9009"},{url:"assets/aframe-ar.264e42f4.js",revision:null},{url:"assets/AFrameMap.adcc62f2.js",revision:null},{url:"assets/AframeTest.811dc0e8.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.83246375.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.6d960d6c.js",revision:null},{url:"assets/Arrow.341ba0e7.js",revision:null},{url:"assets/ArrowLarge.0c928d57.js",revision:null},{url:"assets/Backup.51865a50.js",revision:null},{url:"assets/BlurredCircle.63af57d6.js",revision:null},{url:"assets/Button.199b505b.js",revision:null},{url:"assets/Card.c64106f6.js",revision:null},{url:"assets/client-db.71f308da.js",revision:null},{url:"assets/client-only.ba128b4c.js",revision:null},{url:"assets/Compass.8da7f9e8.js",revision:null},{url:"assets/CompassCardinalPoints.404ac7ba.js",revision:null},{url:"assets/ContentDoc.e73126d8.js",revision:null},{url:"assets/ContentList.22ba9ceb.js",revision:null},{url:"assets/ContentNavigation.dcb97e82.js",revision:null},{url:"assets/ContentQuery.f05b0140.js",revision:null},{url:"assets/ContentRenderer.82c9c0c4.js",revision:null},{url:"assets/ContentRendererMarkdown.5119860a.js",revision:null},{url:"assets/ContentSlot.6c08b3cb.js",revision:null},{url:"assets/credits.547e5adc.js",revision:null},{url:"assets/Cross.bbdc9e3d.js",revision:null},{url:"assets/DayLights.85c10e95.js",revision:null},{url:"assets/default.5ca9c8ab.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.ece9574c.js",revision:null},{url:"assets/Divider.4641232f.js",revision:null},{url:"assets/divider.c7b03ad4.js",revision:null},{url:"assets/DocumentDrivenEmpty.3d22bc1d.js",revision:null},{url:"assets/DocumentDrivenNotFound.fc6660bb.js",revision:null},{url:"assets/entry.1a5eb396.js",revision:null},{url:"assets/entry.cc0a5922.css",revision:null},{url:"assets/error-404.18d85d5f.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-500.8036ec71.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.289d7f73.js",revision:null},{url:"assets/FountainTest.eb57817f.js",revision:null},{url:"assets/heading.50cdc9ed.js",revision:null},{url:"assets/index.23a0132d.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.5f47365f.js",revision:null},{url:"assets/index.616f5bee.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.b6fdf56d.js",revision:null},{url:"assets/index.e4e80c01.js",revision:null},{url:"assets/Intersect.26c3fa2a.js",revision:null},{url:"assets/Light.048fff64.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.fa5490c8.js",revision:null},{url:"assets/location.d947ef10.js",revision:null},{url:"assets/LocationFound.10cb936f.js",revision:null},{url:"assets/locations.a6dac6a9.js",revision:null},{url:"assets/Logo.bb120bbf.js",revision:null},{url:"assets/map.3030d1aa.js",revision:null},{url:"assets/map.57c4fdc1.css",revision:null},{url:"assets/map.8388814c.js",revision:null},{url:"assets/map.c982bc34.js",revision:null},{url:"assets/Map.d8f50fc9.js",revision:null},{url:"assets/Markdown.4d50090a.js",revision:null},{url:"assets/Marker.7615f187.js",revision:null},{url:"assets/Menu.22366590.js",revision:null},{url:"assets/Menu.45d5c5bc.js",revision:null},{url:"assets/modal.532d3745.js",revision:null},{url:"assets/Modal.80c2d8a1.js",revision:null},{url:"assets/model.f83cd91b.js",revision:null},{url:"assets/ModelTest.6e28d865.js",revision:null},{url:"assets/ModelUsdz.fcdbbcb3.js",revision:null},{url:"assets/navigation.85e62ea7.js",revision:null},{url:"assets/NavigationBar.b89302a0.js",revision:null},{url:"assets/NavigationButton.248ca225.js",revision:null},{url:"assets/NightLights.380449eb.js",revision:null},{url:"assets/nuxt-link.a58ce9ec.js",revision:null},{url:"assets/permission.6b6370dd.js",revision:null},{url:"assets/permissions.5e49e4f2.js",revision:null},{url:"assets/PlayRequirements.7af86aff.js",revision:null},{url:"assets/preview.c65391f5.js",revision:null},{url:"assets/ProseA.363194a3.js",revision:null},{url:"assets/ProseBlockquote.ab218960.js",revision:null},{url:"assets/ProseCode.d7ccbd0e.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.9c005c40.js",revision:null},{url:"assets/ProseEm.2be33921.js",revision:null},{url:"assets/ProseH1.8eece447.js",revision:null},{url:"assets/ProseH2.c3e1ec37.js",revision:null},{url:"assets/ProseH3.8b7ffb0b.js",revision:null},{url:"assets/ProseH4.93f4d6ec.js",revision:null},{url:"assets/ProseH5.8f238b1c.js",revision:null},{url:"assets/ProseH6.dd7e2ff7.js",revision:null},{url:"assets/ProseHr.afc05bfa.js",revision:null},{url:"assets/ProseImg.f81554e2.js",revision:null},{url:"assets/ProseLi.41714e30.js",revision:null},{url:"assets/ProseOl.64284065.js",revision:null},{url:"assets/ProseP.8f3c9939.js",revision:null},{url:"assets/ProseStrong.0643880f.js",revision:null},{url:"assets/ProseTable.e361c3d9.js",revision:null},{url:"assets/ProseTbody.11a3e539.js",revision:null},{url:"assets/ProseTd.da908f12.js",revision:null},{url:"assets/ProseTh.49f0063a.js",revision:null},{url:"assets/ProseThead.b28e3658.js",revision:null},{url:"assets/ProseTr.8a2e5ff7.js",revision:null},{url:"assets/ProseUl.6e208692.js",revision:null},{url:"assets/PwaToast.b8d9b506.js",revision:null},{url:"assets/query.a1b9a0f4.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/radar-sprite.e59b3eb7.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Radar.946910b0.js",revision:null},{url:"assets/radar.afa07a23.js",revision:null},{url:"assets/Search.b3e0ffcf.js",revision:null},{url:"assets/SectionHeading.584462ae.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.53b1545d.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.e32c8714.js",revision:null},{url:"assets/timer.1612f152.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.17c583f6.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.29910d32.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"b4f182619a681bcfb098296c8f4551ef"},{url:"/",revision:"7948b2fce14feae8e56ca287fa8f456f"},{url:"location/cala-banyalbufar",revision:"c43655f9159d43af001e94420a95b536"},{url:"location/cala-banyalbufar/model",revision:"b1e32d86be251165d96fe176cabbd28e"},{url:"location/crowtec",revision:"effa8b3fa194a6944826bf06c235208b"},{url:"location/crowtec/model",revision:"063992903479e58a8891776af004a26e"},{url:"location",revision:"8daf8dc34e4072e718db61e32f7295f3"},{url:"location/mercat-inca",revision:"ad3ebe48023547b5d01a7e7ede0368be"},{url:"location/mercat-inca/model",revision:"596aff30e98c33f2b7e65dc8500fde4d"},{url:"location/mercat-olivar",revision:"c0ffe33d5b0d41a426b3264aaff8eec7"},{url:"location/mercat-olivar/model",revision:"234ddeeed9de0fed027a70c76d764ad9"},{url:"location/mercat-pere-garau",revision:"2dad817a2460d513a2fe552d1d1ad55d"},{url:"location/mercat-pere-garau/model",revision:"08e2a200144d657568c83b1207bc3c01"},{url:"location/mercat-sa-pobla",revision:"481568be70d68a277d89f6b0a46d33e5"},{url:"location/mercat-sa-pobla/model",revision:"ac66b3457a7e977c3cb2ac6157599fe5"},{url:"location/mercat-santa-catalina",revision:"b95c5c400a21bcead0ebe16b442a8bb7"},{url:"location/mercat-santa-catalina/model",revision:"5b7c81c3d06e4442c747c82b87afea23"},{url:"location/mercat-santa-maria-cami",revision:"50589d4d01b5fed76e2721406f1c0b11"},{url:"location/mercat-santa-maria-cami/model",revision:"a290bfd35e6e1abb4e5e9f84d1a3d19a"},{url:"location/mercat-sineu",revision:"cdf26e44cd6e137b29e7575bda1e2c8e"},{url:"location/mercat-sineu/model",revision:"d5974041893f7c8b83ac63aa6e4d69d4"},{url:"location/mercat-soller",revision:"9eba2d2f606bd290292ba7d77f2a274f"},{url:"location/mercat-soller/model",revision:"5df4e3664cb5a7b1c3573a717fbf8ba4"},{url:"location/playa-es-trenc",revision:"8b6d44a3be754aa68482d3e27b4d7304"},{url:"location/playa-es-trenc/model",revision:"61453dd0cc04dc8bbb9450c05dede401"},{url:"location/playa-portals-nous",revision:"2ad5125381f2828d20711e6781892905"},{url:"location/playa-portals-nous/model",revision:"68248a88f41cb7d7a7025a5f38461640"},{url:"location/playa-soller",revision:"8db242eec169413975452843c89d70af"},{url:"location/playa-soller/model",revision:"74a4dbe7f46fad851c328593f5e639c6"},{url:"location/test",revision:"9f9b0f706de30d60e62709cbce467b4d"},{url:"location/test/model",revision:"ae37cc5285075b35f9f6084903a314e6"},{url:"location/urban-hostel-palma",revision:"a71959651301dba3399366ad387b66e7"},{url:"location/urban-hostel-palma/model",revision:"10782a6e33056b93d490ab73a0e21723"},{url:"map",revision:"9ed0d326e1576d8592bdcd7508c64e5b"},{url:"permissions",revision:"17b896ec8ddf7c55619ffdc49dfa5ba0"},{url:"showcase/divider",revision:"d75975c0fcf320d8912a46b39e4259ea"},{url:"showcase/heading",revision:"805c69fc32de3ad673d24b66c5f2447f"},{url:"showcase",revision:"a0b0d5579ff81b1cf4e0295016584695"},{url:"showcase/modal",revision:"6a1517582121334db9ef08fbb59b6bc7"},{url:"showcase/navigation",revision:"0edfe563389147141f04135dbc8a1396"},{url:"showcase/radar-sprite",revision:"5c2d437ccac70ba9a0880dfc98cff3bf"},{url:"showcase/radar",revision:"805f8b8b9579e8d2985f0a12b1b3f453"},{url:"tutorial",revision:"f6c68ec6e47783a3a3a1bff8221417bf"},{url:"favicon.ico",revision:"60980cf3ec659b1f8cacb9c1d87464fd"},{url:"apple-touch-icon.png",revision:"27eddf990ed9d07563f56fe88a479070"},{url:"maskable-icon.png",revision:"1bc5bd5f6f6f7077080da2d28b50a597"},{url:"manifest.webmanifest",revision:"832a102e24ac88412ce550358a7bb174"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
