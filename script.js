var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var tarefas = ['Acordar', 'Escovar os dentes', 'Caminhar'];

function criarLista() {
    for (tarefa of tarefas) {
        var tarefaElement       = document.createElement('li');
        tarefaElement.className = 'collection-item';

        var tarefaText          = document.createTextNode(tarefa);
        var linkElement         = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.className = 'secondary-content';

        var linkText            = document.createTextNode('Excluir')
        linkElement.appendChild(linkText);

        tarefaElement.appendChild(tarefaText);
        tarefaElement.appendChild(linkElement);
        listElement.appendChild(tarefaElement);
    }
}

criarLista();