// Set up the variables
var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");
var splitEl = document.querySelector("#split");

// function to calculate tip w/ params total, tip % 
    // var w/ formula to calculate tip (% of total meal amount)
    // return result
function calcTip(total, tipPer) {
    var roundedResult = (total * tipPer).toFixed(2);
    return roundedResult;    
};

// function to calculate total w/ tip amount 
    // return total + tip 
        // parseFloat = makes integers usable
function calcTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);    
};

// function to add tip 
    // bring values from vars at the top to display values on webpage 
    // event function calling prevent Default 
    // 4 variables, bottom 2 with functions 
    // 2 query selectors, tip amount & new total 
function addTip() {
    event.preventDefault();
    var tipPer = tipEl.value * .01;
    var total = totalEl.value;
    var tipAmount = calculateTip(total, tipPercentage);
    var newTotal = calculateTotal(tipAmount, total);
    document.querySelector("#tip-amount").textContent = tipAmount;
    document.querySelector("#new-total").textContent = newTotal.toFixed(2);
};


// function to split the total 
function splitTotal() {
    event.preventDefault();
    
    var total = document.querySelector("new-total").textContent;
    var numPeople = document.querySelector("#num-people").value;

    var newTotal = (total / numPeople).toFixed(2);
    document.querySelector("#split-total").textContent = newTotal;
};



// 2 event listeners - add tip and split total on-click functions at the bottom
        // these 2 event listeners call the outputs from the functions above 
    //submitEl.addEventListener("click", addTip);
    //splitEl.addEventListener("click", splitTotal);
submitEl.addEventListener("click", addTip);
splitEl.addEventListener("click", splitTotal);