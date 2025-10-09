$(document).ready(function() {
    // Função para gerar cor aleatória
    function corAleatoria() {
        var verde = Math.floor(Math.random() * 100);
        var azul = Math.floor(Math.random() * 100);
        var vermelho = Math.floor(Math.random() * 100);
        var cor = `rgb(${vermelho}, ${verde}, ${azul})`;
        return cor;
    }

    // Evento de clique no botão
    $('#botao').click(function() {
        // Alterar a cor de fundo do body
        $('body').css('background-color', corAleatoria());
    });
});
