class Usuario {
  constructor(nombre) { this._name = nombre; }

  get name() {
    return this._name.charAt(0).toUpperCase() + this._name.slice(1);
  }

  set name(nombre) {
    this._name = nombre;
  }
}

let user = new Usuario("Alan");

user.name = "Lucas";

console.log(user.name);
