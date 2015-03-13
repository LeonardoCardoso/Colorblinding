var lc1306 = jQuery.noConflict(true);
(function ($) {
    $(function () {

        $(document).ready(function () {
            $('input[name="type"]:radio').change(
                function () {
                    console.log($('input[name=type]:checked', '#cvd_radios').val());
                }
            );
        });

    });
})(lc1306);