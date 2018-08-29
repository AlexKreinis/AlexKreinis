import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
        <div class="navbar">
            
           <nav id="content">
              <div className="name"><i className="fab fa-react"></i>Alex Kreinis</div> 
              <div>
              <a href="https://drive.google.com/file/d/1Yon9A-wi6AZdTgiTTjY-WuKTVGDQQt4j/view?usp=sharing" className="item">Resume<i className="fas fa-home"></i></a>
              <a className="item" onClick={()=>{window.scrollTo(0,950)}}>Projects<i className="fas fa-arrow-up"></i></a>
              <a className="item"onClick={()=>{window.scrollTo(0,1750)}}>About Me<i className="fas fa-address-card"></i></a>
              <a className="item"onClick={()=>{window.scrollTo(0,2300)}}>Contact <i className="fas fa-phone-square"></i></a>
              </div>
            </nav> 

     </div>
     
     
     
     
     
    );
  }
}

export default Navbar;
