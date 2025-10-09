document.addEventListener("DOMContentLoaded", function() {
    const $ftList = document.getElementById('ft_list');
    const $botaoTarefa = document.getElementById('botaoTarefa');

    // Carregar as tarefas salvas (se houver)
    const tarefas = JSON.parse(localStorage.getItem("tarefas") || "[]");
    tarefas.forEach(tarefa => addTarefa(tarefa));

    // Função para adicionar tarefa
    $botaoTarefa.addEventListener('click', function() {
        const tarefa = window.prompt("Adicione uma nova tarefa:");

        if (tarefa) {
            addTarefa(tarefa);
            salvarTarefas();  // Salva as tarefas após adicionar
        }
    });

    // Função para adicionar tarefa ao DOM
    function addTarefa(tarefa) {
        const divTarefa = document.createElement('div');
        divTarefa.classList.add('tarefa');
        divTarefa.textContent = tarefa;

        // Evento de clique para remover tarefa
        divTarefa.addEventListener('click', function() {
            if (confirm("Deseja remover esta tarefa?")) {
                divTarefa.remove();
                salvarTarefas();  // Atualiza as tarefas após remoção
            }
        });

        $ftList.prepend(divTarefa);  // Adiciona a tarefa no topo da lista
    }

    // Função para salvar as tarefas no localStorage
    function salvarTarefas() {
        const tarefas = Array.from($ftList.children).map(tarefa => tarefa.textContent);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));  // Salva no localStorage
    }
});
