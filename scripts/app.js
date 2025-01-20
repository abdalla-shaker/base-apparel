const form = document.getElementById("form");

form.onsubmit = (e) => {
  e.preventDefault();

  const errorText = document.querySelector(".error-text");
  const input = form.querySelector("input");
  const error = !input.value.includes("@") || !input.value.includes(".com");

  if (error) {
    form.classList.add("error");
    errorText.classList.add("active");
    return;
  }

  form.classList.remove("error");
  errorText.classList.remove("active");

  console.log("Welcome...");
};
