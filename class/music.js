/*
function startMusic(buttonId) {
    return function () {
        var musicId = null;

        if (buttonId === 0) {
            musicId = 'play-d';
        } else if (buttonId === 1) {
            musicId = 'play-f';
        } else if (buttonId === 2) {
            musicId = 'play-g';
        }

        var music = document.getElementById(musicId);
        music.play();
    };
}*/

window.addEventListener('load', function () {
    // Find all of the elements that have class='button'
    var buttons = document.querySelectorAll('.button');

    // Loop through all of the buttons that we found. We
    // create a new variable, i, that lets us keep track
    // of where we are as we're moving. It starts off at
    // i = 0 and finishes at i = 9, at which point the
    // loop terminates.
    for (var i = 0; i < buttons.length; i++) {
        // For each iteration of the loop (10 times total),
        // we add an event listener to a different button
        // in the list. The event listener is 'listening'
        // for clicks, and when it detects a click it runs
        // the function RETURNED by startMusic().
        //        buttons[i].addEventListener('keypress', startMusic(i));
        //        buttons[i].addEventListener('keypress', function (event) {
        //            console.log(event);
        //        });
    }
});

window.addEventListener('keypress', function (event) {
    console.log(event.charCode);
    /*
    var letter = String.fromCharCode(event.charCode);
    var musicId = 'play-' + letter;

    var music = document.getElementById(musicId);
    music.play();
    */
    var musicId = 'play-' + String.fromCharCode(event.charCode);
    var music = document.getElementById(musicId);

    if (music !== null) {
        if (!music.ended) {
            music.currentTime = 0;
        }
        music.play();

        var button = document.getElementById('button-' + String.fromCharCode(event.charCode));
        button.classList.add('active');
    }
});