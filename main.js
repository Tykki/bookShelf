import './assets/css/style.css'
import './assets/js/bs-theme-toggle.js'
import './assets/js/home.js'
import './assets/js/about.js'
import {chooseBook} from './assets/js/book.js'
import './assets/js/schedule.js'
import './assets/js/donate.js'
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
    if (!hash) {
        return
    }
    hide()
    flag = false
    // Active Class on navbar if we doing that
    pages.forEach((page) => {
        if (hash === `#${page.id}`) {
            page.classList.remove('d-none')
            flag = true
        }
        if (hash === '#book') {
            localStorage.getItem('bookInd') ?  chooseBook(localStorage.getItem('bookInd')) : location.hash ="#shelf"
        }
    })
    // check if a page was set, if not show home page
    if (!flag){
        location.hash = '#home'
    }
    links.forEach(link => {
        if (location.hash === link.getAttribute('href')){
            link.classList.add('active')
        }
    })
 }

links.forEach(link=>{
    link.addEventListener('click', ()=>{
        document.querySelector('.btn-close').click()
    })
})
window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
hashHandler(window.location.hash)
