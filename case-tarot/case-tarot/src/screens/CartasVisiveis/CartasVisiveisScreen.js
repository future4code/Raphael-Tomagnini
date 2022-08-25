import React from "reac"
import TarotCards from "../../components/TarotCards/TarotCards"
import Header from "../../components/Header/Header"
import {TarotCardsContainer} from "./styled"
import GlobalStateContext from "../../global/GlobalStateContext"

const CartasVisiveisScreen = () => {
      const {cartas} =useContext(GlobalStateContext)

        return(
        <>
             <Header/>
             <TarotCardsContainer>
               {
                  cartas.map((jogo) => {
                     return<CartasVisiveisScreen Key={jogo.name} cartas={jogo}/>
                  })
                  
                  
               }
             </TarotCardsContainer>   
      
      
        </>          
  )
}

export default CartasVisiveisScreen