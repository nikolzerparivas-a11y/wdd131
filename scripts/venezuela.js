const destaquesGeograficos = [
    {
        nome: "Salto Ángel",
        categoria: "paisagens",
        localizacao: "Estado Bolívar (Parque Nacional Canaima)",
        detalhe: "A maior queda d'água do mundo, com 979 metros de altura.",
        urlDaImagem: "https://trilhandomontanhas.com/arquivos/2018-10/salto-angel-venezuela-media.jpg"
    },
    {
        nome: "Los Roques",
        categoria: "paisagens",
        localizacao: "Dependências Federais (Mar do Caribe)",
        detalhe: "Arquipélago famoso por suas águas cristalinas e areia branca.",
        urlDaImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAP0UO9XacFEN9Ta4SRuF7fFsj-YCwOD_7vekUs__vPeZLW753y39blRo&s=10"
    },
    {
        nome: "Pico Bolívar",
        categoria: "paisagens",
        localizacao: "Estado Mérida (Cordilheira dos Andes)",
        detalhe: "O ponto mais alto da Venezuela, com 4.978 metros acima do nível do mar.",
        urlDaImagem: "https://upload.wikimedia.org/wikipedia/commons/0/0f/PicoBolivar2.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"
    },
    {
        nome: "Gran Sabana",
        categoria: "paisagens",
        localizacao: "Planalto das Guianas",
        detalhe: "Uma das paisagens mais antigas do planeta, lar dos impressionantes Tepuis.",
        urlDaImagem: "https://vault-us-east-1.pulsarimagens.com.br/file/thumb/01ADR599.jpg"
    }
];

const itensCulturais = [
    ...destaquesGeograficos,
    {
        nome: "Arepas Venezolanas",
        categoria: "gastronomia",
        localizacao: "Todo o país",
        detalhe: "Massa de milho moído, assada e recheada (como a famosa Reina Pepiada).",
        urlDaImagem: "https://imag.bonviveur.com/arepas-venezolanas-caseras-rellenas.jpg"
    },
    {
        nome: "Patacones",
        categoria: "gastronomia",
        localizacao: "Região de Zulia",
        detalhe: "Banana verde frita duas vezes, prensada e recheada com carne e queijo.",
        urlDaImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNs0CmreLGvYKVHGdVpNINUohAAE6_YjRe5JbTwnY_OkTspKqxNRe5vFA&s=10"
    },
    {
        nome: "Diabos Dançantes de Yare",
        categoria: "festas",
        localizacao: "San Francisco de Yare",
        detalhe: "Tradição religiosa e folclórica declarada Patrimônio da Humanidade pela UNESCO.",
        urlDaImagem: "https://upload.wikimedia.org/wikipedia/commons/7/75/Danzantes_de_Yare.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"
    },
    {
        nome: "Festa de San Juan Bautista",
        categoria: "festas",
        localizacao: "Costas da Venezuela",
        detalhe: "Celebração ao ritmo dos tambores africanos Afro-venezuelanos.",
        urlDaImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYPSlr6IYR0_Nc_MhOYw1lbHs01wpC0GfmH6riADmf73JLZdQThBEMAI&s=10"
    }
];

function renderizarCartoes(lista, containerId) {
    const container = document.querySelector(containerId);
    if (!container) return; 

    container.innerHTML = ""; 

    lista.forEach(item => {
        const cartao = document.createElement("section");
        cartao.classList.add("templo-cartao"); 

        cartao.innerHTML = `
            <img src="${item.urlDaImagem}" alt="Fotografia de ${item.nome}" loading="lazy">
            <h2>${item.nome}</h2>
            <p><strong>Região/Origem:</strong> ${item.localizacao}</p>
            <p><strong>Destaque:</strong> ${item.detalhe}</p>
        `;

        container.appendChild(cartao);
    });
}

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

    if (document.querySelector("#cartoes-container")) {
        renderizarCartoes(destaquesGeograficos, "#cartoes-container");
    }

    if (document.querySelector("#galeria-container")) {
        renderizarCartoes(itensCulturais, "#galeria-container");

        const botoesFiltro = document.querySelectorAll(".btn-filtro");
        botoesFiltro.forEach(botao => {
            botao.addEventListener("click", () => {
                const categoria = botao.getAttribute("data-categoria");
                
                if (categoria === "todos") {
                    renderizarCartoes(itensCulturais, "#galeria-container");
                } else {
                    const filtrados = itensCulturais.filter(item => item.categoria === categoria);
                    renderizarCartoes(filtrados, "#galeria-container");
                }
            });
        });
    }

    const formCadastro = document.querySelector("#cadastro-form");
    const containerBoasVindas = document.querySelector("#boas-vindas-container");

    if (containerBoasVindas) {
        const nomeSalvo = localStorage.getItem("usuarioNome");
        const interesseSalvo = localStorage.getItem("usuarioInteresse");

        if (nomeSalvo && interesseSalvo) {
            containerBoasVindas.innerHTML = `<p style="background: var(--secondary-color); padding: 1rem; border-radius: 4px; font-weight: bold; margin-bottom: 1.5rem; color: #1c1c1c;">¡Bienvenido de vuelta, ${nomeSalvo}! Vemos que te interessa a área de: ${interesseSalvo}.</p>`;
        }
    }

    if (formCadastro) {
        formCadastro.addEventListener("submit", (e) => {
            e.preventDefault(); // Impede o recarregamento
            
            const nomeInput = document.querySelector("#nome").value;
            const interesseSelect = document.querySelector("#interesse").value;

            localStorage.setItem("usuarioNome", nomeInput);
            localStorage.setItem("usuarioInteresse", interesseSelect);

            alert("Preferências salvas com sucesso!");
            location.reload(); 
        });
    }
});
