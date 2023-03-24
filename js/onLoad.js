import { renderPage } from './main.js';
import { addClassList, getClass, menuListener } from './utils.js';

(() => {
    if (document.querySelector(`.${getClass()}`) === null) addClassList(`.menu-logo-restaurante`, `${getClass()}`);
    renderPage();
})();

window.onload = menuListener;