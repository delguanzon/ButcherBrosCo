import React from 'react';
import CardButtons from './CardButtons';
import MeatForm from './MeatForm';
import MeatDetails from './MeatDetails';

export default function PopUp(props) {

  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const showForm = () => {
    setIsFormVisible(!isFormVisible);
  }
  let visiblesection = isFormVisible? <MeatForm meat={props.meat}
                                                onSubmitEdit={props.submitEdit}
                                                formType="edit"/> : <MeatDetails meat={props.meat}/>;
  
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
      </div>
      {/* <MeatForm meat={props.meat}/> */}
      {visiblesection}
    </div>    
  )
}