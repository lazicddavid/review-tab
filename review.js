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
    alert("Please select option before submitting.");
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
  <div class="message-box">
    <h2><strong>Thank you!</strong></h2>
   <h3><strong>Feedback: ${feedbackText}</strong></h3>

    <p>We'll use your feedback to improve our customer support.</p>
    </div>
  `;
});
