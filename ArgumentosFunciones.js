// Argumentos
// Parámetros

function cuadrado(numero) {
  return numero * numero;
}

console.log(cuadrado());

function hola(apellido, nombre = "") {}

hola("Cabot");

function sumaTodos() {
  return arguments[0] + arguments[1];
}

console.log(sumaTodos(1,2));
