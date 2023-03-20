import { renderPage, contentControl } from './main.js'
import {
    dislpayJ,
    applyMargin,
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
    cssNavLinkNotLast,
    cssDisplayFlex,
    cssHeaderContent,
    animateSocialContainer,
    animateNavMenu,
    animateSocialContainerBack,
    cssButtonSocialContainer
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
    let arr = ['#0053C2', '#ea4335', '#4267B2', '#25d366 ']
    let handleBool = (bool) => { return !bool }
    let boolNav = true
    let boolPhoneText = true
    let boolMSticky = false
    let boolButtonSocialContainer = false
    let boolSocialContainer = true
    const getSocialContainerWidth = () => { return $('.social-container').css('width') }
    const getSocialContainerLeft = () => { return $('.social-container').css('left') }

    const hideNavSticky = () => {
        applyCSS($('nav'), toggleDisplay(false))
        if (btnIcon.hasClass('fa-xmark')) btnIcon.removeClass('fa-xmark')
    }

    const navSticky = () => {
        applyCSS($('nav'), cssNav)
        applyCSS($('nav a'), cssNavLink)
        applyCSS($('nav a:nth-child(2)'), cssNavLinkSecond)
        applyCSS($('nav a:not(:last-child)'), cssNavLinkNotLast)
    }

    const renderHoverInClass = () => {
        applyCSS($('.menu-logo a '), cssLinkMenuLogo())
        applyCSS($(`.${ getClass() }`), cssHoverMenuLogo(getClass()))
    }

    const applyBgAfterScroll = () => {
        $('.social-container a:nth-child(1)').css('background', arr[0])
        $('.social-container a:nth-child(2)').css('background', arr[1])
        $('.social-container a:nth-child(3)').css('background', arr[2])
        $('.social-container a:nth-child(4)').css('background', arr[1])
        $('.social-container a:nth-child(5)').css('background', arr[3])
        applyCSS($('.social-container a i'), { 'color': '#fff' })
    }
    const stickyEffect = () => {
            if ($(window).scrollTop() > 70) {
                applyBgAfterScroll()
                renderHoverInClass()
                applyCSS($('.button-social-container'), cssButtonSocialContainer())
                applyCSS($('.social-container'), cssSocialContainer(getSocialContainerWidth()))
                applyCSS($('.social-item:first-child'), cssSocialItemPhone)
                applyCSS($('.phone i'), cssPhone)
                applyCSS($('header'), cssHeader)
                applyCSS($('.menu-logo'), cssMenuLogo())
                applyCSS($('.menu-logo>div img'), cssNavImg())
                applyCSS($('.header-content'), cssHeaderContent())
                if (!boolButtonSocialContainer) {
                    applyCSS($('.button-social-container'), toggleDisplay(true))
                    boolButtonSocialContainer = handleBool(boolButtonSocialContainer)
                }
                if (boolPhoneText) {
                    applyCSS($('.phone p'), toggleDisplay(false))
                    boolPhoneText = handleBool(boolPhoneText)
                }
                if (boolNav) {
                    navSticky()
                    applyCSS($('nav'), toggleDisplay(false))
                    boolNav = handleBool(boolNav)
                }
                if (!boolMSticky) {
                    applyCSS($('.menu-sticky'), toggleDisplay(true))
                    boolMSticky = handleBool(boolMSticky)
                }
                addClassList('.menu-selected', 'menu-selected2')
                removeClassList('.menu-selected', 'menu-selected')
            } else {
                removeStyle($('.button-social-container'))
                removeStyle($('.social-container'))
                removeStyle($('.social-container a'))
                removeStyle($('.social-container a i'))
                removeStyle($('.social-item:first-child'))
                removeStyle($('.phone i'))
                removeStyle($('.menu-logo'))
                removeStyle($('.menu-logo a'))
                removeStyle($('.menu-logo>div img'))
                if (boolButtonSocialContainer) {
                    removeStyle($('.button-social-container'))
                    boolButtonSocialContainer = handleBool(boolButtonSocialContainer)
                }
                if (!boolNav) {
                    removeStyle($('nav'))
                    applyCSS($('nav'), cssDisplayFlex)
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
                removeStyle($('.header-content'))
                addClassList('.menu-selected2', 'menu-selected')
                removeClassList('.menu-selected2', 'menu-selected2')
                if (btnIcon.hasClass('fa-xmark')) btnIcon.removeClass('fa-xmark')
            }
            if ($(window).scrollTop() < 72) removeStyle($('header'))
            if ($(window).width() < 500 && $(window).scrollTop() > 70) applyCSS($('.menu-logo>div'), toggleDisplay(false))
            else applyCSS($('.menu-logo>div'), toggleDisplay(true))
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



    const btnSocialContainer = $('.button-social-container')
    const btnSocialContainerIcon = $('.button-social-container i')
    btnSocialContainer.on('click', (e) => {
        const socialContainer = $('.social-container')
        toggleClass(btnSocialContainerIcon, 'fa-caret-left')
        socialContainer.animate(getSocialContainerLeft() !== '50px' ? animateSocialContainer(getSocialContainerWidth()) : animateSocialContainerBack(getSocialContainerWidth()), 1500)
    })

    //MENU STICKY
    const btnMenu = $('.menu-sticky')
    const btnIcon = $('.menu-sticky i')
    btnMenu.on('click', ((e) => {
        e.stopPropagation();
        slideToggle($('nav'));
        toggleClass(btnIcon, 'fa-xmark')
        document.addEventListener('click', (e) => { if ($('nav') !== e.target && !$('nav').has(e.target).length) hideNavSticky() })
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
            applyCSS($(`.menu-logo-${ target[target.length - 1] }`), cssLinkMenuLogo())
        },
        click: (e) => {
            const target = lowercase(e.currentTarget.innerHTML)
            $(`.${ getClass() }`).removeClass(getClass())
            addClass($(`.menu-logo .menu-logo-${ target }`), getClass())
            removeStyle($(`.menu-logo-${ target === 'pizzaria' ? "restaurante" : "pizzaria" }`))
            renderHoverInClass()
            renderPage(target)
            navSticky()
        },
    })

    //NAV MENU LINK CLICK
    $(document).on('click', 'nav.menu a', ((e) => {
        const target = lowercase(e.currentTarget.className.split('-')[0])
        removeClassList('.nav-selected', 'nav-selected')
        $('html, body').animate(animateNavMenu(target), 2000);
        if ($(window).scrollTop() > 70) hideNavSticky()
    }))

    stickyEffect()
})(jQuery)

document.onkeydown = fkey
document.onkeypress = fkey
document.onkeyup = fkey
window.onscroll = menuListener
window.onresize = menuListener
window.onresize = contentControl