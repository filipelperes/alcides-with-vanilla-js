import { applyImg } from './styles.js';
import { bool, render, setLink } from './utils.js';

const setLinks = (page) => {
    if (bool(page)) {
        setLink('a.gmaps', "https://goo.gl/maps/UWPdqoL6ta32fPXL6");
    } else {
        setLink('a.gmaps', "https://goo.gl/maps/3VHTKWpewvyVRHph8");
    }
};

const renderLink = (val) => {
    return `<a class="${val}-link">${val}</a>`;
};

const renderNavMenu = (arr) => {
    return arr.map((val, i) => {
        return renderLink(val);
    }).join('');
};

const renderHeaderContent = (val) => {
    return `<h1>Bem-vindo!</h1>
            <h2>Ao alcide's ${val}</h2>
            ${bool(val) ? '' : '<h3>Alcide’s Restaurante, amor que se prova há mais de 40 anos.</h3>'}`;
};

const titlePage = (val) => { document.title = val; };

export const renderHeader = (page, { 'title-page': docTitle, 'nav-menu': menuHeader, tel, ...obj }) => {
    titlePage(docTitle);
    applyImg('div.header', page);
    render(tel, document.querySelector('.phone p'));
    render(renderNavMenu(menuHeader), document.querySelector('nav.menu'));
    render(renderHeaderContent(page), document.querySelector('.header-content'));
    setLinks(page);
};