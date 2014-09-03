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


exports['iPad 2'] = function(test) {

  var s = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46'
      +' (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';

  var a = ua(s);

  test.done();
};
