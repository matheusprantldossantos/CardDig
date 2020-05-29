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
                    conteudo += "<div id='iconSeta' class='iconGira'><i id='icon" + i + "' class='fas fa-caret-left'></i></div>";
                    conteudo += "</button>";
                }
                else if(info[i].nomeMesa != info[i - 1].nomeMesa){
                    conteudo += "<button class='mesas' id='mesaDiv" + i + "'>";
                    conteudo += "<div id='text'>" + info[i].nomeMesa + "</div>";
                    conteudo += "<div id='iconSeta' class='iconGira'><i id='icon" + i + "' class='fas fa-caret-left'></i></div>";
                    conteudo += "</button>";
                }
            }
            $("#mesas").html(conteudo);


            var posiçãoDiv = 0;
            var posiçãoTop = 50;
            for(let i = 0; i < info.length; i++){
                if(i == 0){
                    $("#mesaDiv" + i).css({"position":"absolute","top":"20%","left": "5%"});
                }
                else if(info[i].nomeMesa != info[i - 1].nomeMesa){
                    if(i > 0 && i <= 2){
                        posiçãoDiv += 25;
                        $("#mesaDiv" + i).css({"position":"absolute","top":"20%","left": 5 + posiçãoDiv + "%"});
                        posiçãoDiv += 5;
                        if(i == 2){
                            posiçãoDiv = 0;
                        }
                    }
                    else if(i >= 3 && i <= 5){
                        if(i == 3){
                            $("#mesaDiv" + i).css({"position":"absolute","top": 20 + posiçãoTop + "%","left": "5%"});
                        }
                        else if(i == 4){
                            posiçãoDiv += 25;
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoDiv += 5;
                        }
                        else{
                            posiçãoDiv += 25;
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoTop += 50;
                            posiçãoDiv = 0;
                        }
                    }
                    else if(i >= 6 && i <= 8){
                        if(i == 6){
                            $("#mesaDiv" + i).css({"position":"absolute","top": 20 + posiçãoTop + "%","left": "5%"});
                        }
                        else if(i == 7){
                            posiçãoDiv += 25;
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoDiv += 5;
                        }
                        else{
                            posiçãoDiv += 25;
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoTop += 50;
                            posiçãoDiv = 0;
                        }
                    }
                    else if(i >= 9 && i <= 11){
                        if(i == 9){
                            $("#mesaDiv" + i).css({"position":"absolute","top": 20 + posiçãoTop + "%","left": "5%"});
                        }
                        else if(i == 10){
                            posiçãoDiv += 25;
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoDiv += 5;
                        }
                        else{
                            posiçãoDiv += 25;
                            $("#mesaDiv" + i).css({"position":"absolute","top":20 + posiçãoTop + "%","left": 5 + posiçãoDiv + "%"});
                            posiçãoTop += 50;
                            posiçãoDiv = 0;
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

            // MESA 0 ------------------------------------------------------------------

            $(new Document).ready(() => {
                var a = 0;
                $("#mesaDiv0").click(()=>{
                    if(a % 2 == 0){
                        $("#icon0").removeClass("iconGira").addClass("iconGiraAfter");

                        var conteudo = "";
                        let contadorProd = 0;
                        let contadorComandas = 0

                        conteudo += "<div id='comd0' class='comanda0'>";

                        for(let i = 0; i < info.length; i++){
                            if(info[indexesMesas[0]].nomeMesa == info[i].nomeMesa){
                                conteudo += "<div class='nomeC' id='MU_numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                                
                                for(let j = 0; j < info[i].infos.nome.length; j++){
                                    if(contadorComandas == 0){
                                        conteudo += "<div class='produtos' id='ComOne_MU_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    else if(contadorComandas == 1){
                                        conteudo += "<div class='produtos' id='ComTwo_MU_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    else if(contadorComandas == 2){
                                        conteudo += "<div class='produtos' id='ComThree_MU_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    else if(contadorComandas == 3){
                                        conteudo += "<div class='produtos' id='ComFour_MU_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    contadorProd++;
                                }
                                contadorComandas++;
                            }
                        }

                        conteudo += "<button class='butFinal' id='bFinalizar0'>Finalizar</button>";
                        conteudo += "</div>";
                        $("#divComandas0").html(conteudo);

                        if(contadorComandas == 1){
                            $("#comd0").removeClass("comanda0").addClass("comandaAfter0");
                            $(".comandaAfter0").css({"height":"26%"});
                            $("#bFinalizar0").css({"margin-top":"0%"});
                        }
                        /* Comanda 2 */
                        else if(contadorProd <= 4 && contadorComandas == 2){
                            $("#comd0").removeClass("comanda0").addClass("comandaAfter0");
                            $(".comandaAfter0").css({"height":"32%"});
                            $("#bFinalizar0").css({"margin-top":"2%"});
                        }
                        else if(contadorProd == 5 && contadorComandas == 2){
                            $("#comd0").removeClass("comanda0").addClass("comandaAfter0");
                            $(".comandaAfter0").css({"height":"36%"});
                            $("#bFinalizar0").css({"margin-top":"5%"});
                        }
                        else if(contadorProd == 6 && contadorComandas == 2){
                            $("#comd0").removeClass("comanda0").addClass("comandaAfter0");
                            $(".comandaAfter0").css({"height":"40%"});
                            $("#bFinalizar0").css({"margin-top":"5%"});
                        }
                        else if(contadorProd == 7 && contadorComandas == 2){
                            $("#comd0").removeClass("comanda0").addClass("comandaAfter0");
                            $(".comandaAfter0").css({"height":"44%"});
                            $("#bFinalizar0").css({"margin-top":"5%"});
                        }
                        else if(contadorProd == 8 && contadorComandas == 2){
                            $("#comd0").removeClass("comanda0").addClass("comandaAfter0");
                            $(".comandaAfter0").css({"height":"50%"});
                            $("#bFinalizar0").css({"margin-top":"10%"});
                        }
                        /* Comanda 3 */
                        else if(contadorComandas == 3){
                            $("#comd0").removeClass("comanda0").addClass("comandaAfter0");
                            $(".comandaAfter0").css({"height":"78%"});
                            $("#bFinalizar0").css({"margin-top":"25%"});
                        }
                        else if(contadorComandas == 4){
                            $("#comd0").removeClass("comanda0").addClass("comandaAfter0");
                            $(".comandaAfter0").css({"height":"104%"});
                            $("#bFinalizar0").css({"margin-top":"40%"});
                        }

                        var count = 0
                        var mudaCom = 0;
                        var mudaPosProd = 0;
                        for(let i = 0; i < info.length; i++){
                            if(info[indexesMesas[0]].nomeMesa == info[i].nomeMesa){
                                if(mudaCom == 0){
                                    $("#MU_numComanda" + mudaCom).css({"position":"relative","top":"0%","left":"0%","padding-top":"6%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        if(j == 0){
                                            $("#ComOne_MU_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": 6 + mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                            mudaPosProd = mudaPosProd + 6;
                                        }
                                        else{
                                            $("#ComOne_MU_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                        }
                                    }
                                    mudaCom++;
                                }   
                                
                                else if(mudaCom == 1){
                                    $("#MU_numComanda" + mudaCom).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    mudaPosProd += 13;
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        $("#ComTwo_MU_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                    }
                                    mudaCom++;
                                }
                                else if(mudaCom == 2){
                                    $("#MU_numComanda" + mudaCom).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    mudaPosProd += 13;
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        $("#ComThree_MU_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                    }
                                    mudaCom++;
                                }
                                else if(mudaCom == 3){
                                    $("#MU_numComanda" + mudaCom).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    mudaPosProd += 13;
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        $("#ComFour_MU_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                    }
                                    mudaCom++;
                                }
                            }  
                        }
                    }

                    else{
                        $(".comandaAfter0").css({"height":"0%"});
                        $("#icon0").removeClass("iconGiraAfter").addClass("iconGira");
                        $("#comd0").removeClass("comandaAfter0").addClass("comanda0");
                        $("#bFinalizar0").css({"position":"absolute","top":"0%","margin-top":"0%","transition":"0.4s","visibility":"hidden"});
                    }

                    a++
                });

            });


        // MESA 1 ------------------------------------------------------------------

            $(new Document).ready(() => {
                var a = 0;
                $("#mesaDiv1").click(()=>{
                    if(a % 2 == 0){
                        $("#icon1").removeClass("iconGira").addClass("iconGiraAfter");

                        var conteudo = "";
                        let contadorProd = 0;
                        let contadorComandas = 0

                        conteudo += "<div id='comd1' class='comanda1'>";

                        for(let i = 0; i < info.length; i++){
                            if(info[indexesMesas[1]].nomeMesa == info[i].nomeMesa){
                                conteudo += "<div class='nomeC' id='MD_numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                                
                                for(let j = 0; j < info[i].infos.nome.length; j++){
                                    if(contadorComandas == 0){
                                        conteudo += "<div class='produtos' id='ComOne_MD_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    else if(contadorComandas == 1){
                                        conteudo += "<div class='produtos' id='ComTwo_MD_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    else if(contadorComandas == 2){
                                        conteudo += "<div class='produtos' id='ComThree_MD_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    else if(contadorComandas == 3){
                                        conteudo += "<div class='produtos' id='ComFour_MD_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    contadorProd++;
                                }
                                contadorComandas++;
                            }
                        }

                        conteudo += "<button class='butFinal' id='bFinalizar1'>Finalizar</button>";
                        conteudo += "</div>";
                        $("#divComandas1").html(conteudo);

                        if(contadorComandas == 1){
                            $("#comd1").removeClass("comanda1").addClass("comandaAfter1");
                            $(".comandaAfter1").css({"height":"26%"});
                            $("#bFinalizar1").css({"margin-top":"0%"});
                        }
                        /* Comanda 2 */
                        else if(contadorProd <= 4 && contadorComandas == 2){
                            $("#comd1").removeClass("comanda1").addClass("comandaAfter1");
                            $(".comandaAfter1").css({"height":"32%"});
                            $("#bFinalizar1").css({"margin-top":"2%"});
                        }
                        else if(contadorProd == 5 && contadorComandas == 2){
                            $("#comd1").removeClass("comanda1").addClass("comandaAfter1");
                            $(".comandaAfter1").css({"height":"36%"});
                            $("#bFinalizar1").css({"margin-top":"5%"});
                        }
                        else if(contadorProd == 6 && contadorComandas == 2){
                            $("#comd1").removeClass("comanda1").addClass("comandaAfter1");
                            $(".comandaAfter1").css({"height":"40%"});
                            $("#bFinalizar1").css({"margin-top":"5%"});
                        }
                        else if(contadorProd == 7 && contadorComandas == 2){
                            $("#comd1").removeClass("comanda1").addClass("comandaAfter1");
                            $(".comandaAfter1").css({"height":"44%"});
                            $("#bFinalizar1").css({"margin-top":"5%"});
                        }
                        else if(contadorProd == 8 && contadorComandas == 2){
                            $("#comd1").removeClass("comanda1").addClass("comandaAfter1");
                            $(".comandaAfter1").css({"height":"50%"});
                            $("#bFinalizar1").css({"margin-top":"10%"});
                        }
                        /* Comanda 3 */
                        else if(contadorComandas == 3){
                            $("#comd1").removeClass("comanda1").addClass("comandaAfter1");
                            $(".comandaAfter1").css({"height":"78%"});
                            $("#bFinalizar1").css({"margin-top":"25%"});
                        }
                        else if(contadorComandas == 4){
                            $("#comd1").removeClass("comanda1").addClass("comandaAfter1");
                            $(".comandaAfter1").css({"height":"104%"});
                            $("#bFinalizar1").css({"margin-top":"40%"});
                        }
                        

                        var count = 0
                        var mudaCom = 0;
                        var mudaPosProd = 0;
                        for(let i = 0; i < info.length; i++){
                            if(info[indexesMesas[1]].nomeMesa == info[i].nomeMesa){
                                if(mudaCom == 0){
                                    $("#MD_numComanda" + mudaCom).css({"position":"relative","top":"0%","left":"0%","padding-top":"6%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        if(j == 0){
                                            $("#ComOne_MD_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": 6 + mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                            mudaPosProd = mudaPosProd + 6;
                                        }
                                        else{
                                            $("#ComOne_MD_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                        }
                                    }
                                    mudaCom++;
                                }   
                                
                                else if(mudaCom == 1){
                                    $("#MD_numComanda" + mudaCom).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    mudaPosProd += 13;
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        $("#ComTwo_MD_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                    }
                                    mudaCom++;
                                }
                                else if(mudaCom == 2){
                                    $("#MD_numComanda" + mudaCom).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    mudaPosProd += 13;
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        $("#ComThree_MD_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                    }
                                    mudaCom++;
                                }
                                else if(mudaCom == 3){
                                    $("#MD_numComanda" + mudaCom).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    mudaPosProd += 13;
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        $("#ComFour_MD_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                    }
                                    mudaCom++;
                                }
                            }  
                        }
                    }

                    else{
                        $(".comandaAfter1").css({"height":"0%"});
                        $("#icon1").removeClass("iconGiraAfter").addClass("iconGira");
                        $("#comd1").removeClass("comandaAfter1").addClass("comanda1");
                        $("#bFinalizar1").css({"position":"absolute","top":"0%","margin-top":"0%","transition":"0.4s","visibility":"hidden"});
                    }

                    a++
                });

            });


            // MESA 2 ------------------------------------------------------------------

            $(new Document).ready(() => {
                var a = 0;
                $("#mesaDiv2").click(()=>{
                    if(a % 2 == 0){
                        $("#icon2").removeClass("iconGira").addClass("iconGiraAfter");

                        var conteudo = "";
                        let contadorProd = 0;
                        let contadorComandas = 0

                        conteudo += "<div id='comd2' class='comanda2'>";

                        for(let i = 0; i < info.length; i++){
                            if(info[indexesMesas[1]].nomeMesa == info[i].nomeMesa){
                                conteudo += "<div class='nomeC' id='MT_numComanda"+ contadorComandas +"'>"+ "COMANDA " + info[i].comanda +"</div>";
                                
                                for(let j = 0; j < info[i].infos.nome.length; j++){
                                    if(contadorComandas == 0){
                                        conteudo += "<div class='produtos' id='ComOne_MT_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    else if(contadorComandas == 1){
                                        conteudo += "<div class='produtos' id='ComTwo_MT_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    else if(contadorComandas == 2){
                                        conteudo += "<div class='produtos' id='ComThree_MT_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    else if(contadorComandas == 3){
                                        conteudo += "<div class='produtos' id='ComFour_MT_Prod" + j + "'>" + info[i].infos.nome[j] + "</div>";
                                    }
                                    contadorProd++;
                                }
                                contadorComandas++;
                            }
                        }

                        conteudo += "<button class='butFinal' id='bFinalizar2'>Finalizar</button>";
                        conteudo += "</div>";
                        $("#divComandas2").html(conteudo);

                        if(contadorComandas == 1){
                            $("#comd2").removeClass("comanda2").addClass("comandaAfter2");
                            $(".comandaAfter2").css({"height":"26%"});
                            $("#bFinalizar2").css({"margin-top":"0%"});
                        }
                        /* Comanda 2 */
                        else if(contadorProd <= 4 && contadorComandas == 2){
                            $("#comd2").removeClass("comanda2").addClass("comandaAfter2");
                            $(".comandaAfter2").css({"height":"32%"});
                            $("#bFinalizar2").css({"margin-top":"2%"});
                        }
                        else if(contadorProd == 5 && contadorComandas == 2){
                            $("#comd2").removeClass("comanda2").addClass("comandaAfter2");;
                            $(".comandaAfter2").css({"height":"36%"});
                            $("#bFinalizar2").css({"margin-top":"5%"});
                        }
                        else if(contadorProd == 6 && contadorComandas == 2){
                            $("#comd2").removeClass("comanda2").addClass("comandaAfter2");
                            $(".comandaAfter2").css({"height":"40%"});
                            $("#bFinalizar2").css({"margin-top":"5%"});
                        }
                        else if(contadorProd == 7 && contadorComandas == 2){
                            $("#comd2").removeClass("comanda2").addClass("comandaAfter2");
                            $(".comandaAfter2").css({"height":"44%"});
                            $("#bFinalizar2").css({"margin-top":"5%"});
                        }
                        else if(contadorProd == 8 && contadorComandas == 2){
                            $("#comd2").removeClass("comanda2").addClass("comandaAfter2");
                            $(".comandaAfter2").css({"height":"50%"});
                            $("#bFinalizar2").css({"margin-top":"10%"});
                        }
                        /* Comanda 3 */
                        else if(contadorComandas == 3){
                            $("#comd2").removeClass("comanda2").addClass("comandaAfter2");
                            $(".comandaAfter2").css({"height":"78%"});
                            $("#bFinalizar2").css({"margin-top":"25%"});
                        }
                        else if(contadorComandas == 4){
                            $("#comd2").removeClass("comanda2").addClass("comandaAfter2");
                            $(".comandaAfter2").css({"height":"104%"});
                            $("#bFinalizar2").css({"margin-top":"40%"});
                        }
                        

                        var count = 0
                        var mudaCom = 0;
                        var mudaPosProd = 0;
                        for(let i = 0; i < info.length; i++){
                            if(info[indexesMesas[2]].nomeMesa == info[i].nomeMesa){
                                if(mudaCom == 0){
                                    $("#MT_numComanda" + mudaCom).css({"position":"relative","top":"0%","left":"0%","padding-top":"6%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        if(j == 0){
                                            $("#ComOne_MT_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": 6 + mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                            mudaPosProd = mudaPosProd + 6;
                                        }
                                        else{
                                            $("#ComOne_MT_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                        }
                                    }
                                    mudaCom++;
                                }   
                                
                                else if(mudaCom == 1){
                                    $("#MT_numComanda" + mudaCom).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    mudaPosProd += 13;
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        $("#ComTwo_MT_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                    }
                                    mudaCom++;
                                }
                                else if(mudaCom == 2){
                                    $("#MT_numComanda" + mudaCom).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    mudaPosProd += 13;
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        $("#ComThree_MT_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                    }
                                    mudaCom++;
                                }
                                else if(mudaCom == 3){
                                    $("#MT_numComanda" + mudaCom).css({"position":"absolute","top":"0%","left":"0%","padding-top": 13 + mudaPosProd + "%","padding-left":"5%","padding-bottom":"0%","padding-right":"0%"});
                                    mudaPosProd += 13;
                                    for(let j = 0; j < info[i].infos.nome.length; j++){
                                        mudaPosProd += 9;
                                        $("#ComFour_MT_Prod" + j).css({"position":"absolute","top":"0%","left":"0%","padding-top": mudaPosProd + "%","padding-left":"10%","padding-bottom":"0%","padding-right":"0%"});
                                    }
                                    mudaCom++;
                                }
                            }  
                        }
                    }

                    else{
                        $(".comandaAfter2").css({"height":"0%"});
                        $("#icon2").removeClass("iconGiraAfter").addClass("iconGira");
                        $("#comd2").removeClass("comandaAfter2").addClass("comanda2");
                        $("#bFinalizar2").css({"position":"absolute","top":"0%","margin-top":"0%","transition":"0.4s","visibility":"hidden"});
                    }

                    a++
                });

            });

/*

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

*/
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

