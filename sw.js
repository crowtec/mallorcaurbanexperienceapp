if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,a)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let n={};const o=s=>l(s,i),u={module:{uri:i},exports:n,require:o};e[i]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(a(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"ffb11dc9673242a9407ed742428ba8a7"},{url:"404",revision:"ffb11dc9673242a9407ed742428ba8a7"},{url:"assets/aframe-ar.6a231a66.js",revision:null},{url:"assets/AFrameMap.41c5988f.js",revision:null},{url:"assets/AframeTest.3d0c6453.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.3e330ec1.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.f494b16c.js",revision:null},{url:"assets/Arrow.d0bf7f50.js",revision:null},{url:"assets/ArrowLarge.eef3ed73.js",revision:null},{url:"assets/Backup.dec36474.js",revision:null},{url:"assets/BlurredCircle.83fbe68e.js",revision:null},{url:"assets/Button.06cd07b9.js",revision:null},{url:"assets/Card.8bf89222.js",revision:null},{url:"assets/client-db.a4a2228e.js",revision:null},{url:"assets/client-only.b54fbd62.js",revision:null},{url:"assets/Compass.0f7b7b33.js",revision:null},{url:"assets/CompassCardinalPoints.4ac0a670.js",revision:null},{url:"assets/ContentDoc.943b702a.js",revision:null},{url:"assets/ContentList.52a017dc.js",revision:null},{url:"assets/ContentNavigation.741ccb78.js",revision:null},{url:"assets/ContentQuery.1d806487.js",revision:null},{url:"assets/ContentRenderer.85f8a34c.js",revision:null},{url:"assets/ContentRendererMarkdown.b1eb7ba5.js",revision:null},{url:"assets/ContentSlot.29721207.js",revision:null},{url:"assets/credits.b760dbea.js",revision:null},{url:"assets/Cross.dda3627a.js",revision:null},{url:"assets/DayLights.c86a6375.js",revision:null},{url:"assets/default.1a104ef1.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.efa1e73a.js",revision:null},{url:"assets/Divider.3f741b11.js",revision:null},{url:"assets/divider.f6a11add.js",revision:null},{url:"assets/DocumentDrivenEmpty.8372cace.js",revision:null},{url:"assets/DocumentDrivenNotFound.a22e9420.js",revision:null},{url:"assets/entry.3104b443.js",revision:null},{url:"assets/entry.cc0a5922.css",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-404.c51b5216.js",revision:null},{url:"assets/error-500.aafbe9f9.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.ae853265.js",revision:null},{url:"assets/FountainTest.04bc80a7.js",revision:null},{url:"assets/heading.1ec54623.js",revision:null},{url:"assets/index.02d9b197.js",revision:null},{url:"assets/index.030d2568.js",revision:null},{url:"assets/index.471f70fc.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.74ef9b8e.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.f5d524d9.js",revision:null},{url:"assets/Intersect.b551e87d.js",revision:null},{url:"assets/Light.d0cf8b56.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.78032938.js",revision:null},{url:"assets/location.fb8a5e3f.js",revision:null},{url:"assets/LocationFound.0bbf5148.js",revision:null},{url:"assets/locations.14c0f352.js",revision:null},{url:"assets/Logo.de4bd183.js",revision:null},{url:"assets/map.45597cbe.js",revision:null},{url:"assets/Map.55191148.js",revision:null},{url:"assets/map.57c4fdc1.css",revision:null},{url:"assets/map.75a0724f.js",revision:null},{url:"assets/map.973206d5.js",revision:null},{url:"assets/Markdown.ca570641.js",revision:null},{url:"assets/Marker.57fd0729.js",revision:null},{url:"assets/Menu.9fcc9af7.js",revision:null},{url:"assets/Menu.f6b2253f.js",revision:null},{url:"assets/Modal.92426848.js",revision:null},{url:"assets/modal.aa4e530a.js",revision:null},{url:"assets/model.7083f423.js",revision:null},{url:"assets/ModelTest.6e8578d2.js",revision:null},{url:"assets/ModelUsdz.795c7c60.js",revision:null},{url:"assets/navigation.880fcd44.js",revision:null},{url:"assets/NavigationBar.0671a42b.js",revision:null},{url:"assets/NavigationButton.31d8b31f.js",revision:null},{url:"assets/NightLights.337ac029.js",revision:null},{url:"assets/nuxt-link.b1f96efe.js",revision:null},{url:"assets/permission.6b6370dd.js",revision:null},{url:"assets/permissions.fd9883ce.js",revision:null},{url:"assets/PlayRequirements.f194e850.js",revision:null},{url:"assets/preview.31d28427.js",revision:null},{url:"assets/ProseA.b1443a0b.js",revision:null},{url:"assets/ProseBlockquote.9f5f32e4.js",revision:null},{url:"assets/ProseCode.19ac9cf1.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.d8e3be98.js",revision:null},{url:"assets/ProseEm.b22cad0e.js",revision:null},{url:"assets/ProseH1.916985b6.js",revision:null},{url:"assets/ProseH2.fa14c81b.js",revision:null},{url:"assets/ProseH3.eddd55ac.js",revision:null},{url:"assets/ProseH4.aa850cb3.js",revision:null},{url:"assets/ProseH5.b8fc02ea.js",revision:null},{url:"assets/ProseH6.bfeb6a7b.js",revision:null},{url:"assets/ProseHr.3ca5d9b2.js",revision:null},{url:"assets/ProseImg.bfb08ad3.js",revision:null},{url:"assets/ProseLi.e134b39c.js",revision:null},{url:"assets/ProseOl.dc0a7946.js",revision:null},{url:"assets/ProseP.bbdfb077.js",revision:null},{url:"assets/ProseStrong.d2bd3007.js",revision:null},{url:"assets/ProseTable.a7629527.js",revision:null},{url:"assets/ProseTbody.50d6896b.js",revision:null},{url:"assets/ProseTd.0b503743.js",revision:null},{url:"assets/ProseTh.6386ae8e.js",revision:null},{url:"assets/ProseThead.12a7e9b1.js",revision:null},{url:"assets/ProseTr.f2627af8.js",revision:null},{url:"assets/ProseUl.2aa449b1.js",revision:null},{url:"assets/pwa.79636883.js",revision:null},{url:"assets/PwaToast.81ecac7e.js",revision:null},{url:"assets/query.8ad38b0d.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/radar-sprite.aa0c3685.js",revision:null},{url:"assets/radar.2cfec0d3.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Radar.bae93d4f.js",revision:null},{url:"assets/Search.1d012ffc.js",revision:null},{url:"assets/SectionHeading.a2f46f10.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.3458c165.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.f2255023.js",revision:null},{url:"assets/timer.1612f152.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.869baabd.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.59183778.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"632a0e20e642a690c097ef0622cb55e8"},{url:"/",revision:"f273e0c1e2bfa1ff5893e2ce1e12e073"},{url:"location/cala-banyalbufar",revision:"7ead62f5bb1b39e0c345581f8b9e1661"},{url:"location/cala-banyalbufar/model",revision:"77b28136f48b6975d66f931d15af1ace"},{url:"location/crowtec",revision:"fa657325f849f535ef55bb47d33d4291"},{url:"location/crowtec/model",revision:"da6d95126671ea32c00ba7d2e9ef6f87"},{url:"location",revision:"e1ea8a9418af25a466de9f440da030c9"},{url:"location/mercat-inca",revision:"eec9e236743d9b2f7116d4546ef88956"},{url:"location/mercat-inca/model",revision:"a80bdfaab319a8a9a022ce73de4c7a64"},{url:"location/mercat-olivar",revision:"9799d29da09f3114b2931c8b4fb50afb"},{url:"location/mercat-olivar/model",revision:"13bdcbb75a8a85eec2a8d62b9551663f"},{url:"location/mercat-pere-garau",revision:"4fc03db1cc11ae922f5e5880619da7ac"},{url:"location/mercat-pere-garau/model",revision:"89b9ac1a7b4444d92c24b86bb9a27994"},{url:"location/mercat-sa-pobla",revision:"1c5108df39de4c13682be62c56e5c4bd"},{url:"location/mercat-sa-pobla/model",revision:"f4bd512089918d5e8cdfda6fe37b290c"},{url:"location/mercat-santa-catalina",revision:"68586f6e726e8788d3e24bad5c9d9406"},{url:"location/mercat-santa-catalina/model",revision:"6944c2f2ba0a84bda90491b71251b827"},{url:"location/mercat-santa-maria-cami",revision:"918bb4c67d4f10bc20358adda34926b8"},{url:"location/mercat-santa-maria-cami/model",revision:"3889347806458c639e1242e1f59b3c16"},{url:"location/mercat-sineu",revision:"f3543e25547aa11a4e8dcb69ac8faa82"},{url:"location/mercat-sineu/model",revision:"b5830d4e011272ffaff6ccc38cda7208"},{url:"location/mercat-soller",revision:"1be65d7bf894ec0ccb2b5aba0f1fbcc5"},{url:"location/mercat-soller/model",revision:"98f5d7da449ac35f96656f8a58989b62"},{url:"location/playa-es-trenc",revision:"f34720ade18c8b219eab3637162e30ba"},{url:"location/playa-es-trenc/model",revision:"69bfc938dbbf1ba840f20b18a4266d35"},{url:"location/playa-portals-nous",revision:"8c31418e2b36d53a1a442db3d7f2bd61"},{url:"location/playa-portals-nous/model",revision:"1ba7e24e2206b4fb7120fd0c1483a803"},{url:"location/playa-soller",revision:"5eaf0dba09aed5b7432209b21adeb259"},{url:"location/playa-soller/model",revision:"ea9f1b0abc4e3a0aac67ae0b23e0cd40"},{url:"location/test",revision:"29146e181ae59683144b54620217a3ee"},{url:"location/test/model",revision:"4576b529d5b50fb97b3149a78f5d7268"},{url:"location/urban-hostel-palma",revision:"e086f7602967f2be431a61c98dff679f"},{url:"location/urban-hostel-palma/model",revision:"b4a066ecf8343c42e9ada15d1c76d207"},{url:"map",revision:"add6aeb26553a8c7765eedcbfe4fba6e"},{url:"permissions",revision:"f03ec17f500bce295c9dd4df5e9c13ec"},{url:"showcase/divider",revision:"24cc6ab75bf8ebb04d2b5c13a23c19d5"},{url:"showcase/heading",revision:"7d31a4fedf384895e234393ad33abb96"},{url:"showcase",revision:"e620d7cd4fc4e698c0b77ebfb2934140"},{url:"showcase/modal",revision:"f3bc1bfcef1e3959af43c54784d5f962"},{url:"showcase/navigation",revision:"3a54e3e3894d1f71883758c9b111e3b4"},{url:"showcase/radar-sprite",revision:"7c9bf46da3499b35c4cb215abf25c5e0"},{url:"showcase/radar",revision:"ac6bb3377a1efa21b8e266673240e29d"},{url:"tutorial",revision:"5b80b87cfd3399bc6a5e390366f2da6e"},{url:"favicon.ico",revision:"60980cf3ec659b1f8cacb9c1d87464fd"},{url:"apple-touch-icon.png",revision:"27eddf990ed9d07563f56fe88a479070"},{url:"maskable-icon.png",revision:"1bc5bd5f6f6f7077080da2d28b50a597"},{url:"manifest.webmanifest",revision:"10855139df35cde4a0167aa8d0f51d70"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
