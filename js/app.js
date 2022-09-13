const getElement = (id) => {
  const input = document.getElementById(id);
  return input;
};

const handleSubmit = () => {
  const inputText = getElement("todo-text").value;
  const todos = JSON.parse(localStorage.getItem("TODOS"));

  if (!todos) {
    const todoList = [
      {
        title: inputText,
        isCompleted: false,
      },
    ];
    localStorage.setItem("TODOS", JSON.stringify(todoList));
  } else {
    const todoList = [
      ...todos,
      {
        title: inputText,
        isCompleted: true,
      },
    ];
    localStorage.setItem("TODOS", JSON.stringify(todoList));
  }
  render();
};

const render = () => {
  const todos = JSON.parse(localStorage.getItem("TODOS"));
  const ul = getElement("todo-list");
  ul.textContent = "";
  todos.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("text-xl", "py-2", "text-center");
    li.innerText = item.title;
    ul.appendChild(li);
  });
};

const handleRemoveItem = () => {
  localStorage.removeItem("TODOS");
  render();
};
render();
