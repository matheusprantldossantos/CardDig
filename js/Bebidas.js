$(document).ready(function(){
    fListaBebidas();
    $("#bBebidas").toggleClass("item_botao_after");
    $("#bPizza").removeClass("item_botao_after").addClass("item_botao");
    $("#bHamb").removeClass("item_botao_after").addClass("item_botao");
    $("#bSobremesa").removeClass("item_botao_after").addClass("item_botao");
    $("#bLanche").removeClass("item_botao_after").addClass("item_botao");
    $("#bComb").removeClass("item_botao_after").addClass("item_botao");

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
    $("#bComb").click(function(){
        window.location.href = "../pages/Combinações.html";
    });
    $("#bPedidos").click(function() {
        window.location.href = "../pages/meusPedidos.html";
    });
   
});

function fListaBebidas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/bebidaListar.php",
        success : function(info){

            // Primeira categoria
            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarOne0").click(function(){
                    console.log("clicou" + count);
                    count ++;

                    if (count >= 10){
                        count = 10;
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

                    if (count >= 10){
                        count = 10;
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

                    if (count >= 10){
                        count = 10;
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

            // Segunda Categoria

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarTwo0").click(function(){
                    console.log("clicou");
                    count ++;

                    if (count >= 10){
                        count = 10;
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

                    if (count >= 10){
                        count = 10;
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

                    if (count >= 10){
                        count = 10;
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


            var conteudo = "";
            let numBebida = 0;
            let numSuco = 0;

            for(var i = 0; i < info.length; i++){
                conteudo +="<div id='nomePag'>" + " BEBIDAS " + "</div>" +
                        "<div id='linha2'>" + "</div>";

                switch(info[i].tipo_categoria){
                    case 'bebidas quentes':
                        if(numBebida == 0){
                            conteudo +="<div id='subNome0'>" + info[i].tipo_categoria + "</div>";
                        }
                        conteudo +="<div id='nomeOne" + numBebida + "'"+"name='"+ info[i].nome + "'>" + info[i].nome + "</div>";
                        conteudo +="<div id='precoOne"+ numBebida +"'>" + "R$ " +  info[i].preco + "</div>";
                        conteudo +="<button class='bContador' id='bDiminuirOne" + numBebida + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
                        conteudo +="<div id='numberOne"+ numBebida +"'>" + "0" + "</div>";
                        conteudo +="<button class='bContador' id='bAumentarOne" + numBebida + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
                        conteudo +="<button id='bAdicionarOne" + numBebida + "'>" + "Adicionar" +"</button>";
                        conteudo +="<div id='linhaOne_" + numBebida + "'>" + "</div>";
                        numBebida++;
                        break;

                    case 'sucos':
                        console.log("sucos funcionou");
                        if(numSuco == 0){
                            conteudo +="<div id='subNome1'>" + info[i].tipo_categoria + "</div>";
                        }
                        conteudo +="<div id='nomeTwo" + numSuco + "'>" + info[i].nome + "</div>";
                        conteudo +="<div id='precoTwo"+ numSuco +"'>" + "R$ " +  info[i].preco + "</div>";
                        conteudo +="<button class='bContador' id='bDiminuirTwo" + numSuco + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
                        conteudo +="<div id='numberTwo"+ numSuco +"'>" + "0" + "</div>";
                        conteudo +="<button class='bContador' id='bAumentarTwo" + numSuco + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
                        conteudo +="<button id='bAdicionarTwo" + numSuco + "'>" + "Adicionar" +"</button>";
                        conteudo +="<div id='linhaTwo_" + numSuco + "'>" + "</div>";
                        numSuco++;
                        break;
                }
            }
            
            $("#divPedidos").html(conteudo);

            // Primeira categoria verificação dos itens
            if(numBebida == 1){
                $("#linhaOne_0").css({"visibility":"hidden"});
            }
            
            else if(numBebida == 2){
                $("#linhaOne_1").css({"visibility":"hidden"});
            }

            else if(numBebida == 3){
                $("#linhaOne_2").css({"visibility":"hidden"});
            }

            else if(numBebida == 4){
                arrumaProdutos_One(numSuco);
            }

            else if(numBebida == 5){
                arrumaProdutos_Two(numSuco);
            }
            
            // Segunda categoria verificação dos itens
            if(numSuco == 1){
                $("#linhaTwo_0").css({"visibility":"hidden"});
            }

            else if(numSuco == 2){
                $("#linhaTwo_1").css({"visibility":"hidden"});
            }

            else if(numSuco == 3){
                $("#linhaTwo_2").css({"visibility":"hidden"});
            }

            else if(numSuco == 4){
                $("#linhaTwo_3").css({"visibility":"hidden"});
            }

            else if(numSuco == 5){
                $("#linhaTwo_4").css({"visibility":"hidden"});
            }
        

            // Botões Adicionar
  
            $(new Document).ready(function(){
                $("#bAdicionarOne0").click(function(){
                    criaPedido("0", "One");
                });
                $("#bAdicionarOne1").click(function(){
                    criaPedido("1", "One");
                });
                $("#bAdicionarOne2").click(function(){
                    criaPedido("2", "One");
                });
                $("#bAdicionarOne3").click(function(){
                    criaPedido("3", "One");
                });
                $("#bAdicionarOne4").click(function(){
                    criaPedido("4", "One");
                });
                $("#bAdicionarOne5").click(function(){
                    criaPedido("5", "One");
                });
                $("#bAdicionarTwo0").click(function(){
                    criaPedido("0", "Two");
                });
                $("#bAdicionarTwo1").click(function(){
                    criaPedido("1", "Two");
                });
                $("#bAdicionarTwo2").click(function(){
                    criaPedido("2", "Two");
                });
                $("#bAdicionarTwo3").click(function(){
                    criaPedido("3", "Two");
                });
                $("#bAdicionarTwo4").click(function(){
                    criaPedido("4", "Two");
                });
                $("#bAdicionarTwo5").click(function(){
                    criaPedido("5", "Two");
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


function arrumaProdutos_Two(numSuco){
    $("#linhaOne_4").css({"visibility":"hidden"});
    $("#subNome1").css({"position":"absolute","top":"75%","left":"8%"});
    $("#nomeTwo0").css({"position":"absolute","top":"82%","left":"10%"});
    $("#precoTwo0").css({"position":"absolute","top":"85%","left":"11%"});
    $("#bDiminuirTwo0").css({"position":"absolute","top":"83%","left":"70%"});
    $("#numberTwo0").css({"position":"absolute","top":"83%","left":"74%"});
    $("#bAumentarTwo0").css({"position":"absolute","top":"83%","left":"77%"});
    $("#bAdicionarTwo0").css({"position":"absolute","top":"82.5%","left":"82%"});
    $("#linhaTwo_0").css({"position":"absolute","top":"90%","left":"9%","visibility":"hidden"});
    
    if(numSuco == 2){
        // Segundo produto
        $("#linhaTwo_0").css({"visibility":"visible"})
        $("#nomeTwo1").css({"position":"absolute","top":"92%","left":"10%"});
        $("#precoTwo1").css({"position":"absolute","top":"95%","left":"11%"});
        $("#bDiminuirTwo1").css({"position":"absolute","top":"93%","left":"70%"});
        $("#numberTwo1").css({"position":"absolute","top":"93%","left":"74%"});
        $("#bAumentarTwo1").css({"position":"absolute","top":"93%","left":"77%"});
        $("#bAdicionarTwo1").css({"position":"absolute","top":"92.5%","left":"82%"});
        $("#linhaTwo_1").css({"position":"absolute","top":"100%","left":"9%","visibility":"hidden"});
    }
    else if(numSuco == 3) {
        // Segundo produto
        $("#linhaTwo_0").css({"visibility":"visible"})
        $("#nomeTwo1").css({"position":"absolute","top":"92%","left":"10%"});
        $("#precoTwo1").css({"position":"absolute","top":"95%","left":"11%"});
        $("#bDiminuirTwo1").css({"position":"absolute","top":"93%","left":"70%"});
        $("#numberTwo1").css({"position":"absolute","top":"93%","left":"74%"});
        $("#bAumentarTwo1").css({"position":"absolute","top":"93%","left":"77%"});
        $("#bAdicionarTwo1").css({"position":"absolute","top":"92.5%","left":"82%"});
        $("#linhaTwo_1").css({"position":"absolute","top":"100%","left":"9%","visibility":"visible"});
        // Terceiro produto
        $("#nomeTwo2").css({"position":"absolute","top":"102%","left":"10%"});
        $("#precoTwo2").css({"position":"absolute","top":"105%","left":"11%"});
        $("#bDiminuirTwo2").css({"position":"absolute","top":"103%","left":"70%"});
        $("#numberTwo2").css({"position":"absolute","top":"103%","left":"74%"});
        $("#bAumentarTwo2").css({"position":"absolute","top":"103%","left":"77%"});
        $("#bAdicionarTwo2").css({"position":"absolute","top":"102.5%","left":"82%"});
        $("#linhaTwo_2").css({"position":"absolute","top":"110%","left":"9%","visibility":"hidden"});   
    }
    else if(numSuco == 4){
        // Segundo produto
        $("#linhaTwo_0").css({"visibility":"visible"})
        $("#nomeTwo1").css({"position":"absolute","top":"92%","left":"10%"});
        $("#precoTwo1").css({"position":"absolute","top":"95%","left":"11%"});
        $("#bDiminuirTwo1").css({"position":"absolute","top":"93%","left":"70%"});
        $("#numberTwo1").css({"position":"absolute","top":"93%","left":"74%"});
        $("#bAumentarTwo1").css({"position":"absolute","top":"93%","left":"77%"});
        $("#bAdicionarTwo1").css({"position":"absolute","top":"92.5%","left":"82%"});
        $("#linhaTwo_1").css({"position":"absolute","top":"100%","left":"9%","visibility":"visible"});
        // Terceiro produto
        $("#nomeTwo2").css({"position":"absolute","top":"102%","left":"10%"});
        $("#precoTwo2").css({"position":"absolute","top":"105%","left":"11%"});
        $("#bDiminuirTwo2").css({"position":"absolute","top":"103%","left":"70%"});
        $("#numberTwo2").css({"position":"absolute","top":"103%","left":"74%"});
        $("#bAumentarTwo2").css({"position":"absolute","top":"103%","left":"77%"});
        $("#bAdicionarTwo2").css({"position":"absolute","top":"102.5%","left":"82%"});
        $("#linhaTwo_2").css({"position":"absolute","top":"110%","left":"9%","visibility":"visible"});
        // Quarto produto
        $("#nomeTwo3").css({"position":"absolute","top":"112%","left":"10%"});
        $("#precoTwo3").css({"position":"absolute","top":"115%","left":"11%"});
        $("#bDiminuirTwo3").css({"position":"absolute","top":"113%","left":"70%"});
        $("#numberTwo3").css({"position":"absolute","top":"113%","left":"74%"});
        $("#bAumentarTwo3").css({"position":"absolute","top":"113%","left":"77%"});
        $("#bAdicionarTwo3").css({"position":"absolute","top":"112.5%","left":"82%"});
        $("#linhaTwo_3").css({"position":"absolute","top":"120%","left":"9%","visibility":"hidden"});
    } 
    else if(numSuco == 5){
        // Segundo produto
        $("#linhaTwo_0").css({"visibility":"visible"})
        $("#nomeTwo1").css({"position":"absolute","top":"92%","left":"10%"});
        $("#precoTwo1").css({"position":"absolute","top":"95%","left":"11%"});
        $("#bDiminuirTwo1").css({"position":"absolute","top":"93%","left":"70%"});
        $("#numberTwo1").css({"position":"absolute","top":"93%","left":"74%"});
        $("#bAumentarTwo1").css({"position":"absolute","top":"93%","left":"77%"});
        $("#bAdicionarTwo1").css({"position":"absolute","top":"92.5%","left":"82%"});
        $("#linhaTwo_1").css({"position":"absolute","top":"100%","left":"9%","visibility":"visible"});
        // Terceiro produto
        $("#nomeTwo2").css({"position":"absolute","top":"102%","left":"10%"});
        $("#precoTwo2").css({"position":"absolute","top":"105%","left":"11%"});
        $("#bDiminuirTwo2").css({"position":"absolute","top":"103%","left":"70%"});
        $("#numberTwo2").css({"position":"absolute","top":"103%","left":"74%"});
        $("#bAumentarTwo2").css({"position":"absolute","top":"103%","left":"77%"});
        $("#bAdicionarTwo2").css({"position":"absolute","top":"102.5%","left":"82%"});
        $("#linhaTwo_2").css({"position":"absolute","top":"110%","left":"9%","visibility":"visible"});
        // Quarto produto
        $("#nomeTwo3").css({"position":"absolute","top":"112%","left":"10%"});
        $("#precoTwo3").css({"position":"absolute","top":"115%","left":"11%"});
        $("#bDiminuirTwo3").css({"position":"absolute","top":"113%","left":"70%"});
        $("#numberTwo3").css({"position":"absolute","top":"113%","left":"74%"});
        $("#bAumentarTwo3").css({"position":"absolute","top":"113%","left":"77%"});
        $("#bAdicionarTwo3").css({"position":"absolute","top":"112.5%","left":"82%"});
        $("#linhaTwo_3").css({"position":"absolute","top":"120%","left":"9%","visibility":"visible"});
        // Quinto produto
        $("#nomeTwo4").css({"position":"absolute","top":"122%","left":"10%"});
        $("#precoTwo4").css({"position":"absolute","top":"125%","left":"11%"});
        $("#bDiminuirTwo4").css({"position":"absolute","top":"123%","left":"70%"});
        $("#numberTwo4").css({"position":"absolute","top":"123%","left":"74%"});
        $("#bAumentarTwo4").css({"position":"absolute","top":"123%","left":"77%"});
        $("#bAdicionarTwo4").css({"position":"absolute","top":"122.5%","left":"82%"});
        $("#linhaTwo_4").css({"position":"absolute","top":"130%","left":"9%","visibility":"hidden"});
    }   
}


function arrumaProdutos_One(numSuco){
    $("#linhaOne_3").css({"visibility":"hidden"});
    $("#subNome1").css({"position":"absolute","top":"65%","left":"8%"});
    $("#nomeTwo0").css({"position":"absolute","top":"72%","left":"10%"});
    $("#precoTwo0").css({"position":"absolute","top":"75%","left":"11%"});
    $("#bDiminuirTwo0").css({"position":"absolute","top":"73%","left":"70%"});
    $("#numberTwo0").css({"position":"absolute","top":"73%","left":"74%"});
    $("#bAumentarTwo0").css({"position":"absolute","top":"73%","left":"77%"});
    $("#bAdicionarTwo0").css({"position":"absolute","top":"72.5%","left":"82%"});
    $("#linhaTwo_0").css({"position":"absolute","top":"80%","left":"9%","visibility":"hidden"});
    
    if(numSuco == 2){
        // Segundo produto
        $("#linhaTwo_0").css({"visibility":"visible"})
        $("#nomeTwo1").css({"position":"absolute","top":"82%","left":"10%"});
        $("#precoTwo1").css({"position":"absolute","top":"85%","left":"11%"});
        $("#bDiminuirTwo1").css({"position":"absolute","top":"83%","left":"70%"});
        $("#numberTwo1").css({"position":"absolute","top":"83%","left":"74%"});
        $("#bAumentarTwo1").css({"position":"absolute","top":"83%","left":"77%"});
        $("#bAdicionarTwo1").css({"position":"absolute","top":"82.5%","left":"82%"});
        $("#linhaTwo_1").css({"position":"absolute","top":"90%","left":"9%","visibility":"hidden"});
    }
    else if(numSuco == 3) {
        // Segundo produto
        $("#linhaTwo_0").css({"visibility":"visible"})
        $("#nomeTwo1").css({"position":"absolute","top":"82%","left":"10%"});
        $("#precoTwo1").css({"position":"absolute","top":"85%","left":"11%"});
        $("#bDiminuirTwo1").css({"position":"absolute","top":"83%","left":"70%"});
        $("#numberTwo1").css({"position":"absolute","top":"83%","left":"74%"});
        $("#bAumentarTwo1").css({"position":"absolute","top":"83%","left":"77%"});
        $("#bAdicionarTwo1").css({"position":"absolute","top":"82.5%","left":"82%"});
        $("#linhaTwo_1").css({"position":"absolute","top":"90%","left":"9%","visibility":"visible"});
        // Terceiro produto
        $("#nomeTwo2").css({"position":"absolute","top":"92%","left":"10%"});
        $("#precoTwo2").css({"position":"absolute","top":"95%","left":"11%"});
        $("#bDiminuirTwo2").css({"position":"absolute","top":"93%","left":"70%"});
        $("#numberTwo2").css({"position":"absolute","top":"93%","left":"74%"});
        $("#bAumentarTwo2").css({"position":"absolute","top":"93%","left":"77%"});
        $("#bAdicionarTwo2").css({"position":"absolute","top":"92.5%","left":"82%"});
        $("#linhaTwo_2").css({"position":"absolute","top":"100%","left":"9%","visibility":"hidden"});   
    }
    else if(numSuco == 4){
        // Segundo produto
        $("#linhaTwo_0").css({"visibility":"visible"})
        $("#nomeTwo1").css({"position":"absolute","top":"82%","left":"10%"});
        $("#precoTwo1").css({"position":"absolute","top":"85%","left":"11%"});
        $("#bDiminuirTwo1").css({"position":"absolute","top":"83%","left":"70%"});
        $("#numberTwo1").css({"position":"absolute","top":"83%","left":"74%"});
        $("#bAumentarTwo1").css({"position":"absolute","top":"83%","left":"77%"});
        $("#bAdicionarTwo1").css({"position":"absolute","top":"82.5%","left":"82%"});
        $("#linhaTwo_1").css({"position":"absolute","top":"90%","left":"9%","visibility":"visible"});
        // Terceiro produto
        $("#nomeTwo2").css({"position":"absolute","top":"92%","left":"10%"});
        $("#precoTwo2").css({"position":"absolute","top":"95%","left":"11%"});
        $("#bDiminuirTwo2").css({"position":"absolute","top":"93%","left":"70%"});
        $("#numberTwo2").css({"position":"absolute","top":"93%","left":"74%"});
        $("#bAumentarTwo2").css({"position":"absolute","top":"93%","left":"77%"});
        $("#bAdicionarTwo2").css({"position":"absolute","top":"92.5%","left":"82%"});
        $("#linhaTwo_2").css({"position":"absolute","top":"100%","left":"9%","visibility":"visible"});
        // Quarto produto
        $("#nomeTwo3").css({"position":"absolute","top":"102%","left":"10%"});
        $("#precoTwo3").css({"position":"absolute","top":"105%","left":"11%"});
        $("#bDiminuirTwo3").css({"position":"absolute","top":"103%","left":"70%"});
        $("#numberTwo3").css({"position":"absolute","top":"103%","left":"74%"});
        $("#bAumentarTwo3").css({"position":"absolute","top":"103%","left":"77%"});
        $("#bAdicionarTwo3").css({"position":"absolute","top":"102.5%","left":"82%"});
        $("#linhaTwo_3").css({"position":"absolute","top":"110%","left":"9%","visibility":"hidden"});
    } 
    else if(numSuco == 5){
        // Segundo produto
        $("#linhaTwo_0").css({"visibility":"visible"})
        $("#nomeTwo1").css({"position":"absolute","top":"82%","left":"10%"});
        $("#precoTwo1").css({"position":"absolute","top":"85%","left":"11%"});
        $("#bDiminuirTwo1").css({"position":"absolute","top":"83%","left":"70%"});
        $("#numberTwo1").css({"position":"absolute","top":"83%","left":"74%"});
        $("#bAumentarTwo1").css({"position":"absolute","top":"83%","left":"77%"});
        $("#bAdicionarTwo1").css({"position":"absolute","top":"82.5%","left":"82%"});
        $("#linhaTwo_1").css({"position":"absolute","top":"90%","left":"9%","visibility":"visible"});
        // Terceiro produto
        $("#nomeTwo2").css({"position":"absolute","top":"92%","left":"10%"});
        $("#precoTwo2").css({"position":"absolute","top":"95%","left":"11%"});
        $("#bDiminuirTwo2").css({"position":"absolute","top":"93%","left":"70%"});
        $("#numberTwo2").css({"position":"absolute","top":"93%","left":"74%"});
        $("#bAumentarTwo2").css({"position":"absolute","top":"93%","left":"77%"});
        $("#bAdicionarTwo2").css({"position":"absolute","top":"92.5%","left":"82%"});
        $("#linhaTwo_2").css({"position":"absolute","top":"100%","left":"9%","visibility":"visible"});
        // Quarto produto
        $("#nomeTwo3").css({"position":"absolute","top":"102%","left":"10%"});
        $("#precoTwo3").css({"position":"absolute","top":"105%","left":"11%"});
        $("#bDiminuirTwo3").css({"position":"absolute","top":"103%","left":"70%"});
        $("#numberTwo3").css({"position":"absolute","top":"103%","left":"74%"});
        $("#bAumentarTwo3").css({"position":"absolute","top":"103%","left":"77%"});
        $("#bAdicionarTwo3").css({"position":"absolute","top":"102.5%","left":"82%"});
        $("#linhaTwo_3").css({"position":"absolute","top":"110%","left":"9%","visibility":"visible"});
        // Quinto produto
        $("#nomeTwo4").css({"position":"absolute","top":"112%","left":"10%"});
        $("#precoTwo4").css({"position":"absolute","top":"115%","left":"11%"});
        $("#bDiminuirTwo4").css({"position":"absolute","top":"113%","left":"70%"});
        $("#numberTwo4").css({"position":"absolute","top":"113%","left":"74%"});
        $("#bAumentarTwo4").css({"position":"absolute","top":"113%","left":"77%"});
        $("#bAdicionarTwo4").css({"position":"absolute","top":"112.5%","left":"82%"});
        $("#linhaTwo_4").css({"position":"absolute","top":"120%","left":"9%","visibility":"hidden"});
    }   
}