const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

function aqua() {
  document.body.style.backgroundColor = "aqua";
}
function darkorange() {
  document.body.style.backgroundColor = "darkorange";
}

window.alert('Welcome to Javascript Marvin Wanyama');