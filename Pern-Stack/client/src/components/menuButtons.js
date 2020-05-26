import React, {Fragment, useState, Component} from "react";

class menuButtons extends Component{

    props;
    menuButtons(props)
    {
        this.props=props
    }

    render()
    {
        return(
            <Fragment>
            <h1 className ="text-center mt-5" id="score">Welcome to my PERN stack project</h1>
            <div className="game-area text-center">
            <button className = "btn btn-success mt-5" onClick={this.props.start}>PLAY</button>   
            </div>
            </Fragment>);
    }

}

export default menuButtons;