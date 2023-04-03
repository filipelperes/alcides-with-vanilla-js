import { customAlert } from './customAlert.js';
import { contentControl, renderChefContent, renderPage } from './main.js';
import {
    animateNavMenu,
    animateSocialContainer,
    applyCSS,
    cssButtonSocialContainer,
    cssHeader,
    cssHeaderContent,
    cssHoverMenuLogo,
    cssLinkMenuLogo,
    cssMenuLogo,
    cssNav,
    cssNavImg,
    cssNavLink,
    cssNavLinkNotLast,
    cssNavLinkSecond,
    cssPhone,
    cssSocialContainer,
    cssSocialItemPhone,
    removeStyle,
    toggleDisplay
} from './styles.js';
import {
    addClassList,
    getClass,
    getWindowHeight,
    getWindowWidth,
    isSticky,
    justLettersAndNumber,
    lowercase,
    menuListener,
    removeClassList,
    render,
    slideToggle,
    toggleClass
} from './utils.js';

(($) => {
    //UTILS
    const getSocialContainerWidth = () => { return $('.social-container').css('width'); };
    const getChefsContainerDisplay = () => { return $('.chefs-container').css('display'); };
    const handleBool = (bool) => { return !bool; };

    //STICKY EFFECT BOOLS
    let boolControlSticky = true;
    let boolSlick = true;
    let boolPhone = true;
    let boolTitleCat = true;

    //STICKY EFFECT CONTROLS
    const hideNavSticky = () => {
        applyCSS($('nav'), toggleDisplay(false));
        if (btnIcon.hasClass('fa-xmark')) btnIcon.removeClass('fa-xmark');
    };
    const navSticky = () => {
        applyCSS($('nav'), cssNav);
        applyCSS($('nav a'), cssNavLink);
        applyCSS($('nav a:nth-child(2)'), cssNavLinkSecond);
        applyCSS($('nav a:not(:last-child)'), cssNavLinkNotLast);
    };
    const renderHoverInClass = () => {
        applyCSS(menuLogoLink, cssLinkMenuLogo());
        applyCSS($(`.${getClass()}`), cssHoverMenuLogo());
    };
    const applyBgAfterScroll = () => {
        $('.social-container a:nth-child(1)').css('background', arr[0]);
        $('.social-container a:nth-child(2)').css('background', arr[1]);
        $('.social-container a:nth-child(3)').css('background', arr[2]);
        $('.social-container a:nth-child(4)').css('background', arr[1]);
        $('.social-container a:nth-child(5)').css('background', arr[3]);
        applyCSS($('.social-container a i'), { 'color': '#fff' });
    };
    const renderOnceTime = () => {
        applyCSS($('.button-social-container'), toggleDisplay(true));
        applyCSS($('.social-container'), cssSocialContainer(getSocialContainerWidth()));
        applyCSS($('.social-item:first-child'), cssSocialItemPhone);
        applyCSS($('.phone i'), cssPhone);
        applyCSS($('.phone p'), toggleDisplay(false));
        applyCSS($('header'), cssHeader);
        applyCSS($('.menu-sticky'), toggleDisplay(true));
        applyCSS($('nav'), toggleDisplay(false));
        navSticky();
    };


    //COLORS SOCIALS ICONS
    const arr = ['#0053C2', '#ea4335', '#4267B2', '#25d366 '];

    //ELEMENTOS
    const btnSocialContainer = $('.button-social-container');
    const btnSocialContainerIcon = $('.button-social-container i');
    const btnMenu = $('.menu-sticky');
    const btnIcon = $('.menu-sticky i');
    const menuLogoLink = $('.menu-logo a');

    //FUNCTIONS CLICKS
    const phoneClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        customAlert('Telefone copiado para a area de transferência!');
        navigator.clipboard.writeText(justLettersAndNumber($('.phone p').text()));
        $('#dialogoverlay').fadeIn();
        $(document).on('click', '.button-active', (e) => { $('#dialogoverlay').fadeOut(); });
        setTimeout(() => { $('#dialogoverlay').fadeOut(); }, 1700);
    };
    const titleCatClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget.className.split(' ');
        const trigger = target[target.length - 1].split('-');
        const icon = e.currentTarget.children[0].children[1];
        if (icon.classList[icon.classList.length - 1] === 'fa-chevron-down') {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
        trigger.shift();
        slideToggle($(`.container-${trigger.join('-')}`));
    };
    const btnSocialClick = (e) => {
        const socialContainer = $('.social-container');
        toggleClass(btnSocialContainerIcon, 'fa-caret-left');
        socialContainer.animate(animateSocialContainer(getSocialContainerWidth()), 700);
    };
    const btnMenuClick = (e) => {
        e.stopPropagation();
        slideToggle($('nav'));
        toggleClass(btnIcon, 'fa-xmark');
        document.addEventListener('click', (e) => { if (($('nav') !== e.target && !$('nav').has(e.target).length) || getWindowHeight() > 70) hideNavSticky(); });
    };
    const navMenuClick = (e) => {
        const target = lowercase(e.currentTarget.className.split('-')[0]);
        removeClassList('.nav-selected', 'nav-selected');
        $('html, body').animate(animateNavMenu(target), 1700);
        if (isSticky()) hideNavSticky();
    };


    //START STICKY EFFECT
    const stickyEffect = () => {
        if (isSticky()) {
            applyBgAfterScroll();
            applyCSS($('.button-social-container'), cssButtonSocialContainer());
            applyCSS($('.menu-logo'), cssMenuLogo());
            applyCSS($('.menu-logo>div img'), cssNavImg());
            applyCSS($('.header-content'), cssHeaderContent());
            if (boolControlSticky) {
                renderOnceTime();
                boolControlSticky = handleBool(boolControlSticky);
            }
            addClassList('.menu-selected', 'menu-selected2');
            removeClassList('.menu-selected', 'menu-selected');
            renderHoverInClass();
        } else {
            removeStyle($('.button-social-container'));
            removeStyle($('.social-container'));
            removeStyle($('.social-container a'));
            removeStyle($('.social-container a i'));
            removeStyle($('.social-item:first-child'));
            removeStyle($('.phone i'));
            removeStyle($('.phone p'));
            removeStyle($('.menu-logo'));
            removeStyle(menuLogoLink);
            removeStyle($('.menu-logo>div img'));
            removeStyle($('.menu-sticky'));
            removeStyle($('nav'));
            removeStyle($('nav a'));
            removeStyle($('nav a:nth-child(2)'));
            removeStyle($('nav a:not(:last-child)'));
            removeStyle($('.header-content'));
            addClassList('.menu-selected2', 'menu-selected');
            removeClassList('.menu-selected2', 'menu-selected2');
            if (btnIcon.hasClass('fa-xmark')) toggleClass(btnIcon, 'fa-xmark');
            if (btnSocialContainerIcon.hasClass('fa-caret-left')) toggleClass(btnSocialContainerIcon, 'fa-caret-left');
            if (!boolControlSticky) boolControlSticky = handleBool(boolControlSticky);
        }
        if (getWindowHeight() < 72) removeStyle($('header'));
        if (getWindowWidth() < 551 && isSticky()) {
            applyCSS($('.menu-logo>div'), toggleDisplay(false));
        } else removeStyle($('.menu-logo>div'));
        if (getWindowWidth() < 551 && getChefsContainerDisplay() !== 'none' && boolSlick) {
            $('.chef-content').slick({ zIndex: 0 });
            boolSlick = handleBool(boolSlick);
        }
        if (getWindowWidth() > 550 && getChefsContainerDisplay() !== 'none' && $('.chef-content').hasClass('slick-slider') && !boolSlick) {
            removeClassList('.slick-initialized', 'slick-initialized');
            removeClassList('.slick-slider', 'slick-slider');
            $('.chef-content').slick('unslick');
            render(renderChefContent, document.querySelector('.chef-content'));
            boolSlick = handleBool(boolSlick);
        }
        if (getWindowWidth() < 551 && !boolPhone) {
            $(document).off('click', '.phone', phoneClick);
            boolPhone = handleBool(boolPhone);
        } else {
            $('.phone').on('click', phoneClick);
            boolPhone = handleBool(boolPhone);
        }
        if (getWindowWidth() > 550 && !boolTitleCat) {
            $(document).off('click', '.title-cat', titleCatClick);
            boolTitleCat = handleBool(boolTitleCat);
        } else {
            $(document).on('click', '.title-cat', titleCatClick);
            boolTitleCat = handleBool(boolTitleCat);
        }
    };
    //END STICKY EFFECT

    //WINDOW EFFECTS
    stickyEffect();
    $(window).scroll(stickyEffect);
    $(window).resize(stickyEffect);
    $(window).scroll(menuListener);
    $(window).resize(menuListener);
    $(window).scroll(contentControl);
    $(window).resize(contentControl);

    //CLICKS
    //BUTTON SOCIAL
    btnSocialContainer.on('click', btnSocialClick);
    //MENU STICKY
    btnMenu.on('click', btnMenuClick);
    //NAV MENU LINK CLICK
    $(document).on('click', 'nav.menu a', navMenuClick);
    //MENU LOGO LINK
    menuLogoLink.on({
        mouseenter: (e) => {
            const target = e.currentTarget.className.split('-');
            applyCSS($(`.menu-logo-${target[target.length - 1]}`), cssHoverMenuLogo());
        },
        mouseleave: (e) => {
            const target = e.currentTarget.className.split('-');
            removeStyle($(`.menu-logo-${target[target.length - 1]}`));
            applyCSS($(`.menu-logo-${target[target.length - 1]}`), cssLinkMenuLogo());
        },
        click: (e) => {
            const target = lowercase(e.currentTarget.innerHTML);
            $(`.${getClass()}`).removeClass(getClass());
            $(`.menu-logo .menu-logo-${target}`).addClass(getClass());
            renderPage(target);
            removeStyle($(`.menu-logo-${target === 'pizzaria' ? "restaurante" : "pizzaria"}`));
            if (isSticky()) {
                navSticky();
                renderHoverInClass();
            }
        },
    });
})(jQuery);
