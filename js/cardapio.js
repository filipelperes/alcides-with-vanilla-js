const renderMenuTitle = `<div class="menu-title title flex column">
                            <h3>
                                <span>Nosso</span>
                                <span>Menu</span>
                            </h3>
                            <span><i class="fa-solid fa-book-open"></i></span>
                        </div>`

export const renderCardapio = ({cardapio}) => {
    console.log(cardapio);
    return `${ renderMenuTitle }`
}