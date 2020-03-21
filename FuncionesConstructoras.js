function Curso(titulo) {
  this.titulo = titulo;

  this.inscribir = function(usuario) {
    console.log(usuario + " se ha inscripto");
  }
}

let cursoJavaScript = new Curso("Curso Profesional De JavaScript");
let cursoRuby = new Curso("Curso de Ruby");

cursoJavaScript.inscribir("Alan");

console.log(cursoRuby.titulo);
console.log(cursoJavaScript.titulo);
