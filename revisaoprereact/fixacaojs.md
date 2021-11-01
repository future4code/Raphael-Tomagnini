Exemplo 1

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const salario = 2000 + qtdeCarrosVendidos*100 + valorTotalVendas*0.05
return salario
}

Obs: Esse exercício foi copiado da sugestão da Labenu após correção. Como eu não havia conseguido realizá-lo, usei dos código para continuar treinando.

Exemplo 2

function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  if (quantidade < 12) {
      return quantidade * 1.3
      
  } else {
      return quantidade * 1
  
}
}

Obs: Esse exercício foi copiado da sugestão da Labenu após correção. Como eu não havia conseguido realizá-lo, usei dos código para continuar treinando.

Exemplo 3

function calculaNota(ex, p1, p2) {
  
  let nota1 = number(prompt "Digite Nota Exercício")
  let nota2 = number(prompt "Digite Nota Prova 1")
  let nota3 = number(prompt "Digite Nota Prova 2")
  
  const pesoNotaExercício = 1
  const pesoPrimeiraProva = 2
  const pesoSegundaProva = 3
  
  const mediaPonderada = ((nota1*pesoNotaExercício)+(nota2*pesoPrimeiraProva)+(not3*pesoSegundaProva))/(1+2+3)
  
  if(mediaPonderada >=9;)
        return A
}else if{
   (mediaPonderada >9; && >=7.5)
        return B
}else if{
   (mediaPonderada <7.5; && >=6)
        return C
}else{
  (mediaPonderada <6;)
        return D
}        

Exemplo 4

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 
let contaNumero = 0

for (let numero of arrayDeNumeros){
  if (numero === numeroEscolhido) {
    contaNumero++
  }
}
 if (contaNumero > 0) {
   return `O número ${numeroEscolhido} aparece ${contaNumero}x`
   
 }else{
   
   return "Número não encontrado"
 }
 }

 Exemplo 5

 function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
    const nomeDosAnimais = animais.map((animais.map, indice, array) ==> {
            return animais.nome
        })

 
 Exemplo 6

 function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

 // Escreva seu código aqui
    const filtraDone = (tarefas) => {
       return tarefas.status === "done"
    }
    const atividadesFinalizadas = tarefas.filter(filtraDone)
}       