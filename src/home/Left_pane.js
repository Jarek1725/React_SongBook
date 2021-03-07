import './left_pane_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component, useEffect, useState} from "react";
import {faBook, faHome, faSpinner, faUser} from "@fortawesome/free-solid-svg-icons";
import {gsap} from 'gsap'
import {Link} from "react-router-dom";
import Right_pane from "./Right_pane";
import UserLibrariesComponent from "./UserLibrariesComponent";

const Left_pane = (props) =>{

    const [imageLoad, setImageLoad] = useState(true)
    // const [useLibraries, setUserLibraries] = useState([])

    const [useLibraries, setUserLibraries] = useState([
        {
            id:   '',
            name: '',
        }
    ]);

    useEffect(()=>{
        setImageLoad(true)
        gsap.fromTo('.album_cover_left_pane', {y:500}, {y:0, duration:1.5})
    }, [imageLoad])

    useEffect(()=>{
        // gsap.from('.left-pane-container', {display:'absolute', top:"150%", duration:1})
        gsap.from('.left-pane-container', {x:-200, duration:1})
        fetch('http://localhost:8080/server_war_exploded/getUserLibraries',{
            method:'POST',
            credentials:'include'
        }).then((res)=>{
            return res.json()
        }).then(data=>{
            setUserLibraries(data)
        })
    }, [])

    function handleLinkClick(e){
        document.querySelectorAll('.left-home-list-element').forEach(function (elem){
            elem.classList = 'left-home-list-element'
        })
        e.target.parentNode.classList += ' active-list-left-pane'
    }

    //
    // function setUserPlaylists(){
    //     fetch('http://localhost:8080/server_war_exploded/getUserLibraries',{
    //         method:'POST',
    //         credentials:'include'
    //     }).then((res)=>{
    //         return res.json()
    //     }).then(data=>{
    //         setUserLibraries(data)
    //     })
    // }



    return  (
        <div>
            <div className="left-pane-container">
                <li className='left-home-list'>
                    <li className='left-home-list-element'> <Link to='/home' onClick={(event => {handleLinkClick(event)})}><FontAwesomeIcon icon={faHome} size={"lg"}/> Home </Link></li>
                    <li className='left-home-list-element'> <Link to='/home/browse'  onClick={(event => {handleLinkClick(event)})}><FontAwesomeIcon icon={faBook} size={"lg"}/> Browse </Link></li>
                    <li className='left-home-list-element'> <Link to='/home/user' onClick={(event => {handleLinkClick(event)})}><FontAwesomeIcon icon={faUser} size={"lg"}/> User </Link></li>
                </li>
                <p className='text-above-list-left-pane'>Your library</p>
                <ul className='libraries_list_left_pane'>
                    <UserLibrariesComponent useLibraries={useLibraries}/>
                </ul>
            </div>
            <img src={props.music.albumPhoto} onLoad={()=>setImageLoad(false)} id='left_bottom_image' className="album_cover_left_pane" alt="album cover"/>
        </div>
)

}

export default Left_pane
