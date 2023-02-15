import React from 'react';
import CardButtons from './CardButtons';
import MeatForm from './MeatForm';
import MeatDetails from './MeatDetails';

export default function PopUp(props) {

  const [isFormVisible, setIsFormVisible] = React.useState(true);
  const showForm = () => {
    setIsFormVisible(!isFormVisible);
  }
  let visiblesection = isFormVisible? <MeatForm meat={props.meat}/> : <MeatDetails meat={props.meat}/>;
  let submitButton = isFormVisible? <button className='btn btn-outline-light rounded-pill mx-1'>✔️</button> : null;

  return (
    <div className="card__lg z-1 position-absolute top-50 start-50 translate-middle">
      {/* <CardButtons 
        isClosed={props.clickClose}
        // isEditable={props}
        /> */}
      <div className="card__lg--buttons mb-3">
        <button 
          onClick={props.clickClose}
          className='btn btn-outline-light rounded-pill mx-1'>❌</button>
        <button 
          className='btn btn-outline-light rounded-pill mx-1'
          onClick={showForm}>✏️</button>
        {submitButton}
      </div>
      {/* <MeatForm meat={props.meat}/> */}
      {visiblesection}
    </div>    
  )
}