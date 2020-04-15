$(document).ready( function() {

    /**
     * Предотвращение расширение родительского контейнера для навигации
     */
    
    $('.navigation__item').hover( function() {
        $(this).css({'width': $(this).width(), 'font-weight': '600'})
    }, function() {
        $(this).removeAttr('style')
    })

    /**
     * Поисковая панель
     */
    $('#js-searchWidget').click( function() {
        // TODO: Выставить проверку размера экрана при достижении коллапс брейкпоинта
        const width = $(this).closest('.navigation').width()

        $(this).children('.search__wrapper').addClass('active')
        $(this).find('input').css('width', width).focus()
    })
    $('#js-searchWidget').find('input').blur( function() {
        $(this).removeAttr('style').closest('.search__wrapper').removeClass('active')
    })

    /**
     * Swiper
     */
    /**
     * Swiper Main
     */
    $('.slider').each( function() {
        let swiper = new Swiper($(this).find('.swiper-container'), {
            loop: true,
            slidesPerView: 1,
            pagination: {
                el: $(this).find('.swiper-pagination')
            }
        })
    })
})