function scrollToSection() {
  const section = document.getElementById("sabores");
  section.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("toggle-theme").addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Atualiza ícone do botão
  const btn = document.getElementById("toggle-theme");
  if (body.classList.contains("dark-mode")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
});
