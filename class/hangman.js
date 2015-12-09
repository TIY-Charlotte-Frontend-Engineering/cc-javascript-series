var word_length = 5;
var revealed = new Array(word_length + 1).join('_');

window.addEventListener('load', function () {
    console.log("Welcome to ...normal... hangman!");
    console.log("I'll pick a " + word_length + "-letter word, and you try to guess it.");
    console.log("Type `guess(letter)` to make a guess.");
    console.log('Word: ' + revealed);
});

function guess(letter) {
    console.error("I don't know how to guess yet. Teach me!");
}