var words = ['about', 'house', 'topid', 'mailbox'];
//var answer = 'about';
//var status = '';

window.addEventListener('load', function () {
    console.log('Welcome to the crash course!');
    console.log('These messages print when the page is done loading.');

    eop('viz', canWeHide, 'a');
});

function makeGuess(guess) {

    // If we can hide, don't reveal anything.
    if (canWeHide(guess)) {
        console.log('Nope, not there!');

        // We need to change `words` so that it only
        // contains words that do not have the letter 
        // `guess`.

    } else {
        // If we can't hide, we need to show something. 

        // Lots of ways we can do this; easiest would be
        // just pick a word and display where the letter
        // exists in that word.
    }

}

function canWeHide(guess) {
    // Look through all of our words.
    // On each word, see if it contains the letter `guess`.
    // If it does contain it, return false.
    // If it doesn't contain it, return true.

    // Then, if we still know of any words, we can hide.
    var letters = words.map(function(word) {
        return word.split('');
    });

    var hideWords = letters.filter(function(shattered) {
        var keepers = shattered.filter(function(piece) {
            return piece == guess;
        });

        if (keepers.length > 0) {
            return false;
        } else {
            return true;
        }
    });

    if (hideWords.length > 0) {
        return true;
    } else {
        return false;
    }
}
/*
function guess(letter) {
    // Determine where the letter exists.
    // Return underscore string with that letter showing.
    var letters = answer.split('');
    var revealed = status.split('');

    revealed.map(function(letter)) {
        if (letter != '_') {
            return letter;
        } else {
            return 
        }
    });
    var shown = letters.map(function(current) {
        if (current == letter) {
            return letter;
        } else {
            return '_';
        }
    });

    return shown.reduce(function(prev, current) {
        return prev + current;
    }, '');
    // a _ _ _ _
}
*/
/*
function hide(word) {
    var letters = word.split('');

    var underscores = letters.map(function(letter) {
        return '_ ';
    });

    return underscores.reduce(function(prev, current) {
        return prev + current;
    }, '');
}
/*
function sumOfSquares(numbers) {
    var squares = numbers.map(function (number) {
        return number * .90;
    });

    return squares.reduce(function(prev, current) {
        return prev - current;
    }, 1000);
}
*/

/*
function kickOut(name) {
    if (name.length < 4) {
        return true;
    } else {
        return false;
    }
}

function exampleFunction(names) {
    return names.map(kickOut);
    /*
    return numbers.map(function(number) {
        return number * number;
    }).filter(function (number) {
        return (number % 2 == 0);
    }).reduce(function (prev, current) {
        return prev + current;
    }, 0);
*/
//}