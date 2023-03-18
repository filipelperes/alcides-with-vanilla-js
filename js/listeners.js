import { renderPage } from './main.js'
import { lowercase, addClass, justLettersAndNumber, getText, setLink, getEl } from './utils.js'

(($) => {
    //CUSTOM ALERT
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

    const menuLogoLink = $('.menu-logo a');
    const phoneNumber = $('a.phone')


    let screen = $(window).width();
    window.onresize = (e) => screen = $(window).width();

    if (screen > 767) {
        phoneNumber.click((e) => {
            navigator.clipboard.writeText(getText($('.phone')));
            customAlert('Telefone copiado para a area de transferência!');
            $('button.active').click(() => { alertFadeOut() })
        })
    } else setLink('a.phone', `tel:${ getText($('.phone')) }`)


    menuLogoLink.click((e) => {
        const target = lowercase(e.currentTarget.innerHTML)
        $('.menu-selected').removeClass('menu-selected')
        addClass($(`.menu-logo .menu-logo-${ target }`), 'menu-selected')
        renderPage(target)
    })

    $(document).on('click', 'nav.menu a', ((e) => {
        const target = lowercase(e.currentTarget.className.split('-')[0])
        $('html, body').animate({ scrollTop: document.querySelector(`.${ target }-container`).offsetTop }, 2000);
    }))
})(jQuery)

document.onkeydown = fkey
document.onkeypress = fkey
document.onkeyup = fkey

function fkey(e) {
    if (e.keyCode == 116) {
        // e.preventDefault()
        renderPage(lowercase(document.querySelector('.menu-selected').innerHTML))
    }
}