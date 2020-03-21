function mayor_de_edad(edad) {
  if (edad >= 18) {
    let resultado;
    resultado = "Eres mayor de edad";
  } else {
    resultado = "Eres menor de edad";
  }
  console.log(resultado);
}

mayor_de_edad();

// Usar const, si queremos declarar una constante.
// Usar var, si queremos que la variable se añada al scope global o local de la función.
// Usar let, por defecto.
