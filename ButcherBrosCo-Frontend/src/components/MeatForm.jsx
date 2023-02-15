import React from 'react';
import { v4 } from 'uuid';

export default function MeatForm(props) {

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(props.formType === "edit") {
      props.onSubmitEdit({
        ...props.meat,
        id: props.meat.id,
        imgUrl: event.target.meatImg.value || props.meat.imgUrl,
        name: event.target.meatName.value || props.meat.name,
        source: event.target.meatSource.value || props.meat.source,
        grading: event.target.meatGrading.value || props.meat.grading,
        breed: event.target.meatBreed.value || props.meat.breed,
        weight: event.target.meatWeight.value || props.meat.weight,
        price: event.target.meatPrice.value || props.meat.price,
        quantity: event.target.meatQty.value || props.meat.quantity
      },
      true);
    }

    else {
      props.onSubmitNew({        
        id: v4(),
        imgUrl: event.target.meatImg.value || "https://www.culinaryschools.org/clipart/meat/beef.gif",
        name: event.target.meatName.value,
        source: event.target.meatSource.value,
        grading: event.target.meatGrading.value,
        breed: event.target.meatBreed.value,
        weight: event.target.meatWeight.value,
        price: event.target.meatPrice.value,
        quantity: event.target.meatQty.value,
        profile: event.target.meatProfile.value,
        stats: {
          rating: 0,
          reviewCount: 0
        }        
      });
    }
  }
  

  return (
    <>
      <form onSubmit={formSubmissionHandler}>
        <div className="row mb-3">
          <label htmlFor="meatImg" className='col-3 col-form-label'>Img URL: </label>
          <div className='col-9'>
            <input id="meatImg" type="text" className="form-control" defaultValue={props.meat.imgUrl}/>
          </div> 
        </div> 
        <div className="row mb-3">
          <label htmlFor="meatName" className='col-3 col-form-label'>Name: </label>
          <div className='col-9'>
            <input id="meatName" type="text" className="form-control" defaultValue={props.meat.name}/>
          </div> 
        </div>
        <hr/>
        <div className="row mb-3">
          <label htmlFor="meatSource" className='col-3 col-form-label'>Source: </label>
          <div className='col-9'>
            <input id="meatSource" type="text" className="form-control" defaultValue={props.meat.source}/>
          </div> 
        </div> 
        <div className="row mb-3">
          <label htmlFor="meatProfile" className='col-3 col-form-label'>Meat Profile: </label>
          <div className='col-9'>
            <input id="meatProfile" type="text" className="form-control" defaultValue={props.meat.profile}/>
          </div> 
        </div> 
        <div className="row mb-3">
          <label htmlFor="meat-grading" className='col-3 col-form-label'>Grading: </label>
          <div className='col-9'>
            <input id="meatGrading" type="text" className="form-control" defaultValue={props.meat.grading}/>
          </div> 
        </div> 
        <div className="row mb-3">
          <label htmlFor="meatBreed" className='col-3 col-form-label'>Breed: </label>
          <div className='col-9'>
            <input id="meatBreed" type="text" className="form-control" defaultValue={props.meat.breed}/>
          </div> 
        </div> 
        <div className="row mb-3">
          <label htmlFor="meatWeight" className='col-3 col-form-label'>Weight: </label>
          <div className='col-9'>
            <input id="meatWeight" type="text" className="form-control" defaultValue={props.meat.weight}/>
          </div> 
        </div>
        <div className="row mb-3">
          <label htmlFor="meatPrice" className='col-3 col-form-label'>Price: </label>
          <div className='col-4'>
            <input id="meatPrice" type="number" min="0"  className="form-control" defaultValue={props.meat.price}/>
          </div>
          <label htmlFor="meatQty" className='col-2 col-form-label'>Qty:</label>
          <div className='col-3 mb-3'>
            <input id="meatQty" type="number" min="0" className="form-control" defaultValue={props.meat.quantity}/>
          </div>
        </div>
        <div className="row mx-auto">
            <button type="submit" className="btn btn-outline-success rounded-pill mx-1">Submit ✓</button>
          </div>
      </form>
    </>
    
  )
}