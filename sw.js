if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const o=s=>l(s,a),u={module:{uri:a},exports:n,require:o};e[a]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"a32b33e4b4d56583d99336bba9e1d4c1"},{url:"404",revision:"a32b33e4b4d56583d99336bba9e1d4c1"},{url:"assets/aframe-ar.3736a42f.js",revision:null},{url:"assets/AFrameMap.4261a8a8.js",revision:null},{url:"assets/AframeTest.af751672.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.5f4eb1b7.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.4ec700a2.js",revision:null},{url:"assets/Arrow.efb960ac.js",revision:null},{url:"assets/ArrowLarge.8c96f697.js",revision:null},{url:"assets/Backup.7ff04089.js",revision:null},{url:"assets/BlurredCircle.4c97d155.js",revision:null},{url:"assets/Button.6c15d385.js",revision:null},{url:"assets/Card.34a33680.js",revision:null},{url:"assets/client-db.031e9711.js",revision:null},{url:"assets/client-only.6e997621.js",revision:null},{url:"assets/Compass.085298f7.js",revision:null},{url:"assets/CompassCardinalPoints.454cc65d.js",revision:null},{url:"assets/ContentDoc.79594b85.js",revision:null},{url:"assets/ContentList.a2014ebe.js",revision:null},{url:"assets/ContentNavigation.35aef7a5.js",revision:null},{url:"assets/ContentQuery.384c3847.js",revision:null},{url:"assets/ContentRenderer.1d54b1e0.js",revision:null},{url:"assets/ContentRendererMarkdown.1ade3d9a.js",revision:null},{url:"assets/ContentSlot.40b776ff.js",revision:null},{url:"assets/credits.b9c7efcc.js",revision:null},{url:"assets/Cross.10fd45e5.js",revision:null},{url:"assets/DayLights.dd177fdf.js",revision:null},{url:"assets/default.e60a8da3.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.85ecb8be.js",revision:null},{url:"assets/Divider.3b229d7f.js",revision:null},{url:"assets/divider.ee33b5d1.js",revision:null},{url:"assets/DocumentDrivenEmpty.3a2a9fb7.js",revision:null},{url:"assets/DocumentDrivenNotFound.d5c11d27.js",revision:null},{url:"assets/entry.13717923.css",revision:null},{url:"assets/entry.db6515d5.js",revision:null},{url:"assets/error-404.158655b2.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-500.25dfe9d3.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.8d606756.js",revision:null},{url:"assets/FountainTest.db5bd502.js",revision:null},{url:"assets/heading.90b33473.js",revision:null},{url:"assets/index.21e1c03a.js",revision:null},{url:"assets/index.30f999ec.js",revision:null},{url:"assets/index.38436b7f.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.ea472540.js",revision:null},{url:"assets/index.f506a954.js",revision:null},{url:"assets/Intersect.eb7e71da.js",revision:null},{url:"assets/Light.ba1496b0.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.862739fe.js",revision:null},{url:"assets/location.75f41f5b.js",revision:null},{url:"assets/LocationFound.67e866c1.js",revision:null},{url:"assets/locations.8e56064c.js",revision:null},{url:"assets/Logo.91bd2ed8.js",revision:null},{url:"assets/map.3703dcfa.js",revision:null},{url:"assets/map.57c4fdc1.css",revision:null},{url:"assets/Map.847e219f.js",revision:null},{url:"assets/map.9da1beae.js",revision:null},{url:"assets/map.f2d854af.js",revision:null},{url:"assets/Markdown.19a26b7e.js",revision:null},{url:"assets/Marker.273ec364.js",revision:null},{url:"assets/Menu.5b9a7c86.js",revision:null},{url:"assets/Menu.5df75906.js",revision:null},{url:"assets/modal.2390a780.js",revision:null},{url:"assets/Modal.e590b71d.js",revision:null},{url:"assets/model.3c8cb67c.js",revision:null},{url:"assets/ModelTest.42e67d10.js",revision:null},{url:"assets/ModelUsdz.70364ea5.js",revision:null},{url:"assets/navigation.971ec730.js",revision:null},{url:"assets/NavigationBar.ff2e81a8.js",revision:null},{url:"assets/NavigationButton.cb4c187e.js",revision:null},{url:"assets/NightLights.41fb53c7.js",revision:null},{url:"assets/nuxt-link.6b691358.js",revision:null},{url:"assets/permission.6b6370dd.js",revision:null},{url:"assets/permissions.af29b2e8.js",revision:null},{url:"assets/PlayRequirements.9d4199b6.js",revision:null},{url:"assets/preview.bd6c4683.js",revision:null},{url:"assets/ProseA.cd896e11.js",revision:null},{url:"assets/ProseBlockquote.6509ec9f.js",revision:null},{url:"assets/ProseCode.53468946.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.ab33180b.js",revision:null},{url:"assets/ProseEm.4cc3e01b.js",revision:null},{url:"assets/ProseH1.3ad06f5e.js",revision:null},{url:"assets/ProseH2.33418529.js",revision:null},{url:"assets/ProseH3.3a0d3bd2.js",revision:null},{url:"assets/ProseH4.52cbdfe5.js",revision:null},{url:"assets/ProseH5.f8f3bed2.js",revision:null},{url:"assets/ProseH6.6fcfc2df.js",revision:null},{url:"assets/ProseHr.219fae35.js",revision:null},{url:"assets/ProseImg.c47c0b1c.js",revision:null},{url:"assets/ProseLi.0ddde6bf.js",revision:null},{url:"assets/ProseOl.cd9d169a.js",revision:null},{url:"assets/ProseP.bfc14a53.js",revision:null},{url:"assets/ProseStrong.5de533d6.js",revision:null},{url:"assets/ProseTable.f6825f8e.js",revision:null},{url:"assets/ProseTbody.de956d37.js",revision:null},{url:"assets/ProseTd.85265bed.js",revision:null},{url:"assets/ProseTh.16837846.js",revision:null},{url:"assets/ProseThead.7e3a817e.js",revision:null},{url:"assets/ProseTr.24b15e3a.js",revision:null},{url:"assets/ProseUl.c504d901.js",revision:null},{url:"assets/PwaToast.cf864536.js",revision:null},{url:"assets/query.72407e6e.js",revision:null},{url:"assets/radar-sprite.25663ec2.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/Radar.1c3ce2a5.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/radar.fb812daa.js",revision:null},{url:"assets/Search.65368a92.js",revision:null},{url:"assets/SectionHeading.da7bd17d.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.7c97c5cc.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.113ed27f.js",revision:null},{url:"assets/timer.1612f152.js",revision:null},{url:"assets/tutorial.2c47ceb7.js",revision:null},{url:"assets/tutorial.c927eb82.css",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.f9162dc9.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"6d6a47ef5de2445f512bc010b2440247"},{url:"/",revision:"e3dabf818ef135653c008bf7d934ba19"},{url:"location/cala-banyalbufar",revision:"60bccd6f8120dcc78add118c6a95787f"},{url:"location/cala-banyalbufar/model",revision:"c4ed2ea7d5cca119300490e372988939"},{url:"location/crowtec",revision:"315ae4ae56919bf087989ef4b041a11b"},{url:"location/crowtec/model",revision:"258926105c3e7674cd50a05335a98cea"},{url:"location",revision:"f84d55c1646e0ebdb83bc9a61a4f1e52"},{url:"location/mercat-inca",revision:"56752e7f80ca79544b18227ea2fc7bff"},{url:"location/mercat-inca/model",revision:"6bb9d82ceafd178b31dea2bb2a3a1b0e"},{url:"location/mercat-olivar",revision:"2064430aa28e6ea3f880cd73dc19d589"},{url:"location/mercat-olivar/model",revision:"479e75712829c4c64df86b8dc38df161"},{url:"location/mercat-pere-garau",revision:"fda0505e8c1e8b6a205738154f275d57"},{url:"location/mercat-pere-garau/model",revision:"8dc72769a723a4a60ee0ca7e01106b9e"},{url:"location/mercat-sa-pobla",revision:"49b0a90a32233fcf8904c287a8ba8f99"},{url:"location/mercat-sa-pobla/model",revision:"02787abce6782f96045fbfb71fa031da"},{url:"location/mercat-santa-catalina",revision:"c2dc6735cf7f17fda286e029e976c77a"},{url:"location/mercat-santa-catalina/model",revision:"9287d39d7e9ab6f6a4201127826fd3ee"},{url:"location/mercat-santa-maria-cami",revision:"1d9462255195ef70af338f0cef7c3303"},{url:"location/mercat-santa-maria-cami/model",revision:"9b259b8b8cd4700fe9606c638fb4520f"},{url:"location/mercat-sineu",revision:"31cae9f9608b8a640b991388199ced6b"},{url:"location/mercat-sineu/model",revision:"1f095510066893abd4bb04403587fc12"},{url:"location/mercat-soller",revision:"7b945b1a3b284b7ca4d32774c67f9420"},{url:"location/mercat-soller/model",revision:"f5ad468dbb1e107cea6473f22b106da2"},{url:"location/playa-es-trenc",revision:"fb2cc8634fc284d10840046788d1fa6e"},{url:"location/playa-es-trenc/model",revision:"1a0ebdca3c42be5e2d3a37e665f6bbae"},{url:"location/playa-portals-nous",revision:"e7230205dff0aa55572da2ca80da00f8"},{url:"location/playa-portals-nous/model",revision:"e82d5c33ba6229f990e98b49cfff3fd8"},{url:"location/playa-soller",revision:"99021cc2dcc05338494f84f843f10a58"},{url:"location/playa-soller/model",revision:"e68c9e25c0257de5e1cfe31464a530d3"},{url:"location/test",revision:"d1ba9a1befe3596f431b794f9dbe4283"},{url:"location/test/model",revision:"141c4ce151e91ee09ae483fb6d087399"},{url:"location/urban-hostel-palma",revision:"04780e20fb825bf09f8adb482750317f"},{url:"location/urban-hostel-palma/model",revision:"ef5a2102b68573bee545035ddec06a99"},{url:"map",revision:"2ad796ae6f6111aadf544a90c5716be3"},{url:"permissions",revision:"7d2eb8e3db2f0a8367009148954b4e6c"},{url:"showcase/divider",revision:"f0b96db4331fc0da55aee51eefc05cc3"},{url:"showcase/heading",revision:"86c2d4d7aeef7bd31a4505b815b68dc8"},{url:"showcase",revision:"1ec62d14b3928392fb1ffaddc0cbdff2"},{url:"showcase/modal",revision:"5896fb110d1ea34490caf9593df8488b"},{url:"showcase/navigation",revision:"407064154ec98389edd9a4ebcd825161"},{url:"showcase/radar-sprite",revision:"0143f8fc5def00540c639b71d022da59"},{url:"showcase/radar",revision:"bf75ec59a453d52eb6adb92b05ae36dd"},{url:"tutorial",revision:"f936a86f287d4c3bedb5d5fecd21ff82"},{url:"favicon.ico",revision:"60980cf3ec659b1f8cacb9c1d87464fd"},{url:"apple-touch-icon.png",revision:"27eddf990ed9d07563f56fe88a479070"},{url:"maskable-icon.png",revision:"1bc5bd5f6f6f7077080da2d28b50a597"},{url:"manifest.webmanifest",revision:"832a102e24ac88412ce550358a7bb174"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
