//JQUERY
export const dislpayJ = (el, v) => { el.css('display', v) }

export const toggleDisplay = (bool) => {
    return {
        'display': (bool ? 'block' : 'none'),
    }
}

export const removeStyle = (el) => { el.removeAttr('style') }

const isMain = () => { return window.scrollY > document.querySelector('main').offsetTop }
const isStickyBeforeMain = () => { return window.scrollY > 70 && window.scrollY < document.querySelector('main').offsetTop }

export const cssHoverMenuLogo = (classe) => {
    const color = isMain() ? 'secondary' : 'main'
    return classe === 'menu-selected2' ? {
        'color': `var(--${ color }-color)`,
        'border-bottom': `7px solid var(--${ color }-color)`,
        'border-top': `7px solid var(--${ color }-color)`,
    } : {
        'color': 'var(--third-color)',
        'border-bottom': '7px solid var(--third-color)',
    }
}

export const cssLinkMenuLogo = () => {
    const color = isStickyBeforeMain() ? 'fourth-color' : isMain() ? 'secondary-border' : 'secondary-color'
    return {
        'color': `var(--${ color })`
    }
}

export const cssMenuLogo = () => {
    const bg = isMain() ? 'footer' : 'secondary'
    return {
        'border': '0 1px 1px 1px solid var(--main-color)',
        'border-bottom-left-radius': '7px',
        'border-bottom-right-radius': '7px',
        'box-shadow': '0px 2px 2px var(--main-box-shadow)',
        'background': `var(--${ bg }-border)`,
        'text-shadow': 'none',
        'position': 'fixed',
        'top': '0',
    }
}

export const cssSocialContainer = (width) => {
    return {
        'position': 'fixed',
        'top': '50%',
        'transform': 'translateY(-50%)',
        'left': `-${ parseInt(width) * 2 }px`,
        'width': 'auto',
        'height': '60%',
        'flex-direction': 'column',
        'margin-left': '2%',
    }
}

export const cssButtonSocialContainer = () => {

    return {
        'background': `var(--${ window.scrollY > (document.querySelector('main').offsetTop / 2) ? 'footer' : 'secondary' }-border)`,
    }
}

export const cssNavImg = () => {
    return { 'max-width': `${ window.innerWidth < 551 ? '70px' : '127px'}` }
}

export const cssHeaderContent = () => {
    return {
        'position': 'relative',
        'top': `${ window.innerWidth < 501 ? '40%' : window.innerWidth < 410 ? '20%' : '55%' }`,
    }
}

export const cssSocialItemPhone = {
    'padding': '0',
    'width': '50px',
    'height': '50px',
    'line-height': '50px',
    'border-radius': '50%',
}

export const cssPhone = {
    'padding-right': '0px',
    'border-right': '0',
}

export const cssHeader = {
    'position': 'fixed',
    'top': '0',
    'margin-top': '0',
    'width': '100vw',
    'z-index': '9999',
}

export const cssNav = {
    'max-width': '250px',
    'position': 'fixed',
    'bottom': '127px',
    'right': '30px',
    'margin': '0',
    'flex-direction': 'column',
    'border': '1px solid var(--footer-border)',
    'text-shadow': 'none',
    'z-index': '999',
    'background': 'var(--secondary-border)',
}

export const cssNavLink = {
    'padding': '5% 0',
    'width': '100%',
    'color': 'var(--main-color)',
    'font-size': '1.57rem',
}

export const cssNavLinkSecond = {
    'border-right': '0',
    'border-left': '0',
}
export const cssNavLinkNotLast = { 'border-bottom': '1px solid var(--footer-border)', }

export const cssDisplayFlex = { 'display': 'flex', }

export const animateSocialContainer = (width) => {
    return { left: document.querySelector('.social-container') !== null && document.querySelector('.social-container').style.left < '0px' ? `${ window.innerWidth < 550 ? (parseInt(width) + 27) : parseInt(width) }` : `-${ parseInt(width) * 2 }` }
}


export const animateNavMenu = (target) => {
    return { scrollTop: (document.querySelector(`.${ target }-container`).offsetTop) + 50 }
}

//VANILLA JS
export const applyImg = (query, val) => { document.querySelector(query).style.backgroundImage = `url(imgs/${ val }.png)` }
export const applyMargin = (query, val) => { document.querySelector(query).style.marginTop = val }
export const display = (query, val) => { document.querySelector(query).style.display = val }