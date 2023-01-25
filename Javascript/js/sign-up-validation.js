var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
var repeatPassword = document.getElementById("RepeatPassword").value;
var nameUser = document.getElementById("Name").value;
var address = document.getElementById("Address").value;
var country = document.getElementById("Country").value;
var zipCode = document.getElementById("ZipCode").value; 
var email = document.getElementById("Email").value;
var sex = document.getElementByName("Sex").value;
var language = document.getElementById("Language").value;
var about = document.getElementById("About").value;
var isDriver = document.getElementById("IsDriver").value;

const abcCheck = /^[a-zA-Z]+$/;

if (!username) {

}

if (username.length() < 5 || username.length() > 12) {

}

if (username.charAt(0)) {

}

if (username.charAt(0)) {

}

if (!password) {

}
else if (password.length() < 12) {

}


if (!repeatPassword) {

}
else if (repeatPassword.length() < 12) {

}

if (!abcCheck.test(nameUser)) {

}

if (!/^[A-Z]/.test(nameUser.charAt(0))) {

}


if (!country) {

}


if (!zipChecker(zipCode)) {

}

if (!emailChecker(email)) {

}


if (!language) {
    
}




function zipChecker(string) {
    if (string.length() != 6) return false;

    for (let i = 0 ; i < 4; i++) {
        if (isNaN(string.charAt(i))) {
            return false;
        }
    }

    for (let i = 4 ; i < 6; i++) {
        if (!isNaN(string.charAt(i))) {
            return false;
        }
    }
    return true;
}

function emailChecker(string) {
    let a = false;
    let dot = false;
    for (let i = 0; i < string.length(); i++) {
        if (string.charAt(i).equals("@") && i != 0) {
            a = true;
        } else if (string.charAt(i).equals(".") && a && i > 2) {
            dot = true;
        } else if (!abcCheck.test(str)) {
            return false;
        }

    }
    return (a && dot);
}