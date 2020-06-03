$(document).ready(function(){
    listaProm();
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
function listaProm(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/promocoesListar.php",
        success : (info) =>{
            console.log(info);

            let conteudo = "";

            for(let i = 0; i < info.length; i++){
                conteudo += "<div class='divProdpromo' id='elemento" + i + "'>";
                conteudo += "<div class='styPorc' id='porcentagem'>" + info[i].porcentagem + "% OFF -" +"</div>";
                conteudo += "<div class='styNome' id='nomeProduto'>" + info[i].nome + "</div>";
                conteudo += "<div class='styPreco' id='precoProduto'>" + "R$ " + info[i].valorAtual + "</div>";
                conteudo += "<button class='bContador' id='bDiminuir'>" + "<i class='fas fa-minus' araia-hidden='true'></i>" + "</button>";
                conteudo += "<div id='number" + i + "'>0</div>";
                conteudo += "<button class='bContador' id='bAumentar'>" + "<i class='fas fa-plus' araia-hidden='true'></i>" + "</button>";
                conteudo += "<button class='buttonAdd' id='bAdicionar" + i + "'>Adicionar</button>";
                conteudo += "</div>";
            }
            $("#divPromo").html(conteudo);

            var a = 0;
            var aumetLEFT = 0;
            var aumentaTOP = 0;
            for(let i = 0; i < info.length; i++){
                if(a % 2 == 0){
                    $("#elemento" + i).css({"position":"absolute","top": 25 + aumentaTOP + "%","left": 5 + aumetLEFT + "%"});
                    aumetLEFT += 45;
                }
                else{
                    $("#elemento" + i).css({"position":"absolute","top": 25 + aumentaTOP + "%","left": 5 + aumetLEFT + "%"});
                    aumetLEFT = 0;
                    aumentaTOP += 40;
                }
                $("#bAdicionar" + i).css({"position":"absolute","top": "75%","left": "55%"});
                $("#number" + i).css({"position":"absolute","top": "76%","left": "18%","color":"#d6d6d6","font-size":"25px"});
                a++;
            }


            $(new Document).ready(function(){
                $("#bAdicionar0").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido(info[0].nome, "0");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionar1").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido(info[1].nome, "1");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });

                $("#bAdicionar2").click(function(){
                    $("#janelaConfirma").removeClass("styConfirmar").addClass("styConfirmarAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        criaPedido(info[2].nome, "2");
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaConfirma").removeClass("styConfirmarAfter").addClass("styConfirmar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
                
            
            });
        },
        error : () =>{
            console.log("Não foi possível listar");
        }
    });
    
}
function criaPedido(nome, position){
    let quantidadeAtual = $("div#number"+position).text();
    let nomeAtual = nome;
$.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/criaPedidos.php",
    data:
    {  
        ajax_quantidade : quantidadeAtual,
        ajax_name : nomeAtual
    },
    success : function(info){
        console.log("olá mundo");
    },
    error: function(info){
        console.log("tchau mundo");
    }
    });
}