// ==UserScript==
// @name          mediawiki-direct-image-links
// @description   Replaces links to images on mediawiki sites with direct links.
// @version       0.2
// @license       http://sam.zoy.org/wtfpl/COPYING
// @namespace     https://github.com/silverwind
// @updateURL     https://github.com/silverwind/mediawiki-direct-image-links/raw/master/mediawiki-direct-image-links.user.js
// @downloadURL   https://github.com/silverwind/mediawiki-direct-image-links/raw/master/mediawiki-direct-image-links.user.js
// @include       http*
// @require       https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js
// ==/UserScript==
"use strict";

this.$ = this.jQuery = jQuery.noConflict(true);

(function ($) {
    $("a.image[href*='File:']").each(function () {
        var currentImage = $(this);
        $.get($(this).attr("href"), function (data) {
            var imgurl = $(".fullImageLink", data).find("a").attr("href");
            $(currentImage).attr("href", imgurl);
        });
    });
})(jQuery);