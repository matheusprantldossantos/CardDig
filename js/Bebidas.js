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

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentarOne1").click(function(){
                    console.log("clicou");
                    count ++;
            
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
                        conteudo +="<div id='subNome0'>" + info[i].tipo_categoria + "</div>";
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
                        conteudo +="<div id='subNome1'>" + info[i].tipo_categoria + "</div>";
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