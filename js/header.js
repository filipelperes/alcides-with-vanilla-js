import { render, bool } from './utils.js'

const renderLink = (val) => {
    return `<a>${ val }</a>`
}

const renderNavMenu = (arr) => {
    return arr.map(val => {
        return renderLink(val)
    }).join('')
}

const renderHeaderContent = (val) => {
    return `<h1>Bem-vindo!</h1>
            <h2>Ao alcide's ${ val }</h2>
            ${ bool(val) ? '' : '<h3>Alcide’s Restaurante, amor que se prova há mais de 40 anos.</h3>' }`
}

const titlePage = (val) => { document.title = val }

export const renderHeader = (page, { 'title-page': docTitle, 'nav-menu': menuHeader, tel, ...obj }) => {
    titlePage(docTitle);
    document.querySelector('div.header').style.backgroundImage = `url(imgs/${ page }.png)`
    document.querySelector('.phone p').innerHTML = tel;
    render(renderNavMenu(menuHeader), document.querySelector('nav.menu'));
    render(renderHeaderContent(page), document.querySelector('.header-content'));
}