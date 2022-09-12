$(document).ready(function() {
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
})
