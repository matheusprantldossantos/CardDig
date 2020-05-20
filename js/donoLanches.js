$(document).ready(function(){
    fListarCategoria();
});

function fListarCategoria(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/lanchesListar.php",
        success : function(info){   
            console.log("funfou");
            var conteudo = "";

            conteudo += "<div id='titleCateg'>" + "LANCHES" + "</div>";

            for(var i = 0; i < info.length; i++){
                conteudo += "<div class='produtos' id='prodNom"+ i +"'>" + info[i].nome + "</div>";
                conteudo += "<div class='produtos' id='prodPre"+ i +"'>" + "R$ " + info[i].preco + "</div>";
                conteudo += "<div class='produtos' id='prodTip"+ i +"'>" + info[i].tipo_categoria + "</div>";
                conteudo += "<button class='buttEdit' id='prodEdit"+ i +"'>" + "<i class='far fa-edit'></i>" + "</button>";
                conteudo += "<button class='buttExc' id='prodExc"+ i +"'>" + "<i class='far fa-trash-alt'></i>" + "</button>";
                conteudo += "<div class='linhaProd' id='line"+ i +"'>" + "</div>";
            }
            
            $("#listar").html(conteudo);

            $(new Document).ready(function(){
                $("#prodExc0").click(function(){
                    excluirProduto(info[0].nome);
                    location.reload(true);
                });
            });
            
            $(new Document).ready(function(){
                $("#prodExc1").click(function(){
                    excluirProduto(info[1].nome);
                    location.reload(true);
                });
            });

            $(new Document).ready(function(){
                $("#prodExc2").click(function(){
                    excluirProduto(info[2].nome);
                    location.reload(true);
                });
            });

            $(new Document).ready(function(){
                $("#prodExc3").click(function(){
                    excluirProduto(info[3].nome);
                    location.reload(true);
                });
            });

            $(new Document).ready(function(){
                $("#prodExc4").click(function(){
                    excluirProduto(info[4].nome);
                    location.reload(true);
                });
            });

            $(new Document).ready(function(){
                $("#prodExc5").click(function(){
                    excluirProduto(info[5].nome);
                    location.reload(true);
                });
            });

            $(new Document).ready(function(){
                $("#prodExc6").click(function(){
                    excluirProduto(info[6].nome);
                    location.reload(true);
                });
            });
            
        },
        error : function(){
            console.log("não funfou");

            var conteudo = "";

            conteudo += "<div id='titleCateg'>" + "LANCHES" + "</div>";
            $("#listar").html(conteudo);
        }
    });
}

function excluirProduto(nome){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/produtoExcluir.php",
        data:{
            ajax_nome : nome
        },
        success : function(retorno){ 
            console.log(retorno)
        },
        error : function(){
            console.log("n deu")
        }
    });
}
