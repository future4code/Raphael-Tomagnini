import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    usuarioNome: [],
    valorInputNome: "",

    usuarioEmail: [],
    valorInputEmail: ""

  };

  componentDidMount() {
    this.pegausuarioNome();
    this.pegavalorInputEmail();

  }

  pegausuarioNome = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "raphael-tomagnini-joy"
          }

        }
      )
      .then((res) => {
        this.setState({usuarioNome: res.data});
         
       })
      .catch((err) => {
        console.log(err.response.data);
      });              

};

  inserirInputNome = (e) => {
      this.setState({ valorInputNome: e.target.value});

  inserirInputEmail = (e) => {
      this.setState({ valorInputEmail: e.target.value});    

  };
   novoUsuario = () => {
     const URL = 
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

      const body = {
        name: this.state.valorInputNome
    };
  }
    novoEmail = () => {
      const URL = 
       "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
 
       const body = {
         email: this.state.valorInputEmail
     };
    }
   const headers = {
     headers: {
        Authorization: "raphael-tomagnini-joy"
     }
   }; 
      axios
        .post(URL, body, headers)
        .then((res) => {
          console.log("Sucesso, usuário criado");
          this.pegausuarioNome();
          this.pegavalorInputEmail();

        })
        
        .catch((err) => {
           console.log(err.response.data); 

        });
      };
  render() {
      const list = this.state.usuarioNome.map((usuarioNome) => {
          return <p key={usuarioNome.name}> {usuarioNome.email}</p>;

      });     
    
  return (
    <div>
      <div>
      <input
        placeholder={"Usuário"}
        value={this.state.valorInputNome}
        onChange={this.inserirInputNome}
        />
      <input
        placeholder={"Email"}
        value={this.state.valorInputEmail}
        onChange={this.inserirInputEmail}
        />  

      <button onClick={this.novoUsuario}>Usuário</button>
      <button onClick={this.novoUsuario}>Email</button>
      </div>
      {list}
      </div>
    );    
  }
 
}


