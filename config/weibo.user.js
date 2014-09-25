// ==UserScript==
// @name             User Script for Weibo
// @namespace        lifesinger
// @description      Do boring things automatically, and free your fingers.
// @author           lifesinger@gmail.com
// @source           http://lifesinger.github.io/config/weibo.user.js
// @match            http://weibo.com/*
// @version          1.0.0
// ==/UserScript==

(function() {

    // Hide unwanted things
    importStyle(
            '#Box_right { display: none }' +
            '#pl_leftnav_app { display: none }' +
            '#pl_content_publisherTop .S_textb { display: none }'
    );


    // Helpers

    function importStyle(cssText) {
        var element = document.createElement('style')
        element.appendChild(document.createTextNode(cssText))
        document.head.appendChild(element)
    }

})();