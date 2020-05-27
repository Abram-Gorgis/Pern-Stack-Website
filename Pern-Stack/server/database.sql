CREATE DATABASE pernHighScore;

CREATE TABLE highscores(
    username varchar(45),
    score int
);

select * from highscores
where username = 'kim' in (SELECT Rank() OVER(ORDER by score desc) rank,* FROM highscores ORDER BY score DESC);

SELECT Rank() OVER(ORDER by score desc) rank, * FROM highscores where username = $1 in (Select username From highscores

WITH highscores AS (
	SELECT 
		RANK() OVER (
			ORDER BY score DESC) rank,
            *
	FROM 
		highscores

)
SELECT 
	*
FROM 
	highscores 
WHERE username='kim';	