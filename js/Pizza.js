$(new Document).ready(function(){
    fListaPizzas();
    $("#bPizza").toggleClass("item_botao_after");
    $("#bBebidas").removeClass("item_botao_after").addClass("item_botao");
    $("#bHamb").removeClass("item_botao_after").addClass("item_botao");
    $("#bSobremesa").removeClass("item_botao_after").addClass("item_botao");
    $("#bLanche").removeClass("item_botao_after").addClass("item_botao");
    $("#bComb").removeClass("item_botao_after").addClass("item_botao");

    $("#bBebidas").click(function(){
        window.location.href = "../pages/Bebidas.html";
    });

    $("#bHamb").click(function(){
        window.location.href = "../pages/Hamburguers.html";
    });

    $("#bSobremesa").click(function(){
        window.location.href = "../pages/Sobremesas.html";
    });

    $("#bLanche").click(function(){
        window.location.href = "../pages/Lanches.html";
    });
    $("#bComb").click(function(){
        window.location.href = "../pages/Combinações.html";
    });
    $("#bPedidos").click(function() {
        window.location.href = "../pages/meusPedidos.html";
    });

    $("#voltarPrinc").click(function() {
        window.location.href = "../pages/telaPrincipal.html";
    });
    
});

function fListaPizzas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/pizzaListar.php",
        success : function(info, c){

            // Primeira categoria
            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarOne0").click(function(){
                    console.log("clicou" + count);
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
            
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

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarOne1").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    } 
            
                    $("#numberOne1").html(count);
                });    

                $("#bDiminuirOne1").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#numberOne1").html(count);
                });
            });

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarOne2").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
            
                    $("#numberOne2").html(count);
                });    

                $("#bDiminuirOne2").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#numberOne2").html(count);
                });
            });

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarOne3").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    } 
            
                    $("#numberOne3").html(count);
                });    

                $("#bDiminuirOne3").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#numberOne3").html(count);
                });
            });

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarOne4").click(function(){
                    console.log("clicou");
                    count ++;
    
                    if (count >= 9){
                        count = 9;
                    }
                
                    $("#numberOne4").html(count);
                });    
    
                $("#bDiminuirOne4").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
                
                    $("#numberOne4").html(count);
                });
            });

            // Segunda Categoria

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarTwo0").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
            
                    $("#numberTwo0").html(count);
                });    

                $("#bDiminuirTwo0").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#numberTwo0").html(count);
                }); 
            });

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarTwo1").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
            
                    $("#numberTwo1").html(count);
                });    

                $("#bDiminuirTwo1").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#numberTwo1").html(count);
                });
            });

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarTwo2").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
            
                    $("#numberTwo2").html(count);
                });    

                $("#bDiminuirTwo2").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#numberTwo2").html(count);
                });
            });

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarTwo3").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
            
                    $("#numberTwo3").html(count);
                });    

                $("#bDiminuirTwo3").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#numberTwo3").html(count);
                });
            });

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarTwo4").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 9){
                        count = 9;
                    }
            
                    $("#numberTwo4").html(count);
                });    

                $("#bDiminuirTwo4").click(function(){
                    console.log("clicou menos");
                    if(count > 0){
                        count--;
                    }
                    else{
                        count = 0;
                    }
            
                    $("#numberTwo4").html(count);
                });
            });

            var conteudo = "";
            let numSalg = 0;
            let numDoces = 0;

            for(var i = 0; i < info.length; i++){
                conteudo +="<div id='nomePag'>" + " PIZZAS " + "</div>" +
                        "<div id='linha2'>" + "</div>";

                switch(info[i].tipo_categoria){
                    case 'salgadas':
                        conteudo +="<div id='subNome0'>" + info[i].tipo_categoria + "</div>";
                        conteudo +="<div id='nomeOne" + numSalg + "'>" + info[i].nome + "</div>";
                        conteudo +="<div id='precoOne"+ numSalg +"'>" + "R$ " +  info[i].preco + "</div>";
                        conteudo +="<button class='bContador' id='bDiminuirOne" + numSalg + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
                        conteudo +="<div id='numberOne"+ numSalg +"'>" + "0" + "</div>";
                        conteudo +="<button class='bContador' id='bAumentarOne" + numSalg + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
                        conteudo +="<button id='bAdicionarOne" + numSalg + "'>" + "Adicionar" +"</button>";
                        conteudo +="<div id='linhaOne_" + numSalg + "'>" + "</div>";
                        numSalg++;
                        break;
                    
                    case 'doces':
                        conteudo +="<div id='subNome1'>" + info[i].tipo_categoria + "</div>";
                        conteudo +="<div id='nomeTwo" + numDoces + "'>" + info[i].nome + "</div>";
                        conteudo +="<div id='precoTwo"+ numDoces +"'>" + "R$ " +  info[i].preco + "</div>";
                        conteudo +="<button class='bContador' id='bDiminuirTwo" + numDoces + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
                        conteudo +="<div id='numberTwo"+ numDoces +"'>" + "0" + "</div>";
                        conteudo +="<button class='bContador' id='bAumentarTwo" + numDoces + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
                        conteudo +="<button id='bAdicionarTwo" + numDoces + "'>" + "Adicionar" +"</button>";
                        conteudo +="<div id='linhaTwo_" + numDoces + "'>" + "</div>";
                        numSalg++;
                        break;

                }
            }
            
            $("#divPedidos").html(conteudo);

            // Primeira categoria verificação dos itens
            if(numSalg == 1){
                $("#linhaOne_0").css({"visibility":"hidden"});
            }
            
            else if(numSalg == 2){
                $("#linhaOne_1").css({"visibility":"hidden"});
            }

            else if(numSalg == 3){
                $("#linhaOne_2").css({"visibility":"hidden"});
            }

            else if(numSalg == 4){
                $("#linhaOne_3").css({"visibility":"hidden"});
                arrumaPosition(numSalg,numDoces);
            }

            else if(numSalg == 5){
                $("#linhaOne_4").css({"visibility":"hidden"});
                arrumaPosition(numSalg,numDoces);
            }
            
            // Segunda categoria verificação dos itens
            if(numDoces == 1){
                $("#linhaTwo_0").css({"visibility":"hidden"});
            }

            else if(numDoces == 2){
                $("#linhaTwo_1").css({"visibility":"hidden"});
            }

            else if(numDoces == 3){
                $("#linhaTwo_2").css({"visibility":"hidden"});
            }

            else if(numDoces == 4){
                $("#linhaTwo_3").css({"visibility":"hidden"});
            }

            else if(numDoces == 5){
                $("#linhaTwo_4").css({"visibility":"hidden"});
            }

            // Botões Adicionar
            $(new Document).ready(function(){
                $("#bAdicionarOne0").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("0", "One");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                });

                $("#bAdicionarOne1").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("1", "One");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionarOne2").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("2", "One");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionarOne3").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("3", "One");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionarOne4").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("4", "One");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionarOne5").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("5", "One");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
                
                $("#bAdicionarTwo0").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("0", "Two");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionarTwo1").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("1", "Two");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionarTwo2").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("2", "Two");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionarTwo3").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("3", "Two");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionarTwo4").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("4", "Two");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionarTwo5").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido("5", "Two");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });
            
        },
        error : function(){
            console.log("aiai");
        }

    }); // ajax
} // fLista
function criaPedido(position, location){
    let quantidadeAtual = $("div#number"+location+position).text();
    let nomeAtual = $("div#nome"+location+position).text();
$.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/criaPedidos.php",
    data:
    {  
        ajax_quantidade : quantidadeAtual,
        ajax_name : nomeAtual
    },
    success : function(info){
        console.log("olá mundo");
    },
    error: function(info){
        console.log("tchau mundo");
    }
    });
}

function arrumaPosition(PrimCateg,SegCateg){

    if(PrimCateg == 4){
        let aumenta = 10;

        for(var i = 0; i < SegCateg; i++){
            if(i == 0){
                $("#subNome1").css({"position":"absolute","top": 55 + aumenta + "%","left":"8%"});
            }
            $("#nomeTwo" + i).css({"position":"absolute","top": 62 + aumenta + "%","left":"10%"});
            $("#precoTwo" + i).css({"position":"absolute","top": 65 + aumenta + "%","left":"11%"});
            $("#bDiminuirTwo" + i).css({"position":"absolute","top": 63 + aumenta + "%","left":"70%"});
            $("#numberTwo" + i).css({"position":"absolute","top": 63 + aumenta + "%","left":"74%"});
            $("#bAumentarTwo" + i).css({"position":"absolute","top": 63 + aumenta + "%","left":"77%"});
            $("#bAdicionarTwo" + i).css({"position":"absolute","top": 62.5 + aumenta + "%","left":"82%"});
            $("#linhaTwo_" + i).css({"position":"absolute","top": 70 + aumenta + "%","left":"9%","visibility":"visible"});

            aumenta = aumenta + 10;
        }
    } 
    
    else if(PrimCateg == 5){
        let aumenta = 20;

        for(var i = 0; i < SegCateg; i++){
            if(i == 0){
                $("#subNome1").css({"position":"absolute","top": 55 + aumenta + "%","left":"8%"});
            }
            $("#nomeTwo" + i).css({"position":"absolute","top": 62 + aumenta + "%","left":"10%"});
            $("#precoTwo" + i).css({"position":"absolute","top": 65 + aumenta + "%","left":"11%"});
            $("#bDiminuirTwo" + i).css({"position":"absolute","top": 63 + aumenta + "%","left":"70%"});
            $("#numberTwo" + i).css({"position":"absolute","top": 63 + aumenta + "%","left":"74%"});
            $("#bAumentarTwo" + i).css({"position":"absolute","top": 63 + aumenta + "%","left":"77%"});
            $("#bAdicionarTwo" + i).css({"position":"absolute","top": 62.5 + aumenta + "%","left":"82%"});
            $("#linhaTwo_" + i).css({"position":"absolute","top": 70 + aumenta + "%","left":"9%","visibility":"visible"});

            aumenta = aumenta + 10;
        }
    }
}