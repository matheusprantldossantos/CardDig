$(document).ready(function(){
    
    $("#bPromo").removeClass("item_botao").addClass("item_botao_after");
    

    $("#bPizza").click(function(){
        window.location.href = "../pages/Pizza.html";
    });

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