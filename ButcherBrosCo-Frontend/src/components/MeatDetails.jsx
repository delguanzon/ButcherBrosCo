import React from 'react';
import CardButtons from './CardButtons';

export default function MeatDetails(props) {
  return (
    <div className="card__lg">
      <CardButtons 
        isClosed={props.clickClose}
        // isEditable={props}
        />
      <div className="meatCard__div--img">  
        <img src={`${props.meat.imgUrl}`} className="meatCard--image"/>
      </div>
      <p className="meatCard--name">{props.meat.name}</p>      
      <div className="meatCard--stats">
          <span className="card--star">⭐</span>
          <span>{props.meat.stats.rating}</span>
          <span className="gray">({props.meat.stats.reviewCount} Reviews)</span>
      </div>
      <hr/>      
      <p className="meatCard--weight">
          {props.meat.weight}
      </p>
      <p className="meatCard--price">
          <strong>${props.meat.price}</strong> ea
      </p>
    </div>
    
  )
}