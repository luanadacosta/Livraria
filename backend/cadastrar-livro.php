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
    $servidor = `localhost`;
    $ususario = `root`;
    $senha = '';

    try {
        $conexao = new PDO("mysql:host=$servidor;dbname=myDBbiblioteca", $usuario, $senha);
        // set the PDO error mode to exception
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
      } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
      }

?>