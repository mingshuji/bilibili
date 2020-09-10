(function ($) {
    $.fn.extend({
        Naver: function () {
            let ele = $(this);

            ele.find("li").mouseenter(function () {

                // 清除兄弟元素的效果
                $(this).siblings().stop();

                // 得到当前元素的偏移量
                let leftoffset = $(this).index() * $(this).width() + "px";

                ele.find(".line").animate({
                    "left": leftoffset
                })
            });
        }
    })
})(jQuery);

$(function () {
    $("#naver").Naver();
});