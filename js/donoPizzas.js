$(document).ready(function(){
    fListarCategoria();

    $("#bAdicionar").click(function(){
        window.location.href = "../pages/cadastraProduto.php";
    });
});

function fListarCategoria(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/pizzaListar.php",
        success : function(info){   
            console.log("funfou");
            var conteudo = "";

            conteudo += "<div id='titleCateg'>" + "PIZZAS" + "</div>";

            for(var i = 0; i < info.length; i++){
                conteudo += "<div class='produtos' id='prodNom"+ i +"'>" + info[i].nome + "</div>";
                conteudo += "<div class='produtos' id='prodPre"+ i +"'>" + "R$ " + info[i].preco + "</div>";
                conteudo += "<div class='produtos' id='prodTip"+ i +"'>" + info[i].tipo_categoria + "</div>";
                conteudo += "<button class='buttEdit' id='prodEdit"+ i +"'>" + "<i class='far fa-edit'></i>" + "</button>";
                conteudo += "<button class='buttExc' id='prodExc"+ i +"'>" + "<i class='far fa-trash-alt'></i>" + "</button>";
                conteudo += "<div class='linhaProd' id='line"+ i +"'>" + "</div>";

                if(i == 0){
                    $("#bAdicionar").css({"position":"absolute","top":"45%","left":"5%","visibility":"visible"});
                }

                else if(i == 1){
                    $("#bAdicionar").css({"position":"absolute","top":"56.5%","left":"5%","visibility":"visible"});
                }

                else if(i == 2){
                    $("#bAdicionar").css({"position":"absolute","top":"68%","left":"5%","visibility":"visible"});
                }

                else if(i == 3){
                    $("#bAdicionar").css({"position":"absolute","top":"79.5%","left":"5%","visibility":"visible"});
                }

                else if(i == 4){
                    $("#bAdicionar").css({"position":"absolute","top":"91%","left":"5%","visibility":"visible"});
                }

                else if(i == 5){
                    $("#bAdicionar").css({"position":"absolute","top":"102.5%","left":"5%","visibility":"visible"});
                }

                else if(i == 6){
                    $("#bAdicionar").css({"position":"absolute","top":"114%","left":"5%","visibility":"visible"});
                }

                else if(i == 7){
                    $("#bAdicionar").css({"position":"absolute","top":"125.5%","left":"5%","visibility":"visible"});
                }

                else if(i == 8){
                    $("#bAdicionar").css({"position":"absolute","top":"137%","left":"5%","visibility":"visible"});
                }

                else if(i == 9){
                    $("#bAdicionar").css({"position":"absolute","top":"148.5%","left":"5%","visibility":"visible"});
                }
            }
            
            $("#listar").html(conteudo);

            // Botões para Editar
            $(new Document).ready(function(){
                $("#prodEdit0").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[0].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[0].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        $("#bSalvar").off("click");
                        $("#bprodEdit0").off("click");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodEdit1").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[1].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[1].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodEdit2").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[2].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[2].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodEdit3").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[3].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[3].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodEdit4").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[4].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[4].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodEdit5").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[5].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[5].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodEdit6").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[6].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[6].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodEdit7").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[7].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[7].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodEdit8").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[8].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[8].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodEdit9").click(function(){
                    $("#janelaEdit").toggleClass("pagEditarAfter");
                    $("#container").toggleClass("styleContAfter");
                    listarInfo(info[9].nome);

                    $("#bSalvar").click(function(){
                        var nomeEdit = $("#nomeProduto").val();
                        var precoEdit = $("#precoProduto").val();
                        var dispEdit = $("#dispProduto").val();
                        var tipoEdit = $("#tipoProduto").val();
                        editarProduto(info[9].idproduto,nomeEdit,precoEdit,dispEdit,tipoEdit);
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bFechar").click(function(){
                        $("#janelaEdit").removeClass("pagEditarAfter").addClass("pagEditar");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });


            // Botões para Excluir
            $(new Document).ready(function(){
                $("#prodExc0").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[0].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                });
            });
            
            $(new Document).ready(function(){
                $("#prodExc1").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[1].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodExc2").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[2].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodExc3").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[3].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodExc4").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[4].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodExc5").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[5].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodExc6").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[6].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodExc7").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[7].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodExc8").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[8].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });

            $(new Document).ready(function(){
                $("#prodExc9").click(function(){
                    $("#janelaExcluir").removeClass("pagExcluir").addClass("pagExcluirAfter");
                    $("#container").removeClass("styleCont").addClass("styleContAfter");

                    $("#bConfirmar").click(function(){
                        excluirProduto(info[9].nome);
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });

                    $("#bCancelar").click(function(){
                        $("#janelaExcluir").removeClass("pagExcluirAfter").addClass("pagExcluir");
                        $("#container").removeClass("styleContAfter").addClass("styleCont");
                        setTimeout(function() {
                            location.reload(true);
                        }, 350);
                    });
                });
            });
            
        },
        error : function(){
            console.log("não funfou");

            var conteudo = "";

            conteudo += "<div id='titleCateg'>" + "PIZZAS" + "</div>";
            $("#listar").html(conteudo);
        }
    });
}

function excluirProduto(nome){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/produtoExcluir.php",
        data:{
            ajax_nome : nome
        },
        success : function(retorno){ 
            console.log(retorno)
        },
        error : function(){
            console.log("n deu")
        }
    });
}

function listarInfo(nome){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/produtoEspListar.php",
        data:{
            ajax_nome: nome
        },
        success : function(info){
            console.log("funcionou")
            $("#nomeProduto").val(info.nome);
            $("#precoProduto").val(info.preco);
            $("#dispProduto").val(info.disponibilidade);
            $("#tipoProduto").val(info.tipo_categoria);
        },
        error : function(){
            console.log("não funcionou")
        }
    });
}

function editarProduto(id, nome, preco, disp, tipo){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/produtoEditar.php",
        data:{
            ajax_idproduto: id,
            ajax_nome: nome,
            ajax_preco: preco,
            ajax_disp: disp,
            ajax_tipo: tipo
        },
        success : function(retorno){
            console.log(retorno);
        }

    });
}
