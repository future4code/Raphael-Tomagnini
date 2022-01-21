import React from "react"
import { useHistory } from "react-router-dom"

export const LoginPage = () => {
    const history = useHistory()

    const goToAdminHomePage = () => {
        history.push("/adminhomepage")
    }
    
    return (
        <div>
            <p>Login Page</p>

                <button onClick={goToAdminHomePage}>
                    Ir para Página de Administrador
                </button>
        </div>
    )
}