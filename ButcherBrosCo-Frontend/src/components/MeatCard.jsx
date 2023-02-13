import React from "react";

export default function MeatCard(props) {
  return (
    <div className="meatCard" onClick={() => props.clicked(props.id)}>
      <div className="meatCard__div--img">  
        <img src={`${props.imgUrl}`} className="meatCard--image"/>
      </div>
      <p className="meatCard--name">{props.name}</p>      
      <div className="meatCard--stats">
          <span className="card--star">⭐</span>
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount} Reviews)</span>
      </div>
      <hr/>
      <p className="meatCard--weight">
          {props.weight}
      </p>
      <p className="meatCard--price">
          <strong>${props.price}</strong> ea
      </p>
    </div>
    
  );
}