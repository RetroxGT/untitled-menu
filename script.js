
const title = "UNTITLED CLIENT";
const titleElement = document.getElementById("brand-title");

let index = 0;

function typeTitle() {
  if (index < title.length) {
    titleElement.textContent += title[index];
    index++;
    setTimeout(typeTitle, 115);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeTitle, 400);
});

const categories = document.querySelectorAll(".category");
const selectedCategory = document.getElementById("selected-category");

categories.forEach(button => {
  button.addEventListener("click", () => {
    categories.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    selectedCategory.style.opacity = "0";

    setTimeout(() => {
      selectedCategory.textContent = button.dataset.category;
      selectedCategory.style.opacity = "1";
    }, 180);
  });
});
