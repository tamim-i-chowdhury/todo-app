const getElement = (id) => {
  const input = document.getElementById(id);
  return input;
};

const handleSubmit = () => {
  const input = getElement("todo-text");
  const inputText = input.value;
  input.value = "";
  const todos = JSON.parse(localStorage.getItem("TODOS"));

  if (inputText !== "") {
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
  }
  render();
};

const render = () => {
  const todos = JSON.parse(localStorage.getItem("TODOS"));
  const ul = getElement("todo-list");
  ul.textContent = "";
  if (todos) {
    todos.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("text-xl", "py-2", "text-center");
      li.innerText = item.title;
      ul.appendChild(li);
    });
  } else {
    const h3 = document.createElement("h3");
    h3.classList.add(
      "text-center",
      "text-2xl",
      "text-teal-500",
      "font-semibold"
    );
    h3.innerText = "NO TODOS FOUND!";
    ul.appendChild(h3);
  }
};

const handleRemoveItem = () => {
  localStorage.removeItem("TODOS");
  render();
};
render();
