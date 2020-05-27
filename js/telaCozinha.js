$(new Document).ready(function(){
    listaMesas();
    $("#logout").click(() =>{
        tornaInativo();
        window.location.href = "../pages/login.html";
    });

    $("#mesaDiv").click(function(){
        $("#icon").toggleClass("iconGira");
        $("#comd").toggleClass("comandaAfter");
    })
    
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
                    conteudo += "<button id='mesaDiv" + i + "'>";
                    conteudo += "<div id='text'>" + info[i].nomeMesa + "</div>";
                    conteudo += "<div id='iconSeta' class='iconGira'><i id='icon' class='fas fa-caret-left'></i></div>";
                    conteudo += "<div id='comd" + i + "' class='comanda'></div>";
                    conteudo += "</button>";
                }
                else if(info[i].nomeMesa != info[i - 1].nomeMesa){
                    conteudo += "<button id='mesaDiv" + i + "'>";
                    conteudo += "<div id='text'>" + info[i].nomeMesa + "</div>";
                    conteudo += "<div id='iconSeta' class='iconGira'><i id='icon" + i + "' class='fas fa-caret-left'></i></div>";
                    conteudo += "<div id='comd" + i + "' class='comanda'></div>";
                    conteudo += "</button>";
                }
            }
            $("#mesas").html(conteudo);
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
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
                            contadorComandas++;
                            for(let j = 0; j < info[i].infos.nome.length; j++){
                                conteudo += "<div class='produtos' id='listPed" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                contadorProd++;
                            }
                        }
                    }
                    conteudo += "<button id='bFinalizar0'>Finalizar</button>";
                    $("#comd0").html(conteudo);
                    $("#comd0").toggleClass("comandaAfter");
                });
                $("#mesaDiv1").click(()=>{
                    $("#icon1").toggleClass("iconGira");
                    var conteudo = "";
                    let contadorProd = 0;
                    let contadorComandas = 0;
                    for(let i = 0; i < info.length; i++){
                        if(info[indexesMesas[1]].nomeMesa == info[i].nomeMesa){
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
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
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
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
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
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
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
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
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
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
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
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
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
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
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
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
                            conteudo += "<div class='nomeC' id='numComanda0'>"+ info[i].comanda +"</div>";
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

