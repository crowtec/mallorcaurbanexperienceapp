if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const o=s=>l(s,a),u={module:{uri:a},exports:n,require:o};e[a]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),n)))}}define(["./workbox-27b29e6f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"_index",revision:"c2e0ffbd0c2de51e79d34015ad8487ab"},{url:"200",revision:"21eb07d764ab2af31e2e8c0c07d9da7d"},{url:"404",revision:"21eb07d764ab2af31e2e8c0c07d9da7d"},{url:"assets/_index.4bf8d60d.js",revision:null},{url:"assets/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"assets/AFrameMap.4d9a68ff.js",revision:null},{url:"assets/AframeTest.32fd6cac.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.eced109e.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.58568069.js",revision:null},{url:"assets/Arrow.0393f26d.js",revision:null},{url:"assets/ArrowLarge.7d09eeed.js",revision:null},{url:"assets/Backup.489125a5.js",revision:null},{url:"assets/BlurredCircle.175463d7.js",revision:null},{url:"assets/Button.a83ff756.js",revision:null},{url:"assets/Card.f5741900.js",revision:null},{url:"assets/client-db.4e44a50b.js",revision:null},{url:"assets/client-only.bc8111ec.js",revision:null},{url:"assets/Compass.b10fd118.js",revision:null},{url:"assets/CompassCardinalPoints.6f8a9571.js",revision:null},{url:"assets/ContentDoc.aeaba37a.js",revision:null},{url:"assets/ContentList.db181074.js",revision:null},{url:"assets/ContentNavigation.04b2e8e8.js",revision:null},{url:"assets/ContentQuery.cae7e1cf.js",revision:null},{url:"assets/ContentRenderer.2fd4294e.js",revision:null},{url:"assets/ContentRendererMarkdown.66f730eb.js",revision:null},{url:"assets/ContentSlot.5775845f.js",revision:null},{url:"assets/credits.3198fee7.js",revision:null},{url:"assets/Cross.4a85173f.js",revision:null},{url:"assets/DayLights.f631a78f.js",revision:null},{url:"assets/default.ef531af5.js",revision:null},{url:"assets/Diamond.cb73036e.js",revision:null},{url:"assets/Divider.0fbbad26.js",revision:null},{url:"assets/divider.6057425b.js",revision:null},{url:"assets/DocumentDrivenEmpty.d1622cc7.js",revision:null},{url:"assets/DocumentDrivenNotFound.7bbdd641.js",revision:null},{url:"assets/entry.c04e2c05.css",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-404.9d916e98.js",revision:null},{url:"assets/error-500.6f9cdc0c.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.48e6d074.js",revision:null},{url:"assets/FountainTest.cc3b3cc9.js",revision:null},{url:"assets/heading.0a654ffc.js",revision:null},{url:"assets/index.407c7200.js",revision:null},{url:"assets/index.43e686d7.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.70399963.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.db19ec86.js",revision:null},{url:"assets/Intersect.3293d210.js",revision:null},{url:"assets/Light.37a975f2.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.15c0f75f.js",revision:null},{url:"assets/location.b46fae27.js",revision:null},{url:"assets/LocationFound.01f10520.js",revision:null},{url:"assets/Logo.40013505.js",revision:null},{url:"assets/map-test.0a5dec5c.js",revision:null},{url:"assets/Map.17ec4372.js",revision:null},{url:"assets/map.3222afd7.js",revision:null},{url:"assets/map.736feb1b.css",revision:null},{url:"assets/map.ba5ade9e.js",revision:null},{url:"assets/map.e12e65d6.js",revision:null},{url:"assets/Markdown.975a6a0c.js",revision:null},{url:"assets/Marker.d5e05a5a.js",revision:null},{url:"assets/Menu.33a67474.js",revision:null},{url:"assets/Menu.af659329.js",revision:null},{url:"assets/modal.43ec52aa.js",revision:null},{url:"assets/Modal.bd9ed513.js",revision:null},{url:"assets/model.8f69115e.js",revision:null},{url:"assets/ModelTest.4e4bb2a1.js",revision:null},{url:"assets/ModelUsdz.f344b6a6.js",revision:null},{url:"assets/navigation.cfbc616f.js",revision:null},{url:"assets/NavigationBar.07070524.js",revision:null},{url:"assets/NavigationButton.870bf6f5.js",revision:null},{url:"assets/NightLights.661c4fc7.js",revision:null},{url:"assets/nuxt-link.565f5872.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.f8c176ca.js",revision:null},{url:"assets/preview.6821d765.js",revision:null},{url:"assets/ProseA.18fddeb9.js",revision:null},{url:"assets/ProseBlockquote.deb6fad5.js",revision:null},{url:"assets/ProseCode.25c4cab5.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.00feeca6.js",revision:null},{url:"assets/ProseEm.fa32299f.js",revision:null},{url:"assets/ProseH1.f42f4b0b.js",revision:null},{url:"assets/ProseH2.7ecc0c87.js",revision:null},{url:"assets/ProseH3.36123b37.js",revision:null},{url:"assets/ProseH4.1d69d903.js",revision:null},{url:"assets/ProseH5.d2b99d8f.js",revision:null},{url:"assets/ProseH6.49aa1d5f.js",revision:null},{url:"assets/ProseHr.58c46bca.js",revision:null},{url:"assets/ProseImg.0457d5ff.js",revision:null},{url:"assets/ProseLi.9d2cc59c.js",revision:null},{url:"assets/ProseOl.73b34112.js",revision:null},{url:"assets/ProseP.ac3cf102.js",revision:null},{url:"assets/ProseStrong.1abd9110.js",revision:null},{url:"assets/ProseTable.1ce32187.js",revision:null},{url:"assets/ProseTbody.2671f9d6.js",revision:null},{url:"assets/ProseTd.1df272f3.js",revision:null},{url:"assets/ProseTh.3c5caaf6.js",revision:null},{url:"assets/ProseThead.5ff36b69.js",revision:null},{url:"assets/ProseTr.be41756f.js",revision:null},{url:"assets/ProseUl.2a38d449.js",revision:null},{url:"assets/query.805d0bf9.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/radar-sprite.9440db38.js",revision:null},{url:"assets/radar.294b6cd2.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Radar.9a89b747.js",revision:null},{url:"assets/Search.1a3edad2.js",revision:null},{url:"assets/SectionHeading.1486d8ad.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.fd3e0fac.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.9ac6656b.js",revision:null},{url:"assets/tutorial.266a3757.css",revision:null},{url:"assets/tutorial.70b4b080.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.910d063c.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"f44e93183be80cba676c229419920a72"},{url:"/",revision:"5ed5be480b16d745362466c0c13fcbff"},{url:"location/cala-banyalbufar",revision:"091f1e235c2c7ccec4c0de6191bbb564"},{url:"location/cala-banyalbufar/model",revision:"711c83905bc7585d7cc0f08bb2df1532"},{url:"location/crowtec",revision:"5fb1ef4b78e7c946e4665b7a7bc5ecfe"},{url:"location/crowtec/model",revision:"52ae2f1fe0aba9cdf7d51716bae55bad"},{url:"location",revision:"18f5f2a85c6fadea9b5d8ce077187c93"},{url:"location/mercat-inca",revision:"426a6bdcc97a7a830803ff0956eb4c48"},{url:"location/mercat-inca/model",revision:"31a38b29eb47228bace8cbebb35ac475"},{url:"location/mercat-olivar",revision:"eca206d92ddf1d7b04d6dcb4cc6823ad"},{url:"location/mercat-olivar/model",revision:"aa405215688f9ffb5a2a124c6e8b568c"},{url:"location/mercat-pere-garau",revision:"c2e96cf42e3672ef67892e6a7a086cce"},{url:"location/mercat-pere-garau/model",revision:"0daa8d67eee03272527db47bf24bf182"},{url:"location/mercat-sa-pobla",revision:"f031319bc3f58cb5eda94d1ce0ee68a3"},{url:"location/mercat-sa-pobla/model",revision:"c874bddd1aee987125e5d881e2eda3fa"},{url:"location/mercat-santa-catalina",revision:"41886f5c2b62821260882466a1a4ab2d"},{url:"location/mercat-santa-catalina/model",revision:"7f1d2531cc35ab7f6a09f5bc453838d2"},{url:"location/mercat-santa-maria-cami",revision:"19c52276b81e9328049899f65acb46fc"},{url:"location/mercat-santa-maria-cami/model",revision:"9b9ffbfa568f47c886de1dbbe9a2cd47"},{url:"location/mercat-sineu",revision:"7cd1676468c18ccde2fcb6cd531d1480"},{url:"location/mercat-sineu/model",revision:"2cfc9d8714b3f0b59d70034a915ec12b"},{url:"location/mercat-soller",revision:"47eeff86dec5ce0b6607fa41b268dbe9"},{url:"location/mercat-soller/model",revision:"ebaf9c830da7c528a9b952e5ea1e7c30"},{url:"location/playa-es-trenc",revision:"5275f65dd191262ae2eb5cf9989fbae2"},{url:"location/playa-es-trenc/model",revision:"8cf20acaca67b4afbb6c5c43a02a3ea8"},{url:"location/playa-portals-nous",revision:"044cd294676c2ca8c920cdfae7af0636"},{url:"location/playa-portals-nous/model",revision:"6f98c198694ccd58e6a16375511b637d"},{url:"location/playa-soller",revision:"2b19fd7f36dd4f8cd8d6d8fc2808dea2"},{url:"location/playa-soller/model",revision:"9cd78bb89fb7b2c9de31d9ec45c661a3"},{url:"location/test",revision:"d3e3d91b84052469876ee56e5fae124b"},{url:"location/test/model",revision:"20a26f2241050b217214f1c26ee13124"},{url:"location/urban-hostel-palma",revision:"c8c2d2d9384a0a89ba87f62e8cb55407"},{url:"location/urban-hostel-palma/model",revision:"f1f864b24abc7e2e937fd89dc129b101"},{url:"map-test",revision:"782a93568fb276cc6cb07fc7c9df5683"},{url:"map",revision:"bc3d0b5802218bae5b2f12bcccbd9d43"},{url:"permissions",revision:"116d4840d5c72a4c11ab13feb65f6229"},{url:"showcase/divider",revision:"3b1af16428b21487ae5ce509351b97dd"},{url:"showcase/heading",revision:"003fc5bd5c2d802894fe8c648b345ae7"},{url:"showcase",revision:"d117486794b87512eff529e2155f967b"},{url:"showcase/modal",revision:"aa27a0ecf2ab080fcd27c5ba0682c5df"},{url:"showcase/navigation",revision:"5313bda8229254c698d3ec984b40ee6f"},{url:"showcase/radar-sprite",revision:"fbe77b534c3875a19288c2fc72e59114"},{url:"showcase/radar",revision:"f9adf41d06d82422d44487d04c28aa5a"},{url:"tutorial",revision:"19cf70cefba5cf89cf04f01d6f4c8d64"},{url:"manifest.webmanifest",revision:"f2d82be8d547b6cb18a0719b317cb135"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
