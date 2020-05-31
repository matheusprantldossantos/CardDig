<?php
    $nomeDoProd = "pudim";
    $categoriaProd = "sobremesa";
    $porcentagem = 20;

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
 
    $location = 0;
    $sqlProdutoMudar = "SELECT idproduto, preco, categoria FROM produto WHERE nome = '$nomeDoProd'";
    if($resultIdPreco = mysqli_query($conn, $sqlProdutoMudar)){
        if(mysqli_num_rows($resultIdPreco) > 0){
            while($row = mysqli_fetch_assoc($resultIdPreco)){
                $produto[$location]["id"] = $row["idproduto"];
                $produto[$location]["preco"] = $row["preco"];
                $produto[$location]["categoria"] = $row["categoria"];
                $location++;
            }
        }
    }
    $idProdAtual = $produto[0]["id"];
    $sqlPromocao = "INSERT INTO promocao (porcentagem, idProdEsp) VALUES ('$porcentagem', '$idProdAtual')";
    if(mysqli_query($conn, $sqlPromocao)){
        $verdade = "Insecao nas promocoes feita";
    }
    else{
        $verdade = "Nao inseriu";
    }
    $donoLocation = 0;
    $sqlDono = "SELECT iddono FROM dono WHERE ativo = 1";
    if($resultDono = mysqli_query($conn, $sqlDono)){
        if(mysqli_num_rows($resultDono) > 0){
            while($row = mysqli_fetch_assoc($resultDono)){
                $dono[$donoLocation] = $row["iddono"];
                $donoLocation++;
            }
        }
    }
    else{
        $verdade = "n chegou";
    }
    $cont = 0;
    $sqlGarantia = "SELECT idpromocao, porcentagem FROM promocao WHERE idProdEsp = '$idProdAtual'";
    if($resultGarantia = mysqli_query($conn, $sqlGarantia)){
        if(mysqli_num_rows($resultGarantia) > 0){
            $verdade = "nao ta null";
            while($row =  mysqli_fetch_assoc($resultGarantia)){
                $promocao[$cont]["idProm"] = $row["idpromocao"];
                $promocao[$cont]["porcentagem"] = $row["porcentagem"];
            }
        }
    }
    $valorNovo = $produto[0]["preco"] - (($promocao[0]["porcentagem"] * $produto[0]["preco"]) / 100.0);
    $donoAtual = $dono[0];
    $categoria = $produto[0]["categoria"];
    $idPromAtual = $promocao[0]["idProm"];
    $sqlItemModificado = "INSERT INTO item_modificado (dono_iddono, produto_idproduto, promocao_idpromocao, valorAtual, nome, categoria)
    VALUES ('$donoAtual', '$idProdAtual', '$idPromAtual', '$valorNovo', '$nomeDoProd', '$categoriaProd')";
    if(mysqli_query($conn, $sqlItemModificado)){
        $verdade = "Criado item modificado";
    }
    mysqli_close($conn);
    echo json_encode($promocao[0]);
?>