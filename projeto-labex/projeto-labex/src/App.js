import { AdminHomePage } from './pages/AdminHomePage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { CreateTripPage } from './pages/CreateTripPage';
import { HomePage } from './pages/HomePage';
import { LisTripsPage } from './pages/ListTripsPage';
import { LoginPage } from './pages/LoginPage';
import { TripDetailsPage } from './pages/TripDetailsPage';
import {BrowserRouter, Switch, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Switch>
      
      <Route exact path={"/"}>
        <HomePage />
      </Route>

      <Route exact path={"/loginpage"}>
        <LoginPage />
      </Route>

      <Route exact path={"/adminhomepage"}>
        <AdminHomePage />
      </Route>
      
      <Route exact path={"/applicationformpage"}>
        <ApplicationFormPage />
      </Route>

      <Route exact path={"/createtrippage"}>
        <CreateTripPage />
      </Route>
      
      <Route exact path={"/listtripspage"}>
        <LisTripsPage />
      </Route>
      
      <Route exact path={"/tripdetailspage"}>
        <TripDetailsPage />
      </Route>

    
      </Switch>
    </BrowserRouter>
  );
}

export default App;
