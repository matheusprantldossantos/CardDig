<?php
    $retorno = "Ok";
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
    $sqlMesa = "SELECT idmesa, nome FROM mesa WHERE andamento = 1";

    $cont = 0;
    if($resultMesa = mysqli_query($conn, $sqlMesa)){
        $retorno = "Ok1";
        if (mysqli_num_rows($resultMesa) > 0){
            while($row = mysqli_fetch_assoc($resultMesa)){
                $mesa[$cont]["id"] = $row["idmesa"];
                $mesa[$cont]["nome"] = $row["nome"];
                $cont++;
            }
        }
    }
    $position = 0;
    $location = 0;
    $listaNomes = [];
    $listaQuantidades = [];
    $anterior = $position;
    $verdade = "";
    
    foreach($mesa as $coisas){
        $idDasMesas = $coisas["id"];
        $sqlItemPedido = "SELECT pedido_comanda, nome_produto, quantidade FROM item_produto WHERE indexMesa = '$idDasMesas'";
        if($resultItem = mysqli_query($conn, $sqlItemPedido)){
            if(mysqli_num_rows($resultItem) > 0){
                while($row = mysqli_fetch_assoc($resultItem)){
                    if($position == 0){
                        array_push($listaNomes, $row["nome_produto"]);
                        array_push($listaQuantidades, $row["quantidade"]);
                        $itens[$location] = array(
                            "nomeMesa" => $coisas["nome"],
                            "comanda" => $row["pedido_comanda"],
                            "infos" => array(
                                "nome" => $listaNomes,
                                "quantidade" => $listaQuantidades
                            )
                        );
                        $position++;
                    }
                    else if($itens[$location]["comanda"] == $row["pedido_comanda"]){
                            array_push($listaNomes, $row["nome_produto"]);
                            array_push($listaQuantidades, $row["quantidade"]);
                            $itens[$location]["infos"]["nome"] = $listaNomes;
                            $itens[$location]["infos"]["quantidade"] = $listaQuantidades;
                    }
                    else{
                        $location++;
                        $position = 0;
                        $listaNomes = [];
                        $listaQuantidades = [];
                        array_push($listaNomes, $row["nome_produto"]);
                        array_push($listaQuantidades, $row["quantidade"]);
                        $itens[$location] = array(
                            "nomeMesa" => $coisas["nome"],
                            "comanda" => $row["pedido_comanda"],
                            "infos" => array(
                                "nome" => $listaNomes,
                                "quantidade" => $listaQuantidades
                            )
                        );
                        $position++;
                    }
                }
            }
        }
    }
    $x = 0;
    for($l = 0; $l < count($itens); $l++){
        if($l == 0){
            $itens[$l]["quantidadeComandas"] = 1;
            foreach($itens[$l]["infos"] as $parts){
                $x = count($parts);
                $itens[$l]["qntNomes"] = $x;
                $itens[$l]["qntQuantidade"] = $x;
            }
        }
        else if($itens[$l - 1]["nomeMesa"] == $itens[$l]["nomeMesa"]){
            $itens[$l - 1]["quantidadeComandas"] += 1;
            foreach($itens[$l]["infos"] as $parts){
                $x = count($parts);
                $itens[$l - 1]["qntNomes"] += $x;
                $itens[$l - 1]["qntQuantidade"] += $x;
            }
        }
        else{
            $itens[$l]["quantidadeComandas"] = 1;
            foreach($itens[$l]["infos"] as $parts){
                $x = count($parts);
                $itens[$l]["qntNomes"] = $x;
                $itens[$l]["qntQuantidade"] = $x;
            }
        }
    }
    
    mysqli_close($conn);
    echo json_encode($itens);
?>