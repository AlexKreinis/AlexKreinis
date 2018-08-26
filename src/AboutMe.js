import React, { Component } from 'react';
import './AboutMe.css'
class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <h4 > <i class="fas fa-address-card"></i> About Me</h4>
        <div className="description">
        <p> 
        2nd-year software engineering student at SCE ,
        using C,C++,HTML,CSS,
        JavaScript,React
        with  an emphasis on Frontend web development, 
        open minded, passionate about coding and trying to learn everyday.
        </p>
        </div>
      
      </div>
    );
  }
}

export default AboutMe;
