<?php

    $idProd = $_POST["ajax_id_prod"];
    $quantidadeProd = $_POST["ajax_quantidade"];
    $comanda = $_POST["ajax_comanda"];
    $condicao = $_POST["ajax_quesito"];
    $verdade = "aaaa";

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

    /*$sql = "UPDATE item_produto SET quantidade = '$quantidadeProd' WHERE produto_idproduto = '$idProd'";
    if($result = mysqli_query($conn, $sql)){
        $verdade = "quantidade alterado";
    }
    else{
        $verdade = "Erro executando UPDATE: " . mysqli_error($conn);
    }*/
    $sqlItemProd = "SELECT quantidade FROM item_pedido WHERE pedido_comanda = '$comanda'";
    if($resultItem = mysqli_query($conn, $sqlItemProd)){
        if(mysqli_num_rows($resultItem) > 0){
            while($row = mysqli_fetch_assoc($resultItem)){
                $quantidade = $row["quantidade"];
            }
        }
    }
    $sqlProduto = "SELECT preco FROM produto WHERE idproduto = '$idProd'";
    if($resultProduto = mysqli_query($conn, $sqlProduto)){
        if(mysqli_num_rows($resultProduto) > 0){
            while($row = mysqli_fetch_assoc($resultProduto)){
                $preco = $row["preco"];
            }
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
    for($j = 0; $j < count($promocao); $j++){
        if($idProd == $promocao[$j]["id"]){
            $preco = $promocao[$j]["preco"];
        }
    }
    $sqlPedido = "SELECT valor_total FROM pedido WHERE comanda = '$comanda'";
    if($resultPreco = mysqli_query($conn, $sqlPedido)){
        if(mysqli_num_rows($resultPreco) > 0){
            while($row = mysqli_fetch_assoc($resultPreco)){
                $valorPedido = $row["valor_total"];
            }
        }
    }
    if($condicao == "1"){
        $valorPedido += $preco;
    }
    else if($condicao == "0"){
        $valorPedido -= $preco;
    }
    else{
        echo "Erro, nenhum quesito existente";
    }
    $sqlUpdatePedido = "UPDATE pedido SET valor_total = '$valorPedido' WHERE comanda = '$comanda'";
    if($resultUpdatePedido = mysqli_query($conn, $sqlUpdatePedido)){
        $verdade = "mudou o valor de pedido";
    }
    else{
        $verdade = "Erro executando UPDATE: " . mysqli_error($conn);
    }

    if($condicao == "1"){
        $quantidade += 1;
        $sqlUpdateItem = "UPDATE item_pedido SET quantidade = '$quantidade' WHERE comanda = '$comanda'";
        if($resultUpdateItemPed = mysqli_query($conn, $sqlUpdateItem)){
            $verdade = "quantidade alterada";
        }
        else{
            $verdade = "Erro executando UPDATE: " . mysqli_error($conn);
        }
    }
    else if($condicao == "0"){
        $quantidade -= 1;
        $sqlUpdateItem = "UPDATE item_pedido SET quantidade = '$quantidade' WHERE comanda = '$comanda'";
        if($resultUpdateItemPed = mysqli_query($conn, $sqlUpdateItem)){
            $verdade = "quantidade alterada";
        }
        else{
            $verdade = "Erro executando UPDATE: " . mysqli_error($conn);
        }
    }
    else{
        echo "Erro não enviou o quesito";
    }
    $sql = "UPDATE item_produto SET quantidade = '$quantidadeProd' WHERE produto_idproduto = '$idProd'";
    if($result = mysqli_query($conn, $sql)){
        $verdade = "quantidade alterado";
    }
    else{
        $verdade = "Erro executando UPDATE: " . mysqli_error($conn);
    }
    mysqli_close($conn);
    echo json_encode($verdade);
    
    ?>