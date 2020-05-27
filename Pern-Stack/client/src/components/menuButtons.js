import React, {Fragment, Component} from "react";


import List from "./ListHighScore";
const initialState ={
    main:true,
    highscores:false
}

class menuButtons extends Component{

    state = initialState;
    props;
    menuButtons(props)
    {
        this.props=props
    }



    displayHighScores()
    {
        this.setState({
            highscores:true
        })
    }

    undisplayHighScores(){
        this.setState({
            highscores:false
        })
    }
    
    render()
    {
       if(this.state.highscores)
       {
           return(<Fragment>
               <div className="score-area text-center">
               <List reset ={this.undisplayHighScores.bind(this)}/>
               </div>
           </Fragment>)
       }

        if(this.state.main)
        return(
            <Fragment>
            <h1 className ="text-center mt-5" id="score">Welcome to my PERN stack project</h1>
            <div className="game-area text-center">
            <ul className="list-unstyled">
                <li> <button className = "btn btn-success btn-lg mt-5 " onClick={this.props.start}>PLAY</button></li>
                <li> <button className = "btn btn-secondary mt-3" onClick={this.displayHighScores.bind(this)}>HighScores</button></li>  
            </ul>
            </div>
            </Fragment>);
    }

}

export default menuButtons;