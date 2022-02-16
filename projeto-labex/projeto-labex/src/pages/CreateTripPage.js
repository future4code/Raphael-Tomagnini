import React from "react"
import { useHistory } from "react-router-dom"

export const CreateTripPage = () => {
    const history = useHistory()

    const goToTripDetailsPage = () => {
        history.push("/tripdetailspage")

    }
    
    return (
        <div>
            <p>Create Trip Page</p>

                <button onClick={goToTripDetailsPage}>
                    Checar Detalhes da Viagem
                </button>
        </div>
    )
}