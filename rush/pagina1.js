(() => {
    // Função para ler o valor de um cookie
    function n(t) {
        for (var e = t + "=", s = document.cookie.split(";"), r = 0; r < s.length; r++) {
            var i = s[r];
            // Remover espaços no início do cookie
            while (i.charAt(0) === " ") {
                i = i.substring(1);
            }
            // Verificar se o cookie começa com o nome desejado
            if (i.indexOf(e) === 0) {
                return i.substring(e.length, i.length);
            }
        }
        return ""; // Se não encontrar o cookie, retorna uma string vazia
    }

    // Função para criar ou atualizar um cookie
    function o(t, e, s) {
        var r = new Date();
        r.setTime(r.getTime() + s * 24 * 60 * 60 * 1e3); // Calcula a data de expiração
        var i = "expires=" + r.toUTCString();
        // Cria o cookie com o nome, valor, expiração e path
        document.cookie = t + "=" + e + ";" + i + ";path=/";
    }

    // Se o cookie 'sitevisitor' não existir, cria um novo
    if (!n("sitevisitor")) {
        let t = new Object();
        let e = new Date(Date().toLocaleString("de-DE", { timeZone: "Europe/Sofia" }));

        // Preenche o objeto com informações sobre a visita
        t.referer = document.referrer; // Referenciador da página
        t.request = location.pathname.substring(1); // Caminho da URL
        t.time = e.getFullYear() + "-" + ("0" + (e.getMonth() + 1)).slice(-2) + "-" + e.getDate() + " " +
            e.getHours() + ":" + e.getMinutes() + ":" + ("0" + e.getSeconds()).slice(-2); // Data e hora da visita
        
        // Codifica o objeto em base64 e armazena no cookie
        o("sitevisitor", btoa(JSON.stringify(t)), 365);
    }

    // Quando a página for totalmente carregada
    document.addEventListener("DOMContentLoaded", () => {
        "use strict";
        
        // Adiciona evento de clique aos elementos com a classe '.preview-test'
        document.querySelectorAll(".preview-test").forEach(e => {
            e.addEventListener("click", function(s) {
                s.preventDefault(); // Impede o comportamento padrão do link
                document.querySelector(".preview-devices-active").classList.remove("preview-devices-active"); // Remove a classe de ativo do dispositivo anterior
                this.classList.add("preview-devices-active"); // Adiciona a classe de ativo ao dispositivo clicado
                document.querySelector("#preview-frame").className = this.id.replace("-test", ""); // Altera o frame de visualização de acordo com o dispositivo
            });
        });
    });
})();
