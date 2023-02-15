import React from 'react';
import CardButtons from './CardButtons';

export default function MeatForm(props) {
  return (
    <>
      <form>
        <div className="row mb-3">
          <label htmlFor="meat-img" className='col-3 col-form-label'>Img URL: </label>
          <div className='col-9'>
            <input id="meat-img" type="text" className="form-control" defaultValue={props.meat.imgUrl}/>
          </div> 
        </div> 
        <div className="row mb-3">
          <label htmlFor="meat-name" className='col-3 col-form-label'>Name: </label>
          <div className='col-9'>
            <input id="meat-name" type="text" className="form-control" defaultValue={props.meat.name}/>
          </div> 
        </div>
        <hr/>
        <div className="row mb-3">
          <label htmlFor="meat-source" className='col-3 col-form-label'>Source: </label>
          <div className='col-9'>
            <input id="meat-source" type="text" className="form-control" defaultValue={props.meat.source}/>
          </div> 
        </div> 
        <div className="row mb-3">
          <label htmlFor="meat-grading" className='col-3 col-form-label'>Grading: </label>
          <div className='col-9'>
            <input id="meat-grading" type="text" className="form-control" defaultValue={props.meat.grading}/>
          </div> 
        </div> 
        <div className="row mb-3">
          <label htmlFor="meat-breed" className='col-3 col-form-label'>Breed: </label>
          <div className='col-9'>
            <input id="meat-breed" type="text" className="form-control" defaultValue={props.meat.breed}/>
          </div> 
        </div> 
        <div className="row mb-3">
          <label htmlFor="meat-weight" className='col-3 col-form-label'>Weight: </label>
          <div className='col-9'>
            <input id="meat-weight" type="text" className="form-control" defaultValue={props.meat.weight}/>
          </div> 
        </div>
        <div className="row mb-3">
          <label htmlFor="meat-price" className='col-3 col-form-label'>Price: </label>
          <div className='col-4'>
            <input id="meat-price" type="number" min="0"  className="form-control" defaultValue={props.meat.price}/>
          </div>
          <label htmlFor="meat-qty" className='col-2 col-form-label'>Qty:</label>
          <div className='col-3'>
            <input id="meat-qty" type="number" min="0" className="form-control" defaultValue={props.meat.quantity}/>
          </div> 
        </div>
      </form>
    </>
    
  )
}