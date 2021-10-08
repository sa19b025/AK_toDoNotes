document.addEventListener("DOMContentLoaded", function () {

    const btnAddToDo = window.document.getElementById("add-todo");
    btnAddToDo.addEventListener("click", buttonPress);
  
    const input = document.getElementById("todoNote");
    input.addEventListener("keydown", handleKeyDown);
  });

function buttonPress (event){
    addToDo();
}

function handleKeyDown(event) {
    
    if (event.key === "Enter") {
        addToDo();
    }
}

function addToDo() {

    const list = document.getElementById("liste");

    const input = document.getElementById("todoNote");
    const text = input.value;
    
    const item = document.createElement("li");
    item.textContent = text;
    item.classList.add("list-group-item");
    item.addEventListener("click", removeToDo);
    input.value = "";
    input.focus();
  
    list.appendChild(item);
  }
  
  function removeToDo(event) {
    const list = document.getElementById("liste");
    list.removeChild(event.target);
  }