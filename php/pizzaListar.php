<?php

    // valores do BD
    $servername = "localhost: 3306";
    $username = "grupoQualquer";
    $passowrd = "senha_qualquer@1234";
    $database = "cardapiodigital";

    
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

    $sql = "SELECT nome,preco,idproduto,tipo_categoria  FROM produto WHERE categoria = 'pizza'";
    $result = mysqli_query($conn, $sql);
    $cont = 0;
    $qnt = mysqli_num_rows($result);
    if (mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
        $informacao[$cont]["preco"] = $row["preco"];
        $informacao[$cont]["nome"] = $row["nome"];
        $informacao[$cont]["tipo_categoria"] = $row["tipo_categoria"];
        $informacao[$cont]["idproduto"] = $row["idproduto"];
        $cont ++;
        }
    }
    else {
        echo "Erro executando SELECT: " . mysqli_error($conn);
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
            }
        }
        else{
            $condicao = false;
        }
    }
    //verifica se entre os produtos há um com desconto
    if($condicao){
        for($i = 0; $i < count($informacao); $i++){
            for($j = 0; $j < count($promocao); $j++){
                if($informacao[$i]["idproduto"] == $promocao[$j]["id"]){
                    $informacao[$i]["preco"] = $promocao[$j]["preco"];
                }
            }
        }
    }
    mysqli_close($conn);
    echo json_encode($informacao,$qnt);

?>