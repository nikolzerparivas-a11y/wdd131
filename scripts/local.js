const menuButton = document.getElementById("menu-button");
const menuLinks = document.getElementById("menu-links");

menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("open");
    menuButton.textContent = menuLinks.classList.contains("open") ? "X" : "☰";
});

const elementoAno = document.getElementById("anoatual");
if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}

const elementoModificacao = document.getElementById("ultimaModificacao");
if (elementoModificacao) {
    elementoModificacao.textContent = `Última modificação: ${document.lastModified}`;
}
