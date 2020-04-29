$(new Document).ready(function(){
    $("#bBebidas").click(function(){
        $("#bBebidas").toggleClass("item_botao_after");
        fListaBebidas();
    });
    $("#bPizza").click(function(){
        $("#bPizza").toggleClass("item_botao_after");
        fListaPizzas();
    });
    $("#bHamb").click(function(){
        $("#bHamb").toggleClass("item_botao_after");
        fListaHamburger();
    });
    $("#bSobremesa").click(function(){
        $("#bSobremesa").toggleClass("item_botao_after");
        fListaSobremesas();
    });
    $("#bLanche").click(function(){
        $("#bLanches").toggleClass("item_botao_after");
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
            conteudo +="<div id='precoProd'>" + "Preço: " +  info[0].preco + "</div>";

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
            conteudo +="<div id='precoProd'>" + "Preço: " +  info[0].preco + "</div>";

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
            conteudo +="<div id='precoProd'>" + "Preço: " +  info[0].preco + "</div>";

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
            conteudo+="<div id='subNome'>" + "Bebidas Quentes" + "</div>"; 
            conteudo+="<div id='nomeProd'>" + info[0].nome + "</div>"; 
            conteudo+="<div id='precoProd'>" + info[0].preco + "</div>";   
            conteudo+="<div id='nomeProd2'>" + info[1].nome + "</div>"; 
            conteudo+="<div id='precoProd2'>" + info[1].preco + "</div>";  
            
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
            conteudo +="<div id='precoProd'>" + "Preço: " +  info[0].preco + "</div>";
                    $("#divPedidos").html(conteudo);
        }
    });
}