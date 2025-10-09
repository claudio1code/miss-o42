const listaTarefa = document.getElementById('ft_list');
const botao = document.getElementById('addTarefa');
let tarefa;

        
window.onload = () => {
    const tarefas = JSON.parse(getCookie("tarefas") || "[]");
    tarefas.forEach(tarefa => addTarefa(tarefa));
}

        
        addEventListener("click", function () {
            showText();
            const poe = document.createElement("div");
            poe.textContent = tarefa;
            poe.style.cursor = 'pointer'; // 
            poe.addEventListener("click", () => {
                if (confirm("Deseja remover esta tarefa?")) {
                    poe.remove();
                    salvarTarefas(); // 
                }
            });
            listaTarefa.insertBefore(poe, listaTarefa.firstChild);
            console.log(poe);

            salvarTarefas(); //
        });

        //
        function showText() {
            tarefa = window.prompt("A fazer");
        }

        // 
        function addTarefa(tarefa) {
            const poe = document.createElement("div");
            poe.textContent = tarefa;
            poe.style.cursor = 'pointer'; // 
            poe.addEventListener("click", () => {
                if (confirm("Deseja remover esta tarefa?")) {
                    poe.remove();
                    salvarTarefas(); // 
                }
            });
            listaTarefa.insertBefore(poe, listaTarefa.firstChild);
        }

        
        function salvarTarefas() {
            const tarefas = [...listaTarefa.children].map(tarefa => tarefa.textContent);
            setCookie("tarefas", JSON.stringify(tarefas), 7); // 
        }

        //
        function setCookie(name, value, days) {
            const d = new Date();
            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + d.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        // 
        function getCookie(name) {
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(name + "=") == 0) return c.substring(name.length + 1, c.length);
            }
            return "";
        }