import React, {Fragment, useState, Component} from "react";
import Game from "./game";
 


const InputHighScore = (props) =>{
    const [username, setUsername] = useState("");


    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try{
            const score = props.score;
            const body = {username,score}
           
        const response = await fetch("http://localhost:5000/highscores",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(body)
        });
        }catch(err){
        
            console.error(err.message);
        }
    }
  


   //Highscores
    return (
    <Fragment>
        <h1 className ="text-center mt-5">Enter Username</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
            <input type = "tsxt" className="form-control" value = {username} onChange={e=>setUsername(e.target.value)}/>
            <button className = "btn btn-success ml-3">Submit</button>    
        </form>
    </Fragment>)
};



export default InputHighScore;