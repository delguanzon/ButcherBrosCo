import React from 'react';
import MeatList from './MeatList';
import { v4 } from 'uuid';
import inventory from '../assets/data';
import MeatDetails from './MeatDetails';
import MeatForm from './MeatForm';
import PopUp from './PopUp';

export default class MeatControl extends React.Component {

  constructor() {
    super();
    const currList = inventory.map(meat => { return (meat.id = v4(),{ ...meat})}) ;
    this.state = {
      formVisibleOnPage: false,
      masterMeatList: currList,
      selectedMeat: null
    };
  }
  

  showDetails = (id) => {
    const currMeatItem = this.state.masterMeatList.filter(meat => meat.id === id)[0];
    console.log(currMeatItem);
    this.setState({selectedMeat: currMeatItem});
  }

  handleClickClose = () => {
    this.setState({selectedMeat: null});
  }

  render() {

    let currentlyVisibleState = null;
    const blur = {
      filter: `blur(10px)`
    }
    if (this.state.selectedMeat != null) {
      currentlyVisibleState = <>
                                <PopUp
                                  meat = {this.state.selectedMeat} 
                                  clickClose={this.handleClickClose}
                                  // clickEdit={this.handleClickEdit}
                                />
                                <MeatList style={blur} list={this.state.masterMeatList}/>
                              </>;
    } else{
      currentlyVisibleState = <MeatList 
                                list={this.state.masterMeatList}
                                onMeatSelection={this.showDetails}
                                />
    }    
    return (
      <section className="meatControl container">        
        <button onClick={this.showDetails}>Add a Meat</button>
        {currentlyVisibleState}        
      </section>
    );
  }
}