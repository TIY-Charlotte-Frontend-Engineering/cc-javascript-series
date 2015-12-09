/**
 * This file contains the core logic for Evil Hangman. The accompanying functions.js file
 * includes some more practice with map, filter, and reduce that aren't strictly related
 * to Evil Hangman (though you'll certainly see some patterns and similarities).
 *
 * At a high level, here's how the game works: a user tries to guess letters to figure out
 * a word, similarly to regular hangman. The computer, meanwhile, is trying to avoid revealing
 * letters for as long as possible to make the game more difficult.
 *
 * Each time a user guesses a letter, the program should:
 *   - Step 1: check to see if the game is won or lost. It's won if there are no blanks 
 *     left in the word they're trying to guess. It's lost if they're out of lives.
 *   - Check it's list of words to see if it knows of any valid words that don't contain 
 *     that letter. 
 *      - If so, reveal nothing and eliminate all words from the master list that contain
 *        it. For example, if a user guesses 'c' and you know the word 'dog', rule out all 
 *        letters that contain the letter 'c' so that you don't have to reveal anything.
 *      - If not, pick a random word from the list and reveal the positions where the 
 *        guessed letter appears. For example, if you pick 'frog' and 'o' was the guessed 
 *        letter, show '__o_'.
 *   - After revealing new letters, merge whatever letters you're now showing with letters 
 *     you were already showing. For example, if you were already showing 'f___' and now 
 *     want to expose '__o_', merge them into 'f_o_'.
 *   - Decrease player lives by one and print out the updated message.
 *
 * Users interact by typing "guess('a')" where 'a' is the letter they want to guess into 
 * the console.
 */

var word_length = 5;
var lives = 6;

/**
 * `revealed` is a variable that stores the "word" from a user's perspective. When we
 * want to expose a letter to a user, we do so by changing it in `revealed`. The variable
 * starts off as a bunch of underscores (one per letter).
 */
var revealed = '_____';

/**
 * This function describes what we should do when the page loads. In this case, we want to
 * welcome the user to the game and tell them how long the word they're trying to guess is.
 *
 * Note that console.log() is a built-in function in web browsers that will print something
 * out in the browser console. Here are instructions to opening the console in a bunch of
 * different browsers (we did Chrome in class).
 *
 *      http://www.wickedlysmart.com/hfjsconsole/
 */
window.addEventListener('load', function () {
    console.log("Welcome to ...normal... hangman!");
    console.log("I'll pick a " + word_length + "-letter word, and you try to guess it.");
    console.log("Type `guess(letter)` to make a guess.");
    showWord();

    // First filter the word list down to words that are actually `word_length` long. Keep
    // all words that are `word_length` characters long.
    all_words = all_words.filter(function (word) {
        return (word.length == word_length);
    });
});

function guess(letter) {
    // Check if the player has lost
    if (lives < 1) {
        // console.error() is just like console.log() except it gives it a red background
        // and makes it all dangerous-looking. `all_words[0]` means the first word in the
        // list of words. It doesn't really matter which one we pick as long as its still
        // valid.
        console.error("Sorry -- you're all out of lives! My word was " + all_words[0]);
        // Finish with this function; we don't want to do anything else guess-related since
        // they're out of lives.
        return;
    }

    // Check if the player has won; see the victory() function below.
    if (victory()) {
        console.log("Wow, I'm impressed! You beat me -- not many people can pull that off!");
        return;
    }

    // If we get here then the game is still being played since there's been neither success
    // or victory.
    // Check whether we have any words that don't contain `letter`.
    var dodgeWords = all_words.filter(function (word) {
        // The exclamation point means 'not', so you can read this as "keep the word if it
        // does NOT contain the letter `letter`.
        return !contains(letter, word);
    });

    // If we have some dodge words, strike off any words that contain the letter and 
    // reveal nothing.
    if (dodgeWords.length > 0) {
        console.log('Nope, sorry!');
        all_words = dodgeWords;

        // Decrease lives by one since they 'missed' ;-)
        lives = lives - 1;
    } else {
        // If we don't, pick a word, find the positions where that letter exists and
        // reveal those.
        console.log('Got one!');

        // Pick the first word from the list.
        var pattern = patternify(letter, all_words[0]);
        revealed = merge(revealed, pattern);
    }

    showWord();
}

/**
 * Little function that prints out the letters that the user's successfully guessed so far.
 * This doesn't need to be a function but I like to make it one since I'm going to be doing
 * the same thing in multiple places and may potentially want to change it later (i.e. 
 * adding spaces between all of the underscores, etc).
 */
function showWord() {
    console.log('Word: ' + revealed);
    console.log('Lives remaining: ' + lives);
}

/**
 * Returns TRUE if the `word` contains the `letter`, or FALSE otherwise.
 *
 * Map / filter / reduce?
 *   filter (could also add a reduce if you want)
 */
function contains(letter, word) {
    var found = word.split('').filter(function (current) {
        // Read as "return true if `current` and `letter` are the same, otherwise return
        // false"
        return (current == letter);
    });

    // If we found at least one instance of the character, return true. Otherwise return
    // false.
    return (found.length > 0);
}

/**
 * Patternify hides all letters of a word except for one. This can be used to determine
 * what pattern should be revealed to users.
 *
 * Map / filter / reduce?
 *   map => reduce
 */
function patternify(letter, word) {
    return word.split('').map(function (current) {
        if (letter == current) {
            return letter;
        } else {
            return '_';
        }
    }).reduce(function (prev, current) {
        return prev + current;
    }, '');
}

/**
 * Merge converts two patterns (i.e. '___g_' and 'f____') into a single pattern where all
 * letters revealed in either input are revealed in the output (i.e. 'f__g_').
 *
 * Map / filter / reduce?
 *   map => reduce
 */
function merge(first, second) {
    var firstLetters = first.split('');
    var secondLetters = second.split('');

    // NEW: `counter` variable is also available in map(), though it's not often required.
    // It provides a counter that increments as you move through items in the list, starting
    // at zero. For the first letter it'll be zero, for the second it'll be one, and so on.
    //
    // It's useful here because we really want to map through two words at once (`first` and
    // `second`) but there's not an easy way to do that. Instead, we map through one of them
    // and use the counter to help move through the letters in the second one.
    return firstLetters.map(function (current, counter) {
        // This function can be read as: "if either `current` or the letter in the same 
        // position in `second` are not an underscore, return that letter; otherwise return
        // an underscore."
        if (current != '_') {
            return current;
            // Get a specific letter from the list of letters using brackets: []. This is the
            // same as what we do in the main guess() function when we select a single word
            // from the `all_words` word list.
        } else if (secondLetters[counter] != '_') {
            return secondLetters[counter];
        } else {
            return '_';
        }
    }).reduce(function (prev, current) {
        return prev + current;
    }, '');
}

/**
 * Returns TRUE if the player guessed all of the letters and FALSE otherwise. The map is
 * used to convert each character to either a 1 or 0 (depending on whether it's the 
 * underscore character we're looking for) and then we reduce with addition. 
 * 
 * This produces the number of underscores. If that's zero then we've got a winner on 
 * our hands.
 *
 * Map / filter / reduce?
 *   map => reduce
 */
function victory() {
    // Split `revealed` into individual characters and then count how many underscores
    // exist in the list. If there are any, we have not won yet.
    var unknownLetters = revealed.split('').map(function (character) {
        if (character == '_') {
            return 1;
        } else {
            return 0;
        }
    }).reduce(function (prev, current) {
        return prev + current;
    }, 0);

    // Read as "return whether unknownLetters is zero"; this will return TRUE if so or
    // false if not. In other words, the player is victorious if unknownLetters is zero.
    return (unknownLetters == 0);
}