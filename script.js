//Project 01_06_01
//Author: Nathan Howard
//Date: 8.15.18

var formValidity = true;

//function to load in eventlisteners
function createEventListeners() {
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}