//4! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = ?

//entrada
let numero = 10;
let resultado = 1;
//processo
//contagem de 9 a 1
  for (let index = numero; index >= 1; index -= 1){ 
    //resultado = resultado * index
    resultado = index * resultado
     
  }
//saida
//resultado faltorial de 10
console.log(resultado)
  

