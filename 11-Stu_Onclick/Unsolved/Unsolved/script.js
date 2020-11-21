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
    // Have to add at least 2 parameters in addEventListener when calling each increment 
        // Start w/ element, call an event listener, set click as the first parameter, then a function as the second parameter of the call
            // Then, inside function, add a count, ++ -> count upwards 1 integer each counter
                // then, inside function one line down, set the counter text
incrementEl.addEventListener ("click", function name(params) {
    
})

// Add second event listener, but add an if statement b/c it is not the first function called 


// displays the updated count on the webpage