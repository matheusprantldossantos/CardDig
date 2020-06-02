<?php
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

    $cont = 0;
    $sqlItemProm = "SELECT promocao_idpromocao, valorAtual, nome FROM item_modificado";
    if($resultItem = mysqli_query($conn, $sqlItemProm)){
        if(mysqli_num_rows($resultItem) > 0){
            while($row = mysqli_fetch_assoc($resultItem)){
                $itemProm[$cont]["idProm"] = $row["promocao_idpromocao"];
                $itemProm[$cont]["valorAtual"] = $row["valorAtual"];
                $itemProm[$cont]["nome"] = $row["nome"];
                $cont++;
            }
        }
    }
    $cont = 0;
    $sqlPromocao = "SELECT idpromocao, porcentagem FROM promocao";
    if($resultProm = mysqli_query($conn, $sqlPromocao)){
        if(mysqli_num_rows($resultProm) > 0){
            while($row = mysqli_fetch_assoc($resultProm)){
                $prom[$cont]["id"] = $row["idpromocao"];
                $prom[$cont]["porcentagem"] = $row["porcentagem"];
                $cont++;
            }
        }
    }
    for($i = 0; $i < count($itemProm); $i++){
        for($j = 0; $j < count($prom); $j++){
            if($itemProm[$i]["idProm"] == $prom[$j]["id"]){
                $itemProm[$i]["porcentagem"] = $prom[$j]["porcentagem"];
            }
        }
    }
    mysqli_close($conn);
    echo json_encode($itemProm);
?>