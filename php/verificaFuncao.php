<?php
    $email = $_POST["ajax_email"];
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

    //verificando se é garcom
    $sqlGarcom = "SELECT idgarcom FROM garcom WHERE email = '$email'";
    $resultGarcom = mysqli_query($conn, $sqlGarcom);
    $c = 0;
    if(mysqli_num_rows($resultGarcom) > 0){
        while($row = mysqli_fetch_assoc($resultGarcom)){
            $dadosFunc[$c]["id"] = $row["idgarcom"];
            $dadosFunc[$c]["funcao"] = "garcom";
            $c++;
        }
    }

      //verificando se é cozinheiro
      $sqlCozinheiro = "SELECT idcozinheiro FROM cozinheiro WHERE email = '$email'";
      $resultCozinheiro = mysqli_query($conn, $sqlCozinheiro);
      $c = 0;
      if(mysqli_num_rows($resultCozinheiro) > 0){
          while($row = mysqli_fetch_assoc($resultCozinheiro)){
              $dadosFunc[$c]["id"] = $row["idcozinheiro"];
              $dadosFunc[$c]["funcao"] = "cozinheiro";
              $c++;
          }
      }
      //verificando se é dono
      $sqlDono = "SELECT iddono FROM dono WHERE email = '$email'";
      $resultDono = mysqli_query($conn, $sqlDono);
      $c = 0;
      if(mysqli_num_rows($resultDono) > 0){
          while($row = mysqli_fetch_assoc($resultDono)){
              $dadosFunc[$c]["id"] = $row["iddono"];
              $dadosFunc[$c]["funcao"] = "dono";
              $c++;
          }
      }
    mysqli_close($conn);
    echo json_encode($dadosFunc);
    

?>