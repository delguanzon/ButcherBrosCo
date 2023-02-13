import React from "react";

export default function MeatCard(props) {
  return (
    <div className="meatCard">
      <img src={`${props.imgUrl}`} className="card--image"/>
      <div className="meatCard--stats">
          <span className="card--star">⭐</span>
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount} Reviews)</span>
      </div>
      <p className="meatCard--title">{props.title}</p>
      <p className="meatCard--price">
          <span className="bold">${props.price}</span> ea
      </p>
    </div>
    
  );
}