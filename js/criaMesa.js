$(new Document).ready(function(){

    $("#confQnt").click(function(){
        criaComandas();
    });

});
function criaComandas(){
    let quantidade = $("#quantidade").val();
    var inputs = "";
    inputs += "<input type='text' name='nome' id='nomeMesa' placeholder='Indentificador da mesa'>";
    inputs += "<button id='cadastraMesa'>Cadastrar mesa</button>";
    inputs += "<button id='enviaPedidos'>Enviar pedidos</button>";
    for(let i = 0; i < parseInt(quantidade); i++){
        inputs += "<input type='number' id='comanda"+ i + "'placeholder='Digite a comanda: '>";
    }
    inputs += "<div id='mensagem'></div>";
    $("#conteudo").html(inputs);
    $(new Document).ready(function(){
        $("#cadastraMesa").click(function(){
            criaMesa();
        });
    });
}
function criaMesa(){
    var nomeMesa = $("#nomeMesa").val();
    let comanda = [];
    let quantidade = $("#quantidade").val();
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
                $("#mensagem").text(info);
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