import { useState } from "react";

/* eslint-disable react/prop-types */
function Squre({value, onSquareClick}) {  
  
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg" onClick={onSquareClick}>{ value}</button>
  )
}

export default function Board() {
  const [squres, setSqures] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squres[i]){
      return;
    }
    const nextSqures = squres.slice();
    if (xIsNext) {
      nextSqures[i] = 'X';
    } else {
      nextSqures[i] = 'O';
    }
   
    setSqures(nextSqures);
    setXIsNext(!xIsNext);
  }
  return (
      <>
          <div className="flex">
            <Squre value={squres[0]} onSquareClick={()=>handleClick(0)}/>
            <Squre value={squres[1]} onSquareClick={()=>handleClick(1)}/>
            <Squre value={ squres[2]} onSquareClick={()=>handleClick(2)}/>
          </div>
          <div className="flex">
            <Squre value={ squres[3]} onSquareClick={()=>handleClick(3)}/>
            <Squre value={ squres[4]} onSquareClick={()=>handleClick(4)}/>
            <Squre value={ squres[5]} onSquareClick={()=>handleClick(5)}/>
          </div>
          <div className="flex">
           <Squre value={ squres[6]} onSquareClick={()=>handleClick(6)}/>
           <Squre value={ squres[7]} onSquareClick={()=>handleClick(7)}/>
           <Squre value={ squres[8]} onSquareClick={()=>handleClick(8)}/>
          </div>   
      
      
    </>
  )
}
