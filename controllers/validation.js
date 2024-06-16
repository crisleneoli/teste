document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("[data-form]");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const email = document.querySelector("[data-email]").value;
        const password = document.querySelector("[data-password]").value;

        if (email === "tartarugarte@alura.com" && password === "aluraone") {
            window.location.href = "./views/admin.html";
        } else {
            alert("Email ou senha incorretos. Tente novamente.");
        }
    });
});
