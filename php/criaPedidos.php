<?php
    $nomeProd = $_POST["ajax_name"];
    $quantidadeProd = $_POST["ajax_quantidade"];
    $quantidadeProd = intval($quantidadeProd);
    if($quantidadeProd == 0){
        $quantidadeProd = $quantidadeProd + 1;
    }
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

    $sql = "SELECT idproduto, preco FROM  produto WHERE nome = '$nomeProd'";
    $result = mysqli_query($conn, $sql);
    $cont = 0;
    if (mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            $infoProd[$cont]["idproduto"] = $row["idproduto"];
            $infoProd[$cont]["preco"] = $row["preco"];
            $cont++;
        }
    }
    $comanda = 0;
    $sqlComanda = "SELECT comanda FROM  pedido";
    $result = mysqli_query($conn, $sqlComanda);
    $precoPrimeio = floatval($infoProd[0]["preco"]);
    $idproduto = intval($infoProd[0]["idproduto"]);
    $precoPrimeio = $precoPrimeio * $quantidadeProd;
    if(mysqli_num_rows($result) == 0){
        $sqlPedido = "INSERT INTO pedido (comanda, valor_total) VALUES ('$comanda', '$precoPrimeio')";
        if($result = mysqli_query($conn, $sqlPedido)){
            $verdade = "true";
        }
        else{
            $verdade = "false";
        }
        $sqlItemPedido = "INSERT INTO item_pedido (pedido_comanda, quantidade) VALUES ('$comanda', '$quantidadeProd')";
        if($result = mysqli_query($conn, $sqlItemPedido)){
            $verdade = "true2";
        }
        else{
            $verdade = "false2";
        }
        $sqlItemProduto = "INSERT INTO item_produto (pedido_comanda, produto_idproduto) VALUES ('$comanda', '$idproduto')";
        if($resultItemProduto =  mysqli_query($conn, $sqlItemProduto)){
            $verdade = "Ids adiconados no item de produto";
        }
    }
    else{
        $sqlPedido = "SELECT valor_total FROM pedido WHERE comanda = '$comanda'";
        $sqlItemPedido = "SELECT quantidade FROM item_pedido WHERE pedido_comanda = '$comanda'";
        $sqlItemProduto = "SELECT produto_idproduto FROM item_produto WHERE pedido_comanda = '$comanda'";
        if($resultPedido = mysqli_query($conn, $sqlPedido)){
            $valor_total = mysqli_fetch_assoc($resultPedido);
            $precoCorreto = $valor_total['valor_total'];
            $precoNum = floatval($precoCorreto);
            $testeNum = $precoNum;
            $precoNum += $precoPrimeio;
            $sqlPedido = "UPDATE pedido SET valor_total = '$precoNum' WHERE comanda = '$comanda'";
            if($resultPedido = mysqli_query($conn, $sqlPedido)){
                $verdade = "Pedido alterado com sucesso";
            }
            else{
                $verdade = "pedido nao alterado";
            }

        }
        else{
            $verdade = "Nao foi possivel conectar";
        }
        if($resultItemPedido = mysqli_query($conn, $sqlItemPedido)){
            $quantidade = mysqli_fetch_assoc($resultItemPedido);
            $quantidadeCorreta = $quantidade['quantidade'];
            $quantidadeNum = intval($quantidadeCorreta);
            $quantidadeNum += $quantidadeProd;
            $sqlItemPedido = "UPDATE item_pedido SET quantidade = '$quantidadeNum' WHERE pedido_comanda = '$comanda'";
            if($resultItemPedido = mysqli_query($conn, $sqlItemPedido)){
                $verdade = "item de pedido alterado com sucesso";
            }
            else{
                $verdade = "item de pedido nao alterado";
            }
        }
        if($resultItemProduto = mysqli_query($conn, $sqlItemProduto)){
            $verificaId = mysqli_fetch_assoc($resultItemProduto);
            $idAtual = $verificaId['produto_idproduto'];
            if($idAtual == $idproduto){
                $verdade = "id já existe";
            }
            $sqlItemProduto = "INSERT INTO item_produto (pedido_comanda, produto_idproduto) VALUES ('$comanda', '$idAtual')";
            if($resultItemProduto = mysqli_query($conn, $sqlItemProduto)){
                $verdade = "novo id cadastrado";
            }
        }

    }
    mysqli_close($conn);
    echo json_encode("Foi");

?>