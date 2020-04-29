$(new Document).ready(function(){
    $("#bBebidas").click(function(){
        $("#bBebidas").toggleClass("item_botao_after")
        fListaBebidas();
    });
});

function fListaBebidas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/prodListar.php",
        success : function(info,c){
            var conteudo = "";

            conteudo+="<div id='nomePag'>" + " BEBIDAS " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo+="<div id='subNome'>" + "Bebidas Quentes" + "</div>"; 
            conteudo+="<div id='nomeProd'>" + info[0].nome + "</div>"; 
            conteudo+="<div id='precoProd'>" + info[0].preco + "</div>";   
            conteudo+="<div id='nomeProd2'>" + info[1].nome + "</div>"; 
            conteudo+="<div id='precoProd2'>" + info[1].preco + "</div>";  
            
            $("#divPedidos").html(conteudo);
        }
    }); // ajax
} // fLista