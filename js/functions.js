$(function() {
    const btnMenu = $('header i.fa-solid')
    const btnMobile = $('.button-mobile')
    const btnProdutos = $('.button-produtos')
    const btnUnidade = $('.modal-unit button')
    const menu = $('nav.menu')
    const modal = $('.modal-unit')

    let screen = $(window).width()
    window.onresize = (e) => screen = $(window).width()

    //MOSTRAR EM QUAL PAGINA ESTÁ
    let url = window.location.href.split('/')
    $('nav.menu a[href=' + (url[url.length - 1] === "" ? 'home' : url[url.length - 1]) + ']').addClass('menu-selected')

    if (screen < 768) {

        //MENU RESPONSIVO
        btnMenu.on('click', (e) => {
            e.stopPropagation();
            $(this).find('nav.menu').slideToggle()
            btnMenu.toggleClass('fa-xmark')
            document.addEventListener('click', (e) => {
                const $trigger = btnMenu
                if ($trigger !== e.target && !$trigger.has(e.target).length) {
                    menu.slideUp()
                    if (btnMenu.hasClass('fa-xmark')) btnMenu.removeClass('fa-xmark')
                }
            })
        })

        //UNIDADES
        btnMobile.on('click', (e) => {
            e.stopPropagation();
            modal.fadeIn()
            document.addEventListener("click", (e) => {
                if (!e.target.closest(".modal-container")) modal.fadeOut()
            }, false)
        })

        //PRODUTOS
        btnProdutos.on('click', (e) => {
            let classes = e.currentTarget.children[1].className.split(' ')
            $(this).find('.produto-list-container ul.' + classes[0]).slideToggle()
            $('i.' + classes[0]).toggleClass('fa-chevron-up')
        })
    }

    //MODAL
    btnUnidade.on('click', e => {
        const target = e.currentTarget.className
        target === 'gja' ? handleUnit(target, 'pg') : handleUnit(target, 'gja')
        modal.fadeOut()
    })

    const handleUnit = (el1, el2) => {
        $('.unidades .' + el1).css('display', 'flex')
        $('.unidades .' + el2).css('display', 'none')
        modalSelected(el1)
        resetCSS(el2)
    }

    const modalSelected = (el) => {
        $('.modal-unit button.' + el).css({
            'background-color': 'var(--main-color)',
            'color': 'var(--secondary-color)',
            'font-weight': 'bold'
        })
    }

    const resetCSS = el => {
        $('.modal-unit button.' + el).css({
            'background-color': 'var(--secondary-color)',
            'color': 'var(--main-color)',
            'font-weight': 'normal'
        })
    }
})