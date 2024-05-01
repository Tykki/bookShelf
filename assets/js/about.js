const about = document.querySelector('#about')
const genreData = [{
    title: 'Fantasy. ',
    text: ['Travel into a new world, each different from the last.', 'Some great placeholder content for the first featurette here. Imagine some exciting prose here'],
    img: './assets/imgs/fantasyGenre.png'
}, {
    title: 'Romance. ',
    text: ['Is it wrong to feel something so strong, but so quickly.', 'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.'],
    img: './assets/imgs/romanceGenre.png'
}, {
    title: 'Horror. ',
    text: ['Not all chaos is random chaos.', 'And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.'],
    img: './assets/imgs/horrorGenre.png'
}]

about.innerHTML = `
    <h1 class="m-5 fw-bold">About The Book Shelf</h1>
    <h2 class="m-5 text-end lead fs-2 text-body-secondary">I hope you find inspiration</h2>
    <div class="container marketing">
        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider">

        <!-- /END THE FEATURETTES -->

    </div>
`

const genreChoices = document.querySelector('#about .container.marketing')
genreData.forEach((genre, ind) => {
    ind%2 ? genreChoices.innerHTML += `

    <div class="row featurette">
        <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">${genre.title}<span class="text-body-secondary">${genre.text[0]}</span></h2>
            <p class="lead">${genre.text[1]}</p>
        </div>
        <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" src="${genre.img}" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
        </div>
    </div>
    <hr class="featurette-divider">`: genreChoices.innerHTML += `
    

    <div class="row featurette">
        <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">${genre.title}<span class="text-body-secondary">${genre.text[0]}</span></h2>
            <p class="lead">${genre.text[1]}</p>
        </div>
        <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="${genre.img}" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
        </div>
    </div>
    <hr class="featurette-divider">
`
})

console.log()