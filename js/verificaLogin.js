$(new Document).ready(function(){
    $("#bEntrar").click(function(){
        confirma();
        var funcao = verificaUsuario();
        console.log(funcao);
    });
});
function updateAtividade(id, func){
    var idFunc = id;
    var funcao = func;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/mudaAtividade.php",
        data:
    {  
        ajax_id : idFunc,
        ajax_func: funcao
    },
        success: function(resultado){
            console.log(resultado);
        },
        error: function(resultado){
            console.log("Nao funcionou");
        }
    });
}
async function verificaUsuario(){
    var funcaoAtual = "Teste";
    await $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/verificaFuncao.php",
        data:
    {  
        ajax_email: $("#iEmail").val()
    },
    success: function(funcao){
        console.log("Achou a funcao");
        funcaoAtual = funcao[0].funcao;
        return funcaoAtual;
    },
    error: function(){
        console.log("Nao achou a funcao");
        return false;
    }
    });
    return funcaoAtual;
}
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
                    console.log("OK");
                }
            }
            $mensagem = "<div id='mensagens'>Login não autenticado</div>";
            $("#mensgErro").html($mensagem);
        },
        error: function(info){
            console.log("Deu ruim");    
        }
    });
}
