import './navbar_style.css'

const Navbar = () =>{
    return  <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <h1>FirstApp</h1>
                    </div>
                    <div className="navbar-center">
                        <a href="">Add Song</a>
                        <a href="">Most popular songs</a>
                        <a href="">Most popular albums</a>
                        <a href="">Login</a>
                    </div>
                    <div className="navbar-right">
                        Tu ma być search
                    </div>
                </div>
            </nav>
}

export default Navbar;