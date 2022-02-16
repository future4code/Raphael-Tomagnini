import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Body from './components/Body';

const AppContainer = styled.div`

  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 500px;
  margin: auto;
`



function App() {
  
  return (
    <AppContainer>
    
    <Header/>
    <Body></Body>
        
       
    </AppContainer>
   );
  }

export default App;
