/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Seja bem vindo(a) ao jogo Black Jack!!!")

const jogoBlackJack = confirm("Quer iniciar uma nova rodada?")

const carta = comprarCarta();

    console.log(carta.texto)
    console.log(carta.valor)



if(confirm("Quer iniciar uma nova rodada?")) {
    
 
}else{    
    
    console.log("O Jogo acabou")

}

