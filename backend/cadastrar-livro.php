<?php
//EXIBE TODAS AS VARIAVEIS ENVIADAS VIA POST AO PHP
//var_dump($_POST);

//criar uma variavel em PHP
$titulo = $_POST['titulo'];
$autor = $_POST['autor'];
$categoria = $_POST['categoria'];
$valor = $_POST['valor'];

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
  $sql = "INSERT into tb_livros
          (titulo,categoria,autor,valor)
        VALUES
          ('$titulo','$autor','$categoria',$valor)";

  $comdando = $conexao->prepare($sql);

  $comdando->execute();

  //criar um array para resposta ao usuario, duas chaves 0 e 1, 0 resposta e ok, 1 mensagem e cadastro. 
  $resposta = array("Resposta"=>"Ok","Mensagem"=>"Cadastro realizado com sucesso!");
  //converte o array resposta em JSON
  //JSON_UNESCAPED_UNICODE  = Manter o arquivo com mapa
  $json = json_encode($resposta,JSON_UNESCAPED_UNICODE);

  echo $json;
  
} catch (PDOException $e) {
  echo "Erro: " . $e->getMessage();
}
