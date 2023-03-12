import { imgs } from 'imgs'
$(function() {
    const btnProduto = $('.button-produto')
    const loc = window.location.pathname;
    const dir = loc.substring(0, loc.lastIndexOf('/'));
    console.log(loc)
    console.log(dir)
    console.log(imgs)

    let screen = $(window).width()
    window.onresize = (e) => screen = $(window).width()

    //MOSTRAR EM QUAL PAGINA ESTÁ
    let url = window.location.href.split('/')
    $('nav.menu a[href=' + (url[url.length - 1] === "" ? 'home' : url[url.length - 1]) + ']').addClass('menu-selected')
        //PRODUTOS
    btnProduto.on('click', (e) => {
        let classes = e.currentTarget.children[1].className.split(' ')
        slideToggle('.produto-list-container ul.' + classes[0])
        toggleClass('i.' + classes[0], 'fa-chevron-down')
    })

    const handleUnit = (el1, el2) => {
        $('.unidades .' + el1).css('display', 'flex')
        $('.unidades .' + el2).css('display', 'none')
    }


    const slideToggle = (el) => {
        $(this).find(el).slideToggle()
    }

    const toggleClass = (el, c) => {
        el.toggleCLass(c)
    }
})