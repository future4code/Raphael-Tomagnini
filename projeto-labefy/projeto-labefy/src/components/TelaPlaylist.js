import React from "react"
import axios from "axios"
//import styled from "styled-components"

//const CardPlaylist = styled.div`

//    border: 1px solid black;
//    padding: 10px;
//    margin: 10px;

//`
  

export default class TelaPlaylist extends React.Component{
        state = {
            playlist: []
        }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "raphael-tomagnini-joy"
            }

        })
        .then((res) => {
            this.setState({playlist: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        }) 

    }



    render(){
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>
                <h2>Playlist</h2>    
                
            </div>
        )
    }
}