const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    nomeDoTemplo: "Roma Itália",
    localizacao: "Roma, Itália",
    consagracao: "2019, 14 de março",
    area: 41010,
    urlDaImagem:
    "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/800%2C/0/default"
  },

  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem:
    "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/800%2C/0/default"
  },

  {
    nomeDoTemplo: "Paris França",
    localizacao: "Le Chesnay, França",
    consagracao: "2017, 21 de maio",
    area: 44175,
    urlDaImagem:
    "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/800%2C/0/default"
  }
];

const container = document.querySelector("#cartoes-container");

function renderizarTemplos(listaDeTemplos) {
  container.innerHTML = ""; 

  listaDeTemplos.forEach(templo => {
    const cartao = document.createElement("section");
    cartao.classList.add("templo-cartao");

    cartao.innerHTML = `
      <h2>${templo.nomeDoTemplo}</h2>
      <p><strong>Localização:</strong> ${templo.localizacao}</p>
      <p><strong>Consagração:</strong> ${templo.consagracao}</p>
      <p><strong>Área Total:</strong> ${templo.area.toLocaleString()} pés quadrados</p>
      <img src="${templo.urlDaImagem}" alt="Templo de ${templo.nomeDoTemplo}" loading="lazy" width="400" height="250">
    `;

    container.appendChild(cartao);
  });
}

renderizarTemplos(templos);

const linksMenu = document.querySelectorAll("#menu-links a");

linksMenu.forEach(link => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault(); 

    linksMenu.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const filtro = link.textContent.toLowerCase().trim();

    if (filtro === "página inicial" || filtro === "home") {
      renderizarTemplos(templos);
    } 

    else if (filtro === "antigo") {
      const antigos = templos.filter(templo => parseInt(templo.consagracao) < 1900);
      renderizarTemplos(antigos);
    } 

    else if (filtro === "novo") {
      const novos = templos.filter(templo => parseInt(templo.consagracao) > 2000);
      renderizarTemplos(novos);
    } 

    else if (filtro === "grande") {
      const grandes = templos.filter(templo => templo.area > 90000);
      renderizarTemplos(grandes);
    } 

    else if (filtro === "pequeno") {
      const pequenos = templos.filter(templo => templo.area < 10000);
      renderizarTemplos(pequenos);
    }
  });
});

const botaoMenu = document.querySelector("#menu-button");
const listaLinks = document.querySelector("#menu-links");

botaoMenu.addEventListener("click", () => {
    listaLinks.classList.toggle("open");
    
    if (listaLinks.classList.contains("open")) {
        botaoMenu.textContent = "❌";
    } else {
        botaoMenu.textContent = "☰";
    }
});