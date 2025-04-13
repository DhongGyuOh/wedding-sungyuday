'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fb71d3fd376833c46764c6f1721330d6",
"assets/AssetManifest.bin.json": "2ba7a6576ad42dd09c572c5272228cc5",
"assets/AssetManifest.json": "ce42404fc47cd6c473393b87a203eabc",
"assets/assets/images/img_21.JPG": "f77f052aea59c8f10218832edc47e946",
"assets/assets/images/img_22.JPG": "e63596c3d7b66a73a02705995295ec0a",
"assets/assets/images/img_23.JPG": "8d88b738ea1f041f2b16efc044b2141b",
"assets/assets/images/img_24.JPG": "57cda6d04c21abf62fc329fd271ac2a1",
"assets/assets/images/img_25.JPG": "e3dba166eeed06be799d427a2d852d0f",
"assets/assets/images/img_26.JPG": "59de62013f2a87d5251b578dc6dd91c9",
"assets/assets/images/img_27.JPG": "01da0153247d3ae9c0a8a35caed1b8ef",
"assets/assets/images/img_28.JPG": "c51b8289430505ed5274d0161e85329a",
"assets/assets/images/img_29.JPG": "c844988a47dc9d3ff8cb73058426ee7e",
"assets/assets/images/img_30.JPG": "9559cef28bea89d81c95f777df36150c",
"assets/assets/images/img_31.JPG": "c48d1e52b3c3e9cad1294e69f4e9f447",
"assets/assets/images/img_32.JPG": "d1633f659d0e49b03d5aae017a19a4df",
"assets/assets/images/img_33.JPG": "a9ae60f208ba944009ea78e21e105061",
"assets/assets/images/img_34.JPG": "88e0258404c0d463dd56d9fc63e002d7",
"assets/assets/images/img_35.JPG": "789ae404826043bcdb08f8110e1af091",
"assets/assets/images/img_36.JPG": "593c118c38b2ccb748aed6a7c9c3e145",
"assets/assets/images/img_37.JPG": "ea0155d5f8cf7a066a39fec1889016bd",
"assets/assets/images/img_38.JPG": "13a54e8303aa1fa805e8fe87d77ce65d",
"assets/assets/images/img_39.JPG": "64dbcc2d24843f3f2ebce0d9ae857cdc",
"assets/assets/images/img_40.JPG": "80d6ea346a6a46e3350c5ae40da70e7f",
"assets/assets/images/img_41.JPG": "0738bd12f5ff9e318ca3fa37de87aa5d",
"assets/assets/images/img_42.JPG": "3d88a71f3e614f9cc509383ecb1a0025",
"assets/assets/images/img_43.JPG": "65a729f587019e5829d3d6710842ec56",
"assets/assets/images/img_44.JPG": "596bb3b08da44aed3175441277ef3a3f",
"assets/assets/images/img_45.JPG": "27ddbc438faf80c3c7b5412eef280924",
"assets/assets/images/img_46.JPG": "636479efd2838be5821c302ede36ae66",
"assets/assets/images/img_47.JPG": "eecba37ba572ef827b6d6282727af931",
"assets/assets/images/img_48.JPG": "656cff20405a0f08398cb8313c677f91",
"assets/assets/images/img_49.JPG": "d1022da9b2eb8d384072fe242109881c",
"assets/assets/images/img_50.JPG": "2792aae435c2c25cf90bbb0a8d07c93f",
"assets/assets/images/img_51.jpg": "d1994e3ffd8de8cb680c418ad5b6424a",
"assets/assets/images/img_52.jpg": "3263eaf89c307dce9b201849a375b4a8",
"assets/assets/images/img_53.jpg": "2dbc4c642af1f77307219e30715d0da7",
"assets/assets/images/img_54.jpg": "ec460c99142083de5666c4fc0045f6f4",
"assets/assets/images/img_55.jpg": "91989d2dd56fe2be664f1583a6a7e37c",
"assets/assets/images/img_56.jpg": "d1b47830d55aa05a0b3aad35fbcc99ed",
"assets/assets/images/img_57.jpg": "540983f523ea060e8af4bb19047b9383",
"assets/assets/images/img_58.jpg": "a8e7151621bdc8ef83d73a86e73c49dc",
"assets/assets/images/img_59.jpg": "9a290a7b01c29cee077e3898c21ed387",
"assets/assets/images/img_60.jpg": "bcd0a63983946bc526bef16c444ae569",
"assets/assets/images/img_bus.jpg": "77fa9f2c6616e663982f3ab214f0e5ea",
"assets/assets/images/img_thumbnail.jpg": "07b7513bb280d523671b2209f8e7f2ca",
"assets/assets/json/love.json": "fce82c449388ba87079079705e13e6e0",
"assets/assets/json/love2.json": "86950ff5ca8c5320f65a94c1ad9301d0",
"assets/assets/music/cover.mp3": "e6cd0de2ac3e6992286013bfd958e9db",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "07e4e7dbe9710e5a70803c53bfdf297a",
"assets/NOTICES": "ae4923018695e2c9c42b3a421ad8f61a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9b1aa03c02c8c43d2e4ef1d5b8ce28b3",
"canvaskit/canvaskit.wasm": "8746eddf4e2883ac7fd123f0b1bee206",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "da50d68f5eb953d52e04e153d06e0ef0",
"canvaskit/chromium/canvaskit.wasm": "0e4d90773c8d34af4a4edf6cafbff669",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "b6cbd9b442394230920768fcdce9c0fd",
"canvaskit/skwasm.wasm": "4638927a0fcbdf3d934bfcc670d433a2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "807e22522ba8aae4b59a59621d5b341e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc2388e4190db9bb04bea097439f142a",
"/": "bc2388e4190db9bb04bea097439f142a",
"main.dart.js": "3de0d83910c0ea2e5bddbe449c58df0a",
"manifest.json": "f0950634811d55256967bb700d72c32b",
"version.json": "c2072265eb17fb0a484e5f0e6748e6fa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
