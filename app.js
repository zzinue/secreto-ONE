// function asignarTextoElemento(elemento, texto) {
//   let elementoHtml = document.querySelector(elemento);
//   elementoHtml.innerHtml = texto;
// }

// asignarTextoElemento("h1", "Juego del numero secreto");

// asignarTextoElemento("p", "Elige el numero del 1 al 10");

let numeroSecreto = numeroRandom();
console.log(numeroSecreto);
let intentos = 1;

function aparecerTexto(header, texto) {
  let general = document.querySelector(header);
  general.innerHTML = texto;
  return;
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(
    document.getElementById("valorUsuarioId").value
  );
  if (numeroDeUsuario === numeroSecreto) {
    aparecerTexto(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    // habilitar boton de nuevo juego
    habilitarBoton();
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      aparecerTexto("p", "el numero es menor");
    } else {
      aparecerTexto("p", "el numero es mayor");
    }
    intentos++;
    // limpiar la caja
    removerNumero();
  }
  return;
}

function habilitarBoton() {
  document.getElementById("reiniciar").removeAttribute("disabled");
}

function removerNumero() {
  document.querySelector("#valorUsuarioId").value = "";
}

function numeroRandom() {
  let numeroAleatorioDigito = Math.floor(Math.random() * 10) + 1;
  return numeroAleatorioDigito;
}
aparecerTexto("h1", "Juego del numero secreto");
aparecerTexto("p", "Indica un numero del 1 al 10");
