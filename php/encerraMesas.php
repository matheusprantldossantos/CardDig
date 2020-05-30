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
    $sqlPegaMesa = "SELECT idmesa FROM mesa WHERE nome = '$nomeBusca'";
    if($resultListaMesa =  mysqli_query($conn, $sqlPegaMesa)){
        if(mysqli_num_rows($resultListaMesa) > 0){
           if($row = mysqli_fetch_assoc($resultListaMesa)){
                $idAtual = $row["idmesa"];
           }
        }
    }
    else{
        $verdade = "Nao chegou";
    }
    $sqlItensProd = "SELECT produto_idproduto, pedido_comanda FROM item_produto WHERE indexMesa = '$idAtual'";
    $position = 0;
    if($resultListaItensProd =  mysqli_query($conn, $sqlItensProd)){
        $verdade = "Chegou";
        if(mysqli_num_rows($resultListaItensProd) > 0){
            $verdade = "Chegou 2";
           while($row = mysqli_fetch_assoc($resultListaItensProd)){
                $itens[$position]["idProd"] = $row["produto_idproduto"];
                $itens[$position]["comanda"] = $row["pedido_comanda"];
                $position++;
           }
        }
        else{
            $verdade = "nao chegou 2";
        }
    }
    else{
        $verdade = "Nao chegou";
    }
    for($i = 0; $i < count($itens); $i++){
        $idItensAtual = $itens[$i]["idProd"];
        $sqlAlteraItens = "UPDATE item_produto SET andamento = 0 WHERE produto_idproduto = '$idItensAtual'";
        if($resultAlteraItens = mysqli_query($conn, $sqlAlteraItens)){
            $verdade = "alterou os ids dos produtos da mesa";
        }
        else{
            $verdade = "não alterou os produtos";
        } 
    }

    $sqlTerminaMesa = "UPDATE mesa SET terminado = 1 WHERE idmesa = '$idAtual'";
    if($resultMudaMesa = mysqli_query($conn, $sqlTerminaMesa)){
        $verdade = "Alterou a mesa";
    }
    else{
        $verdade = "não alterou a mesa";
    }
    mysqli_close($conn);
    echo json_encode($verdade);
?>