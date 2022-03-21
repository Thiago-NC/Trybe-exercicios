//criar uma função
//retorno { nomeCompleto, email }
//Passar minha função como parâmetro de newEmployees
//minha função recebe nome completo do funcionário
//return nome_da_pessoa@trybe.com

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

function nameEmail(nomeCompleto){
  email = `${nomeCompleto.replace(/ /g,'')}@trybe.com` 
  return { nomeCompleto, email }
};

console.log(newEmployees(nameEmail))