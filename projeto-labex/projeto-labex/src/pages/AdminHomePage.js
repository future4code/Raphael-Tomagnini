import React from "react"
import { useHistory } from "react-router-dom"

export const AdminHomePage = () => {
    const history = useHistory()

    const goToListTripPage = () => {
            history.push("/listtripspage")
    }
    return (
        <div>
            <p>Admin Home Page</p>
                <button onClick={goToListTripPage}>
                    Ir para Lista de Viagens
                </button>
        </div>
    )
}