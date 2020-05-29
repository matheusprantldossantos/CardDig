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
        $sqlDono = "SELECT nome FROM dono WHERE ativo = '1'";
        $resultDono = mysqli_query($conn, $sqlDono);
        if (mysqli_num_rows($resultDono) > 0){
            while($row = mysqli_fetch_assoc($resultDono)){
                $nomeAtual = $row["nome"];
                $retorno = $nomeAtual;
            }
        }
        else{
            $retorno = "nao ha ninguem logado";
        }
    }
    else if($funcao == "cozinheiro"){
        $sql = "SELECT nome FROM cozinheiro WHERE ativo = '1'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_assoc($result)){
                $nomeAtual = $row["nome"];
                $retorno = $nomeAtual;
            }
        }
        else{
            $retorno = "nao ha ninguem logado";
        }
    }
    else if($funcao == "garcom"){
        $sql = "SELECT nome FROM garcom WHERE ativo = '1'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_assoc($result)){
                $nomeAtual = $row["nome"];
                $retorno = $nomeAtual;
            }
        }
        else{
            $retorno = "nao ha ninguem logado";
        }
    }

     mysqli_close($conn);
     echo json_encode($retorno);
?>