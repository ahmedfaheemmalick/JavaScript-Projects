const items = [];
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  if (input.value) {
    let newItem = { name: input.value };
    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));
  }

  if (items.length) {
    const getItems = JSON.parse(localStorage.getItem("items"));
    const html = getItems.map((item) => `<p>${item.name}</p>`).join("");
    list.innerHTML = html;
  }

  input.value = "";
});

window.onload = () => {
  if (items.length) {
    const getItems = JSON.parse(localStorage.getItem("items"));
    const html = getItems.map((item) => `<p>${item.name}</p>`).join("");
    list.innerHTML = html;
  }
};
