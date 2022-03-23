//fazer HOF
//return resultado sorteio
//HOF irá gerar numero aleatorio entre 1 e 5
//parametro é o numero apostado do usuario
//parametro uma função que checa o numero é igual ao sorteado
//retorno da hof deve ser uma string '"Tente novamente" ou "Parabéns você ganhou"'



const gameNumber = 3;

const randomNumber = () => {
    return Math.floor(Math.random(1,5)*(5+1))
};

const teste = randomNumber()

const checkNumber = (gameNumber) => {
    if (gameNumber === teste) {
        return 'Parabéns você ganhou'
        
    } 
    else if (gameNumber !== teste) {
        return `Tente novamente`
    }
};
