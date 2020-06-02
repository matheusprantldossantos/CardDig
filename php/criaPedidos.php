<?php
    $nomeProd = $_POST["ajax_name"];
    $quantidadeProd = $_POST["ajax_quantidade"];
    $quantidadeProd = intval($quantidadeProd);
    if($quantidadeProd == 0){
        $quantidadeProd = 1;
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
    //Pega descontos
    $position = 0;
    $sqlPromocoes = "SELECT produto_idproduto, valorAtual FROM item_modificado";
    if($resultModificado = mysqli_query($conn, $sqlPromocoes)){
        if(mysqli_num_rows($resultModificado) > 0){
            $condicao = true;
            while($row = mysqli_fetch_assoc($resultModificado)){
                $promocao[$position]["id"] = $row["produto_idproduto"];
                $promocao[$position]["preco"] = $row["valorAtual"];
                $position++;
            }
        }
        else{
            $condicao = false;
        }
    }
    else{
        $condicao = false;
    }
    
    //verifica se entre os produtos há um com desconto
    if($condicao){
        for($i = 0; $i < count($infoProd); $i++){
            for($j = 0; $j < count($promocao); $j++){
                if($infoProd[$i]["idproduto"] == $promocao[$j]["id"]){
                    $infoProd[$i]["preco"] = $promocao[$j]["preco"];
                }
            }
        }
    }
    $sqlConjunto = "SELECT indexMesa, idConjunto, comandaMesa FROM  conjunto";
    $resultConjunto = mysqli_query($conn, $sqlConjunto);
    $cont = 0;
    if (mysqli_num_rows($resultConjunto) > 0){
        while($row = mysqli_fetch_assoc($resultConjunto)){
            $infoConjunto[$cont]["indexMesa"] = $row["indexMesa"];
            $infoConjunto[$cont]["comandaMesa"] = $row["comandaMesa"];
            $cont++;
        }
    }
    $pos = 0;
    $sqlCozinha = "SELECT idcozinheiro FROM cozinheiro WHERE ativo = 1";
    if($resultCozinha = mysqli_query($conn, $sqlCozinha)){
        if(mysqli_num_rows($resultCozinha) > 0){
            while($row = mysqli_fetch_assoc($resultCozinha)){
                $cozinheiroAtual[$pos]["id"] = $row["idcozinheiro"];
                $pos++;
            }
        }
    }
    $idCozinheiro = intval($cozinheiroAtual[0]["id"]);
    $idmesa = intval($infoConjunto[0]["indexMesa"]);
    $comanda = intval($infoConjunto[0]["comandaMesa"]);
    $sqlComanda = "SELECT comanda FROM  pedido";
    $result = mysqli_query($conn, $sqlComanda);
    $precoPrimeio = floatval($infoProd[0]["preco"]);
    $idproduto = intval($infoProd[0]["idproduto"]);
    $precoPrimeio = $precoPrimeio * $quantidadeProd;
    if(mysqli_num_rows($result) == 0){
        $verdade2 = "sem nada";
        $sqlPedido = "INSERT INTO pedido (comanda, valor_total, indexMesa, indexCozinha) VALUES ('$comanda', '$precoPrimeio','$idmesa', '$idCozinheiro')";
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
        //Mudar insercao aqui tbm\\
        $sqlItemProduto = "INSERT INTO item_produto (pedido_comanda, produto_idproduto, nome_produto, indexMesa, quantidade)
        VALUES ('$comanda', '$idproduto', '$nomeProd', '$idmesa', '$quantidadeProd')";
        if($resultItemProduto =  mysqli_query($conn, $sqlItemProduto)){
            $verdade = "Ids adiconados no item de produto";
        }
        
    }
    else{
        $sqlComanda = "SELECT comanda FROM  pedido";
        $result = mysqli_query($conn, $sqlComanda);
        while($row = mysqli_fetch_assoc($result)){
            $ultimaComanda = intval($row["comanda"]);
        }
        //Com apenas um pedido
        if($ultimaComanda == $comanda){

        $sqlPedido = "SELECT valor_total FROM pedido WHERE comanda = '$comanda'";
        $sqlItemPedido = "SELECT quantidade FROM item_pedido WHERE pedido_comanda = '$comanda'";
        $sqlItemProduto = "SELECT produto_idproduto FROM item_produto WHERE pedido_comanda = '$comanda'";
        if($resultPedido = mysqli_query($conn, $sqlPedido)){
            $valor_total = mysqli_fetch_assoc($resultPedido);
            $precoCorreto = $valor_total['valor_total'];
            $precoNum = floatval($precoCorreto);
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
            $flag = false;
            while($verificaId = mysqli_fetch_assoc($resultItemProduto)){
                $idAtual = $verificaId['produto_idproduto'];
                if($idAtual == $idproduto){
                $flag = true;
                $verdade = "id já existe";
                $sqlItemProduto = "SELECT quantidade FROM item_produto WHERE produto_idproduto = '$idproduto'";
                $resultItemProduto = mysqli_query($conn, $sqlItemProduto);
                $verificaQnt = mysqli_fetch_assoc($resultItemProduto);
                $quantidadeAtual = $verificaQnt['quantidade'];
                $quantidadeAtual = intval($quantidadeAtual);
                $quantidadeAtual += $quantidadeProd;
                $sqlItemProduto = "UPDATE item_produto SET quantidade = '$quantidadeAtual' WHERE produto_idproduto = '$idproduto'";
               if($resultItemProduto = mysqli_query($conn, $sqlItemProduto)){
                    $verdade = "quantidade alterada";
                    }
                }
            }
            if($flag == false){
            $sqlItemProduto = "INSERT INTO item_produto (pedido_comanda, produto_idproduto, nome_produto, indexMesa, quantidade)
            VALUES ('$comanda', '$idproduto', '$nomeProd', '$idmesa', '$quantidadeProd')";
            if($resultItemProduto = mysqli_query($conn, $sqlItemProduto)){
                $verdade = "novo id cadastrado";
                }
            }
        }
    }
    else{
        //mais de um pedido;
        $verdade2 = "sem nada";
        $sqlPedido = "INSERT INTO pedido (comanda, valor_total, indexMesa, indexCozinha) VALUES ('$comanda', '$precoPrimeio','$idmesa', '$idCozinheiro')";
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
        $sqlItemProduto = "INSERT INTO item_produto (pedido_comanda, produto_idproduto, nome_produto, indexMesa)
        VALUES ('$comanda', '$idproduto', '$nomeProd', '$idmesa')";
        if($resultItemProduto =  mysqli_query($conn, $sqlItemProduto)){
            $verdade = "Ids adiconados no item de produto";
        }
    }
}
    $a = 0;
    mysqli_close($conn);
    echo json_encode($promocao);

?>