<?php
    $nomeBusca = $_POST["ajax_nome"];
    //valores do BD
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

    $sql = "UPDATE mesa SET terminado = 0 WHERE nome = '$nomeBusca'";
    if($result = mysqli_query($conn, $sql)){
        $retorno = "Alterou o estado de terminado";
    }
    mysqli_close($conn);
    echo json_encode($retorno);
?>