var neuesElement = 0;
var toDoArray = new Array();
const button = document.getElementById("add-todo");
button.addEventListener("click", buttonPress);
function buttonPress (event){
    neuesElement = document.getElementById("todoNote");
    neuesElement.push("<li>" + toDoArray + "</li>");
}