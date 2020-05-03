
<html>
    <head>
        <meta charset="utf-8">
        <link rel = "icon" type = "imagem/x-icon" href = "../imagens/logoEspartans.png"/> <!-- AQUI VAI COLOCAR O ÍCONE DO SITE -->
        <title>Spartans Food - Cadastro Produto</title>
    </head>
    <body>
        <div id="cadastraFormFunc">
            <form method="POST">
                <div id="titleF">Cadastre-se</div>
                <input type="text" name="email" id="email" placeholder="digite seu email"> <br>
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha"> <br>
                <input type="password" name="confSenha" id="confSenha" placeholder="Comfirme sua senha"> <br>
                <select id="funções" name="funcoes">
                    <option value="dono">Dono</option>
                    <option value="garçom">Garçom</option>
                    <option value="cozinha">Cozinha</option>
                </select>
                <input type="submit" name="submit"> 
            </form>
        </div>
    </body>
</html>

<?php
    if(isset($_POST['submit'])){
    
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $confSenha = $_POST["confSenha"];
    $func = $_POST["funcoes"];

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
    
    // insert
    if($email == "" || $senha == "" || $confSenha == "" || $func == ""){
        echo "Preencha todos os campos";
    }
    else if($senha != $confSenha){
        echo "Preencha os campos corretamente";
    }
    else{
    if($func == "dono"){
        $sql = "INSERT INTO dono (email, senha)
                VALUES ('$email', '$senha')";
    }
    else if($func == "garçom"){
        $sql = "INSERT INTO garcom (email, senha)
                VALUES ('$email', '$senha')";
    }
    else{
        $sql = "INSERT INTO cozinheiro (email, senha)
        VALUES ('$email', '$senha')";
    }
    if ($result = mysqli_query($conn, $sql)) {
        echo "Um registro adicionado!";
    } else {
        echo "Erro executando INSERT: " . mysqli_error($conn);
    }
    echo "</div>";
    }
    mysqli_close($conn);
    }
?>