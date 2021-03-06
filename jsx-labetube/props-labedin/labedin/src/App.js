import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/1m2GWNW/Raphael.jpg" 
          nome="Raphael Tomagnini" 
          descricao="Olá, eu sou o Raphael Tomagnini. Sou terapeuta holísico. Amo trabalhar com curas alternativas, principalmente as que envolvem magnetismo. Atualmente estou estudando na Labenu para transição de carreira, pois a Web também me fascina muito"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Raphael Tomagnini" 
          descricao="Estou me formando em Programador Web Full Stack e como terapeuta sou Mestre em Reiki Mikao Usui, terapeuta Homeopata não médico e Coach" 
        />
        
        <CardGrande 
          imagem="https://i.ibb.co/Bc8C9BV/trabalho-voluntario.jpg" 
          nome="Trabalhos Voluntários" 
          descricao="Tratamento com biomagnetismo - Campanha do quilo e atendimento fraterno." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
