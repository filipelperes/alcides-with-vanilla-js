(($) => {
    $(() => {
        const btnProduto = $('.button-produto');
        const btnPhone = $('a.phone');




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