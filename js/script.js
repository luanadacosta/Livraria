//criar uma função em JavaScript
//formato ES6 baseado em arrow function

//função que realiza o cadastro de livro alert('Ok') 
const cadastrar = () =>{
    //declara a variavel titulo e captura o valor preeenchido pelo usuario
    let titulo = document.getElementById('titulo').value
    //declara a variavel autor e captura o valor preenchido pelo ususario
    let autor = document.getElementById('autor').value
    //declara a variavel aucategoria e captura o valor preenchido pelo ususario
    let categoria = document.getElementById('categoria').value
    //declara a variavel valor e captura o valor preenchido pelo ususario
    let valor = document.getElementById('valor').value

    //verifica se a variavel titulo se esta vazia
    //se verdadeiro(estiver sem preenchimento) ira exibirum alert
    if(titulo == ''){
        alert('Digite o titulo do livro')
        return 
    }

    //verifica se a variavel autor se esta vazia
    //se verdadeiro(estiver sem preenchimento) ira exibirum alert
    if(autor == ''){
        alert('digite o autor do livro')
        return
    }

    //verifica se a variavel categoria se esta vazia
    //se verdadeiro(estiver sem preenchimento) ira exibirum alert
    if(categoria == ''){
        alert('digite a categoria do livro')
        return
    }
    
    //verifica se a variavel valor se esta vazia
    //se verdadeiro(estiver sem preenchimento) ira exibirum alert
    if(valor == ''){
        alert('digite o valor do livro')
        return
    }

    //envio dos dados usando fetch ao backend
    fetch('backend/cadastrar-livro.php',{
        method:'POST',
        body: `titulo=${titulo}&autor=${autor}&categoria=${categoria}&valor=${valor}`,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
    }
    })

    //abrindo função, then si teve sucesso faça, então.
    .then(function(response){
        response.json()
        .then(resposta=>{
            //aqui é onde iremos receber e tratar a resposta do PHP
            Swal.fire(
                'Atenção',
                resposta.Mensagem,
                'sucess'
              )

            //resetar o formulario - limpar os campos
            document.getElementById('form-cadastrar').reset()
        })
    })   
        
    

}


