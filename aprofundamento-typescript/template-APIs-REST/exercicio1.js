const minhaString = (name) => {
    const usuario = { name };
    return usuario;
};
console.log(minhaString("Raphael"));
const novoUser = (usuario, senha) => {
    const user = { usuario, senha };
    return user;
};
console.log(novoUser("raphael", 12345));
var CoresArcoIris;
(function (CoresArcoIris) {
    CoresArcoIris["AZUL"] = "Azul";
    CoresArcoIris["AMARELO"] = "Amarelo";
    CoresArcoIris["VERDE"] = "Verde";
    CoresArcoIris["VERMELHO"] = "Vermelho";
    CoresArcoIris["LARANJA"] = "Laranja";
    CoresArcoIris["ANIL"] = "Anil";
    CoresArcoIris["VIOLETA"] = "Violeta";
})(CoresArcoIris || (CoresArcoIris = {}));
console.log(CoresArcoIris.AZUL);
//# sourceMappingURL=exercicio1.js.map