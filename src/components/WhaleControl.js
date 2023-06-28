import React from 'react';
import WhaleList from './WhaleList';
import NewWhaleForm from "./NewWhaleForm";
import WhaleDetail from './WhaleDetail';

class WhaleControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainWhaleList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddNewWhaleToList = (newWhale) => {
    const newWhaleList = this.state.mainWhaleList.concat(newWhale);
    this.setState({mainWhaleList: newWhaleList,
    formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewWhaleForm onNewWhaleCreation={this.handleAddNewWhaleToList} />;
      buttonText = "Return to Whale List";
    } else {
      currentlyVisibleState = <WhaleList whaleList={this.state.mainWhaleList} />;
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