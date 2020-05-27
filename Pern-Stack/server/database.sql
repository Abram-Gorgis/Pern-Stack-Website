CREATE DATABASE pernHighScore;

CREATE TABLE highscores(
    username varchar(45),
    score int
);



WITH highscore AS (SELECT RANK() OVER (ORDER BY score DESC) rank, * FROM highscores) SELECT * FROM highscore WHERE username='kim';	