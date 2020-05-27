import React, {Fragment, Component} from "react";

//components
import Snake from "./Snake";
import Food from "./food";
import InputHighScore from "./InputHighScore"
   const getRandomCoordinates =() =>{
        let min = 1;
        let max = 98;
        let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
        let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
        return [x,y]
    }
    const initialState = {
    food: getRandomCoordinates(),
    speed: 200,
    gameOver: false,
    direction: 'RIGHT',
    snakeDots: [
      [0,0],
      [2,0]
    ]
  }
class game extends Component{
   
 
    props;

    game(props)
    {
      this.props = props;
    }

    state = initialState;

    componentDidMount() {

      setInterval(this.moveSnake,this.state.speed);
      document.onkeydown = this.onKeyDown;

    }
  
    componentDidUpdate() {
      if(!this.state.gameOver)
      {
      this.checkIfOutOfBorders();
      this.checkIfCollapsed();
      this.checkIfEat();
      }
    }
  
    onKeyDown = (e) => {
      e = e || window.event;
      switch (e.keyCode) {
        case 38:
            if(this.state.direction!=='DOWN')
            this.setState({direction: 'UP'});  
          break;
        case 40:
            if(this.state.direction!=='UP')
          this.setState({direction: 'DOWN'});
          break;
        case 37:
            if(this.state.direction!=='RIGHT')
          this.setState({direction: 'LEFT'});
          break;
        case 39:
            if(this.state.direction!=='LEFT')
          this.setState({direction: 'RIGHT'});
          break;
        default:
      }
    }
  
    moveSnake = () => {
      
      if(this.state.gameOver===false)
      {
      let dots = [...this.state.snakeDots];
      let head = dots[dots.length - 1];
  
      switch (this.state.direction) {
        case 'RIGHT':
          head = [head[0] + 2, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 2, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 2];
          break;
        case 'UP':
          head = [head[0], head[1] - 2];
          break;
        default:
      }
      dots.push(head);
      dots.shift();
      this.setState({
        snakeDots: dots
      })
    }
    }
  
    checkIfOutOfBorders() {
      let head = this.state.snakeDots[this.state.snakeDots.length - 1];
      if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
        this.onGameOver();
      }
    }
  
    checkIfCollapsed() {
      let snake = [...this.state.snakeDots];
      let head = snake[snake.length - 1];
      snake.pop();
      snake.forEach(dot => {
        if (head[0] === dot[0] && head[1] === dot[1]) {
          this.onGameOver();
        }
      })
    }
    increaseSpeed() {
      if (this.state.speed > 20) {
        this.setState({
          speed: this.state.speed-10
        })
      }
    clearInterval(this.interval);
    this.interval = setInterval(this.moveSnake, this.state.speed);

    }
  
  
    checkIfEat() {
      let head = this.state.snakeDots[this.state.snakeDots.length - 1];
      let food = this.state.food;
      if (head[0] === food[0] && head[1] === food[1]) {
        this.setState({
          food: getRandomCoordinates()
        })
        var output = document.getElementById('score');
        output.innerHTML = "Score: "+(this.state.snakeDots.length*100-100);
        this.enlargeSnake();
        this.increaseSpeed();
      }
    }
  
    enlargeSnake() {
      let newSnake = [...this.state.snakeDots];
      newSnake.unshift([])
      this.setState({
        snakeDots: newSnake
      })
     
    }


    
    onGameOver() {
      var output = document.getElementById('score');
        output.innerHTML = "Score: "+(0);
        clearInterval(this.interval);
        this.interval = setInterval(this.moveSnake, this.state.speed);
    
      this.setState({
        gameOver:true
      })
      
    }

   
    //binded to play button to set playing to true
 
  
    render() {
    
       //displays actualy game that user plays
      
      if(this.state.gameOver)
      {
        return(<Fragment>
          <div className="game-area">
            <h1 className ="text-center mt-5 mb-5">Congrats on getting a score of {this.state.snakeDots.length*100-200}</h1>
             <InputHighScore score ={this.state.snakeDots.length*100-200} reset = {this.props.reset}/>
          </div>
          </Fragment>)
      }
      return (
        <Fragment>
        <h1 className ="text-center mt-5 " id="score">Score: 0</h1>
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots}/>
          <Food dot={this.state.food}/>
        </div>
       
        </Fragment>
      );
    

        }
    
   
}

export default game;