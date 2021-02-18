import './home_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import music_photo from '../components/IconsSvg/undraw_Music.svg'
import login_photo from '../components/IconsSvg/login_svg.svg'
import React, { useState } from "react";
import {Link} from "react-router-dom";

const Home = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:8080/server_war_exploded/LoginServlet')
            .then(res=>{
                return res.json()
            }).then((data)=>{
                console.log(data)
            })
    }

    function formValidation(){
        return email.length>3 && password.length>3
    }

    return  <div className="home-container">
                <img src={login_photo} alt="Logo" className='login-photo'/>
                <div className="home-login">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} className='login-form-class'>
                        <input type="text" className="login-form-text" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/> <br/>
                        <input type="text" className="login-form-text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/> <br/>
                        <input type="submit" value="LogIn" className='submit-login-form' disabled={!formValidation()}/>
                    </form>
                    <p className='register-link'>Don't you have account yet? <Link to="/asd">Register now</Link></p>
                </div>
            </div>
}

export default Home;