const habilidades = [
    "HTML Semântico",
    "CSS Responsivo",
    "JavaScript",
    "Design Criativo",
    "Trabalho em Equipa",
    "Comunicação"
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