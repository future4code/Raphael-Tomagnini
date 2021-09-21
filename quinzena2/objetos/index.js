//Exercício de Interpretaçãod e código

//Exercício 1

//const filme = {
//	nome: "Auto da Compadecida", 
//	ano: 2000, 
//	elenco: [
//		
//		"Virginia Cavendish"
//		], 
//	transmissoesHoje: [
//		{canal: "Telecine", horario: "21h"}, 
//		{canal: "Canal Brasil", horario: "19h"}, 
//		{canal: "Globo", horario: "14h"}
//		]
//}

//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
//console.log(filme.transmissoesHoje[2])

//Resposta:

// No primeiro console.log retornará a primeira posição do elenco = Matheus Nachtergaele
// No segundo console.log retornará a quantidade de elementos menos 1 posição = "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// No terceiro console.log retornará a posição em que se encontra a transmissão do canal = "Globo", horario: "14h"


// Exercício 2


//const cachorro = {
//	nome: "Juca", 
//	idade: 3, 
//	raca: "SRD"
//}

//const gato = {...cachorro, nome: "Juba"}

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)

// Resposta

// No primeiro console.log será impresso os dados nome: Juca , idade: 3, raca: SRD
// No segundo console.log  será impresso os mesmos dados anteriores da const cachorro incluindo o nome Juba
// No terceiro console.log será imporesso os mesmos dados anteriores da const tartaruga e a vogal a será substituída para pela vogal o

// A função dos 3 pontinhos é copiar as informações de outras varáveis para serem aplicadas numa próxima. 


//Exercício 3


//function minhaFuncao(objeto, propriedade) {
//	return objeto[propriedade]
//}

//const pessoa = {
//  nome: "Caio", 
//  idade: 23, 
//  backender: false
//}

//console.log(minhaFuncao(pessoa, "backender"))
//console.log(minhaFuncao(pessoa, "altura"))

//Resposta

// No primeiro console.log retornará a resposta da chave backender = false
// no segundo console.log retornará a undefined. 

// A chave e o valor não foram declarados.


// Exercício de escrita de código:

// Exercício 1

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

//```jsx
// Exemplo de entrada
//const pessoa = {
//   nome: "Amanda", 
//   apelidos: ["Amandinha", "Mandinha", "Mandi"]
//}

// Exemplo de saída
//"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
//```

// Resposta

//const infos = {
//    nome: "Maria",
//   apelidos: ["Lia", "Ma", "Dona Maria"]
//}

//console.log(`Eu sou ${infos.nome}, mas pode me chamar de: ${infos.apelidos}`)   


//B) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto

//const infos = {
  //   nome: "Maria",
  //   apelidos: ["Lia", "Ma", "Dona Maria"]
  //  }
    
 //const maisApelidos = {
 //    ...infos,
 //    maisapelidos: ["Tia Maria", "Mariazinha", "Maroca"]

 //}
 //   console.log(infos)
 //   console.log(maisApelidos)

 
 // Exercício 2

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

//1. O valor de `nome`
//2. O numero de caracteres do valor `nome`
//3. O valor de `idade`
//4. O valor de `profissão`
//5. O numero de caracteres do valor `profissão`
//- Exemplo

 //   ```jsx
 //   const pessoa = {
 //   	nome: "Bruno", 
 //     idade: 23, 
 //   	profissao: "Instrutor"
 //   }

 //   minhaFuncao(pessoa)

// Retorno: ["Bruno", 5, 23, "Instrutor", 9]

// Resposta 

//const programador = {
//  nome: "Raphael",
//  idade: 40,
//  profissao: "Programador Web Full Stack"
//}

//const consultora = {
//  nome: "Renata",
//  idade: 47,
//  profissao: "Consultoria de Imagem e Estilo"
//}

//const resultadoProgramador = (programador) => {
//  console.log([programador.nome, programador.nome.length, programador.idade, programador.profissao, programador.profissao.length])
  
//}
//resultadoProgramador(programador)

//const resultadoConsultora = (consultora) => {
//  console.log([consultora.nome, consultora.nome.length, consultora.idade, consultora.profissao, consultora.profissao.length])

//}

//resultadoConsultora(consultora)

 
 
//console.log(profissional.nome, profissional.idade, profissional.profissao)



// Exercício 3 = A fazer = 

//Não consegui montar o raciocio a tempo para entrega o exercicio. Este achei mais dificil.

