$(new Document).ready(function(){
    fListaCombinacoes();
    $("#bComb").toggleClass("item_botao_after");

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

    $("#bLanche").click(function(){
        window.location.href = "../pages/Lanches.html";
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

function fListaCombinacoes(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/combinacoesListar.php",
        success : function(info){
            //console.log(JSON.stringify(info, ' ', null));

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
            let numCarn = 0;
            let numVeg = 0

            for(var i = 0; i < info.length; i++){
                conteudo +="<div id='nomePag'>" + " COMBINAÇÕES " + "</div>" +
                        "<div id='linha2'>" + "</div>";

                switch(info[i].tipo_categoria){
                    case 'carnívoro':
                        conteudo +="<div id='subNome0'>" + info[i].tipo_categoria + "</div>";
                        conteudo +="<div id='nomeOne" + numCarn + "'>" + info[i].nome + "</div>";
                        conteudo +="<div id='precoOne"+ numCarn +"'>" + "R$ " +  info[i].preco + "</div>";
                        conteudo +="<button class='bContador' id='bDiminuirOne" + numCarn + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
                        conteudo +="<div id='numberOne"+ numCarn +"'>" + "0" + "</div>";
                        conteudo +="<button class='bContador' id='bAumentarOne" + numCarn + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
                        conteudo +="<button id='bAdicionarOne" + numCarn + "'>" + "Adicionar" +"</button>";
                        conteudo +="<div id='linhaOne_" + numCarn + "'>" + "</div>";
                        numCarn++;
                        break;
                    
                    case 'vegetarianos':
                        conteudo +="<div id='subNome1'>" + info[i].tipo_categoria + "</div>";
                        conteudo +="<div id='nomeTwo" + numVeg + "'>" + info[i].nome + "</div>";
                        conteudo +="<div id='precoTwo"+ numVeg +"'>" + "R$ " +  info[i].preco + "</div>";
                        conteudo +="<button class='bContador' id='bDiminuirTwo" + numVeg + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
                        conteudo +="<div id='numberTwo"+ numVeg +"'>" + "0" + "</div>";
                        conteudo +="<button class='bContador' id='bAumentarTwo" + numVeg + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
                        conteudo +="<button id='bAdicionarTwo" + numVeg + "'>" + "Adicionar" +"</button>";
                        conteudo +="<div id='linhaTwo_" + numVeg + "'>" + "</div>";
                        numVeg++;
                        break;

                }
            }
            $("#divPedidos").html(conteudo);

            // Primeira categoria verificação dos itens
            if(numCarn == 1){
                $("#linhaOne_0").css({"visibility":"hidden"});
            }
            
            else if(numCarn == 2){
                $("#linhaOne_1").css({"visibility":"hidden"});
            }

            else if(numCarn == 3){
                $("#linhaOne_2").css({"visibility":"hidden"});
            }

            else if(numCarn == 4){
                $("#linhaOne_3").css({"visibility":"hidden"});
                arrumaPosition(numCarn,numVeg);
            }

            else if(numCarn == 5){
                $("#linhaOne_4").css({"visibility":"hidden"});
                arrumaPosition(numCarn,numVeg);
            }
            
            // Segunda categoria verificação dos itens
            if(numVeg == 1){
                $("#linhaTwo_0").css({"visibility":"hidden"});
            }

            else if(numVeg == 2){
                $("#linhaTwo_1").css({"visibility":"hidden"});
            }

            else if(numVeg == 3){
                $("#linhaTwo_2").css({"visibility":"hidden"});
            }

            else if(numVeg == 4){
                $("#linhaTwo_3").css({"visibility":"hidden"});
            }

            else if(numVeg == 5){
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
    $muda = 16;
$.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/criaPedidos.php",
    data:
    {  
        ajax_name : $("div#nome"+location+position).text(),
        ajax_quantidade : $("div#number"+location+position).text()
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