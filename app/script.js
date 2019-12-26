'use strict';

$(document).ready(function () {

    const options = {
        classNok: 'popup__main-field-error', /* CSS класс для полей с ошибкой */
        classOk: 'popup__main-field-success', /* CSS класс для полей без ошибки */
        required: [ /* Массив с полями формы, которые надо проверять */
            {
                selector: '[name=name]', /* Указываем какое поле нужно проверять */
                pattern: /^[а-яА-ЯЁё]{3,}$/, /* Регулярное выражение для проверки значения поля */
            },
            {
                selector: '[name=phone]',
                customFunc: function () {
                    /* Функция для проверки поля, должна вернуть true или false */
                    if ($("#phone").inputmask("isComplete")) {
                        //do something
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
              selector: '[name=agree]',
              customFunc: function () {
                  if ($(".js-agree").prop("checked")) {
                      return true;
                  } else {
                      return false;
                  }
              }
            }


        ],

        onSuccess: function (form) {
            /* Действие при успешной проверке всех полей, по умолчанию $(form).unbind('submit').submit(); */
            $.ajax({
                url: '/send', //url страницы (action_ajax_form.php)
                type:     "POST", //метод отправки
                dataType: "html", //формат данных
                data: $(form).serialize(),  // Сеарилизуем объект
                success: function(response) { //Данные отправлены успешно
                    console.log('ok');
                },
                error: function(response) { // Данные не отправлены
                    console.log('nok');
                    /*$('#exampleModalCenter').modal('hide');
                    // $('.js-finish').modal('show');*/
                    $(form).parent().html('<h4>Мы свяжемся с вами в ближайшее время</h4>')
                }
            });
        },
        onFalue: function (form) {
            /* Действие при не правильно заполненных или не заполненных полях формы */
        }
    };

    $('#exampleModalCenter').on('shown.bs.modal', function() {
        $('#name').trigger('focus');
    });

    $(".js-anchor-link").on("click", function (evt) {
        evt.preventDefault();
        const id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 500);
        $(".js-nav").removeClass('first__menu-wrap-active');
    });

    $(".js-tab-button").on("click", function (evt) {
        evt.preventDefault();
        const tabClass = $(this).attr("data-tab-class"),
            block = $('.' + tabClass);
        $(".js-tab-button").removeClass("fourth__main-header-btn-active");
        $(this).addClass("fourth__main-header-btn-active");
        $(".fourth__main-scheme").addClass("fourth__main-scheme-none");
        block.removeClass("fourth__main-scheme-none");
    });

    $("#phone").inputmask({"mask": "+7 (999) 999-99-99"});

    $(".js-btn-nav").on("click", function () {
        $(".js-nav").addClass('first__menu-wrap-active');
    });

    $(".js-menu-close").on('click', function () {
        $(".js-nav").removeClass('first__menu-wrap-active');
    });


    $('.js-form-1').validForm(options);

});



