// Parent element for inputing data
let newInputDOMElement = document.querySelector("#addToDo");
// Parent Element for unordered list
let listOfTasks = document.querySelector("ul");

newInputDOMElement.addEventListener('change', function(e) {
    //Create the li child element
    let newTask = document.createElement("li");
    newTask.innerHTML = "<span><i class='fa fa-trash'></i></span>" + e.target.value;

    // Append the child
    listOfTasks.appendChild(newTask);
    newInputDOMElement.value = "";
})

//DELETE TASK
// If user clicks on trash can icon

listOfTasks.addEventListener("click", function(e) {
  if (e.target.matches(".fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});
