const icons = document.querySelectorAll(".ratings div");

icons.forEach((icon) => {
  icon.addEventListener("click", function () {
    icons.forEach((el) => el.classList.remove("active"));

    icon.classList.add("active");
  });
});

const button = document.querySelector(".btn");
const container = document.querySelector(".container");
