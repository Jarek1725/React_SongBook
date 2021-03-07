import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';
import Navbar from './navbar/Navbar';
import './components/FontAwesome'
import Login from './login/Login'
import Footer from "./footer/Footer";
import Not_found_404 from "./not_found/Not_found_404";
import Home from "./home/Home";
import React, {useEffect, useRef, useState} from "react";
import Logout from './logout/Logout'


function App() {

    const[logged, setLogged] = useState('Login')
    const[searchValue, setSearchValue] = useState('')

    const [music, setMusic] = useState({
        albumName:'',
        albumPhoto:'',
        songAuthor:'',
        songId:'',
        songIndexInAlbum:'',
        songSource:'',
        songTitle:'',
        songAlbumId:''
    })

    useEffect(()=>{
        if(sessionStorage.getItem('isLogged')==='true'){
            setLogged('Logout')
        }
    }, [])

    const audioEl = useRef('0')

    return (
      <Router>
        <div className="App">
          <Navbar logged={logged} audioEl={audioEl} music={music} searchValue={searchValue} setSearchValue={setSearchValue}/>
          <div className="main-content">
            <Switch>
                <Route exact path="/">
                    <Login setLogged={setLogged}/>
                </Route>
                <Route exact path="/login">
                    <Login setLogged={setLogged}/>
                </Route>
                <Route exact path="/logout">
                    <Logout />
                </Route>
                <Route path="/home">
                    <Home audioEl={audioEl} logged={logged} music={music} setMusic={setMusic} searchValue={searchValue} setSearchValue={setSearchValue}/>
                </Route>
                <Route exact path="*">
                    <Not_found_404 />
                </Route>
                <Route exact path='/home/*'>
                    <Not_found_404/>
                </Route>
            </Switch>
              {searchValue}
          </div>
        </div>
      </Router>
  );
}

export default App;
