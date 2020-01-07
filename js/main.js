$(function () {


// прелоадер

    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut('slow', function () {
            $(this).attr('style', 'display: none !important');
        });
    });





// кнопка наверх

$(document).ready(function () {
    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 300px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 300) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.scroll-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});



// открывающиеся картинки в галерее
    baguetteBox.run(".gallery");
});
