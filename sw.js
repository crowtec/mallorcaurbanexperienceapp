if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,a)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let n={};const o=s=>l(s,i),u={module:{uri:i},exports:n,require:o};e[i]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(a(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"9ad4e92cc8f42b5b5322b39d4a0c69ae"},{url:"404",revision:"9ad4e92cc8f42b5b5322b39d4a0c69ae"},{url:"assets/aframe-ar.0197ad43.js",revision:null},{url:"assets/AFrameMap.092b464e.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/AframeTest.c6a6937a.js",revision:null},{url:"assets/ARModel.008cb035.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.f37ef75a.js",revision:null},{url:"assets/Arrow.f0b0d6bc.js",revision:null},{url:"assets/ArrowLarge.ace72e9f.js",revision:null},{url:"assets/Backup.aa116b1e.js",revision:null},{url:"assets/BlurredCircle.62772641.js",revision:null},{url:"assets/Button.4e0314b8.js",revision:null},{url:"assets/Card.99f8d3f5.js",revision:null},{url:"assets/client-db.5f1af1d3.js",revision:null},{url:"assets/client-only.33607c68.js",revision:null},{url:"assets/Compass.8a99a4ca.js",revision:null},{url:"assets/CompassCardinalPoints.de69b182.js",revision:null},{url:"assets/ContentDoc.0cdeea70.js",revision:null},{url:"assets/ContentList.6b4ab393.js",revision:null},{url:"assets/ContentNavigation.8cce86bc.js",revision:null},{url:"assets/ContentQuery.ca7a3088.js",revision:null},{url:"assets/ContentRenderer.47733851.js",revision:null},{url:"assets/ContentRendererMarkdown.6f01b4f6.js",revision:null},{url:"assets/ContentSlot.24985d37.js",revision:null},{url:"assets/credits.df57a204.js",revision:null},{url:"assets/Cross.bb1d1665.js",revision:null},{url:"assets/DayLights.e6c989a3.js",revision:null},{url:"assets/default.4bb62331.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.061cfb77.js",revision:null},{url:"assets/Divider.6094d438.js",revision:null},{url:"assets/divider.e4bfa4bd.js",revision:null},{url:"assets/DocumentDrivenEmpty.73171c14.js",revision:null},{url:"assets/DocumentDrivenNotFound.a743a636.js",revision:null},{url:"assets/entry.3f6bafe0.js",revision:null},{url:"assets/entry.4aabd4c3.css",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-404.dde23477.js",revision:null},{url:"assets/error-500.0de12987.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.2762d29b.js",revision:null},{url:"assets/FountainTest.733de4c4.js",revision:null},{url:"assets/heading.25764cfd.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.5df62853.js",revision:null},{url:"assets/index.8ced94e0.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.c1747d06.js",revision:null},{url:"assets/index.d8f8382d.js",revision:null},{url:"assets/index.e53d9aea.js",revision:null},{url:"assets/Intersect.f748a88c.js",revision:null},{url:"assets/Light.1b9f1797.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.bfd5f419.js",revision:null},{url:"assets/location.ae9e45d6.js",revision:null},{url:"assets/LocationFound.a93cb086.js",revision:null},{url:"assets/locations.3ff6825d.js",revision:null},{url:"assets/Logo.03214900.js",revision:null},{url:"assets/Map.072a1390.js",revision:null},{url:"assets/map.1fd5ef0d.js",revision:null},{url:"assets/map.62e3ef44.css",revision:null},{url:"assets/map.85f5873c.js",revision:null},{url:"assets/map.a28b688e.js",revision:null},{url:"assets/Markdown.a97c514e.js",revision:null},{url:"assets/Marker.fd9afae5.js",revision:null},{url:"assets/Menu.0b17924d.js",revision:null},{url:"assets/Menu.83266e15.js",revision:null},{url:"assets/Modal.2c1a9392.js",revision:null},{url:"assets/modal.c09ba247.js",revision:null},{url:"assets/model.dfa27f58.js",revision:null},{url:"assets/ModelTest.57de8396.js",revision:null},{url:"assets/ModelUsdz.3ef1a95d.js",revision:null},{url:"assets/navigation.57a92358.js",revision:null},{url:"assets/NavigationBar.4fbab3bc.js",revision:null},{url:"assets/NavigationButton.701a6387.js",revision:null},{url:"assets/NightLights.9f90e822.js",revision:null},{url:"assets/nuxt-link.e04e3548.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.1ec3db7a.js",revision:null},{url:"assets/PlayRequirements.52ea2e99.js",revision:null},{url:"assets/preview.5a624107.js",revision:null},{url:"assets/ProseA.807edc0e.js",revision:null},{url:"assets/ProseBlockquote.dc8023c1.js",revision:null},{url:"assets/ProseCode.3988354b.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.7bc7aa0a.js",revision:null},{url:"assets/ProseEm.7b5acd0a.js",revision:null},{url:"assets/ProseH1.162de7af.js",revision:null},{url:"assets/ProseH2.fe7ed60f.js",revision:null},{url:"assets/ProseH3.ef49e9a8.js",revision:null},{url:"assets/ProseH4.384a7263.js",revision:null},{url:"assets/ProseH5.0f0bdfec.js",revision:null},{url:"assets/ProseH6.acdb5d58.js",revision:null},{url:"assets/ProseHr.b76d1b5c.js",revision:null},{url:"assets/ProseImg.8e0199bd.js",revision:null},{url:"assets/ProseLi.c9c87e80.js",revision:null},{url:"assets/ProseOl.a12d04ab.js",revision:null},{url:"assets/ProseP.1d66b21a.js",revision:null},{url:"assets/ProseStrong.f3930df3.js",revision:null},{url:"assets/ProseTable.5e737b86.js",revision:null},{url:"assets/ProseTbody.2365a88d.js",revision:null},{url:"assets/ProseTd.3613ace5.js",revision:null},{url:"assets/ProseTh.c3cef919.js",revision:null},{url:"assets/ProseThead.f7d0361e.js",revision:null},{url:"assets/ProseTr.fec052fb.js",revision:null},{url:"assets/ProseUl.7ae54d82.js",revision:null},{url:"assets/PwaToast.0358f782.js",revision:null},{url:"assets/query.80241a9d.js",revision:null},{url:"assets/radar-sprite.93185bfc.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/radar.1c992ce7.js",revision:null},{url:"assets/Radar.401a4cb4.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Search.1a278ad3.js",revision:null},{url:"assets/SectionHeading.4b5fdf08.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.d45e73db.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.2193a7bf.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.90741ca6.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.23e540cc.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"1267a193bb199e9b6058b38e2d2f5de4"},{url:"/",revision:"f9b0467f0329f58049627ebb8069652f"},{url:"location/cala-banyalbufar",revision:"73a6880739ed7b0e7f0029f211fd7cff"},{url:"location/cala-banyalbufar/model",revision:"280af1481a2a61a140b34629f391222f"},{url:"location/crowtec",revision:"bd5f707677959b2a93a746aaff3f4261"},{url:"location/crowtec/model",revision:"09bc3a1a12398bf2bb08b36dedc8a0fb"},{url:"location",revision:"4ee20803a6650565bcd2891b07ef4c9b"},{url:"location/mercat-inca",revision:"441e720c98b265b96c66e26dded1e521"},{url:"location/mercat-inca/model",revision:"e9e57981cc164d497c82f23cc379e3b4"},{url:"location/mercat-olivar",revision:"87587b75780443d4329f7d9cff87a6bb"},{url:"location/mercat-olivar/model",revision:"ec34be80451afdb9daca244f303315ca"},{url:"location/mercat-pere-garau",revision:"e1bface82aab716d6e130990213b0ac0"},{url:"location/mercat-pere-garau/model",revision:"52835abe87642338cf08e757a37fca52"},{url:"location/mercat-sa-pobla",revision:"f14f16469ef850221aa548866cc8273c"},{url:"location/mercat-sa-pobla/model",revision:"62f9e55651d370d0e420651c00a13126"},{url:"location/mercat-santa-catalina",revision:"d4f424cf64c39e62d29f41cd8f542bc4"},{url:"location/mercat-santa-catalina/model",revision:"7307d1898c405479cb8cac29f7b57e69"},{url:"location/mercat-santa-maria-cami",revision:"14a5620bbff88b3eca3c82b6a6c3c603"},{url:"location/mercat-santa-maria-cami/model",revision:"c570a8479c84ca40d57d18e120e66efc"},{url:"location/mercat-sineu",revision:"e80e60daa96544bda187fb5df1622fac"},{url:"location/mercat-sineu/model",revision:"5dee68ebb7e2ffec1f0bfa40f1cebf97"},{url:"location/mercat-soller",revision:"7cc72b38f489d4462cf87c56ef2fc4cb"},{url:"location/mercat-soller/model",revision:"c4eea09385824cfda8e420016caad9b1"},{url:"location/playa-es-trenc",revision:"3fa5e95a93e5e72f7fe498f479398f3b"},{url:"location/playa-es-trenc/model",revision:"5bc3f064a349382c85fc9304f6851fd4"},{url:"location/playa-portals-nous",revision:"6e9c2fb94f7b6cb10c23c1c423b0b06d"},{url:"location/playa-portals-nous/model",revision:"d9cf6e8c1ec5a9759168ed65cece58f5"},{url:"location/playa-soller",revision:"32a90ed1f6f03260343dbb0a3ccda91a"},{url:"location/playa-soller/model",revision:"e772a3a969948eae06d21362696633de"},{url:"location/test",revision:"00761f78ab0f08758e06e5a98f7fb58f"},{url:"location/test/model",revision:"04245af2839652232c44cc40a3526da5"},{url:"location/urban-hostel-palma",revision:"f65ec6c7b1f5b56d23a6276cac4a24c9"},{url:"location/urban-hostel-palma/model",revision:"613e322717e91956b69e4eb538cb0059"},{url:"map",revision:"9e0147b05ecd95fdd41469f8215b605a"},{url:"permissions",revision:"1dd76fcd5691f6d0414dbbb296abf267"},{url:"showcase/divider",revision:"451cae1acf9315c865d98e7e57b6e186"},{url:"showcase/heading",revision:"3b86a9ed93f4c214535951b208cc64a8"},{url:"showcase",revision:"c6581e42032918fa798b7aeac89631be"},{url:"showcase/modal",revision:"17c43f954631c1a4f39603ed651552e7"},{url:"showcase/navigation",revision:"0133b459d467ba4c7c0f186fdf27710d"},{url:"showcase/radar-sprite",revision:"25392ed2b8ad5afb85d990624d9d268c"},{url:"showcase/radar",revision:"d946e53c6fce7366908b41a27f61270a"},{url:"tutorial",revision:"f9dc054c3ae7c703aa44d394b57aa8a5"},{url:"favicon.ico",revision:"60980cf3ec659b1f8cacb9c1d87464fd"},{url:"apple-touch-icon.png",revision:"27eddf990ed9d07563f56fe88a479070"},{url:"maskable-icon.png",revision:"1bc5bd5f6f6f7077080da2d28b50a597"},{url:"manifest.webmanifest",revision:"832a102e24ac88412ce550358a7bb174"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
