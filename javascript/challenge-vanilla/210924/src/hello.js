const body = document.body;

function windowResize() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 900) {
    body.classList.remove("bg-purple", "bg-blue");
  } else if (windowWidth <= 900 && windowWidth > 600) {
    body.classList.remove("bg-blue");
    body.classList.add("bg-purple");
  } else {
    body.classList.remove("bg-purple");
    body.classList.add("bg-blue");
  }
}

window.addEventListener("resize", windowResize);
windowResize();
