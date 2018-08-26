import React, { Component } from 'react';
import './Body.css';
import colorgame from './colorgame.jpg';
class Body extends Component {
  render() {
    return (
      <div className="BodyApp">
        <h1>
          {' '}
          Projects <i class="fas fa-arrow-circle-up" />
        </h1>
        <div className="imgrid">
          <div id="test" className="item blue">
            {' '}
            <img src={colorgame} alt="color" />{' '}
            <i class="fas fa-arrows-alt-h" />
          </div>
          <div id="test" className="item blue">
            {' '}
            <img src={colorgame} alt="color" />{' '}
            <i class="fas fa-arrows-alt-h" />
          </div>
          <div id="test" className="item blue">
            {' '}
            <img src={colorgame} alt="color" />
            <a content="a" href="https://alexkreinis.github.io/Colors/" />{' '}
            <i class="fas fa-arrows-alt-h" />{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
