import React from "react";

export default function CardButtons(props){
  return (
    <div className="card__lg--buttons">
      <button 
        onClick={()=>props.isClosed()}
        className='btn btn-outline-light rounded-pill'>✖️</button>
      <button className='btn btn-outline-light rounded-pill'>✏️</button>
    </div>
  )
}