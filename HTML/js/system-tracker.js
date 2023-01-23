var start_time
var numclicks
var keypresses
var characterpresses
    
document.addEventListener('DOMContentLoaded', function () {
    document.getElementByClassName("container").addEventListener('click', function () {
        alert("test");
    })

    document.addEventListener("click", function () {
        numclicks = numclicks + 1;
    });

    document.addEventListener("keydown", function () {
        keypresses = keypresses + 1;
    })
}, false);

function submitButtonClick() {
    const end_time = Date.now();
    const message = "Time spent: " + (end_time - start_time) / 1000 + "s"
    alert("Time spent: " + (end_time - start_time) / 1000 + " s" + "\n"
        + "Number of clicks: " + numclicks + "\n"
        + "Number of key presses: " + keypresses + "\n"
        + "Characters pressed: " + characterpresses + "\n");
}

function start_track() {
    start_time = Date.now();
    numclicks = 0;
    keypresses = 0;
    characterpresses = 0;
}