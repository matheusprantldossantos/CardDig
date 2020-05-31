
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="../css/cadastraFuncionario.css">
        <link rel = "icon" type = "imagem/x-icon" href = "../imagens/logoEspartans.png"/> <!-- AQUI VAI COLOCAR O ÍCONE DO SITE -->
        <title>Spartans Food - Cadastro Funcionário</title>
    </head>
    <body>
        <div id="cadastraFormFunc">
            <form method="POST">
                <div id="titleF">Cadastro</div>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome"> <br>
                <input type="text" name="email" id="email" placeholder="Digite seu email"> <br>
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha"> <br>
                <input type="password" name="confSenha" id="confSenha" placeholder="Confirme sua senha"> <br>
                <select id="funcoes" name="funcoes">
                    <option id="tp" class="opt" value="dono">Dono</option>
                    <option class="opt" value="garçom">Garçom</option>
                    <option class="opt" value="cozinha">Cozinha</option>
                </select>
                <button id="bConfirmar" name="submit">Confirmar</button>
                <button id="bVoltar" name="voltar"><a href="login.html">Voltar</a></button>
            </form>
        </div>
    </body>
</html>

<?php
    if(isset($_POST['submit'])){
    
        $nome = $_POST["nome"];
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
            die("Falha na conexão com o Banco de Dados: " . mysqli_connect_error());
        }
        // configuração de acentuções da lingua portuguesa
            mysqli_query($conn,"SET NAMES 'utf8'");
            mysqli_query($conn,"SET NAMES 'utf8'");
            mysqli_query($conn,'SET character_set_connection=utf8');
            mysqli_query($conn,'SET character_set_client=utf8');
            mysqli_query($conn,'SET character_set_results=utf8');
        
        // insert
        $letra = "@";
        $possui = strpos($email, $letra);
        
        if($nome == "" || $email == "" || $senha == "" || $confSenha == "" || $func == ""){
            echo "<div id='msgErro'>";
            echo "Preencha os campos corretamente";
            echo "</div>";
        }
        else if(!$possui){
            echo "<div id='msgErro'>";
            echo "Email incorreto!";
            echo "</div>";
        }
        else if($senha != $confSenha){
            echo "<div id='msgErro'>";
            echo "Senhas não correspondem!";
            echo "</div>";
        }
        else{
            if($func == "dono"){
                $sql = "INSERT INTO dono (email, senha, nome)
                        VALUES ('$email', '$senha', '$nome')";
            }
            else if($func == "garçom"){
                $sql = "INSERT INTO garcom (email, senha, nome)
                        VALUES ('$email', '$senha', '$nome')";
            }
            else{
                $sql = "INSERT INTO cozinheiro (email, senha, nome)
                VALUES ('$email', '$senha', '$nome')";
            }

            if ($result = mysqli_query($conn, $sql)) {
                echo "<div id='msg'>";
                echo "Cadastrado com sucesso!"; 
                echo "</div>";
            } else {
                echo "Erro executando INSERT: " . mysqli_error($conn);
            }
        }
        mysqli_close($conn);
    }
    
?>