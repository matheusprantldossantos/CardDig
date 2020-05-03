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
            if(usuario == "" || senha == ""){
                $mensagem = "<div id='mensagens'> Setores não preenchidos</div>";
                $("#mensagens").html($mensagem);
            }
            for(var i = 0; i < info.length; i++){
                if(info[i].senha == senha && info[i].email == usuario){
                    erro = "Ok";
                    window.location.href = "../pages/telaAlteraItens.html";
                }
            }
            $mensagem = "<div id='mensagens'> Login não aotenticado </div>";
            $("#mensagens").html($mensagem);
        }
    });
}