<?php
    $nomeMesa = $_POST["ajax_nomeMesa"];
    $comandaAtual = intval($_POST["ajax_comanda"]);
    $contadorLoop = intval($_POST["ajax_contador"]);
    $verdade = "";

    $servername = "localhost: 3306";
    $username = "grupoQualquer";
    $passowrd = "senha_qualquer@1234";
    $database = "cardapiodigital";

    // cria conexaox
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

    $sqlMesa = "SELECT idmesa FROM mesa WHERE nome = '$nomeMesa'";
    if($resultMesa = mysqli_query($conn, $sqlMesa)){
        $verdade = "funfou o query";
    if(mysqli_num_rows($resultMesa) > 0){
        $verdade = "Maior que 0";
        $row = mysqli_fetch_assoc($resultMesa);
        $idMesaAtual = intval($row["idmesa"]);
        $sql = "INSERT INTO conjunto (comandaMesa, indexMesa) VALUES ($comandaAtual, $idMesaAtual)";
        if($result = mysqli_query($conn, $sql)){
            $verdade = "funfou";
        }
        }
    }
   
    mysqli_close($conn);  
    echo json_encode($verdade);
?>