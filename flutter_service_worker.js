'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fdc7c45d4bb61c9cfeda87d0d83de6e2",
".git/config": "d67424fcb72fecc37718149b13030631",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "81ee7e7904af57deef2201f421aa8cd9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "51af1133af14a155ee4169d99e95135d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "db23623f0a77b27806bc00167def530a",
".git/logs/refs/heads/main": "53eac866079c03e8ed3ca40f6139955f",
".git/logs/refs/remotes/origin/main": "b2c683b7b60950e6d88e5d66d4e32f09",
".git/objects/06/8131fb6f426c00387b61253e2ecfa09f1cbe46": "262280652c01b7ad1be38243e5994bb9",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/8455b08401a8bffe6fce9ab8a31cfa6b7d711f": "eeb840757aed667bd82ce3f281ca290e",
".git/objects/08/ef74fab285f0a63ac5735f98e24c0593c8a708": "b682badffc4375b6b1d5110f176b4ce0",
".git/objects/09/72f0606ce4e5a7ef63788a9bfb1449f42b8275": "a36c18dcec6add94d6f3f18c2113a799",
".git/objects/11/052c6575e70ac3888cefe9c133f30d5c72eebf": "dc351b1d58c38c3d48a50bfb78b422a2",
".git/objects/15/1ef7a470b66b14bc5f2d491d4e273d306e8913": "b1778668cf1f0150f7da846abcad0460",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/59b845e938c8cbf9871af1b02641021bab1c84": "6f7804776242fd0ee004ccf61b4beb09",
".git/objects/20/0874d4f3916cec90063016faa76ac31f4c2e48": "477f77b3293458dc8a26ff4fb65f1078",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/c7bccd303bd2a7320965176571bde7a75803e3": "306436dc4e1288ce7d93eb2b78f0891b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/052b3becce9a6a7ed207aa411ad84c18593b81": "35608a23dfd2092859e651334dd23c53",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/146f2a6c64e31ac61f4746e0e9be714538accf": "96c6c2d583d325a7d0cff0f305f86ff1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/65/890950dcca141e60772b221e742418335d138f": "94b8b9ef5e80d4591483fe866f7cc895",
".git/objects/6b/e77a47fbe87ea1cc8991ef35322c09281ca52d": "d780851ee3e9738e821fb564d4ba04a1",
".git/objects/6d/784351c97c41d0e11256829f79d226dc479885": "6b0fc4843b54d1b4752205931e97f89f",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/c9ebcb302d8f66ce4e20538c46f33d3d28a52f": "30a04223fe05c89e1c62813dcc9441ac",
".git/objects/75/bb653a3fc27c00e69378f96b719b7d05d2caef": "f273677842b4ab5157d399020f7f2d0e",
".git/objects/7d/123cb4ba3b1719b367cb0b8c46bdf1148440e9": "1fa3fad5de30314e4f8ef851f9fb4638",
".git/objects/81/4bebc6400da854c19eded2395f8bdf10e4b593": "ceb94c8b24349c5e9d4b5bad46b1a6df",
".git/objects/87/32d639d8b0965db281887fe59d99ae557459e8": "f186f380e4436e7a2a25be30d14f42fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c7e34d3514edbe9e4c0b25e26c6069c5eca1d5": "c6630776b9e37166cda9ecc1635846b4",
".git/objects/8d/ab40cc7b56173e3662996855b0ac5ff80e3330": "ddaf9969ff49839f2b702fb671759fbb",
".git/objects/8d/f997a331f677c3258276b3d0171eb9f20ce4f9": "ea71e6e552a506de6cf1f1bf38645522",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/a8524137767eee4e987e10ab252c352e6dbe52": "a72daced6d540cb42d673d06b099d258",
".git/objects/98/03aa9f6cfbf04c76c883dc97fdd99e099939f4": "2c190c74d874cabb2adde2338b11a34f",
".git/objects/9a/0fa3318ebbe48e3d2bfd1408a9378e9007c8aa": "7965792e5c5e45e563fffb3228d53235",
".git/objects/9b/d335876b4942345a0e4d72fb52954da612b88a": "76f8e3f8b028762927e1a4b86b2c2bd4",
".git/objects/9d/22ac01d2dc295a9c6f14ec822b9e63587fb183": "ad66f78ad11d2432f9709e22f903ddb0",
".git/objects/9f/9d9889075b302bb9d4947911433a84f32a55ad": "203e38120af5885601fe2fec5e103384",
".git/objects/a1/8138fe13523737c2943493ebfe5e286ee2f038": "2a495c7d3263f79afc987998efa8bd82",
".git/objects/a8/9c923fea45ea20211cd1932afd726f40f1c86f": "d69897fc56fcd76a3b72b1eb1f2b9f15",
".git/objects/a9/5fbcbf86680fc4ee1170927dc6e7822b77b85a": "429d5e64e240a586cdcbc61301d8dded",
".git/objects/ad/a77ca918372527bbe3e3a767e6c3eb6dcbb1c2": "809cd647424c3572377a2906bc3455ac",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f45f0020f4c6fc213e3f822f80e3eab9d9087e": "94dfb4125f386bea30ebc049a458fdbf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/efbc2dab4aa13a9b0a270173f584b3dabf4717": "f2741a880812195119ca106d0029d52c",
".git/objects/c5/504341861c917e5312b569520a1645a0ad1b67": "e47ec18044d2b66694600a39a9b46da6",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/c942d4b9c84f92b1ca81a03b08fb96392acf80": "a4ea05cf5dfa75abb2ab52078a94fa50",
".git/objects/c7/b2fa26157a143395fb42c8a679d01aaa7e2f54": "f643f7bfe0787378427089109a21c19c",
".git/objects/cd/e6e10addc3d8edb51cb85ec75c46e477e81016": "ccba4d47564d97dbac8e6b78a880dd53",
".git/objects/d0/33258e69ef3f7cf89e0e84197f20c0440dd6fd": "1226f5e55b6a08b5db86674011d9a925",
".git/objects/d0/cdce9995e5145f4e65265746efe1cd0a17d27f": "67275bcb4b365b92f4ed8905b5d8281a",
".git/objects/d1/363c9037c34da060b4e75a40666fe28a7c9c0d": "d6e22246609b72331b43984238964dd3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dd/b790f956cdd59ca4e0e10eb0cdeb8961535f7e": "8749d85b5ecd6b1eaa0e1356346744ca",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/cf388f1e28eae054e82e4b75e2559c489128e6": "8330c0a1008981e812462644b3e85e71",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8c2a9dd2f6ce14a77041e498428e99a69ec2a3": "3f54a0fc311f7b8f50704bc0453a1a43",
".git/objects/f4/2deb4af5974c421d186a1d0539aab82461900b": "a13dd6f864f013934ca4ff9a57378683",
".git/objects/f9/f9cec85c0d66bcccae0637b496539ccc1bf034": "fa750a4c11480d2f2dc586c7653de7b4",
".git/objects/fa/b55f4d0fdbef5caec422c23a53987e528e1795": "fb61e28f99e310a0e6ac85407a694eb4",
".git/objects/fb/48381c9a3584fcb6a514801748c76852de13eb": "1be37634d30c135ba3a528cb29cfe7f6",
".git/objects/fc/2c0830b46e4ff93382cdc45db95070b8ed169b": "77bca3d9a9396609a5ea161152d0ce78",
".git/objects/fe/55e03ab175912bc6fc08e951a740febb054988": "854aa27c462b8a4b7d41888adb808e91",
".git/ORIG_HEAD": "0c5a18de6749f698a05ba8653af718e4",
".git/refs/heads/main": "0c5a18de6749f698a05ba8653af718e4",
".git/refs/remotes/origin/main": "0c5a18de6749f698a05ba8653af718e4",
"29768e61": "d41d8cd98f00b204e9800998ecf8427e",
"3e1ed12b": "d41d8cd98f00b204e9800998ecf8427e",
"5ec55735": "d41d8cd98f00b204e9800998ecf8427e",
"841eec8b": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "5c81740badfc40221695ad0352e2270f",
"assets/AssetManifest.bin.json": "a6cbbe68e693dfef30c6bd840bbdd675",
"assets/AssetManifest.json": "b297131bebbb3881ecde22bd55bdd6da",
"assets/assets/images/Logo.png": "e20e33d94a044cc696c64742fd589ebd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "e93e3fd7b0d1b6f8562a1d8043aeddcb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"f31845b3": "d41d8cd98f00b204e9800998ecf8427e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/4b300bb1": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "234557a7cca99d871cc8ad6d698ec1b7",
"/": "234557a7cca99d871cc8ad6d698ec1b7",
"main.dart.js": "f6d947e177fe00f5edb3114e354bca60",
"manifest.json": "d14fb362fabc41539d8bbf324e3ea4cc",
"version.json": "c35ee24d258990a9d713da78cc1fa5e7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
