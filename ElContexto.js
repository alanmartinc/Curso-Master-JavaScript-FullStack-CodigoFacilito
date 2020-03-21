console.log(this);
// this igual a objeto global

let objeto = {
  demo: function () {
    console.log(this);
  }
}

objeto.demo();
// this igual a objeto local

let executor = {
  funcion: null,
  execute: function(f) {
    f();
    this.funcion = f;
    this.funcion();
  }
}

executor.execute(objeto.demo);

let usuario = {
  nombre: "Alan",
  apellido: "Cabot",
  nombreCompleto: function() {
    console.log(this.nombre + " " + this.apellido);
  }
}

usuario.nombreCompleto();
