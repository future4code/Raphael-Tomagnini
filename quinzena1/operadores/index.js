// Exercício de Interpretação de código

//Exercicio 1

//const bool1 = true
//const bool2 = false
//const bool3 = !bool2

//let resultado = bool1 && bool2 
//console.log("a. ", resultado) Comentário : False. Sendo o operador && para retornar verdadeiro todos devem ser verdadeiros

//resultado = bool1 && bool2 && bool3 
//console.log("b. ", resultado) Comentário : True. Neste caso o operador ! está tornando a const o oposto do que está declarado

//resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado) Comentário : False . O operador ! está tornando o resultado de bool1 || bool2 o oposto.

//console.log("d. ", typeof resultado) Comentário : Tipo da variável undefined

//Exercício 2

//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")

//const soma = primeiroNumero + segundoNumero Comentário : Irá imprimir um erro de sintaxe.

//console.log(soma)  Comentário : Utilizar a mesma variavel let

//Exercício 3

//let primeiroNumero = Number(prompt("Digite um numero!")
//let segundoNumero = Number(prompt("Digite outro numero!")

//const soma = primeiroNumero + segundoNumero

//console.log(soma) Devemos utilizar a sintaxe Number antes do prompt para tranform-alo de string para número


// Exercício de escrita de código

// Exercício 1

//a) Pergunte a idade do usuário

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

//const idadeUsuario = 40
//const idadeMelhorAmigo = 35

//console.log ("Sua idade é maior do que a do seu amigo?", idadeUsuario > idadeMelhorAmigo)
//console.log ("A diferença de idade é:", idadeUsuario - idadeMelhorAmigo)

// Exercício 2

//a) Peça ao usuário que insira um número **par**

//b) Imprima na console **o resto da divisão** desse número por 2.

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

//const numeroPar = prompt("Insira um número par")
//console.log (numeroPar)
//console.log (numeroPar % 2)

// Comentário : Após testar vários números pares, o resto da divisão por 2 sempre está retornando 0
// Comentário : Após testar vários números impares, o resto da divisão por 2 sempre está retornando 1

//Exercício 3

// Perguntar ao usuaro a idade em anos depois em seguida imprima:

//a) A idade do usuário em meses

//b) A idade do usuário em dias

//c) A idade do usuário em horas

//const idadeAnos = prompt ("Quantos anos você tem?")
//const idadeMeses = 12
//const idadeDias = 365
//const idadeHoras = 24

//console.log ("Sua idade em meses é:", idadeAnos * idadeMeses)
//console.log ("Sua idade em dias é:", idadeAnos * idadeDias)
//console.log ("Sua idade em horas é:", idadeAnos * idadeHoras)

//Exercício 4

//Peça ao usuário que digite dois números
//O primeiro numero é maior que segundo? true ou false
//O primeiro numero é igual ao segundo? true ou false
//O primeiro numero é divisível pelo segundo? true ou false
//O segundo numero é divisível pelo primeiro? true ou false

//obs: O resultado true ou false vai depender dos números inseridos e do resultado das operações.

//const primeiroNumero = prompt ("Digite o Primeiro Número")
//const segundoNumero = prompt ("Digite o Segundo Número")

//console.log (primeiroNumero > segundoNumero)
//console.log (primeiroNumero === segundoNumero)
//console.log (primeiroNumero !== segundoNumero)
//console.log (segundoNumero !== primeiroNumero)