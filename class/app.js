// Variables are names that we give to data.
// Functions are names that we give to processes.



// when i run this function, print 'hello paradise'
function startup() {
    console.log('hello paradise');

    // Setting up events
    //   1. What sort of event.
    //   2. What to do when it happens.
    //   3. What element the event occurs on.

    // When the green button is clicked, call rejoice
    let greenButton = document.querySelector('#yes');
    greenButton.addEventListener('click', rejoice);

    // When the red button is clicked, call renounce
    let redButton = document.querySelector('#no');
    redButton.addEventListener('click', renounce);
}

function rejoice() {
    console.log('lo! what a book!');
    getNewBook(true);
}

function renounce() {
    console.log('never again');
    getNewBook(false);
}

function getNewBook(liked) {
    fetch('http://crash.queencityiron.com/book')
        // Once we hear back, do something with the response.
        .then(function readJSON(response) {
            // Read the response as JSON and give me the JS object.
            return response.json();
        })
        .then(function logIt(book) {
            // 'book' is the new book.
            // document.querySelector() uses CSS notation ]
            // for selecting elements
            let titleBox = document.querySelector('#info > h2');
            // textContent is the text that shows up between
            // the starting and ending tags.
            // <p>this stuff</p>
            titleBox.textContent = book.title;

            let authorBox = document.querySelector('#info > h3');
            authorBox.textContent = book.author;

            // if ('4' === 4)// nope
            // if ('4' == 4) // yep

            if (liked) { // if liked === true, if liked == true
                console.log('Since you love it, we bought it for you!');
                console.log('Your account was charged $' + book.price);
            }

            let headliner = document.querySelector('main > img');
            headliner.src = book.cover;

            // Add a class called 'cool-class' to an element
            // headliner.classList.add('cool-class');
            // Modify any attribute of the element 
            // headliner.setAttribute('src', book.cover);
        });
}

// When the window loads, run 'sayHi'
window.addEventListener('load', startup);