const produtos = [
    { id: "fc-1020", name: "Guia Turístico Completo - Canaima" },
    { id: "qn-4101", name: "Tour Gastronômico - Rota da Arepa" },
    { id: "ch-1978", name: "Passaporte Cultural - Festividades de Yare" },
    { id: "st-1893", name: "E-Book de Trilhas e Mapas - Los Roques" }
];

document.addEventListener("DOMContentLoaded", () => {
    
    const botaoMenu = document.querySelector("#menu-button");
    const listaLinks = document.querySelector("#menu-links");
    if (botaoMenu && listaLinks) {
        botaoMenu.addEventListener("click", () => {
            listaLinks.classList.toggle("open");
            botaoMenu.textContent = listaLinks.classList.contains("open") ? "❌" : "☰";
        });
    }

    const elementoAno = document.querySelector("#anoatual");
    if (elementoAno) elementoAno.textContent = new Date().getFullYear();

    const elementoModificacao = document.querySelector("#ultimaModificacao");
    if (elementoModificacao) {
        elementoModificacao.innerHTML = `Última modificação: <span class="highlight-date">${document.lastModified}</span>`;
    }

    const selectProduto = document.getElementById("produto");
    if (selectProduto) {
        selectProduto.innerHTML = '<option value="" disabled selected>Selecione um Produto...</option>';

        produtos.forEach(prod => {
            const opcao = document.createElement("option");
            opcao.value = prod.id;         
            opcao.textContent = prod.name; 
            selectProduto.appendChild(opcao);
        });
    }

    const elementoContador = document.querySelector("#contador-numero");
    if (elementoContador) {
        const parametrosUrl = new URLSearchParams(window.location.search);
        let totalAvaliacoes = parseInt(localStorage.getItem("totalAvaliacoesConcluidas")) || 0;

        if (parametrosUrl.has("produto")) {
            totalAvaliacoes += 1;
            localStorage.setItem("totalAvaliacoesConcluidas", totalAvaliacoes);
        }
        elementoContador.textContent = totalAvaliacoes;
    }
});
