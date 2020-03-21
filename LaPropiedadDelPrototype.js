function User() {}

let user = new User();

User.prototype.saludar = function() {
  console.log("Hola");
}

user.saludar();

function Admin() {}

Admin.prototype = new User();

let alan = new Admin();

alan.saludar();

console.log(user.__proto__);
console.log(User.prototype);
