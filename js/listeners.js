import { renderPage } from './main.js'
import { lowercase, toggleClass } from './utils.js'

(($) => {
    const menuLogoLink = $('.menu-logo a');
    const navLink = $('nav.menu a');
    const headerContentH3 = $('.header-content h3')

    $('a').click((e) => { e.preventDefault(); })

    menuLogoLink.click((e) => {
        const target = lowercase(e.currentTarget.innerHTML)
        renderPage(target)
        $('.menu-selected').removeClass('menu-selected')
        toggleClass($(`.menu-logo .menu-logo-${ target }`), 'menu-selected')
    })
})(jQuery)