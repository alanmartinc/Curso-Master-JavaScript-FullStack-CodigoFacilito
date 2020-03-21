Async function suma(valor1,valor2) {
  return valor1 + valor2;
}

Async function calcular() {
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,400,5)
  });
}
