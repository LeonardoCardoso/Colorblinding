var lc1306 = jQuery.noConflict(true);

(function ($) {

    $(function () {

        chrome.storage.sync.get('colorblindingValue', function (obj) {

            var noValue = obj.colorblindingValue === null || obj.colorblindingValue === undefined;
            $("input[name=type][value=" + (noValue ? "deactive" : obj.colorblindingValue ) + "]").prop('checked', true);

            if (obj.colorblindingValue !== 'deactivate' && !noValue) {
                //console.log("internal " + obj.colorblindingValue);
                execute();
            }

        });

        $('input[name="type"]:radio').change(
            function () {

                var newValue = $('input[name=type]:checked', '#cvd_radios').val();
                chrome.storage.sync.set({'colorblindingValue': newValue}, function () {

                    if (newValue !== 'deactivate') {
                        chrome.tabs.executeScript({file: 'background.js'});
                    } else {
                        chrome.tabs.executeScript({file: 'reload.js'});
                    }

                });
            }
        );

    });

})(lc1306);