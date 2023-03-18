export const dislpayNone = () => {
    return {
        'display': 'none',
    }
}

export const applyImg = (query, val) => { document.querySelector(query).style.backgroundImage = `url(imgs/${ val }.png)` }

export const applyMargin = (query, val) => { document.querySelector(query).style.marginTop = val }

export const display = (query, val) => { document.querySelector(query).style.display = val }