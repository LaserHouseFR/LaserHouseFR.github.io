'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1ef1714d4e95cb2dea31b0ee6fc14146",
".git/config": "d67424fcb72fecc37718149b13030631",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a927286463f1b67c0c41a26a3b898430",
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
".git/index": "89dc3a822b6328403bb4837430ca0fcf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2ffae5d499757f21e3e371f0e73d02c",
".git/logs/refs/heads/main": "23531e2f277a7a33507bca57d9d91310",
".git/logs/refs/remotes/origin/main": "d85b833d82ef618c9ea4ff3669f1f44e",
".git/objects/02/4c82bcac7baf220775a90a1bd64a189e81243b": "d9958f97a3a6fa0995511732929fbf5b",
".git/objects/04/ab8dc48582610a4cd56c363177b0e050ae62c4": "138c1275d71bebe7579f43196adfb842",
".git/objects/06/8131fb6f426c00387b61253e2ecfa09f1cbe46": "262280652c01b7ad1be38243e5994bb9",
".git/objects/07/2494ca9ab04c05e0a2753aa03e1b6b1bbafea5": "2e6b09fa1d1b0e762d55b40ec2318a46",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/8455b08401a8bffe6fce9ab8a31cfa6b7d711f": "eeb840757aed667bd82ce3f281ca290e",
".git/objects/08/ef74fab285f0a63ac5735f98e24c0593c8a708": "b682badffc4375b6b1d5110f176b4ce0",
".git/objects/09/6ac71dd1e7f5752101951bef3c3c19fa22d627": "2a2b477325d79641b5b67a64f9341a59",
".git/objects/09/72f0606ce4e5a7ef63788a9bfb1449f42b8275": "a36c18dcec6add94d6f3f18c2113a799",
".git/objects/0b/97a768aa8cb71500aee342be57a08a94e515b6": "a8443ce8f3a32b3b0821c8a765205b76",
".git/objects/0b/fe838fb8d8c7f6d84e7f2b068906d0357b65e4": "42af1dc30dc99b64c16c95af8e49d372",
".git/objects/0d/ae2b0d85ccfb14b6e4aa7f688b5a5bd3be372b": "6342b814918eb2acbbb5685db58c3c29",
".git/objects/0e/1131b0b7ad5c07b99ff4971309718f57ee2f1f": "e21d2602b3cd46f86c0d9ac38a6618bf",
".git/objects/0f/17ab846a889b73ce124140833a1671b29b14e1": "6113bd8f951ec55402fd0dd43d2259e8",
".git/objects/11/052c6575e70ac3888cefe9c133f30d5c72eebf": "dc351b1d58c38c3d48a50bfb78b422a2",
".git/objects/14/c6a61ee465fb76c4cd2207ae2ab9d49e226667": "234b437a6f98f73459f8a93dd567ee8a",
".git/objects/15/1ef7a470b66b14bc5f2d491d4e273d306e8913": "b1778668cf1f0150f7da846abcad0460",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/a186afdd6a25e500b48f664f8cadb0b30d01fd": "7cc434e5e488f182257a3d7b4dc4ea8a",
".git/objects/19/59b845e938c8cbf9871af1b02641021bab1c84": "6f7804776242fd0ee004ccf61b4beb09",
".git/objects/1d/630434a437e4d0698fe96692cdfc56ebe0f6cd": "215c7330150a7a2e370b0c042bcd26e4",
".git/objects/1e/d3e83c4933abd5cbffa45f887e25cecf9b8132": "a032d9c52ecf47f56ad68a968ad0fc80",
".git/objects/20/0874d4f3916cec90063016faa76ac31f4c2e48": "477f77b3293458dc8a26ff4fb65f1078",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/a0e6c0fc41a527d91fd9ea1ec5795a5917b208": "9e2c1b9cf245b23c3123a9aaad8b1291",
".git/objects/22/1334b39781415c77190287da74395afd0cfe11": "9029121305ed1bb4f71f1d5d754add25",
".git/objects/22/53ab9a8753e79ec56282e9128f38b338bbd9c7": "55c1cdfba5700421c331e655b2b0af68",
".git/objects/26/e0380b30f53f64f6b3a88dfc876c70fdc565c3": "de6f4b80bfff6c2bcf0f439ca888d17a",
".git/objects/28/18bf43edc30b330c40c68ce02fcb0fb778299c": "3991542700287a8301de369f8f5e03d8",
".git/objects/2a/b38c11577c11b4933e4e1db698548ffb0c154d": "2b9a79b73af2913ad21be4ab9900757e",
".git/objects/2b/c7bccd303bd2a7320965176571bde7a75803e3": "306436dc4e1288ce7d93eb2b78f0891b",
".git/objects/32/a50452639e267e095eaf9849898a28b7308ac9": "a769f88d1628b682e442971982b327d4",
".git/objects/38/6b2b42912b14bedb45a60c37f2fff905f218de": "3b0a86ef4d03a7c8b2cd721a2d016a78",
".git/objects/38/dd0dabc5e629732564146ae5151170851a61bb": "76d299beaf9f9b1987fd0737b1f508d1",
".git/objects/3e/00472913dfef9340efc38ddb2388c6d9a48711": "63a9fcb91400ecb39999e8d3857295a5",
".git/objects/3f/e9b032f1d6960cd8cf6a732450dcbb810ff1ef": "b65d50e53924a8133b2eabd734e8ef94",
".git/objects/42/1e5fd77e0d53c90b4677fa9a12e96509a5a17b": "c4d8aa29de81edcaf0c84cc5fe5949a3",
".git/objects/45/bfc63b3550ef26efd3cae7fc5b2aa2bc47f753": "3da88f2b96232a650151ac837561719a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/052b3becce9a6a7ed207aa411ad84c18593b81": "35608a23dfd2092859e651334dd23c53",
".git/objects/48/b28834650cdc18029670d5aedce2beed03ca4d": "71b9f59ce3d193254624a3a5fe14a0b6",
".git/objects/49/ffbc1d126405b41e3c93b0853133f1e73361ad": "3745fc291e7d1a17939ccda3cb7bdcb7",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/5869f15be1c753d2e7577b6c03c80b9042ec9d": "d50d814b0f8bb4f3f51bc6850ad5cb22",
".git/objects/4c/146f2a6c64e31ac61f4746e0e9be714538accf": "96c6c2d583d325a7d0cff0f305f86ff1",
".git/objects/4c/4c994ced1119d0ed3d4499fdfe659a73ba916e": "61e4da264271282070fade64ed7a82cb",
".git/objects/4c/a188f41e90d3f612fdaa4f05f869a64baa89bf": "a5ca0cb9cb8e441c2c5b6be2527d4fa8",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/9fd71525907e843c5a5633e58a6ffe2a4c8dc9": "a752871be5c29be241136188aa2e9418",
".git/objects/56/f51122071e557e38fc673362f61ecf34c59ea0": "01b65119655c3c08030509d6565d5afc",
".git/objects/58/4bbb98ff4abb272ee440ac1b7c4bc2219d62d5": "93cb202edf29fbf4f0e763f988b9965a",
".git/objects/58/c3842af78c74d1b8a5937a5bdcc9b899842881": "67ec1bec04d6bf4945e6da0fdc8e9ac6",
".git/objects/58/d2140c15d26a258b57f192bc71342622f56f30": "fc9440ba460089fbe99b2aa72847dd25",
".git/objects/59/c2475acfd7527b13a64462a04e400a86878fc7": "6fd14e283eb3ec4a07bd0a514effd02b",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/fbb75a7edc83562aa21814b1179a3e70122250": "40ce9602f4a76d5bb35bdf0e14a41095",
".git/objects/5b/a7a3c64b21813d0991cb4c3e75b7c683995d3f": "b742385eece45d2f1666671cdb678a25",
".git/objects/5e/37afbdd9b8aca3034cf26b1b4c32bfa3117a19": "75b9c7151a0008129db8da07983de73a",
".git/objects/60/9cdebe4a6654dc3f6aece021b82a55b6e37f41": "3f1dee17fb85c13e9e7f2f4b8a791993",
".git/objects/62/a7c1ff2de9c83afc101a7a3e4d7e1d960dc17b": "433a1a6b2bfbee6ea1ca0d06e3464a21",
".git/objects/62/ec4cb0fe198b3882829c583ea30b2ed9ab56fd": "18256ff12e1a76757de0f4ad577f3c86",
".git/objects/65/890950dcca141e60772b221e742418335d138f": "94b8b9ef5e80d4591483fe866f7cc895",
".git/objects/68/00f94a95afb3f7e7073ebcab61831a0afd74b9": "e44d662378d21a10e34d0402dd4f34e9",
".git/objects/69/1ea528a8ffbcf2420124ed5dfac847fe7cb9a4": "afe8d6e88ec40dbbdf8d4e3748560c3b",
".git/objects/69/c63ffa1b3b399173d99718569c2326c083da57": "2f50fccfe4eb5ede7a79584856990150",
".git/objects/6a/76b49553f1a03db18804a491b19234673d1678": "574651931de14689a7fa74904f8d2011",
".git/objects/6b/8ce0f3c063d8907f127f861311220c31feddc3": "984e66873174acc6f5d6a5dcac07136c",
".git/objects/6b/e77a47fbe87ea1cc8991ef35322c09281ca52d": "d780851ee3e9738e821fb564d4ba04a1",
".git/objects/6d/784351c97c41d0e11256829f79d226dc479885": "6b0fc4843b54d1b4752205931e97f89f",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/c9ebcb302d8f66ce4e20538c46f33d3d28a52f": "30a04223fe05c89e1c62813dcc9441ac",
".git/objects/74/49fed013a414f05b8d7056fccf091b781c9d4e": "fb5dbd2f396b5cefc7cde47cfdcdf2e1",
".git/objects/75/bb653a3fc27c00e69378f96b719b7d05d2caef": "f273677842b4ab5157d399020f7f2d0e",
".git/objects/77/2e09ee76664161dcf6df44dd0b797f492572f6": "17470c7c8c70bea7f2b065a66efc4e9e",
".git/objects/79/bafead35ac7edfc9a497ab9eb0bd1be1ac3c1a": "69d32ca82b1d8ea72ba8b2409fd47147",
".git/objects/7b/98f65ec32ec453a554c487fe43f9c0bd7ed701": "c3e11e83b76c5872a3d8a44d1025139c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/123cb4ba3b1719b367cb0b8c46bdf1148440e9": "1fa3fad5de30314e4f8ef851f9fb4638",
".git/objects/81/4bebc6400da854c19eded2395f8bdf10e4b593": "ceb94c8b24349c5e9d4b5bad46b1a6df",
".git/objects/85/1613a6a672bca4e7ae7fccc4e7ff525dfd4375": "96d4c3fb6a8e14c47dff4e2f6fe9039a",
".git/objects/85/6cd5832de5816e8b219b3b8ea46beb97d4ee67": "8ba519024f0f42c099dfd3f65b493f94",
".git/objects/87/32d639d8b0965db281887fe59d99ae557459e8": "f186f380e4436e7a2a25be30d14f42fe",
".git/objects/88/2c31b6abc27a1d97adde2e7f6947d9e7a9be95": "8ab2b2746a0d7eb8a7cf657aedc83429",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e78ef49eb2112ea25718c5f07705c7a6221be8": "f67955b3e899c4dd224477f5a9da2686",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c7e34d3514edbe9e4c0b25e26c6069c5eca1d5": "c6630776b9e37166cda9ecc1635846b4",
".git/objects/8d/ab40cc7b56173e3662996855b0ac5ff80e3330": "ddaf9969ff49839f2b702fb671759fbb",
".git/objects/8d/b9c0015e80f9a1b6a0cdd28ddbf8e014435db9": "4bd9e6fcf9ce0ec3fe0ad51fe3a8057c",
".git/objects/8d/f997a331f677c3258276b3d0171eb9f20ce4f9": "ea71e6e552a506de6cf1f1bf38645522",
".git/objects/92/c24043135a533fea90dc21b00b298f398f7213": "32710937882eca32ff8136f634baae09",
".git/objects/92/d0b9655bbbf5a1613f1b9c989a81ea6b1c7a44": "53ed6b9d248faab6d436c2af8d0f05e9",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/a8524137767eee4e987e10ab252c352e6dbe52": "a72daced6d540cb42d673d06b099d258",
".git/objects/98/03aa9f6cfbf04c76c883dc97fdd99e099939f4": "2c190c74d874cabb2adde2338b11a34f",
".git/objects/99/b5f4315042eed155d202db37582128cded5d9d": "146bdd55f66fc6c81a53aa328b297149",
".git/objects/9a/0fa3318ebbe48e3d2bfd1408a9378e9007c8aa": "7965792e5c5e45e563fffb3228d53235",
".git/objects/9b/4cc45169699e572c7cdf72d50b537c3591ee51": "3e499c729197e3931247b5fb9e3a1bf9",
".git/objects/9b/d335876b4942345a0e4d72fb52954da612b88a": "76f8e3f8b028762927e1a4b86b2c2bd4",
".git/objects/9d/22ac01d2dc295a9c6f14ec822b9e63587fb183": "ad66f78ad11d2432f9709e22f903ddb0",
".git/objects/9e/7f5490eeebf01b919f0b4454f6ef089d336d35": "94166984331e54d90011afd5c77b6a6b",
".git/objects/9f/9d9889075b302bb9d4947911433a84f32a55ad": "203e38120af5885601fe2fec5e103384",
".git/objects/a1/8138fe13523737c2943493ebfe5e286ee2f038": "2a495c7d3263f79afc987998efa8bd82",
".git/objects/a2/0d3734988ac10d747fc08d1b6ff2f8ca27a671": "943a9133954ee17b5c587452a3b4d333",
".git/objects/a2/6c88fee760a627921096c4f2c1d72f410981d8": "d525c2ca7eb054ccd0ed213658014eee",
".git/objects/a4/b92ed1a6647e056aff1a02c6ae634b13ffb857": "45ff75b043609939fb2dd4e29d05c128",
".git/objects/a6/34ebf0557c30053f5498616880fd157307f10a": "96161518d551277f19df1f3e0dd3f84e",
".git/objects/a8/9c923fea45ea20211cd1932afd726f40f1c86f": "d69897fc56fcd76a3b72b1eb1f2b9f15",
".git/objects/a9/5fbcbf86680fc4ee1170927dc6e7822b77b85a": "429d5e64e240a586cdcbc61301d8dded",
".git/objects/a9/9d35cc95450be227beb22683ed3db614d10c73": "11da67880ba1b1bfd6b35d7e598b40f6",
".git/objects/ab/d1ae95a65be4563c8d980231fae09f0af71015": "6caadd37af7c92204dd05d59e03a8b5f",
".git/objects/ad/a77ca918372527bbe3e3a767e6c3eb6dcbb1c2": "809cd647424c3572377a2906bc3455ac",
".git/objects/ae/0a9af66f64bcc3e5efe910f76f78003a68f465": "8de5e09d7816c36c71eca8223a3c3dbf",
".git/objects/af/0fe755db94e6691abd1b194190a28705a2c339": "9dd75028614b5540c2a613f8f9ba9de0",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/f3030417b91573a6c2b685a6b2d13bf06417d8": "1ff5b7f681dbd3ae99bcf5e3ffd63c6e",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f45f0020f4c6fc213e3f822f80e3eab9d9087e": "94dfb4125f386bea30ebc049a458fdbf",
".git/objects/b9/11b47dfec32387672e23f91a84c31299208028": "7ee6d234a8966f542b7f3371b2436ab4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/efbc2dab4aa13a9b0a270173f584b3dabf4717": "f2741a880812195119ca106d0029d52c",
".git/objects/be/fb7a057381bf9fa78c5c93e04f26dd823339d4": "b22a8ab25275b8d2c281889a374712e9",
".git/objects/bf/72a97d385c1c18e86af38e4030fbaf5392adb2": "b893dc42754402bddf12878fee0675f4",
".git/objects/c4/2468b97f1f947ff44ab2c690993e666202a0bf": "aa45506d66d9ada83ecb826c7fb226eb",
".git/objects/c5/504341861c917e5312b569520a1645a0ad1b67": "e47ec18044d2b66694600a39a9b46da6",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/c942d4b9c84f92b1ca81a03b08fb96392acf80": "a4ea05cf5dfa75abb2ab52078a94fa50",
".git/objects/c7/b2fa26157a143395fb42c8a679d01aaa7e2f54": "f643f7bfe0787378427089109a21c19c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/e6e10addc3d8edb51cb85ec75c46e477e81016": "ccba4d47564d97dbac8e6b78a880dd53",
".git/objects/ce/479ea86c4ccb5a35a87d26a3e92a522145d479": "ffa8c4fe702df74a3a40e88cbc7b86ef",
".git/objects/ce/b5667715c2cb2eb63b8dbdbbfaf3865bed75cb": "964d0ce0a1b90c1bd12d91aca27f7416",
".git/objects/cf/8df482a3755ee276aa1a2021f079d19d73f945": "c46a6cbc22cf0d020278257ea4a2024a",
".git/objects/d0/33258e69ef3f7cf89e0e84197f20c0440dd6fd": "1226f5e55b6a08b5db86674011d9a925",
".git/objects/d0/cdce9995e5145f4e65265746efe1cd0a17d27f": "67275bcb4b365b92f4ed8905b5d8281a",
".git/objects/d1/363c9037c34da060b4e75a40666fe28a7c9c0d": "d6e22246609b72331b43984238964dd3",
".git/objects/d2/809d8a30072cf50da606555318d981be50e75d": "3a081000337634803f9fd3e3d96614af",
".git/objects/d4/1d1e5e5d5b91591d2bcd7adfa06b04bbd75c19": "62fb87daf7662c0f95835aade63329ec",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/338de575fad9e4ff644fc7a5c8da662b6879f1": "b0ab48166f25f82f7e97633833203b59",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/a332848541211f8282ecaf3ed78c4d11367e58": "db184e207ef5f93e5d2874440ec63e42",
".git/objects/d7/da3b4573c1648f34897f3b1b7e34e0eb2ff2cb": "2e769351ce70232cf8f8bd3b2aa7fbe6",
".git/objects/d9/a79668aa320f506c5dbf0bd042f8a31602ef8c": "5c5db3a110d964bec2797db69d22ae39",
".git/objects/db/ff790ced9cbf146c4c1410c7e8b119e7be9ced": "d50c17969812452886ea84ccb4a9c53f",
".git/objects/dc/8830377d47535e05c9f6519659299a4eaaf0ae": "dd9d0ac8158f2a85bdebde9ba7a2ad6a",
".git/objects/dd/ac5a09b1326ecee1e129d9bd7f0fc63b9932c8": "338cebe98d1318b6e8bd75e05dee89b3",
".git/objects/dd/b790f956cdd59ca4e0e10eb0cdeb8961535f7e": "8749d85b5ecd6b1eaa0e1356346744ca",
".git/objects/de/0c4a0ca624452d230278ffbcf45c0a7bb188ad": "635aa81563a7c6d4b01105584bc4166d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/e39f5f249d2e0cd7dfc2e02d9d324240d45def": "37ccbab96645e0c777f23492b0dc6f12",
".git/objects/e1/49612768fab48922b1b9f53c7746f3cad41039": "e4e38179f6adf1b8d76c96c7b7f242e8",
".git/objects/e4/6ced4a27ce4a1793b4fb7000a3f8d28bcdb824": "16cb7ceb7661225e7a1f9d92cc971463",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/f9c05faf3cf3382691e3efb120e175e2830e2c": "4ebae8a4d778cd39ae0a2ba5f3c09d88",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/cf388f1e28eae054e82e4b75e2559c489128e6": "8330c0a1008981e812462644b3e85e71",
".git/objects/eb/6c843adb4d2df69ccbcb36c9cae94eadf0b78b": "636a8546350a2b6a9780c27465f81417",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cc7d4590afaca81bf256cd265d972764ec71f8": "9a7a8f3c3031c41e0018f8e0ea43236c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8c2a9dd2f6ce14a77041e498428e99a69ec2a3": "3f54a0fc311f7b8f50704bc0453a1a43",
".git/objects/f3/f22510cf09e46a28c17882fad00b9e7a975c67": "0092e7065e11f607d566745c9d36ede9",
".git/objects/f4/2deb4af5974c421d186a1d0539aab82461900b": "a13dd6f864f013934ca4ff9a57378683",
".git/objects/f8/9eeb7d21db8c2e186db429810d9fc2c36eca71": "5357d5d67012a293c32f8a38dc2fc3d2",
".git/objects/f9/f9cec85c0d66bcccae0637b496539ccc1bf034": "fa750a4c11480d2f2dc586c7653de7b4",
".git/objects/fa/b55f4d0fdbef5caec422c23a53987e528e1795": "fb61e28f99e310a0e6ac85407a694eb4",
".git/objects/fb/48381c9a3584fcb6a514801748c76852de13eb": "1be37634d30c135ba3a528cb29cfe7f6",
".git/objects/fc/2c0830b46e4ff93382cdc45db95070b8ed169b": "77bca3d9a9396609a5ea161152d0ce78",
".git/objects/fd/4b304d53eabcad7f36d2618aabea22de650fe9": "208c412f351c844102dbf4c25e99a2af",
".git/objects/fe/0074beb8a695a967c4c9f8ea85167849b4d3af": "ad58fb548f49a279618deeb51f34790b",
".git/objects/fe/55e03ab175912bc6fc08e951a740febb054988": "854aa27c462b8a4b7d41888adb808e91",
".git/objects/ff/4526993d3b6fdbd538ee581d153d1e27380b8f": "74a3d3ed2af27bf733104f33954e7b69",
".git/ORIG_HEAD": "da42c8a95897c126ec263b6d76236e02",
".git/refs/heads/main": "da42c8a95897c126ec263b6d76236e02",
".git/refs/remotes/origin/main": "da42c8a95897c126ec263b6d76236e02",
"29768e61": "d41d8cd98f00b204e9800998ecf8427e",
"3e1ed12b": "d41d8cd98f00b204e9800998ecf8427e",
"5ec55735": "d41d8cd98f00b204e9800998ecf8427e",
"841eec8b": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "5c81740badfc40221695ad0352e2270f",
"assets/AssetManifest.bin.json": "a6cbbe68e693dfef30c6bd840bbdd675",
"assets/AssetManifest.json": "b297131bebbb3881ecde22bd55bdd6da",
"assets/assets/images/Logo.png": "e20e33d94a044cc696c64742fd589ebd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fe6e18d85223ed99333eaa207c68f9a9",
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
"index.html": "e1c7ac02f98f594d49f3f3c1cfa721c3",
"/": "e1c7ac02f98f594d49f3f3c1cfa721c3",
"main.dart.js": "8a44334c9bd27812db8e5caa00151f98",
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
