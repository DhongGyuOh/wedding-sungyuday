'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f29c2a0b060afda6aac41fee696fb3e9",
"assets/AssetManifest.bin.json": "ece437aba05674eb7a0ea73b880958b7",
"assets/AssetManifest.json": "030caa34fa76719376b188c7e90207f6",
"assets/assets/images/img_1.jpg": "6364b8714e393a6e7059442d4c1fd01c",
"assets/assets/images/img_11.jpg": "fc9233a8b18b5fd4b60cfe0becd33d9f",
"assets/assets/images/img_13.jpg": "f4a310f1ac529c366aa57dee74a6ca9a",
"assets/assets/images/img_14.jpg": "cba680fb0e4d9d041a77d4bcd509a545",
"assets/assets/images/img_15.jpg": "4dd437087efdc8aa7464c77fc093bb18",
"assets/assets/images/img_16.jpg": "5be38923a81783184fb697069d0a830f",
"assets/assets/images/img_17.jpg": "c6bd0b678992b6dccd1dc4f7677b7c96",
"assets/assets/images/img_18.jpg": "9f2bbeaf7530fe767f2f3ba42efddf63",
"assets/assets/images/img_19.jpg": "2de5745782b93a1a43f78a5d4f306091",
"assets/assets/images/img_2.jpg": "80a5b711be015c87d0c44c5baa33cdf0",
"assets/assets/images/img_20.JPG": "56807378e65a5a2150ede39422774617",
"assets/assets/images/img_21.JPG": "44b1732af044c17d673bb10e59d6b5a3",
"assets/assets/images/img_22.JPG": "5c2dab85f21add1db0e54ab84cc2866b",
"assets/assets/images/img_23.JPG": "f98b110a3a7af6518ac452cd2d0484e0",
"assets/assets/images/img_24.JPG": "f2db42a3859826531e75e13be95e3b27",
"assets/assets/images/img_25.JPG": "ac6337bc156c2be3fe89c8a68980f232",
"assets/assets/images/img_26.JPG": "863c401b9ea93d6196caa26a7815c806",
"assets/assets/images/img_27.JPG": "06fc7d41eb6392eb1394696d44943fa3",
"assets/assets/images/img_28.JPG": "11b0051a6f25950afcb9eb67309473e7",
"assets/assets/images/img_29.JPG": "6e286287edc8ca6a2a1859c327af90a0",
"assets/assets/images/img_3.jpg": "c775c7436aff56a02db3252d0a9ec884",
"assets/assets/images/img_30.JPG": "ba546fc09e3f200a344329e403d39536",
"assets/assets/images/img_31.JPG": "109536ce26b083fafb4c331b150a5479",
"assets/assets/images/img_32.JPG": "e6c9255219d31ac2da38bb93e155e44c",
"assets/assets/images/img_33.JPG": "ff85d29b058a154a61944cb9567bafcc",
"assets/assets/images/img_34.JPG": "8ddcadc0be6689c70a43d1350ccebf68",
"assets/assets/images/img_35.JPG": "f0a06ea074be91b01f68fc6bf78ff8fd",
"assets/assets/images/img_36.JPG": "8581dace9a475dd80cdee32c6e13fb9c",
"assets/assets/images/img_37.JPG": "dc288895e628b239b9236b5a349306ed",
"assets/assets/images/img_38.JPG": "3ad33560846047f9376430efee2d4951",
"assets/assets/images/img_5.jpg": "a93be15e2f330ab3b841c51ad359580f",
"assets/assets/images/img_6.jpg": "b084956daef5dc86b27dc117b6f3b3e0",
"assets/assets/images/img_7.jpg": "c1abf02034f0b66f7e7485e98b577396",
"assets/assets/images/img_8.jpg": "3e5408caae61424662f4ae7a879a8ec7",
"assets/assets/images/img_9.jpg": "a8ae74db5a8bb5e9f00b673e37d851fa",
"assets/assets/images/img_bus.jpg": "77fa9f2c6616e663982f3ab214f0e5ea",
"assets/assets/images/img_thumbnail.jpg": "716d995b994782a4b5a555be9af187c7",
"assets/assets/json/love.json": "fce82c449388ba87079079705e13e6e0",
"assets/assets/json/love2.json": "86950ff5ca8c5320f65a94c1ad9301d0",
"assets/assets/music/cover.mp3": "e6cd0de2ac3e6992286013bfd958e9db",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1ad2918e239e3194263c8ee7036a426e",
"assets/NOTICES": "40ab6a04958c627a0e8ca86d0a6e23b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e2f9b646961de63d0bb37e579310dcf6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e7332eb47de8979878e79a81aaf7d33e",
"/": "e7332eb47de8979878e79a81aaf7d33e",
"main.dart.js": "f688aa6ef18ebc0cbd799224f90f7feb",
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
