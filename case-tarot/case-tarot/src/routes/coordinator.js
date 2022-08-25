export const goToCartasVisiveis = (history) => {
    history.push("/")
}

export const goToCartasViradas = (history) => {
    history.push(`/cartas/${escondidas}`)
}

export const goToCartasSelecionadas = (history) => {
    history.push("/cartas")
}