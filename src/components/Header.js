import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="bar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid" style={{display:'flex',textAlign:'end' ,position:'relative'}}>
          <Link className="navbar-brand" style={{position:'absolute',right:'2rem',top:'0.5rem'}} to="/">BurGERR</Link>
          
          <div style={{display:'flex' ,marginLeft:'4px'}} className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{marginLeft:'10px'}}>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item" style={{marginLeft:'10px'}} >
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
