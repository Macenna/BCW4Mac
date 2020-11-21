//start by listing the vars necessary
var count = 0;
var incrementEl = document.querySelector("#increment"); //var linked to an element 
var decrementEl = document.querySelector("#decrement"); // ditto^
var countEl = document.querySelector("#count");

// console.log the 3 elements (not including the count) 
console.log(incrementEl);
console.log(decrementEl);
console.log(countEl);

// add function statement for the counter + its text
function setCounterText(params) {
    countEl.textContent = count;    
}

// event listener with a callback that increments the counter

// displays the updated count on the webpage