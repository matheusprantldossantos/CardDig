<?php

    $nome = $_POST["ajax_nome"];

    //valores do BD
    $servername = "localhost: 3306";
    $username = "grupoQualquer";
    $passowrd = "senha_qualquer@1234";
    $database = "cardapiodigital";

    // cria conexao
    $conn = mysqli_connect($servername, $username, $passowrd, $database);

    //verifica conexão
    if(!$conn){
        $informacao = "não conectou";
        die("Falha na conexão com o Banco de Dados: " . mysqli_connect_error());
    }
    // configuração de acentuções da lingua portuguesa
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,'SET character_set_connection=utf8');
        mysqli_query($conn,'SET character_set_client=utf8');
        mysqli_query($conn,'SET character_set_results=utf8');

    //select

    $sql = "SELECT nome, preco, disponibilidade, tipo_categoria FROM produto WHERE nome = '$nome'";
    $cont = 0;
    if ($result = mysqli_query($conn, $sql)){
        if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)){
                $informacao["preco"] = $row["preco"];
                $informacao["nome"] = $row["nome"];
                $informacao["tipo_categoria"] = $row["tipo_categoria"];
                $informacao["disponibilidade"] = $row["disponibilidade"];
            }
        }
    }
    else {
        $informacao = "Erro executando SELECT: " . mysqli_error($conn);
    }
    
    mysqli_close($conn);
    echo json_encode($informacao);

?>