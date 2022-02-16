import React from "react"
import { useHistory } from "react-router-dom"

export const TripDetailsPage = () => {
    const history = useHistory()

    const goToApplicationFormPage = () => {
        history.push("/applicationformpage")
    }
    
    return (
        <div>
            <p>Trip Details Page</p>
  
                <button onClick={goToApplicationFormPage}>
                    Ir para Formulário de Aplicação
                </button>
        </div>
    )
}