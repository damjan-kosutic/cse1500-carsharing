window.onload = function () {
    document.getElementById("Username").addEventListener("keydown", function() {
        if (document.getElementById("Username").checkValidity()) {
            document.getElementByClassName("username-error").innerHTML = "Length must be between 5 and 12 characters";
        }
    });
}

