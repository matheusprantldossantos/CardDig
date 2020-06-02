$(document).ready(function(){
    $("#bCombina").click(function(){
        window.location.href = "../pages/Combinações.html";
    });

    $("#bLanches").click(function(){
        window.location.href = "../pages/Lanches.html";
    });

    $("#bPizzas").click(function(){
        window.location.href = "../pages/Pizza.html";
    });

    $("#bHamb").click(function(){
        window.location.href = "../pages/Hamburguers.html";
    });

    $("#bBebida").click(function(){
        window.location.href = "../pages/Bebidas.html";
    });

    $("#bSobrem").click(function(){
        window.location.href = "../pages/Sobremesas.html";
    });

    $("#bPedidos").click(function() {
        window.location.href = "../pages/meusPedidos.html";
    });

    $("#bPromo").click(function() {
        window.location.href = "../pages/Promoções.html";
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

