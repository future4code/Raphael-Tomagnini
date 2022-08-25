import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import CartaSelecionadasScreen from "../screens/CartaSelecionada";
import CartaViradasScreen from "../screens/CartasViradas";
import CartaVisiveisScreen from "../screens/CartasVisiveis";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
            
                <Route exact path={"/"} component={CartaVisiveisScreen}/>
                <Route exact path={"/cartas/:escondidas"} component={CartaViradasScreen}/>
                <Route exact path={"/resultadotarot"} component={CartaSelecionadasScreen}/>
                <Route>
                    <div>Erro: Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>    
    )

}
export default Router