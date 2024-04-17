import './assets/css/style.css'
import './assets/js/book.js'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const pages = document.querySelectorAll('main')
const pagesBuild = document.querySelectorAll('main.build')
const links = document.querySelectorAll('.nav-link')
const pageUrls = ['./assets/pages/home.html', './assets/pages/about.html', './assets/pages/shelf.html', './assets/pages/scheduling.html', './assets/pages/book.html']

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

 const buildSite = () => {
    Promise.all(pageUrls.map(url => 
        fetch(url).then(res => res.text())
    )).then(txts => {
        console.log(txts)
        pagesBuild.forEach((p, i) => p.innerHTML = txts[i])
    })
    // fetch('./assets/pages/shelf.html').then(function (response) {
    //     if (response.ok) {
    //         return response.text();
    //     }
    //     throw response;
    // }).then(function (text) {
    //     document.querySelector('#home').innerHTML = text
    // });
 }
 buildSite()
window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
hashHandler(window.location.hash)