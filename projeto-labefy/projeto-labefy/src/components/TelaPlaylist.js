import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardPlaylist = styled.div`

    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`
const axiosconfig = {
    headers:{
        Authorization: "raphael-tomagnini-joy"
    }
}  

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
            this.setState({playlist: res.data.result.list})

        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        }) 

    }
        deletarPlaylist = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            axios.delete(url, axiosconfig) 
                
        
           
        
        .then((res) => {
            alert("Playlist deletado com sucesso!")
            this.pegarPlaylist()
        })    
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente")

        })    
    
    }
    render() {
          const listaPlaylist = this.state.playlist.map((user) => {
              return (
              
              <CardPlaylist key={user.id}>
                  {user.name}
                  <button onClick={() => this.deletarPlaylist(user.id)}>X</button>
              </CardPlaylist>
          
          )
              
          })  
        
        return( 
            <div>
                <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>
                <h2>Playlist</h2>    
                {listaPlaylist}
            </div>
        )
    }
}