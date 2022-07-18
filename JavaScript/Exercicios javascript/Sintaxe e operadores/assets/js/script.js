const form = document.getElementById('compara');
form.onsubmit = function (e){
    e.preventDefault();
    const n1 = document.getElementById('numero1');
    const n2 = document.getElementById('numero2');
    comparador(n1.value, n2.value);
    form.reset();
    
}

function comparador(n1, n2){
    //usar parseInt para não concatenar os números. O retorno em string sempre concatenará a soma de duas variáveis se não usar.
    let soma = parseInt(n1) + parseInt(n2);
    //usar três vezes '=' === para comparar tipo e conteúdo da variável, diferentemente disso pode ser comparado texto com número e trazer igualdade.
    let compara = n1 === n2 ? 'iguais' : 'diferentes';
    let maior10 = soma > 10 ? 'maior' : 'menor';
    let maior20 = soma > 20 ? 'maior' : 'menor';
    
    console.log('Os números ' + n1 + ' e ' + n2 + ' são ' + compara + '. Sua soma é ' + soma + ', que é ' + maior10 + ' que 10 e ' + maior20 + ' que 20.');
    const retorno = 'Os números ' + n1 + ' e ' + n2 + ' são ' + compara + '. Sua soma é ' + soma + ', que é ' + maior10 + ' que 10 e ' + maior20 + ' que 20.'
    const etiquetaRetorno = document.createElement('label');

    const noEtiquetaRetorno = document.createTextNode(retorno);
    etiquetaRetorno.setAttribute('for', retorno)
    etiquetaRetorno.appendChild(noEtiquetaRetorno);
    
    list.appendChild(etiquetaRetorno);
}