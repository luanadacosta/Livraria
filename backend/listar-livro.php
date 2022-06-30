<?php
//EXIBE TODAS AS VARIAVEIS ENVIADAS VIA POST AO PHP
//var_dump($_POST);



// echo $titulo;
//echo "<br>";
//echo $autor;
//echo "<br>";
//echo $categoria;
//echo "<br>";
//echo $valor;

//conexao com o banco de dados
$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$bancodados = 'db_livraria';

try {
  //definindo as configurações de coneção com o banco de dados
  $conexao = new PDO("mysql:host=$servidor;dbname=$bancodados;charset=utf8", $usuario, $senha);
  // seta o modo de erro do pdo para exception
  $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



  //query ver inscrição
    $sql = "SELECT * FROM tb_livros where ativo = 1";



  $comando = $conexao->prepare($sql);

  $comando->execute();

  //essa linha ira tratar os dadods do retrno do SELECT executando no banco de dados, somente e usado nesse caso, em INSERT, UPDATE, DELETE não tem necessidade.
    $resposta = $comando ->fetchAll(PDO::FETCH_ASSOC);

    


  //criar um array para resposta ao usuario, duas chaves 0 e 1, 0 resposta e ok, 1 mensagem e cadastro. 
 
  //converte o array resposta em JSON
  //JSON_UNESCAPED_UNICODE  = Manter o arquivo com mapa

  
} catch (PDOException $e) {
  //aqui é tratado o erro e retornado ao ususario
  $resposta = array("Resposta"=>"Erro","Mensagem"=>$e->getMessage());
}
  $json = json_encode($resposta,JSON_UNESCAPED_UNICODE);
  //retorno e json convertido
  echo $json;