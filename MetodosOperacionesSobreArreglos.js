let arreglo = ["Ruby", "Python", "Java", "JavaScript"];

// Eliminar Ruby
arreglo = arreglo.filter(function(el){
  return el != "Ruby";
});

// Eliminar Phyton
arreglo = arreglo.filter((el)=> el != "Python");

arreglo.forEach(function(elemento){
  console.log(elemento);
});

let numeros1 = [2,35,6,20];
let cuadrados = numeros1.map(numero => numero * numero);
console.log(cuadrados);

let numeros2 = ["2","35","6","20"];
numeros = numeros2.map(numero => parseInt(numero));
console.log(numeros2);
