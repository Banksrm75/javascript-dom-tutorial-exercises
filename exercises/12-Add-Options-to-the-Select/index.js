let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let selectDOMElement = document.querySelector("#mySelect");

for (let i = 0; i < countries.length; i++) {
    let newElement = document.createElement("option")
    newElement.value = countries[i] 
    newElement.text = countries[i];
    selectDOMElement.appendChild(newElement);
}


selectDOMElement.addEventListener('change', function() {
    alert(this.value);
}, false);
