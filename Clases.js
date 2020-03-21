class Curso { // Declaración de clases
  constructor(titulo) {
    this.titulo = titulo;
  }

  inscribir(usuario) {
    console.log(usuario + " se ha inscripto");
  }
}

let javaScriptCurso = new Curso("Curso Profesional De JavaScript");
console.log(javaScriptCurso.titulo);
javaScriptCurso.inscribir("Alan");

// let Curso = class {} // Expresiones de clases
// let Usuario = class Usuario{} // Expresiones de clases
