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
    let boolControlSticky = true
    const arr = ['#0053C2', '#ea4335', '#4267B2', '#25d366 ']
    const btnSocialContainer = $('.button-social-container')
    const btnSocialContainerIcon = $('.button-social-container i')
    const btnMenu = $('.menu-sticky')
    const btnIcon = $('.menu-sticky i')
    const menuLogoLink = $('.menu-logo a')
    const getSocialContainerWidth = () => { return $('.social-container').css('width') }
    const getSocialContainerLeft = () => { return $('.social-container').css('left') }
    const handleBool = (bool) => { return !bool }

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

    const renderOnceTime = () => {
        applyCSS($('.button-social-container'), toggleDisplay(true))
        applyCSS($('.social-container'), cssSocialContainer(getSocialContainerWidth()))
        applyCSS($('.social-item:first-child'), cssSocialItemPhone)
        applyCSS($('.phone i'), cssPhone)
        applyCSS($('.phone p'), toggleDisplay(false))
        applyCSS($('header'), cssHeader)
        applyCSS($('.menu-sticky'), toggleDisplay(true))
        applyCSS($('nav'), toggleDisplay(false))
        navSticky()
    }
    const stickyEffect = () => {
            if ($(window).scrollTop() > 70) {
                applyBgAfterScroll()
                renderHoverInClass()
                applyCSS($('.button-social-container'), cssButtonSocialContainer())
                applyCSS($('.menu-logo'), cssMenuLogo())
                applyCSS($('.menu-logo>div img'), cssNavImg())
                applyCSS($('.header-content'), cssHeaderContent())
                if (boolControlSticky) {
                    renderOnceTime()
                    boolControlSticky = handleBool(boolControlSticky)
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
                removeStyle($('.phone p'))
                removeStyle($('.menu-logo'))
                removeStyle($('.menu-logo a'))
                removeStyle($('.menu-logo>div img'))
                removeStyle($('.menu-sticky'))
                    // applyCSS($('.menu-sticky'), toggleDisplay(false))
                removeStyle($('nav'))
                    // applyCSS($('nav'), cssDisplayFlex)
                removeStyle($('nav a'))
                removeStyle($('nav a:nth-child(2)'))
                removeStyle($('nav a:not(:last-child)'))
                removeStyle($('.header-content'))
                addClassList('.menu-selected2', 'menu-selected')
                removeClassList('.menu-selected2', 'menu-selected2')
                if (btnIcon.hasClass('fa-xmark')) btnIcon.removeClass('fa-xmark')
                if ($('.button-social-container i').hasClass('fa-caret-left')) {
                    $('.button-social-container i').removeClass('fa-caret-left')
                    $('.button-social-container i').addClass('fa-caret-right')
                }
                if (!boolControlSticky) boolControlSticky = handleBool(boolControlSticky)
            }
            if ($(window).scrollTop() < 72) {
                removeStyle($('header'))
                if ($('.nav-selected') !== null) removeClassList('.nav-selected', 'nav-selected')
            }
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
    stickyEffect()
    if ($(window).scrollTop() > 70) renderHoverInClass()
    $(window).scroll(stickyEffect)
    $(window).resize(stickyEffect)
    $(window).scroll(menuListener)
    $(window).resize(menuListener)
    $(window).scroll(contentControl)
    $(window).resize(contentControl)
    window.onresize = (e) => { screen = $(window).width() }

    //BREAKPOINTS
    if (screen > 767) {
        $('a.phone').on('click', ((e) => {
            navigator.clipboard.writeText(getText($('.phone')));
            customAlert('Telefone copiado para a area de transferência!');
            $('button.active').click(() => { alertFadeOut() })
        }))
    } else setLink('a.phone', `tel:${ getText($('.phone')) }`)

    if (screen < 551) {
        $(document).on('click', '.title-cat', ((e) => {
            const target = e.currentTarget.className.split(' ')
            const trigger = target[target.length - 1].split('-')
            const icon = e.currentTarget.children[0].children[1]
            if (icon.classList[icon.classList.length - 1] === 'fa-chevron-down') {
                icon.classList.remove('fa-chevron-down')
                icon.classList.add('fa-chevron-up')
            } else {
                icon.classList.remove('fa-chevron-up')
                icon.classList.add('fa-chevron-down')

            }
            trigger.shift()
            slideToggle($(`.container-${ trigger.join('-') }`))
        }))
    }

    btnSocialContainer.on('click', (e) => {
        const socialContainer = $('.social-container')
        toggleClass(btnSocialContainerIcon, 'fa-caret-left')
        socialContainer.animate(animateSocialContainer(getSocialContainerWidth()), 700)
    })

    //MENU STICKY
    btnMenu.on('click', ((e) => {
        e.stopPropagation();
        slideToggle($('nav'));
        toggleClass(btnIcon, 'fa-xmark')
        document.addEventListener('click', (e) => { if ($('nav') !== e.target && !$('nav').has(e.target).length) hideNavSticky() })
    }))

    //MENU LOGO LINK CLICK    
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
            renderPage(target)
            removeStyle($(`.menu-logo-${ target === 'pizzaria' ? "restaurante" : "pizzaria" }`))
            if ($(window).scrollTop() > 70) {
                navSticky()
                renderHoverInClass()
            }
        },
    })

    //NAV MENU LINK CLICK
    $(document).on('click', 'nav.menu a', ((e) => {
        const target = lowercase(e.currentTarget.className.split('-')[0])
        removeClassList('.nav-selected', 'nav-selected')
        $('html, body').animate(animateNavMenu(target), 1700);
        if ($(window).scrollTop() > 70) hideNavSticky()
    }))
})(jQuery)

document.onkeydown = fkey
document.onkeypress = fkey
document.onkeyup = fkey