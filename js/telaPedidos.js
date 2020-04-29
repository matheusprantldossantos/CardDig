$(new Document).ready(function(){
    $("#bBebidas").click(function(){
        fListaBebidas();
    });
    $("#bPizza").click(function(){
        fListaPizzas();
    });
    $("#bHamb").click(function(){
        fListaHamburger();
    });
    $("#bSobremesa").click(function(){
        fListaSobremesas();
    });
    $("#bLanche").click(function(){
        fListaLanches();
    });
    
});
function fListaHamburger(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/hamburguerListar.php",
        success : function(info, c){
            var conteudo = "";

            conteudo+="<div id='nomePag'>" + " HAMBURGUER " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo += "<div id='subNome'>" + "Carne" + "</div>";
            conteudo +="<div id='nomeProd'>" + "Nome: "+ info[0].nome + "</div>";
            conteudo +="<div id='descProd'>" + "Preço: " +  info[0].preco + "</div>";

                    $("#divPedidos").html(conteudo);
        }
    });
}
function fListaLanches(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/lanchesListar.php",
        success : function(info, c){
            var conteudo = "";

            conteudo+="<div id='nomePag'>" + " LANCHES " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo += "<div id='subNome'>" + "Saudável" + "</div>";
            conteudo +="<div id='nomeProd'>" + "Nome: "+ info[0].nome + "</div>";
            conteudo +="<div id='descProd'>" + "Preço: " +  info[0].preco + "</div>";

                    $("#divPedidos").html(conteudo);
        }
    });
}
function fListaPizzas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/pizzaListar.php",
        success : function(info, c){
            var conteudo = "";

            conteudo+="<div id='nomePag'>" + " PIZZAS " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo += "<div id='subNome'>" + "Salgadas" + "</div>";
            conteudo +="<div id='nomeProd'>" + "Nome: "+ info[0].nome + "</div>";
            conteudo +="<div id='descProd'>" + "Preço: " +  info[0].preco + "</div>";

                    $("#divPedidos").html(conteudo);
        }
    });
}
function fListaBebidas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/bebidaListar.php",
        success : function(info, c){
            var conteudo = "";

            conteudo+="<div id='nomePag'>" + " BEBIDAS " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo += "<div id='subNome'>" + "Bebidas Quentes" + "</div>";
            conteudo +="<div id='nomeProd'>" + "Nome: "+ info[0].nome + "</div>";
            conteudo +="<div id='descProd'>" + "Preço: " +  info[0].preco + "</div>";

                    $("#divPedidos").html(conteudo);
        }
    }); // ajax
} // fLista
function fListaSobremesas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/sobremesasListar.php",
        success : function(info, c){
            var conteudo = "";

            conteudo+="<div id='nomePag'>" + " SOBREMESAS " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo += "<div id='subNome'>" + "Doces" + "</div>";
            conteudo +="<div id='nomeProd'>" + "Nome: "+ info[0].nome + "</div>";
            conteudo +="<div id='descProd'>" + "Preço: " +  info[0].preco + "</div>";
                    $("#divPedidos").html(conteudo);
        }
    });
}