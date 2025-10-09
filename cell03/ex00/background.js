const button = document.getElementById("botao");

function corAleatoria() {
    var verde = Math.floor(Math.random() * 100);
    var azul = Math.floor(Math.random() * 100);
    var vermelho = Math.floor(Math.random() * 100);
    var cor = `rgb(${vermelho}, ${verde}, ${azul})`;
    return cor;
}

button.addEventListener("click", function() {
    document.body.style.backgroundColor = corAleatoria();
});
