import { renderPage } from './main.js'
import { addClassList, removeClassList, menuListener } from './utils.js'

(() => {
    if (document.querySelector('.menu-selected') === null) addClassList(`.menu-logo-restaurante`, 'menu-selected')
    renderPage(document.querySelector('.menu-selected').innerHTML.toLowerCase() || 'restaurante')
})()

window.onload = menuListener