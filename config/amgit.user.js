// ==UserScript==
// @name           Yunshipei Git Style Improve
// @namespace      minwe
// @description    优化 git.yunshipei.com 显示
// @version        1.0.2
// @author         Minwe@yunshipei.com
// @source         https://minwe.github.io/config/amgit.user.js
// @include        http://git.yunshipei.net/*
// @match          http://git.yunshipei.net/*
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "http://cdn.staticfile.org/jquery/2.1.0/jquery.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

// the guts of this userscript
function main() {
    // Note, jQ replaces $ to avoid conflicts.

}

// load jQuery and execute the main function
// addJQuery(main);


(function(doc) {
    // Hide unwanted things
    importStyle(
        // logo
            '.ui_color header .app_logo a h1 {background: url(/uploads/group/avatar/28/footerLogo.png) no-repeat center center; background-size: 36px;} \n' +
            '.well-list li {-webkit-transition: all 0.3s; transition: all 0.3s;}' +
            '.well-list li:not(.today):nth-child(2n) {background-color: #f8f8f8;}' +
            '.issues-list .issue {padding:15px 10px;}' +
            '.ui-box {border-radius:3px;}' +
            '.well-list li:hover {border-bottom-color: #dedede;background: #d9edf7!important;}' +
            '.ui-box .row_title {font-size: 16px;}' +
            '.wiki .highlight, .note-body .highlight {margin: 15px 0; border-radius: 3px;}' +
            '.white, .white .hljs, .white pre {background: #fafafa;}' +
            'p {margin:1em 0;}' +
            '.highlighted-data pre {font-size: 12px !important;line-height: 19px !important;}' +
            '.wiki ul, .wiki ol {margin: 15px 0!important; padding-left: 30px; line-height: 1.6;}' +
            '.wiki ul ol,.wiki ul ul, .wiki ol ol,.wiki ol ul { margin-top: 0!important; margin-bottom: 0!important;}' +
            '.wiki>*:first-child {margin-top: 0 !important;}' +
            '.wiki>*:last-child {margin-bottom: 0 !important;}' +
            // tree
            '#tree-slider {box-shadow: 0 0 1px #666; border-radius: 3px; }' +
            '#tree-slider thead {background: #e6f1f6;}' +
            '#tree-slider thead th:first-child {border-top-left-radius:3px;}' +
            '#tree-slider thead th:last-child {border-top-right-radius:3px;}' +
            '.tree-holder .tree-table tr:last-child:hover td {background: #d9edf7;border-top: 1px solid #ADF;border-bottom: none!important;}' +
            '.tree-item-file-name img { display: none;}' +
            '.tree-item-file-name i[class*="icon"] {color: #777; margin-right: 3px;}' +
            '.readme-holder {border: 1px solid #ccc; padding-top: 0; border-radius: 3px;}' +
            '.readme-holder .readme-file-title {border-bottom: 1px solid #ccc;padding: 12px;margin: 0;background-color: #f7f7f7;border-top-left-radius: 3px;border-top-right-radius: 3px;}' +
            '.readme-holder .wiki {padding: 30px;}' +
            '.file-holder {border-radius: 3px;}' +
            '.file-holder .file-title {border-top-left-radius: 3px;border-top-right-radius: 3px;}' +
            '.file-holder .file-content {border-bottom-left-radius: 3px;border-bottom-right-radius: 3px;}' +
                '.diff-file, .common-note-form{ border-radius: 3px;}' +
                '.highlight code {word-break: break-word;}'
    );

    // Helpers
    function importStyle(cssText) {
        var element = doc.createElement('style');
        element.appendChild(doc.createTextNode(cssText));
        doc.head.appendChild(element);
    }


    var folderIcon = document.createElement('i'),
        fileIcon = document.createElement('i');
    folderIcon.className = 'icon-folder-open';
    fileIcon.className = 'icon-file-text';

    function resetIcon() {
        var folders = doc.querySelectorAll('#tree-content-holder .tree-item-file-name img[alt="File dir"]'),
            files = doc.querySelectorAll('#tree-content-holder .tree-item-file-name img[alt="File txt"]');

        for (var i = 0; i < folders.length; i++) {
            folders[i].parentNode.insertBefore(folderIcon.cloneNode(true), folders[i]);
        }

        for (var j = 0; j < files.length; j++) {
            files[j].parentNode.insertBefore(fileIcon.cloneNode(true), files[j]);
        }

        return true;
    }

    // set tree icon
    doc.querySelector('#tree-content-holder') && resetIcon();

    // TurboLinks is used in gitLab: https://github.com/rails/turbolinks
    doc.addEventListener('page:change', function() {
        doc.querySelector('#tree-content-holder') && resetIcon() && console.log('page changed');
        ;
    });
})(document);

