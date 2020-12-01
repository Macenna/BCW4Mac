//start by listing the vars necessary
var count = 0;
var incrementEl = document.querySelector("#increment"); // var linked to a button element by ID name 
var decrementEl = document.querySelector("#decrement"); // ditto^
var countEl = document.querySelector("#count");         // Count element variable values counter element of application


// console.log the 3 elements (not including the counter itself but yes the element the counter is in) 
    // Displays the updated count to the console 
console.log(incrementEl);
console.log(decrementEl);
console.log(countEl);


// add function statement for the counter + its text
function setCounterText() {
    countEl.textContent = count;    
};


// event listener with a callback that increments the counter
    // Have to add at least 2 parameters in addEventListener when calling each increment 
        // Start w/ element, call an event listener, set click as the first parameter (the event), then a function as the second parameter to be called
            // Then, inside function, add a count, ++ -> count upwards 1 integer each counter
                // then, inside function one line down, set the counter text
incrementEl.addEventListener ("click", function () {
    count++;
    setCounterText();       // This calls the function above which updates the counter text
});


// Add second event listener, but add an if statement b/c it is not the first function called 
decrementEl.addEventListener("click", function() {
    if(count > 0) {
        count--;
        setCounterText();
    }
});

// Displays the updated count on the webpage