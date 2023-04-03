import { renderCardapio } from './cardapio.js';
import { dataPizzaria, dataRestaurante } from './data.js';
import { renderHeader } from './header.js';
import { applyImg, applyMargin, removeAttrStyle } from './styles.js';
import { bool, getClass, getWindowWidth, lowercase, menuListener, render } from './utils.js';

const renderSobreTitle = (v) => {
    return `<h3>
                <span>Sobre o</span>
                <span>Alcide's ${v}</span>
            </h3>
            <span><i class="fa-solid fa-utensils"></i></span>`;
};

const renderDescPizzaria = (desc, desc2, desc3) => {
    return `<p>${desc}</p>
            <p>${desc2}</p>
            <p>${desc3}</p>`;
};

const renderDescRestaurante = (title, desc, desc2) => {
    return `<h4>${title}</h4>
            <p>${desc}</p>
            <p>${desc2}</p>`;
};

const renderSobreRestaurante = ({ title, desc, desc2 }) => {
    return `<div class="section-content section-content-restaurante flex">
                <div class="section-content-text">
                    ${renderDescRestaurante(title, desc, desc2)}
                </div>
                <div class="section-content-img flex">
                        <figure><img src="imgs/historia1.png" alt=" "></figure>
                        <figure><img src="imgs/historia2.png" alt=" "></figure>
                </div>
            </div>`;
};

const renderSobre = (page, { title, desc, desc2, desc3 }) => {
    img = bool(page) ? "salao-pizzaria" : "camoranga2";
    return `<div class="section-content flex">
                    <div class="section-content-img flex">
                        <figure><img src="imgs/${img}.png" alt=" "></figure>
                    </div>
                    <div class="section-content-text">
                        ${bool(page) ? renderDescPizzaria(desc, desc2, desc3) : renderDescRestaurante(title, desc, desc2)}
                    </div>
                </div>`;
};

const renderSobreContent = (page, { history }) => {
    return history.map((val, i) => {
        return !bool(page) && i === 0 ? renderSobreRestaurante(val) : renderSobre(page, val);
    }).join('');
};

const renderContentEven = ({ contentEven }) => {
    const { str, str2, str3 } = contentEven;
    return `<div class="overlay flex">
                <div class="title flex column">
                    <h3>
                        <span>${str}</span>
                        <span>${str2}</span>
                    </h3>
                    <span><i class="fa-solid fa-chevron-down"></i></span>
                    <p>${str3}</p>
                </div>
            </div>`;
};

export const renderChefContent = `<div class="chef-card flex column">
                                <img src="imgs/chef-alcides.png" alt="">
                                <p class="name">Alcy Leite</p>
                                <p class="desc">Chef e fundador</p>
                            </div>
                            <div class="chef-card flex column">
                                <img src="imgs/chef-marilda.png" alt="">
                                <p class="name">Marilda Leite</p>
                                <p class="desc">Chef</p>
                            </div>`;

export const contentControl = () => {
    let img, img2, margin;
    const page = lowercase(document.querySelector(`.${getClass()}`).innerHTML);
    if (bool(page)) {
        img = 'bgtomate';
        img2 = 'bgfornoalenha';
        margin = `5%`;
        document.querySelector('.chefs-container').style.display = 'none';
    } else {
        img = 'bgingredientes';
        img2 = 'bgfeijoada';
        margin = `${(getWindowWidth() <= 550) ? '0'
            : (getWindowWidth() <= 850) ? '-30%'
                : (getWindowWidth() <= 900) ? '-29%'
                    : (getWindowWidth() <= 1000) ? '-27%'
                        : (getWindowWidth() < 1200) ? '-23%' : '-17%'}`;
        applyMargin('.section-content:nth-child(2)', `${(getWindowWidth() <= 700) ? '5%' : '0'}`);
        removeAttrStyle('.chefs-container');
    }

    applyMargin('main>.container>div:nth-child(2)', margin);
    applyImg(`main>.container>div:nth-child(2)`, img);
    applyImg(`main>.container>div:nth-child(4)`, img2);
    console.log(page);
    console.log(!bool(page));
};

export const renderPage = () => {
    const page = lowercase(document.querySelector(`.${getClass()}`).innerHTML);
    const data = !bool(page) ? dataRestaurante() : dataPizzaria();
    renderHeader(page, data);
    render(renderCardapio(page, data), document.querySelector('.menu-container'));
    render(renderSobreTitle(page), document.querySelector('.sobre-title'));
    render(renderSobreContent(page, data), document.querySelector('.sobre-content'));
    render(renderContentEven(data), document.querySelector('main>.container>div:nth-child(4)'));
    if (!bool(page)) render(renderChefContent, document.querySelector('.chef-content'));
    contentControl();
    menuListener();
};