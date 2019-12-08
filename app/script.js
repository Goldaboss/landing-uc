$(document).ready(function(){
    $(".js-anchor-link").on("click", function (evt) {
        evt.preventDefault();
        const id  = $(this).attr("href"),
              top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 500);
    })
});

