import React from "react";
import PropTypes from "prop-types";

export default function MeatCard(props) {
  let restock
  if (props.quantity <= 20 && props.quantity >0 ) {
    restock = true;
  }
  return (
    <div className="meatCard" onClick={() => props.clicked(props.id)}>
      
      <div className="meatCard__div--img position-relative">  
        <img src={`${props.imgUrl}`} className="meatCard--image"/>        
        {props.stats.rating > 4 ? <div className="badge text-bg-success z-1 position-absolute top-0 start-0">Top Rated</div> : null}
      </div>
      {props.quantity <=0 ? <div className="badge text-bg-danger">Out of Stock</div> : null}
      {restock && <div className="badge text-bg-warning">Restock Soon</div> }
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
          <strong>${props.price.toFixed(2)}</strong> ea
      </p>
    </div>
    
  );
}

MeatCard.propTypes = {
  name: PropTypes.string,    
  source: PropTypes.string,
  quantity: PropTypes.number,
  grading: PropTypes.string,
  breed: PropTypes.string,
  weight: PropTypes.string,
  price: PropTypes.number,
  
  stats: PropTypes.shape({
    reviewCount: PropTypes.number,
    rating: PropTypes.number,
  })  
}