import React from "react"
import { useHistory } from "react-router-dom"

export const ApplicationFormPage = () => {
        const history = useHistory()

        const goToHomePage = () => {
            history.push("/")
        }
    
    return (
        <div>
            <p>Application Form Page</p>

                <button onClick={goToHomePage}>
                    Ir para Home Page
                </button>
        </div>
    )
}