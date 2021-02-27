import './navbar_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";


const Navbar = ({logged, audioEl, music}) =>{

    let history = useHistory();

    function Logout(){

        if(!audioEl.current.currentTime > 0 ){
            audioEl.current.currentTime = 1
        }

        fetch('http://localhost:8080/server_war_exploded/setLastUserListenedServlet?songId='+music.songId+'&songTime='+audioEl.current.currentTime, {
            method:'POST',
            credentials:'include'
        })
            .then((res)=>{
                console.log(res)
            })

        history.push("/logout");
    }

    function Login(){
        history.push("/login");
    }

    return  <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <h1>Song<span className={'book-color'}>Book</span></h1>
                    </div>
                    <div className="navbar-center">
                        <a href="">Add Song</a>
                        <a href="">Most popular songs</a>
                        <a href="">Most popular albums</a>
                        <a href="" onClick={()=>
                            logged==="Login" ? Login() : Logout()}
                        >{logged}</a>
                    </div>
                    <div className="navbar-right">
                        <input type="text" className="searchPanel" placeholder="Search..."/>
                        <FontAwesomeIcon icon="search" />
                    </div>
                </div>
            </nav>
}

export default Navbar;