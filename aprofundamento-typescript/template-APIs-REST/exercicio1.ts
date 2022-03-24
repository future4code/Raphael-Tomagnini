// Exercício 1

// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?

const minhaString = (name: string)
:{
    name: string

} => {

    const usuario = {name}

    return usuario;
}

console.log(minhaString("Raphael"))


// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? 
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?


const novoUser = (usuario : string | number, senha: number)

:{
    usuario: string | number,
    senha: number

} => {

    const user = {usuario, senha}

    return user
}   

console.log(novoUser("raphael", 12345))

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

//`nome`, que é uma string;

//`idade`, que é um número;

//`corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {

    nome: string,
    idade: number,
    corFavorita: string
}

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores
// do arco-íris. Utilize um enum para isso.

enum CoresArcoIris {
    
    AZUL = "Azul",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    ANIL = "Anil",
    VIOLETA = "Violeta"

}

console.log(CoresArcoIris.AZUL)