import { dataRestaurante, dataPizzaria } from './data.js'
import { renderHeader } from './header.js'
import { renderCardapio } from './cardapio.js'
import { render } from './utils.js'

const renderSobreTitle = (v) => {
    return `<h3>
                <span>Sobre o</span>
                <span>Alcide's ${ v }</span>
            </h3>
            <span><i class="fa-solid fa-utensils"></i></span>`
}

const renderSobrePizzaria = ({ desc, desc2, desc3 }) => {
    return `<div class="section-content flex">
                    <div class="section-content-img flex">
                        <figure><img src="imgs/salao-pizzaria.png" alt=" "></figure>
                    </div>
                    <div class="section-content-text">
                        <p>${ desc }</p>
                        <p>${ desc2 }</p>
                        <p>${ desc3 }</p>
                    </div>
                </div>`
}

const renderSobreRestaurante = (i, { title, desc, desc2 }) => {
    return i === 0 ? `<div class="section-content flex">
                            <div class="section-content-text">
                                <h4>${ title }</h4>
                                <p>${ desc }</p>
                                <p>${ desc2 }</p>
                            </div>
                            <div class="section-content-img flex">
                                    <figure><img src="imgs/historia1.png" alt=" "></figure>
                                    <figure><img src="imgs/historia2.png" alt=" "></figure>
                            </div>
                            </div>`
                            :`<div class="section-content flex">
                                <div class="section-content-img flex">
                                    <figure><img src="imgs/camoranga2.png" alt=" "></figure>
                                </div>
                                <div class="section-content-text">
                                    <h4>${ title }</h4>
                                    <p>${ desc }</p>
                                    <p>${ desc2 }</p>
                                </div>
                            </div>`
}

const renderSobreContent = (page, { history }) => {
    return page === 'pizzaria' ? history.map(val => { return renderSobrePizzaria(val) }).join('')
    : history.map((val, i) => { return renderSobreRestaurante(i, val) }).join('')
}


export const renderPage = (page) => {
    const data = page === 'restaurante' ? dataRestaurante() : dataPizzaria();
    renderHeader(page, data)
    render(renderCardapio(data), document.querySelector('.menu-container'))
    render(renderSobreTitle(page), document.querySelector('.sobre-title'))
    render(renderSobreContent(page, data), document.querySelector('.sobre-content'))
    if(page === 'restaurante') {
        document.querySelector('main>.container>div:nth-child(2)').style.backgroundImage = 'url(imgs/bgingredientes.png)'
        document.querySelector('main>.container>div:nth-child(4)').style.backgroundImage = 'url(imgs/bgfeijoada.png)'
        document.querySelector('.chefs-container').style.display = "flex";
    } else {
        document.querySelector('main>.container>div:nth-child(2)').style.backgroundImage = 'url(imgs/bgtomate.png)'
        document.querySelector('main>.container>div:nth-child(4)').style.backgroundImage = 'url(imgs/bgfornoalenha.png)'
        document.querySelector('.chefs-container').style.display = "none";
    }
}