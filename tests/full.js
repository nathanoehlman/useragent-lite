/**
 *
 * @package     useragent-lite
 * @version     0.0.2
 * @copyright   Copyright (c) 2014 - All rights reserved.
 * @license     MIT License
 * @author      Mark Florence <mflo999@gmail.com>
 * @link        http://mflo.info
 *
 */

var ua = require("../lib/useragent-lite");

// generic browser tests

exports["Desktop Firefox 3"] = function(test) {
  var s = "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16) Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)";
  var a = ua(s);
  test.ok(a.isDesktop, "Desktop");
  test.ok(a.isFirefox, "Firefox");
  test.equal(a.version, 3, "version == 3");
  test.done();
};

exports["Desktop IE 10"] = function(test) {
  var s = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0))";
  var a = ua(s);
  test.ok(a.isDesktop, "Desktop");
  test.ok(a.isIE, "IE");
  test.equal(a.version, 10, "version == 10");
  test.done();
};

exports["Desktop IE 8"] = function(test) {
  var s = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; Media Center PC 6.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C)";
  var a = ua(s);
  test.ok(a.isDesktop, "Desktop");
  test.ok(a.isIE, "IE");
  test.equal(a.version, 8, "version == 8");
  test.done();
};

exports["Desktop Chrome 31"] = function(test) {
  var s = "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.16 Safari/537.36)";
  var a = ua(s);
  test.ok(a.isDesktop, "Desktop");
  test.ok(a.isChrome, "Chrome");
  test.equal(a.version, 31, "version == 31");
  test.done();
};

exports["Desktop Opera 12"] = function(test) {
  var s = "Opera/12.80 (Windows NT 5.1; U; en) Presto/2.10.289 Version/12.02";
  var a = ua(s);
  test.ok(a.isDesktop, "Desktop");
  test.ok(a.isOpera, "Opera");
  test.equal(a.version, 12, "version == 12");
  test.done();
};

exports["Desktop Edge 12"] = function(test) {
  var s = "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136";
  var a = ua(s);
  test.ok(a.isDesktop, "Desktop");
  test.ok(a.isEdge, "Edge");
  test.equal(a.version, 12, "version == 12");
  test.done();
};

exports["Desktop Chromium Edge 80"] = function(test) {
  var s = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36 Edg/80.0.361.66";
  var a = ua(s);
  test.ok(a.isDesktop, "Desktop");
  test.ok(a.isEdge, "Edge");
  test.equal(a.version, 80, "version == 80");
  test.done();
};

exports["Tablet Safari 6"] = function(test) {
  var s = "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25";
  var a = ua(s);
  test.ok(a.isSafari, "Safari");
  test.ok(a.isTablet, "Tablet");
  test.equal(a.version, 6, "version == 6");
  test.done();
};

// Chrome emulator tests

exports["Amazon Kindle Fire (First Generation)"] = function(test) {
  var s = "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.141.16-Gen4_11004310) AppleWebkit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true";
  var a = ua(s);
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Amazon Kindle Fire HDX 7\""] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; en-us; KFTHWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true";
  var a = ua(s);
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Amazon Kindle Fire HDX 9.9\""] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true";
  var a = ua(s);
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Apple iPad 1 / 2 / iPad Mini"] = function(test) {
  var s = "Mozilla/5.0 (iPad; CPU OS 4_3_5 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8L1 Safari/6533.18.5";
  var a = ua(s);
  test.ok(a.isSafari, "Safari");
  test.ok(a.isTablet, "Tablet");
  test.equal(a.version, 5, "Version == 5");
  test.done();
};

exports["Apple iPad 3 / 4"] = function(test) {
  var s = "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53";
  var a = ua(s);
  test.ok(a.isSafari, "Safari");
  test.ok(a.isTablet, "Tablet");
  test.equal(a.version, 7, "Version == 7");
  test.done();
};

exports["Apple iPhone 3GS"] = function(test) {
  var s = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(a.isSafari, "Safari");
  test.equal(a.version, 5, "Version == 5");
  test.done();
};

exports["Apple iPhone 4"] = function(test) {
  var s = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(a.isSafari, "Safari");
  test.equal(a.version, 5, "Version == 5");
  test.done();
};

exports["Apple iPhone 5"] = function(test) {
  var s = "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(a.isSafari, "Safari");
  test.equal(a.version, 7, "Version == 7");
  test.done();
};

exports["BlackBerry PlayBook"] = function(test) {
  var s = "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+";
  var a = ua(s);
  test.ok(a.isSafari, "Safari");
  test.ok(a.isTablet, "Tablet");
  test.equal(a.version, 7, "Version == 7");
  test.done();
};

exports["BlackBerry Z10"] = function(test) {
  var s = "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.done();
};

exports["BlackBerry Z30"] = function(test) {
  var s = "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.done();
};

exports["Google Nexus 10"] = function(test) {
  var s = "Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Safari/537.36";
  var a = ua(s);
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Google Nexus 4"] = function(test) {
  var s = "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Google Nexus 5"] = function(test) {
  var s = "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Google Nexus 7"] = function(test) {
  var s = "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Safari/537.36";
  var a = ua(s);
  test.ok(!a.isPhone, "! Phone");
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Google Nexus 7.2"] = function(test) {
  var s = "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Safari/537.36";
  var a = ua(s);
  test.ok(!a.isPhone, "! Phone");
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Google Nexus S"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Nexus S Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["HTC Evo, Touch HD, Desire HD, Desire"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.2; en-us; Sprint APA9292KT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["HTC One X. EVO LTE"] = function(test) {
  var s = "Mozilla/5.0 (Linux; Android 4.0.3; HTC One X Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["HTC Sensation, Evo 3D"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["LG Optimus 2X, Optimus 3D, Optimus Black"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.2; en-us; LG-P990/V08c Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MMS/LG-Android-MMS-V1.0/1.2";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["LG Optimus G"] = function(test) {
  var s = "Mozilla/5.0 (Linux; Android 4.0; LG-E975 Build/IMM76L) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["LG Optimus LTE, Optimus 4X HD"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.3; en-us; LG-P930 Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["LG Optimus One"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; LG-MS690 Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Motorola Defy, Droid, Droid X, Milestone"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.0; en-us; Milestone Build/ SHOLS_U2_01.03.1) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Motorola Droid 3, Droid 4, Droid Razr, Atrix 4G, Atrix 2"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.2; en-us; Droid Build/FRG22D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Motorola Droid Razr HD"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.3; en-us; DROID RAZR 4G Build/6.5.1-73_DHD-11_M1-29) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(!a.isPhone, "! Phone");
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Motorola Xoom, Xyboard"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2";
  var a = ua(s);
  test.ok(!a.isPhone, "! Phone");
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Nokia C5, C6, C7, N97, N8, X7"] = function(test) {
  var s = "NokiaN97/21.1.107 (SymbianOS/9.4; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebkit/525 (KHTML, like Gecko) BrowserNG/7.1.4";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Nokia Lumia 7X0, Lumia 8XX, Lumia 900, N800, N810, N900"] = function(test) {
  var s = "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 820)";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Samsung Galaxy Note"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.3; en-us; SAMSUNG-SGH-I717 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Samsung Galaxy Note 3"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Samsung Galaxy Note II"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Samsung Galaxy S III, Galaxy Nexus"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Samsung Galaxy S, S II, W"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.1; en-us; GT-I9000 Build/ECLAIR) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Samsung Galaxy S4"] = function(test) {
  var s = "Mozilla/5.0 (Linux; Android 4.2.2; GT-I9505 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.59 Mobile Safari/537.36";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Samsung Galaxy Tab"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.2; en-us; SCH-I800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(!a.isPhone, "! Phone");
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Samsung Galaxy Tab 7.7, 8.9, 10.1"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.2; en-us; SCH-I800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(!a.isPhone, "! Phone");
  test.ok(a.isTablet, "Tablet");
  test.done();
};

exports["Sony Xperia S, Ion"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 4.0; en-us; LT28at Build/6.1.C.1.111) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Sony Xperia Sola, U"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 2.3; en-us; SonyEricssonST25i Build/6.0.B.1.564) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

exports["Sony Xperia Z, Z1"] = function(test) {
  var s = "Mozilla/5.0 (Linux; U; Android 4.2; en-us; SonyC6903 Build/14.1.G.1.518) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};

// additional tests

exports["Firefox OS"] = function(test) {
  var s = "Mozilla/5.0 (Mobile; rv:28.0) Gecko/28.0 Firefox/28.0";
  var a = ua(s);
  test.ok(a.isPhone, "Phone");
  test.ok(!a.isTablet, "! Tablet");
  test.done();
};
