var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var span = document.createElement("span");
  var deleteBtn = document.createElement("button");
  
  li.appendChild(span);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  
  span.appendChild(document.createTextNode(input.value));
  deleteBtn.appendChild(document.createTextNode("Delete"));
  
  li.classList.add("list-item");
  deleteBtn.classList.add("delete-item");
  
  input.value = "";

  deleteBtn.addEventListener("click", function() {
    li.remove();
  });

  li.addEventListener("click", function() {
    span.classList.toggle("strike");
  });
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
