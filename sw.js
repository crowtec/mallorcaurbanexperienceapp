if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const o=s=>l(s,a),u={module:{uri:a},exports:n,require:o};e[a]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"48620dbc1a4372712253b7c274f14f68"},{url:"404",revision:"48620dbc1a4372712253b7c274f14f68"},{url:"assets/aframe-ar.a0d137ac.js",revision:null},{url:"assets/AFrameMap.1dde7852.js",revision:null},{url:"assets/AframeTest.44c096d8.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.2ec1a464.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.ac8228ec.js",revision:null},{url:"assets/Arrow.d5285c57.js",revision:null},{url:"assets/ArrowLarge.4a5b9e67.js",revision:null},{url:"assets/Backup.c57fadb1.js",revision:null},{url:"assets/BlurredCircle.6e513f6d.js",revision:null},{url:"assets/Button.af47ac8f.js",revision:null},{url:"assets/Card.48900379.js",revision:null},{url:"assets/client-db.d42a992d.js",revision:null},{url:"assets/client-only.faa98461.js",revision:null},{url:"assets/Compass.b011a3e4.js",revision:null},{url:"assets/CompassCardinalPoints.f6e29b32.js",revision:null},{url:"assets/ContentDoc.d45c4bfc.js",revision:null},{url:"assets/ContentList.07482981.js",revision:null},{url:"assets/ContentNavigation.dfe62a0e.js",revision:null},{url:"assets/ContentQuery.9c258968.js",revision:null},{url:"assets/ContentRenderer.be89ee40.js",revision:null},{url:"assets/ContentRendererMarkdown.35519851.js",revision:null},{url:"assets/ContentSlot.90bf9618.js",revision:null},{url:"assets/credits.899c2f5f.js",revision:null},{url:"assets/Cross.45d3ec27.js",revision:null},{url:"assets/DayLights.3f57e93a.js",revision:null},{url:"assets/default.e3925d89.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.fb7623c8.js",revision:null},{url:"assets/Divider.9ae9b833.js",revision:null},{url:"assets/divider.e4bfad3b.js",revision:null},{url:"assets/DocumentDrivenEmpty.42621125.js",revision:null},{url:"assets/DocumentDrivenNotFound.c3771504.js",revision:null},{url:"assets/entry.13717923.css",revision:null},{url:"assets/entry.fd26860f.js",revision:null},{url:"assets/error-404.3d58e337.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-500.b5dacfeb.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.04c7b4d8.js",revision:null},{url:"assets/FountainTest.3c2a980e.js",revision:null},{url:"assets/heading.efc7817d.js",revision:null},{url:"assets/index.458cf860.js",revision:null},{url:"assets/index.4c3778a7.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.67b6cdbe.js",revision:null},{url:"assets/index.81762e91.js",revision:null},{url:"assets/index.9443c43c.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/Intersect.bb2734ec.js",revision:null},{url:"assets/Light.e13b27e9.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.b5a284bc.js",revision:null},{url:"assets/location.3d845318.js",revision:null},{url:"assets/LocationFound.85753216.js",revision:null},{url:"assets/locations.218aeb06.js",revision:null},{url:"assets/Logo.70a147ac.js",revision:null},{url:"assets/map.57c4fdc1.css",revision:null},{url:"assets/map.69b4ee2c.js",revision:null},{url:"assets/Map.7e929793.js",revision:null},{url:"assets/map.800f4d75.js",revision:null},{url:"assets/map.c2692d17.js",revision:null},{url:"assets/Markdown.0330b464.js",revision:null},{url:"assets/Marker.b0d60a4d.js",revision:null},{url:"assets/Menu.29eb0119.js",revision:null},{url:"assets/Menu.2cf4e1b4.js",revision:null},{url:"assets/Modal.41293b52.js",revision:null},{url:"assets/modal.542b97cd.js",revision:null},{url:"assets/model.ec770abc.js",revision:null},{url:"assets/ModelTest.b05b0177.js",revision:null},{url:"assets/ModelUsdz.e7eb017c.js",revision:null},{url:"assets/navigation.0826932d.js",revision:null},{url:"assets/NavigationBar.e6ec5c5b.js",revision:null},{url:"assets/NavigationButton.741489a9.js",revision:null},{url:"assets/NightLights.318f3e67.js",revision:null},{url:"assets/nuxt-link.dc830ade.js",revision:null},{url:"assets/permission.6b6370dd.js",revision:null},{url:"assets/permissions.f07ee759.js",revision:null},{url:"assets/PlayRequirements.b2857bf2.js",revision:null},{url:"assets/preview.f5013c22.js",revision:null},{url:"assets/ProseA.eecd8414.js",revision:null},{url:"assets/ProseBlockquote.ba2ee5c6.js",revision:null},{url:"assets/ProseCode.826ffb9d.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.2ced2f1f.js",revision:null},{url:"assets/ProseEm.5e85d6bc.js",revision:null},{url:"assets/ProseH1.9a9a898c.js",revision:null},{url:"assets/ProseH2.020cc418.js",revision:null},{url:"assets/ProseH3.a1bbbcd3.js",revision:null},{url:"assets/ProseH4.8c6d0062.js",revision:null},{url:"assets/ProseH5.aa1773fd.js",revision:null},{url:"assets/ProseH6.bb18a978.js",revision:null},{url:"assets/ProseHr.a1660c2e.js",revision:null},{url:"assets/ProseImg.276999f1.js",revision:null},{url:"assets/ProseLi.766924e6.js",revision:null},{url:"assets/ProseOl.f87e3044.js",revision:null},{url:"assets/ProseP.f19bd20d.js",revision:null},{url:"assets/ProseStrong.326b5e0d.js",revision:null},{url:"assets/ProseTable.756bab09.js",revision:null},{url:"assets/ProseTbody.383ad6ea.js",revision:null},{url:"assets/ProseTd.8b86f094.js",revision:null},{url:"assets/ProseTh.b4c20380.js",revision:null},{url:"assets/ProseThead.98baad9c.js",revision:null},{url:"assets/ProseTr.3647abc0.js",revision:null},{url:"assets/ProseUl.58488eb3.js",revision:null},{url:"assets/PwaToast.c5ee43d2.js",revision:null},{url:"assets/query.c426a991.js",revision:null},{url:"assets/radar-sprite.78fe6be5.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/Radar.4292cf3b.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/radar.e907365c.js",revision:null},{url:"assets/Search.3ebb45c0.js",revision:null},{url:"assets/SectionHeading.a1dcb754.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.b1d7513c.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.9712fbb8.js",revision:null},{url:"assets/timer.1612f152.js",revision:null},{url:"assets/tutorial.c927eb82.css",revision:null},{url:"assets/tutorial.f529e072.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.e0e8c154.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"f27bd6cd07bff304ad985adea1fbc89a"},{url:"/",revision:"51ea9144ce2a566712e9c9e82e48de59"},{url:"location/cala-banyalbufar",revision:"877e799fd0d6611c88bf7356b0d5a8bf"},{url:"location/cala-banyalbufar/model",revision:"78e6d1178d1d9f37e28936d56e8cb5ea"},{url:"location/crowtec",revision:"6dd52fe89fed002abe935fddbe46dab0"},{url:"location/crowtec/model",revision:"0568c20686f188b40373cc6a4ea33406"},{url:"location",revision:"bf26786a25db4f47b8d2aaa73362f6f0"},{url:"location/mercat-inca",revision:"694fd88757f43cda8cd6a824035f597e"},{url:"location/mercat-inca/model",revision:"bc1e30f664806f1b33e721c7bbf2d34e"},{url:"location/mercat-olivar",revision:"39a79a9763613780c77345b5d042a4ee"},{url:"location/mercat-olivar/model",revision:"a777a3e6b6f81a89bab0c454d24d2bc5"},{url:"location/mercat-pere-garau",revision:"854ce0807a5cd8b62f5a7e319cae4cdc"},{url:"location/mercat-pere-garau/model",revision:"aeca0cbebd6474f60c13a422383fdc3d"},{url:"location/mercat-sa-pobla",revision:"c060a7670a3dcde25c2f3cee135d7a52"},{url:"location/mercat-sa-pobla/model",revision:"da5c88cce00df772eacc8f6cb25f5a41"},{url:"location/mercat-santa-catalina",revision:"1fe3104523f152e17ec838b905bc6d89"},{url:"location/mercat-santa-catalina/model",revision:"49fd1911a9d6d3eebbbb987edebddc3e"},{url:"location/mercat-santa-maria-cami",revision:"655ecdead689eb60c4dafdd11f5420c0"},{url:"location/mercat-santa-maria-cami/model",revision:"389c4d93c66f1fbdb14ddcd1b36df276"},{url:"location/mercat-sineu",revision:"0342cd46f6522855aeb3d4a211542531"},{url:"location/mercat-sineu/model",revision:"9dfc769174f986f2720f581e7bda0d00"},{url:"location/mercat-soller",revision:"e30a29210d6421f029f180538e6f6626"},{url:"location/mercat-soller/model",revision:"5f471310340a5029dc1eca18acbb5a70"},{url:"location/playa-es-trenc",revision:"2f73f47b6a3eb62b744207e9cfbd94b1"},{url:"location/playa-es-trenc/model",revision:"617675f29ab08da509ef289eba40b72b"},{url:"location/playa-portals-nous",revision:"e1fce427ec4b3296142bfd3e4fe97276"},{url:"location/playa-portals-nous/model",revision:"a136d3098eaa8610672dfca1287cb428"},{url:"location/playa-soller",revision:"c22a1555f50f0be2dd3b271ace327949"},{url:"location/playa-soller/model",revision:"c69ca0b385761a938fde87159356f26f"},{url:"location/test",revision:"ee5dce796df71edb2c1352c65b84d467"},{url:"location/test/model",revision:"592e6affb04786954c1b02bbe222c1be"},{url:"location/urban-hostel-palma",revision:"ef8bd91340f50fbdd17013051ef2e270"},{url:"location/urban-hostel-palma/model",revision:"7b810e0d64b4b9fc6f81e873e2d07d0f"},{url:"map",revision:"ede2db1ab9372017a29ae929f550cdc4"},{url:"permissions",revision:"78edc650b78ec11f6362045c6d7415c2"},{url:"showcase/divider",revision:"147a7831586263799cf63439f16d0212"},{url:"showcase/heading",revision:"cdf10af3dfab0a20cdb77a2795c8dc5f"},{url:"showcase",revision:"53b9cb1aa561e2da5fa91eb65660d87c"},{url:"showcase/modal",revision:"d86ba7ccee6945217af255d000192f6c"},{url:"showcase/navigation",revision:"7c078d8489588261b0c49db384df1e9c"},{url:"showcase/radar-sprite",revision:"4f0420f3783e0022e23c0a434bfccc9a"},{url:"showcase/radar",revision:"73b7e8af5d8ea820dbcb17ce8120793a"},{url:"tutorial",revision:"1a16b53e5b8f8a006541b3397e87e9ba"},{url:"favicon.ico",revision:"60980cf3ec659b1f8cacb9c1d87464fd"},{url:"apple-touch-icon.png",revision:"27eddf990ed9d07563f56fe88a479070"},{url:"maskable-icon.png",revision:"1bc5bd5f6f6f7077080da2d28b50a597"},{url:"manifest.webmanifest",revision:"832a102e24ac88412ce550358a7bb174"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
