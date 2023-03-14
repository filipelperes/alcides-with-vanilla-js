(($) => {
    $(() => {
        const swiperProps = {
            loop: true,
            setWrapperSize: true,
            direction: 'vertical',
            spaceBetween: 36,
            touchEventsTarget: 'container',
            slidesPerView: 2,
            slidesPerGroup: 2,
            //autoHeight: true,
            freemode: true,

            navigation: {
                enable: false,
            },

            breakpoints: {
                // when window width is >= 768px
                768: {
                    freemode: false,
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    direction: 'horizontal',
                    navigation: {
                        enable: true,
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
            },
        }
        const swiper = new Swiper('.swiper-container', swiperProps);
        const btnProduto = $('.button-produto');

        //MOSTRAR EM QUAL PAGINA ESTÁ
        let url = window.location.href.split('/');
        $('nav.menu a[href=' + (url[url.length - 1] === "" ? 'home' : url[url.length - 1]) + ']').addClass('menu-selected');

        const slideToggle = (el) => {
            $(el).slideToggle();
        };

        const toggleClass = (el, c) => {
            $(el).toggleClass(c);
        };

        //PRODUTOS CLICK
        btnProduto.on('click', (e) => {
            let classe = e.currentTarget.className.split(' ')[0];
            slideToggle(`.${ classe }-swiper`);
            toggleClass(`.${ classe } i.fa-solid`, 'fa-chevron-down');
        });
    });
})(jQuery);