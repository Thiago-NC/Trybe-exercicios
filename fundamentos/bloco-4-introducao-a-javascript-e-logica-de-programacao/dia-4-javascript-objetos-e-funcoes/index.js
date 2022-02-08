let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

/* //1.
console.log ('Bem-vinda, ' + info.personagem) */

//2.
info.recorrente = 'Sim';
//console.log(info.recorrente)

/* //3.
for (let index in info) {
    console.log(index)
} */

//4.
//for (let i in info){
    //console.log(info[i])
//} 

/* //5.
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
};
  

for (let i in info){
 for(let i2 in info2){
    if (i === i2) {
     console.log(info[i]+ ' e ' +info2[i2])
    }      
  }
} */

//6.

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
     
console.log('O livro favorito de ' + leitor.nome, leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0])
  
  