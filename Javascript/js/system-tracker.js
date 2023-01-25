var start_time
var numclicks
var keypresses
var characterpresses

window.onload = function () {
    start_time = Date.now();
    numclicks = 0;
    keypresses = 0;
    characterpresses = 0;

    document.getElementById('loginform').addEventListener('keydown', function () {
        characterpresses = characterpresses + 1;
    });
    
    document.addEventListener("click", function () {
        numclicks = numclicks + 1;
    });

    document.addEventListener("keydown", function () {
        keypresses = keypresses + 1;
    })
};

function submitButtonClick() {
    const end_time = Date.now();
    const message = "Time spent: " + (end_time - start_time) / 1000 + "s"
    alert("Time spent: " + (end_time - start_time) / 1000 + " s" + "\n"
        + "Number of clicks: " + numclicks + "\n"
        + "Number of key presses: " + keypresses + "\n"
        + "Characters pressed: " + characterpresses + "\n");

    var sexes = document.getElementsByName("Sex");
    var selectSex = sexes[2];

    for (var i = 0; i < sexes.length; i++) {
        if (sexes[i].checked) {
            selectSex = sexes[i].value;
            if (selectSex == "Prefer") {
                selectSex = "Prefer not to say"
            }
        }
    }

    alert("Username: " + document.getElementById("Username").value + "\n"
        + "Password: " + document.getElementById("Password").value + "\n"
        + "Repeated password: " + document.getElementById("RepeatPassword").value + "\n"
        + "Name: " + document.getElementById("Name").value + "\n"
        + "Address: " + document.getElementById("Address").value + "\n"
        + "Country: " + document.getElementById("Country").value + "\n"
        + "ZipCode: " + document.getElementById("ZipCode").value + "\n"
        + "Email: " + document.getElementById("Email").value + "\n"
        + "Sex: " + selectSex + "\n"
        + "Language: " + document.getElementById("Language").value + "\n"
        + "About: " + document.getElementById("About").value + "\n"
        + "IsDriver: " + document.getElementById("IsDriver").checked
        )
}
