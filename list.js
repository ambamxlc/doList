const list = document.getElementById("list");

function addItem() {
  const add = document.getElementById("textBox");
  add.value;
  console.log("test");
  const item = document.createElement("li");
  item.innerHTML = add.value;
  list.appendChild(item);
}

list.addEventListener("click", function (e) {
  console.log(e);
  e.target.remove();
});
