<?php

    $id = $_POST["ajax_idproduto"];
    $nome = $_POST["ajax_nome"];
    $preco = $_POST["ajax_preco"];
    $disp = $_POST["ajax_disp"];
    $tipo = $_POST["ajax_tipo"];    

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
    // configuração de acentuções da lingua portuguesa
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,'SET character_set_connection=utf8');
        mysqli_query($conn,'SET character_set_client=utf8');
        mysqli_query($conn,'SET character_set_results=utf8');

    // Atualiza os produtos
    
    $sql = "UPDATE produto SET nome = '$nome', preco = '$preco', disponibilidade = '$disp', tipo_categoria = '$tipo' WHERE idproduto = '$id' ";

    if ($result = mysqli_query($conn, $sql)) {
        $retorno = "Um registro alterado!";
    } 
    else {
    echo "Erro executando UPDATE: " . mysqli_error($conn);

    mysqli_close($conn);
    echo json_encode($retorno);
}
?>