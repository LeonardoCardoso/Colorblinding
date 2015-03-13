var lc1306 = jQuery.noConflict(true);
(function ($) {

    $(function () {

        function setSelected() {
            var $radios = $('input:radio[name=type]');
            if ($radios.is(':checked') === false) {
                $radios.filter('[value=' + typeSelectedGlobal + ']').prop('checked', true);
            }
        }

        $(document).ready(function () {
            $('input[name="type"]:radio').change(
                function () {

                    var typeSelected = {typeSelected: $('input[name=type]:checked', '#cvd_radios').val()};
                    typeSelectedGlobal = typeSelected;
                    chrome.tabs.executeScript({
                        code: 'var typeSelected = ' + JSON.stringify(typeSelected)
                    }, function () {
                        chrome.tabs.executeScript({file: 'background.js'});
                    });

                }
            );
        });

    });

})(lc1306);