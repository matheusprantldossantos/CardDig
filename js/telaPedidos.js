$(new Document).ready(function(){
    $("#bBebidas").click(function(){
        $("#bBebidas").toggleClass("item_botao_after");
        $("#bPizza").removeClass("item_botao_after").addClass("item_botao");
        $("#bHamb").removeClass("item_botao_after").addClass("item_botao");
        $("#bSobremesa").removeClass("item_botao_after").addClass("item_botao");
        $("#bLanche").removeClass("item_botao_after").addClass("item_botao");
        fListaBebidas();
    });

    $("#bPizza").click(function(){
        $("#bPizza").toggleClass("item_botao_after");
        $("#bBebidas").removeClass("item_botao_after").addClass("item_botao");
        $("#bHamb").removeClass("item_botao_after").addClass("item_botao");
        $("#bSobremesa").removeClass("item_botao_after").addClass("item_botao");
        $("#bLanche").removeClass("item_botao_after").addClass("item_botao");
        fListaPizzas();
    });

    $("#bHamb").click(function(){
        $("#bHamb").toggleClass("item_botao_after");
        $("#bBebidas").removeClass("item_botao_after").addClass("item_botao");
        $("#bPizza").removeClass("item_botao_after").addClass("item_botao");
        $("#bSobremesa").removeClass("item_botao_after").addClass("item_botao");
        $("#bLanche").removeClass("item_botao_after").addClass("item_botao");
        fListaHamburger();
    });

    $("#bDiminuir").click(function(){
        diminuiNum();
    });
    

    $("#bSobremesa").click(function(){
        $("#bSobremesa").toggleClass("item_botao_after");
        $("#bPizza").removeClass("item_botao_after").addClass("item_botao");
        $("#bBebidas").removeClass("item_botao_after").addClass("item_botao");
        $("#bHamb").removeClass("item_botao_after").addClass("item_botao");
        $("#bLanche").removeClass("item_botao_after").addClass("item_botao");
        fListaSobremesas();
    });

    $("#bLanche").click(function(){
        $("#bLanche").toggleClass("item_botao_after");
        $("#bPizza").removeClass("item_botao_after").addClass("item_botao");
        $("#bBebidas").removeClass("item_botao_after").addClass("item_botao");
        $("#bHamb").removeClass("item_botao_after").addClass("item_botao");
        $("#bSobremesa").removeClass("item_botao_after").addClass("item_botao");
        
        fListaLanches();
    });
    
});

function diminuiNum(){
        cont = 0;
        if(cont > 0){
            cont = cont --;
        }
        else{
            cont = 0;
        }

        $("#number").html(cont);
}

function aumentaNum(){
        cont = 0;
        cont = cont++;

        $("#number").html(cont);
}

function fListaHamburger(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/hamburguerListar.php",
        success : function(info){
            //console.log(JSON.stringify(info, ' ', null));
            var conteudo = "";
            for(var i = 0; i < info.length; i++){
            conteudo +="<div id='nomePag'>" + " HAMBURGUER " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo +="<div id='subNome'>" + info[i].tipo_categoria + "</div>";
            conteudo +="<div id='nomeProd" + i.toString() + "'>" + info[i].nome + "</div>";
            conteudo +="<div id='precoProd"+ i.toString() +"'>" + "R$ " +  info[i].preco + "</div>";
            conteudo +="<button class='bContador' id='bDiminuir" + i.toString() + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
            conteudo +="<div id='number'>" + "</div>s";
            conteudo +="<button class='bContador' id='bAumentar" + i.toString() + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
            conteudo +="<button id='bAdicionarP'>" + "Adicionar" + i.toString() + "'>" +"</button>";
            }

            $("#divPedidos").html(conteudo);

        },
        error: function (request, status, error) {
            console.log(error);
        }
    });
}
function fListaLanches(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/lanchesListar.php",
        success : function(info){
            var conteudo = "";
            for(var i = 0; i < info.length; i++){
            conteudo +="<div id='nomePag'>" + " LANCHES " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo +="<div id='subNome'>" + info[i].tipo_categoria + "</div>";
            conteudo +="<div id='nomeProd" + i.toString() + "'>" + info[i].nome + "</div>";
            conteudo +="<div id='precoProd"+ i.toString() +"'>" + "R$ " +  info[i].preco + "</div>";
            conteudo +="<button class='bContador' id='bDiminuir" + i.toString() + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
            conteudo +="<div id='number'>" + "</div>s";
            conteudo +="<button class='bContador' id='bAumentar" + i.toString() + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
            conteudo +="<button id='bAdicionarP'>" + "Adicionar" + i.toString() + "'>" +"</button>";
            }

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

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentar").click(function(){
                    console.log("clicou");
                    count ++;
            
                    $("#number").html(count);
                });    

                $("#bDiminuir").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number").html(count);
                }); 
            });

            var conteudo = "";

            for(var i = 0; i < info.length; i++){
            conteudo+="<div id='nomePag'>" + " PIZZAS " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo +="<div id='subNome'>" + info[i].tipo_categoria + "</div>";
            conteudo +="<div id='nomeProd" + i.toString() + "'>" + info[i].nome + "</div>";
            conteudo +="<div id='precoProd"+ i.toString() +"'>" + "R$ " +  info[i].preco + "</div>";
            conteudo +="<button class='bContador' id='bDiminuir" + i.toString() + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
            conteudo +="<div id='number'>" + "0" + "</div>";
            conteudo +="<button class='bContador' id='bAumentar" + i.toString() + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
            conteudo +="<button id='bAdicionarP'>" + "Adicionar" + i.toString() + "'>" +"</button>";
            conteudo +="<div id='linha3'>" + "</div>";
            }

            $("#divPedidos").html(conteudo);

        }
    });
}
function fListaBebidas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/bebidaListar.php",
        success : function(info){
            var conteudo = "";
            for(var i = 0; i < info.length; i++){
            conteudo +="<div id='nomePag'>" + " BEBIDAS " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo +="<div id='subNome'>" + info[i].tipo_categoria + "</div>";
            conteudo +="<div id='nomeProd" + i.toString() + "'>" + info[i].nome + "</div>";
            conteudo +="<div id='precoProd"+ i.toString() +"'>" + "R$ " +  info[i].preco + "</div>";
            conteudo +="<button class='bContador' id='bDiminuir" + i.toString() + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
            conteudo +="<div id='number'>" + "</div>";
            conteudo +="<button class='bContador' id='bAumentar" + i.toString() + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
            conteudo +="<button id='bAdicionarP'>" + "Adicionar" + i.toString() + "'>" +"</button>";
            }
            
            $("#divPedidos").html(conteudo);
        },
        error : function(){
            console.log("aiai");
        }

    }); // ajax
} // fLista
function fListaSobremesas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/sobremesasListar.php",
        success : function(info){
            var conteudo = "";
            for(var i = 0; i < info.length; i++){
            conteudo +="<div id='nomePag'>" + " SOBREMESAS " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo +="<div id='subNome'>" + info[i].tipo_categoria + "</div>";
            conteudo +="<div id='nomeProd" + i.toString() + "'>" + info[i].nome + "</div>";
            conteudo +="<div id='precoProd"+ i.toString() +"'>" + "R$ " +  info[i].preco + "</div>";
            conteudo +="<button class='bContador' id='bDiminuir" + i.toString() + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
            conteudo +="<div id='number'>" + "</div>";
            conteudo +="<button class='bContador' id='bAumentar" + i.toString() + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
            conteudo +="<button id='bAdicionarP'>" + "Adicionar" + + i.toString() + "'>" +"</button>";
            }
                    
            $("#divPedidos").html(conteudo);
        }
    });
}