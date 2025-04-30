'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7b63973f47ff93d8291e5b9099ce483d",
"assets/AssetManifest.bin.json": "1c9cb1223175e02ebecdb3d863a4270e",
"assets/AssetManifest.json": "b510e3286adcb5a1dc7df7a853a6e598",
"assets/assets/images/img_1.jpg": "81232805a0914f1c9a83bf163a369e24",
"assets/assets/images/img_10.jpg": "3e5408caae61424662f4ae7a879a8ec7",
"assets/assets/images/img_11.jpg": "f4a310f1ac529c366aa57dee74a6ca9a",
"assets/assets/images/img_12.jpg": "4dd437087efdc8aa7464c77fc093bb18",
"assets/assets/images/img_13.jpg": "c6bd0b678992b6dccd1dc4f7677b7c96",
"assets/assets/images/img_14.jpg": "5be38923a81783184fb697069d0a830f",
"assets/assets/images/img_15.jpg": "2de5745782b93a1a43f78a5d4f306091",
"assets/assets/images/img_16.jpg": "56807378e65a5a2150ede39422774617",
"assets/assets/images/img_17.jpg": "ba546fc09e3f200a344329e403d39536",
"assets/assets/images/img_18.jpg": "44b1732af044c17d673bb10e59d6b5a3",
"assets/assets/images/img_19.jpg": "5c2dab85f21add1db0e54ab84cc2866b",
"assets/assets/images/img_2.jpg": "b084956daef5dc86b27dc117b6f3b3e0",
"assets/assets/images/img_20.jpg": "f98b110a3a7af6518ac452cd2d0484e0",
"assets/assets/images/img_21.jpg": "f2db42a3859826531e75e13be95e3b27",
"assets/assets/images/img_22.jpg": "ac6337bc156c2be3fe89c8a68980f232",
"assets/assets/images/img_23.jpg": "75855b0d50891f556aee0cc32f8560bf",
"assets/assets/images/img_24.jpg": "e6c9255219d31ac2da38bb93e155e44c",
"assets/assets/images/img_25.jpg": "8581dace9a475dd80cdee32c6e13fb9c",
"assets/assets/images/img_26.jpg": "109536ce26b083fafb4c331b150a5479",
"assets/assets/images/img_27.jpg": "8ddcadc0be6689c70a43d1350ccebf68",
"assets/assets/images/img_28.jpg": "cba680fb0e4d9d041a77d4bcd509a545",
"assets/assets/images/img_29.jpg": "3ad33560846047f9376430efee2d4951",
"assets/assets/images/img_3.jpg": "863c401b9ea93d6196caa26a7815c806",
"assets/assets/images/img_30.jpg": "e543d2c3316311ff8f436b2f5c6c45c7",
"assets/assets/images/img_31.jpg": "0dfe0754ccb0120f993cdbf4d6652cdc",
"assets/assets/images/img_32.jpg": "9f2bbeaf7530fe767f2f3ba42efddf63",
"assets/assets/images/img_33.jpg": "c775c7436aff56a02db3252d0a9ec884",
"assets/assets/images/img_34.jpg": "6364b8714e393a6e7059442d4c1fd01c",
"assets/assets/images/img_35.jpg": "b926daf44a0dfd19ea8ab2504a05c835",
"assets/assets/images/img_4.jpg": "c3ce73411195324173651bdcd9103b4f",
"assets/assets/images/img_5.jpg": "6e286287edc8ca6a2a1859c327af90a0",
"assets/assets/images/img_6.jpg": "f4053941ce89b0657b7110ab32fb5d64",
"assets/assets/images/img_7.jpg": "11b0051a6f25950afcb9eb67309473e7",
"assets/assets/images/img_8.jpg": "a8ae74db5a8bb5e9f00b673e37d851fa",
"assets/assets/images/img_9.jpg": "c1abf02034f0b66f7e7485e98b577396",
"assets/assets/images/img_bus1.jpg": "f8b03e2ea8148e9b0ffa44e3e7b72f7f",
"assets/assets/images/img_bus2.jpg": "7253ccb0ec630e5a2f693865c07f9f85",
"assets/assets/images/img_cal.jpg": "f0d2b42b1cff5518a1aa38575a975f58",
"assets/assets/images/img_thumbnail.jpg": "716d995b994782a4b5a555be9af187c7",
"assets/assets/json/love.json": "fce82c449388ba87079079705e13e6e0",
"assets/assets/json/love2.json": "86950ff5ca8c5320f65a94c1ad9301d0",
"assets/assets/music/cover2.mp3": "2aef51e7f68d5a0b91b6fbbd64f95ff5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "07e4e7dbe9710e5a70803c53bfdf297a",
"assets/NOTICES": "4380386f0094759056f8783923ab8240",
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
"flutter_bootstrap.js": "00bfa5379efc5ce1367ff797d792eef2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "611be8c29f2527ba33660f8ecc00addc",
"/": "611be8c29f2527ba33660f8ecc00addc",
"main.dart.js": "3da0f3d13c3a9d0933d4f0bd138c72a8",
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
