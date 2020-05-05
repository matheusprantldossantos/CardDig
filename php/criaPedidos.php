<?php
    $nomeProd = $_POST["ajax_name"];
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

    $sql = "SELECT idproduto, preco FROM  produto WHERE nome = $nomeProd";
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
    $quantidade = 1;
    $sql = "SELECT comanda FROM  pedido";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) == 0){
        $sql = "INSERT INTO pedidos (comanda, valor_total) VALUES ('$comanda', '$infoProd[0]['preco']')";
        $sql = "INSERT INTO item_pedido (pedido_comanda, quantidade) VALUES ('$comanda', '$quantidade')";
    }
    else{
        while($row = mysqli_fetch_assoc($resultPedido)){
            $quantidade++;
            $preco = $row["preco"];
            $preco += $preco;
            $sql = "UPDATE pedido SET preco = '$preco' WHERE comanda = '$comanda'";
            $sql = "UPDATE item_pedido SET quantidade = '$quantidade' WHERE pedido_comanda = '$comanda'";
        }
    }



    mysqli_close($conn);
    echo json_encode($infoProd);

?>