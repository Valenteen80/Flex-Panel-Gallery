const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  for (let i = 0; i < panels.length; i++) {
    let panel = panels[i];
    panel.classList.remove("open");
  }
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

for (let i = 0; i < panels.length; i++) {
  let panel = panels[i];
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
}
