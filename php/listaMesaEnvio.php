<?php
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
    $sqlMesa = "SELECT nome FROM mesa WHERE andamento = 1";

    $cont = 0;
    if($resultMesa = mysqli_query($conn, $sqlMesa)){
        if (mysqli_num_rows($resultMesa) > 0){
            while($row = mysqli_fetch_assoc($resultMesa)){
                $mesa[$cont]["nome"] = $row["nome"];
                $cont++;
            }
        }
    }
    else{
        $retorno = "not ok";
    }
    mysqli_close($conn);
    echo json_encode($mesa);
?>