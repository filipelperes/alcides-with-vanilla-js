//RENDER
export const render = (template, elem) => {
    // Set rendering element for the component
    if (typeof template === 'function') {
        template.elem = elem
    }

    // If elem is an element, use it.
    // If it's a selector, get it.
    elem = typeof elem === 'string' ? document.querySelector(elem) : elem
    if (!elem) return

    // Get the template
    template = (typeof template === 'function' ? template(template.state) : template)
    if (typeof template !== 'string') return

    // Render the template into the element
    if (elem.innerHTML === template) return
    elem.innerHTML = template

    // Dispatch a render event
    if (typeof window.CustomEvent === 'function') {
        var event = new CustomEvent('render', {
            bubbles: true
        })
        elem.dispatchEvent(event)
    }

    // Return the elem for use elsewhere
    return elem
}

//BOOLEAN
export const bool = (page) => { return page === 'pizzaria' }

//STRINGS
export const capitalize = (str) => { return str.charAt(0).toUpperCase() + str.slice(1); }
export const lowercase = (str) => { return str.charAt(0).toLowerCase() + str.slice(1); }
export const justLettersAndNumber = (str) => { return str.replace(/[^\w]/g, "") }

//JQUERY
export const addClass = (el, c) => { el.addClass(c) }
export const toggleClass = (el, c) => { el.toggleClass(c) }
export const slideToggle = (el) => { el.slideToggle() }
export const getText = (el) => { return justLettersAndNumber(el.text()) }
export const applyCSS = (el, obj) => { el.css(obj) }
export const getClass = () => { return window.scrollY > 70 ? 'menu-selected2' : 'menu-selected' }

//VANILLA JS
export const getEl = (query) => { return document.querySelector(query) }
export const setLink = (query, val) => { return document.querySelector(query).href = val }
export const addClassList = (query, c) => { document.querySelector(query) !== null ? document.querySelector(query).classList.add(c) : false }
export const removeClassList = (query, c) => { document.querySelector(query) !== null ? document.querySelector(query).classList.remove(c) : false }

//F5 FUNCTION
export const fkey = (e) => {
    if (e.keyCode == 116) {
        // e.preventDefault()
        renderPage(lowercase(document.querySelector('.menu-selected').innerHTML))
    }
}

//GETS
//Window Height
const getWindowHeight = () => { return window.scrollY }


//MARCANDO MENU CONFORME A DIV QUE ESTÁ NA TELA
const controlNavRestaurante = (isMenu, isSobre, isChef) => {
    if (isMenu) addClassList('.menu-link', 'nav-selected')
    else if (isSobre) addClassList('.sobre-link', 'nav-selected')
    else if (isChef) addClassList('.Chefs-link', 'nav-selected')
    else removeClassList('.nav-selected', 'nav-selected')
}

const controlNavPizzaria = (isMenu, isSobre) => {
    if (isMenu) addClassList('.menu-link', 'nav-selected')
    else if (isSobre) addClassList('.sobre-link', 'nav-selected')
    else removeClassList('.nav-selected', 'nav-selected')
}

export const menuListener = () => {
    let isMenu, isSobre, isChef
    const page = lowercase(document.querySelector(`.${ getClass() }`).innerHTML || '')
    isMenu = getWindowHeight() > document.querySelector('.menu-container').offsetTop && getWindowHeight() < document.querySelector('.menu-container+div').offsetTop
    if (!bool(page)) {
        isSobre = getWindowHeight() > document.querySelector('.sobre-container').offsetTop && getWindowHeight() < document.querySelector('.sobre-container+div').offsetTop
        isChef = getWindowHeight() > document.querySelector('.chefs-container').offsetTop
        controlNavRestaurante(isMenu, isSobre, isChef)
    } else {
        isSobre = getWindowHeight() > document.querySelector('.sobre-container').offsetTop
        controlNavPizzaria(isMenu, isSobre)
    }
}