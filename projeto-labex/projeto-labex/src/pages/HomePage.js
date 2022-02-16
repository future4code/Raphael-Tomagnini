import React from "react"
import { useHistory } from "react-router-dom"
  
export const HomePage = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/loginpage")
    }
 
    return (
        <div>
            <p>Home Page</p>

                <button onClick={goToLoginPage}>
                    Ir para Página de Login
                </button>
        </div>
    )
}