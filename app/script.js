$(document).ready(function () {
    $(".js-anchor-link").on("click", function (evt) {
        evt.preventDefault();
        const id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 500);
    });

    $(".js-tab-button").on("click", function () {
        const tabClass = $(this).attr("data-tab-class"),
            block = $('.' + tabClass);
        $(".js-tab-button").removeClass("fourth__main-header-btn-active");
        $(this).addClass("fourth__main-header-btn-active");
        $(".fourth__main-scheme").addClass("fourth__main-scheme-none");
        block.removeClass("fourth__main-scheme-none");
    });
});

