function saludar() {
  console.log("Hola Alan");
}

saludar();

function cuadrado(numero) {
  return numero * numero;
  console.log("Esto nunca se ejecutara");
}

let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);
