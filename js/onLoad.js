import { renderPage } from './main.js'
import { addClass } from './utils.js'

(($) => {
    renderPage('restaurante')
    addClass($('.menu-logo a:first-child'), 'menu-selected')
})(jQuery)