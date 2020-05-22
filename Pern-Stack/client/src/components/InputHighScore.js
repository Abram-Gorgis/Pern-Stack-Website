import React, {Fragment, useState, Component} from "react";

 


const InputHighScore = (Score) =>{
    const [username, setUsername] = useState("");

    
    const onSubmitForm = async(e) =>{
        e.preventDefault();

        try{
        const body = {username};
        const response = await fetch("http://localhost:5000/highscores",{
            method:"POST",
            headers:{"Conent-Type":"application/json"},
            body: JSON.stringify(body,body)
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
            <button className = "btn btn-success ml-3">submit</button>    
        </form>
        </Fragment>)
};

export default InputHighScore;