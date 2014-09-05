# Light-weight user-agent analyzer for [NodeJS](http://nodejs.org/)

I simply wanted to be able to determine:

* Browser vendor (Chrome, Firefox etc)
* Browser version (mainly to eliminate IE8 and earlier)
* Platform (mobile, tablet, desktop)

No prizes for this code! The other objective was to get my feet wet with GitHub with a simple starter project that certainly only I will ever use.


## Usage
```javascript
var ua = require("useragent-lite");
...
ua(req.headers["user-agent"]) ==> {
  // I use these just for logging
  browser: "...",
  platform: "...",
  device: "...",
  // the browser
  isChrome: [boolean],
  isFirefox: [boolean],
  isIE: [boolean],
  isOpera: [boolean],
  isSafari: [boolean],
  isUnknown: [boolean],
  // the browser version
  version: [integer, no subversions],
  // the platform
  isDesktop: [boolean],
  isPhone: [boolean],
  isTablet: [boolean]
};
```


## Author

Mark Florence (mflo999@gmail.com).


## License

(The MIT License)

Copyright (c) 2014 Mark Florence <mflo999@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Resources

- Visit the [author website](http://mflo.info).
- Follow [@mflo999](https://twitter.com/#!/mflo999) on Twitter for updates.
