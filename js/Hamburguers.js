$(new Document).ready(function(){
    fListaHamburger();
    $("#bHamb").toggleClass("item_botao_after");
    $("#bBebidas").removeClass("item_botao_after").addClass("item_botao");
    $("#bPizza").removeClass("item_botao_after").addClass("item_botao");
    $("#bSobremesa").removeClass("item_botao_after").addClass("item_botao");
    $("#bLanche").removeClass("item_botao_after").addClass("item_botao");
    $("#bComb").removeClass("item_botao_after").addClass("item_botao");

    $("#bBebidas").click(function(){
        window.location.href = "../pages/Bebidas.html";
    });

    $("#bPizza").click(function(){
        window.location.href = "../pages/Pizza.html";
    });

    $("#bSobremesa").click(function(){
        window.location.href = "../pages/Sobremesas.html";
    });

    $("#bLanche").click(function(){
        window.location.href = "../pages/Lanches.html";
    });
});

function fListaHamburger(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/hamburguerListar.php",
        success : function(info){
            //console.log(JSON.stringify(info, ' ', null));

            $(new Document).ready(function(){ 
                let count = 0;
                console.log("documento pronto")
                $("#bAumentar0").click(function(){
                    console.log("clicou");
                    count ++;
            
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

            var conteudo = "";
            for(var i = 0; i < info.length; i++){
            conteudo +="<div id='nomePag'>" + " HAMBURGUERS " + "</div>" +
                    "<div id='linha2'>" + "</div>";
            conteudo +="<div id='subNome'>" + info[i].tipo_categoria + "</div>";
            conteudo +="<div id='nomeProd" + i.toString() + "'>" + info[i].nome + "</div>";
            conteudo +="<div id='precoProd"+ i.toString() +"'>" + "R$ " +  info[i].preco + "</div>";
            conteudo +="<button class='bContador' id='bDiminuir" + i.toString() + "'>" +"<i class='fas fa-minus'>" + "</i>" + "</button>";
            conteudo +="<div id='number"+ i.toString() +"'>" + "0" + "</div>";
            conteudo +="<button class='bContador' id='bAumentar" + i.toString() + "'>" + "<i class='fas fa-plus'>" + "</i>" + "</button>";
            conteudo +="<button id='bAdicionarP" + i.toString() + "'>" + "Adicionar" +"</button>";
            conteudo +="<div id='linha_" + i.toString() + "'>" + "</div>";
            }

            $("#divPedidos").html(conteudo);

        },
        error: function (request, status, error) {
            console.log(error);
        }
    });
}