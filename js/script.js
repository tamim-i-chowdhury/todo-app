const getElement = (id) => {
  const element = document.getElementById(id);
  return element;
};
const handleSubmit = () => {
  const input = getElement("todo-text");
  const inputText = input.value;
  input.value = "";
  const todos = JSON.parse(localStorage.getItem("TODO"));
  if (!todos) {
    const todoList = [
      {
        title: inputText,
        completed: false,
      },
    ];
    localStorage.setItem("TODO", JSON.stringify(todoList));
  } else {
    const todoList = [
      ...todos,
      {
        title: inputText,
        completed: true,
      },
    ];
    localStorage.setItem("TODO", JSON.stringify(todoList));
  }
  render();
};

const render = () => {
  const todos = JSON.parse(localStorage.getItem("TODO"));
  const ul = getElement("todo-list");
  ul.innerText = "";

  todos.forEach((item) => {
    console.log(item.title);
    const li = document.createElement("li");
    li.classList.add("py-2");
    li.innerText = item.title;
    ul.appendChild(li);
  });
};

const handleClearAll = () => {
  localStorage.removeItem("TODO");
  render();
};
render();
