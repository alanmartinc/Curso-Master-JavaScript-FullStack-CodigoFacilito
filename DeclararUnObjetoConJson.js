// JSON
let curso = {
  titulo: "Curso Profesional De JavaScript",
  duracion: 2.2,
  formato: "video",
  bloque: ["Introduccion", "Funciones"],
  inscribir: function(usuario){
    console.log(usuario + " ahora esta inscripto");
  }
}

console.log(curso["titulo"]);

curso.inscribir("Alan");

curso.titulo = "Curso: declarar un objeto con JSON";
console.log(curso.titulo);
