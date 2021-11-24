import React from "react"

export default class Etapa1 extends React.Component {
    render() {
        <h3>ETAPA 1 - DADOS GERAIS</h3>
       
            return (
            <div>
            
            <h5>1. Qual o seu nome?</h5>
            <input placeholder={"nome"}></input>
    
            <h5>2. Qual a sua idade?</h5>
            <input placeholder={"idade"}></input>
    
            <h5>3. Qual o seu email?</h5>
            <input placeholder={"email"}></input>

            <h5>4. Qual a sua escolaridade?</h5>
            
                
            <select>
    
            <option value="Nivel escolar">Ensino médio incompleto</option>
            <option value="Nivel escolar">Ensino médio completo</option>
            <option value="Nivel escolar">Ensino superior incompleto</option>
            <option value="Nivel escolar">Ensino superior completo</option>
            
            </select><p />
            
            <button>Próxima etapa</button>

            </div>
    
            )
        }
        
       
       
    
    }
   
    


