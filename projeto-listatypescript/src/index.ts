// Exercicio 1

const funcao1 = (nome: string, dataNascimento: string): string => {
    const [dia, mes, ano] = dataNascimento.split("/");
    const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
    return frase;

};

console.log("exercicio1", funcao1("Raphael", "04/11/1980"));

// Exercicio 2

const funcaoTipo = (variavel: any): void => {
    console.log("exercicio2, typeof variavel");
};
funcaoTipo(41)

// Exercício 3

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type filme = {
    nome: string;
    anoLancamento: number;
    genero: GENERO;
    pontuacao?: number;
};

const catalogo = (
    nome: string,
    ano: number,
    genero: GENERO,
    nota?: number

): filme => {
     if (nota) {
        return {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
        pontuacao: nota    

        };

     } else {
       return {
        nome: nome,
        anoLancamento: ano,
        genero: genero

       };
        
}
};

console.log("exercicio3", catalogo("DUNA", 2021, GENERO.ACAO, 74));

// Exercício 4

enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type colaboradores = {
    nome: string;
    salário: number,
    setor: SETORES;
    presencial: boolean;
};

const listaColaboradores: colaboradores[] = [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
];

const setores = (lista: colaboradores[]): colaboradores[] => {
    const listaMarketing: colaboradores[] = lista.filter((colaborador) => {
        return colaborador.setor === SETORES.MARKETING && colaborador.presencial;
    });
    return listaMarketing;
};
console.log("exercicio4", setores(listaColaboradores))

// Exercício 5

enum ROLE {
    ADMIN = "admin",
    USER = "user",
}

type user = {
    name: string;
    email: string;
    role: ROLE;
};

const usersList: user[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
];

const admin = (list: user[]): string[] => {
    const emailsList: string[] = list
    .filter((user) => user.role === ROLE.ADMIN)
    .map((user) => user.email);
    return emailsList;
};
console.log("exercicio5", admin(usersList));

// Exercício 6

type conta = {
    cliente: string;
    saldoTotal: number;
    debitos: number[];

};

const listaClientes: conta[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const negativados = (lista: conta[]): conta[] => {
    lista.forEach((cliente) => {
        const totalDebitos = cliente.debitos.reduce((a,b) => a + b, 0):
        cliente.saldoTotal -= totalDebitos;
        cliente.debitos = [];
    });

    const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0);
    return contasNegativas;
};
console.log("exercicio6", negativados(listaClientes));

// Exercicio 7

const ajustaPreco = (preco: number): string => {
    const valorAjustado: string = preco.toFixed(2).replace(".", ".")
    return "R$" + valorAjustado
};

type produto = {
    nome:string;
    quantidade:number;
    valorUnitario: number | string;
};

const estoque: produto[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const estoqueAtualizado = (lista: produto[]): produto[] => {
    lista.forEach(
        (item) => (item.valorUnitario = ajustaPreco(item.valorUnitario as number))
    )
};
 const listaOrdenada: produto[] = lista.sort(
    (a, b) => a.quantidade - b.quantidade

 );

 return listaOrdenada;
 
console.log("exercicio7", estoqueAtualizado(estoque))

// Exercicio 8

const renovaoCarteira = (
    dataNascimento: string,
    dataDocumento: string

): boolean | string => {

    const dataAtualTimestamp: number = new Date().getTime();
    const[diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
    const [diaDoc, mesDoc, anoDoc] = dataDocumento.split("/");
    const anoNascTimestamp: number = new Date(
        `${anoNasc}-${mesDoc}-${diaDoc}T00:00:00`

    )getTime();

    const idade: number = dataAtualTimestamp - anoNascTimestamp;
    const ultimaRenovacao: number = dataAtualTimestamp - dataDocTimestamp;
    const umAnoEmTimestamp: number = 31556926000;

    if (idade <= 20 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false;

    } else if ( idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false;
   
    } else if ( idade >= 50 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false;
    } else {
        return "algo deu errado"
}
};

console.log("exercicio8", renovaoCarteira("25/07/1993", "13/11/2011"));

// Exercicio 9

const anagramas = (palavra: string): number => {
    const quantidadeLetras = palavra.length;
     if (quantidadeLetras === 0) {
        return 1;

    }

    let resultado = 1;
    
    for (let i = quantidade; i > 0; i --) {
        resultado *i;
    }
    return resultado;
}
console.log("exercicio9", anagramas("labenu"))

// Exercicio 10
// Não consegui resolvê-lo e entender mesmo com o código já feito.

// Exercicio 11

const algarismoRomano = ( numeroInicial: number): string => {
    const numRomanos: { [ Key: string]: number } = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let romanos = "",
    i;
    for(i in numRomanos) {
        while ( numeroInicial >= numRomanos[i]) {
            romanos += i;
            numeroInicial -= numRomanos[i];

        }
    }
    return romanos;
};
console.log(algarismoRomano(1990)); MCMXC
console.log(algarismoRomano(2193)); MMCXIII 
