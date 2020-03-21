// Ejemplo con Call
function executor1(funcion) {
  funcion.call(tutor1);
}

let tutor1 = {
  nombre: "Alan",
  apellido: "Cabot",
  nombreCompleto: function() {
      console.log(this.nombre + " " + this.apellido);
  }
}

executor1(tutor1.nombreCompleto);

// Ejemplo con Apply
function saluda(nombre) { console.log("Hola " + nombre); }
saluda.apply(window, ["Alan"]);

// Ejemplo con Bind
function executor2(funcion) {
  funcion();
}

let tutor2 = {
  nombre: "Alan",
  apellido: "Cabot",
  nombreCompleto: function() {
      console.log(this.nombre + " " + this.apellido);
  }
}

executor2(tutor2.nombreCompleto.bind(tutor2));
