$(new Document).ready(function(){
    fListaSobremesas();
    $("#bSobremesa").toggleClass("item_botao_after");
    $("#bPizza").removeClass("item_botao_after").addClass("item_botao");
    $("#bBebidas").removeClass("item_botao_after").addClass("item_botao");
    $("#bHamb").removeClass("item_botao_after").addClass("item_botao");
    $("#bLanche").removeClass("item_botao_after").addClass("item_botao");
    $("#bComb").removeClass("item_botao_after").addClass("item_botao");

    $("#bBebidas").click(function(){
        window.location.href = "../pages/Bebidas.html";
    });

    $("#bPizza").click(function(){
        window.location.href = "../pages/Pizza.html";
    });
    $("#bComb").click(function(){
        window.location.href = "../pages/Combinações.html";
    });

    $("#bHamb").click(function(){
        window.location.href = "../pages/Hamburguers.html";
    });

    $("#bLanche").click(function(){
        window.location.href = "../pages/Lanches.html";
    });
    $("#bPedidos").click(function() {
        window.location.href = "../pages/meusPedidos.html";
    });
});

function fListaSobremesas(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/sobremesasListar.php",
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
            let numDoce = 0;
            let numSorv = 0;

            for(var i = 0; i < info.length; i++){
                conteudo +="<div id='nomePag'>" + " SOBREMESAS " + "</div>" +
                        "<div id='linha2'>" + "</div>";

                switch(info[i].tipo_categoria){
                    case 'doces':
                        conteudo +="<div id='subNome0'>" + info[i].tipo_categoria + "</div>";
                        conteudo +="<div id='nomeOne" + numDoce + "'>" + info[i].nome + "</div>";
                        conteudo +="<div id='precoOne"+ numDoce +"'>" + "R$ " +  info[i].preco + "</div>";
                        conteudo +="<button class='bContador' id='bDiminuirOne" + numDoce + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
                        conteudo +="<div id='numberOne"+ numDoce +"'>" + "0" + "</div>";
                        conteudo +="<button class='bContador' id='bAumentarOne" + numDoce + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
                        conteudo +="<button id='bAdicionarOne" + numDoce + "'>" + "Adicionar" +"</button>";
                        conteudo +="<div id='linhaOne_" + numDoce + "'>" + "</div>";
                        numDoce++;
                        break;

                    case 'sorvetes':
                        conteudo +="<div id='subNome1'>" + info[i].tipo_categoria + "</div>";
                        conteudo +="<div id='nomeTwo" + numSorv + "'>" + info[i].nome + "</div>";
                        conteudo +="<div id='precoTwo"+ numSorv +"'>" + "R$ " +  info[i].preco + "</div>";
                        conteudo +="<button class='bContador' id='bDiminuirTwo" + numSorv + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
                        conteudo +="<div id='numberTwo"+ numSorv +"'>" + "0" + "</div>";
                        conteudo +="<button class='bContador' id='bAumentarTwo" + numSorv + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
                        conteudo +="<button id='bAdicionarTwo" + numSorv + "'>" + "Adicionar" +"</button>";
                        conteudo +="<div id='linhaTwo_" + numSorv + "'>" + "</div>";
                        numSorv++;
                        break;    
                }
            }
            
            $("#divPedidos").html(conteudo);
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