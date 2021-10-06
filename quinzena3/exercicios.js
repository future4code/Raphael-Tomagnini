// EXERCÍCIO 01
function inverteArray(array) {

  let arrayInverso = []
  for(let i = array.length-1; i >= 0; i--){

  arrayInverso.push(array[i])
}
return arrayInverso
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let numerosParesElevadosA2 = []
for(let item of array){
  if (item % 2 === 0){
    let elevadoPor2 = item * item
      numerosParesElevadosA2.push(elevadoPor2)
  }
}

return numerosParesElevadosA2
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
let numerosPares = []
for(let item of array) {
  if(item % 2 ===0) {
    numerosPares.push(item)
  }
}
return numerosPares
}


// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  
  let numeroMaior = array[0]
   for(let i = 0 ; i < array.length ; i++){
        let numeroDeEntrada = array[i]
        if (numeroDeEntrada > numeroMaior){
           numeroMaior = numeroDeEntrada
        } 
      
  }
  console.log(numeroMaior)
  return numeroMaior
}
  



// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const retornoDoBooleano = [booleano1 && booleano2 && !booleano4,

  (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1),
  !(booleano2 && booleano3) || !(booleano1 && booleano3),  
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]  

    return retornoDoBooleano
}


// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
const filme = {
   nome : "O Diabo Veste Prada",
   ano : 2006,
   diretor : "Daivid Frankel",
   atores : ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   
}
return filme
//console.log ("Nome", filme.nome)
//console.log ("Ano", filme.ano)
//console.log ("Diretor", filme.diretor)
//console.log ("Atores", filme.atores)
}


// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  pessoa.nome = "ANÔNIMO"

  return pessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
