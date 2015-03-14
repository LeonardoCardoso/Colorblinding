var lc1306 = jQuery.noConflict(true);
(function ($) {

    $(function () {

        $(document).ready(function () {
            $('input[name="type"]:radio').change(
                function () {
                    var info = {
                        typeSelected: $('input[name=type]:checked', '#cvd_radios').val()
                    };
                    chrome.tabs.executeScript({
                        code: 'var info = ' + JSON.stringify(info)
                    }, function () {
                        chrome.tabs.executeScript({file: 'background.js'});
                    });

                }
            );
        });

    });

})(lc1306);