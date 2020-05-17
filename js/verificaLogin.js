$(new Document).ready(function(){
    $("#bEntrar").click(function(){
        confirma();
    });
});
function confirma(){
    var usuario = $("#iEmail").val();
    var senha = $("#iSenha").val();
    
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/listaCadastrados.php",
        success : function(info){
            console.log("chegou ate aqui");
            var erro = "cadastro incorreto";
            if(usuario == " " || senha == " "){
                $mensagem = "<div id='mensagens'> Campos não preenchidos </div>";
                $("#mensgErro").html($mensagem);
            }
            for(var i = 0; i < info.length; i++){
                if(info[i].senha == senha && info[i].email == usuario){
                    erro = "Ok";
                    window.location.href = "../pages/telaPrincFuncionarios.html";
                }
            }
            $mensagem = "<div id='mensagens'>Login não autenticado</div>";
            $("#mensgErro").html($mensagem);
        }
    });
}