import './navbar_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import SearchPane from "./SearchPane";
import AddPlaylist from "./AddPlaylist";


const Navbar = ({logged, audioEl, music, searchValue, setSearchValue}) =>{

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

    function handleAddPlaylist(){
        document.getElementById("create-playlist").style.display="block"
    }

    return  <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <h1>Song<span className={'book-color'}>Book</span></h1>
                    </div>
                    <div className="navbar-center">
                        <p style={{cursor:"pointer"}} onClick={()=>handleAddPlaylist()}>Create playlist</p>
                        <a href="">Most popular songs</a>
                        <a href="" onClick={()=>
                            logged==="Login" ? Login() : Logout()}
                        >{logged}</a>
                    </div>
                    <SearchPane searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <AddPlaylist/>
                </div>
            </nav>
}

export default Navbar;