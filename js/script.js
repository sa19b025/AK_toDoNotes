document.addEventListener("DOMContentLoaded", function () {
    const btnAddToDo = window.document.getElementById("add-todo");
    btnAddToDo.addEventListener("click", buttonPress);
  
    const input = document.getElementById("todoNote");
    input.addEventListener("keydown", handleKeyDown);

    getListFromStorage();

  });

  arrayFromStorage = new Array();
  arrayFromStorage = JSON.parse(localStorage.getItem('toDoArray'));
  storageArray = new Array();

  if(arrayFromStorage != "") {
        storageArray = arrayFromStorage;
    }


function buttonPress (event){
    addToDo();
}

function handleKeyDown(event) {
    
    if (event.key === "Enter") {
        addToDo();
    }
}

function getListFromStorage(){
    const list = document.getElementById("liste");
    const input = document.getElementById("todoNote");
    
    for (let i = 0; i < arrayFromStorage.length; i++) {
        let text = arrayFromStorage[i];
        const item = document.createElement("li");
        item.classList.add("list-group-item");
        item.addEventListener("click", removeToDo);

        item.textContent = text;
        list.appendChild(item);
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
    list.appendChild(item);

    storageArray[storageArray.length] = text;
    
    localStorage.setItem('toDoArray', JSON.stringify(storageArray));

    input.value = "";
    input.focus();
}

function removeToDo(event) {
    const list = document.getElementById("liste");
    list.removeChild(event.target);
  }