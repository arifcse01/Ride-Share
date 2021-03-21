import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Header></Header>
        <Switch>          
          <Route path="/home">            
            <Home></Home>
          </Route>
          <Route exact path="/">            
            <Home></Home>
          </Route>
          <Route path="/signup">            
          <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/destination/:rideId">            
            <Destination></Destination>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
