$(document).ready(function () {
    $(".js-anchor-link").on("click", function (evt) {
        evt.preventDefault();
        const id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 500);
        $(".first__menu-wrap").css('display', 'none');
    });

    $(".js-tab-button").on("click", function () {
        const tabClass = $(this).attr("data-tab-class"),
            block = $('.' + tabClass);
        $(".js-tab-button").removeClass("fourth__main-header-btn-active");
        $(this).addClass("fourth__main-header-btn-active");
        $(".fourth__main-scheme").addClass("fourth__main-scheme-none");
        block.removeClass("fourth__main-scheme-none");
    });

    $("#phone").inputmask({"mask": "+7 (999) 999-99-99", placeholder: "+7 (___) ___-__-__"});

    $(".js-btn-nav").on("click", function () {

        $(".first__menu-wrap").css('display', 'flex');
        // $(".first__header").css('flex-direction', 'column');
        // $(".first__logo").css('align-self','flex-start');
        // $(".first__menu-btn-nav",).css('display', 'none');
    });

    $(".first__menu-wrap-btn").on('click', function () {
        $(".first__menu-wrap").css('display', 'none')
    });

});



