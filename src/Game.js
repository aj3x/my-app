import React, { Component } from 'react';
import './Game.css';

function Square(props) {
  return (
    <button key={props.value} className={props.won} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
  
class Board extends Component {
  renderSquare(i) {
    const winSqr = this.props.winarr && this.props.winarr.includes(i) ? "square-won" : "square";
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        won= {winSqr}
      />
    );
  }

  render() {
    var rows = [];
    for(let i=0;i<3;i++){
      var cols = [];
      for(let j=0;j<3;j++){
        cols.push(this.renderSquare(i*3+j));
      }
      rows.push(<div key={i} className="board-row"> {cols} </div>)
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}
  
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          pos: undefined,
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      reversed: false,
      won: [],
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          pos: i,
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  reverse(){
    this.setState({
      reversed: !this.state.reversed,
    });
  }

  render() {
    var history = this.state.history.slice();
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    if(this.state.reversed){
      history.reverse();
    }

    const moves = history.map((step, move) => {
      const remain = step.pos % 3;
      const last = (step.pos - remain) /3;
      const tmove = this.state.reversed ? history.length-1 -move : move;
      const desc = tmove ?
        'Go to move #' + tmove + "("+last+","+remain+")":
        'Go to game start';

      const strong = this.state.stepNumber === tmove ? <strong>{desc}</strong>:desc;
      return (
        <li key={tmove}>
          <button onClick={() => this.jumpTo(tmove)}>{strong}</button>
        </li>
      );
    });

    let status;
    var winarr;
    if (winner) {
      status = "Winner: " + winner;
      winarr = winner[0];
    } else if(this.state.stepNumber === 9){
      status = "Draw Game."
    }else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    const reversed = this.state.reversed ? <ol reversed>{moves}</ol> : <ol>{moves}</ol>;
    const rev_text = this.state.reversed ? "Descending" : "Ascending"
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            winarr={winarr}
          />
        </div>
        <div className="game-info">
          <button onClick={()=>this.reverse()}>{rev_text}</button>
          <div>{status}</div>
          {reversed}
        </div>
      </div>
    );
  }
}
  
  // ========================================
  
//   ReactDOM.render(<Game />, document.getElementById("root"));
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        
        return [lines[i],squares[a]];
      }
    }
    return null;
  }

export default Game;
  