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
    console.log(index)
    // let todoList = document.getElementById("todo-list");
    // while (index < 0) {
    //     index += todoList.length;
    // }
    // while (newIndex < 0) {
    //     index += todoList.length;
    // }
    // if (newIndex >= todoList.length) {
    //     var k = index = todoList.length;
    //     while ((k--) + 1) {
    //         todoList.push(undefined);
    //     }
    // todoList.splice(index, 0, todoList.splice(index, 1)[0]);
    // return todoList
    // }

    let moveUpButtonElement = document.getElementById("new-task-text"); 
    let newIndex = moveUpButtonElement.innerText;
    newTodoTaskElement = parseInt(index) + 1;
    moveUpButtonElement.innerText = newIndex;
    console.log(newIndex)
    updateTodoList();
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