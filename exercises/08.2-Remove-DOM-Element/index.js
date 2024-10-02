let parentList = document.querySelector("#parentLi");
let childs = parentList.childNodes;

let removedLI = childs[3];

removedLI = parentList.removeChild(removedLI);