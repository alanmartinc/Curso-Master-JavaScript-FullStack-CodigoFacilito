let nombre = "Alan";

function decir_hola() {
  // Scope local 1
  console.log("Hola" + " " + nombre);
}

decir_hola();

function switch_nombres() {
  // Scope local 2
  var nombre = "Lucas";
  console.log(nombre);
}

switch_nombres();
console.log(nombre);

function hola() {
  nombre = "Mauricio";
}

hola();
console.log(nombre);
