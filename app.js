// function asignarTextoElemento(elemento, texto) {
//   let elementoHtml = document.querySelector(elemento);
//   elementoHtml.innerHtml = texto;
// }

// asignarTextoElemento("h1", "Juego del numero secreto");

// asignarTextoElemento("p", "Elige el numero del 1 al 10");

let numeroSecreto = numeroRandom();
console.log(numeroSecreto);

function aparecerTexto(header, texto) {
  let general = document.querySelector(header);
  general.innerHTML = texto;
  return;
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(
    document.getElementById("valorUsuarioId").value
  );
 if(numeroDeUsuario===numeroSecreto){
aparecerTexto("p", "acertaste");
 }else{
  if(numeroDeUsuario>numeroSecreto){
    aparecerTexto("p", "el numero es menor");
  }else{
  aparecerTexto("p", "el numero es mayor");
 }
}
  return;
}
function numeroRandom() {
  let numeroAleatorioDigito = Math.floor(Math.random() * 10) + 1;
  return numeroAleatorioDigito;
}
aparecerTexto("h1", "Juego del numero secreto");
aparecerTexto("p", "Indica un numero del 1 al 10");
 

