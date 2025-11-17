const robo = document.querySelector(".robo");

const cores = [
    "azul",
    "amarelo",
    "branco",
    "preto",
    "rosa",
    "vermelho"
];

let indice = 0;

function atualizarCor() {
    robo.src = `img/robotron-${cores[indice]}.png`;
}

// Botões
document.getElementById("btnTrocar").addEventListener("click", () => {
    indice = (indice + 1) % cores.length;
    atualizarCor();
});

document.getElementById("btnNext").addEventListener("click", () => {
    indice = (indice + 1) % cores.length;
    atualizarCor();
});

document.getElementById("btnPrev").addEventListener("click", () => {
    indice = (indice - 1 + cores.length) % cores.length;
    atualizarCor();
});