const request = require('request');

request('http://google.com', function(){
  console.log("Termine la petición de google");
})

console.log("Yo voy después en el código, de la petición a google");
