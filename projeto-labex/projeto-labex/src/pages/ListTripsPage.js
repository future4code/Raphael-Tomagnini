import React from "react"
import { useHistory } from "react-router-dom"

export const LisTripsPage = () => {
    const history = useHistory()

    const goToCreateTripPage = () =>{
        history.push("/createtrippage")
    } 
      
  
    return (
        <div>
            <p>List Trips Page</p>
            
            <button onClick={goToCreateTripPage}>
                Criar Lista de Viagens
            </button>
        </div>
    )
    
}