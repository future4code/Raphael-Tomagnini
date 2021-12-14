import React from "react"
import axios from "axios"

export default class TelaCadastro extends React.Component {
        state ={
            nome: ""
        }

        handleNome = (event) => {
            this.setState({nome: event.target.value})
        }

        fazerCadastro = () => {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            const body = {
                name: this.state.nome
            }

            axios.post(url, body, {
                headers: {
                    Authorization: "raphael-tomagnini-joy"
                }
            })
            .then((res) => {
                alert("Música cadastrada com sucesso")
                this.setState({nome: ""})
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
        }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir Para Lista de Músicas</button>
                <h2>Adicione sua Playlist</h2>
                <input 
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.handleNome}
                />

                <button onClick={this.fazerCadastro}>Cadastrar</button>

            </div>
        )
    }
}