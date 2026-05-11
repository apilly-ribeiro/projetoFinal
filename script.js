const habilidades = [
    "Boa Comunicação",
    "Criação web HTML/CSS/JavaScript",
    "Criação conteúdo WEB",
    "Design Criativo",
    "Trabalho em Equipa",
    
];

const lista = document.getElementById("lista-habilidades");

habilidades.forEach((habilidade) => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <p>${habilidade}</p>
    `;

    lista.appendChild(card);

});