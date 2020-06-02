$(new Document).ready(function(){
    $("#titlePag").removeClass("bTitleAfter").addClass("bTitle");
    $("#titlePag2").removeClass("bTitle").addClass("bTitleAfter");
    pegaNome();
    listaMesasEnvio();

    $("#titlePag").click(function(){
        window.location.href = "../pages/telaGarcom.html";
    });

    $("#logout").click(() =>{
        tornaInativo();
        window.location.href = "../pages/login.html";
   });

});

function listaMesasEnvio(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/listaMesaEnvio.php",
        success : function(info){   
            let mesa = "";
            for(let i = 0; i < info.length; i++){
                mesa += "<div class='divMesas' id='lista"+ i +"'>" + "</div>";
            }

            $("#mesas").html(mesa);

            let conteudo = "";
            var somaPosit = 0;
            for(let i = 0; i < info.length; i++){
                conteudo += "<div class='nomeMesas' id='andamento" + i + "'>" + info[i].nome + "</div>";
                conteudo += "<button class='butEnviar' id='bMesa" + i + "'> Enviar </button>";

                $("#lista" + i).html(conteudo);

                if(i < 4){
                    $("#lista" + i).css({"position":"absolute","top":"25%","left": 15 + somaPosit + "%","transform":"translateX(-50%)"});
                    somaPosit += 19;
                }
            }

            $(new Document).ready(function(){
                $("#bMesa0").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("0");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                });
            
                $("#bMesa1").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("1");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa2").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("2");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa3").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("3");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa4").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("4");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa5").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("5");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa6").click(function(){
                   $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("6");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa7").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("7");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa8").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("8");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa9").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("9");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa10").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("10");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bMesa11").click(function(){
                    $("#confirma").removeClass("divConf").addClass("divConfAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");
                    
                    $("#bConfirma").click(function(){
                        alteraTermino("11");

                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    
                    $("#bNega").click(function(){
                        console.log("funcionou");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#confirma").removeClass("divConfAfter").addClass("divConf");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
                
            });
        },
        error : function(){
            console.log("Não conseguiu listar as mesas");
        }
    });
}

function alteraTermino(position){
    let nomeMesa = $("div#andamento"+position).text(); 
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/alteraTermino.php",
        data : {
            ajax_nome : nomeMesa
        },
        success : (info)=>{
            console.log(info);
        },
        error : ()=>{
            console.log("Não foi possível alterar a mesa")
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
