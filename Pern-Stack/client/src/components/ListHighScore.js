import React,{Fragment,useState,useEffect} from "react";

const ListHighScore = (props) =>{

    const [username, setUsername] = useState("");
    const [Scores,setScores] = useState([]);

    const getHighScores = async() =>{
        try{
        
            const response = await fetch("http://localhost:5000/highscores");
            const jsonData = await response.json();
            setScores(jsonData);
        }catch(err){
            console.error(err.message);
        }

    }
    useEffect(()=>{
        getHighScores();
    },[])



    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try{

           if(username==="")
            { 
            
                getHighScores();
                return;
            }
           
           

            const response = await fetch("http://localhost:5000/highscores/"+username);
            const jsonData = await response.json();

            setScores(jsonData);

        }catch(err){
        
            console.error(err.message);
        }
    }


    const backButton = () =>
    {
        
        props.reset();
    }

    return (<Fragment>
        <h1>High Scores</h1>
        <form className="d-flex mr-2" onSubmit={onSubmitForm}>
            <input type = "tsxt" className="form-control" placeholder="Enter Username" value = {username} onChange={e=>setUsername(e.target.value)}/>
            <button className = "btn btn-primary ml-3 ">Search</button> 
             <button className = "btn btn-secondary ml-3"onClick={props.reset} >back</button>
        </form>
       
        <div>
        <table className="table mt-3 text-center">
         <thead className="thead-dark">
         <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
        </tr>
        </thead>
            <tbody>
                {Scores.map(Scores=>(
                    <tr>
                        <td>{Scores.rank}</td>
                        <td>{Scores.username}</td>
                        <td>{Scores.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>


    </Fragment>);
}
export default ListHighScore;