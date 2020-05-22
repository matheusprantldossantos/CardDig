<?php

     $funcao = $_POST["ajax_func"];
     $retorno = "";
     $idAtual = -100;
 
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
     if($funcao == "dono"){
        $sqlDono = "SELECT iddono FROM dono WHERE ativo = '1'";
        $resultDono = mysqli_query($conn, $sqlDono);
        if (mysqli_num_rows($resultDono) > 0){
            while($row = mysqli_fetch_assoc($resultDono)){
                $idAtual = $row["iddono"]; 
            }
        }
        else{
            $retorno = "nao ha ninguem logado";
        }
        if($idAtual != -100){
            $sqlDono = "UPDATE dono SET ativo = '0' WHERE iddono = '$idAtual'";
            if($resultDono = mysqli_query($conn, $sqlDono)){
                $retorno = "Dono deslogado";
            }
        }
    }
    else if($funcao == "cozinheiro"){
        $sql = "SELECT idcozinheiro FROM cozinheiro WHERE ativo = '1'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_assoc($result)){
                $idAtual = $row["idcozinheiro"]; 
            }
        }
        else{
            $retorno = "nao ha ninguem logado";
        }
        if($idAtual != -100){
            $sql = "UPDATE cozinheiro SET ativo = '0' WHERE idcozinheiro = '$idAtual'";
            if($result = mysqli_query($conn, $sql)){
                $retorno = "Cozinheiro deslogado";
            }
        }
    }
    else if($funcao == "garcom"){
        $sql = "SELECT idgarcom FROM garcom WHERE ativo = '1'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_assoc($result)){
                $idAtual = $row["idgarcom"]; 
            }
        }
        else{
            $retorno = "nao ha ninguem logado";
        }
        if($idAtual != -100){
            $sql = "UPDATE garcom SET ativo = '0' WHERE idgarcom = '$idAtual'";
            if($result = mysqli_query($conn, $sql)){
                $retorno = "Garcom deslogado";
            }
        }
    }

     mysqli_close($conn);
     echo json_encode($retorno);
?>