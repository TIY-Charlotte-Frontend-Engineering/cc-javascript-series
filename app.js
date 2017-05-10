
// TOPICS WE'VE COVERED
// Loops            : do something more than once
// FUNctions        : step by step process
// Variables        : name for data 
// Elements         : piece of HTML <p></p>
// Lists / arrays   : list of data
// Fetch / ajax     : getting data after the page has loaded
// querySelector    : retrieve an element that already exists
// Events           : perform an action when something happens


// let names = ['fred', 'hansel', 'leona'];
// names[1]

// This is a comment (anything following double slash)

// console.log() is a built-in "function" that prints text
// to the console
console.log('Its movie time');

// creating a variable called 'title'
let title = 'Guardians of the Galaxy';

console.log(title);
console.log(title + ' v2'); // string concatenation

// functions are PROCESSES (steps to follow)
function startup() {
    console.log('Loading the page');
    console.log('Ready to go');

    // A ton of sites update themselves automatically.
    // For example, every stock site, facebook feed,
    // twitter / instagram feeds, news sites.
    // They do this using a technique called AJAX.
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=0603313ca18aa157f0e6df581a8fbadf')
        .then(function convert(data) {
            return data.json(); // How the data is structured
        })
        .then(function showmovies(movies) {
            // If we're trying to do the same thing over and over again
            // we can use a LOOP.
            // console.log(movies.results); // give me results property of movies object

            // 'Arrays' are lists of things. You can have an array of numbers, an array
            // of names, an array of movies.

            // 'for loop' repeats a certain number of times -- perfect!
            // start counting somewhere, keep counting until you get to some other number
            for (let current = 0; current < movies.results.length; current = current + 1) {
                // start at    ^
                //                as long as ^
                //                              each time, do this ^
                console.log(movies.results[current].title);
                // Now we're going to modify the web page.
                let item = document.createElement('li'); // built-in to javascript
                item.textContent = movies.results[current].title + ' has ' +  movies.results[current].vote_average + ' / 10 stars'; // add text to the <li>

                // Last but not least: put it in the page!
                let parent = document.querySelector('#movie-list'); // get an existing element (the ul)
                parent.appendChild(item); // add our <li> to the <ul>
            }
        });
}

// BIG BIG idea in Javascript: events.
// Users do things, and we respond to them. Here
// we're saying 'when the page loads, run the
// startup function.'
window.addEventListener('load', startup);