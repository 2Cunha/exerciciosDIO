const form = document.getElementById('lista-eventos');
const list = document.getElementById('list');

//Usar função para parar envio antes de manipular dados
form.onsubmit = function (e){
    e.preventDefault();
    const entrada = document.getElementById('texto');
    novoEvento(entrada.value);
    form.reset();
};

function novoEvento(descricao){
    //criar container, checkbox e etiqueta que contenha a tarefa
    const containerLista = document.createElement('div');
    const novoEvento = document.createElement('input');
    const etiquetaEvento = document.createElement('label');
    const noDescricaoEvento = document.createTextNode(descricao);

    //definir atributos da variável novoEvento
    novoEvento.setAttribute('type', 'checkbox');
    novoEvento.setAttribute('name', descricao);
    novoEvento.setAttribute('id', descricao);

    //definir atributos da variável etiquetaEvento
    etiquetaEvento.setAttribute('for', descricao);
    //adicionar o nó (tarefa) ao final da lista de filhos
    etiquetaEvento.appendChild(noDescricaoEvento);

    //adicionar classe evento-item
    containerLista.classList.add('evento-item');
    //adicionar nó ao checkbox
    containerLista.appendChild(novoEvento);
    //adicionar nó ao conteúdo digitado pelo usuário
    containerLista.appendChild(etiquetaEvento);

    //adicionar nó ao container
    list.appendChild(containerLista);
}