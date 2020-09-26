import React from 'react'
import './css/Navbar.css'
import 'font-awesome/css/font-awesome.min.css';
import Logo from './image/on-juno.png'
const Navbar = ( ) =>{
    return(
          <>
          <div className="container-fluid nav_bg">
              <div className="row">
                  <div className="col-lg-12  col-sm-11 mx-auto">
                      <div className="center col-lg-9">

                 
            <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand " href="#"><img src={Logo} ></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link menu_active1 pl-lg-4"  href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown pl-lg-4 menu_active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Company 
                </a>
                <div className="dropdown-menu menu_active3" aria-labelledby="navbarDropdown">
                <a className="dropdown-item menu_active2" href="#">About</a>
                <a className="dropdown-item menu_active2" href="#">Newsroom</a>
                <a className="dropdown-item menu_active2" href="#">Careers</a>
                <a className="dropdown-item menu_active2" href="#">Partners</a>
                </div>
            </li>
            <li className="nav-item dropdown pl-lg-4 menu_active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Learn 
                </a>
                <div className="dropdown-menu menu_active3" aria-labelledby="navbarDropdown">
                <a className="dropdown-item menu_active2" href="#">Blog</a>
                <a className="dropdown-item menu_active2" href="#">Guides</a>
                <a className="dropdown-item menu_active2" href="#">Help Center</a>
                </div>
            </li>
            <li className="nav-item dropdown pl-lg-4 menu_active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Legal
                </a>
                <div className="dropdown-menu menu_active3" aria-labelledby="navbarDropdown">
                <a className="dropdown-item menu_active2" href="#">Privacy Policy</a>
                <a className="dropdown-item menu_active2" href="#">Terms of Use</a>
                <a className="dropdown-item menu_active2" href="#">Trademarks</a>
                </div>
            </li>
            </ul>
            <form className="navbar-nav mb-2 mb-lg-0">
                 {/*login*/}
            <a href="/login" className="alogin">
                <button class="secondary-btn">
                    <span>
                    Login
                    </span>
                </button>
            </a>

            {/*signup*/}
            <a href="/get-started" className="asignup ml-4">
                <button class="primary-btn">
                    <span>
                    Signup
                    </span>
                </button>
            </a>
            

            
            </form>
        </div>
        </nav>
        </div>
        </div>
              </div>
          </div>
    </> )
}
export default Navbar;