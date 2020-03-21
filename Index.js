const request = require('request');

request('http://google.com', function(){
  console.log("Termine la petición de google");
})
