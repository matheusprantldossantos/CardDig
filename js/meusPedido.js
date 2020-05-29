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
            console.log("a");
            console.log(estado);
            window.location.href = "../pages/telaPrincipal.html";
        },
        error: function(estado){
            console.log(estado);
        }
    });
}
function mudaQuantidade(id, quantidade){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/alteraQuantidadeItemProd.php",
        data: {
            ajax_id_prod : id,
            ajax_quantidade : quantidade
        },
        success: function(resultado){
            console.log(resultado);
        },
        error: function(resultado){
            console.log("Nao alterou  quantidade");
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
                let count = info[2].quantidade;
                console.log("documento pronto")

                $("#bAumentar0").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[2].idItemProd, count);
                    }

                    $("#number0").html(count);
                });    

                $("#bDiminuir0").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[2].idItemProd, count);
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number0").html(count);
                });
            });
                
            // Segundo Produto
            $(new Document).ready(function(){ 
                let count = info[3].quantidade;
                $("#bAumentar1").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[3].idItemProd, count);
                    }

                    $("#number1").html(count);
                });    

                $("#bDiminuir1").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[3].idItemProd, count);
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number1").html(count);
                }); 
            });

            //Terceiro Produto
            $(new Document).ready(function(){ 
                let count = info[4].quantidade;
                $("#bAumentar2").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[4].idItemProd, count);
                    }

                    $("#number2").html(count);
                });    

                $("#bDiminuir2").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[4].idItemProd, count);
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number2").html(count);
                });
            });

            //Quarto Produto
            $(new Document).ready(function(){ 
                let count = info[5].quantidade;
                $("#bAumentar3").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[5].idItemProd, count);
                    }

                    $("#number3").html(count);
                });    

                $("#bDiminuir3").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[5].idItemProd, count);
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number3").html(count);
                });
            });

            //Quinto Produto
            $(new Document).ready(function(){ 
                let count = info[6].quantidade;
                $("#bAumentar4").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[6].idItemProd, count);
                    }

                    $("#number4").html(count);
                });    

                $("#bDiminuir4").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[6].idItemProd, count);
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
            
            for(let j = 0; j < info[info.length - 1].infos.nome.length; j++){
                conteudo += "<div class='prodElem' id='nameProd" + j +"'>" + info[info.length - 1].infos.nome[j] +"</div>";
                conteudo += "<div class='prodElem' id='procUnit" + j +"'>" + info[info.length - 1].infos.precos[j] + " R$" + "</div>";
                conteudo += "<button class='bContador' id='bDiminuir" + j +"'>" + "<i class='fas fa-minus'></i>" + "</button>";
                conteudo += "<div id='number" + j +"'>" + info[info.length - 1].infos.quantidade[j] + "</div>";
                conteudo += "<button class='bContador' id='bAumentar" + j +"'>" + "<i class='fas fa-plus'></i>" + "</button>";
                conteudo += "<div class='prodElem' id='precSub" + j +"'>" + info[info.length - 1].infos.subTotal[j] + "</div>";
                conteudo += "<div class='iconsLixeira' id='iconLix" + j +"'>" + "<i class='far fa-trash-alt'></i>" + "</div>";
                conteudo += "<div id='linhaPed" + j +"'>" + "</div>";
            }
    
            $("#divPedidos").html(conteudo);
        },
        error : function(info){
            console.log("aiai");
        }

    }); // ajax
} // fLista

