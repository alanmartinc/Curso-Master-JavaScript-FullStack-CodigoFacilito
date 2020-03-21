function executor(funcion) {
  funcion();
}

function decirHola() {
  console.log("Hola");
}

executor(decirHola);
