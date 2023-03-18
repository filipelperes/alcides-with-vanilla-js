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

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const lowercase = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export const addClass = (el, c) => {
    el.addClass(c)
}

export const toggleClass = (el, c) => {
    el.toggleClass(c)
}

export const bool = (page) => { return page === 'pizzaria' }