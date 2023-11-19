import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div>
        <header>
            <nav className="navigation navbar navbar-dark bg-dark">
            <Navbar.Brand href="/" style={{"color":'white', "padding" : '10px'}}>
                <FontAwesomeIcon icon ={faVideoSlash}/> Movie List Application   
                <Button className="homeButton">Home</Button>        
            </Navbar.Brand>
            </nav>
        </header>
    </div>

  );
}

export default Header;