window.onload = function(){

  function checkConnection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[connection.NONE]= 1;

    if(states[networkState] == 1){
      return false;
    }else{
      return true;
    }
  }

}

const cadastrar = document.querySelector("#cadastrar");
const nome = document.querySelector("#nome");
const curso = document.querySelector("#curso");
const buscar = document.querySelector("#buscar");
const id = document.querySelector("#id");
const alterar = document.querySelector("#alterar");
const deletar = document.querySelector("#deletar");
const buscarCodigo = document.querySelector("#buscarCodigo");

function retornoErro(buttonIndex){
  if(buttonIndex==2){
    navigator.app.exitApp();
  }else{
    return false;
  }
}

function alertaGeral(mensagem){
  navigator.notification.confirm(
    mensagem,
    retornoErro,
    'Erro de Conexão',
    ['Ficar','Sair']
  );
}

cadastrar.addEventListener("click", function(){
  if(checkConnection()){
    let formdata = new Formdata();
    
  }
})