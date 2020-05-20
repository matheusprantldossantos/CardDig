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

    $sqlPedidos = "SELECT comanda, valor_total  FROM pedido";
    $result = mysqli_query($conn, $sqlPedidos);
    $cont = 0;
    if (mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
        $informacao[$cont]["comanda"] = $row["comanda"];
        $informacao[$cont]["valor_total"] = $row["valor_total"];
        $cont++;
        }
    }
    else {
        echo "Erro executando SELECT: " . mysqli_error($conn);
    }
    $comandaAtual = $informacao[count($informacao) - 1]["comanda"];
    $sqlItemPedido = "SELECT nome_produto, produto_idproduto  FROM item_produto WHERE pedido_comanda = '$comandaAtual'";
    $resultItemPedido = mysqli_query($conn, $sqlItemPedido);
    $c = 0;
    if(mysqli_num_rows($resultItemPedido) > 0){
        while($row = mysqli_fetch_assoc($resultItemPedido)){
            $informacao[$c]["nomeProd"] = $row["nome_produto"];
            $informacao[$c]["idItemProd"] = $row["produto_idproduto"];
            $c++;
        }
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
    $informacaoCopia = [];
    $listaDados = [];
    $contador = -1;
    foreach($informacao as $lista){
        $contador++;
        foreach($lista as $valores){
            array_push($listaDados, $valores);
            $informacaoCopia["valores"] = $listaDados;
        }
    }
    $especicacaoProdId = [];
    $especicacaoProdPreco = [];
    $produtoCopia = [];
    $somador = -1;

    foreach($produtos as $gerais){
        $somador++;
        foreach($gerais as $interno){
        if($somador % 2 == 0){
            array_push($especicacaoProdPreco, $interno);
        }
        else{
            array_push($especicacaoProdId, $interno);
        }
        }
    }
    $posicao = 0;
    $retorno = 0;
    $produtoCopia["id"] = $especicacaoProdId;
    $produtoCopia["Preco"] = $especicacaoProdPreco;
    for($i = 0; $i < count($informacaoCopia["valores"]); $i++){
        for($j = 0; $j < count($produtoCopia["id"]); $j++){
            if($retorno > 1){
                $a = "continua";
            }
            else if($produtoCopia["id"][$j] == $informacaoCopia["valores"][$i]){
                $informacao[$posicao]["valorProduto"] = $produtoCopia["Preco"][$j];
                $retorno++;
                $posicao++;
            }
        }
    }
    
    
    mysqli_close($conn);
    echo json_encode($informacao);

?>