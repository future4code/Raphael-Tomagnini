```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 
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
 ```