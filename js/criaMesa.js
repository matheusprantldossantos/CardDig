$(new Document).ready(function(){

    $("#cadastraMesa").click(function(){
        criaMesa();
    });

});
function criaMesa(){
    var nomeMesa = $("#nomeMesa").val();
    let comanda = $("#comanda").val();
    let quantidade = $("#quantidade").val();
    if(nomeMesa != "" && comanda != "" && quantidade != ""){
        let n = parseInt(quantidade);
        for(var i = 0;  i < parseInt(quantidade); i++){
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/iniciaMesa.php",
            data: {
                ajax_nomeMesa: nomeMesa,
                ajax_comanda: comanda,
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