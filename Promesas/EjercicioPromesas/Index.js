const rp = require("request-promise");

rp("http://google.com")
.then(function(html){
  console.log("Termine la petición de google");
}).catch(function(err){
  console.log(err);
})

// Promise:
// fullfiled (completado)
// rejected (no se cumplio)
// pending (no se cumplio)
// setled (Termino con exito)
