import React from 'react';
import styled from 'styled-components';

const InserirMensagem = styled.input
    `
        width: 60%;
        

    `


    const ContainerMensagem = styled.div
    `
        display: flex;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        width: 100%;
    `
    const InserirNome = styled.input
    `
        width: 20%;
        
    `
    const ContainerMensagensEnviadas = styled.div
    `
        display: flex;

    `
    const NomeDestaque = styled.p
    `
        font-weight: bold;
    `



class BoxMensagem extends React.Component {
    state={
        listaMensagem:[],         
            
        
    
    novoNome: "",
    novaMensagem: "",    

    }

    enviarMensagem = () => {

        const copiaMensagem = [...this.state.listaMensagem]
        
        const novaListaDeMensagem = {

            nome: this.state.novoNome,
            mensagem: this.state.novaMensagem,

        }   
        copiaMensagem.push(novaListaDeMensagem) 
        this.setState({listaMensagem:copiaMensagem, novaMensagem:"__"})
    }

    onChangeNovoNome = (event) => {

        this.setState({novoNome:event.target.value})
    }

    onChangeNovaMensagem = (event) => {

        this.setState({novaMensagem:event.target.value})
    }
    
    render()
        {
            const listaDeComponentes = this.state.listaMensagem.map((cadaMensagem)=>
            {return(
                <ContainerMensagensEnviadas key={cadaMensagem.nome}>
                    <NomeDestaque>{cadaMensagem.nome}:</NomeDestaque>
                    <p>{cadaMensagem.mensagem}</p>
                </ContainerMensagensEnviadas>
            )})

            return(
                <div>
                 {listaDeComponentes}   
                <ContainerMensagem>
                    
                  <InserirNome
                   onChange = {this.onChangeNovoNome}
                    placeholder = 'Nome'
                    value = {this.state.novoNome}/>

                  <InserirMensagem 
                   onChange = {this.onChangeNovaMensagem} 
                   placeholder = 'Mensagem'
                   value = {this.state.novaMensagem}/>
                    <button onClick={this.enviarMensagem}>Enviar</button>


            </ContainerMensagem>
            </div>
            )
            
        }


}
    export default BoxMensagem;