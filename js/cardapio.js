import { bool, fixTitle } from './utils.js';

const renderMenuTitle = `<div class="menu-title title flex column">
                            <h3>
                                <span>Nosso</span>
                                <span>Menu</span>
                            </h3>
                            <span><i class="fa-solid fa-book-open"></i></span>
                        </div>`;

const renderTitleCat = (title) => {
    return `<div class="title-cat flex column trigger-${title}">
                <div class="flex">
                    <h4>${fixTitle(title)}</h4>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <span></span>
            </div>`;
};

const renderMenuItem = ({ title, desc }) => {
    return `<div class="menu-item">
                <p class="menu-item-title">${title}</p>
                <p class="menu-item-desc">${desc}</p>
            </div>`;
};

const renderCategoria = (title, arr) => {
    const bool = title === "pratos-da-casa";
    return `${renderTitleCat(title)}
            <div class="menu-item-container flex ${bool ? "" : "column"} container-${title}">
                ${arr.map(val => {
        return renderMenuItem(val);
    }).join("")}
            </div>`;
};

const renderLastMenuSection = (val) => {
    return `<div class="menu-section flex">
                <p>E mais...</p>
                <p>${val}</p>
            </div>`;
};

const menuSectionPizzaria = (aux) => {
    return `<div class="menu-section categoria flex column">
                ${aux}
            </div>`;
};

const renderMenuSection = (val, arr, page, aux) => {
    return `${bool(page) ? menuSectionPizzaria(aux) : ""}
            <div class="menu-section categoria flex column">
                ${renderCategoria(val, arr)}
            </div>`;
};

export const renderCardapio = (page, { cardapio }) => {
    const { "E mais...": more, ...obj } = cardapio;
    return `${renderMenuTitle}
                <div id="${page}" class="menu-content flex">
                    ${((ob) => {
            let html = "";
            let aux = "";
            Object.keys(ob).forEach((val, i) => {
                bool(page) && i < 2 ? aux += `<div class="menu-section-container">
                                                                ${renderCategoria(val, ob[val])}
                                                            </div>`
                    : html += renderMenuSection(val, ob[val], page, aux);
            });
            return html;
        })(obj)}
                    ${renderLastMenuSection(more)}
                </div>`;
};