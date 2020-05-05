$(new Document).ready(function(){
    fListaCombinacoes();
    $("#bComb").toggleClass("item_botao_after");
    $("#bHamb").removeClass("item_botao_after").addClass("item_botao");
    $("#bBebidas").removeClass("item_botao_after").addClass("item_botao");
    $("#bPizza").removeClass("item_botao_after").addClass("item_botao");
    $("#bSobremesa").removeClass("item_botao_after").addClass("item_botao");
    $("#bLanche").removeClass("item_botao_after").addClass("item_botao");

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
        }
    });
}