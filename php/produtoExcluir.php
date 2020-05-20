<?php

    $nomeProd = $_POST["ajax_nome"];

    //valores do BD
    $servername = "localhost: 3306";
    $username = "grupoQualquer";
    $passowrd = "senha_qualquer@1234";
    $database = "cardapiodigital";

    // cria conexao
    $conn = mysqli_connect($servername, $username, $passowrd, $database);

    //verifica conexão
    if(!$conn){
        $retorno = "não conectou";
        die("Falha na conexão com o Banco de Dados: " . mysqli_connect_error());
    }

    // Faz Select na Base de Dados
        $sql = "DELETE FROM produto WHERE nome = '$nomeProd'";   
        
        if ($result = mysqli_query($conn, $sql)) {
            $retorno = "Um registro excluído!";
        } 
        else {
            $retorno = "Erro executando DELETE: " . mysqli_error($conn);
        }

        mysqli_close($conn);
        echo json_encode($retorno);
?>