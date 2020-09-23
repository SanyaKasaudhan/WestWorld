import React from 'react'
import './css/Navbar.css'
import Logo from './image/on-juno.png'
const Navbar = ( ) =>{
    return(
          <>
          <div className="container-fluid nav_bg">
              <div className="row">
                  <div className="col-lg-9 col-sm-11 mx-auto">

                 
            <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand " href="#"><img src={Logo} ></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item menu_active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Company
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">About</a>
                <a className="dropdown-item" href="#">Newsroom</a>
                <a className="dropdown-item" href="#">Careers</a>
                <a className="dropdown-item" href="#">Partners</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Learn
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Blog</a>
                <a className="dropdown-item" href="#">Guides</a>
                <a className="dropdown-item" href="#">Help Center</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Legal
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Privacy Policy</a>
                <a className="dropdown-item" href="#">Terms of Use</a>
                <a className="dropdown-item" href="#">Trademarks</a>
                </div>
            </li>
            </ul>
            <form className="navbar-nav ml-auto mb-2 mb-lg-0">
                
            <button type="button" class="btn btn-outline-success mx-5 col-md-3 col-sm-6">Login</button>
            
            <button type="button" class="btn btn-md btn-primary mr-4 col-md-3 col-sm-6">Signup</button>
            
            

            
            </form>
        </div>
        </nav>
        </div>
              </div>
          </div>
    </> )
}
export default Navbar;