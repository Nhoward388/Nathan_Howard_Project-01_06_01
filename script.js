//Project 01_06_01
//Author: Nathan Howard
//Date: 8.15.18

"use strict";

var formValidity = true;

//function to validate required inputs
function validateRequired() {
    var inputs = document.querySelectorAll("#contactinfo input");
    var errorSpace = document.getElementById("errorText");
    var fieldSetValidity = true;
    try {
        for (var i = 0; i < inputs.length; i++) {
            var currentElement = inputs[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255, 233, 233)";
                fieldSetValidity = false;
            } 
            else {
                currentElement.style.background = "white";
                errorSpace.style.display = "none";
            }
        }
        if (fieldSetValidity === false) {
            throw "Please complete the required fields."
        }
        else {
            formValidity = true;
        }
    }
    catch (msg) {
        errorSpace.style.display = "block";
        errorSpace.innerHTML = msg;
        formValidity = false;
    }
}

//function to validate form
function validateForm(evt) {
    validateRequired();
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }
    var form = document.querySelectorAll("form")[0];
    if (formValidity === true) {
          form.submit();  
    } 
    else {
    }
}

//function to load in eventlisteners
function createEventListeners() {
    if (window.addEventListener) {
    window.addEventListener("submit", validateForm, false);
    } else if (window.attachEvent) {
    window.attachEvent("onsubmit", validateForm);
}
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}