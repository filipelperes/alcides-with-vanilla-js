import { getClass, getOffSetTop, getWindowHeight, getWindowWidth, isMain, isSticky, notNull } from './utils.js';

//JQUERY

export const toggleDisplay = (bool) => {
    return {
        'display': (bool ? 'block' : 'none'),
    };
};

export const applyCSS = (el, obj) => { el.css(obj); };

export const removeStyle = (el) => { el.removeAttr('style'); };

export const cssHoverMenuLogo = () => {
    const color = isMain() ? 'secondary' : 'main';
    return getClass() === 'menu-selected2' ? {
        'color': `var(--${color}-color)`,
        'border-bottom': `7px solid var(--${color}-color)`,
        'border-top': `7px solid var(--${color}-color)`,
    } : {
        'color': 'var(--third-color)',
        'border-bottom': '7px solid var(--third-color)',
    };
};

export const cssLinkMenuLogo = () => {
    const color = isSticky() && getWindowHeight() < getOffSetTop('main') ? 'fourth-color'
        : isMain() ? 'secondary-border'
            : 'secondary-color';
    return {
        'color': `var(--${color})`
    };
};

export const cssMenuLogo = () => {
    const bg = isMain() ? 'footer' : 'secondary';
    return {
        'border': '0 1px 1px 1px solid var(--main-color)',
        'border-bottom-left-radius': '7px',
        'border-bottom-right-radius': '7px',
        'box-shadow': '0px 2px 2px var(--main-box-shadow)',
        'background': `var(--${bg}-border)`,
        'text-shadow': 'none',
        'position': 'fixed',
        'top': '0',
    };
};

export const cssSocialContainer = (width) => {
    return {
        'position': 'fixed',
        'top': '50%',
        'transform': 'translateY(-50%)',
        'left': `-${parseInt(width) * 2}px`,
        'width': 'auto',
        'height': '60%',
        'flex-direction': 'column',
        'margin-left': '2%',
    };
};

export const cssButtonSocialContainer = () => {
    return {
        'background': `var(--${getWindowHeight() > (getOffSetTop('main') / 2) ? 'footer' : 'secondary'}-border)`,
    };
};

export const cssNavImg = () => {
    return { 'max-width': `${getWindowWidth() < 551 ? '70px' : '127px'}` };
};

export const cssHeaderContent = () => {
    return {
        'position': 'relative',
        'top': `${getWindowWidth() < 551 ? '40%'
            : getWindowWidth() < 410 ? '20%'
                : '55%'}`,
    };
};

export const cssSocialItemPhone = {
    'padding': '0',
    'width': '50px',
    'height': '50px',
    'line-height': '50px',
    'border-radius': '50%',
};

export const cssPhone = {
    'padding-right': '0px',
    'border-right': '0',
};

export const cssHeader = {
    'position': 'fixed',
    'top': '0',
    'margin-top': '0',
    'width': '100vw',
    'z-index': '9999',
};

export const cssNav = {
    'max-width': '250px',
    'position': 'fixed',
    'bottom': '127px',
    'right': '30px',
    'margin': '0',
    'flex-direction': 'column',
    'border': '1px solid var(--footer-border)',
    'text-shadow': 'none',
    'background': 'var(--secondary-border)',
};

export const cssNavLink = {
    'padding': '5% 0',
    'width': '100%',
    'color': 'var(--main-color)',
    'font-size': '1.57rem',
};

export const cssNavLinkSecond = {
    'border-right': '0',
    'border-left': '0',
};
export const cssNavLinkNotLast = { 'border-bottom': '1px solid var(--footer-border)', };

export const animateSocialContainer = (width) => {
    return {
        left: notNull('.social-container') && document.querySelector('.social-container').style.left < '0px' ?
            `${getWindowWidth() < 551 ? (parseInt(width) + 27) : parseInt(width)}`
            : `-${parseInt(width) * 2}`
    };
};

export const animateNavMenu = (target) => {
    return { scrollTop: getOffSetTop(`.${target}-container`) + 50 };
};

//VANILLA JS
export const applyImg = (query, val) => { notNull(query) ? document.querySelector(query).style.backgroundImage = `url(imgs/${val}.png)` : false; };
export const applyMargin = (query, val) => { notNull(query) ? document.querySelector(query).style.marginTop = val : false; };
export const removeAttrStyle = (query) => { document.querySelector(query).removeAttribute('style'); };