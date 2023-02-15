import React from 'react';
import CardButtons from './CardButtons';
import MeatForm from './MeatForm';
import MeatDetails from './MeatDetails';

export default function PopUp(props) {

  const [isFormVisible, setIsFormVisible] = React.useState(true);
  const showForm = () => {
    setIsFormVisible(!isFormVisible);
  }
  let visiblesection = isFormVisible? <MeatForm meat={props.meat}/> : <MeatDetails meat={props.meat}/> ;
  return (
    <div className="card__lg">
      {/* <CardButtons 
        isClosed={props.clickClose}
        // isEditable={props}
        /> */}
      <div className="card__lg--buttons">
        <button 
          onClick={props.clickClose}
          className='btn btn-outline-light rounded-pill'>✖️</button>
        <button 
          className='btn btn-outline-light rounded-pill'
          onClick={showForm}>✏️</button>
        <button className='btn btn-outline-light rounded-pill'>✔️</button>
      </div>
      {/* <MeatForm meat={props.meat}/> */}
      {visiblesection}
    </div>    
  )
}