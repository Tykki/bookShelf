import './assets/css/style.css'
import './assets/js/book.js'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const pages = document.querySelectorAll('main')
const links = document.querySelectorAll('.nav-link')

let flag;
const hide = () => {
    pages.forEach(page =>{
        page.classList.add('d-none')
    })
    links.forEach(link =>{
        link.classList.remove('active')
    })
}
const hashHandler = (hash) => {
    console.log('step 2', hash)
    if (!hash) {
        return
    }
    hide()
    flag = false
    // Active Class on navbar if we doing that
    pages.forEach((page) => {
        if (hash === `#${page.id}`) {
            console.log('pass')
            page.classList.remove('d-none')
            flag = true
        }
    })
    // check if a page was set, if not show home page
    if (!flag){
        location.hash = '#home'
    }
    links.forEach(link => {
        // console.log(link.getAttribute('href'), location.hash)
        if (location.hash === link.getAttribute('href')){
            link.classList.add('active')
        }
    })
 }
window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
hashHandler(window.location.hash)