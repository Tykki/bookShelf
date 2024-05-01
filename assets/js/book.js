import {PageFlip} from 'page-flip';
import books from './shelf.js'

const initPage = () => {
    const pageFlip = new PageFlip(
        document.getElementById("demoBookExample"),
        {
            width: 550, // base page width
            height: 733, // base page height

            size: "stretch",
            // set threshold values:
            minWidth: 315,
            maxWidth: 1000,
            minHeight: 420,
            maxHeight: 1350,

            maxShadowOpacity: 0.5, // Half shadow intensity
            showCover: true,
            mobileScrollSupport: false // disable content scrolling on mobile devices
        }
    );

    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    document.querySelector(".page-total").innerText = pageFlip.getPageCount();
    document.querySelector(
        ".page-orientation"
    ).innerText = pageFlip.getOrientation();

    document.querySelector(".btn-prev").addEventListener("click", () => {
        pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector(".btn-next").addEventListener("click", () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });

    // triggered by page turning
    pageFlip.on("flip", (e) => {
        document.querySelector(".page-current").innerText = e.data + 1;
    });

    // triggered when the state of the book changes
    pageFlip.on("changeState", (e) => {
        document.querySelector(".page-state").innerText = e.data;
    });

    // triggered when page orientation changes
    pageFlip.on("changeOrientation", (e) => {
        document.querySelector(".page-orientation").innerText = e.data;
    });
}

// document.addEventListener('DOMContentLoaded', initPage());

const chooseBook = (ind) => {
    const book = books[ind]
    if (book.text) { 
        document.querySelector('#book').innerHTML = `
        <div class="container">
            <div class="flip-book" id="demoBookExample" data-ind="${ind}">
                <div class="page page-cover page-cover-top" data-density="hard">
                    <div class="page-content">
                        <img src="${book.feat.img}" />
                    </div>
                </div>
                <div class="page">
                    <div class="page-content">
                        <h2 class="page-header">${book.name} - 1</h2>
                        <div class="page-image" style="background-image: url(${book.imgs[0]})"></div>
                        <div class="page-text">${book.text[0]}</div>
                        <div class="page-footer">2</div>
                    </div>
                </div>
                <!-- Pages Of Book .... -->
                <div class="page">
                    <div class="page-content">
                        <h2 class="page-header">${book.name} - 2</h2>
                        <div class="page-image" style="background-image: url(${book.imgs[1]})"></div>
                        <div class="page-text">${book.text[1]}</div>
                        <div class="page-footer">3</div>
                    </div>
                </div>
                <div class="page">
                    <div class="page-content">
                        <h2 class="page-header">${book.name} - 3</h2>
                        <div class="page-image" style="background-image: url(${book.imgs[2]})"></div>
                        <div class="page-text">${book.text[2]}</div>
                        <div class="page-footer">4</div>
                    </div>
                </div>
                <div class="page page-cover page-cover-bottom" data-density="hard">
                    <div class="page-content">
                        <h2>"FIN"</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center my-4">
        <div>
            <button type="button" class="btn-prev">Previous page</button>
            [<span class="page-current">1</span> of <span class="page-total">-</span>]
            <button type="button" class="btn-next">Next page</button>
        </div>
    
        <div class="d-none">
            State: <i class="page-state">read</i>, orientation: <i class="page-orientation">landscape</i>
        </div>
    </div>
    `
    localStorage.setItem('bookInd', ind)
    initPage();
    location.hash = "#book"
    } else {
        location.hash = "#shelf"
    }
  }

  document.querySelectorAll('.choose-book').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault
      chooseBook(link.dataset.ind)
    })
  })

export { chooseBook, books };