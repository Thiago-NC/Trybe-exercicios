const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
/* 
=====================================================================
1.Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
=====================================================================*/
  function authorBornIn1947(birthYear) {
     const teste = books.find((item) => item.author.birthYear === birthYear)
     return teste.author.name
  }
  
// const teste = books.find((item) => item.author.birthYear === 1947
// );
  // console.log(authorBornIn1947(1890));
  
/* 
=====================================================================
2 - Retorne o nome do livro de menor nome. 
=====================================================================
*/
const smallestName = () => {
  const juntar = []
  
  books.forEach((item) => {
    const allNames = item.name.length
    juntar.push(allNames)
  })

  const min = Math.min(...juntar);
  return min
}
// console.log(smallestName());

/* 
=====================================================================
3- Encontre o primeiro livro cujo nome possui 26 caracteres.
=====================================================================
*/

const findLetterNumber = () => {
  
  // let counter = []
  books.find((index) => {
    const allNames = index.name.length
    // console.log(allNames)
    if (allNames === 26) {
      console.log(allNames)
      index.name
    }
  });
}
  // if (countString === 26){
    //   return counter.push
    // }
  // console.log(counter)
    
console.log(findLetterNumber())
