const menuButton = document.getElementById("menu-button");
const menuLinks = document.getElementById("menu-links");

menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("open");
    
    if (menuLinks.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});

const anoAtual = new Date().getFullYear();
const elementoAno = document.getElementById("anoatual");
if (elementoAno) {
    elementoAno.textContent = anoAtual;
}

const ultimaModificacao = document.lastModified;
const elementoModificacao = document.getElementById("ultimaModificacao");
if (elementoModificacao) {
    elementoModificacao.textContent = `Última modificação: ${ultimaModificacao}`;
}
