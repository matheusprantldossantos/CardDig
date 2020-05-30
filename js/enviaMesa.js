$(new Document).ready(function(){
    $("#titlePag").removeClass("bTitleAfter").addClass("bTitle");
    $("#titlePag2").removeClass("bTitle").addClass("bTitleAfter");
    pegaNome();
    listaMesasEnvio();

    $("#titlePag").click(function(){
        window.location.href = "../pages/telaGarcom.html";
    });
});
function listaMesasEnvio(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/listaMesaEnvio.php",
        success : function(info){   
            let conteudo = "";
            for(let i = 0; i < info.length; i++){
                conteudo += "<div id='andamento" + i + "'>" + info[i].nome + "</div>";
                conteudo += "<button id='bMesa" + i + "'> </button>";
            }
            $("#lista").html(conteudo);
            $(new Document).ready(function(){
                $("#bMesa0").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto0'> Você quer enviar essa mesa para a cozinha? </div>";
                    conteudo += "<button id='bConfirma0'> Sim </button>";
                    conteudo += "<button id='bNega0'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma0").click(function(){
                            alteraTermino("0");
                        });
                    });
                });
                $("#bMesa1").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto1'> Você quer enviar essa mesa para a cozinha? </div>";
                    conteudo += "<button id='bConfirma1'> Sim </button>";
                    conteudo += "<button id='bNega1'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma1").click(function(){
                            alteraTermino("1");
                        });
                    });
                });
                $("#bMesa2").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto2'> Você quer enviar essa mesa para a cozinha? </div>";
                    conteudo += "<button id='bConfirma2'> Sim </button>";
                    conteudo += "<button id='bNega2'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma2").click(function(){
                            alteraTermino("2");
                        });
                    });
                });
                $("#bMesa3").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto3'> Você quer enviar essa mesa para a cozinha? </div>";
                    conteudo += "<button id='bConfirma3'> Sim </button>";
                    conteudo += "<button id='bNega3'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma3").click(function(){
                            alteraTermino("3");
                        });
                    });
                });
                $("#bMesa4").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto4'> Você quer enviar essa mesa para a cozinha? </div>";
                    conteudo += "<button id='bConfirma4'> Sim </button>";
                    conteudo += "<button id='bNega4'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma4").click(function(){
                            alteraTermino("4");
                        });
                    });
                });
                $("#bMesa5").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto5'> Você quer enviar essa mesa para a cozinha? </div>";
                    conteudo += "<button id='bConfirma5'> Sim </button>";
                    conteudo += "<button id='bNega5'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma5").click(function(){
                            alteraTermino("5");
                        });
                    });
                });
                $("#bMesa6").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto6'> Você quer enviar essa mesa para a cozinha? </div>";
                    conteudo += "<button id='bConfirma6'> Sim </button>";
                    conteudo += "<button id='bNega6'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma6").click(function(){
                            alteraTermino("6");
                        });
                    });
                });
                $("#bMesa7").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto7'> Você quer enviar essa mesa para a cozinha? </div>";
                    conteudo += "<button id='bConfirma7'> Sim </button>";
                    conteudo += "<button id='bNega7'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma7").click(function(){
                            alteraTermino("7");
                        });
                    });
                });
                $("#bMesa8").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto8'> Você quer enviar essa mesa para a cozinha? </div>";
                    conteudo += "<button id='bConfirma8'> Sim </button>";
                    conteudo += "<button id='bNega8'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma8").click(function(){
                            alteraTermino("8");
                        });
                    });
                });
                $("#bMesa9").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto9'> Você quer enviar essa mesa para a cozinha? </div>"
                    conteudo += "<button id='bConfirma9'> Sim </button>";
                    conteudo += "<button id='bNega9'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma9").click(function(){
                            alteraTermino("9")
                        });
                    });
                });
                $("#bMesa10").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto10'> Você quer enviar essa mesa para a cozinha? </div>"
                    conteudo += "<button id='bConfirma10'> Sim </button>";
                    conteudo += "<button id='bNega10'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma10").click(function(){
                            alteraTermino("10")
                        });
                    });
                });
                $("#bMesa11").click(function(){
                    let conteudo = "";
                    conteudo += "<div id='texto11'> Você quer enviar essa mesa para a cozinha? </div>"
                    conteudo += "<button id='bConfirma11'> Sim </button>";
                    conteudo += "<button id='bNega11'> Não </button>";
                    $("#confirma").html(conteudo);
                    $(new Document).ready(function(){
                        $("#bConfirma11").click(function(){
                            alteraTermino("11")
                        });
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
