
function buscarCarrosPorMarca(frota: { marca: string }[], marca: string){
    if(!marca) return frota;

    // return frota.filter(carro => carro.marca === marca);
}
// const filter: (args: any) => boolean) = () => {}

const resultado = buscarCarrosPorMarca([], "");