$(function() {
    let screen = $(window).width()
    window.onresize = (e) => screen = $(window).width()

    //MOSTRAR EM QUAL PAGINA ESTÁ
    let url = window.location.href.split('/')
    url[url.length - 1] === "" ? $("nav.menu a[href='home']").addClass('menu-selected') : $('nav.menu a[href=' + url[url.length - 1] + ']').addClass('menu-selected')

    if (screen < 768) {

        //MENU RESPONSIVO
        $('.fa-bars').click((e) => {
            e.stopPropagation();
            $(this).find('nav.menu').slideToggle()
            $('i.fa-bars').toggleClass('fa-xmark')
            document.addEventListener('click', (e) => {
                const $trigger = $('i.fa-bars')
                if ($trigger !== e.target && !$trigger.has(e.target).length) {
                    $('nav.menu').slideUp()
                    if ($('i.fa-bars').hasClass('fa-xmark')) $('i.fa-bars').removeClass('fa-xmark')
                }
            })
        })

        //PRODUTOS
        $('.button-produtos').on('click', (e) => {
            let classes = e.currentTarget.children[1].className.split(' ')
            $(this).find('.produto-list-cont ul.' + classes[0]).slideToggle()
            $('i.' + classes[0]).toggleClass('fa-chevron-up')
        })


        //UNIDADES
        $('.button-mobile').on('click', (e) => {
            e.stopPropagation();
            $('.modal-unit').fadeIn()
            document.addEventListener("click", (e) => {
                if (!e.target.closest(".modal-container")) $('.modal-unit').fadeOut()
            }, false)
        })
    }

    //MODAL
    $('.modal-unit button').on('click', e => {
        const target = e.currentTarget.className
        if (target === 'gja') handleUnit(target, 'pg')
        else handleUnit(target, 'gja')
        $('.modal-unit').fadeOut()
    })

    const handleUnit = (el1, el2) => {
        console.log(el1, el2)
        $('.unidades .' + el1).css('display', 'flex')
        $('.unidades .' + el2).css('display', 'none')
        resetCSS(el2)
        modalSelected(el1)
    }

    const modalSelected = (el) => {
        $('.modal-unit button.' + el).css('background-color', '#ca5c47')
        $('.modal-unit button.' + el).css('color', '#fff')
        $('.modal-unit button.' + el).css('font-weight', 'bold')
    }

    const resetCSS = el => {
        $('.modal-unit button.' + el).css('background-color', '#fff')
        $('.modal-unit button.' + el).css('color', '#ca5c47')
        $('.modal-unit button.' + el).css('font-weight', 'normal')
    }
})