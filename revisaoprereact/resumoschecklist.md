1 – Funções em JavaScript

Para que os códigos não fiquem grandes e repetitivos e com dificuldades de leitura, a Função em JS resolve este problema resumindo esta tarefa na programação.

A função é um bloco de código que poder ser invocada por meio de um nome, onde aquele bloco será sempre executado quando necessário, deixando a leitura mais simples e enxuta facilitando o trabalho.

2 - Objeto em JavaScript ⇒ Sintaxe, o que é e como usar

Os objetos são estruturas de sintaxe que nos permite representar dados mais complexos de uma forma mais organizada.

Sintaxe : 

const aluno = {
nome: ‘Raphael Tomagnini’,
idade: 40,
email: ‘raphaeltomagnini@gmail.com’
}

Para acessar ou alterar a propriedades de um objeto, temos duas sintaxes interessantes;

Notação do ponto (a mais comum entre as linguagens de programação).
Notação dos colchetes.

aluno.nome = ‘José’;
aluno[’nome’] = ‘José’;

3 - Array ⇒ Sintaxe, o que é e como usar

Arrays são listas de elementos.

const timesDeFutebol = [“Atlético”, “Cruzeiro”, “América”]
const listaDeNUmerosPares = [2, 4, 6, 8, 10, 12]

Dentro de um array pode ser usado qualquer tipo de elemento: Números, strings, booleano. E também no mesmo array pode ter elementos de tipos diferentes.

const arrayTiposDiferentes = [“cebola”, 40, false]


4 - Map ⇒ Sintaxe, o que é e como usar

Significar mapear.

Utilizado quando queremos criar um Novo array baseado em informações de um array original;

Esta função deve retornar algum valor.

Sintaxe:

const clubesDeFutebolDeMinas = [
{ nome: “AtléticoMG”, mascote : “galo” },
{ nome: “AméricaMG”, mascote : “coelho” },
{ nome: “Cruzeiro”, tipo : “mascote” },

]

const nomeDosTimesMinas = clubesDeFutebolDeMinas.map((clubesDeFutebolDeMinas.map, indice, array) ==> {
 return clubesDeFutebolDeMinas.nome

})

5 - Filter ⇒ Sintaxe, o que é e como usar

Filter significa filtrar.

Utilizado quando queremos criar um Novo array retirando ou não alguns itens do array original.

Esta função deve retornar um valor booleano (true, false)

Sintaxe:

const clubesDeFutebolDeMinas = [
{ nome: “AtléticoMG”, mascote : “galo” },
{ nome: “AméricaMG”, mascote : “coelho” },
{ nome: “Cruzeiro”, tipo : “mascote” },

]

const nomeDosTimesMinas = clubesDeFutebolDeMinas.filter((clubesDeFutebolDeMinas.map, indice, array) ==> {
 return clubesDeFutebolDeMinas.tipo === “galo”

})

6 - Diferenças entre Map e Filter

Map : Cria um novo array com elementos modificados em relação ao original. O tamanho do array é igual o original.

Filter: Cria um novo array com alguns elementos do original. O tamanho do array é igual ou menor do que o array original.


7 - Diferença entre os métodos push e pop e como usá-los

O método push adiciona um ou mais elementos ao final de um arrayç Já o método pop remove o último elemento de um array.

const numero = [ 4,5,6]
 numeros.push (1,2,3)
 console.log (números) // [1,2,3,4,5,6]

const nomes = [“Raphael”, “Renata”, “Vera”]
nomes.pop ()
console.log(nomes) [“Raphael”, ”Renata”]

8 - Método splice do array ⇒ Sintaxe, o que é e como usar

O método slice retorna uma cópia do array anterior a partir do índice informado sem modificar o original.


O método splice(i,n) remove n elementos à partir da posição i do array

const letras = [“A”, “B”, “C”, “D” ]
índices (i).         0      1       2      3

letras.splice(2,1)
novas letras = [ “A”, “B”, “D” ]
índices (i) 	    0	 1      2	

