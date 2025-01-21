window.addEventListener("load", () => {
  const elements1 = document.querySelectorAll("header div a");
  const elements2 = document.querySelectorAll("aside a");
  elements1.forEach((el) => {
    if (el.classList.contains("text-sky-500")) {
      el.classList.remove("text-sky-500");
    }
    if (el.href === location.href) {
      el.classList.add("text-sky-500");
    }
  });
  elements2.forEach((el) => {
    if (el.classList.contains("text-sky-500")) {
      el.classList.remove("text-sky-500");
    }
    if (el.href === location.href) {
      el.classList.add("text-sky-500");
    }
  });
});
