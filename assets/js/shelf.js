const books = [
    {
        name: 'The Savior and The Hero',
        type: 'Fantasy/Action',
        preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas iusto perferendis ab, corrupti necessitatibus quas consequatur nulla alias qui error culpa sed? Quibusdam rerum recusandae soluta. Hic optio amet asperiores!'
    }, {
        name: 'A Measure of Friendship',
        type: 'Romance/Betrayal',
        preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas iusto perferendis ab, corrupti necessitatibus quas consequatur nulla alias qui error culpa sed? Quibusdam rerum recusandae soluta. Hic optio amet asperiores!'
    },
    {
        name: 'Fiends in the Cut',
        type: 'Slice of Life',
        preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas iusto perferendis ab, corrupti necessitatibus quas consequatur nulla alias qui error culpa sed? Quibusdam rerum recusandae soluta. Hic optio amet asperiores!'
    },
    {
        name: 'Nameless',
        type: 'Horror/Thriller',
        preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas iusto perferendis ab, corrupti necessitatibus quas consequatur nulla alias qui error culpa sed? Quibusdam rerum recusandae soluta. Hic optio amet asperiores!'
    },
]

document.querySelector('main#shelf').innerHTML = `
    <form class="container" id="shelf"></form>`

for (let i=1; i < 13; i++){
    i !== 12 ? document.querySelector('form.container').innerHTML += `
    <input type="radio" name="title" id="book${i}"/>` : document.querySelector('form.container').innerHTML += `
    <div class="surface">`
}
for (let i=1; i < 6; i++){
    document.querySelector('.surface').innerHTML += `
    <div class="block b${i}">
        <div class="block-inner">
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="front"></div>
          <div class="left"></div>
          <div class="right"></div>
          <div class="top"></div>
        </div>
      </div>`
}
for (const [ind, book] of books.entries()) {
    document.querySelector('.surface').innerHTML += `
    <label class="block b${ind+6}" for="book${ind+1}">
        <div class="block-inner">
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="front">
            <div class="spine">${book.name}</div>
          </div>
          <div class="left"></div>
          <div class="right" data-title="${book.name}">
            <div class="cover"></div>
            <div class="contents">
              <h1>${book.type}</h1>
              <p>${book.preview}</p>
            </div>
          </div>
          <div class="top"></div>
        </div>
      </label>
    `
}
document.querySelector('form.container').innerHTML += ` <input type="reset" value="Return"/>`