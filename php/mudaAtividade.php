<?php
    $id = $_POST["ajax_id"];
    $funcao = $_POST["ajax_func"];
    $retorno = "";

    $servername = "localhost: 3306";
    $username = "grupoQualquer";
    $passowrd = "senha_qualquer@1234";
    $database = "cardapiodigital";

    // cria conexao
    $conn = mysqli_connect($servername, $username, $passowrd, $database);

    //verifica conexão
    if(!$conn){
        echo "</table>";
        echo "</div>";
        die("Falha na conexão com o Banco de Dados: " . mysqli_connect_error());
    }
    // configuração de acentuções da lingua portuguesa
    mysqli_query($conn,"SET NAMES 'utf8'");
    mysqli_query($conn,"SET NAMES 'utf8'");
    mysqli_query($conn,'SET character_set_connection=utf8');
    mysqli_query($conn,'SET character_set_client=utf8');
    mysqli_query($conn,'SET character_set_results=utf8');

    if($funcao == "dono"){
        $sqlDono = "UPDATE dono SET ativo = '1' WHERE iddono = '$id'";
        if($resultDono = mysqli_query($conn, $sqlDono)){
            $retorno = "Atividade do dono alterada";
        }
    }
    else if($funcao == "cozinheiro"){
        $sqlCozinheiro = "UPDATE cozinheiro SET ativo = '1' WHERE idcozinheiro = '$id'";
        if($resultCozinheiro = mysqli_query($conn, $sqlCozinheiro)){
            $retorno = "Atividade do cozinheiro alterada";
        }
    }
    else if($funcao == "garcom"){
        $sqlGarcom = "UPDATE garcom SET ativo = '1' WHERE idgarcom = '$id'";
        if($resultGarcom = mysqli_query($conn, $sqlGarcom)){
            $retorno = "Atividade do garcom alterada";
        }
    }
    else{
        $retorno = "Nenhuma funcao encontrada";
    }
    mysqli_close($conn);
    echo json_encode($retorno);
?>