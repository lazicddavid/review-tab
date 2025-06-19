const icons = document.querySelectorAll(".ratings div");

icons.forEach((icon) => {
  icon.addEventListener("click", function () {
    icons.forEach((el) => el.classList.remove("active"));
    icon.classList.add("active");
  });
});

const button = document.querySelector(".btn");
const container = document.querySelector(".container");

button.addEventListener("click", function () {
  const selected = document.querySelector(".ratings .active span");

  if (!selected) {
    alert("Please select an option before submitting.");
    return;
  }

  const feedbackText = selected.textContent;
  let message = "";

  if (feedbackText === "Unhappy") {
    message = "We'll use your feedback to improve our customer support.";
  } else if (feedbackText === "Neutral") {
    message = "We'll use your feedback to improve our customer support.";
  } else if (feedbackText === "Satisfied") {
    message = "We'll use your feedback to improve our customer support.";
  }

  container.innerHTML = `
    <h2>Thank you!</h2>
    <h3>Feedback: Unhappy </h3>
    <p>We'll use your feedback to improve our customer support.</p>
  `;
});
