let tutor = {
  nombre: "Alan",
  apellido: "Cabot",
  nombreCompleto: function() {
    setTimeout(()=> {
      console.log(this.nombre + " " + this.apellido)
    }, 1000);
  }
}

tutor.nombreCompleto();
