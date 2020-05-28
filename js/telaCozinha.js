$(new Document).ready(function(){
    listaMesas();
    $("#logout").click(() =>{
        tornaInativo();
        window.location.href = "../pages/login.html";
    });
    
});

function listaMesas(){
    $.ajax({
        type : "POST",
        dataType: "json",
        url: "../php/pegaInfoAtivos.php",
        success : (info)=>{
            let conteudo = "";
            for(let i = 0; i < info.length; i++){
                if(i == 0){
                    conteudo += "<button class='mesas' id='mesaDiv" + i + "'>";
                    conteudo += "<div id='text'>" + info[i].nomeMesa + "</div>";
                    conteudo += "<div id='iconSeta" + i + "' class='iconGira'><i id='icon" + i + "' class='fas fa-caret-left'></i></div>";
                    conteudo += "</button>";
                }
                else if(info[i].nomeMesa != info[i - 1].nomeMesa){
                    conteudo += "<button class='mesas' id='mesaDiv" + i + "'>";
                    conteudo += "<div id='text'>" + info[i].nomeMesa + "</div>";
                    conteudo += "<div id='iconSeta" + i + "' class='iconGira'><i id='icon" + i + "' class='fas fa-caret-left'></i></div>";
                    conteudo += "<div id='comd" + i + "' class='comanda" + i + "'></div>";
                    conteudo += "</button>";
                }
            }
            $("#mesas").html(conteudo);


            var posiçãoDiv = 20;
            var posiçãoTop = 50;
            for(let i = 0; i < info.length; i++){
                if(i == 0){
                    $("#mesaDiv" + i).css({"position":"absolute","top":"20%","left": "5%"});
                }
                else if(info[i].nomeMesa != info[i - 1].nomeMesa){
                    if(i > 0 && i <= 2){
                        $("#mesaDiv" + i).css({"position":"absolute","top":"20%","left": 5 + posiçãoDiv + "%"});
                        posiçãoDiv += 20;
                    }
                    else if(i >= 3 && i <= 5){
                        if(i == 3){
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": "5%"});
                            posiçãoDiv = 20;
                        }
                        else if(i == 4){
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoDiv += 20;
                        }
                        else{
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoTop += 50;
                        }
                    }
                    else if(i >= 6 && i <= 8){
                        if(i == 6){
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": "5%"});
                            posiçãoDiv = 20;
                        }
                        else if(i == 7){
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoDiv += 20;
                        }
                        else{
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoTop += 50;
                        }
                    }
                    else if(i >= 9 && i <= 11){
                        if(i == 9){
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": "5%"});
                            posiçãoDiv = 20;
                        }
                        else if(i == 10){
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoDiv += 20;
                        }
                        else{
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoTop += 50;
                        }
                    }
                }
            }

            let count = 0;
            let indexesMesas = [];
            for(let l = 0; l < info.length; l++){
                if(l == 0){
                    indexesMesas.push(0);
                }
                else if(info[l].nomeMesa == info[l - 1].nomeMesa){
                    count = l - 1;
                    while(count != 0){
                        if(info[count].nomeMesa != info[count - 1].nomeMesa){
                            break;
                        }
                        else{
                            count--;
                        }
                    }
                    let colocar = true;
                    if(count != 0){
                        for(let z = 0; z < indexesMesas.length - 1; z++){
                            if(indexesMesas[z] == count){
                                colocar = false;
                            }
                        }
                    }
                    if(colocar){
                        indexesMesas.push(count);
                    }
                }
            }

            console.log(indexesMesas);
            $(new Document).ready(() => {
                $("#mesaDiv0").click(()=>{
                    $("#icon0").toggleClass("iconGira");

                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0

                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[0]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div id='comd" + i + "' class='comanda" + i + "'>";
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                if(i == 0){
                                    conteudo += "<div class='produtos' id='listPedOne" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                }
                                else if(i == 1){
                                    conteudo += "<div class='produtos' id='listPedTwo" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                }
                                contadorProd++;
                            }
                        }
                    }

                    conteudo += "<button id='bFinalizar0'>Finalizar</button>";
                    conteudo += "</div>";
                    $("#divComandas").html(conteudo);


                    var count = 0
                    var mudaCom = 0;
                    var mudaPosProd = 0;
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[0]].nomeMesa == info[i].nomeMesa){
                            if(contadorComandas == 2){
                                if(mudaCom == 0){
                                    $("#comd0").css({"position":"absolute","top":"25%","left":"5%"});
                                    $("#comd0").removeClass("comanda0").addClass("comandaAfter0");
                    
                                    $("#numComanda" + i).css({"position":"relative","top":"0%","left":"0%","padding-top":"6%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    for(let j = 0; j < info[mudaCom].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        if(j == 0){
                                            $("#listPedOne" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": 6 + mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                        }
                                        else{
                                            $("#listPedOne" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                        }
                                    }
                                    mudaPosProd = mudaPosProd + 6;
                                    mudaCom++;
                                }
                            
                                else if(mudaCom == 1){
                                    if(contadorProd == 2){
                                        $("#numComanda" + i).css({"position":"relative","top":"0%","left":"0%","padding-top": 2 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                        mudaPosProd = mudaPosProd + 2;
                                    }
                                    for(let j = 0; j < info[mudaCom].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        if(j == 0){
                                            $("#listPedTwo" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                        }
                                        else{
                                            $("#listPedTwo" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                        }
                                    }
                                    mudaCom++;
                                }
                            }
                        }   
                    }
                });
            
            
                $("#mesaDiv1").click(()=>{
                    $("#icon1").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0;
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[1]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar1'>Finalizar</button>";
                    $("#comd1").html(conteudo);
                    $("#comd1").toggleClass("comandaAfter");
                });

                $("#mesaDiv2").click(()=>{
                    $("#icon2").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0;
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[2]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar2'>Finalizar</button>";
                    $("#comd2").html(conteudo);
                    $("#comd2").toggleClass("comandaAfter");
                });

                $("#mesaDiv3").click(()=>{
                    $("#icon3").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0;
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[3]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar3'>Finalizar</button>";
                    $("#comd3").html(conteudo);
                    $("#comd3").toggleClass("comandaAfter");
                });

                $("#mesaDiv4").click(()=>{
                    $("#icon4").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0;
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[4]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar4'>Finalizar</button>";
                    $("#comd4").html(conteudo);
                    $("#comd4").toggleClass("comandaAfter");
                });

                $("#mesaDiv5").click(()=>{
                    $("#icon5").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0;
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[5]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar5'>Finalizar</button>";
                    $("#comd5").html(conteudo);
                    $("#comd5").toggleClass("comandaAfter");
                });

                $("#mesaDiv6").click(()=>{
                    $("#icon6").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[6]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar6'>Finalizar</button>";
                    $("#comd6").html(conteudo);
                    $("#comd6").toggleClass("comandaAfter");
                });

                $("#mesaDiv7").click(()=>{
                    $("#icon7").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0;
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[7]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar7'>Finalizar</button>";
                    $("#comd7").html(conteudo);
                    $("#comd7").toggleClass("comandaAfter");
                });

                $("#mesaDiv8").click(()=>{
                    $("#icon8").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    contadorComandas = 0;
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[8]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar8'>Finalizar</button>";
                    $("#comd8").html(conteudo);
                    $("#comd8").toggleClass("comandaAfter");
                });

                $("#mesaDiv9").click(()=>{
                    $("#icon9").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0; 
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[9]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar9'>Finalizar</button>";
                    $("#comd9").html(conteudo);
                    $("#comd9").toggleClass("comandaAfter");
                });
            });

        },
        error : ()=>{
            console.log("Nao foi possivel listar");
        }
    });
}
function tornaInativo(){
    const func = "cozinheiro";
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

