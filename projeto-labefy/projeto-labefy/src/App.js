import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaPlaylist from "./components/TelaPlaylist"


export default class App extends React.Component {
    state = {
      telaCadastro: "cadastro"
    }

    escolheTela = () => {
      switch (this.state.telaCadastro){
        case "cadastro":
            return <TelaCadastro irParaLista={this.irParaLista}/>
        case "lista":
            return <TelaPlaylist irParaCadastro={this.irParaCadastro}/>
        default:
          return <div>Erro! Página não encontrada</div>        

      }
    }

    irParaCadastro = () => {
      this.setState({telaCadastro: "cadastro"})
    }

    irParaLista = () => {
      this.setState({telaCadastro: "lista"})

    }  


   render(){
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}

