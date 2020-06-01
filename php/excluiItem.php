<?php
    $nomeAtual = $_POST["ajax_nome"];
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

    $sqlProd = "SELECT idproduto, preco FROM produto WHERE nome  = '$nomeAtual'";
    $location = 0;
    if($resultProd = mysqli_query($conn, $sqlProd)){
        if(mysqli_num_rows($resultProd) > 0){
            while($row =  mysqli_fetch_assoc($resultProd)){
                $produto[$location]["id"] = $row["idproduto"];
                $produto[$location]["preco"] = $row["preco"];
                $location++;
            }
        }
    }
    else{
        $verdade = "Não chegou";
    }
    $idProd = $produto[0]["id"];
    $sqlItemProdPega = "SELECT pedido_comanda, quantidade FROM item_produto WHERE produto_idproduto = '$idProd'";
    $pos = 0;
    if($resultItemProdPega = mysqli_query($conn, $sqlItemProdPega)){
        if(mysqli_num_rows($resultItemProdPega) > 0){
            while($row =  mysqli_fetch_assoc($resultItemProdPega)){
                $itemProd[$pos]["comanda"] = $row["pedido_comanda"];
                $itemProd[$pos]["quantidade"] = $row["quantidade"];
                $pos++;
            }
        }
    }
    $comandaAtual = $itemProd[0]["comanda"];
    $sqlItemPedPega = "SELECT quantidade FROM item_pedido WHERE pedido_comanda = '$comandaAtual'";
    $cont = 0;
    if($resultItemPedPega = mysqli_query($conn, $sqlItemPedPega)){
        if(mysqli_num_rows($resultItemPedPega) > 0){
            while($row =  mysqli_fetch_assoc($resultItemPedPega)){
                $itemPed[$cont]["quantidade"] = $row["quantidade"];
                $cont++;
            }
        }
    }
    $c = 0;
    $sqlPedidoPega = "SELECT valor_total FROM pedido WHERE comanda = '$comandaAtual'";
    if($resultPedidoPega = mysqli_query($conn, $sqlPedidoPega)){
        if(mysqli_num_rows($resultItemPedPega) > 0){
            while($row =  mysqli_fetch_assoc($resultPedidoPega)){
                $pedido[$c]["valor"] = $row["valor_total"];
                $c++;
            }
        }
    }
    $novoPreco = $pedido[0]["valor"] - ($produto[0]["preco"] * $itemProd[0]["quantidade"]);
    $novaQnt = $itemPed[0]["quantidade"] - $itemProd[0]["quantidade"];

    $sqlUpdatePed = "UPDATE pedido SET valor_total = '$novoPreco' WHERE comanda = '$comandaAtual'";
    if($resultUpdatePed = mysqli_query($conn, $sqlUpdatePed)){
        $verdade = "Preco atualizado no pedido"; 
    }
    
    $verdade = "nao entrou";
    $sqlMudaQnt = "UPDATE item_pedido SET quantidade = '$novaQnt' WHERE pedido_comanda = '$comandaAtual'";
    if($resultUpdateItemPed = mysqli_query($conn, $sqlMudaQnt)){
        $verdade = "Preco atualizado no pedido"; 
    }
    
    $sqlItemProdExclui = "DELETE FROM item_produto WHERE produto_idproduto = '$idProd' and pedido_comanda = '$comandaAtual'";
    if($resultItemProdExclui = mysqli_query($conn, $sqlItemProdExclui)){
        $verdade = "item de produto excluido";
    }
    mysqli_close($conn);
    echo json_encode($verdade);
?>