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
                conteudo += "<div>" + info[i].nomeMesa + "</div>";
                conteudo += "<div>" + info[i].comanda + "</div>";
                for(let j = 0; j < info[i].infos.nome.length; j++){
                    conteudo += "<div>" + info[i].infos.nome[j] + "</div>";
                    conteudo += "<div>" + info[i].infos.quantidade[j] + "</div>";
                }
            }
            $("#mesas").html(conteudo);
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