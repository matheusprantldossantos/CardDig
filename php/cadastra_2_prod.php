<?php
    class Cadastro{
    private $pdo;
    public $msg = "";
    public function conectar($nomeBanco, $host,$usuario, $senha){
        global $pdo;
        global $msg;
        try{ 
            $pdo = new PDO("mysql: dbname=".$nomeBanco.";host".$host, $usuario, $senha);
        } catch (PDOException $e){
            $msg = $e-> getMessage();   
        }
    }
    public function cadastrar($nome, $preco, $categoria, $disponibilidade){
        global $pdo;
        //verificar se o produto já existe
        $sql = $pdo->prepare("SELECT idproduto FROM produto WHERE nome = :n");
        $sql->bindValue(":n", $nome);
        $sql->execute();
        if($sql->rowCount() > 0){
            return false;//Produto ja existen no BD
        }
        //cadastro
        $sql = $pdo->prepare("INSERT INTO produto (nome, preco, categoria, disponibilidade)
         VALUES (:n, :p, :c, :d)");
        $sql->bindValue(":n", $nome);
        $sql->bindValue(":p", $preco);
        $sql->bindValue(":c", $categoria);
        $sql->bindValue(":d", $disponibilidade);
        $sql->execute();
        return true;
    }
    public function chamar($nome, $preco, $disponibilidade, $categoria){
        global $pdo;
        return true;
    }

}
    ?>
    