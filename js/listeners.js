import { renderPage } from './main.js'
import {
    dislpayJ,
    toggleDisplay,
    removeStyle,
    cssSocialContainer,
    cssSocialItemPhone,
    cssPhone,
    cssHeader,
    cssNavImg,
    cssMenuLogo,
    cssLinkMenuLogo,
    cssHoverMenuLogo,
    cssNav,
    cssNavLink,
    cssNavLinkSecond,
    cssNavLinkNotLast
} from './styles.js'
import {
    lowercase,
    addClass,
    justLettersAndNumber,
    getText,
    setLink,
    getEl,
    fkey,
    menuListener,
    applyCSS,
    removeClassList,
    addClassList,
    toggleClass,
    getClass,
    slideToggle
} from './utils.js'

(($) => {
    //STICKY EFFECT
    const arr = ['#0053C2', '#ea4335', '#4267B2', '#25d366 ']
    const handleBool = (bool) => { return !bool }
    let boolNav = true
    let boolPhoneText = true
    let boolMSticky = false

    const applyBgAfterScroll = () => {
        $('.social-container a:nth-child(1)').css('background', arr[0])
        $('.social-container a:nth-child(2)').css('background', arr[1])
        $('.social-container a:nth-child(3)').css('background', arr[2])
        $('.social-container a:nth-child(4)').css('background', arr[1])
        $('.social-container a:nth-child(5)').css('background', arr[3])
        applyCSS($('.social-container a i'), { 'color': '#fff' })
    }
    const stickyEffect = () => {
            if ($(window).scrollTop() >= $('header').offset().top) {
                applyCSS($('.social-container'), cssSocialContainer)
                applyCSS($('.social-item:first-child'), cssSocialItemPhone)
                applyCSS($('.phone i'), cssPhone)
                applyCSS($('header'), cssHeader)
                applyCSS($('.menu-logo>div img'), cssNavImg)
                if (boolPhoneText) {
                    applyCSS($('.phone p'), toggleDisplay(false))
                    boolPhoneText = handleBool(boolPhoneText)
                }
                if (boolNav) {
                    applyCSS($('nav'), cssNav)
                    applyCSS($('nav a'), cssNavLink)
                    applyCSS($('nav a:nth-child(2)'), cssNavLinkSecond)
                    applyCSS($('nav a:not(:last-child)'), cssNavLinkNotLast)
                    applyCSS($('nav'), toggleDisplay(false))
                    boolNav = handleBool(boolNav)
                }
                if (!boolMSticky) {
                    applyCSS($('.menu-sticky'), toggleDisplay(true))
                    boolMSticky = handleBool(boolMSticky)
                }
                addClassList('.menu-selected', 'menu-selected2')
                removeClassList('.menu-selected', 'menu-selected')
                applyBgAfterScroll()
            } else {
                removeStyle($('.social-container'))
                removeStyle($('.social-container a'))
                removeStyle($('.social-container a i'))
                removeStyle($('.social-item:first-child'))
                removeStyle($('.phone i'))
                removeStyle($('.menu-logo'))
                removeStyle($('.menu-logo a'))
                removeStyle($('.menu-logo>div img'))
                if (!boolNav) {
                    removeStyle($('nav'))
                    applyCSS($('nav'), { 'display': 'flex' })
                    boolNav = handleBool(boolNav)
                }
                if (boolMSticky) {
                    applyCSS($('.menu-sticky'), toggleDisplay(false))
                    boolMSticky = handleBool(boolMSticky)
                }
                if (!boolPhoneText) {
                    removeStyle($('.phone p'))
                    boolPhoneText = handleBool(boolPhoneText)
                }
                removeStyle($('nav a'))
                removeStyle($('nav a:nth-child(2)'))
                removeStyle($('nav a:not(:last-child)'))
                addClassList('.menu-selected2', 'menu-selected')
                removeClassList('.menu-selected2', 'menu-selected2')
            }
            if ($(window).scrollTop() < 72) removeStyle($('header'))
            if ($(window).scrollTop() >= $('header').offset().top && $(window).scrollTop() < $('main').offset().top) {
                applyCSS($('.menu-logo'), cssMenuLogo)
                applyCSS($('.menu-logo a'), cssLinkMenuLogo($(window).scrollTop()))
                applyCSS($(`.${ getClass() }`), cssHoverMenuLogo(getClass()))
            }
            if ($(window).scrollTop() > $('main').offset().top) {
                applyCSS($('.menu-logo'), { 'background': 'var(--footer-border)' })
                applyCSS($('.menu-logo a '), cssLinkMenuLogo($(window).scrollTop()))
                applyCSS($(`.${ getClass() }`), cssHoverMenuLogo(getClass()))
            }
        }
        //FIM STICKY EFFECT


    //CUSTOM ALERT

    const dialogOverlay = $('#dialogoverlay');
    const dialogBoxHead = $('#dialogboxhead');
    const dialogBoxBody = $('#dialogboxbody');
    const dialogBoxFoot = $('#dialogboxfoot');
    const alertFadeIn = () => { dialogOverlay.fadeIn(); }
    const alertFadeOut = () => { dialogOverlay.fadeOut(); }
    const customAlert = (message, title) => {
        if (typeof title !== 'undefined') {
            displayJ(dialogBoxHead, 'block');
            dialogBoxHead.html(`<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${ title }`);
        }
        dialogBoxBody.html(message);
        dialogBoxFoot.html('<button class="pure-material-button-contained active border-radius">OK</button>');
        alertFadeIn();
    }

    //FIM CUSTOM ALERT

    let screen = $(window).width()

    //WINDOW EFFECTS
    $(window).scroll(stickyEffect)
    window.onresize = (e) => screen = $(window).width()


    //BREAKPOINTS
    if (screen > 767) {
        $('a.phone').on('click', ((e) => {
            navigator.clipboard.writeText(getText($('.phone')));
            customAlert('Telefone copiado para a area de transferência!');
            $('button.active').click(() => { alertFadeOut() })
        }))
    } else setLink('a.phone', `tel:${ getText($('.phone')) }`)

    const getMenuDisplay = () => { $('nav').css('display') }

    //MENU STICKY
    const btnMenu = $('.menu-sticky')
    const btnIcon = $('.menu-sticky i')
    btnMenu.on('click', ((e) => {
        e.stopPropagation();
        slideToggle($('nav'));
        toggleClass(btnIcon, 'fa-xmark')
        document.addEventListener('click', (e) => {
            const $trigger = $('nav')
            if ($trigger !== e.target && !$trigger.has(e.target).length) {
                $('nav').slideDown();
                if (btnIcon.hasClass('fa-xmark')) btnIcon.removeClass('fa-xmark')
            }
        })
    }))

    //MENU LOGO LINK CLICK    
    const menuLogoLink = $('.menu-logo a');
    menuLogoLink.on({
        mouseenter: (e) => {
            const target = e.currentTarget.className.split('-')
            applyCSS($(`.menu-logo-${ target[target.length - 1] }`), cssHoverMenuLogo(getClass()))
        },
        mouseleave: (e) => {
            const target = e.currentTarget.className.split('-')
            removeStyle($(`.menu-logo-${ target[target.length - 1] }`))
            applyCSS($(`.menu-logo-${ target[target.length - 1] }`), cssLinkMenuLogo($(window).scrollTop()))
        },
        click: (e) => {
            const target = lowercase(e.currentTarget.innerHTML)
            $(`.${ getClass() }`).removeClass(getClass())
            addClass($(`.menu-logo .menu-logo-${ target }`), getClass())
            removeStyle($(`.menu-logo-${ target === 'pizzaria' ? "restaurante" : "pizzaria" }`))
            applyCSS($(`.menu-logo a`), cssLinkMenuLogo($(window).scrollTop()))
            applyCSS($(`.${ getClass() }`), cssHoverMenuLogo(getClass()))
            renderPage(target)
        },
    })

    //NAV MENU LINK CLICK
    $(document).on('click', 'nav.menu a', ((e) => {
        const target = lowercase(e.currentTarget.className.split('-')[0])
        const b = $(window).scrollTop() > $('header').offset().top
        $('html, body').animate({ scrollTop: (document.querySelector(`.${ target }-container`).offsetTop) + 50 }, 2000);
        if (b) {
            slideToggle($('nav'))
            if (btnIcon.hasClass('fa-xmark')) btnIcon.removeClass('fa-xmark')
        }
    }))

    stickyEffect()
})(jQuery)

document.onkeydown = fkey
document.onkeypress = fkey
document.onkeyup = fkey
window.onscroll = menuListener
window.onresize = menuListener