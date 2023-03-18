import { dataRestaurante, dataPizzaria } from './data.js'
import { renderHeader } from './header.js'
import { renderCardapio } from './cardapio.js'
import { render, bool } from './utils.js'

let img, img2, d;

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
                            </div>` :
        `<div class="section-content flex">
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
    return bool(page) ? history.map(val => { return renderSobrePizzaria(val) }).join('') :
        history.map((val, i) => { return renderSobreRestaurante(i, val) }).join('')
}

const renderContentEven = ({ contentEven }) => {
    const { str, str2, str3 } = contentEven
    return `<div class="overlay flex">
                <div class="title flex column">
                    <h3>
                        <span>${ str }</span>
                        <span>${ str2 }</span>
                    </h3>
                    <span><i class="fa-solid fa-chevron-down"></i></span>
                    <p>${ str3 }</p>
                </div>
            </div>`
}

const contentControl = (page) => {
    if (bool(page)) {
        img = 'bgtomate'
        img2 = 'bgfornoalenha'
        d = 'none'
    } else {
        img = 'bgingredientes'
        img2 = 'bgfeijoada'
        d = 'flex'
    }

    document.querySelector('main>.container>div:nth-child(2)').style.backgroundImage = `url(imgs/${ img }.png)`
    document.querySelector('main>.container>div:nth-child(4)').style.backgroundImage = `url(imgs/${ img2 }.png)`
    document.querySelector('.chefs-container').style.display = d
}


export const renderPage = (page) => {
    const data = page === 'restaurante' ? dataRestaurante() : dataPizzaria();
    renderHeader(page, data)
    render(renderCardapio(data), document.querySelector('.menu-container'))
    render(renderSobreTitle(page), document.querySelector('.sobre-title'))
    render(renderSobreContent(page, data), document.querySelector('.sobre-content'))
    render(renderContentEven(data), document.querySelector('main>.container>div:nth-child(4)'))
    contentControl(page)
}