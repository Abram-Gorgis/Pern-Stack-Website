import React, {Fragment} from 'react';
import './App.css';

//components

import InputHighScore from "./components/InputHighScore"
import Game from "./components/game"

function App() {

  return(
    <Fragment>
      <div className="container"> 
      <Game/>
      <InputHighScore type = {Game}/>
      </div>
     
    </Fragment>
  );
}

export default App;
