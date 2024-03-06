/* eslint-disable react/prop-types */
function Squre({ value }) {  
  
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg" onClick={handleClick}>{value}</button>
  )
}

export default function Board() {
  return (
      <>
          <div>
            <Squre value='1'/>
            <Squre value='2'/>
            <Squre value='3'/>
          </div>
          <div>
            <Squre value='4'/>
            <Squre value='5'/>
            <Squre value='6'/>
          </div>
          <div>
           <Squre value='7'/>
           <Squre value='8'/>
           <Squre value='9'/>
          </div>   
      
      
    </>
  )
}
