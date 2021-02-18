import './navbar_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () =>{
    return  <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <h1>Song<span className={'book-color'}>Book</span></h1>
                    </div>
                    <div className="navbar-center">
                        <a href="">Add Song</a>
                        <a href="">Most popular songs</a>
                        <a href="">Most popular albums</a>
                        <a href="">Login</a>
                    </div>
                    <div className="navbar-right">
                        <input type="text" className="searchPanel" placeholder="Search..."/>
                        <FontAwesomeIcon icon="search" />
                    </div>
                </div>
            </nav>
}

export default Navbar;