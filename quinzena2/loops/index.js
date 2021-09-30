// Exercício de interpretação de código

// Exercício 1
 

//let valor = 0
//for(let i = 0; i < 5; i++){
//    valor += i
//}
//console.log(valor)

//Resposta
// O código está passando uma condição que enquanto i for menor que 5 ele deve continuar recebendo o incremento de mais 1.
// O valor impresso no console será 10.


// Exercício 2

//const lista = [10, 11, 12, 15, 18, 21, 23, 25, 27,30]
//for (let numero of lista) {
//    if (numero >18) {
//        console.log(numero)    

//    }


//}

// Resposta
// Será impresso todos os numero maiores do que 18.
// Sim. A estrutura do for é usado principalmente quando aplicado em arrys.


// Exercício 3

//const quantidadeTotal = Number(prompt(" Digite a quantidade de linhas: "))
//let quantidadeAtual = 0
//    while (quantidadeAtual < quantidadeTotal){
//        let linha = ""
//    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos ++){
//        linha += "*"

//    }    
//console.log(linha)
//quantidadeAtual++

//}

// Resposta 
// Após digitar o número 4, será impresso no console 4 linhas, cada 1 delas recebendo 
// a quantidade somada de mais 1.

//OBS : Todo este exercício de interpretação eu tive que executar para enteder a lógica e estrutura,
// foi uma aula que eu tive mais dificuldade no entendimento.


// Exercício de escrita de código

// 1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

//- 💡 Dica
    
 //   Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
    

//c) Por fim, imprima o array com os nomes dos bichinhos no console

// Resposta


  //let  quantidadeBichos = true
  //const nomesBichos = []
  
  //     while (quantidadeBichos !== 0){
  //            quantidadeBichos = Number(prompt("Digite a quantidade de bichos que você tem"))
             
  //     if (quantidadeBichos > 0){
  //     for(let i = 0; i < quantidadeBichos; i++){
             
  //            bichinhos = prompt("Digite o nome dos seus bichos")
  //            nomesBichos[i] = bichinhos
  //     }
  
  //     }
  //     console.log(quantidadeBichos, 'Que pena!! Você pode adotar um pet')
       
 //      console.log(nomesBichos)
 //      }
  





  //Exercício 2

//Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//a) Escreva um programa que **imprime** cada um dos valores do array original.

// Resposta A

//let arrayOriginal = [10, 20, 30, 40, 50]
//for (let item of arrayOriginal){
//       console.log(item)
//}

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// Resposta B

//let arrayOriginal = [10, 20, 30, 40, 50]
//for (let item of arrayOriginal){
//       console.log(item / 10)
//}

//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

//let arrayOriginal = [13, 20, 30, 40, 50]
//let arrayPares = []

//       for(let item of arrayOriginal){
//       if (item % 2 ===0){
//           arrayPares.push(item)   
//       }              

//       }
//              console.log(arrayPares)
//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// Resposta = Este não conseguir desenvolver o raciocínio

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// Resposta E

//let arrayOriginal = [10, 20, 30, 40, 50]           

//console.log(arrayOriginal[4])
//console.log(arrayOriginal[0])