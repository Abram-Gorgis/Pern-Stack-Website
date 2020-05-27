import React, {Fragment, Component} from 'react';
import './App.css';

//components
import Game from "./components/game";
import Menu from "./components/menuButtons";

const initialState = {
  play:false,
  highscores:false
}
class App extends Component{

  state = initialState;

  resetState(){
    this.setState(initialState);
  }
  startGame(){
    this.setState({
      play:true
    })
    }

  
    
  render()
  {

    
    var game = this.state.play ? <Game reset={this.resetState.bind(this)}/> : null;
    var buttons = !this.state.play ?  <Menu  start={this.startGame.bind(this)} reset={this.resetState.bind(this)}/>: null;

   
  
    return(
    <Fragment>
      <h1 className ="text-center mt-1">Snakes by Abram Gorgis</h1>
      <div className="container"> 
      {game}
      {buttons}
      </div>
    </Fragment>
  );
 
  
  }
  
}

export default App;
