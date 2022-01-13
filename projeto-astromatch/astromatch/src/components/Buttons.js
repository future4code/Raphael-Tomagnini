import React from 'react'
import styled from 'styled-components'

const ButtonsFooter = styled.div`
width: 500px;
display: flex;
justify-content: space-around;
align-content: flex-end;
`


const Buttons = (props) => {
    return (
        
    <ButtonsFooter>
        <button>Like</button>
        <button onClick={props.mostraPerfil}>Dislike</button>
    </ButtonsFooter>


        
    )
}

export default Buttons
