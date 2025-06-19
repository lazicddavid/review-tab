const icons = document.querySelectorAll(".ratings");

icons.forEach((icon) => {
  icon.addEventListener("click", function () {
    icons.forEach((el) => el.classList.remove("active"));

    icon.classList.add("active");
  });
});
