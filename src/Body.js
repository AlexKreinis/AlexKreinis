import React, { Component } from 'react';
import './Body.css'
import colorgame from './colorgame.jpg';
import MemoryGame from './MemoryGame.jpg';
import RecipeApp from './RecipeApp.jpg';
class Body extends Component {
  render() {
    return (
      <div className="BodyApp">
      <h1> Projects <i class="fas fa-arrow-circle-up"></i></h1>
      <div className="imgrid">
           <div id="test" className="item blue"> <img src={MemoryGame} alt="color" />  <a href="https://alexkreinis.github.io/MemoryGame/"/><i class="fas fa-arrows-alt-h"></i></div>
            <div id="test" className="item blue"> <img src={RecipeApp} alt="color" /> <a href="https://alexkreinis.github.io/recipeapp/"/> <i class="fas fa-arrows-alt-h"></i></div>
            <div  id="test"className="item blue"> <img src={colorgame} alt="color"  /><a href="https://alexkreinis.github.io/Colors/"/> <i class="fas fa-arrows-alt-h"></i> </div>
        </div>   
      

  </div>

    );
  }
}

export default Body;
