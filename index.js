  const buttons = document.querySelectorAll(".read-more-button");

  buttons.forEach(button => {
    const hiddenText = button.previousElementSibling;
    button.addEventListener("click", () => {
      hiddenText.classList.toggle("hidden");
      button.textContent = hiddenText.classList.contains("hidden") ? "Читати більше" : "Згорнути";
    });
  });

 