import './left_pane_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component, useEffect, useState} from "react";
import {faBook, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {gsap} from 'gsap'
import {Link} from "react-router-dom";

const Left_pane = () =>{

    function handleLinkClick(e){
        document.querySelectorAll('.left-home-list-element').forEach(function (elem){
            elem.classList = 'left-home-list-element'
        })
        e.target.parentNode.classList += ' active-list-left-pane'
    }

    return  <div className="left-pane-container">
                <li className='left-home-list'>
                    <li className='left-home-list-element'> <Link to='/home' onClick={(event => {handleLinkClick(event)})}><FontAwesomeIcon icon={faHome} size={"lg"}/> Home </Link></li>
                    <li className='left-home-list-element'> <Link to='/home/browse'  onClick={(event => {handleLinkClick(event)})}><FontAwesomeIcon icon={faBook} size={"lg"}/> Browse </Link></li>
                    <li className='left-home-list-element'> <Link to='/home/user' onClick={(event => {handleLinkClick(event)})}><FontAwesomeIcon icon={faUser} size={"lg"}/> User </Link></li>
                </li>
                <p className='text-above-list-left-pane'>Your library</p>
                <ul className='libraries_list_left_pane'>
                </ul>
            </div>

}

export default Left_pane
