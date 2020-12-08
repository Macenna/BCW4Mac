var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob" }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  if(event.target.matches("button")) {
    event.preventDefault();
    modalEl.style.display = "block";                          // Style the modal container w/ block elements 
    currentId = parseInt(event.target.parentElement.id);      // Change the ID of the parent element to the next index of the child 
    var name = people[currentId].name;                        // Add to the people array in the name property/element
    var description = people[currentId].description;          // Add to the people array in the description property 
    modalNameEl.textContent = name;                           // The text content inside the add person query is equal to a name value 
    if(deescription) {
      descriptionEl.value = description;                      // value of local var deescription is = to description element property for that value 
    }
    else {
      descriptionEl.value = "";
    }
  };
  // Use event delegation to handle when the user clicks "edit"
};

closeEl.addEventListener("click", close);
saveBtn.addEventListener("click", function (event){
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
});
addBtn.addEventListener("click", addPersonToList);
