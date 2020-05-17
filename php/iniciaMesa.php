<?php
    $nomeMesa = $_POST["ajax_nomeMesa"];
    $comandaAtual = intval($_POST["ajax_comanda"]);
    $contadorLoop = intval($_POST["ajax_contador"]);
    $verdade = "";
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
    if($contadorLoop == 0){
        $sqlMesa = "SELECT idmesa FROM mesa WHERE nome = '$nomeMesa'";
        if($resultMesa = mysqli_query($conn, $sqlMesa)){
            $verdade = "funfou o query";
        if(mysqli_num_rows($resultMesa) > 0){
             $row = mysqli_fetch_assoc($resultMesa);
             $idMesaAtual = $row["idmesa"];
             $sqlConjunto = "INSERT INTO conjunto (comadaMesa, indexMesa) VALUES ('$comandaAtual', ''$idMesaAtual)";
             $resultConjunto = mysqli_query($conn, $sqlConjunto);
            }
        else{
            $sqlMesa = "INSERT INTO mesa (nome) VALUE ('$nomeMesa')";
            if($resultMesa = mysqli_query($conn, $sqlMesa)){
                $verdade = "funfou 2";
                $sqlMesa = "SELECT idmesa FROM mesa WHERE nome = '$nomeMesa'";
                if($resultMesa = mysqli_query($conn, $sqlMesa)){
                    $verdade = "funfou 3";
                    $row = mysqli_fetch_assoc($resultMesa);
                    $idMesaAtual = $row["idmesa"]; 
                    $sqlConjunto = "INSERT INTO conjunto (comandaMesa, indexMesa) VALUES ('$comandaAtual', '$idMesaAtual')";
                    if($resultConjunto = mysqli_query($conn, $sqlConjunto)){
                        $verdade = "funfou 4";
                    }
                    else{
                        $verdade = "nao funfou 4";
                    }
                }
                else{
                    $verdade = "nao funfou 3";
                }
            }
            else{
                $verdade = "nao funfou 2";
            }
        }
    }
    else{
        $verdade = "nao funfou o query";
    }
    }
    else{
        $verdade = "batatinha";
    }
   
    mysqli_close($conn);  
    echo json_encode($verdade);
?>