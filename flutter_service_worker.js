'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7dab07dace79fbf0e3dd054192bb377d",
"assets/AssetManifest.bin.json": "971981d9ca45d7db9ef2dd8a98d14758",
"assets/AssetManifest.json": "ad99bdf268badc8a26fd56ed18d5a272",
"assets/assets/images/img_1.jpg": "4fa164864a3aeb144d05f76a52b145fd",
"assets/assets/images/img_10.JPG": "27ddbc438faf80c3c7b5412eef280924",
"assets/assets/images/img_11.jpg": "4287167847a6b762d8d1cad8feb8fdef",
"assets/assets/images/img_12.JPG": "eecba37ba572ef827b6d6282727af931",
"assets/assets/images/img_13.jpg": "9f58c4fee3bf64308533c6470f2c5d27",
"assets/assets/images/img_14.jpg": "419cd317a82871a1b127d1f76b7c0853",
"assets/assets/images/img_15.jpg": "ab685268b912da3c0e8cebac452f4973",
"assets/assets/images/img_16.jpg": "1d819f62fe4b25f32771a63b69a26287",
"assets/assets/images/img_17.jpg": "085874487a2e66fa4a73c1ce00865e2a",
"assets/assets/images/img_18.jpg": "a66d99777f27cfc16303c4718557d73d",
"assets/assets/images/img_19.jpg": "9b98a318fcd015372ca78b9817974bf3",
"assets/assets/images/img_2.jpg": "380ca932c41f095b44696a50d0bb916b",
"assets/assets/images/img_20.jpg": "2db81b1ac8739fbd6efa5a82a3849ee0",
"assets/assets/images/img_21.jpg": "5d178dbb6867f42333ea18a40abd169e",
"assets/assets/images/img_22.jpg": "69b1fe77fc9dbb5adafe98d97510aa2f",
"assets/assets/images/img_23.jpg": "484a1e8d44ac54116c3318610232a9da",
"assets/assets/images/img_24.jpg": "98a7dd5b6741fc357b5b70897e0e2e88",
"assets/assets/images/img_25.jpg": "0e67f8febdcf0d3318072357b8011272",
"assets/assets/images/img_26.jpg": "cf465ce0f0c8fdd763e96083d0623f09",
"assets/assets/images/img_27.jpg": "91b65647f92eac173e78f4578568df74",
"assets/assets/images/img_28.jpg": "3d9a43e8116cb9fddf649c0a786dd7c3",
"assets/assets/images/img_29.jpg": "d3b55df807a90ad0c518be8cc078acce",
"assets/assets/images/img_3.jpg": "6d4b0f1157f739eb39bfeb29f9d8fc07",
"assets/assets/images/img_30.jpg": "6a899ca24ffb40a9aab81d17b22f796e",
"assets/assets/images/img_31.jpg": "91509c19f32bc7542b86398faa50f06e",
"assets/assets/images/img_32.jpg": "216a8ee5d3221c3c59f53733c6fc0f85",
"assets/assets/images/img_33.jpg": "2391e2efc82cdb6f2b24f07ac33f0c72",
"assets/assets/images/img_34.jpg": "1027a0cf9c0452449a2dc89cdf40e5c8",
"assets/assets/images/img_35.jpg": "9cadeba8a4ff463546040b53e5e5c5b5",
"assets/assets/images/img_36.jpg": "e3ab9a4a29965ec48d55ac142fe9595a",
"assets/assets/images/img_37.jpg": "926c20848f2f9d5b17446c98b5f8fe81",
"assets/assets/images/img_38.jpg": "211e772ae840e93286f63d8abe4c6a7b",
"assets/assets/images/img_4.JPG": "596bb3b08da44aed3175441277ef3a3f",
"assets/assets/images/img_5.jpg": "49a3327de1b54578b6eaf1c060607a35",
"assets/assets/images/img_6.jpg": "6ef9898bc6f9802711d3541e64775bff",
"assets/assets/images/img_7.jpg": "83c35d11816fb9c832275241c620e2b2",
"assets/assets/images/img_8.jpg": "3e5408caae61424662f4ae7a879a8ec7",
"assets/assets/images/img_9.jpg": "a8ae74db5a8bb5e9f00b673e37d851fa",
"assets/assets/images/img_bus.jpg": "77fa9f2c6616e663982f3ab214f0e5ea",
"assets/assets/images/img_thumbnail.jpg": "716d995b994782a4b5a555be9af187c7",
"assets/assets/json/love.json": "fce82c449388ba87079079705e13e6e0",
"assets/assets/json/love2.json": "86950ff5ca8c5320f65a94c1ad9301d0",
"assets/assets/music/cover.mp3": "e6cd0de2ac3e6992286013bfd958e9db",
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
"flutter_bootstrap.js": "440191a438d96f4a26ff516cb67d0ac2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "00cb45e430dd92fd759ff10af29fba8e",
"/": "00cb45e430dd92fd759ff10af29fba8e",
"main.dart.js": "67abe0d799570680fdca0eafcbcfced6",
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
