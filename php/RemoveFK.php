<?php
    $estado = "";
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

        $sqlConjunto = "SELECT idConjunto from Conjunto";
        $result = mysqli_query($conn, $sqlConjunto);
        $cont = 0;
        if (mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_assoc($result)){
                $ids[$cont]["idConjunto"] = $row["idConjunto"];
                $cont++; 
            }
        }
        $menor = 0;
        for($i = 0; $i < count($ids); $i++){
            if($i == 0){
                $menor = $ids[$i]["idConjunto"];
            }
            else if($ids[$i]["idConjunto"] < $menor){
                $menor = $ids[$i]["idConjunto"]; 
            }
        }
        
        $sqlConjunto = "ALTER TABLE conjunto DROP FOREIGN KEY conjuntoMesa";
        if($result = mysqli_query($conn, $sqlConjunto)){
            $estado = "Conjunto sem FK";
        }
        else{
            $estado = "Falha na conexao do BD";
        }
        $sqlConjunto = "DELETE FROM conjunto WHERE idConjunto = '$menor'";
        if($result = mysqli_query($conn, $sqlConjunto)){
            $estado = "deletou o primeiro";
        }
        else{
            $estado = "nao deletou o primeiro";
        }
        $sqlConjunto = "ALTER TABLE conjunto ADD CONSTRAINT conjuntoMesa FOREIGN KEY (indexMesa) REFERENCES mesa(idmesa) ON DELETE RESTRICT ON UPDATE RESTRICT";
        if($result = mysqli_query($conn, $sqlConjunto)){
            $estado = "Retornou a foreign key";
        }
        else{
            $estado = "Não retornou a foreign key";
        }
        mysqli_close($conn);
        echo json_encode($estado);
?>