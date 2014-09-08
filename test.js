/**
 *
 * @package     useragent-lite
 * @version     0.0.1
 * @copyright   Copyright (c) 2014 - All rights reserved.
 * @license     MIT License
 * @author      Mark Florence <mflo999@gmail.com>
 * @link        http://mflo.info
 *
 */

// run tests bypassing nodeunit cmd line

 var reporter = require("nodeunit").reporters.default;
 reporter.run(["tests/full.js"]);
