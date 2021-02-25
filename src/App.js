import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';
import Navbar from './navbar/Navbar';
import './components/FontAwesome'
import Login from './login/Login'
import Footer from "./footer/Footer";
import Not_found_404 from "./not_found/Not_found_404";
import Home from "./home/Home";
import React, {useEffect, useState} from "react";
import Logout from './logout/Logout'


function App() {

    const[logged, setLogged] = useState('Login')

    useEffect(()=>{
        if(sessionStorage.getItem('isLogged')==='true'){
            setLogged('Logout')
        }
    }, [])

    return (
      <Router>
        <div className="App">
          <Navbar logged={logged}/>
          <div className="main-content">
            <Switch>
                <Route exact path="/">
                    <Login setLogged={setLogged}/>
                </Route>
                <Route exact path="/login">
                    <Login setLogged={setLogged}/>
                    <Footer />
                </Route>
                <Route exact path="/logout">
                    <Logout />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route exact path="*">
                    <Not_found_404 />
                </Route>
                <Route exact path='/home/*'>
                    <Not_found_404/>
                </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
