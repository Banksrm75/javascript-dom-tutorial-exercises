let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	let newElement = document.createElement("div");
	newElement.style.background = "yellow";
	newElement.innerHTML = "Hello World";
	document.body.appendChild(newElement);	
});
