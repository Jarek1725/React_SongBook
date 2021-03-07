import './main_pane_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";

const Main_pane = ({setPageLoad}) =>{

    return  <div className="main-pane-container" onLoad={()=>setPageLoad('true')}>
                Home
            </div>

}

export default Main_pane