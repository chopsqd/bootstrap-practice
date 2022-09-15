$(document).ready(function () {
    /* PORTFOLIO */
    $('.button[filter]').click(function () {
        if ($(this).attr('isClicked') == 'false') {
            $('.button[filter]').attr('isClicked', 'false').removeClass('button--focused');
            $(this).attr('isClicked', 'true').addClass('button--focused');
            $('.portfolio__list > div').hide(300);
            $('.portfolio__list > div[filter=' + $(this).attr('filter') + ']').show(300);

            if ($(this).attr('filter') == 'all') {
                $('.button[filter]').attr('isClicked', 'false').removeClass('button--focused');
                $(this).attr('isClicked', 'true').addClass('button--focused');
                $('.portfolio__list > div').show(300);
            }
        }
    });

    /* SLIDER */
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        dotsClass: 'slider-dots',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    /* MENU */
    $('nav.menu a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html body').animate({
            scrollTop: $(target).offset().top
        }, 500);

        $('nav.menu a[href^="#"]').css({'color':'#212121'});
        $(this).css({'color':'#004bee'})
    })

    /* DROP DOWN MENU */
    $('.menu__icon').click(function() {
        $('nav').slideToggle(500)

        if($('.menu__icon').html() == '<i class="fas fa-times"></i>') {
            $(this).html('<i class="fas fa-bars"></i>')
        } else {
            $(this).html('<i class="fas fa-times"></i>')
        }
    })

    /* TO TOP */
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0)
           $('#toTop').fadeIn();
        else
           $('#toTop').fadeOut();
     });
     $('#toTop').click(function () {
        $('body,html').animate({
           scrollTop: 0
        }, 100);
     });
})
