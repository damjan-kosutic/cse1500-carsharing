var username = document.getElementById("Username");
var password = document.getElementById("Password");
var repeatPassword = document.getElementById("RepeatPassword");
var name = document.getElementById("Name");
var address = document.getElementById("Address");
var country = document.getElementById("Country");
var zipCode = document.getElementById("ZipCode"); 
var email = document.getElementById("Email");
var sex = document.getElementByName("Sex");
var language = document.getElementById("Language");
var about = document.getElementById("About");
var isDriver = document.getElementById("IsDriver");

username.onload = function() {
    if(!username.checkValidity()) {
        alert("hEy Ignacio has a small d")
    }
}



