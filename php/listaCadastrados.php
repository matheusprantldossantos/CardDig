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

    $sql = "SELECT email,senha,iddono FROM dono UNION SELECT email,senha,idgarcom FROM garcom UNION SELECT email,senha,idcozinheiro FROM cozinheiro";
    $result = mysqli_query($conn, $sql);
    $cont = 0;
    if (mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
        $informacao[$cont]["email"] = $row["email"];
        $informacao[$cont]["senha"] = $row["senha"];
        $informacao[$cont]["id"] = $row["iddono"];
        $cont ++;
        }
    }
    else {
        echo "Erro executando SELECT: " . mysqli_error($conn);
    }
    
    mysqli_close($conn);
    echo json_encode($informacao);

?>