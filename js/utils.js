//RENDER
export const render = (template, elem) => {
    // Set rendering element for the component
    if (typeof template === 'function') {
        template.elem = elem;
    }

    // If elem is an element, use it.
    // If it's a selector, get it.
    elem = typeof elem === 'string' ? document.querySelector(elem) : elem;
    if (!elem) return;

    // Get the template
    template = (typeof template === 'function' ? template(template.state) : template);
    if (typeof template !== 'string') return;

    // Render the template into the element
    if (elem.innerHTML === template) return;
    elem.innerHTML = template;

    // Dispatch a render event
    if (typeof window.CustomEvent === 'function') {
        var event = new CustomEvent('render', {
            bubbles: true
        });
        elem.dispatchEvent(event);
    }

    // Return the elem for use elsewhere
    return elem;
};


//STRINGS
export const lowercase = (str) => str.charAt(0).toLowerCase() + str.slice(1);
export const justLettersAndNumber = (str) => str.replace(/[^\w]/g, "");
export const fixTitle = (str) => {
    return str.split('-').map((val, i) => {
        const bool = str.split('-').length > 2 && i > 0 || (i === 1 && val.length < 3);
        return bool ? val
            : val === 'camaroes' ? 'Camarões'
                : val.charAt(0).toUpperCase() + val.slice(1);
    }).join(' ');
};


//BOOLEAN
export const bool = (page) => page === 'pizzaria';
export const notNull = (query) => document.querySelector(query) !== null;

//GETTERS
//Window Height
export const getWindowHeight = () => window.scrollY;
//Window Width
export const getWindowWidth = () => window.innerWidth;
//offsetTop from element
export const getOffSetTop = (query) => document.querySelector(query).offsetTop;

// IS STICKY
export const isSticky = () => getWindowHeight() > 70;
//Get Class
export const getClass = () => isSticky() ? 'menu-selected2' : 'menu-selected';

//BOOLS
export const isMain = () => getWindowHeight() > getOffSetTop('main');


//SETTERS
//set href attr
export const setLink = (query, val) => document.querySelector(query).href = val;


//JQUERY
export const toggleClass = (el, c) => el.toggleClass(c);
export const slideToggle = (el) => el.slideToggle();

//VANILLA JS
export const addClassList = (query, c) => notNull(query) ? document.querySelector(query).classList.add(c) : false;
export const removeClassList = (query, c) => notNull(query) ? document.querySelector(query).classList.remove(c) : false;

//MARCANDO MENU CONFORME A DIV QUE ESTÁ NA TELA
const controlNav = (page, isMenu, isSobre, isChef) => {
    if (isMenu) addClassList('.menu-link', 'nav-selected');
    if (isSobre) addClassList('.sobre-link', 'nav-selected');
    if (!bool(page) && isChef) addClassList('.Chefs-link', 'nav-selected');
};

export const menuListener = (page = lowercase(document.querySelector(`.${getClass()}`).innerHTML)) => {
    let isMenu, isSobre, isChef;
    removeClassList('.nav-selected', 'nav-selected');
    isMenu = getWindowHeight() > getOffSetTop('.menu-container') && getWindowHeight() < getOffSetTop('.menu-container+div');
    if (!bool(page)) {
        isSobre = getWindowWidth() < 551 ? //BREAKPOINT
            getWindowHeight() > getOffSetTop('.sobre-container') && getWindowHeight() < ((getOffSetTop('.sobre-container') + getOffSetTop('.chefs-container')) / 2 - 50)
            : getWindowHeight() > getOffSetTop('.sobre-container') && getWindowHeight() < getOffSetTop('.sobre-container+div');
        isChef = getWindowWidth() < 551 ? //BREAKPOINT
            getWindowHeight() > ((getOffSetTop('.sobre-container') + getOffSetTop('.chefs-container')) / 2)
            : getWindowHeight() > getOffSetTop('.chefs-container');
    } else {
        isSobre = getWindowWidth() < 551 ? //BREAKPOINT
            getWindowHeight() > ((getOffSetTop('main>.container>div:nth-child(2)') + getOffSetTop('.sobre-container')) / 2)
            : getWindowHeight() > getOffSetTop('.sobre-container');
    }
    controlNav(page, isMenu, isSobre, isChef);
};