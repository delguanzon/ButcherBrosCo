import React from 'react';
import CardButtons from './CardButtons';

export default function MeatDetails(props) {

  const [meatCount, setMeatCount] = React.useState(props.meat.quantity);

  const sellMeat = () => {
    if(meatCount === 0) return;
    setMeatCount( meatCount => meatCount - 1);
    props.onSellMeat({...props.meat, quantity : meatCount});
  }


  return (
    <>
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
          <strong>Source: </strong>{props.meat.source}
      </p>
      <p className="meatCard--weight">
          <strong>Meat Profile: </strong>{props.meat.profile}
      </p>
      <p className="meatCard--weight">
          <strong>Grading: </strong>{props.meat.grading}
      </p>
      <p className="meatCard--weight">
          <strong>Breed: </strong>{props.meat.breed}
      </p>
      <p className="meatCard--weight">
          <strong>Weight: </strong>{props.meat.weight}
      </p>
      <p className="meatCard--qty">
          <span><strong>${props.meat.price}</strong> ea</span>
          <span>Remaining Qty: <strong>{meatCount}</strong></span>
          <button onClick={sellMeat}>Sell x1</button>
      </p>
    </>
    
  )
}