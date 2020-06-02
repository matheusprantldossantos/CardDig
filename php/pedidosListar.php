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

    //select
    $nomeLista = [];
    $idProdutoLista = [];
    $sqlPedidos = "SELECT comanda, valor_total  FROM pedido";
    $result = mysqli_query($conn, $sqlPedidos);
    $cont = 0;
    $contW = 0;
    $antecessor = $contW;
    if (mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
        $nomeLista = [];
        $idProdutoLista = [];
        $informacao[$cont]["comanda"] = $row["comanda"];
        $informacao[$cont]["valor_total"] = $row["valor_total"];
        $comandaAtual = $row["comanda"];
        $sqlItemPedido = "SELECT nome_produto, produto_idproduto  FROM item_produto WHERE pedido_comanda = '$comandaAtual'";
        $resultItemPedido = mysqli_query($conn, $sqlItemPedido);
        if(mysqli_num_rows($resultItemPedido) > 0){
            while($row = mysqli_fetch_assoc($resultItemPedido)){
                array_push($nomeLista ,$row["nome_produto"]);
                array_push($idProdutoLista ,$row["produto_idproduto"]);
                $informacao[$cont]["infos"] = array(
                    "nome" => $nomeLista,
                    "idProduto" => $idProdutoLista
                );
            }
        }
        $cont++;
        }
        $antecessor = $contW;
        $contW++;
    }
    else {
        echo "Erro executando SELECT: " . mysqli_error($conn);
    }

    $sqlPrecoProd = "SELECT preco, idproduto FROM produto";
    $resultProduto = mysqli_query($conn, $sqlPrecoProd);
    $cont = 0;
    if (mysqli_num_rows($resultProduto) > 0){
        while($row = mysqli_fetch_assoc($resultProduto)){
        $produtos[$cont]["precoProduto"] = $row["preco"];
        $produtos[$cont]["idProd"] = $row["idproduto"];
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
        for($i = 0; $i < count($produtos); $i++){
            for($j = 0; $j < count($promocao); $j++){
                if($produtos[$i]["idProd"] == $promocao[$j]["id"]){
                    $produtos[$i]["precoProduto"] = $promocao[$j]["preco"];
                }
            }
        }
    }
    
    $especicacaoProdId = [];
    $especicacaoProdPreco = [];
    $somador = 0;

    foreach($produtos as $gerais){
        foreach($gerais as $interno){
        if($somador % 2 == 0){
            array_push($especicacaoProdPreco, $interno);
            $somador++;
        }
        else{
            array_push($especicacaoProdId, $interno);
            $somador++;
        }
        }
    }
    //Precisa verificar se mudou a comanda
    $cont = 0;
    for($i = 0; $i < count($especicacaoProdId); $i++){
        for($j = 0; $j < count($informacao); $j++){
            for($k = 0; $k < count($informacao[count($informacao) - 1]["infos"]["idProduto"]); $k++){
                if($especicacaoProdId[$i] == $informacao[count($informacao) - 1]["infos"]["idProduto"][$k]){
                        $informacao[$j]["infos"]["precos"][$k] = $especicacaoProdPreco[$i];
                        $idAtual =  $especicacaoProdId[$i];
                        $sqlItemProduto = "SELECT quantidade FROM item_produto WHERE produto_idproduto = '$idAtual'";
                        $resultItemProduto = mysqli_query($conn, $sqlItemProduto);
                        $verificaQnt = mysqli_fetch_assoc($resultItemProduto);
                        $quantidadeAtual = $verificaQnt['quantidade'];
                        $quantidadeAtual = intval($quantidadeAtual);
                        $informacao[$j]["infos"]["subTotal"][$k] = ($especicacaoProdPreco[$i] * $quantidadeAtual);
                        $informacao[$j]["infos"]["quantidade"][$k] = $quantidadeAtual;
                }
            }
        }
    }
    mysqli_close($conn);
    echo json_encode($informacao);

?>