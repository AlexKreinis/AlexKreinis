import React, { Component } from 'react';
import './Contact.css'
class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact Me<i class="fas fa-phone-square"></i></h1>
      <div className="contacts">  
         <div className="email">
           <h2>E-Mail<i class="fas fa-envelope"></i>:</h2>
            <p>alex.kreinis@walla.co.il</p>
         </div>
         <div className="phone">
           <h2>Phone number<i class="fas fa-mobile-alt"></i>:</h2>
           <p>050-577-5017</p>
         </div>
        </div>
      </div>
    );
  }
}

export default Contact;
