if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,a)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let n={};const o=s=>l(s,i),u={module:{uri:i},exports:n,require:o};e[i]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(a(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"8062a4778a09f7318c3927bcc2453a58"},{url:"404",revision:"8062a4778a09f7318c3927bcc2453a58"},{url:"assets/aframe-ar.0197ad43.js",revision:null},{url:"assets/AFrameMap.092b464e.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/AframeTest.c6a6937a.js",revision:null},{url:"assets/ARModel.008cb035.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.f37ef75a.js",revision:null},{url:"assets/Arrow.f0b0d6bc.js",revision:null},{url:"assets/ArrowLarge.ace72e9f.js",revision:null},{url:"assets/Backup.aa116b1e.js",revision:null},{url:"assets/BlurredCircle.62772641.js",revision:null},{url:"assets/Button.4e0314b8.js",revision:null},{url:"assets/Card.99f8d3f5.js",revision:null},{url:"assets/client-db.5f1af1d3.js",revision:null},{url:"assets/client-only.33607c68.js",revision:null},{url:"assets/Compass.8a99a4ca.js",revision:null},{url:"assets/CompassCardinalPoints.de69b182.js",revision:null},{url:"assets/ContentDoc.0cdeea70.js",revision:null},{url:"assets/ContentList.6b4ab393.js",revision:null},{url:"assets/ContentNavigation.8cce86bc.js",revision:null},{url:"assets/ContentQuery.ca7a3088.js",revision:null},{url:"assets/ContentRenderer.47733851.js",revision:null},{url:"assets/ContentRendererMarkdown.6f01b4f6.js",revision:null},{url:"assets/ContentSlot.24985d37.js",revision:null},{url:"assets/credits.df57a204.js",revision:null},{url:"assets/Cross.bb1d1665.js",revision:null},{url:"assets/DayLights.e6c989a3.js",revision:null},{url:"assets/default.4bb62331.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.061cfb77.js",revision:null},{url:"assets/Divider.6094d438.js",revision:null},{url:"assets/divider.e4bfa4bd.js",revision:null},{url:"assets/DocumentDrivenEmpty.73171c14.js",revision:null},{url:"assets/DocumentDrivenNotFound.a743a636.js",revision:null},{url:"assets/entry.3f6bafe0.js",revision:null},{url:"assets/entry.4aabd4c3.css",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-404.dde23477.js",revision:null},{url:"assets/error-500.0de12987.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.2762d29b.js",revision:null},{url:"assets/FountainTest.733de4c4.js",revision:null},{url:"assets/heading.25764cfd.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.5df62853.js",revision:null},{url:"assets/index.8ced94e0.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.c1747d06.js",revision:null},{url:"assets/index.d8f8382d.js",revision:null},{url:"assets/index.e53d9aea.js",revision:null},{url:"assets/Intersect.f748a88c.js",revision:null},{url:"assets/Light.1b9f1797.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.bfd5f419.js",revision:null},{url:"assets/location.ae9e45d6.js",revision:null},{url:"assets/LocationFound.a93cb086.js",revision:null},{url:"assets/locations.3ff6825d.js",revision:null},{url:"assets/Logo.03214900.js",revision:null},{url:"assets/Map.072a1390.js",revision:null},{url:"assets/map.1fd5ef0d.js",revision:null},{url:"assets/map.62e3ef44.css",revision:null},{url:"assets/map.85f5873c.js",revision:null},{url:"assets/map.a28b688e.js",revision:null},{url:"assets/Markdown.a97c514e.js",revision:null},{url:"assets/Marker.fd9afae5.js",revision:null},{url:"assets/Menu.0b17924d.js",revision:null},{url:"assets/Menu.83266e15.js",revision:null},{url:"assets/Modal.2c1a9392.js",revision:null},{url:"assets/modal.c09ba247.js",revision:null},{url:"assets/model.dfa27f58.js",revision:null},{url:"assets/ModelTest.57de8396.js",revision:null},{url:"assets/ModelUsdz.3ef1a95d.js",revision:null},{url:"assets/navigation.57a92358.js",revision:null},{url:"assets/NavigationBar.4fbab3bc.js",revision:null},{url:"assets/NavigationButton.701a6387.js",revision:null},{url:"assets/NightLights.9f90e822.js",revision:null},{url:"assets/nuxt-link.e04e3548.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.1ec3db7a.js",revision:null},{url:"assets/PlayRequirements.52ea2e99.js",revision:null},{url:"assets/preview.5a624107.js",revision:null},{url:"assets/ProseA.807edc0e.js",revision:null},{url:"assets/ProseBlockquote.dc8023c1.js",revision:null},{url:"assets/ProseCode.3988354b.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.7bc7aa0a.js",revision:null},{url:"assets/ProseEm.7b5acd0a.js",revision:null},{url:"assets/ProseH1.162de7af.js",revision:null},{url:"assets/ProseH2.fe7ed60f.js",revision:null},{url:"assets/ProseH3.ef49e9a8.js",revision:null},{url:"assets/ProseH4.384a7263.js",revision:null},{url:"assets/ProseH5.0f0bdfec.js",revision:null},{url:"assets/ProseH6.acdb5d58.js",revision:null},{url:"assets/ProseHr.b76d1b5c.js",revision:null},{url:"assets/ProseImg.8e0199bd.js",revision:null},{url:"assets/ProseLi.c9c87e80.js",revision:null},{url:"assets/ProseOl.a12d04ab.js",revision:null},{url:"assets/ProseP.1d66b21a.js",revision:null},{url:"assets/ProseStrong.f3930df3.js",revision:null},{url:"assets/ProseTable.5e737b86.js",revision:null},{url:"assets/ProseTbody.2365a88d.js",revision:null},{url:"assets/ProseTd.3613ace5.js",revision:null},{url:"assets/ProseTh.c3cef919.js",revision:null},{url:"assets/ProseThead.f7d0361e.js",revision:null},{url:"assets/ProseTr.fec052fb.js",revision:null},{url:"assets/ProseUl.7ae54d82.js",revision:null},{url:"assets/PwaToast.0358f782.js",revision:null},{url:"assets/query.80241a9d.js",revision:null},{url:"assets/radar-sprite.93185bfc.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/radar.1c992ce7.js",revision:null},{url:"assets/Radar.401a4cb4.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Search.1a278ad3.js",revision:null},{url:"assets/SectionHeading.4b5fdf08.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.d45e73db.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.2193a7bf.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.90741ca6.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.23e540cc.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"11891f9851ec789103070398b663ec46"},{url:"/",revision:"9256e8e1cbe0155466ca08f38a58602f"},{url:"location/cala-banyalbufar",revision:"b01c087c31b6fa6d9b972b3ce2b0f818"},{url:"location/cala-banyalbufar/model",revision:"e6574af731c89f2ad57411a7a61f318a"},{url:"location/crowtec",revision:"047cc38423a62aff5e3535b510d98f36"},{url:"location/crowtec/model",revision:"d46a6bf0799a0b7a33f8cd2fb7ceef4f"},{url:"location",revision:"8f3dec5cafa0016d0a5532f6aff47619"},{url:"location/mercat-inca",revision:"f4d037785560011bfaedaaa1984cf599"},{url:"location/mercat-inca/model",revision:"5a2309a2ebcdcfe8ae73e305e2b9c60c"},{url:"location/mercat-olivar",revision:"eff9841e9e3557db020c845cf89d1b5d"},{url:"location/mercat-olivar/model",revision:"32e0d6dfb0bf36eb9121cda160b309b7"},{url:"location/mercat-pere-garau",revision:"4ced43a0926a3f46e955fd0a3a197e73"},{url:"location/mercat-pere-garau/model",revision:"cc1f13d6393f900f2abb9c4bab151fcb"},{url:"location/mercat-sa-pobla",revision:"589a701020e402c50ea6721a8581bab9"},{url:"location/mercat-sa-pobla/model",revision:"568c12ca726d4cadf116750418da5fd4"},{url:"location/mercat-santa-catalina",revision:"1274919a9656f925ba1883ec6783a3f9"},{url:"location/mercat-santa-catalina/model",revision:"77f7ee604bb8174f1ffafb30253f8c35"},{url:"location/mercat-santa-maria-cami",revision:"c90d56bb126b9dc8d428e97a6c3eee88"},{url:"location/mercat-santa-maria-cami/model",revision:"bf6dded843bc2b5e5ac400b3a24aaf50"},{url:"location/mercat-sineu",revision:"054b6867aa5ba0a1d754cff99f9c8843"},{url:"location/mercat-sineu/model",revision:"cbd4d11530ea2ba818f46a2a96d6643b"},{url:"location/mercat-soller",revision:"0577ee24d1d235c591cf57bbcec4f91c"},{url:"location/mercat-soller/model",revision:"9451855832ae399e4c2001654b4be7a5"},{url:"location/playa-es-trenc",revision:"4d5b176a546f12cf612ef2add7234d51"},{url:"location/playa-es-trenc/model",revision:"fc4ad9973fa9360dd97bbd654a4d18d1"},{url:"location/playa-portals-nous",revision:"c88098d4068e06010823b81c74e5d096"},{url:"location/playa-portals-nous/model",revision:"743c908db6eb9000c736cf686a5227d8"},{url:"location/playa-soller",revision:"318168841a0529c87a0fea5b885da049"},{url:"location/playa-soller/model",revision:"75c3d621dc505dec28689e20872c14b3"},{url:"location/test",revision:"ab4cf3cbb6f0357e30a0c0407e1eedc5"},{url:"location/test/model",revision:"6bc2461fd1cf0b95b23ba8e507631e50"},{url:"location/urban-hostel-palma",revision:"91264759214cb5dd60748f32794dccff"},{url:"location/urban-hostel-palma/model",revision:"a667481d9d044e4d78510261ee089110"},{url:"map",revision:"4a8293fe827d280949932fb7ef06cad2"},{url:"permissions",revision:"c0ce08f36a8e7034020eb2b5a566fdc7"},{url:"showcase/divider",revision:"416670e530e38f310824c68894970814"},{url:"showcase/heading",revision:"6116262bf763b72552fdb1e05f194cdc"},{url:"showcase",revision:"db10b4c7d982e62a98b7622c4b4cfd0c"},{url:"showcase/modal",revision:"bd5f7e8c8af65ea2165ce109322d34a1"},{url:"showcase/navigation",revision:"0cba1a275f922e42a45b85c7c691f2b2"},{url:"showcase/radar-sprite",revision:"40fde6fa1d348459314ffd845d9f3079"},{url:"showcase/radar",revision:"827a43ffc40c739985ee94bb16ae6daf"},{url:"tutorial",revision:"a94d59ece1df7c745365072e15a55b7a"},{url:"favicon.ico",revision:"60980cf3ec659b1f8cacb9c1d87464fd"},{url:"apple-touch-icon.png",revision:"27eddf990ed9d07563f56fe88a479070"},{url:"maskable-icon.png",revision:"1bc5bd5f6f6f7077080da2d28b50a597"},{url:"manifest.webmanifest",revision:"832a102e24ac88412ce550358a7bb174"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
