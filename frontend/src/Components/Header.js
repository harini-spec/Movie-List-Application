import React from "react";
import "../Components/Styles/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
        <header>
            <nav className="navigation navbar navbar-dark bg-dark">
              <Navbar.Brand href="/">
                  <FontAwesomeIcon icon ={faVideoSlash}/> Movie List Application   
              </Navbar.Brand>
              <a href="/"><Button>Home</Button></a>    
            </nav>
        </header>
    </div>

  );
}

export default Header;