// Exercício de interpretação de código

// Exercício 1

// let array console.log('a. ', array) ==> retorna valor indefinido da array

// array = null 
// console.log('b. ', array)  ==> retorna valor null da array

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) ==> apresenta quantos elementos tem na array = 11

// let i = 0 
// console.log('d. ', array[i]) ==> retorna valor indefinido da variável

// array[i+1] = 19 
// console.log('e. ', array) ==> Está removendo um elemento a partir da posição i

// const valor = array[i+6] 
// console.log('f. ', valor) ==> Está removendo 6 elementos a partir da posição i



// Exercicio 2

// const frase = prompt("Digite uma frase") //console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus //em Marrocos"?

// SUBI NUM ÔNIBUS EM MIRROCOS

//27


// Exercício de Escrita de Código

//Excercício 1

//Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

//const nomeUsuario = prompt("Insira o seu nome")
//const emailDoUsuario = prompt("Qual o seu email?")
//console.log("O email", emailDoUsuario, "foi cadastrado com sucesso") 
//console.log("Seja bem-vinda(o)", nomeUsuario,)

//Exercício 2

//Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

//a) Imprima na tela o array completo

//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

//Resposta da letra a

//const comidaFavoritas = ["arroz", "feijao", "frango", "batata", "churrasco"]
//console.log(comidaFavoritas)

//Resposta da letra b
//console.log("Essas são minhas comidas preferidas",comidaFavoritas)

//Não consegui fazer a letra B

//Resposta da letra C

//const comidaFavoritas = ["arroz", "feijao", "frango", "batata", "churrasco"]

//const comidaUsuarioFavorita = prompt("Qual é a sua comida preferida?")

//comidaUsuarioFavorita.push (comidaFavoritas)

//console.log(comidaFavoritas)

//Não consegui pegar o raciocínio logico para resolver a letra c


//Exercício 3

//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//c) Imprima o array na tela

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

//e) Remova da lista o item de índice que o usuário escolheu.

//f) Imprima o array na tela

//const primeiraTarefa = prompt("Qual sua primeira tarefa do dia?")
//const segundaTarefa = prompt("Qual sua segunda tarefa do dia?")
//const terceiraTarefa = prompt("Qual sua terceira tarefa do dia?")
//const indiceTarefa = prompt("Escolha um dos seguintes índices 0,1 ou 2?")

//const listaDeTarefas=[]

//listaDeTarefas.push(primeiraTarefa)
//listadeDeTarefas.push(segundaTarefa)
//listaDeTarefas.push(terceiraTarefa)

//listaDeTarefas.splice(indiceTarefa, 1)

//console.log(listaDeTarefas)
//console.log(primeiraTarefa,segundaTarefa,terceiraTarefa)
