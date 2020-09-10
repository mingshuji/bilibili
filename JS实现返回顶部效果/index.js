(function ($) {
    $.fn.extend({
        GoTop: function () {
            let ele = $(this);
            let height = $(window).height();
            $(window).scroll(function () {
                if ($(window).scrollTop() > height) {
                    ele.fadeIn(500);
                } else {
                    ele.fadeOut(500);
                }
            });
            ele.click(function () {
                $("html,body").animate({
                    scrollTop: 0
                }, 200);
                return false;
            });

        }

    })
})(jQuery);

$(function () {
    $("#gotop").GoTop();
});