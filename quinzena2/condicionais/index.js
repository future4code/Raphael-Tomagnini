// Exercício de Interpretação de código

// Exercicio 1

//a) O código está realziando um operação aritmética onde será impresso o resto da divisão do número 2

//b) Para números cujo o resto da divisão seja igual a 0

//c) Para números cujo o resto da divisão seja diferente de 0


// Exercício 2

//a) Ao receber o nome da fruta, ele retorna o valor correspondente. Este código organiza melhor as rotinas. 
//Usando o SwitchCase podemos simplificar a forma de escrever estes códigos.

//b) Será impresso o valor de 2,25

//c) Ele iria conseguir comprar normalmente. Seria impresso valor de 5.5. Caso ele não digitasse a fruta correspondente seria impresso o valor default 


// Exercício 3

//a) Conferindo se o numero inserido no console é maior do que 0

//b) Digitando o numero 10, ia executar a comparação que é maior que 0 e imprimir a mensangem "Essa mensagem é secreta"

//c) Temos que utilizar o return para imprimir a variável que está dentro de um escopo local. O return retira a variável do escopo local nos permitindo o acesso.


// Exercício de escrita de código


// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// Resposta Exercício 1

//let idade = Number(prompt("Digite sua idade"))
//let maiorIdade = 18


//if (idade >= maiorIdade){
//        console.log("Você pode dirigir")

//}else{
//    console.log("Você não pode dirigir")

//}


// Exercício 2

//Agora faça um programa que verifica que turno do dia um aluno estuda. 
//Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// Resposta Exercício 2

//const periodoEstudo = prompt("Digite a letra em maiúsculo se você estuda! M = Matutino, V = Vespertino, N = Notuno")
//const periodoMatutino = "M" === periodoEstudo
//const periodoVespertino = "V" === periodoEstudo
//const periodoNoturno = "N" === periodoEstudo

//if (periodoMatutino){
        //console.log("Bom dia!")

//}else{

 //if (periodoVespertino)
        //console.log("Boa tarde!")
     

   // if (periodoNoturno)
        //console.log("Boa noite!")
//}


// Exercício 3

// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

//const periodoEstudo = prompt("Digite a letra em maiúsculo se você estuda! M = Matutino, V = Vespertino, N = Notuno")

//switch (periodoEstudo){
//    case "M":
//        console.log("Bom dia!!")
//        break
//    case "V":
//        console.log("Boa tarde!!")
//        break
//    case "N":
//        console.log("Boa noite")
//        break
//    default:
//        console.log("Dados inseridos não encontrados. Digite as letras correspondentes")
//        break

//}


//Exercício 4

//Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e 
//se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
//então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const generoFilme = prompt("Qual o genero de filme que deseja assitir?")
const valorIngresso = prompt("Qual o valor do ingresso")
const generoFantasia = true
const outroGenero = false
let precoIngresso = 15

if (generoFilme === generoFantasia){
    console.log("Bom filme")

}else{   

if (generoFilme === outroGenero)
    console.log("Escolha outro filme")

      

if (valorIngresso < precoIngresso)    
     console.log("Bom filme")


if (valorIngresso >= precoIngresso)
    console.log("Escolha outro filme")
}


