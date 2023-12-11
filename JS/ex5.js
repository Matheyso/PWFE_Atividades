function limpa_form(){
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cid').value=("");
    document.getElementById('uf').value=("");
}

function atualiza_campos(conteudo){
        if (!("erro" in conteudo)){
            document;getElementById('rua').value=(conteudo.rua);
            document;getElementById('bairro').value=(conteudo.bairro);
            document;getElementById('cid').value=(conteudo.localidade);
            document;getElementById('uf').value=(conteudo.uf);
        } else { 
            limpa_form();
            alert("CEP não foi encontrado!!!")
        }
}


function pesquisacep(valor){
    //var apenas recebe apenas valores decimais (inteiros)
    var cep = valor.replace(/\d/g,''); 
    //condicao de validacao
    if(cep !=""){
        var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)){
        document.getElementById('rua').value="carregando..."
        document.getElementById('bairro').value="carregando..."
        document.getElementById('cid').value="carregando..."
        document.getElementById('uf').value="carregando..."
    
    var elemento = document.createElement('script');
    elemento.src='https://viacep.com.br/ws/' + cep + '/json/?callback=atualiza_campos'; 
    //insere  script no documento e carrega seu conteudo
    document.body.appendChild(elemento)
    }
     else {
        limpa_form();
        alert("Formato de CEP inválido");
    } 
}//fecha if 
    else {
        limpa_form();
    }
}