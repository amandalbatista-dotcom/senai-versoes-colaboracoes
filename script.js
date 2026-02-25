// ============================
// Script preparado para API futura
// ============================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validação simples
    if (!name || !email) {
      message.textContent = "Por favor, preencha todos os campos.";
      message.style.color = "red";
      return;
    }

    message.textContent = "Mensagem enviada com sucesso!";
    message.style.color = "green";

    // Estrutura pronta para futura integração com API
    /*
    fetch("https://api.suaempresa.com/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    })
    */
  });
});