
/*entrada
    array
*/

/*processo
    contador para o array
    codigo para maior palavra
    codigo para menor palavra
    variavel para salvar os dois valores
*/

/*saida
    //maior palavra
    //menor palavra
*/

let array = ['java','javascript','python', 'html', 'css']

let menorArray = array [0];
let maiorArray = array[0];

for (let i = 0; i < array.length; i+=1){
  if (array[i].length < menorArray.length)
  menorArray = array[i]
}


for (let i2 = 0; i2 < array.length; i2+=1){
  if (array[i2].length > maiorArray.length) 
  maiorArray = array[i2]     
  }
  console.log(menorArray)
  console.log(maiorArray)



/* for (let i = 0; i < array.length; i+=1) {
    console.log (array[i])
}
   */
  //console.log ()

  // menorArray = array[i] <= array
  

          
//console.log(array[0])

/* const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...arr)
console.log(min) */