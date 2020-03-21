for (let i = 0; i <= 10; i++) {
  if (i >=5) break; // termina el ciclo
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) continue; // imprime los impares
  console.log(i);
}

while (prompt()) { // crea un cuadro de dialogo
  console.log("Presiona cancelar para terminar el ciclo o deja el campo vacio");
}

let i = 1;
do {
  i++;
  console.log(i);
} while (i <= 10) 
