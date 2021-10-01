//Exercicio interpretação de código

// Exercício 1


//const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" }
//  ]
  
//  const novoArrayA = usuarios.map((item, index, array) => {
//     console.log(item, index, array)
// })

  //Resposta  = Será impresso no console os nomes com seus respectivos apelidos e também sua posição do array

 
// Excercício 2
 
 
 //const usuarios = [
 //   { nome: "Amanda Rangel", apelido: "Mandi" },
 //   { nome: "Laís Petra", apelido: "Laura" },
 //   { nome: "Letícia Chijo", apelido: "Chijo" },
 // ]
  
 // const novoArrayB = usuarios.map((item, index, array) => {
 //    return item.nome
 // })
  
 // console.log(novoArrayB)

    // Resposta  = Será impresso apenas os nomes passados em  uma nova array.


// Exercício 3

//const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" },
//  ]
  
//  const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
//  })
  
//  console.log(novoArrayC)

  // Resposta = Será impresso em uma nova array todos os nomes menos os nomes que conterem a palavra "Chijo"


  // Exercício de escrita de código

  // Exercício 1

  //const pets = [
  //  { nome: "Lupin", raca: "Salsicha"},
  //  { nome: "Polly", raca: "Lhasa Apso"},
  //  { nome: "Madame", raca: "Poodle"},
  // { nome: "Quentinho", raca: "Salsicha"},
  //  { nome: "Fluffy", raca: "Poodle"},
  //  { nome: "Caramelo", raca: "Vira-lata"},
  //]

   // a) Crie um novo array que contenha apenas o nome dos doguinhos

   // Resposta A

   // const novoArrayBichos = pets.map((item, index, array) => {
   //    return item.nome
   // })
   // console.log(novoArrayBichos)

  
    //b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

     // Resposta B

    //const novoArrayBichos = pets.map((item, index, array) => {
   //     console.log(item, index, array)
   // })
  
   // Resposta C

    //c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

   
    //const filtraPoodle = pets.filter((pets, index, array) => {
     //      return pets.raca === "Poodle"

    //}) 
      
    //const racaPoodle = filtraPoodle.map((Poodle) => {
         //  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${Poodle.nome}`
    //})
   
   //console.log(racaPoodle)
   


   // Exercício 2

  // const produtos = [
  //  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  //  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  //  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  //  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  //  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  //  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  //  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  //  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  // { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  //  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }

  //   ]


     //  a) Crie um novo array que contenha apenas o nome de cada item

   // Resposta A

   //const nomeItem = produtos.map((item, index, array) => {
            //    return item.nome

  // })
  // console.log(nomeItem)

 
 
  // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// Resposta B

  //   const novoArray = produtos.map((item, index, array) => {    
     
  //   const novoPreco = (item.preco * 0.95)
  //   const resultado = {
  //    nome: item.nome,
  //    preco: novoPreco 

  //   }
  //       return resultado       

  //  })

  //   console.log(novoArray)
        
       
 
//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

  // Resposta C

 // const listaBebidas = produtos.filter((item, index, array) => {
 //   return item.categoria === "Bebidas"
 //})
  
 //console.log(listaBebidas)


  
 // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

  // Resposta D


  //const filtraYpe = produtos.filter((item) => {
  //      return item.nome.includes("Ypê")
  //})
  
 // console.log(filtraYpe)

 
  
  // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

  // Resposta E

//  const filtraYpe = produtos.filter((item) => {
//    return item.nome.includes("Ypê")

//})

//const palavraYpe = filtraYpe.map((item) => {
//nome = item.nome
//preco = item.nome
//return("Compre" +nome+ "por" +preco+ "!")

//})
//console.log(palavraYpe)