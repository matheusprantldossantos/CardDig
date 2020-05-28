<?php
    $servername = "localhost: 3306";
    $username = "grupoQualquer";
    $passowrd = "senha_qualquer@1234";
    $database = "cardapiodigital";

    // cria conexaox
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
    $sql = "SELECT nome FROM mesa";
    $pos = 0;
    if($resultMesa = mysqli_query($conn, $sql)){
        $verdade = "funfou o query";
    if(mysqli_num_rows($resultMesa) > 0){
         while($row = mysqli_fetch_assoc($resultMesa)){
         $nomeAtual = $row["nome"];
         $nomes[$pos] = $nomeAtual;
         $pos++;
         }
    }
}
    $verdade = "foi";
    mysqli_close($conn);  
    echo json_encode($nomes);
?>