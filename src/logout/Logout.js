import './logout_style.css'
import { useHistory } from "react-router-dom";
import logoutImage from '../components/IconsSvg/logout.svg'

const Logout = () =>{

    sessionStorage.setItem("isLogged", 'false')

    function checkLogged(){
        fetch('http://localhost:8080/server_war_exploded/Logout', {
            method:'POST',
            headers:{"Content-Type": "multipart/form-data"},
            credentials: 'include',
        }).then((res)=>{
            // history.push('/')
        })
    }

    return  <div className="logout-container" onClick={checkLogged()}>
                <img src={logoutImage} className='Logout-image' alt=""/>
                <div className="logout-message">
                    <h2>Good bye</h2>
                    <p>We hope to see you later</p>
                </div>
            </div>
}

export default Logout;