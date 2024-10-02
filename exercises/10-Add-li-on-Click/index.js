let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	
	let parentUL = document.querySelector("#myList");
	let newLIElement = document.createElement("li");
	newLIElement.innerHTML = "Fourth element";
	parentUL.appendChild(newLIElement);	
});

