//JQUERY
export const dislpayJ = (el, v) => {
    el.css('display', v)
}

export const toggleDisplay = (bool) => {
    return {
        'display': (bool ? 'block' : 'none'),
    }
}

export const removeStyle = (el) => {
    el.removeAttr('style')
}

export const cssHoverMenuLogo = (classe) => {
    const color = window.scrollY > document.querySelector('main').offsetTop ? 'secondary' : 'main'
    return classe === 'menu-selected2' ? {
        'color': `var(--${ color }-color)`,
        'border-bottom': `7px solid var(--${ color }-color)`,
        'border-top': `7px solid var(--${ color }-color)`,
    } : {
        'color': 'var(--third-color)',
        'border-bottom': '7px solid var(--third-color)',
    }
}

export const cssLinkMenuLogo = (h) => {
    const color = h > 70 && h < document.querySelector('main').offsetTop ? 'fourth-color' : h > document.querySelector('main').offsetTop ? 'secondary-border' : 'secondary'
    return {
        'color': `var(--${ color })`
    }
}

export const cssSocialContainer = {
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': 'auto',
    'height': '100vh',
    'flex-direction': 'column',
    'margin-left': '2%',
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
    'z-index': '999',
}

export const cssMenuLogo = {
    'padding': '2%',
    'border': '0 1px 1px 1px solid var(--main-color)',
    'border-bottom-left-radius': '7px',
    'border-bottom-right-radius': '7px',
    'box-shadow': '0px 2px 2px var(--main-box-shadow)',
    'background': 'var(--secondary-border)',
    'text-shadow': 'none',
}

export const cssNavImg = { 'max-width': '127px' }

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
export const cssNavLinkNotLast = {
    'border-bottom': '1px solid var(--footer-border)',
}

//VANILLA JS
export const applyImg = (query, val) => { document.querySelector(query).style.backgroundImage = `url(imgs/${ val }.png)` }
export const applyMargin = (query, val) => { document.querySelector(query).style.marginTop = val }
export const display = (query, val) => { document.querySelector(query).style.display = val }