let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

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
  let numeroAleatorioDigito = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroAleatorioDigito);
  // si ya sorteamos todos los numeros
  if (numerosSorteados.length == numeroMaximo) {
    aparecerTexto("p", "Ya se ocuparon todos los numeros");
  } else {
    if (numerosSorteados.includes(numeroAleatorioDigito)) {
      return numeroRandom();
    } else {
      numerosSorteados.push(numeroAleatorioDigito);
      console.log(numerosSorteados);

      return numeroAleatorioDigito;
    }
  }
}

function condicionesIniciales() {
  // volver a poner el mensasje inicial
  aparecerTexto("h1", "Juego del numero secreto");
  aparecerTexto("p", "Indica un numero del 1 al 10");
  // numero random set
  numeroSecreto = numeroRandom();
  // reniiciar el contador
  intentos = 1;
}
function reiniciarJuego() {
  // limpiar el  input
  removerNumero();
  condicionesIniciales();
  // desabilitar el boton
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales();
