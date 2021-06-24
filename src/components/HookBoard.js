import React, {useState} from 'react';
import HookSquare from './HookSquare'

 function HookBoard() {
        //initial board
     const  [value,setValue] =  useState(Array(9).fill(null));

     const [xValue,setXValue] = useState(true);

     //OnClick
     const handleClick= i => {

        const squares =[...value];
        if(calculateWinner(value)||squares[i]) return;

        squares[i]=xValue ? "X" : "O";

        setValue(squares);

        setXValue(!xValue);
     };

     const renderHookSquare = i => {
         return (
             <HookSquare  value= {value[i]} onClick = {()=> handleClick(i)} />
            );
         
     };
    let status;
    const winner =calculateWinner(value);
    status=winner ? "Winner is:" + (winner): "Next player:" + (xValue ? "X" : "O");
    
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
              { renderHookSquare(0)}
              { renderHookSquare(1)}
              { renderHookSquare(2)}
            </div>
            <div className="board-row">
              {renderHookSquare(3)}
              {renderHookSquare(4)}
              {renderHookSquare(5)}
            </div>
            <div className="board-row">
              {renderHookSquare(6)}
              {renderHookSquare(7)}
              {renderHookSquare(8)}
            </div>
          </div>
    );
}

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
      return squares[a];
    }
  }
  return null;
}

export default HookBoard
