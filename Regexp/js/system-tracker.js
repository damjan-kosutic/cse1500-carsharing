var start_time
var numclicks
var keypresses
var characterpresses

function start_track() {
    start_time = Date.now();
    numclicks = 0;
    keypresses = 0;
    characterpresses = 0;
}

document.addEventListener("click", function() {
    numclicks = numclicks + 1;
});

document.addEventListener("keydown", function() {
    keypresses = keypresses + 1;
})

// const id = document.getElementById('form');

// id.addEventListener("keypress", function() {
//     alert("kdjfkd");
// })

document.addEventListener('DOMContentLoaded', test, false);
function test() {
    document.getElementByClassName("container").addEventListener('click', function() {
        alert("test");
    })
}

// var inputs = document.getElementsByClassName("inputs")
// for (var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener("input", function() {
//         alert("peepee");
//         characterpresses = characterpresses + 1;
//     });
// }

// document.getElementById("loginform").addEventListener("keydown", () => {
// })



function submitButtonClick() {
    const end_time = Date.now();
    const message = "Time spent: " + (end_time-start_time)/ 1000 + "s"
    alert("Time spent: " + (end_time - start_time)/1000 + " s" + "\n"
        + "Number of clicks: " + numclicks +"\n"
        + "Number of key presses: " + keypresses + "\n"
        + "Characters pressed: " + characterpresses + "\n");
}

