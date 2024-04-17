const btnNavbar = window.document.getElementById('navbar-btn')
const listaLinksConteiner = window.document.getElementById('navbar-links')
const listaLinks = window.document.querySelector('#navbar-links > ul')
const btnScrollUp = window.document.getElementById('btn-scroll-up')

btnNavbar.addEventListener('click', () => {
    if (listaLinksConteiner.classList.contains('d-flex')) {
        listaLinksConteiner.classList.remove('d-flex')
        listaLinksConteiner.classList.add('d-none')
        return
    } else {
        listaLinksConteiner.classList.remove('d-none')
        listaLinksConteiner.classList.add('d-flex')
        listaLinks.classList.add('position-absolute')
    }
})

window.onscroll = () => {
    if (window.scrollY > 300) {
        btnScrollUp.classList.remove('d-none')
        btnScrollUp.classList.add('d-flex')
    } else {
        btnScrollUp.classList.remove('d-flex')
        btnScrollUp.classList.add('d-none')
    }
}

btnScrollUp.addEventListener('click', () => {
    window.scrollTo(0, 0)
})
