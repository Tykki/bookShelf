import {chooseBook, books} from "./book"

const home = document.querySelector('#home')

const slideData = [{
    title: 'Newest Arrival: The Savior and The Hero',
    caption: 'What really defines good, what can we really call evil',
    img: './assets/imgs/heroSaviorCover.png'
},{
    title: 'Make a Request, Leave Feedback!',
    caption: 'I am always glad to know how to improve and also looking for more inspiration.',
    img: 'https://picsum.photos/seed/picsum/1200/600'
},{
    title: 'Latest Work In Progress: Nameless',
    caption: 'It has the power to eat away your name, and eventually you existence.',
    img: 'https://picsum.photos/seed/picsum/1200/600'
}]



home.innerHTML =`
<header class="">
    <div class="">
        <div class="text-center">
            <div class="">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                      
                    
                    </div>
                    <div class="carousel-inner">
                      
                    
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
        </div>
    </div>
</header>
<!-- Page Content-->
<section class="pt-4">
    <div class="container px-lg-5">
        <!-- Book Preview-->
        <h1>Featured Stories</h1>
        <hr>
        <div class="row gx-lg-5">


        </div>
    </div>
</section>
`

const indicators = document.querySelector('#home .carousel-indicators')
const inner = document.querySelector('#home .carousel-inner')
const featured = document.querySelector('#home .row.gx-lg-5')

slideData.forEach((slide, ind) => {
    if (ind === 0) {
        indicators.innerHTML +=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${ind}" class="active" aria-current="true" aria-label="Slide ${ind}"></button>` 
    inner.innerHTML += `
        <div class="carousel-item active">
            <img src="${slide.img}" class="d-block w-100 mx-auto" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h4 class="fw-bold">${slide.title}</h4>
                <p class="fst-italic">${slide.caption}</p>
            </div>
        </div>`
    } else {
        indicators.innerHTML +=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${ind}" class="" aria-current="true" aria-label="Slide ${ind}"></button>`
        inner.innerHTML += `
        <div class="carousel-item">
            <img src="${slide.img}" class="d-block w-100 mx-auto" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h4 class="fw-bold">${slide.title}</h4>
                <p class="fst-italic">${slide.caption}</p>
            </div>
        </div>`
    }
    
    
})
books.forEach(book => {
    featured.innerHTML += `
        <div class="col-lg-6 col-xxl-4 mb-5">
            <div class="card border-0 h-100">
                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div class="featured-books">
                        <div class="mobile-layout">
                            <div class="book-cover">
                                
                                    <img class="book-top" src="${book.feat.img}" />
                                    <img class="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" /> 
                                
                            </div>
                            <div class="preface" data-ind="${book.id}">
                            <div class="content">
                                <div class="header">
                                    <h2 class="title">${book.name}</h2>
                                </div>
                                <div class="author">by ${book.auth}</div>
                                <div class="body">
                                    <p>
                                        ${book.feat.preview}
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    `
})
document.querySelectorAll('#home .preface').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault
      chooseBook(card.dataset.ind)
    })
  })