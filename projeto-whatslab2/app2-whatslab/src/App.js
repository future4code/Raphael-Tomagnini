import React from 'react';
import styled from 'styled-components';
import BoxMensagem from './Components/BoxMensagem/BoxMensagem';


const DivPrimaria = styled.div
`
margin: auto;
height: 550px;
display: flex;
flex-direction: colunm;
align-items: flex-end;
width: 300px;
border: solid;
`




function App() {
  
  return (
    
    <DivPrimaria>

    <BoxMensagem/>  
    
    </DivPrimaria>
    
  );
}

export default App;
