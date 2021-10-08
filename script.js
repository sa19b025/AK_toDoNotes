var neuesElement = 0;
var toDoArray = new Array();
const button = document.getElementById("add-todo");
button.addEventListener("click", buttonPress);

function buttonPress (event){
    addToDo();
}

function handleKeyDown(event) {
    
    if (event.key === "Enter") {
        addToDo();
    }
}

function addToDo() {

    const list = document.getElementById("todo-list");

    const input = document.getElementById("todo-note");
    const text = input.value;
  

    const item = document.createElement("li");
    item.textContent = text;
    item.addEventListener("click", removeToDo);
    input.value = "";
    input.focus();
  
    list.appendChild(item);
  }
  
  function removeToDo(event) {
    const list = document.getElementById("liste");
    list.removeChild(event.target);
  }