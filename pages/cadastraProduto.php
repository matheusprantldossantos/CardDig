
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/cadastroProdEstilo.css">
</head>
<body>
    <form method="POST">
        
        <input type="text" name="nome" id="nomeProd" placeholder="Nome do produto"> 
        <input type="number" step="0.01" name="preco" id="precoProd" placeholder="Preco do produto">
        <input type="text" name="categoria" id="categoriaProd" placeholder="Categoria do produto">
        <input type="number" name="disponibilidade" id="disponibilidadeProd"placeholder="Digite 0 ou 1">
        <input type="submit" value="Inserir" id="bProduto">
        <div id="mensagem"></div>
    </form>
</body>
</html>

<?php
if(isset($_POST["nome"])){
 
 $nome = $_POST["nome"];
 $preco = $_POST["preco"];
 $categoria = $_POST["categoria"];
 $disponibilidade = $_POST["disponibilidade"];

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
 
 // select
 $sql = "INSERT INTO produto (nome, preco, categoria, disponibilidade)
 VALUES ('$nome','$preco', '$categoria', '$disponibilidade')";
 echo "<div class='w3-responsive w3-card-4'>";
 if ($result = mysqli_query($conn, $sql)) {
     echo "Um registro adicionado!";
 } else {
     echo "Erro executando INSERT: " . mysqli_error($conn);
 }
 echo "</div>";
 mysqli_close($conn);
}
?>