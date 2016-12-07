console.log('foods');

// Variable containing a string
// String = 'words'
// let search = 'app';
// let words = ['orange', 'Apple', 'kiwi', 'pear', 'appricot', 'appetizers', 'app stores', 'appetite'];
let words = [];

// Loops let us do something multiple times
// Check each word to see if it has 'app' in it
// console.log(words[2]);

// for (<where-to-start>; <continue-as-long-as>, <each-time>)
// for (let i = 0; i < words.length; i++) {
    // If the current word includes 'app', print it out
    // if (words[i].includes(search)) {
        // console.log(words[i]);
    // }
// }

// Set up an 'event listener'
window.addEventListener('load', function () {
    console.log('page has loaded');

    // Find the item with the ID of 'search' in the document.
    let searchBox = document.querySelector('#search');
    // searchBox.value = 'search for it'; // special! for input boxes only

    // 'keyup' is the event that happens when you let go of a key
    searchBox.addEventListener('keyup', function () {
        // 1. Get whatever is currently in the text box 
        let target = searchBox.value;

        // 2. Search through our array of words for all matches
        let parent = document.querySelector('#results');

        // innerHTML is the html that's inside of the element (in this case
        // a bunch of li's). Replace all innerHTML with '' (nothing).
        parent.innerHTML = '';
        for (let i = 0; i < words.length; i++) {
            let current = words[i].toLowerCase();
            let targetLower = target.toLowerCase();

            if (current.includes(targetLower)) {
                let item = document.createElement('li');
                item.textContent = words[i]; // the current word 

                item.addEventListener('click', function () {
                    // When someone clicks:
                    //  1. Update search box with the clicked word.
                    searchBox.value = words[i];
                    //  2. Clear the autocomplete box
                    parent.innerHTML = '';
                });

                parent.appendChild(item);
            }
        }

        // 3. Clear out all <li>'s that exist already.
        // 4. Every time we find one, create an <li> and add it to 'parent'.
        // New item! Its a <li>
        // let item = document.createElement('li');
        // item.textContent = 'Food I like';   // 'textContent' are the words inside
                                            // <li>Food I like</li>

        // parent.appendChild(item); // add 'item' as a child of 'parent'
    });
});

fetch('https://api.data.gov/ed/collegescorecard/v1/schools?school.state=NC&api_key=r6qJ984AavyM0zOL2LJ8UYvfR6lOfXQmAeOQ1kpQ')
    .then(function (response) {
        return response.json(); // convert it to javascript from json
                                // JSON is a format for structuring text
    })
    .then(function (data) {
        // data.results is an array
        // data.results[i] is an object
        // data.results[i].school is an object 
        // data.results[i].school.name is a string
        // data.results[i].school.name = bingo

        // Run data.results.length times (20 times)
        for (let i = 0; i < data.results.length; i++) {
            // console.log(data.results[i].school.name);
            words.push(data.results[i].school.name);
        }
    });