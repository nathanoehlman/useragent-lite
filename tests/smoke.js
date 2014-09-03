/**
 *
 * @revision    $Id:$
 * @package     useragent-lite
 * @version     0.0.0
 * @copyright   Copyright (c) 2014 - All rights reserved.
 * @license     MIT License
 * @author      Mark Florence <mflo999@gmail.com>
 * @link        http://mflo.info
 *
 */

var ua = require("../lib/useragent-lite");

var smoke1 = ua("Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16) " +
                "Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)");
console.log("SMOKE#1 Firefox 3",
  "browser==>", smoke1.browser, "version==>", smoke1.version, "platform==>", smoke1.platform);

var smoke2 = ua("Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0))");
console.log("SMOKE#2 IE 10",
  "browser==>", smoke2.browser, "version==>", smoke2.version, "platform==>", smoke2.platform);

var smoke3 = ua("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; " +
                "Trident/4.0; SLCC2; .NET CLR 2.0.50727; Media Center PC 6.0; " +
                ".NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C)");
console.log("SMOKE#3 IE 8",
  "browser==>", smoke3.browser, "version==>", smoke3.version, "platform==>", smoke3.platform);

var smoke4 = ua("Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 " +
                "(KHTML, like Gecko) Chrome/31.0.1650.16 Safari/537.36");
console.log("SMOKE#4 Chrome 31",
  "browser==>", smoke4.browser, "version==>", smoke4.version, "platform==>", smoke4.platform);

var smoke5 = ua("Opera/12.80 (Windows NT 5.1; U; en) Presto/2.10.289 Version/12.02");
console.log("SMOKE#5 Opera 12",
  "browser==>", smoke5.browser, "version==>", smoke5.version, "platform==>", smoke5.platform);

var smoke6 = ua("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 " +
                "(KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25");
console.log("SMOKE#6 Safari 6",
  "browser==>", smoke6.browser, "version==>", smoke6.version, "platform==>", smoke6.platform);
