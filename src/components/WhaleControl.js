import React from 'react';
import WhaleList from './WhaleList';
import NewWhaleForm from "./NewWhaleForm";

class WhaleControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainWhaleList: []
    };
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewWhaleForm />
      buttonText = "Return to Whale List";
    } else {
      currentlyVisibleState = <WhaleList whaleList={this.state.mainWhaleList} />
      buttonText = "Add Whale";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default WhaleControl;