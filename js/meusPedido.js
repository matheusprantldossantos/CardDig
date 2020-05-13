$(new Document).ready(function(){
    listaPedidos();
    $("#bPedidos").toggleClass("item_botao_after");
    $("#bLanche").removeClass("item_botao_after").addClass("item_botao");
    $("#bPizza").removeClass("item_botao_after").addClass("item_botao");
    $("#bBebidas").removeClass("item_botao_after").addClass("item_botao");
    $("#bHamb").removeClass("item_botao_after").addClass("item_botao");
    $("#bSobremesa").removeClass("item_botao_after").addClass("item_botao");
    $("#bComb").removeClass("item_botao_after").addClass("item_botao");
    $("#bBebidas").click(function(){
        window.location.href = "../pages/Bebidas.html";
    });

    $("#bPizza").click(function(){
        window.location.href = "../pages/Pizza.html";
    });

    $("#bHamb").click(function(){
        window.location.href = "../pages/Hamburguers.html";
    });

    $("#bSobremesa").click(function(){
        window.location.href = "../pages/Sobremesas.html";
    });
    $("#bComb").click(function(){
        window.location.href = "../pages/Combinações.html";
    });
    $("#bPedidos").click(function() {
        window.location.href = "../pages/meusPedidos.html";
    });

});
function listaPedidos() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/pedidosListar.php",
        success : function(info){
            console.log(info);

            // Primeira categoria
            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarOne0").click(function(){
                    console.log("clicou");
                    count ++;
            
                    $("#numberOne0").html(count);
                });    

                $("#bDiminuirOne0").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#numberOne0").html(count);
                }); 
            });


            conteudo += "<div id='nomePag'>" + "MEUS PEDIDOS" + "</div>";
            conteudo += "<div id='linha2'>" + "</div>";
            conteudo += "<div class='subtitles' id='titleProd'>" + "Produto" + "</div>";
            conteudo += "<div class='subtitles' id='titlePrec'>" + "Preço Unit" + "</div>";
            conteudo += "<div class='subtitles' id='titleQuant'>" + "Quantidade" + "</div>";
            conteudo += "<div class='subtitles' id='titleSub'>" + "SubTotal" + "</div>";
            conteudo += "<div class='subtitles' id='titleExc'>" + "Excluir" + "</div>";
            
            for(var i = 0; i < info.length; i++){
            conteudo += "<div id='nameProd'>" + "Pizza de Calabresa" + "</div>";
            conteudo += "<div id='procUnit'>" + + "</div>";
            conteudo += "<button class='bContador' id='bDiminuirOne0'>" + "<i class='fas fa-minus'></i>" + "</button>";
            conteudo += "<div id='numberOne0'>" + + "</div>";
            conteudo += "<button class='bContador' id='bAumentarOne0'>" + "<i class='fas fa-plus'></i>" + "</button>";
            conteudo += "<div id='precTot'>" + + "</div>";
            conteudo += "<div id='iconLix'>" + "<i class='far fa-trash-alt'></i>" + "</div>";
            conteudo += "<div id='linhaPed'>" + "</div>";
            }
            
            $("#divPedidos").html(conteudo);
        },
        error : function(){
            console.log("aiai");
        }

    }); // ajax
} // fLista