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

            conteudo += "<div id='titleCateg'>" + info[0].categoria.toUpperCase() + "</div>";

            for(var i = 0; i < info.length; i++){
                conteudo += "<div class='produtos' id='prodNom"+ i +"'>" + info[i].nome + "</div>";
                conteudo += "<div class='produtos' id='prodPre"+ i +"'>" + "R$ " + info[i].preco + "</div>";
                conteudo += "<div class='produtos' id='prodTip"+ i +"'>" + info[i].tipo_categoria + "</div>";
                conteudo += "<button class='buttEdit' id='prodEdit"+ i +"'>" + "<i class='far fa-edit'></i>" + "</button>";
                conteudo += "<button class='buttExc' id='prodExc"+ i +"'>" + "<i class='far fa-trash-alt'></i>" + "</button>";
                conteudo += "<div class='linhaProd' id='line"+ i +"'>" + "</div>";
            }
            
            $("#listar").html(conteudo);
            
        },
        error : function(){
            console.log("não funfou");
        }
    });
}

