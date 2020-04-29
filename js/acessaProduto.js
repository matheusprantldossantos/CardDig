$(new Document).ready(function(){
    $("#bProduto").click(function(){
        cadastraProduto();
    });
});
function cadastraProduto(){
    var nome = $("#nomeProd").val();
    var preco = $("#precoProd").val();
    var categoria = $("#categoriaProd").val();
    var disponibilidade = $("#disponibilidadeProd");

    if(nome == " " || preco == " " || categoria == " " || disponibilidade == " "){

        $("#mensagem").html("<div>Preencha todos os campos!</div>");
    }
    else{
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/cadastraProd.php",
            data: {
                ajax_nome : nome,
                ajax_preco : preco,
                ajax_categoria : categoria,
                ajax_disponibilidade : disponibilidade
            },
            success : function(){
                window.location.href = "../pages/telaPedidos.html";
            },
            error : function(){
                var conteudo = "<div>Conexao ajax deu ruim</div>";
                    $("#mensagem").html(conteudo);
                    }
            });
    }
};