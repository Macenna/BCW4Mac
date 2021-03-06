//Pulling in variables 
var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

//Checking to see if there's something already there before running anything 
  //getItem is a function key w/ 1 parameter 
var count = localStorage.getItem("count");

counter.textContent = count;

addButton.addEventListener("click", function() {
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function() {
  count--;
  counter.textContent = count;

  localStorage.setItem("count", count);
});
