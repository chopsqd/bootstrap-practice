$(document).ready(function() {
    /* 
        WARNING! 

        The shit code is below! I'll recode it later...
        I know thats bull shit, but that's temporary solution 
    */
    $('.button[filter="wd"]').click(function() {
        if($(this).attr('isClicked') == 'false') {
            $('.button[filter]').attr('isClicked', 'false') 
            $(this).attr('isClicked', 'true') 

            $('.portfolio__list > div').hide(300)
            $('.portfolio__list > div[filter="wd"]').show(300);            
        }
    })

    $('.button[filter="ud"]').click(function() {
        if($(this).attr('isClicked') == 'false') {
            $('.button[filter]').attr('isClicked', 'false') 
            $(this).attr('isClicked', 'true') 

            $('.portfolio__list > div').hide(300)
            $('.portfolio__list > div[filter="ud"]').show(300);            
        }
    })

    $('.button[filter="mu"]').click(function() {
        if($(this).attr('isClicked') == 'false') {
            $('.button[filter]').attr('isClicked', 'false') 
            $(this).attr('isClicked', 'true') 

            $('.portfolio__list > div').hide(300)
            $('.portfolio__list > div[filter="mu"]').show(300);            
        }
    })

    $('.button[filter="all"]').click(function() {
        if($(this).attr('isClicked') == 'false') {
            $('.button[filter]').attr('isClicked', 'false') 
            $(this).attr('isClicked', 'true') 

            $('.portfolio__list > div').show(300);            
        }
    })
})
