import { useState } from "react";

/* eslint-disable react/prop-types */
function Squre() {  
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
  
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg" onClick={handleClick}>{ value}</button>
  )
}

export default function Board() {
  const [squres, setSqures] = useState(Array(9).fill(null));
  return (
      <>
          <div className="flex">
            <Squre />
            <Squre />
            <Squre />
          </div>
          <div className="flex">
            <Squre />
            <Squre />
            <Squre />
          </div>
          <div className="flex">
           <Squre />
           <Squre />
           <Squre />
          </div>   
      
      
    </>
  )
}
