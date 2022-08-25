import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToCartasVisiveis } from "../../routes/coordinator";
import { TarotCardsContainer,ImgContainer, ImageBackCard, ButtonsContainer } from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext";

const TarotCards = (props) => {
    const history = useHistory();
    const {CartasVisiveis, setCartasVisiveis, CartasSelecionadas, setCartasSelecionadas} = useContext(
        GlobalStateContext
    );

const addToCartasSelecionadas = () => {
    const cartasIndex = CartasSelecionadas.findIndex(
        (item) => item.name === props.cartas.name
    );

    const newCartasSelecionadas = [...CartasVisiveis];
    newCartasSelecionadas.splice(cartasIndex, 1);
    const orderedCartasSelecionadas = newCartasSelecionadas.sort((a, b) => {
        return a.id - b.id;
    }


    )};
    
    const newCartasSelecionadas = [...cartas, props.jogo];
    const orderedCartasSelecionadas = newCartasSelecionadas.sort((a, b) => {
        return a.id - b.id;
    });

    setCartasSelecionadas(orderedCartasSelecionadas)   
    

const TarotCards = () => {
    return(<div>TarotCards</div>)
}

export default TarotCards