const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes


//Add high scores
app.post("/highscores", async(req,res)=>{

    try{

       const {username} = req.body;
       const{score}= req.body;
       const newHighscore = await pool.query("INSERT INTO highscores (username,score) VALUES($1,$2) RETURNING *",[username,score]);

       res.json(newHighscore.rows[0]);
    }catch(err){
        console.error(err.message);
    }

});
//Get all high scores
app.get("/highscores",async(req,res)=>{
    try{
        const allHighscores = await pool.query("SELECT * FROM highscores ORDER BY score DESC");
        res.json(allHighscores.rows);
    }catch(err){
        console.error(err.message);
    }
});

//Get High scores with specific name
app.get("/highscores/:name",async(req,res)=>{

    try{
        console.log(req.params);
        const {name} = req.params;
        const highscore = await pool.query("SELECT * FROM highscores where username = $1 ORDER BY score DESC",[name]);
        res.json(highscore.rows);
    } catch (err){
        console.error(err.message);
    } 

});


app.listen(5000, ()=>{
    console.log("server has started on port 5000");
});