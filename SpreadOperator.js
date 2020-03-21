let numerosUno = [2,3,5];

function sumar(n1,n2,n3) {
  return n1 + n2 + n3;
}

let resultado = sumar.apply(this, numerosUno);
console.log(resultado);

/* let resultado = sumar(...numerosUno);
console.log(resultado); */

let numerosDos = [4,6,10];
let otro_arreglo = ["Hola", "Mundo"];
console.log([2,...otro_arreglo,3]);

let objetoUno = {
  clave1: 3
}

let objetoDos = {
  clave2: 4
}

console.log(objetoUno);

console.log(objetoDos);

let newObject = {
  ...objetoUno,
  ...objetoDos
}

console.log(newObject);
