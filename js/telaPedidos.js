$(Document).ready(function(){
    $("#bBebidas").click(function(){
        fListaBebidas();
    });
});

function fListaBebidas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/prodListar.php",
        success : function(nome,preco){
            var conteudo = "";

            contudo+="<div id='nomePag'>" + " BEBIDAS " + "</div>" +
                    "<div id='linha2'>" + "</div>"
                    "<div id='subNome'>" + "Bebidas Quentes" + "</div>" +
                    "<div id='nomeProd'>" + nome.nome + "</div>" +
                    "<div id='descProd'>" + preco.preco + "</div>";

                    $("#divPedidos").html(conteudo);
        }
    }); // ajax
} // fLista