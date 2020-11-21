var typefaceEl = document.querySelector("#typeface");
var clearEl = document.querySelector("#clear");
var h1El = document.querySelector("#h1");
var h2El = document.querySelector("#h2");
var h3El = document.querySelector("#h3");
var pEl = document.querySelector("#p");
var textAreaEl = document.querySelector("#textarea");

var elements = [
  h1El, h2El, h3El, pEl
];


var typeface;

typefaceEl.addEventListener("change", function(event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector(".container").style.fontFamily = typeface;
});

textAreaEl.addEventListener("keydown", function(event) {
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split(""); //turns every value in the string into an index of an array - split into an array 
  if (alphabetNumericCharacters.includes(key)) {
    elements.forEach(function(element) {  //the vars called at the top into a for loop
      element.textContent += event.key;
    });
  }
});

clearEl.addEventListener("click", function(event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function(element) {  //for loop
    element.textContent = ""; // empty string 
  });
});