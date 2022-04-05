let todoTaskText = ["Walk Chilli", "Make Dinner"];
let todoTaskStatus = [false, true];

function addTask() {
  let newTask = document.getElementById("new-task-text");
  if (newTask.value) {
    todoTaskText.push(newTask.value);
    todoTaskStatus.push(false);
    newTask.value = "";
    updateTodoList();
  }
}

function updateTodoList() {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todoTaskText.forEach((task, index) => {
    let newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
  });
}

function moveUp(index) {
  if (index === 0) return // We should not move it if its at the start
    let item = todoTaskText[index];
    todoTaskText.splice(index, 1) // This removes it
    todoTaskText.splice(index - 1, 0, item) // This adds it back in
    console.log(index)

    updateTodoList(); // Updates the item by moving it up!
}

function moveDown(index) {
    let item = todoTaskText[index];
    todoTaskText.splice(index, 1) // This removes it
    todoTaskText.splice(index + 1, 0, item) // This adds it back in
    console.log(index)

    updateTodoList(); // Updates the item by moving it down!
}

function createNewTodoItemElement(task, index) {
  let newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;

  if (todoTaskStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
  }

  let newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  let completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = "Completed";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);
  
// Arrows for Moving Items Up & Down
  let moveUpButtonElement = document.createElement("input");
  moveUpButtonElement.type = "button";
  moveUpButtonElement.value = "⬆️";
  moveUpButtonElement.onclick = function () {
    moveUp(index);
  };
  newTodoTaskElement.appendChild(moveUpButtonElement);

  let moveDownButtonElement = document.createElement("input");
  moveDownButtonElement.type = "button";
  moveDownButtonElement.value = "⬇️";
  moveDownButtonElement.onclick = function () {
    moveDown(index);
  };
  newTodoTaskElement.appendChild(moveDownButtonElement);

  return newTodoTaskElement;
}

function toggleComplete(index) {
  // If the to do is not complete
  if (todoTaskStatus[index] == false) {
    // Set the todo to complete
    todoTaskStatus[index] = true;
  } else {
    // Else the todo is already complete so set it to incomplete
    todoTaskStatus[index] = false;
  }
  updateTodoList();
}

updateTodoList();