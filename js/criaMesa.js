$(new Document).ready(function(){
    $("#titlePag").removeClass("bTitle").addClass("bTitleAfter");
    $("#titlePag2").removeClass("bTitleAfter").addClass("bTitle");
    
    pegaNome();
    $("#confQnt").click(function(){
        $("#cadastro").css({"visibility":"hidden"});
        criaComandas();
        $("#conteudo").css({"visibility":"visible"});

    });
    $("#logout").click(() =>{
         tornaInativo();
         window.location.href = "../pages/login.html";
    });

    $("#titlePag2").click(function(){
        window.location.href = "../pages/mesasEnviar.html";
    });

});


function criaComandas(){
    let quantidade = $("#quantidade").val();
    var inputs = "";

    inputs += "<div id='titleAfter'>Cadastro da Mesa</div>";
    inputs += "<div id='bVoltar'><i class='fas fa-chevron-left'></i></div>";
    $.ajax({
        
        type: "POST",
        dataType: "json",
        url: "../php/pegaMesas.php",
        success : function(condicao){
            console.log("listou as mesas");
            inputs += "<select class='mesas' id='nomeMesa' name='funcoes'>";
            condicao.forEach(element => {
                inputs += "<option value='" + element + "'>" + element +"</option>"
            });
            inputs += "</select>";
            inputs += "<div id='textCom'>Comanda(s)</div>";
            for(let i = 0; i < parseInt(quantidade); i++){
                inputs += "<input type='number' class='comd' id='comanda"+ i + "'placeholder='Digite a comanda'>";
            }
            inputs += "<button id='cadastraMesa'>Cadastrar</button>";
            inputs += "<div id='mensagem'></div>";

            $("#conteudo").html(inputs);

            var aumDiv = 0
            // Arruma position 
            for(let i = 0; i < parseInt(quantidade); i++){
                if(i == 0 || i == 1){
                    $("#comanda" + i).css({"top":"60%"});
                    $("#cadastraMesa").css({"top": 80 + "%"});
                }
                else if(i >= 2 && i <= 4){
                    $("#comanda" + i).css({"top": 155 + aumPosit +"px"});
                    $("#cadastraMesa").css({"top": 205 + aumPosit +"px"});
                    $("#conteudo").css({"height": 35 + aumDiv + "%"});
                    $("#conteudo").css({"padding-bottom":"30px"});
                }
                else if(i >= 5){
                    $("#comanda" + i).css({"top": 155 + aumPosit +"px"});
                    $("#cadastraMesa").css({"top": 205 + aumPosit +"px"});
                    $("#conteudo").css({"height": 35 + aumDiv + "%"});
                    $("#conteudo").css({"padding-bottom":"70px"});
                }
                
            }

            $(new Document).ready(function(){
                $("#cadastraMesa").click(function(){
                    criaMesa();
                });
            });

            $(new Document).ready(function(){
                $("#bVoltar").click(function(){
                    location.reload(true);
                });
            });
        },
        error: function(condicao){
            console.log("Nao foi possivel listar as mesa");
        }
    });
}

function criaMesa(){
    var nomeMesa = $("#nomeMesa").val();
    let comanda = [];
    let quantidade = $("#quantidade").val();
    if(quantidade == ""){
        $("#mensagem").text("Preencha todos os campos");
        return 0;
    }
    for(let k = 0; k < parseInt(quantidade); k++){
        comanda[k] = $("#comanda"+k).val();
    }
    if(nomeMesa != ""){
        for(let l = 0; l < comanda.length; l++){
            if(comanda[l] == ""){
                $("#mensagem").text("Preencha todos os campos");
                return 0;
            }
        }
        for(var i = 0;  i < parseInt(quantidade); i++){
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/iniciaMesa.php",
            data: {
                ajax_nomeMesa: nomeMesa,
                ajax_comanda: comanda[i],
                ajax_contador : i
            },
            success : function(info){
                window.location.href = "../pages/telaPrincipal.html";
            },
            error: function(info){
                $("#mensagem").text("Php nao funcionou");
            }

        });
        }
    }
    else{
        $("#mensagem").text("Preencha todos os campos");
    }
}

function tornaInativo(){
    const func = "garcom";
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

function pegaNome(){
    const func = "garcom";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/comprimenta.php",
        data: {
            ajax_func : func
        },
        success : function(condicao){
            console.log(condicao);
            let nome = condicao;
            nome = nome.split(" ");
            $("#nome").html(nome[0].toUpperCase());
        },
        error: function(condicao){
            console.log(condicao);
        }
    });
}
