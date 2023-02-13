import React from 'react';
import MeatList from './MeatList';
import { v4 } from 'uuid';

export default class MeatControl extends React.Component {

  constructor() {
    super();
    this.state = {
      formVisibleOnPage: false,
      masterMeatList: [],
      selectedMeat: null
    };
  }

  

  render() {
    return (
      <>
      <MeatList />
      </>
    );
  }
}