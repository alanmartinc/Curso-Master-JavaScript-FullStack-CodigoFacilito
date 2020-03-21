function saludaATodos() {
  for(nombre of arguments) {
    console.log("Hola "  + nombre);
  }
}

saludaATodos("Alan", "CodigoFacilito", "Alumnos")

let usuario = {
  nombre: "Alan",
  edad: 22
}

for(propiedad in usuario) {
  console.log(propiedad);
}
