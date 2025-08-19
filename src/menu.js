export function menu () {
  const content = document.getElementById("content");
  content.innerHTML = ""; // içeriği temizle

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  content.appendChild(heading);

  const menu = document.createElement("ol");

  const items = ["Soap", "Pasta", "Sandwich", "Special Meal", "Bread", "Drink"];
  items.forEach(itemText => {
    const li = document.createElement("li");
    li.textContent = itemText;
    menu.appendChild(li);
  });

  content.appendChild(menu);
}
