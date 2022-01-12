import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`

  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 500px;
  margin: auto;
`

const TituloContainer = styled.div`
  border: 1px solid black;
  height: 10vh;
`



class App extends React.Component {
  render() {
  return (
    <AppContainer>
    <TituloContainer/>  
    </AppContainer>
   );
  }
}
export default App;
