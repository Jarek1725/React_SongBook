import './left_pane_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie';

const Left_pane = () =>{



    return  <div className="left-pane-container">
                <li className='left-home-list'>
                    <FontAwesomeIcon icon={faHome} size={"lg"}/> Home
                </li>
            </div>

}

export default Left_pane