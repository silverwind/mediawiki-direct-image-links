// ==UserScript==
// @name          wikipedia-direct-image-links
// @description   Replaces links to images on Wikipedia with direct links.
// @version       0.1
// @license       http://sam.zoy.org/wtfpl/COPYING
// @namespace     https://github.com/silverwind
// @updateURL     https://github.com/silverwind/wikipedia-direct-image-links/raw/master/wikipedia-direct-image-links.user.js
// @downloadURL   https://github.com/silverwind/wikipedia-direct-image-links/raw/master/wikipedia-direct-image-links.user.js
// @include       http://*.wikipedia.org/wiki*
// @include       https://*.wikipedia.org/wiki*
// @require 	  https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==
$(".image").each(function(index) {
	var currentImage = $(this)

	$.get($(this).attr('href'), function(data){
	    var imgurl = $(".fullImageLink", data).find("a").attr("href");
	    $(currentImage).attr('href', imgurl);
	});
});

