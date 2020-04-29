$(new Document).ready(function(){
    $("#bBebidas").click(function(){
        fListaBebidas();
    });
});

function fListaBebidas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/prodListar.php",
        success : function(info){
            var conteudo = "";

            conteudo+="<div id='nomePag'>" + " BEBIDAS " + "</div>" +
                    "<div id='linha2'>" + "</div>"
                    "<div id='subNome'>" + "Bebidas Quentes" + "</div>" +
                    "<div id='nomeProd'>" + info[0].preco + "</div>" +
                    "<div id='descProd'>" + info[0].nome + "</div>";    

                    $("#divPedidos").html(conteudo);
        }
    }); // ajax
} // fLista