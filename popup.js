var lc1306 = jQuery.noConflict(true);

(function ($) {

    $(function () {

        chrome.storage.sync.get("value", function (obj) {

            $("input[name=type][value=" + (obj.value === null || obj.value === undefined ? "normal" : obj.value ) + "]").prop('checked', true);

        });

        $('input[name="type"]:radio').change(
            function () {

                chrome.storage.sync.set({'value': $('input[name=type]:checked', '#cvd_radios').val()}, function () {
                    chrome.tabs.executeScript({file: 'background.js'});
                });

            }
        );

    });

})(lc1306);