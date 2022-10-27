// HAMBURGER NAV BAR FOR MOBILE
function mobileNavFunction() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// GET NAV BAR BACK AFTER CLOSED BY HAMBURGER BAR AND SCREEN BIG
function navBarBack(screenSize) {
  if (screenSize.matches) { // If media query matches
    document.getElementById("navLinks").style.display = "none";
  } else {
    document.getElementById("navLinks").style.display = "inline";
  }
}
var screenSize = window.matchMedia("(max-width: 600px)")
navBarBack(screenSize) // Call listener function at run time
screenSize.addListener(navBarBack) // Attach listener function on state changes

// TRANSLATION VARIABLE FOR MOBILE NAV BAR (from https://www.w3schools.com/css/css3_variables_javascript.asp)
// Get the root element
var r = document.querySelector(':root');

// Create a function for setting a variable value
function setTranslateVariable() {
  var translationValue = -(((window.innerWidth)-45)/2)
  r.style.setProperty('--centerMobileNav', translationValue + "px");
}