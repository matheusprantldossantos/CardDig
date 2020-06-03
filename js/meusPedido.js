$(new Document).ready(function(){
    listaPedidos();
    $("#bPedidos").toggleClass("item_botao_after");

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

    $("#bPromo").click(function() {
        window.location.href = "../pages/Promoções.html";
    });

    $("#voltarPrinc").click(function() {
        window.location.href = "../pages/telaPrincipal.html";
    });
    
    $("#finalizaPedido").click(function(){
        encerraPedido();
    });

    $("#enviarMesa").click(function(){
        $("#bMudar").removeClass("styleMudar").addClass("styleMudarAfter");
        $("#container").removeClass("styleCont").addClass("styleContAfter");
        $("#msgAlerta").removeClass("alerta").addClass("alertaAfter");
        $("#setaAlert").removeClass("seta").addClass("setaAfter");

        $("#bSim").click(function(){
            window.location.href = "../pages/loginEnviaMesas.html";
        });

        $("#bNao").click(function(){
            $("#bMudar").removeClass("styleMudarAfter").addClass("styleMudar");
            $("#container").removeClass("styleContAfter").addClass("styleCont");
            $("#msgAlerta").removeClass("alertaAfter").addClass("alerta");
            $("#setaAlert").removeClass("setaAfter").addClass("seta");
            setTimeout(function() {
                location.reload(true);
            }, 320);
        });
    });
    
});

function listaPedidos() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/pedidosListar.php",
        success : function(info){
            console.log(info);

            // Primeiro Produto
            $(new Document).ready(function(){ 
                let count = info[info.length - 1].infos.quantidade[0];
                console.log("documento pronto")

                $("#bAumentar0").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[info.length - 1].infos.idProduto[0], count, info[info.length - 1].comanda, "1");
                    }

                    $("#number0").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });    

                $("#bDiminuir0").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[info.length - 1].infos.idProduto[0], count, info[info.length - 1].comanda, "0");
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number0").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });
            });
                
            // Segundo Produto
            $(new Document).ready(function(){ 
                let count = info[info.length - 1].infos.quantidade[1];
                $("#bAumentar1").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[info.length - 1].infos.idProduto[1], count, info[info.length - 1].comanda, "1");
                    }

                    $("#number1").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });    

                $("#bDiminuir1").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[info.length - 1].infos.idProduto[1], count, info[info.length - 1].comanda, "0");
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number1").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                }); 
            });

            //Terceiro Produto
            $(new Document).ready(function(){ 
                let count = info[info.length - 1].infos.quantidade[2];
                $("#bAumentar2").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[info.length - 1].infos.idProduto[2], count, info[info.length - 1].comanda, "1");
                    }

                    $("#number2").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });    

                $("#bDiminuir2").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[info.length - 1].infos.idProduto[2], count, info[info.length - 1].comanda, "0");
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number2").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });
            });

            //Quarto Produto
            $(new Document).ready(function(){ 
                let count = info[info.length - 1].infos.quantidade[3];
                $("#bAumentar3").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[info.length - 1].infos.idProduto[3], count, info[info.length - 1].comanda, "1");
                    }

                    $("#number3").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });    

                $("#bDiminuir3").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[info.length - 1].infos.idProduto[3], count, info[info.length - 1].comanda, "0");
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number3").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });
            });

            //Quinto Produto
            $(new Document).ready(function(){ 
                let count = info[info.length - 1].infos.quantidade[4];
                $("#bAumentar4").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
                    else{
                        mudaQuantidade(info[info.length - 1].infos.idProduto[4], count, info[info.length - 1].comanda, "1");
                    }

                    $("#number4").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });    

                $("#bDiminuir4").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                        mudaQuantidade(info[info.length - 1].infos.idProduto[4], count, info[info.length - 1].comanda, "0");
                    }
                    else{
                        count = 0;
                    }
            
                    $("#number4").html(count);
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });
            });

            var conteudo = "";

        /*  conteudo += "<div id='nomePag'>" + "MEUS PEDIDOS" + "</div>";
            conteudo += "<div id='linha2'>" + "</div>";   */
            conteudo += "<div class='subtitles' id='titleProd'>" + "Produto" + "</div>";
            conteudo += "<div class='subtitles' id='titlePrec'>" + "Preço Unit" + "</div>";
            conteudo += "<div class='subtitles' id='titleQuant'>" + "Quantidade" + "</div>";
            conteudo += "<div class='subtitles' id='titleSub'>" + "SubTotal" + "</div>";
            conteudo += "<div class='subtitles' id='titleExc'>" + "Excluir" + "</div>";
            //Deia o for ser animal
            for(let i = 0; i < 1; i++){
                for(let j = 0; j < info[info.length - 1].infos.nome.length; j++){
                    conteudo += "<div class='prodElem' id='nameProd" + j +"'>" + info[info.length - 1].infos.nome[j] +"</div>";
                    conteudo += "<div class='prodElem' id='procUnit" + j +"'>" + " R$ " + info[info.length - 1].infos.precos[j] + "</div>";
                    conteudo += "<button class='bContador' id='bDiminuir" + j +"'>" + "<i class='fas fa-minus'></i>" + "</button>";
                    conteudo += "<div id='number" + j +"'>" + info[info.length - 1].infos.quantidade[j] + "</div>";
                    conteudo += "<button class='bContador' id='bAumentar" + j +"'>" + "<i class='fas fa-plus'></i>" + "</button>";
                    conteudo += "<div class='prodElem' id='precSub" + j +"'>" + "R$ " + info[info.length - 1].infos.subTotal[j] + "</div>";
                    conteudo += "<div class='iconsLixeira' id='iconLix" + j +"'>" + "<i class='far fa-trash-alt'></i>" + "</div>";
                    conteudo += "<div id='linhaPed" + j +"'>" + "</div>";
                    conteudo += "<div id='numberTotal'>" + "R$ " + info[info.length - 1].valor_total + "</div>";
                }
            }
    
            $("#divPedidos").html(conteudo);

            $(new Document).ready(()=>{
                $("#iconLix0").click(()=>{
                    Excluir("0");
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });
                $("#iconLix1").click(()=>{
                    Excluir("1");
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });
                $("#iconLix2").click(()=>{
                    Excluir("2");
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });
                $("#iconLix3").click(()=>{
                    Excluir("3");
                    setTimeout(function() {
                        location.reload(true);
                    }, 350);
                });
            });
        },
        error : function(info){
            console.log("aiai");
        }

    }); // ajax
} // fLista
function Excluir(position){
    let nome = $("div#nameProd"+position).text();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/excluiItem.php",
        data: {
            ajax_nome : nome
        },
        success : function(condicao){
            console.log(condicao);
        },
        error : function(){
            console.log("Não excluiu")
        }
    });
}
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
function mudaQuantidade(id, quantidade, comanda, quesito){
        $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/alteraQuantidadeItemProd.php",
        data: {
            ajax_id_prod : id,
            ajax_quantidade : quantidade,
            ajax_comanda : comanda,
            ajax_quesito : quesito
        },
        success: function(resultado){
            console.log(resultado);
        },
        error: function(resultado){
            console.log("Nao alterou  quantidade");
        }
    });
}

