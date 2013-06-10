// ==UserScript==
// @name          mediawiki-direct-image-links
// @description   Replaces links to images on mediawiki sites with direct links.
// @version       0.3
// @license       http://sam.zoy.org/wtfpl/COPYING
// @namespace     https://github.com/silverwind
// @updateURL     https://github.com/silverwind/mediawiki-direct-image-links/raw/master/mediawiki-direct-image-links.user.js
// @downloadURL   https://github.com/silverwind/mediawiki-direct-image-links/raw/master/mediawiki-direct-image-links.user.js
// @include       http*
// ==/UserScript==
"use strict";

var nodes = document.querySelectorAll("a.image[href*='File:']");
for (var i = 0, len = nodes.length; i < len; i++) {
    (function (dest, image) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", dest, true);
        xhr.responseType = "document";
        xhr.onload = function () {
            if (this.status === 200) {
                image.href = this.response.querySelectorAll(".fullImageLink > a")[0].href;
            }
        };
        xhr.send(null);
    })(nodes[i].href, nodes[i]);
}
