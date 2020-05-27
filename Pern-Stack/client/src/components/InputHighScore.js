import React, {Fragment, useState} from "react";
 


const InputHighScore = (props) =>{
    const [username, setUsername] = useState("");


    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try{
            if(username===""||props.score===0)
            {
                alert("Username can not be blank and score can not be 0");
                return;
            }

            const score = props.score;
            const body = {username,score}
           
        const response = await fetch("http://localhost:5000/highscores",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(body)
        });
        console.log(response);
        returnMainMenu();
        }catch(err){
        
            console.error(err.message);
        }
    }
  
    const returnMainMenu = ()=>{

        props.reset();
    }
   //Highscores
    return (
    <Fragment>
        <h1 className ="text-center mt-5">Submit Highscores</h1>
        <form className="d-flex mr-2" onSubmit={onSubmitForm}>
            <input type = "tsxt" className="form-control" placeholder="Enter Username" value = {username} onChange={e=>setUsername(e.target.value)}/>
            <button className = "btn btn-secondary ml-3 ">Submit</button> 
        </form>
        <div className = "text-center mt-3">
        <button className = "btn btn-primary text-center" onClick={returnMainMenu}  >Main Menu</button> 
         </div>
        
    </Fragment>)
};



export default InputHighScore;