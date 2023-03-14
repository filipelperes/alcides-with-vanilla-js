import { imgs } from './list-produtos.js'

Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
})

//Layout Produtos
const fixTitle = (h3) => {
    let title = h3.split('.')[0].split('-').map(val => {
        if (val === 'cafe') return 'Café'
        if (val === 'capao') return 'Capão'
        if (val === 'maracuja') return 'Maracujá'
        if (val === 'sao') return 'São'
        if (val === 'perola') return 'Pérola'
        if (val === 'braganca') return 'Bragança'
        return val.capitalize()
    })
    return title.join(' ')
}

const renderSlideHTML = (v, i) => {
    return `<div class="swiper-slide">
                <h3>${ fixTitle(v) }</h3>
                <img src="imgs/produtos/${ i }/${ v }" alt="" />
            </div>`
}

const renderSliderPagination = `<div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>`

const renderProdutoContainerHTML = (v, arr) => {
    const bool = arr.length > 0;
    return `<div class="produto-container flex column">
                <div class="${ v } button-produto flex border-radius">
                    <p>${ v !== "quartz-stone" ? v : "Quartz Stone" }</p>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <div class="swiper-container ${ v }-swiper">
                    <div class="swiper-wrapper">
                        ${ bool ? arr.map(val => {
                            return renderSlideHTML(val, v)
                        }).join('') : '' }
                    </div>
                    ${ bool ? renderSliderPagination : '' }
                </div>
            </div>`
}


const renderPage = () => {
        return `<div class="produtos-header">
                <h2>Conheça nossos produtos</h2>
            </div>
            ${ ((produtos) => {
                let html = ``
                Object.keys(produtos).forEach(i => {
                    html += renderProdutoContainerHTML(i, produtos[i])
                })
                return html
            })(imgs()) }`
}

const render = (template, elem) => {

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

(() => {
    render(renderPage(), document.querySelector('.produtos-container'))
})()