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
                resposta.Resposta == "Ok" ? 'success' : 'error')
            
        
            

            //resetar o formulario - limpar os campos
            document.getElementById('form-cadastrar').reset()
        })
    })   
}

//final funççao cadastrar


//inicio função listar
const listar = () =>{
    fetch('backend/listar-livro.php',)
    .then(response => response.json())
    .then(resposta =>{
    //aqui sera manipulado html com os dados retornados pelo php em formato de json
    //o java monta o html de forma dinamica atravez de um laço(repetição)

    //limpa a div que ira armazenar a lista de livros
    document.getElementById('lista-livros-grid').innerHTML += ` `   

    for(let cont = 0;cont < resposta.length;cont++)
        document.getElementById('lista-livros-grid').innerHTML += `
        <figure>
        <img src="img/livro-faltando.png" alt="imagem do livro">
        <figcaption>
            <h2>${resposta[cont]['titulo']}</h2>
            <h6>${resposta[cont]['autor']}</h6>
            <small>${resposta[cont]['id_categoria']}</small>
            <h5>${resposta[cont]['valor']}</h5>
            <button class="btn-comprar">Comprar </button>
        </figcaption>
    </figure>
        `
})


}
//final função listar


