"use strict";

$(document).ready(function () {
  $(".js-anchor-link").on("click", function (evt) {
    evt.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top;
    $("body,html").animate({
      scrollTop: top
    }, 500);
  });
  $(".js-tab-button").on("click", function () {
    var tabClass = $(this).attr("data-tab-class"),
        block = $('.' + tabClass);
    $(".js-tab-button").removeClass("fourth__main-header-btn-active");
    $(this).addClass("fourth__main-header-btn-active");
    $(".fourth__main-scheme").addClass("fourth__main-scheme-none");
    block.removeClass("fourth__main-scheme-none");
  });
  $("#phone").inputmask({
    "mask": "+7 (999) 999-99-99",
    placeholder: "+7 (___) ___-__-__"
  });
  $(".js-btn-free").on("click", function () {
    $(".popup").removeClass("popup-hidden");
  });
  $(".js-close-modal").on("click", function () {
    $(".popup").addClass("popup-hidden");
  });
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      $(".popup").addClass("popup-hidden");
    }
  });
});