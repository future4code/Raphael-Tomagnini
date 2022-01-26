import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "./utils/constants"


export const LoginPage = () => {
    const history = useHistory()

    const goToAdminHomePage = () => {
        history.push("/adminhomepage")
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = ({ target }) => {
        setEmail(target.value);
    }
    const onChangePassword = ({ target }) => {
        setPassword(target.value);

    }    
    const onSubmitLogin = () => {
        axios.post(`${BASE_URL}/login`, {
            email,
            password
        
        }).then(({ data }) => {
            console.log(data);
        }
            
        ).catch(res => console.log(res));
    
}
    return (
        <div>
            <p>Login Page</p>
            <br/>
            <p>Email</p>
            <input value={email} onChange={onChangeEmail}/>
            <p>Senha</p>
            <input value={password} onChange={onChangePassword}/>
            <br/>
            <button onClick={onSubmitLogin}>
                Login
            </button>
            <p/>
                <button onClick={goToAdminHomePage}>
                    Ir para Página de Administrador
                </button>
        </div>
    )
    }
