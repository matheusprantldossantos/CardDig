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

    $("#bLanche").click(function(){
        window.location.href = "../pages/Lanches.html";
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
    $("#finalizaPedido").click(function(){
        encerraPedido();
    });
});
function encerraPedido(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/RemoveFK.php",
        success: function(estado){
            console.log(estado);
            window.location.href = "../pages/telaPrincipal.html";
        },
        error: function(estado){
            console.log(estado);
        }
    });
}
function listaPedidos() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/pedidosListar.php",
        success : function(info){
            console.log(info);

            // Primeiro Produto
            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")

                $("#bAumentar0").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }

                    $("#number0").html(count);
                });    

                $("#bDiminuir0").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number0").html(count);
                });
            });
                
            // Segundo Produto
            $(new Document).ready(function(){ 
                let count = 0;
                $("#bAumentar1").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }

                    $("#number1").html(count);
                });    

                $("#bDiminuir1").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number1").html(count);
                }); 
            });

            //Terceiro Produto
            $(new Document).ready(function(){ 
                let count = 0;
                $("#bAumentar2").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }

                    $("#number2").html(count);
                });    

                $("#bDiminuir2").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number2").html(count);
                });
            });

            //Quarto Produto
            $(new Document).ready(function(){ 
                let count = 0;
                $("#bAumentar3").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }

                    $("#number3").html(count);
                });    

                $("#bDiminuir3").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number3").html(count);
                });
            });

            //Quinto Produto
            $(new Document).ready(function(){ 
                let count = 0;
                $("#bAumentar4").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }

                    $("#number4").html(count);
                });    

                $("#bDiminuir4").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number4").html(count);
                });
            });

            var conteudo = "";

            conteudo += "<div id='nomePag'>" + "MEUS PEDIDOS" + "</div>";
            conteudo += "<div id='linha2'>" + "</div>";
            conteudo += "<div class='subtitles' id='titleProd'>" + "Produto" + "</div>";
            conteudo += "<div class='subtitles' id='titlePrec'>" + "Preço Unit" + "</div>";
            conteudo += "<div class='subtitles' id='titleQuant'>" + "Quantidade" + "</div>";
            conteudo += "<div class='subtitles' id='titleSub'>" + "SubTotal" + "</div>";
            conteudo += "<div class='subtitles' id='titleExc'>" + "Excluir" + "</div>";
            
            for(var i = 0; i < info.length; i++){
                conteudo += "<div id='nameProd" + i +"'>" + info[i].nomeProd + "</div>";
                conteudo += "<div id='procUnit" + i +"'>" + info[i].valorProduto + "</div>";
                conteudo += "<button class='bContador' id='bDiminuir" + i +"'>" + "<i class='fas fa-minus'></i>" + "</button>";
                conteudo += "<div id='number" + i +"'>" + "0" + "</div>";
                conteudo += "<button class='bContador' id='bAumentar" + i +"'>" + "<i class='fas fa-plus'></i>" + "</button>";
                conteudo += "<div id='precSub" + i +"'>" + "0" + "</div>";
                conteudo += "<div id='iconLix" + i +"'>" + "<i class='far fa-trash-alt'></i>" + "</div>";
                conteudo += "<div id='linhaPed" + i +"'>" + "</div>";
            }
            
            $("#divPedidos").html(conteudo);
        },
        error : function(){
            console.log("aiai");
        }

    }); // ajax
} // fLista

