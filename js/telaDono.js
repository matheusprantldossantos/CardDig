$(new Document).ready(function(){
    $("#categ1").click(function(){
        window.location.href = "../pages/donoCombinações.html";
    });

    $("#categ2").click(function(){
        window.location.href = "../pages/donoLanches.html";
    });

    $("#categ3").click(function(){
        window.location.href = "../pages/donoPizzas.html";
    });

    $("#categ4").click(function(){
        window.location.href = "../pages/donoHamburguers.html";
    });

    $("#categ5").click(function(){
        window.location.href = "../pages/donoBebidas.html";
    });

    $("#categ6").click(function(){
        window.location.href = "../pages/donoSobremesas.html";
    });
    
    $("#logout").click(function(){
        tornaInativo();
        window.location.href = "../pages/login.html";
    });
});
function tornaInativo(){
    const func = "dono";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/mudaInatividade.php",
        data: {
            ajax_func : func
        },
        success : function(condicao){
            console.log(condicao);
        },
        error: function(condicao){
            console.log(condicao);
        }
    });
}