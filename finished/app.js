/* jslint browser: true */
function triggerSound(id) {

    return function () {

    };
}

function deactivate(element) {
    return function () {
        element.classList.remove('activated');
    };
}

window.addEventListener('load', function () {
    // Select all buttons
    var buttons = document.querySelectorAll('.button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', triggerSound(buttons[i].id));
        buttons[i].addEventListener('animationend', deactivate(buttons[i]));
    }

    window.addEventListener('keypress', function (event) {
        var pressed = String.fromCharCode(event.charCode);

        // Grab the audio element and start playing.
        var music = document.getElementById('play-' + pressed);
        if (music !== null) {
            if (!music.paused) {
                music.currentTime = 0;
            }
            music.play();
        }

        // Create some sort of visual feedback.
        var button = document.getElementById('view-' + pressed);
        if (button !== null) {
            button.classList.add('activated');

        }
    });
});