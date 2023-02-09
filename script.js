new Swiper('.swiper',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        480:{
            slidesPerView:2,
        },
        992:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:4,
        },
    }
});