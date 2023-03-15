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
                    touchEventsTarget: 'wrapper',
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
        const btnPhone = $('a.phone');

        const dialogOverlay = $('#dialogoverlay');
        const dialogBoxHead = $('#dialogboxhead');
        const dialogBoxBody = $('#dialogboxbody');
        const dialogBoxFoot = $('#dialogboxfoot');
        const alertFadeIn = () => { dialogOverlay.fadeIn(); }
        const alertFadeOut = () => { dialogOverlay.fadeOut(); }
        const customAlert = (message, title) => {
            dialogBoxHead.css('display', 'block');
            if (typeof title === 'undefined') dialogBoxHead.css('display', 'none');
            else dialogBoxHead.html(`<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${ title }`);

            dialogBoxBody.html(message);
            dialogBoxFoot.html('<button class="pure-material-button-contained active border-radius">OK</button>');
            alertFadeIn();
        }


        let screen = $(window).width();
        window.onresize = (e) => screen = $(window).width();

        if (screen > 767) {
            btnPhone.click((e) => {
                const number = e.currentTarget.children[1].innerHTML;
                navigator.clipboard.writeText(number.replace(/[^\w]/g, ""));
                customAlert('Telefone copiado para a area de transferência!');
                $('button.active').click(() => { alertFadeOut() })
            })
        } else document.querySelector('a.phone').href = 'tel:01333543130'


        //MOSTRAR EM QUAL PAGINA ESTÁ
        let url = window.location.href.split('/');
        $(`nav.menu a[href=${ url[url.length - 1] === "" ? 'home' : url[url.length - 1] }]`).addClass('menu-selected');

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