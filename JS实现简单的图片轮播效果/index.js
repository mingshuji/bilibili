(function ($) {
    $.fn.extend({
        Slide: function (duration = 4000) {
            let ele = $(this);
            let current = 1;
            let count = ele.children("li").length;
            let timer;
            start();

            function start() {
                timer = setInterval(function () {
                    if (current > count - 1) {
                        current = 0;
                    }
                    for (let i = 0; i < count; i++) {
                        if (i == current) {
                            ele.find("li:eq(" + i + ")").show().siblings().hide();
                        }
                    }
                    current++;
                }, duration);
            }
            ele.hover(function () {
                clearInterval(timer);
                ele.find("li").stop();
            }, function () {
                start();
            });
        }

    })
})(jQuery);

$(function () {
    $("#slide").Slide(2000);
});