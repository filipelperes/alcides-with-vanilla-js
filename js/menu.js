const menuContainer = document.querySelector('.menu-container')
const container1 = document.querySelector('.menu-container+div')
const sobreContainer = document.querySelector('.sobre-container')
const container2 = document.querySelector('.sobre-container+div')
const chefContainer = document.querySelector('.chefs-container')


window.onscroll = (e) => {
    if (window.scrollY > menuContainer.offsetTop && window.scrollY < container1.offsetTop) {
        document.querySelector('.menu-link').classList.add('nav-selected')
    } else if (window.scrollY > sobreContainer.offsetTop && window.scrollY < container2.offsetTop) {
        document.querySelector('.sobre-link').classList.add('nav-selected')
    } else if (window.scrollY > chefContainer.offsetTop) {
        document.querySelector('.Chefs-link').classList.add('nav-selected')
    } else {
        document.querySelector('.nav-selected').classList.remove('nav-selected')
    }
}